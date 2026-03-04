import React, { useState } from "react";
import "./CreateFileModal.css";

const CreateFileModal = ({ onClose, folderId, ownerId }) => {
  const [formData, setFormData] = useState({
    name: "",
    size: "",
    type: "",
    category: ""
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectedFile(file);

    setFormData({
      ...formData,
      name: file.name,
      size: file.size,
      type: file.type
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select a file");
      return;
    }

    const data = new FormData();
    data.append("file", selectedFile);
    data.append("name", formData.name);
    data.append("size", formData.size);
    data.append("type", formData.type);
    data.append("category", formData.category);
    data.append("folder_id", folderId);
    data.append("owner_id", ownerId);

    try {
      const res = await fetch("http://localhost:5000/api/files", {
        method: "POST",
        body: data
      });

      const result = await res.json();
      console.log(result);

      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Upload File</h2>

        <form onSubmit={handleSubmit}>
          
          {/* Hidden File Input */}
          <input
            type="file"
            id="fileUpload"
            hidden
            onChange={handleFileChange}
          />

          {/* Upload Button */}
          <label htmlFor="fileUpload" className="btn upload-btn">
            Select File
          </label>

          <input
            type="text"
            name="name"
            placeholder="File Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="type"
            placeholder="File Type"
            value={formData.type}
            onChange={handleChange}
            required
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="document">Document</option>
            <option value="image">Image</option>
            <option value="design">Design</option>
            <option value="other">Other</option>
          </select>

          <div className="modal-actions">
            <button type="submit" className="btn primary">
              Upload
            </button>

            <button
              type="button"
              onClick={onClose}
              className="btn secondary"
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateFileModal;