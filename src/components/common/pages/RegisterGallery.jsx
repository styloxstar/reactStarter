import React, { useState } from 'react';

// --- Shared Icons ---
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
);

// --- 1. The SaaS Split (With Benefits) ---
export const RegisterSaaS = () => {
  return (
    <div className="flex h-[700px] w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xl">
      {/* Left: Form */}
      <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create an account</h1>
        <p className="text-gray-500 mb-8">Start your 30-day free trial. No credit card required.</p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" placeholder="John Doe" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" placeholder="john@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" placeholder="Create a password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
            <p className="text-xs text-gray-400 mt-1">Must be at least 8 characters.</p>
          </div>
          
          <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">Get Started</button>
          
          <button className="w-full py-3 border border-gray-300 rounded-lg font-medium text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50">
            <GoogleIcon /> Sign up with Google
          </button>
        </form>
        
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account? <a href="#" className="text-blue-600 font-medium hover:underline">Log in</a>
        </p>
      </div>
      
      {/* Right: Benefits */}
      <div className="hidden md:flex w-1/2 bg-slate-900 p-12 flex-col justify-center text-white">
        <h2 className="text-3xl font-bold mb-6">Join 10,000+ users</h2>
        <ul className="space-y-4">
          <li className="flex items-center gap-3"><CheckIcon /> <span>Unlimited Projects</span></li>
          <li className="flex items-center gap-3"><CheckIcon /> <span>Analytics Dashboard</span></li>
          <li className="flex items-center gap-3"><CheckIcon /> <span>24/7 Priority Support</span></li>
          <li className="flex items-center gap-3"><CheckIcon /> <span>Export to PDF/CSV</span></li>
        </ul>
        <div className="mt-12 p-6 bg-slate-800 rounded-xl border border-slate-700">
          <p className="italic text-slate-300 mb-4">"This tool saved us 20 hours a week. I can't imagine working without it."</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
            <div>
              <div className="font-bold">Alex Chen</div>
              <div className="text-xs text-slate-400">CTO at TechFlow</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 2. The Multi-Step Wizard ---
export const RegisterWizard = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="flex items-center justify-center h-[600px] w-full bg-gray-50 rounded-xl">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        {/* Progress Bar */}
        <div className="flex gap-2 mb-8">
          <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
          <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {step === 1 ? 'Personal Info' : 'Security'}
        </h2>

        {step === 1 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-8 duration-300">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">First Name</label>
                <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Last Name</label>
                <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-indigo-500" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email Address</label>
              <input type="email" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-indigo-500" />
            </div>
            <button onClick={() => setStep(2)} className="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors mt-4">
              Next Step
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-8 duration-300">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Password</label>
              <input type="password" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Confirm Password</label>
              <input type="password" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-indigo-500" />
            </div>
            <div className="flex items-start gap-2 mt-4">
              <input type="checkbox" className="mt-1" />
              <p className="text-xs text-gray-500">I agree to the <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.</p>
            </div>
            <div className="flex gap-3 pt-2">
              <button onClick={() => setStep(1)} className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-50 transition-colors">Back</button>
              <button className="flex-[2] py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors">Create Account</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- 3. The Plan Context (Selected Plan) ---
export const RegisterPlan = () => {
  return (
    <div className="flex items-center justify-center h-[700px] w-full bg-slate-50 rounded-xl">
      <div className="w-full max-w-md">
        {/* Plan Banner */}
        <div className="bg-slate-900 text-white p-6 rounded-t-2xl flex justify-between items-center">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Selected Plan</div>
            <div className="text-xl font-bold">Pro Monthly</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">$29</div>
            <div className="text-xs text-slate-400">/ month</div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-b-2xl shadow-xl border-x border-b border-gray-100">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Work Email</label>
              <input type="email" className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-slate-900 focus:border-slate-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input type="text" className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-slate-900 focus:border-slate-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-slate-900 focus:border-slate-900" />
            </div>
            <button className="w-full py-4 bg-emerald-500 text-white font-bold rounded-md hover:bg-emerald-600 shadow-lg shadow-emerald-200 transition-all">
              Complete Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- 4. The Glassmorphism (Register) ---
export const RegisterGlass = () => {
  return (
    <div className="relative flex items-center justify-center h-[700px] w-full rounded-xl overflow-hidden bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500">
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl w-full max-w-sm">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Join Us</h2>
        <p className="text-white/70 text-center mb-8 text-sm">Enter your details to start the journey.</p>
        
        <form className="space-y-4">
          <div className="relative">
            <input type="text" placeholder="Username" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:bg-white/20 focus:border-white outline-none transition-colors" />
          </div>
          <div className="relative">
            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:bg-white/20 focus:border-white outline-none transition-colors" />
          </div>
          <div className="relative">
            <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:bg-white/20 focus:border-white outline-none transition-colors" />
          </div>
          
          <button className="w-full py-3 bg-white text-fuchsia-600 font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-white/60 text-xs">By signing up, you agree to our Terms.</p>
        </div>
      </div>
    </div>
  );
};

// --- 5. The Cyberpunk (Terminal Style) ---
export const RegisterCyberpunk = () => {
  return (
    <div className="flex items-center justify-center h-[700px] w-full bg-black rounded-xl overflow-hidden border border-gray-800">
      <div className="w-full max-w-md p-2 bg-gradient-to-b from-cyan-500 to-purple-600 rounded-sm">
        <div className="bg-gray-900 p-8 h-full">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-auto font-mono text-xs text-gray-500">USER_REGISTRATION.EXE</div>
          </div>

          <form className="space-y-6 font-mono">
            <div>
              <label className="text-cyan-400 text-xs mb-1 block">>> INPUT_USER_ID</label>
              <input type="text" className="w-full bg-black border border-gray-700 text-green-400 px-4 py-2 focus:border-green-500 focus:outline-none" placeholder="_" />
            </div>
            <div>
              <label className="text-cyan-400 text-xs mb-1 block">>> INPUT_EMAIL_ADDRESS</label>
              <input type="email" className="w-full bg-black border border-gray-700 text-green-400 px-4 py-2 focus:border-green-500 focus:outline-none" />
            </div>
            <div>
              <label className="text-cyan-400 text-xs mb-1 block">>> SET_ACCESS_KEY</label>
              <input type="password" className="w-full bg-black border border-gray-700 text-green-400 px-4 py-2 focus:border-green-500 focus:outline-none" />
            </div>

            <button className="w-full py-3 mt-4 bg-cyan-900/30 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all uppercase tracking-widest text-sm font-bold">
              [ EXECUTE_REGISTRATION ]
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- 6. The Social Grid (Apps) ---
export const RegisterSocial = () => {
  return (
    <div className="flex items-center justify-center h-[700px] w-full bg-white rounded-xl">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Join the club.</h1>
        <p className="text-slate-500 mb-8">Choose your preferred method to sign up.</p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
            <GoogleIcon /> Google
          </button>
          <button className="flex items-center justify-center gap-2 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors">
            GitHub
          </button>
          <button className="flex items-center justify-center gap-2 py-3 bg-[#1877F2] text-white rounded-xl hover:opacity-90 transition-colors">
            Facebook
          </button>
          <button className="flex items-center justify-center gap-2 py-3 bg-[#1DA1F2] text-white rounded-xl hover:opacity-90 transition-colors">
            Twitter
          </button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="px-2 bg-white text-slate-400">Or use email</span></div>
        </div>

        <form className="space-y-3">
          <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none" />
          <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none" />
          <input type="password" placeholder="Password" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none" />
          <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors mt-2">Create Account</button>
        </form>
      </div>
    </div>
  );
};

// --- 7. The Neumorphic (Soft UI) ---
export const RegisterNeumorphic = () => {
  return (
    <div className="flex items-center justify-center h-[700px] w-full bg-[#e0e5ec] rounded-xl">
      <div className="w-full max-w-sm p-8 rounded-[40px] bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
        <h2 className="text-2xl font-bold text-gray-600 text-center mb-8">Sign Up</h2>
        <form className="space-y-6">
          <div className="rounded-xl bg-[#e0e5ec] p-3 shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
            <input type="text" placeholder="Full Name" className="w-full bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 px-2" />
          </div>
          <div className="rounded-xl bg-[#e0e5ec] p-3 shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
            <input type="email" placeholder="Email Address" className="w-full bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 px-2" />
          </div>
          <div className="rounded-xl bg-[#e0e5ec] p-3 shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
            <input type="password" placeholder="Choose Password" className="w-full bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 px-2" />
          </div>
          <button className="w-full py-4 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] active:scale-95 transition-all">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

// --- 8. The Minimalist (Center Card) ---
export const RegisterMinimal = () => {
  return (
    <div className="flex items-center justify-center h-[700px] w-full bg-white rounded-xl border border-gray-100">
      <div className="w-full max-w-sm px-8">
        <h1 className="text-4xl font-serif text-gray-900 mb-8 italic">Get Started.</h1>
        <form className="space-y-8">
          <div className="relative group">
            <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
          </div>
          <div className="relative group">
            <input type="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
          </div>
          <div className="relative group">
            <input type="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
          </div>
          <button className="w-full py-4 bg-black text-white text-sm uppercase tracking-widest font-bold hover:bg-gray-800 transition-colors">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

// --- 9. The Brutalist (Retro Pop) ---
export const RegisterBrutalist = () => {
  return (
    <div className="flex items-center justify-center h-[700px] w-full bg-purple-500 rounded-xl border-4 border-black">
      <div className="w-full max-w-md bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8">
        <h2 className="text-5xl font-black mb-8 uppercase leading-none">Sign<br/>Up<br/>Now</h2>
        <form className="space-y-4">
          <input type="text" placeholder="NAME" className="w-full p-4 border-4 border-black font-bold focus:outline-none focus:bg-yellow-300 transition-colors" />
          <input type="email" placeholder="EMAIL" className="w-full p-4 border-4 border-black font-bold focus:outline-none focus:bg-yellow-300 transition-colors" />
          <input type="password" placeholder="SECRET CODE" className="w-full p-4 border-4 border-black font-bold focus:outline-none focus:bg-yellow-300 transition-colors" />
          
          <div className="flex items-center gap-3 py-2">
            <div className="w-6 h-6 border-2 border-black flex items-center justify-center cursor-pointer hover:bg-black group">
               <div className="w-3 h-3 bg-transparent group-hover:bg-white"></div>
            </div>
            <span className="font-bold text-sm uppercase">I agree to terms</span>
          </div>

          <button className="w-full py-4 bg-black text-white font-black text-xl border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

// --- 10. The Background Overlay ---
export const RegisterOverlay = () => {
  return (
    <div className="relative flex h-[700px] w-full rounded-xl overflow-hidden">
      <img src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Background" />
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 w-full md:w-[450px] bg-white/95 backdrop-blur h-full ml-auto flex flex-col justify-center p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
        <p className="text-gray-500 mb-8">Sign up to explore our exclusive collection.</p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black focus:border-black outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black focus:border-black outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black focus:border-black outline-none" />
          </div>
          
          <button className="w-full py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors mt-4">
            Register
          </button>
        </form>
        <p className="mt-8 text-xs text-gray-400 text-center">
          Protected by reCAPTCHA and subject to the Google Privacy Policy and Terms of Service.
        </p>
      </div>
    </div>
  );
};


// --- Main Gallery ---
const RegisterGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Registration Page Designs</h1>
        <p className="text-slate-500">Sign-up flows optimized for conversion and style.</p>
      </div>
      
      <div className="space-y-24 max-w-6xl mx-auto">
        
        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">01. SaaS Split Benefits</span>
          <RegisterSaaS />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">02. Multi-Step Wizard</span>
          <RegisterWizard />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">03. Plan Context</span>
          <RegisterPlan />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">04. Glassmorphism</span>
          <RegisterGlass />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">05. Cyberpunk Terminal</span>
          <RegisterCyberpunk />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">06. Social Grid</span>
          <RegisterSocial />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">07. Neumorphic</span>
          <RegisterNeumorphic />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">08. Minimalist</span>
          <RegisterMinimal />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">09. Brutalist Pop</span>
          <RegisterBrutalist />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">10. Image Sidebar</span>
          <RegisterOverlay />
        </section>

      </div>
    </div>
  );
};

export default RegisterGallery;