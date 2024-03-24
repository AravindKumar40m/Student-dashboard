import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);

const GradeCountLineChart = ({ val }) => {
  console.log(val);
  const data = {
    labels: ["O", "A+", "A", "B+", "B", "C", "RA"],
    datasets: [
      {
        label: "GradeCount",
        data: val,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const option = {};

  return (
    <div className="">
      <div className="">
        <Line data={data} options={option}></Line>
      </div>
    </div>
  );
};

export default GradeCountLineChart;
