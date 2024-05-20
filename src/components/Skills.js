import { Row, Container, Col } from "react-bootstrap";
import { skills } from "../helper/skills";

import TrackVisibility from "react-on-screen";
import "animate.css";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated  animate__rubberBand " : ""
                  }
                >
                  <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>
                      Professional in various frameworks and languages,
                      including...
                    </p>
                    <Row className="items">
                      {skills.map((item, index) => (
                        <Col
                          key={index}
                          className={
                            isVisible
                              ? "animate__animated animate__pulse animate__repeat-3 animate__delay-1s animate__slow"
                              : ""
                          }
                        >
                          <img src={item.img} alt={item.title} />
                          <h5 className="title">{item.title} </h5>
                        </Col>
                      ))}
                    </Row>
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
