import {
  Chart as ChartJs,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
} from "chart.js";

import { PolarArea } from "react-chartjs-2";
import gradePoints from "../utils/gradepoints";
import db from "../data/db.json";
import gpa from "../utils/gpa";

ChartJs.register(ArcElement, Tooltip, Legend, RadialLinearScale);

const RankingPolarAreaChart = ({ id }) => {
  let res = [];
  db.forEach((student) => {
    let semesters = [];
    student.years.forEach((year) => {
      year.semesters.forEach((semester) => {
        semester.subjects.forEach((subject) => {
          semesters.push({
            semester: semester.semester,
            grade: subject.grade,
            points: gradePoints(subject.grade),
            credit: subject.credit,
          });
        });
      });
    });
    res.push(semesters);
  });

  const CGPA = [];

  res.forEach((r) => {
    CGPA.push(gpa(r).toFixed(2));
  });

  let ds = CGPA[id - 1];

  let d = CGPA;

  d.sort((a, b) => b - a);
  let pos = 0;

  for (let i = 0; i < d.length; i++) {
    if (ds === d[i]) {
      pos = i + 1;
    }
  }
  let l = "";
  if (pos === 1) {
    l = "st";
  } else if (pos === 2) {
    l = "nd";
  } else if (pos === 3) {
    l = "rd";
  } else {
    l = "th";
  }

  const data = {
    labels: [],
    datasets: [
      {
        label: "OverAllCGPA",
        data: CGPA,
        backgroundColor: CGPA.map((m, index) =>
          index + 1 === id ? "rgb(255, 99, 132)" : "rgb(255, 205, 86)"
        ),
        hoverOffset: 20,
      },
    ],
  };

  const option = {};

  return (
    <div className="flex flex-col justify-center items-center p-10 gap-10 text-4xl ">
      <p className="text-[#003366] font-extrabold">All CGPA in Class</p>

      <div className="h-[400px] w-[400px]">
        <PolarArea data={data} options={option}></PolarArea>
      </div>
      <p className="text-[#003366] font-semibold">
        You are ranked {pos}
        {l}
      </p>
    </div>
  );
};

export default RankingPolarAreaChart;
