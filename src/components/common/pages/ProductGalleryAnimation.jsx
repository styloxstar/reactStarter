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
const Styles = () => (
  <style>{`
    .perspective-1000 { perspective: 1000px; }
    .preserve-3d { transform-style: preserve-3d; }
    .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }

    @keyframes spinX { from { transform: rotateX(0deg); } to { transform: rotateX(360deg); } }
    .cylinder-anim { animation: spinX 20s linear infinite; }
    .cylinder-anim:hover { animation-play-state: paused; }

    .flip-card { perspective: 1000px; }
    .flip-card-inner { position: relative; width: 100%; height: 100%; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); transform-style: preserve-3d; }
    .flip-card:hover .flip-card-inner { transform: rotateX(180deg); }
    .flip-card-front, .flip-card-back { position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden; border-radius: 0.75rem; overflow: hidden; }
    .flip-card-back { transform: rotateX(180deg); }

    @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    .marquee-anim { animation: marquee 10s linear infinite; }
    .marquee-anim:hover { animation-play-state: paused; }

    .coin-scene { perspective: 1000px; }
    .coin-inner { position: relative; width: 100%; height: 100%; transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); transform-style: preserve-3d; }
    .coin-scene:hover .coin-inner { transform: rotateY(180deg); }
    .coin-face { position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden; border-radius: 9999px; }
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

// --- 3. The X-Axis Flip Grid ---
export const GalleryFlip = () => (
  <div className="bg-gray-100 p-12 h-[500px] flex flex-col justify-center items-center">
    <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-12 text-center">03. 3D Flip Cards (Hover Me)</div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
      {products.slice(0, 3).map((p) => (
        <div key={p.id} className="flip-card h-80 w-full cursor-pointer">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-white shadow-xl">
              <img src={p.img} alt="" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">{p.price}</div>
            </div>
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
      <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-10 text-center">05. Smooth Cover Flow (Click Cards)</div>
      <div className="relative w-full max-w-4xl h-80 flex items-center justify-center perspective-1000">
        {products.map((p, i) => {
          const offset = i - active;
          const absOffset = Math.abs(offset);
          const isActive = offset === 0;
          return (
            <div key={p.id} onClick={() => setActive(i)}
              className="absolute w-56 h-72 rounded-xl shadow-xl overflow-hidden border border-gray-100 bg-white cursor-pointer"
              style={{
                transform: `translateX(${offset * 60}%) translateZ(${-absOffset * 150}px) rotateY(${offset * 45}deg)`,
                zIndex: 10 - absOffset,
                opacity: absOffset > 2 ? 0 : 1,
                transition: 'all 0.5s ease-out',
                left: 'calc(50% - 7rem)',
                filter: isActive ? 'none' : 'brightness(80%) grayscale(20%)'
              }}>
              <img src={p.img} className="w-full h-full object-cover pointer-events-none" alt="" />
              {isActive && <div className="absolute bottom-4 left-0 w-full text-center bg-white/90 p-2 backdrop-blur font-bold shadow-sm">{p.name}</div>}
            </div>
          );
        })}
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
    <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8 text-center sticky top-0 z-50 bg-white/90 backdrop-blur">08. Sticky Stack (Scroll Down)</div>
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

// --- 10. The Coin Spin ---
export const GalleryCoin = () => (
  <div className="bg-orange-50 h-[500px] flex flex-col items-center justify-center">
    <div className="text-orange-300 text-xs font-bold uppercase tracking-widest mb-16">10. 3D Coin Spin (Hover Me)</div>
    <div className="coin-scene w-64 h-64 cursor-pointer">
      <div className="coin-inner">
        <div className="coin-face overflow-hidden shadow-2xl bg-white border-[12px] border-orange-200">
          <img src={products[0].img} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="coin-face coin-back bg-white flex flex-col items-center justify-center p-6 text-center shadow-2xl border-[12px] border-orange-200">
          <h3 className="text-xl font-black text-slate-900 uppercase mb-2">{products[0].name}</h3>
          <p className="text-orange-500 font-bold text-2xl">{products[0].price}</p>
        </div>
      </div>
    </div>
    <div className="mt-12 text-gray-400 text-sm animate-bounce font-medium">Hover to Flip</div>
  </div>
);

// --- MAIN GALLERY ---
const ProductGalleryAnimation = () => (
  <div className="container overflow-y-auto bg-white font-sans p-8 pb-40">
    <Styles />
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter italic uppercase">Animation_Vault</h1>
      <p className="text-slate-500 font-medium italic">High-fidelity 3D product showcases for modern architects.</p>
    </div>

    <div className="space-y-32 max-w-6xl mx-auto">
      {/* 01. Cylinder */}
      <section className="relative group/anim p-4 border-2 border-transparent hover:border-slate-100 rounded-3xl transition-all">
        <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/anim:opacity-100 transition-opacity">
          <CopyButton 
            jsxCode={`import React from 'react';
const products = [
  { id: 1, name: "Neural Deck", price: "$299", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500" },
  { id: 2, name: "Cyber Kicks", price: "$140", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500" },
  { id: 3, name: "Flux Headset", price: "$350", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500" },
  { id: 4, name: "Titan Watch", price: "$850", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500" },
  { id: 5, name: "Lens Pro", price: "$1200", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500" },
  { id: 6, name: "Echo Bot", price: "$99", img: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=500" },
];
export const GalleryCylinder = () => (
  <div className="bg-slate-900 h-[500px] flex items-center justify-center overflow-hidden perspective-1000">
    <div className="relative w-64 h-48 preserve-3d animate-[spin_20s_linear_infinite]">
      {products.map((p, i) => (
        <div key={p.id} className="absolute inset-0 backface-visible border-2 border-cyan-500/20 bg-black/80 rounded-xl overflow-hidden"
          style={{ transform: \`rotateX(\${(360/products.length)*i}deg) translateZ(250px)\` }}>
          <img src={p.img} className="w-full h-32 object-cover" />
          <div className="p-3 text-white font-bold text-sm">{p.name}</div>
        </div>
      ))}
    </div>
  </div>
);`}
            htmlCode={`<div class="cylinder-gallery">
  <div class="cylinder-track">
    <div class="cylinder-item" style="transform: rotateX(0deg) translateZ(250px)">
      <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500" />
      <div class="info">Neural Deck</div>
    </div>
    <div class="cylinder-item" style="transform: rotateX(60deg) translateZ(250px)">
      <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500" />
      <div class="info">Cyber Kicks</div>
    </div>
    <div class="cylinder-item" style="transform: rotateX(120deg) translateZ(250px)">
      <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500" />
      <div class="info">Flux Headset</div>
    </div>
    <div class="cylinder-item" style="transform: rotateX(180deg) translateZ(250px)">
      <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500" />
      <div class="info">Titan Watch</div>
    </div>
    <div class="cylinder-item" style="transform: rotateX(240deg) translateZ(250px)">
      <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500" />
      <div class="info">Lens Pro</div>
    </div>
    <div class="cylinder-item" style="transform: rotateX(300deg) translateZ(250px)">
      <img src="https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=500" />
      <div class="info">Echo Bot</div>
    </div>
  </div>
</div>`}
            cssCode={`.cylinder-gallery { background: #0f172a; height: 500px; display: flex; align-items: center; justify-content: center; overflow: hidden; perspective: 1000px; font-family: sans-serif; }
.cylinder-track { position: relative; width: 16rem; height: 12rem; transform-style: preserve-3d; animation: spin 20s linear infinite; }
@keyframes spin { from { transform: rotateX(0deg); } to { transform: rotateX(360deg); } }
.cylinder-item { position: absolute; inset: 0; background: rgba(0,0,0,0.8); border: 2px solid rgba(6,182,212,0.2); border-radius: 1rem; overflow: hidden; }
.cylinder-item img { width: 100%; height: 8rem; object-fit: cover; }
.info { color: white; font-weight: 700; padding: 0.75rem; text-align: center; }`}
          />
        </div>
        <GalleryCylinder />
      </section>

      {/* 02. Inertia */}
      <section className="relative group/anim p-4 border-2 border-transparent hover:border-slate-100 rounded-3xl transition-all">
        <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/anim:opacity-100 transition-opacity">
          <CopyButton 
            jsxCode={`import React, { useRef, useEffect } from 'react';
export const GalleryInertia = () => {
  const ref = useRef();
  const physics = useRef({ cur: 0, tar: 0, down: false, x: 0 });
  useEffect(() => {
    const loop = () => {
      physics.current.cur += (physics.current.tar - physics.current.cur) * 0.1;
      if (ref.current) ref.current.style.transform = \`rotateY(\${physics.current.cur}deg)\`;
      requestAnimationFrame(loop);
    };
    loop();
  }, []);
  return (
    <div className="bg-black h-[500px] flex items-center justify-center perspective-1000 cursor-grab"
      onMouseDown={e => { physics.current.down = true; physics.current.x = e.pageX; }}
      onMouseUp={() => physics.current.down = false}
      onMouseMove={e => { if(physics.current.down) { physics.current.tar += (e.pageX - physics.current.x) * 0.5; physics.current.x = e.pageX; } }}>
      <div ref={ref} className="relative w-48 h-64 preserve-3d">
        {[1,2,3,4,5,6].map((p, i) => (
          <div key={i} className="absolute inset-0 bg-white rounded-lg shadow-2xl overflow-hidden backface-hidden"
            style={{ transform: \`rotateY(\${i * 60}deg) translateZ(200px)\` }}>
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};`}
            htmlCode={`<div class="inertia-root">
  <div class="inertia-track">
    <div class="inertia-item" style="transform: rotateY(0deg) translateZ(200px)"><img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500" /></div>
    <div class="inertia-item" style="transform: rotateY(60deg) translateZ(200px)"><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500" /></div>
    <div class="inertia-item" style="transform: rotateY(120deg) translateZ(200px)"><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500" /></div>
    <div class="inertia-item" style="transform: rotateY(180deg) translateZ(200px)"><img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500" /></div>
    <div class="inertia-item" style="transform: rotateY(240deg) translateZ(200px)"><img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500" /></div>
    <div class="inertia-item" style="transform: rotateY(300deg) translateZ(200px)"><img src="https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=500" /></div>
  </div>
</div>`}
            cssCode={`.inertia-root { background: black; height: 500px; display: flex; align-items: center; justify-content: center; perspective: 1000px; cursor: grab; }
.inertia-track { position: relative; width: 12rem; height: 16rem; transform-style: preserve-3d; }
.inertia-item { position: absolute; inset: 0; background: white; border-radius: 0.5rem; overflow: hidden; backface-visibility: hidden; }
.inertia-item img { width: 100%; height: 100%; object-fit: cover; }`}
            jsCode={`const root = document.querySelector('.inertia-root');
const track = document.querySelector('.inertia-track');
let cur = 0, tar = 0, down = false, x = 0;
root.addEventListener('mousedown', e => { down = true; x = e.pageX; });
window.addEventListener('mouseup', () => down = false);
window.addEventListener('mousemove', e => { if(down) { tar += (e.pageX - x) * 0.5; x = e.pageX; } });
(function loop() { cur += (tar - cur) * 0.1; track.style.transform = 'rotateY(' + cur + 'deg)'; requestAnimationFrame(loop); })();`}
          />
        </div>
        <GalleryInertia />
      </section>

      {/* 03. Flip */}
      <section className="relative group/anim p-4 border-2 border-transparent hover:border-slate-100 rounded-3xl transition-all">
        <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/anim:opacity-100 transition-opacity">
          <CopyButton 
            jsxCode={`export const GalleryFlip = () => (
  <div className="bg-gray-100 p-12 grid grid-cols-3 gap-8">
    {[1,2,3].map(i => (
      <div key={i} className="group [perspective:1000px] h-80">
        <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
          <div className="absolute inset-0 bg-white"><img src="..." className="h-full w-full object-cover" /></div>
          <div className="absolute inset-0 h-full w-full bg-black [transform:rotateX(180deg)] [backface-visibility:hidden]">Back</div>
        </div>
      </div>
    ))}
  </div>
);`}
            htmlCode={`<div class="flip-gallery">
  <div class="flip-card">
    <div class="flip-inner">
      <div class="flip-front"><img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500" /></div>
      <div class="flip-back">Neural Deck</div>
    </div>
  </div>
  <div class="flip-card">
    <div class="flip-inner">
      <div class="flip-front"><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500" /></div>
      <div class="flip-back">Cyber Kicks</div>
    </div>
  </div>
  <div class="flip-card">
    <div class="flip-inner">
      <div class="flip-front"><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500" /></div>
      <div class="flip-back">Flux Headset</div>
    </div>
  </div>
</div>`}
            cssCode={`.flip-gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; background: #f3f4f6; padding: 3rem; }
.flip-card { perspective: 1000px; height: 20rem; }
.flip-inner { position: relative; width: 100%; height: 100%; transition: transform 0.6s; transform-style: preserve-3d; }
.flip-card:hover .flip-inner { transform: rotateX(180deg); }
.flip-front, .flip-back { position: absolute; inset: 0; backface-visibility: hidden; border-radius: 1rem; overflow: hidden; }
.flip-back { background: #0f172a; color: white; display: flex; align-items: center; justify-content: center; transform: rotateX(180deg); font-weight: 700; }
.flip-front img { width: 100%; height: 100%; object-fit: cover; }`}
          />
        </div>
        <GalleryFlip />
      </section>

      {/* 04. Fan */}
      <section className="relative group/anim p-4 border-2 border-transparent hover:border-slate-100 rounded-3xl transition-all">
        <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/anim:opacity-100 transition-opacity">
          <CopyButton 
            jsxCode={`export const GalleryFan = () => (
  <div className="bg-indigo-900 h-[500px] flex items-end justify-center pb-12">
    {[0,1,2,3,4].map(i => (
      <div key={i} className="w-40 h-60 bg-white rounded-xl shadow-2xl origin-bottom transition-transform hover:-translate-y-20 hover:scale-110"
        style={{ transform: \`rotate(\${-30 + (i * 15)}deg)\`, marginLeft: i === 0 ? 0 : -100 }}>
        <img src="..." className="w-full h-full object-cover" />
      </div>
    ))}
  </div>
);`}
            htmlCode={`<div class="fan-box">
  <div class="fan-item" style="transform: rotate(-30deg); z-index: 0;"><img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500" /></div>
  <div class="fan-item" style="transform: rotate(-15deg); margin-left: -100px; z-index: 1;"><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500" /></div>
  <div class="fan-item" style="transform: rotate(0deg); margin-left: -100px; z-index: 2;"><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500" /></div>
  <div class="fan-item" style="transform: rotate(15deg); margin-left: -100px; z-index: 3;"><img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500" /></div>
  <div class="fan-item" style="transform: rotate(30deg); margin-left: -100px; z-index: 4;"><img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500" /></div>
</div>`}
            cssCode={`.fan-box { background: #312e81; height: 500px; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 3rem; overflow: hidden; }
.fan-item { width: 10rem; height: 15rem; background: white; border-radius: 1rem; border: 4px solid white; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); origin-bottom center; transition: all 0.3s; cursor: pointer; }
.fan-item:hover { transform: translateY(-80px) scale(1.1) rotate(0deg) !important; z-index: 50 !important; }
.fan-item img { width: 100%; height: 100%; object-fit: cover; border-radius: 0.5rem; }`}
          />
        </div>
        <GalleryFan />
      </section>

      {/* 05. Coverflow */}
      <section className="relative group/anim p-4 border-2 border-transparent hover:border-slate-100 rounded-3xl transition-all">
        <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/anim:opacity-100 transition-opacity">
          <CopyButton 
            jsxCode={`export const GalleryCoverflow = () => {
  const [active, setActive] = useState(2);
  return (
    <div className="bg-white h-[500px] flex items-center justify-center perspective-1000">
      {[0,1,2,3,4].map(i => (
        <div key={i} onClick={() => setActive(i)}
          className="absolute w-56 h-72 rounded-xl transition-all duration-500 cursor-pointer"
          style={{ transform: \`translateX(\${(i-active)*60}%) translateZ(\${-Math.abs(i-active)*150}px) rotateY(\${(i-active)*45}deg)\` }}>
          <img src="..." className="w-full h-full object-cover rounded-xl" />
        </div>
      ))}
    </div>
  );
};`}
            htmlCode={`<div class="coverflow">
  <div class="cf-item" style="transform: translateX(-120%) translateZ(-300px) rotateY(-90deg);"><img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500" /></div>
  <div class="cf-item" style="transform: translateX(-60%) translateZ(-150px) rotateY(-45deg);"><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500" /></div>
  <div class="cf-item active" style="transform: translateX(0%) translateZ(0px) rotateY(0deg);"><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500" /></div>
  <div class="cf-item" style="transform: translateX(60%) translateZ(-150px) rotateY(45deg);"><img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500" /></div>
  <div class="cf-item" style="transform: translateX(120%) translateZ(-300px) rotateY(90deg);"><img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500" /></div>
</div>`}
            cssCode={`.coverflow { background: white; height: 500px; display: flex; align-items: center; justify-content: center; perspective: 1000px; overflow: hidden; }
.cf-item { position: absolute; width: 14rem; height: 18rem; border-radius: 1rem; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); transition: all 0.5s ease-out; cursor: pointer; }
.cf-item img { width: 100%; height: 100%; object-fit: cover; border-radius: 1rem; }`}
            jsCode={`const items = document.querySelectorAll('.cf-item');
items.forEach((item, i) => {
  item.addEventListener('click', () => {
    items.forEach((el, j) => {
      const offset = j - i;
      el.style.transform = 'translateX(' + (offset * 60) + '%) translateZ(' + (-Math.abs(offset) * 150) + 'px) rotateY(' + (offset * 45) + 'deg)';
    });
  });
});`}
          />
        </div>
        <GalleryCoverflow />
      </section>

      {/* 06. Tilt */}
      <section className="relative group/anim p-4 border-2 border-transparent hover:border-slate-100 rounded-3xl transition-all">
        <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/anim:opacity-100 transition-opacity">
          <CopyButton 
            jsxCode={`export const GalleryTilt = () => (
  <div className="grid grid-cols-3 gap-8 p-12">
    {[1,2,3].map(i => (
      <div key={i} className="perspective-1000 h-80" 
        onMouseMove={e => {
          const box = e.currentTarget.getBoundingClientRect();
          const rX = (e.clientY - box.top - box.height/2) / 10;
          const rY = (box.width/2 - (e.clientX - box.left)) / 10;
          e.currentTarget.firstChild.style.transform = \`rotateX(\${rX}deg) rotateY(\${rY}deg)\`;
        }}
        onMouseLeave={e => e.currentTarget.firstChild.style.transform = 'rotateX(0deg) rotateY(0deg)'}>
        <div className="h-full w-full bg-white rounded-2xl shadow-xl transition-transform duration-100 border overflow-hidden">
          <img src="..." className="w-full h-56 object-cover" />
        </div>
      </div>
    ))}
  </div>
);`}
            htmlCode={`<div class="tilt-grid">
  <div class="tilt-card" onmousemove="tilt(event, this)" onmouseleave="untilt(this)"><img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500" /></div>
  <div class="tilt-card" onmousemove="tilt(event, this)" onmouseleave="untilt(this)"><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500" /></div>
  <div class="tilt-card" onmousemove="tilt(event, this)" onmouseleave="untilt(this)"><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500" /></div>
</div>`}
            cssCode={`.tilt-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; padding: 3rem; background: #f8fafc; }
.tilt-card { perspective: 1000px; height: 20rem; background: white; border-radius: 1rem; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); overflow: hidden; transition: transform 0.1s ease-out; }
.tilt-card img { width: 100%; height: 100%; object-fit: cover; }`}
            jsCode={`function tilt(e, el) {
  const box = el.getBoundingClientRect();
  const rX = (e.clientY - box.top - box.height/2) / 10;
  const rY = (box.width/2 - (e.clientX - box.left)) / 10;
  el.style.transform = 'rotateX(' + rX + 'deg) rotateY(' + rY + 'deg)';
}
function untilt(el) { el.style.transform = 'rotateX(0deg) rotateY(0deg)'; }`}
          />
        </div>
        <GalleryTilt />
      </section>

      {/* 07. Cube */}
      <section className="relative group/anim p-4 border-2 border-transparent hover:border-slate-100 rounded-3xl transition-all">
        <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/anim:opacity-100 transition-opacity">
          <CopyButton 
            jsxCode={`export const GalleryCube = () => {
  const [side, setSide] = useState(0);
  return (
    <div className="bg-gray-900 h-[500px] flex flex-col items-center justify-center perspective-1000">
      <div className="relative w-64 h-64 transition-transform duration-700 preserve-3d" style={{ transform: \`rotateY(\${side*-90}deg)\` }}>
        {[0,1,2,3].map(i => (
          <div key={i} className="absolute inset-0 bg-white border-4" style={{ transform: \`rotateY(\${i*90}deg) translateZ(128px)\` }}>
            <img src="..." className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="mt-12 flex gap-2">
        {[0,1,2,3].map(i => <button key={i} onClick={() => setSide(i)} className="w-3 h-3 rounded-full bg-gray-500" />)}
      </div>
    </div>
  );
};`}
            htmlCode={`<div class="cube-container">
  <div class="cube" id="cube">
    <div class="face" style="transform: rotateY(0deg) translateZ(128px)"><img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500" /></div>
    <div class="face" style="transform: rotateY(90deg) translateZ(128px)"><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500" /></div>
    <div class="face" style="transform: rotateY(180deg) translateZ(128px)"><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500" /></div>
    <div class="face" style="transform: rotateY(270deg) translateZ(128px)"><img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500" /></div>
  </div>
</div>`}
            cssCode={`.cube-container { background: #111827; height: 500px; display: flex; align-items: center; justify-content: center; perspective: 1000px; }
.cube { position: relative; width: 16rem; height: 16rem; transform-style: preserve-3d; transition: transform 0.7s; }
.face { position: absolute; inset: 0; background: white; border: 4px solid #e5e7eb; overflow: hidden; }
.face img { width: 100%; height: 100%; object-fit: cover; }`}
            jsCode={`let side = 0; setInterval(() => { side = (side + 1) % 4; document.getElementById('cube').style.transform = 'rotateY(' + (side * -90) + 'deg)'; }, 3000);`}
          />
        </div>
        <GalleryCube />
      </section>

      {/* 08. Stacked */}
      <section className="relative group/anim p-4 border-2 border-transparent hover:border-slate-100 rounded-3xl transition-all">
        <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/anim:opacity-100 transition-opacity">
          <CopyButton 
            jsxCode={`export const GalleryStacked = () => (
  <div className="h-[500px] overflow-y-auto p-8 space-y-8">
    {[1,2,3,4].map((p, i) => (
      <div key={i} className="sticky top-20 bg-white rounded-2xl shadow-xl flex" style={{ top: \`\${80 + i*10}px\` }}>
        <img src="..." className="w-32 h-32 object-cover" />
        <div className="p-6 font-bold text-xl">Product Name</div>
      </div>
    ))}
  </div>
);`}
            htmlCode={`<div class="stack-box">
  <div class="stack-card" style="top: 80px;"><img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500" /></div>
  <div class="stack-card" style="top: 90px;"><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500" /></div>
  <div class="stack-card" style="top: 100px;"><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500" /></div>
  <div class="stack-card" style="top: 110px;"><img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500" /></div>
</div>`}
            cssCode={`.stack-box { background: white; height: 500px; overflow-y: auto; padding: 2rem; border-radius: 1.5rem; border: 1px solid #f3f4f6; }
.stack-card { background: white; border-radius: 1rem; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); border: 1px solid #e5e7eb; margin-bottom: 2rem; position: sticky; display: flex; overflow: hidden; }
.stack-card img { width: 8rem; height: 8rem; object-fit: cover; }`}
          />
        </div>
        <GalleryStacked />
      </section>

      {/* 09. Marquee */}
      <section className="relative group/anim p-4 border-2 border-transparent hover:border-slate-100 rounded-3xl transition-all">
        <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/anim:opacity-100 transition-opacity">
          <CopyButton 
            jsxCode={`export const GalleryMarquee = () => (
  <div className="bg-black h-[500px] flex items-center overflow-hidden">
    <div className="flex gap-8 animate-[marquee_10s_linear_infinite] w-max">
      {[...products, ...products].map((p, i) => (
        <div key={i} className="w-72 h-96 bg-gray-800 rounded-xl overflow-hidden -skew-x-6">
          <img src={p.img} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  </div>
);`}
            htmlCode={`<div class="marquee-scene">
  <div class="marquee-list">
    <div class="m-item"><img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500" /></div>
    <div class="m-item"><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500" /></div>
    <div class="m-item"><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500" /></div>
  </div>
</div>`}
            cssCode={`.marquee-scene { background: black; height: 500px; display: flex; align-items: center; overflow: hidden; }
.marquee-list { display: flex; gap: 2rem; animation: scroll 10s linear infinite; width: max-content; }
@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.m-item { width: 18rem; height: 24rem; background: #1f2937; rounded: 1rem; overflow: hidden; transform: skewX(-6deg); transition: transform 0.3s; }
.m-item:hover { transform: skewX(0deg); }
.m-item img { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; }
.m-item:hover img { opacity: 1; }`}
          />
        </div>
        <GalleryMarquee />
      </section>

      {/* 10. Coin */}
      <section className="relative group/anim p-4 border-2 border-transparent hover:border-slate-100 rounded-3xl transition-all">
        <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/anim:opacity-100 transition-opacity">
          <CopyButton 
            jsxCode={`export const GalleryCoin = () => (
  <div className="bg-orange-50 h-[500px] flex items-center justify-center">
    <div className="group [perspective:1000px] w-64 h-64">
      <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 rounded-full border-[12px] border-orange-200 overflow-hidden"><img src="..." className="h-full w-full object-cover" /></div>
        <div className="absolute inset-0 bg-white rounded-full border-[12px] border-orange-200 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">Back</div>
      </div>
    </div>
  </div>
);`}
            htmlCode={`<div class="coin-box">
  <div class="coin">
    <div class="coin-front"><img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500" /></div>
    <div class="coin-back">Neural Deck</div>
  </div>
</div>`}
            cssCode={`.coin-box { background: #fff7ed; height: 500px; display: flex; align-items: center; justify-content: center; }
.coin { position: relative; width: 16rem; height: 16rem; transition: transform 0.8s; transform-style: preserve-3d; cursor: pointer; perspective: 1000px; }
.coin:hover { transform: rotateY(180deg); }
.coin-front, .coin-back { position: absolute; inset: 0; backface-visibility: hidden; border-radius: 50%; border: 12px solid #fed7aa; overflow: hidden; }
.coin-back { background: white; transform: rotateY(180deg); display: flex; align-items: center; justify-content: center; font-weight: 900; color: #111827; }
.coin-front img { width: 100%; height: 100%; object-fit: cover; }`}
          />
        </div>
        <GalleryCoin />
      </section>
    </div>
  </div>
);

export default ProductGalleryAnimation;