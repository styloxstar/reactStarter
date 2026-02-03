import React from 'react';

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
        <div className="bg-white  box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">01. Standard Text</span>
          <div className="flex flex-col gap-4">
             <p className="text-sm text-gray-500">Sign in with email</p>
             <DividerText text="OR" />
             <p className="text-sm text-gray-500">Sign in with Google</p>
          </div>
        </div>

        {/* 2. Gradient */}
        <div className="bg-white  box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">02. Gradient Fade</span>
          <p className="mb-4 text-gray-600">Section One</p>
          <DividerGradient />
          <p className="mt-4 text-gray-600">Section Two</p>
        </div>

        {/* 3. Icon */}
        <div className="bg-white  box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">03. Brand Icon</span>
          <DividerIcon />
        </div>

        {/* 4. Glass */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600  box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-white/50 uppercase tracking-widest block mb-4">04. Glassmorphism</span>
          <p className="text-white mb-2">Content Above</p>
          <DividerGlass />
          <p className="text-white mt-2">Content Below</p>
        </div>

        {/* 5. Cyberpunk */}
        <div className="bg-gray-900  box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-4">05. Cyberpunk</span>
          <DividerCyber />
        </div>

        {/* 6. Neumorphic */}
        <div className="bg-[#e0e5ec]  box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-4">06. Neumorphic</span>
          <p className="text-gray-500 mb-4 text-center">Soft UI Separation</p>
          <DividerNeumorphic />
          <p className="text-gray-500 mt-4 text-center">Etched Look</p>
        </div>

        {/* 7. Dashed */}
        <div className="bg-white  box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">07. Coupon Cut</span>
          <DividerDashed />
        </div>

        {/* 8. Brutalist */}
        <div className="bg-gray-100  box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">08. Brutalist</span>
          <p className="text-black mb-4 font-bold">Introduction</p>
          <DividerBrutalist text="CHAPTER 1" />
          <p className="text-black mt-4 font-bold">The Beginning</p>
        </div>

        {/* 9. Zig Zag */}
        <div className="bg-white box-shadow p-4 rounded-lg overflow-hidden">
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
        <div className="flex flex-col items-center box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">10. Vertical Layout</span>
          <DividerVertical />
        </div>

      </div>
    </div>
  );
};

export default Dividers;