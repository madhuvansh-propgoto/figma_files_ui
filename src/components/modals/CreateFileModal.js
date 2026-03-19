import React, { useState, useEffect, useRef } from "react";
import "./CreateFileModal.css";

const CreateFileModal = ({ onClose, folderId, ownerId , onUploadSuccess}) => {
  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(folderId || "");

  useEffect(() => {
    fetchFolders();
  }, []);

  const fetchFolders = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/folders");
      const data = await res.json();
      setFolders(data);
    } catch (err) {
      console.error("Error fetching folders", err);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select a file");
      return;
    }

    if (!selectedFolder) {
      alert("Please select a folder");
      return;
    }

    const data = new FormData();
    data.append("file", selectedFile);
    data.append("folder_id", selectedFolder);
    data.append("owner_id", ownerId);

    try {
      const res = await fetch("http://localhost:5000/api/files", {
        method: "POST",
        body: data
      });

      const result = await res.json();
      console.log(result);

      // onClose();
      if (onUploadSuccess) {
        onUploadSuccess();
      }
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
          <input
            type="file"
            id="fileUpload"
            hidden
            ref={fileInputRef}
            onChange={handleFileChange}
          />

          <label htmlFor="fileUpload" className="btn upload-btn">
            Select File
          </label>

          {selectedFile && (
            <div className="file-info">
              <div className="file-info-header">
                <span className="file-name">{selectedFile.name}</span>

                <button
                  type="button"
                  className="remove-file-btn"
                  onClick={() => {
                    setSelectedFile(null);
                    if (fileInputRef.current) {
                      fileInputRef.current.value = "";
                    }
                  }}
                >
                  ×
                </button>
              </div>

              <p className="file-meta">Type: {selectedFile.type}</p>
              <p className="file-meta">
                Size: {(selectedFile.size / 1024).toFixed(2)} KB
              </p>
            </div>
          )}

          <select
            value={selectedFolder}
            onChange={(e) => setSelectedFolder(e.target.value)}
            required
          >
            <option value="">Select Folder</option>
            {folders.map((folder) => (
              <option key={folder.id} value={folder.id}>
                {folder.name}
              </option>
            ))}
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