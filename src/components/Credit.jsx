import {
  Chart as ChartJs,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
} from "chart.js";

import { PolarArea } from "react-chartjs-2";

import db from "../data/db.json";

ChartJs.register(ArcElement, Tooltip, Legend, RadialLinearScale);

const Credit = ({ Student }) => {
  const filterSubject = db.map((d) =>
    d.years.flatMap((year) =>
      year.semesters.flatMap((sem) =>
        sem.subjects.filter((sub) => sub.grade !== "RA")
      )
    )
  );

  const totalCredit = filterSubject.map((f) =>
    f.reduce((acc, r) => acc + r.credit, 0)
  );

  const label = [];

  db.map((d) => label.push(d.name));

  const data = {
    labels: label,
    datasets: [
      {
        label: "credit",
        data: totalCredit,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
          "green",
          "purple",
          "black",
        ],
        hoverOffset: 10,
      },
    ],
  };

  const option = {};

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-[#003366] font-extrabold text-4xl mt-8">
        Overall student Credits
      </p>
      <div className="w-[500px] h-[500px] mt-8">
        <PolarArea data={data} options={option}></PolarArea>
      </div>
      <p className="text-[#003366] font-extrabold text-3xl mt-8">
        {Student.name} earned {totalCredit[Student.id - 1]} credits out of a
        total of 139.
      </p>
    </div>
  );
};

export default Credit;
