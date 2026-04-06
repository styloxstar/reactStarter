import React, { useState, useEffect, useRef } from 'react';
import CopyButton from '../common/CopyButton';

// --- Shared Click Outside Hook ---
const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

// --- 1. The SaaS Mega Menu (Hover) ---
export const NavMega = () => {
  return (
    <nav className="relative bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-bold text-xl text-blue-600">SaaSify</div>
        
        <div className="hidden md:flex gap-8 h-full items-center">
          {['Products', 'Solutions', 'Resources'].map((item) => (
            <div key={item} className="group relative h-full flex items-center cursor-pointer">
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                {item} <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </span>
              
              {/* Mega Menu Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border border-gray-100 shadow-xl rounded-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50 grid grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex gap-4 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Feature {i}</h4>
                      <p className="text-xs text-gray-500 mt-1">Boost productivity with our advanced tools.</p>
                    </div>
                  </div>
                ))}
                <div className="col-span-2 bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Ready to get started?</span>
                  <button className="text-xs font-bold text-blue-600 hover:underline">View Pricing →</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <button className="text-sm font-medium text-gray-600 hover:text-gray-900">Login</button>
          <button className="text-sm font-bold bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

// --- 2. The Floating Island (Glassmorphism) ---
export const NavFloating = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useClickOutside(ref, () => setOpen(false));

  return (
    <div className="w-full flex justify-center py-6 bg-gradient-to-r from-purple-500 to-pink-500 relative min-h-[100px]">
      <nav className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 flex items-center gap-8 shadow-lg relative z-50">
        <div className="text-white font-bold tracking-wider">AURA</div>
        
        <div className="flex gap-6 relative" ref={ref}>
          <button className="text-sm font-medium text-white/90 hover:text-white transition-colors">Home</button>
          <button 
            onClick={() => setOpen(!open)}
            className="text-sm font-medium text-white/90 hover:text-white transition-colors flex items-center gap-1"
          >
            Explore <span className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>▾</span>
          </button>
          
          {/* Dropdown */}
          <div className={`absolute top-full left-0 mt-4 w-48 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-xl transition-all duration-200 origin-top ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
             {['Trending', 'New Arrivals', 'Collections'].map((item) => (
               <a key={item} href="#" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-lg transition-colors">
                 {item}
               </a>
             ))}
          </div>

          <button className="text-sm font-medium text-white/90 hover:text-white transition-colors">About</button>
        </div>

        <button className="w-8 h-8 rounded-full bg-white text-purple-600 flex items-center justify-center font-bold hover:scale-110 transition-transform">
          +
        </button>
      </nav>
    </div>
  );
};

// --- 3. The Cyberpunk (Neon) ---
export const NavCyberpunk = () => {
  return (
    <nav className="bg-black border-b border-gray-800 relative z-40">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-mono font-bold text-2xl text-cyan-400 tracking-tighter hover:text-white transition-colors cursor-pointer">
          CYBER<span className="text-pink-500">NAV</span>_
        </div>

        <div className="hidden md:flex gap-1">
          {['Mission', 'Operatives', 'Intel'].map((item) => (
            <div key={item} className="relative group">
              <button className="px-6 py-2 font-mono text-sm text-gray-400 border border-transparent hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all uppercase tracking-widest clip-path-slant">
                {item}
              </button>
              
              {/* Glitch Dropdown */}
              <div className="absolute top-full left-0 w-48 bg-black border border-pink-500 p-1 hidden group-hover:block shadow-[0_0_15px_rgba(236,72,153,0.4)] z-50">
                 <div className="flex flex-col gap-1">
                    {['Sub_Protocol_1', 'Sub_Protocol_2'].map(sub => (
                      <a key={sub} href="#" className="block px-4 py-2 text-xs font-mono text-pink-500 hover:bg-pink-500 hover:text-black transition-colors">
                        {`> ${sub}`}
                      </a>
                    ))}
                 </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="px-6 py-2 bg-yellow-400 text-black font-bold font-mono text-sm uppercase hover:shadow-[0_0_20px_rgba(250,204,21,0.6)] transition-shadow">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

// --- 4. The Clean Minimalist (Top Border) ---
export const NavMinimal = () => {
  return (
    <nav className="bg-white">
      <div className="border-t-4 border-black max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-serif text-2xl font-bold tracking-tight">Studio.</div>
        
        <div className="hidden md:flex gap-12">
          {['Work', 'Service', 'Journal'].map((item) => (
            <div key={item} className="group relative">
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-black transition-colors relative">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
              </a>
              
              {/* Minimal Dropdown */}
              <div className="absolute top-full left-0 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="w-48 bg-white border border-gray-100 shadow-xl p-4">
                  <div className="flex flex-col gap-4">
                    <a href="#" className="text-sm text-gray-500 hover:text-black">Photography</a>
                    <a href="#" className="text-sm text-gray-500 hover:text-black">Branding</a>
                    <a href="#" className="text-sm text-gray-500 hover:text-black">Digital</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="text-sm font-medium underline underline-offset-4 decoration-1">Let's Talk</button>
      </div>
    </nav>
  );
};

// --- 5. The Double Decker (E-commerce) ---
export const NavEcommerce = () => {
  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-6 flex justify-between items-center">
        <span>Free shipping on orders over $100</span>
        <div className="flex gap-4">
          <span className="cursor-pointer hover:text-white">Help</span>
          <span className="cursor-pointer hover:text-white">USD ($)</span>
        </div>
      </div>
      
      {/* Main Nav */}
      <nav className="bg-white border-b border-gray-100 relative z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight">LUXE.</div>
          
          <div className="hidden md:flex gap-8">
            {['Men', 'Women', 'Accessories'].map((cat) => (
              <div key={cat} className="group">
                <button className="font-medium text-gray-800 hover:text-black py-4">{cat}</button>
                
                {/* Full Width Dropdown */}
                <div className="absolute left-0 top-full w-full bg-white border-t border-gray-100 shadow-xl py-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-8">
                    <div>
                      <h5 className="font-bold text-sm mb-4 text-black">Clothing</h5>
                      <ul className="space-y-2 text-sm text-gray-500">
                        <li>New Arrivals</li>
                        <li>T-Shirts</li>
                        <li>Jackets</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-sm mb-4 text-black">Shoes</h5>
                      <ul className="space-y-2 text-sm text-gray-500">
                        <li>Sneakers</li>
                        <li>Boots</li>
                        <li>Formal</li>
                      </ul>
                    </div>
                     {/* Promo Image */}
                    <div className="col-span-2 h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                      Promo Image Area
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 items-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
          </div>
        </div>
      </nav>
    </div>
  );
};

// --- 6. The Brutalist (Retro) ---
export const NavBrutalist = () => {
  const [open, setOpen] = useState(null);

  return (
    <nav className="bg-yellow-400 border-b-4 border-black py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="bg-black text-white px-4 py-2 font-black text-xl italic uppercase shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
          BRUTAL.
        </div>

        <div className="flex gap-4">
          {['Work', 'Shop'].map((item, i) => (
            <div key={item} className="relative">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="bg-white border-2 border-black px-6 py-2 font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                {item} ▼
              </button>
              
              {open === i && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-50">
                  <a href="#" className="block px-4 py-3 font-bold border-b-2 border-black hover:bg-pink-400 hover:text-white transition-colors">Option A</a>
                  <a href="#" className="block px-4 py-3 font-bold hover:bg-blue-400 hover:text-white transition-colors">Option B</a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

// --- 7. The Sidebar (Dashboard) ---
export const NavSidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="relative min-h-[300px] bg-slate-50 border border-gray-200 rounded-lg overflow-hidden flex">
      <nav className={`bg-slate-900 text-white transition-all duration-300 ${expanded ? 'w-64' : 'w-20'} flex flex-col`}>
        <div className="h-16 flex items-center justify-center border-b border-gray-700">
           <div className="w-8 h-8 bg-indigo-500 rounded-lg"></div>
           {expanded && <span className="ml-3 font-bold">Dash</span>}
        </div>

        <div className="p-4 space-y-2 flex-1">
          <div className="group relative">
            <button className="w-full flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors">
              <span className="text-xl">📊</span>
              {expanded && <span className="ml-3 text-sm font-medium">Analytics</span>}
              {expanded && <span className="ml-auto text-xs">▼</span>}
            </button>
            
            {/* Sidebar Dropdown (Accordion style usually, but float for collapsed) */}
            <div className={`
              ${expanded ? 'relative pl-10 mt-1 space-y-1' : 'absolute left-full top-0 ml-2 w-48 bg-gray-800 rounded-lg p-2 shadow-xl z-50 invisible group-hover:visible'}
            `}>
               <a href="#" className="block px-3 py-2 text-sm text-gray-400 hover:text-white rounded-md hover:bg-gray-700">Overview</a>
               <a href="#" className="block px-3 py-2 text-sm text-gray-400 hover:text-white rounded-md hover:bg-gray-700">Realtime</a>
            </div>
          </div>
        </div>

        <button 
          onClick={() => setExpanded(!expanded)} 
          className="p-4 border-t border-gray-700 text-gray-400 hover:text-white text-center"
        >
          {expanded ? '<< Collapse' : '>>'}
        </button>
      </nav>
      
      <div className="flex-1 p-8 bg-white">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard Content</h2>
      </div>
    </div>
  );
};

// --- 8. The Neumorphic (Soft) ---
export const NavNeumorphic = () => {
  return (
    <nav className="bg-[#e0e5ec] p-4 rounded-xl flex items-center justify-between">
      <div className="px-6 py-2 rounded-lg text-gray-600 font-bold shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]">
        SOFT
      </div>

      <div className="flex gap-6">
        <div className="relative group">
           <button className="px-6 py-2 rounded-lg text-gray-600 font-medium shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff] active:scale-95 transition-all">
             Menu
           </button>
           
           <div className="absolute top-full right-0 mt-4 w-40 p-2 bg-[#e0e5ec] rounded-xl shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <a href="#" className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">Light</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">Dark</a>
           </div>
        </div>
        <button className="w-10 h-10 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center text-gray-500 hover:text-blue-500 transition-colors">
           ?
        </button>
      </div>
    </nav>
  );
};

// --- 9. The App Dock (Mac Style) ---
export const NavDock = () => {
  return (
    <div className="w-full flex justify-center pb-8 pt-4">
      <nav className="bg-white/70 backdrop-blur-xl border border-white/40 px-6 py-3 rounded-2xl flex items-end gap-4 shadow-2xl relative z-50">
        {['Finder', 'Mail', 'Safari', 'Music'].map((app, i) => (
          <div key={app} className="group relative">
             <div className="w-12 h-12 bg-gradient-to-b from-gray-100 to-gray-300 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-4 hover:scale-110 flex items-center justify-center text-xs font-bold text-gray-600 cursor-pointer">
               {app[0]}
             </div>
             {/* Tooltip Dropdown */}
             <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
               Open {app}
             </div>
             {/* Simple dot indicator */}
             <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-gray-400 rounded-full"></div>
          </div>
        ))}
        <div className="w-px h-10 bg-gray-300 mx-2"></div>
        <div className="w-12 h-12 bg-blue-500 rounded-full shadow-lg cursor-pointer hover:-translate-y-2 transition-transform"></div>
      </nav>
    </div>
  );
};

// --- 10. The Fullscreen Overlay (Mobile/Minimal) ---
export const NavOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-black text-white h-20 px-6 flex items-center justify-between">
      <div className="font-bold text-2xl tracking-tighter">MNML</div>
      
      <button onClick={() => setIsOpen(true)} className="flex flex-col gap-1.5 group">
        <span className="w-8 h-0.5 bg-white group-hover:w-6 transition-all ml-auto"></span>
        <span className="w-8 h-0.5 bg-white"></span>
        <span className="w-8 h-0.5 bg-white group-hover:w-4 transition-all ml-auto"></span>
      </button>

      {/* Overlay */}
      <div className={`fixed inset-0 bg-black z-50 flex flex-col items-center justify-center transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-2xl hover:rotate-90 transition-transform">✕</button>
        
        <div className="space-y-8 text-center">
          {['Portfolio', 'Services', 'Contact'].map((item, i) => (
            <div key={item} className="overflow-hidden">
               <a href="#" className={`block text-5xl font-bold hover:text-gray-500 transition-colors transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-500 delay-${i * 100}`}>
                 {item}
               </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};


// --- Gallery Layout ---
const Navbars = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-50 font-sans pb-40">
      <div className="p-12 text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Modern Navbars</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">Diverse navigation patterns with dropdowns and interactions.</p>
      </div>
      
      <div className="space-y-24 max-w-7xl mx-auto px-4 ">
        
        <section className="space-y-4 box-shadow p-6 rounded-xl relative group/nav bg-white">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/nav:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const NavMega = () => (\n  <nav className="relative bg-white border-b border-gray-200">\n    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">\n      <div className="font-bold text-xl text-blue-600">SaaSify</div>\n      <div className="hidden md:flex gap-8 h-full items-center">\n        {['Products', 'Solutions', 'Resources'].map(item => (\n          <div key={item} className="group relative h-full flex items-center cursor-pointer">\n            <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">{item}</span>\n            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border shadow-xl rounded-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all grid grid-cols-2 gap-6 z-50">\n              {/* Mega menu items */}\n            </div>\n          </div>\n        ))}\n      </div>\n      <div className="flex gap-4">\n        <button className="text-sm text-gray-600">Login</button>\n        <button className="text-sm font-bold bg-blue-600 text-white px-4 py-2 rounded-lg">Sign Up</button>\n      </div>\n    </div>\n  </nav>\n);`}
              htmlCode={`<nav class="mega-nav">
  <div class="mega-nav-inner">
    <div class="logo">SaaSify</div>
    <ul class="nav-links">
      <li class="has-mega">
        <a href="#">Products</a>
        <div class="mega-dropdown">
          <div class="mega-col"><h4>Feature 1</h4><p>Description</p></div>
          <div class="mega-col"><h4>Feature 2</h4><p>Description</p></div>
        </div>
      </li>
    </ul>
    <div class="nav-actions"><button>Login</button><button class="btn-primary">Sign Up</button></div>
  </div>
</nav>`}
              cssCode={`.mega-nav { background: #fff; border-bottom: 1px solid #e5e7eb; }
.mega-nav-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; height: 4rem; display: flex; align-items: center; justify-content: space-between; }
.nav-links { display: flex; gap: 2rem; list-style: none; height: 100%; align-items: center; }
.has-mega { position: relative; height: 100%; display: flex; align-items: center; }
.mega-dropdown { position: absolute; top: 100%; left: 50%; transform: translateX(-50%); width: 600px; background: #fff; border: 1px solid #f3f4f6; border-radius: 0.75rem; padding: 1.5rem; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); display: none; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
.has-mega:hover .mega-dropdown { display: grid; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center">01. SaaS Mega Menu</span>
          <NavMega />
        </section>

        <section className="space-y-4 box-shadow p-6 rounded-xl relative group/nav bg-white">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/nav:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const NavFloating = () => {\n  const [open, setOpen] = useState(false);\n  return (\n    <div className="w-full flex justify-center py-6 bg-gradient-to-r from-purple-500 to-pink-500">\n      <nav className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 flex items-center gap-8 shadow-lg">\n        <div className="text-white font-bold">AURA</div>\n        <button className="text-sm text-white/90 hover:text-white">Home</button>\n        <button onClick={() => setOpen(!open)} className="text-sm text-white/90">Explore ▾</button>\n        <button className="w-8 h-8 rounded-full bg-white text-purple-600 font-bold">+</button>\n      </nav>\n    </div>\n  );\n};`}
              htmlCode={`<div class="float-bg">
  <nav class="floating-nav">
    <span class="logo">AURA</span>
    <a href="#">Home</a>
    <a href="#">Explore</a>
    <a href="#">About</a>
    <button class="float-cta">+</button>
  </nav>
</div>`}
              cssCode={`.float-bg { display: flex; justify-content: center; padding: 1.5rem 0; background: linear-gradient(90deg, #a855f7, #ec4899); }
.floating-nav { background: rgba(255,255,255,0.2); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.3); border-radius: 9999px; padding: 0.75rem 1.5rem; display: flex; align-items: center; gap: 2rem; box-shadow: 0 10px 15px rgba(0,0,0,0.1); }
.floating-nav a { color: rgba(255,255,255,0.9); font-size: 0.875rem; text-decoration: none; }
.float-cta { width: 2rem; height: 2rem; border-radius: 50%; background: #fff; color: #9333ea; font-weight: 700; border: none; cursor: pointer; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center">02. Floating Island</span>
          <NavFloating />
        </section>

        <section className="space-y-4 box-shadow p-6 rounded-xl relative group/nav bg-white">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/nav:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const NavCyberpunk = () => (\n  <nav className="bg-black border-b border-gray-800">\n    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">\n      <div className="font-mono font-bold text-2xl text-cyan-400">CYBER<span className="text-pink-500">NAV</span>_</div>\n      <div className="hidden md:flex gap-1">\n        {['Mission', 'Operatives', 'Intel'].map(item => (\n          <button key={item} className="px-6 py-2 font-mono text-sm text-gray-400 border border-transparent hover:border-cyan-500 hover:text-cyan-400 uppercase tracking-widest">{item}</button>\n        ))}\n      </div>\n      <button className="px-6 py-2 bg-yellow-400 text-black font-bold font-mono text-sm uppercase">Connect Wallet</button>\n    </div>\n  </nav>\n);`}
              htmlCode={`<nav class="cyber-nav">
  <div class="cyber-inner">
    <div class="cyber-logo">CYBER<span>NAV</span>_</div>
    <ul class="cyber-links">
      <li><a href="#">Mission</a></li>
      <li><a href="#">Operatives</a></li>
      <li><a href="#">Intel</a></li>
    </ul>
    <button class="cyber-cta">Connect Wallet</button>
  </div>
</nav>`}
              cssCode={`.cyber-nav { background: #000; border-bottom: 1px solid #1f2937; }
.cyber-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; height: 5rem; display: flex; align-items: center; justify-content: space-between; }
.cyber-logo { font-family: monospace; font-weight: 700; font-size: 1.5rem; color: #22d3ee; }
.cyber-logo span { color: #ec4899; }
.cyber-links { display: flex; gap: 0.25rem; list-style: none; }
.cyber-links a { padding: 0.5rem 1.5rem; font-family: monospace; font-size: 0.875rem; color: #9ca3af; border: 1px solid transparent; text-transform: uppercase; letter-spacing: 0.1em; text-decoration: none; }
.cyber-links a:hover { border-color: #06b6d4; color: #22d3ee; background: rgba(6,182,212,0.1); }
.cyber-cta { padding: 0.5rem 1.5rem; background: #facc15; color: #000; font-weight: 700; font-family: monospace; font-size: 0.875rem; text-transform: uppercase; border: none; cursor: pointer; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center">03. Cyberpunk</span>
          <NavCyberpunk />
        </section>

        <section className="space-y-4 box-shadow p-6 rounded-xl relative group/nav bg-white">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/nav:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const NavMinimal = () => (\n  <nav className="bg-white">\n    <div className="border-t-4 border-black max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">\n      <div className="font-serif text-2xl font-bold tracking-tight">Studio.</div>\n      <div className="hidden md:flex gap-12">\n        {['Work', 'Service', 'Journal'].map(item => (\n          <a key={item} href="#" className="text-sm text-gray-500 hover:text-black relative group">\n            {item}\n            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full" />\n          </a>\n        ))}\n      </div>\n      <button className="text-sm font-medium underline underline-offset-4">Let's Talk</button>\n    </div>\n  </nav>\n);`}
              htmlCode={`<nav class="minimal-nav">
  <div class="minimal-inner">
    <div class="minimal-logo">Studio.</div>
    <ul class="minimal-links">
      <li><a href="#">Work</a></li>
      <li><a href="#">Service</a></li>
      <li><a href="#">Journal</a></li>
    </ul>
    <a href="#" class="minimal-cta">Let's Talk</a>
  </div>
</nav>`}
              cssCode={`.minimal-nav { background: #fff; }
.minimal-inner { border-top: 4px solid #000; max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; height: 5rem; display: flex; align-items: center; justify-content: space-between; }
.minimal-logo { font-family: serif; font-size: 1.5rem; font-weight: 700; letter-spacing: -0.025em; }
.minimal-links { display: flex; gap: 3rem; list-style: none; }
.minimal-links a { position: relative; font-size: 0.875rem; color: #6b7280; text-decoration: none; }
.minimal-links a::after { content: ''; position: absolute; bottom: -8px; left: 0; width: 0; height: 2px; background: #000; transition: width 0.3s; }
.minimal-links a:hover { color: #000; }
.minimal-links a:hover::after { width: 100%; }
.minimal-cta { font-size: 0.875rem; text-decoration: underline; text-underline-offset: 4px; color: #000; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center">04. Minimalist</span>
          <NavMinimal />
        </section>

        <section className="space-y-4 box-shadow p-6 rounded-xl relative group/nav bg-white">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/nav:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const NavEcommerce = () => (\n  <div className="w-full">\n    <div className="bg-slate-900 text-slate-300 text-xs py-2 px-6 flex justify-between">\n      <span>Free shipping on orders over $100</span>\n      <div className="flex gap-4"><span>Help</span><span>USD ($)</span></div>\n    </div>\n    <nav className="bg-white border-b border-gray-100 relative">\n      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">\n        <div className="font-bold text-xl">LUXE.</div>\n        <div className="hidden md:flex gap-8">\n          {['Men', 'Women', 'Accessories'].map(cat => (\n            <div key={cat} className="group"><button className="font-medium">{cat}</button></div>\n          ))}\n        </div>\n      </div>\n    </nav>\n  </div>\n);`}
              htmlCode={`<div class="ecom-wrapper">
  <div class="top-bar"><span>Free shipping over $100</span><span>Help | USD</span></div>
  <nav class="ecom-nav">
    <div class="ecom-inner">
      <div class="ecom-logo">LUXE.</div>
      <ul class="ecom-links">
        <li><a href="#">Men</a></li>
        <li><a href="#">Women</a></li>
        <li><a href="#">Accessories</a></li>
      </ul>
      <div class="ecom-icons">🔍 🛍️</div>
    </div>
  </nav>
</div>`}
              cssCode={`.top-bar { background: #0f172a; color: #cbd5e1; font-size: 0.75rem; padding: 0.5rem 1.5rem; display: flex; justify-content: space-between; }
.ecom-nav { background: #fff; border-bottom: 1px solid #f3f4f6; position: relative; }
.ecom-inner { max-width: 80rem; margin: 0 auto; padding: 1rem 1.5rem; display: flex; align-items: center; justify-content: space-between; }
.ecom-logo { font-weight: 700; font-size: 1.25rem; }
.ecom-links { display: flex; gap: 2rem; list-style: none; }
.ecom-links a { font-weight: 500; color: #1f2937; text-decoration: none; padding: 1rem 0; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center">05. E-commerce Double</span>
          <NavEcommerce />
        </section>

        <section className="space-y-4 box-shadow p-6 rounded-xl relative group/nav bg-white">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/nav:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const NavBrutalist = () => {\n  const [open, setOpen] = useState(null);\n  return (\n    <nav className="bg-yellow-400 border-b-4 border-black py-4 px-6">\n      <div className="flex justify-between items-center">\n        <div className="bg-black text-white px-4 py-2 font-black text-xl italic uppercase shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">BRUTAL.</div>\n        <div className="flex gap-4">\n          {['Work', 'Shop'].map((item, i) => (\n            <button key={item} onClick={() => setOpen(open === i ? null : i)} className="bg-white border-2 border-black px-6 py-2 font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">{item} ▼</button>\n          ))}\n        </div>\n      </div>\n    </nav>\n  );\n};`}
              htmlCode={`<nav class="brutal-nav">
  <div class="brutal-inner">
    <div class="brutal-logo">BRUTAL.</div>
    <div class="brutal-actions">
      <button class="brutal-btn">Work ▼</button>
      <button class="brutal-btn">Shop ▼</button>
    </div>
  </div>
</nav>`}
              cssCode={`.brutal-nav { background: #facc15; border-bottom: 4px solid #000; padding: 1rem 1.5rem; }
.brutal-inner { display: flex; justify-content: space-between; align-items: center; }
.brutal-logo { background: #000; color: #fff; padding: 0.5rem 1rem; font-weight: 900; font-size: 1.25rem; font-style: italic; text-transform: uppercase; box-shadow: 4px 4px 0 0 #fff; }
.brutal-btn { background: #fff; border: 2px solid #000; padding: 0.5rem 1.5rem; font-weight: 700; text-transform: uppercase; box-shadow: 4px 4px 0 0 #000; cursor: pointer; }
.brutal-btn:hover { transform: translate(2px, 2px); box-shadow: 2px 2px 0 0 #000; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center">06. Brutalist</span>
          <NavBrutalist />
        </section>

        <section className="space-y-4 box-shadow p-6 rounded-xl relative group/nav bg-white h-[400px]">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/nav:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const NavSidebar = () => {\n  const [expanded, setExpanded] = useState(true);\n  return (\n    <div className="flex min-h-[300px]">\n      <nav className={\`bg-slate-900 text-white transition-all duration-300 \${expanded ? 'w-64' : 'w-20'} flex flex-col\`}>\n        <div className="h-16 flex items-center justify-center border-b border-gray-700">\n          <div className="w-8 h-8 bg-indigo-500 rounded-lg" />\n          {expanded && <span className="ml-3 font-bold">Dash</span>}\n        </div>\n        <div className="p-4 space-y-2 flex-1">\n          <button className="w-full flex items-center p-3 rounded-lg hover:bg-gray-800">\n            <span>📊</span>{expanded && <span className="ml-3 text-sm">Analytics</span>}\n          </button>\n        </div>\n        <button onClick={() => setExpanded(!expanded)} className="p-4 border-t border-gray-700 text-gray-400">{expanded ? '<< Collapse' : '>>'}</button>\n      </nav>\n      <div className="flex-1 p-8 bg-white"><h2 className="text-2xl font-bold">Dashboard Content</h2></div>\n    </div>\n  );\n};`}
              htmlCode={`<div class="dash-layout">
  <aside class="sidebar">
    <div class="sidebar-logo"><div class="logo-icon"></div><span>Dash</span></div>
    <nav class="sidebar-nav">
      <a href="#" class="nav-item">📊 Analytics</a>
      <a href="#" class="nav-item">📦 Products</a>
    </nav>
    <button class="collapse-btn">&lt;&lt; Collapse</button>
  </aside>
  <main class="dash-content"><h2>Dashboard</h2></main>
</div>`}
              cssCode={`.dash-layout { display: flex; min-height: 300px; }
.sidebar { width: 16rem; background: #0f172a; color: #fff; display: flex; flex-direction: column; transition: width 0.3s; }
.sidebar-logo { height: 4rem; display: flex; align-items: center; justify-content: center; border-bottom: 1px solid #374151; }
.logo-icon { width: 2rem; height: 2rem; background: #6366f1; border-radius: 0.5rem; }
.sidebar-nav { padding: 1rem; flex: 1; }
.nav-item { display: block; padding: 0.75rem; border-radius: 0.5rem; color: #9ca3af; text-decoration: none; font-size: 0.875rem; }
.nav-item:hover { background: #1e293b; color: #fff; }
.collapse-btn { padding: 1rem; border-top: 1px solid #374151; color: #9ca3af; background: none; border-left: none; border-right: none; border-bottom: none; cursor: pointer; }
.dash-content { flex: 1; padding: 2rem; background: #fff; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center">07. Dashboard Sidebar</span>
          <NavSidebar />
        </section>

        <section className="space-y-4 box-shadow p-6 rounded-xl relative group/nav bg-[#e0e5ec]">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/nav:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const NavNeumorphic = () => (\n  <nav className="bg-[#e0e5ec] p-4 rounded-xl flex items-center justify-between">\n    <div className="px-6 py-2 rounded-lg text-gray-600 font-bold shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]">SOFT</div>\n    <div className="flex gap-6">\n      <button className="px-6 py-2 rounded-lg text-gray-600 font-medium shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]">Menu</button>\n      <button className="w-10 h-10 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center text-gray-500">?</button>\n    </div>\n  </nav>\n);`}
              htmlCode={`<nav class="neu-nav">
  <div class="neu-logo">SOFT</div>
  <div class="neu-actions">
    <button class="neu-btn">Menu</button>
    <button class="neu-icon">?</button>
  </div>
</nav>`}
              cssCode={`.neu-nav { background: #e0e5ec; padding: 1rem; border-radius: 0.75rem; display: flex; align-items: center; justify-content: space-between; }
.neu-logo { padding: 0.5rem 1.5rem; border-radius: 0.5rem; color: #4b5563; font-weight: 700; box-shadow: inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff; }
.neu-btn { padding: 0.5rem 1.5rem; border-radius: 0.5rem; color: #4b5563; font-weight: 500; background: #e0e5ec; border: none; box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff; cursor: pointer; }
.neu-btn:hover { box-shadow: inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff; }
.neu-icon { width: 2.5rem; height: 2.5rem; border-radius: 50%; background: #e0e5ec; border: none; box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff; color: #6b7280; cursor: pointer; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center">08. Neumorphic</span>
          <NavNeumorphic />
        </section>

        <section className="space-y-4 box-shadow p-6 rounded-xl relative group/nav bg-slate-50">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/nav:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const NavDock = () => (\n  <div className="w-full flex justify-center pb-8 pt-4">\n    <nav className="bg-white/70 backdrop-blur-xl border border-white/40 px-6 py-3 rounded-2xl flex items-end gap-4 shadow-2xl">\n      {['Finder', 'Mail', 'Safari', 'Music'].map(app => (\n        <div key={app} className="w-12 h-12 bg-gradient-to-b from-gray-100 to-gray-300 rounded-xl shadow-md hover:-translate-y-4 hover:scale-110 transition-all duration-300 flex items-center justify-center text-xs font-bold text-gray-600 cursor-pointer">\n          {app[0]}\n        </div>\n      ))}\n      <div className="w-px h-10 bg-gray-300 mx-2" />\n      <div className="w-12 h-12 bg-blue-500 rounded-full shadow-lg cursor-pointer hover:-translate-y-2 transition-transform" />\n    </nav>\n  </div>\n);`}
              htmlCode={`<div class="dock-wrapper">
  <nav class="dock">
    <div class="dock-item">F</div>
    <div class="dock-item">M</div>
    <div class="dock-item">S</div>
    <div class="dock-item">M</div>
    <div class="dock-sep"></div>
    <div class="dock-item dock-round"></div>
  </nav>
</div>`}
              cssCode={`.dock-wrapper { display: flex; justify-content: center; padding: 1rem 0 2rem; }
.dock { background: rgba(255,255,255,0.7); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.4); padding: 0.75rem 1.5rem; border-radius: 1rem; display: flex; align-items: flex-end; gap: 1rem; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
.dock-item { width: 3rem; height: 3rem; background: linear-gradient(to bottom, #f3f4f6, #d1d5db); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; color: #4b5563; cursor: pointer; transition: all 0.3s; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
.dock-item:hover { transform: translateY(-1rem) scale(1.1); }
.dock-sep { width: 1px; height: 2.5rem; background: #d1d5db; margin: 0 0.5rem; }
.dock-round { border-radius: 50%; background: #3b82f6; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center">09. macOS Dock</span>
          <NavDock />
        </section>

        <section className="space-y-4 box-shadow p-6 rounded-xl relative group/nav bg-white">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/nav:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const NavOverlay = () => {\n  const [isOpen, setIsOpen] = useState(false);\n  return (\n    <nav className="relative bg-black text-white h-20 px-6 flex items-center justify-between">\n      <div className="font-bold text-2xl tracking-tighter">MNML</div>\n      <button onClick={() => setIsOpen(true)} className="flex flex-col gap-1.5">\n        <span className="w-8 h-0.5 bg-white" /><span className="w-8 h-0.5 bg-white" /><span className="w-8 h-0.5 bg-white" />\n      </button>\n      <div className={\`fixed inset-0 bg-black z-50 flex flex-col items-center justify-center transition-all \${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}\`}>\n        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-2xl">✕</button>\n        {['Portfolio', 'Services', 'Contact'].map(item => (\n          <a key={item} href="#" className="text-5xl font-bold hover:text-gray-500 transition-colors mb-8">{item}</a>\n        ))}\n      </div>\n    </nav>\n  );\n};`}
              htmlCode={`<nav class="overlay-trigger">
  <div class="overlay-logo">MNML</div>
  <button class="hamburger" onclick="document.getElementById('overlay').classList.add('open')">
    <span></span><span></span><span></span>
  </button>
</nav>
<div id="overlay" class="fullscreen-overlay">
  <button class="close-btn" onclick="this.parentElement.classList.remove('open')">✕</button>
  <a href="#">Portfolio</a>
  <a href="#">Services</a>
  <a href="#">Contact</a>
</div>`}
              cssCode={`.overlay-trigger { background: #000; color: #fff; height: 5rem; padding: 0 1.5rem; display: flex; align-items: center; justify-content: space-between; }
.overlay-logo { font-weight: 700; font-size: 1.5rem; letter-spacing: -0.05em; }
.hamburger { background: none; border: none; cursor: pointer; display: flex; flex-direction: column; gap: 6px; }
.hamburger span { width: 2rem; height: 2px; background: #fff; display: block; }
.fullscreen-overlay { position: fixed; inset: 0; background: #000; z-index: 50; display: flex; flex-direction: column; align-items: center; justify-content: center; opacity: 0; visibility: hidden; transition: all 0.5s; }
.fullscreen-overlay.open { opacity: 1; visibility: visible; }
.fullscreen-overlay a { font-size: 3rem; font-weight: 700; color: #fff; text-decoration: none; margin-bottom: 2rem; }
.fullscreen-overlay a:hover { color: #6b7280; }
.close-btn { position: absolute; top: 2rem; right: 2rem; background: none; border: none; color: #fff; font-size: 1.5rem; cursor: pointer; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center">10. Fullscreen Overlay</span>
          <NavOverlay />
        </section>

      </div>
    </div>
  );
};

export default Navbars;