import React, { useState } from "react";

// --- 1. The Standard (iOS Style) ---
const SwitchStandard = ({ isOn, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${isOn ? "bg-blue-600" : "bg-gray-300"}`}
    >
      <span
        className={`absolute top-1 left-1 bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${isOn ? "translate-x-6" : "translate-x-0"}`}
      />
    </button>
  );
};

// --- 2. The Glow (Neon) ---
const SwitchGlow = ({ isOn, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
        isOn
          ? "bg-purple-600 shadow-[0_0_15px_rgba(147,51,234,0.6)]"
          : "bg-gray-800"
      }`}
    >
      <span
        className={`absolute top-1 left-1 bg-white w-6 h-6 rounded-full shadow-sm transform transition-transform duration-300 ${isOn ? "translate-x-6" : "translate-x-0"}`}
      />
    </button>
  );
};

// --- 3. The Minimalist (Thin Track) ---
const SwitchThin = ({ isOn, onToggle }) => {
  return (
    <button onClick={onToggle} className="relative w-14 h-8 flex items-center">
      {/* Track */}
      <div
        className={`w-full h-2 rounded-full transition-colors duration-300 ${isOn ? "bg-teal-400" : "bg-gray-300"}`}
      />
      {/* Knob */}
      <div
        className={`absolute left-0 w-8 h-8 rounded-full shadow-lg border border-gray-100 bg-white transform transition-transform duration-300 ${isOn ? "translate-x-6 border-green-400" : "translate-x-0"}`}
      />
    </button>
  );
};

// --- 4. The Square (Brutalist/Cyber) ---
const SwitchSquare = ({ isOn, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`relative w-16 h-8 border-2 border-black transition-colors duration-200 ${isOn ? "bg-yellow-400" : "bg-white"}`}
    >
      <span
        className={`absolute top-1 left-1 w-5 h-5 bg-black border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] transform transition-transform duration-200 ${isOn ? "translate-x-8" : "translate-x-0"}`}
      />
    </button>
  );
};

// --- 5. The Inner Icon (Sun/Moon) ---
const SwitchIcon = ({ isOn, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-500 ${isOn ? "bg-indigo-900" : "bg-cyan-400"}`}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-500 flex items-center justify-center ${isOn ? "translate-x-8" : "translate-x-0"}`}
      >
        {isOn ? (
          // Moon Icon
          <svg
            className="w-4 h-4 text-indigo-900"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        ) : (
          // Sun Icon
          <svg
            className="w-4 h-4 text-orange-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        )}
      </div>
    </button>
  );
};

// --- 6. The Skeuomorphic (3D/Inset) ---
const SwitchSkeuo = ({ isOn, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`relative w-16 h-8 rounded-full transition-colors duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] ${isOn ? "bg-blue-500" : "bg-gray-200"}`}
    >
      <span
        className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.2)] transform transition-all duration-300 ${isOn ? "translate-x-8" : "translate-x-0"}`}
      />
    </button>
  );
};

// --- 7. The Text Inside ---
const SwitchText = ({ isOn, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`relative w-20 h-8 rounded-full overflow-hidden transition-colors duration-300 ${isOn ? "bg-teal-500" : "bg-red-500"}`}
    >
      <span className="absolute left-2 top-1.5 text-xs font-bold text-white uppercase tracking-wider">
        ON
      </span>
      <span className="absolute right-2 top-1.5 text-xs font-bold text-white uppercase tracking-wider">
        OFF
      </span>
      <div
        className={`absolute top-1 left-1 w-8 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 z-10 ${isOn ? "translate-x-10" : "translate-x-0"}`}
      />
    </button>
  );
};

// --- 8. The Gradient ---
const SwitchGradient = ({ isOn, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`relative w-14 h-8 rounded-full p-1 transition-all duration-300 ${isOn ? "bg-gradient-to-r from-blue-500 to-teal-500" : "bg-gray-300"}`}
    >
      <span
        className={`block w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isOn ? "translate-x-6" : "translate-x-0"}`}
      />
    </button>
  );
};

// --- 9. The Outline (Ghost) ---
const SwitchOutline = ({ isOn, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`relative w-14 h-8 rounded-full border-2 transition-all duration-300 ${isOn ? "border-teal-600 bg-teal-600" : "border-gray-400 bg-transparent"}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full transform transition-all duration-300 ${isOn ? "bg-white translate-x-6" : "bg-gray-400 translate-x-0"}`}
      />
    </button>
  );
};

// --- 10. The Elastic (Fluid) ---
const SwitchElastic = ({ isOn, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`relative w-16 h-8 rounded-full flex items-center transition-colors duration-300 ${isOn ? "bg-rose-500 justify-end" : "bg-gray-200 justify-start"}`}
    >
      <span
        className="w-10 h-6 bg-white rounded-full shadow-sm mx-1"
        style={{}}
      />
    </button>
  );
};

// --- Main Gallery Layout ---
const Switches = () => {
  const [switchStates, setSwitchStates] = useState({
    standard: false,
    glow: false,
    thin: false,
    square: false,
    icon: false,
    skeuo: false,
    text: false,
    gradient: false,
    outline: false,
    elastic: false,
  });

  const handleToggle = (key) => {
    setSwitchStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="container box-shadow bg-slate-50 p-6 md:p-12 font-sans pb-40 overflow-y-auto">
      <h1 className="text-4xl font-bold text-center text-slate-800 mb-4">
        Modern Buttons
      </h1>
      <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">
        Responsive data grids with varying densities and styles.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 max-w-6xl w-full">
        {/* Helper Wrapper to Label Styles */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-gray-500 text-sm font-medium">Standard</span>
          <SwitchStandard
            isOn={switchStates.standard}
            onToggle={() => handleToggle("standard")}
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-gray-500 text-sm font-medium">Glow</span>
          <SwitchGlow
            isOn={switchStates.glow}
            onToggle={() => handleToggle("glow")}
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-gray-500 text-sm font-medium">Thin Track</span>
          <SwitchThin
            isOn={switchStates.thin}
            onToggle={() => handleToggle("thin")}
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-gray-500 text-sm font-medium">Brutalist</span>
          <SwitchSquare
            isOn={switchStates.square}
            onToggle={() => handleToggle("square")}
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-gray-500 text-sm font-medium">Icon Toggle</span>
          <SwitchIcon
            isOn={switchStates.icon}
            onToggle={() => handleToggle("icon")}
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-gray-500 text-sm font-medium">
            Skeuomorphic
          </span>
          <SwitchSkeuo
            isOn={switchStates.skeuo}
            onToggle={() => handleToggle("skeuo")}
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-gray-500 text-sm font-medium">Text Labels</span>
          <SwitchText
            isOn={switchStates.text}
            onToggle={() => handleToggle("text")}
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-gray-500 text-sm font-medium">Gradient</span>
          <SwitchGradient
            isOn={switchStates.gradient}
            onToggle={() => handleToggle("gradient")}
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-gray-500 text-sm font-medium">Outline</span>
          <SwitchOutline
            isOn={switchStates.outline}
            onToggle={() => handleToggle("outline")}
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-gray-500 text-sm font-medium">Elastic</span>
          <SwitchElastic
            isOn={switchStates.elastic}
            onToggle={() => handleToggle("elastic")}
          />
        </div>
      </div>
    </div>
  );
};

export default Switches;
