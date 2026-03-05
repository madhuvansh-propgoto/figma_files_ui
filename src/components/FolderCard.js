import React from "react";
import "./FolderCard.css";
import { FaFolder } from "react-icons/fa";

const FolderCard = ({ title, count, color, badges = [] }) => {
  return (
    <div className="folder-card">
      <div className="card-top">
        <FaFolder className="folder-icon" style={{ color: color }} />

        <div className="badge-container">
          {badges.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="member"
              className="folder-avatar"
            />
          ))}
        </div>
      </div>

      <div className="card-body">
        <h4>{title}</h4>
        <p>{count}</p>
      </div>
    </div>
  );
};
export default FolderCard;