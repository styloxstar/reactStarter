import React, { useState, useEffect } from 'react';

// --- Helper Data for Icons & Colors ---
const toastTypes = {
  success: {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>,
    color: 'text-green-500',
    bg: 'bg-green-500',
    border: 'border-green-500',
    lightBg: 'bg-green-50',
    gradient: 'from-green-500 to-emerald-600',
    label: 'Success'
  },
  error: {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>,
    color: 'text-red-500',
    bg: 'bg-red-500',
    border: 'border-red-500',
    lightBg: 'bg-red-50',
    gradient: 'from-red-500 to-pink-600',
    label: 'Error'
  },
  warning: {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
    color: 'text-amber-500',
    bg: 'bg-amber-500',
    border: 'border-amber-500',
    lightBg: 'bg-amber-50',
    gradient: 'from-amber-400 to-orange-500',
    label: 'Warning'
  },
  info: {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    color: 'text-blue-500',
    bg: 'bg-blue-500',
    border: 'border-blue-500',
    lightBg: 'bg-blue-50',
    gradient: 'from-blue-500 to-indigo-600',
    label: 'Info'
  }
};

// --- 1. The Standard (Border Left) ---
export const ToastStandard = ({ type = 'success', message = 'Operation successful' }) => {
  const t = toastTypes[type];
  return (
    <div className={`flex items-center w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border-l-4 ${t.border} animate-in fade-in slide-in-from-bottom-4 duration-300`}>
      <div className={`p-4`}>
        <div className={`${t.color}`}>{t.icon}</div>
      </div>
      <div className="px-2 py-4 -ml-2">
        <p className="font-bold text-gray-800">{t.label}</p>
        <p className="text-sm text-gray-600">{message}</p>
      </div>
    </div>
  );
};

// --- 2. The Solid Fill ---
export const ToastSolid = ({ type = 'success', message = 'Data saved successfully' }) => {
  const t = toastTypes[type];
  return (
    <div className={`flex items-center gap-3 w-full max-w-sm px-4 py-3 text-white ${t.bg} rounded shadow-lg animate-in fade-in zoom-in duration-300`}>
      <div className="bg-white/20 p-1 rounded-full">{t.icon}</div>
      <div className="font-medium text-sm">{message}</div>
      <button className="ml-auto text-white/70 hover:text-white">✕</button>
    </div>
  );
};

// --- 3. The Glassmorphism ---
export const ToastGlass = ({ type = 'error', message = 'Connection lost' }) => {
  const t = toastTypes[type];
  return (
    <div className="relative w-full max-w-sm p-4 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl flex items-start gap-3 animate-in fade-in duration-300">
      <div className={`p-2 rounded-full ${t.lightBg} ${t.color}`}>{t.icon}</div>
      <div>
        <h4 className={`font-semibold ${t.color}`}>{t.label}</h4>
        <p className="text-sm text-gray-500 mt-0.5">{message}</p>
      </div>
    </div>
  );
};

// --- 4. The Modern Minimal (Floating Icon) ---
export const ToastMinimal = ({ type = 'info', message = 'New update available' }) => {
  const t = toastTypes[type];
  return (
    <div className="flex items-center gap-3 w-full max-w-sm p-3 bg-white rounded-full shadow-lg border border-gray-100 animate-in slide-in-from-top-4 duration-500">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${t.lightBg} ${t.color}`}>
        {t.icon}
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-800">{message}</p>
      </div>
      <button className="px-3 py-1 text-xs font-bold text-gray-500 hover:text-gray-900 border-l border-gray-200">
        Undo
      </button>
    </div>
  );
};

// --- 5. The Notification (Split Action) ---
export const ToastNotification = ({ type = 'warning', message = 'Disk space low' }) => {
  const t = toastTypes[type];
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden animate-in fade-in slide-in-from-right-8 duration-300">
      <div className="p-4 flex items-start gap-3">
        <div className={`mt-0.5 ${t.color}`}>{t.icon}</div>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-900">{t.label}</h3>
          <p className="mt-1 text-sm text-gray-500">{message}</p>
        </div>
        <button className="text-gray-400 hover:text-gray-500">✕</button>
      </div>
      <div className="bg-gray-50 px-4 py-2 sm:flex sm:flex-row-reverse">
        <button className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-1 text-xs font-medium text-white ${t.bg} hover:opacity-90 sm:w-auto sm:ml-3`}>
          Review
        </button>
        <button className="mt-2 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-1 text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 sm:mt-0 sm:w-auto">
          Dismiss
        </button>
      </div>
    </div>
  );
};

// --- 6. The Gradient Glow ---
export const ToastGradient = ({ type = 'success', message = 'Payment processed' }) => {
  const t = toastTypes[type];
  return (
    <div className={`w-full max-w-sm p-[2px] rounded-lg bg-gradient-to-r ${t.gradient} animate-in fade-in duration-300`}>
      <div className="bg-white rounded-md p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`text-transparent bg-clip-text bg-gradient-to-r ${t.gradient} font-bold`}>
            {t.label}
          </div>
        </div>
        <span className="text-sm text-gray-600 font-medium">{message}</span>
      </div>
    </div>
  );
};

// --- 7. The Brutalist (Retro Pop) ---
export const ToastBrutalist = ({ type = 'error', message = 'System Failure' }) => {
  const t = toastTypes[type];
  return (
    <div className={`w-full max-w-sm bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3 animate-bounce duration-500`}>
      <div className={`p-1 border-2 border-black ${t.lightBg} text-black`}>
        {t.icon}
      </div>
      <div className="flex-1">
         <strong className="block font-black uppercase text-xs">{t.label}</strong>
         <span className="text-sm font-bold">{message}</span>
      </div>
    </div>
  );
};

// --- 8. The Neumorphic (Soft UI) ---
export const ToastNeumorphic = ({ type = 'info', message = 'Downloading file...' }) => {
  const t = toastTypes[type];
  return (
    <div className="flex items-center gap-4 w-full max-w-sm px-5 py-4 bg-[#e0e5ec] rounded-xl shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] animate-in fade-in duration-300">
      <div className={`text-gray-500 ${t.color}`}>{t.icon}</div>
      <div className="flex-1 text-sm font-semibold text-gray-600">{message}</div>
      <div className="h-2 w-12 bg-gray-300 rounded-full overflow-hidden">
        <div className={`h-full ${t.bg} w-2/3 animate-pulse`}></div>
      </div>
    </div>
  );
};

// --- 9. The Dynamic Island (Pill) ---
export const ToastDynamic = ({ type = 'success', message = 'AirPods Connected' }) => {
  const t = toastTypes[type];
  return (
    <div className="w-full max-w-xs mx-auto bg-black text-white rounded-full px-1 py-1 flex items-center shadow-2xl animate-in zoom-in-95 duration-300">
       <div className={`w-10 h-10 rounded-full flex items-center justify-center ${t.bg}`}>
         {t.icon}
       </div>
       <div className="px-4 flex-1 text-center text-sm font-medium">
         {message}
       </div>
       <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-xs text-gray-400 cursor-pointer hover:bg-gray-700 hover:text-white transition-colors">
         OK
       </div>
    </div>
  );
};

// --- 10. The Cyberpunk (Tech) ---
export const ToastCyberpunk = ({ type = 'warning', message = 'Firewall Breach' }) => {
  const t = toastTypes[type];
  return (
    <div className="w-full max-w-sm relative group animate-in fade-in duration-200">
      {/* Glitch/Border Effect */}
      <div className={`absolute -inset-0.5 ${t.bg} opacity-50 blur group-hover:opacity-75 transition duration-200`}></div>
      
      <div className="relative bg-gray-900 border border-gray-700 p-4 flex items-center gap-4">
        <div className={`font-mono text-xs ${t.color}`}>[{t.label.toUpperCase()}]</div>
        <div className="flex-1 font-mono text-sm text-gray-300 truncate">
          {`>> ${message}`}
        </div>
        <div className={`w-2 h-2 ${t.bg} animate-ping`}></div>
      </div>
    </div>
  );
};


// --- Main Gallery ---
const ToastNotifications = () => {
  const [activeType, setActiveType] = useState('success');

  return (
    <div className="container box-shadow bg-slate-50 p-8 font-sans pb-32 overflow-y-auto">
      <h1 className="text-4xl font-bold text-center text-slate-800 mb-4">Modern Toasts</h1>
      <p className="text-center text-slate-500 mb-8">
        10 styles with 4 variants. Click buttons below to change the active state.
      </p>

      {/* Control Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {['success', 'error', 'warning', 'info'].map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-6 py-2 rounded-full font-bold uppercase text-xs tracking-wider transition-all transform active:scale-95 ${
              activeType === type 
              ? 'bg-slate-800 text-white shadow-lg' 
              : 'bg-white text-slate-500 shadow-sm hover:bg-slate-100'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto items-center justify-items-center">
        
        {/* 1. Standard */}
        <div className="flex flex-col gap-2 w-full items-center">
          <span className="text-xs font-bold text-slate-400 uppercase">01. Standard</span>
          <ToastStandard type={activeType} message="This is a standard notification." />
        </div>

        {/* 2. Solid */}
        <div className="flex flex-col gap-2 w-full items-center">
          <span className="text-xs font-bold text-slate-400 uppercase">02. Solid Fill</span>
          <ToastSolid type={activeType} message="Operation completed successfully." />
        </div>

        {/* 3. Glass */}
        <div className="flex flex-col gap-2 w-full items-center bg-gradient-to-r from-violet-400 to-fuchsia-400 p-8 rounded-xl shadow-inner">
          <span className="text-xs font-bold text-white/60 uppercase">03. Glassmorphism</span>
          <ToastGlass type={activeType} message="Glassy backdrop effect." />
        </div>

        {/* 4. Minimal */}
        <div className="flex flex-col gap-2 w-full items-center">
          <span className="text-xs font-bold text-slate-400 uppercase">04. Minimal Floating</span>
          <ToastMinimal type={activeType} message="Minimal design language." />
        </div>

        {/* 5. Notification */}
        <div className="flex flex-col gap-2 w-full items-center">
          <span className="text-xs font-bold text-slate-400 uppercase">05. Action Notification</span>
          <ToastNotification type={activeType} message="Requires your attention." />
        </div>

        {/* 6. Gradient */}
        <div className="flex flex-col gap-2 w-full items-center">
          <span className="text-xs font-bold text-slate-400 uppercase">06. Gradient Border</span>
          <ToastGradient type={activeType} message="Beautiful gradient borders." />
        </div>

        {/* 7. Brutalist */}
        <div className="flex flex-col gap-2 w-full items-center">
          <span className="text-xs font-bold text-slate-400 uppercase">07. Brutalist</span>
          <ToastBrutalist type={activeType} message="BOLD & RETRO STYLE." />
        </div>

        {/* 8. Neumorphic */}
        <div className="flex flex-col gap-2 w-full items-center bg-[#e0e5ec] p-8 rounded-xl">
          <span className="text-xs font-bold text-gray-400 uppercase">08. Neumorphic</span>
          <ToastNeumorphic type={activeType} message="Soft UI elements." />
        </div>

        {/* 9. Dynamic */}
        <div className="flex flex-col gap-2 w-full items-center">
          <span className="text-xs font-bold text-slate-400 uppercase">09. Dynamic Pill</span>
          <ToastDynamic type={activeType} message="Device connected" />
        </div>

        {/* 10. Cyberpunk */}
        <div className="flex flex-col gap-2 w-full items-center bg-gray-950 p-8 rounded-xl">
          <span className="text-xs font-bold text-gray-600 uppercase">10. Cyberpunk</span>
          <ToastCyberpunk type={activeType} message="Protocol Initiated" />
        </div>

      </div>
    </div>
  );
};

export default ToastNotifications;