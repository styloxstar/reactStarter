import React, { useState, useRef, useEffect } from 'react';
import CopyButton from '../CopyButton';

// --- Shared Data ---
const products = [
  { id: 1, name: "Neural Deck", price: "$299", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500" },
  { id: 2, name: "Cyber Kicks", price: "$140", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500" },
  { id: 3, name: "Flux Headset", price: "$350", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500" },
  { id: 4, name: "Titan Watch", price: "$850", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500" },
  { id: 5, name: "Lens Pro", price: "$1200", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500" },
  { id: 6, name: "Echo Bot", price: "$99", img: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=500" },
];

// --- CRITICAL: CSS STYLES ---
// This component injects the raw CSS required for 3D transforms
const Styles = () => (
  <style>{`
    /* --- SHARED 3D UTILS --- */
    .perspective-1000 { perspective: 1000px; }
    .preserve-3d { transform-style: preserve-3d; }
    .backface-hidden { 
      backface-visibility: hidden; 
      -webkit-backface-visibility: hidden; 
    }

    /* --- COMPONENT 1: CYLINDER --- */
    @keyframes spinX { 
      from { transform: rotateX(0deg); } 
      to { transform: rotateX(360deg); } 
    }
    .cylinder-anim { animation: spinX 20s linear infinite; }
    .cylinder-anim:hover { animation-play-state: paused; }

    /* --- COMPONENT 3: FLIP CARD --- */
    .flip-card { perspective: 1000px; }
    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      transform-style: preserve-3d;
    }
    .flip-card:hover .flip-card-inner { transform: rotateX(180deg); }
    
    /* The Front and Back need absolute positioning to overlap */
    .flip-card-front, .flip-card-back {
      position: absolute;
      top: 0; 
      left: 0;
      width: 100%; 
      height: 100%;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      border-radius: 0.75rem; /* rounded-xl */
      overflow: hidden;
    }
    /* The Back starts rotated so it appears correct when flipped */
    .flip-card-back { transform: rotateX(180deg); }

    /* --- COMPONENT 9: MARQUEE --- */
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .marquee-anim { animation: marquee 10s linear infinite; }
    .marquee-anim:hover { animation-play-state: paused; }

    /* --- COMPONENT 10: COIN --- */
    .coin-scene { perspective: 1000px; }
    .coin-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transform-style: preserve-3d;
    }
    .coin-scene:hover .coin-inner { transform: rotateY(180deg); }
    
    .coin-face {
      position: absolute;
      inset: 0;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      border-radius: 9999px; /* rounded-full */
    }
    .coin-back { transform: rotateY(180deg); }
  `}</style>
);

// --- 1. The Infinite Cylinder ---
export const GalleryCylinder = () => (
  <div className="bg-slate-900 h-[500px] flex flex-col items-center justify-center overflow-hidden perspective-1000">
    <div className="text-white/30 text-xs font-bold uppercase tracking-widest mb-10">01. Infinite Cylinder</div>
    <div className="relative w-64 h-48 preserve-3d cylinder-anim">
      {products.map((p, i) => {
        const angle = (360 / products.length) * i;
        return (
          <div key={p.id} className="absolute inset-0 backface-visible border-2 border-cyan-500/20 bg-black/80 rounded-xl overflow-hidden"
            style={{ transform: `rotateX(${angle}deg) translateZ(250px)` }}>
            <img src={p.img} className="w-full h-32 object-cover" alt="" />
            <div className="p-3"><div className="text-white font-bold text-sm">{p.name}</div><div className="text-cyan-400 text-xs">{p.price}</div></div>
          </div>
        );
      })}
    </div>
  </div>
);

// --- 2. The Inertia Spinner ---
export const GalleryInertia = () => {
  const containerRef = useRef(null);
  const physics = useRef({ current: 0, target: 0, isDown: false, startX: 0 });

  useEffect(() => {
    let frame;
    const loop = () => {
      physics.current.current += (physics.current.target - physics.current.current) * 0.1;
      if (containerRef.current) containerRef.current.style.transform = `rotateY(${physics.current.current}deg)`;
      frame = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(frame);
  }, []);

  const start = (e) => { physics.current.isDown = true; physics.current.startX = e.pageX || e.touches[0].pageX; };
  const end = () => { physics.current.isDown = false; };
  const move = (e) => {
    if (!physics.current.isDown) return;
    const x = e.pageX || e.touches[0].pageX;
    physics.current.target += (x - physics.current.startX) * 0.5;
    physics.current.startX = x;
  };

  return (
    <div className="bg-black h-[500px] flex flex-col items-center justify-center overflow-hidden perspective-1000 cursor-grab active:cursor-grabbing select-none"
      onMouseDown={start} onMouseUp={end} onMouseMove={move} onMouseLeave={end} onTouchStart={start} onTouchEnd={end} onTouchMove={move}>
      <div className="text-white/30 text-xs font-bold uppercase tracking-widest mb-10">02. Drag to Spin</div>
      <div ref={containerRef} className="relative w-48 h-64 preserve-3d">
        {products.map((p, i) => (
          <div key={p.id} className="absolute inset-0 bg-white rounded-lg shadow-2xl overflow-hidden backface-hidden"
            style={{ transform: `rotateY(${i * (360 / products.length)}deg) translateZ(200px)` }}>
            <img src={p.img} className="w-full h-full object-cover pointer-events-none" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 3. The X-Axis Flip Grid (FIXED) ---
const GalleryFlip = () => (
  <div className="bg-gray-100 p-12 h-[500px] flex flex-col justify-center items-center">
    <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-12 text-center">03. 3D Flip Cards (Hover Me)</div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
      {products.slice(0, 3).map((p) => (
        <div key={p.id} className="flip-card h-80 w-full cursor-pointer">
          <div className="flip-card-inner">
            {/* Front */}
            <div className="flip-card-front bg-white shadow-xl">
              <img src={p.img} alt="" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">{p.price}</div>
            </div>
            {/* Back */}
            <div className="flip-card-back bg-slate-900 flex flex-col items-center justify-center p-6 text-center border-2 border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
              <p className="text-slate-400 text-sm mb-6">High-performance gear.</p>
              <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-colors">View</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- 4. The Fan Deck ---
export const GalleryFan = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="bg-indigo-900 h-[500px] flex flex-col items-center justify-end pb-12 overflow-hidden">
      <div className="text-indigo-300 text-xs font-bold uppercase tracking-widest mb-24">04. The Fan Deck</div>
      <div className="relative w-full max-w-lg h-40 flex justify-center">
        {products.slice(0, 5).map((p, i) => (
          <div key={p.id} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
            className="absolute w-40 h-60 bg-white rounded-xl shadow-2xl border-4 border-white origin-bottom transition-all duration-300 ease-out cursor-pointer"
            style={{
              transform: hovered === i ? `rotate(${-30 + (i * 15)}deg) translateY(-80px) scale(1.1)` : `rotate(${-30 + (i * 15)}deg)`,
              zIndex: hovered === i ? 50 : i,
              left: `calc(50% - 5rem + ${(i - 2) * 30}px)`
            }}>
            <img src={p.img} className="w-full h-40 object-cover bg-gray-200 rounded-t-lg" alt="" />
            <div className="p-3 text-center"><div className="font-bold text-slate-900 text-sm">{p.name}</div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 5. The Coverflow ---
export const GalleryCoverflow = () => {
  const [active, setActive] = useState(2);

  return (
    <div className="bg-white h-[500px] flex flex-col items-center justify-center overflow-hidden">
      <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-10 text-center">
        05. Smooth Cover Flow (Click Cards)
      </div>
      
      {/* FIX: We apply 'perspective-1000' here to create the 3D space.
         The 'flex' centers the active item.
      */}
      <div className="relative w-full max-w-4xl h-80 flex items-center justify-center perspective-1000">
        {products.map((p, i) => {
          const offset = i - active;
          const absOffset = Math.abs(offset);
          const isActive = offset === 0;
          
          return (
            <div
              key={p.id}
              onClick={() => setActive(i)}
              className="absolute w-56 h-72 rounded-xl shadow-xl overflow-hidden border border-gray-100 bg-white cursor-pointer"
              style={{
                // FIX: Combine all transforms into one string for better GPU handling
                transform: `translateX(${offset * 60}%) translateZ(${-absOffset * 150}px) rotateY(${offset * 45}deg)`,
                zIndex: 10 - absOffset,
                opacity: absOffset > 2 ? 0 : 1, // Hide distant items for performance
                transition: 'transform 0.5s ease-out, opacity 0.5s ease-out, filter 0.5s ease-out', // Explicit transition
                left: 'calc(50% - 7rem)', // Center the absolute items (56 = 14rem / 2 = 7rem)
                filter: isActive ? 'none' : 'brightness(80%) grayscale(20%)'
              }}
            >
              <img src={p.img} className="w-full h-full object-cover pointer-events-none" alt="" />
              
              {isActive && (
                <div className="absolute bottom-4 left-0 w-full text-center bg-white/90 p-2 backdrop-blur font-bold shadow-sm">
                  {p.name}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Controls */}
      <div className="mt-8 flex gap-2">
        {products.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setActive(i)} 
            className={`w-2 h-2 rounded-full transition-all ${i === active ? 'bg-black w-6' : 'bg-gray-300'}`} 
          />
        ))}
      </div>
    </div>
  );
};

// --- 6. The Parallax Tilt ---
const TiltCard = ({ data }) => {
  const cardRef = useRef(null);
  const onMove = (e) => {
    const box = cardRef.current.getBoundingClientRect();
    const rX = ((e.clientY - box.top) - (box.height / 2)) / 10;
    const rY = ((box.width / 2) - (e.clientX - box.left)) / 10;
    cardRef.current.style.transform = `rotateX(${rX}deg) rotateY(${rY}deg)`;
  };
  return (
    <div className="perspective-1000 w-full h-80" onMouseMove={onMove} onMouseLeave={() => cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`}>
      <div ref={cardRef} className="w-full h-full bg-white rounded-2xl shadow-xl transition-transform duration-100 ease-out border border-gray-100 overflow-hidden preserve-3d">
        <img src={data.img} className="w-full h-56 object-cover" alt="" />
        <div className="p-6"><h3 className="font-bold text-lg">{data.name}</h3><p className="text-gray-500">{data.price}</p></div>
      </div>
    </div>
  );
};
export const GalleryTilt = () => (
  <div className="bg-slate-50 p-12 h-[500px] flex flex-col justify-center">
    <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8 text-center">06. Mouse Parallax</div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
      {products.slice(0, 3).map(p => <TiltCard key={p.id} data={p} />)}
    </div>
  </div>
);

// --- 7. The Rotating Cube ---
export const GalleryCube = () => {
  const [side, setSide] = useState(0);
  const cubeItems = products.slice(0, 4);
  return (
    <div className="bg-gray-900 h-[500px] flex flex-col items-center justify-center overflow-hidden perspective-1000">
      <div className="text-white/30 text-xs font-bold uppercase tracking-widest mb-16">07. The Product Cube</div>
      <div className="relative w-64 h-64 transition-transform duration-700 ease-in-out preserve-3d" style={{ transform: `rotateY(${side * -90}deg)` }}>
        {cubeItems.map((p, i) => (
          <div key={p.id} className="absolute inset-0 bg-white border-4 border-gray-200"
            style={{ transform: `rotateY(${i * 90}deg) translateZ(128px)`, opacity: 0.95 }}>
            <img src={p.img} className="w-full h-full object-cover" alt="" />
          </div>
        ))}
      </div>
      <div className="mt-16 flex gap-4">
        {cubeItems.map((_, i) => <button key={i} onClick={() => setSide(i)} className={`w-3 h-3 rounded-full transition-all ${i === side ? 'bg-cyan-500 w-8' : 'bg-gray-600'}`} />)}
      </div>
    </div>
  );
};

// --- 8. The Stacked Scroll ---
export const GalleryStacked = () => (
  <div className="bg-white h-[500px] overflow-y-auto relative p-8 scroll-smooth border border-gray-100 rounded-3xl">
    <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8 text-center sticky top-0 z-50">08. Sticky Stack (Scroll Down)</div>
    <div className="max-w-md mx-auto space-y-8 pb-20">
      {products.map((p, i) => (
        <div key={p.id} className="sticky top-20 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex" style={{ top: `${80 + (i * 10)}px` }}>
          <img src={p.img} className="w-32 h-32 object-cover" alt="" />
          <div className="p-6 flex flex-col justify-center"><h3 className="font-bold text-xl">{p.name}</h3><p className="text-blue-600 font-medium">{p.price}</p></div>
        </div>
      ))}
    </div>
  </div>
);

// --- 9. The Infinite Marquee ---
export const GalleryMarquee = () => (
  <div className="bg-black h-[500px] flex flex-col justify-center overflow-hidden">
    <div className="text-white/30 text-xs font-bold uppercase tracking-widest mb-12 text-center">09. Skew Marquee</div>
    <div className="flex gap-8 marquee-anim w-max">
      {[...products, ...products].map((p, i) => (
        <div key={i} className="w-72 h-96 bg-gray-800 rounded-xl overflow-hidden transform -skew-x-6 hover:skew-x-0 transition-transform duration-300 border border-gray-700">
          <img src={p.img} className="w-full h-3/4 object-cover opacity-80 hover:opacity-100 transition-opacity" alt="" />
          <div className="h-1/4 p-6 bg-gray-900 text-white"><h3 className="font-bold text-xl">{p.name}</h3><p className="text-gray-400">{p.price}</p></div>
        </div>
      ))}
    </div>
  </div>
);

// --- 10. The Coin Spin (FIXED) ---
export const GalleryCoin = () => (
  <div className="bg-orange-50 h-[500px] flex flex-col items-center justify-center">
    <div className="text-orange-300 text-xs font-bold uppercase tracking-widest mb-16">10. 3D Coin Spin (Hover Me)</div>
    
    <div className="coin-scene w-64 h-64 cursor-pointer">
      <div className="coin-inner">
        {/* Front */}
        <div className="coin-face overflow-hidden shadow-2xl bg-white border-[12px] border-orange-200">
          <img src={products[0].img} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none"></div>
        </div>
        {/* Back */}
        <div className="coin-face coin-back bg-white flex flex-col items-center justify-center p-6 text-center shadow-2xl border-[12px] border-orange-200">
          <h3 className="text-xl font-black text-slate-900 uppercase leading-none mb-2">{products[0].name}</h3>
          <p className="text-orange-500 font-bold text-2xl">{products[0].price}</p>
          <button className="mt-4 text-xs bg-black text-white px-6 py-2 rounded-full shadow-lg">Add to Cart</button>
        </div>
      </div>
    </div>
    
    <div className="mt-12 text-gray-400 text-sm animate-bounce font-medium">Hover to Flip</div>
  </div>
);

// --- MAIN EXPORT ---
const ProductGalleryAnimation = () => (
  <div className="container box-shadow overflow-y-auto bg-white font-sans p-8 pb-40">
    {/* RENDER STYLES HERE TO ACTIVATE ANIMATIONS */}
    <Styles />

      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Buttery Smooth Galleries</h1>
        <p className="text-slate-500">Fixed: 3D Animations for Flip Cards and Coins now work correctly.</p>
      </div>
      
      <div className="space-y-32 max-w-6xl mx-auto">
        <section className="box-shadow p-4 rounded-lg relative group/anim"><div className="absolute top-2 right-2 z-40 opacity-0 group-hover/anim:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-slate-900 h-[500px] flex flex-col items-center justify-center overflow-hidden perspective-1000">
    <div className="text-white/30 text-xs font-bold uppercase tracking-widest mb-10">01. Infinite Cylinder</div>
    <div className="relative w-64 h-48 preserve-3d cylinder-anim">
      {products.map((p, i) => {
        const angle = (360 / products.length) * i;
        return (
          <div key={p.id} className="absolute inset-0 backface-visible border-2 border-cyan-500/20 bg-black/80 rounded-xl overflow-hidden"
            style={{ transform: \`rotateX(\${angle}deg) translateZ(250px)\` }}>
            <img src={p.img} className="w-full h-32 object-cover" alt="" />
            <div className="p-3"><div className="text-white font-bold text-sm">{p.name}</div><div className="text-cyan-400 text-xs">{p.price}</div></div>
          </div>
        );
      })}
    </div>
  </div>`} htmlCode={`<div class="bg-slate-900 h-[500px] flex flex-col items-center justify-center overflow-hidden perspective-1000">
    <div class="text-white/30 text-xs font-bold uppercase tracking-widest mb-10">01. Infinite Cylinder</div>
    <div class="relative w-64 h-48 preserve-3d cylinder-anim">
      ... class="absolute inset-0 backface-visible border-2 border-cyan-500/20 bg-black/80 rounded-xl overflow-hidden"
            style=...deg) translateZ(250px)\` }}>
            <img src=... class="w-full h-32 object-cover" alt="" />
            <div class="p-3"><div class="text-white font-bold text-sm">...</div><div class="text-cyan-400 text-xs">...</div></div>
          </div>
        );
      })}
    </div>
  </div>`} cssCode={`/* GalleryCylinder Component Styles */\n\n/* \n   This component is built using Tailwind CSS utility classes.\n   To use it as Vanilla CSS, you will need to: \n   1. Add tailwind.css to your project, OR\n   2. Convert these classes to standard CSS rules.\n*/\n\n.component-wrapper {\n  /* Add your custom styles here */\n}`} /></div><GalleryCylinder /></section>
        <section className="box-shadow p-4 rounded-lg relative group/anim"><div className="absolute top-2 right-2 z-40 opacity-0 group-hover/anim:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-black h-[500px] flex flex-col items-center justify-center overflow-hidden perspective-1000 cursor-grab active:cursor-grabbing select-none"
      onMouseDown={start} onMouseUp={end} onMouseMove={move} onMouseLeave={end} onTouchStart={start} onTouchEnd={end} onTouchMove={move}>
      <div className="text-white/30 text-xs font-bold uppercase tracking-widest mb-10">02. Drag to Spin</div>
      <div ref={containerRef} className="relative w-48 h-64 preserve-3d">
        {products.map((p, i) => (
          <div key={p.id} className="absolute inset-0 bg-white rounded-lg shadow-2xl overflow-hidden backface-hidden"
            style={{ transform: \`rotateY(\${i * (360 / products.length)}deg) translateZ(200px)\` }}>
            <img src={p.img} className="w-full h-full object-cover pointer-events-none" alt="" />
          </div>
        )`} htmlCode={`<div class="bg-black h-[500px] flex flex-col items-center justify-center overflow-hidden perspective-1000 cursor-grab active:cursor-grabbing select-none"
      onMouseDown=... onMouseUp=... onMouseMove=... onMouseLeave=... onTouchStart=... onTouchEnd=... onTouchMove=...>
      <div class="text-white/30 text-xs font-bold uppercase tracking-widest mb-10">02. Drag to Spin</div>
      <div ref=... class="relative w-48 h-64 preserve-3d">
        <!-- Mapping Start -->
(
          <div key=... class="absolute inset-0 bg-white rounded-lg shadow-2xl overflow-hidden backface-hidden"
            style=...deg) translateZ(200px)\` }}>
            <img src=... class="w-full h-full object-cover pointer-events-none" alt="" />
          </div>
        )`} cssCode={`/* GalleryInertia Component Styles */\n\n/* \n   This component is built using Tailwind CSS utility classes.\n   To use it as Vanilla CSS, you will need to: \n   1. Add tailwind.css to your project, OR\n   2. Convert these classes to standard CSS rules.\n*/\n\n.component-wrapper {\n  /* Add your custom styles here */\n}`} /></div><GalleryInertia /></section>
        <section className="box-shadow p-4 rounded-lg relative group/anim"><div className="absolute top-2 right-2 z-40 opacity-0 group-hover/anim:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-gray-100 p-12 h-[500px] flex flex-col justify-center items-center">
    <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-12 text-center">03. 3D Flip Cards (Hover Me)</div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
      {products.slice(0, 3).map((p) => (
        <div key={p.id} className="flip-card h-80 w-full cursor-pointer">
          <div className="flip-card-inner">
            {/* Front */}
            <div className="flip-card-front bg-white shadow-xl">
              <img src={p.img} alt="" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">{p.price}</div>
            </div>
            {/* Back */}
            <div className="flip-card-back bg-slate-900 flex flex-col items-center justify-center p-6 text-center border-2 border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
              <p className="text-slate-400 text-sm mb-6">High-performance gear.</p>
              <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-colors">View</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>`} htmlCode={`<div class="bg-gray-100 p-12 h-[500px] flex flex-col justify-center items-center">
    <div class="text-gray-400 text-xs font-bold uppercase tracking-widest mb-12 text-center">03. 3D Flip Cards (Hover Me)</div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
      <!-- Mapping Start -->
(
        <div key=... class="flip-card h-80 w-full cursor-pointer">
          <div class="flip-card-inner">
            ...
            <div class="flip-card-front bg-white shadow-xl">
              <img src=... alt="" class="w-full h-full object-cover" />
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">...</div>
            </div>
            ...
            <div class="flip-card-back bg-slate-900 flex flex-col items-center justify-center p-6 text-center border-2 border-slate-700">
              <h3 class="text-2xl font-bold text-white mb-2">...</h3>
              <p class="text-slate-400 text-sm mb-6">High-performance gear.</p>
              <button class="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-colors">View</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>`} cssCode={`/* GalleryFlip Component Styles */\n\n/* \n   This component is built using Tailwind CSS utility classes.\n   To use it as Vanilla CSS, you will need to: \n   1. Add tailwind.css to your project, OR\n   2. Convert these classes to standard CSS rules.\n*/\n\n.component-wrapper {\n  /* Add your custom styles here */\n}`} /></div><GalleryFlip /></section>
        <section className="box-shadow p-4 rounded-lg relative group/anim"><div className="absolute top-2 right-2 z-40 opacity-0 group-hover/anim:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-indigo-900 h-[500px] flex flex-col items-center justify-end pb-12 overflow-hidden">
      <div className="text-indigo-300 text-xs font-bold uppercase tracking-widest mb-24">04. The Fan Deck</div>
      <div className="relative w-full max-w-lg h-40 flex justify-center">
        {products.slice(0, 5`} htmlCode={`<div class="bg-indigo-900 h-[500px] flex flex-col items-center justify-end pb-12 overflow-hidden">
      <div class="text-indigo-300 text-xs font-bold uppercase tracking-widest mb-24">04. The Fan Deck</div>
      <div class="relative w-full max-w-lg h-40 flex justify-center">
        {products.slice(0, 5`} cssCode={`/* GalleryFan Component Styles */\n\n/* \n   This component is built using Tailwind CSS utility classes.\n   To use it as Vanilla CSS, you will need to: \n   1. Add tailwind.css to your project, OR\n   2. Convert these classes to standard CSS rules.\n*/\n\n.component-wrapper {\n  /* Add your custom styles here */\n}`} /></div><GalleryFan /></section>
        <section className="box-shadow p-4 rounded-lg relative group/anim"><div className="absolute top-2 right-2 z-40 opacity-0 group-hover/anim:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-white h-[500px] flex flex-col items-center justify-center overflow-hidden">
      <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-10 text-center">
        05. Smooth Cover Flow (Click Cards`} htmlCode={`<div class="bg-white h-[500px] flex flex-col items-center justify-center overflow-hidden">
      <div class="text-gray-400 text-xs font-bold uppercase tracking-widest mb-10 text-center">
        05. Smooth Cover Flow (Click Cards`} cssCode={`/* GalleryCoverflow Component Styles */\n\n/* \n   This component is built using Tailwind CSS utility classes.\n   To use it as Vanilla CSS, you will need to: \n   1. Add tailwind.css to your project, OR\n   2. Convert these classes to standard CSS rules.\n*/\n\n.component-wrapper {\n  /* Add your custom styles here */\n}`} /></div><GalleryCoverflow /></section>
        <section className="box-shadow p-4 rounded-lg relative group/anim"><div className="absolute top-2 right-2 z-40 opacity-0 group-hover/anim:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-slate-50 p-12 h-[500px] flex flex-col justify-center">
    <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8 text-center">06. Mouse Parallax</div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
      {products.slice(0, 3).map(p => <TiltCard key={p.id} data={p} />)}
    </div>
  </div>`} htmlCode={`<div class="bg-slate-50 p-12 h-[500px] flex flex-col justify-center">
    <div class="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8 text-center">06. Mouse Parallax</div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
      ... data=... />)}
    </div>
  </div>`} cssCode={`/* GalleryTilt Component Styles */\n\n/* \n   This component is built using Tailwind CSS utility classes.\n   To use it as Vanilla CSS, you will need to: \n   1. Add tailwind.css to your project, OR\n   2. Convert these classes to standard CSS rules.\n*/\n\n.component-wrapper {\n  /* Add your custom styles here */\n}`} /></div><GalleryTilt /></section>
        <section className="box-shadow p-4 rounded-lg relative group/anim"><div className="absolute top-2 right-2 z-40 opacity-0 group-hover/anim:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-gray-900 h-[500px] flex flex-col items-center justify-center overflow-hidden perspective-1000">
      <div className="text-white/30 text-xs font-bold uppercase tracking-widest mb-16">07. The Product Cube</div>
      <div className="relative w-64 h-64 transition-transform duration-700 ease-in-out preserve-3d" style={{ transform: \`rotateY(\${side * -90}deg`} htmlCode={`<div class="bg-gray-900 h-[500px] flex flex-col items-center justify-center overflow-hidden perspective-1000">
      <div class="text-white/30 text-xs font-bold uppercase tracking-widest mb-16">07. The Product Cube</div>
      <div class="relative w-64 h-64 transition-transform duration-700 ease-in-out preserve-3d" style=...deg`} cssCode={`/* GalleryCube Component Styles */\n\n/* \n   This component is built using Tailwind CSS utility classes.\n   To use it as Vanilla CSS, you will need to: \n   1. Add tailwind.css to your project, OR\n   2. Convert these classes to standard CSS rules.\n*/\n\n.component-wrapper {\n  /* Add your custom styles here */\n}`} /></div><GalleryCube /></section>
        <section className="box-shadow p-4 rounded-lg relative group/anim"><div className="absolute top-2 right-2 z-40 opacity-0 group-hover/anim:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-white h-[500px] overflow-y-auto relative p-8 scroll-smooth border border-gray-100 rounded-3xl">
    <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8 text-center sticky top-0 z-50">08. Sticky Stack (Scroll Down)</div>
    <div className="max-w-md mx-auto space-y-8 pb-20">
      {products.map((p, i) => (
        <div key={p.id} className="sticky top-20 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex" style={{ top: \`\${80 + (i * 10)}px\` }}>
          <img src={p.img} className="w-32 h-32 object-cover" alt="" />
          <div className="p-6 flex flex-col justify-center"><h3 className="font-bold text-xl">{p.name}</h3><p className="text-blue-600 font-medium">{p.price}</p></div>
        </div>
      ))}
    </div>
  </div>`} htmlCode={`<div class="bg-white h-[500px] overflow-y-auto relative p-8 scroll-smooth border border-gray-100 rounded-3xl">
    <div class="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8 text-center sticky top-0 z-50">08. Sticky Stack (Scroll Down)</div>
    <div class="max-w-md mx-auto space-y-8 pb-20">
      <!-- Mapping Start -->
(
        <div key=... class="sticky top-20 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex" style=...px\` }}>
          <img src=... class="w-32 h-32 object-cover" alt="" />
          <div class="p-6 flex flex-col justify-center"><h3 class="font-bold text-xl">...</h3><p class="text-blue-600 font-medium">...</p></div>
        </div>
      ))}
    </div>
  </div>`} cssCode={`/* GalleryStacked Component Styles */\n\n/* \n   This component is built using Tailwind CSS utility classes.\n   To use it as Vanilla CSS, you will need to: \n   1. Add tailwind.css to your project, OR\n   2. Convert these classes to standard CSS rules.\n*/\n\n.component-wrapper {\n  /* Add your custom styles here */\n}`} /></div><GalleryStacked /></section>
        <section className="box-shadow p-4 rounded-lg relative group/anim"><div className="absolute top-2 right-2 z-40 opacity-0 group-hover/anim:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-black h-[500px] flex flex-col justify-center overflow-hidden">
    <div className="text-white/30 text-xs font-bold uppercase tracking-widest mb-12 text-center">09. Skew Marquee</div>
    <div className="flex gap-8 marquee-anim w-max">
      {[...products, ...products].map((p, i) => (
        <div key={i} className="w-72 h-96 bg-gray-800 rounded-xl overflow-hidden transform -skew-x-6 hover:skew-x-0 transition-transform duration-300 border border-gray-700">
          <img src={p.img} className="w-full h-3/4 object-cover opacity-80 hover:opacity-100 transition-opacity" alt="" />
          <div className="h-1/4 p-6 bg-gray-900 text-white"><h3 className="font-bold text-xl">{p.name}</h3><p className="text-gray-400">{p.price}</p></div>
        </div>
      ))}
    </div>
  </div>`} htmlCode={`<div class="bg-black h-[500px] flex flex-col justify-center overflow-hidden">
    <div class="text-white/30 text-xs font-bold uppercase tracking-widest mb-12 text-center">09. Skew Marquee</div>
    <div class="flex gap-8 marquee-anim w-max">
      <!-- Mapping Start -->
(
        <div key=... class="w-72 h-96 bg-gray-800 rounded-xl overflow-hidden transform -skew-x-6 hover:skew-x-0 transition-transform duration-300 border border-gray-700">
          <img src=... class="w-full h-3/4 object-cover opacity-80 hover:opacity-100 transition-opacity" alt="" />
          <div class="h-1/4 p-6 bg-gray-900 text-white"><h3 class="font-bold text-xl">...</h3><p class="text-gray-400">...</p></div>
        </div>
      ))}
    </div>
  </div>`} cssCode={`/* GalleryMarquee Component Styles */\n\n/* \n   This component is built using Tailwind CSS utility classes.\n   To use it as Vanilla CSS, you will need to: \n   1. Add tailwind.css to your project, OR\n   2. Convert these classes to standard CSS rules.\n*/\n\n.component-wrapper {\n  /* Add your custom styles here */\n}`} /></div><GalleryMarquee /></section>
        <section className="box-shadow p-4 rounded-lg relative group/anim"><div className="absolute top-2 right-2 z-40 opacity-0 group-hover/anim:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-orange-50 h-[500px] flex flex-col items-center justify-center">
    <div className="text-orange-300 text-xs font-bold uppercase tracking-widest mb-16">10. 3D Coin Spin (Hover Me)</div>
    
    <div className="coin-scene w-64 h-64 cursor-pointer">
      <div className="coin-inner">
        {/* Front */}
        <div className="coin-face overflow-hidden shadow-2xl bg-white border-[12px] border-orange-200">
          <img src={products[0].img} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none"></div>
        </div>
        {/* Back */}
        <div className="coin-face coin-back bg-white flex flex-col items-center justify-center p-6 text-center shadow-2xl border-[12px] border-orange-200">
          <h3 className="text-xl font-black text-slate-900 uppercase leading-none mb-2">{products[0].name}</h3>
          <p className="text-orange-500 font-bold text-2xl">{products[0].price}</p>
          <button className="mt-4 text-xs bg-black text-white px-6 py-2 rounded-full shadow-lg">Add to Cart</button>
        </div>
      </div>
    </div>
    
    <div className="mt-12 text-gray-400 text-sm animate-bounce font-medium">Hover to Flip</div>
  </div>`} htmlCode={`<div class="bg-orange-50 h-[500px] flex flex-col items-center justify-center">
    <div class="text-orange-300 text-xs font-bold uppercase tracking-widest mb-16">10. 3D Coin Spin (Hover Me)</div>
    
    <div class="coin-scene w-64 h-64 cursor-pointer">
      <div class="coin-inner">
        ...
        <div class="coin-face overflow-hidden shadow-2xl bg-white border-[12px] border-orange-200">
          <img src=... class="w-full h-full object-cover" alt="" />
          <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none"></div>
        </div>
        ...
        <div class="coin-face coin-back bg-white flex flex-col items-center justify-center p-6 text-center shadow-2xl border-[12px] border-orange-200">
          <h3 class="text-xl font-black text-slate-900 uppercase leading-none mb-2">...</h3>
          <p class="text-orange-500 font-bold text-2xl">...</p>
          <button class="mt-4 text-xs bg-black text-white px-6 py-2 rounded-full shadow-lg">Add to Cart</button>
        </div>
      </div>
    </div>
    
    <div class="mt-12 text-gray-400 text-sm animate-bounce font-medium">Hover to Flip</div>
  </div>`} cssCode={`/* GalleryCoin Component Styles */\n\n/* \n   This component is built using Tailwind CSS utility classes.\n   To use it as Vanilla CSS, you will need to: \n   1. Add tailwind.css to your project, OR\n   2. Convert these classes to standard CSS rules.\n*/\n\n.component-wrapper {\n  /* Add your custom styles here */\n}`} /></div><GalleryCoin /></section>
      </div>
    </div>
  );
;    

export default ProductGalleryAnimation;