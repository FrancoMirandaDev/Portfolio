import { Row, Container, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Img1 from "../assets/img/javascript.svg";
import Img2 from "../assets/img/html5.svg";
import Img3 from "../assets/img/css.svg";
import Img4 from "../assets/img/react.svg";
import Img5 from "../assets/img/nodejs.svg";
import Img6 from "../assets/img/bootstrap.svg";
import Img7 from "../assets/img/express-2.svg";
import Img8 from "../assets/img/mongodb.svg";
import Img9 from "../assets/img/nextjs-2.svg";
import Img10 from "../assets/img/github.svg";

import TrackVisibility from "react-on-screen";
import "animate.css";

export const Skills = () => {
  const responsive = {
    SuperLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__backInLeft" : ""
                  }
                >
                  <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>
                      These are the frameworks and languages with which I work
                      and constinuosly learn
                    </p>
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      className="skill-slider"
                    >
                      <div className="item">
                        <img src={Img1} alt="img" />
                        <h5>Javascript</h5>
                      </div>
                      <div className="item">
                        <img src={Img2} alt="img" />
                        <h5>Html5</h5>
                      </div>
                      <div className="item">
                        <img src={Img3} alt="img" />
                        <h5>Css3</h5>
                      </div>
                      <div className="item">
                        <img src={Img4} alt="img" />
                        <h5>React Js</h5>
                      </div>
                      <div className="item">
                        <img src={Img5} alt="img" />
                        <h5>Node Js</h5>
                      </div>
                      <div className="item">
                        <img src={Img6} alt="img" />
                        <h5>Bootstrap</h5>
                      </div>
                      <div className="item">
                        <img src={Img7} alt="img" />
                        <h5>Express</h5>
                      </div>
                      <div className="item">
                        <img src={Img8} alt="img" />
                        <h5>Mongo DB</h5>
                      </div>
                      <div className="item">
                        <img src={Img9} alt="img" />
                        <h5>Next Js</h5>
                      </div>
                      <div className="item">
                        <img src={Img10} alt="img" />
                        <h5>Github</h5>
                      </div>
                    </Carousel>
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
