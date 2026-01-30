import React, { useState } from 'react';

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
        <div className="w-full flex flex-col items-center">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">01. Ring Animation</h3>
          <RadioClassic />
        </div>

        {/* 2. Card Selection */}
        <div className="w-full flex flex-col items-center">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">02. Card Select</h3>
          <RadioCard />
        </div>

        {/* 3. Neon (Dark Bg) */}
        <div className="w-full flex flex-col items-center bg-gray-900 p-8 rounded-xl shadow-lg">
          <h3 className="mb-4 text-xs font-semibold text-gray-500 uppercase tracking-widest">03. Neon Glow</h3>
          <RadioNeon />
        </div>

        {/* 4. Glass (Gradient Bg) */}
        <div className="w-full flex flex-col items-center bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-xl shadow-lg">
          <h3 className="mb-4 text-xs font-semibold text-white/50 uppercase tracking-widest">04. Glassmorphism</h3>
          <RadioGlass />
        </div>

        {/* 5. Tick Box */}
        <div className="w-full flex flex-col items-center">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">05. Pill Tick</h3>
          <RadioTick />
        </div>

        {/* 6. Neumorphic (Gray Bg) */}
        <div className="w-full flex flex-col items-center bg-gray-200 p-8 rounded-xl">
          <h3 className="mb-4 text-xs font-semibold text-gray-500 uppercase tracking-widest">06. Neumorphism</h3>
          <RadioNeumorphic />
        </div>

        {/* 7. Gradient Ring */}
        <div className="w-full flex flex-col items-center">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">07. Gradient Ring</h3>
          <RadioGradient />
        </div>

        {/* 8. Brutalist */}
        <div className="w-full flex flex-col items-center">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">08. Brutalist</h3>
          <RadioBrutalist />
        </div>

        {/* 9. Color Swatch */}
        <div className="w-full flex flex-col items-center">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">09. Color Swatch</h3>
          <RadioColor />
        </div>

        {/* 10. Segmented */}
        <div className="w-full flex flex-col items-center">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">10. Segmented</h3>
          <RadioSegmented />
        </div>

      </div>
    </div>
  );
};

export default RadioButtons;