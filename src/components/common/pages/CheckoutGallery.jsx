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
        
        <section className='box-shadow p-4 rounded-lg relative group/chec'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/chec:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="flex flex-col-reverse md:flex-row h-auto min-h-[600px] bg-white border border-gray-200 rounded-3xl overflow-hidden">
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
            <div className="text-sm font-medium text-gray-900">\$120.00</div>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-200 mt-8 pt-6 space-y-2">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          <span>\$240.00</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Shipping</span>
          <span>Calculated at next step</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-gray-900 pt-4">
          <span>Total</span>
          <span>\$240.00</span>
        </div>
      </div>
    </div>
  </div>`} htmlCode={`<div class="flex flex-col-reverse md:flex-row h-auto min-h-[600px] bg-white border border-gray-200 rounded-3xl overflow-hidden">
    ...
    <div class="w-full md:w-3/5 p-8 md:p-12">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-xl font-bold text-gray-900">Contact & Shipping</h2>
        <a href="#" class="text-sm text-blue-600 hover:underline">Login</a>
      </div>
      
      <form class="space-y-6">
        <input type="email" placeholder="Email address" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
        
        <div class="grid grid-cols-2 gap-4">
          <input type="text" placeholder="First name" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
          <input type="text" placeholder="Last name" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>
        
        <input type="text" placeholder="Address" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
        
        <div class="grid grid-cols-3 gap-4">
          <input type="text" placeholder="City" class="col-span-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
          <input type="text" placeholder="State" class="col-span-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
          <input type="text" placeholder="ZIP" class="col-span-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>

        <button class="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors mt-4">
          Continue to Payment
        </button>
      </form>
    </div>

    ...
    <div class="w-full md:w-2/5 bg-gray-50 p-8 md:p-12 border-l border-gray-200">
      <div class="space-y-6">
        <!-- Mapping Start -->
(
          <div key=... class="flex gap-4 items-center">
            <div class="w-16 h-16 bg-white border border-gray-200 rounded-lg p-2 relative">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200" class="w-full h-full object-contain" alt="Product" />
              <span class="absolute -top-2 -right-2 bg-gray-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">1</span>
            </div>
            <div class="flex-1">
              <h4 class="text-sm font-medium text-gray-900">Nike Air Max</h4>
              <p class="text-xs text-gray-500">Size: 10 / Red</p>
            </div>
            <div class="text-sm font-medium text-gray-900">\$120.00</div>
          </div>
        ))}
      </div>
      
      <div class="border-t border-gray-200 mt-8 pt-6 space-y-2">
        <div class="flex justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          <span>\$240.00</span>
        </div>
        <div class="flex justify-between text-sm text-gray-600">
          <span>Shipping</span>
          <span>Calculated at next step</span>
        </div>
        <div class="flex justify-between text-lg font-bold text-gray-900 pt-4">
          <span>Total</span>
          <span>\$240.00</span>
        </div>
      </div>
    </div>
  </div>`} cssCode={`/* CheckoutStandard Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #2563eb;\n  background-color: #6b7280;\n  background-color: #f9fafb;\n  background-color: #ffffff;\n  border-color: #e5e7eb;\n  border-radius: 0.5rem;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  color: #111827;\n  color: #2563eb;\n  color: #4b5563;\n  color: #6b7280;\n  color: #ffffff;\n  display: flex;\n  font-weight: 700;\n  height: 100%;\n  justify-content: center;\n  justify-content: space-between;\n  padding-left: 1rem; padding-right: 1rem;\n  padding-top: 0.75rem; padding-bottom: 0.75rem;\n  padding-top: 1rem; padding-bottom: 1rem;\n  padding: 0.5rem;\n  padding: 2rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 01. Standard Split (E-com) </span>
          <CheckoutStandard />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/chec'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/chec:opacity-100 transition-opacity"><CopyButton jsxCode={`<svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M15.7 13.25c-.04 2.22 1.94 2.96 2.03 3-.02.06-.31 1.07-1.02 2.11-.63.89-1.29 1.78-2.32 1.8-1.01.02-1.34-.6-2.5-.6-1.17 0-1.54.58-2.52.62-1.01.04-1.78-1.01-2.42-1.94-1.32-1.9-2.33-5.38-.97-7.74.67-1.17 1.88-1.91 3.19-1.94 1.01-.03 1.96.67 2.57.67.61 0 1.76-.84 2.97-.71 1.01.11 1.77.41 2.36 1.03-2.11 1.28-1.77 4.38.63 5.1zM15.02 5.51c.54-.66.91-1.57.81-2.48-.87.04-1.93.58-2.56 1.32-.51.58-.96 1.51-.84 2.39.97.07 1.96-.46 2.59-1.23z"/></svg>`} htmlCode={`<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M15.7 13.25c-.04 2.22 1.94 2.96 2.03 3-.02.06-.31 1.07-1.02 2.11-.63.89-1.29 1.78-2.32 1.8-1.01.02-1.34-.6-2.5-.6-1.17 0-1.54.58-2.52.62-1.01.04-1.78-1.01-2.42-1.94-1.32-1.9-2.33-5.38-.97-7.74.67-1.17 1.88-1.91 3.19-1.94 1.01-.03 1.96.67 2.57.67.61 0 1.76-.84 2.97-.71 1.01.11 1.77.41 2.36 1.03-2.11 1.28-1.77 4.38.63 5.1zM15.02 5.51c.54-.66.91-1.57.81-2.48-.87.04-1.93.58-2.56 1.32-.51.58-.96 1.51-.84 2.39.97.07 1.96-.46 2.59-1.23z"/></svg>`} cssCode={`/* CheckoutMinimal Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #000000;\n  background-color: #2563eb;\n  background-color: #f9fafb;\n  background-color: #ffffff;\n  background-color: transparent;\n  border-color: #e5e7eb;\n  border-color: #f3f4f6;\n  border-radius: 0.5rem;\n  border-radius: 1rem;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #111827;\n  color: #374151;\n  color: #6b7280;\n  color: #9ca3af;\n  color: #ffffff;\n  display: flex;\n  font-weight: 700;\n  justify-content: center;\n  padding-left: 0.5rem; padding-right: 0.5rem;\n  padding-top: 0.75rem; padding-bottom: 0.75rem;\n  padding: 0.75rem;\n  padding: 2rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 02. Minimalist Express </span>
          <CheckoutMinimal />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/chec'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/chec:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
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
  </div>`} htmlCode={`<div class="bg-gray-50 p-8 rounded-3xl border border-gray-200 max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
    <div class="w-full md:w-1/2">
      <h2 class="text-2xl font-bold mb-6">Payment Details</h2>
      <form class="space-y-5">
        <div class="space-y-1">
          <label class="text-sm font-medium text-gray-700">Cardholder Name</label>
          <input type="text" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="John Doe" />
        </div>
        <div class="space-y-1">
          <label class="text-sm font-medium text-gray-700">Card Number</label>
          <input type="text" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="0000 0000 0000 0000" />
        </div>
        <div class="flex gap-4">
          <div class="space-y-1 flex-1">
            <label class="text-sm font-medium text-gray-700">Expiry</label>
            <input type="text" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="MM/YY" />
          </div>
          <div class="space-y-1 flex-1">
            <label class="text-sm font-medium text-gray-700">CVC</label>
            <input type="text" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="123" />
          </div>
        </div>
        <button class="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors">Pay Now</button>
      </form>
    </div>

    <div class="w-full md:w-1/2 flex justify-center perspective-1000">
      ...
      <div class="w-full max-w-sm h-56 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-6 text-white relative transform transition-transform hover:scale-105">
        <div class="flex justify-between items-start mb-8">
          <div class="w-12 h-8 bg-yellow-500/20 rounded flex items-center justify-center">
             <div class="w-8 h-5 border border-yellow-500/50 rounded"></div>
          </div>
          <span class="font-mono text-xs opacity-50">DEBIT</span>
        </div>
        <div class="font-mono text-2xl tracking-widest mb-6">4242 4242 4242 4242</div>
        <div class="flex justify-between items-end">
          <div>
            <div class="text-[10px] opacity-70 uppercase tracking-widest">Card Holder</div>
            <div class="font-medium tracking-wide">JOHN DOE</div>
          </div>
          <div>
            <div class="text-[10px] opacity-70 uppercase tracking-widest">Expires</div>
            <div class="font-medium tracking-wide">12/25</div>
          </div>
        </div>
        <div class="absolute bottom-6 right-6">
           <div class="flex -space-x-2">
             <div class="w-8 h-8 bg-red-500/80 rounded-full"></div>
             <div class="w-8 h-8 bg-yellow-500/80 rounded-full"></div>
           </div>
        </div>
      </div>
    </div>
  </div>`} cssCode={`/* CheckoutCardVisual Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #4f46e5;\n  background-color: #f9fafb;\n  border-color: #e5e7eb;\n  border-radius: 0.5rem;\n  border-radius: 1.5rem;\n  border-radius: 1rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #374151;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  justify-content: center;\n  justify-content: space-between;\n  padding-left: 1rem; padding-right: 1rem;\n  padding-top: 0.5rem; padding-bottom: 0.5rem;\n  padding-top: 0.75rem; padding-bottom: 0.75rem;\n  padding: 1.5rem;\n  padding: 2rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 03. Visual Card </span>
          <CheckoutCardVisual />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/chec'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/chec:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-xl overflow-hidden">
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

      <div className="p-8 min-h-[300px]">
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h3 className="text-lg font-bold">Where should we send it?</h3>
            <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-md" />
            <input type="text" placeholder="Address" className="w-full p-3 border rounded-md" />
            <div className="flex justify-end pt-4">
              <button onClick={() => setStep(2)} className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Next Step</button>
            </div>
          </div>`} htmlCode={`<div class="max-w-2xl mx-auto bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div class="bg-gray-50 px-8 py-4 border-b border-gray-200 flex justify-between items-center">
        <div class="flex items-center gap-2">
          <span class=w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold \$...>1</span>
          <span class=text-sm font-medium \$...>Shipping</span>
        </div>
        <div class="w-12 h-px bg-gray-300"></div>
        <div class="flex items-center gap-2">
          <span class=w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold \$...>2</span>
          <span class=text-sm font-medium \$...>Payment</span>
        </div>
        <div class="w-12 h-px bg-gray-300"></div>
        <div class="flex items-center gap-2">
          <span class=w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold \$...>3</span>
          <span class=text-sm font-medium \$...>Review</span>
        </div>
      </div>

      <div class="p-8 min-h-[300px]">
        ... class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Next Step</button>
            </div>
          </div>`} cssCode={`/* CheckoutWizard Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #16a34a;\n  background-color: #2563eb;\n  background-color: #eff6ff;\n  background-color: #f9fafb;\n  background-color: #ffffff;\n  border-color: #e5e7eb;\n  border-radius: 0.75rem;\n  border-width: 1px; border-style: solid;\n  color: #2563eb;\n  color: #6b7280;\n  color: #ffffff;\n  display: flex;\n  font-weight: 700;\n  justify-content: space-between;\n  padding-left: 1.5rem; padding-right: 1.5rem;\n  padding-left: 2rem; padding-right: 2rem;\n  padding-top: 0.5rem; padding-bottom: 0.5rem;\n  padding-top: 1rem; padding-bottom: 1rem;\n  padding: 0.75rem;\n  padding: 1rem;\n  padding: 2rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 04. Multi-Step Wizard </span>
          <CheckoutWizard />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/chec'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/chec:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 p-10 flex flex-col md:flex-row gap-10">
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
          <span>\$29.00</span>
        </div>
        <div className="h-px bg-white/20"></div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>\$29.00</span>
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
  </div>`} htmlCode={`<div class="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 p-10 flex flex-col md:flex-row gap-10">
    <div class="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-50"></div>
    
    ...
    <div class="w-full md:w-1/3 text-white relative z-10">
      <h3 class="text-xl font-bold mb-6">Order Summary</h3>
      <div class="bg-white/20 backdrop-blur-md border border-white/30 p-6 rounded-2xl space-y-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-white/30 rounded-lg"></div>
            <span class="font-medium">Pro Plan</span>
          </div>
          <span>\$29.00</span>
        </div>
        <div class="h-px bg-white/20"></div>
        <div class="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>\$29.00</span>
        </div>
      </div>
    </div>

    ...
    <div class="w-full md:w-2/3 relative z-10">
      <div class="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl">
        <h3 class="text-xl font-bold text-white mb-6">Payment</h3>
        <form class="space-y-4">
          <input type="email" placeholder="Email Address" class="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/10 text-white placeholder-white/70 focus:bg-white/30 outline-none transition-colors" />
          <input type="text" placeholder="Card Number" class="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/10 text-white placeholder-white/70 focus:bg-white/30 outline-none transition-colors" />
          <div class="grid grid-cols-2 gap-4">
            <input type="text" placeholder="MM/YY" class="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/10 text-white placeholder-white/70 focus:bg-white/30 outline-none transition-colors" />
            <input type="text" placeholder="CVC" class="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/10 text-white placeholder-white/70 focus:bg-white/30 outline-none transition-colors" />
          </div>
          <button class="w-full py-4 bg-white text-purple-600 font-bold rounded-xl shadow-lg hover:scale-[1.02] transition-transform">
            Pay Securely
          </button>
        </form>
      </div>
    </div>
  </div>`} cssCode={`/* CheckoutGlass Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  backdrop-filter: blur(12px);\n  background-color: #fde047;\n  background-color: #ffffff;\n  border-radius: 0.5rem;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-radius: 1rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #9333ea;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  justify-content: space-between;\n  padding-left: 1rem; padding-right: 1rem;\n  padding-top: 0.75rem; padding-bottom: 0.75rem;\n  padding-top: 1rem; padding-bottom: 1rem;\n  padding: 1.5rem;\n  padding: 2.5rem;\n  padding: 2rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 05. Glassmorphism </span>
          <CheckoutGlass />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/chec'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/chec:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-black p-8 rounded-3xl border border-gray-800 text-white max-w-lg mx-auto">
    <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-800">
      <h2 className="text-xl font-mono text-cyan-400">CHECKOUT_TERMINAL</h2>
      <span className="px-2 py-1 bg-green-900 text-green-400 text-xs font-mono rounded">SECURE_CONN</span>
    </div>

    <div className="mb-8">
      <div className="text-gray-400 text-sm mb-2 font-mono">Amount Due</div>
      <div className="text-4xl font-bold font-mono">0.45 ETH <span className="text-sm text-gray-500 font-sans">(\$1,240.50)</span></div>
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
  </div>`} htmlCode={`<div class="bg-black p-8 rounded-3xl border border-gray-800 text-white max-w-lg mx-auto">
    <div class="flex justify-between items-center mb-8 pb-4 border-b border-gray-800">
      <h2 class="text-xl font-mono text-cyan-400">CHECKOUT_TERMINAL</h2>
      <span class="px-2 py-1 bg-green-900 text-green-400 text-xs font-mono rounded">SECURE_CONN</span>
    </div>

    <div class="mb-8">
      <div class="text-gray-400 text-sm mb-2 font-mono">Amount Due</div>
      <div class="text-4xl font-bold font-mono">0.45 ETH <span class="text-sm text-gray-500 font-sans">(\$1,240.50)</span></div>
    </div>

    <div class="space-y-4 font-mono">
      <div class="p-4 border border-gray-700 rounded-lg hover:border-cyan-500 cursor-pointer bg-gray-900 transition-colors flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"></div>
          <span>MetaMask</span>
        </div>
        <div class="w-4 h-4 rounded-full border border-gray-500"></div>
      </div>
      
      <div class="p-4 border border-gray-700 rounded-lg hover:border-blue-500 cursor-pointer bg-gray-900 transition-colors flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-blue-500"></div>
          <span>WalletConnect</span>
        </div>
        <div class="w-4 h-4 rounded-full border border-gray-500"></div>
      </div>
    </div>

    <button class="w-full mt-8 py-4 bg-cyan-600 text-black font-bold font-mono rounded hover:bg-cyan-500 transition-colors">
      INITIATE_TRANSFER
    </button>
  </div>`} cssCode={`/* CheckoutCrypto Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #000000;\n  background-color: #111827;\n  background-color: #3b82f6;\n  border-color: #1f2937;\n  border-color: #374151;\n  border-color: #6b7280;\n  border-radius: 0.5rem;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  color: #000000;\n  color: #6b7280;\n  color: #9ca3af;\n  color: #ffffff;\n  display: flex;\n  font-weight: 700;\n  justify-content: space-between;\n  padding-left: 0.5rem; padding-right: 0.5rem;\n  padding-top: 0.25rem; padding-bottom: 0.25rem;\n  padding-top: 1rem; padding-bottom: 1rem;\n  padding: 1rem;\n  padding: 2rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 06. Crypto / Web3 </span>
          <CheckoutCrypto />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/chec'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/chec:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-[#e0e5ec] p-10 rounded-3xl max-w-md mx-auto">
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
        <span>\$89.00</span>
      </div>

      <button className="w-full py-4 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] active:scale-95 transition-all flex items-center justify-center gap-2">
        <LockIcon className="w-4 h-4" /> Pay Now
      </button>
    </div>
  </div>`} htmlCode={`<div class="bg-[#e0e5ec] p-10 rounded-3xl max-w-md mx-auto">
    <h2 class="text-2xl font-bold text-gray-700 mb-8 text-center">Payment</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl bg-[#e0e5ec] p-1 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
        <input type="text" placeholder="Card Number" class="w-full bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 px-4 py-2" />
      </div>
      
      <div class="flex gap-4">
        <div class="rounded-xl bg-[#e0e5ec] p-1 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] flex-1">
          <input type="text" placeholder="Expiry" class="w-full bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 px-4 py-2" />
        </div>
        <div class="rounded-xl bg-[#e0e5ec] p-1 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] w-24">
          <input type="text" placeholder="CVC" class="w-full bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 px-4 py-2" />
        </div>
      </div>

      <div class="flex justify-between items-center py-4 text-gray-600 font-bold">
        <span>Total</span>
        <span>\$89.00</span>
      </div>

      <button class="w-full py-4 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] active:scale-95 transition-all flex items-center justify-center gap-2">
        <lockicon class="w-4 h-4" ></lockicon> Pay Now
      </button>
    </div>
  </div>`} cssCode={`/* CheckoutNeumorphic Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: transparent;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #374151;\n  color: #3b82f6;\n  color: #4b5563;\n  display: flex;\n  font-weight: 700;\n  justify-content: center;\n  justify-content: space-between;\n  padding-left: 1rem; padding-right: 1rem;\n  padding-top: 0.5rem; padding-bottom: 0.5rem;\n  padding-top: 1rem; padding-bottom: 1rem;\n  padding: 0.25rem;\n  padding: 2.5rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 07. Neumorphic </span>
          <CheckoutNeumorphic />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/chec'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/chec:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-yellow-400 p-8 border-4 border-black rounded-none max-w-2xl mx-auto shadow-[12px_12px_0_0_#000]">
    <div className="border-b-4 border-black pb-6 mb-6">
      <h2 className="text-5xl font-black uppercase">Checkout</h2>
    </div>
    
    <div className="bg-white border-4 border-black p-6 mb-6">
      <div className="flex justify-between font-bold text-xl mb-2">
        <span>ITEM_01</span>
        <span>\$50.00</span>
      </div>
      <div className="flex justify-between font-bold text-xl">
        <span>ITEM_02</span>
        <span>\$25.00</span>
      </div>
      <div className="h-4 bg-black my-4"></div>
      <div className="flex justify-between font-black text-3xl">
        <span>TOTAL</span>
        <span>\$75.00</span>
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
  </div>`} htmlCode={`<div class="bg-yellow-400 p-8 border-4 border-black rounded-none max-w-2xl mx-auto shadow-[12px_12px_0_0_#000]">
    <div class="border-b-4 border-black pb-6 mb-6">
      <h2 class="text-5xl font-black uppercase">Checkout</h2>
    </div>
    
    <div class="bg-white border-4 border-black p-6 mb-6">
      <div class="flex justify-between font-bold text-xl mb-2">
        <span>ITEM_01</span>
        <span>\$50.00</span>
      </div>
      <div class="flex justify-between font-bold text-xl">
        <span>ITEM_02</span>
        <span>\$25.00</span>
      </div>
      <div class="h-4 bg-black my-4"></div>
      <div class="flex justify-between font-black text-3xl">
        <span>TOTAL</span>
        <span>\$75.00</span>
      </div>
    </div>

    <form class="space-y-4">
      <input type="text" placeholder="CARD NUMBER" class="w-full p-4 border-4 border-black font-bold uppercase focus:bg-pink-300 outline-none placeholder-black/50" />
      <div class="flex gap-4">
        <input type="text" placeholder="MM/YY" class="w-full p-4 border-4 border-black font-bold uppercase focus:bg-pink-300 outline-none placeholder-black/50" />
        <input type="text" placeholder="CVC" class="w-full p-4 border-4 border-black font-bold uppercase focus:bg-pink-300 outline-none placeholder-black/50" />
      </div>
      <button class="w-full py-4 bg-black text-white font-black text-2xl uppercase hover:bg-white hover:text-black border-4 border-transparent hover:border-black transition-colors">
        Confirm Payment
      </button>
    </form>
  </div>`} cssCode={`/* CheckoutBrutalist Styles (Generated from Tailwind) */\n.component-root {\n  background-color: #000000;\n  background-color: #facc15;\n  background-color: #ffffff;\n  border-color: #000000;\n  border-color: transparent;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #ffffff;\n  display: flex;\n  font-weight: 700;\n  justify-content: space-between;\n  padding-top: 1rem; padding-bottom: 1rem;\n  padding: 1.5rem;\n  padding: 1rem;\n  padding: 2rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 08. Brutalist </span>
          <CheckoutBrutalist />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/chec'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/chec:opacity-100 transition-opacity"><CopyButton jsxCode={`<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>`} htmlCode={`<svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>`} cssCode={`/* CheckoutDigital Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #0f172a;\n  background-color: #2563eb;\n  background-color: #e5e7eb;\n  background-color: #f9fafb;\n  background-color: #ffffff;\n  background-color: transparent;\n  border-color: #334155;\n  border-radius: 0.5rem;\n  border-radius: 1rem;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #111827;\n  color: #374151;\n  color: #94a3b8;\n  color: #9ca3af;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  justify-content: center;\n  justify-content: space-between;\n  padding-left: 1rem; padding-right: 1rem;\n  padding-top: 0.5rem; padding-bottom: 0.5rem;\n  padding-top: 0.75rem; padding-bottom: 0.75rem;\n  padding: 1rem;\n  padding: 2.5rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 09. Digital Goods Download </span>
          <CheckoutDigital />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/chec'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/chec:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="max-w-4xl mx-auto p-8">
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
              onClick={(`} htmlCode={`<div class="max-w-4xl mx-auto p-8">
      <div class="flex flex-col md:flex-row gap-8">
        <div class="flex-1 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h2 class="text-xl font-bold mb-6">Payment Method</h2>
          ...
          <form class="space-y-4">
            <input type="text" placeholder="Name on card" class="w-full p-3 border rounded-lg bg-gray-50" />
            <input type="text" placeholder="Card number" class="w-full p-3 border rounded-lg bg-gray-50" />
            <div class="grid grid-cols-2 gap-4">
              <input type="text" placeholder="MM/YY" class="w-full p-3 border rounded-lg bg-gray-50" />
              <input type="text" placeholder="CVC" class="w-full p-3 border rounded-lg bg-gray-50" />
            </div>
            <button class="w-full py-4 bg-black text-white rounded-lg font-bold hover:bg-gray-800">
              Subscribe
            </button>
          </form>
        </div>

        <div class="w-full md:w-80 bg-gray-50 p-6 rounded-2xl h-fit border border-gray-200">
          <h3 class="font-bold text-gray-900 mb-4">Subscription</h3>
          
          <div class="flex bg-white p-1 rounded-lg border border-gray-200 mb-6">
            <button 
              onClick={(`} cssCode={`/* CheckoutSubscription Styles (Generated from Tailwind) */\n.component-root {\n  background-color: #000000;\n  background-color: #f9fafb;\n  background-color: #ffffff;\n  border-color: #e5e7eb;\n  border-radius: 0.5rem;\n  border-radius: 1rem;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #111827;\n  color: #6b7280;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  justify-content: space-between;\n  padding-top: 1rem; padding-bottom: 1rem;\n  padding: 0.25rem;\n  padding: 0.75rem;\n  padding: 1.5rem;\n  padding: 2rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 10. Subscription Toggle </span>
          <CheckoutSubscription />
        </section>

      </div>
    </div>
  );
};

export default CheckoutGallery;