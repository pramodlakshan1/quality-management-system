import React, { useState } from "react";

import {
  ShieldCheck,
  Factory,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Users,
  FileCheck,
  BellRing,
  Wallet,
  Target,
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
  BarChart,
  Bar,
} from "recharts";

const ManagerDashboard = () => {

  // =========================================
  // FILTER STATES
  // =========================================

  const [factoryFilter, setFactoryFilter] =
    useState("All Factories");

  const [trendFilter, setTrendFilter] =
    useState("Monthly");

  // =========================================
  // EXECUTIVE SUMMARY
  // =========================================

  const summary = [
    {
      title: "Total Production",
      value: "1.24M",
      subtitle: "Pieces this month",
      icon: <Factory size={26} />,
      bg: "bg-slate-100",
    },
    {
      title: "Quality Rate",
      value: "96.8%",
      subtitle: "Factory quality level",
      icon: <ShieldCheck size={26} />,
      bg: "bg-green-100",
    },
    {
      title: "Defect Loss",
      value: "Rs. 1.2M",
      subtitle: "Loss due to defects",
      icon: <TrendingDown size={26} />,
      bg: "bg-orange-100",
    },
    {
      title: "Factory Efficiency",
      value: "92%",
      subtitle: "Operational efficiency",
      icon: <TrendingUp size={26} />,
      bg: "bg-blue-100",
    },
  ];

  // =========================================
  // FACTORY PERFORMANCE
  // =========================================

  const factoryPerformance = [
    {
      factory: "Katunayake Factory",
      quality: 97.2,
      efficiency: 94,
      status: "Excellent",
    },
    {
      factory: "Gampaha Factory",
      quality: 92.8,
      efficiency: 89,
      status: "Stable",
    },
    {
      factory: "Kandy Factory",
      quality: 88.2,
      efficiency: 81,
      status: "Risk",
    },
  ];

  // =========================================
  // TARGET ACHIEVEMENT
  // =========================================

  const targetData = [
    {
      section: "Sewing",
      progress: 92,
    },
    {
      section: "Finishing",
      progress: 81,
    },
    {
      section: "Packing",
      progress: 96,
    },
  ];

  // =========================================
  // QUALITY TREND DATA
  // =========================================

  const monthlyData = [
    { name: "Jan", quality: 92 },
    { name: "Feb", quality: 93 },
    { name: "Mar", quality: 94 },
    { name: "Apr", quality: 95 },
    { name: "May", quality: 96 },
  ];

  const quarterlyData = [
    { name: "Q1", quality: 91 },
    { name: "Q2", quality: 94 },
    { name: "Q3", quality: 96 },
    { name: "Q4", quality: 97 },
  ];

  const yearlyData = [
    { name: "2022", quality: 88 },
    { name: "2023", quality: 91 },
    { name: "2024", quality: 94 },
    { name: "2025", quality: 96 },
  ];

  const trendData =
    trendFilter === "Monthly"
      ? monthlyData
      : trendFilter === "Quarterly"
      ? quarterlyData
      : yearlyData;

  // =========================================
  // RISK AREAS
  // =========================================

  const riskAreas = [
    {
      area: "Sewing Section",
      issue: "Oil marks increasing",
      level: "High",
    },
    {
      area: "Packing Unit",
      issue: "Delayed inspections",
      level: "Medium",
    },
    {
      area: "Line 07",
      issue: "Needle damages detected",
      level: "Critical",
    },
  ];

  // =========================================
  // WORKFORCE SUMMARY
  // =========================================

  const workforce = [
    {
      title: "Active Checkers",
      value: 48,
    },
    {
      title: "Attendance Rate",
      value: "94%",
    },
    {
      title: "Shift Productivity",
      value: "91%",
    },
  ];

  // =========================================
  // AUDIT DATA
  // =========================================

  const audits = [
    {
      title: "ISO Compliance",
      status: "Passed",
    },
    {
      title: "Audit Readiness",
      status: "92%",
    },
    {
      title: "Inspection History",
      status: "Updated",
    },
  ];

  // =========================================
  // COST ANALYSIS
  // =========================================

  const costData = [
    {
      category: "Rework Cost",
      amount: "Rs. 450K",
    },
    {
      category: "Rejected Fabric",
      amount: "Rs. 320K",
    },
    {
      category: "Production Delay",
      amount: "Rs. 480K",
    },
  ];

  // =========================================
  // ALERTS
  // =========================================

  const alerts = [
    "Factory quality dropped 2% this month",
    "Defect losses exceeded safe threshold",
    "Kandy Factory requires management review",
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      {/* ================================= HEADER ================================= */}

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 mb-6">

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

          <div>
            <p className="text-slate-500 text-sm mb-2">
              Executive Management Dashboard
            </p>

            <h1 className="text-4xl font-bold text-black mb-3">
              Manufacturing Intelligence Overview
            </h1>

            <p className="text-slate-500 text-lg">
              Strategic factory performance and quality analytics
            </p>
          </div>

          {/* FILTER */}
          <div className="flex gap-4">

            <select
              value={factoryFilter}
              onChange={(e) =>
                setFactoryFilter(e.target.value)
              }
              className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 font-medium outline-none"
            >
              <option>All Factories</option>
              <option>Katunayake Factory</option>
              <option>Gampaha Factory</option>
              <option>Kandy Factory</option>
            </select>
          </div>
        </div>
      </div>

      {/* ================================= EXECUTIVE SUMMARY ================================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

        {summary.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6"
          >

            <div className="flex items-center justify-between mb-5">

              <p className="text-slate-500 font-medium">
                {item.title}
              </p>

              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.bg}`}
              >
                {item.icon}
              </div>
            </div>

            <h2 className="text-4xl font-bold text-black">
              {item.value}
            </h2>

            <p className="text-slate-500 mt-2">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>

      {/* ================================= FACTORY PERFORMANCE ================================= */}

      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8 mb-6">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">

          <div>
            <h2 className="text-2xl font-bold text-black">
              Factory Performance Comparison
            </h2>

            <p className="text-slate-500 mt-1">
              Compare overall factory operational health
            </p>
          </div>

          <select className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 outline-none font-medium">
            <option>Section Wise</option>
            <option>Factory Wise</option>
          </select>
        </div>

        <div className="space-y-5">

          {factoryPerformance.map((factory, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-100"
            >

              <div className="flex items-center justify-between mb-5">

                <div>
                  <h3 className="text-xl font-bold text-black">
                    {factory.factory}
                  </h3>

                  <p className="text-slate-500 mt-1">
                    Factory operational performance
                  </p>
                </div>

                <span
                  className={`px-4 py-2 rounded-2xl text-sm font-semibold
                  ${
                    factory.status === "Excellent"
                      ? "bg-green-100 text-green-600"
                      : factory.status === "Stable"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {factory.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-6">

                <div>
                  <p className="text-sm text-slate-500">
                    Quality Rate
                  </p>

                  <h4 className="text-3xl font-bold text-black mt-1">
                    {factory.quality}%
                  </h4>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Efficiency
                  </p>

                  <h4 className="text-3xl font-bold text-black mt-1">
                    {factory.efficiency}%
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================================= TARGET + ALERTS ================================= */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">

        {/* TARGET ACHIEVEMENT */}
        <div className="xl:col-span-2 bg-white border border-slate-200 rounded-3xl shadow-sm p-8">

          <div className="flex items-center gap-4 mb-8">

            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
              <Target
                size={28}
                className="text-blue-600"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black">
                Production Target Achievement
              </h2>

              <p className="text-slate-500">
                Section-wise target completion
              </p>
            </div>
          </div>

          <div className="space-y-6">

            {targetData.map((item, index) => (
              <div key={index}>

                <div className="flex items-center justify-between mb-3">

                  <p className="font-semibold text-black">
                    {item.section}
                  </p>

                  <p className="font-semibold text-slate-600">
                    {item.progress}%
                  </p>
                </div>

                <div className="w-full h-4 rounded-full bg-slate-200 overflow-hidden">

                  <div
                    style={{
                      width: `${item.progress}%`,
                    }}
                    className="h-full bg-black rounded-full"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EXECUTIVE ALERTS */}
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
                Executive Alerts
              </h2>

              <p className="text-slate-500">
                Strategic business notifications
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

      {/* ================================= QUALITY TREND ================================= */}

      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8 mb-6">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">

          <div>
            <h2 className="text-2xl font-bold text-black">
              Quality Trend Analytics
            </h2>

            <p className="text-slate-500 mt-1">
              Monitor long-term quality movement and seasonal trends
            </p>
          </div>

          <div className="flex bg-slate-100 rounded-2xl p-1">

            {["Monthly", "Quarterly", "Yearly"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() =>
                    setTrendFilter(item)
                  }
                  className={`px-6 py-3 rounded-2xl font-medium transition-all
                  ${
                    trendFilter === item
                      ? "bg-black text-white"
                      : "text-slate-600"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>

        <ResponsiveContainer width="100%" height={400}>

          <LineChart data={trendData}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
            />

            <XAxis
              dataKey="name"
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
              dataKey="quality"
              stroke="#16a34a"
              strokeWidth={4}
              dot={{ r: 6 }}
              activeDot={{ r: 8 }}
              name="Quality %"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ================================= BOTTOM GRID ================================= */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* RISK AREAS */}
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
                Top Risk Areas
              </h2>

              <p className="text-slate-500">
                Sections requiring management attention
              </p>
            </div>
          </div>

          <div className="space-y-4">

            {riskAreas.map((risk, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-5 border border-slate-100"
              >
                <div className="flex items-center justify-between mb-3">

                  <h3 className="font-bold text-black">
                    {risk.area}
                  </h3>

                  <span className="px-4 py-2 rounded-2xl bg-red-100 text-red-600 text-sm font-semibold">
                    {risk.level}
                  </span>
                </div>

                <p className="text-slate-500">
                  {risk.issue}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* WORKFORCE SUMMARY */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">

          <div className="flex items-center gap-4 mb-6">

            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
              <Users
                size={28}
                className="text-blue-600"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black">
                Workforce Performance Summary
              </h2>

              <p className="text-slate-500">
                Workforce operational overview
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">

            {workforce.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-5 border border-slate-100"
              >
                <p className="text-slate-500 mb-2">
                  {item.title}
                </p>

                <h3 className="text-3xl font-bold text-black">
                  {item.value}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* AUDIT STATUS */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">

          <div className="flex items-center gap-4 mb-6">

            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
              <FileCheck
                size={28}
                className="text-green-600"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black">
                Audit & Compliance Status
              </h2>

              <p className="text-slate-500">
                Compliance and audit monitoring
              </p>
            </div>
          </div>

          <div className="space-y-4">

            {audits.map((audit, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-slate-50 rounded-2xl p-5 border border-slate-100"
              >
                <p className="font-semibold text-black">
                  {audit.title}
                </p>

                <span className="px-4 py-2 rounded-2xl bg-green-100 text-green-600 text-sm font-semibold">
                  {audit.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* COST ANALYSIS */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">

          <div className="flex items-center gap-4 mb-6">

            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
              <Wallet
                size={28}
                className="text-orange-600"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black">
                Cost Analysis Dashboard
              </h2>

              <p className="text-slate-500">
                Operational loss and cost tracking
              </p>
            </div>
          </div>

          <div className="space-y-4">

            {costData.map((cost, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-slate-50 rounded-2xl p-5 border border-slate-100"
              >
                <p className="font-semibold text-black">
                  {cost.category}
                </p>

                <h3 className="text-xl font-bold text-orange-600">
                  {cost.amount}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;