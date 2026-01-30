import React from 'react';

// --- Shared Components ---
export const SocialIcons = ({ color = "text-gray-400 hover:text-white" }) => (
  <div className="flex space-x-4">
    {['Twitter', 'GitHub', 'Discord', 'LinkedIn'].map((item) => (
      <a key={item} href="#" className={`${color} transition-colors duration-300`}>
        <span className="sr-only">{item}</span>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      </a>
    ))}
  </div>
);

// --- 1. The Enterprise Standard (Multi-Column) ---
export const FooterStandard = () => (
  <footer className="bg-gray-900 text-white pt-12 pb-8">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
      <div className="md:col-span-1">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">Acme Corp</h2>
        <p className="text-gray-400 text-sm">Making the world a better place through constructing elegant hierarchies.</p>
        <div className="mt-6">
          <SocialIcons />
        </div>
      </div>
      
      {['Solutions', 'Support', 'Company'].map((section) => (
        <div key={section}>
          <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">{section}</h3>
          <ul className="space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <li key={i}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {section} Link {i}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
      © 2024 Acme Corp, Inc. All rights reserved.
    </div>
  </footer>
);

// --- 2. The Minimalist (Centered) ---
export const FooterMinimal = () => (
  <footer className="bg-white border-t border-gray-200 py-12">
    <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
      <div className="text-2xl font-bold text-gray-900 mb-6">minimal.</div>
      <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
        {['About', 'Blog', 'Jobs', 'Press', 'Accessibility', 'Partners'].map((item) => (
          <a key={item} href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            {item}
          </a>
        ))}
      </nav>
      <SocialIcons color="text-gray-400 hover:text-gray-900" />
      <p className="mt-8 text-center text-sm text-gray-400">
        © 2024 Minimal UI. Crafted with care.
      </p>
    </div>
  </footer>
);

// --- 3. The Newsletter Focus ---
export const FooterNewsletter = () => (
  <footer className="bg-indigo-700 text-white">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Stay in the loop</h2>
          <p className="text-indigo-100 mb-8 max-w-md">
            Join 20,000+ others and get our latest articles and weekly digest delivered straight to your inbox.
          </p>
          <div className="flex gap-2 max-w-md">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-indigo-900 hover:bg-indigo-800 font-bold rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8 text-sm">
           <div>
             <h4 className="font-bold mb-4 opacity-80">Product</h4>
             <ul className="space-y-2">
               <li><a href="#" className="hover:text-indigo-200">Features</a></li>
               <li><a href="#" className="hover:text-indigo-200">Security</a></li>
               <li><a href="#" className="hover:text-indigo-200">Team</a></li>
             </ul>
           </div>
           <div>
             <h4 className="font-bold mb-4 opacity-80">Resources</h4>
             <ul className="space-y-2">
               <li><a href="#" className="hover:text-indigo-200">Documentation</a></li>
               <li><a href="#" className="hover:text-indigo-200">Guides</a></li>
               <li><a href="#" className="hover:text-indigo-200">API Status</a></li>
             </ul>
           </div>
        </div>
      </div>
    </div>
  </footer>
);

// --- 4. The Glassmorphism Footer ---
// *Needs context, simulated with wrapper*
export const FooterGlass = () => (
  <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8">
    <footer className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold tracking-widest">GLASS</div>
        <nav className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-white/80 transition-colors">Privacy</a>
          <a href="#" className="hover:text-white/80 transition-colors">Terms</a>
          <a href="#" className="hover:text-white/80 transition-colors">Contact</a>
        </nav>
        <div className="flex gap-4">
           {/* Simple Circles for social */}
           {[1,2,3].map(i => (
             <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-all">
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
             </a>
           ))}
        </div>
      </div>
      <div className="w-full h-px bg-white/20 my-8"></div>
      <p className="text-center text-xs text-white/60">
        Designed with ❤️ in the cloud.
      </p>
    </footer>
  </div>
);

// --- 5. The Cyberpunk (Neon) ---
export const FooterCyberpunk = () => (
  <footer className="bg-black border-t-2 border-cyan-500 pt-12 pb-6 relative overflow-hidden">
    {/* Grid Background Effect */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
        <div>
          <h2 className="text-3xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-4">
            CYBER_SYSTEMS
          </h2>
          <p className="text-gray-400 font-mono text-sm max-w-xs">
            DECENTRALIZED SOLUTIONS FOR THE DIGITAL AGE.
            <br />
            STATUS: <span className="text-green-500">ONLINE</span>
          </p>
        </div>
        
        <div className="flex gap-12 font-mono text-sm">
          <div>
            <h4 className="text-pink-500 mb-4 border-b border-pink-500/50 inline-block pb-1">PROTOCOL</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-cyan-400 hover:shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-all">>> Manifest</a></li>
              <li><a href="#" className="hover:text-cyan-400 hover:shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-all">>> Nodes</a></li>
              <li><a href="#" className="hover:text-cyan-400 hover:shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-all">>> Ledger</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-cyan-500 mb-4 border-b border-cyan-500/50 inline-block pb-1">ACCESS</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-pink-400 hover:shadow-[0_0_8px_rgba(236,72,153,0.6)] transition-all">>> Login</a></li>
              <li><a href="#" className="hover:text-pink-400 hover:shadow-[0_0_8px_rgba(236,72,153,0.6)] transition-all">>> Register</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-6 flex justify-between items-center font-mono text-xs text-gray-600">
        <p>COPYRIGHT_2077. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-4">
          <span>SYS_VER_2.0</span>
          <span>LATENCY_4MS</span>
        </div>
      </div>
    </div>
  </footer>
);

// --- 6. The Big Typography ---
export const FooterBigType = () => (
  <footer className="bg-white text-black py-20 px-6 border-t border-gray-100">
    <div className="max-w-7xl mx-auto">
      <a href="#" className="group block mb-20">
        <h2 className="text-[10vw] leading-[0.8] font-bold tracking-tighter group-hover:text-gray-500 transition-colors duration-500">
          LET'S TALK
          <span className="block text-right text-gray-300 group-hover:text-black transition-colors duration-500">→</span>
        </h2>
      </a>
      
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Location</span>
          <p className="font-medium">123 Design St,<br />New York, NY 10001</p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Socials</span>
          <div className="flex gap-4 font-medium underline">
             <a href="#">Instagram</a>
             <a href="#">Twitter</a>
             <a href="#">LinkedIn</a>
          </div>
        </div>
        <div className="text-sm text-gray-400 md:ml-auto">
          © 2024 Design Studio.
        </div>
      </div>
    </div>
  </footer>
);

// --- 7. The Brutalist (Retro) ---
export const FooterBrutalist = () => (
  <footer className="bg-yellow-400 border-t-4 border-black">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y-4 md:divide-y-0 md:divide-x-4 divide-black">
      <div className="p-8">
        <h2 className="text-4xl font-black uppercase mb-4">Brutal.</h2>
        <p className="font-bold">Raw styling for bold brands.</p>
      </div>
      <div className="p-8 flex flex-col justify-between">
        <div className="font-bold mb-4 uppercase">Navigation</div>
        <nav className="flex flex-col gap-2 font-bold underline decoration-2">
          <a href="#" className="hover:bg-black hover:text-white transition-colors w-max px-1">Shop</a>
          <a href="#" className="hover:bg-black hover:text-white transition-colors w-max px-1">About</a>
          <a href="#" className="hover:bg-black hover:text-white transition-colors w-max px-1">Contact</a>
        </nav>
      </div>
      <div className="p-8 flex flex-col justify-between">
         <div className="font-bold mb-4 uppercase">Social</div>
         <nav className="flex flex-col gap-2 font-bold">
           <a href="#" className="flex items-center gap-2 hover:translate-x-1 transition-transform">
             <div className="w-4 h-4 bg-black"></div> Instagram
           </a>
           <a href="#" className="flex items-center gap-2 hover:translate-x-1 transition-transform">
             <div className="w-4 h-4 bg-black"></div> Twitter
           </a>
         </nav>
      </div>
      <div className="p-8 bg-black text-white">
        <h3 className="font-black uppercase mb-4 text-yellow-400">Newsletter</h3>
        <input type="email" placeholder="EMAIL" className="w-full bg-white text-black p-3 font-bold border-2 border-transparent focus:border-yellow-400 focus:outline-none mb-4" />
        <button className="w-full bg-yellow-400 text-black font-black p-3 hover:bg-white transition-colors border-2 border-transparent">
           SUBMIT
        </button>
      </div>
    </div>
    <div className="bg-white border-t-4 border-black p-4 text-center font-bold text-xs uppercase">
      © 2024 Brutalist Inc. No Rights Reserved.
    </div>
  </footer>
);

// --- 8. The Neumorphic ---
export const FooterNeumorphic = () => (
  <footer className="bg-[#e0e5ec] text-gray-600 py-12 px-4">
    <div className="max-w-5xl mx-auto flex flex-col items-center">
      <div className="w-20 h-20 rounded-full bg-[#e0e5ec] shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)] flex items-center justify-center mb-8 text-blue-500">
         <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      </div>
      
      <nav className="flex flex-wrap justify-center gap-6 mb-8">
        {['Terms', 'Privacy', 'Security', 'Support'].map((item) => (
          <a key={item} href="#" className="px-6 py-2 rounded-xl bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all font-semibold text-sm">
            {item}
          </a>
        ))}
      </nav>
      
      <div className="flex gap-6 mb-8">
        {[1,2,3].map(i => (
          <button key={i} className="w-12 h-12 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:text-blue-500 transition-colors flex items-center justify-center">
            <span className="sr-only">Social</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-6h2v1.1c.36-.59 1.14-.85 1.76-.64.78.26 1.24 1.13 1.24 1.96v3.58z"/></svg>
          </button>
        ))}
      </div>
      
      <p className="text-sm opacity-60">© 2024 Soft UI. Built with shadows.</p>
    </div>
  </footer>
);

// --- 9. The App Promo (E-commerce Style) ---
export const FooterApp = () => (
  <footer className="bg-gray-50 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
         <div>
           <h3 className="font-bold text-gray-900 mb-4">About Us</h3>
           <ul className="space-y-2 text-sm text-gray-600">
             <li><a href="#" className="hover:underline">Our Story</a></li>
             <li><a href="#" className="hover:underline">Careers</a></li>
             <li><a href="#" className="hover:underline">Press</a></li>
           </ul>
         </div>
         <div>
           <h3 className="font-bold text-gray-900 mb-4">Customer Care</h3>
           <ul className="space-y-2 text-sm text-gray-600">
             <li><a href="#" className="hover:underline">Shipping Info</a></li>
             <li><a href="#" className="hover:underline">Returns</a></li>
             <li><a href="#" className="hover:underline">FAQ</a></li>
           </ul>
         </div>
         <div className="lg:col-span-2">
            <h3 className="font-bold text-gray-900 mb-4">Download Our App</h3>
            <p className="text-gray-600 text-sm mb-6">Shop on the go and get exclusive app-only offers.</p>
            <div className="flex gap-4">
              <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 9.49l1.66 2.88-5.13 8.89H8.64l-2.48-4.3h8.37l3.07-5.47zM8.34 5.31H19.6l-1.37 2.38H11.08L8.34 5.31zM6.16 11.23L3.48 6.58 2.15 8.89l3.96 6.86 1.4-2.42-1.35-2.1z"/></svg>
                 <div className="text-left">
                   <div className="text-[10px] leading-tight">GET IT ON</div>
                   <div className="text-sm font-bold leading-tight">Google Play</div>
                 </div>
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.3-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.07-3.11-1.06.05-2.36.71-3.11 1.58-.69.8-1.29 2.1-1.02 3.19 1.17.09 2.34-.78 3.06-1.66z"/></svg>
                 <div className="text-left">
                   <div className="text-[10px] leading-tight">Download on the</div>
                   <div className="text-sm font-bold leading-tight">App Store</div>
                 </div>
              </button>
            </div>
         </div>
      </div>
      <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
         <p>© 2024 ShopApp. All Rights Reserved.</p>
         <div className="flex gap-4">
           <span>Visa</span>
           <span>Mastercard</span>
           <span>PayPal</span>
         </div>
      </div>
    </div>
  </footer>
);

// --- 10. The Curved (Wave) ---
export const FooterCurved = () => (
  <div className="relative mt-20">
    <svg className="absolute top-0 w-full h-16 -mt-16 text-gray-900" preserveAspectRatio="none" viewBox="0 0 1440 54">
      <path fill="currentColor" d="M0 22L120 16.7C240 11 480 1.00001 720 0.333333C960 0 1200 8 1320 12L1440 16V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"></path>
    </svg>
    <footer className="bg-gray-900 text-white pb-12 pt-4 px-6">
       <div className="max-w-7xl mx-auto flex flex-col items-center">
         <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-xl mb-6 shadow-lg shadow-blue-500/50">
           W
         </div>
         <h2 className="text-2xl font-bold mb-6">Wavy Footer</h2>
         <div className="flex gap-6 mb-8 text-sm font-medium text-gray-300">
           <a href="#" className="hover:text-white transition-colors">Home</a>
           <a href="#" className="hover:text-white transition-colors">Services</a>
           <a href="#" className="hover:text-white transition-colors">Pricing</a>
           <a href="#" className="hover:text-white transition-colors">Contact</a>
         </div>
         <p className="text-gray-500 text-xs">© 2024 Wave Designs. Flow with the current.</p>
       </div>
    </footer>
  </div>
);


// --- Main Gallery ---
const Footers = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-50 font-sans">
      <div className="p-12 text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Modern Footers</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">Responsive footer components for every design language.</p>
      </div>

      <div className="">
        
        <section>
          <div className="text-center mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">01. Enterprise Standard</div>
          <FooterStandard />
        </section>

        <section>
          <div className="text-center mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">02. Minimalist Center</div>
          <FooterMinimal />
        </section>

        <section>
          <div className="text-center mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">03. Newsletter Focus</div>
          <FooterNewsletter />
        </section>

        <section>
          <div className="text-center mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">04. Glassmorphism</div>
          <FooterGlass />
        </section>

        <section>
          <div className="text-center mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">05. Cyberpunk</div>
          <FooterCyberpunk />
        </section>

        <section>
          <div className="text-center mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">06. Big Typography</div>
          <FooterBigType />
        </section>

        <section>
          <div className="text-center mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">07. Brutalist</div>
          <FooterBrutalist />
        </section>

        <section>
          <div className="text-center mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">08. Neumorphic</div>
          <FooterNeumorphic />
        </section>

        <section>
          <div className="text-center mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">09. App / E-commerce</div>
          <FooterApp />
        </section>

        <section>
          <div className="text-center mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">10. Curved Wave</div>
          <FooterCurved />
        </section>

      </div>
    </div>
  );
};

export default Footers;