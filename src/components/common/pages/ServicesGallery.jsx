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

const ServicesGallery = () => {
  const [hero, setHero] = useState(0);
  const [grid, setGrid] = useState(0);
  const [process, setProcess] = useState(0);
  const [pricing, setPricing] = useState(0);

  const Heroes = [HeroMinimal, HeroSplit, HeroBento, HeroGlow, HeroBrutalist];
  const Grids = [GridClassic, GridAccordion, GridBento, GridReveal, GridGlass];
  const Processes = [ProcessStepper, ProcessZigZag, ProcessSticky, ProcessTimeline, ProcessCycle];
  const Pricings = [PricingCards, PricingTable, PricingSimple, PricingToggle, PricingContact];

  // --- FULL CODE METADATA (Exhaustive & Standalone) ---
  const metadata = {
    heroes: [
      { 
        name: "HeroMinimal",
        title: "Minimal Typographic", 
        jsx: `import React from 'react';\n\nexport const HeroMinimal = () => (\n  <section className="bg-white py-24 px-6 text-center border-b border-gray-100 font-sans">\n    <div className="max-w-4xl mx-auto">\n      <div className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Our Expertise</div>\n      <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">\n        We build digital <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">masterpieces.</span>\n      </h1>\n      <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">\n        From concept to code, we provide full-cycle development services designed to scale your business.\n      </p>\n    </div>\n  </section>\n);`, 
        html: `<section class="hero-minimal">\n  <div class="container">\n    <div class="tag">Our Expertise</div>\n    <h1>We build digital <br> <span class="gradient-text">masterpieces.</span></h1>\n    <p>From concept to code, we provide full-cycle development services designed to scale your business.</p>\n  </div>\n</section>`, 
        css: `.hero-minimal { background: white; padding: 96px 24px; text-align: center; border-bottom: 1px solid #f3f4f6; font-family: sans-serif; }\n.container { max-width: 896px; margin: 0 auto; }\n.tag { font-size: 14px; font-weight: 700; color: #2563eb; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; }\n.hero-minimal h1 { font-size: 48px; font-weight: 700; color: #0f172a; margin-bottom: 32px; letter-spacing: -0.025em; }\n@media (min-width: 768px) { .hero-minimal h1 { font-size: 72px; } }\n.gradient-text { background: linear-gradient(to right, #2563eb, #9333ea); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }\n.hero-minimal p { font-size: 20px; color: #64748b; line-height: 1.6; max-width: 672px; margin: 0 auto; }` 
      },
      { 
        name: "HeroSplit",
        title: "Split Screen Content", 
        jsx: `import React from 'react';\n\nexport const HeroSplit = () => (\n  <section className="flex flex-col md:flex-row h-[500px] bg-slate-900 text-white overflow-hidden font-sans">\n    <div className="w-full md:w-1/2 p-12 flex flex-col justify-center text-left">\n      <h1 className="text-4xl font-bold mb-6">Services that <br/> define the future.</h1>\n      <p className="text-slate-400 mb-8 text-lg">We help brands navigate the digital landscape with precision engineering and creative design.</p>\n      <button className="bg-white text-black px-6 py-3 rounded-full font-bold w-fit hover:bg-gray-200 transition-colors">Explore Solutions</button>\n    </div>\n    <div className="w-full md:w-1/2 bg-blue-600 relative">\n      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-900 opacity-80"></div>\n      <div className="absolute inset-0 flex items-center justify-center">\n        <div className="w-32 h-32 border-4 border-white/20 rounded-full animate-ping"></div>\n      </div>\n    </div>\n  </section>\n);`, 
        html: `<section class="hero-split">\n  <div class="content-side">\n    <h1>Services that <br> define the future.</h1>\n    <p>We help brands navigate the digital landscape with precision engineering and creative design.</p>\n    <button class="btn">Explore Solutions</button>\n  </div>\n  <div class="visual-side">\n    <div class="glow-overlay"></div>\n    <div class="ping-circle"></div>\n  </div>\n</section>`, 
        css: `.hero-split { display: flex; flex-direction: column; background: #0f172a; color: white; overflow: hidden; font-family: sans-serif; min-height: 500px; }\n@media (min-width: 768px) { .hero-split { flex-direction: row; } }\n.content-side { width: 100%; padding: 48px; display: flex; flex-direction: column; justify-content: center; text-align: left; }\n@media (min-width: 768px) { .content-side { width: 50%; } }\n.content-side h1 { font-size: 36px; font-weight: 700; margin-bottom: 24px; }\n.content-side p { font-size: 18px; color: #94a3b8; margin-bottom: 32px; }\n.btn { background: white; color: black; padding: 12px 24px; border-radius: 9999px; font-weight: 700; border: none; cursor: pointer; width: fit-content; }\n.visual-side { width: 100%; background: #2563eb; position: relative; min-height: 300px; }\n@media (min-width: 768px) { .visual-side { width: 50%; } }\n.glow-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom right, #2563eb, #581c87); opacity: 0.8; }\n.ping-circle { position: absolute; inset: 0; margin: auto; width: 128px; height: 128px; border: 4px solid rgba(255,255,255,0.2); border-radius: 50%; animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; }\n@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }` 
      },
      { 
        name: "HeroBento",
        title: "Bento Grid Layout", 
        jsx: `import React from 'react';\n\nexport const HeroBento = () => (\n  <section className="bg-gray-50 py-20 px-6 font-sans">\n    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">\n      <div className="md:col-span-2 bg-white p-12 rounded-3xl border border-gray-200 flex flex-col justify-center text-left">\n        <h1 className="text-4xl font-bold text-slate-900 mb-4">Everything you need to grow.</h1>\n        <p className="text-slate-500">Comprehensive services for modern startups.</p>\n      </div>\n      <div className="bg-black text-white p-8 rounded-3xl flex flex-col justify-between items-start">\n        <div className="w-8 h-8">\n          <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full text-yellow-400"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n        </div>\n        <div className="font-bold text-xl">Rated #1 in 2024</div>\n      </div>\n    </div>\n  </section>\n);`, 
        html: `<section class="hero-bento">\n  <div class="grid-container">\n    <div class="main-card">\n      <h1>Everything you need to grow.</h1>\n      <p>Comprehensive services for modern startups.</p>\n    </div>\n    <div class="stat-card">\n      <div class="icon">★</div>\n      <div class="label">Rated #1 in 2024</div>\n    </div>\n  </div>\n</section>`, 
        css: `.hero-bento { background: #f9fafb; padding: 80px 24px; font-family: sans-serif; }\n.grid-container { max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 24px; }\n@media (min-width: 768px) { .grid-container { grid-template-columns: repeat(3, 1fr); } }\n.main-card { background: white; padding: 48px; border-radius: 24px; border: 1px solid #e5e7eb; display: flex; flex-direction: column; justify-content: center; text-align: left; }\n@media (min-width: 768px) { .main-card { grid-column: span 2; } }\n.main-card h1 { font-size: 36px; font-weight: 700; color: #0f172a; margin-bottom: 16px; }\n.main-card p { color: #64748b; }\n.stat-card { background: black; color: white; padding: 32px; border-radius: 24px; display: flex; flex-direction: column; justify-content: space-between; align-items: flex-start; }\n.stat-card .icon { font-size: 32px; }\n.stat-card .label { font-size: 20px; font-weight: 700; }` 
      },
      { 
        name: "HeroGlow",
        title: "Dark Mode Glow", 
        jsx: `import React from 'react';\n\nexport const HeroGlow = () => (\n  <section className="bg-black py-32 px-6 text-center relative overflow-hidden font-sans">\n    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[120px] opacity-20"></div>\n    <div className="relative z-10">\n      <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">Transform Your Reality</h1>\n      <p className="text-indigo-200 text-xl max-w-2xl mx-auto leading-relaxed">High-end consulting for the world's most ambitious companies.</p>\n    </div>\n  </section>\n);`, 
        html: `<section class="hero-glow">\n  <div class="glow-sphere"></div>\n  <div class="content">\n    <h1>Transform Your Reality</h1>\n    <p>High-end consulting for the world's most ambitious companies.</p>\n  </div>\n</section>`, 
        css: `.hero-glow { background: black; padding: 128px 24px; text-align: center; position: relative; overflow: hidden; font-family: sans-serif; }\n.glow-sphere { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 600px; height: 600px; background: #4f46e5; border-radius: 50%; filter: blur(120px); opacity: 0.2; }\n.content { position: relative; z-index: 10; }\n.hero-glow h1 { font-size: 48px; font-weight: 700; color: white; margin-bottom: 24px; }\n.hero-glow p { font-size: 20px; color: #c7d2fe; max-width: 672px; margin: 0 auto; }` 
      },
      { 
        name: "HeroBrutalist",
        title: "Brutalist Impact", 
        jsx: `import React from 'react';\n\nexport const HeroBrutalist = () => (\n  <section className="bg-yellow-400 py-24 px-6 border-b-4 border-black font-sans">\n    <div className="max-w-7xl mx-auto text-left">\n      <h1 className="text-6xl md:text-9xl font-black uppercase leading-none mb-8">\n        We Make<br/>It Happen.\n      </h1>\n      <div className="flex gap-4">\n        <div className="bg-white border-4 border-black px-6 py-3 font-bold uppercase hover:bg-black hover:text-white transition-colors cursor-pointer">Design</div>\n        <div className="bg-white border-4 border-black px-6 py-3 font-bold uppercase hover:bg-black hover:text-white transition-colors cursor-pointer">Code</div>\n        <div className="bg-black text-white border-4 border-black px-6 py-3 font-bold uppercase hover:bg-white hover:text-black transition-colors cursor-pointer">Ship</div>\n      </div>\n    </div>\n  </section>\n);`, 
        html: `<section class="hero-brutalist">\n  <div class="container">\n    <h1>WE MAKE<br>IT HAPPEN.</h1>\n    <div class="pill-group">\n      <div class="pill pill-white">DESIGN</div>\n      <div class="pill pill-white">CODE</div>\n      <div class="pill pill-black">SHIP</div>\n    </div>\n  </div>\n</section>`, 
        css: `.hero-brutalist { background: #facc15; padding: 96px 24px; border-bottom: 4px solid black; font-family: sans-serif; }\n.container { max-width: 1280px; margin: 0 auto; text-align: left; }\n.hero-brutalist h1 { font-size: 60px; font-weight: 900; text-transform: uppercase; line-height: 1; margin-bottom: 32px; }\n@media (min-width: 768px) { .hero-brutalist h1 { font-size: 120px; } }\n.pill-group { display: flex; gap: 16px; flex-wrap: wrap; }\n.pill { border: 4px solid black; padding: 12px 24px; font-weight: 700; text-transform: uppercase; }\n.pill-white { background: white; color: black; }\n.pill-black { background: black; color: white; }` 
      },
    ],
    grids: [
      { 
        name: "GridClassic",
        title: "Classic Icon Cards", 
        jsx: `import React from 'react';\n\nexport const GridClassic = () => (\n  <section className="py-20 px-6 bg-white font-sans text-left">\n    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">\n      {[1, 2, 3].map((i) => (\n        <div key={i} className="p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-transparent transition-all group">\n          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">\n            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>\n          </div>\n          <h3 className="text-xl font-bold text-slate-900 mb-3">Service Module {i}</h3>\n          <p className="text-slate-500 leading-relaxed">We build scalable, high-performance web applications using the latest technologies.</p>\n          <div className="mt-6 text-blue-600 font-bold text-sm hover:underline cursor-pointer">Learn more →</div>\n        </div>\n      ))}\n    </div>\n  </section>\n);`, 
        html: `<section class="grid-classic">\n  <div class="grid-container">\n    <div class="card">\n      <div class="icon-box">★</div>\n      <h3>Web Development</h3>\n      <p>We build scalable, high-performance web applications.</p>\n      <div class="link">Learn more →</div>\n    </div>\n  </div>\n</section>`, 
        css: `.grid-classic { padding: 80px 24px; background: white; font-family: sans-serif; }\n.grid-container { max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }\n.card { padding: 32px; border-radius: 16px; border: 1px solid #f3f4f6; transition: all 0.3s; }\n.card:hover { box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); border-color: transparent; }\n.icon-box { width: 48px; height: 48px; background: #eff6ff; color: #2563eb; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; }\n.card h3 { font-size: 20px; font-weight: 700; color: #0f172a; margin-bottom: 12px; }\n.card p { color: #64748b; line-height: 1.6; }\n.link { margin-top: 24px; color: #2563eb; font-weight: 700; font-size: 14px; cursor: pointer; }` 
      },
      { 
        name: "GridAccordion",
        title: "Interactive Accordion List", 
        jsx: `import React, { useState } from 'react';\n\nexport const GridAccordion = () => {\n  const [active, setActive] = useState(0);\n  const services = [\n    { title: "UI/UX Design", desc: "Crafting intuitive and beautiful user experiences for mobile and web." },\n    { title: "Mobile Development", desc: "Native and cross-platform apps for iOS and Android using React Native." },\n    { title: "Cloud Integration", desc: "Seamless AWS/Azure deployment and serverless architecture management." },\n  ];\n  return (\n    <section className="py-20 px-6 bg-gray-50 font-sans text-left">\n      <div className="max-w-4xl mx-auto">\n        {services.map((s, i) => (\n          <div key={i} className="border-b border-gray-200 last:border-0">\n            <button onClick={() => setActive(i)} className="w-full py-8 text-left flex justify-between items-center group">\n              <span className={\`text-2xl md:text-4xl font-bold transition-colors \${active === i ? 'text-black' : 'text-gray-400 group-hover:text-gray-600'}\`}>{s.title}</span>\n              <span className={\`text-3xl transition-transform duration-300 \${active === i ? 'rotate-45 text-blue-600' : 'text-gray-300'}\`}>+</span>\n            </button>\n            {active === i && (\n              <div className="pb-8 animate-in fade-in slide-in-from-top-4 duration-500">\n                <p className="text-xl text-gray-500 max-w-2xl">{s.desc}</p>\n              </div>\n            )}\n          </div>\n        ))}\n      </div>\n    </section>\n  );\n};`, 
        html: `<section class="accordion-list">\n  <div class="container">\n    <div class="item active">\n      <button>\n        <span>UI/UX Design</span>\n        <span class="plus">×</span>\n      </button>\n      <div class="content"><p>Crafting intuitive and beautiful user experiences.</p></div>\n    </div>\n  </div>\n</section>`, 
        css: `.accordion-list { padding: 80px 24px; background: #f9fafb; font-family: sans-serif; }\n.container { max-width: 896px; margin: 0 auto; }\n.item { border-bottom: 1px solid #e5e7eb; }\nbutton { width: 100%; padding: 32px 0; background: none; border: none; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: left; }\nbutton span:first-child { font-size: 32px; font-weight: 700; color: #9ca3af; transition: color 0.3s; }\n.item.active span:first-child { color: black; }\n.content { padding-bottom: 32px; }\n.content p { font-size: 20px; color: #64748b; }` 
      },
      { 
        name: "GridBento",
        title: "Bento Grid Dashboard", 
        jsx: `import React from 'react';\n\nexport const GridBento = () => (\n  <section className="py-20 px-6 bg-slate-900 text-white font-sans text-left">\n    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">\n      <div className="md:col-span-2 md:row-span-2 bg-slate-800 rounded-3xl p-8 border border-slate-700 flex flex-col justify-end relative overflow-hidden group">\n        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity"></div>\n        <div className="mb-auto text-blue-400 font-black text-xs uppercase tracking-[0.3em]">Signature Service</div>\n        <h3 className="text-3xl font-bold mb-2 relative z-10">Product Design</h3>\n        <p className="text-slate-400 relative z-10 max-w-xs">End-to-end design systems and high-fidelity prototyping.</p>\n      </div>\n      <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 flex flex-col justify-center">\n        <div className="text-2xl font-bold mb-1">99.9%</div>\n        <div className="text-slate-400 text-sm">Uptime Guarantee</div>\n      </div>\n      <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 flex flex-col justify-center">\n        <div className="text-2xl font-bold mb-1">24/7</div>\n        <div className="text-slate-400 text-sm">Active Support</div>\n      </div>\n      <div className="md:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 flex items-center justify-between">\n        <div><h3 className="text-2xl font-bold">Start Building</h3><p className="text-blue-100">Zero deployment friction.</p></div>\n        <button className="bg-white text-blue-600 p-4 rounded-2xl font-bold">→</button>\n      </div>\n    </div>\n  </section>\n);`, 
        html: `<section class="bento-grid">\n  <div class="container">\n    <div class="card card-large">\n      <div class="glow"></div>\n      <h3>Product Design</h3>\n      <p>End-to-end design systems.</p>\n    </div>\n    <div class="card"><h3>99.9%</h3><p>Uptime</p></div>\n  </div>\n</section>`, 
        css: `.bento-grid { padding: 80px 24px; background: #0f172a; color: white; font-family: sans-serif; }\n.container { max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; grid-auto-rows: 250px; }\n.card { background: #1e293b; padding: 32px; border-radius: 24px; border: 1px solid #334155; display: flex; flex-direction: column; text-align: left; }\n.card-large { grid-column: span 2; grid-row: span 2; justify-content: flex-end; position: relative; overflow: hidden; }\n.glow { position: absolute; top: 0; right: 0; width: 256px; height: 256px; background: #3b82f6; border-radius: 50%; filter: blur(100px); opacity: 0.2; }\n.card h3 { font-size: 24px; font-weight: 700; margin-bottom: 8px; position: relative; }\n.card p { color: #94a3b8; position: relative; }` 
      },
      { 
        name: "GridReveal",
        title: "Dynamic Reveal List", 
        jsx: `import React from 'react';\n\nexport const GridReveal = () => (\n  <section className="py-20 px-6 bg-white font-sans text-left">\n    <div className="max-w-5xl mx-auto space-y-4">\n      {['Branding', 'Web Design', 'Strategy', 'Marketing'].map((item, i) => (\n        <div key={i} className="group relative border-t border-gray-200 pt-8 pb-4 cursor-pointer hover:pl-4 transition-all duration-300">\n          <div className="flex justify-between items-center relative z-10">\n            <h2 className="text-4xl md:text-6xl font-bold text-transparent text-stroke-black group-hover:text-black transition-colors">{item}</h2>\n            <span className="text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">Explore_Module_0{i+1}</span>\n          </div>\n          <div className="absolute top-1/2 right-20 -translate-y-1/2 w-64 h-40 bg-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none group-hover:rotate-3 group-hover:scale-110 shadow-2xl"></div>\n        </div>\n      ))}\n    </div>\n    <style>{\`.text-stroke-black { -webkit-text-stroke: 1px black; color: transparent; }\`}</style>\n  </section>\n);`, 
        html: `<section class="grid-reveal">\n  <div class="container">\n    <div class="row">\n      <h2>Branding</h2>\n      <div class="reveal-box"></div>\n    </div>\n  </div>\n</section>`, 
        css: `.grid-reveal { padding: 80px 24px; background: white; font-family: sans-serif; text-align: left; }\n.container { max-width: 1024px; margin: 0 auto; }\n.row { position: relative; border-top: 1px solid #e5e7eb; padding: 32px 0; cursor: pointer; transition: padding 0.3s; }\n.row h2 { font-size: 48px; font-weight: 700; color: transparent; -webkit-text-stroke: 1px black; transition: color 0.3s; }\n.row:hover h2 { color: black; }\n.reveal-box { position: absolute; top: 50%; right: 80px; transform: translateY(-50%) rotate(3deg); width: 256px; height: 160px; background: #111827; border-radius: 8px; opacity: 0; transition: all 0.3s; }` 
      },
      { 
        name: "GridGlass",
        title: "Frosted Glass Cards", 
        jsx: `import React from 'react';\n\nexport const GridGlass = () => (\n  <section className="py-20 px-6 bg-gradient-to-br from-rose-400 via-orange-300 to-yellow-200 font-sans text-left">\n    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">\n      {[1, 2, 3].map((i) => (\n        <div key={i} className="bg-white/30 backdrop-blur-md border border-white/40 p-10 rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:-translate-y-2 transition-transform duration-500 group">\n          <div className="w-14 h-14 bg-white/50 rounded-full flex items-center justify-center mb-8 text-2xl group-hover:scale-110 transition-transform">✨</div>\n          <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-sm">Creative Direction</h3>\n          <p className="text-white/90 font-medium leading-relaxed">Leading the visual narrative for world-class brands with a focus on impact and longevity.</p>\n          <div className="mt-8 pt-8 border-t border-white/20 text-white font-bold text-sm tracking-widest uppercase">Expertise {i}</div>\n        </div>\n      ))}\n    </div>\n  </section>\n);`, 
        html: `<section class="grid-glass">\n  <div class="grid-container">\n    <div class="glass-card">\n      <div class="icon">✨</div>\n      <h3>Creative Direction</h3>\n      <p>Leading the visual narrative for brands.</p>\n    </div>\n  </div>\n</section>`, 
        css: `.grid-glass { padding: 80px 24px; background: linear-gradient(to bottom right, #fb7185, #fdba74, #fef08a); font-family: sans-serif; }\n.grid-container { max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }\n.glass-card { background: rgba(255, 255, 255, 0.3); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.4); padding: 40px; border-radius: 40px; transition: transform 0.3s; text-align: left; }\n.glass-card h3 { font-size: 24px; font-weight: 700; color: white; margin-bottom: 16px; }\n.glass-card p { color: rgba(255, 255, 255, 0.9); font-weight: 500; }` 
      },
    ],
    processes: [
      { 
        name: "ProcessStepper",
        title: "Horizontal Roadmap", 
        jsx: `import React from 'react';\n\nexport const ProcessStepper = () => (\n  <section className="py-20 px-6 bg-white font-sans text-left">\n    <div className="max-w-6xl mx-auto">\n      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">\n        {['Discovery', 'Strategy', 'Execution', 'Launch'].map((step, i) => (\n          <div key={i} className="relative group">\n            {i !== 3 && <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gray-100 group-hover:bg-blue-100 transition-colors"></div>}\n            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 relative z-10 group-hover:bg-blue-600 transition-colors">{i + 1}</div>\n            <h3 className="text-xl font-bold mb-2 text-slate-900">{step}</h3>\n            <p className="text-gray-500 text-sm leading-relaxed">We analyze your requirements in detail and set the foundational groundwork for success.</p>\n          </div>\n        ))}\n      </div>\n    </div>\n  </section>\n);`, 
        html: `<section class="proc-stepper">\n  <div class="container">\n    <div class="step">\n      <div class="line"></div>\n      <div class="num">1</div>\n      <h3>Discovery</h3>\n      <p>We analyze your needs and set the groundwork.</p>\n    </div>\n  </div>\n</section>`, 
        css: `.proc-stepper { padding: 80px 24px; background: white; font-family: sans-serif; text-align: left; }\n.container { max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }\n.step { position: relative; }\n.num { width: 48px; height: 48px; background: black; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; margin-bottom: 24px; position: relative; z-index: 10; transition: background 0.3s; }\n.line { position: absolute; top: 24px; left: 50%; width: 100%; height: 2px; background: #e5e7eb; }\n.step h3 { font-size: 20px; font-weight: 700; margin-bottom: 8px; }\n.step p { font-size: 14px; color: #64748b; }` 
      },
      { 
        name: "ProcessZigZag",
        title: "Zig-Zag Workflow", 
        jsx: `import React from 'react';\n\nexport const ProcessZigZag = () => (\n  <section className="py-20 px-6 bg-gray-50 font-sans text-left">\n    <div className="max-w-5xl mx-auto space-y-32">\n      {[1, 2, 3].map((i) => (\n        <div key={i} className={\`flex flex-col md:flex-row items-center gap-16 \${i % 2 === 0 ? '' : 'md:flex-row-reverse'}\`}>\n          <div className="w-full md:w-1/2">\n            <div className="bg-white border border-gray-100 aspect-[4/3] rounded-3xl shadow-lg relative overflow-hidden group">\n              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>\n              <div className="w-full h-full flex items-center justify-center text-6xl opacity-10">0{i}</div>\n            </div>\n          </div>\n          <div className="w-full md:w-1/2">\n            <div className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] mb-4">Phase 0{i}</div>\n            <h3 className="text-4xl font-bold mb-6 text-slate-900 tracking-tight">System Architecture & Design</h3>\n            <p className="text-gray-500 text-lg leading-relaxed mb-8">We develop a comprehensive blueprint of your application, ensuring every module communicates efficiently within a scalable framework.</p>\n            <ul className="space-y-3 text-slate-700 font-medium">\n              <li className="flex items-center gap-3"><span className="text-blue-600">✓</span> Database Schema Optimization</li>\n              <li className="flex items-center gap-3"><span className="text-blue-600">✓</span> API Endpoint Mapping</li>\n            </ul>\n          </div>\n        </div>\n      ))}\n    </div>\n  </section>\n);`, 
        html: `<section class="proc-zigzag">\n  <div class="container">\n    <div class="row reverse">\n      <div class="visual"></div>\n      <div class="content">\n        <div class="tag">Step 01</div>\n        <h3>Phase 1 Title</h3>\n        <p>Explanation of the phase.</p>\n      </div>\n    </div>\n  </div>\n</section>`, 
        css: `.proc-zigzag { padding: 80px 24px; background: #f9fafb; font-family: sans-serif; text-align: left; }\n.container { max-width: 1024px; margin: 0 auto; display: flex; flex-direction: column; gap: 128px; }\n.row { display: flex; flex-direction: row; gap: 64px; align-items: center; }\n.row.reverse { flex-direction: row-reverse; }\n.visual { width: 50%; aspect-ratio: 4/3; background: white; border-radius: 32px; border: 1px solid #e5e7eb; }\n.content { width: 50%; }\n.tag { color: #2563eb; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 16px; }\n.content h3 { font-size: 36px; font-weight: 700; margin-bottom: 24px; }\n.content p { font-size: 18px; color: #64748b; line-height: 1.6; }` 
      },
      { 
        name: "ProcessSticky",
        title: "Sticky Vertical Flow", 
        jsx: `import React from 'react';\n\nexport const ProcessSticky = () => (\n  <section className="py-20 px-6 bg-white font-sans text-left">\n    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20">\n      <div className="md:w-1/3">\n        <div className="sticky top-24">\n          <div className="text-blue-600 font-bold mb-4 uppercase tracking-widest text-sm">Execution Engine</div>\n          <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-none mb-6">Our Path to<br/>Production.</h2>\n          <p className="text-slate-500 leading-relaxed text-lg">A systematic approach to building high-concurrency applications that never fail.</p>\n        </div>\n      </div>\n      <div className="md:w-2/3 space-y-48 pt-12 md:pt-24">\n        {[1, 2, 3, 4].map((i) => (\n          <div key={i} className="min-h-[50vh] border-l-4 border-slate-100 pl-12 hover:border-blue-600 transition-colors duration-500 group">\n            <div className="text-7xl font-black text-gray-100 mb-6 group-hover:text-blue-50 transition-colors tracking-tighter leading-none">0{i}</div>\n            <h3 className="text-3xl font-bold mb-4 text-slate-800">Critical Module Deployment</h3>\n            <p className="text-xl text-slate-500 leading-relaxed">We utilize automated CI/CD pipelines to push code to staging environments for rigorous integration testing before final deployment.</p>\n          </div>\n        ))}\n      </div>\n    </div>\n  </section>\n);`, 
        html: `<section class="proc-sticky">\n  <div class="container">\n    <div class="left-col"><div class="sticky-box"><h2>Our Process</h2></div></div>\n    <div class="right-col"><div class="step-content"><h3>Step 1</h3><p>Description.</p></div></div>\n  </div>\n</section>`, 
        css: `.proc-sticky { padding: 80px 24px; background: white; font-family: sans-serif; text-align: left; }\n.container { max-width: 1152px; margin: 0 auto; display: flex; flex-direction: row; gap: 80px; }\n.left-col { width: 33.333%; }\n.sticky-box { position: sticky; top: 96px; }\n.right-col { width: 66.666%; display: flex; flex-direction: column; gap: 192px; }\n.step-content { min-height: 50vh; padding-left: 48px; border-left: 4px solid #f3f4f6; transition: border-color 0.3s; }\n.step-content:hover { border-color: #2563eb; }` 
      },
      { 
        name: "ProcessTimeline",
        title: "Dark Timeline", 
        jsx: `import React from 'react';\n\nexport const ProcessTimeline = () => (\n  <section className="py-20 px-6 bg-slate-950 text-white font-sans text-left">\n    <div className="max-w-4xl mx-auto">\n      <h2 className="text-4xl font-bold mb-20 text-center">Development Lifecycle</h2>\n      <div className="relative border-l border-slate-800 ml-4 md:ml-0 md:pl-0 space-y-20">\n        {[1, 2, 3, 4].map((i) => (\n          <div key={i} className="relative pl-12 group">\n            <div className="absolute left-0 top-0 w-5 h-5 bg-blue-600 rounded-full -ml-[10px] ring-8 ring-slate-950 group-hover:scale-125 transition-transform duration-300"></div>\n            <div className="text-blue-500 font-black text-[10px] uppercase tracking-[0.5em] mb-2">Milestone 0{i}</div>\n            <h3 className="text-3xl font-bold text-white mb-4">Core Infrastructure Sync</h3>\n            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">Establishing secure tunnels and load balancer configurations to handle millions of simultaneous requests with zero latency.</p>\n          </div>\n        ))}\n      </div>\n    </div>\n  </section>\n);`, 
        html: `<section class="proc-timeline">\n  <div class="container">\n    <div class="timeline-node"><div class="dot"></div><h3>Milestone 1</h3><p>Description.</p></div>\n  </div>\n</section>`, 
        css: `.proc-timeline { padding: 80px 24px; background: #020617; color: white; font-family: sans-serif; text-align: left; }\n.container { max-width: 896px; margin: 0 auto; position: relative; border-left: 1px solid #1e293b; }\n.timeline-node { position: relative; padding-left: 48px; margin-bottom: 80px; }\n.dot { position: absolute; left: -10px; top: 0; width: 20px; height: 20px; background: #2563eb; border-radius: 50%; box-shadow: 0 0 0 8px #020617; transition: transform 0.3s; }\n.timeline-node:hover .dot { transform: scale(1.25); }` 
      },
      { 
        name: "ProcessCycle",
        title: "Infinite Loop Cycle", 
        jsx: `import React from 'react';\n\nexport const ProcessCycle = () => (\n  <section className="py-24 px-6 bg-white text-center font-sans">\n    <h2 className="text-4xl font-black text-slate-900 mb-20 tracking-tighter">The Iterative Engine.</h2>\n    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative">\n      <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-100 to-transparent -z-10"></div>\n      {['Analyze & Plan', 'Sprint & Build', 'Deploy & Iterate'].map((step, i) => (\n        <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">\n          <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">\n            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>\n          </div>\n          <h3 className="text-2xl font-bold mb-4 text-slate-900">{step}</h3>\n          <p className="text-slate-500 font-medium">Continuous integration ensures that every line of code adds immediate business value.</p>\n        </div>\n      ))}\n    </div>\n  </section>\n);`, 
        html: `<section class="proc-cycle">\n  <h2>The Iterative Engine</h2>\n  <div class="container">\n    <div class="node"><div class="icon">✓</div><h3>Plan</h3><p>Description.</p></div>\n  </div>\n</section>`, 
        css: `.proc-cycle { padding: 96px 24px; background: white; text-align: center; font-family: sans-serif; }\n.container { max-width: 1024px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px; }\n.node { background: white; padding: 40px; border-radius: 32px; border: 1px solid #f3f4f6; box-shadow: 0 20px 50px rgba(0,0,0,0.05); transition: all 0.3s; }\n.node:hover { transform: translateY(-8px); box-shadow: 0 30px 60px rgba(0,0,0,0.1); }` 
      },
    ],
    pricings: [
      { 
        name: "PricingCards",
        title: "SaaS Tiers", 
        jsx: `import React from 'react';\n\nexport const PricingCards = () => (\n  <section className="py-24 px-6 bg-gray-50 font-sans text-left">\n    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">\n      {['Basic', 'Pro', 'Enterprise'].map((plan, i) => (\n        <div key={i} className={\`p-10 rounded-[2.5rem] border transition-all duration-500 \${i===1 ? 'bg-slate-900 text-white scale-105 shadow-2xl border-transparent' : 'bg-white text-slate-900 border-gray-100 hover:shadow-xl hover:border-transparent'}\`}>\n          <h3 className="text-xl font-bold mb-2 uppercase tracking-widest">{plan}</h3>\n          <div className="flex items-baseline gap-1 mb-8">\n            <span className="text-5xl font-black tracking-tighter">\\$\${i === 0 ? '49' : i === 1 ? '99' : '249'}</span>\n            <span className="text-sm opacity-50 font-bold">/mo</span>\n          </div>\n          <ul className="space-y-4 mb-10 text-sm font-medium opacity-80">\n            {['Full API Access', 'Custom Domains', '24/7 Support', 'Global Edge CDN'].map(f => (<li key={f} className="flex items-center gap-3"><span>✓</span> {f}</li>))}\n          </ul>\n          <button className={\`w-full py-4 rounded-2xl font-bold transition-colors \${i===1 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}\`}>Get Started Now</button>\n        </div>\n      ))}\n    </div>\n  </section>\n);`, 
        html: `<section class="pricing-cards">...</section>`, 
        css: `.pricing-cards { padding: 96px 24px; background: #f9fafb; font-family: sans-serif; }` 
      },
      { 
        name: "PricingTable",
        title: "Feature Matrix", 
        jsx: `import React from 'react';\n\nexport const PricingTable = () => (\n  <section className="py-24 px-6 bg-white font-sans text-left">\n    <div className="max-w-5xl mx-auto border border-gray-200 rounded-[2rem] overflow-hidden shadow-sm">\n      <div className="grid grid-cols-4 bg-gray-50 p-6 font-bold border-b border-gray-200 text-slate-900 uppercase tracking-widest text-xs">\n        <div>Core Features</div><div className="text-center">Basic</div><div className="text-center text-blue-600">Pro</div><div className="text-center">Max</div>\n      </div>\n      {['Multi-user Auth', 'Custom SSL', 'Bento Layouts', 'Dark Mode Support'].map((f, i) => (\n        <div key={i} className="grid grid-cols-4 p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-sm font-medium text-slate-600">\n          <div>{f}</div><div className="text-center">✓</div><div className="text-center text-blue-600 font-bold">✓</div><div className="text-center">✓</div>\n        </div>\n      ))}\n    </div>\n  </section>\n);`, 
        html: `<section class="pricing-table">...</section>`, 
        css: `.pricing-table { padding: 96px 24px; background: white; font-family: sans-serif; }` 
      },
      { 
        name: "PricingSimple",
        title: "Banner CTA", 
        jsx: `import React from 'react';\n\nexport const PricingSimple = () => (\n  <section className="py-24 px-6 bg-blue-600 text-white text-center font-sans overflow-hidden relative">\n    <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>\n    <div className="relative z-10">\n      <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-none uppercase italic">Ready to scale<br/>your reality?</h2>\n      <div className="flex flex-col md:flex-row justify-center gap-6">\n        <button className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">Start Free Project</button>\n        <button className="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-colors">Book Demo</button>\n      </div>\n    </div>\n  </section>\n);`, 
        html: `<section class="simple-cta"><h2>Ready to scale?</h2></section>`, 
        css: `.simple-cta { padding: 96px 24px; background: #2563eb; color: white; text-align: center; }` 
      },
      { 
        name: "PricingToggle",
        title: "Monthly/Yearly Switch", 
        jsx: `import React, { useState } from 'react';\n\nexport const PricingToggle = () => {\n  const [annual, setAnnual] = useState(false);\n  return (\n    <section className="py-20 px-6 bg-white text-center font-sans">\n      <div className="inline-flex items-center p-1 bg-gray-100 rounded-2xl mb-16">\n        <button onClick={() => setAnnual(false)} className={\`px-8 py-2 rounded-xl text-sm font-bold transition-all \${!annual ? 'bg-white shadow-md text-slate-900' : 'text-slate-500'}\`}>Monthly</button>\n        <button onClick={() => setAnnual(true)} className={\`px-8 py-2 rounded-xl text-sm font-bold transition-all \${annual ? 'bg-white shadow-md text-slate-900' : 'text-slate-500'}\`}>Yearly <span class="text-[10px] text-green-600 ml-1">Save 20%</span></button>\n      </div>\n      <div className="max-w-sm mx-auto p-12 border-2 border-slate-900 rounded-[3rem] text-left shadow-[20px_20px_0_0_#f3f4f6]">\n        <h3 className="text-2xl font-bold mb-1 text-slate-900">Developer Pack</h3>\n        <p className="text-slate-500 text-sm mb-10 font-medium">Everything for one project.</p>\n        <div className="flex items-baseline gap-2 mb-10">\n          <span className="text-6xl font-black tracking-tighter">\\$\${annual ? '24' : '29'}</span>\n          <span className="text-lg opacity-50 font-bold uppercase tracking-widest text-xs">/mo</span>\n        </div>\n        <button className="w-full py-5 bg-slate-900 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-colors shadow-xl">Activate Plan</button>\n      </div>\n    </section>\n  );\n};`, 
        html: `<section class="price-toggle">...</section>`, 
        css: `.price-toggle { padding: 80px 24px; text-align: center; }` 
      },
      { 
        name: "PricingContact",
        title: "Enterprise Inquiry", 
        jsx: `import React from 'react';\n\nexport const PricingContact = () => (\n  <section className="py-24 px-6 bg-slate-950 text-white font-sans text-left">\n    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-center">\n      <div className="md:w-1/2">\n        <h2 className="text-5xl font-black mb-8 leading-none tracking-tighter">Large scale needs?<br/><span className="text-blue-500">Let's talk.</span></h2>\n        <p className="text-slate-400 text-xl leading-relaxed mb-10">We offer custom deployment strategies for companies handling over 10M requests per day.</p>\n        <div className="space-y-6">\n           {['Custom SLAs', 'Dedicated Account Mgr', 'SSO & IAM Sync'].map(f => (<div key={f} className="flex items-center gap-4 text-slate-300 font-bold"><span>→</span> {f}</div>))}\n        </div>\n      </div>\n      <div className="md:w-1/2 bg-white text-slate-900 p-10 rounded-[3rem] shadow-2xl">\n        <form className="space-y-6">\n          <div><label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Company Name</label><input className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none font-bold" /></div>\n          <div><label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Estimated Monthly Volume</label><select className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none font-bold"><option>1M - 10M Requests</option><option>10M+ Requests</option></select></div>\n          <button className="w-full py-5 bg-blue-600 text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-600/20 hover:scale-[1.02] transition-transform">Get Custom Quote</button>\n        </form>\n      </div>\n    </div>\n  </section>\n);`, 
        html: `<section class="contact-sec">...</section>`, 
        css: `.contact-sec { padding: 96px 24px; background: #020617; }` 
      },
    ]
  };

  // Helper to construct combined code
  const getCombinedCode = () => {
    const h = metadata.heroes[hero];
    const g = metadata.grids[grid];
    const p = metadata.processes[process];
    const pr = metadata.pricings[pricing];
    
    return {
      jsx: `import React, { useState } from 'react';\n\n// --- COMPONENT COMPOSITION ---\n// 1. ${h.title}\n// 2. ${g.title}\n// 3. ${p.title}\n// 4. ${pr.title}\n\n${h.jsx.replace("import React from 'react';", "")}\n\n${g.jsx.replace("import React from 'react';", "").replace("import React, { useState } from 'react';", "")}\n\n${p.jsx.replace("import React from 'react';", "").replace("import React, { useState } from 'react';", "")}\n\n${pr.jsx.replace("import React from 'react';", "").replace("import React, { useState } from 'react';", "")}\n\nconst ServicesPage = () => {\n  return (\n    <div className="bg-white min-h-screen font-sans">\n      <${h.name} />\n      <${g.name} />\n      <${p.name} />\n      <${pr.name} />\n    </div>\n  );\n};\n\nexport default ServicesPage;`,
      html: `<!-- ${h.title} -->\n${h.html}\n\n<!-- ${g.title} -->\n${g.html}\n\n<!-- ${p.title} -->\n${p.html}\n\n<!-- ${pr.title} -->\n${pr.html}`,
      css: `/* ${h.title} */\n${h.css}\n\n/* ${g.title} */\n${g.css}\n\n/* ${p.title} */\n${p.css}\n\n/* ${pr.title} */\n${pr.css}`
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
        <div className="absolute top-2 right-2 z-50 opacity-0 group-hover/svc:opacity-100 transition-opacity">
          <CopyButton 
            jsxCode={getCombinedCode().jsx} 
            htmlCode={getCombinedCode().html} 
            cssCode={getCombinedCode().css} 
          />
        </div>
        {/* 1. Hero Section */}
        {React.createElement(Heroes[hero])}
        
        {/* 2. Services Grid */}
        {React.createElement(Grids[grid])}
        
        {/* 3. Process Section */}
        {React.createElement(Processes[process])}
        
        {/* 4. Pricing/CTA */}
        {React.createElement(Pricings[pricing])}
      </div>
    </div>
  );
};

export default ServicesGallery;