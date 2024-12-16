import React from "react";

const Breadcrumb = () => {
  return (
    <div className="text-sm text-gray-500 mb-4 flex items-center">
      <span>Home</span>
      <span className="mx-2 text-gray-400">&gt;</span>
      <span className="text-yellow-500">Admin</span>
    </div>
  );
};

export default Breadcrumb;
