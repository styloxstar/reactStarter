import React from 'react';
import CopyButton from '../CopyButton';

// --- SHARED COMPONENTS ---
const ErrorIcon = ({ char = "!" }) => (
  <div className="w-20 h-20 md:w-24 md:h-24 bg-black text-white border-[6px] border-black flex items-center justify-center mx-auto mb-10 rotate-3 shadow-[8px_8px_0_0_#ef4444] shrink-0">
    <span className="text-4xl md:text-5xl italic font-black">{char}</span>
  </div>
);

// --- 01. ALPHA FAILURE (404) ---
export const Error404 = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[10px] border-black p-6 md:p-12 shadow-[24px_24px_0_0_#000] text-center min-w-0">
      <ErrorIcon char="?" />
      <h2 className="text-4xl md:text-8xl font-black uppercase mb-4 tracking-tighter leading-none italic text-center break-words">NODE_NOT_FOUND.</h2>
      <p className="text-lg md:text-2xl uppercase mb-12 border-b-4 border-black pb-6 inline-block text-center truncate max-w-full italic text-red-600">ERROR_CODE: 404_STUB_MISSING</p>
      <p className="text-left text-xl md:text-2xl mb-12 border-4 border-black p-6 bg-slate-50 shadow-[8px_8px_0_0_#000] italic">
        THE REQUESTED COORDINATES DO NOT EXIST WITHIN THIS SECTOR. THE DATA PACKET HAS BEEN LOST TO THE VOID.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 italic">
        <button className="bg-black text-white py-6 text-2xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-all shadow-[8px_8px_0_0_#000]">REBOOT_TO_HOME</button>
        <button className="bg-white text-black py-6 text-2xl font-black uppercase border-4 border-black hover:bg-black hover:text-white transition-all shadow-[8px_8px_0_0_#000]">REPORT_GLITCH</button>
      </div>
    </div>
  </div>
);

// --- 02. SYSTEM BREACH (403) ---
export const Error403 = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-white">
    <div className="bg-black border-[10px] border-white p-6 md:p-12 shadow-[24px_24px_0_0_#ef4444] text-center min-w-0">
      <div className="w-24 h-24 bg-red-600 text-white border-[6px] border-white flex items-center justify-center mx-auto mb-10 -rotate-3 shadow-[8px_8px_0_0_#000] shrink-0">
        <span className="text-5xl italic font-black">X</span>
      </div>
      <h2 className="text-4xl md:text-8xl font-black uppercase mb-4 tracking-tighter leading-none italic text-center break-words text-red-500">ACCESS_DENIED.</h2>
      <p className="text-lg md:text-2xl uppercase mb-12 border-b-4 border-red-600 pb-6 inline-block text-center truncate max-w-full italic">SECURITY_CLEARANCE: NULL</p>
      <div className="text-left space-y-6 mb-12 min-w-0">
        <div className="border-4 border-red-600 p-6 bg-red-950/20 shadow-[8px_8px_0_0_#ef4444] italic text-red-400">
          YOUR CREDENTIALS HAVE BEEN FLAGED BY THE SENTINEL PROTOCOL. ATTEMPTING TO BREACH THIS SECTOR IS A VIOLATION OF THE MESH STIPULATIONS.
        </div>
      </div>
      <button className="w-full bg-red-600 text-white py-6 text-2xl font-black uppercase border-4 border-white hover:bg-white hover:text-red-600 transition-all shadow-[12px_12px_0_0_#000] italic">REQUEST_PERM</button>
    </div>
  </div>
);

// --- 03. OFFLINE NODE ---
export const ErrorOffline = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[10px] border-black p-6 md:p-12 shadow-[24px_24px_0_0_#facc15] text-center min-w-0">
      <div className="w-24 h-24 bg-black text-white border-[6px] border-black flex items-center justify-center mx-auto mb-10 rotate-12 shadow-[8px_8px_0_0_#facc15] shrink-0">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" /></svg>
      </div>
      <h2 className="text-4xl md:text-8xl font-black uppercase mb-4 tracking-tighter leading-none italic text-center break-words">SIGNAL_LOST.</h2>
      <p className="text-lg md:text-2xl uppercase mb-12 border-b-4 border-black pb-6 inline-block text-center truncate max-w-full italic">LINK_STATUS: DISCONNECTED</p>
      <div className="bg-black text-white p-8 border-[6px] border-black shadow-[12px_12px_0_0_#facc15] mb-12 min-w-0 italic text-left">
        PLEASE CHECK YOUR HARDWARE UMBILICAL. THE MESH IS UNREACHABLE FROM YOUR CURRENT COORDINATES.
      </div>
      <button className="w-full bg-yellow-400 text-black py-6 text-3xl font-black uppercase border-[6px] border-black hover:bg-black hover:text-yellow-400 transition-all shadow-[12px_12px_0_0_#000] italic">RETRY_LINK</button>
    </div>
  </div>
);

// --- 04. RATE THROTTLED (429) ---
export const Error429 = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-cyan-400 border-[10px] border-black p-6 md:p-12 shadow-[24px_24px_0_0_#000] text-center min-w-0">
      <div className="w-24 h-24 bg-black text-white border-[6px] border-black flex items-center justify-center mx-auto mb-10 rotate-6 shadow-[8px_8px_0_0_#fff] shrink-0 text-5xl">🐌</div>
      <h2 className="text-4xl md:text-8xl font-black uppercase mb-4 tracking-tighter leading-none italic text-center break-words">THROTTLE_ACTIVE.</h2>
      <p className="text-lg md:text-2xl uppercase mb-12 border-b-4 border-black pb-6 inline-block text-center truncate max-w-full italic">BURST_LIMIT_EXCEEDED</p>
      <div className="flex flex-col items-center mb-12">
        <div className="text-6xl md:text-9xl font-black italic mb-4">00:45</div>
        <div className="text-xl uppercase bg-black text-white px-4 py-2 rotate-1">RETRY_COOLDOWN</div>
      </div>
      <p className="text-xl md:text-2xl italic mb-12 text-left border-4 border-black p-6 bg-white shadow-[8px_8px_0_0_#000]">
        YOU ARE TRANSMITTING PACKETS FASTER THAN THE GATEWAY CAN PROCESS. COOL DOWN OR BE BLACKLISTED.
      </p>
    </div>
  </div>
);

// --- 05. PAYLOAD CRASH (500) ---
export const Error500 = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[10px] border-black p-6 md:p-12 shadow-[32px_32px_0_0_#ef4444] overflow-hidden min-w-0 italic">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 text-left">
          <h2 className="text-5xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-8 italic text-red-600">CRITICAL_SMASH.</h2>
          <p className="text-2xl uppercase mb-12 italic border-l-8 border-black pl-6">THE SERVER KERNEL HAS PANICKED. ALL PAYLOADS HAVE BEEN DROPPED.</p>
          <div className="font-mono text-sm bg-black text-green-500 p-6 border-4 border-black shadow-[8px_8px_0_0_#000] mb-12">
            <div>> STACK_TRACE_START</div>
            <div>> ERROR: HEAP_OVERFLOW</div>
            <div>> BUFFER_0x129FF: CORRUPT</div>
            <div>> ABORTING_PROC...</div>
          </div>
        </div>
        <div className="lg:col-span-5 bg-red-600 p-8 flex flex-col justify-center items-center text-white border-8 border-black rotate-2 shadow-[12px_12px_0_0_#000]">
          <h3 className="text-4xl font-black uppercase mb-8">500_FAIL</h3>
          <button className="w-full bg-black text-white py-4 font-black uppercase border-4 border-white hover:bg-white hover:text-black transition-all">REBOOT_NODE</button>
        </div>
      </div>
    </div>
  </div>
);

// --- 06. SECURE LOCKOUT ---
export const ErrorLockout = () => (
  <div className="w-full max-w-2xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-yellow-400 border-[10px] border-black p-8 md:p-16 text-center min-w-0 italic">
      <div className="w-32 h-32 bg-black text-white border-[8px] border-black flex items-center justify-center mx-auto mb-10 rotate-[-5deg] shadow-[12px_12px_0_0_#fff] shrink-0 text-6xl">🔒</div>
      <h2 className="text-5xl md:text-7xl font-black uppercase mb-6 tracking-tighter leading-none italic">IDENTITY_LOCKED.</h2>
      <p className="text-xl md:text-2xl mb-12 italic border-4 border-black p-6 bg-white shadow-[8px_8px_0_0_#000]">
        TOO MANY FAILED AUTHENTICATION ATTEMPTS. YOUR BIOMETRIC TOKEN HAS BEEN SUSPENDED FOR 24 HOURS.
      </p>
      <button className="w-full bg-black text-white py-6 text-2xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-all shadow-[12px_12px_0_0_#fff] italic">RECOVER_ACCESS</button>
    </div>
  </div>
);

// --- 07. PAYMENT VOID ---
export const ErrorPayment = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[10px] border-black p-8 md:p-16 shadow-[24px_24px_0_0_#ec4899] min-w-0 italic">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center mb-12 gap-8">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic text-pink-600">VOID_TX.</h2>
        <div className="bg-black text-white p-6 rotate-2 border-4 border-pink-500 shadow-[8px_8px_0_0_#ec4899]">
          <span className="text-2xl font-black italic">ERROR_PAYMENT_F01</span>
        </div>
      </div>
      <div className="border-y-8 border-black py-12 mb-12">
        <p className="text-2xl md:text-3xl italic font-black uppercase mb-4">INSUFFICIENT_CREDITS.</p>
        <p className="text-xl opacity-60 italic">THE CENTRAL BANK HAS REJECTED THE TRANSACTION REQUEST. PLEASE INJECT NEW FUNDS TO CONTINUE OPERATION.</p>
      </div>
      <button className="w-full bg-pink-600 text-white py-8 text-3xl font-black uppercase border-4 border-black hover:bg-black transition-all shadow-[12px_12px_0_0_#000] italic">UPDATE_CREDITS</button>
    </div>
  </div>
);

// --- 08. EMPTY SECTOR ---
export const ErrorEmpty = () => (
  <div className="w-full max-w-3xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[10px] border-black p-12 md:p-24 text-center min-w-0 italic relative overflow-hidden shadow-[20px_20px_0_0_#000]">
      <div className="absolute top-0 left-0 w-full h-4 bg-gray-200"></div>
      <h2 className="text-7xl md:text-9xl font-black uppercase mb-6 tracking-tighter italic text-gray-200 select-none">EMPTY.</h2>
      <div className="relative z-10">
        <p className="text-3xl md:text-4xl font-black uppercase mb-12 italic">NO_DATA_PACKETS_FOUND.</p>
        <div className="w-24 h-4 bg-black mx-auto mb-12"></div>
        <button className="bg-black text-white px-12 py-6 text-2xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-all shadow-[8px_8px_0_0_#000]">SCAN_OTHER_SECTOR</button>
      </div>
    </div>
  </div>
);

// --- 09. MAINTENANCE PROTOCOL ---
export const ErrorMaintenance = () => (
  <div className="w-full max-w-5xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-[#facc15] border-[10px] border-black p-8 md:p-16 shadow-[40px_40px_0_0_#000] min-w-0 italic overflow-hidden relative">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-black rotate-45"></div>
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-48 h-48 bg-black text-white border-[8px] border-white flex items-center justify-center shrink-0 rotate-6 shadow-[12px_12px_0_0_#000]">
          <span className="text-7xl font-black italic">!</span>
        </div>
        <div className="flex-1">
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-8 italic">MAINTENANCE_MODE.</h2>
          <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0_0_#000]">
            <p className="text-xl md:text-2xl italic font-black uppercase">UPGRADING_THE_MATRIX...</p>
            <p className="text-lg opacity-70 italic mt-2 uppercase">ESTIMATED_SYNC_TIME: 02:00:00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 10. CHAOS CRITICAL ---
export const ErrorChaos = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-white">
    <div className="bg-black border-[12px] border-white p-8 md:p-16 shadow-[30px_30px_0_0_#ff00ff] min-w-0 italic relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-cyan-400 to-yellow-500 animate-pulse"></div>
      <h2 className="text-6xl md:text-9xl font-black uppercase mb-12 tracking-tighter leading-none italic break-words text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">GLITCH_01.</h2>
      <div className="grid md:grid-cols-2 gap-12 italic">
        <div className="border-4 border-white p-8 bg-white/5 backdrop-blur-md shadow-[12px_12px_0_0_#00ffff]">
          <p className="text-2xl font-black uppercase mb-4 italic">REALITY_LEAK.</p>
          <p className="opacity-60 italic">THE UI HAS COLLAPSED INTO THE VOID. ABANDON SHIP IMMEDIATELY.</p>
        </div>
        <div className="flex flex-col justify-end">
          <button className="bg-white text-black py-8 text-3xl font-black uppercase border-4 border-white hover:bg-transparent hover:text-white transition-all shadow-[12px_12px_0_0_#ff00ff] italic">ESCAPE_NOW</button>
        </div>
      </div>
    </div>
  </div>
);

// --- MAIN GALLERY ---

const ErrorPageGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-100 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16 italic">
        <h1 className="text-5xl md:text-7xl font-black text-slate-800 mb-4 uppercase">Error Galleries</h1>
        <p className="text-slate-500 font-bold uppercase tracking-widest">High-Fidelity Failure State Restoration</p>
      </div>
      
      <div className="space-y-32 max-w-6xl mx-auto">
        
        {/* 01. 404 */}
        <section className='box-shadow p-4 rounded-lg relative group/erro bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/erro:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const Error404 = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[10px] border-black p-12 shadow-[24px_24px_0_0_#000] text-center min-w-0">
      <div className="w-24 h-24 bg-black text-white border-[6px] border-black flex items-center justify-center mx-auto mb-10 rotate-3 shadow-[8px_8px_0_0_#ef4444] shrink-0">
        <span className="text-5xl font-black italic">?</span>
      </div>
      <h2 className="text-7xl font-black uppercase mb-4 tracking-tighter leading-none italic text-center break-words">NODE_NOT_FOUND.</h2>
      <p className="text-2xl uppercase mb-12 border-b-4 border-black pb-6 inline-block text-center truncate max-w-full text-red-600 italic">ERROR_CODE: 404_STUB_MISSING</p>
      <div className="grid grid-cols-2 gap-6 italic">
        <button className="bg-black text-white py-6 text-2xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-all shadow-[8px_8px_0_0_#000]">REBOOT_TO_HOME</button>
        <button className="bg-white text-black py-6 text-2xl font-black uppercase border-4 border-black hover:bg-black hover:text-white transition-all shadow-[8px_8px_0_0_#000]">REPORT_GLITCH</button>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="brutal-error-root">
  <div class="icon">?</div>
  <h2 class="title">NODE_NOT_FOUND.</h2>
  <p class="code">ERROR_CODE: 404_STUB_MISSING</p>
  <div class="message">THE REQUESTED COORDINATES DO NOT EXIST WITHIN THIS SECTOR. THE DATA PACKET HAS BEEN LOST TO THE VOID.</div>
  <div class="actions">
    <button class="btn btn-black">REBOOT_TO_HOME</button>
    <button class="btn btn-white">REPORT_GLITCH</button>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.brutal-error-root { background: white; border: 10px solid black; padding: 48px; box-shadow: 24px 24px 0 0 #000; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; text-align: center; color: black; max-width: 800px; margin: 40px auto; }
.icon { width: 96px; height: 96px; background: black; color: white; display: flex; align-items: center; justify-content: center; margin: 0 auto 40px; font-size: 48px; transform: rotate(3deg); box-shadow: 8px 8px 0 0 #ef4444; border: 6px solid black; }
.title { font-size: 80px; text-transform: uppercase; margin-bottom: 16px; line-height: 1; letter-spacing: -0.05em; }
.code { font-size: 24px; text-transform: uppercase; border-bottom: 4px solid black; padding-bottom: 24px; display: inline-block; margin-bottom: 48px; color: #ef4444; }
.message { text-align: left; font-size: 20px; border: 4px solid black; padding: 24px; background: #f8fafc; box-shadow: 8px 8px 0 0 #000; margin-bottom: 48px; }
.actions { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.btn { border: 4px solid black; padding: 24px; font-size: 24px; font-weight: 900; text-transform: uppercase; cursor: pointer; transition: all 0.2s; box-shadow: 8px 8px 0 0 #000; font-family: inherit; font-style: inherit; }
.btn-black { background: black; color: white; }
.btn-white { background: white; color: black; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">01. Node Not Found (404)</span>
          <Error404 />
        </section>

        {/* 02. 403 */}
        <section className='box-shadow p-4 rounded-lg relative group/erro bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/erro:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const Error403 = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-white">
    <div className="bg-black border-[10px] border-white p-12 shadow-[24px_24px_0_0_#ef4444] text-center min-w-0">
      <div className="w-24 h-24 bg-red-600 text-white border-[6px] border-white flex items-center justify-center mx-auto mb-10 -rotate-3 shadow-[8px_8px_0_0_#000] shrink-0">
        <span className="text-5xl italic font-black">X</span>
      </div>
      <h2 className="text-7xl font-black uppercase mb-4 tracking-tighter leading-none italic text-center break-words text-red-500">ACCESS_DENIED.</h2>
      <p className="text-2xl uppercase mb-12 border-b-4 border-red-600 pb-6 inline-block text-center truncate max-w-full italic">SECURITY_CLEARANCE: NULL</p>
      <button className="w-full bg-red-600 text-white py-6 text-2xl font-black uppercase border-4 border-white hover:bg-white hover:text-red-600 transition-all shadow-[12px_12px_0_0_#000] italic">REQUEST_PERM</button>
    </div>
  </div>
);`}
              htmlCode={`<div class="secure-error-root">
  <div class="lock-icon">X</div>
  <h2 class="title">ACCESS_DENIED.</h2>
  <p class="status">SECURITY_CLEARANCE: NULL</p>
  <div class="alert-box">YOUR CREDENTIALS HAVE BEEN FLAGED BY THE SENTINEL PROTOCOL. ATTEMPTING TO BREACH THIS SECTOR IS A VIOLATION OF THE MESH STIPULATIONS.</div>
  <button class="request-btn">REQUEST_PERM</button>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.secure-error-root { background: black; border: 10px solid white; padding: 48px; box-shadow: 24px 24px 0 0 #ef4444; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; text-align: center; color: white; max-width: 800px; margin: 40px auto; }
.lock-icon { width: 96px; height: 96px; background: #dc2626; color: white; display: flex; align-items: center; justify-content: center; margin: 0 auto 40px; font-size: 56px; transform: rotate(-3deg); box-shadow: 8px 8px 0 0 #000; border: 6px solid white; }
.title { font-size: 80px; text-transform: uppercase; color: #ef4444; line-height: 1; letter-spacing: -0.05em; margin-bottom: 16px; }
.status { font-size: 24px; text-transform: uppercase; border-bottom: 4px solid #dc2626; padding-bottom: 24px; display: inline-block; margin-bottom: 48px; }
.alert-box { text-align: left; border: 4px solid #dc2626; padding: 24px; background: rgba(220, 38, 38, 0.1); color: #f87171; margin-bottom: 48px; }
.request-btn { width: 100%; background: #dc2626; color: white; border: 4px solid white; padding: 24px; font-size: 24px; font-weight: 900; text-transform: uppercase; cursor: pointer; box-shadow: 12px 12px 0 0 #000; transition: all 0.2s; font-family: inherit; font-style: inherit; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">02. Access Denied (403)</span>
          <Error403 />
        </section>

        {/* 03. OFFLINE */}
        <section className='box-shadow p-4 rounded-lg relative group/erro bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/erro:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ErrorOffline = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[10px] border-black p-12 shadow-[24px_24px_0_0_#facc15] text-center min-w-0 italic">
      <div className="w-24 h-24 bg-black text-white border-[6px] border-black flex items-center justify-center mx-auto mb-10 rotate-12 shadow-[8px_8px_0_0_#facc15] shrink-0">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" /></svg>
      </div>
      <h2 className="text-7xl font-black uppercase mb-4 tracking-tighter leading-none text-center break-words italic">SIGNAL_LOST.</h2>
      <p className="text-2xl uppercase mb-12 border-b-4 border-black pb-6 inline-block text-center truncate max-w-full italic">LINK_STATUS: DISCONNECTED</p>
      <button className="w-full bg-yellow-400 text-black py-6 text-3xl font-black uppercase border-[6px] border-black hover:bg-black hover:text-yellow-400 transition-all shadow-[12px_12px_0_0_#000] italic">RETRY_LINK</button>
    </div>
  </div>
);`}
              htmlCode={`<div class="offline-root">
  <div class="wifi-icon">
    <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" /></svg>
  </div>
  <h2 class="title">SIGNAL_LOST.</h2>
  <p class="status">LINK_STATUS: DISCONNECTED</p>
  <div class="dark-info">PLEASE CHECK YOUR HARDWARE UMBILICAL. THE MESH IS UNREACHABLE FROM YOUR CURRENT COORDINATES.</div>
  <button class="retry-btn">RETRY_LINK</button>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.offline-root { background: white; border: 10px solid black; padding: 48px; box-shadow: 24px 24px 0 0 #facc15; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; text-align: center; color: black; max-width: 800px; margin: 40px auto; }
.wifi-icon { width: 96px; height: 96px; background: black; color: white; display: flex; align-items: center; justify-content: center; margin: 0 auto 40px; transform: rotate(12deg); box-shadow: 8px 8px 0 0 #facc15; border: 6px solid black; }
.title { font-size: 80px; text-transform: uppercase; line-height: 1; letter-spacing: -0.05em; margin-bottom: 16px; }
.status { font-size: 24px; text-transform: uppercase; border-bottom: 4px solid black; padding-bottom: 24px; display: inline-block; margin-bottom: 48px; }
.dark-info { background: black; color: white; padding: 32px; border: 6px solid black; box-shadow: 12px 12px 0 0 #facc15; margin-bottom: 48px; text-align: left; line-height: 1.4; }
.retry-btn { width: 100%; background: #facc15; color: black; border: 6px solid black; padding: 24px; font-size: 32px; font-weight: 900; text-transform: uppercase; cursor: pointer; box-shadow: 12px 12px 0 0 #000; transition: all 0.2s; font-family: inherit; font-style: inherit; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">03. Signal Lost (Offline)</span>
          <ErrorOffline />
        </section>

        {/* 04. 429 */}
        <section className='box-shadow p-4 rounded-lg relative group/erro bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/erro:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const Error429 = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-cyan-400 border-[10px] border-black p-12 shadow-[24px_24px_0_0_#000] text-center min-w-0 italic">
      <div className="w-24 h-24 bg-black text-white border-[6px] border-black flex items-center justify-center mx-auto mb-10 rotate-6 shadow-[8px_8px_0_0_#fff] shrink-0 text-5xl">🐌</div>
      <h2 className="text-7xl font-black uppercase mb-4 tracking-tighter leading-none italic text-center break-words">THROTTLE_ACTIVE.</h2>
      <p className="text-2xl uppercase mb-12 border-b-4 border-black pb-6 inline-block text-center truncate max-w-full italic">BURST_LIMIT_EXCEEDED</p>
      <div className="flex flex-col items-center mb-12 italic">
        <div className="text-9xl font-black italic mb-4">00:45</div>
        <div className="text-xl uppercase bg-black text-white px-4 py-2 rotate-1">RETRY_COOLDOWN</div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="throttle-root">
  <div class="snail-icon">🐌</div>
  <h2 class="title">THROTTLE_ACTIVE.</h2>
  <p class="status">BURST_LIMIT_EXCEEDED</p>
  <div class="cooldown-area">
    <div class="timer">00:45</div>
    <div class="label">RETRY_COOLDOWN</div>
  </div>
  <div class="alert-box">YOU ARE TRANSMITTING PACKETS FASTER THAN THE GATEWAY CAN PROCESS. COOL DOWN OR BE BLACKLISTED.</div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.throttle-root { background: #22d3ee; border: 10px solid black; padding: 48px; box-shadow: 24px 24px 0 0 #000; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; text-align: center; color: black; max-width: 800px; margin: 40px auto; }
.snail-icon { width: 96px; height: 96px; background: black; color: white; display: flex; align-items: center; justify-content: center; margin: 0 auto 40px; font-size: 48px; transform: rotate(6deg); box-shadow: 8px 8px 0 0 #fff; border: 6px solid black; }
.title { font-size: 80px; text-transform: uppercase; line-height: 1; letter-spacing: -0.05em; margin-bottom: 16px; }
.status { font-size: 24px; text-transform: uppercase; border-bottom: 4px solid black; padding-bottom: 24px; display: inline-block; margin-bottom: 48px; }
.cooldown-area { margin-bottom: 48px; }
.timer { font-size: 96px; font-weight: 900; line-height: 1; }
.label { display: inline-block; background: black; color: white; padding: 8px 16px; font-size: 20px; transform: rotate(1deg); margin-top: 16px; }
.alert-box { text-align: left; border: 4px solid black; padding: 24px; background: white; box-shadow: 8px 8px 0 0 #000; font-size: 20px; line-height: 1.4; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">04. Throttle Active (429)</span>
          <Error429 />
        </section>

        {/* 05. 500 */}
        <section className='box-shadow p-4 rounded-lg relative group/erro bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/erro:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const Error500 = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[10px] border-black p-12 shadow-[32px_32px_0_0_#ef4444] overflow-hidden min-w-0 italic">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <h2 className="text-8xl font-black uppercase leading-none tracking-tighter mb-8 italic text-red-600">CRITICAL_SMASH.</h2>
          <p className="text-2xl uppercase mb-12 italic border-l-8 border-black pl-6">THE SERVER KERNEL HAS PANICKED. ALL PAYLOADS HAVE BEEN DROPPED.</p>
        </div>
        <div className="lg:col-span-5 bg-red-600 p-8 flex flex-col justify-center items-center text-white border-8 border-black rotate-2 shadow-[12px_12px_0_0_#000] italic">
          <h3 className="text-4xl font-black uppercase mb-8">500_FAIL</h3>
          <button className="w-full bg-black text-white py-4 font-black uppercase border-4 border-white hover:bg-white hover:text-black transition-all italic">REBOOT_NODE</button>
        </div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="critical-smash-root">
  <div class="content-side">
    <h2 class="title">CRITICAL_SMASH.</h2>
    <p class="summary">THE SERVER KERNEL HAS PANICKED. ALL PAYLOADS HAVE BEEN DROPPED.</p>
    <div class="stack-trace">
      <div>> STACK_TRACE_START</div>
      <div>> ERROR: HEAP_OVERFLOW</div>
      <div>> BUFFER_0x129FF: CORRUPT</div>
      <div>> ABORTING_PROC...</div>
    </div>
  </div>
  <div class="action-side">
    <h3 class="side-code">500_FAIL</h3>
    <button class="reboot-btn">REBOOT_NODE</button>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.critical-smash-root { display: grid; grid-template-columns: 7fr 5fr; border: 10px solid black; background: white; box-shadow: 32px 32px 0 0 #ef4444; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 1000px; margin: 40px auto; overflow: hidden; }
@media (max-width: 1024px) { .critical-smash-root { grid-template-columns: 1fr; } }
.content-side { padding: 48px; }
.title { font-size: 80px; text-transform: uppercase; line-height: 1; color: #dc2626; letter-spacing: -0.05em; margin-bottom: 32px; }
.summary { font-size: 24px; text-transform: uppercase; border-left: 8px solid black; padding-left: 24px; margin-bottom: 48px; }
.stack-trace { background: black; color: #22c55e; padding: 24px; border: 4px solid black; box-shadow: 8px 8px 0 0 #000; font-family: monospace; font-size: 14px; line-height: 1.6; }
.action-side { background: #dc2626; color: white; padding: 48px; display: flex; flex-direction: column; justify-content: center; align-items: center; border-left: 10px solid black; transform: rotate(2deg); box-shadow: 12px 12px 0 0 #000; }
@media (max-width: 1024px) { .action-side { border-left: none; border-top: 10px solid black; transform: none; } }
.side-code { font-size: 40px; margin-bottom: 32px; }
.reboot-btn { width: 100%; background: black; color: white; border: 4px solid white; padding: 24px; font-size: 24px; font-weight: 900; cursor: pointer; text-transform: uppercase; transition: all 0.2s; font-family: inherit; font-style: inherit; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">05. Critical Smash (500)</span>
          <Error500 />
        </section>

        {/* 06. LOCKOUT */}
        <section className='box-shadow p-4 rounded-lg relative group/erro bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/erro:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ErrorLockout = () => (
  <div className="w-full max-w-2xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-yellow-400 border-[10px] border-black p-16 text-center min-w-0 italic">
      <div className="w-32 h-32 bg-black text-white border-[8px] border-black flex items-center justify-center mx-auto mb-10 rotate-[-5deg] shadow-[12px_12px_0_0_#fff] shrink-0 text-6xl">🔒</div>
      <h2 className="text-7xl font-black uppercase mb-6 tracking-tighter leading-none italic">IDENTITY_LOCKED.</h2>
      <button className="w-full bg-black text-white py-6 text-2xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-all shadow-[12px_12px_0_0_#fff] italic">RECOVER_ACCESS</button>
    </div>
  </div>
);`}
              htmlCode={`<div class="lockout-root">
  <div class="lock-icon">🔒</div>
  <h2 class="title">IDENTITY_LOCKED.</h2>
  <div class="alert-box">TOO MANY FAILED AUTHENTICATION ATTEMPTS. YOUR BIOMETRIC TOKEN HAS BEEN SUSPENDED FOR 24 HOURS.</div>
  <button class="recover-btn">RECOVER_ACCESS</button>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.lockout-root { background: #facc15; border: 10px solid black; padding: 64px; text-align: center; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 600px; margin: 40px auto; color: black; }
.lock-icon { width: 128px; height: 128px; background: black; color: white; display: flex; align-items: center; justify-content: center; margin: 0 auto 40px; font-size: 64px; transform: rotate(-5deg); box-shadow: 12px 12px 0 0 #fff; border: 8px solid black; }
.title { font-size: 64px; text-transform: uppercase; line-height: 1; letter-spacing: -0.05em; margin-bottom: 32px; }
.alert-box { text-align: left; font-size: 20px; border: 4px solid black; padding: 24px; background: white; box-shadow: 8px 8px 0 0 #000; margin-bottom: 48px; }
.recover-btn { width: 100%; background: black; color: white; border: 4px solid black; padding: 24px; font-size: 24px; font-weight: 900; text-transform: uppercase; cursor: pointer; box-shadow: 12px 12px 0 0 #fff; transition: all 0.2s; font-family: inherit; font-style: inherit; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">06. Identity Locked (Security)</span>
          <ErrorLockout />
        </section>

        {/* 07. PAYMENT */}
        <section className='box-shadow p-4 rounded-lg relative group/erro bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/erro:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ErrorPayment = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[10px] border-black p-16 shadow-[24px_24px_0_0_#ec4899] min-w-0 italic">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center mb-12 gap-8 italic">
        <h2 className="text-8xl font-black uppercase tracking-tighter italic text-pink-600">VOID_TX.</h2>
        <div className="bg-black text-white p-6 rotate-2 border-4 border-pink-500 shadow-[8px_8px_0_0_#ec4899]">
          <span className="text-2xl font-black italic">ERROR_PAYMENT_F01</span>
        </div>
      </div>
      <button className="w-full bg-pink-600 text-white py-8 text-3xl font-black uppercase border-4 border-black hover:bg-black transition-all shadow-[12px_12px_0_0_#000] italic">UPDATE_CREDITS</button>
    </div>
  </div>
);`}
              htmlCode={`<div class="payment-void-root">
  <div class="top-row">
    <h2 class="title">VOID_TX.</h2>
    <div class="error-badge">ERROR_PAYMENT_F01</div>
  </div>
  <div class="message-area">
    <p class="heading">INSUFFICIENT_CREDITS.</p>
    <p class="desc">THE CENTRAL BANK HAS REJECTED THE TRANSACTION REQUEST. PLEASE INJECT NEW FUNDS TO CONTINUE OPERATION.</p>
  </div>
  <button class="update-btn">UPDATE_CREDITS</button>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.payment-void-root { background: white; border: 10px solid black; padding: 64px; box-shadow: 24px 24px 0 0 #ec4899; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 900px; margin: 40px auto; color: black; }
.top-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 48px; gap: 32px; flex-wrap: wrap; }
.title { font-size: 80px; text-transform: uppercase; color: #db2777; line-height: 1; letter-spacing: -0.05em; }
.error-badge { background: black; color: white; padding: 24px; border: 4px solid #ec4899; transform: rotate(2deg); box-shadow: 8px 8px 0 0 #ec4899; font-size: 24px; }
.message-area { border-top: 8px solid black; border-bottom: 8px solid black; padding: 48px 0; margin-bottom: 48px; }
.heading { font-size: 32px; text-transform: uppercase; margin-bottom: 16px; }
.desc { font-size: 20px; opacity: 0.6; line-height: 1.4; }
.update-btn { width: 100%; background: #db2777; color: white; border: 4px solid black; padding: 32px; font-size: 32px; font-weight: 900; text-transform: uppercase; cursor: pointer; box-shadow: 12px 12px 0 0 #000; transition: all 0.2s; font-family: inherit; font-style: inherit; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">07. Payment Void (Billing)</span>
          <ErrorPayment />
        </section>

        {/* 08. EMPTY */}
        <section className='box-shadow p-4 rounded-lg relative group/erro bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/erro:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ErrorEmpty = () => (
  <div className="w-full max-w-3xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[10px] border-black p-24 text-center min-w-0 italic relative overflow-hidden shadow-[20px_20px_0_0_#000]">
      <div className="absolute top-0 left-0 w-full h-4 bg-gray-200"></div>
      <h2 className="text-9xl font-black uppercase mb-6 tracking-tighter italic text-gray-200 select-none">EMPTY.</h2>
      <div className="relative z-10">
        <p className="text-4xl font-black uppercase mb-12 italic">NO_DATA_PACKETS_FOUND.</p>
        <button className="bg-black text-white px-12 py-6 text-2xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-all shadow-[8px_8px_0_0_#000] italic">SCAN_OTHER_SECTOR</button>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="empty-sector-root">
  <div class="top-bar"></div>
  <h2 class="bg-text">EMPTY.</h2>
  <div class="main-content">
    <p class="title">NO_DATA_PACKETS_FOUND.</p>
    <div class="divider"></div>
    <button class="scan-btn">SCAN_OTHER_SECTOR</button>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.empty-sector-root { background: white; border: 10px solid black; padding: 96px; text-align: center; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 800px; margin: 40px auto; color: black; position: relative; box-shadow: 20px 20px 0 0 #000; overflow: hidden; }
.top-bar { position: absolute; top: 0; left: 0; width: 100%; height: 16px; background: #e5e7eb; }
.bg-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 160px; color: #f3f4f6; letter-spacing: -0.1em; z-index: 0; pointer-events: none; }
.main-content { position: relative; z-index: 10; }
.title { font-size: 40px; text-transform: uppercase; margin-bottom: 48px; line-height: 1; }
.divider { width: 96px; height: 16px; background: black; margin: 0 auto 48px; }
.scan-btn { background: black; color: white; padding: 24px 48px; font-size: 24px; font-weight: 900; text-transform: uppercase; border: 4px solid black; cursor: pointer; box-shadow: 8px 8px 0 0 #000; transition: all 0.2s; font-family: inherit; font-style: inherit; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">08. Empty Sector (No Data)</span>
          <ErrorEmpty />
        </section>

        {/* 09. MAINTENANCE */}
        <section className='box-shadow p-4 rounded-lg relative group/erro bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/erro:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ErrorMaintenance = () => (
  <div className="w-full max-w-5xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-[#facc15] border-[10px] border-black p-16 shadow-[40px_40px_0_0_#000] min-w-0 italic overflow-hidden relative">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-48 h-48 bg-black text-white border-[8px] border-white flex items-center justify-center shrink-0 rotate-6 shadow-[12px_12px_0_0_#000]">
          <span className="text-7xl font-black italic">!</span>
        </div>
        <div className="flex-1">
          <h2 className="text-7xl font-black uppercase leading-none tracking-tighter mb-8 italic">MAINTENANCE_MODE.</h2>
        </div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="maintenance-root">
  <div class="warning-box">!</div>
  <div class="main-body">
    <h2 class="title">MAINTENANCE_MODE.</h2>
    <div class="status-card">
      <p class="heading">UPGRADING_THE_MATRIX...</p>
      <p class="timer">ESTIMATED_SYNC_TIME: 02:00:00</p>
    </div>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.maintenance-root { background: #facc15; border: 10px solid black; padding: 64px; box-shadow: 40px 40px 0 0 #000; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 1000px; margin: 40px auto; display: flex; gap: 48px; align-items: center; position: relative; overflow: hidden; }
@media (max-width: 768px) { .maintenance-root { flex-direction: column; text-align: center; } }
.warning-box { width: 192px; height: 192px; background: black; color: white; border: 8px solid white; display: flex; align-items: center; justify-content: center; font-size: 72px; transform: rotate(6deg); box-shadow: 12px 12px 0 0 #000; flex-shrink: 0; }
.title { font-size: 72px; text-transform: uppercase; line-height: 0.9; letter-spacing: -0.05em; margin-bottom: 32px; }
.status-card { background: white; border: 4px solid black; padding: 24px; box-shadow: 8px 8px 0 0 #000; text-align: left; }
.heading { font-size: 24px; text-transform: uppercase; margin-bottom: 8px; }
.timer { font-size: 18px; opacity: 0.7; text-transform: uppercase; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">09. Matrix Upgrade (Maintenance)</span>
          <ErrorMaintenance />
        </section>

        {/* 10. CHAOS */}
        <section className='box-shadow p-4 rounded-lg relative group/erro bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/erro:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ErrorChaos = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-white">
    <div className="bg-black border-[12px] border-white p-16 shadow-[30px_30px_0_0_#ff00ff] min-w-0 italic relative overflow-hidden">
      <h2 className="text-9xl font-black uppercase mb-12 tracking-tighter leading-none italic break-words text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500 italic">GLITCH_01.</h2>
      <div className="grid md:grid-cols-2 gap-12 italic">
        <div className="border-4 border-white p-8 bg-white/5 backdrop-blur-md shadow-[12px_12px_0_0_#00ffff] italic">
          <p className="text-2xl font-black uppercase mb-4 italic">REALITY_LEAK.</p>
        </div>
        <button className="bg-white text-black py-8 text-3xl font-black uppercase border-4 border-white hover:bg-transparent hover:text-white transition-all shadow-[12px_12px_0_0_#ff00ff] italic">ESCAPE_NOW</button>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="chaos-glitch-root">
  <div class="scan-line"></div>
  <h2 class="title">GLITCH_01.</h2>
  <div class="content-grid">
    <div class="info-card">
      <p class="heading">REALITY_LEAK.</p>
      <p class="desc">THE UI HAS COLLAPSED INTO THE VOID. ABANDON SHIP IMMEDIATELY.</p>
    </div>
    <div class="action-box">
      <button class="escape-btn">ESCAPE_NOW</button>
    </div>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.chaos-glitch-root { background: black; border: 12px solid white; padding: 64px; box-shadow: 30px 30px 0 0 #ff00ff; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 900px; margin: 40px auto; color: white; position: relative; overflow: hidden; }
.scan-line { position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(to right, #ec4899, #22d3ee, #facc15); animation: scan 2s linear infinite; }
@keyframes scan { 0% { top: 0; } 100% { top: 100%; } }
.title { font-size: 120px; text-transform: uppercase; line-height: 0.9; letter-spacing: -0.05em; margin-bottom: 64px; background: linear-gradient(to right, #ec4899, #22d3ee); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.content-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
@media (max-width: 768px) { .content-grid { grid-template-columns: 1fr; } }
.info-card { border: 4px solid white; padding: 32px; background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); box-shadow: 12px 12px 0 0 #00ffff; }
.heading { font-size: 32px; text-transform: uppercase; margin-bottom: 16px; color: #00ffff; }
.desc { font-size: 16px; opacity: 0.6; line-height: 1.4; }
.escape-btn { width: 100%; background: white; color: black; border: 4px solid white; padding: 32px; font-size: 32px; font-weight: 900; text-transform: uppercase; box-shadow: 12px 12px 0 0 #ff00ff; cursor: pointer; transition: all 0.2s; font-family: inherit; font-style: inherit; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">10. Glitch Chaos (Critical Glitch)</span>
          <ErrorChaos />
        </section>

      </div>
    </div>
  );
};

export default ErrorPageGallery;