import React, { useState } from 'react';
import CopyButton from '../CopyButton';

// --- Shared Icons ---
const KeyIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
);

const MailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
);

const LockIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
);

const ArrowLeftIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
);

export const ForgotStandard = () => (
  <div className="flex flex-col items-center justify-center min-h-[600px] w-full bg-slate-50 border border-slate-200 rounded-3xl p-4">
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 p-10 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600"></div>
      <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 text-blue-600 shadow-inner">
        <KeyIcon />
      </div>
      <h2 className="text-3xl font-bold text-slate-900 mb-3">Forgot Password?</h2>
      <p className="text-slate-500 mb-10 text-sm leading-relaxed max-w-[280px] mx-auto">Enter your email and we'll send you reset instructions.</p>
      <form className="text-left space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 ml-1">Email Address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <MailIcon />
            </div>
            <input type="email" placeholder="name@company.com" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-600/10 outline-none transition-all focus:border-blue-600 focus:bg-white font-medium" />
          </div>
        </div>
        <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-[0.98] tracking-tight text-lg">Send Reset Link</button>
      </form>
      <div className="mt-10 pt-8 border-t border-slate-50">
        <a href="#" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 font-semibold transition-colors">
          <ArrowLeftIcon />
          Back to Login
        </a>
      </div>
    </div>
  </div>
);

export const ForgotInteractive = () => {
  const [isSent, setIsSent] = useState(false);
  return (
    <div className="flex items-center justify-center min-h-[600px] w-full bg-white rounded-[3rem] border border-slate-100 p-8 font-sans text-slate-800">
      {!isSent ? (
        <div className="w-full max-w-sm animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="mb-12">
            <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter italic">Reset Password</h1>
            <p className="text-indigo-600 text-xs font-black uppercase tracking-[0.4em] leading-none">Security Verification</p>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Account Email</label>
              <div className="relative group">
                <input type="email" placeholder="Enter your email" className="w-full px-6 py-5 border-2 border-slate-50 bg-slate-50/50 rounded-2xl focus:border-indigo-600 focus:bg-white outline-none shadow-sm transition-all text-lg font-bold" />
                <div className="absolute inset-y-0 right-4 flex items-center text-slate-300 group-focus-within:text-indigo-600 transition-colors">
                  <MailIcon />
                </div>
              </div>
            </div>
            <button onClick={() => setIsSent(true)} className="w-full py-6 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-100 active:scale-95 text-xs">Send Recovery Link</button>
          </div>
          <div className="mt-12 text-center">
            <a href="#" className="text-xs font-black text-slate-300 uppercase tracking-widest hover:text-indigo-600 transition-colors">Alternative recovery methods</a>
          </div>
        </div>
      ) : (
        <div className="text-center animate-in fade-in zoom-in duration-700">
          <div className="w-32 h-32 bg-indigo-50 text-indigo-600 rounded-[3rem] flex items-center justify-center mx-auto mb-10 text-4xl shadow-inner shadow-indigo-100 rotate-3">
            <MailIcon />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight italic">Link Dispatched</h2>
          <p className="text-slate-500 mb-12 text-lg font-medium leading-relaxed max-w-xs mx-auto italic">We've sent a secure magic link to your inbox. Please check your spam folder if it doesn't arrive.</p>
          <div className="flex flex-col gap-4">
            <button className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs">Open Mail App</button>
            <button onClick={() => setIsSent(false)} className="px-10 py-5 rounded-2xl border-2 border-slate-100 text-slate-400 font-black tracking-widest uppercase text-[10px] hover:border-indigo-600 hover:text-indigo-600 transition-all italic leading-none">Resend Magic Link</button>
          </div>
        </div>
      )}
    </div>
  );
};

export const ForgotSplit = () => (
  <div className="flex min-h-[650px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-50 bg-white font-sans uppercase">
    <div className="hidden lg:flex w-1/2 bg-slate-900 p-20 text-white flex-col justify-between relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
      
      <div className="relative z-10">
        <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-12 border border-white/20 shadow-2xl">
          <LockIcon />
        </div>
        <h3 className="text-6xl font-black mb-8 tracking-tighter text-white leading-[0.9] italic">Identity<br/>Recovery.</h3>
        <p className="text-slate-400 text-xl leading-relaxed font-medium not-italic lowercase max-w-sm">Secure protocol to regain access to your authorized digital environment.</p>
      </div>

      <div className="relative z-10 pt-12 border-t border-white/10 flex items-center gap-6">
        <div className="flex -space-x-3">
          {[1,2,3].map(i => (
            <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 overflow-hidden">
              <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="avatar" />
            </div>
          ))}
        </div>
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest not-italic">Trusted by 10k+ security experts</p>
      </div>
    </div>
    <div className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center bg-white relative">
      <div className="max-w-md mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-sm font-black text-indigo-600 uppercase tracking-[0.5em] mb-4 italic">Verification Node</h2>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-none italic">Authorized recovery link</h1>
        </div>
        <form className="space-y-10">
          <div className="space-y-4">
              <div className="space-y-3">
                  <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest ml-1 italic">Input Secure Email</label>
                  <input type="email" className="w-full border-b-4 border-slate-100 py-6 text-3xl focus:border-indigo-600 outline-none transition-all font-black placeholder-slate-100 italic" placeholder="your@email.com" />
              </div>
          </div>
          <button className="w-full bg-slate-900 text-white py-7 font-black uppercase tracking-[0.3em] hover:bg-black transition-all shadow-2xl rounded-[2rem] active:scale-[0.98] text-xs">Initialize Recovery</button>
        </form>
        <div className="mt-16 text-center">
          <a href="#" className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] hover:text-slate-900 transition-colors italic">Back to secure portal login</a>
        </div>
      </div>
    </div>
  </div>
);

export const ForgotGlass = () => (
  <div className="relative flex items-center justify-center min-h-[600px] w-full overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#ff3366] via-[#6a4cff] to-[#00d2ff] p-6 text-white font-sans uppercase italic">
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
    
    <div className="bg-white/10 backdrop-blur-[40px] border border-white/30 p-12 lg:p-16 rounded-[4rem] shadow-[0_40px_80px_rgba(0,0,0,0.3)] w-full max-w-md text-center relative z-10 transition-all hover:bg-white/15 duration-500">
      <div className="w-24 h-24 bg-gradient-to-tr from-white to-white/80 shadow-2xl rounded-3xl flex items-center justify-center mx-auto mb-10 text-indigo-600 rotate-6 transition-transform hover:rotate-12">
        <KeyIcon />
      </div>
      <h2 className="text-5xl font-black mb-4 tracking-tighter leading-none italic uppercase">Unlock<br/>Access.</h2>
      <p className="text-white/60 text-[10px] mb-12 font-black uppercase tracking-[0.4em] leading-none">Magic recovery link portal</p>
      
      <form className="space-y-6">
        <div className="relative">
          <input type="email" placeholder="ACCESS IDENTIFIER" className="w-full px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/40 outline-none text-center focus:bg-white/20 transition-all font-black text-xs tracking-widest uppercase border-b-4 border-b-white/10" />
        </div>
        <button className="w-full py-6 bg-white text-indigo-600 font-black rounded-2xl shadow-2xl hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-[0.3em] text-xs">Dispatch Link</button>
      </form>
      
      <div className="mt-12 flex justify-center gap-6 opacity-40">
        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>
    </div>
  </div>
);

export const ForgotCyberpunk = () => (
    <div className="flex items-center justify-center min-h-[600px] w-full bg-black rounded-3xl border border-green-500/10 p-6 font-mono text-green-500 uppercase">
      <div className="w-full max-w-md border-2 border-green-500/50 p-12 text-green-500 bg-emerald-950/20 shadow-[0_0_80px_rgba(34,197,94,0.1)] relative group overflow-hidden">
        <div className="absolute top-0 right-0 p-2 text-[10px] opacity-20">V_PROTO.88</div>
        <div className="absolute -top-1 -left-1 w-10 h-10 border-t-4 border-l-4 border-green-400"></div>
        <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b-4 border-r-4 border-green-400"></div>
        
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-green-500 animate-ping"></div>
            <span className="text-[10px] font-black tracking-[0.3em]">SECURE_NODE_ACTIVE</span>
          </div>
          <h2 className="text-3xl font-black flex flex-col gap-1 italic">
            <span className="text-green-500/30 text-xs not-italic tracking-[0.5em]">AUTH::RECOVERY</span>
            PROTOCOL_V3
          </h2>
        </div>

        <form className="space-y-12">
          <div className="relative">
            <div className="flex justify-between items-end mb-3">
              <label className="text-[10px] font-bold opacity-50 uppercase tracking-[0.2em] italic leading-none">{">"} identity_hash</label>
              <span className="text-[8px] opacity-30">TYPE: EMAIL_ADDR</span>
            </div>
            <div className="relative">
              <input type="email" placeholder="USER_@_HOST" className="w-full bg-black/40 border-2 border-green-900/30 text-green-400 px-6 py-5 outline-none focus:border-green-500 transition-all uppercase font-black placeholder-green-900/30 text-xl tracking-tighter" />
              <div className="absolute bottom-0 left-0 h-1 bg-green-500 shadow-[0_0_20px_#22c55e] w-0 group-focus-within:w-full transition-all duration-1000"></div>
            </div>
          </div>
          
          <div className="space-y-4">
            <button className="w-full p-6 bg-green-500 text-black font-black hover:bg-green-400 hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all uppercase tracking-[0.4em] active:scale-95 text-xs italic border-t-2 border-green-300/30 relative overflow-hidden group/btn">
              <span className="relative z-10">EXECUTE_WIPE_AUTH</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500"></div>
            </button>
            <div className="flex justify-between text-[8px] opacity-30 font-black tracking-widest">
              <span>TRACERT: OK</span>
              <span>EST_TIME: 44ms</span>
            </div>
          </div>
        </form>
      </div>
    </div>
);

export const ForgotMinimal = () => (
    <div className="flex flex-col items-center justify-center min-h-[600px] w-full bg-white rounded-3xl p-10 font-serif border border-slate-100">
      <div className="w-full max-w-sm text-slate-900">
        <div className="mb-24">
          <div className="w-12 h-0.5 bg-black mb-12"></div>
          <h1 className="text-7xl font-extralight tracking-tighter leading-none italic uppercase">Recovery.</h1>
          <p className="text-slate-400 mt-6 text-sm font-light italic lowercase">Enter your credentials to begin the secure restoration sequence.</p>
        </div>
        <form className="space-y-16">
          <div className="group relative">
            <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 block mb-2 italic">Access Identifier</label>
            <input type="email" className="w-full py-4 bg-transparent border-b border-slate-100 focus:border-black outline-none text-3xl placeholder-slate-200 transition-all italic leading-tight font-light" placeholder="email@address.com" />
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-focus-within:w-full transition-all duration-700"></div>
          </div>
          <button className="w-full py-6 bg-black text-white text-[10px] font-black rounded-full hover:bg-slate-800 transition-all shadow-2xl tracking-[0.5em] uppercase italic leading-none">Begin Process</button>
        </form>
        <div className="mt-24 pt-12 border-t border-slate-50 text-center">
          <a href="#" className="text-[10px] font-black text-slate-200 uppercase tracking-widest hover:text-black transition-colors italic">Return to portal</a>
        </div>
      </div>
    </div>
);

export const ForgotNeumorphic = () => (
    <div className="flex items-center justify-center min-h-[600px] w-full bg-[#E0E5EC] rounded-[3rem] p-8 font-sans uppercase">
      <div className="w-full max-w-md p-14 rounded-[4rem] bg-[#E0E5EC] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center text-slate-500 relative">
        <div className="w-24 h-24 bg-[#E0E5EC] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] rounded-3xl mx-auto mb-14 flex items-center justify-center text-indigo-500">
          <KeyIcon />
        </div>
        <div className="mb-12">
          <h2 className="text-[10px] font-black mb-3 text-slate-400 uppercase tracking-[0.4em] leading-none italic">Access Protocol</h2>
          <h1 className="text-3xl font-black text-slate-700 tracking-tight italic">Node Recovery</h1>
        </div>
        <div className="space-y-10">
            <div className="relative">
              <input type="email" placeholder="Identity Hash" className="w-full bg-[#E0E5EC] p-6 rounded-2xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] outline-none text-center font-black placeholder-slate-400 focus:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all text-xs tracking-widest uppercase italic leading-none border-none" />
            </div>
            <button className="w-full py-6 rounded-2xl bg-[#E0E5EC] text-indigo-600 font-black shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all uppercase tracking-[0.3em] text-xs leading-none italic">Authorize Wipe</button>
        </div>
        <div className="mt-14 pt-10 border-t border-white/20">
          <a href="#" className="text-[10px] font-black text-slate-400 hover:text-indigo-600 transition-colors tracking-widest italic">Return to Origin</a>
        </div>
      </div>
    </div>
);

export const ForgotSMS = () => {
  const [method, setMethod] = useState('email');
  return (
    <div className="flex items-center justify-center min-h-[600px] w-full bg-slate-50 rounded-[3rem] p-8 font-sans text-slate-900 border border-slate-100 uppercase italic">
      <div className="w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-10 font-sans italic">
        <div className="mb-10">
          <h2 className="text-3xl font-black mb-2 tracking-tight text-slate-800 leading-none">Recover Access</h2>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Select verification method</p>
        </div>
        <div className="space-y-4 mb-12">
          <button onClick={() => setMethod('sms')} className={`w-full flex items-center gap-5 p-6 rounded-3xl border-2 transition-all group ${method === 'sms' ? 'border-indigo-600 bg-indigo-50 ring-4 ring-indigo-600/5' : 'border-slate-50 bg-slate-50/50'}`}>
            <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-indigo-600 transition-transform group-hover:rotate-12 not-italic">
              <PhoneIcon />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-2">via SMS</div>
              <div className="font-black text-sm text-slate-800 tracking-tighter not-italic whitespace-nowrap leading-none">•••• ••• 582</div>
            </div>
          </button>
          <button onClick={() => setMethod('email')} className={`w-full flex items-center gap-5 p-6 rounded-3xl border-2 transition-all group ${method === 'email' ? 'border-indigo-600 bg-indigo-50 ring-4 ring-indigo-600/5' : 'border-slate-50 bg-slate-50/50'}`}>
            <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-indigo-600 transition-transform group-hover:rotate-12 not-italic">
              <MailIcon />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-2">via Email</div>
              <div className="font-black text-sm text-slate-800 tracking-tighter not-italic whitespace-nowrap leading-none">•••••@gmail.com</div>
            </div>
          </button>
        </div>
        <button className="w-full py-6 bg-indigo-600 text-white font-black rounded-3xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 uppercase tracking-[0.3em] text-[10px] leading-none">Continue Protocol</button>
      </div>
    </div>
  );
};

export const ForgotBrutalist = () => (
    <div className="flex items-center justify-center min-h-[600px] w-full bg-[#FFDE00] rounded-[3rem] border-4 border-black p-6 font-sans text-slate-900 uppercase italic">
      <div className="w-full max-w-md bg-white border-[8px] border-black p-12 shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all hover:translate-x-3 hover:translate-y-3 relative overflow-hidden group">
        <div className="absolute top-0 right-0 bg-black text-white px-8 py-3 font-black text-2xl italic">RECOVER!</div>
        
        <div className="mb-12">
          <h2 className="text-[120px] font-black mb-0 leading-[0.7] tracking-tighter italic">PW?</h2>
          <h3 className="text-4xl font-black italic tracking-tighter mt-4 border-b-8 border-black pb-4 inline-block">GONE FOREVER?</h3>
        </div>

        <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-black tracking-[0.2em] block ml-1 italic">INPUT_SECURE_MAIL</label>
              <input type="email" placeholder="YOU@DOMAIN.COM" className="w-full p-6 border-[8px] border-black font-black outline-none focus:bg-[#FFDE00] text-xl placeholder-black/20 italic transition-colors" />
            </div>
            <button className="w-full py-8 bg-black text-white font-black text-3xl hover:bg-[#FFDE00] hover:text-black border-[8px] border-black transition-all italic shadow-[12px_12px_0px_0px_rgba(255,222,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 leading-none mt-8">RESET_NOW!!!</button>
        </form>

        <div className="mt-12 flex justify-between font-black text-[10px] tracking-widest italic">
          <span>SECURE_NODE_01</span>
          <span className="text-red-600 animate-pulse underline decoration-red-600 underline-offset-4 decoration-4">IDENTITY_REQUIRED</span>
        </div>
      </div>
    </div>
);

export const ForgotOverlay = () => (
    <div className="relative flex items-center justify-center min-h-[650px] w-full overflow-hidden rounded-[3rem] font-sans italic uppercase border-[12px] border-white shadow-2xl">
      <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" alt="bg" className="absolute inset-0 w-full h-full object-cover scale-110" />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      <div className="relative z-10 w-full max-w-md p-16 text-center text-white">
        <div className="mb-14">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl">
            <LockIcon />
          </div>
          <h2 className="text-5xl font-black mb-4 tracking-tighter leading-none italic uppercase">Lost in<br/>the void?</h2>
          <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.5em] leading-none">Re-establish primary connection</p>
        </div>

        <form className="space-y-8">
            <div className="relative group">
              <input type="email" placeholder="IDENTITY_AUTH_TOKEN" className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl outline-none text-center focus:bg-white/10 transition-all font-black placeholder-white/20 text-xs tracking-[0.2em] uppercase italic" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-focus-within:opacity-20 blur transition-opacity"></div>
            </div>
            <button className="w-full py-6 bg-white text-black font-black rounded-2xl hover:bg-slate-100 transition-all uppercase tracking-[0.4em] shadow-2xl text-xs leading-none italic active:scale-95">Initiate Sync</button>
        </form>

        <div className="mt-16 flex justify-center items-center gap-4">
          <div className="h-[1px] w-12 bg-white/10"></div>
          <a href="#" className="text-[10px] font-black text-white/30 hover:text-white transition-colors tracking-widest italic">Abort Sequence</a>
          <div className="h-[1px] w-12 bg-white/10"></div>
        </div>
      </div>
    </div>
);

// --- Main Gallery ---
const ForgotPasswordGallery = () => {
    return (
      <div className="w-full bg-slate-50 p-6 md:p-12 font-sans pb-40">
        <div className="max-w-4xl mx-auto text-center mb-24 px-4 font-sans uppercase italic">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white rounded-full border border-slate-200 shadow-sm mb-10 not-italic uppercase tracking-widest">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black text-slate-500 italic">Authentication Design System</span>
          </div>
          <h1 className="text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-none">Forgot password</h1>
          <p className="text-slate-400 text-2xl font-medium max-w-2xl mx-auto italic leading-relaxed underline decoration-indigo-500/10 underline-offset-[12px] lowercase not-italic">Professional recovery aesthetics for premium digital portals.</p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-32">
          
          <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
            <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
              <CopyButton 
                jsxCode={`const ForgotStandard = () => (
  <div className="flex flex-col items-center justify-center min-h-[600px] w-full bg-slate-50 p-4">
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 p-10 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600"></div>
      <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 text-blue-600 shadow-inner">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
      </div>
      <h2 className="text-3xl font-bold text-slate-900 mb-3">Forgot Password?</h2>
      <p className="text-slate-500 mb-10 text-sm leading-relaxed max-w-[280px] mx-auto">Enter your email and we'll send you reset instructions.</p>
      <form className="text-left space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 ml-1">Email Address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <input type="email" placeholder="name@company.com" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-600/10 outline-none transition-all focus:border-blue-600 focus:bg-white font-medium" />
          </div>
        </div>
        <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 tracking-tight text-lg">Send Reset Link</button>
      </form>
      <div className="mt-10 pt-8 border-t border-slate-50">
        <a href="#" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 font-semibold transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Login
        </a>
      </div>
    </div>
  </div>
);`} 
                htmlCode={`<div class="forgot-container">
  <div class="forgot-card">
    <div class="top-bar"></div>
    <div class="icon-box">
      <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
    </div>
    <h2>Forgot Password?</h2>
    <p>Enter your email and we'll send you reset instructions.</p>
    <form>
      <div class="field">
        <label>Email Address</label>
        <div class="input-wrapper">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          <input type="email" placeholder="name@company.com">
        </div>
      </div>
      <button type="submit">Send Reset Link</button>
    </form>
    <div class="footer">
      <a href="#">Back to Login</a>
    </div>
  </div>
</div>`} 
                cssCode={`.forgot-container { display: flex; align-items: center; justify-content: center; min-height: 600px; background: #f8fafc; font-family: sans-serif; padding: 16px; }
.forgot-card { width: 100%; max-width: 448px; background: white; border-radius: 24px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1); padding: 40px; text-align: center; position: relative; overflow: hidden; border: 1px solid #f1f5f9; }
.top-bar { position: absolute; top: 0; left: 0; width: 100%; height: 6px; background: #2563eb; }
.icon-box { width: 80px; height: 80px; background: #eff6ff; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 32px; color: #2563eb; }
.forgot-card h2 { font-size: 28px; font-weight: 700; color: #0f172a; margin-bottom: 12px; }
.forgot-card p { font-size: 14px; color: #64748b; margin-bottom: 40px; line-height: 1.6; }
.field { text-align: left; margin-bottom: 24px; }
.field label { display: block; font-size: 14px; font-weight: 700; color: #334155; margin-bottom: 8px; margin-left: 4px; }
.input-wrapper { position: relative; }
.input-wrapper svg { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #94a3b8; }
.input-wrapper input { width: 100%; padding: 16px 16px 16px 48px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; outline: none; transition: 0.2s; font-size: 16px; }
.input-wrapper input:focus { border-color: #2563eb; background: white; box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1); }
.forgot-card button { width: 100%; padding: 16px; background: #2563eb; color: white; border: none; border-radius: 16px; font-weight: 700; font-size: 18px; cursor: pointer; transition: 0.2s; box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.2); }
.forgot-card button:hover { background: #1d4ed8; }
.footer { margin-top: 40px; padding-top: 32px; border-top: 1px solid #f1f5f9; }
.footer a { text-decoration: none; color: #64748b; font-weight: 600; font-size: 14px; }
.footer a:hover { color: #2563eb; }`} 
              />
            </div>
            <div className="p-12">
                <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-indigo-50 pb-6 italic leading-none"> 01. Standard SaaS Premium </span>
                <ForgotStandard />
            </div>
          </section>

          <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
            <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
              <CopyButton 
                jsxCode={`import React, { useState } from 'react';

const ForgotInteractive = () => {
  const [isSent, setIsSent] = useState(false);
  return (
    <div className="flex items-center justify-center min-h-[600px] w-full bg-white rounded-[3rem] border border-slate-100 p-8">
      {!isSent ? (
        <div className="w-full max-w-sm">
          <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter italic">Reset Password</h1>
          <p className="text-indigo-600 text-xs font-black uppercase tracking-[0.4em] leading-none mb-10">Security Verification</p>
          <div className="space-y-6">
            <input type="email" placeholder="Enter your email" className="w-full px-6 py-5 border-2 border-slate-50 bg-slate-50 rounded-2xl focus:border-indigo-600 focus:bg-white outline-none shadow-sm transition-all text-lg font-bold" />
            <button onClick={() => setIsSent(true)} className="w-full py-6 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-100 text-xs">Send Recovery Link</button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="w-32 h-32 bg-indigo-50 text-indigo-600 rounded-[3rem] flex items-center justify-center mx-auto mb-10 text-4xl shadow-inner shadow-indigo-100 rotate-3">
             <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight italic">Link Dispatched</h2>
          <p className="text-slate-500 mb-12 text-lg font-medium italic leading-relaxed max-w-xs mx-auto">We've sent a secure magic link to your inbox.</p>
          <button onClick={() => setIsSent(false)} className="px-10 py-5 rounded-2xl border-2 border-slate-100 text-slate-400 font-black tracking-widest uppercase text-[10px] hover:border-indigo-600 hover:text-indigo-600 transition-all">Resend Magic Link</button>
        </div>
      )}
    </div>
  );
};`} 
                htmlCode={`<div class="interactive-forgot">
  <div class="forgot-card" id="step-form">
    <h1>Reset Password</h1>
    <p class="tagline">Security Verification</p>
    <form class="space-y-6">
      <input type="email" placeholder="Enter your email">
      <button type="button" class="primary-btn">Send Recovery Link</button>
    </form>
  </div>

  <!-- Success State (Hidden by default) -->
  <div class="success-card hidden" id="step-success">
    <div class="icon-box">
      <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    </div>
    <h2>Link Dispatched</h2>
    <p>We've sent a secure magic link to your inbox.</p>
    <button type="button" class="secondary-btn">Resend Magic Link</button>
  </div>
</div>`} 
                cssCode={`.interactive-forgot { display: flex; align-items: center; justify-content: center; min-height: 600px; width: 100%; background: white; border-radius: 48px; font-family: sans-serif; padding: 32px; border: 1px solid #f1f5f9; }
.forgot-card, .success-card { width: 100%; max-width: 384px; text-align: center; }
.interactive-forgot h1 { font-size: 40px; font-weight: 900; color: #0f172a; margin-bottom: 16px; letter-spacing: -0.05em; font-style: italic; }
.tagline { color: #4f46e5; font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 40px; }
.forgot-card input { width: 100%; padding: 20px 24px; border: 2px solid #f8fafc; background: #f8fafc; border-radius: 20px; font-size: 18px; font-weight: 700; outline: none; transition: 0.3s; margin-bottom: 24px; }
.forgot-card input:focus { border-color: #4f46e5; background: white; box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.1); }
.primary-btn { width: 100%; padding: 24px; background: #4f46e5; color: white; border: none; border-radius: 20px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; cursor: pointer; transition: 0.3s; box-shadow: 0 20px 25px -5px rgba(79, 70, 229, 0.2); }
.primary-btn:hover { background: #4338ca; }
.icon-box { width: 128px; height: 128px; background: #eef2ff; color: #4f46e5; border-radius: 48px; display: flex; align-items: center; justify-content: center; margin: 0 auto 40px; transform: rotate(3deg); box-shadow: inset 0 2px 4px rgba(0,0,0,0.05); }
.success-card h2 { font-size: 36px; font-weight: 900; color: #0f172a; margin-bottom: 16px; font-style: italic; letter-spacing: -0.02em; }
.success-card p { font-size: 18px; color: #64748b; font-weight: 500; font-style: italic; margin-bottom: 48px; line-height: 1.6; }
.secondary-btn { padding: 16px 40px; border-radius: 20px; border: 2px solid #f1f5f9; background: transparent; color: #94a3b8; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; cursor: pointer; transition: 0.3s; }
.secondary-btn:hover { border-color: #4f46e5; color: #4f46e5; }
.hidden { display: none; }`} 
              />
            </div>
            <div className="p-12">
                <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-indigo-50 pb-6 italic leading-none"> 02. Interactive Success Flow </span>
                <ForgotInteractive />
            </div>
          </section>

          <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
            <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
              <CopyButton 
                jsxCode={`const ForgotSplit = () => (
  <div className="flex min-h-[650px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-white">
    <div className="hidden lg:flex w-1/2 bg-slate-900 p-20 text-white flex-col justify-between relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>
      <div className="relative z-10">
        <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-12 border border-white/20">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
        </div>
        <h3 className="text-6xl font-black mb-8 tracking-tighter leading-[0.9] italic">Identity Recovery.</h3>
        <p className="text-slate-400 text-xl max-w-sm">Secure protocol to regain access to your authorized portal.</p>
      </div>
    </div>
    <div className="w-full lg:w-1/2 p-20 flex flex-col justify-center bg-white relative">
      <div className="max-w-md mx-auto w-full">
        <h2 className="text-sm font-black text-indigo-600 uppercase tracking-[0.5em] mb-4 italic">Verification Node</h2>
        <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-none mb-12 italic">Authorized recovery link</h1>
        <form className="space-y-10">
          <div className="space-y-3">
              <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest italic">Input Secure Email</label>
              <input type="email" className="w-full border-b-4 border-slate-100 py-6 text-3xl focus:border-indigo-600 outline-none transition-all font-black placeholder-slate-100 italic" placeholder="your@email.com" />
          </div>
          <button className="w-full bg-slate-900 text-white py-7 font-black uppercase tracking-[0.3em] hover:bg-black transition-all shadow-2xl rounded-[2rem] text-xs">Initialize Recovery</button>
        </form>
      </div>
    </div>
  </div>
);`} 
                htmlCode={`<div class="split-forgot">
  <div class="info-side">
    <div class="icon-box">
      <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    </div>
    <h1>Identity Recovery.</h1>
    <p>Secure protocol to regain access to your authorized portal.</p>
  </div>
  <div class="form-side">
    <div class="container">
      <span class="tag">Verification Node</span>
      <h2>Authorized recovery link</h2>
      <form>
        <div class="field">
          <label>Input Secure Email</label>
          <input type="email" placeholder="your@email.com">
        </div>
        <button type="submit">Initialize Recovery</button>
      </form>
    </div>
  </div>
</div>`} 
                cssCode={`.split-forgot { display: flex; min-height: 650px; border-radius: 40px; overflow: hidden; font-family: sans-serif; background: white; }
.info-side { display: none; width: 50%; background: #0f172a; color: white; padding: 80px; flex-direction: column; justify-content: center; position: relative; }
@media (min-width: 1024px) { .info-side { display: flex; } }
.info-side .icon-box { width: 64px; height: 64px; background: rgba(255,255,255,0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 48px; border: 1px solid rgba(255,255,255,0.2); }
.info-side h1 { font-size: 60px; font-weight: 900; line-height: 0.9; margin-bottom: 32px; font-style: italic; letter-spacing: -0.05em; }
.info-side p { font-size: 20px; color: #94a3b8; max-width: 320px; }
.form-side { width: 100%; padding: 80px; display: flex; align-items: center; justify-content: center; }
@media (min-width: 1024px) { .form-side { width: 50%; } }
.form-side .container { width: 100%; max-width: 448px; }
.tag { font-size: 14px; font-weight: 900; color: #4f46e5; text-transform: uppercase; letter-spacing: 0.5em; margin-bottom: 16px; display: block; font-style: italic; }
.form-side h2 { font-size: 40px; font-weight: 900; color: #0f172a; margin-bottom: 48px; font-style: italic; letter-spacing: -0.02em; }
.field { margin-bottom: 40px; }
.field label { font-size: 10px; font-weight: 900; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.2em; display: block; margin-bottom: 12px; font-style: italic; }
.field input { width: 100%; border: none; border-bottom: 4px solid #f1f5f9; padding: 24px 0; font-size: 30px; font-weight: 900; outline: none; transition: 0.3s; font-style: italic; }
.field input:focus { border-color: #4f46e5; }
.form-side button { width: 100%; padding: 28px; background: #0f172a; color: white; border: none; border-radius: 32px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; cursor: pointer; transition: 0.3s; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
.form-side button:hover { background: black; }`} 
              />
            </div>
            <div className="p-12">
                <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-indigo-50 pb-6 italic leading-none"> 03. Visual Split Portal </span>
                <ForgotSplit />
            </div>
          </section>

          <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
            <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
              <CopyButton 
                jsxCode={`const ForgotGlass = () => (
  <div className="relative flex items-center justify-center min-h-[600px] w-full overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#ff3366] via-[#6a4cff] to-[#00d2ff] p-6">
    <div className="bg-white/10 backdrop-blur-[40px] border border-white/30 p-16 rounded-[4rem] shadow-[0_40px_80px_rgba(0,0,0,0.3)] w-full max-w-md text-center relative z-10">
      <div className="w-24 h-24 bg-white shadow-2xl rounded-3xl flex items-center justify-center mx-auto mb-10 text-indigo-600 rotate-6">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
      </div>
      <h2 className="text-5xl font-black text-white mb-4 tracking-tighter italic uppercase leading-none">Unlock Access.</h2>
      <p className="text-white/60 text-[10px] mb-12 font-black uppercase tracking-[0.4em]">Magic recovery link portal</p>
      <form className="space-y-6">
        <input type="email" placeholder="ACCESS IDENTIFIER" className="w-full px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/40 outline-none text-center focus:bg-white/20 transition-all font-black text-xs tracking-widest uppercase border-b-4 border-b-white/10" />
        <button className="w-full py-6 bg-white text-indigo-600 font-black rounded-2xl shadow-2xl hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-[0.3em] text-xs">Dispatch Link</button>
      </form>
    </div>
  </div>
);`} 
                htmlCode={`<div class="glass-forgot">
  <div class="bg-gradient"></div>
  <div class="glass-card">
    <div class="icon-box">
      <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
    </div>
    <h2>Unlock Access.</h2>
    <p>Magic recovery link portal</p>
    <form>
      <input type="email" placeholder="ACCESS IDENTIFIER">
      <button type="submit">Dispatch Link</button>
    </form>
  </div>
</div>`} 
                cssCode={`.glass-forgot { position: relative; display: flex; align-items: center; justify-content: center; min-height: 600px; padding: 24px; font-family: sans-serif; overflow: hidden; border-radius: 48px; }
.bg-gradient { position: absolute; inset: 0; background: linear-gradient(135deg, #ff3366, #6a4cff, #00d2ff); z-index: 0; }
.glass-card { position: relative; z-index: 10; width: 100%; max-width: 448px; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(40px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 64px; padding: 64px; text-align: center; box-shadow: 0 40px 80px rgba(0,0,0,0.3); }
.icon-box { width: 96px; height: 96px; background: white; border-radius: 24px; display: flex; align-items: center; justify-content: center; margin: 0 auto 40px; color: #4f46e5; transform: rotate(6deg); }
.glass-card h2 { font-size: 48px; font-weight: 900; color: white; margin-bottom: 16px; font-style: italic; letter-spacing: -0.05em; line-height: 1; text-transform: uppercase; }
.glass-card p { font-size: 10px; font-weight: 900; color: rgba(255, 255, 255, 0.6); text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 48px; }
.glass-card input { width: 100%; padding: 20px 32px; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); border-bottom: 4px solid rgba(255, 255, 255, 0.1); border-radius: 20px; color: white; font-weight: 900; font-size: 12px; letter-spacing: 0.1em; text-align: center; outline: none; transition: 0.3s; margin-bottom: 24px; }
.glass-card input::placeholder { color: rgba(255, 255, 255, 0.4); }
.glass-card input:focus { background: rgba(255, 255, 255, 0.2); border-color: rgba(255, 255, 255, 0.4); }
.glass-card button { width: 100%; padding: 24px; background: white; color: #4f46e5; border: none; border-radius: 20px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 12px; cursor: pointer; transition: 0.3s; box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
.glass-card button:hover { transform: scale(1.02); }`} 
              />
            </div>
            <div className="p-12">
                <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-indigo-50 pb-6 italic leading-none"> 04. Glassmorphism Gloss </span>
                <ForgotGlass />
            </div>
          </section>

          <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
            <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
              <CopyButton 
                jsxCode={`const ForgotCyberpunk = () => (
  <div className="flex items-center justify-center min-h-[600px] w-full bg-black rounded-3xl p-6 font-mono text-green-500">
    <div className="w-full max-w-md border-2 border-green-500/50 p-12 bg-emerald-950/20 shadow-[0_0_80px_rgba(34,197,94,0.1)] relative overflow-hidden">
      <div className="absolute -top-1 -left-1 w-10 h-10 border-t-4 border-l-4 border-green-400"></div>
      <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b-4 border-r-4 border-green-400"></div>
      <div className="mb-12">
        <h2 className="text-3xl font-black flex flex-col gap-1 italic uppercase">
          <span className="text-green-500/30 text-xs tracking-[0.5em]">AUTH::RECOVERY</span>
          PROTOCOL_V3
        </h2>
      </div>
      <form className="space-y-12">
        <div className="relative">
          <label className="text-[10px] font-bold opacity-50 uppercase tracking-[0.2em] italic mb-3 block">{">"} identity_hash</label>
          <input type="email" placeholder="USER_@_HOST" className="w-full bg-black/40 border-2 border-green-900/30 text-green-400 px-6 py-5 outline-none focus:border-green-500 uppercase font-black text-xl" />
        </div>
        <button className="w-full p-6 bg-green-500 text-black font-black hover:bg-green-400 hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all uppercase tracking-[0.4em] text-xs italic border-t-2 border-green-300/30">EXECUTE_WIPE_AUTH</button>
      </form>
    </div>
  </div>
);`} 
                htmlCode={`<div class="cyber-forgot">
  <div class="terminal">
    <div class="corner top-left"></div>
    <div class="corner bottom-right"></div>
    <div class="header">
      <span class="sub">AUTH::RECOVERY</span>
      <h1>PROTOCOL_V3</h1>
    </div>
    <form>
      <div class="field">
        <label>> identity_hash</label>
        <input type="email" placeholder="USER_@_HOST">
      </div>
      <button type="submit">EXECUTE_WIPE_AUTH</button>
    </form>
    <div class="footer">
      <span>TRACERT: OK</span>
      <span>EST_TIME: 44ms</span>
    </div>
  </div>
</div>`} 
                cssCode={`.cyber-forgot { display: flex; align-items: center; justify-content: center; min-height: 600px; background: #000; font-family: monospace; border-radius: 24px; padding: 24px; }
.terminal { width: 100%; max-width: 448px; border: 2px solid rgba(34, 197, 94, 0.5); padding: 48px; background: rgba(5, 46, 27, 0.2); box-shadow: 0 0 80px rgba(34, 197, 94, 0.1); position: relative; }
.corner { position: absolute; width: 40px; height: 40px; border: 4px solid #4ade80; }
.top-left { top: -4px; left: -4px; border-right: none; border-bottom: none; }
.bottom-right { bottom: -4px; right: -4px; border-left: none; border-top: none; }
.header { margin-bottom: 48px; }
.header .sub { font-size: 10px; color: rgba(34, 197, 94, 0.3); letter-spacing: 0.5em; display: block; margin-bottom: 4px; }
.header h1 { font-size: 32px; font-weight: 900; color: #22c55e; font-style: italic; margin: 0; }
.field { margin-bottom: 48px; }
.field label { font-size: 10px; font-weight: 700; color: rgba(34, 197, 94, 0.5); text-transform: uppercase; letter-spacing: 0.2em; display: block; margin-bottom: 12px; font-style: italic; }
.field input { width: 100%; background: rgba(0,0,0,0.4); border: 2px solid rgba(20, 83, 45, 0.3); padding: 20px 24px; color: #4ade80; font-weight: 900; font-size: 20px; outline: none; transition: 0.3s; text-transform: uppercase; }
.field input:focus { border-color: #22c55e; box-shadow: 0 0 20px rgba(34, 197, 94, 0.2); }
.terminal button { width: 100%; padding: 24px; background: #22c55e; color: black; border: none; border-top: 2px solid rgba(134, 239, 172, 0.3); font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; cursor: pointer; transition: 0.3s; font-style: italic; }
.terminal button:hover { background: #4ade80; box-shadow: 0 0 40px rgba(34, 197, 94, 0.6); }
.footer { display: flex; justify-content: space-between; font-size: 8px; color: rgba(34, 197, 94, 0.3); margin-top: 24px; letter-spacing: 0.2em; }`} 
              />
            </div>
            <div className="p-12">
                <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-indigo-50 pb-6 italic leading-none"> 05. Cyberpunk Terminal </span>
                <ForgotCyberpunk />
            </div>
          </section>

          <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
            <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
              <CopyButton 
                jsxCode={`const ForgotMinimal = () => (
  <div className="flex flex-col items-center justify-center min-h-[600px] w-full bg-white p-10 font-serif">
    <div className="w-full max-w-sm text-slate-900">
      <div className="mb-24">
        <div className="w-12 h-0.5 bg-black mb-12"></div>
        <h1 className="text-7xl font-extralight tracking-tighter leading-none italic uppercase">Recovery.</h1>
        <p className="text-slate-400 mt-6 text-sm font-light italic lowercase">Enter your credentials to begin the secure restoration sequence.</p>
      </div>
      <form className="space-y-16">
        <div className="group relative">
          <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 block mb-2 italic">Access Identifier</label>
          <input type="email" className="w-full py-4 bg-transparent border-b border-slate-100 focus:border-black outline-none text-3xl placeholder-slate-200 transition-all italic leading-tight font-light" placeholder="email@address.com" />
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-focus-within:w-full transition-all duration-700"></div>
        </div>
        <button className="w-full py-6 bg-black text-white text-[10px] font-black rounded-full hover:bg-slate-800 transition-all shadow-2xl tracking-[0.5em] uppercase italic leading-none">Begin Process</button>
      </form>
    </div>
  </div>
);`} 
                htmlCode={`<div class="minimal-forgot">
  <div class="container">
    <div class="header">
      <div class="line"></div>
      <h1>Recovery.</h1>
      <p>Enter your credentials to begin the secure restoration sequence.</p>
    </div>
    <form>
      <div class="field">
        <label>Access Identifier</label>
        <input type="email" placeholder="email@address.com">
        <div class="focus-line"></div>
      </div>
      <button type="submit">Begin Process</button>
    </form>
  </div>
</div>`} 
                cssCode={`.minimal-forgot { display: flex; align-items: center; justify-content: center; min-height: 600px; background: white; font-family: serif; border-radius: 24px; padding: 24px; }
.minimal-forgot .container { width: 100%; max-width: 384px; color: #0f172a; }
.minimal-forgot .header { margin-bottom: 96px; }
.minimal-forgot .line { width: 48px; height: 2px; background: black; margin-bottom: 48px; }
.minimal-forgot h1 { font-size: 72px; font-weight: 200; letter-spacing: -0.05em; line-height: 1; font-style: italic; text-transform: uppercase; margin: 0; }
.minimal-forgot p { font-size: 14px; color: #94a3b8; font-weight: 300; font-style: italic; margin-top: 24px; }
.field { position: relative; margin-bottom: 64px; }
.field label { font-size: 10px; font-weight: 900; color: #cbd5e1; text-transform: uppercase; letter-spacing: 0.4em; display: block; margin-bottom: 8px; font-style: italic; }
.field input { width: 100%; background: transparent; border: none; border-bottom: 1px solid #f1f5f9; padding: 16px 0; font-size: 30px; font-weight: 300; outline: none; font-style: italic; transition: 0.3s; }
.focus-line { position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: black; transition: 0.5s ease; }
.field input:focus ~ .focus-line { width: 100%; }
.minimal-forgot button { width: 100%; padding: 24px; background: black; color: white; border: none; border-radius: 9999px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5em; font-size: 10px; cursor: pointer; transition: 0.3s; font-style: italic; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
.minimal-forgot button:hover { background: #1e293b; }`} 
              />
            </div>
            <div className="p-12">
                <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-indigo-50 pb-6 italic leading-none"> 06. Minimalist Serif </span>
                <ForgotMinimal />
            </div>
          </section>

          <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
            <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
              <CopyButton 
                jsxCode={`const ForgotNeumorphic = () => (
  <div className="flex items-center justify-center min-h-[600px] w-full bg-[#E0E5EC] p-8">
    <div className="w-full max-w-md p-14 rounded-[4rem] bg-[#E0E5EC] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center">
      <div className="w-24 h-24 bg-[#E0E5EC] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] rounded-3xl mx-auto mb-14 flex items-center justify-center text-indigo-500">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
      </div>
      <div className="mb-12">
        <h2 className="text-[10px] font-black mb-3 text-slate-400 uppercase tracking-[0.4em] italic">Access Protocol</h2>
        <h1 className="text-3xl font-black text-slate-700 italic">Node Recovery</h1>
      </div>
      <div className="space-y-10">
          <input type="email" placeholder="Identity Hash" className="w-full bg-[#E0E5EC] p-6 rounded-2xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] outline-none text-center font-black placeholder-slate-400 focus:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all text-xs tracking-widest uppercase italic border-none" />
          <button className="w-full py-6 rounded-2xl bg-[#E0E5EC] text-indigo-600 font-black shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all uppercase tracking-[0.3em] text-xs italic">Authorize Wipe</button>
      </div>
    </div>
  </div>
);`} 
                htmlCode={`<div class="neu-forgot">
  <div class="neu-card">
    <div class="icon-box">
      <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
    </div>
    <div class="header">
      <span class="tag">Access Protocol</span>
      <h2>Node Recovery</h2>
    </div>
    <form>
      <input type="email" placeholder="Identity Hash">
      <button type="submit">Authorize Wipe</button>
    </form>
  </div>
</div>`} 
                cssCode={`.neu-forgot { display: flex; align-items: center; justify-content: center; min-height: 600px; background: #E0E5EC; font-family: sans-serif; border-radius: 48px; padding: 24px; }
.neu-card { width: 100%; max-width: 448px; background: #E0E5EC; border-radius: 64px; padding: 64px; text-align: center; box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; }
.icon-box { width: 96px; height: 96px; background: #E0E5EC; border-radius: 24px; display: flex; align-items: center; justify-content: center; margin: 0 auto 48px; color: #6366f1; box-shadow: 10px 10px 20px #bebebe, -10px -10px 20px #ffffff; }
.header { margin-bottom: 48px; }
.tag { font-size: 10px; font-weight: 900; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.4em; display: block; margin-bottom: 12px; font-style: italic; }
.header h2 { font-size: 30px; font-weight: 900; color: #334155; font-style: italic; margin: 0; }
.neu-card input { width: 100%; padding: 24px; background: #E0E5EC; border: none; border-radius: 20px; font-weight: 900; font-size: 12px; letter-spacing: 0.1em; text-align: center; outline: none; transition: 0.3s; margin-bottom: 40px; box-shadow: inset 8px 8px 16px #bebebe, inset -8px -8px 16px #ffffff; font-style: italic; color: #475569; }
.neu-card input:focus { box-shadow: inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff; }
.neu-card button { width: 100%; padding: 24px; background: #E0E5EC; color: #6366f1; border: none; border-radius: 20px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 12px; cursor: pointer; transition: 0.3s; box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff; font-style: italic; }
.neu-card button:hover { box-shadow: 4px 4px 8px #bebebe, -4px -4px 8px #ffffff; }
.neu-card button:active { box-shadow: inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff; }`} 
              />
            </div>
            <div className="p-12">
                <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-indigo-50 pb-6 italic leading-none"> 07. Soft UI Neumorphic </span>
                <ForgotNeumorphic />
            </div>
          </section>

          <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
            <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
                <CopyButton 
                  jsxCode={`import React, { useState } from 'react';

const ForgotSMS = () => {
  const [method, setMethod] = useState('email');
  return (
    <div className="flex items-center justify-center min-h-[600px] w-full bg-slate-50 p-8">
      <div className="w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-10 italic">
        <div className="mb-10">
          <h2 className="text-3xl font-black mb-2 tracking-tight text-slate-800 leading-none">Recover Access</h2>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Select verification method</p>
        </div>
        <div className="space-y-4 mb-12">
          <button onClick={() => setMethod('sms')} className={\`w-full flex items-center gap-5 p-6 rounded-3xl border-2 transition-all group \${method === 'sms' ? 'border-indigo-600 bg-indigo-50 ring-4 ring-indigo-600/5' : 'border-slate-50 bg-slate-50/50'}\`}>
            <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-indigo-600 transition-transform group-hover:rotate-12 not-italic">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            </div>
            <div className="text-left">
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-2">via SMS</div>
              <div className="font-black text-sm text-slate-800 tracking-tighter not-italic leading-none">•••• ••• 582</div>
            </div>
          </button>
          <button onClick={() => setMethod('email')} className={\`w-full flex items-center gap-5 p-6 rounded-3xl border-2 transition-all group \${method === 'email' ? 'border-indigo-600 bg-indigo-50 ring-4 ring-indigo-600/5' : 'border-slate-50 bg-slate-50/50'}\`}>
            <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-indigo-600 transition-transform group-hover:rotate-12 not-italic">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div className="text-left">
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-2">via Email</div>
              <div className="font-black text-sm text-slate-800 tracking-tighter not-italic leading-none">•••••@gmail.com</div>
            </div>
          </button>
        </div>
        <button className="w-full py-6 bg-indigo-600 text-white font-black rounded-3xl hover:bg-indigo-700 transition-all uppercase tracking-[0.3em] text-[10px] leading-none">Continue Protocol</button>
      </div>
    </div>
  );
};`} 
                  htmlCode={`<div class="auth-gate">
  <div class="card">
    <div class="header">
      <h2>Recover Access</h2>
      <p class="tag">Select verification method</p>
    </div>
    <div class="options">
      <button class="option active">
        <div class="icon">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
        </div>
        <div class="details">
          <span class="label">via SMS</span>
          <span class="val">•••• ••• 582</span>
        </div>
      </button>
      <button class="option">
        <div class="icon">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        </div>
        <div class="details">
          <span class="label">via Email</span>
          <span class="val">•••••@gmail.com</span>
        </div>
      </button>
    </div>
    <button class="submit-btn">Continue Protocol</button>
  </div>
</div>`} 
                  cssCode={`.auth-gate { display: flex; align-items: center; justify-content: center; min-height: 600px; background: #f8fafc; font-family: sans-serif; border-radius: 48px; padding: 24px; }
.card { width: 100%; max-width: 448px; background: white; border-radius: 40px; padding: 40px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1); border: 1px solid #f1f5f9; }
.header { margin-bottom: 40px; }
.header h2 { font-size: 28px; font-weight: 900; color: #1e293b; margin-bottom: 8px; font-style: italic; letter-spacing: -0.02em; }
.tag { font-size: 10px; font-weight: 900; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.3em; }
.options { display: flex; flex-direction: column; gap: 16px; margin-bottom: 48px; }
.option { display: flex; align-items: center; gap: 20px; padding: 24px; background: #f8fafc; border: 2px solid transparent; border-radius: 24px; cursor: pointer; transition: 0.3s; width: 100%; }
.option.active { border-color: #4f46e5; background: #eef2ff; box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.05); }
.option .icon { width: 56px; height: 56px; background: white; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: #4f46e5; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
.details { text-align: left; }
.details .label { font-size: 10px; font-weight: 900; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 8px; }
.details .val { font-size: 14px; font-weight: 900; color: #1e293b; }
.submit-btn { width: 100%; padding: 24px; background: #4f46e5; color: white; border: none; border-radius: 24px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 10px; cursor: pointer; transition: 0.3s; box-shadow: 0 20px 25px -5px rgba(79, 70, 229, 0.2); }
.submit-btn:hover { background: #4338ca; }`} 
                />
            </div>
            <div className="p-12">
                <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-indigo-50 pb-6 italic leading-none"> 08. SMS/Email Auth Option </span>
                <ForgotSMS />
            </div>
          </section>

          <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
            <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
              <CopyButton 
                jsxCode={`const ForgotBrutalist = () => (
  <div className="flex items-center justify-center min-h-[600px] w-full bg-[#FFDE00] p-6 font-sans">
    <div className="w-full max-w-md bg-white border-[8px] border-black p-12 shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden uppercase italic">
      <div className="absolute top-0 right-0 bg-black text-white px-8 py-3 font-black text-2xl italic">RECOVER!</div>
      <div className="mb-12">
        <h2 className="text-[120px] font-black leading-[0.7] tracking-tighter italic">PW?</h2>
        <h3 className="text-4xl font-black italic tracking-tighter mt-4 border-b-8 border-black pb-4 inline-block">GONE FOREVER?</h3>
      </div>
      <form className="space-y-4">
        <label className="text-xs font-black tracking-[0.2em] block ml-1 italic">INPUT_SECURE_MAIL</label>
        <input type="email" placeholder="YOU@DOMAIN.COM" className="w-full p-6 border-[8px] border-black font-black outline-none focus:bg-[#FFDE00] text-xl placeholder-black/20 italic" />
        <button className="w-full py-8 bg-black text-white font-black text-3xl hover:bg-[#FFDE00] hover:text-black border-[8px] border-black italic shadow-[12px_12px_0px_0px_rgba(255,222,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 leading-none mt-8 transition-all">RESET_NOW!!!</button>
      </form>
    </div>
  </div>
);`} 
                htmlCode={`<div class="brutal-forgot">
  <div class="card">
    <div class="badge">RECOVER!</div>
    <div class="header">
      <h2 class="huge">PW?</h2>
      <h3 class="sub">GONE FOREVER?</h3>
    </div>
    <form>
      <div class="field">
        <label>INPUT_SECURE_MAIL</label>
        <input type="email" placeholder="YOU@DOMAIN.COM">
      </div>
      <button type="submit">RESET_NOW!!!</button>
    </form>
    <div class="footer">
      <span>SECURE_NODE_01</span>
      <span class="warning">IDENTITY_REQUIRED</span>
    </div>
  </div>
</div>`} 
                cssCode={`.brutal-forgot { display: flex; align-items: center; justify-content: center; min-height: 600px; background: #FFDE00; font-family: sans-serif; border-radius: 48px; padding: 24px; }
.card { width: 100%; max-width: 448px; background: white; border: 8px solid black; padding: 48px; box-shadow: 24px 24px 0px 0px rgba(0,0,0,1); position: relative; text-transform: uppercase; font-style: italic; }
.badge { position: absolute; top: 0; right: 0; background: black; color: white; padding: 12px 32px; font-weight: 900; font-size: 24px; }
.header { margin-bottom: 48px; }
.huge { font-size: 120px; font-weight: 900; line-height: 0.7; letter-spacing: -0.05em; margin: 0; }
.sub { font-size: 36px; font-weight: 900; letter-spacing: -0.05em; border-bottom: 8px solid black; padding-bottom: 16px; display: inline-block; margin: 16px 0 0; }
.field { margin-bottom: 32px; text-align: left; }
.field label { font-size: 12px; font-weight: 900; letter-spacing: 0.2em; display: block; margin-bottom: 8px; margin-left: 4px; }
.field input { width: 100%; border: 8px solid black; padding: 24px; font-size: 20px; font-weight: 900; outline: none; transition: 0.2s; font-style: italic; background: white; }
.field input:focus { background: #FFDE00; }
button { width: 100%; padding: 32px; background: black; color: white; border: 8px solid black; font-size: 30px; font-weight: 900; cursor: pointer; font-style: italic; box-shadow: 12px 12px 0px 0px rgba(255,222,0,1); transition: 0.2s; }
button:hover { background: #FFDE00; color: black; }
button:active { box-shadow: none; transform: translate(4px, 4px); }
.footer { display: flex; justify-content: space-between; font-size: 10px; font-weight: 900; margin-top: 48px; letter-spacing: 0.1em; }
.warning { color: #dc2626; text-decoration: underline; text-underline-offset: 4px; }`} 
              />
            </div>
            <div className="p-12">
                <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-indigo-50 pb-6 italic leading-none"> 09. Bold Brutalist Pop </span>
                <ForgotBrutalist />
            </div>
          </section>

          <section className="bg-white p-4 rounded-[40px] border border-slate-100 relative group shadow-sm transition-all hover:shadow-2xl hover:border-indigo-100/50">
            <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
              <CopyButton 
                jsxCode={`const ForgotCinematic = () => (
  <div className="relative flex items-center justify-center min-h-[600px] w-full overflow-hidden rounded-[3rem] font-sans">
    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" alt="bg" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
    <div className="relative z-10 w-full max-w-md p-16 text-center text-white uppercase italic">
      <div className="mb-14">
        <div className="w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
        </div>
        <h2 className="text-5xl font-black mb-4 tracking-tighter leading-none italic uppercase">Lost in<br/>the void?</h2>
        <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.5em]">Re-establish primary connection</p>
      </div>
      <form className="space-y-8">
        <input type="email" placeholder="IDENTITY_AUTH_TOKEN" className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl outline-none text-center focus:bg-white/10 transition-all font-black placeholder-white/20 text-xs tracking-[0.2em] uppercase italic" />
        <button className="w-full py-6 bg-white text-black font-black rounded-2xl hover:bg-slate-100 transition-all uppercase tracking-[0.4em] shadow-2xl text-xs leading-none italic">Initiate Sync</button>
      </form>
    </div>
  </div>
);`} 
                htmlCode={`<div class="cinematic-forgot">
  <div class="overlay"></div>
  <div class="content">
    <div class="icon-box">
      <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    </div>
    <h1>Lost in<br>the void?</h1>
    <p class="tag">Re-establish primary connection</p>
    <form>
      <input type="email" placeholder="IDENTITY_AUTH_TOKEN">
      <button type="submit">Initiate Sync</button>
    </form>
    <div class="footer">
      <div class="line"></div>
      <a href="#">Abort Sequence</a>
      <div class="line"></div>
    </div>
  </div>
</div>`} 
                cssCode={`.cinematic-forgot { position: relative; display: flex; align-items: center; justify-content: center; min-height: 600px; background: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop') center/cover; border-radius: 48px; overflow: hidden; font-family: sans-serif; text-transform: uppercase; font-style: italic; }
.overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(8px); }
.content { position: relative; z-index: 10; width: 100%; max-width: 448px; padding: 64px; text-align: center; color: white; }
.icon-box { width: 80px; height: 80px; background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 40px; box-shadow: 0 25px 50px rgba(0,0,0,0.5); }
.content h1 { font-size: 48px; font-weight: 900; line-height: 1; letter-spacing: -0.05em; margin-bottom: 16px; }
.tag { font-size: 10px; font-weight: 900; color: rgba(255,255,255,0.4); letter-spacing: 0.5em; margin-bottom: 56px; }
.content input { width: 100%; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 24px; rounded: 16px; color: white; font-weight: 900; font-size: 12px; letter-spacing: 0.2em; text-align: center; outline: none; transition: 0.3s; margin-bottom: 32px; border-radius: 16px; }
.content input:focus { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); }
.content button { width: 100%; padding: 24px; background: white; color: black; border: none; border-radius: 16px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; font-size: 12px; cursor: pointer; transition: 0.3s; box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
.content button:hover { background: #f1f5f9; transform: scale(1.02); }
.footer { display: flex; align-items: center; justify-content: center; gap: 16px; margin-top: 64px; }
.footer .line { height: 1px; width: 48px; background: rgba(255,255,255,0.1); }
.footer a { font-size: 10px; font-weight: 900; color: rgba(255,255,255,0.3); text-decoration: none; letter-spacing: 0.2em; transition: 0.3s; }
.footer a:hover { color: white; }`} 
              />
            </div>
            <div className="p-12">
                <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] block text-center mb-12 border-b border-indigo-50 pb-6 italic leading-none"> 10. Cinematic Image Overlay </span>
                <ForgotOverlay />
            </div>
          </section>

        </div>
      </div>
    );
};

export default ForgotPasswordGallery;