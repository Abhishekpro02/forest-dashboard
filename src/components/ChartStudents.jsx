import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const ChartStudents = () => {
  const data = {
    labels: ["Female Students", "Male Students"],
    datasets: [
      {
        backgroundColor: ["#3F51B5", "#FF9800"],
        data: [45000, 105000],
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="font-semibold mb-4">Students</h3>
      <Doughnut data={data} />
    </div>
  );
};

export default ChartStudents;
