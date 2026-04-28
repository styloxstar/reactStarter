import React, { useState, useEffect } from 'react';
import CopyButton from '../common/CopyButton';

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
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg relative group/prog">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/prog:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const ProgressStandard = ({ value }) => (\n  <div className="w-full">\n    <div className="flex justify-between mb-1"><span>Loading...</span><span>{value}%</span></div>\n    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">\n      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: \`\${value}%\` }} />\n    </div>\n  </div>\n);`} htmlCode={`<div class="progress"><div class="progress-header"><span>Loading...</span><span>45%</span></div><div class="track"><div class="fill" style="width:45%"></div></div></div>`} cssCode={`.progress { width: 100%; }
.progress-header { display: flex; justify-content: space-between; margin-bottom: 0.25rem; font-size: 0.875rem; font-weight: 500; color: #334155; }
.track { width: 100%; background: #e2e8f0; border-radius: 9999px; height: 0.625rem; overflow: hidden; }
.fill { height: 100%; background: #2563eb; border-radius: 9999px; transition: width 0.5s ease-out; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">01. Standard Rounded</span>
          <ProgressStandard value={progress} />
        </div>

        {/* 2. Gradient */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg relative group/prog">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/prog:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const ProgressGradient = ({ value }) => (\n  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">\n    <div className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500" style={{ width: \`\${value}%\` }} />\n  </div>\n);`} htmlCode={`<div class="gradient-progress"><div class="gradient-fill" style="width:70%"></div></div>`} cssCode={`.gradient-progress { width: 100%; background: #e5e7eb; border-radius: 9999px; height: 1rem; overflow: hidden; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); }
.gradient-fill { height: 100%; background: linear-gradient(90deg, #8b5cf6, #d946ef, #ec4899); transition: width 0.7s ease-out; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">02. Animated Gradient</span>
          <ProgressGradient value={progress} />
        </div>

        {/* 3. Glass */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg relative group/prog">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/prog:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const ProgressGlass = ({ value }) => (\n  <div className="w-full p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">\n    <div className="flex justify-between text-white text-xs font-bold mb-2"><span>PROCESSING</span><span>{value}/100</span></div>\n    <div className="w-full bg-black/20 backdrop-blur-sm rounded-full h-4 p-1 border border-white/10">\n      <div className="bg-white/90 h-full rounded-full" style={{ width: \`\${value}%\` }} />\n    </div>\n  </div>\n);`} htmlCode={`<div class="glass-progress"><div class="header"><span>PROCESSING</span><span>60/100</span></div><div class="glass-track"><div class="glass-fill" style="width:60%"></div></div></div>`} cssCode={`.glass-progress { padding: 1.5rem; background: linear-gradient(135deg, #6366f1, #9333ea); border-radius: 0.75rem; }
.glass-progress .header { display: flex; justify-content: space-between; color: #fff; font-size: 0.75rem; font-weight: 700; margin-bottom: 0.5rem; letter-spacing: 0.05em; }
.glass-track { background: rgba(0,0,0,0.2); backdrop-filter: blur(8px); border-radius: 9999px; height: 1rem; padding: 0.25rem; border: 1px solid rgba(255,255,255,0.1); }
.glass-fill { height: 100%; background: rgba(255,255,255,0.9); border-radius: 9999px; box-shadow: 0 0 10px rgba(255,255,255,0.5); transition: width 0.5s; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">03. Glassmorphism</span>
          <ProgressGlass value={progress} />
        </div>

        {/* 4. Tooltip */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg relative group/prog">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/prog:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const ProgressTooltip = ({ value }) => (\n  <div className="w-full pt-8">\n    <div className="w-full bg-gray-200 rounded-full h-1.5 relative">\n      <div className="bg-indigo-600 h-1.5 rounded-full relative" style={{ width: \`\${value}%\` }}>\n        <div className="absolute right-0 -top-8 bg-indigo-600 text-white text-xs font-bold py-1 px-2 rounded">{value}%</div>\n      </div>\n    </div>\n  </div>\n);`} htmlCode={`<div class="progress-tooltip"><div class="track"><div class="fill" style="width:45%"><span class="tooltip">45%</span></div></div></div>`} cssCode={`.progress-tooltip { padding-top: 2rem; }
.progress-tooltip .track { width: 100%; background: #e5e7eb; border-radius: 9999px; height: 0.375rem; position: relative; }
.progress-tooltip .fill { height: 100%; background: #4f46e5; border-radius: 9999px; position: relative; transition: width 0.5s; }
.tooltip { position: absolute; right: 0; top: -2rem; transform: translateX(50%); background: #4f46e5; color: #fff; font-size: 0.75rem; font-weight: 700; padding: 0.25rem 0.5rem; border-radius: 0.25rem; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">04. Following Tooltip</span>
          <ProgressTooltip value={progress} />
        </div>

        {/* 5. Circular */}
        <div className="w-full flex flex-col items-center gap-4 box-shadow p-4 rounded-lg relative group/prog">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/prog:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const ProgressCircular = ({ value }) => {\n  const radius = 30; const circumference = 2 * Math.PI * radius;\n  const offset = circumference - (value / 100) * circumference;\n  return (\n    <div className="relative w-24 h-24 flex items-center justify-center">\n      <svg className="w-full h-full -rotate-90"><circle cx="50%" cy="50%" r={radius} strokeWidth="6" fill="transparent" className="text-gray-200" stroke="currentColor" /><circle cx="50%" cy="50%" r={radius} strokeWidth="6" fill="transparent" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className="text-blue-600" stroke="currentColor" /></svg>\n      <span className="absolute text-sm font-bold">{value}%</span>\n    </div>\n  );\n};`} htmlCode={`<div class="circular-progress"><svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="30" /><circle cx="40" cy="40" r="30" class="indicator" /></svg><span>45%</span></div>`} cssCode={`.circular-progress { position: relative; width: 6rem; height: 6rem; display: flex; align-items: center; justify-content: center; }
.circular-progress svg { width: 100%; height: 100%; transform: rotate(-90deg); }
.circular-progress circle { fill: transparent; stroke-width: 6; }
.circular-progress circle:first-child { stroke: #e5e7eb; }
.circular-progress .indicator { stroke: #2563eb; stroke-linecap: round; stroke-dasharray: 188.5; stroke-dashoffset: 103.67; transition: stroke-dashoffset 0.7s ease-out; }
.circular-progress span { position: absolute; font-size: 0.875rem; font-weight: 700; color: #374151; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">05. SVG Circular</span>
          <ProgressCircular value={progress} />
        </div>

        {/* 6. Neumorphic */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg relative group/prog">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/prog:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const ProgressNeumorphic = ({ value }) => (\n  <div className="w-full bg-[#e0e5ec] p-6 rounded-xl shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)]">\n    <div className="w-full bg-[#e0e5ec] rounded-full h-6 p-1 shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]">\n      <div className="h-full rounded-full bg-blue-500" style={{ width: \`\${value}%\` }} />\n    </div>\n  </div>\n);`} htmlCode={`<div class="neu-progress"><div class="neu-track"><div class="neu-fill" style="width:45%"></div></div></div>`} cssCode={`.neu-progress { background: #e0e5ec; padding: 1.5rem; border-radius: 0.75rem; box-shadow: 9px 9px 16px rgb(163,177,198), -9px -9px 16px rgba(255,255,255,0.5); }
.neu-track { background: #e0e5ec; border-radius: 9999px; height: 1.5rem; padding: 0.25rem; box-shadow: inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff; }
.neu-fill { height: 100%; border-radius: 9999px; background: #3b82f6; box-shadow: 2px 2px 4px #bebebe, -2px -2px 4px #ffffff; transition: width 0.5s; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">06. Neumorphic</span>
          <ProgressNeumorphic value={progress} />
        </div>

        {/* 7. Cyberpunk */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg relative group/prog">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/prog:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const ProgressCyberpunk = ({ value }) => {\n  const total = 20; const active = Math.round((value / 100) * total);\n  return (\n    <div className="w-full bg-black p-4 border border-cyan-800 rounded-lg">\n      <div className="flex justify-between text-cyan-500 font-mono text-xs mb-2"><span>SYSTEM_LOAD</span><span>{value}%</span></div>\n      <div className="flex gap-1 h-4">{[...Array(total)].map((_, i) => <div key={i} className={i < active ? 'flex-1 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)] rounded-sm' : 'flex-1 bg-gray-800 opacity-30 rounded-sm'} />)}</div>\n    </div>\n  );\n};`} htmlCode={`<div class="cyber-progress"><div class="header"><span>SYSTEM_LOAD</span><span>45%</span></div><div class="segments"><!-- 20 segments --></div></div>`} cssCode={`.cyber-progress { background: #000; padding: 1rem; border: 1px solid #155e75; border-radius: 0.5rem; box-shadow: 0 0 10px rgba(6,182,212,0.2); }
.cyber-progress .header { display: flex; justify-content: space-between; color: #06b6d4; font-family: monospace; font-size: 0.75rem; margin-bottom: 0.5rem; }
.segments { display: flex; gap: 0.25rem; height: 1rem; }
.segments div { flex: 1; border-radius: 2px; background: #1f2937; opacity: 0.3; }
.segments div.active { background: #22d3ee; opacity: 1; box-shadow: 0 0 8px rgba(6,182,212,0.8); }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">07. Cyberpunk Segments</span>
          <ProgressCyberpunk value={progress} />
        </div>
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg relative group/prog">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/prog:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const ProgressBrutalist = ({ value }) => (\n  <div className="w-full">\n    <div className="flex justify-between border-2 border-black border-b-0 px-2 py-1 bg-white"><span className="font-bold text-xs uppercase">Uploading</span><span className="font-bold text-xs">{value}%</span></div>\n    <div className="w-full h-6 border-2 border-black bg-white p-0.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">\n      <div className="h-full bg-yellow-400 border-r-2 border-black" style={{ width: \`\${value}%\` }} />\n    </div>\n  </div>\n);`} htmlCode={`<div class="brutal-progress"><div class="header"><span>UPLOADING</span><span>80%</span></div><div class="bar"><div class="fill" style="width:80%"></div></div></div>`} cssCode={`.brutal-progress .header { display: flex; justify-content: space-between; border: 2px solid #000; border-bottom: none; padding: 0.25rem 0.5rem; background: #fff; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; }
.brutal-progress .bar { width: 100%; height: 1.5rem; border: 2px solid #000; background: #fff; padding: 2px; box-shadow: 4px 4px 0 #000; }
.brutal-progress .fill { height: 100%; background: #facc15; border-right: 2px solid #000; transition: width 0.3s; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">08. Brutalist</span>
          <ProgressBrutalist value={progress} />
        </div>

        {/* 9. Upload */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg relative group/prog">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/prog:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const ProgressUpload = ({ value }) => (\n  <div className="w-full p-4 border border-gray-200 rounded-xl bg-white shadow-sm">\n    <div className="flex items-center gap-3">\n      <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">📄</div>\n      <div className="flex-1">\n        <div className="flex justify-between mb-1"><h4>design-assets.zip</h4><span>{value}%</span></div>\n        <div className="w-full bg-gray-100 rounded-full h-1.5"><div className={\`h-1.5 rounded-full \${value===100?'bg-green-500':'bg-indigo-600'}\`} style={{width:\`\${value}%\`}} /></div>\n      </div>\n    </div>\n  </div>\n);`} htmlCode={`<div class="upload-progress"><div class="file-icon">📄</div><div class="info"><div class="row"><span>design-assets.zip</span><span>45%</span></div><div class="track"><div class="fill" style="width:45%"></div></div></div><button>✕</button></div>`} cssCode={`.upload-progress { display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 1px solid #e5e7eb; border-radius: 0.75rem; background: #fff; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
.file-icon { width: 2.5rem; height: 2.5rem; background: #eef2ff; color: #4f46e5; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; }
.info { flex: 1; }
.row { display: flex; justify-content: space-between; margin-bottom: 0.25rem; font-size: 0.875rem; }
.upload-progress .track { width: 100%; background: #f3f4f6; border-radius: 9999px; height: 0.375rem; }
.upload-progress .fill { height: 100%; background: #4f46e5; border-radius: 9999px; transition: width 0.3s; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">09. File Upload</span>
          <ProgressUpload value={progress} />
        </div>

        {/* 10. Vertical */}
        <div className="w-full flex flex-col items-center gap-4 box-shadow p-4 rounded-lg relative group/prog">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/prog:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const ProgressVertical = ({ value }) => (\n  <div className="h-48 w-16 bg-gray-50 rounded-full p-2 flex flex-col justify-end items-center shadow-inner relative overflow-hidden">\n    <div className="w-full bg-gradient-to-t from-emerald-400 to-emerald-300 rounded-full" style={{ height: \`\${value}%\` }} />\n    <span className="absolute bottom-4 text-xs font-bold">{value}%</span>\n  </div>\n);`} htmlCode={`<div class="vertical-progress"><div class="v-fill" style="height:45%"></div><span>45%</span></div>`} cssCode={`.vertical-progress { height: 12rem; width: 4rem; background: #f9fafb; border-radius: 9999px; padding: 0.5rem; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); position: relative; overflow: hidden; }
.v-fill { width: 100%; background: linear-gradient(to top, #34d399, #6ee7b7); border-radius: 9999px; transition: height 0.7s ease-out; }
.vertical-progress span { position: absolute; bottom: 1rem; font-size: 0.75rem; font-weight: 700; color: #064e3b; background: rgba(255,255,255,0.5); padding: 0 0.25rem; border-radius: 0.25rem; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">10. Vertical Liquid</span>
          <ProgressVertical value={progress} />
        </div>

      </div>
    </div>
  );
};

export default ProgressBars;