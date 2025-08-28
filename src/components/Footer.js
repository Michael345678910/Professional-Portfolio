// Layout from React-Bootstrap
import { Container, Row, Col } from "react-bootstrap";
// Your site logo (SVG)
import logo from "../assets/img/logo.svg";
// Social icons
import navIconLinkedIn from "../assets/img/nav-icon-linkedin.svg";
import navIconGitHub from "../assets/img/nav-icon-github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* Left side: logo */}
          <Col size={12} sm={6}>
            {/* Use an <img> so non-SVG fallbacks are easy and alt text is provided */}
            <img src={logo} alt="Logo" />
          </Col>

          {/* Right side: social icons + copyright */}
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              {/* LinkedIn: open in new tab, add rel for security, and aria label for accessibility */}
              <a
                href="https://www.linkedin.com/in/michael-pallwitz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img src={navIconLinkedIn} alt="LinkedIn" />
              </a>

              {/* GitHub: same considerations as above */}
              <a
                href="https://github.com/Michael345678910"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <img src={navIconGitHub} alt="GitHub" />
              </a>
            </div>

            {/* Keep the year text generic so you don’t have to manually update it */}
            <p>(Fake) Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};