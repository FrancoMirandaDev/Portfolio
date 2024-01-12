import { Row, Container, Col } from "react-bootstrap";

import Img1 from "../assets/img/javascript.svg";
import Img2 from "../assets/img/html5.svg";
import Img3 from "../assets/img/css.svg";
import Img4 from "../assets/img/react.svg";
import Img5 from "../assets/img/nodejs.svg";
import Img6 from "../assets/img/bootstrap.svg";
import Img7 from "../assets/img/express.svg";
import Img8 from "../assets/img/mongodb.svg";
import Img9 from "../assets/img/nextjs-3.svg";
import Img10 from "../assets/img/git.svg";
import Img11 from "../assets/img/typescript.svg";
import Img12 from "../assets/img/mysql.svg";
import Img13 from "../assets/img/postgresql.svg";
import Img14 from "../assets/img/redux.svg";
import Img15 from "../assets/img/docker.svg";

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
                      {[
                        { img: Img1, title: "JavaScript" },
                        { img: Img11, title: "TypeScript" },
                        { img: Img2, title: "Html5" },
                        { img: Img3, title: "Css3" },
                        { img: Img5, title: "Node Js" },
                        { img: Img4, title: "React Js" },
                        { img: Img14, title: "Redux" },
                        { img: Img6, title: "Bootstrap" },
                        { img: Img7, title: "Express" },
                        { img: Img9, title: "Next Js" },
                        { img: Img12, title: "SQL" },
                        { img: Img8, title: "MongoDB" },
                        { img: Img13, title: "PostgreSQL" },
                        { img: Img10, title: "Git" },
                        { img: Img15, title: "Docker" },
                      ].map((item, index) => (
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
