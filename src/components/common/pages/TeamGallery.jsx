import React from 'react';
import CopyButton from '../CopyButton';

// --- Shared Assets ---
const TEAM_MEMBERS = [
  { id: '01', name: "Sarah Cole", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
  { id: '02', name: "David Park", role: "Head of Design", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
  { id: '03', name: "Emily Chen", role: "Lead Engineer", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop" },
  { id: '04', name: "Michael Ross", role: "Product Manager", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
];

// --- Original High-Fidelity Variants ---

export const TeamStandard = () => (
  <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl max-w-6xl mx-auto font-sans">
    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {TEAM_MEMBERS.map((member) => (
        <div key={member.id} className="group text-center">
          <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square">
            <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
          <p className="text-indigo-600 font-medium text-sm">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
);

export const TeamSimple = () => (
  <div className="max-w-4xl mx-auto p-8 font-sans">
    <div className="space-y-8">
      {TEAM_MEMBERS.map((member) => (
        <div key={member.id} className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow text-left">
          <img src={member.img} alt={member.name} className="w-20 h-20 rounded-full object-cover" />
          <div>
            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const TeamSplit = () => (
  <div className="flex flex-col lg:flex-row bg-slate-900 rounded-[2.5rem] overflow-hidden max-w-6xl mx-auto font-sans text-left">
    <div className="lg:w-1/3 p-12 bg-indigo-600 text-white flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-6 text-white">The minds <br /> behind <br /> the magic.</h2>
      <p className="text-indigo-100 opacity-80">A diverse group of individuals united by a single vision: to create something extraordinary.</p>
    </div>
    <div className="lg:w-2/3 p-12 grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-950">
      {TEAM_MEMBERS.map((member) => (
        <div key={member.id} className="flex gap-4 items-center text-left">
          <img src={member.img} alt={member.name} className="w-16 h-16 rounded-xl object-cover grayscale" />
          <div>
            <h3 className="text-white font-bold">{member.name}</h3>
            <p className="text-indigo-400 text-sm">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const TeamDark = () => (
  <div className="bg-black p-12 rounded-3xl max-w-6xl mx-auto font-sans text-center">
    <h2 className="text-4xl font-black text-white mb-16 uppercase tracking-widest italic">Core_Architects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
      {TEAM_MEMBERS.map((member) => (
        <div key={member.id} className="relative group aspect-[3/4] overflow-hidden">
          <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent flex flex-col justify-end p-6 text-left transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <h3 className="text-white font-bold text-xl uppercase italic">{member.name}</h3>
            <p className="text-emerald-500 text-xs font-black uppercase tracking-widest">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const TeamMinimal = () => (
  <div className="max-w-5xl mx-auto p-12 font-sans text-left">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
      {TEAM_MEMBERS.map((member) => (
        <div key={member.id}>
          <img src={member.img} alt={member.name} className="w-full aspect-[4/5] object-cover rounded-sm mb-6 grayscale hover:grayscale-0 transition-all duration-500" />
          <h3 className="text-lg font-bold text-gray-900 uppercase tracking-tighter">{member.name}</h3>
          <p className="text-gray-400 text-sm italic">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
);

export const TeamAccent = () => (
  <div className="bg-indigo-50 p-12 md:p-20 rounded-[3rem] font-sans">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {TEAM_MEMBERS.map((member) => (
        <div key={member.id} className="bg-white p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform text-center border-b-4 border-indigo-600">
          <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-6 object-cover ring-4 ring-indigo-50" />
          <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
          <p className="text-indigo-600 text-sm font-bold uppercase tracking-widest mt-2">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
);

export const TeamGradient = () => (
  <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-12 md:p-24 rounded-[3rem] font-sans text-white text-center">
    <h2 className="text-5xl font-bold mb-16">Global Talent Pool</h2>
    <div className="flex flex-wrap justify-center gap-12">
      {TEAM_MEMBERS.map((member) => (
        <div key={member.id} className="relative group">
          <div className="w-40 h-40 rounded-full p-1 bg-gradient-to-r from-pink-500 to-yellow-500 animate-pulse group-hover:animate-none">
            <img src={member.img} alt={member.name} className="w-full h-full rounded-full object-cover border-4 border-slate-900" />
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-pink-400 text-sm">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const TeamBrutalist = () => (
  <div className="bg-yellow-400 p-12 rounded-3xl border-8 border-black font-sans">
    <h2 className="text-7xl font-black uppercase mb-20 border-b-8 border-black pb-8 inline-block italic tracking-tighter text-left">THE_SQUAD</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {TEAM_MEMBERS.map((member) => (
        <div key={member.id} className="bg-white border-8 border-black shadow-[16px_16px_0_0_#000] p-6 hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all text-left">
          <div className="aspect-square border-8 border-black mb-6 overflow-hidden bg-gray-100">
            <img src={member.img} alt={member.name} className="w-full h-full object-cover filter contrast-150 grayscale" />
          </div>
          <h3 className="text-3xl font-black uppercase leading-none mb-2 italic">{member.name}</h3>
          <div className="text-xs font-black bg-black text-white inline-block px-4 py-2 uppercase tracking-[0.2em]">{member.role}</div>
        </div>
      ))}
    </div>
  </div>
);

export const TeamCards = () => (
  <div className="bg-white p-8 md:p-16 rounded-3xl border border-gray-100 font-sans">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {TEAM_MEMBERS.map((member) => (
        <div key={member.id} className="flex items-center gap-6 p-6 rounded-3xl border border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-transparent transition-all text-left group">
          <div className="relative">
             <img src={member.img} alt={member.name} className="w-24 h-24 rounded-2xl object-cover group-hover:rotate-3 transition-transform" />
             <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-600 rounded-full border-4 border-white flex items-center justify-center text-white text-[10px] font-bold">★</div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
            <p className="text-sm text-indigo-600 font-medium mb-3">{member.role}</p>
            <div className="flex gap-2">
               <div className="w-6 h-6 rounded bg-gray-100"></div>
               <div className="w-6 h-6 rounded bg-gray-100"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const TeamBento = () => (
  <div className="bg-slate-50 p-12 md:p-20 rounded-[3rem] font-sans text-gray-900">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Feature Member (Big) */}
      <div className="md:col-span-2 md:row-span-2 relative h-[500px] rounded-[2.5rem] overflow-hidden group shadow-2xl">
        <img src={TEAM_MEMBERS[0].img} alt={TEAM_MEMBERS[0].name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent flex flex-col justify-end p-12 text-left">
          <h3 className="text-4xl font-bold text-white mb-2">{TEAM_MEMBERS[0].name}</h3>
          <p className="text-white/80 text-xl">{TEAM_MEMBERS[0].role}</p>
          <button className="mt-8 px-8 py-3 bg-white text-black font-bold rounded-full w-fit hover:bg-indigo-600 hover:text-white transition-colors">Biography →</button>
        </div>
      </div>

      {/* Other Members (Small) */}
      {TEAM_MEMBERS.slice(1, 4).map((member) => (
        <div key={member.id} className="relative h-[240px] rounded-[2.5rem] overflow-hidden group shadow-xl bg-white border border-gray-100">
          <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
            <p className="text-white font-bold text-lg">{member.name}</p>
            <p className="text-indigo-400 text-sm font-bold uppercase tracking-widest mt-2">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- Main Gallery Wrapper ---

const TeamGallery = () => {
  const sections = [
    { 
      id: 'standard', 
      title: '01. Standard Grid Layout', 
      component: <TeamStandard />, 
      jsx: `export const TeamStandard = () => (
  <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-xl max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {TEAM_MEMBERS.map((member) => (
        <div key={member.id} className="group text-center">
          <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square">
            <img src={member.img} class="w-full h-full object-cover group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
          <p className="text-indigo-600 font-medium text-sm">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
);`,
      html: `<div class="team-standard">
  <h2 class="title">Meet Our Team</h2>
  <div class="grid">
    <div class="card">
      <div class="image-wrapper"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" /></div>
      <h3>Sarah Cole</h3>
      <p>CEO & Founder</p>
    </div>
    <div class="card">
      <div class="image-wrapper"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" /></div>
      <h3>David Park</h3>
      <p>Head of Design</p>
    </div>
    <div class="card">
      <div class="image-wrapper"><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" /></div>
      <h3>Emily Chen</h3>
      <p>Lead Engineer</p>
    </div>
    <div class="card">
      <div class="image-wrapper"><img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" /></div>
      <h3>Michael Ross</h3>
      <p>Product Manager</p>
    </div>
  </div>
</div>`,
      css: `.team-standard {
  background: #ffffff;
  padding: 48px;
  border-radius: 24px;
  border: 1px solid #f3f4f6;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  max-width: 1152px;
  margin: 0 auto;
  font-family: sans-serif;
  text-align: center;
}
.title { font-size: 30px; font-weight: 700; color: #111827; margin-bottom: 48px; }
.grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 32px; }
@media (min-width: 768px) { .grid { grid-template-columns: repeat(4, 1fr); } }
.card { transition: all 0.3s; }
.image-wrapper { position: relative; margin-bottom: 24px; border-radius: 16px; overflow: hidden; aspect-ratio: 1; }
.image-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.card:hover img { transform: scale(1.1); }
.card h3 { font-size: 20px; font-weight: 700; color: #111827; }
.card p { color: #4f46e5; font-weight: 500; font-size: 14px; }`
    },
    { 
      id: 'simple', 
      title: '02. Simple List View', 
      component: <TeamSimple />, 
      jsx: `export const TeamSimple = () => (
  <div className="max-w-4xl mx-auto p-8">
    <div className="space-y-8">
      {TEAM_MEMBERS.map((member) => (
        <div key={member.id} className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-gray-100">
          <img src={member.img} class="w-20 h-20 rounded-full object-cover" />
          <div>
            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);`,
      html: `<div class="team-list">
  <div class="list-item">
    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" />
    <div class="info">
      <h3>Sarah Cole</h3>
      <p>CEO & Founder</p>
    </div>
  </div>
  <div class="list-item">
    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" />
    <div class="info">
      <h3>David Park</h3>
      <p>Head of Design</p>
    </div>
  </div>
  <div class="list-item">
    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" />
    <div class="info">
      <h3>Emily Chen</h3>
      <p>Lead Engineer</p>
    </div>
  </div>
  <div class="list-item">
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" />
    <div class="info">
      <h3>Michael Ross</h3>
      <p>Product Manager</p>
    </div>
  </div>
</div>`,
      css: `.team-list { max-width: 896px; margin: 0 auto; display: flex; flex-direction: column; gap: 32px; font-family: sans-serif; }
.list-item {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #f3f4f6;
  text-align: left;
}
.list-item img { width: 80px; height: 80px; border-radius: 50%; object-fit: cover; }
.info h3 { font-size: 20px; font-weight: 700; color: #111827; }
.info p { color: #6b7280; }`
    },
    { 
      id: 'split', 
      title: '03. Split Profile Panel', 
      component: <TeamSplit />, 
      jsx: `export const TeamSplit = () => (
  <div className="flex bg-slate-900 rounded-3xl overflow-hidden max-w-6xl mx-auto text-left">
    <div className="w-1/3 p-12 bg-indigo-600 text-white">
      <h2 className="text-4xl font-bold">The minds behind the magic.</h2>
    </div>
    <div className="w-2/3 p-12 grid grid-cols-2 gap-8 bg-slate-950">
      {TEAM_MEMBERS.map((member) => (
        <div class="flex gap-4">
          <img src={member.img} class="w-16 h-16 rounded-xl" />
          <div>
            <h3 class="text-white">{member.name}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
);`,
      html: `<div class="split-team">
  <div class="sidebar">
    <h2>The minds <br> behind <br> the magic.</h2>
    <p>A diverse group of individuals united by a single vision.</p>
  </div>
  <div class="grid-side">
    <div class="member-mini">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" />
      <div>
        <h3>Sarah Cole</h3>
        <p>CEO & Founder</p>
      </div>
    </div>
    <div class="member-mini">
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" />
      <div>
        <h3>David Park</h3>
        <p>Head of Design</p>
      </div>
    </div>
    <div class="member-mini">
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" />
      <div>
        <h3>Emily Chen</h3>
        <p>Lead Engineer</p>
      </div>
    </div>
    <div class="member-mini">
      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" />
      <div>
        <h3>Michael Ross</h3>
        <p>Product Manager</p>
      </div>
    </div>
  </div>
</div>`,
      css: `.split-team {
  display: flex;
  flex-direction: column;
  background: #0f172a;
  border-radius: 40px;
  overflow: hidden;
  max-width: 1152px;
  margin: 0 auto;
  font-family: sans-serif;
  text-align: left;
}
@media (min-width: 1024px) { .split-team { flex-direction: row; } }
.sidebar {
  background: #4f46e5;
  padding: 48px;
  color: #ffffff;
  width: 100%;
}
@media (min-width: 1024px) { .sidebar { width: 33.33%; } }
.sidebar h2 { font-size: 36px; font-weight: 700; line-height: 1.2; margin-bottom: 24px; }
.grid-side {
  background: #020617;
  padding: 48px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}
@media (min-width: 768px) { .grid-side { grid-template-columns: 1fr 1fr; } }
@media (min-width: 1024px) { .grid-side { width: 66.66%; } }
.member-mini { display: flex; align-items: center; gap: 16px; }
.member-mini img { width: 64px; height: 64px; border-radius: 12px; object-fit: cover; filter: grayscale(100%); }
.member-mini h3 { font-weight: 700; color: #ffffff; }
.member-mini p { color: #818cf8; font-size: 14px; }`
    },
    { 
      id: 'dark', 
      title: '04. Dark Matrix Mode', 
      component: <TeamDark />, 
      jsx: `export const TeamDark = () => (
  <div className="bg-black p-12 rounded-3xl max-w-6xl mx-auto text-center text-white">
    <h2 className="text-4xl font-black uppercase tracking-widest italic">Core_Architects</h2>
    <div className="grid grid-cols-4 gap-1">
      {TEAM_MEMBERS.map((member) => (
        <div class="relative group">
          <img src={member.img} class="grayscale group-hover:grayscale-0" />
        </div>
      ))}
    </div>
  </div>
);`,
      html: `<div class="dark-matrix">
  <h2>Core_Architects</h2>
  <div class="matrix-grid">
    <div class="matrix-card">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" />
      <div class="info">
        <h3>Sarah Cole</h3>
        <p>CEO & Founder</p>
      </div>
    </div>
    <div class="matrix-card">
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" />
      <div class="info">
        <h3>David Park</h3>
        <p>Head of Design</p>
      </div>
    </div>
    <div class="matrix-card">
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" />
      <div class="info">
        <h3>Emily Chen</h3>
        <p>Lead Engineer</p>
      </div>
    </div>
    <div class="matrix-card">
      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" />
      <div class="info">
        <h3>Michael Ross</h3>
        <p>Product Manager</p>
      </div>
    </div>
  </div>
</div>`,
      css: `.dark-matrix {
  background: #000000;
  padding: 48px;
  border-radius: 24px;
  max-width: 1152px;
  margin: 0 auto;
  text-align: center;
  font-family: sans-serif;
}
.dark-matrix h2 { font-size: 36px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; font-style: italic; color: #ffffff; margin-bottom: 64px; }
.matrix-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 4px; }
@media (min-width: 768px) { .matrix-grid { grid-template-columns: repeat(4, 1fr); } }
.matrix-card { position: relative; aspect-ratio: 3/4; overflow: hidden; }
.matrix-card img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); transition: all 0.7s; }
.matrix-card:hover img { filter: grayscale(0%); transform: scale(1.1); }
.info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px;
  background: linear-gradient(to top, #000000, transparent);
  text-align: left;
  transform: translateY(16px);
  transition: transform 0.3s;
}
.matrix-card:hover .info { transform: translateY(0); }
.info h3 { color: #ffffff; font-weight: 700; font-size: 20px; text-transform: uppercase; font-style: italic; }
.info p { color: #10b981; font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; }`
    },
    { 
      id: 'minimal', 
      title: '05. Minimalist Profile Nodes', 
      component: <TeamMinimal />, 
      jsx: `export const TeamMinimal = () => (
  <div className="max-w-5xl mx-auto p-12">
    <div className="grid grid-cols-4 gap-12 text-left">
      {TEAM_MEMBERS.map((member) => (
        <div>
          <img src={member.img} class="w-full grayscale" />
          <h3 class="font-bold text-gray-900">{member.name}</h3>
        </div>
      ))}
    </div>
  </div>
);`,
      html: `<div class="minimal-nodes">
  <div class="nodes-grid">
    <div class="node">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" />
      <h3>Sarah Cole</h3>
      <p>CEO & Founder</p>
    </div>
    <div class="node">
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" />
      <h3>David Park</h3>
      <p>Head of Design</p>
    </div>
    <div class="node">
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" />
      <h3>Emily Chen</h3>
      <p>Lead Engineer</p>
    </div>
    <div class="node">
      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" />
      <h3>Michael Ross</h3>
      <p>Product Manager</p>
    </div>
  </div>
</div>`,
      css: `.minimal-nodes { max-width: 1024px; margin: 0 auto; padding: 48px; text-align: left; font-family: sans-serif; }
.nodes-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 48px; }
@media (min-width: 768px) { .nodes-grid { grid-template-columns: repeat(4, 1fr); } }
.node img { width: 100%; aspect-ratio: 4/5; object-fit: cover; border-radius: 2px; filter: grayscale(100%); transition: all 0.5s; margin-bottom: 24px; }
.node:hover img { filter: grayscale(0%); }
.node h3 { font-size: 18px; font-weight: 700; color: #111827; text-transform: uppercase; letter-spacing: -0.05em; }
.node p { font-size: 14px; color: #9ca3af; font-style: italic; }`
    },
    { 
      id: 'accent', 
      title: '06. Accent Brand Cards', 
      component: <TeamAccent />, 
      jsx: `export const TeamAccent = () => (
  <div className="bg-indigo-50 p-20 rounded-[3rem] text-center">
    <div className="grid grid-cols-4 gap-10">
      {TEAM_MEMBERS.map((member) => (
        <div class="bg-white p-6 rounded-2xl border-b-4 border-indigo-600">
          <img src={member.img} class="w-24 h-24 rounded-full" />
        </div>
      ))}
    </div>
  </div>
);`,
      html: `<div class="accent-team">
  <div class="accent-grid">
    <div class="accent-card">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" />
      <h3>Sarah Cole</h3>
      <p>CEO & Founder</p>
    </div>
    <div class="accent-card">
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" />
      <h3>David Park</h3>
      <p>Head of Design</p>
    </div>
    <div class="accent-card">
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" />
      <h3>Emily Chen</h3>
      <p>Lead Engineer</p>
    </div>
    <div class="accent-card">
      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" />
      <h3>Michael Ross</h3>
      <p>Product Manager</p>
    </div>
  </div>
</div>`,
      css: `.accent-team { background: #eef2ff; padding: 80px; border-radius: 48px; font-family: sans-serif; }
.accent-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 40px; max-width: 1152px; margin: 0 auto; }
@media (min-width: 768px) { .accent-grid { grid-template-columns: repeat(4, 1fr); } }
.accent-card {
  background: #ffffff;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  border-bottom: 4px solid #4f46e5;
  text-align: center;
  transition: transform 0.2s;
}
.accent-card:hover { transform: translateY(-8px); }
.accent-card img { width: 96px; height: 96px; border-radius: 50%; margin: 0 auto 24px; object-fit: cover; ring: 4px solid #eef2ff; }
.accent-card h3 { font-size: 20px; font-weight: 700; color: #111827; }
.accent-card p { color: #4f46e5; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 8px; }`
    },
    { 
      id: 'gradient', 
      title: '07. Global Gradient Talent', 
      component: <TeamGradient />, 
      jsx: `export const TeamGradient = () => (
  <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-24 rounded-[3rem] text-white text-center">
    <h2 className="text-5xl font-bold mb-16">Global Talent Pool</h2>
    <div className="flex gap-12 justify-center">
      {TEAM_MEMBERS.map((member) => (
        <div class="relative">
          <img src={member.img} class="w-40 h-40 rounded-full border-4 border-slate-900" />
        </div>
      ))}
    </div>
  </div>
);`,
      html: `<div class="gradient-team">
  <h2>Global Talent Pool</h2>
  <div class="talent-row">
    <div class="talent-item">
      <div class="image-border">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" />
      </div>
      <h3>Sarah Cole</h3>
      <p>CEO & Founder</p>
    </div>
    <div class="talent-item">
      <div class="image-border">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" />
      </div>
      <h3>David Park</h3>
      <p>Head of Design</p>
    </div>
    <div class="talent-item">
      <div class="image-border">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" />
      </div>
      <h3>Emily Chen</h3>
      <p>Lead Engineer</p>
    </div>
    <div class="talent-item">
      <div class="image-border">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" />
      </div>
      <h3>Michael Ross</h3>
      <p>Product Manager</p>
    </div>
  </div>
</div>`,
      css: `.gradient-team {
  background: linear-gradient(to bottom right, #312e81, #581c87);
  padding: 80px;
  border-radius: 48px;
  color: #ffffff;
  text-align: center;
  font-family: sans-serif;
}
.gradient-team h2 { font-size: 48px; font-weight: 700; margin-bottom: 64px; }
.talent-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 48px; }
.talent-item { position: relative; }
.image-border {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(to right, #ec4899, #eab308);
}
.talent-item img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; border: 4px solid #0f172a; }
.talent-item h3 { font-size: 20px; font-weight: 700; margin-top: 24px; }
.talent-item p { color: #f472b6; font-size: 14px; }`
    },
    { 
      id: 'brutalist', 
      title: '08. Bold Brutalist Squad', 
      component: <TeamBrutalist />, 
      jsx: `export const TeamBrutalist = () => (
  <div className="bg-yellow-400 p-12 rounded-3xl border-8 border-black text-left">
    <h2 className="text-7xl font-black uppercase mb-20 italic">THE_SQUAD</h2>
    <div className="grid grid-cols-4 gap-12">
      {TEAM_MEMBERS.map((member) => (
        <div class="bg-white border-8 border-black shadow-[16px_16px_0_0_#000]">
          <img src={member.img} class="filter contrast-150 grayscale" />
        </div>
      ))}
    </div>
  </div>
);`,
      html: `<div class="brutalist-team">
  <h2>THE_SQUAD</h2>
  <div class="brutalist-grid">
    <div class="brutalist-card">
      <div class="image-box">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" />
      </div>
      <h3>Sarah Cole</h3>
      <div class="role-tag">CEO & Founder</div>
    </div>
    <div class="brutalist-card">
      <div class="image-box">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" />
      </div>
      <h3>David Park</h3>
      <div class="role-tag">Head of Design</div>
    </div>
    <div class="brutalist-card">
      <div class="image-box">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" />
      </div>
      <h3>Emily Chen</h3>
      <div class="role-tag">Lead Engineer</div>
    </div>
    <div class="brutalist-card">
      <div class="image-box">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" />
      </div>
      <h3>Michael Ross</h3>
      <div class="role-tag">Product Manager</div>
    </div>
  </div>
</div>`,
      css: `.brutalist-team {
  background: #facc15;
  padding: 48px;
  border-radius: 24px;
  border: 8px solid #000000;
  font-family: sans-serif;
  text-align: left;
}
.brutalist-team h2 { font-size: 72px; font-weight: 900; text-transform: uppercase; font-style: italic; margin-bottom: 80px; letter-spacing: -0.05em; }
.brutalist-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 48px; }
@media (min-width: 768px) { .brutalist-grid { grid-template-columns: repeat(4, 1fr); } }
.brutalist-card {
  background: #ffffff;
  border: 8px solid #000000;
  box-shadow: 16px 16px 0 0 #000000;
  padding: 24px;
  transition: all 0.2s;
}
.brutalist-card:hover { transform: translate(8px, 8px); box-shadow: none; }
.image-box { aspect-ratio: 1; border: 8px solid #000000; margin-bottom: 24px; overflow: hidden; background: #f3f4f6; }
.image-box img { width: 100%; height: 100%; object-fit: cover; filter: contrast(150%) grayscale(100%); }
.brutalist-card h3 { font-size: 28px; font-weight: 900; text-transform: uppercase; font-style: italic; margin-bottom: 8px; line-height: 1; }
.role-tag { background: #000000; color: #ffffff; display: inline-block; padding: 8px 16px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; font-size: 10px; }`
    },
    { 
      id: 'cards', 
      title: '09. Interactive Team Cards', 
      component: <TeamCards />, 
      jsx: `export const TeamCards = () => (
  <div className="bg-white p-16 rounded-3xl border border-gray-100 text-left">
    <div className="grid grid-cols-2 gap-8">
      {TEAM_MEMBERS.map((member) => (
        <div class="flex items-center gap-6 p-6 rounded-3xl border border-gray-100">
          <img src={member.img} class="w-24 h-24 rounded-2xl" />
        </div>
      ))}
    </div>
  </div>
);`,
      html: `<div class="interactive-cards">
  <div class="cards-grid">
    <div class="member-card">
      <div class="image-wrapper">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" />
        <div class="badge">★</div>
      </div>
      <div class="card-info">
        <h3>Sarah Cole</h3>
        <p>CEO & Founder</p>
        <div class="social-placeholders">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    </div>
    <div class="member-card">
      <div class="image-wrapper">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" />
        <div class="badge">★</div>
      </div>
      <div class="card-info">
        <h3>David Park</h3>
        <p>Head of Design</p>
        <div class="social-placeholders">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    </div>
    <div class="member-card">
      <div class="image-wrapper">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" />
        <div class="badge">★</div>
      </div>
      <div class="card-info">
        <h3>Emily Chen</h3>
        <p>Lead Engineer</p>
        <div class="social-placeholders">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    </div>
    <div class="member-card">
      <div class="image-wrapper">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" />
        <div class="badge">★</div>
      </div>
      <div class="card-info">
        <h3>Michael Ross</h3>
        <p>Product Manager</p>
        <div class="social-placeholders">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    </div>
  </div>
</div>`,
      css: `.interactive-cards { background: #ffffff; padding: 64px; border-radius: 24px; border: 1px solid #f3f4f6; font-family: sans-serif; }
.cards-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 32px; max-width: 1024px; margin: 0 auto; }
@media (min-width: 768px) { .cards-grid { grid-template-columns: repeat(2, 1fr); } }
.member-card {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px;
  background: #ffffff;
  border: 1px solid #f1f5f9;
  border-radius: 24px;
  transition: all 0.3s;
  text-align: left;
}
.member-card:hover { box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.1); border-color: transparent; }
.image-wrapper { position: relative; flex-shrink: 0; }
.image-wrapper img { width: 96px; height: 96px; border-radius: 16px; object-fit: cover; transition: transform 0.3s; }
.member-card:hover img { transform: rotate(3deg); }
.badge { position: absolute; top: -8px; right: -8px; width: 32px; height: 32px; background: #4f46e5; border-radius: 50%; border: 4px solid #ffffff; display: flex; align-items: center; justify-content: center; color: #ffffff; font-size: 10px; font-weight: 700; }
.card-info h3 { font-size: 20px; font-weight: 700; color: #111827; }
.card-info p { color: #4f46e5; font-weight: 500; font-size: 14px; margin-bottom: 12px; }
.social-placeholders { display: flex; gap: 8px; }
.dot { width: 24px; height: 24px; background: #f1f5f9; border-radius: 4px; }`
    },
    { 
      id: 'bento', 
      title: '10. Bento Modern Matrix', 
      component: <TeamBento />, 
      jsx: `export const TeamBento = () => (
  <div className="bg-slate-50 p-20 rounded-[3rem] text-left">
    <div className="grid grid-cols-3 gap-6">
      <div class="md:col-span-2 md:row-span-2 relative h-[500px]">
        <img src={TEAM_MEMBERS[0].img} />
      </div>
    </div>
  </div>
);`,
      html: `<div class="bento-layout">
  <div class="bento-grid">
    <div class="bento-item main">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800" />
      <div class="info-overlay">
        <h3>Sarah Cole</h3>
        <p>CEO & Founder</p>
        <button>Biography →</button>
      </div>
    </div>
    <div class="bento-item sub">
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" />
      <div class="sub-overlay">
        <h3>David Park</h3>
        <p>Head of Design</p>
      </div>
    </div>
    <div class="bento-item sub">
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" />
      <div class="sub-overlay">
        <h3>Emily Chen</h3>
        <p>Lead Engineer</p>
      </div>
    </div>
    <div class="bento-item sub">
      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" />
      <div class="sub-overlay">
        <h3>Michael Ross</h3>
        <p>Product Manager</p>
      </div>
    </div>
  </div>
</div>`,
      css: `.bento-layout { background: #f8fafc; padding: 80px; border-radius: 48px; font-family: sans-serif; }
.bento-grid { max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: repeat(1, 1fr); gap: 24px; }
@media (min-width: 768px) { .bento-grid { grid-template-columns: repeat(3, 1fr); } }
.bento-item { position: relative; border-radius: 40px; overflow: hidden; background: #ffffff; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
.bento-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s; }
.bento-item:hover img { transform: scale(1.05); }
.main { grid-column: span 1; height: 500px; }
@media (min-width: 768px) { .main { grid-column: span 2; grid-row: span 2; } }
.info-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #000000, transparent);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 48px;
  text-align: left;
}
.info-overlay h3 { color: #ffffff; font-size: 36px; font-weight: 700; margin-bottom: 8px; }
.info-overlay p { color: rgba(255, 255, 255, 0.8); font-size: 20px; }
.info-overlay button {
  margin-top: 32px;
  padding: 12px 32px;
  background: #ffffff;
  color: #000000;
  font-weight: 700;
  border-radius: 9999px;
  border: none;
  width: fit-content;
  cursor: pointer;
  transition: all 0.2s;
}
.info-overlay button:hover { background: #4f46e5; color: #ffffff; }
.sub { height: 240px; border: 1px solid #f1f5f9; }
.sub img { filter: grayscale(100%); }
.sub-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  opacity: 0;
  transition: opacity 0.3s;
  color: #ffffff;
}
.sub:hover .sub-overlay { opacity: 1; }
.sub-overlay h3 { font-size: 18px; font-weight: 700; }
.sub-overlay p { color: #818cf8; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 8px; }`
    }
  ];

  return (
    <div className="container overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-64 text-gray-900">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-6xl font-black text-slate-950 mb-6 tracking-tighter uppercase italic leading-none">Team_Gallery</h1>
        <p className="text-slate-500 font-bold text-xl italic lowercase">Original high-fidelity squad architectures for structural deployment.</p>
      </div>

      <div className="space-y-32 max-w-7xl mx-auto">
        {sections.map((section) => (
          <section key={section.id} className="bg-white p-4 rounded-xl shadow-lg relative group border border-slate-200">
            <div className="absolute top-4 right-4 z-40 opacity-0 group-hover:opacity-100 transition-opacity">
              <CopyButton 
                jsxCode={section.jsx}
                htmlCode={section.html}
                cssCode={section.css}
              />
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block text-center mb-8 italic">
              {section.title}
            </span>
            {section.component}
          </section>
        ))}
      </div>
    </div>
  );
};

export default TeamGallery;