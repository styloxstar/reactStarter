import React, { useState, useEffect, useRef } from 'react';

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
      
      <div className="space-y-24 max-w-7xl mx-auto px-4">
        
        <section className="space-y-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center">01. SaaS Mega Menu</span>
          <NavMega />
        </section>

        <section className="space-y-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center">02. Floating Island</span>
          <NavFloating />
        </section>

        <section className="space-y-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center">03. Cyberpunk</span>
          <NavCyberpunk />
        </section>

        <section className="space-y-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center">04. Minimalist</span>
          <NavMinimal />
        </section>

        <section className="space-y-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center">05. E-commerce Double</span>
          <NavEcommerce />
        </section>

        <section className="space-y-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center">06. Brutalist</span>
          <NavBrutalist />
        </section>

        <section className="space-y-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center">07. Dashboard Sidebar</span>
          <NavSidebar />
        </section>

        <section className="space-y-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center">08. Neumorphic</span>
          <NavNeumorphic />
        </section>

        <section className="space-y-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center">09. macOS Dock</span>
          <NavDock />
        </section>

        <section className="space-y-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center">10. Fullscreen Overlay</span>
          <NavOverlay />
        </section>

      </div>
    </div>
  );
};

export default Navbars;