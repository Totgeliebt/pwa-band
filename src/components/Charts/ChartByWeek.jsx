import React from "react";
import { Line } from "react-chartjs-2";

const ChartByWeek = () => {

  const dataClicks = {
    label: "Клики",
    data: [10, 30, 30, 20, 30, 30, 30],
    lineTension: 0,
    fill: false,
    backgroundColor: "green",
    borderColor: "green",
  };

  const dataDownloads = {
    label: "Скачивания",
    data: [10, 20, 20, 10, 20, 20, 20],
    lineTension: 0,
    fill: false,
    backgroundColor: "blue",
    borderColor: "blue",
  };

  const chartData = {
    labels: ["6 апр", "7 апр", "8 апр", "9 апр", "10 апр", "11 апр", "12 апр"],
    datasets: [dataClicks, dataDownloads],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "top",
      labels: {
        boxWidth: 40,
        boxHeight: 15,
        fontColor: "black",
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 10,
        },
      },
    }
  };

  return (
    <div style={{paddingLeft: '20px'}}>
      <Line
        data={chartData}
        width={900}
        height={450}
        type="line"
        options={chartOptions}
      />
    </div>
  );
};

export default ChartByWeek;
