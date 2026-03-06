import React from "react";
import { FiMoreVertical } from "react-icons/fi";

function Table({ title, columns = [], data = [] }) {
  return (
    <div className="recent-card">

      <div className="recent-header">
        <h3>{title}</h3>
        <span className="view-all">View All</span>
      </div>

      <div className="recent-table">
         <div className="table-head">
          {columns.map((col, index) => (
            <span key={index}>{col}</span>
          ))}
        </div>

        {data.map((row, index) => (
          <div className="table-row" key={index}>
            
            <div className="file-name">
              <img
                src={row.icon}
                alt="file"
                className="file-icon-img"
              />
              {row.name}
            </div>

            <div>{row.size}</div>

            <div>{row.date}</div>

            <div className="members">
              {row.members.map((member, i) => (
                <img
                  key={i}
                  src={member}
                  alt="avatar"
                  className="avatar"
                />
              ))}
            </div>

            <div>
              <FiMoreVertical className="menu-icon" />
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Table;