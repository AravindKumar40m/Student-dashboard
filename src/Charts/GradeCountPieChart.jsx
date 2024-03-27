import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJs.register(ArcElement, Tooltip, Legend);

const GradeCountPieChart = ({ val }) => {
  const data = {
    labels: ["O", "A+", "A", "B+", "B", "C", "RA"],
    datasets: [
      {
        label: "GradeCount",
        data: val,
        backgroundColor: [
          "aqua",
          "orangered",
          "purple",
          "yellow",
          "blue",
          "green",
          "grey",
        ],
        hoverOffset: 30,
      },
    ],
  };

  const option = {};

  return (
    <div className="">
      <div className="w-[500px] h-[500px]">
        <Pie data={data} options={option}></Pie>
      </div>
    </div>
  );
};

export default GradeCountPieChart;
