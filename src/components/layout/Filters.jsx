import React, { useState } from 'react';
import CopyButton from '../common/CopyButton';

// Shared Image
const IMG_SRC = "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop";

// --- 1. The Classic (Grayscale to Color) ---
export const FilterGrayscale = () => (
  <div className="group relative w-full h-64 overflow-hidden rounded-xl">
    <img 
      src={IMG_SRC} 
      alt="Grayscale" 
      className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
    />
    <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Revealed
    </div>
  </div>
);

// --- 2. The Focus Reveal (Blur) ---
export const FilterBlur = () => (
  <div className="group relative w-full h-64 overflow-hidden rounded-xl">
    <img 
      src={IMG_SRC} 
      alt="Blur" 
      className="w-full h-full object-cover blur-[4px] transition-all duration-700 group-hover:blur-0"
    />
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <span className="text-white font-bold text-2xl tracking-widest uppercase transition-opacity duration-500 group-hover:opacity-0 shadow-black drop-shadow-lg">
        Hover Me
      </span>
    </div>
  </div>
);

// --- 3. The Vintage (Sepia & Contrast) ---
export const FilterVintage = () => (
  <div className="group relative w-full h-64 overflow-hidden rounded-xl border-4 border-white shadow-lg bg-[#fdfbf7]">
    <img 
      src={IMG_SRC} 
      alt="Vintage" 
      className="w-full h-full object-cover sepia-[.8] contrast-125 brightness-90 transition-all duration-500 group-hover:sepia-0 group-hover:contrast-100 group-hover:brightness-100"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/30 to-transparent mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity"></div>
  </div>
);

// --- 4. The Night Vision (Green Hue) ---
export const FilterNightVision = () => (
  <div className="relative w-full h-64 overflow-hidden rounded-xl bg-black border-2 border-green-500 group">
    <img 
      src={IMG_SRC} 
      alt="Night Vision" 
      className="w-full h-full object-cover grayscale contrast-150 brightness-125 mix-blend-hard-light"
    />
    <div className="absolute inset-0 bg-green-500/20 mix-blend-multiply pointer-events-none"></div>
    {/* Scanlines */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-10"></div>
    
    <div className="absolute top-2 left-2 text-green-500 font-mono text-xs font-bold animate-pulse">REC ●</div>
  </div>
);

// --- 5. The Pop Art (Saturate & Hue) ---
export const FilterPopArt = () => (
  <div className="group relative w-full h-64 overflow-hidden rounded-xl">
    <img 
      src={IMG_SRC} 
      alt="Pop Art" 
      className="w-full h-full object-cover saturate-0 brightness-125 contrast-125 transition-all duration-500 group-hover:saturate-200 group-hover:hue-rotate-90"
    />
    {/* Halftone Pattern Overlay */}
    <div className="absolute inset-0 bg-[radial-gradient(circle,black_1px,transparent_1px)] bg-[size:4px_4px] opacity-20 pointer-events-none"></div>
  </div>
);

// --- 6. The Glitch (Invert) ---
export const FilterGlitch = () => (
  <div className="group relative w-full h-64 overflow-hidden rounded-xl bg-black">
    <img 
      src={IMG_SRC} 
      alt="Glitch" 
      className="w-full h-full object-cover relative z-10 group-hover:invert transition-all duration-100"
    />
    {/* Fake Chromatic Aberration on Hover */}
    <div 
      className="absolute inset-0 bg-red-500 mix-blend-screen opacity-0 group-hover:opacity-50 group-hover:translate-x-1 transition-all duration-100 z-0"
      style={{ backgroundImage: `url(${IMG_SRC})`, backgroundSize: 'cover' }}
    ></div>
    <div 
      className="absolute inset-0 bg-blue-500 mix-blend-screen opacity-0 group-hover:opacity-50 group-hover:-translate-x-1 transition-all duration-100 z-0"
      style={{ backgroundImage: `url(${IMG_SRC})`, backgroundSize: 'cover' }}
    ></div>
  </div>
);

// --- 7. The Darkroom (Brightness) ---
export const FilterDarkroom = () => (
  <div className="group relative w-full h-64 overflow-hidden rounded-xl bg-black">
    <img 
      src={IMG_SRC} 
      alt="Darkroom" 
      className="w-full h-full object-cover opacity-40 brightness-50 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:brightness-100"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center group-hover:scale-150 group-hover:border-transparent transition-all duration-500">
        <span className="text-white/50 text-xs uppercase tracking-widest group-hover:hidden">Develop</span>
      </div>
    </div>
  </div>
);

// --- 8. The Duotone (Mix Blend Mode) ---
export const FilterDuotone = () => (
  <div className="group relative w-full h-64 overflow-hidden rounded-xl bg-indigo-900">
    <img 
      src={IMG_SRC} 
      alt="Duotone" 
      className="w-full h-full object-cover mix-blend-screen grayscale contrast-150 transition-all duration-500 group-hover:mix-blend-normal group-hover:grayscale-0"
    />
    <div className="absolute inset-0 bg-pink-500 mix-blend-multiply opacity-80 group-hover:opacity-0 transition-opacity duration-500"></div>
    <div className="absolute bottom-4 right-4 text-white font-black text-4xl opacity-50 mix-blend-overlay group-hover:opacity-0 transition-opacity">DUO</div>
  </div>
);

// --- 9. The Frosted Glass (Backdrop Filter) ---
export const FilterFrost = () => (
  <div className="relative w-full h-64 overflow-hidden rounded-xl" style={{ backgroundImage: `url(${IMG_SRC})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    {/* We use a div for the background image so we can put a frosted pane over it */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-4/5 h-1/2 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl flex items-center justify-center group cursor-pointer transition-all duration-300 hover:backdrop-blur-none hover:bg-black/40">
        <h3 className="text-white font-bold text-xl drop-shadow-md group-hover:scale-110 transition-transform">Glass Pane</h3>
      </div>
    </div>
  </div>
);

// --- 10. The X-Ray (Invert + Grayscale) ---
export const FilterXRay = () => (
  <div className="group relative w-full h-64 overflow-hidden rounded-xl border-4 border-black bg-black">
    <img 
      src={IMG_SRC} 
      alt="X-Ray" 
      className="w-full h-full object-cover transition-all duration-300 group-hover:invert group-hover:grayscale group-hover:contrast-125"
    />
    <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_linear_infinite] shadow-[0_0_15px_cyan]"></div>
    <div className="absolute bottom-2 left-2 font-mono text-xs text-cyan-400 opacity-0 group-hover:opacity-100">SCANNING...</div>
  </div>
);


// --- Main Gallery Layout ---
const Filters = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-50 p-8 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">CSS Filters</h1>
        <p className="text-slate-500">Pure CSS image manipulation effects using Tailwind utilities.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        <div className="flex flex-col gap-2 relative group/flt">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/flt:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="group relative w-full h-64 overflow-hidden rounded-xl">\n  <img src="..." className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" />\n</div>`} htmlCode={`<div class="filter-grayscale"><img src="..." /></div>`} cssCode={`.filter-grayscale { position: relative; width: 100%; height: 16rem; overflow: hidden; border-radius: 0.75rem; }
.filter-grayscale img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); transition: all 0.5s; }
.filter-grayscale:hover img { filter: grayscale(0); transform: scale(1.05); }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase">01. Classic Grayscale</span>
          <FilterGrayscale />
        </div>

        <div className="flex flex-col gap-2 relative group/flt">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/flt:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="group relative w-full h-64 overflow-hidden rounded-xl">\n  <img src="..." className="w-full h-full object-cover blur-[4px] transition-all duration-700 group-hover:blur-0" />\n  <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl group-hover:opacity-0">Hover Me</span>\n</div>`} htmlCode={`<div class="filter-blur"><img src="..." /><span>Hover Me</span></div>`} cssCode={`.filter-blur { position: relative; width: 100%; height: 16rem; overflow: hidden; border-radius: 0.75rem; }
.filter-blur img { width: 100%; height: 100%; object-fit: cover; filter: blur(4px); transition: all 0.7s; }
.filter-blur:hover img { filter: blur(0); }
.filter-blur span { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 700; font-size: 1.5rem; transition: opacity 0.5s; }
.filter-blur:hover span { opacity: 0; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase">02. Blur Reveal</span>
          <FilterBlur />
        </div>

        <div className="flex flex-col gap-2 relative group/flt">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/flt:opacity-100 transition-opacity"><CopyButton jsxCode={`// Vintage sepia filter with warm overlay`} htmlCode={`<div class="filter-vintage"><img src="..." /><div class="overlay"></div></div>`} cssCode={`.filter-vintage { position: relative; width: 100%; height: 16rem; overflow: hidden; border-radius: 0.75rem; border: 4px solid #fff; box-shadow: 0 10px 15px rgba(0,0,0,0.1); }
.filter-vintage img { width: 100%; height: 100%; object-fit: cover; filter: sepia(80%) contrast(125%) brightness(90%); transition: all 0.5s; }
.filter-vintage:hover img { filter: none; }
.filter-vintage .overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(120,53,15,0.3), transparent); mix-blend-mode: overlay; pointer-events: none; transition: opacity 0.5s; }
.filter-vintage:hover .overlay { opacity: 0; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase">03. Vintage Sepia</span>
          <FilterVintage />
        </div>

        <div className="flex flex-col gap-2 relative group/flt">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/flt:opacity-100 transition-opacity"><CopyButton jsxCode={`// Night vision effect with green overlay and scanlines`} htmlCode={`<div class="night-vision"><img src="..." /><div class="green-overlay"></div><div class="scanlines"></div><span>REC ●</span></div>`} cssCode={`.night-vision { position: relative; width: 100%; height: 16rem; overflow: hidden; border-radius: 0.75rem; background: #000; border: 2px solid #22c55e; }
.night-vision img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(150%) brightness(125%); mix-blend-mode: hard-light; }
.green-overlay { position: absolute; inset: 0; background: rgba(34,197,94,0.2); mix-blend-mode: multiply; pointer-events: none; }
.scanlines { position: absolute; inset: 0; background: repeating-linear-gradient(transparent, transparent 2px, rgba(0,0,0,0.25) 2px, rgba(0,0,0,0.25) 4px); pointer-events: none; z-index: 1; }
.night-vision span { position: absolute; top: 0.5rem; left: 0.5rem; color: #22c55e; font-family: monospace; font-size: 0.75rem; font-weight: 700; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase">04. Night Vision</span>
          <FilterNightVision />
        </div>

        <div className="flex flex-col gap-2 relative group/flt">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/flt:opacity-100 transition-opacity"><CopyButton jsxCode={`// Pop art saturate + hue rotate with halftone overlay`} htmlCode={`<div class="filter-pop"><img src="..." /><div class="halftone"></div></div>`} cssCode={`.filter-pop { position: relative; width: 100%; height: 16rem; overflow: hidden; border-radius: 0.75rem; }
.filter-pop img { width: 100%; height: 100%; object-fit: cover; filter: saturate(0) brightness(125%) contrast(125%); transition: all 0.5s; }
.filter-pop:hover img { filter: saturate(200%) hue-rotate(90deg); }
.halftone { position: absolute; inset: 0; background: radial-gradient(circle, #000 1px, transparent 1px); background-size: 4px 4px; opacity: 0.2; pointer-events: none; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase">05. Pop Art</span>
          <FilterPopArt />
        </div>

        <div className="flex flex-col gap-2 relative group/flt">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/flt:opacity-100 transition-opacity"><CopyButton jsxCode={`// Glitch invert effect with chromatic aberration layers`} htmlCode={`<div class="filter-glitch"><img src="..." /><div class="red-layer"></div><div class="blue-layer"></div></div>`} cssCode={`.filter-glitch { position: relative; width: 100%; height: 16rem; overflow: hidden; border-radius: 0.75rem; background: #000; }
.filter-glitch img { width: 100%; height: 100%; object-fit: cover; position: relative; z-index: 1; transition: filter 0.1s; }
.filter-glitch:hover img { filter: invert(100%); }
.red-layer, .blue-layer { position: absolute; inset: 0; background-size: cover; mix-blend-mode: screen; opacity: 0; transition: all 0.1s; }
.filter-glitch:hover .red-layer { opacity: 0.5; transform: translateX(4px); background-color: #ef4444; }
.filter-glitch:hover .blue-layer { opacity: 0.5; transform: translateX(-4px); background-color: #3b82f6; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase">06. Glitch Invert</span>
          <FilterGlitch />
        </div>

        <div className="flex flex-col gap-2 relative group/flt">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/flt:opacity-100 transition-opacity"><CopyButton jsxCode={`// Darkroom brightness reveal with expanding circle`} htmlCode={`<div class="filter-dark"><img src="..." /><div class="circle"><span>Develop</span></div></div>`} cssCode={`.filter-dark { position: relative; width: 100%; height: 16rem; overflow: hidden; border-radius: 0.75rem; background: #000; }
.filter-dark img { width: 100%; height: 100%; object-fit: cover; opacity: 0.4; filter: brightness(50%); transition: all 0.7s ease-in-out; }
.filter-dark:hover img { opacity: 1; filter: brightness(100%); }
.circle { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
.circle span { color: rgba(255,255,255,0.5); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase">07. Darkroom</span>
          <FilterDarkroom />
        </div>

        <div className="flex flex-col gap-2 relative group/flt">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/flt:opacity-100 transition-opacity"><CopyButton jsxCode={`// Duotone effect using mix-blend-mode and color layers`} htmlCode={`<div class="filter-duo"><img src="..." /><div class="color-layer"></div></div>`} cssCode={`.filter-duo { position: relative; width: 100%; height: 16rem; overflow: hidden; border-radius: 0.75rem; background: #312e81; }
.filter-duo img { width: 100%; height: 100%; object-fit: cover; mix-blend-mode: screen; filter: grayscale(100%) contrast(150%); transition: all 0.5s; }
.filter-duo:hover img { mix-blend-mode: normal; filter: none; }
.color-layer { position: absolute; inset: 0; background: #ec4899; mix-blend-mode: multiply; opacity: 0.8; pointer-events: none; transition: opacity 0.5s; }
.filter-duo:hover .color-layer { opacity: 0; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase">08. Duotone</span>
          <FilterDuotone />
        </div>

        <div className="flex flex-col gap-2 relative group/flt">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/flt:opacity-100 transition-opacity"><CopyButton jsxCode={`// Frosted glass pane using backdrop-filter blur`} htmlCode={`<div class="filter-frost" style="background-image:url(...)"><div class="glass-pane"><h3>Glass Pane</h3></div></div>`} cssCode={`.filter-frost { position: relative; width: 100%; height: 16rem; overflow: hidden; border-radius: 0.75rem; background-size: cover; background-position: center; }
.glass-pane { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
.glass-pane > div { width: 80%; height: 50%; background: rgba(255,255,255,0.1); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.2); border-radius: 0.75rem; box-shadow: 0 20px 25px rgba(0,0,0,0.15); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s; }
.glass-pane > div:hover { backdrop-filter: none; background: rgba(0,0,0,0.4); }
.glass-pane h3 { color: #fff; font-weight: 700; font-size: 1.25rem; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase">09. Frosted Glass</span>
          <FilterFrost />
        </div>

        <div className="flex flex-col gap-2 relative group/flt">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/flt:opacity-100 transition-opacity"><CopyButton jsxCode={`// X-Ray invert + grayscale effect with scanning animation`} htmlCode={`<div class="filter-xray"><img src="..." /><div class="scan-line"></div><span>SCANNING...</span></div>`} cssCode={`.filter-xray { position: relative; width: 100%; height: 16rem; overflow: hidden; border-radius: 0.75rem; border: 4px solid #000; background: #000; }
.filter-xray img { width: 100%; height: 100%; object-fit: cover; transition: all 0.3s; }
.filter-xray:hover img { filter: invert(100%) grayscale(100%) contrast(125%); }
.scan-line { position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: #22d3ee; opacity: 0; box-shadow: 0 0 15px cyan; }
.filter-xray:hover .scan-line { opacity: 1; animation: scan 2s linear infinite; }
@keyframes scan { from { top: 0; } to { top: 100%; } }
.filter-xray span { position: absolute; bottom: 0.5rem; left: 0.5rem; font-family: monospace; font-size: 0.75rem; color: #22d3ee; opacity: 0; }
.filter-xray:hover span { opacity: 1; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase">10. X-Ray</span>
          <FilterXRay />
        </div>

      </div>
    </div>
  );
};

export default Filters;