import React, { useState } from 'react';
import CopyButton from '../CopyButton';

// --- Shared Assets ---
const TEAM_MEMBERS = [
  { id: '01', name: "Sarah Cole", role: "CEO & Founder", bio: "Leading the architectural vision of the digital matrix.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
  { id: '02', name: "David Park", role: "Head of Design", bio: "Crafting high-fidelity aesthetics for modern nodes.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
  { id: '03', name: "Emily Chen", role: "Lead Engineer", bio: "Architecting zero-latency protocol sequences.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop" },
  { id: '04', name: "Michael Ross", role: "Product Manager", bio: "Synchronizing team logic for global scale.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
];

const SocialIcon = ({ className }) => (
  <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
);

// --- 1. Bold Brutalist (The Squad) ---
export const TeamBrutalist = () => (
  <div className="bg-yellow-400 p-12 rounded-[3rem] border-[8px] border-slate-950 font-sans italic font-black uppercase text-center overflow-hidden">
    <div className="mb-20">
      <h2 className="text-7xl md:text-9xl font-black text-slate-950 tracking-tighter leading-[0.8] mb-6">THE_ <br/> SQUAD</h2>
      <div className="h-4 w-40 bg-slate-950 mx-auto rounded-full"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
      {TEAM_MEMBERS.map((member) => (
        <div key={member.id} className="group relative bg-white border-[6px] border-slate-950 p-6 shadow-[16px_16px_0_0_#000] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all duration-300">
           <div className="aspect-square border-[6px] border-slate-950 mb-6 overflow-hidden bg-slate-100">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover filter contrast-125 grayscale group-hover:grayscale-0 transition-all duration-500" />
           </div>
           <h3 className="text-2xl font-black text-slate-950 mb-2 leading-none">{member.name}</h3>
           <p className="text-xs font-black bg-blue-600 text-white inline-block px-3 py-1 mb-4 italic tracking-widest">{member.role}</p>
           <div className="flex justify-center gap-4 opacity-40 group-hover:opacity-100 transition-opacity">
              <SocialIcon className="w-5 h-5 text-slate-950" />
              <SocialIcon className="w-5 h-5 text-slate-950" />
           </div>
        </div>
      ))}
    </div>
  </div>
);

// --- 2. Modern Bento Grid (Matrix) ---
export const TeamBento = () => (
  <div className="bg-slate-50 p-12 rounded-[3rem] font-sans italic font-bold">
    <div className="text-left mb-20">
      <div className="text-[10px] text-blue-600 font-black uppercase tracking-[0.5em] mb-4 italic">// Global_Team_Matrix</div>
      <h2 className="text-6xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-6">Architects_</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {/* CEO Big Card */}
      <div className="md:col-span-2 md:row-span-2 bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl group relative h-[500px]">
        <img src={TEAM_MEMBERS[0].img} alt={TEAM_MEMBERS[0].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex flex-col justify-end p-10 text-white">
           <h3 className="text-4xl font-black uppercase mb-2">{TEAM_MEMBERS[0].name}</h3>
           <p className="text-blue-400 font-black text-xs uppercase tracking-widest mb-4 italic">{TEAM_MEMBERS[0].role}</p>
           <p className="text-white/60 text-sm max-w-xs lowercase font-medium italic">{TEAM_MEMBERS[0].bio}</p>
        </div>
      </div>
      {/* Other Members */}
      {TEAM_MEMBERS.slice(1).map((member) => (
        <div key={member.id} className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl group hover:bg-slate-950 transition-all duration-500 flex flex-col items-center text-center justify-center min-h-[240px]">
           <div className="w-20 h-20 rounded-2xl overflow-hidden mb-6 border-2 border-slate-100 group-hover:border-blue-600 transition-colors">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
           </div>
           <h3 className="text-xl font-black text-slate-950 group-hover:text-white uppercase mb-1">{member.name}</h3>
           <p className="text-xs text-blue-600 font-black uppercase tracking-widest italic">{member.role}</p>
        </div>
      ))}
      {/* Stats Card */}
      <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white flex flex-col items-center justify-center text-center shadow-2xl">
         <div className="text-5xl font-black mb-2 tracking-tighter italic">24/7_</div>
         <p className="text-[10px] uppercase font-black tracking-widest opacity-60">Uptime_Support</p>
      </div>
    </div>
  </div>
);

// --- 3. Glassmorphic Core (Evolution) ---
export const TeamGlass = () => (
  <div className="relative bg-slate-950 p-20 rounded-[3rem] overflow-hidden min-h-[600px] flex items-center font-sans italic font-bold">
    <div className="absolute top-0 right-[-10%] w-[40rem] h-[40rem] bg-indigo-600 rounded-full mix-blend-screen filter blur-[140px] opacity-20 animate-pulse"></div>
    <div className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-600 rounded-full mix-blend-screen filter blur-[140px] opacity-20 animate-pulse delay-1000"></div>
    <div className="relative z-10 w-full">
      <div className="text-center mb-24">
        <h2 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-none drop-shadow-2xl italic">Protocol_Lead</h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {TEAM_MEMBERS.map((member) => (
          <div key={member.id} className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:bg-white/10 group text-center">
            <div className="w-24 h-24 mx-auto rounded-full p-1 border-2 border-white/20 mb-6 group-hover:border-blue-500 transition-colors relative">
               <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full" />
               <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-slate-950 flex items-center justify-center animate-ping opacity-75"></div>
               <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-slate-950 flex items-center justify-center"></div>
            </div>
            <h3 className="text-white text-2xl font-black uppercase mb-1 tracking-tight">{member.name}</h3>
            <p className="text-blue-400 text-[10px] uppercase font-black tracking-widest italic mb-6">{member.role}</p>
            <div className="flex justify-center gap-3">
               <div className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"><SocialIcon className="w-4 h-4 text-white" /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 4. Cyberpunk Manifest (Nodes) ---
export const TeamCyber = () => (
  <div className="bg-black p-12 rounded-[3rem] border border-white/5 font-mono italic font-bold relative overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
    <div className="relative z-10">
       <div className="flex justify-between items-end mb-20 border-b border-white/10 pb-10">
          <h2 className="text-5xl md:text-7xl font-black text-emerald-500 tracking-tighter uppercase leading-none italic underline decoration-wavy decoration-emerald-900/50">Node_Manifest</h2>
          <div className="text-right hidden md:block">
             <div className="text-[10px] text-white/40 uppercase tracking-[0.5em] mb-1">Authorization_Level</div>
             <div className="text-emerald-500/50 font-black text-xs uppercase italic">Root_Access_Granted</div>
          </div>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="bg-white/[0.02] border border-white/5 p-1 relative group hover:border-emerald-500 transition-colors duration-500">
               <div className="relative h-72 overflow-hidden bg-slate-900 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               </div>
               <div className="p-6">
                  <h3 className="text-white text-xl font-black uppercase mb-1 tracking-widest">{member.name}</h3>
                  <p className="text-emerald-500 text-[10px] uppercase font-black italic tracking-[0.2em]">{member.role}</p>
               </div>
               {/* Glitch Corners */}
               <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-emerald-500 opacity-0 group-hover:opacity-100"></div>
               <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-emerald-500 opacity-0 group-hover:opacity-100"></div>
            </div>
          ))}
       </div>
    </div>
  </div>
);

// --- 5. Interactive Flip (High-Fidelity) ---
export const TeamFlip = () => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 font-sans italic font-bold">
    <div className="text-center mb-24">
      <h2 className="text-6xl md:text-8xl font-black text-slate-950 mb-6 tracking-tighter uppercase leading-none italic">Core_Architects</h2>
      <p className="text-slate-500 text-xl lowercase font-medium">Flip nodes to reveal structural logic.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
      {TEAM_MEMBERS.map((member) => (
        <div key={member.id} className="group [perspective:1000px] h-[450px]">
          <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
            {/* Front */}
            <div className="absolute inset-0 bg-slate-50 rounded-[2.5rem] border-2 border-slate-100 overflow-hidden shadow-xl [backface-visibility:hidden]">
               <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
               <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-950/80 to-transparent text-white">
                  <h3 className="text-2xl font-black uppercase mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-[10px] uppercase font-black italic">{member.role}</p>
               </div>
            </div>
            {/* Back */}
            <div className="absolute inset-0 h-full w-full rounded-[2.5rem] bg-slate-950 text-white p-10 flex flex-col justify-center items-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] border-4 border-blue-600">
               <h3 className="text-3xl font-black uppercase mb-4 text-blue-500 italic">{member.name}</h3>
               <p className="text-white/60 text-sm leading-relaxed lowercase mb-10 font-medium italic">"{member.bio}"</p>
               <div className="flex gap-4">
                  <button className="px-6 py-3 bg-white text-slate-950 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">Profile_</button>
               </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- 6. Minimalist Lineage (Structural) ---
export const TeamMinimal = () => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 font-sans italic font-bold">
    <div className="max-w-4xl mx-auto">
       <div className="grid grid-cols-1 gap-12">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="flex flex-col md:flex-row items-center gap-12 group p-8 hover:bg-slate-50 rounded-3xl transition-colors duration-500">
               <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-blue-600 rounded-full translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl relative z-10" />
               </div>
               <div className="flex-1 text-center md:text-left">
                  <div className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-2">Protocol_Node_0{member.id}</div>
                  <h3 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter mb-4 leading-none">{member.name}</h3>
                  <p className="text-slate-500 text-lg lowercase font-medium mb-6">{member.role} — {member.bio}</p>
                  <div className="flex justify-center md:justify-start gap-8 border-t border-slate-100 pt-6">
                     <div className="text-[10px] font-black uppercase text-slate-950 hover:text-blue-600 cursor-pointer transition-colors tracking-widest italic flex items-center gap-2">
                        <SocialIcon className="w-4 h-4" /> Twitter_
                     </div>
                     <div className="text-[10px] font-black uppercase text-slate-950 hover:text-blue-600 cursor-pointer transition-colors tracking-widest italic flex items-center gap-2">
                        <SocialIcon className="w-4 h-4" /> LinkedIn_
                     </div>
                  </div>
               </div>
            </div>
          ))}
       </div>
    </div>
  </div>
);

// --- 7. Neumorphic Depth (Tactile) ---
export const TeamNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-16 rounded-[3rem] font-sans italic font-bold">
    <div className="text-center mb-24">
      <h2 className="text-6xl md:text-8xl font-black text-slate-700 uppercase tracking-tighter leading-none italic mb-4">Tactile_Team</h2>
      <p className="text-slate-500 text-xl lowercase font-medium italic">Soft architecture, high-fidelity nodes.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
      {TEAM_MEMBERS.map((member) => (
        <div key={member.id} className="bg-[#e0e5ec] p-10 rounded-[3rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-4 border border-white/20">
          <div className="w-32 h-32 bg-[#e0e5ec] rounded-full shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] mb-10 flex items-center justify-center border-4 border-white/50 overflow-hidden">
             <img src={member.img} alt={member.name} className="w-full h-full object-cover p-2 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" />
          </div>
          <h3 className="text-2xl font-black text-slate-700 mb-2 uppercase tracking-tight italic">{member.name}</h3>
          <p className="text-slate-500 text-xs uppercase font-black tracking-widest mb-10">{member.role}</p>
          <div className="flex gap-4">
             <div className="w-12 h-12 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors cursor-pointer active:shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
                <SocialIcon className="w-5 h-5" />
             </div>
             <div className="w-12 h-12 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors cursor-pointer active:shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
                <SocialIcon className="w-5 h-5" />
             </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- 8. Circular Mesh (Floating Nodes) ---
export const TeamMesh = () => (
  <div className="bg-slate-900 p-20 rounded-[3rem] font-sans italic font-bold relative overflow-hidden text-center min-h-[700px] flex items-center">
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    <div className="relative z-10 w-full max-w-5xl mx-auto">
       <h2 className="text-6xl md:text-8xl font-black text-white mb-24 tracking-tighter uppercase leading-none italic opacity-20">Global_Nodes</h2>
       <div className="flex flex-wrap justify-center gap-16 md:gap-32">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={member.id} className={`flex flex-col items-center group transition-all duration-500 ${i%2===0 ? 'translate-y-12' : '-translate-y-12'}`}>
               <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-slate-800 border-4 border-slate-700 relative mb-8 group-hover:border-blue-600 transition-all duration-500 shadow-2xl overflow-hidden animate-bounce" style={{animationDuration: `${3 + i}s`}}>
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
               </div>
               <h3 className="text-white text-xl font-black uppercase mb-1 tracking-tight">{member.name}</h3>
               <p className="text-blue-500 text-[10px] uppercase font-black tracking-widest italic">{member.role}</p>
            </div>
          ))}
       </div>
    </div>
  </div>
);

// --- 9. Terminal Log (Dev Core) ---
export const TeamLog = () => (
  <div className="bg-[#0a0a0a] p-12 rounded-[3rem] border-2 border-white/5 font-mono italic font-bold text-left overflow-hidden relative shadow-2xl">
    <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-8">
       <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
       </div>
       <div className="text-[10px] text-white/20 uppercase tracking-[0.5em] italic">GET_CORE_TEAM.sh</div>
    </div>
    <div className="space-y-10">
       {TEAM_MEMBERS.map((member) => (
          <div key={member.id} className="group border-l-2 border-white/5 hover:border-blue-600 pl-10 py-4 transition-all duration-500">
             <div className="flex items-center gap-6 mb-4">
                <div className="text-blue-500 text-xs font-black uppercase tracking-widest">>> [NODE_{member.id}]</div>
                <div className="h-px flex-1 bg-white/5"></div>
             </div>
             <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                <div className="w-24 h-24 flex-shrink-0 bg-slate-900 border border-white/10 rounded-xl overflow-hidden p-1 shadow-2xl">
                   <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-lg filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="flex-1">
                   <h3 className="text-white text-3xl font-black uppercase mb-2 leading-none">{member.name}</h3>
                   <div className="flex gap-4 items-center mb-4">
                      <span className="text-blue-400 text-xs uppercase font-black tracking-widest">{member.role}</span>
                      <span className="text-white/20 text-[10px] uppercase font-black">Status: <span className="text-emerald-500">Active</span></span>
                   </div>
                   <p className="text-white/40 text-sm max-w-2xl lowercase italic font-medium leading-relaxed group-hover:text-white/60 transition-colors">" {member.bio} "</p>
                </div>
             </div>
          </div>
       ))}
    </div>
  </div>
);

// --- 10. Magazine Style (Editorial) ---
export const TeamEditorial = () => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 font-sans italic font-bold">
    <div className="max-w-7xl mx-auto">
       <div className="text-center mb-32 border-b-2 border-slate-950 pb-20">
          <h2 className="text-8xl md:text-[12rem] font-black text-slate-950 tracking-tighter uppercase leading-[0.8] mb-10 italic">LEAD_ <br/> ROLE.</h2>
          <p className="text-slate-500 text-2xl lowercase font-medium max-w-2xl mx-auto italic">Defining the next generation of creative digital architecture through structural logic and high-fidelity aesthetics.</p>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={member.id} className={`group flex flex-col ${i%2!==0 ? 'md:translate-y-32' : ''}`}>
               <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden mb-12 shadow-2xl group-hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] transition-all duration-700">
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-700"></div>
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute top-10 left-10 text-white z-10 text-9xl font-black opacity-10 tracking-tighter leading-none">{member.id}</div>
               </div>
               <div className="border-l-4 border-slate-950 pl-10">
                  <h3 className="text-5xl font-black text-slate-950 uppercase tracking-tighter mb-4 italic leading-none">{member.name}</h3>
                  <p className="text-blue-600 text-xs font-black uppercase tracking-[0.4em] mb-6 italic underline underline-offset-8 decoration-2">{member.role}</p>
                  <p className="text-slate-500 text-lg lowercase leading-relaxed font-medium italic max-w-sm mb-10">{member.bio}</p>
                  <div className="flex gap-6">
                     <button className="bg-slate-950 text-white px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl">Biography_</button>
                  </div>
               </div>
            </div>
          ))}
       </div>
       <div className="mt-64 text-center">
          <div className="inline-block border-2 border-slate-950 p-10 rotate-3 hover:rotate-0 transition-transform cursor-pointer group">
             <h2 className="text-4xl font-black uppercase italic tracking-tighter group-hover:text-blue-600 transition-colors">Join_The_Node_ →</h2>
          </div>
       </div>
    </div>
  </div>
);

// --- Main Gallery Wrapper ---
const TeamGallery = () => {
  return (
    <div className="container overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-64">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-6xl font-black text-slate-950 mb-6 tracking-tighter uppercase italic leading-none">Team_Manifest</h1>
        <p className="text-slate-500 font-bold text-xl italic lowercase">High-fidelity components to showcase the minds behind the grid.</p>
      </div>
      
      <div className="space-y-32 max-w-7xl mx-auto">
        
        {/* 01. Bold Brutalist */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/team border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/team:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const TeamBrutalist = () => (
  <div className="bg-yellow-400 p-12 rounded-[3rem] border-[8px] border-slate-950 font-sans italic font-black uppercase text-center overflow-hidden">
    <div className="mb-20">
      <h2 className="text-7xl md:text-9xl font-black text-slate-950 tracking-tighter leading-[0.8] mb-6">THE_ <br/> SQUAD</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
      {[
        { name: "Sarah Cole", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" },
        { name: "David Park", role: "Head of Design", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" },
        { name: "Emily Chen", role: "Lead Engineer", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" },
        { name: "Michael Ross", role: "Product Manager", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" }
      ].map((member, i) => (
        <div key={i} className="group relative bg-white border-[6px] border-slate-950 p-6 shadow-[16px_16px_0_0_#000] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all duration-300">
           <div className="aspect-square border-[6px] border-slate-950 mb-6 overflow-hidden">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
           </div>
           <h3 className="text-2xl font-black text-slate-950 mb-2 leading-none">{member.name}</h3>
           <p className="text-xs font-black bg-blue-600 text-white inline-block px-3 py-1 mb-4 italic tracking-widest">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
);`} 
              htmlCode={`<!-- Brutalist Team Section -->
<div class="team-brutal-root">
  <div class="header-box">
    <h2 class="title-big">THE_ <br/> SQUAD</h2>
  </div>
  <div class="team-grid">
    <div class="team-card">
       <div class="img-box">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" alt="Sarah Cole">
       </div>
       <h3 class="card-name">Sarah Cole</h3>
       <p class="card-role">CEO & Founder</p>
    </div>
    <div class="team-card">
       <div class="img-box">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" alt="David Park">
       </div>
       <h3 class="card-name">David Park</h3>
       <p class="card-role">Head of Design</p>
    </div>
    <div class="team-card">
       <div class="img-box">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" alt="Emily Chen">
       </div>
       <h3 class="card-name">Emily Chen</h3>
       <p class="card-role">Lead Engineer</p>
    </div>
    <div class="team-card">
       <div class="img-box">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" alt="Michael Ross">
       </div>
       <h3 class="card-name">Michael Ross</h3>
       <p class="card-role">Product Manager</p>
    </div>
  </div>
</div>`} 
              cssCode={`.team-brutal-root { background: #facc15; padding: 48px; border-radius: 48px; border: 8px solid #020617; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; text-transform: uppercase; text-align: center; box-sizing: border-box; }
.header-box { margin-bottom: 80px; }
.title-big { font-size: 72px; font-weight: 900; color: #020617; line-height: 0.8; letter-spacing: -0.05em; }
@media (min-width: 768px) { .title-big { font-size: 120px; } }
.team-grid { display: grid; grid-template-columns: 1fr; gap: 40px; max-width: 1200px; margin: 0 auto; }
@media (min-width: 768px) { .team-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .team-grid { grid-template-columns: repeat(4, 1fr); } }
.team-card { background: white; border: 6px solid #020617; padding: 24px; box-shadow: 16px 16px 0 0 #000; transition: all 0.3s ease; text-align: left; }
.team-card:hover { transform: translate(4px, 4px); box-shadow: none; }
.img-box { aspect-ratio: 1/1; border: 6px solid #020617; margin-bottom: 24px; overflow: hidden; background: #f1f5f9; }
.img-box img { width: 100%; height: 100%; object-cover: cover; filter: grayscale(100%) contrast(125%); transition: filter 0.5s ease; }
.team-card:hover .img-box img { filter: grayscale(0%) contrast(125%); }
.card-name { font-size: 24px; font-weight: 900; color: #020617; margin-bottom: 8px; line-height: 1; }
.card-role { display: inline-block; background: #2563eb; color: white; padding: 4px 12px; font-size: 10px; font-weight: 900; letter-spacing: 0.1em; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 01. Bold Brutalist THE_SQUAD </span>
          <TeamBrutalist />
        </section>

        {/* 02. Modern Bento */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/team border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/team:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const TeamBento = () => (
  <div className="bg-slate-50 p-12 rounded-[3rem] font-sans italic font-bold text-left">
    <div className="mb-20">
      <div className="text-[10px] text-blue-600 font-black uppercase tracking-[0.5em] mb-4 italic">// Global_Team_Matrix</div>
      <h2 className="text-6xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-6">Architects_</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
      <div className="md:col-span-2 md:row-span-2 bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl group relative h-[500px]">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent flex flex-col justify-end p-10 text-white">
           <h3 className="text-4xl font-black uppercase mb-2">Sarah Cole</h3>
           <p className="text-blue-400 font-black text-xs uppercase tracking-widest mb-4 italic">CEO & Founder</p>
           <p className="text-white/60 text-sm max-w-xs lowercase font-medium italic">Leading the architectural vision of the digital matrix.</p>
        </div>
      </div>
      <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl group hover:bg-slate-950 transition-all duration-500 flex flex-col items-center text-center justify-center min-h-[240px]">
         <div className="w-20 h-20 rounded-2xl overflow-hidden mb-6 border-2 border-slate-100 group-hover:border-blue-600 transition-colors">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" className="w-full h-full object-cover" />
         </div>
         <h3 className="text-xl font-black text-slate-950 group-hover:text-white uppercase mb-1">David Park</h3>
         <p className="text-xs text-blue-600 font-black uppercase tracking-widest italic">Head of Design</p>
      </div>
      <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl group hover:bg-slate-950 transition-all duration-500 flex flex-col items-center text-center justify-center min-h-[240px]">
         <div className="w-20 h-20 rounded-2xl overflow-hidden mb-6 border-2 border-slate-100 group-hover:border-blue-600 transition-colors">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" className="w-full h-full object-cover" />
         </div>
         <h3 className="text-xl font-black text-slate-950 group-hover:text-white uppercase mb-1">Emily Chen</h3>
         <p className="text-xs text-blue-600 font-black uppercase tracking-widest italic">Lead Engineer</p>
      </div>
      <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white flex flex-col items-center justify-center text-center shadow-2xl">
         <div className="text-5xl font-black mb-2 tracking-tighter italic">24/7_</div>
         <p className="text-[10px] uppercase font-black tracking-widest opacity-60">Uptime_Support</p>
      </div>
      <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl group hover:bg-slate-950 transition-all duration-500 flex flex-col items-center text-center justify-center min-h-[240px]">
         <div className="w-20 h-20 rounded-2xl overflow-hidden mb-6 border-2 border-slate-100 group-hover:border-blue-600 transition-colors">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" className="w-full h-full object-cover" />
         </div>
         <h3 className="text-xl font-black text-slate-950 group-hover:text-white uppercase mb-1">Michael Ross</h3>
         <p className="text-xs text-blue-600 font-black uppercase tracking-widest italic">Product Manager</p>
      </div>
    </div>
  </div>
);`} 
              htmlCode={`<!-- Bento Grid Team Matrix -->
<div class="team-bento-root">
  <div class="header-side">
    <div class="badge-text">// Global_Team_Matrix</div>
    <h2 class="title-main">Architects_</h2>
  </div>
  <div class="bento-layout">
    <div class="card-big">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" alt="Sarah Cole" class="bg-img">
      <div class="card-overlay">
         <h3 class="name-big">Sarah Cole</h3>
         <p class="role-big">CEO & Founder</p>
         <p class="bio-text">Leading the architectural vision of the digital matrix.</p>
      </div>
    </div>
    <div class="card-sm">
       <div class="avatar-box"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400"></div>
       <h3 class="name-sm">David Park</h3>
       <p class="role-sm">Head of Design</p>
    </div>
    <div class="card-sm">
       <div class="avatar-box"><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400"></div>
       <h3 class="name-sm">Emily Chen</h3>
       <p class="role-sm">Lead Engineer</p>
    </div>
    <div class="card-blue-stat">
       <div class="stat-text">24/7_</div>
       <div class="stat-label">Uptime_Support</div>
    </div>
    <div class="card-sm">
       <div class="avatar-box"><img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400"></div>
       <h3 class="name-sm">Michael Ross</h3>
       <p class="role-sm">Product Manager</p>
    </div>
  </div>
</div>`} 
              cssCode={`.team-bento-root { background: #f8fafc; padding: 48px; border-radius: 48px; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; box-sizing: border-box; }
.header-side { text-align: left; margin-bottom: 80px; }
.badge-text { font-size: 10px; color: #2563eb; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; margin-bottom: 16px; }
.title-main { font-size: 64px; font-weight: 900; color: #020617; text-transform: uppercase; margin-bottom: 24px; line-height: 1; letter-spacing: -0.05em; }
@media (min-width: 768px) { .title-main { font-size: 80px; } }
.bento-layout { display: grid; grid-template-columns: 1fr; gap: 24px; max-width: 1200px; margin: 0 auto; }
@media (min-width: 768px) { .bento-layout { grid-template-columns: repeat(4, 1fr); } }
.card-big { grid-column: span 1; grid-row: span 1; position: relative; height: 500px; border-radius: 40px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
@media (min-width: 768px) { .card-big { grid-column: span 2; grid-row: span 2; } }
.bg-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s ease; }
.card-big:hover .bg-img { transform: scale(1.05); }
.card-overlay { position: absolute; inset: 0; background: linear-gradient(to top, #020617, transparent); padding: 40px; display: flex; flex-direction: column; justify-content: flex-end; color: white; }
.name-big { font-size: 32px; font-weight: 900; text-transform: uppercase; margin-bottom: 8px; }
.role-big { color: #60a5fa; font-weight: 900; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; }
.bio-text { color: rgba(255,255,255,0.6); font-size: 14px; text-transform: lowercase; line-height: 1.5; }
.card-sm { background: white; border-radius: 40px; padding: 32px; border: 1px solid #f1f5f9; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 240px; transition: all 0.5s ease; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
.card-sm:hover { background: #020617; }
.card-sm:hover * { color: white !important; }
.avatar-box { width: 80px; height: 80px; border-radius: 16px; overflow: hidden; border: 2px solid #f1f5f9; margin-bottom: 24px; transition: border-color 0.3s ease; }
.card-sm:hover .avatar-box { border-color: #2563eb; }
.avatar-box img { width: 100%; height: 100%; object-fit: cover; }
.name-sm { font-size: 20px; font-weight: 900; text-transform: uppercase; color: #020617; margin-bottom: 4px; }
.role-sm { color: #2563eb; font-weight: 900; font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; }
.card-blue-stat { background: #2563eb; color: white; border-radius: 40px; padding: 32px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 25px 50px -12px rgba(37,99,235,0.5); }
.stat-text { font-size: 48px; font-weight: 900; letter-spacing: -0.05em; font-style: italic; }
.stat-label { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.6; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 02. Modern Team Bento Matrix </span>
          <TeamBento />
        </section>

        {/* 03. Glassmorphic Core */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/team border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/team:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const TeamGlass = () => (
  <div className="relative bg-slate-950 p-20 rounded-[3rem] overflow-hidden min-h-[600px] flex items-center font-sans italic font-bold text-left">
    <div className="absolute top-0 right-[-10%] w-[40rem] h-[40rem] bg-indigo-600 rounded-full mix-blend-screen filter blur-[140px] opacity-20 animate-pulse"></div>
    <div className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-600 rounded-full mix-blend-screen filter blur-[140px] opacity-20 animate-pulse delay-1000"></div>
    <div className="relative z-10 w-full">
      <div className="text-center mb-24">
        <h2 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-none italic">Protocol_Lead</h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {[
          { name: "Sarah Cole", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" },
          { name: "David Park", role: "Head of Design", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" },
          { name: "Emily Chen", role: "Lead Engineer", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" },
          { name: "Michael Ross", role: "Product Manager", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" }
        ].map((member, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:bg-white/10 group text-center">
            <div className="w-24 h-24 mx-auto rounded-full p-1 border-2 border-white/20 mb-6 group-hover:border-blue-500 transition-colors relative">
               <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full" />
               <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-slate-950 flex items-center justify-center"></div>
            </div>
            <h3 className="text-white text-2xl font-black uppercase mb-1 tracking-tight">{member.name}</h3>
            <p className="text-blue-400 text-[10px] uppercase font-black tracking-widest italic mb-6">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);`} 
              htmlCode={`<!-- Glassmorphic Team Section -->
<div class="team-glass-root">
  <div class="glass-bg-orb-1"></div>
  <div class="glass-bg-orb-2"></div>
  <div class="glass-content">
    <div class="glass-header">
      <h2 class="glass-title">Protocol_Lead</h2>
      <div class="glass-title-bar"></div>
    </div>
    <div class="glass-grid">
       <div class="glass-card">
          <div class="avatar-wrapper">
             <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" alt="Sarah Cole">
             <div class="status-dot"></div>
          </div>
          <h3 class="member-name">Sarah Cole</h3>
          <p class="member-role">CEO & Founder</p>
       </div>
       <div class="glass-card">
          <div class="avatar-wrapper">
             <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" alt="David Park">
             <div class="status-dot"></div>
          </div>
          <h3 class="member-name">David Park</h3>
          <p class="member-role">Head of Design</p>
       </div>
       <div class="glass-card">
          <div class="avatar-wrapper">
             <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" alt="Emily Chen">
             <div class="status-dot"></div>
          </div>
          <h3 class="member-name">Emily Chen</h3>
          <p class="member-role">Lead Engineer</p>
       </div>
       <div class="glass-card">
          <div class="avatar-wrapper">
             <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" alt="Michael Ross">
             <div class="status-dot"></div>
          </div>
          <h3 class="member-name">Michael Ross</h3>
          <p class="member-role">Product Manager</p>
       </div>
    </div>
  </div>
</div>`} 
              cssCode={`.team-glass-root { position: relative; background: #020617; padding: 80px; border-radius: 48px; overflow: hidden; min-height: 600px; display: flex; align-items: center; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; box-sizing: border-box; }
.glass-bg-orb-1 { position: absolute; top: 0; right: -10%; width: 640px; height: 640px; background: #4f46e5; border-radius: 50%; filter: blur(140px); opacity: 0.2; }
.glass-bg-orb-2 { position: absolute; bottom: -10%; left: -10%; width: 640px; height: 640px; background: #2563eb; border-radius: 50%; filter: blur(140px); opacity: 0.2; }
.glass-content { position: relative; z-index: 10; width: 100%; }
.glass-header { text-align: center; margin-bottom: 96px; }
.glass-title { font-size: 64px; font-weight: 900; color: white; text-transform: uppercase; letter-spacing: -0.05em; line-height: 1; margin-bottom: 24px; }
@media (min-width: 768px) { .glass-title { font-size: 80px; } }
.glass-title-bar { height: 4px; width: 80px; background: #3b82f6; margin: 0 auto; border-radius: 999px; }
.glass-grid { display: grid; grid-template-columns: 1fr; gap: 32px; max-width: 1200px; margin: 0 auto; }
@media (min-width: 768px) { .glass-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .glass-grid { grid-template-columns: repeat(4, 1fr); } }
.glass-card { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(40px); border: 1px solid rgba(255, 255, 255, 0.1); padding: 32px; border-radius: 40px; text-align: center; transition: all 0.5s ease; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
.glass-card:hover { transform: translateY(-16px); background: rgba(255, 255, 255, 0.1); }
.avatar-wrapper { width: 96px; height: 96px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.2); margin: 0 auto 24px auto; position: relative; padding: 4px; box-sizing: border-box; }
.avatar-wrapper img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }
.status-dot { position: absolute; bottom: 0; right: 0; width: 24px; height: 24px; background: #2563eb; border: 4px solid #020617; border-radius: 50%; }
.member-name { font-size: 24px; font-weight: 900; color: white; text-transform: uppercase; margin-bottom: 4px; letter-spacing: -0.02em; }
.member-role { font-size: 10px; color: #60a5fa; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; font-style: italic; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 03. Glassmorphic Core Protocol </span>
          <TeamGlass />
        </section>

        {/* 04. Cyberpunk Manifest */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/team border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/team:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const TeamCyber = () => (
  <div className="bg-black p-12 rounded-[3rem] border border-white/5 font-mono italic font-bold text-left overflow-hidden relative">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
    <div className="relative z-10">
       <div className="flex justify-between items-end mb-20 border-b border-white/10 pb-10">
          <h2 className="text-5xl md:text-7xl font-black text-emerald-500 tracking-tighter uppercase leading-none italic underline decoration-wavy decoration-emerald-900/50">Node_Manifest</h2>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Sarah Cole", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" },
            { name: "David Park", role: "Head of Design", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" },
            { name: "Emily Chen", role: "Lead Engineer", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" },
            { name: "Michael Ross", role: "Product Manager", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" }
          ].map((member, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 p-1 relative group hover:border-emerald-500 transition-colors duration-500">
               <div className="relative h-72 overflow-hidden bg-slate-900 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
               </div>
               <div className="p-6">
                  <h3 className="text-white text-xl font-black uppercase mb-1 tracking-widest">{member.name}</h3>
                  <p className="text-emerald-500 text-[10px] uppercase font-black italic tracking-[0.2em]">{member.role}</p>
               </div>
               <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-emerald-500 opacity-0 group-hover:opacity-100"></div>
               <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-emerald-500 opacity-0 group-hover:opacity-100"></div>
            </div>
          ))}
       </div>
    </div>
  </div>
);`} 
              htmlCode={`<!-- Cyberpunk Team Manifest -->
<div class="team-cyber-root">
  <div class="scanlines"></div>
  <div class="manifest-header">
     <h2 class="manifest-title">Node_Manifest</h2>
  </div>
  <div class="cyber-grid">
     <div class="cyber-tile">
        <div class="cyber-img-box">
           <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" alt="Sarah Cole">
        </div>
        <div class="cyber-info">
           <h3 class="cyber-name">Sarah Cole</h3>
           <p class="cyber-role">CEO & Founder</p>
        </div>
        <div class="corner-top"></div>
        <div class="corner-bottom"></div>
     </div>
     <div class="cyber-tile">
        <div class="cyber-img-box">
           <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" alt="David Park">
        </div>
        <div class="cyber-info">
           <h3 class="cyber-name">David Park</h3>
           <p class="cyber-role">Head of Design</p>
        </div>
        <div class="corner-top"></div>
        <div class="corner-bottom"></div>
     </div>
     <div class="cyber-tile">
        <div class="cyber-img-box">
           <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" alt="Emily Chen">
        </div>
        <div class="cyber-info">
           <h3 class="cyber-name">Emily Chen</h3>
           <p class="cyber-role">Lead Engineer</p>
        </div>
        <div class="corner-top"></div>
        <div class="corner-bottom"></div>
     </div>
     <div class="cyber-tile">
        <div class="cyber-img-box">
           <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" alt="Michael Ross">
        </div>
        <div class="cyber-info">
           <h3 class="cyber-name">Michael Ross</h3>
           <p class="cyber-role">Product Manager</p>
        </div>
        <div class="corner-top"></div>
        <div class="corner-bottom"></div>
     </div>
  </div>
</div>`} 
              cssCode={`.team-cyber-root { background: #000; padding: 48px; border-radius: 48px; border: 1px solid rgba(255,255,255,0.05); font-family: 'JetBrains Mono', monospace; font-style: italic; font-weight: 700; position: relative; overflow: hidden; box-sizing: border-box; }
.scanlines { position: absolute; inset: 0; background: linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%), linear-gradient(90deg, rgba(255,0,0,0.06), rgba(0,255,0,0.02), rgba(0,0,255,0.06)); background-size: 100% 2px, 3px 100%; pointer-events: none; opacity: 0.2; }
.manifest-header { margin-bottom: 80px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 40px; }
.manifest-title { font-size: 48px; font-weight: 900; color: #10b981; text-transform: uppercase; letter-spacing: -0.05em; line-height: 1; }
@media (min-width: 768px) { .manifest-title { font-size: 72px; } }
.cyber-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
@media (min-width: 768px) { .cyber-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .cyber-grid { grid-template-columns: repeat(4, 1fr); } }
.cyber-tile { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 4px; position: relative; transition: all 0.5s ease; overflow: hidden; }
.cyber-tile:hover { border-color: #10b981; }
.cyber-img-box { height: 288px; background: #0f172a; overflow: hidden; filter: grayscale(100%); transition: all 0.7s ease; }
.cyber-tile:hover .cyber-img-box { filter: grayscale(0%); }
.cyber-img-box img { width: 100%; height: 100%; object-fit: cover; transition: transform 1s ease; }
.cyber-tile:hover .cyber-img-box img { transform: scale(1.1); }
.cyber-info { padding: 24px; text-align: left; }
.cyber-name { color: white; font-size: 20px; font-weight: 900; text-transform: uppercase; margin-bottom: 4px; letter-spacing: 0.1em; }
.cyber-role { color: #10b981; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; font-style: italic; }
.corner-top { position: absolute; top: 0; left: 0; width: 12px; height: 12px; border-top: 2px solid #10b981; border-left: 2px solid #10b981; opacity: 0; transition: opacity 0.3s ease; }
.corner-bottom { position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; border-bottom: 2px solid #10b981; border-right: 2px solid #10b981; opacity: 0; transition: opacity 0.3s ease; }
.cyber-tile:hover .corner-top, .cyber-tile:hover .corner-bottom { opacity: 1; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 04. Cyberpunk Node Manifest </span>
          <TeamCyber />
        </section>

        {/* 05. Interactive Flip */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/team border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/team:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const TeamFlip = () => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 font-sans italic font-bold text-center">
    <div className="mb-24">
      <h2 className="text-6xl md:text-8xl font-black text-slate-950 mb-6 tracking-tighter uppercase leading-none italic">Core_Architects</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
      {[
        { id: "01", name: "Sarah Cole", role: "CEO & Founder", bio: "Leading the architectural vision of the digital matrix.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" },
        { id: "02", name: "David Park", role: "Head of Design", bio: "Crafting high-fidelity aesthetics for modern nodes.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" },
        { id: "03", name: "Emily Chen", role: "Lead Engineer", bio: "Architecting zero-latency protocol sequences.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" },
        { id: "04", name: "Michael Ross", role: "Product Manager", bio: "Synchronizing team logic for global scale.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" }
      ].map((member, i) => (
        <div key={i} className="group [perspective:1000px] h-[450px]">
          <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
            <div className="absolute inset-0 bg-slate-50 rounded-[2.5rem] border-2 border-slate-100 overflow-hidden shadow-xl [backface-visibility:hidden]">
               <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
               <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-950/80 to-transparent text-white text-left">
                  <h3 className="text-2xl font-black uppercase mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-[10px] uppercase font-black italic">{member.role}</p>
               </div>
            </div>
            <div className="absolute inset-0 h-full w-full rounded-[2.5rem] bg-slate-950 text-white p-10 flex flex-col justify-center items-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] border-4 border-blue-600">
               <h3 className="text-3xl font-black uppercase mb-4 text-blue-500 italic">{member.name}</h3>
               <p className="text-white/60 text-sm leading-relaxed lowercase mb-10 font-medium italic">"{member.bio}"</p>
               <button className="px-6 py-3 bg-white text-slate-950 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">Profile_</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);`} 
              htmlCode={`<!-- Interactive Flip Cards -->
<div class="team-flip-root">
  <div class="flip-header">
    <h2 class="flip-title">Core_Architects</h2>
  </div>
  <div class="flip-grid">
    <div class="flip-card-wrapper">
       <div class="flip-card-inner">
          <div class="flip-card-front">
             <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" alt="Sarah Cole">
             <div class="front-content">
                <h3 class="front-name">Sarah Cole</h3>
                <p class="front-role">CEO & Founder</p>
             </div>
          </div>
          <div class="flip-card-back">
             <h3 class="back-name">Sarah Cole</h3>
             <p class="back-bio">"Leading the architectural vision of the digital matrix."</p>
             <button class="back-btn">Profile_</button>
          </div>
       </div>
    </div>
    <div class="flip-card-wrapper">
       <div class="flip-card-inner">
          <div class="flip-card-front">
             <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" alt="David Park">
             <div class="front-content">
                <h3 class="front-name">David Park</h3>
                <p class="front-role">Head of Design</p>
             </div>
          </div>
          <div class="flip-card-back">
             <h3 class="back-name">David Park</h3>
             <p class="back-bio">"Crafting high-fidelity aesthetics for modern nodes."</p>
             <button class="back-btn">Profile_</button>
          </div>
       </div>
    </div>
    <div class="flip-card-wrapper">
       <div class="flip-card-inner">
          <div class="flip-card-front">
             <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" alt="Emily Chen">
             <div class="front-content">
                <h3 class="front-name">Emily Chen</h3>
                <p class="front-role">Lead Engineer</p>
             </div>
          </div>
          <div class="flip-card-back">
             <h3 class="back-name">Emily Chen</h3>
             <p class="back-bio">"Architecting zero-latency protocol sequences."</p>
             <button class="back-btn">Profile_</button>
          </div>
       </div>
    </div>
    <div class="flip-card-wrapper">
       <div class="flip-card-inner">
          <div class="flip-card-front">
             <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" alt="Michael Ross">
             <div class="front-content">
                <h3 class="front-name">Michael Ross</h3>
                <p class="front-role">Product Manager</p>
             </div>
          </div>
          <div class="flip-card-back">
             <h3 class="back-name">Michael Ross</h3>
             <p class="back-bio">"Synchronizing team logic for global scale."</p>
             <button class="back-btn">Profile_</button>
          </div>
       </div>
    </div>
  </div>
</div>`} 
              cssCode={`.team-flip-root { background: white; padding: 48px; border-radius: 48px; border: 1px solid #f1f5f9; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; box-sizing: border-box; text-align: center; }
.flip-header { margin-bottom: 96px; }
.flip-title { font-size: 64px; font-weight: 900; color: #020617; text-transform: uppercase; letter-spacing: -0.05em; line-height: 1; }
@media (min-width: 768px) { .flip-title { font-size: 80px; } }
.flip-grid { display: grid; grid-template-columns: 1fr; gap: 48px; max-width: 1200px; margin: 0 auto; }
@media (min-width: 768px) { .flip-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .flip-grid { grid-template-columns: repeat(4, 1fr); } }
.flip-card-wrapper { perspective: 1000px; height: 450px; cursor: pointer; }
.flip-card-inner { position: relative; width: 100%; height: 100%; transition: transform 0.7s; transform-style: preserve-3d; }
.flip-card-wrapper:hover .flip-card-inner { transform: rotateY(180deg); }
.flip-card-front, .flip-card-back { position: absolute; inset: 0; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 40px; overflow: hidden; }
.flip-card-front { background: #f8fafc; border: 2px solid #f1f5f9; shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
.flip-card-front img { width: 100%; height: 100%; object-fit: cover; }
.front-content { position: absolute; bottom: 0; left: 0; width: 100%; padding: 32px; background: linear-gradient(to top, rgba(2,6,23,0.8), transparent); text-align: left; }
.front-name { font-size: 24px; font-weight: 900; color: white; text-transform: uppercase; margin-bottom: 4px; }
.front-role { color: #3b82f6; font-size: 10px; font-weight: 900; text-transform: uppercase; font-style: italic; }
.flip-card-back { background: #020617; color: white; padding: 40px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; transform: rotateY(180deg); border: 4px solid #2563eb; box-sizing: border-box; }
.back-name { font-size: 28px; font-weight: 900; text-transform: uppercase; color: #3b82f6; font-style: italic; margin-bottom: 16px; }
.back-bio { color: rgba(255,255,255,0.6); font-size: 14px; text-transform: lowercase; font-weight: 500; font-style: italic; margin-bottom: 40px; line-height: 1.6; }
.back-btn { background: white; color: #020617; padding: 12px 24px; border-radius: 12px; font-weight: 900; text-transform: uppercase; font-size: 10px; letter-spacing: 0.1em; border: none; cursor: pointer; transition: all 0.3s ease; }
.back-btn:hover { background: #2563eb; color: white; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 05. Interactive Team Flip Cards </span>
          <TeamFlip />
        </section>

        {/* 06. Minimalist Lineage */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/team border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/team:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const TeamMinimal = () => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 font-sans italic font-bold text-left">
    <div className="max-w-4xl mx-auto flex flex-col gap-12">
      {[
        { id: "01", name: "Sarah Cole", role: "CEO & Founder", bio: "Leading the architectural vision of the digital matrix.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" },
        { id: "02", name: "David Park", role: "Head of Design", bio: "Crafting high-fidelity aesthetics for modern nodes.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" },
        { id: "03", name: "Emily Chen", role: "Lead Engineer", bio: "Architecting zero-latency protocol sequences.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" },
        { id: "04", name: "Michael Ross", role: "Product Manager", bio: "Synchronizing team logic for global scale.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" }
      ].map((member, i) => (
        <div key={i} className="flex flex-col md:flex-row items-center gap-12 group p-8 hover:bg-slate-50 rounded-3xl transition-colors duration-500">
           <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl relative z-10" />
           </div>
           <div className="flex-1 text-center md:text-left">
              <div className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-2">Protocol_Node_0{member.id}</div>
              <h3 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter mb-4 leading-none">{member.name}</h3>
              <p className="text-slate-500 text-lg lowercase font-medium mb-6">{member.role} — {member.bio}</p>
           </div>
        </div>
      ))}
    </div>
  </div>
);`} 
              htmlCode={`<!-- Minimalist Team Lineage -->
<div class="team-minimal-root">
  <div class="lineage-container">
    <div class="lineage-item">
       <div class="lineage-avatar">
          <div class="avatar-shadow"></div>
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" alt="Sarah Cole">
       </div>
       <div class="lineage-info">
          <div class="node-badge">Protocol_Node_01</div>
          <h3 class="lineage-name">Sarah Cole</h3>
          <p class="lineage-role">CEO & Founder — Leading the architectural vision of the digital matrix.</p>
       </div>
    </div>
    <div class="lineage-item">
       <div class="lineage-avatar">
          <div class="avatar-shadow"></div>
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" alt="David Park">
       </div>
       <div class="lineage-info">
          <div class="node-badge">Protocol_Node_02</div>
          <h3 class="lineage-name">David Park</h3>
          <p class="lineage-role">Head of Design — Crafting high-fidelity aesthetics for modern nodes.</p>
       </div>
    </div>
    <div class="lineage-item">
       <div class="lineage-avatar">
          <div class="avatar-shadow"></div>
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" alt="Emily Chen">
       </div>
       <div class="lineage-info">
          <div class="node-badge">Protocol_Node_03</div>
          <h3 class="lineage-name">Emily Chen</h3>
          <p class="lineage-role">Lead Engineer — Architecting zero-latency protocol sequences.</p>
       </div>
    </div>
    <div class="lineage-item">
       <div class="lineage-avatar">
          <div class="avatar-shadow"></div>
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" alt="Michael Ross">
       </div>
       <div class="lineage-info">
          <div class="node-badge">Protocol_Node_04</div>
          <h3 class="lineage-name">Michael Ross</h3>
          <p class="lineage-role">Product Manager — Synchronizing team logic for global scale.</p>
       </div>
    </div>
  </div>
</div>`} 
              cssCode={`.team-minimal-root { background: white; padding: 48px; border-radius: 48px; border: 1px solid #f1f5f9; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; box-sizing: border-box; }
.lineage-container { max-width: 896px; margin: 0 auto; display: flex; flex-direction: column; gap: 48px; }
.lineage-item { display: flex; flex-direction: column; align-items: center; gap: 48px; padding: 32px; border-radius: 24px; transition: background 0.5s ease; box-sizing: border-box; }
@media (min-width: 768px) { .lineage-item { flex-direction: row; text-align: left; } }
.lineage-item:hover { background: #f8fafc; }
.lineage-avatar { width: 128px; height: 128px; flex-shrink: 0; position: relative; }
@media (min-width: 768px) { .lineage-avatar { width: 192px; height: 192px; } }
.avatar-shadow { position: absolute; inset: 0; background: #2563eb; border-radius: 50%; transform: translate(8px, 8px); opacity: 0; transition: all 0.5s ease; }
.lineage-item:hover .avatar-shadow { opacity: 1; }
.lineage-avatar img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; border: 4px solid white; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1); position: relative; z-index: 10; }
.lineage-info { flex: 1; text-align: center; }
@media (min-width: 768px) { .lineage-info { text-align: left; } }
.node-badge { font-size: 12px; color: #2563eb; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 8px; }
.lineage-name { font-size: 36px; font-weight: 900; color: #020617; text-transform: uppercase; letter-spacing: -0.05em; margin-bottom: 16px; line-height: 1; }
@media (min-width: 768px) { .lineage-name { font-size: 60px; } }
.lineage-role { color: #64748b; font-size: 18px; text-transform: lowercase; font-weight: 500; line-height: 1.6; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 06. Minimalist Team Lineage Protocol </span>
          <TeamMinimal />
        </section>

        {/* 07. Neumorphic Depth */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/team border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/team:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const TeamNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-16 rounded-[3rem] font-sans italic font-bold text-center">
    <div className="text-center mb-24">
      <h2 className="text-6xl md:text-8xl font-black text-slate-700 uppercase tracking-tighter leading-none italic mb-4">Tactile_Team</h2>
      <p className="text-slate-500 text-xl lowercase font-medium italic">Soft architecture, high-fidelity nodes.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
      {[
        { name: "Sarah Cole", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" },
        { name: "David Park", role: "Head of Design", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" },
        { name: "Emily Chen", role: "Lead Engineer", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" },
        { name: "Michael Ross", role: "Product Manager", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" }
      ].map((member, i) => (
        <div key={i} className="bg-[#e0e5ec] p-10 rounded-[3rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-4 border border-white/20">
          <div className="w-32 h-32 bg-[#e0e5ec] rounded-full shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] mb-10 flex items-center justify-center border-4 border-white/50 overflow-hidden">
             <img src={member.img} alt={member.name} className="w-full h-full object-cover p-2 rounded-full grayscale hover:grayscale-0 transition-all" />
          </div>
          <h3 className="text-2xl font-black text-slate-700 mb-2 uppercase tracking-tight italic">{member.name}</h3>
          <p className="text-slate-500 text-xs uppercase font-black tracking-widest mb-10">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
);`} 
              htmlCode={`<!-- Neumorphic Team Grid -->
<div class="team-neu-root">
  <div class="neu-header">
    <h2 class="neu-title">Tactile_Team</h2>
    <p class="neu-desc">Soft architecture, high-fidelity nodes.</p>
  </div>
  <div class="neu-grid">
     <div class="neu-card">
        <div class="avatar-inset">
           <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" alt="Sarah Cole">
        </div>
        <h3 class="neu-name">Sarah Cole</h3>
        <p class="neu-role">CEO & Founder</p>
     </div>
     <div class="neu-card">
        <div class="avatar-inset">
           <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" alt="David Park">
        </div>
        <h3 class="neu-name">David Park</h3>
        <p class="neu-role">Head of Design</p>
     </div>
     <div class="neu-card">
        <div class="avatar-inset">
           <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" alt="Emily Chen">
        </div>
        <h3 class="neu-name">Emily Chen</h3>
        <p class="neu-role">Lead Engineer</p>
     </div>
     <div class="neu-card">
        <div class="avatar-inset">
           <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" alt="Michael Ross">
        </div>
        <h3 class="neu-name">Michael Ross</h3>
        <p class="neu-role">Product Manager</p>
     </div>
  </div>
</div>`} 
              cssCode={`.team-neu-root { background: #e0e5ec; padding: 64px; border-radius: 48px; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; text-align: center; box-sizing: border-box; }
.neu-header { margin-bottom: 96px; }
.neu-title { font-size: 64px; font-weight: 900; color: #475569; text-transform: uppercase; line-height: 1; margin-bottom: 16px; letter-spacing: -0.05em; }
@media (min-width: 768px) { .neu-title { font-size: 80px; } }
.neu-desc { color: #64748b; font-size: 18px; text-transform: lowercase; font-weight: 500; }
.neu-grid { display: grid; grid-template-columns: 1fr; gap: 48px; max-width: 1200px; margin: 0 auto; }
@media (min-width: 768px) { .neu-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .neu-grid { grid-template-columns: repeat(4, 1fr); } }
.neu-card { background: #e0e5ec; padding: 40px; border-radius: 48px; box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; border: 1px solid rgba(255,255,255,0.2); transition: all 0.5s ease; text-align: center; }
.neu-card:hover { transform: translateY(-16px); }
.avatar-inset { width: 128px; height: 128px; border-radius: 50%; background: #e0e5ec; box-shadow: inset 10px 10px 20px #bebebe, inset -10px -10px 20px #ffffff; display: flex; align-items: center; justify-content: center; margin: 0 auto 40px auto; border: 4px solid rgba(255,255,255,0.5); overflow: hidden; padding: 8px; box-sizing: border-box; }
.avatar-inset img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; filter: grayscale(100%); transition: filter 0.5s ease; }
.neu-card:hover .avatar-inset img { filter: grayscale(0%); }
.neu-name { font-size: 24px; font-weight: 900; color: #475569; text-transform: uppercase; margin-bottom: 8px; letter-spacing: -0.02em; font-style: italic; }
.neu-role { color: #64748b; font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 07. Neumorphic Tactile Team Grid </span>
          <TeamNeumorphic />
        </section>

        {/* 08. Circular Mesh */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/team border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/team:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const TeamMesh = () => (
  <div className="bg-slate-900 p-20 rounded-[3rem] font-sans italic font-bold relative overflow-hidden text-center min-h-[700px] flex items-center">
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    <div className="relative z-10 w-full max-w-5xl mx-auto">
       <h2 className="text-6xl md:text-8xl font-black text-white mb-24 tracking-tighter uppercase leading-none italic opacity-20">Global_Nodes</h2>
       <div className="flex flex-wrap justify-center gap-16 md:gap-32">
          {[
            { name: "Sarah Cole", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" },
            { name: "David Park", role: "Head of Design", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" },
            { name: "Emily Chen", role: "Lead Engineer", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" },
            { name: "Michael Ross", role: "Product Manager", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" }
          ].map((member, i) => (
            <div key={i} className={\`flex flex-col items-center group transition-all duration-500 \${i%2===0 ? 'translate-y-12' : '-translate-y-12'}\`}>
               <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-slate-800 border-4 border-slate-700 relative mb-8 group-hover:border-blue-600 transition-all duration-500 shadow-2xl overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
               </div>
               <h3 className="text-white text-xl font-black uppercase mb-1 tracking-tight">{member.name}</h3>
               <p className="text-blue-500 text-[10px] uppercase font-black tracking-widest italic">{member.role}</p>
            </div>
          ))}
       </div>
    </div>
  </div>
);`} 
              htmlCode={`<!-- Floating Mesh Team Section -->
<div class="team-mesh-root">
  <div class="mesh-bg"></div>
  <div class="mesh-content">
    <h2 class="mesh-title">Global_Nodes</h2>
    <div class="mesh-container">
       <div class="mesh-node lift-up">
          <div class="node-avatar"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" alt="Sarah Cole"></div>
          <h3 class="node-name">Sarah Cole</h3>
          <p class="node-role">CEO & Founder</p>
       </div>
       <div class="mesh-node lift-down">
          <div class="node-avatar"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" alt="David Park"></div>
          <h3 class="node-name">David Park</h3>
          <p class="node-role">Head of Design</p>
       </div>
       <div class="mesh-node lift-up">
          <div class="node-avatar"><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" alt="Emily Chen"></div>
          <h3 class="node-name">Emily Chen</h3>
          <p class="node-role">Lead Engineer</p>
       </div>
       <div class="mesh-node lift-down">
          <div class="node-avatar"><img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" alt="Michael Ross"></div>
          <h3 class="node-name">Michael Ross</h3>
          <p class="node-role">Product Manager</p>
       </div>
    </div>
  </div>
</div>`} 
              cssCode={`.team-mesh-root { background: #0f172a; padding: 80px; border-radius: 48px; overflow: hidden; min-height: 700px; display: flex; align-items: center; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; position: relative; box-sizing: border-box; }
.mesh-bg { position: absolute; inset: 0; opacity: 0.1; background-image: radial-gradient(#3b82f6 1px, transparent 1px); background-size: 40px 40px; }
.mesh-content { position: relative; z-index: 10; width: 100%; text-align: center; }
.mesh-title { font-size: 64px; font-weight: 900; color: white; margin-bottom: 96px; text-transform: uppercase; letter-spacing: -0.05em; opacity: 0.2; }
@media (min-width: 768px) { .mesh-title { font-size: 100px; } }
.mesh-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 64px; max-width: 1024px; margin: 0 auto; }
.mesh-node { display: flex; flex-direction: column; align-items: center; transition: all 0.5s ease; cursor: default; }
.lift-up { transform: translateY(48px); }
.lift-down { transform: translateY(-48px); }
.mesh-node:hover { transform: translateY(0) scale(1.1); }
.node-avatar { width: 128px; height: 128px; border-radius: 50%; background: #1e293b; border: 4px solid #334155; overflow: hidden; margin-bottom: 32px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); transition: border-color 0.5s ease; }
@media (min-width: 768px) { .node-avatar { width: 192px; height: 192px; } }
.mesh-node:hover .node-avatar { border-color: #2563eb; }
.node-avatar img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); transition: filter 0.5s ease; }
.mesh-node:hover .node-avatar img { filter: grayscale(0%); }
.node-name { color: white; font-size: 20px; font-weight: 900; text-transform: uppercase; margin-bottom: 4px; letter-spacing: 0.05em; }
.node-role { color: #3b82f6; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; font-style: italic; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 08. Floating Team Mesh Nodes </span>
          <TeamMesh />
        </section>

        {/* 09. Terminal Log */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/team border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/team:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const TeamLog = () => (
  <div className="bg-[#0a0a0a] p-12 rounded-[3rem] border-2 border-white/5 font-mono italic font-bold text-left overflow-hidden relative shadow-2xl">
    <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-8">
       <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
       </div>
       <div className="text-[10px] text-white/20 uppercase tracking-[0.5em] italic">GET_CORE_TEAM.sh</div>
    </div>
    <div className="space-y-10">
       {[
          { id: "01", name: "Sarah Cole", role: "CEO & Founder", bio: "Leading the architectural vision of the digital matrix.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" },
          { id: "02", name: "David Park", role: "Head of Design", bio: "Crafting high-fidelity aesthetics for modern nodes.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" },
          { id: "03", name: "Emily Chen", role: "Lead Engineer", bio: "Architecting zero-latency protocol sequences.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" },
          { id: "04", name: "Michael Ross", role: "Product Manager", bio: "Synchronizing team logic for global scale.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" }
       ].map((member, i) => (
          <div key={i} className="group border-l-2 border-white/5 hover:border-blue-600 pl-10 py-4 transition-all duration-500">
             <div className="flex items-center gap-6 mb-4">
                <div className="text-blue-500 text-xs font-black uppercase tracking-widest">>> [NODE_{member.id}]</div>
                <div className="h-px flex-1 bg-white/5"></div>
             </div>
             <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                <div className="w-24 h-24 flex-shrink-0 bg-slate-900 border border-white/10 rounded-xl overflow-hidden p-1 shadow-2xl">
                   <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-lg filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="flex-1">
                   <h3 className="text-white text-3xl font-black uppercase mb-2 leading-none">{member.name}</h3>
                   <div className="flex gap-4 items-center mb-4">
                      <span className="text-blue-400 text-xs uppercase font-black tracking-widest">{member.role}</span>
                      <span className="text-white/20 text-[10px] uppercase font-black">Status: <span className="text-emerald-500">Active</span></span>
                   </div>
                   <p className="text-white/40 text-sm max-w-2xl lowercase italic font-medium leading-relaxed group-hover:text-white/60 transition-colors">" {member.bio} "</p>
                </div>
             </div>
          </div>
       ))}
    </div>
  </div>
);`} 
              htmlCode={`<!-- Terminal Log Team View -->
<div class="team-log-root">
  <div class="terminal-header">
     <div class="window-controls">
        <div class="w-dot red"></div>
        <div class="w-dot yellow"></div>
        <div class="w-dot green"></div>
     </div>
     <div class="file-label">GET_CORE_TEAM.sh</div>
  </div>
  <div class="log-entries">
     <div class="log-entry">
        <div class="entry-header">
           <div class="entry-node">>> [NODE_01]</div>
           <div class="entry-line"></div>
        </div>
        <div class="entry-body">
           <div class="entry-avatar"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" alt="Sarah Cole"></div>
           <div class="entry-content">
              <h3 class="entry-name">Sarah Cole</h3>
              <div class="entry-meta">
                 <span class="entry-role">CEO & Founder</span>
                 <span class="entry-status">Status: <span class="text-green">Active</span></span>
              </div>
              <p class="entry-bio">"Leading the architectural vision of the digital matrix."</p>
           </div>
        </div>
     </div>
     <div class="log-entry">
        <div class="entry-header">
           <div class="entry-node">>> [NODE_02]</div>
           <div class="entry-line"></div>
        </div>
        <div class="entry-body">
           <div class="entry-avatar"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" alt="David Park"></div>
           <div class="entry-content">
              <h3 class="entry-name">David Park</h3>
              <div class="entry-meta">
                 <span class="entry-role">Head of Design</span>
                 <span class="entry-status">Status: <span class="text-green">Active</span></span>
              </div>
              <p class="entry-bio">"Crafting high-fidelity aesthetics for modern nodes."</p>
           </div>
        </div>
     </div>
     <div class="log-entry">
        <div class="entry-header">
           <div class="entry-node">>> [NODE_03]</div>
           <div class="entry-line"></div>
        </div>
        <div class="entry-body">
           <div class="entry-avatar"><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" alt="Emily Chen"></div>
           <div class="entry-content">
              <h3 class="entry-name">Emily Chen</h3>
              <div class="entry-meta">
                 <span class="entry-role">Lead Engineer</span>
                 <span class="entry-status">Status: <span class="text-green">Active</span></span>
              </div>
              <p class="entry-bio">"Architecting zero-latency protocol sequences."</p>
           </div>
        </div>
     </div>
     <div class="log-entry">
        <div class="entry-header">
           <div class="entry-node">>> [NODE_04]</div>
           <div class="entry-line"></div>
        </div>
        <div class="entry-body">
           <div class="entry-avatar"><img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" alt="Michael Ross"></div>
           <div class="entry-content">
              <h3 class="entry-name">Michael Ross</h3>
              <div class="entry-meta">
                 <span class="entry-role">Product Manager</span>
                 <span class="entry-status">Status: <span class="text-green">Active</span></span>
              </div>
              <p class="entry-bio">"Synchronizing team logic for global scale."</p>
           </div>
        </div>
     </div>
  </div>
</div>`} 
              cssCode={`.team-log-root { background: #0a0a0a; padding: 48px; border-radius: 48px; border: 2px solid rgba(255,255,255,0.05); font-family: 'JetBrains Mono', monospace; font-style: italic; font-weight: 700; text-align: left; box-sizing: border-box; box-shadow: 0 50px 100px -20px rgba(0,0,0,0.5); }
.terminal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 48px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 32px; }
.window-controls { display: flex; gap: 8px; }
.w-dot { width: 12px; height: 12px; border-radius: 50%; opacity: 0.5; }
.red { background: #ef4444; }
.yellow { background: #eab308; }
.green { background: #22c55e; }
.file-label { font-size: 10px; color: rgba(255,255,255,0.2); text-transform: uppercase; letter-spacing: 0.5em; }
.log-entries { display: flex; flex-direction: column; gap: 40px; }
.log-entry { border-left: 2px solid rgba(255,255,255,0.05); padding-left: 40px; padding-top: 16px; padding-bottom: 16px; transition: all 0.5s ease; }
.log-entry:hover { border-color: #2563eb; }
.entry-header { display: flex; align-items: center; gap: 24px; margin-bottom: 16px; }
.entry-node { color: #3b82f6; font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; }
.entry-line { height: 1px; flex: 1; background: rgba(255,255,255,0.05); }
.entry-body { display: flex; flex-direction: column; gap: 40px; align-items: center; }
@media (min-width: 768px) { .entry-body { flex-direction: row; align-items: flex-start; } }
.entry-avatar { width: 96px; height: 96px; flex-shrink: 0; background: #1e293b; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 4px; box-sizing: border-box; }
.entry-avatar img { width: 100%; height: 100%; object-fit: cover; border-radius: 8px; filter: grayscale(100%); transition: filter 0.5s ease; }
.log-entry:hover .entry-avatar img { filter: grayscale(0%); }
.entry-content { flex: 1; }
.entry-name { color: white; font-size: 28px; font-weight: 900; text-transform: uppercase; margin-bottom: 8px; line-height: 1; }
.entry-meta { display: flex; gap: 16px; align-items: center; margin-bottom: 16px; }
.entry-role { color: #60a5fa; font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; }
.entry-status { color: rgba(255,255,255,0.2); font-size: 10px; font-weight: 900; text-transform: uppercase; }
.text-green { color: #10b981; }
.entry-bio { color: rgba(255,255,255,0.4); font-size: 14px; text-transform: lowercase; font-weight: 500; font-style: italic; line-height: 1.6; transition: color 0.3s ease; }
.log-entry:hover .entry-bio { color: rgba(255,255,255,0.6); }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 09. Developer Team Terminal Log </span>
          <TeamLog />
        </section>

        {/* 10. Magazine Style */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/team border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/team:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const TeamEditorial = () => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 font-sans italic font-bold text-left">
    <div className="max-w-7xl mx-auto">
       <div className="text-center mb-32 border-b-2 border-slate-950 pb-20">
          <h2 className="text-8xl md:text-[12rem] font-black text-slate-950 tracking-tighter uppercase leading-[0.8] mb-10 italic">LEAD_ <br/> ROLE.</h2>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
          {[
            { id: "01", name: "Sarah Cole", role: "CEO & Founder", bio: "Leading the architectural vision of the digital matrix.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" },
            { id: "02", name: "David Park", role: "Head of Design", bio: "Crafting high-fidelity aesthetics for modern nodes.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" },
            { id: "03", name: "Emily Chen", role: "Lead Engineer", bio: "Architecting zero-latency protocol sequences.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" },
            { id: "04", name: "Michael Ross", role: "Product Manager", bio: "Synchronizing team logic for global scale.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" }
          ].map((member, i) => (
            <div key={i} className={\`group flex flex-col \${i%2!==0 ? 'md:translate-y-32' : ''}\`}>
               <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden mb-12 shadow-2xl transition-all duration-700">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
               </div>
               <div className="border-l-4 border-slate-950 pl-10">
                  <h3 className="text-5xl font-black text-slate-950 uppercase tracking-tighter mb-4 italic leading-none">{member.name}</h3>
                  <p className="text-blue-600 text-xs font-black uppercase tracking-[0.4em] mb-6 italic">{member.role}</p>
                  <p className="text-slate-500 text-lg lowercase leading-relaxed font-medium italic max-w-sm">{member.bio}</p>
               </div>
            </div>
          ))}
       </div>
    </div>
  </div>
);`} 
              htmlCode={`<!-- Editorial Magazine Team Section -->
<div class="team-editorial-root">
  <div class="editorial-header">
     <h2 class="editorial-main-title">LEAD_ <br/> ROLE.</h2>
  </div>
  <div class="editorial-grid">
     <div class="editorial-item">
        <div class="editorial-img-box">
           <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" alt="Sarah Cole">
        </div>
        <div class="editorial-info">
           <h3 class="editorial-name">Sarah Cole</h3>
           <p class="editorial-role">CEO & Founder</p>
           <p class="editorial-bio">Leading the architectural vision of the digital matrix.</p>
        </div>
     </div>
     <div class="editorial-item offset-down">
        <div class="editorial-img-box">
           <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" alt="David Park">
        </div>
        <div class="editorial-info">
           <h3 class="editorial-name">David Park</h3>
           <p class="editorial-role">Head of Design</p>
           <p class="editorial-bio">Crafting high-fidelity aesthetics for modern nodes.</p>
        </div>
     </div>
     <div class="editorial-item">
        <div class="editorial-img-box">
           <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" alt="Emily Chen">
        </div>
        <div class="editorial-info">
           <h3 class="editorial-name">Emily Chen</h3>
           <p class="editorial-role">Lead Engineer</p>
           <p class="editorial-bio">Architecting zero-latency protocol sequences.</p>
        </div>
     </div>
     <div class="editorial-item offset-down">
        <div class="editorial-img-box">
           <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" alt="Michael Ross">
        </div>
        <div class="editorial-info">
           <h3 class="editorial-name">Michael Ross</h3>
           <p class="editorial-role">Product Manager</p>
           <p class="editorial-bio">Synchronizing team logic for global scale.</p>
        </div>
     </div>
  </div>
</div>`} 
              cssCode={`.team-editorial-root { background: white; padding: 48px; border-radius: 48px; border: 1px solid #f1f5f9; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; box-sizing: border-box; }
.editorial-header { text-align: center; margin-bottom: 128px; border-bottom: 2px solid #020617; padding-bottom: 80px; }
.editorial-main-title { font-size: 80px; font-weight: 900; color: #020617; text-transform: uppercase; letter-spacing: -0.05em; line-height: 0.8; margin-bottom: 40px; }
@media (min-width: 768px) { .editorial-main-title { font-size: 160px; } }
.editorial-grid { display: grid; grid-template-columns: 1fr; gap: 128px; max-width: 1200px; margin: 0 auto; }
@media (min-width: 768px) { .editorial-grid { grid-template-columns: repeat(2, 1fr); gap: 128px; } }
.editorial-item { display: flex; flex-direction: column; transition: transform 0.7s ease; }
@media (min-width: 768px) { .offset-down { transform: translateY(128px); } }
.editorial-img-box { aspect-ratio: 4/5; background: #f1f5f9; overflow: hidden; margin-bottom: 48px; box-shadow: 0 50px 100px -20px rgba(0,0,0,0.3); }
.editorial-img-box img { width: 100%; height: 100%; object-fit: cover; transition: transform 1s ease; }
.editorial-item:hover .editorial-img-box img { transform: scale(1.05); }
.editorial-info { border-left: 4px solid #020617; padding-left: 40px; text-align: left; }
.editorial-name { font-size: 40px; font-weight: 900; color: #020617; text-transform: uppercase; letter-spacing: -0.05em; margin-bottom: 16px; font-style: italic; line-height: 1; }
@media (min-width: 768px) { .editorial-name { font-size: 50px; } }
.editorial-role { color: #2563eb; font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 24px; }
.editorial-bio { color: #64748b; font-size: 18px; text-transform: lowercase; font-weight: 500; line-height: 1.6; max-width: 320px; font-style: italic; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 10. Magazine Style Editorial Layout </span>
          <TeamEditorial />
        </section>

      </div>
    </div>
  );
};

export default TeamGallery;