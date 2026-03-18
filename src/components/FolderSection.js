// import React from "react";
// import "./FolderSection.css";
// import FolderCard from "./FolderCard";
// import { FiFolder, FiChevronDown } from "react-icons/fi";
// import { FaFolder } from "react-icons/fa";
// import aImg from "../assets/a img.svg";
// import bImg from "../assets/b img.svg";

// const FolderSection = () => {
//   const folders = [
//     { title: "Documents", count: "24 files", color: "#1EA7FF", badges: [aImg,bImg]},
//     { title: "Music", count: "102 files", color: "#5051F9" },
//     { title: "Work Project", count: "84 files", color: "#1EA7FF", badges: [aImg,bImg] },
//     { title: "Personal Media", count: "2450 files", color: "#F7B000", badges: [aImg] },
//     { title: "Reddingo Backup", count: "22 files", color: "#34D870" },
//     { title:"Root", count:"105 files", color: "#FF694A", badges:[bImg]}
//   ];

//   return (
    
//     <div className="folder-section">  
//       <div className="section-header">
//         <div className="left">
//           <div className="subLeft">
//           <FaFolder className="folder-label-icon" style={{ color:" #5051F9" }} />
//           <FiChevronDown />
//           </div>
//           <span className="spanFol">All Files</span>
          
//         </div>

//         <div className="right">
//           Show All <FiChevronDown />
//         </div>
//       </div>

//       <div className="folder-grid">
//         {folders.map((folder, index) => (
//           <FolderCard key={index} {...folder} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FolderSection;


// import React, { useState } from "react";
// import "./FolderSection.css";
// import FolderCard from "./FolderCard";
// import { FiChevronDown } from "react-icons/fi";
// import { FaFolder } from "react-icons/fa";
// import aImg from "../assets/a img.svg";
// import bImg from "../assets/b img.svg";
// import CreateFolderModal from "./modals/CreateFolderModal";

// const FolderSection = () => {

//   const [showModal, setShowModal] = useState(false);

//   const [folders, setFolders] = useState([
//     { title: "Documents", count: "24 files", color: "#1EA7FF", badges: [aImg,bImg]},
//     { title: "Music", count: "102 files", color: "#5051F9" },
//     { title: "Work Project", count: "84 files", color: "#1EA7FF", badges: [aImg,bImg] },
//     { title: "Personal Media", count: "2450 files", color: "#F7B000", badges: [aImg] },
//     { title: "Reddingo Backup", count: "22 files", color: "#34D870" },
//     { title:"Root", count:"105 files", color: "#FF694A", badges:[bImg]}
//   ]);

//   const addFolder = (newFolder) => {
//     setFolders([...folders, newFolder]);
//   };

//   return (

//     <div className="folder-section">

//       <div className="section-header">

//         <div className="left">
//           <div className="subLeft">
//             <FaFolder className="folder-label-icon" style={{ color:"#5051F9" }} />
//             <FiChevronDown />
//           </div>
//           <span className="spanFol">All Files</span>
//         </div>

//         <div className="right" onClick={() => setShowModal(true)}>
//           + Create New Folder
//         </div>

//       </div>

//       <div className="folder-grid">
//         {folders.map((folder, index) => (
//           <FolderCard key={index} {...folder} />
//         ))}
//       </div>

//       {showModal && (
//         <CreateFolderModal
//           onClose={() => setShowModal(false)}
//           onFolderCreated={addFolder}
//         />
//       )}

//     </div>
//   );
// };

// export default FolderSection;

import React, { useEffect, useState } from "react";
import "./FolderSection.css";
import FolderCard from "./FolderCard";
import { FiChevronDown } from "react-icons/fi";
import { FaFolder } from "react-icons/fa";

const FolderSection = ( {onFolderSelect} ) => {

  const [folders, setFolders] = useState([]);

  useEffect(() => {
    fetchFolders();
  }, []);

  const fetchFolders = async () => {
    try {

      const res = await fetch("http://localhost:5000/api/folders");
      const result = await res.json();
     
      const formatted = result?.map((f) => ({
        id:f.id,
        title: f.name,
        count: f.file_count,
        color: f.color
      }));

      console.log("formatted------", formatted)

      setFolders(formatted);

    } catch (err) {
      console.error("Error fetching folders", err);
    }
  };

  return (
    <div className="folder-section">

      <div className="section-header">
        <div className="left">
          <div className="subLeft">
            <FaFolder className="folder-label-icon" style={{ color:"#5051F9" }} />
            <FiChevronDown />
          </div>
          <span className="spanFol">All Files</span>
        </div>

        <div className="right">
          Show All <FiChevronDown />
        </div>
      </div>

      
      <div className="folder-grid">
        {folders?.map((folder) => (
          <FolderCard
            key={folder.id}
            id={folder.id}
            name={folder.title}
            count={folder.count}
            color={folder.color}
            onClick={onFolderSelect}
          />
        ))}
      </div>
      

    </div>
  );
};

export default FolderSection;