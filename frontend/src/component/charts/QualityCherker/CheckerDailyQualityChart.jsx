import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const CheckerDailyGraph = () => {

  const data = [
    { day: "Mon", good: 1000, damaged: 180 },
    { day: "Tue", good: 1000, damaged: 210 },
    { day: "Wed", good: 1000, damaged: 160 },
    { day: "Thu", good: 1000, damaged: 240 },
    { day: "Fri", good: 1000, damaged: 190 },
    { day: "Sat", good: 1000, damaged: 190 },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 h-100">

      {/* Header */}
      <div className="flex items-start justify-between mb-6">

        <div>
          <h2 className="text-2xl font-bold text-black">
            Weekly Production Performance
          </h2>

          <p className="text-slate-500 mt-1">
            Good vs rejected pieces this week
          </p>
        </div>

        {/* Status Badge */}
        <div className="px-4 py-2 rounded-2xl bg-green-50 border border-green-200">
          <p className="text-sm font-semibold text-green-600">
            ● Quality Stable
          </p>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="78%">
        <BarChart
          data={data}
          barGap={8}
          margin={{
            top: 10,
            right: 10,
            left: -10,
            bottom: 0,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e2e8f0"
          />

          <XAxis
            dataKey="day"
            tick={{
              fill: "#64748b",
              fontSize: 13,
              fontWeight: 500,
            }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{
              fill: "#64748b",
              fontSize: 13,
            }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              backgroundColor: "#ffffff",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          />

          <Legend />

          {/* GOOD PCS */}
          <Bar
            dataKey="good"
            name="Good Pieces"
            fill="#16a34a"
            radius={[10, 10, 0, 0]}
            barSize={30}
          />

          {/* DAMAGED PCS */}
          <Bar
            dataKey="damaged"
            name="Rejected Pieces"
            fill="#ea580c"
            radius={[10, 10, 0, 0]}
            barSize={30}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CheckerDailyGraph;