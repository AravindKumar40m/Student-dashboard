import React from "react";

import { SearchSelect, SearchSelectItem } from "@tremor/react";
// import AttendanceChart from "../Charts/AttendanceChart";
import BoxPlotChart from "../Charts/AttendanceChart";
import RankingPolarAreaChart from "../Charts/RankingPolarAreaChart";
import OverAllGradeChart from "../Charts/OverAllGradeChart";

const YearFilter = ({ Student }) => {
  return (
    <div>
      {/* <div className="flex text-4xl justify-center items-center font-semibold">
        <p>Year wise visualization</p>
      </div>
      <div>
        <div className="flex">
          <div className="mx-auto max-w-xs">
            <div className="mb-4 mt-8 text-center font-mono text-sm text-slate-500">
              Choose year
            </div>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="deg"
              onChange={(e) => handlesubmit(e.target.value)}
            >
              <option value="default">Select...</option>
              {Student.years.map((d, key) => (
                <option key={key}>{d.year}</option>
              ))}
            </select>
          </div>

          <div className="mx-auto max-w-xs">
            <div className="mb-4 mt-8 text-center font-mono text-sm text-slate-500">
              Choose year
            </div>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="deg"
              onChange={(e) => handlesubmit(e.target.value)}
            >
              <option value="default">Select...</option>
              {Student.years.map((d, key) => (
                <option key={key}>{d.year}</option>
              ))}
            </select>
          </div>
        </div>
      </div> */}

      <div>
        <p className="flex justify-center items-center text-4xl font-bold p-5">
          Attendace Traking
        </p>
        <BoxPlotChart Student={Student} />
      </div>

      {/* <div>
        <OverAllGradeChart Student={Student} />
      </div> */}
      {/* <div>
        <RankingPolarAreaChart id={id} />
      </div> */}
    </div>
  );
};

export default YearFilter;
