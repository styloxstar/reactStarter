import React from 'react';
import CopyButton from '../common/CopyButton';

// --- 1. The Standard Text (SaaS Style) ---
const DividerText = ({ text = "OR" }) => (
  <div className="relative flex items-center w-full">
    <div className="flex-grow border-t border-gray-200"></div>
    <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium">{text}</span>
    <div className="flex-grow border-t border-gray-200"></div>
  </div>
);

// --- 2. The Gradient Fade (Subtle) ---
const DividerGradient = () => (
  <div className="w-full">
    <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50"></div>
  </div>
);

// --- 3. The Icon Split (Brand Element) ---
const DividerIcon = () => (
  <div className="relative flex py-5 items-center w-full">
    <div className="flex-grow border-t border-indigo-200"></div>
    <span className="flex-shrink-0 mx-4 text-indigo-500">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    </span>
    <div className="flex-grow border-t border-indigo-200"></div>
  </div>
);

// --- 4. The Glassmorphism (Transparent) ---
// *Best on dark/colorful backgrounds*
const DividerGlass = () => (
  <div className="w-full py-4">
    <div className="h-px bg-white/20 w-full shadow-[0_1px_0_0_rgba(255,255,255,0.1)]"></div>
  </div>
);

// --- 5. The Cyberpunk (Neon Tech) ---
const DividerCyber = () => (
  <div className="relative w-full flex items-center">
    <div className="w-full h-px bg-cyan-900"></div>
    <div className="absolute left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
    <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-black border border-cyan-400 rotate-45"></div>
  </div>
);

// --- 6. The Neumorphic (Etched) ---
const DividerNeumorphic = () => (
  <div className="w-full h-2 border-b border-white border-t border-gray-300 opacity-60 rounded-full"></div>
);

// --- 7. The Dashed Cut (Coupon) ---
const DividerDashed = () => (
  <div className="flex items-center w-full">
    <div className="flex-grow border-t-2 border-dashed border-gray-300"></div>
    <span className="mx-4 text-gray-400">
        <svg className="w-5 h-5 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" /></svg>
    </span>
    <div className="flex-grow border-t-2 border-dashed border-gray-300"></div>
  </div>
);

// --- 8. The Brutalist (Bold & Offset) ---
const DividerBrutalist = ({ text = "SECTION 01" }) => (
  <div className="relative w-full py-4">
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t-4 border-black"></div>
    </div>
    <div className="relative flex justify-start">
      <span className="bg-yellow-400 border-2 border-black px-3 py-1 text-sm font-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {text}
      </span>
    </div>
  </div>
);

// --- 9. The Zig-Zag (SVG Pattern) ---
const DividerZigZag = () => (
  <div className="w-full overflow-hidden leading-[0]">
    <svg
      className="relative block w-[calc(100%+1.3px)] h-[15px]"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0V46.29c47,0,123,28,198,28,103,0,174-28,290-28,109,0,183,28,282,28,105,0,172-28,230-28V0H0Z"
        className="fill-indigo-600"
      ></path>
    </svg>
  </div>
);

// --- 10. The Vertical Divider (Contextual) ---
const DividerVertical = () => (
  <div className="flex items-center space-x-4 h-12 bg-white px-4 rounded-lg border border-gray-100 shadow-sm">
    <span className="text-gray-500 font-medium cursor-pointer hover:text-black">Edit</span>
    {/* The Divider Component */}
    <div className="h-6 w-px bg-gray-300"></div>
    <span className="text-gray-500 font-medium cursor-pointer hover:text-black">View</span>
    {/* The Divider Component */}
    <div className="h-6 w-px bg-gray-300"></div>
    <span className="text-red-500 font-medium cursor-pointer hover:text-red-700">Delete</span>
  </div>
);


// --- Main Gallery Layout ---
const Dividers = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-50 p-8 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Modern Dividers</h1>
        <p className="text-slate-500">Structural elements to separate content.</p>
      </div>
      
      <div className="max-w-3xl mx-auto space-y-16">
        
        {/* 1. Text */}
        <div className="bg-white box-shadow p-4 rounded-lg relative group/div">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/div:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const DividerText = ({ text = "OR" }) => (\n  <div className="relative flex items-center w-full">\n    <div className="flex-grow border-t border-gray-200" />\n    <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium">{text}</span>\n    <div className="flex-grow border-t border-gray-200" />\n  </div>\n);`}
              htmlCode={`<div class="divider-text">
  <hr><span>OR</span><hr>
</div>`}
              cssCode={`.divider-text { display: flex; align-items: center; width: 100%; }
.divider-text hr { flex: 1; border: none; border-top: 1px solid #e5e7eb; }
.divider-text span { margin: 0 1rem; color: #9ca3af; font-size: 0.875rem; font-weight: 500; white-space: nowrap; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">01. Standard Text</span>
          <div className="flex flex-col gap-4">
             <p className="text-sm text-gray-500">Sign in with email</p>
             <DividerText text="OR" />
             <p className="text-sm text-gray-500">Sign in with Google</p>
          </div>
        </div>

        {/* 2. Gradient */}
        <div className="bg-white box-shadow p-4 rounded-lg relative group/div">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/div:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const DividerGradient = () => (\n  <div className="w-full">\n    <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50" />\n  </div>\n);`}
              htmlCode={`<div class="divider-gradient"></div>`}
              cssCode={`.divider-gradient { width: 100%; height: 1px; background: linear-gradient(90deg, transparent, #9ca3af, transparent); opacity: 0.5; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">02. Gradient Fade</span>
          <p className="mb-4 text-gray-600">Section One</p>
          <DividerGradient />
          <p className="mt-4 text-gray-600">Section Two</p>
        </div>

        {/* 3. Icon */}
        <div className="bg-white box-shadow p-4 rounded-lg relative group/div">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/div:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const DividerIcon = () => (\n  <div className="relative flex py-5 items-center w-full">\n    <div className="flex-grow border-t border-indigo-200" />\n    <span className="flex-shrink-0 mx-4 text-indigo-500">\n      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>\n    </span>\n    <div className="flex-grow border-t border-indigo-200" />\n  </div>\n);`}
              htmlCode={`<div class="divider-icon">
  <hr><span>✨</span><hr>
</div>`}
              cssCode={`.divider-icon { display: flex; align-items: center; width: 100%; padding: 1.25rem 0; }
.divider-icon hr { flex: 1; border: none; border-top: 1px solid #c7d2fe; }
.divider-icon span { margin: 0 1rem; color: #6366f1; font-size: 1.5rem; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">03. Brand Icon</span>
          <DividerIcon />
        </div>

        {/* 4. Glass */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 box-shadow p-4 rounded-lg relative group/div">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/div:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const DividerGlass = () => (\n  <div className="w-full py-4">\n    <div className="h-px bg-white/20 w-full shadow-[0_1px_0_0_rgba(255,255,255,0.1)]" />\n  </div>\n);`}
              htmlCode={`<div class="divider-glass"></div>`}
              cssCode={`.divider-glass { width: 100%; height: 1px; background: rgba(255,255,255,0.2); margin: 1rem 0; box-shadow: 0 1px 0 rgba(255,255,255,0.1); }`}
            />
          </div>
          <span className="text-xs font-bold text-white/50 uppercase tracking-widest block mb-4">04. Glassmorphism</span>
          <p className="text-white mb-2">Content Above</p>
          <DividerGlass />
          <p className="text-white mt-2">Content Below</p>
        </div>

        {/* 5. Cyberpunk */}
        <div className="bg-gray-900 box-shadow p-4 rounded-lg relative group/div">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/div:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const DividerCyber = () => (\n  <div className="relative w-full flex items-center">\n    <div className="w-full h-px bg-cyan-900" />\n    <div className="absolute left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />\n    <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-black border border-cyan-400 rotate-45" />\n  </div>\n);`}
              htmlCode={`<div class="divider-cyber">
  <div class="line"></div>
  <div class="glow"></div>
  <div class="diamond"></div>
</div>`}
              cssCode={`.divider-cyber { position: relative; width: 100%; display: flex; align-items: center; }
.divider-cyber .line { width: 100%; height: 1px; background: #164e63; }
.divider-cyber .glow { position: absolute; left: 50%; transform: translateX(-50%); width: 33%; height: 2px; background: #22d3ee; box-shadow: 0 0 10px rgba(34,211,238,0.8); }
.divider-cyber .diamond { position: absolute; left: 50%; transform: translateX(-50%) rotate(45deg); width: 0.5rem; height: 0.5rem; background: #000; border: 1px solid #22d3ee; }`}
            />
          </div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-4">05. Cyberpunk</span>
          <DividerCyber />
        </div>

        {/* 6. Neumorphic */}
        <div className="bg-[#e0e5ec] box-shadow p-4 rounded-lg relative group/div">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/div:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const DividerNeumorphic = () => (\n  <div className="w-full h-2 border-b border-white border-t border-gray-300 opacity-60 rounded-full" />\n);`}
              htmlCode={`<div class="divider-neu"></div>`}
              cssCode={`.divider-neu { width: 100%; height: 0.5rem; border-top: 1px solid #d1d5db; border-bottom: 1px solid #fff; opacity: 0.6; border-radius: 9999px; }`}
            />
          </div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-4">06. Neumorphic</span>
          <p className="text-gray-500 mb-4 text-center">Soft UI Separation</p>
          <DividerNeumorphic />
          <p className="text-gray-500 mt-4 text-center">Etched Look</p>
        </div>

        {/* 7. Dashed */}
        <div className="bg-white box-shadow p-4 rounded-lg relative group/div">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/div:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const DividerDashed = () => (\n  <div className="flex items-center w-full">\n    <div className="flex-grow border-t-2 border-dashed border-gray-300" />\n    <span className="mx-4 text-gray-400">✂️</span>\n    <div className="flex-grow border-t-2 border-dashed border-gray-300" />\n  </div>\n);`}
              htmlCode={`<div class="divider-dashed">
  <hr><span>✂️</span><hr>
</div>`}
              cssCode={`.divider-dashed { display: flex; align-items: center; width: 100%; }
.divider-dashed hr { flex: 1; border: none; border-top: 2px dashed #d1d5db; }
.divider-dashed span { margin: 0 1rem; color: #9ca3af; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">07. Coupon Cut</span>
          <DividerDashed />
        </div>

        {/* 8. Brutalist */}
        <div className="bg-gray-100 box-shadow p-4 rounded-lg relative group/div">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/div:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const DividerBrutalist = ({ text = "SECTION 01" }) => (\n  <div className="relative w-full py-4">\n    <div className="absolute inset-0 flex items-center"><div className="w-full border-t-4 border-black" /></div>\n    <div className="relative flex justify-start">\n      <span className="bg-yellow-400 border-2 border-black px-3 py-1 text-sm font-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">{text}</span>\n    </div>\n  </div>\n);`}
              htmlCode={`<div class="divider-brutal">
  <hr><span>CHAPTER 1</span>
</div>`}
              cssCode={`.divider-brutal { position: relative; width: 100%; padding: 1rem 0; }
.divider-brutal hr { position: absolute; top: 50%; width: 100%; border: none; border-top: 4px solid #000; }
.divider-brutal span { position: relative; display: inline-block; background: #facc15; border: 2px solid #000; padding: 0.25rem 0.75rem; font-size: 0.875rem; font-weight: 900; box-shadow: 4px 4px 0 #000; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">08. Brutalist</span>
          <p className="text-black mb-4 font-bold">Introduction</p>
          <DividerBrutalist text="CHAPTER 1" />
          <p className="text-black mt-4 font-bold">The Beginning</p>
        </div>

        {/* 9. Zig Zag */}
        <div className="bg-white box-shadow p-4 rounded-lg overflow-hidden relative group/div">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/div:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const DividerZigZag = () => (\n  <div className="w-full overflow-hidden leading-[0]">\n    <svg className="relative block w-[calc(100%+1.3px)] h-[15px]" viewBox="0 0 1200 120" preserveAspectRatio="none">\n      <path d="M0,0V46.29c47..." className="fill-indigo-600" />\n    </svg>\n  </div>\n);`}
              htmlCode={`<div class="divider-zigzag">
  <svg viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47,0,123,28,198,28..." /></svg>
</div>`}
              cssCode={`.divider-zigzag { width: 100%; overflow: hidden; line-height: 0; }
.divider-zigzag svg { position: relative; display: block; width: calc(100% + 1.3px); height: 15px; }
.divider-zigzag path { fill: #4f46e5; }`}
            />
          </div>
          <div className="p-8 pb-0">
             <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">09. SVG Shape</span>
             <p className="mb-4">Content block ending...</p>
          </div>
          <DividerZigZag />
          <div className="bg-indigo-600 p-8 text-white">
             <p>...Next content block starting.</p>
          </div>
        </div>

        {/* 10. Vertical */}
        <div className="flex flex-col items-center box-shadow p-4 rounded-lg relative group/div">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/div:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`const DividerVertical = () => (\n  <div className="flex items-center space-x-4 h-12 bg-white px-4 rounded-lg border border-gray-100 shadow-sm">\n    <span className="text-gray-500 font-medium cursor-pointer hover:text-black">Edit</span>\n    <div className="h-6 w-px bg-gray-300" />\n    <span className="text-gray-500 font-medium cursor-pointer hover:text-black">View</span>\n    <div className="h-6 w-px bg-gray-300" />\n    <span className="text-red-500 font-medium cursor-pointer hover:text-red-700">Delete</span>\n  </div>\n);`}
              htmlCode={`<div class="toolbar">
  <span>Edit</span>
  <div class="v-divider"></div>
  <span>View</span>
  <div class="v-divider"></div>
  <span class="danger">Delete</span>
</div>`}
              cssCode={`.toolbar { display: flex; align-items: center; gap: 1rem; height: 3rem; background: #fff; padding: 0 1rem; border-radius: 0.5rem; border: 1px solid #f3f4f6; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
.toolbar span { color: #6b7280; font-weight: 500; cursor: pointer; }
.toolbar span:hover { color: #000; }
.toolbar .danger { color: #ef4444; }
.toolbar .danger:hover { color: #b91c1c; }
.v-divider { height: 1.5rem; width: 1px; background: #d1d5db; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">10. Vertical Layout</span>
          <DividerVertical />
        </div>

      </div>
    </div>
  );
};

export default Dividers;