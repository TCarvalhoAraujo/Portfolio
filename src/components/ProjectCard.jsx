import React from "react";
import PropTypes from "prop-types";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <img src={props.picture} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.content}</p>
        <p>
          <strong>Skills:</strong> {props.competence}
        </p>
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          Check Out!
        </a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  competence: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
