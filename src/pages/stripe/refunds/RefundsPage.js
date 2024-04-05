import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Refund Total Per Month",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

//TODO:This only shows 2024 data. Should add function to make range by year
export default function RefundsPage({ refunds }) {
  const labels = refunds.map((refund) => getMonthName(refund.month));
  const dataPoints = refunds.map((refund) => refund.amount);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Amount Refunded ($)",
        data: dataPoints,
        fill: false,
        borderColor: "coral",
        backgroundColor: "rgba(255, 127, 80, 0.5)",
      },
    ],
  };

  function getMonthName(monthNumber) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return monthNames[monthNumber - 1];
  }

  return <Line options={options} data={data} />;
}
