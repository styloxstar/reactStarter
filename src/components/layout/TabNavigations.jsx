import React, { useState } from 'react';

// --- Shared Content Component for Demo ---
const TabContent = ({ title, children }) => (
  <div className="animate-in fade-in zoom-in duration-300">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-500">{children}</p>
  </div>
);

// --- 1. The Classic Underline ---
export const TabClassic = () => {
  const [active, setActive] = useState(0);
  const items = ['Overview', 'Integrations', 'Billing'];
  
  return (
    <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex border-b border-gray-200 mb-6">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`pb-3 px-4 text-sm font-medium border-b-2 transition-colors ${
              active === idx 
              ? 'border-blue-600 text-blue-600' 
              : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div>
        {active === 0 && <TabContent title="Overview">General account statistics and usage.</TabContent>}
        {active === 1 && <TabContent title="Integrations">Manage your API keys and webhooks.</TabContent>}
        {active === 2 && <TabContent title="Billing">Update your credit card details.</TabContent>}
      </div>
    </div>
  );
};

// --- 2. The iOS Segmented Control ---
export const TabSegmented = () => {
  const [active, setActive] = useState('Daily');
  const items = ['Daily', 'Weekly', 'Monthly'];

  return (
    <div className="w-full max-w-md">
      <div className="bg-gray-100 p-1 rounded-lg flex mb-4">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`flex-1 py-1.5 rounded-md text-sm font-semibold transition-all shadow-sm ${
              active === item ? 'bg-white text-gray-900 shadow' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="bg-white p-4 border rounded-lg h-32 flex items-center justify-center bg-gray-50/50">
        <TabContent title={`${active} View`}>Showing data for the {active.toLowerCase()} period.</TabContent>
      </div>
    </div>
  );
};

// --- 3. The Vertical Sidebar ---
export const TabVertical = () => {
  const [active, setActive] = useState(0);
  const tabs = [
    { icon: '👤', label: 'Profile' },
    { icon: '🔒', label: 'Security' },
    { icon: '🔔', label: 'Notify' },
  ];

  return (
    <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl flex overflow-hidden">
      <div className="w-1/3 bg-gray-50 border-r border-gray-100 p-2 space-y-1">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
              active === idx ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500 hover:bg-gray-200/50'
            }`}
          >
            <span>{tab.icon}</span> {tab.label}
          </button>
        ))}
      </div>
      <div className="w-2/3 p-6">
        {active === 0 && <TabContent title="Profile">Edit your bio and avatar.</TabContent>}
        {active === 1 && <TabContent title="Security">Change your password here.</TabContent>}
        {active === 2 && <TabContent title="Notifications">Manage email alerts.</TabContent>}
      </div>
    </div>
  );
};

// --- 4. The Pill Toggle (Capsule) ---
export const TabPill = () => {
  const [active, setActive] = useState('Design');
  const items = ['Design', 'Code', 'Preview'];

  return (
    <div className="w-full max-w-md">
      <div className="flex gap-2 mb-6">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              active === item 
              ? 'bg-indigo-600 text-white shadow-md' 
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="p-4 border border-dashed border-gray-300 rounded-xl bg-gray-50">
         <TabContent title={active}>Active mode: {active}</TabContent>
      </div>
    </div>
  );
};

// --- 5. The Folder Tab (Browser Style) ---
export const TabFolder = () => {
  const [active, setActive] = useState(0);
  const items = ['index.js', 'style.css', 'README.md'];

  return (
    <div className="w-full max-w-md">
      <div className="flex items-end pl-2 gap-1">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`px-4 py-2 text-xs font-mono rounded-t-lg border-t border-x transition-all relative top-[1px] ${
              active === idx 
              ? 'bg-white border-gray-300 text-blue-600 z-10' 
              : 'bg-gray-100 border-gray-200 text-gray-500 hover:bg-gray-50'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="bg-white border border-gray-300 rounded-b-lg rounded-tr-lg p-6 min-h-[100px]">
        {active === 0 && <TabContent title="JavaScript">console.log('Hello World');</TabContent>}
        {active === 1 && <TabContent title="CSS">body {`{ background: #fff; }`}</TabContent>}
        {active === 2 && <TabContent title="Markdown"># Read Me File</TabContent>}
      </div>
    </div>
  );
};

// --- 6. The Neon/Cyberpunk (Dark) ---
export const TabNeon = () => {
  const [active, setActive] = useState('Stats');
  
  return (
    <div className="w-full max-w-md bg-gray-900 p-6 rounded-xl border border-gray-800">
      <div className="flex justify-around border-b border-gray-800 mb-6 pb-2">
        {['Stats', 'Loadout', 'Map'].map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`text-sm uppercase tracking-widest font-bold pb-2 transition-all ${
              active === item 
              ? 'text-cyan-400 border-b-2 border-cyan-400 shadow-[0_4px_10px_-4px_rgba(34,211,238,0.5)]' 
              : 'text-gray-600 hover:text-gray-400'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="text-gray-300">
         <TabContent title={`// ${active.toUpperCase()}`}>System status: OPTIMAL</TabContent>
      </div>
    </div>
  );
};

// --- 7. The Glassmorphism ---
export const TabGlass = () => {
  const [active, setActive] = useState(0);
  
  return (
    <div className="w-full max-w-md p-6 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-1 rounded-xl flex mb-4">
        {['Music', 'Podcasts'].map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
              active === idx 
              ? 'bg-white/20 text-white shadow-lg' 
              : 'text-white/60 hover:text-white'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="text-white p-4 bg-white/5 rounded-xl border border-white/10">
         {active === 0 && <TabContent title="Now Playing">Glass Animals - Heat Waves</TabContent>}
         {active === 1 && <TabContent title="Up Next">Tech Talk Daily</TabContent>}
      </div>
    </div>
  );
};

// --- 8. The Minimalist Dot ---
export const TabDot = () => {
  const [active, setActive] = useState(0);
  const items = ['Product', 'Company', 'Support'];

  return (
    <div className="w-full max-w-md bg-white p-6">
      <div className="flex gap-8 mb-8 justify-center">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className="flex flex-col items-center gap-1 group"
          >
            <span className={`text-sm font-semibold transition-colors ${active === idx ? 'text-black' : 'text-gray-400 group-hover:text-gray-600'}`}>
              {item}
            </span>
            <span className={`w-1 h-1 rounded-full bg-black transition-all duration-300 ${active === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></span>
          </button>
        ))}
      </div>
      <div className="text-center">
        <TabContent title={items[active]}>Content for {items[active]}.</TabContent>
      </div>
    </div>
  );
};

// --- 9. The Brutalist (Retro) ---
export const TabBrutalist = () => {
  const [active, setActive] = useState('Info');
  
  return (
    <div className="w-full max-w-md border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white">
      <div className="flex border-b-2 border-black">
        {['Info', 'Specs', 'Reviews'].map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`flex-1 py-3 text-sm font-black uppercase border-r-2 border-black last:border-r-0 transition-colors ${
              active === item ? 'bg-yellow-400' : 'bg-white hover:bg-gray-100'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="p-6">
        <TabContent title={active.toUpperCase()}>Raw data block for {active}.</TabContent>
      </div>
    </div>
  );
};

// --- 10. The Floating Card (Material 3) ---
export const TabFloating = () => {
  const [active, setActive] = useState(0);
  const items = ['Flights', 'Hotels', 'Car Rental'];

  return (
    <div className="w-full max-w-md">
      <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="flex p-2 gap-2 bg-blue-50/50">
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                active === idx 
                ? 'bg-white text-blue-600 shadow-sm ring-1 ring-black/5' 
                : 'text-gray-500 hover:bg-white/60'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="p-6">
           {active === 0 && <TabContent title="Book Flights">Find the best deals.</TabContent>}
           {active === 1 && <TabContent title="Find Hotels">Cozy stays nearby.</TabContent>}
           {active === 2 && <TabContent title="Rent Cars">Premium fleet available.</TabContent>}
        </div>
      </div>
    </div>
  );
};

// --- Main Gallery Layout ---
const TabsNavigations = () => {
  return (
    <div className="container box-shadow bg-slate-50 p-8 font-sans pb-32 overflow-y-auto">
       <h1 className="text-4xl font-bold text-center text-slate-800 mb-4">10 Unique Tab Styles</h1>
       <p className="text-center text-slate-500 mb-16">All components include state & content transition logic.</p>
       
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase">01. Classic</span>
            <TabClassic />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase">02. iOS Segmented</span>
            <TabSegmented />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase">03. Vertical Sidebar</span>
            <TabVertical />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase">04. Pill Toggle</span>
            <TabPill />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase">05. Folder Browser</span>
            <TabFolder />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase">06. Cyberpunk</span>
            <TabNeon />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase">07. Glassmorphism</span>
            <TabGlass />
          </div>

          <div className="flex flex-col gap-2">
             <span className="text-xs font-bold text-slate-400 uppercase">08. Minimal Dot</span>
             <TabDot />
          </div>

          <div className="flex flex-col gap-2">
             <span className="text-xs font-bold text-slate-400 uppercase">09. Brutalist</span>
             <TabBrutalist />
          </div>

          <div className="flex flex-col gap-2">
             <span className="text-xs font-bold text-slate-400 uppercase">10. Floating Material</span>
             <TabFloating />
          </div>

       </div>
    </div>
  );
};

export default TabsNavigations;