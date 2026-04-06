import React, { useState, useEffect } from 'react';
import CopyButton from '../CopyButton';

// --- Shared Helper: Countdown Timer ---
const Countdown = ({ style = "standard" }) => {
  // Static time for demo purposes to prevent hydration mismatch
  const time = { days: 12, hours: 18, minutes: 45, seconds: 22 };

  if (style === 'minimal') {
    return <div className="font-mono text-sm tracking-widest">LAUNCHING IN: {time.days}D {time.hours}H {time.minutes}M</div>;
  }

  if (style === 'boxes') {
    return (
      <div className="flex gap-4 justify-center">
        {Object.entries(time).map(([label, val]) => (
          <div key={label} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 backdrop-blur border border-white/20 rounded-xl flex items-center justify-center text-2xl font-bold">
              {val}
            </div>
            <span className="text-xs uppercase mt-2 opacity-60">{label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-8 text-center">
      {Object.entries(time).map(([label, val]) => (
        <div key={label}>
          <div className="text-4xl font-bold">{val}</div>
          <div className="text-xs uppercase tracking-widest opacity-50">{label}</div>
        </div>
      ))}
    </div>
  );
};

// --- 1. The SaaS Standard (Viral Waitlist) ---
export const ComingStandard = () => (
  <div className="flex flex-col items-center justify-center h-[600px] w-full bg-white border border-gray-100 rounded-3xl p-8 text-center relative overflow-hidden">
    <div className="relative z-10 max-w-xl mx-auto">
      <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide mb-6">
        Coming Soon
      </div>
      <h1 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">
        Work smarter, <br/> not harder.
      </h1>
      <p className="text-slate-500 mb-10 text-lg">
        The all-in-one productivity platform you've been waiting for. 
        Join the waitlist to get early access.
      </p>
      
      <form className="flex gap-2 max-w-md mx-auto mb-8">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        />
        <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
          Join
        </button>
      </form>
      
      <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        <span>2,400+ people joined this week</span>
      </div>
    </div>
    
    {/* Abstract Background Decoration */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
       <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
       <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-100 rounded-full blur-3xl"></div>
    </div>
  </div>
);

// --- 2. The Minimalist (Typography) ---
export const ComingMinimal = () => (
  <div className="flex flex-col justify-center h-[600px] w-full bg-[#f8f8f8] rounded-3xl p-12 md:p-24 border border-gray-200">
    <div className="w-full max-w-2xl">
      <div className="h-1 w-24 bg-black mb-12"></div>
      <h1 className="text-6xl md:text-8xl font-serif text-black leading-none mb-12">
        Something <br/>
        <span className="italic text-gray-400">new</span> is <br/>
        loading...
      </h1>
      
      <div className="flex flex-col md:flex-row items-start md:items-end gap-12">
        <div className="w-full max-w-sm">
          <label className="text-xs font-bold uppercase tracking-widest mb-4 block">Get notified</label>
          <div className="flex border-b border-black pb-2">
            <input type="email" placeholder="Email Address" className="w-full bg-transparent outline-none placeholder-gray-400" />
            <button className="font-bold text-sm uppercase hover:opacity-50 transition-opacity">→ Submit</button>
          </div>
        </div>
        <div className="text-right flex-1">
           <Countdown style="minimal" />
        </div>
      </div>
    </div>
  </div>
);

// --- 3. The Split Screen (Visual) ---
export const ComingSplit = () => (
  <div className="flex h-[600px] w-full rounded-3xl overflow-hidden shadow-xl">
    {/* Left Content */}
    <div className="w-full md:w-1/2 bg-white p-12 flex flex-col justify-center">
      <div className="mb-auto font-bold text-xl">Brand.</div>
      
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">We are building the future of design.</h1>
        <p className="text-gray-500 mb-8">Be the first to know when we launch. No spam, just updates.</p>
        
        <div className="relative">
          <input type="email" placeholder="name@company.com" className="w-full pl-4 pr-32 py-4 bg-gray-50 border border-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-black" />
          <button className="absolute right-2 top-2 bottom-2 px-6 bg-black text-white text-sm font-bold rounded-md hover:bg-gray-800">
            Notify Me
          </button>
        </div>
      </div>

      <div className="mt-auto flex gap-4 text-gray-400">
         <a href="#" className="hover:text-black">Twitter</a>
         <a href="#" className="hover:text-black">Instagram</a>
      </div>
    </div>

    {/* Right Image */}
    <div className="hidden md:block w-1/2 relative">
      <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Coming Soon" />
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  </div>
);

// --- 4. The Glassmorphism (Vibrant) ---
export const ComingGlass = () => (
  <div className="relative flex items-center justify-center h-[600px] w-full rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
    <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-300 rounded-full mix-blend-overlay filter blur-3xl opacity-60 animate-blob"></div>
    <div className="absolute bottom-20 right-20 w-64 h-64 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>

    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-12 rounded-[2rem] shadow-2xl text-center text-white max-w-lg mx-4">
      <div className="inline-block px-4 py-1 rounded-full border border-white/30 text-xs font-bold tracking-widest uppercase mb-8">
        Beta Access
      </div>
      <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">We are almost ready.</h1>
      
      <div className="mb-10 text-white/90">
         <Countdown style="boxes" />
      </div>

      <form className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
        <div className="relative flex bg-white rounded-xl p-1">
          <input type="email" placeholder="Your email address" className="w-full px-4 text-gray-800 bg-transparent outline-none" />
          <button className="px-6 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
            Request
          </button>
        </div>
      </form>
    </div>
  </div>
);

// --- 5. The Cyberpunk (Terminal) ---
export const ComingCyber = () => {
  const [text, setText] = useState('');
  const fullText = "SYSTEM_STATUS: BUILDING...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-[600px] w-full bg-black rounded-3xl border border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      
      <div className="relative z-10 w-full max-w-lg p-2 border border-green-900 bg-gray-900/50 backdrop-blur-sm">
        <div className="bg-black border border-green-800 p-8 font-mono">
          <div className="text-green-500 text-xs mb-8 flex justify-between">
            <span>PROTOCOL_V2</span>
            <span>SECURE_CONNECTION</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tighter">
            <span className="text-green-500">{text}</span><span className="animate-pulse">_</span>
          </h1>
          
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            > INITIATING LAUNCH SEQUENCE.<br/>
            > DEPLOYING MODULES.<br/>
            > ETA: T-MINUS 14 DAYS.
          </p>

          <div className="flex border border-green-700">
            <input type="email" placeholder="INSERT_EMAIL_FOR_UPDATES" className="flex-1 bg-black text-green-500 p-3 placeholder-green-900 outline-none uppercase text-sm" />
            <button className="bg-green-900/30 text-green-500 px-6 py-2 border-l border-green-700 hover:bg-green-500 hover:text-black transition-all text-sm font-bold uppercase">
              [ EXECUTE ]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 6. The Gradient Mesh (Clean) ---
export const ComingGradient = () => (
  <div className="flex items-center justify-center h-[600px] w-full bg-slate-900 rounded-3xl relative overflow-hidden">
    {/* Gradient Background */}
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-blue-600 blur-[120px] opacity-20"></div>
      <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] rounded-full bg-purple-600 blur-[120px] opacity-20"></div>
    </div>

    <div className="relative z-10 text-center px-4">
      <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6 tracking-tight">
        Next Gen.
      </h1>
      <p className="text-slate-400 text-xl mb-12 max-w-xl mx-auto">
        We are redefining how you experience the web. <br/> Launching Summer 2024.
      </p>

      <div className="bg-white/5 border border-white/10 p-1 rounded-full flex max-w-md mx-auto backdrop-blur-md">
        <input type="email" placeholder="Enter email address" className="flex-1 bg-transparent px-6 py-3 text-white placeholder-slate-500 outline-none" />
        <button className="bg-white text-black px-8 rounded-full font-bold hover:bg-gray-200 transition-colors">
          Notify Me
        </button>
      </div>
    </div>
  </div>
);

// --- 7. The Brutalist (Bold Construction) ---
export const ComingBrutalist = () => (
  <div className="flex flex-col justify-between h-[600px] w-full bg-yellow-400 rounded-3xl border-4 border-black relative overflow-hidden">
    {/* Repeating Banner */}
    <div className="absolute top-10 -left-10 transform -rotate-3 bg-black text-white py-2 px-32 border-y-4 border-white font-bold text-xl whitespace-nowrap z-0">
      UNDER CONSTRUCTION &nbsp; • &nbsp; UNDER CONSTRUCTION &nbsp; • &nbsp; UNDER CONSTRUCTION
    </div>

    <div className="relative z-10 p-12 mt-12">
      <h1 className="text-7xl font-black uppercase leading-[0.85] mb-8">
        Not<br/>Quite<br/>Ready.
      </h1>
      <div className="bg-white border-4 border-black p-6 max-w-md shadow-[8px_8px_0_0_#000]">
        <p className="font-bold text-xl mb-4">Wanna know when?</p>
        <div className="flex gap-2">
          <input type="email" placeholder="YOUR EMAIL" className="flex-1 p-3 border-4 border-black font-bold outline-none uppercase" />
          <button className="p-3 bg-black text-white border-4 border-black font-bold hover:bg-white hover:text-black transition-colors">
            GO
          </button>
        </div>
      </div>
    </div>
    
    <div className="p-8 border-t-4 border-black bg-white flex justify-between items-center">
      <span className="font-bold text-xl uppercase">🚧 Building in public</span>
      <div className="flex gap-4 font-bold underline">
        <a href="#">Twitter</a>
        <a href="#">Discord</a>
      </div>
    </div>
  </div>
);

// --- 8. The Neumorphic (Soft) ---
export const ComingNeumorphic = () => (
  <div className="flex items-center justify-center h-[600px] w-full bg-[#e0e5ec] rounded-3xl">
    <div className="w-full max-w-lg p-12 rounded-[40px] bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center">
      <div className="w-24 h-24 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center text-3xl mb-8 mx-auto">
        ⏳
      </div>
      
      <h2 className="text-3xl font-bold text-gray-700 mb-4">Coming Soon</h2>
      <p className="text-gray-500 mb-10">We are working hard to bring you something amazing.</p>
      
      <div className="flex flex-col gap-6">
        <div className="rounded-xl bg-[#e0e5ec] p-1 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
          <input type="email" placeholder="Enter your email" className="w-full bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 px-4 py-3 text-center" />
        </div>
        
        <button className="w-full py-4 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] active:scale-95 transition-all">
          Get Notified
        </button>
      </div>
    </div>
  </div>
);

// --- 9. The App Download (Mobile Focus) ---
export const ComingApp = () => (
  <div className="flex h-[600px] w-full bg-orange-50 rounded-3xl overflow-hidden px-8 md:px-20 pt-20">
    <div className="w-full md:w-1/2 flex flex-col justify-center pb-20">
      <span className="text-orange-600 font-bold tracking-widest uppercase mb-4">Coming to iOS & Android</span>
      <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
        The future of <br/> social connection.
      </h1>
      <p className="text-slate-600 text-lg mb-8 max-w-md">
        A new way to connect with friends. Real, raw, and unfiltered.
      </p>
      
      <form className="bg-white p-2 rounded-xl shadow-lg border border-orange-100 flex max-w-sm">
        <input type="email" placeholder="Email Address" className="flex-1 px-4 outline-none text-slate-900" />
        <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800">
          Join
        </button>
      </form>
    </div>

    <div className="hidden md:flex w-1/2 justify-center items-end">
       <div className="w-[300px] h-[500px] bg-white rounded-t-[3rem] border-x-8 border-t-8 border-slate-900 shadow-2xl relative overflow-hidden">
          {/* Mock Screen */}
          <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-2xl mb-4"></div>
            <div className="font-bold text-slate-900 text-xl">App Name</div>
            <div className="mt-8 space-y-3 w-full opacity-50">
               <div className="h-24 bg-white rounded-xl w-full"></div>
               <div className="h-24 bg-white rounded-xl w-full"></div>
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-sm flex items-center justify-center">
               <div className="bg-white px-6 py-2 rounded-full shadow-lg font-bold text-sm">Coming Soon</div>
            </div>
          </div>
       </div>
    </div>
  </div>
);

// --- 10. The Countdown Focus (Event) ---
export const ComingCountdown = () => (
  <div className="flex flex-col items-center justify-center h-[600px] w-full bg-slate-900 text-white rounded-3xl border border-slate-800 relative">
    <div className="text-center z-10">
      <p className="text-purple-400 font-bold uppercase tracking-[0.2em] mb-4">Something Big Is Coming</p>
      <h1 className="text-4xl md:text-6xl font-bold mb-12">Global Launch Event</h1>
      
      <div className="mb-16">
        <Countdown style="standard" />
      </div>

      <div className="max-w-md mx-auto">
        <p className="text-slate-400 mb-4">Don't miss the livestream.</p>
        <button className="w-full py-4 bg-white text-black font-bold rounded-full hover:bg-purple-400 transition-colors">
          Set Reminder
        </button>
      </div>
    </div>
  </div>
);


// --- Main Gallery Wrapper ---
const ComingSoonGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-100 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Coming Soon Pages</h1>
        <p className="text-slate-500">Waitlist and pre-launch layouts to build hype.</p>
      </div>
      
      <div className="space-y-32">
        
        <section className='box-shadow p-4 rounded-lg relative group/comi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/comi:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="flex flex-col items-center justify-center h-[600px] w-full bg-white border border-gray-100 rounded-3xl p-8 text-center relative overflow-hidden">
    <div className="relative z-10 max-w-xl mx-auto">
      <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide mb-6">
        Coming Soon
      </div>
      <h1 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">
        Work smarter, <br/> not harder.
      </h1>
      <p className="text-slate-500 mb-10 text-lg">
        The all-in-one productivity platform you've been waiting for. 
        Join the waitlist to get early access.
      </p>
      
      <form className="flex gap-2 max-w-md mx-auto mb-8">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        />
        <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
          Join
        </button>
      </form>
      
      <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        <span>2,400+ people joined this week</span>
      </div>
    </div>
    
    {/* Abstract Background Decoration */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
       <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
       <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-100 rounded-full blur-3xl"></div>
    </div>
  </div>`} htmlCode={`<div class="flex flex-col items-center justify-center h-[600px] w-full bg-white border border-gray-100 rounded-3xl p-8 text-center relative overflow-hidden">
    <div class="relative z-10 max-w-xl mx-auto">
      <div class="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide mb-6">
        Coming Soon
      </div>
      <h1 class="text-5xl font-bold text-slate-900 mb-6 tracking-tight">
        Work smarter, <br/> not harder.
      </h1>
      <p class="text-slate-500 mb-10 text-lg">
        The all-in-one productivity platform you've been waiting for. 
        Join the waitlist to get early access.
      </p>
      
      <form class="flex gap-2 max-w-md mx-auto mb-8">
        <input 
          type="email" 
          placeholder="Enter your email" 
          class="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        />
        <button class="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
          Join
        </button>
      </form>
      
      <div class="flex items-center justify-center gap-2 text-sm text-slate-400">
        <span class="w-2 h-2 rounded-full bg-green-500"></span>
        <span>2,400+ people joined this week</span>
      </div>
    </div>
    
    ...
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
       <div class="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
       <div class="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-100 rounded-full blur-3xl"></div>
    </div>
  </div>`} cssCode={`/* ComingStandard Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  backdrop-filter: blur(12px);\n  background-color: #22c55e;\n  background-color: #2563eb;\n  background-color: #dbeafe;\n  background-color: #eff6ff;\n  background-color: #ffffff;\n  border-color: #e5e7eb;\n  border-color: #f3f4f6;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #0f172a;\n  color: #2563eb;\n  color: #64748b;\n  color: #94a3b8;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  height: 100%;\n  justify-content: center;\n  padding-left: 0.75rem; padding-right: 0.75rem;\n  padding-left: 1.5rem; padding-right: 1.5rem;\n  padding-left: 1rem; padding-right: 1rem;\n  padding-top: 0.25rem; padding-bottom: 0.25rem;\n  padding-top: 0.75rem; padding-bottom: 0.75rem;\n  padding: 2rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 01. Standard SaaS </span>
          <ComingStandard />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/comi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/comi:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="flex flex-col justify-center h-[600px] w-full bg-[#f8f8f8] rounded-3xl p-12 md:p-24 border border-gray-200">
    <div className="w-full max-w-2xl">
      <div className="h-1 w-24 bg-black mb-12"></div>
      <h1 className="text-6xl md:text-8xl font-serif text-black leading-none mb-12">
        Something <br/>
        <span className="italic text-gray-400">new</span> is <br/>
        loading...
      </h1>
      
      <div className="flex flex-col md:flex-row items-start md:items-end gap-12">
        <div className="w-full max-w-sm">
          <label className="text-xs font-bold uppercase tracking-widest mb-4 block">Get notified</label>
          <div className="flex border-b border-black pb-2">
            <input type="email" placeholder="Email Address" className="w-full bg-transparent outline-none placeholder-gray-400" />
            <button className="font-bold text-sm uppercase hover:opacity-50 transition-opacity">→ Submit</button>
          </div>
        </div>
        <div className="text-right flex-1">
           <Countdown style="minimal" />
        </div>
      </div>
    </div>
  </div>`} htmlCode={`<div class="flex flex-col justify-center h-[600px] w-full bg-[#f8f8f8] rounded-3xl p-12 md:p-24 border border-gray-200">
    <div class="w-full max-w-2xl">
      <div class="h-1 w-24 bg-black mb-12"></div>
      <h1 class="text-6xl md:text-8xl font-serif text-black leading-none mb-12">
        Something <br/>
        <span class="italic text-gray-400">new</span> is <br/>
        loading...
      </h1>
      
      <div class="flex flex-col md:flex-row items-start md:items-end gap-12">
        <div class="w-full max-w-sm">
          <label class="text-xs font-bold uppercase tracking-widest mb-4 block">Get notified</label>
          <div class="flex border-b border-black pb-2">
            <input type="email" placeholder="Email Address" class="w-full bg-transparent outline-none placeholder-gray-400" />
            <button class="font-bold text-sm uppercase hover:opacity-50 transition-opacity">→ Submit</button>
          </div>
        </div>
        <div class="text-right flex-1">
           <countdown style="minimal" ></countdown>
        </div>
      </div>
    </div>
  </div>`} cssCode={`/* ComingMinimal Styles (Generated from Tailwind) */\n.component-root {\n  background-color: #000000;\n  background-color: transparent;\n  border-color: #000000;\n  border-color: #e5e7eb;\n  border-radius: 1.5rem;\n  border-width: 1px; border-style: solid;\n  color: #000000;\n  color: #9ca3af;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  justify-content: center;\n  padding: 3rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 02. Minimalist Typography </span>
          <ComingMinimal />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/comi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/comi:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="flex h-[600px] w-full rounded-3xl overflow-hidden shadow-xl">
    {/* Left Content */}
    <div className="w-full md:w-1/2 bg-white p-12 flex flex-col justify-center">
      <div className="mb-auto font-bold text-xl">Brand.</div>
      
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">We are building the future of design.</h1>
        <p className="text-gray-500 mb-8">Be the first to know when we launch. No spam, just updates.</p>
        
        <div className="relative">
          <input type="email" placeholder="name@company.com" className="w-full pl-4 pr-32 py-4 bg-gray-50 border border-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-black" />
          <button className="absolute right-2 top-2 bottom-2 px-6 bg-black text-white text-sm font-bold rounded-md hover:bg-gray-800">
            Notify Me
          </button>
        </div>
      </div>

      <div className="mt-auto flex gap-4 text-gray-400">
         <a href="#" className="hover:text-black">Twitter</a>
         <a href="#" className="hover:text-black">Instagram</a>
      </div>
    </div>

    {/* Right Image */}
    <div className="hidden md:block w-1/2 relative">
      <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Coming Soon" />
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  </div>`} htmlCode={`<div class="flex h-[600px] w-full rounded-3xl overflow-hidden shadow-xl">
    ...
    <div class="w-full md:w-1/2 bg-white p-12 flex flex-col justify-center">
      <div class="mb-auto font-bold text-xl">Brand.</div>
      
      <div>
        <h1 class="text-4xl font-bold text-gray-900 mb-4">We are building the future of design.</h1>
        <p class="text-gray-500 mb-8">Be the first to know when we launch. No spam, just updates.</p>
        
        <div class="relative">
          <input type="email" placeholder="name@company.com" class="w-full pl-4 pr-32 py-4 bg-gray-50 border border-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-black" />
          <button class="absolute right-2 top-2 bottom-2 px-6 bg-black text-white text-sm font-bold rounded-md hover:bg-gray-800">
            Notify Me
          </button>
        </div>
      </div>

      <div class="mt-auto flex gap-4 text-gray-400">
         <a href="#" class="hover:text-black">Twitter</a>
         <a href="#" class="hover:text-black">Instagram</a>
      </div>
    </div>

    ...
    <div class="hidden md:block w-1/2 relative">
      <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover" alt="Coming Soon" />
      <div class="absolute inset-0 bg-black/20"></div>
    </div>
  </div>`} cssCode={`/* ComingSplit Styles (Generated from Tailwind) */\n.component-root {\n  background-color: #000000;\n  background-color: #f9fafb;\n  background-color: #ffffff;\n  border-color: #f3f4f6;\n  border-radius: 0.5rem;\n  border-radius: 1.5rem;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #111827;\n  color: #6b7280;\n  color: #9ca3af;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  height: 100%;\n  justify-content: center;\n  padding-left: 1.5rem; padding-right: 1.5rem;\n  padding-top: 1rem; padding-bottom: 1rem;\n  padding: 3rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 03. Split Screen Visual </span>
          <ComingSplit />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/comi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/comi:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="relative flex items-center justify-center h-[600px] w-full rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
    <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-300 rounded-full mix-blend-overlay filter blur-3xl opacity-60 animate-blob"></div>
    <div className="absolute bottom-20 right-20 w-64 h-64 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>

    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-12 rounded-[2rem] shadow-2xl text-center text-white max-w-lg mx-4">
      <div className="inline-block px-4 py-1 rounded-full border border-white/30 text-xs font-bold tracking-widest uppercase mb-8">
        Beta Access
      </div>
      <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">We are almost ready.</h1>
      
      <div className="mb-10 text-white/90">
         <Countdown style="boxes" />
      </div>

      <form className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
        <div className="relative flex bg-white rounded-xl p-1">
          <input type="email" placeholder="Your email address" className="w-full px-4 text-gray-800 bg-transparent outline-none" />
          <button className="px-6 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
            Request
          </button>
        </div>
      </form>
    </div>
  </div>`} htmlCode={`<div class="relative flex items-center justify-center h-[600px] w-full rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
    <div class="absolute top-20 left-20 w-64 h-64 bg-cyan-300 rounded-full mix-blend-overlay filter blur-3xl opacity-60 animate-blob"></div>
    <div class="absolute bottom-20 right-20 w-64 h-64 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>

    <div class="relative bg-white/10 backdrop-blur-xl border border-white/20 p-12 rounded-[2rem] shadow-2xl text-center text-white max-w-lg mx-4">
      <div class="inline-block px-4 py-1 rounded-full border border-white/30 text-xs font-bold tracking-widest uppercase mb-8">
        Beta Access
      </div>
      <h1 class="text-5xl font-bold mb-6 drop-shadow-lg">We are almost ready.</h1>
      
      <div class="mb-10 text-white/90">
         <countdown style="boxes" ></countdown>
      </div>

      <form class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
        <div class="relative flex bg-white rounded-xl p-1">
          <input type="email" placeholder="Your email address" class="w-full px-4 text-gray-800 bg-transparent outline-none" />
          <button class="px-6 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
            Request
          </button>
        </div>
      </form>
    </div>
  </div>`} cssCode={`/* ComingGlass Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  backdrop-filter: blur(12px);\n  background-color: #0f172a;\n  background-color: #fde047;\n  background-color: #ffffff;\n  background-color: transparent;\n  border-radius: 0.5rem;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #1f2937;\n  color: #ffffff;\n  display: flex;\n  font-weight: 700;\n  justify-content: center;\n  padding-left: 1.5rem; padding-right: 1.5rem;\n  padding-left: 1rem; padding-right: 1rem;\n  padding-top: 0.25rem; padding-bottom: 0.25rem;\n  padding-top: 0.5rem; padding-bottom: 0.5rem;\n  padding: 0.25rem;\n  padding: 3rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 04. Glassmorphism </span>
          <ComingGlass />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/comi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="flex items-center justify-center h-[600px] w-full bg-black rounded-3xl border border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px`} htmlCode={`<div class="flex items-center justify-center h-[600px] w-full bg-black rounded-3xl border border-gray-800 relative overflow-hidden"><div class="relative z-10 text-center font-mono"><div class="text-sm text-green-500 mb-4">SYSTEM_STATUS: PENDING</div><h1 class="text-6xl md:text-8xl font-black text-white">COMING_SOON</h1></div></div>`} cssCode={`/* ComingCyber Styles (Best effort conversion) */\n.component-root {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  background-color: #000000;\n  border: 1px solid;\n  position: relative;\n}\n\n/* Note: This is an automated mapping of core layout classes. \n   Full Tailwind support recommended for complex components. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 05. Cyberpunk Terminal </span>
          <ComingCyber />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/comi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/comi:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="flex items-center justify-center h-[600px] w-full bg-slate-900 rounded-3xl relative overflow-hidden">
    {/* Gradient Background */}
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-blue-600 blur-[120px] opacity-20"></div>
      <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] rounded-full bg-purple-600 blur-[120px] opacity-20"></div>
    </div>

    <div className="relative z-10 text-center px-4">
      <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6 tracking-tight">
        Next Gen.
      </h1>
      <p className="text-slate-400 text-xl mb-12 max-w-xl mx-auto">
        We are redefining how you experience the web. <br/> Launching Summer 2024.
      </p>

      <div className="bg-white/5 border border-white/10 p-1 rounded-full flex max-w-md mx-auto backdrop-blur-md">
        <input type="email" placeholder="Enter email address" className="flex-1 bg-transparent px-6 py-3 text-white placeholder-slate-500 outline-none" />
        <button className="bg-white text-black px-8 rounded-full font-bold hover:bg-gray-200 transition-colors">
          Notify Me
        </button>
      </div>
    </div>
  </div>`} htmlCode={`<div class="flex items-center justify-center h-[600px] w-full bg-slate-900 rounded-3xl relative overflow-hidden">
    ...
    <div class="absolute top-0 left-0 w-full h-full">
      <div class="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-blue-600 blur-[120px] opacity-20"></div>
      <div class="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] rounded-full bg-purple-600 blur-[120px] opacity-20"></div>
    </div>

    <div class="relative z-10 text-center px-4">
      <h1 class="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6 tracking-tight">
        Next Gen.
      </h1>
      <p class="text-slate-400 text-xl mb-12 max-w-xl mx-auto">
        We are redefining how you experience the web. <br/> Launching Summer 2024.
      </p>

      <div class="bg-white/5 border border-white/10 p-1 rounded-full flex max-w-md mx-auto backdrop-blur-md">
        <input type="email" placeholder="Enter email address" class="flex-1 bg-transparent px-6 py-3 text-white placeholder-slate-500 outline-none" />
        <button class="bg-white text-black px-8 rounded-full font-bold hover:bg-gray-200 transition-colors">
          Notify Me
        </button>
      </div>
    </div>
  </div>`} cssCode={`/* ComingGradient Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  backdrop-filter: blur(12px);\n  background-color: #0f172a;\n  background-color: #2563eb;\n  background-color: #9333ea;\n  background-color: #ffffff;\n  background-color: transparent;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  color: #000000;\n  color: #94a3b8;\n  color: #ffffff;\n  color: transparent;\n  display: flex;\n  font-weight: 700;\n  height: 100%;\n  justify-content: center;\n  padding-left: 1.5rem; padding-right: 1.5rem;\n  padding-left: 1rem; padding-right: 1rem;\n  padding-left: 2rem; padding-right: 2rem;\n  padding-top: 0.75rem; padding-bottom: 0.75rem;\n  padding: 0.25rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 06. Clean Gradient </span>
          <ComingGradient />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/comi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/comi:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="flex flex-col justify-between h-[600px] w-full bg-yellow-400 rounded-3xl border-4 border-black relative overflow-hidden">
    {/* Repeating Banner */}
    <div className="absolute top-10 -left-10 transform -rotate-3 bg-black text-white py-2 px-32 border-y-4 border-white font-bold text-xl whitespace-nowrap z-0">
      UNDER CONSTRUCTION &nbsp; • &nbsp; UNDER CONSTRUCTION &nbsp; • &nbsp; UNDER CONSTRUCTION
    </div>

    <div className="relative z-10 p-12 mt-12">
      <h1 className="text-7xl font-black uppercase leading-[0.85] mb-8">
        Not<br/>Quite<br/>Ready.
      </h1>
      <div className="bg-white border-4 border-black p-6 max-w-md shadow-[8px_8px_0_0_#000]">
        <p className="font-bold text-xl mb-4">Wanna know when?</p>
        <div className="flex gap-2">
          <input type="email" placeholder="YOUR EMAIL" className="flex-1 p-3 border-4 border-black font-bold outline-none uppercase" />
          <button className="p-3 bg-black text-white border-4 border-black font-bold hover:bg-white hover:text-black transition-colors">
            GO
          </button>
        </div>
      </div>
    </div>
    
    <div className="p-8 border-t-4 border-black bg-white flex justify-between items-center">
      <span className="font-bold text-xl uppercase">🚧 Building in public</span>
      <div className="flex gap-4 font-bold underline">
        <a href="#">Twitter</a>
        <a href="#">Discord</a>
      </div>
    </div>
  </div>`} htmlCode={`<div class="flex flex-col justify-between h-[600px] w-full bg-yellow-400 rounded-3xl border-4 border-black relative overflow-hidden">
    ...
    <div class="absolute top-10 -left-10 transform -rotate-3 bg-black text-white py-2 px-32 border-y-4 border-white font-bold text-xl whitespace-nowrap z-0">
      UNDER CONSTRUCTION &nbsp; • &nbsp; UNDER CONSTRUCTION &nbsp; • &nbsp; UNDER CONSTRUCTION
    </div>

    <div class="relative z-10 p-12 mt-12">
      <h1 class="text-7xl font-black uppercase leading-[0.85] mb-8">
        Not<br/>Quite<br/>Ready.
      </h1>
      <div class="bg-white border-4 border-black p-6 max-w-md shadow-[8px_8px_0_0_#000]">
        <p class="font-bold text-xl mb-4">Wanna know when?</p>
        <div class="flex gap-2">
          <input type="email" placeholder="YOUR EMAIL" class="flex-1 p-3 border-4 border-black font-bold outline-none uppercase" />
          <button class="p-3 bg-black text-white border-4 border-black font-bold hover:bg-white hover:text-black transition-colors">
            GO
          </button>
        </div>
      </div>
    </div>
    
    <div class="p-8 border-t-4 border-black bg-white flex justify-between items-center">
      <span class="font-bold text-xl uppercase">🚧 Building in public</span>
      <div class="flex gap-4 font-bold underline">
        <a href="#">Twitter</a>
        <a href="#">Discord</a>
      </div>
    </div>
  </div>`} cssCode={`/* ComingBrutalist Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #000000;\n  background-color: #facc15;\n  background-color: #ffffff;\n  border-color: #000000;\n  border-color: #ffffff;\n  border-radius: 1.5rem;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  justify-content: space-between;\n  padding-left: 8rem; padding-right: 8rem;\n  padding-top: 0.5rem; padding-bottom: 0.5rem;\n  padding: 0.75rem;\n  padding: 1.5rem;\n  padding: 2rem;\n  padding: 3rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 07. Brutalist </span>
          <ComingBrutalist />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/comi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/comi:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="flex items-center justify-center h-[600px] w-full bg-[#e0e5ec] rounded-3xl">
    <div className="w-full max-w-lg p-12 rounded-[40px] bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center">
      <div className="w-24 h-24 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center text-3xl mb-8 mx-auto">
        ⏳
      </div>
      
      <h2 className="text-3xl font-bold text-gray-700 mb-4">Coming Soon</h2>
      <p className="text-gray-500 mb-10">We are working hard to bring you something amazing.</p>
      
      <div className="flex flex-col gap-6">
        <div className="rounded-xl bg-[#e0e5ec] p-1 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
          <input type="email" placeholder="Enter your email" className="w-full bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 px-4 py-3 text-center" />
        </div>
        
        <button className="w-full py-4 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] active:scale-95 transition-all">
          Get Notified
        </button>
      </div>
    </div>
  </div>`} htmlCode={`<div class="flex items-center justify-center h-[600px] w-full bg-[#e0e5ec] rounded-3xl">
    <div class="w-full max-w-lg p-12 rounded-[40px] bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center">
      <div class="w-24 h-24 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center text-3xl mb-8 mx-auto">
        ⏳
      </div>
      
      <h2 class="text-3xl font-bold text-gray-700 mb-4">Coming Soon</h2>
      <p class="text-gray-500 mb-10">We are working hard to bring you something amazing.</p>
      
      <div class="flex flex-col gap-6">
        <div class="rounded-xl bg-[#e0e5ec] p-1 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
          <input type="email" placeholder="Enter your email" class="w-full bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 px-4 py-3 text-center" />
        </div>
        
        <button class="w-full py-4 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] active:scale-95 transition-all">
          Get Notified
        </button>
      </div>
    </div>
  </div>`} cssCode={`/* ComingNeumorphic Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: transparent;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #374151;\n  color: #3b82f6;\n  color: #4b5563;\n  color: #6b7280;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  justify-content: center;\n  padding-left: 1rem; padding-right: 1rem;\n  padding-top: 0.75rem; padding-bottom: 0.75rem;\n  padding-top: 1rem; padding-bottom: 1rem;\n  padding: 0.25rem;\n  padding: 3rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 08. Neumorphic </span>
          <ComingNeumorphic />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/comi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/comi:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="flex h-[600px] w-full bg-orange-50 rounded-3xl overflow-hidden px-8 md:px-20 pt-20">
    <div className="w-full md:w-1/2 flex flex-col justify-center pb-20">
      <span className="text-orange-600 font-bold tracking-widest uppercase mb-4">Coming to iOS & Android</span>
      <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
        The future of <br/> social connection.
      </h1>
      <p className="text-slate-600 text-lg mb-8 max-w-md">
        A new way to connect with friends. Real, raw, and unfiltered.
      </p>
      
      <form className="bg-white p-2 rounded-xl shadow-lg border border-orange-100 flex max-w-sm">
        <input type="email" placeholder="Email Address" className="flex-1 px-4 outline-none text-slate-900" />
        <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800">
          Join
        </button>
      </form>
    </div>

    <div className="hidden md:flex w-1/2 justify-center items-end">
       <div className="w-[300px] h-[500px] bg-white rounded-t-[3rem] border-x-8 border-t-8 border-slate-900 shadow-2xl relative overflow-hidden">
          {/* Mock Screen */}
          <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-2xl mb-4"></div>
            <div className="font-bold text-slate-900 text-xl">App Name</div>
            <div className="mt-8 space-y-3 w-full opacity-50">
               <div className="h-24 bg-white rounded-xl w-full"></div>
               <div className="h-24 bg-white rounded-xl w-full"></div>
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-sm flex items-center justify-center">
               <div className="bg-white px-6 py-2 rounded-full shadow-lg font-bold text-sm">Coming Soon</div>
            </div>
          </div>
       </div>
    </div>
  </div>`} htmlCode={`<div class="flex h-[600px] w-full bg-orange-50 rounded-3xl overflow-hidden px-8 md:px-20 pt-20">
    <div class="w-full md:w-1/2 flex flex-col justify-center pb-20">
      <span class="text-orange-600 font-bold tracking-widest uppercase mb-4">Coming to iOS & Android</span>
      <h1 class="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
        The future of <br/> social connection.
      </h1>
      <p class="text-slate-600 text-lg mb-8 max-w-md">
        A new way to connect with friends. Real, raw, and unfiltered.
      </p>
      
      <form class="bg-white p-2 rounded-xl shadow-lg border border-orange-100 flex max-w-sm">
        <input type="email" placeholder="Email Address" class="flex-1 px-4 outline-none text-slate-900" />
        <button class="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800">
          Join
        </button>
      </form>
    </div>

    <div class="hidden md:flex w-1/2 justify-center items-end">
       <div class="w-[300px] h-[500px] bg-white rounded-t-[3rem] border-x-8 border-t-8 border-slate-900 shadow-2xl relative overflow-hidden">
          ...
          <div class="w-full h-full bg-slate-100 flex flex-col items-center justify-center p-8 text-center">
            <div class="w-16 h-16 bg-orange-500 rounded-2xl mb-4"></div>
            <div class="font-bold text-slate-900 text-xl">App Name</div>
            <div class="mt-8 space-y-3 w-full opacity-50">
               <div class="h-24 bg-white rounded-xl w-full"></div>
               <div class="h-24 bg-white rounded-xl w-full"></div>
            </div>
            ...
            <div class="absolute inset-0 bg-slate-900/10 backdrop-blur-sm flex items-center justify-center">
               <div class="bg-white px-6 py-2 rounded-full shadow-lg font-bold text-sm">Coming Soon</div>
            </div>
          </div>
       </div>
    </div>
  </div>`} cssCode={`/* ComingApp Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  backdrop-filter: blur(12px);\n  background-color: #0f172a;\n  background-color: #f1f5f9;\n  background-color: #f97316;\n  background-color: #ffffff;\n  border-color: #0f172a;\n  border-radius: 0.5rem;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-radius: 1rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #0f172a;\n  color: #475569;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  height: 100%;\n  justify-content: center;\n  padding-left: 1.5rem; padding-right: 1.5rem;\n  padding-left: 1rem; padding-right: 1rem;\n  padding-left: 2rem; padding-right: 2rem;\n  padding-top: 0.5rem; padding-bottom: 0.5rem;\n  padding-top: 0.75rem; padding-bottom: 0.75rem;\n  padding: 0.5rem;\n  padding: 2rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 09. Mobile App Teaser </span>
          <ComingApp />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/comi'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/comi:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="flex flex-col items-center justify-center h-[600px] w-full bg-slate-900 text-white rounded-3xl border border-slate-800 relative">
    <div className="text-center z-10">
      <p className="text-purple-400 font-bold uppercase tracking-[0.2em] mb-4">Something Big Is Coming</p>
      <h1 className="text-4xl md:text-6xl font-bold mb-12">Global Launch Event</h1>
      
      <div className="mb-16">
        <Countdown style="standard" />
      </div>

      <div className="max-w-md mx-auto">
        <p className="text-slate-400 mb-4">Don't miss the livestream.</p>
        <button className="w-full py-4 bg-white text-black font-bold rounded-full hover:bg-purple-400 transition-colors">
          Set Reminder
        </button>
      </div>
    </div>
  </div>`} htmlCode={`<div class="flex flex-col items-center justify-center h-[600px] w-full bg-slate-900 text-white rounded-3xl border border-slate-800 relative">
    <div class="text-center z-10">
      <p class="text-purple-400 font-bold uppercase tracking-[0.2em] mb-4">Something Big Is Coming</p>
      <h1 class="text-4xl md:text-6xl font-bold mb-12">Global Launch Event</h1>
      
      <div class="mb-16">
        <countdown style="standard" ></countdown>
      </div>

      <div class="max-w-md mx-auto">
        <p class="text-slate-400 mb-4">Don't miss the livestream.</p>
        <button class="w-full py-4 bg-white text-black font-bold rounded-full hover:bg-purple-400 transition-colors">
          Set Reminder
        </button>
      </div>
    </div>
  </div>`} cssCode={`/* ComingCountdown Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #0f172a;\n  background-color: #ffffff;\n  border-color: #1e293b;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  color: #000000;\n  color: #94a3b8;\n  color: #c084fc;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  justify-content: center;\n  padding-top: 1rem; padding-bottom: 1rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 10. Event Countdown </span>
          <ComingCountdown />
        </section>

      </div>
    </div>
  );
};

export default ComingSoonGallery;