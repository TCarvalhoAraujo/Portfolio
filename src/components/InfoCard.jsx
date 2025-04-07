import React from "react";
import PropTypes from "prop-types";

function InfoCard(props) {
  return (
    <div className="info-card">
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </div>
  );
}

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default InfoCard;
