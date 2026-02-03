import React, { useState, useEffect } from 'react';

// --- Shared Backdrop Component ---
// This handles the dimming background and closing on click outside
const ModalBackdrop = ({ children, onClose }) => (
  <div 
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200"
    onClick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}
  >
    {children}
  </div>
);

// --- 1. The Standard (Clean & crisp) ---
export const ModalStandard = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <ModalBackdrop onClose={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-semibold text-gray-800">Confirm Action</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>
        <div className="p-6">
          <p className="text-gray-600">Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
        </div>
        <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Cancel</button>
          <button onClick={onClose} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Deactivate</button>
        </div>
      </div>
    </ModalBackdrop>
  );
};

// --- 2. The Bottom Sheet (Mobile Style) ---
export const ModalSheet = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center pointer-events-none">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 pointer-events-auto transition-opacity" onClick={onClose}></div>
      
      {/* Sheet */}
      <div className="w-full max-w-md bg-white rounded-t-2xl sm:rounded-2xl p-6 pointer-events-auto shadow-2xl animate-in slide-in-from-bottom duration-300">
        <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6 sm:hidden"></div>
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          </div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Payment Successful</h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
            </p>
          </div>
        </div>
        <div className="mt-5 sm:mt-6">
          <button onClick={onClose} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-3 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 sm:text-sm">
            Go back to dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 3. The Glassmorphism Modal ---
export const ModalGlass = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <ModalBackdrop onClose={onClose}>
      <div className="relative w-full max-w-lg p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-purple-500 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Unlock Pro</h2>
          <p className="text-blue-100 mb-8">Get access to unlimited features with our premium plan.</p>
          
          <div className="space-y-3 mb-8">
            <button className="w-full py-3.5 bg-gradient-to-r from-pink-500 to-violet-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
              Subscribe for $9/mo
            </button>
            <button onClick={onClose} className="text-white/70 hover:text-white text-sm">No thanks, maybe later</button>
          </div>
        </div>
      </div>
    </ModalBackdrop>
  );
};

// --- 4. The Cyberpunk (Neon) ---
export const ModalCyberpunk = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <ModalBackdrop onClose={onClose}>
      <div className="relative w-full max-w-md bg-gray-900 border-2 border-cyan-500 p-1 shadow-[0_0_40px_rgba(6,182,212,0.3)] animate-in zoom-in duration-200">
        {/* Corner Decals */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-500"></div>
        <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-500"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-500"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-500"></div>
        
        <div className="bg-gray-900 border border-gray-800 p-6 relative z-10">
          <h3 className="text-2xl font-bold text-cyan-400 font-mono mb-4 uppercase tracking-wider">
            // SYSTEM ALERT
          </h3>
          <p className="text-gray-300 font-mono text-sm mb-6 border-l-2 border-cyan-500/50 pl-4">
            Unidentified signal detected. Proceed with extraction protocol?
          </p>
          <div className="flex gap-4">
            <button onClick={onClose} className="flex-1 py-2 bg-cyan-600 hover:bg-cyan-500 text-black font-bold font-mono uppercase tracking-widest transition-colors">
              [ EXECUTE ]
            </button>
            <button onClick={onClose} className="flex-1 py-2 border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 font-bold font-mono uppercase tracking-widest transition-colors">
              [ ABORT ]
            </button>
          </div>
        </div>
      </div>
    </ModalBackdrop>
  );
};

// --- 5. The Minimalist (Clean Line) ---
export const ModalMinimal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <ModalBackdrop onClose={onClose}>
      <div className="w-full max-w-md bg-white p-12 animate-in slide-in-from-bottom-8 duration-500">
        <h2 className="text-4xl font-light text-gray-900 mb-6">Hello.</h2>
        <p className="text-gray-500 font-light mb-8 leading-relaxed">
          We use cookies to ensure you get the best experience on our website. By continuing, you agree to our use of cookies.
        </p>
        <div className="flex gap-8">
          <button onClick={onClose} className="text-black border-b border-black pb-1 hover:border-transparent transition-all">
            Accept
          </button>
          <button onClick={onClose} className="text-gray-400 hover:text-black transition-colors">
            Decline
          </button>
        </div>
      </div>
    </ModalBackdrop>
  );
};

// --- 6. The Brutalist (Retro Pop) ---
export const ModalBrutalist = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <ModalBackdrop onClose={onClose}>
      <div className="w-full max-w-md bg-yellow-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 animate-bounce duration-500">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-3xl font-black uppercase italic transform -rotate-2">Attention!</h2>
          <button onClick={onClose} className="bg-white border-2 border-black p-1 hover:bg-black hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="bg-white border-2 border-black p-4 font-bold mb-6">
          YOU ARE ABOUT TO DELETE 3 ITEMS. THIS ACTION CANNOT BE UNDONE.
        </div>
        <button onClick={onClose} className="w-full py-3 bg-black text-white font-black text-xl hover:bg-white hover:text-black border-2 border-black transition-colors uppercase">
          I Understand
        </button>
      </div>
    </ModalBackdrop>
  );
};

// --- 7. The Image Spotlight ---
export const ModalImage = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <ModalBackdrop onClose={onClose}>
      <div className="w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300 grid md:grid-cols-2">
        <div className="h-64 md:h-auto bg-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1542397284385-6010376c5337?q=80&w=800&auto=format&fit=crop" 
            alt="Nature" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">New Arrival</span>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mountain Expedition</h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            Join us on an unforgettable journey through the peaks. Limited spots available for the summer season.
          </p>
          <div className="flex gap-3">
            <button onClick={onClose} className="flex-1 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800">
              Book Now
            </button>
            <button onClick={onClose} className="px-4 py-2.5 border border-gray-200 text-gray-600 text-sm font-semibold rounded-lg hover:bg-gray-50">
              Details
            </button>
          </div>
        </div>
      </div>
    </ModalBackdrop>
  );
};

// --- 8. The Neumorphic (Soft UI) ---
export const ModalNeumorphic = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <ModalBackdrop onClose={onClose}>
      <div className="w-full max-w-sm p-8 rounded-3xl bg-[#e0e5ec] shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)] animate-in zoom-in duration-300">
        <div className="w-16 h-16 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] mx-auto flex items-center justify-center text-blue-500 mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
        </div>
        <h3 className="text-center text-xl font-bold text-gray-700 mb-2">Authentication</h3>
        <p className="text-center text-gray-500 text-sm mb-8">Please enter your pin code to proceed.</p>
        
        <div className="flex justify-center gap-3 mb-8">
           {[1, 2, 3, 4].map(i => (
             <div key={i} className="w-3 h-3 rounded-full bg-gray-400 shadow-[inset_1px_1px_2px_#bebebe,inset_-1px_-1px_2px_#ffffff]"></div>
           ))}
        </div>

        <button onClick={onClose} className="w-full py-3 rounded-xl bg-[#e0e5ec] text-gray-600 font-bold shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] active:scale-95 transition-all">
          Cancel
        </button>
      </div>
    </ModalBackdrop>
  );
};

// --- 9. The Sidebar Modal (Drawer) ---
export const ModalDrawer = ({ isOpen, onClose }) => {
  // We don't use the standard backdrop here because we want a specific slide animation
  return (
    <div className={`fixed inset-0 z-50 flex justify-end ${!isOpen && 'pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      ></div>
      
      {/* Drawer */}
      <div className={`relative w-full max-w-sm bg-white h-full shadow-2xl p-6 transition-transform duration-300 ease-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-gray-800">Filter Results</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">✕</button>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select className="w-full p-2 border border-gray-200 rounded-lg"><option>All Products</option></select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
            <input type="range" className="w-full accent-black" />
            <div className="flex justify-between text-xs text-gray-500 mt-1"><span>$0</span><span>$1000</span></div>
          </div>
          <div className="pt-8 mt-auto">
             <button onClick={onClose} className="w-full py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800">Apply Filters</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 10. The Gradient Border (Glow) ---
export const ModalGradient = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <ModalBackdrop onClose={onClose}>
      <div className="relative w-full max-w-md p-[2px] rounded-2xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 animate-in fade-in zoom-in duration-300">
        <div className="bg-white rounded-2xl p-8 relative overflow-hidden">
          {/* Top light effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-50"></div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-fuchsia-50 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              🎁
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Special Offer!</h2>
            <p className="text-gray-500 mb-6">You've unlocked a 50% discount on your next purchase.</p>
            <button onClick={onClose} className="w-full py-3 bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-opacity">
              Claim Offer
            </button>
          </div>
        </div>
      </div>
    </ModalBackdrop>
  );
};


// --- Gallery Layout ---
const Modals = () => {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  return (
    <div className="container box-shadow  overflow-y-auto bg-slate-50 p-8 font-sans pb-32">
      <h1 className="text-4xl font-bold text-center text-slate-800 mb-4">Modern Modals</h1>
      <p className="text-center text-slate-500 mb-16">Click a button to trigger the specific modal style.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        
        <button onClick={() => setActiveModal('standard')} className="px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors font-medium text-sm box-shadow p-4">
          01. Standard
        </button>
        <button onClick={() => setActiveModal('sheet')} className="px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors font-medium text-sm box-shadow p-4">
          02. Bottom Sheet
        </button>
        <button onClick={() => setActiveModal('glass')} className="px-4 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-lg hover:opacity-90 transition-opacity font-medium text-sm box-shadow p-4">
          03. Glassmorphism
        </button>
        <button onClick={() => setActiveModal('cyber')} className="px-4 py-3 bg-gray-900 text-cyan-400 border border-cyan-900 rounded-lg hover:border-cyan-500 transition-colors font-medium text-sm box-shadow p-4 ">
          04. Cyberpunk
        </button>
        <button onClick={() => setActiveModal('minimal')} className="px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-gray-900 hover:text-gray-900 transition-colors font-medium text-sm box-shadow p-4 ">
          05. Minimalist
        </button>
        <button onClick={() => setActiveModal('brutalist')} className="px-4 py-3 bg-yellow-400 border-2 border-black rounded-none hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] font-bold text-sm box-shadow p-4">
          06. Brutalist
        </button>
        <button onClick={() => setActiveModal('image')} className="px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors font-medium text-sm box-shadow p-4">
          07. Image Spotlight
        </button>
        <button onClick={() => setActiveModal('neumorphic')} className="px-4 py-3 bg-[#e0e5ec] text-gray-600 rounded-lg hover:shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff] font-medium text-sm box-shadow p-4 ">
          08. Neumorphic
        </button>
        <button onClick={() => setActiveModal('drawer')} className="px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors font-medium text-sm box-shadow p-4 ">
          09. Side Drawer
        </button>
        <button onClick={() => setActiveModal('gradient')} className="px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-fuchsia-500 hover:text-fuchsia-600 transition-colors font-medium text-sm box-shadow p-4">
          10. Gradient Glow
        </button>

      </div>

      {/* Render Active Modal */}
      <ModalStandard isOpen={activeModal === 'standard'} onClose={closeModal} />
      <ModalSheet isOpen={activeModal === 'sheet'} onClose={closeModal} />
      <ModalGlass isOpen={activeModal === 'glass'} onClose={closeModal} />
      <ModalCyberpunk isOpen={activeModal === 'cyber'} onClose={closeModal} />
      <ModalMinimal isOpen={activeModal === 'minimal'} onClose={closeModal} />
      <ModalBrutalist isOpen={activeModal === 'brutalist'} onClose={closeModal} />
      <ModalImage isOpen={activeModal === 'image'} onClose={closeModal} />
      <ModalNeumorphic isOpen={activeModal === 'neumorphic'} onClose={closeModal} />
      <ModalDrawer isOpen={activeModal === 'drawer'} onClose={closeModal} />
      <ModalGradient isOpen={activeModal === 'gradient'} onClose={closeModal} />

    </div>
  );
};

export default Modals;