import React, { useState } from 'react';
import CopyButton from '../CopyButton';

// --- Shared Data ---
const testimonials = [
  { name: "Sarah Jensen", role: "CTO at TechFlow", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop", text: "This platform completely changed how we deploy code. It's faster, safer, and the UI is simply beautiful." },
  { name: "David Chen", role: "Founder, StartScale", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop", text: "I've tried every tool in the market, but nothing comes close to the ease of use provided here. Highly recommended." },
  { name: "Emily Davis", role: "Product Manager", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop", text: "Customer support is top-notch. They resolved my issue in minutes. The product itself is a masterpiece." },
];

const StarRating = () => (
  <div className="flex text-yellow-400 gap-1 mb-3">
    {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
  </div>
);

// --- 1. The Standard Grid (SaaS) ---
export const TestimonialStandard = () => (
  <div className="bg-white p-12 rounded-3xl border border-gray-100">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Loved by thousands</h2>
      <p className="text-gray-500">Don't just take our word for it.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
          <StarRating />
          <p className="text-gray-600 mb-6 leading-relaxed">"{t.text}"</p>
          <div className="flex items-center gap-4">
            <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <div className="font-bold text-gray-900 text-sm">{t.name}</div>
              <div className="text-xs text-gray-500">{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- 2. The Wall of Love (Masonry) ---
export const TestimonialMasonry = () => {
  // Duplicating data to simulate a wall
  const wallData = [...testimonials, ...testimonials, ...testimonials];
  
  return (
    <div className="bg-slate-50 p-8 rounded-3xl overflow-hidden max-h-[600px] relative">
      {/* Gradient Fade Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>
      
      <div className="columns-1 md:columns-3 gap-6 space-y-6">
        {wallData.map((t, i) => (
          <div key={i} className="break-inside-avoid bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full" />
              <div>
                <div className="font-bold text-sm">{t.name}</div>
                <div className="text-xs text-gray-400">@username</div>
              </div>
              <div className="ml-auto text-blue-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 3. The Spotlight (Large Quote) ---
export const TestimonialSpotlight = () => (
  <div className="bg-indigo-900 text-white p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full blur-[100px] opacity-50"></div>
    
    <div className="relative z-10 md:w-1/3">
      <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="CEO" />
      </div>
    </div>
    
    <div className="relative z-10 md:w-2/3">
      <div className="text-6xl text-purple-400 mb-6 opacity-50">"</div>
      <h2 className="text-2xl md:text-4xl font-serif leading-relaxed mb-8">
        We improved our conversion rates by 400% within the first month. This is the single most important tool in our stack.
      </h2>
      <div>
        <div className="font-bold text-xl">Jennifer Lawrence</div>
        <div className="text-indigo-300">VP of Marketing, Stripe</div>
      </div>
    </div>
  </div>
);

// --- 4. The Interactive Slider ---
export const TestimonialSlider = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
      <div className="max-w-2xl min-h-[250px] flex flex-col justify-center">
        <div className="mb-6">
          <img src={testimonials[active].img} alt="" className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-gray-50 shadow-md" />
        </div>
        <p className="text-xl text-gray-700 font-medium mb-6 transition-opacity duration-300">
          "{testimonials[active].text}"
        </p>
        <div>
          <div className="font-bold text-gray-900">{testimonials[active].name}</div>
          <div className="text-sm text-gray-500">{testimonials[active].role}</div>
        </div>
      </div>
      
      <div className="flex gap-3 mt-8">
        {testimonials.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setActive(i)}
            className={`w-3 h-3 rounded-full transition-all ${active === i ? 'bg-black w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

// --- 5. The Video Cards (Media Rich) ---
export const TestimonialVideo = () => (
  <div className="bg-black text-white p-12 rounded-3xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold">Hear from our customers</h2>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <div key={i} className="group cursor-pointer">
          <div className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden mb-4 border border-gray-700 group-hover:border-white transition-colors">
            {/* Fake Thumbnail Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
              <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-white ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
            <img src={t.img} className="w-full h-full object-cover opacity-80" alt="Video Thumb" />
          </div>
          <h3 className="font-bold text-lg leading-tight mb-1">"How {t.name.split(' ')[0]} scaled revenue"</h3>
          <p className="text-gray-400 text-sm">{t.role}</p>
        </div>
      ))}
    </div>
  </div>
);

// --- 6. The Glassmorphism (Creative) ---
export const TestimonialGlass = () => (
  <div className="relative flex items-center justify-center p-12 rounded-3xl overflow-hidden bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
    {/* Abstract Shapes */}
    <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 w-full max-w-4xl">
      {testimonials.slice(0, 2).map((t, i) => (
        <div key={i} className="bg-white/20 backdrop-blur-xl border border-white/30 p-8 rounded-2xl shadow-xl text-white">
          <div className="text-4xl mb-4 opacity-50">❞</div>
          <p className="text-lg font-medium mb-6 drop-shadow-sm">{t.text}</p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/30 p-0.5">
               <img src={t.img} className="w-full h-full rounded-full object-cover" alt={t.name} />
            </div>
            <div>
              <div className="font-bold">{t.name}</div>
              <div className="text-xs opacity-80">{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- 7. The Cyberpunk (Tech/Glitch) ---
export const TestimonialCyber = () => (
  <div className="bg-black p-8 rounded-3xl border-2 border-cyan-500 relative overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
    
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-gray-900 border border-gray-800 p-6 relative group hover:border-cyan-500 transition-colors">
          <div className="text-cyan-500 font-mono text-xs mb-4">
            USER_ID: {1024 + i} <span className="animate-pulse">_</span>
          </div>
          <p className="text-gray-300 font-mono text-sm mb-6 border-l-2 border-gray-700 pl-3">
            {t.text}
          </p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-cyan-900 rounded-sm overflow-hidden grayscale">
              <img src={t.img} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="font-mono text-xs text-white uppercase">{t.name}</div>
          </div>
          {/* Decor corners */}
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      ))}
    </div>
  </div>
);

// --- 8. The Neumorphic (Soft UI) ---
export const TestimonialNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-12 rounded-3xl">
    <div className="max-w-xl mx-auto">
      <div className="bg-[#e0e5ec] p-8 rounded-[30px] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center">
        <div className="w-24 h-24 mx-auto rounded-full p-2 bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] mb-6">
          <img src={testimonials[0].img} alt="" className="w-full h-full rounded-full object-cover" />
        </div>
        <div className="flex justify-center text-yellow-500 mb-4 text-xl shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff] w-fit mx-auto px-4 py-1 rounded-full">
          ★★★★★
        </div>
        <p className="text-gray-600 mb-6 italic">"{testimonials[0].text}"</p>
        <div className="font-bold text-gray-700">{testimonials[0].name}</div>
        <div className="text-sm text-gray-500">{testimonials[0].role}</div>
      </div>
    </div>
  </div>
);

// --- 9. The Brutalist (Bold) ---
export const TestimonialBrutalist = () => (
  <div className="bg-yellow-400 p-8 rounded-3xl border-4 border-black">
    <h2 className="text-5xl font-black uppercase mb-12 border-b-4 border-black pb-4 inline-block">Reviews</h2>
    
    <div className="space-y-8">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-white border-4 border-black p-6 shadow-[8px_8px_0_0_#000] flex flex-col md:flex-row gap-6 items-start hover:-translate-y-1 transition-transform">
          <div className="w-16 h-16 border-4 border-black flex-shrink-0">
            <img src={t.img} className="w-full h-full object-cover grayscale contrast-125" alt="" />
          </div>
          <div>
            <h3 className="font-black uppercase text-xl mb-2">{t.name} says:</h3>
            <p className="font-bold text-lg leading-tight">"{t.text.toUpperCase()}"</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- 10. The Minimalist List (Clean) ---
export const TestimonialMinimal = () => (
  <div className="bg-white p-12 rounded-3xl border-t border-gray-100">
    <div className="max-w-4xl mx-auto divide-y divide-gray-100">
      {testimonials.map((t, i) => (
        <div key={i} className="py-10 first:pt-0 last:pb-0 flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/4 flex items-center gap-3">
            <img src={t.img} className="w-10 h-10 rounded-full object-cover grayscale" alt="" />
            <div>
              <div className="font-medium text-gray-900">{t.name}</div>
              <div className="text-xs text-gray-400">{t.role}</div>
            </div>
          </div>
          <div className="md:w-3/4">
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              {t.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);


// --- Main Gallery Wrapper ---
const TestimonialGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-100 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Testimonial Components</h1>
        <p className="text-slate-500">Social proof sections to build trust and credibility.</p>
      </div>
      
      <div className="space-y-32 max-w-7xl mx-auto">
        
        <section className='box-shadow p-4 rounded-lg relative group/test'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="flex text-yellow-400 gap-1 mb-3">
    {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
  </div>`} htmlCode={`<div class="flex text-yellow-400 gap-1 mb-3">
    ...>★</span>)}
  </div>`} cssCode={`/* TestimonialStandard Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #f9fafb;\n  background-color: #ffffff;\n  border-color: #f3f4f6;\n  border-color: transparent;\n  border-radius: 1.5rem;\n  border-radius: 1rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #111827;\n  color: #4b5563;\n  color: #6b7280;\n  display: flex;\n  font-weight: 700;\n  padding: 2rem;\n  padding: 3rem;\n  text-align: center;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 01. Standard Grid </span>
          <TestimonialStandard />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/test'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-slate-50 p-8 rounded-3xl overflow-hidden max-h-[600px] relative">
      {/* Gradient Fade Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>
      
      <div className="columns-1 md:columns-3 gap-6 space-y-6">
        {wallData.map((t, i) => (
          <div key={i} className="break-inside-avoid bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full" />
              <div>
                <div className="font-bold text-sm">{t.name}</div>
                <div className="text-xs text-gray-400">@username</div>
              </div>
              <div className="ml-auto text-blue-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{t.text}</p>
          </div>
        )`} htmlCode={`<div class="bg-slate-50 p-8 rounded-3xl overflow-hidden max-h-[600px] relative">
      ...
      <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>
      
      <div class="columns-1 md:columns-3 gap-6 space-y-6">
        <!-- Mapping Start -->
(
          <div key=... class="break-inside-avoid bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div class="flex items-center gap-3 mb-4">
              <img src=... alt=... class="w-10 h-10 rounded-full" />
              <div>
                <div class="font-bold text-sm">...</div>
                <div class="text-xs text-gray-400">@username</div>
              </div>
              <div class="ml-auto text-blue-500">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </div>
            </div>
            <p class="text-gray-600 text-sm">...</p>
          </div>
        )`} cssCode={`/* TestimonialMasonry Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #f8fafc;\n  background-color: #ffffff;\n  border-color: #e5e7eb;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #3b82f6;\n  color: #4b5563;\n  color: #9ca3af;\n  display: flex;\n  font-weight: 700;\n  padding: 1.5rem;\n  padding: 2rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 02. Wall of Love (Masonry) </span>
          <TestimonialMasonry />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/test'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-indigo-900 text-white p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full blur-[100px] opacity-50"></div>
    
    <div className="relative z-10 md:w-1/3">
      <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="CEO" />
      </div>
    </div>
    
    <div className="relative z-10 md:w-2/3">
      <div className="text-6xl text-purple-400 mb-6 opacity-50">"</div>
      <h2 className="text-2xl md:text-4xl font-serif leading-relaxed mb-8">
        We improved our conversion rates by 400% within the first month. This is the single most important tool in our stack.
      </h2>
      <div>
        <div className="font-bold text-xl">Jennifer Lawrence</div>
        <div className="text-indigo-300">VP of Marketing, Stripe</div>
      </div>
    </div>
  </div>`} htmlCode={`<div class="bg-indigo-900 text-white p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
    <div class="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full blur-[100px] opacity-50"></div>
    
    <div class="relative z-10 md:w-1/3">
      <div class="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" class="w-full h-full object-cover" alt="CEO" />
      </div>
    </div>
    
    <div class="relative z-10 md:w-2/3">
      <div class="text-6xl text-purple-400 mb-6 opacity-50">"</div>
      <h2 class="text-2xl md:text-4xl font-serif leading-relaxed mb-8">
        We improved our conversion rates by 400% within the first month. This is the single most important tool in our stack.
      </h2>
      <div>
        <div class="font-bold text-xl">Jennifer Lawrence</div>
        <div class="text-indigo-300">VP of Marketing, Stripe</div>
      </div>
    </div>
  </div>`} cssCode={`/* TestimonialSpotlight Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  backdrop-filter: blur(12px);\n  background-color: #9333ea;\n  border-radius: 1.5rem;\n  border-radius: 1rem;\n  border-radius: 9999px;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #c084fc;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  height: 100%;\n  padding: 3rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 03. Spotlight Feature </span>
          <TestimonialSpotlight />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/test'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
      <div className="max-w-2xl min-h-[250px] flex flex-col justify-center">
        <div className="mb-6">
          <img src={testimonials[active].img} alt="" className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-gray-50 shadow-md" />
        </div>
        <p className="text-xl text-gray-700 font-medium mb-6 transition-opacity duration-300">
          "{testimonials[active].text}"
        </p>
        <div>
          <div className="font-bold text-gray-900">{testimonials[active].name}</div>
          <div className="text-sm text-gray-500">{testimonials[active].role}</div>
        </div>
      </div>
      
      <div className="flex gap-3 mt-8">
        {testimonials.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setActive(i)}
            className={\`w-3 h-3 rounded-full transition-all \${active === i ? 'bg-black w-8' : 'bg-gray-300 hover:bg-gray-400'}\`}
          />
        )`} htmlCode={`<div class="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
      <div class="max-w-2xl min-h-[250px] flex flex-col justify-center">
        <div class="mb-6">
          <img src=... alt="" class="w-20 h-20 rounded-full mx-auto object-cover border-4 border-gray-50 shadow-md" />
        </div>
        <p class="text-xl text-gray-700 font-medium mb-6 transition-opacity duration-300">
          "..."
        </p>
        <div>
          <div class="font-bold text-gray-900">...</div>
          <div class="text-sm text-gray-500">...</div>
        </div>
      </div>
      
      <div class="flex gap-3 mt-8">
        <!-- Mapping Start -->
(
          <button 
            key=... 
            onClick=...
            class=w-3 h-3 rounded-full transition-all \$...
          />
        )`} cssCode={`/* TestimonialSlider Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #ffffff;\n  border-color: #f3f4f6;\n  border-color: #f9fafb;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #111827;\n  color: #374151;\n  color: #6b7280;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  justify-content: center;\n  padding: 2rem;\n  text-align: center;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 04. Interactive Slider </span>
          <TestimonialSlider />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/test'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-black text-white p-12 rounded-3xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold">Hear from our customers</h2>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <div key={i} className="group cursor-pointer">
          <div className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden mb-4 border border-gray-700 group-hover:border-white transition-colors">
            {/* Fake Thumbnail Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
              <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-white ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
            <img src={t.img} className="w-full h-full object-cover opacity-80" alt="Video Thumb" />
          </div>
          <h3 className="font-bold text-lg leading-tight mb-1">"How {t.name.split(' ')[0]} scaled revenue"</h3>
          <p className="text-gray-400 text-sm">{t.role}</p>
        </div>
      ))}
    </div>
  </div>`} htmlCode={`<div class="bg-black text-white p-12 rounded-3xl">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold">Hear from our customers</h2>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Mapping Start -->
(
        <div key=... class="group cursor-pointer">
          <div class="relative aspect-video bg-gray-800 rounded-xl overflow-hidden mb-4 border border-gray-700 group-hover:border-white transition-colors">
            ...
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
              <div class="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 fill-white ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
            <img src=... class="w-full h-full object-cover opacity-80" alt="Video Thumb" />
          </div>
          <h3 class="font-bold text-lg leading-tight mb-1">"How ... scaled revenue"</h3>
          <p class="text-gray-400 text-sm">...</p>
        </div>
      ))}
    </div>
  </div>`} cssCode={`/* TestimonialVideo Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  backdrop-filter: blur(12px);\n  background-color: #000000;\n  background-color: #1f2937;\n  border-color: #374151;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  color: #9ca3af;\n  color: #ffffff;\n  display: flex;\n  font-weight: 700;\n  height: 100%;\n  justify-content: center;\n  padding: 3rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 05. Video Cards </span>
          <TestimonialVideo />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/test'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="relative flex items-center justify-center p-12 rounded-3xl overflow-hidden bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
    {/* Abstract Shapes */}
    <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 w-full max-w-4xl">
      {testimonials.slice(0, 2).map((t, i) => (
        <div key={i} className="bg-white/20 backdrop-blur-xl border border-white/30 p-8 rounded-2xl shadow-xl text-white">
          <div className="text-4xl mb-4 opacity-50">❞</div>
          <p className="text-lg font-medium mb-6 drop-shadow-sm">{t.text}</p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/30 p-0.5">
               <img src={t.img} className="w-full h-full rounded-full object-cover" alt={t.name} />
            </div>
            <div>
              <div className="font-bold">{t.name}</div>
              <div className="text-xs opacity-80">{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>`} htmlCode={`<div class="relative flex items-center justify-center p-12 rounded-3xl overflow-hidden bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
    ...
    <div class="absolute top-10 left-10 w-40 h-40 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 w-full max-w-4xl">
      <!-- Mapping Start -->
(
        <div key=... class="bg-white/20 backdrop-blur-xl border border-white/30 p-8 rounded-2xl shadow-xl text-white">
          <div class="text-4xl mb-4 opacity-50">❞</div>
          <p class="text-lg font-medium mb-6 drop-shadow-sm">...</p>
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-white/30 p-0.5">
               <img src=... class="w-full h-full rounded-full object-cover" alt=... />
            </div>
            <div>
              <div class="font-bold">...</div>
              <div class="text-xs opacity-80">...</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>`} cssCode={`/* TestimonialGlass Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  backdrop-filter: blur(12px);\n  background-color: #ffffff;\n  border-radius: 1.5rem;\n  border-radius: 1rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #ffffff;\n  display: flex;\n  font-weight: 700;\n  height: 100%;\n  justify-content: center;\n  padding: 0rem;\n  padding: 2rem;\n  padding: 3rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 06. Glassmorphism </span>
          <TestimonialGlass />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/test'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-black p-8 rounded-3xl border-2 border-cyan-500 relative overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
    
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-gray-900 border border-gray-800 p-6 relative group hover:border-cyan-500 transition-colors">
          <div className="text-cyan-500 font-mono text-xs mb-4">
            USER_ID: {1024 + i} <span className="animate-pulse">_</span>
          </div>
          <p className="text-gray-300 font-mono text-sm mb-6 border-l-2 border-gray-700 pl-3">
            {t.text}
          </p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-cyan-900 rounded-sm overflow-hidden grayscale">
              <img src={t.img} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="font-mono text-xs text-white uppercase">{t.name}</div>
          </div>
          {/* Decor corners */}
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      ))}
    </div>
  </div>`} htmlCode={`<div class="bg-black p-8 rounded-3xl border-2 border-cyan-500 relative overflow-hidden">
    <div class="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
    
    <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Mapping Start -->
(
        <div key=... class="bg-gray-900 border border-gray-800 p-6 relative group hover:border-cyan-500 transition-colors">
          <div class="text-cyan-500 font-mono text-xs mb-4">
            USER_ID: ... <span class="animate-pulse">_</span>
          </div>
          <p class="text-gray-300 font-mono text-sm mb-6 border-l-2 border-gray-700 pl-3">
            ...
          </p>
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-cyan-900 rounded-sm overflow-hidden grayscale">
              <img src=... class="w-full h-full object-cover" alt="" />
            </div>
            <div class="font-mono text-xs text-white uppercase">...</div>
          </div>
          ...
          <div class="absolute top-0 right-0 w-2 h-2 border-t border-r border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      ))}
    </div>
  </div>`} cssCode={`/* TestimonialCyber Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #000000;\n  background-color: #111827;\n  border-color: #1f2937;\n  border-color: #374151;\n  border-color: #ffffff;\n  border-radius: 1.5rem;\n  border-width: 1px; border-style: solid;\n  color: #ffffff;\n  display: flex;\n  height: 100%;\n  padding: 1.5rem;\n  padding: 2rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 07. Cyberpunk </span>
          <TestimonialCyber />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/test'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-[#e0e5ec] p-12 rounded-3xl">
    <div className="max-w-xl mx-auto">
      <div className="bg-[#e0e5ec] p-8 rounded-[30px] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center">
        <div className="w-24 h-24 mx-auto rounded-full p-2 bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] mb-6">
          <img src={testimonials[0].img} alt="" className="w-full h-full rounded-full object-cover" />
        </div>
        <div className="flex justify-center text-yellow-500 mb-4 text-xl shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff] w-fit mx-auto px-4 py-1 rounded-full">
          ★★★★★
        </div>
        <p className="text-gray-600 mb-6 italic">"{testimonials[0].text}"</p>
        <div className="font-bold text-gray-700">{testimonials[0].name}</div>
        <div className="text-sm text-gray-500">{testimonials[0].role}</div>
      </div>
    </div>
  </div>`} htmlCode={`<div class="bg-[#e0e5ec] p-12 rounded-3xl">
    <div class="max-w-xl mx-auto">
      <div class="bg-[#e0e5ec] p-8 rounded-[30px] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center">
        <div class="w-24 h-24 mx-auto rounded-full p-2 bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] mb-6">
          <img src=... alt="" class="w-full h-full rounded-full object-cover" />
        </div>
        <div class="flex justify-center text-yellow-500 mb-4 text-xl shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff] w-fit mx-auto px-4 py-1 rounded-full">
          ★★★★★
        </div>
        <p class="text-gray-600 mb-6 italic">"..."</p>
        <div class="font-bold text-gray-700">...</div>
        <div class="text-sm text-gray-500">...</div>
      </div>
    </div>
  </div>`} cssCode={`/* TestimonialNeumorphic Styles (Generated from Tailwind) */\n.component-root {\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #374151;\n  color: #4b5563;\n  color: #6b7280;\n  color: #eab308;\n  display: flex;\n  font-weight: 700;\n  height: 100%;\n  justify-content: center;\n  padding-left: 1rem; padding-right: 1rem;\n  padding-top: 0.25rem; padding-bottom: 0.25rem;\n  padding: 0.5rem;\n  padding: 2rem;\n  padding: 3rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 08. Neumorphic </span>
          <TestimonialNeumorphic />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/test'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-yellow-400 p-8 rounded-3xl border-4 border-black">
    <h2 className="text-5xl font-black uppercase mb-12 border-b-4 border-black pb-4 inline-block">Reviews</h2>
    
    <div className="space-y-8">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-white border-4 border-black p-6 shadow-[8px_8px_0_0_#000] flex flex-col md:flex-row gap-6 items-start hover:-translate-y-1 transition-transform">
          <div className="w-16 h-16 border-4 border-black flex-shrink-0">
            <img src={t.img} className="w-full h-full object-cover grayscale contrast-125" alt="" />
          </div>
          <div>
            <h3 className="font-black uppercase text-xl mb-2">{t.name} says:</h3>
            <p className="font-bold text-lg leading-tight">"{t.text.toUpperCase()}"</p>
          </div>
        </div>
      ))}
    </div>
  </div>`} htmlCode={`<div class="bg-yellow-400 p-8 rounded-3xl border-4 border-black">
    <h2 class="text-5xl font-black uppercase mb-12 border-b-4 border-black pb-4 inline-block">Reviews</h2>
    
    <div class="space-y-8">
      <!-- Mapping Start -->
(
        <div key=... class="bg-white border-4 border-black p-6 shadow-[8px_8px_0_0_#000] flex flex-col md:flex-row gap-6 items-start hover:-translate-y-1 transition-transform">
          <div class="w-16 h-16 border-4 border-black flex-shrink-0">
            <img src=... class="w-full h-full object-cover grayscale contrast-125" alt="" />
          </div>
          <div>
            <h3 class="font-black uppercase text-xl mb-2">... says:</h3>
            <p class="font-bold text-lg leading-tight">"..."</p>
          </div>
        </div>
      ))}
    </div>
  </div>`} cssCode={`/* TestimonialBrutalist Styles (Generated from Tailwind) */\n.component-root {\n  background-color: #facc15;\n  background-color: #ffffff;\n  border-color: #000000;\n  border-radius: 1.5rem;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  height: 100%;\n  padding: 1.5rem;\n  padding: 2rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 09. Brutalist </span>
          <TestimonialBrutalist />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/test'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/test:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-white p-12 rounded-3xl border-t border-gray-100">
    <div className="max-w-4xl mx-auto divide-y divide-gray-100">
      {testimonials.map((t, i) => (
        <div key={i} className="py-10 first:pt-0 last:pb-0 flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/4 flex items-center gap-3">
            <img src={t.img} className="w-10 h-10 rounded-full object-cover grayscale" alt="" />
            <div>
              <div className="font-medium text-gray-900">{t.name}</div>
              <div className="text-xs text-gray-400">{t.role}</div>
            </div>
          </div>
          <div className="md:w-3/4">
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              {t.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>`} htmlCode={`<div class="bg-white p-12 rounded-3xl border-t border-gray-100">
    <div class="max-w-4xl mx-auto divide-y divide-gray-100">
      <!-- Mapping Start -->
(
        <div key=... class="py-10 first:pt-0 last:pb-0 flex flex-col md:flex-row gap-8 items-start">
          <div class="md:w-1/4 flex items-center gap-3">
            <img src=... class="w-10 h-10 rounded-full object-cover grayscale" alt="" />
            <div>
              <div class="font-medium text-gray-900">...</div>
              <div class="text-xs text-gray-400">...</div>
            </div>
          </div>
          <div class="md:w-3/4">
            <p class="text-xl text-gray-600 font-light leading-relaxed">
              ...
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>`} cssCode={`/* TestimonialMinimal Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #ffffff;\n  border-color: #f3f4f6;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  color: #111827;\n  color: #4b5563;\n  color: #9ca3af;\n  display: flex;\n  flex-direction: column;\n  padding-top: 2.5rem; padding-bottom: 2.5rem;\n  padding: 3rem;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 10. Minimalist List </span>
          <TestimonialMinimal />
        </section>

      </div>
    </div>
  );
};

export default TestimonialGallery;