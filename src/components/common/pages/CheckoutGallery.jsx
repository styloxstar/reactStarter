import React, { useState } from 'react';
import CopyButton from '../CopyButton';

// --- Shared Icons ---
const LockIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
);

const CardIcon = () => (
  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
);

const ApplePayIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M15.7 13.25c-.04 2.22 1.94 2.96 2.03 3-.02.06-.31 1.07-1.02 2.11-.63.89-1.29 1.78-2.32 1.8-1.01.02-1.34-.6-2.5-.6-1.17 0-1.54.58-2.52.62-1.01.04-1.78-1.01-2.42-1.94-1.32-1.9-2.33-5.38-.97-7.74.67-1.17 1.88-1.91 3.19-1.94 1.01-.03 1.96.67 2.57.67.61 0 1.76-.84 2.97-.71 1.01.11 1.77.41 2.36 1.03-2.11 1.28-1.77 4.38.63 5.1zM15.02 5.51c.54-.66.91-1.57.81-2.48-.87.04-1.93.58-2.56 1.32-.51.58-.96 1.51-.84 2.39.97.07 1.96-.46 2.59-1.23z"/></svg>
);

// --- 1. The Standard Split (Shopify Style) ---
export const CheckoutStandard = () => (
  <div className="flex flex-col-reverse md:flex-row h-auto min-h-[600px] bg-white border border-gray-200 rounded-3xl overflow-hidden">
    {/* Left: Form */}
    <div className="w-full md:w-3/5 p-8 md:p-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-gray-900">Contact & Shipping</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">Login</a>
      </div>
      
      <form className="space-y-6">
        <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
        
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="First name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
          <input type="text" placeholder="Last name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>
        
        <input type="text" placeholder="Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
        
        <div className="grid grid-cols-3 gap-4">
          <input type="text" placeholder="City" className="col-span-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
          <input type="text" placeholder="State" className="col-span-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
          <input type="text" placeholder="ZIP" className="col-span-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>

        <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors mt-4">
          Continue to Payment
        </button>
      </form>
    </div>

    {/* Right: Summary */}
    <div className="w-full md:w-2/5 bg-gray-50 p-8 md:p-12 border-l border-gray-200">
      <div className="space-y-6">
        {[1, 2].map((item) => (
          <div key={item} className="flex gap-4 items-center">
            <div className="w-16 h-16 bg-white border border-gray-200 rounded-lg p-2 relative">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200" className="w-full h-full object-contain" alt="Product" />
              <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">1</span>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900">Nike Air Max</h4>
              <p className="text-xs text-gray-500">Size: 10 / Red</p>
            </div>
            <div className="text-sm font-medium text-gray-900">$120.00</div>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-200 mt-8 pt-6 space-y-2">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          <span>$240.00</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Shipping</span>
          <span>Calculated at next step</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-gray-900 pt-4">
          <span>Total</span>
          <span>$240.00</span>
        </div>
      </div>
    </div>
  </div>
);

// --- 2. The Minimalist (Single Column) ---
export const CheckoutMinimal = () => (
  <div className="max-w-md mx-auto bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
    <div className="text-center mb-8">
      <div className="text-gray-500 text-sm uppercase tracking-wide mb-2">Total to pay</div>
      <div className="text-4xl font-bold text-gray-900">$49.00</div>
    </div>

    <div className="space-y-4 mb-8">
      <button className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-80 transition-opacity">
        <ApplePayIcon /> Pay
      </button>
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
        <div className="relative flex justify-center text-xs uppercase"><span className="px-2 bg-white text-gray-400">Or pay with card</span></div>
      </div>
    </div>

    <form className="space-y-4">
      <div>
        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email</label>
        <input type="email" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-black outline-none" />
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Card Details</label>
        <div className="flex items-center p-3 bg-gray-50 border border-gray-200 rounded-lg focus-within:bg-white focus-within:ring-2 focus-within:ring-black">
          <CardIcon />
          <input type="text" placeholder="Card number" className="ml-2 w-full bg-transparent outline-none" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="MM / YY" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-black outline-none" />
        <input type="text" placeholder="CVC" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-black outline-none" />
      </div>
      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100">
        Pay $49.00
      </button>
    </form>
  </div>
);

// --- 3. The Interactive Card (Visual) ---
export const CheckoutCardVisual = () => (
  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
    <div className="w-full md:w-1/2">
      <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
      <form className="space-y-5">
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Cardholder Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="John Doe" />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Card Number</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="0000 0000 0000 0000" />
        </div>
        <div className="flex gap-4">
          <div className="space-y-1 flex-1">
            <label className="text-sm font-medium text-gray-700">Expiry</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="MM/YY" />
          </div>
          <div className="space-y-1 flex-1">
            <label className="text-sm font-medium text-gray-700">CVC</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="123" />
          </div>
        </div>
        <button className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors">Pay Now</button>
      </form>
    </div>

    <div className="w-full md:w-1/2 flex justify-center perspective-1000">
      {/* Credit Card Mockup */}
      <div className="w-full max-w-sm h-56 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-6 text-white relative transform transition-transform hover:scale-105">
        <div className="flex justify-between items-start mb-8">
          <div className="w-12 h-8 bg-yellow-500/20 rounded flex items-center justify-center">
             <div className="w-8 h-5 border border-yellow-500/50 rounded"></div>
          </div>
          <span className="font-mono text-xs opacity-50">DEBIT</span>
        </div>
        <div className="font-mono text-2xl tracking-widest mb-6">4242 4242 4242 4242</div>
        <div className="flex justify-between items-end">
          <div>
            <div className="text-[10px] opacity-70 uppercase tracking-widest">Card Holder</div>
            <div className="font-medium tracking-wide">JOHN DOE</div>
          </div>
          <div>
            <div className="text-[10px] opacity-70 uppercase tracking-widest">Expires</div>
            <div className="font-medium tracking-wide">12/25</div>
          </div>
        </div>
        <div className="absolute bottom-6 right-6">
           <div className="flex -space-x-2">
             <div className="w-8 h-8 bg-red-500/80 rounded-full"></div>
             <div className="w-8 h-8 bg-yellow-500/80 rounded-full"></div>
           </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 4. The Multi-Step (Wizard) ---
export const CheckoutWizard = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div className="bg-gray-50 px-8 py-4 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>1</span>
          <span className={`text-sm font-medium ${step >= 1 ? 'text-blue-600' : 'text-gray-500'}`}>Shipping</span>
        </div>
        <div className="w-12 h-px bg-gray-300"></div>
        <div className="flex items-center gap-2">
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>2</span>
          <span className={`text-sm font-medium ${step >= 2 ? 'text-blue-600' : 'text-gray-500'}`}>Payment</span>
        </div>
        <div className="w-12 h-px bg-gray-300"></div>
        <div className="flex items-center gap-2">
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>3</span>
          <span className={`text-sm font-medium ${step >= 3 ? 'text-blue-600' : 'text-gray-500'}`}>Review</span>
        </div>
      </div>

      <div className="p-8 min-h-[300px]">
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h3 className="text-lg font-bold">Where should we send it?</h3>
            <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-md" />
            <input type="text" placeholder="Address" className="w-full p-3 border rounded-md" />
            <div className="flex justify-end pt-4">
              <button onClick={() => setStep(2)} className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Next Step</button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h3 className="text-lg font-bold">How would you like to pay?</h3>
            <div className="p-4 border rounded-md flex items-center gap-3 bg-blue-50 border-blue-200 cursor-pointer">
              <input type="radio" checked readOnly className="text-blue-600" />
              <span>Credit Card</span>
            </div>
            <div className="p-4 border rounded-md flex items-center gap-3 hover:bg-gray-50 cursor-pointer">
              <input type="radio" className="text-blue-600" />
              <span>PayPal</span>
            </div>
            <div className="flex justify-between pt-4">
              <button onClick={() => setStep(1)} className="text-gray-500 hover:text-gray-900">Back</button>
              <button onClick={() => setStep(3)} className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Review Order</button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h3 className="text-lg font-bold">Order Summary</h3>
            <div className="bg-gray-50 p-4 rounded-md text-sm space-y-2">
              <div className="flex justify-between"><span>Subtotal</span><span>$100.00</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>$10.00</span></div>
              <div className="flex justify-between font-bold text-base pt-2 border-t"><span>Total</span><span>$110.00</span></div>
            </div>
            <div className="flex justify-between pt-4">
              <button onClick={() => setStep(2)} className="text-gray-500 hover:text-gray-900">Back</button>
              <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Complete Order</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- 5. The Glassmorphism (Modern) ---
export const CheckoutGlass = () => (
  <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 p-10 flex flex-col md:flex-row gap-10">
    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-50"></div>
    
    {/* Summary Glass */}
    <div className="w-full md:w-1/3 text-white relative z-10">
      <h3 className="text-xl font-bold mb-6">Order Summary</h3>
      <div className="bg-white/20 backdrop-blur-md border border-white/30 p-6 rounded-2xl space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/30 rounded-lg"></div>
            <span className="font-medium">Pro Plan</span>
          </div>
          <span>$29.00</span>
        </div>
        <div className="h-px bg-white/20"></div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>$29.00</span>
        </div>
      </div>
    </div>

    {/* Form Glass */}
    <div className="w-full md:w-2/3 relative z-10">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl">
        <h3 className="text-xl font-bold text-white mb-6">Payment</h3>
        <form className="space-y-4">
          <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/10 text-white placeholder-white/70 focus:bg-white/30 outline-none transition-colors" />
          <input type="text" placeholder="Card Number" className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/10 text-white placeholder-white/70 focus:bg-white/30 outline-none transition-colors" />
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/10 text-white placeholder-white/70 focus:bg-white/30 outline-none transition-colors" />
            <input type="text" placeholder="CVC" className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/10 text-white placeholder-white/70 focus:bg-white/30 outline-none transition-colors" />
          </div>
          <button className="w-full py-4 bg-white text-purple-600 font-bold rounded-xl shadow-lg hover:scale-[1.02] transition-transform">
            Pay Securely
          </button>
        </form>
      </div>
    </div>
  </div>
);

// --- 6. The Crypto / Web3 (Dark) ---
export const CheckoutCrypto = () => (
  <div className="bg-black p-8 rounded-3xl border border-gray-800 text-white max-w-lg mx-auto">
    <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-800">
      <h2 className="text-xl font-mono text-cyan-400">CHECKOUT_TERMINAL</h2>
      <span className="px-2 py-1 bg-green-900 text-green-400 text-xs font-mono rounded">SECURE_CONN</span>
    </div>

    <div className="mb-8">
      <div className="text-gray-400 text-sm mb-2 font-mono">Amount Due</div>
      <div className="text-4xl font-bold font-mono">0.45 ETH <span className="text-sm text-gray-500 font-sans">($1,240.50)</span></div>
    </div>

    <div className="space-y-4 font-mono">
      <div className="p-4 border border-gray-700 rounded-lg hover:border-cyan-500 cursor-pointer bg-gray-900 transition-colors flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"></div>
          <span>MetaMask</span>
        </div>
        <div className="w-4 h-4 rounded-full border border-gray-500"></div>
      </div>
      
      <div className="p-4 border border-gray-700 rounded-lg hover:border-blue-500 cursor-pointer bg-gray-900 transition-colors flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-500"></div>
          <span>WalletConnect</span>
        </div>
        <div className="w-4 h-4 rounded-full border border-gray-500"></div>
      </div>
    </div>

    <button className="w-full mt-8 py-4 bg-cyan-600 text-black font-bold font-mono rounded hover:bg-cyan-500 transition-colors">
      INITIATE_TRANSFER
    </button>
  </div>
);

// --- 7. The Neumorphic (Soft UI) ---
export const CheckoutNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-10 rounded-3xl max-w-md mx-auto">
    <h2 className="text-2xl font-bold text-gray-700 mb-8 text-center">Payment</h2>
    
    <div className="space-y-6">
      <div className="rounded-xl bg-[#e0e5ec] p-1 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
        <input type="text" placeholder="Card Number" className="w-full bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 px-4 py-2" />
      </div>
      
      <div className="flex gap-4">
        <div className="rounded-xl bg-[#e0e5ec] p-1 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] flex-1">
          <input type="text" placeholder="Expiry" className="w-full bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 px-4 py-2" />
        </div>
        <div className="rounded-xl bg-[#e0e5ec] p-1 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] w-24">
          <input type="text" placeholder="CVC" className="w-full bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 px-4 py-2" />
        </div>
      </div>

      <div className="flex justify-between items-center py-4 text-gray-600 font-bold">
        <span>Total</span>
        <span>$89.00</span>
      </div>

      <button className="w-full py-4 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] active:scale-95 transition-all flex items-center justify-center gap-2">
        <LockIcon className="w-4 h-4" /> Pay Now
      </button>
    </div>
  </div>
);

// --- 8. The Brutalist (Bold) ---
export const CheckoutBrutalist = () => (
  <div className="bg-yellow-400 p-8 border-4 border-black rounded-none max-w-2xl mx-auto shadow-[12px_12px_0_0_#000]">
    <div className="border-b-4 border-black pb-6 mb-6">
      <h2 className="text-5xl font-black uppercase">Checkout</h2>
    </div>
    
    <div className="bg-white border-4 border-black p-6 mb-6">
      <div className="flex justify-between font-bold text-xl mb-2">
        <span>ITEM_01</span>
        <span>$50.00</span>
      </div>
      <div className="flex justify-between font-bold text-xl">
        <span>ITEM_02</span>
        <span>$25.00</span>
      </div>
      <div className="h-4 bg-black my-4"></div>
      <div className="flex justify-between font-black text-3xl">
        <span>TOTAL</span>
        <span>$75.00</span>
      </div>
    </div>

    <form className="space-y-4">
      <input type="text" placeholder="CARD NUMBER" className="w-full p-4 border-4 border-black font-bold uppercase focus:bg-pink-300 outline-none placeholder-black/50" />
      <div className="flex gap-4">
        <input type="text" placeholder="MM/YY" className="w-full p-4 border-4 border-black font-bold uppercase focus:bg-pink-300 outline-none placeholder-black/50" />
        <input type="text" placeholder="CVC" className="w-full p-4 border-4 border-black font-bold uppercase focus:bg-pink-300 outline-none placeholder-black/50" />
      </div>
      <button className="w-full py-4 bg-black text-white font-black text-2xl uppercase hover:bg-white hover:text-black border-4 border-transparent hover:border-black transition-colors">
        Confirm Payment
      </button>
    </form>
  </div>
);

// --- 9. The Digital Goods (Download Focus) ---
export const CheckoutDigital = () => (
  <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
    <div className="bg-slate-900 text-white p-10 md:w-5/12 flex flex-col justify-between">
      <div>
        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">You are purchasing</div>
        <h2 className="text-3xl font-bold mb-4">Icon Pack Pro</h2>
        <ul className="space-y-2 text-slate-300 text-sm">
          <li>✓ 500+ Vector Icons</li>
          <li>✓ Figma & Sketch Files</li>
          <li>✓ Lifetime Updates</li>
        </ul>
      </div>
      <div className="mt-8 pt-8 border-t border-slate-700">
        <div className="text-4xl font-bold">$24</div>
        <div className="text-slate-400 text-sm">One-time payment</div>
      </div>
    </div>
    
    <div className="p-10 md:w-7/12">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Enter your email to get the files</h3>
      <form className="space-y-4">
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Email Address</label>
          <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 outline-none" placeholder="you@example.com" />
        </div>
        
        <div className="pt-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-700">Payment Method</span>
            <div className="flex gap-2">
               <div className="w-8 h-5 bg-gray-200 rounded"></div>
               <div className="w-8 h-5 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg bg-gray-50 flex items-center gap-3">
            <CardIcon />
            <input type="text" placeholder="Card number" className="bg-transparent outline-none w-full text-sm" />
          </div>
        </div>

        <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors mt-6">
          Pay & Download
        </button>
        <p className="text-xs text-gray-400 text-center mt-4 flex items-center justify-center gap-1">
          <LockIcon className="w-3 h-3"/> Secure checkout powered by Stripe
        </p>
      </form>
    </div>
  </div>
);

// --- 10. The Subscription (Toggle Plan) ---
export const CheckoutSubscription = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold mb-6">Payment Method</h2>
          {/* Simple Form */}
          <form className="space-y-4">
            <input type="text" placeholder="Name on card" className="w-full p-3 border rounded-lg bg-gray-50" />
            <input type="text" placeholder="Card number" className="w-full p-3 border rounded-lg bg-gray-50" />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="MM/YY" className="w-full p-3 border rounded-lg bg-gray-50" />
              <input type="text" placeholder="CVC" className="w-full p-3 border rounded-lg bg-gray-50" />
            </div>
            <button className="w-full py-4 bg-black text-white rounded-lg font-bold hover:bg-gray-800">
              Subscribe
            </button>
          </form>
        </div>

        <div className="w-full md:w-80 bg-gray-50 p-6 rounded-2xl h-fit border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">Subscription</h3>
          
          <div className="flex bg-white p-1 rounded-lg border border-gray-200 mb-6">
            <button 
              onClick={() => setIsAnnual(false)} 
              className={`flex-1 py-1 text-sm font-medium rounded-md transition-colors ${!isAnnual ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-500'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)} 
              className={`flex-1 py-1 text-sm font-medium rounded-md transition-colors ${isAnnual ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-500'}`}
            >
              Yearly
            </button>
          </div>

          <div className="flex justify-between items-end mb-2">
            <span className="font-medium text-gray-900">Pro Plan</span>
            <span className="font-bold text-xl">{isAnnual ? '$99' : '$9'}</span>
          </div>
          <div className="text-xs text-gray-500 mb-6 border-b border-gray-200 pb-6">
            {isAnnual ? 'Billed annually' : 'Billed monthly'}
          </div>
          
          <div className="flex justify-between font-bold text-gray-900">
            <span>Due Today</span>
            <span>{isAnnual ? '$99.00' : '$9.00'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Main Gallery Wrapper ---
const CheckoutGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-100 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Checkout Components</h1>
        <p className="text-slate-500">Secure, high-converting payment pages for various use cases.</p>
      </div>
      
      <div className="space-y-32 max-w-6xl mx-auto">
        
        <section className='box-shadow p-4 rounded-lg relative group/s'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/s:opacity-100 transition-opacity">
            <CopyButton
              jsxCode={`import React from 'react';

const CheckoutStandard = () => {
  const cartItems = [
    { id: 1, name: 'Nike Air Max', price: 120, size: '10', color: 'Red', qty: 1, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200' },
    { id: 2, name: 'Nike Air Max', price: 120, size: '10', color: 'Red', qty: 1, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200' }
  ];

  return (
    <div className="flex flex-col-reverse md:flex-row h-auto min-h-[600px] bg-white border border-gray-200 rounded-3xl overflow-hidden font-sans">
      {/* Left: Form */}
      <div className="w-full md:w-3/5 p-8 md:p-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-gray-900">Contact & Shipping</h2>
          <a href="#" className="text-sm text-blue-600 hover:underline">Login</a>
        </div>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email address</label>
            <input type="email" placeholder="email@example.com" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">First name</label>
              <input type="text" placeholder="John" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Last name</label>
              <input type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Address</label>
            <input type="text" placeholder="123 Main St" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">City</label>
              <input type="text" placeholder="New York" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">State</label>
              <input type="text" placeholder="NY" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">ZIP</label>
              <input type="text" placeholder="10001" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors mt-4">
            Continue to Payment
          </button>
        </form>
      </div>

      {/* Right: Summary */}
      <div className="w-full md:w-2/5 bg-gray-50 p-8 md:p-12 border-l border-gray-200">
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 items-center">
              <div className="w-16 h-16 bg-white border border-gray-200 rounded-lg p-2 relative">
                <img src={item.image} className="w-full h-full object-contain" alt={item.name} />
                <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">{item.qty}</span>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                <p className="text-xs text-gray-500">Size: {item.size} / {item.color}</p>
              </div>
              <div className="text-sm font-medium text-gray-900">$\${item.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 space-y-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Subtotal</span>
            <span className="font-medium text-gray-900">$240.00</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Shipping</span>
            <span className="font-medium text-gray-900">Calculated at next step</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-gray-900 pt-4 border-t border-gray-200">
            <span>Total</span>
            <span>$240.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutStandard;`}
              htmlCode={`<div class="checkout-container">
  <div class="checkout-layout">
    <!-- Left: Form -->
    <div class="form-section">
      <div class="form-header">
        <h2>Contact & Shipping</h2>
        <a href="#">Login</a>
      </div>
      
      <form class="checkout-form">
        <div class="input-group">
          <label>Email address</label>
          <input type="email" placeholder="email@example.com">
        </div>
        
        <div class="grid-2">
          <div class="input-group">
            <label>First name</label>
            <input type="text" placeholder="John">
          </div>
          <div class="input-group">
            <label>Last name</label>
            <input type="text" placeholder="Doe">
          </div>
        </div>
        
        <div class="input-group">
          <label>Address</label>
          <input type="text" placeholder="123 Main St">
        </div>
        
        <div class="grid-3">
          <div class="input-group">
            <label>City</label>
            <input type="text" placeholder="New York">
          </div>
          <div class="input-group">
            <label>State</label>
            <input type="text" placeholder="NY">
          </div>
          <div class="input-group">
            <label>ZIP</label>
            <input type="text" placeholder="10001">
          </div>
        </div>

        <button type="submit" class="primary-btn">Continue to Payment</button>
      </form>
    </div>

    <!-- Right: Summary -->
    <div class="summary-section">
      <div class="cart-items">
        <!-- Item 1 -->
        <div class="cart-item">
          <div class="item-image">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200" alt="Product">
            <span class="item-badge">1</span>
          </div>
          <div class="item-details">
            <h4>Nike Air Max</h4>
            <p>Size: 10 / Red</p>
          </div>
          <div class="item-price">$120.00</div>
        </div>
        <!-- Item 2 -->
        <div class="cart-item">
          <div class="item-image">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200" alt="Product">
            <span class="item-badge">1</span>
          </div>
          <div class="item-details">
            <h4>Nike Air Max</h4>
            <p>Size: 10 / Red</p>
          </div>
          <div class="item-price">$120.00</div>
        </div>
      </div>
      
      <div class="summary-totals">
        <div class="total-row">
          <span>Subtotal</span>
          <span>$240.00</span>
        </div>
        <div class="total-row">
          <span>Shipping</span>
          <span>Calculated at next step</span>
        </div>
        <div class="total-row grand-total">
          <span>Total</span>
          <span>$240.00</span>
        </div>
      </div>
    </div>
  </div>
</div>`}
              cssCode={`:root {
  --primary: #2563eb;
  --primary-hover: #1d4ed8;
  --bg-gray: #f9fafb;
  --border: #e5e7eb;
  --text-main: #111827;
  --text-muted: #6b7280;
}

.checkout-container {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 20px;
}

.checkout-layout {
  display: flex;
  flex-direction: column-reverse;
  max-width: 1100px;
  margin: 0 auto;
  background: white;
  border: 1px solid var(--border);
  border-radius: 24px;
  overflow: hidden;
}

@media (min-width: 768px) {
  .checkout-layout {
    flex-direction: row;
    min-height: 600px;
  }
}

.form-section {
  width: 100%;
  padding: 32px;
}

@media (min-width: 768px) {
  .form-section {
    width: 60%;
    padding: 48px;
  }
}

.summary-section {
  width: 100%;
  background: var(--bg-gray);
  padding: 32px;
  border-left: 1px solid var(--border);
}

@media (min-width: 768px) {
  .summary-section {
    width: 40%;
    padding: 48px;
  }
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.form-header h2 {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
}

.form-header a {
  font-size: 14px;
  color: var(--primary);
  text-decoration: none;
}

.checkout-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-group label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.input-group input {
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 16px;
  outline: none;
  transition: all 0.2s;
}

.input-group input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.grid-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}

.primary-btn {
  background: var(--primary);
  color: white;
  padding: 16px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 16px;
}

.primary-btn:hover {
  background: var(--primary-hover);
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 16px;
}

.item-image {
  width: 64px;
  height: 64px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 8px;
  position: relative;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.item-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #6b7280;
  color: white;
  font-size: 12px;
  font-weight: 700;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-details h4 {
  font-size: 14px;
  font-weight: 500;
  margin: 0;
}

.item-details p {
  font-size: 12px;
  color: var(--text-muted);
  margin: 4px 0 0;
}

.item-price {
  margin-left: auto;
  font-size: 14px;
  font-weight: 500;
}

.summary-totals {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.total-row {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: var(--text-muted);
}

.grand-total {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-main);
  padding-top: 16px;
  border-top: 1px solid var(--border);
}`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">01. Standard Split (E-com)</span>
          <CheckoutStandard />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/s'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/s:opacity-100 transition-opacity">
            <CopyButton
              jsxCode={`import React from 'react';

const ApplePayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M15.7 13.25c-.04 2.22 1.94 2.96 2.03 3-.02.06-.31 1.07-1.02 2.11-.63.89-1.29 1.78-2.32 1.8-1.01.02-1.34-.6-2.5-.6-1.17 0-1.54.58-2.52.62-1.01.04-1.78-1.01-2.42-1.94-1.32-1.9-2.33-5.38-.97-7.74.67-1.17 1.88-1.91 3.19-1.94 1.01-.03 1.96.67 2.57.67.61 0 1.76-.84 2.97-.71 1.01.11 1.77.41 2.36 1.03-2.11 1.28-1.77 4.38.63 5.1zM15.02 5.51c.54-.66.91-1.57.81-2.48-.87.04-1.93.58-2.56 1.32-.51.58-.96 1.51-.84 2.39.97.07 1.96-.46 2.59-1.23z"/></svg>
);

const CardIcon = () => (
  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
);

const CheckoutMinimal = () => (
  <div className="max-w-md mx-auto bg-white p-8 rounded-2xl border border-gray-100 shadow-sm font-sans">
    <div className="text-center mb-8">
      <div className="text-gray-500 text-sm uppercase tracking-wide mb-2">Total to pay</div>
      <div className="text-4xl font-bold text-gray-900">$49.00</div>
    </div>

    <div className="space-y-4 mb-8">
      <button className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-80 transition-opacity">
        <ApplePayIcon /> <span>Pay</span>
      </button>
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
        <div className="relative flex justify-center text-xs uppercase"><span className="px-2 bg-white text-gray-400 font-medium">Or pay with card</span></div>
      </div>
    </div>

    <form className="space-y-6">
      <div className="space-y-2">
        <label className="block text-xs font-bold text-gray-700 uppercase tracking-tight">Email</label>
        <input type="email" placeholder="you@example.com" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-black outline-none transition-all" />
      </div>
      <div className="space-y-2">
        <label className="block text-xs font-bold text-gray-700 uppercase tracking-tight">Card Details</label>
        <div className="flex items-center p-3 bg-gray-50 border border-gray-200 rounded-lg focus-within:bg-white focus-within:ring-2 focus-within:ring-black transition-all">
          <CardIcon />
          <input type="text" placeholder="Card number" className="ml-3 w-full bg-transparent outline-none text-gray-900" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <input type="text" placeholder="MM / YY" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-black outline-none transition-all" />
        </div>
        <div className="space-y-2">
          <input type="text" placeholder="CVC" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-black outline-none transition-all" />
        </div>
      </div>
      <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200/50">
        Pay $49.00
      </button>
    </form>
  </div>
);

export default CheckoutMinimal;`}
              htmlCode={`<div class="minimal-checkout">
  <div class="checkout-card">
    <div class="amount-header">
      <span class="label">Total to pay</span>
      <h2 class="price">$49.00</h2>
    </div>

    <div class="express-checkout">
      <button class="apple-pay-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M15.7 13.25c-.04 2.22 1.94 2.96 2.03 3-.02.06-.31 1.07-1.02 2.11-.63.89-1.29 1.78-2.32 1.8-1.01.02-1.34-.6-2.5-.6-1.17 0-1.54.58-2.52.62-1.01.04-1.78-1.01-2.42-1.94-1.32-1.9-2.33-5.38-.97-7.74.67-1.17 1.88-1.91 3.19-1.94 1.01-.03 1.96.67 2.57.67.61 0 1.76-.84 2.97-.71 1.01.11 1.77.41 2.36 1.03-2.11 1.28-1.77 4.38.63 5.1zM15.02 5.51c.54-.66.91-1.57.81-2.48-.87.04-1.93.58-2.56 1.32-.51.58-.96 1.51-.84 2.39.97.07 1.96-.46 2.59-1.23z"/></svg>
        <span>Pay</span>
      </button>
      
      <div class="divider">
        <hr>
        <span>Or pay with card</span>
      </div>
    </div>

    <form class="card-form">
      <div class="input-field">
        <label>Email</label>
        <input type="email" placeholder="you@example.com">
      </div>
      <div class="input-field">
        <label>Card Details</label>
        <div class="input-with-icon">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
          <input type="text" placeholder="Card number">
        </div>
      </div>
      <div class="form-row">
        <input type="text" placeholder="MM / YY">
        <input type="text" placeholder="CVC">
      </div>
      <button type="submit" class="pay-button">Pay $49.00</button>
    </form>
  </div>
</div>`}
              cssCode={`.minimal-checkout {
  font-family: system-ui, -apple-system, sans-serif;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
}

.checkout-card {
  width: 100%;
  max-width: 448px;
  background: white;
  padding: 32px;
  border-radius: 16px;
  border: 1px solid #f3f4f6;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.amount-header {
  text-align: center;
  margin-bottom: 32px;
}

.amount-header .label {
  color: #6b7280;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

.amount-header .price {
  font-size: 36px;
  font-weight: 700;
  color: #111827;
  margin: 8px 0 0;
}

.express-checkout {
  margin-bottom: 32px;
}

.apple-pay-btn {
  width: 100%;
  background: black;
  color: white;
  padding: 12px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.apple-pay-btn:hover {
  opacity: 0.8;
}

.divider {
  position: relative;
  margin: 32px 0;
  text-align: center;
}

.divider hr {
  border: none;
  border-top: 1px solid #e5e7eb;
}

.divider span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 0 12px;
  color: #9ca3af;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 500;
  white-space: nowrap;
}

.card-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.input-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.input-field label {
  font-size: 12px;
  font-weight: 700;
  color: #374151;
  text-transform: uppercase;
}

.input-field input {
  width: 100%;
  padding: 12px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
}

.input-with-icon {
  position: relative;
  display: flex;
  align-items: center;
}

.input-with-icon .icon {
  position: absolute;
  left: 12px;
  width: 20px;
  height: 20px;
  color: #9ca3af;
}

.input-with-icon input {
  padding-left: 44px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.pay-button {
  width: 100%;
  background: #2563eb;
  color: white;
  padding: 16px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.2);
}

.pay-button:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
}`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">02. Minimalist Express</span>
          <CheckoutMinimal />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/s'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/s:opacity-100 transition-opacity">
            <CopyButton
              jsxCode={`import React from 'react';

const CheckoutCardVisual = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center font-sans">
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Payment Details</h2>
        <form className="space-y-5">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Cardholder Name</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="John Doe" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Card Number</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="0000 0000 0000 0000" />
          </div>
          <div className="flex gap-4">
            <div className="space-y-1 flex-1">
              <label className="text-sm font-medium text-gray-700">Expiry</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="MM/YY" />
            </div>
            <div className="space-y-1 flex-1">
              <label className="text-sm font-medium text-gray-700">CVC</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="123" />
            </div>
          </div>
          <button className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100">
            Pay Now
          </button>
        </form>
      </div>

      <div className="w-full md:w-1/2 flex justify-center [perspective:1000px]">
        {/* Credit Card Mockup */}
        <div className="w-full max-w-sm h-56 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-6 text-white relative transform transition-transform hover:scale-105 hover:rotate-2">
          <div className="flex justify-between items-start mb-8">
            <div className="w-12 h-8 bg-yellow-500/20 rounded flex items-center justify-center">
               <div className="w-8 h-5 border border-yellow-500/50 rounded"></div>
            </div>
            <span className="font-mono text-xs opacity-50 tracking-widest">DEBIT</span>
          </div>
          <div className="font-mono text-2xl tracking-[0.2em] mb-6 drop-shadow-md">4242 4242 4242 4242</div>
          <div className="flex justify-between items-end">
            <div>
              <div className="text-[10px] opacity-70 uppercase tracking-widest mb-1">Card Holder</div>
              <div className="font-medium tracking-wide text-sm">JOHN DOE</div>
            </div>
            <div>
              <div className="text-[10px] opacity-70 uppercase tracking-widest mb-1">Expires</div>
              <div className="font-medium tracking-wide text-sm">12/25</div>
            </div>
          </div>
          <div className="absolute bottom-6 right-6">
             <div className="flex -space-x-3 opacity-90">
               <div className="w-10 h-10 bg-red-600 rounded-full blur-[0.5px]"></div>
               <div className="w-10 h-10 bg-yellow-500 rounded-full blur-[0.5px]"></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCardVisual;`}
              htmlCode={`<div class="card-visual-checkout">
  <div class="layout-wrapper">
    <div class="form-side">
      <h2 class="title">Payment Details</h2>
      <form class="payment-form">
        <div class="input-field">
          <label>Cardholder Name</label>
          <input type="text" placeholder="John Doe">
        </div>
        <div class="input-field">
          <label>Card Number</label>
          <input type="text" placeholder="0000 0000 0000 0000">
        </div>
        <div class="row">
          <div class="input-field">
            <label>Expiry</label>
            <input type="text" placeholder="MM/YY">
          </div>
          <div class="input-field">
            <label>CVC</label>
            <input type="text" placeholder="123">
          </div>
        </div>
        <button type="submit" class="pay-btn">Pay Now</button>
      </form>
    </div>

    <div class="visual-side">
      <div class="card-mockup">
        <div class="card-header">
          <div class="chip"></div>
          <span class="card-type">DEBIT</span>
        </div>
        <div class="card-number">4242 4242 4242 4242</div>
        <div class="card-footer">
          <div class="footer-item">
            <span class="label">Card Holder</span>
            <span class="value">JOHN DOE</span>
          </div>
          <div class="footer-item">
            <span class="label">Expires</span>
            <span class="value">12/25</span>
          </div>
        </div>
        <div class="brand-logo">
          <div class="circle red"></div>
          <div class="circle yellow"></div>
        </div>
      </div>
    </div>
  </div>
</div>`}
              cssCode={`.card-visual-checkout {
  font-family: system-ui, -apple-system, sans-serif;
  background: #f9fafb;
  padding: 40px;
  border-radius: 24px;
  border: 1px solid #e5e7eb;
}

.layout-wrapper {
  max-width: 896px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
}

@media (min-width: 768px) {
  .layout-wrapper {
    flex-direction: row;
  }
}

.form-side {
  flex: 1;
  width: 100%;
}

.form-side .title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #111827;
}

.payment-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.input-field label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.input-field input {
  padding: 10px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
}

.input-field input:focus {
  border-color: #4f46e5;
  box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.1);
}

.row {
  display: flex;
  gap: 16px;
}

.pay-btn {
  background: #4f46e5;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.1);
}

.pay-btn:hover {
  background: #4338ca;
}

.visual-side {
  flex: 1;
  display: flex;
  justify-content: center;
  perspective: 1000px;
}

.card-mockup {
  width: 100%;
  max-width: 350px;
  height: 210px;
  background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
  border-radius: 16px;
  padding: 24px;
  color: white;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.card-mockup:hover {
  transform: rotateY(10deg) rotateX(5deg) scale(1.02);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
}

.chip {
  width: 44px;
  height: 32px;
  background: rgba(234, 179, 8, 0.15);
  border: 1px solid rgba(234, 179, 8, 0.3);
  border-radius: 4px;
}

.card-type {
  font-family: monospace;
  font-size: 12px;
  opacity: 0.6;
  letter-spacing: 2px;
}

.card-number {
  font-family: monospace;
  font-size: 22px;
  letter-spacing: 4px;
  margin-bottom: 24px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.card-footer {
  display: flex;
  justify-content: space-between;
}

.footer-item {
  display: flex;
  flex-direction: column;
}

.footer-item .label {
  font-size: 9px;
  text-transform: uppercase;
  opacity: 0.6;
  letter-spacing: 1.5px;
  margin-bottom: 2px;
}

.footer-item .value {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
}

.brand-logo {
  position: absolute;
  bottom: 24px;
  right: 24px;
  display: flex;
}

.brand-logo .circle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  opacity: 0.9;
}

.brand-logo .red {
  background: #dc2626;
  margin-right: -12px;
}

.brand-logo .yellow {
  background: #f59e0b;
}`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">03. Visual Card</span>
          <CheckoutCardVisual />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/s'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/s:opacity-100 transition-opacity">
            <CopyButton
              jsxCode={`import React, { useState } from 'react';

const CheckoutWizard = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-xl overflow-hidden font-sans">
      <div className="bg-gray-50 px-8 py-4 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className={\`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold \${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}\`}>1</span>
          <span className={\`text-sm font-medium \${step >= 1 ? 'text-blue-600' : 'text-gray-500'}\`}>Shipping</span>
        </div>
        <div className="w-12 h-px bg-gray-300"></div>
        <div className="flex items-center gap-2">
          <span className={\`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold \${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}\`}>2</span>
          <span className={\`text-sm font-medium \${step >= 2 ? 'text-blue-600' : 'text-gray-500'}\`}>Payment</span>
        </div>
        <div className="w-12 h-px bg-gray-300"></div>
        <div className="flex items-center gap-2">
          <span className={\`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold \${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}\`}>3</span>
          <span className={\`text-sm font-medium \${step >= 3 ? 'text-blue-600' : 'text-gray-500'}\`}>Review</span>
        </div>
      </div>

      <div className="p-8 min-h-[350px] flex flex-col justify-center">
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Where should we send it?</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              <input type="text" placeholder="Address" className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="City" className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="ZIP Code" className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="flex justify-end pt-6">
              <button onClick={() => setStep(2)} className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">
                Next Step
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Payment Method</h3>
            <div className="space-y-3">
              <label className="p-4 border rounded-xl flex items-center gap-4 bg-blue-50 border-blue-200 cursor-pointer hover:bg-blue-100/50 transition-colors">
                <input type="radio" name="pay" checked readOnly className="w-5 h-5 text-blue-600 focus:ring-blue-500" />
                <div className="flex-1">
                  <div className="font-bold text-gray-900">Credit or Debit Card</div>
                  <div className="text-sm text-gray-500">Pay securely with Visa, Mastercard, or Amex</div>
                </div>
              </label>
              <label className="p-4 border rounded-xl flex items-center gap-4 border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                <input type="radio" name="pay" className="w-5 h-5 text-blue-600 focus:ring-blue-500" />
                <div className="flex-1">
                  <div className="font-bold text-gray-900">PayPal</div>
                  <div className="text-sm text-gray-500">You will be redirected to PayPal website</div>
                </div>
              </label>
            </div>
            <div className="flex justify-between pt-6">
              <button onClick={() => setStep(1)} className="text-gray-500 font-medium hover:text-gray-900 transition-colors">Back</button>
              <button onClick={() => setStep(3)} className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">
                Review Order
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Order Summary</h3>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 space-y-3">
              <div className="flex justify-between text-gray-600"><span>Items Total</span><span>$100.00</span></div>
              <div className="flex justify-between text-gray-600"><span>Shipping</span><span>$10.00</span></div>
              <div className="flex justify-between text-gray-600"><span>Tax</span><span>$5.00</span></div>
              <div className="flex justify-between font-bold text-xl text-gray-900 pt-4 border-t border-gray-200">
                <span>Grand Total</span>
                <span>$115.00</span>
              </div>
            </div>
            <div className="flex justify-between pt-6">
              <button onClick={() => setStep(2)} className="text-gray-500 font-medium hover:text-gray-900 transition-colors">Back</button>
              <button className="px-10 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-100">
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutWizard;`}
              htmlCode={`<div class="wizard-checkout">
  <!-- Progress Header -->
  <div class="progress-header">
    <div class="step active">
      <span class="num">1</span>
      <span class="label">Shipping</span>
    </div>
    <div class="line"></div>
    <div class="step">
      <span class="num">2</span>
      <span class="label">Payment</span>
    </div>
    <div class="line"></div>
    <div class="step">
      <span class="num">3</span>
      <span class="label">Review</span>
    </div>
  </div>

  <!-- Step 1: Shipping -->
  <div class="step-content" id="step-1">
    <h3>Where should we send it?</h3>
    <form class="wizard-form">
      <input type="text" placeholder="Full Name">
      <input type="text" placeholder="Address">
      <div class="grid-2">
        <input type="text" placeholder="City">
        <input type="text" placeholder="ZIP Code">
      </div>
      <div class="actions">
        <button type="button" class="next-btn">Next Step</button>
      </div>
    </form>
  </div>
</div>`}
              cssCode={`.wizard-checkout {
  max-width: 672px;
  margin: 0 auto;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  font-family: system-ui, -apple-system, sans-serif;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9fafb;
  padding: 16px 32px;
  border-bottom: 1px solid #e5e7eb;
}

.step {
  display: flex;
  align-items: center;
  gap: 8px;
}

.step .num {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #e5e7eb;
  color: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
}

.step.active .num {
  background: #2563eb;
  color: white;
}

.step .label {
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
}

.step.active .label {
  color: #2563eb;
}

.line {
  flex: 1;
  height: 1px;
  background: #d1d5db;
  margin: 0 16px;
}

.step-content {
  padding: 48px 32px;
  min-height: 350px;
}

.step-content h3 {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 24px;
}

.wizard-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.wizard-form input {
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: all 0.2s;
}

.wizard-form input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.actions {
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;
}

.next-btn {
  background: #2563eb;
  color: white;
  padding: 12px 32px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}

.next-btn:hover {
  background: #1d4ed8;
}`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">04. Multi-Step Wizard</span>
          <CheckoutWizard />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/s'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/s:opacity-100 transition-opacity">
            <CopyButton
              jsxCode={`import React from 'react';

const CheckoutGlass = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-[32px] overflow-hidden bg-gradient-to-br from-[#ff0080] via-[#7928ca] to-[#4c1d95] p-6 md:p-12 flex flex-col md:flex-row gap-10 font-sans shadow-2xl">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#fbbf24] rounded-full mix-blend-overlay filter blur-[100px] opacity-40 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#3b82f6] rounded-full mix-blend-overlay filter blur-[80px] opacity-30 translate-y-1/3 -translate-x-1/4"></div>
      
      {/* Left side: Summary Glass */}
      <div className="w-full md:w-1/3 text-white relative z-10">
        <h3 className="text-2xl font-bold mb-8">Order Summary</h3>
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl space-y-6 shadow-inner">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center border border-white/10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <div>
                <div className="font-bold">Pro Plan</div>
                <div className="text-xs text-white/60">Annual billing</div>
              </div>
            </div>
            <span className="font-bold">$29.00</span>
          </div>
          <div className="h-px bg-white/10"></div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm text-white/70"><span>Subtotal</span><span>$29.00</span></div>
            <div className="flex justify-between text-sm text-white/70"><span>Discount</span><span className="text-green-400">-$0.00</span></div>
          </div>
          <div className="h-px bg-white/10 pt-4"></div>
          <div className="flex justify-between font-black text-2xl tracking-tight">
            <span>Total</span>
            <span>$29.00</span>
          </div>
        </div>
      </div>

      {/* Right side: Form Glass */}
      <div className="w-full md:w-2/3 relative z-10">
        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 md:p-10 rounded-[32px] shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-8">Payment Details</h3>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70 ml-1">Email Address</label>
              <input type="email" placeholder="you@example.com" className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-white/40 focus:bg-white/20 focus:border-white/30 outline-none transition-all" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70 ml-1">Card Number</label>
              <div className="relative flex items-center">
                <input type="text" placeholder="0000 0000 0000 0000" className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-white/40 focus:bg-white/20 focus:border-white/30 outline-none transition-all pl-14" />
                <svg className="absolute left-6 w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70 ml-1">Expiry</label>
                <input type="text" placeholder="MM/YY" className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-white/40 focus:bg-white/20 focus:border-white/30 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70 ml-1">CVC</label>
                <input type="text" placeholder="123" className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-white/40 focus:bg-white/20 focus:border-white/30 outline-none transition-all" />
              </div>
            </div>

            <button className="w-full py-5 bg-white text-[#7928ca] font-black text-lg rounded-2xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all mt-6 uppercase tracking-wider">
              Pay $29.00 Securely
            </button>
            
            <p className="text-center text-white/50 text-xs mt-6 flex items-center justify-center gap-2">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/></svg>
              End-to-end encrypted payment
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutGlass;`}
              htmlCode={`<div class="glass-checkout-container">
  <div class="glass-layout">
    <!-- Blobs -->
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>

    <div class="glass-summary">
      <h3 class="glass-title">Order Summary</h3>
      <div class="glass-card summary-card">
        <div class="item-row">
          <div class="item-icon">📦</div>
          <div class="item-text">
            <strong>Pro Plan</strong>
            <small>Annual billing</small>
          </div>
          <span class="price">$29.00</span>
        </div>
        <hr class="glass-hr">
        <div class="total-row">
          <span>Total</span>
          <span class="grand-total">$29.00</span>
        </div>
      </div>
    </div>

    <div class="glass-form-side">
      <div class="glass-card form-card">
        <h3 class="glass-title">Payment Details</h3>
        <form class="glass-form">
          <div class="glass-input-group">
            <label>Email Address</label>
            <input type="email" placeholder="you@example.com">
          </div>
          <div class="glass-input-group">
            <label>Card Number</label>
            <input type="text" placeholder="0000 0000 0000 0000">
          </div>
          <div class="glass-row">
            <div class="glass-input-group">
              <label>Expiry</label>
              <input type="text" placeholder="MM/YY">
            </div>
            <div class="glass-input-group">
              <label>CVC</label>
              <input type="text" placeholder="123">
            </div>
          </div>
          <button type="submit" class="glass-btn">Pay $29.00 Securely</button>
        </form>
      </div>
    </div>
  </div>
</div>`}
              cssCode={`.glass-checkout-container {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 40px 20px;
}

.glass-layout {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  background: linear-gradient(135deg, #ff0080 0%, #7928ca 50%, #4c1d95 100%);
  border-radius: 32px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  overflow: hidden;
  color: white;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
}

@media (min-width: 768px) {
  .glass-layout {
    flex-direction: row;
  }
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
  z-index: 0;
}

.blob-1 {
  width: 400px;
  height: 400px;
  background: #fbbf24;
  top: -200px;
  right: -100px;
}

.blob-2 {
  width: 300px;
  height: 300px;
  background: #3b82f6;
  bottom: -150px;
  left: -100px;
}

.glass-summary, .glass-form-side {
  position: relative;
  z-index: 1;
  flex: 1;
}

.glass-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 32px;
}

.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 32px;
}

.item-row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.item-icon {
  width: 48px;
  height: 48px;
  background: rgba(255,255,255,0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.item-text strong {
  display: block;
}

.item-text small {
  opacity: 0.6;
}

.price {
  margin-left: auto;
  font-weight: 700;
}

.glass-hr {
  border: none;
  height: 1px;
  background: rgba(255,255,255,0.1);
  margin: 24px 0;
}

.total-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.grand-total {
  font-size: 28px;
  font-weight: 900;
}

.glass-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.glass-input-group label {
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
  opacity: 0.8;
}

.glass-input-group input {
  width: 100%;
  padding: 16px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  color: white;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
}

.glass-row {
  display: flex;
  gap: 16px;
}

.glass-btn {
  width: 100%;
  padding: 20px;
  background: white;
  color: #7928ca;
  border: none;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  margin-top: 12px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">05. Glassmorphism</span>
          <CheckoutGlass />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/s'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/s:opacity-100 transition-opacity">
            <CopyButton
              jsxCode={`import React from 'react';

const CheckoutCrypto = () => {
  const wallets = [
    { name: 'MetaMask', icon: '🦊', color: 'from-orange-500 to-yellow-500' },
    { name: 'WalletConnect', icon: '🔗', color: 'bg-blue-500' },
    { name: 'Coinbase Wallet', icon: '🔵', color: 'bg-indigo-600' }
  ];

  return (
    <div className="bg-[#0a0a0a] p-8 md:p-10 rounded-[32px] border border-gray-800 text-white max-w-lg mx-auto font-mono shadow-2xl relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"></div>
      
      <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-800">
        <h2 className="text-xl font-bold tracking-tighter text-cyan-400 flex items-center gap-2">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
          PAYMENT_GATEWAY_V2
        </h2>
        <span className="px-3 py-1 bg-green-900/30 text-green-400 text-[10px] font-bold rounded-full border border-green-400/20 uppercase tracking-widest">
          Secure_Link
        </span>
      </div>

      <div className="mb-10 bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
        <div className="text-gray-500 text-xs mb-2 uppercase tracking-widest">Requested Amount</div>
        <div className="text-4xl font-black tracking-tight">
          0.45 <span className="text-cyan-400">ETH</span>
        </div>
        <div className="text-sm text-gray-500 mt-1 font-sans">
          ≈ $1,240.50 USD <span className="text-[10px] ml-2 text-gray-700">(1 ETH = $2,756.67)</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-[10px] text-gray-600 uppercase tracking-[0.3em] mb-4 ml-1">Select Wallet</div>
        {wallets.map((wallet) => (
          <div key={wallet.name} className="group p-4 border border-gray-800 rounded-2xl hover:border-cyan-500/50 hover:bg-cyan-500/5 cursor-pointer transition-all flex justify-between items-center bg-gray-900/30">
            <div className="flex items-center gap-4">
              <div className={\`w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br \${wallet.color} shadow-lg shadow-black/20\`}>
                {wallet.icon}
              </div>
              <span className="font-bold group-hover:text-cyan-400 transition-colors">{wallet.name}</span>
            </div>
            <div className="w-6 h-6 rounded-full border-2 border-gray-700 group-hover:border-cyan-400 flex items-center justify-center transition-all">
              <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-10 py-5 bg-cyan-500 text-black font-black text-lg rounded-2xl hover:bg-cyan-400 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-xl shadow-cyan-500/20 uppercase tracking-widest">
        Confirm & Pay
      </button>
      
      <div className="mt-8 flex justify-center gap-6 text-[10px] text-gray-600 uppercase tracking-widest">
        <span>Gas: ~21,000</span>
        <span>Est: 30s</span>
      </div>
    </div>
  );
};

export default CheckoutCrypto;`}
              htmlCode={`<div class="crypto-checkout">
  <div class="glow"></div>
  
  <header class="crypto-header">
    <h2 class="gateway-title">PAYMENT_GATEWAY_V2</h2>
    <span class="status-badge">Secure_Link</span>
  </header>

  <div class="amount-card">
    <span class="amount-label">Requested Amount</span>
    <div class="amount-value">
      0.45 <span class="currency">ETH</span>
    </div>
    <div class="fiat-value">≈ $1,240.50 USD</div>
  </div>

  <div class="wallet-list">
    <label class="section-label">Select Wallet</label>
    
    <div class="wallet-item">
      <div class="wallet-icon metamask">🦊</div>
      <span class="wallet-name">MetaMask</span>
      <div class="wallet-radio"></div>
    </div>
    
    <div class="wallet-item">
      <div class="wallet-icon walletconnect">🔗</div>
      <span class="wallet-name">WalletConnect</span>
      <div class="wallet-radio"></div>
    </div>
  </div>

  <button class="pay-btn">Confirm & Pay</button>

  <footer class="crypto-footer">
    <span>Gas: ~21,000</span>
    <span>Est: 30s</span>
  </footer>
</div>`}
              cssCode={`.crypto-checkout {
  background: #0a0a0a;
  padding: 40px;
  border-radius: 32px;
  border: 1px solid #1f2937;
  color: white;
  max-width: 448px;
  margin: 0 auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
}

.glow {
  position: absolute;
  top: -100px;
  left: -100px;
  width: 250px;
  height: 250px;
  background: rgba(34, 211, 238, 0.1);
  filter: blur(80px);
  border-radius: 50%;
}

.crypto-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid #1f2937;
}

.gateway-title {
  font-size: 18px;
  color: #22d3ee;
  margin: 0;
  letter-spacing: -1px;
}

.status-badge {
  font-size: 10px;
  padding: 4px 12px;
  background: rgba(5, 46, 22, 0.3);
  color: #4ade80;
  border: 1px solid rgba(74, 222, 128, 0.2);
  border-radius: 100px;
  text-transform: uppercase;
}

.amount-card {
  background: rgba(17, 24, 39, 0.5);
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #1f2937;
  margin-bottom: 40px;
}

.amount-label {
  font-size: 12px;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 8px;
}

.amount-value {
  font-size: 32px;
  font-weight: 900;
}

.currency {
  color: #22d3ee;
}

.fiat-value {
  font-family: system-ui;
  font-size: 14px;
  color: #4b5563;
  margin-top: 4px;
}

.section-label {
  font-size: 10px;
  color: #4b5563;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 16px;
  display: block;
}

.wallet-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: rgba(17, 24, 39, 0.3);
  border: 1px solid #1f2937;
  border-radius: 16px;
  cursor: pointer;
  margin-bottom: 12px;
  transition: all 0.2s;
}

.wallet-item:hover {
  border-color: rgba(34, 211, 238, 0.3);
  background: rgba(34, 211, 238, 0.05);
}

.wallet-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background: #111827;
}

.wallet-name {
  font-weight: 700;
}

.wallet-radio {
  margin-left: auto;
  width: 20px;
  height: 20px;
  border: 2px solid #374151;
  border-radius: 50%;
  position: relative;
}

.wallet-item:hover .wallet-radio {
  border-color: #22d3ee;
}

.pay-btn {
  width: 100%;
  margin-top: 32px;
  padding: 20px;
  background: #06b6d4;
  color: #000;
  border: none;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 10px 20px rgba(6, 182, 212, 0.2);
}

.pay-btn:hover {
  background: #22d3ee;
  transform: translateY(-2px);
}

.crypto-footer {
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 24px;
  font-size: 10px;
  color: #4b5563;
  text-transform: uppercase;
  letter-spacing: 2px;
}`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">06. Crypto / Web3</span>
          <CheckoutCrypto />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/s'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/s:opacity-100 transition-opacity">
            <CopyButton
              jsxCode={`import React from 'react';

const CheckoutNeumorphic = () => {
  return (
    <div className="bg-[#e0e5ec] p-10 md:p-14 rounded-[50px] max-w-2xl mx-auto font-sans text-gray-600 shadow-[20px_20px_60px_#bec3c9,-20px_-20px_60px_#ffffff]">
      <h2 className="text-3xl font-black text-center mb-12 text-gray-700 tracking-tight">Complete Checkout</h2>
      
      <form className="space-y-10">
        <div className="space-y-4">
          <label className="text-xs font-bold uppercase tracking-widest ml-4 text-gray-500">Shipping Info</label>
          <input 
            type="text" 
            placeholder="Address" 
            className="w-full bg-[#e0e5ec] p-5 rounded-2xl shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] outline-none border-none focus:text-blue-500 transition-all placeholder-gray-400" 
          />
        </div>

        <div className="space-y-4">
          <label className="text-xs font-bold uppercase tracking-widest ml-4 text-gray-500">Card Details</label>
          <div className="relative">
             <input 
              type="text" 
              placeholder="0000 0000 0000 0000" 
              className="w-full bg-[#e0e5ec] p-5 rounded-2xl shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] outline-none border-none focus:text-blue-500 transition-all placeholder-gray-400" 
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <input 
              type="text" 
              placeholder="MM/YY" 
              className="bg-[#e0e5ec] p-5 rounded-2xl shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] outline-none border-none focus:text-blue-500 transition-all placeholder-gray-400" 
            />
            <input 
              type="text" 
              placeholder="CVC" 
              className="bg-[#e0e5ec] p-5 rounded-2xl shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] outline-none border-none focus:text-blue-500 transition-all placeholder-gray-400" 
            />
          </div>
        </div>

        <div className="pt-6">
          <button className="w-full py-5 rounded-2xl bg-[#e0e5ec] font-bold text-gray-700 shadow-[6px_6px_12px_#bec3c9,-6px_-6px_12px_#ffffff] hover:shadow-[2px_2px_5px_#bec3c9,-2px_-2px_5px_#ffffff] active:shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff] transition-all transform hover:scale-[0.99]">
            Pay $128.00
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutNeumorphic;`}
              htmlCode={`<div class="neumorphic-checkout">
  <h2>Complete Checkout</h2>
  
  <form>
    <div class="input-group">
      <label>Shipping Info</label>
      <input type="text" placeholder="Address" class="neu-input">
    </div>

    <div class="input-group">
      <label>Card Details</label>
      <input type="text" placeholder="0000 0000 0000 0000" class="neu-input">
      <div class="row">
        <input type="text" placeholder="MM/YY" class="neu-input">
        <input type="text" placeholder="CVC" class="neu-input">
      </div>
    </div>

    <button type="submit" class="neu-btn">Pay $128.00</button>
  </form>
</div>`}
              cssCode={`.neumorphic-checkout {
  background: #e0e5ec;
  padding: 48px;
  border-radius: 40px;
  max-width: 600px;
  margin: 0 auto;
  font-family: system-ui, sans-serif;
  box-shadow: 20px 20px 60px #bec3c9, -20px -20px 60px #ffffff;
  color: #4a5568;
}

.neumorphic-checkout h2 {
  text-align: center;
  margin-bottom: 40px;
  color: #2d3748;
}

form {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.input-group label {
  display: block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px;
  margin-left: 12px;
  color: #718096;
}

.neu-input {
  width: 100%;
  background: #e0e5ec;
  padding: 20px;
  border-radius: 16px;
  border: none;
  outline: none;
  box-shadow: inset 6px 6px 12px #bec3c9, inset -6px -6px 12px #ffffff;
  box-sizing: border-box;
  font-size: 16px;
  color: #4a5568;
  transition: all 0.2s;
}

.neu-input:focus {
  color: #3182ce;
}

.row {
  display: flex;
  gap: 24px;
  margin-top: 24px;
}

.neu-btn {
  width: 100%;
  padding: 20px;
  background: #e0e5ec;
  border-radius: 16px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  color: #2d3748;
  cursor: pointer;
  box-shadow: 6px 6px 12px #bec3c9, -6px -6px 12px #ffffff;
  transition: all 0.2s;
}

.neu-btn:hover {
  box-shadow: 2px 2px 5px #bec3c9, -2px -2px 5px #ffffff;
  transform: scale(0.99);
}

.neu-btn:active {
  box-shadow: inset 4px 4px 8px #bec3c9, inset -4px -4px 8px #ffffff;
}`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">07. Neumorphic Depth</span>
          <CheckoutNeumorphic />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/s'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/s:opacity-100 transition-opacity">
            <CopyButton
              jsxCode={`import React from 'react';

const CheckoutBrutalist = () => {
  return (
    <div className="bg-[#fff200] p-8 md:p-12 border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-xl mx-auto font-black font-mono">
      <h2 className="text-4xl uppercase mb-10 border-b-[4px] border-black pb-4 italic tracking-tighter">
        Finalize Order_
      </h2>
      
      <form className="space-y-8">
        <div className="space-y-2">
          <label className="text-xl uppercase">Delivery_Address</label>
          <input 
            type="text" 
            className="w-full bg-white border-[4px] border-black p-4 text-xl outline-none focus:bg-pink-300 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" 
            placeholder="TYPE_HERE..." 
          />
        </div>

        <div className="space-y-2">
          <label className="text-xl uppercase">Payment_Info</label>
          <input 
            type="text" 
            className="w-full bg-white border-[4px] border-black p-4 text-xl outline-none focus:bg-cyan-300 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" 
            placeholder="CARD_NUMBER" 
          />
          <div className="grid grid-cols-2 gap-6 mt-4">
            <input 
              type="text" 
              className="bg-white border-[4px] border-black p-4 text-xl outline-none focus:bg-green-300 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" 
              placeholder="EXP_DATE" 
            />
            <input 
              type="text" 
              className="bg-white border-[4px] border-black p-4 text-xl outline-none focus:bg-orange-300 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" 
              placeholder="CVC_CODE" 
            />
          </div>
        </div>

        <div className="pt-4">
          <button className="w-full bg-[#ff00ff] border-[4px] border-black p-6 text-3xl uppercase italic shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:bg-white">
            Pay Now!!
          </button>
        </div>
      </form>
      
      <div className="mt-8 text-sm uppercase flex justify-between opacity-50">
        <span>#Secure_Connection</span>
        <span>#No_Refunds</span>
      </div>
    </div>
  );
};

export default CheckoutBrutalist;`}
              htmlCode={`<div class="brutalist-checkout">
  <h2 class="title">Finalize Order_</h2>
  
  <form>
    <div class="field">
      <label>Delivery_Address</label>
      <input type="text" placeholder="TYPE_HERE..." class="brutalist-input addr">
    </div>

    <div class="field">
      <label>Payment_Info</label>
      <input type="text" placeholder="CARD_NUMBER" class="brutalist-input card">
      <div class="row">
        <input type="text" placeholder="EXP_DATE" class="brutalist-input exp">
        <input type="text" placeholder="CVC_CODE" class="brutalist-input cvc">
      </div>
    </div>

    <button type="submit" class="brutalist-btn">Pay Now!!</button>
  </form>
</div>`}
              cssCode={`.brutalist-checkout {
  background: #fff200;
  padding: 40px;
  border: 4px solid black;
  box-shadow: 8px 8px 0px 0px black;
  max-width: 500px;
  margin: 0 auto;
  font-family: 'Courier New', Courier, monospace;
}

.title {
  font-size: 36px;
  font-weight: 900;
  text-transform: uppercase;
  font-style: italic;
  border-bottom: 4px solid black;
  padding-bottom: 16px;
  margin-bottom: 32px;
}

.field {
  margin-bottom: 24px;
}

.field label {
  display: block;
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.brutalist-input {
  width: 100%;
  background: white;
  border: 4px solid black;
  padding: 16px;
  font-size: 18px;
  font-weight: 900;
  outline: none;
  box-shadow: 4px 4px 0px 0px black;
  box-sizing: border-box;
}

.addr:focus { background: #ffb8fb; }
.card:focus { background: #b8ffff; }
.exp:focus { background: #b8ffb8; }
.cvc:focus { background: #ffdcb8; }

.row {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}

.brutalist-btn {
  width: 100%;
  background: #ff00ff;
  border: 4px solid black;
  padding: 24px;
  font-size: 28px;
  font-weight: 900;
  text-transform: uppercase;
  font-style: italic;
  box-shadow: 6px 6px 0px 0px black;
  cursor: pointer;
  margin-top: 16px;
}

.brutalist-btn:hover {
  transform: translate(4px, 4px);
  box-shadow: 0px 0px 0px 0px black;
}

.brutalist-btn:active {
  background: white;
}`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">08. Neo-Brutalism</span>
          <CheckoutBrutalist />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/s'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/s:opacity-100 transition-opacity">
            <CopyButton
              jsxCode={`import React from 'react';

const CheckoutDigital = () => {
  return (
    <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] border border-gray-100 max-w-4xl mx-auto flex flex-col md:flex-row gap-12 font-sans">
      <div className="w-full md:w-1/2">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
          </div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">Checkout</h2>
        </div>

        <form className="space-y-6">
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Account</label>
            <input type="email" placeholder="email@example.com" className="w-full bg-gray-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-indigo-600 outline-none text-gray-900 transition-all" />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Payment Method</label>
            <div className="grid grid-cols-3 gap-3">
              <button type="button" className="p-3 border-2 border-indigo-600 rounded-xl bg-indigo-50 text-indigo-600 flex justify-center items-center">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
              </button>
              <button type="button" className="p-3 border-2 border-gray-100 rounded-xl hover:bg-gray-50 flex justify-center items-center transition-colors">
                <svg width="24" height="24" fill="#6B7280" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
              </button>
              <button type="button" className="p-3 border-2 border-gray-100 rounded-xl hover:bg-gray-50 flex justify-center items-center transition-colors">
                <svg width="24" height="24" fill="#6B7280" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg>
              </button>
            </div>
          </div>

          <button className="w-full py-5 bg-indigo-600 text-white font-black text-lg rounded-2xl shadow-xl shadow-indigo-100 hover:scale-[1.01] active:scale-[0.99] transition-all">
            Unlock Lifetime Access
          </button>
        </form>
      </div>

      <div className="w-full md:w-1/2 bg-gray-50/50 rounded-[32px] p-8 border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Items</h3>
        <div className="space-y-4">
          <div className="flex gap-4 items-center">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-xl">
              ⚡
            </div>
            <div className="flex-1">
              <div className="font-bold">UI Kit Bundle</div>
              <div className="text-xs text-gray-400">Includes 500+ components</div>
            </div>
            <span className="font-bold">$49</span>
          </div>
          <div className="pt-6 border-t border-gray-100 space-y-3">
             <div className="flex justify-between text-sm text-gray-500"><span>Tax</span><span>$0.00</span></div>
             <div className="flex justify-between font-black text-2xl pt-2"><span>Total</span><span>$49.00</span></div>
          </div>
        </div>
        <div className="mt-8 p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100">
          <p className="text-xs text-indigo-600/80 leading-relaxed font-medium">
            * Instant digital delivery to your account after payment. No physical shipping required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDigital;`}
              htmlCode={`<div class="digital-checkout-container">
  <div class="digital-layout">
    <div class="form-side">
      <div class="header">
        <div class="logo">✦</div>
        <h2>Checkout</h2>
      </div>

      <form class="digital-form">
        <div class="field">
          <label>Account</label>
          <input type="email" placeholder="email@example.com">
        </div>

        <div class="field">
          <label>Payment Method</label>
          <div class="method-grid">
            <div class="method active">Card</div>
            <div class="method">PayPal</div>
            <div class="method">Crypto</div>
          </div>
        </div>

        <button type="submit" class="unlock-btn">Unlock Lifetime Access</button>
      </form>
    </div>

    <div class="summary-side">
      <h3>Items</h3>
      <div class="digital-item">
        <div class="item-visual">⚡</div>
        <div class="item-info">
          <strong>UI Kit Bundle</strong>
          <small>500+ components</small>
        </div>
        <span class="price">$49</span>
      </div>
      <div class="summary-divider"></div>
      <div class="grand-total-row">
        <span>Total</span>
        <strong>$49.00</strong>
      </div>
      <div class="notice">
        * Instant digital delivery after payment.
      </div>
    </div>
  </div>
</div>`}
              cssCode={`.digital-checkout-container {
  font-family: 'Inter', system-ui, sans-serif;
  padding: 40px 20px;
}

.digital-layout {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 40px;
  box-shadow: 0 32px 64px -15px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #f3f4f6;
}

@media (min-width: 768px) {
  .digital-layout {
    flex-direction: row;
  }
}

.form-side {
  flex: 1;
  padding: 48px;
}

.header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
}

.logo {
  width: 40px;
  height: 40px;
  background: #4f46e5;
  border-radius: 12px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.header h2 {
  font-size: 24px;
  font-weight: 900;
  margin: 0;
}

.field {
  margin-bottom: 24px;
}

.field label {
  display: block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #9ca3af;
  margin-bottom: 8px;
}

.field input {
  width: 100%;
  padding: 16px;
  background: #f9fafb;
  border: none;
  border-radius: 16px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
}

.method-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
}

.method {
  padding: 12px;
  border: 2px solid #f3f4f6;
  border-radius: 12px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: #6b7280;
  cursor: pointer;
}

.method.active {
  border-color: #4f46e5;
  background: #eef2ff;
  color: #4f46e5;
}

.unlock-btn {
  width: 100%;
  padding: 20px;
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(79, 70, 229, 0.2);
  margin-top: 16px;
}

.summary-side {
  width: 100%;
  background: #fafafa;
  padding: 48px;
  border-left: 1px solid #f3f4f6;
}

@media (min-width: 768px) {
  .summary-side {
    width: 380px;
  }
}

.digital-item {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.item-visual {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.item-info strong {
  display: block;
}

.item-info small {
  color: #9ca3af;
}

.summary-divider {
  height: 1px;
  background: #eee;
  margin: 24px 0;
}

.grand-total-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
}

.notice {
  margin-top: 32px;
  padding: 16px;
  background: #eef2ff;
  border-radius: 16px;
  font-size: 12px;
  color: #4f46e5;
  line-height: 1.5;
}`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">09. Digital Marketplace</span>
          <CheckoutDigital />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/s'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/s:opacity-100 transition-opacity">
            <CopyButton
              jsxCode={`import React from 'react';

const CheckoutSubscription = () => {
  return (
    <div className="bg-white max-w-5xl mx-auto rounded-[40px] overflow-hidden border border-gray-100 shadow-2xl flex flex-col md:flex-row font-sans">
      {/* Left: Summary */}
      <div className="w-full md:w-5/12 bg-indigo-600 p-10 md:p-14 text-white">
        <h2 className="text-3xl font-black mb-10 tracking-tight">Your Plan_</h2>
        
        <div className="bg-white/10 rounded-3xl p-8 border border-white/20 mb-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="text-sm text-white/60 uppercase font-bold tracking-widest mb-1">Scale Plan</div>
              <div className="text-4xl font-black">$79<span className="text-lg opacity-60">/mo</span></div>
            </div>
            <span className="bg-white text-indigo-600 px-3 py-1 rounded-full text-xs font-bold">Recommended</span>
          </div>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-indigo-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              Unlimited Projects
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-indigo-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              Priority Support
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-indigo-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              Custom Domains
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4 p-6 bg-black/10 rounded-2xl border border-white/5">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">🛡️</div>
          <p className="text-xs text-white/70 leading-relaxed">
            30-day money back guarantee. Cancel anytime with one click from your dashboard.
          </p>
        </div>
      </div>

      {/* Right: Payment */}
      <div className="w-full md:w-7/12 p-10 md:p-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Payment Method</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <button type="button" className="p-4 border-2 border-indigo-600 rounded-2xl bg-indigo-50 flex flex-col items-center gap-2 group transition-all">
              <span className="text-2xl">💳</span>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Card</span>
            </button>
            <button type="button" className="p-4 border-2 border-gray-100 rounded-2xl hover:border-gray-200 flex flex-col items-center gap-2 group transition-all">
              <span className="text-2xl opacity-40 group-hover:opacity-100">🅿️</span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-gray-600">PayPal</span>
            </button>
          </div>

          <div className="space-y-4 pt-4">
             <div className="relative">
               <input type="text" placeholder="Card Number" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none text-gray-900" />
             </div>
             <div className="grid grid-cols-2 gap-4">
               <input type="text" placeholder="MM / YY" className="p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none text-gray-900" />
               <input type="text" placeholder="CVC" className="p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none text-gray-900" />
             </div>
          </div>

          <div className="pt-8">
            <button className="w-full py-5 bg-gray-900 text-white font-black text-xl rounded-2xl hover:bg-black hover:scale-[1.01] active:scale-[0.99] transition-all shadow-2xl">
              Start Scaling Now
            </button>
            <p className="text-center text-gray-400 text-[10px] mt-6 uppercase font-bold tracking-[0.2em]">
              Secure SSL Encryption Powered by Stripe
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutSubscription;`}
              htmlCode={`<div class="subscription-checkout">
  <div class="summary-col">
    <h2>Your Plan_</h2>
    <div class="plan-card">
      <div class="plan-header">
        <div>
          <small>Scale Plan</small>
          <h3>$79<span>/mo</span></h3>
        </div>
        <div class="badge">Recommended</div>
      </div>
      <ul class="features">
        <li>Unlimited Projects</li>
        <li>Priority Support</li>
        <li>Custom Domains</li>
      </ul>
    </div>
    <div class="guarantee">
      🛡️ 30-day money back guarantee.
    </div>
  </div>

  <div class="payment-col">
    <h2>Payment Method</h2>
    <div class="methods">
      <div class="method active">Card</div>
      <div class="method">PayPal</div>
    </div>
    <form>
      <input type="text" placeholder="Card Number">
      <div class="row">
        <input type="text" placeholder="MM / YY">
        <input type="text" placeholder="CVC">
      </div>
      <button type="submit">Start Scaling Now</button>
    </form>
    <div class="footer">Secure SSL Encryption</div>
  </div>
</div>`}
              cssCode={`.subscription-checkout {
  font-family: 'Inter', sans-serif;
  max-width: 1000px;
  margin: 0 auto;
  background: white;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 40px 100px -20px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .subscription-checkout {
    flex-direction: row;
  }
}

.summary-col {
  width: 100%;
  background: #4f46e5;
  color: white;
  padding: 48px;
}

@media (min-width: 768px) {
  .summary-col {
    width: 40%;
  }
}

.summary-col h2 {
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 32px;
}

.plan-card {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 24px;
  padding: 32px;
}

.plan-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
}

.plan-header h3 {
  font-size: 36px;
  font-weight: 900;
  margin: 4px 0 0;
}

.plan-header h3 span {
  font-size: 16px;
  opacity: 0.6;
}

.badge {
  background: white;
  color: #4f46e5;
  font-size: 10px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 100px;
  text-transform: uppercase;
}

.features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features li {
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 500;
}

.guarantee {
  margin-top: 32px;
  padding: 20px;
  background: rgba(0,0,0,0.1);
  border-radius: 16px;
  font-size: 12px;
  opacity: 0.8;
}

.payment-col {
  flex: 1;
  padding: 48px;
}

.payment-col h2 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 32px;
}

.methods {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 32px;
}

.method {
  padding: 16px;
  border: 2px solid #f3f4f6;
  border-radius: 16px;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
}

.method.active {
  border-color: #4f46e5;
  background: #eef2ff;
  color: #4f46e5;
}

form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

input {
  width: 100%;
  padding: 16px;
  background: #f9fafb;
  border: none;
  border-radius: 16px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
}

.row {
  display: flex;
  gap: 16px;
}

button {
  width: 100%;
  padding: 20px;
  background: #111827;
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
  margin-top: 24px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.footer {
  text-align: center;
  margin-top: 24px;
  font-size: 10px;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
}`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">10. SaaS Subscription</span>
          <CheckoutSubscription />
        </section>

      </div>
    </div>
  );
};

export default CheckoutGallery;