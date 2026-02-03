import React from 'react';

// --- Shared Components ---
const Navbar = ({ dark = false }) => (
  <nav className={`flex justify-between items-center py-6 ${dark ? 'text-white' : 'text-slate-900'}`}>
    <div className="font-bold text-xl tracking-tight">Brand.</div>
    <div className="hidden md:flex gap-8 text-sm font-medium">
      <a href="#" className="hover:opacity-70">Product</a>
      <a href="#" className="hover:opacity-70">Features</a>
      <a href="#" className="hover:opacity-70">Pricing</a>
    </div>
    <button className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${dark ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
      Get Started
    </button>
  </nav>
);

// --- 1. The SaaS Standard (Clean & Centered) ---
const LandingSaaS = () => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm overflow-hidden relative">
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div className="flex flex-col items-center text-center mt-20 mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span> New Feature v2.0
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
          Manage your team <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">with absolute clarity.</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mb-10">
          The all-in-one platform to streamline workflow, track progress, and ship faster. 
          Trusted by 10,000+ companies worldwide.
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">Start Free Trial</button>
          <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all">View Demo</button>
        </div>
      </div>
      {/* Mockup */}
      <div className="relative mx-auto max-w-4xl border border-slate-200 rounded-t-2xl shadow-2xl overflow-hidden bg-slate-50 h-64">
        <div className="absolute top-0 left-0 right-0 h-8 bg-white border-b border-slate-200 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        {/* Abstract Dashboard Content */}
        <div className="p-8 grid grid-cols-3 gap-4 mt-8 opacity-50">
           <div className="h-32 bg-slate-200 rounded-lg col-span-2"></div>
           <div className="h-32 bg-slate-200 rounded-lg"></div>
           <div className="h-32 bg-slate-200 rounded-lg"></div>
           <div className="h-32 bg-slate-200 rounded-lg col-span-2"></div>
        </div>
      </div>
    </div>
  </div>
);

// --- 2. The Modern Gradient (Startup) ---
const LandingGradient = () => (
  <div className="bg-slate-900 text-white p-8 rounded-3xl overflow-hidden relative">
    {/* Gradient Background */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-600/30 blur-[100px]"></div>
      <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-blue-600/30 blur-[100px]"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto">
      <Navbar dark />
      <div className="grid md:grid-cols-2 gap-12 items-center mt-12 mb-20">
        <div>
          <h1 className="text-6xl font-bold leading-tight mb-6">
            Build the future <br/> of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">digital art.</span>
          </h1>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            Create, collect, and sell extraordinary NFTs. The world's first and largest digital marketplace for crypto collectibles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-gray-100">Explore</button>
            <button className="px-8 py-3 border border-slate-700 rounded-full font-bold hover:bg-slate-800">Create</button>
          </div>
          <div className="mt-12 flex gap-8 text-slate-500">
            <div><span className="block text-2xl font-bold text-white">98k+</span>Artworks</div>
            <div><span className="block text-2xl font-bold text-white">12k+</span>Auctions</div>
            <div><span className="block text-2xl font-bold text-white">15k+</span>Artists</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md p-6 transform rotate-3 hover:rotate-0 transition-all duration-500">
             <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 3. The Minimalist (Typography Focus) ---
const LandingMinimal = () => (
  <div className="bg-[#f4f4f0] p-8 rounded-3xl border border-stone-200">
    <nav className="flex justify-between items-center py-6 max-w-7xl mx-auto text-stone-900">
      <div className="font-serif font-bold text-2xl italic">Lumina.</div>
      <div className="hidden md:block text-sm uppercase tracking-widest font-bold">Architecture & Design</div>
      <button className="text-sm border-b border-stone-900 pb-1 hover:opacity-60 transition-opacity">Contact</button>
    </nav>
    
    <div className="max-w-7xl mx-auto mt-24 mb-32">
      <h1 className="text-[12vw] leading-[0.8] font-serif text-stone-900">
        Simplicity <br/>
        <span className="ml-24 italic text-stone-400">is the</span> <br/>
        ultimate form.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
        <div className="col-span-1">
          <p className="text-stone-600 text-lg leading-relaxed">
            We craft spaces that breathe. Our approach combines traditional materials with modern geometry to create timeless environments.
          </p>
          <button className="mt-8 px-8 py-3 bg-stone-900 text-[#f4f4f0] rounded-full text-sm uppercase tracking-wider hover:bg-stone-700 transition-colors">
            View Projects
          </button>
        </div>
        <div className="col-span-2 h-64 bg-stone-300 rounded-lg overflow-hidden relative">
           <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-80" alt="Minimal" />
        </div>
      </div>
    </div>
  </div>
);

// --- 4. The Developer (Dark Code) ---
const LandingDev = () => (
  <div className="bg-black text-white p-8 rounded-3xl border border-gray-800 font-mono">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center py-6 mb-16">
        <div className="text-green-500 font-bold">&lt;DevTools /&gt;</div>
        <div className="flex gap-6 text-xs text-gray-400">
          <a href="#" className="hover:text-white">DOCS</a>
          <a href="#" className="hover:text-white">API</a>
          <a href="#" className="hover:text-white">BLOG</a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block px-3 py-1 bg-gray-900 text-green-400 rounded mb-6 text-xs">v4.0.2 Stable Release</div>
          <h1 className="text-5xl font-bold mb-6 tracking-tighter">
            Infrastructure for <br/>
            <span className="text-green-500">modern applications.</span>
          </h1>
          <p className="text-gray-400 mb-8 text-sm leading-relaxed">
            Deploy in seconds. Scale automatically. No config required.
            The developer platform you've always wanted.
          </p>
          <div className="flex gap-4">
            <div className="relative">
              <input type="email" placeholder="email@company.com" className="bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded w-64 focus:outline-none focus:border-green-500" />
            </div>
            <button className="bg-green-600 text-black px-6 py-3 rounded font-bold hover:bg-green-500 transition-colors">
              Deploy Now
            </button>
          </div>
        </div>

        {/* Code Snippet */}
        <div className="bg-[#1e1e1e] rounded-xl border border-gray-800 shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-gray-800">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            <span className="ml-2 text-xs text-gray-500">config.js</span>
          </div>
          <div className="p-6 text-sm text-gray-300 leading-relaxed overflow-x-auto">
            <p><span className="text-purple-400">import</span> {'{'} deploy {'}'} <span className="text-purple-400">from</span> <span className="text-orange-300">'@devtools/sdk'</span>;</p>
            <p className="mt-2"><span className="text-blue-400">const</span> app = <span className="text-yellow-300">await</span> deploy({'{'}</p>
            <p className="pl-4">name: <span className="text-orange-300">'my-awesome-app'</span>,</p>
            <p className="pl-4">region: <span className="text-orange-300">'us-east-1'</span>,</p>
            <p className="pl-4">scale: <span className="text-blue-400">true</span>,</p>
            <p className="pl-4">env: {'{'}</p>
            <p className="pl-8">DB_HOST: process.env.DB_HOST</p>
            <p className="pl-4">{'}'}</p>
            <p>{'}'});</p>
            <p className="mt-2 text-green-600 text-xs">// 🚀 Deployed in 450ms</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 5. The Mobile App (Showcase) ---
const LandingMobile = () => (
  <div className="bg-orange-50 p-8 rounded-3xl overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center mt-12 gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
            Banking for the <br/>
            <span className="text-orange-600">new generation.</span>
          </h1>
          <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto md:mx-0">
            Send money, pay bills, and track your expenses. All in one place. No hidden fees, ever.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:opacity-80">
              <div className="text-left">
                <div className="text-[10px]">Download on the</div>
                <div className="text-sm font-bold leading-none">App Store</div>
              </div>
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:opacity-80">
              <div className="text-left">
                <div className="text-[10px]">GET IT ON</div>
                <div className="text-sm font-bold leading-none">Google Play</div>
              </div>
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-orange-50"></div>)}
            </div>
            <div className="text-sm font-bold text-slate-700">5M+ Active Users</div>
          </div>
        </div>
        
        <div className="flex-1 relative h-[500px] w-full flex items-center justify-center">
          <div className="w-[280px] h-[550px] bg-black rounded-[3rem] border-8 border-black shadow-2xl relative z-10 overflow-hidden">
             {/* Screen Content */}
             <div className="w-full h-full bg-white flex flex-col">
               <div className="bg-orange-500 h-32 p-6 text-white pt-12">
                 <div className="text-sm opacity-80">Total Balance</div>
                 <div className="text-3xl font-bold">$12,450.00</div>
               </div>
               <div className="p-4 space-y-4">
                 {[1,2,3].map(i => (
                   <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                     <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                       <div className="h-4 w-20 bg-gray-200 rounded"></div>
                     </div>
                     <div className="h-4 w-12 bg-gray-200 rounded"></div>
                   </div>
                 ))}
               </div>
             </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-orange-400 rounded-full blur-3xl opacity-20 -z-0"></div>
        </div>
      </div>
    </div>
  </div>
);

// --- 6. The Cyberpunk (Web3/Crypto) ---
const LandingCyber = () => (
  <div className="bg-[#050505] text-white p-8 rounded-3xl border border-gray-900 relative overflow-hidden">
    {/* Grid Overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    
    <div className="relative z-10 max-w-7xl mx-auto">
      <nav className="flex justify-between items-center py-6 font-mono">
        <div className="text-cyan-400 font-bold tracking-widest text-xl">CYBER<span className="text-white">DEX</span></div>
        <button className="border border-cyan-500 text-cyan-400 px-6 py-2 hover:bg-cyan-500 hover:text-black transition-all uppercase tracking-widest text-xs font-bold">Connect Wallet</button>
      </nav>

      <div className="mt-20 text-center">
        <div className="inline-block border border-pink-500 text-pink-500 px-4 py-1 rounded-full text-xs font-mono mb-6 animate-pulse">
          LIVE ON MAINNET
        </div>
        <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase italic tracking-tighter" style={{ textShadow: "4px 4px 0px #06b6d4" }}>
          Decentralize <br/> Everything
        </h1>
        <p className="text-gray-400 font-mono max-w-xl mx-auto mb-10">
          Trade tokens, earn yield, and participate in governance. 
          The future of finance is open source and permissionless.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-cyan-500 text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all clip-path-slant">
            Start Trading
          </button>
          <button className="bg-transparent border border-gray-600 text-gray-300 px-8 py-4 font-bold uppercase tracking-widest hover:border-white hover:text-white transition-all">
            Read Whitepaper
          </button>
        </div>
      </div>
      
      {/* Footer Ticker */}
      <div className="mt-32 border-t border-gray-800 pt-6 flex justify-between font-mono text-xs text-gray-500">
        <span>BTC: $42,302</span>
        <span>ETH: $2,450</span>
        <span>SOL: $108</span>
        <span>GAS: 24 GWEI</span>
      </div>
    </div>
  </div>
);

// --- 7. The E-commerce (Fashion) ---
const LandingFashion = () => (
  <div className="relative h-[600px] w-full rounded-3xl overflow-hidden">
    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Fashion" />
    <div className="absolute inset-0 bg-black/30"></div>
    
    <div className="relative z-10 h-full flex flex-col justify-between p-12 text-white">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold tracking-widest uppercase">VOGUE</div>
        <div className="space-x-8 text-sm font-medium hidden md:block">
          <a href="#" className="hover:underline">Women</a>
          <a href="#" className="hover:underline">Men</a>
          <a href="#" className="hover:underline">Accessories</a>
        </div>
        <div className="flex gap-4">
          <span>Search</span>
          <span>Cart (0)</span>
        </div>
      </nav>

      <div className="max-w-xl">
        <span className="text-sm font-bold uppercase tracking-widest mb-4 block">Summer Collection 2024</span>
        <h1 className="text-6xl font-serif mb-6 leading-none">
          Elegance is <br/> elimination.
        </h1>
        <button className="bg-white text-black px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-gray-200 transition-colors">
          Shop the look
        </button>
      </div>
    </div>
  </div>
);

// --- 8. The Glassmorphism (Creative) ---
const LandingGlass = () => (
  <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-3xl overflow-hidden relative min-h-[600px] flex items-center">
    {/* Background Shapes */}
    <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob"></div>
    <div className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-300 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-12 rounded-[3rem] shadow-2xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Imagine. Create. Inspire.
        </h1>
        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
          The ultimate toolkit for creative professionals. Unleash your imagination with tools designed for the modern artist.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-white/90 text-purple-600 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
            Start Creating
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/20 transition-colors">
            Watch Showreel
          </button>
        </div>
      </div>
    </div>
  </div>
);

// --- 9. The Brutalist (Bold/Retro) ---
const LandingBrutalist = () => (
  <div className="bg-yellow-400 p-8 rounded-3xl border-4 border-black relative">
    <Navbar />
    <div className="grid md:grid-cols-2 gap-0 border-4 border-black mt-12 bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
      <div className="p-12 flex flex-col justify-center border-b-4 md:border-b-0 md:border-r-4 border-black">
        <h1 className="text-6xl font-black uppercase leading-none mb-6">
          Make It <br/> <span className="bg-black text-white px-2">LOUD.</span>
        </h1>
        <p className="font-bold text-lg mb-8">
          We help brands scream their message. No subtle marketing. Just raw power.
        </p>
        <button className="bg-pink-500 border-4 border-black p-4 font-black uppercase text-xl hover:bg-pink-400 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
          Work With Us
        </button>
      </div>
      <div className="bg-black p-12 flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#000,#000_10px,#222_10px,#222_20px)] opacity-20"></div>
        <div className="text-white font-black text-9xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
          *
        </div>
      </div>
    </div>
  </div>
);

// --- 10. The Neumorphic (Soft UI) ---
const LandingNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-8 rounded-3xl min-h-[600px] flex flex-col justify-center">
    <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
      <div>
        <div className="w-16 h-16 rounded-full bg-[#e0e5ec] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] flex items-center justify-center text-2xl mb-8">
          🚀
        </div>
        <h1 className="text-5xl font-bold text-slate-700 mb-6">Soft UI Design System</h1>
        <p className="text-slate-500 text-lg mb-10">
          Experience the tactile feel of neumorphism. Soft shadows, rounded corners, and a calming color palette.
        </p>
        <div className="flex gap-6">
          <button className="px-8 py-4 rounded-xl bg-[#e0e5ec] text-blue-600 font-bold shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] active:scale-95 transition-all">
            Get Started
          </button>
          <button className="px-8 py-4 rounded-xl bg-[#e0e5ec] text-slate-600 font-bold shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] hover:shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] transition-all">
            Learn More
          </button>
        </div>
      </div>
      
      <div className="relative">
        <div className="aspect-square rounded-[3rem] bg-[#e0e5ec] shadow-[20px_20px_60px_#b8b9be,-20px_-20px_60px_#ffffff] flex items-center justify-center p-12">
           <div className="w-full h-full rounded-2xl bg-[#e0e5ec] shadow-[inset_10px_10px_20px_#b8b9be,inset_-10px_-10px_20px_#ffffff] flex items-center justify-center">
             <span className="text-slate-400 font-bold text-xl">Interactive Preview</span>
           </div>
        </div>
      </div>
    </div>
  </div>
);


// --- Main Gallery Wrapper ---
const LandingPageGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-100 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Landing Page Heroes</h1>
        <p className="text-slate-500">High-impact "Above the Fold" sections for various industries.</p>
      </div>
      
      <div className="space-y-32">
        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">01. SaaS Standard</span>
          <LandingSaaS />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">02. Modern Gradient</span>
          <LandingGradient />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">03. Minimalist Architecture</span>
          <LandingMinimal />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">04. Developer Tools (Dark)</span>
          <LandingDev />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">05. Mobile App Showcase</span>
          <LandingMobile />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">06. Cyberpunk Web3</span>
          <LandingCyber />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">07. Fashion E-commerce</span>
          <LandingFashion />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">08. Glassmorphism Creative</span>
          <LandingGlass />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">09. Brutalist Agency</span>
          <LandingBrutalist />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">10. Neumorphic Soft UI</span>
          <LandingNeumorphic />
        </section>
      </div>
    </div>
  );
};

export default LandingPageGallery;