import React, { useState, useEffect } from 'react';
import CopyButton from '../CopyButton';

// --- 1. The Standard SaaS (Reassuring) ---
export const ServerStandard = () => (
  <div className="flex flex-col items-center justify-center h-[500px] bg-white border border-gray-100 rounded-xl p-8 text-center">
    <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6">
      <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    </div>
    <h1 className="text-3xl font-bold text-gray-900 mb-2">Internal Server Error</h1>
    <p className="text-gray-500 mb-8 max-w-md">
      Something went wrong on our end. We're currently fixing it, so please try again in a moment.
    </p>
    <div className="flex gap-4">
      <button onClick={() => window.location.reload()} className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
        Refresh Page
      </button>
      <button className="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
        Contact Support
      </button>
    </div>
  </div>
);

// --- 2. The Terminal (Stack Trace) ---
export const ServerTerminal = () => {
  const [lines, setLines] = useState([
    "> CONNECTING_TO_DB...",
    "> ERROR: CONNECTION_REFUSED (PORT 5432)",
    "> RETRYING...",
    "> FATAL_EXCEPTION: NULL_POINTER_REFERENCE",
    "> SYSTEM_HALTED."
  ]);

  return (
    <div className="h-[500px] bg-slate-900 rounded-xl p-8 flex flex-col justify-center items-center font-mono">
      <div className="w-full max-w-lg bg-black border border-gray-700 rounded-lg shadow-2xl overflow-hidden">
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
          <span className="text-xs text-gray-400">server_log.txt</span>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="p-6 text-sm">
          {lines.map((line, i) => (
            <div key={i} className={`${i === lines.length - 1 ? 'text-red-500 font-bold' : 'text-gray-400'} mb-1`}>
              {line}
            </div>
          ))}
          <div className="animate-pulse text-green-500 mt-4">_</div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-white text-xl font-bold mb-2">500 Error</h2>
        <p className="text-gray-400 text-sm">Our engineers have been notified.</p>
      </div>
    </div>
  );
};

// --- 3. The Minimalist (Typography) ---
export const ServerMinimal = () => (
  <div className="h-[500px] flex flex-col justify-center items-center bg-white border border-gray-100 rounded-xl">
    <h1 className="text-9xl font-bold text-gray-100 tracking-tighter select-none">500</h1>
    <div className="relative -mt-12 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Unexpected Error</h2>
      <div className="w-12 h-1 bg-black mx-auto mb-6"></div>
      <p className="text-gray-500 max-w-sm mx-auto mb-8">
        An error occurred and your request couldn't be completed. 
      </p>
      <a href="#" className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
        Return Home
      </a>
    </div>
  </div>
);

// --- 4. The Broken Connection (Visual) ---
export const ServerDisconnected = () => (
  <div className="h-[500px] bg-blue-50 rounded-xl flex flex-col items-center justify-center p-8 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
       <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
         <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="currentColor" />
       </svg>
    </div>

    <div className="relative z-10 bg-white p-8 rounded-full shadow-lg mb-8">
      <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
    </div>
    
    <h2 className="text-2xl font-bold text-blue-900 mb-2">Connection Interrupted</h2>
    <p className="text-blue-700/70 text-center max-w-xs mb-8">
      The server is temporarily unavailable. We are working to restore the connection.
    </p>
    
    <div className="flex gap-2">
       <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
       <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-100"></div>
       <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-200"></div>
    </div>
  </div>
);

// --- 5. The Glassmorphism (Warning Style) ---
export const ServerGlass = () => (
  <div className="h-[500px] relative rounded-xl overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600"></div>
    
    {/* Abstract Shapes */}
    <div className="absolute top-10 left-10 w-40 h-40 bg-white mix-blend-overlay rounded-full blur-3xl opacity-30 animate-pulse"></div>
    <div className="absolute bottom-10 right-10 w-40 h-40 bg-black mix-blend-overlay rounded-full blur-3xl opacity-30"></div>

    <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-3xl shadow-2xl max-w-md text-center">
      <div className="text-white text-6xl font-black mb-2 opacity-90">500</div>
      <h3 className="text-white text-xl font-bold mb-6">Internal Server Error</h3>
      <p className="text-white/80 mb-8 font-light">
        Sorry about that. Please try refreshing and contact us if the problem persists.
      </p>
      <button onClick={() => window.location.reload()} className="w-full py-3 bg-white text-red-600 font-bold rounded-xl shadow-lg hover:bg-red-50 transition-colors">
        Try Again
      </button>
    </div>
  </div>
);

// --- 6. The Status Monitor (Functional) ---
export const ServerStatus = () => (
  <div className="h-[500px] bg-gray-50 border border-gray-200 rounded-xl p-8 flex flex-col justify-center items-center">
    <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 text-center border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-800">System Status</h2>
        <p className="text-xs text-gray-500 mt-1">Last updated: Just now</p>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">API Server</span>
          <span className="text-xs font-bold text-red-500 flex items-center gap-1">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> Outage
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">Database</span>
          <span className="text-xs font-bold text-green-500 flex items-center gap-1">
             <span className="w-2 h-2 bg-green-500 rounded-full"></span> Operational
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">CDN</span>
          <span className="text-xs font-bold text-yellow-500 flex items-center gap-1">
             <span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Degraded
          </span>
        </div>
      </div>
      <div className="p-4 bg-gray-50 text-center">
         <a href="#" className="text-sm text-blue-600 font-medium hover:underline">View Status Page →</a>
      </div>
    </div>
    <p className="mt-8 text-gray-500 text-sm">We are aware of the issue and are working on a fix.</p>
  </div>
);

// --- 7. The Cyberpunk (Critical Failure) ---
export const ServerCyber = () => (
  <div className="h-[500px] bg-black relative rounded-xl overflow-hidden flex flex-col items-center justify-center border-2 border-red-600 p-8">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
    
    <div className="relative z-10 text-center">
      <div className="inline-block border-2 border-red-600 text-red-600 px-4 py-1 font-mono font-bold text-xs mb-6 animate-pulse">
        CRITICAL_FAILURE
      </div>
      
      <h1 className="text-8xl font-black text-white relative mb-4" style={{textShadow: "4px 4px 0px #DC2626"}}>
        500
      </h1>
      
      <div className="bg-red-600 text-black font-mono font-bold text-lg px-2 mb-8 transform -rotate-1 inline-block">
        SYSTEM_OVERLOAD
      </div>
      
      <p className="text-red-400 font-mono text-sm max-w-md mx-auto mb-8">
        ERROR_CODE: 0x500 <br/>
        Server core dump initiated. Please reboot request.
      </p>
      
      <button onClick={() => window.location.reload()} className="px-8 py-3 bg-transparent border border-red-600 text-red-600 font-mono text-sm hover:bg-red-600 hover:text-black transition-all">
        [ EXECUTE_RELOAD ]
      </button>
    </div>
  </div>
);

// --- 8. The Neumorphic (Pressed) ---
export const ServerNeumorphic = () => (
  <div className="h-[500px] bg-[#e0e5ec] rounded-xl flex flex-col items-center justify-center p-8">
    <div className="w-48 h-48 rounded-full bg-[#e0e5ec] shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] flex items-center justify-center mb-10">
      <div className="text-center">
         <div className="text-4xl font-bold text-red-400">500</div>
         <div className="text-xs text-gray-400 font-bold uppercase">Error</div>
      </div>
    </div>
    
    <h2 className="text-xl font-bold text-gray-600 mb-2">Server Trouble</h2>
    <p className="text-gray-500 mb-8 text-sm">Our servers are acting up. Please try again later.</p>
    
    <div className="flex gap-4">
      <button className="px-6 py-3 rounded-xl bg-[#e0e5ec] text-gray-600 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:text-red-500 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all">
        Report Issue
      </button>
       <button onClick={() => window.location.reload()} className="px-6 py-3 rounded-xl bg-[#e0e5ec] text-gray-600 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:text-blue-500 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all">
        Retry
      </button>
    </div>
  </div>
);

// --- 9. The Brutalist (Urgent) ---
export const ServerBrutalist = () => (
  <div className="h-[500px] bg-red-600 border-4 border-black p-8 flex flex-col justify-center items-center relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(black 2px, transparent 2px)', backgroundSize: '20px 20px'}}></div>
    
    <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-lg w-full text-center relative z-10">
      <h1 className="text-6xl font-black mb-4">OOPS.</h1>
      <div className="bg-black text-white text-xl font-bold p-2 mb-6 uppercase">
        Internal Server Error
      </div>
      <p className="font-bold mb-8">
        Something broke. We're fixing it. It's not you, it's us.
      </p>
      <div className="flex flex-col gap-3">
        <button onClick={() => window.location.reload()} className="w-full py-3 bg-yellow-400 border-4 border-black font-black hover:bg-yellow-300 transition-colors uppercase">
          Refresh Page
        </button>
        <button className="w-full py-3 bg-white border-4 border-black font-black hover:bg-gray-100 transition-colors uppercase">
          Go Back Home
        </button>
      </div>
    </div>
  </div>
);

// --- 10. The Code Editor (Dev Focus) ---
export const ServerCode = () => (
  <div className="h-[500px] bg-[#1e1e1e] rounded-xl overflow-hidden flex flex-col font-mono text-sm shadow-xl">
    {/* Editor Header */}
    <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-4 text-gray-400 border-b border-black">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
      </div>
      <div className="text-xs">server_handler.js — Edited</div>
    </div>
    
    {/* Editor Body */}
    <div className="flex-1 p-6 text-[#d4d4d4] overflow-hidden">
      <div className="flex gap-4">
        <div className="text-[#858585] text-right select-none">
          1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7
        </div>
        <div>
          <span className="text-[#c586c0]">try</span> {'{'} <br/>
          &nbsp;&nbsp;<span className="text-[#dcdcaa]">handleRequest</span>();<br/>
          {'}'} <span className="text-[#c586c0]">catch</span> (<span className="text-[#9cdcfe]">error</span>) {'{'}<br/>
          &nbsp;&nbsp;<span className="text-[#6a9955]">// TODO: Fix this mess immediately</span><br/>
          &nbsp;&nbsp;<span className="text-[#9cdcfe]">console</span>.<span className="text-[#dcdcaa]">error</span>(<span className="text-[#ce9178]">"500 Internal Server Error"</span>);<br/>
          &nbsp;&nbsp;<span className="text-[#dcdcaa]">renderErrorPage</span>(); <span className="text-[#6a9955]">// &lt;-- You are here</span><br/>
          {'}'}
        </div>
      </div>
      <div className="mt-12">
        <button className="bg-[#0e639c] text-white px-4 py-2 hover:bg-[#1177bb] transition-colors flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Run Diagnostics
        </button>
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
        
        <section className='box-shadow p-4 rounded-lg relative group/inte'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/inte:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="flex flex-col items-center justify-center h-[500px] bg-white border border-gray-100 rounded-xl p-8 text-center">
    <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6">
      <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    </div>
    <h1 className="text-3xl font-bold text-gray-900 mb-2">Internal Server Error</h1>
    <p className="text-gray-500 mb-8 max-w-md">
      Something went wrong on our end. We're currently fixing it, so please try again in a moment.
    </p>
    <div className="flex gap-4">
      <button onClick={() => window.location.reload()} className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
        Refresh Page
      </button>
      <button className="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
        Contact Support
      </button>
    </div>
  </div>`} htmlCode={`<div class="flex flex-col items-center justify-center h-[500px] bg-white border border-gray-100 rounded-xl p-8 text-center">
    <div class="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6">
      <svg class="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    </div>
    <h1 class="text-3xl font-bold text-gray-900 mb-2">Internal Server Error</h1>
    <p class="text-gray-500 mb-8 max-w-md">
      Something went wrong on our end. We're currently fixing it, so please try again in a moment.
    </p>
    <div class="flex gap-4">
      <button onClick=... class="flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
        Refresh Page
      </button>
      <button class="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
        Contact Support
      </button>
    </div>
  </div>`} cssCode={`/* ServerStandard Component Styles */\n\n/* \n   This component is built using Tailwind CSS utility classes.\n   To use it as Vanilla CSS, you will need to: \n   1. Add tailwind.css to your project, OR\n   2. Convert these classes to standard CSS rules.\n*/\n\n.component-wrapper {\n  /* Add your custom styles here */\n}`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 01. Standard SaaS </span>
          <ServerStandard />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/inte'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/inte:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="h-[500px] bg-slate-900 rounded-xl p-8 flex flex-col justify-center items-center font-mono">
      <div className="w-full max-w-lg bg-black border border-gray-700 rounded-lg shadow-2xl overflow-hidden">
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
          <span className="text-xs text-gray-400">server_log.txt</span>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="p-6 text-sm">
          {lines.map((line, i) => (
            <div key={i} className={\`\${i === lines.length - 1 ? 'text-red-500 font-bold' : 'text-gray-400'} mb-1\`}>
              {line}
            </div>
          )`} htmlCode={`<div class="h-[500px] bg-slate-900 rounded-xl p-8 flex flex-col justify-center items-center font-mono">
      <div class="w-full max-w-lg bg-black border border-gray-700 rounded-lg shadow-2xl overflow-hidden">
        <div class="bg-gray-800 px-4 py-2 flex items-center justify-between">
          <span class="text-xs text-gray-400">server_log.txt</span>
          <div class="flex gap-1.5">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div class="p-6 text-sm">
          <!-- Mapping Start -->
(
            <div key=... class=\$... mb-1>
              ...
            </div>
          )`} cssCode={`/* ServerTerminal Component Styles */\n\n/* \n   This component is built using Tailwind CSS utility classes.\n   To use it as Vanilla CSS, you will need to: \n   1. Add tailwind.css to your project, OR\n   2. Convert these classes to standard CSS rules.\n*/\n\n.component-wrapper {\n  /* Add your custom styles here */\n}`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 02. Terminal Log </span>
          <ServerTerminal />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/inte'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/inte:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="h-[500px] flex flex-col justify-center items-center bg-white border border-gray-100 rounded-xl">
    <h1 className="text-9xl font-bold text-gray-100 tracking-tighter select-none">500</h1>
    <div className="relative -mt-12 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Unexpected Error</h2>
      <div className="w-12 h-1 bg-black mx-auto mb-6"></div>
      <p className="text-gray-500 max-w-sm mx-auto mb-8">
        An error occurred and your request couldn't be completed. 
      </p>
      <a href="#" className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
        Return Home
      </a>
    </div>
  </div>`} htmlCode={`<div class="h-[500px] flex flex-col justify-center items-center bg-white border border-gray-100 rounded-xl">
    <h1 class="text-9xl font-bold text-gray-100 tracking-tighter select-none">500</h1>
    <div class="relative -mt-12 text-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-2">Unexpected Error</h2>
      <div class="w-12 h-1 bg-black mx-auto mb-6"></div>
      <p class="text-gray-500 max-w-sm mx-auto mb-8">
        An error occurred and your request couldn't be completed. 
      </p>
      <a href="#" class="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
        Return Home
      </a>
    </div>
  </div>`} cssCode={`/* ServerMinimal Component Styles */\n\n/* \n   This component is built using Tailwind CSS utility classes.\n   To use it as Vanilla CSS, you will need to: \n   1. Add tailwind.css to your project, OR\n   2. Convert these classes to standard CSS rules.\n*/\n\n.component-wrapper {\n  /* Add your custom styles here */\n}`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 03. Minimalist Typography </span>
          <ServerMinimal />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/inte'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/inte:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="h-[500px] bg-blue-50 rounded-xl flex flex-col items-center justify-center p-8 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
       <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
         <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="currentColor" />
       </svg>
    </div>

    <div className="relative z-10 bg-white p-8 rounded-full shadow-lg mb-8">
      <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
    </div>
    
    <h2 className="text-2xl font-bold text-blue-900 mb-2">Connection Interrupted</h2>
    <p className="text-blue-700/70 text-center max-w-xs mb-8">
      The server is temporarily unavailable. We are working to restore the connection.
    </p>
    
    <div className="flex gap-2">
       <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
       <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-100"></div>
       <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-200"></div>
    </div>
  </div>`} htmlCode={`<div class="h-[500px] bg-blue-50 rounded-xl flex flex-col items-center justify-center p-8 relative overflow-hidden">
    ...
    <div class="absolute inset-0 opacity-5">
       <svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
         <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="currentColor" />
       </svg>
    </div>

    <div class="relative z-10 bg-white p-8 rounded-full shadow-lg mb-8">
      <svg class="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
    </div>
    
    <h2 class="text-2xl font-bold text-blue-900 mb-2">Connection Interrupted</h2>
    <p class="text-blue-700/70 text-center max-w-xs mb-8">
      The server is temporarily unavailable. We are working to restore the connection.
    </p>
    
    <div class="flex gap-2">
       <div class="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
       <div class="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-100"></div>
       <div class="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-200"></div>
    </div>
  </div>`} cssCode={`/* ServerDisconnected Component Styles */\n\n/* \n   This component is built using Tailwind CSS utility classes.\n   To use it as Vanilla CSS, you will need to: \n   1. Add tailwind.css to your project, OR\n   2. Convert these classes to standard CSS rules.\n*/\n\n.component-wrapper {\n  /* Add your custom styles here */\n}`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 04. Disconnected Visual </span>
          <ServerDisconnected />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/inte'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/inte:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="h-[500px] relative rounded-xl overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600"></div>
    
    {/* Abstract Shapes */}
    <div className="absolute top-10 left-10 w-40 h-40 bg-white mix-blend-overlay rounded-full blur-3xl opacity-30 animate-pulse"></div>
    <div className="absolute bottom-10 right-10 w-40 h-40 bg-black mix-blend-overlay rounded-full blur-3xl opacity-30"></div>

    <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-3xl shadow-2xl max-w-md text-center">
      <div className="text-white text-6xl font-black mb-2 opacity-90">500</div>
      <h3 className="text-white text-xl font-bold mb-6">Internal Server Error</h3>
      <p className="text-white/80 mb-8 font-light">
        Sorry about that. Please try refreshing and contact us if the problem persists.
      </p>
      <button onClick={() => window.location.reload()} className="w-full py-3 bg-white text-red-600 font-bold rounded-xl shadow-lg hover:bg-red-50 transition-colors">
        Try Again
      </button>
    </div>
  </div>`} htmlCode={`<div class="h-[500px] relative rounded-xl overflow-hidden flex items-center justify-center">
    <div class="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600"></div>
    
    ...
    <div class="absolute top-10 left-10 w-40 h-40 bg-white mix-blend-overlay rounded-full blur-3xl opacity-30 animate-pulse"></div>
    <div class="absolute bottom-10 right-10 w-40 h-40 bg-black mix-blend-overlay rounded-full blur-3xl opacity-30"></div>

    <div class="relative bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-3xl shadow-2xl max-w-md text-center">
      <div class="text-white text-6xl font-black mb-2 opacity-90">500</div>
      <h3 class="text-white text-xl font-bold mb-6">Internal Server Error</h3>
      <p class="text-white/80 mb-8 font-light">
        Sorry about that. Please try refreshing and contact us if the problem persists.
      </p>
      <button onClick=... class="w-full py-3 bg-white text-red-600 font-bold rounded-xl shadow-lg hover:bg-red-50 transition-colors">
        Try Again
      </button>
    </div>
  </div>`} cssCode={`/* ServerGlass Component Styles */\n\n/* \n   This component is built using Tailwind CSS utility classes.\n   To use it as Vanilla CSS, you will need to: \n   1. Add tailwind.css to your project, OR\n   2. Convert these classes to standard CSS rules.\n*/\n\n.component-wrapper {\n  /* Add your custom styles here */\n}`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 05. Glassmorphism Alert </span>
          <ServerGlass />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/inte'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/inte:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="h-[500px] bg-gray-50 border border-gray-200 rounded-xl p-8 flex flex-col justify-center items-center">
    <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 text-center border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-800">System Status</h2>
        <p className="text-xs text-gray-500 mt-1">Last updated: Just now</p>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">API Server</span>
          <span className="text-xs font-bold text-red-500 flex items-center gap-1">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> Outage
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">Database</span>
          <span className="text-xs font-bold text-green-500 flex items-center gap-1">
             <span className="w-2 h-2 bg-green-500 rounded-full"></span> Operational
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">CDN</span>
          <span className="text-xs font-bold text-yellow-500 flex items-center gap-1">
             <span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Degraded
          </span>
        </div>
      </div>
      <div className="p-4 bg-gray-50 text-center">
         <a href="#" className="text-sm text-blue-600 font-medium hover:underline">View Status Page →</a>
      </div>
    </div>
    <p className="mt-8 text-gray-500 text-sm">We are aware of the issue and are working on a fix.</p>
  </div>`} htmlCode={`<div class="h-[500px] bg-gray-50 border border-gray-200 rounded-xl p-8 flex flex-col justify-center items-center">
    <div class="w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div class="p-6 text-center border-b border-gray-100">
        <h2 class="text-xl font-bold text-gray-800">System Status</h2>
        <p class="text-xs text-gray-500 mt-1">Last updated: Just now</p>
      </div>
      <div class="p-6 space-y-4">
        <div class="flex justify-between items-center">
          <span class="text-sm font-medium text-gray-600">API Server</span>
          <span class="text-xs font-bold text-red-500 flex items-center gap-1">
            <span class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> Outage
          </span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm font-medium text-gray-600">Database</span>
          <span class="text-xs font-bold text-green-500 flex items-center gap-1">
             <span class="w-2 h-2 bg-green-500 rounded-full"></span> Operational
          </span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm font-medium text-gray-600">CDN</span>
          <span class="text-xs font-bold text-yellow-500 flex items-center gap-1">
             <span class="w-2 h-2 bg-yellow-500 rounded-full"></span> Degraded
          </span>
        </div>
      </div>
      <div class="p-4 bg-gray-50 text-center">
         <a href="#" class="text-sm text-blue-600 font-medium hover:underline">View Status Page →</a>
      </div>
    </div>
    <p class="mt-8 text-gray-500 text-sm">We are aware of the issue and are working on a fix.</p>
  </div>`} cssCode={`/* ServerStatus Component Styles */\n\n/* \n   This component is built using Tailwind CSS utility classes.\n   To use it as Vanilla CSS, you will need to: \n   1. Add tailwind.css to your project, OR\n   2. Convert these classes to standard CSS rules.\n*/\n\n.component-wrapper {\n  /* Add your custom styles here */\n}`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 06. System Status </span>
          <ServerStatus />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/inte'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/inte:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="h-[500px] bg-black relative rounded-xl overflow-hidden flex flex-col items-center justify-center border-2 border-red-600 p-8">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
    
    <div className="relative z-10 text-center">
      <div className="inline-block border-2 border-red-600 text-red-600 px-4 py-1 font-mono font-bold text-xs mb-6 animate-pulse">
        CRITICAL_FAILURE
      </div>
      
      <h1 className="text-8xl font-black text-white relative mb-4" style={{textShadow: "4px 4px 0px #DC2626"}}>
        500
      </h1>
      
      <div className="bg-red-600 text-black font-mono font-bold text-lg px-2 mb-8 transform -rotate-1 inline-block">
        SYSTEM_OVERLOAD
      </div>
      
      <p className="text-red-400 font-mono text-sm max-w-md mx-auto mb-8">
        ERROR_CODE: 0x500 <br/>
        Server core dump initiated. Please reboot request.
      </p>
      
      <button onClick={() => window.location.reload()} className="px-8 py-3 bg-transparent border border-red-600 text-red-600 font-mono text-sm hover:bg-red-600 hover:text-black transition-all">
        [ EXECUTE_RELOAD ]
      </button>
    </div>
  </div>`} htmlCode={`<div class="h-[500px] bg-black relative rounded-xl overflow-hidden flex flex-col items-center justify-center border-2 border-red-600 p-8">
    <div class="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
    
    <div class="relative z-10 text-center">
      <div class="inline-block border-2 border-red-600 text-red-600 px-4 py-1 font-mono font-bold text-xs mb-6 animate-pulse">
        CRITICAL_FAILURE
      </div>
      
      <h1 class="text-8xl font-black text-white relative mb-4" style=...}>
        500
      </h1>
      
      <div class="bg-red-600 text-black font-mono font-bold text-lg px-2 mb-8 transform -rotate-1 inline-block">
        SYSTEM_OVERLOAD
      </div>
      
      <p class="text-red-400 font-mono text-sm max-w-md mx-auto mb-8">
        ERROR_CODE: 0x500 <br/>
        Server core dump initiated. Please reboot request.
      </p>
      
      <button onClick=... class="px-8 py-3 bg-transparent border border-red-600 text-red-600 font-mono text-sm hover:bg-red-600 hover:text-black transition-all">
        [ EXECUTE_RELOAD ]
      </button>
    </div>
  </div>`} cssCode={`/* ServerCyber Component Styles */\n\n/* \n   This component is built using Tailwind CSS utility classes.\n   To use it as Vanilla CSS, you will need to: \n   1. Add tailwind.css to your project, OR\n   2. Convert these classes to standard CSS rules.\n*/\n\n.component-wrapper {\n  /* Add your custom styles here */\n}`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 07. Cyberpunk Critical </span>
          <ServerCyber />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/inte'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/inte:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="h-[500px] bg-[#e0e5ec] rounded-xl flex flex-col items-center justify-center p-8">
    <div className="w-48 h-48 rounded-full bg-[#e0e5ec] shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] flex items-center justify-center mb-10">
      <div className="text-center">
         <div className="text-4xl font-bold text-red-400">500</div>
         <div className="text-xs text-gray-400 font-bold uppercase">Error</div>
      </div>
    </div>
    
    <h2 className="text-xl font-bold text-gray-600 mb-2">Server Trouble</h2>
    <p className="text-gray-500 mb-8 text-sm">Our servers are acting up. Please try again later.</p>
    
    <div className="flex gap-4">
      <button className="px-6 py-3 rounded-xl bg-[#e0e5ec] text-gray-600 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:text-red-500 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all">
        Report Issue
      </button>
       <button onClick={() => window.location.reload()} className="px-6 py-3 rounded-xl bg-[#e0e5ec] text-gray-600 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:text-blue-500 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all">
        Retry
      </button>
    </div>
  </div>`} htmlCode={`<div class="h-[500px] bg-[#e0e5ec] rounded-xl flex flex-col items-center justify-center p-8">
    <div class="w-48 h-48 rounded-full bg-[#e0e5ec] shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] flex items-center justify-center mb-10">
      <div class="text-center">
         <div class="text-4xl font-bold text-red-400">500</div>
         <div class="text-xs text-gray-400 font-bold uppercase">Error</div>
      </div>
    </div>
    
    <h2 class="text-xl font-bold text-gray-600 mb-2">Server Trouble</h2>
    <p class="text-gray-500 mb-8 text-sm">Our servers are acting up. Please try again later.</p>
    
    <div class="flex gap-4">
      <button class="px-6 py-3 rounded-xl bg-[#e0e5ec] text-gray-600 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:text-red-500 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all">
        Report Issue
      </button>
       <button onClick=... class="px-6 py-3 rounded-xl bg-[#e0e5ec] text-gray-600 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:text-blue-500 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all">
        Retry
      </button>
    </div>
  </div>`} cssCode={`/* ServerNeumorphic Component Styles */\n\n/* \n   This component is built using Tailwind CSS utility classes.\n   To use it as Vanilla CSS, you will need to: \n   1. Add tailwind.css to your project, OR\n   2. Convert these classes to standard CSS rules.\n*/\n\n.component-wrapper {\n  /* Add your custom styles here */\n}`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 08. Neumorphic Pressed </span>
          <ServerNeumorphic />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/inte'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/inte:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="h-[500px] bg-red-600 border-4 border-black p-8 flex flex-col justify-center items-center relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(black 2px, transparent 2px)', backgroundSize: '20px 20px'}}></div>
    
    <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-lg w-full text-center relative z-10">
      <h1 className="text-6xl font-black mb-4">OOPS.</h1>
      <div className="bg-black text-white text-xl font-bold p-2 mb-6 uppercase">
        Internal Server Error
      </div>
      <p className="font-bold mb-8">
        Something broke. We're fixing it. It's not you, it's us.
      </p>
      <div className="flex flex-col gap-3">
        <button onClick={() => window.location.reload()} className="w-full py-3 bg-yellow-400 border-4 border-black font-black hover:bg-yellow-300 transition-colors uppercase">
          Refresh Page
        </button>
        <button className="w-full py-3 bg-white border-4 border-black font-black hover:bg-gray-100 transition-colors uppercase">
          Go Back Home
        </button>
      </div>
    </div>
  </div>`} htmlCode={`<div class="h-[500px] bg-red-600 border-4 border-black p-8 flex flex-col justify-center items-center relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style=...}></div>
    
    <div class="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-lg w-full text-center relative z-10">
      <h1 class="text-6xl font-black mb-4">OOPS.</h1>
      <div class="bg-black text-white text-xl font-bold p-2 mb-6 uppercase">
        Internal Server Error
      </div>
      <p class="font-bold mb-8">
        Something broke. We're fixing it. It's not you, it's us.
      </p>
      <div class="flex flex-col gap-3">
        <button onClick=... class="w-full py-3 bg-yellow-400 border-4 border-black font-black hover:bg-yellow-300 transition-colors uppercase">
          Refresh Page
        </button>
        <button class="w-full py-3 bg-white border-4 border-black font-black hover:bg-gray-100 transition-colors uppercase">
          Go Back Home
        </button>
      </div>
    </div>
  </div>`} cssCode={`/* ServerBrutalist Component Styles */\n\n/* \n   This component is built using Tailwind CSS utility classes.\n   To use it as Vanilla CSS, you will need to: \n   1. Add tailwind.css to your project, OR\n   2. Convert these classes to standard CSS rules.\n*/\n\n.component-wrapper {\n  /* Add your custom styles here */\n}`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 09. Brutalist Urgent </span>
          <ServerBrutalist />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/inte'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/inte:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="h-[500px] bg-[#1e1e1e] rounded-xl overflow-hidden flex flex-col font-mono text-sm shadow-xl">
    {/* Editor Header */}
    <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-4 text-gray-400 border-b border-black">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
      </div>
      <div className="text-xs">server_handler.js — Edited</div>
    </div>
    
    {/* Editor Body */}
    <div className="flex-1 p-6 text-[#d4d4d4] overflow-hidden">
      <div className="flex gap-4">
        <div className="text-[#858585] text-right select-none">
          1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7
        </div>
        <div>
          <span className="text-[#c586c0]">try</span> {'{'} <br/>
          &nbsp;&nbsp;<span className="text-[#dcdcaa]">handleRequest</span>();<br/>
          {'}'} <span className="text-[#c586c0]">catch</span> (<span className="text-[#9cdcfe]">error</span>) {'{'}<br/>
          &nbsp;&nbsp;<span className="text-[#6a9955]">// TODO: Fix this mess immediately</span><br/>
          &nbsp;&nbsp;<span className="text-[#9cdcfe]">console</span>.<span className="text-[#dcdcaa]">error</span>(<span className="text-[#ce9178]">"500 Internal Server Error"</span>);<br/>
          &nbsp;&nbsp;<span className="text-[#dcdcaa]">renderErrorPage</span>(); <span className="text-[#6a9955]">// &lt;-- You are here</span><br/>
          {'}'}
        </div>
      </div>
      <div className="mt-12">
        <button className="bg-[#0e639c] text-white px-4 py-2 hover:bg-[#1177bb] transition-colors flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Run Diagnostics
        </button>
      </div>
    </div>
  </div>`} htmlCode={`<div class="h-[500px] bg-[#1e1e1e] rounded-xl overflow-hidden flex flex-col font-mono text-sm shadow-xl">
    ...
    <div class="bg-[#2d2d2d] px-4 py-2 flex items-center gap-4 text-gray-400 border-b border-black">
      <div class="flex gap-1.5">
        <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
        <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
        <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
      </div>
      <div class="text-xs">server_handler.js — Edited</div>
    </div>
    
    ...
    <div class="flex-1 p-6 text-[#d4d4d4] overflow-hidden">
      <div class="flex gap-4">
        <div class="text-[#858585] text-right select-none">
          1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7
        </div>
        <div>
          <span class="text-[#c586c0]">try</span> ... <span class="text-[#c586c0]">catch</span> (<span class="text-[#9cdcfe]">error</span>) ...
        </div>
      </div>
      <div class="mt-12">
        <button class="bg-[#0e639c] text-white px-4 py-2 hover:bg-[#1177bb] transition-colors flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Run Diagnostics
        </button>
      </div>
    </div>
  </div>`} cssCode={`/* ServerCode Component Styles */\n\n/* \n   This component is built using Tailwind CSS utility classes.\n   To use it as Vanilla CSS, you will need to: \n   1. Add tailwind.css to your project, OR\n   2. Convert these classes to standard CSS rules.\n*/\n\n.component-wrapper {\n  /* Add your custom styles here */\n}`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 10. Code Editor </span>
          <ServerCode />
        </section>

      </div>
    </div>
  );
};

export default InternalServer;