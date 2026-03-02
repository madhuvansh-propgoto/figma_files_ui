import "./ActivityChart.css";
import {
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from "recharts";

import mediaLegend from "../assets/Mediabutton.png";
import photosLegend from "../assets/Photosbutton.png";
import docsLegend from "../assets/Docsbutton.png";

function ActivityChart() {
  const data = [
    { group: "1", Media: 20, Photos: 65, Docs: 40 },
    { group: "2", Media: 75, Photos: 45, Docs: 60 },
  ];

  return (
    <div className="activity-card">
      <h3 className="activity-title">Activity Chart</h3>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={data} barGap={14}>
            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
              stroke="#E2E8F0"
            />

            <Tooltip cursor={{ fill: "transparent" }} />

            <Bar dataKey="Media" fill="#5B5FEF" radius={[6, 6, 0, 0]} />
            <Bar dataKey="Photos" fill="#2D9CDB" radius={[6, 6, 0, 0]} />
            <Bar dataKey="Docs" fill="#FF6B4A" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Legend */}
      <div className="custom-legend">
        <div className="legend-item">
          <img src={mediaLegend} alt="Media" />
          <span>Media</span>
        </div>

        <div className="legend-item">
          <img src={photosLegend} alt="Photos" />
          <span>Photos</span>
        </div>

        <div className="legend-item">
          <img src={docsLegend} alt="Docs" />
          <span>Docs</span>
        </div>
      </div>
    </div>
  );
}

export default ActivityChart;