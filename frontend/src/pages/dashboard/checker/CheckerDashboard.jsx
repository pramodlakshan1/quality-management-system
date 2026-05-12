import React, { useState } from "react";

import Sidebar from "../../../component/layout/SideBar";
import Navbar from "../../../component/layout/NavBar";

const CheckerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex bg-slate-100">

      <Sidebar sidebarOpen={sidebarOpen} />

      <div className="flex-1 flex flex-col">

        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="p-6">
          <div className="bg-white rounded-3xl p-10 border border-slate-200 min-h-125">
            Dashboard Content for checker
          </div>
        </main>
      </div>
    </div>
  );
};

export default CheckerDashboard;