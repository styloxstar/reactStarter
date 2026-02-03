import React from 'react';

// --- Shared Data ---
const user = {
  name: "Alex Morgan",
  handle: "@alexm",
  role: "Senior Product Designer",
  location: "San Francisco, CA",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
  cover: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop",
  bio: "Crafting digital experiences that matter. Passionate about UI/UX, minimalism, and coffee.",
  stats: { posts: 142, followers: '12.5k', following: 450 }
};

const MapPin = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

// --- 1. The Standard SaaS (Sidebar Layout) ---
export const ProfileStandard = () => (
  <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row h-[600px]">
    {/* Sidebar Info */}
    <div className="w-full md:w-1/3 bg-slate-50 p-8 border-r border-gray-100 flex flex-col items-center text-center">
      <img src={user.avatar} alt="Profile" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-white shadow-sm" />
      <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
      <p className="text-sm text-gray-500 mb-6">{user.role}</p>
      
      <div className="flex gap-2 mb-8">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-700 transition-colors">Follow</button>
        <button className="p-2 border border-gray-300 rounded-full hover:bg-white text-gray-600">✉️</button>
      </div>

      <div className="w-full text-left space-y-4">
        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Details</div>
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <MapPin /> {user.location}
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
          alexmorgan.design
        </div>
      </div>
    </div>

    {/* Content Area */}
    <div className="w-full md:w-2/3 p-8 overflow-y-auto">
      <div className="flex gap-8 border-b border-gray-100 pb-4 mb-8">
        <button className="text-blue-600 font-bold border-b-2 border-blue-600 pb-4 -mb-4.5">Overview</button>
        <button className="text-gray-500 hover:text-gray-900 font-medium">Projects</button>
        <button className="text-gray-500 hover:text-gray-900 font-medium">Activity</button>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-4">About</h3>
          <p className="text-gray-600 leading-relaxed">{user.bio}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="text-2xl font-bold text-blue-600">{user.stats.projects || 12}</div>
            <div className="text-sm text-blue-800">Active Projects</div>
          </div>
          <div className="bg-green-50 p-6 rounded-xl">
            <div className="text-2xl font-bold text-green-600">98%</div>
            <div className="text-sm text-green-800">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 2. The Social Influencer (Instagram Style) ---
export const ProfileSocial = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 max-w-4xl mx-auto">
    <header className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex-shrink-0">
        <img src={user.avatar} alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-white" />
      </div>
      
      <div className="flex-1 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
          <h2 className="text-2xl font-light text-gray-900">{user.handle}</h2>
          <div className="flex gap-2">
            <button className="px-6 py-1.5 bg-gray-100 rounded-lg text-sm font-semibold hover:bg-gray-200">Follow</button>
            <button className="px-4 py-1.5 bg-gray-100 rounded-lg text-sm font-semibold hover:bg-gray-200">Message</button>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-start gap-8 mb-4 text-sm">
          <span><strong className="text-gray-900">{user.stats.posts}</strong> posts</span>
          <span><strong className="text-gray-900">{user.stats.followers}</strong> followers</span>
          <span><strong className="text-gray-900">{user.stats.following}</strong> following</span>
        </div>
        
        <div>
          <div className="font-bold text-gray-900">{user.name}</div>
          <p className="text-gray-600 whitespace-pre-line">{user.bio}</p>
          <a href="#" className="text-blue-900 font-medium text-sm">bit.ly/alex-portfolio</a>
        </div>
      </div>
    </header>
    
    <div className="border-t border-gray-200 pt-8">
      <div className="grid grid-cols-3 gap-1 md:gap-4">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="aspect-square bg-gray-100 relative group overflow-hidden">
            <img src={`https://images.unsplash.com/photo-${1550000000000 + i}?q=80&w=300&auto=format&fit=crop`} className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold gap-4">
              <span>❤️ 1.2k</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 3. The Developer (GitHub Style) ---
export const ProfileDev = () => (
  <div className="bg-[#0d1117] text-[#c9d1d9] p-8 rounded-3xl border border-gray-800 max-w-5xl mx-auto font-mono">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/4">
        <img src={user.avatar} className="w-full aspect-square rounded-full border border-gray-700 mb-4" alt="" />
        <h1 className="text-2xl font-bold text-white">{user.name}</h1>
        <p className="text-gray-400 text-lg mb-4">{user.handle}</p>
        <p className="text-sm mb-6">{user.bio}</p>
        <button className="w-full py-1.5 bg-[#21262d] border border-gray-600 rounded-md text-sm font-bold text-white hover:bg-gray-700 mb-6">Edit Profile</button>
        
        <div className="space-y-2 text-sm text-gray-400">
          <div className="flex items-center gap-2">🏢 TechFlow Inc.</div>
          <div className="flex items-center gap-2">📍 {user.location}</div>
          <div className="flex items-center gap-2">🔗 alex.dev</div>
        </div>
      </div>
      
      <div className="w-full md:w-3/4">
        <div className="text-sm mb-2">Pinned Repositories</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[1,2,3,4].map(i => (
            <div key={i} className="p-4 border border-gray-700 rounded-md bg-[#0d1117] hover:border-gray-500">
              <div className="flex items-center gap-2 mb-2 font-bold text-blue-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8zM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25z"/></svg>
                <span>react-awesome-lib</span>
              </div>
              <p className="text-xs text-gray-400 mb-4">A lightweight library for building awesome interfaces.</p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-yellow-400"></span> JavaScript</span>
                <span>★ 1.2k</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-sm mb-2">Contribution Activity</div>
        <div className="bg-[#0d1117] border border-gray-700 p-4 rounded-md">
           <div className="flex gap-1 flex-wrap">
             {[...Array(150)].map((_, i) => {
               const intensity = Math.random() > 0.7 ? 'bg-green-500' : Math.random() > 0.4 ? 'bg-green-900' : 'bg-[#161b22]';
               return <div key={i} className={`w-3 h-3 rounded-sm ${intensity}`}></div>
             })}
           </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 4. The Glassmorphism (Creative) ---
export const ProfileGlass = () => (
  <div className="relative h-[600px] w-full rounded-3xl overflow-hidden bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center p-4">
    <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob"></div>
    <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob"></div>

    <div className="relative bg-white/20 backdrop-blur-xl border border-white/30 p-12 rounded-[3rem] shadow-2xl w-full max-w-lg text-center text-white">
      <div className="relative inline-block mb-6">
        <img src={user.avatar} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-white/50 shadow-lg" />
        <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-400 border-2 border-white rounded-full"></div>
      </div>
      
      <h2 className="text-4xl font-bold mb-2 drop-shadow-md">{user.name}</h2>
      <p className="text-white/80 font-medium mb-8 uppercase tracking-widest text-sm">{user.role}</p>
      
      <div className="flex justify-center gap-12 mb-10 border-y border-white/20 py-6">
        <div>
          <div className="text-2xl font-bold">128</div>
          <div className="text-xs uppercase opacity-70">Projects</div>
        </div>
        <div>
          <div className="text-2xl font-bold">4.2k</div>
          <div className="text-xs uppercase opacity-70">Likes</div>
        </div>
        <div>
          <div className="text-2xl font-bold">850</div>
          <div className="text-xs uppercase opacity-70">Followers</div>
        </div>
      </div>
      
      <div className="space-y-4">
        <button className="w-full py-3 bg-white text-purple-600 font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">
          View Portfolio
        </button>
        <button className="w-full py-3 bg-transparent border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
          Contact Me
        </button>
      </div>
    </div>
  </div>
);

// --- 5. The Corporate Card (ID Style) ---
export  const ProfileCorporate = () => (
  <div className="bg-slate-100 flex items-center justify-center h-[600px] rounded-3xl">
    <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden flex">
      {/* Left Stripe */}
      <div className="w-4 bg-blue-800"></div>
      
      <div className="flex-1 p-8 md:p-12">
        <div className="flex justify-between items-start mb-8">
          <div className="text-2xl font-bold text-slate-800 tracking-tight">TechCorp<span className="text-blue-600">.</span></div>
          <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center">
             {/* Fake QR */}
             <div className="w-10 h-10 border-2 border-black border-dashed opacity-20"></div>
          </div>
        </div>
        
        <div className="flex items-center gap-8 mb-10">
          <img src={user.avatar} className="w-32 h-32 rounded-lg object-cover shadow-md" alt="" />
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{user.name}</h1>
            <p className="text-blue-600 font-medium text-lg mb-2">{user.role}</p>
            <p className="text-slate-500 text-sm">ID: 8842-1920</p>
            <div className="mt-2 inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase rounded-full">Active Employee</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6 border-t border-slate-100 pt-8">
          <div>
            <span className="block text-xs font-bold text-slate-400 uppercase">Department</span>
            <span className="text-slate-700 font-medium">Product Design</span>
          </div>
          <div>
            <span className="block text-xs font-bold text-slate-400 uppercase">Location</span>
            <span className="text-slate-700 font-medium">San Francisco HQ</span>
          </div>
          <div>
            <span className="block text-xs font-bold text-slate-400 uppercase">Email</span>
            <span className="text-slate-700 font-medium">alex@techcorp.com</span>
          </div>
          <div>
            <span className="block text-xs font-bold text-slate-400 uppercase">Phone</span>
            <span className="text-slate-700 font-medium">+1 (555) 019-2834</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 6. The Cover Focus (Banner) ---
export const ProfileCover = () => (
  <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm max-w-4xl mx-auto">
    <div className="h-64 w-full bg-gray-200 relative">
      <img src={user.cover} alt="Cover" className="w-full h-full object-cover" />
      <button className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm hover:bg-black/70">Change Cover</button>
    </div>
    
    <div className="px-8 pb-8">
      <div className="relative flex justify-between items-end -mt-12 mb-6">
        <div className="relative">
          <img src={user.avatar} className="w-32 h-32 rounded-full border-4 border-white object-cover" alt="" />
          <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
        <div className="flex gap-3 mb-2">
          <button className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">Connect</button>
          <button className="px-4 py-2.5 border border-gray-300 font-bold rounded-lg hover:bg-gray-50 text-gray-700">Message</button>
        </div>
      </div>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
        <p className="text-gray-500 text-lg mb-2">{user.role} at <span className="text-gray-900 font-medium">TechFlow</span></p>
        <p className="text-gray-500 text-sm flex items-center gap-2"><MapPin /> {user.location} • <span className="text-blue-600 font-bold">500+ connections</span></p>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <h3 className="font-bold text-gray-900 mb-2">About</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          {user.bio} I specialize in building accessible, high-performance user interfaces. 
          Currently exploring the intersection of design systems and AI.
        </p>
      </div>
    </div>
  </div>
);

// --- 7. The Cyberpunk (Gamer) ---
export const ProfileCyber = () => (
  <div className="bg-black p-1 border-2 border-purple-600 rounded-3xl max-w-4xl mx-auto shadow-[0_0_20px_rgba(147,51,234,0.3)]">
    <div className="bg-gray-900 h-full rounded-[20px] p-8 overflow-hidden relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="relative">
          <div className="w-40 h-40 rounded-full p-1 bg-gradient-to-b from-purple-500 to-cyan-500">
            <img src={user.avatar} className="w-full h-full rounded-full object-cover grayscale contrast-125" alt="" />
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black border border-purple-500 text-purple-400 px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest whitespace-nowrap">
            LVL 42
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-black text-white italic tracking-wider mb-1 uppercase" style={{textShadow: "2px 2px 0px #9333ea"}}>
            {user.handle}
          </h2>
          <p className="text-cyan-400 font-mono text-sm mb-6">> {user.role}</p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            {['UI_DESIGN', 'REACT_JS', 'CYBER_SEC'].map(skill => (
              <span key={skill} className="px-3 py-1 bg-purple-900/30 border border-purple-500/50 text-purple-300 text-xs font-mono">
                [{skill}]
              </span>
            ))}
          </div>
          
          <div className="grid grid-cols-3 gap-2 bg-black/50 p-4 border border-gray-800 rounded-lg max-w-md mx-auto md:mx-0">
            <div className="text-center">
              <div className="text-xs text-gray-500 uppercase">Rank</div>
              <div className="text-xl font-bold text-white">#04</div>
            </div>
            <div className="text-center border-l border-gray-800">
              <div className="text-xs text-gray-500 uppercase">K/D Ratio</div>
              <div className="text-xl font-bold text-white">2.4</div>
            </div>
            <div className="text-center border-l border-gray-800">
              <div className="text-xs text-gray-500 uppercase">Matches</div>
              <div className="text-xl font-bold text-white">842</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 8. The Link in Bio (Mobile First) ---
export const ProfileLinkTree = () => (
  <div className="bg-white flex justify-center py-12 rounded-3xl border border-gray-100">
    <div className="w-full max-w-sm px-6 text-center">
      <img src={user.avatar} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-lg" alt="" />
      <h2 className="text-xl font-bold text-gray-900">@{user.handle.replace('@','')}</h2>
      <p className="text-gray-500 text-sm mb-8">{user.bio}</p>
      
      <div className="space-y-4">
        {[
          { label: 'My Portfolio', sub: 'View my latest work' },
          { label: 'Book a Consultation', sub: '30 min discovery call' },
          { label: 'Read my Blog', sub: 'Thoughts on design & tech' },
          { label: 'YouTube Channel', sub: 'Tutorials and vlogs' }
        ].map((link, i) => (
          <a key={i} href="#" className="block bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-4 transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="font-bold text-gray-900">{link.label}</div>
            <div className="text-xs text-gray-500">{link.sub}</div>
          </a>
        ))}
      </div>
      
      <div className="flex justify-center gap-6 mt-12 text-2xl text-gray-400">
        <a href="#" className="hover:text-gray-800 hover:scale-110 transition-all">🐦</a>
        <a href="#" className="hover:text-gray-800 hover:scale-110 transition-all">📸</a>
        <a href="#" className="hover:text-gray-800 hover:scale-110 transition-all">💼</a>
      </div>
    </div>
  </div>
);

// --- 9. The Neumorphic (Soft) ---
export const ProfileNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-12 rounded-3xl flex justify-center">
    <div className="w-full max-w-md bg-[#e0e5ec] p-10 rounded-[3rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center">
      <div className="w-32 h-32 mx-auto rounded-full p-2 bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] mb-8">
        <img src={user.avatar} className="w-full h-full rounded-full object-cover" alt="" />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-700 mb-2">{user.name}</h2>
      <p className="text-gray-500 text-sm mb-8">{user.role}</p>
      
      <div className="flex justify-center gap-8 mb-10">
        <div className="flex flex-col items-center">
          <div className="font-bold text-gray-700 text-xl">24</div>
          <div className="text-xs text-gray-500">Shots</div>
        </div>
        <div className="w-px h-10 bg-gray-300"></div>
        <div className="flex flex-col items-center">
          <div className="font-bold text-gray-700 text-xl">1.2k</div>
          <div className="text-xs text-gray-500">Followers</div>
        </div>
        <div className="w-px h-10 bg-gray-300"></div>
        <div className="flex flex-col items-center">
          <div className="font-bold text-gray-700 text-xl">842</div>
          <div className="text-xs text-gray-500">Following</div>
        </div>
      </div>
      
      <div className="flex gap-4">
        <button className="flex-1 py-3 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] active:scale-95 transition-all">
          Follow
        </button>
        <button className="flex-1 py-3 rounded-xl bg-[#e0e5ec] text-gray-600 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] active:scale-95 transition-all">
          Message
        </button>
      </div>
    </div>
  </div>
);

// --- 10. The Brutalist (Bold) ---
export const ProfileBrutalist = () => (
  <div className="bg-yellow-400 p-8 rounded-3xl border-4 border-black max-w-4xl mx-auto shadow-[12px_12px_0_0_#000]">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/3">
        <div className="aspect-square border-4 border-black mb-4 overflow-hidden bg-white">
          <img src={user.avatar} className="w-full h-full object-cover filter contrast-125 hover:scale-110 transition-transform duration-300" alt="" />
        </div>
        <button className="w-full py-3 bg-black text-white font-black text-xl uppercase hover:bg-white hover:text-black border-4 border-transparent hover:border-black transition-colors">
          Hire Me
        </button>
      </div>
      
      <div className="w-full md:w-2/3 bg-white border-4 border-black p-8">
        <h1 className="text-5xl font-black uppercase leading-none mb-4">{user.name}</h1>
        <div className="inline-block bg-black text-white px-3 py-1 font-bold uppercase mb-6">{user.role}</div>
        
        <p className="font-bold text-xl mb-8 leading-tight">
          "I design interfaces that make people stop scrolling and start clicking."
        </p>
        
        <div className="space-y-4">
          <div className="border-b-4 border-black pb-2 flex justify-between items-end font-bold">
            <span>SKILL_01</span>
            <span>UI DESIGN</span>
          </div>
          <div className="border-b-4 border-black pb-2 flex justify-between items-end font-bold">
            <span>SKILL_02</span>
            <span>FRONTEND</span>
          </div>
          <div className="border-b-4 border-black pb-2 flex justify-between items-end font-bold">
            <span>SKILL_03</span>
            <span>BRANDING</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);


// --- Main Gallery Wrapper ---
const ProfileGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-100 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Profile Page Designs</h1>
        <p className="text-slate-500">Showcase user identity with style and functionality.</p>
      </div>
      
      <div className="space-y-32">
        
        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">01. Standard SaaS (Sidebar)</span>
          <ProfileStandard />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">02. Social Influencer</span>
          <ProfileSocial />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">03. Developer (Dark Mode)</span>
          <ProfileDev />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">04. Glassmorphism</span>
          <ProfileGlass />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">05. Corporate ID Card</span>
          <ProfileCorporate />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">06. Cover Banner Focus</span>
          <ProfileCover />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">07. Cyberpunk Gamer</span>
          <ProfileCyber />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">08. Link in Bio (Mobile)</span>
          <ProfileLinkTree />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">09. Neumorphic</span>
          <ProfileNeumorphic />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">10. Brutalist Portfolio</span>
          <ProfileBrutalist />
        </section>

      </div>
    </div>
  );
};

export default ProfileGallery;