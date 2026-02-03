import React from 'react';

// --- 1. The Frosty Glass Card ---
export const CardGlass = () => (
  <div className="relative w-full max-w-sm p-6 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-xl overflow-hidden group hover:bg-white/20 transition-all duration-300">
    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-blue-500/30 blur-2xl"></div>
    <div className="relative z-10">
      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Frosty Glass</h3>
      <p className="text-blue-100 text-sm mb-6">A beautiful translucent effect that blurs the background, perfect for modern overlays.</p>
      <button className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white font-semibold transition-colors">
        Learn More
      </button>
    </div>
  </div>
);

// --- 2. The Neumorphic (Soft UI) Card ---
// *Note: Neumorphism works best on a specific solid background color*
export const CardNeumorphism = () => (
  <div className="w-full max-w-sm p-6 rounded-3xl bg-gray-200 text-gray-700 shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)]">
    <div className="flex justify-between items-center mb-6">
      <div className="w-10 h-10 rounded-full bg-gray-200 shadow-[5px_5px_10px_rgb(163,177,198),-5px_-5px_10px_rgba(255,255,255,0.5)] flex items-center justify-center text-gray-500">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </div>
      <div className="text-xs font-bold tracking-widest text-gray-400">SOFT UI</div>
    </div>
    <h3 className="text-2xl font-bold mb-2 text-gray-700">Neumorphism</h3>
    <p className="text-gray-500 text-sm mb-8">This design style uses light and shadow to mimic extruded plastic surfaces.</p>
    <button className="w-full py-3 rounded-xl bg-gray-200 text-blue-500 font-bold shadow-[5px_5px_10px_rgb(163,177,198),-5px_-5px_10px_rgba(255,255,255,0.5)] hover:shadow-[inset_5px_5px_10px_rgb(163,177,198),inset_-5px_-5px_10px_rgba(255,255,255,0.5)] transition-all active:scale-95">
      Interact
    </button>
  </div>
);

// --- 3. The Gradient Border (Neon Glow) ---
export const CardGradientBorder = () => (
  <div className="relative w-full max-w-sm group">
    {/* Gradient Background (Acts as border) */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
    {/* Main Content */}
    <div className="relative p-6 bg-black rounded-xl leading-none flex items-top justify-start space-x-6">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-purple-400">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
          </span>
          <h3 className="text-white font-bold text-lg">Neon Border</h3>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          High-performance gradient border effect using a blurred div behind the main content.
        </p>
        <a href="#" className="block text-pink-400 text-sm font-medium hover:text-pink-300 transition-colors">&rarr; Explore</a>
      </div>
    </div>
  </div>
);

// --- 4. The Minimalist (Clean Shadow) ---
export const CardMinimal = () => (
  <div className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-shadow duration-300 ease-in-out">
    <div className="h-2 w-12 bg-gray-900 rounded-full mb-6"></div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">Minimalist</h3>
    <p className="text-gray-500 mb-6 leading-relaxed">
      Less is more. A clean white card with a deep, soft shadow that makes it pop off the page elegantly.
    </p>
    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Project</span>
      <div className="flex -space-x-2">
        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt="Avatar" />
        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2" alt="Avatar" />
        <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs text-gray-500">+3</div>
      </div>
    </div>
  </div>
);

// --- 5. The Brutalist (Retro Pop) ---
export const CardBrutalist = () => (
  <div className="w-full max-w-sm bg-yellow-400 border-2 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-200">
    <div className="bg-black text-white text-xs font-bold px-2 py-1 inline-block mb-4">NEW</div>
    <h3 className="text-3xl font-black text-black mb-4 uppercase">Brutalism</h3>
    <p className="text-black font-medium mb-6">
      Sharp edges, high contrast, and hard shadows. A retro-modern aesthetic that breaks the rules.
    </p>
    <button className="w-full bg-white border-2 border-black py-3 font-bold text-black hover:bg-black hover:text-white transition-colors">
      CHECK IT OUT
    </button>
  </div>
);

// --- 6. The Image Overlay (Dark Gradient) ---
export const CardImageOverlay = () => (
  <div className="relative w-full max-w-sm h-64 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
    {/* Background Image */}
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542397284385-6010376c5337?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
    
    <div className="absolute bottom-0 left-0 p-6 w-full">
      <span className="text-xs font-bold text-emerald-400 mb-1 block">NATURE</span>
      <h3 className="text-xl font-bold text-white mb-2">Misty Mountains</h3>
      <p className="text-gray-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
        Explore the deep misty mountains and discover the secrets hidden within the fog.
      </p>
      <div className="flex items-center text-white text-xs font-medium gap-2">
        <span>Read More</span>
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </div>
    </div>
  </div>
);

// --- 7. The Floating Info Card ---
export const CardFloating = () => (
  <div className="w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
    <div className="h-24 bg-indigo-600 flex items-center justify-center">
        <svg className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-2">Design Tools</h3>
      <p className="text-gray-500 text-sm mb-4">
        Access premium resources and assets for your next big project.
      </p>
      <div className="flex gap-2">
        <span className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded">UI/UX</span>
        <span className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded">Assets</span>
      </div>
    </div>
  </div>
);

// --- 8. The Cyberpunk (Dark Glass) ---
export const CardCyberpunk = () => (
  <div className="w-full max-w-sm relative p-[1px] rounded-2xl bg-gradient-to-br from-cyan-500 to-fuchsia-500">
    <div className="bg-gray-900 rounded-2xl p-6 h-full relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center border border-gray-700">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
          </div>
          <span className="bg-fuchsia-500/20 text-fuchsia-300 text-xs font-bold px-2 py-1 rounded border border-fuchsia-500/30">PRO</span>
        </div>
        <h3 className="text-white font-bold text-xl mb-1 tracking-wide">CYBER CARD</h3>
        <p className="text-gray-400 text-xs mb-6">FUTURISTIC • GLOW • DARK</p>
        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="w-2/3 h-full bg-gradient-to-r from-cyan-500 to-fuchsia-500"></div>
        </div>
        <div className="mt-2 text-right text-xs text-gray-500">Loading... 67%</div>
      </div>
    </div>
  </div>
);

// --- 9. The Profile Grid Card ---
export const CardProfile = () => (
  <div className="w-full max-w-sm bg-white rounded-3xl p-6 text-center shadow-lg border border-gray-100">
    <div className="relative w-24 h-24 mx-auto mb-4">
      <img className="w-full h-full rounded-full object-cover border-4 border-white shadow-md" src="https://i.pravatar.cc/150?img=32" alt="Profile" />
      <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
    </div>
    <h3 className="text-lg font-bold text-gray-800">Sarah Jenkins</h3>
    <p className="text-gray-500 text-sm mb-4">Product Designer</p>
    <div className="flex justify-center gap-4 mb-6">
      <div className="text-center">
        <div className="font-bold text-gray-800">1.2k</div>
        <div className="text-xs text-gray-400">Followers</div>
      </div>
      <div className="w-px bg-gray-200"></div>
      <div className="text-center">
        <div className="font-bold text-gray-800">450</div>
        <div className="text-xs text-gray-400">Following</div>
      </div>
    </div>
    <div className="flex gap-2">
      <button className="flex-1 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors">Follow</button>
      <button className="p-2 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
      </button>
    </div>
  </div>
);

// --- 10. The Notification/Stack Card ---
export const CardStack = () => (
  <div className="w-full max-w-sm relative group">
    {/* Stacked effect elements */}
    <div className="absolute top-4 left-4 w-full h-full bg-blue-200 rounded-2xl -z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
    <div className="absolute top-2 left-2 w-full h-full bg-blue-100 rounded-2xl -z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"></div>
    
    {/* Main Card */}
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-blue-500">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-bold text-gray-800">New Message</h4>
            <span className="text-xs text-gray-400">2m ago</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mb-3">
            You have a new project invitation from the creative team.
          </p>
          <div className="flex gap-2">
            <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">Reply</button>
            <button className="text-xs font-semibold text-gray-400 hover:text-gray-500">Dismiss</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Gallery Layout ---
const Cards = () => {
  return (
    <div className="container box-shadow bg-slate-50 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-slate-800 mb-2 text-center">Modern Card Components</h1>
            <p className="text-slate-500 text-center mb-12">A collection of glass, neumorphic, and modern styles.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
                
                {/* 1. Frosty Glass (Needs background to show effect) */}
                <div className="w-full flex justify-center items-center bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-xl">
                    <CardGlass />
                </div>

                {/* 2. Neumorphism */}
                <div className="w-full flex justify-center items-center bg-gray-200 p-4 rounded-xl">
                    <CardNeumorphism />
                </div>

                {/* 3. Gradient Border */}
                <div className="w-full flex justify-center items-center bg-gray-900 p-4 rounded-xl">
                    <CardGradientBorder />
                </div>

                {/* 4. Minimalist */}
                <div className="w-full flex justify-center items-center">
                    <CardMinimal />
                </div>

                {/* 5. Brutalist */}
                <div className="w-full flex justify-center items-center">
                    <CardBrutalist />
                </div>

                {/* 6. Image Overlay */}
                <div className="w-full flex justify-center items-center">
                    <CardImageOverlay />
                </div>

                {/* 7. Floating */}
                <div className="w-full flex justify-center items-center bg-slate-100 p-4 rounded-xl">
                    <CardFloating />
                </div>

                {/* 8. Cyberpunk */}
                <div className="w-full flex justify-center items-center bg-gray-950 p-4 rounded-xl">
                    <CardCyberpunk />
                </div>

                {/* 9. Profile */}
                <div className="w-full flex justify-center items-center bg-gray-50 p-4 rounded-xl box-shadow">
                    <CardProfile />
                </div>

                {/* 10. Stack */}
                <div className="w-full flex justify-center items-center bg-white p-4 rounded-xl box-shadow">
                    <CardStack />
                </div>

            </div>
        </div>
    </div>
  );
};

export default Cards;