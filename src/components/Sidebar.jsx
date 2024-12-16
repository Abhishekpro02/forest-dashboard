import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaUsers,
  FaBook,
  FaChalkboardTeacher,
  FaDollarSign,
  FaSchool,
  FaBookOpen,
  FaChevronDown,
  FaChevronUp,
  FaCalendar,
  FaClipboardList,
  FaBus,
  FaAddressCard,
} from "react-icons/fa";

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
    setActiveDropdown(null); // Close all dropdowns when collapsing
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: FaUsers, link: "/dashboard" },
    {
      id: "students",
      label: "Students",
      icon: FaChalkboardTeacher,
      link: "/students",
    },
    {
      id: "teachers",
      label: "Teachers",
      icon: FaBook,
      subItems: [
        { label: "All Teachers", link: "/teachers/all" },
        { label: "Teacher Details", link: "/teachers/details" },
        { label: "Add Teacher", link: "/teachers/add" },
        { label: "Payment", link: "/teachers/payment" },
      ],
    },
    {
      id: "parents",
      label: "Parents",
      icon: FaAddressCard,
      link: "/parents",
    },
    {
      id: "library",
      label: "Library",
      icon: FaBookOpen,
      subItems: [
        { label: "All Books", link: "/library/books" },
        { label: "Issued Books", link: "/library/issued" },
      ],
    },
    {
      id: "account",
      label: "Account",
      icon: FaDollarSign,
      link: "/account",
    },
    {
      id: "class",
      label: "Class",
      icon: FaSchool,
      link: "/class",
    },
    { id: "subject", label: "Subject", icon: FaBook, link: "/subject" },
    {
      id: "routine",
      label: "Class Routine",
      icon: FaCalendar,
      link: "/routine",
    },
    {
      id: "attendance",
      label: "Attendance",
      icon: FaClipboardList,
      link: "/attendance",
    },
    {
      id: "transport",
      label: "Transport",
      icon: FaBus,
      link: "/transport",
    },
  ];

  return (
    <aside
      className={`bg-blue-900 text-white h-screen transition-width duration-300 ${
        isSidebarOpen ? "w-64" : "w-16"
      } fixed`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-yellow-500">
        {isSidebarOpen ? (
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-2">
              <img
                src="logo.png"
                alt="Logo"
                className="object-contain"
                style={{ maxWidth: "100%", height: "40px", border: "none" }}
              />
            </div>
            <button onClick={toggleSidebar}>
              <FaTimes className="text-white text-2xl" />
            </button>
          </div>
        ) : (
          <button onClick={toggleSidebar}>
            <FaBars className="text-white text-2xl" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        {menuItems.map((item) => (
          <div key={item.id} className="relative group">
            {/* Parent Link */}
            <div
              onClick={() => item.subItems && toggleDropdown(item.id)}
              className="flex items-center justify-between p-3 hover:bg-blue-700 cursor-pointer"
              title={!isSidebarOpen ? item.label : ""}
            >
              <div className="flex items-center">
                <item.icon className="text-yellow-500 text-lg" />
                {isSidebarOpen && <span className="ml-4">{item.label}</span>}
              </div>
              {isSidebarOpen && item.subItems && (
                <span>
                  {activeDropdown === item.id ? (
                    <FaChevronUp className="text-yellow-500" />
                  ) : (
                    <FaChevronDown className="text-yellow-500" />
                  )}
                </span>
              )}
            </div>

            {/* Dropdown Links */}
            {item.subItems && isSidebarOpen && activeDropdown === item.id && (
              <div className="ml-8 space-y-2">
                {item.subItems.map((sub) => (
                  <Link
                    key={sub.label}
                    to={sub.link}
                    className="block p-2 text-sm hover:text-yellow-500"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Hover-based Dropdown for Collapsed Sidebar */}
            {item.subItems && !isSidebarOpen && (
              <div className="absolute left-16 top-0 bg-blue-800 hidden group-hover:block w-48 shadow-lg">
                {item.subItems.map((sub) => (
                  <Link
                    key={sub.label}
                    to={sub.link}
                    className="block px-4 py-2 text-sm hover:bg-blue-700"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
