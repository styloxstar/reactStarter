import React, { useState, useEffect } from 'react';
import CopyButton from '../common/CopyButton';

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
    <div className="container box-shadow overflow-y-auto bg-slate-50 p-10 font-sans">
      <h1 className="text-3xl font-bold text-center text-slate-800 mb-2">Modern Range Sliders</h1>
      <p className="text-center text-slate-500 mb-12">Custom inputs using Tailwind styling</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto justify-items-center items-center">

        {/* 1. Standard */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/slider">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/slider:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const SliderStandard = () => {\n  const [value, setValue] = useState(50);\n  return (\n    <div className="w-full max-w-xs">\n      <div className="flex justify-between mb-2">\n        <label className="text-sm font-medium">Volume</label>\n        <span>{value}%</span>\n      </div>\n      <input type="range" min="0" max="100" value={value} onChange={e => setValue(e.target.value)} className="w-full h-2 bg-gray-200 rounded-lg accent-indigo-600" />\n    </div>\n  );\n};`}
              htmlCode={`<div class="slider-standard">
  <div class="slider-header"><label>Volume</label><span>50%</span></div>
  <input type="range" min="0" max="100" value="50">
</div>`}
              cssCode={`.slider-standard { width: 100%; max-width: 20rem; }
.slider-header { display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 500; color: #334155; }
input[type="range"] { width: 100%; height: 0.5rem; background: #e5e7eb; border-radius: 0.5rem; appearance: none; cursor: pointer; accent-color: #4f46e5; }
input[type="range"]::-webkit-slider-thumb { appearance: none; width: 1rem; height: 1rem; background: #4f46e5; border-radius: 50%; cursor: pointer; }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">01. Standard Accent</h3>
          <SliderStandard />
        </div>

        {/* 2. Gradient */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/slider">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/slider:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const SliderGradient = () => {\n  const [value, setValue] = useState(70);\n  return (\n    <div className="w-full max-w-xs">\n      <label className="block text-sm font-medium mb-2">Intensity</label>\n      <input type="range" min="0" max="100" value={value} onChange={e => setValue(e.target.value)} style={{ backgroundSize: \`\${value}% 100%\` }} className="w-full h-2 bg-gray-200 rounded-lg appearance-none bg-gradient-to-r from-cyan-500 to-blue-600 bg-no-repeat" />\n    </div>\n  );\n};`}
              htmlCode={`<div class="slider-gradient">
  <label>Intensity</label>
  <input type="range" min="0" max="100" value="70">
</div>`}
              cssCode={`.slider-gradient { width: 100%; max-width: 20rem; }
.slider-gradient label { display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem; }
.slider-gradient input[type="range"] { width: 100%; height: 0.5rem; border-radius: 0.5rem; appearance: none; cursor: pointer; background: linear-gradient(90deg, #06b6d4, #2563eb) no-repeat, #e5e7eb; background-size: 70% 100%; }
.slider-gradient input::-webkit-slider-thumb { appearance: none; width: 1rem; height: 1rem; background: #fff; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,0.2); }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">02. Gradient Fill</h3>
          <SliderGradient />
        </div>

        {/* 3. Tooltip */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/slider">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/slider:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const SliderTooltip = () => {\n  const [value, setValue] = useState(45);\n  return (\n    <div className="w-full max-w-xs pt-8 relative">\n      <input type="range" min="0" max="100" value={value} onChange={e => setValue(e.target.value)} className="w-full h-1 bg-slate-200 rounded-lg appearance-none accent-slate-800" />\n      <div className="absolute -top-1 px-2 py-1 bg-slate-800 text-white text-xs font-bold rounded shadow-lg" style={{ left: \`\${value}%\` }}>{value}</div>\n    </div>\n  );\n};`}
              htmlCode={`<div class="slider-tooltip">
  <input type="range" min="0" max="100" value="45">
  <div class="tooltip">45</div>
</div>`}
              cssCode={`.slider-tooltip { position: relative; padding-top: 2rem; max-width: 20rem; }
.slider-tooltip input[type="range"] { width: 100%; height: 0.25rem; background: #e2e8f0; border-radius: 0.5rem; appearance: none; cursor: pointer; accent-color: #1e293b; }
.tooltip { position: absolute; top: -0.25rem; transform: translateX(-50%) translateY(-100%); padding: 0.25rem 0.5rem; background: #1e293b; color: #fff; font-size: 0.75rem; font-weight: 700; border-radius: 0.25rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">03. Follow Tooltip</h3>
          <SliderTooltip />
        </div>

        {/* 4. Glass */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/slider">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/slider:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const SliderGlass = () => {\n  const [value, setValue] = useState(60);\n  return (\n    <div className="w-full max-w-xs p-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl">\n      <label className="text-white text-sm font-semibold mb-3 block">Opacity</label>\n      <input type="range" value={value} onChange={e => setValue(e.target.value)} className="w-full h-3 bg-white/20 rounded-full appearance-none backdrop-blur-sm border border-white/30" />\n    </div>\n  );\n};`}
              htmlCode={`<div class="glass-slider-wrap">
  <label>Opacity</label>
  <input type="range" value="60">
</div>`}
              cssCode={`.glass-slider-wrap { max-width: 20rem; padding: 1.5rem; background: linear-gradient(135deg, #9333ea, #2563eb); border-radius: 0.75rem; }
.glass-slider-wrap label { color: #fff; font-size: 0.875rem; font-weight: 600; display: block; margin-bottom: 0.75rem; }
.glass-slider-wrap input[type="range"] { width: 100%; height: 0.75rem; background: rgba(255,255,255,0.2); border-radius: 9999px; appearance: none; cursor: pointer; border: 1px solid rgba(255,255,255,0.3); backdrop-filter: blur(8px); }
.glass-slider-wrap input::-webkit-slider-thumb { appearance: none; width: 1.25rem; height: 1.25rem; background: #fff; border-radius: 50%; box-shadow: 0 0 10px rgba(255,255,255,0.5); }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">04. Glassmorphism</h3>
          <SliderGlass />
        </div>

        {/* 5. Neumorphic */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/slider">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/slider:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const SliderNeumorphic = () => {\n  const [value, setValue] = useState(30);\n  return (\n    <div className="w-full max-w-xs">\n      <input type="range" value={value} onChange={e => setValue(e.target.value)} className="w-full h-4 bg-gray-200 rounded-full appearance-none shadow-[inset_2px_2px_5px_#bebebe,inset_-3px_-3px_7px_#ffffff]" />\n    </div>\n  );\n};`}
              htmlCode={`<div class="neu-slider"><input type="range" value="30"></div>`}
              cssCode={`.neu-slider { max-width: 20rem; }
.neu-slider input[type="range"] { width: 100%; height: 1rem; background: #e5e7eb; border-radius: 9999px; appearance: none; cursor: pointer; box-shadow: inset 2px 2px 5px #bebebe, inset -3px -3px 7px #ffffff; }
.neu-slider input::-webkit-slider-thumb { appearance: none; width: 1.5rem; height: 1.5rem; background: #e5e7eb; border-radius: 50%; box-shadow: 3px 3px 6px #bebebe, -3px -3px 6px #ffffff; border: 2px solid #f3f4f6; }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">05. Neumorphic</h3>
          <SliderNeumorphic />
        </div>
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/slider">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/slider:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const SliderBrutalist = () => {\n  const [value, setValue] = useState(80);\n  return (\n    <div className="w-full max-w-xs">\n      <label className="font-black text-black uppercase mb-1 block">Level</label>\n      <input type="range" value={value} onChange={e => setValue(e.target.value)} style={{ backgroundSize: \`\${value}% 100%\` }} className="w-full h-6 bg-white border-2 border-black appearance-none bg-gradient-to-r from-yellow-400 to-yellow-400 bg-no-repeat" />\n    </div>\n  );\n};`}
              htmlCode={`<div class="brutal-slider">
  <label>LEVEL</label>
  <input type="range" value="80">
</div>`}
              cssCode={`.brutal-slider { max-width: 20rem; }
.brutal-slider label { font-weight: 900; text-transform: uppercase; display: block; margin-bottom: 0.25rem; }
.brutal-slider input[type="range"] { width: 100%; height: 1.5rem; background: linear-gradient(90deg, #facc15, #facc15) no-repeat, #fff; background-size: 80% 100%; border: 2px solid #000; appearance: none; cursor: pointer; }
.brutal-slider input::-webkit-slider-thumb { appearance: none; width: 1.5rem; height: 1.5rem; background: #000; border: 2px solid #fff; }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">06. Brutalist</h3>
          <SliderBrutalist />
        </div>

        {/* 7. Neon */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/slider">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/slider:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const SliderNeon = () => {\n  const [value, setValue] = useState(50);\n  return (\n    <div className="w-full max-w-xs bg-gray-900 p-4 rounded-xl">\n      <input type="range" value={value} onChange={e => setValue(e.target.value)} style={{ backgroundSize: \`\${value}% 100%\` }} className="w-full h-1 bg-gray-700 rounded-lg appearance-none bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-no-repeat" />\n    </div>\n  );\n};`}
              htmlCode={`<div class="neon-slider-wrap">
  <input type="range" value="50">
</div>`}
              cssCode={`.neon-slider-wrap { max-width: 20rem; background: #111827; padding: 1rem; border-radius: 0.75rem; }
.neon-slider-wrap input[type="range"] { width: 100%; height: 0.25rem; background: linear-gradient(90deg, #d946ef, #a855f7) no-repeat, #374151; background-size: 50% 100%; border-radius: 0.5rem; appearance: none; cursor: pointer; }
.neon-slider-wrap input::-webkit-slider-thumb { appearance: none; width: 1rem; height: 1rem; background: #d946ef; border-radius: 50%; box-shadow: 0 0 15px rgba(217,70,239,0.8); }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">07. Neon Glow</h3>
          <SliderNeon />
        </div>

        {/* 8. Pill Fill */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/slider">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/slider:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const SliderPill = () => {\n  const [value, setValue] = useState(20);\n  return (\n    <div className="w-full max-w-xs relative h-10 rounded-full bg-slate-200 overflow-hidden">\n      <div className="absolute top-0 left-0 h-full bg-emerald-500" style={{ width: \`\${value}%\` }} />\n      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">\n        <span className={\`text-sm font-bold \${value > 50 ? 'text-white' : 'text-slate-700'}\`}>{value}% Completed</span>\n      </div>\n      <input type="range" value={value} onChange={e => setValue(e.target.value)} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />\n    </div>\n  );\n};`}
              htmlCode={`<div class="pill-slider">
  <div class="pill-fill" style="width:20%"></div>
  <span class="pill-label">20% Completed</span>
  <input type="range" value="20">
</div>`}
              cssCode={`.pill-slider { position: relative; max-width: 20rem; height: 2.5rem; border-radius: 9999px; background: #e2e8f0; overflow: hidden; }
.pill-fill { position: absolute; top: 0; left: 0; height: 100%; background: #10b981; transition: width 0.1s; }
.pill-label { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 0.875rem; font-weight: 700; color: #334155; pointer-events: none; }
.pill-slider input[type="range"] { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0; cursor: pointer; }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">08. Pill Label</h3>
          <SliderPill />
        </div>
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/slider">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/slider:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const SliderStepped = () => {\n  const [value, setValue] = useState(2);\n  const steps = ['Poor', 'Fair', 'Good', 'Great', 'Super'];\n  return (\n    <div className="w-full max-w-xs">\n      <input type="range" min="0" max="4" step="1" value={value} onChange={e => setValue(parseInt(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none accent-blue-600 mb-2" />\n      <div className="flex justify-between w-full px-1">\n        {steps.map((label, i) => (\n          <span key={i} className={i === value ? 'font-bold text-blue-600 text-xs' : 'text-slate-400 text-xs'}>{label}</span>\n        ))}\n      </div>\n    </div>\n  );\n};`}
              htmlCode={`<div class="stepped-slider">
  <input type="range" min="0" max="4" step="1" value="2">
  <div class="step-labels"><span>Poor</span><span>Fair</span><span class="active">Good</span><span>Great</span><span>Super</span></div>
</div>`}
              cssCode={`.stepped-slider { max-width: 20rem; }
.stepped-slider input[type="range"] { width: 100%; height: 0.5rem; background: #e2e8f0; border-radius: 0.5rem; appearance: none; cursor: pointer; accent-color: #2563eb; margin-bottom: 0.5rem; }
.step-labels { display: flex; justify-content: space-between; padding: 0 0.25rem; }
.step-labels span { font-size: 0.75rem; color: #94a3b8; cursor: pointer; }
.step-labels span.active { font-weight: 700; color: #2563eb; }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">09. Stepped Labels</h3>
          <SliderStepped />
        </div>

        {/* 10. Minimal */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/slider">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/slider:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const SliderMinimal = () => {\n  const [value, setValue] = useState(75);\n  return (\n    <div className="w-full max-w-xs">\n      <input type="range" value={value} onChange={e => setValue(e.target.value)} style={{ backgroundSize: \`\${value}% 100%\` }} className="w-full h-[2px] bg-gray-200 appearance-none bg-gradient-to-r from-black to-black bg-no-repeat" />\n    </div>\n  );\n};`}
              htmlCode={`<div class="minimal-slider"><input type="range" value="75"></div>`}
              cssCode={`.minimal-slider { max-width: 20rem; }
.minimal-slider input[type="range"] { width: 100%; height: 2px; background: linear-gradient(90deg, #000, #000) no-repeat, #e5e7eb; background-size: 75% 100%; appearance: none; cursor: pointer; }
.minimal-slider input::-webkit-slider-thumb { appearance: none; width: 1rem; height: 1rem; background: #000; border-radius: 50%; transition: transform 0.2s; }
.minimal-slider input::-webkit-slider-thumb:hover { transform: scale(1.25); }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">10. Minimal Line</h3>
          <SliderMinimal />
        </div>

      </div>
    </div>
  );
};

export default Sliders;