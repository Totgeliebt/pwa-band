import React, {useState} from 'react';
import {Line} from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,

} from "chart.js";

ChartJS.register(LineController, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, );

const AppChart = ({baseChart}) => {
  const [appVisitorsData, setAppVisitorsData] = useState({
    labels: ['', '', '', '','', '', ''],
    datasets:[{
      // label: 144,
      data: baseChart,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor:'rgba(54, 162, 235, 1)',
      tension: 0.1,
      pointRadius: 0,
      fill: true,
    }
    ]
  })
 const chartOptions = {responsive:true,
   maintainAspectRatio: false,
   scales: {
     x: {
       grid: {
         display: false
       }
     },
     y: {
       display: false,
       grid: {
         display: false
       }
     }},
   plugins: {
     legend: {
       display: false,
     }}
 }

  return (
    <div>
      <Line
        data={appVisitorsData}
            width={219} height={65}
            type="line" options={chartOptions}
      />
    </div>
  );
};

export default AppChart;