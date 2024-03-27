import React from "react";
import db from "../data/db.json";
import getAllSemesterGpa from "../utils/getAllSemesterGpa";
import { AllGpaComEachSemAreachart } from "../Charts/AllGpaComEachSemAreachart";
import { data } from "autoprefixer";

const AllStudentGpaCompare = ({ Student, id }) => {
  const filterStudent = db.filter((d) => d.id !== id);

  const loginStudent = getAllSemesterGpa(Student);
  const AllStudent = [];
  filterStudent.forEach((stu) => AllStudent.push(getAllSemesterGpa(stu)));

  const Data = loginStudent.map((currentSemester, index) => {
    const comparisonData = {
      Semester: currentSemester.Semester,
      [`GPA-${Student.name}`]: currentSemester.GPA,
    };

    AllStudent.forEach((stu, idx) => {
      comparisonData[`GPA-${filterStudent[idx].name}`] = stu[index].GPA;
    });

    return comparisonData;
  });

  let k = Data[0];
  const x = Object.keys(k);
  let y = [];

  for (let i = 1; i < x.length; i++) {
    y.push(x[i]);
  }
  let color = ["rose"];
  for (let i = 0; i < y.length - 1; i++) {
    color.push("indigo");
  }

  return (
    <div>
      <div>
        <p className="flex justify-center items-center text-4xl font-bold p-10 pb-20">
          Comparison of Each Semester GPA with class
        </p>
        <AllGpaComEachSemAreachart gpa={Data} categories={y} color={color} />
      </div>
    </div>
  );
};

export default AllStudentGpaCompare;
