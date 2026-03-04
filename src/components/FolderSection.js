import React from "react";
import "./FolderSection.css";
import FolderCard from "./FolderCard";
import { FiFolder, FiChevronDown } from "react-icons/fi";
import aImg from "../assets/a img.png";
import bImg from "../assets/b img.png";

const FolderSection = () => {
  const folders = [
    { title: "Documents", count: "24 files", color: "#1EA7FF", badges: [aImg,bImg]},
    { title: "Music", count: "102 files", color: "#5051F9" },
    { title: "Work Project", count: "84 files", color: "#1EA7FF", badges: [aImg,bImg] },
    { title: "Personal Media", count: "2450 files", color: "#F7B000", badges: [aImg] },
    { title: "Reddingo Backup", count: "22 files", color: "#34D870", badges:[aImg] },
    { title:"Root", count:"105 files", color: "#FF694A", badges:[bImg]}
  ];

  return (
    
    <div className="folder-section">  
      <div className="section-header">
        <div className="left">
          <FiFolder />
          <span>All Files</span>
          <FiChevronDown />
        </div>

        <div className="right">
          Show All <FiChevronDown />
        </div>
      </div>

      <div className="folder-grid">
        {folders.map((folder, index) => (
          <FolderCard key={index} {...folder} />
        ))}
      </div>
    </div>
  );
};

export default FolderSection;