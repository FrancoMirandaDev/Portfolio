import { Container, Col, Row, Nav, Tab, TabContent } from "react-bootstrap";

import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Task-List.png";
import projImg2 from "../assets/img/Calzado-App.png";
import projImg3 from "../assets/img/Presupuestos.png";
import projImg4 from "../assets/img/Conctacts-app.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
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
    {
      title: "Presupuesto",
      category: "Html + Css + Javascript",
      link: "https://github.com/FrancoMirandaDev/Presupuestos",
      imgUrl: projImg3,
      description:
        "Web application that allows you to keep an accounting record of the income and expenditure of money",
    },
    {
      title: "Contacts App",
      category: "Python + SQL + Html,Css,Javascript",
      link: "https://github.com/FrancoMirandaDev/Contacts-app",
      imgUrl: projImg4,
      description:
        "Web application that allows you to save data such as Name,Telephone and Email in a Database",
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
                    isVisible ? "animate__animated animate__jackInTheBox" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>These are a few projects that I have worked on</p>
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
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab Three</Nav.Link>
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
                        This section is currently in progress.
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        This section is currently in progress.
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
