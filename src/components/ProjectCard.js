import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, category, imgUrl, link, description }) => {
  return (
    <Col sm={6} md={4} className="proj-item">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{category}</span>
          </div>
        </div>
      </a>
      <h6>{description}</h6>
    </Col>
  );
};
