import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BoxPlotChart = ({ Student }) => {
  let semesters = [];

  let semestersCount = 0;
  for (let i = 0; i < Student.years.length; i++) {
    const year = Student.years[i];
    for (let j = 0; j < year.semesters.length; j++) {
      const semester = year.semesters[j];
      semesters.push(
        ...semester.subjects.map((subject) => ({
          semester: semester.semester,
          attendance_percentage: subject.attendance_percentage,
        }))
      );
      semestersCount++;
    }
  }

  let sem = [];
  let labels = [];
  for (let i = 1; i < semestersCount + 1; i++) {
    labels.push(`Semester ${i}`);
    sem.push(
      semesters
        .filter((ss) => ss.semester === i)
        .map((m) => m.attendance_percentage)
    );
  }
  console.log(sem);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Attendance Percentage",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
        hoverBackgroundColor: "rgba(54, 162, 235, 0.4)",
        hoverBorderColor: "rgba(54, 162, 235, 1)",
        data: sem,
      },
    ],
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <Bar
        data={data}
        options={{
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default BoxPlotChart;
