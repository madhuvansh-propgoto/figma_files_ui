import React from "react";
import "./FolderCard.css";
import { FaFolder } from "react-icons/fa";
import aImg from "../assets/a img.png";
import bImg from "../assets/b img.png";
/*
const FolderCard = ({ title, count, color, badge[] }) => {
  return (
    <div className="folder-card">
      <div className="card-top">
        <FaFolder className="folder-icon" style={{ color: color }} />
        <div className="badge-container">
          {badges.map((b, index) => (
            <div key={index} className="badge">
              {b}
            </div>
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
const FolderCard = ({ title, count, color, badges = [] }) => {
  return (
    <div className="folder-card">
      <div className="card-top">
        <FaFolder className="folder-icon" style={{ color: color }} />

        <div className="badge-container">
          {badges.map((b, index) => (
            <div key={index} className="badge">
              {b}
            </div>
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
*/
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