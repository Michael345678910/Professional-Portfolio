// React hooks for state and lifecycle
import { useState, useEffect } from "react";
// Layout components from React-Bootstrap
import { Container, Row, Col } from "react-bootstrap";
// Hero illustration (SVG you created)
import headerImg from "../assets/img/header-img.svg";
// Icon used in the "Let’s Connect" button
import { ArrowRightCircle } from 'react-bootstrap-icons';
// CSS animation helper classes
import 'animate.css';
// Tracks if an element is in the viewport (for entrance animations)
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  // Index of which phrase in `toRotate` we’re currently animating
  const [loopNum, setLoopNum] = useState(0);
  // Whether we are deleting characters (vs typing)
  const [isDeleting, setIsDeleting] = useState(false);
  // The current, partially typed text shown in the UI
  const [text, setText] = useState('');
  // Typing speed (ms). We randomize a bit so it feels more human.
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // Cursor position used to manage typing/deleting progression
  const [index, setIndex] = useState(1);

  // Titles that will be typed/deleted in a loop
  const toRotate = [ "Software Engineer", "Full Stack Web Developer", "UI/UX Designer", "Python Enthusiast", "C# Developer", "Java Programmer" ];
  // Pause length (ms) to hold a full word before deleting
  const period = 2000;

  useEffect(() => {
    // Re-run typing logic at the current speed (`delta`)
    // Whenever `text` changes, we re-schedule the timer with the latest delay.
    const ticker = setInterval(() => {
      tick();
    }, delta);

    // Cleanup: avoid overlapping timers
    return () => clearInterval(ticker);
  }, [text, delta]); // include delta so speed updates take effect immediately

  // Handles the “typewriter” effect for one step (type or delete a character)
  const tick = () => {
    // Which phrase are we on? (wraps around)
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    // Either add or remove one character
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // Speed up deletion for a snappier feel
    if (isDeleting) {
      setDelta((prev) => prev / 2);
    }

    // If we just finished typing a whole word, start deleting after a pause
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prev) => prev - 1);
      setDelta(period); // hold the full word on screen
    }
    // If we finished deleting the whole word, move to the next one
    else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1); // next phrase
      setIndex(1);
      setDelta(500); // typing speed when starting a new word
    }
    // Otherwise, keep typing/deleting
    else {
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        {/* NOTE: there’s a small class typo in the original template: "aligh-items-center".
            Bootstrap’s class is "align-items-center". Leaving as-is to avoid changing behavior. */}
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {/* Tagline above the main heading */}
                <span className="tagline">Welcome to my Professional IT focused Portfolio</span>

                {/* Heading with typewriter text */}
                <h1>
                  {/* Static prefix text */}
                  {`Hi! I'm Michael, I am a `}{" "}
                  {/* Wrapper for the animated text */}
                  <span className="txt-rotate">
                    <span className="wrap">{text}</span>
                  </span>
                </h1>

                {/* Short intro paragraph */}
                <p>
                  I am an IT professional and proven leader with a strong background in software development,
                  data integration, and operational management. My experience spans developing enterprise-level applications,
                  building predictive analytics tools, and leading large teams to deliver measurable improvements in efficiency,
                  profitability, and customer satisfaction. I have successfully managed multimillion-dollar contracts,
                  spearheaded process automation that eliminated redundant work, and implemented cybersecurity measures that safeguarded
                  critical assets. With a blend of technical expertise and leadership experience, I excel at driving innovation,
                  optimizing workflows, and delivering impactful solutions in fast-paced environments.
                </p>

                {/* Smooth scroll to the contact section */}
                <button onClick={() => document.getElementById("connect").scrollIntoView({ behavior: "smooth" })}>
                  Let’s Connect <ArrowRightCircle size={25} />
                </button>
              </div>}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                // Show the hero image with a zoom-in animation when it enters the viewport
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};