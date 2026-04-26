import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import UploadCard from "./components/UploadCard";
import Reports from "./components/Reports";
import Settings from "./components/Settings";
import { useState } from "react";

/**
 * Root Application Component
 * Manages main navigation state and coordinate layout between Sidebar, Navbar, and Dashboard content.
 * 
 * @returns {JSX.Element} The rendered application
 */
export default function App() {
  const [page, setPage] = useState("Dashboard");

  const NavContent = {
    "Dashboard": <Dashboard />,
    "Upload Receipt": <UploadCard />,
    "Reports": <Reports />,
    "Settings": <Settings />
  };

  const content = NavContent[page] || <Dashboard />;

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar setPage={setPage} activePage={page} />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-6 overflow-auto">
          {content}
        </main>
      </div>
    </div>
  );
}
