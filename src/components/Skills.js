// UI building blocks and progress bars
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
// Animate section when visible
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Skills = () => {
  // ====== Data model: edit these arrays to customize your skills ======

  // Technical skills grouped by category; each entry has a name and “level” (0–100)
  const skills = {
    Languages: [
      { name: "Python", level: 90 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "C#", level: 80 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 80 },
      { name: "HTML & CSS", level: 95 },
    ],
    Frameworks: [
      { name: "React", level: 85 },
      { name: "Node.js / Express", level: 80 },
      { name: "Bootstrap", level: 80 },
      { name: "Tailwind CSS", level: 70 },
      { name: "Tkinter (Python)", level: 90 },
      { name: "Pandas / NumPy", level: 80 },
      { name: "Matplotlib / Plotly / Seaborn", level: 85 },
      { name: "Scikit-learn", level: 75 },
      { name: ".NET Framework / .NET Core", level: 85 },
      { name: "WinForms / WPF", level: 80 },
      { name: "JavaFX / Swing", level: 75 },
      { name: "JUnit", level: 75 },
      { name: "Spring Boot", level: 75 },
    ],
    Tools: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code/IDE Utilization", level: 95 },
      { name: "Docker / Containers", level: 70 },
      { name: "Linux / WSL", level: 70 },
      { name: "Inkscape / Figma", level: 70 },
      { name: "Oracle", level: 65 },
    ],
    "Cybersecurity & Systems": [
      { name: "Phishing/Incident Response", level: 75 },
      { name: "System/Network Fundamentals", level: 65 },
      { name: "Hardening & Best Practices", level: 75 },
    ],
  };

  // Degrees & certifications (rendered as 4-up cards)
  const certifications = [
    "Computer Science B.S. Degree (Western Governors University)",
    "Computer and Information Systems Security/Information A.A.S. Degree (DMACC)",
    "Computer Languages Diploma (DMACC)",
    "Python Application Developer Certification (DMACC)",
    "C# Developer Certification (DMACC)",
    "SQL Application Developer Certification (DMACC)",
    "Java Application Developer Certification (DMACC)",
    "Linux Essentials Certification (LPI)",
    "monday.com Work Management Core Certification (monday.com)",
    "monday.com API Fundamentals Certification (monday.com)",
  ];

  // Leadership highlights (rendered as chips)
  const leadership = [
    "Led Teams of (70–215 people)",
    "Coaching & mentoring",
    "Process optimization",
    "P&L & operations management",
    "Contract negotiation",
    "Vendor management",
    "Cross-functional collaboration",
    "Customer experience (CX) improvements",
  ];

  // Business & analytics strengths (chips)
  const businessAnalytics = [
    "KPI dashboards & reporting",
    "Data-driven decision making",
    "Predictive analytics",
    "Pricing & margin analysis",
    "Project management",
    "Stakeholder communication",
  ];

  // Other / soft skills (chips)
  const otherSkills = [
    "Problem solving",
    "Ownership & accountability",
    "Clear written & verbal communication",
    "Systems thinking",
    "Attention to detail",
    "Continuous learning",
  ];

  // ====== Small presentational helpers ======

  // A single skill with a label and progress bar
  const SkillBar = ({ name, level }) => (
    <div className="skill-card">
      <div className="skill-top">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      {/* Use a subtle background and animated bar for visual feedback */}
      <ProgressBar
        now={level}
        animated
        variant="info"
        style={{ height: 10, background: "rgba(255,255,255,0.08)" }}
      />
    </div>
  );

  // Render a flexible row of “chips” (pills) for lists of strengths
  const ChipGroup = ({ items }) => (
    <div className="chip-group">
      {items.map((t, i) => (
        <span className="chip" key={i}>
          {t}
        </span>
      ))}
    </div>
  );

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col xs={12}>
            {/* Fade-in the section when it enters the viewport */}
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Skills</h2>
                  <h4>
                    Here is a list of different IT related skills and tech that I use and different
                    strengths that I bring to the table.
                  </h4>

                  {/* Technical sections with progress bars */}
                  {Object.entries(skills).map(([group, list]) => (
                    <div key={group} className="skill-group">
                      <h3 className="skill-heading">{group}</h3>
                      <Row>
                        {list.map((s, i) => (
                          <Col key={i} xs={12} md={6} className="mb-3">
                            <SkillBar name={s.name} level={s.level} />
                          </Col>
                        ))}
                      </Row>
                    </div>
                  ))}

                  {/* Certifications: 4 cards per row on desktop */}
                  <div className="skill-group">
                    <h3 className="skill-heading">Degrees, Diplomas, & Certifications</h3>
                    <Row>
                      {certifications.map((c, i) => (
                        <Col key={i} xs={12} sm={6} md={3} className="mb-4">
                          <div className="cert-card">{c}</div>
                        </Col>
                      ))}
                    </Row>
                  </div>

                  {/* Leadership chips */}
                  <div className="skill-group">
                    <h3 className="skill-heading">Leadership</h3>
                    <ChipGroup items={leadership} />
                  </div>

                  {/* Business & Analytics chips */}
                  <div className="skill-group">
                    <h3 className="skill-heading">Business & Analytics</h3>
                    <ChipGroup items={businessAnalytics} />
                  </div>

                  {/* Other / soft skills chips */}
                  <div className="skill-group">
                    <h3 className="skill-heading">Other Skills</h3>
                    <ChipGroup items={otherSkills} />
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};