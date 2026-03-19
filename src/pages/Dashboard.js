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
import FolderFilesModal from "../components/modals/FolderFilesModal";

const Dashboard = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [showFolderModal, setShowFolderModal] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const ownerId = user?.id;
  const [refreshFlag, setRefreshFlag] = useState(false);

  console.log("Dashboard ownerId:", ownerId);
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main" >
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
              // onClick={() => setShowUploadModal(true)}
              onClick={() => setShowUploadModal(true)}
            >
              <img src={upload} alt="upload" className="btn-icon" />
              Upload
            </button>
          </div>
        </div>

        <div className="content">
          <div className="left-panel">
            {/* <FolderSection onFolderSelect={setSelectedFolderId} /> */}
            <FolderSection
              onFolderSelect={(id) => {
                setSelectedFolderId(id);
                setShowFolderModal(true);
              }}
            />
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

      {/* {showUploadModal && (
        <CreateFileModal
          onClose={() => setShowUploadModal(false)}
          folderId={selectedFolderId}
          ownerId={ownerId}
          onUploadSuccess={fetchFiles}
        />
      )} */}

      {showUploadModal && (
        <CreateFileModal
          onClose={() => setShowUploadModal(false)}
          folderId={selectedFolderId}
          ownerId={ownerId}
          onUploadSuccess={() => setRefreshFlag(prev => !prev)}
        />
      )}

      {/* {showFolderModal && (
        <FolderFilesModal
          folderId={selectedFolderId}
          onClose={() => setShowFolderModal(false)}
        />
      )} */}

      {showFolderModal && (
      <FolderFilesModal
        folderId={selectedFolderId}
        onClose={() => setShowFolderModal(false)}
        refreshTrigger={refreshFlag}
      />
    )}
    </div>
  );
};

export default Dashboard;