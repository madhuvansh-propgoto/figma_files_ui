import React from "react";
import "./FolderCard.css";
import { FaFolder } from "react-icons/fa";

// import { FaFolder } from "react-icons/fa";

const FolderCard = ({ name, color }) => {
  console.log("name-------", name)
  return (
    <div className="folder-card">

      <div className="card-top">
        <FaFolder className="folder-icon" style={{ color: color }} />
      </div>

      <div className="card-body">
        <h4>{name}</h4>
        <p>0 files</p>
      </div>

    </div>
  );
};

export default FolderCard;