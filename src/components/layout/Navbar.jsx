import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { navbarJson } from "../../configurations/uiJson";   

export default function Navbar() {
  return (
    <div className="w-full max-w-6xl mx-auto ">
      <nav className="flex flex-row justify-center p-2 m-2 bg-[#e7f7f7] rounded-xl mb-8 box-shadow">
        {navbarJson.map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.name === "home" ? "/" : `/${tab.name}`}
            className={({ isActive }) => `
              relative w-[11rem] py-2 mx-2 text-sm font-semibold rounded-lg capitalize transition-all duration-200 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 text-center
              ${isActive 
                ? 'bg-white text-gray-900 shadow-sm ring-1 ring-black/5' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'}
            `}
          >
            {tab.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}