import React, { useState, useEffect } from 'react';
import CopyButton from '../CopyButton';

// --- 1. The SaaS Standard ---
export const ComingStandard = () => (
  <div className="flex flex-col items-center justify-center min-h-[600px] w-full bg-white border border-slate-100 rounded-[3rem] p-12 text-center relative overflow-hidden font-sans italic font-bold">
    <div className="relative z-10 max-w-2xl mx-auto">
      <div className="inline-block px-6 py-2 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-xl shadow-blue-200">
        Launch_Sequence_Initiated
      </div>
      <h1 className="text-6xl md:text-8xl font-black text-slate-950 mb-8 tracking-tighter uppercase leading-[0.9]">
        Work_Smarter <br/> <span className="text-blue-600 italic">Not_Harder</span>
      </h1>
      <p className="text-slate-500 mb-12 text-xl max-w-lg mx-auto lowercase font-medium">
        The all-in-one logic platform for the next generation of node architects.
      </p>
      
      <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto mb-10">
        <input 
          type="email" 
          placeholder="Enter_Logic_Node_ID" 
          className="flex-1 px-8 py-5 border-2 border-slate-100 rounded-2xl focus:border-blue-600 outline-none transition-all bg-slate-50 text-slate-900 placeholder-slate-400 font-black uppercase text-sm"
        />
        <button className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 uppercase text-sm tracking-widest active:scale-95">
          Join_Waitlist
        </button>
      </form>
      
      <div className="flex items-center justify-center gap-3 text-[10px] text-slate-400 font-black uppercase tracking-widest">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        <span>2,400+ nodes already synchronized</span>
      </div>
    </div>
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
       <div className="absolute top-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-blue-400 rounded-full blur-[120px]"></div>
       <div className="absolute bottom-[-20%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-400 rounded-full blur-[120px]"></div>
    </div>
  </div>
);

// --- 2. Minimalist Typography ---
export const ComingMinimal = () => (
  <div className="flex flex-col justify-center min-h-[600px] w-full bg-[#0a0a0a] rounded-[3rem] p-12 md:p-24 border border-white/5 font-sans italic font-bold relative overflow-hidden">
    <div className="absolute top-0 right-0 p-12 text-white/10 text-9xl font-black uppercase select-none leading-none">
      2024
    </div>
    <div className="w-full max-w-3xl relative z-10">
      <div className="h-2 w-32 bg-blue-600 mb-16"></div>
      <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.85] mb-16 uppercase tracking-tighter">
        Something <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 italic">Evolutionary</span> <br/>
        Is_Loading
      </h1>
      
      <div className="flex flex-col md:flex-row items-start md:items-end gap-16">
        <div className="w-full max-w-sm">
          <label className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-6 block">Sync_Your_Node</label>
          <div className="flex border-b-2 border-white/10 pb-4 group focus-within:border-blue-600 transition-all">
            <input type="email" placeholder="NODE_ID@EMAIL.COM" className="w-full bg-transparent outline-none placeholder-white/20 text-white font-black uppercase tracking-widest" />
            <button className="font-black text-xs uppercase text-white hover:text-blue-500 transition-colors tracking-widest ml-4">Submit_→</button>
          </div>
        </div>
        <div className="flex-1 text-right">
           <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] mb-2">Protocol_ETA</div>
           <div className="text-4xl text-white font-black tabular-nums tracking-tighter">12D : 18H : 45M</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 3. Split Visual ---
export const ComingSplit = () => (
  <div className="flex flex-col md:flex-row min-h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl font-sans italic font-bold border border-slate-100 bg-white">
    <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
      <div className="mb-auto font-black text-2xl tracking-tighter text-blue-600 uppercase italic">Matrix_Core.</div>
      <div className="py-20">
        <h1 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-[0.95]">
          Architecting <br/> The_Future_Of <br/> <span className="text-blue-600">Digital_Logic</span>
        </h1>
        <p className="text-slate-500 mb-12 text-lg lowercase font-medium">Be the first to synchronize with the core protocol. No noise, just signal.</p>
        
        <div className="relative group">
          <input type="email" placeholder="Logic_Access_Key" className="w-full pl-8 pr-40 py-6 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-blue-600 transition-all font-black uppercase text-sm" />
          <button className="absolute right-2 top-2 bottom-2 px-8 bg-slate-900 text-white text-xs font-black rounded-xl hover:bg-blue-600 transition-all uppercase tracking-widest">
            Request_Access
          </button>
        </div>
      </div>
      <div className="mt-auto flex gap-8 text-[10px] text-slate-300 font-black uppercase tracking-[0.3em]">
         <a href="#" className="hover:text-blue-600 transition-colors">Twitter_X</a>
         <a href="#" className="hover:text-blue-600 transition-colors">Discord_Server</a>
      </div>
    </div>
    <div className="hidden md:block w-1/2 relative">
      <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125" alt="" />
      <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10"></div>
    </div>
  </div>
);

// --- 4. Glassmorphism ---
export const ComingGlass = () => (
  <div className="relative flex items-center justify-center min-h-[600px] w-full rounded-[3rem] overflow-hidden bg-slate-950 font-sans italic font-bold">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.15),transparent_50%)]"></div>
    <div className="absolute top-20 left-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse"></div>
    <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-600 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse delay-1000"></div>

    <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 p-12 md:p-20 rounded-[4rem] shadow-2xl text-center text-white max-w-2xl mx-4">
      <div className="inline-block px-6 py-2 rounded-full border-2 border-white/10 text-[10px] font-black tracking-[0.4em] uppercase mb-12 bg-white/5 shadow-2xl">
        Beta_Protocol_Active
      </div>
      <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.85] drop-shadow-2xl">
        Almost <br/> <span className="italic text-blue-400">Ready</span>
      </h1>
      
      <div className="grid grid-cols-3 gap-6 mb-16 max-w-md mx-auto">
        <div className="bg-white/5 p-4 rounded-3xl border border-white/10">
          <div className="text-4xl font-black mb-1">12</div>
          <div className="text-[8px] uppercase tracking-widest opacity-40">Days</div>
        </div>
        <div className="bg-white/5 p-4 rounded-3xl border border-white/10">
          <div className="text-4xl font-black mb-1">18</div>
          <div className="text-[8px] uppercase tracking-widest opacity-40">Hours</div>
        </div>
        <div className="bg-white/5 p-4 rounded-3xl border border-white/10">
          <div className="text-4xl font-black mb-1">45</div>
          <div className="text-[8px] uppercase tracking-widest opacity-40">Mins</div>
        </div>
      </div>

      <form className="relative group max-w-md mx-auto">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
        <div className="relative flex bg-white rounded-2xl p-1">
          <input type="email" placeholder="Protocol_Node_Email" className="w-full px-6 text-slate-900 bg-transparent outline-none font-black uppercase text-xs" />
          <button className="px-8 py-4 bg-slate-900 text-white font-black rounded-xl hover:bg-blue-600 transition-all uppercase text-xs tracking-widest">
            Sync_Now
          </button>
        </div>
      </form>
    </div>
  </div>
);

// --- 5. Cyberpunk Terminal ---
export const ComingCyber = () => (
  <div className="flex items-center justify-center min-h-[600px] w-full bg-black rounded-[3rem] border-2 border-green-500/20 relative overflow-hidden font-mono italic font-bold">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    
    <div className="relative z-10 w-full max-w-xl p-4">
      <div className="bg-black border-2 border-green-500 p-12 shadow-[0_0_50px_rgba(34,197,94,0.1)] relative">
        <div className="absolute -top-4 -left-4 bg-green-500 text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest">System_Status</div>
        
        <div className="text-green-500 text-[10px] mb-12 flex justify-between uppercase tracking-widest opacity-50">
          <span>> PROTOCOL_V4.0</span>
          <span>SECURE_NODE</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black text-white mb-10 uppercase tracking-tighter leading-none">
          SYSTEM_ <br/> <span className="text-green-500">OFFLINE</span><span className="animate-pulse text-green-500">_</span>
        </h1>
        
        <div className="space-y-4 mb-12 text-green-500/60 text-xs uppercase leading-relaxed">
          <p>> INITIATING_LAUNCH_HANDSHAKE...</p>
          <p>> DEPLOYING_NEURAL_MODULES...</p>
          <p>> ESTIMATED_SYNC: <span className="text-green-500 font-black">14_DAYS</span></p>
        </div>

        <div className="flex border-2 border-green-500">
          <input type="email" placeholder="INSERT_PROTOCOL_ID" className="flex-1 bg-transparent text-green-500 p-5 placeholder-green-900 outline-none uppercase text-xs font-black" />
          <button className="bg-green-500 text-black px-10 py-5 hover:bg-white transition-all text-xs font-black uppercase tracking-widest">
            Execute
          </button>
        </div>
      </div>
    </div>
  </div>
);

// --- 6. Mesh Gradient ---
export const ComingGradient = () => (
  <div className="flex items-center justify-center min-h-[600px] w-full bg-slate-950 rounded-[3rem] relative overflow-hidden font-sans italic font-bold">
    <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[100%] rounded-full bg-blue-600 blur-[160px] opacity-20"></div>
    <div className="absolute bottom-[-50%] right-[-20%] w-[100%] h-[100%] rounded-full bg-indigo-600 blur-[160px] opacity-20"></div>

    <div className="relative z-10 text-center px-6">
      <div className="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em] mb-8">Node_Evolution_V2</div>
      <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-10 tracking-tighter uppercase leading-[0.85]">
        The_Next <br/> <span className="italic">Dimension</span>
      </h1>
      <p className="text-slate-400 text-xl mb-16 max-w-xl mx-auto lowercase font-medium">
        Redefining the architecture of the digital matrix. <br/> launch_sequence: summer_2024.
      </p>

      <div className="bg-white/5 border-2 border-white/10 p-2 rounded-2xl flex max-w-lg mx-auto backdrop-blur-3xl group focus-within:border-white/20 transition-all shadow-2xl">
        <input type="email" placeholder="your_logic_id@matrix.io" className="flex-1 bg-transparent px-8 py-5 text-white placeholder-slate-600 outline-none font-black uppercase text-xs" />
        <button className="bg-white text-slate-950 px-10 rounded-xl font-black hover:bg-blue-500 hover:text-white transition-all uppercase text-xs tracking-widest shadow-xl">
          Join_The_Future
        </button>
      </div>
    </div>
  </div>
);

// --- 7. Retro Brutalist ---
export const ComingBrutalist = () => (
  <div className="flex flex-col justify-between min-h-[600px] w-full bg-yellow-400 rounded-[3rem] border-8 border-slate-950 relative overflow-hidden font-sans italic font-black uppercase">
    <div className="absolute top-12 -left-10 transform -rotate-2 bg-slate-950 text-white py-4 px-40 border-y-4 border-white font-black text-2xl whitespace-nowrap z-0 shadow-2xl">
      UNDER_CONSTRUCTION &nbsp; // &nbsp; UNDER_CONSTRUCTION &nbsp; // &nbsp; UNDER_CONSTRUCTION
    </div>

    <div className="relative z-10 p-12 md:p-20 mt-20">
      <h1 className="text-8xl md:text-9xl font-black text-slate-950 leading-[0.8] mb-12 tracking-tighter">
        Not <br/> Quite <br/> <span className="text-white drop-shadow-[4px_4px_0_#000]">Ready.</span>
      </h1>
      <div className="bg-white border-8 border-slate-950 p-8 max-w-md shadow-[16px_16px_0_0_#000] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
        <p className="font-black text-xl mb-6 text-slate-950">Wanna_Sync_When_Live?</p>
        <div className="flex flex-col gap-4">
          <input type="email" placeholder="YOUR_NODE_ID" className="flex-1 p-5 border-4 border-slate-950 font-black outline-none uppercase text-slate-950 bg-slate-50" />
          <button className="p-5 bg-slate-950 text-white border-4 border-slate-950 font-black hover:bg-white hover:text-slate-950 transition-colors tracking-widest">
            [ EXECUTE ]
          </button>
        </div>
      </div>
    </div>
    
    <div className="p-10 border-t-8 border-slate-950 bg-white flex flex-col md:flex-row justify-between items-center gap-6">
      <span className="font-black text-xl text-slate-950">🚧 Building_In_The_Void</span>
      <div className="flex gap-8 font-black underline text-sm tracking-widest text-slate-950">
        <a href="#" className="hover:text-yellow-500">Twitter_X</a>
        <a href="#" className="hover:text-yellow-500">Discord</a>
      </div>
    </div>
  </div>
);

// --- 8. Neumorphic Soft ---
export const ComingNeumorphic = () => (
  <div className="flex items-center justify-center min-h-[600px] w-full bg-[#e0e5ec] rounded-[3rem] font-sans italic font-bold">
    <div className="w-full max-w-xl p-16 md:p-20 rounded-[4rem] bg-[#e0e5ec] shadow-[30px_30px_60px_#bebebe,-30px_-30px_60px_#ffffff] text-center border border-white/20">
      <div className="w-28 h-28 rounded-full bg-[#e0e5ec] shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] flex items-center justify-center text-4xl mb-12 mx-auto border-4 border-white/50">
        ⌛
      </div>
      
      <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 uppercase tracking-tighter leading-none">Logic_Pending</h2>
      <p className="text-slate-500 mb-12 lowercase font-medium text-lg italic">We are optimizing nodes for a flawless synchronization.</p>
      
      <div className="flex flex-col gap-8 max-w-sm mx-auto">
        <div className="rounded-2xl bg-[#e0e5ec] p-1 shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] border border-white/10">
          <input type="email" placeholder="Enter_Email_Protocol" className="w-full bg-transparent border-none outline-none text-slate-700 placeholder-slate-400 px-8 py-5 text-center font-black uppercase text-xs" />
        </div>
        
        <button className="w-full py-5 rounded-2xl bg-[#e0e5ec] text-blue-600 font-black shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] active:scale-95 transition-all uppercase text-xs tracking-widest border border-white/20">
          Sync_Me_Later
        </button>
      </div>
    </div>
  </div>
);

// --- 9. Mobile Focus ---
export const ComingApp = () => (
  <div className="flex flex-col md:flex-row min-h-[600px] w-full bg-blue-600 rounded-[3rem] overflow-hidden px-12 md:px-24 pt-24 font-sans italic font-bold text-white relative">
    <div className="w-full md:w-1/2 flex flex-col justify-center pb-24 relative z-10">
      <span className="text-white/60 font-black tracking-[0.4em] uppercase mb-8 text-[10px]">Matrix_Core // Mobile_V1</span>
      <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.85]">
        The_Future <br/> Of_Logic <br/> <span className="text-blue-200">On_Mobile.</span>
      </h1>
      <p className="text-blue-100 text-xl mb-12 max-w-md lowercase font-medium">
        A new dimension of social orchestration. Real nodes, real signal.
      </p>
      
      <form className="bg-white/10 backdrop-blur-3xl p-2 rounded-2xl border-2 border-white/20 flex max-w-md shadow-2xl">
        <input type="email" placeholder="Sync_Email_ID" className="flex-1 px-6 bg-transparent outline-none text-white placeholder-white/40 font-black uppercase text-xs" />
        <button className="bg-white text-blue-600 px-10 py-5 rounded-xl font-black hover:bg-blue-50 transition-all uppercase text-xs tracking-widest">
          Join
        </button>
      </form>
    </div>

    <div className="hidden md:flex w-1/2 justify-center items-end relative z-10">
       <div className="w-[320px] h-[550px] bg-slate-900 rounded-t-[4rem] border-x-8 border-t-8 border-white/20 shadow-2xl relative overflow-hidden">
          <div className="w-full h-full bg-blue-600 flex flex-col items-center justify-center p-12 text-center">
            <div className="w-20 h-20 bg-white rounded-3xl mb-8 rotate-12 shadow-2xl"></div>
            <div className="font-black text-white text-3xl uppercase tracking-tighter">Logic_App</div>
            <div className="mt-12 space-y-4 w-full opacity-20 scale-90">
               <div className="h-32 bg-white/20 rounded-3xl w-full border-2 border-white/40"></div>
               <div className="h-32 bg-white/20 rounded-3xl w-full border-2 border-white/40"></div>
            </div>
            <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-md flex items-center justify-center p-8">
               <div className="bg-white text-blue-600 px-8 py-4 rounded-2xl shadow-2xl font-black uppercase text-xs tracking-widest border-2 border-blue-50 rotate-[-4deg]">Coming_Soon</div>
            </div>
          </div>
       </div>
    </div>
  </div>
);

// --- 10. Countdown Event ---
export const ComingCountdown = () => (
  <div className="flex flex-col items-center justify-center min-h-[600px] w-full bg-slate-950 text-white rounded-[3rem] border-2 border-white/5 relative overflow-hidden font-sans italic font-bold">
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_70%)]"></div>
    </div>
    <div className="text-center z-10 p-8">
      <p className="text-blue-500 font-black uppercase tracking-[0.5em] mb-8 text-[10px]">Global_Sync_Protocol_V1</p>
      <h1 className="text-6xl md:text-9xl font-black mb-16 uppercase tracking-tighter leading-[0.85]">Evolution <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Launch_Event</span></h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20 max-w-4xl mx-auto">
        <div>
          <div className="text-6xl md:text-8xl font-black mb-2 tracking-tighter tabular-nums">12</div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-blue-500">Days</div>
        </div>
        <div>
          <div className="text-6xl md:text-8xl font-black mb-2 tracking-tighter tabular-nums">18</div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-blue-500">Hours</div>
        </div>
        <div>
          <div className="text-6xl md:text-8xl font-black mb-2 tracking-tighter tabular-nums">45</div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-blue-500">Mins</div>
        </div>
        <div>
          <div className="text-6xl md:text-8xl font-black mb-2 tracking-tighter tabular-nums">22</div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-blue-500">Secs</div>
        </div>
      </div>

      <div className="max-w-md mx-auto relative group">
        <div className="absolute -inset-1 bg-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
        <button className="relative w-full py-6 bg-white text-slate-950 font-black rounded-full hover:bg-blue-600 hover:text-white transition-all uppercase text-xs tracking-[0.2em] shadow-2xl">
          Request_Stream_Access
        </button>
      </div>
    </div>
  </div>
);

// --- Main Gallery Wrapper ---
const ComingSoonGallery = () => {
  return (
    <div className="container overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-64">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-none">The_Waitlist_Matrix</h1>
        <p className="text-slate-500 font-bold text-xl italic lowercase">Synchronizing future logic across the digital void.</p>
      </div>
      
      <div className="space-y-32 max-w-6xl mx-auto">
        
        {/* 01. Standard SaaS */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const ComingStandard = () => (
  <div className="flex flex-col items-center justify-center min-h-[600px] w-full bg-white border border-slate-100 rounded-[3rem] p-12 text-center relative overflow-hidden font-sans italic font-bold">
    <div className="relative z-10 max-w-2xl mx-auto">
      <div className="inline-block px-6 py-2 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-xl shadow-blue-200">
        Launch_Sequence_Initiated
      </div>
      <h1 className="text-6xl font-black text-slate-950 mb-8 tracking-tighter uppercase leading-[0.9]">
        Work_Smarter <br/> <span className="text-blue-600 italic">Not_Harder</span>
      </h1>
      <p className="text-slate-500 mb-12 text-xl max-w-lg mx-auto lowercase font-medium">
        The all-in-one logic platform for the next generation of node architects.
      </p>
      <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto mb-10">
        <input type="email" placeholder="Enter_Logic_Node_ID" className="flex-1 px-8 py-5 border-2 border-slate-100 rounded-2xl focus:border-blue-600 outline-none transition-all bg-slate-50 text-slate-900 placeholder-slate-400 font-black uppercase text-sm" />
        <button className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 uppercase text-sm tracking-widest">Join_Waitlist</button>
      </form>
      <div className="flex items-center justify-center gap-3 text-[10px] text-slate-400 font-black uppercase tracking-widest">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        <span>2,400+ nodes already synchronized</span>
      </div>
    </div>
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
       <div className="absolute top-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-blue-400 rounded-full blur-[120px]"></div>
       <div className="absolute bottom-[-20%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-400 rounded-full blur-[120px]"></div>
    </div>
  </div>
);`}
              htmlCode={`<!-- SaaS Standard Coming Soon -->
<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 600px; width: 100%; background: white; border: 1px solid #f1f5f9; border-radius: 48px; padding: 48px; text-align: center; position: relative; overflow: hidden; font-family: sans-serif; font-style: italic; font-weight: 700;">
  <div style="position: relative; z-index: 10; max-width: 672px; margin: 0 auto;">
    <div style="display: inline-block; padding: 8px 24px; border-radius: 999px; background: #2563eb; color: white; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 40px; box-shadow: 0 20px 25px -5px rgba(37,99,235,0.2);">
      Launch_Sequence_Initiated
    </div>
    <h1 style="font-size: 64px; font-weight: 900; color: #0f172a; margin-bottom: 32px; letter-spacing: -0.05em; text-transform: uppercase; line-height: 0.9;">
      Work_Smarter <br/> <span style="color: #2563eb; font-style: italic;">Not_Harder</span>
    </h1>
    <p style="color: #64748b; margin-bottom: 48px; font-size: 20px; font-weight: 500; text-transform: lowercase;">
      The all-in-one logic platform for the next generation of node architects.
    </p>
    <form style="display: flex; gap: 16px; max-width: 448px; margin: 0 auto 40px auto;">
      <input type="email" placeholder="Enter_Logic_Node_ID" style="flex: 1; padding: 20px 32px; border: 2px solid #f1f5f9; border-radius: 16px; outline: none; background: #f8fafc; font-weight: 900; text-transform: uppercase; font-size: 14px;" />
      <button style="padding: 20px 40px; background: #2563eb; color: white; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 14px; letter-spacing: 0.1em; border: none; cursor: pointer; box-shadow: 0 25px 50px -12px rgba(37,99,235,0.2);">Join_Waitlist</button>
    </form>
    <div style="display: flex; align-items: center; justify-content: center; gap: 12px; font-size: 10px; color: #94a3b8; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em;">
      <span style="width: 8px; height: 8px; border-radius: 50%; background: #3b82f6;"></span>
      <span>2,400+ nodes already synchronized</span>
    </div>
  </div>
  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.1; pointer-events: none;">
    <div style="position: absolute; top: -20%; right: -10%; width: 640px; height: 640px; background: #60a5fa; border-radius: 50%; filter: blur(120px);"></div>
    <div style="position: absolute; bottom: -20%; left: -10%; width: 640px; height: 640px; background: #818cf8; border-radius: 50%; filter: blur(120px);"></div>
  </div>
</div>`}
              cssCode={`.coming-soon-root { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 600px; width: 100%; background: white; border: 1px solid #f1f5f9; border-radius: 48px; padding: 48px; text-align: center; position: relative; overflow: hidden; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; }
.hero-tag { display: inline-block; padding: 8px 24px; border-radius: 999px; background: #2563eb; color: white; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 40px; box-shadow: 0 20px 25px -5px rgba(37,99,235,0.2); }
.hero-title { font-size: 48px; font-weight: 900; color: #0f172a; margin-bottom: 32px; letter-spacing: -0.05em; text-transform: uppercase; line-height: 0.9; }
@media (min-width: 768px) { .hero-title { font-size: 64px; } }
.hero-subtitle { color: #64748b; margin-bottom: 48px; font-size: 20px; font-weight: 500; text-transform: lowercase; }
.waitlist-form { display: flex; flex-direction: column; gap: 16px; max-width: 448px; margin: 0 auto 40px auto; }
@media (min-width: 768px) { .waitlist-form { flex-direction: row; } }
.waitlist-input { flex: 1; padding: 20px 32px; border: 2px solid #f1f5f9; border-radius: 16px; outline: none; background: #f8fafc; font-weight: 900; text-transform: uppercase; font-size: 14px; transition: border-color 0.3s ease; }
.waitlist-input:focus { border-color: #2563eb; }
.waitlist-btn { padding: 20px 40px; background: #2563eb; color: white; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 14px; letter-spacing: 0.1em; border: none; cursor: pointer; box-shadow: 0 25px 50px -12px rgba(37,99,235,0.2); transition: all 0.3s ease; }
.waitlist-btn:hover { background: #1d4ed8; transform: translateY(-2px); }
.status-indicator { display: flex; align-items: center; justify-content: center; gap: 12px; font-size: 10px; color: #94a3b8; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; }
.pulse-dot { width: 8px; height: 8px; border-radius: 50%; background: #3b82f6; animation: pulse 2s infinite; }
@keyframes pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; } }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">01. Standard SaaS Matrix</span>
           <ComingStandard />
        </section>

        {/* 02. Minimalist Typography */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const ComingMinimal = () => (
  <div className="flex flex-col justify-center min-h-[600px] w-full bg-[#0a0a0a] rounded-[3rem] p-12 md:p-24 border border-white/5 font-sans italic font-bold relative overflow-hidden">
    <div className="w-full max-w-3xl relative z-10">
      <div className="h-2 w-32 bg-blue-600 mb-16"></div>
      <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.85] mb-16 uppercase tracking-tighter">
        Something <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 italic">Evolutionary</span> <br/>
        Is_Loading
      </h1>
      <div className="flex flex-col md:flex-row items-start md:items-end gap-16">
        <div className="w-full max-w-sm">
          <label className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-6 block">Sync_Your_Node</label>
          <div className="flex border-b-2 border-white/10 pb-4 group focus-within:border-blue-600 transition-all">
            <input type="email" placeholder="NODE_ID@EMAIL.COM" className="w-full bg-transparent outline-none placeholder-white/20 text-white font-black uppercase tracking-widest" />
            <button className="font-black text-xs uppercase text-white hover:text-blue-500 transition-colors tracking-widest ml-4">Submit_→</button>
          </div>
        </div>
        <div className="flex-1 text-right">
           <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] mb-2">Protocol_ETA</div>
           <div className="text-4xl text-white font-black tabular-nums tracking-tighter">12D : 18H : 45M</div>
        </div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Minimalist Coming Soon -->
<div style="background: #0a0a0a; min-height: 600px; width: 100%; border-radius: 48px; padding: 48px; display: flex; flex-direction: column; justify-content: center; position: relative; overflow: hidden; font-family: sans-serif; font-style: italic; font-weight: 700;">
  <div style="width: 100%; max-width: 768px; position: relative; z-index: 10;">
    <div style="height: 8px; width: 128px; background: #2563eb; margin-bottom: 64px;"></div>
    <h1 style="font-size: 72px; font-weight: 900; color: white; line-height: 0.85; margin-bottom: 64px; text-transform: uppercase; letter-spacing: -0.05em;">
      Something <br/>
      <span style="color: #3b82f6; font-style: italic;">Evolutionary</span> <br/>
      Is_Loading
    </h1>
    <div style="display: flex; gap: 64px; align-items: flex-end;">
      <div style="width: 100%; max-width: 384px;">
        <label style="font-size: 10px; font-weight: 900; color: #3b82f6; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 24px; display: block;">Sync_Your_Node</label>
        <div style="display: flex; border-bottom: 2px solid rgba(255,255,255,0.1); padding-bottom: 16px;">
          <input type="email" placeholder="NODE_ID@EMAIL.COM" style="width: 100%; background: transparent; border: none; outline: none; color: white; font-weight: 900; text-transform: uppercase;" />
          <button style="background: transparent; border: none; color: white; font-weight: 900; text-transform: uppercase; font-size: 12px; margin-left: 16px; cursor: pointer;">Submit_→</button>
        </div>
      </div>
      <div style="flex: 1; text-align: right;">
        <div style="color: rgba(255,255,255,0.2); font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; margin-bottom: 8px;">Protocol_ETA</div>
        <div style="font-size: 36px; color: white; font-weight: 900; letter-spacing: -0.05em;">12D : 18H : 45M</div>
      </div>
    </div>
  </div>
</div>`}
              cssCode={`.minimal-root { background: #0a0a0a; min-height: 600px; width: 100%; border-radius: 48px; padding: 48px; display: flex; flex-direction: column; justify-content: center; position: relative; overflow: hidden; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; }
.accent-bar { height: 8px; width: 128px; background: #2563eb; margin-bottom: 64px; }
.minimal-title { font-size: 48px; font-weight: 900; color: white; line-height: 0.85; margin-bottom: 64px; text-transform: uppercase; letter-spacing: -0.05em; }
@media (min-width: 768px) { .minimal-title { font-size: 72px; } }
.gradient-text { color: #3b82f6; font-style: italic; }
.form-wrap { display: flex; flex-direction: column; gap: 48px; align-items: flex-start; }
@media (min-width: 768px) { .form-wrap { flex-direction: row; align-items: flex-end; } }
.input-label { font-size: 10px; font-weight: 900; color: #3b82f6; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 24px; display: block; }
.input-group { display: flex; border-bottom: 2px solid rgba(255,255,255,0.1); padding-bottom: 16px; width: 100%; max-width: 384px; transition: border-color 0.3s ease; }
.input-group:focus-within { border-color: #3b82f6; }
.minimal-input { width: 100%; background: transparent; border: none; outline: none; color: white; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; }
.minimal-input::placeholder { color: rgba(255,255,255,0.2); }
.minimal-submit { background: transparent; border: none; color: white; font-weight: 900; text-transform: uppercase; font-size: 12px; margin-left: 16px; cursor: pointer; white-space: nowrap; transition: color 0.3s ease; }
.minimal-submit:hover { color: #3b82f6; }
.countdown-wrap { flex: 1; text-align: right; width: 100%; }
.countdown-label { color: rgba(255,255,255,0.2); font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; margin-bottom: 8px; }
.countdown-value { font-size: 36px; color: white; font-weight: 900; letter-spacing: -0.05em; font-variant-numeric: tabular-nums; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">02. Minimalist Typography Node</span>
           <ComingMinimal />
        </section>

        {/* 03. Split Visual */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const ComingSplit = () => (
  <div className="flex flex-col md:flex-row min-h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl font-sans italic font-bold border border-slate-100 bg-white text-left">
    <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
      <div className="mb-auto font-black text-2xl tracking-tighter text-blue-600 uppercase italic">Matrix_Core.</div>
      <div className="py-20">
        <h1 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-[0.95]">
          Architecting <br/> The_Future_Of <br/> <span className="text-blue-600">Digital_Logic</span>
        </h1>
        <p className="text-slate-500 mb-12 text-lg lowercase font-medium">Be the first to synchronize with the core protocol. No noise, just signal.</p>
        <div className="relative group">
          <input type="email" placeholder="Logic_Access_Key" className="w-full pl-8 pr-40 py-6 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-blue-600 transition-all font-black uppercase text-sm" />
          <button className="absolute right-2 top-2 bottom-2 px-8 bg-slate-900 text-white text-xs font-black rounded-xl hover:bg-blue-600 transition-all uppercase tracking-widest">Request_Access</button>
        </div>
      </div>
      <div className="mt-auto flex gap-8 text-[10px] text-slate-300 font-black uppercase tracking-[0.3em]">
         <a href="#" className="hover:text-blue-600">Twitter_X</a>
         <a href="#" className="hover:text-blue-600">Discord_Server</a>
      </div>
    </div>
    <div className="hidden md:block w-1/2 relative">
      <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125" />
      <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply"></div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Split Visual Coming Soon -->
<div style="display: flex; min-height: 600px; width: 100%; border-radius: 48px; overflow: hidden; background: white; border: 1px solid #f1f5f9; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1); font-family: sans-serif; font-style: italic; font-weight: 700;">
  <div style="width: 50%; padding: 80px; display: flex; flex-direction: column; justify-content: center; text-align: left;">
    <div style="margin-bottom: auto; font-weight: 900; font-size: 24px; color: #2563eb; text-transform: uppercase;">Matrix_Core.</div>
    <div style="padding: 80px 0;">
      <h1 style="font-size: 48px; font-weight: 900; color: #0f172a; margin-bottom: 32px; line-height: 0.95; text-transform: uppercase;">
        Architecting <br/> The_Future_Of <br/> <span style="color: #2563eb;">Digital_Logic</span>
      </h1>
      <p style="color: #64748b; font-size: 18px; margin-bottom: 48px; text-transform: lowercase;">Be the first to synchronize with the core protocol. No noise, just signal.</p>
      <div style="position: relative;">
        <input type="email" placeholder="Logic_Access_Key" style="width: 100%; padding: 24px 32px; background: #f8fafc; border: 2px solid #f1f5f9; border-radius: 16px; outline: none; font-weight: 900; text-transform: uppercase; font-size: 14px;" />
        <button style="position: absolute; right: 8px; top: 8px; bottom: 8px; padding: 0 32px; background: #0f172a; color: white; border-radius: 12px; font-weight: 900; text-transform: uppercase; font-size: 10px; letter-spacing: 0.1em; border: none; cursor: pointer;">Request_Access</button>
      </div>
    </div>
    <div style="margin-top: auto; display: flex; gap: 32px; font-size: 10px; color: #cbd5e1; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em;">
      <span>Twitter_X</span>
      <span>Discord_Server</span>
    </div>
  </div>
  <div style="width: 50%; position: relative;">
    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%);" />
    <div style="position: absolute; inset: 0; background: rgba(37,99,235,0.2); mix-blend-mode: multiply;"></div>
  </div>
</div>`}
              cssCode={`.split-root { display: flex; flex-direction: column; min-height: 600px; width: 100%; border-radius: 48px; overflow: hidden; background: white; border: 1px solid #f1f5f9; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1); font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; }
@media (min-width: 768px) { .split-root { flex-direction: row; } }
.split-content { width: 100%; padding: 48px; display: flex; flex-direction: column; justify-content: center; text-align: left; }
@media (min-width: 768px) { .split-content { width: 50%; padding: 80px; } }
.brand-logo { margin-bottom: auto; font-weight: 900; font-size: 24px; color: #2563eb; text-transform: uppercase; letter-spacing: -0.05em; }
.main-text { padding: 48px 0; }
.split-title { font-size: 36px; font-weight: 900; color: #0f172a; margin-bottom: 32px; line-height: 0.95; text-transform: uppercase; }
@media (min-width: 768px) { .split-title { font-size: 48px; } }
.split-highlight { color: #2563eb; }
.split-subtitle { color: #64748b; font-size: 18px; margin-bottom: 48px; text-transform: lowercase; font-weight: 500; }
.access-group { position: relative; width: 100%; }
.access-input { width: 100%; padding: 24px 32px; background: #f8fafc; border: 2px solid #f1f5f9; border-radius: 16px; outline: none; font-weight: 900; text-transform: uppercase; font-size: 14px; transition: border-color 0.3s ease; }
.access-input:focus { border-color: #2563eb; }
.access-btn { position: absolute; right: 8px; top: 8px; bottom: 8px; padding: 0 24px; background: #0f172a; color: white; border-radius: 12px; font-weight: 900; text-transform: uppercase; font-size: 10px; letter-spacing: 0.1em; border: none; cursor: pointer; transition: all 0.3s ease; }
@media (min-width: 768px) { .access-btn { padding: 0 32px; } }
.access-btn:hover { background: #2563eb; }
.split-footer { margin-top: auto; display: flex; gap: 32px; font-size: 10px; color: #cbd5e1; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; }
.footer-link { text-decoration: none; color: inherit; transition: color 0.3s ease; }
.footer-link:hover { color: #2563eb; }
.split-visual { width: 50%; position: relative; display: none; }
@media (min-width: 768px) { .split-visual { display: block; } }
.split-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(1.2); }
.img-overlay { position: absolute; inset: 0; background: rgba(37,99,235,0.2); mix-blend-mode: multiply; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">03. Split Logic Visual</span>
           <ComingSplit />
        </section>

        {/* 04. Glassmorphism */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const ComingGlass = () => (
  <div className="relative flex items-center justify-center min-h-[600px] w-full rounded-[3rem] overflow-hidden bg-slate-950 font-sans italic font-bold">
    <div className="absolute top-20 left-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse"></div>
    <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-600 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse delay-1000"></div>
    <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 p-12 md:p-20 rounded-[4rem] shadow-2xl text-center text-white max-w-2xl mx-4">
      <div className="inline-block px-6 py-2 rounded-full border-2 border-white/10 text-[10px] font-black tracking-[0.4em] uppercase mb-12 bg-white/5 shadow-2xl">Beta_Protocol_Active</div>
      <h1 className="text-6xl font-black mb-10 tracking-tighter uppercase leading-[0.85] drop-shadow-2xl">Almost <br/> <span className="italic text-blue-400">Ready</span></h1>
      <div className="grid grid-cols-3 gap-6 mb-16 max-w-md mx-auto text-center">
        <div className="bg-white/5 p-4 rounded-3xl border border-white/10">
          <div className="text-4xl font-black mb-1">12</div>
          <div className="text-[8px] uppercase tracking-widest opacity-40">Days</div>
        </div>
        <div className="bg-white/5 p-4 rounded-3xl border border-white/10">
          <div className="text-4xl font-black mb-1">18</div>
          <div className="text-[8px] uppercase tracking-widest opacity-40">Hours</div>
        </div>
        <div className="bg-white/5 p-4 rounded-3xl border border-white/10">
          <div className="text-4xl font-black mb-1">45</div>
          <div className="text-[8px] uppercase tracking-widest opacity-40">Mins</div>
        </div>
      </div>
      <form className="relative group max-w-md mx-auto">
        <div className="relative flex bg-white rounded-2xl p-1">
          <input type="email" placeholder="Protocol_Node_Email" className="w-full px-6 text-slate-900 bg-transparent outline-none font-black uppercase text-xs" />
          <button className="px-8 py-4 bg-slate-900 text-white font-black rounded-xl hover:bg-blue-600 transition-all uppercase text-xs tracking-widest">Sync_Now</button>
        </div>
      </form>
    </div>
  </div>
);`}
              htmlCode={`<!-- Glassmorphic Coming Soon -->
<div style="position: relative; display: flex; align-items: center; justify-content: center; min-height: 600px; width: 100%; border-radius: 48px; overflow: hidden; background: #020617; font-family: sans-serif; font-style: italic; font-weight: 700;">
  <div style="position: absolute; top: 80px; left: 80px; width: 320px; height: 320px; background: #2563eb; border-radius: 50%; filter: blur(120px); opacity: 0.4;"></div>
  <div style="position: absolute; bottom: 80px; right: 80px; width: 320px; height: 320px; background: #4f46e5; border-radius: 50%; filter: blur(120px); opacity: 0.4;"></div>
  <div style="position: relative; background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.1); padding: 80px; border-radius: 64px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); text-align: center; color: white; max-width: 672px; width: calc(100% - 32px);">
    <div style="display: inline-block; padding: 8px 24px; border-radius: 999px; border: 2px solid rgba(255,255,255,0.1); font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 48px; background: rgba(255,255,255,0.05);">Beta_Protocol_Active</div>
    <h1 style="font-size: 64px; font-weight: 900; margin-bottom: 40px; letter-spacing: -0.05em; text-transform: uppercase; line-height: 0.85;">Almost <br/> <span style="color: #60a5fa; font-style: italic;">Ready</span></h1>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 64px; max-width: 448px; margin-left: auto; margin-right: auto;">
      <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 24px; border: 1px solid rgba(255,255,255,0.1);">
        <div style="font-size: 36px; font-weight: 900; margin-bottom: 4px;">12</div>
        <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.2em; opacity: 0.4;">Days</div>
      </div>
      <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 24px; border: 1px solid rgba(255,255,255,0.1);">
        <div style="font-size: 36px; font-weight: 900; margin-bottom: 4px;">18</div>
        <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.2em; opacity: 0.4;">Hours</div>
      </div>
      <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 24px; border: 1px solid rgba(255,255,255,0.1);">
        <div style="font-size: 36px; font-weight: 900; margin-bottom: 4px;">45</div>
        <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.2em; opacity: 0.4;">Mins</div>
      </div>
    </div>
    <div style="background: white; border-radius: 16px; padding: 4px; display: flex; max-width: 448px; margin: 0 auto;">
      <input type="email" placeholder="Protocol_Node_Email" style="width: 100%; padding: 0 24px; border: none; outline: none; color: #0f172a; font-weight: 900; text-transform: uppercase; font-size: 12px; background: transparent;" />
      <button style="background: #0f172a; color: white; padding: 16px 32px; border-radius: 12px; border: none; font-weight: 900; text-transform: uppercase; font-size: 12px; cursor: pointer; letter-spacing: 0.1em;">Sync_Now</button>
    </div>
  </div>
</div>`}
              cssCode={`.glass-root { position: relative; display: flex; align-items: center; justify-content: center; min-height: 600px; width: 100%; border-radius: 48px; overflow: hidden; background: #020617; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; }
.glass-blob { position: absolute; width: 320px; height: 320px; border-radius: 50%; filter: blur(120px); opacity: 0.4; pointer-events: none; }
.blob-1 { top: 80px; left: 80px; background: #2563eb; animation: blob-pulse 8s infinite alternate; }
.blob-2 { bottom: 80px; right: 80px; background: #4f46e5; animation: blob-pulse 8s infinite alternate-reverse; }
@keyframes blob-pulse { 0% { transform: scale(1); opacity: 0.3; } 100% { transform: scale(1.5); opacity: 0.5; } }
.glass-container { position: relative; background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.1); padding: 48px; border-radius: 64px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); text-align: center; color: white; max-width: 672px; width: calc(100% - 32px); }
@media (min-width: 768px) { .glass-container { padding: 80px; } }
.beta-tag { display: inline-block; padding: 8px 24px; border-radius: 999px; border: 2px solid rgba(255,255,255,0.1); font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 48px; background: rgba(255,255,255,0.05); }
.glass-title { font-size: 48px; font-weight: 900; margin-bottom: 40px; letter-spacing: -0.05em; text-transform: uppercase; line-height: 0.85; }
@media (min-width: 768px) { .glass-title { font-size: 64px; } }
.title-italic { color: #60a5fa; font-style: italic; }
.countdown-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 64px; max-width: 448px; margin-left: auto; margin-right: auto; }
@media (min-width: 768px) { .countdown-grid { gap: 24px; } }
.countdown-box { background: rgba(255,255,255,0.05); padding: 16px; border-radius: 24px; border: 1px solid rgba(255,255,255,0.1); transition: transform 0.3s ease; }
.countdown-box:hover { transform: translateY(-4px); border-color: rgba(255,255,255,0.2); }
.countdown-num { font-size: 30px; font-weight: 900; margin-bottom: 4px; }
@media (min-width: 768px) { .countdown-num { font-size: 36px; } }
.countdown-unit { font-size: 8px; text-transform: uppercase; letter-spacing: 0.2em; opacity: 0.4; }
.glass-form { background: white; border-radius: 16px; padding: 4px; display: flex; max-width: 448px; margin: 0 auto; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
.glass-input { flex: 1; padding: 0 24px; border: none; outline: none; color: #0f172a; font-weight: 900; text-transform: uppercase; font-size: 12px; background: transparent; }
.glass-btn { background: #0f172a; color: white; padding: 16px 32px; border-radius: 12px; border: none; font-weight: 900; text-transform: uppercase; font-size: 12px; cursor: pointer; letter-spacing: 0.1em; transition: background 0.3s ease; }
.glass-btn:hover { background: #2563eb; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">04. Glassmorphism Neural Matrix</span>
           <ComingGlass />
        </section>

        {/* 05. Cyberpunk Terminal */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const ComingCyber = () => (
  <div className="flex items-center justify-center min-h-[600px] w-full bg-black rounded-[3rem] border-2 border-green-500/20 relative overflow-hidden font-mono italic font-bold text-left">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    <div className="relative z-10 w-full max-w-xl p-4">
      <div className="bg-black border-2 border-green-500 p-12 shadow-[0_0_50px_rgba(34,197,94,0.1)] relative">
        <div className="absolute -top-4 -left-4 bg-green-500 text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest">System_Status</div>
        <div className="text-green-500 text-[10px] mb-12 flex justify-between uppercase tracking-widest opacity-50">
          <span>> PROTOCOL_V4.0</span>
          <span>SECURE_NODE</span>
        </div>
        <h1 className="text-5xl font-black text-white mb-10 uppercase tracking-tighter leading-none">SYSTEM_ <br/> <span className="text-green-500">OFFLINE</span><span className="animate-pulse text-green-500">_</span></h1>
        <div className="space-y-4 mb-12 text-green-500/60 text-xs uppercase leading-relaxed">
          <p>> INITIATING_LAUNCH_HANDSHAKE...</p>
          <p>> DEPLOYING_NEURAL_MODULES...</p>
          <p>> ESTIMATED_SYNC: <span className="text-green-500 font-black">14_DAYS</span></p>
        </div>
        <div className="flex border-2 border-green-500">
          <input type="email" placeholder="INSERT_PROTOCOL_ID" className="flex-1 bg-transparent text-green-500 p-5 placeholder-green-900 outline-none uppercase text-xs font-black" />
          <button className="bg-green-500 text-black px-10 py-5 hover:bg-white transition-all text-xs font-black uppercase tracking-widest">Execute</button>
        </div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Cyberpunk Terminal Coming Soon -->
<div style="background: black; min-height: 600px; width: 100%; border-radius: 48px; border: 2px solid rgba(34,197,94,0.2); position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; font-family: monospace; font-style: italic; font-weight: 700; text-align: left;">
  <div style="position: absolute; inset: 0; background-image: linear-gradient(rgba(34,197,94,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.03) 1px, transparent 1px); background-size: 40px 40px;"></div>
  <div style="position: relative; z-index: 10; width: 100%; max-width: 576px; padding: 16px;">
    <div style="background: black; border: 2px solid #22c55e; padding: 48px; box-shadow: 0 0 50px rgba(34,197,94,0.1); position: relative;">
      <div style="position: absolute; top: -16px; left: -16px; background: #22c55e; color: black; padding: 4px 16px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em;">System_Status</div>
      <div style="color: #22c55e; font-size: 10px; margin-bottom: 48px; display: flex; justify-content: space-between; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.5;">
        <span>> PROTOCOL_V4.0</span>
        <span>SECURE_NODE</span>
      </div>
      <h1 style="font-size: 48px; font-weight: 900; color: white; margin-bottom: 40px; text-transform: uppercase; letter-spacing: -0.05em; line-height: 1;">SYSTEM_ <br/> <span style="color: #22c55e;">OFFLINE</span><span style="color: #22c55e;">_</span></h1>
      <div style="margin-bottom: 48px; color: rgba(34,197,94,0.6); font-size: 12px; text-transform: uppercase; line-height: 1.6;">
        <p>> INITIATING_LAUNCH_HANDSHAKE...</p>
        <p>> DEPLOYING_NEURAL_MODULES...</p>
        <p>> ESTIMATED_SYNC: <span style="color: #22c55e; font-weight: 900;">14_DAYS</span></p>
      </div>
      <div style="display: flex; border: 2px solid #22c55e;">
        <input type="email" placeholder="INSERT_PROTOCOL_ID" style="flex: 1; background: transparent; border: none; color: #22c55e; padding: 20px; outline: none; text-transform: uppercase; font-size: 12px; font-weight: 900;" />
        <button style="background: #22c55e; color: black; padding: 0 40px; border: none; font-weight: 900; text-transform: uppercase; font-size: 12px; cursor: pointer; letter-spacing: 0.1em;">Execute</button>
      </div>
    </div>
  </div>
</div>`}
              cssCode={`.cyber-root { background: black; min-height: 600px; width: 100%; border-radius: 48px; border: 2px solid rgba(34,197,94,0.2); position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; font-family: 'JetBrains Mono', monospace; font-style: italic; font-weight: 700; text-align: left; }
.cyber-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(34,197,94,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.03) 1px, transparent 1px); background-size: 40px 40px; }
.terminal-box { position: relative; z-index: 10; width: 100%; max-width: 576px; padding: 16px; transition: transform 0.3s ease; }
.terminal-box:hover { transform: scale(1.02); }
.terminal-inner { background: black; border: 2px solid #22c55e; padding: 48px; box-shadow: 0 0 50px rgba(34,197,94,0.1); position: relative; }
.terminal-tag { position: absolute; top: -16px; left: -16px; background: #22c55e; color: black; padding: 4px 16px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; }
.terminal-header { color: #22c55e; font-size: 10px; margin-bottom: 48px; display: flex; justify-content: space-between; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.5; }
.cyber-title { font-size: 36px; font-weight: 900; color: white; margin-bottom: 40px; text-transform: uppercase; letter-spacing: -0.05em; line-height: 1; }
@media (min-width: 768px) { .cyber-title { font-size: 48px; } }
.cyber-highlight { color: #22c55e; }
.blink-cursor { color: #22c55e; animation: blink 1s infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
.log-stream { margin-bottom: 48px; color: rgba(34,197,94,0.6); font-size: 12px; text-transform: uppercase; line-height: 1.6; }
.log-highlight { color: #22c55e; font-weight: 900; }
.cyber-input-group { display: flex; border: 2px solid #22c55e; transition: all 0.3s ease; }
.cyber-input-group:focus-within { box-shadow: 0 0 20px rgba(34,197,94,0.3); border-color: white; }
.cyber-input { flex: 1; background: transparent; border: none; color: #22c55e; padding: 20px; outline: none; text-transform: uppercase; font-size: 12px; font-weight: 900; width: 100%; }
.cyber-input::placeholder { color: rgba(34,197,94,0.3); }
.cyber-btn { background: #22c55e; color: black; padding: 0 32px; border: none; font-weight: 900; text-transform: uppercase; font-size: 12px; cursor: pointer; letter-spacing: 0.1em; transition: all 0.3s ease; }
@media (min-width: 768px) { .cyber-btn { padding: 0 40px; } }
.cyber-btn:hover { background: white; color: black; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">05. Cyberpunk Terminal Node</span>
           <ComingCyber />
        </section>

        {/* 06. Mesh Gradient */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const ComingGradient = () => (
  <div className="flex items-center justify-center min-h-[600px] w-full bg-slate-950 rounded-[3rem] relative overflow-hidden font-sans italic font-bold">
    <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[100%] rounded-full bg-blue-600 blur-[160px] opacity-20"></div>
    <div className="absolute bottom-[-50%] right-[-20%] w-[100%] h-[100%] rounded-full bg-indigo-600 blur-[160px] opacity-20"></div>
    <div className="relative z-10 text-center px-6">
      <div className="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em] mb-8">Node_Evolution_V2</div>
      <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-10 tracking-tighter uppercase leading-[0.85]">The_Next <br/> <span className="italic">Dimension</span></h1>
      <p className="text-slate-400 text-xl mb-16 max-w-xl mx-auto lowercase font-medium">Redefining the architecture of the digital matrix. <br/> launch_sequence: summer_2024.</p>
      <div className="bg-white/5 border-2 border-white/10 p-2 rounded-2xl flex max-w-lg mx-auto backdrop-blur-3xl group focus-within:border-white/20 transition-all shadow-2xl">
        <input type="email" placeholder="your_logic_id@matrix.io" className="flex-1 bg-transparent px-8 py-5 text-white placeholder-slate-600 outline-none font-black uppercase text-xs" />
        <button className="bg-white text-slate-950 px-10 rounded-xl font-black hover:bg-blue-500 hover:text-white transition-all uppercase text-xs tracking-widest shadow-xl">Join_The_Future</button>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Mesh Gradient Coming Soon -->
<div style="background: #020617; min-height: 600px; width: 100%; border-radius: 48px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; font-family: sans-serif; font-style: italic; font-weight: 700; text-align: center;">
  <div style="position: absolute; top: -50%; left: -20%; width: 100%; height: 100%; background: #2563eb; border-radius: 50%; filter: blur(160px); opacity: 0.2;"></div>
  <div style="position: absolute; bottom: -50%; right: -20%; width: 100%; height: 100%; background: #4f46e5; border-radius: 50%; filter: blur(160px); opacity: 0.2;"></div>
  <div style="position: relative; z-index: 10; padding: 0 24px;">
    <div style="font-size: 10px; color: #3b82f6; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; margin-bottom: 32px;">Node_Evolution_V2</div>
    <h1 style="font-size: 72px; font-weight: 900; color: white; margin-bottom: 40px; letter-spacing: -0.05em; text-transform: uppercase; line-height: 0.85;">The_Next <br/> <span style="font-style: italic; opacity: 0.6;">Dimension</span></h1>
    <p style="color: #94a3b8; font-size: 20px; margin-bottom: 64px; text-transform: lowercase; font-weight: 500;">Redefining the architecture of the digital matrix. <br/> launch_sequence: summer_2024.</p>
    <div style="background: rgba(255,255,255,0.05); border: 2px solid rgba(255,255,255,0.1); padding: 8px; border-radius: 24px; display: flex; max-width: 512px; margin: 0 auto; backdrop-filter: blur(40px);">
      <input type="email" placeholder="your_logic_id@matrix.io" style="flex: 1; background: transparent; border: none; padding: 20px 32px; color: white; outline: none; font-weight: 900; text-transform: uppercase; font-size: 12px;" />
      <button style="background: white; color: #020617; padding: 0 40px; border-radius: 16px; border: none; font-weight: 900; text-transform: uppercase; font-size: 12px; cursor: pointer; letter-spacing: 0.1em; transition: 0.3s;">Join_The_Future</button>
    </div>
  </div>
</div>`}
              cssCode={`.mesh-root { background: #020617; min-height: 600px; width: 100%; border-radius: 48px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; text-align: center; }
.mesh-bg-1 { position: absolute; top: -50%; left: -20%; width: 100%; height: 100%; background: #2563eb; border-radius: 50%; filter: blur(160px); opacity: 0.2; }
.mesh-bg-2 { position: absolute; bottom: -50%; right: -20%; width: 100%; height: 100%; background: #4f46e5; border-radius: 50%; filter: blur(160px); opacity: 0.2; }
.mesh-content { position: relative; z-index: 10; padding: 0 24px; }
.mesh-tag { font-size: 10px; color: #3b82f6; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; margin-bottom: 32px; }
.mesh-title { font-size: 48px; font-weight: 900; color: white; margin-bottom: 40px; letter-spacing: -0.05em; text-transform: uppercase; line-height: 0.85; }
@media (min-width: 768px) { .mesh-title { font-size: 72px; } }
.title-dim { font-style: italic; opacity: 0.6; }
.mesh-subtitle { color: #94a3b8; font-size: 20px; margin-bottom: 64px; text-transform: lowercase; font-weight: 500; }
.mesh-form { background: rgba(255,255,255,0.05); border: 2px solid rgba(255,255,255,0.1); padding: 8px; border-radius: 24px; display: flex; flex-direction: column; max-width: 512px; margin: 0 auto; backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px); gap: 12px; }
@media (min-width: 768px) { .mesh-form { flex-direction: row; gap: 0; } }
.mesh-input { flex: 1; background: transparent; border: none; padding: 20px 32px; color: white; outline: none; font-weight: 900; text-transform: uppercase; font-size: 12px; }
.mesh-input::placeholder { color: #475569; }
.mesh-btn { background: white; color: #020617; padding: 20px 40px; border-radius: 16px; border: none; font-weight: 900; text-transform: uppercase; font-size: 12px; cursor: pointer; letter-spacing: 0.1em; transition: all 0.3s ease; }
.mesh-btn:hover { background: #3b82f6; color: white; transform: scale(1.02); }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">06. Clean Gradient Logic</span>
           <ComingGradient />
        </section>

        {/* 07. Retro Brutalist */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const ComingBrutalist = () => (
  <div className="flex flex-col justify-between min-h-[600px] w-full bg-yellow-400 rounded-[3rem] border-8 border-slate-950 relative overflow-hidden font-sans italic font-black uppercase text-left">
    <div className="absolute top-12 -left-10 transform -rotate-2 bg-slate-950 text-white py-4 px-40 border-y-4 border-white font-black text-2xl whitespace-nowrap z-0 shadow-2xl">
      UNDER_CONSTRUCTION &nbsp; // &nbsp; UNDER_CONSTRUCTION &nbsp; // &nbsp; UNDER_CONSTRUCTION
    </div>
    <div className="relative z-10 p-12 md:p-20 mt-20">
      <h1 className="text-8xl md:text-9xl font-black text-slate-950 leading-[0.8] mb-12 tracking-tighter">Not <br/> Quite <br/> <span className="text-white drop-shadow-[4px_4px_0_#000]">Ready.</span></h1>
      <div className="bg-white border-8 border-slate-950 p-8 max-w-md shadow-[16px_16px_0_0_#000]">
        <p className="font-black text-xl mb-6 text-slate-950">Wanna_Sync_When_Live?</p>
        <div className="flex flex-col gap-4">
          <input type="email" placeholder="YOUR_NODE_ID" className="flex-1 p-5 border-4 border-slate-950 font-black outline-none uppercase text-slate-950 bg-slate-50" />
          <button className="p-5 bg-slate-950 text-white border-4 border-slate-950 font-black hover:bg-white hover:text-slate-950 transition-colors tracking-widest">[ EXECUTE ]</button>
        </div>
      </div>
    </div>
    <div className="p-10 border-t-8 border-slate-950 bg-white flex flex-col md:flex-row justify-between items-center gap-6">
      <span className="font-black text-xl text-slate-950">🚧 Building_In_The_Void</span>
      <div className="flex gap-8 font-black underline text-sm tracking-widest text-slate-950">
        <a href="#" className="hover:text-yellow-500">Twitter_X</a>
        <a href="#" className="hover:text-yellow-500">Discord</a>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Retro Brutalist Coming Soon -->
<div style="background: #facc15; min-height: 600px; width: 100%; border-radius: 48px; border: 8px solid #0f172a; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; font-family: sans-serif; font-style: italic; font-weight: 900; text-transform: uppercase; text-align: left;">
  <div style="position: absolute; top: 48px; left: -40px; transform: rotate(-2deg); background: #0f172a; color: white; padding: 16px 160px; border-top: 4px solid white; border-bottom: 4px solid white; font-size: 24px; white-space: nowrap; z-index: 0; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);">
    UNDER_CONSTRUCTION // UNDER_CONSTRUCTION // UNDER_CONSTRUCTION
  </div>
  <div style="position: relative; z-index: 10; padding: 80px; margin-top: 80px;">
    <h1 style="font-size: 72px; color: #0f172a; line-height: 0.8; margin-bottom: 48px; letter-spacing: -0.05em;">Not <br/> Quite <br/> <span style="color: white; text-shadow: 4px 4px 0 #000;">Ready.</span></h1>
    <div style="background: white; border: 8px solid #0f172a; padding: 32px; max-width: 448px; box-shadow: 16px 16px 0 0 #000;">
      <p style="font-size: 20px; margin-bottom: 24px; color: #0f172a;">Wanna_Sync_When_Live?</p>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <input type="email" placeholder="YOUR_NODE_ID" style="padding: 20px; border: 4px solid #0f172a; font-weight: 900; outline: none; text-transform: uppercase; color: #0f172a; background: #f8fafc;" />
        <button style="padding: 20px; background: #0f172a; color: white; border: 4px solid #0f172a; font-weight: 900; cursor: pointer; letter-spacing: 0.1em;">[ EXECUTE ]</button>
      </div>
    </div>
  </div>
  <div style="padding: 40px; border-top: 8px solid #0f172a; background: white; display: flex; justify-content: space-between; align-items: center;">
    <span style="font-size: 20px; color: #0f172a;">🚧 Building_In_The_Void</span>
    <div style="display: flex; gap: 32px; font-size: 14px; letter-spacing: 0.1em;">
      <span>Twitter_X</span>
      <span>Discord</span>
    </div>
  </div>
</div>`}
              cssCode={`.brutal-root { background: #facc15; min-height: 600px; width: 100%; border-radius: 48px; border: 8px solid #0f172a; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; font-family: 'Archivo Black', sans-serif; font-style: italic; font-weight: 900; text-transform: uppercase; text-align: left; }
.brutal-banner { position: absolute; top: 48px; left: -40px; transform: rotate(-2deg); background: #0f172a; color: white; padding: 16px 160px; border-top: 4px solid white; border-bottom: 4px solid white; font-size: 24px; white-space: nowrap; z-index: 0; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
.brutal-main { position: relative; z-index: 10; padding: 48px; margin-top: 80px; }
@media (min-width: 768px) { .brutal-main { padding: 80px; } }
.brutal-title { font-size: 48px; color: #0f172a; line-height: 0.8; margin-bottom: 48px; letter-spacing: -0.05em; }
@media (min-width: 768px) { .brutal-title { font-size: 72px; } }
.title-stroke { color: white; text-shadow: 4px 4px 0 #000; }
.brutal-form-box { background: white; border: 8px solid #0f172a; padding: 32px; max-width: 448px; box-shadow: 16px 16px 0 0 #000; transition: all 0.1s ease; }
.brutal-form-box:hover { transform: translate(4px, 4px); box-shadow: 12px 12px 0 0 #000; }
.brutal-label { font-size: 20px; margin-bottom: 24px; color: #0f172a; }
.brutal-input { padding: 20px; border: 4px solid #0f172a; font-weight: 900; outline: none; text-transform: uppercase; color: #0f172a; background: #f8fafc; width: 100%; box-sizing: border-box; }
.brutal-btn { padding: 20px; background: #0f172a; color: white; border: 4px solid #0f172a; font-weight: 900; cursor: pointer; letter-spacing: 0.1em; transition: all 0.2s ease; width: 100%; }
.brutal-btn:hover { background: white; color: #0f172a; }
.brutal-footer { padding: 40px; border-top: 8px solid #0f172a; background: white; display: flex; flex-direction: column; gap: 24px; align-items: center; }
@media (min-width: 768px) { .brutal-footer { flex-direction: row; justify-content: space-between; } }
.footer-tag { font-size: 20px; color: #0f172a; }
.footer-links { display: flex; gap: 32px; font-size: 14px; letter-spacing: 0.1em; }
.brutal-link { text-decoration: underline; color: #0f172a; cursor: pointer; }
.brutal-link:hover { color: #2563eb; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">07. Retro Brutalist Construct</span>
           <ComingBrutalist />
        </section>

        {/* 08. Neumorphic Soft */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const ComingNeumorphic = () => (
  <div className="flex items-center justify-center min-h-[600px] w-full bg-[#e0e5ec] rounded-[3rem] font-sans italic font-bold">
    <div className="w-full max-w-xl p-16 md:p-20 rounded-[4rem] bg-[#e0e5ec] shadow-[30px_30px_60px_#bebebe,-30px_-30px_60px_#ffffff] text-center border border-white/20 text-left">
      <div className="w-28 h-28 rounded-full bg-[#e0e5ec] shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] flex items-center justify-center text-4xl mb-12 mx-auto border-4 border-white/50 text-center">⌛</div>
      <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 uppercase tracking-tighter leading-none text-center">Logic_Pending</h2>
      <p className="text-slate-500 mb-12 lowercase font-medium text-lg italic text-center">We are optimizing nodes for a flawless synchronization.</p>
      <div className="flex flex-col gap-8 max-w-sm mx-auto">
        <div className="rounded-2xl bg-[#e0e5ec] p-1 shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] border border-white/10">
          <input type="email" placeholder="Enter_Email_Protocol" className="w-full bg-transparent border-none outline-none text-slate-700 placeholder-slate-400 px-8 py-5 text-center font-black uppercase text-xs" />
        </div>
        <button className="w-full py-5 rounded-2xl bg-[#e0e5ec] text-blue-600 font-black shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] active:scale-95 transition-all uppercase text-xs tracking-widest border border-white/20">Sync_Me_Later</button>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Neumorphic Coming Soon -->
<div style="background: #e0e5ec; min-height: 600px; width: 100%; border-radius: 48px; display: flex; align-items: center; justify-content: center; font-family: sans-serif; font-style: italic; font-weight: 700; text-align: center;">
  <div style="width: 100%; max-width: 576px; padding: 80px; border-radius: 64px; background: #e0e5ec; box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; border: 1px solid rgba(255,255,255,0.2);">
    <div style="width: 112px; height: 112px; border-radius: 50%; background: #e0e5ec; box-shadow: inset 10px 10px 20px #bebebe, inset -10px -10px 20px #ffffff; display: flex; align-items: center; justify-content: center; font-size: 36px; margin: 0 auto 48px auto; border: 4px solid rgba(255,255,255,0.5);">⌛</div>
    <h2 style="font-size: 48px; font-weight: 900; color: #1e293b; margin-bottom: 24px; text-transform: uppercase; letter-spacing: -0.05em;">Logic_Pending</h2>
    <p style="color: #64748b; margin-bottom: 48px; font-size: 18px; font-weight: 500; text-transform: lowercase;">We are optimizing nodes for a flawless synchronization.</p>
    <div style="display: flex; flex-direction: column; gap: 32px; max-width: 384px; margin: 0 auto;">
      <div style="border-radius: 16px; background: #e0e5ec; padding: 4px; box-shadow: inset 8px 8px 16px #bebebe, inset -8px -8px 16px #ffffff; border: 1px solid rgba(255,255,255,0.1);">
        <input type="email" placeholder="Enter_Email_Protocol" style="width: 100%; background: transparent; border: none; outline: none; color: #374151; padding: 20px; text-align: center; font-weight: 900; text-transform: uppercase; font-size: 12px;" />
      </div>
      <button style="width: 100%; padding: 20px; border-radius: 16px; background: #e0e5ec; color: #2563eb; font-weight: 900; text-transform: uppercase; font-size: 12px; border: 1px solid rgba(255,255,255,0.2); cursor: pointer; box-shadow: 10px 10px 20px #bebebe, -10px -10px 20px #ffffff; letter-spacing: 0.1em;">Sync_Me_Later</button>
    </div>
  </div>
</div>`}
              cssCode={`.neu-root { background: #e0e5ec; min-height: 600px; width: 100%; border-radius: 48px; display: flex; align-items: center; justify-content: center; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; text-align: center; }
.neu-card { width: 100%; max-width: 576px; padding: 48px; border-radius: 64px; background: #e0e5ec; box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; border: 1px solid rgba(255,255,255,0.2); }
@media (min-width: 768px) { .neu-card { padding: 80px; } }
.neu-icon-wrap { width: 112px; height: 112px; border-radius: 50%; background: #e0e5ec; box-shadow: inset 10px 10px 20px #bebebe, inset -10px -10px 20px #ffffff; display: flex; align-items: center; justify-content: center; font-size: 36px; margin: 0 auto 48px auto; border: 4px solid rgba(255,255,255,0.5); }
.neu-title { font-size: 36px; font-weight: 900; color: #1e293b; margin-bottom: 24px; text-transform: uppercase; letter-spacing: -0.05em; }
@media (min-width: 768px) { .neu-title { font-size: 48px; } }
.neu-subtitle { color: #64748b; margin-bottom: 48px; font-size: 18px; font-weight: 500; text-transform: lowercase; }
.neu-form-wrap { display: flex; flex-direction: column; gap: 32px; max-width: 384px; margin: 0 auto; }
.neu-input-box { border-radius: 16px; background: #e0e5ec; padding: 4px; box-shadow: inset 8px 8px 16px #bebebe, inset -8px -8px 16px #ffffff; border: 1px solid rgba(255,255,255,0.1); }
.neu-input { width: 100%; background: transparent; border: none; outline: none; color: #374151; padding: 20px; text-align: center; font-weight: 900; text-transform: uppercase; font-size: 12px; }
.neu-input::placeholder { color: #94a3b8; }
.neu-submit-btn { width: 100%; padding: 20px; border-radius: 16px; background: #e0e5ec; color: #2563eb; font-weight: 900; text-transform: uppercase; font-size: 12px; border: 1px solid rgba(255,255,255,0.2); cursor: pointer; box-shadow: 10px 10px 20px #bebebe, -10px -10px 20px #ffffff; letter-spacing: 0.1em; transition: all 0.2s ease; }
.neu-submit-btn:hover { transform: translateY(-2px); box-shadow: 15px 15px 25px #bebebe, -15px -15px 25px #ffffff; }
.neu-submit-btn:active { transform: scale(0.98); box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">08. Neumorphic Soft Protocol</span>
           <ComingNeumorphic />
        </section>

        {/* 09. Mobile Focus */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const ComingApp = () => (
  <div className="flex flex-col md:flex-row min-h-[600px] w-full bg-blue-600 rounded-[3rem] overflow-hidden px-12 md:px-24 pt-24 font-sans italic font-bold text-white relative text-left">
    <div className="w-full md:w-1/2 flex flex-col justify-center pb-24 relative z-10">
      <span className="text-white/60 font-black tracking-[0.4em] uppercase mb-8 text-[10px]">Matrix_Core // Mobile_V1</span>
      <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.85]">The_Future <br/> Of_Logic <br/> <span className="text-blue-200">On_Mobile.</span></h1>
      <p className="text-blue-100 text-xl mb-12 max-w-md lowercase font-medium">A new dimension of social orchestration. Real nodes, real signal.</p>
      <form className="bg-white/10 backdrop-blur-3xl p-2 rounded-2xl border-2 border-white/20 flex max-w-md shadow-2xl">
        <input type="email" placeholder="Sync_Email_ID" className="flex-1 px-6 bg-transparent outline-none text-white placeholder-white/40 font-black uppercase text-xs" />
        <button className="bg-white text-blue-600 px-10 py-5 rounded-xl font-black hover:bg-blue-50 transition-all uppercase text-xs tracking-widest">Join</button>
      </form>
    </div>
    <div className="hidden md:flex w-1/2 justify-center items-end relative z-10">
       <div className="w-[320px] h-[550px] bg-slate-900 rounded-t-[4rem] border-x-8 border-t-8 border-white/20 shadow-2xl relative overflow-hidden">
          <div className="w-full h-full bg-blue-600 flex flex-col items-center justify-center p-12 text-center">
            <div className="w-20 h-20 bg-white rounded-3xl mb-8 rotate-12 shadow-2xl"></div>
            <div className="font-black text-white text-3xl uppercase tracking-tighter">Logic_App</div>
            <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-md flex items-center justify-center p-8">
               <div className="bg-white text-blue-600 px-8 py-4 rounded-2xl shadow-2xl font-black uppercase text-xs tracking-widest border-2 border-blue-50 rotate-[-4deg]">Coming_Soon</div>
            </div>
          </div>
       </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Mobile Focus Coming Soon -->
<div style="background: #2563eb; min-height: 600px; width: 100%; border-radius: 48px; padding: 48px 80px 0 80px; display: flex; overflow: hidden; font-family: sans-serif; font-style: italic; font-weight: 700; color: white; text-align: left; position: relative;">
  <div style="width: 50%; display: flex; flex-direction: column; justify-content: center; padding-bottom: 80px; position: relative; z-index: 10;">
    <div style="color: rgba(255,255,255,0.6); font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 32px;">Matrix_Core // Mobile_V1</div>
    <h1 style="font-size: 72px; font-weight: 900; margin-bottom: 32px; letter-spacing: -0.05em; text-transform: uppercase; line-height: 0.85;">The_Future <br/> Of_Logic <br/> <span style="color: #bfdbfe;">On_Mobile.</span></h1>
    <p style="color: #dbeafe; font-size: 20px; margin-bottom: 48px; text-transform: lowercase; font-weight: 500;">A new dimension of social orchestration. Real nodes, real signal.</p>
    <div style="background: rgba(255,255,255,0.1); border-radius: 16px; border: 2px solid rgba(255,255,255,0.2); padding: 8px; display: flex; max-width: 448px; backdrop-filter: blur(40px);">
      <input type="email" placeholder="Sync_Email_ID" style="flex: 1; padding: 0 24px; background: transparent; border: none; outline: none; color: white; font-weight: 900; text-transform: uppercase; font-size: 12px;" />
      <button style="background: white; color: #2563eb; padding: 20px 40px; border-radius: 12px; border: none; font-weight: 900; text-transform: uppercase; font-size: 12px; cursor: pointer; letter-spacing: 0.1em;">Join</button>
    </div>
  </div>
  <div style="width: 50%; display: flex; align-items: flex-end; justify-content: center; position: relative; z-index: 10;">
    <div style="width: 300px; height: 500px; background: #0f172a; border-radius: 64px 64px 0 0; border: 8px solid rgba(255,255,255,0.2); position: relative; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);">
      <div style="width: 100%; height: 100%; background: #2563eb; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 48px; text-align: center;">
        <div style="width: 80px; height: 80px; background: white; border-radius: 24px; margin-bottom: 32px; transform: rotate(12deg); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.3);"></div>
        <div style="font-weight: 900; font-size: 24px; text-transform: uppercase; letter-spacing: -0.05em;">Logic_App</div>
        <div style="position: absolute; inset: 0; background: rgba(15,23,42,0.1); backdrop-filter: blur(12px); display: flex; align-items: center; justify-content: center;">
           <div style="background: white; color: #2563eb; padding: 16px 32px; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 12px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.2); transform: rotate(-4deg); border: 2px solid #eff6ff;">Coming_Soon</div>
        </div>
      </div>
    </div>
  </div>
</div>`}
              cssCode={`.mobile-root { background: #2563eb; min-height: 600px; width: 100%; border-radius: 48px; padding: 48px 48px 0 48px; display: flex; flex-direction: column; overflow: hidden; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; color: white; text-align: left; position: relative; }
@media (min-width: 768px) { .mobile-root { flex-direction: row; padding: 48px 80px 0 80px; } }
.mobile-content { width: 100%; display: flex; flex-direction: column; justify-content: center; padding-bottom: 48px; position: relative; z-index: 10; }
@media (min-width: 768px) { .mobile-content { width: 50%; padding-bottom: 80px; } }
.mobile-tag { color: rgba(255,255,255,0.6); font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 32px; }
.mobile-title { font-size: 48px; font-weight: 900; margin-bottom: 32px; letter-spacing: -0.05em; text-transform: uppercase; line-height: 0.85; }
@media (min-width: 768px) { .mobile-title { font-size: 72px; } }
.mobile-highlight { color: #bfdbfe; }
.mobile-subtitle { color: #dbeafe; font-size: 20px; margin-bottom: 48px; text-transform: lowercase; font-weight: 500; }
.mobile-form { background: rgba(255,255,255,0.1); border-radius: 16px; border: 2px solid rgba(255,255,255,0.2); padding: 8px; display: flex; max-width: 448px; backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px); }
.mobile-input { flex: 1; padding: 0 24px; background: transparent; border: none; outline: none; color: white; font-weight: 900; text-transform: uppercase; font-size: 12px; }
.mobile-btn { background: white; color: #2563eb; padding: 20px 32px; border-radius: 12px; border: none; font-weight: 900; text-transform: uppercase; font-size: 12px; cursor: pointer; letter-spacing: 0.1em; transition: all 0.3s ease; }
@media (min-width: 768px) { .mobile-btn { padding: 20px 40px; } }
.mobile-btn:hover { background: #0f172a; color: white; }
.mobile-visual { width: 50%; display: none; align-items: flex-end; justify-content: center; position: relative; z-index: 10; }
@media (min-width: 768px) { .mobile-visual { display: flex; } }
.phone-mockup { width: 300px; height: 500px; background: #0f172a; border-radius: 64px 64px 0 0; border: 8px solid rgba(255,255,255,0.2); position: relative; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
.app-screen { width: 100%; height: 100%; background: #2563eb; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 48px; text-align: center; }
.app-icon { width: 80px; height: 80px; background: white; border-radius: 24px; margin-bottom: 32px; transform: rotate(12deg); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.3); }
.app-name { font-weight: 900; font-size: 24px; text-transform: uppercase; letter-spacing: -0.05em; }
.coming-overlay { position: absolute; inset: 0; background: rgba(15,23,42,0.1); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); display: flex; align-items: center; justify-content: center; }
.coming-badge { background: white; color: #2563eb; padding: 16px 32px; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 12px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.2); transform: rotate(-4deg); border: 2px solid #eff6ff; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">09. Mobile Node Expansion</span>
           <ComingApp />
        </section>

        {/* 10. Countdown Event */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const ComingCountdown = () => (
  <div className="flex flex-col items-center justify-center min-h-[600px] w-full bg-slate-950 text-white rounded-[3rem] border-2 border-white/5 relative overflow-hidden font-sans italic font-bold">
    <div className="text-center z-10 p-8">
      <p className="text-blue-500 font-black uppercase tracking-[0.5em] mb-8 text-[10px]">Global_Sync_Protocol_V1</p>
      <h1 className="text-6xl md:text-9xl font-black mb-16 uppercase tracking-tighter leading-[0.85]">Evolution <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Launch_Event</span></h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20 max-w-4xl mx-auto">
        <div>
          <div className="text-6xl md:text-8xl font-black mb-2 tracking-tighter tabular-nums">12</div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-blue-500 text-center">Days</div>
        </div>
        <div>
          <div className="text-6xl md:text-8xl font-black mb-2 tracking-tighter tabular-nums">18</div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-blue-500 text-center">Hours</div>
        </div>
        <div>
          <div className="text-6xl md:text-8xl font-black mb-2 tracking-tighter tabular-nums">45</div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-blue-500 text-center">Mins</div>
        </div>
        <div>
          <div className="text-6xl md:text-8xl font-black mb-2 tracking-tighter tabular-nums">22</div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-blue-500 text-center">Secs</div>
        </div>
      </div>
      <div className="max-w-md mx-auto relative group">
        <button className="relative w-full py-6 bg-white text-slate-950 font-black rounded-full hover:bg-blue-600 hover:text-white transition-all uppercase text-xs tracking-[0.2em] shadow-2xl">Request_Stream_Access</button>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Countdown Event Coming Soon -->
<div style="background: #020617; min-height: 600px; width: 100%; border-radius: 48px; border: 2px solid rgba(255,255,255,0.05); position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; font-family: sans-serif; font-style: italic; font-weight: 700; color: white; text-align: center;">
  <div style="position: relative; z-index: 10; padding: 48px;">
    <p style="color: #3b82f6; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; margin-bottom: 32px; font-size: 10px;">Global_Sync_Protocol_V1</p>
    <h1 style="font-size: 72px; font-weight: 900; margin-bottom: 64px; text-transform: uppercase; letter-spacing: -0.05em; line-height: 0.85;">Evolution <br/> <span style="opacity: 0.4;">Launch_Event</span></h1>
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 48px; margin-bottom: 80px; max-width: 896px; margin-left: auto; margin-right: auto;">
      <div>
        <div style="font-size: 72px; font-weight: 900; margin-bottom: 8px;">12</div>
        <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.4em; color: #3b82f6;">Days</div>
      </div>
      <div>
        <div style="font-size: 72px; font-weight: 900; margin-bottom: 8px;">18</div>
        <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.4em; color: #3b82f6;">Hours</div>
      </div>
      <div>
        <div style="font-size: 72px; font-weight: 900; margin-bottom: 8px;">45</div>
        <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.4em; color: #3b82f6;">Mins</div>
      </div>
      <div>
        <div style="font-size: 72px; font-weight: 900; margin-bottom: 8px;">22</div>
        <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.4em; color: #3b82f6;">Secs</div>
      </div>
    </div>
    <div style="max-width: 448px; margin: 0 auto;">
      <button style="width: 100%; padding: 24px; background: white; color: #020617; border-radius: 999px; border: none; font-weight: 900; text-transform: uppercase; font-size: 12px; cursor: pointer; letter-spacing: 0.2em; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);">Request_Stream_Access</button>
    </div>
  </div>
</div>`}
              cssCode={`.event-root { background: #020617; min-height: 600px; width: 100%; border-radius: 48px; border: 2px solid rgba(255,255,255,0.05); position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; color: white; text-align: center; }
.event-glow { position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, rgba(37,99,235,0.1), transparent 70%); pointer-events: none; }
.event-content { position: relative; z-index: 10; padding: 48px; }
.event-tag { color: #3b82f6; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; margin-bottom: 32px; font-size: 10px; }
.event-title { font-size: 48px; font-weight: 900; margin-bottom: 64px; text-transform: uppercase; letter-spacing: -0.05em; line-height: 0.85; }
@media (min-width: 768px) { .event-title { font-size: 72px; } }
.title-fade { opacity: 0.4; }
.countdown-grid-large { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; margin-bottom: 80px; max-width: 896px; margin-left: auto; margin-right: auto; }
@media (min-width: 768px) { .countdown-grid-large { grid-template-columns: repeat(4, 1fr); gap: 48px; } }
.timer-num { font-size: 48px; font-weight: 900; margin-bottom: 8px; font-variant-numeric: tabular-nums; }
@media (min-width: 768px) { .timer-num { font-size: 72px; } }
.timer-unit { font-size: 10px; text-transform: uppercase; letter-spacing: 0.4em; color: #3b82f6; }
.event-btn-wrap { max-width: 448px; margin: 0 auto; position: relative; }
.event-btn { width: 100%; padding: 24px; background: white; color: #020617; border-radius: 999px; border: none; font-weight: 900; text-transform: uppercase; font-size: 12px; cursor: pointer; letter-spacing: 0.2em; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); transition: all 0.3s ease; }
.event-btn:hover { background: #3b82f6; color: white; transform: translateY(-4px); box-shadow: 0 0 30px rgba(59,130,246,0.6); }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">10. Launch Event Matrix</span>
           <ComingCountdown />
        </section>

      </div>
    </div>
  );
};

export default ComingSoonGallery;