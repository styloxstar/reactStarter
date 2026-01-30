import React from 'react';

// --- Shared Dummy Data ---
const events = [
  { date: "2021", title: "Inception", desc: "The idea was born in a garage." },
  { date: "2022", title: "Launch", desc: "Released beta to public." },
  { date: "2023", title: "Growth", desc: "Reached 10,000 active users." },
  { date: "2024", title: "Expansion", desc: "Opened new offices globally." },
];

// --- 1. The Standard Vertical (Left Line) ---
const TimelineStandard = () => (
  <div className="relative border-l border-gray-200 ml-3">
    {events.map((event, i) => (
      <div key={i} className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
          <svg className="w-2.5 h-2.5 text-blue-800" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
          {event.title} <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">{event.date}</span>
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500">{event.desc}</p>
      </div>
    ))}
  </div>
);

// --- 2. The Alternating (Zig-Zag) ---
const TimelineAlternating = () => (
  <div className="relative w-full max-w-4xl mx-auto">
    {/* Center Line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
    
    {events.map((event, i) => (
      <div key={i} className={`relative flex items-center justify-between mb-8 w-full ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}>
        <div className="w-5/12"></div>
        <div className="z-20 flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-full ring-4 ring-white shadow">
          <span className="text-white text-xs font-bold">{i + 1}</span>
        </div>
        <div className={`w-5/12 p-6 bg-white rounded-lg shadow-md border border-gray-100 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
          <span className="text-indigo-600 font-bold text-sm mb-1 block">{event.date}</span>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
          <p className="text-gray-500 text-sm">{event.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

// --- 3. The Horizontal Scroll ---
const TimelineHorizontal = () => (
  <div className="w-full overflow-x-auto pb-8">
    <div className="min-w-[800px] relative">
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2"></div>
      <div className="flex justify-between relative z-10 px-4">
        {events.map((event, i) => (
          <div key={i} className="flex flex-col items-center group cursor-pointer">
            <div className="w-4 h-4 bg-gray-300 rounded-full border-4 border-white mb-4 transition-all group-hover:bg-blue-600 group-hover:scale-150"></div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 w-48 text-center transition-all group-hover:-translate-y-2 group-hover:shadow-md">
              <span className="text-xs font-bold text-gray-400 block mb-1">{event.date}</span>
              <h4 className="font-bold text-gray-800">{event.title}</h4>
              <p className="text-xs text-gray-500 mt-2">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 4. The Glassmorphism Timeline ---
const TimelineGlass = () => (
  <div className="relative border-l border-white/20 ml-3 space-y-8">
    {events.map((event, i) => (
      <div key={i} className="ml-8 relative">
        <span className="absolute -left-[41px] top-4 w-4 h-4 bg-white/50 backdrop-blur rounded-full border-2 border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></span>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg hover:bg-white/20 transition-colors">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-white font-bold text-lg">{event.title}</h3>
            <span className="text-white/60 text-sm font-mono">{event.date}</span>
          </div>
          <p className="text-blue-100 text-sm">{event.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

// --- 5. The Cyberpunk (Neon) ---
const TimelineCyberpunk = () => (
  <div className="relative ml-3 border-l-2 border-gray-800">
    {events.map((event, i) => (
      <div key={i} className="mb-10 ml-6 group">
        <span className="absolute -left-[9px] w-4 h-4 bg-black border-2 border-cyan-500 rotate-45 group-hover:bg-cyan-500 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-all"></span>
        
        <div className="bg-gray-900 border border-gray-700 p-4 relative overflow-hidden group-hover:border-cyan-500 transition-colors">
          {/* Glitch Effect Line */}
          <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-cyan-400 font-mono font-bold">{event.date}</span>
            <span className="text-gray-600 text-xs">/// PHASE_0{i+1}</span>
          </div>
          <h3 className="text-white font-bold uppercase tracking-wider mb-1">{event.title}</h3>
          <p className="text-gray-400 text-xs font-mono">{event.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

// --- 6. The Minimalist Dots ---
const TimelineMinimal = () => (
  <div className="flex flex-col gap-6">
    {events.map((event, i) => (
      <div key={i} className="flex gap-4 group">
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 bg-gray-300 rounded-full group-hover:bg-black transition-colors"></div>
          {i !== events.length - 1 && <div className="w-px h-full bg-gray-200 my-1 group-hover:bg-gray-300"></div>}
        </div>
        <div className="pb-6">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{event.date}</span>
          <h4 className="font-semibold text-gray-900 mt-1">{event.title}</h4>
          <p className="text-gray-500 text-sm mt-1">{event.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

// --- 7. The Brutalist (Retro) ---
const TimelineBrutalist = () => (
  <div className="relative ml-4 pl-8 border-l-4 border-black space-y-8">
    {events.map((event, i) => (
      <div key={i} className="relative">
        <div className="absolute -left-[44px] top-4 w-6 h-6 bg-white border-4 border-black"></div>
        <div className="bg-yellow-400 border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
          <span className="inline-block bg-black text-white px-2 py-1 text-xs font-bold mb-2">{event.date}</span>
          <h3 className="text-xl font-black uppercase mb-1">{event.title}</h3>
          <p className="font-bold text-sm">{event.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

// --- 8. The Card Icons (Detailed) ---
const TimelineIcons = () => (
  <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
    {events.map((event, i) => (
      <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        {/* Icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
           <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        
        {/* Card */}
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between space-x-2 mb-1">
            <div className="font-bold text-slate-900">{event.title}</div>
            <time className="font-mono text-xs text-slate-500">{event.date}</time>
          </div>
          <div className="text-slate-500 text-sm">{event.desc}</div>
        </div>
      </div>
    ))}
  </div>
);

// --- 9. The Neumorphic (Soft UI) ---
const TimelineNeumorphic = () => (
  <div className="relative ml-4 border-l-2 border-gray-200">
    {events.map((event, i) => (
      <div key={i} className="mb-10 ml-8 relative">
        <span className="absolute -left-[41px] top-4 w-6 h-6 rounded-full bg-[#e0e5ec] shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] flex items-center justify-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        </span>
        <div className="p-6 rounded-2xl bg-[#e0e5ec] shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)]">
          <h3 className="text-gray-700 font-bold text-lg">{event.title}</h3>
          <span className="text-blue-500 text-xs font-bold">{event.date}</span>
          <p className="text-gray-500 text-sm mt-2">{event.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

// --- 10. The Process Steps (Numbered) ---
const TimelineSteps = () => (
  <div className="w-full">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {events.map((event, i) => (
        <div key={i} className="relative pt-8 md:pt-0">
          {/* Horizontal Line (Desktop only) */}
          {i !== events.length - 1 && (
            <div className="hidden md:block absolute top-5 left-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
          )}
          
          <div className="flex flex-col items-center text-center group">
            <div className="w-10 h-10 rounded-full bg-white border-2 border-indigo-100 flex items-center justify-center font-bold text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-sm mb-4 relative z-10">
              {i + 1}
            </div>
            <h3 className="text-lg font-bold text-gray-800">{event.title}</h3>
            <span className="text-xs font-semibold text-indigo-500 mb-2 block">{event.date}</span>
            <p className="text-sm text-gray-500 px-4">{event.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- Gallery Layout ---
const Timelines = () => {
  return (
    <div className="container box-shadow bg-slate-50 p-6 md:p-12 font-sans pb-40 overflow-auto">
      <h1 className="text-4xl font-bold text-center text-slate-800 mb-4">Modern Timelines</h1>
      <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">Diverse layouts for displaying chronological data.</p>
      
      <div className="grid grid-cols-1 gap-24 max-w-5xl mx-auto">
        
        <section className="space-y-8 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-8">01. Standard Vertical</span>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-md mx-auto">
            <TimelineStandard />
          </div>
        </section>

        <section className="space-y-8 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-8">02. Alternating Zig-Zag</span>
          <TimelineAlternating />
        </section>

        <section className="space-y-8 w-full overflow-hidden box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-8">03. Horizontal Scroll</span>
          <TimelineHorizontal />
        </section>

        <section className="space-y-8 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-8">04. Glassmorphism</span>
          <div className="bg-gradient-to-br from-indigo-900 to-purple-800 p-12 rounded-2xl max-w-md mx-auto">
            <TimelineGlass />
          </div>
        </section>

        <section className="space-y-8 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-8">05. Cyberpunk</span>
          <div className="bg-gray-950 p-12 rounded-2xl max-w-md mx-auto">
            <TimelineCyberpunk />
          </div>
        </section>

        <section className="space-y-8 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-8">06. Minimalist Dots</span>
          <div className="bg-white p-8 rounded-xl border border-gray-100 max-w-md mx-auto">
            <TimelineMinimal />
          </div>
        </section>

        <section className="space-y-8 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-8">07. Brutalist</span>
          <div className="max-w-md mx-auto">
            <TimelineBrutalist />
          </div>
        </section>

        <section className="space-y-8 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-8">08. Detailed Cards</span>
          <TimelineIcons />
        </section>

        <section className="space-y-8 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-8">09. Neumorphic</span>
          <div className="bg-[#e0e5ec] p-12 rounded-2xl max-w-md mx-auto">
             <TimelineNeumorphic />
          </div>
        </section>

        <section className="space-y-8 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-8">10. Process Steps</span>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <TimelineSteps />
          </div>
        </section>

      </div>
    </div>
  );
};

export default Timelines;