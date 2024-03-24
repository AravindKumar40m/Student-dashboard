import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import gpa from "../pages/gpa";
import gradePoints from "../pages/gradepoints";
import { OverAllGpaAreaChart } from "../Charts/OverAllGpaAreachart";
import { OverAllCgpaProgressChart } from "../Charts/OverAllCgpaProgressChart";
import RankingPolarAreaChart from "../Charts/RankingPolarAreaChart";
import { Card } from "flowbite-react";

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
        <div className="p-5 pl-[150px]">
          <Card href="#" className="max-w-sm m-4 w-[250px]">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              NAME: {Student.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              ROLL-NO: {Student.rollNo}
            </p>
          </Card>
        </div>

        <div className="flex justify-center items-center absolute  left-[550px] top-[130px]">
          <OverAllCgpaProgressChart cgpa={overallCGPA} />
        </div>

        <br />
        <hr className="border-2 w-[100px] relative left-[500px] " />

        <div className="h-[500px] w-[500px] p-5 ">
          <RankingPolarAreaChart id={id} />
        </div>

        <div
          className="ag-theme-quartz gap-4 absolute top-[270px] left-[700px]"
          style={{ height: 310, width: 410 }}
        >
          <p className="text-3xl font-extrabold p-16">GPA Table</p>
          <AgGridReact rowData={rowdata} columnDefs={columnDefs} />
        </div>

        <hr className="border-2 w-[100px] relative left-[500px] top-[150px]" />

        <div className="relative top-[150px] p-[50px]">
          <OverAllGpaAreaChart gpa={rowdata} />
        </div>
      </div>
    </div>
  );
};

export default Home;
