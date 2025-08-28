// Express server to handle contact form submissions and send emails via Gmail SMTP
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Initialize Express app
const app = express();

// Middleware: allow cross-origin requests (front-end at localhost:3000 can call localhost:5000)
app.use(cors());

// Parse JSON bodies in requests
app.use(express.json());

// Attach our router to root path
app.use("/", router);

// Start the server on port 5000
app.listen(5000, () => console.log("Server Running"));

// Log environment variables (if using .env file for credentials)
// NOTE: Avoid logging secrets in production
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

// Configure Nodemailer transport using Gmail SMTP
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // Hard-coded credentials (⚠️ insecure for production — use environment variables instead)
    user: "yourgmail@example.com",
    pass: "your_app_password_here" // should be app-specific password if using Gmail
  },
});

// Verify connection with mail server
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// Handle POST requests from the contact form
router.post("/contact", (req, res) => {
  // Extract fields from request body
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  // Build email payload
  const mail = {
    from: name,
    to: "yourgmail@example.com", // recipient (your inbox)
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  // Send email
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      // Send back error as JSON
      res.json(error);
    } else {
      // Indicate success with code 200
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});