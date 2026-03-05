import React, { useState } from "react";
import "./Topbar.css";
import { FiSearch, FiBell, FiChevronDown } from "react-icons/fi";
import avatar from "../assets/avatar.svg";
import ProfileDropdown from "./ProfileDropDown";

const Topbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="topbar">

      <div></div>

      <div className="search">
        <input type="text" placeholder="Search anything..." />
        <FiSearch className="search-icon" />
      </div>

      <div className="right">
        <FiBell className="icon" />

        <div className="profile" onClick={toggleDropdown}>
          <div className="avatar-bg">
          <img src={avatar} alt="avatar" />
          </div>
          <FiChevronDown />
          
          {showDropdown && (
            <ProfileDropdown
              onClose={() => setShowDropdown(false)}
            />
          )}
        </div>
      </div>

    </div>
  );
};

export default Topbar;