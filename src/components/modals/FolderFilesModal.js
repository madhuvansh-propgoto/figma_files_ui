import React, { useEffect, useState } from "react";
import "./FolderFilesModal.css";

const FolderFilesModal = ({ folderId, onClose , refreshTrigger }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
  if (folderId) fetchFiles();
}, [folderId, refreshTrigger]);

  const fetchFiles = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/files/${folderId}`
      );
      const data = await res.json();
      console.log("files data:----",data);
      setFiles(data);
    } catch (err) {
      console.error("Error fetching files", err);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal large">
        <h2>Folder Files</h2>

        <div className="files-list">
          {files.length === 0 ? (
            <p>No files found</p>
          ) : (
            files.map((file) => (
              <div
                key={file.id}
                className="file-item"
                onClick={() =>
                    window.open(
                    `http://localhost:5000${file.file_url}`,
                    "_blank"
                    )
                }
                style={{ cursor: "pointer" }}
                >
                <p><strong>{file.name}</strong></p>
                <p>{file.type}</p>
                <p>{file.size} bytes</p>
             </div>
            ))
          )}
        </div>

        <div className="modal-actions">
          <button className="btn secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FolderFilesModal;