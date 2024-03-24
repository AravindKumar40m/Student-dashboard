import React from "react";
import { NavLink } from "react-router-dom";
import studentLogo from "../assets/student_logo.png";

const Header = ({ isLogin, setIsLogin }) => {
  const handleClick = () => {
    setIsLogin(false);
  };

  return (
    <header className="bg-gray-500 px-12 py-3 border-b border-gray-200 flex gap-6 items-center justify-end">
      <p className="relative right-[400px] text-2xl text-white font-bold">
        STUDENT DASHBOARD
      </p>
      <NavLink
        to="/"
        className="flex items-center gap-2 text-white hover:text-gray-800 hover:bg-purple-500 rounded-md py-3 px-4 transition duration-300"
      >
        {isLogin ? (
          <span onClick={handleClick}>Logout</span>
        ) : (
          <span>Login</span>
        )}
      </NavLink>
      <img src={studentLogo} className="size-10 cursor-pointer" />
    </header>
  );
};

export default Header;
