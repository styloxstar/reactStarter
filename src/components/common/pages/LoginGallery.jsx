import React, { useState } from 'react';
import CopyButton from '../CopyButton';

// --- Shared Icons ---
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
);

const EyeIcon = ({ visible, onClick }) => (
  <button type="button" onClick={onClick} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
    {visible ? (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268-2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
    ) : (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268-2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
    )}
  </button>
);

// --- 1. The Standard Split (SaaS) ---
export const LoginSplit = () => {
  return (
    <div className="flex h-[600px] w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xl">
      <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
          <p className="text-gray-500 mt-2">Please enter your details.</p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" placeholder="••••••••" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-blue-600 font-medium hover:underline">Forgot password?</a>
          </div>
          <button className="w-full py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">Sign in</button>
        </form>
        <p className="mt-8 text-center text-sm text-gray-600">Don't have an account? <a href="#" className="text-blue-600 font-medium hover:underline">Sign up</a></p>
      </div>
      <div className="hidden md:block w-1/2 bg-blue-50 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Login Visual" />
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
      </div>
    </div>
  );
};

// --- 2. The Centered Card (Simple) ---
export const LoginCard = () => {
  return (
    <div className="flex items-center justify-center h-[600px] w-full bg-gray-50 rounded-xl">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeLineWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email Address</label>
            <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Password</label>
            <input type="password" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
          </div>
          <button className="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-transform active:scale-95">Sign In</button>
        </form>
      </div>
    </div>
  );
};

// --- 3. The Glassmorphism (Vibrant) ---
export const LoginGlass = () => {
  return (
    <div className="relative flex items-center justify-center h-[600px] w-full rounded-xl overflow-hidden bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500">
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-300 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-pulse"></div>
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-sm">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Hello Again!</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:bg-white/30 outline-none transition-colors" />
          <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:bg-white/30 outline-none transition-colors" />
          <button className="w-full py-3 bg-white text-purple-600 font-bold rounded-lg shadow-lg hover:bg-opacity-90 active:scale-95 transition-all">Log In</button>
        </form>
      </div>
    </div>
  );
};

// --- 4. The Cyberpunk (Tech) ---
export const LoginCyberpunk = () => {
  return (
    <div className="flex items-center justify-center h-[600px] w-full bg-black relative rounded-xl overflow-hidden border border-gray-800 font-mono">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      <div className="relative z-10 w-full max-w-md p-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-sm">
        <div className="bg-gray-900 p-8">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-8 tracking-widest uppercase">System Access</h2>
          <form className="space-y-6">
            <input type="text" placeholder="NET_ID" className="w-full bg-black border border-gray-800 text-cyan-400 px-4 py-3 focus:border-cyan-500 outline-none" />
            <input type="password" placeholder="PASSCODE" className="w-full bg-black border border-gray-800 text-pink-400 px-4 py-3 focus:border-pink-500 outline-none" />
            <button className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-black font-bold uppercase tracking-widest transition-colors">Initialize_Session</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- 5. The Social First (Modern App) ---
export const LoginSocial = () => {
  return (
    <div className="flex items-center justify-center h-[600px] w-full bg-white rounded-xl">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center mb-2 text-slate-900">Get Started</h1>
        <p className="text-center text-slate-500 mb-8">Log in or sign up to continue.</p>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 rounded-xl font-medium text-slate-700 hover:bg-slate-50 transition-colors">Continue with Google</button>
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-black text-white rounded-xl font-medium hover:bg-slate-800 transition-colors">Continue with GitHub</button>
        </div>
        <div className="relative my-8"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div><div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-slate-500">Or email</span></div></div>
        <form className="space-y-4">
          <input type="email" placeholder="Email address" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white outline-none transition-all" />
          <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">Continue</button>
        </form>
      </div>
    </div>
  );
};

// --- 6. The Minimalist (Typography) ---
export const LoginMinimal = () => {
  return (
    <div className="flex flex-col justify-center h-[600px] w-full bg-white px-8 md:px-24 rounded-xl border border-gray-100">
      <h1 className="text-5xl font-light text-gray-900 mb-12 tracking-tight">Login.</h1>
      <form className="max-w-md w-full space-y-8">
        <input type="email" placeholder="Email Address" className="w-full py-4 bg-transparent border-b border-gray-300 text-xl focus:border-black outline-none placeholder-gray-400 transition-colors" />
        <input type="password" placeholder="Password" className="w-full py-4 bg-transparent border-b border-gray-300 text-xl focus:border-black outline-none placeholder-gray-400 transition-colors" />
        <div className="flex items-center justify-between pt-8">
          <button className="text-xl font-medium border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">Enter →</button>
          <a href="#" className="text-gray-400 hover:text-black transition-colors text-sm">Forgot?</a>
        </div>
      </form>
    </div>
  );
};

// --- 7. The Neumorphic (Soft UI) ---
export const LoginNeumorphic = () => {
  return (
    <div className="flex items-center justify-center h-[600px] w-full bg-[#e0e5ec] rounded-xl">
      <div className="w-full max-w-sm p-8 rounded-[30px] bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
        <h2 className="text-2xl font-bold text-gray-600 text-center mb-8">Welcome</h2>
        <form className="space-y-6">
          <div className="rounded-xl bg-[#e0e5ec] p-3 shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
            <input type="text" placeholder="Username" className="w-full bg-transparent border-none outline-none text-gray-600 px-2" />
          </div>
          <div className="rounded-xl bg-[#e0e5ec] p-3 shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
            <input type="password" placeholder="Password" className="w-full bg-transparent border-none outline-none text-gray-600 px-2" />
          </div>
          <button className="w-full py-3 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] active:scale-95 transition-all">Sign In</button>
        </form>
      </div>
    </div>
  );
};

// --- 8. The Floating Labels (Material) ---
export const LoginMaterial = () => {
  return (
    <div className="flex items-center justify-center h-[600px] w-full bg-white rounded-xl border border-gray-100">
      <div className="w-full max-w-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">Sign In</h2>
        <form className="space-y-6">
          <div className="relative">
            <input type="email" id="mat-email" className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600 py-2 transition-colors" placeholder="Email" />
            <label htmlFor="mat-email" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
          </div>
          <div className="relative">
             <input type="password" id="mat-pass" className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600 py-2 transition-colors" placeholder="Password" />
             <label htmlFor="mat-pass" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
          </div>
          <button className="w-full bg-indigo-600 text-white rounded py-3 font-semibold hover:bg-indigo-700 shadow-md transition-all">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

// --- 9. The Brutalist (Retro Bold) ---
export const LoginBrutalist = () => {
  return (
    <div className="flex items-center justify-center h-[600px] w-full bg-yellow-400 rounded-xl border-4 border-black">
      <div className="w-full max-w-md bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-4xl font-black uppercase mb-8 transform -rotate-2">Login Now</h2>
        <form className="space-y-6">
          <input type="text" placeholder="USERNAME" className="w-full p-3 border-4 border-black font-bold focus:bg-yellow-50 outline-none" />
          <input type="password" placeholder="PASSWORD" className="w-full p-3 border-4 border-black font-bold focus:bg-yellow-50 outline-none" />
          <button className="w-full py-4 bg-black text-white font-black text-xl uppercase border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors">Access Account</button>
        </form>
      </div>
    </div>
  );
};

// --- 10. The Background Overlay ---
export const LoginOverlay = () => {
  return (
    <div className="relative flex h-[600px] w-full rounded-xl overflow-hidden">
      <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Office" />
      <div className="relative z-10 w-full md:w-[400px] bg-white/90 backdrop-blur-sm h-full flex flex-col justify-center p-10 border-r border-white/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Brand Workspace</h2>
        <form className="space-y-4">
          <input type="email" placeholder="work@email.com" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none" />
          <input type="password" placeholder="Password" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none" />
          <button className="w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">Sign In</button>
        </form>
      </div>
    </div>
  );
};

const LoginGallery = () => {
  return (
    <div className="container overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Login Page Designs</h1>
        <p className="text-slate-500">Premium authentication interfaces for every platform.</p>
      </div>
      <div className="space-y-24 max-w-6xl mx-auto">
        {/* Variant 01: Split */}
        <section className="box-shadow p-4 rounded-lg relative group/logi">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/logi:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`<div className="flex h-[600px] w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xl font-sans">
      <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
          <p className="text-gray-500 mt-2">Please enter your details.</p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" placeholder="••••••••" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-blue-600 font-medium hover:underline">Forgot password?</a>
          </div>
          <button className="w-full py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">Sign in</button>
        </form>
        <p className="mt-8 text-center text-sm text-gray-600">Don't have an account? <a href="#" className="text-blue-600 font-medium hover:underline">Sign up</a></p>
      </div>
      <div className="hidden md:block w-1/2 bg-blue-50 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Visual" />
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
      </div>
    </div>`}
              htmlCode={`<div class="login-split">
  <div class="form-side">
    <div class="header">
      <h1>Welcome back</h1>
      <p>Please enter your details.</p>
    </div>
    <form class="auth-form">
      <div class="input-block">
        <label>Email</label>
        <input type="email" placeholder="Enter your email">
      </div>
      <div class="input-block">
        <label>Password</label>
        <input type="password" placeholder="••••••••">
      </div>
      <div class="footer-actions">
        <label><input type="checkbox"> Remember me</label>
        <a href="#">Forgot password?</a>
      </div>
      <button type="submit" class="primary-btn">Sign in</button>
    </form>
    <p class="signup-link">Don't have an account? <a href="#">Sign up</a></p>
  </div>
  <div class="image-side">
    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop" alt="Visual">
    <div class="img-overlay"></div>
  </div>
</div>`}
              cssCode={`.login-split {
  display: flex;
  height: 600px;
  width: 100%;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #f1f5f9;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
.form-side { width: 50%; padding: 48px; display: flex; flex-direction: column; justify-content: center; }
.header h1 { font-size: 30px; font-weight: 700; color: #111827; margin: 0; }
.header p { color: #6b7280; margin-top: 8px; }
.auth-form { margin-top: 32px; }
.input-block { margin-bottom: 16px; }
.input-block label { display: block; font-size: 14px; font-weight: 500; color: #374151; margin-bottom: 4px; }
.input-block input { width: 100%; padding: 10px 16px; border: 1px solid #d1d5db; border-radius: 8px; outline: none; transition: all 0.2s; }
.input-block input:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1); }
.footer-actions { display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 24px; }
.primary-btn { width: 100%; padding: 12px; background: #2563eb; color: white; border: none; border-radius: 8px; font-weight: 500; cursor: pointer; transition: background 0.2s; }
.primary-btn:hover { background: #1d4ed8; }
.image-side { width: 50%; position: relative; background: #eff6ff; display: block; }
@media (max-width: 768px) { .image-side { display: none; } .form-side { width: 100%; } }
.image-side img { width: 100%; height: 100%; object-fit: cover; }
.img-overlay { position: absolute; inset: 0; background: rgba(30, 58, 138, 0.2); mix-blend-mode: multiply; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">01. Standard Split SaaS</span>
          <LoginSplit />
        </section>

        {/* Variant 02: Simple Card */}
        <section className="box-shadow p-4 rounded-lg relative group/logi">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/logi:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`<div className="flex items-center justify-center h-[600px] w-full bg-gray-50 rounded-xl font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email Address</label>
            <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Password</label>
            <input type="password" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
          </div>
          <button className="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-transform active:scale-95">Sign In</button>
        </form>
      </div>
    </div>`}
              htmlCode={`<div class="login-card-layout">
  <div class="card">
    <div class="icon">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    </div>
    <h2>Sign in to your account</h2>
    <form class="auth-box">
      <div class="field">
        <label>Email Address</label>
        <input type="email" placeholder="Email">
      </div>
      <div class="field">
        <label>Password</label>
        <input type="password" placeholder="Password">
      </div>
      <button type="submit" class="submit">Sign In</button>
    </form>
  </div>
</div>`}
              cssCode={`.login-card-layout { display: flex; align-items: center; justify-content: center; height: 600px; width: 100%; background: #f9fafb; }
.card { width: 100%; max-width: 448px; background: white; padding: 32px; border-radius: 20px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); border: 1px solid #f3f4f6; text-align: center; }
.icon { width: 48px; height: 48px; background: #e0e7ff; color: #4f46e5; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; }
.icon svg { width: 24px; height: 24px; }
.card h2 { font-size: 24px; font-weight: 700; color: #111827; margin-bottom: 32px; }
.field { text-align: left; margin-bottom: 16px; }
.field label { display: block; font-size: 11px; font-weight: 700; color: #6b7280; text-transform: uppercase; margin-bottom: 4px; }
.field input { width: 100%; padding: 12px 16px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; outline: none; }
.submit { width: 100%; padding: 12px; background: #4f46e5; color: white; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; transition: transform 0.1s; }
.submit:active { transform: scale(0.98); }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">02. Centered Card</span>
          <LoginCard />
        </section>

        {/* Variant 03: Glassmorphism */}
        <section className="box-shadow p-4 rounded-lg relative group/logi">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/logi:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`<div className="relative flex items-center justify-center h-[600px] w-full rounded-xl overflow-hidden bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 font-sans">
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-300 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-pulse"></div>
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-sm">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Hello Again!</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:bg-white/30 outline-none transition-colors" />
          <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:bg-white/30 outline-none transition-colors" />
          <button className="w-full py-3 bg-white text-purple-600 font-bold rounded-lg shadow-lg hover:bg-opacity-90 active:scale-95 transition-all">Log In</button>
        </form>
      </div>
    </div>`}
              htmlCode={`<div class="glass-login-layout">
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
  <div class="glass-card">
    <h2>Hello Again!</h2>
    <form class="glass-form">
      <input type="email" placeholder="Email">
      <input type="password" placeholder="Password">
      <button type="submit">Log In</button>
    </form>
  </div>
</div>`}
              cssCode={`.glass-login-layout { position: relative; display: flex; align-items: center; justify-content: center; height: 600px; width: 100%; border-radius: 12px; overflow: hidden; background: linear-gradient(to bottom right, #a855f7, #ec4899, #f97316); }
.blob { position: absolute; width: 128px; height: 128px; background: #fde047; rounded-radius: 50%; mix-blend-mode: overlay; filter: blur(24px); opacity: 0.7; }
.blob-1 { top: 40px; left: 40px; }
.blob-2 { bottom: 40px; right: 40px; background: #93c5fd; }
.glass-card { position: relative; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.2); padding: 32px; border-radius: 16px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); width: 100%; max-width: 384px; }
.glass-card h2 { font-size: 30px; font-weight: 700; color: white; text-align: center; margin-bottom: 24px; }
.glass-form input { width: 100%; padding: 12px 16px; margin-bottom: 16px; background: rgba(255, 255, 255, 0.2); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 8px; color: white; outline: none; transition: 0.2s; }
.glass-form input::placeholder { color: rgba(255, 255, 255, 0.7); }
.glass-form button { width: 100%; padding: 12px; background: white; color: #9333ea; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">03. Glassmorphism</span>
          <LoginGlass />
        </section>

        {/* Variant 04: Cyberpunk */}
        <section className="box-shadow p-4 rounded-lg relative group/logi">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/logi:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`<div className="flex items-center justify-center h-[600px] w-full bg-black relative rounded-xl overflow-hidden border border-gray-800 font-mono">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      <div className="relative z-10 w-full max-w-md p-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-sm">
        <div className="bg-gray-900 p-8">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-8 tracking-widest uppercase">System Access</h2>
          <form className="space-y-6">
            <input type="text" placeholder="NET_ID" className="w-full bg-black border border-gray-800 text-cyan-400 px-4 py-3 focus:border-cyan-500 outline-none" />
            <input type="password" placeholder="PASSCODE" className="w-full bg-black border border-gray-800 text-pink-400 px-4 py-3 focus:border-pink-500 outline-none" />
            <button className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-black font-bold uppercase tracking-widest transition-colors">Initialize_Session</button>
          </form>
        </div>
      </div>
    </div>`}
              htmlCode={`<div class="cyber-login">
  <div class="grid-bg"></div>
  <div class="cyber-frame">
    <div class="cyber-inner">
      <h2>System Access</h2>
      <form class="cyber-form">
        <input type="text" placeholder="NET_ID" class="input-cyan">
        <input type="password" placeholder="PASSCODE" class="input-pink">
        <button type="submit">Initialize_Session</button>
      </form>
    </div>
  </div>
</div>`}
              cssCode={`.cyber-login { position: relative; display: flex; align-items: center; justify-content: center; height: 600px; width: 100%; background: #000; border-radius: 12px; overflow: hidden; font-family: monospace; }
.grid-bg { position: absolute; inset: 0; background-image: linear-gradient(rgba(0,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.05) 1px, transparent 1px); background-size: 20px 20px; }
.cyber-frame { position: relative; z-index: 10; width: 100%; max-width: 448px; padding: 1px; background: linear-gradient(to right, #06b6d4, #ec4899); border-radius: 2px; }
.cyber-inner { background: #111827; padding: 32px; }
.cyber-inner h2 { font-size: 24px; font-weight: 700; color: transparent; background: linear-gradient(to right, #22d3ee, #ec4899); -webkit-background-clip: text; background-clip: text; margin-bottom: 32px; letter-spacing: 0.1em; text-transform: uppercase; }
.cyber-form input { width: 100%; background: black; border: 1px solid #1f2937; padding: 12px 16px; margin-bottom: 24px; color: #22d3ee; outline: none; }
.input-pink { color: #f472b6 !important; }
.cyber-form button { width: 100%; padding: 12px; background: #0891b2; color: black; border: none; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; cursor: pointer; transition: 0.2s; }
.cyber-form button:hover { background: #22d3ee; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">04. Cyberpunk Tech</span>
          <LoginCyberpunk />
        </section>

        {/* Variant 05: Social First */}
        <section className="box-shadow p-4 rounded-lg relative group/logi">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/logi:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`<div className="flex items-center justify-center h-[600px] w-full bg-white rounded-xl font-sans">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center mb-2 text-slate-900">Get Started</h1>
        <p className="text-center text-slate-500 mb-8">Log in or sign up to continue.</p>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 rounded-xl font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-black text-white rounded-xl font-medium hover:bg-slate-800 transition-colors">
            Continue with GitHub
          </button>
        </div>
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
          <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-slate-500">Or email</span></div>
        </div>
        <form className="space-y-4">
          <input type="email" placeholder="Email address" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white outline-none transition-all" />
          <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">Continue</button>
        </form>
      </div>
    </div>`}
              htmlCode={`<div class="social-login-container">
  <div class="content">
    <h1>Get Started</h1>
    <p>Log in or sign up to continue.</p>
    <div class="social-btns">
      <button class="social-btn google">Continue with Google</button>
      <button class="social-btn github">Continue with GitHub</button>
    </div>
    <div class="divider"><span>Or email</span></div>
    <form class="email-form">
      <input type="email" placeholder="Email address">
      <button type="submit">Continue</button>
    </form>
  </div>
</div>`}
              cssCode={`.social-login-container { display: flex; align-items: center; justify-content: center; height: 600px; width: 100%; background: white; border-radius: 12px; }
.content { width: 100%; max-width: 384px; text-align: center; }
.content h1 { font-size: 30px; font-weight: 700; color: #0f172a; margin-bottom: 8px; }
.content p { color: #64748b; margin-bottom: 32px; }
.social-btns { display: flex; flex-direction: column; gap: 12px; }
.social-btn { width: 100%; padding: 12px; border-radius: 12px; font-weight: 500; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.2s; }
.google { background: white; border: 1px solid #e2e8f0; color: #334155; }
.google:hover { background: #f8fafc; }
.github { background: black; color: white; border: none; }
.github:hover { background: #1e293b; }
.divider { position: relative; margin: 32px 0; border-top: 1px solid #e2e8f0; }
.divider span { position: absolute; top: -10px; left: 50%; transform: translateX(-50%); background: white; padding: 0 8px; font-size: 14px; color: #64748b; }
.email-form input { width: 100%; padding: 12px 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; outline: none; margin-bottom: 16px; }
.email-form button { width: 100%; padding: 12px; background: #2563eb; color: white; border: none; border-radius: 12px; font-weight: 700; cursor: pointer; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">05. Social First</span>
          <LoginSocial />
        </section>

        {/* Variant 06: Minimalist */}
        <section className="box-shadow p-4 rounded-lg relative group/logi">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/logi:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`<div className="flex items-center justify-center h-[600px] w-full bg-white rounded-xl font-sans">
      <div className="w-full max-w-sm px-6">
        <h1 className="text-5xl font-light mb-12 tracking-tighter">Login.</h1>
        <form className="space-y-12">
          <div className="relative border-b-2 border-black py-2">
            <input type="email" placeholder="Email Address" className="w-full bg-transparent outline-none text-xl placeholder:text-gray-300" />
          </div>
          <div className="flex items-center justify-between">
            <button className="text-xl font-medium border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">Enter →</button>
            <a href="#" className="text-gray-400 hover:text-black transition-colors text-sm">Forgot?</a>
          </div>
        </form>
      </div>
    </div>`}
              htmlCode={`<div class="minimal-auth">
  <div class="wrap">
    <h1>Login.</h1>
    <form class="min-form">
      <div class="input-line">
        <input type="email" placeholder="Email Address">
      </div>
      <div class="actions">
        <button type="submit">Enter →</button>
        <a href="#">Forgot?</a>
      </div>
    </form>
  </div>
</div>`}
              cssCode={`.minimal-auth { display: flex; align-items: center; justify-content: center; height: 600px; width: 100%; background: white; border-radius: 12px; }
.wrap { width: 100%; max-width: 384px; padding: 0 24px; }
.wrap h1 { font-size: 48px; font-weight: 300; margin-bottom: 48px; letter-spacing: -2.5px; }
.input-line { border-bottom: 2px solid #000; padding: 8px 0; margin-bottom: 48px; }
.input-line input { width: 100%; background: transparent; border: none; outline: none; font-size: 20px; }
.actions { display: flex; align-items: center; justify-content: space-between; }
.actions button { font-size: 20px; font-weight: 500; border-bottom: 2px solid #000; background: none; cursor: pointer; padding-bottom: 4px; transition: 0.2s; }
.actions a { color: #9ca3af; text-decoration: none; font-size: 14px; }
.actions a:hover { color: #000; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">06. Minimalist Typography</span>
          <LoginMinimal />
        </section>

        {/* Variant 07: Neumorphic */}
        <section className="box-shadow p-4 rounded-lg relative group/logi">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/logi:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`<div className="flex items-center justify-center h-[600px] w-full bg-[#e0e5ec] rounded-xl font-sans">
      <div className="w-full max-w-sm p-8 rounded-[30px] bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
        <h2 className="text-2xl font-bold text-gray-600 text-center mb-8">Welcome</h2>
        <form className="space-y-6">
          <div className="rounded-xl bg-[#e0e5ec] p-3 shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
            <input type="text" placeholder="Username" className="w-full bg-transparent border-none outline-none text-gray-600 px-2" />
          </div>
          <div className="rounded-xl bg-[#e0e5ec] p-3 shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
            <input type="password" placeholder="Password" className="w-full bg-transparent border-none outline-none text-gray-600 px-2" />
          </div>
          <button className="w-full py-3 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] active:scale-95 transition-all">Sign In</button>
        </form>
      </div>
    </div>`}
              htmlCode={`<div class="neu-login-container">
  <div class="neu-card">
    <h2>Welcome</h2>
    <form class="neu-form">
      <div class="neu-input"><input type="text" placeholder="Username"></div>
      <div class="neu-input"><input type="password" placeholder="Password"></div>
      <button type="submit">Sign In</button>
    </form>
  </div>
</div>`}
              cssCode={`.neu-login-container { display: flex; align-items: center; justify-content: center; height: 600px; width: 100%; background: #e0e5ec; border-radius: 12px; }
.neu-card { width: 100%; max-width: 384px; padding: 32px; border-radius: 30px; background: #e0e5ec; box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; }
.neu-card h2 { font-size: 24px; font-weight: 700; color: #4b5563; text-align: center; margin-bottom: 32px; }
.neu-input { border-radius: 12px; background: #e0e5ec; padding: 12px; margin-bottom: 24px; box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff; }
.neu-input input { width: 100%; background: transparent; border: none; outline: none; color: #4b5563; }
.neu-form button { width: 100%; padding: 12px; border-radius: 12px; border: none; background: #e0e5ec; color: #3b82f6; font-weight: 700; box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff; cursor: pointer; transition: 0.2s; }
.neu-form button:active { transform: scale(0.95); }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">07. Neumorphic (Soft UI)</span>
          <LoginNeumorphic />
        </section>

        {/* Variant 08: Material */}
        <section className="box-shadow p-4 rounded-lg relative group/logi">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/logi:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`<div className="flex items-center justify-center h-[600px] w-full bg-white rounded-xl border border-gray-100 font-sans">
      <div className="w-full max-w-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">Sign In</h2>
        <form className="space-y-6">
          <div className="relative">
            <input type="email" id="mat-email" className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600 py-2 transition-colors" placeholder="Email" />
            <label htmlFor="mat-email" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
          </div>
          <div className="relative">
             <input type="password" id="mat-pass" className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600 py-2 transition-colors" placeholder="Password" />
             <label htmlFor="mat-pass" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
          </div>
          <button className="w-full bg-indigo-600 text-white rounded py-3 font-semibold hover:bg-indigo-700 shadow-md transition-all">LOGIN</button>
        </form>
      </div>
    </div>`}
              htmlCode={`<div class="material-auth">
  <div class="mat-card">
    <h2>Sign In</h2>
    <form class="mat-form">
      <div class="mat-field">
        <input type="email" id="email" placeholder=" ">
        <label for="email">Email Address</label>
      </div>
      <div class="mat-field">
        <input type="password" id="pass" placeholder=" ">
        <label for="pass">Password</label>
      </div>
      <button type="submit">LOGIN</button>
    </form>
  </div>
</div>`}
              cssCode={`.material-auth { display: flex; align-items: center; justify-content: center; height: 600px; width: 100%; background: white; border-radius: 12px; border: 1px solid #f3f4f6; }
.mat-card { width: 100%; max-width: 384px; padding: 32px; }
.mat-card h2 { font-size: 24px; font-weight: 600; color: #1f2937; margin-bottom: 32px; }
.mat-field { position: relative; margin-bottom: 24px; border-bottom: 2px solid #d1d5db; }
.mat-field input { width: 100%; border: none; padding: 8px 0; outline: none; font-size: 16px; background: transparent; }
.mat-field label { position: absolute; left: 0; bottom: 8px; color: #9ca3af; transition: all 0.2s; pointer-events: none; }
.mat-field input:focus ~ label, .mat-field input:not(:placeholder-shown) ~ label { transform: translateY(-24px); font-size: 12px; color: #4f46e5; font-weight: 500; }
.mat-field input:focus { border-color: #4f46e5; }
.mat-form button { width: 100%; background: #4f46e5; color: white; border: none; padding: 12px; border-radius: 4px; font-weight: 600; cursor: pointer; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">08. Material Design Labels</span>
          <LoginMaterial />
        </section>

        {/* Variant 09: Brutalist */}
        <section className="box-shadow p-4 rounded-lg relative group/logi">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/logi:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`<div className="flex items-center justify-center h-[600px] w-full bg-yellow-400 rounded-xl border-4 border-black font-sans">
      <div className="w-full max-w-md bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-4xl font-black uppercase mb-8 transform -rotate-2">Login Now</h2>
        <form className="space-y-6">
          <input type="text" placeholder="USERNAME" className="w-full p-3 border-4 border-black font-bold focus:bg-yellow-50 outline-none" />
          <input type="password" placeholder="PASSWORD" className="w-full p-3 border-4 border-black font-bold focus:bg-yellow-50 outline-none" />
          <button className="w-full py-4 bg-black text-white font-black text-xl uppercase border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors">Access Account</button>
        </form>
      </div>
    </div>`}
              htmlCode={`<div class="brutalist-auth-wrap">
  <div class="brutalist-card">
    <h2>Login Now</h2>
    <form class="brutalist-form">
      <input type="text" placeholder="USERNAME">
      <input type="password" placeholder="PASSWORD">
      <button type="submit">Access Account</button>
    </form>
  </div>
</div>`}
              cssCode={`.brutalist-auth-wrap { display: flex; align-items: center; justify-content: center; height: 600px; width: 100%; background: #fbbf24; border-radius: 12px; border: 4px solid #000; }
.brutalist-card { width: 100%; max-width: 448px; background: white; border: 4px solid #000; padding: 32px; box-shadow: 8px 8px 0px #000; }
.brutalist-card h2 { font-size: 36px; font-weight: 900; text-transform: uppercase; margin-bottom: 32px; transform: rotate(-2deg); }
.brutalist-form input { width: 100%; padding: 12px; border: 4px solid #000; font-weight: 700; margin-bottom: 24px; outline: none; }
.brutalist-form input:focus { background: #fffbeb; }
.brutalist-form button { width: 100%; padding: 16px; background: #000; color: white; border: 4px solid transparent; font-weight: 900; font-size: 20px; text-transform: uppercase; cursor: pointer; transition: 0.2s; }
.brutalist-form button:hover { background: white; color: black; border-color: black; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">09. Retro Brutalist</span>
          <LoginBrutalist />
        </section>

        {/* Variant 10: Overlay */}
        <section className="box-shadow p-4 rounded-lg relative group/logi">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/logi:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`<div className="relative flex h-[600px] w-full rounded-xl overflow-hidden font-sans">
      <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Office" />
      <div className="relative z-10 w-full md:w-[400px] bg-white/90 backdrop-blur-sm h-full flex flex-col justify-center p-10 border-r border-white/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Brand Workspace</h2>
        <form className="space-y-4">
          <input type="email" placeholder="work@email.com" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none" />
          <input type="password" placeholder="Password" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none" />
          <button className="w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">Sign In</button>
        </form>
      </div>
    </div>`}
              htmlCode={`<div class="overlay-login">
  <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop" alt="Office">
  <div class="sidebar">
    <h2>Brand Workspace</h2>
    <form class="overlay-form">
      <input type="email" placeholder="work@email.com">
      <input type="password" placeholder="Password">
      <button type="submit">Sign In</button>
    </form>
  </div>
</div>`}
              cssCode={`.overlay-login { position: relative; height: 600px; width: 100%; border-radius: 12px; overflow: hidden; display: flex; }
.overlay-login img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.sidebar { position: relative; z-index: 10; width: 400px; height: 100%; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); padding: 40px; display: flex; flex-direction: column; justify-content: center; border-right: 1px solid rgba(255, 255, 255, 0.5); }
.sidebar h2 { font-size: 24px; font-weight: 700; color: #111827; margin-bottom: 32px; }
.overlay-form input { width: 100%; padding: 12px 16px; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 16px; outline: none; }
.overlay-form input:focus { ring: 2px solid #000; }
.overlay-form button { width: 100%; padding: 12px; background: #000; color: white; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; transition: background 0.2s; }
.overlay-form button:hover { background: #1f2937; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">10. Background Overlay</span>
          <LoginOverlay />
        </section>
      </div>
    </div>
  );
};

export default LoginGallery;
