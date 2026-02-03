import React, { useState } from 'react';

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
        
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase">01. Classic Grayscale</span>
          <FilterGrayscale />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase">02. Blur Reveal</span>
          <FilterBlur />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase">03. Vintage Sepia</span>
          <FilterVintage />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase">04. Night Vision</span>
          <FilterNightVision />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase">05. Pop Art</span>
          <FilterPopArt />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase">06. Glitch Invert</span>
          <FilterGlitch />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase">07. Darkroom</span>
          <FilterDarkroom />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase">08. Duotone</span>
          <FilterDuotone />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase">09. Frosted Glass</span>
          <FilterFrost />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase">10. X-Ray</span>
          <FilterXRay />
        </div>

      </div>
    </div>
  );
};

export default Filters;