
import React from "react";
import "./Sidebar.css";

import logo from "../assets/img1side.png";
import grid from "../assets/img2side.png";
import briefcase from "../assets/img3side.png";
import book from "../assets/img4side.png";
import settings from "../assets/img5side.png";
import send from "../assets/img6side.png";
import addFolder from "../assets/img7side.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="menu">
        <img src={grid} alt="Grid" />
        <img src={briefcase} alt="Briefcase" />
        <img src={book} alt="Book" />
        <img src={settings} alt="Settings" />
        <img src={send} alt="Send" />
      </div>

      <div className="bottom">
        <img src={addFolder}  alt="Add Folder" />
      </div>
    </div>
  );
};

export default Sidebar;