import React, { useState, useEffect } from 'react';

// --- 1. The Standard (Accent Color) ---
// Uses the browser's native 'accent' property for a clean, reliable look.
export const SliderStandard = () => {
  const [value, setValue] = useState(50);
  return (
    <div className="w-full max-w-xs">
      <div className="flex justify-between mb-2">
        <label className="text-sm font-medium text-slate-700">Volume</label>
        <span className="text-sm font-medium text-slate-500">{value}%</span>
      </div>
      <input 
        type="range" 
        min="0" max="100" 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 hover:accent-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
      />
    </div>
  );
};

// --- 2. The Gradient Track (Fill Effect) ---
// We simulate the "filled" left side using background-size and a linear gradient.
export const SliderGradient = () => {
  const [value, setValue] = useState(70);
  
  return (
    <div className="w-full max-w-xs">
      <label className="block text-sm font-medium text-slate-700 mb-2">Intensity</label>
      <input 
        type="range" 
        min="0" max="100" 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
        style={{ backgroundSize: `${value}% 100%` }}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
        bg-gradient-to-r from-cyan-500 to-blue-600 bg-no-repeat
        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110"
      />
    </div>
  );
};

// --- 3. The Floating Tooltip ---
export const SliderTooltip = () => {
  const [value, setValue] = useState(45);
  return (
    <div className="w-full max-w-xs pt-8 relative group">
      <input 
        type="range" 
        min="0" max="100" 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-800"
      />
      
      {/* Tooltip */}
      <div 
        className="absolute -top-1 left-0 transform -translate-x-1/2 -translate-y-full mb-2 px-2 py-1 bg-slate-800 text-white text-xs font-bold rounded shadow-lg transition-all duration-75"
        style={{ left: `${value}%` }}
      >
        {value}
        {/* Little triangle arrow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-slate-800"></div>
      </div>
    </div>
  );
};

// --- 4. The Glassmorphism Slider ---
export const SliderGlass = () => {
  const [value, setValue] = useState(60);
  return (
    <div className="w-full max-w-xs p-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg">
      <label className="text-white text-sm font-semibold mb-3 block">Opacity</label>
      <input 
        type="range" 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-3 bg-white/20 rounded-full appearance-none cursor-pointer backdrop-blur-sm border border-white/30
        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(255,255,255,0.5)] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-transparent [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-110"
      />
    </div>
  );
};

// --- 5. The Neumorphic (Soft UI) ---
export const SliderNeumorphic = () => {
  const [value, setValue] = useState(30);
  return (
    <div className="w-full max-w-xs">
      <input 
        type="range" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-4 bg-gray-200 rounded-full appearance-none cursor-pointer shadow-[inset_2px_2px_5px_#bebebe,inset_-3px_-3px_7px_#ffffff]
        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-gray-200 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gray-100"
      />
    </div>
  );
};

// --- 6. The Brutalist (Retro/Bold) ---
export const SliderBrutalist = () => {
  const [value, setValue] = useState(80);
  return (
    <div className="w-full max-w-xs">
      <label className="font-black text-black uppercase mb-1 block">Level</label>
      <input 
        type="range" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ backgroundSize: `${value}% 100%` }}
        className="w-full h-6 bg-white border-2 border-black appearance-none cursor-pointer
        bg-gradient-to-r from-yellow-400 to-yellow-400 bg-no-repeat
        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-none [&::-webkit-slider-thumb]:hover:bg-gray-800"
      />
    </div>
  );
};

// --- 7. The Neon Glow ---
export const SliderNeon = () => {
  const [value, setValue] = useState(50);
  return (
    <div className="w-full max-w-xs bg-gray-900 p-4 rounded-xl">
      <input 
        type="range" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ backgroundSize: `${value}% 100%` }}
        className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer
        bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-no-repeat
        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-fuchsia-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(217,70,239,0.8)] [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:shadow-[0_0_20px_rgba(217,70,239,1)]"
      />
    </div>
  );
};

// --- 8. The Thick Pill (Text Inside) ---
export const SliderPill = () => {
  const [value, setValue] = useState(20);
  return (
    <div className="w-full max-w-xs relative h-10 rounded-full bg-slate-200 overflow-hidden">
      {/* The visible fill background */}
      <div 
        className="absolute top-0 left-0 h-full bg-emerald-500 transition-all duration-75 ease-out"
        style={{ width: `${value}%` }}
      />
      
      {/* The text label centered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className={`text-sm font-bold ${value > 50 ? 'text-white' : 'text-slate-700'}`}>
          {value}% Completed
        </span>
      </div>

      {/* The actual input (invisible but clickable) */}
      <input 
        type="range" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  );
};

// --- 9. The Ticks/Stepped Slider ---
export const SliderStepped = () => {
  const [value, setValue] = useState(2); // 0 to 4
  const steps = ['Poor', 'Fair', 'Good', 'Great', 'Super'];
  
  return (
    <div className="w-full max-w-xs">
      <input 
        type="range" 
        min="0" max="4" step="1"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 mb-2"
      />
      <div className="flex justify-between w-full px-1">
        {steps.map((label, i) => (
          <div key={i} className="flex flex-col items-center cursor-pointer" onClick={() => setValue(i)}>
            <div className={`w-1 h-2 mb-1 ${i === value ? 'bg-blue-600' : 'bg-slate-300'}`}></div>
            <span className={`text-xs ${i === value ? 'font-bold text-blue-600' : 'text-slate-400'}`}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 10. The Minimalist (Thin Line) ---
export const SliderMinimal = () => {
  const [value, setValue] = useState(75);
  return (
    <div className="w-full max-w-xs">
      <input 
        type="range" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ backgroundSize: `${value}% 100%` }}
        className="w-full h-[2px] bg-gray-200 appearance-none cursor-pointer
        bg-gradient-to-r from-black to-black bg-no-repeat
        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-125"
      />
    </div>
  );
};

// --- Main Gallery Layout ---
const Sliders = () => {
  return (
    <div className="container box-shadow bg-slate-50 p-10 font-sans">
      <h1 className="text-3xl font-bold text-center text-slate-800 mb-2">Modern Range Sliders</h1>
      <p className="text-center text-slate-500 mb-12">Custom inputs using Tailwind styling</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto justify-items-center items-center">

        {/* 1. Standard */}
        <div className="w-full flex flex-col items-center">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">01. Standard Accent</h3>
          <SliderStandard />
        </div>

        {/* 2. Gradient */}
        <div className="w-full flex flex-col items-center">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">02. Gradient Fill</h3>
          <SliderGradient />
        </div>

        {/* 3. Tooltip */}
        <div className="w-full flex flex-col items-center">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">03. Follow Tooltip</h3>
          <SliderTooltip />
        </div>

        {/* 4. Glass */}
        <div className="w-full flex flex-col items-center">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">04. Glassmorphism</h3>
          <SliderGlass />
        </div>

        {/* 5. Neumorphic */}
        <div className="w-full flex flex-col items-center">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">05. Neumorphic</h3>
          <SliderNeumorphic />
        </div>

        {/* 6. Brutalist */}
        <div className="w-full flex flex-col items-center">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">06. Brutalist</h3>
          <SliderBrutalist />
        </div>

        {/* 7. Neon */}
        <div className="w-full flex flex-col items-center">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">07. Neon Glow</h3>
          <SliderNeon />
        </div>

        {/* 8. Pill Fill */}
        <div className="w-full flex flex-col items-center">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">08. Pill Label</h3>
          <SliderPill />
        </div>

        {/* 9. Stepped */}
        <div className="w-full flex flex-col items-center">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">09. Stepped Labels</h3>
          <SliderStepped />
        </div>

        {/* 10. Minimal */}
        <div className="w-full flex flex-col items-center">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">10. Minimal Line</h3>
          <SliderMinimal />
        </div>

      </div>
    </div>
  );
};

export default Sliders;