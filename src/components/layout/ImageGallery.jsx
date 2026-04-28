import React, { useState } from 'react';
import CopyButton from '../common/CopyButton';

// --- Shared Dummy Data ---
const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop", cat: "Nature", title: "Misty Forest" },
  { id: 2, src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800&auto=format&fit=crop", cat: "Nature", title: "Green Hills" },
  { id: 3, src: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=800&auto=format&fit=crop", cat: "Tech", title: "Data Center" },
  { id: 4, src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop", cat: "Tech", title: "Cyberpunk City" },
  { id: 5, src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop", cat: "Abstract", title: "Golden Waves" },
  { id: 6, src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop", cat: "Abstract", title: "Neon Fluids" },
];

// --- 1. The Bento Grid (Apple Style) ---
export const GalleryBento = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px] w-full max-w-4xl">
    {/* Large Hero */}
    <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group">
      <img src={images[0].src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
        <h3 className="text-white font-bold text-xl">{images[0].title}</h3>
      </div>
    </div>
    
    {/* Tall Item */}
    <div className="md:col-span-1 md:row-span-2 relative rounded-3xl overflow-hidden group">
      <img src={images[5].src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    </div>

    {/* Small Items */}
    <div className="relative rounded-3xl overflow-hidden group">
      <img src={images[2].src} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    </div>
    <div className="relative rounded-3xl overflow-hidden group">
      <img src={images[3].src} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    </div>

    {/* Wide Bottom */}
    <div className="md:col-span-2 relative rounded-3xl overflow-hidden group">
      <img src={images[4].src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
       <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/20">
         Featured
       </div>
    </div>
  </div>
);

// --- 2. The Masonry (Pinterest) ---
export const GalleryMasonry = () => (
  <div className="columns-1 md:columns-3 gap-4 space-y-4 w-full max-w-4xl mx-auto">
    {[...images, ...images].map((img, i) => (
      <div key={i} className="break-inside-avoid relative group rounded-xl overflow-hidden">
        <img src={img.src} alt="" className="w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View
          </button>
        </div>
      </div>
    ))}
  </div>
);

// --- 3. The Expanding Strips (Accordion) ---
export const GalleryExpanding = () => {
  return (
    <div className="flex w-full max-w-4xl h-96 gap-2">
      {images.slice(0, 5).map((img, i) => (
        <div 
          key={i} 
          className="relative flex-1 hover:flex-[3] transition-all duration-500 ease-in-out rounded-2xl overflow-hidden group cursor-pointer"
        >
          <img src={img.src} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors"></div>
          <div className="absolute bottom-4 left-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <h3 className="text-white font-bold text-lg drop-shadow-md">{img.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- 4. The Lightbox Grid ---
export const GalleryLightbox = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 w-full max-w-3xl">
        {images.map((img, i) => (
          <div 
            key={i} 
            onClick={() => setSelected(img)}
            className="aspect-square relative group overflow-hidden cursor-pointer"
          >
            <img src={img.src} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelected(null)}
        >
          <img 
            src={selected.src} 
            alt="" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-in zoom-in-95 duration-300" 
          />
          <button className="absolute top-4 right-4 text-white text-4xl">&times;</button>
        </div>
      )}
    </>
  );
};

// --- 5. The Glass Cards (Floating) ---
export const GalleryGlassCards = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
    {images.slice(0, 3).map((img, i) => (
      <div key={i} className="relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-2xl">
        <img src={img.src} alt="" className="w-full h-full object-cover" />
        
        {/* Glass Card */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl translate-y-24 group-hover:translate-y-0 transition-transform duration-300">
           <h3 className="text-white font-bold">{img.title}</h3>
           <p className="text-white/70 text-sm mt-1">Captured in high resolution.</p>
           <div className="mt-3 flex justify-between items-center">
             <span className="text-xs text-white/50">{img.cat}</span>
             <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
             </button>
           </div>
        </div>
      </div>
    ))}
  </div>
);

// --- 6. The Filterable Gallery ---
export const GalleryFilter = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Nature', 'Tech', 'Abstract'];
  
  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.cat === filter);

  return (
    <div className="w-full max-w-4xl flex flex-col items-center">
      {/* Filters */}
      <div className="flex gap-2 mb-8 p-1 bg-gray-100 rounded-lg">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              filter === cat 
              ? 'bg-white text-black shadow-sm' 
              : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {filteredImages.map((img) => (
          <div key={img.id} className="relative aspect-square rounded-xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <img src={img.src} alt="" className="w-full h-full object-cover" />
            <div className="absolute top-2 right-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm uppercase">
              {img.cat}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 7. The Horizontal Scroll (Parallax) ---
export const GalleryScroll = () => (
  <div className="w-full overflow-x-auto pb-4 hide-scrollbar cursor-grab active:cursor-grabbing">
    <div className="flex gap-4 min-w-max px-4">
      {images.map((img, i) => (
        <div key={i} className="relative w-72 h-96 rounded-2xl overflow-hidden flex-shrink-0 group">
          <img src={img.src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-6 left-6">
            <h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{`0${i+1}.`}</h3>
            <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{img.title}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- 8. The Polaroid Scatter (Brutalist) ---
export const GalleryPolaroid = () => (
  <div className="relative h-[500px] w-full max-w-3xl flex items-center justify-center">
    {images.slice(0, 4).map((img, i) => {
      const rotation = [ '-rotate-6', 'rotate-3', '-rotate-3', 'rotate-6' ][i];
      const zIndex = 10 + i;
      return (
        <div 
          key={i}
          className={`absolute w-64 bg-white p-3 pb-12 shadow-xl border border-gray-200 transition-transform duration-300 hover:scale-110 hover:z-50 cursor-pointer ${rotation}`}
          style={{ zIndex: zIndex, left: `${i * 15}%` }}
        >
          <div className="aspect-square bg-gray-100 overflow-hidden mb-2 filter sepia-[.3]">
             <img src={img.src} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="font-handwriting text-center text-gray-800 font-bold rotate-1">
             {img.title}
          </div>
        </div>
      );
    })}
  </div>
);

// --- 9. The Hexagon Grid (Masked) ---
export const GalleryHexagon = () => (
  <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
    {images.slice(0, 5).map((img, i) => (
      <div 
        key={i} 
        className="w-48 h-48 relative drop-shadow-xl transition-transform hover:scale-105 hover:z-10 -ml-8 first:ml-0"
        style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
      >
        <img src={img.src} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-indigo-600/20 hover:bg-transparent transition-colors"></div>
      </div>
    ))}
  </div>
);

// --- 10. The Cyberpunk Glitch ---
export const GalleryCyberpunk = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
    {images.slice(0, 3).map((img, i) => (
      <div key={i} className="relative group">
        {/* Background offset for glitch effect */}
        <div className="absolute inset-0 bg-cyan-500 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
        <div className="absolute inset-0 bg-pink-500 -translate-x-2 -translate-y-2 group-hover:-translate-x-3 group-hover:-translate-y-3 transition-transform"></div>
        
        {/* Main Image */}
        <div className="relative h-64 bg-gray-900 border-2 border-white overflow-hidden">
           <img src={img.src} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
           
           {/* UI Elements */}
           <div className="absolute top-0 left-0 bg-white text-black text-xs font-bold px-2 py-1">
             IMG_{i < 10 ? `0${i}` : i}
           </div>
           <div className="absolute bottom-0 right-0 bg-black text-white text-xs font-mono px-2 py-1 border-t border-l border-white">
             {img.title.toUpperCase()}
           </div>
        </div>
      </div>
    ))}
  </div>
);

// --- Main Layout ---
const ImageGallery = () => {
  return (
    <div className="container box-shadow overflow-auto bg-slate-50 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Modern Image Galleries</h1>
        <p className="text-slate-500">A collection of layouts for showcasing visual content.</p>
      </div>
      
      <div className="space-y-32 flex flex-col items-center">
        
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/ig">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/ig:opacity-100 transition-opacity"><CopyButton jsxCode={`// Bento grid gallery with hero, tall, small and wide items`} htmlCode={`<div class="bento"><div class="hero"><img src="..."/></div><div class="tall"><img src="..."/></div><div class="small"><img src="..."/></div></div>`} cssCode={`.bento { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; height: 600px; max-width: 56rem; }
.bento .hero { grid-column: span 2; grid-row: span 2; border-radius: 1.5rem; overflow: hidden; position: relative; }
.bento .tall { grid-row: span 2; border-radius: 1.5rem; overflow: hidden; }
.bento .small { border-radius: 1.5rem; overflow: hidden; }
.bento img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s; }
.bento > div:hover img { transform: scale(1.05); }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">01. Bento Grid</span>
          <GalleryBento />
        </div>

        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/ig">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/ig:opacity-100 transition-opacity"><CopyButton jsxCode={`// Pinterest-style masonry gallery with hover overlay and view button`} htmlCode={`<div class="masonry-gallery"><div class="item"><img src="..."/><div class="overlay"><button>View</button></div></div></div>`} cssCode={`.masonry-gallery { columns: 3; gap: 1rem; max-width: 56rem; }
.masonry-gallery .item { break-inside: avoid; position: relative; border-radius: 0.75rem; overflow: hidden; margin-bottom: 1rem; }
.masonry-gallery img { width: 100%; object-fit: cover; }
.overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.4); opacity: 0; display: flex; align-items: center; justify-content: center; transition: opacity 0.3s; }
.item:hover .overlay { opacity: 1; }
.overlay button { background: #fff; color: #000; padding: 0.5rem 1rem; border-radius: 9999px; font-weight: 700; font-size: 0.875rem; border: none; cursor: pointer; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">02. Masonry</span>
          <GalleryMasonry />
        </div>

        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/ig">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/ig:opacity-100 transition-opacity"><CopyButton jsxCode={`// Hover-expanding strips gallery with flex grow on hover`} htmlCode={`<div class="strips"><div class="strip"><img src="..."/><span>Title</span></div></div>`} cssCode={`.strips { display: flex; max-width: 56rem; height: 24rem; gap: 0.5rem; }
.strip { flex: 1; position: relative; border-radius: 1rem; overflow: hidden; cursor: pointer; transition: flex 0.5s ease-in-out; }
.strip:hover { flex: 3; }
.strip img { width: 100%; height: 100%; object-fit: cover; }
.strip span { position: absolute; bottom: 1rem; left: 1rem; color: #fff; font-weight: 700; font-size: 1.125rem; opacity: 0; transition: opacity 0.5s 0.1s; }
.strip:hover span { opacity: 1; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">03. Hover Expand</span>
          <GalleryExpanding />
        </div>

        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/ig">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/ig:opacity-100 transition-opacity"><CopyButton jsxCode={`// Lightbox grid with click-to-open full-screen modal`} htmlCode={`<div class="lightbox-grid"><div class="thumb" onclick="open()"><img src="..."/></div></div><div class="lightbox-modal"><img src="..."/><button>&times;</button></div>`} cssCode={`.lightbox-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.25rem; max-width: 48rem; }
.thumb { aspect-ratio: 1; overflow: hidden; cursor: pointer; }
.thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.thumb:hover img { transform: scale(1.1); }
.lightbox-modal { position: fixed; inset: 0; z-index: 50; background: rgba(0,0,0,0.9); display: flex; align-items: center; justify-content: center; padding: 1rem; }
.lightbox-modal img { max-width: 100%; max-height: 90vh; border-radius: 0.5rem; box-shadow: 0 25px 50px rgba(0,0,0,0.25); }
.lightbox-modal button { position: absolute; top: 1rem; right: 1rem; color: #fff; font-size: 2rem; background: none; border: none; cursor: pointer; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">04. Lightbox Grid</span>
          <GalleryLightbox />
        </div>

        <div className="w-full flex flex-col items-center bg-gray-900 p-12 rounded-3xl shadow relative group/ig">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/ig:opacity-100 transition-opacity"><CopyButton jsxCode={`// Glass cards with slide-up info overlay on hover`} htmlCode={`<div class="glass-cards"><div class="gc-card"><img src="..."/><div class="gc-info"><h3>Title</h3><p>Description</p></div></div></div>`} cssCode={`.glass-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; max-width: 64rem; }
.gc-card { position: relative; aspect-ratio: 3/4; border-radius: 1rem; overflow: hidden; box-shadow: 0 25px 50px rgba(0,0,0,0.25); }
.gc-card img { width: 100%; height: 100%; object-fit: cover; }
.gc-info { position: absolute; bottom: 1rem; left: 1rem; right: 1rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.2); padding: 1rem; border-radius: 0.75rem; transform: translateY(6rem); transition: transform 0.3s; }
.gc-card:hover .gc-info { transform: translateY(0); }
.gc-info h3 { color: #fff; font-weight: 700; }
.gc-info p { color: rgba(255,255,255,0.7); font-size: 0.875rem; }`} /></div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">05. Glass Cards</span>
          <GalleryGlassCards />
        </div>

        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/ig">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/ig:opacity-100 transition-opacity"><CopyButton jsxCode={`// Filterable gallery with category buttons and animated grid`} htmlCode={`<div class="filter-gallery"><div class="filter-bar"><button class="active">All</button><button>Nature</button></div><div class="grid"><div class="item"><img src="..."/></div></div></div>`} cssCode={`.filter-bar { display: flex; gap: 0.5rem; margin-bottom: 2rem; padding: 0.25rem; background: #f3f4f6; border-radius: 0.5rem; }
.filter-bar button { padding: 0.5rem 1rem; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; background: transparent; border: none; color: #6b7280; cursor: pointer; }
.filter-bar button.active { background: #fff; color: #000; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
.filter-gallery .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
.filter-gallery .item { aspect-ratio: 1; border-radius: 0.75rem; overflow: hidden; }
.filter-gallery img { width: 100%; height: 100%; object-fit: cover; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">06. Filterable</span>
          <GalleryFilter />
        </div>

        <div className="w-full flex flex-col items-center overflow-hidden box-shadow p-4 rounded-lg relative group/ig">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/ig:opacity-100 transition-opacity"><CopyButton jsxCode={`// Horizontal scrolling gallery with numbered cards and gradient overlay`} htmlCode={`<div class="scroll-gallery"><div class="scroll-track"><div class="scroll-card"><img src="..."/><span>01.</span></div></div></div>`} cssCode={`.scroll-gallery { width: 100%; overflow-x: auto; padding-bottom: 1rem; }
.scroll-track { display: flex; gap: 1rem; min-width: max-content; padding: 0 1rem; }
.scroll-card { position: relative; width: 18rem; height: 24rem; border-radius: 1rem; overflow: hidden; flex-shrink: 0; }
.scroll-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s; }
.scroll-card:hover img { transform: scale(1.1); }
.scroll-card span { position: absolute; bottom: 1.5rem; left: 1.5rem; color: #fff; font-size: 1.5rem; font-weight: 700; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">07. Horizontal Parallax</span>
          <GalleryScroll />
        </div>

        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/ig">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/ig:opacity-100 transition-opacity"><CopyButton jsxCode={`// Polaroid scatter gallery with rotated photo cards`} htmlCode={`<div class="polaroid-gallery"><div class="polaroid" style="transform:rotate(-6deg)"><img src="..."/><span>Title</span></div></div>`} cssCode={`.polaroid-gallery { position: relative; height: 500px; max-width: 48rem; display: flex; align-items: center; justify-content: center; }
.polaroid { position: absolute; width: 16rem; background: #fff; padding: 0.75rem; padding-bottom: 3rem; box-shadow: 0 20px 25px rgba(0,0,0,0.15); border: 1px solid #e5e7eb; cursor: pointer; transition: transform 0.3s; }
.polaroid:hover { transform: scale(1.1) !important; z-index: 50; }
.polaroid img { width: 100%; aspect-ratio: 1; object-fit: cover; filter: sepia(30%); }
.polaroid span { display: block; text-align: center; font-weight: 700; color: #1f2937; margin-top: 0.5rem; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">08. Polaroid Scatter</span>
          <GalleryPolaroid />
        </div>

        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/ig">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/ig:opacity-100 transition-opacity"><CopyButton jsxCode={`// Hexagonal clip-path gallery with overlapping honeycomb layout`} htmlCode={`<div class="hex-gallery"><div class="hex"><img src="..."/></div></div>`} cssCode={`.hex-gallery { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; max-width: 56rem; }
.hex { width: 12rem; height: 12rem; position: relative; clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); transition: transform 0.3s; margin-left: -2rem; }
.hex:first-child { margin-left: 0; }
.hex:hover { transform: scale(1.05); z-index: 10; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.3)); }
.hex img { width: 100%; height: 100%; object-fit: cover; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">09. Geometric Clip</span>
          <GalleryHexagon />
        </div>

        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/ig">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/ig:opacity-100 transition-opacity"><CopyButton jsxCode={`// Cyberpunk glitch gallery with offset colored layers`} htmlCode={`<div class="glitch-gallery"><div class="glitch-card"><div class="cyan"></div><div class="pink"></div><div class="main"><img src="..."/><span>IMG_00</span></div></div></div>`} cssCode={`.glitch-gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; max-width: 64rem; }
.glitch-card { position: relative; }
.glitch-card .cyan { position: absolute; inset: 0; background: #06b6d4; transform: translate(8px, 8px); transition: transform 0.3s; }
.glitch-card .pink { position: absolute; inset: 0; background: #ec4899; transform: translate(-8px, -8px); transition: transform 0.3s; }
.glitch-card:hover .cyan { transform: translate(12px, 12px); }
.glitch-card:hover .pink { transform: translate(-12px, -12px); }
.glitch-card .main { position: relative; height: 16rem; background: #111827; border: 2px solid #fff; overflow: hidden; }
.glitch-card .main img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); transition: filter 0.3s; }
.glitch-card:hover .main img { filter: none; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">10. Cyberpunk</span>
          <GalleryCyberpunk />
        </div>

      </div>
    </div>
  );
};

export default ImageGallery;