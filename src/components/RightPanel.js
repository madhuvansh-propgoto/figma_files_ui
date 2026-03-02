import StorageCard from "./StorageCard";
import ActivityChart from "./ActivityChart";
import "./RightPanel.css"

function RightPanel() {
  return (
    <div className="right-panel-wrapper">
      <StorageCard />
      <ActivityChart />
    </div>
  );
}

export default RightPanel;