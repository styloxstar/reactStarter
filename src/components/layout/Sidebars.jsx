import React, { useState } from 'react';

// --- Shared Icons ---
const Icons = {
  Home: (props) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
  Chart: (props) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" /></svg>,
  Users: (props) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  Settings: (props) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
};

// --- 1. The SaaS Standard (Vertical) ---
export const SidebarStandard = () => (
  <div className="h-full w-64 bg-white border-r border-gray-200 flex flex-col">
    <div className="h-16 flex items-center px-8 border-b border-gray-200">
      <div className="font-bold text-xl text-indigo-600 tracking-tight">AcmeCorp</div>
    </div>
    <div className="flex-1 overflow-y-auto py-4">
      <nav className="px-4 space-y-2">
        {['Dashboard', 'Analytics', 'Customers', 'Reports'].map((item, i) => (
          <a key={item} href="#" className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${i === 0 ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
            <Icons.Home className="w-5 h-5" />
            {item}
          </a>
        ))}
      </nav>
    </div>
    <div className="p-4 border-t border-gray-200">
      <div className="flex items-center gap-3">
        <img src="https://i.pravatar.cc/150?img=12" alt="" className="w-9 h-9 rounded-full" />
        <div>
          <p className="text-sm font-medium text-gray-700">Jane Doe</p>
          <p className="text-xs text-gray-500">Admin</p>
        </div>
      </div>
    </div>
  </div>
);

// --- 2. The Slim Icon (Tooltip) ---
export const SidebarSlim = () => (
  <div className="h-full w-20 bg-slate-900 flex flex-col items-center py-6">
    <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold mb-8">A</div>
    <nav className="flex-1 space-y-4 w-full flex flex-col items-center">
      {['Home', 'Stats', 'Users', 'Settings'].map((item) => (
        <a key={item} href="#" className="group relative w-12 h-12 flex items-center justify-center rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-all">
          <Icons.Home className="w-6 h-6" />
          {/* Tooltip */}
          <span className="absolute left-14 bg-white text-slate-900 text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
            {item}
          </span>
        </a>
      ))}
    </nav>
    <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-700">
      <img src="https://i.pravatar.cc/150?img=33" alt="" />
    </button>
  </div>
);

// --- 3. The Glassmorphism ---
// *Needs colorful background context*
export  const SidebarGlass = () => (
  <div className="h-full w-64 bg-white/10 backdrop-blur-md border-r border-white/20 flex flex-col text-white">
    <div className="p-6">
      <h2 className="text-2xl font-bold tracking-wider">GLASS</h2>
    </div>
    <nav className="flex-1 px-4 space-y-2">
      {['Overview', 'Sales', 'Performance'].map((item, i) => (
        <a key={item} href="#" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${i === 0 ? 'bg-white/20 shadow-lg border border-white/20' : 'hover:bg-white/10 opacity-70 hover:opacity-100'}`}>
          <Icons.Chart className="w-5 h-5" />
          <span className="font-medium">{item}</span>
        </a>
      ))}
    </nav>
    <div className="p-4 m-4 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10">
      <p className="text-xs font-bold opacity-70">Pro Plan</p>
      <div className="w-full bg-black/20 h-1.5 rounded-full mt-2 overflow-hidden">
        <div className="w-2/3 bg-white h-full rounded-full"></div>
      </div>
    </div>
  </div>
);

// --- 4. The Floating Island ---
export const SidebarFloating = () => (
  <div className="h-full p-4 bg-gray-100">
    <div className="h-full w-64 bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">
      <div className="p-6 pb-2">
        <div className="flex items-center gap-2 text-indigo-600 font-bold text-lg">
          <div className="w-3 h-3 rounded-full bg-indigo-600"></div> FloatUI
        </div>
      </div>
      <div className="flex-1 px-3 py-4 space-y-1">
        {['Files', 'Shared', 'Recent', 'Favorites'].map((item, i) => (
          <a key={item} href="#" className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${i === 0 ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'}`}>
            <div className="flex items-center gap-3">
              <Icons.Home className="w-4 h-4" /> {item}
            </div>
            {i === 1 && <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">3</span>}
          </a>
        ))}
      </div>
      <div className="p-4 border-t border-gray-100">
        <button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-gray-50 text-sm text-gray-600">
          <Icons.Settings className="w-5 h-5" /> Settings
        </button>
      </div>
    </div>
  </div>
);

// --- 5. The Double Column (Slack Style) ---
export const SidebarDouble = () => (
  <div className="h-full flex">
    {/* Primary Rail */}
    <div className="w-16 bg-gray-900 flex flex-col items-center py-4 space-y-4">
      {[1, 2, 3].map((i) => (
        <button key={i} className="w-10 h-10 rounded-xl bg-gray-700 hover:bg-indigo-500 transition-colors text-white font-bold flex items-center justify-center">
          W{i}
        </button>
      ))}
      <button className="w-10 h-10 rounded-full bg-gray-800 text-green-500 hover:text-white hover:bg-green-600 transition-colors flex items-center justify-center">
        +
      </button>
    </div>
    
    {/* Secondary Panel */}
    <div className="w-56 bg-gray-800 text-gray-300 flex flex-col border-r border-gray-700">
      <div className="h-14 flex items-center px-4 font-bold text-white shadow-sm border-b border-gray-700">
        Workspace 1
      </div>
      <div className="flex-1 overflow-y-auto py-2">
        <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500">Channels</div>
        <nav className="space-y-0.5 px-2">
          {['# general', '# design', '# engineering', '# random'].map((channel) => (
            <a key={channel} href="#" className="block px-2 py-1.5 rounded text-sm hover:bg-gray-700 hover:text-white transition-colors">
              {channel}
            </a>
          ))}
        </nav>
        <div className="px-4 py-2 mt-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Direct Messages</div>
        <nav className="space-y-0.5 px-2">
          {['Sarah', 'Mike', 'Tom (Away)'].map((person) => (
             <a key={person} href="#" className="flex items-center gap-2 px-2 py-1.5 rounded text-sm hover:bg-gray-700 hover:text-white transition-colors">
               <div className="w-2 h-2 rounded-full bg-green-500"></div> {person}
             </a>
          ))}
        </nav>
      </div>
    </div>
  </div>
);

// --- 6. The Gradient Brand ---
export const SidebarGradient = () => (
  <div className="h-full w-64 bg-gradient-to-b from-blue-600 to-indigo-700 text-white flex flex-col">
    <div className="h-20 flex items-center px-6">
      <h1 className="text-2xl font-bold">Brand.</h1>
    </div>
    <div className="flex-1 px-4 space-y-2">
      {['Analytics', 'Ecommerce', 'Marketing', 'Campaigns'].map((item, i) => (
        <a key={item} href="#" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${i === 0 ? 'bg-white text-indigo-700 font-bold shadow-md' : 'text-blue-100 hover:bg-white/10 hover:text-white'}`}>
          <Icons.Chart className="w-5 h-5" />
          {item}
        </a>))}
    </div>
    <div className="p-6">
      <div className="bg-black/20 rounded-xl p-4">
        <p className="text-sm font-medium">Monthly Goal</p>
        <div className="w-full bg-white/20 h-2 rounded-full mt-2">
          <div className="w-3/4 bg-green-400 h-full rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
);

// --- 7. The Cyberpunk (Neon) ---
export const SidebarCyberpunk = () => (
  <div className="h-full w-64 bg-black border-r border-gray-800 flex flex-col">
    <div className="p-6 border-b border-gray-800">
      <div className="text-cyan-400 font-mono text-xl font-bold tracking-tighter">
        CYBER<span className="text-pink-500">_NAV</span>
      </div>
    </div>
    <div className="flex-1 p-4 space-y-4">
      {['MISSION', 'LOADOUT', 'INTEL', 'MAP'].map((item, i) => (
        <a key={item} href="#" className={`block border-l-2 pl-4 py-2 font-mono tracking-widest transition-all ${i === 0 ? 'border-cyan-400 text-cyan-400 bg-cyan-900/10 shadow-[0_0_15px_rgba(34,211,238,0.2)]' : 'border-gray-800 text-gray-500 hover:text-pink-500 hover:border-pink-500'}`}>
          {`// ${item}`}
        </a>
      ))}
    </div>
    <div className="p-4 border-t border-gray-800">
       <button className="w-full py-2 bg-yellow-400 text-black font-bold font-mono text-sm hover:bg-yellow-300">
         LOGOUT
       </button>
    </div>
  </div>
);

// --- 8. The Collapsible Drawer ---
export const SidebarCollapsible = () => {
  const [expanded, setExpanded] = useState(true);
  
  return (
    <div className={`h-full ${expanded ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out`}>
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
        {expanded && <span className="font-bold text-lg text-gray-800 animate-in fade-in">MyApp</span>}
        <button onClick={() => setExpanded(!expanded)} className="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
          {expanded ? '«' : '»'}
        </button>
      </div>
      
      <div className="flex-1 py-4 space-y-2 px-3">
        {['Inbox', 'Calendar', 'Documents'].map((item) => (
          <a key={item} href="#" className="flex items-center gap-4 px-3 py-3 rounded-lg text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors overflow-hidden whitespace-nowrap group">
            <div className="min-w-[1.25rem]">
               <Icons.Users className="w-5 h-5" />
            </div>
            <span className={`transition-opacity duration-200 ${expanded ? 'opacity-100' : 'opacity-0 w-0'}`}>{item}</span>
            {!expanded && (
               <div className="absolute left-16 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none z-50">
                 {item}
               </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

// --- 9. The Brutalist ---
export const SidebarBrutalist = () => (
  <div className="h-full w-64 bg-yellow-400 border-r-4 border-black flex flex-col">
    <div className="p-6 border-b-4 border-black bg-white">
      <h2 className="text-2xl font-black uppercase italic">Menu.</h2>
    </div>
    <nav className="flex-1">
      {['Shop', 'About', 'Contact', 'Cart (0)'].map((item) => (
        <a key={item} href="#" className="block px-6 py-4 font-bold text-xl border-b-4 border-black hover:bg-black hover:text-white transition-colors uppercase">
          {item}
        </a>
      ))}
    </nav>
    <div className="p-6">
      <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer font-bold text-center">
        SUBSCRIBE
      </div>
    </div>
  </div>
);

// --- 10. The Neumorphic (Soft UI) ---
export const SidebarNeumorphic = () => (
  <div className="h-full w-64 bg-[#e0e5ec] flex flex-col p-6">
    <div className="h-20 flex items-center justify-center">
      <div className="w-12 h-12 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center text-gray-500 font-bold text-xl">
        S
      </div>
    </div>
    
    <nav className="flex-1 space-y-6 mt-8">
      {['Dashboard', 'Wallet', 'Profile'].map((item, i) => (
        <a key={item} href="#" className={`flex items-center gap-4 px-6 py-4 rounded-xl text-sm font-bold transition-all ${i === 0 ? 'text-blue-500 shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]' : 'text-gray-500 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:text-gray-700 active:scale-95'}`}>
          <Icons.Home className="w-5 h-5" />
          {item}
        </a>
      ))}
    </nav>
  </div>
);


// --- Main Gallery Layout ---
const Sidebars = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-50 p-6 font-sans">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Modern Sidebars</h1>
        <p className="text-slate-500">A collection of responsive sidebar navigation patterns.</p>
      </div>

      {/* Grid for demos - fixing height to show sidebars properly */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[1600px] mx-auto">
        
        <div className="h-[600px] rounded-xl overflow-hidden border border-gray-200 bg-white relative box-shadow p-4 ">
          <SidebarStandard />
          <span className="absolute bottom-2 right-2 text-xs font-bold text-gray-300">01. Standard</span>
        </div>

        <div className="h-[600px] rounded-xl overflow-hidden border border-gray-200 bg-white relative box-shadow p-4 ">
          <SidebarSlim />
           <span className="absolute bottom-2 right-2 text-xs font-bold text-gray-300">02. Slim</span>
        </div>

        <div className="h-[600px] rounded-xl overflow-hidden border border-gray-200 bg-gradient-to-br from-indigo-500 to-purple-600 relative ox-shadow p-4 ">
          <SidebarGlass />
           <span className="absolute bottom-2 right-2 text-xs font-bold text-white/50">03. Glass</span>
        </div>

        <div className="h-[600px] rounded-xl overflow-hidden border border-gray-200 bg-gray-100 relative box-shadow p-4 ">
          <SidebarFloating />
           <span className="absolute bottom-2 right-2 text-xs font-bold text-gray-300">04. Floating</span>
        </div>

        <div className="h-[600px] rounded-xl overflow-hidden border border-gray-200 bg-white relative box-shadow p-4 ">
          <SidebarDouble />
           <span className="absolute bottom-2 right-2 text-xs font-bold text-gray-300">05. Double Rail</span>
        </div>

        <div className="h-[600px] rounded-xl overflow-hidden border border-gray-200 bg-white relative box-shadow p-4 ">
          <SidebarGradient />
           <span className="absolute bottom-2 right-2 text-xs font-bold text-gray-300">06. Brand Gradient</span>
        </div>

        <div className="h-[600px] rounded-xl overflow-hidden border border-gray-200 bg-gray-900 relative box-shadow p-4 ">
          <SidebarCyberpunk />
           <span className="absolute bottom-2 right-2 text-xs font-bold text-gray-600">07. Cyberpunk</span>
        </div>

        <div className="h-[600px] rounded-xl overflow-hidden border border-gray-200 bg-gray-50 relative box-shadow p-4 ">
          <SidebarCollapsible />
           <span className="absolute bottom-2 right-2 text-xs font-bold text-gray-300">08. Collapsible</span>
        </div>

        <div className="h-[600px] rounded-xl overflow-hidden border border-gray-200 bg-white relative box-shadow p-4 ">
          <SidebarBrutalist />
           <span className="absolute bottom-2 right-2 text-xs font-bold text-gray-300">09. Brutalist</span>
        </div>

        <div className="h-[600px] rounded-xl overflow-hidden border border-gray-200 bg-[#e0e5ec] relative box-shadow p-4 ">
          <SidebarNeumorphic />
           <span className="absolute bottom-2 right-2 text-xs font-bold text-gray-400">10. Neumorphic</span>
        </div>

      </div>
    </div>
  );
};

export default Sidebars;