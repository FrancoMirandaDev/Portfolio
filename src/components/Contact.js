import { useState, useRef } from "react";
import { Row, Container, Col } from "react-bootstrap";
import imgContact from "../assets/img/contact.svg";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [status, setStatus] = useState({});

  const form = useRef();

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0ta8chj",
        "template_1lkmzhl",
        form.current,
        "UlLJLyUDPcsryrdgH"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus({ succes: true, message: "Message sent successfully" });
        },
        (error) => {
          console.log(error.text);
          setStatus({
            succes: false,
            message: "Something went wrong, please try again later.",
          });
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={imgContact} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Connect with me</h2>
            <form ref={form} onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    name="firstName"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    required
                  ></input>
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    name="lastName"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    required
                  ></input>
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    name="email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    required
                  ></input>
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    name="phone"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  ></input>
                </Col>
                <Col>
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="Message"
                    name="message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    required
                  />
                  <button type="submit">
                    <span>Send</span>
                  </button>
                </Col>
                {status.message && (
                  <p
                    className={status.success === false ? "danger" : "success"}
                  >
                    {status.message}
                  </p>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
