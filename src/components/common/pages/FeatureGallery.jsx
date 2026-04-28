import React, { useState } from 'react';
import CopyButton from '../CopyButton';

// --- Shared Icons ---
const BoltIcon = ({ className }) => (
  <svg className={className || "w-6 h-6 text-blue-600"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const ChartIcon = ({ className }) => (
  <svg className={className || "w-6 h-6 text-indigo-600"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>
);

const ShieldIcon = ({ className }) => (
  <svg className={className || "w-6 h-6 text-emerald-600"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

// --- 1. The SaaS Standard ---
export const FeatureStandard = () => (
  <div className="bg-white p-12 rounded-3xl border border-gray-100 font-sans">
    <div className="flex flex-col md:flex-row items-center gap-16 text-left">
      <div className="w-full md:w-1/2">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
          <BoltIcon className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Automate your workflow with intelligence.
        </h2>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          Eliminate manual tasks and focus on what matters. Our engine handles the complex logic so you don't have to.
        </p>
        <div className="space-y-4 mb-10">
          <div className="flex items-center gap-3 text-gray-700 font-medium">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px]">✓</span>
            Real-time synchronization
          </div>
          <div className="flex items-center gap-3 text-gray-700 font-medium">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px]">✓</span>
            Custom automation triggers
          </div>
          <div className="flex items-center gap-3 text-gray-700 font-medium">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px]">✓</span>
            Advanced analytics dashboard
          </div>
        </div>
        <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
          Get Started Now
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <div className="rounded-2xl shadow-2xl border border-gray-100 overflow-hidden bg-gray-50 p-6 relative group">
           <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-transform group-hover:-translate-y-2 duration-300">
              <div className="h-4 w-1/3 bg-gray-100 rounded mb-6 text-left"></div>
              <div className="space-y-3">
                <div className="h-3 w-full bg-gray-50 rounded text-left"></div>
                <div className="h-3 w-5/6 bg-gray-50 rounded text-left"></div>
              </div>
              <div className="mt-8 flex gap-4">
                 <div className="h-20 w-1/2 bg-blue-50 rounded-lg border border-blue-100"></div>
                 <div className="h-20 w-1/2 bg-indigo-50 rounded-lg border border-indigo-100"></div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 2. The Bento Grid ---
export const FeatureBento = () => (
  <div className="bg-gray-50 p-12 rounded-3xl font-sans">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
      <p className="text-gray-500 text-lg">Everything you need to scale your application globally.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {/* Big Card */}
      <div className="md:col-span-2 bg-white rounded-3xl p-10 border border-gray-100 shadow-sm relative overflow-hidden min-h-[400px]">
        <div className="relative z-10 text-left">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Advanced Analytics</h3>
          <p className="text-gray-500 max-w-sm">Deep dive into your data with our comprehensive analytics suite.</p>
        </div>
        <div className="absolute right-0 bottom-0 w-[60%] h-[60%] bg-gray-50 rounded-tl-3xl border-t border-l border-gray-100 p-6">
           <div className="w-full h-full bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between">
              <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="w-2 h-2 rounded-full bg-gray-200"></div></div>
              <div className="flex items-end gap-2 h-24">
                 <div className="w-full bg-blue-100 rounded-t h-1/2"></div>
                 <div className="w-full bg-blue-500 rounded-t h-3/4"></div>
                 <div className="w-full bg-blue-200 rounded-t h-1/3"></div>
                 <div className="w-full bg-blue-600 rounded-t h-full"></div>
                 <div className="w-full bg-blue-300 rounded-t h-2/3"></div>
              </div>
           </div>
        </div>
      </div>

      {/* Tall Card */}
      <div className="md:row-span-1 bg-indigo-600 rounded-3xl p-10 shadow-xl flex flex-col items-center text-center justify-center relative overflow-hidden text-white">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 text-3xl backdrop-blur-md">🔒</div>
        <h3 className="text-2xl font-bold mb-3 text-white">Enterprise Security</h3>
        <p className="text-indigo-100 text-sm">Bank-grade encryption for all your sensitive data nodes.</p>
      </div>

      {/* Small Card 1 */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm group hover:border-blue-500 transition-colors text-left">
        <h3 className="text-xl font-bold mb-2 text-gray-900">Cloud Sync</h3>
        <p className="text-gray-500 text-sm">Automatic sync across all your devices in real-time.</p>
      </div>

      {/* Small Card 2 */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm group hover:border-indigo-500 transition-colors text-left">
        <h3 className="text-xl font-bold mb-2 text-gray-900">Team Collaboration</h3>
        <p className="text-gray-500 text-sm">Built-in tools for seamless teamwork and communication.</p>
      </div>
    </div>
  </div>
);

// --- 3. The Interactive Tabs ---
export const FeatureTabs = () => {
  const [active, setActive] = useState(0);
  const features = [
    { title: "Plan", desc: "Design your logic flow with ease.", color: "bg-blue-600" },
    { title: "Build", desc: "Assemble components with speed.", color: "bg-indigo-600" },
    { title: "Deploy", desc: "Ship to global nodes instantly.", color: "bg-slate-900" }
  ];

  return (
    <div className="bg-white p-12 rounded-3xl border border-gray-100 font-sans">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 flex flex-col gap-4 text-left">
          {features.map((feat, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-left p-6 rounded-2xl transition-all duration-300 border-2 ${
                active === i 
                ? 'bg-gray-50 border-gray-900 shadow-md' 
                : 'bg-white border-transparent hover:border-gray-100 opacity-70'
              }`}
            >
              <h3 className={`font-bold text-xl mb-1 ${active === i ? 'text-gray-900' : 'text-gray-400'}`}>
                {feat.title}
              </h3>
              <p className="text-sm text-gray-500">{feat.desc}</p>
            </button>
          ))}
        </div>

        <div className="md:col-span-7 bg-gray-50 rounded-3xl overflow-hidden relative min-h-[350px] flex items-center justify-center p-8">
           <div className={`w-full aspect-video rounded-2xl shadow-xl flex flex-col items-center justify-center text-white transition-all duration-500 ${features[active].color}`}>
             <div className="text-6xl font-bold mb-4 opacity-30">0{active + 1}</div>
             <div className="text-sm font-bold uppercase tracking-widest px-4 py-1 border border-white/30 rounded-full text-white">Active Mode</div>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- 4. The Code Block ---
export const FeatureDev = () => (
  <div className="bg-[#0d1117] text-white p-12 rounded-3xl border border-gray-800 overflow-hidden relative font-sans">
    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 text-left">
      <div className="w-full lg:w-1/2">
        <div className="inline-block px-3 py-1 bg-green-500/10 text-green-500 border border-green-500/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6">API First</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-left">Built for developers,<br/> by developers.</h2>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed text-left">
          Integrate our SDK in minutes. Comprehensive documentation, typed SDKs, and 99.99% uptime guarantee.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors">Read Docs</button>
          <button className="bg-transparent border border-gray-700 text-white px-6 py-3 rounded-lg font-bold hover:border-gray-500 transition-colors">Get API Key</button>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2">
        <div className="bg-[#161b22] rounded-2xl border border-gray-700 shadow-2xl overflow-hidden font-mono text-left">
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-700 bg-[#0d1117]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest">initialize_sdk.ts</span>
          </div>
          <div className="p-6 text-sm leading-relaxed">
            <p className="mb-2"><span className="text-purple-400">import</span> {'{'} <span className="text-blue-300">Client</span> {'}'} <span className="text-purple-400">from</span> <span className="text-green-300">'@sdk/core'</span>;</p>
            <p className="mb-6"><span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> <span className="text-blue-300">Client</span>();</p>
            
            <p className="text-gray-500 mb-2">// Initialize logic sync</p>
            <p className="mb-2"><span className="text-purple-400">await</span> client.<span className="text-yellow-200">initialize</span>({'{'}</p>
            <p className="pl-6">apiKey: <span className="text-green-300">'sk_live_...'</span>,</p>
            <p className="pl-6">priority: <span className="text-blue-400">true</span></p>
            <p>{'}'});</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 5. The Glassmorphism ---
export const FeatureGlass = () => (
  <div className="relative bg-indigo-600 p-16 rounded-3xl overflow-hidden min-h-[450px] flex items-center font-sans">
    {/* Decorative Orbs */}
    <div className="absolute top-0 right-[-10%] w-[30rem] h-[30rem] bg-purple-500 rounded-full mix-blend-screen filter blur-[80px] opacity-40"></div>
    <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-pink-500 rounded-full mix-blend-screen filter blur-[80px] opacity-40"></div>

    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center w-full">
      <div className="text-white text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg text-white">Unleash Creativity</h2>
        <p className="text-white/80 text-lg mb-10 max-w-md text-left">
          Tools that don't get in your way. Designed for the modern high-fidelity digital economy.
        </p>
        <button className="bg-white/10 backdrop-blur-xl border border-white/30 text-white px-10 py-4 rounded-full hover:bg-white/20 transition-all font-bold shadow-2xl">
          Explore Architecture
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-2xl transition-transform hover:-translate-y-2 ${i%2===0 ? 'translate-y-8' : ''}`}>
            <div className="w-12 h-12 bg-white/20 rounded-xl mb-6 flex items-center justify-center text-white">
               <span className="text-xl">✨</span>
            </div>
            <div className="h-2 w-2/3 bg-white/40 rounded-full mb-3 text-left"></div>
            <div className="h-2 w-1/2 bg-white/20 rounded-full text-left"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 6. The Grid Icons ---
export const FeatureGrid = () => (
  <div className="bg-white p-12 rounded-3xl border border-gray-100 font-sans">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
      <p className="text-gray-500 text-lg">We provide a comprehensive suite of professional tools.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        { title: 'Secure Shield', icon: '🛡️', desc: 'Bank-grade encryption protocols for all data.' },
        { title: 'Flash Speed', icon: '⚡', desc: 'Optimized for sub-ms latency globally.' },
        { title: 'Crystal Uptime', icon: '💎', desc: '99.99% uptime guarantee with SLA.' },
        { title: 'Node Scale', icon: '📈', desc: 'Seamlessly grow from 1 to 1M nodes.' },
        { title: 'Logic Support', icon: '💬', desc: '24/7 dedicated support for architecture.' },
        { title: 'Global Mesh', icon: '🌍', desc: 'Strategic nodes in 30+ regions.' },
      ].map((item) => (
        <div key={item.title} className="p-10 rounded-3xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 cursor-default group text-left">
          <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block drop-shadow-sm">{item.icon}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

// --- 7. The Mobile App ---
export const FeatureApp = () => (
  <div className="bg-orange-50 p-16 rounded-3xl overflow-hidden font-sans">
    <div className="flex flex-col lg:flex-row items-center gap-20 max-w-6xl mx-auto">
      <div className="w-full lg:w-1/2 text-left">
        <div className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Mobile First</div>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight text-left">Your Entire Grid,<br/> in Your Pocket.</h2>
        <p className="text-gray-600 text-xl mb-10 leading-relaxed text-left">
          Manage nodes, track logic flows, and chat with the core team on the go. Available for all mobile OS.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold shadow-xl hover:bg-black transition-all">App Store</button>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold shadow-xl hover:bg-black transition-all">Play Store</button>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3.5rem] border-[10px] border-gray-900 shadow-2xl overflow-hidden scale-110">
          <div className="w-full h-full bg-white relative">
            <div className="bg-orange-500 h-40 p-8 pt-16 text-white text-left">
              <div className="text-xs opacity-70 uppercase tracking-widest font-bold mb-2">Dashboard</div>
              <div className="text-3xl font-bold text-white text-left">$12,450.00</div>
            </div>
            <div className="p-6 space-y-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 text-left">
                  <div className="w-12 h-12 rounded-xl bg-gray-200"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-2/3 bg-gray-200 rounded-full text-left"></div>
                    <div className="h-2 w-1/2 bg-gray-100 rounded-full text-left"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-8 right-8 w-14 h-14 bg-orange-500 rounded-full shadow-xl flex items-center justify-center text-white font-bold text-2xl active:scale-90 transition-transform">+</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 8. The Brutalist ---
export const FeatureBrutalist = () => (
  <div className="bg-yellow-400 p-12 rounded-3xl border-8 border-black font-sans">
    <div className="grid md:grid-cols-2 gap-12 items-center text-left">
      <div className="bg-white border-8 border-black p-10 shadow-[20px_20px_0_0_#000] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
        <h2 className="text-6xl font-black uppercase mb-8 leading-[0.8] tracking-tighter text-black text-left">Power.<br/>Speed.<br/>Control.</h2>
        <p className="font-bold text-2xl mb-10 text-black text-left">
          Zero friction. Just raw performance for power nodes.
        </p>
        <button className="w-full py-6 bg-black text-white font-black text-2xl uppercase hover:bg-white hover:text-black border-4 border-transparent hover:border-black transition-all tracking-widest shadow-2xl">
          Get Access
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="bg-indigo-600 border-8 border-black p-8 aspect-square flex items-center justify-center hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#000] transition-all cursor-pointer group">
            <span className="text-6xl font-black text-white group-hover:scale-125 transition-transform">0{i}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 9. The Sticky Scroll ---
export const FeatureSticky = () => (
  <div className="bg-white p-12 rounded-3xl border border-gray-100 overflow-hidden font-sans text-left">
    <div className="flex flex-col lg:flex-row gap-20 max-w-6xl mx-auto">
      <div className="w-full lg:w-1/2 lg:sticky lg:top-24 h-fit">
        <div className="aspect-square bg-slate-900 rounded-[3rem] flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 animate-pulse"></div>
           <div className="text-white text-center p-12 text-left">
             <div className="text-9xl mb-8 drop-shadow-2xl text-white text-left text-center">🚀</div>
             <h3 className="text-4xl font-bold uppercase tracking-tighter text-white text-center">Launch_Core</h3>
             <div className="h-1 w-20 bg-blue-500 mx-auto mt-6 rounded-full text-center"></div>
           </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col gap-32 py-12">
        {[
          { title: "Collaborate Logic", desc: "Work together in the shared logic mesh with real-time synchronization nodes." },
          { title: "Version Control", desc: "Never lose a logic state. Rollback to any version in history with one click." },
          { title: "Design Systems", desc: "Maintain absolute consistency across your entire product suite automatically." },
          { title: "Global Mesh", desc: "Push your architecture to the edge with zero latency global synchronization." }
        ].map((item, i) => (
          <div key={i} className="relative pl-12 border-l-4 border-gray-100 hover:border-blue-600 transition-colors duration-500 text-left">
            <div className="absolute left-[-14px] top-0 w-6 h-6 bg-white border-4 border-blue-600 rounded-full text-left"></div>
            <div className="text-blue-600 font-bold text-2xl mb-4 italic text-left">NODE_0{i+1}</div>
            <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight text-left">{item.title}</h3>
            <p className="text-gray-500 text-xl leading-relaxed italic text-left">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 10. The Neumorphic ---
export const FeatureNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-20 rounded-[3rem] font-sans">
    <div className="text-center mb-24">
      <h2 className="text-5xl font-bold text-gray-700 uppercase tracking-tight mb-4">Soft UI Nodes</h2>
      <p className="text-gray-500 text-lg">High-fidelity tactile architecture.</p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-16">
      {['Tactile Logic', 'Accessible Core', 'Modern Mesh'].map((item) => (
        <div key={item} className="bg-[#e0e5ec] p-12 rounded-[3rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-4">
          <div className="w-24 h-24 bg-[#e0e5ec] rounded-full shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] mb-10 flex items-center justify-center text-4xl text-gray-600 border-4 border-white/50">
            ✨
          </div>
          <h3 className="text-2xl font-bold text-gray-700 mb-6">{item}</h3>
          <p className="text-gray-500 text-sm leading-relaxed lowercase">Experience the depth and softness of next-generation tactile design logic.</p>
        </div>
      ))}
    </div>
  </div>
);


// --- Main Gallery Wrapper ---
const FeatureGallery = () => {
  const metadata = [
    {
      id: "01",
      name: "Standard SaaS Evolution",
      component: <FeatureStandard />,
      jsx: `import React from 'react';

// --- Shared Icons ---
const BoltIcon = ({ className }) => (
  <svg className={className || "w-6 h-6 text-blue-600"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export const FeatureStandard = () => (
  <div className="bg-white p-12 rounded-3xl border border-gray-100 font-sans">
    <div className="flex flex-col md:flex-row items-center gap-16 text-left">
      <div className="w-full md:w-1/2">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
          <BoltIcon className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Automate your workflow with intelligence.</h2>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">Eliminate manual tasks and focus on what matters. Our engine handles the complex logic so you don't have to.</p>
        <div className="space-y-4 mb-10">
          <div className="flex items-center gap-3 text-gray-700 font-medium">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px]">✓</span> Real-time synchronization
          </div>
          <div className="flex items-center gap-3 text-gray-700 font-medium">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px]">✓</span> Custom automation triggers
          </div>
          <div className="flex items-center gap-3 text-gray-700 font-medium">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px]">✓</span> Advanced analytics dashboard
          </div>
        </div>
        <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">Get Started Now</button>
      </div>
      <div className="w-full md:w-1/2">
        <div className="rounded-2xl shadow-2xl border border-gray-100 overflow-hidden bg-gray-50 p-6 relative group">
           <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-transform group-hover:-translate-y-2 duration-300">
              <div className="h-4 w-1/3 bg-gray-100 rounded mb-6"></div>
              <div className="space-y-3">
                <div className="h-3 w-full bg-gray-50 rounded"></div>
                <div className="h-3 w-5/6 bg-gray-50 rounded"></div>
              </div>
              <div className="mt-8 flex gap-4">
                 <div className="h-20 w-1/2 bg-blue-50 rounded-lg border border-blue-100"></div>
                 <div className="h-20 w-1/2 bg-indigo-50 rounded-lg border border-indigo-100"></div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </div>
);`,
      html: `<!-- Standard SaaS Feature -->
<div class="feat-standard">
  <div class="feat-container">
    <div class="feat-content">
      <div class="feat-icon-box">
        <svg class="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h2>Automate your workflow with intelligence.</h2>
      <p>Eliminate manual tasks and focus on what matters. Our engine handles the complex logic so you don't have to.</p>
      <div class="feat-list">
        <div class="feat-item"><span>✓</span> Real-time synchronization</div>
        <div class="feat-item"><span>✓</span> Custom automation triggers</div>
        <div class="feat-item"><span>✓</span> Advanced analytics dashboard</div>
      </div>
      <button class="feat-cta">Get Started Now</button>
    </div>
    <div class="feat-visual">
      <div class="visual-wrapper">
         <div class="visual-card">
            <div class="skeleton-title"></div>
            <div class="skeleton-lines">
               <div class="skeleton-line full"></div>
               <div class="skeleton-line half"></div>
            </div>
            <div class="visual-blocks">
               <div class="block blue"></div>
               <div class="block indigo"></div>
            </div>
         </div>
      </div>
    </div>
  </div>
</div>`,
      css: `.feat-standard { background: white; padding: 48px; border-radius: 24px; border: 1px solid #f3f4f6; font-family: sans-serif; box-sizing: border-box; }
.feat-container { display: flex; flex-direction: column; gap: 64px; align-items: center; }
@media (min-width: 768px) { .feat-container { flex-direction: row; } }
.feat-content, .feat-visual { width: 100%; }
@media (min-width: 768px) { .feat-content, .feat-visual { width: 50%; } }
.feat-icon-box { width: 48px; height: 48px; background: #eff6ff; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; }
.icon-svg { width: 24px; height: 24px; color: #2563eb; }
h2 { font-size: 32px; font-weight: 700; color: #111827; margin-bottom: 24px; line-height: 1.2; text-align: left; }
p { color: #4b5563; margin-bottom: 32px; font-size: 18px; line-height: 1.6; text-align: left; }
.feat-list { display: flex; flex-direction: column; gap: 16px; margin-bottom: 40px; }
.feat-item { display: flex; align-items: center; gap: 12px; color: #374151; font-weight: 500; font-size: 16px; text-align: left; }
.feat-item span { width: 20px; height: 20px; border-radius: 50%; background: #dbeafe; color: #2563eb; display: flex; align-items: center; justify-content: center; font-size: 10px; }
.feat-cta { padding: 12px 32px; background: #2563eb; color: white; font-weight: 700; border-radius: 12px; border: none; cursor: pointer; transition: 0.2s; box-shadow: 0 10px 15px -3px rgba(37,99,235,0.2); }
.feat-cta:hover { background: #1d4ed8; transform: translateY(-1px); }
.visual-wrapper { padding: 24px; background: #f9fafb; border-radius: 16px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1); }
.visual-card { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #f3f4f6; }
.skeleton-title { height: 16px; width: 33%; background: #f3f4f6; border-radius: 4px; margin-bottom: 24px; }
.skeleton-lines { display: flex; flex-direction: column; gap: 12px; }
.skeleton-line { height: 12px; background: #f9fafb; border-radius: 4px; }
.skeleton-line.full { width: 100%; }
.skeleton-line.half { width: 83%; }
.visual-blocks { margin-top: 32px; display: flex; gap: 16px; }
.block { height: 80px; width: 50%; border-radius: 8px; border: 1px solid; }
.block.blue { background: #eff6ff; border-color: #dbeafe; }
.block.indigo { background: #eef2ff; border-color: #e0e7ff; }`
    },
    {
      id: "02",
      name: "Modern Bento Grid Protocol",
      component: <FeatureBento />,
      jsx: `import React from 'react';

export const FeatureBento = () => (
  <div className="bg-gray-50 p-12 rounded-3xl font-sans text-left">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
      <p className="text-gray-500 text-lg">Everything you need to scale your application globally.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div className="md:col-span-2 bg-white rounded-3xl p-10 border border-gray-100 shadow-sm relative overflow-hidden min-h-[400px]">
        <div className="relative z-10 text-left">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Advanced Analytics</h3>
          <p className="text-gray-500 max-w-sm">Deep dive into your data with our comprehensive analytics suite.</p>
        </div>
        <div className="absolute right-0 bottom-0 w-[60%] h-[60%] bg-gray-50 rounded-tl-3xl border-t border-l border-gray-100 p-6">
           <div className="w-full h-full bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between">
              <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="w-2 h-2 rounded-full bg-gray-200"></div></div>
              <div className="flex items-end gap-2 h-24">
                 <div className="w-full bg-blue-100 rounded-t h-1/2"></div>
                 <div className="w-full bg-blue-500 rounded-t h-3/4"></div>
                 <div className="w-full bg-blue-200 rounded-t h-1/3"></div>
                 <div className="w-full bg-blue-600 rounded-t h-full"></div>
                 <div className="w-full bg-blue-300 rounded-t h-2/3"></div>
              </div>
           </div>
        </div>
      </div>
      <div className="md:row-span-1 bg-indigo-600 rounded-3xl p-10 shadow-xl flex flex-col items-center text-center justify-center relative overflow-hidden text-white">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 text-3xl backdrop-blur-md">🔒</div>
        <h3 className="text-2xl font-bold mb-3 text-white">Enterprise Security</h3>
        <p className="text-indigo-100 text-sm">Bank-grade encryption for all your sensitive data nodes.</p>
      </div>
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm group hover:border-blue-500 transition-colors text-left">
        <h3 className="text-xl font-bold mb-2 text-gray-900">Cloud Sync</h3>
        <p className="text-gray-500 text-sm">Automatic sync across all your devices in real-time.</p>
      </div>
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm group hover:border-indigo-500 transition-colors text-left">
        <h3 className="text-xl font-bold mb-2 text-gray-900">Team Collaboration</h3>
        <p className="text-gray-500 text-sm">Built-in tools for seamless teamwork and communication.</p>
      </div>
    </div>
  </div>
);`,
      html: `<!-- Bento Grid Feature -->
<div class="feat-bento">
  <div class="bento-header">
    <h2>Powerful Features</h2>
    <p>Everything you need to scale your application globally.</p>
  </div>
  <div class="bento-grid">
    <div class="card card-wide">
      <div class="card-text">
        <h3>Advanced Analytics</h3>
        <p>Deep dive into your data with our comprehensive analytics suite.</p>
      </div>
      <div class="card-visual-inset">
         <div class="inset-inner">
            <div class="chart-header"><span></span><span></span></div>
            <div class="chart-bars">
               <div class="bar h-50"></div>
               <div class="bar h-75"></div>
               <div class="bar h-33"></div>
               <div class="bar h-100"></div>
               <div class="bar h-66"></div>
            </div>
         </div>
      </div>
    </div>
    <div class="card card-dark">
      <div class="icon-circle">🔒</div>
      <h3>Enterprise Security</h3>
      <p>Bank-grade encryption for all your sensitive data nodes.</p>
    </div>
    <div class="card card-small">
      <h3>Cloud Sync</h3>
      <p>Automatic sync across all your devices in real-time.</p>
    </div>
    <div class="card card-small">
      <h3>Team Collaboration</h3>
      <p>Built-in tools for seamless teamwork and communication.</p>
    </div>
  </div>
</div>`,
      css: `.feat-bento { background: #f9fafb; padding: 48px; border-radius: 24px; font-family: sans-serif; box-sizing: border-box; }
.bento-header { text-align: center; margin-bottom: 64px; }
h2 { font-size: 32px; font-weight: 700; color: #111827; margin-bottom: 16px; }
p { color: #6b7280; font-size: 18px; }
.bento-grid { display: grid; grid-template-columns: 1fr; gap: 24px; max-width: 1152px; margin: 0 auto; }
@media (min-width: 768px) { .bento-grid { grid-template-columns: repeat(3, 1fr); } }
.card { background: white; border-radius: 24px; padding: 40px; border: 1px solid #f3f4f6; position: relative; overflow: hidden; box-shadow: 0 1px 2px rgba(0,0,0,0.05); text-align: left; }
.card-wide { grid-column: span 1; height: 400px; }
@media (min-width: 768px) { .card-wide { grid-column: span 2; } }
.card-dark { background: #4f46e5; color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
.card-dark h3 { color: white !important; }
.card-dark p { color: #e0e7ff !important; }
.card h3 { font-size: 24px; font-weight: 700; color: #111827; margin-bottom: 12px; }
.card p { font-size: 16px; color: #6b7280; line-height: 1.5; }
.card-small:hover { border-color: #2563eb; }
.icon-circle { width: 64px; height: 64px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px; margin-bottom: 24px; }
.card-visual-inset { position: absolute; right: 0; bottom: 0; width: 60%; height: 60%; background: #f9fafb; border-radius: 24px 0 0 0; border-top: 1px solid #f3f4f6; border-left: 1px solid #f3f4f6; padding: 24px; box-sizing: border-box; }
.inset-inner { background: white; border-radius: 12px; height: 100%; width: 100%; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 16px; display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box; }
.chart-header { display: flex; gap: 4px; }
.chart-header span:first-child { width: 8px; height: 8px; background: #3b82f6; border-radius: 50%; }
.chart-header span:last-child { width: 8px; height: 8px; background: #e5e7eb; border-radius: 50%; }
.chart-bars { display: flex; gap: 8px; align-items: flex-end; height: 96px; }
.bar { flex: 1; border-radius: 2px 2px 0 0; background: #3b82f6; }
.h-50 { height: 50%; background: #dbeafe; }
.h-75 { height: 75%; background: #3b82f6; }
.h-33 { height: 33%; background: #bfdbfe; }
.h-100 { height: 100%; background: #2563eb; }
.h-66 { height: 66%; background: #60a5fa; }`
    },
    {
      id: "03",
      name: "Interactive Logic Tabs",
      component: <FeatureTabs />,
      jsx: `import React, { useState } from 'react';

export const FeatureTabs = () => {
  const [active, setActive] = useState(0);
  const features = [
    { title: "Plan", desc: "Design your logic flow with ease.", color: "bg-blue-600" },
    { title: "Build", desc: "Assemble components with speed.", color: "bg-indigo-600" },
    { title: "Deploy", desc: "Ship to global nodes instantly.", color: "bg-slate-900" }
  ];

  return (
    <div className="bg-white p-12 rounded-3xl border border-gray-100 font-sans text-left">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 flex flex-col gap-4 text-left">
          {features.map((feat, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={\`text-left p-6 rounded-2xl transition-all duration-300 border-2 \${
                active === i 
                ? 'bg-gray-50 border-gray-900 shadow-md' 
                : 'bg-white border-transparent hover:border-gray-100 opacity-70'
              }\`}
            >
              <h3 className={\`font-bold text-xl mb-1 \${active === i ? 'text-gray-900' : 'text-gray-400'}\`}>
                {feat.title}
              </h3>
              <p className="text-sm text-gray-500">{feat.desc}</p>
            </button>
          ))}
        </div>
        <div className="md:col-span-7 bg-gray-50 rounded-3xl overflow-hidden relative min-h-[350px] flex items-center justify-center p-8">
           <div className={\`w-full aspect-video rounded-2xl shadow-xl flex flex-col items-center justify-center text-white transition-all duration-500 \${features[active].color}\`}>
             <div className="text-6xl font-bold mb-4 opacity-30">0{active + 1}</div>
             <div className="text-sm font-bold uppercase tracking-widest px-4 py-1 border border-white/30 rounded-full">Active Mode</div>
           </div>
        </div>
      </div>
    </div>
  );
};`,
      html: `<!-- Interactive Tabs Feature -->
<div class="feat-tabs">
  <div class="tabs-grid">
    <div class="tabs-controls">
      <div class="tab-btn active">
        <h3>Plan</h3>
        <p>Design your logic flow with ease.</p>
      </div>
      <div class="tab-btn inactive">
        <h3>Build</h3>
        <p>Assemble components with speed.</p>
      </div>
      <div class="tab-btn inactive">
        <h3>Deploy</h3>
        <p>Ship to global nodes instantly.</p>
      </div>
    </div>
    <div class="tabs-display">
       <div class="display-card color-blue">
         <div class="node-num">01</div>
         <div class="node-badge">Active Mode</div>
       </div>
    </div>
  </div>
</div>`,
      css: `.feat-tabs { background: white; padding: 48px; border-radius: 24px; border: 1px solid #f3f4f6; font-family: sans-serif; box-sizing: border-box; }
.tabs-grid { display: grid; grid-template-columns: 1fr; gap: 48px; }
@media (min-width: 768px) { .tabs-grid { grid-template-columns: repeat(12, 1fr); } }
.tabs-controls { grid-column: span 1; display: flex; flex-direction: column; gap: 16px; }
@media (min-width: 768px) { .tabs-controls { grid-column: span 5; } }
.tabs-display { grid-column: span 1; background: #f9fafb; border-radius: 24px; padding: 32px; display: flex; align-items: center; justify-content: center; min-height: 350px; }
@media (min-width: 768px) { .tabs-display { grid-column: span 7; } }
.tab-btn { padding: 24px; border-radius: 16px; border: 2px solid transparent; transition: 0.3s; cursor: pointer; text-align: left; }
.tab-btn.active { border-color: #111827; background: #f9fafb; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
.tab-btn.inactive { opacity: 0.5; }
.tab-btn h3 { font-size: 20px; font-weight: 700; color: #111827; margin-bottom: 4px; }
.tab-btn p { color: #6b7280; font-size: 14px; }
.display-card { width: 100%; aspect-ratio: 16/9; border-radius: 16px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; transition: 0.5s; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2); }
.color-blue { background: #2563eb; }
.color-indigo { background: #4f46e5; }
.color-dark { background: #0f172a; }
.node-num { font-size: 64px; font-weight: 700; opacity: 0.3; margin-bottom: 16px; }
.node-badge { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; border: 1px solid rgba(255,255,255,0.3); padding: 4px 16px; border-radius: 999px; }`
    },
    {
      id: "04",
      name: "Developer Core Mesh Block",
      component: <FeatureDev />,
      jsx: `import React from 'react';

export const FeatureDev = () => (
  <div className="bg-[#0d1117] text-white p-12 rounded-3xl border border-gray-800 overflow-hidden relative font-sans text-left">
    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 text-left">
      <div className="w-full lg:w-1/2">
        <div className="inline-block px-3 py-1 bg-green-500/10 text-green-500 border border-green-500/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6">API First</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-left">Built for developers,<br/> by developers.</h2>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed text-left">Integrate our SDK in minutes. Comprehensive documentation, typed SDKs, and 99.99% uptime guarantee.</p>
        <div className="flex gap-4">
          <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors">Read Docs</button>
          <button className="bg-transparent border border-gray-700 text-white px-6 py-3 rounded-lg font-bold hover:border-gray-500 transition-colors">Get API Key</button>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="bg-[#161b22] rounded-2xl border border-gray-700 shadow-2xl overflow-hidden font-mono text-left">
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-700 bg-[#0d1117]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest">initialize_sdk.ts</span>
          </div>
          <div className="p-6 text-sm leading-relaxed">
            <p className="mb-2"><span className="text-purple-400">import</span> {'{'} <span className="text-blue-300">Client</span> {'}'} <span className="text-purple-400">from</span> <span className="text-green-300">'@sdk/core'</span>;</p>
            <p className="mb-6"><span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> <span className="text-blue-300">Client</span>();</p>
            <p className="text-gray-500 mb-2">// Initialize logic sync</p>
            <p className="mb-2"><span className="text-purple-400">await</span> client.<span className="text-yellow-200">initialize</span>({'{'}</p>
            <p className="pl-6">apiKey: <span className="text-green-300">'sk_live_...'</span>,</p>
            <p className="pl-6">priority: <span className="text-blue-400">true</span></p>
            <p>{'}'});</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);`,
      html: `<!-- Developer Code Feature -->
<div class="feat-dev">
  <div class="dev-container">
    <div class="dev-content">
      <div class="dev-badge">API First</div>
      <h2>Built for developers,<br/> by developers.</h2>
      <p>Integrate our SDK in minutes. Comprehensive documentation, typed SDKs, and 99.99% uptime guarantee.</p>
      <div class="dev-actions">
        <button class="btn-white">Read Docs</button>
        <button class="btn-outline">Get API Key</button>
      </div>
    </div>
    <div class="dev-visual">
       <div class="code-window">
         <div class="window-header">
           <div class="dots"><span class="red"></span><span class="yellow"></span><span class="green"></span></div>
           <span class="file-label">initialize_sdk.ts</span>
         </div>
         <div class="code-content">
           <p><span class="tok-kw">import</span> { <span class="tok-type">Client</span> } <span class="tok-kw">from</span> <span class="tok-str">'@sdk/core'</span>;</p>
           <p><span class="tok-kw">const</span> client = <span class="tok-kw">new</span> <span class="tok-type">Client</span>();</p>
           <p class="tok-comment">// Initialize logic sync</p>
           <p><span class="tok-kw">await</span> client.<span class="tok-func">initialize</span>({</p>
           <p class="indent">apiKey: <span class="tok-str">'sk_live_...'</span>,</p>
           <p class="indent">priority: <span class="tok-kw">true</span></p>
           <p>});</p>
         </div>
       </div>
    </div>
  </div>
</div>`,
      css: `.feat-dev { background: #0d1117; color: white; padding: 64px; border-radius: 24px; border: 1px solid #1f2937; font-family: sans-serif; box-sizing: border-box; }
.dev-container { display: flex; flex-direction: column; gap: 64px; align-items: center; }
@media (min-width: 1024px) { .dev-container { flex-direction: row; } }
.dev-content, .dev-visual { width: 100%; }
@media (min-width: 1024px) { .dev-content, .dev-visual { width: 50%; } }
.dev-badge { display: inline-block; padding: 4px 12px; background: rgba(34,197,94,0.1); color: #22c55e; border: 1px solid rgba(34,197,94,0.2); border-radius: 999px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 24px; }
h2 { font-size: 36px; font-weight: 700; color: white; margin-bottom: 24px; line-height: 1.2; text-align: left; }
@media (min-width: 768px) { h2 { font-size: 48px; } }
p { color: #9ca3af; margin-bottom: 40px; font-size: 18px; line-height: 1.6; text-align: left; }
.dev-actions { display: flex; gap: 16px; }
.btn-white { padding: 12px 24px; background: white; color: #111827; font-weight: 700; border-radius: 8px; border: none; cursor: pointer; transition: 0.2s; }
.btn-outline { padding: 12px 24px; background: transparent; color: white; font-weight: 700; border-radius: 8px; border: 1px solid #374151; cursor: pointer; transition: 0.2s; }
.btn-white:hover { background: #e5e7eb; }
.btn-outline:hover { border-color: #4b5563; }
.code-window { background: #161b22; border-radius: 16px; border: 1px solid #30363d; overflow: hidden; font-family: monospace; text-align: left; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
.window-header { padding: 12px 20px; border-bottom: 1px solid #30363d; background: #0d1117; display: flex; justify-content: space-between; align-items: center; }
.dots { display: flex; gap: 6px; }
.dots span { width: 10px; height: 10px; border-radius: 50%; }
.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }
.green { background: #27c93f; }
.file-label { font-size: 12px; color: #8b949e; }
.code-content { padding: 24px; font-size: 14px; line-height: 1.8; color: #c9d1d9; }
.tok-kw { color: #ff7b72; }
.tok-type { color: #79c0ff; }
.tok-str { color: #a5d6ff; }
.tok-func { color: #d2a8ff; }
.tok-comment { color: #8b949e; }
.indent { padding-left: 20px; }`
    },
    {
      id: "05",
      name: "Glassmorphism Protocol Evolution",
      component: <FeatureGlass />,
      jsx: `import React from 'react';

export const FeatureGlass = () => (
  <div className="relative bg-indigo-600 p-16 rounded-3xl overflow-hidden min-h-[450px] flex items-center font-sans text-left">
    <div className="absolute top-0 right-[-10%] w-[30rem] h-[30rem] bg-purple-500 rounded-full mix-blend-screen filter blur-[80px] opacity-40"></div>
    <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-pink-500 rounded-full mix-blend-screen filter blur-[80px] opacity-40"></div>
    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center w-full">
      <div className="text-white text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg text-white">Unleash Creativity</h2>
        <p className="text-white/80 text-lg mb-10 max-w-md text-left">Tools that don't get in your way. Designed for the modern high-fidelity digital economy.</p>
        <button className="bg-white/10 backdrop-blur-xl border border-white/30 text-white px-10 py-4 rounded-full hover:bg-white/20 transition-all font-bold shadow-2xl">Explore Architecture</button>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={\`bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-2xl transition-transform hover:-translate-y-2 \${i%2===0 ? 'translate-y-8' : ''}\`}>
            <div className="w-12 h-12 bg-white/20 rounded-xl mb-6 flex items-center justify-center text-white"><span className="text-xl">✨</span></div>
            <div className="h-2 w-2/3 bg-white/40 rounded-full mb-3 text-left"></div>
            <div className="h-2 w-1/2 bg-white/20 rounded-full text-left"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);`,
      html: `<!-- Glassmorphic Feature -->
<div class="feat-glass">
  <div class="orb-purple"></div>
  <div class="orb-pink"></div>
  <div class="glass-flex">
    <div class="glass-content">
      <h2>Unleash Creativity</h2>
      <p>Tools that don't get in your way. Designed for the modern high-fidelity digital economy.</p>
      <button class="glass-btn">Explore Architecture</button>
    </div>
    <div class="glass-grid">
      <div class="glass-card"><div class="glass-icon">✨</div><div class="line-lg"></div><div class="line-sm"></div></div>
      <div class="glass-card lift"><div class="glass-icon">✨</div><div class="line-lg"></div><div class="line-sm"></div></div>
      <div class="glass-card"><div class="glass-icon">✨</div><div class="line-lg"></div><div class="line-sm"></div></div>
      <div class="glass-card lift"><div class="glass-icon">✨</div><div class="line-lg"></div><div class="line-sm"></div></div>
    </div>
  </div>
</div>`,
      css: `.feat-glass { position: relative; background: #4f46e5; padding: 64px; border-radius: 24px; overflow: hidden; min-height: 450px; display: flex; align-items: center; font-family: sans-serif; box-sizing: border-box; }
.orb-purple { position: absolute; top: -150px; right: -150px; width: 480px; height: 480px; background: #a855f7; border-radius: 50%; filter: blur(80px); opacity: 0.4; }
.orb-pink { position: absolute; bottom: -150px; left: -150px; width: 480px; height: 480px; background: #ec4899; border-radius: 50%; filter: blur(80px); opacity: 0.4; }
.glass-flex { position: relative; z-index: 10; display: flex; flex-direction: column; gap: 64px; width: 100%; }
@media (min-width: 1024px) { .glass-flex { flex-direction: row; } }
.glass-content, .glass-grid { width: 100%; }
@media (min-width: 1024px) { .glass-content, .glass-grid { width: 50%; } }
h2 { font-size: 36px; font-weight: 700; color: white; margin-bottom: 24px; text-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: left; }
@media (min-width: 768px) { h2 { font-size: 48px; } }
p { color: rgba(255,255,255,0.8); font-size: 18px; margin-bottom: 40px; max-width: 448px; line-height: 1.6; text-align: left; }
.glass-btn { background: rgba(255,255,255,0.1); backdrop-filter: blur(24px); border: 1px solid rgba(255,255,255,0.3); color: white; padding: 16px 40px; border-radius: 999px; font-weight: 700; cursor: pointer; transition: 0.3s; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
.glass-btn:hover { background: rgba(255,255,255,0.2); transform: scale(1.05); }
.glass-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.glass-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(24px); border: 1px solid rgba(255,255,255,0.2); padding: 32px; border-radius: 24px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.2); transition: 0.3s; text-align: left; }
.glass-card.lift { transform: translateY(32px); }
.glass-card:hover { transform: translateY(-8px) !important; background: rgba(255,255,255,0.2); }
.glass-icon { width: 48px; height: 48px; background: rgba(255,255,255,0.2); border-radius: 12px; margin-bottom: 24px; display: flex; align-items: center; justify-content: center; color: white; font-size: 20px; }
.line-lg { height: 8px; width: 66%; background: rgba(255,255,255,0.4); border-radius: 999px; margin-bottom: 12px; }
.line-sm { height: 8px; width: 50%; background: rgba(255,255,255,0.2); border-radius: 999px; }`
    },
    {
      id: "06",
      name: "High-Fidelity Service Grid",
      component: <FeatureGrid />,
      jsx: `import React from 'react';

export const FeatureGrid = () => (
  <div className="bg-white p-12 rounded-3xl border border-gray-100 font-sans text-left">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
      <p className="text-gray-500 text-lg">We provide a comprehensive suite of professional tools.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        { title: 'Secure Shield', icon: '🛡️', desc: 'Bank-grade encryption protocols for all data.' },
        { title: 'Flash Speed', icon: '⚡', desc: 'Optimized for sub-ms latency globally.' },
        { title: 'Crystal Uptime', icon: '💎', desc: '99.99% uptime guarantee with SLA.' },
        { title: 'Node Scale', icon: '📈', desc: 'Seamlessly grow from 1 to 1M nodes.' },
        { title: 'Logic Support', icon: '💬', desc: '24/7 dedicated support for architecture.' },
        { title: 'Global Mesh', icon: '🌍', desc: 'Strategic nodes in 30+ regions.' },
      ].map((item) => (
        <div key={item.title} className="p-10 rounded-3xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 cursor-default group text-left">
          <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block drop-shadow-sm">{item.icon}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);`,
      html: `<!-- Service Grid Feature -->
<div class="feat-grid">
  <div class="grid-header">
    <h2>Why Choose Us?</h2>
    <p>We provide a comprehensive suite of professional tools.</p>
  </div>
  <div class="grid-wrapper">
    <div class="grid-tile">
      <div class="tile-icon">🛡️</div>
      <h3>Secure Shield</h3>
      <p>Bank-grade encryption protocols for all data.</p>
    </div>
    <div class="grid-tile">
      <div class="tile-icon">⚡</div>
      <h3>Flash Speed</h3>
      <p>Optimized for sub-ms latency globally.</p>
    </div>
    <div class="grid-tile">
      <div class="tile-icon">💎</div>
      <h3>Crystal Uptime</h3>
      <p>99.99% uptime guarantee with SLA.</p>
    </div>
    <div class="grid-tile">
      <div class="tile-icon">📈</div>
      <h3>Node Scale</h3>
      <p>Seamlessly grow from 1 to 1M nodes.</p>
    </div>
    <div class="grid-tile">
      <div class="tile-icon">💬</div>
      <h3>Logic Support</h3>
      <p>24/7 dedicated support for architecture.</p>
    </div>
    <div class="grid-tile">
      <div class="tile-icon">🌍</div>
      <h3>Global Mesh</h3>
      <p>Strategic nodes in 30+ regions.</p>
    </div>
  </div>
</div>`,
      css: `.feat-grid { background: white; padding: 48px; border-radius: 24px; border: 1px solid #f3f4f6; font-family: sans-serif; box-sizing: border-box; }
.grid-header { text-align: center; max-width: 672px; margin: 0 auto 64px auto; }
h2 { font-size: 32px; font-weight: 700; color: #111827; margin-bottom: 16px; }
p { color: #6b7280; font-size: 18px; }
.grid-wrapper { display: grid; grid-template-columns: 1fr; gap: 40px; }
@media (min-width: 768px) { .grid-wrapper { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .grid-wrapper { grid-template-columns: repeat(3, 1fr); } }
.grid-tile { padding: 40px; border-radius: 24px; background: #f9fafb; transition: all 0.3s ease; text-align: left; }
.grid-tile:hover { background: #eff6ff; transform: translateY(-4px); }
.tile-icon { font-size: 40px; margin-bottom: 24px; display: inline-block; }
h3 { font-size: 20px; font-weight: 700; color: #111827; margin-bottom: 12px; }
p { color: #6b7280; font-size: 14px; line-height: 1.6; }`
    },
    {
      id: "07",
      name: "Mobile Mesh Node Interface",
      component: <FeatureApp />,
      jsx: `import React from 'react';

export const FeatureApp = () => (
  <div className="bg-orange-50 p-16 rounded-3xl overflow-hidden font-sans text-left">
    <div className="flex flex-col lg:flex-row items-center gap-20 max-w-6xl mx-auto">
      <div className="w-full lg:w-1/2">
        <div className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Mobile First</div>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight text-left">Your Entire Grid,<br/> in Your Pocket.</h2>
        <p className="text-gray-600 text-xl mb-10 leading-relaxed text-left">Manage nodes, track logic flows, and chat with the core team on the go. Available for all mobile OS.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold shadow-xl hover:bg-black transition-all">App Store</button>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold shadow-xl hover:bg-black transition-all">Play Store</button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3.5rem] border-[10px] border-gray-900 shadow-2xl overflow-hidden scale-110">
          <div className="w-full h-full bg-white relative">
            <div className="bg-orange-500 h-40 p-8 pt-16 text-white text-left">
              <div className="text-xs opacity-70 uppercase tracking-widest font-bold mb-2">Dashboard</div>
              <div className="text-3xl font-bold text-white text-left">$12,450.00</div>
            </div>
            <div className="p-6 space-y-4 text-left">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 text-left">
                  <div className="w-12 h-12 rounded-xl bg-gray-200"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-2/3 bg-gray-200 rounded-full text-left"></div>
                    <div className="h-2 w-1/2 bg-gray-100 rounded-full text-left"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-8 right-8 w-14 h-14 bg-orange-500 rounded-full shadow-xl flex items-center justify-center text-white font-bold text-2xl active:scale-90 transition-transform">+</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);`,
      html: `<!-- Mobile App Feature -->
<div class="feat-app">
  <div class="app-container">
    <div class="app-content">
      <div class="app-badge">Mobile First</div>
      <h2>Your Entire Grid,<br/> in Your Pocket.</h2>
      <p>Manage nodes, track logic flows, and chat with the core team on the go. Available for all mobile OS.</p>
      <div class="app-actions">
        <button class="btn-black">App Store</button>
        <button class="btn-black">Play Store</button>
      </div>
    </div>
    <div class="app-visual">
       <div class="phone-mockup">
         <div class="phone-screen">
           <div class="phone-header">
             <div class="header-label">Dashboard</div>
             <div class="header-value">$12,450.00</div>
           </div>
           <div class="phone-body">
             <div class="phone-row"><div class="row-sq"></div><div class="row-lines"><div class="l-1"></div><div class="l-2"></div></div></div>
             <div class="phone-row"><div class="row-sq"></div><div class="row-lines"><div class="l-1"></div><div class="l-2"></div></div></div>
             <div class="phone-row"><div class="row-sq"></div><div class="row-lines"><div class="l-1"></div><div class="l-2"></div></div></div>
             <div class="phone-row"><div class="row-sq"></div><div class="row-lines"><div class="l-1"></div><div class="l-2"></div></div></div>
           </div>
           <div class="phone-fab">+</div>
         </div>
       </div>
    </div>
  </div>
</div>`,
      css: `.feat-app { background: #fff7ed; padding: 64px; border-radius: 24px; font-family: sans-serif; box-sizing: border-box; }
.app-container { display: flex; flex-direction: column; gap: 80px; align-items: center; max-width: 1152px; margin: 0 auto; }
@media (min-width: 1024px) { .app-container { flex-direction: row; } }
.app-content, .app-visual { width: 100%; }
@media (min-width: 1024px) { .app-content, .app-visual { width: 50%; } }
.app-badge { display: inline-block; padding: 4px 16px; background: #ffedd5; color: #ea580c; border-radius: 999px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 24px; }
h2 { font-size: 40px; font-weight: 700; color: #111827; margin-bottom: 32px; line-height: 1.1; text-align: left; }
@media (min-width: 768px) { h2 { font-size: 60px; } }
p { color: #4b5563; font-size: 20px; margin-bottom: 40px; line-height: 1.6; text-align: left; }
.app-actions { display: flex; flex-direction: column; gap: 16px; }
@media (min-width: 640px) { .app-actions { flex-direction: row; } }
.btn-black { padding: 12px 32px; background: #111827; color: white; font-weight: 700; border-radius: 12px; border: none; cursor: pointer; transition: 0.2s; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.2); }
.btn-black:hover { background: #000; transform: translateY(-1px); }
.phone-mockup { width: 300px; height: 600px; background: #111827; border-radius: 56px; border: 10px solid #111827; box-shadow: 0 50px 100px -20px rgba(0,0,0,0.5); overflow: hidden; position: relative; transform: scale(1.1); margin: 0 auto; }
.phone-screen { width: 100%; height: 100%; background: white; position: relative; display: flex; flex-direction: column; }
.phone-header { background: #f97316; height: 160px; padding: 32px; padding-top: 64px; color: white; text-align: left; }
.header-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.7; margin-bottom: 8px; }
.header-value { font-size: 32px; font-weight: 700; }
.phone-body { padding: 24px; display: flex; flex-direction: column; gap: 16px; }
.phone-row { display: flex; align-items: center; gap: 16px; padding: 16px; background: #f9fafb; border-radius: 16px; border: 1px solid #f3f4f6; }
.row-sq { width: 48px; height: 48px; border-radius: 12px; background: #e5e7eb; }
.row-lines { flex: 1; display: flex; flex-direction: column; gap: 8px; }
.l-1 { height: 8px; width: 66%; background: #e5e7eb; border-radius: 4px; }
.l-2 { height: 8px; width: 50%; background: #f3f4f6; border-radius: 4px; }
.phone-fab { position: absolute; bottom: 32px; right: 32px; width: 56px; height: 56px; background: #f97316; border-radius: 50%; box-shadow: 0 10px 15px -3px rgba(249,115,22,0.4); display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: 700; cursor: pointer; }`
    },
    {
      id: "08",
      name: "Retro Brutalist Power Node",
      component: <FeatureBrutalist />,
      jsx: `import React from 'react';

export const FeatureBrutalist = () => (
  <div className="bg-yellow-400 p-12 rounded-3xl border-8 border-black font-sans text-left">
    <div className="grid md:grid-cols-2 gap-12 items-center text-left">
      <div className="bg-white border-8 border-black p-10 shadow-[20px_20px_0_0_#000] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all text-left">
        <h2 className="text-6xl font-black uppercase mb-8 leading-[0.8] tracking-tighter text-black text-left">Power.<br/>Speed.<br/>Control.</h2>
        <p className="font-bold text-2xl mb-10 text-black text-left">Zero friction. Just raw performance for power nodes.</p>
        <button className="w-full py-6 bg-black text-white font-black text-2xl uppercase hover:bg-white hover:text-black border-4 border-transparent hover:border-black transition-all tracking-widest shadow-2xl">Get Access</button>
      </div>
      <div className="grid grid-cols-2 gap-8 text-left">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="bg-indigo-600 border-8 border-black p-8 aspect-square flex items-center justify-center hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#000] transition-all cursor-pointer group text-left">
            <span className="text-6xl font-black text-white group-hover:scale-125 transition-transform">0{i}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);`,
      html: `<!-- Brutalist Feature -->
<div class="feat-brutal">
  <div class="brutal-grid">
    <div class="brutal-card">
      <h2>Power.<br/>Speed.<br/>Control.</h2>
      <p>Zero friction. Just raw performance for power nodes.</p>
      <button class="brutal-btn">Get Access</button>
    </div>
    <div class="nodes-grid">
      <div class="node-box"><span>01</span></div>
      <div class="node-box"><span>02</span></div>
      <div class="node-box"><span>03</span></div>
      <div class="node-box"><span>04</span></div>
    </div>
  </div>
</div>`,
      css: `.feat-brutal { background: #facc15; padding: 48px; border-radius: 24px; border: 8px solid black; font-family: sans-serif; box-sizing: border-box; }
.brutal-grid { display: grid; grid-template-columns: 1fr; gap: 48px; text-align: left; align-items: center; }
@media (min-width: 768px) { .brutal-grid { grid-template-columns: repeat(2, 1fr); } }
.brutal-card { background: white; border: 8px solid black; padding: 40px; box-shadow: 20px 20px 0 0 #000; transition: 0.1s; text-align: left; }
.brutal-card:hover { transform: translate(4px, 4px); box-shadow: 12px 12px 0 0 #000; }
h2 { font-size: 64px; font-weight: 900; color: black; margin-bottom: 32px; line-height: 0.8; letter-spacing: -0.05em; text-transform: uppercase; text-align: left; }
p { font-size: 24px; font-weight: 700; color: black; margin-bottom: 40px; text-align: left; }
.brutal-btn { width: 100%; padding: 24px; background: black; color: white; font-weight: 900; border: 4px solid transparent; text-transform: uppercase; font-size: 20px; letter-spacing: 0.1em; cursor: pointer; transition: 0.2s; }
.brutal-btn:hover { background: white; color: black; border-color: black; }
.nodes-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
.node-box { background: #4f46e5; border: 8px solid black; padding: 32px; aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center; transition: 0.2s; cursor: pointer; }
.node-box:hover { transform: translateY(-8px); box-shadow: 10px 10px 0 0 #000; }
.node-box span { font-size: 64px; font-weight: 900; color: white; }`
    },
    {
      id: "09",
      name: "Sticky Storytelling Logic Scroll",
      component: <FeatureSticky />,
      jsx: `import React from 'react';

export const FeatureSticky = () => (
  <div className="bg-white p-12 rounded-3xl border border-gray-100 overflow-hidden font-sans text-left">
    <div className="flex flex-col lg:flex-row gap-20 max-w-6xl mx-auto">
      <div className="w-full lg:w-1/2 lg:sticky lg:top-24 h-fit">
        <div className="aspect-square bg-slate-900 rounded-[3rem] flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 animate-pulse"></div>
           <div className="text-white text-center p-12">
             <div className="text-9xl mb-8 drop-shadow-2xl">🚀</div>
             <h3 className="text-4xl font-bold uppercase tracking-tighter">Launch_Core</h3>
             <div className="h-1 w-20 bg-blue-500 mx-auto mt-6 rounded-full"></div>
           </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-32 py-12">
        {[
          { title: "Collaborate Logic", desc: "Work together in the shared logic mesh with real-time synchronization nodes." },
          { title: "Version Control", desc: "Never lose a logic state. Rollback to any version in history with one click." },
          { title: "Design Systems", desc: "Maintain absolute consistency across your entire product suite automatically." },
          { title: "Global Mesh", desc: "Push your architecture to the edge with zero latency global synchronization." }
        ].map((item, i) => (
          <div key={i} className="relative pl-12 border-l-4 border-gray-100 hover:border-blue-600 transition-colors duration-500 text-left">
            <div className="absolute left-[-14px] top-0 w-6 h-6 bg-white border-4 border-blue-600 rounded-full"></div>
            <div className="text-blue-600 font-bold text-2xl mb-4 italic text-left">NODE_0{i+1}</div>
            <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight text-left">{item.title}</h3>
            <p className="text-gray-500 text-xl leading-relaxed italic text-left">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);`,
      html: `<!-- Sticky Story Feature -->
<div class="feat-sticky">
  <div class="sticky-container">
    <div class="sticky-visual">
       <div class="visual-box">
         <div class="box-gradient"></div>
         <div class="box-content">
           <div class="box-emoji">🚀</div>
           <h3>Launch_Core</h3>
           <div class="box-line"></div>
         </div>
       </div>
    </div>
    <div class="sticky-story">
      <div class="story-item">
        <div class="item-marker"></div>
        <div class="item-id">NODE_01</div>
        <h3>Collaborate Logic</h3>
        <p>Work together in the shared logic mesh with real-time synchronization nodes.</p>
      </div>
      <div class="story-item">
        <div class="item-marker"></div>
        <div class="item-id">NODE_02</div>
        <h3>Version Control</h3>
        <p>Never lose a logic state. Rollback to any version in history with one click.</p>
      </div>
      <div class="story-item">
        <div class="item-marker"></div>
        <div class="item-id">NODE_03</div>
        <h3>Design Systems</h3>
        <p>Maintain absolute consistency across your entire product suite automatically.</p>
      </div>
      <div class="story-item">
        <div class="item-marker"></div>
        <div class="item-id">NODE_04</div>
        <h3>Global Mesh</h3>
        <p>Push your architecture to the edge with zero latency global synchronization.</p>
      </div>
    </div>
  </div>
</div>`,
      css: `.feat-sticky { background: white; padding: 48px; border-radius: 24px; border: 1px solid #f3f4f6; font-family: sans-serif; box-sizing: border-box; }
.sticky-container { display: flex; flex-direction: column; gap: 80px; max-width: 1152px; margin: 0 auto; }
@media (min-width: 1024px) { .sticky-container { flex-direction: row; } }
.sticky-visual, .sticky-story { width: 100%; }
@media (min-width: 1024px) { .sticky-visual, .sticky-story { width: 50%; } }
.visual-box { aspect-ratio: 1/1; background: #0f172a; border-radius: 48px; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.3); }
@media (min-width: 1024px) { .visual-box { position: sticky; top: 96px; } }
.box-gradient { position: absolute; inset: 0; background: linear-gradient(to bottom right, #2563eb, #9333ea); opacity: 0.2; }
.box-content { position: relative; z-index: 10; text-align: center; color: white; }
.box-emoji { font-size: 96px; margin-bottom: 32px; }
.box-content h3 { font-size: 36px; font-weight: 700; text-transform: uppercase; letter-spacing: -0.05em; margin: 0; color: white; }
.box-line { height: 4px; width: 80px; background: #3b82f6; margin: 24px auto 0; border-radius: 999px; }
.sticky-story { display: flex; flex-direction: column; gap: 128px; padding-top: 48px; padding-bottom: 48px; }
.story-item { padding-left: 48px; border-left: 4px solid #f3f4f6; position: relative; transition: 0.3s; text-align: left; }
.story-item:hover { border-color: #2563eb; }
.item-marker { position: absolute; left: -14px; top: 0; width: 24px; height: 24px; background: white; border: 4px solid #2563eb; border-radius: 50%; }
.item-id { color: #2563eb; font-weight: 700; font-size: 24px; margin-bottom: 16px; font-style: italic; }
.story-item h3 { font-size: 36px; font-weight: 700; color: #111827; margin-bottom: 24px; line-height: 1.1; text-align: left; }
.story-item p { color: #6b7280; font-size: 20px; font-weight: 500; line-height: 1.6; text-align: left; }`
    },
    {
      id: "10",
      name: "Neumorphic Soft Logic Nodes",
      component: <FeatureNeumorphic />,
      jsx: `import React from 'react';

export const FeatureNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-20 rounded-[3rem] font-sans text-center">
    <div className="text-center mb-24">
      <h2 className="text-5xl font-bold text-gray-700 uppercase tracking-tight mb-4">Soft UI Nodes</h2>
      <p className="text-gray-500 text-lg">High-fidelity tactile architecture.</p>
    </div>
    <div className="grid md:grid-cols-3 gap-16 text-center">
      {['Tactile Logic', 'Accessible Core', 'Modern Mesh'].map((item) => (
        <div key={item} className="bg-[#e0e5ec] p-12 rounded-[3rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-4">
          <div className="w-24 h-24 bg-[#e0e5ec] rounded-full shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] mb-10 flex items-center justify-center text-4xl text-gray-600 border-4 border-white/50">✨</div>
          <h3 className="text-2xl font-bold text-gray-700 mb-6">{item}</h3>
          <p className="text-gray-500 text-sm leading-relaxed lowercase">Experience the depth and softness of next-generation tactile design logic.</p>
        </div>
      ))}
    </div>
  </div>
);`,
      html: `<!-- Neumorphic Feature -->
<div class="feat-neu">
  <div class="neu-header">
    <h2>Soft UI Nodes</h2>
    <p>High-fidelity tactile architecture.</p>
  </div>
  <div class="neu-grid">
    <div class="neu-card">
      <div class="neu-icon">✨</div>
      <h3>Tactile Logic</h3>
      <p>Experience the depth and softness of next-generation tactile design logic.</p>
    </div>
    <div class="neu-card">
      <div class="neu-icon">✨</div>
      <h3>Accessible Core</h3>
      <p>Experience the depth and softness of next-generation tactile design logic.</p>
    </div>
    <div class="neu-card">
      <div class="neu-icon">✨</div>
      <h3>Modern Mesh</h3>
      <p>Experience the depth and softness of next-generation tactile design logic.</p>
    </div>
  </div>
</div>`,
      css: `.feat-neu { background: #e0e5ec; padding: 64px; border-radius: 48px; font-family: sans-serif; text-align: center; box-sizing: border-box; }
.neu-header { margin-bottom: 80px; }
h2 { font-size: 48px; font-weight: 700; color: #374151; text-transform: uppercase; margin-bottom: 16px; }
p { color: #6b7280; font-size: 18px; }
.neu-grid { display: grid; grid-template-columns: 1fr; gap: 48px; }
@media (min-width: 768px) { .neu-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .neu-grid { grid-template-columns: repeat(3, 1fr); } }
.neu-card { background: #e0e5ec; padding: 48px; border-radius: 48px; box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; transition: 0.5s ease; border: 1px solid rgba(255,255,255,0.2); text-align: center; }
.neu-card:hover { transform: translateY(-12px); }
.neu-icon { width: 96px; height: 96px; border-radius: 50%; background: #e0e5ec; box-shadow: inset 10px 10px 20px #bebebe, inset -10px -10px 20px #ffffff; display: flex; align-items: center; justify-content: center; font-size: 32px; margin: 0 auto 32px auto; border: 4px solid rgba(255,255,255,0.5); }
h3 { font-size: 24px; font-weight: 700; color: #374151; margin-bottom: 24px; }
p { color: #6b7280; font-size: 14px; line-height: 1.6; }`
    }
  ];

  return (
    <div className="container overflow-y-auto bg-gray-50 p-6 md:p-12 font-sans pb-64">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-6xl font-bold text-gray-900 mb-6 tracking-tight">Feature_Manifest</h1>
        <p className="text-gray-500 text-xl italic text-center">High-fidelity components to showcase product value.</p>
      </div>
      
      <div className="space-y-32 max-w-7xl mx-auto">
        {metadata.map((item) => (
          <section key={item.id} className='bg-white p-4 rounded-xl shadow-lg relative group/feat border border-gray-200'>
            <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/feat:opacity-100 transition-opacity">
              <CopyButton 
                jsxCode={item.jsx}
                htmlCode={item.html}
                cssCode={item.css}
              />
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-8">
              {item.id}. {item.name}
            </span>
            {item.component}
          </section>
        ))}
      </div>
    </div>
  );
};

export default FeatureGallery;