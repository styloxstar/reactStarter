import React, { useState } from 'react';
import CopyButton from '../common/CopyButton';

// --- 1. The Modern Classic (Ring Animation) ---
const RadioClassic = () => {
  const [selected, setSelected] = useState('option1');
  return (
    <div className="flex flex-col gap-3">
      {['Option 1', 'Option 2'].map((opt, i) => (
        <label key={i} className="flex items-center cursor-pointer gap-3 group">
          <input 
            type="radio" 
            name="classic" 
            value={`option${i+1}`}
            checked={selected === `option${i+1}`}
            onChange={(e) => setSelected(e.target.value)}
            className="peer sr-only"
          />
          <div className="w-6 h-6 rounded-full border-2 border-slate-300 peer-checked:border-blue-600 peer-checked:bg-blue-600 relative transition-all duration-300">
            {/* The white dot inside */}
            <div className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transform scale-0 peer-checked:scale-100 transition-all duration-300" />
          </div>
          <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors">{opt}</span>
        </label>
      ))}
    </div>
  );
};

// --- 2. The Selection Card (Border Highlight) ---
const RadioCard = () => {
  const [selected, setSelected] = useState('starter');
  return (
    <div className="flex flex-col gap-4 w-full max-w-xs">
      {[
        { id: 'starter', title: 'Starter', price: '$0' },
        { id: 'pro', title: 'Pro', price: '$19' }
      ].map((plan) => (
        <label key={plan.id} className="relative cursor-pointer">
          <input 
            type="radio" 
            name="plan" 
            value={plan.id}
            checked={selected === plan.id}
            onChange={(e) => setSelected(e.target.value)}
            className="peer sr-only"
          />
          <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500 peer-checked:bg-blue-50 transition-all duration-200 flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-700">{plan.title}</p>
              <p className="text-sm text-gray-500">Essential features</p>
            </div>
            <span className="font-bold text-blue-600">{plan.price}</span>
          </div>
          {/* Check icon top right */}
          <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all duration-200 shadow-md">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
          </div>
        </label>
      ))}
    </div>
  );
};

// --- 3. The Neon Glow (Cyberpunk) ---
const RadioNeon = () => {
  const [selected, setSelected] = useState('neon1');
  return (
    <div className="flex flex-col gap-4">
      {['Cyber', 'Punk'].map((label, i) => (
        <label key={i} className="flex items-center cursor-pointer gap-3">
          <input 
            type="radio" 
            name="neon" 
            value={`neon${i+1}`}
            checked={selected === `neon${i+1}`}
            onChange={(e) => setSelected(e.target.value)}
            className="peer sr-only"
          />
          <div className="w-5 h-5 rounded-full border-2 border-gray-500 bg-transparent peer-checked:border-fuchsia-500 peer-checked:bg-fuchsia-500 peer-checked:shadow-[0_0_15px_rgba(217,70,239,0.8)] transition-all duration-300 relative">
          </div>
          <span className="text-gray-400 peer-checked:text-fuchsia-400 font-bold tracking-wider transition-colors">{label}</span>
        </label>
      ))}
    </div>
  );
};

// --- 4. The Glassmorphism Radio ---
const RadioGlass = () => {
  const [selected, setSelected] = useState('glass1');
  return (
    <div className="flex flex-col gap-3">
      {['Frosty', 'Clear'].map((label, i) => (
        <label key={i} className="flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-white/10 has-[:checked]:bg-white/20 has-[:checked]:shadow-lg border border-transparent has-[:checked]:border-white/30 backdrop-blur-md">
          <input 
            type="radio" 
            name="glass" 
            value={`glass${i+1}`}
            checked={selected === `glass${i+1}`}
            onChange={(e) => setSelected(e.target.value)}
            className="peer sr-only"
          />
          <div className="w-5 h-5 rounded-full border border-white/50 bg-white/10 peer-checked:bg-white peer-checked:border-white transition-all mr-3 relative shadow-inner"></div>
          <span className="text-white font-medium">{label}</span>
        </label>
      ))}
    </div>
  );
};

// --- 5. The Tick Box (Circle Checkmark) ---
const RadioTick = () => {
  const [selected, setSelected] = useState('tick1');
  return (
    <div className="flex gap-4">
      {['Yes', 'No'].map((label, i) => (
        <label key={i} className="cursor-pointer group">
          <input 
            type="radio" 
            name="tick" 
            value={`tick${i+1}`}
            checked={selected === `tick${i+1}`}
            onChange={(e) => setSelected(e.target.value)}
            className="peer sr-only"
          />
          <div className="px-6 py-2 rounded-full border-2 border-gray-200 text-gray-400 flex items-center gap-2 transition-all duration-300 peer-checked:border-emerald-500 peer-checked:text-emerald-600 peer-checked:bg-emerald-50 hover:border-emerald-200">
            <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center opacity-0 -ml-4 peer-checked:opacity-100 peer-checked:ml-0 transition-all duration-300">
               <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
            </div>
            <span className="font-semibold">{label}</span>
          </div>
        </label>
      ))}
    </div>
  );
};

// --- 6. The Neumorphic (Soft UI) ---
const RadioNeumorphic = () => {
  const [selected, setSelected] = useState('soft1');
  return (
    <div className="flex gap-6">
      {['AM', 'PM'].map((label, i) => (
        <label key={i} className="cursor-pointer">
          <input 
            type="radio" 
            name="neu" 
            value={`soft${i+1}`}
            checked={selected === `soft${i+1}`}
            onChange={(e) => setSelected(e.target.value)}
            className="peer sr-only"
          />
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] peer-checked:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] peer-checked:text-blue-500 transition-all duration-300">
            {label}
          </div>
        </label>
      ))}
    </div>
  );
};

// --- 7. The Gradient Ring ---
const RadioGradient = () => {
  const [selected, setSelected] = useState('grad1');
  return (
    <div className="flex flex-col gap-3">
      {['Personal', 'Business'].map((label, i) => (
        <label key={i} className="flex items-center cursor-pointer gap-3">
          <input 
            type="radio" 
            name="grad" 
            value={`grad${i+1}`}
            checked={selected === `grad${i+1}`}
            onChange={(e) => setSelected(e.target.value)}
            className="peer sr-only"
          />
          {/* Gradient Wrapper */}
          <div className="w-6 h-6 rounded-full bg-gray-200 peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-orange-500 p-[2px] transition-all duration-300">
             {/* Inner white circle */}
             <div className="w-full h-full bg-white rounded-full">
                <div className="w-full h-full rounded-full bg-transparent peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-orange-500 scale-0 peer-checked:scale-75 transition-transform duration-300"></div>
             </div>
          </div>
          <span className="text-gray-700 font-medium">{label}</span>
        </label>
      ))}
    </div>
  );
};

// --- 8. The Brutalist (Retro) ---
const RadioBrutalist = () => {
  const [selected, setSelected] = useState('brut1');
  return (
    <div className="flex flex-col gap-3">
      {['Daily', 'Weekly'].map((label, i) => (
        <label key={i} className="cursor-pointer relative">
          <input 
            type="radio" 
            name="brut" 
            value={`brut${i+1}`}
            checked={selected === `brut${i+1}`}
            onChange={(e) => setSelected(e.target.value)}
            className="peer sr-only"
          />
          <div className="px-6 py-2 bg-white border-2 border-black text-black font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] peer-checked:bg-yellow-400 peer-checked:shadow-none peer-checked:translate-x-[4px] peer-checked:translate-y-[4px] transition-all duration-200">
            {label}
          </div>
        </label>
      ))}
    </div>
  );
};

// --- 9. The Color Swatch ---
const RadioColor = () => {
  const [selected, setSelected] = useState('red');
  const colors = [
    { id: 'red', bg: 'bg-red-500', ring: 'peer-checked:ring-red-500' },
    { id: 'blue', bg: 'bg-blue-500', ring: 'peer-checked:ring-blue-500' },
    { id: 'green', bg: 'bg-green-500', ring: 'peer-checked:ring-green-500' },
  ];

  return (
    <div className="flex gap-3">
      {colors.map((c) => (
        <label key={c.id} className="cursor-pointer">
          <input 
            type="radio" 
            name="color" 
            value={c.id}
            checked={selected === c.id}
            onChange={(e) => setSelected(e.target.value)}
            className="peer sr-only"
          />
          <div className={`w-8 h-8 rounded-full ${c.bg} ring-2 ring-transparent ring-offset-2 ${c.ring} transition-all duration-200 hover:scale-110`}>
            {/* Checkmark for accessibility/visual confirmation */}
             <svg className="w-full h-full p-1.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
          </div>
        </label>
      ))}
    </div>
  );
};

// --- 10. The Segmented Control (Pill Toggle) ---
const RadioSegmented = () => {
  const [selected, setSelected] = useState('monthly');
  return (
    <div className="inline-flex bg-gray-100 p-1 rounded-full relative">
      <div 
        className={`absolute top-1 bottom-1 w-1/2 bg-white rounded-full shadow-sm transition-all duration-300 ease-out ${selected === 'monthly' ? 'left-1' : 'left-[48%]'}`}
      ></div>
      
      {['Monthly', 'Yearly'].map((label, i) => (
        <label key={i} className="relative z-10 w-24 text-center cursor-pointer">
          <input 
            type="radio" 
            name="segment" 
            value={label.toLowerCase()}
            checked={selected === label.toLowerCase()}
            onChange={(e) => setSelected(e.target.value)}
            className="sr-only"
          />
          <span className={`block py-2 text-sm font-semibold transition-colors duration-300 ${selected === label.toLowerCase() ? 'text-gray-900' : 'text-gray-500'}`}>
            {label}
          </span>
        </label>
      ))}
    </div>
  );
};


// --- Gallery Layout ---
const RadioButtons = () => {
  return (
    <div className="container box-shadow bg-slate-50 p-10 font-sans">
      <h1 className="text-3xl font-bold text-center text-slate-800 mb-12">Modern Radio Buttons</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 max-w-7xl mx-auto justify-items-center items-start">

        {/* 1. Classic */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/radio">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/radio:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const RadioClassic = () => {\n  const [selected, setSelected] = useState('option1');\n  return (\n    <div className="flex flex-col gap-3">\n      {['Option 1', 'Option 2'].map((opt, i) => (\n        <label key={i} className="flex items-center cursor-pointer gap-3 group">\n          <input type="radio" name="classic" value={\`option\${i+1}\`} checked={selected === \`option\${i+1}\`} onChange={e => setSelected(e.target.value)} className="peer sr-only" />\n          <div className="w-6 h-6 rounded-full border-2 border-slate-300 peer-checked:border-blue-600 peer-checked:bg-blue-600 transition-all" />\n          <span className="text-slate-700 font-medium">{opt}</span>\n        </label>\n      ))}\n    </div>\n  );\n};`}
              htmlCode={`<div class="radio-group">
  <label class="radio-label"><input type="radio" name="classic" checked><span class="radio-dot"></span> Option 1</label>
  <label class="radio-label"><input type="radio" name="classic"><span class="radio-dot"></span> Option 2</label>
</div>`}
              cssCode={`.radio-group { display: flex; flex-direction: column; gap: 0.75rem; }
.radio-label { display: flex; align-items: center; gap: 0.75rem; cursor: pointer; font-weight: 500; color: #334155; }
.radio-label input { display: none; }
.radio-dot { width: 1.5rem; height: 1.5rem; border-radius: 50%; border: 2px solid #cbd5e1; transition: 0.3s; }
.radio-label input:checked + .radio-dot { border-color: #2563eb; background: #2563eb; box-shadow: inset 0 0 0 3px #fff; }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">01. Ring Animation</h3>
          <RadioClassic />
        </div>

        {/* 2. Card Selection */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/radio">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/radio:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const RadioCard = () => {\n  const [selected, setSelected] = useState('starter');\n  return (\n    <div className="flex flex-col gap-4 w-full max-w-xs">\n      {[{ id: 'starter', title: 'Starter', price: '$0' }, { id: 'pro', title: 'Pro', price: '$19' }].map(plan => (\n        <label key={plan.id} className="relative cursor-pointer">\n          <input type="radio" name="plan" value={plan.id} checked={selected === plan.id} onChange={e => setSelected(e.target.value)} className="peer sr-only" />\n          <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm peer-checked:border-blue-500 peer-checked:bg-blue-50 flex justify-between items-center">\n            <div><p className="font-bold">{plan.title}</p><p className="text-sm text-gray-500">Essential features</p></div>\n            <span className="font-bold text-blue-600">{plan.price}</span>\n          </div>\n        </label>\n      ))}\n    </div>\n  );\n};`}
              htmlCode={`<div class="radio-cards">
  <label class="card-option selected"><input type="radio" name="plan" checked><div><strong>Starter</strong><br><small>Essential features</small></div><span>$0</span></label>
  <label class="card-option"><input type="radio" name="plan"><div><strong>Pro</strong><br><small>Essential features</small></div><span>$19</span></label>
</div>`}
              cssCode={`.radio-cards { display: flex; flex-direction: column; gap: 1rem; max-width: 20rem; }
.card-option { display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-radius: 0.75rem; border: 1px solid #e5e7eb; background: #fff; cursor: pointer; transition: 0.2s; }
.card-option input { display: none; }
.card-option:hover { box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.card-option.selected, .card-option input:checked ~ * { border-color: #3b82f6; background: #eff6ff; }
.card-option span { font-weight: 700; color: #2563eb; }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">02. Card Select</h3>
          <RadioCard />
        </div>

        {/* 3. Neon (Dark Bg) */}
        <div className="w-full flex flex-col items-center bg-gray-900 p-8 rounded-xl box-shadow relative group/radio">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/radio:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const RadioNeon = () => {\n  const [selected, setSelected] = useState('neon1');\n  return (\n    <div className="flex flex-col gap-4">\n      {['Cyber', 'Punk'].map((label, i) => (\n        <label key={i} className="flex items-center cursor-pointer gap-3">\n          <input type="radio" name="neon" value={\`neon\${i+1}\`} checked={selected === \`neon\${i+1}\`} onChange={e => setSelected(e.target.value)} className="peer sr-only" />\n          <div className="w-5 h-5 rounded-full border-2 border-gray-500 peer-checked:border-fuchsia-500 peer-checked:bg-fuchsia-500 peer-checked:shadow-[0_0_15px_rgba(217,70,239,0.8)] transition-all" />\n          <span className="text-gray-400 peer-checked:text-fuchsia-400 font-bold tracking-wider">{label}</span>\n        </label>\n      ))}\n    </div>\n  );\n};`}
              htmlCode={`<div class="neon-radios">
  <label><input type="radio" name="neon" checked><span class="neon-dot"></span> Cyber</label>
  <label><input type="radio" name="neon"><span class="neon-dot"></span> Punk</label>
</div>`}
              cssCode={`.neon-radios { display: flex; flex-direction: column; gap: 1rem; }
.neon-radios label { display: flex; align-items: center; gap: 0.75rem; cursor: pointer; color: #9ca3af; font-weight: 700; letter-spacing: 0.05em; }
.neon-radios input { display: none; }
.neon-dot { width: 1.25rem; height: 1.25rem; border-radius: 50%; border: 2px solid #6b7280; transition: 0.3s; }
.neon-radios input:checked + .neon-dot { border-color: #d946ef; background: #d946ef; box-shadow: 0 0 15px rgba(217,70,239,0.8); }
.neon-radios input:checked ~ span:last-child { color: #e879f9; }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-gray-500 uppercase tracking-widest">03. Neon Glow</h3>
          <RadioNeon />
        </div>

        {/* 4. Glass (Gradient Bg) */}
        <div className="w-full flex flex-col items-center bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-xl box-shadow relative group/radio">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/radio:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const RadioGlass = () => {\n  const [selected, setSelected] = useState('glass1');\n  return (\n    <div className="flex flex-col gap-3">\n      {['Frosty', 'Clear'].map((label, i) => (\n        <label key={i} className="flex items-center p-3 rounded-lg cursor-pointer backdrop-blur-md border border-transparent has-[:checked]:bg-white/20 has-[:checked]:border-white/30">\n          <input type="radio" name="glass" value={\`glass\${i+1}\`} checked={selected === \`glass\${i+1}\`} onChange={e => setSelected(e.target.value)} className="peer sr-only" />\n          <div className="w-5 h-5 rounded-full border border-white/50 bg-white/10 peer-checked:bg-white mr-3" />\n          <span className="text-white font-medium">{label}</span>\n        </label>\n      ))}\n    </div>\n  );\n};`}
              htmlCode={`<div class="glass-radios">
  <label class="glass-label"><input type="radio" name="glass" checked><span class="glass-dot"></span> Frosty</label>
  <label class="glass-label"><input type="radio" name="glass"><span class="glass-dot"></span> Clear</label>
</div>`}
              cssCode={`.glass-radios { display: flex; flex-direction: column; gap: 0.75rem; }
.glass-label { display: flex; align-items: center; padding: 0.75rem; border-radius: 0.5rem; cursor: pointer; color: #fff; font-weight: 500; backdrop-filter: blur(12px); border: 1px solid transparent; transition: 0.3s; }
.glass-label:hover { background: rgba(255,255,255,0.1); }
.glass-label input { display: none; }
.glass-dot { width: 1.25rem; height: 1.25rem; border-radius: 50%; border: 1px solid rgba(255,255,255,0.5); background: rgba(255,255,255,0.1); margin-right: 0.75rem; transition: 0.3s; }
.glass-label input:checked + .glass-dot { background: #fff; border-color: #fff; }
.glass-label:has(input:checked) { background: rgba(255,255,255,0.2); border-color: rgba(255,255,255,0.3); box-shadow: 0 10px 15px rgba(0,0,0,0.1); }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-white/50 uppercase tracking-widest">04. Glassmorphism</h3>
          <RadioGlass />
        </div>

        {/* 5. Tick Box */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/radio">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/radio:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const RadioTick = () => {\n  const [selected, setSelected] = useState('tick1');\n  return (\n    <div className="flex gap-4">\n      {['Yes', 'No'].map((label, i) => (\n        <label key={i} className="cursor-pointer">\n          <input type="radio" name="tick" value={\`tick\${i+1}\`} checked={selected === \`tick\${i+1}\`} onChange={e => setSelected(e.target.value)} className="peer sr-only" />\n          <div className="px-6 py-2 rounded-full border-2 border-gray-200 peer-checked:border-emerald-500 peer-checked:text-emerald-600 peer-checked:bg-emerald-50 flex items-center gap-2 transition-all">\n            <span className="font-semibold">{label}</span>\n          </div>\n        </label>\n      ))}\n    </div>\n  );\n};`}
              htmlCode={`<div class="tick-radios">
  <label class="tick-label selected"><input type="radio" name="tick" checked><span>✓</span> Yes</label>
  <label class="tick-label"><input type="radio" name="tick"> No</label>
</div>`}
              cssCode={`.tick-radios { display: flex; gap: 1rem; }
.tick-label { cursor: pointer; padding: 0.5rem 1.5rem; border-radius: 9999px; border: 2px solid #e5e7eb; color: #9ca3af; font-weight: 600; display: flex; align-items: center; gap: 0.5rem; transition: 0.3s; }
.tick-label input { display: none; }
.tick-label.selected, .tick-label:has(input:checked) { border-color: #10b981; color: #059669; background: #ecfdf5; }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">05. Pill Tick</h3>
          <RadioTick />
        </div>

        {/* 6. Neumorphic (Gray Bg) */}
        <div className="w-full flex flex-col items-center bg-gray-200 p-8 rounded-xl box-shadow relative group/radio">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/radio:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const RadioNeumorphic = () => {\n  const [selected, setSelected] = useState('soft1');\n  return (\n    <div className="flex gap-6">\n      {['AM', 'PM'].map((label, i) => (\n        <label key={i} className="cursor-pointer">\n          <input type="radio" name="neu" value={\`soft\${i+1}\`} checked={selected === \`soft\${i+1}\`} onChange={e => setSelected(e.target.value)} className="peer sr-only" />\n          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] peer-checked:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] peer-checked:text-blue-500">{label}</div>\n        </label>\n      ))}\n    </div>\n  );\n};`}
              htmlCode={`<div class="neu-radios">
  <label class="neu-radio selected"><input type="radio" name="neu" checked>AM</label>
  <label class="neu-radio"><input type="radio" name="neu">PM</label>
</div>`}
              cssCode={`.neu-radios { display: flex; gap: 1.5rem; }
.neu-radio { width: 3rem; height: 3rem; border-radius: 50%; background: #e5e7eb; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #6b7280; cursor: pointer; box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff; transition: 0.3s; }
.neu-radio input { display: none; }
.neu-radio.selected, .neu-radio:has(input:checked) { box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff; color: #3b82f6; }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-gray-500 uppercase tracking-widest">06. Neumorphism</h3>
          <RadioNeumorphic />
        </div>

        {/* 7. Gradient Ring */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/radio">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/radio:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const RadioGradient = () => {\n  const [selected, setSelected] = useState('grad1');\n  return (\n    <div className="flex flex-col gap-3">\n      {['Personal', 'Business'].map((label, i) => (\n        <label key={i} className="flex items-center cursor-pointer gap-3">\n          <input type="radio" name="grad" value={\`grad\${i+1}\`} checked={selected === \`grad\${i+1}\`} onChange={e => setSelected(e.target.value)} className="peer sr-only" />\n          <div className="w-6 h-6 rounded-full bg-gray-200 peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-orange-500 p-[2px] transition-all">\n            <div className="w-full h-full bg-white rounded-full" />\n          </div>\n          <span className="text-gray-700 font-medium">{label}</span>\n        </label>\n      ))}\n    </div>\n  );\n};`}
              htmlCode={`<div class="grad-radios">
  <label><input type="radio" name="grad" checked><span class="grad-dot"></span> Personal</label>
  <label><input type="radio" name="grad"><span class="grad-dot"></span> Business</label>
</div>`}
              cssCode={`.grad-radios { display: flex; flex-direction: column; gap: 0.75rem; }
.grad-radios label { display: flex; align-items: center; gap: 0.75rem; cursor: pointer; font-weight: 500; color: #374151; }
.grad-radios input { display: none; }
.grad-dot { width: 1.5rem; height: 1.5rem; border-radius: 50%; background: #e5e7eb; padding: 2px; transition: 0.3s; }
.grad-dot::after { content: ''; display: block; width: 100%; height: 100%; background: #fff; border-radius: 50%; }
.grad-radios input:checked + .grad-dot { background: linear-gradient(90deg, #ec4899, #f97316); }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">07. Gradient Ring</h3>
          <RadioGradient />
        </div>

        {/* 8. Brutalist */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/radio">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/radio:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const RadioBrutalist = () => {\n  const [selected, setSelected] = useState('brut1');\n  return (\n    <div className="flex flex-col gap-3">\n      {['Daily', 'Weekly'].map((label, i) => (\n        <label key={i} className="cursor-pointer">\n          <input type="radio" name="brut" value={\`brut\${i+1}\`} checked={selected === \`brut\${i+1}\`} onChange={e => setSelected(e.target.value)} className="peer sr-only" />\n          <div className="px-6 py-2 bg-white border-2 border-black font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] peer-checked:bg-yellow-400 peer-checked:shadow-none peer-checked:translate-x-1 peer-checked:translate-y-1 transition-all">{label}</div>\n        </label>\n      ))}\n    </div>\n  );\n};`}
              htmlCode={`<div class="brutal-radios">
  <label class="brutal-option selected"><input type="radio" name="brut" checked>DAILY</label>
  <label class="brutal-option"><input type="radio" name="brut">WEEKLY</label>
</div>`}
              cssCode={`.brutal-radios { display: flex; flex-direction: column; gap: 0.75rem; }
.brutal-option { padding: 0.5rem 1.5rem; background: #fff; border: 2px solid #000; font-weight: 900; text-transform: uppercase; cursor: pointer; box-shadow: 4px 4px 0 #000; transition: 0.2s; }
.brutal-option input { display: none; }
.brutal-option.selected, .brutal-option:has(input:checked) { background: #facc15; box-shadow: none; transform: translate(4px, 4px); }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">08. Brutalist</h3>
          <RadioBrutalist />
        </div>

        {/* 9. Color Swatch */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/radio">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/radio:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const RadioColor = () => {\n  const [selected, setSelected] = useState('red');\n  const colors = [\n    { id: 'red', bg: 'bg-red-500', ring: 'peer-checked:ring-red-500' },\n    { id: 'blue', bg: 'bg-blue-500', ring: 'peer-checked:ring-blue-500' },\n    { id: 'green', bg: 'bg-green-500', ring: 'peer-checked:ring-green-500' },\n  ];\n  return (\n    <div className="flex gap-3">\n      {colors.map(c => (\n        <label key={c.id} className="cursor-pointer">\n          <input type="radio" name="color" value={c.id} checked={selected === c.id} onChange={e => setSelected(e.target.value)} className="peer sr-only" />\n          <div className={\`w-8 h-8 rounded-full \${c.bg} ring-2 ring-transparent ring-offset-2 \${c.ring} transition-all hover:scale-110\`} />\n        </label>\n      ))}\n    </div>\n  );\n};`}
              htmlCode={`<div class="color-swatches">
  <label><input type="radio" name="color" checked><span class="swatch red"></span></label>
  <label><input type="radio" name="color"><span class="swatch blue"></span></label>
  <label><input type="radio" name="color"><span class="swatch green"></span></label>
</div>`}
              cssCode={`.color-swatches { display: flex; gap: 0.75rem; }
.color-swatches label { cursor: pointer; }
.color-swatches input { display: none; }
.swatch { width: 2rem; height: 2rem; border-radius: 50%; display: block; transition: 0.2s; outline: 2px solid transparent; outline-offset: 2px; }
.swatch.red { background: #ef4444; } .swatch.blue { background: #3b82f6; } .swatch.green { background: #22c55e; }
.color-swatches input:checked + .swatch.red { outline-color: #ef4444; }
.color-swatches input:checked + .swatch.blue { outline-color: #3b82f6; }
.color-swatches input:checked + .swatch.green { outline-color: #22c55e; }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">09. Color Swatch</h3>
          <RadioColor />
        </div>

        {/* 10. Segmented */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/radio">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/radio:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const RadioSegmented = () => {\n  const [selected, setSelected] = useState('monthly');\n  return (\n    <div className="inline-flex bg-gray-100 p-1 rounded-full relative">\n      <div className={\`absolute top-1 bottom-1 w-1/2 bg-white rounded-full shadow-sm transition-all \${selected === 'monthly' ? 'left-1' : 'left-[48%]'}\`} />\n      {['Monthly', 'Yearly'].map((label, i) => (\n        <label key={i} className="relative z-10 w-24 text-center cursor-pointer">\n          <input type="radio" name="segment" value={label.toLowerCase()} checked={selected === label.toLowerCase()} onChange={e => setSelected(e.target.value)} className="sr-only" />\n          <span className={\`block py-2 text-sm font-semibold \${selected === label.toLowerCase() ? 'text-gray-900' : 'text-gray-500'}\`}>{label}</span>\n        </label>\n      ))}\n    </div>\n  );\n};`}
              htmlCode={`<div class="segmented">
  <label class="seg-option active"><input type="radio" name="seg" checked>Monthly</label>
  <label class="seg-option"><input type="radio" name="seg">Yearly</label>
  <div class="seg-slider"></div>
</div>`}
              cssCode={`.segmented { display: inline-flex; background: #f3f4f6; padding: 0.25rem; border-radius: 9999px; position: relative; }
.seg-option { width: 6rem; text-align: center; padding: 0.5rem 0; font-size: 0.875rem; font-weight: 600; color: #6b7280; cursor: pointer; position: relative; z-index: 1; transition: color 0.3s; }
.seg-option input { display: none; }
.seg-option.active, .seg-option:has(input:checked) { color: #111827; }
.seg-slider { position: absolute; top: 0.25rem; bottom: 0.25rem; width: 50%; background: #fff; border-radius: 9999px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); transition: left 0.3s; left: 0.25rem; }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">10. Segmented</h3>
          <RadioSegmented />
        </div>

      </div>
    </div>
  );
};

export default RadioButtons;