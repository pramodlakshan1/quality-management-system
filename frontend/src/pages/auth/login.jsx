import React, { useState } from "react";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 flex">
      
      {/* LEFT SIDE */}
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-slate-900 to-slate-700 text-white relative overflow-hidden">
        
        <div className="flex flex-col justify-center px-16 z-10">
          
          {/* Branding */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg">
                <ShieldCheck size={28} />
              </div>

              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  QFlow
                </h1>
                <p className="text-slate-300 text-sm">
                  Quality Management System
                </p>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="max-w-md">
            <h2 className="text-5xl font-bold leading-tight mb-6">
              Smart Quality Tracking for Modern Factories
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed">
              Monitor defects, improve production quality, and manage factory operations efficiently with real-time insights.
            </p>
          </div>

          {/* Features */}
          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <p className="text-slate-200">Real-time defect monitoring</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <p className="text-slate-200">Production analytics dashboard</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <p className="text-slate-200">Role-based secure access</p>
            </div>
          </div>
        </div>

        {/* Background Effect */}
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-10 right-10"></div>
        <div className="absolute w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl bottom-10 left-10"></div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10">
        
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-200 p-10">
          
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white">
              <ShieldCheck size={26} />
            </div>

            <div>
              <h1 className="text-2xl font-bold">QFlow</h1>
              <p className="text-sm text-slate-500">
                Quality Management
              </p>
            </div>
          </div>

          {/* Welcome */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Welcome Back
            </h2>

            <p className="text-slate-500">
              Login to your factory workspace
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">

            {/* Username */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Username
              </label>

              <input
                type="text"
                placeholder="Enter your username"
                className="w-full h-14 px-4 rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700">
                  Password
                </label>

                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  onClick={()=> navigate("/forgot-password")}
                >
                  Forgot Password?
                </button>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full h-14 px-4 pr-14 rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 w-14 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />

                <span className="text-sm text-slate-600">
                  Remember me
                </span>
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full h-14 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-lg shadow-blue-200 transition-all duration-200"
                onClick={()=> navigate("/checker-dashboard")}
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-400">
              Powered by Pramod Tech Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;