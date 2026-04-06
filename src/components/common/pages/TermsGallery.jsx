import React, { useState } from 'react';
import CopyButton from '../CopyButton';

// --- Shared Data ---
const termsData = [
  { title: "1. Acceptance of Terms", content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services." },
  { title: "2. Privacy Policy", content: "We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you." },
  { title: "3. User Conduct", content: "You agree not to use the service for any unlawful purpose or in any way that interrupts, damages, impairs, or renders the service less efficient. You agree not to attempt to gain unauthorized access to any part of the website." },
  { title: "4. Termination", content: "We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms." },
];

// --- 1. The Standard SaaS (Sticky Sidebar) ---
export const TermsStandard = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-12 h-[600px] overflow-hidden">
    {/* Sidebar */}
    <div className="w-full md:w-1/4 flex-shrink-0">
      <div className="sticky top-0">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms of Service</h2>
        <ul className="space-y-3 text-sm text-gray-500">
          {termsData.map((section, i) => (
            <li key={i} className={`cursor-pointer hover:text-blue-600 transition-colors ${i === 0 ? 'text-blue-600 font-bold' : ''}`}>
              {section.title}
            </li>
          ))}
          <li className="pt-4 mt-4 border-t border-gray-100 text-xs">
            Last Updated: <span className="text-gray-900">Oct 24, 2024</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Content */}
    <div className="w-full md:w-3/4 overflow-y-auto pr-4 custom-scrollbar">
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Welcome to our platform. Please read these terms carefully before using our services.
        </p>
        {termsData.map((section, i) => (
          <div key={i} className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
            <p className="text-gray-500 leading-relaxed">{section.content} {section.content} {section.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 2. The Minimalist (Center Focus) ---
export const TermsMinimal = () => (
  <div className="bg-[#f9f9f9] p-12 rounded-3xl h-[600px] overflow-y-auto">
    <div className="max-w-2xl mx-auto bg-white p-12 shadow-sm border border-gray-100">
      <h1 className="text-4xl font-serif text-gray-900 mb-2 text-center">Terms & Conditions</h1>
      <p className="text-center text-gray-400 text-sm mb-12">Effective Date: January 1, 2024</p>
      
      <div className="space-y-8 font-serif text-gray-600">
        {termsData.map((section, i) => (
          <div key={i}>
            <h3 className="font-bold text-black mb-2">{section.title}</h3>
            <p className="leading-7">{section.content}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-100 text-center">
        <button className="text-sm font-bold uppercase tracking-widest hover:text-gray-500 transition-colors">
          Download PDF
        </button>
      </div>
    </div>
  </div>
);

// --- 3. The TL;DR (Two Column Summary) ---
export const TermsSummary = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 h-[600px] overflow-y-auto">
    <div className="max-w-5xl mx-auto">
      <div className="mb-12 border-b border-gray-100 pb-8">
        <h2 className="text-3xl font-bold text-gray-900">Legal Terms</h2>
        <p className="text-gray-500 mt-2">We believe in plain English. Here is a summary of our terms alongside the legal text.</p>
      </div>

      <div className="space-y-12">
        {termsData.map((section, i) => (
          <div key={i} className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-blue-50 p-4 rounded-xl">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2 block">What it means</span>
                <p className="text-sm text-blue-900 font-medium">
                  {i === 0 ? "You agree to follow our rules by using the site." : 
                   i === 1 ? "We keep your data safe and private." : 
                   "Basically, play nice and don't break the law."}
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="font-bold text-gray-900 mb-2">{section.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{section.content} {section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 4. The Modal (Agreement Popup) ---
export const TermsModal = () => (
  <div className="relative h-[600px] bg-gray-100 rounded-3xl overflow-hidden flex items-center justify-center p-4">
    {/* Background Context */}
    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
    
    <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[500px]">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900">Update to Terms</h2>
        <p className="text-sm text-gray-500">Please review and accept our updated terms to continue.</p>
      </div>
      
      <div className="p-6 overflow-y-auto bg-gray-50 flex-1">
        <div className="text-sm text-gray-600 space-y-4">
          {termsData.map((section, i) => (
            <div key={i}>
              <strong className="block text-gray-900 mb-1">{section.title}</strong>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-6 border-t border-gray-100 bg-white">
        <label className="flex items-center gap-3 mb-4 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
          <span className="text-sm text-gray-600">I have read and agree to the terms</span>
        </label>
        <div className="flex gap-3">
          <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50">Decline</button>
          <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">Accept</button>
        </div>
      </div>
    </div>
  </div>
);

// --- 5. The Accordion (Mobile Friendly) ---
export const TermsAccordion = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 h-[600px] overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Terms of Service</h2>
        
        <div className="space-y-4">
          {termsData.map((section, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-800">{section.title}</span>
                <span className={`transform transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${open === i ? 'max-h-40 p-5 pt-0 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 text-sm leading-relaxed">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 6. The Split Fixed (Legal Doc Style) ---
export const TermsSplit = () => (
  <div className="flex h-[600px] bg-white rounded-3xl overflow-hidden border border-gray-200">
    {/* Left Fixed */}
    <div className="w-1/3 bg-slate-900 p-10 text-white flex flex-col justify-between">
      <div>
        <h1 className="text-4xl font-bold mb-6">Terms of<br/>Service.</h1>
        <p className="text-slate-400 text-sm">
          These terms govern your use of our website and services.
        </p>
      </div>
      <div className="space-y-4 text-sm font-medium text-slate-300">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          Current Version: 2.4
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
          Archived Versions
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
          Download PDF
        </div>
      </div>
    </div>

    {/* Right Scroll */}
    <div className="w-2/3 p-10 overflow-y-auto">
      <div className="max-w-xl">
        {termsData.map((section, i) => (
          <div key={i} className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">{section.title}</h3>
            <p className="text-gray-600 text-sm leading-7 text-justify">
              {section.content} {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 7. The Cyberpunk (Terminal) ---
export const TermsCyber = () => (
  <div className="bg-black p-8 rounded-3xl border border-gray-800 h-[600px] font-mono relative overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
    
    <div className="relative z-10 h-full flex flex-col">
      <div className="flex justify-between items-center border-b border-green-900 pb-4 mb-6">
        <h2 className="text-green-500 font-bold text-xl">>> TERMS_OF_USE.TXT</h2>
        <span className="text-xs text-green-700 animate-pulse">● SYSTEM_ONLINE</span>
      </div>

      <div className="overflow-y-auto pr-4 custom-scrollbar flex-1">
        {termsData.map((section, i) => (
          <div key={i} className="mb-8">
            <h3 className="text-white font-bold mb-2 bg-green-900/30 inline-block px-2">
              [{i < 9 ? `0${i+1}` : i+1}] {section.title.toUpperCase()}
            </h3>
            <p className="text-green-400/80 text-sm leading-relaxed border-l border-green-900 pl-4 ml-2">
              {section.content}
            </p>
          </div>
        ))}
        <div className="text-green-500 mt-8 animate-pulse">_END_OF_FILE</div>
      </div>
    </div>
  </div>
);

// --- 8. The Glassmorphism (Floating) ---
export const TermsGlass = () => (
  <div className="relative h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 flex items-center justify-center p-8">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10"></div>
    
    <div className="relative w-full max-w-3xl h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
      <div className="p-8 border-b border-white/10">
        <h2 className="text-3xl font-bold text-white">Terms of Service</h2>
      </div>
      
      <div className="p-8 overflow-y-auto text-white/90">
        {termsData.map((section, i) => (
          <div key={i} className="mb-8 p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-bold mb-3 text-white">{section.title}</h3>
            <p className="leading-relaxed font-light">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 9. The Brutalist (Bold Blocks) ---
export const TermsBrutalist = () => (
  <div className="bg-yellow-400 p-8 rounded-3xl border-4 border-black h-[600px] overflow-hidden flex flex-col">
    <div className="bg-white border-4 border-black p-6 mb-8 shadow-[8px_8px_0_0_#000]">
      <h1 className="text-5xl font-black uppercase">Rules<br/>Of The<br/>Game</h1>
    </div>
    
    <div className="overflow-y-auto flex-1 pr-4">
      <div className="space-y-6">
        {termsData.map((section, i) => (
          <div key={i} className="bg-white border-4 border-black p-6 hover:-translate-y-1 transition-transform">
            <h3 className="text-2xl font-black uppercase mb-4 bg-black text-white inline-block px-2">
              {section.title}
            </h3>
            <p className="font-bold text-lg leading-tight">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 10. The Neumorphic (Soft) ---
export const TermsNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-12 rounded-3xl h-[600px] overflow-y-auto">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-[#e0e5ec] rounded-full shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center mx-auto mb-6 text-2xl text-gray-500">
          ⚖️
        </div>
        <h2 className="text-3xl font-bold text-gray-700">Terms & Conditions</h2>
      </div>

      <div className="space-y-8">
        {termsData.map((section, i) => (
          <div key={i} className="bg-[#e0e5ec] p-8 rounded-[30px] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
            <h3 className="text-xl font-bold text-gray-700 mb-4">{section.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm">{section.content}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="px-8 py-3 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] active:scale-95 transition-all">
          Accept Terms
        </button>
      </div>
    </div>
  </div>
);


// --- Main Gallery Wrapper ---
const TermsGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-100 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Terms of Service Layouts</h1>
        <p className="text-slate-500">Readable and accessible legal page designs.</p>
      </div>
      
      <div className="space-y-32 max-w-6xl mx-auto">
        
        <section className='box-shadow p-4 rounded-lg relative group/term'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/term:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-12 h-[600px] overflow-hidden">
    {/* Sidebar */}
    <div className="w-full md:w-1/4 flex-shrink-0">
      <div className="sticky top-0">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms of Service</h2>
        <ul className="space-y-3 text-sm text-gray-500">
          {termsData.map((section, i) => (
            <li key={i} className={\`cursor-pointer hover:text-blue-600 transition-colors \${i === 0 ? 'text-blue-600 font-bold' : ''}\`}>
              {section.title}
            </li>
          ))}
          <li className="pt-4 mt-4 border-t border-gray-100 text-xs">
            Last Updated: <span className="text-gray-900">Oct 24, 2024</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Content */}
    <div className="w-full md:w-3/4 overflow-y-auto pr-4 custom-scrollbar">
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Welcome to our platform. Please read these terms carefully before using our services.
        </p>
        {termsData.map((section, i) => (
          <div key={i} className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
            <p className="text-gray-500 leading-relaxed">{section.content} {section.content} {section.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>`} htmlCode={`<div class="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-12 h-[600px] overflow-hidden">
    ...
    <div class="w-full md:w-1/4 flex-shrink-0">
      <div class="sticky top-0">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Terms of Service</h2>
        <ul class="space-y-3 text-sm text-gray-500">
          <!-- Mapping Start -->
(
            <li key=... class=cursor-pointer hover:text-blue-600 transition-colors \$...>
              ...
            </li>
          ))}
          <li class="pt-4 mt-4 border-t border-gray-100 text-xs">
            Last Updated: <span class="text-gray-900">Oct 24, 2024</span>
          </li>
        </ul>
      </div>
    </div>

    ...
    <div class="w-full md:w-3/4 overflow-y-auto pr-4 custom-scrollbar">
      <div class="prose max-w-none">
        <p class="text-lg text-gray-600 mb-8">
          Welcome to our platform. Please read these terms carefully before using our services.
        </p>
        <!-- Mapping Start -->
(
          <div key=... class="mb-10">
            <h3 class="text-xl font-bold text-gray-900 mb-3">...</h3>
            <p class="text-gray-500 leading-relaxed">... ... ...</p>
          </div>
        ))}
      </div>
    </div>
  </div>`} cssCode={`/* TermsStandard Styles (Generated from Tailwind) */\n.component-root {\n  background-color: #ffffff;\n  border-color: #f3f4f6;\n  border-radius: 1.5rem;\n  border-width: 1px; border-style: solid;\n  color: #111827;\n  color: #4b5563;\n  color: #6b7280;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  padding: 2rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 01. Standard SaaS (Sticky Sidebar) </span>
          <TermsStandard />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/term'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/term:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-[#f9f9f9] p-12 rounded-3xl h-[600px] overflow-y-auto">
    <div className="max-w-2xl mx-auto bg-white p-12 shadow-sm border border-gray-100">
      <h1 className="text-4xl font-serif text-gray-900 mb-2 text-center">Terms & Conditions</h1>
      <p className="text-center text-gray-400 text-sm mb-12">Effective Date: January 1, 2024</p>
      
      <div className="space-y-8 font-serif text-gray-600">
        {termsData.map((section, i) => (
          <div key={i}>
            <h3 className="font-bold text-black mb-2">{section.title}</h3>
            <p className="leading-7">{section.content}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-100 text-center">
        <button className="text-sm font-bold uppercase tracking-widest hover:text-gray-500 transition-colors">
          Download PDF
        </button>
      </div>
    </div>
  </div>`} htmlCode={`<div class="bg-[#f9f9f9] p-12 rounded-3xl h-[600px] overflow-y-auto">
    <div class="max-w-2xl mx-auto bg-white p-12 shadow-sm border border-gray-100">
      <h1 class="text-4xl font-serif text-gray-900 mb-2 text-center">Terms & Conditions</h1>
      <p class="text-center text-gray-400 text-sm mb-12">Effective Date: January 1, 2024</p>
      
      <div class="space-y-8 font-serif text-gray-600">
        <!-- Mapping Start -->
(
          <div key=...>
            <h3 class="font-bold text-black mb-2">...</h3>
            <p class="leading-7">...</p>
          </div>
        ))}
      </div>
      
      <div class="mt-12 pt-8 border-t border-gray-100 text-center">
        <button class="text-sm font-bold uppercase tracking-widest hover:text-gray-500 transition-colors">
          Download PDF
        </button>
      </div>
    </div>
  </div>`} cssCode={`/* TermsMinimal Styles (Generated from Tailwind) */\n.component-root {\n  background-color: #ffffff;\n  border-color: #f3f4f6;\n  border-radius: 1.5rem;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #000000;\n  color: #111827;\n  color: #4b5563;\n  color: #9ca3af;\n  font-weight: 700;\n  padding: 3rem;\n  text-align: center;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 02. Minimalist Center </span>
          <TermsMinimal />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/term'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/term:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-white p-8 rounded-3xl border border-gray-100 h-[600px] overflow-y-auto">
    <div className="max-w-5xl mx-auto">
      <div className="mb-12 border-b border-gray-100 pb-8">
        <h2 className="text-3xl font-bold text-gray-900">Legal Terms</h2>
        <p className="text-gray-500 mt-2">We believe in plain English. Here is a summary of our terms alongside the legal text.</p>
      </div>

      <div className="space-y-12">
        {termsData.map((section, i) => (
          <div key={i} className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-blue-50 p-4 rounded-xl">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2 block">What it means</span>
                <p className="text-sm text-blue-900 font-medium">
                  {i === 0 ? "You agree to follow our rules by using the site." : 
                   i === 1 ? "We keep your data safe and private." : 
                   "Basically, play nice and don't break the law."}
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="font-bold text-gray-900 mb-2">{section.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{section.content} {section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>`} htmlCode={`<div class="bg-white p-8 rounded-3xl border border-gray-100 h-[600px] overflow-y-auto">
    <div class="max-w-5xl mx-auto">
      <div class="mb-12 border-b border-gray-100 pb-8">
        <h2 class="text-3xl font-bold text-gray-900">Legal Terms</h2>
        <p class="text-gray-500 mt-2">We believe in plain English. Here is a summary of our terms alongside the legal text.</p>
      </div>

      <div class="space-y-12">
        <!-- Mapping Start -->
(
          <div key=... class="grid md:grid-cols-3 gap-8">
            <div class="md:col-span-1">
              <div class="bg-blue-50 p-4 rounded-xl">
                <span class="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2 block">What it means</span>
                <p class="text-sm text-blue-900 font-medium">
                  ...
                </p>
              </div>
            </div>
            <div class="md:col-span-2">
              <h3 class="font-bold text-gray-900 mb-2">...</h3>
              <p class="text-gray-500 text-sm leading-relaxed">... ...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>`} cssCode={`/* TermsSummary Styles (Generated from Tailwind) */\n.component-root {\n  background-color: #eff6ff;\n  background-color: #ffffff;\n  border-color: #f3f4f6;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-width: 1px; border-style: solid;\n  color: #111827;\n  color: #2563eb;\n  color: #6b7280;\n  font-weight: 700;\n  padding: 1rem;\n  padding: 2rem;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 03. TL;DR Summary </span>
          <TermsSummary />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/term'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/term:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="relative h-[600px] bg-gray-100 rounded-3xl overflow-hidden flex items-center justify-center p-4">
    {/* Background Context */}
    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
    
    <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[500px]">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900">Update to Terms</h2>
        <p className="text-sm text-gray-500">Please review and accept our updated terms to continue.</p>
      </div>
      
      <div className="p-6 overflow-y-auto bg-gray-50 flex-1">
        <div className="text-sm text-gray-600 space-y-4">
          {termsData.map((section, i) => (
            <div key={i}>
              <strong className="block text-gray-900 mb-1">{section.title}</strong>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-6 border-t border-gray-100 bg-white">
        <label className="flex items-center gap-3 mb-4 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
          <span className="text-sm text-gray-600">I have read and agree to the terms</span>
        </label>
        <div className="flex gap-3">
          <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50">Decline</button>
          <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">Accept</button>
        </div>
      </div>
    </div>
  </div>`} htmlCode={`<div class="relative h-[600px] bg-gray-100 rounded-3xl overflow-hidden flex items-center justify-center p-4">
    ...
    <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
    
    <div class="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[500px]">
      <div class="p-6 border-b border-gray-100">
        <h2 class="text-xl font-bold text-gray-900">Update to Terms</h2>
        <p class="text-sm text-gray-500">Please review and accept our updated terms to continue.</p>
      </div>
      
      <div class="p-6 overflow-y-auto bg-gray-50 flex-1">
        <div class="text-sm text-gray-600 space-y-4">
          <!-- Mapping Start -->
(
            <div key=...>
              <strong class="block text-gray-900 mb-1">...</strong>
              <p>...</p>
            </div>
          ))}
        </div>
      </div>
      
      <div class="p-6 border-t border-gray-100 bg-white">
        <label class="flex items-center gap-3 mb-4 cursor-pointer">
          <input type="checkbox" class="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
          <span class="text-sm text-gray-600">I have read and agree to the terms</span>
        </label>
        <div class="flex gap-3">
          <button class="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50">Decline</button>
          <button class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">Accept</button>
        </div>
      </div>
    </div>
  </div>`} cssCode={`/* TermsModal Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #2563eb;\n  background-color: #f3f4f6;\n  background-color: #f9fafb;\n  background-color: #ffffff;\n  border-color: #f3f4f6;\n  border-radius: 0.5rem;\n  border-radius: 1.5rem;\n  border-radius: 1rem;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #111827;\n  color: #2563eb;\n  color: #374151;\n  color: #4b5563;\n  color: #6b7280;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  justify-content: center;\n  padding-left: 1rem; padding-right: 1rem;\n  padding-top: 0.5rem; padding-bottom: 0.5rem;\n  padding: 1.5rem;\n  padding: 1rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 04. Modal Agreement </span>
          <TermsModal />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/term'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/term:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-white p-8 rounded-3xl border border-gray-100 h-[600px] overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Terms of Service</h2>
        
        <div className="space-y-4">
          {termsData.map((section, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-800">{section.title}</span>
                <span className={\`transform transition-transform duration-300 \${open === i ? 'rotate-180' : ''}\`}>
                  ▼
                </span>
              </button>
              <div className={\`transition-all duration-300 ease-in-out \${open === i ? 'max-h-40 p-5 pt-0 opacity-100' : 'max-h-0 opacity-0'}\`}>
                <p className="text-gray-600 text-sm leading-relaxed">{section.content}</p>
              </div>
            </div>
          )`} htmlCode={`<div class="bg-white p-8 rounded-3xl border border-gray-100 h-[600px] overflow-y-auto">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-10">Terms of Service</h2>
        
        <div class="space-y-4">
          <!-- Mapping Start -->
(
            <div key=... class="border border-gray-200 rounded-xl overflow-hidden">
              <button 
                onClick=...
                class="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span class="font-bold text-gray-800">...</span>
                <span class=transform transition-transform duration-300 \$...>
                  ▼
                </span>
              </button>
              <div class=transition-all duration-300 ease-in-out \$...>
                <p class="text-gray-600 text-sm leading-relaxed">...</p>
              </div>
            </div>
          )`} cssCode={`/* TermsAccordion Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #ffffff;\n  border-color: #e5e7eb;\n  border-color: #f3f4f6;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-width: 1px; border-style: solid;\n  color: #1f2937;\n  color: #4b5563;\n  display: flex;\n  font-weight: 700;\n  justify-content: space-between;\n  padding: 1.25rem;\n  padding: 2rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 05. Mobile Accordion </span>
          <TermsAccordion />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/term'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/term:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="flex h-[600px] bg-white rounded-3xl overflow-hidden border border-gray-200">
    {/* Left Fixed */}
    <div className="w-1/3 bg-slate-900 p-10 text-white flex flex-col justify-between">
      <div>
        <h1 className="text-4xl font-bold mb-6">Terms of<br/>Service.</h1>
        <p className="text-slate-400 text-sm">
          These terms govern your use of our website and services.
        </p>
      </div>
      <div className="space-y-4 text-sm font-medium text-slate-300">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          Current Version: 2.4
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
          Archived Versions
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
          Download PDF
        </div>
      </div>
    </div>

    {/* Right Scroll */}
    <div className="w-2/3 p-10 overflow-y-auto">
      <div className="max-w-xl">
        {termsData.map((section, i) => (
          <div key={i} className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">{section.title}</h3>
            <p className="text-gray-600 text-sm leading-7 text-justify">
              {section.content} {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>`} htmlCode={`<div class="flex h-[600px] bg-white rounded-3xl overflow-hidden border border-gray-200">
    ...
    <div class="w-1/3 bg-slate-900 p-10 text-white flex flex-col justify-between">
      <div>
        <h1 class="text-4xl font-bold mb-6">Terms of<br/>Service.</h1>
        <p class="text-slate-400 text-sm">
          These terms govern your use of our website and services.
        </p>
      </div>
      <div class="space-y-4 text-sm font-medium text-slate-300">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 bg-green-500 rounded-full"></div>
          Current Version: 2.4
        </div>
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
          Archived Versions
        </div>
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
          Download PDF
        </div>
      </div>
    </div>

    ...
    <div class="w-2/3 p-10 overflow-y-auto">
      <div class="max-w-xl">
        <!-- Mapping Start -->
(
          <div key=... class="mb-10">
            <h3 class="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">...</h3>
            <p class="text-gray-600 text-sm leading-7 text-justify">
              ... ...
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>`} cssCode={`/* TermsSplit Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #0f172a;\n  background-color: #22c55e;\n  background-color: #475569;\n  background-color: #ffffff;\n  border-color: #e5e7eb;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  color: #111827;\n  color: #4b5563;\n  color: #94a3b8;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  justify-content: space-between;\n  padding: 2.5rem;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 06. Split Fixed Layout </span>
          <TermsSplit />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/term'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/term:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-black p-8 rounded-3xl border border-gray-800 h-[600px] font-mono relative overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
    
    <div className="relative z-10 h-full flex flex-col">
      <div className="flex justify-between items-center border-b border-green-900 pb-4 mb-6">
        <h2 className="text-green-500 font-bold text-xl">>> TERMS_OF_USE.TXT</h2>
        <span className="text-xs text-green-700 animate-pulse">● SYSTEM_ONLINE</span>
      </div>

      <div className="overflow-y-auto pr-4 custom-scrollbar flex-1">
        {termsData.map((section, i) => (
          <div key={i} className="mb-8">
            <h3 className="text-white font-bold mb-2 bg-green-900/30 inline-block px-2">
              [{i < 9 ? \`0\${i+1}\` : i+1}] {section.title.toUpperCase()}
            </h3>
            <p className="text-green-400/80 text-sm leading-relaxed border-l border-green-900 pl-4 ml-2">
              {section.content}
            </p>
          </div>
        ))}
        <div className="text-green-500 mt-8 animate-pulse">_END_OF_FILE</div>
      </div>
    </div>
  </div>`} htmlCode={`<div class="bg-black p-8 rounded-3xl border border-gray-800 h-[600px] font-mono relative overflow-hidden">
    <div class="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
    
    <div class="relative z-10 h-full flex flex-col">
      <div class="flex justify-between items-center border-b border-green-900 pb-4 mb-6">
        <h2 class="text-green-500 font-bold text-xl">>> TERMS_OF_USE.TXT</h2>
        <span class="text-xs text-green-700 animate-pulse">● SYSTEM_ONLINE</span>
      </div>

      <div class="overflow-y-auto pr-4 custom-scrollbar flex-1">
        <!-- Mapping Start -->
(
          <div key=... class="mb-8">
            <h3 class="text-white font-bold mb-2 bg-green-900/30 inline-block px-2">
              [...\` : i+1}] ...
            </h3>
            <p class="text-green-400/80 text-sm leading-relaxed border-l border-green-900 pl-4 ml-2">
              ...
            </p>
          </div>
        ))}
        <div class="text-green-500 mt-8 animate-pulse">_END_OF_FILE</div>
      </div>
    </div>
  </div>`} cssCode={`/* TermsCyber Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #000000;\n  border-color: #1f2937;\n  border-radius: 1.5rem;\n  border-width: 1px; border-style: solid;\n  color: #22c55e;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  height: 100%;\n  justify-content: space-between;\n  padding-left: 0.5rem; padding-right: 0.5rem;\n  padding: 2rem;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 07. Cyberpunk Terminal </span>
          <TermsCyber />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/term'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/term:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="relative h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 flex items-center justify-center p-8">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10"></div>
    
    <div className="relative w-full max-w-3xl h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
      <div className="p-8 border-b border-white/10">
        <h2 className="text-3xl font-bold text-white">Terms of Service</h2>
      </div>
      
      <div className="p-8 overflow-y-auto text-white/90">
        {termsData.map((section, i) => (
          <div key={i} className="mb-8 p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-bold mb-3 text-white">{section.title}</h3>
            <p className="leading-relaxed font-light">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>`} htmlCode={`<div class="relative h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 flex items-center justify-center p-8">
    <div class="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10"></div>
    
    <div class="relative w-full max-w-3xl h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
      <div class="p-8 border-b border-white/10">
        <h2 class="text-3xl font-bold text-white">Terms of Service</h2>
      </div>
      
      <div class="p-8 overflow-y-auto text-white/90">
        <!-- Mapping Start -->
(
          <div key=... class="mb-8 p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
            <h3 class="text-xl font-bold mb-3 text-white">...</h3>
            <p class="leading-relaxed font-light">...</p>
          </div>
        ))}
      </div>
    </div>
  </div>`} cssCode={`/* TermsGlass Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  backdrop-filter: blur(12px);\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-radius: 1rem;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  height: 100%;\n  justify-content: center;\n  padding: 1.5rem;\n  padding: 2rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 08. Glassmorphism </span>
          <TermsGlass />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/term'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/term:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-yellow-400 p-8 rounded-3xl border-4 border-black h-[600px] overflow-hidden flex flex-col">
    <div className="bg-white border-4 border-black p-6 mb-8 shadow-[8px_8px_0_0_#000]">
      <h1 className="text-5xl font-black uppercase">Rules<br/>Of The<br/>Game</h1>
    </div>
    
    <div className="overflow-y-auto flex-1 pr-4">
      <div className="space-y-6">
        {termsData.map((section, i) => (
          <div key={i} className="bg-white border-4 border-black p-6 hover:-translate-y-1 transition-transform">
            <h3 className="text-2xl font-black uppercase mb-4 bg-black text-white inline-block px-2">
              {section.title}
            </h3>
            <p className="font-bold text-lg leading-tight">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>`} htmlCode={`<div class="bg-yellow-400 p-8 rounded-3xl border-4 border-black h-[600px] overflow-hidden flex flex-col">
    <div class="bg-white border-4 border-black p-6 mb-8 shadow-[8px_8px_0_0_#000]">
      <h1 class="text-5xl font-black uppercase">Rules<br/>Of The<br/>Game</h1>
    </div>
    
    <div class="overflow-y-auto flex-1 pr-4">
      <div class="space-y-6">
        <!-- Mapping Start -->
(
          <div key=... class="bg-white border-4 border-black p-6 hover:-translate-y-1 transition-transform">
            <h3 class="text-2xl font-black uppercase mb-4 bg-black text-white inline-block px-2">
              ...
            </h3>
            <p class="font-bold text-lg leading-tight">
              ...
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>`} cssCode={`/* TermsBrutalist Styles (Generated from Tailwind) */\n.component-root {\n  background-color: #000000;\n  background-color: #facc15;\n  background-color: #ffffff;\n  border-color: #000000;\n  border-radius: 1.5rem;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  padding-left: 0.5rem; padding-right: 0.5rem;\n  padding: 1.5rem;\n  padding: 2rem;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 09. Brutalist </span>
          <TermsBrutalist />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/term'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/term:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-[#e0e5ec] p-12 rounded-3xl h-[600px] overflow-y-auto">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-[#e0e5ec] rounded-full shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center mx-auto mb-6 text-2xl text-gray-500">
          ⚖️
        </div>
        <h2 className="text-3xl font-bold text-gray-700">Terms & Conditions</h2>
      </div>

      <div className="space-y-8">
        {termsData.map((section, i) => (
          <div key={i} className="bg-[#e0e5ec] p-8 rounded-[30px] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
            <h3 className="text-xl font-bold text-gray-700 mb-4">{section.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm">{section.content}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="px-8 py-3 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] active:scale-95 transition-all">
          Accept Terms
        </button>
      </div>
    </div>
  </div>`} htmlCode={`<div class="bg-[#e0e5ec] p-12 rounded-3xl h-[600px] overflow-y-auto">
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-12">
        <div class="w-20 h-20 bg-[#e0e5ec] rounded-full shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center mx-auto mb-6 text-2xl text-gray-500">
          ⚖️
        </div>
        <h2 class="text-3xl font-bold text-gray-700">Terms & Conditions</h2>
      </div>

      <div class="space-y-8">
        <!-- Mapping Start -->
(
          <div key=... class="bg-[#e0e5ec] p-8 rounded-[30px] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
            <h3 class="text-xl font-bold text-gray-700 mb-4">...</h3>
            <p class="text-gray-500 leading-relaxed text-sm">...</p>
          </div>
        ))}
      </div>
      
      <div class="mt-12 text-center">
        <button class="px-8 py-3 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] active:scale-95 transition-all">
          Accept Terms
        </button>
      </div>
    </div>
  </div>`} cssCode={`/* TermsNeumorphic Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #374151;\n  color: #3b82f6;\n  color: #6b7280;\n  display: flex;\n  font-weight: 700;\n  justify-content: center;\n  padding-left: 2rem; padding-right: 2rem;\n  padding-top: 0.75rem; padding-bottom: 0.75rem;\n  padding: 2rem;\n  padding: 3rem;\n  text-align: center;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 10. Neumorphic </span>
          <TermsNeumorphic />
        </section>

      </div>
    </div>
  );
};

export default TermsGallery;