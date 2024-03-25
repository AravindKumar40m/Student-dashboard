import gpa from "./gpa";
import gradePoints from "./gradepoints";

function getAllSemesterGpa(a) {
  let semesters = [];

  let semestersCount = 0;
  for (let i = 0; i < a.years.length; i++) {
    const year = a.years[i];
    for (let j = 0; j < year.semesters.length; j++) {
      const semester = year.semesters[j];
      semesters.push(
        ...semester.subjects.map((subject) => ({
          semester: semester.semester,
          grade: subject.grade,
          points: gradePoints(subject.grade),
          credit: subject.credit,
        }))
      );
      semestersCount++;
    }
  }

  let sem = [];
  for (let i = 1; i < semestersCount + 1; i++) {
    sem.push(semesters.filter((ss) => ss.semester === i));
  }

  const data = sem.map((m, key) => ({
    Semester: `semester${key + 1}`,
    GPA: gpa(m).toFixed(2),
  }));

  const overallCGPA = gpa(semesters).toFixed(2);

  const res = [];

  res.push(overallCGPA);
  res.push(data);

  return res;
}

export default getAllSemesterGpa;
