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
        jsx: `import React, { useState } from 'react';

const Icons = {
  Home: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
  Users: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  Chart: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  Settings: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  Menu: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>,
  ChevronLeft: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>,
};

export const SidebarStandard = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <div className={\`h-screen bg-white border-r border-gray-200 transition-all duration-300 flex flex-col \${isOpen ? 'w-64' : 'w-20'}\`}>
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-100">
        {isOpen && <span className="font-bold text-xl text-blue-600">AdminPanel</span>}
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-gray-100 rounded-lg text-gray-500">
          {isOpen ? <Icons.ChevronLeft /> : <Icons.Menu />}
        </button>
      </div>
      <div className="flex-1 py-4 space-y-2 overflow-y-auto">
        {['Dashboard', 'Users', 'Analytics', 'Settings'].map((item, i) => (
          <div key={i} className="flex items-center px-4 py-3 mx-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg cursor-pointer group">
            <span className="group-hover:scale-110 transition-transform">
              {i === 0 ? <Icons.Home /> : i === 1 ? <Icons.Users /> : i === 2 ? <Icons.Chart /> : <Icons.Settings />}
            </span>
            {isOpen && <span className="ml-3 font-medium">{item}</span>}
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex-shrink-0"></div>
          {isOpen && <div>
            <div className="text-sm font-bold">Alex User</div>
            <div className="text-xs text-gray-500">Admin</div>
          </div>}
        </div>
      </div>
    </div>
  );
};`, 
        html: `<aside class="sidebar-std">
  <div class="sidebar-header">
    <span class="logo">AdminPanel</span>
    <button class="toggle-btn">☰</button>
  </div>
  <nav class="sidebar-nav">
    <div class="nav-item active">Dashboard</div>
    <div class="nav-item">Users</div>
    <div class="nav-item">Analytics</div>
    <div class="nav-item">Settings</div>
  </nav>
  <div class="sidebar-footer">
    <div class="user-avatar"></div>
    <div class="user-info">
      <div class="user-name">Alex User</div>
      <div class="user-role">Admin</div>
    </div>
  </div>
</aside>`, 
        css: `.sidebar-std { width: 256px; height: 100vh; background: white; border-right: 1px solid #e5e7eb; display: flex; flex-direction: column; transition: width 0.3s ease; font-family: sans-serif; }
.sidebar-std.collapsed { width: 80px; }
.sidebar-header { height: 64px; border-bottom: 1px solid #f3f4f6; display: flex; align-items: center; justify-content: space-between; padding: 0 16px; }
.logo { font-weight: 700; font-size: 1.25rem; color: #2563eb; }
.sidebar-std.collapsed .logo { display: none; }
.toggle-btn { background: none; border: none; padding: 8px; cursor: pointer; color: #6b7280; border-radius: 8px; }
.toggle-btn:hover { background: #f3f4f6; }
.sidebar-nav { flex: 1; padding: 16px 8px; }
.nav-item { display: flex; align-items: center; padding: 12px 16px; margin-bottom: 4px; border-radius: 8px; color: #4b5563; cursor: pointer; transition: 0.2s; }
.nav-item:hover, .nav-item.active { background: #eff6ff; color: #2563eb; font-weight: 500; }
.sidebar-footer { padding: 16px; border-top: 1px solid #f3f4f6; display: flex; align-items: center; gap: 12px; }
.user-avatar { width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(to top right, #3b82f6, #a855f7); flex-shrink: 0; }
.user-name { font-size: 0.875rem; font-weight: 700; color: #111827; }
.user-role { font-size: 0.75rem; color: #6b7280; }
.sidebar-std.collapsed .user-info { display: none; }`,
        js: `const sidebar = document.querySelector('.sidebar-std');
const toggleBtn = document.querySelector('.toggle-btn');
if (sidebar && toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
  });
}`
      },
      { 
        name: "SidebarDual",
        title: "Dual Rail Panel", 
        jsx: `export const SidebarDual = () => (
  <div className="h-screen flex font-sans">
    <div className="w-20 bg-slate-900 flex flex-col items-center py-6 gap-6 text-slate-400">
      <div className="w-10 h-10 bg-blue-600 rounded-xl mb-4"></div>
      <button className="p-3 bg-slate-800 text-white rounded-xl">H</button>
      <button className="p-3 hover:bg-slate-800 rounded-xl transition-all">U</button>
      <button className="p-3 hover:bg-slate-800 rounded-xl transition-all">C</button>
      <div className="mt-auto p-3 hover:bg-slate-800 rounded-xl cursor-pointer">S</div>
    </div>
    <div className="w-56 bg-slate-50 border-r border-slate-200 py-6 px-4 text-left">
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
);`, 
        html: `<div class="sidebar-dual">
  <div class="primary-rail">
    <div class="app-logo"></div>
    <div class="rail-item active">H</div>
    <div class="rail-item">U</div>
    <div class="rail-item">C</div>
    <div class="rail-item settings">S</div>
  </div>
  <div class="secondary-panel">
    <h3 class="panel-title">Dashboard</h3>
    <div class="panel-nav">
      <div class="panel-item active">Overview</div>
      <div class="panel-item">Performance</div>
      <div class="panel-item">Automations</div>
      <div class="panel-item">Reports</div>
    </div>
  </div>
</div>`, 
        css: `.sidebar-dual { display: flex; height: 100vh; font-family: sans-serif; }
.primary-rail { width: 80px; background: #0f172a; display: flex; flex-direction: column; align-items: center; padding: 24px 0; gap: 24px; }
.app-logo { width: 40px; height: 40px; background: #2563eb; border-radius: 12px; margin-bottom: 16px; }
.rail-item { width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; color: #94a3b8; border-radius: 12px; cursor: pointer; transition: 0.2s; }
.rail-item:hover, .rail-item.active { background: #1e293b; color: white; }
.rail-item.active { background: #1e293b; border: 1px solid #334155; }
.settings { mt-auto: true; margin-top: auto; }
.secondary-panel { width: 224px; background: #f8fafc; border-right: 1px solid #e2e8f0; padding: 24px 16px; text-align: left; }
.panel-title { font-size: 0.75rem; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px; }
.panel-nav { display: flex; flex-direction: column; gap: 4px; }
.panel-item { padding: 8px 12px; font-size: 0.875rem; color: #475569; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.panel-item:hover, .panel-item.active { background: white; box-shadow: 0 1px 2px rgba(0,0,0,0.05); color: #0f172a; }`,
        js: `// Logic for switching rail items
const railItems = document.querySelectorAll('.rail-item');
railItems.forEach(item => {
  item.addEventListener('click', () => {
    railItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});`
      },
      { 
        name: "SidebarGlass",
        title: "Floating Glass", 
        jsx: `export const SidebarGlass = () => (
  <div className="h-screen p-4 bg-gradient-to-b from-purple-900 to-indigo-900 font-sans">
    <div className="h-full w-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl flex flex-col items-center py-8 gap-8 shadow-2xl">
      <div className="text-white font-bold text-xl">A.</div>
      <div className="flex flex-col gap-4 w-full px-2">
        {[1,2,3,4].map(i => (
          <div key={i} className="aspect-square w-full rounded-2xl flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3" strokeWidth="2"/></svg>
          </div>
        ))}
      </div>
    </div>
  </div>
);`, 
        html: `<div class="glass-container">
  <aside class="sidebar-glass">
    <div class="glass-logo">A.</div>
    <div class="glass-nav">
      <div class="glass-item active">H</div>
      <div class="glass-item">U</div>
      <div class="glass-item">C</div>
      <div class="glass-item">S</div>
    </div>
  </aside>
</div>`, 
        css: `.glass-container { height: 100vh; padding: 16px; background: linear-gradient(to bottom, #581c87, #312e81); }
.sidebar-glass { height: 100%; width: 80px; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 24px; display: flex; flex-direction: column; align-items: center; padding: 32px 0; gap: 32px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
.glass-logo { color: white; font-weight: 700; font-size: 1.25rem; }
.glass-nav { display: flex; flex-direction: column; gap: 16px; width: 100%; padding: 0 8px; }
.glass-item { aspect-ratio: 1/1; width: 100%; display: flex; align-items: center; justify-content: center; color: rgba(255, 255, 255, 0.7); border-radius: 16px; cursor: pointer; transition: 0.3s; }
.glass-item:hover, .glass-item.active { background: rgba(255, 255, 255, 0.2); color: white; transform: scale(1.05); }`,
        js: `// Interaction logic for glass hover effects could be added here`
      },
      { 
        name: "SidebarBrutalist",
        title: "Brutalist Bar", 
        jsx: `export const SidebarBrutalist = () => (
  <div className="h-screen w-64 bg-yellow-400 border-r-4 border-black p-6 flex flex-col font-sans">
    <div className="text-3xl font-black uppercase mb-10 tracking-tighter text-left">Admin<br/>Console</div>
    <div className="space-y-4 flex-1">
      {['Dashboard', 'Users', 'Revenue', 'Audit Logs'].map((item) => (
        <div key={item} className="bg-white border-2 border-black p-3 font-bold shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:shadow-[2px_2px_0_0_#000] transition-all cursor-pointer hover:bg-black hover:text-white text-left">
          {item.toUpperCase()}
        </div>
      ))}
    </div>
    <div className="bg-black text-white p-3 font-mono text-center text-sm border-2 border-transparent">
      v2.0.4
    </div>
  </div>
);`, 
        html: `<aside class="sidebar-brutalist">
  <div class="brutalist-title">ADMIN<br>CONSOLE</div>
  <div class="brutalist-nav">
    <div class="brutalist-item active">DASHBOARD</div>
    <div class="brutalist-item">USERS</div>
    <div class="brutalist-item">REVENUE</div>
    <div class="brutalist-item">AUDIT LOGS</div>
  </div>
  <div class="brutalist-version">v2.0.4</div>
</aside>`, 
        css: `.sidebar-brutalist { width: 256px; height: 100vh; background: #facc15; border-right: 4px solid black; padding: 24px; display: flex; flex-direction: column; font-family: sans-serif; }
.brutalist-title { font-size: 1.875rem; font-weight: 900; text-transform: uppercase; margin-bottom: 40px; tracking-tighter: -0.05em; line-height: 1; text-align: left; }
.brutalist-nav { flex: 1; display: flex; flex-direction: column; gap: 16px; }
.brutalist-item { background: white; border: 2px solid black; padding: 12px; font-weight: 700; box-shadow: 4px 4px 0 0 #000; transition: 0.1s; cursor: pointer; text-align: left; }
.brutalist-item:hover, .brutalist-item.active { transform: translate(1px, 1px); box-shadow: 2px 2px 0 0 #000; background: black; color: white; }
.brutalist-version { background: black; color: white; padding: 12px; font-family: monospace; text-align: center; font-size: 0.875rem; }`,
        js: `// Brutalist hover logic is handled via CSS`
      },
      { 
        name: "SidebarBottom",
        title: "Mobile Bottom Nav", 
        jsx: `export const SidebarBottom = () => (
  <div className="h-screen bg-gray-100 flex flex-col justify-end relative font-sans">
    <div className="h-20 bg-white border-t border-gray-200 flex justify-around items-center px-8 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
      {['Home', 'Search', 'Add', 'Activity', 'Profile'].map((item, i) => (
        <div key={i} className={\`flex flex-col items-center gap-1 cursor-pointer \${i===2 ? '-mt-8' : 'text-gray-400 hover:text-blue-600'}\`}>
          {i === 2 ? (
            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-300 hover:scale-110 transition-transform">
              <span className="text-2xl font-bold">+</span>
            </div>
          ) : (
            <>
              <div className="w-6 h-6 bg-gray-200 rounded-lg"></div>
              <span className="text-[10px] font-medium">{item}</span>
            </>
          )}
        </div>
      ))}
    </div>
  </div>
);`, 
        html: `<nav class="bottom-nav">
  <div class="nav-btn">Home</div>
  <div class="nav-btn">Search</div>
  <div class="nav-btn center-btn">+</div>
  <div class="nav-btn">Activity</div>
  <div class="nav-btn">Profile</div>
</nav>`, 
        css: `.bottom-nav { position: fixed; bottom: 0; width: 100%; height: 80px; background: white; border-top: 1px solid #e5e7eb; display: flex; justify-content: space-around; align-items: center; padding: 0 32px; box-shadow: 0 -5px 20px rgba(0,0,0,0.05); z-index: 1000; font-family: sans-serif; }
.nav-btn { display: flex; flex-direction: column; align-items: center; color: #9ca3af; font-size: 10px; cursor: pointer; }
.center-btn { width: 56px; height: 56px; background: #2563eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: 700; margin-top: -40px; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4); transition: 0.2s; }
.center-btn:hover { transform: scale(1.1); }`,
        js: `// Active state switching for bottom nav`
      },
    ],
    headers: [
      { 
        name: "HeaderSearch",
        title: "Search Focused", 
        jsx: `export const HeaderSearch = () => (
  <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6 justify-between font-sans">
    <div className="flex items-center w-full max-w-2xl bg-gray-100 rounded-lg px-4 py-2 border border-transparent focus-within:bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      <input type="text" placeholder="Search users, orders... (Ctrl+K)" className="bg-transparent border-none outline-none ml-3 w-full text-sm text-gray-700" />
      <span className="text-xs text-gray-400 border border-gray-300 rounded px-1.5 py-0.5 ml-2">⌘K</span>
    </div>
    <div className="flex gap-4 ml-4 flex-shrink-0">
      <button className="p-2 relative text-gray-400 hover:text-gray-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg><span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span></button>
      <div className="w-8 h-8 bg-gray-200 rounded-full border border-gray-100"></div>
    </div>
  </div>
);`, 
        html: `<header class="header-search">
  <div class="search-bar">
    <span class="search-icon">🔍</span>
    <input type="text" class="search-input" placeholder="Search... (Ctrl+K)">
    <kbd class="shortcut">⌘K</kbd>
  </div>
  <div class="header-actions">
    <button class="notif-btn">🔔</button>
    <div class="user-pill"></div>
  </div>
</header>`, 
        css: `.header-search { height: 64px; background: white; border-bottom: 1px solid #e5e7eb; display: flex; align-items: center; justify-content: space-between; padding: 0 24px; font-family: sans-serif; }
.search-bar { flex: 1; max-width: 600px; background: #f3f4f6; border: 1px solid transparent; border-radius: 8px; display: flex; align-items: center; padding: 8px 16px; transition: 0.2s; }
.search-bar:focus-within { background: white; border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.1); }
.search-input { background: none; border: none; outline: none; flex: 1; font-size: 14px; margin-left: 12px; }
.shortcut { font-size: 10px; color: #9ca3af; border: 1px solid #d1d5db; padding: 2px 6px; border-radius: 4px; }
.header-actions { display: flex; align-items: center; gap: 16px; margin-left: 16px; }`,
        js: `// Global search shortcut
window.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    document.querySelector('.search-input')?.focus();
  }
});`
      },
      { 
        name: "HeaderBreadcrumb",
        title: "Breadcrumb Header", 
        jsx: `export const HeaderBreadcrumb = () => (
  <div className="h-20 bg-white border-b border-gray-200 flex flex-col justify-center px-8 font-sans text-left">
    <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
      <span>Home</span> <span className="text-gray-300">/</span> <span>Settings</span> <span className="text-gray-300">/</span> <span className="text-blue-600 font-medium">Team Members</span>
    </div>
    <div className="flex justify-between items-end">
      <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Team Members</h1>
      <div className="flex gap-2">
        <button className="px-4 py-1.5 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 transition-all">Export</button>
        <button className="px-4 py-1.5 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 shadow-sm transition-all">Add Member</button>
      </div>
    </div>
  </div>
);`, 
        html: `<header class="header-bc">
  <div class="breadcrumbs">Home / Settings / Team</div>
  <div class="title-row">
    <h1 class="page-title">Team Members</h1>
    <div class="actions">
      <button class="btn secondary">Export</button>
      <button class="btn primary">Add Member</button>
    </div>
  </div>
</header>`, 
        css: `.header-bc { padding: 20px 32px; background: white; border-bottom: 1px solid #e5e7eb; font-family: sans-serif; text-align: left; }
.breadcrumbs { font-size: 12px; color: #6b7280; margin-bottom: 4px; }
.title-row { display: flex; justify-content: space-between; align-items: flex-end; }
.page-title { font-size: 24px; font-weight: 700; color: #111827; margin: 0; }
.btn { padding: 8px 16px; border-radius: 6px; font-size: 14px; font-weight: 500; cursor: pointer; transition: 0.2s; border: none; }
.btn.primary { background: black; color: white; }
.btn.secondary { background: white; border: 1px solid #d1d5db; color: #374151; }
.btn:hover { opacity: 0.8; }`,
        js: ``
      },
      { 
        name: "HeaderTabs",
        title: "Tabbed Dark Nav", 
        jsx: `export const HeaderTabs = () => (
  <div className="bg-slate-900 text-white pt-4 px-6 font-sans text-left">
    <div className="flex justify-between items-center mb-6">
      <div className="font-bold text-lg">Project Alpha</div>
      <div className="flex gap-2">
        <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-slate-900"></div>
        <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-slate-900 -ml-3"></div>
        <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-slate-900 -ml-3 flex items-center justify-center text-[10px]">+4</div>
      </div>
    </div>
    <div className="flex gap-6 text-sm text-slate-400">
      {['Overview', 'Tasks', 'Board', 'Timeline', 'Files'].map((tab, i) => (
        <div key={tab} className={\`pb-3 cursor-pointer transition-all \${i === 2 ? 'text-white border-b-2 border-blue-500' : 'hover:text-white'}\`}>
          {tab}
        </div>
      ))}
    </div>
  </div>
);`, 
        html: `<header class="header-tabs">
  <div class="top-row">
    <div class="project-name">Project Alpha</div>
    <div class="team-avatars">...</div>
  </div>
  <nav class="tab-nav">
    <div class="tab">Overview</div>
    <div class="tab active">Board</div>
    <div class="tab">Timeline</div>
    <div class="tab">Files</div>
  </nav>
</header>`, 
        css: `.header-tabs { background: #0f172a; color: white; padding: 16px 24px 0; font-family: sans-serif; text-align: left; }
.top-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
.project-name { font-weight: 700; font-size: 1.125rem; }
.tab-nav { display: flex; gap: 24px; font-size: 14px; color: #94a3b8; }
.tab { padding-bottom: 12px; cursor: pointer; transition: 0.2s; }
.tab:hover, .tab.active { color: white; }
.tab.active { border-bottom: 2px solid #3b82f6; }`,
        js: `// Tab switching logic
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});`
      },
      { 
        name: "HeaderGradient",
        title: "Premium Gradient", 
        jsx: `export const HeaderGradient = () => (
  <div className="h-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-between px-6 text-white shadow-lg font-sans">
    <div className="font-bold tracking-wider text-lg italic">DASH.CORE</div>
    <div className="flex items-center gap-6 text-white/80">
      <span className="text-sm cursor-pointer hover:text-white transition-all">Docs</span>
      <span className="text-sm cursor-pointer hover:text-white transition-all">Support</span>
      <div className="w-10 h-10 bg-white/20 rounded-xl backdrop-blur flex items-center justify-center font-bold border border-white/30">AR</div>
    </div>
  </div>
);`, 
        html: `<header class="header-grad">
  <div class="brand">DASH.CORE</div>
  <nav class="nav-links">
    <a>Docs</a>
    <a>Support</a>
    <div class="avatar-box">AR</div>
  </nav>
</header>`, 
        css: `.header-grad { height: 64px; background: linear-gradient(to right, #6366f1, #a855f7, #ec4899); display: flex; align-items: center; justify-content: space-between; padding: 0 24px; color: white; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); font-family: sans-serif; }
.brand { font-weight: 700; letter-spacing: 0.05em; font-style: italic; }
.nav-links { display: flex; align-items: center; gap: 24px; font-size: 14px; }
.avatar-box { width: 40px; height: 40px; background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.3); backdrop-filter: blur(8px); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: 700; }`,
        js: ``
      },
      { 
        name: "HeaderFloating",
        title: "Dynamic Island Nav", 
        jsx: `export const HeaderFloating = () => (
  <div className="h-24 bg-gray-50 flex items-center justify-center relative font-sans">
    <div className="bg-white border border-gray-200 rounded-full px-8 py-3 shadow-2xl flex items-center gap-8 transition-transform hover:scale-[1.02]">
      <div className="font-bold text-gray-900 border-r border-gray-200 pr-6">Vault</div>
      <div className="flex gap-6 text-gray-500 text-sm font-medium">
        <span className="hover:text-black cursor-pointer transition-colors">Projects</span>
        <span className="hover:text-black cursor-pointer transition-colors">Insights</span>
        <span className="hover:text-black cursor-pointer transition-colors">Inbox</span>
      </div>
      <div className="w-8 h-8 bg-black rounded-full ml-2 shadow-lg shadow-gray-300"></div>
    </div>
  </div>
);`, 
        html: `<div class="island-wrapper">
  <div class="dynamic-island">
    <span class="island-logo">Vault</span>
    <nav class="island-nav">
      <a>Projects</a>
      <a>Insights</a>
      <a>Inbox</a>
    </nav>
    <div class="island-user"></div>
  </div>
</div>`, 
        css: `.island-wrapper { height: 96px; background: #f9fafb; display: flex; align-items: center; justify-content: center; font-family: sans-serif; }
.dynamic-island { background: white; border: 1px solid #e5e7eb; border-radius: 9999px; padding: 12px 32px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); display: flex; align-items: center; gap: 32px; transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer; }
.dynamic-island:hover { transform: scale(1.02); }
.island-logo { font-weight: 700; border-right: 1px solid #e5e7eb; padding-right: 24px; color: #111827; }
.island-nav { display: flex; gap: 24px; font-size: 14px; font-weight: 500; color: #6b7280; }
.island-nav a:hover { color: black; }
.island-user { width: 32px; height: 32px; background: black; border-radius: 50%; }`,
        js: ``
      },
    ],
    dashboards: [
      { 
        name: "DashBento",
        title: "Bento Layout", 
        jsx: `export const DashBento = () => (
  <div className="p-6 h-full bg-gray-100 overflow-y-auto font-sans text-left">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[160px]">
      <div className="md:col-span-2 md:row-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-200 flex flex-col justify-between">
        <h3 className="font-bold text-xl text-gray-900">Revenue Growth</h3>
        <div className="h-40 flex items-end justify-around gap-2 pb-2">
          {[40, 70, 50, 90, 60, 80, 55, 75].map((h,i) => (
            <div key={i} className="flex-1 bg-blue-500/20 rounded-t-lg group relative cursor-pointer">
              <div className="absolute inset-0 bg-blue-500 rounded-t-lg scale-y-0 origin-bottom transition-transform group-hover:scale-y-100" style={{height: \`\${h}%\`}}></div>
              <div style={{height: \`\${h}%\`}}></div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-purple-600 rounded-3xl p-6 text-white flex flex-col justify-between shadow-xl shadow-purple-200">
        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">U</div>
        <div>
          <div className="text-3xl font-bold">12.8k</div>
          <div className="text-purple-200 text-xs font-medium uppercase tracking-widest mt-1">Active Clusters</div>
        </div>
      </div>
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between">
        <div className="text-gray-400 text-xs font-black uppercase tracking-widest">Efficiency</div>
        <div className="text-3xl font-bold text-gray-900 mt-2">94%</div>
        <div className="w-full bg-gray-100 h-2 rounded-full mt-4"><div className="bg-green-500 h-full rounded-full w-[94%]"></div></div>
      </div>
      <div className="md:col-span-2 bg-slate-900 text-white rounded-3xl p-8 flex items-center justify-between border border-slate-800">
        <div>
          <h4 className="font-bold text-2xl">Vault Enterprise</h4>
          <p className="text-slate-400 text-sm mt-1">Scale your infrastructure without limits.</p>
        </div>
        <button className="bg-white text-black px-6 py-2.5 rounded-xl font-bold text-sm hover:scale-105 transition-transform">Upgrade Now</button>
      </div>
    </div>
  </div>
);`, 
        html: `<main class="dash-bento">
  <div class="bento-grid">
    <div class="bento-item main">
      <h3 class="bento-title">Revenue Growth</h3>
      <div class="chart-container">
        <div class="bar" style="height: 40%"></div>
        <div class="bar" style="height: 70%"></div>
        <div class="bar" style="height: 50%"></div>
        <div class="bar" style="height: 90%"></div>
        <div class="bar" style="height: 60%"></div>
        <div class="bar" style="height: 80%"></div>
        <div class="bar" style="height: 55%"></div>
        <div class="bar" style="height: 75%"></div>
      </div>
    </div>
    <div class="bento-item stat primary">
      <div class="stat-icon">U</div>
      <div class="stat-value">12.8k</div>
    </div>
    <div class="bento-item stat">
      <div class="stat-label">Efficiency</div>
      <div class="stat-value">94%</div>
    </div>
    <div class="bento-item banner">
      <div class="banner-text">Upgrade to Pro</div>
      <button class="banner-btn">Go Pro</button>
    </div>
  </div>
</main>`, 
        css: `.dash-bento { padding: 24px; background: #f3f4f6; height: 100%; overflow-y: auto; font-family: sans-serif; text-align: left; }
.bento-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; grid-auto-rows: 160px; }
.bento-item { background: white; border-radius: 24px; border: 1px solid #e5e7eb; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
.bento-item.main { grid-column: span 2; grid-row: span 2; display: flex; flex-direction: column; justify-content: space-between; }
.bento-title { font-size: 1.25rem; font-weight: 700; color: #111827; margin-bottom: 24px; }
.chart-container { height: 160px; display: flex; align-items: flex-end; gap: 8px; }
.bar { flex: 1; background: #3b82f633; border-radius: 6px 6px 0 0; transition: 0.3s ease; }
.bar:hover { background: #3b82f6; transform: scaleX(1.1); }
.bento-item.primary { background: #7c3aed; color: white; border: none; }
.bento-item.banner { grid-column: span 2; background: #0f172a; color: white; display: flex; align-items: center; justify-content: space-between; }
.stat-value { font-size: 32px; font-weight: 800; margin-top: 8px; }
.stat-icon { width: 40px; height: 40px; background: rgba(255,255,255,0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; }
.banner-btn { background: white; color: black; padding: 12px 24px; border-radius: 12px; font-weight: 700; border: none; cursor: pointer; }`,
        js: ``
      },
      { 
        name: "DashTable",
        title: "Admin Data Grid", 
        jsx: `export const DashTable = () => (
  <div className="p-8 h-full bg-white font-sans text-left overflow-y-auto">
    <div className="flex justify-between items-end mb-8">
      <div><h2 className="text-3xl font-bold text-gray-900">All Operations</h2><p className="text-gray-500 mt-1">Real-time status of active network nodes.</p></div>
      <div className="flex gap-2">
        <button className="p-2 border border-gray-200 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" strokeWidth="2"/></svg></button>
      </div>
    </div>
    <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-400 font-bold uppercase tracking-widest text-[10px] border-b border-gray-200">
          <tr><th className="px-6 py-4">Node_ID</th><th className="px-6 py-4">Health</th><th className="px-6 py-4">Latency</th><th className="px-6 py-4 text-right">Actions</th></tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {[1,2,3,4,5,6].map((i) => (
            <tr key={i} className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-5 font-bold text-gray-900 italic tracking-tighter">NODE-0x2A{i}</td>
              <td className="px-6 py-5"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase">Online</span></td>
              <td className="px-6 py-5 text-gray-500 font-mono">{10 + i}ms</td>
              <td className="px-6 py-5 text-right"><button className="text-blue-600 font-bold hover:underline">Config</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);`, 
        html: `<div class="dash-table-root">
  <div class="table-header">
    <h2 class="table-title">All Operations</h2>
    <div class="table-actions">...</div>
  </div>
  <div class="table-container">
    <table>
      <thead>
        <tr><th>ID</th><th>Status</th><th>Latency</th><th>Actions</th></tr>
      </thead>
      <tbody>
        <tr><td>0x12A</td><td><span class="badge online">Online</span></td><td>12ms</td><td>Config</td></tr>
        <!-- Repeat rows -->
      </tbody>
    </table>
  </div>
</div>`, 
        css: `.dash-table-root { padding: 32px; background: white; font-family: sans-serif; text-align: left; }
.table-header { margin-bottom: 32px; }
.table-title { font-size: 28px; font-weight: 700; color: #111827; }
.table-container { border: 1px solid #e5e7eb; border-radius: 16px; overflow: hidden; }
table { width: 100%; border-collapse: collapse; font-size: 14px; }
th { background: #f9fafb; color: #9ca3af; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; padding: 16px 24px; border-bottom: 1px solid #e5e7eb; }
td { padding: 20px 24px; border-bottom: 1px solid #f3f4f6; color: #374151; }
tr:hover { background: #f9fafb; }
.badge { padding: 4px 12px; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; }
.badge.online { background: #dcfce7; color: #15803d; }`,
        js: ``
      },
      { 
        name: "DashKanban",
        title: "Sprint Board Flow", 
        jsx: `export const DashKanban = () => (
  <div className="p-8 h-full bg-slate-50 flex gap-8 overflow-x-auto font-sans text-left">
    {['To Do', 'In Progress', 'Deployment'].map((col) => (
      <div key={col} className="min-w-[320px] bg-slate-200/50 rounded-2xl p-5 h-full flex flex-col border border-slate-300/30">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs italic">{col}</h3>
          <span className="bg-white px-2 py-0.5 rounded-lg text-[10px] font-black text-slate-400 border border-slate-200 shadow-sm">4</span>
        </div>
        <div className="space-y-4 flex-1 overflow-y-auto">
          {[1,2,3].map(i => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-500 transition-all cursor-grab group">
              <div className="flex gap-2 mb-4"><div className="w-8 h-1.5 bg-blue-500 rounded-full"></div><div className="w-8 h-1.5 bg-slate-100 rounded-full"></div></div>
              <div className="text-sm font-bold text-slate-900 mb-2 leading-tight">Implement 3D matrix visualization module</div>
              <div className="flex justify-between items-center mt-6">
                <div className="w-8 h-8 bg-slate-100 rounded-xl border border-slate-200"></div>
                <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic">Dev_Sprint_0x4</div>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full py-3 border-2 border-dashed border-slate-300 text-slate-400 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-slate-400 hover:text-slate-500 transition-all italic">+ Add_New_Ticket</button>
      </div>
    ))}
  </div>
);`, 
        html: `<div class="kanban-root">
  <div class="kanban-col">
    <div class="col-header">To Do</div>
    <div class="card-list">
      <div class="kanban-card">
        <div class="card-content">Fix auth bug</div>
      </div>
    </div>
  </div>
  <!-- More columns -->
</div>`, 
        css: `.kanban-root { display: flex; gap: 32px; padding: 32px; background: #f8fafc; height: 100%; overflow-x: auto; font-family: sans-serif; text-align: left; }
.kanban-col { min-width: 300px; background: rgba(226, 232, 240, 0.5); border: 1px solid rgba(203, 213, 225, 0.3); border-radius: 20px; padding: 20px; display: flex; flex-direction: column; }
.col-header { font-weight: 900; text-transform: uppercase; font-size: 12px; margin-bottom: 24px; color: #0f172a; font-style: italic; letter-spacing: 0.1em; }
.kanban-card { background: white; border-radius: 16px; padding: 24px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.05); cursor: grab; transition: 0.2s; }
.kanban-card:hover { border-color: #3b82f6; box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.1); }
.card-content { font-size: 14px; font-weight: 700; color: #1e293b; }`,
        js: ``
      },
      { 
        name: "DashAnalytics",
        title: "Dark Ops Insights", 
        jsx: `export const DashAnalytics = () => (
  <div className="p-8 h-full bg-[#0B1120] text-white overflow-y-auto font-sans text-left">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
      {[
        { l: 'Network Throughput', v: '942 Mbps', c: 'text-cyan-400' },
        { l: 'Error Buffer', v: '0.002%', c: 'text-green-400' },
        { l: 'Active Vectors', v: '2,401', c: 'text-blue-400' }
      ].map((stat, i) => (
        <div key={i} className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-3">{stat.l}</div>
          <div className="text-4xl font-black tracking-tighter italic">{stat.v}</div>
          <div className={\`text-[10px] font-black uppercase tracking-widest mt-4 animate-pulse \${stat.c}\`}>Live_Stream_0x74{i}</div>
        </div>
      ))}
    </div>
    
    <div className="bg-slate-900/50 border border-slate-800 rounded-[2.5rem] p-10 h-80 flex items-end justify-between gap-3 overflow-hidden group hover:border-slate-700 transition-all">
      {[...Array(24)].map((_, i) => (
        <div 
          key={i} 
          className="bg-cyan-500/10 hover:bg-cyan-500 transition-all w-full rounded-t-lg relative group/bar"
          style={{ height: \`\${Math.random() * 70 + 15}%\` }}
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-black px-2 py-1 rounded-lg opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
            {Math.floor(Math.random()*1000)}ms
          </div>
        </div>
      ))}
    </div>
  </div>
);`, 
        html: `<main class="dash-dark">
  <div class="stats-row">
    <div class="stat-card dark">
      <div class="stat-label">Throughput</div>
      <div class="stat-value">942 Mbps</div>
      <div class="stat-tag">Live_0x94</div>
    </div>
    <div class="stat-card dark">
      <div class="stat-label">Error Buffer</div>
      <div class="stat-value">0.002%</div>
      <div class="stat-tag">Stable</div>
    </div>
    <div class="stat-card dark">
      <div class="stat-label">Active Vectors</div>
      <div class="stat-value">2,401</div>
      <div class="stat-tag">Optimum</div>
    </div>
  </div>
  <div class="big-chart-dark">
    <div class="dark-bar" style="height: 40%"></div>
    <div class="dark-bar" style="height: 70%"></div>
    <div class="dark-bar" style="height: 45%"></div>
    <div class="dark-bar" style="height: 90%"></div>
    <div class="dark-bar" style="height: 65%"></div>
    <div class="dark-bar" style="height: 80%"></div>
    <div class="dark-bar" style="height: 50%"></div>
    <div class="dark-bar" style="height: 100%"></div>
    <div class="dark-bar" style="height: 60%"></div>
    <div class="dark-bar" style="height: 85%"></div>
    <div class="dark-bar" style="height: 55%"></div>
    <div class="dark-bar" style="height: 75%"></div>
  </div>
</main>`, 
        css: `.dash-dark { padding: 32px; background: #0b1120; color: white; font-family: sans-serif; text-align: left; }
.stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 40px; }
.stat-card.dark { background: rgba(15, 23, 42, 0.8); border: 1px solid #1e293b; padding: 32px; border-radius: 24px; position: relative; overflow: hidden; }
.stat-label { font-size: 10px; font-weight: 900; color: #64748b; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 12px; }
.stat-value { font-size: 36px; font-weight: 900; font-style: italic; letter-spacing: -0.05em; margin-bottom: 16px; }
.stat-tag { font-size: 10px; font-weight: 900; color: #22d3ee; text-transform: uppercase; letter-spacing: 0.1em; }
.big-chart-dark { background: rgba(15, 23, 42, 0.8); border: 1px solid #1e293b; border-radius: 40px; padding: 40px; height: 320px; display: flex; align-items: flex-end; gap: 8px; overflow: hidden; }
.dark-bar { flex: 1; background: rgba(34, 211, 238, 0.2); border-radius: 8px 8px 0 0; transition: 0.3s; cursor: pointer; }
.dark-bar:hover { background: #22d3ee; box-shadow: 0 0 20px rgba(34, 211, 238, 0.4); }`,
        js: ``
      },
      { 
        name: "DashFeed",
        title: "System Audit Log", 
        jsx: `export const DashFeed = () => (
  <div className="p-10 h-full bg-white max-w-3xl mx-auto font-sans text-left overflow-y-auto">
    <h2 className="text-2xl font-black text-gray-900 mb-10 tracking-tight flex items-center gap-4">
      <span className="w-2 h-8 bg-black rounded-full"></span>
      System Heuristics
    </h2>
    <div className="relative pl-10 border-l border-gray-100 space-y-12">
      {[1,2,3,4].map((i) => (
        <div key={i} className="relative group">
          <div className="absolute -left-[53px] top-0 w-6 h-6 bg-white border-2 border-black rounded-full flex items-center justify-center transition-transform group-hover:scale-125 z-10 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
          </div>
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_50px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all">
            <div className="flex justify-between items-start mb-4">
              <span className="font-black text-xs uppercase tracking-widest text-slate-400 italic">Event_Log_0x{i}F</span>
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{i}h ago</span>
            </div>
            <p className="text-sm text-gray-600 font-medium leading-relaxed">Infrastructure cluster in region <span className="font-bold text-black italic">US-EAST-2</span> successfully transitioned to <span className="text-green-500 font-bold italic">RECOVERY_MODE</span> following automated diagnostic sweep.</p>
            <div className="mt-6 flex gap-3">
               <div className="px-4 py-1.5 bg-slate-50 rounded-xl text-[10px] font-black text-slate-400 uppercase tracking-widest border border-slate-100">DIAGNOSTICS</div>
               <div className="px-4 py-1.5 bg-slate-50 rounded-xl text-[10px] font-black text-slate-400 uppercase tracking-widest border border-slate-100">SYSTEM</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);`, 
        html: `<main class="dash-feed">
  <div class="feed-header">Audit Logs</div>
  <div class="feed-timeline">
    <div class="feed-item">
      <div class="item-dot"></div>
      <div class="item-card">
        <div class="item-meta">Event_01</div>
        <p class="item-text">System scaled to US-EAST-1</p>
      </div>
    </div>
    <!-- ... -->
  </div>
</main>`, 
        css: `.dash-feed { max-width: 768px; margin: 0 auto; padding: 40px; font-family: sans-serif; text-align: left; }
.feed-header { font-size: 24px; font-weight: 900; margin-bottom: 40px; display: flex; align-items: center; gap: 16px; }
.feed-timeline { border-left: 1px solid #f1f5f9; padding-left: 40px; display: flex; flex-direction: column; gap: 48px; }
.feed-item { position: relative; }
.item-dot { position: absolute; left: -53px; top: 0; width: 24px; height: 24px; background: white; border: 2px solid black; border-radius: 50%; z-index: 10; }
.item-card { background: white; border: 1px solid #f1f5f9; padding: 32px; border-radius: 40px; box-shadow: 0 10px 50px -12px rgba(0,0,0,0.05); }
.item-meta { font-size: 10px; font-weight: 900; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; font-style: italic; }
.item-text { font-size: 14px; font-weight: 500; color: #4b5563; line-height: 1.6; }`,
        js: ``
      },
    ]
  };

  // Helper to construct combined code
  const getCombinedCode = () => {
    const s = metadata.sidebars[activeSidebar];
    const h = metadata.headers[activeHeader];
    const d = metadata.dashboards[activeDash];
    
    // Construct JS logic
    const jsSnippet = `
// --- ADMIN DASHBOARD INTERACTIONS ---

// 1. Global Command Shortcut (Ctrl/Cmd + K)
window.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
      searchInput.focus();
      console.log('Search focus triggered');
    }
  }
});

// 2. Sidebar Toggle Controller
const setupSidebar = () => {
  const sidebar = document.querySelector('.sidebar-std');
  const toggleBtn = document.querySelector('.toggle-btn');
  if (sidebar && toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      localStorage.setItem('sidebar-collapsed', sidebar.classList.contains('collapsed'));
    });
  }
};

// 3. Tab Navigation Controller
const setupTabs = () => {
  const tabs = document.querySelectorAll('.tab, .nav-item, .panel-item, .rail-item');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const group = tab.parentElement.querySelectorAll('.tab, .nav-item, .panel-item, .rail-item');
      group.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
};

// 4. Initialize Components
document.addEventListener('DOMContentLoaded', () => {
  setupSidebar();
  setupTabs();
  console.log('Admin Dashboard Initialized');
});

${s.js || ''}
${h.js || ''}
${d.js || ''}
    `.trim();

    return {
      jsx: `import React, { useState, useEffect } from 'react';

// --- ADMIN LAYOUT COMPOSITION ---
// This is a standalone, copy-pasteable production React component.
// Includes Sidebars, Headers, and Content areas with scoped styles.

${s.jsx.replace(/import React.* from 'react';/, "")}

${h.jsx.replace(/import React.* from 'react';/, "")}

${d.jsx.replace(/import React.* from 'react';/, "")}

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Sidebar: ${s.title} */}
      <${s.name} isOpen={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header: ${h.title} */}
        <${h.name} />
        
        {/* Main Content: ${d.title} */}
        <main className="flex-1 overflow-y-auto">
          <${d.name} />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;`,
      html: `<!-- 
  ADMIN PANEL STANDALONE HTML 
  Composition: ${s.title} + ${h.title} + ${d.title}
-->
<div class="admin-wrapper">
  <!-- 1. SIDEBAR -->
  ${s.html}

  <div class="main-body">
    <!-- 2. HEADER -->
    ${h.html}

    <!-- 3. DASHBOARD CONTENT -->
    ${d.html}
  </div>
</div>`,
      css: `/* 
  ADMIN PANEL PRODUCTION STYLES 
  Scoped Vanilla CSS for Standalone Implementation
*/

:root {
  --admin-primary: #2563eb;
  --admin-bg: #f9fafb;
}

.admin-wrapper {
  display: flex;
  height: 100vh;
  overflow: hidden;
  background: var(--admin-bg);
}

.main-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

/* SIDEBAR: ${s.title} */
${s.css}

/* HEADER: ${h.title} */
${h.css}

/* CONTENT: ${d.title} */
${d.css}`,
      js: jsSnippet
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
        <h1 className="text-3xl font-black text-gray-900 mb-6 tracking-tighter">Admin Panel Builder</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-4 italic">1. Sidebar Architecture</label>
            <div className="flex flex-wrap gap-2">
              {Sidebars.map((s, i) => (
                <button key={i} onClick={() => setActiveSidebar(i)} 
                  className={`px-4 py-1.5 text-xs font-bold rounded-xl border-2 transition-all ${activeSidebar === i ? 'bg-black text-white border-black shadow-lg' : 'bg-white text-slate-500 border-slate-100 hover:border-slate-300'}`}>
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-4 italic">2. Navigation Strategy</label>
            <div className="flex flex-wrap gap-2">
              {Headers.map((h, i) => (
                <button key={i} onClick={() => setActiveHeader(i)} 
                  className={`px-4 py-1.5 text-xs font-bold rounded-xl border-2 transition-all ${activeHeader === i ? 'bg-black text-white border-black shadow-lg' : 'bg-white text-slate-500 border-slate-100 hover:border-slate-300'}`}>
                  {h.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-4 italic">3. Content Visualization</label>
            <div className="flex flex-wrap gap-2">
              {Dashboards.map((d, i) => (
                <button key={i} onClick={() => setActiveDash(i)} 
                  className={`px-4 py-1.5 text-xs font-bold rounded-xl border-2 transition-all ${activeDash === i ? 'bg-black text-white border-black shadow-lg' : 'bg-white text-slate-500 border-slate-100 hover:border-slate-300'}`}>
                  {d.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- PREVIEW AREA --- */}
      <div className={`h-[800px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl flex border border-white bg-white/50 backdrop-blur relative group/adm`}>
        <div className="absolute top-4 right-4 z-50 opacity-0 group-hover/adm:opacity-100 transition-opacity">
          <CopyButton 
            jsxCode={getCombinedCode().jsx} 
            htmlCode={getCombinedCode().html} 
            cssCode={getCombinedCode().css} 
            jsCode={getCombinedCode().js}
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