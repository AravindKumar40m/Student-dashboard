import { AreaChart } from "@tremor/react";

const dataFormatter = (number) =>
  Intl.NumberFormat("us").format(number).toString();

export function AllGpaComEachSemAreachart({ gpa, categories, color }) {
  return (
    <AreaChart
      className="h-80"
      data={gpa}
      index="Semester"
      categories={categories}
      colors={color}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      showAnimation
      showGradient
      onValueChange={(v) => console.log(v)}
    />
  );
}
