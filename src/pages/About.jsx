import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Card from "../components/Card";
import ChartEarnings from "../components/ChartEarnings";
import ChartExpenses from "../components/ChartExpenses";
import ChartStudents from "../components/ChartStudents";

const About = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card
          icon={<i className="fas fa-user-graduate text-white text-2xl"></i>}
          title="Students"
          value="150000"
          bgColor="bg-green-200"
        />
        <Card
          icon={
            <i className="fas fa-chalkboard-teacher text-white text-2xl"></i>
          }
          title="Teachers"
          value="2250"
          bgColor="bg-blue-200"
        />
        <Card
          icon={<i className="fas fa-user-friends text-white text-2xl"></i>}
          title="Parents"
          value="5690"
          bgColor="bg-yellow-200"
        />
        <Card
          icon={<i className="fas fa-dollar-sign text-white text-2xl"></i>}
          title="Earnings"
          value="$193000"
          bgColor="bg-red-200"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ChartEarnings />
        <ChartExpenses />
        <ChartStudents />
      </div>
    </div>
  );
};

export default About;
