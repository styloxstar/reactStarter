import React, { useState, useEffect } from 'react';
import CopyButton from '../CopyButton';

// --- 1. The Standard SaaS (Reassuring) ---
export const ServerStandard = () => (
  <div className="flex flex-col items-center justify-center min-h-[500px] w-full bg-white border border-slate-100 rounded-[3rem] p-12 text-center shadow-sm hover:shadow-2xl transition-all duration-500 group">
    <div className="bg-rose-50 text-rose-600 rounded-[2rem] p-8 mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-inner">
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    </div>
    <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter italic uppercase">Server Meltdown.</h1>
    <p className="text-slate-400 mb-12 max-w-sm font-medium italic leading-relaxed text-lg">Our central processor encountered a logic loop it couldn't resolve. We are currently rerouting resources.</p>
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
      <button onClick={() => window.location.reload()} className="flex-1 px-8 py-4 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 font-black uppercase tracking-widest text-[10px] transition-all shadow-xl shadow-slate-100 italic leading-none">Retry Connection</button>
      <button className="flex-1 px-8 py-4 bg-white border-2 border-slate-100 rounded-2xl text-slate-600 hover:border-rose-600 hover:text-rose-600 font-black uppercase tracking-widest text-[10px] transition-all italic leading-none">Support Portal</button>
    </div>
  </div>
);

// --- 2. The Terminal (Stack Trace) ---
export const ServerTerminal = () => {
  const [lines, setLines] = useState([
    "> INITIATING_CORE_DIAGNOSTICS...",
    "> ERROR: KERNEL_PANIC_AT_SECTOR_0x0500",
    "> DB_CONNECTION: REFUSED (ECONNREFUSED)",
    "> MEMORY_DUMP_COMPLETE.",
    "> SYSTEM_STATUS: CRITICAL_FAILURE",
    "> AWAITING_MANUAL_OVERRIDE..."
  ]);

  return (
    <div className="min-h-[500px] w-full bg-slate-950 rounded-[3rem] p-12 font-mono flex flex-col justify-center items-center shadow-2xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ef4444_0%,_transparent_70%)] opacity-5 transition-opacity duration-1000 group-hover:opacity-10"></div>
      
      <div className="w-full max-w-2xl bg-black/80 backdrop-blur-xl border-2 border-slate-800 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <div className="bg-slate-900 px-6 py-4 flex items-center justify-between border-b-2 border-slate-800">
          <div className="flex gap-2.5">
            <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.3)]"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.3)]"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.3)]"></div>
          </div>
          <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] italic">Internal_Debugger_v5.0.0</div>
        </div>
        <div className="p-10 min-h-[250px] text-red-400/90 leading-relaxed text-sm italic">
          {lines.map((line, i) => (
            <div key={i} className={`${i === lines.length - 1 ? 'text-red-500 font-black animate-pulse' : 'text-slate-400'} mb-2`}>
              {line}
            </div>
          ))}
          <div className="mt-12 pt-8 border-t-2 border-slate-900 flex justify-between items-center">
            <button onClick={() => window.location.reload()} className="px-8 py-3 bg-red-500/5 border-2 border-red-500/20 text-red-500 hover:bg-red-500 hover:text-black transition-all text-[10px] font-black uppercase tracking-widest italic rounded-xl">
              Force Reboot
            </button>
            <div className="text-[10px] text-slate-700 font-black uppercase italic tracking-widest">Code: 500_ISE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 3. The Minimalist (Typography) ---
export const ServerMinimal = () => (
  <div className="flex flex-col justify-center min-h-[500px] w-full bg-white p-16 border border-slate-100 rounded-[3rem] relative overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-700 text-center">
    <h1 className="text-[24rem] leading-none font-black text-slate-50 select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 tracking-tighter transition-transform duration-1000 group-hover:scale-110 italic">500</h1>
    <div className="relative z-10">
      <div className="w-20 h-1.5 bg-rose-600 mx-auto mb-12 group-hover:w-32 transition-all duration-700"></div>
      <h2 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter italic uppercase leading-none">Broken Logic.</h2>
      <p className="text-slate-400 mb-12 max-w-md mx-auto text-xl font-medium italic lowercase leading-relaxed">The server encountered an internal inconsistency it could not reconcile.</p>
      <a href="#" className="inline-flex items-center gap-4 text-rose-600 font-black uppercase tracking-[0.3em] text-xs group/link italic">
        Return to Safety
        <span className="w-8 h-[2px] bg-rose-600 group-hover/link:w-16 transition-all duration-500"></span>
      </a>
    </div>
  </div>
);

// --- 4. The Broken Connection (Visual) ---
export const ServerDisconnected = () => (
  <div className="flex flex-col items-center justify-center min-h-[500px] w-full bg-slate-900 border border-slate-800 rounded-[3rem] p-12 text-center shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#3b82f6_0%,_transparent_70%)] opacity-5 group-hover:opacity-10 transition-opacity"></div>
    
    <div className="relative z-10 bg-slate-800/50 backdrop-blur-xl border-2 border-slate-700 p-10 rounded-full mb-10 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700 shadow-2xl">
      <svg className="w-20 h-20 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
    </div>
    
    <h1 className="text-5xl font-black text-white mb-4 tracking-tighter italic uppercase z-10">Signal Lost.</h1>
    <p className="text-slate-400 mb-12 max-w-xs font-medium italic leading-relaxed text-lg z-10">The communication bridge between your client and our host has been severed.</p>
    
    <div className="flex gap-3 z-10 mb-12">
       <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
       <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping delay-300"></div>
       <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping delay-700"></div>
    </div>

    <button onClick={() => window.location.reload()} className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-blue-700 transition-all shadow-2xl shadow-blue-900/50 italic leading-none z-10">Re-establish Bridge</button>
  </div>
);

// --- 5. The Glassmorphism (Warning Style) ---
export const ServerGlass = () => (
  <div className="min-h-[500px] w-full relative rounded-[3rem] overflow-hidden flex items-center justify-center p-12 group shadow-sm hover:shadow-2xl transition-all duration-700">
    <div className="absolute inset-0 bg-gradient-to-br from-rose-600 via-orange-500 to-amber-500 animate-gradient-xy"></div>
    
    {/* Animated Blobs */}
    <div className="absolute top-0 -left-20 w-96 h-96 bg-white/20 rounded-full blur-[100px] animate-pulse"></div>
    <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-black/20 rounded-full blur-[100px]"></div>

    <div className="relative bg-white/10 backdrop-blur-2xl border-2 border-white/20 p-16 rounded-[3rem] shadow-2xl max-w-xl text-center transform transition-transform duration-700 group-hover:scale-[1.02]">
      <div className="text-white text-9xl font-black mb-4 opacity-20 italic leading-none absolute -top-10 left-1/2 -translate-x-1/2 select-none">500</div>
      <div className="relative z-10">
        <h3 className="text-white text-4xl font-black mb-6 tracking-tighter italic uppercase">Critical Breach.</h3>
        <p className="text-white/80 mb-10 font-medium italic text-lg leading-relaxed max-w-sm mx-auto">The internal integrity of the server has been compromised. We are initiating emergency protocols.</p>
        <button onClick={() => window.location.reload()} className="w-full py-5 bg-white text-rose-600 font-black rounded-2xl shadow-xl hover:bg-rose-50 transition-all uppercase tracking-[0.4em] text-[10px] italic leading-none">Emergency Reset</button>
      </div>
    </div>
  </div>
);

// --- 6. The Status Monitor (Functional) ---
export const ServerStatus = () => (
  <div className="min-h-[500px] w-full bg-slate-50 border border-slate-100 rounded-[3rem] p-12 flex flex-col justify-center items-center shadow-sm hover:shadow-2xl transition-all duration-500 group">
    <div className="w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
      <div className="p-10 text-center border-b border-slate-50 bg-slate-50/50">
        <h2 className="text-2xl font-black text-slate-900 tracking-tighter italic uppercase">Core Node Status</h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] italic">Last Check: 0.02s ago</p>
        </div>
      </div>
      <div className="p-10 space-y-8">
        <div className="flex justify-between items-center group/item">
          <span className="text-xs font-black text-slate-500 uppercase tracking-widest italic transition-colors group-hover/item:text-slate-900">Application API</span>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest italic">Outage detected</span>
            <div className="w-12 h-6 bg-rose-50 rounded-full flex items-center px-1 shadow-inner">
              <div className="w-4 h-4 bg-rose-600 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center group/item">
          <span className="text-xs font-black text-slate-500 uppercase tracking-widest italic transition-colors group-hover/item:text-slate-900">Postgres Cluster</span>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest italic">Stable</span>
            <div className="w-12 h-6 bg-emerald-50 rounded-full flex items-center justify-end px-1 shadow-inner">
              <div className="w-4 h-4 bg-emerald-600 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center group/item">
          <span className="text-xs font-black text-slate-500 uppercase tracking-widest italic transition-colors group-hover/item:text-slate-900">Redis Cache</span>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest italic">Degraded</span>
            <div className="w-12 h-6 bg-amber-50 rounded-full flex items-center justify-center px-1 shadow-inner">
              <div className="w-4 h-4 bg-amber-600 rounded-full translate-x-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 bg-slate-950 text-center">
         <a href="#" className="text-[10px] text-white font-black uppercase tracking-[0.4em] italic hover:text-rose-400 transition-colors">Global Network Status →</a>
      </div>
    </div>
    <p className="mt-10 text-slate-400 font-black uppercase tracking-widest text-[9px] italic">Engineering team has been dispatched.</p>
  </div>
);

// --- 7. The Cyberpunk (Critical Failure) ---
export const ServerCyber = () => (
  <div className="min-h-[500px] w-full bg-slate-950 relative rounded-[3rem] overflow-hidden flex flex-col items-center justify-center border-4 border-rose-600/30 p-12 shadow-2xl group">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(225,29,72,0.1)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(225,29,72,0.1)_1.5px,transparent_1.5px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
    
    <div className="relative z-10 text-center">
      <div className="inline-block border-2 border-rose-600 bg-rose-600/10 text-rose-600 px-6 py-2 font-black text-[10px] tracking-[0.5em] uppercase mb-10 skew-x-[-15deg] italic animate-pulse">
        CRITICAL_NODE_FAILURE
      </div>
      
      <h1 className="text-[12rem] font-black text-white relative mb-4 italic leading-none tracking-tighter" style={{textShadow: "10px 10px 0px #e11d48, -2px -2px 0px #22d3ee"}}>
        500
      </h1>
      
      <div className="bg-rose-600 text-white font-black text-2xl px-6 py-2 mb-12 skew-x-[-10deg] inline-block shadow-[8px_8px_0px_0px_#22d3ee] uppercase italic tracking-widest">
        SYSTEM_OVERLOAD_DETECTED
      </div>
      
      <p className="text-rose-400 font-black text-xs max-w-md mx-auto mb-12 uppercase italic tracking-[0.3em] leading-relaxed">
        ERROR_STAMP: 0x500_ISE <br/>
        Core dump initiated. Connection protocols terminated.
      </p>
      
      <button onClick={() => window.location.reload()} className="px-12 py-5 bg-transparent border-4 border-rose-600 text-rose-600 font-black text-[10px] hover:bg-rose-600 hover:text-white transition-all uppercase tracking-[0.5em] italic leading-none group-hover:shadow-[0_0_50px_rgba(225,29,72,0.5)]">
        [ EXECUTE_SYSTEM_RELOAD ]
      </button>
    </div>
  </div>
);

// --- 8. The Neumorphic (Pressed) ---
export const ServerNeumorphic = () => (
  <div className="min-h-[500px] w-full bg-[#e0e5ec] rounded-[3rem] flex flex-col items-center justify-center p-12 shadow-sm hover:shadow-2xl transition-all duration-700 group">
    <div className="w-72 h-72 rounded-full bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex items-center justify-center mb-16 transform group-hover:scale-105 transition-transform duration-700 relative">
      <div className="absolute inset-8 rounded-full shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff]"></div>
      <div className="text-center relative z-10">
         <div className="text-7xl font-black text-rose-400 italic tracking-tighter drop-shadow-sm">500</div>
         <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em] italic mt-2">Error_State</div>
      </div>
    </div>
    
    <h2 className="text-4xl font-black text-slate-600 mb-4 tracking-tighter italic uppercase">Deep Trouble.</h2>
    <p className="text-slate-400 mb-12 font-medium italic text-lg leading-relaxed max-w-xs text-center">The architecture is experiencing a structural logic failure.</p>
    
    <div className="flex gap-6">
      <button className="px-10 py-5 rounded-2xl bg-[#e0e5ec] text-slate-600 font-black uppercase tracking-[0.3em] text-[10px] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all italic leading-none">Diagnostic Log</button>
       <button onClick={() => window.location.reload()} className="px-10 py-5 rounded-2xl bg-[#e0e5ec] text-rose-500 font-black uppercase tracking-[0.3em] text-[10px] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all italic leading-none">Retry Hook</button>
    </div>
  </div>
);

// --- 9. The Brutalist (Urgent) ---
export const ServerBrutalist = () => (
  <div className="min-h-[500px] w-full bg-rose-600 border-[6px] border-black p-12 flex flex-col justify-center items-center relative overflow-hidden shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] group">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(black 3px, transparent 3px)', backgroundSize: '30px 30px'}}></div>
    <div className="absolute -right-20 -top-20 w-80 h-80 bg-yellow-400 border-[6px] border-black rotate-12 group-hover:rotate-45 transition-transform duration-700"></div>
    
    <div className="bg-white border-[6px] border-black p-12 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] max-w-2xl w-full text-center relative z-10 transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform">
      <h1 className="text-9xl font-black mb-4 italic tracking-tighter leading-none">500.</h1>
      <div className="bg-black text-white text-2xl font-black p-4 mb-8 uppercase italic tracking-widest">
        Internal Server Outage
      </div>
      <p className="font-black text-xl mb-12 italic uppercase leading-tight">
        The system has encountered a structural failure. Fix is in progress.
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <button onClick={() => window.location.reload()} className="flex-1 py-6 bg-yellow-400 border-[6px] border-black font-black text-xl hover:bg-yellow-300 transition-all uppercase italic shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
          Force Refresh
        </button>
        <button className="flex-1 py-6 bg-white border-[6px] border-black font-black text-xl hover:bg-slate-100 transition-all uppercase italic shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
          Abort Session
        </button>
      </div>
    </div>
  </div>
);

// --- 10. The Code Editor (Dev Focus) ---
export const ServerCode = () => (
  <div className="min-h-[500px] w-full bg-[#0d1117] rounded-[3rem] overflow-hidden flex flex-col font-mono text-sm shadow-2xl border-2 border-slate-800 group">
    {/* Editor Header */}
    <div className="bg-[#161b22] px-8 py-5 flex items-center justify-between border-b-2 border-slate-800">
      <div className="flex items-center gap-6">
        <div className="flex gap-2.5">
          <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] italic">server_exception.handler</div>
      </div>
      <div className="text-[10px] text-rose-500 font-black uppercase tracking-widest italic animate-pulse">Error: 500_INTERNAL_SERVER_ERROR</div>
    </div>
    
    {/* Editor Body */}
    <div className="flex-1 p-12 text-[#e6edf3] overflow-hidden relative">
      <div className="flex gap-8">
        <div className="text-[#484f58] text-right select-none font-black italic">
          01<br/>02<br/>03<br/>04<br/>05<br/>06<br/>07<br/>08
        </div>
        <div className="leading-relaxed italic">
          <span className="text-[#ff7b72]">async function</span> <span className="text-[#d2a8ff]">requestHandler</span>(req, res) {'{'} <br/>
          &nbsp;&nbsp;<span className="text-[#ff7b72]">try</span> {'{'} <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ff7b72]">await</span> <span className="text-[#d2a8ff]">processData</span>(req.body);<br/>
          &nbsp;&nbsp;{'}'} <span className="text-[#ff7b72]">catch</span> (err) {'{'} <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#8b949e]">/* Critical logic failure at runtime */</span><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ff7b72]">return</span> res.<span className="text-[#d2a8ff]">status</span>(<span className="text-[#a5d6ff]">500</span>).<span className="text-[#d2a8ff]">render</span>(<span className="text-[#a5d6ff]">"emergency_reset"</span>);<br/>
          &nbsp;&nbsp;{'}'}<br/>
          {'}'}
        </div>
      </div>
      
      <div className="mt-16 flex items-center gap-8 border-t-2 border-slate-800/50 pt-10">
        <button className="bg-[#238636] text-white px-10 py-5 rounded-2xl hover:bg-[#2ea043] transition-all flex items-center gap-4 font-black uppercase tracking-[0.2em] text-[10px] italic shadow-xl shadow-emerald-950/20">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Initialize Diagnostics
        </button>
        <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] italic">v1.2.0-stable (deprecated)</span>
      </div>
    </div>
  </div>
);


// --- Main Gallery ---
const InternalServer = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">500 Server Error Pages</h1>
        <p className="text-slate-500">Components designed to handle system failures gracefully.</p>
      </div>
      
      <div className="space-y-24 max-w-5xl mx-auto">
        
        <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const ServerStandard = () => (
  <div className="flex flex-col items-center justify-center min-h-[500px] w-full bg-white p-12 text-center rounded-[3rem]">
    <div className="bg-rose-50 text-rose-600 rounded-[2rem] p-8 mb-10 shadow-inner">
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    </div>
    <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter italic uppercase">Server Meltdown.</h1>
    <p className="text-slate-400 mb-12 max-w-sm font-medium italic leading-relaxed text-lg">Our central processor encountered a logic loop it couldn't resolve. We are currently rerouting resources.</p>
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
      <button onClick={() => window.location.reload()} className="flex-1 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] italic shadow-xl shadow-slate-100">Retry Connection</button>
      <button className="flex-1 px-8 py-4 bg-white border-2 border-slate-100 rounded-2xl text-slate-600 font-black uppercase tracking-widest text-[10px] italic">Support Portal</button>
    </div>
  </div>
);`} 
              htmlCode={`<div class="server-standard">
  <div class="icon-box">
    <svg width="64" height="64" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  </div>
  <h1>Server Meltdown.</h1>
  <p>Our central processor encountered a logic loop it couldn't resolve. We are currently rerouting resources.</p>
  <div class="actions">
    <button class="primary" onclick="location.reload()">Retry Connection</button>
    <button class="secondary">Support Portal</button>
  </div>
</div>`} 
              cssCode={`.server-standard { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 500px; width: 100%; background: white; padding: 48px; text-align: center; font-family: sans-serif; border-radius: 48px; }
.icon-box { background: #fff1f2; color: #e11d48; border-radius: 32px; padding: 32px; margin-bottom: 40px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05); }
h1 { font-size: 48px; font-weight: 900; color: #0f172a; margin-bottom: 16px; letter-spacing: -0.05em; font-style: italic; text-transform: uppercase; }
p { color: #94a3b8; margin-bottom: 48px; max-width: 384px; font-weight: 500; font-style: italic; line-height: 1.6; font-size: 18px; }
.actions { display: flex; gap: 16px; width: 100%; max-width: 320px; }
button { flex: 1; padding: 16px 32px; border-radius: 16px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; font-size: 10px; cursor: pointer; transition: 0.3s; font-style: italic; }
.primary { background: #0f172a; color: white; border: none; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1); }
.primary:hover { background: #1e293b; }
.secondary { background: white; border: 2px solid #f1f5f9; color: #475569; }
.secondary:hover { border-color: #e11d48; color: #e11d48; }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-rose-50 pb-6 italic leading-none"> 01. Standard SaaS Premium </span>
              <ServerStandard />
          </div>
        </section>

        <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`import React, { useState } from 'react';

const ServerTerminal = () => {
  const [lines] = useState([
    "> INITIATING_CORE_DIAGNOSTICS...",
    "> ERROR: KERNEL_PANIC_AT_SECTOR_0x0500",
    "> DB_CONNECTION: REFUSED (ECONNREFUSED)",
    "> MEMORY_DUMP_COMPLETE.",
    "> SYSTEM_STATUS: CRITICAL_FAILURE",
    "> AWAITING_MANUAL_OVERRIDE..."
  ]);

  return (
    <div className="min-h-[500px] w-full bg-slate-950 p-12 font-mono flex flex-col justify-center items-center rounded-[3rem]">
      <div className="w-full max-w-2xl bg-black/80 backdrop-blur-xl border-2 border-slate-800 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <div className="bg-slate-900 px-6 py-4 flex items-center justify-between border-b-2 border-slate-800">
          <div className="flex gap-2.5">
            <div className="w-3.5 h-3.5 rounded-full bg-red-500/80"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-green-500/80"></div>
          </div>
          <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] italic">Internal_Debugger_v5.0.0</div>
        </div>
        <div className="p-10 min-h-[250px] text-red-400/90 leading-relaxed text-sm italic">
          {lines.map((line, i) => (
            <div key={i} className={\`\${i === lines.length - 1 ? 'text-red-500 font-black animate-pulse' : 'text-slate-400'} mb-2\`}>
              {line}
            </div>
          ))}
          <div className="mt-12 pt-8 border-t-2 border-slate-900 flex justify-between items-center">
            <button onClick={() => window.location.reload()} className="px-8 py-3 bg-red-500/5 border-2 border-red-500/20 text-red-500 hover:bg-red-500 hover:text-black transition-all text-[10px] font-black uppercase tracking-widest italic rounded-xl">Force Reboot</button>
            <div className="text-[10px] text-slate-700 font-black uppercase italic tracking-widest">Code: 500_ISE</div>
          </div>
        </div>
      </div>
    </div>
  );
};`} 
              htmlCode={`<div class="server-terminal-container">
  <div class="terminal-window">
    <div class="terminal-header">
      <div class="dots">
        <span class="red"></span>
        <span class="yellow"></span>
        <span class="green"></span>
      </div>
      <div class="title">Internal_Debugger_v5.0.0</div>
    </div>
    <div class="terminal-body">
      <div class="log">> INITIATING_CORE_DIAGNOSTICS...</div>
      <div class="log">> ERROR: KERNEL_PANIC_AT_SECTOR_0x0500</div>
      <div class="log">> DB_CONNECTION: REFUSED (ECONNREFUSED)</div>
      <div class="log">> MEMORY_DUMP_COMPLETE.</div>
      <div class="log">> SYSTEM_STATUS: CRITICAL_FAILURE</div>
      <div class="log fatal">> AWAITING_MANUAL_OVERRIDE...</div>
      <div class="footer">
        <button onclick="location.reload()">Force Reboot</button>
        <span class="code">Code: 500_ISE</span>
      </div>
    </div>
  </div>
</div>`} 
              cssCode={`.server-terminal-container { min-height: 500px; width: 100%; background: #020617; padding: 48px; display: flex; align-items: center; justify-content: center; border-radius: 48px; font-family: monospace; position: relative; overflow: hidden; }
.server-terminal-container::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at center, #ef4444 0%, transparent 70%); opacity: 0.05; }
.terminal-window { width: 100%; max-width: 672px; background: rgba(0,0,0,0.8); backdrop-filter: blur(20px); border: 2px solid #1e293b; border-radius: 24px; overflow: hidden; position: relative; z-index: 1; box-shadow: 0 0 50px rgba(0,0,0,0.5); }
.terminal-header { background: #0f172a; padding: 16px 24px; display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #1e293b; }
.dots { display: flex; gap: 10px; }
.dots span { width: 14px; height: 14px; border-radius: 50%; box-shadow: 0 0 10px rgba(0,0,0,0.3); }
.red { background: #ef4444; }
.yellow { background: #eab308; }
.green { background: #22c55e; }
.title { color: #64748b; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-style: italic; }
.terminal-body { padding: 40px; color: #f87171; }
.log { font-size: 14px; line-height: 1.6; font-style: italic; margin-bottom: 8px; color: #94a3b8; }
.fatal { color: #ef4444; font-weight: 900; animation: blink 1s infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
.footer { margin-top: 48px; padding-top: 32px; border-top: 2px solid #0f172a; display: flex; justify-content: space-between; align-items: center; }
button { padding: 12px 32px; background: rgba(239,68,68,0.05); border: 2px solid rgba(239,68,68,0.2); color: #ef4444; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; font-size: 10px; cursor: pointer; border-radius: 12px; font-style: italic; transition: 0.3s; }
button:hover { background: #ef4444; color: black; }
.code { color: #334155; font-size: 10px; font-weight: 900; text-transform: uppercase; font-style: italic; letter-spacing: 0.2em; }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-rose-50 pb-6 italic leading-none"> 02. Terminal Debugger Premium </span>
              <ServerTerminal />
          </div>
        </section>

        <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const ServerMinimal = () => (
  <div className="flex flex-col justify-center min-h-[500px] w-full bg-white p-16 rounded-[3rem] relative overflow-hidden group text-center">
    <h1 className="text-[24rem] leading-none font-black text-slate-50 select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 tracking-tighter transition-transform duration-1000 group-hover:scale-110 italic">500</h1>
    <div className="relative z-10">
      <div className="w-20 h-1.5 bg-rose-600 mx-auto mb-12 group-hover:w-32 transition-all duration-700"></div>
      <h2 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter italic uppercase leading-none">Broken Logic.</h2>
      <p className="text-slate-400 mb-12 max-w-md mx-auto text-xl font-medium italic lowercase leading-relaxed">The server encountered an internal inconsistency it could not reconcile.</p>
      <a href="#" className="inline-flex items-center gap-4 text-rose-600 font-black uppercase tracking-[0.3em] text-xs group/link italic">
        Return to Safety
        <span className="w-8 h-[2px] bg-rose-600 group-hover/link:w-16 transition-all duration-500"></span>
      </a>
    </div>
  </div>
);`} 
              htmlCode={`<div class="server-minimal">
  <div class="bg-text">500</div>
  <div class="content">
    <div class="line"></div>
    <h1>Broken Logic.</h1>
    <p>The server encountered an internal inconsistency it could not reconcile.</p>
    <a href="#">Return to Safety</a>
  </div>
</div>`} 
              cssCode={`.server-minimal { display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 500px; width: 100%; background: white; padding: 64px; border-radius: 48px; position: relative; overflow: hidden; font-family: sans-serif; text-align: center; }
.bg-text { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); font-size: 384px; font-weight: 900; color: #f8fafc; line-height: 1; letter-spacing: -0.05em; z-index: 0; pointer-events: none; font-style: italic; }
.content { position: relative; z-index: 10; }
.line { width: 80px; height: 6px; background: #e11d48; margin: 0 auto 48px; transition: 0.7s; }
h1 { font-size: 60px; font-weight: 900; color: #0f172a; margin-bottom: 24px; letter-spacing: -0.05em; font-style: italic; text-transform: uppercase; line-height: 1; }
p { font-size: 20px; color: #94a3b8; margin-bottom: 48px; max-width: 448px; font-weight: 500; font-style: italic; line-height: 1.6; text-transform: lowercase; }
a { display: inline-flex; align-items: center; gap: 16px; color: #e11d48; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 12px; text-decoration: none; font-style: italic; transition: 0.3s; }
a:hover { letter-spacing: 0.4em; }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-rose-50 pb-6 italic leading-none"> 03. Minimalist Typography Premium </span>
              <ServerMinimal />
          </div>
        </section>

        <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const ServerDisconnected = () => (
  <div className="flex flex-col items-center justify-center min-h-[500px] w-full bg-slate-900 border border-slate-800 rounded-[3rem] p-12 text-center shadow-sm relative overflow-hidden group">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#3b82f6_0%,_transparent_70%)] opacity-5 group-hover:opacity-10 transition-opacity"></div>
    <div className="relative z-10 bg-slate-800/50 backdrop-blur-xl border-2 border-slate-700 p-10 rounded-full mb-10 shadow-2xl">
      <svg className="w-20 h-20 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
    </div>
    <h1 className="text-5xl font-black text-white mb-4 tracking-tighter italic uppercase z-10">Signal Lost.</h1>
    <p className="text-slate-400 mb-12 max-w-xs font-medium italic leading-relaxed text-lg z-10">The communication bridge between your client and our host has been severed.</p>
    <div className="flex gap-3 z-10 mb-12">
       <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
       <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping delay-300"></div>
       <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping delay-700"></div>
    </div>
    <button onClick={() => window.location.reload()} className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-blue-700 transition-all shadow-2xl shadow-blue-900/50 italic leading-none z-10">Re-establish Bridge</button>
  </div>
);`} 
              htmlCode={`<div class="server-disconnected">
  <div class="glow"></div>
  <div class="icon-circle">
    <svg width="80" height="80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
  </div>
  <h1>Signal Lost.</h1>
  <p>The communication bridge between your client and our host has been severed.</p>
  <div class="status-dots">
    <div class="dot"></div>
    <div class="dot d-2"></div>
    <div class="dot d-3"></div>
  </div>
  <button onclick="location.reload()">Re-establish Bridge</button>
</div>`} 
              cssCode={`.server-disconnected { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 500px; width: 100%; background: #0f172a; border-radius: 48px; padding: 48px; text-align: center; position: relative; overflow: hidden; font-family: sans-serif; }
.glow { position: absolute; inset: 0; background: radial-gradient(circle at center, #3b82f6 0%, transparent 70%); opacity: 0.05; }
.icon-circle { position: relative; z-index: 10; background: rgba(30, 41, 59, 0.5); backdrop-filter: blur(20px); border: 2px solid #334155; padding: 40px; border-radius: 50%; margin-bottom: 40px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); color: #3b82f6; }
h1 { font-size: 48px; font-weight: 900; color: white; margin-bottom: 16px; letter-spacing: -0.05em; font-style: italic; text-transform: uppercase; position: relative; z-index: 10; }
p { color: #94a3b8; margin-bottom: 48px; max-width: 320px; font-weight: 500; font-style: italic; line-height: 1.6; font-size: 18px; position: relative; z-index: 10; }
.status-dots { display: flex; gap: 12px; margin-bottom: 48px; position: relative; z-index: 10; }
.dot { width: 12px; height: 12px; background: #3b82f6; border-radius: 50%; animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; }
.d-2 { animation-delay: 0.3s; }
.d-3 { animation-delay: 0.7s; }
@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }
button { position: relative; z-index: 10; padding: 20px 40px; background: #2563eb; color: white; border: none; border-radius: 16px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 10px; cursor: pointer; transition: 0.3s; font-style: italic; box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
button:hover { background: #1d4ed8; transform: translateY(-2px); }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-rose-50 pb-6 italic leading-none"> 04. Disconnected Visual Premium </span>
              <ServerDisconnected />
          </div>
        </section>

        <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const ServerGlass = () => (
  <div className="min-h-[500px] w-full relative rounded-[3rem] overflow-hidden flex items-center justify-center p-12 group shadow-sm hover:shadow-2xl transition-all duration-700">
    <div className="absolute inset-0 bg-gradient-to-br from-rose-600 via-orange-500 to-amber-500 animate-gradient-xy"></div>
    <div className="absolute top-0 -left-20 w-96 h-96 bg-white/20 rounded-full blur-[100px] animate-pulse"></div>
    <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-black/20 rounded-full blur-[100px]"></div>
    <div className="relative bg-white/10 backdrop-blur-2xl border-2 border-white/20 p-16 rounded-[3rem] shadow-2xl max-w-xl text-center transition-transform duration-700 group-hover:scale-[1.02]">
      <div className="text-white text-9xl font-black mb-4 opacity-20 italic leading-none absolute -top-10 left-1/2 -translate-x-1/2 select-none">500</div>
      <div className="relative z-10">
        <h3 className="text-white text-4xl font-black mb-6 tracking-tighter italic uppercase">Critical Breach.</h3>
        <p className="text-white/80 mb-10 font-medium italic text-lg leading-relaxed max-w-sm mx-auto">The internal integrity of the server has been compromised. We are initiating emergency protocols.</p>
        <button onClick={() => window.location.reload()} className="w-full py-5 bg-white text-rose-600 font-black rounded-2xl shadow-xl hover:bg-rose-50 transition-all uppercase tracking-[0.4em] text-[10px] italic leading-none">Emergency Reset</button>
      </div>
    </div>
  </div>
);`} 
              htmlCode={`<div class="server-glass">
  <div class="bg-gradient"></div>
  <div class="blob-1"></div>
  <div class="blob-2"></div>
  <div class="glass-card">
    <div class="bg-text">500</div>
    <div class="content">
      <h1>Critical Breach.</h1>
      <p>The internal integrity of the server has been compromised. We are initiating emergency protocols.</p>
      <button onclick="location.reload()">Emergency Reset</button>
    </div>
  </div>
</div>`} 
              cssCode={`.server-glass { position: relative; min-height: 500px; width: 100%; border-radius: 48px; overflow: hidden; display: flex; align-items: center; justify-content: center; padding: 48px; font-family: sans-serif; }
.bg-gradient { position: absolute; inset: 0; background: linear-gradient(-45deg, #e11d48, #f97316, #f59e0b); background-size: 400% 400%; animation: gradient 15s ease infinite; }
@keyframes gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
.blob-1 { position: absolute; top: -80px; left: -80px; width: 384px; height: 384px; background: rgba(255,255,255,0.2); border-radius: 50%; filter: blur(100px); animation: pulse 4s infinite; }
.blob-2 { position: absolute; bottom: -80px; right: -80px; width: 384px; height: 384px; background: rgba(0,0,0,0.2); border-radius: 50%; filter: blur(100px); }
.glass-card { position: relative; background: rgba(255,255,255,0.1); backdrop-filter: blur(40px); border: 2px solid rgba(255,255,255,0.2); padding: 64px; border-radius: 48px; text-align: center; max-width: 576px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
.bg-text { position: absolute; -top: 40px; left: 50%; transform: translateX(-50%); font-size: 144px; font-weight: 900; color: white; opacity: 0.1; font-style: italic; line-height: 1; pointer-events: none; }
h1 { color: white; font-size: 36px; font-weight: 900; margin-bottom: 24px; letter-spacing: -0.05em; font-style: italic; text-transform: uppercase; }
p { color: rgba(255,255,255,0.8); font-size: 18px; line-height: 1.6; margin-bottom: 40px; font-style: italic; max-width: 384px; margin-left: auto; margin-right: auto; }
button { width: 100%; padding: 20px; background: white; color: #e11d48; border: none; border-radius: 16px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; font-size: 10px; cursor: pointer; transition: 0.3s; font-style: italic; box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
button:hover { background: #fff1f2; transform: translateY(-2px); }
@keyframes pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.8; } }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-rose-50 pb-6 italic leading-none"> 05. Glassmorphism Alert Premium </span>
              <ServerGlass />
          </div>
        </section>

        <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const ServerStatus = () => (
  <div className="min-h-[500px] w-full bg-slate-50 p-12 flex flex-col justify-center items-center rounded-[3rem]">
    <div className="w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
      <div className="p-10 text-center border-b border-slate-50 bg-slate-50/50">
        <h2 className="text-2xl font-black text-slate-900 tracking-tighter italic uppercase">Core Node Status</h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] italic">Last Check: 0.02s ago</p>
        </div>
      </div>
      <div className="p-10 space-y-8">
        <div className="flex justify-between items-center group/item">
          <span className="text-xs font-black text-slate-500 uppercase tracking-widest italic">Application API</span>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest italic">Outage detected</span>
            <div className="w-12 h-6 bg-rose-50 rounded-full flex items-center px-1">
              <div className="w-4 h-4 bg-rose-600 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center group/item">
          <span className="text-xs font-black text-slate-500 uppercase tracking-widest italic">Postgres Cluster</span>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest italic">Stable</span>
            <div className="w-12 h-6 bg-emerald-50 rounded-full flex items-center justify-end px-1">
              <div className="w-4 h-4 bg-emerald-600 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center group/item">
          <span className="text-xs font-black text-slate-500 uppercase tracking-widest italic">Redis Cache</span>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest italic">Degraded</span>
            <div className="w-12 h-6 bg-amber-50 rounded-full flex items-center justify-center px-1">
              <div className="w-4 h-4 bg-amber-600 rounded-full translate-x-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 bg-slate-950 text-center">
         <a href="#" className="text-[10px] text-white font-black uppercase tracking-[0.4em] italic hover:text-rose-400 transition-colors">Global Network Status →</a>
      </div>
    </div>
  </div>
);`} 
              htmlCode={`<div class="server-status-container">
  <div class="status-card">
    <div class="card-header">
      <h2>Core Node Status</h2>
      <div class="pulse-indicator">
        <span class="pulse"></span>
        <span class="label">Last Check: 0.02s ago</span>
      </div>
    </div>
    <div class="card-body">
      <div class="status-item">
        <span class="name">Application API</span>
        <div class="state-box">
          <span class="state-label alert">Outage detected</span>
          <div class="toggle alert"><div class="knob"></div></div>
        </div>
      </div>
      <div class="status-item">
        <span class="name">Postgres Cluster</span>
        <div class="state-box">
          <span class="state-label success">Stable</span>
          <div class="toggle success"><div class="knob"></div></div>
        </div>
      </div>
      <div class="status-item">
        <span class="name">Redis Cache</span>
        <div class="state-box">
          <span class="state-label warning">Degraded</span>
          <div class="toggle warning"><div class="knob"></div></div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <a href="#">Global Network Status →</a>
    </div>
  </div>
</div>`} 
              cssCode={`.server-status-container { min-height: 500px; width: 100%; background: #f8fafc; padding: 48px; display: flex; align-items: center; justify-content: center; border-radius: 48px; font-family: sans-serif; }
.status-card { width: 100%; max-width: 576px; background: white; border-radius: 40px; box-shadow: 0 40px 100px -20px rgba(0,0,0,0.1); border: 1px solid #f1f5f9; overflow: hidden; }
.card-header { padding: 40px; text-align: center; border-bottom: 1px solid #f1f5f9; background: #f8fafc66; }
h2 { font-size: 24px; font-weight: 900; color: #0f172a; margin-bottom: 0; letter-spacing: -0.05em; font-style: italic; text-transform: uppercase; }
.pulse-indicator { display: flex; items-center; justify-content: center; gap: 8px; margin-top: 16px; }
.pulse { width: 8px; height: 8px; background: #f43f5e; border-radius: 50%; animation: pulse-red 2s infinite; }
.label { font-size: 10px; font-weight: 900; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.3em; font-style: italic; }
.card-body { padding: 40px; display: flex; flex-direction: column; gap: 32px; }
.status-item { display: flex; justify-content: space-between; align-items: center; }
.name { font-size: 12px; font-weight: 900; color: #64748b; text-transform: uppercase; letter-spacing: 0.1em; font-style: italic; }
.state-box { display: flex; items-center; gap: 16px; }
.state-label { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; font-style: italic; }
.alert { color: #f43f5e; }
.success { color: #10b981; }
.warning { color: #f59e0b; }
.toggle { width: 48px; height: 24px; border-radius: 99px; display: flex; align-items: center; padding: 4px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05); }
.knob { width: 16px; height: 16px; border-radius: 50%; background: white; }
.toggle.alert { background: #fff1f2; }
.toggle.alert .knob { background: #f43f5e; }
.toggle.success { background: #ecfdf5; justify-content: flex-end; }
.toggle.success .knob { background: #10b981; }
.toggle.warning { background: #fffbeb; justify-content: center; }
.toggle.warning .knob { background: #f59e0b; transform: translateX(4px); }
.card-footer { padding: 24px; background: #020617; text-align: center; }
.card-footer a { color: white; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; text-decoration: none; font-style: italic; }
@keyframes pulse-red { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(244, 63, 94, 0.7); } 70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(244, 63, 94, 0); } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(244, 63, 94, 0); } }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-rose-50 pb-6 italic leading-none"> 06. Core Status Monitor Premium </span>
              <ServerStatus />
          </div>
        </section>

        <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const ServerCyber = () => (
  <div className="min-h-[500px] w-full bg-slate-950 relative rounded-[3rem] overflow-hidden flex flex-col items-center justify-center border-4 border-rose-600/30 p-12 shadow-2xl">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(225,29,72,0.1)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(225,29,72,0.1)_1.5px,transparent_1.5px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
    <div className="relative z-10 text-center">
      <div className="inline-block border-2 border-rose-600 bg-rose-600/10 text-rose-600 px-6 py-2 font-black text-[10px] tracking-[0.5em] uppercase mb-10 skew-x-[-15deg] italic animate-pulse">CRITICAL_NODE_FAILURE</div>
      <h1 className="text-[12rem] font-black text-white relative mb-4 italic leading-none tracking-tighter" style={{textShadow: "10px 10px 0px #e11d48, -2px -2px 0px #22d3ee"}}>500</h1>
      <div className="bg-rose-600 text-white font-black text-2xl px-6 py-2 mb-12 skew-x-[-10deg] inline-block shadow-[8px_8px_0px_0px_#22d3ee] uppercase italic tracking-widest">SYSTEM_OVERLOAD_DETECTED</div>
      <p className="text-rose-400 font-black text-xs max-w-md mx-auto mb-12 uppercase italic tracking-[0.3em] leading-relaxed">ERROR_STAMP: 0x500_ISE <br/>Core dump initiated. Connection protocols terminated.</p>
      <button onClick={() => window.location.reload()} className="px-12 py-5 bg-transparent border-4 border-rose-600 text-rose-600 font-black text-[10px] hover:bg-rose-600 hover:text-white transition-all uppercase tracking-[0.5em] italic leading-none">[ EXECUTE_SYSTEM_RELOAD ]</button>
    </div>
  </div>
);`} 
              htmlCode={`<div class="server-cyber">
  <div class="grid"></div>
  <div class="content">
    <div class="status-badge">CRITICAL_NODE_FAILURE</div>
    <h1 class="glitch-500">500</h1>
    <div class="overload-tag">SYSTEM_OVERLOAD_DETECTED</div>
    <p>ERROR_STAMP: 0x500_ISE <br>Core dump initiated. Connection protocols terminated.</p>
    <button onclick="location.reload()">[ EXECUTE_SYSTEM_RELOAD ]</button>
  </div>
</div>`} 
              cssCode={`.server-cyber { min-height: 500px; width: 100%; background: #020617; position: relative; overflow: hidden; border-radius: 48px; border: 4px solid rgba(225,29,72,0.1); display: flex; items-center; justify-content: center; padding: 48px; font-family: sans-serif; }
.grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(225,29,72,0.1) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(225,29,72,0.1) 1.5px, transparent 1.5px); background-size: 30px 30px; mask-image: radial-gradient(ellipse at center, black, transparent 80%); }
.content { position: relative; z-index: 10; text-align: center; }
.status-badge { display: inline-block; border: 2px solid #e11d48; background: rgba(225,29,72,0.1); color: #e11d48; padding: 8px 24px; font-weight: 900; font-size: 10px; text-transform: uppercase; letter-spacing: 0.5em; transform: skewX(-15deg); font-style: italic; margin-bottom: 40px; animation: blink 1s infinite; }
h1 { font-size: 192px; font-weight: 900; color: white; margin-bottom: 16px; letter-spacing: -0.05em; font-style: italic; line-height: 1; text-shadow: 10px 10px 0px #e11d48, -2px -2px 0px #22d3ee; }
.overload-tag { background: #e11d48; color: white; padding: 8px 24px; font-weight: 900; font-size: 24px; display: inline-block; transform: skewX(-10deg); box-shadow: 8px 8px 0px 0px #22d3ee; text-transform: uppercase; letter-spacing: 0.1em; font-style: italic; margin-bottom: 48px; }
p { color: #fb7185; font-weight: 900; font-size: 10px; max-width: 448px; margin: 0 auto 48px; text-transform: uppercase; letter-spacing: 0.3em; font-style: italic; line-height: 1.6; }
button { padding: 20px 48px; background: transparent; border: 4px solid #e11d48; color: #e11d48; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; font-size: 10px; cursor: pointer; transition: 0.3s; font-style: italic; }
button:hover { background: #e11d48; color: white; box-shadow: 0 0 50px rgba(225,29,72,0.5); }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-rose-50 pb-6 italic leading-none"> 07. Cyberpunk Core Failure Premium </span>
              <ServerCyber />
          </div>
        </section>

        <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const ServerNeumorphic = () => (
  <div className="min-h-[500px] w-full bg-[#e0e5ec] rounded-[3rem] flex flex-col items-center justify-center p-12 shadow-sm group">
    <div className="w-72 h-72 rounded-full bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex items-center justify-center mb-16 relative">
      <div className="absolute inset-8 rounded-full shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff]"></div>
      <div className="text-center relative z-10">
         <div className="text-7xl font-black text-rose-400 italic tracking-tighter drop-shadow-sm">500</div>
         <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em] italic mt-2">Error_State</div>
      </div>
    </div>
    <h2 className="text-4xl font-black text-slate-600 mb-4 tracking-tighter italic uppercase">Deep Trouble.</h2>
    <p className="text-slate-400 mb-12 font-medium italic text-lg leading-relaxed max-w-xs text-center">The architecture is experiencing a structural logic failure.</p>
    <div className="flex gap-6">
      <button className="px-10 py-5 rounded-2xl bg-[#e0e5ec] text-slate-600 font-black uppercase tracking-[0.3em] text-[10px] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all italic leading-none">Diagnostic Log</button>
       <button onClick={() => window.location.reload()} className="px-10 py-5 rounded-2xl bg-[#e0e5ec] text-rose-500 font-black uppercase tracking-[0.3em] text-[10px] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all italic leading-none">Retry Hook</button>
    </div>
  </div>
);`} 
              htmlCode={`<div class="server-neu-container">
  <div class="neu-circle">
    <div class="inner-shadow"></div>
    <div class="content">
      <div class="status-code">500</div>
      <div class="label">Error_State</div>
    </div>
  </div>
  <h1>Deep Trouble.</h1>
  <p>The architecture is experiencing a structural logic failure.</p>
  <div class="actions">
    <button class="secondary">Diagnostic Log</button>
    <button class="primary" onclick="location.reload()">Retry Hook</button>
  </div>
</div>`} 
              cssCode={`.server-neu-container { min-height: 500px; width: 100%; background: #e0e5ec; border-radius: 48px; padding: 48px; display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: sans-serif; }
.neu-circle { width: 288px; height: 288px; background: #e0e5ec; border-radius: 50%; box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; display: flex; items-center; justify-content: center; position: relative; margin-bottom: 64px; }
.inner-shadow { position: absolute; inset: 32px; border-radius: 50%; box-shadow: inset 10px 10px 20px #bebebe, inset -10px -10px 20px #ffffff; }
.status-code { font-size: 72px; font-weight: 900; color: #fb7185; font-style: italic; letter-spacing: -0.05em; line-height: 1; }
.label { font-size: 10px; font-weight: 900; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.4em; font-style: italic; margin-top: 8px; text-align: center; }
h1 { font-size: 36px; font-weight: 900; color: #475569; margin-bottom: 16px; letter-spacing: -0.05em; font-style: italic; text-transform: uppercase; }
p { font-size: 18px; color: #94a3b8; font-weight: 500; font-style: italic; text-align: center; max-width: 320px; line-height: 1.6; margin-bottom: 48px; }
.actions { display: flex; gap: 24px; }
button { padding: 20px 40px; border-radius: 16px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 10px; border: none; font-style: italic; cursor: pointer; transition: 0.3s; box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff; }
button:hover { box-shadow: inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff; }
.primary { color: #f43f5e; }
.secondary { color: #64748b; }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-rose-50 pb-6 italic leading-none"> 08. Neumorphic Depth Premium </span>
              <ServerNeumorphic />
          </div>
        </section>

        <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const ServerBrutalist = () => (
  <div className="min-h-[500px] w-full bg-rose-600 border-[6px] border-black p-12 flex flex-col justify-center items-center relative overflow-hidden shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(black 3px, transparent 3px)', backgroundSize: '30px 30px'}}></div>
    <div className="absolute -right-20 -top-20 w-80 h-80 bg-yellow-400 border-[6px] border-black rotate-12 transition-transform duration-700"></div>
    <div className="bg-white border-[6px] border-black p-12 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] max-w-2xl w-full text-center relative z-10 transform transition-transform">
      <h1 className="text-9xl font-black mb-4 italic tracking-tighter leading-none">500.</h1>
      <div className="bg-black text-white text-2xl font-black p-4 mb-8 uppercase italic tracking-widest">Internal Server Outage</div>
      <p className="font-black text-xl mb-12 italic uppercase leading-tight">The system has encountered a structural failure. Fix is in progress.</p>
      <div className="flex flex-col sm:flex-row gap-6">
        <button onClick={() => window.location.reload()} className="flex-1 py-6 bg-yellow-400 border-[6px] border-black font-black text-xl hover:bg-yellow-300 transition-all uppercase italic shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">Force Refresh</button>
        <button className="flex-1 py-6 bg-white border-[6px] border-black font-black text-xl hover:bg-slate-100 transition-all uppercase italic shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">Abort Session</button>
      </div>
    </div>
  </div>
);`} 
              htmlCode={`<div class="server-brutalist">
  <div class="dot-bg"></div>
  <div class="floating-box"></div>
  <div class="main-card">
    <h1>500.</h1>
    <div class="badge">Internal Server Outage</div>
    <p>The system has encountered a structural failure. Fix is in progress.</p>
    <div class="actions">
      <button class="yellow" onclick="location.reload()">Force Refresh</button>
      <button class="white">Abort Session</button>
    </div>
  </div>
</div>`} 
              cssCode={`.server-brutalist { min-height: 500px; width: 100%; background: #e11d48; border: 6px solid black; padding: 48px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; box-shadow: 20px 20px 0 0 black; font-family: sans-serif; }
.dot-bg { position: absolute; inset: 0; background-image: radial-gradient(black 3px, transparent 3px); background-size: 30px 30px; opacity: 0.1; }
.floating-box { position: absolute; -right: 80px; -top: 80px; width: 320px; height: 320px; background: #facc15; border: 6px solid black; transform: rotate(12deg); transition: 0.7s; }
.server-brutalist:hover .floating-box { transform: rotate(45deg); }
.main-card { background: white; border: 6px solid black; padding: 48px; box-shadow: 15px 15px 0 0 black; max-width: 672px; width: 100%; text-align: center; position: relative; z-index: 10; transition: 0.3s; }
.server-brutalist:hover .main-card { transform: translate(-8px, -8px); }
h1 { font-size: 144px; font-weight: 900; margin-bottom: 16px; font-style: italic; letter-spacing: -0.05em; line-height: 1; }
.badge { background: black; color: white; padding: 16px; font-weight: 900; font-size: 24px; text-transform: uppercase; letter-spacing: 0.1em; font-style: italic; margin-bottom: 32px; }
p { font-weight: 900; font-size: 20px; margin-bottom: 48px; font-style: italic; text-transform: uppercase; line-height: 1.2; }
.actions { display: flex; gap: 24px; }
button { flex: 1; padding: 24px; border: 6px solid black; font-weight: 900; font-size: 20px; text-transform: uppercase; font-style: italic; cursor: pointer; transition: 0.3s; box-shadow: 8px 8px 0 0 black; }
button:active { box-shadow: none; transform: translate(8px, 8px); }
.yellow { background: #facc15; }
.yellow:hover { background: #fde047; }
.white { background: white; }
.white:hover { background: #f1f5f9; }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-rose-50 pb-6 italic leading-none"> 09. Bold Brutalist Urgent Premium </span>
              <ServerBrutalist />
          </div>
        </section>

        <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const ServerCode = () => (
  <div className="min-h-[500px] w-full bg-[#0d1117] rounded-[3rem] overflow-hidden flex flex-col font-mono text-sm shadow-2xl border-2 border-slate-800 group">
    <div className="bg-[#161b22] px-8 py-5 flex items-center justify-between border-b-2 border-slate-800">
      <div className="flex items-center gap-6">
        <div className="flex gap-2.5">
          <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] italic">server_exception.handler</div>
      </div>
      <div className="text-[10px] text-rose-500 font-black uppercase tracking-widest italic animate-pulse">Error: 500_INTERNAL_SERVER_ERROR</div>
    </div>
    <div className="flex-1 p-12 text-[#e6edf3] overflow-hidden relative">
      <div className="flex gap-8">
        <div className="text-[#484f58] text-right select-none font-black italic">
          01<br/>02<br/>03<br/>04<br/>05<br/>06<br/>07<br/>08
        </div>
        <div className="leading-relaxed italic">
          <span className="text-[#ff7b72]">async function</span> <span className="text-[#d2a8ff]">requestHandler</span>(req, res) {'{'} <br/>
          &nbsp;&nbsp;<span className="text-[#ff7b72]">try</span> {'{'} <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ff7b72]">await</span> <span className="text-[#d2a8ff]">processData</span>(req.body);<br/>
          &nbsp;&nbsp;{'}'} <span className="text-[#ff7b72]">catch</span> (err) {'{'} <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#8b949e]">/* Critical logic failure at runtime */</span><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ff7b72]">return</span> res.<span className="text-[#d2a8ff]">status</span>(<span className="text-[#a5d6ff]">500</span>).<span className="text-[#d2a8ff]">render</span>(<span className="text-[#a5d6ff]">"emergency_reset"</span>);<br/>
          &nbsp;&nbsp;{'}'}<br/>
          {'}'}
        </div>
      </div>
      <div className="mt-16 flex items-center gap-8 border-t-2 border-slate-800/50 pt-10">
        <button className="bg-[#238636] text-white px-10 py-5 rounded-2xl hover:bg-[#2ea043] transition-all flex items-center gap-4 font-black uppercase tracking-[0.2em] text-[10px] italic shadow-xl shadow-emerald-950/20">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Initialize Diagnostics
        </button>
      </div>
    </div>
  </div>
);`} 
              htmlCode={`<div class="server-code-editor">
  <div class="editor-header">
    <div class="controls">
      <span class="red"></span>
      <span class="yellow"></span>
      <span class="green"></span>
    </div>
    <div class="filename">server_exception.handler</div>
    <div class="error-msg">Error: 500_INTERNAL_SERVER_ERROR</div>
  </div>
  <div class="editor-body">
    <div class="gutter">01 02 03 04 05 06 07 08</div>
    <div class="code">
      <span class="keyword">async function</span> <span class="function">requestHandler</span>(req, res) { <br>
      &nbsp;&nbsp;<span class="keyword">try</span> { <br>
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">await</span> <span class="function">processData</span>(req.body);<br>
      &nbsp;&nbsp;} <span class="keyword">catch</span> (err) { <br>
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">/* Critical logic failure at runtime */</span><br>
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span> res.<span class="function">status</span>(<span class="number">500</span>).<span class="function">render</span>(<span class="string">"emergency_reset"</span>);<br>
      &nbsp;&nbsp;}<br>
      }
    </div>
    <div class="footer-actions">
      <button>Initialize Diagnostics</button>
    </div>
  </div>
</div>`} 
              cssCode={`.server-code-editor { min-height: 500px; width: 100%; background: #0d1117; border-radius: 48px; border: 2px solid #30363d; overflow: hidden; display: flex; flex-direction: column; font-family: 'Fira Code', monospace; box-shadow: 0 40px 100px rgba(0,0,0,0.5); }
.editor-header { background: #161b22; padding: 20px 32px; display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #30363d; }
.controls { display: flex; gap: 10px; }
.controls span { width: 14px; height: 14px; border-radius: 50%; }
.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }
.green { background: #27c93f; }
.filename { color: #8b949e; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-style: italic; }
.error-msg { color: #f85149; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; font-style: italic; animation: blink 1s infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
.editor-body { padding: 48px; display: flex; flex-direction: column; gap: 40px; position: relative; }
.code { color: #e6edf3; font-size: 14px; line-height: 1.8; font-style: italic; }
.keyword { color: #ff7b72; }
.function { color: #d2a8ff; }
.number { color: #79c0ff; }
.string { color: #a5d6ff; }
.comment { color: #8b949e; }
.footer-actions { margin-top: 40px; padding-top: 40px; border-top: 1px solid #30363d66; }
button { padding: 16px 32px; background: #238636; color: white; border: none; border-radius: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; font-size: 10px; cursor: pointer; transition: 0.3s; font-style: italic; box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
button:hover { background: #2ea043; transform: translateY(-2px); }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-rose-50 pb-6 italic leading-none"> 10. Code Exception Debugger Premium </span>
              <ServerCode />
          </div>
        </section>

      </div>
    </div>
  );
};

export default InternalServer;