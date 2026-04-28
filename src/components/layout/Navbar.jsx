import { Link, NavLink } from "react-router-dom";
import { navbarJson } from "../../configurations/uiJson";
import { useTheme } from "../../context/ThemeContext";
import { useSidebar } from "../../context/SidebarContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { toggleSidebar } = useSidebar();

  return (
    <header className="sticky top-0 z-30 w-full px-4 pt-4 md:pt-6">
      <div className="max-w-[1700px] mx-auto">
        <nav className="glass-card rounded-2xl p-2 flex items-center justify-between shadow-lg">
          {/* Left: Mobile Menu Trigger & Logo */}
          <div className="flex items-center gap-4 px-2">
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-[hsl(var(--secondary))] md:hidden transition-colors"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-lg hidden sm:block tracking-tight">StyloStar</span>
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navbarJson.map((tab) => (
              <NavLink
                key={tab.name}
                to={tab.name === "home" ? "/" : `/${tab.name}`}
                className={({ isActive }) => `
                  px-5 py-2 text-sm font-medium rounded-xl capitalize transition-all duration-300
                  ${isActive 
                    ? 'bg-[hsl(var(--primary))] text-white shadow-md' 
                    : 'text-[hsl(var(--foreground))] opacity-70 hover:opacity-100 hover:bg-[hsl(var(--secondary))]'}
                `}
              >
                {tab.title}
              </NavLink>
            ))}
          </div>

          {/* Right: Theme Toggle & Actions */}
          <div className="flex items-center gap-2 px-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--accent))] transition-all duration-300 shadow-sm"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <Link 
              to="/pages/login"
              className="hidden sm:flex px-4 py-2 bg-[hsl(var(--foreground))] text-[hsl(var(--background))] rounded-xl text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Sign In
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}