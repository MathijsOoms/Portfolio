import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, onClick, style }) => {
  return (
    <Col size={12} sm={12} md={6} lg={4}>
      <div className="proj-imgbx" onClick={onClick} style={{ cursor: onClick ? "pointer" : "default", ...style }}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};