// Layout + tabs from React-Bootstrap
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// Reusable project card
import { ProjectCard } from "./ProjectCard";
// Background accent image
import colorSharp2 from "../assets/img/color-sharp2.png";
// Viewport-based animations
import "animate.css";
import TrackVisibility from "react-on-screen";

// Screenshots for each project card
import imgDigimon from "../assets/img/ultimate-digimon.png";
import imgMusic from "../assets/img/music-player.png";
import imgWgups from "../assets/img/wgups-simulation.png";
import imgSnake from "../assets/img/snake-csharp.png";
import imgSudoku from "../assets/img/sudoku-solver.png";
import imgHangman from "../assets/img/python-hangman.png";
import imgPets from "../assets/img/pets-to-go.png";
import imgWeather from "../assets/img/weather-scraper.png";
import imgNotes from "../assets/img/note-taking.png";

export const Projects = () => {
  // Tab 1 — Highlighted Projects (order as specified)
  const highlightedProjects = [
    {
      title: "Ultimate Digimon Classification Tool",
      description: "ML model and app for classifying Digimon.",
      githubUrl: "https://github.com/Michael345678910/Ultimate-Digimon-Classification-Tool",
      imgUrl: imgDigimon,
    },
    {
      title: "Music Player Playlist (Python)",
      description: "A Python-based music player with playlist features.",
      githubUrl: "https://github.com/Michael345678910/Music-Player-Playlist-Python",
      imgUrl: imgMusic,
    },
    {
      title: "WGUPS Delivery Management Simulation",
      description: "Simulation for optimizing package delivery routes.",
      githubUrl: "https://github.com/Michael345678910/WGUPS-Delivery-Management-System-Simulation",
      imgUrl: imgWgups,
    },
    {
      title: "Snake Game (C#)",
      description: "Classic Snake built in C#.",
      githubUrl: "https://github.com/Michael345678910/Snake-Game-C-Sharp",
      imgUrl: imgSnake,
    },
    {
      title: "Sudoku Auto Solver",
      description: "Automated Sudoku puzzle solver.",
      githubUrl: "https://github.com/Michael345678910/Sudoku-Auto-Solver",
      imgUrl: imgSudoku,
    },
    {
      title: "Python Hangman Game",
      description: "Interactive Hangman built with Tkinter.",
      githubUrl: "https://github.com/Michael345678910/Python-Hangman-Game",
      imgUrl: imgHangman,
    },
  ];

  // Tab 2 — Other Applications
  const otherProjects = [
    {
      title: "Pets To Go Mock Website",
      description: "A mock e-commerce site for pet supplies.",
      githubUrl: "https://github.com/Michael345678910/Pets-To-Go-Mock-Website",
      imgUrl: imgPets,
    },
    {
      title: "Weather.com Webscraper App",
      description: "Scrapes weather data programmatically.",
      githubUrl: "https://github.com/Michael345678910/Weather.com-Webscraper-Application",
      imgUrl: imgWeather,
    },
    {
      title: "Note Taking Application",
      description: "Simple note-taking app with persistence.",
      githubUrl: "https://github.com/Michael345678910/Note-Taking-Application",
      imgUrl: imgNotes,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            {/* Fade in the whole section as it becomes visible */}
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Highlighted work, other apps, and a look ahead 🚀</p>

                  {/* Tabs control which project list is visible */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="highlighted">
                    {/* Pills-style tab headers */}
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="highlighted">Highlighted Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="other">Other Applications</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="future">I'm Just Getting Started!</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    {/* Slide-in animation when content becomes visible */}
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      {/* Tab 1 content */}
                      <Tab.Pane eventKey="highlighted">
                        <Row>
                          {highlightedProjects.map((p, i) => (
                            <ProjectCard key={`h-${i}`} {...p} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Tab 2 content */}
                      <Tab.Pane eventKey="other">
                        <Row>
                          {otherProjects.map((p, i) => (
                            <ProjectCard key={`o-${i}`} {...p} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Tab 3 content: message + links */}
                      <Tab.Pane eventKey="future">
                        <div style={{ textAlign: "center", padding: "2rem" }}>
                          <h4>I'm just getting started!</h4>
                          <p>
                            I’m constantly learning and coming up with new projects/applications to develop.{" "}
                            Check my{" "}
                            <a
                              href="https://www.linkedin.com/in/michael-pallwitz/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              LinkedIn
                            </a>{" "}
                            for updates or explore more of my projects and applications on{" "}
                            <a
                              href="https://github.com/Michael345678910"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              GitHub
                            </a>
                            .
                          </p>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Subtle decorative background image (positioned via CSS) */}
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};