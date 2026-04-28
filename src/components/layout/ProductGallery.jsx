import React, { useState } from 'react';
import CopyButton from '../common/CopyButton';

// --- Shared Data ---
const productImages = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop", // Red Shoe
  "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1000&auto=format&fit=crop", // Profile
//   "https://images.unsplash.com/photo-1605348532760-6753d5c43329?q=80&w=1000&auto=format&fit=crop", // Top view
  "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1000&auto=format&fit=crop"  // Lifestyle
];

// --- 1. The Classic (Left Thumbnails) ---
export const GalleryClassic = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 w-full max-w-4xl bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
        {productImages.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
              active === i ? 'border-blue-600 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
      {/* Main Image */}
      <div className="flex-1 h-[400px] bg-gray-50 rounded-xl overflow-hidden relative group">
        <img src={productImages[active]} alt="" className="w-full h-full object-cover mix-blend-multiply" />
        <span className="absolute top-4 right-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
          New Arrival
        </span>
      </div>
    </div>
  );
};

// --- 2. The Sticky Grid (Fashion Style) ---
export const GallerySticky = () => {
  return (
    <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Scrollable Images */}
      <div className="grid grid-cols-2 gap-2">
        {productImages.map((img, i) => (
          <div key={i} className={`rounded-xl overflow-hidden bg-gray-100 ${i === 0 ? 'col-span-2 aspect-video' : 'aspect-square'}`}>
            <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>
      {/* Sticky Info */}
      <div className="relative">
        <div className="sticky top-6 p-6 bg-white border border-gray-100 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900">Nike Air Max</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Experience the ultimate comfort with our newest technology.
          </p>
          <div className="mt-6 flex gap-3">
             <button className="flex-1 bg-black text-white py-3 rounded-lg font-bold">Add to Cart</button>
             <button className="p-3 border rounded-lg hover:bg-gray-50">♥</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 3. The Glassmorphism Overlay ---
export const GalleryGlass = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="relative w-full max-w-3xl h-[500px] rounded-2xl overflow-hidden group">
      {/* Background Main Image */}
      <img src={productImages[active]} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      
      {/* Glass Overlay Controls */}
      <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex items-center justify-between">
        <div className="flex gap-2">
          {productImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                active === i ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-50 hover:opacity-100'
              }`}
            >
               <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
        <div className="text-right text-white hidden sm:block">
           <div className="font-bold text-lg">$129.00</div>
           <div className="text-xs opacity-80">Free Shipping</div>
        </div>
      </div>
    </div>
  );
};

// --- 4. The Bottom Slider (Minimal) ---
export const GalleryBottomSlider = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden mb-4 shadow-sm relative">
         <img src={productImages[active]} alt="" className="w-full h-full object-cover animate-in fade-in duration-300" />
         
         {/* Floating Arrows */}
         <button 
           onClick={() => setActive(prev => prev === 0 ? productImages.length - 1 : prev - 1)}
           className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50"
         >←</button>
         <button 
           onClick={() => setActive(prev => prev === productImages.length - 1 ? 0 : prev + 1)}
           className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50"
         >→</button>
      </div>

      <div className="flex justify-center gap-3">
        {productImages.map((_, i) => (
          <button 
            key={i}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? 'w-8 bg-black' : 'w-2 bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

// --- 5. The Cyberpunk (Neon Tech) ---
export const GalleryCyberpunk = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full max-w-3xl bg-gray-900 p-1 border-2 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
      <div className="grid grid-cols-4 gap-1 bg-black p-1">
        {/* Main Display */}
        <div className="col-span-3 row-span-3 border border-gray-800 relative group overflow-hidden">
          <img src={productImages[active]} alt="" className="w-full h-full object-cover filter contrast-125" />
          <div className="absolute top-2 left-2 text-cyan-500 font-mono text-xs bg-black/80 px-2 border border-cyan-500">
             IMG_0{active + 1}
          </div>
          {/* Scanline */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>
        </div>

        {/* Side Thumbs */}
        <div className="col-span-1 flex flex-col gap-1">
          {productImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex-1 border relative overflow-hidden transition-all ${
                active === i ? 'border-cyan-400 grayscale-0' : 'border-gray-800 grayscale opacity-50 hover:opacity-100'
              }`}
            >
               <img src={img} alt="" className="w-full h-full object-cover" />
               {active === i && <div className="absolute inset-0 bg-cyan-400/20"></div>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 6. The Neumorphic (Soft) ---
export const GalleryNeumorphic = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-[#e0e5ec] p-8 rounded-3xl w-full max-w-3xl flex flex-col items-center shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)]">
      <div className="w-full aspect-[16/9] rounded-2xl bg-[#e0e5ec] p-2 shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] mb-8">
        <img src={productImages[active]} alt="" className="w-full h-full object-cover rounded-xl" />
      </div>
      
      <div className="flex gap-6">
        {productImages.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-16 h-16 rounded-xl p-1 transition-all duration-300 flex items-center justify-center ${
              active === i 
              ? 'shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]' 
              : 'shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:-translate-y-1'
            }`}
          >
             <img src={img} alt="" className="w-full h-full object-cover rounded-lg opacity-80" />
          </button>
        ))}
      </div>
    </div>
  );
};

// --- 7. The Stacked Cards (Interactive) ---
export const GalleryStacked = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="relative w-full max-w-sm h-96 mx-auto perspective-1000">
      {productImages.map((img, i) => {
         // Logic to determine z-index and scale
         let offset = i - active;
         if (offset < 0) offset += productImages.length;
         
         const isActive = i === active;
         const isNext = offset === 1;
         const isPrev = offset === productImages.length - 1;
         
         let styles = "opacity-0 scale-75 z-0 translate-x-0";
         if (isActive) styles = "opacity-100 scale-100 z-30 translate-x-0 shadow-2xl";
         else if (isNext) styles = "opacity-60 scale-90 z-20 translate-x-8 shadow-lg cursor-pointer";
         else if (isPrev) styles = "opacity-60 scale-90 z-20 -translate-x-8 shadow-lg cursor-pointer";

         return (
           <div 
             key={i}
             onClick={() => setActive(i)}
             className={`absolute inset-0 bg-white p-2 rounded-2xl transition-all duration-500 ease-out border border-gray-100 ${styles}`}
           >
             <img src={img} alt="" className="w-full h-full object-cover rounded-xl" />
           </div>
         )
      })}
    </div>
  );
};

// --- 8. The Masonry Collage ---
export const GalleryMasonry = () => {
  return (
    <div className="w-full max-w-4xl grid grid-cols-4 grid-rows-2 gap-4 h-[500px]">
      <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
        <img src={productImages[0]} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden relative group">
        <img src={productImages[1]} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
        <img src={productImages[2]} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
         {/* More Button */}
        <img src={productImages[3]} alt="" className="w-full h-full object-cover filter blur-sm scale-110" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold text-xl cursor-pointer hover:bg-black/50 transition-colors">
          +4 More
        </div>
      </div>
    </div>
  );
};

// --- 9. The Brutalist (Retro) ---
export const GalleryBrutalist = () => {
  const [active, setActive] = useState(0);
  
  return (
    <div className="w-full max-w-3xl bg-yellow-400 border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="border-4 border-black mb-4 h-[400px] bg-white relative">
        <img src={productImages[active]} alt="" className="w-full h-full object-contain p-4" />
        <div className="absolute top-0 left-0 bg-black text-white px-3 py-1 font-bold">FIG. {active + 1}</div>
      </div>
      
      <div className="flex justify-between items-center gap-4">
        <button 
           onClick={() => setActive(prev => prev === 0 ? productImages.length - 1 : prev - 1)}
           className="w-12 h-12 bg-white border-4 border-black font-black hover:bg-black hover:text-white transition-colors"
        >
          &lt;
        </button>
        
        <div className="flex gap-2 overflow-x-auto">
          {productImages.map((img, i) => (
             <div 
               key={i} 
               onClick={() => setActive(i)}
               className={`w-16 h-16 border-4 border-black bg-white cursor-pointer hover:bg-pink-400 transition-colors ${active === i ? 'bg-black' : ''}`}
             >
               <img src={img} alt="" className={`w-full h-full object-cover ${active === i ? 'opacity-50' : ''}`} />
             </div>
          ))}
        </div>

        <button 
           onClick={() => setActive(prev => prev === productImages.length - 1 ? 0 : prev + 1)}
           className="w-12 h-12 bg-white border-4 border-black font-black hover:bg-black hover:text-white transition-colors"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

// --- 10. The Spotlight (Circular) ---
export const GallerySpotlight = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full max-w-4xl flex items-center gap-8">
      {/* Thumbnails Column */}
      <div className="flex flex-col gap-4">
        {productImages.map((img, i) => (
          <button
            key={i}
            onMouseEnter={() => setActive(i)}
            className={`w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-300 ${
              active === i ? 'border-indigo-600 scale-110 shadow-lg' : 'border-gray-200 grayscale opacity-60'
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main Circular View */}
      <div className="flex-1 aspect-square max-h-[400px] rounded-full overflow-hidden border-8 border-white shadow-2xl relative bg-gray-100 group">
        <img src={productImages[active]} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        
        {/* Floating Details */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-6 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 text-center whitespace-nowrap">
           <span className="font-bold text-gray-900">Red Runner</span> <span className="text-gray-400 mx-2">|</span> <span className="text-indigo-600 font-bold">$140</span>
        </div>
      </div>
    </div>
  );
};


// --- Gallery Wrapper ---
const ProductGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-40">
      <h1 className="text-4xl font-bold text-center text-slate-800 mb-4">Product Gallery Components</h1>
      <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">Various layouts for displaying e-commerce imagery.</p>
      
      <div className="grid grid-cols-1 gap-24 max-w-6xl mx-auto items-center justify-items-center">
        
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/pg">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/pg:opacity-100 transition-opacity"><CopyButton jsxCode={`const GalleryClassic = () => {\n  const [active, setActive] = useState(0);\n  return (\n    <div className="flex flex-col-reverse md:flex-row gap-4 w-full max-w-4xl bg-white p-4 rounded-xl shadow-sm border">\n      <div className="flex md:flex-col gap-3">{images.map((img,i) => <button key={i} onClick={() => setActive(i)} className={\`w-20 h-20 rounded-lg overflow-hidden border-2 \${active===i?'border-blue-600':'border-transparent opacity-60'}\`}><img src={img} className="w-full h-full object-cover" /></button>)}</div>\n      <div className="flex-1 h-[400px] bg-gray-50 rounded-xl overflow-hidden"><img src={images[active]} className="w-full h-full object-cover" /></div>\n    </div>\n  );\n};`} htmlCode={`<div class="product-gallery"><div class="thumbs"><button class="active"><img src="..." /></button></div><div class="main"><img src="..." /></div></div>`} cssCode={`.product-gallery { display: flex; gap: 1rem; max-width: 56rem; background: #fff; padding: 1rem; border-radius: 0.75rem; border: 1px solid #f3f4f6; }
.thumbs { display: flex; flex-direction: column; gap: 0.75rem; }
.thumbs button { width: 5rem; height: 5rem; border-radius: 0.5rem; overflow: hidden; border: 2px solid transparent; opacity: 0.6; cursor: pointer; }
.thumbs button.active { border-color: #2563eb; opacity: 1; }
.thumbs img, .main img { width: 100%; height: 100%; object-fit: cover; }
.main { flex: 1; height: 400px; background: #f9fafb; border-radius: 0.75rem; overflow: hidden; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">01. Classic E-commerce</span>
          <GalleryClassic />
        </div>

        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/pg">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/pg:opacity-100 transition-opacity"><CopyButton jsxCode={`const GallerySticky = () => (\n  <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">\n    <div className="grid grid-cols-2 gap-2">{images.map((img,i) => <div key={i} className="rounded-xl overflow-hidden"><img src={img} className="w-full h-full object-cover" /></div>)}</div>\n    <div className="relative"><div className="sticky top-6 p-6 bg-white border rounded-2xl shadow-lg"><h2>Nike Air Max</h2><button>Add to Cart</button></div></div>\n  </div>\n);`} htmlCode={`<div class="sticky-gallery"><div class="images"><img src="..." /></div><aside class="sticky-info"><h2>Product Name</h2><button>Add to Cart</button></aside></div>`} cssCode={`.sticky-gallery { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 56rem; }
.sticky-info { position: sticky; top: 1.5rem; padding: 1.5rem; background: #fff; border: 1px solid #f3f4f6; border-radius: 1rem; box-shadow: 0 10px 15px rgba(0,0,0,0.1); }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">02. Sticky Grid</span>
          <GallerySticky />
        </div>

        <div className="w-full flex flex-col items-center bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-2xl box-shadow relative group/pg">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/pg:opacity-100 transition-opacity"><CopyButton jsxCode={`const GalleryGlass = () => {\n  const [active, setActive] = useState(0);\n  return (\n    <div className="relative w-full max-w-3xl h-[500px] rounded-2xl overflow-hidden">\n      <img src={images[active]} className="absolute inset-0 w-full h-full object-cover" />\n      <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-between">\n        <div className="flex gap-2">{images.map((img,i) => <button key={i} onClick={() => setActive(i)} className={\`w-12 h-12 rounded-lg overflow-hidden border-2 \${active===i?'border-white scale-110':'border-transparent opacity-50'}\`}><img src={img} className="w-full h-full object-cover" /></button>)}</div>\n      </div>\n    </div>\n  );\n};`} htmlCode={`<div class="glass-gallery"><img class="bg" src="..." /><div class="controls"><button><img src="..."/></button></div></div>`} cssCode={`.glass-gallery { position: relative; max-width: 48rem; height: 500px; border-radius: 1rem; overflow: hidden; }
.glass-gallery .bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.controls { position: absolute; bottom: 1.5rem; left: 1.5rem; right: 1.5rem; padding: 1rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.2); border-radius: 1rem; display: flex; gap: 0.5rem; }
.controls button { width: 3rem; height: 3rem; border-radius: 0.5rem; overflow: hidden; border: 2px solid transparent; cursor: pointer; }
.controls button.active { border-color: #fff; transform: scale(1.1); }`} /></div>
          <span className="text-xs font-bold text-white/50 uppercase tracking-widest mb-6">03. Glass Overlay</span>
          <GalleryGlass />
        </div>

        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/pg">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/pg:opacity-100 transition-opacity"><CopyButton jsxCode={`const GalleryBottomSlider = () => {\n  const [active, setActive] = useState(0);\n  return (\n    <div className="w-full max-w-2xl mx-auto">\n      <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden mb-4 relative">\n        <img src={images[active]} className="w-full h-full object-cover" />\n        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md">\u2190</button>\n        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md">\u2192</button>\n      </div>\n      <div className="flex justify-center gap-3">{images.map((_,i) => <button key={i} onClick={() => setActive(i)} className={\`h-1.5 rounded-full \${active===i?'w-8 bg-black':'w-2 bg-gray-300'}\`} />)}</div>\n    </div>\n  );\n};`} htmlCode={`<div class="slider"><div class="viewport"><img src="..." /><button class="prev">&larr;</button><button class="next">&rarr;</button></div><div class="dots"><span class="active"></span><span></span></div></div>`} cssCode={`.slider { max-width: 42rem; margin: 0 auto; }
.viewport { aspect-ratio: 4/3; background: #f3f4f6; border-radius: 1rem; overflow: hidden; position: relative; margin-bottom: 1rem; }
.viewport img { width: 100%; height: 100%; object-fit: cover; }
.prev, .next { position: absolute; top: 50%; transform: translateY(-50%); width: 2.5rem; height: 2.5rem; background: #fff; border-radius: 50%; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border: none; cursor: pointer; }
.prev { left: 1rem; } .next { right: 1rem; }
.dots { display: flex; justify-content: center; gap: 0.75rem; }
.dots span { height: 6px; width: 8px; border-radius: 9999px; background: #d1d5db; }
.dots span.active { width: 2rem; background: #000; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">04. Minimal Slider</span>
          <GalleryBottomSlider />
        </div>

        <div className="w-full flex flex-col items-center bg-black p-8 rounded-2xl box-shadow relative group/pg">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/pg:opacity-100 transition-opacity"><CopyButton jsxCode={`// Cyberpunk product gallery with scanline effect and side thumbnails`} htmlCode={`<div class="cyber-gallery"><div class="main"><img src="..."/><span>IMG_01</span></div><div class="side-thumbs"><button><img src="..."/></button></div></div>`} cssCode={`.cyber-gallery { background: #111827; padding: 0.25rem; border: 2px solid #06b6d4; box-shadow: 0 0 20px rgba(6,182,212,0.4); }
.cyber-gallery .main { position: relative; border: 1px solid #1f2937; overflow: hidden; }
.cyber-gallery .main img { width: 100%; height: 100%; object-fit: cover; filter: contrast(1.25); }
.side-thumbs { display: flex; flex-direction: column; gap: 0.25rem; }
.side-thumbs button { border: 1px solid #1f2937; cursor: pointer; }
.side-thumbs button.active { border-color: #22d3ee; }`} /></div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">05. Cyberpunk</span>
          <GalleryCyberpunk />
        </div>

        <div className="w-full flex flex-col items-center bg-[#e0e5ec] p-8 rounded-2xl box-shadow relative group/pg">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/pg:opacity-100 transition-opacity"><CopyButton jsxCode={`// Neumorphic gallery with soft shadow thumbnails and inset main image`} htmlCode={`<div class="neu-gallery"><div class="neu-main"><img src="..."/></div><div class="neu-thumbs"><button><img src="..."/></button></div></div>`} cssCode={`.neu-gallery { background: #e0e5ec; padding: 2rem; border-radius: 1.5rem; box-shadow: 9px 9px 16px rgb(163,177,198), -9px -9px 16px rgba(255,255,255,0.5); display: flex; flex-direction: column; align-items: center; }
.neu-main { width: 100%; aspect-ratio: 16/9; border-radius: 1rem; padding: 0.5rem; background: #e0e5ec; box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff; margin-bottom: 2rem; }
.neu-thumbs { display: flex; gap: 1.5rem; }
.neu-thumbs button { width: 4rem; height: 4rem; border-radius: 0.75rem; padding: 0.25rem; background: #e0e5ec; border: none; cursor: pointer; box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff; }
.neu-thumbs button.active { box-shadow: inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff; }`} /></div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">06. Neumorphic</span>
          <GalleryNeumorphic />
        </div>

        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/pg">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/pg:opacity-100 transition-opacity"><CopyButton jsxCode={`// Stacked cards gallery with 3D perspective and click-to-select`} htmlCode={`<div class="stacked"><div class="card active"><img src="..."/></div><div class="card"><img src="..."/></div></div>`} cssCode={`.stacked { position: relative; max-width: 24rem; height: 24rem; margin: 0 auto; perspective: 1000px; }
.stacked .card { position: absolute; inset: 0; background: #fff; padding: 0.5rem; border-radius: 1rem; border: 1px solid #f3f4f6; transition: all 0.5s ease-out; cursor: pointer; }
.stacked .card.active { opacity: 1; transform: scale(1); z-index: 3; box-shadow: 0 25px 50px rgba(0,0,0,0.25); }
.stacked .card img { width: 100%; height: 100%; object-fit: cover; border-radius: 0.75rem; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">07. 3D Stacked</span>
          <GalleryStacked />
        </div>

        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/pg">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/pg:opacity-100 transition-opacity"><CopyButton jsxCode={`// Masonry collage layout with hero image and +N more overlay`} htmlCode={`<div class="masonry"><div class="hero"><img src="..."/></div><div class="half"><img src="..."/></div><div class="quarter"><img src="..."/></div><div class="quarter more"><img src="..."/><span>+4 More</span></div></div>`} cssCode={`.masonry { display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(2, 1fr); gap: 1rem; height: 500px; max-width: 56rem; }
.masonry .hero { grid-column: span 2; grid-row: span 2; border-radius: 1rem; overflow: hidden; }
.masonry .half { grid-column: span 2; border-radius: 1rem; overflow: hidden; }
.masonry img { width: 100%; height: 100%; object-fit: cover; }
.masonry .more { position: relative; }
.masonry .more span { position: absolute; inset: 0; background: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 700; font-size: 1.25rem; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">08. Masonry Collage</span>
          <GalleryMasonry />
        </div>

        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/pg">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/pg:opacity-100 transition-opacity"><CopyButton jsxCode={`// Brutalist gallery with bold borders, yellow accents, and arrow navigation`} htmlCode={`<div class="brutal-gallery"><div class="display"><img src="..."/><span>FIG. 1</span></div><div class="nav"><button>&lt;</button><div class="thumbs"><div><img src="..."/></div></div><button>&gt;</button></div></div>`} cssCode={`.brutal-gallery { max-width: 48rem; background: #facc15; border: 4px solid #000; padding: 1rem; box-shadow: 8px 8px 0 #000; }
.display { border: 4px solid #000; height: 400px; background: #fff; position: relative; margin-bottom: 1rem; }
.display img { width: 100%; height: 100%; object-fit: contain; padding: 1rem; }
.display span { position: absolute; top: 0; left: 0; background: #000; color: #fff; padding: 0.25rem 0.75rem; font-weight: 700; }
.nav { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
.nav button { width: 3rem; height: 3rem; background: #fff; border: 4px solid #000; font-weight: 900; cursor: pointer; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">09. Brutalist</span>
          <GalleryBrutalist />
        </div>

        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg relative group/pg">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/pg:opacity-100 transition-opacity"><CopyButton jsxCode={`// Circular spotlight gallery with hover-to-select circular thumbnails`} htmlCode={`<div class="spotlight"><div class="thumbs"><button class="active"><img src="..."/></button></div><div class="circle-view"><img src="..."/></div></div>`} cssCode={`.spotlight { display: flex; align-items: center; gap: 2rem; max-width: 56rem; }
.spotlight .thumbs { display: flex; flex-direction: column; gap: 1rem; }
.spotlight .thumbs button { width: 4rem; height: 4rem; border-radius: 50%; overflow: hidden; border: 2px solid #e5e7eb; opacity: 0.6; filter: grayscale(100%); cursor: pointer; }
.spotlight .thumbs button.active { border-color: #4f46e5; opacity: 1; filter: none; transform: scale(1.1); box-shadow: 0 10px 15px rgba(0,0,0,0.1); }
.circle-view { flex: 1; aspect-ratio: 1; max-height: 400px; border-radius: 50%; overflow: hidden; border: 8px solid #fff; box-shadow: 0 25px 50px rgba(0,0,0,0.25); }
.circle-view img { width: 100%; height: 100%; object-fit: cover; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">10. Circular Spotlight</span>
          <GallerySpotlight />
        </div>

      </div>
    </div>
  );
};

export default ProductGallery;