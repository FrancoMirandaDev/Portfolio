import { Col, Container, Row } from "react-bootstrap";

import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/email.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/linkedin.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="mailto:franco.miranda.dev@gmail.com">
                <img src={navIcon1} alt="icon" />
              </a>
              <a href="https://github.com/FrancoMirandaDev">
                <img src={navIcon2} alt="icon" />
              </a>
              <a href="https://www.linkedin.com/in/franco-miranda/">
                <img src={navIcon3} alt="icon" />
              </a>
            </div>
            <p>CopyRight 2023. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
