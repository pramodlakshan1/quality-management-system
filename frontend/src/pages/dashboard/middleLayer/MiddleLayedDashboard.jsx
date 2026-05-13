import React, { useState } from "react";
import {
  ShieldCheck,
  TrendingUp,
  TrendingDown,
  Factory,
  AlertTriangle,
  BellRing,
  Activity,
  ClipboardPlus,
  FileText,
  UserPlus,
  Download,
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const SupervisorDashboard = () => {

  // =========================
  // TREND TABS
  // =========================
  const [activeTrend, setActiveTrend] = useState("hourly");

  // =========================
  // MOCK DATA
  // =========================

  const summary = {
    totalProduction: 12540,
    goodPieces: 11980,
    rejectedPieces: 560,
    qualityRate: 95.4,
    target: 15000,
  };

  const progress =
    (summary.totalProduction / summary.target) * 100;

  // =========================
  // TREND DATA
  // =========================

  const hourlyData = [
    { time: "8AM", defects: 12 },
    { time: "9AM", defects: 18 },
    { time: "10AM", defects: 25 },
    { time: "11AM", defects: 20 },
    { time: "12PM", defects: 14 },
    { time: "1PM", defects: 10 },
  ];

  const dailyData = [
    { time: "Mon", defects: 110 },
    { time: "Tue", defects: 150 },
    { time: "Wed", defects: 90 },
    { time: "Thu", defects: 180 },
    { time: "Fri", defects: 120 },
  ];

  const weeklyData = [
    { time: "Week 1", defects: 780 },
    { time: "Week 2", defects: 620 },
    { time: "Week 3", defects: 540 },
    { time: "Week 4", defects: 490 },
  ];

  const trendData =
    activeTrend === "hourly"
      ? hourlyData
      : activeTrend === "daily"
      ? dailyData
      : weeklyData;

  // =========================
  // LINE MONITORING
  // =========================

  const lineMonitoring = [
    {
      line: "Line 03",
      output: 2400,
      defects: 30,
      quality: 98.7,
      status: "Excellent",
    },
    {
      line: "Line 05",
      output: 2150,
      defects: 60,
      quality: 96.8,
      status: "Stable",
    },
    {
      line: "Line 07",
      output: 1980,
      defects: 120,
      quality: 90.2,
      status: "Attention",
    },
    {
      line: "Line 11",
      output: 1700,
      defects: 150,
      quality: 88.1,
      status: "Critical",
    },
  ];

  // =========================
  // CHECKER PERFORMANCE
  // =========================

  const checkerPerformance = [
    {
      name: "Nimal",
      checked: 4200,
      defects: 45,
      quality: 98.1,
    },
    {
      name: "Kasun",
      checked: 3800,
      defects: 62,
      quality: 96.9,
    },
    {
      name: "Amila",
      checked: 3500,
      defects: 80,
      quality: 94.5,
    },
  ];

  // =========================
  // TOP DEFECTS
  // =========================

  const topDefects = [
    {
      defect: "Broken Stitch",
      count: 145,
    },
    {
      defect: "Oil Mark",
      count: 89,
    },
    {
      defect: "Needle Damage",
      count: 52,
    },
    {
      defect: "Hole",
      count: 37,
    },
  ];

  // =========================
  // ALERTS
  // =========================

  const alerts = [
    "Line 11 defect rate exceeded threshold",
    "Oil mark trend increasing in Sewing Section",
    "Production slowing in Shift B",
  ];

  // =========================
  // QUICK ACTIONS
  // =========================

  const quickActions = [
    {
      title: "Add Defect",
      icon: <ClipboardPlus size={24} />,
    },
    {
      title: "Create Report",
      icon: <FileText size={24} />,
    },
    {
      title: "Assign Checker",
      icon: <UserPlus size={24} />,
    },
    {
      title: "Export Summary",
      icon: <Download size={24} />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      {/* ================= HEADER ================= */}

      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8 mb-6">

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

          <div>
            <p className="text-slate-500 text-sm mb-2">
              QA Supervisor Dashboard
            </p>

            <h1 className="text-4xl font-bold text-black mb-3">
              Factory Operations Overview
            </h1>

            <p className="text-slate-500 text-lg">
              Monitor production quality and operational performance
            </p>
          </div>

          {/* STATUS */}
          <div className="bg-green-50 border border-green-200 rounded-3xl px-8 py-6 flex items-center gap-5">

            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
              <ShieldCheck
                size={32}
                className="text-green-600"
              />
            </div>

            <div>
              <p className="text-slate-500 text-sm">
                Live Factory Status
              </p>

              <h2 className="text-3xl font-bold text-green-600">
                Stable
              </h2>

              <p className="text-sm text-green-500 mt-1">
                Quality performance within safe range
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= KPI CARDS ================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

        {/* TOTAL */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">

          <div className="flex items-center justify-between mb-5">

            <p className="text-slate-500 font-medium">
              Total Production
            </p>

            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
              <Factory size={24} />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-black">
            {summary.totalProduction.toLocaleString()}
          </h2>

          <p className="text-slate-500 mt-2">
            Pieces produced today
          </p>
        </div>

        {/* GOOD */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">

          <div className="flex items-center justify-between mb-5">

            <p className="text-slate-500 font-medium">
              Good Pieces
            </p>

            <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
              <TrendingUp
                size={24}
                className="text-green-600"
              />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-black">
            {summary.goodPieces.toLocaleString()}
          </h2>

          <p className="text-green-600 mt-2 font-medium">
            High quality output
          </p>
        </div>

        {/* REJECTED */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">

          <div className="flex items-center justify-between mb-5">

            <p className="text-slate-500 font-medium">
              Rejected Pieces
            </p>

            <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
              <TrendingDown
                size={24}
                className="text-orange-600"
              />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-black">
            {summary.rejectedPieces.toLocaleString()}
          </h2>

          <p className="text-orange-600 mt-2 font-medium">
            Requires attention
          </p>
        </div>

        {/* QUALITY */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">

          <div className="flex items-center justify-between mb-5">

            <p className="text-slate-500 font-medium">
              Quality Rate
            </p>

            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
              <ShieldCheck
                size={24}
                className="text-blue-600"
              />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-black">
            {summary.qualityRate}%
          </h2>

          <p className="text-blue-600 mt-2 font-medium">
            Factory quality performance
          </p>
        </div>
      </div>

      {/* ================= QUICK ACTIONS ================= */}

      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8 mb-6">

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-black">
            Quick Actions
          </h2>

          <p className="text-slate-500 mt-1">
            Frequently used operational tasks
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {quickActions.map((action, index) => (
            <button
              key={index}
              className="bg-slate-50 hover:bg-black hover:text-white border border-slate-200 rounded-3xl p-6 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center">

                <div className="mb-4">
                  {action.icon}
                </div>

                <p className="font-semibold">
                  {action.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ================= TARGET + ALERTS ================= */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">

        {/* TARGET */}
        <div className="xl:col-span-2 bg-white border border-slate-200 rounded-3xl shadow-sm p-8">

          <div className="flex items-center justify-between mb-6">

            <div>
              <h2 className="text-2xl font-bold text-black">
                Production Target Progress
              </h2>

              <p className="text-slate-500 mt-1">
                Live production tracking
              </p>
            </div>

            <div className="text-right">

              <h3 className="text-3xl font-bold text-black">
                {summary.totalProduction.toLocaleString()}
                /
                {summary.target.toLocaleString()}
              </h3>

              <p className="text-slate-500 text-sm">
                Completed pieces
              </p>
            </div>
          </div>

          {/* PROGRESS BAR */}
          <div className="w-full h-5 rounded-full bg-slate-200 overflow-hidden">

            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-black rounded-full"
            ></div>
          </div>

          <div className="flex justify-between mt-3 text-sm text-slate-500">
            <span>0%</span>
            <span>{Math.round(progress)}%</span>
            <span>100%</span>
          </div>
        </div>

        {/* ALERTS */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">

          <div className="flex items-center gap-4 mb-6">

            <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center">
              <BellRing
                size={28}
                className="text-red-500"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black">
                Live Alerts
              </h2>

              <p className="text-slate-500">
                Real-time notifications
              </p>
            </div>
          </div>

          <div className="space-y-4">

            {alerts.map((alert, index) => (
              <div
                key={index}
                className="bg-red-50 border border-red-100 rounded-2xl p-4"
              >
                <p className="text-sm font-medium text-red-600">
                  ⚠ {alert}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= DEFECT TREND CHART ================= */}

      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8 mb-6">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">

          <div>
            <h2 className="text-2xl font-bold text-black">
              Defect Trend Analysis
            </h2>

            <p className="text-slate-500 mt-1">
              Monitor defect movements over time
            </p>
          </div>

          {/* TABS */}
          <div className="flex bg-slate-100 rounded-2xl p-1">

            {["hourly", "daily", "weekly"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTrend(tab)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 capitalize
                ${
                  activeTrend === tab
                    ? "bg-black text-white"
                    : "text-slate-600 hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* CHART */}
        <ResponsiveContainer width="100%" height={350}>

          <LineChart data={trendData}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
            />

            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
              }}
            />

            <Legend />

            <Line
              type="monotone"
              dataKey="defects"
              stroke="#ea580c"
              strokeWidth={4}
              dot={{ r: 6 }}
              activeDot={{ r: 8 }}
              name="Defects"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ================= LINE MONITORING ================= */}

      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8 mb-6 overflow-x-auto">

        <div className="mb-6">

          <h2 className="text-2xl font-bold text-black">
            Live Production Monitoring
          </h2>

          <p className="text-slate-500 mt-1">
            Real-time production line overview
          </p>
        </div>

        <table className="w-full min-w-200">

          <thead>
            <tr className="border-b border-slate-200">

              <th className="text-left py-4 text-slate-500 font-semibold">
                Line
              </th>

              <th className="text-left py-4 text-slate-500 font-semibold">
                Output
              </th>

              <th className="text-left py-4 text-slate-500 font-semibold">
                Defects
              </th>

              <th className="text-left py-4 text-slate-500 font-semibold">
                Quality %
              </th>

              <th className="text-left py-4 text-slate-500 font-semibold">
                Status
              </th>
            </tr>
          </thead>

          <tbody>

            {lineMonitoring.map((line, index) => (
              <tr
                key={index}
                className={`border-b border-slate-100 hover:bg-slate-50 transition-all
                ${
                  line.status === "Critical"
                    ? "bg-red-50"
                    : ""
                }`}
              >
                <td className="py-5 font-semibold text-black">
                  {line.line}
                </td>

                <td className="py-5">
                  {line.output}
                </td>

                <td className="py-5">
                  {line.defects}
                </td>

                <td className="py-5 font-bold">
                  {line.quality}%
                </td>

                <td className="py-5">

                  <span
                    className={`px-4 py-2 rounded-2xl text-sm font-semibold
                    ${
                      line.status === "Excellent"
                        ? "bg-green-100 text-green-600"
                        : line.status === "Stable"
                        ? "bg-blue-100 text-blue-600"
                        : line.status === "Attention"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {line.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= BOTTOM SECTION ================= */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* CHECKER PERFORMANCE */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">

          <div className="mb-6">

            <h2 className="text-2xl font-bold text-black">
              Checker Performance Overview
            </h2>

            <p className="text-slate-500 mt-1">
              Team operational performance summary
            </p>
          </div>

          <div className="space-y-4">

            {checkerPerformance.map((checker, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-3xl p-5 border border-slate-100"
              >
                <div className="flex items-center justify-between mb-4">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center font-bold">
                      {checker.name.charAt(0)}
                    </div>

                    <div>
                      <h3 className="font-bold text-black">
                        {checker.name}
                      </h3>

                      <p className="text-sm text-slate-500">
                        Quality Checker
                      </p>
                    </div>
                  </div>

                  <div className="px-4 py-2 rounded-2xl bg-green-100 text-green-600 font-semibold text-sm">
                    {checker.quality}%
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">

                  <div>
                    <p className="text-sm text-slate-500">
                      Checked PCS
                    </p>

                    <h4 className="text-xl font-bold text-black">
                      {checker.checked}
                    </h4>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Defects Found
                    </p>

                    <h4 className="text-xl font-bold text-orange-600">
                      {checker.defects}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TOP DEFECTS */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">

          <div className="flex items-center gap-4 mb-6">

            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
              <AlertTriangle
                size={28}
                className="text-orange-500"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black">
                Most Common Defects
              </h2>

              <p className="text-slate-500">
                Highest occurring issues
              </p>
            </div>
          </div>

          <div className="space-y-4">

            {topDefects.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-slate-50 rounded-2xl px-5 py-4"
              >
                <div className="flex items-center gap-4">

                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>

                  <h3 className="font-semibold text-black">
                    {item.defect}
                  </h3>
                </div>

                <p className="font-bold text-orange-600 text-lg">
                  {item.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupervisorDashboard;