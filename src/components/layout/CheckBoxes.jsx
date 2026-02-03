import React, { useState } from 'react';

// --- 1. The Modern Standard (Soft Blue) ---
export const CheckboxStandard = () => (
  <label className="flex items-center space-x-3 cursor-pointer group">
    <input type="checkbox" className="peer sr-only" />
    <div className="w-6 h-6 bg-gray-100 border-2 border-gray-300 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-blue-400 transition-all duration-200 flex items-center justify-center">
      <svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
    </div>
    <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">Remember me</span>
  </label>
);

// --- 2. The Circular (Success) ---
export const CheckboxCircle = () => (
  <label className="flex items-center space-x-3 cursor-pointer">
    <input type="checkbox" className="peer sr-only" defaultChecked />
    <div className="w-6 h-6 border-2 border-gray-300 rounded-full peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-all duration-300 flex items-center justify-center">
      <svg className="w-3.5 h-3.5 text-white scale-0 peer-checked:scale-100 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
    </div>
    <span className="text-gray-600 peer-checked:text-emerald-600 font-medium transition-colors">Task Completed</span>
  </label>
);

// --- 3. The Neon Glow (Cyberpunk) ---
export const CheckboxNeon = () => (
  <label className="flex items-center space-x-3 cursor-pointer">
    <input type="checkbox" className="peer sr-only" />
    <div className="w-6 h-6 border-2 border-gray-600 bg-gray-900 rounded peer-checked:bg-fuchsia-600 peer-checked:border-fuchsia-500 peer-checked:shadow-[0_0_15px_rgba(192,38,211,0.7)] transition-all duration-300 flex items-center justify-center">
      <svg className="w-4 h-4 text-white drop-shadow-md opacity-0 peer-checked:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
    </div>
    <span className="text-gray-400 peer-checked:text-fuchsia-400 peer-checked:drop-shadow-[0_0_8px_rgba(192,38,211,0.5)] font-bold tracking-wider uppercase">Activate</span>
  </label>
);

// --- 4. The Gradient Check ---
export const CheckboxGradient = () => (
  <label className="flex items-center space-x-3 cursor-pointer">
    <input type="checkbox" className="peer sr-only" />
    <div className="w-6 h-6 border-2 border-gray-300 rounded-md peer-checked:border-transparent peer-checked:bg-gradient-to-tr peer-checked:from-orange-500 peer-checked:to-pink-600 transition-all duration-300 flex items-center justify-center shadow-sm">
      <svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 -rotate-90 peer-checked:rotate-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
    </div>
    <span className="text-gray-700 font-medium">Gradient Fill</span>
  </label>
);

// --- 5. The Brutalist (Hard Shadow) ---
export const CheckboxBrutalist = () => (
  <label className="flex items-center space-x-3 cursor-pointer group">
    <input type="checkbox" className="peer sr-only" />
    <div className="w-7 h-7 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] peer-checked:bg-yellow-400 peer-checked:shadow-none peer-checked:translate-x-[3px] peer-checked:translate-y-[3px] transition-all duration-200 flex items-center justify-center">
      <svg className="w-5 h-5 text-black opacity-0 peer-checked:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
    </div>
    <span className="font-black text-black uppercase tracking-wide group-hover:underline">Agree</span>
  </label>
);

// --- 6. The Glassmorphism Checkbox ---
export const CheckboxGlass = () => (
  <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-xl hover:bg-white/10 transition-colors">
    <input type="checkbox" className="peer sr-only" />
    <div className="w-6 h-6 bg-white/10 backdrop-blur-sm border border-white/40 rounded-lg peer-checked:bg-white/90 peer-checked:border-white transition-all duration-300 flex items-center justify-center shadow-lg">
      <svg className="w-4 h-4 text-purple-600 opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
    </div>
    <span className="text-white font-semibold tracking-wide drop-shadow-md">Glass Effect</span>
  </label>
);

// --- 7. The Neumorphic (Soft UI) ---
export const CheckboxNeumorphic = () => (
  <label className="flex items-center space-x-4 cursor-pointer">
    <input type="checkbox" className="peer sr-only" />
    <div className="w-8 h-8 bg-gray-200 rounded-lg shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] peer-checked:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] flex items-center justify-center transition-all duration-300">
      <svg className="w-5 h-5 text-blue-500 opacity-0 peer-checked:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
    </div>
    <span className="text-gray-500 font-bold peer-checked:text-blue-500 transition-colors">Soft UI</span>
  </label>
);

// --- 8. The Strike-Through (Task List) ---
export const CheckboxStrikethrough = () => (
  <label className="flex items-center space-x-3 cursor-pointer group select-none">
    <input type="checkbox" className="peer sr-only" />
    <div className="w-5 h-5 border-2 border-slate-400 rounded peer-checked:bg-slate-500 peer-checked:border-slate-500 transition-all duration-200 flex items-center justify-center">
      <svg className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
    </div>
    <span className="text-slate-800 font-medium transition-all duration-200 peer-checked:text-slate-400 peer-checked:line-through decoration-2 decoration-slate-400">
      Buy Groceries
    </span>
  </label>
);

// --- 9. The Card Tile (Selectable Area) ---
export const CheckboxCard = () => (
  <label className="relative flex flex-col p-4 bg-white border border-gray-200 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-all has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50 has-[:checked]:ring-1 has-[:checked]:ring-indigo-600 w-full max-w-[140px]">
    <input type="checkbox" className="peer sr-only" />
    
    <div className="absolute top-3 right-3 w-5 h-5 rounded-full border border-gray-300 bg-white peer-checked:bg-indigo-600 peer-checked:border-indigo-600 flex items-center justify-center transition-colors">
       <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
    </div>

    <div className="text-3xl mb-2">🚀</div>
    <span className="font-bold text-gray-800">Boost</span>
    <span className="text-xs text-gray-500">+10% speed</span>
  </label>
);

// --- 10. The Heart/Like Toggle ---
export const CheckboxHeart = () => (
  <label className="cursor-pointer">
    <input type="checkbox" className="peer sr-only" />
    <div className="group relative">
      {/* Default State (Outline) */}
      <svg className="w-8 h-8 text-gray-400 group-hover:text-red-400 transition-colors peer-checked:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      
      {/* Checked State (Filled & Animated) */}
      <svg className="w-8 h-8 text-red-500 hidden peer-checked:block peer-checked:animate-[bounce_0.5s_ease-in-out]" fill="currentColor" viewBox="0 0 24 24"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
    </div>
  </label>
);

// --- Gallery Layout ---
const Checkboxes = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-50 p-10 font-sans">
      <h1 className="text-3xl font-bold text-center text-slate-800 mb-12">Modern Checkboxes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto justify-items-center items-center">

        {/* 1. Standard */}
        <div className="flex flex-col items-center gap-4 box-shadow p-4 rounded-lg">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">01. Standard</h3>
          <CheckboxStandard />
        </div>

        {/* 2. Circle */}
        <div className="flex flex-col items-center gap-4 box-shadow p-4 rounded-lg">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">02. Rounded</h3>
          <CheckboxCircle />
        </div>

        {/* 3. Neon (Dark Context) */}
        <div className="flex flex-col items-center gap-4 bg-gray-900 p-6 rounded-xl shadow-lg w-full max-w-[200px]">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">03. Neon</h3>
          <CheckboxNeon />
        </div>

        {/* 4. Gradient */}
        <div className="flex flex-col items-center gap-4 box-shadow p-4 rounded-lg">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">04. Gradient</h3>
          <CheckboxGradient />
        </div>

        {/* 5. Brutalist */}
        <div className="flex flex-col items-center gap-4 box-shadow p-4 rounded-lg">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">05. Brutalist</h3>
          <CheckboxBrutalist />
        </div>

        {/* 6. Glass (Gradient Context) */}
        <div className="flex flex-col items-center gap-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 p-6 rounded-xl shadow-lg w-full max-w-[200px]">
          <h3 className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-2">06. Glass</h3>
          <CheckboxGlass />
        </div>

        {/* 7. Neumorphic */}
        <div className="flex flex-col items-center gap-4 bg-gray-200 p-6 rounded-xl w-full max-w-[200px]">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">07. Neumorphic</h3>
          <CheckboxNeumorphic />
        </div>

        {/* 8. Strike-Through */}
        <div className="flex flex-col items-center gap-4 box-shadow p-4 rounded-lg">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">08. Task List</h3>
          <CheckboxStrikethrough />
        </div>

        {/* 9. Card Selection */}
        <div className="flex flex-col items-center gap-4 box-shadow p-4 rounded-lg">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">09. Card Select</h3>
          <CheckboxCard />
        </div>

        {/* 10. Heart Toggle */}
        <div className="flex flex-col items-center gap-4 box-shadow p-4 rounded-lg">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">10. Like Toggle</h3>
          <CheckboxHeart />
        </div>

      </div>
    </div>
  );
};

export default Checkboxes;