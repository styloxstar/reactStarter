import React, { useState } from 'react';
import CopyButton from '../CopyButton';

// --- Shared Icons ---
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);

// --- 1. SaaS Split ---
export const RegisterSaaS = () => (
  <div className="flex h-[730px] w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xl font-sans">
    <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
      <p className="text-gray-500 mb-8">Start your 30-day free trial. No credit card required.</p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input type="text" placeholder="John Doe" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" placeholder="john@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input type="password" placeholder="Create a password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          <p className="text-xs text-gray-400 mt-1">Must be at least 8 characters.</p>
        </div>
        <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Get Started</button>
        <button className="w-full py-3 border border-gray-300 rounded-lg font-medium text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
          <GoogleIcon />
          Sign up with Google
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-gray-600">Already have an account? <a href="#" className="text-blue-600 font-medium hover:underline">Log in</a></p>
    </div>
    <div className="hidden md:flex w-1/2 bg-slate-900 p-12 flex-col justify-center text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-6">Join 10,000+ users</h2>
        <ul className="space-y-4 mb-12">
          <li className="flex items-center gap-3"><CheckIcon /> Unlimited Projects</li>
          <li className="flex items-center gap-3"><CheckIcon /> Analytics Dashboard</li>
          <li className="flex items-center gap-3"><CheckIcon /> 24/7 Priority Support</li>
          <li className="flex items-center gap-3"><CheckIcon /> Custom Domains</li>
        </ul>
        <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl">
          <p className="italic text-slate-300 mb-4">"The best decision we made for our development workflow. Simply stunning."</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500"></div>
            <div>
              <div className="font-bold text-sm">Alex Rivera</div>
              <div className="text-xs text-slate-500">CTO, TechFlow</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 2. Multi-Step Wizard ---
export const RegisterWizard = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="flex items-center justify-center min-h-[600px] w-full bg-gray-50 rounded-xl font-sans p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-10">
        <div className="flex gap-3 mb-10">
          <div className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= 1 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
          <div className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= 2 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
          <div className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= 3 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">{step === 1 ? 'Personal Info' : step === 2 ? 'Security' : 'Preferences'}</h2>
          <p className="text-gray-500 text-sm mt-1">Step {step} of 3</p>
        </div>

        {step === 1 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" />
            </div>
            <button onClick={() => setStep(2)} className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 mt-4">Continue</button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" placeholder="••••••••" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input type="password" placeholder="••••••••" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" />
            </div>
            <div className="flex gap-3 pt-4">
              <button onClick={() => setStep(1)} className="flex-1 py-4 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-all">Back</button>
              <button onClick={() => setStep(3)} className="flex-[2] py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">Next Step</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100 text-indigo-700 text-sm">
              Almost there! Set your account preferences to finish.
            </div>
            <label className="flex items-center gap-3 p-3 border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-50">
              <input type="checkbox" className="w-5 h-5 rounded text-indigo-600" />
              <span className="text-sm text-gray-600">Subscribe to newsletter</span>
            </label>
            <div className="flex gap-3 pt-4">
              <button onClick={() => setStep(2)} className="flex-1 py-4 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-all">Back</button>
              <button className="flex-[2] py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">Complete Registration</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- 3. Plan Context ---
export const RegisterPlan = () => (
  <div className="flex items-center justify-center min-h-[600px] w-full bg-slate-50 rounded-xl font-sans p-8">
    <div className="w-full max-w-md shadow-2xl rounded-2xl overflow-hidden group">
      <div className="bg-slate-900 text-white p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.45l8.27 14.3H3.73L12 5.45z"/></svg>
        </div>
        <div className="relative z-10 flex justify-between items-end">
          <div>
            <div className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-1">Current Selection</div>
            <div className="text-2xl font-bold">Pro Monthly</div>
            <div className="text-slate-400 text-sm mt-1">Billed monthly. Cancel anytime.</div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-black text-white">$29</div>
            <div className="text-xs text-slate-400 uppercase">Per Month</div>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 border-x border-b border-gray-100">
        <form className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Work Email</label>
            <input type="email" placeholder="name@company.com" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Company Size</label>
            <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all appearance-none cursor-pointer">
              <option>1-10 employees</option>
              <option>11-50 employees</option>
              <option>51-200 employees</option>
              <option>200+ employees</option>
            </select>
          </div>
          <button className="w-full py-5 bg-emerald-500 text-white font-black rounded-xl shadow-lg shadow-emerald-100 hover:bg-emerald-600 hover:shadow-emerald-200 transition-all active:scale-[0.98]">
            Complete Subscription
          </button>
          <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest">Secure Checkout Powered by Stripe</p>
        </form>
      </div>
    </div>
  </div>
);

// --- 4. Glassmorphism ---
export const RegisterGlass = () => (
  <div className="relative flex items-center justify-center h-[700px] w-full rounded-xl overflow-hidden bg-[#0a0a0c] p-4">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-fuchsia-600/30 rounded-full blur-[100px] animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-600/30 rounded-full blur-[100px] animate-pulse delay-1000"></div>
    
    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl w-full max-w-sm text-center relative z-10">
      <div className="w-16 h-16 bg-gradient-to-tr from-fuchsia-500 to-indigo-500 rounded-2xl mx-auto mb-6 rotate-12 shadow-lg shadow-fuchsia-500/20"></div>
      <h2 className="text-3xl font-bold text-white mb-2">Join the Elite</h2>
      <p className="text-white/50 mb-8 text-xs uppercase tracking-[0.2em]">Next-Gen Registration</p>
      <form className="space-y-4 text-left">
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Secure Email</label>
          <input type="email" placeholder="access@network.io" className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/20 outline-none transition-all focus:bg-white/10 focus:border-white/20" />
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Access Key</label>
          <input type="password" placeholder="••••••••" className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/20 outline-none transition-all focus:bg-white/10 focus:border-white/20" />
        </div>
        <button className="w-full py-4 bg-white text-black font-black rounded-2xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all mt-4">
          INITIALIZE ACCOUNT
        </button>
      </form>
      <p className="mt-8 text-white/30 text-xs italic">System encrypted with AES-256</p>
    </div>
  </div>
);

// --- 5. Cyberpunk ---
export const RegisterCyberpunk = () => (
  <div className="flex items-center justify-center h-[700px] w-full bg-[#050505] rounded-xl overflow-hidden border border-gray-800 font-mono p-4 relative">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20"></div>
    <div className="w-full max-w-md p-[1px] bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent rounded-sm">
      <div className="bg-[#0a0a0a] p-8 relative overflow-hidden">
        <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 border border-red-500/50 bg-red-500/20"></div>
            <div className="w-3 h-3 border border-yellow-500/50 bg-yellow-500/20"></div>
          </div>
          <div className="text-[10px] text-cyan-500/50 tracking-[0.2em]">CONNECTION_SECURE</div>
        </div>
        
        <div className="mb-8">
          <div className="text-[10px] text-gray-500 mb-1">LOCAL::AUTH_MOD</div>
          <h2 className="text-2xl font-black text-cyan-400 tracking-tighter">NEW_OPERATOR.EXE</h2>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-gray-500 text-[10px] uppercase tracking-widest">Operator ID</label>
              <span className="text-cyan-500/30 text-[10px]">REQUIRED</span>
            </div>
            <div className="relative group">
              <input type="text" className="w-full bg-black border border-gray-800 text-cyan-400 px-4 py-3 outline-none focus:border-cyan-500/50 transition-all placeholder-cyan-900" placeholder="NULL" />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-500 group-focus-within:w-full transition-all duration-500"></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-gray-500 text-[10px] uppercase tracking-widest">Access Phrase</label>
              <span className="text-cyan-500/30 text-[10px]">ENCRYPTED</span>
            </div>
            <div className="relative group">
              <input type="password" className="w-full bg-black border border-gray-800 text-cyan-400 px-4 py-3 outline-none focus:border-cyan-500/50 transition-all placeholder-cyan-900" placeholder="********" />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-500 group-focus-within:w-full transition-all duration-500"></div>
            </div>
          </div>

          <button className="w-full py-4 bg-cyan-500/5 border border-cyan-500/50 text-cyan-400 uppercase font-black tracking-[0.3em] hover:bg-cyan-500/20 hover:border-cyan-500 transition-all group relative overflow-hidden">
            <span className="relative z-10">INITIALIZE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-900 flex justify-between items-center text-[10px] text-gray-600">
          <div>NODE_420 // SYNC: OK</div>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-cyan-500 animate-ping"></div>
            ACTIVE
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 6. Social Grid ---
export const RegisterSocial = () => (
  <div className="flex items-center justify-center min-h-[650px] w-full bg-[#fdfdfd] rounded-xl p-8 shadow-inner font-sans">
    <div className="w-full max-w-sm">
      <div className="text-center mb-10">
        <div className="w-12 h-12 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white shadow-xl shadow-blue-200">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
        </div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Create Account</h1>
        <p className="text-gray-500 text-sm mt-2">Join our community of makers and creators.</p>
      </div>

      <div className="space-y-3 mb-8">
        <button className="w-full py-3.5 px-4 border border-gray-200 rounded-2xl font-bold text-gray-700 flex items-center justify-center gap-3 hover:bg-gray-50 transition-all hover:border-gray-300">
          <GoogleIcon />
          <span>Continue with Google</span>
        </button>
        <button className="w-full py-3.5 px-4 bg-black border border-black rounded-2xl font-bold text-white flex items-center justify-center gap-3 hover:bg-gray-900 transition-all shadow-lg shadow-gray-200">
          <GithubIcon />
          <span>Continue with GitHub</span>
        </button>
      </div>

      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
        <span className="relative px-4 mx-auto block w-fit bg-[#fdfdfd] text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">or use email</span>
      </div>

      <form className="space-y-4">
        <input type="email" placeholder="Email Address" className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all placeholder-gray-400" />
        <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-blue-300 transition-all active:scale-[0.98]">
          Sign Up with Email
        </button>
      </form>

      <p className="mt-8 text-center text-xs text-gray-400">
        By signing up, you agree to our <a href="#" className="text-gray-900 font-bold hover:underline">Terms of Service</a>
      </p>
    </div>
  </div>
);

// --- 7. Neumorphic ---
export const RegisterNeumorphic = () => (
  <div className="flex items-center justify-center min-h-[650px] w-full bg-[#e0e5ec] rounded-xl p-8 font-sans">
    <div className="w-full max-w-sm bg-[#e0e5ec] p-12 rounded-[50px] shadow-[20px_20px_60px_#bec3c9,-20px_-20px_60px_#ffffff] border border-white/20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black text-gray-600 tracking-tight">Register</h2>
        <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest">Secure Gateway</p>
      </div>
      <form className="space-y-8">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4">Identification</label>
          <input type="email" placeholder="email@example.com" className="w-full p-5 bg-[#e0e5ec] rounded-3xl shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] outline-none text-gray-600 placeholder-gray-400 focus:shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff] transition-all" />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4">Access Code</label>
          <input type="password" placeholder="••••••••" className="w-full p-5 bg-[#e0e5ec] rounded-3xl shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] outline-none text-gray-600 placeholder-gray-400 focus:shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff] transition-all" />
        </div>
        <button className="w-full py-5 bg-[#e0e5ec] rounded-3xl shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff] font-black text-gray-600 uppercase tracking-[0.2em] hover:shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] active:shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff] transition-all">
          Authorize
        </button>
      </form>
      <p className="mt-10 text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">Protocol v.2.0.4</p>
    </div>
  </div>
);

// --- 8. Minimalist ---
export const RegisterMinimal = () => (
  <div className="flex items-center justify-center min-h-[550px] w-full bg-white rounded-xl p-8 font-sans border border-gray-100">
    <div className="w-full max-w-xs transition-all duration-700 ease-in-out">
      <div className="mb-12">
        <h1 className="text-4xl font-light text-gray-900 mb-2 tracking-tight">Create Account.</h1>
        <p className="text-gray-400 text-[10px] tracking-[0.3em] uppercase font-bold">Step into the future.</p>
      </div>
      
      <form className="space-y-8">
        <div className="group relative">
          <input type="email" placeholder="Email" className="w-full py-3 bg-transparent border-b border-gray-100 outline-none focus:border-black transition-all duration-500 placeholder-gray-300 text-gray-900 font-light" />
          <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-focus-within:w-full transition-all duration-500"></div>
        </div>
        
        <div className="group relative">
          <input type="password" placeholder="Password" className="w-full py-3 bg-transparent border-b border-gray-100 outline-none focus:border-black transition-all duration-500 placeholder-gray-300 text-gray-900 font-light" />
          <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-focus-within:w-full transition-all duration-500"></div>
        </div>

        <button className="w-full py-4 bg-black text-white font-black text-[10px] tracking-[0.4em] uppercase hover:bg-gray-800 transition-all active:scale-[0.98] mt-6 shadow-2xl shadow-black/10">
          JOIN NOW
        </button>
      </form>
      
      <div className="mt-12 flex justify-between items-center text-[10px] font-black text-gray-300 uppercase tracking-widest">
        <a href="#" className="hover:text-black transition-colors">Sign In</a>
        <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
        <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
      </div>
    </div>
  </div>
);

// --- 9. Brutalist ---
export const RegisterBrutalist = () => (
  <div className="flex items-center justify-center min-h-[650px] w-full bg-yellow-300 rounded-xl p-8 border-4 border-black font-sans shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
    <div className="w-full max-w-sm bg-white border-4 border-black p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
      <div className="border-b-4 border-black pb-6 mb-8">
        <h2 className="text-5xl font-black italic uppercase leading-none tracking-tighter">Join the<br/>Void.</h2>
      </div>
      <form className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-black uppercase tracking-widest">Alias_Required</label>
          <input type="text" placeholder="USER_01" className="w-full border-4 border-black p-4 font-black outline-none focus:bg-yellow-300 transition-colors placeholder-gray-300" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-black uppercase tracking-widest">Secure_Key</label>
          <input type="password" placeholder="********" className="w-full border-4 border-black p-4 font-black outline-none focus:bg-yellow-300 transition-colors placeholder-gray-300" />
        </div>
        <button className="w-full py-5 bg-black text-white font-black text-2xl uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[8px_8px_0px_0px_rgba(253,224,71,1)] border-2 border-black">
          SIGN UP NOW ->
        </button>
      </form>
      <div className="mt-8 flex gap-4 text-[10px] font-black uppercase tracking-widest overflow-hidden whitespace-nowrap">
        <span className="animate-marquee">NO BULLSHIT • NO LIMITS • NO REGRETS • NO BULLSHIT • NO LIMITS • NO REGRETS</span>
      </div>
    </div>
  </div>
);

// --- 10. Overlay ---
export const RegisterOverlay = () => (
  <div className="relative h-[750px] w-full rounded-2xl overflow-hidden shadow-2xl flex font-sans group">
    <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
      <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="tech-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
    </div>
    
    <div className="relative z-10 w-full max-w-[500px] bg-white/10 backdrop-blur-3xl border-r border-white/20 p-12 flex flex-col justify-center text-white">
      <div className="mb-10">
        <div className="w-12 h-1 w-12 bg-indigo-500 mb-6"></div>
        <h1 className="text-4xl font-black mb-4 tracking-tight leading-tight">Begin Your<br/>Adventure.</h1>
        <p className="text-white/60 text-sm max-w-xs font-medium">Join over 50,000 developers building the future of the decentralized web.</p>
      </div>

      <form className="space-y-5">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Work Email</label>
          <input type="email" placeholder="name@company.com" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 focus:border-white/30 outline-none transition-all placeholder-white/20" />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Access Key</label>
          <input type="password" placeholder="••••••••" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 focus:border-white/30 outline-none transition-all placeholder-white/20" />
        </div>
        <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl shadow-xl shadow-indigo-900/20 transition-all active:scale-[0.98] mt-4">
          CREATE ACCOUNT
        </button>
      </form>

      <div className="mt-12 pt-12 border-t border-white/10 flex items-center gap-6">
        <div className="flex -space-x-3">
          {[1,2,3].map(i => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800 overflow-hidden">
              <img src={`https://i.pravatar.cc/100?u=${i}`} alt="avatar" />
            </div>
          ))}
        </div>
        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">+50k developers joined</p>
      </div>
    </div>
  </div>
);

const RegisterGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Registration Designs</h1>
        <p className="text-slate-500 underline decoration-blue-500/30 underline-offset-8">Sign-up flows optimized for conversion and style.</p>
      </div>

      <div className="space-y-24 max-w-6xl mx-auto">
        {/* Variant 01: SaaS Split */}
        <section className='box-shadow p-4 rounded-lg relative group/regi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/regi:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const RegisterSaaS = () => (
  <div className="flex h-[730px] w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xl font-sans">
    <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
      <p className="text-gray-500 mb-8">Start your 30-day free trial. No credit card required.</p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input type="text" placeholder="John Doe" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" placeholder="john@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input type="password" placeholder="Create a password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          <p className="text-xs text-gray-400 mt-1">Must be at least 8 characters.</p>
        </div>
        <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Get Started</button>
        <button className="w-full py-3 border border-gray-300 rounded-lg font-medium text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
          <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          Sign up with Google
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-gray-600">Already have an account? <a href="#" className="text-blue-600 font-medium hover:underline">Log in</a></p>
    </div>
    <div className="hidden md:flex w-1/2 bg-slate-900 p-12 flex-col justify-center text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-6">Join 10,000+ users</h2>
        <ul className="space-y-4 mb-12">
          <li className="flex items-center gap-3">✓ Unlimited Projects</li>
          <li className="flex items-center gap-3">✓ Analytics Dashboard</li>
          <li className="flex items-center gap-3">✓ 24/7 Priority Support</li>
          <li className="flex items-center gap-3">✓ Custom Domains</li>
        </ul>
        <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl">
          <p className="italic text-slate-300 mb-4">"The best decision we made for our development workflow. Simply stunning."</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500"></div>
            <div>
              <div className="font-bold text-sm">Alex Rivera</div>
              <div className="text-xs text-slate-500">CTO, TechFlow</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);`} htmlCode={`<div class="saas-reg-container">
  <div class="form-panel">
    <h1>Create Account</h1>
    <p class="subtitle">Start your 30-day free trial. No credit card required.</p>
    <form class="reg-form">
      <div class="input-group">
        <label>Full Name</label>
        <input type="text" placeholder="John Doe">
      </div>
      <div class="input-group">
        <label>Email</label>
        <input type="email" placeholder="john@example.com">
      </div>
      <div class="input-group">
        <label>Password</label>
        <input type="password" placeholder="Create a password">
        <p class="hint">Must be at least 8 characters.</p>
      </div>
      <button type="submit" class="primary-btn">Get Started</button>
      <button type="button" class="google-btn">Sign up with Google</button>
    </form>
    <p class="login-link">Already have an account? <a href="#">Log in</a></p>
  </div>
  <div class="benefits-panel">
    <div class="benefits-content">
      <h2>Join 10,000+ users</h2>
      <ul class="benefits-list">
        <li>Unlimited Projects</li>
        <li>Analytics Dashboard</li>
        <li>24/7 Priority Support</li>
        <li>Custom Domains</li>
      </ul>
      <div class="testimonial">
        <p>"The best decision we made for our development workflow. Simply stunning."</p>
        <div class="author">
          <div class="avatar"></div>
          <div>
            <strong>Alex Rivera</strong>
            <span>CTO, TechFlow</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`} cssCode={`.saas-reg-container { display: flex; height: 730px; background: white; border-radius: 20px; overflow: hidden; font-family: sans-serif; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); border: 1px solid #f3f4f6; }
.form-panel { width: 50%; padding: 48px; display: flex; flex-direction: column; justify-content: center; }
.form-panel h1 { font-size: 30px; font-weight: 700; color: #111827; margin-bottom: 8px; }
.subtitle { color: #6b7280; margin-bottom: 32px; }
.reg-form { display: flex; flex-direction: column; gap: 16px; }
.input-group label { display: block; font-size: 14px; font-weight: 500; color: #374151; margin-bottom: 4px; }
.input-group input { width: 100%; padding: 10px 16px; border: 1px solid #d1d5db; border-radius: 8px; outline: none; transition: 0.2s; }
.input-group input:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1); }
.hint { font-size: 12px; color: #9ca3af; margin-top: 4px; }
.primary-btn { width: 100%; padding: 12px; background: #2563eb; color: white; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; transition: 0.2s; box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2); }
.primary-btn:hover { background: #1d4ed8; }
.google-btn { width: 100%; padding: 12px; border: 1px solid #d1d5db; border-radius: 8px; background: white; color: #374151; font-weight: 500; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; }
.login-link { text-align: center; margin-top: 24px; font-size: 14px; color: #4b5563; }
.login-link a { color: #2563eb; font-weight: 500; text-decoration: none; }
.benefits-panel { width: 50%; background: #0f172a; padding: 48px; color: white; display: flex; flex-direction: column; justify-content: center; position: relative; }
.benefits-content { position: relative; z-index: 10; }
.benefits-panel h2 { font-size: 30px; font-weight: 700; margin-bottom: 24px; }
.benefits-list { list-style: none; padding: 0; margin-bottom: 48px; }
.benefits-list li { margin-bottom: 16px; display: flex; align-items: center; gap: 12px; }
.benefits-list li::before { content: '✓'; color: #3b82f6; font-weight: bold; }
.testimonial { background: rgba(255, 255, 255, 0.05); padding: 24px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.1); }
.testimonial p { font-style: italic; color: #cbd5e1; margin-bottom: 16px; }
.author { display: flex; align-items: center; gap: 12px; }
.avatar { width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(to top right, #60a5fa, #6366f1); }
.author strong { display: block; font-size: 14px; }
.author span { font-size: 12px; color: #64748b; }
@media (max-width: 768px) { .benefits-panel { display: none; } .form-panel { width: 100%; } }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">01. SaaS Split Benefits</span>
          <RegisterSaaS />
        </section>

        {/* Variant 02: Wizard */}
        <section className='box-shadow p-4 rounded-lg relative group/regi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/regi:opacity-100 transition-opacity">
            <CopyButton jsxCode={`import React, { useState } from 'react';

const RegisterWizard = () => {
  const [step, setStep] = useState(1);
  
  return (
    <div className="flex items-center justify-center min-h-[600px] w-full bg-gray-50 rounded-xl font-sans p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-10">
        <div className="flex gap-3 mb-10">
          <div className={\`h-1.5 flex-1 rounded-full transition-all duration-500 \${step >= 1 ? 'bg-indigo-600' : 'bg-gray-200'}\`}></div>
          <div className={\`h-1.5 flex-1 rounded-full transition-all duration-500 \${step >= 2 ? 'bg-indigo-600' : 'bg-gray-200'}\`}></div>
          <div className={\`h-1.5 flex-1 rounded-full transition-all duration-500 \${step >= 3 ? 'bg-indigo-600' : 'bg-gray-200'}\`}></div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">{step === 1 ? 'Personal Info' : step === 2 ? 'Security' : 'Preferences'}</h2>
          <p className="text-gray-500 text-sm mt-1">Step {step} of 3</p>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" />
            </div>
            <button onClick={() => setStep(2)} className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 mt-4">Continue</button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" placeholder="••••••••" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input type="password" placeholder="••••••••" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" />
            </div>
            <div className="flex gap-3 pt-4">
              <button onClick={() => setStep(1)} className="flex-1 py-4 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-all">Back</button>
              <button onClick={() => setStep(3)} className="flex-[2] py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">Next Step</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100 text-indigo-700 text-sm">
              Almost there! Set your account preferences to finish.
            </div>
            <label className="flex items-center gap-3 p-3 border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-50">
              <input type="checkbox" className="w-5 h-5 rounded text-indigo-600" />
              <span className="text-sm text-gray-600">Subscribe to newsletter</span>
            </label>
            <div className="flex gap-3 pt-4">
              <button onClick={() => setStep(2)} className="flex-1 py-4 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-all">Back</button>
              <button className="flex-[2] py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">Complete Registration</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};`}
              htmlCode={`<div class="wizard-container">
  <div class="wizard-card">
    <!-- Progress Indicator -->
    <div class="progress-bar">
      <div class="step active"></div>
      <div class="step"></div>
      <div class="step"></div>
    </div>

    <!-- Step 1: Personal Info -->
    <div class="step-content" id="step-1">
      <div class="wizard-header">
        <h2>Personal Info</h2>
        <p>Step 1 of 3</p>
      </div>
      <form class="wizard-form">
        <div class="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe">
        </div>
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="john@example.com">
        </div>
        <button type="button" class="next-btn">Continue</button>
      </form>
    </div>

    <!-- Step 2: Security (Hidden by default) -->
    <div class="step-content hidden" id="step-2">
      <div class="wizard-header">
        <h2>Security</h2>
        <p>Step 2 of 3</p>
      </div>
      <form class="wizard-form">
        <div class="form-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••">
        </div>
        <div class="form-group">
          <label>Confirm Password</label>
          <input type="password" placeholder="••••••••">
        </div>
        <div class="button-group">
          <button type="button" class="back-btn">Back</button>
          <button type="button" class="next-btn">Next Step</button>
        </div>
      </form>
    </div>

    <!-- Step 3: Preferences (Hidden by default) -->
    <div class="step-content hidden" id="step-3">
      <div class="wizard-header">
        <h2>Preferences</h2>
        <p>Step 3 of 3</p>
      </div>
      <form class="wizard-form">
        <div class="info-box">Almost there! Set your account preferences to finish.</div>
        <label class="checkbox-label">
          <input type="checkbox">
          <span>Subscribe to newsletter</span>
        </label>
        <div class="button-group">
          <button type="button" class="back-btn">Back</button>
          <button type="submit" class="submit-btn">Complete Registration</button>
        </div>
      </form>
    </div>
  </div>
</div>`}
              cssCode={`.wizard-container { display: flex; align-items: center; justify-content: center; min-height: 600px; width: 100%; background: #f9fafb; border-radius: 12px; font-family: sans-serif; }
.wizard-card { width: 100%; max-width: 448px; background: white; border-radius: 20px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); padding: 40px; border: 1px solid #f3f4f6; }
.progress-bar { display: flex; gap: 12px; margin-bottom: 40px; }
.step { height: 6px; flex: 1; border-radius: 999px; background: #e5e7eb; transition: 0.3s; }
.step.active { background: #4f46e5; }
.wizard-header h2 { font-size: 24px; font-weight: 700; color: #111827; margin: 0; }
.wizard-header p { font-size: 14px; color: #6b7280; margin: 4px 0 32px; }
.form-group { margin-bottom: 20px; }
.form-group label { display: block; font-size: 14px; font-weight: 500; color: #374151; margin-bottom: 6px; }
.form-group input { width: 100%; padding: 12px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; outline: none; transition: 0.2s; }
.form-group input:focus { border-color: #4f46e5; background: white; box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1); }
.button-group { display: flex; gap: 12px; margin-top: 24px; }
.next-btn, .submit-btn { flex: 2; padding: 16px; background: #4f46e5; color: white; border: none; border-radius: 12px; font-weight: 700; cursor: pointer; transition: 0.2s; box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.2); }
.back-btn { flex: 1; padding: 16px; background: white; color: #374151; border: 1px solid #e5e7eb; border-radius: 12px; font-weight: 500; cursor: pointer; transition: 0.2s; }
.back-btn:hover { background: #f9fafb; }
.info-box { padding: 16px; background: #eef2ff; border: 1px solid #e0e7ff; color: #4338ca; border-radius: 12px; font-size: 14px; margin-bottom: 20px; }
.checkbox-label { display: flex; align-items: center; gap: 12px; padding: 12px; border: 1px solid #f3f4f6; border-radius: 12px; cursor: pointer; transition: 0.2s; }
.checkbox-label:hover { background: #f9fafb; }
.hidden { display: none; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">02. Multi-Step Wizard</span>
          <RegisterWizard />
        </section>

        {/* Variant 03: Plan Context */}
        <section className='box-shadow p-4 rounded-lg relative group/regi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/regi:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const RegisterPlan = () => (
  <div className="flex items-center justify-center min-h-[600px] w-full bg-slate-50 rounded-xl font-sans p-8">
    <div className="w-full max-w-md shadow-2xl rounded-2xl overflow-hidden group">
      <div className="bg-slate-900 text-white p-8 relative overflow-hidden">
        <div className="relative z-10 flex justify-between items-end">
          <div>
            <div className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-1">Current Selection</div>
            <div className="text-2xl font-bold">Pro Monthly</div>
            <div className="text-slate-400 text-sm mt-1">Billed monthly. Cancel anytime.</div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-black text-white">$29</div>
            <div className="text-xs text-slate-400 uppercase">Per Month</div>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 border-x border-b border-gray-100">
        <form className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Work Email</label>
            <input type="email" placeholder="name@company.com" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Company Size</label>
            <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all appearance-none cursor-pointer">
              <option>1-10 employees</option>
              <option>11-50 employees</option>
              <option>51-200 employees</option>
              <option>200+ employees</option>
            </select>
          </div>
          <button className="w-full py-5 bg-emerald-500 text-white font-black rounded-xl shadow-lg shadow-emerald-100 hover:bg-emerald-600 hover:shadow-emerald-200 transition-all active:scale-[0.98]">
            Complete Subscription
          </button>
          <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest">Secure Checkout Powered by Stripe</p>
        </form>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="plan-reg">
  <div class="plan-card">
    <div class="plan-header">
      <div class="plan-info">
        <span class="label">CURRENT SELECTION</span>
        <span class="name">Pro Monthly</span>
        <p class="desc">Billed monthly. Cancel anytime.</p>
      </div>
      <div class="plan-price">$29 <span>/mo</span></div>
    </div>
    <div class="plan-body">
      <form>
        <div class="field">
          <label>WORK EMAIL</label>
          <input type="email" placeholder="name@company.com">
        </div>
        <div class="field">
          <label>COMPANY SIZE</label>
          <select>
            <option>1-10 employees</option>
            <option>11-50 employees</option>
            <option>51-200 employees</option>
          </select>
        </div>
        <button type="submit">Complete Subscription</button>
        <p class="secure-text">Secure Checkout Powered by Stripe</p>
      </form>
    </div>
  </div>
</div>`}
              cssCode={`.plan-reg { display: flex; align-items: center; justify-content: center; min-height: 600px; width: 100%; background: #f8fafc; border-radius: 12px; font-family: sans-serif; p: 32px; }
.plan-card { width: 100%; max-width: 448px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); border-radius: 16px; overflow: hidden; }
.plan-header { background: #0f172a; color: white; padding: 32px; display: flex; justify-content: space-between; align-items: flex-end; }
.plan-info .label { display: block; font-size: 10px; font-weight: 900; color: #10b981; letter-spacing: 0.1em; margin-bottom: 4px; }
.plan-info .name { font-size: 24px; font-weight: 700; }
.plan-info .desc { font-size: 14px; color: #94a3b8; margin: 4px 0 0; }
.plan-price { font-size: 30px; font-weight: 900; text-align: right; }
.plan-price span { font-size: 12px; color: #94a3b8; text-transform: uppercase; }
.plan-body { background: white; padding: 32px; border: 1px solid #f1f5f9; }
.field { margin-bottom: 20px; }
.field label { display: block; font-size: 11px; font-weight: 800; color: #94a3b8; margin-bottom: 8px; letter-spacing: 0.05em; }
.field input, .field select { width: 100%; padding: 14px; background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 12px; outline: none; transition: 0.2s; }
.field input:focus { border-color: #10b981; background: white; box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1); }
.plan-body button { width: 100%; padding: 18px; background: #10b981; color: white; border: none; border-radius: 12px; font-weight: 900; cursor: pointer; transition: 0.2s; box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.2); }
.secure-text { text-align: center; font-size: 10px; color: #94a3b8; margin-top: 20px; text-transform: uppercase; letter-spacing: 1px; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">03. Plan Context</span>
          <RegisterPlan />
        </section>

        {/* Variant 04: Glassmorphism */}
        <section className='box-shadow p-4 rounded-lg relative group/regi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/regi:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const RegisterGlass = () => (
  <div className="relative flex items-center justify-center h-[700px] w-full rounded-xl overflow-hidden bg-[#0a0a0c] p-4">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-fuchsia-600/30 rounded-full blur-[100px] animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-600/30 rounded-full blur-[100px] animate-pulse delay-1000"></div>
    
    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl w-full max-w-sm text-center relative z-10">
      <div className="w-16 h-16 bg-gradient-to-tr from-fuchsia-500 to-indigo-500 rounded-2xl mx-auto mb-6 rotate-12 shadow-lg shadow-fuchsia-500/20"></div>
      <h2 className="text-3xl font-bold text-white mb-2">Join the Elite</h2>
      <p className="text-white/50 mb-8 text-xs uppercase tracking-[0.2em]">Next-Gen Registration</p>
      <form className="space-y-4 text-left">
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Secure Email</label>
          <input type="email" placeholder="access@network.io" className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/20 outline-none transition-all focus:bg-white/10 focus:border-white/20" />
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Access Key</label>
          <input type="password" placeholder="••••••••" className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/20 outline-none transition-all focus:bg-white/10 focus:border-white/20" />
        </div>
        <button className="w-full py-4 bg-white text-black font-black rounded-2xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all mt-4">
          INITIALIZE ACCOUNT
        </button>
      </form>
      <p className="mt-8 text-white/30 text-xs italic">System encrypted with AES-256</p>
    </div>
  </div>
);`}
              htmlCode={`<div class="glass-reg">
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
  <div class="glass-card">
    <div class="logo"></div>
    <h2>Join the Elite</h2>
    <p class="tagline">Next-Gen Registration</p>
    <form>
      <div class="field">
        <label>Secure Email</label>
        <input type="email" placeholder="access@network.io">
      </div>
      <div class="field">
        <label>Access Key</label>
        <input type="password" placeholder="••••••••">
      </div>
      <button type="submit">INITIALIZE ACCOUNT</button>
    </form>
    <p class="footer">System encrypted with AES-256</p>
  </div>
</div>`}
              cssCode={`.glass-reg { position: relative; display: flex; align-items: center; justify-content: center; height: 700px; width: 100%; border-radius: 12px; overflow: hidden; background: #0a0a0c; font-family: sans-serif; }
.blob { position: absolute; width: 256px; height: 256px; border-radius: 50%; filter: blur(100px); opacity: 0.3; animation: pulse 4s infinite; }
.blob-1 { top: 25%; left: 25%; background: #c026d3; }
.blob-2 { bottom: 25%; right: 25%; background: #4f46e5; animation-delay: 1s; }
.glass-card { position: relative; z-index: 10; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(40px); border: 1px solid rgba(255, 255, 255, 0.1); padding: 40px; border-radius: 40px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); width: 100%; max-width: 384px; text-align: center; }
.logo { width: 64px; height: 64px; background: linear-gradient(to top right, #d946ef, #6366f1); border-radius: 16px; margin: 0 auto 24px; transform: rotate(12deg); box-shadow: 0 10px 15px rgba(217, 70, 239, 0.2); }
.glass-card h2 { color: white; font-size: 30px; margin-bottom: 8px; font-weight: 700; }
.tagline { color: rgba(255, 255, 255, 0.5); font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 32px; }
.field { text-align: left; margin-bottom: 16px; }
.field label { display: block; font-size: 10px; font-weight: 700; color: rgba(255, 255, 255, 0.4); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px; margin-left: 4px; }
.glass-card input { width: 100%; padding: 16px 20px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; color: white; outline: none; transition: 0.2s; }
.glass-card input:focus { background: rgba(255, 255, 255, 0.1); border-color: rgba(255, 255, 255, 0.2); }
.glass-card button { width: 100%; padding: 16px; background: white; color: black; border: none; border-radius: 16px; font-weight: 900; cursor: pointer; transition: 0.2s; margin-top: 16px; }
.glass-card button:hover { transform: scale(1.02); }
.footer { color: rgba(255, 255, 255, 0.3); font-size: 12px; font-style: italic; margin-top: 32px; }
@keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.3; } 50% { transform: scale(1.1); opacity: 0.4; } }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">04. Glassmorphism</span>
          <RegisterGlass />
        </section>

        {/* Variant 05: Cyberpunk */}
        <section className='box-shadow p-4 rounded-lg relative group/regi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/regi:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const RegisterCyberpunk = () => (
  <div className="flex items-center justify-center h-[700px] w-full bg-[#050505] rounded-xl overflow-hidden border border-gray-800 font-mono p-4 relative">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20"></div>
    <div className="w-full max-w-md p-[1px] bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent rounded-sm">
      <div className="bg-[#0a0a0a] p-8 relative overflow-hidden">
        <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 border border-red-500/50 bg-red-500/20"></div>
            <div className="w-3 h-3 border border-yellow-500/50 bg-yellow-500/20"></div>
          </div>
          <div className="text-[10px] text-cyan-500/50 tracking-[0.2em]">CONNECTION_SECURE</div>
        </div>
        
        <div className="mb-8">
          <div className="text-[10px] text-gray-500 mb-1">LOCAL::AUTH_MOD</div>
          <h2 className="text-2xl font-black text-cyan-400 tracking-tighter">NEW_OPERATOR.EXE</h2>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-gray-500 text-[10px] uppercase tracking-widest">Operator ID</label>
              <span className="text-cyan-500/30 text-[10px]">REQUIRED</span>
            </div>
            <div className="relative group">
              <input type="text" className="w-full bg-black border border-gray-800 text-cyan-400 px-4 py-3 outline-none focus:border-cyan-500/50 transition-all placeholder-cyan-900" placeholder="NULL" />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-500 group-focus-within:w-full transition-all duration-500"></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-gray-500 text-[10px] uppercase tracking-widest">Access Phrase</label>
              <span className="text-cyan-500/30 text-[10px]">ENCRYPTED</span>
            </div>
            <div className="relative group">
              <input type="password" className="w-full bg-black border border-gray-800 text-cyan-400 px-4 py-3 outline-none focus:border-cyan-500/50 transition-all placeholder-cyan-900" placeholder="********" />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-500 group-focus-within:w-full transition-all duration-500"></div>
            </div>
          </div>

          <button className="w-full py-4 bg-cyan-500/5 border border-cyan-500/50 text-cyan-400 uppercase font-black tracking-[0.3em] hover:bg-cyan-500/20 hover:border-cyan-500 transition-all group relative overflow-hidden">
            <span className="relative z-10">INITIALIZE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-900 flex justify-between items-center text-[10px] text-gray-600">
          <div>NODE_420 // SYNC: OK</div>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-cyan-500 animate-ping"></div>
            ACTIVE
          </div>
        </div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="cyber-reg">
  <div class="cyber-outline">
    <div class="cyber-inner">
      <div class="cyber-header">
        <div class="controls">
          <span class="red"></span>
          <span class="yellow"></span>
        </div>
        <div class="status">CONNECTION_SECURE</div>
      </div>
      <div class="cyber-title">
        <span class="module">LOCAL::AUTH_MOD</span>
        <h2>NEW_OPERATOR.EXE</h2>
      </div>
      <form class="cyber-form">
        <div class="field">
          <div class="label-row">
            <label>Operator ID</label>
            <span class="req">REQUIRED</span>
          </div>
          <div class="input-wrapper">
            <input type="text" placeholder="NULL">
            <div class="line"></div>
          </div>
        </div>
        <div class="field">
          <div class="label-row">
            <label>Access Phrase</label>
            <span class="req">ENCRYPTED</span>
          </div>
          <div class="input-wrapper">
            <input type="password" placeholder="********">
            <div class="line"></div>
          </div>
        </div>
        <button type="submit">INITIALIZE</button>
      </form>
      <div class="cyber-footer">
        <div>NODE_420 // SYNC: OK</div>
        <div class="active-sts">ACTIVE</div>
      </div>
    </div>
  </div>
</div>`}
              cssCode={`.cyber-reg { display: flex; align-items: center; justify-content: center; height: 700px; width: 100%; background: #050505; border-radius: 12px; font-family: monospace; }
.cyber-outline { width: 100%; max-width: 448px; padding: 1px; background: linear-gradient(to bottom, rgba(6, 182, 212, 0.5), rgba(168, 85, 247, 0.5), transparent); border-radius: 4px; }
.cyber-inner { background: #0a0a0a; padding: 32px; position: relative; }
.cyber-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1f2937; padding-bottom: 16px; margin-bottom: 32px; }
.controls { display: flex; gap: 8px; }
.controls span { width: 12px; height: 12px; border: 1px solid rgba(255,255,255,0.1); }
.controls .red { background: rgba(239, 68, 68, 0.2); border-color: rgba(239, 68, 68, 0.5); }
.controls .yellow { background: rgba(234, 179, 8, 0.2); border-color: rgba(234, 179, 8, 0.5); }
.status { font-size: 10px; color: rgba(6, 182, 212, 0.5); letter-spacing: 0.2em; }
.cyber-title .module { font-size: 10px; color: #6b7280; display: block; margin-bottom: 4px; }
.cyber-title h2 { font-size: 24px; color: #22d3ee; margin: 0; font-weight: 900; letter-spacing: -0.05em; }
.cyber-form { margin-top: 24px; }
.field { margin-bottom: 24px; }
.label-row { display: flex; justify-content: space-between; margin-bottom: 8px; }
.label-row label { font-size: 10px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.1em; }
.label-row .req { font-size: 10px; color: rgba(6, 182, 212, 0.3); }
.input-wrapper { position: relative; }
.input-wrapper input { width: 100%; background: black; border: 1px solid #1f2937; padding: 12px 16px; color: #22d3ee; outline: none; transition: 0.3s; }
.input-wrapper .line { position: absolute; bottom: 0; left: 0; width: 0; height: 1px; background: #22d3ee; transition: 0.5s; }
.input-wrapper input:focus + .line { width: 100%; }
.cyber-form button { width: 100%; padding: 16px; background: rgba(6, 182, 212, 0.05); border: 1px solid rgba(6, 182, 212, 0.5); color: #22d3ee; font-weight: 900; letter-spacing: 0.3em; cursor: pointer; transition: 0.3s; }
.cyber-form button:hover { background: rgba(6, 182, 212, 0.2); border-color: #22d3ee; }
.cyber-footer { margin-top: 32px; padding-top: 24px; border-top: 1px solid #111827; display: flex; justify-content: space-between; font-size: 10px; color: #4b5563; }
.active-sts { color: #22d3ee; display: flex; align-items: center; gap: 4px; }
.active-sts::before { content: ''; width: 4px; height: 4px; background: #22d3ee; border-radius: 50%; display: block; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">05. Cyberpunk Terminal</span>
          <RegisterCyberpunk />
        </section>

        {/* Variant 06: Social Grid */}
        <section className='box-shadow p-4 rounded-lg relative group/regi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/regi:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const RegisterSocial = () => (
  <div className="flex items-center justify-center min-h-[650px] w-full bg-[#fdfdfd] rounded-xl p-8 shadow-inner font-sans">
    <div className="w-full max-w-sm">
      <div className="text-center mb-10">
        <div className="w-12 h-12 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white shadow-xl shadow-blue-200">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
        </div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Create Account</h1>
        <p className="text-gray-500 text-sm mt-2">Join our community of makers and creators.</p>
      </div>

      <div className="space-y-3 mb-8">
        <button className="w-full py-3.5 px-4 border border-gray-200 rounded-2xl font-bold text-gray-700 flex items-center justify-center gap-3 hover:bg-gray-50 transition-all hover:border-gray-300">
          <GoogleIcon />
          <span>Continue with Google</span>
        </button>
        <button className="w-full py-3.5 px-4 bg-black border border-black rounded-2xl font-bold text-white flex items-center justify-center gap-3 hover:bg-gray-900 transition-all shadow-lg shadow-gray-200">
          <GithubIcon />
          <span>Continue with GitHub</span>
        </button>
      </div>

      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
        <span className="relative px-4 mx-auto block w-fit bg-[#fdfdfd] text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">or use email</span>
      </div>

      <form className="space-y-4">
        <input type="email" placeholder="Email Address" className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all placeholder-gray-400" />
        <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-blue-300 transition-all active:scale-[0.98]">
          Sign Up with Email
        </button>
      </form>

      <p className="mt-8 text-center text-xs text-gray-400">
        By signing up, you agree to our <a href="#" className="text-gray-900 font-bold hover:underline">Terms of Service</a>
      </p>
    </div>
  </div>
);`}
              htmlCode={`<div class="social-reg">
  <div class="container">
    <div class="header">
      <div class="icon-box">+</div>
      <h1>Create Account</h1>
      <p>Join our community of makers and creators.</p>
    </div>
    <div class="social-buttons">
      <button class="google">Continue with Google</button>
      <button class="github">Continue with GitHub</button>
    </div>
    <div class="divider">
      <span>or use email</span>
    </div>
    <form>
      <input type="email" placeholder="Email Address">
      <button type="submit" class="submit-btn">Sign Up with Email</button>
    </form>
    <p class="footer">By signing up, you agree to our <a href="#">Terms of Service</a></p>
  </div>
</div>`}
              cssCode={`.social-reg { display: flex; align-items: center; justify-content: center; min-height: 650px; width: 100%; background: #fdfdfd; border-radius: 12px; font-family: sans-serif; }
.container { width: 100%; max-width: 384px; padding: 0 20px; }
.header { text-align: center; margin-bottom: 40px; }
.icon-box { width: 48px; height: 48px; background: #2563eb; color: white; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; font-size: 24px; font-weight: bold; box-shadow: 0 10px 15px rgba(37, 99, 235, 0.2); }
.header h1 { font-size: 30px; font-weight: 900; color: #111827; margin: 0; letter-spacing: -0.02em; }
.header p { font-size: 14px; color: #6b7280; margin-top: 8px; }
.social-buttons { display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; }
.social-buttons button { width: 100%; padding: 14px; border-radius: 16px; font-weight: 700; cursor: pointer; transition: 0.2s; border: 1px solid transparent; }
.google { background: white; border-color: #e5e7eb !important; color: #374151; }
.github { background: black; color: white; box-shadow: 0 10px 15px rgba(0,0,0,0.1); }
.divider { position: relative; margin-bottom: 32px; text-align: center; }
.divider::before { content: ''; position: absolute; top: 50%; left: 0; width: 100%; border-top: 1px solid #f3f4f6; }
.divider span { position: relative; background: #fdfdfd; padding: 0 16px; font-size: 10px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.2em; }
form input { width: 100%; padding: 16px 20px; background: #f9fafb; border: 1px solid transparent; border-radius: 16px; margin-bottom: 16px; outline: none; transition: 0.2s; }
form input:focus { background: white; border-color: #2563eb; }
.submit-btn { width: 100%; padding: 16px; background: #2563eb; color: white; border: none; border-radius: 16px; font-weight: 900; cursor: pointer; box-shadow: 0 10px 15px rgba(37, 99, 235, 0.2); transition: 0.2s; }
.footer { margin-top: 32px; text-align: center; font-size: 12px; color: #9ca3af; }
.footer a { color: #111827; font-weight: 700; text-decoration: none; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">06. Social Grid Engagement</span>
          <RegisterSocial />
        </section>

        {/* Variant 07: Neumorphic */}
        <section className='box-shadow p-4 rounded-lg relative group/regi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/regi:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const RegisterNeumorphic = () => (
  <div className="flex items-center justify-center min-h-[650px] w-full bg-[#e0e5ec] rounded-xl p-8 font-sans">
    <div className="w-full max-w-sm bg-[#e0e5ec] p-12 rounded-[50px] shadow-[20px_20px_60px_#bec3c9,-20px_-20px_60px_#ffffff] border border-white/20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black text-gray-600 tracking-tight">Register</h2>
        <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest">Secure Gateway</p>
      </div>
      <form className="space-y-8">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4">Identification</label>
          <input type="email" placeholder="email@example.com" className="w-full p-5 bg-[#e0e5ec] rounded-3xl shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] outline-none text-gray-600 placeholder-gray-400 focus:shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff] transition-all" />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4">Access Code</label>
          <input type="password" placeholder="••••••••" className="w-full p-5 bg-[#e0e5ec] rounded-3xl shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] outline-none text-gray-600 placeholder-gray-400 focus:shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff] transition-all" />
        </div>
        <button className="w-full py-5 bg-[#e0e5ec] rounded-3xl shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff] font-black text-gray-600 uppercase tracking-[0.2em] hover:shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] active:shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff] transition-all">
          Authorize
        </button>
      </form>
      <p className="mt-10 text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">Protocol v.2.0.4</p>
    </div>
  </div>
);`}
              htmlCode={`<div class="neu-reg">
  <div class="neu-card">
    <div class="neu-header">
      <h2>Register</h2>
      <p>Secure Gateway</p>
    </div>
    <form>
      <div class="field">
        <label>Identification</label>
        <input type="email" placeholder="email@example.com">
      </div>
      <div class="field">
        <label>Access Code</label>
        <input type="password" placeholder="••••••••">
      </div>
      <button type="submit">Authorize</button>
    </form>
    <p class="neu-footer">Protocol v.2.0.4</p>
  </div>
</div>`}
              cssCode={`.neu-reg { display: flex; align-items: center; justify-content: center; min-height: 650px; width: 100%; background: #e0e5ec; border-radius: 12px; font-family: sans-serif; }
.neu-card { width: 100%; max-width: 384px; background: #e0e5ec; padding: 48px; border-radius: 50px; shadow: 20px 20px 60px #bec3c9, -20px -20px 60px #ffffff; border: 1px solid rgba(255,255,255,0.2); }
.neu-header { text-align: center; margin-bottom: 40px; }
.neu-header h2 { font-size: 30px; font-weight: 900; color: #4b5563; margin: 0; }
.neu-header p { font-size: 12px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 8px; }
.field { margin-bottom: 32px; }
.field label { display: block; font-size: 10px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px; margin-left: 16px; }
.neu-card input { width: 100%; padding: 20px; background: #e0e5ec; border: none; border-radius: 24px; box-shadow: inset 6px 6px 12px #bec3c9, inset -6px -6px 12px #ffffff; outline: none; color: #4b5563; transition: 0.2s; }
.neu-card input:focus { box-shadow: inset 4px 4px 8px #bec3c9, inset -4px -4px 8px #ffffff; }
.neu-card button { width: 100%; padding: 20px; background: #e0e5ec; border: none; border-radius: 24px; box-shadow: 8px 8px 16px #bec3c9, -8px -8px 16px #ffffff; font-weight: 900; color: #4b5563; text-transform: uppercase; letter-spacing: 0.2em; cursor: pointer; transition: 0.2s; }
.neu-card button:hover { shadow: 4px 4px 8px #bec3c9, -4px -4px 8px #ffffff; }
.neu-card button:active { box-shadow: inset 4px 4px 8px #bec3c9, inset -4px -4px 8px #ffffff; }
.neu-footer { text-align: center; font-size: 10px; color: #9ca3af; margin-top: 40px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">07. Soft UI Neumorphic</span>
          <RegisterNeumorphic />
        </section>

        {/* Variant 08: Minimalist */}
        <section className='box-shadow p-4 rounded-lg relative group/regi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/regi:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const RegisterMinimal = () => (
  <div className="flex items-center justify-center min-h-[550px] w-full bg-white rounded-xl p-8 font-sans border border-gray-100">
    <div className="w-full max-w-xs transition-all duration-700 ease-in-out">
      <div className="mb-12">
        <h1 className="text-4xl font-light text-gray-900 mb-2 tracking-tight">Create Account.</h1>
        <p className="text-gray-400 text-[10px] tracking-[0.3em] uppercase font-bold">Step into the future.</p>
      </div>
      
      <form className="space-y-8">
        <div className="group relative">
          <input type="email" placeholder="Email" className="w-full py-3 bg-transparent border-b border-gray-100 outline-none focus:border-black transition-all duration-500 placeholder-gray-300 text-gray-900 font-light" />
          <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-focus-within:w-full transition-all duration-500"></div>
        </div>
        
        <div className="group relative">
          <input type="password" placeholder="Password" className="w-full py-3 bg-transparent border-b border-gray-100 outline-none focus:border-black transition-all duration-500 placeholder-gray-300 text-gray-900 font-light" />
          <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-focus-within:w-full transition-all duration-500"></div>
        </div>

        <button className="w-full py-4 bg-black text-white font-black text-[10px] tracking-[0.4em] uppercase hover:bg-gray-800 transition-all active:scale-[0.98] mt-6 shadow-2xl shadow-black/10">
          JOIN NOW
        </button>
      </form>
      
      <div className="mt-12 flex justify-between items-center text-[10px] font-black text-gray-300 uppercase tracking-widest">
        <a href="#" className="hover:text-black transition-colors">Sign In</a>
        <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
        <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="minimal-reg">
  <div class="container">
    <div class="header">
      <h1>Create Account.</h1>
      <p>Step into the future.</p>
    </div>
    <form>
      <div class="field">
        <input type="email" placeholder="Email">
        <div class="line"></div>
      </div>
      <div class="field">
        <input type="password" placeholder="Password">
        <div class="line"></div>
      </div>
      <button type="submit">JOIN NOW</button>
    </form>
    <div class="footer">
      <a href="#">Sign In</a>
      <span></span>
      <a href="#">Privacy Policy</a>
    </div>
  </div>
</div>`}
              cssCode={`.minimal-reg { display: flex; align-items: center; justify-content: center; min-height: 550px; width: 100%; background: white; border-radius: 12px; font-family: sans-serif; }
.container { width: 100%; max-width: 320px; }
.header { margin-bottom: 48px; }
.header h1 { font-size: 36px; font-weight: 300; color: #111827; margin: 0; letter-spacing: -0.02em; }
.header p { font-size: 10px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.3em; margin-top: 8px; font-weight: 700; }
.field { position: relative; margin-bottom: 32px; }
.field input { width: 100%; padding: 12px 0; background: transparent; border: none; border-bottom: 1px solid #f3f4f6; outline: none; transition: 0.3s; font-weight: 300; color: #111827; }
.field .line { position: absolute; bottom: 0; left: 0; width: 0; height: 1px; background: black; transition: 0.5s; }
.field input:focus + .line { width: 100%; }
.minimal-reg button { width: 100%; padding: 16px; background: black; color: white; border: none; font-weight: 900; font-size: 10px; letter-spacing: 0.4em; cursor: pointer; transition: 0.2s; margin-top: 24px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
.minimal-reg button:hover { background: #1f2937; }
.footer { display: flex; justify-content: space-between; align-items: center; margin-top: 48px; }
.footer a { font-size: 10px; color: #9ca3af; text-decoration: none; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; transition: 0.2s; }
.footer a:hover { color: black; }
.footer span { width: 4px; height: 4px; background: #e5e7eb; border-radius: 50%; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">08. Minimalist Typography</span>
          <RegisterMinimal />
        </section>

        {/* Variant 09: Brutalist */}
        <section className='box-shadow p-4 rounded-lg relative group/regi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/regi:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const RegisterBrutalist = () => (
  <div className="flex items-center justify-center min-h-[650px] w-full bg-yellow-300 rounded-xl p-8 border-4 border-black font-sans shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
    <div className="w-full max-w-sm bg-white border-4 border-black p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
      <div className="border-b-4 border-black pb-6 mb-8">
        <h2 className="text-5xl font-black italic uppercase leading-none tracking-tighter">Join the<br/>Void.</h2>
      </div>
      <form className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-black uppercase tracking-widest">Alias_Required</label>
          <input type="text" placeholder="USER_01" className="w-full border-4 border-black p-4 font-black outline-none focus:bg-yellow-300 transition-colors placeholder-gray-300" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-black uppercase tracking-widest">Secure_Key</label>
          <input type="password" placeholder="********" className="w-full border-4 border-black p-4 font-black outline-none focus:bg-yellow-300 transition-colors placeholder-gray-300" />
        </div>
        <button className="w-full py-5 bg-black text-white font-black text-2xl uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[8px_8px_0px_0px_rgba(253,224,71,1)] border-2 border-black">
          SIGN UP NOW ->
        </button>
      </form>
      <div className="mt-8 flex gap-4 text-[10px] font-black uppercase tracking-widest overflow-hidden whitespace-nowrap">
        <span className="animate-marquee">NO BULLSHIT • NO LIMITS • NO REGRETS • NO BULLSHIT • NO LIMITS • NO REGRETS</span>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="brutal-reg">
  <div class="container">
    <div class="header">
      <h1>Join the Void.</h1>
    </div>
    <form>
      <div class="field">
        <label>Alias_Required</label>
        <input type="text" placeholder="USER_01">
      </div>
      <div class="field">
        <label>Secure_Key</label>
        <input type="password" placeholder="********">
      </div>
      <button type="submit">SIGN UP NOW -></button>
    </form>
    <!-- Marquee Footer -->
    <div class="marquee-wrapper">
      <div class="marquee">
        <span>NO BULLSHIT • NO LIMITS • NO REGRETS • NO BULLSHIT • NO LIMITS • NO REGRETS</span>
      </div>
    </div>
  </div>
</div>`}
              cssCode={`.brutal-reg { display: flex; align-items: center; justify-content: center; min-height: 650px; width: 100%; background: #fde047; border: 4px solid black; border-radius: 12px; font-family: sans-serif; box-shadow: 16px 16px 0 0 black; }
.container { width: 100%; max-width: 384px; background: white; border: 4px solid black; padding: 40px; box-shadow: 12px 12px 0 0 black; overflow: hidden; }
.header h1 { font-size: 48px; font-weight: 900; font-style: italic; text-transform: uppercase; line-height: 1; border-bottom: 4px solid black; padding-bottom: 24px; margin-bottom: 32px; }
.field { margin-bottom: 24px; }
.field label { display: block; font-size: 14px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px; }
.field input { width: 100%; border: 4px solid black; padding: 16px; font-weight: 900; outline: none; transition: 0.2s; }
.field input:focus { background: #fde047; }
.container button { width: 100%; padding: 20px; background: black; color: white; border: 2px solid black; font-size: 24px; font-weight: 900; text-transform: uppercase; cursor: pointer; transition: 0.15s; box-shadow: 8px 8px 0 0 #fde047; }
.container button:hover { transform: translate(4px, 4px); box-shadow: none; }
.marquee-wrapper { margin-top: 32px; width: 100%; overflow: hidden; white-space: nowrap; }
.marquee { display: inline-block; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; animation: scroll 10s linear infinite; }
@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">09. Brutalist Pop</span>
          <RegisterBrutalist />
        </section>

        {/* Variant 10: Overlay */}
        <section className='box-shadow p-4 rounded-lg relative group/regi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/regi:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const RegisterOverlay = () => (
  <div className="relative h-[750px] w-full rounded-2xl overflow-hidden shadow-2xl flex font-sans group">
    <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
      <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="tech-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
    </div>
    
    <div className="relative z-10 w-full max-w-[500px] bg-white/10 backdrop-blur-3xl border-r border-white/20 p-12 flex flex-col justify-center text-white">
      <div className="mb-10">
        <div className="w-12 h-1 bg-indigo-500 mb-6"></div>
        <h1 className="text-4xl font-black mb-4 tracking-tight leading-tight">Begin Your<br/>Adventure.</h1>
        <p className="text-white/60 text-sm max-w-xs font-medium">Join over 50,000 developers building the future of the decentralized web.</p>
      </div>

      <form className="space-y-5">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Work Email</label>
          <input type="email" placeholder="name@company.com" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 focus:border-white/30 outline-none transition-all placeholder-white/20" />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Access Key</label>
          <input type="password" placeholder="••••••••" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 focus:border-white/30 outline-none transition-all placeholder-white/20" />
        </div>
        <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl shadow-xl shadow-indigo-900/20 transition-all active:scale-[0.98] mt-4">
          CREATE ACCOUNT
        </button>
      </form>

      <div className="mt-12 pt-12 border-t border-white/10 flex items-center gap-6">
        <div className="flex -space-x-3">
          {[1,2,3].map(i => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800 overflow-hidden">
              <img src={\`https://i.pravatar.cc/100?u=\${i}\`} alt="avatar" />
            </div>
          ))}
        </div>
        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">+50k developers joined</p>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="overlay-reg">
  <div class="bg-img"></div>
  <div class="overlay-card">
    <div class="header">
      <div class="accent"></div>
      <h1>Begin Your Adventure.</h1>
      <p>Join over 50,000 developers building the future.</p>
    </div>
    <form>
      <div class="field">
        <label>Work Email</label>
        <input type="email" placeholder="name@company.com">
      </div>
      <div class="field">
        <label>Access Key</label>
        <input type="password" placeholder="••••••••">
      </div>
      <button type="submit">CREATE ACCOUNT</button>
    </form>
    <!-- Community Stats -->
    <div class="community-stats">
      <div class="avatars">
        <img src="https://i.pravatar.cc/100?u=1" alt="avatar">
        <img src="https://i.pravatar.cc/100?u=2" alt="avatar">
        <img src="https://i.pravatar.cc/100?u=3" alt="avatar">
      </div>
      <p>+50k developers joined</p>
    </div>
  </div>
</div>`}
              cssCode={`.overlay-reg { position: relative; height: 750px; width: 100%; border-radius: 20px; overflow: hidden; display: flex; font-family: sans-serif; }
.bg-img { position: absolute; inset: 0; background: url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop'); background-size: cover; z-index: 1; }
.bg-img::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent); }
.overlay-card { position: relative; z-index: 10; width: 100%; max-width: 500px; background: rgba(255,255,255,0.1); backdrop-filter: blur(30px); padding: 48px; display: flex; flex-direction: column; justify-content: center; color: white; border-right: 1px solid rgba(255,255,255,0.2); }
.header { margin-bottom: 40px; }
.accent { width: 48px; height: 4px; background: #6366f1; margin-bottom: 24px; }
.header h1 { font-size: 40px; font-weight: 900; margin: 0 0 16px; line-height: 1.1; }
.header p { font-size: 14px; color: rgba(255,255,255,0.6); max-width: 320px; }
.field { margin-bottom: 20px; }
.field label { display: block; font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 4px; }
.field input { width: 100%; padding: 16px 24px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; color: white; outline: none; transition: 0.2s; }
.field input:focus { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.3); }
.overlay-card button { width: 100%; padding: 16px; background: #6366f1; color: white; border: none; border-radius: 16px; font-weight: 900; cursor: pointer; transition: 0.2s; box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
.overlay-card button:hover { background: #4f46e5; }
.community-stats { margin-top: 48px; padding-top: 48px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 24px; }
.avatars { display: flex; }
.avatars img { width: 32px; height: 32px; border-radius: 50%; border: 2px solid black; margin-left: -12px; background: #1f2937; }
.avatars img:first-child { margin-left: 0; }
.community-stats p { font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.1em; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">10. Image Sidebar Registration</span>
          <RegisterOverlay />
        </section>

      </div>
    </div>
  );
};

export default RegisterGallery;