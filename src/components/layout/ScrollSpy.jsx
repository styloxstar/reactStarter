import React, { useState, useEffect, useRef } from 'react';

// --- SHARED LOGIC: The ScrollSpy Hook ---
// This hook tracks scroll position within a specific container (rootRef)
const useScrollSpy = (ids, rootRef, offset = 50) => {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const container = rootRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop + offset;

      // Find the section that is currently active
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && container.contains(element)) {
          // Calculate relative position within the scrollable container
          const offsetTop = element.offsetTop - container.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveId(id);
            break; // Stop once we find the active one
          }
        }
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [ids, rootRef, offset]);

  return activeId;
};

// --- Shared Dummy Content ---
const ContentSection = ({ id, title, color = "bg-gray-100" }) => (
  <section id={id} className={`p-8 mb-4 rounded-xl ${color} min-h-[300px] `}>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600 mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <p className="text-gray-600">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
  </section>
);

// --- 1. The Standard Vertical (Left Border) ---
export const SpyStandard = () => {
  const sections = ['s1-intro', 's1-features', 's1-pricing'];
  const scrollRef = useRef(null);
  const activeId = useScrollSpy(sections, scrollRef);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    // Smooth scroll logic for container
    if(scrollRef.current && el) {
      scrollRef.current.scrollTo({
        top: el.offsetTop - scrollRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex gap-6 h-80 border border-gray-200 rounded-xl overflow-hidden bg-white">
      {/* Sidebar Nav */}
      <nav className="w-48 bg-gray-50 p-6 flex flex-col gap-4 border-r border-gray-100">
        <span className="text-xs font-bold text-gray-400 uppercase">Contents</span>
        {sections.map(id => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`text-left pl-4 py-1 text-sm font-medium border-l-2 transition-all ${
              activeId === id 
              ? 'border-blue-600 text-blue-600' 
              : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
            }`}
          >
            {id.split('-')[1].charAt(0).toUpperCase() + id.split('-')[1].slice(1)}
          </button>
        ))}
      </nav>
      {/* Scrollable Content */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 scroll-smooth relative">
        <ContentSection id="s1-intro" title="Introduction" />
        <ContentSection id="s1-features" title="Features" />
        <ContentSection id="s1-pricing" title="Pricing" />
      </div>
    </div>
  );
};

// --- 2. The Sticky Header (Underline) ---
export const SpySticky = () => {
  const sections = ['s2-home', 's2-about', 's2-contact'];
  const scrollRef = useRef(null);
  const activeId = useScrollSpy(sections, scrollRef);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if(scrollRef.current && el) {
      scrollRef.current.scrollTo({ top: el.offsetTop - scrollRef.current.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="h-80 border border-gray-200 rounded-xl overflow-hidden bg-white relative flex flex-col">
      {/* Sticky Header */}
      <div className="bg-white border-b border-gray-200 px-6 flex items-center justify-between z-10 shadow-sm h-14 shrink-0">
        <span className="font-bold text-gray-800">Brand</span>
        <div className="flex gap-6 h-full">
          {sections.map(id => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative h-full flex items-center text-sm font-medium transition-colors ${
                activeId === id ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {id.split('-')[1].charAt(0).toUpperCase() + id.split('-')[1].slice(1)}
              {/* Active Line */}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transition-transform duration-300 ${activeId === id ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </button>
          ))}
        </div>
      </div>
      
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 scroll-smooth">
        <ContentSection id="s2-home" title="Home" color="bg-indigo-50" />
        <ContentSection id="s2-about" title="About" color="bg-purple-50" />
        <ContentSection id="s2-contact" title="Contact" color="bg-pink-50" />
      </div>
    </div>
  );
};

// --- 3. The Minimal Dots (Right Side) ---
export const SpyDots = () => {
  const sections = ['s3-1', 's3-2', 's3-3', 's3-4'];
  const scrollRef = useRef(null);
  const activeId = useScrollSpy(sections, scrollRef);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if(scrollRef.current && el) {
      scrollRef.current.scrollTo({ top: el.offsetTop - scrollRef.current.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="h-80 border border-gray-200 rounded-xl overflow-hidden bg-white relative">
      <div ref={scrollRef} className="h-full overflow-y-auto p-6 scroll-smooth">
        {sections.map((id, i) => <ContentSection key={id} id={id} title={`Section ${i+1}`} />)}
      </div>

      {/* Floating Right Dots */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 bg-white/80 backdrop-blur p-2 rounded-full border border-gray-100 shadow-lg">
        {sections.map(id => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="group relative flex items-center justify-center w-4 h-4"
          >
            <span className={`rounded-full transition-all duration-300 ${activeId === id ? 'w-3 h-3 bg-black' : 'w-1.5 h-1.5 bg-gray-300 group-hover:bg-gray-500'}`}></span>
            {/* Tooltip */}
            <span className="absolute right-6 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Go to {id}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

// --- 4. The Floating Glass (Table of Contents) ---
export const SpyGlass = () => {
  const sections = ['s4-intro', 's4-details', 's4-end'];
  const scrollRef = useRef(null);
  const activeId = useScrollSpy(sections, scrollRef);
  
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if(scrollRef.current && el) {
      scrollRef.current.scrollTo({ top: el.offsetTop - scrollRef.current.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="h-80 relative rounded-xl overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-700">
      <div ref={scrollRef} className="h-full overflow-y-auto p-6 scroll-smooth">
        <ContentSection id="s4-intro" title="Glass Intro" color="bg-white/90" />
        <ContentSection id="s4-details" title="Details" color="bg-white/90" />
        <ContentSection id="s4-end" title="Conclusion" color="bg-white/90" />
      </div>

      {/* Floating TOC */}
      <div className="absolute top-6 right-6 w-32 bg-white/20 backdrop-blur-md border border-white/30 p-3 rounded-xl shadow-xl">
        <div className="text-xs font-bold text-white mb-2 opacity-80 uppercase tracking-wider">On Page</div>
        <div className="flex flex-col gap-1">
          {sections.map(id => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-xs text-left px-2 py-1.5 rounded-lg transition-colors ${
                activeId === id 
                ? 'bg-white text-teal-800 font-bold shadow-sm' 
                : 'text-white hover:bg-white/10'
              }`}
            >
              {id.split('-')[1]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 5. The Progress Bar (Reading Indicator) ---
export const SpyProgress = () => {
  const sections = ['s5-1', 's5-2', 's5-3', 's5-4'];
  const scrollRef = useRef(null);
  const activeId = useScrollSpy(sections, scrollRef);
  
  // Calculate index for progress bar width
  const activeIndex = sections.indexOf(activeId);
  const progress = ((activeIndex + 1) / sections.length) * 100;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if(scrollRef.current && el) {
      scrollRef.current.scrollTo({ top: el.offsetTop - scrollRef.current.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="h-80 border border-gray-200 rounded-xl overflow-hidden bg-white flex flex-col">
       <div className="h-14 border-b border-gray-100 flex items-center px-6 justify-between bg-white relative">
         <span className="font-serif font-bold italic text-xl">Reader.</span>
         <div className="text-xs text-gray-400">Reading: {activeId}</div>
         
         {/* The Progress Bar */}
         <div className="absolute bottom-0 left-0 h-1 bg-gray-100 w-full">
            <div 
              className="h-full bg-red-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
         </div>
       </div>

       <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 scroll-smooth">
        {sections.map((id, i) => (
           <div key={id} id={id} className="mb-12">
             <h2 className="text-xl font-bold mb-2">Chapter {i + 1}</h2>
             <p className="text-gray-600 leading-relaxed">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
               Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
             </p>
             <div className="h-32 bg-gray-100 mt-4 rounded-lg"></div>
           </div>
        ))}
       </div>
    </div>
  );
};

// --- 6. The Cyberpunk (Neon Tech) ---
export const SpyCyberpunk = () => {
  const sections = ['s6-sys', 's6-net', 's6-sec'];
  const scrollRef = useRef(null);
  const activeId = useScrollSpy(sections, scrollRef);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if(scrollRef.current && el) {
      scrollRef.current.scrollTo({ top: el.offsetTop - scrollRef.current.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="h-80 bg-black border-2 border-green-500 rounded-sm overflow-hidden flex relative">
      {/* Glitch Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,0,0.05)_50%)] bg-[length:100%_4px] pointer-events-none"></div>

      <nav className="w-40 border-r-2 border-green-500/50 p-4 flex flex-col gap-4 font-mono">
        <div className="text-green-500 text-xs mb-4 animate-pulse">SYSTEM_READY</div>
        {sections.map(id => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`text-left text-xs uppercase p-2 border border-dashed transition-all ${
              activeId === id 
              ? 'border-green-400 text-black bg-green-500 font-bold shadow-[0_0_10px_rgba(34,197,94,0.6)]' 
              : 'border-green-900 text-green-700 hover:text-green-400 hover:border-green-500'
            }`}
          >
            {`> ${id.split('-')[1]}`}
          </button>
        ))}
      </nav>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 scroll-smooth bg-gray-900">
        <ContentSection id="s6-sys" title="SYSTEM_CORE" color="bg-gray-800 border border-green-900 text-green-100" />
        <ContentSection id="s6-net" title="NETWORK_IO" color="bg-gray-800 border border-green-900 text-green-100" />
        <ContentSection id="s6-sec" title="SECURITY_PROTOCOL" color="bg-gray-800 border border-green-900 text-green-100" />
      </div>
    </div>
  );
};

// --- 7. The Neumorphic (Soft) ---
export const SpyNeumorphic = () => {
  const sections = ['s7-1', 's7-2', 's7-3'];
  const scrollRef = useRef(null);
  const activeId = useScrollSpy(sections, scrollRef);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if(scrollRef.current && el) {
      scrollRef.current.scrollTo({ top: el.offsetTop - scrollRef.current.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="h-80 bg-[#e0e5ec] rounded-2xl flex p-4 gap-4 shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
      <div className="w-16 flex flex-col items-center gap-6 py-4">
        {sections.map((id, i) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
              activeId === id 
              ? 'text-blue-500 shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]' 
              : 'text-gray-500 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:text-gray-700'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <div ref={scrollRef} className="flex-1 overflow-y-auto pr-2 rounded-xl">
        <div className="space-y-6">
           <ContentSection id="s7-1" title="Soft UI 1" color="bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]" />
           <ContentSection id="s7-2" title="Soft UI 2" color="bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]" />
           <ContentSection id="s7-3" title="Soft UI 3" color="bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]" />
        </div>
      </div>
    </div>
  );
};

// --- 8. The Floating Pill (iOS Segmented) ---
export const SpyPill = () => {
  const sections = ['s8-opt1', 's8-opt2', 's8-opt3'];
  const scrollRef = useRef(null);
  const activeId = useScrollSpy(sections, scrollRef);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if(scrollRef.current && el) {
      scrollRef.current.scrollTo({ top: el.offsetTop - scrollRef.current.offsetTop, behavior: 'smooth' });
    }
  };

  // Calculate pill position index
  const activeIndex = sections.indexOf(activeId);

  return (
    <div className="h-80 border border-gray-200 rounded-xl overflow-hidden bg-white flex flex-col relative">
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-gray-100/90 backdrop-blur p-1 rounded-full border border-gray-200 shadow-xl flex">
        {/* Animated Background Pill */}
        <div 
          className="absolute top-1 bottom-1 bg-white rounded-full shadow-sm transition-all duration-300 ease-out"
          style={{ 
            left: `${(activeIndex * 100) / sections.length}%`, 
            width: `${100 / sections.length}%` 
          }}
        ></div>
        
        {sections.map((id, i) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`relative w-20 py-2 text-xs font-bold z-10 transition-colors duration-300 ${activeId === id ? 'text-black' : 'text-gray-500'}`}
          >
            Option {i+1}
          </button>
        ))}
      </div>
      
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 scroll-smooth">
        <ContentSection id="s8-opt1" title="Option One" />
        <ContentSection id="s8-opt2" title="Option Two" />
        <ContentSection id="s8-opt3" title="Option Three" />
      </div>
    </div>
  );
};

// --- 9. The Brutalist (Bold) ---
export const SpyBrutalist = () => {
  const sections = ['s9-A', 's9-B', 's9-C'];
  const scrollRef = useRef(null);
  const activeId = useScrollSpy(sections, scrollRef);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if(scrollRef.current && el) {
      scrollRef.current.scrollTo({ top: el.offsetTop - scrollRef.current.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="h-80 border-4 border-black bg-yellow-300 flex">
      <nav className="w-16 border-r-4 border-black flex flex-col">
        {sections.map((id, i) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`flex-1 font-black text-xl border-b-4 border-black hover:bg-white hover:text-black transition-colors ${
              activeId === id ? 'bg-black text-white' : 'bg-yellow-300 text-black'
            }`}
          >
            {id.split('-')[1]}
          </button>
        ))}
      </nav>
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 bg-white scroll-smooth">
        <ContentSection id="s9-A" title="BLOCK A" color="bg-emerald-300  border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
        <ContentSection id="s9-B" title="BLOCK B" color="bg-blue-300  border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
        <ContentSection id="s9-C" title="BLOCK C" color="bg-purple-300  border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
      </div>
    </div>
  );
};

// --- 10. The Stepper (Process) ---
export const SpyStepper = () => {
  const sections = ['s10-1', 's10-2', 's10-3'];
  const scrollRef = useRef(null);
  const activeId = useScrollSpy(sections, scrollRef);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if(scrollRef.current && el) {
      scrollRef.current.scrollTo({ top: el.offsetTop - scrollRef.current.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="h-80 border border-gray-200 rounded-xl overflow-hidden bg-white flex">
      <div className="w-1/3 bg-gray-50 border-r border-gray-100 p-6">
        <div className="relative h-full">
           {/* Connecting Line */}
           <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-gray-200"></div>
           
           <div className="flex flex-col h-full justify-between relative z-10">
             {sections.map((id, i) => {
               const isActive = activeId === id;
               // Check if completed (index is less than active index)
               const activeIndex = sections.indexOf(activeId);
               const isCompleted = i < activeIndex;

               return (
                 <button key={id} onClick={() => scrollTo(id)} className="flex items-center gap-3 group text-left">
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                     isActive ? 'bg-blue-600 border-blue-600 text-white' : isCompleted ? 'bg-green-500 border-green-500 text-white' : 'bg-white border-gray-300 text-gray-400'
                   }`}>
                     {isCompleted ? '✓' : i + 1}
                   </div>
                   <div>
                     <div className={`text-sm font-bold ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>Step {i+1}</div>
                     <div className="text-xs text-gray-400">Description</div>
                   </div>
                 </button>
               )
             })}
           </div>
        </div>
      </div>
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 scroll-smooth">
        <ContentSection id="s10-1" title="Step 1: Planning" />
        <ContentSection id="s10-2" title="Step 2: Execution" />
        <ContentSection id="s10-3" title="Step 3: Review" />
      </div>
    </div>
  );
};


// --- Main Gallery Layout ---
const ScrollSpy = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Scrollspy Components</h1>
        <p className="text-slate-500">Scroll the individual containers to see the navigation update.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start justify-items-center">
        
        <div className="w-full box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">01. Standard Sidebar</span>
          <SpyStandard />
        </div>

        <div className="w-full box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">02. Sticky Header</span>
          <SpySticky />
        </div>

        <div className="w-full box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">03. Minimal Dots</span>
          <SpyDots />
        </div>

        <div className="w-full box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">04. Glass TOC</span>
          <SpyGlass />
        </div>

        <div className="w-full box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">05. Progress Reader</span>
          <SpyProgress />
        </div>

        <div className="w-full box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">06. Cyberpunk</span>
          <SpyCyberpunk />
        </div>

        <div className="w-full box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">07. Neumorphic</span>
          <SpyNeumorphic />
        </div>

        <div className="w-full box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">08. Floating Pill</span>
          <SpyPill />
        </div>

        <div className="w-full box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">09. Brutalist</span>
          <SpyBrutalist />
        </div>

        <div className="w-full box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">10. Stepper</span>
          <SpyStepper />
        </div>

      </div>
    </div>
  );
};

export default ScrollSpy;