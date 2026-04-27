import React, { useState } from 'react';

// --- Shared Icons ---
const CheckBadge = () => (
  <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const CalendarIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
);
const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
);

// --- 1. The Referral Boost (Growth) ---
export const ConfirmedReferral = () => (
  <div className="bg-white p-12 rounded-3xl border border-gray-100 text-center max-w-2xl mx-auto">
    <div className="flex justify-center mb-6">
      <CheckBadge />
    </div>
    <h1 className="text-3xl font-bold text-gray-900 mb-4">Thanks for your order!</h1>
    <p className="text-gray-500 mb-8">We've sent a confirmation email to <span className="font-bold text-gray-800">alex@example.com</span>.</p>
    
    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 mb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
      <h3 className="text-xl font-bold text-blue-900 mb-2">Give $20, Get $20</h3>
      <p className="text-blue-700 mb-6">Share this link with friends. They get $20 off their first order, and you get $20 when they buy.</p>
      
      <div className="flex items-center gap-2 bg-white p-2 rounded-xl border border-blue-200 shadow-sm">
        <input type="text" value="store.com/r/alex20" readOnly className="flex-1 px-4 text-gray-600 outline-none bg-transparent" />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors">Copy</button>
      </div>
    </div>
    
    <div className="flex gap-4 justify-center">
      <button className="text-gray-500 hover:text-gray-900 font-medium">Track Order</button>
      <span className="text-gray-300">|</span>
      <button className="text-gray-500 hover:text-gray-900 font-medium">Return to Store</button>
    </div>
  </div>
);

// --- 2. The Guest Converter (Account Creation) ---
export const ConfirmedAccount = () => (
  <div className="flex flex-col md:flex-row h-[600px] bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
    <div className="md:w-1/2 p-12 flex flex-col justify-center bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Order #9921 Confirmed</h2>
      <div className="space-y-4 mb-8">
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-white border border-gray-200 rounded-lg p-2">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200" className="w-full h-full object-contain" alt="" />
          </div>
          <div>
            <div className="font-bold text-gray-900">Nike Air Max</div>
            <div className="text-sm text-gray-500">Size 10 • Qty 1</div>
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-500">
        Estimated Delivery: <span className="font-bold text-gray-900">Oct 28 - Oct 30</span>
      </div>
    </div>

    <div className="md:w-1/2 p-12 flex flex-col justify-center relative">
      <div className="absolute top-6 right-6">
        <button className="text-sm text-gray-400 hover:text-gray-600">Skip step</button>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Save your information?</h3>
      <p className="text-gray-500 mb-8">Create an account to track your order, save your address, and checkout faster next time.</p>
      
      <form className="space-y-4">
        <div>
          <label className="text-xs font-bold uppercase text-gray-500 mb-1 block">Set a Password</label>
          <input type="password" placeholder="Min 8 characters" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black outline-none" />
        </div>
        <button className="w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
          Create Account
        </button>
      </form>
    </div>
  </div>
);

// --- 3. The Calendar Integration (Events/Services) ---
export const ConfirmedBooking = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 max-w-md mx-auto text-center">
    <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-600">
      <CalendarIcon />
    </div>
    <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed</h2>
    <p className="text-gray-500 mb-8">We have scheduled your consultation.</p>
    
    <div className="bg-indigo-50 rounded-2xl p-6 mb-8 border border-indigo-100">
      <div className="text-indigo-900 font-bold text-lg mb-1">Marketing Strategy Call</div>
      <div className="text-indigo-600 mb-4">with Sarah Smith</div>
      
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
        <div className="text-left">
          <div className="text-xs text-gray-400 uppercase font-bold">Date</div>
          <div className="font-bold text-gray-900">Mon, Oct 24</div>
        </div>
        <div className="h-8 w-px bg-gray-100"></div>
        <div className="text-right">
          <div className="text-xs text-gray-400 uppercase font-bold">Time</div>
          <div className="font-bold text-gray-900">10:00 AM</div>
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-2 gap-3">
      <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" className="w-5 h-5" alt="GCal" /> Google
      </button>
      <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg" className="w-5 h-5" alt="Outlook" /> Outlook
      </button>
    </div>
  </div>
);

// --- 4. The Digital Download (Instant Access) ---
export const ConfirmedDownload = () => (
  <div className="bg-slate-900 text-white p-12 rounded-3xl text-center max-w-3xl mx-auto relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    
    <h2 className="text-3xl font-bold mb-4">Your files are ready!</h2>
    <p className="text-slate-400 mb-10">Thank you for purchasing the <span className="text-white font-bold">Ultimate UI Kit</span>. The link below will expire in 24 hours.</p>
    
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-10 flex items-center justify-between">
      <div className="flex items-center gap-4 text-left">
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
          zip
        </div>
        <div>
          <div className="font-bold">ultimate-ui-kit-v2.zip</div>
          <div className="text-xs text-slate-400">145 MB • Version 2.0</div>
        </div>
      </div>
      <button className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-slate-200 transition-colors">
        <DownloadIcon /> Download
      </button>
    </div>
    
    <div className="text-sm text-slate-500">
      Need an invoice? <a href="#" className="text-blue-400 hover:underline">Click here</a>
    </div>
  </div>
);

// --- 5. The Loyalty Reward (Gamification) ---
export const ConfirmedLoyalty = () => (
  <div className="bg-white p-10 rounded-3xl border border-gray-100 max-w-md mx-auto text-center overflow-hidden relative">
    {/* Confetti (Simulated) */}
    <div className="absolute top-10 left-10 w-2 h-2 bg-red-400 rounded-full"></div>
    <div className="absolute top-20 right-20 w-3 h-3 bg-blue-400 rotate-45"></div>
    <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-yellow-400 rounded-full"></div>

    <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
      🎉
    </div>
    
    <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
    
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 text-white mb-8 mt-6 shadow-lg shadow-indigo-200">
      <div className="text-xs font-bold uppercase opacity-80 mb-1">You earned</div>
      <div className="text-4xl font-bold mb-4">150 Points</div>
      
      <div className="w-full bg-black/20 h-2 rounded-full mb-2 overflow-hidden">
        <div className="w-3/4 h-full bg-yellow-400"></div>
      </div>
      <div className="text-xs opacity-90 flex justify-between">
        <span>Silver Tier</span>
        <span>50 pts to Gold</span>
      </div>
    </div>
    
    <button className="text-gray-500 font-medium hover:text-gray-900 text-sm">View Order Details</button>
  </div>
);

// --- 6. The Feedback Loop (NPS) ---
export const ConfirmedFeedback = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-200 max-w-xl mx-auto shadow-sm">
    <div className="flex items-center gap-4 border-b border-gray-100 pb-6 mb-6">
      <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">✓</div>
      <div>
        <h2 className="text-lg font-bold text-gray-900">Order Placed</h2>
        <p className="text-sm text-gray-500">Order #8821 confirmed.</p>
      </div>
    </div>
    
    <div className="text-center">
      <h3 className="font-bold text-gray-900 mb-4">How was your shopping experience?</h3>
      <div className="flex justify-center gap-2 mb-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <button key={star} className="text-3xl text-gray-300 hover:text-yellow-400 hover:scale-110 transition-all">★</button>
        ))}
      </div>
      <textarea 
        placeholder="Tell us what you liked or how we can improve..." 
        className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gray-400 resize-none mb-4"
        rows="3"
      ></textarea>
      <button className="px-8 py-2 bg-gray-900 text-white rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors">
        Submit Feedback
      </button>
    </div>
  </div>
);

// --- 7. The App Push (Mobile Conversion) ---
export const ConfirmedApp = () => (
  <div className="flex flex-col md:flex-row h-[500px] bg-orange-50 rounded-3xl overflow-hidden border border-orange-100">
    <div className="md:w-1/2 p-12 flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Track your food in real-time</h2>
      <p className="text-gray-600 mb-8">
        Your order is being prepared. Download our app to track your rider on the map and get instant notifications.
      </p>
      
      <div className="flex gap-4">
        <div className="w-32 h-32 bg-white p-2 rounded-xl shadow-sm">
          <img src="https://bwipjs-api.metafloor.com/?bcid=qrcode&text=DOWNLOAD_APP&scale=4" alt="QR" className="w-full h-full mix-blend-multiply" />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <button className="bg-black text-white px-4 py-2 rounded-lg text-xs font-bold text-left">App Store</button>
          <button className="bg-black text-white px-4 py-2 rounded-lg text-xs font-bold text-left">Google Play</button>
        </div>
      </div>
    </div>
    
    <div className="md:w-1/2 relative bg-orange-100">
      <img src="https://images.unsplash.com/photo-1512428559087-560fa0db79b6?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50" alt="Phone" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-80 bg-black rounded-t-3xl border-x-4 border-t-4 border-black shadow-2xl">
        <div className="w-full h-full bg-white rounded-t-[1.3rem] p-4 pt-12 text-center">
           <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-4 animate-bounce"></div>
           <div className="font-bold text-sm">Rider Nearby</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 8. The Corporate Invoice (Printable) ---
export  const ConfirmedInvoice = () => (
  <div className="bg-white p-12 rounded-none border border-gray-200 shadow-xl max-w-3xl mx-auto font-mono text-sm relative">
    {/* Paper tearing effect top */}
    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-gray-100 to-white"></div>

    <div className="flex justify-between items-start mb-12">
      <div>
        <h1 className="text-2xl font-bold mb-2">INVOICE</h1>
        <p className="text-gray-500">#INV-2024-001</p>
      </div>
      <div className="text-right">
        <div className="font-bold">ACME Corp.</div>
        <div>123 Business Rd.</div>
        <div>New York, NY</div>
      </div>
    </div>

    <div className="border-t border-b border-gray-200 py-4 mb-8">
      <div className="grid grid-cols-4 font-bold mb-2">
        <div className="col-span-2">Item</div>
        <div className="text-right">Qty</div>
        <div className="text-right">Price</div>
      </div>
      <div className="grid grid-cols-4 text-gray-600">
        <div className="col-span-2">SaaS Enterprise License</div>
        <div className="text-right">1</div>
        <div className="text-right">$499.00</div>
      </div>
    </div>

    <div className="flex justify-end mb-12">
      <div className="w-1/2 space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$499.00</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (0%)</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between font-bold text-lg border-t border-gray-200 pt-2">
          <span>Total Paid</span>
          <span>$499.00</span>
        </div>
      </div>
    </div>

    <div className="text-center">
      <button className="text-blue-600 hover:underline print:hidden flex items-center justify-center gap-2 mx-auto">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
        Print Receipt
      </button>
    </div>
  </div>
);

// --- 9. The Social Share (Viral) ---
export const ConfirmedSocial = () => (
  <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-12 rounded-3xl border border-purple-100 text-center max-w-lg mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-2">You have great taste!</h2>
    <p className="text-gray-500 mb-8">Your order is confirmed. Why not show it off?</p>
    
    <div className="bg-white p-4 rounded-2xl shadow-xl rotate-2 hover:rotate-0 transition-transform duration-300 mb-8 max-w-xs mx-auto">
      <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-4">
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Product" />
      </div>
      <div className="font-bold text-left">Limited Edition Watch</div>
      <div className="text-sm text-gray-500 text-left">Just bought on Brand.com 🔥</div>
    </div>
    
    <div className="flex justify-center gap-4">
      <button className="p-3 bg-white rounded-full shadow-sm hover:text-pink-600 hover:shadow-md transition-all">
        Instagram
      </button>
      <button className="p-3 bg-white rounded-full shadow-sm hover:text-blue-400 hover:shadow-md transition-all">
        Twitter
      </button>
      <button className="p-3 bg-white rounded-full shadow-sm hover:text-blue-600 hover:shadow-md transition-all">
        Facebook
      </button>
    </div>
  </div>
);

// --- 10. The Onboarding (Next Steps) ---
export const ConfirmedOnboarding = () => (
  <div className="bg-white p-12 rounded-3xl border border-gray-100 max-w-4xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome to the Club!</h2>
      <p className="text-gray-500">Your membership is active. Here is what to do next:</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: "Complete Profile", desc: "Add your photo and bio.", icon: "👤", btn: "Edit Profile" },
        { title: "Join Community", desc: "Introduce yourself in Discord.", icon: "💬", btn: "Join Server" },
        { title: "Start Learning", desc: "Watch the welcome course.", icon: "🎓", btn: "Watch Now" },
      ].map((step, i) => (
        <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-2xl mb-4">
            {step.icon}
          </div>
          <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
          <p className="text-sm text-gray-500 mb-6">{step.desc}</p>
          <button className="mt-auto w-full py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold hover:bg-gray-100 transition-colors">
            {step.btn}
          </button>
        </div>
      ))}
    </div>
  </div>
);


// --- Main Gallery Wrapper ---
const ThankYouGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-100 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Order Confirmation Pages</h1>
        <p className="text-slate-500">Post-purchase experiences designed for retention and virality.</p>
      </div>
      
      <div className="space-y-32 max-w-6xl mx-auto">
        
        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">01. Referral Boost</span>
          <ConfirmedReferral />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">02. Guest to Account</span>
          <ConfirmedAccount />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">03. Booking Calendar</span>
          <ConfirmedBooking />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">04. Digital Download</span>
          <ConfirmedDownload />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">05. Loyalty Reward</span>
          <ConfirmedLoyalty />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">06. Feedback Loop</span>
          <ConfirmedFeedback />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">07. Mobile App Push</span>
          <ConfirmedApp />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">08. Corporate Invoice</span>
          <ConfirmedInvoice />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">09. Social Share</span>
          <ConfirmedSocial />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">10. Onboarding Steps</span>
          <ConfirmedOnboarding />
        </section>

      </div>
    </div>
  );
};

export default ThankYouGallery;