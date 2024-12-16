import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const ChartExpenses = () => {
  const data = {
    labels: ["Jan 2019", "Feb 2019", "Mar 2019"],
    datasets: [
      {
        label: "Expenses",
        backgroundColor: ["#4CAF50", "#3F51B5", "#FF9800"],
        data: [15000, 10000, 8000],
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="font-semibold mb-4">Expenses</h3>
      <Bar data={data} />
    </div>
  );
};

export default ChartExpenses;
