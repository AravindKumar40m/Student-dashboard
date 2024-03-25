import { ProgressCircle } from "@tremor/react";

export function OverAllCgpaProgressChart({ cgpa }) {
  const value = cgpa * 10;

  return (
    <div className="space-y-10 absolute left-[200px]">
      <div className="space-y-3">
        <p className="text-center font-bold  text-2xl text-blue-500 p-4 ">
          Overall-CGPA
        </p>

        <div className="flex justify-start space-x-5 items-center">
          <ProgressCircle value={`${value}`} size="xl">
            <span className="text-lg font-medium ">{value.toFixed(1)}%</span>
          </ProgressCircle>
          <div>
            <p className="text-tremor-default  text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
              {cgpa}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
