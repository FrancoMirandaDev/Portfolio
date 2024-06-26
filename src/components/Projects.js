import { Container, Col, Row, Nav, Tab, TabContent } from "react-bootstrap";

import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Task-List.png";
import projImg2 from "../assets/img/Calzado-App.png";
import projImg3 from "../assets/img/Presupuestos.png";
import projImg4 from "../assets/img/Conctacts-app.png";
import projImg5 from "../assets/img/Store-Pc.png";
import projImg6 from "../assets/img/Store-Pc-3.png";
import projImg7 from "../assets/img/ChatBot-IA.png";
import projImg8 from "../assets/img/Payments-App.png"

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "ChatBot with IA",
      category:
        "JavaScript + TypeScript + Node.Js + React Js + Gemini AI + Docker",
      link: "https://github.com/FrancoMirandaDev/ChatBot-with-IA",
      imgUrl: projImg7,
      description: "A chatbot that responds to user questions with an AI",
    },
    {
      title: "Banking Payments Management",
      category: "JavaScript, NodeJs, Express + React, Next, Tailwind Css + PostgreSQL, Jest",
      link: "https://github.com/FrancoMirandaDev/Payments-app",
      imgUrl: projImg8,
      description:
        "The website facilitates registering, managing, and querying customer banking payments, with secure CRUD features and filtering/search options for efficient information handling.",
    },
    {
      title: "Shop Pc (Server)",
      category:
        "JavaScript + Node.Js + Express + SQL + Swagger + Stripe + Mercado Pago",
      link: "https://github.com/FrancoMirandaDev/Shop-Pc-BackEnd",
      imgUrl: projImg6,
      description:
        "Back end server for the ecommerce,  enabling user validation and storage users data in a database.Additionally, Validate your transactions with Mercado Pago or Stripe",
    },
    {
      title: "Shop Pc",
      category:
        "TypeScript + React Js + Bootstrap + SQL + Stripe + Mercado Pago",
      link: "https://github.com/FrancoMirandaDev/Shop-Pc-FrontEnd",
      imgUrl: projImg5,
      description:
        "Ecommerce web application connects with a payment gateway such as Stripe and Mercado Pago,allowing purchase products with a credit card",
    },
    {
      title: "Task List",
      category: "Node.Js + MongoDB + Html,Css,Javascript",
      link: "https://github.com/FrancoMirandaDev/Task-List",
      imgUrl: projImg1,
      description:
        "Web application with login that allows you save your tasks and carry a record",
    },
    {
      title: "Calzado App",
      category: "React.Js + Chakra UI + Express",
      link: "https://github.com/FrancoMirandaDev/Calzado-app",
      imgUrl: projImg2,
      description:
        "Web application that allows you to view the prices of the shoes in various stores",
    },
  ];
  const projects2 = [
    {
      title: "Contacts App",
      category: "Python + SQL + Html,Css,Javascript",
      link: "https://github.com/FrancoMirandaDev/Contacts-app",
      imgUrl: projImg4,
      description:
        "Web application that allows you to save data such as Name,Telephone and Email in a Database",
    },
    {
      title: "Presupuesto",
      category: "Html + Css + Javascript",
      link: "https://github.com/FrancoMirandaDev/Presupuestos",
      imgUrl: projImg3,
      description:
        "Web application that allows you to keep an accounting record of the income and expenditure of money",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__pulse animate__slow animate__repeat-2"
                      : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>View of projects that showcase my abilities</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <TabContent>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </TabContent>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
