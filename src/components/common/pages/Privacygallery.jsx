import React, { useState } from 'react';
import CopyButton from '../CopyButton';

// --- Privacy Data ---
const PRIVACY_SECTIONS = [
  { id: '01', title: "Data Collection", content: "We collect information you provide directly to us when you create an account, update your profile, or communicate with us. This may include your name, email address, and any other information you choose to provide." },
  { id: '02', title: "Use of Information", content: "We use the information we collect to provide, maintain, and improve our services, such as to process transactions, send technical notices, and respond to your comments and questions." },
  { id: '03', title: "Sharing of Data", content: "We do not share your personal information with third parties except as described in this policy, such as with your consent or with service providers who perform work on our behalf." },
  { id: '04', title: "Security Standards", content: "We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction." },
];

// --- Original High-Fidelity Variants ---

export const PrivacyStandard = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-12 h-auto md:h-[600px] overflow-hidden font-sans text-left">
    <div className="w-full md:w-1/4 flex-shrink-0 border-r border-gray-100 pr-6">
      <div className="sticky top-0">
        <div className="flex items-center gap-2 mb-8 text-blue-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          <span className="font-bold text-lg italic uppercase tracking-tight">Privacy Center</span>
        </div>
        <ul className="space-y-4 text-sm text-gray-500">
          {PRIVACY_SECTIONS.map((item, i) => (
            <li key={item.id} className={`cursor-pointer hover:text-blue-600 transition-colors ${i === 0 ? 'text-blue-600 font-medium bg-blue-50 px-3 py-2 rounded-lg' : 'px-3 py-2'}`}>0{i+1}. {item.title}</li>
          ))}
        </ul>
      </div>
    </div>
    <div className="w-full md:w-3/4 overflow-y-auto pr-4">
      <h1 className="text-4xl font-black text-gray-900 mb-2 uppercase tracking-tighter italic text-left">Privacy Policy</h1>
      <p className="text-gray-400 mb-10 text-lg italic lowercase font-medium text-left">Your privacy is important to us.</p>
      <div className="space-y-12">
        {PRIVACY_SECTIONS.map((item, i) => (
          <div key={item.id} className="border-b border-gray-50 pb-8 last:border-0 text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase">0{i+1}. {item.title}</h3>
            <p className="text-gray-500 leading-relaxed text-lg">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const PrivacyCards = () => (
  <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] h-auto md:h-[600px] overflow-y-auto font-sans text-left">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter italic uppercase">Privacy Framework</h2>
        <div className="w-20 h-2 bg-indigo-600 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PRIVACY_SECTIONS.map((item, i) => (
          <div key={item.id} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all group">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase italic">0{i+1}. {item.title}</h3>
            <p className="text-slate-500 leading-relaxed italic font-medium">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const PrivacyAccordion = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="bg-white p-8 md:p-16 rounded-3xl border border-gray-100 h-auto md:h-[600px] overflow-y-auto font-sans text-left">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter italic">Legal_FAQ</h2>
        <div className="space-y-6">
          {PRIVACY_SECTIONS.map((item, i) => (
            <div key={item.id} className={`border-4 rounded-[2rem] overflow-hidden transition-all ${active === i ? 'border-blue-500 bg-blue-50/20' : 'border-gray-50'}`}>
              <button onClick={() => setActive(active === i ? -1 : i)} className="w-full flex justify-between items-center p-8 text-left outline-none">
                <span className={`text-xl font-bold uppercase italic ${active === i ? 'text-blue-600' : 'text-gray-700'}`}>0{i+1}. {item.title}</span>
                <span className={`text-2xl transition-transform ${active === i ? 'rotate-180 text-blue-600' : 'text-gray-300'}`}>▼</span>
              </button>
              {active === i && (
                <div className="px-8 pb-10 text-gray-500 text-lg leading-relaxed text-left italic border-t border-blue-100/50 pt-6">{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const PrivacyMinimal = () => (
  <div className="bg-[#f8f9fa] p-12 md:p-24 rounded-[3rem] h-auto md:h-[600px] overflow-y-auto border border-gray-200 font-sans text-left">
    <div className="max-w-2xl mx-auto">
      <h1 className="text-8xl font-black text-black mb-24 tracking-tighter uppercase italic leading-none border-b-8 border-black pb-8">Privacy.</h1>
      <div className="space-y-24">
        {PRIVACY_SECTIONS.map((item, i) => (
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

export const PrivacyTimeline = () => (
  <div className="bg-white p-8 md:p-20 rounded-3xl border border-gray-100 h-auto md:h-[600px] overflow-y-auto font-sans text-left">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-5xl font-black text-gray-900 mb-20 text-center uppercase tracking-tighter italic">Data Lifecycle</h2>
      <div className="relative border-l-8 border-blue-50 ml-10 pl-16 space-y-24 text-left">
        {PRIVACY_SECTIONS.map((item, i) => (
          <div key={item.id} className="relative">
            <div className="absolute -left-[108px] top-0 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center font-black text-white text-2xl shadow-xl shadow-blue-100 border-4 border-white">
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

export const PrivacySplit = () => (
  <div className="flex flex-col md:flex-row h-auto md:h-[600px] bg-slate-900 rounded-[2.5rem] overflow-hidden text-white font-sans text-left">
    <div className="w-full md:w-1/3 bg-black p-16 md:p-20 border-r border-slate-800 flex flex-col justify-between">
      <div>
        <h1 className="text-6xl font-black mb-6 uppercase italic leading-[0.8] tracking-tighter text-white">Secure <br/><span className="text-green-500">Node</span></h1>
        <p className="text-slate-400 text-lg uppercase tracking-widest text-xs font-black italic opacity-60">Privacy infrastructure.</p>
      </div>
      <div className="w-16 h-16 bg-green-500 rounded-full"></div>
    </div>
    <div className="w-full md:w-2/3 p-16 md:p-20 overflow-y-auto space-y-16 bg-black/50 backdrop-blur-3xl text-left">
      {PRIVACY_SECTIONS.map((item, i) => (
        <div key={item.id} className="text-left">
          <div className="text-green-500 text-xs font-mono mb-2 uppercase tracking-widest font-black italic">Section_0{i+1}</div>
          <h3 className="text-4xl font-black mb-6 uppercase tracking-tight italic">{item.title}</h3>
          <p className="text-slate-400 text-xl leading-relaxed italic border-l-4 border-green-500/30 pl-8">{item.content}</p>
        </div>
      ))}
    </div>
  </div>
);

export const PrivacyGlass = () => (
  <div className="min-h-[600px] w-full rounded-[4rem] overflow-hidden bg-gradient-to-br from-indigo-600 to-cyan-400 p-8 md:p-16 flex items-center justify-center font-sans text-left">
    <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-16 rounded-[4rem] shadow-2xl w-full max-w-5xl text-center">
      <h2 className="text-6xl font-black text-white uppercase mb-20 italic tracking-tighter">Crystal_Privacy</h2>
      <div className="grid md:grid-cols-2 gap-12 text-left">
        {PRIVACY_SECTIONS.map((item, i) => (
          <div key={item.id} className="bg-white/5 border border-white/10 p-12 rounded-[3rem] hover:bg-white/20 transition-all group text-left">
            <h3 className="text-2xl font-black text-white uppercase mb-4 tracking-tight italic group-hover:text-cyan-300 transition-colors">{item.title}</h3>
            <p className="text-white/50 leading-relaxed italic text-lg">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const PrivacyBrutalist = () => (
  <div className="bg-yellow-400 p-8 md:p-16 border-[12px] border-black rounded-[4rem] font-sans max-w-5xl mx-auto shadow-[30px_30px_0_0_#000] text-left">
    <h1 className="text-9xl font-black uppercase mb-20 leading-[0.7] italic bg-black text-white px-8 py-4 inline-block tracking-tighter">Privacy!</h1>
    <div className="grid md:grid-cols-2 gap-16 text-left">
      {PRIVACY_SECTIONS.map((item, i) => (
        <div key={item.id} className="bg-white border-8 border-black p-12 shadow-[20px_20px_0_0_#000] hover:translate-x-2 hover:translate-y-2 transition-all group text-left">
          <h3 className="text-4xl font-black uppercase mb-8 border-b-8 border-black pb-6 italic group-hover:bg-black group-hover:text-white px-4 transition-all">{item.title}</h3>
          <p className="text-black text-2xl font-black leading-tight italic lowercase">{item.content}</p>
        </div>
      ))}
    </div>
  </div>
);

export const PrivacyCyber = () => (
  <div className="bg-black p-8 md:p-20 rounded-3xl border-4 border-cyan-500/30 font-mono text-left relative overflow-hidden italic font-bold text-left">
    <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/50 animate-pulse"></div>
    <h2 className="text-6xl font-black text-cyan-400 mb-20 uppercase tracking-[0.2em] text-left">HANDSHAKE_PROTOCOL</h2>
    <div className="grid md:grid-cols-2 gap-12 text-left">
      {PRIVACY_SECTIONS.map((item, i) => (
        <div key={item.id} className="border-l-4 border-cyan-500/20 pl-12 hover:border-cyan-400 transition-all text-left">
          <div className="text-cyan-500/40 mb-6 text-xs tracking-[0.5em] uppercase">SYSTEM_NODE_0{i+1}</div>
          <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">{item.title}</h3>
          <p className="text-cyan-100/40 leading-relaxed text-xl uppercase">{item.content}</p>
        </div>
      ))}
    </div>
  </div>
);

export const PrivacyNeo = () => (
  <div className="bg-[#e0e5ec] p-12 md:p-24 rounded-[5rem] shadow-[30px_30px_60px_#bebebe,-30px_-30px_60px_#ffffff] font-sans text-center text-left">
    <h2 className="text-6xl font-black text-slate-800 mb-24 uppercase tracking-tighter italic">Soft Policy</h2>
    <div className="space-y-16 max-w-5xl mx-auto text-left">
      {PRIVACY_SECTIONS.map((item, i) => (
        <div key={item.id} className="bg-[#e0e5ec] p-12 rounded-[50px] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] hover:shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] transition-all text-left">
          <h3 className="text-3xl font-black text-slate-700 mb-6 uppercase italic tracking-tight">0{i+1}. {item.title}</h3>
          <p className="text-xl text-slate-500 leading-relaxed italic font-medium">{item.content}</p>
        </div>
      ))}
    </div>
  </div>
);

// --- Main Gallery Wrapper ---

const PrivacyGallery = () => {
  const sections = [
    { 
      id: 'standard', 
      title: '01. Standard SaaS Sidebar', 
      component: <PrivacyStandard />, 
      jsx: `export const PrivacyStandard = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-12 h-[600px] overflow-hidden">
    <div className="w-1/4 flex-shrink-0 border-r border-gray-100 pr-6">
      <h2 className="font-bold text-lg mb-8">Privacy Center</h2>
      <ul className="space-y-4">
        {PRIVACY_SECTIONS.map((item) => (
          <li class="text-sm text-gray-500">{item.title}</li>
        ))}
      </ul>
    </div>
    <div className="flex-1 overflow-y-auto">
      <h1>Privacy Policy</h1>
      <div className="space-y-12">
        {PRIVACY_SECTIONS.map((item) => (
          <div>
            <h3 class="font-bold">{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);`,
      html: `<div class="privacy-standard">
  <div class="sidebar">
    <div class="sidebar-header">
      <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
      <span>Privacy Center</span>
    </div>
    <ul class="nav">
      <li class="active">01. Data Collection</li>
      <li>02. Use of Information</li>
      <li>03. Sharing of Data</li>
      <li>04. Security Standards</li>
    </ul>
  </div>
  <div class="content">
    <h1>Privacy Policy</h1>
    <p class="subtitle">Your privacy is important to us.</p>
    <div class="sections">
      <div class="section">
        <h3>01. Data Collection</h3>
        <p>We collect information you provide directly to us when you create an account, update your profile, or communicate with us. This may include your name, email address, and any other information you choose to provide.</p>
      </div>
      <div class="section">
        <h3>02. Use of Information</h3>
        <p>We use the information we collect to provide, maintain, and improve our services, such as to process transactions, send technical notices, and respond to your comments and questions.</p>
      </div>
      <div class="section">
        <h3>03. Sharing of Data</h3>
        <p>We do not share your personal information with third parties except as described in this policy, such as with your consent or with service providers who perform work on our behalf.</p>
      </div>
      <div class="section">
        <h3>04. Security Standards</h3>
        <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
      </div>
    </div>
  </div>
</div>`,
      css: `.privacy-standard { background: #ffffff; padding: 32px; border-radius: 24px; border: 1px solid #f3f4f6; display: flex; flex-direction: column; gap: 48px; font-family: sans-serif; overflow: hidden; height: auto; text-align: left; }
@media (min-width: 768px) { .privacy-standard { flex-direction: row; height: 600px; } }
.sidebar { width: 100%; border-right: none; padding-right: 0; }
@media (min-width: 768px) { .sidebar { width: 25%; border-right: 1px solid #f3f4f6; padding-right: 24px; } }
.sidebar-header { display: flex; align-items: center; gap: 8px; color: #2563eb; font-weight: 700; font-size: 18px; margin-bottom: 32px; text-transform: uppercase; font-style: italic; }
.sidebar-header .icon { width: 24px; height: 24px; }
.nav { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 16px; }
.nav li { font-size: 14px; color: #6b7280; cursor: pointer; padding: 8px 12px; }
.nav li.active { color: #2563eb; font-weight: 500; background: #eff6ff; rounded: 8px; }
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
      component: <PrivacyCards />, 
      jsx: `export const PrivacyCards = () => (
  <div className="bg-slate-50 p-12 rounded-[3rem] font-sans">
    <h2 className="text-center text-5xl font-black mb-16 uppercase italic">Privacy Framework</h2>
    <div className="grid grid-cols-2 gap-8">
      {PRIVACY_SECTIONS.map((item) => (
        <div class="bg-white p-10 rounded-[2.5rem] border border-slate-100">
          <h3 class="text-2xl font-bold uppercase italic">{item.title}</h3>
          <p class="text-slate-500">{item.content}</p>
        </div>
      ))}
    </div>
  </div>
);`,
      html: `<div class="privacy-cards">
  <div class="header">
    <h2>Privacy Framework</h2>
    <div class="bar"></div>
  </div>
  <div class="grid">
    <div class="card">
      <h3>01. Data Collection</h3>
      <p>We collect information you provide directly to us when you create an account, update your profile, or communicate with us. This may include your name, email address, and any other information you choose to provide.</p>
    </div>
    <div class="card">
      <h3>02. Use of Information</h3>
      <p>We use the information we collect to provide, maintain, and improve our services, such as to process transactions, send technical notices, and respond to your comments and questions.</p>
    </div>
    <div class="card">
      <h3>03. Sharing of Data</h3>
      <p>We do not share your personal information with third parties except as described in this policy, such as with your consent or with service providers who perform work on our behalf.</p>
    </div>
    <div class="card">
      <h3>04. Security Standards</h3>
      <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
    </div>
  </div>
</div>`,
      css: `.privacy-cards { background: #f8fafc; padding: 48px; border-radius: 48px; font-family: sans-serif; text-align: left; }
.header { text-align: center; margin-bottom: 64px; }
.header h2 { font-size: 48px; font-weight: 900; color: #0f172a; text-transform: uppercase; font-style: italic; }
.bar { width: 80px; height: 8px; background: #4f46e5; margin: 16px auto 0; border-radius: 999px; }
.grid { display: grid; grid-template-columns: 1fr; gap: 32px; max-width: 1024px; margin: 0 auto; }
@media (min-width: 768px) { .grid { grid-template-columns: repeat(2, 1fr); } }
.card { background: #ffffff; padding: 40px; border-radius: 40px; border: 1px solid #f1f5f9; transition: all 0.3s; }
.card:hover { transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1); }
.card h3 { font-size: 24px; font-weight: 700; color: #0f172a; margin-bottom: 16px; text-transform: uppercase; font-style: italic; }
.card p { color: #64748b; font-size: 18px; line-height: 1.6; font-style: italic; font-weight: 500; }`
    },
    { 
      id: 'accordion', 
      title: '03. Interactive Legal Accordion', 
      component: <PrivacyAccordion />, 
      jsx: `export const PrivacyAccordion = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="bg-white p-16 rounded-3xl border border-gray-100">
      <h2 className="text-4xl font-black mb-12 text-center uppercase italic">Legal_FAQ</h2>
      <div className="space-y-6">
        {PRIVACY_SECTIONS.map((item, i) => (
          <div key={item.id} class="border-4 rounded-[2rem]">
            <button onClick={() => setActive(i)} class="w-full p-8 text-left uppercase italic">{item.title}</button>
          </div>
        ))}
      </div>
    </div>
  );
};`,
      html: `<div class="privacy-accordion">
  <h2>Legal_FAQ</h2>
  <div class="list">
    <div class="item active">
      <button>
        <span>01. Data Collection</span>
        <span class="arrow">▼</span>
      </button>
      <div class="panel">
        <p>We collect information you provide directly to us when you create an account, update your profile, or communicate with us. This may include your name, email address, and any other information you choose to provide.</p>
      </div>
    </div>
    <div class="item">
      <button>
        <span>02. Use of Information</span>
        <span class="arrow">▼</span>
      </button>
      <div class="panel">
        <p>We use the information we collect to provide, maintain, and improve our services, such as to process transactions, send technical notices, and respond to your comments and questions.</p>
      </div>
    </div>
    <div class="item">
      <button>
        <span>03. Sharing of Data</span>
        <span class="arrow">▼</span>
      </button>
      <div class="panel">
        <p>We do not share your personal information with third parties except as described in this policy, such as with your consent or with service providers who perform work on our behalf.</p>
      </div>
    </div>
    <div class="item">
      <button>
        <span>04. Security Standards</span>
        <span class="arrow">▼</span>
      </button>
      <div class="panel">
        <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
      </div>
    </div>
  </div>
</div>`,
      css: `.privacy-accordion { background: #ffffff; padding: 64px; border-radius: 32px; border: 1px solid #f1f5f9; font-family: sans-serif; text-align: center; }
.privacy-accordion h2 { font-size: 36px; font-weight: 900; color: #111827; margin-bottom: 48px; text-transform: uppercase; font-style: italic; }
.list { max-width: 768px; margin: 0 auto; display: flex; flex-direction: column; gap: 24px; }
.item { border: 4px solid #f9fafb; border-radius: 32px; overflow: hidden; transition: all 0.3s; text-align: left; }
.item.active { border-color: #3b82f6; background: rgba(59, 130, 246, 0.05); }
button { width: 100%; border: none; background: transparent; padding: 32px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; }
button span:first-child { font-size: 20px; font-weight: 800; color: #1e293b; text-transform: uppercase; font-style: italic; }
.arrow { font-size: 20px; color: #94a3b8; transition: transform 0.3s; }
.item.active .arrow { transform: rotate(180deg); color: #3b82f6; }
.panel { padding: 0 32px 32px; }
.item:not(.active) .panel { display: none; }
.panel p { color: #6b7280; font-size: 18px; line-height: 1.6; font-style: italic; font-weight: 500; }`
    },
    { 
      id: 'minimal', 
      title: '04. Bauhaus Typography Suite', 
      component: <PrivacyMinimal />, 
      jsx: `export const PrivacyMinimal = () => (
  <div className="bg-[#f8f9fa] p-24 rounded-[3rem] text-left">
    <h1 className="text-8xl font-black uppercase italic border-b-8 border-black pb-8">Privacy.</h1>
    <div className="space-y-24 mt-24">
      {PRIVACY_SECTIONS.map((item, i) => (
        <div class="relative">
          <span class="absolute -left-20 text-6xl font-black text-gray-100">0{i+1}</span>
          <h3 class="text-4xl font-black uppercase italic">{item.title}</h3>
          <p class="text-2xl text-gray-500 italic lowercase">{item.content}</p>
        </div>
      ))}
    </div>
  </div>
);`,
      html: `<div class="privacy-minimal">
  <div class="container">
    <h1 class="main-title">Privacy.</h1>
    <div class="sections">
      <div class="section">
        <span class="num">01</span>
        <h3 class="title">Data Collection</h3>
        <p class="text">We collect information you provide directly to us when you create an account, update your profile, or communicate with us. This may include your name, email address, and any other information you choose to provide.</p>
      </div>
      <div class="section">
        <span class="num">02</span>
        <h3 class="title">Use of Information</h3>
        <p class="text">We use the information we collect to provide, maintain, and improve our services, such as to process transactions, send technical notices, and respond to your comments and questions.</p>
      </div>
      <div class="section">
        <span class="num">03</span>
        <h3 class="title">Sharing of Data</h3>
        <p class="text">We do not share your personal information with third parties except as described in this policy, such as with your consent or with service providers who perform work on our behalf.</p>
      </div>
      <div class="section">
        <span class="num">04</span>
        <h3 class="title">Security Standards</h3>
        <p class="text">We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
      </div>
    </div>
  </div>
</div>`,
      css: `.privacy-minimal { background: #f8f9fa; padding: 96px; border-radius: 48px; font-family: sans-serif; text-align: left; }
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
      title: '05. Data Lifecycle Timeline', 
      component: <PrivacyTimeline />, 
      jsx: `export const PrivacyTimeline = () => (
  <div className="bg-white p-20 rounded-3xl border border-gray-100 text-left">
    <h2 className="text-5xl font-black mb-20 text-center uppercase italic">Data Lifecycle</h2>
    <div className="relative border-l-8 border-blue-50 ml-10 pl-16 space-y-24">
       {PRIVACY_SECTIONS.map((item, i) => (
         <div class="relative">
            <div class="absolute -left-[108px] w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center font-black text-white text-2xl shadow-xl">0{i+1}</div>
            <div class="bg-gray-50 p-10 rounded-[2.5rem]">
               <h3 class="text-3xl font-black uppercase italic">{item.title}</h3>
               <p class="text-gray-500 text-xl italic">{item.content}</p>
            </div>
         </div>
       ))}
    </div>
  </div>
);`,
      html: `<div class="privacy-timeline">
  <h2>Data Lifecycle</h2>
  <div class="timeline">
    <div class="node">
      <div class="marker">01</div>
      <div class="card">
        <h3>01. Data Collection</h3>
        <p>We collect information you provide directly to us when you create an account, update your profile, or communicate with us. This may include your name, email address, and any other information you choose to provide.</p>
      </div>
    </div>
    <div class="node">
      <div class="marker">02</div>
      <div class="card">
        <h3>02. Use of Information</h3>
        <p>We use the information we collect to provide, maintain, and improve our services, such as to process transactions, send technical notices, and respond to your comments and questions.</p>
      </div>
    </div>
    <div class="node">
      <div class="marker">03</div>
      <div class="card">
        <h3>03. Sharing of Data</h3>
        <p>We do not share your personal information with third parties except as described in this policy, such as with your consent or with service providers who perform work on our behalf.</p>
      </div>
    </div>
    <div class="node">
      <div class="marker">04</div>
      <div class="card">
        <h3>04. Security Standards</h3>
        <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
      </div>
    </div>
  </div>
</div>`,
      css: `.privacy-timeline { background: #ffffff; padding: 80px; border-radius: 32px; border: 1px solid #f1f5f9; font-family: sans-serif; text-align: left; }
.privacy-timeline h2 { font-size: 48px; font-weight: 900; color: #111827; margin-bottom: 80px; text-align: center; text-transform: uppercase; font-style: italic; }
.timeline { position: relative; border-left: 8px solid #eff6ff; margin-left: 40px; padding-left: 64px; display: flex; flex-direction: column; gap: 96px; max-width: 896px; margin: 0 auto; }
.node { position: relative; }
.marker { position: absolute; left: -108px; top: 0; width: 80px; height: 80px; background: #2563eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; color: #ffffff; font-size: 24px; box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.2); border: 4px solid #ffffff; }
.card { background: #f9fafb; padding: 40px; border-radius: 40px; border: 1px solid #f3f4f6; }
.card h3 { font-size: 30px; font-weight: 900; color: #111827; margin-bottom: 16px; text-transform: uppercase; font-style: italic; }
.card p { color: #6b7280; font-size: 20px; line-height: 1.6; font-style: italic; }`
    },
    { 
      id: 'split', 
      title: '06. Contrast Node Sidebar', 
      component: <PrivacySplit />, 
      jsx: `export const PrivacySplit = () => (
  <div className="flex bg-slate-900 rounded-[2.5rem] overflow-hidden text-white font-sans text-left">
    <div className="w-1/3 bg-black p-20 flex flex-col justify-between border-r border-slate-800">
      <h1 className="text-6xl font-black uppercase italic leading-[0.8] tracking-tighter">Secure <br/><span class="text-green-500">Node</span></h1>
      <div class="w-16 h-16 bg-green-500 rounded-full"></div>
    </div>
    <div className="w-2/3 p-20 overflow-y-auto space-y-16">
      {PRIVACY_SECTIONS.map((item, i) => (
        <div>
          <div class="text-green-500 text-xs font-mono mb-2 uppercase tracking-widest font-black">Section_0{i+1}</div>
          <h3 class="text-4xl font-black uppercase tracking-tight italic">{item.title}</h3>
          <p class="text-slate-400 text-xl italic border-l-4 border-green-500/30 pl-8">{item.content}</p>
        </div>
      ))}
    </div>
  </div>
);`,
      html: `<div class="privacy-split">
  <div class="sidebar">
    <div class="header">
      <h1>Secure <br> <span>Node</span></h1>
      <p class="meta">Privacy infrastructure.</p>
    </div>
    <div class="indicator"></div>
  </div>
  <div class="main-content">
    <div class="item">
      <div class="id">Section_01</div>
      <h3>01. Data Collection</h3>
      <p>We collect information you provide directly to us when you create an account, update your profile, or communicate with us. This may include your name, email address, and any other information you choose to provide.</p>
    </div>
    <div class="item">
      <div class="id">Section_02</div>
      <h3>02. Use of Information</h3>
      <p>We use the information we collect to provide, maintain, and improve our services, such as to process transactions, send technical notices, and respond to your comments and questions.</p>
    </div>
    <div class="item">
      <div class="id">Section_03</div>
      <h3>03. Sharing of Data</h3>
      <p>We do not share your personal information with third parties except as described in this policy, such as with your consent or with service providers who perform work on our behalf.</p>
    </div>
    <div class="item">
      <div class="id">Section_04</div>
      <h3>04. Security Standards</h3>
      <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
    </div>
  </div>
</div>`,
      css: `.privacy-split { display: flex; flex-direction: column; background: #0f172a; border-radius: 40px; overflow: hidden; font-family: sans-serif; text-align: left; }
@media (min-width: 768px) { .privacy-split { flex-direction: row; height: 600px; } }
.sidebar { width: 100%; background: #000000; padding: 64px; display: flex; flex-direction: column; justify-content: space-between; border-right: 1px solid #1e293b; }
@media (min-width: 768px) { .sidebar { width: 33.33%; } }
.sidebar h1 { font-size: 64px; font-weight: 900; color: #ffffff; line-height: 0.8; text-transform: uppercase; font-style: italic; letter-spacing: -0.05em; }
.sidebar h1 span { color: #22c55e; }
.sidebar .meta { color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.2em; font-weight: 900; margin-top: 24px; font-style: italic; opacity: 0.6; }
.indicator { width: 64px; height: 64px; background: #22c55e; border-radius: 50%; margin-top: 48px; }
.main-content { flex: 1; padding: 64px; overflow-y: auto; background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(20px); display: flex; flex-direction: column; gap: 64px; }
.item .id { color: #22c55e; font-size: 12px; font-family: monospace; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 8px; font-style: italic; }
.item h3 { color: #ffffff; font-size: 40px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.025em; font-style: italic; margin-bottom: 24px; }
.item p { color: #94a3b8; font-size: 20px; line-height: 1.6; font-style: italic; border-left: 4px solid rgba(34, 197, 94, 0.3); padding-left: 32px; }`
    },
    { 
      id: 'glass', 
      title: '07. Premium Crystal Glass', 
      component: <PrivacyGlass />, 
      jsx: `export const PrivacyGlass = () => (
  <div className="bg-gradient-to-br from-indigo-600 to-cyan-400 p-16 flex items-center justify-center font-sans text-left">
    <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-16 rounded-[4rem] shadow-2xl max-w-5xl w-full text-center">
      <h2 className="text-6xl font-black text-white uppercase italic mb-20">Crystal_Privacy</h2>
      <div className="grid grid-cols-2 gap-12 text-left">
        {PRIVACY_SECTIONS.map((item) => (
          <div class="bg-white/5 border border-white/10 p-12 rounded-[3rem]">
            <h3 class="text-2xl font-black text-white uppercase italic mb-4">{item.title}</h3>
            <p class="text-white/50">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);`,
      html: `<div class="privacy-glass">
  <div class="glass-card">
    <h2>Crystal_Privacy</h2>
    <div class="grid">
      <div class="item">
        <h3>01. Data Collection</h3>
        <p>We collect information you provide directly to us when you create an account, update your profile, or communicate with us. This may include your name, email address, and any other information you choose to provide.</p>
      </div>
      <div class="item">
        <h3>02. Use of Information</h3>
        <p>We use the information we collect to provide, maintain, and improve our services, such as to process transactions, send technical notices, and respond to your comments and questions.</p>
      </div>
      <div class="item">
        <h3>03. Sharing of Data</h3>
        <p>We do not share your personal information with third parties except as described in this policy, such as with your consent or with service providers who perform work on our behalf.</p>
      </div>
      <div class="item">
        <h3>04. Security Standards</h3>
        <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
      </div>
    </div>
  </div>
</div>`,
      css: `.privacy-glass { min-height: 600px; background: linear-gradient(to bottom right, #4f46e5, #06b6d4); padding: 64px; border-radius: 64px; display: flex; align-items: center; justify-content: center; font-family: sans-serif; text-align: left; }
.glass-card { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 64px; padding: 64px; width: 100%; max-width: 1024px; text-align: center; }
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
      component: <PrivacyBrutalist />, 
      jsx: `export const PrivacyBrutalist = () => (
  <div className="bg-yellow-400 p-16 border-[12px] border-black rounded-[4rem] font-sans shadow-[30px_30px_0_0_#000] text-left">
    <h1 className="text-9xl font-black uppercase mb-20 italic bg-black text-white px-8 py-4 inline-block tracking-tighter">Privacy!</h1>
    <div className="grid grid-cols-2 gap-16">
      {PRIVACY_SECTIONS.map((item) => (
        <div class="bg-white border-8 border-black p-12 shadow-[20px_20px_0_0_#000] text-left">
          <h3 class="text-4xl font-black uppercase mb-8 border-b-8 border-black pb-6 italic">{item.title}</h3>
          <p class="text-black text-2xl font-black lowercase">{item.content}</p>
        </div>
      ))}
    </div>
  </div>
);`,
      html: `<div class="privacy-brutalist">
  <h1>Privacy!</h1>
  <div class="grid">
    <div class="card">
      <h3>01. Data Collection</h3>
      <p>We collect information you provide directly to us when you create an account, update your profile, or communicate with us. This may include your name, email address, and any other information you choose to provide.</p>
    </div>
    <div class="card">
      <h3>02. Use of Information</h3>
      <p>We use the information we collect to provide, maintain, and improve our services, such as to process transactions, send technical notices, and respond to your comments and questions.</p>
    </div>
    <div class="card">
      <h3>03. Sharing of Data</h3>
      <p>We do not share your personal information with third parties except as described in this policy, such as with your consent or with service providers who perform work on our behalf.</p>
    </div>
    <div class="card">
      <h3>04. Security Standards</h3>
      <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
    </div>
  </div>
</div>`,
      css: `.privacy-brutalist { background: #facc15; padding: 64px; border: 12px solid #000000; border-radius: 64px; font-family: sans-serif; box-shadow: 30px 30px 0 0 #000000; text-align: left; }
.privacy-brutalist h1 { font-size: 120px; font-weight: 900; color: #ffffff; background: #000000; display: inline-block; padding: 16px 32px; margin: 0 0 80px 0; text-transform: uppercase; font-style: italic; letter-spacing: -0.05em; line-height: 0.7; }
.grid { display: grid; grid-template-columns: 1fr; gap: 64px; }
@media (min-width: 768px) { .grid { grid-template-columns: repeat(2, 1fr); } }
.card { background: #ffffff; border: 8px solid #000000; padding: 48px; shadow: 20px 20px 0 0 #000000; transition: all 0.2s; }
.card:hover { transform: translate(8px, 8px); box-shadow: none; }
.card h3 { font-size: 40px; font-weight: 900; text-transform: uppercase; margin-bottom: 32px; border-bottom: 8px solid #000000; padding-bottom: 24px; font-style: italic; }
.card p { color: #000000; font-size: 24px; font-weight: 900; line-height: 1.1; font-style: italic; text-transform: lowercase; }`
    },
    { 
      id: 'cyber', 
      title: '09. Cyber Web3 Protocol', 
      component: <PrivacyCyber />, 
      jsx: `export const PrivacyCyber = () => (
  <div className="bg-black p-20 rounded-3xl border-4 border-cyan-500/30 font-mono text-left italic font-bold">
    <h2 className="text-6xl font-black text-cyan-400 mb-20 uppercase tracking-[0.2em]">HANDSHAKE_PROTOCOL</h2>
    <div className="grid grid-cols-2 gap-12 text-left">
      {PRIVACY_SECTIONS.map((item, i) => (
        <div class="border-l-4 border-cyan-500/20 pl-12">
          <div class="text-cyan-500/40 mb-6 text-xs tracking-[0.5em] uppercase">SYSTEM_NODE_0{i+1}</div>
          <h3 class="text-4xl font-black text-white mb-6 uppercase tracking-tighter">{item.title}</h3>
          <p class="text-cyan-100/40 leading-relaxed text-xl uppercase">{item.content}</p>
        </div>
      ))}
    </div>
  </div>
);`,
      html: `<div class="privacy-cyber">
  <div class="scan-line"></div>
  <h2>HANDSHAKE_PROTOCOL</h2>
  <div class="grid">
    <div class="item">
      <div class="node">SYSTEM_NODE_01</div>
      <h3>01. Data Collection</h3>
      <p>We collect information you provide directly to us when you create an account, update your profile, or communicate with us. This may include your name, email address, and any other information you choose to provide.</p>
    </div>
    <div class="item">
      <div class="node">SYSTEM_NODE_02</div>
      <h3>02. Use of Information</h3>
      <p>We use the information we collect to provide, maintain, and improve our services, such as to process transactions, send technical notices, and respond to your comments and questions.</p>
    </div>
    <div class="item">
      <div class="node">SYSTEM_NODE_03</div>
      <h3>03. Sharing of Data</h3>
      <p>We do not share your personal information with third parties except as described in this policy, such as with your consent or with service providers who perform work on our behalf.</p>
    </div>
    <div class="item">
      <div class="node">SYSTEM_NODE_04</div>
      <h3>04. Security Standards</h3>
      <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
    </div>
  </div>
</div>`,
      css: `.privacy-cyber { background: #000000; padding: 80px; border-radius: 24px; border: 4px solid rgba(6, 182, 212, 0.3); font-family: monospace; font-style: italic; font-weight: 800; position: relative; overflow: hidden; text-align: left; }
.scan-line { position: absolute; top: 0; left: 0; width: 100%; h: 1px; background: rgba(6, 182, 212, 0.5); animation: scan 4s linear infinite; }
@keyframes scan { 0% { top: 0; } 100% { top: 100%; } }
.privacy-cyber h2 { font-size: 64px; font-weight: 900; color: #22d3ee; margin-bottom: 80px; text-transform: uppercase; letter-spacing: 0.2em; }
.grid { display: grid; grid-template-columns: 1fr; gap: 48px; }
@media (min-width: 768px) { .grid { grid-template-columns: repeat(2, 1fr); } }
.item { border-left: 4px solid rgba(6, 182, 212, 0.2); padding-left: 48px; transition: border-color 0.3s; }
.item:hover { border-color: #22d3ee; }
.node { color: rgba(34, 197, 94, 0.4); font-size: 12px; tracking: 0.5em; margin-bottom: 24px; }
.item h3 { font-size: 36px; font-weight: 900; color: #ffffff; margin-bottom: 24px; text-transform: uppercase; letter-spacing: -0.05em; }
.item p { color: rgba(207, 250, 254, 0.4); font-size: 20px; line-height: 1.6; text-transform: uppercase; }`
    },
    { 
      id: 'neo', 
      title: '10. Soft Tactile Protocol', 
      component: <PrivacyNeo />, 
      jsx: `export const PrivacyNeo = () => (
  <div className="bg-[#e0e5ec] p-24 rounded-[5rem] shadow-[30px_30px_60px_#bebebe,-30px_-30px_60px_#ffffff] text-center font-sans">
    <h2 className="text-6xl font-black text-slate-800 mb-24 uppercase tracking-tighter italic">Soft Policy</h2>
    <div className="space-y-16 max-w-5xl mx-auto">
      {PRIVACY_SECTIONS.map((item) => (
        <div class="bg-[#e0e5ec] p-12 rounded-[50px] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]">
          <h3 class="text-3xl font-black text-slate-700 uppercase italic mb-6">{item.title}</h3>
          <p class="text-xl text-slate-500 font-medium italic">{item.content}</p>
        </div>
      ))}
    </div>
  </div>
);`,
      html: `<div class="privacy-neo">
  <h2>Soft Policy</h2>
  <div class="container">
    <div class="neo-card">
      <h3>01. Data Collection</h3>
      <p>We collect information you provide directly to us when you create an account, update your profile, or communicate with us. This may include your name, email address, and any other information you choose to provide.</p>
    </div>
    <div class="neo-card">
      <h3>02. Use of Information</h3>
      <p>We use the information we collect to provide, maintain, and improve our services, such as to process transactions, send technical notices, and respond to your comments and questions.</p>
    </div>
    <div class="neo-card">
      <h3>03. Sharing of Data</h3>
      <p>We do not share your personal information with third parties except as described in this policy, such as with your consent or with service providers who perform work on our behalf.</p>
    </div>
    <div class="neo-card">
      <h3>04. Security Standards</h3>
      <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
    </div>
  </div>
</div>`,
      css: `.privacy-neo { background: #e0e5ec; padding: 96px; border-radius: 80px; font-family: sans-serif; text-align: center; box-shadow: 30px 30px 60px #bebebe, -30px -30px 60px #ffffff; }
.privacy-neo h2 { font-size: 64px; font-weight: 900; color: #1e293b; text-transform: uppercase; margin-bottom: 96px; font-style: italic; letter-spacing: -0.05em; }
.container { max-width: 1024px; margin: 0 auto; display: flex; flex-direction: column; gap: 64px; }
.neo-card { background: #e0e5ec; padding: 48px; border-radius: 50px; shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff; text-align: left; }
.neo-card h3 { font-size: 30px; font-weight: 900; color: #334155; text-transform: uppercase; margin-bottom: 24px; font-style: italic; }
.neo-card p { font-size: 20px; color: #64748b; line-height: 1.6; font-style: italic; font-weight: 500; }`
    }
  ];

  return (
    <div className="container overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-64 text-gray-900">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-6xl font-black text-slate-950 mb-6 tracking-tighter uppercase italic leading-none">Privacy_Gallery</h1>
        <p className="text-slate-500 font-bold text-xl italic lowercase">High-fidelity legal protocols for modern digital architects.</p>
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

export default PrivacyGallery;