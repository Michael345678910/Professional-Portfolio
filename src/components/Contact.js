// Local form state management
import { useState } from "react";
// Layout components from React-Bootstrap
import { Container, Row, Col } from "react-bootstrap";
// Illustration next to the form
import contactImg from "../assets/img/contact-img.svg";
// Reveal animations
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  // Initial empty form values
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  // Controlled inputs state
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  // Button text gives user feedback while sending
  const [buttonText, setButtonText] = useState('Send');
  // Status object to show success/error messages
  const [status, setStatus] = useState({});

  // Generic update helper for any field
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  // Submit handler: POST the form to your Node/Express backend
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default HTML form submission
    setButtonText("Sending...");

    // Send JSON to the local API endpoint
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });

    // Restore button label
    setButtonText("Send");

    // Expect a JSON payload with a 'code' we can check
    const result = await response.json();

    // Reset the form after submit (success or fail)
    setFormDetails(formInitialDetails);

    // Display a user-friendly message
    if (result.code == 200) {
      setStatus({ success: true, message: 'Message sent successfully' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          {/* Illustration column */}
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                />
              }
            </TrackVisibility>
          </Col>

          {/* Form column */}
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>

                  {/* Controlled form */}
                  <form onSubmit={handleSubmit}>
                    <Row>
                      {/* First Name */}
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                        />
                      </Col>

                      {/* Last Name */}
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        />
                      </Col>

                      {/* Email */}
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                        />
                      </Col>

                      {/* Phone */}
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                      </Col>

                      {/* Message */}
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                        ></textarea>

                        {/* Submit */}
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>

                      {/* Inline success/error feedback (only renders if message exists) */}
                      {status.message && (
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};