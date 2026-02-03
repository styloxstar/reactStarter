import React, { useState } from 'react';

// --- 1. The Modern Standard (Ring Focus) ---
export const InputStandard = () => (
  <div className="w-full max-w-sm">
    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
    <input 
      type="text" 
      placeholder="you@example.com" 
      className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 transition-all duration-300"
    />
  </div>
);

// --- 2. Floating Label (Material Style) ---
export const InputFloatingLabel = () => (
  <div className="relative w-full max-w-sm">
    <input 
      type="text" 
      id="floating_input"
      className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
      placeholder=" " 
    />
    <label 
      htmlFor="floating_input" 
      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
    >
      Floating Label
    </label>
  </div>
);

// --- 3. The Glass Input (Frosty) ---
export const InputGlass = () => (
  <div className="w-full max-w-sm">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      <input 
        type="text" 
        placeholder="Glass Effect..." 
        className="relative w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:bg-white/20 transition-all duration-300"
      />
    </div>
  </div>
);

// --- 4. The Neumorphic (Inset) ---
export const InputNeumorphic = () => (
  <div className="w-full max-w-sm">
    <input 
      type="text" 
      placeholder="Type here..." 
      className="w-full px-5 py-3 rounded-xl bg-gray-200 text-gray-700 placeholder-gray-400 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] focus:outline-none focus:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] transition-shadow duration-300"
    />
  </div>
);

// --- 5. The Underline Animated ---
export const InputUnderline = () => (
  <div className="w-full max-w-sm relative group">
    <input 
      type="text" 
      placeholder="Username" 
      className="w-full py-3 bg-transparent border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none peer"
    />
    <label 
      className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
    >
      Username
    </label>
    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 peer-focus:w-full"></div>
  </div>
);

// --- 6. The Search Pill (Icon Left) ---
export const InputSearchPill = () => (
  <div className="w-full max-w-sm relative">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </div>
    <input 
      type="search" 
      placeholder="Search..." 
      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-200 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 focus:bg-white shadow-sm hover:shadow-md transition-all duration-300 outline-none" 
    />
    <button className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-1.5 transition-colors">Go</button>
  </div>
);

// --- 7. The Brutalist (Sharp & Bold) ---
export const InputBrutalist = () => (
  <div className="w-full max-w-sm">
    <label className="block font-black text-black uppercase mb-1">Enter Code</label>
    <input 
      type="text" 
      placeholder="XYZ-123" 
      className="w-full px-4 py-3 bg-yellow-400 border-2 border-black text-black placeholder-black/60 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none transition-all duration-200"
    />
  </div>
);

// --- 8. The Gradient Border (Glowing) ---
export const InputGradientBorder = () => (
  <div className="w-full max-w-sm p-[2px] rounded-lg bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
    <input 
      type="text" 
      placeholder="Gradient Focus" 
      className="w-full px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none placeholder-gray-400"
    />
  </div>
);

// --- 9. The Minimalist Ghost (Bottom Focus) ---
export const InputGhost = () => (
  <div className="w-full max-w-sm">
    <input 
      type="text" 
      placeholder="Ghost Input" 
      className="w-full px-2 py-2 bg-transparent border-b border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 hover:border-gray-500 transition-colors duration-300"
    />
  </div>
);

// --- 10. The Validated (Success State) ---
export const InputValidated = () => (
  <div className="w-full max-w-sm">
    <label className="block text-sm font-medium text-green-700 mb-1">Username Available</label>
    <div className="relative">
      <input 
        type="text" 
        defaultValue="tailwinder"
        className="block w-full px-4 py-3 text-green-900 placeholder-green-700 border border-green-400 rounded-lg bg-green-50 focus:ring-green-500 focus:border-green-500 focus:outline-none" 
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
      </div>
    </div>
    <p className="mt-2 text-sm text-green-600">Excellent choice!</p>
  </div>
);

// --- Gallery Layout ---
const Inputs = () => {
  return (
    <div className="container box-shadow bg-slate-50 p-10 font-sans overflow-y-auto">
      <h1 className="text-3xl font-bold text-center text-slate-800 mb-12">Modern Input Fields</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto justify-items-center">

        {/* 1. Standard */}
        <div className="w-full flex justify-center flex-col items-center box-shadow p-4 rounded-lg">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">01. Standard</h3>
          <InputStandard />
        </div>

        {/* 2. Floating Label */}
        <div className="w-full flex justify-center flex-col items-center box-shadow p-4 rounded-lg">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">02. Floating Label</h3>
          <InputFloatingLabel />
        </div>

        {/* 3. Glass (Needs dark background) */}
        <div className="w-full flex justify-center flex-col items-center bg-gray-900 p-8 rounded-xl shadow-inner box-shadow">
          <h3 className="mb-4 text-xs font-semibold text-white/50 uppercase tracking-widest">03. Frosty Glass</h3>
          <InputGlass />
        </div>

        {/* 4. Neumorphic (Needs specific gray) */}
        <div className="w-full flex justify-center flex-col items-center bg-gray-200 p-8 rounded-xl box-shadow">
          <h3 className="mb-4 text-xs font-semibold text-gray-500 uppercase tracking-widest">04. Neumorphic</h3>
          <InputNeumorphic />
        </div>

        {/* 5. Underline Animated */}
        <div className="w-full flex justify-center flex-col items-center box-shadow p-4 rounded-lg">
          <h3 className="mb-8 text-xs font-semibold text-slate-400 uppercase tracking-widest">05. Animated Line</h3>
          <InputUnderline />
        </div>

        {/* 6. Search Pill */}
        <div className="w-full flex justify-center flex-col items-center box-shadow p-4 rounded-lg">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">06. Search Pill</h3>
          <InputSearchPill />
        </div>

        {/* 7. Brutalist */}
        <div className="w-full flex justify-center flex-col items-center box-shadow p-4 rounded-lg">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">07. Brutalist</h3>
          <InputBrutalist />
        </div>

        {/* 8. Gradient Border */}
        <div className="w-full flex justify-center flex-col items-center box-shadow p-4 rounded-lg">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">08. Gradient Ring</h3>
          <InputGradientBorder />
        </div>

        {/* 9. Ghost */}
        <div className="w-full flex justify-center flex-col items-center box-shadow p-4 rounded-lg">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">09. Minimalist Ghost</h3>
          <InputGhost />
        </div>

        {/* 10. Validated */}
        <div className="w-full flex justify-center flex-col items-center box-shadow p-4 rounded-lg">
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">10. Validation State</h3>
          <InputValidated />
        </div>

      </div>
    </div>
  );
};

export default Inputs;