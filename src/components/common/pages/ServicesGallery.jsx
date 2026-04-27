import React, { useState } from 'react';
import CopyButton from '../CopyButton';



// --- SHARED ICONS ---
const Icons = {
  Sparkle: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
  ArrowRight: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>,
  Check: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>,
  Layer: () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
  Code: () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
};

// ==========================================
// GROUP 1: HERO SECTIONS (5 Variants)
// ==========================================

// 1. Minimal Typographic
export const HeroMinimal = () => (
  <section className="bg-white py-24 px-6 text-center border-b border-gray-100">
    <div className="max-w-4xl mx-auto">
      <div className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Our Expertise</div>
      <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
        We build digital <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">masterpieces.</span>
      </h1>
      <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
        From concept to code, we provide full-cycle development services designed to scale your business.
      </p>
    </div>
  </section>
);

// 2. Split Screen Video/Image
export const HeroSplit = () => (
  <section className="flex flex-col md:flex-row h-[500px] bg-slate-900 text-white overflow-hidden">
    <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
      <h1 className="text-4xl font-bold mb-6">Services that <br/> define the future.</h1>
      <p className="text-slate-400 mb-8 text-lg">We help brands navigate the digital landscape with precision engineering and creative design.</p>
      <button className="bg-white text-black px-6 py-3 rounded-full font-bold w-fit hover:bg-gray-200 transition-colors">Explore Solutions</button>
    </div>
    <div className="w-full md:w-1/2 bg-blue-600 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-900 opacity-80"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 border-4 border-white/20 rounded-full animate-ping"></div>
      </div>
    </div>
  </section>
);

// 3. Grid Tiles (Bento Hero)
export const HeroBento = () => (
  <section className="bg-gray-50 py-20 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 bg-white p-12 rounded-3xl border border-gray-200 flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Everything you need to grow.</h1>
        <p className="text-slate-500">Comprehensive services for modern startups.</p>
      </div>
      <div className="bg-black text-white p-8 rounded-3xl flex flex-col justify-between">
        <Icons.Sparkle />
        <div className="font-bold text-xl">Rated #1 in 2024</div>
      </div>
    </div>
  </section>
);

// 4. Dark Mode Glow
export const HeroGlow = () => (
  <section className="bg-black py-32 px-6 text-center relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[120px] opacity-20"></div>
    <div className="relative z-10">
      <h1 className="text-5xl font-bold text-white mb-6">Transform Your Reality</h1>
      <p className="text-indigo-200 text-xl max-w-2xl mx-auto">High-end consulting for the world's most ambitious companies.</p>
    </div>
  </section>
);

// 5. Brutalist
export const HeroBrutalist = () => (
  <section className="bg-yellow-400 py-24 px-6 border-b-4 border-black">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-6xl md:text-9xl font-black uppercase leading-none mb-8">
        We Make<br/>It Happen.
      </h1>
      <div className="flex gap-4">
        <div className="bg-white border-4 border-black px-6 py-3 font-bold uppercase">Design</div>
        <div className="bg-white border-4 border-black px-6 py-3 font-bold uppercase">Code</div>
        <div className="bg-black text-white border-4 border-black px-6 py-3 font-bold uppercase">Ship</div>
      </div>
    </div>
  </section>
);

// ==========================================
// GROUP 2: SERVICE GRIDS (5 Variants)
// ==========================================

// 1. Classic Icon Cards
export const GridClassic = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-transparent transition-all group">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            {i % 2 === 0 ? <Icons.Layer /> : <Icons.Code />}
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Web Development</h3>
          <p className="text-slate-500 leading-relaxed">We build scalable, high-performance web applications using the latest tech stack.</p>
          <div className="mt-6 text-blue-600 font-bold text-sm flex items-center gap-2 cursor-pointer">Learn more <Icons.ArrowRight /></div>
        </div>
      ))}
    </div>
  </section>
);

// 2. Interactive Accordion List
export const GridAccordion = () => {
  const [active, setActive] = useState(0);
  const services = [
    { title: "UI/UX Design", desc: "Crafting intuitive and beautiful user experiences." },
    { title: "Mobile Development", desc: "Native and cross-platform apps for iOS and Android." },
    { title: "Cloud Infrastructure", desc: "Scalable server solutions using AWS and Azure." },
    { title: "SEO & Marketing", desc: "Driving organic traffic and converting leads." },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className="border-b border-gray-200 last:border-0">
            <button onClick={() => setActive(i)} className="w-full py-8 text-left flex justify-between items-center group">
              <span className={`text-2xl md:text-4xl font-bold transition-colors ${active === i ? 'text-black' : 'text-gray-400 group-hover:text-gray-600'}`}>
                {s.title}
              </span>
              <span className={`text-2xl transition-transform duration-300 ${active === i ? 'rotate-45' : ''}`}>+</span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${active === i ? 'max-h-40 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
              <p className="text-xl text-gray-500 max-w-2xl">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// 3. Bento Grid (Asymmetrical)
export const GridBento = () => (
  <section className="py-20 px-6 bg-slate-900 text-white">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
      <div className="md:col-span-2 md:row-span-2 bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-slate-500 transition-colors flex flex-col justify-end relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
        <h3 className="text-3xl font-bold mb-2 relative z-10">Product Design</h3>
        <p className="text-slate-400 relative z-10">End-to-end design systems.</p>
      </div>
      <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-slate-500 transition-colors">
        <h3 className="text-xl font-bold mb-2">Strategy</h3>
        <p className="text-slate-400 text-sm">Market analysis & fit.</p>
      </div>
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 flex items-center justify-center">
        <span className="font-bold text-2xl">24/7 Support</span>
      </div>
      <div className="md:col-span-2 bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-slate-500 transition-colors flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-2">Development</h3>
        <p className="text-slate-400">Full stack engineering services.</p>
      </div>
    </div>
  </section>
);

// 4. Hover Reveal Images
export const GridReveal = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-5xl mx-auto space-y-4">
      {['Branding', 'Web Design', 'Photography', 'Motion'].map((item, i) => (
        <div key={i} className="group relative border-t border-gray-200 pt-8 pb-4 cursor-pointer hover:pl-4 transition-all duration-300">
          <div className="flex justify-between items-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent text-stroke-black group-hover:text-black transition-colors">{item}</h2>
            <span className="text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">Explore</span>
          </div>
          {/* Hover Image (Simulated with color block for demo) */}
          <div className="absolute top-1/2 right-20 -translate-y-1/2 w-64 h-40 bg-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rotate-3"></div>
        </div>
      ))}
    </div>
    <style>{`.text-stroke-black { -webkit-text-stroke: 1px black; color: transparent; }`}</style>
  </section>
);

// 5. Glassmorphism Cards
export const GridGlass = () => (
  <section className="py-20 px-6 bg-gradient-to-br from-rose-400 via-orange-300 to-yellow-200">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white/30 backdrop-blur-md border border-white/40 p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform">
          <div className="w-14 h-14 bg-white/50 rounded-full flex items-center justify-center mb-6 text-2xl">✨</div>
          <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-sm">Creative Direction</h3>
          <p className="text-white/90 font-medium">Leading the visual narrative for brands that want to stand out.</p>
        </div>
      ))}
    </div>
  </section>
);

// ==========================================
// GROUP 3: PROCESS / WORKFLOW (5 Variants)
// ==========================================

// 1. Horizontal Stepper
export const ProcessStepper = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {['Discovery', 'Strategy', 'Execution', 'Launch'].map((step, i) => (
          <div key={i} className="relative">
            {i !== 3 && <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gray-200"></div>}
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 relative z-10">
              {i + 1}
            </div>
            <h3 className="text-xl font-bold mb-2">{step}</h3>
            <p className="text-gray-500 text-sm">We analyze your needs and set the groundwork for success.</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 2. Zig-Zag Layout
export const ProcessZigZag = () => (
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-5xl mx-auto space-y-24">
      {[1, 2, 3].map((i) => (
        <div key={i} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
          <div className="w-full md:w-1/2">
            <div className="bg-gray-200 aspect-video rounded-2xl"></div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="text-blue-600 font-bold uppercase tracking-widest mb-2">Step 0{i}</div>
            <h3 className="text-3xl font-bold mb-4">Phase {i} Title</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Detailed explanation of this phase. We ensure transparency and collaboration throughout the entire lifecycle of the project.
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// 3. Sticky Scrolling
export const ProcessSticky = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
      <div className="md:w-1/2">
        <div className="sticky top-24">
          <h2 className="text-4xl font-bold mb-6">Our Process</h2>
          <div className="bg-gray-900 text-white p-8 rounded-3xl h-[400px] flex items-center justify-center">
            <span className="text-2xl">Dynamic Visuals Here</span>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 space-y-32 pt-12 md:pt-0">
        {[1, 2, 3].map((i) => (
          <div key={i} className="min-h-[50vh]">
            <div className="text-6xl font-bold text-gray-200 mb-4">0{i}</div>
            <h3 className="text-3xl font-bold mb-4">Detailed Step {i}</h3>
            <p className="text-xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 4. Vertical Timeline
export const ProcessTimeline = () => (
  <section className="py-20 px-6 bg-slate-900 text-white">
    <div className="max-w-3xl mx-auto relative border-l border-slate-700 ml-4 md:ml-0 md:pl-0 space-y-16">
      {[1, 2, 3].map((i) => (
        <div key={i} className="relative pl-12 md:pl-0 md:flex md:gap-12 md:items-center">
          <div className="absolute left-0 top-0 md:left-auto md:top-auto md:relative w-4 h-4 bg-blue-500 rounded-full -ml-[9px] md:ml-0 md:order-2 ring-4 ring-slate-900"></div>
          <div className="md:w-1/2 md:text-right md:pr-12 md:order-1">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Milestone {i}</h3>
          </div>
          <div className="md:w-1/2 md:pl-12 md:order-3">
            <p className="text-slate-400">
              We achieve this milestone by implementing core strategies and rigorous testing methodologies.
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// 5. Circular Cycle
export const ProcessCycle = () => (
  <section className="py-20 px-6 bg-white text-center">
    <h2 className="text-3xl font-bold mb-16">The Infinite Loop</h2>
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative">
      {/* Connecting Line (Desktop) */}
      <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
      
      {['Plan', 'Build', 'Iterate'].map((step, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
            <Icons.Check />
          </div>
          <h3 className="text-xl font-bold mb-2">{step}</h3>
          <p className="text-gray-500 text-sm">Continuous improvement is key to our delivery model.</p>
        </div>
      ))}
    </div>
  </section>
);

// ==========================================
// GROUP 4: PRICING / CTA (5 Variants)
// ==========================================

// 1. Three Tier Cards
export const PricingCards = () => (
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {['Starter', 'Pro', 'Enterprise'].map((plan, i) => (
        <div key={i} className={`p-8 rounded-3xl border ${i===1 ? 'bg-black text-white border-black transform md:-translate-y-4 shadow-xl' : 'bg-white border-gray-200'}`}>
          <h3 className="text-xl font-bold mb-4">{plan}</h3>
          <div className="text-4xl font-bold mb-6">${i === 0 ? '49' : i === 1 ? '99' : '299'}<span className="text-sm font-normal opacity-60">/mo</span></div>
          <ul className="space-y-4 mb-8 text-sm opacity-80">
            <li>✓ Feature One</li>
            <li>✓ Feature Two</li>
            <li>✓ Feature Three</li>
          </ul>
          <button className={`w-full py-3 rounded-xl font-bold ${i===1 ? 'bg-white text-black' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>Get Started</button>
        </div>
      ))}
    </div>
  </section>
);

// 2. Comparison Table
export const PricingTable = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
      <div className="grid grid-cols-4 bg-gray-50 p-4 font-bold border-b border-gray-200">
        <div className="col-span-1">Feature</div>
        <div className="text-center">Basic</div>
        <div className="text-center">Pro</div>
        <div className="text-center">Max</div>
      </div>
      {['Users', 'Storage', 'Support', 'Analytics'].map((feat, i) => (
        <div key={i} className="grid grid-cols-4 p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50">
          <div className="col-span-1 font-medium text-gray-700">{feat}</div>
          <div className="text-center text-gray-500">Limited</div>
          <div className="text-center font-bold text-blue-600">✓</div>
          <div className="text-center font-bold text-blue-600">✓</div>
        </div>
      ))}
    </div>
  </section>
);

// 3. Simple CTA (Minimal)
export const PricingSimple = () => (
  <section className="py-24 px-6 bg-blue-600 text-white text-center">
    <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to launch?</h2>
    <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">Stop waiting. Start building. We are ready to help you scale.</p>
    <div className="flex justify-center gap-4">
      <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors">Start Project</button>
      <button className="px-8 py-4 bg-blue-700 text-white border border-blue-500 rounded-full font-bold hover:bg-blue-800 transition-colors">Contact Us</button>
    </div>
  </section>
);

// 4. Toggle Monthly/Yearly
export const PricingToggle = () => {
  const [annual, setAnnual] = useState(false);
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Simple Pricing</h2>
      <div className="flex items-center justify-center gap-4 mb-12">
        <span className={!annual ? 'font-bold' : 'text-gray-500'}>Monthly</span>
        <button onClick={() => setAnnual(!annual)} className="w-12 h-6 bg-black rounded-full relative p-1 transition-colors">
          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${annual ? 'translate-x-6' : ''}`}></div>
        </button>
        <span className={annual ? 'font-bold' : 'text-gray-500'}>Yearly <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded ml-1">-20%</span></span>
      </div>
      <div className="max-w-sm mx-auto p-8 border-2 border-black rounded-3xl shadow-[8px_8px_0_0_#000]">
        <h3 className="text-2xl font-bold mb-2">All Access</h3>
        <div className="text-5xl font-black mb-6">${annual ? '199' : '29'}<span className="text-base font-normal text-gray-500">/mo</span></div>
        <button className="w-full py-3 bg-black text-white font-bold rounded-xl">Choose Plan</button>
      </div>
    </section>
  );
};

// 5. Contact Form Focus
export const PricingContact = () => (
  <section className="py-20 px-6 bg-slate-900 text-white">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-6">Let's talk numbers.</h2>
        <p className="text-slate-400 text-lg mb-8">
          Every project is unique. Tell us about your needs and we'll provide a custom quote within 24 hours.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">✉️</div>
            <span>hello@agency.com</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">📞</div>
            <span>+1 (555) 000-0000</span>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 bg-white text-black p-8 rounded-3xl">
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-4 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-black" />
          <input type="email" placeholder="Email" className="w-full p-4 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-black" />
          <textarea rows="4" placeholder="Project Details" className="w-full p-4 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-black resize-none"></textarea>
          <button className="w-full py-4 bg-black text-white font-bold rounded-xl hover:opacity-80">Send Request</button>
        </form>
      </div>
    </div>
  </section>
);

// ==========================================
// MASTER BUILDER
// ==========================================
// --- FULL CODE METADATA (Exhaustive & Standalone) ---
const metadata = {
    heroes: [
      { 
        name: "HeroMinimal",
        title: "Minimal Typographic", 
        jsx: `import React from 'react';

export const HeroMinimal = () => (
  <section className="bg-white py-24 px-6 text-center border-b border-gray-100 font-sans">
    <div className="max-w-4xl mx-auto">
      <div className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Our Expertise</div>
      <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
        We build digital <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">masterpieces.</span>
      </h1>
      <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
        From concept to code, we provide full-cycle development services designed to scale your business.
      </p>
    </div>
  </section>
);`, 
        html: `<section class="hero-minimal">
  <div class="container">
    <div class="tag">Our Expertise</div>
    <h1>We build digital <br> <span class="gradient-text">masterpieces.</span></h1>
    <p>From concept to code, we provide full-cycle development services designed to scale your business.</p>
  </div>
</section>`, 
        css: `.hero-minimal { background: white; padding: 120px 24px; text-align: center; border-bottom: 1px solid #f3f4f6; font-family: sans-serif; }
.hero-minimal .container { max-width: 896px; margin: 0 auto; }
.hero-minimal .tag { font-size: 14px; font-weight: 700; color: #2563eb; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 16px; }
.hero-minimal h1 { font-size: 48px; font-weight: 700; color: #0f172a; margin-bottom: 32px; letter-spacing: -0.05em; line-height: 1.1; }
@media (min-width: 768px) { .hero-minimal h1 { font-size: 80px; } }
.hero-minimal .gradient-text { background: linear-gradient(to right, #2563eb, #9333ea); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.hero-minimal p { font-size: 20px; color: #64748b; line-height: 1.6; max-width: 672px; margin: 0 auto; }`,
        js: ``
      },
      { 
        name: "HeroSplit",
        title: "Split Content", 
        jsx: `import React from 'react';

export const HeroSplit = () => (
  <section className="flex flex-col md:flex-row h-screen min-h-[600px] bg-slate-900 text-white overflow-hidden font-sans">
    <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center text-left">
      <div className="w-12 h-1 bg-blue-500 mb-8"></div>
      <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter italic">Services that <br/> define the future.</h1>
      <p className="text-slate-400 mb-10 text-xl leading-relaxed max-w-md">We help brands navigate the digital landscape with precision engineering and creative design.</p>
      <button className="bg-white text-black px-10 py-4 rounded-full font-black uppercase tracking-widest w-fit hover:scale-105 transition-transform shadow-2xl">Explore Solutions</button>
    </div>
    <div className="w-full md:w-1/2 bg-blue-600 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-900 opacity-80 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-48 h-48 border border-white/20 rounded-full animate-ping"></div>
        <div className="absolute w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center">
           <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/></svg>
        </div>
      </div>
    </div>
  </section>
);`, 
        html: `<section class="hero-split">
  <div class="content">
    <div class="line"></div>
    <h1>Services that <br> define the future.</h1>
    <p>We help brands navigate the digital landscape with precision engineering and creative design.</p>
    <button class="btn">Explore Solutions</button>
  </div>
  <div class="visual">
    <div class="ping"></div>
    <div class="play-btn">▶</div>
  </div>
</section>`, 
        css: `.hero-split { display: flex; flex-direction: column; height: 100vh; min-height: 600px; background: #0f172a; color: white; overflow: hidden; font-family: sans-serif; }
@media (min-width: 768px) { .hero-split { flex-direction: row; } }
.hero-split .content { width: 100%; padding: 64px; display: flex; flex-direction: column; justify-content: center; text-align: left; }
@media (min-width: 768px) { .hero-split .content { width: 50%; padding: 96px; } }
.hero-split .line { width: 48px; height: 4px; background: #3b82f6; margin-bottom: 32px; }
.hero-split h1 { font-size: 48px; font-weight: 700; font-style: italic; margin-bottom: 32px; line-height: 1.1; letter-spacing: -0.05em; }
@media (min-width: 768px) { .hero-split h1 { font-size: 72px; } }
.hero-split p { font-size: 18px; color: #94a3b8; margin-bottom: 40px; line-height: 1.6; max-width: 448px; }
.hero-split .btn { background: white; color: black; padding: 16px 40px; border-radius: 9999px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; border: none; cursor: pointer; transition: 0.3s; width: fit-content; }
.hero-split .visual { width: 100%; height: 100%; background: linear-gradient(to bottom right, #2563eb, #581c87); position: relative; overflow: hidden; }
@media (min-width: 768px) { .hero-split .visual { width: 50%; } }
.ping { position: absolute; inset: 0; margin: auto; width: 192px; height: 192px; border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; animation: ping 1.5s infinite; }
.play-btn { position: absolute; inset: 0; margin: auto; width: 80px; height: 80px; background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.3); border-radius: 50%; display: flex; items-center: center; justify-content: center; line-height: 80px; text-align: center; font-size: 24px; }
@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }`,
        js: ``
      },
      { 
        name: "HeroBento",
        title: "Bento Hero", 
        jsx: `import React from 'react';

export const HeroBento = () => (
  <section className="bg-slate-50 py-24 px-6 font-sans">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 bg-white p-12 md:p-16 rounded-[3rem] border border-gray-100 flex flex-col justify-center text-left shadow-sm">
        <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter leading-none">Everything you <br/> need to grow.</h1>
        <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-sm">Comprehensive services for modern startups and forward-thinking enterprises.</p>
        <div className="mt-10 flex gap-4">
           <div className="bg-slate-900 text-white p-4 rounded-2xl flex items-center gap-2">
             <span className="font-bold">Contact Us</span>
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="3"/></svg>
           </div>
        </div>
      </div>
      <div className="bg-indigo-600 text-white p-10 rounded-[3rem] flex flex-col justify-between items-start shadow-xl shadow-indigo-200">
        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl">✨</div>
        <div>
          <div className="text-4xl font-black mb-2 italic">#1</div>
          <div className="font-bold text-lg opacity-80 uppercase tracking-widest text-xs">Agency Choice 2024</div>
        </div>
      </div>
    </div>
  </section>
);`, 
        html: `<section class="hero-bento">
  <div class="container">
    <div class="card-main">
      <h1>Everything you <br> need to grow.</h1>
      <p>Comprehensive services for modern startups.</p>
      <div class="btn-box">Contact Us →</div>
    </div>
    <div class="card-stat">
      <div class="icon">✨</div>
      <div class="info">
        <div class="val">#1</div>
        <div class="label">Agency Choice 2024</div>
      </div>
    </div>
  </div>
</section>`, 
        css: `.hero-bento { background: #f8fafc; padding: 96px 24px; font-family: sans-serif; }
.hero-bento .container { max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 24px; }
@media (min-width: 768px) { .hero-bento .container { grid-template-columns: repeat(3, 1fr); } }
.card-main { background: white; padding: 64px; border-radius: 48px; border: 1px solid #f1f5f9; text-align: left; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
@media (min-width: 768px) { .card-main { grid-column: span 2; } }
.card-main h1 { font-size: 48px; font-weight: 900; color: #0f172a; margin-bottom: 24px; line-height: 1; letter-spacing: -0.05em; }
.card-main p { color: #64748b; font-size: 18px; max-width: 320px; line-height: 1.6; }
.btn-box { margin-top: 40px; background: #0f172a; color: white; padding: 16px 24px; border-radius: 16px; font-weight: 700; width: fit-content; }
.card-stat { background: #4f46e5; color: white; padding: 40px; border-radius: 48px; display: flex; flex-direction: column; justify-content: space-between; align-items: flex-start; box-shadow: 0 20px 25px -5px rgba(79, 70, 229, 0.2); }
.card-stat .icon { font-size: 32px; background: rgba(255,255,255,0.2); width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; border-radius: 16px; }
.card-stat .val { font-size: 40px; font-weight: 900; font-style: italic; margin-bottom: 8px; }
.card-stat .label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; opacity: 0.8; }`,
        js: ``
      },
      { 
        name: "HeroGlow",
        title: "Neon Glow", 
        jsx: `import React from 'react';

export const HeroGlow = () => (
  <section className="bg-black py-40 px-6 text-center relative overflow-hidden font-sans">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600 rounded-full blur-[160px] opacity-20"></div>
    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    <div className="relative z-10">
      <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">System_Online_v2.4</div>
      <h1 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none italic uppercase">Transform<br/><span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Your Reality</span></h1>
      <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium leading-relaxed opacity-80">High-end consulting and technical engineering for the world's most ambitious companies.</p>
    </div>
  </section>
);`, 
        html: `<section class="hero-glow">
  <div class="glow"></div>
  <div class="content">
    <div class="status">System_Online_v2.4</div>
    <h1>Transform<br><span>Your Reality</span></h1>
    <p>High-end consulting for the world's most ambitious companies.</p>
  </div>
</section>`, 
        css: `.hero-glow { background: black; padding: 160px 24px; text-align: center; position: relative; overflow: hidden; font-family: sans-serif; }
.hero-glow .glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 800px; height: 800px; background: #2563eb; border-radius: 50%; filter: blur(160px); opacity: 0.2; }
.hero-glow .content { position: relative; z-index: 10; }
.status { display: inline-block; padding: 6px 16px; background: rgba(37, 99, 235, 0.1); border: 1px solid rgba(37, 99, 235, 0.2); border-radius: 9999px; color: #60a5fa; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 32px; }
.hero-glow h1 { font-size: 60px; font-weight: 900; color: white; text-transform: uppercase; font-style: italic; line-height: 1; letter-spacing: -0.05em; margin-bottom: 40px; }
@media (min-width: 768px) { .hero-glow h1 { font-size: 96px; } }
.hero-glow h1 span { background: linear-gradient(to bottom, white, rgba(255,255,255,0.2)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.hero-glow p { font-size: 20px; color: #94a3b8; max-width: 672px; margin: 0 auto; line-height: 1.6; }`,
        js: ``
      },
      { 
        name: "HeroBrutalist",
        title: "Brutalist Impact", 
        jsx: `import React from 'react';

export const HeroBrutalist = () => (
  <section className="bg-yellow-400 py-32 px-6 border-b-8 border-black font-sans">
    <div className="max-w-7xl mx-auto text-left">
      <h1 className="text-7xl md:text-[10rem] font-black uppercase leading-[0.85] mb-12 tracking-tighter">
        We Make<br/>It Happen.
      </h1>
      <div className="flex flex-wrap gap-4">
        <div className="bg-white border-4 border-black px-10 py-5 font-black uppercase text-xl shadow-[8px_8px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">Design</div>
        <div className="bg-white border-4 border-black px-10 py-5 font-black uppercase text-xl shadow-[8px_8px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">Code</div>
        <div className="bg-black text-white border-4 border-black px-10 py-5 font-black uppercase text-xl shadow-[8px_8px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">Ship</div>
      </div>
    </div>
  </section>
);`, 
        html: `<section class="hero-brut">
  <div class="container">
    <h1>WE MAKE<br>IT HAPPEN.</h1>
    <div class="btn-row">
      <div class="btn-brut white">Design</div>
      <div class="btn-brut white">Code</div>
      <div class="btn-brut black">Ship</div>
    </div>
  </div>
</section>`, 
        css: `.hero-brut { background: #facc15; padding: 128px 24px; border-bottom: 8px solid black; font-family: sans-serif; }
.hero-brut .container { max-width: 1280px; margin: 0 auto; text-align: left; }
.hero-brut h1 { font-size: 72px; font-weight: 900; line-height: 0.85; text-transform: uppercase; letter-spacing: -0.05em; margin-bottom: 48px; }
@media (min-width: 768px) { .hero-brut h1 { font-size: 160px; } }
.btn-row { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-brut { border: 4px solid black; padding: 20px 40px; font-size: 24px; font-weight: 900; text-transform: uppercase; cursor: pointer; transition: 0.2s; box-shadow: 8px 8px 0 0 black; }
.btn-brut:hover { transform: translate(4px, 4px); box-shadow: none; }
.btn-brut.white { background: white; color: black; }
.btn-brut.black { background: black; color: white; }`,
        js: ``
      }
    ],
    grids: [
      { 
        name: "GridClassic",
        title: "Standard Grid", 
        jsx: `import React from 'react';

const Icons = {
  Code: () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  ArrowRight: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>,
};

export const GridClassic = () => (
  <section className="py-24 px-6 bg-white font-sans text-left">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="p-10 rounded-3xl border border-gray-100 hover:shadow-2xl hover:border-transparent transition-all duration-500 group">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform">
            <Icons.Code />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Enterprise Node Development</h3>
          <p className="text-slate-500 leading-relaxed font-medium">We build high-concurrency Node.js applications with real-time sync and distributed state management.</p>
          <div className="mt-8 text-blue-600 font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all cursor-pointer">Learn More <Icons.ArrowRight /></div>
        </div>
      ))}
    </div>
  </section>
);`, 
        html: `<section class="grid-classic">
  <div class="grid-container">
    <div class="svc-card">
      <div class="svc-icon">⎄</div>
      <h3>Node Development</h3>
      <p>We build high-concurrency Node.js applications with real-time sync.</p>
      <div class="svc-link">Learn More →</div>
    </div>
    <div class="svc-card">
      <div class="svc-icon">⌨</div>
      <h3>React Systems</h3>
      <p>Building scalable front-end architectures with atomic state management.</p>
      <div class="svc-link">Learn More →</div>
    </div>
    <div class="svc-card">
      <div class="svc-icon">☁</div>
      <h3>Cloud Native</h3>
      <p>Deploying resilient microservices on AWS, GCP and Azure platforms.</p>
      <div class="svc-link">Learn More →</div>
    </div>
    <div class="svc-card">
      <div class="svc-icon">⚙</div>
      <h3>DevOps Ops</h3>
      <p>Automated CI/CD pipelines for zero-downtime deployment cycles.</p>
      <div class="svc-link">Learn More →</div>
    </div>
    <div class="svc-card">
      <div class="svc-icon">⛨</div>
      <h3>Security Audit</h3>
      <p>Deep penetration testing and encryption protocol implementation.</p>
      <div class="svc-link">Learn More →</div>
    </div>
    <div class="svc-card">
      <div class="svc-icon">⚛</div>
      <h3>API Design</h3>
      <p>Designing robust GraphQL and RESTful interfaces for global consumption.</p>
      <div class="svc-link">Learn More →</div>
    </div>
  </div>
</section>`, 
        css: `.grid-classic { padding: 96px 24px; background: white; font-family: sans-serif; text-align: left; }
.grid-container { max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 32px; }
@media (min-width: 768px) { .grid-container { grid-template-columns: repeat(3, 1fr); } }
.svc-card { padding: 40px; border-radius: 24px; border: 1px solid #f1f5f9; transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
.svc-card:hover { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1); border-color: transparent; transform: translateY(-4px); }
.svc-icon { width: 64px; height: 64px; background: #eff6ff; color: #2563eb; border-radius: 16px; display: flex; items-center: center; justify-content: center; font-size: 24px; margin-bottom: 32px; transition: 0.3s; }
.svc-card:hover .svc-icon { transform: scale(1.1) rotate(6deg); background: #2563eb; color: white; }
.svc-card h3 { font-size: 24px; font-weight: 700; color: #0f172a; margin-bottom: 16px; letter-spacing: -0.02em; }
.svc-card p { color: #64748b; line-height: 1.6; font-weight: 500; }
.svc-link { margin-top: 32px; color: #2563eb; font-weight: 700; font-size: 14px; cursor: pointer; transition: gap 0.3s; }`,
        js: ``
      },
      { 
        name: "GridAccordion",
        title: "Vertical List", 
        jsx: `import React, { useState } from 'react';

export const GridAccordion = () => {
  const [active, setActive] = useState(0);
  const services = [
    { title: "UI/UX Architecture", desc: "Developing design systems that serve millions of users with absolute consistency across platforms." },
    { title: "Distributed Systems", desc: "Native and cross-platform infrastructure designed for 99.99% reliability under extreme load." },
    { title: "AI/ML Integration", desc: "Automating decision-making processes through deep learning and predictive analytics modules." },
    { title: "Security Auditing", desc: "End-to-end encryption protocols and real-time threat detection for enterprise applications." },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 font-sans text-left">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] mb-2">Service_Registry</div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase">Operation Modules</h2>
        </div>
        {services.map((s, i) => (
          <div key={i} className="border-b border-gray-200 last:border-0">
            <button onClick={() => setActive(i)} className="w-full py-10 text-left flex justify-between items-center group overflow-hidden">
              <span className={\`text-3xl md:text-5xl font-black transition-all duration-500 \${active === i ? 'text-blue-600 translate-x-4 italic' : 'text-slate-300 group-hover:text-slate-400'}\`}>
                {s.title.toUpperCase()}
              </span>
              <div className={\`w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center transition-all duration-500 \${active === i ? 'rotate-180 bg-blue-600 border-blue-600 text-white' : 'group-hover:border-slate-400'}\`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="3"/></svg>
              </div>
            </button>
            <div className={\`overflow-hidden transition-all duration-700 ease-in-out \${active === i ? 'max-h-60 opacity-100 pb-10 px-4' : 'max-h-0 opacity-0'}\`}>
              <p className="text-xl text-slate-500 max-w-3xl leading-relaxed font-medium border-l-4 border-blue-600 pl-8">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};`, 
        html: `<section class="svc-acc">
  <div class="container">
    <div class="registry-tag">Service_Registry</div>
    <h2 class="registry-title">Operation Modules</h2>
    <div class="acc-list">
      <div class="acc-item active" data-index="0">
        <button class="acc-btn">
          <span>UI/UX Architecture</span>
          <div class="acc-icon">↓</div>
        </button>
        <div class="acc-content">
          <p>Developing design systems that serve millions of users with absolute consistency.</p>
        </div>
      </div>
      <div class="acc-item" data-index="1">
        <button class="acc-btn">
          <span>Distributed Systems</span>
          <div class="acc-icon">↓</div>
        </button>
        <div class="acc-content">
          <p>Native and cross-platform infrastructure designed for 99.99% reliability.</p>
        </div>
      </div>
      <div class="acc-item" data-index="2">
        <button class="acc-btn">
          <span>AI/ML Integration</span>
          <div class="acc-icon">↓</div>
        </button>
        <div class="acc-content">
          <p>Automating decision-making processes through deep learning modules.</p>
        </div>
      </div>
      <div class="acc-item" data-index="3">
        <button class="acc-btn">
          <span>Security Auditing</span>
          <div class="acc-icon">↓</div>
        </button>
        <div class="acc-content">
          <p>End-to-end encryption protocols and real-time threat detection.</p>
        </div>
      </div>
    </div>
  </div>
</section>`, 
        css: `.svc-acc { padding: 96px 24px; background: #f8fafc; font-family: sans-serif; text-align: left; }
.svc-acc .container { max-width: 1024px; margin: 0 auto; }
.registry-tag { color: #2563eb; font-weight: 900; font-size: 10px; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 8px; }
.registry-title { font-size: 36px; font-weight: 900; font-style: italic; text-transform: uppercase; margin-bottom: 64px; color: #0f172a; }
.acc-item { border-bottom: 1px solid #e2e8f0; }
.acc-btn { width: 100%; padding: 40px 0; background: none; border: none; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: 0.3s; }
.acc-btn span { font-size: 32px; font-weight: 900; color: #cbd5e1; text-transform: uppercase; transition: 0.5s; }
@media (min-width: 768px) { .acc-btn span { font-size: 48px; } }
.acc-item.active .acc-btn span { color: #2563eb; transform: translateX(16px); font-style: italic; }
.acc-icon { width: 48px; height: 48px; border: 2px solid #e2e8f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; transition: 0.5s; }
.acc-item.active .acc-icon { background: #2563eb; color: white; border-color: #2563eb; transform: rotate(180deg); }
.acc-content { max-height: 0; opacity: 0; overflow: hidden; transition: 0.7s ease; }
.acc-item.active .acc-content { max-height: 200px; opacity: 1; padding-bottom: 40px; }
.acc-content p { font-size: 20px; color: #64748b; line-height: 1.6; border-left: 4px solid #2563eb; padding-left: 32px; max-width: 768px; }`,
        js: `const items = document.querySelectorAll('.acc-item');
items.forEach(item => {
  const btn = item.querySelector('.acc-btn');
  btn.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    items.forEach(i => i.classList.remove('active'));
    if (!isActive) item.classList.add('active');
  });
});`
      },
      { 
        name: "GridBento",
        title: "Bento Services", 
        jsx: `import React from 'react';

export const GridBento = () => (
  <section className="py-24 px-6 bg-slate-900 text-white font-sans text-left overflow-hidden">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
      <div className="md:col-span-2 md:row-span-2 bg-slate-800 rounded-[2.5rem] p-10 border border-slate-700 hover:border-blue-500 transition-all duration-700 flex flex-col justify-end relative group">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[140px] opacity-10 group-hover:opacity-30 transition-opacity"></div>
        <div className="mb-auto">
          <div className="w-16 h-16 bg-blue-500/20 backdrop-blur-xl border border-blue-500/30 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeWidth="2"/></svg>
          </div>
        </div>
        <h3 className="text-4xl font-black mb-4 relative z-10 italic tracking-tighter">Product Systems Architecture</h3>
        <p className="text-slate-400 relative z-10 text-lg leading-relaxed max-w-sm">End-to-end design systems and ultra-low latency infrastructure for global platforms.</p>
      </div>
      <div className="bg-slate-800/50 rounded-[2rem] p-8 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between items-start group">
        <div className="text-slate-500 font-black text-[10px] uppercase tracking-widest">Protocol_0x1</div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Strategy</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Hyper-growth market analysis and technical roadmap validation.</p>
        </div>
      </div>
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2rem] p-8 flex flex-col justify-between shadow-2xl shadow-indigo-500/20 group hover:scale-[1.02] transition-transform">
        <div className="text-white/20 font-black text-5xl italic tracking-tighter">24/7</div>
        <div className="font-bold text-xl leading-tight">Emergency Protocol Support</div>
      </div>
      <div className="md:col-span-2 bg-slate-800/50 rounded-[2rem] p-8 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between group">
        <div className="max-w-xs">
          <h3 className="text-2xl font-bold mb-2 tracking-tight italic uppercase">High-Level Development</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Full stack engineering services with specialized focus on Go and Rust modules.</p>
        </div>
        <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-700 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all cursor-pointer">
           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="3"/></svg>
        </div>
      </div>
    </div>
  </section>
);`, 
        html: `<section class="bento-svc">
  <div class="grid-layout">
    <div class="bento-card bento-main">
      <div class="bento-glow"></div>
      <h3>Product Systems Architecture</h3>
      <p>End-to-end design systems and ultra-low latency infrastructure.</p>
    </div>
    <div class="bento-card">
      <span class="protocol">Protocol_0x1</span>
      <h3>Strategy</h3>
      <p>Hyper-growth market analysis.</p>
    </div>
    <div class="bento-card grad">
      <div class="val">24/7</div>
      <div class="lbl">Emergency Support</div>
    </div>
    <div class="bento-card split">
      <div>
         <h3>Development</h3>
         <p>Full stack engineering services.</p>
      </div>
      <div class="arrow-btn">→</div>
    </div>
  </div>
</section>`, 
        css: `.bento-svc { padding: 96px 24px; background: #0f172a; color: white; font-family: sans-serif; text-align: left; }
.bento-svc .grid-layout { max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 24px; grid-auto-rows: 280px; }
@media (min-width: 768px) { .bento-svc .grid-layout { grid-template-columns: repeat(4, 1fr); } }
.bento-card { background: #1e293b; padding: 40px; border-radius: 40px; border: 1px solid #1e293b; transition: all 0.5s; position: relative; overflow: hidden; }
.bento-card:hover { border-color: #3b82f6; }
.bento-main { grid-column: span 2; grid-row: span 2; display: flex; flex-direction: column; justify-content: flex-end; }
.bento-glow { position: absolute; top: 0; right: 0; width: 400px; height: 400px; background: #2563eb; filter: blur(140px); opacity: 0.1; transition: 0.5s; }
.bento-main:hover .bento-glow { opacity: 0.3; }
.bento-card.grad { background: linear-gradient(to bottom right, #6366f1, #9333ea); border: none; box-shadow: 0 20px 25px -5px rgba(99, 102, 241, 0.2); }
.bento-card.split { grid-column: span 2; display: flex; align-items: center; justify-content: space-between; }
.bento-card h3 { font-size: 24px; font-weight: 700; margin-bottom: 8px; font-style: italic; text-transform: uppercase; letter-spacing: -0.02em; }
.bento-main h3 { font-size: 36px; line-height: 1.1; }
.protocol { color: #64748b; font-weight: 900; font-size: 10px; letter-spacing: 0.2em; display: block; margin-bottom: 16px; }
.arrow-btn { width: 64px; height: 64px; background: #0f172a; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 24px; border: 1px solid #334155; transition: 0.3s; }
.bento-card:hover .arrow-btn { background: #2563eb; color: white; border-color: #2563eb; }`,
        js: ``
      },
      { 
        name: "GridReveal",
        title: "Row Reveal", 
        jsx: `import React from 'react';

export const GridReveal = () => (
  <section className="py-24 px-6 bg-white font-sans text-left overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="mb-20">
         <div className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] mb-4 italic">Index_Catalogue</div>
         <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-none italic uppercase">Studio_Capabilities</h2>
      </div>
      <div className="space-y-4">
        {['Strategic Branding', 'Digital Engineering', 'Creative Direction', 'Motion Systems'].map((item, i) => (
          <div key={i} className="group relative border-t border-gray-200 pt-10 pb-6 cursor-pointer hover:pl-8 transition-all duration-500">
            <div className="flex justify-between items-center relative z-10">
              <h2 className="text-5xl md:text-8xl font-black text-transparent text-stroke-black group-hover:text-slate-900 transition-all duration-700 tracking-tighter uppercase italic">{item}</h2>
              <div className="flex items-center gap-6">
                <span className="text-sm font-black text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 italic uppercase tracking-widest">Entry_0x0{i+1}</span>
                <div className="w-16 h-16 rounded-full border-2 border-slate-100 flex items-center justify-center text-slate-200 group-hover:border-slate-900 group-hover:text-slate-900 transition-all duration-500">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="3"/></svg>
                </div>
              </div>
            </div>
            {/* Reveal Box */}
            <div className="absolute top-1/2 left-[40%] -translate-y-1/2 w-80 h-56 bg-slate-950 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none group-hover:-rotate-6 group-hover:scale-110 shadow-2xl shadow-black/40 flex items-center justify-center border border-white/10">
               <div className="text-blue-500 font-black text-4xl italic opacity-20">STUDIO</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <style>{\`.text-stroke-black { -webkit-text-stroke: 2px #e2e8f0; color: transparent; }\`}</style>
  </section>
);`, 
        html: `<section class="grid-reveal">
  <div class="container">
    <div class="reveal-header">
       <div class="tag">Index_Catalogue</div>
       <h2>Studio_Capabilities</h2>
    </div>
    <div class="reveal-rows">
      <div class="reveal-row">
        <div class="row-content">
          <h2 class="stroke-text">Strategic Branding</h2>
          <div class="row-info">
            <span class="row-tag">Entry_0x01</span>
            <div class="row-arrow">→</div>
          </div>
        </div>
        <div class="reveal-box">STUDIO</div>
      </div>
      <div class="reveal-row">
        <div class="row-content">
          <h2 class="stroke-text">Web Systems</h2>
          <div class="row-info">
            <span class="row-tag">Entry_0x02</span>
            <div class="row-arrow">→</div>
          </div>
        </div>
        <div class="reveal-box">ENGINE</div>
      </div>
      <div class="reveal-row">
        <div class="row-content">
          <h2 class="stroke-text">Motion Design</h2>
          <div class="row-info">
            <span class="row-tag">Entry_0x03</span>
            <div class="row-arrow">→</div>
          </div>
        </div>
        <div class="reveal-box">VISUAL</div>
      </div>
      <div class="reveal-row">
        <div class="row-content">
          <h2 class="stroke-text">Product Ops</h2>
          <div class="row-info">
            <span class="row-tag">Entry_0x04</span>
            <div class="row-arrow">→</div>
          </div>
        </div>
        <div class="reveal-box">STRATEGY</div>
      </div>
    </div>
  </div>
</section>`, 
        css: `.grid-reveal { padding: 96px 24px; background: white; font-family: sans-serif; text-align: left; overflow: hidden; }
.grid-reveal .container { max-width: 1152px; margin: 0 auto; }
.reveal-header { margin-bottom: 80px; }
.reveal-header .tag { color: #2563eb; font-weight: 900; font-size: 10px; letter-spacing: 0.4em; font-style: italic; margin-bottom: 16px; text-transform: uppercase; }
.reveal-header h2 { font-size: 48px; font-weight: 900; font-style: italic; color: #0f172a; text-transform: uppercase; letter-spacing: -0.05em; }
.reveal-row { position: relative; border-top: 1px solid #e5e7eb; padding: 40px 0; cursor: pointer; transition: 0.5s; }
.reveal-row:hover { padding-left: 32px; }
.row-content { display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 10; }
.stroke-text { font-size: 48px; font-weight: 900; color: transparent; -webkit-text-stroke: 2px #e2e8f0; text-transform: uppercase; font-style: italic; transition: 0.7s; letter-spacing: -0.05em; }
@media (min-width: 768px) { .stroke-text { font-size: 96px; } }
.reveal-row:hover .stroke-text { color: #0f172a; -webkit-text-stroke: 2px #0f172a; }
.row-info { display: flex; align-items: center; gap: 24px; }
.row-tag { color: #94a3b8; font-weight: 900; font-size: 14px; opacity: 0; transition: 0.5s; transform: translateX(16px); font-style: italic; }
.reveal-row:hover .row-tag { opacity: 1; transform: translateX(0); }
.row-arrow { width: 64px; height: 64px; border-radius: 50%; border: 2px solid #f1f5f9; display: flex; items-center: center; justify-content: center; font-size: 24px; color: #e2e8f0; transition: 0.5s; }
.reveal-row:hover .row-arrow { border-color: #0f172a; color: #0f172a; }
.reveal-box { position: absolute; top: 50%; left: 40%; transform: translateY(-50%) rotate(0deg) scale(0.8); width: 320px; height: 224px; background: #020617; border-radius: 32px; opacity: 0; transition: 0.7s cubic-bezier(0.4, 0, 0.2, 1); pointer-events: none; display: flex; align-items: center; justify-content: center; color: #2563eb; font-size: 36px; font-weight: 900; font-style: italic; }
.reveal-row:hover .reveal-box { opacity: 1; transform: translateY(-50%) rotate(-6deg) scale(1.1); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4); }`,
        js: ``
      },
      { 
        name: "GridGlass",
        title: "Glass Cards", 
        jsx: `import React from 'react';

export const GridGlass = () => (
  <section className="py-24 px-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 font-sans text-left relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white/20 backdrop-blur-2xl border border-white/30 p-12 rounded-[3.5rem] shadow-2xl hover:-translate-y-4 transition-all duration-500 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="w-16 h-16 bg-white/40 rounded-full flex items-center justify-center mb-10 text-3xl group-hover:scale-110 transition-transform">✨</div>
          <h3 className="text-3xl font-black text-white mb-6 drop-shadow-xl tracking-tighter italic">Creative<br/>Direction</h3>
          <p className="text-white font-medium text-lg leading-relaxed opacity-90 mb-10">Leading the visual narrative for world-class brands with a focus on high-fidelity impact and longevity.</p>
          <div className="flex items-center gap-3 text-white/50 text-[10px] font-black uppercase tracking-[0.3em] border-t border-white/10 pt-8">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Global_Expertise_0{i}
          </div>
        </div>
      ))}
    </div>
  </section>
);`, 
        html: `<section class="glass-svc">
  <div class="grid-container">
    <div class="glass-card">
      <div class="glass-icon">✨</div>
      <h3>Creative<br>Direction</h3>
      <p>Leading the visual narrative for world-class brands.</p>
      <div class="glass-footer">
        <span class="dot"></span>
        Global_Expertise_01
      </div>
    </div>
    <div class="glass-card">
      <div class="glass-icon">⚡</div>
      <h3>Rapid<br>Development</h3>
      <p>Building high-performance modules at absolute engineering speed.</p>
      <div class="glass-footer">
        <span class="dot"></span>
        Global_Expertise_02
      </div>
    </div>
    <div class="glass-card">
      <div class="glass-icon">🛡</div>
      <h3>System<br>Security</h3>
      <p>Implementing zero-trust protocols for enterprise-level safety.</p>
      <div class="glass-footer">
        <span class="dot"></span>
        Global_Expertise_03
      </div>
    </div>
  </div>
</section>`, 
        css: `.glass-svc { padding: 96px 24px; background: linear-gradient(to bottom right, #6366f1, #a855f7, #ec4899); font-family: sans-serif; position: relative; overflow: hidden; text-align: left; }
.glass-svc .grid-container { max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 40px; }
@media (min-width: 768px) { .glass-svc .grid-container { grid-template-columns: repeat(3, 1fr); } }
.glass-card { background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.3); padding: 48px; border-radius: 56px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15); transition: 0.5s; position: relative; overflow: hidden; }
.glass-card:hover { transform: translateY(-16px); }
.glass-icon { width: 64px; height: 64px; background: rgba(255, 255, 255, 0.4); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px; margin-bottom: 40px; }
.glass-card h3 { font-size: 32px; font-weight: 900; color: white; margin-bottom: 24px; font-style: italic; line-height: 1.1; letter-spacing: -0.05em; }
.glass-card p { color: white; font-size: 18px; line-height: 1.6; font-weight: 500; opacity: 0.9; margin-bottom: 40px; }
.glass-footer { border-top: 1px solid rgba(255, 255, 255, 0.1); pt: 32px; margin-top: 32px; display: flex; align-items: center; gap: 12px; color: rgba(255, 255, 255, 0.5); font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; }
.dot { width: 8px; height: 8px; background: white; border-radius: 50%; animation: pulse 2s infinite; }
@keyframes pulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }`,
        js: ``
      }
    ],
    processes: [
      { 
        name: "ProcessStepper",
        title: "Horizontal Stepper", 
        jsx: `import React from 'react';

export const ProcessStepper = () => (
  <section className="py-24 px-6 bg-white font-sans text-left overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {['Discovery', 'Strategy', 'Execution', 'Launch'].map((step, i) => (
          <div key={i} className="relative group">
            {i !== 3 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-slate-100 group-hover:bg-blue-100 transition-colors"></div>}
            <div className="w-16 h-16 bg-slate-950 text-white rounded-[1.5rem] flex items-center justify-center font-black text-2xl mb-10 relative z-10 group-hover:bg-blue-600 group-hover:rotate-12 transition-all duration-500 shadow-xl shadow-black/10">{i + 1}</div>
            <div className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-3 opacity-0 group-hover:opacity-100 transition-opacity">Phase_0x0{i+1}</div>
            <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tighter italic uppercase">{step}</h3>
            <p className="text-slate-500 font-medium leading-relaxed">Systematic analysis of core requirements to establish a high-fidelity roadmap for architecture scaling.</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);`, 
        html: `<section class="proc-step">
  <div class="container">
    <div class="step-card">
      <div class="step-line"></div>
      <div class="step-num">1</div>
      <div class="step-tag">Phase_0x01</div>
      <h3>Discovery</h3>
      <p>Systematic analysis of core requirements.</p>
    </div>
    <div class="step-card">
      <div class="step-line"></div>
      <div class="step-num">2</div>
      <div class="step-tag">Phase_0x02</div>
      <h3>Strategy</h3>
      <p>Developing a roadmap for technical execution.</p>
    </div>
    <div class="step-card">
      <div class="step-line"></div>
      <div class="step-num">3</div>
      <div class="step-tag">Phase_0x03</div>
      <h3>Execution</h3>
      <p>Building high-fidelity modules and protocols.</p>
    </div>
    <div class="step-card">
      <div class="step-num">4</div>
      <h3>Launch</h3>
      <div class="step-tag">Phase_0x04</div>
      <p>Production deployment and performance tuning.</p>
    </div>
  </div>
</section>`, 
        css: `.proc-step { padding: 96px 24px; background: white; font-family: sans-serif; text-align: left; }
.proc-step .container { max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 48px; }
@media (min-width: 768px) { .proc-step .container { grid-template-columns: repeat(4, 1fr); } }
.step-card { position: relative; }
.step-line { display: none; position: absolute; top: 32px; left: 50%; width: 100%; height: 4px; background: #f1f5f9; transition: 0.3s; }
@media (min-width: 768px) { .step-line { display: block; } }
.step-card:hover .step-line { background: #dbeafe; }
.step-num { width: 64px; height: 64px; background: #0f172a; color: white; border-radius: 24px; display: flex; items-center: center; justify-content: center; font-size: 24px; font-weight: 900; margin-bottom: 40px; position: relative; z-index: 10; transition: all 0.5s; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
.step-card:hover .step-num { background: #2563eb; transform: rotate(12deg); }
.step-tag { font-size: 10px; font-weight: 900; color: #2563eb; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 12px; opacity: 0; transition: 0.3s; }
.step-card:hover .step-tag { opacity: 1; }
.step-card h3 { font-size: 24px; font-weight: 900; font-style: italic; text-transform: uppercase; color: #0f172a; margin-bottom: 16px; letter-spacing: -0.05em; }
.step-card p { font-size: 16px; color: #64748b; line-height: 1.6; font-weight: 500; }`,
        js: ``
      },
      { 
        name: "ProcessZigZag",
        title: "Zig-Zag Process", 
        jsx: `import React from 'react';

export const ProcessZigZag = () => (
  <section className="py-24 px-6 bg-slate-50 font-sans text-left overflow-hidden">
    <div className="max-w-6xl mx-auto space-y-40">
      {[1, 2, 3].map((i) => (
        <div key={i} className={\`flex flex-col md:flex-row items-center gap-20 \${i % 2 === 0 ? '' : 'md:flex-row-reverse'}\`}>
          <div className="w-full md:w-1/2 relative">
            <div className="bg-white border border-gray-100 aspect-video rounded-[3rem] shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-full h-full flex items-center justify-center text-[10rem] font-black text-slate-900 opacity-[0.03] tracking-tighter italic select-none">0{i}</div>
              <div className="absolute bottom-10 left-10 w-20 h-1.5 bg-blue-600 rounded-full"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-6 italic">Protocol_Sync_0{i}</div>
            <h3 className="text-5xl font-black mb-8 text-slate-900 tracking-tighter italic uppercase leading-none">Architecture & Build Sync</h3>
            <p className="text-slate-500 text-xl leading-relaxed mb-10 font-medium">Developing a high-performance blueprint of your ecosystem, ensuring every micro-module communicates with absolute parity across the infrastructure.</p>
            <div className="grid grid-cols-2 gap-4">
               {['Elastic Scaling', 'State Persistence', 'Async Queues', 'Zero Downtime'].map(feat => (
                 <div key={feat} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {feat}
                 </div>
               ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);`, 
        html: `<section class="proc-zigzag">
  <div class="container">
    <div class="zigzag-row">
      <div class="visual-box">
        <div class="num-bg">01</div>
        <div class="deco-line"></div>
      </div>
      <div class="content-box">
        <div class="tag">Protocol_Sync_01</div>
        <h3>Architecture Sync</h3>
        <p>Developing a high-performance blueprint of your ecosystem.</p>
        <div class="feat-grid">
          <div class="feat"><span></span> Elastic Scaling</div>
          <div class="feat"><span></span> State Persistence</div>
        </div>
      </div>
    </div>
    <div class="zigzag-row">
      <div class="visual-box">
        <div class="num-bg">02</div>
        <div class="deco-line"></div>
      </div>
      <div class="content-box">
        <div class="tag">Build_Cycle_02</div>
        <h3>Engineering Phase</h3>
        <p>Executing the codebase with absolute precision and modularity.</p>
        <div class="feat-grid">
          <div class="feat"><span></span> Atomic Updates</div>
          <div class="feat"><span></span> Zero-Trust Security</div>
        </div>
      </div>
    </div>
    <div class="zigzag-row">
      <div class="visual-box">
        <div class="num-bg">03</div>
        <div class="deco-line"></div>
      </div>
      <div class="content-box">
        <div class="tag">Deploy_Ops_03</div>
        <h3>Global Rollout</h3>
        <p>Scaling your solution across three time zones with zero friction.</p>
        <div class="feat-grid">
          <div class="feat"><span></span> Edge Caching</div>
          <div class="feat"><span></span> Multi-Region Sync</div>
        </div>
      </div>
    </div>
  </div>
</section>`, 
        css: `.proc-zigzag { padding: 120px 24px; background: #f8fafc; font-family: sans-serif; text-align: left; }
.proc-zigzag .container { max-width: 1152px; margin: 0 auto; display: flex; flex-direction: column; gap: 160px; }
.zigzag-row { display: flex; flex-direction: column; gap: 80px; align-items: center; }
@media (min-width: 768px) { 
  .zigzag-row { flex-direction: row; }
  .zigzag-row:nth-child(even) { flex-direction: row-reverse; }
}
.visual-box { width: 100%; aspect-ratio: 16/9; background: white; border-radius: 48px; border: 1px solid #f1f5f9; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.05); position: relative; overflow: hidden; }
@media (min-width: 768px) { .visual-box { width: 50%; } }
.num-bg { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 160px; font-weight: 900; color: #0f172a; opacity: 0.03; font-style: italic; letter-spacing: -0.05em; }
.deco-line { position: absolute; bottom: 40px; left: 40px; width: 80px; height: 6px; background: #2563eb; border-radius: 99px; }
.content-box { width: 100%; }
@media (min-width: 768px) { .content-box { width: 50%; } }
.content-box .tag { display: inline-block; padding: 6px 16px; background: rgba(37, 99, 235, 0.1); border-radius: 99px; color: #2563eb; font-size: 10px; font-weight: 900; letter-spacing: 0.4em; margin-bottom: 24px; font-style: italic; text-transform: uppercase; }
.content-box h3 { font-size: 48px; font-weight: 900; font-style: italic; text-transform: uppercase; color: #0f172a; line-height: 1; letter-spacing: -0.05em; margin-bottom: 32px; }
.content-box p { font-size: 20px; color: #64748b; font-weight: 500; line-height: 1.6; margin-bottom: 40px; }
.feat-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.feat { display: flex; align-items: center; gap: 12px; font-weight: 700; font-size: 14px; color: #334155; }
.feat span { width: 8px; height: 8px; background: #2563eb; border-radius: 50%; }`,
        js: ``
      },
      { 
        name: "ProcessSticky",
        title: "Sticky Vertical", 
        jsx: `import React from 'react';

export const ProcessSticky = () => (
  <section className="py-24 px-6 bg-white font-sans text-left">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-24">
      <div className="md:w-[40%]">
        <div className="sticky top-24">
          <div className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] mb-4 italic">Operational_Path</div>
          <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8 uppercase italic">Route to<br/>Absolute<br/>Delivery.</h2>
          <p className="text-slate-500 font-medium text-xl leading-relaxed max-w-sm">A tactical approach to building high-concurrency systems that never fail under extreme enterprise pressure.</p>
          <div className="mt-12 w-24 h-24 bg-slate-100 rounded-3xl flex items-center justify-center border-2 border-dashed border-slate-200">
             <div className="w-12 h-12 bg-white rounded-full animate-spin border-4 border-blue-600 border-t-transparent"></div>
          </div>
        </div>
      </div>
      <div className="md:w-[60%] space-y-64 pt-24">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="min-h-[50vh] border-l-8 border-slate-50 pl-16 hover:border-blue-600 transition-all duration-700 group relative">
            <div className="absolute -left-[36px] top-0 w-16 h-16 bg-white border-4 border-slate-100 rounded-2xl flex items-center justify-center font-black text-slate-200 group-hover:border-blue-600 group-hover:text-blue-600 transition-all duration-500 shadow-sm shadow-black/5 z-10">0{i}</div>
            <div className="text-slate-900 font-black text-5xl tracking-tighter leading-none mb-6 uppercase italic">Critical System Integration</div>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">Deploying secure tunnels and automated CI/CD protocols to establish a zero-friction development environment for engineering teams across three time zones.</p>
            <div className="mt-8 flex gap-3">
               <div className="w-10 h-10 bg-slate-50 rounded-xl border border-slate-100"></div>
               <div className="w-10 h-10 bg-slate-50 rounded-xl border border-slate-100"></div>
               <div className="w-10 h-10 bg-slate-50 rounded-xl border border-slate-100"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);`, 
        html: `<section class="sticky-proc">
  <div class="container">
    <div class="sticky-side">
      <div class="tag">Operational_Path</div>
      <h2>Route to<br>Absolute<br>Delivery.</h2>
      <p>A tactical approach to building high-concurrency systems.</p>
    </div>
    <div class="flow-side">
      <div class="flow-step">
        <div class="step-badge">01</div>
        <h3>Critical System Integration</h3>
        <p>Deploying secure tunnels and automated CI/CD protocols.</p>
      </div>
      <div class="flow-step">
        <div class="step-badge">02</div>
        <h3>Database Synchronization</h3>
        <p>Implementing real-time data streaming and distributed consistency.</p>
      </div>
      <div class="flow-step">
        <div class="step-badge">03</div>
        <h3>Frontend Acceleration</h3>
        <p>Optimizing critical render paths for sub-100ms response times.</p>
      </div>
      <div class="flow-step">
        <div class="step-badge">04</div>
        <h3>Security Hardening</h3>
        <p>Performing deep penetration tests and implementing WAF rules.</p>
      </div>
    </div>
  </div>
</section>`, 
        css: `.sticky-proc { padding: 120px 24px; background: white; font-family: sans-serif; text-align: left; }
.sticky-proc .container { max-width: 1152px; margin: 0 auto; display: flex; flex-direction: column; gap: 96px; }
@media (min-width: 768px) { .sticky-proc .container { flex-direction: row; } }
.sticky-side { width: 100%; }
@media (min-width: 768px) { .sticky-side { width: 40%; position: sticky; top: 96px; height: fit-content; } }
.sticky-side .tag { color: #2563eb; font-weight: 900; font-size: 10px; letter-spacing: 0.4em; font-style: italic; margin-bottom: 16px; text-transform: uppercase; }
.sticky-side h2 { font-size: 64px; font-weight: 900; color: #0f172a; line-height: 0.9; text-transform: uppercase; letter-spacing: -0.05em; font-style: italic; margin-bottom: 32px; }
.sticky-side p { font-size: 20px; color: #64748b; line-height: 1.6; font-weight: 500; }
.flow-side { width: 100%; display: flex; flex-direction: column; gap: 240px; padding-top: 96px; }
@media (min-width: 768px) { .flow-side { width: 60%; } }
.flow-step { position: relative; padding-left: 64px; border-left: 8px solid #f8fafc; transition: 0.5s; }
.flow-step:hover { border-color: #2563eb; }
.step-badge { position: absolute; left: -36px; top: 0; width: 64px; height: 64px; background: white; border: 4px solid #f1f5f9; border-radius: 16px; display: flex; items-center: center; justify-content: center; font-weight: 900; font-size: 24px; color: #cbd5e1; transition: 0.5s; z-index: 10; }
.flow-step:hover .step-badge { border-color: #2563eb; color: #2563eb; }
.flow-step h3 { font-size: 40px; font-weight: 900; color: #0f172a; line-height: 1; text-transform: uppercase; font-style: italic; letter-spacing: -0.05em; margin-bottom: 24px; }
.flow-step p { font-size: 18px; color: #64748b; font-weight: 500; line-height: 1.6; }`,
        js: ``
      },
      { 
        name: "ProcessTimeline",
        title: "Vertical Timeline", 
        jsx: `import React from 'react';

export const ProcessTimeline = () => (
  <section className="py-24 px-6 bg-slate-950 text-white font-sans text-left overflow-hidden">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-24">
         <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-[0.5em] mb-6">Engine_Pulse_v1.0</div>
         <h2 className="text-5xl font-black italic tracking-tighter uppercase leading-none">Systematic Build Log</h2>
      </div>
      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 md:pl-0 space-y-24">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="relative pl-16 group">
            <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -ml-[9px] ring-[12px] ring-slate-950 group-hover:scale-150 group-hover:bg-cyan-400 transition-all duration-500 shadow-[0_0_20px_rgba(37,99,235,0.6)]"></div>
            <div className="text-blue-500 font-black text-[10px] uppercase tracking-[0.5em] mb-3 opacity-60 group-hover:opacity-100 transition-opacity">Milestone_0x0{i}</div>
            <h3 className="text-3xl font-black text-white mb-4 tracking-tight uppercase italic leading-none group-hover:translate-x-2 transition-transform duration-500">Core Network Sync & Load Balancing</h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium opacity-80 group-hover:opacity-100 transition-opacity">Establishing zero-trust security tunnels and global load balancer clusters to ensure sub-10ms latency for cross-continental request routing.</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);`, 
        html: `<section class="dark-timeline">
  <div class="container">
    <div class="timeline-header">
       <div class="pulse-tag">Engine_Pulse_v1.0</div>
       <h2>Systematic Build Log</h2>
    </div>
    <div class="timeline-flow">
      <div class="timeline-item">
        <div class="node"></div>
        <div class="node-tag">Milestone_0x01</div>
        <h3>Core Network Sync</h3>
        <p>Establishing zero-trust security tunnels and global load balancer clusters.</p>
      </div>
      <div class="timeline-item">
        <div class="node"></div>
        <div class="node-tag">Milestone_0x02</div>
        <h3>API Gateway Layer</h3>
        <p>Designing robust entry points with rate limiting and automated documentation.</p>
      </div>
      <div class="timeline-item">
        <div class="node"></div>
        <div class="node-tag">Milestone_0x03</div>
        <h3>State Management</h3>
        <p>Implementing distributed caching and real-time state persistence protocols.</p>
      </div>
      <div class="timeline-item">
        <div class="node"></div>
        <div class="node-tag">Milestone_0x04</div>
        <h3>Global Deployment</h3>
        <p>Scaling containers across 15+ regions with zero-downtime rolling updates.</p>
      </div>
    </div>
  </div>
</section>`, 
        css: `.dark-timeline { padding: 120px 24px; background: #020617; color: white; font-family: sans-serif; text-align: left; }
.dark-timeline .container { max-width: 896px; margin: 0 auto; }
.timeline-header { text-align: center; margin-bottom: 96px; }
.pulse-tag { display: inline-block; padding: 6px 16px; background: rgba(37, 99, 235, 0.1); border: 1px solid rgba(37, 99, 235, 0.2); border-radius: 99px; color: #60a5fa; font-size: 10px; font-weight: 900; letter-spacing: 0.5em; margin-bottom: 24px; text-transform: uppercase; }
.timeline-header h2 { font-size: 48px; font-weight: 900; font-style: italic; letter-spacing: -0.05em; text-transform: uppercase; }
.timeline-flow { border-left: 2px solid #1e293b; position: relative; }
.timeline-item { position: relative; padding-left: 64px; margin-bottom: 96px; }
.node { position: absolute; left: -9px; top: 0; width: 16px; height: 16px; background: #2563eb; border-radius: 50%; box-shadow: 0 0 0 12px #020617, 0 0 20px rgba(37, 99, 235, 0.6); transition: 0.5s; }
.timeline-item:hover .node { transform: scale(1.5); background: #22d3ee; }
.node-tag { color: #2563eb; font-weight: 900; font-size: 10px; text-transform: uppercase; letter-spacing: 0.5em; opacity: 0.6; margin-bottom: 12px; }
.timeline-item:hover .node-tag { opacity: 1; }
.timeline-item h3 { font-size: 32px; font-weight: 900; text-transform: uppercase; font-style: italic; margin-bottom: 16px; transition: 0.5s; letter-spacing: -0.02em; }
.timeline-item:hover h3 { transform: translateX(8px); }
.timeline-item p { color: #94a3b8; font-size: 18px; line-height: 1.6; font-weight: 500; opacity: 0.8; transition: 0.5s; }
.timeline-item:hover p { opacity: 1; }`,
        js: ``
      },
      { 
        name: "ProcessCycle",
        title: "Infinite Loop", 
        jsx: `import React from 'react';

export const ProcessCycle = () => (
  <section className="py-32 px-6 bg-white text-center font-sans overflow-hidden">
    <div className="mb-24">
       <h2 className="text-6xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">The Iterative Engine.</h2>
       <p className="text-slate-500 font-medium mt-6 text-xl">Continuous improvement as a fundamental architecture law.</p>
    </div>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative">
      <div className="hidden md:block absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-100 to-transparent -z-10"></div>
      {['Analyze & Plan', 'Sprint & Build', 'Deploy & Optimize'].map((step, i) => (
        <div key={i} className="bg-white p-12 rounded-[3rem] border border-slate-50 shadow-[0_30px_100px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 group relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 p-8 text-6xl font-black text-slate-900 opacity-[0.03] italic tracking-tighter leading-none">0{i+1}</div>
          <div className="w-24 h-24 bg-slate-950 text-white rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:rotate-6 transition-all duration-700 shadow-xl shadow-black/10">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeWidth="2"/></svg>
          </div>
          <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tight italic uppercase">{step}</h3>
          <p className="text-slate-500 font-medium leading-relaxed">Continuous integration protocols ensure that every atomic code change adds immediate measurable business value.</p>
        </div>
      ))}
    </div>
  </section>
);`, 
        html: `<section class="inf-cycle">
  <div class="cycle-header">
     <h2>The Iterative Engine.</h2>
     <p>Continuous improvement as a fundamental law.</p>
  </div>
  <div class="cycle-grid">
    <div class="cycle-card">
      <div class="card-num">01</div>
      <div class="card-icon">↻</div>
      <h3>Analyze & Plan</h3>
      <p>Continuous integration protocols ensure measurable value.</p>
    </div>
    <div class="cycle-card">
      <div class="card-num">02</div>
      <div class="card-icon">⚡</div>
      <h3>Sprint & Build</h3>
      <p>Rapid development cycles focused on high-fidelity features.</p>
    </div>
    <div class="cycle-card">
      <div class="card-num">03</div>
      <div class="card-icon">🚀</div>
      <h3>Deploy & Optimize</h3>
      <p>Continuous monitoring and performance tuning for global scale.</p>
    </div>
  </div>
</section>`, 
        css: `.inf-cycle { padding: 120px 24px; background: white; text-align: center; font-family: sans-serif; }
.cycle-header { margin-bottom: 96px; }
.cycle-header h2 { font-size: 60px; font-weight: 900; color: #0f172a; text-transform: uppercase; font-style: italic; letter-spacing: -0.05em; line-height: 1; }
.cycle-header p { font-size: 20px; color: #64748b; font-weight: 500; margin-top: 24px; }
.cycle-grid { max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 48px; position: relative; }
@media (min-width: 768px) { .cycle-grid { grid-template-columns: repeat(3, 1fr); } }
.cycle-card { background: white; padding: 48px; border-radius: 56px; border: 1px solid #f8fafc; box-shadow: 0 30px 100px rgba(0,0,0,0.06); transition: all 0.7s; position: relative; overflow: hidden; text-align: left; }
.cycle-card:hover { transform: translateY(-16px); box-shadow: 0 40px 120px rgba(0,0,0,0.12); }
.card-num { position: absolute; top: 32px; right: 32px; font-size: 64px; font-weight: 900; color: #0f172a; opacity: 0.03; font-style: italic; letter-spacing: -0.05em; }
.card-icon { width: 96px; height: 96px; background: #0f172a; color: white; border-radius: 32px; display: flex; items-center: center; justify-content: center; font-size: 40px; margin-bottom: 40px; transition: 0.7s; }
.cycle-card:hover .card-icon { background: #2563eb; transform: rotate(6deg); }
.cycle-card h3 { font-size: 24px; font-weight: 900; font-style: italic; text-transform: uppercase; color: #0f172a; margin-bottom: 16px; letter-spacing: -0.02em; }
.cycle-card p { font-size: 16px; color: #64748b; line-height: 1.6; font-weight: 500; }`,
        js: ``
      }
    ],
    pricings: [
      { 
        name: "PricingCards",
        title: "SaaS Cards", 
        jsx: `import React from 'react';

export const PricingCards = () => (
  <section className="py-24 px-6 bg-slate-50 font-sans text-left">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      {['Starter Pack', 'Production Pro', 'Enterprise Ops'].map((plan, i) => (
        <div key={i} className={\`p-12 rounded-[3rem] border transition-all duration-700 \${i===1 ? 'bg-slate-900 text-white scale-105 shadow-2xl border-transparent z-10' : 'bg-white text-slate-900 border-gray-100 hover:shadow-xl hover:-translate-y-2'}\`}>
          <div className={\`text-[10px] font-black uppercase tracking-[0.3em] mb-4 \${i===1 ? 'text-blue-400' : 'text-blue-600'}\`}>Module_Set_0{i+1}</div>
          <h3 className="text-3xl font-black mb-8 italic tracking-tighter uppercase leading-none">{plan}</h3>
          <div className="flex items-baseline gap-2 mb-10">
            <span className="text-6xl font-black tracking-tighter italic">\\$\${i === 0 ? '99' : i === 1 ? '199' : '499'}</span>
            <span className="text-sm opacity-50 font-black uppercase tracking-widest">/mo</span>
          </div>
          <ul className="space-y-5 mb-12 text-sm font-bold opacity-80">
            {['Global API Protocol', 'Custom State Persistence', 'Emergency 24/7 Switch', 'Zero-Latency Logic'].map(f => (
              <li key={f} className="flex items-center gap-4">
                <span className={\`w-1.5 h-1.5 rounded-full \${i===1 ? 'bg-blue-400' : 'bg-blue-600'}\`}></span> 
                {f.toUpperCase()}
              </li>
            ))}
          </ul>
          <button className={\`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all \${i===1 ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-600/20' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}\`}>Activate_Subscription</button>
        </div>
      ))}
    </div>
  </section>
);`, 
        html: `<section class="pricing-cards">
  <div class="grid-layout">
    <div class="price-card">
      <div class="card-tag">Module_Set_01</div>
      <h3>Starter Pack</h3>
      <div class="price-box">
        <span class="price">$99</span>
        <span class="per">/mo</span>
      </div>
      <ul class="feat-list">
        <li>Global API Protocol</li>
        <li>State Persistence</li>
      </ul>
      <button class="price-btn">Activate_Subscription</button>
    </div>
    <div class="price-card active">
      <div class="card-tag">Module_Set_02</div>
      <h3>Production Pro</h3>
      <div class="price-box">
        <span class="price">$199</span>
        <span class="per">/mo</span>
      </div>
      <ul class="feat-list">
        <li>Global API Protocol</li>
        <li>State Persistence</li>
        <li>Emergency Switch</li>
      </ul>
      <button class="price-btn">Activate_Subscription</button>
    </div>
    <div class="price-card">
      <div class="card-tag">Module_Set_03</div>
      <h3>Enterprise Ops</h3>
      <div class="price-box">
        <span class="price">$499</span>
        <span class="per">/mo</span>
      </div>
      <ul class="feat-list">
        <li>Global API Protocol</li>
        <li>State Persistence</li>
        <li>Emergency Switch</li>
        <li>Zero-Latency Logic</li>
      </ul>
      <button class="price-btn">Activate_Subscription</button>
    </div>
  </div>
</section>`, 
        css: `.pricing-cards { padding: 96px 24px; background: #f8fafc; font-family: sans-serif; text-align: left; }
.pricing-cards .grid-layout { max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 40px; }
@media (min-width: 768px) { .pricing-cards .grid-layout { grid-template-columns: repeat(3, 1fr); } }
.price-card { padding: 48px; border-radius: 48px; border: 1px solid #f1f5f9; background: white; transition: 0.7s; }
.price-card.active { background: #0f172a; color: white; transform: scale(1.05); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); border-color: transparent; z-index: 10; }
.card-tag { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 16px; color: #2563eb; }
.price-card.active .card-tag { color: #60a5fa; }
.price-card h3 { font-size: 32px; font-weight: 900; font-style: italic; text-transform: uppercase; letter-spacing: -0.05em; margin-bottom: 32px; line-height: 1; }
.price-box { display: flex; align-items: baseline; gap: 8px; margin-bottom: 40px; }
.price { font-size: 60px; font-weight: 900; font-style: italic; letter-spacing: -0.05em; }
.per { font-size: 12px; font-weight: 900; text-transform: uppercase; opacity: 0.5; letter-spacing: 0.1em; }
.feat-list { list-style: none; padding: 0; margin-bottom: 48px; }
.feat-list li { font-size: 14px; font-weight: 700; text-transform: uppercase; margin-bottom: 20px; display: flex; align-items: center; gap: 16px; opacity: 0.8; }
.feat-list li::before { content: ''; width: 6px; height: 6px; background: #2563eb; border-radius: 50%; }
.price-card.active li::before { background: #60a5fa; }
.price-btn { width: 100%; padding: 20px; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.2em; border: none; cursor: pointer; transition: 0.3s; background: #f1f5f9; color: #0f172a; }
.price-card.active .price-btn { background: #2563eb; color: white; box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3); }`,
        js: ``
      },
      { 
        name: "PricingTable",
        title: "Feature Table", 
        jsx: `import React from 'react';

export const PricingTable = () => (
  <section className="py-24 px-6 bg-white font-sans text-left">
    <div className="max-w-5xl mx-auto border-2 border-slate-900 rounded-[2.5rem] overflow-hidden shadow-[20px_20px_0_0_#f1f5f9]">
      <div className="grid grid-cols-4 bg-slate-900 p-8 font-black border-b border-slate-800 text-white uppercase tracking-[0.2em] text-[10px] italic">
        <div className="col-span-1">Registry_Modules</div>
        <div className="text-center">Basic</div>
        <div className="text-center text-blue-400">Production</div>
        <div className="text-center">Enterprise</div>
      </div>
      {['Network_Sync_v2', 'State_Persistence', 'Auto_Scaling_v4', 'Encrypted_Auth'].map((f, i) => (
        <div key={i} className="grid grid-cols-4 p-8 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors text-sm font-bold text-slate-600 uppercase tracking-tight">
          <div className="col-span-1 italic">{f}</div>
          <div className="text-center text-slate-300">LIMITED</div>
          <div className="text-center text-blue-600 font-black">FULL_SYNC</div>
          <div className="text-center text-slate-900 font-black">ABSOLUTE</div>
        </div>
      ))}
    </div>
  </section>
);`, 
        html: `<section class="table-price">
  <div class="table-container">
    <div class="table-head">
      <div>Registry_Modules</div>
      <div>Basic</div>
      <div>Production</div>
      <div>Enterprise</div>
    </div>
    <div class="table-body">
      <div class="table-row">
        <div>Network_Sync_v2</div>
        <div>LIMITED</div>
        <div>FULL_SYNC</div>
        <div>ABSOLUTE</div>
      </div>
      <div class="table-row">
        <div>API_Gateway_01</div>
        <div>BASIC</div>
        <div>PRIORITY</div>
        <div>DEDICATED</div>
      </div>
      <div class="table-row">
        <div>Security_Tunnel</div>
        <div>-</div>
        <div>ACTIVE</div>
        <div>HARDENED</div>
      </div>
      <div class="table-row">
        <div>State_Storage</div>
        <div>50GB</div>
        <div>500GB</div>
        <div>UNLIMITED</div>
      </div>
    </div>
  </div>
</section>`, 
        css: `.table-price { padding: 96px 24px; background: white; font-family: sans-serif; text-align: left; }
.table-container { max-width: 1024px; margin: 0 auto; border: 2px solid #0f172a; border-radius: 40px; overflow: hidden; box-shadow: 20px 20px 0 0 #f1f5f9; }
.table-head { display: grid; grid-template-columns: repeat(4, 1fr); background: #0f172a; color: white; padding: 32px; font-weight: 900; font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; font-style: italic; }
.table-row { display: grid; grid-template-columns: repeat(4, 1fr); padding: 32px; border-bottom: 1px solid #f1f5f9; font-weight: 700; font-size: 14px; color: #475569; text-transform: uppercase; transition: 0.3s; }
.table-row:hover { background: #f8fafc; }
.table-row div:nth-child(3) { color: #2563eb; font-weight: 900; }
.table-row div:nth-child(4) { color: #0f172a; font-weight: 900; }`,
        js: ``
      },
      { 
        name: "PricingSimple",
        title: "Simple CTA", 
        jsx: `import React from 'react';

export const PricingSimple = () => (
  <section className="py-32 px-6 bg-blue-600 text-white text-center font-sans overflow-hidden relative">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-[0.03] rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
    <div className="relative z-10">
      <h2 className="text-6xl md:text-[8rem] font-black mb-12 tracking-tighter leading-[0.85] uppercase italic">Ready to scale<br/>your reality?</h2>
      <p className="text-blue-100 text-2xl font-medium mb-16 max-w-3xl mx-auto leading-relaxed">Stop building in isolation. Connect your project to our high-fidelity engineering core today.</p>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <button className="px-12 py-6 bg-white text-blue-600 rounded-3xl font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform shadow-2xl">Initialize Project</button>
        <button className="px-12 py-6 bg-blue-700 text-white border-2 border-white/20 rounded-3xl font-black uppercase tracking-[0.2em] text-sm hover:bg-blue-800 transition-colors">Book Architecture Sync</button>
      </div>
    </div>
  </section>
);`, 
        html: `<section class="simple-cta">
  <div class="cta-glow"></div>
  <div class="cta-content">
    <h1>Ready to scale<br>your reality?</h1>
    <p>Connect your project to our engineering core today.</p>
    <div class="cta-btns">
      <button class="btn-main">Initialize Project</button>
      <button class="btn-alt">Book Architecture Sync</button>
    </div>
  </div>
</section>`, 
        css: `.simple-cta { padding: 128px 24px; background: #2563eb; color: white; text-align: center; position: relative; overflow: hidden; font-family: sans-serif; }
.cta-glow { position: absolute; top: 0; right: 0; width: 800px; height: 800px; background: white; opacity: 0.03; border-radius: 50%; filter: blur(120px); transform: translate(50%, -50%); }
.cta-content { position: relative; z-index: 10; }
.simple-cta h1 { font-size: 64px; font-weight: 900; text-transform: uppercase; font-style: italic; line-height: 0.85; letter-spacing: -0.05em; margin-bottom: 48px; }
@media (min-width: 768px) { .simple-cta h1 { font-size: 128px; } }
.simple-cta p { font-size: 24px; color: #dbeafe; font-weight: 500; max-width: 768px; margin: 0 auto; margin-bottom: 64px; }
.cta-btns { display: flex; flex-direction: column; justify-content: center; gap: 24px; }
@media (min-width: 768px) { .cta-btns { flex-direction: row; } }
.btn-main { background: white; color: #2563eb; padding: 24px 48px; border-radius: 24px; font-weight: 900; text-transform: uppercase; border: none; font-size: 14px; letter-spacing: 0.2em; cursor: pointer; transition: transform 0.3s; }
.btn-main:hover { transform: scale(1.05); }
.btn-alt { background: #1d4ed8; color: white; padding: 24px 48px; border-radius: 24px; font-weight: 900; text-transform: uppercase; border: 2px solid rgba(255,255,255,0.2); font-size: 14px; letter-spacing: 0.2em; cursor: pointer; transition: background 0.3s; }
.btn-alt:hover { background: #1e40af; }`,
        js: ``
      },
      { 
        name: "PricingToggle",
        title: "Billing Toggle", 
        jsx: `import React, { useState } from 'react';

export const PricingToggle = () => {
  const [annual, setAnnual] = useState(false);
  return (
    <section className="py-24 px-6 bg-white text-center font-sans">
      <div className="mb-16">
        <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase italic mb-8">Elastic Billing</h2>
        <div className="inline-flex items-center p-2 bg-slate-100 rounded-[2rem] border border-slate-200">
          <button onClick={() => setAnnual(false)} className={\`px-10 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all \${!annual ? 'bg-white shadow-xl text-slate-900' : 'text-slate-400'}\`}>Monthly</button>
          <button onClick={() => setAnnual(true)} className={\`px-10 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all \${annual ? 'bg-white shadow-xl text-slate-900' : 'text-slate-400'}\`}>Yearly <span className="text-[10px] text-blue-600 ml-2 italic">Save 20%</span></button>
        </div>
      </div>
      <div className="max-w-md mx-auto p-16 border-4 border-slate-900 rounded-[4rem] text-left shadow-[24px_24px_0_0_#f1f5f9] relative overflow-hidden group">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl"></div>
        <h3 className="text-3xl font-black mb-2 text-slate-900 tracking-tighter italic uppercase">Developer Pack</h3>
        <p className="text-slate-500 text-sm mb-12 font-bold uppercase tracking-widest opacity-60">Full Engine Integration</p>
        <div className="flex items-baseline gap-2 mb-12">
          <span className="text-8xl font-black tracking-tighter italic text-blue-600">\\$\${annual ? '199' : '29'}</span>
          <span className="text-sm font-black text-slate-400 uppercase tracking-widest">/mo</span>
        </div>
        <button className="w-full py-6 bg-slate-900 text-white font-black uppercase tracking-[0.3em] text-xs rounded-3xl hover:bg-blue-600 transition-all duration-500 shadow-2xl shadow-black/20 group-hover:translate-y-[-4px]">Activate_Module</button>
      </div>
    </section>
  );
};`, 
        html: `<section class="elastic-price">
  <div class="toggle-header">
    <h2>Elastic Billing</h2>
    <div class="price-toggle-box">
      <button class="toggle-btn active" id="btn-mo">Monthly</button>
      <button class="toggle-btn" id="btn-yr">Yearly <span class="save">Save 20%</span></button>
    </div>
  </div>
  <div class="price-card">
    <h3>Developer Pack</h3>
    <p class="tagline">Full Engine Integration</p>
    <div class="price-wrap">
      <span class="price-val" data-monthly="29" data-annual="199">$29</span>
      <span class="price-per">/mo</span>
    </div>
    <button class="price-btn">Activate_Module</button>
  </div>
</section>`, 
        css: `.elastic-price { padding: 96px 24px; background: white; text-align: center; font-family: sans-serif; }
.toggle-header { margin-bottom: 64px; }
.toggle-header h2 { font-size: 48px; font-weight: 900; font-style: italic; text-transform: uppercase; letter-spacing: -0.05em; margin-bottom: 32px; }
.price-toggle-box { display: inline-flex; background: #f1f5f9; padding: 8px; border-radius: 32px; border: 1px solid #e2e8f0; }
.toggle-btn { padding: 12px 40px; border: none; background: transparent; color: #94a3b8; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; border-radius: 24px; cursor: pointer; transition: 0.3s; }
.toggle-btn.active { background: white; color: #0f172a; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
.save { color: #2563eb; font-style: italic; margin-left: 8px; }
.price-card { max-width: 448px; margin: 0 auto; padding: 64px; border: 4px solid #0f172a; border-radius: 64px; text-align: left; box-shadow: 24px 24px 0 0 #f1f5f9; position: relative; }
.price-card h3 { font-size: 32px; font-weight: 900; font-style: italic; text-transform: uppercase; letter-spacing: -0.05em; margin-bottom: 8px; }
.tagline { font-size: 10px; font-weight: 900; text-transform: uppercase; color: #64748b; letter-spacing: 0.2em; margin-bottom: 48px; }
.price-wrap { display: flex; align-items: baseline; gap: 8px; margin-bottom: 48px; }
.price-val { font-size: 96px; font-weight: 900; font-style: italic; color: #2563eb; letter-spacing: -0.05em; transition: 0.3s; }
.price-per { font-size: 14px; font-weight: 900; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.2em; }
.price-btn { width: 100%; padding: 24px; background: #0f172a; color: white; border-radius: 24px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 12px; border: none; cursor: pointer; transition: 0.5s; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2); }
.price-btn:hover { background: #2563eb; transform: translateY(-4px); }`,
        js: `const btnMo = document.getElementById('btn-mo');
const btnYr = document.getElementById('btn-yr');
const priceVal = document.querySelector('.price-val');
if (btnMo && btnYr && priceVal) {
  btnMo.addEventListener('click', () => {
    btnMo.classList.add('active');
    btnYr.classList.remove('active');
    priceVal.innerText = '$' + priceVal.dataset.monthly;
  });
  btnYr.addEventListener('click', () => {
    btnYr.classList.add('active');
    btnMo.classList.remove('active');
    priceVal.innerText = '$' + priceVal.dataset.annual;
  });
}`
      },
      { 
        name: "PricingContact",
        title: "Enterprise Custom", 
        jsx: `import React from 'react';

export const PricingContact = () => (
  <section className="py-32 px-6 bg-slate-950 text-white font-sans text-left overflow-hidden">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-24 items-center">
      <div className="md:w-1/2">
        <div className="text-blue-500 font-black text-xs uppercase tracking-[0.5em] mb-6 italic">Tier_Enterprise_Sync</div>
        <h2 className="text-6xl md:text-8xl font-black mb-10 leading-[0.85] tracking-tighter uppercase italic">Complex<br/>Scale Ops?<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Let's Interface.</span></h2>
        <p className="text-slate-400 text-2xl leading-relaxed mb-12 font-medium opacity-80">We engineer custom deployment protocols for organizations handling over 10M requests per second with atomic state consistency.</p>
        <div className="space-y-6">
           {['Custom SLA Protocols', 'Direct Engineering Access', 'IAM & SSO Grid Sync', 'On-Premise Private Cloud'].map(f => (
             <div key={f} className="flex items-center gap-6 text-slate-300 font-black text-sm tracking-widest italic uppercase">
               <div className="w-8 h-px bg-blue-500"></div>
               {f}
             </div>
           ))}
        </div>
      </div>
      <div className="md:w-1/2 bg-white text-slate-900 p-12 md:p-16 rounded-[4rem] shadow-2xl relative">
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center text-white text-3xl font-black italic shadow-xl rotate-12">HQ</div>
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-3">
             <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Request_Entity</label>
             <input className="w-full bg-slate-100 border-none rounded-2xl p-5 focus:ring-4 focus:ring-blue-600/20 outline-none font-black text-slate-900 placeholder-slate-300" placeholder="Corporation Name" />
          </div>
          <div className="space-y-3">
             <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Estimated_Throughput</label>
             <select className="w-full bg-slate-100 border-none rounded-2xl p-5 focus:ring-4 focus:ring-blue-600/20 outline-none font-black text-slate-900 appearance-none">
                <option>1M - 10M Req / Sec</option>
                <option>10M - 100M Req / Sec</option>
                <option>Interstellar Scale</option>
             </select>
          </div>
          <button className="w-full py-6 bg-blue-600 text-white font-black uppercase tracking-[0.3em] text-xs rounded-3xl shadow-2xl shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-500">Initialize Custom Quote</button>
        </form>
      </div>
    </div>
  </section>
);`, 
        html: `<section class="ent-contact">
  <div class="container">
    <div class="text-col">
      <div class="tier-tag">Tier_Enterprise_Sync</div>
      <h1>Complex<br>Scale Ops?<br><span>Let's Interface.</span></h1>
      <p>We engineer custom deployment protocols for extreme scale.</p>
      <div class="ent-features">
        <div class="ent-feat">Custom SLA Protocols</div>
        <div class="ent-feat">Direct Engineering Access</div>
      </div>
    </div>
    <div class="form-col">
      <div class="hq-badge">HQ</div>
      <form>
        <div class="input-grp">
          <label>Request_Entity</label>
          <input type="text" placeholder="Corporation Name">
        </div>
        <div class="input-grp">
          <label>Estimated_Throughput</label>
          <select>
            <option>1M - 10M Req / Sec</option>
            <option>10M+ Req / Sec</option>
          </select>
        </div>
        <button type="submit">Initialize Custom Quote</button>
      </form>
    </div>
  </div>
</section>`, 
        css: `.ent-contact { padding: 128px 24px; background: #020617; color: white; font-family: sans-serif; text-align: left; overflow: hidden; }
.ent-contact .container { max-width: 1152px; margin: 0 auto; display: flex; flex-direction: column; gap: 96px; align-items: center; }
@media (min-width: 768px) { .ent-contact .container { flex-direction: row; } }
.text-col { width: 100%; }
@media (min-width: 768px) { .text-col { width: 50%; } }
.tier-tag { color: #3b82f6; font-weight: 900; font-size: 10px; letter-spacing: 0.5em; font-style: italic; margin-bottom: 24px; text-transform: uppercase; }
.text-col h1 { font-size: 60px; font-weight: 900; text-transform: uppercase; line-height: 0.85; letter-spacing: -0.05em; font-style: italic; margin-bottom: 40px; }
@media (min-width: 768px) { .text-col h1 { font-size: 96px; } }
.text-col h1 span { background: linear-gradient(to right, #3b82f6, #22d3ee); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.text-col p { font-size: 24px; color: #94a3b8; font-weight: 500; line-height: 1.6; margin-bottom: 48px; opacity: 0.8; }
.ent-features { display: flex; flex-direction: column; gap: 24px; }
.ent-feat { font-size: 14px; font-weight: 900; text-transform: uppercase; color: #cbd5e1; font-style: italic; letter-spacing: 0.3em; display: flex; align-items: center; gap: 24px; }
.ent-feat::before { content: ''; width: 32px; height: 1px; background: #3b82f6; }
.form-col { width: 100%; background: white; padding: 64px; border-radius: 64px; position: relative; }
@media (min-width: 768px) { .form-col { width: 50%; } }
.hq-badge { position: absolute; top: -24px; left: -24px; width: 96px; height: 96px; background: #2563eb; color: white; display: flex; items-center: center; justify-content: center; line-height: 96px; text-align: center; border-radius: 32px; font-size: 32px; font-weight: 900; font-style: italic; transform: rotate(12deg); box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.4); }
.input-grp { margin-bottom: 32px; }
.input-grp label { display: block; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; color: #94a3b8; margin-bottom: 8px; margin-left: 8px; }
.input-grp input, .input-grp select { width: 100%; background: #f1f5f9; border: none; padding: 20px; border-radius: 24px; font-weight: 900; font-size: 16px; color: #0f172a; outline: none; transition: 0.3s; box-sizing: border-box; }
.input-grp input:focus { box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1); }
form button { width: 100%; padding: 24px; background: #2563eb; color: white; border-radius: 24px; border: none; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.3em; cursor: pointer; transition: 0.5s; box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.3); }
form button:hover { transform: scale(1.02); }`,
        js: ``
      },
    ]
  };

const ServicesGallery = () => {
  const [hero, setHero] = useState(0);
  const [grid, setGrid] = useState(0);
  const [process, setProcess] = useState(0);
  const [pricing, setPricing] = useState(0);

  const Heroes = [HeroMinimal, HeroSplit, HeroBento, HeroGlow, HeroBrutalist];
  const Grids = [GridClassic, GridAccordion, GridBento, GridReveal, GridGlass];
  const Processes = [ProcessStepper, ProcessZigZag, ProcessSticky, ProcessTimeline, ProcessCycle];
  const Pricings = [PricingCards, PricingTable, PricingSimple, PricingToggle, PricingContact];

  // Helper to construct combined code
  const getCombinedCode = () => {
    const h = metadata.heroes[hero];
    const g = metadata.grids[grid];
    const p = metadata.processes[process];
    const pr = metadata.pricings[pricing];
    
    return {
      jsx: `import React, { useState } from 'react';

// --- COMPONENT COMPOSITION ---
// 1. ${h.title}
// 2. ${g.title}
// 3. ${p.title}
// 4. ${pr.title}

${h.jsx.replace("import React from 'react';", "")}

${g.jsx.replace("import React from 'react';", "").replace("import React, { useState } from 'react';", "")}

${p.jsx.replace("import React from 'react';", "").replace("import React, { useState } from 'react';", "")}

${pr.jsx.replace("import React from 'react';", "").replace("import React, { useState } from 'react';", "")}

const ServicesPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <${h.name} />
      <${g.name} />
      <${p.name} />
      <${pr.name} />
    </div>
  );
};

export default ServicesPage;`,
      html: `<!-- ${h.title} -->\n${h.html}\n\n<!-- ${g.title} -->\n${g.html}\n\n<!-- ${p.title} -->\n${p.html}\n\n<!-- ${pr.title} -->\n${pr.html}`,
      css: `/* ${h.title} */\n${h.css}\n\n/* ${g.title} */\n${g.css}\n\n/* ${p.title} */\n${p.css}\n\n/* ${pr.title} */\n${pr.css}`,
      js: `// Interaction Logic for Combined Page\n${h.js || ''}\n${g.js || ''}\n${p.js || ''}\n${pr.js || ''}`
    };
  };

  // Helper for UI controls
  const ControlGroup = ({ label, options, current, set }) => (
    <div>
      <label className="block text-xs font-bold  uppercase tracking-widest mb-2">{label}</label>
      <div className="flex flex-wrap gap-2 bg-white box-shadow p-2 rounded-xl">
        {options.map((_, i) => (
          <button key={i} onClick={() => set(i)}
            className={`w-8 h-8 rounded-full text-xs font-bold border transition-all ${current === i ? 'bg-black text-white border-black' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'}`}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container box-shadow overflow-y-auto bg-gray-100 font-sans">
      {/* BUILDER CONTROLS */}
      <div className="fixed left-[12rem] bottom-2 flex flex-row justify-center items-center gap-4 z-50 w-full ">
        <ControlGroup label="Hero" options={Heroes} current={hero} set={setHero} />
        <ControlGroup label="Services" options={Grids} current={grid} set={setGrid} />
        <ControlGroup label="Process" options={Processes} current={process} set={setProcess} />
        <ControlGroup label="Pricing" options={Pricings} current={pricing} set={setPricing} />
      </div>

      {/* RENDERED PAGE */}
      <div className="pb-32 bg-white shadow-xl max-w-[1600px] mx-auto min-h-screen relative group/svc">
        {/* Master Copy Button (Entire Page) */}
        <div className="absolute top-4 right-4 z-50 opacity-0 group-hover/svc:opacity-100 transition-opacity">
          <CopyButton 
            jsxCode={getCombinedCode().jsx} 
            htmlCode={getCombinedCode().html} 
            cssCode={getCombinedCode().css} 
            jsCode={getCombinedCode().js}
            className="!bg-indigo-600 !text-white !border-indigo-700"
          />
        </div>

        {/* 1. Hero Section */}
        <div className="relative group/section">
          <div className="absolute top-4 left-4 z-40 opacity-0 group-hover/section:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={metadata.heroes[hero].jsx}
              htmlCode={metadata.heroes[hero].html}
              cssCode={metadata.heroes[hero].css}
              jsCode={metadata.heroes[hero].js}
              className="!bg-white/90"
            />
          </div>
          {React.createElement(Heroes[hero])}
        </div>
        
        {/* 2. Services Grid */}
        <div className="relative group/section">
          <div className="absolute top-4 left-4 z-40 opacity-0 group-hover/section:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={metadata.grids[grid].jsx}
              htmlCode={metadata.grids[grid].html}
              cssCode={metadata.grids[grid].css}
              jsCode={metadata.grids[grid].js}
              className="!bg-white/90"
            />
          </div>
          {React.createElement(Grids[grid])}
        </div>
        
        {/* 3. Process Section */}
        <div className="relative group/section">
          <div className="absolute top-4 left-4 z-40 opacity-0 group-hover/section:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={metadata.processes[process].jsx}
              htmlCode={metadata.processes[process].html}
              cssCode={metadata.processes[process].css}
              jsCode={metadata.processes[process].js}
              className="!bg-white/90"
            />
          </div>
          {React.createElement(Processes[process])}
        </div>
        
        {/* 4. Pricing/CTA */}
        <div className="relative group/section">
          <div className="absolute top-4 left-4 z-40 opacity-0 group-hover/section:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={metadata.pricings[pricing].jsx}
              htmlCode={metadata.pricings[pricing].html}
              cssCode={metadata.pricings[pricing].css}
              jsCode={metadata.pricings[pricing].js}
              className="!bg-white/90"
            />
          </div>
          {React.createElement(Pricings[pricing])}
        </div>
      </div>
    </div>
  );
};

export default ServicesGallery;