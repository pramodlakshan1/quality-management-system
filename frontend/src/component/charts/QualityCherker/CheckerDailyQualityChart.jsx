import { data } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CheckerDailyGraph = () => {
  const data = [
    { data: '05/01', good: 4000, damaged: 2400 },
    { date: '05/02', good: 3000, damaged: 1398 },
    { date: '05/03', good: 2000, damaged: 9800 },
    { date: '05/04', good: 2780, damaged: 3908 },
    { date: '05/05', good: 1890, damaged: 4800 },
    { date: '05/06', good: 1890, damaged: 4800 },
  ];

  return (
    <div className="h-96 w-full bg-white p-4 rounded-xl shadow-sm border border-slate-200">
      <h2 className="text-lg font-semibold mb-4">Daily Performance</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="horizontal"
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
          <XAxis dataKey="date" type="category" width={40} stroke="#64748b" />
          <YAxis type="number" hide />
          <Tooltip cursor={{fill: '#f1f5f9'}} />
          <Legend />
          {/* Good Bar */}
          <Bar dataKey="good" fill="#16a34a" radius={[8, 8, 0, 0]} barSize={28}/>
          {/* Damaged Bar */}
          <Bar dataKey="damaged" fill="#ea580c" radius={[8, 8, 0, 0]} barSize={28}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default CheckerDailyGraph;