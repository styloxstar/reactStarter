import React from 'react';
import CopyButton from '../common/CopyButton';

// --- 1. The Glassmorphism Login ---
// *Best viewed on a colorful background*
export const FormGlass = () => (
  <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">
    {/* Decorative Glows */}
    <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
    
    <div className="relative z-10">
      <h2 className="text-3xl font-bold text-white mb-2 text-center">Welcome Back</h2>
      <p className="text-blue-100 text-center mb-8 text-sm">Enter your credentials to access your account.</p>
      
      <form className="space-y-6">
        <div>
          <label className="text-sm font-medium text-blue-100 block mb-1">Email</label>
          <input type="email" placeholder="user@example.com" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all" />
        </div>
        <div>
          <label className="text-sm font-medium text-blue-100 block mb-1">Password</label>
          <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all" />
        </div>
        <div className="flex justify-between items-center text-sm text-blue-200">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-pink-500" /> Remember me
          </label>
          <a href="#" className="hover:text-white hover:underline">Forgot password?</a>
        </div>
        <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-violet-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
          Sign In
        </button>
      </form>
    </div>
  </div>
);

// --- 2. The Split Screen (Marketing) ---
export const FormSplit = () => (
  <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
    {/* Image Side */}
    <div className="relative bg-indigo-600 hidden md:flex flex-col items-center justify-center p-8 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-90"></div>
      <div className="relative z-10 text-center">
        <h3 className="text-3xl font-bold mb-4">Join our Community</h3>
        <p className="text-indigo-100">Unlock exclusive features and meet likeminded creators today.</p>
      </div>
    </div>
    
    {/* Form Side */}
    <div className="p-10 flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Account</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors" />
        <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors" />
        <input type="password" placeholder="Password" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors" />
        <button className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
          Get Started
        </button>
      </form>
      <p className="mt-6 text-center text-xs text-gray-400">
        By signing up, you agree to our <a href="#" className="text-indigo-500">Terms</a>.
      </p>
    </div>
  </div>
);

// --- 3. The Neumorphic Form ---
export const FormNeumorphic = () => (
  <div className="w-full max-w-md p-8 rounded-3xl bg-[#e0e5ec] shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)]">
    <h2 className="text-2xl font-bold text-gray-700 text-center mb-8">Soft UI Login</h2>
    <form className="space-y-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        </div>
        <input type="text" placeholder="Username" className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#e0e5ec] text-gray-700 placeholder-gray-400 shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] focus:outline-none focus:shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff] transition-all" />
      </div>
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
        </div>
        <input type="password" placeholder="Password" className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#e0e5ec] text-gray-700 placeholder-gray-400 shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] focus:outline-none focus:shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff] transition-all" />
      </div>

      <button className="w-full py-3 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] active:scale-95 transition-all">
        Log In
      </button>
    </form>
  </div>
);

// --- 4. The Minimalist (Clean Line) ---
export const FormMinimal = () => (
  <div className="w-full max-w-md p-8 bg-white">
    <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wide">Contact Us.</h2>
    <form className="space-y-8">
      <div className="group">
        <input type="text" required className="w-full py-2 bg-transparent border-b border-gray-300 focus:border-black text-gray-900 outline-none transition-colors peer" />
        <label className="block text-sm text-gray-500 transition-all peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-black peer-valid:-translate-y-6 peer-valid:text-xs">Your Name</label>
      </div>
      <div className="group">
        <input type="email" required className="w-full py-2 bg-transparent border-b border-gray-300 focus:border-black text-gray-900 outline-none transition-colors peer" />
        <label className="block text-sm text-gray-500 transition-all peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-black peer-valid:-translate-y-6 peer-valid:text-xs">Email Address</label>
      </div>
      <div className="group">
        <textarea required rows="1" className="w-full py-2 bg-transparent border-b border-gray-300 focus:border-black text-gray-900 outline-none transition-colors peer resize-none"></textarea>
        <label className="block text-sm text-gray-500 transition-all peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-black peer-valid:-translate-y-6 peer-valid:text-xs">Message</label>
      </div>
      <button className="px-8 py-3 border border-black text-black font-medium hover:bg-black hover:text-white transition-colors uppercase text-sm tracking-widest">
        Send Message
      </button>
    </form>
  </div>
);

// --- 5. The Cyberpunk (Neon Dark) ---
export const FormCyberpunk = () => (
  <div className="w-full max-w-md p-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-xl">
    <div className="bg-gray-900 p-8 rounded-lg">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 mb-6 uppercase tracking-wider">System Access</h2>
      <form className="space-y-4">
        <div>
          <label className="text-xs text-cyan-400 font-mono mb-1 block">/// USERNAME</label>
          <input type="text" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-cyan-50 font-mono rounded focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(34,211,238,0.5)] focus:outline-none transition-all" />
        </div>
        <div>
          <label className="text-xs text-fuchsia-400 font-mono mb-1 block">/// PASSCODE</label>
          <input type="password" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-cyan-50 font-mono rounded focus:border-fuchsia-500 focus:shadow-[0_0_10px_rgba(232,121,249,0.5)] focus:outline-none transition-all" />
        </div>
        <button className="w-full mt-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-black font-bold font-mono uppercase tracking-widest hover:shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all">
          Initialize
        </button>
      </form>
    </div>
  </div>
);

// --- 6. The Floating Label (Material Style) ---
export const FormFloating = () => (
  <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg border border-gray-100">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Account</h2>
    <form className="space-y-5">
      {['First Name', 'Last Name', 'Email'].map((label) => (
        <div key={label} className="relative">
          <input type="text" id={label} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor={label} className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 pointer-events-none">
            {label}
          </label>
        </div>
      ))}
      <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-md transition-all">
        Continue
      </button>
    </form>
  </div>
);

// --- 7. The Newsletter (Inline) ---
export const FormNewsletter = () => (
  <div className="w-full max-w-2xl p-8 bg-slate-900 rounded-2xl flex flex-col md:flex-row items-center gap-6 shadow-2xl">
    <div className="flex-1 text-center md:text-left">
      <h3 className="text-xl font-bold text-white mb-2">Subscribe to our newsletter</h3>
      <p className="text-slate-400 text-sm">Get the latest updates and offers directly in your inbox.</p>
    </div>
    <form className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
      <input type="email" placeholder="you@company.com" className="w-full sm:w-64 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" />
      <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-lg transition-colors whitespace-nowrap">
        Subscribe
      </button>
    </form>
  </div>
);

// --- 8. The Brutalist (Retro Pop) ---
export const FormBrutalist = () => (
  <div className="w-full max-w-md p-8 bg-yellow-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
    <h2 className="text-4xl font-black text-black mb-6 uppercase italic">Sign Up!</h2>
    <form className="space-y-4">
      <div>
        <label className="font-bold text-black border-b-2 border-black inline-block mb-1">USERNAME</label>
        <input type="text" className="w-full p-3 bg-white border-2 border-black focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow" />
      </div>
      <div>
        <label className="font-bold text-black border-b-2 border-black inline-block mb-1">PASSWORD</label>
        <input type="password" className="w-full p-3 bg-white border-2 border-black focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow" />
      </div>
      <button className="w-full py-4 mt-4 bg-black text-white font-black text-xl hover:bg-white hover:text-black border-2 border-black transition-colors">
        GO!
      </button>
    </form>
  </div>
);

// --- 9. The Credit Card (Payment) ---
export const FormPayment = () => (
  <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-2xl border border-gray-100">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold text-gray-800">Payment Details</h2>
      <div className="flex gap-2">
         <div className="w-8 h-5 bg-gray-200 rounded"></div>
         <div className="w-8 h-5 bg-gray-200 rounded"></div>
      </div>
    </div>
    <form className="space-y-4">
      <div>
        <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Card Number</label>
        <div className="relative mt-1">
          <input type="text" placeholder="0000 0000 0000 0000" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
          <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Expiry</label>
          <input type="text" placeholder="MM / YY" className="w-full mt-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
        </div>
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">CVC</label>
          <input type="text" placeholder="123" className="w-full mt-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
        </div>
      </div>
      <button className="w-full py-4 mt-2 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors flex justify-center items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
        Pay Now
      </button>
    </form>
  </div>
);

// --- 10. The Gradient Border (Search) ---
export const FormSearch = () => (
  <div className="w-full max-w-lg p-1 rounded-2xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
    <div className="bg-white rounded-xl p-2 flex items-center shadow-lg">
      <div className="pl-4 text-gray-400">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </div>
      <input type="text" placeholder="Search the cosmos..." className="w-full p-4 text-gray-700 bg-transparent outline-none text-lg" />
      <button className="px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
        Search
      </button>
    </div>
  </div>
);

// --- Main Gallery ---
const Forms = () => {
  return (
    <div className="container box-shadow bg-slate-50 p-6 md:p-12 font-sans overflow-y-auto">
      <h1 className="text-4xl font-bold text-center text-slate-800 mb-4">Modern Form Layouts</h1>
      <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">A collection of responsive, production-ready form components using React & Tailwind CSS.</p>
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 max-w-7xl mx-auto items-start justify-items-center">
        
        {/* 1. Glass */}
        <div className="w-full flex flex-col items-center bg-gradient-to-br from-indigo-900 to-purple-800 p-8 rounded-2xl shadow-inner relative group/form">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/form:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const FormGlass = () => (\n  <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">\n    <h2 className="text-3xl font-bold text-white mb-2 text-center">Welcome Back</h2>\n    <form className="space-y-6">\n      <input type="email" placeholder="user@example.com" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white" />\n      <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white" />\n      <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-violet-600 text-white font-bold rounded-lg">Sign In</button>\n    </form>\n  </div>\n);`} htmlCode={`<div class="glass-form"><h2>Welcome Back</h2><form><input type="email" placeholder="user@example.com"><input type="password" placeholder="••••••••"><button>Sign In</button></form></div>`} cssCode={`.glass-form { max-width: 28rem; padding: 2rem; border-radius: 1rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(24px); border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 25px 50px rgba(0,0,0,0.25); }
.glass-form h2 { font-size: 1.875rem; font-weight: 700; color: #fff; text-align: center; margin-bottom: 0.5rem; }
.glass-form input { width: 100%; padding: 0.75rem 1rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 0.5rem; color: #fff; margin-bottom: 1rem; }
.glass-form button { width: 100%; padding: 0.75rem; background: linear-gradient(90deg, #ec4899, #7c3aed); color: #fff; font-weight: 700; border-radius: 0.5rem; border: none; cursor: pointer; }`} />
          </div>
          <span className="text-xs font-bold text-white/50 uppercase tracking-widest mb-6">01. Glassmorphism</span>
          <FormGlass />
        </div>

        {/* 2. Split */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/form">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/form:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const FormSplit = () => (\n  <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">\n    <div className="bg-indigo-600 p-8 text-white hidden md:flex flex-col justify-center">\n      <h3 className="text-3xl font-bold mb-4">Join our Community</h3>\n    </div>\n    <div className="p-10">\n      <h2 className="text-2xl font-bold mb-6">Create Account</h2>\n      <form><input type="text" placeholder="Full Name" /><input type="email" placeholder="Email" /><button>Get Started</button></form>\n    </div>\n  </div>\n);`} htmlCode={`<div class="split-form"><div class="cta"><h3>Join our Community</h3></div><div class="form-side"><h2>Create Account</h2><form><input type="text" placeholder="Full Name"><input type="email" placeholder="Email"><button>Get Started</button></form></div></div>`} cssCode={`.split-form { display: grid; grid-template-columns: 1fr 1fr; max-width: 56rem; border-radius: 1rem; overflow: hidden; box-shadow: 0 20px 25px rgba(0,0,0,0.1); }
.cta { background: linear-gradient(135deg, #4f46e5, #7c3aed); padding: 2rem; color: #fff; display: flex; flex-direction: column; justify-content: center; }
.form-side { padding: 2.5rem; background: #fff; }
.form-side input { width: 100%; padding: 0.75rem 1rem; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; margin-bottom: 1rem; }
.form-side button { width: 100%; padding: 0.75rem; background: #4f46e5; color: #fff; font-weight: 600; border-radius: 0.5rem; border: none; cursor: pointer; }`} />
          </div>
           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">02. Split Screen</span>
          <FormSplit />
        </div>

        {/* 3. Neumorphic */}
        <div className="w-full flex flex-col items-center bg-[#e0e5ec] p-8 rounded-2xl box-shadow relative group/form">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/form:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const FormNeumorphic = () => (\n  <div className="w-full max-w-md p-8 rounded-3xl bg-[#e0e5ec] shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)]">\n    <h2 className="text-2xl font-bold text-gray-700 text-center mb-8">Soft UI Login</h2>\n    <form className="space-y-6">\n      <input type="text" placeholder="Username" className="w-full py-3 px-4 rounded-xl bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]" />\n      <input type="password" placeholder="Password" />\n      <button className="w-full py-3 rounded-xl">Log In</button>\n    </form>\n  </div>\n);`} htmlCode={`<div class="neu-form"><h2>Soft UI Login</h2><form><input type="text" placeholder="Username"><input type="password" placeholder="Password"><button>Log In</button></form></div>`} cssCode={`.neu-form { max-width: 28rem; padding: 2rem; border-radius: 1.5rem; background: #e0e5ec; box-shadow: 9px 9px 16px rgb(163,177,198), -9px -9px 16px rgba(255,255,255,0.5); }
.neu-form input { width: 100%; padding: 0.75rem 1rem; border-radius: 0.75rem; background: #e0e5ec; border: none; box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff; margin-bottom: 1rem; color: #374151; }
.neu-form button { width: 100%; padding: 0.75rem; border-radius: 0.75rem; background: #e0e5ec; color: #3b82f6; font-weight: 700; border: none; box-shadow: 6px 6px 12px #bebebe, -6px -6px 12px #ffffff; cursor: pointer; }`} />
          </div>
           <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">03. Neumorphic</span>
          <FormNeumorphic />
        </div>

        {/* 4. Minimal */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/form">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/form:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const FormMinimal = () => (\n  <div className="w-full max-w-md p-8 bg-white">\n    <h2 className="text-3xl font-light mb-8">Contact Us.</h2>\n    <form className="space-y-8">\n      <input type="text" required className="w-full py-2 bg-transparent border-b border-gray-300 focus:border-black outline-none" />\n      <textarea required rows="1" className="w-full py-2 bg-transparent border-b border-gray-300 focus:border-black outline-none resize-none" />\n      <button className="px-8 py-3 border border-black text-black hover:bg-black hover:text-white uppercase text-sm">Send Message</button>\n    </form>\n  </div>\n);`} htmlCode={`<div class="minimal-form"><h2>Contact Us.</h2><form><input type="text" placeholder="Your Name"><input type="email" placeholder="Email"><textarea placeholder="Message"></textarea><button>Send Message</button></form></div>`} cssCode={`.minimal-form { max-width: 28rem; padding: 2rem; background: #fff; }
.minimal-form h2 { font-size: 1.875rem; font-weight: 300; margin-bottom: 2rem; letter-spacing: 0.05em; }
.minimal-form input, .minimal-form textarea { width: 100%; padding: 0.5rem 0; background: transparent; border: none; border-bottom: 1px solid #d1d5db; outline: none; margin-bottom: 2rem; font-size: 1rem; }
.minimal-form input:focus, .minimal-form textarea:focus { border-bottom-color: #000; }
.minimal-form button { padding: 0.75rem 2rem; border: 1px solid #000; background: transparent; text-transform: uppercase; font-size: 0.875rem; letter-spacing: 0.1em; cursor: pointer; transition: all 0.2s; }
.minimal-form button:hover { background: #000; color: #fff; }`} />
          </div>
           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">04. Minimalist</span>
          <FormMinimal />
        </div>

        {/* 5. Cyberpunk */}
        <div className="w-full flex flex-col items-center bg-gray-950 p-8 rounded-2xl box-shadow relative group/form">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/form:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const FormCyberpunk = () => (\n  <div className="w-full max-w-md p-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-xl">\n    <div className="bg-gray-900 p-8 rounded-lg">\n      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 mb-6 uppercase">System Access</h2>\n      <form>\n        <input type="text" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-cyan-50 font-mono rounded" />\n        <input type="password" />\n        <button className="w-full py-2 bg-cyan-600 text-black font-bold font-mono uppercase">Initialize</button>\n      </form>\n    </div>\n  </div>\n);`} htmlCode={`<div class="cyber-form-wrap"><div class="cyber-form"><h2>SYSTEM ACCESS</h2><form><label>USERNAME</label><input type="text"><label>PASSCODE</label><input type="password"><button>INITIALIZE</button></form></div></div>`} cssCode={`.cyber-form-wrap { max-width: 28rem; padding: 3px; background: linear-gradient(90deg, #06b6d4, #d946ef); border-radius: 0.75rem; }
.cyber-form { background: #111827; padding: 2rem; border-radius: 0.5rem; }
.cyber-form h2 { font-size: 1.875rem; font-weight: 700; background: linear-gradient(90deg, #22d3ee, #e879f9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-transform: uppercase; margin-bottom: 1.5rem; }
.cyber-form label { font-size: 0.75rem; font-family: monospace; color: #22d3ee; display: block; margin-bottom: 0.25rem; }
.cyber-form input { width: 100%; padding: 0.5rem 1rem; background: #1f2937; border: 1px solid #374151; color: #ecfeff; font-family: monospace; border-radius: 0.25rem; margin-bottom: 1rem; }
.cyber-form button { width: 100%; padding: 0.5rem; background: #0891b2; color: #000; font-weight: 700; font-family: monospace; text-transform: uppercase; border: none; cursor: pointer; letter-spacing: 0.1em; }`} />
          </div>
           <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest mb-6">05. Cyberpunk</span>
          <FormCyberpunk />
        </div>

        {/* 6. Floating Label */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/form">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/form:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const FormFloating = () => (\n  <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">\n    <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Account</h2>\n    <form className="space-y-5">\n      {['First Name','Last Name','Email'].map(label => (\n        <div key={label} className="relative">\n          <input type="text" className="block w-full px-2.5 pb-2.5 pt-4 text-sm border border-gray-300 rounded-lg peer" placeholder=" " />\n          <label className="absolute text-sm text-gray-500 transform -translate-y-4 scale-75 top-2 bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2">{label}</label>\n        </div>\n      ))}\n      <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg">Continue</button>\n    </form>\n  </div>\n);`} htmlCode={`<div class="float-form"><h2>Create Account</h2><form><div class="field"><input type="text" placeholder=" "><label>First Name</label></div><button>Continue</button></form></div>`} cssCode={`.float-form { max-width: 28rem; padding: 2rem; background: #fff; border-radius: 0.75rem; box-shadow: 0 10px 15px rgba(0,0,0,0.1); }
.field { position: relative; margin-bottom: 1.25rem; }
.field input { width: 100%; padding: 1rem 0.625rem 0.625rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 0.875rem; }
.field label { position: absolute; top: 50%; left: 0.625rem; transform: translateY(-50%); font-size: 0.875rem; color: #6b7280; background: #fff; padding: 0 0.25rem; pointer-events: none; transition: all 0.3s; }
.field input:focus + label, .field input:not(:placeholder-shown) + label { top: 0; font-size: 0.75rem; color: #2563eb; }
.float-form button { width: 100%; padding: 0.75rem; background: #2563eb; color: #fff; font-weight: 500; border-radius: 0.5rem; border: none; cursor: pointer; }`} />
          </div>
           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">06. Floating Label</span>
          <FormFloating />
        </div>
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/form">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/form:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const FormNewsletter = () => (\n  <div className="w-full max-w-2xl p-8 bg-slate-900 rounded-2xl flex flex-col md:flex-row items-center gap-6">\n    <div className="flex-1"><h3 className="text-xl font-bold text-white mb-2">Subscribe to our newsletter</h3><p className="text-slate-400 text-sm">Get the latest updates.</p></div>\n    <form className="flex gap-2">\n      <input type="email" placeholder="you@company.com" className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white" />\n      <button className="px-6 py-3 bg-emerald-500 text-slate-900 font-bold rounded-lg">Subscribe</button>\n    </form>\n  </div>\n);`} htmlCode={`<div class="newsletter"><div class="text"><h3>Subscribe</h3><p>Get the latest updates.</p></div><form><input type="email" placeholder="you@company.com"><button>Subscribe</button></form></div>`} cssCode={`.newsletter { max-width: 42rem; padding: 2rem; background: #0f172a; border-radius: 1rem; display: flex; align-items: center; gap: 1.5rem; }
.newsletter .text h3 { font-size: 1.25rem; font-weight: 700; color: #fff; margin-bottom: 0.5rem; }
.newsletter .text p { color: #94a3b8; font-size: 0.875rem; }
.newsletter form { display: flex; gap: 0.5rem; }
.newsletter input { padding: 0.75rem 1rem; background: #1e293b; border: 1px solid #334155; border-radius: 0.5rem; color: #fff; width: 16rem; }
.newsletter button { padding: 0.75rem 1.5rem; background: #10b981; color: #0f172a; font-weight: 700; border-radius: 0.5rem; border: none; cursor: pointer; white-space: nowrap; }`} />
          </div>
           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">07. Inline Newsletter</span>
          <FormNewsletter />
        </div>

        {/* 8. Brutalist */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/form">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/form:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const FormBrutalist = () => (\n  <div className="w-full max-w-md p-8 bg-yellow-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">\n    <h2 className="text-4xl font-black uppercase italic mb-6">Sign Up!</h2>\n    <form>\n      <label className="font-bold border-b-2 border-black">USERNAME</label>\n      <input type="text" className="w-full p-3 bg-white border-2 border-black" />\n      <label className="font-bold border-b-2 border-black">PASSWORD</label>\n      <input type="password" className="w-full p-3 bg-white border-2 border-black" />\n      <button className="w-full py-4 bg-black text-white font-black text-xl">GO!</button>\n    </form>\n  </div>\n);`} htmlCode={`<div class="brutal-form"><h2>SIGN UP!</h2><form><label>USERNAME</label><input type="text"><label>PASSWORD</label><input type="password"><button>GO!</button></form></div>`} cssCode={`.brutal-form { max-width: 28rem; padding: 2rem; background: #facc15; border: 4px solid #000; box-shadow: 8px 8px 0 #000; }
.brutal-form h2 { font-size: 2.25rem; font-weight: 900; text-transform: uppercase; font-style: italic; margin-bottom: 1.5rem; }
.brutal-form label { font-weight: 700; border-bottom: 2px solid #000; display: inline-block; margin-bottom: 0.25rem; }
.brutal-form input { width: 100%; padding: 0.75rem; background: #fff; border: 2px solid #000; margin-bottom: 1rem; }
.brutal-form button { width: 100%; padding: 1rem; background: #000; color: #fff; font-weight: 900; font-size: 1.25rem; border: 2px solid #000; cursor: pointer; margin-top: 1rem; }
.brutal-form button:hover { background: #fff; color: #000; }`} />
          </div>
           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">08. Brutalist</span>
          <FormBrutalist />
        </div>

        {/* 9. Payment */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/form">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/form:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const FormPayment = () => (\n  <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-2xl border border-gray-100">\n    <h2 className="text-xl font-bold text-gray-800 mb-6">Payment Details</h2>\n    <form>\n      <label>Card Number</label>\n      <input type="text" placeholder="0000 0000 0000 0000" />\n      <div className="grid grid-cols-2 gap-4">\n        <div><label>Expiry</label><input placeholder="MM / YY" /></div>\n        <div><label>CVC</label><input placeholder="123" /></div>\n      </div>\n      <button className="w-full py-4 bg-gray-900 text-white font-bold rounded-lg">Pay Now</button>\n    </form>\n  </div>\n);`} htmlCode={`<div class="payment-form"><h2>Payment Details</h2><form><label>Card Number</label><input type="text" placeholder="0000 0000 0000 0000"><div class="row"><div><label>Expiry</label><input placeholder="MM/YY"></div><div><label>CVC</label><input placeholder="123"></div></div><button>Pay Now</button></form></div>`} cssCode={`.payment-form { max-width: 28rem; padding: 1.5rem; background: #fff; border-radius: 0.75rem; box-shadow: 0 25px 50px rgba(0,0,0,0.1); border: 1px solid #f3f4f6; }
.payment-form label { font-size: 0.75rem; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.25rem; }
.payment-form input { width: 100%; padding: 0.75rem 1rem; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; margin-bottom: 1rem; }
.row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.payment-form button { width: 100%; padding: 1rem; background: #111827; color: #fff; font-weight: 700; border-radius: 0.5rem; border: none; cursor: pointer; }`} />
          </div>
           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">09. Payment Card</span>
          <FormPayment />
        </div>

        {/* 10. Search */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/form">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/form:opacity-100 transition-opacity">
            <CopyButton jsxCode={`const FormSearch = () => (\n  <div className="w-full max-w-lg p-1 rounded-2xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">\n    <div className="bg-white rounded-xl p-2 flex items-center">\n      <input type="text" placeholder="Search the cosmos..." className="w-full p-4 bg-transparent outline-none text-lg" />\n      <button className="px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg">Search</button>\n    </div>\n  </div>\n);`} htmlCode={`<div class="search-wrap"><div class="search-inner"><input type="text" placeholder="Search the cosmos..."><button>Search</button></div></div>`} cssCode={`.search-wrap { max-width: 32rem; padding: 3px; border-radius: 1rem; background: linear-gradient(90deg, #fb7185, #d946ef, #6366f1); }
.search-inner { background: #fff; border-radius: 0.75rem; padding: 0.5rem; display: flex; align-items: center; box-shadow: 0 10px 15px rgba(0,0,0,0.1); }
.search-inner input { flex: 1; padding: 1rem; background: transparent; border: none; outline: none; font-size: 1.125rem; }
.search-inner button { padding: 0.5rem 1.5rem; background: #111827; color: #fff; font-weight: 600; border-radius: 0.5rem; border: none; cursor: pointer; }`} />
          </div>
           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">10. Gradient Search</span>
          <FormSearch />
        </div>

      </div>
    </div>
  );
};

export default Forms;