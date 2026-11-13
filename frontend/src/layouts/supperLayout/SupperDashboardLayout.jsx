import React, { useState } from "react";

import Sidebar from "../../component/layout/SideBar";
import Navbar from "../../component/layout/NavBar";
import SuperAdminDashboard from "../../pages/dashboard/superadmin/SupperAdminDashboard";

const SuperDashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content Area */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="p-4 md:p-6 2xl:p-10">
          <SuperAdminDashboard />
        </main>
      </div>
    </div>
  );
};

export default SuperDashboardLayout;