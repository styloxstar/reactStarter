import React, { useState } from 'react';

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
        
        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">01. Classic E-commerce</span>
          <GalleryClassic />
        </div>

        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">02. Sticky Grid</span>
          <GallerySticky />
        </div>

        <div className="w-full flex flex-col items-center bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-2xl box-shadow">
          <span className="text-xs font-bold text-white/50 uppercase tracking-widest mb-6">03. Glass Overlay</span>
          <GalleryGlass />
        </div>

        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">04. Minimal Slider</span>
          <GalleryBottomSlider />
        </div>

        <div className="w-full flex flex-col items-center bg-black p-8 rounded-2xl box-shadow">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">05. Cyberpunk</span>
          <GalleryCyberpunk />
        </div>

        <div className="w-full flex flex-col items-center bg-[#e0e5ec] p-8 rounded-2xl box-shadow">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">06. Neumorphic</span>
          <GalleryNeumorphic />
        </div>

        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">07. 3D Stacked</span>
          <GalleryStacked />
        </div>

        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">08. Masonry Collage</span>
          <GalleryMasonry />
        </div>

        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">09. Brutalist</span>
          <GalleryBrutalist />
        </div>

        <div className="w-full flex flex-col items-center box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">10. Circular Spotlight</span>
          <GallerySpotlight />
        </div>

      </div>
    </div>
  );
};

export default ProductGallery;