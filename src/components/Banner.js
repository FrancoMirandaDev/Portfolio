import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import headerimg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Cv from "../assets/doc/Cv_Franco_Miranda(ENG).pdf";

import TrackVisibility from "react-on-screen";
import "animate.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, SetIsDeleting] = useState(false);
  const toRotate = ["FullStack Dev", "Back End Dev", "Front End Dev"];
  const [text, SetText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    SetText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      SetIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      SetIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInLeft" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I'm Franco Miranda `}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    I am Full Stack Developer with over 1 year of experience in
                    web development and a solid background in Computer
                    Engineering.
                    <br />I am actively seeking opportunities to effectively
                    showcase both my technical expertise and my interpersonal
                    skills.
                  </p>
                  <a href={Cv} download="CV_Franco_Miranda.pdf">
                    <button
                      className={
                        isVisible
                          ? "animate__animated animate__headShake animate__delay-2s animate__infinite"
                          : ""
                      }
                    >
                      Download CV
                    </button>
                  </a>
                  <a href="#connect">
                    <button
                      className={
                        isVisible
                          ? "animate__animated animate__headShake animate__delay-2s animate__infinite"
                          : ""
                      }
                    >
                      Let's connect <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerimg} alt="Headder Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
