import React from 'react';
import CopyButton from '../CopyButton';

// --- Shared Data ---
const team = [
  { name: "Sarah Cole", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
  { name: "David Park", role: "Head of Design", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
  { name: "Emily Chen", role: "Lead Engineer", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop" },
  { name: "Michael Ross", role: "Product Manager", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
];

const SocialIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
);

// --- 1. The Standard Grid (SaaS) ---
export const TeamStandard = () => (
  <div className="bg-white p-12 rounded-3xl border border-gray-100">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the team</h2>
      <p className="text-gray-500 max-w-xl mx-auto">We are a diverse group of thinkers and doers dedicated to building the future.</p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {team.map((member, i) => (
        <div key={i} className="group">
          <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100 mb-4">
            <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
          <p className="text-sm text-blue-600 font-medium">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
);

// --- 2. The Circle Avatars (Minimal) ---
export const TeamMinimal = () => (
  <div className="bg-slate-50 p-12 rounded-3xl">
    <div className="flex flex-wrap justify-center gap-12 md:gap-20 max-w-5xl mx-auto">
      {team.map((member, i) => (
        <div key={i} className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-sm mb-4">
            <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
          <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
          <p className="text-xs text-slate-500 uppercase tracking-widest">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
);

// --- 3. The Hover Reveal (Interactive) ---
export const TeamHover = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {team.map((member, i) => (
        <div key={i} className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
          <img src={member.img} alt={member.name} className="absolute inset-0 w-full h-full object-cover" />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
            <h3 className="text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{member.name}</h3>
            <p className="text-sm text-gray-300 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{member.role}</p>
            <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
              <div className="p-2 bg-white/20 rounded-full hover:bg-white hover:text-black transition-colors"><SocialIcon/></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- 4. The Leadership Focus (Horizontal) ---
export const TeamLeadership = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100">
    <div className="max-w-4xl mx-auto space-y-12">
      {team.slice(0, 2).map((member, i) => (
        <div key={i} className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
          <div className="w-full md:w-1/3">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
            <p className="text-indigo-600 font-medium mb-4">{member.role}</p>
            <p className="text-gray-500 leading-relaxed mb-6">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
               <a href="#" className="text-gray-400 hover:text-gray-900">Twitter</a>
               <a href="#" className="text-gray-400 hover:text-gray-900">LinkedIn</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- 5. The Glassmorphism (Creative) ---
export const TeamGlass = () => (
  <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-12 rounded-3xl overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
      {team.map((member, i) => (
        <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center text-white transition-transform hover:-translate-y-2">
          <div className="w-24 h-24 mx-auto rounded-full p-1 border-2 border-white/50 mb-4">
            <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full" />
          </div>
          <h3 className="text-lg font-bold">{member.name}</h3>
          <p className="text-xs text-white/70 uppercase tracking-widest mb-4">{member.role}</p>
          <button className="text-xs bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors">
            View Profile
          </button>
        </div>
      ))}
    </div>
  </div>
);

// --- 6. The Cyberpunk (Tech/Anon) ---
export const TeamCyber = () => (
  <div className="bg-black p-8 rounded-3xl border border-gray-800">
    <h2 className="text-green-500 font-mono text-xl mb-8 border-b border-gray-800 pb-4">> TEAM_MANIFEST</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {team.map((member, i) => (
        <div key={i} className="bg-gray-900 border border-gray-800 p-1 relative group hover:border-green-500 transition-colors">
          <div className="relative h-64 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
            <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50"></div>
          </div>
          <div className="p-4 font-mono">
            <h3 className="text-white text-lg font-bold truncate">{member.name.toUpperCase()}</h3>
            <p className="text-green-500 text-xs truncate">{member.role}</p>
          </div>
          {/* Glitch Corners */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-green-500 opacity-0 group-hover:opacity-100"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-green-500 opacity-0 group-hover:opacity-100"></div>
        </div>
      ))}
    </div>
  </div>
);

// --- 7. The Neumorphic (Soft UI) ---
export const TeamNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-12 rounded-3xl">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {team.map((member, i) => (
        <div key={i} className="bg-[#e0e5ec] p-6 rounded-[30px] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col items-center">
          <div className="w-32 h-32 rounded-full p-2 bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] mb-6">
            <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full" />
          </div>
          <h3 className="text-lg font-bold text-gray-700">{member.name}</h3>
          <p className="text-sm text-gray-500 mb-6">{member.role}</p>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-[#e0e5ec] text-gray-500 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center hover:text-blue-500 transition-colors">
              <SocialIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- 8. The Brutalist (Bold) ---
export const TeamBrutalist = () => (
  <div className="bg-yellow-400 p-8 rounded-3xl border-4 border-black">
    <h2 className="text-5xl font-black uppercase mb-12 border-b-4 border-black pb-6 inline-block">The Squad</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {team.map((member, i) => (
        <div key={i} className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-4 hover:-translate-y-2 transition-transform">
          <div className="h-48 border-4 border-black mb-4 overflow-hidden">
            <img src={member.img} alt={member.name} className="w-full h-full object-cover filter contrast-125" />
          </div>
          <h3 className="text-2xl font-black uppercase leading-none mb-1">{member.name}</h3>
          <div className="text-xs font-bold bg-black text-white inline-block px-2 py-1">{member.role.toUpperCase()}</div>
        </div>
      ))}
    </div>
  </div>
);

// --- 9. The Cards (Small List) ---
export const TeamCards = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {team.map((member, i) => (
        <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-lg hover:border-transparent transition-all">
          <img src={member.img} alt={member.name} className="w-20 h-20 rounded-lg object-cover" />
          <div>
            <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
            <p className="text-xs text-gray-400 mt-2">Former Lead at Google</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- 10. The Bento Grid (Modern) ---
export const TeamBento = () => (
  <div className="bg-slate-50 p-8 rounded-3xl">
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Feature Member (Big) */}
      <div className="md:col-span-2 md:row-span-2 relative h-[400px] rounded-3xl overflow-hidden group">
        <img src={team[0].img} alt={team[0].name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
          <h3 className="text-2xl font-bold text-white">{team[0].name}</h3>
          <p className="text-white/80">{team[0].role}</p>
        </div>
      </div>

      {/* Other Members (Small) */}
      {team.slice(1, 4).map((member, i) => (
        <div key={i} className="relative h-[192px] rounded-3xl overflow-hidden group">
          <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="font-bold">{member.name}</p>
              <p className="text-xs opacity-80">{member.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);


// --- Main Gallery Wrapper ---
const TeamGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-100 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Team Page Sections</h1>
        <p className="text-slate-500">Components to showcase the people behind the product.</p>
      </div>
      
      <div className="space-y-32 max-w-7xl mx-auto">
        
        <section className='box-shadow p-4 rounded-lg relative group/team'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/team:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-white p-12 rounded-3xl border border-gray-100">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the team</h2>
      <p className="text-gray-500 max-w-xl mx-auto">We are a diverse group of thinkers and doers dedicated to building the future.</p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {team.map((member, i) => (
        <div key={i} className="group">
          <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100 mb-4">
            <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
          <p className="text-sm text-blue-600 font-medium">{member.role}</p>
        </div>
      ))}
    </div>
  </div>`} htmlCode={`<div class="bg-white p-12 rounded-3xl border border-gray-100">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Meet the team</h2>
      <p class="text-gray-500 max-w-xl mx-auto">We are a diverse group of thinkers and doers dedicated to building the future.</p>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Mapping Start -->
(
        <div key=... class="group">
          <div class="aspect-square overflow-hidden rounded-2xl bg-gray-100 mb-4">
            <img src=... alt=... class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <h3 class="text-lg font-bold text-gray-900">...</h3>
          <p class="text-sm text-blue-600 font-medium">...</p>
        </div>
      ))}
    </div>
  </div>`} cssCode={`/* TeamStandard Styles (Generated from Tailwind) */\n.component-root {\n  background-color: #f3f4f6;\n  background-color: #ffffff;\n  border-color: #f3f4f6;\n  border-radius: 1.5rem;\n  border-radius: 1rem;\n  border-width: 1px; border-style: solid;\n  color: #111827;\n  color: #2563eb;\n  color: #6b7280;\n  font-weight: 700;\n  height: 100%;\n  padding: 3rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 01. Standard Grid </span>
          <TeamStandard />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/team'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/team:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-slate-50 p-12 rounded-3xl">
    <div className="flex flex-wrap justify-center gap-12 md:gap-20 max-w-5xl mx-auto">
      {team.map((member, i) => (
        <div key={i} className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-sm mb-4">
            <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
          <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
          <p className="text-xs text-slate-500 uppercase tracking-widest">{member.role}</p>
        </div>
      ))}
    </div>
  </div>`} htmlCode={`<div class="bg-slate-50 p-12 rounded-3xl">
    <div class="flex flex-wrap justify-center gap-12 md:gap-20 max-w-5xl mx-auto">
      <!-- Mapping Start -->
(
        <div key=... class="flex flex-col items-center text-center">
          <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-sm mb-4">
            <img src=... alt=... class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
          <h3 class="text-base font-bold text-slate-900">...</h3>
          <p class="text-xs text-slate-500 uppercase tracking-widest">...</p>
        </div>
      ))}
    </div>
  </div>`} cssCode={`/* TeamMinimal Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #f8fafc;\n  border-color: #ffffff;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #0f172a;\n  color: #64748b;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  height: 100%;\n  justify-content: center;\n  padding: 3rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 02. Minimal Avatars </span>
          <TeamMinimal />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/team'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/team:opacity-100 transition-opacity"><CopyButton jsxCode={`<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>`} htmlCode={`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>`} cssCode={`/* TeamHover Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #ffffff;\n  border-color: #f3f4f6;\n  border-radius: 1.5rem;\n  border-radius: 1rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  height: 100%;\n  justify-content: center;\n  padding: 0.5rem;\n  padding: 1rem;\n  padding: 2rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 03. Hover Reveal </span>
          <TeamHover />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/team'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/team:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-white p-8 rounded-3xl border border-gray-100">
    <div className="max-w-4xl mx-auto space-y-12">
      {team.slice(0, 2).map((member, i) => (
        <div key={i} className={\`flex flex-col md:flex-row gap-8 items-center \${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}\`}>
          <div className="w-full md:w-1/3">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
            <p className="text-indigo-600 font-medium mb-4">{member.role}</p>
            <p className="text-gray-500 leading-relaxed mb-6">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
               <a href="#" className="text-gray-400 hover:text-gray-900">Twitter</a>
               <a href="#" className="text-gray-400 hover:text-gray-900">LinkedIn</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>`} htmlCode={`<div class="bg-white p-8 rounded-3xl border border-gray-100">
    <div class="max-w-4xl mx-auto space-y-12">
      <!-- Mapping Start -->
(
        <div key=... class=flex flex-col md:flex-row gap-8 items-center \$...>
          <div class="w-full md:w-1/3">
            <div class="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <img src=... alt=... class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="w-full md:w-2/3 text-center md:text-left">
            <h3 class="text-3xl font-bold text-gray-900 mb-2">...</h3>
            <p class="text-indigo-600 font-medium mb-4">...</p>
            <p class="text-gray-500 leading-relaxed mb-6">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            </p>
            <div class="flex gap-4 justify-center md:justify-start">
               <a href="#" class="text-gray-400 hover:text-gray-900">Twitter</a>
               <a href="#" class="text-gray-400 hover:text-gray-900">LinkedIn</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>`} cssCode={`/* TeamLeadership Styles (Generated from Tailwind) */\n.component-root {\n  background-color: #ffffff;\n  border-color: #f3f4f6;\n  border-radius: 1.5rem;\n  border-radius: 1rem;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #111827;\n  color: #4f46e5;\n  color: #6b7280;\n  color: #9ca3af;\n  display: flex;\n  font-weight: 700;\n  height: 100%;\n  justify-content: center;\n  padding: 2rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 04. Leadership Spotlight </span>
          <TeamLeadership />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/team'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/team:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-12 rounded-3xl overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
      {team.map((member, i) => (
        <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center text-white transition-transform hover:-translate-y-2">
          <div className="w-24 h-24 mx-auto rounded-full p-1 border-2 border-white/50 mb-4">
            <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full" />
          </div>
          <h3 className="text-lg font-bold">{member.name}</h3>
          <p className="text-xs text-white/70 uppercase tracking-widest mb-4">{member.role}</p>
          <button className="text-xs bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors">
            View Profile
          </button>
        </div>
      ))}
    </div>
  </div>`} htmlCode={`<div class="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-12 rounded-3xl overflow-hidden">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
      <!-- Mapping Start -->
(
        <div key=... class="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center text-white transition-transform hover:-translate-y-2">
          <div class="w-24 h-24 mx-auto rounded-full p-1 border-2 border-white/50 mb-4">
            <img src=... alt=... class="w-full h-full object-cover rounded-full" />
          </div>
          <h3 class="text-lg font-bold">...</h3>
          <p class="text-xs text-white/70 uppercase tracking-widest mb-4">...</p>
          <button class="text-xs bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors">
            View Profile
          </button>
        </div>
      ))}
    </div>
  </div>`} cssCode={`/* TeamGlass Styles (Generated from Tailwind) */\n.component-root {\n  backdrop-filter: blur(12px);\n  border-radius: 1.5rem;\n  border-radius: 1rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  color: #ffffff;\n  font-weight: 700;\n  height: 100%;\n  padding-left: 1rem; padding-right: 1rem;\n  padding-top: 0.5rem; padding-bottom: 0.5rem;\n  padding: 0.25rem;\n  padding: 1.5rem;\n  padding: 3rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 05. Glassmorphism </span>
          <TeamGlass />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/team'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/team:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-black p-8 rounded-3xl border border-gray-800">
    <h2 className="text-green-500 font-mono text-xl mb-8 border-b border-gray-800 pb-4">> TEAM_MANIFEST</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {team.map((member, i) => (
        <div key={i} className="bg-gray-900 border border-gray-800 p-1 relative group hover:border-green-500 transition-colors">
          <div className="relative h-64 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
            <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50"></div>
          </div>
          <div className="p-4 font-mono">
            <h3 className="text-white text-lg font-bold truncate">{member.name.toUpperCase()}</h3>
            <p className="text-green-500 text-xs truncate">{member.role}</p>
          </div>
          {/* Glitch Corners */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-green-500 opacity-0 group-hover:opacity-100"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-green-500 opacity-0 group-hover:opacity-100"></div>
        </div>
      ))}
    </div>
  </div>`} htmlCode={`<div class="bg-black p-8 rounded-3xl border border-gray-800">
    <h2 class="text-green-500 font-mono text-xl mb-8 border-b border-gray-800 pb-4">> TEAM_MANIFEST</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <!-- Mapping Start -->
(
        <div key=... class="bg-gray-900 border border-gray-800 p-1 relative group hover:border-green-500 transition-colors">
          <div class="relative h-64 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
            <img src=... alt=... class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50"></div>
          </div>
          <div class="p-4 font-mono">
            <h3 class="text-white text-lg font-bold truncate">...</h3>
            <p class="text-green-500 text-xs truncate">...</p>
          </div>
          ...
          <div class="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-green-500 opacity-0 group-hover:opacity-100"></div>
          <div class="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-green-500 opacity-0 group-hover:opacity-100"></div>
        </div>
      ))}
    </div>
  </div>`} cssCode={`/* TeamCyber Styles (Generated from Tailwind) */\n.component-root {\n  background-color: #000000;\n  background-color: #111827;\n  border-color: #1f2937;\n  border-color: #22c55e;\n  border-radius: 1.5rem;\n  border-width: 1px; border-style: solid;\n  color: #22c55e;\n  color: #ffffff;\n  font-weight: 700;\n  height: 100%;\n  padding: 0.25rem;\n  padding: 1rem;\n  padding: 2rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 06. Cyberpunk </span>
          <TeamCyber />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/team'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/team:opacity-100 transition-opacity"><CopyButton jsxCode={`<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>`} htmlCode={`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>`} cssCode={`/* TeamNeumorphic Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #374151;\n  color: #6b7280;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  height: 100%;\n  justify-content: center;\n  padding: 0.5rem;\n  padding: 1.5rem;\n  padding: 3rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 07. Neumorphic </span>
          <TeamNeumorphic />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/team'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/team:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-yellow-400 p-8 rounded-3xl border-4 border-black">
    <h2 className="text-5xl font-black uppercase mb-12 border-b-4 border-black pb-6 inline-block">The Squad</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {team.map((member, i) => (
        <div key={i} className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-4 hover:-translate-y-2 transition-transform">
          <div className="h-48 border-4 border-black mb-4 overflow-hidden">
            <img src={member.img} alt={member.name} className="w-full h-full object-cover filter contrast-125" />
          </div>
          <h3 className="text-2xl font-black uppercase leading-none mb-1">{member.name}</h3>
          <div className="text-xs font-bold bg-black text-white inline-block px-2 py-1">{member.role.toUpperCase()}</div>
        </div>
      ))}
    </div>
  </div>`} htmlCode={`<div class="bg-yellow-400 p-8 rounded-3xl border-4 border-black">
    <h2 class="text-5xl font-black uppercase mb-12 border-b-4 border-black pb-6 inline-block">The Squad</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Mapping Start -->
(
        <div key=... class="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-4 hover:-translate-y-2 transition-transform">
          <div class="h-48 border-4 border-black mb-4 overflow-hidden">
            <img src=... alt=... class="w-full h-full object-cover filter contrast-125" />
          </div>
          <h3 class="text-2xl font-black uppercase leading-none mb-1">...</h3>
          <div class="text-xs font-bold bg-black text-white inline-block px-2 py-1">...</div>
        </div>
      ))}
    </div>
  </div>`} cssCode={`/* TeamBrutalist Styles (Generated from Tailwind) */\n.component-root {\n  background-color: #000000;\n  background-color: #facc15;\n  background-color: #ffffff;\n  border-color: #000000;\n  border-radius: 1.5rem;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #ffffff;\n  font-weight: 700;\n  height: 100%;\n  padding-left: 0.5rem; padding-right: 0.5rem;\n  padding-top: 0.25rem; padding-bottom: 0.25rem;\n  padding: 1rem;\n  padding: 2rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 08. Brutalist </span>
          <TeamBrutalist />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/team'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/team:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-white p-8 rounded-3xl border border-gray-100">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {team.map((member, i) => (
        <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-lg hover:border-transparent transition-all">
          <img src={member.img} alt={member.name} className="w-20 h-20 rounded-lg object-cover" />
          <div>
            <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
            <p className="text-xs text-gray-400 mt-2">Former Lead at Google</p>
          </div>
        </div>
      ))}
    </div>
  </div>`} htmlCode={`<div class="bg-white p-8 rounded-3xl border border-gray-100">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Mapping Start -->
(
        <div key=... class="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-lg hover:border-transparent transition-all">
          <img src=... alt=... class="w-20 h-20 rounded-lg object-cover" />
          <div>
            <h3 class="text-lg font-bold text-gray-900">...</h3>
            <p class="text-sm text-gray-500">...</p>
            <p class="text-xs text-gray-400 mt-2">Former Lead at Google</p>
          </div>
        </div>
      ))}
    </div>
  </div>`} cssCode={`/* TeamCards Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #ffffff;\n  border-color: #f3f4f6;\n  border-radius: 0.5rem;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #111827;\n  color: #6b7280;\n  color: #9ca3af;\n  display: flex;\n  font-weight: 700;\n  padding: 1rem;\n  padding: 2rem;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 09. Team Cards </span>
          <TeamCards />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/team'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/team:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-slate-50 p-8 rounded-3xl">
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Feature Member (Big) */}
      <div className="md:col-span-2 md:row-span-2 relative h-[400px] rounded-3xl overflow-hidden group">
        <img src={team[0].img} alt={team[0].name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
          <h3 className="text-2xl font-bold text-white">{team[0].name}</h3>
          <p className="text-white/80">{team[0].role}</p>
        </div>
      </div>

      {/* Other Members (Small) */}
      {team.slice(1, 4).map((member, i) => (
        <div key={i} className="relative h-[192px] rounded-3xl overflow-hidden group">
          <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="font-bold">{member.name}</p>
              <p className="text-xs opacity-80">{member.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>`} htmlCode={`<div class="bg-slate-50 p-8 rounded-3xl">
    <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      ...
      <div class="md:col-span-2 md:row-span-2 relative h-[400px] rounded-3xl overflow-hidden group">
        <img src=... alt=... class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
          <h3 class="text-2xl font-bold text-white">...</h3>
          <p class="text-white/80">...</p>
        </div>
      </div>

      ...
      <!-- Mapping Start -->
(
        <div key=... class="relative h-[192px] rounded-3xl overflow-hidden group">
          <img src=... alt=... class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div class="text-center text-white">
              <p class="font-bold">...</p>
              <p class="text-xs opacity-80">...</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>`} cssCode={`/* TeamBento Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #f8fafc;\n  border-radius: 1.5rem;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  height: 100%;\n  justify-content: center;\n  padding: 2rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 10. Bento Grid </span>
          <TeamBento />
        </section>

      </div>
    </div>
  );
};

export default TeamGallery;