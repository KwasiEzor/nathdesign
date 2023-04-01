import React from "react";
import "./ProjectsCard.css";
import { Link } from "react-router-dom";
const ProjectsCard = ({ item }) => {
  return (
    <Link to="#">
      <div className="project-card" key={item.id}>
        <img src={item.image.asset.url} alt={item.title} />
        <div className="details">
          {/* <p className="description">{item.description}</p> */}
          <h4 className="title">{item.title}</h4>
        </div>
      </div>
    </Link>
  );
};

export default ProjectsCard;
