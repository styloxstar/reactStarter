import React, { useState } from 'react';
import CopyButton from '../CopyButton';

// --- Components ---

export const ForgotStandard = () => (
    <div className="flex flex-col items-center justify-center min-h-[600px] w-full bg-slate-50 border border-slate-200 rounded-3xl p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-8 text-center text-slate-800 relative overflow-hidden">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl relative z-10 shadow-inner italic">🔑</div>
            <h2 className="text-2xl font-bold mb-2">Forgot Password?</h2>
            <p className="text-slate-500 mb-8 text-sm leading-relaxed">No worries, we'll send you reset instructions to your registered email.</p>
            <form className="text-left space-y-5">
                <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-4 focus:ring-blue-600/10 outline-none shadow-sm transition-all focus:border-blue-600 font-medium" />
                </div>
                <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-[0.98] uppercase tracking-widest text-xs">Reset Password</button>
            </form>
            <p className="mt-8 text-sm text-slate-400 font-medium text-center">Remember your password? <a href="#" className="text-blue-600 font-black hover:underline underline-offset-4">Log in</a></p>
        </div>
    </div>
);

export const ForgotInteractive = () => {
  const [isSent, setIsSent] = useState(false);
  return (
    <div className="flex items-center justify-center min-h-[600px] w-full bg-white rounded-3xl border border-gray-100 p-8 font-sans text-slate-800">
      {!isSent ? (
        <div className="w-full max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter italic">Reset password</h1>
          <p className="text-gray-500 mb-10 text-[10px] uppercase font-black tracking-[0.4em] text-[#6366f1] leading-none">Verification Required</p>
          <div className="space-y-6">
            <div className="relative group">
                <input type="email" placeholder="Email address" className="w-full px-5 py-4 border-2 border-gray-100 rounded-2xl focus:border-indigo-600 outline-none shadow-sm transition-all text-lg font-medium" />
                <div className="absolute inset-0 rounded-2xl ring-4 ring-indigo-600/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity"></div>
            </div>
            <button onClick={() => setIsSent(true)} className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-95 text-xs leading-none">Send Instructions</button>
          </div>
        </div>
      ) : (
        <div className="text-center animate-in fade-in zoom-in duration-500">
          <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center mx-auto mb-10 text-4xl shadow-inner shadow-blue-200 rotate-3">📧</div>
          <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight italic">Check email</h2>
          <p className="text-gray-500 mb-10 text-lg font-medium leading-relaxed max-w-xs mx-auto italic">Magic link sent! Open the app to reset your secure credentials.</p>
          <button onClick={() => setIsSent(false)} className="px-10 py-4 rounded-full border-2 border-slate-100 text-slate-400 font-black tracking-widest uppercase text-[10px] hover:border-indigo-600 hover:text-indigo-600 transition-all italic leading-none">Resend Magic Link</button>
        </div>
      )}
    </div>
  );
};

export const ForgotSplit = () => (
  <div className="flex min-h-[650px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-50 bg-white italic font-sans uppercase">
    <div className="hidden md:flex w-1/2 bg-slate-900 p-16 text-white flex-col justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950">
      <div className="relative z-10 text-nowrap">
        <div className="w-12 h-1 bg-blue-500 mb-10"></div>
        <h3 className="text-5xl font-black mb-6 tracking-tighter text-white leading-[0.9]">Account<br/>Recovery.</h3>
        <p className="text-slate-400 text-lg leading-relaxed font-medium not-italic lowercase">Verify your identity to regain secure access to your portal.</p>
      </div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 border-[40px] border-white/5 rounded-full blur-sm"></div>
    </div>
    <div className="w-full md:w-1/2 p-16 flex flex-col justify-center bg-white">
      <form className="space-y-12 max-w-sm mx-auto w-full">
        <div className="space-y-4">
            <h2 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] mb-4">Portal Access Flow</h2>
            <div className="space-y-3">
                <label className="block text-[10px] font-black text-slate-300 mb-2 uppercase tracking-widest">Authorized Email</label>
                <input type="email" className="w-full border-b-2 border-slate-100 py-4 text-2xl focus:border-indigo-600 outline-none transition-all font-black placeholder-slate-100" placeholder="your@email.com" />
            </div>
        </div>
        <button className="w-full bg-slate-900 text-white py-6 font-black uppercase tracking-[0.3em] hover:bg-black transition-all shadow-2xl rounded-2xl active:scale-[0.98] text-xs">Send Secure Link</button>
      </form>
    </div>
  </div>
);

export const ForgotGlass = () => (
  <div className="relative flex items-center justify-center min-h-[600px] w-full overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#ff3366] via-[#6a4cff] to-[#00d2ff] p-6 text-white font-sans uppercase italic">
    <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]"></div>
    <div className="bg-white/10 backdrop-blur-3xl border border-white/30 p-16 rounded-[50px] shadow-[0_40px_80px_rgba(0,0,0,0.3)] w-full max-w-md text-center relative z-10 transition-transform hover:scale-[1.01] duration-500">
      <div className="w-20 h-20 bg-white shadow-xl rounded-[2rem] flex items-center justify-center mx-auto mb-10 text-3xl italic">🔑</div>
      <h2 className="text-4xl font-black mb-4 tracking-tighter">Unlock Access</h2>
      <p className="text-white/70 text-[10px] mb-12 font-bold uppercase tracking-[0.3em] leading-none">Magic recovery link portal</p>
      <div className="space-y-8">
          <input type="email" placeholder="ACCESS IDENTIFIER" className="w-full px-8 py-5 rounded-[2rem] bg-white/10 border border-white/20 text-white placeholder-white/20 outline-none text-center focus:bg-white/20 transition-all font-black text-xs tracking-widest uppercase" />
          <button className="w-full py-5 bg-white text-[#6a4cff] font-black rounded-[2rem] shadow-2xl hover:scale-[1.03] active:scale-95 transition-all uppercase tracking-[0.4em] text-[10px]">Send Portal Link</button>
      </div>
    </div>
  </div>
);

export const ForgotCyberpunk = () => (
    <div className="flex items-center justify-center min-h-[500px] w-full bg-black rounded-3xl border border-green-500/10 p-6 font-mono text-green-500 uppercase">
      <div className="w-full max-w-md border-2 border-green-500/50 p-12 text-green-500 bg-emerald-950/20 shadow-[0_0_80px_rgba(34,197,94,0.1)] relative group">
        <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-green-400"></div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-green-400"></div>
        <h2 className="text-2xl font-black mb-12 flex items-center gap-4 italic overflow-hidden">
            <span className="text-[10px] bg-green-500 text-black px-3 py-1.5 not-italic font-bold tracking-tighter uppercase whitespace-nowrap italic leading-none">sys: alert</span>
            RECOVERY_PROTOCOL_V3
        </h2>
        <div className="space-y-12 text-nowrap">
          <div className="relative">
            <div className="text-[10px] mb-3 font-bold opacity-30 uppercase tracking-[0.3em] italic leading-none">{">"} identity_input_field</div>
            <input type="email" placeholder="USER_HEX_HASH" className="w-full bg-transparent border-b-2 border-green-900/50 text-green-400 p-4 outline-none focus:border-green-500 transition-colors uppercase font-black placeholder-green-900/30 text-xl tracking-widest" />
          </div>
          <button className="w-full p-6 bg-green-500 text-black font-black hover:bg-green-400 hover:shadow-[0_0_50px_rgba(34,197,94,0.8)] transition-all uppercase tracking-[0.4em] active:scale-95 text-xs italic leading-none border-t-2 border-green-300/30">EXECUTE_SESSION_WIPE</button>
        </div>
      </div>
    </div>
);

export const ForgotMinimal = () => (
    <div className="flex flex-col items-center justify-center min-h-[500px] w-full bg-white rounded-3xl p-10 font-serif border border-slate-50 italic">
      <div className="w-full max-w-sm text-slate-900">
        <h1 className="text-7xl font-extralight mb-20 tracking-tighter leading-none italic uppercase">Recovery.</h1>
        <form className="space-y-16">
          <div className="group relative">
            <input type="email" className="w-full py-4 bg-transparent border-b-2 border-slate-100 focus:border-black outline-none text-2xl placeholder-slate-200 transition-all italic leading-tight font-light" placeholder="The email address..." />
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-focus-within:w-full transition-all duration-500"></div>
          </div>
          <button className="w-full py-5 bg-black text-white text-[10px] font-black rounded-full hover:bg-gray-800 transition-all shadow-2xl tracking-[0.4em] uppercase italic leading-none">Begin Process</button>
        </form>
      </div>
    </div>
);

export const ForgotNeumorphic = () => (
    <div className="flex items-center justify-center min-h-[600px] w-full bg-[#E0E5EC] rounded-3xl p-8 font-sans uppercase">
      <div className="w-full max-w-sm p-14 rounded-[50px] bg-[#E0E5EC] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center text-slate-500">
        <div className="w-24 h-24 bg-[#E0E5EC] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] rounded-[2rem] mx-auto mb-14 flex items-center justify-center">
            <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600 text-3xl font-black shadow-inner shadow-indigo-500/20 italic leading-none">?</div>
        </div>
        <h2 className="text-xs font-black mb-12 text-slate-400 uppercase tracking-[0.3em] leading-none italic">Access Node</h2>
        <div className="space-y-10">
            <input type="email" placeholder="Identity Hash" className="w-full bg-[#E0E5EC] p-5 rounded-2xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] outline-none text-center font-black placeholder-slate-300 focus:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all text-xs tracking-widest uppercase italic leading-none border-none" />
            <button className="w-full py-6 rounded-2xl bg-[#E0E5EC] text-indigo-600 font-black shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all uppercase tracking-[0.3em] text-[10px] leading-none italic">Authorize</button>
        </div>
      </div>
    </div>
);

export const ForgotSMS = () => {
  const [method, setMethod] = useState('email');
  return (
    <div className="flex items-center justify-center min-h-[600px] w-full bg-slate-50 rounded-[3rem] p-8 font-sans text-slate-900 border border-slate-100 uppercase italic">
      <div className="w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-10 font-sans italic">
        <h2 className="text-2xl font-black mb-10 tracking-tight text-slate-800 leading-none">Forgot Password</h2>
        <div className="space-y-4 mb-12">
          <button onClick={() => setMethod('sms')} className={`w-full flex items-center gap-5 p-6 rounded-3xl border-2 transition-all group ${method === 'sms' ? 'border-blue-600 bg-blue-50 ring-4 ring-blue-600/5' : 'border-slate-50'}`}>
            <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl transition-transform group-hover:rotate-12 not-italic">📱</div>
            <div className="text-left">
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-2">via SMS</div>
              <div className="font-black text-sm text-slate-800 tracking-tighter not-italic whitespace-nowrap leading-none">•••• ••• 582</div>
            </div>
          </button>
          <button onClick={() => setMethod('email')} className={`w-full flex items-center gap-5 p-6 rounded-3xl border-2 transition-all group ${method === 'email' ? 'border-blue-600 bg-blue-50 ring-4 ring-blue-600/5' : 'border-slate-50'}`}>
            <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl transition-transform group-hover:rotate-12 not-italic">📧</div>
            <div className="text-left">
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-2">via Email</div>
              <div className="font-black text-sm text-slate-800 tracking-tighter not-italic whitespace-nowrap leading-none">•••••@gmail.com</div>
            </div>
          </button>
        </div>
        <button className="w-full py-6 bg-blue-600 text-white font-black rounded-3xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 uppercase tracking-[0.3em] text-[10px] leading-none">Continue Access</button>
      </div>
    </div>
  );
};

export const ForgotBrutalist = () => (
    <div className="flex items-center justify-center min-h-[500px] w-full bg-[#FFDE00] rounded-3xl border-4 border-black p-6 font-sans text-slate-900 uppercase italic">
      <div className="w-full max-w-md bg-white border-[8px] border-black p-12 shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all hover:translate-x-6 hover:translate-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-black text-white px-6 py-2 font-black text-xl italic translate-x-2 -translate-y-1">RECOVER!</div>
        <h2 className="text-7xl font-black mb-12 leading-[0.8] tracking-tighter italic italic">Password<br/>Gone?</h2>
        <div className="space-y-4">
            <label className="text-[10px] font-black tracking-[0.3em] block ml-1 leading-none italic">YOUR EMAIL ADDRESS</label>
            <input type="email" placeholder="YOU@DOMAIN.COM" className="w-full p-6 border-[8px] border-black font-black mb-8 outline-none focus:bg-yellow-200 text-xl placeholder-slate-200 italic" />
        </div>
        <button className="w-full py-6 bg-black text-white font-black text-3xl hover:bg-yellow-400 hover:text-black border-[8px] border-black transition-colors italic shadow-[12px_12px_0px_0px_rgba(255,222,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 leading-none italic">RESET NOW!!!</button>
      </div>
    </div>
);

export const ForgotOverlay = () => (
    <div className="relative flex min-h-[650px] w-full rounded-[3rem] overflow-hidden font-sans border-[12px] border-white shadow-2xl italic uppercase">
      <img src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover scale-110 grayscale brightness-50" alt="Background" />
      <div className="relative z-10 m-auto bg-white p-14 rounded-[60px] w-full max-w-md shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-b-[12px] border-r-[12px] border-slate-100 text-slate-900 group h-fit">
        <div className="w-12 h-1 bg-black mb-10 group-hover:w-24 transition-all duration-700"></div>
        <h2 className="text-5xl font-black mb-6 tracking-tighter italic font-serif leading-none italic uppercase">Recover.</h2>
        <p className="text-slate-400 mb-12 text-[10px] font-black uppercase tracking-[0.4em] leading-none italic">Security identity portal</p>
        <div className="space-y-12">
            <div className="relative">
                <input type="email" className="w-full border-b-2 border-slate-100 py-5 bg-transparent outline-none focus:border-black transition-all text-2xl font-black placeholder-slate-200 italic leading-none" placeholder="your@access.email" />
            </div>
            <button className="w-full py-7 bg-black text-white font-black rounded-[40px] hover:bg-slate-800 transition-all shadow-2xl uppercase tracking-[0.5em] text-[10px] leading-none italic">Finalize Flow</button>
        </div>
      </div>
    </div>
);

// --- Main Gallery ---
const ForgotPasswordGallery = () => {
    return (
      <div className="container bg-slate-50 p-6 md:p-12 font-sans pb-40">
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
                jsxCode={`<div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-8 text-center text-slate-800 relative">
  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl shadow-inner">🔑</div>
  <h2 className="text-2xl font-bold mb-2">Forgot Password?</h2>
  <p className="text-slate-500 mb-8 text-sm leading-relaxed">No worries, we'll send you reset instructions to your registered email.</p>
  <form className="text-left space-y-4">
    <div className="space-y-1">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
      <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none shadow-sm transition-all" />
    </div>
    <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 uppercase tracking-widest text-xs">Reset Password</button>
  </form>
  <p className="mt-6 text-sm text-slate-400 font-medium">Remember it? <a href="#" className="text-blue-600 font-bold hover:underline">Log in</a></p>
</div>`} 
                htmlCode={`<div class="forgot-card">
  <div class="icon-box">🔑</div>
  <h2>Forgot Password?</h2>
  <p>No worries, we'll send you reset instructions.</p>
  <form>
    <div class="field">
      <label>Email Address</label>
      <input type="email" placeholder="Enter your email">
    </div>
    <button type="submit">Reset Password</button>
  </form>
  <div class="footer">Remember it? <a href="#">Log in</a></div>
</div>`} 
                cssCode={`.forgot-card { background: white; padding: 32px; border-radius: 16px; border: 1px solid #f1f5f9; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); text-align: center; font-family: sans-serif; }
.icon-box { background: #eff6ff; width: 64px; height: 64px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; font-size: 24px; }
.field { text-align: left; margin-bottom: 16px; }
label { font-size: 10px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 4px; }
input { width: 100%; padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; outline: none; }
input:focus { border-color: #2563eb; }
button { width: 100%; padding: 12px; background: #2563eb; color: white; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; font-size: 12px; }
.footer { margin-top: 24px; font-size: 14px; color: #94a3b8; }`} 
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
                jsxCode={`const [isSent, setIsSent] = useState(false);
return (
  <div className="w-full max-w-sm">
    {!isSent ? (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Reset password</h1>
        <p className="text-slate-500 mb-10 text-xs uppercase font-black tracking-[0.4em] text-indigo-600 leading-none">Verification Required</p>
        <div className="space-y-6">
          <input type="email" placeholder="Email address" className="w-full px-5 py-4 border-2 border-slate-100 rounded-2xl focus:border-indigo-600 outline-none shadow-sm transition-all" />
          <button onClick={() => setIsSent(true)} className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 leading-none text-xs">Send Instructions</button>
        </div>
      </div>
    ) : (
      <div className="text-center animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center mx-auto mb-10 text-4xl shadow-inner shadow-blue-200">📧</div>
        <h2 className="text-3xl font-black text-slate-900 mb-4">Check email</h2>
        <p className="text-slate-500 mb-10 text-lg font-medium italic">We teleported a reset link to your inbox!</p>
        <button onClick={() => setIsSent(false)} className="px-10 py-4 rounded-full border-2 border-slate-100 text-slate-400 font-black tracking-widest uppercase text-[10px] hover:border-indigo-600 hover:text-indigo-600 transition-all leading-none">Resend Magic Link</button>
      </div>
    )}
  </div>
)`} 
                htmlCode={`<div class="forgot-card">
  <div class="icon-box">🔑</div>
  <h2>Forgot Password?</h2>
  <p>No worries, we'll send you reset instructions.</p>
  <form>
    <div class="field">
      <label>Email Address</label>
      <input type="email" placeholder="Enter your email">
    </div>
    <button type="submit">Reset Password</button>
  </form>
  <div class="footer">Remember it? <a href="#">Log in</a></div>
</div>`} 
                cssCode={`.forgot-card { background: white; padding: 32px; border-radius: 16px; border: 1px solid #f1f5f9; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); text-align: center; font-family: sans-serif; }
.icon-box { background: #eff6ff; width: 64px; height: 64px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; font-size: 24px; }
.field { text-align: left; margin-bottom: 16px; }
label { font-size: 10px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 4px; }
input { width: 100%; padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; outline: none; }
input:focus { border-color: #2563eb; }
button { width: 100%; padding: 12px; background: #2563eb; color: white; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; font-size: 12px; }
.footer { margin-top: 24px; font-size: 14px; color: #94a3b8; }`} 
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
                jsxCode={`<div className="flex h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-50 bg-white">
  <div className="hidden md:flex w-1/2 bg-slate-900 p-16 text-white flex-col justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950">
    <div className="relative z-10 italic">
      <div className="w-12 h-1 bg-blue-500 mb-10"></div>
      <h3 className="text-5xl font-black mb-6 tracking-tighter leading-[0.9]">Account<br/>Recovery.</h3>
      <p className="text-slate-400 text-lg leading-relaxed font-medium not-italic">Verify your identity to regain secure access to your portal.</p>
    </div>
    <div className="absolute -bottom-24 -left-24 w-80 h-80 border-[40px] border-white/5 rounded-full blur-sm"></div>
  </div>
  <div className="w-full md:w-1/2 p-16 flex flex-col justify-center">
    <form className="space-y-12 max-w-sm mx-auto w-full italic">
      <div className="space-y-4">
        <h2 className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.5em]">Portal Access Flow</h2>
        <input type="email" className="w-full border-b-2 border-slate-100 py-4 text-2xl focus:border-indigo-600 outline-none transition-all font-black" placeholder="your@email.com" />
      </div>
      <button className="w-full bg-slate-900 text-white py-6 font-black uppercase tracking-[0.3em] hover:bg-black transition-all shadow-2xl rounded-2xl text-xs leading-none">Send Secure Link</button>
    </form>
  </div>
</div>`} 
                htmlCode={`<div class="split-forgot">
  <div class="info-pane">
    <h1>Account Recovery.</h1>
  </div>
  <div class="form-pane">
    <form>
      <label>Email Address</label>
      <input type="email" placeholder="your@email.com">
      <button type="submit">SEND SECURE LINK</button>
    </form>
  </div>
</div>`} 
                cssCode={`.split-forgot { display: flex; height: 600px; border-radius: 40px; overflow: hidden; background: white; box-shadow: 0 25px 50px rgba(0,0,0,0.1); }
.info-pane { width: 50%; background: #0f172a; color: white; display: flex; align-items: center; padding: 64px; }
.form-pane { width: 50%; display: flex; align-items: center; padding: 64px; }`} 
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
                jsxCode={`<ForgotGlass />`} 
                htmlCode={`<div class="glass-bg">...</div>`} 
                cssCode={`.glass-bg { backdrop-filter: blur(40px); }`} 
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
                jsxCode={`<div className="flex items-center justify-center min-h-[500px] w-full bg-black rounded-3xl border border-green-500/10 p-6 font-mono text-green-500">
  <div className="w-full max-w-md border-2 border-green-500/50 p-12 text-green-500 bg-emerald-950/20 shadow-[0_0_80px_rgba(34,197,94,0.1)] relative">
    <h2 className="text-2xl font-black mb-12 flex items-center gap-4 italic uppercase tracking-widest leading-none">
        RECOVERY_PROTOCOL_V3
    </h2>
    <div className="space-y-12">
      <input type="email" placeholder="USER_HEX_HASH" className="w-full bg-transparent border-b-2 border-green-900/50 text-green-400 p-4 outline-none focus:border-green-500 transition-colors uppercase font-black tracking-widest text-xl" />
      <button className="w-full p-6 bg-green-500 text-black font-black hover:bg-green-400 hover:shadow-[0_0_50px_rgba(34,197,94,0.8)] transition-all uppercase tracking-[0.4em] active:scale-95 text-xs italic leading-none">EXECUTE_WIPE</button>
    </div>
  </div>
</div>`} 
                htmlCode={`<div class="terminal">...</div>`} 
                cssCode={`.terminal { background: black; }`} 
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
                jsxCode={`<ForgotMinimal />`} 
                htmlCode={`<div class="minimal">...</div>`} 
                cssCode={`.minimal { font-family: serif; font-style: italic; }`} 
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
                jsxCode={`<ForgotNeumorphic />`} 
                htmlCode={`<div class="neu">...</div>`} 
                cssCode={`.neu { box-shadow: 20px 20px ...; }`} 
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
                  jsxCode={`const [method, setMethod] = useState('email');
return (
  <div className="w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-10 font-sans italic">
    <h2 className="text-3xl font-black mb-10 tracking-tight text-slate-800 leading-none">Forgot Password</h2>
    <div className="space-y-4 mb-12">
      <button onClick={() => setMethod('sms')} className={\`w-full flex items-center gap-5 p-6 rounded-3xl border-2 transition-all group \${method === 'sms' ? 'border-blue-600 bg-blue-50 ring-4 ring-blue-600/5' : 'border-slate-50'}\`}>
        <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl not-italic">📱</div>
        <div className="text-left">
          <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1.5 leading-none">via SMS</div>
          <div className="font-black text-base text-slate-800 leading-none">•••• ••• 582</div>
        </div>
      </button>
      <button onClick={() => setMethod('email')} className={\`w-full flex items-center gap-5 p-6 rounded-3xl border-2 transition-all group \${method === 'email' ? 'border-blue-600 bg-blue-50 ring-4 ring-blue-600/5' : 'border-slate-50'}\`}>
        <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl not-italic">📧</div>
        <div className="text-left">
          <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1.5 leading-none">via Email</div>
          <div className="font-black text-base text-slate-800 leading-none">•••••@gmail.com</div>
        </div>
      </button>
    </div>
    <button className="w-full py-6 bg-blue-600 text-white font-black rounded-3xl hover:bg-blue-700 transition-all uppercase tracking-[0.3em] text-[10px] leading-none italic">Continue Access</button>
  </div>
)`} 
                  htmlCode={`<div class="sms-gate">...</div>`} 
                  cssCode={`.sms-gate { padding: 40px; }`} 
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
                jsxCode={`<ForgotBrutalist />`} 
                htmlCode={`<div class="brutal-box">...</div>`} 
                cssCode={`.brutal-box { border: 8px solid black; }`} 
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
                jsxCode={`<ForgotOverlay />`} 
                htmlCode={`<div class="img-overlay">...</div>`} 
                cssCode={`.img-overlay { position: relative; }`} 
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