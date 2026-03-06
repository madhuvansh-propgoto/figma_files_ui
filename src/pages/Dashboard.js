import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css";
import FolderSection from "../components/FolderSection";
import RightPanel from "../components/RightPanel";
import RecentFiles from "../components/RecentFiles";
import CreateFolderModal from "../components/modals/CreateFolderModal";
import CreateFileModal from "../components/modals/CreateFileModal";
import upload from "../assets/upload.svg";
import Topbar from "../components/Topbar";

const Dashboard = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Topbar />

        <div className="page-header">
          <h2 className="headerfont">Files</h2>

          <div className="header-actions">
            <button
              className="btn primary"
              onClick={() => setShowCreateModal(true)}
            >
              + Create New Folder
            </button>

            <button
              className="btn secondary"
              onClick={() => setShowUploadModal(true)}
            >
              <img src={upload} alt="upload" className="btn-icon" />
              Upload
            </button>
          </div>
        </div>

        <div className="content">
           <div className="left-panel">
            <FolderSection />
            <RecentFiles />
          </div> 

          <div className="right-panel">
            <RightPanel />
          </div>
        </div>
      </div>

      {showCreateModal && (
        <CreateFolderModal
          onClose={() => setShowCreateModal(false)}
        />
      )}

      {showUploadModal && (
        <CreateFileModal
          onClose={() => setShowUploadModal(false)}
          folderId="folder-uuid"
          ownerId="user-uuid"
        />
      )}
    </div>
  );
};

export default Dashboard;