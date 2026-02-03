import React from 'react';

// --- Shared Icons ---
const WifiOffIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" /></svg>
);

const LockIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
);

const CreditCardIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
);

// --- 1. The Offline State (No Connection) ---
export const ErrorOffline = () => (
  <div className="flex flex-col items-center justify-center h-[500px] bg-slate-50 rounded-3xl border border-slate-200 p-8 text-center">
    <div className="relative mb-8">
      <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center animate-pulse">
        <WifiOffIcon />
      </div>
      <div className="absolute top-0 right-0 w-6 h-6 bg-red-500 border-4 border-white rounded-full"></div>
    </div>
    
    <h2 className="text-2xl font-bold text-slate-800 mb-2">No Internet Connection</h2>
    <p className="text-slate-500 mb-8 max-w-xs mx-auto">
      Please check your network settings and try again.
    </p>
    
    <button onClick={() => window.location.reload()} className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
      Try Again
    </button>
  </div>
);

// --- 2. Access Denied (403 Security) ---
export const ErrorAccess = () => (
  <div className="h-[500px] bg-red-50 rounded-3xl border border-red-100 flex items-center justify-center p-8">
    <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center border-t-8 border-red-500">
      <div className="w-20 h-20 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <LockIcon />
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Access Denied</h2>
      <p className="text-gray-500 mb-8">
        You do not have permission to view this page. Please contact your administrator.
      </p>
      <div className="flex gap-3">
        <button className="flex-1 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50">
          Go Back
        </button>
        <button className="flex-1 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700">
          Login
        </button>
      </div>
    </div>
  </div>
);

// --- 3. Payment Failed (SaaS Critical) ---
export const ErrorPayment = () => (
  <div className="h-[500px] bg-white rounded-3xl border border-gray-100 flex flex-col items-center justify-center p-8">
    <div className="relative w-full max-w-sm h-56 bg-gradient-to-r from-gray-800 to-black rounded-2xl shadow-2xl p-6 text-white mb-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
      <div className="flex justify-between items-start mb-8">
        <CreditCardIcon />
        <span className="font-mono text-xs opacity-70">CREDIT</span>
      </div>
      <div className="font-mono text-xl tracking-widest mb-2">•••• •••• •••• 4242</div>
      <div className="flex justify-between items-end">
        <div className="text-xs opacity-70">
          <div className="uppercase text-[10px]">Card Holder</div>
          <div>ALEX MORGAN</div>
        </div>
        <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">FAILED</div>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Failed</h2>
    <p className="text-gray-500 text-center max-w-sm mb-8">
      We couldn't process your payment. Your subscription has been paused.
    </p>
    
    <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-colors">
      Update Payment Method
    </button>
  </div>
);

// --- 4. Rate Limited (429 - Speeding) ---
export const ErrorRateLimit = () => (
  <div className="h-[500px] bg-indigo-900 rounded-3xl overflow-hidden relative flex items-center justify-center text-white">
    {/* Abstract Speed Lines */}
    <div className="absolute inset-0 opacity-20">
      {[...Array(20)].map((_, i) => (
        <div 
          key={i} 
          className="absolute h-px bg-white"
          style={{
            left: '-10%',
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 50 + 50}%`,
            animation: `slideRight ${Math.random() * 2 + 1}s linear infinite`
          }}
        ></div>
      ))}
    </div>

    <div className="relative z-10 text-center p-8">
      <div className="text-6xl mb-6">🐌</div>
      <h2 className="text-4xl font-bold mb-4">Whoa, slow down!</h2>
      <p className="text-indigo-200 mb-8 max-w-md mx-auto text-lg">
        You've made too many requests recently. Please wait a moment before trying again.
      </p>
      
      <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl font-mono">
        Retry in <span className="font-bold text-yellow-400">00:45</span>
      </div>
    </div>
    
    <style>{`
      @keyframes slideRight {
        from { transform: translateX(0); opacity: 0; }
        50% { opacity: 1; }
        to { transform: translateX(200%); opacity: 0; }
      }
    `}</style>
  </div>
);

// --- 5. The Generic "Whoops" (Illustrative) ---
export const ErrorGeneric = () => (
  <div className="h-[500px] bg-[#fffbf0] rounded-3xl border border-[#f5e6c8] flex flex-col items-center justify-center p-8 text-center">
    {/* CSS Illustration of a spilled drink */}
    <div className="relative w-32 h-32 mb-8">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-12 bg-orange-200 rounded-full blur-sm opacity-50"></div>
      <div className="text-8xl absolute top-0 left-1/2 -translate-x-1/2 transform -rotate-12">🥤</div>
      <div className="absolute top-0 right-0 text-4xl animate-bounce">💧</div>
    </div>
    
    <h2 className="text-4xl font-black text-gray-900 mb-4 transform -rotate-2">Whoops!</h2>
    <p className="text-gray-600 mb-8 max-w-sm text-lg">
      Something went wrong. It's not you, it's us. We spilled the code.
    </p>
    
    <button onClick={() => window.location.reload()} className="px-8 py-4 bg-black text-white font-bold rounded-2xl hover:scale-105 transition-transform">
      Clean It Up (Refresh)
    </button>
  </div>
);

// --- 6. The Glassmorphism (Aesthetic) ---
export const ErrorGlass = () => (
  <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-tr from-rose-400 to-orange-300 flex items-center justify-center p-4">
    <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob"></div>
    <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-40"></div>

    <div className="relative bg-white/20 backdrop-blur-xl border border-white/30 p-10 rounded-3xl shadow-2xl text-center max-w-sm w-full">
      <div className="text-white text-6xl font-bold mb-2">Error</div>
      <div className="text-white/80 font-mono mb-8 tracking-widest">CODE: UNKNOWN</div>
      <p className="text-white mb-8 leading-relaxed">
        An unexpected error has occurred. Our team has been notified.
      </p>
      <button className="w-full py-3 bg-white text-rose-500 font-bold rounded-xl shadow-lg hover:bg-rose-50 transition-colors">
        Return Home
      </button>
    </div>
  </div>
);

// --- 7. The Cyberpunk (System Failure) ---
export const ErrorCyber = () => (
  <div className="h-[500px] bg-black rounded-3xl relative overflow-hidden border-2 border-red-600 p-8 flex flex-col justify-center items-center">
    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(220,38,38,0.1)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
    
    <div className="relative z-10 text-center">
      <div className="border border-red-500 text-red-500 px-4 py-1 font-mono text-xs inline-block mb-6 animate-pulse">
        SYSTEM_CRITICAL
      </div>
      
      <h2 className="text-6xl font-black text-white mb-2 relative" style={{textShadow: "3px 3px 0px #dc2626"}}>
        ERROR
      </h2>
      <div className="bg-red-600 text-black font-bold px-2 inline-block transform -rotate-1 mb-8">
        Operation Failed
      </div>
      
      <div className="font-mono text-red-400 text-sm mb-8 border-l-2 border-red-800 pl-4 text-left max-w-xs mx-auto">
        > TRACE: NULL_PTR<br/>
        > MODULE: CORE_RENDER<br/>
        > STATUS: ABORTED
      </div>
      
      <button className="px-8 py-3 bg-transparent border-2 border-red-600 text-red-500 font-bold hover:bg-red-600 hover:text-black transition-all uppercase tracking-wider">
        Reboot System
      </button>
    </div>
  </div>
);

// --- 8. The Brutalist (Bold) ---
export const ErrorBrutalist = () => (
  <div className="h-[500px] bg-yellow-400 rounded-3xl border-4 border-black flex flex-col items-center justify-center p-8 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px'}}></div>
    
    <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_#000] relative z-10 max-w-md text-center">
      <h1 className="text-6xl font-black mb-4">400</h1>
      <div className="bg-black text-white font-bold text-xl p-2 mb-6 uppercase">
        Bad Request
      </div>
      <p className="font-bold text-lg mb-8">
        Your browser sent a request that this server could not understand.
      </p>
      <button className="w-full py-4 bg-pink-500 border-4 border-black font-black uppercase hover:bg-pink-400 transition-colors">
        Fix It
      </button>
    </div>
  </div>
);

// --- 9. The Terminal (Dev Focused) ---
export const ErrorTerminal = () => (
  <div className="h-[500px] bg-[#1e1e1e] rounded-3xl overflow-hidden flex flex-col font-mono text-sm shadow-2xl">
    <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
      <span className="ml-2 text-gray-400 text-xs">console — bash</span>
    </div>
    <div className="p-6 text-gray-300 flex-1 overflow-y-auto">
      <p>user@server:~$ <span className="text-yellow-300">init_request</span></p>
      <p className="text-gray-500">Processing...</p>
      <p className="text-red-400 mt-2">Error: Uncaught Exception in thread "main"</p>
      <p className="text-red-400">java.lang.NullPointerException</p>
      <p className="text-red-400 ml-4">at com.app.server.Request.handle(Request.java:42)</p>
      <p className="text-red-400 ml-4">at com.app.server.Main.run(Main.java:12)</p>
      <p className="mt-4">user@server:~$ <span className="animate-pulse">_</span></p>
      
      <div className="mt-8 pt-4 border-t border-gray-700">
        <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded">
          Report Bug
        </button>
      </div>
    </div>
  </div>
);

// --- 10. The Neumorphic (Soft UI) ---
export const ErrorNeumorphic = () => (
  <div className="h-[500px] bg-[#e0e5ec] rounded-3xl flex flex-col items-center justify-center p-8">
    <div className="w-40 h-40 bg-[#e0e5ec] rounded-full shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex items-center justify-center mb-10 text-4xl text-gray-400">
      ⚠️
    </div>
    
    <h2 className="text-2xl font-bold text-gray-600 mb-2">Something's wrong</h2>
    <p className="text-gray-500 mb-10 text-center max-w-xs">
      We encountered an error processing your request.
    </p>
    
    <div className="flex gap-6">
      <button className="px-8 py-3 rounded-xl bg-[#e0e5ec] text-gray-600 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] hover:text-blue-500 transition-all active:scale-95">
        Home
      </button>
      <button className="px-8 py-3 rounded-xl bg-[#e0e5ec] text-gray-600 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] hover:text-red-500 transition-all active:scale-95">
        Support
      </button>
    </div>
  </div>
);


// --- Main Gallery Wrapper ---
const ErrorPageGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-100 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Error Page Designs</h1>
        <p className="text-slate-500">Handling failure states with style and clarity.</p>
      </div>
      
      <div className="space-y-32 max-w-5xl mx-auto">
        
        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">01. Offline State</span>
          <ErrorOffline />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">02. Access Denied (403)</span>
          <ErrorAccess />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">03. Payment Failed</span>
          <ErrorPayment />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">04. Rate Limit (429)</span>
          <ErrorRateLimit />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">05. Generic Illustration</span>
          <ErrorGeneric />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">06. Glassmorphism</span>
          <ErrorGlass />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">07. Cyberpunk Critical</span>
          <ErrorCyber />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">08. Brutalist (400)</span>
          <ErrorBrutalist />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">09. Terminal Log</span>
          <ErrorTerminal />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">10. Neumorphic</span>
          <ErrorNeumorphic />
        </section>

      </div>
    </div>
  );
};

export default ErrorPageGallery;