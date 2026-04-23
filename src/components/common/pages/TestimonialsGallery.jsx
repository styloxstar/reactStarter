import React, { useState } from 'react';
import CopyButton from '../CopyButton';

// --- 1. Standard SaaS Grid ---
export const TestimonialStandard = () => (
  <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl hover:shadow-2xl transition-all group">
        <div className="flex text-yellow-400 gap-1 mb-6 text-xl">★★★★★</div>
        <p className="text-slate-600 mb-8 leading-relaxed italic text-lg">"The logic sync is flawless. We reduced deployment latency by 40% in just one week."</p>
        <div className="flex items-center gap-4 border-t border-slate-100 pt-8">
          <div className="w-14 h-14 rounded-full bg-blue-100 flex-shrink-0 overflow-hidden border-2 border-white shadow-md">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" className="w-full h-full object-cover" alt="User" />
          </div>
          <div>
            <div className="font-black text-slate-900 uppercase tracking-tighter text-sm">Sarah_Jensen</div>
            <div className="text-xs text-blue-600 font-black uppercase tracking-widest">CTO_at_TechFlow</div>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-[2.5rem] border border-blue-200 shadow-2xl scale-105 z-10 group">
        <div className="flex text-yellow-400 gap-1 mb-6 text-xl">★★★★★</div>
        <p className="text-slate-600 mb-8 leading-relaxed italic text-lg">"Nothing comes close to the ease of use provided here. The neural architecture is simply ahead of its time."</p>
        <div className="flex items-center gap-4 border-t border-slate-100 pt-8">
          <div className="w-14 h-14 rounded-full bg-blue-100 flex-shrink-0 overflow-hidden border-2 border-white shadow-md">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" className="w-full h-full object-cover" alt="User" />
          </div>
          <div>
            <div className="font-black text-slate-900 uppercase tracking-tighter text-sm">David_Chen</div>
            <div className="text-xs text-blue-600 font-black uppercase tracking-widest">Founder_StartScale</div>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl hover:shadow-2xl transition-all group">
        <div className="flex text-yellow-400 gap-1 mb-6 text-xl">★★★★★</div>
        <p className="text-slate-600 mb-8 leading-relaxed italic text-lg">"Support is lightning fast. They resolved our sync node issue in under 5 minutes. Best investment this year."</p>
        <div className="flex items-center gap-4 border-t border-slate-100 pt-8">
          <div className="w-14 h-14 rounded-full bg-blue-100 flex-shrink-0 overflow-hidden border-2 border-white shadow-md">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" className="w-full h-full object-cover" alt="User" />
          </div>
          <div>
            <div className="font-black text-slate-900 uppercase tracking-tighter text-sm">Emily_Davis</div>
            <div className="text-xs text-blue-600 font-black uppercase tracking-widest">Product_Architect</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 2. Masonry Wall ---
export const TestimonialMasonry = () => (
  <div className="max-w-6xl mx-auto px-4 font-sans italic font-bold">
    <div className="columns-1 md:columns-3 gap-8 space-y-8">
      <div className="break-inside-avoid bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center gap-3 mb-6">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full border-2 border-white shadow" alt="" />
          <div><div className="text-sm font-black uppercase">Sarah_J</div><div className="text-[10px] text-blue-500 uppercase tracking-widest font-black">@sj_dev</div></div>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed italic">"Finally a tool that understands developer workflow. The sync logic is absolutely brilliant."</p>
      </div>
      <div className="break-inside-avoid bg-white p-8 rounded-3xl border border-slate-100 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full border-2 border-white shadow" alt="" />
          <div><div className="text-sm font-black uppercase">David_C</div><div className="text-[10px] text-blue-500 uppercase tracking-widest font-black">@dchen_logic</div></div>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed italic">"I've migrated all my nodes to this protocol. The pulse rate is unmatched in the current market."</p>
      </div>
      <div className="break-inside-avoid bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full border-2 border-white shadow" alt="" />
          <div><div className="text-sm font-black uppercase">Emily_D</div><div className="text-[10px] text-blue-500 uppercase tracking-widest font-black">@em_architect</div></div>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed italic">"Neural integration was a breeze. We're now running 100% logic-driven pipelines."</p>
      </div>
      <div className="break-inside-avoid bg-white p-8 rounded-3xl border border-slate-100 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full border-2 border-white shadow" alt="" />
          <div><div className="text-sm font-black uppercase">Mark_T</div><div className="text-[10px] text-blue-500 uppercase tracking-widest font-black">@mt_pulse</div></div>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed italic">"The best decision we made this quarter. Highly recommended for scaling node teams."</p>
      </div>
    </div>
  </div>
);

// --- 3. Spotlight Feature ---
export const TestimonialSpotlight = () => (
  <div className="max-w-6xl mx-auto px-4 font-sans italic font-bold">
    <div className="bg-slate-950 text-white p-12 md:p-20 rounded-[4rem] relative overflow-hidden flex flex-col md:flex-row items-center gap-16 border border-slate-800 shadow-2xl">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="md:w-2/5 relative z-10">
        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-white/5 shadow-2xl relative">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover" alt="CEO" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
        </div>
      </div>
      <div className="md:w-3/5 text-left relative z-10">
        <div className="text-8xl text-blue-500 opacity-20 mb-4 leading-none font-black italic">"</div>
        <h2 className="text-3xl md:text-5xl font-black leading-[1.1] mb-12 tracking-tighter uppercase italic">
          "The matrix sync reduced our manual logic overhead by <span className="text-blue-500">800%</span>. It's the only tool we trust with our core protocol."
        </h2>
        <div>
          <div className="text-2xl font-black uppercase tracking-tighter mb-1">Jennifer_Lawrence</div>
          <div className="text-sm text-blue-500 font-black uppercase tracking-[0.3em]">Chief_Architect_Stripe</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 4. Interactive Slider ---
export const TestimonialSlider = () => {
  const [active, setActive] = useState(0);
  const data = [
    { name: "Sarah_Jensen", role: "CTO_TechFlow", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop", text: "The logic sync is flawless. We reduced deployment latency by 40% in just one week." },
    { name: "David_Chen", role: "Founder_StartScale", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop", text: "Neural architecture is simply ahead of its time. Unmatched pulse rate." },
    { name: "Emily_Davis", role: "Product_Architect", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop", text: "Support is lightning fast. Resolved our sync node issue in 5 minutes." }
  ];
  return (
    <div className="max-w-4xl mx-auto p-16 rounded-[4rem] bg-white border border-slate-100 shadow-2xl font-sans italic font-bold text-center">
      <div className="flex flex-col items-center">
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-50 shadow-xl mb-10 transition-all transform hover:scale-110">
          <img src={data[active].img} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="text-yellow-400 text-2xl mb-8">★★★★★</div>
        <p className="text-2xl md:text-3xl text-slate-800 font-black tracking-tight mb-12 italic leading-relaxed">
          "{data[active].text}"
        </p>
        <div>
          <div className="text-xl font-black text-slate-950 uppercase tracking-tighter mb-1">{data[active].name}</div>
          <div className="text-xs text-blue-600 font-black uppercase tracking-[0.3em]">{data[active].role}</div>
        </div>
      </div>
      <div className="flex gap-4 justify-center mt-12">
        {data.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} className={`w-3 h-3 rounded-full transition-all duration-500 ${active === i ? 'bg-blue-600 w-12' : 'bg-slate-200'}`} />
        ))}
      </div>
    </div>
  );
};

// --- 5. Video Cards ---
export const TestimonialVideo = () => (
  <div className="max-w-6xl mx-auto px-4 font-sans italic font-bold">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map(i => (
        <div key={i} className="group cursor-pointer">
          <div className="relative aspect-video bg-slate-900 rounded-[2rem] overflow-hidden border-4 border-transparent group-hover:border-blue-600 transition-all shadow-2xl">
            <img src={`https://images.unsplash.com/photo-${i === 1 ? '1494790108377-be9c29b29330' : i === 2 ? '1507003211169-0a1dd7228f2d' : '1438761681033-6461ffad8d80'}?q=80&w=500&auto=format&fit=crop`} className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500" alt="" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-125 transition-transform duration-500">
                <svg className="w-6 h-6 fill-white ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 text-left">
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-1">Pulse_Story_0{i}</div>
              <div className="text-white text-lg font-black uppercase tracking-tighter">Scaling_Protocol_{i === 1 ? 'A' : i === 2 ? 'B' : 'C'}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- 6. Glassmorphism ---
export const TestimonialGlass = () => (
  <div className="max-w-5xl mx-auto px-4 font-sans italic font-bold relative py-20 rounded-[4rem] overflow-hidden bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 shadow-2xl">
    <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -ml-32 -mt-32"></div>
    <div className="grid md:grid-cols-2 gap-8 relative z-10">
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-10 rounded-[3rem] text-left text-white shadow-2xl hover:bg-white/20 transition-all">
        <div className="text-5xl opacity-30 mb-4 font-black">❝</div>
        <p className="text-xl mb-10 leading-relaxed font-bold">"The neural interface is seamless. We've automated our entire logic branch with zero pulse drop."</p>
        <div className="flex items-center gap-4 border-t border-white/10 pt-8">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" className="w-12 h-12 rounded-full border-2 border-white/20" alt="" />
          <div><div className="font-black uppercase tracking-tighter">Sarah_Jensen</div><div className="text-[10px] text-white/60 uppercase tracking-widest">CTO_TechFlow</div></div>
        </div>
      </div>
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-10 rounded-[3rem] text-left text-white shadow-2xl translate-y-8 hover:bg-white/20 transition-all">
        <div className="text-5xl opacity-30 mb-4 font-black">❝</div>
        <p className="text-xl mb-10 leading-relaxed font-bold">"Exceptional sync speed. This protocol has redefined how our nodes communicate globally."</p>
        <div className="flex items-center gap-4 border-t border-white/10 pt-8">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" className="w-12 h-12 rounded-full border-2 border-white/20" alt="" />
          <div><div className="font-black uppercase tracking-tighter">David_Chen</div><div className="text-[10px] text-white/60 uppercase tracking-widest">Founder_StartScale</div></div>
        </div>
      </div>
    </div>
  </div>
);

// --- 7. Cyberpunk Tech ---
export const TestimonialCyber = () => (
  <div className="max-w-6xl mx-auto px-4 font-mono italic font-bold">
    <div className="grid md:grid-cols-3 gap-6">
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-black border-2 border-cyan-500/30 p-8 rounded-2xl relative group hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all">
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/0 group-hover:border-cyan-500 transition-all m-2"></div>
          <div className="text-[10px] text-cyan-500/50 mb-6 uppercase tracking-[0.3em]">LOG_ENTRY_00{i} <span className="animate-pulse">_</span></div>
          <p className="text-cyan-100 text-sm mb-10 leading-relaxed uppercase tracking-tighter">"HANDSHAKE_SUCCESS. PROTOCOL_OPTIMIZED. DEPLOYMENT_LATENCY_REDUCED_BY_40_PERCENT."</p>
          <div className="flex items-center gap-4 grayscale group-hover:grayscale-0 transition-all">
            <div className="w-10 h-10 border border-cyan-500/30 p-1 rounded-lg">
              <img src={`https://images.unsplash.com/photo-${i === 1 ? '1494790108377-be9c29b29330' : i === 2 ? '1507003211169-0a1dd7228f2d' : '1438761681033-6461ffad8d80'}?q=80&w=100&auto=format&fit=crop`} className="w-full h-full object-cover rounded" alt="" />
            </div>
            <div className="text-[10px] text-white uppercase tracking-widest">Architect_{i === 1 ? 'Sarah' : i === 2 ? 'David' : 'Emily'}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- 8. Neumorphic Soft ---
export const TestimonialNeumorphic = () => (
  <div className="max-w-4xl mx-auto px-4 font-sans italic font-bold">
    <div className="bg-[#e0e5ec] p-16 rounded-[4rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center border border-white/20">
      <div className="w-24 h-24 mx-auto rounded-full p-2 bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] mb-10 overflow-hidden border-4 border-white/50">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" className="w-full h-full rounded-full object-cover grayscale" alt="" />
      </div>
      <div className="text-[#3b82f6] text-2xl mb-8 shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff] w-fit mx-auto px-8 py-2 rounded-full font-black uppercase tracking-widest text-xs">Rating_99.9%</div>
      <p className="text-slate-600 text-2xl leading-relaxed italic mb-10 font-bold px-4">"The soft integration protocol is revolutionary. We've synchronized all 500 nodes without a single packet loss."</p>
      <div>
        <div className="text-xl font-black text-slate-800 uppercase tracking-tighter mb-1">Sarah_Jensen</div>
        <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">CTO_at_TechFlow</div>
      </div>
    </div>
  </div>
);

// --- 9. Retro Brutalist ---
export const TestimonialBrutalist = () => (
  <div className="max-w-5xl mx-auto px-4 font-sans italic font-black uppercase text-left">
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-yellow-400 p-10 border-[8px] border-black shadow-[16px_16px_0_0_#000] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
        <div className="text-6xl mb-8">★</div>
        <p className="text-2xl mb-12 leading-none border-b-[8px] border-black pb-8">"THE_PULSE_IS_REAL. WE_REDUCED_LATENCY_BY_40_PERCENT_OVERNIGHT."</p>
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 border-[6px] border-black bg-white overflow-hidden grayscale contrast-150">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
          </div>
          <div><div className="text-xl">Sarah_J</div><div className="text-sm">CTO_FLOW</div></div>
        </div>
      </div>
      <div className="bg-rose-500 p-10 border-[8px] border-black shadow-[16px_16px_0_0_#000] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all translate-y-8">
        <div className="text-6xl mb-8">★</div>
        <p className="text-2xl mb-12 leading-none border-b-[8px] border-black pb-8">"UNMATCHED_NODE_SYNC. NEURAL_UI_IS_AHEAD_OF_THE_CURVE."</p>
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 border-[6px] border-black bg-white overflow-hidden grayscale contrast-150">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
          </div>
          <div><div className="text-xl">David_C</div><div className="text-sm">FOUNDER_SS</div></div>
        </div>
      </div>
    </div>
  </div>
);

// --- 10. Minimalist Clean ---
export const TestimonialMinimal = () => (
  <div className="max-w-4xl mx-auto px-4 font-sans italic font-bold">
    <div className="divide-y divide-slate-100 border-t border-slate-100">
      <div className="py-16 flex flex-col md:flex-row gap-12 items-start group">
        <div className="md:w-1/4">
          <div className="flex items-center gap-4">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all" alt="" />
            <div><div className="text-sm font-black uppercase tracking-tighter">Sarah_Jensen</div><div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">CTO_TechFlow</div></div>
          </div>
        </div>
        <div className="md:w-3/4">
          <p className="text-2xl text-slate-600 leading-relaxed font-medium italic">"The logic sync is flawless. We reduced deployment latency by 40% in just one week. A remarkable achievement in node orchestration."</p>
        </div>
      </div>
      <div className="py-16 flex flex-col md:flex-row gap-12 items-start group">
        <div className="md:w-1/4">
          <div className="flex items-center gap-4">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all" alt="" />
            <div><div className="text-sm font-black uppercase tracking-tighter">David_Chen</div><div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Founder_StartScale</div></div>
          </div>
        </div>
        <div className="md:w-3/4">
          <p className="text-2xl text-slate-600 leading-relaxed font-medium italic">"Exceptional interface and neural response. This protocol has redefined how our nodes communicate globally. Simply brilliant."</p>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Gallery Wrapper ---
const TestimonialGallery = () => {
  return (
    <div className="container overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-64">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-none">Trust Matrix Suite</h1>
        <p className="text-slate-500 font-bold text-xl italic lowercase">Verified logic endorsements from the digital elite.</p>
      </div>
      <div className="space-y-32 max-w-6xl mx-auto">
        
        {/* 01. Standard Grid */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const TestimonialStandard = () => (
  <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl hover:shadow-2xl transition-all group">
        <div className="flex text-yellow-400 gap-1 mb-6 text-xl">★★★★★</div>
        <p className="text-slate-600 mb-8 leading-relaxed italic text-lg">"The logic sync is flawless. We reduced deployment latency by 40% in just one week."</p>
        <div className="flex items-center gap-4 border-t border-slate-100 pt-8">
          <div className="w-14 h-14 rounded-full bg-blue-100 flex-shrink-0 overflow-hidden border-2 border-white shadow-md">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" className="w-14 h-14 rounded-full" />
          </div>
          <div>
            <div className="font-black text-slate-900 uppercase tracking-tighter text-sm">Sarah_Jensen</div>
            <div className="text-xs text-blue-600 font-black uppercase tracking-widest">CTO_at_TechFlow</div>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-[2.5rem] border border-blue-200 shadow-2xl scale-105 z-10 group">
        <div className="flex text-yellow-400 gap-1 mb-6 text-xl">★★★★★</div>
        <p className="text-slate-600 mb-8 leading-relaxed italic text-lg">"Nothing comes close to the ease of use provided here. The neural architecture is simply ahead of its time."</p>
        <div className="flex items-center gap-4 border-t border-slate-100 pt-8">
          <div className="w-14 h-14 rounded-full bg-blue-100 flex-shrink-0 overflow-hidden border-2 border-white shadow-md">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" className="w-14 h-14 rounded-full" />
          </div>
          <div>
            <div className="font-black text-slate-900 uppercase tracking-tighter text-sm">David_Chen</div>
            <div className="text-xs text-blue-600 font-black uppercase tracking-widest">Founder_StartScale</div>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl hover:shadow-2xl transition-all group">
        <div className="flex text-yellow-400 gap-1 mb-6 text-xl">★★★★★</div>
        <p className="text-slate-600 mb-8 leading-relaxed italic text-lg">"Support is lightning fast. They resolved our sync node issue in under 5 minutes."</p>
        <div className="flex items-center gap-4 border-t border-slate-100 pt-8">
          <div className="w-14 h-14 rounded-full bg-blue-100 flex-shrink-0 overflow-hidden border-2 border-white shadow-md">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" className="w-14 h-14 rounded-full" />
          </div>
          <div>
            <div className="font-black text-slate-900 uppercase tracking-tighter text-sm">Emily_Davis</div>
            <div className="text-xs text-blue-600 font-black uppercase tracking-widest">Product_Architect</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Testimonial Standard Grid -->
<div style="width: 100%; max-width: 1152px; margin: 0 auto; padding: 0 16px; font-family: sans-serif; font-style: italic; font-weight: 700;">
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; text-align: left;">
    <div style="background: white; padding: 40px; border-radius: 40px; border: 1px solid #e2e8f0; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);">
      <div style="color: #facc15; font-size: 20px; margin-bottom: 24px;">★★★★★</div>
      <p style="color: #475569; margin-bottom: 32px; font-size: 18px; line-height: 1.6;">"The logic sync is flawless. We reduced deployment latency by 40% in just one week."</p>
      <div style="display: flex; align-items: center; gap: 16px; border-top: 1px solid #f1f5f9; padding-top: 32px;">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" style="width: 56px; height: 56px; border-radius: 50%;" />
        <div>
          <div style="font-weight: 900; color: #0f172a; text-transform: uppercase; font-size: 14px;">Sarah_Jensen</div>
          <div style="font-size: 10px; color: #2563eb; font-weight: 900; text-transform: uppercase;">CTO_at_TechFlow</div>
        </div>
      </div>
    </div>
    <div style="background: white; padding: 40px; border-radius: 40px; border: 1px solid #2563eb; box-shadow: 0 25px 50px -12px rgba(37,99,235,0.2); transform: scale(1.05);">
      <div style="color: #facc15; font-size: 20px; margin-bottom: 24px;">★★★★★</div>
      <p style="color: #475569; margin-bottom: 32px; font-size: 18px; line-height: 1.6;">"Nothing comes close to the ease of use provided here. Neural architecture is simply ahead of its time."</p>
      <div style="display: flex; align-items: center; gap: 16px; border-top: 1px solid #f1f5f9; padding-top: 32px;">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" style="width: 56px; height: 56px; border-radius: 50%;" />
        <div>
          <div style="font-weight: 900; color: #0f172a; text-transform: uppercase; font-size: 14px;">David_Chen</div>
          <div style="font-size: 10px; color: #2563eb; font-weight: 900; text-transform: uppercase;">Founder_StartScale</div>
        </div>
      </div>
    </div>
    <div style="background: white; padding: 40px; border-radius: 40px; border: 1px solid #e2e8f0; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);">
      <div style="color: #facc15; font-size: 20px; margin-bottom: 24px;">★★★★★</div>
      <p style="color: #475569; margin-bottom: 32px; font-size: 18px; line-height: 1.6;">"Support is lightning fast. They resolved our sync node issue in under 5 minutes."</p>
      <div style="display: flex; align-items: center; gap: 16px; border-top: 1px solid #f1f5f9; padding-top: 32px;">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" style="width: 56px; height: 56px; border-radius: 50%;" />
        <div>
          <div style="font-weight: 900; color: #0f172a; text-transform: uppercase; font-size: 14px;">Emily_Davis</div>
          <div style="font-size: 10px; color: #2563eb; font-weight: 900; text-transform: uppercase;">Product_Architect</div>
        </div>
      </div>
    </div>
  </div>
</div>`}
              cssCode={`.testimonial-root { width: 100%; max-width: 1152px; margin: 0 auto; padding: 0 16px; font-family: sans-serif; font-style: italic; font-weight: 700; }
.testimonial-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 32px; text-align: left; }
@media (min-width: 768px) { .testimonial-grid { grid-template-columns: repeat(3, 1fr); } }
.testimonial-card { background: white; padding: 40px; border-radius: 40px; border: 1px solid #e2e8f0; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); position: relative; }
.testimonial-card:hover { transform: translateY(-8px); box-shadow: 0 25px 30px -5px rgba(0,0,0,0.15); border-color: #cbd5e1; }
.testimonial-card.featured { border-color: #2563eb; transform: scale(1.05); box-shadow: 0 25px 50px -12px rgba(37,99,235,0.2); z-index: 10; }
.star-rating { display: flex; color: #facc15; gap: 4px; margin-bottom: 24px; font-size: 20px; }
.testimonial-text { color: #475569; margin-bottom: 32px; font-size: 18px; line-height: 1.6; font-style: italic; }
.author-box { display: flex; align-items: center; gap: 16px; border-top: 1px solid #f1f5f9; padding-top: 32px; }
.author-avatar { width: 56px; height: 56px; border-radius: 50%; object-fit: cover; border: 2px solid white; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
.author-name { font-weight: 900; color: #0f172a; text-transform: uppercase; font-size: 14px; letter-spacing: -0.05em; margin-bottom: 2px; }
.author-role { font-size: 10px; color: #2563eb; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">01. Standard SaaS Matrix</span>
           <TestimonialStandard />
        </section>

        {/* 02. Masonry Wall */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const TestimonialMasonry = () => (
  <div className="max-w-6xl mx-auto px-4 font-sans italic font-bold">
    <div className="columns-1 md:columns-3 gap-8 space-y-8">
      <div className="break-inside-avoid bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center gap-3 mb-6">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" className="w-10 h-10 rounded-full" />
          <div><div className="text-sm font-black uppercase">Sarah_J</div><div className="text-[10px] text-blue-500 uppercase tracking-widest font-black">@sj_dev</div></div>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed italic">"Finally a tool that understands developer workflow. The sync logic is absolutely brilliant."</p>
      </div>
      <div className="break-inside-avoid bg-white p-8 rounded-3xl border border-slate-100 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" className="w-10 h-10 rounded-full" />
          <div><div className="text-sm font-black uppercase">David_C</div><div className="text-[10px] text-blue-500 uppercase tracking-widest font-black">@dchen_logic</div></div>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed italic">"I've migrated all my nodes to this protocol. The pulse rate is unmatched."</p>
      </div>
      <div className="break-inside-avoid bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80" className="w-10 h-10 rounded-full" />
          <div><div className="text-sm font-black uppercase">Emily_D</div><div className="text-[10px] text-blue-500 uppercase tracking-widest font-black">@em_architect</div></div>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed italic">"Neural integration was a breeze. We're now running 100% logic-driven pipelines."</p>
      </div>
      <div className="break-inside-avoid bg-white p-8 rounded-3xl border border-slate-100 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" className="w-10 h-10 rounded-full" />
          <div><div className="text-sm font-black uppercase">Mark_T</div><div className="text-[10px] text-blue-500 uppercase tracking-widest font-black">@mt_pulse</div></div>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed italic">"The best decision we made this quarter. Highly recommended for scaling node teams."</p>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Masonry Wall Layout -->
<div style="max-width: 1152px; margin: 0 auto; padding: 0 16px; font-family: sans-serif; font-style: italic; font-weight: 700;">
  <div style="column-count: 3; column-gap: 32px;">
    <!-- Card 1 -->
    <div style="break-inside: avoid; background: #f8fafc; padding: 32px; border-radius: 24px; border: 1px solid #f1f5f9; margin-bottom: 32px;">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100" style="width: 40px; height: 40px; border-radius: 50%;" />
        <div>
          <div style="font-size: 14px; font-weight: 900; text-transform: uppercase;">Sarah_J</div>
          <div style="font-size: 10px; color: #3b82f6; text-transform: uppercase;">@sj_dev</div>
        </div>
      </div>
      <p style="color: #475569; font-size: 14px; line-height: 1.6;">"Finally a tool that understands developer workflow. The sync logic is absolutely brilliant."</p>
    </div>
    <!-- Card 2 -->
    <div style="break-inside: avoid; background: white; padding: 32px; border-radius: 24px; border: 1px solid #f1f5f9; margin-bottom: 32px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100" style="width: 40px; height: 40px; border-radius: 50%;" />
        <div>
          <div style="font-size: 14px; font-weight: 900; text-transform: uppercase;">David_C</div>
          <div style="font-size: 10px; color: #3b82f6; text-transform: uppercase;">@dchen_logic</div>
        </div>
      </div>
      <p style="color: #475569; font-size: 14px; line-height: 1.6;">"I've migrated all my nodes to this protocol. The pulse rate is unmatched."</p>
    </div>
    <!-- Card 3 -->
    <div style="break-inside: avoid; background: #f8fafc; padding: 32px; border-radius: 24px; border: 1px solid #f1f5f9; margin-bottom: 32px;">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100" style="width: 40px; height: 40px; border-radius: 50%;" />
        <div>
          <div style="font-size: 14px; font-weight: 900; text-transform: uppercase;">Emily_D</div>
          <div style="font-size: 10px; color: #3b82f6; text-transform: uppercase;">@em_architect</div>
        </div>
      </div>
      <p style="color: #475569; font-size: 14px; line-height: 1.6;">"Neural integration was a breeze. We're now running 100% logic-driven pipelines."</p>
    </div>
    <!-- Card 4 -->
    <div style="break-inside: avoid; background: white; padding: 32px; border-radius: 24px; border: 1px solid #f1f5f9; margin-bottom: 32px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100" style="width: 40px; height: 40px; border-radius: 50%;" />
        <div>
          <div style="font-size: 14px; font-weight: 900; text-transform: uppercase;">Mark_T</div>
          <div style="font-size: 10px; color: #3b82f6; text-transform: uppercase;">@mt_pulse</div>
        </div>
      </div>
      <p style="color: #475569; font-size: 14px; line-height: 1.6;">"The best decision we made this quarter. Highly recommended for scaling node teams."</p>
    </div>
  </div>
</div>`}
              cssCode={`.masonry-wrapper { max-width: 1152px; margin: 0 auto; padding: 0 16px; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; }
.masonry-columns { column-count: 1; column-gap: 32px; }
@media (min-width: 768px) { .masonry-columns { column-count: 3; } }
.masonry-item { break-inside: avoid; background: #f8fafc; padding: 32px; border-radius: 24px; border: 1px solid #f1f5f9; margin-bottom: 32px; transition: all 0.3s ease; position: relative; }
.masonry-item.highlight { background: white; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); border-color: #e2e8f0; }
.masonry-item:hover { transform: translateY(-4px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); background: white; }
.masonry-header { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
.masonry-avatar { width: 40px; height: 40px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
.masonry-user { font-size: 14px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; color: #0f172a; }
.masonry-handle { font-size: 10px; color: #3b82f6; text-transform: uppercase; font-weight: 900; letter-spacing: 0.05em; }
.masonry-text { color: #475569; font-size: 14px; line-height: 1.6; font-style: italic; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">02. Wall of Love Masonry</span>
           <TestimonialMasonry />
        </section>

        {/* 03. Spotlight Feature */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const TestimonialSpotlight = () => (
  <div className="max-w-6xl mx-auto px-4 font-sans italic font-bold">
    <div className="bg-slate-950 text-white p-20 rounded-[4rem] relative overflow-hidden flex flex-col md:flex-row items-center gap-16 border border-slate-800 shadow-2xl">
      <div className="md:w-2/5 relative z-10">
        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-white/5 shadow-2xl relative">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="md:w-3/5 text-left relative z-10">
        <h2 className="text-5xl font-black leading-[1.1] mb-12 tracking-tighter uppercase italic">
          "The matrix sync reduced our manual logic overhead by <span className="text-blue-500">800%</span>. It's the only tool we trust."
        </h2>
        <div>
          <div className="text-2xl font-black uppercase tracking-tighter mb-1">Jennifer_Lawrence</div>
          <div className="text-sm text-blue-500 font-black uppercase tracking-[0.3em]">Chief_Architect_Stripe</div>
        </div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Spotlight Testimonial -->
<div style="background: #020617; color: white; padding: 80px; border-radius: 64px; border: 1px solid #1e293b; display: flex; align-items: center; gap: 64px; font-family: sans-serif; font-style: italic; font-weight: 700; position: relative; overflow: hidden;">
  <div style="position: absolute; top: 0; right: 0; width: 600px; height: 600px; background: rgba(37,99,235,0.05); border-radius: 50%; filter: blur(120px); margin: -200px -200px 0 0;"></div>
  <div style="width: 40%; position: relative; z-index: 10;">
    <div style="aspect-ratio: 4/5; border-radius: 48px; overflow: hidden; border: 4px solid rgba(255,255,255,0.05); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);">
      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop" style="width: 100%; height: 100%; object-fit: cover;" />
    </div>
  </div>
  <div style="width: 60%; text-align: left; position: relative; z-index: 10;">
    <h2 style="font-size: 48px; font-weight: 900; line-height: 1.1; text-transform: uppercase; margin-bottom: 48px; letter-spacing: -0.05em;">
      "The matrix sync reduced our manual logic overhead by <span style="color: #3b82f6;">800%</span>. It's the only tool we trust."
    </h2>
    <div style="font-size: 24px; font-weight: 900; text-transform: uppercase; margin-bottom: 4px;">Jennifer_Lawrence</div>
    <div style="color: #3b82f6; font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em;">Chief_Architect_Stripe</div>
  </div>
</div>`}
              cssCode={`.spotlight-root { background: #020617; color: white; padding: 80px; border-radius: 64px; border: 1px solid #1e293b; display: flex; flex-direction: column; align-items: center; gap: 64px; position: relative; overflow: hidden; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; }
@media (min-width: 768px) { .spotlight-root { flex-direction: row; } }
.spotlight-glow { position: absolute; top: 0; right: 0; width: 640px; height: 640px; background: rgba(37,99,235,0.08); border-radius: 50%; filter: blur(120px); margin: -256px -256px 0 0; pointer-events: none; }
.spotlight-media { width: 100%; max-width: 400px; position: relative; z-index: 10; }
@media (min-width: 768px) { .spotlight-media { width: 40%; } }
.spotlight-image-wrap { aspect-ratio: 4/5; border-radius: 48px; overflow: hidden; border: 4px solid rgba(255,255,255,0.05); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
.spotlight-img { width: 100%; height: 100%; object-fit: cover; }
.spotlight-content { width: 100%; text-align: left; position: relative; z-index: 10; }
@media (min-width: 768px) { .spotlight-content { width: 60%; } }
.spotlight-quote-icon { font-size: 96px; color: #3b82f6; opacity: 0.2; line-height: 1; margin-bottom: 16px; font-weight: 900; }
.spotlight-title { font-size: 32px; font-weight: 900; line-height: 1.1; text-transform: uppercase; margin-bottom: 48px; letter-spacing: -0.05em; }
@media (min-width: 768px) { .spotlight-title { font-size: 48px; } }
.spotlight-highlight { color: #3b82f6; }
.spotlight-author-name { font-size: 24px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.05em; margin-bottom: 4px; }
.spotlight-author-role { color: #3b82f6; font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">03. Spotlight Pulse Feature</span>
           <TestimonialSpotlight />
        </section>

        {/* 04. Interactive Slider */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const TestimonialSlider = () => {
  const [active, setActive] = React.useState(0);
  const data = [
    { name: "Sarah_Jensen", role: "CTO_TechFlow", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", text: "The logic sync is flawless. We reduced deployment latency by 40% in just one week." },
    { name: "David_Chen", role: "Founder_StartScale", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", text: "Neural architecture is simply ahead of its time. Unmatched pulse rate." },
    { name: "Emily_Davis", role: "Product_Architect", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80", text: "Support is lightning fast. Resolved our sync node issue in 5 minutes." }
  ];
  return (
    <div className="max-w-4xl mx-auto p-16 rounded-[4rem] bg-white border border-slate-100 shadow-2xl font-sans italic font-bold text-center">
      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-50 shadow-xl mx-auto mb-10 transition-all transform hover:scale-110">
        <img src={data[active].img} className="w-full h-full object-cover" />
      </div>
      <p className="text-3xl text-slate-800 font-black tracking-tight mb-12 italic leading-relaxed">"{data[active].text}"</p>
      <div className="flex gap-4 justify-center mt-12">
        {data.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} className={\`w-3 h-3 rounded-full transition-all duration-500 \${active === i ? 'bg-blue-600 w-12' : 'bg-slate-200'}\`} />
        ))}
      </div>
    </div>
  );
};`}
              htmlCode={`<!-- Testimonial Slider Wrapper -->
<div style="max-width: 896px; margin: 0 auto; padding: 64px; border-radius: 64px; background: white; border: 1px solid #f1f5f9; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1); text-align: center; font-family: sans-serif; font-style: italic; font-weight: 700;">
  <!-- Active Slide (Literal) -->
  <div style="width: 112px; height: 112px; border-radius: 50%; overflow: hidden; border: 4px solid #eff6ff; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); margin: 0 auto 40px auto;">
    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" style="width: 100%; height: 100%; object-fit: cover;" />
  </div>
  <p style="font-size: 30px; font-weight: 900; color: #1e293b; margin-bottom: 48px; letter-spacing: -0.05em; line-height: 1.4;">"The logic sync is flawless. We reduced deployment latency by 40% in just one week."</p>
  <div style="margin-bottom: 32px;">
    <div style="font-size: 20px; font-weight: 900; color: #0f172a; text-transform: uppercase;">Sarah_Jensen</div>
    <div style="font-size: 10px; color: #2563eb; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em;">CTO_at_TechFlow</div>
  </div>
  <div style="display: flex; gap: 16px; justify-content: center;">
    <div style="width: 48px; height: 12px; background: #2563eb; border-radius: 999px;"></div>
    <div style="width: 12px; height: 12px; background: #e2e8f0; border-radius: 50%;"></div>
    <div style="width: 12px; height: 12px; background: #e2e8f0; border-radius: 50%;"></div>
  </div>
</div>`}
              cssCode={`.slider-root { max-width: 896px; margin: 0 auto; padding: 64px; border-radius: 64px; background: white; border: 1px solid #f1f5f9; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1); text-align: center; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; position: relative; }
.slider-avatar-wrap { width: 112px; height: 112px; border-radius: 50%; overflow: hidden; border: 4px solid #eff6ff; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); margin: 0 auto 40px auto; transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.slider-avatar-wrap:hover { transform: scale(1.1) rotate(2deg); }
.slider-avatar-img { width: 100%; height: 100%; object-fit: cover; }
.slider-quote { font-size: 24px; font-weight: 900; color: #1e293b; margin-bottom: 48px; letter-spacing: -0.05em; line-height: 1.4; font-style: italic; }
@media (min-width: 768px) { .slider-quote { font-size: 30px; } }
.slider-dots { display: flex; gap: 16px; justify-content: center; align-items: center; }
.slider-dot { width: 12px; height: 12px; background: #e2e8f0; border-radius: 50%; cursor: pointer; transition: all 0.5s ease; border: none; padding: 0; }
.slider-dot.active { background: #2563eb; width: 48px; border-radius: 999px; }
.slider-author-name { font-size: 20px; font-weight: 900; color: #0f172a; text-transform: uppercase; letter-spacing: -0.05em; margin-bottom: 4px; }
.slider-author-role { font-size: 10px; color: #2563eb; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">04. Interactive Slider Sync</span>
           <TestimonialSlider />
        </section>

        {/* 05. Video Cards */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const TestimonialVideo = () => (
  <div className="max-w-6xl mx-auto px-4 font-sans italic font-bold">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      <div className="group cursor-pointer">
        <div className="relative aspect-video bg-slate-900 rounded-[2rem] overflow-hidden border-4 border-transparent group-hover:border-blue-600 transition-all shadow-2xl">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-125 transition-transform duration-500">
              <svg className="w-6 h-6 fill-white ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </div>
          <div className="absolute bottom-6 left-6">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-1">Pulse_Story_01</div>
            <div className="text-white text-lg font-black uppercase tracking-tighter italic">Scaling_Protocol_A</div>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer">
        <div className="relative aspect-video bg-slate-900 rounded-[2rem] overflow-hidden border-4 border-transparent group-hover:border-blue-600 transition-all shadow-2xl">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-125 transition-transform duration-500">
              <svg className="w-6 h-6 fill-white ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </div>
          <div className="absolute bottom-6 left-6">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-1">Pulse_Story_02</div>
            <div className="text-white text-lg font-black uppercase tracking-tighter italic">Scaling_Protocol_B</div>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer">
        <div className="relative aspect-video bg-slate-900 rounded-[2rem] overflow-hidden border-4 border-transparent group-hover:border-blue-600 transition-all shadow-2xl">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-125 transition-transform duration-500">
              <svg className="w-6 h-6 fill-white ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </div>
          <div className="absolute bottom-6 left-6">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-1">Pulse_Story_03</div>
            <div className="text-white text-lg font-black uppercase tracking-tighter italic">Scaling_Protocol_C</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Video Testimonial Cards -->
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; font-family: sans-serif; font-style: italic; font-weight: 700;">
  <!-- Card 1 -->
  <div style="position: relative; aspect-ratio: 16/9; background: #0f172a; border-radius: 32px; overflow: hidden; border: 4px solid transparent; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);">
    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.6; filter: grayscale(100%);" />
    <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
      <div style="width: 64px; height: 64px; background: #2563eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3);">
        <svg style="width: 24px; height: 24px; fill: white;" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
      </div>
    </div>
    <div style="position: absolute; bottom: 24px; left: 24px;">
      <div style="font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; color: #60a5fa; margin-bottom: 4px;">Pulse_Story_01</div>
      <div style="color: white; font-size: 18px; font-weight: 900; text-transform: uppercase;">Scaling_Protocol_A</div>
    </div>
  </div>
  <!-- Card 2 -->
  <div style="position: relative; aspect-ratio: 16/9; background: #0f172a; border-radius: 32px; overflow: hidden; border: 4px solid transparent; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);">
    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.6; filter: grayscale(100%);" />
    <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
      <div style="width: 64px; height: 64px; background: #2563eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3);">
        <svg style="width: 24px; height: 24px; fill: white;" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
      </div>
    </div>
    <div style="position: absolute; bottom: 24px; left: 24px;">
      <div style="font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; color: #60a5fa; margin-bottom: 4px;">Pulse_Story_02</div>
      <div style="color: white; font-size: 18px; font-weight: 900; text-transform: uppercase;">Scaling_Protocol_B</div>
    </div>
  </div>
  <!-- Card 3 -->
  <div style="position: relative; aspect-ratio: 16/9; background: #0f172a; border-radius: 32px; overflow: hidden; border: 4px solid transparent; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);">
    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.6; filter: grayscale(100%);" />
    <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
      <div style="width: 64px; height: 64px; background: #2563eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3);">
        <svg style="width: 24px; height: 24px; fill: white;" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
      </div>
    </div>
    <div style="position: absolute; bottom: 24px; left: 24px;">
      <div style="font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; color: #60a5fa; margin-bottom: 4px;">Pulse_Story_03</div>
      <div style="color: white; font-size: 18px; font-weight: 900; text-transform: uppercase;">Scaling_Protocol_C</div>
    </div>
  </div>
</div>`}
              cssCode={`.video-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 32px; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; }
@media (min-width: 768px) { .video-grid { grid-template-columns: repeat(3, 1fr); } }
.video-card { position: relative; aspect-ratio: 16/9; background: #0f172a; border-radius: 32px; overflow: hidden; border: 4px solid transparent; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer; }
.video-card:hover { border-color: #2563eb; transform: scale(1.02); }
.video-card img { width: 100%; height: 100%; object-fit: cover; opacity: 0.6; filter: grayscale(100%); transition: all 0.6s ease; }
.video-card:hover img { filter: grayscale(0%); opacity: 0.8; transform: scale(1.1); }
.play-overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 10; }
.play-btn { width: 64px; height: 64px; background: #2563eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3); transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
.video-card:hover .play-btn { transform: scale(1.25); background: #1d4ed8; box-shadow: 0 0 30px rgba(37,99,235,0.6); }
.play-icon { width: 24px; height: 24px; fill: white; margin-left: 4px; }
.video-info { position: absolute; bottom: 24px; left: 24px; text-align: left; z-index: 20; }
.video-label { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; color: #60a5fa; margin-bottom: 4px; text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
.video-title { color: white; font-size: 18px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; text-shadow: 0 2px 4px rgba(0,0,0,0.5); }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">05. Video Pulse Cards</span>
           <TestimonialVideo />
        </section>

        {/* 06. Glassmorphism */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const TestimonialGlass = () => (
  <div className="max-w-5xl mx-auto px-4 font-sans italic font-bold relative py-20 rounded-[4rem] overflow-hidden bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 shadow-2xl text-left">
    <div className="grid md:grid-cols-2 gap-8 relative z-10">
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-10 rounded-[3rem] text-white shadow-2xl hover:bg-white/20 transition-all">
        <div className="text-5xl opacity-30 mb-4 font-black">❝</div>
        <p className="text-xl mb-10 leading-relaxed font-bold">"The neural interface is seamless. We've automated our entire logic branch."</p>
        <div className="flex items-center gap-4 border-t border-white/10 pt-8">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" className="w-12 h-12 rounded-full border-2 border-white/20" />
          <div><div className="font-black uppercase tracking-tighter">Sarah_Jensen</div><div className="text-[10px] text-white/60 uppercase tracking-widest">CTO_TechFlow</div></div>
        </div>
      </div>
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-10 rounded-[3rem] text-white shadow-2xl translate-y-8 hover:bg-white/20 transition-all">
        <div className="text-5xl opacity-30 mb-4 font-black">❝</div>
        <p className="text-xl mb-10 leading-relaxed font-bold">"Exceptional sync speed. Redefined how our nodes communicate globally."</p>
        <div className="flex items-center gap-4 border-t border-white/10 pt-8">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" className="w-12 h-12 rounded-full border-2 border-white/20" />
          <div><div className="font-black uppercase tracking-tighter">David_Chen</div><div className="text-[10px] text-white/60 uppercase tracking-widest">Founder_StartScale</div></div>
        </div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Glassmorphic Testimonials -->
<div style="position: relative; width: 100%; max-width: 1024px; margin: 0 auto; padding: 80px 48px; border-radius: 64px; overflow: hidden; background: linear-gradient(45deg, #4f46e5, #9333ea, #db2777); font-family: sans-serif; font-style: italic; font-weight: 700;">
  <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; position: relative; z-index: 10;">
    <!-- Card 1 -->
    <div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.2); padding: 40px; border-radius: 48px; text-align: left; color: white;">
      <div style="font-size: 48px; opacity: 0.3; margin-bottom: 16px; font-weight: 900;">❝</div>
      <p style="font-size: 20px; line-height: 1.6; margin-bottom: 40px; font-weight: 700;">"The neural interface is seamless. We've automated our entire logic branch with zero pulse drop."</p>
      <div style="display: flex; align-items: center; gap: 16px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 32px;">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100" style="width: 48px; height: 48px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.2);" />
        <div>
          <div style="font-weight: 900; text-transform: uppercase; font-size: 14px;">Sarah_Jensen</div>
          <div style="font-size: 10px; color: rgba(255,255,255,0.6); text-transform: uppercase;">CTO_TechFlow</div>
        </div>
      </div>
    </div>
    <!-- Card 2 -->
    <div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.2); padding: 40px; border-radius: 48px; text-align: left; color: white; transform: translateY(32px);">
      <div style="font-size: 48px; opacity: 0.3; margin-bottom: 16px; font-weight: 900;">❝</div>
      <p style="font-size: 20px; line-height: 1.6; margin-bottom: 40px; font-weight: 700;">"Exceptional sync speed. This protocol has redefined how our nodes communicate globally."</p>
      <div style="display: flex; align-items: center; gap: 16px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 32px;">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100" style="width: 48px; height: 48px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.2);" />
        <div>
          <div style="font-weight: 900; text-transform: uppercase; font-size: 14px;">David_Chen</div>
          <div style="font-size: 10px; color: rgba(255,255,255,0.6); text-transform: uppercase;">Founder_StartScale</div>
        </div>
      </div>
    </div>
  </div>
</div>`}
              cssCode={`.glass-root { position: relative; width: 100%; max-width: 1024px; margin: 0 auto; padding: 80px 48px; border-radius: 64px; overflow: hidden; background: linear-gradient(45deg, #4f46e5, #9333ea, #db2777); font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
.glass-glow { position: absolute; top: 0; left: 0; width: 256px; height: 256px; background: rgba(255,255,255,0.2); border-radius: 50%; filter: blur(64px); margin-left: -128px; margin-top: -128px; pointer-events: none; }
.glass-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 32px; position: relative; z-index: 10; }
@media (min-width: 768px) { .glass-grid { grid-template-columns: repeat(2, 1fr); } }
.glass-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.2); padding: 40px; border-radius: 48px; text-align: left; color: white; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.2); transition: all 0.4s ease; }
.glass-card:hover { transform: translateY(-8px); background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.3); }
.glass-quote-icon { font-size: 48px; opacity: 0.3; margin-bottom: 16px; font-weight: 900; line-height: 1; }
.glass-text { font-size: 20px; line-height: 1.6; margin-bottom: 40px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.2); }
.glass-author { display: flex; align-items: center; gap: 16px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 32px; }
.glass-avatar { width: 48px; height: 48px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.2); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
.glass-name { font-weight: 900; text-transform: uppercase; font-size: 14px; letter-spacing: -0.02em; }
.glass-role { font-size: 10px; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.1em; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">06. Glassmorphism Neural Suite</span>
           <TestimonialGlass />
        </section>

        {/* 07. Cyberpunk Tech */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const TestimonialCyber = () => (
  <div className="max-w-6xl mx-auto px-4 font-mono italic font-bold">
    <div className="grid md:grid-cols-3 gap-6 text-left">
      <div className="bg-black border-2 border-cyan-500/30 p-8 rounded-2xl relative group hover:border-cyan-500 transition-all">
        <div className="text-[10px] text-cyan-500/50 mb-6 uppercase tracking-[0.3em]">LOG_ENTRY_001 <span className="animate-pulse">_</span></div>
        <p className="text-cyan-100 text-sm mb-10 leading-relaxed uppercase tracking-tighter">"HANDSHAKE_SUCCESS. PROTOCOL_OPTIMIZED."</p>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 border border-cyan-500/30 p-1 rounded-lg grayscale group-hover:grayscale-0 transition-all">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" className="w-full h-full object-cover rounded" />
          </div>
          <div className="text-[10px] text-white uppercase tracking-widest">Architect_Sarah</div>
        </div>
      </div>
      <div className="bg-black border-2 border-cyan-500/30 p-8 rounded-2xl relative group hover:border-cyan-500 transition-all">
        <div className="text-[10px] text-cyan-500/50 mb-6 uppercase tracking-[0.3em]">LOG_ENTRY_002 <span className="animate-pulse">_</span></div>
        <p className="text-cyan-100 text-sm mb-10 leading-relaxed uppercase tracking-tighter">"NEURAL ARCHITECTURE IS SIMPLY AHEAD OF ITS TIME."</p>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 border border-cyan-500/30 p-1 rounded-lg grayscale group-hover:grayscale-0 transition-all">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" className="w-full h-full object-cover rounded" />
          </div>
          <div className="text-[10px] text-white uppercase tracking-widest">Architect_David</div>
        </div>
      </div>
      <div className="bg-black border-2 border-cyan-500/30 p-8 rounded-2xl relative group hover:border-cyan-500 transition-all">
        <div className="text-[10px] text-cyan-500/50 mb-6 uppercase tracking-[0.3em]">LOG_ENTRY_003 <span className="animate-pulse">_</span></div>
        <p className="text-cyan-100 text-sm mb-10 leading-relaxed uppercase tracking-tighter">"SUPPORT IS LIGHTNING FAST. RESOLVED ISSUES IN 5 MINS."</p>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 border border-cyan-500/30 p-1 rounded-lg grayscale group-hover:grayscale-0 transition-all">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80" className="w-full h-full object-cover rounded" />
          </div>
          <div className="text-[10px] text-white uppercase tracking-widest">Architect_Emily</div>
        </div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Cyberpunk Log Entries -->
<div style="background: black; padding: 48px; border-radius: 32px; font-family: monospace; font-style: italic; font-weight: 700; color: white; text-align: left;">
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
    <!-- Entry 1 -->
    <div style="background: #000; padding: 32px; border: 2px solid #0891b2; border-radius: 16px; box-shadow: 0 0 20px rgba(6,182,212,0.1); position: relative;">
      <div style="font-size: 10px; color: rgba(6,182,212,0.5); text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 24px;">LOG_ENTRY_001</div>
      <p style="font-size: 14px; color: #cffafe; line-height: 1.6; text-transform: uppercase; margin-bottom: 40px; border-left: 2px solid rgba(6,182,212,0.2); padding-left: 16px;">"HANDSHAKE_SUCCESS. PROTOCOL_OPTIMIZED. DEPLOYMENT_LATENCY_REDUCED_BY_40_PERCENT."</p>
      <div style="display: flex; align-items: center; gap: 16px;">
        <div style="width: 40px; height: 40px; border: 1px solid #0891b2; padding: 4px; border-radius: 8px;">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" style="width: 100%; height: 100%; object-fit: cover; border-radius: 4px;" />
        </div>
        <div style="font-size: 10px; color: white; text-transform: uppercase; letter-spacing: 0.2em; font-weight: 900;">Architect_Sarah</div>
      </div>
    </div>
    <!-- Entry 2 -->
    <div style="background: #000; padding: 32px; border: 2px solid rgba(6,182,212,0.3); border-radius: 16px; position: relative;">
      <div style="font-size: 10px; color: rgba(6,182,212,0.5); text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 24px;">LOG_ENTRY_002</div>
      <p style="font-size: 14px; color: #cffafe; line-height: 1.6; text-transform: uppercase; margin-bottom: 40px; border-left: 2px solid rgba(6,182,212,0.2); padding-left: 16px;">"NEURAL ARCHITECTURE IS SIMPLY AHEAD OF ITS TIME. UNMATCHED PULSE RATE."</p>
      <div style="display: flex; align-items: center; gap: 16px;">
        <div style="width: 40px; height: 40px; border: 1px solid rgba(6,182,212,0.3); padding: 4px; border-radius: 8px;">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" style="width: 100%; height: 100%; object-fit: cover; border-radius: 4px;" />
        </div>
        <div style="font-size: 10px; color: white; text-transform: uppercase; letter-spacing: 0.2em; font-weight: 900;">Architect_David</div>
      </div>
    </div>
    <!-- Entry 3 -->
    <div style="background: #000; padding: 32px; border: 2px solid rgba(6,182,212,0.3); border-radius: 16px; position: relative;">
      <div style="font-size: 10px; color: rgba(6,182,212,0.5); text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 24px;">LOG_ENTRY_003</div>
      <p style="font-size: 14px; color: #cffafe; line-height: 1.6; text-transform: uppercase; margin-bottom: 40px; border-left: 2px solid rgba(6,182,212,0.2); padding-left: 16px;">"SUPPORT IS LIGHTNING FAST. RESOLVED OUR SYNC NODE ISSUE IN 5 MINUTES."</p>
      <div style="display: flex; align-items: center; gap: 16px;">
        <div style="width: 40px; height: 40px; border: 1px solid rgba(6,182,212,0.3); padding: 4px; border-radius: 8px;">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80" style="width: 100%; height: 100%; object-fit: cover; border-radius: 4px;" />
        </div>
        <div style="font-size: 10px; color: white; text-transform: uppercase; letter-spacing: 0.2em; font-weight: 900;">Architect_Emily</div>
      </div>
    </div>
  </div>
</div>`}
              cssCode={`.cyber-root { background: black; padding: 48px; border-radius: 32px; font-family: 'JetBrains Mono', monospace; font-style: italic; font-weight: 700; color: white; text-align: left; }
.cyber-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 24px; }
@media (min-width: 768px) { .cyber-grid { grid-template-columns: repeat(3, 1fr); } }
.cyber-item { background: #000; padding: 32px; border: 2px solid rgba(6,182,212,0.3); border-radius: 16px; position: relative; transition: all 0.3s ease; overflow: hidden; }
.cyber-item:hover { border-color: #06b6d4; box-shadow: 0 0 30px rgba(6,182,212,0.2); transform: translateY(-4px); }
.cyber-item::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, transparent, #06b6d4, transparent); transform: translateX(-100%); transition: 0.5s; }
.cyber-item:hover::before { transform: translateX(100%); }
.cyber-log-id { font-size: 10px; color: rgba(6,182,212,0.5); text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 24px; display: flex; align-items: center; gap: 8px; }
.cyber-cursor { width: 6px; height: 12px; background: #06b6d4; animation: cyber-blink 1s infinite; }
@keyframes cyber-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
.cyber-text { font-size: 14px; color: #cffafe; line-height: 1.6; text-transform: uppercase; margin-bottom: 40px; letter-spacing: -0.02em; border-left: 2px solid rgba(6,182,212,0.2); padding-left: 16px; }
.cyber-author { display: flex; align-items: center; gap: 16px; filter: grayscale(100%); transition: 0.3s; }
.cyber-item:hover .cyber-author { filter: grayscale(0%); }
.cyber-avatar-wrap { width: 40px; height: 40px; border: 1px solid rgba(6,182,212,0.3); padding: 4px; border-radius: 8px; }
.cyber-avatar-img { width: 100%; height: 100%; object-fit: cover; border-radius: 4px; }
.cyber-author-name { font-size: 10px; color: white; text-transform: uppercase; letter-spacing: 0.2em; font-weight: 900; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">07. Cyberpunk Tech Log</span>
           <TestimonialCyber />
        </section>

        {/* 08. Neumorphic Soft */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const TestimonialNeumorphic = () => (
  <div className="max-w-4xl mx-auto px-4 font-sans italic font-bold">
    <div className="bg-[#e0e5ec] p-16 rounded-[4rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center border border-white/20">
      <div className="w-24 h-24 mx-auto rounded-full p-2 bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] mb-10 overflow-hidden border-4 border-white/50">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" className="w-full h-full rounded-full object-cover grayscale" />
      </div>
      <div className="text-[#3b82f6] text-2xl mb-8 shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff] px-8 py-2 rounded-full font-black uppercase text-xs">Rating_99.9%</div>
      <p className="text-slate-600 text-2xl leading-relaxed italic mb-10 font-bold px-4">"The soft integration protocol is revolutionary. We've synchronized all 500 nodes without a single packet loss."</p>
      <div>
        <div className="text-xl font-black text-slate-800 uppercase tracking-tighter mb-1">Sarah_Jensen</div>
        <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">CTO_at_TechFlow</div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Neumorphic Testimonial -->
<div style="background: #e0e5ec; padding: 64px; border-radius: 64px; text-align: center; font-family: sans-serif; font-style: italic; font-weight: 700; box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; max-width: 800px; margin: 0 auto; border: 1px solid rgba(255,255,255,0.2);">
  <div style="width: 112px; height: 112px; margin: 0 auto 40px auto; padding: 8px; border-radius: 50%; background: #e0e5ec; box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff; overflow: hidden; border: 4px solid rgba(255,255,255,0.5);">
    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200" style="width: 100%; height: 100%; border-radius: 50%; filter: grayscale(100%);" />
  </div>
  <div style="background: #e0e5ec; box-shadow: 2px 2px 4px #bebebe, -2px -2px 4px #ffffff; width: fit-content; margin: 0 auto 32px auto; padding: 8px 32px; border-radius: 999px; color: #2563eb; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em;">Rating_99.9%</div>
  <p style="font-size: 24px; color: #4b5563; line-height: 1.6; margin-bottom: 40px; padding: 0 16px; font-style: italic;">"The soft integration protocol is revolutionary. We've synchronized all 500 nodes without a single packet loss."</p>
  <div style="font-weight: 900; color: #1e293b; text-transform: uppercase; font-size: 20px; letter-spacing: -0.05em; margin-bottom: 4px;">Sarah_Jensen</div>
  <div style="color: #94a3b8; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em;">CTO_at_TechFlow</div>
</div>`}
              cssCode={`.neu-root { background: #e0e5ec; min-height: 400px; display: flex; align-items: center; justify-content: center; padding: 48px; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; }
.neu-card { background: #e0e5ec; padding: 64px; border-radius: 64px; text-align: center; box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; max-width: 800px; border: 1px solid rgba(255,255,255,0.2); transition: all 0.4s ease; }
.neu-card:hover { transform: scale(1.01); box-shadow: 25px 25px 70px #b8b8b8, -25px -25px 70px #ffffff; }
.neu-avatar-inset { width: 112px; height: 112px; margin: 0 auto 40px auto; padding: 8px; border-radius: 50%; background: #e0e5ec; box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff; overflow: hidden; border: 4px solid rgba(255,255,255,0.5); }
.neu-img { width: 100%; height: 100%; border-radius: 50%; filter: grayscale(100%); transition: 0.5s; }
.neu-card:hover .neu-img { filter: grayscale(0%); transform: scale(1.1); }
.neu-pill { background: #e0e5ec; box-shadow: 2px 2px 4px #bebebe, -2px -2px 4px #ffffff; width: fit-content; margin: 0 auto 32px auto; padding: 8px 32px; border-radius: 999px; color: #2563eb; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; }
.neu-text { font-size: 24px; color: #4b5563; line-height: 1.6; margin-bottom: 40px; padding: 0 16px; font-style: italic; }
.neu-author-name { font-weight: 900; color: #1e293b; text-transform: uppercase; font-size: 20px; letter-spacing: -0.05em; margin-bottom: 4px; }
.neu-author-role { color: #94a3b8; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">08. Neumorphic Soft Pulse</span>
           <TestimonialNeumorphic />
        </section>

        {/* 09. Retro Brutalist */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const TestimonialBrutalist = () => (
  <div className="max-w-5xl mx-auto px-4 font-sans italic font-black uppercase text-left">
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-yellow-400 p-10 border-[8px] border-black shadow-[16px_16px_0_0_#000] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
        <div className="text-6xl mb-8">★</div>
        <p className="text-2xl mb-12 leading-none border-b-[8px] border-black pb-8 italic">"THE_PULSE_IS_REAL."</p>
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 border-[6px] border-black bg-white overflow-hidden grayscale contrast-150">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" className="w-full h-full object-cover" />
          </div>
          <div><div className="text-xl">Sarah_J</div><div className="text-sm">CTO_FLOW</div></div>
        </div>
      </div>
      <div className="bg-rose-500 p-10 border-[8px] border-black shadow-[16px_16px_0_0_#000] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all translate-y-8">
        <div className="text-6xl mb-8">★</div>
        <p className="text-2xl mb-12 leading-none border-b-[8px] border-black pb-8 italic">"UNMATCHED_NODE_SYNC."</p>
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 border-[6px] border-black bg-white overflow-hidden grayscale contrast-150">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" className="w-full h-full object-cover" />
          </div>
          <div><div className="text-xl">David_C</div><div className="text-sm">FOUNDER_SS</div></div>
        </div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Retro Brutalist Testimonials -->
<div style="max-width: 1024px; margin: 0 auto; display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; font-family: sans-serif; font-style: italic; font-weight: 900; text-transform: uppercase; text-align: left;">
  <!-- Card 1 -->
  <div style="background: #facc15; padding: 40px; border: 8px solid black; box-shadow: 16px 16px 0 0 #000; position: relative;">
    <div style="font-size: 48px; margin-bottom: 32px;">★</div>
    <p style="font-size: 24px; line-height: 1; border-bottom: 8px solid black; padding-bottom: 32px; margin-bottom: 48px;">"THE_PULSE_IS_REAL. WE_REDUCED_LATENCY_BY_40_PERCENT_OVERNIGHT."</p>
    <div style="display: flex; align-items: center; gap: 24px;">
      <div style="width: 64px; height: 64px; border: 6px solid black; background: white; overflow: hidden;">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200" style="width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(150%);" />
      </div>
      <div><div style="font-size: 20px;">Sarah_J</div><div style="font-size: 12px;">CTO_FLOW</div></div>
    </div>
  </div>
  <!-- Card 2 -->
  <div style="background: #f43f5e; padding: 40px; border: 8px solid black; box-shadow: 16px 16px 0 0 #000; transform: translateY(32px); position: relative;">
    <div style="font-size: 48px; margin-bottom: 32px;">★</div>
    <p style="font-size: 24px; line-height: 1; border-bottom: 8px solid black; padding-bottom: 32px; margin-bottom: 48px;">"UNMATCHED_NODE_SYNC. NEURAL_UI_IS_AHEAD_OF_THE_CURVE."</p>
    <div style="display: flex; align-items: center; gap: 24px;">
      <div style="width: 64px; height: 64px; border: 6px solid black; background: white; overflow: hidden;">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" style="width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(150%);" />
      </div>
      <div><div style="font-size: 20px;">David_C</div><div style="font-size: 12px;">FOUNDER_SS</div></div>
    </div>
  </div>
</div>`}
              cssCode={`.brutal-root { max-width: 1024px; margin: 0 auto; padding: 48px 16px; font-family: 'Archivo Black', sans-serif; font-style: italic; font-weight: 900; text-transform: uppercase; text-align: left; }
.brutal-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 32px; }
@media (min-width: 768px) { .brutal-grid { grid-template-columns: repeat(2, 1fr); } }
.brutal-card { background: #facc15; padding: 40px; border: 8px solid black; box-shadow: 16px 16px 0 0 #000; transition: all 0.1s ease; cursor: pointer; position: relative; }
.brutal-card.rose { background: #f43f5e; transform: translateY(32px); }
.brutal-card:hover { transform: translate(8px, 8px); box-shadow: 8px 8px 0 0 #000; }
.brutal-card:active { transform: translate(16px, 16px); box-shadow: 0px 0px 0_0_#000; }
.brutal-star { font-size: 48px; margin-bottom: 32px; line-height: 1; }
.brutal-quote { font-size: 24px; line-height: 1; border-bottom: 8px solid black; padding-bottom: 32px; margin-bottom: 48px; font-weight: 900; }
.brutal-author { display: flex; align-items: center; gap: 24px; }
.brutal-avatar-wrap { width: 64px; height: 64px; border: 6px solid black; background: white; overflow: hidden; }
.brutal-avatar-img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(150%); transition: 0.3s; }
.brutal-card:hover .brutal-avatar-img { filter: grayscale(0%) contrast(100%); }
.brutal-name { font-size: 20px; letter-spacing: -0.05em; }
.brutal-role { font-size: 12px; opacity: 0.7; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">09. Retro Brutalist Matrix</span>
           <TestimonialBrutalist />
        </section>

        {/* 10. Minimalist Clean */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/test border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const TestimonialMinimal = () => (
  <div className="max-w-4xl mx-auto px-4 font-sans italic font-bold text-left">
    <div className="divide-y divide-slate-100 border-t border-slate-100">
      <div className="py-16 flex flex-col md:flex-row gap-12 items-start group">
        <div className="md:w-1/4">
          <div className="flex items-center gap-4">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" className="w-10 h-10 rounded-full grayscale" />
            <div><div className="text-sm font-black uppercase tracking-tighter">Sarah_Jensen</div><div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">CTO_TechFlow</div></div>
          </div>
        </div>
        <div className="md:w-3/4">
          <p className="text-2xl text-slate-600 leading-relaxed font-medium italic">"The logic sync is flawless. We reduced deployment latency by 40%."</p>
        </div>
      </div>
      <div className="py-16 flex flex-col md:flex-row gap-12 items-start group">
        <div className="md:w-1/4">
          <div className="flex items-center gap-4">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" className="w-10 h-10 rounded-full grayscale" />
            <div><div className="text-sm font-black uppercase tracking-tighter">David_Chen</div><div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Founder_StartScale</div></div>
          </div>
        </div>
        <div className="md:w-3/4">
          <p className="text-2xl text-slate-600 leading-relaxed font-medium italic">"Exceptional interface and neural response. Redefined our communications."</p>
        </div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Minimalist Testimonial List -->
<div style="max-width: 896px; margin: 0 auto; border-top: 1px solid #f1f5f9; font-family: sans-serif; font-style: italic; font-weight: 700; text-align: left;">
  <!-- Item 1 -->
  <div style="padding: 64px 0; border-bottom: 1px solid #f1f5f9; display: flex; gap: 48px; align-items: start;">
    <div style="width: 25%;">
      <div style="display: flex; align-items: center; gap: 16px;">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100" style="width: 40px; height: 40px; border-radius: 50%; filter: grayscale(100%);" />
        <div>
          <div style="font-weight: 900; text-transform: uppercase; font-size: 14px; letter-spacing: -0.05em;">Sarah_Jensen</div>
          <div style="font-size: 10px; color: #94a3b8; font-weight: 900; text-transform: uppercase;">CTO_TechFlow</div>
        </div>
      </div>
    </div>
    <div style="width: 75%;">
      <p style="font-size: 24px; color: #475569; line-height: 1.6; font-weight: 500; font-style: italic;">"The logic sync is flawless. We reduced deployment latency by 40% in just one week."</p>
    </div>
  </div>
  <!-- Item 2 -->
  <div style="padding: 64px 0; border-bottom: 1px solid #f1f5f9; display: flex; gap: 48px; align-items: start;">
    <div style="width: 25%;">
      <div style="display: flex; align-items: center; gap: 16px;">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100" style="width: 40px; height: 40px; border-radius: 50%; filter: grayscale(100%);" />
        <div>
          <div style="font-weight: 900; text-transform: uppercase; font-size: 14px; letter-spacing: -0.05em;">David_Chen</div>
          <div style="font-size: 10px; color: #94a3b8; font-weight: 900; text-transform: uppercase;">Founder_StartScale</div>
        </div>
      </div>
    </div>
    <div style="width: 75%;">
      <p style="font-size: 24px; color: #475569; line-height: 1.6; font-weight: 500; font-style: italic;">"Exceptional interface and neural response. This protocol has redefined how our nodes communicate."</p>
    </div>
  </div>
</div>`}
              cssCode={`.minimal-root { max-width: 896px; margin: 0 auto; border-top: 1px solid #f1f5f9; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; text-align: left; }
.minimal-item { padding: 64px 0; border-bottom: 1px solid #f1f5f9; display: flex; flex-direction: column; gap: 48px; align-items: start; transition: all 0.4s ease; cursor: default; }
@media (min-width: 768px) { .minimal-item { flex-direction: row; } }
.minimal-item:hover { background: #f8fafc; padding-left: 32px; padding-right: 32px; border-radius: 16px; margin-left: -32px; margin-right: -32px; }
.minimal-author-wrap { width: 100%; display: flex; align-items: center; gap: 16px; }
@media (min-width: 768px) { .minimal-author-wrap { width: 25%; } }
.minimal-avatar { width: 40px; height: 40px; border-radius: 50%; filter: grayscale(100%); transition: filter 0.4s ease; object-fit: cover; }
.minimal-item:hover .minimal-avatar { filter: grayscale(0%); }
.minimal-author-meta { display: flex; flex-direction: column; }
.minimal-name { font-weight: 900; text-transform: uppercase; font-size: 14px; letter-spacing: -0.05em; color: #0f172a; }
.minimal-role { font-size: 10px; color: #94a3b8; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; }
.minimal-content { width: 100%; }
@media (min-width: 768px) { .minimal-content { width: 75%; } }
.minimal-text { font-size: 20px; color: #475569; line-height: 1.6; font-weight: 500; font-style: italic; transition: color 0.4s ease; }
@media (min-width: 768px) { .minimal-text { font-size: 24px; } }
.minimal-item:hover .minimal-text { color: #1e293b; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">10. Minimalist Clean Logic</span>
           <TestimonialMinimal />
        </section>

      </div>
    </div>
  );
};

export default TestimonialGallery;