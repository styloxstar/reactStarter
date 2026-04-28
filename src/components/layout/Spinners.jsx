import React from 'react';
import CopyButton from '../common/CopyButton';

// --- 1. The Classic (Standard Ring) ---
export const SpinnerClassic = () => (
  <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-blue-500 animate-spin"></div>
);

// --- 2. The Dual Ring (Yin Yang) ---
export const SpinnerDualRing = () => (
  <div className="relative w-12 h-12">
    <div className="absolute w-full h-full rounded-full border-4 border-transparent border-t-indigo-500 border-b-indigo-500 animate-spin"></div>
    <div className="absolute w-full h-full rounded-full border-4 border-transparent border-l-pink-500 border-r-pink-500 animate-spin [animation-direction:reverse]"></div>
  </div>
);

// --- 3. The Pulse (Radar) ---
export const SpinnerPulse = () => (
  <div className="relative flex h-12 w-12 items-center justify-center">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
    <span className="relative inline-flex h-6 w-6 rounded-full bg-sky-500"></span>
  </div>
);

// --- 4. The Bouncing Dots (Typing) ---
export const SpinnerDots = () => (
  <div className="flex space-x-2 justify-center items-center h-12">
    <div className="h-4 w-4 bg-slate-800 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
    <div className="h-4 w-4 bg-slate-800 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
    <div className="h-4 w-4 bg-slate-800 rounded-full animate-bounce"></div>
  </div>
);

// --- 5. The Gradient Spinner ---
export const SpinnerGradient = () => (
  <div className="relative w-14 h-14 animate-spin rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 p-[3px]">
    <div className="h-full w-full bg-white rounded-full"></div>
  </div>
);

// --- 6. The Glassmorphism Spinner ---
export const SpinnerGlass = () => (
  <div className="relative w-20 h-20 flex items-center justify-center">
    {/* Blurred Backdrop */}
    <div className="absolute inset-0 bg-blue-500/30 backdrop-blur-md rounded-xl animate-pulse"></div>
    {/* Spinner on top */}
    <div className="relative w-10 h-10 border-4 border-white/50 border-t-white rounded-full animate-spin shadow-lg"></div>
  </div>
);

// --- 7. The Audio Wave (Bar Loader) ---
export const SpinnerWave = () => (
  <div className="flex items-center gap-1 h-12">
    <div className="w-1.5 h-6 bg-emerald-500 animate-[pulse_1s_ease-in-out_infinite]"></div>
    <div className="w-1.5 h-10 bg-emerald-500 animate-[pulse_1s_ease-in-out_infinite_0.2s]"></div>
    <div className="w-1.5 h-14 bg-emerald-500 animate-[pulse_1s_ease-in-out_infinite_0.4s]"></div>
    <div className="w-1.5 h-10 bg-emerald-500 animate-[pulse_1s_ease-in-out_infinite_0.6s]"></div>
    <div className="w-1.5 h-6 bg-emerald-500 animate-[pulse_1s_ease-in-out_infinite_0.8s]"></div>
  </div>
);

// --- 8. The Orbit (Solar System) ---
export const SpinnerOrbit = () => (
  <div className="relative w-14 h-14 animate-spin">
    <div className="absolute top-0 left-1/2 -ml-1 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
    <div className="absolute bottom-0 right-1/2 -mr-1 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
    <div className="w-full h-full border-2 border-orange-200 rounded-full opacity-50"></div>
  </div>
);

// --- 9. The Square Flip (3D Morph) ---
export const SpinnerSquareFlip = () => (
  <div className="w-10 h-10 bg-indigo-600 animate-[spin_2s_linear_infinite]">
    {/* Note: In a real project, keyframes for borderRadius morphing work best here, 
        but we can simulate a cool effect with rotation and opacity */}
    <div className="w-full h-full bg-indigo-400 opacity-50 animate-ping"></div>
  </div>
);

// --- 10. The Neumorphic (Soft UI) ---
export const SpinnerNeumorphic = () => (
  <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]">
    <div className="w-8 h-8 rounded-full border-4 border-gray-300 border-t-blue-500 animate-spin"></div>
  </div>
);

// --- Gallery Layout ---
const Spinners = () => {
  return (
    <div className="container box-shadow bg-slate-50 p-10 font-sans">
      <h1 className="text-3xl font-bold text-center text-slate-800 mb-12">Modern Spinners & Loaders</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 max-w-7xl mx-auto justify-items-center items-center">

        {/* 1. Classic */}
        <div className="flex flex-col items-center gap-4 box-shadow p-4 rounded-lg relative group/spin">
          <div className="absolute -top-2 -right-2 z-40 opacity-0 group-hover/spin:opacity-100 transition-opacity scale-75">
            <CopyButton 
              jsxCode={`export const SpinnerClassic = () => (\n  <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-blue-500 animate-spin" />\n);`}
              htmlCode={`<div class="spinner-classic"></div>`}
              cssCode={`.spinner-classic { width: 3rem; height: 3rem; border-radius: 50%; border: 4px solid #e2e8f0; border-top-color: #3b82f6; animation: spin 1s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }`}
            />
          </div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">01. Classic</span>
          <SpinnerClassic />
        </div>

        {/* 2. Dual Ring */}
        <div className="flex flex-col items-center gap-4 box-shadow p-4 rounded-lg relative group/spin">
          <div className="absolute -top-2 -right-2 z-40 opacity-0 group-hover/spin:opacity-100 transition-opacity scale-75">
            <CopyButton 
              jsxCode={`export const SpinnerDualRing = () => (\n  <div className="relative w-12 h-12">\n    <div className="absolute w-full h-full rounded-full border-4 border-transparent border-t-indigo-500 border-b-indigo-500 animate-spin" />\n    <div className="absolute w-full h-full rounded-full border-4 border-transparent border-l-pink-500 border-r-pink-500 animate-spin [animation-direction:reverse]" />\n  </div>\n);`}
              htmlCode={`<div class="dual-ring">
  <div class="ring-1"></div>
  <div class="ring-2"></div>
</div>`}
              cssCode={`.dual-ring { position: relative; width: 3rem; height: 3rem; }
.ring-1, .ring-2 { position: absolute; width: 100%; height: 100%; border-radius: 50%; border: 4px solid transparent; }
.ring-1 { border-top-color: #6366f1; border-bottom-color: #6366f1; animation: spin 1s linear infinite; }
.ring-2 { border-left-color: #ec4899; border-right-color: #ec4899; animation: spin 1s linear infinite reverse; }
@keyframes spin { to { transform: rotate(360deg); } }`}
            />
          </div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">02. Dual Ring</span>
          <SpinnerDualRing />
        </div>

        {/* 3. Pulse */}
        <div className="flex flex-col items-center gap-4 box-shadow p-4 rounded-lg relative group/spin">
          <div className="absolute -top-2 -right-2 z-40 opacity-0 group-hover/spin:opacity-100 transition-opacity scale-75">
            <CopyButton 
              jsxCode={`export const SpinnerPulse = () => (\n  <div className="relative flex h-12 w-12 items-center justify-center">\n    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />\n    <span className="relative inline-flex h-6 w-6 rounded-full bg-sky-500" />\n  </div>\n);`}
              htmlCode={`<div class="pulse-spinner">
  <span class="ping"></span>
  <span class="dot"></span>
</div>`}
              cssCode={`.pulse-spinner { position: relative; display: flex; align-items: center; justify-content: center; width: 3rem; height: 3rem; }
.ping { position: absolute; width: 100%; height: 100%; border-radius: 50%; background: #38bdf8; opacity: 0.75; animation: ping 1s cubic-bezier(0,0,0.2,1) infinite; }
.dot { position: relative; width: 1.5rem; height: 1.5rem; border-radius: 50%; background: #0ea5e9; }
@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }`}
            />
          </div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">03. Pulse Ping</span>
          <SpinnerPulse />
        </div>

        {/* 4. Dots */}
        <div className="flex flex-col items-center gap-4 box-shadow p-4 rounded-lg relative group/spin">
          <div className="absolute -top-2 -right-2 z-40 opacity-0 group-hover/spin:opacity-100 transition-opacity scale-75">
            <CopyButton 
              jsxCode={`export const SpinnerDots = () => (\n  <div className="flex space-x-2 justify-center items-center h-12">\n    <div className="h-4 w-4 bg-slate-800 rounded-full animate-bounce [animation-delay:-0.3s]" />\n    <div className="h-4 w-4 bg-slate-800 rounded-full animate-bounce [animation-delay:-0.15s]" />\n    <div className="h-4 w-4 bg-slate-800 rounded-full animate-bounce" />\n  </div>\n);`}
              htmlCode={`<div class="bouncing-dots">
  <span></span><span></span><span></span>
</div>`}
              cssCode={`.bouncing-dots { display: flex; gap: 0.5rem; align-items: center; height: 3rem; }
.bouncing-dots span { width: 1rem; height: 1rem; background: #1e293b; border-radius: 50%; animation: bounce 0.6s infinite alternate; }
.bouncing-dots span:nth-child(2) { animation-delay: 0.15s; }
.bouncing-dots span:nth-child(3) { animation-delay: 0.3s; }
@keyframes bounce { to { transform: translateY(-1rem); } }`}
            />
          </div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">04. Bouncing Dots</span>
          <SpinnerDots />
        </div>

        {/* 5. Gradient */}
        <div className="flex flex-col items-center gap-4 box-shadow p-4 rounded-lg relative group/spin">
          <div className="absolute -top-2 -right-2 z-40 opacity-0 group-hover/spin:opacity-100 transition-opacity scale-75">
            <CopyButton 
              jsxCode={`export const SpinnerGradient = () => (\n  <div className="relative w-14 h-14 animate-spin rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 p-[3px]">\n    <div className="h-full w-full bg-white rounded-full" />\n  </div>\n);`}
              htmlCode={`<div class="gradient-spinner"><div class="inner"></div></div>`}
              cssCode={`.gradient-spinner { width: 3.5rem; height: 3.5rem; border-radius: 50%; background: linear-gradient(90deg, #a855f7, #3b82f6, #ec4899); padding: 3px; animation: spin 1s linear infinite; }
.gradient-spinner .inner { width: 100%; height: 100%; background: #fff; border-radius: 50%; }
@keyframes spin { to { transform: rotate(360deg); } }`}
            />
          </div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">05. Gradient</span>
          <SpinnerGradient />
        </div>

        {/* 6. Glass (Needs dark bg context usually, simulated here) */}
        <div className="flex flex-col items-center gap-4 bg-gray-900/10 p-4 rounded-xl box-shadow relative group/spin">
          <div className="absolute -top-2 -right-2 z-40 opacity-0 group-hover/spin:opacity-100 transition-opacity scale-75">
            <CopyButton 
              jsxCode={`export const SpinnerGlass = () => (\n  <div className="relative w-20 h-20 flex items-center justify-center">\n    <div className="absolute inset-0 bg-blue-500/30 backdrop-blur-md rounded-xl animate-pulse" />\n    <div className="relative w-10 h-10 border-4 border-white/50 border-t-white rounded-full animate-spin shadow-lg" />\n  </div>\n);`}
              htmlCode={`<div class="glass-spinner">
  <div class="glass-bg"></div>
  <div class="glass-ring"></div>
</div>`}
              cssCode={`.glass-spinner { position: relative; width: 5rem; height: 5rem; display: flex; align-items: center; justify-content: center; }
.glass-bg { position: absolute; inset: 0; background: rgba(59,130,246,0.3); backdrop-filter: blur(12px); border-radius: 0.75rem; animation: pulse 2s ease-in-out infinite; }
.glass-ring { position: relative; width: 2.5rem; height: 2.5rem; border: 4px solid rgba(255,255,255,0.5); border-top-color: #fff; border-radius: 50%; animation: spin 1s linear infinite; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }`}
            />
          </div>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">06. Glass</span>
          <SpinnerGlass />
        </div>

        {/* 7. Wave */}
        <div className="flex flex-col items-center gap-4 box-shadow p-4 rounded-lg relative group/spin">
          <div className="absolute -top-2 -right-2 z-40 opacity-0 group-hover/spin:opacity-100 transition-opacity scale-75">
            <CopyButton 
              jsxCode={`export const SpinnerWave = () => (\n  <div className="flex items-center gap-1 h-12">\n    <div className="w-1.5 h-6 bg-emerald-500 animate-[pulse_1s_ease-in-out_infinite]" />\n    <div className="w-1.5 h-10 bg-emerald-500 animate-[pulse_1s_ease-in-out_infinite_0.2s]" />\n    <div className="w-1.5 h-14 bg-emerald-500 animate-[pulse_1s_ease-in-out_infinite_0.4s]" />\n    <div className="w-1.5 h-10 bg-emerald-500 animate-[pulse_1s_ease-in-out_infinite_0.6s]" />\n    <div className="w-1.5 h-6 bg-emerald-500 animate-[pulse_1s_ease-in-out_infinite_0.8s]" />\n  </div>\n);`}
              htmlCode={`<div class="wave-loader">
  <span></span><span></span><span></span><span></span><span></span>
</div>`}
              cssCode={`.wave-loader { display: flex; align-items: center; gap: 0.25rem; height: 3rem; }
.wave-loader span { width: 0.375rem; background: #10b981; border-radius: 2px; animation: wave 1s ease-in-out infinite; }
.wave-loader span:nth-child(1) { height: 1.5rem; }
.wave-loader span:nth-child(2) { height: 2.5rem; animation-delay: 0.2s; }
.wave-loader span:nth-child(3) { height: 3.5rem; animation-delay: 0.4s; }
.wave-loader span:nth-child(4) { height: 2.5rem; animation-delay: 0.6s; }
.wave-loader span:nth-child(5) { height: 1.5rem; animation-delay: 0.8s; }
@keyframes wave { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(0.5); opacity: 0.5; } }`}
            />
          </div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">07. Audio Wave</span>
          <SpinnerWave />
        </div>

        {/* 8. Orbit */}
        <div className="flex flex-col items-center gap-4 box-shadow p-4 rounded-lg relative group/spin">
          <div className="absolute -top-2 -right-2 z-40 opacity-0 group-hover/spin:opacity-100 transition-opacity scale-75">
            <CopyButton 
              jsxCode={`export const SpinnerOrbit = () => (\n  <div className="relative w-14 h-14 animate-spin">\n    <div className="absolute top-0 left-1/2 -ml-1 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]" />\n    <div className="absolute bottom-0 right-1/2 -mr-1 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]" />\n    <div className="w-full h-full border-2 border-orange-200 rounded-full opacity-50" />\n  </div>\n);`}
              htmlCode={`<div class="orbit-spinner">
  <span class="planet p1"></span>
  <span class="planet p2"></span>
  <div class="orbit-ring"></div>
</div>`}
              cssCode={`.orbit-spinner { position: relative; width: 3.5rem; height: 3.5rem; animation: spin 1.5s linear infinite; }
.planet { position: absolute; width: 0.75rem; height: 0.75rem; background: #f97316; border-radius: 50%; box-shadow: 0 0 10px rgba(249,115,22,0.8); }
.p1 { top: 0; left: 50%; margin-left: -0.375rem; }
.p2 { bottom: 0; right: 50%; margin-right: -0.375rem; }
.orbit-ring { width: 100%; height: 100%; border: 2px solid #fed7aa; border-radius: 50%; opacity: 0.5; }
@keyframes spin { to { transform: rotate(360deg); } }`}
            />
          </div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">08. Orbit</span>
          <SpinnerOrbit />
        </div>

        {/* 9. Square Flip */}
        <div className="flex flex-col items-center gap-4 box-shadow p-4 rounded-lg relative group/spin">
          <div className="absolute -top-2 -right-2 z-40 opacity-0 group-hover/spin:opacity-100 transition-opacity scale-75">
            <CopyButton 
              jsxCode={`export const SpinnerSquareFlip = () => (\n  <div className="w-10 h-10 bg-indigo-600 animate-[spin_2s_linear_infinite]">\n    <div className="w-full h-full bg-indigo-400 opacity-50 animate-ping" />\n  </div>\n);`}
              htmlCode={`<div class="cube-spinner"><div class="cube-inner"></div></div>`}
              cssCode={`.cube-spinner { width: 2.5rem; height: 2.5rem; background: #4f46e5; animation: spin 2s linear infinite; }
.cube-inner { width: 100%; height: 100%; background: #818cf8; opacity: 0.5; animation: ping 1s cubic-bezier(0,0,0.2,1) infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }`}
            />
          </div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">09. Rotating Cube</span>
          <SpinnerSquareFlip />
        </div>

        {/* 10. Neumorphic */}
        <div className="flex flex-col items-center gap-4 bg-gray-200 p-4 rounded-xl box-shadow relative group/spin">
          <div className="absolute -top-2 -right-2 z-40 opacity-0 group-hover/spin:opacity-100 transition-opacity scale-75">
            <CopyButton 
              jsxCode={`export const SpinnerNeumorphic = () => (\n  <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]">\n    <div className="w-8 h-8 rounded-full border-4 border-gray-300 border-t-blue-500 animate-spin" />\n  </div>\n);`}
              htmlCode={`<div class="neu-spinner">
  <div class="neu-ring"></div>
</div>`}
              cssCode={`.neu-spinner { display: flex; align-items: center; justify-content: center; width: 4rem; height: 4rem; border-radius: 50%; background: #e5e7eb; box-shadow: 6px 6px 12px #bebebe, -6px -6px 12px #ffffff; }
.neu-ring { width: 2rem; height: 2rem; border-radius: 50%; border: 4px solid #d1d5db; border-top-color: #3b82f6; animation: spin 1s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }`}
            />
          </div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">10. Neumorphic</span>
          <SpinnerNeumorphic />
        </div>

      </div>
    </div>
  );
};

export default Spinners;