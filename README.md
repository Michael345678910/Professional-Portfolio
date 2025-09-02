# Personal Portfolio React/Node.js Website 

# Overview:
This project is a full-stack personal portfolio website designed to showcase my technical projects, skills, certifications, and professional experience in a fun and interactive website. 

The **frontend** is built utilizing React and styled using modern CSS, HTML, and Bootstrap for responsiveness, while the **backend** leverages Node.js and Express to support dynamic functionality, such as the contact form (which is powered by Nodemailer). 

This portfolio project highlights my professional and academic projects across multiple technologies, demonstrates software engineering and leadership experience, and provides recruiters or collaborators with a central hub to view skills, certifications, and contact details to get in touch with me. 

The goal of this project is to serve as a living resume and professional showcase that integrates technical depth, design polish, and interactive features.
- **Interactive Banner** – Utilizes a Dynamic typewriter animation to introduce my different professional IT roles and strengths (Software Engineer, Full Stack Developer, etc.) 
- **Skills Section** – Visual progress bars to show how proficient/confident/knowledgeable I am utilizing a skill; categorized different skill groups, certifications, and leadership highlights 
- **Projects Section** – Organized with tabs for Highlighted Projects, Other Applications, and “I’m Just Getting Started!” for future growth opportunities 
- **Contact Form** – Fully functional form using Express and Nodemailer to send messages via email 
- **Responsive Design** – Built with React-Bootstrap to ensure mobile-friendly layouts 
- **Custom Styling** – Enhanced animations (Animate.css), interactive hover effects, and custom typography to enhance the portfolio and make it more engaging 
- **Scalable Backend** – Email handling separated via server.js with secure environment variables for credentials 

## Technologies Used:
### Frontend:
- React 18 
- React-Bootstrap 
- Bootstrap 5 
- Animate.css 
- React-on-Screen 

### Backend:
- Node.js 
- Express.js 
- CORS 
- Nodemailer 

### Other Tools & Assets:
- JavaScript (ES6+), HTML5, CSS3 
- Custom fonts (Centra) 
- Custom SVG/PNG assets (created via Inkscape) 
- Git & GitHub for version control 

# Usage Instructions:

# File Pathway Tree/ File Directory:
Please check the File Pathway Tree Document File found in this project's repository.

## Installation & Setup (Using VS code):
- 1.1 Download or clone this repository to your local machine.
- 1.2 Make sure VS code or a similar IDE compiler is installed on your machine.
- 2.1 Install the needed dependencies – React/Node.js - via the terminal on the IDE:
- npm install (Type this into the terminal)
- 3.1 Configure environment variables (For the contact form):
- 3.2 Create a .env file in the root with the following values (Currently left blank as to not leak my personal email/password):
- EMAIL_USER=your_gmail_here
- EMAIL_PASS=your_app_password_here
- ⚠️ Use a Gmail App Password, not your personal Gmail password.
- 4.1 Start the backend server (for contact form functionality):
- node server.js (Type this into the terminal)
- 4.2 The backend will then begin running at http://localhost:5000
- 5.1 How to start the frontend for the React application:
- npm start (Type this into the terminal)
- 5.2 The site will run at http://localhost:3000
- 5.3 The page will automatically reload when you make and save any changes. If there are any errors or warnings, you also will see them in the console.

## How It Works:
- Frontend – React components (Banner, Skills, Projects, Contact, Footer) dynamically render content and provide interactive features for users to click on and explore.
- Contact Form – Submits form data to the Express backend (/contact route). Nodemailer relays the email to your Gmail inbox so that you can reply in a timely manner.
- Projects Section – Uses React-Bootstrap Tabs to organize projects into categories, with GitHub links and thumbnails for each project displayed.
- Skills Section – Organized arrays map into progress bars, certification cards, and badges for clear visual representation.
- Styling – Centralized in App.css with responsive layouts, hover animations, and custom theming to give the project further personality and a confined continuous matching theme.

# Contributing To the Codebase:

Contributions are welcome! Fork this repository, and use it to make your own personal portfolio project! Or if you catch something in my program that I missed or if you come up with a new feature to add to the site, create a new branch for your feature/fix. 
