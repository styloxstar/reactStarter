import React from 'react';
import CopyButton from '../CopyButton';

// --- Shared Components ---
const Navbar = ({ dark = false }) => (
  <nav className={`flex justify-between items-center py-6 ${dark ? 'text-white' : 'text-[hsl(var(--foreground))]'}`}>
    <div className="font-bold text-xl tracking-tight">Brand.</div>
    <div className="hidden md:flex gap-8 text-sm font-medium">
      <a href="#" className="hover:opacity-70">Product</a>
      <a href="#" className="hover:opacity-70">Features</a>
      <a href="#" className="hover:opacity-70">Pricing</a>
    </div>
    <button className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${dark ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
      Get Started
    </button>
  </nav>
);

// --- 1. The SaaS Standard (Clean & Centered) ---
const LandingSaaS = () => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden group">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,_#f0f9ff_0%,_transparent_50%)] opacity-50"></div>
    <div className="max-w-7xl mx-auto relative z-10">
      <nav className="flex justify-between items-center py-8">
        <div className="font-black text-2xl tracking-tighter italic text-slate-900">NEXUS<span className="text-blue-600">.</span></div>
        <div className="hidden md:flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 italic">
          <a href="#" className="hover:text-blue-600 transition-colors">Product</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Infrastructure</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Pricing</a>
        </div>
        <button className="px-10 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200 italic">
          Launch Console
        </button>
      </nav>

      <div className="flex flex-col items-center text-center mt-24 mb-32">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-10 border border-blue-100 italic">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span> Network_v4.2_Online
        </div>
        <h1 className="text-7xl md:text-9xl font-black text-slate-900 mb-8 tracking-tighter leading-none italic uppercase">
          Orchestrate <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">Absolute Clarity.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mb-16 font-medium italic leading-relaxed lowercase">
          The autonomous platform designed to synchronize your entire development lifecycle. Unified. Scalable. Invisible.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button className="px-12 py-6 bg-blue-600 text-white rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs hover:bg-blue-700 shadow-2xl shadow-blue-200 transition-all hover:-translate-y-1 italic">Initialize System</button>
          <button className="px-12 py-6 bg-white text-slate-900 border-2 border-slate-100 rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs hover:border-blue-600 transition-all italic">Explore Core</button>
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl border-x-8 border-t-8 border-slate-900 rounded-t-[4rem] shadow-[0_-20px_80px_-20px_rgba(37,99,235,0.2)] overflow-hidden bg-slate-950 aspect-video group/mockup">
        <div className="absolute top-0 left-0 right-0 h-12 bg-slate-900 flex items-center px-8 gap-3 border-b border-slate-800">
          <div className="w-3 h-3 rounded-full bg-slate-700"></div>
          <div className="w-3 h-3 rounded-full bg-slate-700"></div>
          <div className="w-3 h-3 rounded-full bg-slate-700"></div>
          <div className="ml-auto text-[8px] font-black text-slate-500 uppercase tracking-widest italic">secure_nexus_terminal</div>
        </div>
        <div className="p-12 grid grid-cols-12 gap-6 mt-12 opacity-40 grayscale group-hover/mockup:grayscale-0 group-hover/mockup:opacity-100 transition-all duration-1000">
           <div className="h-40 bg-blue-600/20 border border-blue-500/30 rounded-3xl col-span-8"></div>
           <div className="h-40 bg-slate-800 border border-slate-700 rounded-3xl col-span-4"></div>
           <div className="h-40 bg-slate-800 border border-slate-700 rounded-3xl col-span-4"></div>
           <div className="h-40 bg-indigo-600/20 border border-indigo-500/30 rounded-3xl col-span-8"></div>
        </div>
      </div>
    </div>
  </div>
);

// --- 2. The Modern Gradient (Startup) ---
const LandingGradient = () => (
  <div className="bg-slate-950 text-white p-12 rounded-[3.5rem] overflow-hidden relative group">
    <div className="absolute inset-0 z-0 opacity-40">
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-600/30 blur-[120px] animate-pulse"></div>
      <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] rounded-full bg-purple-600/30 blur-[120px]"></div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-[20%] bg-pink-500/20 blur-[100px]"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto">
      <nav className="flex justify-between items-center py-8">
        <div className="font-black text-2xl tracking-tighter italic">VIRTUA<span className="text-purple-400">.</span></div>
        <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 italic">
          <a href="#" className="hover:text-white transition-colors">Marketplace</a>
          <a href="#" className="hover:text-white transition-colors">Live Auctions</a>
          <a href="#" className="hover:text-white transition-colors">Community</a>
        </div>
        <button className="px-10 py-4 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-purple-400 transition-all shadow-2xl italic">
          Enter Vault
        </button>
      </nav>

      <div className="grid lg:grid-cols-2 gap-20 items-center mt-24 mb-32">
        <div>
          <div className="inline-block border-2 border-purple-500/50 text-purple-400 px-5 py-2 font-black text-[10px] tracking-[0.5em] uppercase mb-10 skew-x-[-15deg] italic">SECURE_ASSET_EXCHANGE</div>
          <h1 className="text-7xl md:text-8xl font-black leading-[0.9] mb-10 italic uppercase tracking-tighter">
            Architect the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Future Reality.</span>
          </h1>
          <p className="text-slate-400 text-xl mb-12 font-medium italic leading-relaxed lowercase max-w-lg">
            A high-fidelity infrastructure for the next generation of digital assets. Immutable. Decentralized. Bold.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mb-20">
            <button className="px-12 py-6 bg-white text-black rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs hover:bg-purple-400 transition-all hover:scale-105 italic">Start Minting</button>
            <button className="px-12 py-6 border-2 border-slate-800 rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs hover:border-purple-400 transition-all italic">Live Feed</button>
          </div>
          <div className="grid grid-cols-3 gap-12 border-t border-slate-800 pt-12">
            <div><span className="block text-4xl font-black text-white italic tracking-tighter">98K<span className="text-blue-500">+</span></span><span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Assets</span></div>
            <div><span className="block text-4xl font-black text-white italic tracking-tighter">12K<span className="text-purple-500">+</span></span><span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Auctions</span></div>
            <div><span className="block text-4xl font-black text-white italic tracking-tighter">15K<span className="text-pink-500">+</span></span><span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Artists</span></div>
          </div>
        </div>
        <div className="relative group/card">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-[3rem] blur-3xl opacity-20 group-hover/card:opacity-40 transition-opacity"></div>
          <div className="aspect-[4/5] rounded-[3rem] bg-slate-900 border-2 border-slate-800 p-8 transform rotate-3 hover:rotate-0 transition-all duration-1000 relative z-10 overflow-hidden">
             <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-[2rem] shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(255,255,255,0.1)_1.5px,transparent_1.5px)] bg-[size:20px_20px]"></div>
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-black/40 backdrop-blur-2xl rounded-2xl border border-white/10">
                   <div className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-2 italic">Current Bid</div>
                   <div className="text-2xl font-black text-white italic tracking-tighter">14.82 ETH</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 3. The Minimalist (Typography Focus) ---
const LandingMinimal = () => (
  <div className="bg-[#f8f7f4] p-12 rounded-[3rem] border border-stone-200 group">
    <nav className="flex justify-between items-center py-10 max-w-7xl mx-auto text-stone-900 border-b border-stone-200 mb-24">
      <div className="font-serif font-black text-4xl italic tracking-tighter">LUMINA<span className="text-stone-400">.</span></div>
      <div className="hidden lg:flex gap-16 text-[10px] font-black uppercase tracking-[0.5em] italic text-stone-400">
        <a href="#" className="hover:text-stone-900 transition-colors">Portfolio</a>
        <a href="#" className="hover:text-stone-900 transition-colors">Process</a>
        <a href="#" className="hover:text-stone-900 transition-colors">Contact</a>
      </div>
      <button className="text-[10px] font-black uppercase tracking-[0.3em] bg-stone-900 text-white px-8 py-4 rounded-full hover:bg-stone-700 transition-all italic">Inquire</button>
    </nav>
    
    <div className="max-w-7xl mx-auto mb-40">
      <h1 className="text-[14vw] leading-[0.75] font-serif text-stone-900 tracking-tighter uppercase mb-24">
        Pure <br/>
        <span className="ml-[10%] italic text-stone-300">Space</span> <br/>
        Design.
      </h1>
      <div className="grid grid-cols-12 gap-16 items-end">
        <div className="col-span-12 lg:col-span-4">
          <p className="text-stone-500 text-xl font-medium italic leading-relaxed lowercase mb-12">
            We sculpt environments that transcend utility. A synthesis of elemental geometry and atmospheric light.
          </p>
          <button className="px-12 py-6 bg-transparent border-2 border-stone-900 text-stone-900 rounded-full text-[10px] font-black uppercase tracking-[0.5em] hover:bg-stone-900 hover:text-white transition-all italic">
            Journal_01
          </button>
        </div>
        <div className="col-span-12 lg:col-span-8 relative group/img overflow-hidden rounded-[2.5rem] shadow-2xl">
           <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop" className="w-full h-[500px] object-cover grayscale transition-transform duration-[2s] group-hover/img:scale-110" alt="Minimal" />
           <div className="absolute inset-0 bg-stone-900/10 mix-blend-overlay"></div>
           <div className="absolute bottom-10 left-10 text-white z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] italic drop-shadow-lg">Case_Study: Concrete_Monolith</span>
           </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 4. The Developer (Dark Code) ---
const LandingDev = () => (
  <div className="bg-[#050505] text-white p-12 rounded-[3rem] border-2 border-slate-800 font-mono relative overflow-hidden group">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center py-8 mb-24 border-b border-slate-900">
        <div className="text-emerald-500 font-black italic tracking-tighter text-xl uppercase">&lt;DEVOPS_NODE /&gt;</div>
        <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 italic">
          <a href="#" className="hover:text-emerald-400 transition-colors">Documentation</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">API_Specs</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Cluster_Status</a>
        </div>
        <div className="hidden md:block">
           <span className="text-[10px] text-emerald-500/50 font-black uppercase italic tracking-widest">Sys_Time: 12:44:02_UTC</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
        <div>
          <div className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded text-[10px] font-black uppercase tracking-widest italic mb-10">v4.0.2_STABLE_BUILD</div>
          <h1 className="text-7xl font-black mb-10 tracking-tighter italic uppercase leading-[0.9]">
            Architect <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Global Clusters.</span>
          </h1>
          <p className="text-slate-500 mb-12 text-lg font-medium italic leading-relaxed lowercase max-w-md">
            Zero-latency edge distribution. Automated scaling protocols. Hardened security at the kernel level.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="relative flex-1">
              <input type="email" placeholder="root@admin.local" className="w-full bg-slate-900 border-2 border-slate-800 text-white px-6 py-5 rounded-2xl focus:outline-none focus:border-emerald-500 transition-all font-black text-xs italic" />
            </div>
            <button className="bg-emerald-600 text-black px-12 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-900/20 italic">
              Deploy_Instance
            </button>
          </div>
          <div className="mt-16 flex gap-10 opacity-30">
             <div className="h-6 w-20 bg-slate-800 rounded"></div>
             <div className="h-6 w-24 bg-slate-800 rounded"></div>
             <div className="h-6 w-16 bg-slate-800 rounded"></div>
          </div>
        </div>

        <div className="bg-[#0d1117] rounded-[2rem] border-2 border-slate-800 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700">
          <div className="flex items-center justify-between px-8 py-5 bg-[#161b22] border-b-2 border-slate-800">
            <div className="flex gap-2.5">
              <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest italic">cluster_deploy.yml</span>
          </div>
          <div className="p-10 text-sm text-slate-400 leading-relaxed overflow-x-auto font-black italic">
            <p><span className="text-emerald-400">kind</span>: Deployment</p>
            <p><span className="text-emerald-400">metadata</span>:</p>
            <p className="pl-6">name: production-cluster</p>
            <p><span className="text-emerald-400">spec</span>:</p>
            <p className="pl-6">replicas: <span className="text-cyan-400">64</span></p>
            <p className="pl-6">strategy: RollingUpdate</p>
            <p className="pl-6">template:</p>
            <p className="pl-10">containers:</p>
            <p className="pl-14">- image: nexus/core:latest</p>
            <p className="pl-14">ports: [80, 443]</p>
            <p className="mt-8 text-emerald-600/50 text-[10px] animate-pulse">// 🚀 CLUSTER_PROVISIONING_COMPLETE (240ms)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 5. The Mobile App (Showcase) ---
const LandingMobile = () => (
  <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 relative overflow-hidden group">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-50/50 -skew-x-12 translate-x-24"></div>
    <div className="max-w-7xl mx-auto relative z-10">
      <nav className="flex justify-between items-center py-8 mb-20">
        <div className="font-black text-2xl tracking-tighter italic text-slate-900">FLARE<span className="text-orange-500">.</span></div>
        <button className="px-10 py-4 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-orange-500 transition-all italic">
          Sign In
        </button>
      </nav>

      <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
        <div>
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-orange-50 text-orange-600 text-[10px] font-black uppercase tracking-[0.4em] mb-10 border border-orange-100 italic">
            Now available on iOS & Android
          </div>
          <h1 className="text-7xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9] italic uppercase">
            Capture <br/>
            Every <span className="text-orange-500 underline decoration-8 decoration-orange-100 underline-offset-8">Moment.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-lg mb-16 font-medium italic leading-relaxed lowercase">
            The social layer for your digital life. Seamless sharing, powerful editing, and absolute privacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="flex items-center gap-4 px-10 py-6 bg-slate-900 text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-orange-600 transition-all shadow-2xl shadow-slate-200 italic">
               <span className="text-2xl"></span> App Store
            </button>
            <button className="flex items-center gap-4 px-10 py-6 bg-slate-900 text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-orange-600 transition-all shadow-2xl shadow-slate-200 italic">
               <span className="text-2xl">▶</span> Play Store
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100/50 rounded-full blur-[100px] -z-10"></div>
          <div className="relative mx-auto w-[320px] aspect-[9/19.5] bg-slate-900 rounded-[3.5rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden group/phone">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-3xl z-20"></div>
            <div className="p-8 h-full bg-white flex flex-col justify-end relative">
               <div className="absolute inset-0 bg-gradient-to-b from-orange-400 to-rose-500 opacity-20"></div>
               <div className="relative z-10 bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white">
                  <div className="w-12 h-12 bg-orange-500 rounded-2xl mb-4 shadow-lg shadow-orange-200 animate-bounce"></div>
                  <div className="h-4 w-3/4 bg-slate-200 rounded-full mb-3"></div>
                  <div className="h-4 w-1/2 bg-slate-100 rounded-full"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 6. The Cyberpunk (Web3/Crypto) ---
const LandingCyber = () => (
  <div className="bg-[#050505] text-white p-12 rounded-[3rem] border-2 border-slate-900 relative overflow-hidden group">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(34,211,238,0.05)_1.5px,transparent_1.5px)] bg-[size:40px_40px]"></div>
    <div className="max-w-7xl mx-auto relative z-10">
      <nav className="flex justify-between items-center py-8 mb-24 border-b border-white/5 font-mono">
        <div className="text-cyan-400 font-black tracking-tighter text-2xl italic uppercase">CYBER<span className="text-white">DEX</span></div>
        <div className="hidden lg:flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 italic">
          <a href="#" className="hover:text-cyan-400 transition-colors">Trade</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Stake</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">DAO</a>
        </div>
        <button className="px-10 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)] italic">
          Connect_Vault
        </button>
      </nav>

      <div className="text-center mb-32">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border-2 border-pink-500/30 text-pink-500 text-[10px] font-black uppercase tracking-[0.4em] mb-10 italic animate-pulse">
           Live_Status: Fully_Operational
        </div>
        <h1 className="text-7xl md:text-9xl font-black mb-10 italic uppercase tracking-tighter leading-none" style={{ textShadow: "6px 6px 0px #06b6d4" }}>
          Decentralize <br/>
          Everything.
        </h1>
        <p className="text-slate-400 text-xl font-mono max-w-2xl mx-auto mb-16 italic leading-relaxed lowercase">
          Trade assets with zero slippage. Institutional grade liquidity on a permissionless protocol.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
           <button className="px-12 py-6 bg-cyan-500 text-black font-black uppercase tracking-[0.3em] text-xs hover:bg-cyan-400 transition-all hover:scale-105 italic shadow-[0_0_30px_rgba(6,182,212,0.4)]">Initialize Trading</button>
           <button className="px-12 py-6 bg-transparent border-2 border-slate-800 text-white font-black uppercase tracking-[0.3em] text-xs hover:border-white transition-all italic">Read Manifest_v2</button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-1 border-t border-white/5 pt-12 font-mono">
         {[ {l: 'BTC/USD', v: '42,102.00', c: 'text-cyan-400'}, {l: 'ETH/USD', v: '2,450.12', c: 'text-pink-500'}, {l: 'SOL/USD', v: '108.44', c: 'text-cyan-400'}, {l: 'GAS_GWEI', v: '24', c: 'text-white'} ].map((item, i) => (
           <div key={i} className="text-center p-8 bg-white/2">
              <span className="block text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2 italic">{item.l}</span>
              <span className={`text-2xl font-black italic tracking-tighter ${item.c}`}>{item.v}</span>
           </div>
         ))}
      </div>
    </div>
  </div>
);

// --- 7. The E-commerce (Fashion) ---
const LandingFashion = () => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 relative group min-h-[800px] flex items-center overflow-hidden">
    <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-[3s]">
       <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[5s]" alt="Fashion" />
    </div>
    <div className="absolute inset-0 bg-black/40"></div>
    
    <div className="relative z-10 w-full max-w-7xl mx-auto text-white">
      <nav className="flex justify-between items-center py-8 absolute top-0 left-0 right-0">
        <div className="font-serif font-black text-4xl tracking-widest uppercase italic">VOGUE</div>
        <div className="hidden lg:flex gap-16 text-[10px] font-black uppercase tracking-[0.6em] italic">
          <a href="#" className="hover:text-slate-300 transition-colors">Spring_24</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Editorial</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Archives</a>
        </div>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest italic">
           <span>Search</span>
           <span className="bg-white text-black px-4 py-1 rounded-full">Bag (0)</span>
        </div>
      </nav>

      <div className="max-w-3xl mt-40">
        <div className="inline-block h-px w-24 bg-white/50 mb-10"></div>
        <span className="block text-[10px] font-black uppercase tracking-[0.5em] mb-12 italic">Collection_Series_012</span>
        <h1 className="text-8xl md:text-9xl font-serif font-black mb-16 leading-[0.8] italic uppercase tracking-tighter">
          Elegance <br/>
          <span className="text-white/40">is</span> <br/>
          Elimination.
        </h1>
        <button className="px-16 py-6 bg-white text-black font-black uppercase tracking-[0.4em] text-[10px] hover:bg-black hover:text-white transition-all italic">
          Explore Collection
        </button>
      </div>

      <div className="absolute bottom-12 right-0 flex gap-12 items-end">
         <div className="text-right">
            <span className="block text-[10px] font-black uppercase tracking-widest text-white/50 mb-2 italic">Global Shipping</span>
            <span className="text-xl font-serif italic uppercase">Priority Access</span>
         </div>
         <div className="w-20 h-20 border border-white/30 rounded-full flex items-center justify-center animate-spin-slow">
            <span className="text-xl">↓</span>
         </div>
      </div>
    </div>
  </div>
);

// --- 8. The Glassmorphism (Creative) ---
const LandingGlass = () => (
  <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-rose-500 p-12 rounded-[4rem] min-h-[700px] flex items-center justify-center relative overflow-hidden group">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_rgba(255,255,255,0.2)_0%,_transparent_50%)]"></div>
    <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400/30 rounded-full blur-[100px] animate-pulse"></div>
    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400/30 rounded-full blur-[100px]"></div>

    <div className="relative z-10 w-full max-w-5xl">
       <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-16 md:p-24 rounded-[4rem] shadow-2xl relative overflow-hidden text-center group/card">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000"></div>
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.4em] mb-12 italic">
             <span className="w-2 h-2 rounded-full bg-yellow-400"></span> Creativity_Unleashed_v.8
          </div>
          <h1 className="text-7xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none italic uppercase">
             Imagine. <br/>
             Create. <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-rose-300">Inspire.</span>
          </h1>
          <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto mb-16 italic leading-relaxed lowercase">
             The ultimate design ecosystem for the next generation of visual architects. Fluid. Bold. Transcendental.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
             <button className="px-16 py-6 bg-white text-indigo-600 rounded-[2.5rem] font-black uppercase tracking-[0.3em] text-xs hover:scale-105 transition-all shadow-2xl shadow-indigo-900/40 italic">Start Building</button>
             <button className="px-16 py-6 bg-white/10 border-2 border-white/20 text-white rounded-[2.5rem] font-black uppercase tracking-[0.3em] text-xs hover:bg-white/20 transition-all italic">Watch Showreel</button>
          </div>
       </div>
    </div>
  </div>
);

// --- 9. The Brutalist (Bold/Retro) ---
const LandingBrutalist = () => (
  <div className="bg-[#facc15] p-12 rounded-none border-8 border-black group">
    <nav className="flex justify-between items-center py-8 border-b-8 border-black mb-24">
      <div className="font-black text-4xl tracking-tighter uppercase italic bg-black text-white px-6">RAW_CORE</div>
      <div className="hidden lg:flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] italic">
        <a href="#" className="hover:bg-white px-2 transition-colors">Tactics</a>
        <a href="#" className="hover:bg-white px-2 transition-colors">Intel</a>
        <a href="#" className="hover:bg-white px-2 transition-colors">Orders</a>
      </div>
      <button className="px-10 py-4 bg-rose-500 text-black border-4 border-black font-black uppercase tracking-widest hover:translate-x-1 hover:translate-y-1 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all italic">
        Deploy_Now
      </button>
    </nav>

    <div className="grid lg:grid-cols-2 gap-1 border-b-8 border-black pb-24 mb-24">
       <div>
          <h1 className="text-8xl md:text-9xl font-black leading-[0.8] mb-12 italic uppercase tracking-tighter">
             Anti <br/>
             Design <br/>
             Protocol.
          </h1>
          <p className="text-black text-xl font-bold max-w-lg mb-16 italic leading-none uppercase tracking-tight">
             No gradients. No shadows. No mercy. A brutalist framework for high-impact communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-8">
             <button className="px-12 py-6 bg-black text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-rose-500 hover:text-black transition-all italic">Execute_Order</button>
             <button className="px-12 py-6 bg-white border-4 border-black text-black font-black uppercase tracking-[0.3em] text-xs hover:bg-black hover:text-white transition-all italic">View_Schematics</button>
          </div>
       </div>
       <div className="relative border-8 border-black bg-white aspect-square overflow-hidden group/viz">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#000,#000_10px,#fff_10px,#fff_20px)] opacity-10"></div>
          <div className="h-full w-full flex items-center justify-center relative z-10">
             <div className="w-3/4 h-3/4 border-8 border-black bg-rose-500 flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-700">
                <span className="text-8xl font-black text-black italic">!</span>
             </div>
          </div>
       </div>
    </div>

    <div className="flex justify-between font-black text-[10px] uppercase tracking-widest italic">
       <span>V.9.0.0_PRODUCTION</span>
       <span>NO_GUTTERS_ALLOWED</span>
       <span>EST_2024</span>
    </div>
  </div>
);

// --- 10. The Neumorphic (Soft UI) ---
const LandingNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-12 rounded-[3.5rem] min-h-[700px] flex items-center group">
    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <div className="w-20 h-20 rounded-3xl bg-[#e0e5ec] shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] flex items-center justify-center text-3xl mb-12 transition-all hover:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff]">
           🧠
        </div>
        <h1 className="text-7xl font-black text-slate-700 mb-10 tracking-tighter italic uppercase leading-[0.9]">
           Tactile <br/>
           Intelligence.
        </h1>
        <p className="text-slate-500 text-xl font-medium mb-16 italic leading-relaxed lowercase max-w-lg">
           Experience the soft revolution. A sensory design system for a more human interface. Fluid. Tangible. Calm.
        </p>
        <div className="flex flex-col sm:flex-row gap-8">
           <button className="px-12 py-6 bg-[#e0e5ec] text-blue-600 rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-[10px_10px_20px_#b8b9be,-10px_-10px_20px_#ffffff] hover:shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] transition-all active:scale-95 italic">Initialize_Experience</button>
           <button className="px-12 py-6 bg-[#e0e5ec] text-slate-500 rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-[inset_10px_10px_20px_#b8b9be,inset_-10px_-10px_20px_#ffffff] hover:shadow-[10px_10px_20px_#b8b9be,-10px_-10px_20px_#ffffff] transition-all italic">Learn_More</button>
        </div>
      </div>

      <div className="relative">
         <div className="aspect-square rounded-[4rem] bg-[#e0e5ec] shadow-[30px_30px_60px_#b8b9be,-30px_-30px_60px_#ffffff] flex items-center justify-center p-16">
            <div className="w-full h-full rounded-[3rem] bg-[#e0e5ec] shadow-[inset_15px_15px_30px_#b8b9be,inset_-15px_-15px_30px_#ffffff] flex items-center justify-center">
               <div className="w-1/2 h-1/2 rounded-full bg-[#e0e5ec] shadow-[10px_10px_20px_#b8b9be,-10px_-10px_20px_#ffffff] animate-pulse"></div>
            </div>
         </div>
      </div>
    </div>
  </div>
);


// --- Main Gallery Wrapper ---
const LandingPageGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-100 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Landing Page Heroes</h1>
        <p className="text-slate-500">High-impact "Above the Fold" sections for various industries.</p>
      </div>
      
      <div className="space-y-32">
        {/* 01. SaaS */}
        <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const LandingSaaS = () => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden group">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,_#f0f9ff_0%,_transparent_50%)] opacity-50"></div>
    <div className="max-w-7xl mx-auto relative z-10">
      <nav className="flex justify-between items-center py-8">
        <div className="font-black text-2xl tracking-tighter italic text-slate-900">NEXUS<span className="text-blue-600">.</span></div>
        <div className="hidden md:flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 italic">
          <a href="#" className="hover:text-blue-600 transition-colors">Product</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Infrastructure</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Pricing</a>
        </div>
        <button className="px-10 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200 italic">
          Launch Console
        </button>
      </nav>

      <div className="flex flex-col items-center text-center mt-24 mb-32">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-10 border border-blue-100 italic">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span> Network_v4.2_Online
        </div>
        <h1 className="text-7xl md:text-9xl font-black text-slate-900 mb-8 tracking-tighter leading-none italic uppercase">
          Orchestrate <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">Absolute Clarity.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mb-16 font-medium italic leading-relaxed lowercase">
          The autonomous platform designed to synchronize your entire development lifecycle. Unified. Scalable. Invisible.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button className="px-12 py-6 bg-blue-600 text-white rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs hover:bg-blue-700 shadow-2xl shadow-blue-200 transition-all hover:-translate-y-1 italic">Initialize System</button>
          <button className="px-12 py-6 bg-white text-slate-900 border-2 border-slate-100 rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs hover:border-blue-600 transition-all italic">Explore Core</button>
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl border-x-8 border-t-8 border-slate-900 rounded-t-[4rem] shadow-[0_-20px_80px_-20px_rgba(37,99,235,0.2)] overflow-hidden bg-slate-950 aspect-video group/mockup">
        <div className="absolute top-0 left-0 right-0 h-12 bg-slate-900 flex items-center px-8 gap-3 border-b border-slate-800">
          <div className="w-3 h-3 rounded-full bg-slate-700"></div>
          <div className="w-3 h-3 rounded-full bg-slate-700"></div>
          <div className="w-3 h-3 rounded-full bg-slate-700"></div>
          <div className="ml-auto text-[8px] font-black text-slate-500 uppercase tracking-widest italic">secure_nexus_terminal</div>
        </div>
        <div className="p-12 grid grid-cols-12 gap-6 mt-12 opacity-40 grayscale group-hover/mockup:grayscale-0 group-hover/mockup:opacity-100 transition-all duration-1000">
           <div className="h-40 bg-blue-600/20 border border-blue-500/30 rounded-3xl col-span-8"></div>
           <div className="h-40 bg-slate-800 border border-slate-700 rounded-3xl col-span-4"></div>
           <div className="h-40 bg-slate-800 border border-slate-700 rounded-3xl col-span-4"></div>
           <div className="h-40 bg-indigo-600/20 border border-indigo-500/30 rounded-3xl col-span-8"></div>
        </div>
      </div>
    </div>
  </div>
);`} 
              htmlCode={`<div class="landing-saas">
  <div class="bg-glow"></div>
  <div class="container">
    <nav class="navbar">
      <div class="logo">NEXUS<span>.</span></div>
      <div class="nav-links">
        <a href="#">Product</a>
        <a href="#">Infrastructure</a>
        <a href="#">Pricing</a>
      </div>
      <button class="nav-btn">Launch Console</button>
    </nav>

    <div class="hero">
      <div class="badge">
        <span class="dot"></span> Network_v4.2_Online
      </div>
      <h1>Orchestrate <br><span class="gradient-text">Absolute Clarity.</span></h1>
      <p>The autonomous platform designed to synchronize your entire development lifecycle. Unified. Scalable. Invisible.</p>
      <div class="cta-group">
        <button class="primary">Initialize System</button>
        <button class="secondary">Explore Core</button>
      </div>
    </div>

    <div class="mockup">
      <div class="mockup-header">
        <div class="dots"><span></span><span></span><span></span></div>
        <div class="label">secure_nexus_terminal</div>
      </div>
      <div class="mockup-content">
        <div class="box b-1"></div>
        <div class="box b-2"></div>
        <div class="box b-3"></div>
        <div class="box b-4"></div>
      </div>
    </div>
  </div>
</div>`} 
              cssCode={`.landing-saas { background: white; padding: 48px; border-radius: 48px; border: 1px solid #f1f5f9; position: relative; overflow: hidden; font-family: sans-serif; }
.bg-glow { position: absolute; inset: 0; background: radial-gradient(circle at 70% 20%, #f0f9ff 0%, transparent 50%); opacity: 0.5; }
.container { max-width: 1280px; margin: 0 auto; position: relative; z-index: 10; }
.navbar { display: flex; justify-content: space-between; align-items: center; padding: 32px 0; }
.logo { font-weight: 900; font-size: 24px; letter-spacing: -0.05em; font-style: italic; color: #0f172a; }
.logo span { color: #2563eb; }
.nav-links { display: none; gap: 48px; }
@media (min-width: 768px) { .nav-links { display: flex; } }
.nav-links a { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; color: #94a3b8; text-decoration: none; font-style: italic; transition: 0.3s; }
.nav-links a:hover { color: #2563eb; }
.nav-btn { padding: 16px 40px; background: #0f172a; color: white; border: none; border-radius: 16px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; cursor: pointer; font-style: italic; transition: 0.3s; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1); }
.nav-btn:hover { background: #2563eb; }
.hero { display: flex; flex-direction: column; align-items: center; text-align: center; margin: 96px 0 128px; }
.badge { display: inline-flex; align-items: center; gap: 12px; padding: 8px 24px; background: #eff6ff; color: #2563eb; border-radius: 99px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; border: 1px solid #dbeafe; font-style: italic; margin-bottom: 40px; }
.dot { width: 8px; height: 8px; border-radius: 50%; background: #2563eb; animation: pulse 2s infinite; }
@keyframes pulse { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7); } 70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(37, 99, 235, 0); } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); } }
h1 { font-size: 72px; font-weight: 900; color: #0f172a; margin-bottom: 32px; letter-spacing: -0.05em; line-height: 1; font-style: italic; text-transform: uppercase; }
@media (min-width: 768px) { h1 { font-size: 112px; } }
.gradient-text { background: linear-gradient(to right, #2563eb, #4f46e5, #7c3aed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
p { font-size: 20px; color: #94a3b8; max-width: 672px; margin-bottom: 64px; font-weight: 500; font-style: italic; line-height: 1.6; text-transform: lowercase; }
.cta-group { display: flex; flex-direction: column; gap: 24px; }
@media (min-width: 640px) { .cta-group { flex-direction: row; } }
.primary { padding: 24px 48px; background: #2563eb; color: white; border: none; border-radius: 32px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 12px; cursor: pointer; transition: 0.3s; font-style: italic; box-shadow: 0 25px 50px -12px rgba(37, 99, 235, 0.4); }
.primary:hover { background: #1d4ed8; transform: translateY(-4px); }
.secondary { padding: 24px 48px; background: white; border: 2px solid #f1f5f9; color: #0f172a; border-radius: 32px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 12px; cursor: pointer; transition: 0.3s; font-style: italic; }
.secondary:hover { border-color: #2563eb; }
.mockup { margin: 0 auto; max-width: 1024px; background: #020617; border-radius: 64px 64px 0 0; border: 8px solid #0f172a; box-shadow: 0 -20px 80px -20px rgba(37, 99, 235, 0.2); overflow: hidden; }
.mockup-header { background: #0f172a; padding: 16px 32px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #1e293b; }
.dots { display: flex; gap: 8px; }
.dots span { width: 8px; height: 8px; border-radius: 50%; background: #334155; }
.label { font-size: 8px; font-weight: 900; color: #475569; text-transform: uppercase; letter-spacing: 0.2em; font-style: italic; }
.mockup-content { padding: 48px; display: grid; grid-template-columns: repeat(12, 1fr); gap: 24px; opacity: 0.4; }
.box { border-radius: 24px; height: 160px; }
.b-1 { grid-column: span 8; background: rgba(37,99,235,0.2); border: 1px solid rgba(37,99,235,0.3); }
.b-2 { grid-column: span 4; background: #1e293b; border: 1px solid #334155; }
.b-3 { grid-column: span 4; background: #1e293b; border: 1px solid #334155; }
.b-4 { grid-column: span 8; background: rgba(79,70,229,0.2); border: 1px solid rgba(79,70,229,0.3); }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] block text-center mb-12 border-b border-blue-50 pb-6 italic leading-none"> 01. SaaS Standard Premium </span>
              <LandingSaaS />
          </div>
        </section>

        {/* 02. Modern Gradient */}
        <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-purple-100/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const LandingGradient = () => (
  <div className="bg-slate-950 text-white p-12 rounded-[3.5rem] overflow-hidden relative group">
    <div className="absolute inset-0 z-0 opacity-40">
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-600/30 blur-[120px] animate-pulse"></div>
      <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] rounded-full bg-purple-600/30 blur-[120px]"></div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-[20%] bg-pink-500/20 blur-[100px]"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto">
      <nav className="flex justify-between items-center py-8">
        <div className="font-black text-2xl tracking-tighter italic">VIRTUA<span className="text-purple-400">.</span></div>
        <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 italic">
          <a href="#" className="hover:text-white transition-colors">Marketplace</a>
          <a href="#" className="hover:text-white transition-colors">Live Auctions</a>
          <a href="#" className="hover:text-white transition-colors">Community</a>
        </div>
        <button className="px-10 py-4 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-purple-400 transition-all shadow-2xl italic">
          Enter Vault
        </button>
      </nav>

      <div className="grid lg:grid-cols-2 gap-20 items-center mt-24 mb-32">
        <div>
          <div className="inline-block border-2 border-purple-500/50 text-purple-400 px-5 py-2 font-black text-[10px] tracking-[0.5em] uppercase mb-10 skew-x-[-15deg] italic">SECURE_ASSET_EXCHANGE</div>
          <h1 className="text-7xl md:text-8xl font-black leading-[0.9] mb-10 italic uppercase tracking-tighter">
            Architect the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Future Reality.</span>
          </h1>
          <p className="text-slate-400 text-xl mb-12 font-medium italic leading-relaxed lowercase max-w-lg">
            A high-fidelity infrastructure for the next generation of digital assets. Immutable. Decentralized. Bold.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mb-20">
            <button className="px-12 py-6 bg-white text-black rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs hover:bg-purple-400 transition-all hover:scale-105 italic">Start Minting</button>
            <button className="px-12 py-6 border-2 border-slate-800 rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs hover:border-purple-400 transition-all italic">Live Feed</button>
          </div>
          <div className="grid grid-cols-3 gap-12 border-t border-slate-800 pt-12">
            <div><span className="block text-4xl font-black text-white italic tracking-tighter">98K<span className="text-blue-500">+</span></span><span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Assets</span></div>
            <div><span className="block text-4xl font-black text-white italic tracking-tighter">12K<span className="text-purple-500">+</span></span><span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Auctions</span></div>
            <div><span className="block text-4xl font-black text-white italic tracking-tighter">15K<span className="text-pink-500">+</span></span><span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Artists</span></div>
          </div>
        </div>
        <div className="relative group/card">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-[3rem] blur-3xl opacity-20 group-hover/card:opacity-40 transition-opacity"></div>
          <div className="aspect-[4/5] rounded-[3rem] bg-slate-900 border-2 border-slate-800 p-8 transform rotate-3 hover:rotate-0 transition-all duration-1000 relative z-10 overflow-hidden">
             <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-[2rem] shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(255,255,255,0.1)_1.5px,transparent_1.5px)] bg-[size:20px_20px]"></div>
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-black/40 backdrop-blur-2xl rounded-2xl border border-white/10">
                   <div className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-2 italic">Current Bid</div>
                   <div className="text-2xl font-black text-white italic tracking-tighter">14.82 ETH</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);`} 
              htmlCode={`<div class="landing-gradient">
  <div class="glows">
    <div class="glow g-1"></div>
    <div class="glow g-2"></div>
    <div class="glow g-3"></div>
  </div>

  <div class="container">
    <nav class="navbar">
      <div class="logo">VIRTUA<span>.</span></div>
      <div class="nav-links">
        <a href="#">Marketplace</a>
        <a href="#">Live Auctions</a>
        <a href="#">Community</a>
      </div>
      <button class="nav-btn">Enter Vault</button>
    </nav>

    <div class="hero-grid">
      <div class="text-side">
        <div class="badge">SECURE_ASSET_EXCHANGE</div>
        <h1>Architect the <br><span class="gradient-text">Future Reality.</span></h1>
        <p>A high-fidelity infrastructure for the next generation of digital assets. Immutable. Decentralized. Bold.</p>
        <div class="cta-group">
          <button class="primary">Start Minting</button>
          <button class="secondary">Live Feed</button>
        </div>
        <div class="stats">
          <div class="stat"><span>98K+</span><p>Assets</p></div>
          <div class="stat"><span>12K+</span><p>Auctions</p></div>
          <div class="stat"><span>15K+</span><p>Artists</p></div>
        </div>
      </div>
      <div class="card-side">
        <div class="card-glow"></div>
        <div class="nft-card">
          <div class="nft-image">
            <div class="grid-overlay"></div>
            <div class="bid-info">
              <div class="label">Current Bid</div>
              <div class="amount">14.82 ETH</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`} 
              cssCode={`.landing-gradient { background: #020617; padding: 48px; border-radius: 56px; overflow: hidden; position: relative; font-family: sans-serif; color: white; }
.glows { position: absolute; inset: 0; opacity: 0.4; z-index: 0; }
.glow { position: absolute; border-radius: 50%; filter: blur(120px); }
.g-1 { top: -20%; left: -10%; width: 60%; height: 60%; background: #2563eb; animation: pulse 4s infinite; }
.g-2 { top: 20%; right: 10%; width: 50%; height: 50%; background: #9333ea; }
.g-3 { bottom: -10%; left: 50%; transform: translateX(-50%); width: 80%; height: 20%; background: #ec4899; filter: blur(100px); }
@keyframes pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.8; } }
.container { max-width: 1280px; margin: 0 auto; position: relative; z-index: 10; }
.navbar { display: flex; justify-content: space-between; align-items: center; padding: 32px 0; }
.logo { font-weight: 900; font-size: 24px; font-style: italic; letter-spacing: -0.05em; }
.logo span { color: #c084fc; }
.nav-links { display: none; gap: 40px; }
@media (min-width: 768px) { .nav-links { display: flex; } }
.nav-links a { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; color: #64748b; text-decoration: none; font-style: italic; transition: 0.3s; }
.nav-links a:hover { color: white; }
.nav-btn { padding: 16px 40px; background: white; color: black; border: none; border-radius: 16px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; cursor: pointer; font-style: italic; transition: 0.3s; }
.nav-btn:hover { background: #c084fc; }
.hero-grid { display: grid; grid-template-columns: 1fr; gap: 80px; align-items: center; margin: 96px 0; }
@media (min-width: 1024px) { .hero-grid { grid-template-columns: 1fr 1fr; } }
.badge { display: inline-block; padding: 8px 20px; border: 2px solid rgba(147,51,234,0.5); color: #c084fc; font-weight: 900; font-size: 10px; letter-spacing: 0.5em; text-transform: uppercase; margin-bottom: 40px; transform: skewX(-15deg); font-style: italic; }
h1 { font-size: 72px; font-weight: 900; line-height: 0.9; margin-bottom: 40px; font-style: italic; text-transform: uppercase; letter-spacing: -0.05em; }
@media (min-width: 768px) { h1 { font-size: 96px; } }
.gradient-text { background: linear-gradient(to right, #60a5fa, #c084fc, #f472b6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
p { font-size: 20px; color: #94a3b8; max-width: 512px; margin-bottom: 48px; font-weight: 500; font-style: italic; line-height: 1.6; text-transform: lowercase; }
.cta-group { display: flex; flex-direction: column; gap: 24px; margin-bottom: 80px; }
@media (min-width: 640px) { .cta-group { flex-direction: row; } }
.primary { padding: 24px 48px; background: white; color: black; border: none; border-radius: 32px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 12px; cursor: pointer; transition: 0.3s; font-style: italic; }
.primary:hover { background: #c084fc; transform: scale(1.05); }
.secondary { padding: 24px 48px; background: transparent; border: 2px solid #1e293b; color: white; border-radius: 32px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 12px; cursor: pointer; transition: 0.3s; font-style: italic; }
.secondary:hover { border-color: #c084fc; }
.stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px; padding-top: 48px; border-top: 1px solid #1e293b; }
.stat span { display: block; font-size: 36px; font-weight: 900; letter-spacing: -0.05em; font-style: italic; }
.stat p { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; color: #64748b; margin: 0; }
.card-side { position: relative; }
.card-glow { position: absolute; inset: 0; background: linear-gradient(to bottom right, #2563eb, #9333ea); border-radius: 48px; filter: blur(48px); opacity: 0.2; transition: 0.5s; }
.card-side:hover .card-glow { opacity: 0.4; }
.nft-card { aspect-ratio: 4/5; background: #0f172a; border: 2px solid #1e293b; border-radius: 48px; padding: 32px; transform: rotate(3deg); transition: 1s cubic-bezier(0.4, 0, 0.2, 1); position: relative; z-index: 10; overflow: hidden; }
.card-side:hover .nft-card { transform: rotate(0); }
.nft-image { width: 100%; height: 100%; background: linear-gradient(to bottom right, #3b82f6, #9333ea, #ec4899); border-radius: 32px; position: relative; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
.grid-overlay { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.1) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(255,255,255,0.1) 1.5px, transparent 1.5px); background-size: 20px 20px; }
.bid-info { position: absolute; bottom: 32px; left: 32px; right: 32px; padding: 32px; background: rgba(0,0,0,0.4); backdrop-filter: blur(20px); border-radius: 24px; border: 1px solid rgba(255,255,255,0.1); }
.bid-info .label { font-size: 10px; font-weight: 900; color: #c084fc; text-transform: uppercase; letter-spacing: 0.2em; font-style: italic; margin-bottom: 8px; }
.bid-info .amount { font-size: 24px; font-weight: 900; font-style: italic; letter-spacing: -0.05em; }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-rose-50 pb-6 italic leading-none"> 02. Modern Gradient Premium </span>
              <LandingGradient />
          </div>
        </section>

        {/* 03. Minimalist */}
        <section className="bg-white p-4 rounded-[40px] border border-stone-200 relative group shadow-sm transition-all hover:shadow-2xl hover:border-stone-300/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const LandingMinimal = () => (
  <div className="bg-[#f8f7f4] p-12 rounded-[3rem] border border-stone-200 group">
    <nav className="flex justify-between items-center py-10 max-w-7xl mx-auto text-stone-900 border-b border-stone-200 mb-24">
      <div className="font-serif font-black text-4xl italic tracking-tighter">LUMINA<span className="text-stone-400">.</span></div>
      <div className="hidden lg:flex gap-16 text-[10px] font-black uppercase tracking-[0.5em] italic text-stone-400">
        <a href="#" className="hover:text-stone-900 transition-colors">Portfolio</a>
        <a href="#" className="hover:text-stone-900 transition-colors">Process</a>
        <a href="#" className="hover:text-stone-900 transition-colors">Contact</a>
      </div>
      <button className="text-[10px] font-black uppercase tracking-[0.3em] bg-stone-900 text-white px-8 py-4 rounded-full hover:bg-stone-700 transition-all italic">Inquire</button>
    </nav>
    
    <div className="max-w-7xl mx-auto mb-40">
      <h1 className="text-[14vw] leading-[0.75] font-serif text-stone-900 tracking-tighter uppercase mb-24">
        Pure <br/>
        <span className="ml-[10%] italic text-stone-300">Space</span> <br/>
        Design.
      </h1>
      <div className="grid grid-cols-12 gap-16 items-end">
        <div className="col-span-12 lg:col-span-4">
          <p className="text-stone-500 text-xl font-medium italic leading-relaxed lowercase mb-12">
            We sculpt environments that transcend utility. A synthesis of elemental geometry and atmospheric light.
          </p>
          <button className="px-12 py-6 bg-transparent border-2 border-stone-900 text-stone-900 rounded-full text-[10px] font-black uppercase tracking-[0.5em] hover:bg-stone-900 hover:text-white transition-all italic">
            Journal_01
          </button>
        </div>
        <div className="col-span-12 lg:col-span-8 relative group/img overflow-hidden rounded-[2.5rem] shadow-2xl">
           <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop" className="w-full h-[500px] object-cover grayscale transition-transform duration-[2s] group-hover/img:scale-110" alt="Minimal" />
           <div className="absolute inset-0 bg-stone-900/10 mix-blend-overlay"></div>
           <div className="absolute bottom-10 left-10 text-white z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] italic drop-shadow-lg">Case_Study: Concrete_Monolith</span>
           </div>
        </div>
      </div>
    </div>
  </div>
);`} 
              htmlCode={`<div class="landing-minimal">
  <nav class="navbar">
    <div class="logo">LUMINA<span>.</span></div>
    <div class="nav-links">
      <a href="#">Portfolio</a>
      <a href="#">Process</a>
      <a href="#">Contact</a>
    </div>
    <button class="nav-btn">Inquire</button>
  </nav>

  <div class="hero">
    <h1>Pure <br><span class="accent">Space</span> <br>Design.</h1>
    <div class="bottom-grid">
      <div class="text-block">
        <p>We sculpt environments that transcend utility. A synthesis of elemental geometry and atmospheric light.</p>
        <button class="secondary">Journal_01</button>
      </div>
      <div class="image-block">
        <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop" alt="Minimal">
        <div class="overlay"></div>
        <div class="caption">Case_Study: Concrete_Monolith</div>
      </div>
    </div>
  </div>
</div>`} 
              cssCode={`.landing-minimal { background: #f8f7f4; padding: 48px; border-radius: 48px; border: 1px solid #e7e5e4; font-family: serif; color: #1c1917; }
.navbar { display: flex; justify-content: space-between; align-items: center; padding: 40px 0; max-width: 1280px; margin: 0 auto 96px; border-bottom: 1px solid #e7e5e4; }
.logo { font-weight: 900; font-size: 40px; font-style: italic; letter-spacing: -0.05em; }
.logo span { color: #a8a29e; }
.nav-links { display: none; gap: 64px; }
@media (min-width: 1024px) { .nav-links { display: flex; } }
.nav-links a { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; color: #a8a29e; text-decoration: none; font-style: italic; transition: 0.3s; }
.nav-links a:hover { color: #1c1917; }
.nav-btn { background: #1c1917; color: white; padding: 16px 32px; border: none; border-radius: 999px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; cursor: pointer; font-style: italic; transition: 0.3s; }
.nav-btn:hover { background: #44403c; }
.hero { max-width: 1280px; margin: 0 auto 160px; }
h1 { font-size: 14vw; line-height: 0.75; font-weight: 900; letter-spacing: -0.05em; text-transform: uppercase; margin-bottom: 96px; }
.accent { margin-left: 10%; font-style: italic; color: #d6d3d1; }
.bottom-grid { display: grid; grid-template-columns: 1fr; gap: 64px; align-items: flex-end; }
@media (min-width: 1024px) { .bottom-grid { grid-template-columns: 1fr 2fr; } }
.text-block p { font-size: 20px; color: #78716c; font-weight: 500; font-style: italic; line-height: 1.6; text-transform: lowercase; margin-bottom: 48px; font-family: sans-serif; }
.secondary { padding: 24px 48px; background: transparent; border: 2px solid #1c1917; color: #1c1917; border-radius: 999px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; cursor: pointer; font-style: italic; transition: 0.3s; }
.secondary:hover { background: #1c1917; color: white; }
.image-block { position: relative; overflow: hidden; border-radius: 40px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15); }
.image-block img { width: 100%; height: 500px; object-fit: cover; filter: grayscale(1); transition: 2s; }
.image-block:hover img { transform: scale(1.1); }
.overlay { position: absolute; inset: 0; background: rgba(28, 25, 23, 0.1); mix-blend-mode: overlay; }
.caption { position: absolute; bottom: 40px; left: 40px; color: white; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; font-style: italic; text-shadow: 0 2px 4px rgba(0,0,0,0.5); }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-stone-400 uppercase tracking-[0.5em] block text-center mb-12 border-b border-stone-50 pb-6 italic leading-none"> 03. Minimalist Architecture Premium </span>
              <LandingMinimal />
          </div>
        </section>

        {/* 04. Developer Tools */}
        <section className="bg-white p-4 rounded-[40px] border border-slate-800 relative group shadow-sm transition-all hover:shadow-2xl hover:border-emerald-500/20">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const LandingDev = () => (
  <div className="bg-[#050505] text-white p-12 rounded-[3rem] border-2 border-slate-800 font-mono relative overflow-hidden group">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center py-8 mb-24 border-b border-slate-900">
        <div className="text-emerald-500 font-black italic tracking-tighter text-xl uppercase">&lt;DEVOPS_NODE /&gt;</div>
        <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 italic">
          <a href="#" className="hover:text-emerald-400 transition-colors">Documentation</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">API_Specs</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Cluster_Status</a>
        </div>
        <div className="hidden md:block">
           <span className="text-[10px] text-emerald-500/50 font-black uppercase italic tracking-widest">Sys_Time: 12:44:02_UTC</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
        <div>
          <div className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded text-[10px] font-black uppercase tracking-widest italic mb-10">v4.0.2_STABLE_BUILD</div>
          <h1 className="text-7xl font-black mb-10 tracking-tighter italic uppercase leading-[0.9]">
            Architect <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Global Clusters.</span>
          </h1>
          <p className="text-slate-500 mb-12 text-lg font-medium italic leading-relaxed lowercase max-w-md">
            Zero-latency edge distribution. Automated scaling protocols. Hardened security at the kernel level.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="relative flex-1">
              <input type="email" placeholder="root@admin.local" className="w-full bg-slate-900 border-2 border-slate-800 text-white px-6 py-5 rounded-2xl focus:outline-none focus:border-emerald-500 transition-all font-black text-xs italic" />
            </div>
            <button className="bg-emerald-600 text-black px-12 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-900/20 italic">
              Deploy_Instance
            </button>
          </div>
        </div>

        <div className="bg-[#0d1117] rounded-[2rem] border-2 border-slate-800 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700">
          <div className="flex items-center justify-between px-8 py-5 bg-[#161b22] border-b-2 border-slate-800">
            <div className="flex gap-2.5">
              <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest italic">cluster_deploy.yml</span>
          </div>
          <div className="p-10 text-sm text-slate-400 leading-relaxed overflow-x-auto font-black italic">
            <p><span className="text-emerald-400">kind</span>: Deployment</p>
            <p><span className="text-emerald-400">metadata</span>:</p>
            <p className="pl-6">name: production-cluster</p>
            <p><span className="text-emerald-400">spec</span>:</p>
            <p className="pl-6">replicas: <span className="text-cyan-400">64</span></p>
            <p className="pl-6">strategy: RollingUpdate</p>
            <p className="pl-6">template:</p>
            <p className="pl-10">containers:</p>
            <p className="pl-14">- image: nexus/core:latest</p>
            <p className="pl-14">ports: [80, 443]</p>
            <p className="mt-8 text-emerald-600/50 text-[10px] animate-pulse">// 🚀 CLUSTER_PROVISIONING_COMPLETE (240ms)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);`} 
              htmlCode={`<div class="landing-dev">
  <div class="edge-light"></div>
  <div class="container">
    <nav class="navbar">
      <div class="logo">&lt;DEVOPS_NODE /&gt;</div>
      <div class="nav-links">
        <a href="#">Documentation</a>
        <a href="#">API_Specs</a>
        <a href="#">Cluster_Status</a>
      </div>
    </nav>
    <div class="hero-grid">
      <div class="text-block">
        <div class="build-tag">v4.0.2_STABLE_BUILD</div>
        <h1>Architect <br><span class="gradient-text">Global Clusters.</span></h1>
        <p>Zero-latency edge distribution. Automated scaling protocols. Hardened security at the kernel level.</p>
        <div class="input-group">
          <input type="email" placeholder="root@admin.local">
          <button class="primary">Deploy_Instance</button>
        </div>
      </div>
      <div class="editor-block">
        <div class="editor-header">
          <div class="dots"><span></span><span></span><span></span></div>
          <div class="filename">cluster_deploy.yml</div>
        </div>
        <div class="editor-body">
          <p><span class="key">kind</span>: Deployment</p>
          <p><span class="key">metadata</span>:</p>
          <p class="p-1">name: production-cluster</p>
          <p><span class="key">spec</span>:</p>
          <p class="p-1">replicas: <span class="val">64</span></p>
          <div class="status">// 🚀 CLUSTER_PROVISIONING_COMPLETE (240ms)</div>
        </div>
      </div>
    </div>
  </div>
</div>`} 
              cssCode={`.landing-dev { background: #050505; padding: 48px; border-radius: 48px; border: 2px solid #1e293b; font-family: monospace; color: white; position: relative; overflow: hidden; }
.edge-light { position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(to right, transparent, #10b981, transparent); opacity: 0.5; }
.container { max-width: 1280px; margin: 0 auto; position: relative; z-index: 10; }
.navbar { display: flex; justify-content: space-between; align-items: center; padding: 32px 0; border-bottom: 1px solid #0f172a; margin-bottom: 96px; }
.logo { color: #10b981; font-weight: 900; font-style: italic; font-size: 20px; letter-spacing: -0.05em; }
.nav-links { display: flex; gap: 40px; }
.nav-links a { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; color: #64748b; text-decoration: none; font-style: italic; transition: 0.3s; }
.hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 96px; align-items: center; margin-bottom: 128px; }
.build-tag { display: inline-block; padding: 6px 16px; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); color: #10b981; border-radius: 4px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; font-style: italic; margin-bottom: 40px; }
h1 { font-size: 72px; font-weight: 900; letter-spacing: -0.05em; text-transform: uppercase; line-height: 0.9; font-style: italic; margin-bottom: 40px; }
.gradient-text { background: linear-gradient(to right, #34d399, #22d3ee); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
p { color: #64748b; font-size: 18px; font-weight: 500; font-style: italic; line-height: 1.6; text-transform: lowercase; max-width: 448px; margin-bottom: 48px; }
.input-group { display: flex; gap: 24px; }
input { flex: 1; background: #0f172a; border: 2px solid #1e293b; color: white; padding: 20px 24px; border-radius: 16px; font-family: monospace; font-size: 12px; font-weight: 900; font-style: italic; transition: 0.3s; }
.primary { padding: 20px 40px; background: #059669; color: black; border: none; border-radius: 16px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 10px; cursor: pointer; transition: 0.3s; font-style: italic; }
.editor-block { background: #0d1117; border: 2px solid #1e293b; border-radius: 32px; box-shadow: 0 40px 100px -20px rgba(0,0,0,0.8); overflow: hidden; }
.editor-header { background: #161b22; padding: 20px 32px; display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #1e293b; }
.dots { display: flex; gap: 10px; }
.dots span { width: 14px; height: 14px; border-radius: 50%; }
.dots span:nth-child(1) { background: #ff5f56; }
.dots span:nth-child(2) { background: #ffbd2e; }
.dots span:nth-child(3) { background: #27c93f; }
.filename { color: #484f58; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; font-style: italic; }
.editor-body { padding: 40px; font-size: 14px; line-height: 1.8; color: #8b949e; font-style: italic; font-weight: 900; }
.key { color: #10b981; }
.val { color: #22d3ee; }
.p-1 { padding-left: 24px; }
.status { margin-top: 32px; color: rgba(16, 185, 129, 0.5); font-size: 10px; animation: blink 1s infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-slate-900 pb-6 italic leading-none"> 04. Developer Tools Premium </span>
              <LandingDev />
          </div>
        </section>

        {/* 05. Mobile App */}
        <section className="bg-white p-4 rounded-[40px] border border-orange-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-orange-200/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const LandingMobile = () => (
  <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 relative overflow-hidden group">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-50/50 -skew-x-12 translate-x-24"></div>
    <div className="max-w-7xl mx-auto relative z-10">
      <nav className="flex justify-between items-center py-8 mb-20">
        <div className="font-black text-2xl tracking-tighter italic text-slate-900">FLARE<span className="text-orange-500">.</span></div>
        <button className="px-10 py-4 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-orange-500 transition-all italic">
          Sign In
        </button>
      </nav>

      <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
        <div>
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-orange-50 text-orange-600 text-[10px] font-black uppercase tracking-[0.4em] mb-10 border border-orange-100 italic">
            Now available on iOS & Android
          </div>
          <h1 className="text-7xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9] italic uppercase">
            Capture <br/>
            Every <span className="text-orange-500 underline decoration-8 decoration-orange-100 underline-offset-8">Moment.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-lg mb-16 font-medium italic leading-relaxed lowercase">
            The social layer for your digital life. Seamless sharing, powerful editing, and absolute privacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="flex items-center gap-4 px-10 py-6 bg-slate-900 text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-orange-600 transition-all shadow-2xl shadow-slate-200 italic">
               <span className="text-2xl"></span> App Store
            </button>
            <button className="flex items-center gap-4 px-10 py-6 bg-slate-900 text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-orange-600 transition-all shadow-2xl shadow-slate-200 italic">
               <span className="text-2xl">▶</span> Play Store
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100/50 rounded-full blur-[100px] -z-10"></div>
          <div className="relative mx-auto w-[320px] aspect-[9/19.5] bg-slate-900 rounded-[3.5rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden group/phone">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-3xl z-20"></div>
            <div className="p-8 h-full bg-white flex flex-col justify-end relative">
               <div className="absolute inset-0 bg-gradient-to-b from-orange-400 to-rose-500 opacity-20"></div>
               <div className="relative z-10 bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white">
                  <div className="w-12 h-12 bg-orange-500 rounded-2xl mb-4 shadow-lg shadow-orange-200 animate-bounce"></div>
                  <div className="h-4 w-3/4 bg-slate-200 rounded-full mb-3"></div>
                  <div className="h-4 w-1/2 bg-slate-100 rounded-full"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);`} 
              htmlCode={`<div class="landing-mobile">
  <div class="bg-shape"></div>
  <div class="container">
    <nav class="navbar">
      <div class="logo">FLARE<span>.</span></div>
      <button class="nav-btn">Sign In</button>
    </nav>
    <div class="hero-grid">
      <div class="text-block">
        <div class="badge">Now available on iOS & Android</div>
        <h1>Capture <br>Every <span class="accent">Moment.</span></h1>
        <p>The social layer for your digital life. Seamless sharing, powerful editing, and absolute privacy.</p>
        <div class="store-btns">
          <button class="store-btn">App Store</button>
          <button class="store-btn">Play Store</button>
        </div>
      </div>
      <div class="phone-block">
        <div class="phone">
          <div class="screen">
            <div class="card">
              <div class="icon"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`} 
              cssCode={`.landing-mobile { background: white; padding: 48px; border-radius: 56px; border: 1px solid #f1f5f9; position: relative; overflow: hidden; font-family: sans-serif; }
.bg-shape { position: absolute; top: 0; right: 0; width: 50%; height: 100%; background: #fff7ed; transform: skewX(-12deg) translateX(96px); }
.container { max-width: 1280px; margin: 0 auto; position: relative; z-index: 10; }
.navbar { display: flex; justify-content: space-between; align-items: center; padding: 32px 0; }
.logo { font-weight: 900; font-size: 24px; color: #0f172a; font-style: italic; }
.logo span { color: #f97316; }
.hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; margin: 96px 0; }
.badge { display: inline-flex; padding: 8px 24px; background: #fff7ed; color: #f97316; border-radius: 99px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 40px; }
h1 { font-size: 96px; font-weight: 900; color: #0f172a; line-height: 0.9; font-style: italic; text-transform: uppercase; }
.accent { color: #f97316; text-decoration: underline; text-decoration-color: #ffedd5; text-underline-offset: 8px; }
p { font-size: 20px; color: #94a3b8; max-width: 448px; margin-bottom: 64px; }
.store-btns { display: flex; gap: 24px; }
.store-btn { padding: 24px 40px; background: #0f172a; color: white; border: none; border-radius: 32px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; font-size: 12px; cursor: pointer; }
.phone { width: 320px; aspect-ratio: 9/19.5; background: #0f172a; border-radius: 56px; border: 8px solid #1e293b; overflow: hidden; }
.screen { height: 100%; background: white; position: relative; padding: 32px; display: flex; align-items: flex-end; }
.card { background: rgba(255,255,255,0.8); backdrop-filter: blur(20px); padding: 32px; border-radius: 24px; width: 100%; }
.icon { width: 48px; height: 48px; background: #f97316; border-radius: 16px; animation: bounce 2s infinite; }
@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-orange-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-orange-50 pb-6 italic leading-none"> 05. Mobile App Showcase Premium </span>
              <LandingMobile />
          </div>
        </section>

        {/* 06. Cyberpunk */}
        <section className="bg-white p-4 rounded-[40px] border border-cyan-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-cyan-200/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const LandingCyber = () => (
  <div className="bg-[#050505] text-white p-12 rounded-[3rem] border-2 border-slate-900 relative overflow-hidden group">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(34,211,238,0.05)_1.5px,transparent_1.5px)] bg-[size:40px_40px]"></div>
    <div className="max-w-7xl mx-auto relative z-10">
      <nav className="flex justify-between items-center py-8 mb-24 border-b border-white/5 font-mono">
        <div className="text-cyan-400 font-black tracking-tighter text-2xl italic uppercase">CYBER<span className="text-white">DEX</span></div>
        <div className="hidden lg:flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 italic">
          <a href="#" className="hover:text-cyan-400 transition-colors">Trade</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Stake</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">DAO</a>
        </div>
        <button className="px-10 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)] italic">
          Connect_Vault
        </button>
      </nav>

      <div className="text-center mb-32">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border-2 border-pink-500/30 text-pink-500 text-[10px] font-black uppercase tracking-[0.4em] mb-10 italic animate-pulse">
           Live_Status: Fully_Operational
        </div>
        <h1 className="text-7xl md:text-9xl font-black mb-10 italic uppercase tracking-tighter leading-none" style={{ textShadow: "6px 6px 0px #06b6d4" }}>
          Decentralize <br/>
          Everything.
        </h1>
        <p className="text-slate-400 text-xl font-mono max-w-2xl mx-auto mb-16 italic leading-relaxed lowercase">
          Trade assets with zero slippage. Institutional grade liquidity on a permissionless protocol.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
           <button className="px-12 py-6 bg-cyan-500 text-black font-black uppercase tracking-[0.3em] text-xs hover:bg-cyan-400 transition-all hover:scale-105 italic shadow-[0_0_30px_rgba(6,182,212,0.4)]">Initialize Trading</button>
           <button className="px-12 py-6 bg-transparent border-2 border-slate-800 text-white font-black uppercase tracking-[0.3em] text-xs hover:border-white transition-all italic">Read Manifest_v2</button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-1 border-t border-white/5 pt-12 font-mono">
         {[ {l: 'BTC/USD', v: '42,102.00', c: 'text-cyan-400'}, {l: 'ETH/USD', v: '2,450.12', c: 'text-pink-500'}, {l: 'SOL/USD', v: '108.44', c: 'text-cyan-400'}, {l: 'GAS_GWEI', v: '24', c: 'text-white'} ].map((item, i) => (
           <div key={i} className="text-center p-8 bg-white/2">
              <span className="block text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2 italic">{item.l}</span>
              <span className={\`text-2xl font-black italic tracking-tighter \${item.c}\`}>{item.v}</span>
           </div>
         ))}
      </div>
    </div>
  </div>
);`} 
              htmlCode={`<div class="landing-cyber">
  <div class="grid-overlay"></div>
  <div class="container">
    <nav class="navbar">
      <div class="logo">CYBER<span>DEX</span></div>
      <div class="nav-links">
        <a href="#">Trade</a>
        <a href="#">Stake</a>
        <a href="#">DAO</a>
      </div>
      <button class="nav-btn">Connect_Vault</button>
    </nav>

    <div class="hero">
      <div class="status-badge">Live_Status: Fully_Operational</div>
      <h1 class="glitch-text">Decentralize <br>Everything.</h1>
      <p class="mono-p">Trade assets with zero slippage. Institutional grade liquidity on a permissionless protocol.</p>
      <div class="cta-group">
        <button class="primary">Initialize Trading</button>
        <button class="secondary">Read Manifest_v2</button>
      </div>
    </div>

    <div class="ticker-grid">
      <div class="ticker-item"><span>BTC/USD</span><p class="cyan">42,102.00</p></div>
      <div class="ticker-item"><span>ETH/USD</span><p class="pink">2,450.12</p></div>
      <div class="ticker-item"><span>SOL/USD</span><p class="cyan">108.44</p></div>
      <div class="ticker-item"><span>GAS_GWEI</span><p class="white">24</p></div>
    </div>
  </div>
</div>`} 
              cssCode={`.landing-cyber { background: #050505; padding: 48px; border-radius: 56px; border: 2px solid #1e293b; position: relative; overflow: hidden; font-family: monospace; color: white; }
.grid-overlay { position: absolute; inset: 0; background-image: linear-gradient(rgba(34,211,238,0.05) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(34,211,238,0.05) 1.5px, transparent 1.5px); background-size: 40px 40px; }
.container { max-width: 1280px; margin: 0 auto; position: relative; z-index: 10; }
.navbar { display: flex; justify-content: space-between; align-items: center; padding: 32px 0; border-bottom: 1px solid rgba(255,255,255,0.05); margin-bottom: 96px; }
.logo { font-weight: 900; font-size: 24px; color: #22d3ee; font-style: italic; letter-spacing: -0.05em; }
.logo span { color: white; }
.nav-links { display: none; gap: 48px; }
@media (min-width: 1024px) { .nav-links { display: flex; } }
.nav-links a { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; color: #64748b; text-decoration: none; font-style: italic; }
.nav-btn { padding: 16px 40px; background: transparent; border: 2px solid rgba(6,182,212,0.5); color: #22d3ee; border-radius: 16px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; cursor: pointer; font-style: italic; box-shadow: 0 0 20px rgba(6,182,212,0.2); transition: 0.3s; }
.nav-btn:hover { background: #22d3ee; color: black; }
.hero { text-align: center; margin-bottom: 128px; }
.status-badge { display: inline-flex; padding: 8px 24px; border: 2px solid rgba(236,72,153,0.3); color: #ec4899; border-radius: 99px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 40px; font-style: italic; animation: pulse 2s infinite; }
@keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }
.glitch-text { font-size: 96px; font-weight: 900; line-height: 1; font-style: italic; text-transform: uppercase; letter-spacing: -0.05em; text-shadow: 6px 6px 0px #06b6d4; margin-bottom: 40px; }
.mono-p { font-size: 20px; color: #94a3b8; max-width: 672px; margin: 0 auto 64px; font-style: italic; line-height: 1.6; text-transform: lowercase; }
.cta-group { display: flex; flex-direction: column; gap: 32px; justify-content: center; }
@media (min-width: 640px) { .cta-group { flex-direction: row; } }
.primary { padding: 24px 48px; background: #22d3ee; color: black; border: none; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 12px; cursor: pointer; transition: 0.3s; font-style: italic; box-shadow: 0 0 30px rgba(6,182,212,0.4); }
.primary:hover { background: #67e8f9; transform: scale(1.05); }
.secondary { padding: 24px 48px; background: transparent; border: 2px solid #1e293b; color: white; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 12px; cursor: pointer; transition: 0.3s; font-style: italic; }
.ticker-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 4px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 48px; }
@media (min-width: 768px) { .ticker-grid { grid-template-columns: repeat(4, 1fr); } }
.ticker-item { text-align: center; padding: 32px; background: rgba(255,255,255,0.02); }
.ticker-item span { display: block; font-size: 10px; color: #64748b; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 8px; font-style: italic; }
.ticker-item p { font-size: 24px; font-weight: 900; font-style: italic; margin: 0; letter-spacing: -0.05em; }
.cyan { color: #22d3ee; }
.pink { color: #ec4899; }
.white { color: white; }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.5em] block text-center mb-12 border-b border-white/5 pb-6 italic leading-none"> 06. Cyberpunk Web3 Premium </span>
              <LandingCyber />
          </div>
        </section>

        {/* 07. Fashion */}
        <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-slate-200/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const LandingFashion = () => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 relative group min-h-[800px] flex items-center overflow-hidden">
    <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-[3s]">
       <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[5s]" alt="Fashion" />
    </div>
    <div className="absolute inset-0 bg-black/40"></div>
    
    <div className="relative z-10 w-full max-w-7xl mx-auto text-white">
      <nav className="flex justify-between items-center py-8 absolute top-0 left-0 right-0">
        <div className="font-serif font-black text-4xl tracking-widest uppercase italic">VOGUE</div>
        <div className="hidden lg:flex gap-16 text-[10px] font-black uppercase tracking-[0.6em] italic">
          <a href="#" className="hover:text-slate-300 transition-colors">Spring_24</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Editorial</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Archives</a>
        </div>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest italic">
           <span>Search</span>
           <span className="bg-white text-black px-4 py-1 rounded-full">Bag (0)</span>
        </div>
      </nav>

      <div className="max-w-3xl mt-40">
        <div className="inline-block h-px w-24 bg-white/50 mb-10"></div>
        <span className="block text-[10px] font-black uppercase tracking-[0.5em] mb-12 italic">Collection_Series_012</span>
        <h1 className="text-8xl md:text-9xl font-serif font-black mb-16 leading-[0.8] italic uppercase tracking-tighter">
          Elegance <br/>
          <span className="text-white/40">is</span> <br/>
          Elimination.
        </h1>
        <button className="px-16 py-6 bg-white text-black font-black uppercase tracking-[0.4em] text-[10px] hover:bg-black hover:text-white transition-all italic">
          Explore Collection
        </button>
      </div>

      <div className="absolute bottom-12 right-0 flex gap-12 items-end">
         <div className="text-right">
            <span className="block text-[10px] font-black uppercase tracking-widest text-white/50 mb-2 italic">Global Shipping</span>
            <span className="text-xl font-serif italic uppercase">Priority Access</span>
         </div>
         <div className="w-20 h-20 border border-white/30 rounded-full flex items-center justify-center animate-spin-slow">
            <span className="text-xl">↓</span>
         </div>
      </div>
    </div>
  </div>
);`} 
              htmlCode={`<div class="landing-fashion">
  <div class="image-bg">
    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop" alt="Fashion">
  </div>
  <div class="overlay"></div>
  
  <div class="container">
    <nav class="navbar">
      <div class="logo">VOGUE</div>
      <div class="nav-links">
        <a href="#">Spring_24</a>
        <a href="#">Editorial</a>
        <a href="#">Archives</a>
      </div>
      <div class="user-links">
         <span>Search</span>
         <span class="bag">Bag (0)</span>
      </div>
    </nav>

    <div class="hero">
      <div class="line"></div>
      <span class="series">Collection_Series_012</span>
      <h1>Elegance <br><span class="muted">is</span> <br>Elimination.</h1>
      <button class="primary">Explore Collection</button>
    </div>

    <div class="footer">
       <div class="info">
          <span>Global Shipping</span>
          <p>Priority Access</p>
       </div>
       <div class="scroll-btn">↓</div>
    </div>
  </div>
</div>`} 
              cssCode={`.landing-fashion { background: white; padding: 48px; border-radius: 56px; border: 1px solid #f1f5f9; position: relative; overflow: hidden; min-height: 800px; display: flex; align-items: center; font-family: serif; color: white; }
.image-bg { position: absolute; inset: 0; grayscale: 1; transition: 3s; }
.landing-fashion:hover .image-bg { grayscale: 0; }
.image-bg img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.1); transition: 5s; }
.landing-fashion:hover .image-bg img { transform: scale(1); }
.overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.4); }
.container { max-width: 1280px; margin: 0 auto; position: relative; z-index: 10; width: 100%; }
.navbar { display: flex; justify-content: space-between; align-items: center; padding: 32px 0; position: absolute; top: 0; left: 0; right: 0; }
.logo { font-weight: 900; font-size: 40px; letter-spacing: 0.2em; font-style: italic; }
.nav-links { display: none; gap: 64px; }
@media (min-width: 1024px) { .nav-links { display: flex; } }
.nav-links a { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.6em; color: white; text-decoration: none; font-style: italic; }
.user-links { display: flex; gap: 32px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; font-style: italic; align-items: center; }
.bag { background: white; color: black; padding: 4px 16px; border-radius: 99px; }
.hero { margin-top: 160px; max-width: 768px; }
.line { height: 1px; width: 96px; background: rgba(255,255,255,0.5); margin-bottom: 40px; }
.series { display: block; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; margin-bottom: 48px; font-style: italic; }
h1 { font-size: 96px; font-weight: 900; line-height: 0.8; font-style: italic; text-transform: uppercase; letter-spacing: -0.05em; margin-bottom: 64px; }
@media (min-width: 768px) { h1 { font-size: 128px; } }
.muted { color: rgba(255,255,255,0.4); }
.primary { padding: 24px 64px; background: white; color: black; border: none; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; font-size: 10px; cursor: pointer; transition: 0.3s; font-style: italic; }
.primary:hover { background: black; color: white; }
.footer { position: absolute; bottom: 0; right: 0; display: flex; gap: 48px; align-items: flex-end; }
.info span { display: block; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; color: rgba(255,255,255,0.5); margin-bottom: 8px; font-style: italic; }
.info p { font-size: 20px; margin: 0; font-style: italic; text-transform: uppercase; }
.scroll-btn { width: 80px; height: 80px; border: 1px solid rgba(255,255,255,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; animation: spin 10s linear infinite; }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] block text-center mb-12 border-b border-slate-50 pb-6 italic leading-none"> 07. Fashion E-commerce Premium </span>
              <LandingFashion />
          </div>
        </section>

        {/* 08. Glassmorphism */}
        <section className="bg-white p-4 rounded-[40px] border border-indigo-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-200/50">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const LandingGlass = () => (
  <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-rose-500 p-12 rounded-[4rem] min-h-[700px] flex items-center justify-center relative overflow-hidden group">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_rgba(255,255,255,0.2)_0%,_transparent_50%)]"></div>
    <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400/30 rounded-full blur-[100px] animate-pulse"></div>
    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400/30 rounded-full blur-[100px]"></div>

    <div className="relative z-10 w-full max-w-7xl mx-auto text-white">
       <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-16 md:p-24 rounded-[4rem] shadow-2xl relative overflow-hidden text-center group/card">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000"></div>
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.4em] mb-12 italic">
             <span className="w-2 h-2 rounded-full bg-yellow-400"></span> Creativity_Unleashed_v.8
          </div>
          <h1 className="text-7xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none italic uppercase">
             Imagine. <br/>
             Create. <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-rose-300">Inspire.</span>
          </h1>
          <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto mb-16 italic leading-relaxed lowercase">
             The ultimate design ecosystem for the next generation of visual architects. Fluid. Bold. Transcendental.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
             <button className="px-16 py-6 bg-white text-indigo-600 rounded-[2.5rem] font-black uppercase tracking-[0.3em] text-xs hover:scale-105 transition-all shadow-2xl shadow-indigo-900/40 italic">Start Building</button>
             <button className="px-16 py-6 bg-white/10 border-2 border-white/20 text-white rounded-[2.5rem] font-black uppercase tracking-[0.3em] text-xs hover:bg-white/20 transition-all italic">Watch Showreel</button>
          </div>
       </div>
    </div>
  </div>
);`} 
              htmlCode={`<div class="landing-glass">
  <div class="blobs">
    <div class="blob b-1"></div>
    <div class="blob b-2"></div>
  </div>
  
  <div class="container">
     <div class="glass-card">
        <div class="badge">Creativity_Unleashed_v.8</div>
        <h1>Imagine. <br>Create. <br><span class="gradient-text">Inspire.</span></h1>
        <p>The ultimate design ecosystem for the next generation of visual architects. Fluid. Bold. Transcendental.</p>
        <div class="cta-group">
           <button class="primary">Start Building</button>
           <button class="secondary">Watch Showreel</button>
        </div>
     </div>
  </div>
</div>`} 
              cssCode={`.landing-glass { background: linear-gradient(to bottom right, #4f46e5, #9333ea, #f43f5e); padding: 48px; border-radius: 64px; min-height: 700px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; font-family: sans-serif; }
.blobs { position: absolute; inset: 0; }
.blob { position: absolute; border-radius: 50%; filter: blur(100px); }
.b-1 { top: -96px; left: -96px; width: 384px; height: 384px; background: rgba(250, 204, 21, 0.3); animation: pulse 4s infinite; }
.b-2 { bottom: -96px; right: -96px; width: 384px; height: 384px; background: rgba(34, 211, 238, 0.3); }
@keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; } }
.container { width: 100%; max-width: 1024px; position: relative; z-index: 10; }
.glass-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.2); padding: 64px; border-radius: 64px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); text-align: center; }
.badge { display: inline-flex; align-items: center; gap: 16px; padding: 8px 24px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 99px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 48px; font-style: italic; }
h1 { font-size: 72px; font-weight: 900; color: white; line-height: 1; font-style: italic; text-transform: uppercase; letter-spacing: -0.05em; margin-bottom: 40px; }
.gradient-text { background: linear-gradient(to right, #fde047, #fda4af); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
p { font-size: 20px; color: rgba(255,255,255,0.8); max-width: 672px; margin: 0 auto 64px; font-style: italic; line-height: 1.6; text-transform: lowercase; }
.cta-group { display: flex; flex-direction: column; gap: 32px; justify-content: center; }
@media (min-width: 640px) { .cta-group { flex-direction: row; } }
.primary { padding: 24px 64px; background: white; color: #4f46e5; border: none; border-radius: 40px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 12px; cursor: pointer; transition: 0.3s; font-style: italic; box-shadow: 0 25px 50px rgba(0,0,0,0.4); }
.primary:hover { transform: scale(1.05); }
.secondary { padding: 24px 64px; background: rgba(255,255,255,0.1); border: 2px solid rgba(255,255,255,0.2); color: white; border-radius: 40px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 12px; cursor: pointer; transition: 0.3s; font-style: italic; }
.secondary:hover { background: rgba(255,255,255,0.2); }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.5em] block text-center mb-12 border-b border-indigo-50 pb-6 italic leading-none"> 08. Glassmorphism Creative Premium </span>
              <LandingGlass />
          </div>
        </section>

        {/* 09. Brutalist */}
        <section className="bg-white p-4 rounded-[40px] border-4 border-black relative group shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const LandingBrutalist = () => (
  <div className="bg-[#facc15] p-12 rounded-none border-8 border-black group">
    <nav className="flex justify-between items-center py-8 border-b-8 border-black mb-24">
      <div className="font-black text-4xl tracking-tighter uppercase italic bg-black text-white px-6">RAW_CORE</div>
      <div className="hidden lg:flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] italic">
        <a href="#" className="hover:bg-white px-2 transition-colors">Tactics</a>
        <a href="#" className="hover:bg-white px-2 transition-colors">Intel</a>
        <a href="#" className="hover:bg-white px-2 transition-colors">Orders</a>
      </div>
      <button className="px-10 py-4 bg-rose-500 text-black border-4 border-black font-black uppercase tracking-widest hover:translate-x-1 hover:translate-y-1 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all italic">
        Deploy_Now
      </button>
    </nav>

    <div className="grid lg:grid-cols-2 gap-1 border-b-8 border-black pb-24 mb-24">
       <div>
          <h1 className="text-8xl md:text-9xl font-black leading-[0.8] mb-12 italic uppercase tracking-tighter">
             Anti <br/>
             Design <br/>
             Protocol.
          </h1>
          <p className="text-black text-xl font-bold max-w-lg mb-16 italic leading-none uppercase tracking-tight">
             No gradients. No shadows. No mercy. A brutalist framework for high-impact communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-8">
             <button className="px-12 py-6 bg-black text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-rose-500 hover:text-black transition-all italic">Execute_Order</button>
             <button className="px-12 py-6 bg-white border-4 border-black text-black font-black uppercase tracking-[0.3em] text-xs hover:bg-black hover:text-white transition-all italic">View_Schematics</button>
          </div>
       </div>
       <div className="relative border-8 border-black bg-white aspect-square overflow-hidden group/viz">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#000,#000_10px,#fff_10px,#fff_20px)] opacity-10"></div>
          <div className="h-full w-full flex items-center justify-center relative z-10">
             <div className="w-3/4 h-3/4 border-8 border-black bg-rose-500 flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-700">
                <span className="text-8xl font-black text-black italic">!</span>
             </div>
          </div>
       </div>
    </div>

    <div className="flex justify-between font-black text-[10px] uppercase tracking-widest italic">
       <span>V.9.0.0_PRODUCTION</span>
       <span>NO_GUTTERS_ALLOWED</span>
       <span>EST_2024</span>
    </div>
  </div>
);`} 
              htmlCode={`<div class="landing-brutalist">
  <nav class="navbar">
    <div class="logo">RAW_CORE</div>
    <div class="nav-links">
      <a href="#">Tactics</a>
      <a href="#">Intel</a>
      <a href="#">Orders</a>
    </div>
    <button class="nav-btn">Deploy_Now</button>
  </nav>

  <div class="hero-grid">
     <div class="text-side">
        <h1>Anti <br>Design <br>Protocol.</h1>
        <p>No gradients. No shadows. No mercy. A brutalist framework for high-impact communication.</p>
        <div class="cta-group">
           <button class="primary">Execute_Order</button>
           <button class="secondary">View_Schematics</button>
        </div>
     </div>
     <div class="viz-side">
        <div class="stripe-bg"></div>
        <div class="box">!</div>
     </div>
  </div>

  <div class="footer">
     <span>V.9.0.0_PRODUCTION</span>
     <span>NO_GUTTERS_ALLOWED</span>
     <span>EST_2024</span>
  </div>
</div>`} 
              cssCode={`.landing-brutalist { background: #facc15; padding: 48px; border: 8px solid black; font-family: sans-serif; color: black; }
.navbar { display: flex; justify-content: space-between; align-items: center; padding: 32px 0; border-bottom: 8px solid black; margin-bottom: 96px; }
.logo { font-weight: 900; font-size: 40px; font-style: italic; background: black; color: white; padding: 0 24px; letter-spacing: -0.05em; }
.nav-links { display: none; gap: 48px; }
@media (min-width: 1024px) { .nav-links { display: flex; } }
.nav-links a { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; color: black; text-decoration: none; font-style: italic; }
.nav-links a:hover { background: white; }
.nav-btn { padding: 16px 40px; background: #f43f5e; color: black; border: 4px solid black; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; cursor: pointer; font-style: italic; box-shadow: 4px 4px 0px black; transition: 0.1s; }
.nav-btn:hover { transform: translate(4px, 4px); box-shadow: none; }
.hero-grid { display: grid; grid-template-columns: 1fr; gap: 8px; border-bottom: 8px solid black; padding-bottom: 96px; margin-bottom: 96px; }
@media (min-width: 1024px) { .hero-grid { grid-template-columns: 1fr 1fr; } }
h1 { font-size: 80px; font-weight: 900; line-height: 0.8; font-style: italic; text-transform: uppercase; letter-spacing: -0.05em; margin-bottom: 48px; }
@media (min-width: 768px) { h1 { font-size: 112px; } }
p { font-size: 20px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; margin-bottom: 64px; font-style: italic; line-height: 1; }
.cta-group { display: flex; flex-direction: column; gap: 32px; }
@media (min-width: 640px) { .cta-group { flex-direction: row; } }
.primary { padding: 24px 48px; background: black; color: white; border: none; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 12px; cursor: pointer; transition: 0.3s; font-style: italic; }
.primary:hover { background: #f43f5e; color: black; }
.secondary { padding: 24px 48px; background: white; border: 4px solid black; color: black; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 12px; cursor: pointer; transition: 0.3s; font-style: italic; }
.secondary:hover { background: black; color: white; }
.viz-side { position: relative; border: 8px solid black; background: white; aspect-ratio: 1/1; overflow: hidden; display: flex; align-items: center; justify-content: center; }
.stripe-bg { position: absolute; inset: 0; background: repeating-linear-gradient(45deg, #000, #000 10px, #fff 10px, #fff 20px); opacity: 0.1; }
.box { width: 75%; height: 75%; border: 8px solid black; background: #f43f5e; display: flex; align-items: center; justify-content: center; font-size: 96px; font-weight: 900; font-style: italic; transition: 0.7s; }
.viz-side:hover .box { transform: rotate(45deg); }
.footer { display: flex; justify-content: space-between; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; font-style: italic; }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-slate-800 uppercase tracking-[0.5em] block text-center mb-12 border-b border-black/5 pb-6 italic leading-none"> 09. Brutalist Agency Premium </span>
              <LandingBrutalist />
          </div>
        </section>

        {/* 10. Neumorphic */}
        <section className="glass-card p-4 rounded-[40px] border border-[hsl(var(--border))] relative group shadow-sm transition-all hover:shadow-2xl">
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <CopyButton 
              jsxCode={`const LandingNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-12 rounded-[3.5rem] min-h-[700px] flex items-center group">
    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <div className="w-20 h-20 rounded-3xl bg-[#e0e5ec] shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] flex items-center justify-center text-3xl mb-12 transition-all hover:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff]">
           🧠
        </div>
        <h1 className="text-7xl font-black text-slate-700 mb-10 tracking-tighter italic uppercase leading-[0.9]">
           Tactile <br/>
           Intelligence.
        </h1>
        <p className="text-slate-500 text-xl font-medium mb-16 italic leading-relaxed lowercase max-w-lg">
           Experience the soft revolution. A sensory design system for a more human interface. Fluid. Tangible. Calm.
        </p>
        <div className="flex flex-col sm:flex-row gap-8">
           <button className="px-12 py-6 bg-[#e0e5ec] text-blue-600 rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-[10px_10px_20px_#b8b9be,-10px_-10px_20px_#ffffff] hover:shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] transition-all active:scale-95 italic">Initialize_Experience</button>
           <button className="px-12 py-6 bg-[#e0e5ec] text-slate-500 rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-[inset_10px_10px_20px_#b8b9be,inset_-10px_-10px_20px_#ffffff] hover:shadow-[10px_10px_20px_#b8b9be,-10px_-10px_20px_#ffffff] transition-all italic">Learn_More</button>
        </div>
      </div>

      <div className="relative">
         <div className="aspect-square rounded-[4rem] bg-[#e0e5ec] shadow-[30px_30px_60px_#b8b9be,-30px_-30px_60px_#ffffff] flex items-center justify-center p-16">
            <div className="w-full h-full rounded-[3rem] bg-[#e0e5ec] shadow-[inset_15px_15px_30px_#b8b9be,inset_-15px_-15px_30px_#ffffff] flex items-center justify-center">
               <div className="w-1/2 h-1/2 rounded-full bg-[#e0e5ec] shadow-[10px_10px_20px_#b8b9be,-10px_-10px_20px_#ffffff] animate-pulse"></div>
            </div>
         </div>
      </div>
    </div>
  </div>
);`} 
              htmlCode={`<div class="landing-neumorphic">
  <div class="container">
    <div class="content-grid">
      <div class="text-side">
        <div class="icon-box">🧠</div>
        <h1>Tactile <br>Intelligence.</h1>
        <p>Experience the soft revolution. A sensory design system for a more human interface. Fluid. Tangible. Calm.</p>
        <div class="cta-group">
           <button class="primary">Initialize_Experience</button>
           <button class="secondary">Learn_More</button>
        </div>
      </div>

      <div class="viz-side">
         <div class="outer-box">
            <div class="inner-box">
               <div class="circle"></div>
            </div>
         </div>
      </div>
    </div>
  </div>
</div>`} 
              cssCode={`.landing-neumorphic { background: #e0e5ec; padding: 48px; border-radius: 56px; min-height: 700px; display: flex; align-items: center; font-family: sans-serif; }
.container { width: 100%; max-width: 1280px; margin: 0 auto; }
.content-grid { display: grid; grid-template-columns: 1fr; gap: 96px; align-items: center; }
@media (min-width: 1024px) { .content-grid { grid-template-columns: 1fr 1fr; } }
.icon-box { width: 80px; height: 80px; border-radius: 24px; background: #e0e5ec; box-shadow: 8px 8px 16px #b8b9be, -8px -8px 16px #ffffff; display: flex; align-items: center; justify-content: center; font-size: 32px; margin-bottom: 48px; }
h1 { font-size: 72px; font-weight: 900; color: #334155; line-height: 0.9; font-style: italic; text-transform: uppercase; letter-spacing: -0.05em; margin-bottom: 40px; }
p { font-size: 20px; color: #64748b; max-width: 448px; margin-bottom: 64px; font-style: italic; line-height: 1.6; text-transform: lowercase; }
.cta-group { display: flex; flex-direction: column; gap: 32px; }
@media (min-width: 640px) { .cta-group { flex-direction: row; } }
.primary { padding: 24px 48px; background: #e0e5ec; color: #2563eb; border: none; border-radius: 16px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 12px; cursor: pointer; box-shadow: 10px 10px 20px #b8b9be, -10px -10px 20px #ffffff; transition: 0.3s; font-style: italic; }
.primary:hover { box-shadow: inset 6px 6px 12px #b8b9be, inset -6px -6px 12px #ffffff; }
.secondary { padding: 24px 48px; background: #e0e5ec; color: #64748b; border: none; border-radius: 16px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 12px; cursor: pointer; box-shadow: inset 10px 10px 20px #b8b9be, inset -10px -10px 20px #ffffff; transition: 0.3s; font-style: italic; }
.outer-box { aspect-ratio: 1/1; border-radius: 64px; background: #e0e5ec; box-shadow: 30px 30px 60px #b8b9be, -30px -30px 60px #ffffff; display: flex; align-items: center; justify-content: center; padding: 64px; }
.inner-box { width: 100%; height: 100%; border-radius: 48px; background: #e0e5ec; box-shadow: inset 15px 15px 30px #b8b9be, inset -15px -15px 30px #ffffff; display: flex; align-items: center; justify-content: center; }
.circle { width: 50%; height: 50%; border-radius: 50%; background: #e0e5ec; box-shadow: 10px 10px 20px #b8b9be, -10px -10px 20px #ffffff; animation: pulse 2s infinite; }
@keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }`} 
            />
          </div>
          <div className="p-12">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] block text-center mb-12 border-b border-slate-50 pb-6 italic leading-none"> 10. Neumorphic Soft UI Premium </span>
              <LandingNeumorphic />
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPageGallery;