import React, { useState } from 'react';
import CopyButton from '../CopyButton';

// --- Terms Data ---
const TERMS_SECTIONS = [
  { id: '01', title: "Acceptance of Protocol", content: "By accessing the node, you acknowledge full alignment with the structural logic defined herein. Deviation from defined protocols may result in immediate termination of the secure link." },
  { id: '02', title: "Privacy Architecture", content: "Data encryption is handled at the network edge. We do not persist identifiable user payloads in plaintext. Your identity remains an encrypted node within the matrix." },
  { id: '03', title: "User Constraints", content: "Unauthorized injection of data packets, structural subversion, or interference with concurrent nodes is strictly prohibited under global protocol standards." },
  { id: '04', title: "Termination Logic", content: "The service reserves the right to sever any connection that exhibits anomalous behavior or violates the core integrity of the network architecture." },
];

// --- Original High-Fidelity Variants ---

export const TermsStandard = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-12 h-auto md:h-[600px] overflow-hidden font-sans text-left">
    <div className="w-full md:w-1/4 flex-shrink-0 border-r border-gray-100 pr-6">
      <div className="sticky top-0">
        <div className="flex items-center gap-2 mb-8 text-indigo-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          <span className="font-bold text-lg italic uppercase tracking-tight">Legal Node</span>
        </div>
        <ul className="space-y-4 text-sm text-gray-500">
          {TERMS_SECTIONS.map((item, i) => (
            <li key={item.id} className={`cursor-pointer hover:text-indigo-600 transition-colors ${i === 0 ? 'text-indigo-600 font-medium bg-indigo-50 px-3 py-2 rounded-lg' : 'px-3 py-2'}`}>0{i+1}. {item.title.split(' ')[0]}</li>
          ))}
        </ul>
      </div>
    </div>
    <div className="w-full md:w-3/4 overflow-y-auto pr-4">
      <h1 className="text-4xl font-black text-gray-900 mb-2 uppercase tracking-tighter italic text-left">Terms of Protocol</h1>
      <p className="text-gray-400 mb-10 text-lg italic lowercase font-medium text-left">Updated_v2.4_Ref</p>
      <div className="space-y-12">
        {TERMS_SECTIONS.map((item, i) => (
          <div key={item.id} className="border-b border-gray-50 pb-8 last:border-0 text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase">0{i+1}. {item.title}</h3>
            <p className="text-gray-500 leading-relaxed text-lg">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const TermsCards = () => (
  <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] h-auto md:h-[600px] overflow-y-auto font-sans text-left">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter italic uppercase">Manifesto</h2>
        <div className="w-20 h-2 bg-indigo-600 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TERMS_SECTIONS.map((item, i) => (
          <div key={item.id} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all group">
             <div class="w-16 h-16 bg-slate-950 text-white rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
             </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase italic">{item.title}</h3>
            <p className="text-slate-500 leading-relaxed italic font-medium">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const TermsAccordion = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="bg-white p-8 md:p-16 rounded-3xl border border-gray-100 h-auto md:h-[600px] overflow-y-auto font-sans text-left text-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter italic">Legal_FAQ</h2>
        <div className="space-y-6">
          {TERMS_SECTIONS.map((item, i) => (
            <div key={item.id} className={`border-4 rounded-[2rem] overflow-hidden transition-all ${active === i ? 'border-indigo-600 bg-indigo-50/20' : 'border-gray-50'}`}>
              <button onClick={() => setActive(active === i ? -1 : i)} className="w-full flex justify-between items-center p-8 text-left outline-none">
                <span className={`text-xl font-bold uppercase italic ${active === i ? 'text-indigo-600' : 'text-gray-700'}`}>0{i+1}. {item.title}</span>
                <span className={`text-2xl transition-transform ${active === i ? 'rotate-180 text-indigo-600' : 'text-gray-300'}`}>▼</span>
              </button>
              {active === i && (
                <div className="px-8 pb-10 text-gray-500 text-lg leading-relaxed text-left italic border-t border-indigo-100/50 pt-6">{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const TermsMinimal = () => (
  <div className="bg-[#f8f9fa] p-12 md:p-24 rounded-[3rem] h-auto md:h-[600px] overflow-y-auto border border-gray-200 font-sans text-left">
    <div className="max-w-2xl mx-auto">
      <h1 className="text-8xl font-black text-black mb-24 tracking-tighter uppercase italic leading-none border-b-8 border-black pb-8">Law.</h1>
      <div className="space-y-24">
        {TERMS_SECTIONS.map((item, i) => (
          <div key={item.id} className="relative">
            <span className="absolute -left-20 top-0 text-6xl font-black text-gray-100">0{i+1}</span>
            <h3 className="text-4xl font-black mb-8 text-black uppercase tracking-tight italic">{item.title}</h3>
            <p className="text-2xl leading-relaxed text-gray-500 italic lowercase font-medium">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const TermsTimeline = () => (
  <div className="bg-white p-8 md:p-20 rounded-3xl border border-gray-100 h-auto md:h-[600px] overflow-y-auto font-sans text-left text-gray-900">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-5xl font-black text-gray-900 mb-20 text-center uppercase tracking-tighter italic">Logic_Flow</h2>
      <div className="relative border-l-8 border-indigo-50 ml-10 pl-16 space-y-24">
        {TERMS_SECTIONS.map((item, i) => (
          <div key={item.id} className="relative text-left">
            <div className="absolute -left-[108px] top-0 w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center font-black text-white text-2xl shadow-xl shadow-indigo-100 border-4 border-white">
              0{i+1}
            </div>
            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 text-left">
              <h3 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight italic">{item.title}</h3>
              <p className="text-gray-500 text-xl leading-relaxed italic">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const TermsSplit = () => (
  <div className="flex flex-col md:flex-row h-auto md:h-[600px] bg-slate-900 rounded-[2.5rem] overflow-hidden text-white font-sans text-left">
    <div className="w-full md:w-2/5 bg-indigo-600 p-16 md:p-20 flex flex-col justify-between">
      <div>
        <h1 className="text-6xl font-black mb-8 uppercase italic leading-[0.8] tracking-tighter">Secure <br/> <span className="text-white/50">Terms.</span></h1>
        <p className="text-indigo-100 text-lg uppercase tracking-widest text-xs font-black opacity-60">System_Protocol_Authorized</p>
      </div>
      <div className="w-16 h-16 bg-white rounded-full"></div>
    </div>
    <div className="w-full md:w-3/5 p-16 md:p-20 overflow-y-auto space-y-16 bg-black/50 backdrop-blur-3xl text-left">
      {TERMS_SECTIONS.map((item, i) => (
        <div key={item.id} className="text-left">
          <div className="text-indigo-500 text-xs font-mono mb-4 uppercase tracking-[0.4em] font-black italic">Node_Sequence_0{i+1}</div>
          <h3 className="text-4xl font-black mb-6 uppercase tracking-tight italic">{item.title}</h3>
          <p className="text-slate-400 text-xl leading-relaxed italic border-l-4 border-indigo-600/50 pl-8">{item.content}</p>
        </div>
      ))}
    </div>
  </div>
);

export const TermsGlass = () => (
  <div className="min-h-[600px] w-full rounded-[4rem] overflow-hidden bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 p-8 md:p-16 flex items-center justify-center font-sans text-left">
    <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-16 rounded-[4rem] shadow-2xl w-full max-w-5xl text-center">
      <h2 className="text-6xl font-black text-white uppercase mb-20 italic tracking-tighter">Crystal_Law</h2>
      <div className="grid md:grid-cols-2 gap-12 text-left">
        {TERMS_SECTIONS.map((item, i) => (
          <div key={item.id} className="bg-white/5 border border-white/10 p-12 rounded-[3rem] hover:bg-white/20 transition-all group text-left">
            <h3 className="text-2xl font-black text-white uppercase mb-4 tracking-tight italic group-hover:text-blue-300 transition-colors">{item.title}</h3>
            <p className="text-white/50 leading-relaxed italic text-lg">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const TermsBrutalist = () => (
  <div className="bg-indigo-600 p-8 md:p-16 border-[12px] border-black rounded-[4rem] font-sans max-w-5xl mx-auto shadow-[30px_30px_0_0_#000] text-left">
    <h1 className="text-9xl font-black uppercase mb-20 leading-[0.7] italic bg-white text-black px-8 py-4 inline-block tracking-tighter">Terms!</h1>
    <div className="grid md:grid-cols-2 gap-16 text-left">
      {TERMS_SECTIONS.map((item, i) => (
        <div key={item.id} className="bg-black text-white border-8 border-black p-12 shadow-[20px_20px_0_0_#facc15] hover:translate-x-2 hover:translate-y-2 transition-all text-left">
          <h3 className="text-4xl font-black uppercase mb-8 border-b-8 border-white pb-6 italic">{item.title}</h3>
          <p className="text-white/60 text-2xl font-black leading-tight italic lowercase">{item.content}</p>
        </div>
      ))}
    </div>
  </div>
);

export const TermsCyber = () => (
  <div className="bg-black p-8 md:p-20 rounded-3xl border-4 border-indigo-500/30 font-mono text-left relative overflow-hidden italic font-bold text-left">
    <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500/50 animate-pulse"></div>
    <h2 className="text-6xl font-black text-indigo-400 mb-20 uppercase tracking-[0.2em] text-left">MANIFESTO_v4.2</h2>
    <div className="space-y-20 text-left">
      {TERMS_SECTIONS.map((item, i) => (
        <div key={item.id} className="border-l-4 border-indigo-500/20 pl-12 hover:border-indigo-400 transition-all text-left">
          <div className="text-indigo-500/40 mb-6 text-xs tracking-[0.6em] uppercase">Security_Layer_0{i+1}</div>
          <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">{item.title}</h3>
          <p className="text-indigo-100/40 leading-relaxed text-xl uppercase max-w-3xl">{item.content}</p>
        </div>
      ))}
    </div>
  </div>
);

export const TermsNeo = () => (
  <div className="bg-[#e0e5ec] p-12 md:p-24 rounded-[5rem] shadow-[30px_30px_60px_#bebebe,-30px_-30px_60px_#ffffff] font-sans text-center text-left">
    <h2 className="text-6xl font-black text-slate-800 mb-24 uppercase tracking-tighter italic">Tactile Law</h2>
    <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto text-left">
      {TERMS_SECTIONS.map((item, i) => (
        <div key={item.id} className="bg-[#e0e5ec] p-12 rounded-[50px] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] hover:shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] transition-all text-left">
          <h3 className="text-3xl font-black text-slate-700 mb-6 uppercase italic tracking-tight">0{i+1}. {item.title}</h3>
          <p className="text-xl text-slate-500 leading-relaxed italic font-medium">{item.content}</p>
        </div>
      ))}
    </div>
  </div>
);

// --- Main Gallery Wrapper ---

const TermsGallery = () => {
  const sections = [
    { 
      id: 'standard', 
      title: '01. Standard SaaS Sidebar', 
      component: <TermsStandard />, 
      jsx: `export const TermsStandard = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-12 h-[600px] overflow-hidden">
    <div className="w-1/4 flex-shrink-0 border-r border-gray-100 pr-6">
      <h2 className="font-bold text-lg mb-8 uppercase italic">Legal Node</h2>
      <ul className="space-y-4">
        {TERMS_SECTIONS.map((item) => (
          <li class="text-sm text-gray-500">{item.title}</li>
        ))}
      </ul>
    </div>
    <div className="flex-1 overflow-y-auto">
      <h1>Terms of Protocol</h1>
      <div className="space-y-12">
        {TERMS_SECTIONS.map((item) => (
          <div>
            <h3 class="font-bold uppercase italic">{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);`,
      html: `<div class="terms-standard">
  <div class="sidebar">
    <div class="sidebar-header">
      <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
      <span>Legal Node</span>
    </div>
    <ul class="nav">
      <li class="active">01. Acceptance</li>
      <li>02. Privacy Architecture</li>
      <li>03. User Constraints</li>
      <li>04. Termination Logic</li>
    </ul>
  </div>
  <div class="content">
    <h1>Terms of Protocol</h1>
    <p class="subtitle">Updated_v2.4_Ref</p>
    <div class="sections">
      <div class="section">
        <h3>01. Acceptance of Protocol</h3>
        <p>By accessing the node, you acknowledge full alignment with the structural logic defined herein. Deviation from defined protocols may result in immediate termination of the secure link.</p>
      </div>
      <div class="section">
        <h3>02. Privacy Architecture</h3>
        <p>Data encryption is handled at the network edge. We do not persist identifiable user payloads in plaintext. Your identity remains an encrypted node within the matrix.</p>
      </div>
      <div class="section">
        <h3>03. User Constraints</h3>
        <p>Unauthorized injection of data packets, structural subversion, or interference with concurrent nodes is strictly prohibited under global protocol standards.</p>
      </div>
      <div class="section">
        <h3>04. Termination Logic</h3>
        <p>The service reserves the right to sever any connection that exhibits anomalous behavior or violates the core integrity of the network architecture.</p>
      </div>
    </div>
  </div>
</div>`,
      css: `.terms-standard { background: #ffffff; padding: 32px; border-radius: 24px; border: 1px solid #f3f4f6; display: flex; flex-direction: column; gap: 48px; font-family: sans-serif; overflow: hidden; height: auto; text-align: left; box-sizing: border-box; }
@media (min-width: 768px) { .terms-standard { flex-direction: row; height: 600px; } }
.sidebar { width: 100%; border-right: none; padding-right: 0; }
@media (min-width: 768px) { .sidebar { width: 25%; border-right: 1px solid #f3f4f6; padding-right: 24px; } }
.sidebar-header { display: flex; align-items: center; gap: 8px; color: #4f46e5; font-weight: 700; font-size: 18px; margin-bottom: 32px; text-transform: uppercase; font-style: italic; }
.sidebar-header .icon { width: 24px; height: 24px; }
.nav { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 16px; }
.nav li { font-size: 14px; color: #6b7280; cursor: pointer; padding: 8px 12px; }
.nav li.active { color: #4f46e5; font-weight: 500; background: #f5f3ff; rounded: 8px; }
.content { flex: 1; overflow-y: auto; padding-right: 16px; }
.content h1 { font-size: 36px; font-weight: 900; color: #111827; margin: 0 0 8px 0; text-transform: uppercase; font-style: italic; }
.subtitle { color: #9ca3af; font-size: 18px; font-style: italic; margin-bottom: 40px; }
.sections { display: flex; flex-direction: column; gap: 48px; }
.section { border-bottom: 1px solid #f9fafb; padding-bottom: 32px; }
.section:last-child { border: none; }
.section h3 { font-size: 20px; font-weight: 700; color: #111827; margin-bottom: 16px; text-transform: uppercase; }
.section p { color: #6b7280; font-size: 18px; line-height: 1.6; }`
    },
    { 
      id: 'cards', 
      title: '02. Visual Framework Cards', 
      component: <TermsCards />, 
      jsx: `export const TermsCards = () => (
  <div className="bg-slate-50 p-12 rounded-[3rem] font-sans">
    <h2 className="text-center text-5xl font-black mb-16 uppercase italic">Manifesto</h2>
    <div className="grid grid-cols-2 gap-8">
      {TERMS_SECTIONS.map((item) => (
        <div class="bg-white p-10 rounded-[2.5rem] border border-slate-100">
          <h3 class="text-2xl font-bold uppercase italic">{item.title}</h3>
          <p class="text-slate-500">{item.content}</p>
        </div>
      ))}
    </div>
  </div>
);`,
      html: `<div class="terms-cards">
  <div class="header">
    <h2>Manifesto</h2>
    <div class="bar"></div>
  </div>
  <div class="grid">
    <div class="card">
      <div class="icon-box">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
      </div>
      <h3>01. Acceptance of Protocol</h3>
      <p>By accessing the node, you acknowledge full alignment with the structural logic defined herein. Deviation from defined protocols may result in immediate termination of the secure link.</p>
    </div>
    <div class="card">
      <div class="icon-box">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
      </div>
      <h3>02. Privacy Architecture</h3>
      <p>Data encryption is handled at the network edge. We do not persist identifiable user payloads in plaintext. Your identity remains an encrypted node within the matrix.</p>
    </div>
    <div class="card">
      <div class="icon-box">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
      </div>
      <h3>03. User Constraints</h3>
      <p>Unauthorized injection of data packets, structural subversion, or interference with concurrent nodes is strictly prohibited under global protocol standards.</p>
    </div>
    <div class="card">
      <div class="icon-box">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
      </div>
      <h3>04. Termination Logic</h3>
      <p>The service reserves the right to sever any connection that exhibits anomalous behavior or violates the core integrity of the network architecture.</p>
    </div>
  </div>
</div>`,
      css: `.terms-cards { background: #f8fafc; padding: 48px; border-radius: 48px; font-family: sans-serif; text-align: left; }
.header { text-align: center; margin-bottom: 64px; }
.header h2 { font-size: 48px; font-weight: 900; color: #0f172a; text-transform: uppercase; font-style: italic; }
.bar { width: 80px; height: 8px; background: #4f46e5; margin: 16px auto 0; border-radius: 999px; }
.grid { display: grid; grid-template-columns: 1fr; gap: 32px; max-width: 1024px; margin: 0 auto; }
@media (min-width: 768px) { .grid { grid-template-columns: repeat(2, 1fr); } }
.card { background: #ffffff; padding: 40px; border-radius: 40px; border: 1px solid #f1f5f9; transition: all 0.3s; }
.card:hover { transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1); }
.icon-box { width: 64px; height: 64px; background: #0f172a; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: #ffffff; margin-bottom: 32px; }
.icon-box svg { width: 24px; height: 24px; }
.card h3 { font-size: 24px; font-weight: 700; color: #0f172a; margin-bottom: 16px; text-transform: uppercase; font-style: italic; }
.card p { color: #64748b; font-size: 18px; line-height: 1.6; font-style: italic; font-weight: 500; }`
    },
    { 
      id: 'accordion', 
      title: '03. Interactive Legal Accordion', 
      component: <TermsAccordion />, 
      jsx: `export const TermsAccordion = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="bg-white p-16 rounded-3xl border border-gray-100">
      <h2 className="text-4xl font-black mb-12 text-center uppercase italic text-gray-900">Legal_FAQ</h2>
      <div className="space-y-6">
        {TERMS_SECTIONS.map((item, i) => (
          <div key={item.id} class="border-4 rounded-[2rem]">
            <button onClick={() => setActive(i)} class="w-full p-8 text-left uppercase italic">{item.title}</button>
          </div>
        ))}
      </div>
    </div>
  );
};`,
      html: `<div class="terms-accordion">
  <h2>Legal_FAQ</h2>
  <div class="list">
    <div class="item active">
      <button>
        <span>01. Acceptance of Protocol</span>
        <span class="arrow">▼</span>
      </button>
      <div class="panel">
        <p>By accessing the node, you acknowledge full alignment with the structural logic defined herein. Deviation from defined protocols may result in immediate termination of the secure link.</p>
      </div>
    </div>
    <div class="item">
      <button>
        <span>02. Privacy Architecture</span>
        <span class="arrow">▼</span>
      </button>
      <div class="panel">
        <p>Data encryption is handled at the network edge. We do not persist identifiable user payloads in plaintext.</p>
      </div>
    </div>
    <div class="item">
      <button>
        <span>03. User Constraints</span>
        <span class="arrow">▼</span>
      </button>
      <div class="panel">
        <p>Unauthorized injection of data packets, structural subversion, or interference with concurrent nodes is strictly prohibited under global protocol standards.</p>
      </div>
    </div>
    <div class="item">
      <button>
        <span>04. Termination Logic</span>
        <span class="arrow">▼</span>
      </button>
      <div class="panel">
        <p>The service reserves the right to sever any connection that exhibits anomalous behavior or violates the core integrity of the network architecture.</p>
      </div>
    </div>
  </div>
</div>`,
      css: `.terms-accordion { background: #ffffff; padding: 64px; border-radius: 32px; border: 1px solid #f1f5f9; font-family: sans-serif; text-align: center; }
.terms-accordion h2 { font-size: 36px; font-weight: 900; color: #111827; margin-bottom: 48px; text-transform: uppercase; font-style: italic; }
.list { max-width: 768px; margin: 0 auto; display: flex; flex-direction: column; gap: 24px; }
.item { border: 4px solid #f9fafb; border-radius: 32px; overflow: hidden; transition: all 0.3s; text-align: left; }
.item.active { border-color: #4f46e5; background: rgba(79, 70, 229, 0.05); }
button { width: 100%; border: none; background: transparent; padding: 32px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; }
button span:first-child { font-size: 20px; font-weight: 800; color: #1e293b; text-transform: uppercase; font-style: italic; }
.arrow { font-size: 20px; color: #94a3b8; transition: transform 0.3s; }
.item.active .arrow { transform: rotate(180deg); color: #4f46e5; }
.panel { padding: 0 32px 32px; }
.item:not(.active) .panel { display: none; }
.panel p { color: #6b7280; font-size: 18px; line-height: 1.6; font-style: italic; font-weight: 500; }`
    },
    { 
      id: 'minimal', 
      title: '04. Bauhaus Typography Suite', 
      component: <TermsMinimal />, 
      jsx: `export const TermsMinimal = () => (
  <div className="bg-[#f8f9fa] p-24 rounded-[3rem] text-left">
    <h1 className="text-8xl font-black uppercase italic border-b-8 border-black pb-8">Law.</h1>
    <div className="space-y-24 mt-24">
      {TERMS_SECTIONS.map((item, i) => (
        <div class="relative">
          <span class="absolute -left-20 text-6xl font-black text-gray-100">0{i+1}</span>
          <h3 class="text-4xl font-black uppercase italic">{item.title}</h3>
          <p class="text-2xl text-gray-500 italic lowercase">{item.content}</p>
        </div>
      ))}
    </div>
  </div>
);`,
      html: `<div class="terms-minimal">
  <div class="container">
    <h1 class="main-title">Law.</h1>
    <div class="sections">
      <div class="section">
        <span class="num">01</span>
        <h3 class="title">Acceptance of Protocol</h3>
        <p class="text">By accessing the node, you acknowledge full alignment with the structural logic defined herein. Deviation from defined protocols may result in immediate termination of the secure link.</p>
      </div>
      <div class="section">
        <span class="num">02</span>
        <h3 class="title">Privacy Architecture</h3>
        <p class="text">Data encryption is handled at the network edge. We do not persist identifiable user payloads in plaintext. Your identity remains an encrypted node within the matrix.</p>
      </div>
      <div class="section">
        <span class="num">03</span>
        <h3 class="title">User Constraints</h3>
        <p class="text">Unauthorized injection of data packets, structural subversion, or interference with concurrent nodes is strictly prohibited under global protocol standards.</p>
      </div>
      <div class="section">
        <span class="num">04</span>
        <h3 class="title">Termination Logic</h3>
        <p class="text">The service reserves the right to sever any connection that exhibits anomalous behavior or violates the core integrity of the network architecture.</p>
      </div>
    </div>
  </div>
</div>`,
      css: `.terms-minimal { background: #f8f9fa; padding: 96px; border-radius: 48px; font-family: sans-serif; text-align: left; }
.container { max-width: 896px; margin: 0 auto; }
.main-title { font-size: 80px; font-weight: 900; color: #000000; text-transform: uppercase; font-style: italic; letter-spacing: -0.05em; border-bottom: 8px solid #000000; padding-bottom: 32px; margin-bottom: 96px; line-height: 1; }
.sections { display: flex; flex-direction: column; gap: 96px; }
.section { position: relative; }
.num { position: absolute; left: -80px; top: 0; font-size: 64px; font-weight: 900; color: #f1f5f9; z-index: 0; }
.title { position: relative; z-index: 1; font-size: 40px; font-weight: 900; color: #000000; text-transform: uppercase; font-style: italic; margin-bottom: 32px; letter-spacing: -0.025em; }
.text { font-size: 24px; color: #6b7280; line-height: 1.5; font-style: italic; text-transform: lowercase; font-weight: 500; }`
    },
    { 
      id: 'timeline', 
      title: '05. Process Logic Timeline', 
      component: <TermsTimeline />, 
      jsx: `export const TermsTimeline = () => (
  <div className="bg-white p-20 rounded-3xl border border-gray-100 text-left">
    <h2 className="text-5xl font-black mb-20 text-center uppercase italic text-gray-900">Logic_Flow</h2>
    <div className="relative border-l-8 border-indigo-50 ml-10 pl-16 space-y-24">
       {TERMS_SECTIONS.map((item, i) => (
         <div class="relative">
            <div class="absolute -left-[108px] w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center font-black text-white text-2xl shadow-xl shadow-indigo-100">0{i+1}</div>
            <div class="bg-gray-50 p-10 rounded-[2.5rem]">
               <h3 class="text-3xl font-black uppercase italic text-gray-900">{item.title}</h3>
               <p class="text-gray-500 text-xl italic">{item.content}</p>
            </div>
         </div>
       ))}
    </div>
  </div>
);`,
      html: `<div class="terms-timeline">
  <h2>Logic_Flow</h2>
  <div class="timeline">
    <div class="node">
      <div class="marker">01</div>
      <div class="card">
        <h3>01. Acceptance of Protocol</h3>
        <p>By accessing the node, you acknowledge full alignment with the structural logic defined herein. Deviation from defined protocols may result in immediate termination of the secure link.</p>
      </div>
    </div>
    <div class="node">
      <div class="marker">02</div>
      <div class="card">
        <h3>02. Privacy Architecture</h3>
        <p>Data encryption is handled at the network edge. We do not persist identifiable user payloads in plaintext. Your identity remains an encrypted node within the matrix.</p>
      </div>
    </div>
    <div class="node">
      <div class="marker">03</div>
      <div class="card">
        <h3>03. User Constraints</h3>
        <p>Unauthorized injection of data packets, structural subversion, or interference with concurrent nodes is strictly prohibited under global protocol standards.</p>
      </div>
    </div>
    <div class="node">
      <div class="marker">04</div>
      <div class="card">
        <h3>04. Termination Logic</h3>
        <p>The service reserves the right to sever any connection that exhibits anomalous behavior or violates the core integrity of the network architecture.</p>
      </div>
    </div>
  </div>
</div>`,
      css: `.terms-timeline { background: #ffffff; padding: 80px; border-radius: 32px; border: 1px solid #f1f5f9; font-family: sans-serif; text-align: left; }
.terms-timeline h2 { font-size: 48px; font-weight: 900; color: #111827; margin-bottom: 80px; text-align: center; text-transform: uppercase; font-style: italic; }
.timeline { position: relative; border-left: 8px solid #eef2ff; margin-left: 40px; padding-left: 64px; display: flex; flex-direction: column; gap: 96px; max-width: 896px; margin: 0 auto; }
.node { position: relative; }
.marker { position: absolute; left: -108px; top: 0; width: 80px; height: 80px; background: #4f46e5; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; color: #ffffff; font-size: 24px; box-shadow: 0 20px 25px -5px rgba(79, 70, 229, 0.2); border: 4px solid #ffffff; }
.card { background: #f9fafb; padding: 40px; border-radius: 40px; border: 1px solid #f3f4f6; }
.card h3 { font-size: 30px; font-weight: 900; color: #111827; margin-bottom: 16px; text-transform: uppercase; font-style: italic; }
.card p { color: #6b7280; font-size: 20px; line-height: 1.6; font-style: italic; }`
    },
    { 
      id: 'split', 
      title: '06. High-Contrast Matrix Split', 
      component: <TermsSplit />, 
      jsx: `export const TermsSplit = () => (
  <div className="flex bg-slate-900 rounded-[2.5rem] overflow-hidden text-white font-sans text-left">
    <div className="w-2/5 bg-indigo-600 p-20 flex flex-col justify-between">
      <h1 className="text-6xl font-black uppercase italic leading-[0.8] tracking-tighter">Secure <br/> <span class="text-white/50">Terms.</span></h1>
      <div class="w-16 h-16 bg-white rounded-full"></div>
    </div>
    <div className="w-3/5 p-20 overflow-y-auto space-y-16 bg-black/50 backdrop-blur-3xl">
      {TERMS_SECTIONS.map((item, i) => (
        <div>
          <div class="text-indigo-500 text-xs font-mono mb-4 uppercase tracking-[0.4em] font-black italic text-left">Node_Sequence_0{i+1}</div>
          <h3 class="text-4xl font-black uppercase tracking-tight italic text-left">{item.title}</h3>
          <p class="text-slate-400 text-xl italic border-l-4 border-indigo-600/50 pl-8 text-left">{item.content}</p>
        </div>
      ))}
    </div>
  </div>
);`,
      html: `<div class="terms-split">
  <div class="sidebar">
    <div class="header">
      <h1>Secure <br> <span>Terms.</span></h1>
      <p class="meta">System_Protocol_Authorized</p>
    </div>
    <div class="indicator"></div>
  </div>
  <div class="main-content">
    <div class="item">
      <div class="id">Node_Sequence_01</div>
      <h3>01. Acceptance of Protocol</h3>
      <p>By accessing the node, you acknowledge full alignment with the structural logic defined herein. Deviation from defined protocols may result in immediate termination of the secure link.</p>
    </div>
    <div class="item">
      <div class="id">Node_Sequence_02</div>
      <h3>02. Privacy Architecture</h3>
      <p>Data encryption is handled at the network edge. We do not persist identifiable user payloads in plaintext. Your identity remains an encrypted node within the matrix.</p>
    </div>
    <div class="item">
      <div class="id">Node_Sequence_03</div>
      <h3>03. User Constraints</h3>
      <p>Unauthorized injection of data packets, structural subversion, or interference with concurrent nodes is strictly prohibited under global protocol standards.</p>
    </div>
    <div class="item">
      <div class="id">Node_Sequence_04</div>
      <h3>04. Termination Logic</h3>
      <p>The service reserves the right to sever any connection that exhibits anomalous behavior or violates the core integrity of the network architecture.</p>
    </div>
  </div>
</div>`,
      css: `.terms-split { display: flex; flex-direction: column; background: #0f172a; border-radius: 40px; overflow: hidden; font-family: sans-serif; text-align: left; }
@media (min-width: 768px) { .terms-split { flex-direction: row; height: 600px; } }
.sidebar { width: 100%; background: #4f46e5; padding: 64px; display: flex; flex-direction: column; justify-content: space-between; }
@media (min-width: 768px) { .sidebar { width: 40%; } }
.sidebar h1 { font-size: 64px; font-weight: 900; color: #ffffff; line-height: 0.8; text-transform: uppercase; font-style: italic; letter-spacing: -0.05em; }
.sidebar h1 span { opacity: 0.5; }
.sidebar .meta { color: #e0e7ff; font-size: 12px; text-transform: uppercase; letter-spacing: 0.2em; font-weight: 900; margin-top: 24px; font-style: italic; opacity: 0.6; }
.indicator { width: 64px; height: 64px; background: #ffffff; border-radius: 50%; margin-top: 48px; }
.main-content { flex: 1; padding: 64px; overflow-y: auto; background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(20px); display: flex; flex-direction: column; gap: 64px; }
.item .id { color: #6366f1; font-size: 10px; font-family: monospace; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 16px; font-style: italic; }
.item h3 { color: #ffffff; font-size: 40px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.025em; font-style: italic; margin-bottom: 24px; }
.item p { color: #94a3b8; font-size: 20px; line-height: 1.6; font-style: italic; border-left: 4px solid rgba(99, 102, 241, 0.5); padding-left: 32px; }`
    },
    { 
      id: 'glass', 
      title: '07. Premium Crystal Glass Hub', 
      component: <TermsGlass />, 
      jsx: `export const TermsGlass = () => (
  <div className="bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 p-16 flex items-center justify-center font-sans text-left">
    <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-16 rounded-[4rem] shadow-2xl max-w-5xl w-full text-center">
      <h2 className="text-6xl font-black text-white uppercase italic mb-20">Crystal_Law</h2>
      <div className="grid grid-cols-2 gap-12 text-left">
        {TERMS_SECTIONS.map((item) => (
          <div class="bg-white/5 border border-white/10 p-12 rounded-[3rem]">
            <h3 class="text-2xl font-black text-white uppercase italic mb-4">{item.title}</h3>
            <p class="text-white/50">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);`,
      html: `<div class="terms-glass">
  <div class="glass-card">
    <h2>Crystal_Law</h2>
    <div class="grid">
      <div class="item">
        <h3>01. Acceptance of Protocol</h3>
        <p>By accessing the node, you acknowledge full alignment with the structural logic defined herein. Deviation from defined protocols may result in immediate termination of the secure link.</p>
      </div>
      <div class="item">
        <h3>02. Privacy Architecture</h3>
        <p>Data encryption is handled at the network edge. We do not persist identifiable user payloads in plaintext. Your identity remains an encrypted node within the matrix.</p>
      </div>
      <div class="item">
        <h3>03. User Constraints</h3>
        <p>Unauthorized injection of data packets, structural subversion, or interference with concurrent nodes is strictly prohibited under global protocol standards.</p>
      </div>
      <div class="item">
        <h3>04. Termination Logic</h3>
        <p>The service reserves the right to sever any connection that exhibits anomalous behavior or violates the core integrity of the network architecture.</p>
      </div>
    </div>
  </div>
</div>`,
      css: `.terms-glass { min-height: 600px; background: linear-gradient(to top right, #9333ea, #4f46e5, #3b82f6); padding: 64px; border-radius: 64px; display: flex; align-items: center; justify-content: center; font-family: sans-serif; text-align: left; box-sizing: border-box; }
.glass-card { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 64px; padding: 64px; width: 100%; max-width: 1024px; text-align: center; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); }
.glass-card h2 { font-size: 64px; font-weight: 900; color: #ffffff; text-transform: uppercase; margin-bottom: 80px; font-style: italic; letter-spacing: -0.05em; }
.grid { display: grid; grid-template-columns: 1fr; gap: 48px; }
@media (min-width: 768px) { .grid { grid-template-columns: repeat(2, 1fr); } }
.item { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 48px; border-radius: 48px; transition: all 0.3s; text-align: left; }
.item:hover { background: rgba(255, 255, 255, 0.1); }
.item h3 { font-size: 24px; font-weight: 900; color: #ffffff; text-transform: uppercase; margin-bottom: 16px; font-style: italic; letter-spacing: -0.02em; }
.item p { color: rgba(255, 255, 255, 0.5); font-size: 18px; line-height: 1.6; font-style: italic; }`
    },
    { 
      id: 'brutalist', 
      title: '08. Gold Standard Brutalist', 
      component: <TermsBrutalist />, 
      jsx: `export const TermsBrutalist = () => (
  <div className="bg-indigo-600 p-16 border-[12px] border-black rounded-[4rem] font-sans shadow-[30px_30px_0_0_#000] text-left">
    <h1 className="text-9xl font-black uppercase mb-20 italic bg-white text-black px-8 py-4 inline-block tracking-tighter">Terms!</h1>
    <div className="grid grid-cols-2 gap-16">
      {TERMS_SECTIONS.map((item) => (
        <div class="bg-black text-white border-8 border-black p-12 shadow-[20px_20px_0_0_#facc15] text-left">
          <h3 class="text-4xl font-black uppercase mb-8 border-b-8 border-white pb-6 italic">{item.title}</h3>
          <p class="text-white/60 text-2xl font-black lowercase">{item.content}</p>
        </div>
      ))}
    </div>
  </div>
);`,
      html: `<div class="terms-brutalist">
  <h1>Terms!</h1>
  <div class="grid">
    <div class="card">
      <h3>01. Acceptance of Protocol</h3>
      <p>By accessing the node, you acknowledge full alignment with the structural logic defined herein. Deviation from defined protocols may result in immediate termination of the secure link.</p>
    </div>
    <div class="card">
      <h3>02. Privacy Architecture</h3>
      <p>Data encryption is handled at the network edge. We do not persist identifiable user payloads in plaintext. Your identity remains an encrypted node within the matrix.</p>
    </div>
    <div class="card">
      <h3>03. User Constraints</h3>
      <p>Unauthorized injection of data packets, structural subversion, or interference with concurrent nodes is strictly prohibited under global protocol standards.</p>
    </div>
    <div class="card">
      <h3>04. Termination Logic</h3>
      <p>The service reserves the right to sever any connection that exhibits anomalous behavior or violates the core integrity of the network architecture.</p>
    </div>
  </div>
</div>`,
      css: `.terms-brutalist { background: #4f46e5; padding: 64px; border: 12px solid #000000; border-radius: 64px; font-family: sans-serif; box-shadow: 30px 30px 0 0 #000000; text-align: left; box-sizing: border-box; }
.terms-brutalist h1 { font-size: 120px; font-weight: 900; color: #000000; background: #ffffff; display: inline-block; padding: 16px 32px; margin: 0 0 80px 0; text-transform: uppercase; font-style: italic; letter-spacing: -0.05em; line-height: 0.7; }
.grid { display: grid; grid-template-columns: 1fr; gap: 64px; }
@media (min-width: 768px) { .grid { grid-template-columns: repeat(2, 1fr); } }
.card { background: #000000; border: 8px solid #000000; padding: 48px; box-shadow: 20px 20px 0 0 #facc15; transition: all 0.2s; color: #ffffff; }
.card:hover { transform: translate(8px, 8px); box-shadow: none; }
.card h3 { font-size: 40px; font-weight: 900; text-transform: uppercase; margin-bottom: 32px; border-bottom: 8px solid #ffffff; padding-bottom: 24px; font-style: italic; }
.card p { color: rgba(255, 255, 255, 0.6); font-size: 24px; font-weight: 900; line-height: 1.1; font-style: italic; text-transform: lowercase; }`
    },
    { 
      id: 'cyber', 
      title: '09. Cyber Web3 Protocol', 
      component: <TermsCyber />, 
      jsx: `export const TermsCyber = () => (
  <div className="bg-black p-20 rounded-3xl border-4 border-indigo-500/30 font-mono text-left italic font-bold">
    <h2 className="text-6xl font-black text-indigo-400 mb-20 uppercase tracking-[0.2em]">MANIFESTO_v4.2</h2>
    <div className="space-y-20">
      {TERMS_SECTIONS.map((item, i) => (
        <div class="border-l-4 border-indigo-500/20 pl-12">
          <div class="text-indigo-500/40 mb-6 text-xs tracking-[0.6em] uppercase">Security_Layer_0{i+1}</div>
          <h3 class="text-4xl font-black text-white mb-6 uppercase tracking-tighter">{item.title}</h3>
          <p class="text-indigo-100/40 leading-relaxed text-xl uppercase max-w-3xl">{item.content}</p>
        </div>
      ))}
    </div>
  </div>
);`,
      html: `<div class="terms-cyber">
  <div class="scan-line"></div>
  <h2>MANIFESTO_v4.2</h2>
  <div class="stack">
    <div class="item">
      <div class="node">Security_Layer_01</div>
      <h3>01. Acceptance of Protocol</h3>
      <p>By accessing the node, you acknowledge full alignment with the structural logic defined herein. Deviation from defined protocols may result in immediate termination of the secure link.</p>
    </div>
    <div class="item">
      <div class="node">Security_Layer_02</div>
      <h3>02. Privacy Architecture</h3>
      <p>Data encryption is handled at the network edge. We do not persist identifiable user payloads in plaintext. Your identity remains an encrypted node within the matrix.</p>
    </div>
    <div class="item">
      <div class="node">Security_Layer_03</div>
      <h3>03. User Constraints</h3>
      <p>Unauthorized injection of data packets, structural subversion, or interference with concurrent nodes is strictly prohibited under global protocol standards.</p>
    </div>
    <div class="item">
      <div class="node">Security_Layer_04</div>
      <h3>04. Termination Logic</h3>
      <p>The service reserves the right to sever any connection that exhibits anomalous behavior or violates the core integrity of the network architecture.</p>
    </div>
  </div>
</div>`,
      css: `.terms-cyber { background: #000000; padding: 80px; border-radius: 24px; border: 4px solid rgba(79, 70, 229, 0.3); font-family: monospace; font-style: italic; font-weight: 800; position: relative; overflow: hidden; text-align: left; }
.scan-line { position: absolute; top: 0; left: 0; width: 100%; h: 1px; background: rgba(79, 70, 229, 0.5); animation: scan 4s linear infinite; }
@keyframes scan { 0% { top: 0; } 100% { top: 100%; } }
.terms-cyber h2 { font-size: 64px; font-weight: 900; color: #818cf8; margin-bottom: 80px; text-transform: uppercase; letter-spacing: 0.2em; }
.stack { display: flex; flex-direction: column; gap: 80px; }
.item { border-left: 4px solid rgba(79, 70, 229, 0.2); padding-left: 48px; transition: border-color 0.3s; }
.item:hover { border-color: #818cf8; }
.node { color: rgba(79, 70, 229, 0.4); font-size: 12px; tracking: 0.6em; margin-bottom: 24px; text-transform: uppercase; }
.item h3 { font-size: 36px; font-weight: 900; color: #ffffff; margin-bottom: 24px; text-transform: uppercase; letter-spacing: -0.05em; }
.item p { color: rgba(224, 231, 255, 0.4); font-size: 20px; line-height: 1.6; text-transform: uppercase; max-width: 768px; }`
    },
    { 
      id: 'neo', 
      title: '10. Tactile Law Protocol', 
      component: <TermsNeo />, 
      jsx: `export const TermsNeo = () => (
  <div className="bg-[#e0e5ec] p-24 rounded-[5rem] shadow-[30px_30px_60px_#bebebe,-30px_-30px_60px_#ffffff] text-center font-sans">
    <h2 className="text-6xl font-black text-slate-800 mb-24 uppercase tracking-tighter italic">Tactile Law</h2>
    <div className="grid grid-cols-2 gap-16 max-w-5xl mx-auto text-left">
      {TERMS_SECTIONS.map((item) => (
        <div class="bg-[#e0e5ec] p-12 rounded-[50px] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]">
          <h3 class="text-3xl font-black text-slate-700 uppercase italic mb-6">{item.title}</h3>
          <p class="text-xl text-slate-500 font-medium italic">{item.content}</p>
        </div>
      ))}
    </div>
  </div>
);`,
      html: `<div class="terms-neo">
  <h2>Tactile Law</h2>
  <div class="grid">
    <div class="neo-card">
      <h3>01. Acceptance of Protocol</h3>
      <p>By accessing the node, you acknowledge full alignment with the structural logic defined herein. Deviation from defined protocols may result in immediate termination of the secure link.</p>
    </div>
    <div class="neo-card">
      <h3>02. Privacy Architecture</h3>
      <p>Data encryption is handled at the network edge. We do not persist identifiable user payloads in plaintext. Your identity remains an encrypted node within the matrix.</p>
    </div>
    <div class="neo-card">
      <h3>03. User Constraints</h3>
      <p>Unauthorized injection of data packets, structural subversion, or interference with concurrent nodes is strictly prohibited under global protocol standards.</p>
    </div>
    <div class="neo-card">
      <h3>04. Termination Logic</h3>
      <p>The service reserves the right to sever any connection that exhibits anomalous behavior or violates the core integrity of the network architecture.</p>
    </div>
  </div>
</div>`,
      css: `.terms-neo { background: #e0e5ec; padding: 96px; border-radius: 80px; font-family: sans-serif; text-align: center; box-shadow: 30px 30px 60px #bebebe, -30px -30px 60px #ffffff; box-sizing: border-box; }
.terms-neo h2 { font-size: 64px; font-weight: 900; color: #1e293b; text-transform: uppercase; margin-bottom: 96px; font-style: italic; letter-spacing: -0.05em; }
.grid { max-width: 1024px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 64px; }
@media (min-width: 768px) { .grid { grid-template-columns: repeat(2, 1fr); } }
.neo-card { background: #e0e5ec; padding: 48px; border-radius: 50px; box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff; text-align: left; }
.neo-card h3 { font-size: 30px; font-weight: 900; color: #334155; text-transform: uppercase; margin-bottom: 24px; font-style: italic; }
.neo-card p { font-size: 20px; color: #64748b; line-height: 1.6; font-style: italic; font-weight: 500; }`
    }
  ];

  return (
    <div className="container overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-64 text-gray-900">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-6xl font-black text-slate-950 mb-6 tracking-tighter uppercase italic leading-none">Terms_Gallery</h1>
        <p className="text-slate-500 font-bold text-xl italic lowercase">High-fidelity legal orchestration for the modern matrix.</p>
      </div>

      <div className="space-y-32 max-w-7xl mx-auto">
        {sections.map((section) => (
          <section key={section.id} className="bg-white p-4 rounded-xl shadow-lg relative group border border-slate-200">
            <div className="absolute top-4 right-4 z-40 opacity-0 group-hover:opacity-100 transition-opacity">
              <CopyButton 
                jsxCode={section.jsx}
                htmlCode={section.html}
                cssCode={section.css}
              />
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block text-center mb-8 italic text-black">
              {section.title}
            </span>
            {section.component}
          </section>
        ))}
      </div>
    </div>
  );
};

export default TermsGallery;