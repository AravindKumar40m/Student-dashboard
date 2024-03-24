import { useState } from "react";
import db from "../data/db.json";
import { useNavigate } from "react-router-dom";
import studentLogo from "../assets/student_logo.png";
import bookImage from "../assets/loginBg2.jpg";

function LoginForm({ setIsLogin, setStudent }) {
  const [RollNo, setRollNo] = useState("");
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Assuming `isLoading` state is managed locally
  const [valid, setValid] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(RollNo, pass);

    const data = db.find(
      (d) => d.rollNo === Number(RollNo) && d.password === Number(pass)
    );
    if (data) {
      setValid("");
      setStudent(data);
      setIsLogin(true);
      navigate("/home");
    } else {
      console.log("no");
      setValid("Invalid Reg_no or password");
    }
  }

  return (
    <div
      className="bg-slate-900 h-screen"
      style={{
        backgroundImage: `url(${bookImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col relative top-[50px] justify-center items-center text-4xl text-purple-800 font-semibold">
        <p>STUDENT LOGIN</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="p-4 relative flex flex-col top-[50px] justify-center items-center"
      >
        <img src={studentLogo} />
        {valid && <p className=" text-red-600 text-2xl font-medium">{valid}</p>}

        <div className="w-[400px] bg-orange-300 rounded-2xl p-5 relative flex flex-col top-6">
          <div className="mb-4">
            <label
              htmlFor="RollNo"
              className="block text-sm font-medium text-gray-700"
            >
              Register Number
            </label>
            <input
              type="number"
              id="number"
              autoComplete="username"
              value={RollNo}
              onChange={(e) => setRollNo(e.target.value)}
              disabled={isLoading}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:bg-gray-200 disabled:cursor-not-allowed"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              disabled={isLoading}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:bg-gray-200 disabled:cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full p-3 rounded-md font-medium text-white ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            }`}
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
