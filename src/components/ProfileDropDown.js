import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileDropDown.css";

const ProfileDropdown = ({ onClose }) => {

  const navigate = useNavigate();

  const handleAddUser = () => {
    console.log("Add User clicked");
    onClose();
  };

  const handleLogout = () => {
    console.log("Logout clicked");

    onClose();

    navigate("/login");
  };

  return (
    <div className="profile-dropdown">

      <button
        className="dropdown-btn add-user"
        onClick={handleAddUser}
      >
        Add User +
      </button>

      <button
        className="dropdown-btn logout"
        onClick={handleLogout}
      >
        Logout -
      </button>

    </div>
  );
};

export default ProfileDropdown;