import React from 'react';
import CopyButton from '../common/CopyButton';

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
  <div className="w-full max-w-sm glass-card rounded-2xl p-6 shadow-lg border border-[hsl(var(--border))] hover:shadow-xl transition-all duration-300 ease-in-out">
    <div className="h-2 w-12 bg-[hsl(var(--foreground))] rounded-full mb-6 opacity-80"></div>
    <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-2">Minimalist</h3>
    <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
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
  <div className="w-full max-w-sm bg-[hsl(var(--card))] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-[hsl(var(--border))]">
    <div className="h-24 bg-indigo-600 flex items-center justify-center">
        <svg className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-bold text-[hsl(var(--foreground))] mb-2">Design Tools</h3>
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
  <div className="w-full max-w-sm glass-card rounded-3xl p-6 text-center shadow-lg border border-[hsl(var(--border))]">
    <div className="relative w-24 h-24 mx-auto mb-4">
      <img className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-md" src="https://i.pravatar.cc/150?img=32" alt="Profile" />
      <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
    </div>
    <h3 className="text-lg font-bold text-[hsl(var(--foreground))]">Sarah Jenkins</h3>
    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Product Designer</p>
    <div className="flex justify-center gap-4 mb-6">
      <div className="text-center">
        <div className="font-bold text-[hsl(var(--foreground))]">1.2k</div>
        <div className="text-xs text-gray-400">Followers</div>
      </div>
      <div className="w-px bg-gray-200"></div>
      <div className="text-center">
        <div className="font-bold text-[hsl(var(--foreground))]">450</div>
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
    <div className="bg-[hsl(var(--card))] p-6 rounded-2xl shadow-sm border border-[hsl(var(--border))]">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-blue-500">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-bold text-[hsl(var(--foreground))]">New Message</h4>
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
    <div className="container bg-transparent p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-2 text-center">Modern Card Components</h1>
            <p className="text-[hsl(var(--foreground))] opacity-60 text-center mb-12">A collection of glass, neumorphic, and modern styles.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
                
                {/* 1. Frosty Glass */}
                <div className="w-full flex flex-col gap-2 items-center bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-2xl relative group/card">
                    <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/card:opacity-100 transition-opacity">
                        <CopyButton 
                            jsxCode={`export const CardGlass = () => (\n  <div className="relative w-full max-w-sm p-6 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-xl overflow-hidden group hover:bg-white/20 transition-all duration-300">\n    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-blue-500/30 blur-2xl"></div>\n    <div className="relative z-10">\n      <h3 className="text-xl font-bold text-white mb-2">Frosty Glass</h3>\n      <p className="text-blue-100 text-sm mb-6">A beautiful translucent effect that blurs the background.</p>\n      <button className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white font-semibold transition-colors">Learn More</button>\n    </div>\n  </div>\n);`}
                            htmlCode={`<div class="card-glass">...</div>`}
                            cssCode={`.card-glass { backdrop-filter: blur(12px); background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.3); padding: 1.5rem; border-radius: 1rem; color: #fff; }`}
                        />
                    </div>
                    <CardGlass />
                </div>

                {/* 2. Neumorphism */}
                <div className="w-full flex flex-col gap-2 items-center bg-gray-200 p-8 rounded-2xl relative group/card">
                    <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/card:opacity-100 transition-opacity">
                        <CopyButton 
                            jsxCode={`export const CardNeumorphism = () => (\n  <div className="w-full max-w-sm p-6 rounded-3xl bg-gray-200 text-gray-700 shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)]">\n    <div className="flex justify-between items-center mb-6">\n      <div className="w-10 h-10 rounded-full bg-gray-200 shadow-[5px_5px_10px_rgb(163,177,198),-5px_-5px_10px_rgba(255,255,255,0.5)] flex items-center justify-center text-gray-500">\n        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>\n      </div>\n      <div className="text-xs font-bold tracking-widest text-gray-400">SOFT UI</div>\n    </div>\n    <h3 className="text-2xl font-bold mb-2 text-gray-700">Neumorphism</h3>\n    <p className="text-gray-500 text-sm mb-8">This design style uses light and shadow to mimic extruded plastic surfaces.</p>\n    <button className="w-full py-3 rounded-xl bg-gray-200 text-blue-500 font-bold shadow-[5px_5px_10px_rgb(163,177,198),-5px_-5px_10px_rgba(255,255,255,0.5)] hover:shadow-[inset_5px_5px_10px_rgb(163,177,198),inset_-5px_-5px_10px_rgba(255,255,255,0.5)] transition-all active:scale-95">Interact</button>\n  </div>\n);`}
                            htmlCode={`<div class="card-neu">\n  <div class="card-neu-header">\n    <div class="card-neu-icon">←</div>\n    <span>SOFT UI</span>\n  </div>\n  <h3>Neumorphism</h3>\n  <p>Light and shadow mimicking extruded plastic surfaces.</p>\n  <button class="btn-neu">Interact</button>\n</div>`}
                            cssCode={`.card-neu { background: #e5e7eb; padding: 1.5rem; border-radius: 1.5rem; box-shadow: 9px 9px 16px #a3b1c6, -9px -9px 16px rgba(255,255,255,0.5); color: #374151; }\n.btn-neu { width: 100%; padding: 0.75rem; border-radius: 0.75rem; background: #e5e7eb; border: none; font-weight: 700; color: #3b82f6; box-shadow: 5px 5px 10px #a3b1c6, -5px -5px 10px #fff; transition: all 0.3s; cursor: pointer; }\n.btn-neu:hover { box-shadow: inset 5px 5px 10px #a3b1c6, inset -5px -5px 10px #fff; }`}
                        />
                    </div>
                    <CardNeumorphism />
                </div>

                {/* 3. Gradient Border */}
                <div className="w-full flex flex-col gap-2 items-center bg-gray-900 p-8 rounded-2xl relative group/card">
                    <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/card:opacity-100 transition-opacity">
                        <CopyButton 
                            jsxCode={`export const CardGradientBorder = () => (\n  <div className="relative w-full max-w-sm group">\n    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>\n    <div className="relative p-6 bg-black rounded-xl border border-white/10">\n      <h3 className="text-white font-bold text-lg mb-2">Neon Border</h3>\n      <p className="text-gray-400 text-sm mb-4">High-performance gradient border effect.</p>\n      <a href="#" className="text-pink-400 text-sm font-medium hover:text-pink-300">Explore →</a>\n    </div>\n  </div>\n);`}
                            htmlCode={`<div class="neon-card-wrap">\n  <div class="neon-glow"></div>\n  <div class="neon-content">\n    <h3>Neon Border</h3>\n    <p>High-performance gradient border effect.</p>\n    <a href="#">Explore →</a>\n  </div>\n</div>`}
                            cssCode={`.neon-card-wrap { position: relative; padding: 1px; border-radius: 1rem; overflow: visible; }\n.neon-glow { position: absolute; inset: -4px; background: linear-gradient(to right, #db2777, #9333ea); filter: blur(8px); border-radius: 1rem; opacity: 0.75; transition: opacity 0.3s; }\n.neon-card-wrap:hover .neon-glow { opacity: 1; }\n.neon-content { position: relative; background: #000; padding: 1.5rem; border-radius: 1rem; border: 1px solid rgba(255,255,255,0.1); color: #fff; }`}
                        />
                    </div>
                    <CardGradientBorder />
                </div>

                {/* 4. Minimalist */}
                <div className="w-full flex flex-col gap-2 items-center p-4 relative group/card">
                    <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/card:opacity-100 transition-opacity">
                        <CopyButton 
                            jsxCode={`export const CardMinimal = () => (\n  <div className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-shadow duration-300">\n    <div className="h-2 w-12 bg-gray-900 rounded-full mb-6"></div>\n    <h3 className="text-2xl font-bold text-gray-900 mb-2">Minimalist</h3>\n    <p className="text-gray-500 mb-6">Less is more. A clean white card with a deep, soft shadow.</p>\n    <div className="flex items-center justify-between pt-4 border-t border-gray-100">\n      <span className="text-xs font-semibold text-gray-400">Project</span>\n    </div>\n  </div>\n);`}
                            htmlCode={`<div class="card-min">\n  <div class="card-min-accent"></div>\n  <h3>Minimalist</h3>\n  <p>Less is more. A clean white card with a soft shadow.</p>\n  <div class="card-min-footer"><span>Project</span></div>\n</div>`}
                            cssCode={`.card-min { background: #fff; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 8px 30px rgba(0,0,0,0.12); border: 1px solid #f3f4f6; transition: box-shadow 0.3s; color: #111827; }\n.card-min:hover { box-shadow: 0 8px 30px rgba(0,0,0,0.2); }\n.card-min-accent { width: 3rem; height: 0.5rem; background: #111827; border-radius: 1rem; margin-bottom: 1.5rem; }`}
                        />
                    </div>
                    <CardMinimal />
                </div>

                {/* 5. Brutalist */}
                <div className="w-full flex flex-col gap-2 items-center p-4 relative group/card">
                    <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/card:opacity-100 transition-opacity">
                        <CopyButton 
                            jsxCode={`export const CardBrutalist = () => (\n  <div className="w-full max-w-sm bg-yellow-400 border-2 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-200">\n    <div className="bg-black text-white text-xs font-bold px-2 py-1 inline-block mb-4">NEW</div>\n    <h3 className="text-3xl font-black text-black mb-4 uppercase">Brutalism</h3>\n    <p className="text-black font-medium mb-6">Sharp edges, high contrast, and hard shadows.</p>\n    <button className="w-full bg-white border-2 border-black py-3 font-bold text-black hover:bg-black hover:text-white">CHECK IT OUT</button>\n  </div>\n);`}
                            htmlCode={`<div class="card-brutal">\n  <div class="card-brutal-tag">NEW</div>\n  <h3>Brutalism</h3>\n  <p>Sharp edges, high contrast, and hard shadows.</p>\n  <button>CHECK IT OUT</button>\n</div>`}
                            cssCode={`.card-brutal { background: #facc15; border: 2px solid #000; padding: 1.5rem; box-shadow: 8px 8px 0 0 #000; transition: all 0.2s; color: #000; }\n.card-brutal:hover { box-shadow: none; transform: translate(6px, 6px); }\n.card-brutal-tag { background: #000; color: #fff; padding: 0.25rem 0.5rem; display: inline-block; font-weight: 700; font-size: 0.75rem; margin-bottom: 1rem; }\n.card-brutal button { width: 100%; border: 2px solid #000; background: #fff; padding: 0.75rem; font-weight: 700; cursor: pointer; }`}
                        />
                    </div>
                    <CardBrutalist />
                </div>

                {/* 6. Image Overlay */}
                <div className="w-full flex flex-col gap-2 items-center p-4 relative group/card">
                    <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/card:opacity-100 transition-opacity">
                        <CopyButton 
                            jsxCode={`export const CardImageOverlay = () => (\n  <div className="relative w-full max-w-sm h-64 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">\n    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/...')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>\n    <div className="absolute inset-0 bg-gradient-to-t from-black/90"></div>\n    <div className="absolute bottom-0 left-0 p-6 w-full">\n      <h3 className="text-xl font-bold text-white mb-2">Misty Mountains</h3>\n      <p className="text-gray-300 text-sm group-hover:opacity-100 transition-opacity">Explore the deep misty mountains...</p>\n    </div>\n  </div>\n);`}
                            htmlCode={`<div class="card-img">\n  <div class="card-img-bg"></div>\n  <div class="card-img-overlay"></div>\n  <div class="card-img-content">\n    <h3>Misty Mountains</h3>\n    <p>Explore the deep misty mountains.</p>\n  </div>\n</div>`}
                            cssCode={`.card-img { position: relative; height: 16rem; width: 100%; border-radius: 1rem; overflow: hidden; color: #fff; }\n.card-img-bg { position: absolute; inset: 0; background: url('https://images.unsplash.com/photo-1542397284385-6010376c5337?q=80&w=800'); background-size: cover; transition: transform 0.5s; }\n.card-img:hover .card-img-bg { transform: scale(1.1); }\n.card-img-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.9), transparent); }\n.card-img-content { position: absolute; bottom: 0; padding: 1.5rem; }`}
                        />
                    </div>
                    <CardImageOverlay />
                </div>

                {/* 7. Floating */}
                <div className="w-full flex flex-col gap-2 items-center bg-slate-100 p-8 rounded-2xl relative group/card">
                    <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/card:opacity-100 transition-opacity">
                        <CopyButton 
                            jsxCode={`export const CardFloating = () => (\n  <div className="w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">\n    <div className="h-24 bg-indigo-600 flex items-center justify-center">\n      <svg className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>\n    </div>\n    <div className="p-6">\n      <h3 className="text-lg font-bold text-gray-800">Design Tools</h3>\n      <p className="text-gray-500 text-sm">Access premium resources for your project.</p>\n    </div>\n  </div>\n);`}
                            htmlCode={`<div class="card-float">\n  <div class="card-float-header">🎨</div>\n  <div class="card-float-body">\n    <h3>Design Tools</h3>\n    <p>Access premium resources for your project.</p>\n  </div>\n</div>`}
                            cssCode={`.card-float { background: #fff; border-radius: 0.75rem; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); transition: all 0.3s; color: #1f2937; overflow: hidden; }\n.card-float:hover { transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }\n.card-float-header { height: 6rem; background: #4f46e5; display: flex; align-items: center; justify-content: center; font-size: 2rem; }\n.card-float-body { padding: 1.5rem; }`}
                        />
                    </div>
                    <CardFloating />
                </div>

                {/* 8. Cyberpunk */}
                <div className="w-full flex flex-col gap-2 items-center bg-gray-950 p-8 rounded-2xl relative group/card">
                    <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/card:opacity-100 transition-opacity">
                        <CopyButton 
                            jsxCode={`export const CardCyberpunk = () => (\n  <div className="w-full max-w-sm relative p-[1px] rounded-2xl bg-gradient-to-br from-cyan-500 to-fuchsia-500">\n    <div className="bg-gray-900 rounded-2xl p-6 h-full relative overflow-hidden">\n      <h3 className="text-white font-bold text-xl mb-1 mt-4">CYBER CARD</h3>\n      <p className="text-gray-400 text-xs mb-6 uppercase">Futuristic • Glow</p>\n      <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">\n        <div className="w-2/3 h-full bg-gradient-to-r from-cyan-500 to-fuchsia-500"></div>\n      </div>\n    </div>\n  </div>\n);`}
                            htmlCode={`<div class="cyber-wrap">\n  <div class="cyber-inner">\n    <h3>CYBER CARD</h3>\n    <p>FUTURISTIC • GLOW</p>\n    <div class="cyber-bar"><div class="cyber-progress"></div></div>\n  </div>\n</div>`}
                            cssCode={`.cyber-wrap { padding: 1px; background: linear-gradient(135deg, #06b6d4, #d946ef); border-radius: 1rem; position: relative; }\n.cyber-inner { background: #111827; padding: 1.5rem; border-radius: 1rem; color: #fff; }\n.cyber-bar { width: 100%; height: 4px; background: #1f2937; border-radius: 2px; margin-top: 1rem; overflow: hidden; }\n.cyber-progress { width: 67%; height: 100%; background: linear-gradient(to right, #06b6d4, #d946ef); }`}
                        />
                    </div>
                    <CardCyberpunk />
                </div>

                {/* 9. Profile */}
                <div className="w-full flex flex-col gap-2 items-center glass-card p-8 rounded-2xl relative group/card">
                    <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/card:opacity-100 transition-opacity">
                        <CopyButton 
                            jsxCode={`export const CardProfile = () => (\n  <div className="w-full max-w-sm bg-white rounded-3xl p-6 text-center shadow-lg border border-gray-100">\n    <img className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-md" src="https://i.pravatar.cc/150?img=32" />\n    <h3 className="text-lg font-bold text-gray-800">Sarah Jenkins</h3>\n    <p className="text-gray-500 text-sm mb-6">Product Designer</p>\n    <button className="w-full py-2 rounded-full bg-gray-900 text-white font-medium">Follow</button>\n  </div>\n);`}
                            htmlCode={`<div class="card-profile">\n  <img class="profile-img" src="avatar.jpg" />\n  <h3>Sarah Jenkins</h3>\n  <p>Product Designer</p>\n  <button class="btn-profile">Follow</button>\n</div>`}
                            cssCode={`.card-profile { background: #fff; padding: 2rem; border-radius: 2rem; text-align: center; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); border: 1px solid #f3f4f6; }\n.profile-img { width: 6rem; height: 6rem; border-radius: 50%; margin-bottom: 1rem; border: 4px solid #fff; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }\n.btn-profile { width: 100%; padding: 0.5rem; border-radius: 2rem; background: #111827; color: #fff; border: none; font-weight: 500; cursor: pointer; }`}
                        />
                    </div>
                    <CardProfile />
                </div>

                {/* 10. Stack */}
                <div className="w-full flex flex-col gap-2 items-center glass-card p-8 rounded-2xl relative group/card">
                    <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/card:opacity-100 transition-opacity">
                        <CopyButton 
                            jsxCode={`export const CardStack = () => (\n  <div className="w-full max-w-sm relative group">\n    <div className="absolute top-4 left-4 w-full h-full bg-blue-200 rounded-2xl -z-10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>\n    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">\n      <h4 className="font-bold text-gray-800">New Message</h4>\n      <p className="text-sm text-gray-500 mb-3">You have a new project invitation.</p>\n      <button className="text-xs font-semibold text-blue-600">Reply</button>\n    </div>\n  </div>\n);`}
                            htmlCode={`<div class="stack-card-wrap">\n  <div class="stack-bg"></div>\n  <div class="stack-main">\n    <h4>New Message</h4>\n    <p>You have a new project invitation.</p>\n    <a href="#">Reply</a>\n  </div>\n</div>`}
                            cssCode={`.stack-card-wrap { position: relative; width: 100%; max-width: 320px; }\n.stack-bg { position: absolute; inset: 0; top: 1rem; left: 1rem; background: #bfdbfe; border-radius: 1rem; z-index: -1; transition: transform 0.3s; }\n.stack-card-wrap:hover .stack-bg { transform: translate(4px, 4px); }\n.stack-main { background: #fff; padding: 1.5rem; border-radius: 1rem; border: 1px solid #f3f4f6; color: #1f2937; }`}
                        />
                    </div>
                    <CardStack />
                </div>

            </div>
        </div>
    </div>
  );
};

export default Cards;