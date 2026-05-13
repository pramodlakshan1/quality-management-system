import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const CheckerTotalGraph = () => {

  const data = [
    {
      name: "Good Pieces",
      value: 498,
      color: "#16a34a",
    },
    {
      name: "Rejected Pieces",
      value: 22,
      color: "#ea580c",
    },
  ];

  const totalOutput = data.reduce(
    (acc, curr) => acc + curr.value,
    0
  );

  return (
    <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 h-100">

      {/* Header */}
      <div className="flex items-start justify-between mb-6">

        <div>
          <h2 className="text-2xl font-bold text-black">
            Production Quality Ratio
          </h2>

          <p className="text-slate-500 mt-1">
            Overall production quality overview
          </p>
        </div>

        {/* Status Badge */}
        <div className="px-4 py-2 rounded-2xl bg-green-50 border border-green-200">
          <p className="text-sm font-semibold text-green-600">
            ● 95.7% Quality Rate
          </p>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="78%">
        <PieChart>

          <Pie
            data={data}
            innerRadius={85}
            outerRadius={120}
            paddingAngle={4}
            dataKey="value"
            stroke="none"
          >

            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
              />
            ))}
          </Pie>

          {/* CENTER TEXT */}
          <text
            x="50%"
            y="48%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-black text-4xl font-bold"
          >
            {totalOutput}
          </text>

          <text
            x="50%"
            y="58%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-slate-500 text-sm"
          >
            Total PCS
          </text>

          <Tooltip
            contentStyle={{
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              backgroundColor: "#ffffff",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          />

          <Legend
            verticalAlign="bottom"
            iconType="circle"
            wrapperStyle={{
              paddingTop: "20px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CheckerTotalGraph;