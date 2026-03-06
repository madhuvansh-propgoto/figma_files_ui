import "./RecentFiles.css";
import { FiMoreVertical } from "react-icons/fi";
import proposalIcon from "../assets/proposal.svg";
import backgroundIcon from "../assets/background.svg";
import apexIcon from "../assets/Apex1.svg";
import illustrationIcon from "../assets/illustration.svg";
import Table from "./tableComp";

import avatar1 from "../assets/avatar1.svg";
import avatar2 from "../assets/avatar2.svg";
import avatar3 from "../assets/avatar3.svg";
import avatar4 from "../assets/avatar4.svg";
import avatar5 from "../assets/avatar5.svg";

function RecentFiles() {
  const columns = ["Name ↑", "Size ↑", "Last Modified ↑", "Members ↑", ""];
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

  return(
    <div>
      <Table title="Recent File" columns={columns} data={files} />
    </div>
  )
}

export default RecentFiles;