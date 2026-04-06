import React, { useState, useEffect } from 'react';
import CopyButton from '../CopyButton';

// --- Shared Components ---
const GearIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

// --- 1. The SaaS Standard (Friendly) ---
export const MaintenanceStandard = () => (
  <div className="flex flex-col items-center justify-center container w-full bg-white border border-gray-100 rounded-3xl p-8 text-center">
    <div className="relative mb-8">
      <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center">
        <GearIcon className="w-12 h-12 text-blue-600 animate-[spin_4s_linear_infinite]" />
      </div>
      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
      </div>
    </div>
    
    <h1 className="text-3xl font-bold text-gray-900 mb-4">We're improving our platform</h1>
    <p className="text-gray-500 max-w-md mb-8">
      We are currently performing scheduled maintenance to improve your experience. We expect to be back by <span className="font-bold text-gray-700">14:00 UTC</span>.
    </p>
    
    <div className="flex flex-col gap-3 w-full max-w-xs">
      <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
        Check Status Page
      </button>
      <button className="w-full py-3 bg-white border border-gray-200 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition-colors">
        Contact Support
      </button>
    </div>
  </div>
);

// --- 2. The Minimalist (Typography) ---
export const MaintenanceMinimal = () => (
  <div className="flex flex-col justify-center container w-full bg-[#f8f8f8] rounded-3xl p-12 border border-gray-200">
    <div className="max-w-2xl">
      <div className="h-1 w-16 bg-black mb-8"></div>
      <h1 className="text-6xl font-serif text-black leading-tight mb-8">
        Briefly <br/> unavailable.
      </h1>
      <p className="text-xl text-gray-500 leading-relaxed mb-12">
        We are performing a necessary system upgrade. <br/>
        Please check back shortly.
      </p>
      
      <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
        <a href="#" className="border-b border-black pb-1 hover:opacity-50 transition-opacity">Twitter Updates</a>
        <a href="#" className="border-b border-black pb-1 hover:opacity-50 transition-opacity">Email Us</a>
      </div>
    </div>
  </div>
);

// --- 3. The Terminal (Developer Style) ---
export const MaintenanceTerminal = () => {
  const [logs, setLogs] = useState([
    "> INITIATING_MAINTENANCE_MODE...",
    "> STOPPING_SERVICES...",
    "> UPDATING_DATABASE_SCHEMA...",
  ]);

  useEffect(() => {
    const nextLogs = [
      "> OPTIMIZING_ASSETS...",
      "> CLEARING_CACHE...",
      "> RESTARTING_WORKERS...",
      "> ESTIMATED_TIME: 15_MINS"
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i < nextLogs.length) {
        setLogs(prev => [...prev, nextLogs[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container w-full bg-slate-900 rounded-3xl p-8 flex flex-col items-center justify-center font-mono">
      <div className="w-full max-w-lg bg-black border border-gray-700 rounded-lg shadow-2xl overflow-hidden">
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
          <span className="text-xs text-gray-400">system_update.sh</span>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="p-6 h-64 overflow-y-auto">
          {logs.map((log, i) => (
            <div key={i} className="text-green-500 mb-2 text-sm">
              {log}
            </div>
          ))}
          <div className="animate-pulse text-green-500 mt-2">_</div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-white text-xl font-bold mb-2">System Maintenance</h2>
        <p className="text-gray-400 text-sm">Please do not refresh the page.</p>
      </div>
    </div>
  );
};

// --- 4. The Glassmorphism (Vibrant) ---
export const MaintenanceGlass = () => (
  <div className="relative flex items-center justify-center container w-full rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
    <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-60 animate-blob"></div>
    <div className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-300 rounded-full mix-blend-overlay filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>

    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-12 rounded-[2rem] shadow-2xl text-center text-white max-w-lg mx-4">
      <div className="text-6xl mb-6 animate-bounce">🚧</div>
      <h1 className="text-4xl font-bold mb-4 drop-shadow-md">Under Construction</h1>
      <p className="text-white/90 text-lg mb-8">
        We're building something amazing. We'll be back online shortly with a fresh new look.
      </p>
      <div className="inline-block px-6 py-2 bg-white/20 rounded-full border border-white/30 text-sm font-medium">
        Estimated return: 2 hours
      </div>
    </div>
  </div>
);

// --- 5. The Progress Bar (Visual Status) ---
export const MaintenanceProgress = () => {
  const [progress, setProgress] = useState(0);
  
  // Simulation of progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old === 100) return 100;
        const diff = Math.random() * 10;
        return Math.min(old + diff, 100);
      });
    }, 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center container w-full bg-white border border-gray-100 rounded-3xl p-8">
      <div className="w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Updating Database</h1>
        <p className="text-gray-500 mb-10">We are pushing a critical security update.</p>
        
        <div className="relative pt-1 mb-2">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-50">
                In Progress
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-blue-600">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
            <div style={{ width: `${progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-500 ease-out"></div>
          </div>
        </div>
        
        <p className="text-xs text-gray-400 mt-4">
          ID: #UP-8842 • Priority: High
        </p>
      </div>
    </div>
  );
};

// --- 6. The Brutalist (Bold/Alert) ---
export const MaintenanceBrutalist = () => (
  <div className="flex flex-col items-center justify-center container w-full bg-slate-800 rounded-3xl border-4 border-black relative overflow-hidden">
    {/* Construction Tape Background */}
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, transparent 10px, transparent 20px)' }}></div>

    <div className="relative z-10 bg-white border-4 border-black p-10 max-w-lg text-center shadow-[12px_12px_0_0_#000]">
      <h1 className="text-5xl font-black uppercase mb-4">Work in<br/>Progress</h1>
      <div className="h-2 bg-black w-full mb-6"></div>
      <p className="font-bold text-xl mb-8">
        We are fixing some bugs. <br/> Don't panic.
      </p>
      <button className="w-full py-4 bg-black text-white font-black text-xl uppercase hover:bg-white hover:text-black border-4 border-transparent hover:border-black transition-colors">
        Try Refreshing
      </button>
    </div>
  </div>
);

// --- 7. The Neumorphic (Soft UI) ---
export const MaintenanceNeumorphic = () => (
  <div className="flex items-center justify-center container w-full bg-[#e0e5ec] rounded-3xl">
    <div className="w-full max-w-md p-10 rounded-[40px] bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center">
      <div className="w-24 h-24 rounded-full bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] flex items-center justify-center text-4xl mb-8 mx-auto text-gray-400">
        💤
      </div>
      
      <h2 className="text-2xl font-bold text-gray-600 mb-4">System Sleeping</h2>
      <p className="text-gray-500 mb-10">We are currently in maintenance mode. We will wake up shortly.</p>
      
      <button 
        onClick={() => window.location.reload()}
        className="px-8 py-3 rounded-xl bg-[#e0e5ec] text-gray-600 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:text-blue-500 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] active:scale-95 transition-all"
      >
        Refresh Page
      </button>
    </div>
  </div>
);

// --- 8. The Cyberpunk (Glitch) ---
export const MaintenanceCyber = () => (
  <div className=" bg-black container relative rounded-3xl overflow-hidden flex flex-col items-center justify-center border-2 border-red-600 p-8">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    
    <div className="relative z-10 text-center">
      <div className="inline-block border border-red-600 text-red-600 px-4 py-1 font-mono text-xs mb-8 animate-pulse">
        SYSTEM_OFFLINE
      </div>
      
      <h1 className="text-6xl md:text-8xl font-black text-white relative mb-6" style={{textShadow: "4px 4px 0px #DC2626"}}>
        MAINTENANCE
      </h1>
      
      <p className="text-red-500 font-mono max-w-md mx-auto mb-10">
        > SERVER REBOOT INITIATED.<br/>
        > ESTABLISHING SECURE PROTOCOLS.<br/>
        > PLEASE STAND BY...
      </p>
      
      <div className="flex justify-center gap-4">
        <div className="w-3 h-3 bg-red-600 animate-ping"></div>
        <div className="w-3 h-3 bg-red-600 animate-ping delay-75"></div>
        <div className="w-3 h-3 bg-red-600 animate-ping delay-150"></div>
      </div>
    </div>
  </div>
);

// --- 9. The Status Dashboard (Detailed) ---
export const MaintenanceDashboard = () => (
  <div className="flex flex-col items-center justify-center container w-full bg-slate-50 border border-gray-200 rounded-3xl p-8">
    <div className="w-full max-w-lg bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h2 className="font-bold text-slate-800">System Status</h2>
        <span className="text-xs font-bold bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Maintenance</span>
      </div>
      <div className="p-6 space-y-4">
        {[
          { name: "Web Application", status: "Maintenance", color: "bg-yellow-500" },
          { name: "API Services", status: "Operational", color: "bg-green-500" },
          { name: "Payment Gateway", status: "Operational", color: "bg-green-500" },
          { name: "CDN / Assets", status: "Degraded", color: "bg-orange-500" },
        ].map((item) => (
          <div key={item.name} className="flex justify-between items-center">
            <span className="text-sm text-slate-600 font-medium">{item.name}</span>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${item.color} ${item.status === 'Maintenance' ? 'animate-pulse' : ''}`}></div>
              <span className="text-xs text-slate-500 font-medium">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-slate-50 p-4 text-center text-xs text-slate-400">
        Last updated: Just now
      </div>
    </div>
    <div className="mt-8 text-center">
      <h3 className="font-bold text-slate-900">Scheduled Downtime</h3>
      <p className="text-slate-500 text-sm">We are rolling out new features. Back in 30m.</p>
    </div>
  </div>
);

// --- 10. The Countdown (Specific Time) ---
export const MaintenanceCountdown = () => (
  <div className="flex flex-col items-center justify-center container w-full bg-slate-900 text-white rounded-3xl border border-slate-800">
    <div className="text-center">
      <div className="text-indigo-400 font-bold uppercase tracking-[0.2em] mb-6">Scheduled Maintenance</div>
      <h1 className="text-4xl font-bold mb-12">We'll be back in</h1>
      
      <div className="flex gap-4 md:gap-8 justify-center mb-12">
        {[
          { label: 'Hours', val: '01' },
          { label: 'Minutes', val: '45' },
          { label: 'Seconds', val: '12' }
        ].map(item => (
          <div key={item.label} className="flex flex-col items-center">
            <div className="text-4xl md:text-6xl font-mono font-bold">{item.val}</div>
            <div className="text-xs uppercase text-slate-500 mt-2">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="max-w-md mx-auto text-slate-400 text-sm">
        <p>We are currently updating our servers to provide a faster service. We apologize for any inconvenience.</p>
      </div>
    </div>
  </div>
);


// --- Main Gallery Wrapper ---
const MaintenanceGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-100 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Maintenance Pages</h1>
        <p className="text-slate-500">Components to keep users informed during downtime.</p>
      </div>
      
      <div className="space-y-32">
        
        <section className='box-shadow p-4 rounded-lg relative group/main'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/main:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="flex flex-col items-center justify-center container w-full bg-white border border-gray-100 rounded-3xl p-8 text-center">
    <div className="relative mb-8">
      <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center">
        <GearIcon className="w-12 h-12 text-blue-600 animate-[spin_4s_linear_infinite]" />
      </div>
      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
      </div>
    </div>
    
    <h1 className="text-3xl font-bold text-gray-900 mb-4">We're improving our platform</h1>
    <p className="text-gray-500 max-w-md mb-8">
      We are currently performing scheduled maintenance to improve your experience. We expect to be back by <span className="font-bold text-gray-700">14:00 UTC</span>.
    </p>
    
    <div className="flex flex-col gap-3 w-full max-w-xs">
      <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
        Check Status Page
      </button>
      <button className="w-full py-3 bg-white border border-gray-200 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition-colors">
        Contact Support
      </button>
    </div>
  </div>`} htmlCode={`<div class="flex flex-col items-center justify-center container w-full bg-white border border-gray-100 rounded-3xl p-8 text-center">
    <div class="relative mb-8">
      <div class="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center">
        <gearicon class="w-12 h-12 text-blue-600 animate-[spin_4s_linear_infinite]" ></gearicon>
      </div>
      <div class="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
        <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
      </div>
    </div>
    
    <h1 class="text-3xl font-bold text-gray-900 mb-4">We're improving our platform</h1>
    <p class="text-gray-500 max-w-md mb-8">
      We are currently performing scheduled maintenance to improve your experience. We expect to be back by <span class="font-bold text-gray-700">14:00 UTC</span>.
    </p>
    
    <div class="flex flex-col gap-3 w-full max-w-xs">
      <button class="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
        Check Status Page
      </button>
      <button class="w-full py-3 bg-white border border-gray-200 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition-colors">
        Contact Support
      </button>
    </div>
  </div>`} cssCode={`/* MaintenanceStandard Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #22c55e;\n  background-color: #2563eb;\n  background-color: #eff6ff;\n  background-color: #ffffff;\n  border-color: #e5e7eb;\n  border-color: #f3f4f6;\n  border-radius: 0.5rem;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #111827;\n  color: #2563eb;\n  color: #374151;\n  color: #4b5563;\n  color: #6b7280;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  justify-content: center;\n  padding-top: 0.75rem; padding-bottom: 0.75rem;\n  padding: 2rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 01. Standard SaaS </span>
          <MaintenanceStandard />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/main'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/main:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="flex flex-col justify-center container w-full bg-[#f8f8f8] rounded-3xl p-12 border border-gray-200">
    <div className="max-w-2xl">
      <div className="h-1 w-16 bg-black mb-8"></div>
      <h1 className="text-6xl font-serif text-black leading-tight mb-8">
        Briefly <br/> unavailable.
      </h1>
      <p className="text-xl text-gray-500 leading-relaxed mb-12">
        We are performing a necessary system upgrade. <br/>
        Please check back shortly.
      </p>
      
      <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
        <a href="#" className="border-b border-black pb-1 hover:opacity-50 transition-opacity">Twitter Updates</a>
        <a href="#" className="border-b border-black pb-1 hover:opacity-50 transition-opacity">Email Us</a>
      </div>
    </div>
  </div>`} htmlCode={`<div class="flex flex-col justify-center container w-full bg-[#f8f8f8] rounded-3xl p-12 border border-gray-200">
    <div class="max-w-2xl">
      <div class="h-1 w-16 bg-black mb-8"></div>
      <h1 class="text-6xl font-serif text-black leading-tight mb-8">
        Briefly <br/> unavailable.
      </h1>
      <p class="text-xl text-gray-500 leading-relaxed mb-12">
        We are performing a necessary system upgrade. <br/>
        Please check back shortly.
      </p>
      
      <div class="flex gap-8 text-sm font-bold uppercase tracking-widest">
        <a href="#" class="border-b border-black pb-1 hover:opacity-50 transition-opacity">Twitter Updates</a>
        <a href="#" class="border-b border-black pb-1 hover:opacity-50 transition-opacity">Email Us</a>
      </div>
    </div>
  </div>`} cssCode={`/* MaintenanceMinimal Styles (Generated from Tailwind) */\n.component-root {\n  background-color: #000000;\n  border-color: #000000;\n  border-color: #e5e7eb;\n  border-radius: 1.5rem;\n  border-width: 1px; border-style: solid;\n  color: #000000;\n  color: #6b7280;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  justify-content: center;\n  padding: 3rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 02. Minimalist Typography </span>
          <MaintenanceMinimal />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/main'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/main:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="container w-full bg-slate-900 rounded-3xl p-8 flex flex-col items-center justify-center font-mono">
      <div className="w-full max-w-lg bg-black border border-gray-700 rounded-lg shadow-2xl overflow-hidden">
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
          <span className="text-xs text-gray-400">system_update.sh</span>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="p-6 h-64 overflow-y-auto">
          {logs.map((log, i) => (
            <div key={i} className="text-green-500 mb-2 text-sm">
              {log}
            </div>
          )`} htmlCode={`<div class="container w-full bg-slate-900 rounded-3xl p-8 flex flex-col items-center justify-center font-mono">
      <div class="w-full max-w-lg bg-black border border-gray-700 rounded-lg shadow-2xl overflow-hidden">
        <div class="bg-gray-800 px-4 py-2 flex items-center justify-between">
          <span class="text-xs text-gray-400">system_update.sh</span>
          <div class="flex gap-1.5">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div class="p-6 h-64 overflow-y-auto">
          <!-- Mapping Start -->
(
            <div key=... class="text-green-500 mb-2 text-sm">
              ...
            </div>
          )`} cssCode={`/* MaintenanceTerminal Styles (Best effort conversion) */\n.component-root {\n  width: 100%;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  background-color: #000000;\n  border: 1px solid;\n  border-radius: 0.5rem;\n  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);\n  padding-left: 1rem; padding-right: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  display: flex;\n}\n\n/* Note: This is an automated mapping of core layout classes. \n   Full Tailwind support recommended for complex components. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 03. Developer Terminal </span>
          <MaintenanceTerminal />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/main'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/main:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="relative flex items-center justify-center container w-full rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
    <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-60 animate-blob"></div>
    <div className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-300 rounded-full mix-blend-overlay filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>

    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-12 rounded-[2rem] shadow-2xl text-center text-white max-w-lg mx-4">
      <div className="text-6xl mb-6 animate-bounce">🚧</div>
      <h1 className="text-4xl font-bold mb-4 drop-shadow-md">Under Construction</h1>
      <p className="text-white/90 text-lg mb-8">
        We're building something amazing. We'll be back online shortly with a fresh new look.
      </p>
      <div className="inline-block px-6 py-2 bg-white/20 rounded-full border border-white/30 text-sm font-medium">
        Estimated return: 2 hours
      </div>
    </div>
  </div>`} htmlCode={`<div class="relative flex items-center justify-center container w-full rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
    <div class="absolute top-20 left-20 w-64 h-64 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-60 animate-blob"></div>
    <div class="absolute bottom-20 right-20 w-64 h-64 bg-cyan-300 rounded-full mix-blend-overlay filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>

    <div class="relative bg-white/10 backdrop-blur-xl border border-white/20 p-12 rounded-[2rem] shadow-2xl text-center text-white max-w-lg mx-4">
      <div class="text-6xl mb-6 animate-bounce">🚧</div>
      <h1 class="text-4xl font-bold mb-4 drop-shadow-md">Under Construction</h1>
      <p class="text-white/90 text-lg mb-8">
        We're building something amazing. We'll be back online shortly with a fresh new look.
      </p>
      <div class="inline-block px-6 py-2 bg-white/20 rounded-full border border-white/30 text-sm font-medium">
        Estimated return: 2 hours
      </div>
    </div>
  </div>`} cssCode={`/* MaintenanceGlass Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  backdrop-filter: blur(12px);\n  background-color: #fde047;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #ffffff;\n  display: flex;\n  font-weight: 700;\n  justify-content: center;\n  padding-left: 1.5rem; padding-right: 1.5rem;\n  padding-top: 0.5rem; padding-bottom: 0.5rem;\n  padding: 3rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 04. Glassmorphism </span>
          <MaintenanceGlass />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/main'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/main:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="flex flex-col items-center justify-center container w-full bg-white border border-gray-100 rounded-3xl p-8">
      <div className="w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Updating Database</h1>
        <p className="text-gray-500 mb-10">We are pushing a critical security update.</p>
        
        <div className="relative pt-1 mb-2">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-50">
                In Progress
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-blue-600">
                {Math.round(progress`} htmlCode={`<div class="flex flex-col items-center justify-center container w-full bg-white border border-gray-100 rounded-3xl p-8">
      <div class="w-full max-w-md text-center">
        <h1 class="text-2xl font-bold text-gray-900 mb-2">Updating Database</h1>
        <p class="text-gray-500 mb-10">We are pushing a critical security update.</p>
        
        <div class="relative pt-1 mb-2">
          <div class="flex mb-2 items-center justify-between">
            <div>
              <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-50">
                In Progress
              </span>
            </div>
            <div class="text-right">
              <span class="text-xs font-semibold inline-block text-blue-600">
                {Math.round(progress`} cssCode={`/* MaintenanceProgress Styles (Best effort conversion) */\n.component-root {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  background-color: #ffffff;\n  border: 1px solid;\n  padding: 2rem;\n  width: 100%;\n  text-align: center;\n  font-weight: 700;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n/* Note: This is an automated mapping of core layout classes. \n   Full Tailwind support recommended for complex components. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 05. Progress Status </span>
          <MaintenanceProgress />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/main'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/main:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="flex flex-col items-center justify-center container w-full bg-slate-800 rounded-3xl border-4 border-black relative overflow-hidden">
    {/* Construction Tape Background */}
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, transparent 10px, transparent 20px)' }}></div>

    <div className="relative z-10 bg-white border-4 border-black p-10 max-w-lg text-center shadow-[12px_12px_0_0_#000]">
      <h1 className="text-5xl font-black uppercase mb-4">Work in<br/>Progress</h1>
      <div className="h-2 bg-black w-full mb-6"></div>
      <p className="font-bold text-xl mb-8">
        We are fixing some bugs. <br/> Don't panic.
      </p>
      <button className="w-full py-4 bg-black text-white font-black text-xl uppercase hover:bg-white hover:text-black border-4 border-transparent hover:border-black transition-colors">
        Try Refreshing
      </button>
    </div>
  </div>`} htmlCode={`<div class="flex flex-col items-center justify-center container w-full bg-slate-800 rounded-3xl border-4 border-black relative overflow-hidden">
    ...
    <div class="absolute inset-0 opacity-10" style=...}></div>

    <div class="relative z-10 bg-white border-4 border-black p-10 max-w-lg text-center shadow-[12px_12px_0_0_#000]">
      <h1 class="text-5xl font-black uppercase mb-4">Work in<br/>Progress</h1>
      <div class="h-2 bg-black w-full mb-6"></div>
      <p class="font-bold text-xl mb-8">
        We are fixing some bugs. <br/> Don't panic.
      </p>
      <button class="w-full py-4 bg-black text-white font-black text-xl uppercase hover:bg-white hover:text-black border-4 border-transparent hover:border-black transition-colors">
        Try Refreshing
      </button>
    </div>
  </div>`} cssCode={`/* MaintenanceBrutalist Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #000000;\n  background-color: #1e293b;\n  background-color: #ffffff;\n  border-color: #000000;\n  border-color: transparent;\n  border-radius: 1.5rem;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  justify-content: center;\n  padding-top: 1rem; padding-bottom: 1rem;\n  padding: 2.5rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 06. Brutalist Alert </span>
          <MaintenanceBrutalist />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/main'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/main:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="flex items-center justify-center container w-full bg-[#e0e5ec] rounded-3xl">
    <div className="w-full max-w-md p-10 rounded-[40px] bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center">
      <div className="w-24 h-24 rounded-full bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] flex items-center justify-center text-4xl mb-8 mx-auto text-gray-400">
        💤
      </div>
      
      <h2 className="text-2xl font-bold text-gray-600 mb-4">System Sleeping</h2>
      <p className="text-gray-500 mb-10">We are currently in maintenance mode. We will wake up shortly.</p>
      
      <button 
        onClick={() => window.location.reload()}
        className="px-8 py-3 rounded-xl bg-[#e0e5ec] text-gray-600 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:text-blue-500 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] active:scale-95 transition-all"
      >
        Refresh Page
      </button>
    </div>
  </div>`} htmlCode={`<div class="flex items-center justify-center container w-full bg-[#e0e5ec] rounded-3xl">
    <div class="w-full max-w-md p-10 rounded-[40px] bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center">
      <div class="w-24 h-24 rounded-full bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] flex items-center justify-center text-4xl mb-8 mx-auto text-gray-400">
        💤
      </div>
      
      <h2 class="text-2xl font-bold text-gray-600 mb-4">System Sleeping</h2>
      <p class="text-gray-500 mb-10">We are currently in maintenance mode. We will wake up shortly.</p>
      
      <button 
        onClick=...
        class="px-8 py-3 rounded-xl bg-[#e0e5ec] text-gray-600 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:text-blue-500 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] active:scale-95 transition-all"
      >
        Refresh Page
      </button>
    </div>
  </div>`} cssCode={`/* MaintenanceNeumorphic Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #4b5563;\n  color: #6b7280;\n  color: #9ca3af;\n  display: flex;\n  font-weight: 700;\n  justify-content: center;\n  padding-left: 2rem; padding-right: 2rem;\n  padding-top: 0.75rem; padding-bottom: 0.75rem;\n  padding: 2.5rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 07. Neumorphic Sleep </span>
          <MaintenanceNeumorphic />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/main'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/main:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className=" bg-black container relative rounded-3xl overflow-hidden flex flex-col items-center justify-center border-2 border-red-600 p-8">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    
    <div className="relative z-10 text-center">
      <div className="inline-block border border-red-600 text-red-600 px-4 py-1 font-mono text-xs mb-8 animate-pulse">
        SYSTEM_OFFLINE
      </div>
      
      <h1 className="text-6xl md:text-8xl font-black text-white relative mb-6" style={{textShadow: "4px 4px 0px #DC2626"}}>
        MAINTENANCE
      </h1>
      
      <p className="text-red-500 font-mono max-w-md mx-auto mb-10">
        > SERVER REBOOT INITIATED.<br/>
        > ESTABLISHING SECURE PROTOCOLS.<br/>
        > PLEASE STAND BY...
      </p>
      
      <div className="flex justify-center gap-4">
        <div className="w-3 h-3 bg-red-600 animate-ping"></div>
        <div className="w-3 h-3 bg-red-600 animate-ping delay-75"></div>
        <div className="w-3 h-3 bg-red-600 animate-ping delay-150"></div>
      </div>
    </div>
  </div>`} htmlCode={`<div class=" bg-black container relative rounded-3xl overflow-hidden flex flex-col items-center justify-center border-2 border-red-600 p-8">
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    
    <div class="relative z-10 text-center">
      <div class="inline-block border border-red-600 text-red-600 px-4 py-1 font-mono text-xs mb-8 animate-pulse">
        SYSTEM_OFFLINE
      </div>
      
      <h1 class="text-6xl md:text-8xl font-black text-white relative mb-6" style=...}>
        MAINTENANCE
      </h1>
      
      <p class="text-red-500 font-mono max-w-md mx-auto mb-10">
        > SERVER REBOOT INITIATED.<br/>
        > ESTABLISHING SECURE PROTOCOLS.<br/>
        > PLEASE STAND BY...
      </p>
      
      <div class="flex justify-center gap-4">
        <div class="w-3 h-3 bg-red-600 animate-ping"></div>
        <div class="w-3 h-3 bg-red-600 animate-ping delay-75"></div>
        <div class="w-3 h-3 bg-red-600 animate-ping delay-150"></div>
      </div>
    </div>
  </div>`} cssCode={`/* MaintenanceCyber Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #000000;\n  background-color: #dc2626;\n  border-color: #dc2626;\n  border-radius: 1.5rem;\n  border-width: 1px; border-style: solid;\n  color: #dc2626;\n  color: #ef4444;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-left: 1rem; padding-right: 1rem;\n  padding-top: 0.25rem; padding-bottom: 0.25rem;\n  padding: 2rem;\n  text-align: center;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 08. Cyberpunk Offline </span>
          <MaintenanceCyber />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/main'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/main:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="flex flex-col items-center justify-center container w-full bg-slate-50 border border-gray-200 rounded-3xl p-8">
    <div className="w-full max-w-lg bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h2 className="font-bold text-slate-800">System Status</h2>
        <span className="text-xs font-bold bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Maintenance</span>
      </div>
      <div className="p-6 space-y-4">
        {[
          { name: "Web Application", status: "Maintenance", color: "bg-yellow-500" },
          { name: "API Services", status: "Operational", color: "bg-green-500" },
          { name: "Payment Gateway", status: "Operational", color: "bg-green-500" },
          { name: "CDN / Assets", status: "Degraded", color: "bg-orange-500" },
        ].map((item) => (
          <div key={item.name} className="flex justify-between items-center">
            <span className="text-sm text-slate-600 font-medium">{item.name}</span>
            <div className="flex items-center gap-2">
              <div className={\`w-2 h-2 rounded-full \${item.color} \${item.status === 'Maintenance' ? 'animate-pulse' : ''}\`}></div>
              <span className="text-xs text-slate-500 font-medium">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-slate-50 p-4 text-center text-xs text-slate-400">
        Last updated: Just now
      </div>
    </div>
    <div className="mt-8 text-center">
      <h3 className="font-bold text-slate-900">Scheduled Downtime</h3>
      <p className="text-slate-500 text-sm">We are rolling out new features. Back in 30m.</p>
    </div>
  </div>`} htmlCode={`<div class="flex flex-col items-center justify-center container w-full bg-slate-50 border border-gray-200 rounded-3xl p-8">
    <div class="w-full max-w-lg bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div class="p-6 border-b border-gray-100 flex justify-between items-center">
        <h2 class="font-bold text-slate-800">System Status</h2>
        <span class="text-xs font-bold bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Maintenance</span>
      </div>
      <div class="p-6 space-y-4">
        ...,
          ...,
          ...,
          ...,
        ].map((item) => (
          <div key=... class="flex justify-between items-center">
            <span class="text-sm text-slate-600 font-medium">...</span>
            <div class="flex items-center gap-2">
              <div class=w-2 h-2 rounded-full \$... \$...></div>
              <span class="text-xs text-slate-500 font-medium">...</span>
            </div>
          </div>
        ))}
      </div>
      <div class="bg-slate-50 p-4 text-center text-xs text-slate-400">
        Last updated: Just now
      </div>
    </div>
    <div class="mt-8 text-center">
      <h3 class="font-bold text-slate-900">Scheduled Downtime</h3>
      <p class="text-slate-500 text-sm">We are rolling out new features. Back in 30m.</p>
    </div>
  </div>`} cssCode={`/* MaintenanceDashboard Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #f8fafc;\n  background-color: #ffffff;\n  border-color: #e5e7eb;\n  border-color: #f3f4f6;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #0f172a;\n  color: #1e293b;\n  color: #475569;\n  color: #64748b;\n  color: #94a3b8;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  justify-content: center;\n  justify-content: space-between;\n  padding-left: 0.5rem; padding-right: 0.5rem;\n  padding-top: 0.25rem; padding-bottom: 0.25rem;\n  padding: 1.5rem;\n  padding: 1rem;\n  padding: 2rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 09. Detailed Dashboard </span>
          <MaintenanceDashboard />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/main'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/main:opacity-100 transition-opacity"><CopyButton jsxCode={`const MaintenanceCountdown = () => (
  <div className="flex flex-col items-center justify-center container w-full bg-slate-900 text-white rounded-3xl border border-slate-800 p-12">
    <div className="text-center">
      <div className="text-indigo-400 font-bold uppercase tracking-[0.2em] mb-6">Scheduled Maintenance</div>
      <h1 className="text-4xl font-bold mb-12">We'll be back in</h1>
      <div className="flex gap-4 md:gap-8 justify-center mb-12">
        {[{ label: 'Hours', val: '01' }, { label: 'Minutes', val: '45' }, { label: 'Seconds', val: '12' }].map(item => (
          <div key={item.label} className="flex flex-col items-center">
            <div className="text-4xl md:text-6xl font-mono font-bold">{item.val}</div>
            <div className="text-xs uppercase text-slate-500 mt-2">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);`} htmlCode={`<div class="flex flex-col items-center justify-center container w-full bg-slate-900 text-white rounded-3xl border border-slate-800 p-12">
  <div class="text-center">
    <div class="text-indigo-400 font-bold uppercase tracking-[0.2em] mb-6">Scheduled Maintenance</div>
    <h1 class="text-4xl font-bold mb-12">We'll be back in</h1>
  </div>
</div>`} cssCode={`/* MaintenanceCountdown Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #0f172a;\n  border-color: #1e293b;\n  border-radius: 1.5rem;\n  border-width: 1px; border-style: solid;\n  color: #64748b;\n  color: #818cf8;\n  color: #94a3b8;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">10. Dark Countdown</span>
          <MaintenanceCountdown />
        </section>

      </div>
    </div>
  );
};

export default MaintenanceGallery;