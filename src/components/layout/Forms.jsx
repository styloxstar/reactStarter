import React from 'react';

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
        <div className="w-full flex flex-col items-center bg-gradient-to-br from-indigo-900 to-purple-800 p-8 rounded-2xl shadow-inner">
          <span className="text-xs font-bold text-white/50 uppercase tracking-widest mb-6">01. Glassmorphism</span>
          <FormGlass />
        </div>

        {/* 2. Split */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg">
           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">02. Split Screen</span>
          <FormSplit />
        </div>

        {/* 3. Neumorphic */}
        <div className="w-full flex flex-col items-center bg-[#e0e5ec] p-8 rounded-2xl box-shadow">
           <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">03. Neumorphic</span>
          <FormNeumorphic />
        </div>

        {/* 4. Minimal */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg">
           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">04. Minimalist</span>
          <FormMinimal />
        </div>

        {/* 5. Cyberpunk */}
        <div className="w-full flex flex-col items-center bg-gray-950 p-8 rounded-2xl box-shadow">
           <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest mb-6">05. Cyberpunk</span>
          <FormCyberpunk />
        </div>

        {/* 6. Floating Label */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg">
           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">06. Floating Label</span>
          <FormFloating />
        </div>
        {/* 7. Newsletter */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg">
           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">07. Inline Newsletter</span>
          <FormNewsletter />
        </div>

        {/* 8. Brutalist */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg">
           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">08. Brutalist</span>
          <FormBrutalist />
        </div>

        {/* 9. Payment */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg">
           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">09. Payment Card</span>
          <FormPayment />
        </div>

        {/* 10. Search */}
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg">
           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">10. Gradient Search</span>
          <FormSearch />
        </div>

      </div>
    </div>
  );
};

export default Forms;