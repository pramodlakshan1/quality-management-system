import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const CheckerTotalGraph = () => {
  const data = [
    { name: 'Good PCS', value: 400, color: '#16a34a' }, // Tailwind green-500
    { name: 'Bad PSC', value: 100, color: '#ea580c' },      // Tailwind red-500
  ];

  const totalOutput = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="h-80 w-full bg-white p-4 rounded-xl shadow-sm border border-slate-200">
      <h2 className="text-lg font-semibold mb-4">Total Output: {totalOutput}</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36}/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
export default CheckerTotalGraph;