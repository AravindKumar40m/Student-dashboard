import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="bg-[#CDBFD3] px-6 py-8 border-r border-gray-200 grid-row-span-full flex flex-col gap-8 font-semibold">
      <nav>
        <ul className="flex flex-col gap-2">
          <li>
            <NavLink
              to="/home"
              className={`flex items-center gap-2 text-gray-600 hover:text-gray-800 hover:bg-purple-500 rounded-md py-3 px-4 transition duration-300 ${
                location.pathname === "/home" && "bg-purple-500"
              }`}
            >
              <span>Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/grade"
              className={`flex items-center gap-2 text-gray-600 hover:text-gray-800 hover:bg-purple-500 rounded-md py-3 px-4 transition duration-300 ${
                location.pathname === "/grade" && "bg-purple-500"
              }`}
            >
              <span>Grades</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/credit"
              className={`flex items-center gap-2 text-gray-600 hover:text-gray-800 hover:bg-purple-500 rounded-md py-3 px-4 transition duration-300 ${
                location.pathname === "/credit" && "bg-purple-500"
              }`}
            >
              <span>Credit</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/compare"
              className={`flex items-center gap-2 text-gray-600 hover:text-gray-800 hover:bg-purple-500 rounded-md py-3 px-4 transition duration-300 ${
                location.pathname === "/compare" && "bg-purple-500"
              }`}
            >
              <span>Comparison</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allgpa"
              className={`flex items-center gap-2 text-gray-600 hover:text-gray-800 hover:bg-purple-500 rounded-md py-3 px-4 transition duration-300 ${
                location.pathname === "/allgpa" && "bg-purple-500"
              }`}
            >
              <span>All-GPA</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/attendance"
              className={`flex items-center gap-2 text-gray-600 hover:text-gray-800 hover:bg-purple-500 rounded-md py-3 px-4 transition duration-300 ${
                location.pathname === "/attendance" && "bg-purple-500"
              }`}
            >
              <span>Attendance</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
