import React, { useState } from 'react';
import CopyButton from '../common/CopyButton';

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
        
        <div className="h-[600px] rounded-xl overflow-hidden border border-gray-200 bg-white relative group/side box-shadow p-4 ">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/side:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const SidebarStandard = () => (\n  <div className="h-full w-64 bg-white border-r border-gray-200 flex flex-col">\n    <div className="h-16 flex items-center px-8 border-b border-gray-200">\n      <div className="font-bold text-xl text-indigo-600">AcmeCorp</div>\n    </div>\n    <div className="flex-1 overflow-y-auto py-4">\n      <nav className="px-4 space-y-2">\n        {['Dashboard', 'Analytics', 'Customers', 'Reports'].map((item, i) => (\n          <a key={item} href="#" className={\`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg \${i === 0 ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'}\`}>\n            <HomeIcon className="w-5 h-5" /> {item}\n          </a>\n        ))}\n      </nav>\n    </div>\n    <div className="p-4 border-t border-gray-200">\n      <div className="flex items-center gap-3">\n        <img src="avatar.jpg" className="w-9 h-9 rounded-full" />\n        <div><p className="text-sm font-medium">Jane Doe</p><p className="text-xs text-gray-500">Admin</p></div>\n      </div>\n    </div>\n  </div>\n);`}
              htmlCode={`<aside class="sidebar-std">
  <div class="sidebar-header"><span class="logo">AcmeCorp</span></div>
  <nav class="sidebar-nav">
    <a href="#" class="nav-item active">Dashboard</a>
    <a href="#" class="nav-item">Analytics</a>
    <a href="#" class="nav-item">Customers</a>
    <a href="#" class="nav-item">Reports</a>
  </nav>
  <div class="sidebar-footer">
    <img src="avatar.jpg" class="avatar" />
    <div><p>Jane Doe</p><small>Admin</small></div>
  </div>
</aside>`}
              cssCode={`.sidebar-std { height: 100%; width: 16rem; background: #fff; border-right: 1px solid #e5e7eb; display: flex; flex-direction: column; }
.sidebar-header { height: 4rem; display: flex; align-items: center; padding: 0 2rem; border-bottom: 1px solid #e5e7eb; }
.logo { font-weight: 700; font-size: 1.25rem; color: #4f46e5; }
.sidebar-nav { flex: 1; padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem; }
.nav-item { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; border-radius: 0.5rem; font-size: 0.875rem; color: #4b5563; text-decoration: none; }
.nav-item:hover { background: #f9fafb; }
.nav-item.active { background: #eef2ff; color: #4f46e5; font-weight: 500; }
.sidebar-footer { padding: 1rem; border-top: 1px solid #e5e7eb; display: flex; align-items: center; gap: 0.75rem; }
.avatar { width: 2.25rem; height: 2.25rem; border-radius: 50%; }`}
            />
          </div>
          <SidebarStandard />
          <span className="absolute bottom-2 right-2 text-xs font-bold text-gray-300">01. Standard</span>
        </div>

        <div className="h-[600px] rounded-xl overflow-hidden border border-gray-200 bg-white relative group/side box-shadow p-4 ">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/side:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const SidebarSlim = () => (\n  <div className="h-full w-20 bg-slate-900 flex flex-col items-center py-6">\n    <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold mb-8">A</div>\n    <nav className="flex-1 space-y-4 w-full flex flex-col items-center">\n      {['Home', 'Stats', 'Users', 'Settings'].map(item => (\n        <a key={item} href="#" className="group relative w-12 h-12 flex items-center justify-center rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white">\n          <Icon className="w-6 h-6" />\n          <span className="absolute left-14 bg-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 shadow-lg">{item}</span>\n        </a>\n      ))}\n    </nav>\n    <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-700"><img src="avatar.jpg" /></button>\n  </div>\n);`}
              htmlCode={`<aside class="slim-sidebar">
  <div class="slim-logo">A</div>
  <nav class="slim-nav">
    <a href="#" class="slim-item" title="Home"><svg>...</svg></a>
    <a href="#" class="slim-item" title="Stats"><svg>...</svg></a>
    <a href="#" class="slim-item" title="Users"><svg>...</svg></a>
  </nav>
  <button class="slim-avatar"><img src="avatar.jpg"></button>
</aside>`}
              cssCode={`.slim-sidebar { height: 100%; width: 5rem; background: #0f172a; display: flex; flex-direction: column; align-items: center; padding: 1.5rem 0; }
.slim-logo { width: 2.5rem; height: 2.5rem; background: #6366f1; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 700; margin-bottom: 2rem; }
.slim-nav { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 1rem; }
.slim-item { width: 3rem; height: 3rem; display: flex; align-items: center; justify-content: center; border-radius: 0.75rem; color: #94a3b8; }
.slim-item:hover { background: #1e293b; color: #fff; }
.slim-avatar { width: 2.5rem; height: 2.5rem; border-radius: 50%; border: 2px solid #334155; overflow: hidden; }`}
            />
          </div>
          <SidebarSlim />
           <span className="absolute bottom-2 right-2 text-xs font-bold text-gray-300">02. Slim</span>
        </div>

        <div className="h-[600px] rounded-xl overflow-hidden border border-gray-200 bg-gradient-to-br from-indigo-500 to-purple-600 relative group/side box-shadow p-4 ">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/side:opacity-100 transition-opacity text-white">
            <CopyButton 
              jsxCode={`export const SidebarGlass = () => (\n  <div className="h-full w-64 bg-white/10 backdrop-blur-md border-r border-white/20 flex flex-col text-white">\n    <div className="p-6"><h2 className="text-2xl font-bold tracking-wider">GLASS</h2></div>\n    <nav className="flex-1 px-4 space-y-2">\n      {['Overview', 'Sales', 'Performance'].map((item, i) => (\n        <a key={item} href="#" className={\`flex items-center gap-3 px-4 py-3 rounded-xl \${i === 0 ? 'bg-white/20 shadow-lg border border-white/20' : 'hover:bg-white/10 opacity-70 hover:opacity-100'}\`}>\n          <ChartIcon className="w-5 h-5" /> <span>{item}</span>\n        </a>\n      ))}\n    </nav>\n    <div className="p-4 m-4 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10">\n      <p className="text-xs font-bold opacity-70">Pro Plan</p>\n      <div className="w-full bg-black/20 h-1.5 rounded-full mt-2"><div className="w-2/3 bg-white h-full rounded-full" /></div>\n    </div>\n  </div>\n);`}
              htmlCode={`<aside class="glass-sidebar">
  <div class="glass-header"><h2>GLASS</h2></div>
  <nav class="glass-nav">
    <a href="#" class="glass-item active">Overview</a>
    <a href="#" class="glass-item">Sales</a>
    <a href="#" class="glass-item">Performance</a>
  </nav>
  <div class="glass-footer"><p>Pro Plan</p><div class="progress"><div class="bar"></div></div></div>
</aside>`}
              cssCode={`.glass-sidebar { height: 100%; width: 16rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(12px); border-right: 1px solid rgba(255,255,255,0.2); display: flex; flex-direction: column; color: #fff; }
.glass-nav { flex: 1; padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem; }
.glass-item { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; border-radius: 0.75rem; color: rgba(255,255,255,0.7); text-decoration: none; }
.glass-item:hover { background: rgba(255,255,255,0.1); color: #fff; }
.glass-item.active { background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.2); color: #fff; box-shadow: 0 10px 15px rgba(0,0,0,0.1); }`}
            />
          </div>
          <SidebarGlass />
           <span className="absolute bottom-2 right-2 text-xs font-bold text-white/50">03. Glass</span>
        </div>

        <div className="h-[600px] rounded-xl overflow-hidden border border-gray-200 bg-gray-100 relative group/side box-shadow p-4 ">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/side:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const SidebarFloating = () => (\n  <div className="h-full p-4 bg-gray-100">\n    <div className="h-full w-64 bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">\n      <div className="p-6 pb-2">\n        <div className="flex items-center gap-2 text-indigo-600 font-bold text-lg">\n          <div className="w-3 h-3 rounded-full bg-indigo-600" /> FloatUI\n        </div>\n      </div>\n      <div className="flex-1 px-3 py-4 space-y-1">\n        {['Files', 'Shared', 'Recent', 'Favorites'].map((item, i) => (\n          <a key={item} href="#" className={\`flex items-center gap-3 px-3 py-2 rounded-lg text-sm \${i === 0 ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'}\`}>\n            <Icon className="w-4 h-4" /> {item}\n          </a>\n        ))}\n      </div>\n      <div className="p-4 border-t border-gray-100">\n        <button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-gray-50 text-sm text-gray-600">Settings</button>\n      </div>\n    </div>\n  </div>\n);`}
              htmlCode={`<div class="float-wrapper">
  <aside class="float-sidebar">
    <div class="float-header"><span class="float-logo">FloatUI</span></div>
    <nav class="float-nav">
      <a href="#" class="float-item active">Files</a>
      <a href="#" class="float-item">Shared <span class="badge">3</span></a>
      <a href="#" class="float-item">Recent</a>
    </nav>
    <div class="float-footer"><button>Settings</button></div>
  </aside>
</div>`}
              cssCode={`.float-wrapper { padding: 1rem; background: #f3f4f6; height: 100%; }
.float-sidebar { height: 100%; width: 16rem; background: #fff; border-radius: 1rem; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); display: flex; flex-direction: column; overflow: hidden; }
.float-nav { flex: 1; padding: 0.75rem; display: flex; flex-direction: column; gap: 0.25rem; }
.float-item { padding: 0.5rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; color: #4b5563; text-decoration: none; display: flex; align-items: center; justify-content: space-between; }
.float-item:hover { background: #f9fafb; }
.float-item.active { background: #eef2ff; color: #4f46e5; }
.badge { background: #fee2e2; color: #dc2626; font-size: 0.75rem; padding: 0.125rem 0.5rem; border-radius: 9999px; }`}
            />
          </div>
          <SidebarFloating />
           <span className="absolute bottom-2 right-2 text-xs font-bold text-gray-300">04. Floating</span>
        </div>

        <div className="h-[600px] rounded-xl overflow-hidden border border-gray-200 bg-white relative group/side box-shadow p-4 ">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/side:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const SidebarDouble = () => (\n  <div className="h-full flex">\n    {/* Primary Rail */}\n    <div className="w-16 bg-gray-900 flex flex-col items-center py-4 space-y-4">\n      {[1, 2, 3].map(i => (\n        <button key={i} className="w-10 h-10 rounded-xl bg-gray-700 hover:bg-indigo-500 text-white font-bold">W{i}</button>\n      ))}\n      <button className="w-10 h-10 rounded-full bg-gray-800 text-green-500">+</button>\n    </div>\n    {/* Secondary Panel */}\n    <div className="w-56 bg-gray-800 text-gray-300 flex flex-col border-r border-gray-700">\n      <div className="h-14 px-4 font-bold text-white border-b border-gray-700">Workspace 1</div>\n      <div className="flex-1 py-2">\n        <div className="px-4 py-2 text-xs font-semibold uppercase text-gray-500">Channels</div>\n        {['# general', '# design', '# engineering'].map(ch => (\n          <a key={ch} href="#" className="block px-4 py-1.5 text-sm hover:bg-gray-700 hover:text-white">{ch}</a>\n        ))}\n      </div>\n    </div>\n  </div>\n);`}
              htmlCode={`<div class="double-layout">
  <div class="primary-rail">
    <button class="workspace-icon">W1</button>
    <button class="workspace-icon">W2</button>
    <button class="add-btn">+</button>
  </div>
  <aside class="secondary-panel">
    <div class="panel-header">Workspace 1</div>
    <div class="channels"><span class="section-label">Channels</span>
      <a href="#"># general</a>
      <a href="#"># design</a>
    </div>
  </aside>
</div>`}
              cssCode={`.double-layout { display: flex; height: 100%; }
.primary-rail { width: 4rem; background: #111827; display: flex; flex-direction: column; align-items: center; padding: 1rem 0; gap: 1rem; }
.workspace-icon { width: 2.5rem; height: 2.5rem; border-radius: 0.75rem; background: #374151; color: #fff; font-weight: 700; border: none; cursor: pointer; }
.workspace-icon:hover { background: #6366f1; }
.secondary-panel { width: 14rem; background: #1f2937; color: #d1d5db; display: flex; flex-direction: column; border-right: 1px solid #374151; }
.panel-header { height: 3.5rem; display: flex; align-items: center; padding: 0 1rem; font-weight: 700; color: #fff; border-bottom: 1px solid #374151; }
.channels a { display: block; padding: 0.375rem 1rem; font-size: 0.875rem; color: #d1d5db; text-decoration: none; }
.channels a:hover { background: #374151; color: #fff; }`}
            />
          </div>
          <SidebarDouble />
           <span className="absolute bottom-2 right-2 text-xs font-bold text-gray-300">05. Double Rail</span>
        </div>

        <div className="h-[600px] rounded-xl overflow-hidden border border-gray-200 bg-white relative group/side box-shadow p-4 ">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/side:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const SidebarGradient = () => (\n  <div className="h-full w-64 bg-gradient-to-b from-blue-600 to-indigo-700 text-white flex flex-col">\n    <div className="h-20 flex items-center px-6"><h1 className="text-2xl font-bold">Brand.</h1></div>\n    <div className="flex-1 px-4 space-y-2">\n      {['Analytics', 'Ecommerce', 'Marketing', 'Campaigns'].map((item, i) => (\n        <a key={item} href="#" className={\`flex items-center gap-3 px-4 py-3 rounded-lg \${i === 0 ? 'bg-white text-indigo-700 font-bold shadow-md' : 'text-blue-100 hover:bg-white/10'}\`}>\n          <ChartIcon className="w-5 h-5" /> {item}\n        </a>\n      ))}\n    </div>\n    <div className="p-6">\n      <div className="bg-black/20 rounded-xl p-4">\n        <p className="text-sm font-medium">Monthly Goal</p>\n        <div className="w-full bg-white/20 h-2 rounded-full mt-2"><div className="w-3/4 bg-green-400 h-full rounded-full" /></div>\n      </div>\n    </div>\n  </div>\n);`}
              htmlCode={`<aside class="grad-sidebar">
  <div class="grad-header"><h1>Brand.</h1></div>
  <nav class="grad-nav">
    <a href="#" class="grad-item active">Analytics</a>
    <a href="#" class="grad-item">Ecommerce</a>
    <a href="#" class="grad-item">Marketing</a>
  </nav>
  <div class="grad-footer">
    <div class="goal-card"><p>Monthly Goal</p><div class="progress-bar"><div class="fill"></div></div></div>
  </div>
</aside>`}
              cssCode={`.grad-sidebar { height: 100%; width: 16rem; background: linear-gradient(to bottom, #2563eb, #4338ca); color: #fff; display: flex; flex-direction: column; }
.grad-header { height: 5rem; display: flex; align-items: center; padding: 0 1.5rem; }
.grad-header h1 { font-size: 1.5rem; font-weight: 700; }
.grad-nav { flex: 1; padding: 0 1rem; display: flex; flex-direction: column; gap: 0.5rem; }
.grad-item { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; border-radius: 0.5rem; color: #bfdbfe; text-decoration: none; }
.grad-item:hover { background: rgba(255,255,255,0.1); color: #fff; }
.grad-item.active { background: #fff; color: #4338ca; font-weight: 700; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
.goal-card { background: rgba(0,0,0,0.2); border-radius: 0.75rem; padding: 1rem; margin: 1.5rem; }
.progress-bar { width: 100%; height: 0.5rem; background: rgba(255,255,255,0.2); border-radius: 9999px; margin-top: 0.5rem; }
.fill { width: 75%; height: 100%; background: #4ade80; border-radius: 9999px; }`}
            />
          </div>
          <SidebarGradient />
           <span className="absolute bottom-2 right-2 text-xs font-bold text-gray-300">06. Brand Gradient</span>
        </div>

        <div className="h-[600px] rounded-xl overflow-hidden border border-gray-200 bg-gray-900 relative group/side box-shadow p-4 ">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/side:opacity-100 transition-opacity text-white">
            <CopyButton 
              jsxCode={`export const SidebarCyberpunk = () => (\n  <div className="h-full w-64 bg-black border-r border-gray-800 flex flex-col">\n    <div className="p-6 border-b border-gray-800">\n      <div className="text-cyan-400 font-mono text-xl font-bold">CYBER<span className="text-pink-500">_NAV</span></div>\n    </div>\n    <div className="flex-1 p-4 space-y-4">\n      {['MISSION', 'LOADOUT', 'INTEL', 'MAP'].map((item, i) => (\n        <a key={item} href="#" className={\`block border-l-2 pl-4 py-2 font-mono tracking-widest \${i === 0 ? 'border-cyan-400 text-cyan-400 bg-cyan-900/10' : 'border-gray-800 text-gray-500 hover:text-pink-500 hover:border-pink-500'}\`}>\n          {\`// \${item}\`}\n        </a>\n      ))}\n    </div>\n    <div className="p-4 border-t border-gray-800">\n      <button className="w-full py-2 bg-yellow-400 text-black font-bold font-mono text-sm">LOGOUT</button>\n    </div>\n  </div>\n);`}
              htmlCode={`<aside class="cyber-sidebar">
  <div class="cyber-header"><span class="cyber-logo">CYBER<span>_NAV</span></span></div>
  <nav class="cyber-nav">
    <a href="#" class="cyber-item active">// MISSION</a>
    <a href="#" class="cyber-item">// LOADOUT</a>
    <a href="#" class="cyber-item">// INTEL</a>
    <a href="#" class="cyber-item">// MAP</a>
  </nav>
  <div class="cyber-footer"><button>LOGOUT</button></div>
</aside>`}
              cssCode={`.cyber-sidebar { height: 100%; width: 16rem; background: #000; border-right: 1px solid #1f2937; display: flex; flex-direction: column; font-family: monospace; }
.cyber-header { padding: 1.5rem; border-bottom: 1px solid #1f2937; }
.cyber-logo { color: #22d3ee; font-size: 1.25rem; font-weight: 700; }
.cyber-logo span { color: #ec4899; }
.cyber-nav { flex: 1; padding: 1rem; display: flex; flex-direction: column; gap: 1rem; }
.cyber-item { border-left: 2px solid #1f2937; padding-left: 1rem; padding: 0.5rem 0 0.5rem 1rem; color: #6b7280; letter-spacing: 0.1em; text-decoration: none; }
.cyber-item:hover { border-left-color: #ec4899; color: #ec4899; }
.cyber-item.active { border-left-color: #22d3ee; color: #22d3ee; background: rgba(8,145,178,0.1); box-shadow: 0 0 15px rgba(34,211,238,0.2); }
.cyber-footer button { width: 100%; padding: 0.5rem; background: #facc15; color: #000; font-weight: 700; font-family: monospace; border: none; cursor: pointer; }`}
            />
          </div>
          <SidebarCyberpunk />
           <span className="absolute bottom-2 right-2 text-xs font-bold text-gray-600">07. Cyberpunk</span>
        </div>

        <div className="h-[600px] rounded-xl overflow-hidden border border-gray-200 bg-gray-50 relative group/side box-shadow p-4 ">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/side:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const SidebarCollapsible = () => {\n  const [expanded, setExpanded] = useState(true);\n  return (\n    <div className={\`h-full \${expanded ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 flex flex-col transition-all duration-300\`}>\n      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">\n        {expanded && <span className="font-bold text-lg">MyApp</span>}\n        <button onClick={() => setExpanded(!expanded)} className="p-2 rounded-lg hover:bg-gray-100">{expanded ? '«' : '»'}</button>\n      </div>\n      <div className="flex-1 py-4 space-y-2 px-3">\n        {['Inbox', 'Calendar', 'Documents'].map(item => (\n          <a key={item} href="#" className="flex items-center gap-4 px-3 py-3 rounded-lg text-gray-600 hover:bg-indigo-50 hover:text-indigo-600">\n            <Icon className="w-5 h-5" />\n            {expanded && <span>{item}</span>}\n          </a>\n        ))}\n      </div>\n    </div>\n  );\n};`}
              htmlCode={`<aside class="collapse-sidebar" id="sidebar">
  <div class="collapse-header">
    <span class="collapse-logo">MyApp</span>
    <button onclick="toggleSidebar()">«</button>
  </div>
  <nav class="collapse-nav">
    <a href="#"><svg>...</svg> <span>Inbox</span></a>
    <a href="#"><svg>...</svg> <span>Calendar</span></a>
    <a href="#"><svg>...</svg> <span>Documents</span></a>
  </nav>
</aside>`}
              cssCode={`.collapse-sidebar { height: 100%; width: 16rem; background: #fff; border-right: 1px solid #e5e7eb; display: flex; flex-direction: column; transition: width 0.3s ease; overflow: hidden; }
.collapse-sidebar.collapsed { width: 5rem; }
.collapse-header { height: 4rem; display: flex; align-items: center; justify-content: space-between; padding: 0 1rem; border-bottom: 1px solid #e5e7eb; }
.collapse-nav { flex: 1; padding: 1rem 0.75rem; display: flex; flex-direction: column; gap: 0.5rem; }
.collapse-nav a { display: flex; align-items: center; gap: 1rem; padding: 0.75rem; border-radius: 0.5rem; color: #4b5563; text-decoration: none; white-space: nowrap; }
.collapse-nav a:hover { background: #eef2ff; color: #4f46e5; }
.collapsed .collapse-nav span { display: none; }`}
            />
          </div>
          <SidebarCollapsible />
           <span className="absolute bottom-2 right-2 text-xs font-bold text-gray-300">08. Collapsible</span>
        </div>

        <div className="h-[600px] rounded-xl overflow-hidden border border-gray-200 bg-white relative group/side box-shadow p-4 ">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/side:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const SidebarBrutalist = () => (\n  <div className="h-full w-64 bg-yellow-400 border-r-4 border-black flex flex-col">\n    <div className="p-6 border-b-4 border-black bg-white">\n      <h2 className="text-2xl font-black uppercase italic">Menu.</h2>\n    </div>\n    <nav className="flex-1">\n      {['Shop', 'About', 'Contact', 'Cart (0)'].map(item => (\n        <a key={item} href="#" className="block px-6 py-4 font-bold text-xl border-b-4 border-black hover:bg-black hover:text-white uppercase">{item}</a>\n      ))}\n    </nav>\n    <div className="p-6">\n      <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold text-center">SUBSCRIBE</div>\n    </div>\n  </div>\n);`}
              htmlCode={`<aside class="brutal-sidebar">
  <div class="brutal-header"><h2>Menu.</h2></div>
  <nav class="brutal-nav">
    <a href="#">Shop</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
    <a href="#">Cart (0)</a>
  </nav>
  <div class="brutal-footer"><button>SUBSCRIBE</button></div>
</aside>`}
              cssCode={`.brutal-sidebar { height: 100%; width: 16rem; background: #facc15; border-right: 4px solid #000; display: flex; flex-direction: column; }
.brutal-header { padding: 1.5rem; border-bottom: 4px solid #000; background: #fff; }
.brutal-header h2 { font-size: 1.5rem; font-weight: 900; text-transform: uppercase; font-style: italic; }
.brutal-nav a { display: block; padding: 1rem 1.5rem; font-weight: 700; font-size: 1.25rem; border-bottom: 4px solid #000; text-transform: uppercase; text-decoration: none; color: #000; }
.brutal-nav a:hover { background: #000; color: #fff; }
.brutal-footer button { width: 100%; background: #fff; border: 4px solid #000; padding: 1rem; font-weight: 700; box-shadow: 4px 4px 0 0 #000; cursor: pointer; text-transform: uppercase; }
.brutal-footer button:hover { transform: translate(2px, 2px); box-shadow: 2px 2px 0 0 #000; }`}
            />
          </div>
          <SidebarBrutalist />
           <span className="absolute bottom-2 right-2 text-xs font-bold text-gray-300">09. Brutalist</span>
        </div>

        <div className="h-[600px] rounded-xl overflow-hidden border border-gray-200 bg-[#e0e5ec] relative group/side box-shadow p-4 ">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/side:opacity-100 transition-opacity text-gray-500">
            <CopyButton 
              jsxCode={`export const SidebarNeumorphic = () => (\n  <div className="h-full w-64 bg-[#e0e5ec] flex flex-col p-6">\n    <div className="h-20 flex items-center justify-center">\n      <div className="w-12 h-12 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center text-gray-500 font-bold text-xl">S</div>\n    </div>\n    <nav className="flex-1 space-y-6 mt-8">\n      {['Dashboard', 'Wallet', 'Profile'].map((item, i) => (\n        <a key={item} href="#" className={\`flex items-center gap-4 px-6 py-4 rounded-xl text-sm font-bold \${i === 0 ? 'text-blue-500 shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]' : 'text-gray-500 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}\`}>\n          <HomeIcon className="w-5 h-5" /> {item}\n        </a>\n      ))}\n    </nav>\n  </div>\n);`}
              htmlCode={`<aside class="neu-sidebar">
  <div class="neu-logo-wrap"><div class="neu-logo">S</div></div>
  <nav class="neu-nav">
    <a href="#" class="neu-item active">Dashboard</a>
    <a href="#" class="neu-item">Wallet</a>
    <a href="#" class="neu-item">Profile</a>
  </nav>
</aside>`}
              cssCode={`.neu-sidebar { height: 100%; width: 16rem; background: #e0e5ec; display: flex; flex-direction: column; padding: 1.5rem; }
.neu-logo-wrap { height: 5rem; display: flex; align-items: center; justify-content: center; }
.neu-logo { width: 3rem; height: 3rem; border-radius: 50%; background: #e0e5ec; box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff; display: flex; align-items: center; justify-content: center; color: #6b7280; font-weight: 700; font-size: 1.25rem; }
.neu-nav { flex: 1; display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2rem; }
.neu-item { display: flex; align-items: center; gap: 1rem; padding: 1rem 1.5rem; border-radius: 0.75rem; font-size: 0.875rem; font-weight: 700; color: #6b7280; text-decoration: none; box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff; }
.neu-item:hover { color: #374151; }
.neu-item:active { box-shadow: inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff; }
.neu-item.active { color: #3b82f6; box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff; }`}
            />
          </div>
          <SidebarNeumorphic />
           <span className="absolute bottom-2 right-2 text-xs font-bold text-gray-400">10. Neumorphic</span>
        </div>

      </div>
    </div>
  );
};

export default Sidebars;