import React, { useState } from 'react';
import CopyButton from '../CopyButton';

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
  // --- FULL CODE METADATA (Exhaustive & Standalone) ---
  const metadata = {
    sidebars: [
      { 
        name: "SidebarStandard",
        title: "Standard Collapsible", 
        jsx: `import React from 'react';\n\nexport const SidebarStandard = ({ isOpen, toggle }) => (\n  <div className={\`h-full bg-white border-r border-gray-200 transition-all flex flex-col \${isOpen ? 'w-64' : 'w-20'}\`}>\n    <div className="h-16 flex items-center justify-between px-4 border-b border-gray-100 flex-shrink-0">\n      {isOpen && <span className="font-bold text-xl text-blue-600 tracking-tight">AdminPro</span>}\n      <button onClick={toggle} className="p-2 hover:bg-gray-100 rounded-lg text-gray-500">\n        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>\n      </button>\n    </div>\n    <div className="flex-1 py-6 space-y-1 overflow-y-auto">\n      {['Dashboard', 'Analytics', 'Customers', 'Reports', 'Settings'].map((item) => (\n        <div key={item} className="flex items-center px-4 py-3 mx-2 hover:bg-blue-50 text-slate-600 hover:text-blue-600 rounded-xl cursor-pointer transition-colors group">\n          <div className="w-6 h-6 flex-shrink-0 bg-slate-100 group-hover:bg-blue-100 rounded-md transition-colors"></div>\n          {isOpen && <span className="ml-3 font-medium text-sm">{item}</span>}\n        </div>\n      ))}\n    </div>\n  </div>\n);`, 
        html: `<aside class="sidebar-std">\n  <div class="header"><span>AdminPro</span></div>\n  <nav>\n    <div class="item">Dashboard</div>\n    <div class="item">Analytics</div>\n  </nav>\n</aside>`, 
        css: `.sidebar-std { width: 256px; height: 100vh; background: white; border-right: 1px solid #e5e7eb; font-family: sans-serif; }\n.header { height: 64px; border-bottom: 1px solid #f3f4f6; padding: 0 16px; display: flex; align-items: center; color: #2563eb; font-weight: 700; }\nnav { padding: 24px 8px; }\n.item { padding: 12px; margin: 4px 8px; border-radius: 12px; color: #4b5563; cursor: pointer; transition: 0.2s; }\n.item:hover { background: #eff6ff; color: #2563eb; }` 
      },
      { 
        name: "SidebarDual",
        title: "Dual Rail Panel", 
        jsx: `import React from 'react';\n\nexport const SidebarDual = () => (\n  <div className="h-full flex font-sans text-left">\n    <div className="w-20 bg-slate-900 flex flex-col items-center py-8 gap-8 text-slate-400">\n      <div className="w-10 h-10 bg-indigo-600 rounded-2xl mb-4 flex items-center justify-center text-white font-bold shadow-lg">A</div>\n      {['H', 'S', 'U', 'C', 'M'].map(icon => (\n        <button key={icon} className="p-3 hover:bg-slate-800 hover:text-white rounded-2xl transition-all">{icon}</button>\n      ))}\n    </div>\n    <div className="w-56 bg-slate-50 border-r border-slate-200 py-8 px-6">\n      <h3 className="text-[10px] font-black text-slate-400 uppercase mb-6 tracking-[0.2em]">Platform</h3>\n      <div className="space-y-2">\n        {['Overview', 'Team Sync', 'Asset Library'].map((item) => (\n          <div key={item} className="px-4 py-2 text-sm font-bold text-slate-600 hover:bg-white hover:text-indigo-600 rounded-xl cursor-pointer transition-all shadow-sm border border-transparent hover:border-slate-200">{item}</div>\n        ))}\n      </div>\n    </div>\n  </div>\n);`, 
        html: `<div class="sidebar-dual"><div class="rail"></div><div class="panel"><h3>Platform</h3></div></div>`, 
        css: `.sidebar-dual { display: flex; height: 100vh; }\n.rail { width: 80px; background: #0f172a; display: flex; flex-direction: column; align-items: center; padding: 32px 0; }\n.panel { width: 224px; background: #f8fafc; border-right: 1px solid #e2e8f0; padding: 32px 24px; }` 
      },
      { 
        name: "SidebarGlass",
        title: "Floating Glass", 
        jsx: `import React from 'react';\n\nexport const SidebarGlass = () => (\n  <div className="h-full p-6 bg-gradient-to-br from-indigo-950 via-slate-950 to-blue-950 font-sans">\n    <div className="h-full w-24 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] flex flex-col items-center py-10 gap-10 shadow-2xl">\n      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-900 font-black text-xl shadow-white/20 shadow-lg">G</div>\n      <div className="flex flex-col gap-6 w-full px-4">\n        {[1,2,3,4,5].map(i => (\n          <div key={i} className="aspect-square w-full rounded-3xl flex items-center justify-center text-white/50 hover:bg-white hover:text-indigo-900 cursor-pointer transition-all duration-300 hover:scale-110 shadow-inner">\n            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><circle cx="12" cy="12" r="10"/></svg>\n          </div>\n        ))}\n      </div>\n    </div>\n  </div>\n);`, 
        html: `<div class="sidebar-glass"></div>`, 
        css: `.sidebar-glass { width: 96px; background: rgba(255,255,255,0.05); backdrop-filter: blur(20px); border-radius: 40px; border: 1px solid rgba(255,255,255,0.1); }` 
      },
      { 
        name: "SidebarBrutalist",
        title: "Brutalist Bar", 
        jsx: `import React from 'react';\n\nexport const SidebarBrutalist = () => (\n  <div className="h-full w-64 bg-orange-400 border-r-4 border-black p-8 flex flex-col font-sans text-left">\n    <div className="text-4xl font-black uppercase mb-12 tracking-tighter leading-none italic">ADMIN<br/>CTRL</div>\n    <div className="space-y-4 flex-1">\n      {['Dashboard', 'Security', 'User Base', 'API Keys'].map((item) => (\n        <div key={item} className="bg-white border-2 border-black p-4 font-black shadow-[4px_4px_0_0_#000] cursor-pointer hover:bg-black hover:text-white transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">\n          {item.toUpperCase()}\n        </div>\n      ))}\n    </div>\n    <div className="mt-auto pt-8 border-t-2 border-black font-bold text-sm tracking-tight">V2.4.1_STABLE</div>\n  </div>\n);`, 
        html: `<div class="sidebar-brutalist"></div>`, 
        css: `.sidebar-brutalist { width: 256px; background: #fb923c; border-right: 4px solid black; padding: 32px; font-family: sans-serif; }` 
      },
      { 
        name: "SidebarBottom",
        title: "Mobile Bottom Nav", 
        jsx: `import React from 'react';\n\nexport const SidebarBottom = () => (\n  <div className="h-full bg-slate-50 flex flex-col justify-end relative font-sans">\n    <div className="h-24 bg-white border-t border-slate-200 flex justify-around items-center px-12 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)] relative z-10 rounded-t-[3rem]">\n      {['H', 'S', '+', 'A', 'P'].map((item, i) => (\n        <div key={i} className={\`flex items-center justify-center \${i === 2 ? 'w-16 h-16 bg-indigo-600 text-white rounded-3xl -translate-y-6 shadow-xl shadow-indigo-200' : 'w-12 h-12 text-slate-400 hover:text-indigo-600'} transition-all font-bold cursor-pointer\`}>\n          {item}\n        </div>\n      ))}\n    </div>\n  </div>\n);`, 
        html: `<div class="bottom-bar"></div>`, 
        css: `.bottom-bar { position: fixed; bottom: 0; width: 100%; height: 96px; background: white; border-top: 1px solid #e5e7eb; border-radius: 48px 48px 0 0; }` 
      },
    ],
    headers: [
      { 
        name: "HeaderSearch",
        title: "Search Focused", 
        jsx: `import React from 'react';\n\nexport const HeaderSearch = () => (\n  <div className="h-20 bg-white border-b border-slate-100 flex items-center px-10 justify-between font-sans">\n    <div className="flex items-center w-full max-w-xl bg-slate-100 rounded-2xl px-6 py-3 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-600/10 focus-within:border-indigo-600 border border-transparent transition-all">\n      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-slate-400 mr-4"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>\n      <input type="text" placeholder="Search commands, users, or data..." className="bg-transparent border-none outline-none w-full text-sm font-medium" />\n    </div>\n    <div className="flex items-center gap-6">\n      <div className="text-right hidden md:block"><div className="text-sm font-bold">Alex Rivera</div><div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Admin</div></div>\n      <div className="w-12 h-12 rounded-2xl bg-indigo-100 border border-indigo-200"></div>\n    </div>\n  </div>\n);`, 
        html: `<header class="header-search"></header>`, 
        css: `.header-search { height: 80px; background: white; border-bottom: 1px solid #f1f5f9; }` 
      },
      { 
        name: "HeaderBreadcrumb",
        title: "Clean Breadcrumb", 
        jsx: `import React from 'react';\n\nexport const HeaderBreadcrumb = () => (\n  <div className="h-24 bg-white border-b border-slate-200 flex flex-col justify-center px-10 font-sans text-left">\n    <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">\n      <span>Platform</span>\n      <span className="text-slate-200">/</span>\n      <span>Cloud Infrastructure</span>\n      <span className="text-slate-200">/</span>\n      <span className="text-indigo-600">Active Nodes</span>\n    </div>\n    <h1 className="text-3xl font-black text-slate-900 tracking-tighter">System Health Overview</h1>\n  </div>\n);`, 
        html: `<header class="header-bc"></header>`, 
        css: `.header-bc { padding: 40px; background: white; font-family: sans-serif; }` 
      },
      { 
        name: "HeaderTabs",
        title: "Project Tabs Nav", 
        jsx: `import React from 'react';\n\nexport const HeaderTabs = () => (\n  <div className="bg-slate-900 text-white pt-6 px-10 font-sans text-left">\n    <div className="flex justify-between items-center mb-8">\n      <div className="flex items-center gap-4">\n        <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center font-bold">X</div>\n        <h2 className="text-xl font-bold tracking-tight">Project Genesis v4</h2>\n      </div>\n      <button className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold transition-all">Export Bundle</button>\n    </div>\n    <div className="flex gap-10 text-xs font-black uppercase tracking-widest text-slate-400">\n      {['Overview', 'Tasks', 'Cloud Ops', 'Metrics', 'Team'].map((tab, i) => (\n        <div key={tab} className={\`pb-4 cursor-pointer transition-all hover:text-white \${i === 2 ? 'text-white border-b-2 border-blue-500' : ''}\`}>{tab}</div>\n      ))}\n    </div>\n  </div>\n);`, 
        html: `<header class="header-tabs"></header>`, 
        css: `.header-tabs { background: #0f172a; color: white; padding: 24px 40px 0; }` 
      },
      { 
        name: "HeaderGradient",
        title: "Impact Gradient", 
        jsx: `import React from 'react';\n\nexport const HeaderGradient = () => (\n  <div className="h-20 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 flex items-center justify-between px-10 text-white font-sans">\n    <div className="text-2xl font-black tracking-tighter italic">VORTEX.AI</div>\n    <div className="flex items-center gap-4">\n      <div className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20 italic">Live_System_Active</div>\n    </div>\n  </div>\n);`, 
        html: `<header class="header-grad"></header>`, 
        css: `.header-grad { background: linear-gradient(to right, #1d4ed8, #4f46e5, #9333ea); height: 80px; }` 
      },
      { 
        name: "HeaderFloating",
        title: "Floating Command", 
        jsx: `import React from 'react';\n\nexport const HeaderFloating = () => (\n  <div className="h-28 bg-slate-50 flex items-center justify-center font-sans">\n    <div className="bg-white border border-slate-200 rounded-[2rem] px-8 py-4 shadow-2xl shadow-slate-200/50 flex items-center gap-10 border-b-4 border-slate-100 hover:border-b-0 hover:translate-y-1 transition-all cursor-pointer">\n       <div className="flex items-center gap-3 text-slate-400"><span className="text-sm font-bold">⌘</span><span className="text-xs font-black uppercase tracking-widest">Command Center</span></div>\n       <div className="w-px h-6 bg-slate-100"></div>\n       <div className="flex gap-4"><div className="w-8 h-8 rounded-xl bg-slate-100"></div><div className="w-8 h-8 rounded-xl bg-slate-100"></div></div>\n    </div>\n  </div>\n);`, 
        html: `<div class="hdr-float"></div>`, 
        css: `.hdr-float { background: white; border-radius: 40px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.2); }` 
      },
    ],
    dashboards: [
      { 
        name: "DashBento",
        title: "Bento Analytics", 
        jsx: `import React from 'react';\n\nexport const DashBento = () => (\n  <div className="p-10 h-full bg-slate-50 overflow-y-auto font-sans text-left">\n    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[180px]">\n      <div className="md:col-span-2 md:row-span-2 bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm flex flex-col justify-end relative overflow-hidden group">\n         <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-[80px]"></div>\n         <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-4">Revenue Yield</h3>\n         <p className="text-slate-500 font-medium max-w-xs leading-relaxed">System-wide performance monitoring with real-time heuristic analysis.</p>\n      </div>\n      {[1,2,3,4].map(i => (\n        <div key={i} className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-indigo-600 transition-colors cursor-pointer group">\n           <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Metric_{i}</div>\n           <div className="text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tighter">94.2%</div>\n        </div>\n      ))}\n    </div>\n  </div>\n);`, 
        html: `<main class="dash-bento"></main>`, 
        css: `.dash-bento { padding: 40px; background: #f8fafc; font-family: sans-serif; }` 
      },
      { 
        name: "DashTable",
        title: "Dense Data Grid", 
        jsx: `import React from 'react';\n\nexport const DashTable = () => (\n  <div className="p-10 h-full bg-white font-sans text-left overflow-y-auto">\n    <div className="mb-8 flex justify-between items-end">\n      <div><h2 className="text-3xl font-black tracking-tight mb-1">User Management</h2><p className="text-slate-400 text-sm font-medium">Monitoring active sessions across clusters.</p></div>\n      <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-indigo-600 transition-colors">Add_New_Node</button>\n    </div>\n    <div className="border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm">\n      <table className="w-full text-left">\n        <thead className="bg-slate-50 border-b border-slate-200 font-black text-[10px] text-slate-400 uppercase tracking-widest">\n          <tr><th className="p-6">Entity_ID</th><th>Status_Flag</th><th>Latency_MS</th><th className="p-6">Actions</th></tr>\n        </thead>\n        <tbody className="text-sm font-bold text-slate-600">\n          {[1,2,3,4,5,6].map(i => (\n            <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">\n              <td className="p-6 text-slate-900 font-black tracking-tight">NODE_0x24{i}</td>\n              <td><span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-[10px] font-black uppercase">Active</span></td>\n              <td className="font-mono text-xs">{24 + i}ms</td>\n              <td className="p-6"><button className="text-indigo-600 hover:underline">Config</button></td>\n            </tr>\n          ))}\n        </tbody>\n      </table>\n    </div>\n  </div>\n);`, 
        html: `<main class="dash-table"></main>`, 
        css: `.dash-table { background: white; padding: 40px; }` 
      },
      { 
        name: "DashKanban",
        title: "Kanban Board Flow", 
        jsx: `import React from 'react';\n\nexport const DashKanban = () => (\n  <div className="p-10 h-full bg-slate-50 flex gap-8 overflow-x-auto font-sans text-left">\n    {['Backlog_Alpha', 'In_Process', 'Deployment', 'Validated'].map((col, idx) => (\n      <div key={col} className="min-w-[320px] h-full flex flex-col">\n        <div className="flex justify-between items-center mb-6">\n          <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] italic">{col}</h3>\n          <span className="w-6 h-6 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-[10px] font-bold text-slate-400">{idx+3}</span>\n        </div>\n        <div className="flex-1 space-y-4">\n           {[1,2].map(j => (\n             <div key={j} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-indigo-600 transition-all cursor-grab active:cursor-grabbing group">\n                <div className="flex gap-2 mb-4"><div className="w-8 h-1.5 bg-indigo-600 rounded-full"></div><div className="w-8 h-1.5 bg-slate-100 rounded-full"></div></div>\n                <h4 className="font-black text-slate-900 tracking-tight mb-2 leading-none">Sub-Task Alpha Sync #{idx}{j}</h4>\n                <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">Updating security headers for the primary authentication module.</p>\n                <div className="flex justify-between items-center"><div className="w-8 h-8 rounded-xl bg-slate-100"></div><div className="text-[10px] font-black text-indigo-600 italic">LOW_PRIORITY</div></div>\n             </div>\n           ))}\n           <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-3xl text-slate-300 font-black text-[10px] uppercase tracking-widest hover:border-slate-400 hover:text-slate-500 transition-all">+ Add_New_Ticket</button>\n        </div>\n      </div>\n    ))}\n  </div>\n);`, 
        html: `<main class="dash-kanban"></main>`, 
        css: `.dash-kanban { display: flex; gap: 32px; padding: 40px; }` 
      },
      { 
        name: "DashAnalytics",
        title: "Dark Analytics Grid", 
        jsx: `import React from 'react';\n\nexport const DashAnalytics = () => (\n  <div className="p-10 h-full bg-[#0B1120] text-white overflow-y-auto font-sans text-left">\n    <div className="mb-12 flex justify-between items-start">\n       <div><h2 className="text-4xl font-black tracking-tighter italic mb-2">NEURAL_DASHBOARD</h2><div className="flex gap-4 items-center"><div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_15px_#22d3ee]"></div><span className="text-xs font-black text-cyan-500 uppercase tracking-widest">System_Live_0x94</span></div></div>\n       <div className="flex gap-2"><div className="px-6 py-2 bg-slate-800 rounded-xl text-xs font-bold border border-slate-700">Refresh_Stream</div></div>\n    </div>\n    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">\n      <div className="md:col-span-2 bg-slate-900/50 border border-slate-800 rounded-[2.5rem] p-10 h-96 relative overflow-hidden group">\n         <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent"></div>\n         <h3 className="text-xl font-bold mb-10 relative">Throughput_Vector_Analysis</h3>\n         <div className="flex items-end gap-3 h-32">\n            {[40, 70, 45, 90, 65, 80, 50, 100, 60, 85].map((h, i) => (<div key={i} className="flex-1 bg-slate-800 rounded-t-lg relative group-hover:bg-cyan-500 transition-all" style={{height: \`\${h}%\`}}></div>))}\n         </div>\n      </div>\n      <div className="space-y-8">\n         {[1,2,3].map(i => (\n           <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-[2rem] p-8 flex items-center justify-between group hover:border-cyan-500/50 transition-all">\n              <div><div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Channel_{i}</div><div className="text-2xl font-black tracking-tighter italic">92.4k</div></div>\n              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all">→</div>\n           </div>\n         ))}\n      </div>\n    </div>\n  </div>\n);`, 
        html: `<main class="dash-dark"></main>`, 
        css: `.dash-dark { background: #0b1120; color: white; padding: 40px; }` 
      },
      { 
        name: "DashFeed",
        title: "Security Activity Feed", 
        jsx: `import React from 'react';\n\nexport const DashFeed = () => (\n  <div className="p-10 h-full bg-white max-w-3xl mx-auto font-sans text-left overflow-y-auto">\n    <div className="flex justify-between items-center mb-10 pb-6 border-b border-slate-100">\n       <h2 className="text-2xl font-black tracking-tight">Audit Log</h2>\n       <div className="text-xs font-black text-indigo-600 uppercase tracking-widest italic cursor-pointer">Export_Report</div>\n    </div>\n    <div className="space-y-10">\n      {[1,2,3,4,5,6].map(i => (\n        <div key={i} className="flex gap-6 relative">\n          {i !== 6 && <div className="absolute top-10 left-5 w-px h-full bg-slate-100"></div>}\n          <div className={\`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 \${i % 3 === 0 ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-400'}\`}>\n             <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><circle cx="12" cy="12" r="8"/></svg>\n          </div>\n          <div className="pt-1 flex-1">\n            <div className="flex justify-between items-center mb-2"><div className="text-sm font-black text-slate-900 tracking-tight">Infrastructure_Scale_Event_0{i}</div><div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{i*5}m ago</div></div>\n            <p className="text-sm text-slate-500 font-medium leading-relaxed mb-3">Auto-scaling group successfully triggered for region US-EAST-1 following unexpected traffic surge.</p>\n            <div className="flex gap-2"><span className="px-3 py-1 bg-slate-100 text-[10px] font-black text-slate-500 rounded-lg">#AWS</span><span className="px-3 py-1 bg-slate-100 text-[10px] font-black text-slate-500 rounded-lg">#SYSTEM</span></div>\n          </div>\n        </div>\n      ))}\n    </div>\n  </div>\n);`, 
        html: `<main class="dash-feed"></main>`, 
        css: `.dash-feed { max-width: 768px; margin: 0 auto; background: white; padding: 40px; }` 
      },
    ]
  };

  // Helper to construct combined code
  const getCombinedCode = () => {
    const s = metadata.sidebars[activeSidebar];
    const h = metadata.headers[activeHeader];
    const d = metadata.dashboards[activeDash];
    
    return {
      jsx: `import React, { useState } from 'react';\n\n// --- ADMIN LAYOUT COMPOSITION ---\n// 1. ${s.title}\n// 2. ${h.title}\n// 3. ${d.title}\n\n${s.jsx.replace("import React from 'react';", "")}\n\n${h.jsx.replace("import React from 'react';", "")}\n\n${d.jsx.replace("import React from 'react';", "")}\n\nconst AdminLayout = () => {\n  const [sidebarOpen, setSidebarOpen] = useState(true);\n  \n  return (\n    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">\n      <${s.name} isOpen={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />\n      <div className="flex-1 flex flex-col min-w-0">\n        <${h.name} />\n        <main className="flex-1 overflow-y-auto">\n          <${d.name} />\n        </main>\n      </div>\n    </div>\n  );\n};\n\nexport default AdminLayout;`,
      html: `<!-- Sidebar: ${s.title} -->\n${s.html}\n\n<!-- Header: ${h.title} -->\n${h.html}\n\n<!-- Content: ${d.title} -->\n${d.html}`,
      css: `/* Sidebar: ${s.title} */\n${s.css}\n\n/* Header: ${h.title} */\n${h.css}\n\n/* Content: ${d.title} */\n${d.css}`
    };
  };

  // Helper to get wrapper styles based on selection
  const getWrapperStyle = () => {
    // Analytics dash needs dark bg
    if (activeDash === 3) return "bg-[#0B1120]"; 
    return "bg-gray-100";
  }

  return (
    <div className="container box-shadow overflow-y-auto bg-slate-200 font-sans p-4 md:p-8">
      
      {/* --- CONTROLS --- */}
      <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Panel Mix-and-Match</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">1. Sidebar Style</label>
            <div className="flex flex-wrap gap-2">
              {Sidebars.map((s, i) => (
                <button key={i} onClick={() => setActiveSidebar(i)} 
                  className={`px-3 py-1 text-sm rounded-full border transition-all ${activeSidebar === i ? 'bg-black text-white border-black' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'}`}>
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
                  className={`px-3 py-1 text-sm rounded-full border transition-all ${activeHeader === i ? 'bg-black text-white border-black' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'}`}>
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
                  className={`px-3 py-1 text-sm rounded-full border transition-all ${activeDash === i ? 'bg-black text-white border-black' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'}`}>
                  {d.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- PREVIEW AREA --- */}
      <div className={`h-[800px] w-full rounded-2xl overflow-hidden shadow-2xl flex border border-gray-300/50 ${getWrapperStyle()} relative group/adm`}>
        <div className="absolute top-2 right-2 z-50 opacity-0 group-hover/adm:opacity-100 transition-opacity">
          <CopyButton 
            jsxCode={getCombinedCode().jsx} 
            htmlCode={getCombinedCode().html} 
            cssCode={getCombinedCode().css} 
          />
        </div>
        
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