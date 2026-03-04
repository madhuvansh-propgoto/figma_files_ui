
import React from "react";
import "./Sidebar.css";

import logo from "../assets/img1side.svg";
import grid from "../assets/img2side.svg";
import briefcase from "../assets/img3side.svg";
import book from "../assets/img4side.svg";
import settings from "../assets/img5side.svg";
import send from "../assets/img6side.svg";
import addFolder from "../assets/img7side.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <p className="logo-text">OCTOM.</p>
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