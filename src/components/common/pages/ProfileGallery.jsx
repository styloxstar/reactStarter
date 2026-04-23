import React from 'react';
import CopyButton from '../CopyButton';

// --- Shared Data (Static/Hardcoded) ---
const user = {
  name: "Alex Morgan",
  handle: "@alexm",
  role: "Senior Product Designer",
  location: "San Francisco, CA",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
  cover: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop",
  bio: "Crafting digital experiences that matter. Passionate about UI/UX, minimalism, and coffee.",
  stats: { posts: 142, followers: '12.5k', following: 450 }
};

const contributionMap = [
  'bg-[#39d353]', 'bg-[#26a641]', 'bg-[#006d32]', 'bg-[#161b22]', 'bg-[#161b22]',
  'bg-[#0e4429]', 'bg-[#006d32]', 'bg-[#26a641]', 'bg-[#39d353]', 'bg-[#26a641]',
  'bg-[#006d32]', 'bg-[#161b22]', 'bg-[#161b22]', 'bg-[#0e4429]', 'bg-[#39d353]',
  'bg-[#26a641]', 'bg-[#006d32]', 'bg-[#161b22]', 'bg-[#161b22]', 'bg-[#0e4429]',
  'bg-[#39d353]', 'bg-[#26a641]', 'bg-[#006d32]', 'bg-[#161b22]', 'bg-[#161b22]',
  'bg-[#0e4429]', 'bg-[#006d32]', 'bg-[#26a641]', 'bg-[#39d353]', 'bg-[#26a641]',
  'bg-[#006d32]', 'bg-[#161b22]', 'bg-[#161b22]', 'bg-[#0e4429]', 'bg-[#39d353]',
  'bg-[#26a641]', 'bg-[#006d32]', 'bg-[#161b22]', 'bg-[#161b22]', 'bg-[#0e4429]',
  'bg-[#39d353]', 'bg-[#26a641]', 'bg-[#006d32]', 'bg-[#161b22]', 'bg-[#161b22]',
  'bg-[#0e4429]', 'bg-[#006d32]', 'bg-[#26a641]', 'bg-[#39d353]', 'bg-[#26a641]',
  'bg-[#006d32]', 'bg-[#161b22]', 'bg-[#161b22]', 'bg-[#0e4429]', 'bg-[#39d353]',
  'bg-[#26a641]', 'bg-[#006d32]', 'bg-[#161b22]', 'bg-[#161b22]', 'bg-[#0e4429]',
  'bg-[#39d353]', 'bg-[#26a641]', 'bg-[#006d32]', 'bg-[#161b22]', 'bg-[#161b22]',
  'bg-[#0e4429]', 'bg-[#006d32]', 'bg-[#26a641]', 'bg-[#39d353]', 'bg-[#26a641]',
  'bg-[#006d32]', 'bg-[#161b22]', 'bg-[#161b22]', 'bg-[#0e4429]', 'bg-[#39d353]',
  'bg-[#26a641]', 'bg-[#006d32]', 'bg-[#161b22]', 'bg-[#161b22]', 'bg-[#0e4429]',
  'bg-[#39d353]', 'bg-[#26a641]', 'bg-[#006d32]', 'bg-[#161b22]'
];

// --- 1. Standard SaaS ---
export const ProfileStandard = () => (
  <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row min-h-[600px] font-sans italic font-bold">
    <div className="w-full md:w-1/3 bg-slate-50 p-8 border-r border-gray-100 flex flex-col items-center text-center">
      <img src={user.avatar} alt="Profile" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-white shadow-sm" />
      <h2 className="text-xl font-bold text-gray-900 italic tracking-tighter">Alex Morgan</h2>
      <p className="text-sm text-gray-500 mb-6 italic">Senior Product Designer</p>
      <div className="flex gap-2 mb-8">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-700 transition-colors">Follow</button>
        <button className="p-2 border border-gray-300 rounded-full hover:bg-white text-gray-600">✉️</button>
      </div>
      <div className="w-full text-left space-y-4 font-medium italic"><div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Details</div><p className="text-sm">📍 San Francisco, CA</p><p className="text-sm">🔗 alexmorgan.design</p></div>
    </div>
    <div className="w-full md:w-2/3 p-8 font-sans italic font-bold">
      <div className="flex gap-8 border-b border-gray-100 pb-4 mb-8">
        <button className="text-blue-600 border-b-2 border-blue-600 pb-4">Overview</button>
        <button className="text-gray-500 pb-4 border-b-2 border-transparent font-medium">Projects</button>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 text-left">
        <h3 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">About_Architect</h3>
        <p className="text-gray-600 leading-relaxed font-medium italic">{user.bio}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100"><div className="text-2xl font-bold text-blue-600">12</div><div className="text-[10px] text-blue-800 uppercase font-black tracking-widest">Active_Nodes</div></div>
        <div className="bg-green-50 p-6 rounded-xl border border-green-100"><div className="text-2xl font-bold text-green-600">98%</div><div className="text-[10px] text-green-800 uppercase font-black tracking-widest">Efficiency</div></div>
      </div>
    </div>
  </div>
);

// --- 2. Social Influencer ---
export const ProfileSocial = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 max-w-4xl mx-auto shadow-sm font-sans italic font-bold">
    <header className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex-shrink-0">
        <img src={user.avatar} alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-white" />
      </div>
      <div className="flex-1 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
          <h2 className="text-2xl font-light text-gray-900 italic tracking-tighter">@alexm</h2>
          <div className="flex gap-2">
            <button className="px-6 py-1.5 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">Follow</button>
            <button className="px-4 py-1.5 bg-gray-100 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors">Message</button>
          </div>
        </div>
        <div className="flex justify-center md:justify-start gap-8 mb-4 text-sm font-medium">
          <span><strong className="text-gray-900">142</strong> posts</span>
          <span><strong className="text-gray-900">12.5k</strong> followers</span>
          <span><strong className="text-gray-900">450</strong> following</span>
        </div>
        <div>
          <div className="font-bold text-gray-900 tracking-tight italic">Alex Morgan</div>
          <p className="text-gray-600 text-sm italic font-medium leading-relaxed">{user.bio}</p>
          <a href="#" className="text-blue-900 font-black text-xs hover:underline uppercase tracking-widest mt-2 block">bit.ly/alex-portfolio</a>
        </div>
      </div>
    </header>
    <div className="grid grid-cols-3 gap-1 md:gap-4 border-t border-gray-200 pt-8">
      {[1,2,3,4,5,6].map(i => (
        <div key={i} className="aspect-square bg-gray-100 relative group overflow-hidden rounded-lg">
          <img src={`https://images.unsplash.com/photo-${1550000000000 + i}?q=80&w=400&auto=format&fit=crop`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold gap-6 italic">
            <span className="flex items-center gap-1 text-sm">❤️ 1.2k</span>
            <span className="flex items-center gap-1 text-sm">💬 42</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- 3. Developer Node ---
export const ProfileDev = () => (
  <div className="bg-[#0d1117] text-[#c9d1d9] p-8 rounded-3xl border border-gray-800 max-w-5xl mx-auto font-mono shadow-2xl italic font-bold">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/4 text-center md:text-left">
        <img src={user.avatar} className="w-full aspect-square rounded-full border border-gray-700 mb-6 hover:scale-105 transition-transform" alt="" />
        <h1 className="text-2xl font-bold text-white leading-tight">Alex Morgan</h1>
        <p className="text-gray-400 text-lg mb-4 tracking-tighter">@alexm</p>
        <p className="text-sm mb-6 leading-relaxed italic">{user.bio}</p>
        <button className="w-full py-1.5 bg-[#21262d] border border-gray-600 rounded-md text-sm font-bold text-white hover:bg-gray-700 transition-all mb-6 uppercase tracking-widest">Edit_Node</button>
        <div className="space-y-3 text-[10px] text-gray-500 italic font-black uppercase tracking-widest text-left">
          <div className="flex items-center gap-2">🏢 TechFlow_Labs</div>
          <div className="flex items-center gap-2">📍 San Francisco, CA</div>
        </div>
      </div>
      <div className="w-full md:w-3/4 text-left">
        <div className="text-[10px] mb-4 font-black border-b border-gray-800 pb-2 uppercase tracking-widest text-slate-600">Pinned_Repositories</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {[1,2].map(i => (
            <div key={i} className="p-5 border border-gray-700 rounded-md bg-[#0d1117] hover:border-gray-500 transition-colors group">
              <div className="flex items-center gap-2 mb-2 font-bold text-blue-400 group-hover:underline cursor-pointer italic tracking-tight"><span>react-architect-core</span></div>
              <p className="text-xs text-gray-500 mb-6 line-clamp-2 italic font-medium">A high-fidelity framework for building scalable agentic systems.</p>
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">
                <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#f1e05a]"></span> JS</span>
                <span>★ 2.4k</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-[10px] mb-4 font-black border-b border-gray-800 pb-2 uppercase tracking-widest text-slate-600">Contribution_Matrix</div>
        <div className="bg-[#0d1117] border border-gray-700 p-6 rounded-md">
           <div className="flex gap-1.5 flex-wrap">
             {contributionMap.map((color, i) => <div key={i} className={`w-3 h-3 rounded-sm ${color}`}></div>)}
           </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 4. Glass Architecture ---
export const ProfileGlass = () => (
  <div className="relative h-[700px] w-full rounded-[4rem] overflow-hidden bg-slate-950 flex items-center justify-center p-8 font-sans italic font-bold">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
    <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-[4rem] shadow-[0_32px_64px_rgba(0,0,0,0.5)] w-full max-w-xl text-center text-white group">
      <img src={user.avatar} alt="Profile" className="w-40 h-40 rounded-full object-cover border-4 border-white/20 shadow-2xl relative z-10 mx-auto mb-8" />
      <h2 className="text-5xl font-black mb-2 tracking-tighter uppercase leading-none">Alex Morgan</h2>
      <p className="text-indigo-300 font-bold mb-10 uppercase tracking-[0.5em] text-xs leading-none">Visual_Architect_L6</p>
      <div className="grid grid-cols-3 gap-8 mb-12 border-y border-white/10 py-10 font-black uppercase">
        <div><div className="text-3xl tracking-tighter">128</div><div className="text-[10px] text-white/40 tracking-widest mt-1">Nodes</div></div>
        <div><div className="text-3xl tracking-tighter">4.2k</div><div className="text-[10px] text-white/40 tracking-widest mt-1">Pulses</div></div>
        <div><div className="text-3xl tracking-tighter">850</div><div className="text-[10px] text-white/40 tracking-widest mt-1">Signals</div></div>
      </div>
      <button className="w-full py-5 bg-white text-indigo-950 uppercase tracking-widest rounded-[2rem] text-xs font-black shadow-xl">Explore_Nodes</button>
    </div>
  </div>
);

// --- 5. Corporate Matrix ---
export const ProfileCorporate = () => (
  <div className="bg-slate-50 flex items-center justify-center min-h-[600px] rounded-[3rem] p-12 font-sans italic font-bold">
    <div className="bg-white w-full max-w-3xl rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row relative border border-slate-100">
      <div className="w-full md:w-1/2 p-12 bg-slate-50 flex flex-col items-center justify-center border-r border-slate-100 text-center">
        <img src={user.avatar} className="w-48 h-48 rounded-2xl object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 mb-8" alt="" />
        <div className="text-center"><p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.4em] mb-2">Internal_UID</p><p className="font-mono text-slate-800 font-black tracking-widest text-lg bg-white px-4 py-1 rounded-lg border border-slate-200">TX-8842-1920</p></div>
      </div>
      <div className="flex-1 p-12 flex flex-col justify-center text-left">
        <div className="mb-12"><div className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-1">TechCorp<span className="text-blue-600">.</span></div><p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.5em]">Global_Operations_Matrix</p></div>
        <div className="mb-10"><h1 className="text-4xl font-black text-slate-900 mb-2 leading-none uppercase">{user.name}</h1><p className="text-blue-600 font-black text-xs uppercase tracking-widest mb-6">{user.role}</p><div className="inline-flex px-4 py-1.5 bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-green-100">Auth_Status: Active</div></div>
        <div className="grid grid-cols-1 gap-5 border-t border-slate-100 pt-10 font-bold">
          <div className="flex justify-between items-center"><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Division</span><span className="text-slate-900 text-sm tracking-tight">Product_Design_Group</span></div>
          <div className="flex justify-between items-center"><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Node</span><span className="text-slate-900 text-sm tracking-tight">San_Francisco_HQ</span></div>
          <div className="flex justify-between items-center"><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Clearance</span><span className="text-red-500 font-black text-[10px] uppercase bg-red-50 px-2 py-1 rounded">Level_04_Admin</span></div>
        </div>
      </div>
    </div>
  </div>
);

// --- 6. Cover Banner Focus ---
export const ProfileCover = () => (
  <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl max-w-5xl mx-auto group font-sans italic font-bold">
    <div className="h-72 w-full bg-slate-200 relative overflow-hidden"><img src={user.cover} alt="Cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s]" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div></div>
    <div className="px-12 pb-12 relative text-left">
      <div className="flex flex-col md:flex-row justify-between items-end -mt-24 mb-12 gap-8"><img src={user.avatar} className="w-48 h-48 rounded-full border-8 border-white object-cover relative z-10 shadow-2xl" alt="" /><div className="flex gap-4 mb-4 z-10"><button className="px-10 py-4 bg-blue-600 text-white font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-blue-700 transition-all text-[10px] shadow-xl">Open_Terminal</button></div></div>
      <h1 className="text-5xl font-black text-slate-900 mb-2 uppercase tracking-tighter leading-none">{user.name}</h1>
      <p className="text-slate-400 text-xl font-bold mb-8 italic">{user.role} @ <span className="text-blue-600">TechFlow_Systems</span></p>
      <div className="flex flex-wrap gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 border-y border-slate-50 py-8"><div className="flex items-center gap-2 text-slate-900">📍 San Francisco, CA</div><div className="flex items-center gap-2">Joined_Node: 2024.03.12</div></div>
      <p className="mt-8 text-slate-500 leading-relaxed font-medium text-xl lowercase italic">{user.bio}</p>
    </div>
  </div>
);

// --- 7. Cyberpunk Matrix ---
export const ProfileCyber = () => (
  <div className="bg-black p-1.5 border-4 border-cyan-500 rounded-[3rem] max-w-5xl mx-auto shadow-[0_0_40px_rgba(6,182,212,0.3)] group overflow-hidden font-mono text-white italic font-bold">
    <div className="bg-[#050505] rounded-[2.5rem] p-12 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(34,211,238,0.05)_1.5px,transparent_1.5px)] bg-[size:40px_40px]"></div>
      <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center lg:items-start text-left">
        <div className="relative"><img src={user.avatar} className="w-64 h-64 rounded-full border-8 border-black grayscale contrast-125 relative z-10" alt="" /><div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-cyan-500 text-black px-10 py-3 text-xs font-black uppercase tracking-[0.5em] skew-x-[-20deg] z-20 shadow-glow">LVL_99_ARCHITECT</div></div>
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-10"><h2 className="text-7xl font-black text-white italic tracking-tighter leading-none uppercase mb-2" style={{textShadow: "10px 10px 0px #06b6d4"}}>cyber_dex</h2><p className="text-pink-500 font-black text-xl uppercase italic tracking-[0.2em] animate-pulse">> Senior Designer_SYS_ADMIN</p></div>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
             <div className="space-y-8"><div className="flex items-center gap-8 text-left"><div className="w-2 h-12 bg-cyan-500 shadow-[0_0:15px_#06b6d4]"></div><div><div className="text-[10px] text-slate-500 uppercase font-black mb-1 tracking-widest">Core_Engine</div><div className="text-2xl font-black text-white tracking-widest uppercase">React_Framework</div></div></div><div className="flex items-center gap-8 text-left"><div className="w-2 h-12 bg-purple-500 shadow-[0_0:15px_#a855f7]"></div><div><div className="text-[10px] text-slate-500 uppercase font-black mb-1 tracking-widest">UI_Synthesizer</div><div className="text-2xl font-black text-white tracking-widest uppercase">Tailwind_Logic</div></div></div></div>
             <div className="bg-white/5 border-2 border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md text-center"><div className="text-[10px] text-cyan-400 font-black uppercase tracking-[0.6em] mb-8 border-b border-white/10 pb-4">Performance_Metrics</div><div className="grid grid-cols-2 gap-10"><div><div className="text-4xl font-black text-white">1.8k</div><div className="text-[10px] text-slate-500 uppercase font-black mt-1">Commits</div></div><div><div className="text-4xl font-black text-white">99.2%</div><div className="text-[10px] text-slate-500 uppercase font-black mt-1">Efficiency</div></div></div></div>
          </div>
          <button className="w-full py-8 bg-cyan-500 text-black font-black uppercase tracking-[0.5em] text-xs hover:bg-white transition-all shadow-[0_0_40px_rgba(6,182,212,0.5)]">Initialize_Protocol</button>
        </div>
      </div>
    </div>
  </div>
);

// --- 8. Link Matrix ---
export const ProfileLinkTree = () => (
  <div className="bg-slate-50 min-h-[850px] flex justify-center py-20 rounded-[4rem] border border-slate-200 overflow-hidden relative group italic font-sans font-bold">
    <div className="w-full max-w-sm px-10 text-center relative z-10 flex flex-col items-center">
      <img src={user.avatar} className="w-36 h-36 rounded-[3rem] mx-auto object-cover shadow-[0_32px_64px_rgba(0,0,0,0.2)] border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-700 mt-16" alt="" />
      <div className="mb-16 mt-8"><h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-2">@alex_dex</h2><p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.6em] mb-6 block border-b border-blue-100 pb-4">Visionary_Architect</p><p className="text-slate-500 text-sm font-medium italic lowercase">{user.bio}</p></div>
      <div className="w-full space-y-5 italic font-black uppercase text-xs"><a href="#" className="block bg-slate-950 text-white rounded-3xl p-7 hover:-translate-y-2 hover:shadow-2xl transition-all">Neural_Portfolio</a><a href="#" className="block bg-white text-slate-950 border-2 border-slate-100 rounded-3xl p-7 hover:-translate-y-2 hover:shadow-2xl transition-all">The_Static_Feed</a></div>
    </div>
  </div>
);

// --- 9. Neumorphic Unit ---
export const ProfileNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-20 rounded-[5rem] flex justify-center font-sans italic font-bold">
    <div className="w-full max-w-lg bg-[#e0e5ec] p-16 rounded-[5rem] shadow-[40px_40px_80px_#b8b9be,-40px_-40px_80px_#ffffff] text-center border-4 border-white/50">
      <div className="w-56 h-56 mx-auto rounded-full p-4 bg-[#e0e5ec] shadow-[inset_15px_15px_30px_#b8b9be,inset_-15px_-15px_30px_#ffffff] mb-16 flex items-center justify-center"><img src={user.avatar} className="w-full h-full rounded-full object-cover shadow-2xl" alt="" /></div>
      <h2 className="text-5xl font-black text-slate-700 mb-2 tracking-tighter uppercase">Alex Morgan</h2>
      <p className="text-slate-400 font-black text-[12px] uppercase tracking-[0.6em] mb-16 tracking-widest">Soft_Intelligence_Unit</p>
      <div className="grid grid-cols-3 gap-6 mb-20 font-black text-slate-700">
        <div className="bg-[#e0e5ec] p-8 rounded-[2.5rem] shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff]"><div className="text-3xl tracking-tighter">124</div><div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Nodes</div></div>
        <div className="bg-[#e0e5ec] p-8 rounded-[2.5rem] shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff]"><div className="text-3xl tracking-tighter">8.4k</div><div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Pulses</div></div>
        <div className="bg-[#e0e5ec] p-8 rounded-[2.5rem] shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff]"><div className="text-3xl tracking-tighter">2.1k</div><div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Signals</div></div>
      </div>
      <button className="w-full py-7 rounded-3xl bg-[#e0e5ec] text-blue-600 uppercase tracking-widest text-[12px] shadow-[12px_12px_24px_#b8b9be,-12px_-12px_24px_#ffffff] hover:shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] transition-all">Follow_Unit</button>
    </div>
  </div>
);

// --- 10. Retro Brutalist Identity ---
export const ProfileBrutalist = () => (
  <div className="bg-[#facc15] p-6 md:p-16 rounded-none border-[14px] border-black max-w-5xl mx-auto shadow-[20px_20px_0_0_#000] font-sans italic font-black uppercase text-left">
    <div className="flex flex-col lg:flex-row gap-0 border-[14px] border-black bg-black">
      <div className="w-full lg:w-2/5 bg-white p-2 border-b-[14px] lg:border-b-0 lg:border-r-[14px] border-black flex flex-col">
        <div className="border-[12px] border-black aspect-[4/5] overflow-hidden"><img src={user.avatar} className="w-full h-full object-cover filter grayscale contrast-200" alt="" /></div>
        <div className="bg-rose-500 p-6 border-t-[12px] border-black text-center text-black flex-1 flex items-center justify-center"><span className="block text-3xl leading-[0.9] font-black uppercase">Operational Status: Ready</span></div>
      </div>
      <div className="w-full lg:w-3/5 bg-white p-8 md:p-16 flex flex-col justify-center">
        <h1 className="text-6xl md:text-8xl leading-[0.8] mb-6 tracking-tighter break-words text-black font-black uppercase">Alex Morgan</h1>
        <div className="inline-block bg-black text-white px-8 py-3 text-xl md:text-2xl tracking-tighter skew-x-[-15deg] mb-12 w-fit">Lead_Architect</div>
        <p className="text-3xl md:text-5xl mb-16 leading-[0.9] tracking-tighter border-l-[12px] border-black pl-8 italic text-black font-black uppercase">"Architecture Is Not A Suggestion It Is Law."</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 border-t-[14px] border-black pt-12 font-black uppercase">
          <div className="overflow-hidden"><div className="text-[10px] text-slate-400 mb-3 tracking-widest">Global_Position</div><div className="text-xl md:text-3xl leading-none text-black truncate">SF_URBAN_CENTER</div></div>
          <div className="overflow-hidden"><div className="text-[10px] text-slate-400 mb-3 tracking-widest">Matrix_State</div><div className="text-xl md:text-3xl leading-none text-rose-600 underline decoration-[6px] md:decoration-[10px] decoration-black underline-offset-8 truncate">RED_LINE_ACTIVE</div></div>
        </div>
        <button className="mt-16 w-full py-8 bg-black text-white text-2xl md:text-4xl shadow-[12px_12px_0_0_#f43f5e] active:shadow-none active:translate-x-3 active:translate-y-3 transition-all font-black uppercase"><span className="block truncate px-4">Launch_Protocol</span></button>
      </div>
    </div>
  </div>
);


// --- Main Gallery Wrapper ---
const ProfileGallery = () => {
  return (
    <div className="container overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-64">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-none">Profile Matrix Suite</h1>
        <p className="text-slate-500 font-bold text-xl italic lowercase">Premium identity architectures for every platform.</p>
      </div>

      <div className="space-y-32 max-w-6xl mx-auto">
        
        {/* Variant 01: Standard Split SaaS */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/profile border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/profile:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const ProfileSaaS = () => {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row min-h-[600px] font-sans italic font-bold">
      <div className="w-full md:w-1/3 bg-slate-50 p-8 border-r border-gray-100 flex flex-col items-center text-center">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" alt="Profile" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-white shadow-sm" />
        <h2 className="text-xl font-bold text-gray-900 italic tracking-tighter">Alex Morgan</h2>
        <p className="text-sm text-gray-500 mb-6 italic">Senior Product Designer</p>
        <div className="flex gap-2 mb-8">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-700 transition-colors">Follow</button>
          <button className="p-2 border border-gray-300 rounded-full hover:bg-white text-gray-600">✉️</button>
        </div>
        <div className="w-full text-left space-y-4 font-medium italic"><div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Details</div><p className="text-sm">📍 San Francisco, CA</p><p className="text-sm">🔗 alexmorgan.design</p></div>
      </div>
      <div className="w-full md:w-2/3 p-8 font-sans italic font-bold">
        <div className="flex gap-8 border-b border-gray-100 pb-4 mb-8">
          <button className="text-blue-600 border-b-2 border-blue-600 pb-4">Overview</button>
          <button className="text-gray-500 pb-4 border-b-2 border-transparent font-medium">Projects</button>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 text-left">
          <h3 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">About_Architect</h3>
          <p className="text-gray-600 leading-relaxed font-medium italic">Crafting digital experiences that matter. Passionate about UI/UX, minimalism, and coffee.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100"><div className="text-2xl font-bold text-blue-600">12</div><div className="text-[10px] text-blue-800 uppercase font-black tracking-widest">Active_Nodes</div></div>
          <div className="bg-green-50 p-6 rounded-xl border border-green-100"><div className="text-2xl font-bold text-green-600">98%</div><div className="text-[10px] text-green-800 uppercase font-black tracking-widest">Efficiency</div></div>
        </div>
      </div>
    </div>
  );
};`}
              htmlCode={`<div class="profile-card">
  <div class="sidebar">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" class="avatar" />
    <h2 class="name">Alex Morgan</h2>
    <p class="role">Senior Product Designer</p>
    <div class="actions">
      <button class="btn-primary">Follow</button>
      <button class="btn-icon">✉️</button>
    </div>
    <div class="meta">
      <span class="label">Details</span>
      <p>📍 San Francisco, CA</p>
      <p>🔗 alexmorgan.design</p>
    </div>
  </div>
  <div class="main-content">
    <nav class="tabs">
      <a href="#" class="active">Overview</a>
      <a href="#">Projects</a>
    </nav>
    <div class="bio-card">
      <span class="label">About_Architect</span>
      <p>Crafting digital experiences that matter. Passionate about UI/UX, minimalism, and coffee.</p>
    </div>
    <div class="stats-grid">
      <div class="stat-box blue">
        <strong>12</strong>
        <span>Active_Nodes</span>
      </div>
      <div class="stat-box green">
        <strong>98%</strong>
        <span>Efficiency</span>
      </div>
    </div>
  </div>
</div>`}
              cssCode={`.profile-card { display: flex; background: #fff; border-radius: 24px; border: 1px solid #f1f5f9; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); font-family: sans-serif; font-style: italic; font-weight: 700; }
.sidebar { width: 320px; background: #f8fafc; padding: 32px; border-right: 1px solid #f1f5f9; text-align: center; }
.avatar { width: 128px; height: 128px; border-radius: 50%; border: 4px solid #fff; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); margin-bottom: 16px; object-fit: cover; }
.name { font-size: 20px; color: #0f172a; margin-bottom: 4px; }
.role { font-size: 14px; color: #64748b; margin-bottom: 24px; }
.actions { display: flex; gap: 8px; justify-content: center; margin-bottom: 32px; }
.btn-primary { background: #2563eb; color: #fff; padding: 8px 24px; border-radius: 9999px; border: none; cursor: pointer; }
.btn-icon { width: 36px; height: 36px; border: 1px solid #cbd5e1; border-radius: 50%; background: #fff; cursor: pointer; }
.meta { text-align: left; }
.label { display: block; font-size: 10px; font-weight: 900; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px; }
.main-content { flex: 1; padding: 32px; }
.tabs { display: flex; gap: 32px; border-bottom: 1px solid #f1f5f9; margin-bottom: 32px; }
.tabs a { text-decoration: none; font-size: 14px; color: #64748b; padding-bottom: 16px; border-bottom: 2px solid transparent; }
.tabs a.active { color: #2563eb; border-bottom-color: #2563eb; }
.bio-card { border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 24px; }
.stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.stat-box { padding: 24px; border-radius: 12px; border: 1px solid transparent; }
.stat-box.blue { background: #eff6ff; border-color: #dbeafe; }
.stat-box.green { background: #f0fdf4; border-color: #dcfce7; }
.stat-box strong { display: block; font-size: 24px; color: #2563eb; }
.stat-box.green strong { color: #16a34a; }
.stat-box span { font-size: 10px; font-weight: 900; color: #1e293b; text-transform: uppercase; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">01. Standard Split SaaS</span>
           <ProfileStandard />
        </section>

        {/* Variant 02: Social Influencer */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/profile border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/profile:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const ProfileSocial = () => {
  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 max-w-4xl mx-auto shadow-sm font-sans italic font-bold">
      <header className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex-shrink-0">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-white" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
            <h2 className="text-2xl font-light text-gray-900 italic tracking-tighter">@alexm</h2>
            <div className="flex gap-2">
              <button className="px-6 py-1.5 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">Follow</button>
              <button className="px-4 py-1.5 bg-gray-100 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors">Message</button>
            </div>
          </div>
          <div className="flex justify-center md:justify-start gap-8 mb-4 text-sm font-medium">
            <span><strong className="text-gray-900">142</strong> posts</span>
            <span><strong className="text-gray-900">12.5k</strong> followers</span>
            <span><strong className="text-gray-900">450</strong> following</span>
          </div>
          <div>
            <div className="font-bold text-gray-900 tracking-tight italic">Alex Morgan</div>
            <p className="text-gray-600 text-sm italic font-medium leading-relaxed">Crafting digital experiences that matter. Passionate about UI/UX, minimalism, and coffee.</p>
            <a href="#" className="text-blue-900 font-black text-xs hover:underline uppercase tracking-widest mt-2 block">bit.ly/alex-portfolio</a>
          </div>
        </div>
      </header>
      <div className="grid grid-cols-3 gap-1 md:gap-4 border-t border-gray-200 pt-8">
        <div className="aspect-square bg-gray-100 relative group overflow-hidden rounded-lg">
          <img src="https://images.unsplash.com/photo-1550000000001?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold gap-6 italic">
            <span className="flex items-center gap-1 text-sm">❤️ 1.2k</span><span className="flex items-center gap-1 text-sm">💬 42</span>
          </div>
        </div>
        <div className="aspect-square bg-gray-100 relative group overflow-hidden rounded-lg">
          <img src="https://images.unsplash.com/photo-1550000000002?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold gap-6 italic">
            <span className="flex items-center gap-1 text-sm">❤️ 950</span><span className="flex items-center gap-1 text-sm">💬 18</span>
          </div>
        </div>
        <div className="aspect-square bg-gray-100 relative group overflow-hidden rounded-lg">
          <img src="https://images.unsplash.com/photo-1550000000003?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold gap-6 italic">
            <span className="flex items-center gap-1 text-sm">❤️ 2.4k</span><span className="flex items-center gap-1 text-sm">💬 85</span>
          </div>
        </div>
      </div>
    </div>
  );
};`}
              htmlCode={`<div class="social-profile">
  <header class="header">
    <div class="avatar-ring"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" /></div>
    <div class="user-info">
      <div class="title-row">
        <h2>@alexm</h2>
        <div class="actions">
          <button class="follow">Follow</button>
          <button class="msg">Message</button>
        </div>
      </div>
      <div class="stats">
        <span><strong>142</strong> posts</span>
        <span><strong>12.5k</strong> followers</span>
      </div>
      <div class="bio">
        <strong class="display-name">Alex Morgan</strong>
        <p>Crafting digital experiences that matter.</p>
        <a href="#">bit.ly/alex-portfolio</a>
      </div>
    </div>
  </header>
  <div class="post-grid">
    <div class="post"><img src="https://images.unsplash.com/photo-1550000000001?q=80&w=400&auto=format&fit=crop" /><div class="overlay">❤️ 1.2k</div></div>
    <div class="post"><img src="https://images.unsplash.com/photo-1550000000002?q=80&w=400&auto=format&fit=crop" /><div class="overlay">❤️ 950</div></div>
    <div class="post"><img src="https://images.unsplash.com/photo-1550000000003?q=80&w=400&auto=format&fit=crop" /><div class="overlay">❤️ 2.4k</div></div>
  </div>
</div>`}
              cssCode={`.social-profile { background: #fff; padding: 32px; border-radius: 24px; border: 1px solid #f1f5f9; font-family: sans-serif; font-style: italic; font-weight: 700; }
.header { display: flex; gap: 32px; margin-bottom: 48px; }
.avatar-ring { width: 160px; height: 160px; border-radius: 50%; padding: 4px; background: linear-gradient(to top right, #facc15, #f43f5e, #a855f7); }
.avatar-ring img { width: 100%; height: 100%; border-radius: 50%; border: 4px solid #fff; object-fit: cover; }
.title-row { display: flex; align-items: center; gap: 16px; margin-bottom: 16px; }
.title-row h2 { font-size: 24px; color: #0f172a; margin: 0; }
.actions button { padding: 8px 24px; border-radius: 8px; border: none; font-weight: 600; cursor: pointer; }
.follow { background: #3b82f6; color: #fff; }
.msg { background: #f1f5f9; color: #0f172a; }
.stats { display: flex; gap: 32px; margin-bottom: 16px; font-size: 14px; }
.bio .display-name { display: block; font-size: 16px; color: #0f172a; margin-bottom: 4px; }
.bio p { font-size: 14px; color: #64748b; margin-bottom: 8px; }
.post-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; border-top: 1px solid #f1f5f9; padding-top: 32px; }
.post { position: relative; aspect-ratio: 1; border-radius: 12px; overflow: hidden; background: #f1f5f9; }
.post img { width: 100%; height: 100%; object-fit: cover; }
.overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; color: #fff; opacity: 0; transition: 0.3s; }
.post:hover .overlay { opacity: 1; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">02. Social Influencer</span>
           <ProfileSocial />
        </section>

        {/* Variant 03: Developer Node */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/profile border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/profile:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const ProfileDev = () => {
  return (
    <div className="bg-[#0d1117] text-[#c9d1d9] p-8 rounded-3xl border border-gray-800 max-w-5xl mx-auto font-mono shadow-2xl italic font-bold">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4 text-center md:text-left">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" className="w-full aspect-square rounded-full border border-gray-700 mb-6 hover:scale-105 transition-transform" alt="" />
          <h1 className="text-2xl font-bold text-white leading-tight">Alex Morgan</h1>
          <p className="text-gray-400 text-lg mb-4 tracking-tighter">@alexm</p>
          <p className="text-sm mb-6 leading-relaxed italic">Crafting digital experiences that matter.</p>
          <button className="w-full py-1.5 bg-[#21262d] border border-gray-600 rounded-md text-sm font-bold text-white hover:bg-gray-700 transition-all mb-6 uppercase tracking-widest">Edit_Node</button>
          <div className="space-y-3 text-[10px] text-gray-500 italic font-black uppercase tracking-widest text-left">
            <div className="flex items-center gap-2">🏢 TechFlow_Labs</div>
            <div className="flex items-center gap-2">📍 San Francisco, CA</div>
          </div>
        </div>
        <div className="w-full md:w-3/4 text-left">
          <div className="text-[10px] mb-4 font-black border-b border-gray-800 pb-2 uppercase tracking-widest text-slate-600">Pinned_Repositories</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="p-5 border border-gray-700 rounded-md bg-[#0d1117] hover:border-gray-500 transition-colors group">
              <div className="flex items-center gap-2 mb-2 font-bold text-blue-400 group-hover:underline cursor-pointer italic tracking-tight"><span>react-architect-core</span></div>
              <p className="text-xs text-gray-500 mb-6 line-clamp-2">A high-fidelity framework for building scalable agentic systems.</p>
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">
                <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#f1e05a]"></span> JS</span><span>★ 2.4k</span>
              </div>
            </div>
            <div className="p-5 border border-gray-700 rounded-md bg-[#0d1117] hover:border-gray-500 transition-colors group">
              <div className="flex items-center gap-2 mb-2 font-bold text-blue-400 group-hover:underline cursor-pointer italic tracking-tight"><span>nexus-ui-bridge</span></div>
              <p className="text-xs text-gray-500 mb-6 line-clamp-2">The missing layer between design systems and raw CSS modules.</p>
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">
                <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#3178c6]"></span> TS</span><span>★ 1.1k</span>
              </div>
            </div>
          </div>
          <div className="text-[10px] mb-4 font-black border-b border-gray-800 pb-2 uppercase tracking-widest text-slate-600">Contribution_Matrix</div>
          <div className="bg-[#0d1117] border border-gray-700 p-6 rounded-md">
             <div className="flex gap-1.5 flex-wrap">
               <div class="w-3 h-3 rounded-sm bg-[#39d353]"></div><div class="w-3 h-3 rounded-sm bg-[#26a641]"></div><div class="w-3 h-3 rounded-sm bg-[#006d32]"></div><div class="w-3 h-3 rounded-sm bg-[#161b22]"></div>
               <div class="w-3 h-3 rounded-sm bg-[#0e4429]"></div><div class="w-3 h-3 rounded-sm bg-[#006d32]"></div><div class="w-3 h-3 rounded-sm bg-[#26a641]"></div><div class="w-3 h-3 rounded-sm bg-[#39d353]"></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};`}
              htmlCode={`<div class="dev-profile">
  <div class="sidebar">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" class="avatar" />
    <h1 class="name">Alex Morgan</h1>
    <p class="handle">@alexm</p>
    <p class="bio">Crafting digital experiences that matter.</p>
    <button class="btn-edit">Edit_Node</button>
    <div class="meta">
      <p>🏢 TechFlow_Labs</p>
      <p>📍 San Francisco, CA</p>
    </div>
  </div>
  <div class="main">
    <div class="section-label">Pinned_Repositories</div>
    <div class="repo-grid">
      <div class="repo">
        <div class="repo-title">react-architect-core</div>
        <p>A high-fidelity framework for building scalable agentic systems.</p>
        <div class="repo-footer"><span>JS</span><span>★ 2.4k</span></div>
      </div>
      <div class="repo">
        <div class="repo-title">nexus-ui-bridge</div>
        <p>The missing layer between design systems and raw CSS modules.</p>
        <div class="repo-footer"><span>TS</span><span>★ 1.1k</span></div>
      </div>
    </div>
    <div class="section-label">Contribution_Matrix</div>
    <div class="matrix">
      <div class="cell v4"></div><div class="cell v3"></div><div class="cell v2"></div><div class="cell v0"></div>
    </div>
  </div>
</div>`}
              cssCode={`.dev-profile { background: #0d1117; color: #c9d1d9; padding: 32px; border-radius: 24px; border: 1px solid #30363d; font-family: monospace; font-style: italic; font-weight: 700; display: flex; gap: 32px; }
.sidebar { width: 25%; text-align: left; }
.avatar { width: 100%; aspect-ratio: 1; border-radius: 50%; border: 1px solid #30363d; margin-bottom: 24px; }
.name { font-size: 24px; color: #fff; margin: 0; line-height: 1.2; }
.handle { color: #8b949e; font-size: 18px; margin-bottom: 16px; }
.bio { font-size: 14px; margin-bottom: 24px; }
.btn-edit { width: 100%; padding: 8px; background: #21262d; border: 1px solid #30363d; color: #fff; border-radius: 6px; cursor: pointer; text-transform: uppercase; letter-spacing: 0.1em; }
.meta { margin-top: 24px; font-size: 10px; color: #8b949e; text-transform: uppercase; letter-spacing: 0.1em; }
.main { flex: 1; text-align: left; }
.section-label { font-size: 10px; color: #484f58; border-bottom: 1px solid #21262d; padding-bottom: 8px; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.1em; }
.repo-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 40px; }
.repo { background: #0d1117; border: 1px solid #30363d; padding: 20px; border-radius: 6px; }
.repo-title { color: #58a6ff; font-weight: 700; margin-bottom: 8px; }
.repo p { font-size: 12px; color: #8b949e; line-height: 1.4; margin-bottom: 24px; }
.repo-footer { font-size: 10px; display: flex; gap: 16px; color: #484f58; }
.matrix { display: flex; flex-wrap: wrap; gap: 6px; }
.cell { width: 12px; height: 12px; border-radius: 2px; }
.v0 { background: #161b22; }
.v2 { background: #0e4429; }
.v3 { background: #006d32; }
.v4 { background: #26a641; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">03. Developer Node</span>
           <ProfileDev />
        </section>

        {/* Variant 04: Glass Architecture */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/profile border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/profile:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const ProfileGlass = () => {
  return (
    <div className="relative h-[700px] w-full rounded-[4rem] overflow-hidden bg-slate-950 flex items-center justify-center p-8 font-sans italic font-bold">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
      <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-[4rem] shadow-[0_32px_64px_rgba(0,0,0,0.5)] w-full max-w-xl text-center text-white group">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" alt="Profile" className="w-40 h-40 rounded-full object-cover border-4 border-white/20 shadow-2xl relative z-10 mx-auto mb-8" />
        <h2 className="text-5xl font-black mb-2 tracking-tighter uppercase leading-none">Alex Morgan</h2>
        <p className="text-indigo-300 font-bold mb-10 uppercase tracking-[0.5em] text-xs leading-none">Visual_Architect_L6</p>
        <div className="grid grid-cols-3 gap-8 mb-12 border-y border-white/10 py-10 font-black uppercase">
          <div><div className="text-3xl tracking-tighter">128</div><div className="text-[10px] text-white/40 tracking-widest mt-1">Nodes</div></div>
          <div><div className="text-3xl tracking-tighter">4.2k</div><div className="text-[10px] text-white/40 tracking-widest mt-1">Pulses</div></div>
          <div><div className="text-3xl tracking-tighter">850</div><div className="text-[10px] text-white/40 tracking-widest mt-1">Signals</div></div>
        </div>
        <button className="w-full py-5 bg-white text-indigo-950 uppercase tracking-widest rounded-[2rem] text-xs font-black shadow-xl">Explore_Nodes</button>
      </div>
    </div>
  );
};`}
              htmlCode={`<div class="glass-bg">
  <div class="pulse-layer"></div>
  <div class="glass-card">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" class="avatar" />
    <h2 class="name">Alex Morgan</h2>
    <p class="role-tag">Visual_Architect_L6</p>
    <div class="stats-panel">
      <div class="stat"><strong>128</strong><span>Nodes</span></div>
      <div class="stat"><strong>4.2k</strong><span>Pulses</span></div>
      <div class="stat"><strong>850</strong><span>Signals</span></div>
    </div>
    <button class="action-btn">Explore_Nodes</button>
  </div>
</div>`}
              cssCode={`.glass-bg { position: relative; height: 700px; border-radius: 64px; overflow: hidden; background: #020617; display: flex; align-items: center; justify-content: center; font-family: sans-serif; font-style: italic; font-weight: 700; }
.pulse-layer { position: absolute; inset: 0; background: linear-gradient(to bottom right, rgba(99,102,241,0.2), rgba(168,85,247,0.2), rgba(236,72,153,0.2)); animation: pulse 4s infinite alternate; }
.glass-card { position: relative; width: 100%; max-width: 576px; background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.1); padding: 48px; border-radius: 64px; text-align: center; color: #fff; box-shadow: 0 32px 64px rgba(0,0,0,0.5); }
.avatar { width: 160px; height: 160px; border-radius: 50%; border: 4px solid rgba(255,255,255,0.2); margin-bottom: 32px; object-fit: cover; }
.name { font-size: 48px; font-weight: 900; letter-spacing: -0.05em; text-transform: uppercase; margin-bottom: 8px; line-height: 1; }
.role-tag { font-size: 12px; color: #a5b4fc; text-transform: uppercase; letter-spacing: 0.5em; margin-bottom: 40px; }
.stats-panel { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; border-top: 1px solid rgba(255,255,255,0.1); border-bottom: 1px solid rgba(255,255,255,0.1); padding: 40px 0; margin-bottom: 48px; }
.stat strong { display: block; font-size: 30px; margin-bottom: 4px; }
.stat span { font-size: 10px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.1em; }
.action-btn { width: 100%; padding: 20px; background: #fff; color: #1e1b4b; border-radius: 32px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; border: none; cursor: pointer; box-shadow: 0 10px 15px rgba(0,0,0,0.2); }
@keyframes pulse { from { opacity: 0.3; } to { opacity: 0.7; } }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">04. Glass Architecture</span>
           <ProfileGlass />
        </section>

        {/* Variant 05: Corporate Matrix */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/profile border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/profile:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const ProfileCorporate = () => {
  return (
    <div className="bg-slate-50 flex items-center justify-center min-h-[600px] rounded-[3rem] p-12 font-sans italic font-bold">
      <div className="bg-white w-full max-w-3xl rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row relative border border-slate-100">
        <div className="w-full md:w-1/2 p-12 bg-slate-50 flex flex-col items-center justify-center border-r border-slate-100 text-center">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" className="w-48 h-48 rounded-2xl object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 mb-8" alt="" />
          <div className="text-center">
            <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.4em] mb-2">Internal_UID</p>
            <p className="font-mono text-slate-800 font-black tracking-widest text-lg bg-white px-4 py-1 rounded-lg border border-slate-200">TX-8842-1920</p>
          </div>
        </div>
        <div className="flex-1 p-12 flex flex-col justify-center text-left">
          <div className="mb-12">
            <div className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-1">TechCorp<span className="text-blue-600">.</span></div>
            <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.5em]">Global_Operations_Matrix</p>
          </div>
          <div className="mb-10">
            <h1 className="text-4xl font-black text-slate-900 mb-2 leading-none uppercase">Alex Morgan</h1>
            <p className="text-blue-600 font-black text-xs uppercase tracking-widest mb-6">Senior Product Designer</p>
            <div className="inline-flex px-4 py-1.5 bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-green-100">Auth_Status: Active</div>
          </div>
          <div className="grid grid-cols-1 gap-5 border-t border-slate-100 pt-10 font-bold">
            <div className="flex justify-between items-center"><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Division</span><span className="text-slate-900 text-sm tracking-tight">Product_Design_Group</span></div>
            <div className="flex justify-between items-center"><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Node</span><span className="text-slate-900 text-sm tracking-tight">San_Francisco_HQ</span></div>
            <div className="flex justify-between items-center"><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Clearance</span><span className="text-red-500 font-black text-[10px] uppercase bg-red-50 px-2 py-1 rounded">Level_04_Admin</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};`}
              htmlCode={`<div class="corporate-card">
  <div class="card-inner">
    <div class="id-side">
      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" class="avatar" />
      <div class="uid-tag">
        <span class="label">Internal_UID</span>
        <strong class="code">TX-8842-1920</strong>
      </div>
    </div>
    <div class="info-side">
      <div class="brand">
        <h2>TechCorp.</h2>
        <span class="sub">Global_Operations_Matrix</span>
      </div>
      <div class="profile">
        <h1 class="name">Alex Morgan</h1>
        <p class="role">Senior Product Designer</p>
        <span class="status-badge">Auth_Status: Active</span>
      </div>
      <div class="details-table">
        <div class="row"><span>Division</span><span>Product_Design_Group</span></div>
        <div class="row"><span>Node</span><span>San_Francisco_HQ</span></div>
        <div class="row"><span>Clearance</span><span class="red">Level_04_Admin</span></div>
      </div>
    </div>
  </div>
</div>`}
              cssCode={`.corporate-card { background: #f8fafc; min-height: 600px; padding: 48px; border-radius: 48px; display: flex; align-items: center; justify-content: center; font-family: sans-serif; font-style: italic; font-weight: 700; }
.card-inner { background: #fff; width: 100%; max-width: 768px; border-radius: 40px; box-shadow: 0 40px 100px -20px rgba(0,0,0,0.1); border: 1px solid #f1f5f9; display: flex; overflow: hidden; }
.id-side { width: 50%; background: #f8fafc; padding: 48px; display: flex; flex-direction: column; align-items: center; justify-content: center; border-right: 1px solid #f1f5f9; }
.avatar { width: 192px; height: 192px; border-radius: 24px; filter: grayscale(1); transition: 0.5s; object-fit: cover; }
.id-side:hover .avatar { filter: grayscale(0); }
.uid-tag { margin-top: 32px; text-align: center; }
.uid-tag .label { display: block; font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 8px; }
.uid-tag .code { font-family: monospace; font-size: 18px; color: #1e293b; background: #fff; padding: 4px 16px; border: 1px solid #e2e8f0; border-radius: 8px; }
.info-side { flex: 1; padding: 48px; display: flex; flex-direction: column; justify-content: center; text-align: left; }
.brand h2 { font-size: 30px; font-weight: 900; color: #0f172a; margin: 0; }
.brand h2 span { color: #2563eb; }
.brand .sub { font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5em; }
.profile { margin: 40px 0; }
.name { font-size: 36px; font-weight: 900; color: #0f172a; margin-bottom: 8px; line-height: 1; }
.role { font-size: 12px; color: #2563eb; text-transform: uppercase; margin-bottom: 24px; }
.status-badge { font-size: 10px; color: #15803d; background: #f0fdf4; padding: 6px 16px; border-radius: 9999px; border: 1px solid #dcfce7; }
.details-table { border-top: 1px solid #f1f5f9; padding-top: 40px; }
.row { display: flex; justify-content: space-between; margin-bottom: 12px; }
.row span:first-child { font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; }
.row span:last-child { font-size: 14px; color: #0f172a; }
.row span.red { color: #ef4444; background: #fef2f2; padding: 2px 8px; border-radius: 4px; font-size: 10px; text-transform: uppercase; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">05. Corporate Matrix</span>
           <ProfileCorporate />
        </section>

        {/* Variant 06: Cover Banner Focus */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/profile border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/profile:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const ProfileCover = () => {
  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl max-w-5xl mx-auto group font-sans italic font-bold">
      <div className="h-72 w-full bg-slate-200 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop" alt="Cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="px-12 pb-12 relative text-left">
        <div className="flex flex-col md:flex-row justify-between items-end -mt-24 mb-12 gap-8">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" className="w-48 h-48 rounded-full border-8 border-white object-cover relative z-10 shadow-2xl" alt="" />
          <div className="flex gap-4 mb-4 z-10">
            <button className="px-10 py-4 bg-blue-600 text-white font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-blue-700 transition-all text-[10px] shadow-xl">Open_Terminal</button>
          </div>
        </div>
        <h1 className="text-5xl font-black text-slate-900 mb-2 uppercase tracking-tighter leading-none">Alex Morgan</h1>
        <p className="text-slate-400 text-xl font-bold mb-8 italic">Senior Product Designer @ <span className="text-blue-600">TechFlow_Systems</span></p>
        <div className="flex flex-wrap gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 border-y border-slate-50 py-8">
          <div className="flex items-center gap-2 text-slate-900">📍 San Francisco, CA</div>
          <div className="flex items-center gap-2">Joined_Node: 2024.03.12</div>
        </div>
        <p className="mt-8 text-slate-500 leading-relaxed font-medium text-xl lowercase italic">Crafting digital experiences that matter. Passionate about UI/UX, minimalism, and coffee.</p>
      </div>
    </div>
  );
};`}
              htmlCode={`<div class="banner-profile">
  <div class="banner">
    <img src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop" />
    <div class="overlay"></div>
  </div>
  <div class="profile-content">
    <div class="header-row">
      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" class="avatar" />
      <div class="actions">
        <button class="primary-btn">Open_Terminal</button>
      </div>
    </div>
    <h1 class="name">Alex Morgan</h1>
    <p class="role">Senior Product Designer @ <span>TechFlow_Systems</span></p>
    <div class="info-bar">
      <span>📍 San Francisco, CA</span>
      <span>Joined_Node: 2024.03.12</span>
    </div>
    <p class="bio">Crafting digital experiences that matter. Passionate about UI/UX, minimalism, and coffee.</p>
  </div>
</div>`}
              cssCode={`.banner-profile { background: #fff; border-radius: 40px; border: 1px solid #f1f5f9; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); overflow: hidden; font-family: sans-serif; font-style: italic; font-weight: 700; max-width: 1024px; margin: 0 auto; }
.banner { height: 288px; width: 100%; position: relative; overflow: hidden; }
.banner img { width: 100%; height: 100%; object-fit: cover; transition: 5s ease; }
.banner:hover img { transform: scale(1.1); }
.overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.6), transparent); }
.profile-content { padding: 48px; position: relative; text-align: left; }
.header-row { display: flex; justify-content: space-between; align-items: flex-end; margin-top: -96px; margin-bottom: 48px; }
.avatar { width: 192px; height: 192px; border-radius: 50%; border: 8px solid #fff; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); object-fit: cover; position: relative; z-index: 10; }
.primary-btn { background: #2563eb; color: #fff; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; padding: 16px 40px; border-radius: 16px; border: none; cursor: pointer; font-size: 10px; box-shadow: 0 10px 15px -3px rgba(37,99,235,0.2); }
.name { font-size: 48px; font-weight: 900; color: #0f172a; margin-bottom: 8px; text-transform: uppercase; letter-spacing: -0.05em; line-height: 1; }
.role { font-size: 20px; color: #64748b; margin-bottom: 32px; }
.role span { color: #2563eb; }
.info-bar { display: flex; gap: 40px; font-size: 10px; font-weight: 900; text-transform: uppercase; color: #94a3b8; border-top: 1px solid #f8fafc; border-bottom: 1px solid #f8fafc; padding: 32px 0; letter-spacing: 0.3em; }
.info-bar span:first-child { color: #0f172a; }
.bio { margin-top: 32px; font-size: 20px; color: #64748b; line-height: 1.6; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">06. Cover Banner Focus</span>
           <ProfileCover />
        </section>

        {/* Variant 07: Cyberpunk Matrix */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/profile border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/profile:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const ProfileCyber = () => {
  return (
    <div className="bg-black p-1.5 border-4 border-cyan-500 rounded-[3rem] max-w-5xl mx-auto shadow-[0_0_40px_rgba(6,182,212,0.3)] group overflow-hidden font-mono text-white italic font-bold">
      <div className="bg-[#050505] rounded-[2.5rem] p-12 relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(34,211,238,0.05)_1.5px,transparent_1.5px)] bg-[size:40px_40px]"></div>
        <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center lg:items-start text-left">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" className="w-64 h-64 rounded-full border-8 border-black grayscale contrast-125 relative z-10" alt="" />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-cyan-500 text-black px-10 py-3 text-xs font-black uppercase tracking-[0.5em] skew-x-[-20deg] z-20 shadow-glow">LVL_99_ARCHITECT</div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-10">
              <h2 className="text-7xl font-black text-white italic tracking-tighter leading-none uppercase mb-2" style={{textShadow: "10px 10px 0px #06b6d4"}}>cyber_dex</h2>
              <p className="text-pink-500 font-black text-xl uppercase italic tracking-[0.2em] animate-pulse">> Senior Designer_SYS_ADMIN</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
               <div className="space-y-8">
                  <div className="flex items-center gap-8 text-left">
                     <div className="w-2 h-12 bg-cyan-500 shadow-[0_0_15px_#06b6d4]"></div>
                     <div><div className="text-[10px] text-slate-500 uppercase font-black mb-1 tracking-widest">Core_Engine</div><div className="text-2xl font-black text-white tracking-widest uppercase">React_Framework</div></div>
                  </div>
                  <div className="flex items-center gap-8 text-left">
                     <div className="w-2 h-12 bg-purple-500 shadow-[0_0_15px_#a855f7]"></div>
                     <div><div className="text-[10px] text-slate-500 uppercase font-black mb-1 tracking-widest">UI_Synthesizer</div><div className="text-2xl font-black text-white tracking-widest uppercase">Tailwind_Logic</div></div>
                  </div>
               </div>
               <div className="bg-white/5 border-2 border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md text-center">
                  <div className="text-[10px] text-cyan-400 font-black uppercase tracking-[0.6em] mb-8 border-b border-white/10 pb-4">Performance_Metrics</div>
                  <div className="grid grid-cols-2 gap-10 text-center">
                     <div><div className="text-4xl font-black text-white">1.8k</div><div className="text-[10px] text-slate-500 uppercase font-black mt-1">Commits</div></div>
                     <div><div className="text-4xl font-black text-white">99.2%</div><div className="text-[10px] text-slate-500 uppercase font-black mt-1">Efficiency</div></div>
                  </div>
               </div>
            </div>
            <button className="w-full py-8 bg-cyan-500 text-black font-black uppercase tracking-[0.5em] text-xs hover:bg-white transition-all shadow-[0_0_40px_rgba(6,182,212,0.5)]">Initialize_Protocol</button>
          </div>
        </div>
      </div>
    </div>
  );
};`}
              htmlCode={`<div class="cyber-wrap">
  <div class="cyber-inner">
    <div class="scanlines"></div>
    <div class="avatar-col">
      <div class="avatar-ring">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" />
      </div>
      <div class="lvl-tag">LVL_99_ARCHITECT</div>
    </div>
    <div class="data-col">
      <h1 class="glitch-text">cyber_dex</h1>
      <p class="sys-role">> Senior Designer_SYS_ADMIN</p>
      <div class="stats-matrix">
        <div class="skills">
          <div class="skill"><div class="bar bar-cyan"></div><div class="name">React_Framework</div></div>
          <div class="skill"><div class="bar bar-purple"></div><div class="name">Tailwind_Logic</div></div>
        </div>
        <div class="perf-panel">
          <span class="label">Performance_Metrics</span>
          <div class="m-grid">
            <div class="val">1.8k <span>Commits</span></div>
            <div class="val">99.2% <span>Efficiency</span></div>
          </div>
        </div>
      </div>
      <button class="init-btn">Initialize_Protocol</button>
    </div>
  </div>
</div>`}
              cssCode={`.cyber-wrap { background: #000; border: 4px solid #06b6d4; border-radius: 48px; padding: 6px; box-shadow: 0 0 40px rgba(6,182,212,0.3); font-family: monospace; font-style: italic; font-weight: 700; }
.cyber-inner { background: #050505; border-radius: 40px; padding: 48px; display: flex; gap: 64px; position: relative; overflow: hidden; }
.scanlines { position: absolute; inset: 0; background: linear-gradient(rgba(34,211,238,0.05) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(34,211,238,0.05) 1.5px, transparent 1.5px); background-size: 40px 40px; pointer-events: none; }
.avatar-col { position: relative; }
.avatar-ring { width: 256px; height: 256px; border-radius: 50%; padding: 8px; background: linear-gradient(45deg, #06b6d4, #9333ea, #db2777); }
.avatar-ring img { width: 100%; height: 100%; border-radius: 50%; border: 8px solid #000; filter: grayscale(1) contrast(1.2); }
.lvl-tag { position: absolute; bottom: -24px; left: 50%; transform: translateX(-50%) skewX(-20deg); background: #06b6d4; color: #000; padding: 12px 40px; font-size: 12px; font-weight: 900; box-shadow: 0 0 20px #06b6d4; }
.glitch-text { font-size: 72px; color: #fff; text-shadow: 10px 10px 0 #06b6d4; text-transform: uppercase; margin: 0; line-height: 1; }
.sys-role { color: #ec4899; font-size: 20px; text-transform: uppercase; letter-spacing: 0.2em; margin-top: 16px; margin-bottom: 48px; animation: pulse 2s infinite; }
.stats-matrix { display: grid; grid-template-columns: 1fr 1.5fr; gap: 48px; margin-bottom: 64px; }
.skill { display: flex; align-items: center; gap: 32px; margin-bottom: 32px; }
.bar { width: 8px; height: 48px; }
.bar-cyan { background: #06b6d4; box-shadow: 0 0 15px #06b6d4; }
.bar-purple { background: #a855f7; box-shadow: 0 0 15px #a855f7; }
.skill .name { font-size: 24px; color: #fff; text-transform: uppercase; }
.perf-panel { background: rgba(255,255,255,0.05); border: 2px solid rgba(255,255,255,0.1); border-radius: 40px; padding: 40px; backdrop-filter: blur(10px); }
.perf-panel .label { display: block; font-size: 10px; color: #06b6d4; text-transform: uppercase; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 16px; margin-bottom: 32px; text-align: center; }
.m-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; text-align: center; }
.val { font-size: 36px; color: #fff; }
.val span { display: block; font-size: 10px; color: #4b5563; text-transform: uppercase; }
.init-btn { width: 100%; padding: 32px; background: #06b6d4; color: #000; border: none; font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; cursor: pointer; box-shadow: 0 0 40px rgba(6,182,212,0.5); }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">07. Cyberpunk Matrix</span>
           <ProfileCyber />
        </section>

        {/* Variant 08: Link Matrix */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/profile border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/profile:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const ProfileLinkTree = () => {
  return (
    <div className="bg-slate-50 min-h-[850px] flex justify-center py-20 rounded-[4rem] border border-slate-200 overflow-hidden relative group italic font-sans font-bold">
      <div className="w-full max-w-sm px-10 text-center relative z-10 flex flex-col items-center">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" className="w-36 h-36 rounded-[3rem] mx-auto object-cover shadow-[0_32px_64px_rgba(0,0,0,0.2)] border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-700 mt-16" alt="" />
        <div className="mb-16 mt-8">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-2">@alex_dex</h2>
          <p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.6em] mb-6 block border-b border-blue-100 pb-4">Visionary_Architect</p>
          <p className="text-slate-500 text-sm font-medium leading-relaxed lowercase italic">Crafting digital experiences that matter. Passionate about UI/UX, minimalism, and coffee.</p>
        </div>
        <div className="w-full space-y-5 italic font-black uppercase text-xs">
          <a href="#" className="block bg-slate-950 text-white rounded-3xl p-7 transition-all hover:-translate-y-2 hover:shadow-2xl">Neural_Portfolio</a>
          <a href="#" className="block bg-white text-slate-950 border-2 border-slate-100 rounded-3xl p-7 transition-all hover:-translate-y-2 hover:shadow-2xl">Transmission_Protocol</a>
          <a href="#" className="block bg-white text-slate-950 border-2 border-slate-100 rounded-3xl p-7 transition-all hover:-translate-y-2 hover:shadow-2xl">The_Static_Feed</a>
        </div>
      </div>
    </div>
  );
};`}
              htmlCode={`<div class="link-matrix">
  <div class="wrapper">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" class="pfp" />
    <div class="head">
      <h1>@alex_dex</h1>
      <span class="badge">Visionary_Architect</span>
      <p class="bio">Crafting digital experiences that matter. Passionate about UI/UX, minimalism, and coffee.</p>
    </div>
    <nav class="links">
      <a href="#">Neural_Portfolio</a>
      <a href="#" class="light">Transmission_Protocol</a>
      <a href="#" class="light">The_Static_Feed</a>
    </nav>
  </div>
</div>`}
              cssCode={`.link-matrix { background: #f8fafc; border-radius: 64px; border: 1px solid #e2e8f0; padding: 80px 0; display: flex; justify-content: center; font-family: sans-serif; font-style: italic; font-weight: 700; }
.wrapper { width: 100%; max-width: 384px; padding: 0 40px; text-align: center; }
.pfp { width: 144px; height: 144px; border-radius: 48px; border: 4px solid #fff; box-shadow: 0 32px 64px rgba(0,0,0,0.2); transform: rotate(3deg); transition: 0.7s; object-fit: cover; margin: 0 auto 40px; }
.pfp:hover { transform: rotate(0deg); }
.head h1 { font-size: 36px; font-weight: 900; color: #0f172a; margin-bottom: 8px; text-transform: uppercase; letter-spacing: -0.05em; }
.badge { display: block; font-size: 10px; color: #2563eb; text-transform: uppercase; letter-spacing: 0.6em; margin-bottom: 24px; border-bottom: 1px solid #dbeafe; padding-bottom: 16px; }
.bio { font-size: 14px; color: #64748b; line-height: 1.6; margin-bottom: 64px; }
.links { display: flex; flex-direction: column; gap: 20px; }
.links a { display: block; background: #020617; color: #fff; padding: 28px; border-radius: 24px; text-decoration: none; font-size: 12px; text-transform: uppercase; transition: 0.3s; }
.links a.light { background: #fff; color: #020617; border: 2px solid #f1f5f9; }
.links a:hover { transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">08. Link Matrix</span>
           <ProfileLinkTree />
        </section>

        {/* Variant 09: Neumorphic Unit */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/profile border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/profile:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const ProfileNeumorphic = () => {
  return (
    <div className="bg-[#e0e5ec] p-20 rounded-[5rem] flex justify-center font-sans italic font-bold">
      <div className="w-full max-w-lg bg-[#e0e5ec] p-16 rounded-[5rem] shadow-[40px_40px_80px_#b8b9be,-40px_-40px_80px_#ffffff] text-center border-4 border-white/50">
        <div className="w-56 h-56 mx-auto rounded-full p-4 bg-[#e0e5ec] shadow-[inset_15px_15px_30px_#b8b9be,inset_-15px_-15px_30px_#ffffff] mb-16 flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" className="w-full h-full rounded-full object-cover shadow-2xl" alt="" />
        </div>
        <h2 className="text-5xl font-black text-slate-700 mb-2 tracking-tighter uppercase">Alex Morgan</h2>
        <p className="text-slate-400 font-black text-[12px] uppercase tracking-[0.6em] mb-16">Soft_Intelligence_Unit</p>
        <div className="grid grid-cols-3 gap-6 mb-20 font-black text-slate-700">
          <div className="bg-[#e0e5ec] p-8 rounded-[2.5rem] shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff]">
            <div className="text-3xl tracking-tighter">124</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Nodes</div>
          </div>
          <div className="bg-[#e0e5ec] p-8 rounded-[2.5rem] shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff]">
            <div className="text-3xl tracking-tighter">8.4k</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Pulses</div>
          </div>
          <div className="bg-[#e0e5ec] p-8 rounded-[2.5rem] shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff]">
            <div className="text-3xl tracking-tighter">2.1k</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Signals</div>
          </div>
        </div>
        <button className="w-full py-7 rounded-3xl bg-[#e0e5ec] text-blue-600 uppercase tracking-widest text-[12px] shadow-[12px_12px_24px_#b8b9be,-12px_-12px_24px_#ffffff] hover:shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] transition-all">Follow_Unit</button>
      </div>
    </div>
  );
};`}
              htmlCode={`<div class="neu-wrap">
  <div class="neu-card">
    <div class="img-ring">
      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" />
    </div>
    <h2>Alex Morgan</h2>
    <span class="sub">Soft_Intelligence_Unit</span>
    <div class="stats-row">
      <div class="stat-btn"><strong>124</strong><span>Nodes</span></div>
      <div class="stat-btn"><strong>8.4k</strong><span>Pulses</span></div>
      <div class="stat-btn"><strong>2.1k</strong><span>Signals</span></div>
    </div>
    <button class="follow-btn">Follow_Unit</button>
  </div>
</div>`}
              cssCode={`.neu-wrap { background: #e0e5ec; padding: 80px; border-radius: 80px; display: flex; justify-content: center; font-family: sans-serif; font-style: italic; font-weight: 700; }
.neu-card { width: 100%; max-width: 512px; background: #e0e5ec; padding: 64px; border-radius: 80px; box-shadow: 40px 40px 80px #b8b9be, -40px -40px 80px #ffffff; border: 4px solid rgba(255,255,255,0.5); text-align: center; }
.img-ring { width: 224px; height: 224px; margin: 0 auto 64px; border-radius: 50%; padding: 16px; background: #e0e5ec; box-shadow: inset 15px 15px 30px #b8b9be, inset -15px -15px 30px #ffffff; display: flex; align-items: center; justify-content: center; }
.img-ring img { width: 100%; height: 100%; border-radius: 50%; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
.neu-card h2 { font-size: 48px; color: #334155; text-transform: uppercase; letter-spacing: -0.05em; margin-bottom: 8px; }
.sub { display: block; font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.6em; margin-bottom: 64px; }
.stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 80px; }
.stat-btn { background: #e0e5ec; padding: 32px; border-radius: 40px; box-shadow: inset 6px 6px 12px #b8b9be, inset -6px -6px 12px #ffffff; color: #334155; }
.stat-btn strong { display: block; font-size: 24px; margin-bottom: 4px; }
.stat-btn span { font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; }
.follow-btn { width: 100%; padding: 28px; background: #e0e5ec; color: #2563eb; border-radius: 24px; border: none; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; box-shadow: 12px 12px 24px #b8b9be, -12px -12px 24px #ffffff; cursor: pointer; transition: 0.2s; }
.follow-btn:active { box-shadow: inset 6px 6px 12px #b8b9be, inset -6px -6px 12px #ffffff; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">09. Neumorphic Unit</span>
           <ProfileNeumorphic />
        </section>

        {/* Variant 10: Retro Brutalist Identity */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/profile border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/profile:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const ProfileBrutalist = () => {
  return (
    <div className="bg-[#facc15] p-6 md:p-16 rounded-none border-[14px] border-black max-w-5xl mx-auto shadow-[20px_20px_0_0_#000] font-sans italic font-black uppercase text-left">
      <div className="flex flex-col lg:flex-row gap-0 border-[14px] border-black bg-black">
        <div className="w-full lg:w-2/5 bg-white p-2 border-b-[14px] lg:border-b-0 lg:border-r-[14px] border-black flex flex-col">
          <div className="border-[12px] border-black aspect-[4/5] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover filter grayscale contrast-200" alt="" />
          </div>
          <div className="bg-rose-500 p-6 border-t-[12px] border-black text-center text-black flex-1 flex items-center justify-center">
            <span className="block text-3xl leading-[0.9] font-black uppercase">Operational Status: Ready</span>
          </div>
        </div>
        <div className="w-full lg:w-3/5 bg-white p-8 md:p-16 flex flex-col justify-center">
          <h1 className="text-6xl md:text-8xl leading-[0.8] mb-6 tracking-tighter break-words text-black font-black uppercase">Alex Morgan</h1>
          <div className="inline-block bg-black text-white px-8 py-3 text-xl md:text-2xl tracking-tighter skew-x-[-15deg] mb-12 w-fit">Lead_Architect</div>
          <p className="text-3xl md:text-5xl mb-16 leading-[0.9] tracking-tighter border-l-[12px] border-black pl-8 italic text-black font-black uppercase">"Architecture Is Not A Suggestion It Is Law."</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 border-t-[14px] border-black pt-12 font-black uppercase">
            <div className="overflow-hidden">
              <div className="text-[10px] text-slate-400 mb-3 tracking-widest">Global_Position</div>
              <div className="text-xl md:text-3xl leading-none text-black truncate">SF_URBAN_CENTER</div>
            </div>
            <div className="overflow-hidden">
              <div className="text-[10px] text-slate-400 mb-3 tracking-widest">Matrix_State</div>
              <div className="text-xl md:text-3xl leading-none text-rose-600 underline decoration-[10px] decoration-black underline-offset-8 truncate">RED_LINE_ACTIVE</div>
            </div>
          </div>
          <button className="mt-16 w-full py-8 bg-black text-white text-2xl md:text-4xl shadow-[12px_12px_0_0_#f43f5e] active:shadow-none active:translate-x-3 active:translate-y-3 transition-all font-black uppercase">
            <span className="block truncate px-4">Launch_Protocol</span>
          </button>
        </div>
      </div>
    </div>
  );
};`}
              htmlCode={`<div class="brutal-profile">
  <div class="inner">
    <div class="left">
      <div class="img-box"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" /></div>
      <div class="status">Operational Status: Ready</div>
    </div>
    <div class="right">
      <h1>Alex Morgan</h1>
      <div class="tag">Lead_Architect</div>
      <p class="quote">"Architecture Is Not A Suggestion It Is Law."</p>
      <div class="footer">
        <div><span>Global_Position</span><strong>SF_URBAN_CENTER</strong></div>
        <div><span>Matrix_State</span><strong class="red">RED_LINE_ACTIVE</strong></div>
      </div>
      <button class="btn">Launch_Protocol</button>
    </div>
  </div>
</div>`}
              cssCode={`.brutal-profile { background: #facc15; padding: 64px; border: 14px solid #000; font-family: sans-serif; font-style: italic; font-weight: 900; text-transform: uppercase; box-shadow: 20px 20px 0 0 #000; }
.inner { display: flex; border: 14px solid #000; background: #000; }
.left { width: 40%; background: #fff; border-right: 14px solid #000; padding: 8px; display: flex; flex-direction: column; }
.img-box { border: 12px solid #000; aspect-ratio: 4/5; overflow: hidden; }
.img-box img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(1) contrast(2); }
.status { background: #f43f5e; padding: 24px; border-top: 12px solid #000; flex: 1; display: flex; align-items: center; justify-content: center; font-size: 32px; color: #000; line-height: 0.9; }
.right { flex: 1; background: #fff; padding: 64px; text-align: left; }
.right h1 { font-size: 96px; line-height: 0.8; margin-bottom: 24px; letter-spacing: -0.05em; color: #000; }
.tag { background: #000; color: #fff; display: inline-block; padding: 12px 32px; transform: skewX(-15deg); font-size: 24px; margin-bottom: 64px; }
.quote { font-size: 48px; line-height: 0.9; border-left: 12px solid #000; padding-left: 32px; margin-bottom: 64px; color: #000; }
.footer { border-top: 14px solid #000; padding-top: 48px; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
.footer span { display: block; font-size: 10px; color: #94a3b8; margin-bottom: 12px; }
.footer strong { font-size: 28px; color: #000; }
.footer .red { color: #f43f5e; text-decoration: underline 10px #000; text-underline-offset: 8px; }
.btn { width: 100%; padding: 40px; background: #000; color: #fff; font-size: 32px; margin-top: 64px; border: none; box-shadow: 12px 12px 0 0 #f43f5e; cursor: pointer; transition: 0.2s; }
.btn:active { transform: translate(3px, 3px); box-shadow: 0 0 0 0 #f43f5e; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">10. Retro Brutalist Identity</span>
           <ProfileBrutalist />
        </section>

      </div>
    </div>
  );
};

export default ProfileGallery;