import React, { useState, useEffect } from 'react';
import CopyButton from '../CopyButton';

// --- 1. The Standard SaaS (Clean & Helpful) ---
export const NotFoundStandard = () => (
  <div className="flex flex-col items-center justify-center h-[500px] text-center bg-white border border-gray-100 rounded-xl p-8">
    <div className="bg-blue-50 text-blue-600 rounded-full p-4 mb-6">
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </div>
    <h1 className="text-4xl font-bold text-gray-900 mb-2">Page not found</h1>
    <p className="text-gray-500 mb-8 max-w-sm">Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.</p>
    <div className="flex gap-4">
      <button className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors">Go back</button>
      <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors">Take me home</button>
    </div>
  </div>
);

// --- 2. The Minimalist (Typography Focus) ---
export const NotFoundMinimal = () => (
  <div className="flex flex-col justify-center h-[500px] bg-white p-12 border border-gray-100 rounded-xl relative overflow-hidden">
    <h1 className="text-[12rem] leading-none font-bold text-gray-50 select-none absolute -right-12 -top-12 z-0">404</h1>
    <div className="relative z-10">
      <div className="w-16 h-1 bg-black mb-8"></div>
      <h2 className="text-4xl font-bold text-black mb-4">Lost in space?</h2>
      <p className="text-gray-600 mb-8 max-w-md text-lg">The page you are looking for doesn't exist or has been moved.</p>
      <a href="#" className="text-black font-bold border-b-2 border-black hover:text-gray-600 hover:border-gray-600 transition-colors inline-block pb-1">
        Back to Homepage
      </a>
    </div>
  </div>
);

// --- 3. The Interactive Switch (Playful) ---
export const NotFoundInteractive = () => {
  const [isOn, setIsOn] = useState(false);
  
  return (
    <div className={`flex flex-col items-center justify-center h-[500px] rounded-xl transition-colors duration-500 ${isOn ? 'bg-yellow-50' : 'bg-slate-900'}`}>
      <h1 className={`text-9xl font-black mb-4 transition-colors duration-500 ${isOn ? 'text-gray-900' : 'text-slate-800'}`}>404</h1>
      <p className={`text-xl font-medium mb-12 transition-colors duration-500 ${isOn ? 'text-gray-600' : 'text-slate-400'}`}>
        Whoops! Looks like the lights are out.
      </p>
      
      {/* Light Switch */}
      <div className="relative">
        <div className={`w-1 h-24 mx-auto ${isOn ? 'bg-gray-300' : 'bg-slate-700'}`}></div>
        <button 
          onClick={() => setIsOn(!isOn)}
          className={`relative z-10 w-4 h-16 rounded-full border-2 transition-all duration-300 ${
             isOn 
             ? 'bg-white border-gray-300 translate-y-0 shadow-lg' 
             : 'bg-slate-800 border-slate-600 translate-y-4 shadow-inner'
          }`}
        >
          {/* String */}
        </button>
        <div className={`absolute left-1/2 -translate-x-1/2 bottom-0 w-0.5 h-12 bg-white/20 -z-10 ${isOn ? 'hidden' : 'block'}`}></div>
      </div>
      
      <p className={`mt-8 text-sm ${isOn ? 'text-gray-400' : 'text-slate-600'}`}>
        {isOn ? 'Ah, there it is! But the page is still gone.' : 'Maybe try turning on the light?'}
      </p>
    </div>
  );
};

// --- 4. The Split Layout (Image + Text) ---
export const NotFoundSplit = () => (
  <div className="flex h-[500px] bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
    <div className="w-1/2 p-12 flex flex-col justify-center">
      <div className="text-indigo-600 font-bold text-sm tracking-widest uppercase mb-2">Error 404</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Nothing to see here</h1>
      <p className="text-gray-500 mb-8 leading-relaxed">
        Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL.
      </p>
      <button className="w-fit px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
        Return Home
      </button>
    </div>
    <div className="w-1/2 bg-indigo-50 relative overflow-hidden">
      
      <img 
        src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1000&auto=format&fit=crop" 
        alt="Empty Void" 
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 grayscale"
      />
    </div>
  </div>
);

// --- 5. The Terminal (Dev/Tech Style) ---
export const NotFoundTerminal = () => {
  const [text, setText] = useState('');
  const fullText = "> ERROR: 404_PAGE_NOT_FOUND\n> INITIATING_SEARCH_PROTOCOL...\n> SEARCH_FAILED.\n> SUGGESTION: RETURN_TO_ROOT";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[500px] bg-gray-900 rounded-xl p-8 font-mono flex flex-col justify-center items-center shadow-2xl">
      <div className="w-full max-w-lg bg-black border border-gray-700 rounded-lg p-1 shadow-xl">
        {/* Terminal Header */}
        <div className="bg-gray-800 px-4 py-2 flex gap-2 rounded-t-md mb-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        {/* Terminal Body */}
        <div className="p-6 min-h-[200px] text-green-400">
          <pre className="whitespace-pre-wrap">{text}<span className="animate-pulse">_</span></pre>
          <div className="mt-8 pt-4 border-t border-gray-800">
            <button className="px-4 py-2 bg-green-500/10 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors text-sm uppercase">
              Execute: Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 6. The Glassmorphism (Blurry Background) ---
export const NotFoundGlass = () => (
  <div className="relative h-[500px] rounded-xl overflow-hidden flex items-center justify-center">
    {/* Abstract Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400"></div>
    <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

    {/* Glass Card */}
    <div className="relative bg-white/20 backdrop-blur-lg border border-white/30 p-12 rounded-3xl text-center shadow-xl max-w-md mx-4">
      <h1 className="text-8xl font-bold text-white mb-2 drop-shadow-md">404</h1>
      <h2 className="text-2xl font-bold text-white mb-6">Page Not Found</h2>
      <p className="text-white/80 mb-8">The glass is half empty... because this page doesn't exist.</p>
      <button className="px-8 py-3 bg-white text-purple-600 font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
        Back Home
      </button>
    </div>
  </div>
);

// --- 7. The Cyberpunk (Glitch) ---
export const NotFoundCyberpunk = () => (
  <div className="h-[500px] bg-black relative overflow-hidden rounded-xl flex flex-col items-center justify-center border-2 border-cyan-500 p-8">
    {/* Grid Background */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    
    <div className="relative z-10 text-center">
      <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 relative inline-block mb-4">
        404
        <span className="absolute top-0 left-0 -ml-1 text-cyan-500 opacity-50 animate-pulse" aria-hidden="true">404</span>
        <span className="absolute top-0 left-0 ml-1 text-pink-500 opacity-50 animate-pulse" aria-hidden="true">404</span>
      </h1>
      
      <div className="bg-yellow-400 text-black font-mono font-bold px-4 py-1 inline-block transform -rotate-2 mb-8">
        SYSTEM FAILURE
      </div>
      
      <p className="text-cyan-400 font-mono mb-8 max-w-md mx-auto">
        The requested data sector is corrupted or does not exist in this timeline.
      </p>
      
      <button className="px-8 py-3 bg-transparent border-2 border-pink-500 text-pink-500 font-mono font-bold uppercase hover:bg-pink-500 hover:text-black hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] transition-all">
        Reboot System
      </button>
    </div>
  </div>
);

// --- 8. The Neumorphic (Soft UI) ---
export const NotFoundNeumorphic = () => (
  <div className="h-[500px] bg-[#e0e5ec] rounded-xl flex flex-col items-center justify-center p-8">
    <div className="w-64 h-64 rounded-full bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex items-center justify-center mb-12">
      <span className="text-6xl font-bold text-gray-400">404</span>
    </div>
    
    <h2 className="text-2xl font-bold text-gray-600 mb-2">Oops! Page not found.</h2>
    <p className="text-gray-500 mb-8">This page seems to be missing.</p>
    
    <button className="px-8 py-3 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] active:scale-95 transition-all">
      Go Home
    </button>
  </div>
);

// --- 9. The Brutalist (Retro Bold) ---
export const NotFoundBrutalist = () => (
  <div className="h-[500px] bg-yellow-400 border-4 border-black rounded-none p-8 flex flex-col justify-between relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-black opacity-5 select-none pointer-events-none">
      404
    </div>
    
    <div className="border-b-4 border-black pb-4">
      <h1 className="text-6xl font-black uppercase tracking-tighter">Dead End.</h1>
    </div>
    
    <div className="flex flex-col gap-4 max-w-md z-10">
      <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <p className="font-bold text-xl mb-2">ERROR_CODE: 404</p>
        <p className="font-mono">The file you are looking for has been moved, deleted, or never existed.</p>
      </div>
      
      <button className="bg-black text-white font-black text-xl py-4 px-8 border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors uppercase">
        Back to Safety
      </button>
    </div>
  </div>
);

// --- 10. The Search Bar (Helpful Recovery) ---
export const NotFoundSearch = () => (
  <div className="flex flex-col items-center justify-center h-[500px] bg-gray-50 border border-gray-100 rounded-xl p-8">
    <div className="text-gray-300 mb-4">
      <svg className="w-24 h-24 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z" /></svg>
    </div>
    <h1 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h1>
    <p className="text-gray-500 mb-8 text-center max-w-sm">We couldn't find that page. Try searching for what you need or go back to the homepage.</p>
    
    <div className="w-full max-w-md relative mb-6">
      <input 
        type="text" 
        placeholder="Search documentation..." 
        className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all shadow-sm"
      />
      <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </div>
    
    <div className="flex gap-4 text-sm font-medium text-blue-600">
      <a href="#" className="hover:underline">Home</a>
      <span className="text-gray-300">•</span>
      <a href="#" className="hover:underline">Contact Support</a>
      <span className="text-gray-300">•</span>
      <a href="#" className="hover:underline">Sitemap</a>
    </div>
  </div>
);


// --- Main Gallery ---
const NotFoundGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">404 Page Designs</h1>
        <p className="text-slate-500">A collection of "Page Not Found" states for various brand personalities.</p>
      </div>
      
      <div className="space-y-24 max-w-5xl mx-auto">
        
        <section className='box-shadow p-4 rounded-lg relative group/notf'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/notf:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="flex flex-col items-center justify-center h-[500px] text-center bg-white border border-gray-100 rounded-xl p-8">
    <div className="bg-blue-50 text-blue-600 rounded-full p-4 mb-6">
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </div>
    <h1 className="text-4xl font-bold text-gray-900 mb-2">Page not found</h1>
    <p className="text-gray-500 mb-8 max-w-sm">Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.</p>
    <div className="flex gap-4">
      <button className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors">Go back</button>
      <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors">Take me home</button>
    </div>
  </div>`} htmlCode={`<div class="flex flex-col items-center justify-center h-[500px] text-center bg-white border border-gray-100 rounded-xl p-8">
    <div class="bg-blue-50 text-blue-600 rounded-full p-4 mb-6">
      <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </div>
    <h1 class="text-4xl font-bold text-gray-900 mb-2">Page not found</h1>
    <p class="text-gray-500 mb-8 max-w-sm">Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.</p>
    <div class="flex gap-4">
      <button class="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors">Go back</button>
      <button class="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors">Take me home</button>
    </div>
  </div>`} cssCode={`/* NotFoundStandard Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #2563eb;\n  background-color: #eff6ff;\n  background-color: #ffffff;\n  border-color: #f3f4f6;\n  border-radius: 0.5rem;\n  border-radius: 0.75rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  color: #111827;\n  color: #2563eb;\n  color: #374151;\n  color: #6b7280;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  justify-content: center;\n  padding-left: 1.5rem; padding-right: 1.5rem;\n  padding-top: 0.5rem; padding-bottom: 0.5rem;\n  padding: 1rem;\n  padding: 2rem;\n  text-align: center;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 01. Standard SaaS </span>
          <NotFoundStandard />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/notf'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/notf:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="flex flex-col justify-center h-[500px] bg-white p-12 border border-gray-100 rounded-xl relative overflow-hidden">
    <h1 className="text-[12rem] leading-none font-bold text-gray-50 select-none absolute -right-12 -top-12 z-0">404</h1>
    <div className="relative z-10">
      <div className="w-16 h-1 bg-black mb-8"></div>
      <h2 className="text-4xl font-bold text-black mb-4">Lost in space?</h2>
      <p className="text-gray-600 mb-8 max-w-md text-lg">The page you are looking for doesn't exist or has been moved.</p>
      <a href="#" className="text-black font-bold border-b-2 border-black hover:text-gray-600 hover:border-gray-600 transition-colors inline-block pb-1">
        Back to Homepage
      </a>
    </div>
  </div>`} htmlCode={`<div class="flex flex-col justify-center h-[500px] bg-white p-12 border border-gray-100 rounded-xl relative overflow-hidden">
    <h1 class="text-[12rem] leading-none font-bold text-gray-50 select-none absolute -right-12 -top-12 z-0">404</h1>
    <div class="relative z-10">
      <div class="w-16 h-1 bg-black mb-8"></div>
      <h2 class="text-4xl font-bold text-black mb-4">Lost in space?</h2>
      <p class="text-gray-600 mb-8 max-w-md text-lg">The page you are looking for doesn't exist or has been moved.</p>
      <a href="#" class="text-black font-bold border-b-2 border-black hover:text-gray-600 hover:border-gray-600 transition-colors inline-block pb-1">
        Back to Homepage
      </a>
    </div>
  </div>`} cssCode={`/* NotFoundMinimal Styles (Generated from Tailwind) */\n.component-root {\n  background-color: #000000;\n  background-color: #ffffff;\n  border-color: #000000;\n  border-color: #f3f4f6;\n  border-radius: 0.75rem;\n  border-width: 1px; border-style: solid;\n  color: #000000;\n  color: #4b5563;\n  color: #f9fafb;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  justify-content: center;\n  padding: 3rem;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 02. Minimalist Typography </span>
          <NotFoundMinimal />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/notf'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/notf:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className={\`flex flex-col items-center justify-center h-[500px] rounded-xl transition-colors duration-500 \${isOn ? 'bg-yellow-50' : 'bg-slate-900'}\`}>
      <h1 className={\`text-9xl font-black mb-4 transition-colors duration-500 \${isOn ? 'text-gray-900' : 'text-slate-800'}\`}>404</h1>
      <p className={\`text-xl font-medium mb-12 transition-colors duration-500 \${isOn ? 'text-gray-600' : 'text-slate-400'}\`}>
        Whoops! Looks like the lights are out.
      </p>
      
      {/* Light Switch */}
      <div className="relative">
        <div className={\`w-1 h-24 mx-auto \${isOn ? 'bg-gray-300' : 'bg-slate-700'}\`}></div>
        <button 
          onClick={(`} htmlCode={`<div class=flex flex-col items-center justify-center h-[500px] rounded-xl transition-colors duration-500 \$...>
      <h1 class=text-9xl font-black mb-4 transition-colors duration-500 \$...>404</h1>
      <p class=text-xl font-medium mb-12 transition-colors duration-500 \$...>
        Whoops! Looks like the lights are out.
      </p>
      
      ...
      <div class="relative">
        <div class=w-1 h-24 mx-auto \$...></div>
        <button 
          onClick={(`} cssCode={`/* NotFoundInteractive Styles */\n/* Uses Tailwind Utility Classes */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 03. Interactive Switch </span>
          <NotFoundInteractive />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/notf'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/notf:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="flex h-[500px] bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
    <div className="w-1/2 p-12 flex flex-col justify-center">
      <div className="text-indigo-600 font-bold text-sm tracking-widest uppercase mb-2">Error 404</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Nothing to see here</h1>
      <p className="text-gray-500 mb-8 leading-relaxed">
        Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL.
      </p>
      <button className="w-fit px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
        Return Home
      </button>
    </div>
    <div className="w-1/2 bg-indigo-50 relative overflow-hidden">
      
      <img 
        src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1000&auto=format&fit=crop" 
        alt="Empty Void" 
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 grayscale"
      />
    </div>
  </div>`} htmlCode={`<div class="flex h-[500px] bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
    <div class="w-1/2 p-12 flex flex-col justify-center">
      <div class="text-indigo-600 font-bold text-sm tracking-widest uppercase mb-2">Error 404</div>
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Nothing to see here</h1>
      <p class="text-gray-500 mb-8 leading-relaxed">
        Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL.
      </p>
      <button class="w-fit px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
        Return Home
      </button>
    </div>
    <div class="w-1/2 bg-indigo-50 relative overflow-hidden">
      
      <img 
        src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1000&auto=format&fit=crop" 
        alt="Empty Void" 
        class="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 grayscale"
      />
    </div>
  </div>`} cssCode={`/* NotFoundSplit Styles (Generated from Tailwind) */\n.component-root {\n  background-color: #4f46e5;\n  background-color: #eef2ff;\n  background-color: #ffffff;\n  border-color: #f3f4f6;\n  border-radius: 0.5rem;\n  border-radius: 0.75rem;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #111827;\n  color: #4f46e5;\n  color: #6b7280;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  height: 100%;\n  justify-content: center;\n  padding-left: 1.5rem; padding-right: 1.5rem;\n  padding-top: 0.75rem; padding-bottom: 0.75rem;\n  padding: 3rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 04. Split Layout </span>
          <NotFoundSplit />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/notf'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/notf:opacity-100 transition-opacity"><CopyButton jsxCode={`const NotFoundTerminal = () => {
  const [text, setText] = useState('');
  const fullText = "> ERROR: 404_PAGE_NOT_FOUND\\n> INITIATING_SEARCH_PROTOCOL...\\n> SEARCH_FAILED.\\n> SUGGESTION: RETURN_TO_ROOT";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[500px] bg-gray-900 rounded-xl p-8 font-mono flex flex-col justify-center items-center shadow-2xl">
      <div className="w-full max-w-lg bg-black border border-gray-700 rounded-lg p-1 shadow-xl">
        <div className="bg-gray-800 px-4 py-2 flex gap-2 rounded-t-md mb-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="p-6 min-h-[200px] text-green-400">
          <pre className="whitespace-pre-wrap">{text}<span className="animate-pulse">_</span></pre>
        </div>
      </div>
    </div>
  );
};`} htmlCode={`<div class="h-[500px] bg-gray-900 rounded-xl p-8 font-mono flex flex-col justify-center items-center shadow-2xl">
  <div class="w-full max-w-lg bg-black border border-gray-700 rounded-lg p-1 shadow-xl">
    <div class="bg-gray-800 px-4 py-2 flex gap-2 rounded-t-md mb-2">
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div class="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <div class="p-6 min-h-[200px] text-green-400">
      <pre class="whitespace-pre-wrap">ERROR: 404_PAGE_NOT_FOUND...</pre>
    </div>
  </div>
</div>`} cssCode={`/* NotFoundTerminal Styles */\n/* Uses Tailwind CSS */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 05. Terminal </span>
          <NotFoundTerminal />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/notf'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/notf:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="relative h-[500px] rounded-xl overflow-hidden flex items-center justify-center">
    {/* Abstract Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400"></div>
    <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

    {/* Glass Card */}
    <div className="relative bg-white/20 backdrop-blur-lg border border-white/30 p-12 rounded-3xl text-center shadow-xl max-w-md mx-4">
      <h1 className="text-8xl font-bold text-white mb-2 drop-shadow-md">404</h1>
      <h2 className="text-2xl font-bold text-white mb-6">Page Not Found</h2>
      <p className="text-white/80 mb-8">The glass is half empty... because this page doesn't exist.</p>
      <button className="px-8 py-3 bg-white text-purple-600 font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
        Back Home
      </button>
    </div>
  </div>`} htmlCode={`<div class="relative h-[500px] rounded-xl overflow-hidden flex items-center justify-center">
    ...
    <div class="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400"></div>
    <div class="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div class="absolute bottom-10 right-10 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

    ...
    <div class="relative bg-white/20 backdrop-blur-lg border border-white/30 p-12 rounded-3xl text-center shadow-xl max-w-md mx-4">
      <h1 class="text-8xl font-bold text-white mb-2 drop-shadow-md">404</h1>
      <h2 class="text-2xl font-bold text-white mb-6">Page Not Found</h2>
      <p class="text-white/80 mb-8">The glass is half empty... because this page doesn't exist.</p>
      <button class="px-8 py-3 bg-white text-purple-600 font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
        Back Home
      </button>
    </div>
  </div>`} cssCode={`/* NotFoundGlass Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  backdrop-filter: blur(12px);\n  background-color: #fde047;\n  background-color: #ffffff;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #9333ea;\n  color: #ffffff;\n  display: flex;\n  font-weight: 700;\n  justify-content: center;\n  padding-left: 2rem; padding-right: 2rem;\n  padding-top: 0.75rem; padding-bottom: 0.75rem;\n  padding: 3rem;\n  text-align: center;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 06. Glassmorphism </span>
          <NotFoundGlass />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/notf'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/notf:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="h-[500px] bg-black relative overflow-hidden rounded-xl flex flex-col items-center justify-center border-2 border-cyan-500 p-8">
    {/* Grid Background */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    
    <div className="relative z-10 text-center">
      <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 relative inline-block mb-4">
        404
        <span className="absolute top-0 left-0 -ml-1 text-cyan-500 opacity-50 animate-pulse" aria-hidden="true">404</span>
        <span className="absolute top-0 left-0 ml-1 text-pink-500 opacity-50 animate-pulse" aria-hidden="true">404</span>
      </h1>
      
      <div className="bg-yellow-400 text-black font-mono font-bold px-4 py-1 inline-block transform -rotate-2 mb-8">
        SYSTEM FAILURE
      </div>
      
      <p className="text-cyan-400 font-mono mb-8 max-w-md mx-auto">
        The requested data sector is corrupted or does not exist in this timeline.
      </p>
      
      <button className="px-8 py-3 bg-transparent border-2 border-pink-500 text-pink-500 font-mono font-bold uppercase hover:bg-pink-500 hover:text-black hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] transition-all">
        Reboot System
      </button>
    </div>
  </div>`} htmlCode={`<div class="h-[500px] bg-black relative overflow-hidden rounded-xl flex flex-col items-center justify-center border-2 border-cyan-500 p-8">
    ...
    <div class="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    
    <div class="relative z-10 text-center">
      <h1 class="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 relative inline-block mb-4">
        404
        <span class="absolute top-0 left-0 -ml-1 text-cyan-500 opacity-50 animate-pulse" aria-hidden="true">404</span>
        <span class="absolute top-0 left-0 ml-1 text-pink-500 opacity-50 animate-pulse" aria-hidden="true">404</span>
      </h1>
      
      <div class="bg-yellow-400 text-black font-mono font-bold px-4 py-1 inline-block transform -rotate-2 mb-8">
        SYSTEM FAILURE
      </div>
      
      <p class="text-cyan-400 font-mono mb-8 max-w-md mx-auto">
        The requested data sector is corrupted or does not exist in this timeline.
      </p>
      
      <button class="px-8 py-3 bg-transparent border-2 border-pink-500 text-pink-500 font-mono font-bold uppercase hover:bg-pink-500 hover:text-black hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] transition-all">
        Reboot System
      </button>
    </div>
  </div>`} cssCode={`/* NotFoundCyberpunk Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #000000;\n  background-color: #facc15;\n  background-color: transparent;\n  border-color: #ec4899;\n  border-radius: 0.75rem;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #000000;\n  color: #ec4899;\n  color: transparent;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  justify-content: center;\n  padding-left: 1rem; padding-right: 1rem;\n  padding-left: 2rem; padding-right: 2rem;\n  padding-top: 0.25rem; padding-bottom: 0.25rem;\n  padding-top: 0.75rem; padding-bottom: 0.75rem;\n  padding: 2rem;\n  text-align: center;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 07. Cyberpunk </span>
          <NotFoundCyberpunk />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/notf'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/notf:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="h-[500px] bg-[#e0e5ec] rounded-xl flex flex-col items-center justify-center p-8">
    <div className="w-64 h-64 rounded-full bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex items-center justify-center mb-12">
      <span className="text-6xl font-bold text-gray-400">404</span>
    </div>
    
    <h2 className="text-2xl font-bold text-gray-600 mb-2">Oops! Page not found.</h2>
    <p className="text-gray-500 mb-8">This page seems to be missing.</p>
    
    <button className="px-8 py-3 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] active:scale-95 transition-all">
      Go Home
    </button>
  </div>`} htmlCode={`<div class="h-[500px] bg-[#e0e5ec] rounded-xl flex flex-col items-center justify-center p-8">
    <div class="w-64 h-64 rounded-full bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex items-center justify-center mb-12">
      <span class="text-6xl font-bold text-gray-400">404</span>
    </div>
    
    <h2 class="text-2xl font-bold text-gray-600 mb-2">Oops! Page not found.</h2>
    <p class="text-gray-500 mb-8">This page seems to be missing.</p>
    
    <button class="px-8 py-3 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] active:scale-95 transition-all">
      Go Home
    </button>
  </div>`} cssCode={`/* NotFoundNeumorphic Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  border-radius: 0.75rem;\n  border-radius: 9999px;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #3b82f6;\n  color: #4b5563;\n  color: #6b7280;\n  color: #9ca3af;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  justify-content: center;\n  padding-left: 2rem; padding-right: 2rem;\n  padding-top: 0.75rem; padding-bottom: 0.75rem;\n  padding: 2rem;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 08. Neumorphic </span>
          <NotFoundNeumorphic />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/notf'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/notf:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="h-[500px] bg-yellow-400 border-4 border-black rounded-none p-8 flex flex-col justify-between relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-black opacity-5 select-none pointer-events-none">
      404
    </div>
    
    <div className="border-b-4 border-black pb-4">
      <h1 className="text-6xl font-black uppercase tracking-tighter">Dead End.</h1>
    </div>
    
    <div className="flex flex-col gap-4 max-w-md z-10">
      <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <p className="font-bold text-xl mb-2">ERROR_CODE: 404</p>
        <p className="font-mono">The file you are looking for has been moved, deleted, or never existed.</p>
      </div>
      
      <button className="bg-black text-white font-black text-xl py-4 px-8 border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors uppercase">
        Back to Safety
      </button>
    </div>
  </div>`} htmlCode={`<div class="h-[500px] bg-yellow-400 border-4 border-black rounded-none p-8 flex flex-col justify-between relative overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-black opacity-5 select-none pointer-events-none">
      404
    </div>
    
    <div class="border-b-4 border-black pb-4">
      <h1 class="text-6xl font-black uppercase tracking-tighter">Dead End.</h1>
    </div>
    
    <div class="flex flex-col gap-4 max-w-md z-10">
      <div class="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <p class="font-bold text-xl mb-2">ERROR_CODE: 404</p>
        <p class="font-mono">The file you are looking for has been moved, deleted, or never existed.</p>
      </div>
      
      <button class="bg-black text-white font-black text-xl py-4 px-8 border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors uppercase">
        Back to Safety
      </button>
    </div>
  </div>`} cssCode={`/* NotFoundBrutalist Styles (Generated from Tailwind) */\n.component-root {\n  background-color: #000000;\n  background-color: #facc15;\n  background-color: #ffffff;\n  border-color: #000000;\n  border-color: transparent;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #000000;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  justify-content: space-between;\n  padding-left: 2rem; padding-right: 2rem;\n  padding-top: 1rem; padding-bottom: 1rem;\n  padding: 1.5rem;\n  padding: 2rem;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 09. Brutalist </span>
          <NotFoundBrutalist />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/notf'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/notf:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="flex flex-col items-center justify-center h-[500px] bg-gray-50 border border-gray-100 rounded-xl p-8">
    <div className="text-gray-300 mb-4">
      <svg className="w-24 h-24 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z" /></svg>
    </div>
    <h1 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h1>
    <p className="text-gray-500 mb-8 text-center max-w-sm">We couldn't find that page. Try searching for what you need or go back to the homepage.</p>
    
    <div className="w-full max-w-md relative mb-6">
      <input 
        type="text" 
        placeholder="Search documentation..." 
        className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all shadow-sm"
      />
      <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </div>
    
    <div className="flex gap-4 text-sm font-medium text-blue-600">
      <a href="#" className="hover:underline">Home</a>
      <span className="text-gray-300">•</span>
      <a href="#" className="hover:underline">Contact Support</a>
      <span className="text-gray-300">•</span>
      <a href="#" className="hover:underline">Sitemap</a>
    </div>
  </div>`} htmlCode={`<div class="flex flex-col items-center justify-center h-[500px] bg-gray-50 border border-gray-100 rounded-xl p-8">
    <div class="text-gray-300 mb-4">
      <svg class="w-24 h-24 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z" /></svg>
    </div>
    <h1 class="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h1>
    <p class="text-gray-500 mb-8 text-center max-w-sm">We couldn't find that page. Try searching for what you need or go back to the homepage.</p>
    
    <div class="w-full max-w-md relative mb-6">
      <input 
        type="text" 
        placeholder="Search documentation..." 
        class="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all shadow-sm"
      />
      <svg class="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </div>
    
    <div class="flex gap-4 text-sm font-medium text-blue-600">
      <a href="#" class="hover:underline">Home</a>
      <span class="text-gray-300">•</span>
      <a href="#" class="hover:underline">Contact Support</a>
      <span class="text-gray-300">•</span>
      <a href="#" class="hover:underline">Sitemap</a>
    </div>
  </div>`} cssCode={`/* NotFoundSearch Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #f9fafb;\n  border-color: #e5e7eb;\n  border-color: #f3f4f6;\n  border-radius: 0.75rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #1f2937;\n  color: #2563eb;\n  color: #6b7280;\n  color: #9ca3af;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  justify-content: center;\n  padding-top: 0.75rem; padding-bottom: 0.75rem;\n  padding: 2rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 10. Helpful Search </span>
          <NotFoundSearch />
        </section>

      </div>
    </div>
  );
};

export default NotFoundGallery;