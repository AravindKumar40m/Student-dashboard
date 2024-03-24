import React from "react";
import db from "../data/db.json";
import gradeCount from "../pages/gradeCount";
import GradeCountLineChart from "../Charts/GradeCountLineChart";
import GradeCountPieChart from "../Charts/GradeCountPieChart";
import OverAllGradeChart from "../Charts/OverAllGradeChart";

const Grades = ({ Student }) => {
  const grade = db.flatMap((d) =>
    d.years.flatMap((year) =>
      year.semesters.flatMap((sem) => sem.subjects.flatMap((sub) => sub.grade))
    )
  );

  const val = gradeCount(grade);

  return (
    <div className="flex justify-center items-center gap-5">
      {/* <div>
        <GradeCountLineChart val={val} />
      </div> */}
      <div className="">
        <p className=" text-4xl p-10 font-bold flex justify-center items-center">
          All Student Grade Count
        </p>
        <GradeCountPieChart val={val} />
      </div>
      <div>
        <p className=" text-4xl p-10 font-bold flex justify-center items-center">
          Individual Grade Count
        </p>
        <OverAllGradeChart Student={Student} />
      </div>
    </div>
  );
};

export default Grades;