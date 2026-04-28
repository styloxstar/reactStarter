import React, { useState } from "react";
import CopyButton from '../common/CopyButton';

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
    <div className="container bg-transparent p-6 md:p-12 font-sans pb-40 overflow-y-auto">
      <h1 className="text-4xl font-bold text-center text-[hsl(var(--foreground))] mb-4">
        Modern Switches
      </h1>
      <p className="text-center text-[hsl(var(--foreground))] opacity-60 mb-16 max-w-2xl mx-auto">
        Responsive interactive toggles with varying styles.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 max-w-6xl w-full">
        {/* Helper Wrapper to Label Styles */}
        <div className="flex flex-col items-center gap-4 glass-card p-6 rounded-xl relative group/switch">
          <div className="absolute -top-2 -right-2 z-40 opacity-0 group-hover/switch:opacity-100 transition-opacity scale-75">
            <CopyButton 
              jsxCode={`const SwitchStandard = ({ isOn, onToggle }) => (\n  <button onClick={onToggle} className={\`relative w-14 h-8 rounded-full transition-colors duration-300 \${isOn ? 'bg-blue-600' : 'bg-gray-300'}\`}>\n    <span className={\`absolute top-1 left-1 bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 \${isOn ? 'translate-x-6' : 'translate-x-0'}\`} />\n  </button>\n);`}
              htmlCode={`<label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>`}
              cssCode={`.switch { position: relative; display: inline-block; width: 3.5rem; height: 2rem; }
.switch input { opacity: 0; width: 0; height: 0; }
.slider { position: absolute; cursor: pointer; inset: 0; background: #d1d5db; border-radius: 9999px; transition: 0.3s; }
.slider::before { content: ''; position: absolute; height: 1.5rem; width: 1.5rem; left: 0.25rem; bottom: 0.25rem; background: #fff; border-radius: 50%; transition: 0.3s; box-shadow: 0 1px 3px rgba(0,0,0,0.2); }
input:checked + .slider { background: #2563eb; }
input:checked + .slider::before { transform: translateX(1.5rem); }`}
            />
          </div>
          <span className="text-gray-500 text-sm font-medium">Standard</span>
          <SwitchStandard
            isOn={switchStates.standard}
            onToggle={() => handleToggle("standard")}
          />
        </div>

        <div className="flex flex-col items-center gap-4 glass-card p-6 rounded-xl relative group/switch">
          <div className="absolute -top-2 -right-2 z-40 opacity-0 group-hover/switch:opacity-100 transition-opacity scale-75">
            <CopyButton 
              jsxCode={`const SwitchGlow = ({ isOn, onToggle }) => (\n  <button onClick={onToggle} className={\`relative w-14 h-8 rounded-full transition-all duration-300 \${isOn ? 'bg-purple-600 shadow-[0_0_15px_rgba(147,51,234,0.6)]' : 'bg-gray-800'}\`}>\n    <span className={\`absolute top-1 left-1 bg-white w-6 h-6 rounded-full shadow-sm transform transition-transform duration-300 \${isOn ? 'translate-x-6' : 'translate-x-0'}\`} />\n  </button>\n);`}
              htmlCode={`<label class="switch-glow">
  <input type="checkbox">
  <span class="slider-glow"></span>
</label>`}
              cssCode={`.switch-glow { position: relative; display: inline-block; width: 3.5rem; height: 2rem; }
.switch-glow input { opacity: 0; width: 0; height: 0; }
.slider-glow { position: absolute; cursor: pointer; inset: 0; background: #1f2937; border-radius: 9999px; transition: 0.3s; }
.slider-glow::before { content: ''; position: absolute; height: 1.5rem; width: 1.5rem; left: 0.25rem; bottom: 0.25rem; background: #fff; border-radius: 50%; transition: 0.3s; }
input:checked + .slider-glow { background: #9333ea; box-shadow: 0 0 15px rgba(147,51,234,0.6); }
input:checked + .slider-glow::before { transform: translateX(1.5rem); }`}
            />
          </div>
          <span className="text-gray-500 text-sm font-medium">Glow</span>
          <SwitchGlow
            isOn={switchStates.glow}
            onToggle={() => handleToggle("glow")}
          />
        </div>

        <div className="flex flex-col items-center gap-4 glass-card p-6 rounded-xl relative group/switch">
          <div className="absolute -top-2 -right-2 z-40 opacity-0 group-hover/switch:opacity-100 transition-opacity scale-75">
            <CopyButton 
              jsxCode={`const SwitchThin = ({ isOn, onToggle }) => (\n  <button onClick={onToggle} className="relative w-14 h-8 flex items-center">\n    <div className={\`w-full h-2 rounded-full transition-colors \${isOn ? 'bg-teal-400' : 'bg-gray-300'}\`} />\n    <div className={\`absolute left-0 w-8 h-8 rounded-full shadow-lg border bg-white transform transition-transform \${isOn ? 'translate-x-6 border-green-400' : 'translate-x-0'}\`} />\n  </button>\n);`}
              htmlCode={`<label class="switch-thin">
  <input type="checkbox">
  <span class="track-thin"></span>
  <span class="knob-thin"></span>
</label>`}
              cssCode={`.switch-thin { position: relative; display: inline-flex; align-items: center; width: 3.5rem; height: 2rem; cursor: pointer; }
.switch-thin input { opacity: 0; width: 0; height: 0; }
.track-thin { position: absolute; width: 100%; height: 0.5rem; background: #d1d5db; border-radius: 9999px; transition: 0.3s; }
.knob-thin { position: absolute; left: 0; width: 2rem; height: 2rem; background: #fff; border-radius: 50%; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border: 1px solid #f3f4f6; transition: 0.3s; }
input:checked ~ .track-thin { background: #2dd4bf; }
input:checked ~ .knob-thin { transform: translateX(1.5rem); border-color: #34d399; }`}
            />
          </div>
          <span className="text-gray-500 text-sm font-medium">Thin Track</span>
          <SwitchThin
            isOn={switchStates.thin}
            onToggle={() => handleToggle("thin")}
          />
        </div>

        <div className="flex flex-col items-center gap-4 glass-card p-6 rounded-xl relative group/switch">
          <div className="absolute -top-2 -right-2 z-40 opacity-0 group-hover/switch:opacity-100 transition-opacity scale-75">
            <CopyButton 
              jsxCode={`const SwitchSquare = ({ isOn, onToggle }) => (\n  <button onClick={onToggle} className={\`relative w-16 h-8 border-2 border-black transition-colors \${isOn ? 'bg-yellow-400' : 'bg-white'}\`}>\n    <span className={\`absolute top-1 left-1 w-5 h-5 bg-black shadow-[2px_2px_0px_rgba(0,0,0,1)] transform transition-transform \${isOn ? 'translate-x-8' : 'translate-x-0'}\`} />\n  </button>\n);`}
              htmlCode={`<label class="switch-square">
  <input type="checkbox">
  <span class="track-square"></span>
  <span class="knob-square"></span>
</label>`}
              cssCode={`.switch-square { position: relative; display: inline-block; width: 4rem; height: 2rem; cursor: pointer; }
.switch-square input { opacity: 0; width: 0; height: 0; }
.track-square { position: absolute; inset: 0; border: 2px solid #000; background: #fff; transition: 0.2s; }
.knob-square { position: absolute; top: 0.25rem; left: 0.25rem; width: 1.25rem; height: 1.25rem; background: #000; box-shadow: 2px 2px 0 #000; transition: 0.2s; }
input:checked ~ .track-square { background: #facc15; }
input:checked ~ .knob-square { transform: translateX(2rem); }`}
            />
          </div>
          <span className="text-gray-500 text-sm font-medium">Brutalist</span>
          <SwitchSquare
            isOn={switchStates.square}
            onToggle={() => handleToggle("square")}
          />
        </div>

        <div className="flex flex-col items-center gap-4 glass-card p-6 rounded-xl relative group/switch">
          <div className="absolute -top-2 -right-2 z-40 opacity-0 group-hover/switch:opacity-100 transition-opacity scale-75">
            <CopyButton 
              jsxCode={`const SwitchIcon = ({ isOn, onToggle }) => (\n  <button onClick={onToggle} className={\`relative w-16 h-8 rounded-full p-1 transition-colors duration-500 \${isOn ? 'bg-indigo-900' : 'bg-cyan-400'}\`}>\n    <div className={\`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-500 flex items-center justify-center \${isOn ? 'translate-x-8' : 'translate-x-0'}\`}>\n      {isOn ? <MoonIcon /> : <SunIcon />}\n    </div>\n  </button>\n);`}
              htmlCode={`<label class="switch-icon">
  <input type="checkbox">
  <span class="track-icon"></span>
  <span class="knob-icon">🌙</span>
</label>`}
              cssCode={`.switch-icon { position: relative; display: inline-block; width: 4rem; height: 2rem; cursor: pointer; }
.switch-icon input { opacity: 0; width: 0; height: 0; }
.track-icon { position: absolute; inset: 0; background: #22d3ee; border-radius: 9999px; transition: 0.5s; }
.knob-icon { position: absolute; top: 0.25rem; left: 0.25rem; width: 1.5rem; height: 1.5rem; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; transition: 0.5s; box-shadow: 0 1px 3px rgba(0,0,0,0.2); }
input:checked ~ .track-icon { background: #312e81; }
input:checked ~ .knob-icon { transform: translateX(2rem); }`}
            />
          </div>
          <span className="text-gray-500 text-sm font-medium">Icon Toggle</span>
          <SwitchIcon
            isOn={switchStates.icon}
            onToggle={() => handleToggle("icon")}
          />
        </div>

        <div className="flex flex-col items-center gap-4 glass-card p-6 rounded-xl relative group/switch">
          <div className="absolute -top-2 -right-2 z-40 opacity-0 group-hover/switch:opacity-100 transition-opacity scale-75">
            <CopyButton 
              jsxCode={`const SwitchSkeuo = ({ isOn, onToggle }) => (\n  <button onClick={onToggle} className={\`relative w-16 h-8 rounded-full transition-colors shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] \${isOn ? 'bg-blue-500' : 'bg-gray-200'}\`}>\n    <span className={\`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.2)] transform transition-all \${isOn ? 'translate-x-8' : 'translate-x-0'}\`} />\n  </button>\n);`}
              htmlCode={`<label class="switch-skeuo">
  <input type="checkbox">
  <span class="track-skeuo"></span>
  <span class="knob-skeuo"></span>
</label>`}
              cssCode={`.switch-skeuo { position: relative; display: inline-block; width: 4rem; height: 2rem; cursor: pointer; }
.switch-skeuo input { opacity: 0; width: 0; height: 0; }
.track-skeuo { position: absolute; inset: 0; background: #e5e7eb; border-radius: 9999px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.3); transition: 0.3s; }
.knob-skeuo { position: absolute; top: 0.25rem; left: 0.25rem; width: 1.5rem; height: 1.5rem; background: #fff; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.2); transition: 0.3s; }
input:checked ~ .track-skeuo { background: #3b82f6; }
input:checked ~ .knob-skeuo { transform: translateX(2rem); }`}
            />
          </div>
          <span className="text-[hsl(var(--foreground))] opacity-60 text-sm font-medium">
            Skeuomorphic
          </span>
          <SwitchSkeuo
            isOn={switchStates.skeuo}
            onToggle={() => handleToggle("skeuo")}
          />
        </div>

        <div className="flex flex-col items-center gap-4 glass-card p-6 rounded-xl relative group/switch">
          <div className="absolute -top-2 -right-2 z-40 opacity-0 group-hover/switch:opacity-100 transition-opacity scale-75">
            <CopyButton 
              jsxCode={`const SwitchText = ({ isOn, onToggle }) => (\n  <button onClick={onToggle} className={\`relative w-20 h-8 rounded-full overflow-hidden transition-colors \${isOn ? 'bg-teal-500' : 'bg-red-500'}\`}>\n    <span className="absolute left-2 top-1.5 text-xs font-bold text-white uppercase">ON</span>\n    <span className="absolute right-2 top-1.5 text-xs font-bold text-white uppercase">OFF</span>\n    <div className={\`absolute top-1 left-1 w-8 h-6 bg-white rounded-full shadow-md transform transition-transform z-10 \${isOn ? 'translate-x-10' : 'translate-x-0'}\`} />\n  </button>\n);`}
              htmlCode={`<label class="switch-text">
  <input type="checkbox">
  <span class="track-text"><span class="on">ON</span><span class="off">OFF</span></span>
  <span class="knob-text"></span>
</label>`}
              cssCode={`.switch-text { position: relative; display: inline-block; width: 5rem; height: 2rem; cursor: pointer; }
.switch-text input { opacity: 0; width: 0; height: 0; }
.track-text { position: absolute; inset: 0; background: #ef4444; border-radius: 9999px; transition: 0.3s; overflow: hidden; }
.on, .off { position: absolute; top: 0.375rem; font-size: 0.75rem; font-weight: 700; color: #fff; text-transform: uppercase; }
.on { left: 0.5rem; } .off { right: 0.5rem; }
.knob-text { position: absolute; top: 0.25rem; left: 0.25rem; width: 2rem; height: 1.5rem; background: #fff; border-radius: 9999px; box-shadow: 0 1px 3px rgba(0,0,0,0.2); transition: 0.3s; z-index: 1; }
input:checked ~ .track-text { background: #14b8a6; }
input:checked ~ .knob-text { transform: translateX(2.5rem); }`}
            />
          </div>
          <span className="text-gray-500 text-sm font-medium">Text Labels</span>
          <SwitchText
            isOn={switchStates.text}
            onToggle={() => handleToggle("text")}
          />
        </div>

        <div className="flex flex-col items-center gap-4 glass-card p-6 rounded-xl relative group/switch">
          <div className="absolute -top-2 -right-2 z-40 opacity-0 group-hover/switch:opacity-100 transition-opacity scale-75">
            <CopyButton 
              jsxCode={`const SwitchGradient = ({ isOn, onToggle }) => (\n  <button onClick={onToggle} className={\`relative w-14 h-8 rounded-full p-1 transition-all \${isOn ? 'bg-gradient-to-r from-blue-500 to-teal-500' : 'bg-gray-300'}\`}>\n    <span className={\`block w-6 h-6 bg-white rounded-full shadow-md transform transition-transform \${isOn ? 'translate-x-6' : 'translate-x-0'}\`} />\n  </button>\n);`}
              htmlCode={`<label class="switch-grad">
  <input type="checkbox">
  <span class="track-grad"></span>
  <span class="knob-grad"></span>
</label>`}
              cssCode={`.switch-grad { position: relative; display: inline-block; width: 3.5rem; height: 2rem; cursor: pointer; }
.switch-grad input { opacity: 0; width: 0; height: 0; }
.track-grad { position: absolute; inset: 0; background: #d1d5db; border-radius: 9999px; transition: 0.3s; }
.knob-grad { position: absolute; top: 0.25rem; left: 0.25rem; width: 1.5rem; height: 1.5rem; background: #fff; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,0.2); transition: 0.3s; }
input:checked ~ .track-grad { background: linear-gradient(90deg, #3b82f6, #14b8a6); }
input:checked ~ .knob-grad { transform: translateX(1.5rem); }`}
            />
          </div>
          <span className="text-gray-500 text-sm font-medium">Gradient</span>
          <SwitchGradient
            isOn={switchStates.gradient}
            onToggle={() => handleToggle("gradient")}
          />
        </div>

        <div className="flex flex-col items-center gap-4 glass-card p-6 rounded-xl relative group/switch">
          <div className="absolute -top-2 -right-2 z-40 opacity-0 group-hover/switch:opacity-100 transition-opacity scale-75">
            <CopyButton 
              jsxCode={`const SwitchOutline = ({ isOn, onToggle }) => (\n  <button onClick={onToggle} className={\`relative w-14 h-8 rounded-full border-2 transition-all \${isOn ? 'border-teal-600 bg-teal-600' : 'border-gray-400 bg-transparent'}\`}>\n    <span className={\`absolute top-0.5 left-0.5 w-6 h-6 rounded-full transform transition-all \${isOn ? 'bg-white translate-x-6' : 'bg-gray-400 translate-x-0'}\`} />\n  </button>\n);`}
              htmlCode={`<label class="switch-outline">
  <input type="checkbox">
  <span class="track-outline"></span>
  <span class="knob-outline"></span>
</label>`}
              cssCode={`.switch-outline { position: relative; display: inline-block; width: 3.5rem; height: 2rem; cursor: pointer; }
.switch-outline input { opacity: 0; width: 0; height: 0; }
.track-outline { position: absolute; inset: 0; border: 2px solid #9ca3af; border-radius: 9999px; background: transparent; transition: 0.3s; }
.knob-outline { position: absolute; top: 3px; left: 3px; width: 1.5rem; height: 1.5rem; background: #9ca3af; border-radius: 50%; transition: 0.3s; }
input:checked ~ .track-outline { border-color: #0d9488; background: #0d9488; }
input:checked ~ .knob-outline { background: #fff; transform: translateX(1.5rem); }`}
            />
          </div>
          <span className="text-gray-500 text-sm font-medium">Outline</span>
          <SwitchOutline
            isOn={switchStates.outline}
            onToggle={() => handleToggle("outline")}
          />
        </div>

        <div className="flex flex-col items-center gap-4 glass-card p-6 rounded-xl relative group/switch">
          <div className="absolute -top-2 -right-2 z-40 opacity-0 group-hover/switch:opacity-100 transition-opacity scale-75">
            <CopyButton 
              jsxCode={`const SwitchElastic = ({ isOn, onToggle }) => (\n  <button onClick={onToggle} className={\`relative w-16 h-8 rounded-full flex items-center transition-colors \${isOn ? 'bg-rose-500 justify-end' : 'bg-gray-200 justify-start'}\`}>\n    <span className="w-10 h-6 bg-white rounded-full shadow-sm mx-1" />\n  </button>\n);`}
              htmlCode={`<label class="switch-elastic">
  <input type="checkbox">
  <span class="track-elastic"></span>
  <span class="knob-elastic"></span>
</label>`}
              cssCode={`.switch-elastic { position: relative; display: inline-flex; align-items: center; width: 4rem; height: 2rem; cursor: pointer; }
.switch-elastic input { opacity: 0; width: 0; height: 0; }
.track-elastic { position: absolute; inset: 0; background: #e5e7eb; border-radius: 9999px; transition: 0.3s; }
.knob-elastic { position: absolute; left: 0.25rem; width: 2.5rem; height: 1.5rem; background: #fff; border-radius: 9999px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); transition: 0.3s; }
input:checked ~ .track-elastic { background: #f43f5e; }
input:checked ~ .knob-elastic { left: auto; right: 0.25rem; transform: translateX(0); }`}
            />
          </div>
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
