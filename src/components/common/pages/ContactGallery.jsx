import React, { useState } from 'react';
import CopyButton from '../CopyButton';

// --- Shared Assets ---
const SocialIcon = ({ className }) => (
  <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
);

// --- 1. Bold Brutalist (The Shout) ---
export const ContactBrutalist = () => (
  <div className="bg-yellow-400 p-12 rounded-[3rem] border-[8px] border-slate-950 font-sans italic font-black uppercase overflow-hidden shadow-[20px_20px_0_0_#000]">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
       <div className="text-left">
          <h2 className="text-7xl md:text-9xl font-black text-slate-950 tracking-tighter leading-[0.8] mb-12 italic">GET_ <br/> IN_ <br/> TOUCH.</h2>
          <div className="space-y-6 text-2xl font-black italic text-slate-950 underline decoration-8 decoration-slate-950/20 underline-offset-8">
             <p className="hover:text-blue-600 transition-colors cursor-pointer">HELLO@BOLD.COM</p>
             <p className="hover:text-blue-600 transition-colors cursor-pointer">+1-800-SHOUT</p>
          </div>
       </div>
       <form className="bg-white border-[6px] border-slate-950 p-10 shadow-[16px_16px_0_0_#000] space-y-6">
          <div className="space-y-2">
             <label className="text-xs font-black tracking-widest italic">User_Identifier</label>
             <input type="text" placeholder="NAME_HERE" className="w-full p-4 border-[4px] border-slate-950 font-black italic focus:bg-yellow-200 outline-none transition-colors" />
          </div>
          <div className="space-y-2">
             <label className="text-xs font-black tracking-widest italic">Secure_Link</label>
             <input type="email" placeholder="EMAIL_HERE" className="w-full p-4 border-[4px] border-slate-950 font-black italic focus:bg-yellow-200 outline-none transition-colors" />
          </div>
          <div className="space-y-2">
             <label className="text-xs font-black tracking-widest italic">Data_Payload</label>
             <textarea rows="4" placeholder="MESSAGE_HERE" className="w-full p-4 border-[4px] border-slate-950 font-black italic focus:bg-yellow-200 outline-none transition-colors resize-none"></textarea>
          </div>
          <button className="w-full py-6 bg-slate-950 text-white text-3xl font-black uppercase italic hover:bg-blue-600 hover:text-white transition-all shadow-[8px_8px_0_0_#2563eb]">
             SEND_SHOUT →
          </button>
       </form>
    </div>
  </div>
);

// --- 2. Modern Glass Hub (Refraction) ---
export const ContactGlass = () => (
  <div className="relative bg-slate-950 p-16 rounded-[3rem] overflow-hidden min-h-[700px] flex items-center font-sans italic font-bold">
    <div className="absolute top-0 left-[-10%] w-[40rem] h-[40rem] bg-indigo-600 rounded-full mix-blend-screen filter blur-[140px] opacity-20 animate-pulse"></div>
    <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-600 rounded-full mix-blend-screen filter blur-[140px] opacity-20 animate-pulse delay-1000"></div>
    <div className="relative z-10 w-full max-w-5xl mx-auto">
       <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-none italic">Secure_Link</h2>
          <p className="text-blue-400 text-xl lowercase font-medium italic tracking-widest opacity-60">Establishing high-fidelity communication nodes.</p>
       </div>
       <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-12 rounded-[2.5rem] shadow-2xl">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-8">
                <div className="space-y-2">
                   <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/40 italic">Full_Legal_Name</label>
                   <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-blue-500 transition-colors" placeholder="ENTER_NAME" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/40 italic">Global_Protocol_Email</label>
                   <input type="email" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-blue-500 transition-colors" placeholder="ENTER_EMAIL" />
                </div>
             </div>
             <div className="space-y-8 flex flex-col">
                <div className="space-y-2 flex-1 flex flex-col">
                   <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/40 italic">Communication_Payload</label>
                   <textarea className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-blue-500 transition-colors resize-none flex-1" placeholder="DESCRIBE_PROJECT_LOGIC"></textarea>
                </div>
                <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-slate-950 transition-all shadow-2xl shadow-blue-900/40 italic">
                   INITIALIZE_TRANSMISSION_
                </button>
             </div>
          </form>
       </div>
    </div>
  </div>
);

// --- 3. Cyberpunk Matrix (Nodes) ---
export const ContactCyber = () => (
  <div className="bg-black p-12 rounded-[3rem] border border-white/5 font-mono italic font-bold relative overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto">
       <div className="flex flex-col justify-center text-left">
          <div className="text-[10px] text-emerald-500 font-black uppercase tracking-[0.5em] mb-4 italic">>> System_Inquiry_Port_8080</div>
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none italic">UPLINK_</h2>
       </div>
       <div className="bg-white/[0.02] border border-white/5 p-10 relative group">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-500 opacity-20 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-500 opacity-20 group-hover:opacity-100 transition-opacity"></div>
          <form className="space-y-8">
             <div className="relative">
                <span className="absolute left-0 top-4 text-emerald-500 text-xs font-black">>></span>
                <input type="text" className="w-full bg-transparent border-b border-white/10 p-4 pl-8 text-white outline-none focus:border-emerald-500 transition-colors uppercase placeholder-white/20" placeholder="USER_NAME" />
             </div>
             <div className="relative">
                <span className="absolute left-0 top-4 text-emerald-500 text-xs font-black">>></span>
                <input type="email" className="w-full bg-transparent border-b border-white/10 p-4 pl-8 text-white outline-none focus:border-emerald-500 transition-colors uppercase placeholder-white/20" placeholder="PROTO_EMAIL" />
             </div>
             <div className="relative">
                <span className="absolute left-0 top-4 text-emerald-500 text-xs font-black">>></span>
                <textarea rows="4" className="w-full bg-transparent border-b border-white/10 p-4 pl-8 text-white outline-none focus:border-emerald-500 transition-colors uppercase placeholder-white/20 resize-none" placeholder="LOG_PAYLOAD"></textarea>
             </div>
             <button className="w-full py-5 bg-emerald-500/10 border border-emerald-500/50 text-emerald-500 rounded-lg font-black text-[10px] uppercase tracking-[0.5em] hover:bg-emerald-500 hover:text-black transition-all italic">
                [ EXECUTE_SEND ]
             </button>
          </form>
       </div>
    </div>
  </div>
);

// --- 4. Neumorphic Tactile (Embossed) ---
export const ContactNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-16 rounded-[3rem] font-sans italic font-bold">
    <div className="max-w-4xl mx-auto bg-[#e0e5ec] p-12 rounded-[3.5rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border border-white/20">
       <div className="text-center mb-16">
          <h2 className="text-6xl font-black text-slate-700 uppercase tracking-tighter italic leading-none mb-4">Soft_Link</h2>
          <p className="text-slate-500 lowercase font-medium italic">Tactile architecture for modern inquiry.</p>
       </div>
       <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
             <div className="bg-[#e0e5ec] rounded-2xl p-1 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
                <input type="text" className="w-full bg-transparent p-4 outline-none text-slate-600 placeholder-slate-400 italic font-black" placeholder="Identifier_" />
             </div>
             <div className="bg-[#e0e5ec] rounded-2xl p-1 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
                <input type="email" className="w-full bg-transparent p-4 outline-none text-slate-600 placeholder-slate-400 italic font-black" placeholder="Secure_Mail_" />
             </div>
          </div>
          <div className="flex flex-col gap-8">
             <div className="bg-[#e0e5ec] rounded-2xl p-1 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] flex-1">
                <textarea className="w-full bg-transparent p-4 outline-none text-slate-600 placeholder-slate-400 italic font-black resize-none h-full" placeholder="Describe_Logic_"></textarea>
             </div>
             <button className="w-full py-5 rounded-2xl bg-[#e0e5ec] text-blue-600 font-black uppercase tracking-widest shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all italic active:scale-95">
                SUBMIT_PAYLOAD_
             </button>
          </div>
       </form>
    </div>
  </div>
);

// --- 5. Magazine Editorial (The Lead) ---
export const ContactEditorial = () => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 font-sans italic font-bold">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
       <div className="flex-1 flex flex-col justify-between py-10 text-left">
          <div className="space-y-12">
             <h2 className="text-8xl md:text-[10rem] font-black text-slate-950 tracking-tighter uppercase leading-[0.8] mb-10 italic">WORK_ <br/> WITH_ <br/> US.</h2>
             <p className="text-slate-500 text-2xl lowercase font-medium max-w-sm italic">Defining the next generation of creative architecture through structural logic.</p>
          </div>
       </div>
       <div className="flex-1 bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl text-left">
          <form className="space-y-12">
             <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">Full_Name</label>
                <input type="text" className="w-full bg-transparent border-b-2 border-slate-200 p-4 text-2xl font-black text-slate-950 outline-none focus:border-slate-950 transition-colors placeholder-slate-200" placeholder="WHO_ARE_YOU?" />
             </div>
             <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">Email_Protocol</label>
                <input type="email" className="w-full bg-transparent border-b-2 border-slate-200 p-4 text-2xl font-black text-slate-950 outline-none focus:border-slate-950 transition-colors placeholder-slate-200" placeholder="SECURE_LINK" />
             </div>
             <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">Vision_Brief</label>
                <textarea rows="3" className="w-full bg-transparent border-b-2 border-slate-200 p-4 text-2xl font-black text-slate-950 outline-none focus:border-slate-950 transition-colors placeholder-slate-200 resize-none" placeholder="TELL_US_EVERYTHING"></textarea>
             </div>
             <button className="px-12 py-6 bg-slate-950 text-white rounded-full font-black text-xs uppercase tracking-[0.4em] hover:bg-blue-600 transition-all italic shadow-2xl">
                START_INQUIRY_ →
             </button>
          </form>
       </div>
    </div>
  </div>
);

// --- 6. Bento Support Center (Modules) ---
export const ContactBento = () => (
  <div className="bg-slate-50 p-12 rounded-[3rem] font-sans italic font-bold">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
       <div className="md:col-span-2 bg-white rounded-[2.5rem] p-12 border border-slate-100 shadow-xl flex flex-col justify-center">
          <div className="text-[10px] text-blue-600 font-black uppercase tracking-[0.5em] mb-4 italic">// Protocol_Help_Desk</div>
          <h2 className="text-6xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-8">Support_ <br/> Modules</h2>
          <div className="space-y-4">
             {['Sales_Node', 'Technical_Logic', 'Billing_Matrix'].map((topic) => (
                <div key={topic} className="p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-slate-950 hover:text-white transition-all cursor-pointer flex justify-between items-center group">
                   <span className="text-sm font-black uppercase italic tracking-widest">{topic}</span>
                   <span className="text-blue-600 font-black group-hover:translate-x-2 transition-transform">→</span>
                </div>
             ))}
          </div>
       </div>
       <div className="md:col-span-2 bg-blue-600 rounded-[2.5rem] p-12 text-white shadow-2xl relative overflow-hidden group text-left">
          <h3 className="text-3xl font-black uppercase mb-8 italic">Quick_Dispatch_</h3>
          <form className="space-y-6">
             <input type="text" className="w-full bg-white/10 border border-white/20 p-4 rounded-xl text-white outline-none focus:bg-white/20 transition-all placeholder-white/40 italic font-bold" placeholder="IDENTIFIER" />
             <input type="email" className="w-full bg-white/10 border border-white/20 p-4 rounded-xl text-white outline-none focus:bg-white/20 transition-all placeholder-white/40 italic font-bold" placeholder="PROTOCOL_MAIL" />
             <textarea rows="4" className="w-full bg-white/10 border border-white/20 p-4 rounded-xl text-white outline-none focus:bg-white/20 transition-all placeholder-white/40 italic font-bold resize-none" placeholder="DESCRIBE_LOGIC"></textarea>
             <button className="w-full py-4 bg-white text-blue-600 rounded-xl font-black text-[10px] uppercase tracking-widest italic hover:bg-slate-950 hover:text-white transition-all">DISPATCH_TICKET_</button>
          </form>
       </div>
    </div>
  </div>
);

// --- 7. Floating Action Hub (Compact) ---
export const ContactFloating = () => (
  <div className="relative min-h-[600px] bg-slate-50 p-12 rounded-[3rem] font-sans italic font-bold flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:20px_20px]"></div>
    <div className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden text-left">
       <div className="bg-slate-950 p-8 text-white flex justify-between items-center">
          <div className="space-y-1">
             <h3 className="text-xl font-black uppercase italic tracking-tight">Direct_Link</h3>
             <p className="text-[10px] text-blue-400 font-black uppercase tracking-widest">Uptime: 24/7_</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center animate-bounce">💬</div>
       </div>
       <div className="p-8 space-y-6">
          <input type="text" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl outline-none focus:border-blue-600 transition-colors font-black italic text-sm placeholder-slate-300" placeholder="NAME_" />
          <input type="email" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl outline-none focus:border-blue-600 transition-colors font-black italic text-sm placeholder-slate-300" placeholder="MAIL_" />
          <textarea rows="4" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl outline-none focus:border-blue-600 transition-colors font-black italic text-sm placeholder-slate-300 resize-none" placeholder="PAYLOAD_"></textarea>
          <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-black text-xs uppercase tracking-[0.2em] italic hover:bg-slate-950 transition-all shadow-xl shadow-blue-900/20">SEND_LOG_</button>
       </div>
    </div>
  </div>
);

// --- 8. Minimalist Lineage (Structural) ---
export const ContactMinimal = () => (
  <div className="bg-white p-20 rounded-[3rem] font-sans italic font-bold border border-slate-100">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-20 text-left">
       <div className="w-full md:w-1/3">
          <h2 className="text-6xl font-black text-slate-950 tracking-tighter uppercase leading-none mb-10 italic underline decoration-slate-950/10 decoration-8">Talk.</h2>
       </div>
       <form className="flex-1 space-y-10">
          <div className="group relative">
             <input type="text" className="w-full bg-transparent border-b-2 border-slate-100 p-4 text-xl font-black text-slate-950 outline-none focus:border-blue-600 transition-all placeholder-slate-200" placeholder="NAME_IDENTIFIER" />
             <div className="absolute bottom-0 left-0 h-0.5 bg-blue-600 w-0 group-focus-within:w-full transition-all duration-700"></div>
          </div>
          <div className="group relative">
             <input type="email" className="w-full bg-transparent border-b-2 border-slate-100 p-4 text-xl font-black text-slate-950 outline-none focus:border-blue-600 transition-all placeholder-slate-200" placeholder="MAIL_PROTOCOL" />
             <div className="absolute bottom-0 left-0 h-0.5 bg-blue-600 w-0 group-focus-within:w-full transition-all duration-700"></div>
          </div>
          <div className="group relative">
             <textarea rows="3" className="w-full bg-transparent border-b-2 border-slate-100 p-4 text-xl font-black text-slate-950 outline-none focus:border-blue-600 transition-all placeholder-slate-200 resize-none" placeholder="DESCRIBE_LOGIC"></textarea>
             <div className="absolute bottom-0 left-0 h-0.5 bg-blue-600 w-0 group-focus-within:w-full transition-all duration-700"></div>
          </div>
          <button className="px-10 py-5 bg-slate-950 text-white rounded-full font-black text-[10px] uppercase tracking-[0.5em] italic hover:bg-blue-600 transition-all shadow-2xl">
             START_COLLAB_ →
          </button>
       </form>
    </div>
  </div>
);

// --- 9. Interactive Map Node (Fidelity) ---
export const ContactMap = () => (
  <div className="relative h-[700px] w-full rounded-[3rem] overflow-hidden group font-sans italic font-bold">
    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200" alt="Map Node" className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-[2s] group-hover:scale-110" />
    <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply"></div>
    <div className="absolute inset-0 flex items-center justify-end p-8 md:p-20 text-left">
       <div className="bg-white/80 backdrop-blur-2xl border border-white/20 p-12 rounded-[2.5rem] shadow-2xl w-full max-w-lg">
          <div className="mb-10">
             <div className="text-[10px] text-blue-600 font-black uppercase tracking-[0.4em] mb-2 italic">Node_Coordinate_04</div>
             <h2 className="text-4xl font-black text-slate-950 uppercase italic tracking-tighter leading-none">Visit_Matrix</h2>
          </div>
          <form className="space-y-6">
             <input type="text" className="w-full bg-white/50 border border-slate-200 p-4 rounded-xl outline-none focus:bg-white transition-all font-black italic text-sm" placeholder="NAME_" />
             <input type="email" className="w-full bg-white/50 border border-slate-200 p-4 rounded-xl outline-none focus:bg-white transition-all font-black italic text-sm" placeholder="MAIL_" />
             <button className="w-full py-5 bg-slate-950 text-white rounded-2xl font-black text-xs uppercase tracking-widest italic hover:bg-blue-600 transition-all">GET_DIRECTIONS_</button>
          </form>
       </div>
    </div>
  </div>
);

// --- 10. Professional SaaS (The Hub) ---
export const ContactStandard = () => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 font-sans italic font-bold shadow-xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto text-left">
       <div className="flex flex-col justify-center bg-slate-950 p-12 rounded-[2.5rem] text-white relative overflow-hidden">
          <h2 className="text-6xl font-black tracking-tighter uppercase italic leading-none mb-8">Contact_ <br/> Protocol.</h2>
          <p className="text-slate-400 text-lg lowercase font-medium italic mb-12">Synchronizing global inquiries for structural deployment.</p>
       </div>
       <div className="flex flex-col justify-center">
          <form className="space-y-8">
             <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">First_Identifier</label>
                   <input type="text" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl outline-none focus:border-slate-950 transition-colors font-black italic text-sm" placeholder="NAME_01" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">Last_Identifier</label>
                   <input type="text" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl outline-none focus:border-slate-950 transition-colors font-black italic text-sm" placeholder="NAME_02" />
                </div>
             </div>
             <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">Global_Email_Protocol</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl outline-none focus:border-slate-950 transition-colors font-black italic text-sm" placeholder="SECURE_LINK" />
             </div>
             <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">Data_Brief</label>
                <textarea rows="4" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl outline-none focus:border-slate-950 transition-colors font-black italic text-sm resize-none" placeholder="DESCRIBE_LOGIC_AND_TIMELINES"></textarea>
             </div>
             <button className="w-full py-5 bg-slate-950 text-white rounded-2xl font-black text-xs uppercase tracking-[0.4em] italic hover:bg-blue-600 transition-all shadow-2xl">
                INITIALIZE_PROJECT_NODES →
             </button>
          </form>
       </div>
    </div>
  </div>
);

// --- Main Gallery Wrapper ---
const ContactGallery = () => {
  return (
    <div className="container overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-64">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-6xl font-black text-slate-950 mb-6 tracking-tighter uppercase italic leading-none">Contact_Matrix</h1>
        <p className="text-slate-500 font-bold text-xl italic lowercase">High-fidelity communication nodes for structural inquiries.</p>
      </div>
      
      <div className="space-y-32 max-w-7xl mx-auto">
        
        {/* 01. Bold Brutalist */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/cont border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cont:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ContactBrutalist = () => (
  <div className="bg-yellow-400 p-12 rounded-[3rem] border-[8px] border-slate-950 font-sans italic font-black uppercase overflow-hidden shadow-[20px_20px_0_0_#000]">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
       <div className="text-left">
          <h2 className="text-7xl md:text-9xl font-black text-slate-950 tracking-tighter leading-[0.8] mb-12 italic">GET_ <br/> IN_ <br/> TOUCH.</h2>
          <div className="space-y-6 text-2xl font-black italic text-slate-950 underline decoration-8 decoration-slate-950/20 underline-offset-8">
             <p className="hover:text-blue-600 transition-colors cursor-pointer">HELLO@BOLD.COM</p>
             <p className="hover:text-blue-600 transition-colors cursor-pointer">+1-800-SHOUT</p>
          </div>
       </div>
       <form className="bg-white border-[6px] border-slate-950 p-10 shadow-[16px_16px_0_0_#000] space-y-6">
          <div className="space-y-2">
             <label className="text-xs font-black tracking-widest italic">User_Identifier</label>
             <input type="text" placeholder="NAME_HERE" className="w-full p-4 border-[4px] border-slate-950 font-black italic focus:bg-yellow-200 outline-none transition-colors" />
          </div>
          <div className="space-y-2">
             <label className="text-xs font-black tracking-widest italic">Secure_Link</label>
             <input type="email" placeholder="EMAIL_HERE" className="w-full p-4 border-[4px] border-slate-950 font-black italic focus:bg-yellow-200 outline-none transition-colors" />
          </div>
          <div className="space-y-2">
             <label className="text-xs font-black tracking-widest italic">Data_Payload</label>
             <textarea rows="4" placeholder="MESSAGE_HERE" className="w-full p-4 border-[4px] border-slate-950 font-black italic focus:bg-yellow-200 outline-none transition-colors resize-none"></textarea>
          </div>
          <button className="w-full py-6 bg-slate-950 text-white text-3xl font-black uppercase italic hover:bg-blue-600 transition-all shadow-[8px_8px_0_0_#2563eb]">
             SEND_SHOUT →
          </button>
       </form>
    </div>
  </div>
);`} 
              htmlCode={`<!-- Brutalist Contact Shout -->
<div class="contact-brutal-root">
  <div class="brutal-grid">
     <div class="brutal-info">
        <h2 class="brutal-title">GET_ <br/> IN_ <br/> TOUCH.</h2>
        <div class="brutal-links">
           <p>HELLO@BOLD.COM</p>
           <p>+1-800-SHOUT</p>
        </div>
     </div>
     <form class="brutal-form">
        <div class="form-group">
           <label>User_Identifier</label>
           <input type="text" placeholder="NAME_HERE">
        </div>
        <div class="form-group">
           <label>Secure_Link</label>
           <input type="email" placeholder="EMAIL_HERE">
        </div>
        <div class="form-group">
           <label>Data_Payload</label>
           <textarea rows="4" placeholder="MESSAGE_HERE"></textarea>
        </div>
        <button class="brutal-btn">SEND_SHOUT →</button>
     </form>
  </div>
</div>`} 
              cssCode={`.contact-brutal-root { background: #facc15; padding: 48px; border-radius: 48px; border: 8px solid #020617; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; text-transform: uppercase; box-sizing: border-box; box-shadow: 20px 20px 0 0 #000; overflow: hidden; }
.brutal-grid { display: grid; grid-template-columns: 1fr; gap: 48px; max-width: 1280px; margin: 0 auto; }
@media (min-width: 1024px) { .brutal-grid { grid-template-columns: repeat(2, 1fr); } }
.brutal-info { text-align: left; }
.brutal-title { font-size: 72px; font-weight: 900; color: #020617; line-height: 0.8; letter-spacing: -0.05em; margin-bottom: 48px; }
@media (min-width: 768px) { .brutal-title { font-size: 120px; } }
.brutal-links { display: flex; flex-direction: column; gap: 24px; font-size: 24px; text-decoration: underline; text-decoration-thickness: 8px; text-decoration-color: rgba(2,6,23,0.1); text-underline-offset: 8px; }
.brutal-form { background: white; border: 6px solid #020617; padding: 40px; box-shadow: 16px 16px 0 0 #000; display: flex; flex-direction: column; gap: 24px; }
.form-group { display: flex; flex-direction: column; gap: 8px; }
.form-group label { font-size: 10px; letter-spacing: 0.1em; color: #020617; }
.form-group input, .form-group textarea { width: 100%; padding: 16px; border: 4px solid #020617; font-weight: 900; font-style: italic; background: white; outline: none; transition: background 0.3s ease; }
.form-group input:focus, .form-group textarea:focus { background: #fef08a; }
.brutal-btn { width: 100%; padding: 24px; background: #020617; color: white; font-size: 24px; font-weight: 900; font-style: italic; text-transform: uppercase; border: none; cursor: pointer; transition: all 0.3s ease; box-shadow: 8px 8px 0 0 #2563eb; }
.brutal-btn:hover { background: #2563eb; transform: translate(4px, 4px); box-shadow: none; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 01. Bold Brutalist THE_SHOUT </span>
          <ContactBrutalist />
        </section>

        {/* 02. Modern Glass Hub */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/cont border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cont:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ContactGlass = () => (
  <div className="relative bg-slate-950 p-16 rounded-[3rem] overflow-hidden min-h-[700px] flex items-center font-sans italic font-bold">
    <div className="absolute top-0 left-[-10%] w-[40rem] h-[40rem] bg-indigo-600 rounded-full mix-blend-screen filter blur-[140px] opacity-20 animate-pulse"></div>
    <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-600 rounded-full mix-blend-screen filter blur-[140px] opacity-20 animate-pulse delay-1000"></div>
    <div className="relative z-10 w-full max-w-5xl mx-auto">
       <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-none italic">Secure_Link</h2>
          <p className="text-blue-400 text-xl lowercase font-medium italic tracking-widest opacity-60">Establishing high-fidelity communication nodes.</p>
       </div>
       <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-12 rounded-[2.5rem] shadow-2xl text-left">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-8">
                <div className="space-y-2">
                   <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/40 italic">Full_Legal_Name</label>
                   <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-blue-500 transition-colors" placeholder="ENTER_NAME" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/40 italic">Global_Protocol_Email</label>
                   <input type="email" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-blue-500 transition-colors" placeholder="ENTER_EMAIL" />
                </div>
             </div>
             <div className="space-y-8 flex flex-col">
                <div className="space-y-2 flex-1 flex flex-col">
                   <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/40 italic">Communication_Payload</label>
                   <textarea className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-blue-500 transition-colors resize-none flex-1" placeholder="DESCRIBE_PROJECT_LOGIC"></textarea>
                </div>
                <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-slate-950 transition-all shadow-2xl shadow-blue-900/40 italic">
                   INITIALIZE_TRANSMISSION_
                </button>
             </div>
          </form>
       </div>
    </div>
  </div>
);`} 
              htmlCode={`<!-- Glassmorphic Contact Hub -->
<div class="contact-glass-root">
  <div class="glass-container">
    <div class="glass-header">
       <h2 class="glass-title">Secure_Link</h2>
       <p class="glass-subtitle">Establishing high-fidelity communication nodes.</p>
    </div>
    <div class="glass-form-box">
       <form class="glass-grid">
          <div class="glass-col">
             <div class="input-set">
                <label>Full_Legal_Name</label>
                <input type="text" placeholder="ENTER_NAME">
             </div>
             <div class="input-set">
                <label>Global_Protocol_Email</label>
                <input type="email" placeholder="ENTER_EMAIL">
             </div>
          </div>
          <div class="glass-col">
             <div class="input-set grow">
                <label>Communication_Payload</label>
                <textarea placeholder="DESCRIBE_PROJECT_LOGIC"></textarea>
             </div>
             <button class="glass-btn">INITIALIZE_TRANSMISSION_</button>
          </div>
       </form>
    </div>
  </div>
</div>`} 
              cssCode={`.contact-glass-root { position: relative; background: #020617; padding: 64px; border-radius: 48px; overflow: hidden; min-height: 700px; display: flex; align-items: center; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; box-sizing: border-box; }
.glass-container { position: relative; z-index: 10; width: 100%; max-width: 1024px; margin: 0 auto; }
.glass-header { text-align: center; margin-bottom: 80px; }
.glass-title { font-size: 64px; font-weight: 900; color: white; text-transform: uppercase; letter-spacing: -0.05em; line-height: 1; margin-bottom: 24px; }
@media (min-width: 768px) { .glass-title { font-size: 80px; } }
.glass-subtitle { color: #3b82f6; font-size: 20px; font-weight: 500; opacity: 0.6; letter-spacing: 0.1em; }
.glass-form-box { background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.1); padding: 48px; border-radius: 40px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
.glass-grid { display: grid; grid-template-columns: 1fr; gap: 32px; text-align: left; }
@media (min-width: 768px) { .glass-grid { grid-template-columns: repeat(2, 1fr); } }
.glass-col { display: flex; flex-direction: column; gap: 32px; }
.input-set { display: flex; flex-direction: column; gap: 8px; }
.input-set.grow { flex: 1; }
.input-set label { font-size: 10px; color: rgba(255,255,255,0.4); text-transform: uppercase; font-weight: 900; letter-spacing: 0.4em; }
.input-set input, .input-set textarea { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 16px; border-radius: 12px; color: white; outline: none; transition: border-color 0.3s ease; }
.input-set textarea { flex: 1; resize: none; }
.input-set input:focus, .input-set textarea:focus { border-color: #3b82f6; }
.glass-btn { width: 100%; padding: 20px; background: #2563eb; color: white; border-radius: 16px; font-weight: 900; font-size: 12px; text-transform: uppercase; letter-spacing: 0.3em; border: none; cursor: pointer; transition: all 0.5s ease; box-shadow: 0 20px 25px -5px rgba(37,99,235,0.3); }
.glass-btn:hover { background: white; color: #020617; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 02. Modern Glass Refraction Hub </span>
          <ContactGlass />
        </section>

        {/* 03. Cyberpunk Matrix */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/cont border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cont:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ContactCyber = () => (
  <div className="bg-black p-12 rounded-[3rem] border border-white/5 font-mono italic font-bold relative overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto">
       <div className="flex flex-col justify-center text-left">
          <div className="text-[10px] text-emerald-500 font-black uppercase tracking-[0.5em] mb-4 italic">>> System_Inquiry_Port_8080</div>
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none italic">UPLINK_</h2>
       </div>
       <div className="bg-white/[0.02] border border-white/5 p-10 relative group text-left">
          <form className="space-y-8">
             <div className="relative">
                <span className="absolute left-0 top-4 text-emerald-500 text-xs font-black">>></span>
                <input type="text" className="w-full bg-transparent border-b border-white/10 p-4 pl-8 text-white outline-none focus:border-emerald-500 transition-colors uppercase placeholder-white/20" placeholder="USER_NAME" />
             </div>
             <div className="relative">
                <span className="absolute left-0 top-4 text-emerald-500 text-xs font-black">>></span>
                <input type="email" className="w-full bg-transparent border-b border-white/10 p-4 pl-8 text-white outline-none focus:border-emerald-500 transition-colors uppercase placeholder-white/20" placeholder="PROTO_EMAIL" />
             </div>
             <div className="relative">
                <span className="absolute left-0 top-4 text-emerald-500 text-xs font-black">>></span>
                <textarea rows="4" className="w-full bg-transparent border-b border-white/10 p-4 pl-8 text-white outline-none focus:border-emerald-500 transition-colors uppercase placeholder-white/20 resize-none" placeholder="LOG_PAYLOAD"></textarea>
             </div>
             <button className="w-full py-5 bg-emerald-500/10 border border-emerald-500/50 text-emerald-500 rounded-lg font-black text-[10px] uppercase tracking-[0.5em] hover:bg-emerald-500 hover:text-black transition-all italic">
                [ EXECUTE_SEND ]
             </button>
          </form>
       </div>
    </div>
  </div>
);`} 
              htmlCode={`<!-- Cyberpunk Contact Uplink -->
<div class="contact-cyber-root">
  <div class="cyber-container">
     <div class="cyber-info">
        <div class="port-label">>> System_Inquiry_Port_8080</div>
        <h2 class="cyber-title">UPLINK_</h2>
     </div>
     <div class="cyber-form-box">
        <form class="cyber-form">
           <div class="cyber-field">
              <span>>></span>
              <input type="text" placeholder="USER_NAME">
           </div>
           <div class="cyber-field">
              <span>>></span>
              <input type="email" placeholder="PROTO_EMAIL">
           </div>
           <div class="cyber-field">
              <span>>></span>
              <textarea rows="4" placeholder="LOG_PAYLOAD"></textarea>
           </div>
           <button class="cyber-btn">[ EXECUTE_SEND ]</button>
        </form>
     </div>
  </div>
</div>`} 
              cssCode={`.contact-cyber-root { background: #000; padding: 48px; border-radius: 48px; border: 1px solid rgba(255,255,255,0.05); font-family: 'JetBrains Mono', monospace; font-style: italic; font-weight: 700; position: relative; overflow: hidden; }
.cyber-container { position: relative; z-index: 10; display: grid; grid-template-columns: 1fr; gap: 80px; max-width: 1280px; margin: 0 auto; }
@media (min-width: 1024px) { .cyber-container { grid-template-columns: repeat(2, 1fr); align-items: center; } }
.cyber-info { text-align: left; }
.port-label { font-size: 10px; color: #10b981; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; margin-bottom: 16px; }
.cyber-title { font-size: 64px; font-weight: 900; color: white; text-transform: uppercase; letter-spacing: -0.05em; line-height: 1; }
@media (min-width: 768px) { .cyber-title { font-size: 80px; } }
.cyber-form-box { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 40px; text-align: left; }
.cyber-form { display: flex; flex-direction: column; gap: 32px; }
.cyber-field { position: relative; }
.cyber-field span { position: absolute; left: 0; top: 16px; color: #10b981; font-size: 12px; font-weight: 900; }
.cyber-field input, .cyber-field textarea { width: 100%; background: transparent; border: none; border-bottom: 1px solid rgba(255,255,255,0.1); padding: 16px 16px 16px 32px; color: white; outline: none; transition: border-color 0.3s ease; text-transform: uppercase; }
.cyber-field textarea { resize: none; }
.cyber-btn { width: 100%; padding: 20px; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.5); color: #10b981; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; cursor: pointer; transition: all 0.3s ease; font-style: italic; }
.cyber-btn:hover { background: #10b981; color: black; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 03. Cyberpunk Matrix Port Uplink </span>
          <ContactCyber />
        </section>

        {/* 04. Neumorphic Tactile */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/cont border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cont:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ContactNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-16 rounded-[3rem] font-sans italic font-bold text-center">
    <div className="max-w-4xl mx-auto bg-[#e0e5ec] p-12 rounded-[3.5rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border border-white/20">
       <div className="text-center mb-16">
          <h2 className="text-6xl font-black text-slate-700 uppercase tracking-tighter italic leading-none mb-4">Soft_Link</h2>
          <p className="text-slate-500 lowercase font-medium italic">Tactile architecture for modern inquiry.</p>
       </div>
       <form className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          <div className="space-y-8">
             <div className="bg-[#e0e5ec] rounded-2xl p-1 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
                <input type="text" className="w-full bg-transparent p-4 outline-none text-slate-600 placeholder-slate-400 italic font-black" placeholder="Identifier_" />
             </div>
             <div className="bg-[#e0e5ec] rounded-2xl p-1 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
                <input type="email" className="w-full bg-transparent p-4 outline-none text-slate-600 placeholder-slate-400 italic font-black" placeholder="Secure_Mail_" />
             </div>
          </div>
          <div className="flex flex-col gap-8">
             <div className="bg-[#e0e5ec] rounded-2xl p-1 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] flex-1">
                <textarea className="w-full bg-transparent p-4 outline-none text-slate-600 placeholder-slate-400 italic font-black resize-none h-full" placeholder="Describe_Logic_"></textarea>
             </div>
             <button className="w-full py-5 rounded-2xl bg-[#e0e5ec] text-blue-600 font-black uppercase tracking-widest shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all italic active:scale-95">
                SUBMIT_PAYLOAD_
             </button>
          </div>
       </form>
    </div>
  </div>
);`} 
              htmlCode={`<!-- Neumorphic Contact Form -->
<div class="contact-neu-root">
  <div class="neu-box">
     <div class="neu-header">
        <h2 class="neu-title">Soft_Link</h2>
        <p class="neu-desc">Tactile architecture for modern inquiry.</p>
     </div>
     <form class="neu-grid">
        <div class="neu-col">
           <div class="neu-input-inset">
              <input type="text" placeholder="Identifier_">
           </div>
           <div class="neu-input-inset">
              <input type="email" placeholder="Secure_Mail_">
           </div>
        </div>
        <div class="neu-col">
           <div class="neu-input-inset grow">
              <textarea placeholder="Describe_Logic_"></textarea>
           </div>
           <button class="neu-btn">SUBMIT_PAYLOAD_</button>
        </div>
     </form>
  </div>
</div>`} 
              cssCode={`.contact-neu-root { background: #e0e5ec; padding: 64px; border-radius: 48px; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; text-align: center; }
.neu-box { max-width: 896px; margin: 0 auto; background: #e0e5ec; padding: 48px; border-radius: 56px; box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; border: 1px solid rgba(255,255,255,0.2); }
.neu-header { margin-bottom: 64px; }
.neu-title { font-size: 64px; font-weight: 900; color: #475569; text-transform: uppercase; letter-spacing: -0.05em; line-height: 1; margin-bottom: 16px; }
.neu-desc { color: #64748b; font-size: 18px; text-transform: lowercase; font-weight: 500; }
.neu-grid { display: grid; grid-template-columns: 1fr; gap: 40px; text-align: left; }
@media (min-width: 768px) { .neu-grid { grid-template-columns: repeat(2, 1fr); } }
.neu-col { display: flex; flex-direction: column; gap: 32px; }
.neu-input-inset { background: #e0e5ec; padding: 4px; border-radius: 16px; box-shadow: inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff; }
.neu-input-inset.grow { flex: 1; }
.neu-input-inset input, .neu-input-inset textarea { width: 100%; background: transparent; border: none; outline: none; padding: 16px; color: #475569; font-weight: 900; font-style: italic; }
.neu-input-inset textarea { height: 100%; resize: none; min-height: 160px; }
.neu-btn { width: 100%; padding: 20px; background: #e0e5ec; border: none; border-radius: 16px; color: #2563eb; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff; cursor: pointer; transition: all 0.3s ease; font-style: italic; }
.neu-btn:hover { box-shadow: inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 04. Neumorphic Tactile Soft Link </span>
          <ContactNeumorphic />
        </section>

        {/* 05. Magazine Editorial */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/cont border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cont:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ContactEditorial = () => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 font-sans italic font-bold">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
       <div className="flex-1 flex flex-col justify-between py-10 text-left">
          <div className="space-y-12">
             <h2 className="text-8xl md:text-[10rem] font-black text-slate-950 tracking-tighter uppercase leading-[0.8] mb-10 italic">WORK_ <br/> WITH_ <br/> US.</h2>
             <p className="text-slate-500 text-2xl lowercase font-medium max-w-sm italic">Defining the next generation of creative architecture through structural logic.</p>
          </div>
       </div>
       <div className="flex-1 bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl text-left">
          <form className="space-y-12">
             <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">Full_Name</label>
                <input type="text" className="w-full bg-transparent border-b-2 border-slate-200 p-4 text-2xl font-black text-slate-950 outline-none focus:border-slate-950 transition-colors placeholder-slate-200" placeholder="WHO_ARE_YOU?" />
             </div>
             <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">Email_Protocol</label>
                <input type="email" className="w-full bg-transparent border-b-2 border-slate-200 p-4 text-2xl font-black text-slate-950 outline-none focus:border-slate-950 transition-colors placeholder-slate-200" placeholder="SECURE_LINK" />
             </div>
             <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">Vision_Brief</label>
                <textarea rows="3" className="w-full bg-transparent border-b-2 border-slate-200 p-4 text-2xl font-black text-slate-950 outline-none focus:border-slate-950 transition-colors placeholder-slate-200 resize-none" placeholder="TELL_US_EVERYTHING"></textarea>
             </div>
             <button className="px-12 py-6 bg-slate-950 text-white rounded-full font-black text-xs uppercase tracking-[0.4em] hover:bg-blue-600 transition-all italic shadow-2xl">
                START_INQUIRY_ →
             </button>
          </form>
       </div>
    </div>
  </div>
);`} 
              htmlCode={`<!-- Editorial Contact Section -->
<div class="contact-editorial-root">
  <div class="editorial-container">
     <div class="editorial-sidebar">
        <h2 class="editorial-title">WORK_ <br/> WITH_ <br/> US.</h2>
        <p class="editorial-desc">Defining the next generation of creative architecture through structural logic.</p>
     </div>
     <div class="editorial-form-box">
        <form class="editorial-form">
           <div class="field-wrap">
              <label>Full_Name</label>
              <input type="text" placeholder="WHO_ARE_YOU?">
           </div>
           <div class="field-wrap">
              <label>Email_Protocol</label>
              <input type="email" placeholder="SECURE_LINK">
           </div>
           <div class="field-wrap">
              <label>Vision_Brief</label>
              <textarea rows="3" placeholder="TELL_US_EVERYTHING"></textarea>
           </div>
           <button class="editorial-btn">START_INQUIRY_ →</button>
        </form>
     </div>
  </div>
</div>`} 
              cssCode={`.contact-editorial-root { background: white; padding: 48px; border-radius: 48px; border: 1px solid #f1f5f9; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; }
.editorial-container { max-width: 1280px; margin: 0 auto; display: flex; flex-direction: column; gap: 80px; }
@media (min-width: 1024px) { .editorial-container { flex-direction: row; } }
.editorial-sidebar { flex: 1; text-align: left; padding: 40px 0; }
.editorial-title { font-size: 80px; font-weight: 900; color: #020617; text-transform: uppercase; line-height: 0.8; margin-bottom: 40px; }
@media (min-width: 768px) { .editorial-title { font-size: 160px; } }
.editorial-desc { color: #64748b; font-size: 24px; text-transform: lowercase; font-weight: 500; max-width: 384px; }
.editorial-form-box { flex: 1; background: #f8fafc; padding: 48px; border-radius: 56px; border: 1px solid #f1f5f9; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1); text-align: left; }
.editorial-form { display: flex; flex-direction: column; gap: 48px; }
.field-wrap { display: flex; flex-direction: column; gap: 8px; }
.field-wrap label { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; opacity: 0.4; }
.field-wrap input, .field-wrap textarea { width: 100%; background: transparent; border: none; border-bottom: 2px solid #e2e8f0; padding: 16px; font-size: 24px; font-weight: 900; color: #020617; outline: none; transition: border-color 0.3s ease; }
.field-wrap textarea { resize: none; }
.editorial-btn { align-self: flex-start; padding: 24px 48px; background: #020617; color: white; border-radius: 9999px; font-weight: 900; font-size: 12px; text-transform: uppercase; letter-spacing: 0.4em; border: none; cursor: pointer; transition: all 0.3s ease; font-style: italic; }
.editorial-btn:hover { background: #2563eb; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 05. Editorial Magazine Lead Generation </span>
          <ContactEditorial />
        </section>

        {/* 06. Bento Support Center */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/cont border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cont:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ContactBento = () => (
  <div className="bg-slate-50 p-12 rounded-[3rem] font-sans italic font-bold">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
       <div className="md:col-span-2 bg-white rounded-[2.5rem] p-12 border border-slate-100 shadow-xl flex flex-col justify-center">
          <div className="text-[10px] text-blue-600 font-black uppercase tracking-[0.5em] mb-4 italic">// Protocol_Help_Desk</div>
          <h2 className="text-6xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-8">Support_ <br/> Modules</h2>
          <div className="space-y-4">
             {['Sales_Node', 'Technical_Logic', 'Billing_Matrix'].map((topic) => (
                <div key={topic} className="p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-slate-950 hover:text-white transition-all cursor-pointer flex justify-between items-center group">
                   <span className="text-sm font-black uppercase italic tracking-widest">{topic}</span>
                   <span className="text-blue-600 font-black group-hover:translate-x-2 transition-transform">→</span>
                </div>
             ))}
          </div>
       </div>
       <div className="md:col-span-2 bg-blue-600 rounded-[2.5rem] p-12 text-white shadow-2xl relative overflow-hidden group text-left">
          <h3 className="text-3xl font-black uppercase mb-8 italic">Quick_Dispatch_</h3>
          <form className="space-y-6">
             <input type="text" className="w-full bg-white/10 border border-white/20 p-4 rounded-xl text-white outline-none focus:bg-white/20 transition-all placeholder-white/40 italic font-bold" placeholder="IDENTIFIER" />
             <input type="email" className="w-full bg-white/10 border border-white/20 p-4 rounded-xl text-white outline-none focus:bg-white/20 transition-all placeholder-white/40 italic font-bold" placeholder="PROTOCOL_MAIL" />
             <textarea rows="4" className="w-full bg-white/10 border border-white/20 p-4 rounded-xl text-white outline-none focus:bg-white/20 transition-all placeholder-white/40 italic font-bold resize-none" placeholder="DESCRIBE_LOGIC"></textarea>
             <button className="w-full py-4 bg-white text-blue-600 rounded-xl font-black text-[10px] uppercase tracking-widest italic hover:bg-slate-950 hover:text-white transition-all">DISPATCH_TICKET_</button>
          </form>
       </div>
    </div>
  </div>
);`} 
              htmlCode={`<!-- Bento Support Modules -->
<div class="contact-bento-root">
  <div class="bento-container">
     <div class="bento-card white">
        <div class="card-label">// Protocol_Help_Desk</div>
        <h2 class="card-title">Support_ <br/> Modules</h2>
        <div class="topics">
           <div class="topic">Sales_Node →</div>
           <div class="topic">Technical_Logic →</div>
           <div class="topic">Billing_Matrix →</div>
        </div>
     </div>
     <div class="bento-card blue">
        <h3 class="form-title">Quick_Dispatch_</h3>
        <form class="bento-form">
           <input type="text" placeholder="IDENTIFIER">
           <input type="email" placeholder="PROTOCOL_MAIL">
           <textarea rows="4" placeholder="DESCRIBE_LOGIC"></textarea>
           <button class="form-btn">DISPATCH_TICKET_</button>
        </form>
     </div>
  </div>
</div>`} 
              cssCode={`.contact-bento-root { background: #f8fafc; padding: 48px; border-radius: 48px; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; }
.bento-container { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 24px; }
@media (min-width: 768px) { .bento-container { grid-template-columns: repeat(4, 1fr); } }
.bento-card { border-radius: 40px; padding: 48px; text-align: left; }
.bento-card.white { grid-column: span 2; background: white; border: 1px solid #f1f5f9; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
.bento-card.blue { grid-column: span 2; background: #2563eb; color: white; box-shadow: 0 25px 50px -12px rgba(37,99,235,0.4); }
.card-label { font-size: 10px; color: #2563eb; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; margin-bottom: 16px; }
.card-title { font-size: 60px; font-weight: 900; color: #020617; text-transform: uppercase; line-height: 1; margin-bottom: 32px; }
.topics { display: flex; flex-direction: column; gap: 16px; }
.topic { background: #f8fafc; padding: 16px; border-radius: 16px; font-size: 14px; font-weight: 900; text-transform: uppercase; cursor: pointer; transition: all 0.3s ease; }
.topic:hover { background: #020617; color: white; }
.form-title { font-size: 32px; font-weight: 900; text-transform: uppercase; margin-bottom: 32px; }
.bento-form { display: flex; flex-direction: column; gap: 24px; }
.bento-form input, .bento-form textarea { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); padding: 16px; border-radius: 12px; color: white; outline: none; }
.form-btn { width: 100%; padding: 16px; background: white; color: #2563eb; border-radius: 12px; font-weight: 900; font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; border: none; cursor: pointer; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 06. Bento Support Matrix Hub </span>
          <ContactBento />
        </section>

        {/* 07. Floating Action Hub */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/cont border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cont:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ContactFloating = () => (
  <div className="relative min-h-[600px] bg-slate-50 p-12 rounded-[3rem] font-sans italic font-bold flex items-center justify-center">
    <div className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden text-left">
       <div className="bg-slate-950 p-8 text-white flex justify-between items-center">
          <div className="space-y-1">
             <h3 className="text-xl font-black uppercase italic tracking-tight">Direct_Link</h3>
             <p className="text-[10px] text-blue-400 font-black uppercase tracking-widest">Uptime: 24/7_</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">💬</div>
       </div>
       <div className="p-8 space-y-6">
          <input type="text" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl outline-none focus:border-blue-600 transition-colors font-black italic text-sm placeholder-slate-300" placeholder="NAME_" />
          <input type="email" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl outline-none focus:border-blue-600 transition-colors font-black italic text-sm placeholder-slate-300" placeholder="MAIL_" />
          <textarea rows="4" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl outline-none focus:border-blue-600 transition-colors font-black italic text-sm placeholder-slate-300 resize-none" placeholder="PAYLOAD_"></textarea>
          <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-black text-xs uppercase tracking-[0.2em] italic hover:bg-slate-950 transition-all shadow-xl shadow-blue-900/20">SEND_LOG_</button>
       </div>
    </div>
  </div>
);`} 
              htmlCode={`<!-- Floating Compact Contact Hub -->
<div class="contact-floating-root">
  <div class="floating-box">
     <div class="floating-header">
        <h3 class="header-title">Direct_Link</h3>
        <div class="header-icon">💬</div>
     </div>
     <div class="floating-body">
        <form class="floating-form">
           <input type="text" placeholder="NAME_">
           <input type="email" placeholder="MAIL_">
           <textarea rows="4" placeholder="PAYLOAD_"></textarea>
           <button class="floating-btn">SEND_LOG_</button>
        </form>
     </div>
  </div>
</div>`} 
              cssCode={`.contact-floating-root { position: relative; min-height: 600px; background: #f8fafc; padding: 48px; border-radius: 48px; display: flex; align-items: center; justify-content: center; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; }
.floating-box { background: white; width: 100%; max-width: 448px; border-radius: 40px; box-shadow: 0 50px 100px -20px rgba(0,0,0,0.15); border: 1px solid #f1f5f9; overflow: hidden; }
.floating-header { background: #020617; padding: 32px; display: flex; justify-content: space-between; align-items: center; color: white; }
.header-title { font-size: 20px; font-weight: 900; text-transform: uppercase; }
.floating-body { padding: 32px; text-align: left; }
.floating-form { display: flex; flex-direction: column; gap: 24px; }
.floating-form input, .floating-form textarea { width: 100%; background: #f8fafc; border: 1px solid #f1f5f9; padding: 16px; border-radius: 12px; outline: none; transition: border-color 0.3s ease; font-weight: 900; font-style: italic; font-size: 14px; }
.floating-btn { width: 100%; padding: 16px; background: #2563eb; color: white; border-radius: 12px; font-weight: 900; font-size: 12px; text-transform: uppercase; letter-spacing: 0.2em; border: none; cursor: pointer; transition: all 0.3s ease; font-style: italic; }
.floating-btn:hover { background: #020617; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 07. Floating Action Compact Hub </span>
          <ContactFloating />
        </section>

        {/* 08. Minimalist Lineage */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/cont border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cont:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ContactMinimal = () => (
  <div className="bg-white p-20 rounded-[3rem] font-sans italic font-bold border border-slate-100">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-20 text-left">
       <div className="w-full md:w-1/3">
          <h2 className="text-6xl font-black text-slate-950 tracking-tighter uppercase leading-none mb-10 italic underline decoration-slate-950/10 decoration-8">Talk.</h2>
       </div>
       <form className="flex-1 space-y-10">
          <div className="group relative">
             <input type="text" className="w-full bg-transparent border-b-2 border-slate-100 p-4 text-xl font-black text-slate-950 outline-none focus:border-blue-600 transition-all placeholder-slate-200" placeholder="NAME_IDENTIFIER" />
          </div>
          <div className="group relative">
             <input type="email" className="w-full bg-transparent border-b-2 border-slate-100 p-4 text-xl font-black text-slate-950 outline-none focus:border-blue-600 transition-all placeholder-slate-200" placeholder="MAIL_PROTOCOL" />
          </div>
          <div className="group relative">
             <textarea rows="3" className="w-full bg-transparent border-b-2 border-slate-100 p-4 text-xl font-black text-slate-950 outline-none focus:border-blue-600 transition-all placeholder-slate-200 resize-none" placeholder="DESCRIBE_LOGIC"></textarea>
          </div>
          <button className="px-10 py-5 bg-slate-950 text-white rounded-full font-black text-[10px] uppercase tracking-[0.5em] italic hover:bg-blue-600 transition-all shadow-2xl">
             START_COLLAB_ →
          </button>
       </form>
    </div>
  </div>
);`} 
              htmlCode={`<!-- Minimalist Contact Lineage -->
<div class="contact-min-root">
  <div class="min-container">
     <div class="min-sidebar">
        <h2 class="min-title">Talk.</h2>
     </div>
     <div class="min-form-box">
        <form class="min-form">
           <div class="min-field">
              <input type="text" placeholder="NAME_IDENTIFIER">
              <div class="field-bar"></div>
           </div>
           <div class="min-field">
              <input type="email" placeholder="MAIL_PROTOCOL">
              <div class="field-bar"></div>
           </div>
           <div class="min-field">
              <textarea rows="3" placeholder="DESCRIBE_LOGIC"></textarea>
              <div class="field-bar"></div>
           </div>
           <button class="min-btn">START_COLLAB_ →</button>
        </form>
     </div>
  </div>
</div>`} 
              cssCode={`.contact-min-root { background: white; padding: 80px; border-radius: 48px; border: 1px solid #f1f5f9; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; }
.min-container { max-width: 896px; margin: 0 auto; display: flex; flex-direction: column; gap: 80px; }
@media (min-width: 768px) { .min-container { flex-direction: row; text-align: left; } }
.min-title { font-size: 60px; font-weight: 900; color: #020617; text-transform: uppercase; letter-spacing: -0.05em; line-height: 1; text-decoration: underline; text-decoration-color: rgba(2,6,23,0.1); text-decoration-thickness: 8px; }
.min-form { display: flex; flex-direction: column; gap: 40px; }
.min-field { position: relative; }
.min-field input, .min-field textarea { width: 100%; background: transparent; border: none; border-bottom: 2px solid #f1f5f9; padding: 16px; font-size: 20px; font-weight: 900; color: #020617; outline: none; transition: all 0.3s ease; }
.min-btn { align-self: flex-start; padding: 20px 40px; background: #020617; color: white; border-radius: 9999px; font-weight: 900; font-size: 10px; text-transform: uppercase; letter-spacing: 0.5em; border: none; cursor: pointer; font-style: italic; }
.min-btn:hover { background: #2563eb; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 08. Minimalist Team Collab Protocol </span>
          <ContactMinimal />
        </section>

        {/* 09. Interactive Map Node */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/cont border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cont:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ContactMap = () => (
  <div className="relative h-[700px] w-full rounded-[3rem] overflow-hidden group font-sans italic font-bold">
    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200" className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125" />
    <div className="absolute inset-0 bg-slate-950/40"></div>
    <div className="absolute inset-0 flex items-center justify-end p-8 md:p-20 text-left">
       <div className="bg-white/80 backdrop-blur-2xl border border-white/20 p-12 rounded-[2.5rem] shadow-2xl w-full max-w-lg">
          <div className="mb-10">
             <div className="text-[10px] text-blue-600 font-black uppercase tracking-[0.4em] mb-2 italic">Node_Coordinate_04</div>
             <h2 className="text-4xl font-black text-slate-950 uppercase italic tracking-tighter leading-none">Visit_Matrix</h2>
          </div>
          <form className="space-y-6">
             <input type="text" className="w-full bg-white/50 border border-slate-200 p-4 rounded-xl outline-none focus:bg-white transition-all font-black italic text-sm" placeholder="NAME_" />
             <input type="email" className="w-full bg-white/50 border border-slate-200 p-4 rounded-xl outline-none focus:bg-white transition-all font-black italic text-sm" placeholder="MAIL_" />
             <button className="w-full py-5 bg-slate-950 text-white rounded-2xl font-black text-xs uppercase tracking-widest italic hover:bg-blue-600 transition-all">GET_DIRECTIONS_</button>
          </form>
       </div>
    </div>
  </div>
);`} 
              htmlCode={`<!-- Interactive Map Contact Node -->
<div class="contact-map-root">
  <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200" alt="Map Node" class="map-img">
  <div class="map-overlay"></div>
  <div class="map-content">
     <div class="map-card">
        <h2 class="card-title">Visit_Matrix</h2>
        <form class="card-form">
           <input type="text" placeholder="NAME_">
           <input type="email" placeholder="MAIL_">
           <button class="card-btn">GET_DIRECTIONS_</button>
        </form>
     </div>
  </div>
</div>`} 
              cssCode={`.contact-map-root { position: relative; height: 700px; width: 100%; border-radius: 48px; overflow: hidden; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; }
.map-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(125%); }
.map-overlay { position: absolute; inset: 0; background: rgba(2,6,23,0.4); }
.map-content { position: absolute; inset: 0; display: flex; align-items: center; justify-content: flex-end; padding: 80px; }
.map-card { background: rgba(255,255,255,0.8); backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.2); padding: 48px; border-radius: 40px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); width: 100%; max-width: 512px; text-align: left; }
.card-title { font-size: 36px; font-weight: 900; color: #020617; text-transform: uppercase; letter-spacing: -0.05em; line-height: 1; margin-bottom: 40px; }
.card-form { display: flex; flex-direction: column; gap: 24px; }
.card-form input { width: 100%; background: rgba(255,255,255,0.5); border: 1px solid #e2e8f0; padding: 16px; border-radius: 12px; outline: none; font-weight: 900; font-style: italic; font-size: 14px; }
.card-btn { width: 100%; padding: 20px; background: #020617; color: white; border-radius: 16px; font-weight: 900; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; border: none; cursor: pointer; font-style: italic; }
.card-btn:hover { background: #2563eb; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 09. Interactive Map Node Discovery </span>
          <ContactMap />
        </section>

        {/* 10. Professional SaaS */}
        <section className='bg-white p-4 rounded-xl shadow-lg relative group/cont border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cont:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ContactStandard = () => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 font-sans italic font-bold shadow-xl text-left">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto">
       <div className="flex flex-col justify-center bg-slate-950 p-12 rounded-[2.5rem] text-white relative overflow-hidden">
          <h2 className="text-6xl font-black tracking-tighter uppercase italic leading-none mb-8">Contact_ <br/> Protocol.</h2>
          <p className="text-slate-400 text-lg lowercase font-medium italic mb-12">Synchronizing global inquiries for structural deployment.</p>
       </div>
       <div className="flex flex-col justify-center">
          <form className="space-y-8">
             <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">First_Identifier</label>
                   <input type="text" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl outline-none focus:border-slate-950 transition-colors font-black italic text-sm" placeholder="NAME_01" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">Last_Identifier</label>
                   <input type="text" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl outline-none focus:border-slate-950 transition-colors font-black italic text-sm" placeholder="NAME_02" />
                </div>
             </div>
             <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">Global_Email_Protocol</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl outline-none focus:border-slate-950 transition-colors font-black italic text-sm" placeholder="SECURE_LINK" />
             </div>
             <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">Data_Brief</label>
                <textarea rows="4" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl outline-none focus:border-slate-950 transition-colors font-black italic text-sm resize-none" placeholder="DESCRIBE_LOGIC_AND_TIMELINES"></textarea>
             </div>
             <button className="w-full py-5 bg-slate-950 text-white rounded-2xl font-black text-xs uppercase tracking-[0.4em] italic hover:bg-blue-600 transition-all shadow-2xl">
                INITIALIZE_PROJECT_NODES →
             </button>
          </form>
       </div>
    </div>
  </div>
);`} 
              htmlCode={`<!-- Professional SaaS Contact Hub -->
<div class="contact-saas-root">
  <div class="saas-container">
     <div class="saas-sidebar">
        <h2 class="saas-title">Contact_ <br/> Protocol.</h2>
        <p class="saas-desc">Synchronizing global inquiries for structural deployment.</p>
     </div>
     <div class="saas-form-box">
        <form class="saas-form">
           <div class="saas-grid-2">
              <div class="saas-field">
                 <label>First_Identifier</label>
                 <input type="text" placeholder="NAME_01">
              </div>
              <div class="saas-field">
                 <label>Last_Identifier</label>
                 <input type="text" placeholder="NAME_02">
              </div>
           </div>
           <div class="saas-field">
              <label>Global_Email_Protocol</label>
              <input type="email" placeholder="SECURE_LINK">
           </div>
           <div class="saas-field">
              <label>Data_Brief</label>
              <textarea rows="4" placeholder="DESCRIBE_LOGIC_AND_TIMELINES"></textarea>
           </div>
           <button class="saas-btn">INITIALIZE_PROJECT_NODES →</button>
        </form>
     </div>
  </div>
</div>`} 
              cssCode={`.contact-saas-root { background: white; padding: 48px; border-radius: 48px; border: 1px solid #f1f5f9; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
.saas-container { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 80px; }
@media (min-width: 1024px) { .saas-container { grid-template-columns: repeat(2, 1fr); align-items: center; } }
.saas-sidebar { background: #020617; padding: 48px; border-radius: 40px; color: white; text-align: left; }
.saas-title { font-size: 60px; font-weight: 900; text-transform: uppercase; line-height: 1; margin-bottom: 32px; }
.saas-desc { color: #94a3b8; font-size: 18px; text-transform: lowercase; font-weight: 500; }
.saas-form-box { text-align: left; }
.saas-form { display: flex; flex-direction: column; gap: 32px; }
.saas-grid-2 { display: grid; grid-template-columns: 1fr; gap: 32px; }
@media (min-width: 768px) { .saas-grid-2 { grid-template-columns: repeat(2, 1fr); } }
.saas-field { display: flex; flex-direction: column; gap: 8px; }
.saas-field label { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.4; }
.saas-field input, .saas-field textarea { width: 100%; background: #f8fafc; border: 1px solid #f1f5f9; padding: 16px; border-radius: 12px; outline: none; font-weight: 900; font-style: italic; font-size: 14px; }
.saas-btn { width: 100%; padding: 20px; background: #020617; color: white; border-radius: 16px; font-weight: 900; font-size: 12px; text-transform: uppercase; letter-spacing: 0.4em; border: none; cursor: pointer; font-style: italic; }
.saas-btn:hover { background: #2563eb; }`} 
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8"> 10. Professional SaaS Protocol Hub </span>
          <ContactStandard />
        </section>

      </div>
    </div>
  );
};

export default ContactGallery;