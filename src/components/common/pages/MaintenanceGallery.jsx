import React, { useState, useEffect } from 'react';
import CopyButton from '../CopyButton';

// --- Shared Icon Component ---
const GearIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// --- 1. The SaaS Standard ---
export const MaintenanceStandard = () => (
  <div className="flex flex-col items-center justify-center min-h-[600px] w-full bg-white border border-slate-100 rounded-[3rem] p-12 text-center relative overflow-hidden font-sans italic font-bold">
    <div className="relative z-10 max-w-2xl mx-auto">
      <div className="relative mb-12 inline-block">
        <div className="w-32 h-32 bg-blue-50 rounded-[2.5rem] flex items-center justify-center shadow-inner">
          <GearIcon className="w-16 h-16 text-blue-600 animate-[spin_8s_linear_infinite]" />
        </div>
        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-blue-50">
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <h1 className="text-6xl md:text-8xl font-black text-slate-950 mb-8 tracking-tighter uppercase leading-[0.9]">
        System_ <br/> <span className="text-blue-600 italic">Evolution</span>
      </h1>
      <p className="text-slate-500 mb-12 text-xl max-w-lg mx-auto lowercase font-medium">
        We are optimizing the core logic nodes. <br/> protocol_resumption: 14:00_UTC.
      </p>
      
      <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
        <button className="flex-1 px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 uppercase text-xs tracking-widest active:scale-95">
          Check_Status
        </button>
        <button className="flex-1 px-10 py-5 bg-white border-2 border-slate-100 text-slate-600 font-black rounded-2xl hover:border-blue-600 transition-all uppercase text-xs tracking-widest active:scale-95">
          Support_Node
        </button>
      </div>
    </div>
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
       <div className="absolute top-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-blue-400 rounded-full blur-[120px]"></div>
       <div className="absolute bottom-[-20%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-400 rounded-full blur-[120px]"></div>
    </div>
  </div>
);

// --- 2. Minimalist Typography ---
export const MaintenanceMinimal = () => (
  <div className="flex flex-col justify-center min-h-[600px] w-full bg-[#0a0a0a] rounded-[3rem] p-12 md:p-24 border border-white/5 font-sans italic font-bold relative overflow-hidden">
    <div className="w-full max-w-3xl relative z-10">
      <div className="h-2 w-32 bg-blue-600 mb-16"></div>
      <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.85] mb-16 uppercase tracking-tighter">
        Briefly <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 italic">Offline</span> <br/>
        For_Refinement
      </h1>
      <p className="text-2xl text-white/40 leading-relaxed mb-20 max-w-xl lowercase font-medium">
        We are performing a necessary architecture upgrade to enhance the digital signal.
      </p>
      
      <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">
        <a href="#" className="border-b-2 border-blue-600 pb-2 hover:text-white transition-colors">Sync_Updates</a>
        <a href="#" className="border-b-2 border-blue-600 pb-2 hover:text-white transition-colors">Contact_Core</a>
      </div>
    </div>
    <div className="absolute bottom-0 right-0 p-24 text-white/5 text-[15rem] font-black uppercase leading-none select-none">
      MAINT
    </div>
  </div>
);

// --- 3. Developer Terminal ---
export const MaintenanceTerminal = () => (
  <div className="flex items-center justify-center min-h-[600px] w-full bg-black rounded-[3rem] border-2 border-blue-500/20 relative overflow-hidden font-mono italic font-bold">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    
    <div className="relative z-10 w-full max-w-xl p-4">
      <div className="bg-black border-2 border-blue-600 p-12 shadow-[0_0_50px_rgba(37,99,235,0.1)] relative">
        <div className="absolute -top-4 -left-4 bg-blue-600 text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest">Protocol_Status</div>
        
        <div className="text-blue-500 text-[10px] mb-12 flex justify-between uppercase tracking-widest opacity-50 font-mono">
          <span>> SYSTEM_UPGRADE.SH</span>
          <span>SECURE_SHELL</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black text-white mb-10 uppercase tracking-tighter leading-none">
          CORE_ <br/> <span className="text-blue-500">OPTIMIZING</span><span className="animate-pulse text-blue-500">_</span>
        </h1>
        
        <div className="space-y-4 mb-12 text-blue-500/60 text-xs uppercase leading-relaxed font-mono">
          <p>> INITIATING_DATABASE_SCHEMA_SYNC...</p>
          <p>> FLUSHING_GLOBAL_CDN_CACHE...</p>
          <p>> REBOOTING_WORKER_NODES: <span className="text-blue-500 font-black">75%_COMPLETE</span></p>
        </div>

        <div className="flex justify-between items-center text-[10px] text-white/40 uppercase tracking-[0.3em] font-mono">
          <span>EST_TIME: 15_MINS</span>
          <span className="animate-pulse text-blue-600">PLEASE_DO_NOT_REFRESH</span>
        </div>
      </div>
    </div>
  </div>
);

// --- 4. Glassmorphism Vibrant ---
export const MaintenanceGlass = () => (
  <div className="relative flex items-center justify-center min-h-[600px] w-full rounded-[3rem] overflow-hidden bg-slate-950 font-sans italic font-bold">
    <div className="absolute top-20 left-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse"></div>
    <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-600 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse delay-1000"></div>

    <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 p-12 md:p-20 rounded-[4rem] shadow-2xl text-center text-white max-w-2xl mx-4">
      <div className="text-7xl mb-12 animate-bounce drop-shadow-2xl">🛠️</div>
      <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.85] drop-shadow-2xl">
        Protocol <br/> <span className="italic text-blue-400">Refinement</span>
      </h1>
      <p className="text-white/70 text-xl mb-16 lowercase font-medium">
        We're building a more robust digital matrix. <br/> synchronization will resume shortly.
      </p>
      <div className="inline-block px-8 py-4 bg-white/10 rounded-3xl border-2 border-white/10 text-xs font-black uppercase tracking-[0.3em] shadow-2xl">
        Estimated_Return: 120_Mins
      </div>
    </div>
  </div>
);

// --- 5. Progress Status ---
export const MaintenanceProgress = () => (
  <div className="flex flex-col items-center justify-center min-h-[600px] w-full bg-white border border-slate-100 rounded-[3rem] p-12 text-center relative overflow-hidden font-sans italic font-bold">
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-[10px] text-blue-600 font-black uppercase tracking-[0.4em] mb-8">Node_Migration_V4</div>
      <h1 className="text-5xl md:text-7xl font-black text-slate-950 mb-4 tracking-tighter uppercase leading-[0.9]">
        Optimizing_Logic
      </h1>
      <p className="text-slate-500 mb-16 text-lg lowercase font-medium">Pushing critical architecture nodes to the global edge.</p>
      
      <div className="relative pt-1 max-w-md mx-auto">
        <div className="flex mb-4 items-center justify-between font-black uppercase text-[10px] tracking-widest">
          <div className="text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">Migration_Status</div>
          <div className="text-blue-600">85%</div>
        </div>
        <div className="overflow-hidden h-4 mb-8 flex rounded-2xl bg-slate-100 p-1">
          <div style={{ width: '85%' }} className="rounded-xl bg-blue-600 transition-all duration-1000 shadow-xl shadow-blue-200"></div>
        </div>
        <p className="text-[10px] text-slate-400 uppercase tracking-widest">
          Ref_ID: #CORE-8842 // Priority: Absolute
        </p>
      </div>
    </div>
  </div>
);

// --- 6. Brutalist Alert ---
export const MaintenanceBrutalist = () => (
  <div className="flex flex-col items-center justify-center min-h-[600px] w-full bg-yellow-400 rounded-[3rem] border-8 border-slate-950 relative overflow-hidden font-sans italic font-black uppercase">
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 20px, transparent 20px, transparent 40px)' }}></div>

    <div className="relative z-10 bg-white border-8 border-slate-950 p-12 md:p-20 max-w-2xl text-center shadow-[24px_24px_0_0_#000] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
      <h1 className="text-7xl md:text-9xl font-black text-slate-950 leading-[0.8] mb-12 tracking-tighter">Work_In <br/> <span className="text-white drop-shadow-[4px_4px_0_#000]">Progress.</span></h1>
      <div className="h-4 bg-slate-950 w-full mb-12"></div>
      <p className="font-black text-2xl mb-12 text-slate-950">We_Are_Crushing_Bugs. <br/> Do_Not_Panic.</p>
      <button className="w-full py-6 bg-slate-950 text-white font-black text-2xl uppercase hover:bg-white hover:text-slate-950 border-4 border-transparent hover:border-slate-950 transition-all tracking-[0.2em] shadow-xl">
        Try_Synchronizing_Later
      </button>
    </div>
  </div>
);

// --- 7. Neumorphic Sleep ---
export const MaintenanceNeumorphic = () => (
  <div className="flex items-center justify-center min-h-[600px] w-full bg-[#e0e5ec] rounded-[3rem] font-sans italic font-bold">
    <div className="w-full max-w-xl p-16 md:p-20 rounded-[4rem] bg-[#e0e5ec] shadow-[30px_30px_60px_#bebebe,-30px_-30px_60px_#ffffff] text-center border border-white/20">
      <div className="w-32 h-32 rounded-full bg-[#e0e5ec] shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] flex items-center justify-center text-5xl mb-12 mx-auto border-4 border-white/50">
        💤
      </div>
      
      <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 uppercase tracking-tighter leading-none">Matrix_Sleep</h2>
      <p className="text-slate-500 mb-16 lowercase font-medium text-lg italic">We are optimizing nodes for a flawless synchronization.</p>
      
      <button className="px-12 py-6 rounded-2xl bg-[#e0e5ec] text-blue-600 font-black shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] active:scale-95 transition-all uppercase text-xs tracking-widest border border-white/20">
        Refresh_Signal
      </button>
    </div>
  </div>
);

// --- 8. Cyberpunk Offline ---
export const MaintenanceCyber = () => (
  <div className="flex items-center justify-center min-h-[600px] w-full bg-black rounded-[3rem] border-4 border-red-600 relative overflow-hidden font-mono italic font-bold">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
    
    <div className="relative z-10 text-center p-8">
      <div className="inline-block border-2 border-red-600 text-red-600 px-6 py-2 font-black text-xs mb-10 animate-pulse tracking-[0.5em] uppercase">
        System_Offline
      </div>
      
      <h1 className="text-7xl md:text-9xl font-black text-white relative mb-10 tracking-tighter uppercase leading-none drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">
        MAINT_ <br/> <span className="text-red-600">PROTOCOL</span>
      </h1>
      
      <p className="text-red-500 font-black max-w-xl mx-auto mb-16 text-sm uppercase leading-relaxed tracking-widest">
        > SERVER_REBOOT_INITIATED.<br/>
        > ESTABLISHING_SECURE_NODES.<br/>
        > PLEASE_STAND_BY_FOR_SYNC...
      </p>
      
      <div className="flex justify-center gap-6">
        <div className="w-4 h-4 bg-red-600 animate-ping"></div>
        <div className="w-4 h-4 bg-red-600 animate-ping delay-150"></div>
        <div className="w-4 h-4 bg-red-600 animate-ping delay-300"></div>
      </div>
    </div>
  </div>
);

// --- 9. Detailed Dashboard ---
export const MaintenanceDashboard = () => (
  <div className="flex flex-col items-center justify-center min-h-[600px] w-full bg-slate-50 border border-slate-100 rounded-[3rem] p-12 font-sans italic font-bold">
    <div className="w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl border-2 border-slate-100 overflow-hidden">
      <div className="p-10 border-b-2 border-slate-50 flex justify-between items-center bg-slate-50/50">
        <h2 className="font-black text-2xl tracking-tighter text-slate-900 uppercase">System_Nodes</h2>
        <span className="text-[10px] font-black bg-yellow-400 text-slate-950 px-4 py-2 rounded-full uppercase tracking-widest">Optimizing</span>
      </div>
      <div className="p-10 space-y-8">
        {[
          { name: "Logic_Core_App", status: "Refining", color: "bg-yellow-500" },
          { name: "Neural_API", status: "Operational", color: "bg-blue-600" },
          { name: "Payment_Node", status: "Operational", color: "bg-blue-600" },
          { name: "CDN_Orchestration", status: "Degraded", color: "bg-orange-500" },
        ].map((item) => (
          <div key={item.name} className="flex justify-between items-center border-b border-slate-50 pb-4 last:border-0 last:pb-0">
            <span className="text-sm text-slate-600 font-black uppercase tracking-widest">{item.name}</span>
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${item.color} ${item.status === 'Refining' ? 'animate-pulse' : ''}`}></div>
              <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-slate-50 p-6 text-center text-[8px] text-slate-300 font-black uppercase tracking-[0.5em]">
        Last_Synchronized: Just_Now
      </div>
    </div>
    <div className="mt-12 text-center">
      <h3 className="font-black text-2xl text-slate-900 uppercase tracking-tighter mb-2">Scheduled_Downtime</h3>
      <p className="text-slate-500 lowercase font-medium">We are rolling out the next generation of logic. back_in: 30m.</p>
    </div>
  </div>
);

// --- 10. Dark Countdown ---
export const MaintenanceCountdown = () => (
  <div className="flex flex-col items-center justify-center min-h-[600px] w-full bg-slate-950 text-white rounded-[3rem] border-2 border-white/5 relative font-sans italic font-bold overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_70%)] pointer-events-none"></div>
    <div className="text-center z-10 p-12">
      <div className="text-blue-500 font-black uppercase tracking-[0.5em] mb-10 text-[10px]">Matrix_Core // Maint_Cycle</div>
      <h1 className="text-6xl md:text-8xl font-black mb-20 uppercase tracking-tighter leading-none">Resuming_In</h1>
      
      <div className="grid grid-cols-3 gap-12 md:gap-20 justify-center mb-20">
        <div>
          <div className="text-6xl md:text-9xl font-black tracking-tighter tabular-nums mb-4">01</div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-blue-500">Hours</div>
        </div>
        <div>
          <div className="text-6xl md:text-9xl font-black tracking-tighter tabular-nums mb-4">45</div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-blue-500">Mins</div>
        </div>
        <div>
          <div className="text-6xl md:text-9xl font-black tracking-tighter tabular-nums mb-4">12</div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-blue-500">Secs</div>
        </div>
      </div>

      <div className="max-w-xl mx-auto text-white/40 text-lg lowercase font-medium">
        <p>We are currently synchronizing our global node cluster to ensure the highest fidelity logic Resumption. thank_you_for_standing_by.</p>
      </div>
    </div>
  </div>
);

// --- Main Gallery Wrapper ---
const MaintenanceGallery = () => {
  return (
    <div className="container overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-64">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-none">Protocol_Maintenance</h1>
        <p className="text-slate-500 font-bold text-xl italic lowercase">Optimizing the digital void for the next evolution.</p>
      </div>
      
      <div className="space-y-32 max-w-6xl mx-auto">
        
        {/* 01. Standard SaaS */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const MaintenanceStandard = () => (
  <div className="flex flex-col items-center justify-center min-h-[600px] w-full bg-white border border-slate-100 rounded-[3rem] p-12 text-center relative overflow-hidden font-sans italic font-bold">
    <div className="relative z-10 max-w-2xl mx-auto">
      <div className="relative mb-12 inline-block">
        <div className="w-32 h-32 bg-blue-50 rounded-[2.5rem] flex items-center justify-center shadow-inner">
          <svg className="w-16 h-16 text-blue-600 animate-[spin_8s_linear_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-blue-50">
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
        </div>
      </div>
      <h1 className="text-6xl font-black text-slate-950 mb-8 tracking-tighter uppercase leading-[0.9]">System_ <br/> <span className="text-blue-600 italic">Evolution</span></h1>
      <p className="text-slate-500 mb-12 text-xl max-w-lg mx-auto lowercase font-medium">We are optimizing the core logic nodes. <br/> protocol_resumption: 14:00_UTC.</p>
      <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
        <button className="flex-1 px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 uppercase text-xs tracking-widest">Check_Status</button>
        <button className="flex-1 px-10 py-5 bg-white border-2 border-slate-100 text-slate-600 font-black rounded-2xl hover:border-blue-600 transition-all uppercase text-xs tracking-widest">Support_Node</button>
      </div>
    </div>
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
       <div className="absolute top-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-blue-400 rounded-full blur-[120px]"></div>
       <div className="absolute bottom-[-20%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-400 rounded-full blur-[120px]"></div>
    </div>
  </div>
);`}
              htmlCode={`<!-- SaaS Standard Maintenance -->
<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 600px; width: 100%; background: white; border: 1px solid #f1f5f9; border-radius: 48px; padding: 48px; text-align: center; position: relative; overflow: hidden; font-family: sans-serif; font-style: italic; font-weight: 700;">
  <div style="position: relative; z-index: 10; max-width: 672px; margin: 0 auto;">
    <div style="position: relative; margin-bottom: 48px; display: inline-block;">
      <div style="width: 128px; height: 128px; background: #eff6ff; border-radius: 40px; display: flex; align-items: center; justify-content: center; box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.06);">
        <svg style="width: 64px; height: 64px; color: #2563eb;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <div style="position: absolute; bottom: -8px; right: -8px; width: 48px; height: 48px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); border: 4px solid #eff6ff;">
        <div style="width: 16px; height: 16px; background: #2563eb; border-radius: 50%;"></div>
      </div>
    </div>
    <h1 style="font-size: 64px; font-weight: 900; color: #0f172a; margin-bottom: 32px; letter-spacing: -0.05em; text-transform: uppercase; line-height: 0.9;">System_ <br/> <span style="color: #2563eb; font-style: italic;">Evolution</span></h1>
    <p style="color: #64748b; margin-bottom: 48px; font-size: 20px; font-weight: 500; text-transform: lowercase;">We are optimizing the core logic nodes. <br/> protocol_resumption: 14:00_UTC.</p>
    <div style="display: flex; gap: 16px; max-width: 448px; margin: 0 auto;">
      <button style="flex: 1; padding: 20px; background: #2563eb; color: white; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; border: none; cursor: pointer; box-shadow: 0 25px 50px -12px rgba(37,99,235,0.2);">Check_Status</button>
      <button style="flex: 1; padding: 20px; background: white; color: #475569; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; border: 2px solid #f1f5f9; cursor: pointer;">Support_Node</button>
    </div>
  </div>
  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.05; pointer-events: none;">
    <div style="position: absolute; top: -20%; right: -10%; width: 640px; height: 640px; background: #60a5fa; border-radius: 50%; filter: blur(120px);"></div>
    <div style="position: absolute; bottom: -20%; left: -10%; width: 640px; height: 640px; background: #818cf8; border-radius: 50%; filter: blur(120px);"></div>
  </div>
</div>`}
              cssCode={`.maint-standard-root { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 600px; width: 100%; background: white; border: 1px solid #f1f5f9; border-radius: 48px; padding: 48px; text-align: center; position: relative; overflow: hidden; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; }
.gear-wrap { position: relative; margin-bottom: 48px; display: inline-block; }
.gear-box { width: 128px; height: 128px; background: #eff6ff; border-radius: 40px; display: flex; align-items: center; justify-content: center; box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.06); }
.gear-svg { width: 64px; height: 64px; color: #2563eb; animation: spin 8s linear infinite; }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
.status-badge { position: absolute; bottom: -8px; right: -8px; width: 48px; height: 48px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); border: 4px solid #eff6ff; }
.pulse-dot { width: 16px; height: 16px; background: #2563eb; border-radius: 50%; animation: pulse 2s infinite; }
@keyframes pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; } }
.maint-title { font-size: 48px; font-weight: 900; color: #0f172a; margin-bottom: 32px; letter-spacing: -0.05em; text-transform: uppercase; line-height: 0.9; }
@media (min-width: 768px) { .maint-title { font-size: 64px; } }
.title-highlight { color: #2563eb; font-style: italic; }
.maint-subtitle { color: #64748b; margin-bottom: 48px; font-size: 20px; font-weight: 500; text-transform: lowercase; }
.btn-grid { display: flex; flex-direction: column; gap: 16px; max-width: 448px; margin: 0 auto; width: 100%; }
@media (min-width: 768px) { .btn-grid { flex-direction: row; } }
.maint-btn-primary { flex: 1; padding: 20px; background: #2563eb; color: white; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; border: none; cursor: pointer; box-shadow: 0 25px 50px -12px rgba(37,99,235,0.2); transition: all 0.3s ease; }
.maint-btn-primary:hover { background: #1d4ed8; transform: translateY(-2px); }
.maint-btn-secondary { flex: 1; padding: 20px; background: white; color: #475569; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; border: 2px solid #f1f5f9; cursor: pointer; transition: all 0.3s ease; }
.maint-btn-secondary:hover { border-color: #2563eb; color: #2563eb; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">01. Standard SaaS Evolution</span>
           <MaintenanceStandard />
        </section>

        {/* 02. Minimalist Typography */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const MaintenanceMinimal = () => (
  <div className="flex flex-col justify-center min-h-[600px] w-full bg-[#0a0a0a] rounded-[3rem] p-12 md:p-24 border border-white/5 font-sans italic font-bold relative overflow-hidden text-left">
    <div className="w-full max-w-3xl relative z-10">
      <div className="h-2 w-32 bg-blue-600 mb-16"></div>
      <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.85] mb-16 uppercase tracking-tighter">Briefly <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 italic">Offline</span> <br/> For_Refinement</h1>
      <p className="text-2xl text-white/40 leading-relaxed mb-20 max-w-xl lowercase font-medium">We are performing a necessary architecture upgrade to enhance the digital signal.</p>
      <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">
        <a href="#" className="border-b-2 border-blue-600 pb-2 hover:text-white transition-colors">Sync_Updates</a>
        <a href="#" className="border-b-2 border-blue-600 pb-2 hover:text-white transition-colors">Contact_Core</a>
      </div>
    </div>
    <div className="absolute bottom-0 right-0 p-24 text-white/5 text-[15rem] font-black uppercase leading-none select-none">MAINT</div>
  </div>
);`}
              htmlCode={`<!-- Minimalist Maintenance -->
<div style="background: #0a0a0a; min-height: 600px; width: 100%; border-radius: 48px; padding: 80px; display: flex; flex-direction: column; justify-content: center; position: relative; overflow: hidden; font-family: sans-serif; font-style: italic; font-weight: 700; text-align: left;">
  <div style="width: 100%; max-width: 768px; position: relative; z-index: 10;">
    <div style="height: 8px; width: 128px; background: #2563eb; margin-bottom: 64px;"></div>
    <h1 style="font-size: 72px; font-weight: 900; color: white; line-height: 0.85; margin-bottom: 64px; text-transform: uppercase; letter-spacing: -0.05em;">Briefly <br/> <span style="color: #3b82f6; font-style: italic;">Offline</span> <br/> For_Refinement</h1>
    <p style="font-size: 24px; color: rgba(255,255,255,0.4); line-height: 1.6; margin-bottom: 80px; max-width: 512px; text-transform: lowercase;">We are performing a necessary architecture upgrade to enhance the digital signal.</p>
    <div style="display: flex; gap: 48px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; color: #3b82f6;">
      <span style="border-bottom: 2px solid #2563eb; padding-bottom: 8px;">Sync_Updates</span>
      <span style="border-bottom: 2px solid #2563eb; padding-bottom: 8px;">Contact_Core</span>
    </div>
  </div>
  <div style="position: absolute; bottom: 0; right: 0; padding: 96px; color: rgba(255,255,255,0.03); font-size: 240px; font-weight: 900; text-transform: uppercase; line-height: 1; pointer-events: none;">MAINT</div>
</div>`}
              cssCode={`.maint-minimal-root { background: #0a0a0a; min-height: 600px; width: 100%; border-radius: 48px; padding: 48px; display: flex; flex-direction: column; justify-content: center; position: relative; overflow: hidden; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; text-align: left; }
@media (min-width: 768px) { .maint-minimal-root { padding: 80px; } }
.accent-line { height: 8px; width: 128px; background: #2563eb; margin-bottom: 64px; }
.minimal-title { font-size: 48px; font-weight: 900; color: white; line-height: 0.85; margin-bottom: 64px; text-transform: uppercase; letter-spacing: -0.05em; }
@media (min-width: 768px) { .minimal-title { font-size: 72px; } }
.title-offline { color: #3b82f6; font-style: italic; }
.minimal-desc { font-size: 24px; color: rgba(255,255,255,0.4); line-height: 1.6; margin-bottom: 80px; max-width: 512px; text-transform: lowercase; font-weight: 500; }
.link-grid { display: flex; gap: 48px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; color: #3b82f6; }
.maint-link { text-decoration: none; color: inherit; border-bottom: 2px solid #2563eb; padding-bottom: 8px; transition: all 0.3s ease; }
.maint-link:hover { color: white; border-color: white; }
.bg-text { position: absolute; bottom: 0; right: 0; padding: 48px; color: rgba(255,255,255,0.03); font-size: 120px; font-weight: 900; text-transform: uppercase; line-height: 1; pointer-events: none; }
@media (min-width: 768px) { .bg-text { font-size: 240px; padding: 96px; } }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">02. Minimalist Refinement Typography</span>
           <MaintenanceMinimal />
        </section>

        {/* 03. Developer Terminal */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const MaintenanceTerminal = () => (
  <div className="flex items-center justify-center min-h-[600px] w-full bg-black rounded-[3rem] border-2 border-blue-500/20 relative overflow-hidden font-mono italic font-bold text-left">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    <div className="relative z-10 w-full max-w-xl p-4">
      <div className="bg-black border-2 border-blue-600 p-12 shadow-[0_0_50px_rgba(37,99,235,0.1)] relative">
        <div className="absolute -top-4 -left-4 bg-blue-600 text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest">Protocol_Status</div>
        <div className="text-blue-500 text-[10px] mb-12 flex justify-between uppercase tracking-widest opacity-50 font-mono">
          <span>> SYSTEM_UPGRADE.SH</span>
          <span>SECURE_SHELL</span>
        </div>
        <h1 className="text-5xl font-black text-white mb-10 uppercase tracking-tighter leading-none">CORE_ <br/> <span className="text-blue-500">OPTIMIZING</span><span className="animate-pulse text-blue-500">_</span></h1>
        <div className="space-y-4 mb-12 text-blue-500/60 text-xs uppercase leading-relaxed font-mono">
          <p>> INITIATING_DATABASE_SCHEMA_SYNC...</p>
          <p>> FLUSHING_GLOBAL_CDN_CACHE...</p>
          <p>> REBOOTING_WORKER_NODES: <span className="text-blue-500 font-black">75%_COMPLETE</span></p>
        </div>
        <div className="flex justify-between items-center text-[10px] text-white/40 uppercase tracking-[0.3em] font-mono">
          <span>EST_TIME: 15_MINS</span>
          <span className="animate-pulse text-blue-600">PLEASE_DO_NOT_REFRESH</span>
        </div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Developer Terminal Maintenance -->
<div style="background: black; min-height: 600px; width: 100%; border-radius: 48px; border: 2px solid rgba(37,99,235,0.2); position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; font-family: monospace; font-style: italic; font-weight: 700; text-align: left;">
  <div style="position: absolute; inset: 0; background-image: linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px); background-size: 40px 40px;"></div>
  <div style="position: relative; z-index: 10; width: 100%; max-width: 576px; padding: 16px;">
    <div style="background: black; border: 2px solid #2563eb; padding: 48px; box-shadow: 0 0 50px rgba(37,99,235,0.1); position: relative;">
      <div style="position: absolute; top: -16px; left: -16px; background: #2563eb; color: white; padding: 4px 16px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em;">Protocol_Status</div>
      <div style="color: #2563eb; font-size: 10px; margin-bottom: 48px; display: flex; justify-content: space-between; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.5;">
        <span>> SYSTEM_UPGRADE.SH</span>
        <span>SECURE_SHELL</span>
      </div>
      <h1 style="font-size: 48px; font-weight: 900; color: white; margin-bottom: 40px; text-transform: uppercase; letter-spacing: -0.05em; line-height: 1;">CORE_ <br/> <span style="color: #2563eb;">OPTIMIZING</span><span style="color: #2563eb;">_</span></h1>
      <div style="margin-bottom: 48px; color: rgba(37,99,235,0.6); font-size: 12px; text-transform: uppercase; line-height: 1.6;">
        <p>> INITIATING_DATABASE_SCHEMA_SYNC...</p>
        <p>> FLUSHING_GLOBAL_CDN_CACHE...</p>
        <p>> REBOOTING_WORKER_NODES: <span style="color: #2563eb; font-weight: 900;">75%_COMPLETE</span></p>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 10px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.3em;">
        <span>EST_TIME: 15_MINS</span>
        <span style="color: #2563eb;">PLEASE_DO_NOT_REFRESH</span>
      </div>
    </div>
  </div>
</div>`}
              cssCode={`.terminal-root { background: black; min-height: 600px; width: 100%; border-radius: 48px; border: 2px solid rgba(37,99,235,0.2); position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; font-family: 'JetBrains Mono', monospace; font-style: italic; font-weight: 700; text-align: left; }
.terminal-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px); background-size: 40px 40px; }
.terminal-box { position: relative; z-index: 10; width: 100%; max-width: 576px; padding: 16px; transition: transform 0.3s ease; }
.terminal-box:hover { transform: translateY(-4px); }
.terminal-inner { background: black; border: 2px solid #2563eb; padding: 48px; box-shadow: 0 0 50px rgba(37,99,235,0.1); position: relative; }
.terminal-tag { position: absolute; top: -16px; left: -16px; background: #2563eb; color: white; padding: 4px 16px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; }
.terminal-header { color: #2563eb; font-size: 10px; margin-bottom: 48px; display: flex; justify-content: space-between; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.5; }
.terminal-title { font-size: 36px; font-weight: 900; color: white; margin-bottom: 40px; text-transform: uppercase; letter-spacing: -0.05em; line-height: 1; }
@media (min-width: 768px) { .terminal-title { font-size: 48px; } }
.blue-glitch { color: #2563eb; }
.blink-cursor { color: #2563eb; animation: blink 1s infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
.log-stream { margin-bottom: 48px; color: rgba(37,99,235,0.6); font-size: 12px; text-transform: uppercase; line-height: 1.6; }
.log-val { color: #2563eb; font-weight: 900; }
.terminal-footer { display: flex; justify-content: space-between; font-size: 10px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.3em; }
.refresh-warn { color: #2563eb; animation: pulse 2s infinite; }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">03. Developer Terminal Upgrade Node</span>
           <MaintenanceTerminal />
        </section>

        {/* 04. Glassmorphism Vibrant */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const MaintenanceGlass = () => (
  <div className="relative flex items-center justify-center min-h-[600px] w-full rounded-[3rem] overflow-hidden bg-slate-950 font-sans italic font-bold">
    <div className="absolute top-20 left-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse"></div>
    <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-600 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse delay-1000"></div>
    <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 p-12 md:p-20 rounded-[4rem] shadow-2xl text-center text-white max-w-2xl mx-4">
      <div className="text-7xl mb-12 animate-bounce drop-shadow-2xl">🛠️</div>
      <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.85] drop-shadow-2xl">Protocol <br/> <span className="italic text-blue-400">Refinement</span></h1>
      <p className="text-white/70 text-xl mb-16 lowercase font-medium">We're building a more robust digital matrix. <br/> synchronization will resume shortly.</p>
      <div className="inline-block px-8 py-4 bg-white/10 rounded-3xl border-2 border-white/10 text-xs font-black uppercase tracking-[0.3em] shadow-2xl">Estimated_Return: 120_Mins</div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Glassmorphic Maintenance -->
<div style="position: relative; display: flex; align-items: center; justify-content: center; min-height: 600px; width: 100%; border-radius: 48px; overflow: hidden; background: #020617; font-family: sans-serif; font-style: italic; font-weight: 700;">
  <div style="position: absolute; top: 80px; left: 80px; width: 320px; height: 320px; background: #2563eb; border-radius: 50%; filter: blur(120px); opacity: 0.4;"></div>
  <div style="position: absolute; bottom: 80px; right: 80px; width: 320px; height: 320px; background: #4f46e5; border-radius: 50%; filter: blur(120px); opacity: 0.4;"></div>
  <div style="position: relative; background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.1); padding: 80px; border-radius: 64px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); text-align: center; color: white; max-width: 672px; width: calc(100% - 32px);">
    <div style="font-size: 72px; margin-bottom: 48px;">🛠️</div>
    <h1 style="font-size: 64px; font-weight: 900; margin-bottom: 40px; letter-spacing: -0.05em; text-transform: uppercase; line-height: 0.85;">Protocol <br/> <span style="color: #60a5fa; font-style: italic;">Refinement</span></h1>
    <p style="color: rgba(255,255,255,0.7); font-size: 20px; margin-bottom: 64px; text-transform: lowercase; font-weight: 500;">We're building a more robust digital matrix. <br/> synchronization will resume shortly.</p>
    <div style="display: inline-block; padding: 16px 32px; border-radius: 24px; border: 2px solid rgba(255,255,255,0.1); font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; background: rgba(255,255,255,0.05);">Estimated_Return: 120_Mins</div>
  </div>
</div>`}
              cssCode={`.glass-root { position: relative; display: flex; align-items: center; justify-content: center; min-height: 600px; width: 100%; border-radius: 48px; overflow: hidden; background: #020617; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; }
.glass-blob { position: absolute; width: 320px; height: 320px; border-radius: 50%; filter: blur(120px); opacity: 0.4; }
.blob-1 { top: 80px; left: 80px; background: #2563eb; animation: pulse 8s infinite alternate; }
.blob-2 { bottom: 80px; right: 80px; background: #4f46e5; animation: pulse 8s infinite alternate-reverse; }
@keyframes pulse { 0% { transform: scale(1); opacity: 0.3; } 100% { transform: scale(1.4); opacity: 0.5; } }
.glass-card { position: relative; background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.1); padding: 48px; border-radius: 64px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); text-align: center; color: white; max-width: 672px; width: calc(100% - 32px); }
@media (min-width: 768px) { .glass-card { padding: 80px; } }
.glass-icon { font-size: 72px; margin-bottom: 48px; animation: bounce 2s infinite; }
@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
.glass-title { font-size: 48px; font-weight: 900; margin-bottom: 40px; letter-spacing: -0.05em; text-transform: uppercase; line-height: 0.85; }
@media (min-width: 768px) { .glass-title { font-size: 64px; } }
.highlight-text { color: #60a5fa; font-style: italic; }
.glass-desc { color: rgba(255,255,255,0.7); font-size: 20px; margin-bottom: 64px; text-transform: lowercase; font-weight: 500; }
.glass-tag { display: inline-block; padding: 16px 32px; border-radius: 24px; border: 2px solid rgba(255,255,255,0.1); font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; background: rgba(255,255,255,0.05); transition: all 0.3s ease; }
.glass-tag:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">04. Glassmorphism Vibrant Refinement</span>
           <MaintenanceGlass />
        </section>

        {/* 05. Progress Status */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const MaintenanceProgress = () => (
  <div className="flex flex-col items-center justify-center min-h-[600px] w-full bg-white border border-slate-100 rounded-[3rem] p-12 text-center relative overflow-hidden font-sans italic font-bold">
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-[10px] text-blue-600 font-black uppercase tracking-[0.4em] mb-8">Node_Migration_V4</div>
      <h1 className="text-5xl md:text-7xl font-black text-slate-950 mb-4 tracking-tighter uppercase leading-[0.9]">Optimizing_Logic</h1>
      <p className="text-slate-500 mb-16 text-lg lowercase font-medium">Pushing critical architecture nodes to the global edge.</p>
      <div className="relative pt-1 max-w-md mx-auto">
        <div className="flex mb-4 items-center justify-between font-black uppercase text-[10px] tracking-widest">
          <div className="text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">Migration_Status</div>
          <div className="text-blue-600">85%</div>
        </div>
        <div className="overflow-hidden h-4 mb-8 flex rounded-2xl bg-slate-100 p-1">
          <div style={{ width: '85%' }} className="rounded-xl bg-blue-600 shadow-xl shadow-blue-200 transition-all duration-1000"></div>
        </div>
        <p className="text-[10px] text-slate-400 uppercase tracking-widest">Ref_ID: #CORE-8842 // Priority: Absolute</p>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Progress Maintenance -->
<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 600px; width: 100%; background: white; border: 1px solid #f1f5f9; border-radius: 48px; padding: 48px; text-align: center; font-family: sans-serif; font-style: italic; font-weight: 700;">
  <div style="width: 100%; max-width: 672px; margin: 0 auto;">
    <div style="font-size: 10px; color: #2563eb; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 32px;">Node_Migration_V4</div>
    <h1 style="font-size: 64px; font-weight: 900; color: #0f172a; margin-bottom: 16px; letter-spacing: -0.05em; text-transform: uppercase; line-height: 0.9;">Optimizing_Logic</h1>
    <p style="color: #64748b; font-size: 18px; margin-bottom: 64px; text-transform: lowercase; font-weight: 500;">Pushing critical architecture nodes to the global edge.</p>
    <div style="max-width: 448px; margin: 0 auto; position: relative;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 16px; font-weight: 900; text-transform: uppercase; font-size: 10px; letter-spacing: 0.1em;">
        <span style="color: #2563eb; background: #eff6ff; padding: 4px 12px; border-radius: 8px;">Migration_Status</span>
        <span style="color: #2563eb;">85%</span>
      </div>
      <div style="height: 16px; background: #f1f5f9; border-radius: 999px; padding: 4px; overflow: hidden;">
        <div style="width: 85%; height: 100%; background: #2563eb; border-radius: 999px; box-shadow: 0 10px 15px -3px rgba(37,99,235,0.2);"></div>
      </div>
      <p style="font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 32px;">Ref_ID: #CORE-8842 // Priority: Absolute</p>
    </div>
  </div>
</div>`}
              cssCode={`.progress-root { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 600px; width: 100%; background: white; border: 1px solid #f1f5f9; border-radius: 48px; padding: 48px; text-align: center; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; }
.progress-tag { font-size: 10px; color: #2563eb; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 32px; }
.progress-title { font-size: 48px; font-weight: 900; color: #0f172a; margin-bottom: 16px; letter-spacing: -0.05em; text-transform: uppercase; line-height: 0.9; }
@media (min-width: 768px) { .progress-title { font-size: 64px; } }
.progress-desc { color: #64748b; font-size: 18px; margin-bottom: 64px; text-transform: lowercase; font-weight: 500; }
.progress-container { max-width: 448px; margin: 0 auto; width: 100%; }
.progress-labels { display: flex; justify-content: space-between; margin-bottom: 16px; font-weight: 900; text-transform: uppercase; font-size: 10px; letter-spacing: 0.1em; }
.status-pill { color: #2563eb; background: #eff6ff; padding: 4px 12px; border-radius: 8px; }
.progress-track { height: 16px; background: #f1f5f9; border-radius: 999px; padding: 4px; overflow: hidden; display: flex; }
.progress-bar { height: 100%; background: #2563eb; border-radius: 999px; box-shadow: 0 10px 15px -3px rgba(37,99,235,0.2); transition: width 1s ease-in-out; }
.progress-footer { font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 32px; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">05. Progress Migration Node Status</span>
           <MaintenanceProgress />
        </section>

        {/* 06. Brutalist Alert */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const MaintenanceBrutalist = () => (
  <div className="flex flex-col items-center justify-center min-h-[600px] w-full bg-yellow-400 rounded-[3rem] border-8 border-slate-950 relative overflow-hidden font-sans italic font-black uppercase text-center">
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 20px, transparent 20px, transparent 40px)' }}></div>
    <div className="relative z-10 bg-white border-8 border-slate-950 p-12 md:p-20 max-w-2xl text-center shadow-[24px_24px_0_0_#000] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
      <h1 className="text-7xl md:text-9xl font-black text-slate-950 leading-[0.8] mb-12 tracking-tighter">Work_In <br/> <span className="text-white drop-shadow-[4px_4px_0_#000]">Progress.</span></h1>
      <div className="h-4 bg-slate-950 w-full mb-12"></div>
      <p className="font-black text-2xl mb-12 text-slate-950">We_Are_Crushing_Bugs. <br/> Do_Not_Panic.</p>
      <button className="w-full py-6 bg-slate-950 text-white font-black text-2xl uppercase hover:bg-white hover:text-slate-950 border-4 border-transparent hover:border-slate-950 transition-all tracking-[0.2em] shadow-xl">Try_Synchronizing_Later</button>
    </div>
  </div>
);`}
              htmlCode={`<!-- Brutalist Maintenance Alert -->
<div style="background: #facc15; min-height: 600px; width: 100%; border-radius: 48px; border: 8px solid #0f172a; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; font-family: sans-serif; font-style: italic; font-weight: 900; text-transform: uppercase; text-align: center;">
  <div style="position: absolute; inset: 0; opacity: 0.2; background-image: repeating-linear-gradient(45deg, #000 0, #000 20px, transparent 20px, transparent 40px);"></div>
  <div style="position: relative; z-index: 10; background: white; border: 8px solid #0f172a; padding: 80px; max-width: 672px; box-shadow: 24px 24px 0 0 #000;">
    <h1 style="font-size: 72px; color: #0f172a; line-height: 0.8; margin-bottom: 48px; letter-spacing: -0.05em;">Work_In <br/> <span style="color: white; text-shadow: 4px 4px 0 #000;">Progress.</span></h1>
    <div style="height: 16px; background: #0f172a; width: 100%; margin-bottom: 48px;"></div>
    <p style="font-size: 24px; color: #0f172a; margin-bottom: 48px;">We_Are_Crushing_Bugs. <br/> Do_Not_Panic.</p>
    <button style="width: 100%; padding: 24px; background: #0f172a; color: white; border: none; font-weight: 900; text-transform: uppercase; font-size: 20px; cursor: pointer; letter-spacing: 0.2em; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);">Try_Synchronizing_Later</button>
  </div>
</div>`}
              cssCode={`.brutal-maint-root { background: #facc15; min-height: 600px; width: 100%; border-radius: 48px; border: 8px solid #0f172a; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; font-family: 'Archivo Black', sans-serif; font-style: italic; font-weight: 900; text-transform: uppercase; text-align: center; }
.tape-bg { position: absolute; inset: 0; opacity: 0.2; background-image: repeating-linear-gradient(45deg, #000 0, #000 20px, transparent 20px, transparent 40px); }
.brutal-card { position: relative; z-index: 10; background: white; border: 8px solid #0f172a; padding: 48px; max-width: 672px; box-shadow: 24px 24px 0 0 #000; transition: all 0.1s ease; }
@media (min-width: 768px) { .brutal-card { padding: 80px; } }
.brutal-card:hover { transform: translate(4px, 4px); box-shadow: 16px 16px 0 0 #000; }
.brutal-title { font-size: 48px; color: #0f172a; line-height: 0.8; margin-bottom: 48px; letter-spacing: -0.05em; }
@media (min-width: 768px) { .brutal-title { font-size: 72px; } }
.stroke-text { color: white; text-shadow: 4px 4px 0 #000; }
.brutal-divider { height: 16px; background: #0f172a; width: 100%; margin-bottom: 48px; }
.brutal-p { font-size: 20px; color: #0f172a; margin-bottom: 48px; font-weight: 900; }
@media (min-width: 768px) { .brutal-p { font-size: 24px; } }
.brutal-btn { width: 100%; padding: 24px; background: #0f172a; color: white; border: 4px solid transparent; font-weight: 900; text-transform: uppercase; font-size: 16px; cursor: pointer; letter-spacing: 0.2em; transition: all 0.2s ease; }
@media (min-width: 768px) { .brutal-btn { font-size: 20px; } }
.brutal-btn:hover { background: white; color: #0f172a; border-color: #0f172a; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">06. Retro Brutalist Construct Alert</span>
           <MaintenanceBrutalist />
        </section>

        {/* 07. Neumorphic Sleep */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const MaintenanceNeumorphic = () => (
  <div className="flex items-center justify-center min-h-[600px] w-full bg-[#e0e5ec] rounded-[3rem] font-sans italic font-bold text-center">
    <div className="w-full max-w-xl p-16 md:p-20 rounded-[4rem] bg-[#e0e5ec] shadow-[30px_30px_60px_#bebebe,-30px_-30px_60px_#ffffff] text-center border border-white/20">
      <div className="w-32 h-32 rounded-full bg-[#e0e5ec] shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] flex items-center justify-center text-5xl mb-12 mx-auto border-4 border-white/50 text-center">💤</div>
      <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 uppercase tracking-tighter leading-none text-center">Matrix_Sleep</h2>
      <p className="text-slate-500 mb-16 lowercase font-medium text-lg italic text-center">We are optimizing nodes for a flawless synchronization.</p>
      <button className="px-12 py-6 rounded-2xl bg-[#e0e5ec] text-blue-600 font-black shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] active:scale-95 transition-all uppercase text-xs tracking-widest border border-white/20">Refresh_Signal</button>
    </div>
  </div>
);`}
              htmlCode={`<!-- Neumorphic Sleep Maintenance -->
<div style="background: #e0e5ec; min-height: 600px; width: 100%; border-radius: 48px; display: flex; align-items: center; justify-content: center; font-family: sans-serif; font-style: italic; font-weight: 700; text-align: center;">
  <div style="width: 100%; max-width: 576px; padding: 80px; border-radius: 64px; background: #e0e5ec; box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; border: 1px solid rgba(255,255,255,0.2);">
    <div style="width: 128px; height: 128px; border-radius: 50%; background: #e0e5ec; box-shadow: inset 10px 10px 20px #bebebe, inset -10px -10px 20px #ffffff; display: flex; align-items: center; justify-content: center; font-size: 48px; margin: 0 auto 48px auto; border: 4px solid rgba(255,255,255,0.5);">💤</div>
    <h2 style="font-size: 48px; font-weight: 900; color: #1e293b; margin-bottom: 24px; text-transform: uppercase; letter-spacing: -0.05em;">Matrix_Sleep</h2>
    <p style="color: #64748b; margin-bottom: 64px; font-size: 18px; font-weight: 500; text-transform: lowercase;">We are optimizing nodes for a flawless synchronization.</p>
    <button style="padding: 24px 48px; border-radius: 16px; background: #e0e5ec; color: #2563eb; font-weight: 900; text-transform: uppercase; font-size: 12px; border: 1px solid rgba(255,255,255,0.2); cursor: pointer; box-shadow: 10px 10px 20px #bebebe, -10px -10px 20px #ffffff; letter-spacing: 0.1em;">Refresh_Signal</button>
  </div>
</div>`}
              cssCode={`.neu-maint-root { background: #e0e5ec; min-height: 600px; width: 100%; border-radius: 48px; display: flex; align-items: center; justify-content: center; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; text-align: center; }
.neu-maint-card { width: 100%; max-width: 576px; padding: 48px; border-radius: 64px; background: #e0e5ec; box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; border: 1px solid rgba(255,255,255,0.2); }
@media (min-width: 768px) { .neu-maint-card { padding: 80px; } }
.neu-icon-box { width: 128px; height: 128px; border-radius: 50%; background: #e0e5ec; box-shadow: inset 10px 10px 20px #bebebe, inset -10px -10px 20px #ffffff; display: flex; align-items: center; justify-content: center; font-size: 48px; margin: 0 auto 48px auto; border: 4px solid rgba(255,255,255,0.5); transition: transform 0.3s ease; }
.neu-icon-box:hover { transform: scale(1.05); }
.neu-maint-title { font-size: 36px; font-weight: 900; color: #1e293b; margin-bottom: 24px; text-transform: uppercase; letter-spacing: -0.05em; }
@media (min-width: 768px) { .neu-maint-title { font-size: 48px; } }
.neu-maint-subtitle { color: #64748b; margin-bottom: 64px; font-size: 18px; font-weight: 500; text-transform: lowercase; }
.neu-maint-btn { padding: 24px 48px; border-radius: 16px; background: #e0e5ec; color: #2563eb; font-weight: 900; text-transform: uppercase; font-size: 12px; border: 1px solid rgba(255,255,255,0.2); cursor: pointer; box-shadow: 10px 10px 20px #bebebe, -10px -10px 20px #ffffff; letter-spacing: 0.1em; transition: all 0.3s ease; }
.neu-maint-btn:hover { transform: translateY(-2px); box-shadow: 15px 15px 25px #bebebe, -15px -15px 25px #ffffff; }
.neu-maint-btn:active { transform: scale(0.98); box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">07. Neumorphic Sleep Node Protocol</span>
           <MaintenanceNeumorphic />
        </section>

        {/* 08. Cyberpunk Offline */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const MaintenanceCyber = () => (
  <div className="flex items-center justify-center min-h-[600px] w-full bg-black rounded-[3rem] border-4 border-red-600 relative overflow-hidden font-mono italic font-bold text-left">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
    <div className="relative z-10 text-center p-8">
      <div className="inline-block border-2 border-red-600 text-red-600 px-6 py-2 font-black text-xs mb-10 animate-pulse tracking-[0.5em] uppercase text-center">System_Offline</div>
      <h1 className="text-7xl md:text-9xl font-black text-white relative mb-10 tracking-tighter uppercase leading-none drop-shadow-[0_0_30px_rgba(220,38,38,0.5)] text-center">MAINT_ <br/> <span className="text-red-600">PROTOCOL</span></h1>
      <p className="text-red-500 font-black max-w-xl mx-auto mb-16 text-sm uppercase leading-relaxed tracking-widest text-center">> SERVER_REBOOT_INITIATED.<br/>> ESTABLISHING_SECURE_NODES.<br/>> PLEASE_STAND_BY_FOR_SYNC...</p>
      <div className="flex justify-center gap-6">
        <div className="w-4 h-4 bg-red-600 animate-ping"></div>
        <div className="w-4 h-4 bg-red-600 animate-ping delay-150"></div>
        <div className="w-4 h-4 bg-red-600 animate-ping delay-300"></div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Cyberpunk Maintenance -->
<div style="background: black; min-height: 600px; width: 100%; border-radius: 48px; border: 4px solid #dc2626; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; font-family: monospace; font-style: italic; font-weight: 700; text-align: center;">
  <div style="position: absolute; inset: 0; background-image: linear-gradient(rgba(220,38,38,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.05) 1px, transparent 1px); background-size: 50px 50px;"></div>
  <div style="position: relative; z-index: 10; padding: 32px;">
    <div style="display: inline-block; border: 2px solid #dc2626; color: #dc2626; padding: 8px 24px; font-weight: 900; font-size: 12px; margin-bottom: 40px; text-transform: uppercase; letter-spacing: 0.5em;">System_Offline</div>
    <h1 style="font-size: 72px; font-weight: 900; color: white; margin-bottom: 40px; letter-spacing: -0.05em; text-transform: uppercase; line-height: 1; text-shadow: 0 0 30px rgba(220,38,38,0.5);">MAINT_ <br/> <span style="color: #dc2626;">PROTOCOL</span></h1>
    <p style="color: #ef4444; font-weight: 900; max-width: 512px; margin: 0 auto 64px auto; font-size: 14px; text-transform: uppercase; line-height: 1.6; letter-spacing: 0.1em;">
      > SERVER_REBOOT_INITIATED.<br/>
      > ESTABLISHING_SECURE_NODES.<br/>
      > PLEASE_STAND_BY_FOR_SYNC...
    </p>
    <div style="display: flex; justify-content: center; gap: 24px;">
      <div style="width: 16px; height: 16px; background: #dc2626; border-radius: 50%; opacity: 0.8;"></div>
      <div style="width: 16px; height: 16px; background: #dc2626; border-radius: 50%; opacity: 0.8;"></div>
      <div style="width: 16px; height: 16px; background: #dc2626; border-radius: 50%; opacity: 0.8;"></div>
    </div>
  </div>
</div>`}
              cssCode={`.cyber-maint-root { background: black; min-height: 600px; width: 100%; border-radius: 48px; border: 4px solid #dc2626; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; font-family: 'JetBrains Mono', monospace; font-style: italic; font-weight: 700; text-align: center; }
.cyber-maint-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(220,38,38,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.05) 1px, transparent 1px); background-size: 50px 50px; }
.maint-tag { display: inline-block; border: 2px solid #dc2626; color: #dc2626; padding: 8px 24px; font-weight: 900; font-size: 12px; margin-bottom: 40px; text-transform: uppercase; letter-spacing: 0.5em; animation: blink 1s infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
.maint-cyber-title { font-size: 48px; font-weight: 900; color: white; margin-bottom: 40px; letter-spacing: -0.05em; text-transform: uppercase; line-height: 1; text-shadow: 0 0 30px rgba(220,38,38,0.5); }
@media (min-width: 768px) { .maint-cyber-title { font-size: 72px; } }
.red-highlight { color: #dc2626; }
.terminal-log { color: #ef4444; font-weight: 900; max-width: 512px; margin: 0 auto 64px auto; font-size: 14px; text-transform: uppercase; line-height: 1.6; letter-spacing: 0.1em; }
.ping-grid { display: flex; justify-content: center; gap: 24px; }
.ping-dot { width: 16px; height: 16px; background: #dc2626; border-radius: 50%; animation: ping 1.5s infinite; }
@keyframes ping { 0% { transform: scale(1); opacity: 0.8; } 100% { transform: scale(2); opacity: 0; } }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">08. Cyberpunk Offline Node Protocol</span>
           <MaintenanceCyber />
        </section>

        {/* 09. Detailed Dashboard */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const MaintenanceDashboard = () => (
  <div className="flex flex-col items-center justify-center min-h-[600px] w-full bg-slate-50 border border-slate-100 rounded-[3rem] p-12 font-sans italic font-bold text-left">
    <div className="w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl border-2 border-slate-100 overflow-hidden">
      <div className="p-10 border-b-2 border-slate-50 flex justify-between items-center bg-slate-50/50">
        <h2 className="font-black text-2xl tracking-tighter text-slate-900 uppercase">System_Nodes</h2>
        <span className="text-[10px] font-black bg-yellow-400 text-slate-950 px-4 py-2 rounded-full uppercase tracking-widest">Optimizing</span>
      </div>
      <div className="p-10 space-y-8">
        {[
          { name: "Logic_Core_App", status: "Refining", color: "bg-yellow-500" },
          { name: "Neural_API", status: "Operational", color: "bg-blue-600" },
          { name: "Payment_Node", status: "Operational", color: "bg-blue-600" },
          { name: "CDN_Orchestration", status: "Degraded", color: "bg-orange-500" },
        ].map((item) => (
          <div key={item.name} className="flex justify-between items-center border-b border-slate-50 pb-4 last:border-0 last:pb-0">
            <span className="text-sm text-slate-600 font-black uppercase tracking-widest">{item.name}</span>
            <div className="flex items-center gap-3">
              <div className={\`w-3 h-3 rounded-full \${item.color} \${item.status === 'Refining' ? 'animate-pulse' : ''}\`}></div>
              <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-slate-50 p-6 text-center text-[8px] text-slate-300 font-black uppercase tracking-[0.5em]">Last_Synchronized: Just_Now</div>
    </div>
    <div className="mt-12 text-center">
      <h3 className="font-black text-2xl text-slate-900 uppercase tracking-tighter mb-2">Scheduled_Downtime</h3>
      <p className="text-slate-500 lowercase font-medium">We are rolling out the next generation of logic. back_in: 30m.</p>
    </div>
  </div>
);`}
              htmlCode={`<!-- Detailed Maintenance Dashboard -->
<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 600px; width: 100%; background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 48px; padding: 48px; font-family: sans-serif; font-style: italic; font-weight: 700; text-align: left;">
  <div style="width: 100%; max-width: 576px; background: white; border-radius: 40px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1); border: 2px solid #f1f5f9; overflow: hidden;">
    <div style="padding: 40px; border-bottom: 2px solid #f8fafc; display: flex; justify-content: space-between; align-items: center; background: rgba(248,250,252,0.5);">
      <h2 style="font-weight: 900; font-size: 24px; color: #0f172a; text-transform: uppercase; letter-spacing: -0.05em;">System_Nodes</h2>
      <span style="font-size: 10px; font-weight: 900; background: #facc15; color: #020617; padding: 8px 16px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.1em;">Optimizing</span>
    </div>
    <div style="padding: 40px;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f8fafc; padding-bottom: 16px; margin-bottom: 32px;">
        <span style="font-size: 14px; color: #475569; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em;">Logic_Core_App</span>
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 12px; height: 12px; border-radius: 50%; background: #eab308;"></div>
          <span style="font-size: 10px; color: #94a3b8; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em;">Refining</span>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f8fafc; padding-bottom: 16px; margin-bottom: 32px;">
        <span style="font-size: 14px; color: #475569; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em;">Neural_API</span>
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 12px; height: 12px; border-radius: 50%; background: #2563eb;"></div>
          <span style="font-size: 10px; color: #94a3b8; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em;">Operational</span>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f8fafc; padding-bottom: 16px; margin-bottom: 32px;">
        <span style="font-size: 14px; color: #475569; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em;">Payment_Node</span>
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 12px; height: 12px; border-radius: 50%; background: #2563eb;"></div>
          <span style="font-size: 10px; color: #94a3b8; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em;">Operational</span>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 14px; color: #475569; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em;">CDN_Orchestration</span>
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 12px; height: 12px; border-radius: 50%; background: #f97316;"></div>
          <span style="font-size: 10px; color: #94a3b8; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em;">Degraded</span>
        </div>
      </div>
    </div>
    <div style="background: #f8fafc; padding: 24px; text-align: center; font-size: 8px; color: #cbd5e1; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em;">Last_Synchronized: Just_Now</div>
  </div>
  <div style="margin-top: 48px; text-align: center;">
    <h3 style="font-weight: 900; font-size: 24px; color: #0f172a; text-transform: uppercase; letter-spacing: -0.05em; margin-bottom: 8px;">Scheduled_Downtime</h3>
    <p style="color: #64748b; text-transform: lowercase; font-weight: 500;">We are rolling out the next generation of logic. back_in: 30m.</p>
  </div>
</div>`}
              cssCode={`.dashboard-root { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 600px; width: 100%; background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 48px; padding: 48px; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; text-align: left; }
.status-card { width: 100%; max-width: 576px; background: white; border-radius: 40px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1); border: 2px solid #f1f5f9; overflow: hidden; transition: transform 0.3s ease; }
.status-card:hover { transform: scale(1.02); }
.card-header { padding: 40px; border-bottom: 2px solid #f8fafc; display: flex; justify-content: space-between; align-items: center; background: rgba(248,250,252,0.5); }
.header-title { font-weight: 900; font-size: 24px; color: #0f172a; text-transform: uppercase; letter-spacing: -0.05em; }
.card-body { padding: 40px; }
.node-row { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f8fafc; padding-bottom: 16px; margin-bottom: 32px; }
.node-row:last-child { border: none; margin-bottom: 0; padding-bottom: 0; }
.node-name { font-size: 14px; color: #475569; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; }
.node-status { display: flex; align-items: center; gap: 12px; }
.status-indicator { width: 12px; height: 12px; border-radius: 50%; }
.operational { background: #2563eb; }
.refining { background: #eab308; animation: pulse 1s infinite; }
.degraded { background: #f97316; }
@keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.2); } }
.status-text { font-size: 10px; color: #94a3b8; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; }
.card-footer { background: #f8fafc; padding: 24px; text-align: center; font-size: 8px; color: #cbd5e1; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">09. Detailed System Status Dashboard</span>
           <MaintenanceDashboard />
        </section>

        {/* 10. Dark Countdown */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const MaintenanceCountdown = () => (
  <div className="flex flex-col items-center justify-center min-h-[600px] w-full bg-slate-950 text-white rounded-[3rem] border-2 border-white/5 relative font-sans italic font-bold overflow-hidden text-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_70%)] pointer-events-none"></div>
    <div className="text-center z-10 p-12">
      <div className="text-blue-500 font-black uppercase tracking-[0.5em] mb-10 text-[10px]">Matrix_Core // Maint_Cycle</div>
      <h1 className="text-6xl md:text-8xl font-black mb-20 uppercase tracking-tighter leading-none">Resuming_In</h1>
      <div className="grid grid-cols-3 gap-12 md:gap-20 justify-center mb-20">
        <div>
          <div className="text-6xl md:text-9xl font-black tracking-tighter tabular-nums mb-4 text-center">01</div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-blue-500 text-center">Hours</div>
        </div>
        <div>
          <div className="text-6xl md:text-9xl font-black tracking-tighter tabular-nums mb-4 text-center">45</div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-blue-500 text-center">Mins</div>
        </div>
        <div>
          <div className="text-6xl md:text-9xl font-black tracking-tighter tabular-nums mb-4 text-center">12</div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-blue-500 text-center">Secs</div>
        </div>
      </div>
      <div className="max-w-xl mx-auto text-white/40 text-lg lowercase font-medium">
        <p>We are currently synchronizing our global node cluster to ensure the highest fidelity logic Resumption. thank_you_for_standing_by.</p>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Dark Countdown Maintenance -->
<div style="background: #020617; min-height: 600px; width: 100%; border-radius: 48px; border: 2px solid rgba(255,255,255,0.05); position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; font-family: sans-serif; font-style: italic; font-weight: 700; color: white; text-align: center;">
  <div style="position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, rgba(37,99,235,0.1), transparent 70%); pointer-events: none;"></div>
  <div style="position: relative; z-index: 10; padding: 48px;">
    <p style="color: #3b82f6; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; margin-bottom: 40px; font-size: 10px;">Matrix_Core // Maint_Cycle</p>
    <h1 style="font-size: 72px; font-weight: 900; margin-bottom: 80px; text-transform: uppercase; letter-spacing: -0.05em; line-height: 1;">Resuming_In</h1>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 80px; margin-bottom: 80px; max-width: 800px; margin-left: auto; margin-right: auto;">
      <div>
        <div style="font-size: 96px; font-weight: 900; margin-bottom: 16px; letter-spacing: -0.05em;">01</div>
        <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.4em; color: #3b82f6;">Hours</div>
      </div>
      <div>
        <div style="font-size: 96px; font-weight: 900; margin-bottom: 16px; letter-spacing: -0.05em;">45</div>
        <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.4em; color: #3b82f6;">Mins</div>
      </div>
      <div>
        <div style="font-size: 96px; font-weight: 900; margin-bottom: 16px; letter-spacing: -0.05em;">12</div>
        <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.4em; color: #3b82f6;">Secs</div>
      </div>
    </div>
    <p style="max-width: 512px; margin: 0 auto; color: rgba(255,255,255,0.4); font-size: 18px; line-height: 1.6; text-transform: lowercase;">We are currently synchronizing our global node cluster to ensure the highest fidelity logic Resumption. thank_you_for_standing_by.</p>
  </div>
</div>`}
              cssCode={`.countdown-maint-root { background: #020617; min-height: 600px; width: 100%; border-radius: 48px; border: 2px solid rgba(255,255,255,0.05); position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; color: white; text-align: center; }
.countdown-glow { position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, rgba(37,99,235,0.1), transparent 70%); pointer-events: none; }
.countdown-content { position: relative; z-index: 10; padding: 48px; }
.countdown-tag { color: #3b82f6; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; margin-bottom: 40px; font-size: 10px; }
.countdown-title { font-size: 48px; font-weight: 900; margin-bottom: 80px; text-transform: uppercase; letter-spacing: -0.05em; line-height: 1; }
@media (min-width: 768px) { .countdown-title { font-size: 72px; } }
.timer-grid-large { display: grid; grid-template-columns: repeat(1, 1fr); gap: 48px; margin-bottom: 80px; max-width: 800px; margin-left: auto; margin-right: auto; }
@media (min-width: 768px) { .timer-grid-large { grid-template-columns: repeat(3, 1fr); gap: 80px; } }
.timer-item { transition: transform 0.3s ease; }
.timer-item:hover { transform: scale(1.05); }
.timer-big-num { font-size: 64px; font-weight: 900; margin-bottom: 16px; letter-spacing: -0.05em; font-variant-numeric: tabular-nums; }
@media (min-width: 768px) { .timer-big-num { font-size: 96px; } }
.timer-big-unit { font-size: 10px; text-transform: uppercase; letter-spacing: 0.4em; color: #3b82f6; }
.timer-note { max-width: 512px; margin: 0 auto; color: rgba(255,255,255,0.4); font-size: 18px; line-height: 1.6; text-transform: lowercase; font-weight: 500; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">10. Dark Countdown Logic Cycle Node</span>
           <MaintenanceCountdown />
        </section>

      </div>
    </div>
  );
};

export default MaintenanceGallery;