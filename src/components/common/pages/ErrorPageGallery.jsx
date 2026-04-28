import React from 'react';
import CopyButton from '../CopyButton';

// --- Error Variant Components ---

const ErrorOffline = () => (
  <div className="flex flex-col items-center justify-center h-[500px] bg-slate-50 rounded-3xl border border-slate-200 p-8 text-center font-sans">
    <div className="relative mb-8">
      <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center animate-pulse">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" /></svg>
      </div>
      <div className="absolute top-0 right-0 w-6 h-6 bg-red-500 border-4 border-white rounded-full"></div>
    </div>
    <h2 className="text-2xl font-bold text-slate-800 mb-2 lowercase italic tracking-tighter">No Internet Connection</h2>
    <p className="text-slate-500 mb-8 max-w-xs mx-auto italic lowercase font-medium">Please check your network settings and try again.</p>
    <button onClick={() => window.location.reload()} className="px-8 py-3 bg-slate-900 text-white rounded-xl font-black hover:bg-slate-800 transition-colors shadow-lg uppercase tracking-widest text-[10px]">Try Again</button>
  </div>
);

const ErrorAccess = () => (
  <div className="h-[500px] bg-red-50 rounded-3xl border border-red-100 flex items-center justify-center p-8 font-sans">
    <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center border-t-8 border-red-500">
      <div className="w-20 h-20 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
      </div>
      <h2 className="text-3xl font-black text-gray-900 mb-2 italic tracking-tight uppercase">Access Denied</h2>
      <p className="text-gray-500 mb-8 lowercase italic font-medium">You do not have permission to view this page. Please contact your administrator.</p>
      <div className="flex gap-3">
        <button className="flex-1 py-3 border-2 border-gray-300 rounded-lg font-black text-gray-700 uppercase tracking-widest text-[10px]">Go Back</button>
        <button className="flex-1 py-3 bg-red-600 text-white rounded-lg font-black uppercase tracking-widest text-[10px] hover:bg-red-700 transition-colors">Login</button>
      </div>
    </div>
  </div>
);

const ErrorPayment = () => (
  <div className="h-[500px] bg-white rounded-3xl border border-gray-100 flex flex-col items-center justify-center p-8 font-sans">
    <div className="relative w-full max-w-sm h-56 bg-gradient-to-r from-gray-800 to-black rounded-2xl shadow-2xl p-6 text-white mb-8 transform rotate-3">
      <div className="flex justify-between items-start mb-8">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
        <span className="font-mono text-xs opacity-70 italic tracking-widest uppercase">CREDIT</span>
      </div>
      <div className="font-mono text-xl tracking-widest mb-2 font-black italic underline decoration-red-500 decoration-2 underline-offset-4">•••• •••• •••• 4242</div>
      <div className="flex justify-between items-end">
        <div className="text-xs opacity-70">
          <div className="uppercase text-[10px] font-black italic mb-1">Card Holder</div>
          <div className="font-black italic uppercase">ALEX MORGAN</div>
        </div>
        <div className="bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded italic shadow-lg">FAILED</div>
      </div>
    </div>
    <h2 className="text-2xl font-black text-gray-900 mb-2 uppercase italic tracking-tighter">Payment Failed</h2>
    <p className="text-gray-500 text-center max-w-sm mb-8 lowercase italic font-medium">We couldn't process your payment. Your subscription has been paused.</p>
    <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-black uppercase tracking-widest text-[10px] shadow-lg hover:shadow-xl transition-shadow">Update Payment Method</button>
  </div>
);

const ErrorRateLimit = () => (
  <div className="h-[500px] bg-indigo-900 rounded-3xl overflow-hidden relative flex items-center justify-center text-white font-sans text-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.4),transparent)]"></div>
    <div className="relative z-10 p-8">
      <div className="text-6xl mb-6 animate-bounce">🐌</div>
      <h2 className="text-4xl font-black mb-4 tracking-tight uppercase italic underline decoration-yellow-400 decoration-4 underline-offset-8">Whoa, slow down!</h2>
      <p className="text-indigo-200 mb-8 max-w-md mx-auto text-lg lowercase italic font-medium">You've made too many requests recently. Please wait a moment for the protocol to sync.</p>
      <div className="inline-block px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl font-mono shadow-2xl text-[10px] font-black uppercase tracking-[0.3em]">
        Retry in <span className="text-yellow-400">00:45</span>
      </div>
    </div>
  </div>
);

const ErrorGeneric = () => (
  <div className="h-[500px] bg-[#fffbf0] rounded-3xl border border-[#f5e6c8] flex flex-col items-center justify-center p-8 text-center font-sans">
    <div className="relative w-32 h-32 mb-8">
      <div className="text-8xl transform -rotate-12">🥤</div>
      <div className="absolute top-0 right-0 text-4xl animate-bounce">💦</div>
    </div>
    <h2 className="text-5xl font-black text-gray-900 mb-4 transform -rotate-2 italic uppercase tracking-tighter">Whoops!</h2>
    <p className="text-gray-600 mb-10 max-w-sm text-lg italic lowercase leading-relaxed font-medium">Something went wrong. It's not you, it's us. We spilled the code clusters.</p>
    <button onClick={() => window.location.reload()} className="px-10 py-5 bg-black text-white font-black rounded-2xl hover:scale-105 transition-transform italic uppercase text-[10px] tracking-widest shadow-2xl">Clean It Up (Refresh)</button>
  </div>
);

const ErrorGlass = () => (
  <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-tr from-rose-400 to-orange-300 flex items-center justify-center p-4 font-sans text-left">
    <div className="relative bg-white/20 backdrop-blur-2xl border border-white/30 p-12 rounded-3xl shadow-2xl text-center max-w-sm w-full">
      <div className="text-white text-7xl font-black mb-2 italic tracking-tighter uppercase leading-none">Error</div>
      <div className="text-white/60 font-mono mb-8 tracking-[0.3em] text-[10px] font-black uppercase italic">CODE: UNKNOWN_PROTOCOL</div>
      <p className="text-white mb-8 leading-relaxed font-medium italic lowercase">An unexpected logic collision has occurred. Our core team has been synchronized.</p>
      <button className="w-full py-4 bg-white text-rose-500 font-black rounded-2xl shadow-xl hover:scale-105 transition-all uppercase tracking-widest text-[10px]">Return Home</button>
    </div>
  </div>
);

const ErrorCyber = () => (
  <div className="h-[500px] bg-black rounded-3xl relative overflow-hidden border-2 border-red-600 p-8 flex flex-col justify-center items-center font-mono italic font-bold">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.05)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(220,38,38,0.05)_1.5px,transparent_1.5px)] bg-[size:30px_30px]"></div>
    <div className="relative z-10 text-center">
      <div className="border-2 border-red-500 text-red-500 px-6 py-1.5 text-xs inline-block mb-8 animate-pulse uppercase tracking-[0.4em] font-black">SYSTEM_CRITICAL_FAIL</div>
      <h2 className="text-7xl font-black text-white mb-2 uppercase tracking-tighter" style={{textShadow: "6px 6px 0px #dc2626"}}>ERROR</h2>
      <div className="bg-red-600 text-black font-black px-4 py-1 inline-block transform -rotate-1 mb-10 text-lg uppercase tracking-tight">Logic_Cluster_Aborted</div>
      <div className="text-red-400 text-[10px] mb-10 border-l-4 border-red-800 pl-6 text-left max-w-[280px] mx-auto uppercase leading-loose font-black tracking-widest">
        &gt; TRACE: NULL_PTR_REF<br/>
        &gt; MODULE: CORE_RENDER_MESH<br/>
        &gt; STATUS: FATAL_EXCEPTION
      </div>
      <button className="px-10 py-4 bg-transparent border-2 border-red-600 text-red-500 font-black hover:bg-red-600 hover:text-black transition-all uppercase tracking-widest text-xs">REBOOT SYSTEM</button>
    </div>
  </div>
);

const ErrorBrutalist = () => (
  <div className="h-[500px] bg-yellow-400 rounded-3xl border-[8px] border-black flex flex-col items-center justify-center p-8 relative overflow-hidden font-sans italic font-black uppercase text-left">
    <div className="bg-white border-[8px] border-black p-12 shadow-[16px_16px_0_0_#000] relative z-10 max-w-md text-center transform -rotate-1 hover:rotate-0 transition-transform duration-500">
      <h1 className="text-9xl font-black mb-4 tracking-tighter leading-none underline decoration-black decoration-[12px] underline-offset-[-10px]">400</h1>
      <div className="bg-black text-white font-black text-2xl p-4 mb-8 tracking-tight uppercase shadow-[8px_8px_0_0_#e11d48]">Bad_Request_Node</div>
      <p className="font-black text-xl mb-10 italic leading-tight normal-case lowercase">Your browser sent a request that this server protocol could not understand.</p>
      <button className="w-full py-6 bg-pink-500 border-[6px] border-black font-black text-xl uppercase hover:bg-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[10px_10px_0_0_#000]">Fix_Protocol</button>
    </div>
  </div>
);

const ErrorTerminal = () => (
  <div className="h-[500px] bg-[#0d1117] rounded-3xl overflow-hidden flex flex-col font-mono text-sm shadow-2xl border-2 border-slate-800 text-left">
    <div className="bg-[#161b22] px-6 py-3 flex items-center justify-between border-b-2 border-slate-800">
      <div className="flex gap-2.5">
        <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
      </div>
      <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] italic">console — logic_crash.log</span>
    </div>
    <div className="p-8 text-slate-400 flex-1 overflow-y-auto italic font-bold leading-relaxed">
      <p className="mb-4">user@nexus:~$ <span className="text-emerald-400">node init_sync.js</span></p>
      <p className="text-slate-600 mb-6">Checking node health... [DONE]</p>
      <p className="text-rose-500 font-black uppercase mb-1 underline decoration-2 underline-offset-4 tracking-widest">FATAL_ERROR: NullPointerException_at_Nexus_Core</p>
      <p className="text-rose-400/80 mb-6 ml-6 border-l-2 border-rose-900/50 pl-6 text-xs tracking-tight">
        at com.nexus.logic.SyncEngine.init(SyncEngine.java:142)<br/>
        at com.nexus.api.Gateway.process(Gateway.java:42)<br/>
        at com.nexus.Main.boot(Main.java:08)
      </p>
      <p className="mb-10 text-xs">user@nexus:~$ <span className="animate-pulse bg-emerald-500/20 text-emerald-400 px-2">_waiting_for_input</span></p>
      <div className="mt-auto flex gap-4">
        <button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2.5 rounded-xl font-black uppercase tracking-widest text-[10px] transition-colors border border-slate-700">Send_Report</button>
        <button className="bg-emerald-600 text-black px-6 py-2.5 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-emerald-400 transition-colors">Reboot_Cluster</button>
      </div>
    </div>
  </div>
);

const ErrorNeumorphic = () => (
  <div className="h-[500px] bg-[#e0e5ec] rounded-[3rem] flex flex-col items-center justify-center p-8 font-sans italic font-bold">
    <div className="w-40 h-40 bg-[#e0e5ec] rounded-full shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex items-center justify-center mb-10 text-6xl text-slate-300 border-4 border-white/50">⚠️</div>
    <h2 className="text-3xl font-black text-slate-600 mb-4 uppercase tracking-tighter italic">Logic_Anomaly</h2>
    <p className="text-slate-500 mb-12 text-center max-w-xs lowercase italic font-medium leading-relaxed">We encountered an unexpected logic collision while processing your request clusters.</p>
    <div className="flex gap-8">
      <button className="px-10 py-4 rounded-2xl bg-[#e0e5ec] text-slate-600 font-black uppercase tracking-widest text-[10px] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all">Go_Home</button>
      <button className="px-10 py-4 rounded-2xl bg-[#e0e5ec] text-blue-500 font-black uppercase tracking-widest text-[10px] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all">Support</button>
    </div>
  </div>
);

// --- Main Gallery Wrapper ---

const ErrorPageGallery = () => {
  const sections = [
    {
      id: 'offline',
      title: '01. Offline State',
      component: <ErrorOffline />,
      jsx: `export const ErrorOffline = () => (
  <div className="flex flex-col items-center justify-center h-[500px] bg-slate-50 rounded-3xl border border-slate-200 p-8 text-center font-sans">
    <div className="relative mb-8">
      <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center animate-pulse">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" /></svg>
      </div>
      <div className="absolute top-0 right-0 w-6 h-6 bg-red-500 border-4 border-white rounded-full"></div>
    </div>
    <h2 className="text-2xl font-bold text-slate-800 mb-2 lowercase italic tracking-tighter">No Internet Connection</h2>
    <p className="text-slate-500 mb-8 max-w-xs mx-auto italic lowercase font-medium">Please check your network settings and try again.</p>
    <button onClick={() => window.location.reload()} className="px-8 py-3 bg-slate-900 text-white rounded-xl font-black hover:bg-slate-800 transition-colors shadow-lg uppercase tracking-widest text-[10px]">Try Again</button>
  </div>
);`,
      html: `<div class="error-offline-root">
  <div class="icon-container">
    <div class="icon-circle pulse">
      <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" /></svg>
    </div>
    <div class="status-dot"></div>
  </div>
  <h2 class="title">No Internet Connection</h2>
  <p class="desc">Please check your network settings and try again.</p>
  <button class="retry-btn">Try Again</button>
</div>`,
      css: `.error-offline-root { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 500px; background: #f8fafc; border-radius: 24px; border: 1px solid #e2e8f0; padding: 32px; text-align: center; font-family: sans-serif; }
.icon-circle { width: 96px; height: 96px; background: #e2e8f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #475569; }
.pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
.status-dot { position: absolute; top: 0; right: 0; width: 24px; height: 24px; background: #ef4444; border: 4px solid white; border-radius: 50%; }
.title { font-size: 24px; font-weight: 700; color: #1e293b; margin: 0 0 8px 0; font-style: italic; text-transform: lowercase; }
.desc { font-size: 16px; color: #64748b; margin: 0 0 32px 0; max-width: 280px; font-style: italic; }
.retry-btn { padding: 12px 32px; background: #0f172a; color: white; border-radius: 12px; font-weight: 900; border: none; cursor: pointer; text-transform: uppercase; letter-spacing: 0.1em; font-size: 10px; }`
    },
    {
      id: 'access',
      title: '02. Access Denied (403)',
      component: <ErrorAccess />,
      jsx: `export const ErrorAccess = () => (
  <div className="h-[500px] bg-red-50 rounded-3xl border border-red-100 flex items-center justify-center p-8 font-sans">
    <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center border-t-8 border-red-500">
      <div className="w-20 h-20 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
      </div>
      <h2 className="text-3xl font-black text-gray-900 mb-2 italic tracking-tight uppercase">Access Denied</h2>
      <p className="text-gray-500 mb-8 lowercase italic font-medium">You do not have permission to view this page. Please contact your administrator.</p>
      <div className="flex gap-3">
        <button className="flex-1 py-3 border-2 border-gray-300 rounded-lg font-black text-gray-700 uppercase tracking-widest text-[10px]">Go Back</button>
        <button className="flex-1 py-3 bg-red-600 text-white rounded-lg font-black uppercase tracking-widest text-[10px] hover:bg-red-700 transition-colors">Login</button>
      </div>
    </div>
  </div>
);`,
      html: `<div class="error-access-root">
  <div class="error-card">
    <div class="icon-circle">
      <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    </div>
    <h2 class="title">Access Denied</h2>
    <p class="desc">You do not have permission to view this page. Please contact your administrator.</p>
    <div class="actions">
      <button class="btn-outline">Go Back</button>
      <button class="btn-solid">Login</button>
    </div>
  </div>
</div>`,
      css: `.error-access-root { height: 500px; background: #fef2f2; border-radius: 24px; display: flex; align-items: center; justify-content: center; padding: 32px; font-family: sans-serif; }
.error-card { background: white; padding: 40px; border-radius: 16px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); width: 100%; max-width: 448px; border-top: 8px solid #ef4444; box-sizing: border-box; text-align: center; }
.icon-circle { width: 80px; height: 80px; background: #fee2e2; color: #ef4444; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px auto; }
.title { font-size: 30px; font-weight: 900; color: #111827; margin: 0 0 8px 0; font-style: italic; text-transform: uppercase; }
.desc { font-size: 16px; color: #6b7280; margin: 0 0 32px 0; font-style: italic; text-transform: lowercase; }
.actions { display: flex; gap: 12px; }
.btn-outline, .btn-solid { flex: 1; padding: 12px; border-radius: 8px; font-weight: 900; cursor: pointer; font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; }`
    },
    {
      id: 'payment',
      title: '03. Payment Failed',
      component: <ErrorPayment />,
      jsx: `export const ErrorPayment = () => (
  <div className="h-[500px] bg-white rounded-3xl border border-gray-100 flex flex-col items-center justify-center p-8 font-sans">
    <div className="relative w-full max-w-sm h-56 bg-gradient-to-r from-gray-800 to-black rounded-2xl shadow-2xl p-6 text-white mb-8 transform rotate-3">
      <div className="flex justify-between items-start mb-8">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
        <span className="font-mono text-xs opacity-70 italic tracking-widest uppercase">CREDIT</span>
      </div>
      <div className="font-mono text-xl tracking-widest mb-2 font-black italic underline decoration-red-500 decoration-2 underline-offset-4">•••• •••• •••• 4242</div>
      <div className="flex justify-between items-end">
        <div className="text-xs opacity-70">
          <div className="uppercase text-[10px] font-black italic mb-1">Card Holder</div>
          <div className="font-black italic uppercase">ALEX MORGAN</div>
        </div>
        <div className="bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded italic shadow-lg">FAILED</div>
      </div>
    </div>
    <h2 className="text-2xl font-black text-gray-900 mb-2 uppercase italic tracking-tighter">Payment Failed</h2>
    <p className="text-gray-500 text-center max-w-sm mb-8 lowercase italic font-medium">We couldn't process your payment. Your subscription has been paused.</p>
    <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-black uppercase tracking-widest text-[10px] shadow-lg hover:shadow-xl transition-shadow">Update Payment Method</button>
  </div>
);`,
      html: `<div class="error-payment-root">
  <div class="card-visual">
    <div class="card-header">
      <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
      <span class="card-type">CREDIT</span>
    </div>
    <div class="card-number">•••• •••• •••• 4242</div>
    <div class="card-footer">
      <div class="card-name">
        <span class="label">Card Holder</span>
        <span class="val">ALEX MORGAN</span>
      </div>
      <div class="failed-badge">FAILED</div>
    </div>
  </div>
  <h2 class="title">Payment Failed</h2>
  <p class="desc">We couldn't process your payment. Your subscription has been paused.</p>
  <button class="action-btn">Update Payment Method</button>
</div>`,
      css: `.error-payment-root { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 500px; background: white; border-radius: 24px; border: 1px solid #f3f4f6; padding: 32px; font-family: sans-serif; text-align: center; }
.card-visual { position: relative; width: 100%; max-width: 320px; height: 180px; background: linear-gradient(135deg, #1f2937, #000); border-radius: 16px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); padding: 24px; color: white; transform: rotate(3deg); margin-bottom: 32px; box-sizing: border-box; text-align: left; }
.card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 32px; }
.card-type { font-family: monospace; font-size: 10px; opacity: 0.7; letter-spacing: 0.1em; font-style: italic; }
.card-number { font-family: monospace; font-size: 18px; letter-spacing: 0.2em; margin-bottom: 24px; font-weight: 900; font-style: italic; text-decoration: underline; text-decoration-color: #ef4444; }
.label { display: block; font-size: 8px; opacity: 0.7; text-transform: uppercase; font-weight: 900; margin-bottom: 2px; }
.val { font-size: 10px; font-weight: 900; text-transform: uppercase; font-style: italic; }
.failed-badge { background: #ef4444; padding: 4px 8px; border-radius: 4px; font-size: 10px; font-weight: 900; font-style: italic; }
.title { font-size: 24px; font-weight: 900; color: #111827; margin: 0 0 8px 0; font-style: italic; text-transform: uppercase; }
.desc { font-size: 16px; color: #6b7280; margin: 0 0 32px 0; max-width: 320px; font-style: italic; }
.action-btn { padding: 16px 32px; background: #2563eb; color: white; border-radius: 999px; border: none; font-weight: 900; cursor: pointer; text-transform: uppercase; letter-spacing: 0.1em; font-size: 10px; }`
    },
    {
      id: 'ratelimit',
      title: '04. Rate Limited (429)',
      component: <ErrorRateLimit />,
      jsx: `export const ErrorRateLimit = () => (
  <div className="h-[500px] bg-indigo-900 rounded-3xl overflow-hidden relative flex items-center justify-center text-white font-sans text-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.4),transparent)]"></div>
    <div className="relative z-10 p-8">
      <div className="text-6xl mb-6 animate-bounce">🐌</div>
      <h2 className="text-4xl font-black mb-4 tracking-tight uppercase italic underline decoration-yellow-400 decoration-4 underline-offset-8">Whoa, slow down!</h2>
      <p className="text-indigo-200 mb-8 max-w-md mx-auto text-lg lowercase italic font-medium">You've made too many requests recently. Please wait a moment for the protocol to sync.</p>
      <div className="inline-block px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl font-mono shadow-2xl text-[10px] font-black uppercase tracking-[0.3em]">
        Retry in <span className="text-yellow-400">00:45</span>
      </div>
    </div>
  </div>
);`,
      html: `<div class="error-rate-root">
  <div class="content">
    <div class="emoji">🐌</div>
    <h2 class="title">Whoa, slow down!</h2>
    <p class="desc">You've made too many requests recently. Please wait a moment for the protocol to sync.</p>
    <div class="timer">Retry in <span class="time">00:45</span></div>
  </div>
</div>`,
      css: `.error-rate-root { height: 500px; background: #312e81; border-radius: 24px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; font-family: sans-serif; text-align: center; color: white; }
.content { position: relative; z-index: 10; padding: 32px; }
.emoji { font-size: 64px; margin-bottom: 24px; animation: bounce 2s infinite; }
@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
.title { font-size: 36px; font-weight: 900; margin-bottom: 16px; text-transform: uppercase; font-style: italic; letter-spacing: -0.02em; text-decoration: underline; text-decoration-color: #facc15; }
.desc { font-size: 18px; color: #c7d2fe; margin-bottom: 32px; max-width: 400px; font-style: italic; text-transform: lowercase; }
.timer { display: inline-block; padding: 16px 40px; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2); border-radius: 16px; font-family: monospace; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; }
.time { color: #facc15; }`
    },
    {
      id: 'generic',
      title: '05. Generic Illustration',
      component: <ErrorGeneric />,
      jsx: `export const ErrorGeneric = () => (
  <div className="h-[500px] bg-[#fffbf0] rounded-3xl border border-[#f5e6c8] flex flex-col items-center justify-center p-8 text-center font-sans">
    <div className="relative w-32 h-32 mb-8">
      <div className="text-8xl transform -rotate-12">🥤</div>
      <div className="absolute top-0 right-0 text-4xl animate-bounce">💦</div>
    </div>
    <h2 className="text-5xl font-black text-gray-900 mb-4 transform -rotate-2 italic uppercase tracking-tighter">Whoops!</h2>
    <p className="text-gray-600 mb-10 max-w-sm text-lg italic lowercase leading-relaxed font-medium">Something went wrong. It's not you, it's us. We spilled the code clusters.</p>
    <button onClick={() => window.location.reload()} className="px-10 py-5 bg-black text-white font-black rounded-2xl hover:scale-105 transition-transform italic uppercase text-[10px] tracking-widest shadow-2xl">Clean It Up (Refresh)</button>
  </div>
);`,
      html: `<div class="error-generic-root">
  <div class="icon-wrap">
    <div class="main-icon">🥤</div>
    <div class="splash-icon">💦</div>
  </div>
  <h2 class="title">Whoops!</h2>
  <p class="desc">Something went wrong. It's not you, it's us. We spilled the code clusters.</p>
  <button class="action-btn">Clean It Up (Refresh)</button>
</div>`,
      css: `.error-generic-root { height: 500px; background: #fffbf0; border-radius: 24px; border: 1px solid #f5e6c8; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 32px; font-family: sans-serif; text-align: center; }
.icon-wrap { position: relative; margin-bottom: 32px; }
.main-icon { font-size: 80px; transform: rotate(-12deg); }
.splash-icon { position: absolute; top: 0; right: 0; font-size: 40px; animation: bounce 1s infinite; }
.title { font-size: 48px; font-weight: 900; color: #111827; margin-bottom: 16px; transform: rotate(-2deg); font-style: italic; text-transform: uppercase; }
.desc { font-size: 18px; color: #4b5563; margin-bottom: 40px; max-width: 384px; font-style: italic; text-transform: lowercase; }
.action-btn { padding: 20px 40px; background: black; color: white; border: none; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 10px; letter-spacing: 0.1em; cursor: pointer; transition: transform 0.2s; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2); }`
    },
    {
      id: 'glass',
      title: '06. Glassmorphism State',
      component: <ErrorGlass />,
      jsx: `export const ErrorGlass = () => (
  <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-tr from-rose-400 to-orange-300 flex items-center justify-center p-4 font-sans text-left">
    <div className="relative bg-white/20 backdrop-blur-2xl border border-white/30 p-12 rounded-3xl shadow-2xl text-center max-w-sm w-full">
      <div className="text-white text-7xl font-black mb-2 italic tracking-tighter uppercase leading-none">Error</div>
      <div className="text-white/60 font-mono mb-8 tracking-[0.3em] text-[10px] font-black uppercase italic">CODE: UNKNOWN_PROTOCOL</div>
      <p className="text-white mb-8 leading-relaxed font-medium italic lowercase">An unexpected logic collision has occurred. Our core team has been synchronized.</p>
      <button className="w-full py-4 bg-white text-rose-500 font-black rounded-2xl shadow-xl hover:scale-105 transition-all uppercase tracking-widest text-[10px]">Return Home</button>
    </div>
  </div>
);`,
      html: `<div class="error-glass-root">
  <div class="glass-card">
    <h1 class="title">Error</h1>
    <div class="code">CODE: UNKNOWN_PROTOCOL</div>
    <p class="desc">An unexpected logic collision has occurred. Our core team has been synchronized.</p>
    <button class="home-btn">Return Home</button>
  </div>
</div>`,
      css: `.error-glass-root { height: 500px; background: linear-gradient(45deg, #fb7185, #fdba74); border-radius: 24px; display: flex; align-items: center; justify-content: center; padding: 16px; font-family: sans-serif; }
.glass-card { background: rgba(255,255,255,0.2); backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.3); border-radius: 24px; padding: 48px; width: 100%; max-width: 384px; text-align: center; }
.title { color: white; font-size: 72px; font-weight: 900; font-style: italic; margin-bottom: 8px; letter-spacing: -0.05em; text-transform: uppercase; line-height: 1; }
.code { color: rgba(255,255,255,0.6); font-family: monospace; font-size: 10px; font-weight: 900; letter-spacing: 0.3em; margin-bottom: 32px; }
.desc { color: white; font-size: 16px; margin-bottom: 32px; font-style: italic; text-transform: lowercase; }
.home-btn { width: 100%; padding: 16px; background: white; color: #f43f5e; border: none; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 10px; letter-spacing: 0.1em; cursor: pointer; }`
    },
    {
      id: 'cyber',
      title: '07. Cyberpunk Critical',
      component: <ErrorCyber />,
      jsx: `export const ErrorCyber = () => (
  <div className="h-[500px] bg-black rounded-3xl relative overflow-hidden border-2 border-red-600 p-8 flex flex-col justify-center items-center font-mono italic font-bold">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.05)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(220,38,38,0.05)_1.5px,transparent_1.5px)] bg-[size:30px_30px]"></div>
    <div className="relative z-10 text-center">
      <div className="border-2 border-red-500 text-red-500 px-6 py-1.5 text-xs inline-block mb-8 animate-pulse uppercase tracking-[0.4em] font-black">SYSTEM_CRITICAL_FAIL</div>
      <h2 className="text-7xl font-black text-white mb-2 uppercase tracking-tighter" style={{textShadow: "6px 6px 0px #dc2626"}}>ERROR</h2>
      <div className="bg-red-600 text-black font-black px-4 py-1 inline-block transform -rotate-1 mb-10 text-lg uppercase tracking-tight">Logic_Cluster_Aborted</div>
      <div className="text-red-400 text-[10px] mb-10 border-l-4 border-red-800 pl-6 text-left max-w-[280px] mx-auto uppercase leading-loose font-black tracking-widest">
        &gt; TRACE: NULL_PTR_REF<br/>
        &gt; MODULE: CORE_RENDER_MESH<br/>
        &gt; STATUS: FATAL_EXCEPTION
      </div>
      <button className="px-10 py-4 bg-transparent border-2 border-red-600 text-red-500 font-black hover:bg-red-600 hover:text-black transition-all uppercase tracking-widest text-xs">REBOOT SYSTEM</button>
    </div>
  </div>
);`,
      html: `<div class="error-cyber-root">
  <div class="content">
    <div class="badge">SYSTEM_CRITICAL_FAIL</div>
    <h2 class="title">ERROR</h2>
    <div class="alert-strip">Logic_Cluster_Aborted</div>
    <div class="trace-log">
      &gt; TRACE: NULL_PTR_REF<br>
      &gt; MODULE: CORE_RENDER_MESH<br>
      &gt; STATUS: FATAL_EXCEPTION
    </div>
    <button class="reboot-btn">REBOOT SYSTEM</button>
  </div>
</div>`,
      css: `.error-cyber-root { height: 500px; background: black; border-radius: 24px; border: 2px solid #dc2626; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; font-family: monospace; color: white; text-align: center; }
.badge { border: 2px solid #ef4444; color: #ef4444; padding: 6px 24px; font-size: 10px; font-weight: 900; letter-spacing: 0.4em; display: inline-block; margin-bottom: 32px; animation: pulse 1s infinite; }
.title { font-size: 72px; font-weight: 900; letter-spacing: -0.05em; text-shadow: 6px 6px 0 #dc2626; margin: 0 0 8px 0; font-style: italic; text-transform: uppercase; }
.alert-strip { background: #dc2626; color: black; font-weight: 900; padding: 4px 16px; font-size: 18px; text-transform: uppercase; transform: rotate(-1deg); margin-bottom: 40px; display: inline-block; }
.trace-log { color: #f87171; font-size: 10px; text-align: left; max-width: 280px; margin: 0 auto 40px auto; border-left: 4px solid #991b1b; padding-left: 24px; line-height: 2; letter-spacing: 0.1em; }
.reboot-btn { padding: 16px 40px; background: transparent; border: 2px solid #dc2626; color: #dc2626; font-weight: 900; letter-spacing: 0.2em; font-size: 12px; cursor: pointer; }`
    },
    {
      id: 'brutalist',
      title: '08. Bold Brutalist',
      component: <ErrorBrutalist />,
      jsx: `export const ErrorBrutalist = () => (
  <div className="h-[500px] bg-yellow-400 rounded-3xl border-[8px] border-black flex flex-col items-center justify-center p-8 relative overflow-hidden font-sans italic font-black uppercase text-left">
    <div className="bg-white border-[8px] border-black p-12 shadow-[16px_16px_0_0_#000] relative z-10 max-w-md text-center transform -rotate-1 hover:rotate-0 transition-transform duration-500">
      <h1 className="text-9xl font-black mb-4 tracking-tighter leading-none underline decoration-black decoration-[12px] underline-offset-[-10px]">400</h1>
      <div className="bg-black text-white font-black text-2xl p-4 mb-8 tracking-tight uppercase shadow-[8px_8px_0_0_#e11d48]">Bad_Request_Node</div>
      <p className="font-black text-xl mb-10 italic leading-tight normal-case lowercase">Your browser sent a request that this server protocol could not understand.</p>
      <button className="w-full py-6 bg-pink-500 border-[6px] border-black font-black text-xl uppercase hover:bg-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[10px_10px_0_0_#000]">Fix_Protocol</button>
    </div>
  </div>
);`,
      html: `<div class="error-brutalist-root">
  <div class="card">
    <h1 class="code">400</h1>
    <div class="alert-box">Bad_Request_Node</div>
    <p class="desc">Your browser sent a request that this server protocol could not understand.</p>
    <button class="action-btn">Fix_Protocol</button>
  </div>
</div>`,
      css: `.error-brutalist-root { height: 500px; background: #facc15; border-radius: 24px; border: 8px solid black; display: flex; align-items: center; justify-content: center; padding: 32px; font-family: sans-serif; font-style: italic; box-sizing: border-box; }
.card { background: white; border: 8px solid black; padding: 48px; box-shadow: 16px 16px 0 0 black; text-align: center; max-width: 448px; transform: rotate(-1deg); }
.code { font-size: 120px; font-weight: 900; margin: 0 0 16px 0; line-height: 1; letter-spacing: -0.05em; text-decoration: underline; text-decoration-thickness: 12px; text-underline-offset: -10px; }
.alert-box { background: black; color: white; padding: 16px; font-size: 24px; font-weight: 900; margin-bottom: 32px; box-shadow: 8px 8px 0 0 #e11d48; text-transform: uppercase; }
.desc { font-weight: 900; font-size: 20px; color: #000; margin-bottom: 40px; line-height: 1.2; text-transform: lowercase; }
.action-btn { width: 100%; padding: 24px; background: #ec4899; border: 6px solid black; color: black; font-weight: 900; text-transform: uppercase; font-size: 20px; cursor: pointer; box-shadow: 10px 10px 0 0 black; }`
    },
    {
      id: 'terminal',
      title: '09. Terminal Log',
      component: <ErrorTerminal />,
      jsx: `export const ErrorTerminal = () => (
  <div className="h-[500px] bg-[#0d1117] rounded-3xl overflow-hidden flex flex-col font-mono text-sm shadow-2xl border-2 border-slate-800 text-left">
    <div className="bg-[#161b22] px-6 py-3 flex items-center justify-between border-b-2 border-slate-800">
      <div className="flex gap-2.5">
        <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
      </div>
      <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] italic">console — logic_crash.log</span>
    </div>
    <div className="p-8 text-slate-400 flex-1 overflow-y-auto italic font-bold leading-relaxed">
      <p className="mb-4">user@nexus:~$ <span className="text-emerald-400">node init_sync.js</span></p>
      <p className="text-slate-600 mb-6">Checking node health... [DONE]</p>
      <p className="text-rose-500 font-black uppercase mb-1 underline decoration-2 underline-offset-4 tracking-widest">FATAL_ERROR: NullPointerException_at_Nexus_Core</p>
      <p className="text-rose-400/80 mb-6 ml-6 border-l-2 border-rose-900/50 pl-6 text-xs tracking-tight">
        at com.nexus.logic.SyncEngine.init(SyncEngine.java:142)<br/>
        at com.nexus.api.Gateway.process(Gateway.java:42)<br/>
        at com.nexus.Main.boot(Main.java:08)
      </p>
      <p className="mb-10 text-xs">user@nexus:~$ <span className="animate-pulse bg-emerald-500/20 text-emerald-400 px-2">_waiting_for_input</span></p>
      <div className="mt-auto flex gap-4">
        <button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2.5 rounded-xl font-black uppercase tracking-widest text-[10px] transition-colors border border-slate-700">Send_Report</button>
        <button className="bg-emerald-600 text-black px-6 py-2.5 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-emerald-400 transition-colors">Reboot_Cluster</button>
      </div>
    </div>
  </div>
);`,
      html: `<div class="error-terminal-root">
  <div class="top-bar">
    <div class="dots"><div class="dot-red"></div><div class="dot-yellow"></div><div class="dot-green"></div></div>
    <div class="label">console — logic_crash.log</div>
  </div>
  <div class="console-body">
    <p class="command">user@nexus:~$ <span class="cmd">node init_sync.js</span></p>
    <p class="fatal">FATAL_ERROR: NullPointerException_at_Nexus_Core</p>
    <div class="actions">
      <button class="btn-mute">Send_Report</button>
      <button class="btn-bright">Reboot_Cluster</button>
    </div>
  </div>
</div>`,
      css: `.error-terminal-root { height: 500px; background: #0d1117; border-radius: 24px; border: 2px solid #1e293b; display: flex; flex-direction: column; font-family: monospace; font-style: italic; overflow: hidden; }
.top-bar { background: #161b22; padding: 12px 24px; display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #1e293b; }
.dots { display: flex; gap: 10px; }
.dot-red { width: 14px; height: 14px; background: #ff5f56; border-radius: 50%; }
.dot-yellow { width: 14px; height: 14px; background: #ffbd2e; border-radius: 50%; }
.dot-green { width: 14px; height: 14px; background: #27c93f; border-radius: 50%; }
.label { font-size: 10px; color: #475569; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; }
.console-body { padding: 32px; color: #64748b; font-weight: 700; flex: 1; display: flex; flex-direction: column; text-align: left; }
.cmd { color: #34d399; }
.fatal { color: #f43f5e; text-transform: uppercase; text-decoration: underline; margin-top: 16px; margin-bottom: 8px; letter-spacing: 0.1em; }
.actions { margin-top: auto; display: flex; gap: 16px; }
.btn-mute, .btn-bright { padding: 10px 24px; border-radius: 12px; font-size: 10px; font-weight: 900; text-transform: uppercase; cursor: pointer; }`
    },
    {
      id: 'neumorphic',
      title: '10. Soft Neumorphic',
      component: <ErrorNeumorphic />,
      jsx: `export const ErrorNeumorphic = () => (
  <div className="h-[500px] bg-[#e0e5ec] rounded-[3rem] flex flex-col items-center justify-center p-8 font-sans italic font-bold">
    <div className="w-40 h-40 bg-[#e0e5ec] rounded-full shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex items-center justify-center mb-10 text-6xl text-slate-300 border-4 border-white/50">⚠️</div>
    <h2 className="text-3xl font-black text-slate-600 mb-4 uppercase tracking-tighter italic">Logic_Anomaly</h2>
    <p className="text-slate-500 mb-12 text-center max-w-xs lowercase italic font-medium leading-relaxed">We encountered an unexpected logic collision while processing your request clusters.</p>
    <div className="flex gap-8">
      <button className="px-10 py-4 rounded-2xl bg-[#e0e5ec] text-slate-600 font-black uppercase tracking-widest text-[10px] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all">Go_Home</button>
      <button className="px-10 py-4 rounded-2xl bg-[#e0e5ec] text-blue-500 font-black uppercase tracking-widest text-[10px] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all">Support</button>
    </div>
  </div>
);`,
      html: `<div class="error-soft-root">
  <div class="icon-orb">⚠️</div>
  <h2 class="title">Logic_Anomaly</h2>
  <p class="desc">We encountered an unexpected logic collision while processing your request clusters.</p>
  <div class="actions">
    <button class="btn-soft">Go_Home</button>
    <button class="btn-blue">Support</button>
  </div>
</div>`,
      css: `.error-soft-root { height: 500px; background: #e0e5ec; border-radius: 48px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 32px; font-family: sans-serif; font-style: italic; text-align: center; }
.icon-orb { width: 160px; height: 160px; background: #e0e5ec; border-radius: 50%; box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; border: 4px solid rgba(255,255,255,0.5); display: flex; align-items: center; justify-content: center; font-size: 64px; margin-bottom: 40px; }
.title { font-size: 32px; font-weight: 900; color: #4b5563; text-transform: uppercase; letter-spacing: -0.05em; margin-bottom: 16px; }
.desc { font-size: 18px; color: #6b7280; max-width: 320px; margin-bottom: 48px; line-height: 1.6; text-transform: lowercase; }
.actions { display: flex; gap: 32px; }
.btn-soft, .btn-blue { padding: 16px 40px; border-radius: 16px; background: #e0e5ec; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; border: none; cursor: pointer; box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff; transition: all 0.3s; }`
    }
  ];

  return (
    <div className="box-shadow container overflow-y-auto bg-slate-100 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-black text-slate-800 mb-4 uppercase italic tracking-tighter">Error Page Designs</h1>
        <p className="text-slate-500 uppercase tracking-widest font-black italic lowercase text-xs">Handling failure states with high-fidelity signal delivery.</p>
      </div>
      
      <div className="space-y-32 max-w-5xl mx-auto">
        {sections.map((section) => (
          <section key={section.id} className='box-shadow p-4 rounded-lg relative group/erro bg-white overflow-hidden'>
            <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/erro:opacity-100 transition-opacity">
              <CopyButton 
                jsxCode={section.jsx}
                htmlCode={section.html}
                cssCode={section.css}
              />
            </div>
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] block text-center mb-6 italic"> {section.title} </span>
            {section.component}
          </section>
        ))}
      </div>
    </div>
  );
};

export default ErrorPageGallery;