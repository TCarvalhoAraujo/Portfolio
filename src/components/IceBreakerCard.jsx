import React from "react";
import PropTypes from "prop-types";

function IceBreakerCard(props) {
  return (
    <div className="ice-breaker-card">
      <h4>{props.title}</h4>
      <ul>
        {props.content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

IceBreakerCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default IceBreakerCard;
