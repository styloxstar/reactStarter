import React, { useState, useEffect, useRef } from 'react';

// --- Shared Hook for Click Outside ---
const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

// --- 1. The Modern Minimalist (SaaS Standard) ---
export const DropdownModern = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  useClickOutside(ref, () => setIsOpen(false));

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)} className="inline-flex justify-center items-center gap-2 w-full px-4 py-2 bg-white text-sm font-medium text-gray-700 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Options
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
      </button>

      <div className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none transition-all duration-200 ease-out ${isOpen ? 'transform scale-100 opacity-100 visible' : 'transform scale-95 opacity-0 invisible'}`}>
        <div className="py-1 divide-y divide-gray-100">
          <div className="px-4 py-2">
            <p className="text-sm text-gray-900">Signed in as</p>
            <p className="text-sm font-medium text-gray-900 truncate">tom@example.com</p>
          </div>
          <div className="py-1">
            <a href="#" className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700">
              <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Account Settings
            </a>
            <a href="#" className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700">
              <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 2. The Glassmorphism (Frosty) ---
export const DropdownGlass = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  useClickOutside(ref, () => setIsOpen(false));

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)} className="inline-flex justify-center w-full px-5 py-2.5 text-sm font-medium text-white bg-white/20 border border-white/30 rounded-xl hover:bg-white/30 backdrop-blur-md transition-all shadow-lg">
        Menu
      </button>

      <div className={`absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl focus:outline-none transition-all duration-200 ${isOpen ? 'transform scale-100 opacity-100 visible' : 'transform scale-95 opacity-0 invisible'}`}>
        <div className="p-1">
          {['Dashboard', 'Analytics', 'Reports', 'Export'].map((item) => (
            <button key={item} className="flex w-full items-center rounded-lg px-3 py-2 text-sm text-white hover:bg-white/20 transition-colors">
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 3. The Command Menu (Dark/Spotlight) ---
export const DropdownCommand = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  useClickOutside(ref, () => setIsOpen(false));

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 text-gray-300 border border-gray-700 rounded-md text-sm hover:text-white hover:border-gray-600 transition-colors">
        <span>Actions</span>
        <span className="bg-gray-700 px-1.5 py-0.5 rounded text-xs text-gray-400">⌘K</span>
      </button>

      <div className={`absolute left-0 z-10 mt-2 w-64 origin-top-left rounded-lg bg-gray-900 border border-gray-700 shadow-xl overflow-hidden transition-all duration-200 ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
        <div className="px-2 py-2">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2">Projects</div>
          <button className="flex w-full justify-between items-center rounded-md px-2 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white group">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div> Website Redesign
            </span>
            <span className="text-xs text-gray-600 group-hover:text-gray-400">⌘P</span>
          </button>
          <button className="flex w-full justify-between items-center rounded-md px-2 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white group">
            <span className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-purple-500"></div> Mobile App
            </span>
            <span className="text-xs text-gray-600 group-hover:text-gray-400">⌘M</span>
          </button>
          
          <div className="h-px bg-gray-800 my-2 mx-2"></div>
          
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2">System</div>
          <button className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            Delete Project
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 4. The Mega Menu (Rich Grid) ---
export const DropdownMega = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  useClickOutside(ref, () => setIsOpen(false));

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)} className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors flex items-center gap-2">
        Resources
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
      </button>

      <div className={`absolute left-0 z-20 mt-4 w-screen max-w-sm origin-top-left transform px-4 sm:px-0 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}`}>
        <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 bg-white">
          <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
            {[
              { name: 'Analytics', desc: 'Get a better understanding of your traffic', color: 'bg-indigo-500' },
              { name: 'Engagement', desc: 'Speak directly to your customers', color: 'bg-emerald-500' },
              { name: 'Security', desc: 'Your customers data will be safe and secure', color: 'bg-sky-500' },
              { name: 'Integrations', desc: 'Connect with third-party tools', color: 'bg-rose-500' },
            ].map((item) => (
              <a key={item.name} href="#" className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 transition ease-in-out duration-150">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-white sm:h-12 sm:w-12 ${item.color}`}>
                   {/* Placeholder Icon */}
                   <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                  <p className="mt-1 text-xs text-gray-500">{item.desc}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="bg-gray-50 p-4">
            <a href="#" className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100">
              <span className="flex items-center">
                <span className="text-sm font-medium text-gray-900">Documentation</span>
              </span>
              <span className="block text-xs text-gray-500">Start integrating products and tools</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 5. The Brutalist (Retro/Bold) ---
export const DropdownBrutalist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  useClickOutside(ref, () => setIsOpen(false));

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 px-6 py-3 bg-yellow-400 border-2 border-black font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
        MENU
        <span className="text-xl leading-none mb-1">+</span>
      </button>

      <div className={`absolute left-0 z-10 mt-2 w-56 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
        <a href="#" className="block px-4 py-3 font-bold border-b-2 border-black hover:bg-pink-400 hover:text-white transition-colors">
          NEW DROPS
        </a>
        <a href="#" className="block px-4 py-3 font-bold border-b-2 border-black hover:bg-blue-400 hover:text-white transition-colors">
          COLLECTIONS
        </a>
        <a href="#" className="block px-4 py-3 font-bold hover:bg-black hover:text-white transition-colors">
          SALE %
        </a>
      </div>
    </div>
  );
};

// --- 6. The User Profile (Avatar Trigger) ---
export const DropdownProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  useClickOutside(ref, () => setIsOpen(false));

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 focus:outline-none">
        <img className={`w-10 h-10 rounded-full border-2 transition-colors ${isOpen ? 'border-blue-500' : 'border-transparent'}`} src="https://i.pravatar.cc/150?img=33" alt="Avatar" />
      </button>

      <div className={`absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-xl bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none transition-all duration-200 ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
        <div className="p-4 border-b border-gray-100 flex items-center gap-3">
           <img className="w-10 h-10 rounded-full" src="https://i.pravatar.cc/150?img=33" alt="Avatar" />
           <div>
             <div className="font-bold text-gray-900">Alex Morgan</div>
             <div className="text-xs text-gray-500">Pro Member</div>
           </div>
        </div>
        <div className="p-2">
          {['Profile', 'Billing', 'Settings'].map((item) => (
            <a key={item} href="#" className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              {item}
            </a>
          ))}
        </div>
        <div className="p-2 border-t border-gray-100">
           <a href="#" className="flex items-center px-3 py-2 text-sm text-red-600 rounded-lg hover:bg-red-50 transition-colors">
             Sign out
           </a>
        </div>
      </div>
    </div>
  );
};

// --- 7. The Neumorphic (Soft UI) ---
export const DropdownNeumorphic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  useClickOutside(ref, () => setIsOpen(false));

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)} className="px-6 py-3 rounded-xl bg-[#e0e5ec] text-gray-600 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] active:scale-95 transition-all">
        Soft Menu
      </button>

      <div className={`absolute left-0 z-10 mt-4 w-48 rounded-xl bg-[#e0e5ec] shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)] p-2 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}>
        {['Light Mode', 'Dark Mode', 'Auto'].map((item) => (
          <a key={item} href="#" className="block px-4 py-2 text-sm font-semibold text-gray-600 rounded-lg hover:bg-gray-200/50 hover:shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff] transition-all">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

// --- 8. The Notification (Inbox Style) ---
export const DropdownNotification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  useClickOutside(ref, () => setIsOpen(false));

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)} className="relative p-2 rounded-full bg-white hover:bg-gray-100 transition-colors">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="absolute top-1.5 right-1.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
        </span>
      </button>

      <div className={`absolute right-0 z-20 mt-2 w-80 origin-top-right rounded-xl bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden transition-all duration-200 ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
        <div className="px-4 py-3 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
          <span className="font-semibold text-gray-800">Notifications</span>
          <span className="text-xs text-blue-600 cursor-pointer">Mark all read</span>
        </div>
        <div className="max-h-64 overflow-y-auto">
          {[1, 2, 3].map((i) => (
            <a key={i} href="#" className="flex gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0">
              <div className="shrink-0 relative">
                <img className="w-10 h-10 rounded-full" src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="User" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Lisa commented on your post</p>
                <p className="text-xs text-gray-500 mt-0.5">2 minutes ago</p>
              </div>
            </a>
          ))}
        </div>
        <a href="#" className="block bg-gray-50 px-4 py-3 text-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
          View all notifications
        </a>
      </div>
    </div>
  );
};

// --- 9. The Gradient Border (Neon) ---
export const DropdownNeon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  useClickOutside(ref, () => setIsOpen(false));

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)} className="relative px-6 py-2.5 bg-gray-900 rounded-lg text-white font-medium group overflow-hidden">
        <span className="relative z-10 flex items-center gap-2">
           Neon Glow
           <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>

      <div className={`absolute left-0 z-10 mt-2 w-56 p-[1px] bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
        <div className="bg-gray-900 rounded-xl overflow-hidden">
          {['Cyberpunk', 'Synthwave', 'Retrowave'].map((item) => (
            <a key={item} href="#" className="block px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-white transition-colors relative">
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 10. The Nested Group (Categorized) ---
export const DropdownGroup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  useClickOutside(ref, () => setIsOpen(false));

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)} className="px-4 py-2 bg-emerald-50 text-emerald-700 font-semibold rounded-lg hover:bg-emerald-100 transition-colors flex items-center gap-2">
        Filter View
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
      </button>

      <div className={`absolute left-0 z-10 mt-2 w-64 origin-top-left rounded-lg bg-white shadow-xl ring-1 ring-black/5 divide-y divide-gray-100 transition-all duration-200 ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
        <div className="py-2">
          <div className="px-4 pb-1 text-xs font-bold text-gray-400 uppercase">Sort By</div>
          <label className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer">
             <input type="radio" name="sort" className="text-emerald-600 focus:ring-emerald-500" />
             <span className="ml-2 text-sm text-gray-700">Date Created</span>
          </label>
          <label className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer">
             <input type="radio" name="sort" className="text-emerald-600 focus:ring-emerald-500" />
             <span className="ml-2 text-sm text-gray-700">Popularity</span>
          </label>
        </div>
        <div className="py-2">
          <div className="px-4 pb-1 text-xs font-bold text-gray-400 uppercase">Status</div>
          <label className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer">
             <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500" />
             <span className="ml-2 text-sm text-gray-700">Completed</span>
          </label>
          <label className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer">
             <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500" />
             <span className="ml-2 text-sm text-gray-700">In Progress</span>
          </label>
        </div>
        <div className="py-2 bg-gray-50 rounded-b-lg">
          <button className="w-full text-center text-sm font-medium text-emerald-600 hover:text-emerald-700">Clear Filters</button>
        </div>
      </div>
    </div>
  );
};


// --- Gallery Layout ---
const Dropdowns = () => {
  return (
    <div className="container box-shadow bg-slate-50 p-6 md:p-12 font-sans pb-40 overflow-y-auto">
      <h1 className="text-4xl font-bold text-center text-slate-800 mb-4">Modern Dropdowns</h1>
      <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">Click buttons to toggle menus. Each handles multiple children content types.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-24 gap-x-12 max-w-7xl mx-auto items-start justify-items-center">
        
        {/* 1. Modern */}
        <div className="w-full flex flex-col items-center z-10 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">01. SaaS Standard</span>
          <DropdownModern />
        </div>

        {/* 2. Glass (Requires dark context) */}
        <div className="w-full flex flex-col items-center z-10 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl box-shadow">
          <span className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">02. Glassmorphism</span>
          <DropdownGlass />
        </div>

        {/* 3. Command */}
        <div className="w-full flex flex-col items-center z-10 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">03. Command Menu</span>
          <DropdownCommand />
        </div>
        {/* 4. Mega Menu */}
        <div className="w-full flex flex-col items-center z-20 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">04. Mega Menu</span>
          <DropdownMega />
        </div>

        {/* 5. Brutalist */}
        <div className="w-full flex flex-col items-center z-10 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">05. Brutalist</span>
          <DropdownBrutalist />
        </div>

        {/* 6. Profile */}
        <div className="w-full flex flex-col items-center z-10 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">06. User Profile</span>
          <DropdownProfile />
        </div>

        {/* 7. Neumorphic */}
        <div className="w-full flex flex-col items-center z-10 bg-[#e0e5ec] p-8 rounded-2xl">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">07. Neumorphic</span>
          <DropdownNeumorphic />
        </div>

        {/* 8. Notification */}
        <div className="w-full flex flex-col items-center z-10 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">08. Notifications</span>
          <DropdownNotification />
        </div>

        {/* 9. Neon */}
        <div className="w-full flex flex-col items-center z-10 bg-gray-900 p-8 rounded-2xl">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">09. Neon Glow</span>
          <DropdownNeon />
        </div>

        {/* 10. Grouped */}
        <div className="w-full flex flex-col items-center z-10 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">10. Categorized</span>
          <DropdownGroup />
        </div>

      </div>
    </div>
  );
};

export default Dropdowns;