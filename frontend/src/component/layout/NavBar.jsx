import React from "react";
import {
  Menu,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm">

      {/* Left Side */}
      <div className="flex items-center gap-4">

        {/* Sidebar Toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-all"
        >
          <Menu size={20} className="text-black" />
        </button>

        {/* Search */}
        <div className="hidden lg:flex items-center bg-slate-100 rounded-2xl px-4 h-12 w-80">

          <Search size={18} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent ml-3 outline-none w-full text-sm text-black placeholder-slate-400"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Notifications */}
        <button className="relative w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-all">

          <Bell size={20} className="text-black" />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>
        </button>

        {/* Profile */}
        <button className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2 hover:bg-slate-100 transition-all">

          <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center font-semibold">
            P
          </div>

          <div className="hidden md:block text-left">
            <h4 className="text-sm font-semibold text-black">
              Pramod
            </h4>

            <p className="text-xs text-slate-500">
              Factory Admin
            </p>
          </div>

          <ChevronDown size={18} className="text-slate-500" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;