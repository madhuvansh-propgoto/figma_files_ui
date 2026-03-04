import React, { useState } from "react";
import "./CreateFolderModal.css";

const CreateFolderModal = ({ onClose }) => {
  const [folderName, setFolderName] = useState("");
  const [location, setLocation] = useState("Root");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!folderName.trim()) {
      alert("Folder name is required");
      return;
    }

    console.log("New Folder:", {
      folderName,
      location,
    });

    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3>Create New Folder</h3>
          <span className="close-btn" onClick={onClose}>
            ×
          </span>
        </div>

        <form onSubmit={handleSubmit} className="modal-body">
          <label>Folder Name</label>
          <input
            type="text"
            placeholder="Enter folder name"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
          />

          <label>Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>Media</option>
            <option>Documents</option>
            <option>Music</option>
          </select>

          <div className="modal-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="create-btn">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFolderModal;