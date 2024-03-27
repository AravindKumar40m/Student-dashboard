import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import gpa from "../utils/gpa";
import gradePoints from "../utils/gradepoints";
import { OverAllGpaAreaChart } from "../Charts/OverAllGpaAreachart";
import { OverAllCgpaProgressChart } from "../Charts/OverAllCgpaProgressChart";
import RankingPolarAreaChart from "../Charts/RankingPolarAreaChart";
import Card from "../Animations/Card.jsx";

const Home = ({ Student, id }) => {
  let semesters = [];

  let semestersCount = 0;
  for (let i = 0; i < Student.years.length; i++) {
    const year = Student.years[i];
    for (let j = 0; j < year.semesters.length; j++) {
      const semester = year.semesters[j];
      semesters.push(
        ...semester.subjects.map((subject) => ({
          semester: semester.semester,
          grade: subject.grade,
          points: gradePoints(subject.grade),
          credit: subject.credit,
        }))
      );
      semestersCount++;
    }
  }

  let sem = [];
  for (let i = 1; i < semestersCount + 1; i++) {
    sem.push(semesters.filter((ss) => ss.semester === i));
  }

  const columnDefs = [
    { headerName: "Semester", field: "Semester" },
    { headerName: "GPA", field: "GPA" },
  ];

  const rowdata = sem.map((m, key) => ({
    Semester: `semester${key + 1}`,
    GPA: gpa(m).toFixed(2),
  }));

  const overallCGPA = gpa(semesters).toFixed(2);

  return (
    <div className="">
      <div className="relative">
        <div className="flex items-center text-[#003366]  text-4xl  font-semibold">
          <p>Dashboard</p>
        </div>
        <div className="p-5 pl-[150px] relative right-[400px] bottom-[70px]">
          <Card Student={Student} />
        </div>

        <div className="flex justify-center items-center absolute  left-[700px] top-[90px]">
          <p className="text-center font-bold  text-2xl text-blue-500 p-4 ">
            Overall-CGPA
          </p>
          <OverAllCgpaProgressChart cgpa={overallCGPA} />
        </div>

        <hr className="border-2 w-[100px] relative left-[500px] bottom-[100px] " />

        <div className="h-[500px] w-[500px] p-5 relative bottom-[100px]">
          <RankingPolarAreaChart id={id} />
        </div>

        <div
          className="ag-theme-quartz gap-4 absolute top-[270px] left-[700px]"
          style={{ height: 320, width: 410 }}
        >
          <p className="text-3xl font-extrabold p-16">GPA Table</p>
          <AgGridReact rowData={rowdata} columnDefs={columnDefs} />
        </div>

        <hr className="border-2 w-[100px] relative left-[500px] top-[50px]" />

        <div className="relative top-[20px] p-[50px]">
          <p className="text-center font-bold  text-2xl text-blue-500 p-4 ">
            Each Semester-GPA
          </p>
          <OverAllGpaAreaChart gpa={rowdata} />
        </div>
      </div>
    </div>
  );
};

export default Home;
