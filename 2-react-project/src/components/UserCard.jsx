import React from "react";
import img1 from "../assets/img1.jpg";
import "./UserCard.css";

const UserCard = (props) => {
  return (
    <div className="user-container">
      <img id="user-img" src={img1} alt="avatar" />
      <p id="user-name">{props.name}</p>
      <p id="user-desc">{props.desc}</p>
    </div>
  );
};

export default UserCard;
