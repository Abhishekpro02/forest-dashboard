import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const ChartEarnings = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Total Collections",
        data: [50, 20, 70, 30, 90, 60, 100],
        backgroundColor: "rgba(54, 162, 235, 1)", // Solid blue for the chart
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 0,
        fill: {
          target: "origin",
          above: "rgba(54, 162, 235, 0.6)", // Light blue for area fill
        },
        tension: 0.4, // Smoother curve
      },
      {
        label: "Fees Collection",
        data: [30, 10, 50, 20, 60, 40, 70],
        backgroundColor: "rgba(255, 99, 132, 1)", // Solid red for the chart
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 0,
        fill: {
          target: "-1", // Fill below this dataset
          above: "rgba(255, 99, 132, 0.8)", // Light red for area fill
        },
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 12,
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#f0f0f0",
        },
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 25,
        },
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md h-full flex flex-col justify-between">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="font-semibold text-lg">Earnings</h3>
          <p className="text-sm text-gray-500">Jan 20, 2019</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Total Collections</p>
          <p className="text-2xl font-bold text-blue-500">75,000</p>
          <p className="text-sm text-gray-600 mt-1">Fees Collection</p>
          <p className="text-2xl font-bold text-red-500">15,000</p>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartEarnings;
