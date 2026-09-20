import React, { useState } from "react";
import SideBar from "./SideBar/SideBar";
import { Outlet } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const OverallPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#fffdfa] md:px-6 lg:px-8 xl:px-12 2xl:px-[120px]">

      {/* Mobile Header */}
      <header className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center border-b border-neutral-200 bg-white px-4 md:hidden">
        <button
          type="button"
          onClick={() => setIsSidebarOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#173b4d] hover:bg-[#f3f8f8]"
          aria-label="Open menu"
        >
          <FiMenu className="text-[22px]" />
        </button>

        <span className="ml-3 text-[18px] font-bold text-[#111827]">
          MotionLab
        </span>
      </header>

      {/* Desktop / Tablet Sidebar */}
      <aside className="hidden h-screen shrink-0 md:block">
        <SideBar />
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          <div
            className="h-full w-[280px] max-w-[85vw] bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-full flex-col">

              <div className="flex items-center justify-end px-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-[#52677a] hover:bg-[#f3f8f8]"
                  aria-label="Close menu"
                >
                  <FiX className="text-[22px]" />
                </button>
              </div>

              <div className="min-h-0 flex-1">
                <SideBar
                  onNavigate={() => setIsSidebarOpen(false)}
                />
              </div>

            </div>
          </div>
        </div>
      )}

      <main className="min-w-0 flex-1 overflow-y-auto scrollbar-hide">
        <Outlet />
      </main>

    </div>
  );
};

export default OverallPage;
