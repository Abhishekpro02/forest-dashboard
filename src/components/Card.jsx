import React from "react";

const Card = ({ icon, title, value, bgColor }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
      <div
        className={`flex items-center justify-center w-16 h-16 rounded-full text-3xl ${bgColor}`}
      >
        {icon}
      </div>
      <div className="ml-4">
        <p className="text-gray-500">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default Card;
