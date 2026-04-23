import React, { useState } from 'react';
import CopyButton from '../CopyButton';

// --- Shared Data ---
const termsData = [
  { title: "1. Acceptance of Protocol", content: "By accessing the node, you acknowledge full alignment with the structural logic defined herein. Deviation from defined protocols may result in immediate termination of the secure link." },
  { title: "2. Privacy Architecture", content: "Data encryption is handled at the network edge. We do not persist identifiable user payloads in plaintext. Your identity remains an encrypted node within the matrix." },
  { title: "3. User Constraints", content: "Unauthorized injection of data packets, structural subversion, or interference with concurrent nodes is strictly prohibited under global protocol standards." },
  { title: "4. Termination Logic", content: "The service reserves the right to sever any connection that exhibits anomalous behavior or violates the core integrity of the network architecture." },
];

// --- 1. Bold Brutalist (The Law) ---
export const TermsBrutalist = () => (
  <div className="bg-yellow-400 p-12 rounded-[3rem] border-[8px] border-slate-950 font-sans italic font-black uppercase overflow-hidden shadow-[20px_20px_0_0_#000]">
    <div className="max-w-4xl mx-auto text-left">
       <div className="bg-white border-[6px] border-slate-950 p-10 mb-12 shadow-[12px_12px_0_0_#000]">
          <h2 className="text-7xl md:text-9xl font-black text-slate-950 tracking-tighter leading-[0.8] italic underline decoration-slate-950/20">THE_ <br/> LAW.</h2>
          <p className="mt-8 text-2xl font-black italic">Effective_Date: 01.01.2024</p>
       </div>
       <div className="space-y-10">
          {termsData.map((term, i) => (
             <div key={i} className="bg-white border-[6px] border-slate-950 p-8 shadow-[12px_12px_0_0_#000] hover:-translate-y-2 transition-transform">
                <h3 className="text-3xl font-black italic mb-4 bg-slate-950 text-white inline-block px-4 py-1">{term.title}</h3>
                <p className="text-xl font-black italic leading-tight text-slate-900 lowercase">{term.content}</p>
             </div>
          ))}
       </div>
       <div className="mt-16 pt-12 border-t-[8px] border-slate-950 flex justify-between items-center">
          <button className="px-12 py-6 bg-slate-950 text-white text-2xl font-black italic hover:bg-blue-600 transition-colors shadow-[8px_8px_0_0_#2563eb]">ACCEPT_PROTOCOL_</button>
          <span className="text-4xl font-black italic opacity-20">V.2.4_REF</span>
       </div>
    </div>
  </div>
);

// --- 2. Modern Glass Hub (Refraction) ---
export const TermsGlass = () => (
  <div className="relative bg-slate-950 p-16 rounded-[3rem] overflow-hidden min-h-[700px] flex items-center font-sans italic font-bold">
    <div className="absolute top-0 left-[-10%] w-[40rem] h-[40rem] bg-indigo-600 rounded-full mix-blend-screen filter blur-[140px] opacity-20 animate-pulse"></div>
    <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-600 rounded-full mix-blend-screen filter blur-[140px] opacity-20 animate-pulse delay-1000"></div>
    <div className="relative z-10 w-full max-w-5xl mx-auto">
       <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-none italic underline decoration-blue-500/30">Terms_Node</h2>
          <p className="text-blue-400 text-xl lowercase font-medium italic tracking-widest opacity-60">Architecting legal clarity through structural logic.</p>
       </div>
       <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-12 rounded-[2.5rem] shadow-2xl text-left max-h-[600px] overflow-y-auto custom-scrollbar">
          <div className="space-y-12">
             {termsData.map((term, i) => (
                <div key={i} className="group border-l-2 border-white/10 pl-8 hover:border-blue-500 transition-colors">
                   <h3 className="text-2xl font-black text-white uppercase italic mb-4 tracking-tight">{term.title}</h3>
                   <p className="text-slate-400 leading-relaxed font-medium lowercase italic">{term.content}</p>
                </div>
             ))}
          </div>
       </div>
       <div className="mt-12 flex justify-center gap-8">
          <button className="px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white font-black text-xs uppercase tracking-widest italic hover:bg-white hover:text-slate-950 transition-all">DOWNLOAD_PDF_</button>
       </div>
    </div>
  </div>
);

// --- 3. Cyber-Protocol Matrix (Uplink) ---
export const TermsCyber = () => (
  <div className="bg-black p-12 rounded-[3rem] border border-white/5 font-mono italic font-bold relative overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
    <div className="relative z-10 max-w-5xl mx-auto text-left">
       <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
          <div>
             <div className="text-[10px] text-emerald-500 font-black uppercase tracking-[0.5em] mb-4 italic">>> Loading_Legal_Protocol_v4.0.1</div>
             <h2 className="text-6xl font-black text-white uppercase italic tracking-tighter leading-none italic">MANIFEST_</h2>
          </div>
          <div className="text-right text-emerald-500/40 text-[10px] font-black uppercase tracking-widest italic">Node: 0x82A4 <br/> Secure_Link: Active</div>
       </div>
       <div className="space-y-12 max-h-[500px] overflow-y-auto pr-8 custom-scrollbar">
          {termsData.map((term, i) => (
             <div key={i} className="group relative border-l border-emerald-500/20 pl-8 hover:border-emerald-500 transition-colors">
                <div className="absolute top-0 left-[-1px] w-1 h-4 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-emerald-500 text-xl font-black uppercase italic mb-4 tracking-widest">[{i+1}] {term.title}</h3>
                <p className="text-white/60 leading-relaxed uppercase italic text-sm">{term.content}</p>
             </div>
          ))}
       </div>
       <div className="mt-12 p-6 bg-emerald-500/5 border border-emerald-500/20 flex justify-between items-center rounded-xl">
          <p className="text-emerald-500 text-xs font-black italic">_END_OF_DOCUMENT_LOGIC</p>
          <button className="px-6 py-3 bg-emerald-500 text-black font-black text-[10px] uppercase tracking-widest italic hover:bg-white transition-colors">INIT_EXECUTION_</button>
       </div>
    </div>
  </div>
);

// --- 4. Tactile Neumorphic Node ---
export const TermsNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-16 rounded-[3rem] font-sans italic font-bold text-center">
    <div className="max-w-4xl mx-auto bg-[#e0e5ec] p-12 rounded-[3.5rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border border-white/20">
       <div className="text-center mb-16">
          <h2 className="text-6xl font-black text-slate-700 uppercase tracking-tighter italic leading-none mb-4">Soft_Link</h2>
          <p className="text-slate-500 lowercase font-medium italic">Tactile architecture for legal clarity.</p>
       </div>
       <div className="space-y-10 text-left max-h-[500px] overflow-y-auto pr-6 custom-scrollbar">
          {termsData.map((term, i) => (
             <div key={i} className="bg-[#e0e5ec] p-8 rounded-[2rem] shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] group hover:shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-all">
                <h3 className="text-xl font-black text-slate-800 uppercase italic mb-4">{term.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium italic lowercase">{term.content}</p>
             </div>
          ))}
       </div>
       <div className="mt-16 flex justify-center">
          <button className="px-12 py-5 rounded-full bg-[#e0e5ec] text-blue-600 font-black uppercase tracking-widest shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all italic active:scale-95">
             CONFIRM_READ_
          </button>
       </div>
    </div>
  </div>
);

// --- 5. Editorial Magazine (The Brief) ---
export const TermsEditorial = () => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 font-sans italic font-bold">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
       <div className="flex-1 text-left">
          <div className="sticky top-10">
             <h2 className="text-8xl md:text-[10rem] font-black text-slate-950 tracking-tighter uppercase leading-[0.8] mb-12 italic underline decoration-slate-950/10">LEGAL_ <br/> BRIEF.</h2>
             <div className="space-y-4">
                <p className="text-slate-400 text-2xl lowercase font-medium italic">Defining the structural logic of our cooperation.</p>
                <div className="h-2 w-32 bg-slate-950"></div>
             </div>
          </div>
       </div>
       <div className="flex-1 space-y-20 text-left py-10">
          {termsData.map((term, i) => (
             <div key={i} className="group">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30 italic block mb-6">SECTION_0{i+1}</span>
                <h3 className="text-4xl font-black text-slate-950 uppercase italic mb-8 tracking-tight">{term.title}</h3>
                <p className="text-slate-500 text-xl leading-relaxed font-medium lowercase italic">{term.content}</p>
             </div>
          ))}
          <button className="px-16 py-8 bg-slate-950 text-white rounded-full font-black text-xs uppercase tracking-[0.4em] hover:bg-blue-600 transition-all italic shadow-2xl">
             START_ADHERENCE_ →
          </button>
       </div>
    </div>
  </div>
);

// --- 6. Bento Grid Logic (Matrix) ---
export const TermsBento = () => (
  <div className="bg-slate-50 p-12 rounded-[3rem] font-sans italic font-bold">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-6 text-left">
       <div className="md:col-span-4 bg-white rounded-[2.5rem] p-12 border border-slate-100 shadow-xl flex flex-col justify-center">
          <div className="text-[10px] text-blue-600 font-black uppercase tracking-[0.5em] mb-4 italic">// Protocol_Logic_Tree</div>
          <h2 className="text-6xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-12">Agreement_ <br/> Matrix</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {termsData.map((term, i) => (
                <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-slate-950 hover:text-white transition-all group">
                   <h3 className="text-sm font-black uppercase italic tracking-widest mb-2 group-hover:text-blue-400">{term.title}</h3>
                   <p className="text-xs font-medium italic opacity-60 group-hover:opacity-100 leading-relaxed">{term.content}</p>
                </div>
             ))}
          </div>
       </div>
       <div className="md:col-span-2 bg-slate-950 rounded-[2.5rem] p-12 text-white shadow-2xl flex flex-col justify-between">
          <div className="space-y-6">
             <h3 className="text-3xl font-black uppercase italic tracking-tight">Full_Payload_</h3>
             <p className="text-slate-400 text-sm leading-relaxed lowercase italic">Read the complete legal documentation to understand the architectural constraints.</p>
          </div>
          <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest italic hover:bg-white hover:text-slate-950 transition-all">READ_ALL_</button>
       </div>
    </div>
  </div>
);

// --- 7. Split Protocol (Archive) ---
export const TermsSplit = () => (
  <div className="flex flex-col lg:flex-row h-[700px] bg-white rounded-[3rem] overflow-hidden border border-slate-100 font-sans italic font-bold">
    <div className="w-full lg:w-1/3 bg-slate-950 p-12 text-white flex flex-col justify-between text-left">
       <div>
          <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none underline decoration-blue-600/30 underline-offset-8">Terms_ <br/> Archive.</h2>
          <p className="text-slate-400 text-lg font-medium italic lowercase">Structural history of our legal protocols.</p>
       </div>
       <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
          <p className="text-[10px] text-blue-400 font-black uppercase tracking-widest mb-1 italic">Current_Deployment</p>
          <p className="text-xl font-black italic">v.2.4.0_Stable</p>
       </div>
    </div>
    <div className="flex-1 p-12 lg:p-20 overflow-y-auto text-left custom-scrollbar">
       <div className="max-w-2xl space-y-16">
          {termsData.map((term, i) => (
             <div key={i}>
                <h3 className="text-4xl font-black text-slate-950 uppercase italic mb-6 tracking-tighter">{term.title}</h3>
                <p className="text-slate-500 text-xl leading-relaxed font-medium italic lowercase">{term.content}</p>
             </div>
          ))}
       </div>
    </div>
  </div>
);

// --- 8. Minimalist Lineage ---
export const TermsMinimalLineage = () => (
  <div className="bg-white p-20 rounded-[3rem] font-sans italic font-bold border border-slate-100 text-left">
    <div className="max-w-4xl mx-auto">
       <h2 className="text-7xl font-black text-slate-950 tracking-tighter uppercase leading-none mb-20 italic underline decoration-slate-950/10 decoration-8">PROTOCOLS.</h2>
       <div className="space-y-16">
          {termsData.map((term, i) => (
             <div key={i} className="flex flex-col md:flex-row gap-12 group">
                <div className="w-12 h-12 rounded-full bg-slate-950 text-white flex items-center justify-center font-black text-xl flex-shrink-0 italic group-hover:bg-blue-600 transition-colors">{i+1}</div>
                <div>
                   <h3 className="text-3xl font-black text-slate-950 uppercase italic mb-4 tracking-tight">{term.title}</h3>
                   <p className="text-slate-500 text-xl leading-relaxed font-medium italic lowercase">{term.content}</p>
                </div>
             </div>
          ))}
       </div>
    </div>
  </div>
);

// --- 9. Interactive Agreement (Portal) ---
export const TermsAgreement = () => (
  <div className="relative min-h-[600px] bg-slate-50 p-12 rounded-[3rem] font-sans italic font-bold flex items-center justify-center text-left">
    <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden flex flex-col h-[550px]">
       <div className="bg-slate-950 p-8 text-white flex justify-between items-center">
          <div className="space-y-1">
             <h3 className="text-xl font-black uppercase italic tracking-tight">Legal_Check_</h3>
             <p className="text-[10px] text-blue-400 font-black uppercase tracking-widest">Protocol Version: 2.4_Stable</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">⚖️</div>
       </div>
       <div className="p-8 space-y-10 overflow-y-auto flex-1 custom-scrollbar">
          {termsData.map((term, i) => (
             <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-blue-600 transition-colors">
                <h4 className="text-xl font-black uppercase italic mb-2 tracking-tight">{term.title}</h4>
                <p className="text-slate-500 text-sm italic font-medium lowercase leading-relaxed">{term.content}</p>
             </div>
          ))}
       </div>
       <div className="p-8 bg-slate-50/50 border-t border-slate-100">
          <button className="w-full py-5 bg-blue-600 text-white rounded-xl font-black text-xs uppercase tracking-widest italic hover:bg-slate-950 transition-all shadow-xl shadow-blue-900/20">CONFIRM_AND_INITIALIZE_</button>
       </div>
    </div>
  </div>
);

// --- 10. Professional SaaS Hub ---
export const TermsStandard = () => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 font-sans italic font-bold shadow-xl text-left">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
       <div className="w-full lg:w-1/4">
          <div className="sticky top-10">
             <div className="p-10 bg-slate-950 rounded-[2.5rem] text-white">
                <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none mb-8">Terms_ <br/> Portal.</h2>
             </div>
             <div className="mt-8 p-6 border-2 border-slate-100 rounded-[2.5rem] text-center">
                <p className="text-[10px] font-black uppercase opacity-40 italic tracking-widest mb-4">Last_Update</p>
                <p className="text-xl font-black italic">24.10.2024</p>
             </div>
          </div>
       </div>
       <div className="flex-1 space-y-20">
          <div className="pb-10 border-b border-slate-100">
             <h3 className="text-5xl font-black text-slate-950 uppercase italic mb-6 tracking-tighter">Legal_Deployment_</h3>
             <p className="text-slate-400 text-2xl font-medium italic lowercase leading-relaxed">Structural overview of user rights and architectural constraints.</p>
          </div>
          {termsData.map((term, i) => (
             <div key={i}>
                <h4 className="text-3xl font-black text-slate-950 uppercase italic mb-6 tracking-tight flex items-center gap-4">
                   <span className="text-blue-600">//</span> {term.title}
                </h4>
                <p className="text-slate-500 text-xl font-medium italic lowercase leading-relaxed">{term.content}</p>
             </div>
          ))}
       </div>
    </div>
  </div>
);

// --- Main Gallery Wrapper ---
const TermsGallery = () => {
  return (
    <div className="container overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-64">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.2); }
      `}</style>

      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-6xl font-black text-slate-950 mb-6 tracking-tighter uppercase italic leading-none">Terms_Matrix</h1>
        <p className="text-slate-500 font-bold text-xl italic lowercase">Structural legal architecture for modern service nodes.</p>
      </div>
      
      <div className="space-y-32 max-w-7xl mx-auto">
        
        {/* 01. Bold Brutalist */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/cont border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cont:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`import React from 'react';

const TermsBrutalist = () => {
  const termsData = [
    { title: "1. Acceptance of Protocol", content: "By accessing the node, you acknowledge full alignment with the structural logic defined herein. Deviation from defined protocols may result in immediate termination of the secure link." },
    { title: "2. Privacy Architecture", content: "Data encryption is handled at the network edge. We do not persist identifiable user payloads in plaintext. Your identity remains an encrypted node within the matrix." },
    { title: "3. User Constraints", content: "Unauthorized injection of data packets, structural subversion, or interference with concurrent nodes is strictly prohibited under global protocol standards." },
    { title: "4. Termination Logic", content: "The service reserves the right to sever any connection that exhibits anomalous behavior or violates the core integrity of the network architecture." }
  ];

  return (
    <div style={{ background: '#facc15', padding: '48px', borderRadius: '48px', border: '8px solid #020617', fontFamily: 'sans-serif', fontStyle: 'italic', fontWeight: '900', textTransform: 'uppercase', boxShadow: '20px 20px 0 0 #000', overflow: 'hidden' }}>
      <div style={{ maxWidth: '896px', margin: '0 auto', textAlign: 'left' }}>
         <div style={{ background: 'white', border: '6px solid #020617', padding: '40px', marginBottom: '48px', boxShadow: '12px 12px 0 0 #000' }}>
            <h2 style={{ fontSize: '72px', fontWeight: '900', color: '#020617', lineHeight: '0.8', letterSpacing: '-0.05em', margin: '0', textDecoration: 'underline', textDecorationColor: 'rgba(2,6,23,0.2)' }}>THE_ <br/> LAW.</h2>
            <p style={{ marginTop: '32px', fontSize: '24px', fontWeight: '900' }}>Effective_Date: 01.01.2024</p>
         </div>
         <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div style={{ background: 'white', border: '6px solid #020617', padding: '32px', boxShadow: '12px 12px 0 0 #000', transition: 'transform 0.3s ease' }}>
               <h3 style={{ fontSize: '30px', fontWeight: '900', marginBottom: '16px', background: '#020617', color: 'white', display: 'inline-block', padding: '4px 16px' }}>1. Acceptance of Protocol</h3>
               <p style={{ fontSize: '20px', fontWeight: '900', lineHeight: '1.2', color: '#020617', textTransform: 'lowercase', margin: '0' }}>By accessing the node, you acknowledge full alignment with the structural logic defined herein. Deviation from defined protocols may result in immediate termination of the secure link.</p>
            </div>
            <div style={{ background: 'white', border: '6px solid #020617', padding: '32px', boxShadow: '12px 12px 0 0 #000', transition: 'transform 0.3s ease' }}>
               <h3 style={{ fontSize: '30px', fontWeight: '900', marginBottom: '16px', background: '#020617', color: 'white', display: 'inline-block', padding: '4px 16px' }}>2. Privacy Architecture</h3>
               <p style={{ fontSize: '20px', fontWeight: '900', lineHeight: '1.2', color: '#020617', textTransform: 'lowercase', margin: '0' }}>Data encryption is handled at the network edge. We do not persist identifiable user payloads in plaintext. Your identity remains an encrypted node within the matrix.</p>
            </div>
            <div style={{ background: 'white', border: '6px solid #020617', padding: '32px', boxShadow: '12px 12px 0 0 #000', transition: 'transform 0.3s ease' }}>
               <h3 style={{ fontSize: '30px', fontWeight: '900', marginBottom: '16px', background: '#020617', color: 'white', display: 'inline-block', padding: '4px 16px' }}>3. User Constraints</h3>
               <p style={{ fontSize: '20px', fontWeight: '900', lineHeight: '1.2', color: '#020617', textTransform: 'lowercase', margin: '0' }}>Unauthorized injection of data packets, structural subversion, or interference with concurrent nodes is strictly prohibited under global protocol standards.</p>
            </div>
            <div style={{ background: 'white', border: '6px solid #020617', padding: '32px', boxShadow: '12px 12px 0 0 #000', transition: 'transform 0.3s ease' }}>
               <h3 style={{ fontSize: '30px', fontWeight: '900', marginBottom: '16px', background: '#020617', color: 'white', display: 'inline-block', padding: '4px 16px' }}>4. Termination Logic</h3>
               <p style={{ fontSize: '20px', fontWeight: '900', lineHeight: '1.2', color: '#020617', textTransform: 'lowercase', margin: '0' }}>The service reserves the right to sever any connection that exhibits anomalous behavior or violates the core integrity of the network architecture.</p>
            </div>
         </div>
         <div style={{ marginTop: '64px', paddingTop: '48px', borderTop: '8px solid #020617', display: 'flex', justifyContent: 'space-between', align-items: 'center' }}>
            <button style={{ padding: '24px 48px', background: '#020617', color: 'white', fontSize: '24px', fontWeight: '900', fontStyle: 'italic', border: 'none', cursor: 'pointer', boxShadow: '8px 8px 0 0 #2563eb' }}>ACCEPT_PROTOCOL_</button>
            <span style={{ fontSize: '36px', opacity: '0.2', fontWeight: '900' }}>V.2.4_REF</span>
         </div>
      </div>
    </div>
  );
};

export default TermsBrutalist;`} 
              htmlCode={`<!-- Full Expanded Brutalist Terms Manifesto -->
<div class="terms-brutal-root">
  <div class="brutal-manifest">
     <div class="brutal-header">
        <h2 class="brutal-title">THE_ <br/> LAW.</h2>
        <p class="brutal-date">Effective_Date: 01.01.2024</p>
     </div>
     <div class="brutal-sections">
        <div class="brutal-item">
           <h3 class="item-title">1. Acceptance of Protocol</h3>
           <p class="item-text">By accessing the node, you acknowledge full alignment with the structural logic defined herein. Deviation from defined protocols may result in immediate termination of the secure link.</p>
        </div>
        <div class="brutal-item">
           <h3 class="item-title">2. Privacy Architecture</h3>
           <p class="item-text">Data encryption is handled at the network edge. We do not persist identifiable user payloads in plaintext. Your identity remains an encrypted node within the matrix.</p>
        </div>
        <div class="brutal-item">
           <h3 class="item-title">3. User Constraints</h3>
           <p class="item-text">Unauthorized injection of data packets, structural subversion, or interference with concurrent nodes is strictly prohibited under global protocol standards.</p>
        </div>
        <div class="brutal-item">
           <h3 class="item-title">4. Termination Logic</h3>
           <p class="item-text">The service reserves the right to sever any connection that exhibits anomalous behavior or violates the core integrity of the network architecture.</p>
        </div>
     </div>
     <div class="brutal-footer">
        <button class="brutal-btn">ACCEPT_PROTOCOL_</button>
        <span class="brutal-ref">V.2.4_REF</span>
     </div>
  </div>
</div>`} 
              cssCode={`.terms-brutal-root { background: #facc15; padding: 48px; border-radius: 48px; border: 8px solid #020617; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; text-transform: uppercase; box-shadow: 20px 20px 0 0 #000; overflow: hidden; box-sizing: border-box; }
.brutal-manifest { max-width: 896px; margin: 0 auto; text-align: left; }
.brutal-header { background: white; border: 6px solid #020617; padding: 40px; margin-bottom: 48px; box-shadow: 12px 12px 0 0 #000; }
.brutal-title { font-size: 72px; font-weight: 900; color: #020617; line-height: 0.8; letter-spacing: -0.05em; text-decoration: underline; text-decoration-color: rgba(2,6,23,0.2); margin: 0; }
@media (min-width: 768px) { .brutal-title { font-size: 120px; } }
.brutal-date { margin-top: 32px; font-size: 24px; font-weight: 900; font-style: italic; margin-bottom: 0; }
.brutal-sections { display: flex; flex-direction: column; gap: 40px; }
.brutal-item { background: white; border: 6px solid #020617; padding: 32px; box-shadow: 12px 12px 0 0 #000; transition: transform 0.3s ease; }
.brutal-item:hover { transform: translateY(-8px); }
.item-title { font-size: 30px; font-weight: 900; font-style: italic; margin-bottom: 16px; background: #020617; color: white; display: inline-block; padding: 4px 16px; margin-top: 0; }
.item-text { font-size: 20px; font-weight: 900; font-style: italic; line-height: 1.2; color: #020617; text-transform: lowercase; margin: 0; }
.brutal-footer { margin-top: 64px; padding-top: 48px; border-top: 8px solid #020617; display: flex; justify-content: space-between; align-items: center; }
.brutal-btn { padding: 24px 48px; background: #020617; color: white; font-size: 24px; font-weight: 900; font-style: italic; border: none; cursor: pointer; transition: all 0.3s ease; box-shadow: 8px 8px 0 0 #2563eb; }
.brutal-btn:hover { background: #2563eb; transform: translate(-2px, -2px); box-shadow: 10px 10px 0 0 #2563eb; }
.brutal-ref { font-size: 36px; opacity: 0.2; font-weight: 900; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 01. Bold Brutalist THE_LAW Manifesto </span>
          <TermsBrutalist />
        </section>

        {/* 02. Modern Glass Hub */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/cont border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cont:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`import React from 'react';

const TermsGlass = () => {
  return (
    <div style={{ position: 'relative', background: '#020617', padding: '64px', borderRadius: '48px', overflow: 'hidden', minHeight: '700px', display: 'flex', alignItems: 'center', fontFamily: 'sans-serif', fontStyle: 'italic', fontWeight: '700' }}>
      <div style={{ position: 'absolute', top: '0', left: '-10%', width: '640px', height: '640px', background: '#4f46e5', borderRadius: '50%', filter: 'blur(140px)', opacity: '0.2' }}></div>
      <div style={{ relative: 'z-10', width: '100%', maxWidth: '1024px', margin: '0 auto', textAlign: 'center' }}>
         <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '80px', fontWeight: '900', color: 'white', textTransform: 'uppercase', letterSpacing: '-0.05em', lineHeight: '1', textDecoration: 'underline', textDecorationColor: 'rgba(59,130,246,0.3)' }}>Terms_Node</h2>
            <p style={{ color: '#3b82f6', fontSize: '20px', fontWeight: '500', opacity: '0.6', letterSpacing: '0.1em' }}>Architecting legal clarity through structural logic.</p>
         </div>
         <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(40px)', border: '1px solid rgba(255,255,255,0.1)', padding: '48px', borderRadius: '40px', textAlign: 'left', maxHeight: '600px', overflowY: 'auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
               <div style={{ borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '32px' }}>
                  <h3 style={{ color: 'white', fontSize: '24px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '16px' }}>1. Acceptance of Protocol</h3>
                  <p style={{ color: '#94a3b8', lineHeight: '1.6', fontWeight: '500', fontStyle: 'italic', textTransform: 'lowercase' }}>By accessing the node, you acknowledge full alignment with the structural logic defined herein. Deviation from defined protocols may result in immediate termination of the secure link.</p>
               </div>
               <div style={{ borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '32px' }}>
                  <h3 style={{ color: 'white', fontSize: '24px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '16px' }}>2. Privacy Architecture</h3>
                  <p style={{ color: '#94a3b8', lineHeight: '1.6', fontWeight: '500', fontStyle: 'italic', textTransform: 'lowercase' }}>Data encryption is handled at the network edge. We do not persist identifiable user payloads in plaintext. Your identity remains an encrypted node within the matrix.</p>
               </div>
               <div style={{ borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '32px' }}>
                  <h3 style={{ color: 'white', fontSize: '24px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '16px' }}>3. User Constraints</h3>
                  <p style={{ color: '#94a3b8', lineHeight: '1.6', fontWeight: '500', fontStyle: 'italic', textTransform: 'lowercase' }}>Unauthorized injection of data packets, structural subversion, or interference with concurrent nodes is strictly prohibited under global protocol standards.</p>
               </div>
               <div style={{ borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '32px' }}>
                  <h3 style={{ color: 'white', fontSize: '24px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '16px' }}>4. Termination Logic</h3>
                  <p style={{ color: '#94a3b8', lineHeight: '1.6', fontWeight: '500', fontStyle: 'italic', textTransform: 'lowercase' }}>The service reserves the right to sever any connection that exhibits anomalous behavior or violates the core integrity of the network architecture.</p>
               </div>
            </div>
         </div>
         <div style={{ marginTop: '48px' }}>
            <button style={{ padding: '16px 32px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '9999px', color: 'white', fontWeight: '900', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer', fontStyle: 'italic' }}>DOWNLOAD_PDF_</button>
         </div>
      </div>
    </div>
  );
};

export default TermsGlass;`} 
              htmlCode={`<!-- Full Expanded Glassmorphic Terms Hub -->
<div class="terms-glass-root">
  <div class="glass-bg-orb"></div>
  <div class="glass-container">
     <div class="glass-header">
        <h2 class="glass-title">Terms_Node</h2>
        <p class="glass-subtitle">Architecting legal clarity through structural logic.</p>
     </div>
     <div class="glass-document">
        <div class="terms-list">
           <div class="term-node">
              <h3>1. Acceptance of Protocol</h3>
              <p>By accessing the node, you acknowledge full alignment with the structural logic defined herein. Deviation from defined protocols may result in immediate termination of the secure link.</p>
           </div>
           <div class="term-node">
              <h3>2. Privacy Architecture</h3>
              <p>Data encryption is handled at the network edge. We do not persist identifiable user payloads in plaintext. Your identity remains an encrypted node within the matrix.</p>
           </div>
           <div class="term-node">
              <h3>3. User Constraints</h3>
              <p>Unauthorized injection of data packets, structural subversion, or interference with concurrent nodes is strictly prohibited under global protocol standards.</p>
           </div>
           <div class="term-node">
              <h3>4. Termination Logic</h3>
              <p>The service reserves the right to sever any connection that exhibits anomalous behavior or violates the core integrity of the network architecture.</p>
           </div>
        </div>
     </div>
     <div class="glass-footer">
        <button class="glass-btn">DOWNLOAD_PDF_</button>
     </div>
  </div>
</div>`} 
              cssCode={`.terms-glass-root { position: relative; background: #020617; padding: 64px; border-radius: 48px; overflow: hidden; min-height: 700px; display: flex; align-items: center; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; box-sizing: border-box; }
.glass-bg-orb { position: absolute; top: 0; left: -10%; width: 640px; height: 640px; background: #4f46e5; border-radius: 50%; filter: blur(140px); opacity: 0.2; }
.glass-container { position: relative; z-index: 10; width: 100%; max-width: 1024px; margin: 0 auto; text-align: center; }
.glass-header { margin-bottom: 80px; }
.glass-title { font-size: 64px; font-weight: 900; color: white; text-transform: uppercase; letter-spacing: -0.05em; line-height: 1; text-decoration: underline; text-decoration-color: rgba(59,130,246,0.3); margin: 0; }
@media (min-width: 768px) { .glass-title { font-size: 80px; } }
.glass-subtitle { color: #3b82f6; font-size: 20px; font-weight: 500; opacity: 0.6; letter-spacing: 0.1em; margin-top: 8px; }
.glass-document { background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.1); padding: 48px; border-radius: 40px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); text-align: left; }
.terms-list { display: flex; flex-direction: column; gap: 48px; }
.term-node { border-left: 2px solid rgba(255,255,255,0.1); padding-left: 32px; transition: border-color 0.3s ease; }
.term-node:hover { border-color: #3b82f6; }
.term-node h3 { color: white; font-size: 24px; font-weight: 900; text-transform: uppercase; margin-bottom: 16px; margin-top: 0; }
.term-node p { color: #94a3b8; line-height: 1.6; font-weight: 500; font-style: italic; text-transform: lowercase; margin: 0; }
.glass-footer { margin-top: 48px; }
.glass-btn { padding: 16px 32px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 9999px; color: white; font-weight: 900; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; cursor: pointer; transition: all 0.3s ease; font-style: italic; }
.glass-btn:hover { background: white; color: #020617; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 02. Modern Glass Refractive Terms Hub </span>
          <TermsGlass />
        </section>

        {/* 03. Cyber-Protocol Matrix */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/cont border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cont:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`import React from 'react';

const TermsCyber = () => {
  return (
    <div style={{ background: '#000', padding: '48px', borderRadius: '48px', border: '1px solid rgba(255,255,255,0.05)', fontFamily: 'monospace', fontStyle: 'italic', fontWeight: '700', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%), linear-gradient(90deg, rgba(255,0,0,0.06), rgba(0,255,0,0.02), rgba(0,0,255,0.06))', backgroundSize: '100% 2px, 3px 100%', pointerEvents: 'none', opacity: '0.2' }}></div>
      <div style={{ relative: 'z-10', maxWidth: '1024px', margin: '0 auto', textAlign: 'left' }}>
         <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '24px', marginBottom: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
               <div style={{ fontSize: '10px', color: '#10b981', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.5em', marginBottom: '16px' }}>>> Loading_Legal_Protocol_v4.0.1</div>
               <h2 style={{ fontSize: '64px', color: 'white', fontWeight: '900', textTransform: 'uppercase', lineHeight: '1' }}>MANIFEST_</h2>
            </div>
            <div style={{ textAlign: 'right', color: 'rgba(16,185,129,0.4)', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Node: 0x82A4 <br/> Secure_Link: Active</div>
         </div>
         <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', maxHeight: '500px', overflowY: 'auto' }}>
            <div style={{ borderLeft: '1px solid rgba(16,185,129,0.2)', paddingLeft: '32px' }}>
               <h3 style={{ color: '#10b981', fontSize: '20px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px' }}>[1] 1. Acceptance of Protocol</h3>
               <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.6', textTransform: 'uppercase' }}>By accessing the node, you acknowledge full alignment with the structural logic defined herein. Deviation from defined protocols may result in immediate termination of the secure link.</p>
            </div>
            <div style={{ borderLeft: '1px solid rgba(16,185,129,0.2)', paddingLeft: '32px' }}>
               <h3 style={{ color: '#10b981', fontSize: '20px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px' }}>[2] 2. Privacy Architecture</h3>
               <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.6', textTransform: 'uppercase' }}>Data encryption is handled at the network edge. We do not persist identifiable user payloads in plaintext. Your identity remains an encrypted node within the matrix.</p>
            </div>
            <div style={{ borderLeft: '1px solid rgba(16,185,129,0.2)', paddingLeft: '32px' }}>
               <h3 style={{ color: '#10b981', fontSize: '20px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px' }}>[3] 3. User Constraints</h3>
               <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.6', textTransform: 'uppercase' }}>Unauthorized injection of data packets, structural subversion, or interference with concurrent nodes is strictly prohibited under global protocol standards.</p>
            </div>
            <div style={{ borderLeft: '1px solid rgba(16,185,129,0.2)', paddingLeft: '32px' }}>
               <h3 style={{ color: '#10b981', fontSize: '20px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px' }}>[4] 4. Termination Logic</h3>
               <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.6', textTransform: 'uppercase' }}>The service reserves the right to sever any connection that exhibits anomalous behavior or violates the core integrity of the network architecture.</p>
            </div>
         </div>
         <div style={{ marginTop: '48px', padding: '24px', background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#10b981', fontSize: '10px', fontWeight: '900' }}>_END_OF_DOCUMENT_LOGIC</span>
            <button style={{ padding: '12px 24px', background: '#10b981', color: '#000', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em', border: 'none', cursor: 'pointer', fontStyle: 'italic' }}>INIT_EXECUTION_</button>
         </div>
      </div>
    </div>
  );
};

export default TermsCyber;`} 
              htmlCode={`<!-- Full Expanded Cyber-Protocol Terms Matrix -->
<div class="terms-cyber-root">
  <div class="cyber-scanlines"></div>
  <div class="cyber-container">
     <div class="cyber-header">
        <div class="cyber-port">>> Loading_Legal_Protocol_v4.0.1</div>
        <h2 class="cyber-title">MANIFEST_</h2>
        <div class="cyber-status">Node: 0x82A4 <br/> Secure_Link: Active</div>
     </div>
     <div class="cyber-content">
        <div class="cyber-item">
           <h3>[1] Acceptance of Protocol</h3>
           <p>By accessing the node, you acknowledge full alignment with the structural logic defined herein. Deviation from defined protocols may result in immediate termination of the secure link.</p>
        </div>
        <div class="cyber-item">
           <h3>[2] Privacy Architecture</h3>
           <p>Data encryption is handled at the network edge. We do not persist identifiable user payloads in plaintext. Your identity remains an encrypted node within the matrix.</p>
        </div>
        <div class="cyber-item">
           <h3>[3] User Constraints</h3>
           <p>Unauthorized injection of data packets, structural subversion, or interference with concurrent nodes is strictly prohibited under global protocol standards.</p>
        </div>
        <div class="cyber-item">
           <h3>[4] Termination Logic</h3>
           <p>The service reserves the right to sever any connection that exhibits anomalous behavior or violates the core integrity of the network architecture.</p>
        </div>
     </div>
     <div class="cyber-footer">
        <span class="footer-log">_END_OF_DOCUMENT_LOGIC</span>
        <button class="footer-btn">INIT_EXECUTION_</button>
     </div>
  </div>
</div>`} 
              cssCode={`.terms-cyber-root { background: #000; padding: 48px; border-radius: 48px; border: 1px solid rgba(255,255,255,0.05); font-family: 'JetBrains Mono', monospace; font-style: italic; font-weight: 700; position: relative; overflow: hidden; box-sizing: border-box; }
.cyber-scanlines { position: absolute; inset: 0; background: linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%), linear-gradient(90deg, rgba(255,0,0,0.06), rgba(0,255,0,0.02), rgba(0,0,255,0.06)); background-size: 100% 2px, 3px 100%; pointer-events: none; opacity: 0.2; }
.cyber-container { position: relative; z-index: 10; max-width: 1024px; margin: 0 auto; text-align: left; }
.cyber-header { border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 24px; margin-bottom: 48px; display: flex; justify-content: space-between; align-items: flex-end; }
.cyber-port { font-size: 10px; color: #10b981; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; margin-bottom: 16px; }
.cyber-title { font-size: 64px; color: white; font-weight: 900; text-transform: uppercase; line-height: 1; letter-spacing: -0.05em; margin: 0; }
.cyber-status { text-align: right; color: rgba(16,185,129,0.4); font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; }
.cyber-content { display: flex; flex-direction: column; gap: 48px; max-height: 500px; overflow-y: auto; padding-right: 32px; }
.cyber-item { border-left: 1px solid rgba(16,185,129,0.2); padding-left: 32px; transition: border-color 0.3s ease; }
.cyber-item:hover { border-color: #10b981; }
.cyber-item h3 { color: #10b981; font-size: 20px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 16px; margin-top: 0; }
.cyber-item p { color: rgba(255,255,255,0.6); font-size: 14px; line-height: 1.6; text-transform: uppercase; margin: 0; }
.cyber-footer { margin-top: 48px; padding: 24px; background: rgba(16,185,129,0.05); border: 1px solid rgba(16,185,129,0.2); border-radius: 12px; display: flex; justify-content: space-between; align-items: center; }
.footer-log { color: #10b981; font-size: 10px; font-weight: 900; }
.footer-btn { padding: 12px 24px; background: #10b981; color: #000; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; border: none; cursor: pointer; transition: background 0.3s ease; font-style: italic; }
.footer-btn:hover { background: #fff; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 03. Cyber-Protocol Matrix Manifesto </span>
          <TermsCyber />
        </section>

        {/* 04. Tactile Neumorphic */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/cont border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cont:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`import React from 'react';

const TermsNeumorphic = () => {
  return (
    <div style={{ background: '#e0e5ec', padding: '64px', borderRadius: '48px', fontFamily: 'sans-serif', fontStyle: 'italic', fontWeight: '700', textAlign: 'center' }}>
      <div style={{ maxWidth: '896px', margin: '0 auto', background: '#e0e5ec', padding: '48px', borderRadius: '56px', boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff', border: '1px solid rgba(255,255,255,0.2)' }}>
         <div style={{ marginBottom: '64px' }}>
            <h2 style={{ fontSize: '64px', fontWeight: '900', color: '#475569', textTransform: 'uppercase', letterSpacing: '-0.05em', lineHeight: '1', marginBottom: '16px' }}>Soft_Link</h2>
            <p style={{ color: '#64748b', fontSize: '18px', textTransform: 'lowercase', fontWeight: '500' }}>Tactile architecture for legal clarity.</p>
         </div>
         <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', textAlign: 'left' }}>
            <div style={{ background: '#e0e5ec', padding: '32px', borderRadius: '32px', boxShadow: 'inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff' }}>
               <h3 style={{ fontSize: '20px', fontWeight: '900', color: '#1e293b', textTransform: 'uppercase', marginBottom: '16px' }}>1. Acceptance of Protocol</h3>
               <p style={{ color: '#475569', lineHeight: '1.6', fontWeight: '500', fontStyle: 'italic', textTransform: 'lowercase' }}>By accessing the node, you acknowledge full alignment with the structural logic defined herein. Deviation from defined protocols may result in immediate termination of the secure link.</p>
            </div>
            <div style={{ background: '#e0e5ec', padding: '32px', borderRadius: '32px', boxShadow: 'inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff' }}>
               <h3 style={{ fontSize: '20px', fontWeight: '900', color: '#1e293b', textTransform: 'uppercase', marginBottom: '16px' }}>2. Privacy Architecture</h3>
               <p style={{ color: '#475569', lineHeight: '1.6', fontWeight: '500', fontStyle: 'italic', textTransform: 'lowercase' }}>Data encryption is handled at the network edge. We do not persist identifiable user payloads in plaintext. Your identity remains an encrypted node within the matrix.</p>
            </div>
            <div style={{ background: '#e0e5ec', padding: '32px', borderRadius: '32px', boxShadow: 'inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff' }}>
               <h3 style={{ fontSize: '20px', fontWeight: '900', color: '#1e293b', textTransform: 'uppercase', marginBottom: '16px' }}>3. User Constraints</h3>
               <p style={{ color: '#475569', lineHeight: '1.6', fontWeight: '500', fontStyle: 'italic', textTransform: 'lowercase' }}>Unauthorized injection of data packets, structural subversion, or interference with concurrent nodes is strictly prohibited under global protocol standards.</p>
            </div>
            <div style={{ background: '#e0e5ec', padding: '32px', borderRadius: '32px', boxShadow: 'inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff' }}>
               <h3 style={{ fontSize: '20px', fontWeight: '900', color: '#1e293b', textTransform: 'uppercase', marginBottom: '16px' }}>4. Termination Logic</h3>
               <p style={{ color: '#475569', lineHeight: '1.6', fontWeight: '500', fontStyle: 'italic', textTransform: 'lowercase' }}>The service reserves the right to sever any connection that exhibits anomalous behavior or violates the core integrity of the network architecture.</p>
            </div>
         </div>
         <div style={{ marginTop: '64px' }}>
            <button style={{ padding: '20px 48px', background: '#e0e5ec', border: 'none', borderRadius: '9999px', color: '#2563eb', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff', cursor: 'pointer', fontStyle: 'italic' }}>CONFIRM_READ_</button>
         </div>
      </div>
    </div>
  );
};

export default TermsNeumorphic;`} 
              htmlCode={`<!-- Full Expanded Neumorphic Soft Terms Node -->
<div class="terms-neu-root">
  <div class="neu-box">
     <div class="neu-header">
        <h2 class="neu-title">Soft_Link</h2>
        <p class="neu-desc">Tactile architecture for legal clarity.</p>
     </div>
     <div class="neu-content">
        <div class="neu-item">
           <h3>1. Acceptance of Protocol</h3>
           <p>By accessing the node, you acknowledge full alignment with the structural logic defined herein. Deviation from defined protocols may result in immediate termination of the secure link.</p>
        </div>
        <div class="neu-item">
           <h3>2. Privacy Architecture</h3>
           <p>Data encryption is handled at the network edge. We do not persist identifiable user payloads in plaintext. Your identity remains an encrypted node within the matrix.</p>
        </div>
        <div class="neu-item">
           <h3>3. User Constraints</h3>
           <p>Unauthorized injection of data packets, structural subversion, or interference with concurrent nodes is strictly prohibited under global protocol standards.</p>
        </div>
        <div class="neu-item">
           <h3>4. Termination Logic</h3>
           <p>The service reserves the right to sever any connection that exhibits anomalous behavior or violates the core integrity of the network architecture.</p>
        </div>
     </div>
     <div class="neu-footer">
        <button class="neu-btn">CONFIRM_READ_</button>
     </div>
  </div>
</div>`} 
              cssCode={`.terms-neu-root { background: #e0e5ec; padding: 64px; border-radius: 48px; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; text-align: center; box-sizing: border-box; }
.neu-box { max-width: 896px; margin: 0 auto; background: #e0e5ec; padding: 48px; border-radius: 56px; box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; border: 1px solid rgba(255,255,255,0.2); }
.neu-header { margin-bottom: 64px; }
.neu-title { font-size: 64px; font-weight: 900; color: #475569; text-transform: uppercase; letter-spacing: -0.05em; line-height: 1; margin-bottom: 16px; margin-top: 0; }
.neu-desc { color: #64748b; font-size: 18px; text-transform: lowercase; font-weight: 500; margin: 0; }
.neu-content { display: flex; flex-direction: column; gap: 40px; text-align: left; }
.neu-item { background: #e0e5ec; padding: 32px; border-radius: 32px; box-shadow: inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff; transition: all 0.3s ease; }
.neu-item:hover { box-shadow: 6px 6px 12px #bebebe, -6px -6px 12px #ffffff; }
.neu-item h3 { font-size: 20px; font-weight: 900; color: #1e293b; text-transform: uppercase; margin-bottom: 16px; margin-top: 0; }
.neu-item p { color: #475569; line-height: 1.6; font-weight: 500; font-style: italic; text-transform: lowercase; margin: 0; }
.neu-footer { margin-top: 64px; }
.neu-btn { padding: 20px 48px; background: #e0e5ec; border: none; border-radius: 9999px; color: #2563eb; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff; cursor: pointer; transition: all 0.3s ease; font-style: italic; }
.neu-btn:hover { box-shadow: inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 04. Neumorphic Tactile Soft Terms </span>
          <TermsNeumorphic />
        </section>

        {/* 05. Editorial Magazine */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/cont border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cont:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`import React from 'react';

const TermsEditorial = () => {
  return (
    <div style={{ background: 'white', padding: '48px', borderRadius: '48px', border: '1px solid #f1f5f9', fontFamily: 'sans-serif', fontStyle: 'italic', fontWeight: '700' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'row', gap: '80px' }}>
         <div style={{ flex: '1', textAlign: 'left' }}>
            <div style={{ position: 'sticky', top: '40px' }}>
               <h2 style={{ fontSize: '160px', fontWeight: '900', color: '#020617', textTransform: 'uppercase', lineHeight: '0.8', marginBottom: '48px', textDecoration: 'underline', textDecorationColor: 'rgba(2,6,23,0.1)' }}>LEGAL_ <br/> BRIEF.</h2>
               <p style={{ color: '#94a3b8', fontSize: '24px', textTransform: 'lowercase', fontWeight: '500', maxWidth: '320px' }}>Defining the structural logic of our cooperation.</p>
            </div>
         </div>
         <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '80px', textAlign: 'left', padding: '40px 0' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
               <span style={{ fontSize: '10px', font_weight: '900', textTransform: 'uppercase', letterSpacing: '0.5em', opacity: '0.3', marginBottom: '24px' }}>SECTION_01</span>
               <h3 style={{ fontSize: '36px', fontWeight: '900', color: '#020617', textTransform: 'uppercase', letterSpacing: '-0.05em', marginBottom: '32px' }}>1. Acceptance of Protocol</h3>
               <p style={{ color: '#64748b', fontSize: '20px', lineHeight: '1.6', fontWeight: '500', textTransform: 'lowercase' }}>By accessing the node, you acknowledge full alignment with the structural logic defined herein. Deviation from defined protocols may result in immediate termination of the secure link.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
               <span style={{ fontSize: '10px', font_weight: '900', textTransform: 'uppercase', letterSpacing: '0.5em', opacity: '0.3', marginBottom: '24px' }}>SECTION_02</span>
               <h3 style={{ fontSize: '36px', fontWeight: '900', color: '#020617', textTransform: 'uppercase', letterSpacing: '-0.05em', marginBottom: '32px' }}>2. Privacy Architecture</h3>
               <p style={{ color: '#64748b', fontSize: '20px', lineHeight: '1.6', fontWeight: '500', textTransform: 'lowercase' }}>Data encryption is handled at the network edge. We do not persist identifiable user payloads in plaintext. Your identity remains an encrypted node within the matrix.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
               <span style={{ fontSize: '10px', font_weight: '900', textTransform: 'uppercase', letterSpacing: '0.5em', opacity: '0.3', marginBottom: '24px' }}>SECTION_03</span>
               <h3 style={{ fontSize: '36px', fontWeight: '900', color: '#020617', textTransform: 'uppercase', letterSpacing: '-0.05em', marginBottom: '32px' }}>3. User Constraints</h3>
               <p style={{ color: '#64748b', fontSize: '20px', lineHeight: '1.6', fontWeight: '500', textTransform: 'lowercase' }}>Unauthorized injection of data packets, structural subversion, or interference with concurrent nodes is strictly prohibited under global protocol standards.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
               <span style={{ fontSize: '10px', font_weight: '900', textTransform: 'uppercase', letterSpacing: '0.5em', opacity: '0.3', marginBottom: '24px' }}>SECTION_04</span>
               <h3 style={{ fontSize: '36px', fontWeight: '900', color: '#020617', textTransform: 'uppercase', letterSpacing: '-0.05em', marginBottom: '32px' }}>4. Termination Logic</h3>
               <p style={{ color: '#64748b', fontSize: '20px', lineHeight: '1.6', fontWeight: '500', textTransform: 'lowercase' }}>The service reserves the right to sever any connection that exhibits anomalous behavior or violates the core integrity of the network architecture.</p>
            </div>
            <button style={{ alignSelf: 'flex-start', padding: '32px 64px', background: '#020617', color: 'white', borderRadius: '9999px', fontWeight: '900', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.4em', border: 'none', cursor: 'pointer', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.2)', fontStyle: 'italic' }}>START_ADHERENCE_ →</button>
         </div>
      </div>
    </div>
  );
};

export default TermsEditorial;`} 
              htmlCode={`<!-- Full Expanded Editorial Terms Brief -->
<div class="terms-editorial-root">
  <div class="editorial-container">
     <div class="editorial-sidebar">
        <h2 class="editorial-title">LEGAL_ <br/> BRIEF.</h2>
        <p class="editorial-subtitle">Defining structural logic of our cooperation.</p>
     </div>
     <div class="editorial-content">
        <div class="editorial-section">
           <span class="section-label">SECTION_01</span>
           <h3>1. Acceptance of Protocol</h3>
           <p>By accessing the node, you acknowledge full alignment with the structural logic defined herein. Deviation from defined protocols may result in immediate termination of the secure link.</p>
        </div>
        <div class="editorial-section">
           <span class="section-label">SECTION_02</span>
           <h3>2. Privacy Architecture</h3>
           <p>Data encryption is handled at the network edge. We do not persist identifiable user payloads in plaintext. Your identity remains an encrypted node within the matrix.</p>
        </div>
        <div class="editorial-section">
           <span class="section-label">SECTION_03</span>
           <h3>3. User Constraints</h3>
           <p>Unauthorized injection of data packets, structural subversion, or interference with concurrent nodes is strictly prohibited under global protocol standards.</p>
        </div>
        <div class="editorial-section">
           <span class="section-label">SECTION_04</span>
           <h3>4. Termination Logic</h3>
           <p>The service reserves the right to sever any connection that exhibits anomalous behavior or violates the core integrity of the network architecture.</p>
        </div>
        <button class="editorial-btn">START_ADHERENCE_ →</button>
     </div>
  </div>
</div>`} 
              cssCode={`.terms-editorial-root { background: white; padding: 48px; border-radius: 48px; border: 1px solid #f1f5f9; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; box-sizing: border-box; }
.editorial-container { max-width: 1280px; margin: 0 auto; display: flex; flex-direction: column; gap: 80px; }
@media (min-width: 1024px) { .editorial-container { flex-direction: row; } }
.editorial-sidebar { flex: 1; text-align: left; }
.editorial-title { font-size: 80px; font-weight: 900; color: #020617; text-transform: uppercase; line-height: 0.8; margin-bottom: 48px; text-decoration: underline; text-decoration-color: rgba(2,6,23,0.1); margin-top: 0; }
@media (min-width: 768px) { .editorial-title { font-size: 160px; } }
.editorial-subtitle { color: #94a3b8; font-size: 24px; text-transform: lowercase; font-weight: 500; max-width: 320px; margin: 0; }
.editorial-content { flex: 1; display: flex; flex-direction: column; gap: 80px; text-align: left; padding: 40px 0; }
.editorial-section { display: flex; flex-direction: column; }
.section-label { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; opacity: 0.3; margin-bottom: 24px; }
.editorial-section h3 { font-size: 36px; font-weight: 900; color: #020617; text-transform: uppercase; letter-spacing: -0.05em; margin-bottom: 32px; margin-top: 0; }
.editorial-section p { color: #64748b; font-size: 20px; line-height: 1.6; font-weight: 500; text-transform: lowercase; margin: 0; }
.editorial-btn { align-self: flex-start; padding: 32px 64px; background: #020617; color: white; border-radius: 9999px; font-weight: 900; font-size: 12px; text-transform: uppercase; letter-spacing: 0.4em; border: none; cursor: pointer; transition: background 0.3s ease; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.2); font-style: italic; }
.editorial-btn:hover { background: #2563eb; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 05. Editorial Magazine Legal Brief </span>
          <TermsEditorial />
        </section>

        {/* 06. Bento Grid Logic */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/cont border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cont:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`import React from 'react';

const TermsBento = () => {
  return (
    <div style={{ background: '#f8fafc', padding: '48px', borderRadius: '48px', fontFamily: 'sans-serif', fontStyle: 'italic', fontWeight: '700' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '24px', textAlign: 'left' }}>
         <div style={{ gridColumn: 'span 4', background: 'white', borderRadius: '40px', padding: '48px', border: '1px solid #f1f5f9', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '10px', color: '#2563eb', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.5em', marginBottom: '16px' }}>// Protocol_Logic_Tree</div>
            <h2 style={{ fontSize: '60px', fontWeight: '900', color: '#020617', textTransform: 'uppercase', lineHeight: '1', marginBottom: '48px' }}>Agreement_ <br/> Matrix</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
               <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>1. Acceptance of Protocol</h3>
                  <p style={{ fontSize: '12px', fontWeight: '500', opacity: '0.6', lineHeight: '1.6' }}>By accessing the node, you acknowledge full alignment with the structural logic defined herein.</p>
               </div>
               <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>2. Privacy Architecture</h3>
                  <p style={{ fontSize: '12px', fontWeight: '500', opacity: '0.6', lineHeight: '1.6' }}>Data encryption is handled at the network edge. Your identity remains an encrypted node within the matrix.</p>
               </div>
               <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>3. User Constraints</h3>
                  <p style={{ fontSize: '12px', fontWeight: '500', opacity: '0.6', lineHeight: '1.6' }}>Unauthorized injection of data packets or structural subversion is strictly prohibited.</p>
               </div>
               <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>4. Termination Logic</h3>
                  <p style={{ fontSize: '12px', fontWeight: '500', opacity: '0.6', lineHeight: '1.6' }}>The service reserves the right to sever any connection that exhibits anomalous behavior.</p>
               </div>
            </div>
         </div>
         <div style={{ gridColumn: 'span 2', background: '#020617', borderRadius: '40px', padding: '48px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '32px', fontWeight: '900', textTransform: 'uppercase' }}>Full_Payload_</h3>
            <button style={{ width: '100%', padding: '20px', background: '#2563eb', color: 'white', borderRadius: '16px', fontWeight: '900', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', border: 'none', cursor: 'pointer' }}>READ_ALL_</button>
         </div>
      </div>
    </div>
  );
};

export default TermsBento;`} 
              htmlCode={`<!-- Full Expanded Bento Agreement Matrix -->
<div class="terms-bento-root">
  <div class="bento-container">
     <div class="bento-main">
        <div class="main-label">// Protocol_Logic_Tree</div>
        <h2 class="main-title">Agreement_ <br/> Matrix</h2>
        <div class="matrix-grid">
           <div class="matrix-item">
              <h3>1. Acceptance of Protocol</h3>
              <p>By accessing the node, you acknowledge full alignment with the structural logic defined herein.</p>
           </div>
           <div class="matrix-item">
              <h3>2. Privacy Architecture</h3>
              <p>Data encryption is handled at the network edge. Your identity remains an encrypted node within the matrix.</p>
           </div>
           <div class="matrix-item">
              <h3>3. User Constraints</h3>
              <p>Unauthorized injection of data packets or structural subversion is strictly prohibited.</p>
           </div>
           <div class="matrix-item">
              <h3>4. Termination Logic</h3>
              <p>The service reserves the right to sever any connection that exhibits anomalous behavior.</p>
           </div>
        </div>
     </div>
     <div class="bento-sidebar">
        <h3>Full_Payload_</h3>
        <button class="bento-btn">READ_ALL_</button>
     </div>
  </div>
</div>`} 
              cssCode={`.terms-bento-root { background: #f8fafc; padding: 48px; border-radius: 48px; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; box-sizing: border-box; }
.bento-container { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 24px; }
@media (min-width: 768px) { .bento-container { grid-template-columns: repeat(6, 1fr); } }
.bento-main { grid-column: span 4; background: white; border-radius: 40px; padding: 48px; border: 1px solid #f1f5f9; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); text-align: left; }
.main-label { font-size: 10px; color: #2563eb; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; margin-bottom: 16px; }
.main-title { font-size: 60px; font-weight: 900; color: #020617; text-transform: uppercase; line-height: 1; margin-bottom: 48px; margin-top: 0; }
.matrix-grid { display: grid; grid-template-columns: 1fr; gap: 32px; }
@media (min-width: 768px) { .matrix-grid { grid-template-columns: repeat(2, 1fr); } }
.matrix-item { background: #f8fafc; padding: 24px; border-radius: 16px; border: 1px solid #f1f5f9; transition: all 0.3s ease; }
.matrix-item:hover { background: #020617; color: white; }
.matrix-item h3 { font-size: 14px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px; margin-top: 0; }
.matrix-item:hover h3 { color: #3b82f6; }
.matrix-item p { font-size: 12px; font-weight: 500; line-height: 1.6; font-style: italic; opacity: 0.6; margin: 0; }
.matrix-item:hover p { opacity: 1; }
.bento-sidebar { grid-column: span 2; background: #020617; border-radius: 40px; padding: 48px; color: white; display: flex; flex-direction: column; justify-content: space-between; text-align: left; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.4); }
.bento-sidebar h3 { font-size: 32px; font-weight: 900; text-transform: uppercase; margin-top: 0; }
.bento-btn { width: 100%; padding: 20px; background: #2563eb; color: white; border-radius: 16px; font-weight: 900; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; border: none; cursor: pointer; transition: all 0.3s ease; font-style: italic; }
.bento-btn:hover { background: white; color: #020617; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 06. Bento Grid Terms Logic Matrix </span>
          <TermsBento />
        </section>

        {/* 07. Split Protocol */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/cont border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cont:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`import React from 'react';

const TermsSplit = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '700px', background: 'white', borderRadius: '48px', overflow: 'hidden', border: '1px solid #f1f5f9', fontFamily: 'sans-serif', fontStyle: 'italic', fontWeight: '700', textAlign: 'left' }}>
      <div style={{ width: '33.333333%', background: '#020617', padding: '48px', color: 'white', display: 'flex', flexDirection: 'column', justify_content: 'space-between' }}>
         <div>
            <h2 style={{ fontSize: '48px', fontWeight: '900', textTransform: 'uppercase', lineHeight: '1', letterSpacing: '-0.05em', marginBottom: '32px', textDecoration: 'underline', textDecorationColor: 'rgba(37,99,235,0.3)', textUnderlineOffset: '8px' }}>Terms_ <br/> Archive.</h2>
            <p style={{ color: '#94a3b8', fontSize: '18px', fontWeight: '500', textTransform: 'lowercase' }}>Structural history of our legal protocols.</p>
         </div>
         <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', borderRadius: '16px' }}>
            <p style={{ fontSize: '10px', color: '#3b82f6', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Current_Deployment</p>
            <p style={{ fontSize: '20px', fontWeight: '900' }}>v.2.4.0_Stable</p>
         </div>
      </div>
      <div style={{ flex: '1', padding: '80px', overflowY: 'auto' }}>
         <div style={{ maxWidth: '672px', display: 'flex', flexDirection: 'column', gap: '64px' }}>
            <div>
               <h3 style={{ fontSize: '36px', fontWeight: '900', color: '#020617', textTransform: 'uppercase', letterSpacing: '-0.05em', marginBottom: '24px' }}>1. Acceptance of Protocol</h3>
               <p style={{ color: '#64748b', fontSize: '20px', lineHeight: '1.6', fontWeight: '500', textTransform: 'lowercase' }}>By accessing the node, you acknowledge full alignment with the structural logic defined herein.</p>
            </div>
            <div>
               <h3 style={{ fontSize: '36px', fontWeight: '900', color: '#020617', textTransform: 'uppercase', letterSpacing: '-0.05em', marginBottom: '24px' }}>2. Privacy Architecture</h3>
               <p style={{ color: '#64748b', fontSize: '20px', lineHeight: '1.6', fontWeight: '500', textTransform: 'lowercase' }}>Data encryption is handled at the network edge. Your identity remains an encrypted node within the matrix.</p>
            </div>
            <div>
               <h3 style={{ fontSize: '36px', fontWeight: '900', color: '#020617', textTransform: 'uppercase', letterSpacing: '-0.05em', marginBottom: '24px' }}>3. User Constraints</h3>
               <p style={{ color: '#64748b', fontSize: '20px', lineHeight: '1.6', fontWeight: '500', textTransform: 'lowercase' }}>Unauthorized injection of data packets or structural subversion is strictly prohibited.</p>
            </div>
            <div>
               <h3 style={{ fontSize: '36px', fontWeight: '900', color: '#020617', textTransform: 'uppercase', letterSpacing: '-0.05em', marginBottom: '24px' }}>4. Termination Logic</h3>
               <p style={{ color: '#64748b', fontSize: '20px', lineHeight: '1.6', fontWeight: '500', textTransform: 'lowercase' }}>The service reserves the right to sever any connection that exhibits anomalous behavior.</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default TermsSplit;`} 
              htmlCode={`<!-- Full Expanded Split Protocol Terms Archive -->
<div class="terms-split-root">
  <div class="split-sidebar">
     <div class="sidebar-header">
        <h2 class="sidebar-title">Terms_ <br/> Archive.</h2>
        <p class="sidebar-subtitle">Structural history of our legal protocols.</p>
     </div>
     <div class="sidebar-footer">
        <span class="version-label">Current_Deployment</span>
        <span class="version-tag">v.2.4.0_Stable</span>
     </div>
  </div>
  <div class="split-content">
     <div class="doc-section">
        <h3>1. Acceptance of Protocol</h3>
        <p>By accessing the node, you acknowledge full alignment with the structural logic defined herein.</p>
     </div>
     <div class="doc-section">
        <h3>2. Privacy Architecture</h3>
        <p>Data encryption is handled at the network edge. Your identity remains an encrypted node within the matrix.</p>
     </div>
     <div class="doc-section">
        <h3>3. User Constraints</h3>
        <p>Unauthorized injection of data packets or structural subversion is strictly prohibited.</p>
     </div>
     <div class="doc-section">
        <h3>4. Termination Logic</h3>
        <p>The service reserves the right to sever any connection that exhibits anomalous behavior.</p>
     </div>
  </div>
</div>`} 
              cssCode={`.terms-split-root { display: flex; flex-direction: column; background: white; border-radius: 48px; border: 1px solid #f1f5f9; height: 700px; overflow: hidden; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; text-align: left; box-sizing: border-box; }
@media (min-width: 1024px) { .terms-split-root { flex-direction: row; } }
.split-sidebar { width: 100%; background: #020617; padding: 48px; color: white; display: flex; flex-direction: column; justify-content: space-between; }
@media (min-width: 1024px) { .split-sidebar { width: 33.333333%; } }
.sidebar-title { font-size: 48px; font-weight: 900; text-transform: uppercase; line-height: 1; letter-spacing: -0.05em; margin-bottom: 32px; margin-top: 0; text-decoration: underline; text-decoration-color: rgba(37,99,235,0.3); text-underline-offset: 8px; }
.sidebar-subtitle { color: #94a3b8; font-size: 18px; font-weight: 500; text-transform: lowercase; margin: 0; }
.sidebar-footer { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 16px; border-radius: 16px; }
.version-label { font-size: 10px; color: #3b82f6; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 4px; }
.version-tag { font-size: 20px; font-weight: 900; }
.split-content { flex: 1; padding: 80px; overflow-y: auto; display: flex; flex-direction: column; gap: 64px; }
.doc-section h3 { font-size: 36px; font-weight: 900; color: #020617; text-transform: uppercase; letter-spacing: -0.05em; margin-bottom: 24px; margin-top: 0; }
.doc-section p { color: #64748b; font-size: 20px; line-height: 1.6; font-weight: 500; text-transform: lowercase; margin: 0; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 07. Split Protocol Fixed Archive </span>
          <TermsSplit />
        </section>

        {/* 08. Minimalist Lineage */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/cont border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cont:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`import React from 'react';

const TermsMinimalLineage = () => {
  return (
    <div style={{ background: 'white', padding: '80px', borderRadius: '48px', border: '1px solid #f1f5f9', fontFamily: 'sans-serif', fontStyle: 'italic', fontWeight: '700', textAlign: 'left' }}>
      <div style={{ maxWidth: '896px', margin: '0 auto' }}>
         <h2 style={{ fontSize: '72px', fontWeight: '900', color: '#020617', textTransform: 'uppercase', lineHeight: '1', letterSpacing: '-0.05em', marginBottom: '80px', textDecoration: 'underline', textDecorationColor: 'rgba(2,6,23,0.1)' }}>PROTOCOLS.</h2>
         <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '48px' }}>
               <div style={{ width: '48px', height: '48px', background: '#020617', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: '900', fontStyle: 'italic', flexShrink: '0' }}>1</div>
               <div>
                  <h3 style={{ fontSize: '30px', fontWeight: '900', color: '#020617', textTransform: 'uppercase', marginBottom: '16px' }}>1. Acceptance of Protocol</h3>
                  <p style={{ color: '#64748b', fontSize: '20px', lineHeight: '1.6', fontWeight: '500', textTransform: 'lowercase' }}>By accessing the node, you acknowledge full alignment with the structural logic defined herein.</p>
               </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '48px' }}>
               <div style={{ width: '48px', height: '48px', background: '#020617', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: '900', fontStyle: 'italic', flexShrink: '0' }}>2</div>
               <div>
                  <h3 style={{ fontSize: '30px', fontWeight: '900', color: '#020617', textTransform: 'uppercase', marginBottom: '16px' }}>2. Privacy Architecture</h3>
                  <p style={{ color: '#64748b', fontSize: '20px', lineHeight: '1.6', fontWeight: '500', textTransform: 'lowercase' }}>Data encryption is handled at the network edge. Your identity remains an encrypted node within the matrix.</p>
               </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '48px' }}>
               <div style={{ width: '48px', height: '48px', background: '#020617', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: '900', fontStyle: 'italic', flexShrink: '0' }}>3</div>
               <div>
                  <h3 style={{ fontSize: '30px', fontWeight: '900', color: '#020617', textTransform: 'uppercase', marginBottom: '16px' }}>3. User Constraints</h3>
                  <p style={{ color: '#64748b', fontSize: '20px', lineHeight: '1.6', fontWeight: '500', textTransform: 'lowercase' }}>Unauthorized injection of data packets or structural subversion is strictly prohibited.</p>
               </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '48px' }}>
               <div style={{ width: '48px', height: '48px', background: '#020617', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: '900', fontStyle: 'italic', flexShrink: '0' }}>4</div>
               <div>
                  <h3 style={{ fontSize: '30px', fontWeight: '900', color: '#020617', textTransform: 'uppercase', marginBottom: '16px' }}>4. Termination Logic</h3>
                  <p style={{ color: '#64748b', fontSize: '20px', lineHeight: '1.6', fontWeight: '500', textTransform: 'lowercase' }}>The service reserves the right to sever any connection that exhibits anomalous behavior.</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default TermsMinimalLineage;`} 
              htmlCode={`<!-- Full Expanded Minimalist Terms Lineage -->
<div class="terms-lineage-root">
  <div class="lineage-container">
     <h2 class="lineage-title">PROTOCOLS.</h2>
     <div class="lineage-list">
        <div class="lineage-item">
           <div class="item-id">1</div>
           <div class="item-content">
              <h3>1. Acceptance of Protocol</h3>
              <p>By accessing the node, you acknowledge full alignment with the structural logic defined herein.</p>
           </div>
        </div>
        <div class="lineage-item">
           <div class="item-id">2</div>
           <div class="item-content">
              <h3>2. Privacy Architecture</h3>
              <p>Data encryption is handled at the network edge. Your identity remains an encrypted node within the matrix.</p>
           </div>
        </div>
        <div class="lineage-item">
           <div class="item-id">3</div>
           <div class="item-content">
              <h3>3. User Constraints</h3>
              <p>Unauthorized injection of data packets or structural subversion is strictly prohibited.</p>
           </div>
        </div>
        <div class="lineage-item">
           <div class="item-id">4</div>
           <div class="item-content">
              <h3>4. Termination Logic</h3>
              <p>The service reserves the right to sever any connection that exhibits anomalous behavior.</p>
           </div>
        </div>
     </div>
  </div>
</div>`} 
              cssCode={`.terms-lineage-root { background: white; padding: 80px; border-radius: 48px; border: 1px solid #f1f5f9; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; text-align: left; box-sizing: border-box; }
.lineage-container { max-width: 896px; margin: 0 auto; }
.lineage-title { font-size: 72px; font-weight: 900; color: #020617; text-transform: uppercase; line-height: 1; letter-spacing: -0.05em; margin-bottom: 80px; margin-top: 0; text-decoration: underline; text-decoration-color: rgba(2,6,23,0.1); }
.lineage-list { display: flex; flex-direction: column; gap: 64px; }
.lineage-item { display: flex; flex-direction: column; gap: 48px; }
@media (min-width: 768px) { .lineage-item { flex-direction: row; } }
.item-id { width: 48px; height: 48px; background: #020617; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 900; font-style: italic; flex-shrink: 0; box-sizing: border-box; }
.lineage-item:hover .item-id { background: #2563eb; }
.item-content h3 { font-size: 30px; font-weight: 900; color: #020617; text-transform: uppercase; margin-bottom: 16px; margin-top: 0; }
.item-content p { color: #64748b; font-size: 20px; line-height: 1.6; font-weight: 500; text-transform: lowercase; margin: 0; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 08. Minimalist Terms Lineage Protocol </span>
          <TermsMinimalLineage />
        </section>

        {/* 09. Interactive Agreement */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/cont border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cont:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`import React from 'react';

const TermsAgreement = () => {
  return (
    <div style={{ background: '#f8fafc', padding: '48px', borderRadius: '48px', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', fontStyle: 'italic', fontWeight: '700' }}>
      <div style={{ background: 'white', width: '100%', maxWidth: '672px', borderRadius: '40px', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.15)', border: '1px solid #f1f5f9', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '550px', textAlign: 'left' }}>
         <div style={{ background: '#020617', padding: '32px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
               <h3 style={{ fontSize: '20px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '4px' }}>Legal_Check_</h3>
               <p style={{ fontSize: '10px', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Protocol Version: 2.4_Stable</p>
            </div>
            <div style={{ fontSize: '24px' }}>⚖️</div>
         </div>
         <div style={{ padding: '32px', flex: '1', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div style={{ background: '#f8fafc', border: '1px solid #f1f5f9', padding: '24px', borderRadius: '20px' }}>
               <h4 style={{ fontSize: '20px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '8px' }}>1. Acceptance of Protocol</h4>
               <p style={{ color: '#64748b', fontSize: '14px', fontWeight: '500', fontStyle: 'italic', textTransform: 'lowercase', lineHeight: '1.6' }}>By accessing the node, you acknowledge full alignment with the structural logic defined herein.</p>
            </div>
            <div style={{ background: '#f8fafc', border: '1px solid #f1f5f9', padding: '24px', borderRadius: '20px' }}>
               <h4 style={{ fontSize: '20px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '8px' }}>2. Privacy Architecture</h4>
               <p style={{ color: '#64748b', fontSize: '14px', fontWeight: '500', fontStyle: 'italic', textTransform: 'lowercase', lineHeight: '1.6' }}>Data encryption is handled at the network edge. Your identity remains an encrypted node within the matrix.</p>
            </div>
            <div style={{ background: '#f8fafc', border: '1px solid #f1f5f9', padding: '24px', borderRadius: '20px' }}>
               <h4 style={{ fontSize: '20px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '8px' }}>3. User Constraints</h4>
               <p style={{ color: '#64748b', fontSize: '14px', fontWeight: '500', fontStyle: 'italic', textTransform: 'lowercase', lineHeight: '1.6' }}>Unauthorized injection of data packets or structural subversion is strictly prohibited.</p>
            </div>
            <div style={{ background: '#f8fafc', border: '1px solid #f1f5f9', padding: '24px', borderRadius: '20px' }}>
               <h4 style={{ fontSize: '20px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '8px' }}>4. Termination Logic</h4>
               <p style={{ color: '#64748b', fontSize: '14px', fontWeight: '500', fontStyle: 'italic', textTransform: 'lowercase', lineHeight: '1.6' }}>The service reserves the right to sever any connection that exhibits anomalous behavior.</p>
            </div>
         </div>
         <div style={{ padding: '32px', background: 'rgba(248,250,252,0.5)', borderTop: '1px solid #f1f5f9' }}>
            <button style={{ width: '100%', padding: '20px', background: '#2563eb', color: 'white', borderRadius: '16px', fontWeight: '900', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', border: 'none', cursor: 'pointer', fontStyle: 'italic' }}>CONFIRM_AND_INITIALIZE_</button>
         </div>
      </div>
    </div>
  );
};

export default TermsAgreement;`} 
              htmlCode={`<!-- Full Expanded Interactive Agreement Focus Modal -->
<div class="terms-agreement-root">
  <div class="agreement-box">
     <div class="agreement-header">
        <div class="header-info">
           <h3>Legal_Check_</h3>
           <p>Protocol Version: 2.4_Stable</p>
        </div>
        <div class="header-icon">⚖️</div>
     </div>
     <div class="agreement-body">
        <div class="agreement-item">
           <h4>1. Acceptance of Protocol</h4>
           <p>By accessing the node, you acknowledge full alignment with the structural logic defined herein.</p>
        </div>
        <div class="agreement-item">
           <h4>2. Privacy Architecture</h4>
           <p>Data encryption is handled at the network edge. Your identity remains an encrypted node within the matrix.</p>
        </div>
        <div class="agreement-item">
           <h4>3. User Constraints</h4>
           <p>Unauthorized injection of data packets or structural subversion is strictly prohibited.</p>
        </div>
        <div class="agreement-item">
           <h4>4. Termination Logic</h4>
           <p>The service reserves the right to sever any connection that exhibits anomalous behavior.</p>
        </div>
     </div>
     <div class="agreement-footer">
        <button class="agreement-btn">CONFIRM_AND_INITIALIZE_</button>
     </div>
  </div>
</div>`} 
              cssCode={`.terms-agreement-root { background: #f8fafc; padding: 48px; border-radius: 48px; min-height: 600px; display: flex; align-items: center; justify-content: center; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; box-sizing: border-box; }
.agreement-box { background: white; width: 100%; max-width: 672px; border-radius: 40px; box-shadow: 0 50px 100px -20px rgba(0,0,0,0.15); border: 1px solid #f1f5f9; overflow: hidden; display: flex; flex-direction: column; height: 550px; }
.agreement-header { background: #020617; padding: 32px; color: white; display: flex; justify-content: space-between; align-items: center; }
.header-info h3 { font-size: 20px; font-weight: 900; text-transform: uppercase; margin-bottom: 4px; margin-top: 0; }
.header-info p { font-size: 10px; color: #3b82f6; text-transform: uppercase; letter-spacing: 0.1em; margin: 0; }
.agreement-body { padding: 32px; flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 40px; text-align: left; }
.agreement-item { background: #f8fafc; border: 1px solid #f1f5f9; padding: 24px; border-radius: 20px; transition: border-color 0.3s ease; }
.agreement-item:hover { border-color: #2563eb; }
.agreement-item h4 { font-size: 20px; font-weight: 900; text-transform: uppercase; margin-bottom: 8px; margin-top: 0; }
.agreement-item p { color: #64748b; font-size: 14px; font-weight: 500; font-style: italic; text-transform: lowercase; line-height: 1.6; margin: 0; }
.agreement-footer { padding: 32px; background: rgba(248,250,252,0.5); border-top: 1px solid #f1f5f9; }
.agreement-btn { width: 100%; padding: 20px; background: #2563eb; color: white; border-radius: 16px; font-weight: 900; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; border: none; cursor: pointer; transition: background 0.3s ease; box-shadow: 0 20px 25px -5px rgba(37,99,235,0.2); font-style: italic; }
.agreement-btn:hover { background: #020617; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 09. Interactive Agreement Focus Portal </span>
          <TermsAgreement />
        </section>

        {/* 10. Professional SaaS Protocol */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/cont border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cont:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`import React from 'react';

const TermsStandard = () => {
  return (
    <div style={{ background: 'white', padding: '48px', borderRadius: '48px', border: '1px solid #f1f5f9', fontFamily: 'sans-serif', fontStyle: 'italic', fontWeight: '700', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', textAlign: 'left' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'row', gap: '80px' }}>
         <div style={{ width: '25%', position: 'sticky', top: '40px' }}>
            <div style={{ background: '#020617', padding: '40px', borderRadius: '40px', color: 'white' }}>
               <h2 style={{ fontSize: '36px', fontWeight: '900', textTransform: 'uppercase', lineHeight: '1', letterSpacing: '-0.05em' }}>Terms_ <br/> Portal.</h2>
            </div>
            <div style={{ marginTop: '32px', border: '2px solid #f1f5f9', padding: '24px', borderRadius: '40px', textAlign: 'center' }}>
               <p style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', opacity: '0.4', letterSpacing: '0.1em', marginBottom: '16px' }}>Last_Update</p>
               <p style={{ fontSize: '20px', fontWeight: '900' }}>24.10.2024</p>
            </div>
         </div>
         <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '80px' }}>
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '40px' }}>
               <h3 style={{ fontSize: '48px', fontWeight: '900', color: '#020617', textTransform: 'uppercase', marginBottom: '24px', letterSpacing: '-0.05em' }}>Legal_Deployment_</h3>
               <p style={{ color: '#94a3b8', fontSize: '24px', fontWeight: '500', textTransform: 'lowercase', lineHeight: '1.4' }}>Structural overview of user rights and architectural constraints.</p>
            </div>
            <div>
               <h4 style={{ fontSize: '30px', fontWeight: '900', color: '#020617', textTransform: 'uppercase', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ color: '#2563eb' }}>//</span> 1. Acceptance of Protocol
               </h4>
               <p style={{ color: '#64748b', fontSize: '20px', fontWeight: '500', lineHeight: '1.6', textTransform: 'lowercase' }}>By accessing the node, you acknowledge full alignment with the structural logic defined herein.</p>
            </div>
            <div>
               <h4 style={{ fontSize: '30px', fontWeight: '900', color: '#020617', textTransform: 'uppercase', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ color: '#2563eb' }}>//</span> 2. Privacy Architecture
               </h4>
               <p style={{ color: '#64748b', fontSize: '20px', fontWeight: '500', lineHeight: '1.6', textTransform: 'lowercase' }}>Data encryption is handled at the network edge. Your identity remains an encrypted node within the matrix.</p>
            </div>
            <div>
               <h4 style={{ fontSize: '30px', fontWeight: '900', color: '#020617', textTransform: 'uppercase', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ color: '#2563eb' }}>//</span> 3. User Constraints
               </h4>
               <p style={{ color: '#64748b', fontSize: '20px', fontWeight: '500', lineHeight: '1.6', textTransform: 'lowercase' }}>Unauthorized injection of data packets or structural subversion is strictly prohibited.</p>
            </div>
            <div>
               <h4 style={{ fontSize: '30px', fontWeight: '900', color: '#020617', textTransform: 'uppercase', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ color: '#2563eb' }}>//</span> 4. Termination Logic
               </h4>
               <p style={{ color: '#64748b', fontSize: '20px', fontWeight: '500', lineHeight: '1.6', textTransform: 'lowercase' }}>The service reserves the right to sever any connection that exhibits anomalous behavior.</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default TermsStandard;`} 
              htmlCode={`<!-- Full Expanded Professional SaaS Terms Portal -->
<div class="terms-saas-root">
  <div class="saas-container">
     <div class="saas-sidebar">
        <div class="sidebar-box">
           <h2>Terms_ <br/> Portal.</h2>
        </div>
        <div class="sidebar-meta">
           <p class="meta-label">Last_Update</p>
           <p class="meta-date">24.10.2024</p>
        </div>
     </div>
     <div class="saas-main">
        <div class="main-header">
           <h3>Legal_Deployment_</h3>
           <p>Structural overview of user rights and architectural constraints.</p>
        </div>
        <div class="main-content">
           <div class="main-section">
              <h4><span>//</span> 1. Acceptance of Protocol</h4>
              <p>By accessing the node, you acknowledge full alignment with the structural logic defined herein.</p>
           </div>
           <div class="main-section">
              <h4><span>//</span> 2. Privacy Architecture</h4>
              <p>Data encryption is handled at the network edge. Your identity remains an encrypted node within the matrix.</p>
           </div>
           <div class="main-section">
              <h4><span>//</span> 3. User Constraints</h4>
              <p>Unauthorized injection of data packets or structural subversion is strictly prohibited.</p>
           </div>
           <div class="main-section">
              <h4><span>//</span> 4. Termination Logic</h4>
              <p>The service reserves the right to sever any connection that exhibits anomalous behavior.</p>
           </div>
        </div>
     </div>
  </div>
</div>`} 
              cssCode={`.terms-saas-root { background: white; padding: 48px; border-radius: 48px; border: 1px solid #f1f5f9; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); box-sizing: border-box; }
.saas-container { max-width: 1280px; margin: 0 auto; display: flex; flex-direction: column; gap: 80px; }
@media (min-width: 1024px) { .saas-container { flex-direction: row; } }
.saas-sidebar { width: 100%; display: flex; flex-direction: column; gap: 32px; }
@media (min-width: 1024px) { .saas-sidebar { width: 25%; position: sticky; top: 40px; } }
.sidebar-box { background: #020617; padding: 40px; border-radius: 40px; color: white; text-align: left; }
.sidebar-box h2 { font-size: 36px; font-weight: 900; text-transform: uppercase; line-height: 1; letter-spacing: -0.05em; margin: 0; }
.sidebar-meta { border: 2px solid #f1f5f9; padding: 24px; border-radius: 40px; text-align: center; }
.meta-label { font-size: 10px; font-weight: 900; text-transform: uppercase; opacity: 0.4; letter-spacing: 0.1em; margin-bottom: 16px; margin-top: 0; }
.meta-date { font-size: 20px; font-weight: 900; margin: 0; }
.saas-main { flex: 1; display: flex; flex-direction: column; gap: 80px; text-align: left; }
.main-header { border-bottom: 1px solid #f1f5f9; padding-bottom: 40px; }
.main-header h3 { font-size: 48px; font-weight: 900; color: #020617; text-transform: uppercase; margin-bottom: 24px; margin-top: 0; letter-spacing: -0.05em; }
.main-header p { color: #94a3b8; font-size: 24px; font-weight: 500; text-transform: lowercase; line-height: 1.4; margin: 0; }
.main-content { display: flex; flex-direction: column; gap: 80px; }
.main-section h4 { font-size: 30px; font-weight: 900; color: #020617; text-transform: uppercase; margin-bottom: 24px; margin-top: 0; display: flex; align-items: center; gap: 16px; }
.main-section h4 span { color: #2563eb; }
.main-section p { color: #64748b; font-size: 20px; font-weight: 500; line-height: 1.6; text-transform: lowercase; margin: 0; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 10. Professional SaaS Legal Protocol Hub </span>
          <TermsStandard />
        </section>

      </div>
    </div>
  );
};

export default TermsGallery;