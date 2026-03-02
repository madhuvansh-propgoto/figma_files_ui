import React from "react";
import "./Topbar.css";
import { FiSearch, FiBell, FiChevronDown } from "react-icons/fi";
import avatar from "../assets/avatar.png";

const Topbar = () => {
  return (
    <div className="topbar">

      <div></div>

      <div className="search">
        <input type="text" placeholder="Search anything..." />
        <FiSearch className="search-icon" />
      </div>

      <div className="right">
        <FiBell className="icon" />

        <div className="profile">
          <img src={avatar} alt="avatar" />
          <FiChevronDown />
        </div>
      </div>

    </div>
  );
};

export default Topbar;