import React from "react";

import {
  Building2,
  Users,
  ShieldAlert,
  TrendingUp,
  CreditCard,
  Activity,
  Database,
  Server,
  BellRing,
  Globe,
  Wallet,
  AlertTriangle,
  CheckCircle2,
  Clock3,
  Factory,
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

const SuperAdminDashboard = () => {

  // =========================================
  // PLATFORM SUMMARY
  // =========================================

  const summary = [
    {
      title: "Total Factories",
      value: "148",
      subtitle: "Active companies",
      icon: <Building2 size={26} />,
      bg: "bg-blue-100",
    },
    {
      title: "Platform Users",
      value: "12,480",
      subtitle: "Registered users",
      icon: <Users size={26} />,
      bg: "bg-green-100",
    },
    {
      title: "Monthly Revenue",
      value: "Rs. 4.8M",
      subtitle: "Subscription income",
      icon: <Wallet size={26} />,
      bg: "bg-orange-100",
    },
    {
      title: "System Health",
      value: "99.9%",
      subtitle: "Server uptime",
      icon: <Server size={26} />,
      bg: "bg-slate-100",
    },
  ];

  // =========================================
  // PLATFORM GROWTH
  // =========================================

  const growthData = [
    { month: "Jan", companies: 18 },
    { month: "Feb", companies: 26 },
    { month: "Mar", companies: 34 },
    { month: "Apr", companies: 52 },
    { month: "May", companies: 74 },
    { month: "Jun", companies: 92 },
  ];

  // =========================================
  // SUBSCRIPTION DISTRIBUTION
  // =========================================

  const planData = [
    {
      name: "Basic",
      value: 48,
      color: "#0f172a",
    },
    {
      name: "Professional",
      value: 62,
      color: "#16a34a",
    },
    {
      name: "Enterprise",
      value: 38,
      color: "#ea580c",
    },
  ];

  // =========================================
  // PLATFORM ACTIVITY
  // =========================================

  const activityData = [
    {
      day: "Mon",
      users: 2100,
    },
    {
      day: "Tue",
      users: 3200,
    },
    {
      day: "Wed",
      users: 4100,
    },
    {
      day: "Thu",
      users: 3800,
    },
    {
      day: "Fri",
      users: 5200,
    },
  ];

  // =========================================
  // SYSTEM ALERTS
  // =========================================

  const alerts = [
    "High API traffic detected in Singapore region",
    "2 factories nearing subscription expiration",
    "Database optimization recommended",
  ];

  // =========================================
  // FACTORY STATUS
  // =========================================

  const factories = [
    {
      company: "ABC Garments",
      plan: "Enterprise",
      users: 480,
      status: "Healthy",
    },
    {
      company: "TexWear Lanka",
      plan: "Professional",
      users: 210,
      status: "Warning",
    },
    {
      company: "Prime Clothing",
      plan: "Basic",
      users: 82,
      status: "Healthy",
    },
  ];

  // =========================================
  // BILLING OVERVIEW
  // =========================================

  const billing = [
    {
      title: "Paid Subscriptions",
      value: "132",
    },
    {
      title: "Pending Renewals",
      value: "16",
    },
    {
      title: "Revenue Growth",
      value: "+18%",
    },
  ];

  // =========================================
  // SERVER STATUS
  // =========================================

  const serverStatus = [
    {
      title: "API Server",
      status: "Operational",
    },
    {
      title: "Database",
      status: "Stable",
    },
    {
      title: "Authentication",
      status: "Healthy",
    },
    {
      title: "Cloud Storage",
      status: "Operational",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      {/* ================================= HEADER ================================= */}

      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8 mb-6">

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

          <div>
            <p className="text-slate-500 text-sm mb-2">
              SaaS Platform Administration
            </p>

            <h1 className="text-4xl font-bold text-black mb-3">
              Super Admin Dashboard
            </h1>

            <p className="text-slate-500 text-lg">
              Platform monitoring, business analytics and system operations
            </p>
          </div>

          {/* PLATFORM STATUS */}
          <div className="bg-green-50 border border-green-200 rounded-3xl px-8 py-6 flex items-center gap-5">

            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
              <CheckCircle2
                size={32}
                className="text-green-600"
              />
            </div>

            <div>
              <p className="text-slate-500 text-sm">
                Platform Status
              </p>

              <h2 className="text-3xl font-bold text-green-600">
                Operational
              </h2>

              <p className="text-sm text-green-500 mt-1">
                All services functioning normally
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================================= SUMMARY CARDS ================================= */}

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

      {/* ================================= GROWTH + SUBSCRIPTION ================================= */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">

        {/* PLATFORM GROWTH */}
        <div className="xl:col-span-2 bg-white border border-slate-200 rounded-3xl shadow-sm p-8">

          <div className="flex items-center gap-4 mb-6">

            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
              <TrendingUp
                size={28}
                className="text-blue-600"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black">
                Platform Growth Analytics
              </h2>

              <p className="text-slate-500">
                Company onboarding growth trend
              </p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={350}>

            <LineChart data={growthData}>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e2e8f0"
              />

              <XAxis
                dataKey="month"
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

              <Line
                type="monotone"
                dataKey="companies"
                stroke="#0f172a"
                strokeWidth={4}
                dot={{ r: 6 }}
                activeDot={{ r: 8 }}
                name="Companies"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* PLAN DISTRIBUTION */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">

          <div className="flex items-center gap-4 mb-6">

            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
              <CreditCard
                size={28}
                className="text-orange-600"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black">
                Subscription Plans
              </h2>

              <p className="text-slate-500">
                Plan distribution overview
              </p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>

            <PieChart>

              <Pie
                data={planData}
                innerRadius={70}
                outerRadius={110}
                dataKey="value"
                paddingAngle={4}
              >

                {planData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={entry.color}
                  />
                ))}
              </Pie>

              <Tooltip />

            </PieChart>
          </ResponsiveContainer>

          <div className="space-y-3 mt-6">

            {planData.map((plan, index) => (
              <div
                key={index}
                className="flex items-center justify-between"
              >

                <div className="flex items-center gap-3">

                  <div
                    className="w-4 h-4 rounded-full"
                    style={{
                      backgroundColor: plan.color,
                    }}
                  ></div>

                  <p className="font-medium text-black">
                    {plan.name}
                  </p>
                </div>

                <p className="font-semibold text-slate-600">
                  {plan.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================================= ACTIVITY + ALERTS ================================= */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">

        {/* USER ACTIVITY */}
        <div className="xl:col-span-2 bg-white border border-slate-200 rounded-3xl shadow-sm p-8">

          <div className="flex items-center gap-4 mb-6">

            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
              <Activity
                size={28}
                className="text-green-600"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black">
                Platform Activity
              </h2>

              <p className="text-slate-500">
                Daily active user monitoring
              </p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={320}>

            <BarChart data={activityData}>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e2e8f0"
                vertical={false}
              />

              <XAxis
                dataKey="day"
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

              <Bar
                dataKey="users"
                fill="#0f172a"
                radius={[8, 8, 0, 0]}
                barSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
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
                System Alerts
              </h2>

              <p className="text-slate-500">
                Platform operational alerts
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

      {/* ================================= FACTORY TABLE ================================= */}

      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8 mb-6 overflow-x-auto">

        <div className="mb-6">

          <h2 className="text-2xl font-bold text-black">
            Customer Factory Overview
          </h2>

          <p className="text-slate-500 mt-1">
            Monitor customer company activity and subscription health
          </p>
        </div>

        <table className="w-full min-w-200">

          <thead>
            <tr className="border-b border-slate-200">

              <th className="text-left py-4 text-slate-500 font-semibold">
                Company
              </th>

              <th className="text-left py-4 text-slate-500 font-semibold">
                Plan
              </th>

              <th className="text-left py-4 text-slate-500 font-semibold">
                Users
              </th>

              <th className="text-left py-4 text-slate-500 font-semibold">
                Status
              </th>
            </tr>
          </thead>

          <tbody>

            {factories.map((factory, index) => (
              <tr
                key={index}
                className="border-b border-slate-100 hover:bg-slate-50 transition-all"
              >
                <td className="py-5 font-semibold text-black">
                  {factory.company}
                </td>

                <td className="py-5">
                  <span className="px-4 py-2 rounded-2xl bg-slate-100 text-slate-700 text-sm font-semibold">
                    {factory.plan}
                  </span>
                </td>

                <td className="py-5 text-slate-700">
                  {factory.users}
                </td>

                <td className="py-5">

                  <span
                    className={`px-4 py-2 rounded-2xl text-sm font-semibold
                    ${
                      factory.status === "Healthy"
                        ? "bg-green-100 text-green-600"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {factory.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================================= BOTTOM GRID ================================= */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* BILLING */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">

          <div className="flex items-center gap-4 mb-6">

            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
              <Wallet
                size={28}
                className="text-green-600"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black">
                Billing & Revenue
              </h2>

              <p className="text-slate-500">
                Subscription financial overview
              </p>
            </div>
          </div>

          <div className="space-y-4">

            {billing.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-slate-50 rounded-2xl p-5 border border-slate-100"
              >
                <p className="font-semibold text-black">
                  {item.title}
                </p>

                <h3 className="text-xl font-bold text-green-600">
                  {item.value}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* SERVER STATUS */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">

          <div className="flex items-center gap-4 mb-6">

            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
              <Database
                size={28}
                className="text-blue-600"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black">
                Infrastructure Status
              </h2>

              <p className="text-slate-500">
                Platform infrastructure monitoring
              </p>
            </div>
          </div>

          <div className="space-y-4">

            {serverStatus.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-slate-50 rounded-2xl p-5 border border-slate-100"
              >

                <div className="flex items-center gap-4">

                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                    <CheckCircle2
                      size={20}
                      className="text-green-600"
                    />
                  </div>

                  <p className="font-semibold text-black">
                    {item.title}
                  </p>
                </div>

                <span className="px-4 py-2 rounded-2xl bg-green-100 text-green-600 text-sm font-semibold">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;