import React, { useState } from "react";
import db from "../data/db.json";
import getAllSemesterGpaAndCgpa from "../utils/getAllSemesterGpaAndCgpa";
import { OverAllGpaCompareAreaChart } from "../Charts/OverAllGpaCompareAreachart";
import { OverAllCgpaProgressChart } from "../Charts/OverAllCgpaProgressChart";

const Compare = ({ Student }) => {
  const [comparisonData, setComparisonData] = useState([]);
  const [currStuOverAllCgpa, setCurrStuOverAllCgpa] = useState("");
  const [selecStuOverAllCgpa, setSelecStuOverAllCgpa] = useState("");

  const handlesubmit = (e) => {
    const a = db.find((d) => d.rollNo === Number(e));

    if (a) {
      const currentStudentdata = getAllSemesterGpaAndCgpa(Student);
      const currentStudentOverallCgpa = currentStudentdata[0];
      const currentStudentSemWiseCgpa = currentStudentdata[1];

      const selectedStudentdata = getAllSemesterGpaAndCgpa(a);
      const selectedStudentOverallCgpa = selectedStudentdata[0];
      const selectedStudentSemWiseCgpa = selectedStudentdata[1];

      const Data = currentStudentSemWiseCgpa.map((currentSemester, index) => ({
        Semester: currentSemester.Semester,
        currentStudentGPA: currentSemester.GPA,
        selectedStudentGPA: selectedStudentSemWiseCgpa[index].GPA,
      }));

      setCurrStuOverAllCgpa(currentStudentOverallCgpa);
      setSelecStuOverAllCgpa(selectedStudentOverallCgpa);

      setComparisonData(Data);
    } else {
      setComparisonData([]);
      setCurrStuOverAllCgpa("");
      setSelecStuOverAllCgpa("");
    }
  };

  return (
    <div>
      <div>
        <div className="mx-auto max-w-xs">
          <div className="mb-4 mt-8 text-center font-mono text-xl text-slate-500 font-semibold">
            Choose Roll_No
          </div>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="rollNo"
            onChange={(e) => handlesubmit(e.target.value)}
          >
            <option value="default">Select...</option>
            {db.map((d, key) => (
              <option key={key}>{d.rollNo}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative top-[90px] right-[300px]">
          {currStuOverAllCgpa && (
            <p className="text-center font-bold  text-2xl text-black p-4 relative bottom-5 left-[150px] ">
              CurrentStudent-CGPA
            </p>
          )}
          {currStuOverAllCgpa && (
            <OverAllCgpaProgressChart cgpa={Number(currStuOverAllCgpa)} />
          )}
        </div>
        <div className="relative top-[90px] right-[100px]">
          {selecStuOverAllCgpa && (
            <p className="text-center font-bold  text-2xl text-black p-4 relative bottom-5 left-[150px] ">
              SelectedStudent-CGPA
            </p>
          )}
          {selecStuOverAllCgpa && (
            <OverAllCgpaProgressChart cgpa={Number(selecStuOverAllCgpa)} />
          )}
        </div>
      </div>
      <div className="relative top-[300px] pb-10">
        {comparisonData && <OverAllGpaCompareAreaChart gpa={comparisonData} />}
      </div>
    </div>
  );
};

export default Compare;
