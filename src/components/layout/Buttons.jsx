import React from 'react';
import CopyButton from '../common/CopyButton';

export const OutlineButton = () => (
  <button className="px-6 py-3 bg-transparent border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out">
    Outline
  </button>
);

export const SoftPillButton = () => (
  <button className="px-8 py-3 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 font-bold rounded-full transition duration-300 ease-in-out transform hover:scale-105">
    Soft Pill
  </button>
);

export const GradientButton = () => (
  <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300">
    Gradient
  </button>
);

export const RetroButton = () => (
  <button className="px-6 py-3 bg-teal-500 border-2 border-black text-black font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200">
    Retro
  </button>
);

export const GlassBlueButton = () => (
  <button className="backdrop-blur-md bg-slate-500 border border-white/40 shadow-lg text-white font-semibold py-3 px-6 rounded-xl hover:bg-teal-500 transition-all duration-300 flex items-center gap-2 group">
    <span>Glass Blue</span>
    <svg
      className="w-5 h-5 drop-shadow-sm group-hover:scale-110 transition-transform"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 18c-4.556 0-8.25-3.694-8.25-8.25S7.444 3.75 12 3.75 20.25 7.444 20.25 12 16.556 20.25 12 20.25z" />
    </svg>
  </button>
);

export const GlassPurpleButton = () => (
  <button className="backdrop-blur-lg bg-purple-900/40 border border-white/20 shadow-xl text-white font-medium py-3 px-6 rounded-full hover:bg-purple-900/60 transition-all duration-300 flex items-center gap-2">
    <span>Glass Purple</span>
    <svg
      className="w-5 h-5 text-purple-200"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
      />
    </svg>
  </button>
);

export const ExploreButton = () => (
  <button className="backdrop-blur-md bg-black/50 border border-white/10 shadow-2xl text-gray-100 font-semibold py-3 px-8 rounded-lg hover:bg-black/70 hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
    <span>Explore</span>
    <svg
      className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834 1.666l-1.591 1.591M21.75 12h-2.25m-1.666 5.834l-1.591-1.591M12 21.75v-2.25m-5.834-1.666l1.591-1.591M2.25 12h2.25M4.584 5.834l1.591 1.591"
      />
    </svg>
  </button>
);

export const SoftUIButton = () => (
  <button className="bg-gray-200/90 backdrop-blur text-gray-600 font-bold py-3 px-8 rounded-xl shadow-[6px_6px_12px_rgba(0,0,0,0.2),-6px_-6px_12px_rgba(255,255,255,0.8)] hover:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.2),inset_-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 active:scale-95">
    Soft UI
  </button>
);

export const SunsetButton = () => (
  <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-orange-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
    <span>Sunset</span>
    <svg
      className="w-5 h-5 animate-spin-slow"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  </button>
);

export const OceanButton = () => (
  <button className="bg-gradient-to-b from-cyan-500 to-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] border-t border-cyan-300 transition-all duration-300 flex items-center gap-2">
    <span>Ocean</span>
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.75 3.033c.877-.07 1.761.16 2.502.66 2.375 1.6 2.924 4.802 1.258 7.155-.544.767-1.252 1.39-2.052 1.834a3.76 3.76 0 01-1.393.368c-.624.032-1.246-.08-1.83-.34-1.09-.485-1.92-1.4-2.28-2.518-.36-1.118-.217-2.336.398-3.337.615-1 1.545-1.748 2.628-2.146.541-.199 1.109-.323 1.685-.365.282-.02.564-.025.845-.011zM11.625 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-2.25 3.375a3.375 3.375 0 003.375-3.375h-6.75a3.375 3.375 0 003.375 3.375z" />
    </svg>
  </button>
);

export const StartButton = () => (
  <button
    className="bg-purple-300 border-4 border-purple-700 text-black text-sm py-2 px-4 shadow-[4px_4px_0_0_purple] hover:translate-y-1 hover:shadow-none hover:translate-x-1 transition-all duration-100 flex items-center gap-2 rounded-lg"
    style={{ fontFamily: "'Press Start 2P', cursive" }}
  >
    <span>START</span>
  </button>
);

export const BlobButton = () => (
  <button
    className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 px-8 shadow-xl hover:shadow-2xl transition-all duration-500 flex items-center gap-2"
    style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
  >
    <span>Blob</span>
    <svg
      className="w-5 h-5 animate-bounce"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
    </svg>
  </button>
);

const Buttons = () => {
  return (
    <div className="container box-shadow bg-slate-50 p-6 md:p-12 font-sans pb-40 overflow-y-auto">
      <h1 className="text-4xl font-bold text-center text-slate-800 mb-4">
        Modern Buttons
          </h1>
      <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">
        Responsive button components with multiple code export options.
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-16 max-w-7xl mx-auto items-start">
        {/* 01. Outline */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">01. Standard Outline</span>
            <CopyButton
              jsxCode={`export const OutlineButton = () => (
  <button className="px-6 py-3 bg-transparent border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out">
    Outline
  </button>
);`}
              htmlCode={`<button class="btn-outline">Outline</button>`}
              cssCode={`.btn-outline { padding: 0.75rem 1.5rem; background: transparent; border: 2px solid #4f46e5; color: #4f46e5; font-weight: 600; border-radius: 0.5rem; transition: all 0.3s; cursor: pointer; }\n.btn-outline:hover { background: #4f46e5; color: #fff; }`}
            />
          </div>
          <OutlineButton />
        </div>

        {/* 02. Soft Pill */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">02. Soft Pill</span>
            <CopyButton
              jsxCode={`export const SoftPillButton = () => (
  <button className="px-8 py-3 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 font-bold rounded-full transition duration-300 ease-in-out transform hover:scale-105">
    Soft Pill
  </button>
);`}
              htmlCode={`<button class="btn-soft-pill">Soft Pill</button>`}
              cssCode={`.btn-soft-pill { padding: 0.75rem 2rem; background: #d1fae5; color: #047857; font-weight: 700; border-radius: 9999px; border: none; transition: all 0.3s; cursor: pointer; }\n.btn-soft-pill:hover { background: #a7f3d0; transform: scale(1.05); }`}
            />
          </div>
          <SoftPillButton />
        </div>

        {/* 03. Gradient */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">03. Gradient</span>
            <CopyButton
              jsxCode={`export const GradientButton = () => (
  <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300">
    Gradient
  </button>
);`}
              htmlCode={`<button class="btn-gradient">Gradient</button>`}
              cssCode={`.btn-gradient { padding: 0.75rem 1.5rem; background: linear-gradient(to right, #a855f7, #ec4899); color: #fff; font-weight: 700; border-radius: 0.5rem; border: none; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); transition: all 0.3s; cursor: pointer; }\n.btn-gradient:hover { box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); transform: translateY(-4px); }`}
            />
          </div>
          <GradientButton />
        </div>

        {/* 04. Retro */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">04. Retro Brutalist</span>
            <CopyButton
              jsxCode={`export const RetroButton = () => (
  <button className="px-6 py-3 bg-teal-500 border-2 border-black text-black font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200">
    Retro
  </button>
);`}
              htmlCode={`<button class="btn-retro">Retro</button>`}
              cssCode={`.btn-retro { padding: 0.75rem 1.5rem; background: #14b8a6; border: 2px solid #000; color: #000; font-weight: 900; text-transform: uppercase; box-shadow: 4px 4px 0 0 #000; transition: all 0.2s; cursor: pointer; }\n.btn-retro:hover { box-shadow: none; transform: translate(3px, 3px); }`}
            />
          </div>
          <RetroButton />
        </div>

        {/* 05. Glass Blue */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">05. Glass Blue</span>
            <CopyButton
              jsxCode={`export const GlassBlueButton = () => (\n  <button className="backdrop-blur-md bg-slate-500 border border-white/40 shadow-lg text-white font-semibold py-3 px-6 rounded-xl hover:bg-teal-500 transition-all duration-300 flex items-center gap-2 group">\n    <span>Glass Blue</span>\n    <svg className="w-5 h-5 drop-shadow-sm group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">\n      <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 18c-4.556 0-8.25-3.694-8.25-8.25S7.444 3.75 12 3.75 20.25 7.444 20.25 12 16.556 20.25 12 20.25z" />\n    </svg>\n  </button>\n);`}
              htmlCode={`<button class="btn-glass-blue">Glass Blue</button>`}
              cssCode={`.btn-glass-blue { backdrop-filter: blur(12px); background: rgba(100, 116, 139, 0.5); border: 1px solid rgba(255,255,255,0.4); color: #fff; padding: 0.75rem 1.5rem; border-radius: 0.75rem; transition: all 0.3s; cursor: pointer; }\n.btn-glass-blue:hover { background: #14b8a6; }`}
            />
          </div>
          <GlassBlueButton />
        </div>

        {/* 06. Glass Purple */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">06. Glass Purple</span>
            <CopyButton
              jsxCode={`export const GlassPurpleButton = () => (\n  <button className="backdrop-blur-lg bg-purple-900/40 border border-white/20 shadow-xl text-white font-medium py-3 px-6 rounded-full hover:bg-purple-900/60 transition-all duration-300 flex items-center gap-2">\n    <span>Glass Purple</span>\n    <svg className="w-5 h-5 text-purple-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" /></svg>\n  </button>\n);`}
              htmlCode={`<button class="btn-glass-purple">Glass Purple</button>`}
              cssCode={`.btn-glass-purple { backdrop-filter: blur(16px); background: rgba(88, 28, 135, 0.4); border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 0.75rem 1.5rem; border-radius: 9999px; transition: all 0.3s; cursor: pointer; }\n.btn-glass-purple:hover { background: rgba(88, 28, 135, 0.6); }`}
            />
          </div>
          <GlassPurpleButton />
        </div>

        {/* 07. Explore */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">07. Explore Dark</span>
            <CopyButton
              jsxCode={`export const ExploreButton = () => (\n  <button className="backdrop-blur-md bg-black/50 border border-white/10 shadow-2xl text-gray-100 font-semibold py-3 px-8 rounded-lg hover:bg-black/70 hover:scale-105 transition-all duration-300 flex items-center gap-2 group">\n    <span>Explore</span>\n    <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834 1.666l-1.591 1.591M21.75 12h-2.25m-1.666 5.834l-1.591-1.591M12 21.75v-2.25m-5.834-1.666l1.591-1.591M2.25 12h2.25M4.584 5.834l1.591 1.591" /></svg>\n  </button>\n);`}
              htmlCode={`<button class="btn-explore">Explore</button>`}
              cssCode={`.btn-explore { backdrop-filter: blur(12px); background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); color: #f3f4f6; padding: 0.75rem 2rem; border-radius: 0.5rem; transition: all 0.3s; cursor: pointer; }\n.btn-explore:hover { background: rgba(0,0,0,0.7); transform: scale(1.05); }`}
            />
          </div>
          <ExploreButton />
        </div>

        {/* 08. Soft UI */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">08. Soft UI Neumorphism</span>
            <CopyButton
              jsxCode={`export const SoftUIButton = () => (\n  <button className="bg-gray-200/90 backdrop-blur text-gray-600 font-bold py-3 px-8 rounded-xl shadow-[6px_6px_12px_rgba(0,0,0,0.2),-6px_-6px_12px_rgba(255,255,255,0.8)] hover:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.2),inset_-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 active:scale-95">\n    Soft UI\n  </button>\n);`}
              htmlCode={`<button class="btn-soft-ui">Soft UI</button>`}
              cssCode={`.btn-soft-ui { background: rgba(229, 231, 235, 0.9); color: #4b5563; font-weight: 700; padding: 0.75rem 2rem; border-radius: 0.75rem; border: none; box-shadow: 6px 6px 12px rgba(0,0,0,0.2), -6px -6px 12px rgba(255,255,255,0.8); transition: all 0.3s; cursor: pointer; }\n.btn-soft-ui:hover { box-shadow: inset 6px 6px 12px rgba(0,0,0,0.2), inset -6px -6px 12px rgba(255,255,255,0.8); }`}
            />
          </div>
          <SoftUIButton />
        </div>

        {/* 09. Sunset */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">09. Sunset Gradient</span>
            <CopyButton
              jsxCode={`export const SunsetButton = () => (\n  <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-orange-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">\n    <span>Sunset</span>\n  </button>\n);`}
              htmlCode={`<button class="btn-sunset">Sunset</button>`}
              cssCode={`.btn-sunset { background: linear-gradient(to right, #fb923c, #ec4899); color: #fff; font-weight: 700; padding: 0.75rem 2rem; border-radius: 0.5rem; border: none; transition: all 0.3s; cursor: pointer; }\n.btn-sunset:hover { box-shadow: 0 10px 15px rgba(249, 115, 22, 0.5); transform: translateY(-4px); }`}
            />
          </div>
          <SunsetButton />
        </div>

        {/* 10. Ocean */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">10. Ocean Depth</span>
            <CopyButton
              jsxCode={`export const OceanButton = () => (\n  <button className="bg-gradient-to-b from-cyan-500 to-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] border-t border-cyan-300 transition-all duration-300 flex items-center gap-2">\n    <span>Ocean</span>\n  </button>\n);`}
              htmlCode={`<button class="btn-ocean">Ocean</button>`}
              cssCode={`.btn-ocean { background: linear-gradient(to bottom, #06b6d4, #2563eb); color: #fff; font-weight: 700; padding: 0.75rem 2rem; border-radius: 0.5rem; border: none; border-top: 1px solid #67e8f9; box-shadow: 0 0 20px rgba(6,182,212,0.5); transition: all 0.3s; cursor: pointer; }\n.btn-ocean:hover { box-shadow: 0 0 30px rgba(6,182,212,0.8); }`}
            />
          </div>
          <OceanButton />
        </div>

        {/* 11. Start */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">11. 8-Bit Start</span>
            <CopyButton
              jsxCode={`export const StartButton = () => (\n  <button className="bg-purple-300 border-4 border-purple-700 text-black text-sm py-2 px-4 shadow-[4px_4px_0_0_purple] hover:translate-y-1 hover:shadow-none hover:translate-x-1 transition-all duration-100 flex items-center gap-2 rounded-lg" style={{ fontFamily: "'Press Start 2P', cursive" }}>\n    <span>START</span>\n  </button>\n);`}
              htmlCode={`<button class="btn-start">START</button>`}
              cssCode={`.btn-start { background: #d8b4fe; border: 4px solid #7e22ce; color: #000; padding: 0.5rem 1rem; border-radius: 0.5rem; font-family: 'Press Start 2P', cursive; box-shadow: 4px 4px 0 0 purple; transition: all 0.1s; cursor: pointer; }\n.btn-start:hover { transform: translate(4px, 4px); box-shadow: none; }`}
            />
          </div>
          <StartButton />
        </div>

        {/* 12. Blob */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">12. Fluid Blob</span>
            <CopyButton
              jsxCode={`export const BlobButton = () => (\n  <button className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 px-8 shadow-xl hover:shadow-2xl transition-all duration-500 flex items-center gap-2" style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}>\n    <span>Blob</span>\n  </button>\n);`}
              htmlCode={`<button class="btn-blob">Blob</button>`}
              cssCode={`.btn-blob { background: #f43f5e; color: #fff; font-weight: 700; padding: 1rem 2rem; border: none; border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transition: all 0.5s; cursor: pointer; }\n.btn-blob:hover { background: #e11d48; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }`}
            />
          </div>
          <BlobButton />
        </div>
      </div>
    </div>
  );
};

export default Buttons;

