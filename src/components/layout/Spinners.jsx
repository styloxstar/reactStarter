import React from 'react';

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
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">01. Classic</span>
          <SpinnerClassic />
        </div>

        {/* 2. Dual Ring */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">02. Dual Ring</span>
          <SpinnerDualRing />
        </div>

        {/* 3. Pulse */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">03. Pulse Ping</span>
          <SpinnerPulse />
        </div>

        {/* 4. Dots */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">04. Bouncing Dots</span>
          <SpinnerDots />
        </div>

        {/* 5. Gradient */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">05. Gradient</span>
          <SpinnerGradient />
        </div>

        {/* 6. Glass (Needs dark bg context usually, simulated here) */}
        <div className="flex flex-col items-center gap-4 bg-gray-900/10 p-4 rounded-xl">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">06. Glass</span>
          <SpinnerGlass />
        </div>

        {/* 7. Wave */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">07. Audio Wave</span>
          <SpinnerWave />
        </div>

        {/* 8. Orbit */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">08. Orbit</span>
          <SpinnerOrbit />
        </div>

        {/* 9. Square Flip */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">09. Rotating Cube</span>
          <SpinnerSquareFlip />
        </div>

        {/* 10. Neumorphic */}
        <div className="flex flex-col items-center gap-4 bg-gray-200 p-4 rounded-xl">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">10. Neumorphic</span>
          <SpinnerNeumorphic />
        </div>

      </div>
    </div>
  );
};

export default Spinners;