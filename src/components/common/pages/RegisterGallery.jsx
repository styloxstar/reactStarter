import React, { useState } from 'react';
import CopyButton from '../CopyButton';

// --- Shared Icons ---
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
);

// --- 1. SaaS Split ---
export const RegisterSaaS = () => (
  <div className="flex h-[730px] w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xl font-sans">
    <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
      <p className="text-gray-500 mb-8">Start your 30-day free trial. No credit card required.</p>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
        <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
        <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all">Get Started</button>
      </form>
    </div>
    <div className="hidden md:flex w-1/2 bg-slate-900 p-12 flex-col justify-center text-white">
      <h2 className="text-3xl font-bold mb-6">Join 10,000+ users</h2>
      <ul className="space-y-4 mb-8">
        <li className="flex items-center gap-3"><CheckIcon /> Unlimited Projects</li>
        <li className="flex items-center gap-3"><CheckIcon /> Analytics Dashboard</li>
        <li className="flex items-center gap-3"><CheckIcon /> 24/7 Priority Support</li>
      </ul>
      <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
        <p className="italic text-slate-300">"This tool saved us 20 hours a week. Essential for growth."</p>
      </div>
    </div>
  </div>
);

// --- 2. Multi-Step Wizard ---
export const RegisterWizard = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="flex items-center justify-center min-h-[600px] w-full bg-gray-50 rounded-xl font-sans p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="flex gap-2 mb-8">
          <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
          <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">${step === 1 ? 'Personal Info' : 'Security'}</h2>
        {step === 1 ? (
          <div className="space-y-4">
            <input type="text" placeholder="First Name" className="w-full p-3 bg-gray-50 border rounded-lg outline-none" />
            <input type="email" placeholder="Email" className="w-full p-3 bg-gray-50 border rounded-lg outline-none" />
            <button onClick={() => setStep(2)} className="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold">Next Step</button>
          </div>
        ) : (
          <div className="space-y-4">
            <input type="password" placeholder="Password" className="w-full p-3 bg-gray-50 border rounded-lg outline-none" />
            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="flex-1 py-3 border rounded-lg">Back</button>
              <button className="flex-[2] py-3 bg-indigo-600 text-white rounded-lg font-bold">Complete</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- 3. Plan Context ---
export const RegisterPlan = () => (
  <div className="flex items-center justify-center h-[600px] w-full bg-slate-50 rounded-xl font-sans p-4">
    <div className="w-full max-w-md shadow-2xl">
      <div className="bg-slate-900 text-white p-6 rounded-t-2xl flex justify-between items-center">
        <div>
          <div className="text-xs font-bold text-slate-400">SELECTED PLAN</div>
          <div className="text-xl font-bold">Pro Monthly</div>
        </div>
        <div className="text-2xl font-black">$29</div>
      </div>
      <div className="bg-white p-8 rounded-b-2xl border-x border-b border-gray-100">
        <form className="space-y-4">
          <input type="email" placeholder="Work Email" className="w-full p-3 border rounded-lg" />
          <input type="text" placeholder="Company" className="w-full p-3 border rounded-lg" />
          <button className="w-full py-4 bg-emerald-500 text-white font-bold rounded-lg shadow-lg">Start Pro Trial</button>
        </form>
      </div>
    </div>
  </div>
);

// --- 4. Glassmorphism ---
export const RegisterGlass = () => (
  <div className="relative flex items-center justify-center h-[700px] w-full rounded-xl overflow-hidden bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500 p-4">
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl w-full max-w-sm text-center">
      <h2 className="text-3xl font-bold text-white mb-8">Join Us</h2>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 outline-none" />
        <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 outline-none" />
        <button className="w-full py-3 bg-white text-fuchsia-600 font-bold rounded-xl shadow-lg">Sign Up</button>
      </form>
    </div>
  </div>
);

// --- 5. Cyberpunk ---
export const RegisterCyberpunk = () => (
  <div className="flex items-center justify-center h-[700px] w-full bg-black rounded-xl overflow-hidden border border-gray-800 font-mono p-4">
    <div className="w-full max-w-md p-0.5 bg-gradient-to-b from-cyan-500 to-purple-600 rounded-sm">
      <div className="bg-gray-900 p-8">
        <div className="flex justify-between mb-8">
          <div className="flex gap-1"><div className="w-2 h-2 bg-red-500"></div><div className="w-2 h-2 bg-yellow-500"></div></div>
          <div className="text-[10px] text-gray-500">USER_REG.EXE</div>
        </div>
        <form className="space-y-6">
          <div>
            <label className="text-cyan-400 text-xs mb-1 block">{">> INPUT_USER"}</label>
            <input type="text" className="w-full bg-black border border-gray-700 text-green-400 px-4 py-2 outline-none focus:border-green-500" placeholder="_" />
          </div>
          <button className="w-full py-3 bg-cyan-900/30 border border-cyan-500 text-cyan-400 uppercase font-bold">[ EXECUTE ]</button>
        </form>
      </div>
    </div>
  </div>
);

// --- 6. Social Grid ---
export const RegisterSocial = () => (
  <div className="flex items-center justify-center min-h-[600px] w-full bg-white rounded-xl p-8 shadow-inner">
    <div className="w-full max-w-sm text-center">
      <h1 className="text-3xl font-black mb-2">Get Started</h1>
      <p className="text-gray-500 mb-8">Choose a method to continue.</p>
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button className="py-3 border rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50">Google</button>
        <button className="py-3 bg-black text-white rounded-xl font-bold">GitHub</button>
      </div>
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t"></div></div>
        <span className="relative px-2 bg-white text-xs text-gray-400">OR EMAIL</span>
      </div>
      <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:bg-white outline-none mb-3" />
      <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold">Sign Up</button>
    </div>
  </div>
);

// --- 7. Neumorphic ---
export const RegisterNeumorphic = () => (
  <div className="flex items-center justify-center min-h-[600px] w-full bg-[#e0e5ec] rounded-xl p-8">
    <div className="w-full max-w-sm bg-[#e0e5ec] p-10 rounded-[40px] shadow-[20px_20px_60px_#bec3c9,-20px_-20px_60px_#ffffff]">
      <h2 className="text-2xl font-black text-slate-500 mb-8 text-center">Register</h2>
      <form className="space-y-6">
        <input type="email" placeholder="Email" className="w-full p-4 bg-[#e0e5ec] rounded-2xl shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] outline-none" />
        <button className="w-full py-4 bg-[#e0e5ec] rounded-2xl shadow-[6px_6px_12px_#bec3c9,-6px_-6px_12px_#ffffff] font-bold text-slate-500">Sign Up</button>
      </form>
    </div>
  </div>
);

// --- 8. Minimalist ---
export const RegisterMinimal = () => (
  <div className="flex items-center justify-center h-[500px] w-full bg-white rounded-xl p-8 font-sans">
    <div className="w-full max-w-xs">
      <h1 className="text-2xl font-bold mb-8">Sign Up.</h1>
      <form className="space-y-6">
        <input type="email" placeholder="Email" className="w-full py-2 border-b border-gray-200 outline-none focus:border-black transition-colors" />
        <input type="password" placeholder="Password" className="w-full py-2 border-b border-gray-200 outline-none focus:border-black transition-colors" />
        <button className="w-full py-3 bg-black text-white font-bold text-[10px] tracking-widest mt-4">JOIN NOW</button>
      </form>
    </div>
  </div>
);

// --- 9. Brutalist ---
export const RegisterBrutalist = () => (
  <div className="flex items-center justify-center min-h-[600px] w-full bg-yellow-300 rounded-xl p-8 border-4 border-black font-sans">
    <div className="w-full max-w-sm bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] uppercase">
      <h2 className="text-4xl font-black italic mb-8">Join!</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Alias" className="w-full border-4 border-black p-4 font-bold outline-none" />
        <button className="w-full py-4 bg-black text-white font-black text-xl hover:translate-x-1 hover:translate-y-1 transition-all">SIGN UP -></button>
      </form>
    </div>
  </div>
);

// --- 10. Overlay ---
export const RegisterOverlay = () => (
  <div className="relative h-[700px] w-full rounded-xl overflow-hidden shadow-2xl flex font-sans">
    <div className="absolute inset-0">
      <img src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="bg" />
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
    <div className="relative z-10 w-full max-w-[450px] bg-white/95 backdrop-blur ml-auto p-12 flex flex-col justify-center">
      <h1 className="text-3xl font-bold mb-2">Create Account</h1>
      <p className="text-gray-500 mb-8">Sign up to explore our collection.</p>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md outline-none" />
        <button className="w-full py-3 bg-black text-white font-bold rounded-md">Register</button>
      </form>
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
            <CopyButton jsxCode={`<div className="flex h-[730px] w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xl font-sans">
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
      <div className="hidden md:flex w-1/2 bg-slate-900 p-12 flex-col justify-center text-white relative">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6">Join 10,000+ users</h2>
          <ul className="space-y-4 mb-12">
            <li className="flex items-center gap-3">✓ Unlimited Projects</li>
            <li className="flex items-center gap-3">✓ Analytics Dashboard</li>
            <li className="flex items-center gap-3">✓ 24/7 Priority Support</li>
          </ul>
        </div>
      </div>
    </div>`} htmlCode={`<div class="saas-reg-container">
  <div class="form-panel">
    <h1>Create Account</h1>
    <form class="reg-form">
      <input type="text" placeholder="Full Name">
      <input type="email" placeholder="Email Address">
      <button type="submit" class="primary-btn">Get Started</button>
    </form>
  </div>
</div>`} cssCode={`.saas-reg-container { display: flex; height: 730px; background: white; border-radius: 20px; overflow: hidden; font-family: sans-serif; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
.form-panel { width: 50%; padding: 48px; display: flex; flex-direction: column; justify-content: center; }
.form-panel h1 { font-size: 30px; font-weight: 700; color: #111827; margin-bottom: 8px; }
.form-panel p { color: #6b7280; margin-bottom: 32px; }
.reg-form { display: flex; flex-direction: column; gap: 16px; }
.reg-form input { width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; outline: none; transition: 0.2s; }
.reg-form input:focus { ring: 2px solid #2563eb; border-color: #2563eb; }
.primary-btn { width: 100%; padding: 12px; background: #2563eb; color: white; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; transition: 0.2s; }
.primary-btn:hover { background: #1d4ed8; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">01. SaaS Split Benefits</span>
          <RegisterSaaS />
        </section>

        {/* Variant 02: Wizard */}
        <section className='box-shadow p-4 rounded-lg relative group/regi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/regi:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const RegisterWizard = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="flex items-center justify-center min-h-[600px] w-full bg-gray-50 rounded-xl font-sans p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="flex gap-2 mb-8">
          <div className={\`h-1 flex-1 rounded-full \${step >= 1 ? 'bg-indigo-600' : 'bg-gray-200'}\`}></div>
          <div className={\`h-1 flex-1 rounded-full \${step >= 2 ? 'bg-indigo-600' : 'bg-gray-200'}\`}></div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">\${step === 1 ? 'Personal Info' : 'Security'}</h2>
        {step === 1 ? (
          <div className="space-y-4">
            <input type="text" placeholder="First Name" className="w-full p-3 bg-gray-50 border rounded-lg outline-none" />
            <input type="email" placeholder="Email" className="w-full p-3 bg-gray-50 border rounded-lg outline-none" />
            <button onClick={() => setStep(2)} className="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold">Next Step</button>
          </div>
        ) : (
          <div className="space-y-4">
            <input type="password" placeholder="Password" className="w-full p-3 bg-gray-50 border rounded-lg outline-none" />
            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="flex-1 py-3 border rounded-lg">Back</button>
              <button className="flex-[2] py-3 bg-indigo-600 text-white rounded-lg font-bold">Complete</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};`}
              htmlCode={`<div class="wizard-container">
  <div class="wizard-card">
    <div class="progress-bar">
      <div class="step active"></div>
      <div class="step"></div>
    </div>
    <h2>Personal Info</h2>
    <form class="wizard-form">
      <input type="text" placeholder="First Name">
      <input type="email" placeholder="Email">
      <button type="button" class="next-btn">Next Step</button>
    </form>
  </div>
</div>`}
              cssCode={`.wizard-container { display: flex; align-items: center; justify-content: center; min-height: 600px; width: 100%; background: #f9fafb; border-radius: 12px; font-family: sans-serif; }
.wizard-card { width: 100%; max-width: 448px; background: white; border-radius: 16px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); padding: 32px; border: 1px solid #f3f4f6; }
.progress-bar { display: flex; gap: 8px; margin-bottom: 32px; }
.step { height: 4px; flex: 1; border-radius: 9999px; background: #e5e7eb; }
.step.active { background: #4f46e5; }
.wizard-card h2 { font-size: 24px; font-weight: 700; color: #111827; margin-bottom: 24px; }
.wizard-form input { width: 100%; padding: 12px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 16px; outline: none; }
.next-btn { width: 100%; padding: 12px; background: #4f46e5; color: white; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">02. Multi-Step Wizard</span>
          <RegisterWizard />
        </section>

        {/* Variant 03: Plan Context */}
        <section className='box-shadow p-4 rounded-lg relative group/regi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/regi:opacity-100 transition-opacity">
            <CopyButton jsxCode={`<div className="flex items-center justify-center h-[600px] w-full bg-slate-50 rounded-xl font-sans p-4">
    <div className="w-full max-w-md shadow-2xl">
      <div className="bg-slate-900 text-white p-6 rounded-t-2xl flex justify-between items-center">
        <div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Selected Plan</div>
          <div className="text-xl font-bold">Pro Monthly</div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-black">$29</div>
          <div className="text-xs text-slate-400">/ month</div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-b-2xl border-x border-b border-gray-100">
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
            <input type="email" placeholder="name@company.com" className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-slate-900" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
            <input type="text" placeholder="Acme Inc." className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-slate-900" />
          </div>
          <button className="w-full py-4 bg-emerald-500 text-white font-bold rounded-lg shadow-lg hover:bg-emerald-600 transition-all">Start Pro Trial</button>
        </form>
      </div>
    </div>
  </div>`}
              htmlCode={`<div class="plan-reg">
  <div class="plan-card">
    <div class="plan-header">
      <div class="plan-info">
        <span class="label">SELECTED PLAN</span>
        <span class="name">Pro Monthly</span>
      </div>
      <div class="plan-price">$29 <span>/mo</span></div>
    </div>
    <div class="plan-body">
      <form>
        <label>Work Email</label>
        <input type="email" placeholder="name@company.com">
        <label>Company Name</label>
        <input type="text" placeholder="Acme Inc.">
        <button type="submit">Start Pro Trial</button>
      </form>
    </div>
  </div>
</div>`}
              cssCode={`.plan-reg { display: flex; align-items: center; justify-content: center; height: 600px; width: 100%; background: #f8fafc; border-radius: 12px; font-family: sans-serif; }
.plan-card { width: 100%; max-width: 448px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
.plan-header { background: #0f172a; color: white; padding: 24px; border-radius: 16px 16px 0 0; display: flex; justify-content: space-between; align-items: center; }
.plan-info .label { display: block; font-size: 10px; font-weight: 700; color: #94a3b8; letter-spacing: 0.1em; }
.plan-info .name { font-size: 20px; font-weight: 700; }
.plan-price { font-size: 24px; font-weight: 900; }
.plan-price span { font-size: 12px; color: #94a3b8; font-weight: 400; }
.plan-body { background: white; padding: 32px; border-radius: 0 0 16px 16px; border: 1px solid #f1f5f9; }
.plan-body label { display: block; font-size: 14px; font-weight: 500; color: #374151; margin-bottom: 4px; }
.plan-body input { width: 100%; padding: 12px; border: 1px solid #d1d5db; border-radius: 8px; margin-bottom: 20px; outline: none; }
.plan-body button { width: 100%; padding: 16px; background: #10b981; color: white; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; transition: 0.2s; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">03. Plan Context</span>
          <RegisterPlan />
        </section>

        {/* Variant 04: Glassmorphism */}
        <section className='box-shadow p-4 rounded-lg relative group/regi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/regi:opacity-100 transition-opacity">
            <CopyButton jsxCode={`<div className="relative flex items-center justify-center h-[700px] w-full rounded-xl overflow-hidden bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500 p-4">
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl w-full max-w-sm text-center">
      <h2 className="text-3xl font-bold text-white mb-2">Join Us</h2>
      <p className="text-white/70 mb-8 text-sm lowercase tracking-widest">Exclusive Access</p>
      <form className="space-y-5">
        <input type="email" placeholder="Email Address" className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 outline-none transition-all focus:bg-white/20" />
        <input type="password" placeholder="Password" className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 outline-none transition-all focus:bg-white/20" />
        <button className="w-full py-4 bg-white text-fuchsia-600 font-extrabold rounded-2xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
          SIGN UP
        </button>
      </form>
    </div>
  </div>`}
              htmlCode={`<div class="glass-reg">
  <div class="glass-bg"></div>
  <div class="glass-card">
    <h2>Join Us</h2>
    <p>Exclusive Access</p>
    <form>
      <input type="email" placeholder="Email Address">
      <input type="password" placeholder="Password">
      <button type="submit">SIGN UP</button>
    </form>
  </div>
</div>`}
              cssCode={`.glass-reg { position: relative; display: flex; align-items: center; justify-content: center; height: 700px; width: 100%; border-radius: 12px; overflow: hidden; background: linear-gradient(to top right, #fb7185, #d946ef, #6366f1); font-family: sans-serif; }
.glass-card { position: relative; z-index: 10; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.2); padding: 40px; border-radius: 32px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); width: 100%; max-width: 384px; text-align: center; }
.glass-card h2 { color: white; font-size: 30px; margin-bottom: 8px; font-weight: 700; }
.glass-card p { color: rgba(255, 255, 255, 0.7); font-size: 14px; text-transform: lowercase; letter-spacing: 2px; margin-bottom: 32px; }
.glass-card input { width: 100%; padding: 16px 20px; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 16px; color: white; margin-bottom: 20px; outline: none; }
.glass-card input::placeholder { color: rgba(255, 255, 255, 0.6); }
.glass-card button { width: 100%; padding: 16px; background: white; color: #d946ef; border: none; border-radius: 16px; font-weight: 800; font-size: 14px; cursor: pointer; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3); transition: 0.2s; }
.glass-card button:hover { transform: scale(1.02); }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">04. Glassmorphism</span>
          <RegisterGlass />
        </section>

        {/* Variant 05: Cyberpunk */}
        <section className='box-shadow p-4 rounded-lg relative group/regi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/regi:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const RegisterCyberpunk = () => (
  <div className="flex items-center justify-center h-[700px] w-full bg-black rounded-xl overflow-hidden border border-gray-800 font-mono p-4">
    <div className="w-full max-w-md p-0.5 bg-gradient-to-b from-cyan-500 to-purple-600 rounded-sm shadow-[0_0_20px_rgba(6,182,212,0.3)]">
      <div className="bg-gray-900 p-8 border border-black/50">
        <div className="flex justify-between items-center mb-10 border-b border-gray-800 pb-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <div className="text-[10px] text-cyan-500/50 tracking-widest font-black uppercase">User_Reg.exe</div>
        </div>
        <form className="space-y-8">
          <div className="group">
            <label className="text-cyan-400 text-xs mb-2 block font-black uppercase tracking-tighter group-focus-within:text-white transition-colors">{">> Input_Alias"}</label>
            <div className="relative">
              <input type="text" className="w-full bg-black/50 border border-gray-700 text-green-400 px-4 py-3 outline-none focus:border-cyan-500 transition-all font-bold placeholder-gray-800" placeholder="_" />
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-focus-within:opacity-100 pointer-events-none"></div>
            </div>
          </div>
          <div className="group shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
            <label className="text-purple-400 text-xs mb-2 block font-black uppercase tracking-tighter group-focus-within:text-white transition-colors">{">> Secure_Credential"}</label>
            <input type="password" placeholder="********" className="w-full bg-black/50 border border-gray-700 text-purple-400 px-4 py-3 outline-none focus:border-purple-500 transition-all font-bold placeholder-gray-800" />
          </div>
          <button className="w-full py-4 bg-cyan-950/20 border-2 border-cyan-500 text-cyan-400 uppercase font-black text-sm tracking-[0.3em] transition-all hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] active:scale-95">
            [ Execute_Finalize ]
          </button>
        </form>
        <div className="mt-8 flex justify-between text-[9px] text-gray-700 uppercase font-bold tracking-widest">
          <span>Sts: Ready</span>
          <span>Enc: Aes-256</span>
          <span>Sys: Online</span>
        </div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="cyber-reg">
  <div class="cyber-outline">
    <div class="cyber-inner">
      <div class="cyber-header">
        <div class="dots"><span></span><span></span></div>
        <div class="title">USER_REG.EXE</div>
      </div>
      <form>
        <div class="field">
          <label> >> INPUT_ALIAS</label>
          <input type="text" placeholder="_">
        </div>
        <button type="submit">[ EXECUTE ]</button>
      </form>
    </div>
  </div>
</div>`}
              cssCode={`.cyber-reg { display: flex; align-items: center; justify-content: center; height: 700px; width: 100%; background: black; border-radius: 12px; font-family: monospace; }
.cyber-outline { width: 100%; max-width: 448px; background: linear-gradient(#06b6d4, #9333ea); padding: 2px; border-radius: 4px; box-shadow: 0 0 20px rgba(6,182,212,0.3); }
.cyber-inner { background: #111827; padding: 32px; color: #06b6d4; }
.cyber-header { display: flex; justify-content: space-between; border-bottom: 1px solid #1f2937; padding-bottom: 16px; margin-bottom: 40px; }
.cyber-header .title { font-size: 10px; font-weight: 900; letter-spacing: 2px; }
.field label { display: block; font-size: 11px; margin-bottom: 8px; color: #06b6d4; }
.field input { width: 100%; background: black; border: 1px solid #374151; color: #4ade80; padding: 12px; outline: none; }
.field input:focus { border-color: #06b6d4; }
.cyber-inner button { width: 100%; padding: 16px; background: rgba(8,145,178,0.1); border: 2px solid #06b6d4; color: #06b6d4; font-weight: 900; text-transform: uppercase; letter-spacing: 4px; margin-top: 32px; cursor: pointer; transition: 0.3s; }
.cyber-inner button:hover { background: #06b6d4; color: black; box-shadow: 0 0 30px #06b6d4; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">05. Cyberpunk Terminal</span>
          <RegisterCyberpunk />
        </section>

        {/* Variant 06: Social Grid */}
        <section className='box-shadow p-4 rounded-lg relative group/regi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/regi:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const RegisterSocial = () => (
  <div className="flex items-center justify-center min-h-[650px] w-full bg-white rounded-xl p-8 font-sans border border-gray-100 shadow-inner">
    <div className="w-full max-w-sm text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl mb-6 shadow-sm">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" /></svg>
      </div>
      <h1 className="text-3xl font-black text-gray-900 mb-2 tracking-tight uppercase">Get Started</h1>
      <p className="text-gray-500 mb-10 font-medium">Connect and collaborate instantly.</p>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <button className="py-4 border border-gray-200 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95">
          <GoogleIcon /> Google
        </button>
        <button className="py-4 bg-[#24292e] text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-black transition-all active:scale-95 shadow-lg shadow-gray-200">
          GitHub
        </button>
      </div>
      
      <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] mb-8 hover:bg-blue-700 transition-all active:scale-[0.98] shadow-xl shadow-blue-100">
        Sign Up with Apple
      </button>

      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
        <span className="relative px-4 bg-white text-[10px] font-black text-gray-400 uppercase tracking-widest">or email access</span>
      </div>

      <div className="space-y-4">
        <input type="email" placeholder="professional@email.com" className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all font-medium text-gray-900 placeholder-gray-400" />
        <button className="w-full py-5 bg-gray-900 text-white rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-black transition-all">Continue -></button>
      </div>
      
      <p className="mt-8 text-xs text-gray-400 font-medium leading-relaxed">
        By continuing, you agree to our <a href="#" className="text-gray-900 underline underline-offset-4 decoration-2 decoration-blue-500/20">Terms</a> and <a href="#" className="text-gray-900 underline underline-offset-4 decoration-2 decoration-blue-500/20">Privacy</a>.
      </p>
    </div>
  </div>
);`}
              htmlCode={`<div class="social-reg">
  <div class="reg-wrapper">
    <h1>Get Started</h1>
    <div class="platforms">
      <button class="google-btn">Google</button>
      <button class="github-btn">GitHub</button>
    </div>
    <div class="divider"><span>OR EMAIL</span></div>
    <form>
      <input type="email" placeholder="Email Address">
      <button type="submit">Continue -></button>
    </form>
  </div>
</div>`}
              cssCode={`.social-reg { display: flex; align-items: center; justify-content: center; min-height: 650px; width: 100%; background: white; border-radius: 12px; font-family: sans-serif; }
.reg-wrapper { width: 100%; max-width: 384px; text-align: center; padding: 40px; }
.reg-wrapper h1 { font-size: 30px; font-weight: 900; color: #111827; margin-bottom: 40px; text-transform: uppercase; }
.platforms { display: flex; gap: 16px; margin-bottom: 24px; }
.platforms button { flex: 1; padding: 16px; border-radius: 16px; border: 1px solid #e5e7eb; font-weight: 900; font-size: 12px; text-transform: uppercase; cursor: pointer; transition: 0.2s; }
.github-btn { background: #24292e; color: white; border: none !important; }
.divider { position: relative; margin: 32px 0; border-top: 1px solid #f3f4f6; }
.divider span { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 0 8px; font-size: 10px; font-weight: 900; color: #9ca3af; }
.reg-wrapper input { width: 100%; padding: 16px; background: #f9fafb; border: 1px solid transparent; border-radius: 16px; margin-bottom: 16px; outline: none; }
.reg-wrapper input:focus { background: white; border-color: #2563eb; }
.reg-wrapper button[type="submit"] { width: 100%; padding: 16px; background: #111827; color: white; border: none; border-radius: 16px; font-weight: 900; text-transform: uppercase; cursor: pointer; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">06. Social Grid Engagement</span>
          <RegisterSocial />
        </section>

        {/* Variant 07: Neumorphic */}
        <section className='box-shadow p-4 rounded-lg relative group/regi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/regi:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const RegisterNeumorphic = () => (
  <div className="flex items-center justify-center min-h-[600px] w-full bg-[#e0e5ec] rounded-xl p-8 font-sans">
    <div className="w-full max-w-sm bg-[#e0e5ec] p-10 rounded-[40px] shadow-[20px_20px_60px_#bec3c9,-20px_-20px_60px_#ffffff]">
      <div className="w-16 h-16 mx-auto mb-8 bg-[#e0e5ec] rounded-3xl shadow-[6px_6px_12px_#bec3c9,-6px_-6px_12px_#ffffff] flex items-center justify-center text-slate-500">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
      </div>
      <h2 className="text-2xl font-black text-slate-600 mb-10 text-center tracking-tight">Create Account</h2>
      <form className="space-y-8">
        <div>
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4 mb-2 block">Identity</label>
          <input type="text" placeholder="Your Name" className="w-full p-4 bg-[#e0e5ec] rounded-2xl shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] outline-none text-slate-600 placeholder-slate-400 border-none focus:placeholder-transparent transition-all" />
        </div>
        <div>
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4 mb-2 block">Electronic Mail</label>
          <input type="email" placeholder="name@domain.com" className="w-full p-4 bg-[#e0e5ec] rounded-2xl shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] outline-none text-slate-600 placeholder-slate-400 border-none focus:placeholder-transparent transition-all" />
        </div>
        <button className="w-full py-5 bg-[#e0e5ec] rounded-2xl shadow-[6px_6px_12px_#bec3c9,-6px_-6px_12px_#ffffff] font-black text-slate-600 uppercase text-xs tracking-widest active:shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff] transition-all hover:text-slate-900 mt-4">
          Join Network
        </button>
      </form>
      <p className="mt-10 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        Secure Node Connection
      </p>
    </div>
  </div>
);`}
              htmlCode={`<div class="neu-reg">
  <div class="neu-card">
    <div class="neu-icon">...</div>
    <h2>Create Account</h2>
    <form>
      <input type="text" placeholder="Your Name">
      <input type="email" placeholder="Email">
      <button type="submit">Join Network</button>
    </form>
  </div>
</div>`}
              cssCode={`.neu-reg { display: flex; align-items: center; justify-content: center; min-height: 600px; width: 100%; background: #e0e5ec; border-radius: 12px; font-family: sans-serif; }
.neu-card { background: #e0e5ec; padding: 40px; border-radius: 40px; box-shadow: 20px 20px 60px #bec3c9, -20px -20px 60px #ffffff; width: 100%; max-width: 384px; }
.neu-card h2 { color: #4b5563; text-align: center; font-size: 24px; font-weight: 900; margin-bottom: 40px; }
.neu-card input { width: 100%; padding: 16px; background: #e0e5ec; border: none; border-radius: 16px; box-shadow: inset 6px 6px 12px #bec3c9, inset -6px -6px 12px #ffffff; margin-bottom: 32px; outline: none; }
.neu-card button { width: 100%; padding: 20px; background: #e0e5ec; border: none; border-radius: 16px; box-shadow: 6px 6px 12px #bec3c9, -6px -6px 12px #ffffff; font-weight: 900; text-transform: uppercase; color: #4b5563; cursor: pointer; transition: 0.2s; }
.neu-card button:active { box-shadow: inset 4px 4px 8px #bec3c9, inset -4px -4px 8px #ffffff; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">07. Soft UI Neumorphic</span>
          <RegisterNeumorphic />
        </section>

        {/* Variant 08: Minimalist */}
        <section className='box-shadow p-4 rounded-lg relative group/regi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/regi:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const RegisterMinimal = () => (
  <div className="flex items-center justify-center h-[500px] w-full bg-white rounded-xl p-8 font-sans border border-gray-50">
    <div className="w-full max-w-xs transition-all duration-700 ease-in-out">
      <h1 className="text-3xl font-light text-gray-900 mb-2">Create Account.</h1>
      <p className="text-gray-400 text-xs mb-10 tracking-widest uppercase">Step into the future.</p>
      
      <form className="space-y-8">
        <div className="group relative">
          <input type="email" placeholder="Email" className="w-full py-3 bg-transparent border-b border-gray-100 outline-none focus:border-black transition-all duration-500 placeholder-gray-300 text-gray-900 font-light" />
          <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-focus-within:w-full transition-all duration-500"></div>
        </div>
        
        <div className="group relative">
          <input type="password" placeholder="Password" className="w-full py-3 bg-transparent border-b border-gray-100 outline-none focus:border-black transition-all duration-500 placeholder-gray-300 text-gray-900 font-light" />
          <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-focus-within:w-full transition-all duration-500"></div>
        </div>

        <button className="w-full py-4 bg-black text-white font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-gray-900 transition-all active:scale-[0.98] mt-4 shadow-2xl shadow-black/10">
          JOIN NOW
        </button>
      </form>
      
      <div className="mt-12 flex justify-between items-center text-[10px] font-bold text-gray-300 uppercase tracking-widest">
        <a href="#" className="hover:text-black transition-colors">Login</a>
        <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
        <a href="#" className="hover:text-black transition-colors">Privacy</a>
        <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
        <a href="#" className="hover:text-black transition-colors">Help</a>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="mini-reg">
  <div class="mini-card">
    <h1>Create Account.</h1>
    <p>Step into the future.</p>
    <form>
      <div class="input-group">
        <input type="email" placeholder="Email">
        <div class="bar"></div>
      </div>
      <button type="submit">JOIN NOW</button>
    </form>
  </div>
</div>`}
              cssCode={`.mini-reg { display: flex; align-items: center; justify-content: center; height: 500px; width: 100%; background: white; border-radius: 12px; font-family: sans-serif; }
.mini-card { width: 100%; max-width: 320px; }
.mini-card h1 { font-size: 30px; font-weight: 300; color: #111827; margin-bottom: 8px; }
.mini-card p { font-size: 10px; color: #9ca3af; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 40px; }
.input-group { position: relative; margin-bottom: 32px; }
.input-group input { width: 100%; padding: 12px 0; border: none; border-bottom: 1px solid #f3f4f6; font-weight: 300; outline: none; }
.input-group .bar { position: absolute; bottom: 0; left: 0; width: 0; height: 1px; background: black; transition: 0.4s; }
.input-group input:focus + .bar { width: 100%; }
.mini-card button { width: 100%; padding: 16px; background: black; color: white; border: none; font-weight: 700; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; cursor: pointer; margin-top: 16px; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">08. Minimalist Typography</span>
          <RegisterMinimal />
        </section>

        {/* Variant 09: Brutalist */}
        <section className='box-shadow p-4 rounded-lg relative group/regi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/regi:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const RegisterBrutalist = () => (
  <div className="flex items-center justify-center min-h-[650px] w-full bg-yellow-300 rounded-xl p-8 border-4 border-black font-sans shadow-[inset_0_0_100px_rgba(0,0,0,0.05)]">
    <div className="w-full max-w-sm bg-white border-4 border-black p-10 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-150">
      <h2 className="text-5xl font-black italic mb-2 uppercase tracking-tighter text-black">JOIN!</h2>
      <p className="text-black font-black text-sm mb-10 border-b-4 border-black pb-4">Create your identity -> </p>
      
      <form className="space-y-6">
        <div>
          <label className="text-xs font-black uppercase mb-1 block">Alias</label>
          <input type="text" placeholder="THE_CHOSEN_ONE" className="w-full border-4 border-black p-4 font-black outline-none focus:bg-yellow-100 placeholder-gray-300" />
        </div>
        <div>
          <label className="text-xs font-black uppercase mb-1 block">Secret Key</label>
          <input type="password" placeholder="********" className="w-full border-4 border-black p-4 font-black outline-none focus:bg-yellow-100 placeholder-gray-300" />
        </div>
        
        <button className="w-full py-5 bg-black text-white font-black text-2xl uppercase hover:bg-yellow-400 hover:text-black transition-colors rotate-[-2deg] hover:rotate-0">
          SIGN UP -!!-
        </button>
      </form>
      
      <div className="mt-12 flex flex-col gap-2 font-black text-[10px] uppercase">
        <a href="#" className="hover:underline decoration-4 decoration-yellow-400">Already a Member?</a>
        <a href="#" className="hover:underline decoration-4 decoration-black">Terms of Chaos</a>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="brutal-reg">
  <div class="brutal-card">
    <h2>JOIN!</h2>
    <p>Create your identity -></p>
    <form>
      <div class="field">
        <label>Alias</label>
        <input type="text" placeholder="THE_CHOSEN_ONE">
      </div>
      <button type="submit">SIGN UP -!!-</button>
    </form>
  </div>
</div>`}
              cssCode={`.brutal-reg { display: flex; align-items: center; justify-content: center; min-height: 650px; width: 100%; background: #fde047; border: 4px solid black; border-radius: 12px; font-family: sans-serif; }
.brutal-card { background: white; border: 4px solid black; padding: 40px; box-shadow: 15px 15px 0 0 #000; width: 100%; max-width: 384px; transition: 0.1s; }
.brutal-card:hover { transform: translate(8px, 8px); box-shadow: none; }
.brutal-card h2 { font-size: 48px; font-weight: 900; font-style: italic; margin-bottom: 8px; }
.brutal-card p { font-weight: 900; border-bottom: 4px solid black; padding-bottom: 16px; margin-bottom: 40px; }
.field { margin-bottom: 24px; }
.field label { display: block; font-size: 12px; font-weight: 900; text-transform: uppercase; margin-bottom: 4px; }
.field input { width: 100%; border: 4px solid black; padding: 16px; font-weight: 900; outline: none; }
.brutal-card button { width: 100%; padding: 20px; background: black; color: white; font-weight: 900; font-size: 24px; text-transform: uppercase; cursor: pointer; transition: 0.2s; transform: rotate(-2deg); }
.brutal-card button:hover { transform: rotate(0); background: #fde047; color: black; }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">09. Brutalist Pop</span>
          <RegisterBrutalist />
        </section>

        {/* Variant 10: Overlay */}
        <section className='box-shadow p-4 rounded-lg relative group/regi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/regi:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const RegisterOverlay = () => (
  <div className="relative h-[750px] w-full rounded-xl overflow-hidden shadow-2xl flex font-sans group/main border border-gray-100">
    <div className="absolute inset-0">
      <img src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-80 group-hover/main:grayscale-0 group-hover/main:scale-105 transition-all duration-1000" alt="bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
    </div>
    
    <div className="relative z-10 w-full max-w-[500px] bg-white/95 backdrop-blur-md ml-auto p-16 flex flex-col justify-center border-l border-white/20 shadow-[-20px_0_40px_rgba(0,0,0,0.1)]">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">Create Account</h1>
        <p className="text-gray-500 font-medium">Join our global community of designers.</p>
      </div>

      <form className="space-y-5">
        <div>
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">Identity</label>
          <input type="text" placeholder="Full Name" className="w-full px-5 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-black focus:ring-4 focus:ring-black/5 transition-all font-medium" />
        </div>
        <div>
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">Access Point</label>
          <input type="email" placeholder="email@address.com" className="w-full px-5 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-black focus:ring-4 focus:ring-black/5 transition-all font-medium" />
        </div>
        <div>
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">Security Key</label>
          <input type="password" placeholder="********" className="w-full px-5 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-black focus:ring-4 focus:ring-black/5 transition-all font-medium" />
        </div>
        
        <button className="w-full py-4.5 bg-black text-white font-bold rounded-xl shadow-xl hover:bg-gray-900 transition-all active:scale-[0.99] mt-6 flex items-center justify-center gap-2">
          Start Journey
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </button>
      </form>
      
      <p className="mt-10 text-center text-sm text-gray-500">
        Already have an account? <a href="#" className="font-bold text-black border-b-2 border-black/10 hover:border-black transition-all">Log in</a>
      </p>
    </div>
  </div>
);`}
              htmlCode={`<div class="overlay-reg">
  <div class="bg-img"></div>
  <div class="form-card">
    <h1>Create Account</h1>
    <form>
      <input type="text" placeholder="Full Name">
      <input type="email" placeholder="Email Address">
      <button type="submit">Start Journey</button>
    </form>
  </div>
</div>`}
              cssCode={`.overlay-reg { position: relative; height: 750px; width: 100%; border-radius: 12px; overflow: hidden; display: flex; font-family: sans-serif; }
.bg-img { position: absolute; inset: 0; background: url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop') center/cover; }
.bg-img::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to right, rgba(0,0,0,0.8), transparent); }
.form-card { position: relative; z-index: 10; width: 100%; max-width: 500px; margin-left: auto; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(12px); padding: 64px; display: flex; flex-direction: column; justify-content: center; }
.form-card h1 { font-size: 36px; font-weight: 800; color: #111827; margin-bottom: 40px; }
.form-card input { width: 100%; padding: 14px 20px; border: 1px solid #e5e7eb; border-radius: 12px; margin-bottom: 24px; outline: none; transition: 0.2s; }
.form-card input:focus { border-color: black; }
.form-card button { width: 100%; padding: 18px; background: black; color: white; border: none; border-radius: 12px; font-weight: 700; cursor: pointer; transition: 0.2s; transform: translateY(0); }
.form-card button:hover { transform: translateY(-2px); }`} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">10. Image Sidebar Registration</span>
          <RegisterOverlay />
        </section>

      </div>
    </div>
  );
};

export default RegisterGallery;