import AppLayout from "./components/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Attendance from "./components/Attendace";
// import gradePoints from "./pages/gradepoints";
import Login from "./components/Login";
import { useState } from "react";
import Grades from "./components/Grades";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [student, setStudent] = useState(null);

  const id = student ? student.id : null;

  // const RN = "2021242001";
  // const Student = db.find((d) => d.rollNo == RN);

  // let subject = [];

  // const sem = Student.years.filter((year) => year.year === 1);
  // // .filter((m) => m.semesters);

  // subject.push(
  //   sem.flatMap((s) =>
  //     s.semesters.flatMap((ss) =>
  //       ss.subjects.flatMap((sub) => ({
  //         semester: ss.semester,
  //         grade: sub.grade,
  //         points: gradePoints(sub.grade),
  //         credit: sub.credit,
  //       }))
  //     )
  //   )
  // );

  // console.log(subject);

  // const a = Student.years.flatMap((year) =>
  //   year.semesters.flatMap((sem) =>
  //     sem.subjects.flatMap((sub) => sub.attendance_percentage)
  //   )
  // );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login setIsLogin={setIsLogin} setStudent={setStudent} />}
        />
        <Route
          element={<AppLayout isLogin={isLogin} setIsLogin={setIsLogin} />}
        >
          <Route path="/home" element={<Home Student={student} id={id} />} />
          <Route path="/year" element={<Attendance Student={student} />} />
          <Route path="/grade" element={<Grades Student={student} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
