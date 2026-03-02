import "./RecentFiles.css";
import { FiMoreVertical } from "react-icons/fi";
import proposalIcon from "../assets/proposal.png";
import backgroundIcon from "../assets/background.png";
import apexIcon from "../assets/Apex1.png";
import illustrationIcon from "../assets/illustration.png";

import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";

function RecentFiles() {
  const files = [
    {
      name: "Proposal.docx",
      size: "2.9 MB",
      date: "Feb 25, 2022",
      icon: proposalIcon,
      members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    },
    {
      name: "Background.jpg",
      size: "3.5 MB",
      date: "Feb 24, 2022",
      icon: backgroundIcon,
      members: [avatar1, avatar2, avatar3],
    },
    {
      name: "Apex website.fig",
      size: "23.5 MB",
      date: "Feb 22, 2022",
      icon: apexIcon,
      members: [avatar1, avatar2, avatar3, avatar4],
    },
    {
      name: "Illustration.ai",
      size: "7.2 MB",
      date: "Feb 20, 2022",
      icon: illustrationIcon,
      members: [avatar1, avatar2, avatar3],
    },
  ];

  return (
    <div className="recent-card">
      <div className="recent-header">
        <h3>Recent File</h3>
        <span className="view-all">View All</span>
      </div>

      <div className="recent-table">
        <div className="table-head">
          <span>Name ↑</span>
          <span>Size ↑</span>
          <span>Last Modified ↑</span>
          <span>Members ↑</span>
          <span></span>
        </div>

        {files.map((file, index) => (
          <div className="table-row" key={index}>
            <div className="file-name">
              <img
                src={file.icon}
                alt="file"
                className="file-icon-img"
              />
              <span>{file.name}</span>
            </div>

            <span>{file.size}</span>
            <span>{file.date}</span>

            <div className="members">
              {file.members.map((member, i) => (
                <img
                  key={i}
                  src={member}
                  alt="member"
                  className="avatar"
                />
              ))}
            </div>

            <FiMoreVertical className="menu-icon" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentFiles;