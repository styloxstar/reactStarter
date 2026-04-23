import React, { useState } from 'react';
import CopyButton from '../CopyButton';

// --- Shared Icons ---
const BoltIcon = ({ className }) => (
  <svg className={className || "w-6 h-6 text-blue-600"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const ChartIcon = ({ className }) => (
  <svg className={className || "w-6 h-6 text-indigo-600"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>
);

const ShieldIcon = ({ className }) => (
  <svg className={className || "w-6 h-6 text-emerald-600"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

// --- 1. The SaaS Standard ---
export const FeatureStandard = () => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 font-sans italic font-bold">
    <div className="flex flex-col md:flex-row items-center gap-20">
      <div className="w-full md:w-1/2">
        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-10 shadow-inner">
          <BoltIcon className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-slate-950 mb-8 tracking-tighter uppercase leading-[0.9]">
          Automate_ <br/> <span className="text-blue-600">Logic_Flow</span>
        </h2>
        <p className="text-slate-500 mb-10 text-xl leading-relaxed lowercase font-medium">
          Eliminate manual friction nodes. Our engine executes complex sequences with zero latency.
        </p>
        <div className="space-y-4 mb-12">
          <div className="flex items-center gap-4 text-slate-900 uppercase text-xs tracking-widest font-black">
            <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-[10px]">01</span>
            Real_Time_Sync_Protocol
          </div>
          <div className="flex items-center gap-4 text-slate-900 uppercase text-xs tracking-widest font-black">
            <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-[10px]">02</span>
            Custom_Trigger_Nodes
          </div>
          <div className="flex items-center gap-4 text-slate-900 uppercase text-xs tracking-widest font-black">
            <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-[10px]">03</span>
            Global_API_Mesh
          </div>
        </div>
        <button className="px-10 py-5 bg-slate-950 text-white font-black rounded-2xl hover:bg-blue-600 transition-all uppercase text-xs tracking-widest active:scale-95 shadow-2xl">
          Initialize_Control →
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <div className="rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden bg-slate-50 p-8 relative group">
           <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 transition-transform group-hover:-translate-y-4 duration-500">
              <div className="h-4 w-1/3 bg-slate-100 rounded-full mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 w-full bg-slate-50 rounded-full"></div>
                <div className="h-4 w-5/6 bg-slate-50 rounded-full"></div>
              </div>
              <div className="mt-12 flex gap-6">
                 <div className="h-24 w-1/2 bg-blue-50 rounded-2xl border-2 border-blue-100 flex items-center justify-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full animate-pulse opacity-20"></div>
                 </div>
                 <div className="h-24 w-1/2 bg-indigo-50 rounded-2xl border-2 border-indigo-100 flex items-center justify-center">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full animate-pulse opacity-20"></div>
                 </div>
              </div>
           </div>
           <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600 rounded-full blur-[80px] opacity-10"></div>
        </div>
      </div>
    </div>
  </div>
);

// --- 2. The Bento Grid (Modern) ---
export const FeatureBento = () => (
  <div className="bg-slate-50 p-12 rounded-[3rem] font-sans italic font-bold">
    <div className="text-center mb-20">
      <h2 className="text-6xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-6">Matrix_Features</h2>
      <p className="text-slate-500 text-xl lowercase font-medium italic">High-performance architecture wrapped in a premium interface.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Big Card */}
      <div className="md:col-span-2 bg-white rounded-[2.5rem] p-12 border border-slate-100 shadow-xl relative overflow-hidden h-[450px]">
        <div className="relative z-10">
          <h3 className="text-4xl font-black mb-4 uppercase tracking-tight text-slate-950">Global_Analytics_Node</h3>
          <p className="text-slate-500 text-lg lowercase max-w-sm font-medium">Synchronize user data streams from across the digital grid in real-time.</p>
        </div>
        <div className="absolute right-[-10%] bottom-[-10%] w-[70%] h-[70%] bg-slate-50 rounded-tl-[5rem] border-t-4 border-l-4 border-slate-100 p-10 flex items-end">
           <div className="w-full h-full bg-white rounded-3xl shadow-2xl p-8 flex flex-col justify-between">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <div className="w-2 h-2 rounded-full bg-slate-100"></div>
              </div>
              <div className="flex items-end gap-3 h-32 justify-between">
                 <div className="w-full bg-blue-500 rounded-t-xl" style={{height: '40%'}}></div>
                 <div className="w-full bg-blue-600 rounded-t-xl" style={{height: '70%'}}></div>
                 <div className="w-full bg-blue-400 rounded-t-xl" style={{height: '50%'}}></div>
                 <div className="w-full bg-blue-700 rounded-t-xl" style={{height: '90%'}}></div>
                 <div className="w-full bg-blue-500 rounded-t-xl" style={{height: '60%'}}></div>
              </div>
           </div>
        </div>
      </div>

      {/* Tall Card */}
      <div className="md:row-span-1 bg-slate-950 rounded-[2.5rem] p-12 shadow-2xl flex flex-col items-center text-center justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-[60px] opacity-20"></div>
        <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-10 text-5xl backdrop-blur-xl border border-white/10 animate-pulse shadow-2xl">🔒</div>
        <h3 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">Secure_Protocol</h3>
        <p className="text-white/40 text-sm lowercase font-medium">Enterprise-grade quantum encryption for every data node.</p>
      </div>

      {/* Small Card 1 */}
      <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl group hover:bg-blue-600 transition-colors duration-500">
        <h3 className="text-2xl font-black mb-2 uppercase tracking-tight text-slate-950 group-hover:text-white transition-colors">Edge_Sync</h3>
        <p className="text-slate-500 text-sm lowercase font-medium group-hover:text-white/60 transition-colors">Built on high-fidelity global edge networks.</p>
      </div>

      {/* Small Card 2 */}
      <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl group hover:bg-indigo-600 transition-colors duration-500">
        <h3 className="text-2xl font-black mb-2 uppercase tracking-tight text-slate-950 group-hover:text-white transition-colors">Neural_Team</h3>
        <p className="text-slate-500 text-sm lowercase font-medium group-hover:text-white/60 transition-colors">Collaborate instantly via shared logic nodes.</p>
      </div>
    </div>
  </div>
);

// --- 3. The Interactive Tabs ---
export const FeatureTabs = () => {
  const [active, setActive] = useState(0);
  const features = [
    { title: "Design_Logic", desc: "Craft premium digital architectures.", color: "bg-blue-600" },
    { title: "Core_Build", desc: "Assemble nodes with modern tools.", color: "bg-indigo-600" },
    { title: "Sync_Deploy", desc: "Push signal to the global matrix.", color: "bg-slate-950" }
  ];

  return (
    <div className="bg-white p-12 rounded-[3rem] border border-slate-100 font-sans italic font-bold">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 flex flex-col gap-6">
          {features.map((feat, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-left p-8 rounded-3xl transition-all duration-500 border-2 ${
                active === i 
                ? 'bg-slate-50 border-slate-950 shadow-[8px_8px_0_0_#000]' 
                : 'bg-white border-slate-100 hover:border-slate-300 opacity-60 grayscale'
              }`}
            >
              <h3 className={`font-black text-2xl mb-2 uppercase tracking-tight ${active === i ? 'text-slate-950' : 'text-slate-400'}`}>
                {feat.title}
              </h3>
              <p className="text-sm text-slate-500 lowercase font-medium italic">{feat.desc}</p>
            </button>
          ))}
        </div>

        <div className="md:col-span-7 bg-slate-50 rounded-[3rem] overflow-hidden relative min-h-[450px] flex items-center justify-center p-12">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          <div className="relative z-10 w-full">
             <div className={`w-full aspect-video rounded-3xl shadow-2xl flex flex-col items-center justify-center text-white transition-all duration-700 ${features[active].color} transform hover:scale-105`}>
               <div className="text-7xl font-black mb-6 opacity-20 italic">0{active + 1}</div>
               <div className="text-xs font-black uppercase tracking-[0.5em] border-2 border-white/20 px-6 py-2 rounded-full backdrop-blur-xl">Protocol_Active</div>
             </div>
             <p className="mt-8 font-mono text-slate-400 text-center text-[10px] uppercase tracking-widest italic opacity-50 font-black">Real_Time_Interactive_Preview</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 4. The Code Block (Developer Focus) ---
export const FeatureDev = () => (
  <div className="bg-slate-950 text-white p-16 rounded-[3rem] border border-white/5 overflow-hidden relative font-sans italic font-bold">
    <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-blue-600 rounded-full blur-[160px] opacity-10"></div>
    
    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-24">
      <div className="w-full lg:w-1/2">
        <div className="inline-block px-4 py-1 bg-blue-600/10 text-blue-500 border border-blue-500/20 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-10">API_First_Protocol</div>
        <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-[0.9]">Built_For <br/> <span className="text-blue-500 italic">Architects</span></h2>
        <p className="text-white/40 text-xl mb-12 leading-relaxed lowercase font-medium">
          Integrate our core logic mesh in minutes. Fully typed SDKs, comprehensive documentation, and 99.9% protocol uptime.
        </p>
        <div className="flex gap-6">
          <button className="bg-white text-slate-950 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-2xl">Read_Docs</button>
          <button className="bg-transparent border-2 border-white/10 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:border-white transition-all active:scale-95">Core_Access</button>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2">
        <div className="bg-[#0a0a0a] rounded-[2rem] border-2 border-white/5 shadow-2xl overflow-hidden font-mono text-left italic">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <span className="text-[10px] text-white/30 font-black uppercase tracking-widest italic">initialize_sdk.ts</span>
          </div>
          <div className="p-8 text-sm leading-relaxed">
            <p className="mb-2"><span className="text-blue-400">import</span> {'{'} <span className="text-indigo-400">CoreClient</span> {'}'} <span className="text-blue-400">from</span> <span className="text-emerald-400">'@logic/mesh'</span>;</p>
            <p className="mb-6"><span className="text-blue-400">const</span> client = <span className="text-blue-400">new</span> <span className="text-indigo-400">CoreClient</span>();</p>
            
            <p className="text-white/40 mb-2 font-black uppercase text-[10px] tracking-widest opacity-50 italic">// Initialize logic sync</p>
            <p className="mb-2"><span className="text-blue-400">await</span> client.<span className="text-yellow-200">initialize</span>({'{'}</p>
            <p className="pl-6 mb-2">nodeID: <span className="text-emerald-400">'mesh_0842'</span>,</p>
            <p className="pl-6 mb-2">encryption: <span className="text-emerald-400">'quantum_AES'</span>,</p>
            <p className="pl-6 mb-2">priority: <span className="text-blue-400">true</span></p>
            <p className="mb-6">{'}'});</p>

            <p className="text-blue-400 italic">console.<span className="text-yellow-200">log</span>(<span className="text-emerald-400">"protocol_active"</span>);</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 5. The Glassmorphism ---
export const FeatureGlass = () => (
  <div className="relative bg-slate-950 p-20 rounded-[3rem] overflow-hidden min-h-[500px] flex items-center font-sans italic font-bold">
    {/* Decorative Orbs */}
    <div className="absolute top-0 right-[-10%] w-[40rem] h-[40rem] bg-blue-600 rounded-full mix-blend-screen filter blur-[140px] opacity-20 animate-pulse"></div>
    <div className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-600 rounded-full mix-blend-screen filter blur-[140px] opacity-20 animate-pulse delay-1000"></div>

    <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center w-full">
      <div>
        <h2 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.85] drop-shadow-2xl">
          Protocol_ <br/> <span className="text-blue-400 italic">Evolution</span>
        </h2>
        <p className="text-white/60 text-xl mb-12 max-w-lg lowercase font-medium">
          The next generation of creative logic. Designed for the high-fidelity digital economy.
        </p>
        <button className="bg-white/5 backdrop-blur-2xl border-2 border-white/10 text-white px-12 py-5 rounded-2xl hover:bg-white/10 transition-all uppercase text-xs font-black tracking-[0.3em] shadow-2xl active:scale-95">
          Explore_Nodes
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        {[
          { title: "Node_Sync", color: "bg-blue-600" },
          { title: "Mesh_Flow", color: "bg-indigo-600" },
          { title: "Core_Link", color: "bg-slate-900" },
          { title: "API_Grid", color: "bg-blue-500" }
        ].map((item, i) => (
          <div key={i} className={`bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl transition-all duration-500 hover:-translate-y-4 ${i%2===0 ? 'translate-y-12' : ''}`}>
            <div className={`w-14 h-14 ${item.color} rounded-2xl mb-8 flex items-center justify-center shadow-2xl`}>
               <div className="w-4 h-4 bg-white rounded-full animate-ping opacity-30"></div>
            </div>
            <h4 className="text-white text-lg font-black uppercase tracking-tight mb-2">{item.title}</h4>
            <div className="h-1 w-12 bg-white/20 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 6. The Grid Icons ---
export const FeatureGrid = () => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 font-sans italic font-bold">
    <div className="text-center max-w-3xl mx-auto mb-24">
      <div className="text-[10px] text-blue-600 font-black uppercase tracking-[0.5em] mb-8 italic">// Architecture_Nodes</div>
      <h2 className="text-5xl md:text-7xl font-black text-slate-950 mb-6 uppercase tracking-tighter leading-none">Why_Integrate_Core?</h2>
      <p className="text-slate-500 text-xl lowercase font-medium">Comprehensive suite of high-fidelity tools for the digital vanguard.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {[
        { title: 'Secure_Shield', icon: '🛡️', desc: 'Bank-grade encryption logic.' },
        { title: 'Flash_Speed', icon: '⚡', desc: 'Optimized for sub-ms latency.' },
        { title: 'Crystal_Uptime', icon: '💎', desc: '99.9% protocol guarantee.' },
        { title: 'Node_Scale', icon: '📈', desc: 'Grow from 1 to 1M nodes.' },
        { title: 'Logic_Support', icon: '💬', desc: '24/7 dedicated core team.' },
        { title: 'Global_Mesh', icon: '🌍', desc: 'Nodes in 30+ regions.' },
      ].map((item) => (
        <div key={item.title} className="p-10 rounded-[2.5rem] bg-slate-50 hover:bg-slate-950 transition-all duration-500 cursor-default group border border-slate-100 hover:border-slate-800 shadow-xl hover:shadow-2xl">
          <div className="text-5xl mb-8 group-hover:scale-125 transition-transform duration-500 inline-block drop-shadow-2xl">{item.icon}</div>
          <h3 className="text-2xl font-black text-slate-950 mb-4 uppercase tracking-tight group-hover:text-white transition-colors">{item.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed lowercase font-medium group-hover:text-white/40 transition-colors">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

// --- 7. The Mobile App ---
export const FeatureApp = () => (
  <div className="bg-blue-600 p-16 rounded-[3rem] overflow-hidden font-sans italic font-bold">
    <div className="flex flex-col lg:flex-row items-center gap-24 max-w-6xl mx-auto">
      <div className="w-full lg:w-1/2">
        <div className="inline-block px-4 py-1 bg-white/10 text-white border border-white/20 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-10">Mobile_First_Node</div>
        <h2 className="text-5xl md:text-8xl font-black text-white mb-10 uppercase tracking-tighter leading-[0.85]">
          Your_Grid, <br/> <span className="text-slate-950">In_Pocket.</span>
        </h2>
        <p className="text-white/60 text-xl mb-12 leading-relaxed lowercase font-medium italic">
          Synchronize nodes, manage logic flows, and chat with the core team on the go. Available for all mobile OS.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button className="bg-slate-950 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all shadow-2xl">App_Store</button>
          <button className="bg-white/10 border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all">Play_Store</button>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex justify-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-white rounded-full blur-[140px] opacity-10"></div>
        <div className="relative w-[300px] h-[600px] bg-slate-950 rounded-[4rem] border-[12px] border-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden scale-110">
          <div className="w-full h-full bg-white relative">
            <div className="bg-blue-600 h-48 p-8 pt-16 text-white italic">
              <div className="text-[10px] uppercase font-black tracking-widest opacity-60 mb-2">Dashboard</div>
              <div className="text-4xl font-black tracking-tighter">$12,450_USD</div>
            </div>
            <div className="p-6 space-y-4 text-left">
              {[1,2,3,4].map(i => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-slate-200"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-2/3 bg-slate-200 rounded-full"></div>
                    <div className="h-2 w-1/2 bg-slate-100 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-8 right-8 w-16 h-16 bg-blue-600 rounded-2xl shadow-2xl flex items-center justify-center text-white font-black text-2xl active:scale-90 transition-transform">+</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 8. The Brutalist ---
export const FeatureBrutalist = () => (
  <div className="bg-yellow-400 p-12 rounded-[3rem] border-[8px] border-slate-950 font-sans italic font-black uppercase text-center">
    <div className="grid md:grid-cols-2 gap-12 items-center text-left">
      <div className="bg-white border-[8px] border-slate-950 p-12 shadow-[20px_20px_0_0_#000] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
        <h2 className="text-7xl font-black uppercase mb-10 leading-[0.8] tracking-tighter">
          Power. <br/> Speed. <br/> Control.
        </h2>
        <p className="font-black text-2xl mb-12 text-slate-950 italic">
          Zero friction. <br/> Just raw performance for power nodes.
        </p>
        <button className="w-full py-8 bg-slate-950 text-white font-black text-2xl uppercase hover:bg-white hover:text-slate-950 border-4 border-transparent hover:border-slate-950 transition-all tracking-[0.2em] shadow-2xl">
          Get_Core_Access
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        {[1,2,3,4].map(i => (
          <div key={i} className="bg-blue-600 border-[8px] border-slate-950 p-8 aspect-square flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#000] transition-all cursor-pointer group">
            <span className="text-6xl font-black text-white italic group-hover:scale-125 transition-transform">0{i}</span>
            <div className="h-2 w-full bg-slate-950 mt-4 opacity-20"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 9. The Sticky Scroll ---
export const FeatureSticky = () => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 overflow-hidden font-sans italic font-bold">
    <div className="flex flex-col lg:flex-row gap-24 max-w-6xl mx-auto">
      <div className="w-full lg:w-1/2 lg:sticky lg:top-24 h-fit">
        <div className="aspect-square bg-slate-950 rounded-[3rem] flex flex-col items-center justify-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
           <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-30 animate-pulse"></div>
           <div className="text-white text-center p-12 relative z-10">
             <div className="text-9xl mb-10 drop-shadow-2xl animate-bounce">🚀</div>
             <h3 className="text-4xl font-black uppercase tracking-tighter italic">Launch_Core</h3>
             <div className="h-1 w-24 bg-blue-500 mx-auto mt-6 rounded-full shadow-[0_0_20px_#3b82f6]"></div>
           </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col gap-32 py-12 text-left">
        {[
          { title: "Collaborate_Logic", desc: "Work together in the shared logic mesh with real-time multiplayer synchronization nodes." },
          { title: "Version_Control", desc: "Never lose a logic state. Rollback to any node in the history matrix with one single click." },
          { title: "Design_Systems", desc: "Maintain absolute consistency across your entire product suite automatically via core logic." },
          { title: "Global_Mesh", desc: "Push your architecture to the edge of the digital void with zero latency synchronization." }
        ].map((item, i) => (
          <div key={i} className="relative pl-12 border-l-4 border-slate-100 hover:border-blue-600 transition-colors duration-500">
            <div className="absolute left-[-14px] top-0 w-6 h-6 bg-white border-4 border-blue-600 rounded-full shadow-2xl"></div>
            <div className="text-blue-600 font-black text-2xl mb-4 italic tracking-widest">NODE_0{i+1}</div>
            <h3 className="text-4xl font-black text-slate-950 mb-6 uppercase tracking-tight">{item.title}</h3>
            <p className="text-slate-500 text-xl leading-relaxed lowercase font-medium italic">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 10. The Neumorphic ---
export const FeatureNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-16 rounded-[3rem] font-sans italic font-bold">
    <div className="text-center mb-24">
      <h2 className="text-6xl font-black text-slate-700 uppercase tracking-tighter leading-none italic mb-4">Soft_UI_Nodes</h2>
      <p className="text-slate-500 text-lg lowercase font-medium italic">High-fidelity tactile architecture.</p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-16">
      {['Tactile_Logic', 'Accessible_Core', 'Modern_Mesh'].map((item) => (
        <div key={item} className="bg-[#e0e5ec] p-12 rounded-[3rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-4 border border-white/20">
          <div className="w-24 h-24 bg-[#e0e5ec] rounded-full shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] mb-10 flex items-center justify-center text-4xl text-slate-600 border-4 border-white/50">
            ✨
          </div>
          <h3 className="text-2xl font-black text-slate-700 mb-6 uppercase tracking-tight">{item}</h3>
          <p className="text-slate-500 text-sm lowercase font-medium italic">Experience the depth and softness of next-generation neumorphic design logic.</p>
        </div>
      ))}
    </div>
  </div>
);


// --- Main Gallery Wrapper ---
const FeatureGallery = () => {
  return (
    <div className="container overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-64">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-6xl font-black text-slate-950 mb-6 tracking-tighter uppercase italic leading-none">Feature_Manifest</h1>
        <p className="text-slate-500 font-bold text-xl italic lowercase">High-fidelity components to showcase architectural value.</p>
      </div>
      
      <div className="space-y-32 max-w-7xl mx-auto">
        
        {/* 01. Standard SaaS */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/feat border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/feat:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const FeatureStandard = () => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 font-sans italic font-bold">
    <div className="flex flex-col md:flex-row items-center gap-20">
      <div className="w-full md:w-1/2">
        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-10 shadow-inner">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-slate-950 mb-8 tracking-tighter uppercase leading-[0.9]">
          Automate_ <br/> <span className="text-blue-600">Logic_Flow</span>
        </h2>
        <p className="text-slate-500 mb-10 text-xl leading-relaxed lowercase font-medium">
          Eliminate manual friction nodes. Our engine executes complex sequences with zero latency.
        </p>
        <div className="space-y-4 mb-12">
          <div className="flex items-center gap-4 text-slate-900 uppercase text-xs tracking-widest font-black">
            <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-[10px]">01</span>
            Real_Time_Sync_Protocol
          </div>
          <div className="flex items-center gap-4 text-slate-900 uppercase text-xs tracking-widest font-black">
            <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-[10px]">02</span>
            Custom_Trigger_Nodes
          </div>
          <div className="flex items-center gap-4 text-slate-900 uppercase text-xs tracking-widest font-black">
            <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-[10px]">03</span>
            Global_API_Mesh
          </div>
        </div>
        <button className="px-10 py-5 bg-slate-950 text-white font-black rounded-2xl hover:bg-blue-600 transition-all uppercase text-xs tracking-widest active:scale-95 shadow-2xl">
          Initialize_Control →
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <div className="rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden bg-slate-50 p-8 relative">
           <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8">
              <div className="h-4 w-1/3 bg-slate-100 rounded-full mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 w-full bg-slate-50 rounded-full"></div>
                <div className="h-4 w-5/6 bg-slate-50 rounded-full"></div>
              </div>
              <div className="mt-12 flex gap-6">
                 <div className="h-24 w-1/2 bg-blue-50 rounded-2xl border-2 border-blue-100 flex items-center justify-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full animate-pulse opacity-20"></div>
                 </div>
                 <div className="h-24 w-1/2 bg-indigo-50 rounded-2xl border-2 border-indigo-100 flex items-center justify-center">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full animate-pulse opacity-20"></div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </div>
);`} 
              htmlCode={`<!-- Standard SaaS Feature -->
<div class="feature-standard-root">
  <div class="feature-flex-wrapper">
    <div class="feature-content-side">
      <div class="icon-box">
        <svg class="feat-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h2 class="feat-title">Automate_ <br/> <span class="text-blue">Logic_Flow</span></h2>
      <p class="feat-desc">Eliminate manual friction nodes. Our engine executes complex sequences with zero latency.</p>
      <div class="feat-list">
        <div class="feat-item"><span class="feat-num">01</span> Real_Time_Sync_Protocol</div>
        <div class="feat-item"><span class="feat-num">02</span> Custom_Trigger_Nodes</div>
        <div class="feat-item"><span class="feat-num">03</span> Global_API_Mesh</div>
      </div>
      <button class="feat-btn">Initialize_Control →</button>
    </div>
    <div class="feature-visual-side">
      <div class="visual-card">
         <div class="card-inner">
            <div class="skeleton-title"></div>
            <div class="skeleton-lines">
              <div class="skeleton-line"></div>
              <div class="skeleton-line-half"></div>
            </div>
            <div class="card-action-blocks">
               <div class="action-block-blue"><div class="ping-circle"></div></div>
               <div class="action-block-indigo"><div class="ping-circle"></div></div>
            </div>
         </div>
      </div>
    </div>
  </div>
</div>`} 
              cssCode={`.feature-standard-root { background: white; padding: 48px; border-radius: 48px; border: 1px solid #f1f5f9; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; box-sizing: border-box; }
.feature-flex-wrapper { display: flex; flex-direction: column; gap: 80px; align-items: center; }
@media (min-width: 768px) { .feature-flex-wrapper { flex-direction: row; } }
.feature-content-side, .feature-visual-side { width: 100%; }
@media (min-width: 768px) { .feature-content-side, .feature-visual-side { width: 50%; } }
.icon-box { width: 64px; height: 64px; background: #eff6ff; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 40px; box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.06); }
.feat-icon { width: 32px; height: 32px; color: #2563eb; }
.feat-title { font-size: 48px; font-weight: 900; color: #020617; margin-bottom: 32px; letter-spacing: -0.05em; text-transform: uppercase; line-height: 0.9; }
@media (min-width: 768px) { .feat-title { font-size: 64px; } }
.text-blue { color: #2563eb; }
.feat-desc { color: #64748b; margin-bottom: 40px; font-size: 20px; text-transform: lowercase; font-weight: 500; line-height: 1.6; }
.feat-list { display: flex; flex-direction: column; gap: 16px; margin-bottom: 48px; }
.feat-item { display: flex; align-items: center; gap: 16px; color: #0f172a; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; font-weight: 900; }
.feat-num { width: 24px; height: 24px; border-radius: 8px; background: #2563eb; color: white; display: flex; align-items: center; justify-content: center; font-size: 10px; }
.feat-btn { padding: 20px 40px; background: #020617; color: white; font-weight: 900; border-radius: 16px; border: none; text-transform: uppercase; font-size: 12px; cursor: pointer; letter-spacing: 0.1em; transition: all 0.3s ease; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
.feat-btn:hover { background: #2563eb; transform: translateY(-2px); }
.visual-card { background: #f8fafc; border-radius: 40px; padding: 32px; border: 1px solid #f1f5f9; box-shadow: 0 40px 100px -20px rgba(0,0,0,0.1); position: relative; overflow: hidden; }
.card-inner { background: white; border-radius: 24px; padding: 32px; border: 1px solid #f1f5f9; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1); }
.skeleton-title { height: 16px; width: 33%; background: #f1f5f9; border-radius: 999px; margin-bottom: 32px; }
.skeleton-lines { display: flex; flex-direction: column; gap: 16px; }
.skeleton-line { height: 16px; width: 100%; background: #f8fafc; border-radius: 999px; }
.skeleton-line-half { height: 16px; width: 83%; background: #f8fafc; border-radius: 999px; }
.card-action-blocks { margin-top: 48px; display: flex; gap: 24px; }
.action-block-blue, .action-block-indigo { height: 96px; width: 50%; border-radius: 16px; display: flex; align-items: center; justify-content: center; border: 2px solid; }
.action-block-blue { background: #eff6ff; border-color: #dbeafe; }
.action-block-indigo { background: #eef2ff; border-color: #e0e7ff; }
.ping-circle { width: 40px; height: 40px; background: #2563eb; border-radius: 50%; opacity: 0.2; animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
.action-block-indigo .ping-circle { background: #4f46e5; }
@keyframes pulse { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.1; transform: scale(0.9); } }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 01. Standard SaaS Evolution </span>
          <FeatureStandard />
        </section>

        {/* 02. Bento Grid */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/feat border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/feat:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const FeatureBento = () => (
  <div className="bg-slate-50 p-12 rounded-[3rem] font-sans italic font-bold">
    <div className="text-center mb-20">
      <h2 className="text-6xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-6">Matrix_Features</h2>
      <p className="text-slate-500 text-xl lowercase font-medium italic">High-performance architecture wrapped in a premium interface.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div className="md:col-span-2 bg-white rounded-[2.5rem] p-12 border border-slate-100 shadow-xl relative overflow-hidden h-[450px]">
        <div className="relative z-10 text-left">
          <h3 className="text-4xl font-black mb-4 uppercase tracking-tight text-slate-950">Global_Analytics_Node</h3>
          <p className="text-slate-500 text-lg lowercase max-w-sm font-medium">Synchronize user data streams from across the digital grid in real-time.</p>
        </div>
        <div className="absolute right-[-10%] bottom-[-10%] w-[70%] h-[70%] bg-slate-50 rounded-tl-[5rem] border-t-4 border-l-4 border-slate-100 p-10 flex items-end">
           <div className="w-full h-full bg-white rounded-3xl shadow-2xl p-8 flex flex-col justify-between">
              <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-blue-600"></div><div className="w-2 h-2 rounded-full bg-slate-100"></div></div>
              <div className="flex items-end gap-3 h-32 justify-between">
                 <div className="w-full bg-blue-500 rounded-t-xl" style={{height: '40%'}}></div>
                 <div className="w-full bg-blue-600 rounded-t-xl" style={{height: '70%'}}></div>
                 <div className="w-full bg-blue-400 rounded-t-xl" style={{height: '50%'}}></div>
                 <div className="w-full bg-blue-700 rounded-t-xl" style={{height: '90%'}}></div>
                 <div className="w-full bg-blue-500 rounded-t-xl" style={{height: '60%'}}></div>
              </div>
           </div>
        </div>
      </div>
      <div className="md:row-span-1 bg-slate-950 rounded-[2.5rem] p-12 shadow-2xl flex flex-col items-center text-center justify-center relative overflow-hidden text-white">
        <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-10 text-5xl backdrop-blur-xl border border-white/10 shadow-2xl">🔒</div>
        <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">Secure_Protocol</h3>
        <p className="text-white/40 text-sm lowercase font-medium">Enterprise-grade quantum encryption for every data node.</p>
      </div>
      <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl group hover:bg-blue-600 transition-colors duration-500 text-left">
        <h3 className="text-2xl font-black mb-2 uppercase tracking-tight text-slate-950 group-hover:text-white transition-colors">Edge_Sync</h3>
        <p className="text-slate-500 text-sm lowercase font-medium group-hover:text-white/60 transition-colors">Built on high-fidelity global edge networks.</p>
      </div>
      <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl group hover:bg-indigo-600 transition-colors duration-500 text-left">
        <h3 className="text-2xl font-black mb-2 uppercase tracking-tight text-slate-950 group-hover:text-white transition-colors">Neural_Team</h3>
        <p className="text-slate-500 text-sm lowercase font-medium group-hover:text-white/60 transition-colors">Collaborate instantly via shared logic nodes.</p>
      </div>
    </div>
  </div>
);`} 
              htmlCode={`<!-- Bento Grid Feature -->
<div class="bento-root">
  <div class="bento-header">
    <h2 class="bento-main-title">Matrix_Features</h2>
    <p class="bento-main-desc">High-performance architecture wrapped in a premium interface.</p>
  </div>
  <div class="bento-grid">
    <div class="card-analytics">
      <div class="card-content">
        <h3 class="card-title">Global_Analytics_Node</h3>
        <p class="card-desc">Synchronize user data streams from across the digital grid in real-time.</p>
      </div>
      <div class="card-visual-inset">
         <div class="inset-dashboard">
            <div class="dash-header">
              <div class="dot-blue"></div>
              <div class="dot-slate"></div>
            </div>
            <div class="dash-chart">
               <div class="bar bar-1"></div>
               <div class="bar bar-2"></div>
               <div class="bar bar-3"></div>
               <div class="bar bar-4"></div>
               <div class="bar bar-5"></div>
            </div>
         </div>
      </div>
    </div>
    <div class="card-secure">
      <div class="secure-icon">🔒</div>
      <h3 class="card-title text-white">Secure_Protocol</h3>
      <p class="card-desc text-white-mute">Enterprise-grade quantum encryption for every data node.</p>
    </div>
    <div class="card-sync group-blue">
      <h3 class="card-title-sm">Edge_Sync</h3>
      <p class="card-desc-sm">Built on high-fidelity global edge networks.</p>
    </div>
    <div class="card-sync group-indigo">
      <h3 class="card-title-sm">Neural_Team</h3>
      <p class="card-desc-sm">Collaborate instantly via shared logic nodes.</p>
    </div>
  </div>
</div>`} 
              cssCode={`.bento-root { background: #f8fafc; padding: 48px; border-radius: 48px; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; }
.bento-header { text-align: center; margin-bottom: 80px; }
.bento-main-title { font-size: 64px; font-weight: 900; color: #020617; text-transform: uppercase; letter-spacing: -0.05em; line-height: 1; margin-bottom: 24px; }
@media (min-width: 768px) { .bento-main-title { font-size: 80px; } }
.bento-main-desc { color: #64748b; font-size: 20px; text-transform: lowercase; font-weight: 500; }
.bento-grid { display: grid; grid-template-columns: 1fr; gap: 32px; max-width: 1152px; margin: 0 auto; }
@media (min-width: 768px) { .bento-grid { grid-template-columns: repeat(3, 1fr); } }
.card-analytics { grid-column: span 1; background: white; border-radius: 40px; padding: 48px; border: 1px solid #f1f5f9; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); position: relative; overflow: hidden; height: 450px; }
@media (min-width: 768px) { .card-analytics { grid-column: span 2; } }
.card-secure { grid-row: span 1; background: #020617; color: white; border-radius: 40px; padding: 48px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
.card-sync { background: white; border-radius: 40px; padding: 40px; border: 1px solid #f1f5f9; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); transition: all 0.5s ease; cursor: pointer; }
.group-blue:hover { background: #2563eb; }
.group-indigo:hover { background: #4f46e5; }
.card-sync:hover * { color: white !important; }
.card-title { font-size: 36px; font-weight: 900; color: #020617; text-transform: uppercase; margin-bottom: 16px; letter-spacing: -0.02em; }
.card-desc { color: #64748b; font-size: 18px; text-transform: lowercase; max-width: 320px; line-height: 1.5; }
.card-title-sm { font-size: 24px; font-weight: 900; text-transform: uppercase; margin-bottom: 8px; }
.card-desc-sm { color: #64748b; font-size: 14px; text-transform: lowercase; }
.text-white { color: white; }
.text-white-mute { color: rgba(255,255,255,0.4); }
.secure-icon { font-size: 80px; margin-bottom: 40px; background: rgba(255,255,255,0.1); border-radius: 50%; width: 96px; height: 96px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.1); }
.card-visual-inset { position: absolute; right: -10%; bottom: -10%; width: 70%; height: 70%; background: #f8fafc; border-radius: 80px 0 0 0; border-top: 4px solid #f1f5f9; border-left: 4px solid #f1f5f9; padding: 40px; box-sizing: border-box; }
.inset-dashboard { background: white; border-radius: 24px; height: 100%; width: 100%; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1); padding: 32px; display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box; }
.dash-header { display: flex; gap: 4px; }
.dot-blue { width: 8px; height: 8px; background: #2563eb; border-radius: 50%; }
.dot-slate { width: 8px; height: 8px; background: #f1f5f9; border-radius: 50%; }
.dash-chart { display: flex; gap: 12px; align-items: flex-end; height: 128px; }
.bar { flex: 1; border-radius: 8px 8px 0 0; background: #2563eb; transition: height 0.3s ease; }
.bar-1 { height: 40%; background: #3b82f6; }
.bar-2 { height: 70%; background: #2563eb; }
.bar-3 { height: 50%; background: #60a5fa; }
.bar-4 { height: 90%; background: #1e40af; }
.bar-5 { height: 60%; background: #3b82f6; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 02. Modern Bento Grid Protocol </span>
          <FeatureBento />
        </section>

        {/* 03. Interactive Tabs */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/feat border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/feat:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const FeatureTabs = () => {
  const [active, setActive] = React.useState(0);
  const features = [
    { title: "Design_Logic", desc: "Craft premium digital architectures.", color: "bg-blue-600" },
    { title: "Core_Build", desc: "Assemble nodes with modern tools.", color: "bg-indigo-600" },
    { title: "Sync_Deploy", desc: "Push signal to the global matrix.", color: "bg-slate-950" }
  ];

  return (
    <div className="bg-white p-12 rounded-[3rem] border border-slate-100 font-sans italic font-bold">
      <div className="grid md:grid-cols-12 gap-12 text-left">
        <div className="md:col-span-5 flex flex-col gap-6">
          {features.map((feat, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={\`text-left p-8 rounded-3xl transition-all duration-500 border-2 \${
                active === i 
                ? 'bg-slate-50 border-slate-950 shadow-[8px_8px_0_0_#000]' 
                : 'bg-white border-slate-100 hover:border-slate-300 opacity-60 grayscale'
              }\`}
            >
              <h3 className={\`font-black text-2xl mb-2 uppercase tracking-tight \${active === i ? 'text-slate-950' : 'text-slate-400'}\`}>
                {feat.title}
              </h3>
              <p className="text-sm text-slate-500 lowercase font-medium italic">{feat.desc}</p>
            </button>
          ))}
        </div>
        <div className="md:col-span-7 bg-slate-50 rounded-[3rem] overflow-hidden relative min-h-[450px] flex items-center justify-center p-12">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          <div className={\`w-full aspect-video rounded-3xl shadow-2xl flex flex-col items-center justify-center text-white transition-all duration-700 \${features[active].color}\`}>
            <div className="text-7xl font-black mb-6 opacity-20 italic">0{active + 1}</div>
            <div className="text-xs font-black uppercase tracking-[0.5em] border-2 border-white/20 px-6 py-2 rounded-full backdrop-blur-xl">Protocol_Active</div>
          </div>
        </div>
      </div>
    </div>
  );
};`} 
              htmlCode={`<!-- Interactive Tabs Feature -->
<div class="tabs-root">
  <div class="tabs-grid">
    <div class="tabs-controls">
      <div class="tab-control active">
        <h3 class="tab-title">Design_Logic</h3>
        <p class="tab-desc">Craft premium digital architectures.</p>
      </div>
      <div class="tab-control inactive">
        <h3 class="tab-title mute">Core_Build</h3>
        <p class="tab-desc">Assemble nodes with modern tools.</p>
      </div>
      <div class="tab-control inactive">
        <h3 class="tab-title mute">Sync_Deploy</h3>
        <p class="tab-desc">Push signal to the global matrix.</p>
      </div>
    </div>
    <div class="tabs-display">
      <div class="display-inner color-blue">
        <div class="node-number">01</div>
        <div class="node-badge">Protocol_Active</div>
      </div>
    </div>
  </div>
</div>`} 
              cssCode={`.tabs-root { background: white; padding: 48px; border-radius: 48px; border: 1px solid #f1f5f9; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; box-sizing: border-box; }
.tabs-grid { display: grid; grid-template-columns: 1fr; gap: 48px; }
@media (min-width: 768px) { .tabs-grid { grid-template-columns: repeat(12, 1fr); } }
.tabs-controls { grid-column: span 1; display: flex; flex-direction: column; gap: 24px; }
@media (min-width: 768px) { .tabs-controls { grid-column: span 5; } }
.tabs-display { grid-column: span 1; background: #f8fafc; border-radius: 48px; padding: 48px; display: flex; align-items: center; justify-content: center; min-height: 450px; position: relative; overflow: hidden; }
@media (min-width: 768px) { .tabs-display { grid-column: span 7; } }
.tab-control { padding: 32px; border-radius: 24px; border: 2px solid #f1f5f9; transition: all 0.5s ease; cursor: pointer; text-align: left; }
.tab-control.active { border-color: #020617; background: #f8fafc; box-shadow: 8px 8px 0 0 #000; opacity: 1; }
.tab-control.inactive { opacity: 0.6; filter: grayscale(1); }
.tab-title { font-size: 24px; font-weight: 900; text-transform: uppercase; margin-bottom: 8px; letter-spacing: -0.02em; }
.tab-title.mute { color: #94a3b8; }
.tab-desc { color: #64748b; font-size: 14px; text-transform: lowercase; font-weight: 500; }
.display-inner { width: 100%; aspect-ratio: 16/9; border-radius: 24px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; transition: all 0.7s ease; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
.color-blue { background: #2563eb; }
.color-indigo { background: #4f46e5; }
.color-dark { background: #020617; }
.node-number { font-size: 72px; font-weight: 900; opacity: 0.2; font-style: italic; margin-bottom: 24px; }
.node-badge { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; border: 2px solid rgba(255,255,255,0.2); padding: 8px 24px; border-radius: 999px; backdrop-filter: blur(8px); }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 03. Interactive Logic Tabs </span>
          <FeatureTabs />
        </section>

        {/* 04. Code Block */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/feat border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/feat:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const FeatureDev = () => (
  <div className="bg-slate-950 text-white p-16 rounded-[3rem] border border-white/5 overflow-hidden relative font-sans italic font-bold text-left">
    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-24">
      <div className="w-full lg:w-1/2">
        <div className="inline-block px-4 py-1 bg-blue-600/10 text-blue-500 border border-blue-500/20 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-10">API_First_Protocol</div>
        <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-[0.9]">Built_For <br/> <span className="text-blue-500 italic">Architects</span></h2>
        <p className="text-white/40 text-xl mb-12 leading-relaxed lowercase font-medium">Integrate our core logic mesh in minutes. Fully typed SDKs and 99.9% protocol uptime.</p>
        <div className="flex gap-6">
          <button className="bg-white text-slate-950 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-2xl">Read_Docs</button>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="bg-[#0a0a0a] rounded-[2rem] border-2 border-white/5 shadow-2xl overflow-hidden font-mono text-left italic">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
            <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500/50"></div><div className="w-3 h-3 rounded-full bg-yellow-500/50"></div></div>
            <span className="text-[10px] text-white/30 font-black uppercase tracking-widest italic">initialize_sdk.ts</span>
          </div>
          <div className="p-8 text-sm leading-relaxed">
            <p className="mb-2"><span className="text-blue-400">import</span> {'{'} <span className="text-indigo-400">CoreClient</span> {'}'} <span className="text-blue-400">from</span> <span className="text-emerald-400">'@logic/mesh'</span>;</p>
            <p className="mb-6"><span className="text-blue-400">const</span> client = <span className="text-blue-400">new</span> <span className="text-indigo-400">CoreClient</span>();</p>
            <p className="text-white/40 mb-2 font-black uppercase text-[10px] tracking-widest opacity-50 italic">// Initialize logic sync</p>
            <p className="mb-2"><span className="text-blue-400">await</span> client.<span className="text-yellow-200">initialize</span>({'{'}</p>
            <p className="pl-6 mb-2">nodeID: <span className="text-emerald-400">'mesh_0842'</span>,</p>
            <p className="pl-6 mb-2">priority: <span className="text-blue-400">true</span></p>
            <p>{'}'});</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);`} 
              htmlCode={`<!-- Developer Code Feature -->
<div class="dev-root">
  <div class="dev-flex">
    <div class="dev-content">
      <div class="dev-badge">API_First_Protocol</div>
      <h2 class="dev-title">Built_For <br/> <span class="blue-text">Architects</span></h2>
      <p class="dev-desc">Integrate our core logic mesh in minutes. Fully typed SDKs and 99.9% protocol uptime.</p>
      <button class="dev-btn">Read_Docs</button>
    </div>
    <div class="dev-visual">
      <div class="code-window">
        <div class="code-header">
          <div class="window-dots">
            <div class="dot red"></div>
            <div class="dot yellow"></div>
            <div class="dot green"></div>
          </div>
          <span class="file-name">initialize_sdk.ts</span>
        </div>
        <div class="code-body">
          <p><span class="tok-kw">import</span> { <span class="tok-type">CoreClient</span> } <span class="tok-kw">from</span> <span class="tok-str">'@logic/mesh'</span>;</p>
          <p><span class="tok-kw">const</span> client = <span class="tok-kw">new</span> <span class="tok-type">CoreClient</span>();</p>
          <p class="tok-comment">// Initialize logic sync</p>
          <p><span class="tok-kw">await</span> client.<span class="tok-func">initialize</span>({</p>
          <p class="indent">nodeID: <span class="tok-str">'mesh_0842'</span>,</p>
          <p class="indent">priority: <span class="tok-kw">true</span></p>
          <p>});</p>
        </div>
      </div>
    </div>
  </div>
</div>`} 
              cssCode={`.dev-root { background: #020617; color: white; padding: 64px; border-radius: 48px; border: 1px solid rgba(255,255,255,0.05); font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; position: relative; overflow: hidden; box-sizing: border-box; }
.dev-flex { display: flex; flex-direction: column; gap: 80px; align-items: center; }
@media (min-width: 1024px) { .dev-flex { flex-direction: row; } }
.dev-content, .dev-visual { width: 100%; }
@media (min-width: 1024px) { .dev-content, .dev-visual { width: 50%; } }
.dev-badge { display: inline-block; padding: 4px 16px; background: rgba(37,99,235,0.1); color: #3b82f6; border: 1px solid rgba(37,99,235,0.2); border-radius: 999px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 40px; }
.dev-title { font-size: 48px; font-weight: 900; text-transform: uppercase; line-height: 0.9; margin-bottom: 32px; letter-spacing: -0.05em; }
@media (min-width: 768px) { .dev-title { font-size: 64px; } }
.blue-text { color: #3b82f6; }
.dev-desc { color: rgba(255,255,255,0.4); font-size: 20px; text-transform: lowercase; margin-bottom: 48px; line-height: 1.6; }
.dev-btn { background: white; color: #020617; padding: 20px 40px; border-radius: 16px; border: none; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; cursor: pointer; transition: all 0.3s ease; }
.dev-btn:hover { background: #3b82f6; color: white; }
.code-window { background: #000; border-radius: 32px; border: 2px solid rgba(255,255,255,0.05); overflow: hidden; font-family: 'JetBrains Mono', monospace; text-align: left; box-shadow: 0 50px 100px -20px rgba(0,0,0,0.5); }
.code-header { padding: 16px 24px; border-bottom: 1px solid rgba(255,255,255,0.05); background: rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: center; }
.window-dots { display: flex; gap: 8px; }
.dot { width: 12px; height: 12px; border-radius: 50%; opacity: 0.5; }
.red { background: #ef4444; }
.yellow { background: #eab308; }
.green { background: #22c55e; }
.file-name { font-size: 10px; color: rgba(255,255,255,0.3); font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; }
.code-body { padding: 32px; font-size: 14px; line-height: 1.8; color: #94a3b8; }
.tok-kw { color: #60a5fa; }
.tok-type { color: #818cf8; }
.tok-str { color: #34d399; }
.tok-func { color: #fde047; }
.tok-comment { color: rgba(255,255,255,0.2); font-size: 12px; text-transform: uppercase; font-weight: 900; letter-spacing: 0.1em; }
.indent { padding-left: 24px; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 04. Developer Core Mesh Block </span>
          <FeatureDev />
        </section>

        {/* 05. Glassmorphism */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/feat border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/feat:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const FeatureGlass = () => (
  <div className="relative bg-slate-950 p-20 rounded-[3rem] overflow-hidden min-h-[500px] flex items-center font-sans italic font-bold text-left">
    <div className="absolute top-0 right-[-10%] w-[40rem] h-[40rem] bg-blue-600 rounded-full mix-blend-screen filter blur-[140px] opacity-20 animate-pulse"></div>
    <div className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-600 rounded-full mix-blend-screen filter blur-[140px] opacity-20 animate-pulse delay-1000"></div>
    <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center w-full">
      <div>
        <h2 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.85] drop-shadow-2xl">Protocol_ <br/> <span className="text-blue-400 italic">Evolution</span></h2>
        <p className="text-white/60 text-xl mb-12 max-w-lg lowercase font-medium">The next generation of creative logic. Designed for the high-fidelity digital economy.</p>
        <button className="bg-white/5 backdrop-blur-2xl border-2 border-white/10 text-white px-12 py-5 rounded-2xl hover:bg-white/10 transition-all uppercase text-xs font-black tracking-[0.3em] shadow-2xl">Explore_Nodes</button>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div class="glass-card"><div class="glass-icon-blue"></div><h4 class="card-title-xs">Node_Sync</h4></div>
        <div class="glass-card lift"><div class="glass-icon-indigo"></div><h4 class="card-title-xs">Mesh_Flow</h4></div>
        <div class="glass-card"><div class="glass-icon-dark"></div><h4 class="card-title-xs">Core_Link</h4></div>
        <div class="glass-card lift"><div class="glass-icon-sky"></div><h4 class="card-title-xs">API_Grid</h4></div>
      </div>
    </div>
  </div>
);`} 
              htmlCode={`<!-- Glassmorphic Feature -->
<div class="glass-root">
  <div class="glass-orb-blue"></div>
  <div class="glass-orb-indigo"></div>
  <div class="glass-flex">
    <div class="glass-content">
      <h2 class="glass-title">Protocol_ <br/> <span class="sky-text">Evolution</span></h2>
      <p class="glass-desc">The next generation of creative logic. Designed for the high-fidelity digital economy.</p>
      <button class="glass-btn">Explore_Nodes</button>
    </div>
    <div class="glass-grid">
      <div class="glass-card">
        <div class="glass-icon bg-blue"><div class="ping"></div></div>
        <h4 class="glass-card-title">Node_Sync</h4>
        <div class="glass-line"></div>
      </div>
      <div class="glass-card lift">
        <div class="glass-icon bg-indigo"><div class="ping"></div></div>
        <h4 class="glass-card-title">Mesh_Flow</h4>
        <div class="glass-line"></div>
      </div>
      <div class="glass-card">
        <div class="glass-icon bg-dark"><div class="ping"></div></div>
        <h4 class="glass-card-title">Core_Link</h4>
        <div class="glass-line"></div>
      </div>
      <div class="glass-card lift">
        <div class="glass-icon bg-sky"><div class="ping"></div></div>
        <h4 class="glass-card-title">API_Grid</h4>
        <div class="glass-line"></div>
      </div>
    </div>
  </div>
</div>`} 
              cssCode={`.glass-root { position: relative; background: #020617; padding: 80px; border-radius: 48px; overflow: hidden; min-height: 500px; display: flex; align-items: center; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; box-sizing: border-box; }
.glass-orb-blue { position: absolute; top: 0; right: -10%; width: 640px; height: 640px; background: #2563eb; border-radius: 50%; filter: blur(140px); opacity: 0.2; animation: pulse 8s infinite alternate; }
.glass-orb-indigo { position: absolute; bottom: -10%; left: -10%; width: 640px; height: 640px; background: #4f46e5; border-radius: 50%; filter: blur(140px); opacity: 0.2; animation: pulse 8s infinite alternate-reverse; }
@keyframes pulse { 0% { transform: scale(1); opacity: 0.1; } 100% { transform: scale(1.2); opacity: 0.3; } }
.glass-flex { position: relative; z-index: 10; display: flex; flex-direction: column; gap: 80px; width: 100%; }
@media (min-width: 1024px) { .glass-flex { flex-direction: row; } }
.glass-content, .glass-grid { width: 100%; }
@media (min-width: 1024px) { .glass-content, .glass-grid { width: 50%; } }
.glass-title { font-size: 64px; font-weight: 900; color: white; margin-bottom: 40px; letter-spacing: -0.05em; text-transform: uppercase; line-height: 0.85; }
.sky-text { color: #60a5fa; }
.glass-desc { color: rgba(255,255,255,0.6); font-size: 20px; text-transform: lowercase; margin-bottom: 48px; max-width: 448px; line-height: 1.6; }
.glass-btn { background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); border: 2px solid rgba(255,255,255,0.1); color: white; padding: 20px 48px; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.3em; cursor: pointer; transition: all 0.3s ease; }
.glass-btn:hover { background: rgba(255,255,255,0.1); transform: scale(1.05); }
.glass-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.glass-card { background: rgba(255,255,255,0.03); backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.1); padding: 40px; border-radius: 40px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); transition: all 0.5s ease; text-align: left; }
.glass-card.lift { transform: translateY(48px); }
.glass-card:hover { transform: translateY(-16px) !important; background: rgba(255,255,255,0.1); }
.glass-icon { width: 56px; height: 56px; border-radius: 16px; margin-bottom: 32px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3); }
.bg-blue { background: #2563eb; }
.bg-indigo { background: #4f46e5; }
.bg-dark { background: #0f172a; }
.bg-sky { background: #0ea5e9; }
.ping { width: 16px; height: 16px; background: white; border-radius: 50%; opacity: 0.3; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; }
@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }
.glass-card-title { color: white; font-size: 18px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px; }
.glass-line { height: 4px; width: 48px; background: rgba(255,255,255,0.1); border-radius: 999px; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 05. Glassmorphism Protocol Evolution </span>
          <FeatureGlass />
        </section>

        {/* 06. Service Grid */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/feat border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/feat:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const FeatureGrid = () => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 font-sans italic font-bold">
    <div className="text-center max-w-3xl mx-auto mb-24">
      <div className="text-[10px] text-blue-600 font-black uppercase tracking-[0.5em] mb-8 italic">// Architecture_Nodes</div>
      <h2 className="text-5xl md:text-7xl font-black text-slate-950 mb-6 uppercase tracking-tighter leading-none">Why_Integrate_Core?</h2>
      <p className="text-slate-500 text-xl lowercase font-medium">Comprehensive suite of high-fidelity tools for the digital vanguard.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
      {[
        { title: 'Secure_Shield', icon: '🛡️', desc: 'Bank-grade encryption logic.' },
        { title: 'Flash_Speed', icon: '⚡', desc: 'Optimized for sub-ms latency.' },
        { title: 'Crystal_Uptime', icon: '💎', desc: '99.9% protocol guarantee.' },
        { title: 'Node_Scale', icon: '📈', desc: 'Grow from 1 to 1M nodes.' },
        { title: 'Logic_Support', icon: '💬', desc: '24/7 dedicated core team.' },
        { title: 'Global_Mesh', icon: '🌍', desc: 'Nodes in 30+ regions.' },
      ].map((item) => (
        <div key={item.title} className="p-10 rounded-[2.5rem] bg-slate-50 hover:bg-slate-950 transition-all duration-500 cursor-default group border border-slate-100 hover:border-slate-800 shadow-xl hover:shadow-2xl">
          <div className="text-5xl mb-8 group-hover:scale-125 transition-transform duration-500 inline-block drop-shadow-2xl">{item.icon}</div>
          <h3 className="text-2xl font-black text-slate-950 mb-4 uppercase tracking-tight group-hover:text-white transition-colors">{item.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed lowercase font-medium group-hover:text-white/40 transition-colors">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);`} 
              htmlCode={`<!-- Service Grid Feature -->
<div class="grid-root">
  <div class="grid-header">
    <div class="header-badge">// Architecture_Nodes</div>
    <h2 class="grid-main-title">Why_Integrate_Core?</h2>
    <p class="grid-main-desc">Comprehensive suite of high-fidelity tools for the digital vanguard.</p>
  </div>
  <div class="feature-grid-wrapper">
    <div class="feature-tile">
      <div class="tile-icon">🛡️</div>
      <h3 class="tile-title">Secure_Shield</h3>
      <p class="tile-desc">Bank-grade encryption logic.</p>
    </div>
    <div class="feature-tile">
      <div class="tile-icon">⚡</div>
      <h3 class="tile-title">Flash_Speed</h3>
      <p class="tile-desc">Optimized for sub-ms latency.</p>
    </div>
    <div class="feature-tile">
      <div class="tile-icon">💎</div>
      <h3 class="tile-title">Crystal_Uptime</h3>
      <p class="tile-desc">99.9% protocol guarantee.</p>
    </div>
    <div class="feature-tile">
      <div class="tile-icon">📈</div>
      <h3 class="tile-title">Node_Scale</h3>
      <p class="tile-desc">Grow from 1 to 1M nodes.</p>
    </div>
    <div class="feature-tile">
      <div class="tile-icon">💬</div>
      <h3 class="tile-title">Logic_Support</h3>
      <p class="tile-desc">24/7 dedicated core team.</p>
    </div>
    <div class="feature-tile">
      <div class="tile-icon">🌍</div>
      <h3 class="tile-title">Global_Mesh</h3>
      <p class="tile-desc">Nodes in 30+ regions.</p>
    </div>
  </div>
</div>`} 
              cssCode={`.grid-root { background: white; padding: 48px; border-radius: 48px; border: 1px solid #f1f5f9; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; box-sizing: border-box; }
.grid-header { text-align: center; max-width: 768px; margin: 0 auto 96px auto; }
.header-badge { font-size: 10px; color: #2563eb; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; margin-bottom: 32px; }
.grid-main-title { font-size: 64px; font-weight: 900; color: #020617; text-transform: uppercase; margin-bottom: 24px; line-height: 1; letter-spacing: -0.05em; }
.grid-main-desc { color: #64748b; font-size: 20px; text-transform: lowercase; font-weight: 500; }
.feature-grid-wrapper { display: grid; grid-template-columns: 1fr; gap: 48px; }
@media (min-width: 768px) { .feature-grid-wrapper { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .feature-grid-wrapper { grid-template-columns: repeat(3, 1fr); } }
.feature-tile { padding: 40px; border-radius: 40px; background: #f8fafc; border: 1px solid #f1f5f9; text-align: left; transition: all 0.5s ease; cursor: default; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05); }
.feature-tile:hover { background: #020617; border-color: #1e293b; transform: translateY(-12px); box-shadow: 0 40px 100px -20px rgba(0,0,0,0.3); }
.tile-icon { font-size: 48px; margin-bottom: 32px; transition: transform 0.5s ease; display: inline-block; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1)); }
.feature-tile:hover .tile-icon { transform: scale(1.25) rotate(10deg); }
.tile-title { font-size: 24px; font-weight: 900; color: #020617; text-transform: uppercase; margin-bottom: 16px; transition: color 0.3s ease; }
.feature-tile:hover .tile-title { color: white; }
.tile-desc { color: #64748b; font-size: 14px; text-transform: lowercase; transition: color 0.3s ease; line-height: 1.6; }
.feature-tile:hover .tile-desc { color: rgba(255,255,255,0.4); }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 06. High-Fidelity Service Grid </span>
          <FeatureGrid />
        </section>

        {/* 07. Mobile App */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/feat border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/feat:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const FeatureApp = () => (
  <div className="bg-blue-600 p-16 rounded-[3rem] overflow-hidden font-sans italic font-bold text-left">
    <div className="flex flex-col lg:flex-row items-center gap-24 max-w-6xl mx-auto">
      <div className="w-full lg:w-1/2">
        <div className="inline-block px-4 py-1 bg-white/10 text-white border border-white/20 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-10">Mobile_First_Node</div>
        <h2 className="text-5xl md:text-8xl font-black text-white mb-10 uppercase tracking-tighter leading-[0.85]">Your_Grid, <br/> <span className="text-slate-950">In_Pocket.</span></h2>
        <p className="text-white/60 text-xl mb-12 leading-relaxed lowercase font-medium italic">Synchronize nodes, manage logic flows, and chat with the core team on the go.</p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button className="bg-slate-950 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all shadow-2xl">App_Store</button>
          <button className="bg-white/10 border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all">Play_Store</button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative w-[300px] h-[600px] bg-slate-950 rounded-[4rem] border-[12px] border-slate-900 shadow-2xl overflow-hidden scale-110">
          <div className="w-full h-full bg-white relative">
            <div className="bg-blue-600 h-48 p-8 pt-16 text-white italic text-left">
              <div className="text-[10px] uppercase font-black tracking-widest opacity-60 mb-2">Dashboard</div>
              <div className="text-4xl font-black tracking-tighter">$12,450_USD</div>
            </div>
            <div className="p-6 space-y-4">
              <div class="app-row"><div class="row-sq"></div><div class="row-lines"><div class="line-1"></div><div class="line-2"></div></div></div>
              <div class="app-row"><div class="row-sq"></div><div class="row-lines"><div class="line-1"></div><div class="line-2"></div></div></div>
              <div class="app-row"><div class="row-sq"></div><div class="row-lines"><div class="line-1"></div><div class="line-2"></div></div></div>
              <div class="app-row"><div class="row-sq"></div><div class="row-lines"><div class="line-1"></div><div class="line-2"></div></div></div>
            </div>
            <div className="absolute bottom-8 right-8 w-16 h-16 bg-blue-600 rounded-2xl shadow-2xl flex items-center justify-center text-white font-black text-2xl">+</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);`} 
              htmlCode={`<!-- Mobile App Feature -->
<div class="app-root">
  <div class="app-flex">
    <div class="app-content">
      <div class="app-badge">Mobile_First_Node</div>
      <h2 class="app-title">Your_Grid, <br/> <span class="text-dark">In_Pocket.</span></h2>
      <p class="app-desc">Synchronize nodes, manage logic flows, and chat with the core team on the go. Available for all mobile OS.</p>
      <div class="app-btns">
        <button class="btn-dark">App_Store</button>
        <button class="btn-outline">Play_Store</button>
      </div>
    </div>
    <div class="app-visual">
      <div class="phone-mockup">
        <div class="phone-screen">
          <div class="app-header">
            <div class="header-label">Dashboard</div>
            <div class="header-value">$12,450_USD</div>
          </div>
          <div class="app-body">
            <div class="app-row"><div class="row-sq"></div><div class="row-lines"><div class="line-lg"></div><div class="line-sm"></div></div></div>
            <div class="app-row"><div class="row-sq"></div><div class="row-lines"><div class="line-lg"></div><div class="line-sm"></div></div></div>
            <div class="app-row"><div class="row-sq"></div><div class="row-lines"><div class="line-lg"></div><div class="line-sm"></div></div></div>
            <div class="app-row"><div class="row-sq"></div><div class="row-lines"><div class="line-lg"></div><div class="line-sm"></div></div></div>
          </div>
          <div class="app-fab">+</div>
        </div>
      </div>
    </div>
  </div>
</div>`} 
              cssCode={`.app-root { background: #2563eb; padding: 64px; border-radius: 48px; overflow: hidden; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; box-sizing: border-box; }
.app-flex { display: flex; flex-direction: column; gap: 80px; align-items: center; max-width: 1152px; margin: 0 auto; }
@media (min-width: 1024px) { .app-flex { flex-direction: row; } }
.app-content, .app-visual { width: 100%; }
@media (min-width: 1024px) { .app-content, .app-visual { width: 50%; } }
.app-badge { display: inline-block; padding: 4px 16px; background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.2); border-radius: 999px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 40px; }
.app-title { font-size: 64px; font-weight: 900; color: white; margin-bottom: 40px; text-transform: uppercase; line-height: 0.85; letter-spacing: -0.05em; }
@media (min-width: 768px) { .app-title { font-size: 80px; } }
.text-dark { color: #020617; }
.app-desc { color: rgba(255,255,255,0.6); font-size: 20px; text-transform: lowercase; margin-bottom: 48px; line-height: 1.6; }
.app-btns { display: flex; flex-direction: column; gap: 24px; }
@media (min-width: 640px) { .app-btns { flex-direction: row; } }
.btn-dark { background: #020617; color: white; padding: 20px 40px; border-radius: 16px; border: none; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
.btn-outline { background: rgba(255,255,255,0.1); border: 2px solid rgba(255,255,255,0.2); color: white; padding: 18px 40px; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; cursor: pointer; transition: all 0.3s ease; }
.btn-dark:hover { background: white; color: #020617; }
.btn-outline:hover { background: rgba(255,255,255,0.2); }
.phone-mockup { width: 300px; height: 600px; background: #020617; border-radius: 64px; border: 12px solid #0f172a; box-shadow: 0 50px 100px -20px rgba(0,0,0,0.5); overflow: hidden; position: relative; margin: 0 auto; transform: scale(1.1); }
.phone-screen { width: 100%; height: 100%; background: white; position: relative; display: flex; flex-direction: column; }
.app-header { background: #2563eb; height: 192px; padding: 32px; padding-top: 64px; color: white; text-align: left; }
.header-label { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.6; margin-bottom: 8px; }
.header-value { font-size: 32px; font-weight: 900; letter-spacing: -0.05em; }
.app-body { padding: 24px; display: flex; flex-direction: column; gap: 16px; }
.app-row { display: flex; align-items: center; gap: 16px; padding: 16px; background: #f8fafc; border-radius: 16px; border: 1px solid #f1f5f9; }
.row-sq { width: 48px; height: 48px; border-radius: 12px; background: #e2e8f0; }
.row-lines { flex: 1; display: flex; flex-direction: column; gap: 8px; }
.line-lg { height: 8px; width: 66%; background: #e2e8f0; border-radius: 999px; }
.line-sm { height: 8px; width: 50%; background: #f1f5f9; border-radius: 999px; }
.app-fab { position: absolute; bottom: 32px; right: 32px; width: 64px; height: 64px; background: #2563eb; border-radius: 20px; box-shadow: 0 25px 50px -12px rgba(37,99,235,0.5); display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: 900; cursor: pointer; transition: transform 0.2s ease; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 07. Mobile Mesh Node Interface </span>
          <FeatureApp />
        </section>

        {/* 08. Brutalist */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/feat border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/feat:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const FeatureBrutalist = () => (
  <div className="bg-yellow-400 p-12 rounded-[3rem] border-[8px] border-slate-950 font-sans italic font-black uppercase text-center">
    <div className="grid md:grid-cols-2 gap-12 items-center text-left">
      <div className="bg-white border-[8px] border-slate-950 p-12 shadow-[20px_20px_0_0_#000] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
        <h2 className="text-7xl font-black uppercase mb-10 leading-[0.8] tracking-tighter">Power. <br/> Speed. <br/> Control.</h2>
        <p className="font-black text-2xl mb-12 text-slate-950 italic">Zero friction. <br/> Just raw performance for power nodes.</p>
        <button className="w-full py-8 bg-slate-950 text-white font-black text-2xl uppercase hover:bg-white hover:text-slate-950 border-4 border-transparent hover:border-slate-950 transition-all tracking-[0.2em] shadow-2xl">Get_Core_Access</button>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {[1,2,3,4].map(i => (
          <div key={i} className="bg-blue-600 border-[8px] border-slate-950 p-8 aspect-square flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#000] transition-all cursor-pointer group">
            <span className="text-6xl font-black text-white italic group-hover:scale-125 transition-transform">0{i}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);`} 
              htmlCode={`<!-- Brutalist Feature -->
<div class="brutal-root">
  <div class="brutal-grid">
    <div class="brutal-hero-card">
      <h2 class="brutal-big-title">Power. <br/> Speed. <br/> Control.</h2>
      <p class="brutal-sub-text">Zero friction. <br/> Just raw performance for power nodes.</p>
      <button class="brutal-action-btn">Get_Core_Access</button>
    </div>
    <div class="brutal-nodes-grid">
      <div class="node-sq"><span class="node-num">01</span></div>
      <div class="node-sq"><span class="node-num">02</span></div>
      <div class="node-sq"><span class="node-num">03</span></div>
      <div class="node-sq"><span class="node-num">04</span></div>
    </div>
  </div>
</div>`} 
              cssCode={`.brutal-root { background: #facc15; padding: 48px; border-radius: 48px; border: 8px solid #020617; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; text-transform: uppercase; text-align: center; box-sizing: border-box; }
.brutal-grid { display: grid; grid-template-columns: 1fr; gap: 48px; text-align: left; align-items: center; }
@media (min-width: 768px) { .brutal-grid { grid-template-columns: repeat(2, 1fr); } }
.brutal-hero-card { background: white; border: 8px solid #020617; padding: 48px; box-shadow: 20px 20px 0 0 #000; transition: all 0.1s ease; }
.brutal-hero-card:hover { transform: translate(4px, 4px); box-shadow: 12px 12px 0 0 #000; }
.brutal-big-title { font-size: 48px; font-weight: 900; margin-bottom: 40px; line-height: 0.8; letter-spacing: -0.05em; color: #020617; }
@media (min-width: 768px) { .brutal-big-title { font-size: 72px; } }
.brutal-sub-text { font-size: 24px; margin-bottom: 48px; color: #020617; }
.brutal-action-btn { width: 100%; padding: 32px; background: #020617; color: white; font-weight: 900; border: 4px solid transparent; text-transform: uppercase; font-size: 20px; letter-spacing: 0.2em; cursor: pointer; transition: all 0.2s ease; }
.brutal-action-btn:hover { background: white; color: #020617; border-color: #020617; }
.brutal-nodes-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
.node-sq { background: #2563eb; border: 8px solid #020617; padding: 32px; aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center; transition: all 0.2s ease; cursor: pointer; }
.node-sq:hover { transform: translateY(-8px); box-shadow: 10px 10px 0 0 #000; }
.node-num { font-size: 48px; color: white; font-style: italic; }
@media (min-width: 768px) { .node-num { font-size: 64px; } }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 08. Retro Brutalist Power Node </span>
          <FeatureBrutalist />
        </section>

        {/* 09. Sticky Story */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/feat border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/feat:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const FeatureSticky = () => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 overflow-hidden font-sans italic font-bold text-left">
    <div className="flex flex-col lg:flex-row gap-24 max-w-6xl mx-auto">
      <div className="w-full lg:w-1/2 lg:sticky lg:top-24 h-fit">
        <div className="aspect-square bg-slate-950 rounded-[3rem] flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-30 animate-pulse"></div>
           <div className="text-white text-center p-12 relative z-10">
             <div className="text-9xl mb-10 drop-shadow-2xl animate-bounce">🚀</div>
             <h3 className="text-4xl font-black uppercase tracking-tighter italic">Launch_Core</h3>
           </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-32 py-12">
        {[
          { title: "Collaborate_Logic", desc: "Work together in the shared logic mesh with real-time multiplayer synchronization nodes." },
          { title: "Version_Control", desc: "Never lose a logic state. Rollback to any node in the history matrix with one single click." },
          { title: "Design_Systems", desc: "Maintain absolute consistency across your entire product suite automatically via core logic." },
          { title: "Global_Mesh", desc: "Push your architecture to the edge of the digital void with zero latency synchronization." }
        ].map((item, i) => (
          <div key={i} className="relative pl-12 border-l-4 border-slate-100 hover:border-blue-600 transition-colors duration-500">
            <div className="absolute left-[-14px] top-0 w-6 h-6 bg-white border-4 border-blue-600 rounded-full shadow-2xl"></div>
            <div className="text-blue-600 font-black text-2xl mb-4 italic tracking-widest">NODE_0{i+1}</div>
            <h3 className="text-4xl font-black text-slate-950 mb-6 uppercase tracking-tight">{item.title}</h3>
            <p className="text-slate-500 text-xl leading-relaxed lowercase font-medium italic">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);`} 
              htmlCode={`<!-- Sticky Story Feature -->
<div class="sticky-root">
  <div class="sticky-container">
    <div class="sticky-visual-side">
      <div class="visual-box">
        <div class="visual-gradient"></div>
        <div class="visual-content">
          <div class="visual-emoji">🚀</div>
          <h3 class="visual-title">Launch_Core</h3>
        </div>
      </div>
    </div>
    <div class="sticky-content-side">
      <div class="story-node">
        <div class="node-marker"></div>
        <div class="node-id">NODE_01</div>
        <h3 class="node-title">Collaborate_Logic</h3>
        <p class="node-desc">Work together in the shared logic mesh with real-time multiplayer synchronization nodes.</p>
      </div>
      <div class="story-node">
        <div class="node-marker"></div>
        <div class="node-id">NODE_02</div>
        <h3 class="node-title">Version_Control</h3>
        <p class="node-desc">Never lose a logic state. Rollback to any node in the history matrix with one single click.</p>
      </div>
      <div class="story-node">
        <div class="node-marker"></div>
        <div class="node-id">NODE_03</div>
        <h3 class="node-title">Design_Systems</h3>
        <p class="node-desc">Maintain absolute consistency across your entire product suite automatically via core logic.</p>
      </div>
      <div class="story-node">
        <div class="node-marker"></div>
        <div class="node-id">NODE_04</div>
        <h3 class="node-title">Global_Mesh</h3>
        <p class="node-desc">Push your architecture to the edge of the digital void with zero latency synchronization.</p>
      </div>
    </div>
  </div>
</div>`} 
              cssCode={`.sticky-root { background: white; padding: 48px; border-radius: 48px; border: 1px solid #f1f5f9; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; box-sizing: border-box; }
.sticky-container { display: flex; flex-direction: column; gap: 96px; max-width: 1152px; margin: 0 auto; }
@media (min-width: 1024px) { .sticky-container { flex-direction: row; } }
.sticky-visual-side, .sticky-content-side { width: 100%; }
@media (min-width: 1024px) { .sticky-visual-side, .sticky-content-side { width: 50%; } }
.visual-box { aspect-ratio: 1/1; background: #020617; border-radius: 48px; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; overflow: hidden; box-shadow: 0 50px 100px -20px rgba(0,0,0,0.3); }
@media (min-width: 1024px) { .visual-box { position: sticky; top: 96px; } }
.visual-gradient { position: absolute; inset: 0; background: linear-gradient(to bottom right, #2563eb, #4f46e5); opacity: 0.3; animation: pulse 4s infinite alternate; }
@keyframes pulse { 0% { opacity: 0.2; } 100% { opacity: 0.4; } }
.visual-content { position: relative; z-index: 10; text-align: center; }
.visual-emoji { font-size: 96px; margin-bottom: 40px; filter: drop-shadow(0 20px 30px rgba(0,0,0,0.5)); animation: bounce 2s infinite; }
@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
.visual-title { font-size: 36px; font-weight: 900; color: white; text-transform: uppercase; letter-spacing: -0.05em; }
.sticky-content-side { display: flex; flex-direction: column; gap: 128px; padding-top: 48px; padding-bottom: 48px; }
.story-node { padding-left: 48px; border-left: 4px solid #f1f5f9; position: relative; transition: all 0.5s ease; text-align: left; }
.story-node:hover { border-color: #2563eb; }
.node-marker { position: absolute; left: -14px; top: 0; width: 24px; height: 24px; background: white; border: 4px solid #2563eb; border-radius: 50%; box-shadow: 0 10px 15px -3px rgba(37,99,235,0.2); }
.node-id { color: #2563eb; font-weight: 900; font-size: 24px; margin-bottom: 16px; font-style: italic; letter-spacing: 0.1em; }
.node-title { font-size: 32px; font-weight: 900; color: #020617; text-transform: uppercase; margin-bottom: 24px; letter-spacing: -0.05em; }
@media (min-width: 768px) { .node-title { font-size: 36px; } }
.node-desc { color: #64748b; font-size: 20px; text-transform: lowercase; font-weight: 500; line-height: 1.6; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 09. Sticky Storytelling Logic Scroll </span>
          <FeatureSticky />
        </section>

        {/* 10. Neumorphic */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/feat border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/feat:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const FeatureNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-16 rounded-[3rem] font-sans italic font-bold text-center">
    <div className="text-center mb-24">
      <h2 className="text-6xl font-black text-slate-700 uppercase tracking-tighter leading-none italic mb-4">Soft_UI_Nodes</h2>
      <p className="text-slate-500 text-lg lowercase font-medium italic">High-fidelity tactile architecture.</p>
    </div>
    <div className="grid md:grid-cols-3 gap-16">
      {['Tactile_Logic', 'Accessible_Core', 'Modern_Mesh'].map((item) => (
        <div key={item} className="bg-[#e0e5ec] p-12 rounded-[3rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-4 border border-white/20">
          <div className="w-24 h-24 bg-[#e0e5ec] rounded-full shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] mb-10 flex items-center justify-center text-4xl text-slate-600 border-4 border-white/50">✨</div>
          <h3 className="text-2xl font-black text-slate-700 mb-6 uppercase tracking-tight">{item}</h3>
          <p className="text-slate-500 text-sm lowercase font-medium italic">Experience the depth and softness of next-generation neumorphic design logic.</p>
        </div>
      ))}
    </div>
  </div>
);`} 
              htmlCode={`<!-- Neumorphic Feature -->
<div class="neu-root">
  <div class="neu-header">
    <h2 class="neu-title">Soft_UI_Nodes</h2>
    <p class="neu-desc">High-fidelity tactile architecture.</p>
  </div>
  <div class="neu-grid">
    <div class="neu-card">
      <div class="neu-icon-inset">✨</div>
      <h3 class="neu-card-title">Tactile_Logic</h3>
      <p class="neu-card-desc">Experience the depth and softness of next-generation neumorphic design logic.</p>
    </div>
    <div class="neu-card">
      <div class="neu-icon-inset">✨</div>
      <h3 class="neu-card-title">Accessible_Core</h3>
      <p class="neu-card-desc">Experience the depth and softness of next-generation neumorphic design logic.</p>
    </div>
    <div class="neu-card">
      <div class="neu-icon-inset">✨</div>
      <h3 class="neu-card-title">Modern_Mesh</h3>
      <p class="neu-card-desc">Experience the depth and softness of next-generation neumorphic design logic.</p>
    </div>
  </div>
</div>`} 
              cssCode={`.neu-root { background: #e0e5ec; padding: 64px; border-radius: 48px; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; text-align: center; box-sizing: border-box; }
.neu-header { margin-bottom: 96px; }
.neu-title { font-size: 64px; font-weight: 900; color: #475569; text-transform: uppercase; line-height: 1; margin-bottom: 16px; letter-spacing: -0.05em; }
.neu-desc { color: #64748b; font-size: 18px; text-transform: lowercase; font-weight: 500; }
.neu-grid { display: grid; grid-template-columns: 1fr; gap: 64px; }
@media (min-width: 768px) { .neu-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .neu-grid { grid-template-columns: repeat(3, 1fr); } }
.neu-card { background: #e0e5ec; padding: 48px; border-radius: 48px; box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; border: 1px solid rgba(255,255,255,0.2); transition: all 0.5s ease; text-align: center; }
.neu-card:hover { transform: translateY(-16px); }
.neu-icon-inset { width: 96px; height: 96px; border-radius: 50%; background: #e0e5ec; box-shadow: inset 10px 10px 20px #bebebe, inset -10px -10px 20px #ffffff; display: flex; align-items: center; justify-content: center; font-size: 36px; margin: 0 auto 40px auto; border: 4px solid rgba(255,255,255,0.5); }
.neu-card-title { font-size: 24px; font-weight: 900; color: #475569; text-transform: uppercase; margin-bottom: 24px; letter-spacing: -0.02em; }
.neu-card-desc { color: #64748b; font-size: 14px; text-transform: lowercase; font-weight: 500; line-height: 1.6; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 10. Neumorphic Soft Logic Nodes </span>
          <FeatureNeumorphic />
        </section>

      </div>
    </div>
  );
};

export default FeatureGallery;