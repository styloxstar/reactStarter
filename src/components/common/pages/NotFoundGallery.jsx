import React, { useState, useEffect } from 'react';
import CopyButton from '../CopyButton';

// --- 1. The Standard SaaS (Clean & Helpful) ---
export const NotFoundStandard = () => (
  <div className="flex flex-col items-center justify-center min-h-[500px] w-full bg-white border border-slate-100 rounded-[3rem] p-12 text-center shadow-sm hover:shadow-2xl transition-all duration-500 group">
    <div className="bg-indigo-50 text-indigo-600 rounded-[2rem] p-8 mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-inner">
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </div>
    <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter italic uppercase">Lost at Sea.</h1>
    <p className="text-slate-400 mb-12 max-w-sm font-medium italic leading-relaxed">The coordinates you provided led to an empty void. The page you are looking for has likely been decommissioned.</p>
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
      <button className="flex-1 px-8 py-4 bg-white border-2 border-slate-100 rounded-2xl text-slate-600 hover:border-indigo-600 hover:text-indigo-600 font-black uppercase tracking-widest text-[10px] transition-all italic leading-none">Go back</button>
      <button className="flex-1 px-8 py-4 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 font-black uppercase tracking-widest text-[10px] transition-all shadow-xl shadow-indigo-100 italic leading-none">Take me home</button>
    </div>
  </div>
);

// --- 2. The Minimalist (Typography Focus) ---
export const NotFoundMinimal = () => (
  <div className="flex flex-col justify-center min-h-[500px] w-full bg-white p-16 border border-slate-100 rounded-[3rem] relative overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-700">
    <h1 className="text-[24rem] leading-none font-black text-slate-50 select-none absolute -right-24 -bottom-24 z-0 tracking-tighter transition-transform duration-1000 group-hover:scale-110 group-hover:-translate-x-12">404</h1>
    <div className="relative z-10">
      <div className="w-20 h-1.5 bg-indigo-600 mb-12 group-hover:w-32 transition-all duration-700"></div>
      <h2 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter italic uppercase leading-none">Null & Void.</h2>
      <p className="text-slate-400 mb-12 max-w-md text-xl font-medium italic lowercase leading-relaxed">The requested destination is logically unreachable within the current architectural scope.</p>
      <a href="#" className="inline-flex items-center gap-4 text-indigo-600 font-black uppercase tracking-[0.3em] text-xs group/link italic">
        Return to Source
        <span className="w-8 h-[2px] bg-indigo-600 group-hover/link:w-16 transition-all duration-500"></span>
      </a>
    </div>
  </div>
);

// --- 3. The Interactive Switch (Playful) ---
export const NotFoundInteractive = () => {
  const [isOn, setIsOn] = useState(false);
  
  return (
    <div className={`flex flex-col items-center justify-center min-h-[500px] w-full rounded-[3rem] transition-all duration-700 relative overflow-hidden group ${isOn ? 'bg-indigo-50' : 'bg-slate-900'}`}>
      <div className={`absolute inset-0 opacity-10 transition-opacity duration-700 ${isOn ? 'bg-[radial-gradient(circle_at_center,_#4f46e5_0%,_transparent_70%)]' : 'bg-[radial-gradient(circle_at_center,_#ffffff_0%,_transparent_70%)]'}`}></div>
      
      <h1 className={`text-[12rem] font-black mb-4 transition-all duration-700 tracking-tighter italic ${isOn ? 'text-indigo-600 scale-110 drop-shadow-2xl' : 'text-slate-800 scale-100 shadow-inner'}`}>404</h1>
      
      <div className="relative z-10 text-center px-12">
        <p className={`text-2xl font-black mb-12 transition-all duration-700 uppercase italic tracking-widest ${isOn ? 'text-indigo-900' : 'text-slate-400'}`}>
          {isOn ? 'The light is on, but nobody home.' : 'Who turned out the lights?'}
        </p>
        
        {/* Designer Light Switch */}
        <div className="relative inline-block group/switch cursor-pointer" onClick={() => setIsOn(!isOn)}>
          <div className={`w-1 h-32 mx-auto transition-all duration-500 ${isOn ? 'bg-indigo-200' : 'bg-slate-700'}`}></div>
          <div className={`w-8 h-8 rounded-full border-4 transition-all duration-500 flex items-center justify-center ${
             isOn 
             ? 'bg-white border-indigo-600 translate-y-0 shadow-[0_0_30px_rgba(79,70,229,0.4)]' 
             : 'bg-slate-800 border-slate-600 translate-y-4 shadow-inner'
          }`}>
             <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${isOn ? 'bg-indigo-600' : 'bg-slate-600'}`}></div>
          </div>
        </div>
      </div>
      
      <div className={`absolute bottom-12 transition-all duration-700 uppercase text-[10px] font-black tracking-[0.5em] italic ${isOn ? 'text-indigo-400 opacity-100' : 'text-slate-700 opacity-50'}`}>
        Search Protocol: Failed
      </div>
    </div>
  );
};

// --- 4. The Split Layout (Image + Text) ---
export const NotFoundSplit = () => (
  <div className="flex flex-col lg:flex-row min-h-[500px] w-full bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
    <div className="w-full lg:w-1/2 p-16 flex flex-col justify-center bg-white relative z-10">
      <div className="flex items-center gap-4 mb-10 group/err">
        <div className="w-12 h-[2px] bg-indigo-600 group-hover:w-20 transition-all duration-500"></div>
        <div className="text-indigo-600 font-black text-[10px] tracking-[0.4em] uppercase italic">System Error: 404</div>
      </div>
      <h1 className="text-7xl font-black text-slate-900 mb-6 tracking-tighter italic uppercase leading-[0.8]">Nowhere<br/>to be<br/>found.</h1>
      <p className="text-slate-400 mb-12 leading-relaxed italic font-medium text-lg max-w-sm">
        The requested resource has been purged from the active directory or migrated to a hidden sector.
      </p>
      <div className="flex gap-6 items-center">
        <button className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-100 italic leading-none">Initialize Jump</button>
        <a href="#" className="text-slate-400 hover:text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] italic transition-colors">Contact Cmd</a>
      </div>
    </div>
    <div className="w-full lg:w-1/2 bg-slate-900 relative overflow-hidden flex items-center justify-center">
      <img 
        src="https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop" 
        alt="Space" 
        className="absolute inset-0 w-full h-full object-cover opacity-40 scale-110 group-hover:scale-125 transition-transform duration-1000 grayscale group-hover:grayscale-0"
      />
      <div className="relative z-10 text-[15rem] font-black text-white/5 italic select-none tracking-tighter">404</div>
    </div>
  </div>
);

// --- 5. The Terminal (Dev/Tech Style) ---
export const NotFoundTerminal = () => {
  const [text, setText] = useState('');
  const fullText = "> ERROR: 404_PAGE_NOT_FOUND\n> INITIATING_SEARCH_PROTOCOL...\n> [####################] 100%\n> SEARCH_FAILED.\n> CAUSE: SECTOR_CORRUPTED\n> SUGGESTION: REBOOT_TO_ROOT";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-[500px] w-full bg-slate-950 rounded-[3rem] p-12 font-mono flex flex-col justify-center items-center shadow-2xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#22c55e_0%,_transparent_70%)] opacity-5 transition-opacity duration-1000 group-hover:opacity-10"></div>
      
      <div className="w-full max-w-2xl bg-black/80 backdrop-blur-xl border-2 border-slate-800 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        {/* Terminal Header */}
        <div className="bg-slate-900 px-6 py-4 flex items-center justify-between border-b-2 border-slate-800">
          <div className="flex gap-2.5">
            <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.3)]"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.3)]"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.3)]"></div>
          </div>
          <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] italic">System_Console_v4.0.4</div>
        </div>
        {/* Terminal Body */}
        <div className="p-10 min-h-[250px] text-green-400/90 leading-relaxed text-sm">
          <pre className="whitespace-pre-wrap font-mono italic">
            {text}
            <span className="w-2 h-5 bg-green-500 inline-block ml-1 animate-pulse align-middle"></span>
          </pre>
          <div className="mt-12 pt-8 border-t-2 border-slate-900 flex justify-between items-center">
            <button className="px-8 py-3 bg-green-500/5 border-2 border-green-500/20 text-green-500 hover:bg-green-500 hover:text-black transition-all text-[10px] font-black uppercase tracking-widest italic rounded-xl">
              Execute: Home
            </button>
            <div className="text-[10px] text-slate-700 font-black uppercase italic">Identity: Guest_User</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 6. The Glassmorphism (Blurry Background) ---
export const NotFoundGlass = () => (
  <div className="relative min-h-[550px] w-full rounded-[3.5rem] overflow-hidden flex items-center justify-center group font-sans">
    {/* Animated Abstract Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 transition-transform duration-1000 group-hover:scale-110"></div>
    
    {/* Floating Orbs */}
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/30 rounded-full mix-blend-overlay filter blur-[100px] animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-300/20 rounded-full mix-blend-overlay filter blur-[120px] animate-pulse delay-700"></div>
    
    {/* Glass Card */}
    <div className="relative z-10 bg-white/10 backdrop-blur-[40px] border-2 border-white/20 p-20 rounded-[3rem] text-center shadow-[0_40px_100px_rgba(0,0,0,0.2)] max-w-lg mx-6 transition-all duration-700 group-hover:-translate-y-4 group-hover:bg-white/15">
      <div className="inline-block px-4 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-black text-white uppercase tracking-[0.4em] mb-10 italic">Discovery: Offline</div>
      
      <h1 className="text-9xl font-black text-white mb-6 drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)] tracking-tighter italic uppercase leading-none">404</h1>
      <h2 className="text-3xl font-black text-white mb-8 tracking-tight italic uppercase">Lost in the haze.</h2>
      <p className="text-white/60 mb-12 font-medium text-lg leading-relaxed italic max-w-xs mx-auto">The page you are looking for has evaporated into the digital atmosphere.</p>
      
      <button className="group/btn relative px-10 py-5 bg-white text-indigo-600 font-black rounded-2xl shadow-2xl hover:bg-indigo-50 transition-all uppercase tracking-[0.3em] text-[10px] italic leading-none overflow-hidden">
        <span className="relative z-10">Back to Clarity</span>
        <div className="absolute inset-0 bg-gradient-to-r from-white to-indigo-50 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
      </button>
    </div>
  </div>
);

// --- 7. The Cyberpunk (Glitch) ---
export const NotFoundCyberpunk = () => (
  <div className="min-h-[500px] w-full bg-slate-950 relative overflow-hidden rounded-[3rem] flex flex-col items-center justify-center border-4 border-cyan-500/30 p-12 group">
    {/* Animated Cyber Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(6,182,212,0.1)_2px,transparent_2px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] animate-[pulse_4s_infinite]"></div>
    
    <div className="relative z-10 text-center">
      <div className="inline-block px-4 py-1 bg-cyan-500 text-black font-black text-[10px] tracking-[0.4em] uppercase mb-10 skew-x-[-20deg] italic">Sector: 404_Unstable</div>
      
      <h1 className="text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-pink-500 relative inline-block mb-6 tracking-tighter italic leading-none animate-pulse">
        404
        <span className="absolute top-0 left-0 -ml-2 text-cyan-500 opacity-30 animate-pulse blur-sm" aria-hidden="true">404</span>
        <span className="absolute top-0 left-0 ml-2 text-pink-500 opacity-30 animate-pulse blur-sm" aria-hidden="true">404</span>
      </h1>
      
      <div className="bg-pink-600 text-white font-black px-6 py-2 inline-block skew-x-[-15deg] mb-12 shadow-[10px_10px_0px_0px_rgba(6,182,212,1)] uppercase italic tracking-widest text-lg">
        Critical Link Failure
      </div>
      
      <p className="text-cyan-400/70 font-black mb-12 max-w-md mx-auto uppercase italic tracking-widest leading-relaxed text-xs">
        The requested data packet has been intercepted or deleted from the neural network. 
      </p>
      
      <button className="relative px-12 py-5 bg-transparent border-4 border-cyan-500 text-cyan-400 font-black uppercase tracking-[0.4em] text-[10px] hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] transition-all italic leading-none group-hover:scale-105">
        Reboot Connection
      </button>
    </div>

    {/* Decorative Elements */}
    <div className="absolute top-10 right-10 flex flex-col gap-2 opacity-20">
      <div className="w-12 h-1 bg-cyan-500"></div>
      <div className="w-8 h-1 bg-pink-500"></div>
      <div className="w-16 h-1 bg-white"></div>
    </div>
  </div>
);

// --- 8. The Neumorphic (Soft UI) ---
export const NotFoundNeumorphic = () => (
  <div className="min-h-[550px] w-full bg-[#e0e5ec] rounded-[3.5rem] flex flex-col items-center justify-center p-12 font-sans group">
    <div className="w-80 h-80 rounded-full bg-[#e0e5ec] shadow-[30px_30px_60px_#bebebe,-30px_-30px_60px_#ffffff] flex flex-col items-center justify-center mb-16 transition-transform duration-700 group-hover:scale-105 group-hover:rotate-3">
      <div className="inline-block px-3 py-1 rounded-full shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff] text-[8px] font-black text-slate-400 uppercase tracking-widest mb-6 italic">Status: Lost</div>
      <span className="text-8xl font-black text-slate-300 drop-shadow-[2px_2px_2px_rgba(255,255,255,0.8)] italic tracking-tighter">404</span>
    </div>
    
    <div className="text-center px-12">
      <h2 className="text-3xl font-black text-slate-600 mb-4 tracking-tight italic uppercase">Soft Departure.</h2>
      <p className="text-slate-400 mb-12 font-medium italic max-w-sm mx-auto leading-relaxed text-lg">The destination you seek has gracefully drifted away from our current coordinates.</p>
      
      <button className="px-12 py-5 rounded-2xl bg-[#e0e5ec] text-indigo-500 font-black uppercase tracking-[0.3em] text-[10px] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] active:scale-95 transition-all italic leading-none">
        Return Home
      </button>
    </div>
  </div>
);

// --- 9. The Brutalist (Retro Bold) ---
export const NotFoundBrutalist = () => (
  <div className="min-h-[500px] w-full bg-yellow-400 border-[6px] border-black rounded-none p-12 flex flex-col justify-between relative overflow-hidden group shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-black text-black opacity-5 select-none pointer-events-none group-hover:scale-110 transition-transform duration-1000 italic">
      404
    </div>
    
    <div className="border-b-[6px] border-black pb-6 relative z-10">
      <h1 className="text-8xl font-black uppercase tracking-tighter italic leading-none">Dead End.</h1>
    </div>
    
    <div className="flex flex-col gap-6 max-w-lg z-10 mt-12">
      <div className="bg-white border-[6px] border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
        <p className="font-black text-2xl mb-4 italic tracking-tight uppercase">Status_Code: 404_NOT_FOUND</p>
        <p className="font-mono text-sm uppercase font-black italic">The requested object has been permanently relocated or never existed in the primary database.</p>
      </div>
      
      <button className="bg-black text-white font-black text-2xl py-6 px-10 border-[6px] border-transparent hover:bg-white hover:text-black hover:border-black transition-all uppercase italic shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] active:translate-x-2 active:translate-y-2 active:shadow-none">
        Back to Safety
      </button>
    </div>

    <div className="absolute bottom-6 right-6 font-black text-[10px] uppercase tracking-[0.5em] italic opacity-20">
      Node_Safety_Protocol_v9
    </div>
  </div>
);

// --- 10. The Search Bar (Helpful Recovery) ---
export const NotFoundSearch = () => (
  <div className="flex flex-col items-center justify-center min-h-[550px] w-full bg-slate-50 border border-slate-100 rounded-[3rem] p-16 group shadow-sm hover:shadow-2xl transition-all duration-500">
    <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center text-indigo-600 mb-10 group-hover:rotate-12 transition-transform duration-500 border border-slate-50">
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </div>
    
    <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter italic uppercase">Lost, But Not Gone.</h1>
    <p className="text-slate-400 mb-12 text-center max-w-md font-medium italic leading-relaxed text-lg">We couldn't find the exact page, but our index might have what you need. Let's try a quick search.</p>
    
    <div className="w-full max-w-xl relative mb-12">
      <input 
        type="text" 
        placeholder="WHAT ARE YOU LOOKING FOR?" 
        className="w-full pl-16 pr-8 py-6 rounded-2xl bg-white border-2 border-slate-100 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/5 outline-none transition-all shadow-xl shadow-slate-200/50 font-black text-sm tracking-widest placeholder-slate-300 italic"
      />
      <svg className="w-6 h-6 text-indigo-600 absolute left-6 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </div>
    
    <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] italic">
      <a href="#" className="hover:text-indigo-600 transition-colors border-b-2 border-transparent hover:border-indigo-600 pb-1">Main Deck</a>
      <a href="#" className="hover:text-indigo-600 transition-colors border-b-2 border-transparent hover:border-indigo-600 pb-1">Support Hub</a>
      <a href="#" className="hover:text-indigo-600 transition-colors border-b-2 border-transparent hover:border-indigo-600 pb-1">Sitemap</a>
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
        
        <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const NotFoundStandard = () => (
  <div className="flex flex-col items-center justify-center min-h-[500px] w-full bg-white p-12 text-center rounded-[3rem]">
    <div className="bg-indigo-50 text-indigo-600 rounded-[2rem] p-8 mb-10 shadow-inner">
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </div>
    <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter italic uppercase">Lost at Sea.</h1>
    <p className="text-slate-400 mb-12 max-w-sm font-medium italic leading-relaxed">The coordinates you provided led to an empty void. The page you are looking for has likely been decommissioned.</p>
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
      <button className="flex-1 px-8 py-4 bg-white border-2 border-slate-100 rounded-2xl text-slate-600 font-black uppercase tracking-widest text-[10px] italic transition-all">Go back</button>
      <button className="flex-1 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] italic transition-all shadow-xl shadow-indigo-100">Take me home</button>
    </div>
  </div>
);`} 
              htmlCode={`<div class="not-found-standard">
  <div class="icon-box">
    <svg width="64" height="64" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  </div>
  <h1>Lost at Sea.</h1>
  <p>The coordinates you provided led to an empty void. The page you are looking for has likely been decommissioned.</p>
  <div class="actions">
    <button class="secondary">Go back</button>
    <button class="primary">Take me home</button>
  </div>
</div>`} 
              cssCode={`.not-found-standard { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 500px; width: 100%; background: white; padding: 48px; text-align: center; font-family: sans-serif; border-radius: 48px; }
.icon-box { background: #eef2ff; color: #4f46e5; border-radius: 32px; padding: 32px; margin-bottom: 40px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05); }
h1 { font-size: 48px; font-weight: 900; color: #0f172a; margin-bottom: 16px; letter-spacing: -0.05em; font-style: italic; text-transform: uppercase; }
p { color: #94a3b8; margin-bottom: 48px; max-width: 384px; font-weight: 500; font-style: italic; line-height: 1.6; }
.actions { display: flex; gap: 16px; width: 100%; max-width: 320px; }
button { flex: 1; padding: 16px 32px; border-radius: 16px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; font-size: 10px; cursor: pointer; transition: 0.3s; font-style: italic; }
.primary { background: #4f46e5; color: white; border: none; box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.2); }
.primary:hover { background: #4338ca; }
.secondary { background: white; border: 2px solid #f1f5f9; color: #475569; }
.secondary:hover { border-color: #4f46e5; color: #4f46e5; }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-indigo-50 pb-6 italic leading-none"> 01. Standard SaaS Premium </span>
              <NotFoundStandard />
          </div>
        </section>

        <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const NotFoundMinimal = () => (
  <div className="flex flex-col justify-center min-h-[500px] w-full bg-white p-16 rounded-[3rem] relative overflow-hidden">
    <h1 className="text-[24rem] leading-none font-black text-slate-50 select-none absolute -right-24 -bottom-24 z-0 tracking-tighter transition-transform duration-1000 group-hover:scale-110 group-hover:-translate-x-12">404</h1>
    <div className="relative z-10">
      <div className="w-20 h-1.5 bg-indigo-600 mb-12"></div>
      <h2 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter italic uppercase leading-none">Null & Void.</h2>
      <p className="text-slate-400 mb-12 max-w-md text-xl font-medium italic lowercase leading-relaxed">The requested destination is logically unreachable within the current architectural scope.</p>
      <a href="#" className="inline-flex items-center gap-4 text-indigo-600 font-black uppercase tracking-[0.3em] text-xs italic">
        Return to Source
      </a>
    </div>
  </div>
);`} 
              htmlCode={`<div class="not-found-minimal">
  <div class="bg-text">404</div>
  <div class="content">
    <div class="line"></div>
    <h1>Null & Void.</h1>
    <p>The requested destination is logically unreachable within the current architectural scope.</p>
    <a href="#">Return to Source</a>
  </div>
</div>`} 
              cssCode={`.not-found-minimal { display: flex; flex-direction: column; justify-content: center; min-height: 500px; width: 100%; background: white; padding: 64px; border-radius: 48px; position: relative; overflow: hidden; font-family: sans-serif; }
.bg-text { position: absolute; right: -96px; bottom: -96px; font-size: 384px; font-weight: 900; color: #f8fafc; line-height: 1; letter-spacing: -0.05em; z-index: 0; pointer-events: none; }
.content { position: relative; z-index: 10; }
.line { width: 80px; height: 6px; background: #4f46e5; margin-bottom: 48px; }
h1 { font-size: 60px; font-weight: 900; color: #0f172a; margin-bottom: 24px; letter-spacing: -0.05em; font-style: italic; text-transform: uppercase; line-height: 1; }
p { font-size: 20px; color: #94a3b8; margin-bottom: 48px; max-width: 448px; font-weight: 500; font-style: italic; line-height: 1.6; text-transform: lowercase; }
a { display: inline-flex; align-items: center; gap: 16px; color: #4f46e5; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 12px; text-decoration: none; font-style: italic; transition: 0.3s; }
a:hover { letter-spacing: 0.4em; }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-indigo-50 pb-6 italic leading-none"> 02. Minimalist Typography Premium </span>
              <NotFoundMinimal />
          </div>
        </section>

        <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`import React, { useState } from 'react';

const NotFoundInteractive = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className={\`flex flex-col items-center justify-center min-h-[500px] w-full rounded-[3rem] transition-all duration-700 relative overflow-hidden \${isOn ? 'bg-indigo-50' : 'bg-slate-900'}\`}>
      <h1 className={\`text-[12rem] font-black mb-4 transition-all duration-700 tracking-tighter italic \${isOn ? 'text-indigo-600 scale-110 drop-shadow-2xl' : 'text-slate-800 scale-100 shadow-inner'}\`}>404</h1>
      <div className="relative z-10 text-center px-12">
        <p className={\`text-2xl font-black mb-12 transition-all duration-700 uppercase italic tracking-widest \${isOn ? 'text-indigo-900' : 'text-slate-400'}\`}>
          {isOn ? 'The light is on, but nobody home.' : 'Who turned out the lights?'}
        </p>
        <div className="relative inline-block cursor-pointer" onClick={() => setIsOn(!isOn)}>
          <div className={\`w-1 h-32 mx-auto transition-all duration-500 \${isOn ? 'bg-indigo-200' : 'bg-slate-700'}\`}></div>
          <div className={\`w-8 h-8 rounded-full border-4 transition-all duration-500 flex items-center justify-center \${isOn ? 'bg-white border-indigo-600 translate-y-0 shadow-[0_0_30px_rgba(79,70,229,0.4)]' : 'bg-slate-800 border-slate-600 translate-y-4 shadow-inner'}\`}>
             <div className={\`w-2 h-2 rounded-full transition-colors duration-500 \${isOn ? 'bg-indigo-600' : 'bg-slate-600'}\`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};`} 
              htmlCode={`<div class="not-found-interactive dark" id="interactive-container">
  <div class="ambient-glow"></div>
  <h1 class="main-title">404</h1>
  <div class="content">
    <p id="status-text">Who turned out the lights?</p>
    <div class="switch-system" onclick="toggleLight()">
      <div class="switch-wire"></div>
      <div class="switch-toggle">
        <div class="switch-knob"></div>
      </div>
    </div>
  </div>
  <div class="footer-status">Search Protocol: Failed</div>
</div>

<script>
  function toggleLight() {
    const container = document.getElementById('interactive-container');
    const text = document.getElementById('status-text');
    const isDark = container.classList.contains('dark');
    
    if (isDark) {
      container.classList.remove('dark');
      container.classList.add('light');
      text.innerText = 'The light is on, but nobody home.';
    } else {
      container.classList.remove('light');
      container.classList.add('dark');
      text.innerText = 'Who turned out the lights?';
    }
  }
</script>`} 
              cssCode={`.not-found-interactive { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 500px; width: 100%; border-radius: 48px; position: relative; overflow: hidden; transition: 0.7s; font-family: sans-serif; }
.not-found-interactive.dark { background: #0f172a; }
.not-found-interactive.light { background: #eef2ff; }
.ambient-glow { position: absolute; inset: 0; opacity: 0.1; transition: 0.7s; }
.light .ambient-glow { background: radial-gradient(circle at center, #4f46e5 0%, transparent 70%); }
.dark .ambient-glow { background: radial-gradient(circle at center, #ffffff 0%, transparent 70%); }
.main-title { font-size: 192px; font-weight: 900; margin-bottom: 16px; letter-spacing: -0.05em; font-style: italic; transition: 0.7s; z-index: 10; }
.dark .main-title { color: #1e293b; box-shadow: inset 0 0 20px rgba(0,0,0,0.2); }
.light .main-title { color: #4f46e5; text-shadow: 0 10px 40px rgba(79,70,229,0.3); transform: scale(1.1); }
p { font-size: 24px; font-weight: 900; margin-bottom: 48px; text-transform: uppercase; letter-spacing: 0.1em; font-style: italic; transition: 0.7s; z-index: 10; }
.dark p { color: #94a3b8; }
.light p { color: #312e81; }
.switch-system { position: relative; cursor: pointer; z-index: 10; }
.switch-wire { width: 4px; height: 128px; background: #334155; margin: 0 auto; transition: 0.5s; }
.light .switch-wire { background: #c7d2fe; }
.switch-toggle { width: 32px; height: 32px; border-radius: 50%; border: 4px solid #475569; background: #1e293b; margin: 0 auto; transition: 0.5s; transform: translateY(16px); display: flex; align-items: center; justify-content: center; }
.light .switch-toggle { background: white; border-color: #4f46e5; transform: translateY(0); box-shadow: 0 0 30px rgba(79,70,229,0.4); }
.switch-knob { width: 8px; height: 8px; border-radius: 50%; background: #475569; transition: 0.5s; }
.light .switch-knob { background: #4f46e5; }
.footer-status { position: absolute; bottom: 48px; text-transform: uppercase; font-size: 10px; font-weight: 900; letter-spacing: 0.5em; font-style: italic; transition: 0.7s; }
.dark .footer-status { color: #334155; opacity: 0.5; }
.light .footer-status { color: #818cf8; opacity: 1; }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-indigo-50 pb-6 italic leading-none"> 03. Interactive Switch Premium </span>
              <NotFoundInteractive />
          </div>
        </section>

        <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const NotFoundSplit = () => (
  <div className="flex flex-col lg:flex-row min-h-[500px] w-full bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm transition-all duration-500 group">
    <div className="w-full lg:w-1/2 p-16 flex flex-col justify-center bg-white relative z-10">
      <div className="flex items-center gap-4 mb-10 group/err">
        <div className="w-12 h-[2px] bg-indigo-600 transition-all duration-500"></div>
        <div className="text-indigo-600 font-black text-[10px] tracking-[0.4em] uppercase italic">System Error: 404</div>
      </div>
      <h1 className="text-7xl font-black text-slate-900 mb-6 tracking-tighter italic uppercase leading-[0.8]">Nowhere<br/>to be<br/>found.</h1>
      <p className="text-slate-400 mb-12 leading-relaxed italic font-medium text-lg max-w-sm">
        The requested resource has been purged from the active directory or migrated to a hidden sector.
      </p>
      <div className="flex gap-6 items-center">
        <button className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-100 italic">Initialize Jump</button>
        <a href="#" className="text-slate-400 hover:text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] italic transition-colors">Contact Cmd</a>
      </div>
    </div>
    <div className="w-full lg:w-1/2 bg-slate-900 relative overflow-hidden flex items-center justify-center">
      <img 
        src="https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop" 
        alt="Space" 
        className="absolute inset-0 w-full h-full object-cover opacity-40 scale-110 group-hover:scale-125 transition-transform duration-1000 grayscale group-hover:grayscale-0"
      />
      <div className="relative z-10 text-[15rem] font-black text-white/5 italic select-none tracking-tighter">404</div>
    </div>
  </div>
);`} 
              htmlCode={`<div class="not-found-split">
  <div class="text-side">
    <div class="err-badge">
      <div class="line"></div>
      <span>System Error: 404</span>
    </div>
    <h1>Nowhere to be found.</h1>
    <p>The requested resource has been purged from the active directory or migrated to a hidden sector.</p>
    <div class="actions">
      <button>Initialize Jump</button>
      <a href="#">Contact Cmd</a>
    </div>
  </div>
  <div class="image-side">
    <img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop" alt="Space">
    <div class="bg-404">404</div>
  </div>
</div>`} 
              cssCode={`.not-found-split { display: flex; min-height: 500px; width: 100%; background: white; border-radius: 48px; overflow: hidden; font-family: sans-serif; }
.text-side { width: 50%; padding: 64px; display: flex; flex-direction: column; justify-content: center; }
.err-badge { display: flex; align-items: center; gap: 16px; margin-bottom: 40px; }
.err-badge .line { width: 48px; height: 2px; background: #4f46e5; }
.err-badge span { color: #4f46e5; font-weight: 900; font-size: 10px; text-transform: uppercase; letter-spacing: 0.4em; font-style: italic; }
h1 { font-size: 72px; font-weight: 900; color: #0f172a; margin-bottom: 24px; letter-spacing: -0.05em; font-style: italic; text-transform: uppercase; line-height: 0.8; }
p { color: #94a3b8; margin-bottom: 48px; font-size: 18px; line-height: 1.6; font-style: italic; max-width: 384px; }
.actions { display: flex; align-items: center; gap: 24px; }
button { padding: 20px 40px; background: #4f46e5; color: white; border: none; border-radius: 16px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 10px; cursor: pointer; transition: 0.3s; font-style: italic; box-shadow: 0 20px 40px rgba(79,70,229,0.1); }
button:hover { background: #4338ca; }
a { color: #94a3b8; font-weight: 900; font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; text-decoration: none; font-style: italic; transition: 0.3s; }
a:hover { color: #4f46e5; }
.image-side { width: 50%; background: #0f172a; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; }
.image-side img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.4; filter: grayscale(100%); transition: 1s; }
.not-found-split:hover .image-side img { transform: scale(1.1); filter: grayscale(0); }
.bg-404 { position: relative; z-index: 10; font-size: 240px; font-weight: 900; color: rgba(255,255,255,0.05); font-style: italic; pointer-events: none; }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-indigo-50 pb-6 italic leading-none"> 04. Visual Split Premium </span>
              <NotFoundSplit />
          </div>
        </section>

        <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`import React, { useState, useEffect } from 'react';

const NotFoundTerminal = () => {
  const [text, setText] = useState('');
  const fullText = "> ERROR: 404_PAGE_NOT_FOUND\\n> INITIATING_SEARCH_PROTOCOL...\\n> [####################] 100%\\n> SEARCH_FAILED.\\n> CAUSE: SECTOR_CORRUPTED\\n> SUGGESTION: REBOOT_TO_ROOT";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-[500px] w-full bg-slate-950 p-12 font-mono flex flex-col justify-center items-center rounded-[3rem]">
      <div className="w-full max-w-2xl bg-black/80 backdrop-blur-xl border-2 border-slate-800 rounded-3xl overflow-hidden">
        <div className="bg-slate-900 px-6 py-4 flex items-center justify-between border-b-2 border-slate-800">
          <div className="flex gap-2.5">
            <div className="w-3.5 h-3.5 rounded-full bg-red-500/80"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-green-500/80"></div>
          </div>
          <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] italic">System_Console_v4.0.4</div>
        </div>
        <div className="p-10 min-h-[250px] text-green-400/90 leading-relaxed text-sm">
          <pre className="whitespace-pre-wrap font-mono italic">{text}<span className="w-2 h-5 bg-green-500 inline-block ml-1 animate-pulse align-middle"></span></pre>
          <div className="mt-12 pt-8 border-t-2 border-slate-900 flex justify-between items-center">
            <button className="px-8 py-3 bg-green-500/5 border-2 border-green-500/20 text-green-500 transition-all text-[10px] font-black uppercase tracking-widest italic rounded-xl">Execute: Home</button>
            <div className="text-[10px] text-slate-700 font-black uppercase italic">Identity: Guest_User</div>
          </div>
        </div>
      </div>
    </div>
  );
};`} 
              htmlCode={`<div class="terminal-container">
  <div class="terminal">
    <div class="terminal-header">
      <div class="dots">
        <span class="red"></span>
        <span class="yellow"></span>
        <span class="green"></span>
      </div>
      <div class="title">System_Console_v4.0.4</div>
    </div>
    <div class="terminal-body">
      <pre id="typewriter">> ERROR: 404_PAGE_NOT_FOUND
> INITIATING_SEARCH_PROTOCOL...
> [####################] 100%
> SEARCH_FAILED.
> CAUSE: SECTOR_CORRUPTED
> SUGGESTION: REBOOT_TO_ROOT</pre>
      <div class="footer">
        <button onclick="location.reload()">Execute: Home</button>
        <span class="id">Identity: Guest_User</span>
      </div>
    </div>
  </div>
</div>`} 
              cssCode={`.terminal-container { min-height: 500px; width: 100%; background: #020617; padding: 48px; display: flex; align-items: center; justify-content: center; border-radius: 48px; font-family: monospace; position: relative; overflow: hidden; }
.terminal-container::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at center, #22c55e 0%, transparent 70%); opacity: 0.05; }
.terminal { width: 100%; max-width: 672px; background: rgba(0,0,0,0.8); backdrop-filter: blur(20px); border: 2px solid #1e293b; border-radius: 24px; overflow: hidden; position: relative; z-index: 1; box-shadow: 0 0 50px rgba(0,0,0,0.5); }
.terminal-header { background: #0f172a; padding: 16px 24px; display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #1e293b; }
.dots { display: flex; gap: 10px; }
.dots span { width: 14px; height: 14px; border-radius: 50%; box-shadow: 0 0 10px rgba(0,0,0,0.3); }
.red { background: #ef4444; }
.yellow { background: #eab308; }
.green { background: #22c55e; }
.title { color: #64748b; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-style: italic; }
.terminal-body { padding: 40px; color: #4ade80; }
pre { white-space: pre-wrap; font-size: 14px; line-height: 1.6; font-style: italic; margin: 0; }
pre::after { content: '_'; animation: blink 1s infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
.footer { margin-top: 48px; padding-top: 32px; border-top: 2px solid #0f172a; display: flex; justify-content: space-between; align-items: center; }
button { padding: 12px 32px; background: rgba(34,197,94,0.05); border: 2px solid rgba(34,197,94,0.2); color: #22c55e; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; font-size: 10px; cursor: pointer; border-radius: 12px; font-style: italic; transition: 0.3s; }
button:hover { background: #22c55e; color: black; }
.id { color: #334155; font-size: 10px; font-weight: 900; text-transform: uppercase; font-style: italic; }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-indigo-50 pb-6 italic leading-none"> 05. Tech Terminal Premium </span>
              <NotFoundTerminal />
          </div>
        </section>

        <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const NotFoundGlass = () => (
  <div className="relative min-h-[550px] w-full rounded-[3.5rem] overflow-hidden flex items-center justify-center font-sans">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500"></div>
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/30 rounded-full mix-blend-overlay filter blur-[100px] animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-300/20 rounded-full mix-blend-overlay filter blur-[120px] animate-pulse"></div>
    
    <div className="relative z-10 bg-white/10 backdrop-blur-[40px] border-2 border-white/20 p-20 rounded-[3rem] text-center shadow-[0_40px_100px_rgba(0,0,0,0.2)] max-w-lg mx-6 transition-all duration-700 hover:bg-white/15">
      <div className="inline-block px-4 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-black text-white uppercase tracking-[0.4em] mb-10 italic">Discovery: Offline</div>
      <h1 className="text-9xl font-black text-white mb-6 tracking-tighter italic uppercase leading-none">404</h1>
      <h2 className="text-3xl font-black text-white mb-8 tracking-tight italic uppercase">Lost in the haze.</h2>
      <p className="text-white/60 mb-12 font-medium text-lg leading-relaxed italic max-w-xs mx-auto">The page you are looking for has evaporated into the digital atmosphere.</p>
      <button className="px-10 py-5 bg-white text-indigo-600 font-black rounded-2xl shadow-2xl hover:bg-indigo-50 transition-all uppercase tracking-[0.3em] text-[10px] italic">Back to Clarity</button>
    </div>
  </div>
);`} 
              htmlCode={`<div class="glass-container">
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="glass-card">
    <div class="badge">Discovery: Offline</div>
    <h1>404</h1>
    <h2>Lost in the haze.</h2>
    <p>The page you are looking for has evaporated into the digital atmosphere.</p>
    <button>Back to Clarity</button>
  </div>
</div>`} 
              cssCode={`.glass-container { position: relative; min-height: 550px; width: 100%; border-radius: 56px; overflow: hidden; display: flex; items-center; justify-content: center; background: linear-gradient(135deg, #4f46e5, #9333ea, #ec4899); font-family: sans-serif; }
.orb { position: absolute; border-radius: 50%; mix-blend-mode: overlay; filter: blur(100px); animation: pulse 4s infinite; }
.orb-1 { top: 25%; left: 25%; width: 256px; height: 256px; background: rgba(255,255,255,0.3); }
.orb-2 { bottom: 25%; right: 25%; width: 320px; height: 320px; background: rgba(249,168,212,0.2); animation-delay: 0.7s; }
.glass-card { position: relative; z-index: 10; background: rgba(255,255,255,0.1); backdrop-filter: blur(40px); border: 2px solid rgba(255,255,255,0.2); padding: 80px; border-radius: 48px; text-align: center; max-width: 512px; box-shadow: 0 40px 100px rgba(0,0,0,0.2); }
.badge { display: inline-block; padding: 4px 16px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 999px; font-size: 10px; font-weight: 900; color: white; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 40px; font-style: italic; }
h1 { font-size: 144px; font-weight: 900; color: white; margin-bottom: 24px; letter-spacing: -0.05em; font-style: italic; text-transform: uppercase; line-height: 1; }
h2 { font-size: 30px; font-weight: 900; color: white; margin-bottom: 32px; letter-spacing: -0.025em; font-style: italic; text-transform: uppercase; }
p { color: rgba(255,255,255,0.6); margin-bottom: 48px; font-size: 18px; line-height: 1.6; font-style: italic; max-width: 320px; margin-left: auto; margin-right: auto; }
button { padding: 20px 40px; background: white; color: #4f46e5; border: none; border-radius: 16px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 10px; cursor: pointer; transition: 0.3s; font-style: italic; box-shadow: 0 20px 50px rgba(0,0,0,0.2); }
button:hover { background: #f8fafc; transform: translateY(-2px); }
@keyframes pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.8; } }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-indigo-50 pb-6 italic leading-none"> 06. Glassmorphism Gloss Premium </span>
              <NotFoundGlass />
          </div>
        </section>

        <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const NotFoundCyberpunk = () => (
  <div className="min-h-[500px] w-full bg-slate-950 relative overflow-hidden rounded-[3rem] flex flex-col items-center justify-center border-4 border-cyan-500/30 p-12">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(6,182,212,0.1)_2px,transparent_2px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] animate-pulse"></div>
    <div className="relative z-10 text-center">
      <div className="inline-block px-4 py-1 bg-cyan-500 text-black font-black text-[10px] tracking-[0.4em] uppercase mb-10 skew-x-[-20deg] italic">Sector: 404_Unstable</div>
      <h1 className="text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-pink-500 relative inline-block mb-6 tracking-tighter italic leading-none">404</h1>
      <div className="bg-pink-600 text-white font-black px-6 py-2 inline-block skew-x-[-15deg] mb-12 shadow-[10px_10px_0px_0px_rgba(6,182,212,1)] uppercase italic tracking-widest text-lg">Critical Link Failure</div>
      <p className="text-cyan-400/70 font-black mb-12 max-w-md mx-auto uppercase italic tracking-widest leading-relaxed text-xs">The requested data packet has been intercepted or deleted from the neural network.</p>
      <button className="px-12 py-5 bg-transparent border-4 border-cyan-500 text-cyan-400 font-black uppercase tracking-[0.4em] text-[10px] hover:bg-cyan-500 hover:text-black transition-all italic leading-none">Reboot Connection</button>
    </div>
  </div>
);`} 
              htmlCode={`<div class="cyber-container">
  <div class="grid"></div>
  <div class="content">
    <div class="badge">Sector: 404_Unstable</div>
    <h1 class="glitch-404">404</h1>
    <div class="failure-tag">Critical Link Failure</div>
    <p>The requested data packet has been intercepted or deleted from the neural network.</p>
    <button>Reboot Connection</button>
  </div>
</div>`} 
              cssCode={`.cyber-container { min-height: 500px; width: 100%; background: #020617; position: relative; overflow: hidden; border-radius: 48px; border: 4px solid rgba(6,182,212,0.3); display: flex; items-center; justify-content: center; font-family: sans-serif; }
.grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(6,182,212,0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(6,182,212,0.1) 2px, transparent 2px); background-size: 50px 50px; mask-image: radial-gradient(ellipse at center, black, transparent 80%); }
.content { position: relative; z-index: 10; text-align: center; }
.badge { display: inline-block; padding: 4px 16px; background: #06b6d4; color: black; font-weight: 900; font-size: 10px; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 40px; transform: skewX(-20deg); font-style: italic; }
h1 { font-size: 192px; font-weight: 900; background: linear-gradient(to right, #22d3ee, #ffffff, #ec4899); -webkit-background-clip: text; color: transparent; margin-bottom: 24px; letter-spacing: -0.05em; font-style: italic; line-height: 1; }
.failure-tag { background: #db2777; color: white; padding: 8px 24px; display: inline-block; transform: skewX(-15deg); margin-bottom: 48px; box-shadow: 10px 10px 0px 0px #06b6d4; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; font-size: 18px; font-style: italic; }
p { color: rgba(6,182,212,0.7); font-weight: 900; margin-bottom: 48px; max-width: 384px; text-transform: uppercase; font-style: italic; letter-spacing: 0.2em; font-size: 12px; line-height: 1.6; margin-left: auto; margin-right: auto; }
button { padding: 20px 48px; background: transparent; border: 4px solid #06b6d4; color: #06b6d4; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; font-size: 10px; cursor: pointer; transition: 0.3s; font-style: italic; }
button:hover { background: #06b6d4; color: black; box-shadow: 0 0 50px rgba(6,182,212,0.6); }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-indigo-50 pb-6 italic leading-none"> 07. Cyber Glitch Premium </span>
              <NotFoundCyberpunk />
          </div>
        </section>

        <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const NotFoundNeumorphic = () => (
    <div className="w-80 h-80 rounded-full bg-[#e0e5ec] shadow-[30px_30px_60px_#bebebe,-30px_-30px_60px_#ffffff] flex flex-col items-center justify-center mb-16">
      <div className="inline-block px-3 py-1 rounded-full shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff] text-[8px] font-black text-slate-400 uppercase tracking-widest mb-6 italic">Status: Lost</div>
      <span className="text-8xl font-black text-slate-300 drop-shadow-[2px_2px_2px_rgba(255,255,255,0.8)] italic tracking-tighter">404</span>
    </div>
    <div className="text-center px-12">
      <h2 className="text-3xl font-black text-slate-600 mb-4 tracking-tight italic uppercase">Soft Departure.</h2>
      <p className="text-slate-400 mb-12 font-medium italic max-w-sm mx-auto leading-relaxed text-lg">The destination you seek has gracefully drifted away from our current coordinates.</p>
      <button className="px-12 py-5 rounded-2xl bg-[#e0e5ec] text-indigo-500 font-black uppercase tracking-[0.3em] text-[10px] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all italic leading-none">Return Home</button>
    </div>
  </div>
);`} 
              htmlCode={`<div class="neu-container">
  <div class="neu-circle">
    <div class="neu-badge">Status: Lost</div>
    <span>404</span>
  </div>
  <div class="content">
    <h2>Soft Departure.</h2>
    <p>The destination you seek has gracefully drifted away from our current coordinates.</p>
    <button>Return Home</button>
  </div>
</div>`} 
              cssCode={`.neu-container { min-height: 550px; width: 100%; background: #e0e5ec; border-radius: 56px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 48px; font-family: sans-serif; }
.neu-circle { width: 320px; height: 320px; border-radius: 50%; background: #e0e5ec; box-shadow: 30px 30px 60px #bebebe, -30px -30px 60px #ffffff; display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 64px; }
.neu-badge { display: inline-block; padding: 4px 12px; border-radius: 999px; box-shadow: inset 2px 2px 5px #bebebe, inset -2px -2px 5px #ffffff; font-size: 8px; font-weight: 900; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 24px; font-style: italic; }
.neu-circle span { font-size: 96px; font-weight: 900; color: #cbd5e1; font-style: italic; letter-spacing: -0.05em; text-shadow: 2px 2px 2px rgba(255,255,255,0.8); }
h2 { font-size: 30px; font-weight: 900; color: #475569; margin-bottom: 16px; letter-spacing: -0.025em; font-style: italic; text-transform: uppercase; }
p { color: #94a3b8; margin-bottom: 48px; font-size: 18px; line-height: 1.6; font-style: italic; max-width: 384px; margin-left: auto; margin-right: auto; }
button { padding: 20px 48px; background: #e0e5ec; color: #6366f1; border: none; border-radius: 16px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 10px; cursor: pointer; transition: 0.3s; font-style: italic; box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff; }
button:hover { box-shadow: inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff; }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-indigo-50 pb-6 italic leading-none"> 08. Soft UI Neumorphic Premium </span>
              <NotFoundNeumorphic />
          </div>
        </section>



        <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const NotFoundBrutalist = () => (
  <div className="min-h-[500px] w-full bg-yellow-400 border-[6px] border-black p-12 flex flex-col justify-between relative overflow-hidden shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-black text-black opacity-5 select-none pointer-events-none italic">404</div>
    <div className="border-b-[6px] border-black pb-6 relative z-10">
      <h1 className="text-8xl font-black uppercase tracking-tighter italic leading-none">Dead End.</h1>
    </div>
    <div className="flex flex-col gap-6 max-w-lg z-10 mt-12">
      <div className="bg-white border-[6px] border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <p className="font-black text-2xl mb-4 italic tracking-tight uppercase">Status_Code: 404_NOT_FOUND</p>
        <p className="font-mono text-sm uppercase font-black italic">The requested object has been permanently relocated or never existed in the primary database.</p>
      </div>
      <button className="bg-black text-white font-black text-2xl py-6 px-10 border-[6px] border-transparent hover:bg-white hover:text-black hover:border-black transition-all uppercase italic shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">Back to Safety</button>
    </div>
  </div>
);`} 
              htmlCode={`<div class="brutal-container">
  <div class="bg-404">404</div>
  <div class="header">
    <h1>Dead End.</h1>
  </div>
  <div class="card-stack">
    <div class="info-card">
      <p class="title">Status_Code: 404_NOT_FOUND</p>
      <p class="desc">The requested object has been permanently relocated or never existed in the primary database.</p>
    </div>
    <button>Back to Safety</button>
  </div>
</div>`} 
              cssCode={`.brutal-container { min-height: 500px; width: 100%; background: #facc15; border: 6px solid black; padding: 48px; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden; box-shadow: 20px 20px 0px 0px black; font-family: sans-serif; }
.bg-404 { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 400px; font-weight: 900; color: black; opacity: 0.05; font-style: italic; pointer-events: none; }
.header { border-bottom: 6px solid black; padding-bottom: 24px; position: relative; z-index: 10; }
h1 { font-size: 96px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.05em; font-style: italic; line-height: 1; margin: 0; }
.card-stack { display: flex; flex-direction: column; gap: 24px; max-width: 512px; position: relative; z-index: 10; margin-top: 48px; }
.info-card { background: white; border: 6px solid black; padding: 32px; box-shadow: 12px 12px 0px 0px black; }
.info-card .title { font-weight: 900; font-size: 24px; margin-bottom: 16px; font-style: italic; text-transform: uppercase; }
.info-card .desc { font-family: monospace; font-size: 14px; text-transform: uppercase; font-weight: 900; font-style: italic; }
button { background: black; color: white; font-weight: 900; font-size: 24px; padding: 24px 40px; border: 6px solid transparent; cursor: pointer; transition: 0.3s; text-transform: uppercase; font-style: italic; box-shadow: 12px 12px 0px 0px white; }
button:hover { background: white; color: black; border-color: black; box-shadow: none; transform: translate(12px, 12px); }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-indigo-50 pb-6 italic leading-none"> 09. Bold Brutalist Pop Premium </span>
              <NotFoundBrutalist />
          </div>
        </section>

        <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const NotFoundSearch = () => (
  <div className="flex flex-col items-center justify-center min-h-[550px] w-full bg-slate-50 border border-slate-100 rounded-[3rem] p-16 shadow-sm">
    <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center text-indigo-600 mb-10 border border-slate-50">
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </div>
    <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter italic uppercase">Lost, But Not Gone.</h1>
    <p className="text-slate-400 mb-12 text-center max-w-md font-medium italic leading-relaxed text-lg">We couldn't find the exact page, but our index might have what you need. Let's try a quick search.</p>
    <div className="w-full max-w-xl relative mb-12">
      <input type="text" placeholder="WHAT ARE YOU LOOKING FOR?" className="w-full pl-16 pr-8 py-6 rounded-2xl bg-white border-2 border-slate-100 focus:border-indigo-600 outline-none shadow-xl shadow-slate-200/50 font-black text-sm tracking-widest placeholder-slate-300 italic" />
      <svg className="w-6 h-6 text-indigo-600 absolute left-6 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </div>
    <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] italic">
      <a href="#" className="hover:text-indigo-600 transition-colors">Main Deck</a>
      <a href="#" className="hover:text-indigo-600 transition-colors">Support Hub</a>
      <a href="#" className="hover:text-indigo-600 transition-colors">Sitemap</a>
    </div>
  </div>
);`} 
              htmlCode={`<div class="search-recovery-container">
  <div class="icon-box">
    <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
  </div>
  <h1>Lost, But Not Gone.</h1>
  <p>We couldn't find the exact page, but our index might have what you need. Let's try a quick search.</p>
  <div class="search-box">
    <input type="text" placeholder="WHAT ARE YOU LOOKING FOR?">
    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
  </div>
  <div class="links">
    <a href="#">Main Deck</a>
    <a href="#">Support Hub</a>
    <a href="#">Sitemap</a>
  </div>
</div>`} 
              cssCode={`.search-recovery-container { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 550px; width: 100%; background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 48px; padding: 64px; font-family: sans-serif; }
.icon-box { width: 96px; height: 96px; background: white; border-radius: 24px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); display: flex; items-center; justify-content: center; color: #4f46e5; margin-bottom: 40px; border: 1px solid #f1f5f9; }
h1 { font-size: 48px; font-weight: 900; color: #0f172a; margin-bottom: 16px; letter-spacing: -0.05em; font-style: italic; text-transform: uppercase; }
p { color: #94a3b8; text-align: center; max-width: 448px; font-weight: 500; font-style: italic; font-size: 18px; line-height: 1.6; margin-bottom: 48px; }
.search-box { width: 100%; max-width: 576px; position: relative; margin-bottom: 48px; }
.search-box input { width: 100%; padding: 24px 32px 24px 64px; border-radius: 16px; background: white; border: 2px solid #f1f5f9; font-weight: 900; font-size: 14px; letter-spacing: 0.1em; font-style: italic; outline: none; transition: 0.3s; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05); }
.search-box input:focus { border-color: #4f46e5; box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.05); }
.search-box svg { position: absolute; left: 24px; top: 50%; transform: translateY(-50%); color: #4f46e5; }
.links { display: flex; gap: 32px; }
.links a { font-size: 10px; font-weight: 900; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.3em; text-decoration: none; font-style: italic; border-bottom: 2px solid transparent; padding-bottom: 4px; transition: 0.3s; }
.links a:hover { color: #4f46e5; border-color: #4f46e5; }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-indigo-50 pb-6 italic leading-none"> 10. Helpful Search Premium </span>
              <NotFoundSearch />
          </div>
        </section>

      </div>
    </div>
  );
};

export default NotFoundGallery;