import AppLayout from "./components/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Attendance from "./components/Attendace";
import Login from "./components/Login";
import { useState } from "react";
import Grades from "./components/Grades";
import Compare from "./components/Compare";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [student, setStudent] = useState(null);

  const id = student ? student.id : null;

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
          <Route path="/compare" element={<Compare Student={student} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
