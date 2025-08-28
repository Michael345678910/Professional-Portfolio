// React: track active link and scroll state
import { useState, useEffect } from "react";
// React-Bootstrap navbar primitives
import { Navbar, Nav, Container } from "react-bootstrap";
// Brand/logo and social icons
import logo from "../assets/img/logo.svg";
import navIconLinkedIn from "../assets/img/nav-icon-linkedin.svg";
import navIconGitHub from "../assets/img/nav-icon-github.svg";
// Smooth-scrolling to hash targets
import { HashLink } from "react-router-hash-link";
// Router wrapper so HashLink works across the app
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  // Which nav item is currently selected (purely visual highlight)
  const [activeLink, setActiveLink] = useState("home");
  // Whether page has scrolled far enough to apply a “scrolled” class (styling)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Handler toggles the scrolled flag once the user scrolls past 50px
    const onScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", onScroll);
    // Cleanup listener on unmount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Update the active link highlight when user clicks a nav item
  const onUpdateActiveLink = (value) => setActiveLink(value);

  return (
    // Router wrapper enables <HashLink> and anchors to work reliably
    <Router>
      {/* Add a .scrolled class for styling (e.g., dark background after scroll) */}
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          {/* Brand logo (clicking takes user to site root) */}
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>

          {/* Mobile hamburger toggle */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            {/* Right-aligned nav list */}
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="#skills"
                className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>

              <Nav.Link
                href="#projects"
                className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>

            {/* Social icons + CTA button */}
            <span className="navbar-text">
              <div className="social-icon">
                {/* External links: open in new tab + security rel */}
                <a
                  href="https://www.linkedin.com/in/michael-pallwitz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img src={navIconLinkedIn} alt="LinkedIn" />
                </a>

                <a
                  href="https://github.com/Michael345678910"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <img src={navIconGitHub} alt="GitHub" />
                </a>
              </div>

              {/* Smooth scroll to the contact section */}
              <HashLink smooth to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};