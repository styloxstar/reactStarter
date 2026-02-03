import React, { useState, useEffect } from 'react';

// --- 1. The Standard (Clean & Rounded) ---
export const ProgressStandard = ({ value }) => (
  <div className="w-full">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-slate-700">Loading...</span>
      <span className="text-sm font-medium text-slate-700">{value}%</span>
    </div>
    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
      <div 
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);

// --- 2. The Gradient Stripe (Animated) ---
export const ProgressGradient = ({ value }) => (
  <div className="w-full">
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
      <div 
        className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 transition-all duration-700 ease-out relative"
        style={{ width: `${value}%` }}
      >
        {/* Striped overlay pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[spin_3s_linear_infinite]"></div>
      </div>
    </div>
  </div>
);

// --- 3. The Glassmorphism (Frosty) ---
// *Best on dark/colorful backgrounds*
export const ProgressGlass = ({ value }) => (
  <div className="w-full p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
    <div className="flex justify-between text-white text-xs font-bold mb-2 tracking-wider">
      <span>PROCESSING</span>
      <span>{value}/100</span>
    </div>
    <div className="w-full bg-black/20 backdrop-blur-sm rounded-full h-4 p-1 border border-white/10">
      <div 
        className="bg-white/90 h-full rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-500 ease-out relative"
        style={{ width: `${value}%` }}
      >
      </div>
    </div>
  </div>
);

// --- 4. The Floating Tooltip ---
export const ProgressTooltip = ({ value }) => (
  <div className="w-full pt-8">
    <div className="w-full bg-gray-200 rounded-full h-1.5 relative">
      <div 
        className="bg-indigo-600 h-1.5 rounded-full transition-all duration-500 ease-out relative"
        style={{ width: `${value}%` }}
      >
        {/* Tooltip */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
           <div className="relative -top-8 bg-indigo-600 text-white text-xs font-bold py-1 px-2 rounded shadow-lg">
             {value}%
             {/* Arrow */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-indigo-600"></div>
           </div>
           {/* Dot */}
           <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full shadow-sm"></div>
        </div>
      </div>
    </div>
  </div>
);

// --- 5. The Circular (SVG Ring) ---
export const ProgressCircular = ({ value }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90">
        {/* Track */}
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="currentColor"
          strokeWidth="6"
          fill="transparent"
          className="text-gray-200"
        />
        {/* Indicator */}
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="currentColor"
          strokeWidth="6"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="text-blue-600 transition-all duration-700 ease-out"
        />
      </svg>
      <span className="absolute text-sm font-bold text-gray-700">{value}%</span>
    </div>
  );
};

// --- 6. The Neumorphic (Soft UI) ---
export const ProgressNeumorphic = ({ value }) => (
  <div className="w-full bg-[#e0e5ec] p-6 rounded-xl shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)]">
    <div className="w-full bg-[#e0e5ec] rounded-full h-6 p-1 shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]">
      <div 
        className="h-full rounded-full bg-blue-500 shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff] transition-all duration-500 ease-out flex items-center justify-end px-2"
        style={{ width: `${Math.max(value, 5)}%` }} // min-width to show
      >
        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
      </div>
    </div>
  </div>
);

// --- 7. The Cyberpunk (Neon Segments) ---
export const ProgressCyberpunk = ({ value }) => {
  // Create 20 segments
  const totalSegments = 20;
  const activeSegments = Math.round((value / 100) * totalSegments);

  return (
    <div className="w-full bg-black p-4 border border-cyan-800 rounded-lg shadow-[0_0_10px_rgba(6,182,212,0.2)]">
      <div className="flex justify-between text-cyan-500 font-mono text-xs mb-2">
        <span>SYSTEM_LOAD</span>
        <span>{value}%</span>
      </div>
      <div className="flex gap-1 h-4">
        {[...Array(totalSegments)].map((_, i) => (
          <div 
            key={i}
            className={`flex-1 rounded-sm transition-all duration-200 ${
              i < activeSegments 
              ? 'bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]' 
              : 'bg-gray-800 opacity-30'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

// --- 8. The Brutalist (Retro) ---
export const ProgressBrutalist = ({ value }) => (
  <div className="w-full">
    <div className="flex justify-between border-2 border-black border-b-0 px-2 py-1 bg-white">
      <span className="font-bold text-xs uppercase">Uploading</span>
      <span className="font-bold text-xs">{value}%</span>
    </div>
    <div className="w-full h-6 border-2 border-black bg-white p-0.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div 
        className="h-full bg-yellow-400 border-r-2 border-black transition-all duration-300 ease-linear"
        style={{ width: `${value}%` }}
      >
        {/* Diagonal lines pattern */}
        <div className="w-full h-full bg-[linear-gradient(45deg,rgba(0,0,0,0.1)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1)_75%,transparent_75%,transparent)] bg-[length:4px_4px]"></div>
      </div>
    </div>
  </div>
);

// --- 9. The File Upload (Contextual) ---
export const ProgressUpload = ({ value }) => (
  <div className="w-full p-4 border border-gray-200 rounded-xl bg-white shadow-sm">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
           <h4 className="text-sm font-semibold text-gray-700">design-assets.zip</h4>
           <span className="text-xs text-gray-500">{value}%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-1.5">
          <div 
            className={`h-1.5 rounded-full transition-all duration-300 ${value === 100 ? 'bg-green-500' : 'bg-indigo-600'}`}
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </div>
      {value === 100 ? (
        <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center animate-in zoom-in">
           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        </div>
      ) : (
        <button className="text-gray-400 hover:text-gray-600">✕</button>
      )}
    </div>
  </div>
);

// --- 10. The Vertical Steps (Timeline Progress) ---
export const ProgressVertical = ({ value }) => (
  <div className="h-48 w-16 bg-gray-50 rounded-full p-2 flex flex-col justify-end items-center shadow-inner relative overflow-hidden box-shadow ">
    <div 
      className="w-full bg-gradient-to-t from-emerald-400 to-emerald-300 rounded-full transition-all duration-700 ease-out"
      style={{ height: `${value}%` }}
    ></div>
    <div className="absolute inset-0 flex flex-col items-center justify-between py-4 pointer-events-none">
       <div className="w-8 h-[1px] bg-black/10"></div>
       <div className="w-8 h-[1px] bg-black/10"></div>
       <div className="w-8 h-[1px] bg-black/10"></div>
    </div>
    <span className="absolute bottom-4 text-xs font-bold text-emerald-900 bg-white/50 px-1 rounded backdrop-blur-sm">
      {value}%
    </span>
  </div>
);


// --- Main Gallery ---
const ProgressBars = () => {
  const [progress, setProgress] = useState(45);

  return (
    <div className="container box-shadow overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Modern Progress Bars</h1>
        <p className="text-slate-500 mb-8">Move the slider to animate all components simultaneously.</p>
        
        {/* Global Control */}
        <div className="bg-white p-6 rounded-2xl box-shadow border border-gray-100 max-w-md mx-auto">
          <label className="block text-sm font-medium text-gray-700 mb-2">Global Progress Value: {progress}%</label>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={progress} 
            onChange={(e) => setProgress(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto items-center justify-items-center">
        
        {/* 1. Standard */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">01. Standard Rounded</span>
          <ProgressStandard value={progress} />
        </div>

        {/* 2. Gradient */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">02. Animated Gradient</span>
          <ProgressGradient value={progress} />
        </div>

        {/* 3. Glass */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">03. Glassmorphism</span>
          <ProgressGlass value={progress} />
        </div>

        {/* 4. Tooltip */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">04. Following Tooltip</span>
          <ProgressTooltip value={progress} />
        </div>

        {/* 5. Circular */}
        <div className="w-full flex flex-col items-center gap-4 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">05. SVG Circular</span>
          <ProgressCircular value={progress} />
        </div>

        {/* 6. Neumorphic */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">06. Neumorphic</span>
          <ProgressNeumorphic value={progress} />
        </div>

        {/* 7. Cyberpunk */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">07. Cyberpunk Segments</span>
          <ProgressCyberpunk value={progress} />
        </div>
        {/* 8. Brutalist */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">08. Brutalist</span>
          <ProgressBrutalist value={progress} />
        </div>

        {/* 9. Upload */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">09. File Upload</span>
          <ProgressUpload value={progress} />
        </div>

        {/* 10. Vertical */}
        <div className="w-full flex flex-col items-center gap-4 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">10. Vertical Liquid</span>
          <ProgressVertical value={progress} />
        </div>

      </div>
    </div>
  );
};

export default ProgressBars;