import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";

import { Pie, Doughnut } from "react-chartjs-2";
import gradeCount from "../pages/gradeCount";

ChartJs.register(ArcElement, Tooltip, Legend);

const OverAllGradeChart = ({ Student }) => {
  const a = Student.years.flatMap((year) =>
    year.semesters.flatMap((sem) => sem.subjects.flatMap((sub) => sub.grade))
  );

  const dataLabels = gradeCount(a);

  // console.log(data);

  const data = {
    labels: ["O", "A+", "A", "B+", "B", "C", "RA"],
    datasets: [
      {
        data: dataLabels,
        backgroundColor: [
          "aqua",
          "orangered",
          "purple",
          "yellow",
          "blue",
          "green",
          "grey",
        ],
        hoverOffset: 20,
      },
    ],
  };

  const option = {};

  return (
    <div>
      <div className="w-[600px] h-[600px]">
        <Doughnut data={data} options={option}></Doughnut>
      </div>
    </div>
  );
};

export default OverAllGradeChart;
