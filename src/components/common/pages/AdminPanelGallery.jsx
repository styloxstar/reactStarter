import React, { useState } from 'react';

// --- ICONS (Shared) ---
const Icons = {
  Home: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
  Users: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  Chart: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  Settings: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  Search: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
  Bell: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>,
  Menu: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>,
  ChevronLeft: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>,
};

// ==========================================
// GROUP 1: SIDEBAR VARIANTS (5 Types)
// ==========================================

// 1. Standard Collapsible Sidebar
const SidebarStandard = ({ isOpen, toggle }) => (
  <div className={`h-full bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col ${isOpen ? 'w-64' : 'w-20'}`}>
    <div className="h-16 flex items-center justify-between px-4 border-b border-gray-100">
      {isOpen && <span className="font-bold text-xl text-blue-600">AdminPanel</span>}
      <button onClick={toggle} className="p-2 hover:bg-gray-100 rounded-lg text-gray-500">
        {isOpen ? <Icons.ChevronLeft /> : <Icons.Menu />}
      </button>
    </div>
    <div className="flex-1 py-4 space-y-2">
      {['Dashboard', 'Users', 'Analytics', 'Settings'].map((item, i) => (
        <div key={i} className="flex items-center px-4 py-3 mx-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg cursor-pointer transition-colors group">
          <span className="group-hover:scale-110 transition-transform">
            {i === 0 ? <Icons.Home /> : i === 1 ? <Icons.Users /> : i === 2 ? <Icons.Chart /> : <Icons.Settings />}
          </span>
          {isOpen && <span className="ml-3 font-medium">{item}</span>}
        </div>
      ))}
    </div>
    <div className="p-4 border-t border-gray-100">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"></div>
        {isOpen && <div>
          <div className="text-sm font-bold">Alex User</div>
          <div className="text-xs text-gray-500">Admin</div>
        </div>}
      </div>
    </div>
  </div>
);

// 2. Dual Sidebar (Category + Submenu)
const SidebarDual = () => (
  <div className="h-full flex">
    {/* Primary Rail */}
    <div className="w-20 bg-slate-900 flex flex-col items-center py-6 gap-6 text-slate-400">
      <div className="w-10 h-10 bg-blue-600 rounded-xl mb-4"></div>
      <button className="p-3 bg-slate-800 text-white rounded-xl"><Icons.Home /></button>
      <button className="p-3 hover:bg-slate-800 rounded-xl"><Icons.Users /></button>
      <button className="p-3 hover:bg-slate-800 rounded-xl"><Icons.Chart /></button>
      <div className="mt-auto p-3 hover:bg-slate-800 rounded-xl"><Icons.Settings /></div>
    </div>
    {/* Secondary Panel */}
    <div className="w-56 bg-slate-50 border-r border-slate-200 py-6 px-4">
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Dashboard</h3>
      <div className="space-y-1">
        {['Overview', 'Performance', 'Automations', 'Reports'].map((item) => (
          <div key={item} className="px-3 py-2 text-sm text-slate-600 hover:bg-white hover:shadow-sm rounded-md cursor-pointer transition-all">
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// 3. Floating Glass Sidebar
const SidebarGlass = () => (
  <div className="h-full p-4 bg-gradient-to-b from-purple-900 to-indigo-900">
    <div className="h-full w-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl flex flex-col items-center py-8 gap-8 shadow-2xl">
      <div className="text-white font-bold text-xl">A.</div>
      <div className="flex flex-col gap-4 w-full px-2">
        {[1,2,3,4].map(i => (
          <div key={i} className="aspect-square w-full rounded-2xl flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all cursor-pointer">
            <Icons.Home />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// 4. Mobile Bottom Nav (Simulated for Desktop)
const SidebarBottom = () => (
  <div className="h-full bg-gray-100 flex flex-col justify-end relative">
    <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold text-4xl">Content Area</div>
    <div className="h-20 bg-white border-t border-gray-200 flex justify-around items-center px-8 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
      {['Home', 'Search', 'Add', 'Activity', 'Profile'].map((item, i) => (
        <div key={i} className={`flex flex-col items-center gap-1 cursor-pointer ${i===2 ? '-mt-8' : 'text-gray-400 hover:text-blue-600'}`}>
          {i === 2 ? (
            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-300 hover:scale-110 transition-transform">
              <span className="text-2xl font-bold">+</span>
            </div>
          ) : (
            <>
              <Icons.Home /> 
              <span className="text-[10px] font-medium">{item}</span>
            </>
          )}
        </div>
      ))}
    </div>
  </div>
);

// 5. Brutalist Sidebar
const SidebarBrutalist = () => (
  <div className="h-full w-64 bg-yellow-400 border-r-4 border-black p-6 flex flex-col">
    <div className="text-3xl font-black uppercase mb-10 tracking-tighter">Admin<br/>Console</div>
    <div className="space-y-4 flex-1">
      {['Dashboard', 'Users', 'Revenue', 'Audit Logs'].map((item) => (
        <div key={item} className="bg-white border-2 border-black p-3 font-bold shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:shadow-[2px_2px_0_0_#000] transition-all cursor-pointer hover:bg-black hover:text-white">
          {item.toUpperCase()}
        </div>
      ))}
    </div>
    <div className="bg-black text-white p-3 font-mono text-center text-sm border-2 border-transparent">
      v2.0.4
    </div>
  </div>
);

// ==========================================
// GROUP 2: HEADER / TOPBAR VARIANTS (5 Types)
// ==========================================

// 1. Search Focused (Command Center)
const HeaderSearch = () => (
  <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6 justify-between">
    <div className="flex items-center w-full max-w-2xl bg-gray-100 rounded-lg px-4 py-2 border border-transparent focus-within:bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
      <Icons.Search />
      <input type="text" placeholder="Search users, orders, or commands... (Ctrl+K)" className="bg-transparent border-none outline-none ml-3 w-full text-sm text-gray-700" />
      <span className="text-xs text-gray-400 border border-gray-300 rounded px-1.5 py-0.5">⌘K</span>
    </div>
    <div className="flex gap-4 ml-4">
      <button className="p-2 relative"><Icons.Bell /><span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span></button>
      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
    </div>
  </div>
);

// 2. Breadcrumb & Title
const HeaderBreadcrumb = () => (
  <div className="h-20 bg-white/80 backdrop-blur-sm border-b border-gray-200 flex flex-col justify-center px-8">
    <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
      <span>Home</span> / <span>Settings</span> / <span className="text-blue-600">Team Members</span>
    </div>
    <div className="flex justify-between items-end">
      <h1 className="text-2xl font-bold text-gray-900">Team Members</h1>
      <div className="flex gap-2">
        <button className="px-4 py-1.5 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">Export</button>
        <button className="px-4 py-1.5 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800">Add Member</button>
      </div>
    </div>
  </div>
);

// 3. Tabbed Navigation
const HeaderTabs = () => (
  <div className="bg-slate-900 text-white pt-4 px-6">
    <div className="flex justify-between items-center mb-6">
      <div className="font-bold text-lg">Project X</div>
      <div className="flex gap-3">
        <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-slate-900 -ml-2"></div>
        <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-slate-900 -ml-2"></div>
        <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-slate-900 -ml-2 flex items-center justify-center text-xs">+4</div>
      </div>
    </div>
    <div className="flex gap-6 text-sm text-slate-400">
      {['Overview', 'Tasks', 'Board', 'Timeline', 'Files'].map((tab, i) => (
        <div key={tab} className={`pb-3 cursor-pointer ${i === 2 ? 'text-white border-b-2 border-blue-500' : 'hover:text-white'}`}>
          {tab}
        </div>
      ))}
    </div>
  </div>
);

// 4. Minimal Gradient
const HeaderGradient = () => (
  <div className="h-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-between px-6 text-white shadow-lg">
    <div className="font-bold tracking-wide">DASH.AI</div>
    <div className="flex items-center gap-6 text-white/80">
      <span className="text-sm cursor-pointer hover:text-white">Docs</span>
      <span className="text-sm cursor-pointer hover:text-white">Support</span>
      <div className="w-8 h-8 bg-white/20 rounded-full backdrop-blur flex items-center justify-center font-bold">A</div>
    </div>
  </div>
);

// 5. Floating Dynamic Island
const HeaderFloating = () => (
  <div className="h-24 bg-gray-50 flex items-center justify-center relative">
    <div className="bg-white border border-gray-200 rounded-full px-6 py-3 shadow-xl flex items-center gap-6">
      <div className="font-bold text-gray-800 pr-4 border-r border-gray-200">Cmd</div>
      <div className="flex gap-4 text-gray-500 text-sm">
        <span className="hover:text-black cursor-pointer">Projects</span>
        <span className="hover:text-black cursor-pointer">Tasks</span>
        <span className="hover:text-black cursor-pointer">Inbox</span>
      </div>
      <div className="w-8 h-8 bg-black rounded-full ml-2"></div>
    </div>
  </div>
);

// ==========================================
// GROUP 3: DASHBOARD CONTENT VARIANTS (5 Types)
// ==========================================

// 1. Bento Grid Layout
const DashBento = () => (
  <div className="p-6 h-full bg-gray-100 overflow-y-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[150px]">
      <div className="md:col-span-2 md:row-span-2 bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
        <h3 className="font-bold text-lg mb-4">Revenue Growth</h3>
        <div className="h-32 bg-blue-50 rounded-xl flex items-end justify-around pb-2">
          {[40, 70, 50, 90, 60, 80].map((h,i) => <div key={i} className="w-8 bg-blue-500 rounded-t-sm" style={{height: `${h}%`}}></div>)}
        </div>
      </div>
      <div className="bg-purple-500 rounded-3xl p-6 text-white flex flex-col justify-between shadow-lg shadow-purple-200">
        <Icons.Users />
        <div className="text-3xl font-bold">12.5k</div>
        <div className="text-purple-200 text-xs">Active Users</div>
      </div>
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
        <div className="text-gray-500 text-sm">Bounce Rate</div>
        <div className="text-2xl font-bold mt-2">42.3%</div>
        <div className="text-green-500 text-xs mt-1">↓ 2.1%</div>
      </div>
      <div className="md:col-span-2 bg-black text-white rounded-3xl p-6 flex items-center justify-between">
        <div>
          <div className="font-bold text-xl">Upgrade to Pro</div>
          <div className="text-gray-400 text-sm mt-1">Unlock advanced analytics</div>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm">Upgrade</button>
      </div>
    </div>
  </div>
);

// 2. Dense Data Table
const DashTable = () => (
  <div className="p-6 h-full bg-white">
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
          <tr>
            <th className="px-6 py-4">User</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Role</th>
            <th className="px-6 py-4">Activity</th>
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {[1,2,3,4,5].map((i) => (
            <tr key={i} className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <span className="font-medium text-gray-900">User Name {i}</span>
              </td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${i%2===0 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {i%2===0 ? 'Active' : 'Pending'}
                </span>
              </td>
              <td className="px-6 py-4 text-gray-500">Editor</td>
              <td className="px-6 py-4 text-gray-500">2h ago</td>
              <td className="px-6 py-4 text-right text-blue-600 hover:underline cursor-pointer">Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// 3. Kanban Board
const DashKanban = () => (
  <div className="p-6 h-full bg-slate-50 flex gap-6 overflow-x-auto">
    {['To Do', 'In Progress', 'Done'].map((col) => (
      <div key={col} className="min-w-[280px] bg-gray-100 rounded-xl p-4 h-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-700">{col}</h3>
          <span className="bg-white px-2 py-0.5 rounded text-xs text-gray-500 shadow-sm">3</span>
        </div>
        <div className="space-y-3 flex-1 overflow-y-auto pr-2">
          {[1,2,3].map(i => (
            <div key={i} className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 hover:shadow-md cursor-grab transition-shadow">
              <div className="text-xs text-blue-500 font-bold mb-1">Design</div>
              <div className="text-sm font-medium mb-2">Update dashboard icons</div>
              <div className="flex justify-between items-center mt-2">
                <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                <div className="text-xs text-gray-400">Oct 24</div>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-3 w-full py-2 border-2 border-dashed border-gray-300 text-gray-400 rounded-lg text-sm font-bold hover:border-gray-400 hover:text-gray-500 transition-colors">+ Add Task</button>
      </div>
    ))}
  </div>
);

// 4. Analytics (Dark Mode)
const DashAnalytics = () => (
  <div className="p-6 h-full bg-[#0B1120] text-white overflow-y-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {[
        { l: 'Total Revenue', v: '$124,500', c: 'text-green-400' },
        { l: 'Bounce Rate', v: '42.5%', c: 'text-red-400' },
        { l: 'Active Sessions', v: '1,432', c: 'text-blue-400' }
      ].map((stat, i) => (
        <div key={i} className="bg-[#151e32] border border-gray-800 p-6 rounded-2xl">
          <div className="text-gray-400 text-sm mb-2">{stat.l}</div>
          <div className="text-3xl font-bold">{stat.v}</div>
          <div className={`text-xs mt-2 ${stat.c}`}>+12% from last week</div>
        </div>
      ))}
    </div>
    
    <div className="bg-[#151e32] border border-gray-800 rounded-2xl p-6 h-64 flex items-end justify-between gap-2">
      {/* Fake Chart */}
      {[...Array(20)].map((_, i) => (
        <div 
          key={i} 
          className="bg-blue-600/50 hover:bg-blue-500 transition-colors w-full rounded-t-sm relative group"
          style={{ height: `${Math.random() * 80 + 10}%` }}
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            ${Math.floor(Math.random()*100)}k
          </div>
        </div>
      ))}
    </div>
  </div>
);

// 5. User Feed / Activity
const DashFeed = () => (
  <div className="p-6 h-full bg-white max-w-2xl mx-auto">
    <h2 className="text-xl font-bold mb-6">Activity Feed</h2>
    <div className="relative pl-8 border-l-2 border-gray-100 space-y-8">
      {[1,2,3,4].map((i) => (
        <div key={i} className="relative">
          <div className="absolute -left-[41px] top-0 w-6 h-6 bg-blue-100 border-4 border-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <div className="flex justify-between items-start mb-2">
              <span className="font-bold text-sm">Sarah Jenkins</span>
              <span className="text-xs text-gray-400">2h ago</span>
            </div>
            <p className="text-sm text-gray-600">Updated the documentation for the API endpoints. Please review.</p>
            {i === 2 && (
              <div className="mt-3 flex gap-2">
                <div className="px-3 py-1 bg-white border border-gray-200 rounded text-xs font-mono">api_v2.json</div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ==========================================
// MASTER GALLERY COMPONENT
// ==========================================

const AdminPanelGallery = () => {
  const [activeSidebar, setActiveSidebar] = useState(0);
  const [activeHeader, setActiveHeader] = useState(0);
  const [activeDash, setActiveDash] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Components Maps
  const Sidebars = [
    { name: "Standard", comp: <SidebarStandard isOpen={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} /> },
    { name: "Dual Rail", comp: <SidebarDual /> },
    { name: "Glass Floating", comp: <SidebarGlass /> },
    { name: "Brutalist", comp: <SidebarBrutalist /> },
    { name: "Mobile/Bottom", comp: <SidebarBottom /> }, // Note: better viewed alone
  ];

  const Headers = [
    { name: "Search Focused", comp: <HeaderSearch /> },
    { name: "Breadcrumbs", comp: <HeaderBreadcrumb /> },
    { name: "Dark Tabs", comp: <HeaderTabs /> },
    { name: "Gradient", comp: <HeaderGradient /> },
    { name: "Floating Island", comp: <HeaderFloating /> },
  ];

  const Dashboards = [
    { name: "Bento Grid", comp: <DashBento /> },
    { name: "Data Table", comp: <DashTable /> },
    { name: "Kanban Board", comp: <DashKanban /> },
    { name: "Dark Analytics", comp: <DashAnalytics /> },
    { name: "Activity Feed", comp: <DashFeed /> },
  ];

  // Helper to get wrapper styles based on selection
  const getWrapperStyle = () => {
    // Analytics dash needs dark bg
    if (activeDash === 3) return "bg-[#0B1120]"; 
    return "bg-gray-100";
  }

  return (
    <div className="font-sans">
      
      {/* --- CONTROLS --- */}
      <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Panel Mix-and-Match</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">1. Sidebar Style</label>
            <div className="flex flex-wrap gap-2">
              {Sidebars.map((s, i) => (
                <button key={i} onClick={() => setActiveSidebar(i)} 
                  className={`px-3 py-1 text-sm rounded-full border transition-all ${activeSidebar === i ? 'bg-black text-white border-black' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'}`}>
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">2. Topbar Style</label>
            <div className="flex flex-wrap gap-2">
              {Headers.map((h, i) => (
                <button key={i} onClick={() => setActiveHeader(i)} 
                  className={`px-3 py-1 text-sm rounded-full border transition-all ${activeHeader === i ? 'bg-black text-white border-black' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'}`}>
                  {h.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">3. Dashboard Content</label>
            <div className="flex flex-wrap gap-2">
              {Dashboards.map((d, i) => (
                <button key={i} onClick={() => setActiveDash(i)} 
                  className={`px-3 py-1 text-sm rounded-full border transition-all ${activeDash === i ? 'bg-black text-white border-black' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'}`}>
                  {d.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- PREVIEW AREA --- */}
      <div className={`h-[800px] w-full rounded-2xl overflow-hidden shadow-2xl flex border border-gray-300/50 ${getWrapperStyle()}`}>
        
        {/* Sidebar Render */}
        {activeSidebar !== 4 && ( // Hide sidebar for "Mobile Bottom" layout
           <div className="flex-shrink-0 relative z-20">
             {Sidebars[activeSidebar].comp}
           </div>
        )}

        <div className="flex-1 flex flex-col min-w-0 relative">
          {/* Header Render */}
          <div className="flex-shrink-0 z-10">
            {Headers[activeHeader].comp}
          </div>

          {/* Content Render */}
          <div className="flex-1 relative overflow-hidden">
            {/* If Mobile Layout selected, render it as the full content area for demo */}
            {activeSidebar === 4 ? Sidebars[activeSidebar].comp : Dashboards[activeDash].comp}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminPanelGallery;