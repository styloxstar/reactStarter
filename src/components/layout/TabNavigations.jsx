import React, { useState } from 'react';
import CopyButton from '../common/CopyButton';

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
          
           <div className="flex flex-col gap-2 box-shadow p-4 rounded-lg relative group/tab">
             <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/tab:opacity-100 transition-opacity"><CopyButton jsxCode={`const TabClassic = () => {\n  const [active, setActive] = useState(0);\n  const items = ['Overview','Integrations','Billing'];\n  return (\n    <div className="w-full max-w-md bg-white border rounded-lg p-6">\n      <div className="flex border-b mb-6">{items.map((item,i) => <button key={i} onClick={() => setActive(i)} className={\`pb-3 px-4 text-sm font-medium border-b-2 \${active===i?'border-blue-600 text-blue-600':'border-transparent text-gray-500'}\`}>{item}</button>)}</div>\n      <div>{items[active]} content here</div>\n    </div>\n  );\n};`} htmlCode={`<div class="tabs"><div class="tab-bar"><button class="active">Overview</button><button>Integrations</button><button>Billing</button></div><div class="tab-panel">Content here</div></div>`} cssCode={`.tabs { max-width: 28rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 1.5rem; }
.tab-bar { display: flex; border-bottom: 1px solid #e5e7eb; margin-bottom: 1.5rem; }
.tab-bar button { padding: 0 1rem 0.75rem; font-size: 0.875rem; font-weight: 500; border-bottom: 2px solid transparent; color: #6b7280; background: none; border-top: none; border-left: none; border-right: none; cursor: pointer; }
.tab-bar button.active { border-bottom-color: #2563eb; color: #2563eb; }
.tab-panel { font-size: 0.875rem; color: #6b7280; }`} /></div>
             <span className="text-xs font-bold text-slate-400 uppercase">01. Classic</span>
             <TabClassic />
           </div>

           <div className="flex flex-col gap-2 box-shadow p-4 rounded-lg relative group/tab">
             <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/tab:opacity-100 transition-opacity"><CopyButton jsxCode={`const TabSegmented = () => {\n  const [active, setActive] = useState('Daily');\n  const items = ['Daily','Weekly','Monthly'];\n  return (\n    <div className="w-full max-w-md">\n      <div className="bg-gray-100 p-1 rounded-lg flex mb-4">{items.map(item => <button key={item} onClick={() => setActive(item)} className={\`flex-1 py-1.5 rounded-md text-sm font-semibold \${active===item?'bg-white text-gray-900 shadow':'text-gray-500'}\`}>{item}</button>)}</div>\n    </div>\n  );\n};`} htmlCode={`<div class="seg-tabs"><div class="seg-bar"><button class="active">Daily</button><button>Weekly</button><button>Monthly</button></div><div class="seg-panel">Content</div></div>`} cssCode={`.seg-bar { display: flex; background: #f3f4f6; padding: 0.25rem; border-radius: 0.5rem; margin-bottom: 1rem; }
.seg-bar button { flex: 1; padding: 0.375rem; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 600; background: transparent; border: none; color: #6b7280; cursor: pointer; }
.seg-bar button.active { background: #fff; color: #111827; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }`} /></div>
             <span className="text-xs font-bold text-slate-400 uppercase">02. iOS Segmented</span>
             <TabSegmented />
           </div>

           <div className="flex flex-col gap-2 box-shadow p-4 rounded-lg relative group/tab">
             <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/tab:opacity-100 transition-opacity"><CopyButton jsxCode={`const TabVertical = () => {\n  const [active, setActive] = useState(0);\n  const tabs = [{icon:'👤',label:'Profile'},{icon:'🔒',label:'Security'},{icon:'🔔',label:'Notify'}];\n  return (\n    <div className="w-full max-w-md bg-white border rounded-xl flex overflow-hidden">\n      <div className="w-1/3 bg-gray-50 border-r p-2 space-y-1">{tabs.map((t,i) => <button key={i} onClick={() => setActive(i)} className={\`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg \${active===i?'bg-white text-indigo-600 shadow-sm':'text-gray-500'}\`}>{t.icon} {t.label}</button>)}</div>\n      <div className="w-2/3 p-6">Content</div>\n    </div>\n  );\n};`} htmlCode={`<div class="v-tabs"><aside><button class="active">👤 Profile</button><button>🔒 Security</button></aside><main>Content</main></div>`} cssCode={`.v-tabs { display: flex; max-width: 28rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 0.75rem; overflow: hidden; }
.v-tabs aside { width: 33%; background: #f9fafb; border-right: 1px solid #f3f4f6; padding: 0.5rem; }
.v-tabs aside button { width: 100%; display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0.75rem; font-size: 0.875rem; font-weight: 500; border-radius: 0.5rem; background: transparent; border: none; color: #6b7280; cursor: pointer; }
.v-tabs aside button.active { background: #fff; color: #4f46e5; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
.v-tabs main { width: 67%; padding: 1.5rem; }`} /></div>
             <span className="text-xs font-bold text-slate-400 uppercase">03. Vertical Sidebar</span>
             <TabVertical />
           </div>

           <div className="flex flex-col gap-2 box-shadow p-4 rounded-lg relative group/tab">
             <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/tab:opacity-100 transition-opacity"><CopyButton jsxCode={`const TabPill = () => {\n  const [active, setActive] = useState('Design');\n  const items = ['Design','Code','Preview'];\n  return (\n    <div className="w-full max-w-md">\n      <div className="flex gap-2 mb-6">{items.map(item => <button key={item} onClick={() => setActive(item)} className={\`px-5 py-2 rounded-full text-sm font-medium \${active===item?'bg-indigo-600 text-white shadow-md':'bg-white text-gray-600 border border-gray-200'}\`}>{item}</button>)}</div>\n    </div>\n  );\n};`} htmlCode={`<div class="pill-tabs"><button class="active">Design</button><button>Code</button><button>Preview</button></div>`} cssCode={`.pill-tabs { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; }
.pill-tabs button { padding: 0.5rem 1.25rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; background: #fff; color: #4b5563; border: 1px solid #e5e7eb; cursor: pointer; }
.pill-tabs button.active { background: #4f46e5; color: #fff; border-color: #4f46e5; box-shadow: 0 4px 6px rgba(79,70,229,0.3); }`} /></div>
             <span className="text-xs font-bold text-slate-400 uppercase">04. Pill Toggle</span>
             <TabPill />
           </div>

           <div className="flex flex-col gap-2 box-shadow p-4 rounded-lg relative group/tab">
             <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/tab:opacity-100 transition-opacity"><CopyButton jsxCode={`const TabFolder = () => {\n  const [active, setActive] = useState(0);\n  const items = ['index.js','style.css','README.md'];\n  return (\n    <div className="w-full max-w-md">\n      <div className="flex items-end pl-2 gap-1">{items.map((item,i) => <button key={i} onClick={() => setActive(i)} className={\`px-4 py-2 text-xs font-mono rounded-t-lg border-t border-x \${active===i?'bg-white border-gray-300 text-blue-600':'bg-gray-100 border-gray-200 text-gray-500'}\`}>{item}</button>)}</div>\n      <div className="bg-white border border-gray-300 rounded-b-lg p-6">Content</div>\n    </div>\n  );\n};`} htmlCode={`<div class="folder-tabs"><div class="tab-row"><button class="active">index.js</button><button>style.css</button></div><div class="panel">Content</div></div>`} cssCode={`.tab-row { display: flex; align-items: flex-end; padding-left: 0.5rem; gap: 0.25rem; }
.tab-row button { padding: 0.5rem 1rem; font-size: 0.75rem; font-family: monospace; border-radius: 0.5rem 0.5rem 0 0; border: 1px solid #e5e7eb; border-bottom: none; background: #f3f4f6; color: #6b7280; cursor: pointer; position: relative; top: 1px; }
.tab-row button.active { background: #fff; border-color: #d1d5db; color: #2563eb; z-index: 1; }
.panel { background: #fff; border: 1px solid #d1d5db; border-radius: 0 0.5rem 0.5rem 0.5rem; padding: 1.5rem; min-height: 100px; }`} /></div>
             <span className="text-xs font-bold text-slate-400 uppercase">05. Folder Browser</span>
             <TabFolder />
           </div>

           <div className="flex flex-col gap-2 box-shadow p-4 rounded-lg relative group/tab">
             <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/tab:opacity-100 transition-opacity"><CopyButton jsxCode={`const TabNeon = () => {\n  const [active, setActive] = useState('Stats');\n  return (\n    <div className="w-full max-w-md bg-gray-900 p-6 rounded-xl border border-gray-800">\n      <div className="flex justify-around border-b border-gray-800 mb-6 pb-2">{['Stats','Loadout','Map'].map(item => <button key={item} onClick={() => setActive(item)} className={\`text-sm uppercase tracking-widest font-bold pb-2 \${active===item?'text-cyan-400 border-b-2 border-cyan-400':'text-gray-600'}\`}>{item}</button>)}</div>\n    </div>\n  );\n};`} htmlCode={`<div class="neon-tabs"><div class="neon-bar"><button class="active">STATS</button><button>LOADOUT</button><button>MAP</button></div><div class="neon-panel">Content</div></div>`} cssCode={`.neon-tabs { max-width: 28rem; background: #111827; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #1f2937; }
.neon-bar { display: flex; justify-content: space-around; border-bottom: 1px solid #1f2937; margin-bottom: 1.5rem; padding-bottom: 0.5rem; }
.neon-bar button { font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700; padding-bottom: 0.5rem; color: #4b5563; background: none; border: none; border-bottom: 2px solid transparent; cursor: pointer; }
.neon-bar button.active { color: #22d3ee; border-bottom-color: #22d3ee; text-shadow: 0 0 10px rgba(34,211,238,0.5); }
.neon-panel { color: #d1d5db; }`} /></div>
             <span className="text-xs font-bold text-slate-400 uppercase">06. Cyberpunk</span>
             <TabNeon />
           </div>

           <div className="flex flex-col gap-2 box-shadow p-4 rounded-lg relative group/tab">
             <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/tab:opacity-100 transition-opacity"><CopyButton jsxCode={`const TabGlass = () => {\n  const [active, setActive] = useState(0);\n  return (\n    <div className="w-full max-w-md p-6 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600">\n      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-1 rounded-xl flex mb-4">{['Music','Podcasts'].map((item,i) => <button key={i} onClick={() => setActive(i)} className={\`flex-1 py-2 rounded-lg text-sm font-medium \${active===i?'bg-white/20 text-white shadow-lg':'text-white/60'}\`}>{item}</button>)}</div>\n    </div>\n  );\n};`} htmlCode={`<div class="glass-tabs-wrap"><div class="glass-bar"><button class="active">Music</button><button>Podcasts</button></div><div class="glass-panel">Content</div></div>`} cssCode={`.glass-tabs-wrap { max-width: 28rem; padding: 1.5rem; border-radius: 1rem; background: linear-gradient(135deg, #8b5cf6, #c026d3); }
.glass-bar { display: flex; background: rgba(255,255,255,0.1); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.2); padding: 0.25rem; border-radius: 0.75rem; margin-bottom: 1rem; }
.glass-bar button { flex: 1; padding: 0.5rem; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 500; background: transparent; border: none; color: rgba(255,255,255,0.6); cursor: pointer; }
.glass-bar button.active { background: rgba(255,255,255,0.2); color: #fff; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
.glass-panel { color: #fff; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 0.75rem; border: 1px solid rgba(255,255,255,0.1); }`} /></div>
             <span className="text-xs font-bold text-slate-400 uppercase">07. Glassmorphism</span>
             <TabGlass />
           </div>

           <div className="flex flex-col gap-2 box-shadow p-4 rounded-lg relative group/tab">
             <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/tab:opacity-100 transition-opacity"><CopyButton jsxCode={`const TabDot = () => {\n  const [active, setActive] = useState(0);\n  const items = ['Product','Company','Support'];\n  return (\n    <div className="w-full max-w-md bg-white p-6">\n      <div className="flex gap-8 mb-8 justify-center">{items.map((item,i) => <button key={i} onClick={() => setActive(i)} className="flex flex-col items-center gap-1"><span className={\`text-sm font-semibold \${active===i?'text-black':'text-gray-400'}\`}>{item}</span><span className={\`w-1 h-1 rounded-full bg-black \${active===i?'opacity-100':'opacity-0'}\`} /></button>)}</div>\n    </div>\n  );\n};`} htmlCode={`<div class="dot-tabs"><button class="active">Product<span class="dot"></span></button><button>Company<span class="dot"></span></button><button>Support<span class="dot"></span></button></div>`} cssCode={`.dot-tabs { display: flex; gap: 2rem; justify-content: center; margin-bottom: 2rem; }
.dot-tabs button { display: flex; flex-direction: column; align-items: center; gap: 0.25rem; background: none; border: none; cursor: pointer; font-size: 0.875rem; font-weight: 600; color: #9ca3af; }
.dot-tabs button.active { color: #000; }
.dot { width: 0.25rem; height: 0.25rem; border-radius: 50%; background: #000; opacity: 0; transition: opacity 0.3s, transform 0.3s; transform: scale(0); }
.dot-tabs button.active .dot { opacity: 1; transform: scale(1); }`} /></div>
              <span className="text-xs font-bold text-slate-400 uppercase">08. Minimal Dot</span>
              <TabDot />
           </div>

           <div className="flex flex-col gap-2 box-shadow p-4 rounded-lg relative group/tab">
             <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/tab:opacity-100 transition-opacity"><CopyButton jsxCode={`const TabBrutalist = () => {\n  const [active, setActive] = useState('Info');\n  return (\n    <div className="w-full max-w-md border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white">\n      <div className="flex border-b-2 border-black">{['Info','Specs','Reviews'].map(item => <button key={item} onClick={() => setActive(item)} className={\`flex-1 py-3 text-sm font-black uppercase border-r-2 border-black last:border-r-0 \${active===item?'bg-yellow-400':'bg-white'}\`}>{item}</button>)}</div>\n      <div className="p-6">Content</div>\n    </div>\n  );\n};`} htmlCode={`<div class="brutal-tabs"><div class="brutal-bar"><button class="active">INFO</button><button>SPECS</button><button>REVIEWS</button></div><div class="brutal-panel">Content</div></div>`} cssCode={`.brutal-tabs { max-width: 28rem; border: 2px solid #000; box-shadow: 6px 6px 0 #000; background: #fff; }
.brutal-bar { display: flex; border-bottom: 2px solid #000; }
.brutal-bar button { flex: 1; padding: 0.75rem; font-size: 0.875rem; font-weight: 900; text-transform: uppercase; background: #fff; border: none; border-right: 2px solid #000; cursor: pointer; }
.brutal-bar button:last-child { border-right: none; }
.brutal-bar button.active { background: #facc15; }
.brutal-panel { padding: 1.5rem; }`} /></div>
              <span className="text-xs font-bold text-slate-400 uppercase">09. Brutalist</span>
              <TabBrutalist />
           </div>

           <div className="flex flex-col gap-2 box-shadow p-4 rounded-lg relative group/tab">
             <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/tab:opacity-100 transition-opacity"><CopyButton jsxCode={`const TabFloating = () => {\n  const [active, setActive] = useState(0);\n  const items = ['Flights','Hotels','Car Rental'];\n  return (\n    <div className="w-full max-w-md">\n      <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">\n        <div className="flex p-2 gap-2 bg-blue-50/50">{items.map((item,i) => <button key={i} onClick={() => setActive(i)} className={\`flex-1 py-2.5 rounded-xl text-sm font-medium \${active===i?'bg-white text-blue-600 shadow-sm ring-1 ring-black/5':'text-gray-500'}\`}>{item}</button>)}</div>\n        <div className="p-6">Content</div>\n      </div>\n    </div>\n  );\n};`} htmlCode={`<div class="float-tabs"><div class="float-bar"><button class="active">Flights</button><button>Hotels</button><button>Car Rental</button></div><div class="float-panel">Content</div></div>`} cssCode={`.float-tabs { max-width: 28rem; background: #fff; border-radius: 1rem; box-shadow: 0 10px 15px rgba(0,0,0,0.1); border: 1px solid #f3f4f6; overflow: hidden; }
.float-bar { display: flex; padding: 0.5rem; gap: 0.5rem; background: rgba(239,246,255,0.5); }
.float-bar button { flex: 1; padding: 0.625rem; border-radius: 0.75rem; font-size: 0.875rem; font-weight: 500; background: transparent; border: none; color: #6b7280; cursor: pointer; }
.float-bar button.active { background: #fff; color: #2563eb; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
.float-panel { padding: 1.5rem; }`} /></div>
              <span className="text-xs font-bold text-slate-400 uppercase">10. Floating Material</span>
              <TabFloating />
           </div>

       </div>
    </div>
  );
};

export default TabsNavigations;