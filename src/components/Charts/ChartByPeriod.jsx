import React from 'react';
import {Line} from "react-chartjs-2";

const ChartByPeriod = ({chartData: {labels, clicksData, downloadsData}}) => {
  const dataClicks = {
    label: "Клики",
    data: clicksData,
    lineTension: 0,
    fill: false,
    backgroundColor: "green",
    borderColor: "green",
  };

  const dataDownloads = {
    label: "Скачивания",
    data: downloadsData,
    lineTension: 0,
    fill: false,
    backgroundColor: "blue",
    borderColor: "blue",
  };

  const chartData = {
    labels: labels,
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

export default ChartByPeriod;