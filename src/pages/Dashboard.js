import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "./Dashboard.css";
import FolderSection from "../components/FolderSection";
import RightPanel from "../components/RightPanel";
import RecentFiles from "../components/RecentFiles";


const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Topbar />  
        <div className="page-title">
          <h2>Files</h2>
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
    </div>
  );
};

export default Dashboard;