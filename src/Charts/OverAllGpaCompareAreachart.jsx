import { AreaChart } from "@tremor/react";

const dataFormatter = (number) =>
  Intl.NumberFormat("us").format(number).toString();

export function OverAllGpaCompareAreaChart({ gpa }) {
  return (
    <AreaChart
      className="h-80"
      data={gpa}
      index="Semester"
      categories={["currentStudentGPA", "selectedStudentGPA"]}
      colors={["indigo", "rose"]}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      showAnimation
      onValueChange={(v) => console.log(v)}
    />
  );
}
