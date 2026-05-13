import React from "react";
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Factory,
  ShieldCheck,
} from "lucide-react";
import CheckerDailyGraph from "../../../component/charts/QualityCherker/CheckerDailyQualityChart";
import CheckerTotalGraph from "../../../component/charts/QualityCherker/TotalGoodandBadChart";

const CheckerDashboard = () => {

  // MOCK DATA
  const dashboardData = {
    checkerName: "Nimal Perera",
    line: "Line 05",
    section: "Sewing Section",
    totalOutput: 520,
    goodPieces: 498,
    badPieces: 22,
    target: 650,
    qualityRate: 95.7,
    factoryQualityStatus: "Stable",
    topDefect: "Broken Stitch",
    topDefectCount: 14,
  };

  const topLines = [
    { line: "Line 03", quality: 98.7 },
    { line: "Line 08", quality: 97.9 },
    { line: "Line 01", quality: 97.3 },
    { line: "Line 05", quality: 95.7 },
    { line: "Line 06", quality: 95.2 },
  ];


  const progress =
    (dashboardData.totalOutput / dashboardData.target) * 100;

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      {/* HEADER */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 mb-6">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          {/* Left */}
          <div>
            <p className="text-slate-500 text-sm mb-2">
              Quality Checker Dashboard
            </p>

            <h1 className="text-4xl font-bold text-black mb-3">
              Welcome, {dashboardData.checkerName}
            </h1>

            <div className="flex items-center gap-3 flex-wrap">

              <div className="px-4 py-2 rounded-2xl bg-slate-100 text-sm font-medium text-slate-700">
                {dashboardData.line}
              </div>

              <div className="px-4 py-2 rounded-2xl bg-slate-100 text-sm font-medium text-slate-700">
                {dashboardData.section}
              </div>
            </div>
          </div>

          {/* Factory Status */}
          <div className="bg-green-50 border border-green-200 rounded-3xl px-6 py-5 flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
              <ShieldCheck className="text-green-600" size={28} />
            </div>

            <div>
              <p className="text-sm text-slate-500 mb-1">
                Live Factory Quality Status
              </p>

              <h2 className="text-2xl font-bold text-green-600">
                {dashboardData.factoryQualityStatus}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

        {/* Total Output */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">

          <div className="flex items-center justify-between mb-5">
            <p className="text-slate-500 font-medium">
              Total Output
            </p>

            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
              <Factory className="text-black" size={24} />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-black">
            {dashboardData.totalOutput}
          </h2>

          <p className="text-slate-500 mt-2">
            Pieces checked today
          </p>
        </div>

        {/* Good Pieces */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">

          <div className="flex items-center justify-between mb-5">
            <p className="text-slate-500 font-medium">
              Good Pieces
            </p>

            <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
              <TrendingUp className="text-green-600" size={24} />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-black">
            {dashboardData.goodPieces}
          </h2>

          <p className="text-green-600 mt-2 font-medium">
            High quality output
          </p>
        </div>

        {/* Bad Pieces */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">

          <div className="flex items-center justify-between mb-5">
            <p className="text-slate-500 font-medium">
              Rejected Pieces
            </p>

            <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center">
              <TrendingDown className="text-red-600" size={24} />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-black">
            {dashboardData.badPieces}
          </h2>

          <p className="text-red-500 mt-2 font-medium">
            Needs improvement
          </p>
        </div>

        {/* Quality Rate */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">

          <div className="flex items-center justify-between mb-5">
            <p className="text-slate-500 font-medium">
              Quality Rate
            </p>

            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
              <ShieldCheck className="text-blue-600" size={24} />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-black">
            {dashboardData.qualityRate}%
          </h2>

          <p className="text-blue-600 mt-2 font-medium">
            Overall quality score
          </p>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">

        {/* Target Progress */}
        <div className="xl:col-span-2 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">

          <div className="flex items-center justify-between mb-6">

            <div>
              <h2 className="text-2xl font-bold text-black">
                Shift Target Progress
              </h2>

              <p className="text-slate-500 mt-1">
                Current production progress
              </p>
            </div>

            <div className="text-right">
              <h3 className="text-3xl font-bold text-black">
                {dashboardData.totalOutput}/{dashboardData.target}
              </h3>

              <p className="text-slate-500 text-sm">
                Pieces completed
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-5 rounded-full bg-slate-200 overflow-hidden">

            <div
              style={{ width: `${progress}%` }}
              className="h-full rounded-full bg-black transition-all duration-500"
            ></div>
          </div>

          <div className="mt-3 flex justify-between text-sm text-slate-500">
            <span>0%</span>
            <span>{Math.round(progress)}%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Top Defect */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">

          <div className="flex items-center justify-between mb-6">

            <div>
              <h2 className="text-2xl font-bold text-black">
                Top Defect
              </h2>

              <p className="text-slate-500 mt-1">
                Most common issue today
              </p>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
              <AlertTriangle className="text-orange-500" size={28} />
            </div>
          </div>

          <h3 className="text-3xl font-bold text-black mb-2">
            {dashboardData.topDefect}
          </h3>

          <p className="text-orange-500 font-semibold text-lg">
            {dashboardData.topDefectCount} occurrences
          </p>
        </div>
      </div>

      {/* BOTTOM TABLES */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Top Performing Lines */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
         <CheckerDailyGraph/>
          
        </div>

        {/* Attention Lines */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <CheckerTotalGraph/>
        </div>
      </div>
    </div>
  );
};

export default CheckerDashboard;