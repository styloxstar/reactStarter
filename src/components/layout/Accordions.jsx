import React, { useState } from 'react';
import CopyButton from '../common/CopyButton';

// --- 1. The Classic (Bordered) ---
export const AccordionClassic = () => {
  const [open, setOpen] = useState(null);
  const toggle = (index) => setOpen(open === index ? null : index);
  
  const items = [
    { title: "Is this free?", content: "Yes, the basic plan is completely free for personal use." },
    { title: "Can I upgrade later?", content: "Absolutely. You can upgrade to Pro at any time from your settings." }
  ];

  return (
    <div className="w-full max-w-md border border-slate-200 rounded-lg overflow-hidden">
      {items.map((item, i) => (
        <div key={i} className="border-b border-slate-200 last:border-0">
          <button 
            onClick={() => toggle(i)} 
            className="w-full flex justify-between items-center p-4 bg-white hover:bg-slate-50 transition-colors"
          >
            <span className="font-semibold text-slate-800">{item.title}</span>
            <svg className={`w-5 h-5 text-slate-500 transform transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
          <div className={`grid transition-all duration-300 ease-in-out ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              <div className="p-4 pt-0 text-slate-600 text-sm">
                {item.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- 2. The Plus/Minus (Minimalist) ---
export const AccordionPlusMinus = () => {
  const [open, setOpen] = useState(0);
  const toggle = (index) => setOpen(open === index ? null : index);

  return (
    <div className="w-full max-w-md space-y-4">
      {['Design System', 'Integration'].map((title, i) => (
        <div key={i} className="border-b border-gray-200 pb-4">
          <button onClick={() => toggle(i)} className="w-full flex justify-between items-center py-2 group">
            <span className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{title}</span>
            <span className={`relative flex items-center justify-center w-6 h-6 duration-300 ${open === i ? 'rotate-180' : ''}`}>
               <div className="absolute w-full h-0.5 bg-gray-800"></div>
               <div className={`absolute h-full w-0.5 bg-gray-800 transition-all duration-300 ${open === i ? 'scale-y-0' : 'scale-y-100'}`}></div>
            </span>
          </button>
          <div className={`grid transition-all duration-300 ease-in-out ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              <p className="pt-2 text-gray-500 leading-relaxed">
                Streamline your workflow with our comprehensive design guidelines and code snippets.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- 3. The Glassmorphism Accordion ---
// *Needs a dark/colorful background context*
export const AccordionGlass = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className="w-full max-w-md space-y-3">
      {[1, 2].map((i) => (
        <div key={i} className="group rounded-xl bg-white/10 border border-white/20 backdrop-blur-md overflow-hidden transition-all hover:bg-white/15">
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-4 text-white font-medium">
            <span>Glass Section {i}</span>
            <span className={`text-white/70 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>+</span>
          </button>
          <div className={`grid transition-all duration-300 ease-in-out ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              <div className="p-4 pt-0 text-blue-100 text-sm">
                This effect uses backdrop-blur and semi-transparent borders to mimic frosted glass.
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- 4. The Neon Glow (Cyberpunk) ---
export const AccordionNeon = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="w-full max-w-md bg-gray-900 p-6 rounded-2xl border border-gray-800">
      {['Matrix', 'Network'].map((title, i) => (
        <div key={i} className="mb-4 last:mb-0">
          <button 
            onClick={() => setOpen(open === i ? null : i)}
            className={`w-full text-left px-4 py-3 rounded-lg border font-mono tracking-widest uppercase transition-all duration-300 ${open === i ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'bg-transparent border-gray-700 text-gray-400 hover:border-gray-500'}`}
          >
            {`> ${title}`}
          </button>
          <div className={`grid transition-all duration-300 ease-in-out ${open === i ? 'grid-rows-[1fr] mt-2' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <div className="p-3 border-l-2 border-cyan-500/30 ml-2 text-cyan-100/70 text-sm font-mono">
                System initializing... Connected to secure server. Data encrypted.
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- 5. The Floating Card (Shadow Pop) ---
export const AccordionFloating = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="w-full max-w-md space-y-4">
      {['Personal Details', 'Security'].map((title, i) => (
        <div 
          key={i} 
          className={`bg-white rounded-xl transition-all duration-300 ${open === i ? 'shadow-lg ring-1 ring-black/5' : 'shadow-sm hover:shadow-md'}`}
        >
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
            <span className="font-bold text-gray-800">{title}</span>
            <div className={`w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center transition-colors ${open === i ? 'bg-indigo-600 text-white' : 'text-indigo-600'}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open === i ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} /></svg>
            </div>
          </button>
          <div className={`grid transition-all duration-300 ease-in-out ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <div className="px-5 pb-5 text-gray-500 text-sm">
                Manage your personal information, address, and contact details here.
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- 6. The Arrow Left (Sidebar Style) ---
export const AccordionArrowLeft = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-slate-100 divide-y divide-slate-100">
      {['Dashboard', 'Analytics'].map((title, i) => (
        <div key={i}>
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center gap-3 p-4 hover:bg-slate-50 transition-colors text-left group">
            <svg className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${open === i ? 'rotate-90 text-blue-600' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
            <span className={`font-medium ${open === i ? 'text-blue-600' : 'text-slate-700'}`}>{title}</span>
          </button>
          <div className={`grid transition-all duration-200 ease-in-out ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden bg-slate-50">
              <div className="p-4 pl-11 text-sm text-slate-600">
                <ul className="space-y-2 list-disc pl-4">
                  <li>Overview</li>
                  <li>Monthly Report</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- 7. The Brutalist (Hard Edge) ---
export const AccordionBrutalist = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="w-full max-w-md space-y-4">
      {['FAQ #1', 'FAQ #2'].map((title, i) => (
        <div key={i} className="border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
          <button 
            onClick={() => setOpen(open === i ? null : i)} 
            className={`w-full flex justify-between items-center p-4 font-black text-lg uppercase ${open === i ? 'bg-yellow-400 border-b-2 border-black' : 'bg-white hover:bg-gray-50'}`}
          >
            {title}
            <span className="text-xl">{open === i ? '-' : '+'}</span>
          </button>
          <div className={`grid transition-all duration-200 ease-in-out ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <div className="p-4 font-bold text-sm">
                NO NONSENSE CONTENT HERE. JUST RAW INFORMATION DELIVERED STRAIGHT TO YOUR EYES.
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- 8. The Gradient Highlight ---
export const AccordionGradient = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="w-full max-w-md space-y-2">
      {['Features', 'Pricing'].map((title, i) => (
        <div key={i} className={`rounded-xl overflow-hidden transition-all duration-300 border ${open === i ? 'border-purple-200 bg-purple-50' : 'border-transparent bg-white'}`}>
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center p-4 text-left relative overflow-hidden group">
            {/* Gradient bar on active */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 transition-all duration-300 ${open === i ? 'opacity-100' : 'opacity-0'}`}></div>
            
            <span className={`flex-1 font-semibold ml-2 transition-colors ${open === i ? 'text-purple-900' : 'text-gray-700'}`}>{title}</span>
            <svg className={`w-5 h-5 text-purple-400 transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
          <div className={`grid transition-all duration-300 ease-in-out ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <div className="p-4 pt-0 pl-7 text-purple-800/70 text-sm">
                Unlock potential with our advanced features designed for scale and performance.
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- 9. The Pill (Separated) ---
export const AccordionPill = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="w-full max-w-md space-y-3">
      {['Question A', 'Question B'].map((title, i) => (
        <div key={i} className="bg-white rounded-2xl p-2 transition-all duration-300 hover:shadow-md">
          <button 
            onClick={() => setOpen(open === i ? null : i)} 
            className={`w-full px-4 py-3 rounded-xl flex justify-between items-center transition-colors ${open === i ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            <span className="font-semibold text-sm">{title}</span>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center bg-white/20`}>
              <svg className={`w-4 h-4 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </button>
          <div className={`grid transition-all duration-300 ease-in-out ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <div className="px-4 py-3 text-sm text-gray-500">
                Pill styled accordions work great for mobile interfaces where touch targets need to be distinct.
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- 10. The Neumorphic (Soft UI) ---
export const AccordionNeumorphic = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className="w-full max-w-md space-y-6">
      {['Settings', 'Profile'].map((title, i) => (
        <div key={i} className="rounded-xl bg-[#e0e5ec] shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)] overflow-hidden">
          <button 
            onClick={() => setOpen(open === i ? null : i)} 
            className="w-full p-5 flex justify-between items-center text-gray-600 font-bold focus:outline-none"
          >
            {title}
            <span className={`transform transition-transform duration-300 text-gray-500 ${open === i ? 'rotate-45' : ''}`}>+</span>
          </button>
          <div className={`grid transition-all duration-300 ease-in-out ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <div className="p-5 pt-0 text-gray-500 text-sm shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
                Adjust your preferences and account details in this section.
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- Main Gallery ---
const Accordions = () => {
  return (
    <div className="container box-shadow bg-slate-50 p-6 md:p-12 font-sans overflow-y-auto">
      <h1 className="text-4xl font-bold text-center text-slate-800 mb-4">Modern Accordions</h1>
      <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">Click to expand sections. Built with Tailwind CSS grid transitions.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start justify-items-center">
        
        {/* 1. Classic */}
        <div className="w-full flex flex-col items-center box-shadow p-6 rounded-xl relative group/acc bg-white">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/acc:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const AccordionClassic = () => {\n  const [open, setOpen] = useState(null);\n  const toggle = (i) => setOpen(open === i ? null : i);\n  const items = [{ title: "Is this free?", content: "Yes, basic plan is free." }];\n\n  return (\n    <div className="w-full max-w-md border border-slate-200 rounded-lg overflow-hidden">\n      {items.map((item, i) => (\n        <div key={i} className="border-b border-slate-200 last:border-0">\n          <button onClick={() => toggle(i)} className="w-full flex justify-between items-center p-4 bg-white hover:bg-slate-50 transition-colors">\n            <span className="font-semibold text-slate-800">{item.title}</span>\n            <svg className={\`w-5 h-5 text-slate-500 transition-transform \${open === i ? 'rotate-180' : ''}\`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" /></svg>\n          </button>\n          <div className={\`grid transition-all \${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}\`}>\n            <div className="overflow-hidden"><div className="p-4 pt-0 text-slate-600 text-sm">{item.content}</div></div>\n          </div>\n        </div>\n      ))}\n    </div>\n  );\n};`}
              htmlCode={`<div class="classic-acc">\n  <div class="acc-item">\n    <button class="acc-trigger">\n      <span>Is this free?</span>\n      <span class="acc-arrow">▼</span>\n    </button>\n    <div class="acc-panel">\n      <div class="acc-content">Yes, basic plan is free.</div>\n    </div>\n  </div>\n</div>`}
              cssCode={`.classic-acc { border: 1px solid #e2e8f0; border-radius: 0.5rem; overflow: hidden; }\n.acc-item { border-bottom: 1px solid #e2e8f0; }\n.acc-trigger { width: 100%; padding: 1rem; display: flex; justify-content: space-between; background: #fff; border: none; cursor: pointer; }\n.acc-panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.3s, opacity 0.3s; opacity: 0; }\n.acc-panel.open { grid-template-rows: 1fr; opacity: 1; }\n.acc-content { overflow: hidden; padding: 0 1rem 1rem; color: #475569; font-size: 0.875rem; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">01. Classic Border</span>
          <AccordionClassic />
        </div>

        {/* 2. Plus Minus */}
        <div className="w-full flex flex-col items-center box-shadow p-6 rounded-xl relative group/acc bg-white">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/acc:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const AccordionPlusMinus = () => {\n  const [open, setOpen] = useState(0);\n  return (\n    <div className="w-full max-w-md space-y-4">\n      {['Design System'].map((title, i) => (\n        <div key={i} className="border-b border-gray-200 pb-4">\n          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between items-center py-2">\n            <span className="text-lg font-medium">{title}</span>\n            <span className={\`relative w-6 h-6 transition-transform \${open === i ? 'rotate-180' : ''}\`}>\n              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black"></div>\n              <div className={\`absolute top-0 left-1/2 h-full w-0.5 bg-black transition-transform \${open === i ? 'scale-y-0' : ''}\`}></div>\n            </span>\n          </button>\n          <div className={\`grid transition-all \${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}\`}>\n            <div className="overflow-hidden p-2 text-gray-500">Content here...</div>\n          </div>\n        </div>\n      ))}\n    </div>\n  );\n};`}
              htmlCode={`<div class="plus-acc">\n  <div class="plus-item">\n    <button class="plus-trigger">\n      <span>Design System</span>\n      <span class="plus-icon"></span>\n    </button>\n    <div class="plus-panel">Streamline your workflow...</div>\n  </div>\n</div>`}
              cssCode={`.plus-item { border-bottom: 1px solid #e5e7eb; padding-bottom: 1rem; }\n.plus-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; background: none; border: none; padding: 0.5rem 0; font-size: 1.125rem; cursor: pointer; }\n.plus-icon { position: relative; width: 1.5rem; height: 1.5rem; }\n.plus-icon::before, .plus-icon::after { content: ''; position: absolute; background: #000; transition: transform 0.3s; }\n.plus-icon::before { width: 100%; height: 2px; top: 50%; left: 0; transform: translateY(-50%); }\n.plus-icon::after { height: 100%; width: 2px; left: 50%; top: 0; transform: translateX(-50%); }\n.plus-trigger.active .plus-icon::after { transform: translateX(-50%) scaleY(0); }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">02. Minimalist Plus</span>
          <AccordionPlusMinus />
        </div>

        {/* 3. Glass */}
        <div className="w-full flex flex-col items-center bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-2xl relative group/acc box-shadow">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/acc:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const AccordionGlass = () => (\n  <div className="w-full max-w-md space-y-3">\n    <div className="group rounded-xl bg-white/10 border border-white/20 backdrop-blur-md overflow-hidden">\n      <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-4 text-white">\n        <span>Glass Section</span>\n        <span className={\`transition-transform \${open === i ? 'rotate-45' : ''}\`}>+</span>\n      </button>\n      <div className={\`grid transition-all \${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}\`}>\n        <div className="overflow-hidden p-4 pt-0 text-blue-100 text-sm">Backdrop blur effect contents.</div>\n      </div>\n    </div>\n  </div>\n);`}
              htmlCode={`<div class="glass-acc">\n  <div class="glass-item">\n    <button class="glass-trigger">\n      <span>Glass Section</span>\n      <span class="glass-plus">+</span>\n    </button>\n    <div class="glass-panel">Glass effect content...</div>\n  </div>\n</div>`}
              cssCode={`.glass-item { background: rgba(255,255,255,0.1); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.2); border-radius: 0.75rem; margin-bottom: 0.75rem; overflow: hidden; }\n.glass-trigger { width: 100%; padding: 1rem; background: none; border: none; color: #fff; display: flex; justify-content: space-between; cursor: pointer; }\n.glass-panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.3s; color: #dbeafe; padding: 0 1rem 0; overflow: hidden; }\n.glass-panel.open { grid-template-rows: 1fr; padding-bottom: 1rem; }`}
            />
          </div>
          <span className="text-xs font-bold text-white/50 uppercase tracking-widest mb-6">03. Glassmorphism</span>
          <AccordionGlass />
        </div>

        {/* 4. Neon */}
        <div className="w-full flex flex-col items-center bg-gray-950 p-8 rounded-2xl relative group/acc box-shadow">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/acc:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const AccordionNeon = () => (\n  <div className="w-full max-w-md bg-gray-900 p-6 rounded-2xl border border-gray-800">\n    <button \n      onClick={() => setOpen(open === i ? null : i)}\n      className={\`w-full text-left px-4 py-3 rounded-lg border font-mono transition-all \${open === i ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'bg-transparent border-gray-700'}\`}\n    >\n      {"> Matrix"}\n    </button>\n    <div className={\`grid transition-all \${open === i ? 'grid-rows-[1fr] mt-2' : 'grid-rows-[0fr]'}\`}>\n      <div className="overflow-hidden p-3 border-l-2 border-cyan-500/30 text-cyan-100/70 font-mono text-sm">System encrypted...</div>\n    </div>\n  </div>\n);`}
              htmlCode={`<div class="neon-acc">\n  <button class="neon-btn"> > Matrix</button>\n  <div class="neon-panel">System encrypted data...</div>\n</div>`}
              cssCode={`.neon-acc { background: #111827; padding: 1.5rem; border-radius: 1rem; }\n.neon-btn { width: 100%; padding: 0.75rem 1rem; background: transparent; border: 1px solid #374151; color: #9ca3af; border-radius: 0.5rem; font-family: monospace; text-align: left; cursor: pointer; transition: 0.3s; }\n.neon-btn.active { border-color: #06b6d4; color: #22d3ee; box-shadow: 0 0 15px rgba(6,182,212,0.3); background: rgba(6,182,212,0.1); }\n.neon-panel { max-height: 0; overflow: hidden; transition: max-height 0.3s; color: #a5f3fc; font-family: monospace; padding-left: 1rem; margin-top: 0.5rem; border-left: 2px solid rgba(6,182,212,0.2); }`}
            />
          </div>
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest mb-6">04. Cyberpunk</span>
          <AccordionNeon />
        </div>

        {/* 5. Floating */}
        <div className="w-full flex flex-col items-center box-shadow p-6 rounded-xl relative group/acc bg-white">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/acc:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const AccordionFloating = () => (\n  <div className="w-full max-w-md space-y-4">\n    <div className={\`bg-white rounded-xl transition-all shadow-sm \${open === i ? 'shadow-lg ring-1 ring-black/5' : ''}\`}>\n      <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5">\n        <span className="font-bold text-gray-800">Security</span>\n        <div className={\`w-8 h-8 rounded-full flex items-center justify-center transition-colors \${open === i ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-600'}\`}>\n          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" /></svg>\n        </div>\n      </button>\n      <div className={\`grid transition-all \${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}\`}>\n        <div className="overflow-hidden px-5 pb-5 text-gray-500 text-sm">Information secure.</div>\n      </div>\n    </div>\n  </div>\n);`}
              htmlCode={`<div class="float-item">\n  <button class="float-trigger">\n    <span>Security</span>\n    <span class="float-arrow">↓</span>\n  </button>\n  <div class="float-panel">Information is encrypted...</div>\n</div>`}
              cssCode={`.float-item { background: #fff; border-radius: 0.75rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 1rem; transition: 0.3s; }\n.float-item.active { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); }\n.float-trigger { width: 100%; padding: 1.25rem; display: flex; justify-content: space-between; background: none; border: none; font-weight: 700; cursor: pointer; }\n.float-panel { max-height: 0; overflow: hidden; transition: max-height 0.3s; padding: 0 1.25rem 0; color: #6b7280; }\n.float-item.active .float-panel { max-height: 200px; padding-bottom: 1.25rem; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">05. Floating Pop</span>
          <AccordionFloating />
        </div>

        {/* 6. Arrow Left */}
        <div className="w-full flex flex-col items-center box-shadow p-6 rounded-xl relative group/acc bg-white">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/acc:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const AccordionArrowLeft = () => (\n  <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-slate-100 divide-y divide-slate-100">\n    {['Dashboard'].map((title, i) => (\n      <div key={i}>\n        <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center gap-3 p-4 hover:bg-slate-50 transition-colors">\n          <svg className={\`w-4 h-4 transition-transform duration-200 \${open === i ? 'rotate-90 text-blue-600' : ''}\`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg>\n          <span className={\`font-medium \${open === i ? 'text-blue-600' : 'text-slate-700'}\`}>{title}</span>\n        </button>\n        <div className={\`grid transition-all \${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}\`}>\n          <div className="overflow-hidden bg-slate-50 p-4 pl-11 text-sm text-slate-600">Sub-menu items...</div>\n        </div>\n      </div>\n    ))}\n  </div>\n);`}
              htmlCode={`<div class="sidebar-acc">\n  <div class="sidebar-item">\n    <button class="sidebar-trigger">\n      <span class="arrow-icon">▶</span>\n      <span>Dashboard</span>\n    </button>\n    <div class="sidebar-panel"><ul><li>Overview</li></ul></div>\n  </div>\n</div>`}
              cssCode={`.sidebar-acc { background: #fff; border: 1px solid #f1f5f9; border-radius: 0.5rem; }\n.sidebar-trigger { width: 100%; display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: none; background: none; cursor: pointer; font-weight: 500; transition: 0.2s; }\n.arrow-icon { font-size: 0.75rem; color: #94a3b8; transition: transform 0.2s; }\n.sidebar-trigger.active { color: #2563eb; background: #f8fafc; }\n.sidebar-trigger.active .arrow-icon { transform: rotate(90deg); color: #2563eb; }\n.sidebar-panel { max-height: 0; overflow: hidden; background: #f8fafc; transition: max-height 0.2s; padding-left: 2.75rem; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">06. Sidebar Style</span>
          <AccordionArrowLeft />
        </div>

        {/* 7. Brutalist */}
        <div className="w-full flex flex-col items-center box-shadow p-6 rounded-xl relative group/acc bg-white">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/acc:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const AccordionBrutalist = () => (\n  <div className="w-full max-w-md space-y-4">\n    <div className="border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">\n      <button \n        onClick={() => setOpen(open === i ? null : i)} \n        className={\`w-full flex justify-between items-center p-4 font-black uppercase \${open === i ? 'bg-yellow-400 border-b-2 border-black' : ''}\`}\n      >\n        {"FAQ #1"}\n        <span className="text-xl">{open === i ? '-' : '+'}</span>\n      </button>\n      <div className={\`grid transition-all \${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}\`}>\n        <div className="overflow-hidden p-4 font-bold text-sm">NO NONSENSE INFORMATION.</div>\n      </div>\n    </div>\n  </div>\n);`}
              htmlCode={`<div class="brutal-acc">\n  <div class="brutal-item">\n    <button class="brutal-trigger active">\n      <span>FAQ #1</span>\n      <span>-</span>\n    </button>\n    <div class="brutal-panel">RAW INFORMATION...</div>\n  </div>\n</div>`}
              cssCode={`.brutal-item { border: 2px solid #000; box-shadow: 4px 4px 0 0 #000; margin-bottom: 1rem; background: #fff; }\n.brutal-trigger { width: 100%; padding: 1rem; display: flex; justify-content: space-between; align-items: center; font-weight: 900; text-transform: uppercase; border: none; cursor: pointer; }\n.brutal-trigger.active { background: #facc15; border-bottom: 2px solid #000; }\n.brutal-panel { max-height: 0; overflow: hidden; transition: max-height 0.2s; padding: 0 1rem; font-weight: 700; }\n.brutal-item.open .brutal-panel { max-height: 200px; padding: 1rem; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">07. Brutalist</span>
          <AccordionBrutalist />
        </div>

        {/* 8. Gradient */}
        <div className="w-full flex flex-col items-center box-shadow p-6 rounded-xl relative group/acc bg-white">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/acc:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const AccordionGradient = () => (\n  <div className="w-full max-w-md space-y-2">\n    <div className={\`rounded-xl overflow-hidden border \${open === i ? 'border-purple-200 bg-purple-50' : 'border-transparent bg-white'}\`}>\n      <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center p-4 relative group">\n        <div className={\`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 transition-opacity \${open === i ? 'opacity-100' : 'opacity-0'}\`}></div>\n        <span className={\`flex-1 font-semibold ml-2 \${open === i ? 'text-purple-900' : ''}\`}>Features</span>\n      </button>\n      <div className={\`grid transition-all \${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}\`}>\n        <div className="overflow-hidden p-4 pt-0 pl-7 text-purple-800/70 text-sm">Unlock potential features.</div>\n      </div>\n    </div>\n  </div>\n);`}
              htmlCode={`<div class="grad-acc-item">\n  <div class="grad-bar"></div>\n  <button class="grad-trigger">Features</button>\n  <div class="grad-panel">Unlock potential...</div>\n</div>`}
              cssCode={`.grad-acc-item { position: relative; background: #fff; border-radius: 0.75rem; margin-bottom: 0.5rem; border: 1px solid transparent; overflow: hidden; }\n.grad-acc-item.active { background: #faf5ff; border-color: #e9d5ff; }\n.grad-bar { position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: linear-gradient(to bottom, #a855f7, #ec4899); opacity: 0; transition: 0.3s; }\n.grad-acc-item.active .grad-bar { opacity: 1; }\n.grad-trigger { width: 100%; padding: 1rem; border: none; background: none; text-align: left; font-weight: 600; cursor: pointer; padding-left: 1.5rem; }\n.grad-panel { max-height: 0; overflow: hidden; transition: 0.3s; padding: 0 1.5rem 0; color: rgba(107, 33, 168, 0.7); font-size: 0.875rem; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">08. Gradient Active</span>
          <AccordionGradient />
        </div>

        {/* 9. Pill */}
        <div className="w-full flex flex-col items-center bg-gray-100 p-8 rounded-2xl relative group/acc box-shadow">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/acc:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const AccordionPill = () => (\n  <div className="w-full max-w-md space-y-3">\n    <div className="bg-white rounded-2xl p-2 transition-all hover:shadow-md">\n      <button onClick={() => setOpen(open === i ? null : i)} className={\`w-full px-4 py-3 rounded-xl flex justify-between items-center transition-colors \${open === i ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}\`}>\n        <span className="font-semibold text-sm">Question A</span>\n        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white/20">\n          <svg className={\`w-4 h-4 transition-transform \${open === i ? 'rotate-180' : ''}\`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>\n        </div>\n      </button>\n      <div className={\`grid transition-all \${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}\`}>\n        <div className="overflow-hidden px-4 py-3 text-sm text-gray-500">Pill styled description.</div>\n      </div>\n    </div>\n  </div>\n);`}
              htmlCode={`<div class="pill-acc-item">\n  <button class="pill-trigger active">\n    <span>Question A</span>\n    <span class="pill-arrow">▲</span>\n  </button>\n  <div class="pill-panel">Touch targets need to be distinct...</div>\n</div>`}
              cssCode={`.pill-acc-item { background: #fff; padding: 0.5rem; border-radius: 1.25rem; margin-bottom: 0.75rem; transition: 0.3s; }\n.pill-trigger { width: 100%; border-radius: 1rem; padding: 0.75rem 1rem; border: none; background: #f3f4f6; color: #374151; font-weight: 600; display: flex; justify-content: space-between; align-items: center; cursor: pointer; }\n.pill-trigger.active { background: #2563eb; color: #fff; }\n.pill-panel { max-height: 0; overflow: hidden; transition: 0.3s; padding: 0 1rem; color: #6b7280; font-size: 0.875rem; }\n.pill-acc-item.open .pill-panel { max-height: 150px; padding-top: 1rem; padding-bottom: 0.5rem; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">09. Separated Pills</span>
          <AccordionPill />
        </div>

        {/* 10. Neumorphic */}
        <div className="w-full flex flex-col items-center bg-[#e0e5ec] p-8 rounded-2xl relative group/acc box-shadow">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/acc:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const AccordionNeumorphic = () => (\n  <div className="w-full max-w-md space-y-6 bg-[#e0e5ec] p-4">\n    <div className="rounded-xl bg-[#e0e5ec] shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)] overflow-hidden">\n      <button onClick={() => setOpen(open === i ? null : i)} className="w-full p-5 flex justify-between items-center text-gray-600 font-bold">\n        {"Settings"}\n        <span className={\`transition-transform \${open === i ? 'rotate-45' : ''}\`}>+</span>\n      </button>\n      <div className={\`grid transition-all \${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}\`}>\n        <div className="overflow-hidden p-5 pt-0 text-gray-500 shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">Content...</div>\n      </div>\n    </div>\n  </div>\n);`}
              htmlCode={`<div class="neu-acc-item">\n  <button class="neu-trigger">Settings <span class="plus">+</span></button>\n  <div class="neu-panel">Adjust your preferences...</div>\n</div>`}
              cssCode={`.neu-acc-item { background: #e0e5ec; border-radius: 1rem; box-shadow: 9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff; overflow: hidden; margin-bottom: 1.5rem; }\n.neu-trigger { width: 100%; padding: 1.25rem; display: flex; justify-content: space-between; border: none; background: none; font-weight: 700; color: #4b5563; cursor: pointer; }\n.neu-panel { max-height: 0; overflow: hidden; transition: 0.3s; padding: 0 1.25rem; color: #6b7280; font-size: 0.875rem; box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff; }\n.neu-acc-item.open .neu-panel { max-height: 200px; padding-top: 1.25rem; padding-bottom: 1.25rem; }`}
            />
          </div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">10. Neumorphic</span>
          <AccordionNeumorphic />
        </div>

      </div>
    </div>
  );
};

export default Accordions;