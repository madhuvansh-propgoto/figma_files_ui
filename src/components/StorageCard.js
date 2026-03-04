import React from "react";
import "./StorageCard.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import mediaIcon from "../assets/media.svg";
import documentsIcon from "../assets/document.svg";
import musicIcon from "../assets/music.svg";
import otherIcon from "../assets/other.svg";

function StorageCard() {
  const percentage = 85;

  return (
    <div className="storage-card">

      {/* Top Card */}
      <div className="available-storage-card">
        <div className="circle-section">

          <div className="circle-wrapper">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              strokeWidth={14}
              styles={buildStyles({
                textSize: "14px",
                pathColor: "#2D9CDB",
                textColor: "#1e293b",
                trailColor: "#f1f5f9",
                strokeLinecap: "round",
              })}
            />
          </div>

          <div className="storage-text">
            <h4>Available Storage</h4>
            <p>130GB / 512GB</p>
          </div>

        </div>
      </div>

      {/* Bottom List */}
      <div className="storage-list">
        <StorageItem icon={mediaIcon} label="Media" size="86 GB" percent={70} color="#5051F9"/>
        <StorageItem icon={documentsIcon} label="Documents" size="26 GB" percent={40} color="#FCC35B" />
        <StorageItem icon={musicIcon} label="Music" size="10 GB" percent={20} color="#FF694A" />
        <StorageItem icon={otherIcon} label="Other File" size="18 GB" percent={30} color="#1EA7FF"/>
      </div>

    </div>
  );
}

function StorageItem({ icon, label, size, percent, color }) {
  return (
    <div className="storage-item">
      <div className="item-header">
        <div className="left">
          <div className="icon">
            <img src={icon} alt="icon" className="storage-icon-img" />
          </div>
          <span className="label">{label}</span>
        </div>
        <span className="size">{size}</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percent}%`,background:color }}
        ></div>
      </div>
    </div>
  );
}

export default StorageCard;