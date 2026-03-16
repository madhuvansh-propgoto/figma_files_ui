import React, { useState } from "react";
import "./CreateFolderModal.css";

const CreateFolderModal = ({ onClose }) => {
  const [folderName, setFolderName] = useState("");
  const [location, setLocation] = useState("Media");
  const [color, setColor] = useState("#6366f1");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!folderName.trim()) {
      alert("Folder name is required");
      return;
    }

    const userId = "d2afafaf-f972-44aa-b5ca-bb103c7357ab"; // real user id

    const payload = {
      name: folderName,
      color: color,
      owner_id: userId,
      created_by: userId,
      updated_by: userId,
      isActive: true
    };

    try {
      const res = await fetch("http://localhost:5000/api/upsert-folder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Folder created:", data);
        alert("Folder created successfully");

        setFolderName("");
        setColor("#6366f1");
        setLocation("Media");

        onClose();
      } else {
        console.error(data);
        alert(data.message || "Failed to create folder");
      }

    } catch (err) {
      console.error("Error creating folder:", err);
      alert("Server error");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>

        <div className="modal-header">
          <h2>Create New Folder</h2>
          <span className="close-btn" onClick={onClose}>×</span>
        </div>

        <form onSubmit={handleSubmit} className="modal-body">

          <div className="input-group">
            <label>Folder Name</label>
            <input
              type="text"
              placeholder="Enter folder name"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
            />
          </div>

          <div className="input-group color-group">
            <label>Color</label>
            <div className="color-picker">
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
              <span>{color}</span>
            </div>
          </div>

          <div className="input-group">
            <label>Location</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option>Media</option>
              <option>Documents</option>
              <option>Music</option>
            </select>
          </div>

          <div className="modal-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>

            <button type="submit" className="create-btn">
              Create Folder
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateFolderModal;


// import React, { useState } from "react";
// import "./CreateFolderModal.css";

// const CreateFolderModal = ({ onClose, onFolderCreated }) => {

//   const [folderName, setFolderName] = useState("");
//   const [location, setLocation] = useState("Media");
//   const [color, setColor] = useState("#6366f1");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!folderName.trim()) {
//       alert("Folder name is required");
//       return;
//     }

//     const userId = "d2afafaf-f972-44aa-b5ca-bb103c7357ab";

//     const payload = {
//       name: folderName,
//       color: color,
//       owner_id: userId,
//       created_by: userId,
//       updated_by: userId,
//       isActive: true
//     };

//     try {

//       const res = await fetch("http://localhost:5000/api/upsert-folder", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(payload)
//       });

//       const data = await res.json();

//       if(res.ok){

//         const newFolder = {
//           title: folderName,
//           count: "0 files",
//           color: color
//         };

//         onFolderCreated(newFolder);

//         onClose();
//       }

//     } catch (err) {
//       console.error("Error creating folder:", err);
//     }
//   };

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-container" onClick={(e) => e.stopPropagation()}>

//         <div className="modal-header">
//           <h2>Create New Folder</h2>
//           <span className="close-btn" onClick={onClose}>×</span>
//         </div>

//         <form onSubmit={handleSubmit} className="modal-body">

//           <div className="input-group">
//             <label>Folder Name</label>
//             <input
//               type="text"
//               placeholder="Enter folder name"
//               value={folderName}
//               onChange={(e) => setFolderName(e.target.value)}
//             />
//           </div>

//           <div className="input-group color-group">
//             <label>Color</label>
//             <div className="color-picker">
//               <input
//                 type="color"
//                 value={color}
//                 onChange={(e) => setColor(e.target.value)}
//               />
//               <span>{color}</span>
//             </div>
//           </div>

//           <div className="input-group">
//             <label>Location</label>
//             <select
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//             >
//               <option>Media</option>
//               <option>Documents</option>
//               <option>Music</option>
//             </select>
//           </div>

//           <div className="modal-actions">

//             <button type="button" className="cancel-btn" onClick={onClose}>
//               Cancel
//             </button>

//             <button type="submit" className="create-btn">
//               Create Folder
//             </button>

//           </div>

//         </form>

//       </div>
//     </div>
//   );
// };

// export default CreateFolderModal;