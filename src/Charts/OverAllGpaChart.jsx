import { BarChart } from "@tremor/react";

const dataFormatter = (number) =>
  Intl.NumberFormat("us").format(number).toString();

export const OverAllGpaChart = ({ gpa }) => {
  return (
    <BarChart
      data={gpa}
      index="Semester"
      categories={["GPA"]}
      colors={["purple"]}
      valueFormatter={dataFormatter}
      yAxisWidth={48}
      onValueChange={(v) => console.log(v)}
    />
  );
};
