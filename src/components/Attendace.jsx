import React from "react";

import BoxPlotChart from "../Charts/AttendanceChart";

const YearFilter = ({ Student }) => {
  return (
    <div>
      <div>
        <p className="flex justify-center items-center text-4xl font-bold p-5">
          Attendance Tracking
        </p>
        <BoxPlotChart Student={Student} />
      </div>
    </div>
  );
};

export default YearFilter;
