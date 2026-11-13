import React from "react";
import {
  LayoutDashboard,
  AlertTriangle,
  FileBarChart2,
  Users,
  Factory,
  Settings,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ sidebarOpen }) => {

    const navigate = useNavigate();
  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      title: "Defects",
      icon: <AlertTriangle size={20} />,
    },
    {
      title: "Reports",
      icon: <FileBarChart2 size={20} />,
    },
    {
      title: "Users",
      icon: <Users size={20} />,
    },
    {
      title: "Production",
      icon: <Factory size={20} />,
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <aside
      className={`bg-white border-r border-slate-200 transition-all duration-300 shadow-sm
      ${sidebarOpen ? "w-72" : "w-24"}
      hidden md:flex flex-col min-h-screen`}
    >
      {/* Logo */}
      <div className="h-20 border-b border-slate-200 flex items-center px-6">
        
        <div className="w-11 h-11 rounded-2xl bg-black flex items-center justify-center text-white font-bold text-lg">
          Q
        </div>

        {sidebarOpen && (
          <div className="ml-4">
            <h1 className="text-lg font-bold text-black">
              QFlow
            </h1>

            <p className="text-xs text-slate-500">
              Quality Management
            </p>
          </div>
        )}
      </div>

      {/* Menu */}
      <div className="flex-1 py-6 px-4">

        <p
          className={`text-xs font-semibold text-slate-400 uppercase mb-4 tracking-wider ${
            !sidebarOpen && "hidden"
          }`}
        >
          Main Menu
        </p>

        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-black hover:bg-slate-100 transition-all duration-200 group"
            >
              <span className="text-black group-hover:scale-110 transition-transform">
                {item.icon}
              </span>

              {sidebarOpen && (
                <span className="font-medium text-[15px]">
                  {item.title}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 p-4">

        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-black hover:bg-red-50 hover:text-red-600 transition-all"
        onClick={()=> navigate("/")}>
          <LogOut size={20} />

          {sidebarOpen && (
            <span className="font-medium">
              Logout
            </span>
          )}
        </button>

        {sidebarOpen && (
          <p className="text-xs text-slate-400 mt-4 text-center">
            Powered by Pramod Tech Solutions
          </p>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;