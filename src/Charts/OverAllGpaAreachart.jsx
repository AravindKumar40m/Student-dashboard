import { AreaChart } from "@tremor/react";

const dataFormatter = (number) =>
  Intl.NumberFormat("us").format(number).toString();

export function OverAllGpaAreaChart({ gpa }) {
  console.log(gpa);
  return (
    <AreaChart
      className="h-80"
      data={gpa}
      index="Semester"
      categories={["GPA"]}
      colors={["indigo", "rose"]}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
  );
}
