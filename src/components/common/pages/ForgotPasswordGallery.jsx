import React, { useState } from 'react';

// --- Shared Icons ---
const LockIcon = () => (
  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
);

const MailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);

// --- 1. The Standard SaaS (Center Card) ---
export const ForgotStandard = () => (
  <div className="flex flex-col items-center justify-center h-[600px] w-full bg-slate-50 border border-slate-200 rounded-xl">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-8 text-center">
      <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
        <LockIcon />
      </div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Forgot Password?</h2>
      <p className="text-slate-500 mb-8 text-sm">No worries, we'll send you reset instructions.</p>
      
      <form className="text-left space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
        </div>
        <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">
          Reset Password
        </button>
      </form>
      
      <div className="mt-6">
        <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center justify-center gap-2">
          <span>←</span> Back to log in
        </a>
      </div>
    </div>
  </div>
);

// --- 2. The Interactive Success State ---
export const ForgotInteractive = () => {
  const [isSent, setIsSent] = useState(false);

  return (
    <div className="flex items-center justify-center h-[600px] w-full bg-white rounded-xl border border-gray-100">
      <div className="w-full max-w-sm p-6">
        {!isSent ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Reset password</h1>
            <p className="text-gray-500 mb-8">Enter the email associated with your account and we'll send an email with instructions to reset your password.</p>
            <div className="space-y-4">
              <input type="email" placeholder="Email address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
              <button onClick={() => setIsSent(true)} className="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors">
                Send Instructions
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center animate-in fade-in zoom-in duration-500">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <MailIcon />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Check your email</h2>
            <p className="text-gray-500 mb-8">We have sent a password reset link to your email.</p>
            <button className="w-full py-3 bg-gray-100 text-gray-900 rounded-lg font-bold hover:bg-gray-200 transition-colors mb-4">
              Open Email App
            </button>
            <button onClick={() => setIsSent(false)} className="text-sm text-indigo-600 font-medium hover:underline">
              Skip, I'll confirm later
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// --- 3. The Split Screen (Visual) ---
export const ForgotSplit = () => (
  <div className="flex h-[600px] w-full rounded-xl overflow-hidden shadow-lg border border-gray-100">
    <div className="w-1/2 bg-slate-900 p-12 text-white flex flex-col justify-center relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-3xl font-bold mb-4">Account Recovery</h3>
        <p className="text-slate-300">Don't worry, it happens to the best of us. Securely recover your account in just a few clicks.</p>
      </div>
      {/* Abstract Rings */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 border-8 border-slate-700 rounded-full"></div>
      <div className="absolute -bottom-12 -left-12 w-64 h-64 border-8 border-slate-800 rounded-full"></div>
    </div>
    <div className="w-1/2 bg-white p-12 flex flex-col justify-center">
      <form className="space-y-6">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
          <input type="email" className="w-full border-b-2 border-gray-200 py-3 text-lg focus:border-slate-900 outline-none transition-colors" placeholder="name@company.com" />
        </div>
        <button className="w-full bg-slate-900 text-white py-4 font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors">
          Send Link
        </button>
      </form>
      <div className="mt-8 text-center">
        <a href="#" className="text-xs text-gray-400 hover:text-gray-900 uppercase font-bold tracking-wider">Back to Login</a>
      </div>
    </div>
  </div>
);

// --- 4. The Glassmorphism (Vibrant) ---
export const ForgotGlass = () => (
  <div className="relative flex items-center justify-center h-[600px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
    <div className="relative bg-white/20 backdrop-blur-xl border border-white/30 p-10 rounded-3xl shadow-2xl w-full max-w-sm text-center">
      <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-md">Unlock Account</h2>
      <p className="text-white/80 text-sm mb-8">Enter your email to receive a magic link.</p>
      
      <div className="space-y-4">
        <input type="email" placeholder="Email Address" className="w-full px-5 py-3 rounded-full bg-white/30 border border-white/40 text-white placeholder-white/70 focus:bg-white/40 focus:border-white outline-none transition-all text-center" />
        <button className="w-full py-3 bg-white text-pink-600 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
          Send Magic Link
        </button>
      </div>
      
      <button className="mt-8 text-white/80 text-sm hover:text-white font-medium underline decoration-white/50">
        Return to Sign In
      </button>
    </div>
  </div>
);

// --- 5. The Cyberpunk (Terminal) ---
export const ForgotCyberpunk = () => (
  <div className="flex items-center justify-center h-[600px] w-full bg-black rounded-xl border border-gray-800 p-4">
    <div className="w-full max-w-md border-2 border-green-500 p-1 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
      <div className="bg-gray-900 p-8 border border-green-900/50">
        <h2 className="text-2xl font-mono font-bold text-green-500 mb-6 flex items-center gap-2">
          <span className="animate-pulse">_</span> PASSWORD_RESET
        </h2>
        
        <div className="space-y-6">
          <div className="font-mono text-xs text-gray-400">
            &gt; INITIATING RECOVERY PROTOCOL...<br/>
            &gt; PLEASE IDENTIFY USER.
          </div>
          
          <div className="relative group">
            <span className="absolute left-3 top-2.5 text-green-700 font-mono">&gt;</span>
            <input type="email" placeholder="ENTER_EMAIL" className="w-full bg-black border border-gray-700 text-green-400 pl-8 pr-4 py-2 focus:border-green-500 focus:outline-none font-mono placeholder-gray-800 uppercase" />
          </div>

          <button className="w-full py-3 bg-green-900/20 border border-green-500 text-green-500 font-mono font-bold uppercase hover:bg-green-500 hover:text-black transition-all">
            [ EXECUTE_RESET ]
          </button>
        </div>
      </div>
    </div>
  </div>
);

// --- 6. The Minimalist (Clean) ---
export const ForgotMinimal = () => (
  <div className="flex flex-col items-center justify-center h-[600px] w-full bg-white rounded-xl">
    <div className="w-full max-w-sm px-6">
      <div className="mb-12">
        <h1 className="text-5xl font-light text-gray-900 tracking-tighter mb-4">Reset.</h1>
        <div className="h-1 w-12 bg-black"></div>
      </div>
      
      <form className="space-y-10">
        <div className="relative">
          <input type="email" id="min-email" className="peer w-full py-2 border-b border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-black transition-colors bg-transparent" placeholder="Email" />
          <label htmlFor="min-email" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-xs">Email Address</label>
        </div>
        
        <div className="flex items-center justify-between">
          <a href="#" className="text-sm text-gray-400 hover:text-black transition-colors">Cancel</a>
          <button className="px-8 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
);

// --- 7. The Neumorphic (Soft) ---
export const ForgotNeumorphic = () => (
  <div className="flex items-center justify-center h-[600px] w-full bg-[#e0e5ec] rounded-xl">
    <div className="w-full max-w-sm p-8 rounded-[30px] bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center">
      <div className="w-16 h-16 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] mx-auto mb-6 flex items-center justify-center text-gray-500">
        ?
      </div>
      
      <h2 className="text-xl font-bold text-gray-600 mb-6">Trouble logging in?</h2>
      
      <div className="rounded-xl bg-[#e0e5ec] p-3 shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] mb-6">
        <input type="email" placeholder="Enter your email" className="w-full bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 px-2 text-center" />
      </div>
      
      <button className="w-full py-3 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] active:scale-95 transition-all">
        Send Link
      </button>
    </div>
  </div>
);

// --- 8. The SMS Alternative (Mobile Style) ---
export const ForgotSMS = () => {
  const [method, setMethod] = useState('email'); // 'email' or 'sms'

  return (
    <div className="flex items-center justify-center h-[600px] w-full bg-gray-50 rounded-xl">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Forgot Password</h2>
          <p className="text-gray-500 text-sm mb-6">Select which contact details should we use to reset your password.</p>
          
          <div className="space-y-3 mb-8">
            <button 
              onClick={() => setMethod('sms')}
              className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${method === 'sms' ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-gray-100 hover:border-gray-200'}`}
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">📱</div>
              <div>
                <div className="text-xs text-gray-500 font-medium">via SMS</div>
                <div className="text-sm font-bold text-gray-900">•••• ••• 582</div>
              </div>
            </button>

            <button 
              onClick={() => setMethod('email')}
              className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${method === 'email' ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-gray-100 hover:border-gray-200'}`}
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">📧</div>
              <div>
                <div className="text-xs text-gray-500 font-medium">via Email</div>
                <div className="text-sm font-bold text-gray-900">•••••@gmail.com</div>
              </div>
            </button>
          </div>

          <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 9. The Brutalist (Urgent) ---
export const ForgotBrutalist = () => (
  <div className="flex items-center justify-center h-[600px] w-full bg-yellow-400 rounded-xl border-4 border-black">
    <div className="w-full max-w-md bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="bg-black text-white text-xl font-black p-2 mb-6 uppercase inline-block">
        Recovery Mode
      </div>
      <h2 className="text-4xl font-black uppercase mb-2">Password<br/>Lost?</h2>
      <p className="font-bold text-sm mb-8">Enter your registered email immediately.</p>
      
      <form className="space-y-4">
        <input type="email" placeholder="EMAIL ADDRESS" className="w-full p-4 border-4 border-black font-bold focus:outline-none focus:bg-yellow-100 placeholder-black/50" />
        
        <button className="w-full py-4 bg-black text-white font-black text-xl border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors uppercase">
          RESET NOW
        </button>
      </form>
    </div>
  </div>
);

// --- 10. The Background Overlay ---
export const ForgotOverlay = () => (
  <div className="relative flex h-[600px] w-full rounded-xl overflow-hidden">
    <img src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Background" />
    <div className="absolute inset-0 bg-gray-900/60"></div>
    
    <div className="relative z-10 w-full max-w-md m-auto bg-white/90 backdrop-blur rounded-lg p-10 shadow-2xl">
      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Reset Password</h2>
      <p className="text-gray-600 mb-6 text-sm">We will send you a link to reset your password.</p>
      
      <div className="relative mb-6">
        <input type="email" className="w-full border-b border-gray-300 py-2 bg-transparent focus:border-black outline-none transition-colors" placeholder="Email Address" />
      </div>
      
      <div className="flex items-center justify-between">
        <button className="px-6 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors">
          Send Link
        </button>
        <a href="#" className="text-xs text-gray-500 hover:text-black transition-colors">Back to Login</a>
      </div>
    </div>
  </div>
);


// --- Main Gallery ---
const ForgotPasswordGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Forgot Password Designs</h1>
        <p className="text-slate-500">Recovery flows for every style.</p>
      </div>
      
      <div className=" max-w-6xl mx-auto">
        
        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">01. Standard SaaS</span>
          <ForgotStandard />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">02. Interactive Success</span>
          <ForgotInteractive />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">03. Visual Split</span>
          <ForgotSplit />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">04. Glassmorphism</span>
          <ForgotGlass />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">05. Cyberpunk</span>
          <ForgotCyberpunk />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">06. Minimalist Typography</span>
          <ForgotMinimal />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">07. Neumorphic</span>
          <ForgotNeumorphic />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">08. SMS/Email Option</span>
          <ForgotSMS />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">09. Brutalist</span>
          <ForgotBrutalist />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">10. Image Overlay</span>
          <ForgotOverlay />
        </section>

      </div>
    </div>
  );
};

export default ForgotPasswordGallery;