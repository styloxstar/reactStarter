import React, { useState, useEffect, useRef } from 'react';
import CopyButton from '../common/CopyButton';

// --- Shared Logic Hook ---
const useCarousel = (length, interval = 5000) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((curr) => (curr === length - 1 ? 0 : curr + 1));
  const prev = () => setCurrent((curr) => (curr === 0 ? length - 1 : curr - 1));
  const goTo = (index) => setCurrent(index);

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [length, interval]);

  return { current, next, prev, goTo };
};

// --- Dummy Data ---
const slides = [
  { id: 1, color: 'bg-rose-500', img: 'https://images.unsplash.com/photo-1542397284385-6010376c5337?q=80&w=800&auto=format&fit=crop', title: 'Mountain View', desc: 'Breath in the fresh air.' },
  { id: 2, color: 'bg-indigo-500', img: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800&auto=format&fit=crop', title: 'River Serenity', desc: 'Flow with the water.' },
  { id: 3, color: 'bg-emerald-500', img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop', title: 'Forest Depth', desc: 'Lost in the green.' },
  { id: 4, color: 'bg-amber-500', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop', title: 'Sandy Beach', desc: 'Warmth of the sun.' },
];

// --- 1. The Standard (Fade) ---
export const CarouselStandard = () => {
  const { current, next, prev, goTo } = useCarousel(slides.length);

  return (
    <div className="relative w-full max-w-lg aspect-video rounded-xl overflow-hidden shadow-lg group">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img src={slide.img} alt="" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
            <h3 className="text-xl font-bold">{slide.title}</h3>
          </div>
        </div>
      ))}
      
      {/* Controls */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white text-white hover:text-black p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100">←</button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white text-white hover:text-black p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100">→</button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 right-4 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-2 h-2 rounded-full transition-all ${idx === current ? 'bg-white w-4' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

// --- 2. The Slide (Horizontal Transform) ---
export const CarouselSlide = () => {
  const { current, next, prev } = useCarousel(slides.length);

  return (
    <div className="relative w-full max-w-lg overflow-hidden rounded-xl shadow-lg">
      <div 
        className="flex transition-transform duration-500 ease-out h-64" 
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative">
            <img src={slide.img} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter drop-shadow-lg">{slide.title}</h2>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-0 w-full flex justify-between p-4">
        <button onClick={prev} className="px-4 py-2 bg-black/50 text-white text-sm font-bold rounded-lg hover:bg-black/70">PREV</button>
        <button onClick={next} className="px-4 py-2 bg-black/50 text-white text-sm font-bold rounded-lg hover:bg-black/70">NEXT</button>
      </div>
    </div>
  );
};

// --- 3. The Cards Stack (3D Depth) ---
export const CarouselStack = () => {
  const { current, next } = useCarousel(slides.length);

  return (
    <div className="relative w-full max-w-sm h-64 flex items-center justify-center perspective-1000">
      {slides.map((slide, index) => {
        // Calculate offset relative to current
        let offset = index - current;
        if (offset < 0) offset += slides.length; 
        
        // Only show top 3 cards for effect
        if (offset > 2) return null; 

        const styles = {
          0: 'z-30 scale-100 opacity-100 translate-y-0',
          1: 'z-20 scale-90 opacity-70 translate-y-4',
          2: 'z-10 scale-80 opacity-40 translate-y-8',
        };

        return (
          <div
            key={slide.id}
            onClick={next}
            className={`absolute top-0 w-full h-full rounded-2xl shadow-xl transition-all duration-500 ease-in-out cursor-pointer overflow-hidden ${styles[offset]}`}
          >
            <img src={slide.img} alt="" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/90 to-transparent w-full">
               <p className="text-white font-bold">{slide.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// --- 4. The Thumbnails Gallery ---
export const CarouselThumbnails = () => {
  const { current, goTo } = useCarousel(slides.length);

  return (
    <div className="w-full max-w-lg space-y-2">
      {/* Main Image */}
      <div className="w-full h-64 rounded-xl overflow-hidden relative shadow-md">
        <img src={slides[current].img} alt="" className="w-full h-full object-cover animate-fade-in" />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
          {current + 1} / {slides.length}
        </div>
      </div>
      
      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => goTo(idx)}
            className={`relative h-20 rounded-lg overflow-hidden transition-all duration-300 ${
              current === idx ? 'ring-2 ring-indigo-600 ring-offset-2 opacity-100' : 'opacity-60 hover:opacity-100'
            }`}
          >
            <img src={slide.img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

// --- 5. The Vertical Split ---
export const CarouselVertical = () => {
  const { current, goTo } = useCarousel(slides.length);

  return (
    <div className="w-full max-w-lg h-64 flex bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Text Side (Tabs) */}
      <div className="w-1/3 bg-gray-50 border-r border-gray-100 flex flex-col">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onMouseEnter={() => goTo(idx)}
            className={`flex-1 px-4 text-left text-sm font-medium transition-colors border-l-4 ${
              current === idx 
              ? 'bg-white border-blue-600 text-blue-600 shadow-sm' 
              : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            {slide.title}
          </button>
        ))}
      </div>
      {/* Image Side */}
      <div className="w-2/3 relative">
        <div className="absolute inset-0">
          <img src={slides[current].img} alt="" className="w-full h-full object-cover transition-all duration-500" />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm opacity-90">{slides[current].desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 6. The Parallax Text ---
export const CarouselParallax = () => {
  const { current, next, prev } = useCarousel(slides.length);

  return (
    <div className="relative w-full max-w-lg h-64 rounded-xl overflow-hidden group">
      <img 
        src={slides[current].img} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out scale-110" 
      />
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
        <h2 
          key={`h-${current}`} // Key forces re-render for animation
          className="text-3xl font-bold text-white mb-2 animate-in slide-in-from-bottom-4 fade-in duration-700"
        >
          {slides[current].title}
        </h2>
        <p 
          key={`p-${current}`}
          className="text-gray-200 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-100"
        >
          {slides[current].desc}
        </p>
      </div>

      <div className="absolute bottom-4 w-full flex justify-center gap-4">
        <button onClick={prev} className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">←</button>
        <button onClick={next} className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">→</button>
      </div>
    </div>
  );
};

// --- 7. The Progress Bar (Auto-play Visualization) ---
export const CarouselProgress = () => {
  const { current, next } = useCarousel(slides.length);

  return (
    <div className="relative w-full max-w-lg aspect-video rounded-xl overflow-hidden shadow-lg">
      <img src={slides[current].img} alt="" className="w-full h-full object-cover" />
      
      {/* Progress Bars Container */}
      <div className="absolute top-4 left-4 right-4 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <div key={idx} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
             <div 
               className={`h-full bg-white transition-all duration-[5000ms] linear ${
                 current === idx ? 'w-full' : current > idx ? 'w-full duration-0' : 'w-0 duration-0'
               }`}
             ></div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-white font-bold">{slides[current].title}</h3>
      </div>
      
      {/* Invisible Overlay to advance */}
      <button onClick={next} className="absolute inset-0 z-10 w-full h-full cursor-e-resize" title="Next"></button>
    </div>
  );
};

// --- 8. The Glassmorphism Card ---
export const CarouselGlass = () => {
  const { current, next, prev } = useCarousel(slides.length);

  return (
    <div className="relative w-full max-w-lg h-72 rounded-2xl overflow-hidden" 
         style={{ backgroundImage: `url(${slides[current].img})`, backgroundSize: 'cover' }}>
      
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>

      {/* Floating Glass Card */}
      <div className="absolute inset-x-8 bottom-8 top-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 flex flex-col justify-between shadow-2xl animate-in zoom-in-95 duration-500">
        <div>
           <span className="text-xs font-bold text-white/60 uppercase tracking-widest">Featured</span>
           <h2 className="text-2xl font-bold text-white mt-1">{slides[current].title}</h2>
           <p className="text-white/80 text-sm mt-2">{slides[current].desc}</p>
        </div>
        
        <div className="flex justify-between items-end">
           <button className="px-4 py-2 bg-white text-black text-xs font-bold rounded-lg hover:bg-gray-200">EXPLORE</button>
           <div className="flex gap-2">
             <button onClick={prev} className="p-2 rounded-full bg-black/20 text-white hover:bg-black/40">←</button>
             <button onClick={next} className="p-2 rounded-full bg-black/20 text-white hover:bg-black/40">→</button>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- 9. The Numbered Minimalist ---
export const CarouselMinimal = () => {
  const { current, next, prev } = useCarousel(slides.length);

  return (
    <div className="w-full max-w-lg flex flex-col gap-4">
      <div className="relative rounded-lg overflow-hidden h-64">
        <img src={slides[current].img} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="flex items-center justify-between px-2">
        <div className="flex flex-col">
          <span className="text-3xl font-black text-gray-900 leading-none">
            0{current + 1}
            <span className="text-lg text-gray-400 font-medium">/0{slides.length}</span>
          </span>
          <span className="text-sm font-semibold text-gray-600">{slides[current].title}</span>
        </div>
        
        <div className="flex gap-2">
           <button onClick={prev} className="w-12 h-12 rounded-full border border-gray-200 hover:border-black flex items-center justify-center transition-colors">←</button>
           <button onClick={next} className="w-12 h-12 rounded-full bg-black text-white hover:bg-gray-800 flex items-center justify-center transition-colors">→</button>
        </div>
      </div>
    </div>
  );
};

// --- 10. The Cyberpunk (Glitch) ---
export const CarouselCyberpunk = () => {
  const { current, next } = useCarousel(slides.length);

  return (
    <div className="relative w-full max-w-lg h-64 bg-black border-2 border-yellow-400 p-1 shadow-[4px_4px_0px_0px_rgba(250,204,21,1)]">
      <div className="relative w-full h-full overflow-hidden">
        <img src={slides[current].img} alt="" className="w-full h-full object-cover filter grayscale contrast-125" />
        
        {/* Tech Overlays */}
        <div className="absolute top-2 left-2 bg-yellow-400 text-black px-2 font-mono text-xs font-bold">
          IMG_0{current + 1}
        </div>
        <div className="absolute bottom-2 right-2 bg-black text-yellow-400 px-2 font-mono text-xs border border-yellow-400">
          {slides[current].title.toUpperCase()}
        </div>
        
        {/* Scanline */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/10 to-transparent h-2 w-full animate-[scan_2s_linear_infinite] pointer-events-none"></div>

        <button 
          onClick={next}
          className="absolute inset-y-0 right-0 w-12 bg-black/50 hover:bg-yellow-400/20 flex items-center justify-center text-yellow-400 font-mono font-bold text-xl"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};


// --- Main Gallery ---
const Carousels = () => {
  return (
    <div className="container box-shadow bg-slate-50 p-6 md:p-12 font-sans pb-40 overflow-y-auto">
      <h1 className="text-4xl font-bold text-center text-slate-800 mb-4">Modern Carousels</h1>
      <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">Auto-playing, interactive slider components.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start justify-items-center">
        
        {/* 1. Standard Fade */}
        <div className="w-full flex flex-col items-center box-shadow p-6 rounded-xl relative group/car bg-white">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/car:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const CarouselStandard = () => {\n  const { current, next, prev, goTo } = useCarousel(slides.length);\n  return (\n    <div className="relative w-full aspect-video rounded-xl overflow-hidden group">\n      {slides.map((slide, index) => (\n        <div key={slide.id} className={\`absolute inset-0 transition-opacity duration-700 \${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}\`}>\n          <img src={slide.img} className="w-full h-full object-cover" />\n          <div className="absolute bottom-0 p-6 bg-gradient-to-t from-black/80 text-white w-full">\n            <h3 className="text-xl font-bold">{slide.title}</h3>\n          </div>\n        </div>\n      ))}\n      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20">←</button>\n      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20">→</button>\n    </div>\n  );\n};`}
              htmlCode={`<div class="carousel-fade">\n  <div class="carousel-item active">\n    <img src="image1.jpg">\n    <div class="caption">Title</div>\n  </div>\n  <button class="prev">←</button>\n  <button class="next">→</button>\n</div>`}
              cssCode={`.carousel-fade { position: relative; width: 100%; aspect-ratio: 16/9; overflow: hidden; }\n.carousel-item { position: absolute; inset: 0; opacity: 0; transition: opacity 0.7s; }\n.carousel-item.active { opacity: 1; z-index: 10; }\n.caption { position: absolute; bottom: 0; padding: 1.5rem; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: #fff; width: 100%; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">01. Standard Fade</span>
          <CarouselStandard />
        </div>

        {/* 2. Horizontal Slide */}
        <div className="w-full flex flex-col items-center box-shadow p-6 rounded-xl relative group/car bg-white">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/car:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const CarouselSlide = () => {\n  const { current, next, prev } = useCarousel(slides.length);\n  return (\n    <div className="relative w-full overflow-hidden rounded-xl h-64">\n      <div className="flex transition-transform duration-500" style={{ transform: \`translateX(-\${current * 100}%)\` }}>\n        {slides.map((slide) => (\n          <div key={slide.id} className="min-w-full h-full relative">\n            <img src={slide.img} className="w-full h-full object-cover" />\n          </div>\n        ))}\n      </div>\n      <div className="absolute bottom-4 flex justify-between w-full px-4">\n        <button onClick={prev} className="bg-black/50 text-white p-2">PREV</button>\n        <button onClick={next} className="bg-black/50 text-white p-2">NEXT</button>\n      </div>\n    </div>\n  );\n};`}
              htmlCode={`<div class="carousel-slide">\n  <div class="slide-track">\n    <div class="slide"><img src="1.jpg"></div>\n    <div class="slide"><img src="2.jpg"></div>\n  </div>\n</div>`}
              cssCode={`.carousel-slide { overflow: hidden; position: relative; }\n.slide-track { display: flex; transition: transform 0.5s ease-out; }\n.slide { min-width: 100%; height: 256px; }\n.slide img { width: 100%; height: 100%; object-fit: cover; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">02. Horizontal Slide</span>
          <CarouselSlide />
        </div>

        {/* 3. 3D Card Stack */}
        <div className="w-full flex flex-col items-center box-shadow p-6 rounded-xl relative group/car bg-white">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/car:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const CarouselStack = () => {\n  const { current, next } = useCarousel(slides.length);\n  return (\n    <div className="relative w-full h-64 perspective-1000">\n      {slides.map((slide, index) => {\n        let offset = (index - current + slides.length) % slides.length;\n        if (offset > 2) return null;\n        return (\n          <div key={slide.id} onClick={next} className={\`absolute top-0 w-full h-full transition-all duration-500 \${offset === 0 ? 'z-30 scale-100 opacity-100' : offset === 1 ? 'z-20 scale-90 opacity-70 translate-y-4' : 'z-10 scale-80 opacity-40 translate-y-8'}\`}>\n            <img src={slide.img} className="w-full h-full object-cover rounded-2xl" />\n          </div>\n        );\n      })}\n    </div>\n  );\n};`}
              htmlCode={`<div class="card-stack">\n  <div class="card card-1"><img src="1.jpg"></div>\n  <div class="card card-2"><img src="2.jpg"></div>\n  <div class="card card-3"><img src="3.jpg"></div>\n</div>`}
              cssCode={`.card-stack { position: relative; height: 256px; perspective: 1000px; }\n.card { position: absolute; width: 100%; height: 100%; transition: 0.5s; cursor: pointer; border-radius: 1rem; overflow: hidden; }\n.card-1 { z-index: 30; transform: scale(1); opacity: 1; }\n.card-2 { z-index: 20; transform: scale(0.9) translateY(20px); opacity: 0.7; }\n.card-3 { z-index: 10; transform: scale(0.8) translateY(40px); opacity: 0.4; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">03. 3D Card Stack</span>
          <CarouselStack />
        </div>

        {/* 4. Thumbnail Gallery */}
        <div className="w-full flex flex-col items-center box-shadow p-6 rounded-xl relative group/car bg-white text-center">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/car:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const CarouselThumbnails = () => {\n  const { current, goTo } = useCarousel(slides.length);\n  return (\n    <div className="w-full space-y-2">\n      <div className="h-64 rounded-xl overflow-hidden shadow-md">\n        <img src={slides[current].img} className="w-full h-full object-cover" />\n      </div>\n      <div className="grid grid-cols-4 gap-2">\n        {slides.map((slide, idx) => (\n          <button key={slide.id} onClick={() => goTo(idx)} className={\`h-20 rounded-lg \${current === idx ? 'ring-2 ring-indigo-600' : 'opacity-60'}\`}>\n            <img src={slide.img} className="w-full h-full object-cover" />\n          </button>\n        ))}\n      </div>\n    </div>\n  );\n};`}
              htmlCode={`<div class="thumb-carousel">\n  <div class="main-img"><img src="large.jpg"></div>\n  <div class="thumbs">\n    <img src="1.jpg" class="active">\n    <img src="2.jpg">\n  </div>\n</div>`}
              cssCode={`.main-img { height: 256px; border-radius: 0.75rem; overflow: hidden; }\n.thumbs { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; margin-top: 0.5rem; }\n.thumbs img { height: 80px; width: 100%; object-fit: cover; border-radius: 0.5rem; cursor: pointer; opacity: 0.6; transition: 0.3s; }\n.thumbs img.active { opacity: 1; outline: 2px solid #4f46e5; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">04. Thumbnail Gallery</span>
          <CarouselThumbnails />
        </div>

        {/* 5. Vertical Split */}
        <div className="w-full flex flex-col items-center box-shadow p-6 rounded-xl relative group/car bg-white">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/car:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const CarouselVertical = () => {\n  const { current, goTo } = useCarousel(slides.length);\n  return (\n    <div className="flex bg-white rounded-xl shadow-lg h-64 overflow-hidden">\n      <div className="w-1/3 flex flex-col">\n        {slides.map((s, idx) => (\n          <button key={s.id} onMouseEnter={() => goTo(idx)} className={\`flex-1 p-4 \${current === idx ? 'bg-white border-l-4 border-blue-600' : 'bg-gray-50'}\`}>{s.title}</button>\n        ))}\n      </div>\n      <div className="w-2/3 relative">\n        <img src={slides[current].img} className="w-full h-full object-cover" />\n      </div>\n    </div>\n  );\n};`}
              htmlCode={`<div class="split-carousel">\n  <div class="tabs">\n    <button class="active">Title 1</button>\n    <button>Title 2</button>\n  </div>\n  <div class="content"><img src="1.jpg"></div>\n</div>`}
              cssCode={`.split-carousel { display: flex; height: 256px; border-radius: 0.75rem; overflow: hidden; }\n.tabs { width: 33%; background: #f9fafb; display: flex; flex-direction: column; }\n.tabs button { flex: 1; padding: 1rem; border: none; font-weight: 500; cursor: pointer; text-align: left; }\n.tabs button.active { background: #fff; border-left: 4px solid #2563eb; color: #2563eb; }\n.content { width: 67%; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">05. Vertical Split</span>
          <CarouselVertical />
        </div>

        {/* 6. Parallax Text */}
        <div className="w-full flex flex-col items-center box-shadow p-6 rounded-xl relative group/car bg-white">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/car:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const CarouselParallax = () => (\n  <div className="relative h-64 overflow-hidden rounded-xl">\n    <img src={...} className="scale-110 transition-transform duration-700" />\n    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">...</div>\n  </div>\n);`}
              htmlCode={`<div class="carousel-parallax">...</div>`}
              cssCode={`.parallax-img { transform: scale(1.1); transition: transform 0.7s ease-out; }\n.text-animate { animation: slideIn 0.7s; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">06. Parallax Text</span>
          <CarouselParallax />
        </div>

        {/* 7. Progress Bar */}
        <div className="w-full flex flex-col items-center box-shadow p-6 rounded-xl relative group/car bg-white">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/car:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const CarouselProgress = () => {\n  const { current, next } = useCarousel(slides.length);\n  return (\n    <div className="relative aspect-video rounded-xl overflow-hidden">\n      <img src={slides[current].img} className="w-full h-full object-cover" />\n      <div className="absolute top-4 inset-x-4 flex gap-2">\n        {slides.map((_, idx) => (\n          <div key={idx} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">\n            <div className={\`h-full bg-white transition-all linear \${current === idx ? 'w-full duration-[5000ms]' : current > idx ? 'w-full' : 'w-0'}\`} />\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};`}
              htmlCode={`<div class="prog-carousel">\n  <img src="1.jpg">\n  <div class="bars">\n    <div class="bar active"><div class="fill"></div></div>\n    <div class="bar"></div>\n  </div>\n</div>`}
              cssCode={`.prog-carousel { position: relative; aspect-ratio: 16/9; overflow: hidden; }\n.bars { position: absolute; top: 1rem; left: 1rem; right: 1rem; display: flex; gap: 0.5rem; }\n.bar { flex: 1; height: 4px; background: rgba(255,255,255,0.3); border-radius: 2px; overflow: hidden; }\n.fill { height: 100%; background: #fff; width: 0; transition: width 5s linear; }\n.bar.active .fill { width: 100%; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">07. Progress Bar</span>
          <CarouselProgress />
        </div>

        {/* 8. Glass Card */}
        <div className="w-full flex flex-col items-center bg-gray-900 p-8 rounded-2xl relative group/car box-shadow">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/car:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const CarouselGlass = () => {\n  const { current, next, prev } = useCarousel(slides.length);\n  return (\n    <div className="relative h-72 rounded-2xl overflow-hidden" style={{ backgroundImage: \`url(\${slides[current].img})\` }}>\n      <div className="absolute inset-0 backdrop-blur-[2px] bg-black/20"></div>\n      <div className="absolute inset-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-white">\n        <h2 className="text-2xl font-bold">{slides[current].title}</h2>\n        <p className="mt-2">{slides[current].desc}</p>\n      </div>\n    </div>\n  );\n};`}
              htmlCode={`<div class="glass-carousel" style="background-image:url(1.jpg)">\n  <div class="glass-card">\n    <h2>Featured</h2>\n    <p>Description here</p>\n  </div>\n</div>`}
              cssCode={`.glass-carousel { position: relative; height: 288px; background-size: cover; border-radius: 1.5rem; overflow: hidden; }\n.glass-card { position: absolute; inset: 2rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.2); border-radius: 1rem; padding: 1.5rem; color: #fff; }`}
            />
          </div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">08. Glass Card</span>
          <CarouselGlass />
        </div>

        {/* 9. Minimal Numbered */}
        <div className="w-full flex flex-col items-center box-shadow p-6 rounded-xl relative group/car bg-white">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/car:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const CarouselMinimal = () => {\n  const { current, next } = useCarousel(slides.length);\n  return (\n    <div className="w-full flex flex-col gap-4">\n      <div className="h-64 rounded-lg overflow-hidden"><img src={slides[current].img} /></div>\n      <div className="flex items-center justify-between text-gray-900">\n        <span className="text-3xl font-black">0{current+1}/0{slides.length}</span>\n        <button onClick={next} className="w-12 h-12 rounded-full bg-black text-white">→</button>\n      </div>\n    </div>\n  );\n};`}
              htmlCode={`<div class="mini-carousel">\n  <div class="img-box"><img src="1.jpg"></div>\n  <div class="controls">\n    <span class="numbers">01/04</span>\n    <button class="next">Next</button>\n  </div>\n</div>`}
              cssCode={`.mini-carousel { width: 100%; }\n.img-box { height: 256px; border-radius: 0.5rem; overflow: hidden; margin-bottom: 1rem; }\n.controls { display: flex; justify-content: space-between; align-items: center; }\n.numbers { font-weight: 900; font-size: 1.875rem; }\n.next { background: #000; color: #fff; width: 3rem; height: 3rem; border-radius: 50%; border: none; cursor: pointer; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">09. Minimal Numbered</span>
          <CarouselMinimal />
        </div>

        {/* 10. Cyberpunk */}
        <div className="w-full flex flex-col items-center box-shadow p-6 rounded-xl relative group/car bg-white">
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/car:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const CarouselCyberpunk = () => {\n  const { current, next } = useCarousel(slides.length);\n  return (\n    <div className="relative h-64 bg-black border-2 border-yellow-400 p-1 shadow-[4px_4px_0px_0px_#facc15] overflow-hidden">\n      <img src={slides[current].img} className="grayscale" />\n      <div className="absolute top-2 left-2 bg-yellow-400 text-black px-2 font-mono text-xs">IMG_0{current+1}</div>\n      <button onClick={next} className="absolute right-0 inset-y-0 w-12 bg-yellow-400/20 text-yellow-400">&gt;</button>\n    </div>\n  );\n};`}
              htmlCode={`<div class="cyber-car">\n  <div class="screen">\n    <img src="1.jpg">\n    <div class="tag">IMG_01</div>\n  </div>\n</div>`}
              cssCode={`.cyber-car { border: 2px solid #facc15; box-shadow: 4px 4px 0 0 #facc15; background: #000; padding: 4px; }\n.screen { position: relative; height: 256px; overflow: hidden; }\n.screen img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(1); }\n.tag { position: absolute; top: 8px; left: 8px; background: #facc15; color: #000; padding: 2px 8px; font-family: monospace; font-size: 12px; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">10. Cyberpunk</span>
          <CarouselCyberpunk />
        </div>

      </div>
    </div>
  );
};

export default Carousels;