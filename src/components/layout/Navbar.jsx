import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navbarJson } from "../../configurations/uiJson";   
import { useTheme } from "../../context/ThemeContext";
import { useSidebar } from "../../context/SidebarContext";
import { HiSun, HiMoon, HiBars3 } from "react-icons/hi2";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { toggleSidebar } = useSidebar();

  return (
    <div className="sticky top-0 z-50 w-full px-4 md:px-6 py-4">
      <nav className="max-w-[1600px] mx-auto flex flex-row items-center justify-between p-2 glass-card rounded-2xl shadow-xl">
        <div className="flex items-center gap-2 md:gap-4 pl-2 md:pl-4">
          <button
            onClick={toggleSidebar}
            className="p-2 md:hidden rounded-xl hover:bg-[hsl(var(--accent))] transition-colors"
            aria-label="Toggle Sidebar"
          >
            <HiBars3 className="w-6 h-6 text-[hsl(var(--foreground))]" />
          </button>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-[hsl(var(--primary))] rounded-xl flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg shadow-blue-500/20">
            RS
          </div>
          <span className="hidden sm:inline text-lg md:text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--foreground))] h-8">
            ReactStarter
          </span>
        </div>

        <div className="hidden md:flex flex-row items-center gap-2">
          {navbarJson.map((tab) => (
            <NavLink
              key={tab.name}
              to={tab.name === "home" ? "/" : `/${tab.name}`}
              className={({ isActive }) => `
                relative px-6 py-2.5 text-sm font-semibold rounded-xl capitalize transition-all duration-300 ease-in-out
                ${isActive 
                  ? 'bg-[hsl(var(--primary))] text-white shadow-lg shadow-blue-500/20' 
                  : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent))]'}
              `}
            >
              {tab.title}
            </NavLink>
          ))}
        </div>

        <div className="pr-1 md:pr-2">
          <button
            onClick={toggleTheme}
            className="p-2.5 md:p-3 rounded-xl bg-[hsl(var(--accent))] text-[hsl(var(--foreground))] hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <HiMoon className="w-5 h-5 text-slate-700" />
            ) : (
              <HiSun className="w-5 h-5 text-yellow-400" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}
