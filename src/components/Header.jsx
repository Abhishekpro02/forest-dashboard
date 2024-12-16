import React, { useState } from "react";
import {
  FaEnvelope,
  FaBell,
  FaUserCircle,
  FaGlobe,
  FaSearch,
  FaExclamationCircle,
} from "react-icons/fa";

const Header = () => {
  const [openPopup, setOpenPopup] = useState(null);

  const togglePopup = (popup) => {
    setOpenPopup((prev) => (prev === popup ? null : popup));
  };

  const messages = [
    {
      name: "Maria Zaman",
      message: "Is this item really useful?",
      time: "18:30",
    },
    { name: "Benny Roy", message: "Any updates on my query?", time: "10:35" },
  ];

  const notifications = [
    {
      title: "New User Registered",
      time: "2 hours ago",
      icon: FaExclamationCircle,
    },
    {
      title: "High traffic detected",
      time: "3 days ago",
      icon: FaExclamationCircle,
    },
  ];

  return (
    <header className="w-full bg-white shadow-md px-6 py-3 flex justify-between items-center">
      {/* Logo and Search */}
      <div className="flex items-center gap-4">
        <div className="relative flex items-center bg-transparent rounded-full px-4 py-2">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none ml-2 text-sm placeholder-gray-400"
          />
        </div>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6 relative">
        {/* Email Icon */}
        <div className="relative">
          <div
            className="cursor-pointer"
            onClick={() => togglePopup("messages")}
          >
            <FaEnvelope size={20} className="text-gray-600" />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              5
            </span>
          </div>
          {openPopup === "messages" && (
            <div className="absolute right-0 top-10 bg-white shadow-lg w-80 rounded-md z-10 border border-gray-200">
              <div className="absolute -top-2 right-4 w-4 h-4 bg-green-200 transform rotate-45" />
              <div className="bg-green-200 text-center py-2 font-semibold text-gray-700">
                05 Messages
              </div>
              <ul className="max-h-64 overflow-auto">
                {messages.map((msg, index) => (
                  <li
                    key={index}
                    className="p-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer flex items-start"
                  >
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {msg.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-700">{msg.name}</p>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {msg.message}
                      </p>
                    </div>
                    <p className="text-xs text-gray-400 ml-2">{msg.time}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Notification Icon */}
        <div className="relative">
          <div
            className="cursor-pointer"
            onClick={() => togglePopup("notifications")}
          >
            <FaBell size={20} className="text-gray-600" />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              8
            </span>
          </div>
          {openPopup === "notifications" && (
            <div className="absolute right-0 top-10 bg-white shadow-lg w-80 rounded-md z-10 border border-gray-200">
              <div className="absolute -top-2 right-4 w-4 h-4 bg-blue-200 transform rotate-45" />
              <div className="bg-blue-200 text-center py-2 font-semibold text-gray-700">
                08 Notifications
              </div>
              <ul className="max-h-64 overflow-auto">
                {notifications.map((note, index) => (
                  <li
                    key={index}
                    className="p-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer flex items-center"
                  >
                    <note.icon size={24} className="text-blue-500 mr-3" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-700">{note.title}</p>
                    </div>
                    <p className="text-xs text-gray-400">{note.time}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Language Icon */}
        <div className="relative">
          <div
            className="cursor-pointer"
            onClick={() => togglePopup("language")}
          >
            <FaGlobe size={20} className="text-gray-600" />
          </div>
          {openPopup === "language" && (
            <div className="absolute right-0 top-10 bg-white shadow-lg w-40 rounded-md z-10 border border-gray-200">
              <ul className="text-sm">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  English
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Spanish
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Profile Icon */}
        <div className="relative">
          <div
            className="cursor-pointer"
            onClick={() => togglePopup("profile")}
          >
            <FaUserCircle size={28} className="text-gray-600" />
          </div>
          {openPopup === "profile" && (
            <div className="absolute right-0 top-10 bg-white shadow-lg w-40 rounded-md z-10 border border-gray-200">
              <div className="absolute -top-2 right-4 w-4 h-4 bg-gray-200 transform rotate-45" />
              <div className="bg-yellow-500 text-white font-semibold text-center py-3 rounded-t-md">
                Stevne Zone
              </div>
              <ul className="text-sm">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
