import React, { useState } from 'react';

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
        <div className="w-full flex flex-col items-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">01. Classic Border</span>
          <AccordionClassic />
        </div>

        {/* 2. Plus Minus */}
        <div className="w-full flex flex-col items-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">02. Minimalist Plus</span>
          <AccordionPlusMinus />
        </div>

        {/* 3. Glass */}
        <div className="w-full flex flex-col items-center bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-2xl shadow-inner">
          <span className="text-xs font-bold text-white/50 uppercase tracking-widest mb-6">03. Glassmorphism</span>
          <AccordionGlass />
        </div>

        {/* 4. Neon */}
        <div className="w-full flex flex-col items-center bg-gray-950 p-8 rounded-2xl">
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest mb-6">04. Cyberpunk</span>
          <AccordionNeon />
        </div>

        {/* 5. Floating */}
        <div className="w-full flex flex-col items-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">05. Floating Pop</span>
          <AccordionFloating />
        </div>

        {/* 6. Arrow Left */}
        <div className="w-full flex flex-col items-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">06. Sidebar Style</span>
          <AccordionArrowLeft />
        </div>

        {/* 7. Brutalist */}
        <div className="w-full flex flex-col items-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">07. Brutalist</span>
          <AccordionBrutalist />
        </div>

        {/* 8. Gradient */}
        <div className="w-full flex flex-col items-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">08. Gradient Active</span>
          <AccordionGradient />
        </div>

        {/* 9. Pill */}
        <div className="w-full flex flex-col items-center bg-gray-100 p-8 rounded-2xl">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">09. Separated Pills</span>
          <AccordionPill />
        </div>

        {/* 10. Neumorphic */}
        <div className="w-full flex flex-col items-center bg-[#e0e5ec] p-8 rounded-2xl">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">10. Neumorphic</span>
          <AccordionNeumorphic />
        </div>

      </div>
    </div>
  );
};

export default Accordions;