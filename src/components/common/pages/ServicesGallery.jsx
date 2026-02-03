import React, { useState } from 'react';

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
      <div className="pb-32 bg-white shadow-xl max-w-[1600px] mx-auto min-h-screen">
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