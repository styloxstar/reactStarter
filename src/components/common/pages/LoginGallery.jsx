import React, { useState } from 'react';

// --- Shared Icons ---
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
);

const EyeIcon = ({ visible, onClick }) => (
  <button type="button" onClick={onClick} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
    {visible ? (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
    ) : (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
    )}
  </button>
);

// --- 1. The Standard Split (SaaS) ---
export const LoginSplit = () => {
  return (
    <div className="flex h-[600px] w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xl">
      {/* Left: Form */}
      <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
          <p className="text-gray-500 mt-2">Please enter your details.</p>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" placeholder="••••••••" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-blue-600 font-medium hover:underline">Forgot password?</a>
          </div>

          <button className="w-full py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">Sign in</button>
          
          <button className="w-full py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
            <GoogleIcon /> Sign in with Google
          </button>
        </form>
        
        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account? <a href="#" className="text-blue-600 font-medium hover:underline">Sign up</a>
        </p>
      </div>
      
      {/* Right: Image */}
      <div className="hidden md:block w-1/2 bg-blue-50 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Login Visual" />
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <blockquote className="text-xl font-medium leading-relaxed">
            "This platform has completely transformed how we manage our team's workflow. Highly recommended!"
          </blockquote>
          <div className="mt-4 font-bold">— Sarah Smith, CEO</div>
        </div>
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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Sign in to your account</h2>
          <p className="text-gray-500 text-sm mt-2">Welcome back! Please enter your details.</p>
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
      {/* Blobs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-300 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-sm">
        <h2 className="text-3xl font-bold text-white mb-6 text-center drop-shadow-md">Hello Again!</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:bg-white/30 focus:border-white outline-none transition-colors" />
          <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:bg-white/30 focus:border-white outline-none transition-colors" />
          <button className="w-full py-3 bg-white text-purple-600 font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition-transform active:scale-95">
            Log In
          </button>
        </form>
        <p className="text-white/80 text-center text-sm mt-6">Forgot Password?</p>
      </div>
    </div>
  );
};

// --- 4. The Cyberpunk (Tech) ---
export const LoginCyberpunk = () => {
  return (
    <div className="flex items-center justify-center h-[600px] w-full bg-black relative rounded-xl overflow-hidden border border-gray-800">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      <div className="relative z-10 w-full max-w-md p-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-sm">
        <div className="bg-gray-900 p-8">
          <h2 className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-8 tracking-widest uppercase">
            System Access
          </h2>
          
          <form className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-cyan-500 rounded-sm opacity-30 group-hover:opacity-100 transition duration-200 blur"></div>
              <input type="text" placeholder="NET_ID" className="relative w-full bg-black border border-gray-800 text-cyan-400 px-4 py-3 focus:outline-none focus:border-cyan-500 font-mono placeholder-gray-700" />
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-pink-500 rounded-sm opacity-30 group-hover:opacity-100 transition duration-200 blur"></div>
              <input type="password" placeholder="PASSCODE" className="relative w-full bg-black border border-gray-800 text-pink-400 px-4 py-3 focus:outline-none focus:border-pink-500 font-mono placeholder-gray-700" />
            </div>

            <button className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-black font-bold font-mono tracking-widest uppercase transition-colors relative overflow-hidden group">
              <span className="relative z-10">Initialize_Session</span>
              <div className="absolute inset-0 h-full w-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
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
        <p className="text-center text-slate-500 mb-8">Create an account or log in to continue.</p>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 rounded-xl font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            <GoogleIcon /> Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-black text-white rounded-xl font-medium hover:bg-slate-800 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Continue with GitHub
          </button>
        </div>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
          <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-slate-500">Or continue with email</span></div>
        </div>

        <form className="space-y-4">
          <input type="email" placeholder="Email address" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
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
        <div className="group">
          <input type="email" placeholder="Email Address" className="w-full py-4 bg-transparent border-b border-gray-300 text-xl focus:border-black outline-none placeholder-gray-400 transition-colors" />
        </div>
        <div className="group">
          <input type="password" placeholder="Password" className="w-full py-4 bg-transparent border-b border-gray-300 text-xl focus:border-black outline-none placeholder-gray-400 transition-colors" />
        </div>
        <div className="flex items-center justify-between pt-8">
          <button className="text-xl font-medium border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">Enter →</button>
          <a href="#" className="text-gray-400 hover:text-black transition-colors">Forgot?</a>
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
            <input type="text" placeholder="Username" className="w-full bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 px-2" />
          </div>
          <div className="rounded-xl bg-[#e0e5ec] p-3 shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
            <input type="password" placeholder="Password" className="w-full bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 px-2" />
          </div>
          <button className="w-full py-3 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] active:scale-95 transition-all">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

// --- 8. The Floating Labels (Material) ---
export const LoginMaterial = () => {
  const [showPass, setShowPass] = useState(false);

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
             <input type={showPass ? "text" : "password"} id="mat-pass" className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600 py-2 transition-colors" placeholder="Password" />
             <label htmlFor="mat-pass" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
             <EyeIcon visible={showPass} onClick={() => setShowPass(!showPass)} />
          </div>

          <div className="flex justify-end">
            <a href="#" className="text-sm text-indigo-600 font-semibold hover:text-indigo-800">Forgot Password?</a>
          </div>

          <button className="w-full bg-indigo-600 text-white rounded py-3 font-semibold hover:bg-indigo-700 shadow-md transition-all">
            LOGIN
          </button>
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
          <div>
            <label className="block font-bold text-black mb-2 border-b-2 border-black w-fit">USERNAME</label>
            <input type="text" className="w-full p-3 border-4 border-black font-bold focus:outline-none focus:bg-yellow-50" />
          </div>
          <div>
            <label className="block font-bold text-black mb-2 border-b-2 border-black w-fit">PASSWORD</label>
            <input type="password" className="w-full p-3 border-4 border-black font-bold focus:outline-none focus:bg-yellow-50" />
          </div>
          <button className="w-full py-4 bg-black text-white font-black text-xl uppercase border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors">
            Access Account
          </button>
        </form>
      </div>
    </div>
  );
};

// --- 10. The Background Overlay ---
export const LoginOverlay = () => {
  return (
    <div className="relative flex h-[600px] w-full rounded-xl overflow-hidden">
      {/* Background Image */}
      <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Office" />
      
      {/* Overlay Sidebar */}
      <div className="relative z-10 w-full md:w-[400px] bg-white/90 backdrop-blur-sm h-full flex flex-col justify-center p-10 border-r border-white/50">
        <div className="mb-8">
          <span className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center font-bold text-xl mb-4">B</span>
          <h2 className="text-2xl font-bold text-gray-900">Brand Workspace</h2>
        </div>
        
        <form className="space-y-4">
          <input type="email" placeholder="work@email.com" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none" />
          <input type="password" placeholder="Password" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none" />
          <button className="w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">Sign In</button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-300">
           <p className="text-gray-600 text-sm">Join the team? <a href="#" className="font-bold text-black underline">Apply access</a></p>
        </div>
      </div>
    </div>
  );
};


// --- Main Gallery ---
const LoginGallery = () => {
  return (
    <div className="pb-20 md:pb-40">
      <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 pt-4 md:pt-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[hsl(var(--foreground))] mb-4 md:mb-6 tracking-tight leading-tight">
          Login Page <span className="text-[hsl(var(--primary))]">Designs</span>
        </h1>
        <p className="text-[hsl(var(--muted-foreground))] text-base md:text-lg max-w-2xl mx-auto px-4">
          A collection of high-fidelity, responsive authentication interfaces designed for modern SaaS and mobile applications.
        </p>
      </div>
      
      <div className="space-y-20 md:space-y-32 max-w-6xl mx-auto px-2 md:px-4">
        
        <section className='relative'>
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[hsl(var(--primary))] text-white font-bold text-sm md:text-base">01</span>
            <h2 className="text-lg md:text-xl font-bold text-[hsl(var(--foreground))] uppercase tracking-widest">Standard Split SaaS</h2>
          </div>
          <div className="glass-card p-1 md:p-2 rounded-2xl md:rounded-[2rem] shadow-2xl overflow-hidden">
            <LoginSplit />
          </div>
        </section>

        <section className='relative'>
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8 text-right justify-end">
            <h2 className="text-lg md:text-xl font-bold text-[hsl(var(--foreground))] uppercase tracking-widest">Simple Card</h2>
            <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[hsl(var(--primary))] text-white font-bold text-sm md:text-base">02</span>
          </div>
          <div className="glass-card p-1 md:p-2 rounded-2xl md:rounded-[2rem] shadow-2xl overflow-hidden">
            <LoginCard />
          </div>
        </section>

        <section className='relative'>
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[hsl(var(--primary))] text-white font-bold text-sm md:text-base">03</span>
            <h2 className="text-lg md:text-xl font-bold text-[hsl(var(--foreground))] uppercase tracking-widest">Glassmorphism</h2>
          </div>
          <div className="glass-card p-1 md:p-2 rounded-2xl md:rounded-[2rem] shadow-2xl overflow-hidden">
            <LoginGlass />
          </div>
        </section>

        <section className='relative'>
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8 text-right justify-end">
            <h2 className="text-lg md:text-xl font-bold text-[hsl(var(--foreground))] uppercase tracking-widest">Cyberpunk</h2>
            <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[hsl(var(--primary))] text-white font-bold text-sm md:text-base">04</span>
          </div>
          <div className="glass-card p-1 md:p-2 rounded-2xl md:rounded-[2rem] shadow-2xl overflow-hidden">
            <LoginCyberpunk />
          </div>
        </section>

        <section className='relative'>
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[hsl(var(--primary))] text-white font-bold text-sm md:text-base">05</span>
            <h2 className="text-lg md:text-xl font-bold text-[hsl(var(--foreground))] uppercase tracking-widest">Social First</h2>
          </div>
          <div className="glass-card p-1 md:p-2 rounded-2xl md:rounded-[2rem] shadow-2xl overflow-hidden">
            <LoginSocial />
          </div>
        </section>

        <section className='relative'>
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8 text-right justify-end">
            <h2 className="text-lg md:text-xl font-bold text-[hsl(var(--foreground))] uppercase tracking-widest">Minimalist Typography</h2>
            <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[hsl(var(--primary))] text-white font-bold text-sm md:text-base">06</span>
          </div>
          <div className="glass-card p-1 md:p-2 rounded-2xl md:rounded-[2rem] shadow-2xl overflow-hidden">
            <LoginMinimal />
          </div>
        </section>

        <section className='relative'>
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[hsl(var(--primary))] text-white font-bold text-sm md:text-base">07</span>
            <h2 className="text-lg md:text-xl font-bold text-[hsl(var(--foreground))] uppercase tracking-widest">Neumorphic</h2>
          </div>
          <div className="glass-card p-1 md:p-2 rounded-2xl md:rounded-[2rem] shadow-2xl overflow-hidden">
            <LoginNeumorphic />
          </div>
        </section>

        <section className='relative'>
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8 text-right justify-end">
            <h2 className="text-lg md:text-xl font-bold text-[hsl(var(--foreground))] uppercase tracking-widest">Material Floating Labels</h2>
            <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[hsl(var(--primary))] text-white font-bold text-sm md:text-base">08</span>
          </div>
          <div className="glass-card p-1 md:p-2 rounded-2xl md:rounded-[2rem] shadow-2xl overflow-hidden">
            <LoginMaterial />
          </div>
        </section>

        <section className='relative'>
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[hsl(var(--primary))] text-white font-bold text-sm md:text-base">09</span>
            <h2 className="text-lg md:text-xl font-bold text-[hsl(var(--foreground))] uppercase tracking-widest">Brutalist</h2>
          </div>
          <div className="glass-card p-1 md:p-2 rounded-2xl md:rounded-[2rem] shadow-2xl overflow-hidden">
            <LoginBrutalist />
          </div>
        </section>

        <section className='relative'>
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8 text-right justify-end">
            <h2 className="text-lg md:text-xl font-bold text-[hsl(var(--foreground))] uppercase tracking-widest">Image Overlay</h2>
            <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[hsl(var(--primary))] text-white font-bold text-sm md:text-base">10</span>
          </div>
          <div className="glass-card p-1 md:p-2 rounded-2xl md:rounded-[2rem] shadow-2xl overflow-hidden">
            <LoginOverlay />
          </div>
        </section>

      </div>
    </div>
  );
};



export default LoginGallery;