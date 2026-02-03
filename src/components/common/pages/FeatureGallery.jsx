import React, { useState } from 'react';

// --- Shared Icons ---
const BoltIcon = () => (
  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);
const ChartIcon = () => (
  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
);
const ShieldIcon = () => (
  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
);

// --- 1. The Classic Zig-Zag (SaaS) ---
export const FeatureStandard = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/2">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
          <BoltIcon />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Automate your workflow</h2>
        <p className="text-gray-500 mb-6 text-lg leading-relaxed">
          Stop wasting time on manual tasks. Our engine handles the heavy lifting so you can focus on strategy.
        </p>
        <ul className="space-y-3 mb-8">
          {['Real-time sync', 'Custom triggers', 'API Integrations'].map(item => (
            <li key={item} className="flex items-center gap-3 text-gray-700">
              <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <button className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-2">
          Learn more <span>→</span>
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <div className="rounded-2xl shadow-2xl border border-gray-100 overflow-hidden bg-gray-50 h-64 relative group">
           <div className="absolute top-8 left-8 right-8 bottom-0 bg-white rounded-t-xl shadow-lg border border-gray-100 p-6 transition-transform group-hover:-translate-y-2">
              <div className="h-4 w-1/3 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 w-2/3 bg-gray-100 rounded mb-2"></div>
              <div className="h-4 w-1/2 bg-gray-100 rounded"></div>
              <div className="mt-8 flex gap-4">
                 <div className="h-16 w-16 bg-blue-50 rounded-lg"></div>
                 <div className="h-16 w-16 bg-purple-50 rounded-lg"></div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 2. The Bento Grid (Apple Style) ---
export const FeatureBento = () => (
  <div className="bg-gray-50 p-8 rounded-3xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900">Everything you need</h2>
      <p className="text-gray-500 mt-2">Powerful features wrapped in a beautiful interface.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {/* Big Card */}
      <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm relative overflow-hidden h-64 md:h-auto min-h-[250px]">
        <h3 className="text-xl font-bold mb-2 relative z-10">Global Analytics</h3>
        <p className="text-gray-500 text-sm relative z-10">Track users from anywhere in real-time.</p>
        <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-gradient-to-tl from-blue-50 to-transparent rounded-tl-[3rem] border-t border-l border-blue-100 flex items-end justify-end p-6">
           <div className="w-full h-full bg-white rounded-2xl shadow-md p-4">
              <div className="flex gap-2 items-end h-full justify-around">
                 {[40, 70, 50, 90, 60].map((h, i) => (
                   <div key={i} className="w-4 bg-blue-500 rounded-t-sm" style={{height: `${h}%`}}></div>
                 ))}
              </div>
           </div>
        </div>
      </div>

      {/* Tall Card */}
      <div className="md:row-span-2 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 text-2xl">🔒</div>
        <h3 className="text-xl font-bold mb-2">Secure</h3>
        <p className="text-gray-500 text-sm">Enterprise-grade encryption for your data.</p>
      </div>

      {/* Small Card 1 */}
      <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
        <h3 className="text-xl font-bold mb-2">Fast</h3>
        <p className="text-gray-500 text-sm">Built on edge networks.</p>
      </div>

      {/* Small Card 2 */}
      <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
        <h3 className="text-xl font-bold mb-2">Team</h3>
        <p className="text-gray-500 text-sm">Collaborate instantly.</p>
      </div>
    </div>
  </div>
);

// --- 3. The Interactive Tabs (Switching) ---
export const FeatureTabs = () => {
  const [active, setActive] = useState(0);
  const features = [
    { title: "Design", desc: "Craft beautiful interfaces.", color: "bg-pink-500" },
    { title: "Develop", desc: "Build with modern tools.", color: "bg-blue-500" },
    { title: "Ship", desc: "Deploy to the world.", color: "bg-green-500" }
  ];

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100">
      <div className="grid md:grid-cols-12 gap-8">
        {/* Left: Tabs */}
        <div className="md:col-span-4 flex flex-col gap-4">
          {features.map((feat, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-left p-6 rounded-2xl transition-all duration-300 border ${
                active === i 
                ? 'bg-gray-50 border-gray-200 shadow-sm' 
                : 'bg-white border-transparent hover:bg-gray-50'
              }`}
            >
              <h3 className={`font-bold text-lg mb-1 ${active === i ? 'text-gray-900' : 'text-gray-500'}`}>
                {feat.title}
              </h3>
              <p className="text-sm text-gray-500">{feat.desc}</p>
            </button>
          ))}
        </div>

        {/* Right: Display */}
        <div className="md:col-span-8 bg-gray-100 rounded-3xl overflow-hidden relative min-h-[300px] flex items-center justify-center">
          <div className={`absolute inset-0 bg-opacity-10 transition-colors duration-500 ${features[active].color.replace('bg-', 'bg-opacity-10 ')}`}></div>
          <div className="relative z-10 text-center">
             <div className={`w-24 h-24 mx-auto rounded-2xl shadow-xl flex items-center justify-center text-white text-3xl font-bold transition-all duration-500 ${features[active].color} rotate-3`}>
               {active + 1}
             </div>
             <p className="mt-8 font-mono text-gray-500 text-sm">Interactive Preview</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 4. The Code Block (Developer Focus) ---
export const FeatureDev = () => (
  <div className="bg-[#0d1117] text-white p-8 rounded-3xl border border-gray-800 overflow-hidden relative">
    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/2">
        <div className="text-green-400 font-mono text-xs mb-4">$$ API_FIRST_PLATFORM</div>
        <h2 className="text-3xl font-bold mb-4">Built for developers,<br/> by developers.</h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Integrate our SDK in minutes. Comprehensive documentation, typed SDKs, and 99.99% uptime SLA.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded font-bold text-sm hover:bg-gray-200">Read Docs</button>
          <button className="bg-transparent border border-gray-700 text-white px-6 py-2 rounded font-bold text-sm hover:border-gray-500">Get API Key</button>
        </div>
      </div>
      
      <div className="w-full md:w-1/2">
        <div className="bg-[#161b22] rounded-xl border border-gray-700 shadow-2xl overflow-hidden">
          <div className="flex items-center px-4 py-2 border-b border-gray-700 bg-[#0d1117]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-4 text-xs text-gray-500 font-mono">index.ts</span>
          </div>
          <div className="p-4 font-mono text-xs md:text-sm text-gray-300">
            <p><span className="text-purple-400">import</span> {'{'} Client {'}'} <span className="text-purple-400">from</span> <span className="text-green-300">'@sdk/core'</span>;</p>
            <br/>
            <p><span className="text-blue-400">const</span> client = <span className="text-purple-400">new</span> Client({'{'}</p>
            <p className="pl-4">apiKey: <span className="text-green-300">'sk_live_...'</span>,</p>
            <p>{'}'});</p>
            <br/>
            <p><span className="text-blue-400">await</span> client.users.<span className="text-yellow-200">create</span>({'{'}</p>
            <p className="pl-4">email: <span className="text-green-300">'user@example.com'</span></p>
            {/* <p>{'}'});</p> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 5. The Glassmorphism (Creative) ---
export const FeatureGlass = () => (
  <div className="relative bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-12 rounded-3xl overflow-hidden min-h-[400px] flex items-center">
    {/* Decorative Orbs */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400 rounded-full mix-blend-overlay filter blur-3xl opacity-50"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-overlay filter blur-3xl opacity-50"></div>

    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center w-full">
      <div className="text-white">
        <h2 className="text-4xl font-bold mb-6 drop-shadow-md">Unleash Creativity</h2>
        <p className="text-white/80 text-lg mb-8">
          Tools that don't get in your way. Designed for the modern creator economy.
        </p>
        <button className="bg-white/20 backdrop-blur-md border border-white/40 text-white px-8 py-3 rounded-full hover:bg-white/30 transition-all">
          Explore Tools
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {[1,2,3,4].map((i) => (
          <div key={i} className={`bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-lg ${i%2===0 ? 'translate-y-4' : ''}`}>
            <div className="w-10 h-10 bg-white/20 rounded-lg mb-4"></div>
            <div className="h-2 w-20 bg-white/40 rounded mb-2"></div>
            <div className="h-2 w-12 bg-white/20 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 6. The Grid Icons (Service List) ---
export const FeatureGrid = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Why choose us?</h2>
      <p className="text-gray-500">We provide a comprehensive suite of tools to help you grow your business.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { title: 'Secure', icon: '🛡️', desc: 'Bank-grade security protocols.' },
        { title: 'Fast', icon: '⚡', desc: 'Optimized for speed and performance.' },
        { title: 'Reliable', icon: '💎', desc: '99.99% uptime guarantee.' },
        { title: 'Scalable', icon: '📈', desc: 'Grow from 1 to 1M users.' },
        { title: 'Support', icon: '💬', desc: '24/7 dedicated support team.' },
        { title: 'Global', icon: '🌍', desc: 'Servers in 20+ regions.' },
      ].map((item) => (
        <div key={item.title} className="p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors cursor-default group">
          <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{item.icon}</div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

// --- 7. The Mobile App (Phone Mockup) ---
export const FeatureApp = () => (
  <div className="bg-orange-50 p-8 rounded-3xl overflow-hidden">
    <div className="flex flex-col md:flex-row items-center gap-16 max-w-5xl mx-auto">
      <div className="w-full md:w-1/2">
        <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
          Mobile First
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Your entire business, <br/> in your pocket.
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Manage orders, track inventory, and chat with customers on the go.
          Available for iOS and Android.
        </p>
        <div className="flex gap-4">
          <button className="bg-black text-white px-5 py-2 rounded-lg text-sm font-bold">App Store</button>
          <button className="bg-black text-white px-5 py-2 rounded-lg text-sm font-bold">Play Store</button>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-[280px] h-[550px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden">
          {/* Phone Screen */}
          <div className="w-full h-full bg-white relative">
            {/* Header */}
            <div className="bg-orange-500 h-32 p-6 pt-12 text-white">
              <div className="text-xs opacity-80">Dashboard</div>
              <div className="text-2xl font-bold">$12,450</div>
            </div>
            {/* List */}
            <div className="p-4 space-y-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                  <div className="w-8 h-2 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
            {/* FAB */}
            <div className="absolute bottom-6 right-6 w-12 h-12 bg-orange-500 rounded-full shadow-lg flex items-center justify-center text-white font-bold text-xl">+</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 8. The Brutalist (Bold) ---
export const FeatureBrutalist = () => (
  <div className="bg-yellow-400 p-8 rounded-3xl border-4 border-black">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_#000]">
        <h2 className="text-5xl font-black uppercase mb-6 leading-none">
          Power.<br/>Speed.<br/>Control.
        </h2>
        <p className="font-bold text-lg mb-8">
          No fancy animations. Just raw performance for power users.
        </p>
        <button className="bg-black text-white px-8 py-3 font-bold uppercase hover:bg-white hover:text-black border-4 border-transparent hover:border-black transition-colors">
          Get Access
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {[1,2,3,4].map(i => (
          <div key={i} className="bg-pink-500 border-4 border-black p-6 aspect-square flex items-center justify-center hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000] transition-all cursor-pointer">
            <span className="text-4xl font-black text-white">0{i}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 9. The Sticky Scroll (Storytelling) ---
export const FeatureSticky = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 overflow-hidden">
    <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
      {/* Sticky Image Side */}
      <div className="w-full md:w-1/2 md:sticky md:top-10 h-fit">
        <div className="aspect-square bg-slate-900 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20"></div>
           <div className="text-white text-center p-8">
             <div className="text-6xl mb-4">🚀</div>
             <h3 className="text-2xl font-bold">Launch faster</h3>
           </div>
        </div>
      </div>
      
      {/* Scrollable Text Side */}
      <div className="w-full md:w-1/2 flex flex-col gap-24 py-12">
        {[
          { title: "Collaborate", desc: "Work together in real-time with comments and multiplayer mode." },
          { title: "Version Control", desc: "Never lose work. Rollback to any version in history with one click." },
          { title: "Design Systems", desc: "Maintain consistency across your entire product suite automatically." }
        ].map((item, i) => (
          <div key={i}>
            <div className="text-blue-600 font-bold text-xl mb-2">0{i+1}.</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h3>
            <p className="text-gray-500 text-lg leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 10. The Neumorphic (Soft UI) ---
export const FeatureNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-12 rounded-3xl">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-700">Soft UI Features</h2>
    </div>
    
    <div className="grid md:grid-cols-3 gap-12">
      {['Tactile', 'Accessible', 'Modern'].map((item) => (
        <div key={item} className="bg-[#e0e5ec] p-8 rounded-[30px] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col items-center text-center transition-transform hover:-translate-y-2">
          <div className="w-20 h-20 bg-[#e0e5ec] rounded-full shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] mb-6 flex items-center justify-center text-2xl text-gray-600">
            ✨
          </div>
          <h3 className="text-xl font-bold text-gray-600 mb-3">{item}</h3>
          <p className="text-gray-500 text-sm">Experience the depth and softness of neumorphic design.</p>
        </div>
      ))}
    </div>
  </div>
);


// --- Main Gallery Wrapper ---
const FeatureGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-100 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Feature Sections</h1>
        <p className="text-slate-500">Components to showcase product value and capabilities.</p>
      </div>
      
      <div className="space-y-32 max-w-7xl mx-auto">
        
        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">01. Classic Zig-Zag</span>
          <FeatureStandard />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">02. Bento Grid</span>
          <FeatureBento />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">03. Interactive Tabs</span>
          <FeatureTabs />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">04. Code Block</span>
          <FeatureDev />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">05. Glassmorphism</span>
          <FeatureGlass />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">06. Service Grid</span>
          <FeatureGrid />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">07. Mobile App</span>
          <FeatureApp />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">08. Brutalist</span>
          <FeatureBrutalist />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">09. Sticky Story</span>
          <FeatureSticky />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">10. Neumorphic</span>
          <FeatureNeumorphic />
        </section>

      </div>
    </div>
  );
};

export default FeatureGallery;