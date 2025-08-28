import { Col } from "react-bootstrap";

// Reusable card that displays a project thumbnail, title, description,
// and an optional GitHub link. Used by the Projects section.
// Props:
// - title: string
// - description: string
// - imgUrl?: string (optional thumbnail)
// - githubUrl?: string (optional repo link)
export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  return (
    // Responsive column: 1 per row (xs), 2 per row (sm), 3 per row (md+)
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx">
        {/* Only render image if provided (prevents broken images) */}
        {imgUrl && <img src={imgUrl} alt={title} />}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>

          {/* Optional GitHub link (opens in new tab) */}
          {githubUrl && (
            <div style={{ marginTop: "10px" }}>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-proj"
              >
                View on GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </Col>
  );
};