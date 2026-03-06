import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import "./Topbar.css";

import notificationIcon from "../assets/notify.svg";
import avatar from "../assets/avatar.svg";

function Topbar() {
  const [showMenu, setShowMenu] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedRole = localStorage.getItem("role");

    if (storedEmail) setUserEmail(storedEmail);
    if (storedRole) setRole(storedRole);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/Login");
  };

  const handleAddAccount = () => {
    navigate("/Login");
  };

  return (
    <div className="topbar">
      <div className="topbar-left"></div>

      <div className="search-wrapper">
        
        <input
          type="text"
          placeholder="Search anything..."
          className="search-input"
        />

        <FiSearch className="search-icon" />
      </div>

      <div className="topbar-right">

        <button className="icon-button">
          <img src={notificationIcon} alt="notification" className="icon-img" />
        </button>

        <div className="avatar-bg">
          <img src={avatar} alt="avatar" />
        </div>

        <button
          className="icon-button"
          onClick={() => setShowMenu(!showMenu)}
        >
          <FiChevronDown className="arrow-icon" />
        </button>

        {showMenu && (
          <div className="account-menu">
            <button onClick={handleAddAccount}>Add Account</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}

      </div>
    </div>
  );
}

export default Topbar;