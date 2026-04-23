import React, { useState } from 'react';
import CopyButton from '../CopyButton';

/**
 * Privacygallery.jsx
 * 
 * GOLD STANDARD UI SUITE
 * Pattern: Bold-Black-Italic Brutalist
 * 
 * Contains 10 High-Fidelity Privacy Policy Variants
 * Each with 100% Literal Code Export (JSX, HTML, CSS)
 */

// --- Standardized Privacy Protocol Data ---
const privacyProtocol = [
  { 
    id: "DATA_COLLECTION",
    title: "01. Signal_Acquisition", 
    content: "We collect specific signals you broadcast directly—account metadata, profile updates, and node communications. This includes identity strings, encryption hashes, and transaction logs necessary for protocol stability.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    )
  },
  { 
    id: "DATA_USAGE",
    title: "02. Logic_Execution", 
    content: "Acquired signals are utilized solely to maintain, optimize, and scale the neural mesh. This encompasses transaction verification, technical handshake notices, and automated response protocols for user-initiated queries.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    )
  },
  { 
    id: "DATA_SHARING",
    title: "03. Node_Distribution", 
    content: "Personal identification strings remain localized. We do not distribute private nodes to external entities. Sharing occurs only with verified subnet providers essential for executing infrastructure-level work on the matrix.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
    )
  },
  { 
    id: "DATA_SECURITY",
    title: "04. Firewall_Integrity", 
    content: "We implement multi-layer quantum-grade encryption to safeguard your signal against loss, unauthorized access, or logic alteration. Your data is protected by the primary firewall at all times.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    )
  }
];

// ==========================================
// 01. PRIVACY BRUTALIST (The Gold Standard)
// ==========================================
export const PrivacyBrutalist = () => (
  <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold">
    <div className="bg-yellow-400 border-[8px] border-black p-12 shadow-[20px_20px_0_0_#000] relative overflow-hidden text-left">
      <div className="absolute top-0 right-0 p-6 bg-black text-white font-mono text-[10px] uppercase tracking-widest rotate-90 translate-x-8 translate-y-8">
        V2.0_SECURE
      </div>
      <h1 className="text-7xl md:text-9xl font-black uppercase mb-12 tracking-tighter leading-none text-black">
        Privacy_ <br/> <span className="bg-black text-white px-4">Protocol.</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {privacyProtocol.map((item, i) => (
          <div key={i} className="bg-white border-4 border-black p-8 shadow-[12px_12px_0_0_#000] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
            <div className="w-16 h-16 bg-black text-yellow-400 flex items-center justify-center mb-6 border-4 border-black rotate-3">
              {item.icon}
            </div>
            <h3 className="text-3xl font-black uppercase mb-4 tracking-tight border-b-4 border-black pb-2">{item.title}</h3>
            <p className="text-black leading-tight text-xl">{item.content}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 pt-12 border-t-[8px] border-black flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-2xl font-black uppercase tracking-tighter italic text-black text-left">Questions? Contact_The_Admin_Node</p>
        <button className="bg-black text-white px-12 py-6 text-xl font-black uppercase tracking-widest hover:bg-white hover:text-black border-4 border-transparent hover:border-black transition-all">
          Accept_Protocol →
        </button>
      </div>
    </div>
  </div>
);

// ==========================================
// 02. PRIVACY SPLIT (Sidebars)
// ==========================================
export const PrivacySplit = () => (
  <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold">
    <div className="flex flex-col md:flex-row h-[700px] border-[8px] border-black bg-white shadow-[24px_24px_0_0_#000] overflow-hidden">
      <div className="w-full md:w-1/3 bg-black text-white p-12 flex flex-col justify-between border-r-[8px] border-black">
        <div className="text-left">
          <div className="w-20 h-20 bg-yellow-400 border-4 border-white flex items-center justify-center mb-8 rotate-12">
            <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <h2 className="text-5xl font-black uppercase mb-6 tracking-tighter leading-none">The_ <br/> Matrix_ <br/> Policy.</h2>
          <p className="text-gray-400 text-lg leading-tight uppercase">We believe you should have total control over your node signal.</p>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.5em] text-yellow-400 text-left">
          Last_Pulse: Oct_2024
        </div>
      </div>
      <div className="w-full md:w-2/3 p-12 overflow-y-auto text-left custom-scrollbar">
        <div className="space-y-16">
          {privacyProtocol.map((item, i) => (
            <div key={i}>
              <div className="text-xs font-black uppercase tracking-[0.4em] text-gray-300 mb-2">Section_0{i+1}</div>
              <h3 className="text-4xl font-black uppercase mb-6 tracking-tight text-black">{item.title.split('. ')[1]}</h3>
              <p className="text-xl text-gray-700 leading-tight border-l-[6px] border-black pl-6">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ==========================================
// 03. PRIVACY GLASS (Floating)
// ==========================================
export const PrivacyGlass = () => (
  <div className="w-full max-w-5xl mx-auto px-4 font-sans italic font-bold">
    <div className="relative p-20 rounded-[4rem] overflow-hidden bg-gradient-to-tr from-indigo-900 via-slate-900 to-black border-[6px] border-white/10 shadow-2xl">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-600/20 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="relative z-10 text-center">
        <h2 className="text-6xl md:text-8xl font-black text-white uppercase mb-16 tracking-tighter italic drop-shadow-2xl">
          Crystal_ <br/> <span className="text-blue-500">Security_</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {privacyProtocol.map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-3xl border-2 border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all group">
              <div className="text-blue-500 mb-6 group-hover:scale-125 transition-transform">{item.icon}</div>
              <h3 className="text-2xl font-black text-white uppercase mb-4 tracking-tight">{item.title}</h3>
              <p className="text-white/60 leading-tight italic">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ==========================================
// 04. PRIVACY TIMELINE (The Flow)
// ==========================================
export const PrivacyTimeline = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold">
    <div className="bg-white border-[8px] border-black p-12 shadow-[20px_20px_0_0_#000] text-center">
      <h2 className="text-6xl font-black uppercase mb-20 tracking-tighter italic border-b-[8px] border-black pb-8 text-black">The_Data_Journey</h2>
      <div className="relative border-l-[8px] border-black ml-4 md:ml-20 pl-12 space-y-20 text-left">
        {privacyProtocol.map((item, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-[64px] top-0 w-12 h-12 bg-yellow-400 border-[6px] border-black rounded-full flex items-center justify-center font-black text-black">
              {i+1}
            </div>
            <div className="bg-black text-white p-8 border-4 border-black shadow-[12px_12px_0_0_#facc15] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tight text-yellow-400">{item.title}</h3>
              <p className="text-xl leading-tight font-medium opacity-80">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ==========================================
// 05. PRIVACY CARDS (Matrix Grid)
// ==========================================
export const PrivacyCards = () => (
  <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
      <div className="md:col-span-2 bg-black text-white p-12 border-[8px] border-black mb-4 shadow-[16px_16px_0_0_#000]">
        <h2 className="text-6xl font-black uppercase tracking-tighter leading-none italic text-white text-left">Secure_Matrix_Protocol</h2>
        <p className="text-yellow-400 text-xl uppercase mt-4 text-left">High-fidelity signal protection standards.</p>
      </div>
      {privacyProtocol.map((item, i) => (
        <div key={i} className={`p-10 border-[6px] border-black shadow-[12px_12px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all ${i % 2 === 0 ? 'bg-white' : 'bg-yellow-400'}`}>
          <div className="flex justify-between items-start mb-10">
            <div className="w-16 h-16 bg-black text-white flex items-center justify-center border-4 border-black">
              {item.icon}
            </div>
            <span className="text-6xl opacity-20 font-black text-black">0{i+1}</span>
          </div>
          <h3 className="text-3xl font-black uppercase mb-6 tracking-tight border-b-4 border-black pb-2 text-black">{item.title.split('. ')[1]}</h3>
          <p className="text-xl leading-none font-black text-black">{item.content}</p>
        </div>
      ))}
    </div>
  </div>
);

// ==========================================
// 06. PRIVACY ACCORDION (Interactive)
// ==========================================
export const PrivacyAccordion = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold">
      <div className="bg-white border-[10px] border-black p-12 shadow-[24px_24px_0_0_#000]">
        <h2 className="text-7xl font-black uppercase mb-12 tracking-tighter italic text-center text-black">FAQ_PROTOCOL</h2>
        <div className="space-y-6">
          {privacyProtocol.map((item, i) => (
            <div key={i} className="border-4 border-black overflow-hidden transition-all text-left">
              <button 
                onClick={() => setActive(active === i ? -1 : i)}
                className={`w-full flex justify-between items-center p-8 text-left transition-all ${active === i ? 'bg-black text-white' : 'bg-white text-black hover:bg-yellow-400'}`}
              >
                <span className="text-2xl font-black uppercase tracking-tight">{item.title}</span>
                <span className={`text-4xl transition-transform duration-500 ${active === i ? 'rotate-180' : ''}`}>▼</span>
              </button>
              <div className={`transition-all duration-700 ease-in-out px-8 overflow-hidden ${active === i ? 'max-h-96 py-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-2xl leading-none font-black text-black italic">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 07. PRIVACY MINIMAL (Type-Focused)
// ==========================================
export const PrivacyMinimal = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold">
    <div className="bg-white p-16 border-[8px] border-black shadow-[16px_16px_0_0_#000] text-left">
      <div className="flex justify-between items-start border-b-[8px] border-black pb-10 mb-16">
        <h1 className="text-8xl font-black uppercase tracking-tighter leading-none italic text-black">PRIVACY. <br/> <span className="text-gray-300">CORE.</span></h1>
        <div className="text-right font-mono text-xs uppercase tracking-widest text-black">
          VER_2.1 <br/> OCT_24
        </div>
      </div>
      <div className="space-y-20">
        {privacyProtocol.map((item, i) => (
          <div key={i} className="group text-left">
            <span className="text-6xl font-black text-gray-100 group-hover:text-black transition-colors block mb-4">0{i+1}</span>
            <h3 className="text-4xl font-black uppercase mb-6 tracking-tight text-black italic">{item.title.split('. ')[1]}</h3>
            <p className="text-2xl leading-tight text-gray-600 font-medium lowercase italic">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ==========================================
// 08. PRIVACY FAQ (Question Based)
// ==========================================
export const PrivacyFAQ = () => (
  <div className="w-full max-w-5xl mx-auto px-4 font-sans italic font-bold">
    <div className="bg-indigo-600 border-[8px] border-black p-12 shadow-[20px_20px_0_0_#000] text-center">
      <h2 className="text-6xl font-black uppercase mb-4 tracking-tighter text-white italic">Node_Support_Center</h2>
      <p className="text-white/60 text-xl mb-16 uppercase tracking-widest">Everything you need to know about your signal protection.</p>
      <div className="grid gap-8 text-left">
        {privacyProtocol.map((item, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-8 items-start bg-white border-4 border-black p-10 hover:-translate-y-2 transition-all">
            <div className="flex-shrink-0 w-20 h-20 bg-black text-white border-4 border-black flex items-center justify-center font-black text-3xl italic">
              Q{i+1}
            </div>
            <div>
              <h3 className="text-3xl font-black text-black mb-4 uppercase tracking-tight italic">{item.title.split('. ')[1]}?</h3>
              <p className="text-xl text-gray-700 leading-tight font-black">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ==========================================
// 09. PRIVACY CYBER (Web3)
// ==========================================
export const PrivacyCyber = () => (
  <div className="w-full max-w-5xl mx-auto px-4 font-mono italic font-bold">
    <div className="bg-black border-4 border-cyan-500/30 p-12 rounded-2xl relative overflow-hidden text-left">
      <div className="absolute top-0 right-0 p-4 text-cyan-500/20 text-[60px] leading-none animate-pulse">01101</div>
      <h2 className="text-5xl font-black text-cyan-400 mb-12 tracking-tighter uppercase italic" style={{textShadow: "4px 4px 0px #06b6d433"}}>PROTOCOL_HANDSHAKE</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {privacyProtocol.map((item, i) => (
          <div key={i} className="border-2 border-cyan-500/20 p-8 hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all group">
            <div className="text-cyan-500/50 mb-6 group-hover:text-cyan-400 group-hover:animate-pulse uppercase tracking-[0.3em] text-[10px]">HANDSHAKE_NODE_0{i+1}</div>
            <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight">{item.title.split('. ')[1]}</h3>
            <p className="text-cyan-100/60 leading-relaxed text-sm uppercase tracking-tighter">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ==========================================
// 10. PRIVACY NEO (Tactile)
// ==========================================
export const PrivacyNeo = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold">
    <div className="bg-[#e0e5ec] p-16 rounded-[4rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center border border-white/20">
      <div className="w-24 h-24 mx-auto bg-[#e0e5ec] rounded-full shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] mb-12 flex items-center justify-center text-4xl text-gray-500">
        🛡️
      </div>
      <h2 className="text-6xl font-black text-slate-800 mb-4 tracking-tighter uppercase italic leading-none">Soft_Protocol</h2>
      <p className="text-slate-500 mb-20 text-xl font-medium lowercase">Tactile signal protection standards.</p>
      <div className="space-y-12 text-left">
        {privacyProtocol.map((item, i) => (
          <div key={i} className="bg-[#e0e5ec] p-10 rounded-[40px] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all">
            <h3 className="text-2xl font-black text-slate-700 mb-4 uppercase tracking-tight italic">{item.title}</h3>
            <p className="text-lg text-slate-500 leading-tight font-black italic">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ==========================================
// MASTER PRIVACY GALLERY WRAPPER
// ==========================================
const PrivacyGallery = () => {
  return (
    <div className="container overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-64">
      
      {/* --- HEADER --- */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-7xl font-black text-slate-950 mb-6 tracking-tighter uppercase italic leading-none">Privacy_Matrix_Suite</h1>
        <p className="text-slate-500 font-bold text-xl italic lowercase">High-fidelity legal protocols for the next generation of digital architects.</p>
      </div>

      <div className="space-y-32 max-w-7xl mx-auto">
        
        {/* 01. BRUTALIST MASTER */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/priv border border-slate-200">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/priv:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const PrivacyBrutalist = () => (
  <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold">
    <div className="bg-yellow-400 border-[8px] border-black p-12 shadow-[20px_20px_0_0_#000] relative overflow-hidden">
      <h1 className="text-7xl md:text-9xl font-black uppercase mb-12 tracking-tighter leading-none text-black">
        Privacy_ <br/> <span className="bg-black text-white px-4">Protocol.</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
        {[
          { title: "01. Signal_Acquisition", content: "We collect specific signals you broadcast directly—account metadata, profile updates, and node communications." },
          { title: "02. Logic_Execution", content: "Acquired signals are utilized solely to maintain, optimize, and scale the neural mesh." },
          { title: "03. Node_Distribution", content: "Personal identification strings remain localized. We do not distribute private nodes." },
          { title: "04. Firewall_Integrity", content: "We implement multi-layer quantum-grade encryption to safeguard your signal." }
        ].map((item, i) => (
          <div key={i} className="bg-white border-4 border-black p-8 shadow-[12px_12px_0_0_#000] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
            <h3 className="text-3xl font-black uppercase mb-4 tracking-tight border-b-4 border-black pb-2">{item.title}</h3>
            <p className="text-black leading-tight text-xl">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Brutalist Privacy Protocol -->
<div style="width: 100%; max-width: 1152px; margin: 0 auto; padding: 0 16px; font-family: sans-serif; font-style: italic; font-weight: 700;">
  <div style="background: #facc15; border: 8px solid black; padding: 48px; box-shadow: 20px 20px 0 0 #000; position: relative; text-align: left;">
    <h1 style="font-size: 80px; font-weight: 900; text-transform: uppercase; margin-bottom: 48px; letter-spacing: -0.05em; line-height: 0.9;">
      Privacy_<br><span style="background: black; color: white; padding: 0 16px;">Protocol.</span>
    </h1>
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 48px;">
      <div style="background: white; border: 4px solid black; padding: 32px; box-shadow: 12px 12px 0 0 #000;">
        <h3 style="font-size: 24px; font-weight: 900; text-transform: uppercase; margin-bottom: 16px; border-bottom: 4px solid black; padding-bottom: 8px;">01. Signal_Acquisition</h3>
        <p style="font-size: 18px; line-height: 1.2;">We collect specific signals you broadcast directly—account metadata and node communications.</p>
      </div>
      <div style="background: white; border: 4px solid black; padding: 32px; box-shadow: 12px 12px 0 0 #000;">
        <h3 style="font-size: 24px; font-weight: 900; text-transform: uppercase; margin-bottom: 16px; border-bottom: 4px solid black; padding-bottom: 8px;">02. Logic_Execution</h3>
        <p style="font-size: 18px; line-height: 1.2;">Acquired signals are utilized solely to maintain, optimize, and scale the neural mesh.</p>
      </div>
      <div style="background: white; border: 4px solid black; padding: 32px; box-shadow: 12px 12px 0 0 #000;">
        <h3 style="font-size: 24px; font-weight: 900; text-transform: uppercase; margin-bottom: 16px; border-bottom: 4px solid black; padding-bottom: 8px;">03. Node_Distribution</h3>
        <p style="font-size: 18px; line-height: 1.2;">Personal identification strings remain localized. We do not distribute private nodes.</p>
      </div>
      <div style="background: white; border: 4px solid black; padding: 32px; box-shadow: 12px 12px 0 0 #000;">
        <h3 style="font-size: 24px; font-weight: 900; text-transform: uppercase; margin-bottom: 16px; border-bottom: 4px solid black; padding-bottom: 8px;">04. Firewall_Integrity</h3>
        <p style="font-size: 18px; line-height: 1.2;">We implement multi-layer quantum-grade encryption to safeguard your signal.</p>
      </div>
    </div>
  </div>
</div>`}
              cssCode={`.brutalist-root { width: 100%; max-width: 1152px; margin: 0 auto; padding: 0 16px; font-family: sans-serif; font-style: italic; font-weight: 700; }
.brutalist-container { background: #facc15; border: 8px solid black; padding: 48px; box-shadow: 20px 20px 0 0 #000; position: relative; text-align: left; }
.brutalist-title { font-size: 80px; font-weight: 900; text-transform: uppercase; margin-bottom: 48px; letter-spacing: -0.05em; line-height: 0.9; }
.brutalist-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 48px; }
.brutalist-card { background: white; border: 4px solid black; padding: 32px; box-shadow: 12px 12px 0 0 #000; transition: all 0.2s ease; }
.brutalist-card:hover { transform: translate(4px, 4px); box-shadow: 8px 8px 0 0 #000; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black">01. Brutalist Master Protocol</span>
          <PrivacyBrutalist />
        </section>

        {/* 02. SPLIT SIDEBAR */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/priv border border-slate-200">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/priv:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const PrivacySplit = () => (
  <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold">
    <div className="flex flex-col md:flex-row h-[700px] border-[8px] border-black bg-white shadow-[24px_24px_0_0_#000] overflow-hidden">
      <div className="w-full md:w-1/3 bg-black text-white p-12 flex flex-col justify-between border-r-[8px] border-black text-left">
        <h2 className="text-5xl font-black uppercase mb-6 tracking-tighter leading-none text-white">The_Matrix_Policy.</h2>
      </div>
      <div className="w-full md:w-2/3 p-12 overflow-y-auto text-left">
        <div className="space-y-16">
          {[
            { id: "01", title: "Signal_Acquisition", content: "We collect specific signals you broadcast directly—account metadata." },
            { id: "02", title: "Logic_Execution", content: "Acquired signals are utilized solely to maintain the neural mesh." },
            { id: "03", title: "Node_Distribution", content: "Personal identification strings remain localized. Sharing occurs only with verified providers." },
            { id: "04", title: "Firewall_Integrity", content: "We implement multi-layer quantum-grade encryption to safeguard your signal." }
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-4xl font-black uppercase mb-6 tracking-tight text-black border-l-[6px] border-black pl-6">Section_\${item.id}</h3>
              <p className="text-xl text-gray-700 leading-tight">\${item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Split Sidebar Privacy -->
<div style="display: flex; height: 700px; border: 8px solid black; background: white; box-shadow: 24px 24px 0 0 #000; font-family: sans-serif; font-style: italic; font-weight: 700; overflow: hidden;">
  <div style="width: 33%; background: black; color: white; padding: 48px; border-right: 8px solid black; text-align: left;">
    <h2 style="font-size: 48px; font-weight: 900; text-transform: uppercase; line-height: 1;">The_<br>Matrix_<br>Policy.</h2>
  </div>
  <div style="width: 67%; padding: 48px; overflow-y: auto; text-align: left;">
    <div style="margin-bottom: 64px;">
      <h3 style="font-size: 36px; font-weight: 900; text-transform: uppercase; border-left: 6px solid black; padding-left: 24px;">Signal_Acquisition</h3>
      <p style="font-size: 20px; color: #374151; line-height: 1.2;">We collect specific signals you broadcast directly—account metadata.</p>
    </div>
    <div style="margin-bottom: 64px;">
      <h3 style="font-size: 36px; font-weight: 900; text-transform: uppercase; border-left: 6px solid black; padding-left: 24px;">Logic_Execution</h3>
      <p style="font-size: 20px; color: #374151; line-height: 1.2;">Acquired signals are utilized solely to maintain the neural mesh.</p>
    </div>
    <div style="margin-bottom: 64px;">
      <h3 style="font-size: 36px; font-weight: 900; text-transform: uppercase; border-left: 6px solid black; padding-left: 24px;">Node_Distribution</h3>
      <p style="font-size: 20px; color: #374151; line-height: 1.2;">Personal identification strings remain localized. Sharing occurs only with verified providers.</p>
    </div>
    <div style="margin-bottom: 64px;">
      <h3 style="font-size: 36px; font-weight: 900; text-transform: uppercase; border-left: 6px solid black; padding-left: 24px;">Firewall_Integrity</h3>
      <p style="font-size: 20px; color: #374151; line-height: 1.2;">We implement multi-layer quantum-grade encryption to safeguard your signal.</p>
    </div>
  </div>
</div>`}
              cssCode={`.split-root { display: flex; height: 700px; border: 8px solid black; background: white; box-shadow: 24px 24px 0 0 #000; font-family: sans-serif; font-style: italic; font-weight: 700; overflow: hidden; }
.sidebar { width: 33%; background: black; color: white; padding: 48px; border-right: 8px solid black; text-align: left; }
.content { width: 67%; padding: 48px; overflow-y: auto; text-align: left; }
.section-item { margin-bottom: 64px; }
.section-title { font-size: 36px; font-weight: 900; text-transform: uppercase; border-left: 6px solid black; padding-left: 24px; margin-bottom: 16px; }
.section-text { font-size: 20px; color: #374151; line-height: 1.2; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black">02. Split Matrix Sidebar</span>
          <PrivacySplit />
        </section>

        {/* 03. FLOATING GLASS */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/priv border border-slate-200">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/priv:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const PrivacyGlass = () => (
  <div className="w-full max-w-5xl mx-auto px-4 font-sans italic font-bold">
    <div className="relative p-20 rounded-[4rem] overflow-hidden bg-slate-900 border-[6px] border-white/10 shadow-2xl">
      <div className="relative z-10 text-center">
        <h2 className="text-6xl font-black text-white uppercase mb-16 tracking-tighter italic">Crystal_Security_</h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {[
            { t: "Signal_Acquisition", c: "We collect specific signals you broadcast directly—account metadata." },
            { t: "Logic_Execution", c: "Acquired signals are utilized solely to maintain the neural mesh." },
            { t: "Node_Distribution", c: "Personal identification strings remain localized. No external sharing." },
            { t: "Firewall_Integrity", c: "Multi-layer quantum-grade encryption safeguards your signal." }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-3xl border-2 border-white/10 p-10 rounded-[3rem]">
              <h3 className="text-2xl font-black text-white uppercase mb-4">\${item.t}</h3>
              <p className="text-white/60 italic">\${item.c}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Glassmorphic Privacy -->
<div style="background: #0f172a; padding: 80px; border-radius: 64px; border: 6px solid rgba(255,255,255,0.1); font-family: sans-serif; font-style: italic; font-weight: 700; text-align: center; position: relative; overflow: hidden;">
  <h2 style="font-size: 64px; color: white; text-transform: uppercase; margin-bottom: 64px;">Crystal_Security_</h2>
  <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; text-align: left;">
    <div style="background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); border: 2px solid rgba(255,255,255,0.1); padding: 40px; border-radius: 48px;">
      <h3 style="font-size: 24px; color: white; text-transform: uppercase; margin-bottom: 16px;">Signal_Acquisition</h3>
      <p style="color: rgba(255,255,255,0.6);">We collect specific signals you broadcast directly—account metadata.</p>
    </div>
    <div style="background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); border: 2px solid rgba(255,255,255,0.1); padding: 40px; border-radius: 48px;">
      <h3 style="font-size: 24px; color: white; text-transform: uppercase; margin-bottom: 16px;">Logic_Execution</h3>
      <p style="color: rgba(255,255,255,0.6);">Acquired signals are utilized solely to maintain the neural mesh.</p>
    </div>
    <div style="background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); border: 2px solid rgba(255,255,255,0.1); padding: 40px; border-radius: 48px;">
      <h3 style="font-size: 24px; color: white; text-transform: uppercase; margin-bottom: 16px;">Node_Distribution</h3>
      <p style="color: rgba(255,255,255,0.6);">Personal identification strings remain localized. No external sharing.</p>
    </div>
    <div style="background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); border: 2px solid rgba(255,255,255,0.1); padding: 40px; border-radius: 48px;">
      <h3 style="font-size: 24px; color: white; text-transform: uppercase; margin-bottom: 16px;">Firewall_Integrity</h3>
      <p style="color: rgba(255,255,255,0.6);">Multi-layer quantum-grade encryption safeguards your signal.</p>
    </div>
  </div>
</div>`}
              cssCode={`.glass-root { background: #0f172a; padding: 80px; border-radius: 64px; border: 6px solid rgba(255,255,255,0.1); font-family: sans-serif; font-style: italic; font-weight: 700; text-align: center; position: relative; overflow: hidden; }
.glass-title { font-size: 64px; color: white; text-transform: uppercase; margin-bottom: 64px; }
.glass-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; text-align: left; }
.glass-card { background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); border: 2px solid rgba(255,255,255,0.1); padding: 40px; border-radius: 48px; transition: all 0.3s ease; }
.glass-card:hover { background: rgba(255,255,255,0.1); }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black">03. Floating Crystal Glass</span>
          <PrivacyGlass />
        </section>

        {/* 04. DATA JOURNEY TIMELINE */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/priv border border-slate-200">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/priv:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const PrivacyTimeline = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold">
    <div className="bg-white border-[8px] border-black p-12 shadow-[20px_20px_0_0_#000] text-center">
      <h2 className="text-6xl font-black uppercase mb-20 tracking-tighter italic border-b-[8px] border-black pb-8 text-black">The_Data_Journey</h2>
      <div className="relative border-l-[8px] border-black md:ml-20 pl-12 space-y-20 text-left">
        {[
          { t: "01. Signal_Acquisition", c: "We collect specific signals you broadcast directly—account metadata." },
          { t: "02. Logic_Execution", c: "Acquired signals are utilized solely to maintain the neural mesh." },
          { t: "03. Node_Distribution", c: "Personal identification strings remain localized." },
          { t: "04. Firewall_Integrity", c: "Multi-layer quantum-grade encryption safeguards your signal." }
        ].map((item, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-[64px] top-0 w-12 h-12 bg-yellow-400 border-[6px] border-black rounded-full flex items-center justify-center font-black text-black">
              \${i + 1}
            </div>
            <div className="bg-black text-white p-8 border-4 border-black shadow-[12px_12px_0_0_#facc15]">
              <h3 className="text-2xl font-black uppercase mb-4 text-yellow-400 italic">\${item.t}</h3>
              <p className="text-xl font-medium opacity-80 text-white">\${item.c}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Timeline Privacy -->
<div style="background: white; border: 8px solid black; padding: 48px; box-shadow: 20px 20px 0 0 #000; font-family: sans-serif; font-style: italic; font-weight: 700; text-align: center;">
  <h2 style="font-size: 60px; font-weight: 900; text-transform: uppercase; margin-bottom: 80px; border-bottom: 8px solid black; padding-bottom: 32px;">The_Data_Journey</h2>
  <div style="position: relative; border-left: 8px solid black; margin-left: 80px; padding-left: 48px; text-align: left;">
    <div style="position: relative; margin-bottom: 80px;">
      <div style="position: absolute; left: -64px; top: 0; width: 48px; height: 48px; background: #facc15; border: 6px solid black; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900;">1</div>
      <div style="background: black; color: white; padding: 32px; border: 4px solid black; box-shadow: 12px 12px 0 0 #facc15;">
        <h3 style="font-size: 24px; font-weight: 900; text-transform: uppercase; color: #facc15; margin-bottom: 16px;">01. Signal_Acquisition</h3>
        <p style="font-size: 20px; line-height: 1.2; color: white;">We collect specific signals you broadcast directly—account metadata.</p>
      </div>
    </div>
    <div style="position: relative; margin-bottom: 80px;">
      <div style="position: absolute; left: -64px; top: 0; width: 48px; height: 48px; background: #facc15; border: 6px solid black; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900;">2</div>
      <div style="background: black; color: white; padding: 32px; border: 4px solid black; box-shadow: 12px 12px 0 0 #facc15;">
        <h3 style="font-size: 24px; font-weight: 900; text-transform: uppercase; color: #facc15; margin-bottom: 16px;">02. Logic_Execution</h3>
        <p style="font-size: 20px; line-height: 1.2; color: white;">Acquired signals are utilized solely to maintain the neural mesh.</p>
      </div>
    </div>
    <div style="position: relative; margin-bottom: 80px;">
      <div style="position: absolute; left: -64px; top: 0; width: 48px; height: 48px; background: #facc15; border: 6px solid black; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900;">3</div>
      <div style="background: black; color: white; padding: 32px; border: 4px solid black; box-shadow: 12px 12px 0 0 #facc15;">
        <h3 style="font-size: 24px; font-weight: 900; text-transform: uppercase; color: #facc15; margin-bottom: 16px;">03. Node_Distribution</h3>
        <p style="font-size: 20px; line-height: 1.2; color: white;">Personal identification strings remain localized.</p>
      </div>
    </div>
    <div style="position: relative; margin-bottom: 80px;">
      <div style="position: absolute; left: -64px; top: 0; width: 48px; height: 48px; background: #facc15; border: 6px solid black; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900;">4</div>
      <div style="background: black; color: white; padding: 32px; border: 4px solid black; box-shadow: 12px 12px 0 0 #facc15;">
        <h3 style="font-size: 24px; font-weight: 900; text-transform: uppercase; color: #facc15; margin-bottom: 16px;">04. Firewall_Integrity</h3>
        <p style="font-size: 20px; line-height: 1.2; color: white;">Multi-layer quantum-grade encryption safeguards your signal.</p>
      </div>
    </div>
  </div>
</div>`}
              cssCode={`.timeline-root { background: white; border: 8px solid black; padding: 48px; box-shadow: 20px 20px 0 0 #000; font-family: sans-serif; font-style: italic; font-weight: 700; text-align: center; }
.timeline-title { font-size: 60px; font-weight: 900; text-transform: uppercase; margin-bottom: 80px; border-bottom: 8px solid black; padding-bottom: 32px; }
.timeline-line { position: relative; border-left: 8px solid black; margin-left: 80px; padding-left: 48px; text-align: left; }
.timeline-item { position: relative; margin-bottom: 80px; }
.timeline-number { position: absolute; left: -64px; top: 0; width: 48px; height: 48px; background: #facc15; border: 6px solid black; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; }
.timeline-card { background: black; color: white; padding: 32px; border: 4px solid black; box-shadow: 12px 12px 0 0 #facc15; transition: transform 0.2s ease; }
.timeline-card:hover { transform: translate(4px, 4px); box-shadow: 8px 8px 0 0 #facc15; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black">04. Sequential Protocol Journey</span>
          <PrivacyTimeline />
        </section>

        {/* 05. MATRIX GRID */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/priv border border-slate-200">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/priv:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const PrivacyCards = () => (
  <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
      <div className="md:col-span-2 bg-black text-white p-12 border-[8px] border-black mb-4 shadow-[16px_16px_0_0_#000]">
        <h2 className="text-6xl font-black uppercase tracking-tighter leading-none italic text-white text-left">Secure_Matrix_Protocol</h2>
      </div>
      {[
        { t: "Signal_Acquisition", c: "We collect specific signals you broadcast directly—account metadata." },
        { t: "Logic_Execution", c: "Acquired signals are utilized solely to maintain the neural mesh." },
        { t: "Node_Distribution", c: "Personal identification strings remain localized. No external sharing." },
        { t: "Firewall_Integrity", c: "Multi-layer quantum-grade encryption safeguards your signal." }
      ].map((item, i) => (
        <div key={i} className={\`p-10 border-[6px] border-black shadow-[12px_12px_0_0_#000] \${i % 2 === 0 ? 'bg-white' : 'bg-yellow-400'}\`}>
          <h3 className="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-2 text-black">0\${i + 1}. \${item.t}</h3>
          <p className="text-xl leading-none font-black text-black">\${item.c}</p>
        </div>
      ))}
    </div>
  </div>
);`}
              htmlCode={`<!-- Matrix Grid Privacy -->
<div style="width: 100%; max-width: 1152px; margin: 0 auto; padding: 0 16px; font-family: sans-serif; font-style: italic; font-weight: 700; text-align: left;">
  <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
    <div style="grid-column: span 2; background: black; color: white; padding: 48px; border: 8px solid black; box-shadow: 16px 16px 0 0 #000;">
      <h2 style="font-size: 60px; font-weight: 900; text-transform: uppercase; line-height: 1;">Secure_Matrix_Protocol</h2>
    </div>
    <div style="background: white; border: 6px solid black; padding: 40px; box-shadow: 12px 12px 0 0 #000;">
      <h3 style="font-size: 30px; font-weight: 900; text-transform: uppercase; border-bottom: 4px solid black; padding-bottom: 8px; margin-bottom: 24px;">01. Signal_Acquisition</h3>
      <p style="font-size: 20px; font-weight: 900; line-height: 1;">We collect specific signals you broadcast directly—account metadata.</p>
    </div>
    <div style="background: #facc15; border: 6px solid black; padding: 40px; box-shadow: 12px 12px 0 0 #000;">
      <h3 style="font-size: 30px; font-weight: 900; text-transform: uppercase; border-bottom: 4px solid black; padding-bottom: 8px; margin-bottom: 24px;">02. Logic_Execution</h3>
      <p style="font-size: 20px; font-weight: 900; line-height: 1;">Acquired signals are utilized solely to maintain the neural mesh.</p>
    </div>
    <div style="background: white; border: 6px solid black; padding: 40px; box-shadow: 12px 12px 0 0 #000;">
      <h3 style="font-size: 30px; font-weight: 900; text-transform: uppercase; border-bottom: 4px solid black; padding-bottom: 8px; margin-bottom: 24px;">03. Node_Distribution</h3>
      <p style="font-size: 20px; font-weight: 900; line-height: 1;">Personal identification strings remain localized. No external sharing.</p>
    </div>
    <div style="background: #facc15; border: 6px solid black; padding: 40px; box-shadow: 12px 12px 0 0 #000;">
      <h3 style="font-size: 30px; font-weight: 900; text-transform: uppercase; border-bottom: 4px solid black; padding-bottom: 8px; margin-bottom: 24px;">04. Firewall_Integrity</h3>
      <p style="font-size: 20px; font-weight: 900; line-height: 1;">Multi-layer quantum-grade encryption safeguards your signal.</p>
    </div>
  </div>
</div>`}
              cssCode={`.matrix-root { width: 100%; max-width: 1152px; margin: 0 auto; padding: 0 16px; font-family: sans-serif; font-style: italic; font-weight: 700; text-align: left; }
.matrix-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
.matrix-header { grid-column: span 2; background: black; color: white; padding: 48px; border: 8px solid black; box-shadow: 16px 16px 0 0 #000; }
.matrix-header-title { font-size: 60px; font-weight: 900; text-transform: uppercase; line-height: 1; }
.matrix-card { border: 6px solid black; padding: 40px; box-shadow: 12px 12px 0 0 #000; transition: transform 0.2s ease; }
.matrix-card-white { background: white; }
.matrix-card-yellow { background: #facc15; }
.matrix-card:hover { transform: translate(4px, 4px); box-shadow: 8px 8px 0 0 #000; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black">05. Matrix Grid Matrix</span>
          <PrivacyCards />
        </section>

        {/* 06. FAQ ACCORDION */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/priv border border-slate-200">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/priv:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const PrivacyAccordion = () => {
  const [active, setActive] = React.useState(0);
  return (
    <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold">
      <div className="bg-white border-[10px] border-black p-12 shadow-[24px_24px_0_0_#000]">
        <h2 className="text-7xl font-black uppercase mb-12 tracking-tighter italic text-center text-black text-center">FAQ_PROTOCOL</h2>
        <div className="space-y-6">
          {[
            { t: "Signal_Acquisition", c: "We collect specific signals you broadcast directly—account metadata." },
            { t: "Logic_Execution", c: "Acquired signals are utilized solely to maintain the neural mesh." },
            { t: "Node_Distribution", c: "Personal identification strings remain localized. No external sharing." },
            { t: "Firewall_Integrity", c: "Multi-layer quantum-grade encryption safeguards your signal." }
          ].map((item, i) => (
            <div key={i} className="border-4 border-black overflow-hidden text-left">
              <button onClick={() => setActive(active === i ? -1 : i)} className={\`w-full flex justify-between p-8 \${active === i ? 'bg-black text-white' : 'bg-white text-black hover:bg-yellow-400'} transition-all font-black uppercase\`}>
                <span>0\${i + 1}. \${item.t}</span>
                <span>▼</span>
              </button>
              {active === i && <div className="p-8 bg-white border-t-4 border-black text-2xl leading-none font-black italic text-black">\${item.c}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};`}
              htmlCode={`<!-- Accordion Protocol -->
<div style="background: white; border: 10px solid black; padding: 48px; box-shadow: 24px 24px 0 0 #000; font-family: sans-serif; font-style: italic; font-weight: 700; text-align: center; max-width: 896px; margin: 0 auto;">
  <h2 style="font-size: 70px; font-weight: 900; text-transform: uppercase; margin-bottom: 48px;">FAQ_PROTOCOL</h2>
  <div style="text-align: left;">
    <div style="border: 4px solid black; margin-bottom: 24px; overflow: hidden;">
      <div style="padding: 32px; background: #000; color: white; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-transform: uppercase;">
        <span style="font-size: 24px;">01. Signal_Acquisition</span>
        <span style="font-size: 32px;">▼</span>
      </div>
      <div style="padding: 32px; font-size: 24px; line-height: 1; font-weight: 900; font-style: italic; background: white; border-top: 4px solid black;">
        We collect specific signals you broadcast directly—account metadata and node communications.
      </div>
    </div>
    <div style="border: 4px solid black; margin-bottom: 24px; overflow: hidden;">
      <div style="padding: 32px; background: #fff; color: black; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-transform: uppercase;">
        <span style="font-size: 24px;">02. Logic_Execution</span>
        <span style="font-size: 32px;">▼</span>
      </div>
    </div>
    <div style="border: 4px solid black; margin-bottom: 24px; overflow: hidden;">
      <div style="padding: 32px; background: #fff; color: black; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-transform: uppercase;">
        <span style="font-size: 24px;">03. Node_Distribution</span>
        <span style="font-size: 32px;">▼</span>
      </div>
    </div>
    <div style="border: 4px solid black; margin-bottom: 24px; overflow: hidden;">
      <div style="padding: 32px; background: #fff; color: black; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-transform: uppercase;">
        <span style="font-size: 24px;">04. Firewall_Integrity</span>
        <span style="font-size: 32px;">▼</span>
      </div>
    </div>
  </div>
</div>`}
              cssCode={`.accordion-root { background: white; border: 10px solid black; padding: 48px; box-shadow: 24px 24px 0 0 #000; font-family: sans-serif; font-style: italic; font-weight: 700; text-align: center; max-width: 896px; margin: 0 auto; }
.accordion-title { font-size: 70px; font-weight: 900; text-transform: uppercase; margin-bottom: 48px; }
.accordion-item { border: 4px solid black; margin-bottom: 24px; overflow: hidden; }
.accordion-header { padding: 32px; background: #000; color: white; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-transform: uppercase; transition: all 0.2s ease; }
.accordion-header:hover { background: #facc15; color: black; }
.accordion-content { padding: 32px; font-size: 24px; line-height: 1.2; font-weight: 900; font-style: italic; background: white; border-top: 4px solid black; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black">06. Interactive FAQ Accordion</span>
          <PrivacyAccordion />
        </section>

        {/* 07. MINIMAL CORE */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/priv border border-slate-200">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/priv:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const PrivacyMinimal = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold">
    <div className="bg-white p-16 border-[8px] border-black shadow-[16px_16px_0_0_#000] text-left">
      <h1 className="text-8xl font-black uppercase tracking-tighter leading-none italic mb-16 border-b-[8px] border-black pb-10 text-black text-left">PRIVACY. <br/> <span className="text-gray-300">CORE.</span></h1>
      <div className="space-y-20">
        {[
          { t: "Signal_Acquisition", c: "We collect specific signals you broadcast directly—account metadata." },
          { t: "Logic_Execution", c: "Acquired signals are utilized solely to maintain the neural mesh." },
          { t: "Node_Distribution", c: "Personal identification strings remain localized. No external sharing." },
          { t: "Firewall_Integrity", c: "Multi-layer quantum-grade encryption safeguards your signal." }
        ].map((item, i) => (
          <div key={i} className="text-left">
            <span className="text-6xl font-black text-gray-100 block mb-4">0\${i + 1}</span>
            <h3 className="text-4xl font-black uppercase mb-6 tracking-tight italic text-black">\${item.t}</h3>
            <p className="text-2xl leading-tight text-gray-600 font-medium italic lowercase">\${item.c}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Minimal Core Privacy -->
<div style="background: white; padding: 64px; border: 8px solid black; box-shadow: 16px 16px 0 0 #000; font-family: sans-serif; font-style: italic; font-weight: 700; text-align: left; max-width: 896px; margin: 0 auto;">
  <h1 style="font-size: 80px; font-weight: 900; text-transform: uppercase; border-bottom: 8px solid black; padding-bottom: 40px; margin-bottom: 64px; line-height: 1;">PRIVACY.<br><span style="color: #e5e7eb;">CORE.</span></h1>
  <div style="margin-bottom: 80px;">
    <span style="font-size: 60px; color: #f3f4f6; font-weight: 900; display: block; margin-bottom: 16px;">01</span>
    <h3 style="font-size: 36px; font-weight: 900; text-transform: uppercase; margin-bottom: 24px; color: black;">Signal_Acquisition</h3>
    <p style="font-size: 24px; color: #4b5563; font-style: italic; text-transform: lowercase; line-height: 1.2;">We collect specific signals you broadcast directly—account metadata.</p>
  </div>
  <div style="margin-bottom: 80px;">
    <span style="font-size: 60px; color: #f3f4f6; font-weight: 900; display: block; margin-bottom: 16px;">02</span>
    <h3 style="font-size: 36px; font-weight: 900; text-transform: uppercase; margin-bottom: 24px; color: black;">Logic_Execution</h3>
    <p style="font-size: 24px; color: #4b5563; font-style: italic; text-transform: lowercase; line-height: 1.2;">Acquired signals are utilized solely to maintain the neural mesh.</p>
  </div>
  <div style="margin-bottom: 80px;">
    <span style="font-size: 60px; color: #f3f4f6; font-weight: 900; display: block; margin-bottom: 16px;">03</span>
    <h3 style="font-size: 36px; font-weight: 900; text-transform: uppercase; margin-bottom: 24px; color: black;">Node_Distribution</h3>
    <p style="font-size: 24px; color: #4b5563; font-style: italic; text-transform: lowercase; line-height: 1.2;">Personal identification strings remain localized. No external sharing.</p>
  </div>
  <div style="margin-bottom: 80px;">
    <span style="font-size: 60px; color: #f3f4f6; font-weight: 900; display: block; margin-bottom: 16px;">04</span>
    <h3 style="font-size: 36px; font-weight: 900; text-transform: uppercase; margin-bottom: 24px; color: black;">Firewall_Integrity</h3>
    <p style="font-size: 24px; color: #4b5563; font-style: italic; text-transform: lowercase; line-height: 1.2;">Multi-layer quantum-grade encryption safeguards your signal.</p>
  </div>
</div>`}
              cssCode={`.minimal-root { background: white; padding: 64px; border: 8px solid black; box-shadow: 16px 16px 0 0 #000; font-family: sans-serif; font-style: italic; font-weight: 700; text-align: left; max-width: 896px; margin: 0 auto; }
.minimal-title { font-size: 80px; font-weight: 900; text-transform: uppercase; border-bottom: 8px solid black; padding-bottom: 40px; margin-bottom: 64px; line-height: 1; }
.minimal-section { margin-bottom: 80px; }
.section-num { font-size: 60px; color: #f3f4f6; font-weight: 900; display: block; margin-bottom: 16px; }
.section-title { font-size: 36px; font-weight: 900; text-transform: uppercase; margin-bottom: 24px; color: black; }
.section-text { font-size: 24px; color: #4b5563; font-style: italic; text-transform: lowercase; line-height: 1.2; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black">07. Minimal Core Protocol</span>
          <PrivacyMinimal />
        </section>

        {/* 08. NODE SUPPORT FAQ */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/priv border border-slate-200">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/priv:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const PrivacyFAQ = () => (
  <div className="w-full max-w-5xl mx-auto px-4 font-sans italic font-bold">
    <div className="bg-indigo-600 border-[8px] border-black p-12 shadow-[20px_20px_0_0_#000] text-center">
      <h2 className="text-6xl font-black uppercase mb-16 tracking-tighter text-white italic">Node_Support_Center</h2>
      <div className="grid gap-8 text-left">
        {[
          { q: "Signal_Acquisition", a: "We collect specific signals you broadcast directly—account metadata." },
          { q: "Logic_Execution", a: "Acquired signals are utilized solely to maintain the neural mesh." },
          { q: "Node_Distribution", a: "Personal identification strings remain localized. No external sharing." },
          { q: "Firewall_Integrity", a: "Multi-layer quantum-grade encryption safeguards your signal." }
        ].map((item, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-8 items-start bg-white border-4 border-black p-10 hover:-translate-y-2 transition-all">
            <div className="flex-shrink-0 w-20 h-20 bg-black text-white border-4 border-black flex items-center justify-center font-black text-3xl italic text-white">Q\${i + 1}</div>
            <div className="text-left">
              <h3 className="text-3xl font-black text-black mb-4 uppercase tracking-tight italic">\${item.q}?</h3>
              <p className="text-xl text-gray-700 leading-tight font-black">\${item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Support FAQ Privacy -->
<div style="background: #4f46e5; border: 8px solid black; padding: 48px; box-shadow: 20px 20px 0 0 #000; font-family: sans-serif; font-style: italic; font-weight: 700; text-align: center; max-width: 1024px; margin: 0 auto;">
  <h2 style="font-size: 60px; font-weight: 900; text-transform: uppercase; color: white; margin-bottom: 64px;">Node_Support_Center</h2>
  <div style="display: grid; gap: 32px; text-align: left;">
    <div style="background: white; border: 4px solid black; padding: 40px; display: flex; gap: 32px; align-items: flex-start;">
      <div style="width: 80px; height: 80px; background: black; color: white; border: 4px solid black; display: flex; align-items: center; justify-content: center; font-size: 30px; font-weight: 900; flex-shrink: 0;">Q1</div>
      <div>
        <h3 style="font-size: 30px; font-weight: 900; color: black; margin-bottom: 16px; text-transform: uppercase;">Signal_Acquisition?</h3>
        <p style="font-size: 20px; font-weight: 900; line-height: 1.2; color: #374151;">We collect specific signals you broadcast directly—account metadata.</p>
      </div>
    </div>
    <div style="background: white; border: 4px solid black; padding: 40px; display: flex; gap: 32px; align-items: flex-start;">
      <div style="width: 80px; height: 80px; background: black; color: white; border: 4px solid black; display: flex; align-items: center; justify-content: center; font-size: 30px; font-weight: 900; flex-shrink: 0;">Q2</div>
      <div>
        <h3 style="font-size: 30px; font-weight: 900; color: black; margin-bottom: 16px; text-transform: uppercase;">Logic_Execution?</h3>
        <p style="font-size: 20px; font-weight: 900; line-height: 1.2; color: #374151;">Acquired signals are utilized solely to maintain the neural mesh.</p>
      </div>
    </div>
    <div style="background: white; border: 4px solid black; padding: 40px; display: flex; gap: 32px; align-items: flex-start;">
      <div style="width: 80px; height: 80px; background: black; color: white; border: 4px solid black; display: flex; align-items: center; justify-content: center; font-size: 30px; font-weight: 900; flex-shrink: 0;">Q3</div>
      <div>
        <h3 style="font-size: 30px; font-weight: 900; color: black; margin-bottom: 16px; text-transform: uppercase;">Node_Distribution?</h3>
        <p style="font-size: 20px; font-weight: 900; line-height: 1.2; color: #374151;">Personal identification strings remain localized. No external sharing.</p>
      </div>
    </div>
    <div style="background: white; border: 4px solid black; padding: 40px; display: flex; gap: 32px; align-items: flex-start;">
      <div style="width: 80px; height: 80px; background: black; color: white; border: 4px solid black; display: flex; align-items: center; justify-content: center; font-size: 30px; font-weight: 900; flex-shrink: 0;">Q4</div>
      <div>
        <h3 style="font-size: 30px; font-weight: 900; color: black; margin-bottom: 16px; text-transform: uppercase;">Firewall_Integrity?</h3>
        <p style="font-size: 20px; font-weight: 900; line-height: 1.2; color: #374151;">Multi-layer quantum-grade encryption safeguards your signal.</p>
      </div>
    </div>
  </div>
</div>`}
              cssCode={`.faq-root { background: #4f46e5; border: 8px solid black; padding: 48px; box-shadow: 20px 20px 0 0 #000; font-family: sans-serif; font-style: italic; font-weight: 700; text-align: center; max-width: 1024px; margin: 0 auto; }
.faq-title { font-size: 60px; font-weight: 900; text-transform: uppercase; color: white; margin-bottom: 64px; }
.faq-grid { display: grid; gap: 32px; text-align: left; }
.faq-card { background: white; border: 4px solid black; padding: 40px; display: flex; gap: 32px; align-items: flex-start; transition: transform 0.2s ease; }
.faq-card:hover { transform: translateY(-8px); }
.faq-q-box { width: 80px; height: 80px; background: black; color: white; border: 4px solid black; display: flex; align-items: center; justify-content: center; font-size: 30px; font-weight: 900; flex-shrink: 0; }
.faq-content-title { font-size: 30px; font-weight: 900; color: black; margin-bottom: 16px; text-transform: uppercase; }
.faq-content-text { font-size: 20px; font-weight: 900; line-height: 1.2; color: #374151; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black">08. Node Support FAQ Suite</span>
          <PrivacyFAQ />
        </section>

        {/* 09. CYBER PROTOCOL */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/priv border border-slate-200">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/priv:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const PrivacyCyber = () => (
  <div className="w-full max-w-5xl mx-auto px-4 font-mono italic font-bold">
    <div className="bg-black border-4 border-cyan-500/30 p-12 rounded-2xl relative overflow-hidden text-left text-white">
      <h2 className="text-5xl font-black text-cyan-400 mb-12 tracking-tighter uppercase italic text-left">PROTOCOL_HANDSHAKE</h2>
      <div className="grid md:grid-cols-2 gap-8 text-left">
        {[
          { t: "Signal_Acquisition", c: "We collect specific signals you broadcast directly—account metadata." },
          { t: "Logic_Execution", c: "Acquired signals are utilized solely to maintain the neural mesh." },
          { t: "Node_Distribution", c: "Personal identification strings remain localized. No external sharing." },
          { t: "Firewall_Integrity", c: "Multi-layer quantum-grade encryption safeguards your signal." }
        ].map((item, i) => (
          <div key={i} className="border-2 border-cyan-500/20 p-8 hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all">
            <div className="text-cyan-500/50 mb-6 uppercase tracking-[0.3em] text-[10px]">HANDSHAKE_NODE_0\${i + 1}</div>
            <h3 className="text-xl font-black text-white mb-4 uppercase">\${item.t}</h3>
            <p className="text-cyan-100/60 leading-relaxed text-sm uppercase tracking-tighter">\${item.c}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Cyberpunk Privacy UI -->
<div style="background: black; padding: 48px; border-radius: 16px; border: 4px solid rgba(6,182,212,0.3); font-family: monospace; font-style: italic; font-weight: 700; color: white; text-align: left; max-width: 1024px; margin: 0 auto; position: relative; overflow: hidden;">
  <h2 style="font-size: 40px; font-weight: 900; color: #22d3ee; margin-bottom: 48px; text-transform: uppercase; letter-spacing: -0.05em; text-shadow: 0 0 20px rgba(6,182,212,0.3);">PROTOCOL_HANDSHAKE</h2>
  <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
    <div style="border: 2px solid rgba(6,182,212,0.2); padding: 32px; background: rgba(0,0,0,0.5);">
      <div style="color: rgba(6,182,212,0.5); font-size: 10px; text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 16px;">NODE_SECURE_01</div>
      <h3 style="font-size: 20px; font-weight: 900; color: white; margin-bottom: 16px; text-transform: uppercase;">Signal_Acquisition</h3>
      <p style="color: rgba(207,250,254,0.6); font-size: 14px; text-transform: uppercase; letter-spacing: -0.02em; line-height: 1.5;">We collect specific signals you broadcast directly—account metadata.</p>
    </div>
    <div style="border: 2px solid rgba(6,182,212,0.2); padding: 32px; background: rgba(0,0,0,0.5);">
      <div style="color: rgba(6,182,212,0.5); font-size: 10px; text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 16px;">NODE_SECURE_02</div>
      <h3 style="font-size: 20px; font-weight: 900; color: white; margin-bottom: 16px; text-transform: uppercase;">Logic_Execution</h3>
      <p style="color: rgba(207,250,254,0.6); font-size: 14px; text-transform: uppercase; letter-spacing: -0.02em; line-height: 1.5;">Acquired signals are utilized solely to maintain the neural mesh.</p>
    </div>
    <div style="border: 2px solid rgba(6,182,212,0.2); padding: 32px; background: rgba(0,0,0,0.5);">
      <div style="color: rgba(6,182,212,0.5); font-size: 10px; text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 16px;">NODE_SECURE_03</div>
      <h3 style="font-size: 20px; font-weight: 900; color: white; margin-bottom: 16px; text-transform: uppercase;">Node_Distribution</h3>
      <p style="color: rgba(207,250,254,0.6); font-size: 14px; text-transform: uppercase; letter-spacing: -0.02em; line-height: 1.5;">Personal identification strings remain localized. No external sharing.</p>
    </div>
    <div style="border: 2px solid rgba(6,182,212,0.2); padding: 32px; background: rgba(0,0,0,0.5);">
      <div style="color: rgba(6,182,212,0.5); font-size: 10px; text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 16px;">NODE_SECURE_04</div>
      <h3 style="font-size: 20px; font-weight: 900; color: white; margin-bottom: 16px; text-transform: uppercase;">Firewall_Integrity</h3>
      <p style="color: rgba(207,250,254,0.6); font-size: 14px; text-transform: uppercase; letter-spacing: -0.02em; line-height: 1.5;">Multi-layer quantum-grade encryption safeguards your signal.</p>
    </div>
  </div>
</div>`}
              cssCode={`.cyber-root { background: black; padding: 48px; border-radius: 16px; border: 4px solid rgba(6,182,212,0.3); font-family: monospace; font-style: italic; font-weight: 700; color: white; text-align: left; max-width: 1024px; margin: 0 auto; position: relative; overflow: hidden; }
.cyber-title { font-size: 40px; font-weight: 900; color: #22d3ee; margin-bottom: 48px; text-transform: uppercase; letter-spacing: -0.05em; text-shadow: 0 0 20px rgba(6,182,212,0.3); }
.cyber-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
.cyber-card { border: 2px solid rgba(6,182,212,0.2); padding: 32px; background: rgba(0,0,0,0.5); transition: all 0.3s ease; }
.cyber-card:hover { border-color: #22d3ee; box-shadow: 0 0 30px rgba(6,182,212,0.3); transform: translateY(-4px); }
.cyber-card-label { color: rgba(6,182,212,0.5); font-size: 10px; text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 16px; }
.cyber-card-title { font-size: 20px; font-weight: 900; color: white; margin-bottom: 16px; text-transform: uppercase; }
.cyber-card-text { color: rgba(207,250,254,0.6); font-size: 14px; text-transform: uppercase; letter-spacing: -0.02em; line-height: 1.5; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black">09. Cyber Protocol Handshake</span>
          <PrivacyCyber />
        </section>

        {/* 10. NEUMORPHIC SOFT */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/priv border border-slate-200">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/priv:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const PrivacyNeo = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold">
    <div className="bg-[#e0e5ec] p-16 rounded-[4rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center border border-white/20">
      <h2 className="text-6xl font-black text-slate-800 mb-4 tracking-tighter uppercase italic leading-none text-center">Soft_Protocol</h2>
      <div className="space-y-12 text-left">
        {[
          { t: "Signal_Acquisition", c: "We collect specific signals you broadcast directly—account metadata." },
          { t: "Logic_Execution", c: "Acquired signals are utilized solely to maintain the neural mesh." },
          { t: "Node_Distribution", c: "Personal identification strings remain localized. No external sharing." },
          { t: "Firewall_Integrity", c: "Multi-layer quantum-grade encryption safeguards your signal." }
        ].map((item, i) => (
          <div key={i} className="bg-[#e0e5ec] p-10 rounded-[40px] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all">
            <h3 className="text-2xl font-black text-slate-700 mb-4 uppercase tracking-tight italic">0\${i + 1}. \${item.t}</h3>
            <p className="text-lg text-slate-500 leading-tight font-black italic">\${item.c}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Neumorphic Privacy UI -->
<div style="background: #e0e5ec; padding: 64px; border-radius: 64px; box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; font-family: sans-serif; font-style: italic; font-weight: 700; text-align: center; border: 1px solid rgba(255,255,255,0.2); max-width: 896px; margin: 0 auto;">
  <h2 style="font-size: 60px; font-weight: 900; color: #1e293b; margin-bottom: 64px; text-transform: uppercase;">Soft_Protocol</h2>
  <div style="text-align: left; display: grid; gap: 32px;">
    <div style="background: #e0e5ec; padding: 40px; border-radius: 40px; box-shadow: 10px 10px 20px #bebebe, -10px -10px 20px #ffffff;">
      <h3 style="font-size: 24px; font-weight: 900; color: #334155; margin-bottom: 16px; text-transform: uppercase;">01. Signal_Acquisition</h3>
      <p style="font-size: 18px; color: #64748b; line-height: 1.2; font-weight: 900;">We collect specific signals you broadcast directly—account metadata.</p>
    </div>
    <div style="background: #e0e5ec; padding: 40px; border-radius: 40px; box-shadow: 10px 10px 20px #bebebe, -10px -10px 20px #ffffff;">
      <h3 style="font-size: 24px; font-weight: 900; color: #334155; margin-bottom: 16px; text-transform: uppercase;">02. Logic_Execution</h3>
      <p style="font-size: 18px; color: #64748b; line-height: 1.2; font-weight: 900;">Acquired signals are utilized solely to maintain the neural mesh.</p>
    </div>
    <div style="background: #e0e5ec; padding: 40px; border-radius: 40px; box-shadow: 10px 10px 20px #bebebe, -10px -10px 20px #ffffff;">
      <h3 style="font-size: 24px; font-weight: 900; color: #334155; margin-bottom: 16px; text-transform: uppercase;">03. Node_Distribution</h3>
      <p style="font-size: 18px; color: #64748b; line-height: 1.2; font-weight: 900;">Personal identification strings remain localized. No external sharing.</p>
    </div>
    <div style="background: #e0e5ec; padding: 40px; border-radius: 40px; box-shadow: 10px 10px 20px #bebebe, -10px -10px 20px #ffffff;">
      <h3 style="font-size: 24px; font-weight: 900; color: #334155; margin-bottom: 16px; text-transform: uppercase;">04. Firewall_Integrity</h3>
      <p style="font-size: 18px; color: #64748b; line-height: 1.2; font-weight: 900;">Multi-layer quantum-grade encryption safeguards your signal.</p>
    </div>
  </div>
</div>`}
              cssCode={`.neo-root { background: #e0e5ec; padding: 64px; border-radius: 64px; box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; font-family: sans-serif; font-style: italic; font-weight: 700; text-align: center; max-width: 896px; margin: 0 auto; border: 1px solid rgba(255,255,255,0.2); }
.neo-title { font-size: 60px; font-weight: 900; color: #1e293b; margin-bottom: 64px; text-transform: uppercase; }
.neo-grid { text-align: left; display: grid; gap: 32px; }
.neo-card { background: #e0e5ec; padding: 40px; border-radius: 40px; box-shadow: 10px 10px 20px #bebebe, -10px -10px 20px #ffffff; transition: all 0.3s ease; }
.neo-card:hover { box-shadow: inset 10px 10px 20px #bebebe, inset -10px -10px 20px #ffffff; transform: translateY(-2px); }
.neo-card-title { font-size: 24px; font-weight: 900; color: #334155; margin-bottom: 16px; text-transform: uppercase; }
.neo-card-text { font-size: 18px; color: #64748b; line-height: 1.2; font-weight: 900; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black">10. Tactile Neumorphic Signal</span>
          <PrivacyNeo />
        </section>

      </div>
    </div>
  );
};

export default PrivacyGallery;