import React, { useState } from 'react';
import CopyButton from '../common/CopyButton';

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
        <div className="w-full flex flex-col items-center box-shadow p-6 rounded-xl relative group/input bg-white">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/input:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const InputStandard = () => (\n  <div className="w-full max-w-sm">\n    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>\n    <input \n      type="text" \n      placeholder="you@example.com" \n      className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all duration-300" \n    />\n  </div>\n);`}
              htmlCode={`<div class="input-group">\n  <label class="input-label">Email Address</label>\n  <input type="text" class="input-field" placeholder="you@example.com">\n</div>`}
              cssCode={`.input-group { width: 100%; max-width: 320px; }\n.input-label { display: block; font-size: 0.875rem; color: #334155; margin-bottom: 0.25rem; font-weight: 500; }\n.input-field { width: 100%; padding: 0.5rem 1rem; border: 1px solid #cbd5e1; border-radius: 0.5rem; font-size: 0.875rem; transition: all 0.3s; box-sizing: border-box; }\n.input-field:focus { border-color: #0ea5e9; box-shadow: 0 0 0 1px #0ea5e9; outline: none; }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">01. Standard</h3>
          <InputStandard />
        </div>

        {/* 2. Floating Label */}
        <div className="w-full flex flex-col items-center box-shadow p-6 rounded-xl relative group/input bg-white">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/input:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const InputFloatingLabel = () => (\n  <div className="relative w-full max-w-sm">\n    <input \n      type="text" \n      id="floating_input" \n      className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" \n      placeholder=" " \n    />\n    <label \n      htmlFor="floating_input" \n      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1" \n    >\n      Floating Label\n    </label>\n  </div>\n);`}
              htmlCode={`<div class="floating-group">\n  <input type="text" id="fl" class="floating-input" placeholder=" ">\n  <label for="fl" class="floating-label">Floating Label</label>\n</div>`}
              cssCode={`.floating-group { position: relative; width: 100%; max-width: 320px; }\n.floating-input { width: 100%; padding: 1rem 0.625rem 0.625rem; border: 1px solid #d1d5db; border-radius: 0.5rem; background: transparent; outline: none; font-size: 0.875rem; }\n.floating-label { position: absolute; top: 0.5rem; left: 0.625rem; font-size: 0.875rem; color: #6b7280; background: #fff; padding: 0 0.5rem; transition: all 0.3s; pointer-events: none; }\n.floating-input:focus ~ .floating-label, .floating-input:not(:placeholder-shown) ~ .floating-label { transform: translateY(-1rem) scale(0.85); color: #2563eb; }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">02. Floating Label</h3>
          <InputFloatingLabel />
        </div>

        {/* 3. Glass */}
        <div className="w-full flex flex-col items-center bg-gray-900 p-8 rounded-xl relative group/input">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/input:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const InputGlass = () => (\n  <div className="w-full max-w-sm">\n    <div className="relative group">\n      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>\n      <input \n        type="text" \n        placeholder="Glass Effect..." \n        className="relative w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:bg-white/20 transition-all duration-300" \n      />\n    </div>\n  </div>\n);`}
              htmlCode={`<div class="glass-wrap">\n  <div class="glass-glow"></div>\n  <input type="text" class="glass-input" placeholder="Glass Effect...">\n</div>`}
              cssCode={`.glass-wrap { position: relative; width: 100%; max-width: 320px; }\n.glass-glow { position: absolute; inset: -2px; background: linear-gradient(to right, #db2777, #9333ea); filter: blur(4px); border-radius: 0.5rem; opacity: 0.25; transition: opacity 0.3s; }\n.glass-wrap:hover .glass-glow { opacity: 0.75; }\n.glass-input { position: relative; width: 100%; padding: 0.75rem 1rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2); border-radius: 0.5rem; color: #fff; outline: none; }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-white/50 uppercase tracking-widest">03. Frosty Glass</h3>
          <InputGlass />
        </div>

        {/* 4. Neumorphic */}
        <div className="w-full flex flex-col items-center bg-gray-200 p-8 rounded-xl relative group/input">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/input:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const InputNeumorphic = () => (\n  <div className="w-full max-w-sm">\n    <input \n      type="text" \n      placeholder="Type here..." \n      className="w-full px-5 py-3 rounded-xl bg-gray-200 text-gray-700 placeholder-gray-400 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] focus:outline-none focus:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] transition-shadow duration-300" \n    />\n  </div>\n);`}
              htmlCode={`<input type="text" class="neu-input" placeholder="Type here...">`}
              cssCode={`.neu-input { width: 100%; max-width: 320px; padding: 0.75rem 1.25rem; background: #e5e7eb; border: none; border-radius: 0.75rem; box-shadow: inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff; color: #374151; outline: none; transition: box-shadow 0.3s; }\n.neu-input:focus { box-shadow: inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff; }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-gray-500 uppercase tracking-widest">04. Neumorphic</h3>
          <InputNeumorphic />
        </div>

        {/* 5. Underline Animated */}
        <div className="w-full flex flex-col items-center box-shadow p-6 rounded-xl relative group/input bg-white">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/input:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const InputUnderline = () => (\n  <div className="w-full max-w-sm relative group">\n    <input \n      type="text" \n      placeholder="Username" \n      className="w-full py-3 bg-transparent border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none peer" \n    />\n    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>\n    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 peer-focus:w-full"></div>\n  </div>\n);`}
              htmlCode={`<div class="line-group">\n  <input type="text" class="line-input" placeholder="Username">\n  <label class="line-label">Username</label>\n  <div class="line-active"></div>\n</div>`}
              cssCode={`.line-group { position: relative; width: 100%; max-width: 320px; }\n.line-input { width: 100%; padding: 0.75rem 0; background: transparent; border: none; border-bottom: 2px solid #d1d5db; outline: none; }\n.line-label { position: absolute; left: 0; top: 0.75rem; color: #9ca3af; transition: all 0.3s; pointer-events: none; }\n.line-input:focus ~ .line-label, .line-input:not(:placeholder-shown) ~ .line-label { transform: translateY(-1.5rem) scale(0.85); color: #4f46e5; }\n.line-active { position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: #4f46e5; transition: width 0.3s; }\n.line-input:focus ~ .line-active { width: 100%; }`}
            />
          </div>
          <h3 className="mb-8 text-xs font-semibold text-slate-400 uppercase tracking-widest">05. Animated Line</h3>
          <InputUnderline />
        </div>

        {/* 6. Search Pill */}
        <div className="w-full flex flex-col items-center box-shadow p-6 rounded-xl relative group/input bg-white">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/input:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const InputSearchPill = () => (\n  <div className="w-full max-w-sm relative">\n    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">\n      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>\n    </div>\n    <input \n      type="search" \n      placeholder="Search..." \n      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-200 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-300 outline-none" \n    />\n    <button className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 rounded-full text-sm px-4 py-1.5">Go</button>\n  </div>\n);`}
              htmlCode={`<div class="search-pill-wrap">\n  <input type="search" class="search-field" placeholder="Search...">\n  <button class="search-btn">Go</button>\n</div>`}
              cssCode={`.search-pill-wrap { position: relative; width: 100%; max-width: 320px; }\n.search-field { width: 100%; padding: 1rem 4rem 1rem 2.5rem; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 9999px; outline: none; transition: 0.3s; }\n.search-field:focus { border-color: #3b82f6; background: #fff; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }\n.search-btn { position: absolute; right: 0.5rem; top: 0.5rem; bottom: 0.5rem; background: #1d4ed8; color: #fff; border: none; border-radius: 9999px; padding: 0 1rem; cursor: pointer; }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">06. Search Pill</h3>
          <InputSearchPill />
        </div>

        {/* 7. Brutalist */}
        <div className="w-full flex flex-col items-center box-shadow p-6 rounded-xl relative group/input bg-white">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/input:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const InputBrutalist = () => (\n  <div className="w-full max-w-sm">\n    <label className="block font-black text-black uppercase mb-1">Enter Code</label>\n    <input \n      type="text" \n      placeholder="XYZ-123" \n      className="w-full px-4 py-3 bg-yellow-400 border-2 border-black text-black placeholder-black/60 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none transition-all duration-200" \n    />\n  </div>\n);`}
              htmlCode={`<div class="brutal-input-group">\n  <label>ENTER CODE</label>\n  <input type="text" placeholder="XYZ-123">\n</div>`}
              cssCode={`.brutal-input-group label { display: block; font-weight: 900; margin-bottom: 0.25rem; }\n.brutal-input-group input { width: 100%; background: #facc15; border: 2px solid #000; padding: 0.75rem 1rem; font-weight: 700; box-shadow: 4px 4px 0 0 #000; outline: none; transition: all 0.2s; }\n.brutal-input-group input:focus { transform: translate(2px, 2px); box-shadow: none; }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">07. Brutalist</h3>
          <InputBrutalist />
        </div>

        {/* 8. Gradient Border */}
        <div className="w-full flex flex-col items-center box-shadow p-6 rounded-xl relative group/input bg-white">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/input:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const InputGradientBorder = () => (\n  <div className="w-full max-w-sm p-[2px] rounded-lg bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">\n    <input \n      type="text" \n      placeholder="Gradient Focus" \n      className="w-full px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none placeholder-gray-400" \n    />\n  </div>\n);`}
              htmlCode={`<div class="grad-border-wrap">\n  <input type="text" placeholder="Gradient Focus">\n</div>`}
              cssCode={`.grad-border-wrap { width: 100%; max-width: 320px; padding: 2px; border-radius: 0.5rem; background: linear-gradient(to right, #2dd4bf, #3b82f6, #9333ea); }\n.grad-border-wrap input { width: 100%; border: none; border-radius: 0.375rem; padding: 0.5rem 1rem; outline: none; background: #fff; }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">08. Gradient Ring</h3>
          <InputGradientBorder />
        </div>

        {/* 9. Ghost */}
        <div className="w-full flex flex-col items-center box-shadow p-6 rounded-xl relative group/input bg-white">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/input:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const InputGhost = () => (\n  <div className="w-full max-w-sm">\n    <input \n      type="text" \n      placeholder="Ghost Input" \n      className="w-full px-2 py-2 bg-transparent border-b border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors duration-300" \n    />\n  </div>\n);`}
              htmlCode={`<input type="text" class="ghost-field" placeholder="Ghost Input">`}
              cssCode={`.ghost-field { width: 100%; max-width: 320px; padding: 0.5rem 0.25rem; background: transparent; border: none; border-bottom: 1px solid #d1d5db; outline: none; transition: 0.3s; }\n.ghost-field:focus { border-color: #111827; }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">09. Minimalist Ghost</h3>
          <InputGhost />
        </div>

        {/* 10. Validated */}
        <div className="w-full flex flex-col items-center box-shadow p-6 rounded-xl relative group/input bg-white">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/input:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const InputValidated = () => (\n  <div className="w-full max-w-sm">\n    <label className="block text-sm font-medium text-green-700 mb-1">Username Available</label>\n    <div className="relative">\n      <input \n        type="text" \n        defaultValue="tailwinder" \n        className="block w-full px-4 py-3 text-green-900 placeholder-green-700 border border-green-400 rounded-lg bg-green-50 focus:ring-green-500 focus:border-green-500 focus:outline-none" \n      />\n    </div>\n  </div>\n);`}
              htmlCode={`<div class="valid-input-group">\n  <label>Username Available</label>\n  <div class="valid-wrap">\n    <input type="text" value="tailwinder" readonly>\n    <span class="valid-icon">✓</span>\n  </div>\n</div>`}
              cssCode={`.valid-input-group label { font-size: 0.875rem; color: #15803d; font-weight: 500; margin-bottom: 0.25rem; display: block; }\n.valid-wrap { position: relative; border-radius: 0.5rem; overflow: hidden; }\n.valid-wrap input { width: 100%; padding: 0.75rem 1rem; background: #f0fdf4; border: 1px solid #4ade80; color: #14532d; outline: none; }\n.valid-icon { position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); color: #16a34a; font-weight: bold; }`}
            />
          </div>
          <h3 className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">10. Validation State</h3>
          <InputValidated />
        </div>

      </div>
    </div>
  );
};

export default Inputs;