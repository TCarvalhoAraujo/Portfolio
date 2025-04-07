import React from "react";
import PropTypes from "prop-types";

function ProfileCard(props) {
  return (
    <div className="profile-card">
      <img src={props.picture} alt={props.name}></img>
      <div className="profile-card-body">
        <h2>{props.name}</h2>
        <p>{props.about}</p>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

export default ProfileCard;
