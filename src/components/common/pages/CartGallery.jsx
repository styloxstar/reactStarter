import React, { useState } from 'react';
import CopyButton from '../CopyButton';

// --- Shared Data ---
const cartItems = [
  { id: 1, name: "Wireless Noise Cancelling Headphones", price: 250, qty: 1, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200&auto=format&fit=crop", color: "Black" },
  { id: 2, name: "Smart Watch Series 7", price: 399, qty: 1, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=200&auto=format&fit=crop", color: "Silver" },
];

const TrashIcon = () => (
  <svg className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
);

// --- 1. The Standard Split (SaaS/E-com) ---
export const CartStandard = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col lg:flex-row gap-12 h-auto lg:h-[600px]">
    {/* Cart Items */}
    <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart (2)</h2>
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4 p-4 border border-gray-100 rounded-2xl hover:border-gray-200 transition-colors">
            <div className="w-24 h-24 bg-gray-50 rounded-xl flex-shrink-0 p-2">
              <img src={item.img} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                  <TrashIcon />
                </div>
                <p className="text-sm text-gray-500">{item.color}</p>
              </div>
              <div className="flex justify-between items-end">
                <div className="flex items-center border border-gray-200 rounded-lg">
                  <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-lg">-</button>
                  <span className="px-2 text-sm font-medium">{item.qty}</span>
                  <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-lg">+</button>
                </div>
                <span className="font-bold text-lg">${item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Summary */}
    <div className="w-full lg:w-96 bg-gray-50 p-8 rounded-2xl h-fit">
      <h3 className="font-bold text-lg mb-6">Order Summary</h3>
      <div className="space-y-4 mb-6 border-b border-gray-200 pb-6">
        <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>$649.00</span></div>
        <div className="flex justify-between text-gray-600"><span>Shipping</span><span>Free</span></div>
        <div className="flex justify-between text-gray-600"><span>Tax</span><span>$0.00</span></div>
      </div>
      <div className="flex justify-between font-bold text-xl mb-8">
        <span>Total</span>
        <span>$649.00</span>
      </div>
      <button className="w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg">
        Checkout
      </button>
      <p className="text-xs text-center text-gray-400 mt-4">Secure Checkout • Free Returns</p>
    </div>
  </div>
);

// --- 2. The Drawer Style (Slide-over) ---
export const CartDrawer = () => (
  <div className="bg-gray-200 h-[600px] rounded-3xl flex justify-end overflow-hidden relative border border-gray-300">
    {/* Overlay context */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <span className="text-gray-400 font-bold text-xl">Main Site Content...</span>
    </div>

    <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col relative z-10">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h2 className="font-bold text-lg">Your Cart</h2>
        <button className="p-2 hover:bg-gray-100 rounded-full">✕</button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4">
            <img src={item.img} alt="" className="w-20 h-20 rounded-lg object-cover bg-gray-50" />
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <h4 className="font-medium text-sm line-clamp-2">{item.name}</h4>
                <span className="font-bold text-sm ml-2">${item.price}</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">{item.color}</div>
              <div className="flex justify-between items-center">
                <div className="text-xs font-bold bg-gray-100 px-2 py-1 rounded">Qty: {item.qty}</div>
                <button className="text-xs text-red-500 underline">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 border-t border-gray-100 bg-gray-50">
        <div className="flex justify-between mb-4 font-bold text-lg">
          <span>Subtotal</span>
          <span>$649.00</span>
        </div>
        <p className="text-xs text-gray-500 mb-4">Shipping and taxes calculated at checkout.</p>
        <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all">
          Checkout
        </button>
      </div>
    </div>
  </div>
);

// --- 3. The Gamified (Free Shipping Goal) ---
export const CartGamified = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 max-w-2xl mx-auto shadow-sm">
    <div className="mb-8">
      <div className="flex justify-between items-end mb-2">
        <span className="text-sm font-bold text-gray-900">Add $351.00 for free shipping</span>
        <span className="text-xs font-medium text-blue-600 uppercase tracking-widest">65% of goal</span>
      </div>
      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full w-[65%] bg-blue-600 rounded-full transition-all duration-1000 ease-out">
          <div className="absolute top-0 right-0 w-2 h-full bg-white/20 animate-pulse"></div>
        </div>
      </div>
    </div>

    <div className="space-y-6 mb-8">
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center border-b border-gray-50 pb-6 last:border-0">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-50 rounded-xl p-2"><img src={item.img} className="w-full h-full object-contain mix-blend-multiply" alt="" /></div>
            <div>
              <h4 className="font-bold text-sm text-gray-900">{item.name}</h4>
              <p className="text-xs text-gray-500">${item.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-1 px-3">
            <button className="text-gray-400 hover:text-gray-900">-</button>
            <span className="text-sm font-bold w-4 text-center">{item.qty}</span>
            <button className="text-gray-400 hover:text-gray-900">+</button>
          </div>
        </div>
      ))}
    </div>

    <button className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all shadow-xl shadow-gray-200 flex items-center justify-center gap-2">
      Secure Checkout <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
    </button>
  </div>
);

// --- 4. The Minimalist Table ---
export const CartMinimal = () => (
  <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 max-w-4xl mx-auto shadow-sm">
    <h2 className="text-3xl font-bold text-gray-900 mb-10">Your Bag</h2>
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="text-xs uppercase tracking-widest text-gray-400 border-b border-gray-100">
          <th className="pb-4 font-bold">Product</th>
          <th className="pb-4 font-bold text-center">Quantity</th>
          <th className="pb-4 font-bold text-right">Price</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id} className="border-b border-gray-50 group">
            <td className="py-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gray-50 rounded-2xl p-2 group-hover:scale-105 transition-transform"><img src={item.img} className="w-full h-full object-contain mix-blend-multiply" alt="" /></div>
                <div>
                  <p className="font-bold text-gray-900">{item.name}</p>
                  <button className="text-xs text-red-400 hover:text-red-600 mt-1 uppercase font-bold tracking-tighter">Remove</button>
                </div>
              </div>
            </td>
            <td className="py-8 text-center">
              <input type="number" defaultValue={item.qty} className="w-12 p-2 border-0 bg-gray-50 rounded-lg font-bold text-center outline-none focus:ring-1 focus:ring-black" />
            </td>
            <td className="py-8 text-right font-bold text-gray-900">${item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="mt-12 flex flex-col items-end">
      <div className="flex justify-between w-full max-w-xs text-xl font-bold text-gray-900 mb-6">
        <span className="text-gray-400 font-medium">Subtotal</span>
        <span>$649.00</span>
      </div>
      <button className="w-full max-w-xs bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors">Checkout Now</button>
    </div>
  </div>
);

// --- 5. The Cross-sell (Upsell Focus) ---
export const CartUpsell = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 max-w-md mx-auto shadow-lg">
    <h2 className="text-xl font-bold mb-6">Cart Summary</h2>
    <div className="space-y-4 mb-8">
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={item.img} className="w-12 h-12 rounded-lg object-contain bg-gray-50" alt="" />
            <div>
              <div className="font-bold text-sm text-gray-900">{item.name}</div>
              <div className="text-xs text-gray-500">${item.price}</div>
            </div>
          </div>
          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-bold">x{item.qty}</span>
        </div>
      ))}
    </div>

    {/* Upsell Section */}
    <div className="bg-blue-50/50 rounded-2xl p-6 mb-8 border border-blue-100">
      <h3 className="text-sm font-bold text-blue-800 mb-4 uppercase tracking-widest">Complete the look</h3>
      <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar-blue">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex-shrink-0 w-32 bg-white p-2 rounded-lg border border-blue-100 shadow-sm">
            <div className="h-20 bg-gray-100 rounded mb-2 w-full"></div>
            <div className="text-[10px] font-bold truncate text-gray-700">Premium Case V{i}</div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs font-bold text-gray-900">$29</span>
              <button className="bg-blue-600 text-white w-6 h-6 flex items-center justify-center rounded-full hover:bg-blue-700 transition-colors">+</button>
            </div>
          </div>
        ))}
      </div>
    </div>

    <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
      Checkout • $649.00
    </button>
  </div>
);

// --- 6. The Sticky Bottom (Mobile First) ---
export const CartMobile = () => (
  <div className="bg-gray-100 h-[600px] rounded-3xl overflow-hidden relative flex flex-col border border-gray-300 max-w-sm mx-auto">
    <div className="bg-white p-4 shadow-sm z-10 flex justify-center border-b border-gray-200">
      <span className="font-bold text-gray-900 uppercase tracking-widest text-sm">My Cart</span>
    </div>

    <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
      {cartItems.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm flex gap-4">
          <img src={item.img} className="w-20 h-20 bg-gray-50 rounded-xl object-contain" alt="" />
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-sm leading-tight mb-1 text-gray-900">{item.name}</h4>
              <p className="text-[10px] text-gray-500 uppercase font-medium">{item.color}</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-900">${item.price}</span>
              <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-2 py-1">
                <button className="text-gray-400 font-bold hover:text-black">-</button>
                <span className="text-xs font-black text-gray-900">{item.qty}</span>
                <button className="text-gray-400 font-bold hover:text-black">+</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="h-20"></div>
    </div>

    <div className="absolute bottom-0 left-0 w-full bg-white border-t border-gray-200 p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between text-sm mb-4">
        <span className="text-gray-400 font-medium">Total (2 items)</span>
        <span className="font-black text-xl text-gray-900">$649.00</span>
      </div>
      <button className="w-full py-4 bg-black text-white rounded-2xl font-black text-lg shadow-xl shadow-gray-200">
        Checkout
      </button>
    </div>
  </div>
);

// --- 7. The Glassmorphism (Aesthetic) ---
export const CartGlass = () => (
  <div className="relative h-[650px] w-full rounded-[3rem] overflow-hidden bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-400 p-8 flex items-center justify-center">
    <div className="absolute top-10 left-10 w-48 h-48 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-pulse"></div>
    <div className="absolute bottom-10 right-10 w-48 h-48 bg-cyan-300 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-pulse"></div>

    <div className="relative bg-white/20 backdrop-blur-2xl border border-white/30 p-8 md:p-10 rounded-[2.5rem] shadow-2xl w-full max-w-md h-full flex flex-col border-white/40">
      <h2 className="text-3xl font-black text-white mb-8 drop-shadow-lg tracking-tight">Shopping Bag_</h2>
      
      <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar-white">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4 p-4 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/20 transition-all group">
            <div className="w-16 h-16 bg-white/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
               <img src={item.img} className="w-12 h-12 object-contain brightness-0 invert" alt=""/>
            </div>
            <div className="flex-1 text-white">
              <h4 className="font-bold text-sm truncate uppercase tracking-tighter">{item.name}</h4>
              <div className="flex justify-between items-center mt-3">
                <span className="font-black text-lg">${item.price}</span>
                <span className="text-[10px] bg-white/20 px-2 py-1 rounded-lg font-bold text-white uppercase">Qty: {item.qty}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-white/20 pt-8">
        <div className="flex justify-between text-white font-black text-2xl mb-8">
          <span>SUM_</span>
          <span>$649.00</span>
        </div>
        <button className="w-full py-4 bg-white text-purple-600 font-black text-xl rounded-2xl shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-widest">
          Verify & Pay
        </button>
      </div>
    </div>
  </div>
);

// --- 8. The Brutalist (Bold) ---
export const CartBrutalist = () => (
  <div className="bg-yellow-400 p-8 rounded-none border-[6px] border-black h-[700px] flex flex-col max-w-2xl mx-auto shadow-[20px_20px_0_0_#000]">
    <div className="bg-white border-[6px] border-black p-6 mb-8 shadow-[8px_8px_0_0_#000] -rotate-1">
      <h2 className="text-5xl font-black uppercase italic tracking-tighter">Your Stash_</h2>
    </div>

    <div className="flex-1 overflow-y-auto space-y-6 pr-2 custom-scrollbar-black">
      {cartItems.map((item) => (
        <div key={item.id} className="bg-white border-[6px] border-black p-6 flex gap-6 items-center shadow-[10px_10px_0_0_#ff00ff]">
          <div className="w-24 h-24 border-[4px] border-black flex-shrink-0 bg-black overflow-hidden">
            <img src={item.img} className="w-full h-full object-cover grayscale contrast-150 group-hover:scale-110 transition-transform" alt="" />
          </div>
          <div className="flex-1">
            <h3 className="font-black text-xl uppercase leading-none mb-4">{item.name}</h3>
            <div className="flex justify-between items-center">
              <span className="bg-black text-white px-3 py-1 font-black text-xl italic">${item.price}</span>
              <div className="font-black border-[4px] border-black px-4 py-1 bg-white text-xl">x{item.qty}</div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-8 bg-white border-[6px] border-black p-8 shadow-[12px_12px_0_0_#000]">
      <div className="flex justify-between font-black text-4xl mb-6 uppercase italic">
        <span>VAL_</span>
        <span>$649</span>
      </div>
      <button className="w-full py-6 bg-cyan-400 border-[6px] border-black font-black uppercase text-2xl hover:bg-pink-500 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#000] transition-all">
        Buy It Now!!
      </button>
    </div>
  </div>
);

// --- 9. The Promo Code Focus ---
export const CartPromo = () => (
  <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 max-w-xl mx-auto shadow-2xl shadow-gray-100">
    <h2 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-tighter">Summary_Init</h2>
    
    <div className="space-y-4 mb-10 border-b border-gray-50 pb-10">
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between text-sm font-bold text-gray-600">
          <span className="uppercase tracking-widest opacity-60">{item.name} (x{item.qty})</span>
          <span className="text-gray-900 font-black">${item.price}</span>
        </div>
      ))}
    </div>

    <div className="mb-10 p-8 bg-gray-50 rounded-3xl border border-gray-200 shadow-inner">
      <label className="text-[10px] font-black text-gray-400 uppercase mb-3 block tracking-[0.2em] ml-1">Voucher Protocol</label>
      <div className="flex gap-3">
        <input type="text" placeholder="SUMMER_20" className="flex-1 px-5 py-4 bg-white border-2 border-gray-100 rounded-2xl outline-none focus:border-blue-600 uppercase font-black tracking-widest text-sm transition-all" />
        <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-black transition-all shadow-lg shadow-gray-200">VAL_</button>
      </div>
    </div>

    <div className="pt-2 space-y-4 border-t-2 border-gray-900 pt-8">
      <div className="flex justify-between text-gray-400 font-bold uppercase text-xs tracking-widest"><span>Subtotal</span><span>$649.00</span></div>
      <div className="flex justify-between text-gray-400 font-bold uppercase text-xs tracking-widest"><span>Discount</span><span>- $0.00</span></div>
      <div className="flex justify-between text-4xl font-black text-gray-900 mt-6 tracking-tighter"><span>TOTAL</span><span>$649.00</span></div>
    </div>
    
    <button className="w-full mt-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 shadow-2xl shadow-blue-100 transition-all hover:scale-[1.01] active:scale-[0.99] uppercase tracking-widest">
      Execute Sync
    </button>
  </div>
);

// --- 10. The Empty State (Recovery) ---
export const CartEmpty = () => (
  <div className="bg-white p-12 md:p-24 rounded-[3rem] border border-gray-100 h-[700px] flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl shadow-gray-100">
    <div className="absolute top-10 left-10 text-9xl font-black opacity-[0.03] select-none uppercase tracking-tighter rotate-[-5deg]">Empty</div>
    <div className="w-56 h-56 bg-gray-50 rounded-full flex items-center justify-center mb-12 relative shadow-inner">
      <svg className="w-24 h-24 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
      <div className="absolute -top-2 -right-2 text-6xl animate-bounce">🛒</div>
    </div>
    
    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tighter italic">Ghost_Node.</h2>
    <p className="text-gray-400 mb-12 max-w-sm font-bold uppercase tracking-widest text-xs leading-relaxed">No payloads detected in this sector. Scan for new assets immediately.</p>
    
    <button className="px-12 py-5 bg-black text-white rounded-2xl font-black text-xl hover:bg-gray-800 transition-all shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-widest">
      Start Scanning
    </button>

    <div className="mt-20 border-t border-gray-50 w-full pt-10">
      <p className="text-[10px] font-black text-gray-400 uppercase mb-8 tracking-[0.3em]">Trending Now</p>
      <div className="flex gap-6 justify-center">
        {[1, 2, 3].map(i => (
          <div key={i} className="w-20 h-20 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:scale-110 transition-transform cursor-pointer"></div>
        ))}
      </div>
    </div>
  </div>
);


// --- Main Gallery Wrapper ---
const CartGallery = () => {
  return (
    <div className="box-shadow container overflow-y-auto bg-slate-100 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black text-slate-800 mb-4 uppercase italic tracking-tighter">Cart Galleries</h1>
        <p className="text-slate-500 font-bold uppercase tracking-widest">Diverse layouts for the high-converting shopping experience.</p>
      </div>
      
      <div className="space-y-32 max-w-7xl mx-auto">
        
        <section className='box-shadow p-4 rounded-lg relative group/cart bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cart:opacity-100 transition-opacity">
            <CopyButton
              jsxCode={`import React from 'react';

const CartStandard = () => {
  const items = [
    { id: 1, name: "Noise Cancelling Headphones", price: 250, qty: 1, img: "IMAGE_URL" },
    { id: 2, name: "Smart Watch Series 7", price: 399, qty: 1, img: "IMAGE_URL" }
  ];

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto font-sans">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Shopping Cart (\${items.length})</h2>
        <div className="space-y-6">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 p-4 border border-gray-100 rounded-2xl hover:border-gray-200 transition-colors">
              <div className="w-24 h-24 bg-gray-50 rounded-xl flex-shrink-0 p-2">
                <img src={item.img} className="w-full h-full object-contain" alt="" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                  <button className="text-gray-400 hover:text-red-500">✕</button>
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex items-center border border-gray-200 rounded-lg">
                    <button className="px-3 py-1">-</button>
                    <span className="px-2 text-sm font-medium">{item.qty}</span>
                    <button className="px-3 py-1">+</button>
                  </div>
                  <span className="font-bold text-lg">\${item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-96 bg-gray-50 p-8 rounded-2xl h-fit">
        <h3 className="font-bold text-lg mb-6">Order Summary</h3>
        <div className="space-y-4 mb-6 border-b border-gray-200 pb-6 text-gray-600">
          <div className="flex justify-between"><span>Subtotal</span><span>$649.00</span></div>
          <div className="flex justify-between"><span>Shipping</span><span>Free</span></div>
        </div>
        <div className="flex justify-between font-bold text-xl mb-8 text-gray-900">
          <span>Total</span>
          <span>$649.00</span>
        </div>
        <button className="w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors">Checkout</button>
      </div>
    </div>
  );
};

export default CartStandard;`}
              htmlCode={`<div class="cart-container">
  <div class="cart-main">
    <h2 class="cart-title">Shopping Cart (2)</h2>
    <div class="cart-items">
      <div class="item-card">
        <div class="item-img"><img src="IMAGE_URL" /></div>
        <div class="item-details">
          <div class="item-header">
            <h3>Noise Cancelling Headphones</h3>
            <button class="remove-btn">✕</button>
          </div>
          <div class="item-footer">
            <div class="qty-btn">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <span class="price">$250</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="cart-summary">
    <h3>Order Summary</h3>
    <div class="summary-rows">
      <div class="row"><span>Subtotal</span><span>$649.00</span></div>
      <div class="row"><span>Shipping</span><span>Free</span></div>
    </div>
    <div class="total-row">
      <span>Total</span>
      <span>$649.00</span>
    </div>
    <button class="checkout-btn">Checkout</button>
  </div>
</div>`}
              cssCode={`.cart-container {
  display: flex;
  flex-direction: column;
  gap: 48px;
  background: white;
  padding: 32px;
  border-radius: 24px;
  font-family: system-ui, sans-serif;
  max-width: 1100px;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .cart-container { flex-direction: row; }
}

.cart-main { flex: 1; }
.cart-title { font-size: 24px; font-weight: 700; margin-bottom: 32px; }

.item-card {
  display: flex;
  gap: 16px;
  padding: 16px;
  border: 1px solid #f3f4f6;
  border-radius: 16px;
  margin-bottom: 16px;
}

.item-img { width: 96px; height: 96px; background: #f9fafb; border-radius: 12px; }
.item-img img { width: 100%; height: 100%; object-fit: contain; }

.item-details { flex: 1; display: flex; flex-direction: column; justify-content: space-between; }
.item-header { display: flex; justify-content: space-between; align-items: flex-start; }
.item-header h3 { font-size: 16px; font-weight: 700; }
.remove-btn { color: #9ca3af; background: none; border: none; cursor: pointer; }

.item-footer { display: flex; justify-content: space-between; align-items: flex-end; }
.qty-btn { display: flex; border: 1px solid #e5e7eb; border-radius: 8px; }
.qty-btn button { padding: 4px 12px; border: none; background: none; cursor: pointer; }
.qty-btn span { padding: 4px 8px; font-size: 14px; font-weight: 500; }
.price { font-weight: 700; font-size: 18px; }

.cart-summary { width: 100%; max-width: 384px; background: #f9fafb; padding: 32px; border-radius: 20px; }
@media (min-width: 1024px) { .cart-summary { height: fit-content; } }

.summary-rows { margin-bottom: 24px; border-bottom: 1px solid #e5e7eb; padding-bottom: 24px; }
.row { display: flex; justify-content: space-between; margin-bottom: 16px; color: #4b5563; }

.total-row { display: flex; justify-content: space-between; font-size: 20px; font-weight: 700; margin-bottom: 32px; }

.checkout-btn { width: 100%; padding: 16px; background: black; color: white; border: none; border-radius: 12px; font-weight: 700; cursor: pointer; transition: 0.2s; }
.checkout-btn:hover { background: #1f2937; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">01. Standard Split Layout</span>
          <CartStandard />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/cart bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cart:opacity-100 transition-opacity">
            <CopyButton
              jsxCode={`import React from 'react';

const CartDrawer = () => {
  return (
    <div className="fixed right-0 top-0 w-full max-w-md h-full bg-white shadow-2xl flex flex-col font-sans z-50">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h2 className="font-bold text-xl text-gray-900">Shopping Cart</h2>
        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-900">✕</button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {[1, 2].map((i) => (
          <div key={i} className="flex gap-4 group">
            <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0">
              <img src="IMAGE_URL" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-sm text-gray-900 leading-tight">Product Name</h4>
                <span className="font-black text-sm ml-2">$250</span>
              </div>
              <p className="text-xs text-gray-400 mb-4 uppercase font-bold tracking-widest">Color: Black</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                  <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-black">-</button>
                  <span className="text-xs font-black w-4 text-center">1</span>
                  <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-black">+</button>
                </div>
                <button className="text-[10px] font-black text-red-400 uppercase tracking-tighter hover:text-red-600">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-8 border-t border-gray-100 bg-gray-50/50 backdrop-blur-sm">
        <div className="flex justify-between mb-2">
            <span className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em]">Subtotal</span>
            <span className="font-black text-gray-900">$649.00</span>
        </div>
        <p className="text-[10px] text-gray-400 mb-8 uppercase font-bold tracking-widest">Free shipping applied at checkout.</p>
        <button className="w-full py-5 bg-blue-600 text-white rounded-[20px] font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
          Checkout Now
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;`}
              htmlCode={`<div class="cart-drawer">
  <div class="drawer-header">
    <h2>Shopping Cart</h2>
    <button class="close-btn">✕</button>
  </div>
  
  <div class="drawer-content">
    <div class="item-row">
      <div class="item-visual"><img src="IMAGE_URL" /></div>
      <div class="item-body">
        <div class="item-top">
          <h4>Product Name</h4>
          <strong>$250</strong>
        </div>
        <small class="meta">Black</small>
        <div class="item-bot">
          <div class="qty-control">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button class="remove-link">Remove</button>
        </div>
      </div>
    </div>
  </div>

  <div class="drawer-footer">
    <div class="subtotal-row">
      <span>Subtotal</span>
      <strong>$649.00</strong>
    </div>
    <p class="notice">Free shipping applied at checkout.</p>
    <button class="primary-btn">Checkout Now</button>
  </div>
</div>`}
              cssCode={`.cart-drawer {
  width: 400px;
  height: 100vh;
  background: white;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 50px rgba(0,0,0,0.1);
  font-family: 'Inter', sans-serif;
}

.drawer-header {
  padding: 24px;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.drawer-header h2 { font-size: 20px; font-weight: 800; margin: 0; }
.close-btn { background: none; border: none; font-size: 20px; color: #9ca3af; cursor: pointer; }

.drawer-content { flex: 1; padding: 24px; overflow-y: auto; }
.item-row { display: flex; gap: 16px; margin-bottom: 32px; }
.item-visual { width: 96px; height: 96px; border-radius: 16px; background: #f9fafb; overflow: hidden; }
.item-visual img { width: 100%; height: 100%; object-fit: cover; }

.item-body { flex: 1; }
.item-top { display: flex; justify-content: space-between; margin-bottom: 4px; }
.item-top h4 { font-size: 14px; font-weight: 700; margin: 0; }
.meta { font-size: 10px; color: #9ca3af; text-transform: uppercase; font-weight: 700; letter-spacing: 1px; }

.item-bot { display: flex; justify-content: space-between; align-items: center; margin-top: 16px; }
.qty-control { display: flex; background: #f9fafb; padding: 4px; border-radius: 8px; }
.qty-control button { border: none; background: none; color: #9ca3af; cursor: pointer; padding: 0 8px; font-weight: 700; }
.qty-control span { font-size: 12px; font-weight: 800; width: 24px; text-align: center; }
.remove-link { font-size: 10px; color: #ef4444; text-decoration: underline; background: none; border: none; cursor: pointer; font-weight: 700; text-transform: uppercase; }

.drawer-footer { padding: 32px; background: #fafafa; border-top: 1px solid #f3f4f6; }
.subtotal-row { display: flex; justify-content: space-between; margin-bottom: 8px; }
.subtotal-row span { color: #9ca3af; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; }
.subtotal-row strong { font-size: 20px; font-weight: 900; }
.notice { font-size: 10px; color: #9ca3af; margin-bottom: 24px; font-weight: 700; text-transform: uppercase; }

.primary-btn {
  width: 100%;
  padding: 20px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
}`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">02. Slide-over Manifest</span>
          <CartDrawer />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/cart bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cart:opacity-100 transition-opacity">
            <CopyButton
              jsxCode={`import React from 'react';

const CartGamified = () => {
  return (
    <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] border border-gray-100 max-w-2xl mx-auto font-sans">
      <div className="mb-10">
        <div className="flex justify-between items-end mb-4">
          <span className="text-sm font-black text-gray-900 uppercase tracking-tighter italic">Unlocked: Free Shipping ⚡</span>
          <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">65% of goal</span>
        </div>
        <div className="w-full h-4 bg-gray-50 rounded-full overflow-hidden border border-gray-100">
          <div className="h-full w-[65%] bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(37,99,235,0.3)]"></div>
        </div>
      </div>

      <div className="space-y-8 mb-10">
        {[1, 2].map((i) => (
          <div key={i} className="flex justify-between items-center group">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-gray-50 rounded-[20px] p-3 border border-gray-100 group-hover:scale-105 transition-transform">
                <img src="IMAGE_URL" className="w-full h-full object-contain" alt="" />
              </div>
              <div>
                <h4 className="font-black text-base text-gray-900 uppercase tracking-tighter">Product Item {i}</h4>
                <p className="text-xs font-bold text-gray-400 mt-1">$250.00</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-1.5 px-4 border border-gray-100">
              <button className="text-gray-300 hover:text-gray-900 font-bold transition-colors">-</button>
              <span className="text-sm font-black w-6 text-center text-gray-900">1</span>
              <button className="text-gray-300 hover:text-gray-900 font-bold transition-colors">+</button>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full py-6 bg-gray-900 text-white font-black text-xl rounded-[24px] hover:bg-black transition-all shadow-2xl hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 uppercase italic tracking-widest">
        Checkout 
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
      </button>
    </div>
  );
};

export default CartGamified;`}
              htmlCode={`<div class="cart-gamified">
  <div class="reward-header">
    <span class="unlocked">Unlocked: Free Shipping ⚡</span>
    <span class="percent">65% of goal</span>
  </div>
  <div class="progress-track">
    <div class="progress-fill"></div>
  </div>

  <div class="items-grid">
    <div class="item-card">
      <div class="visual"><img src="IMAGE_URL" /></div>
      <div class="info">
        <h4>Product Item</h4>
        <small>$250.00</small>
      </div>
      <div class="qty-pill">
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
    </div>
  </div>

  <button class="cta-btn">
    Checkout
    <span class="icon">→</span>
  </button>
</div>`}
              cssCode={`.cart-gamified {
  background: white;
  padding: 48px;
  border-radius: 40px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 32px 64px rgba(0,0,0,0.1);
  font-family: 'Inter', system-ui, sans-serif;
}

.reward-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 16px;
}

.unlocked { font-size: 14px; font-weight: 900; font-style: italic; text-transform: uppercase; color: #111827; }
.percent { font-size: 10px; font-weight: 900; color: #2563eb; text-transform: uppercase; letter-spacing: 2px; }

.progress-track { width: 100%; height: 16px; background: #f9fafb; border-radius: 100px; border: 1px solid #f3f4f6; overflow: hidden; margin-bottom: 40px; }
.progress-fill { width: 65%; height: 100%; background: linear-gradient(90deg, #3b82f6, #4f46e5); border-radius: 100px; }

.items-grid { margin-bottom: 40px; }
.item-card { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
.visual { width: 80px; height: 80px; background: #f9fafb; border-radius: 20px; padding: 12px; }
.visual img { width: 100%; height: 100%; object-fit: contain; }

.info { flex: 1; margin-left: 24px; }
.info h4 { font-size: 16px; font-weight: 900; text-transform: uppercase; margin: 0; }
.info small { color: #9ca3af; font-weight: 700; }

.qty-pill { display: flex; align-items: center; gap: 16px; background: #f9fafb; padding: 8px 16px; border-radius: 16px; border: 1px solid #f3f4f6; }
.qty-pill button { background: none; border: none; color: #d1d5db; font-weight: 700; cursor: pointer; }
.qty-pill span { font-weight: 900; font-size: 14px; }

.cta-btn {
  width: 100%;
  padding: 24px;
  background: #111827;
  color: white;
  border: none;
  border-radius: 24px;
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
  font-style: italic;
  letter-spacing: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">03. Reward Path Tracker</span>
          <CartGamified />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/cart bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cart:opacity-100 transition-opacity">
            <CopyButton
              jsxCode={`import React from 'react';

const CartMinimal = () => {
  return (
    <div className="bg-white p-12 md:p-16 rounded-[40px] border border-gray-100 max-w-5xl mx-auto font-sans shadow-sm">
      <h2 className="text-5xl font-black text-gray-900 mb-12 tracking-tighter uppercase italic">Bag_</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-[10px] uppercase tracking-[0.3em] text-gray-400 border-b-2 border-gray-50">
            <th className="pb-6 font-black">Entity</th>
            <th className="pb-6 font-black text-center">Unit_Qty</th>
            <th className="pb-6 font-black text-right">Value</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2].map((i) => (
            <tr key={i} className="border-b border-gray-50 group">
              <td className="py-10">
                <div className="flex items-center gap-10">
                  <div className="w-24 h-24 bg-gray-50 rounded-[24px] p-4 group-hover:bg-gray-100 transition-colors">
                    <img src="IMAGE_URL" className="w-full h-full object-contain mix-blend-multiply" alt="" />
                  </div>
                  <div>
                    <p className="font-black text-lg text-gray-900 uppercase tracking-tight">System Object {i}</p>
                    <button className="text-[10px] font-black text-gray-400 hover:text-red-500 mt-2 uppercase tracking-widest transition-colors">Delete_Node</button>
                  </div>
                </div>
              </td>
              <td className="py-10 text-center">
                <input type="number" defaultValue="1" className="w-16 p-3 bg-gray-50 rounded-xl font-black text-center outline-none focus:bg-white focus:ring-2 focus:ring-gray-100" />
              </td>
              <td className="py-10 text-right font-black text-xl text-gray-900">$250.00</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="mt-16 flex flex-col items-end">
        <div className="flex justify-between w-full max-w-md text-2xl font-black text-gray-900 mb-8 border-t-2 border-gray-900 pt-8">
          <span className="text-gray-400 font-bold uppercase text-xs tracking-[0.4em] self-center">Subtotal</span>
          <span>$649.00</span>
        </div>
        <button className="w-full max-w-md bg-black text-white py-6 rounded-2xl font-black text-xl hover:bg-gray-800 transition-all uppercase tracking-widest shadow-2xl">
          Checkout_Init
        </button>
      </div>
    </div>
  );
};

export default CartMinimal;`}
              htmlCode={`<div class="minimal-cart">
  <h2 class="page-title">Bag_</h2>
  <table class="cart-table">
    <thead>
      <tr>
        <th>Entity</th>
        <th class="center">Unit_Qty</th>
        <th class="right">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="product-cell">
            <div class="visual"><img src="IMAGE_URL" /></div>
            <div class="info">
              <h4>System Object</h4>
              <button class="del-btn">Delete_Node</button>
            </div>
          </div>
        </td>
        <td class="center">
          <input type="number" value="1">
        </td>
        <td class="right val">$250.00</td>
      </tr>
    </tbody>
  </table>

  <div class="summary-box">
    <div class="sub-row">
      <span>Subtotal</span>
      <strong>$649.00</strong>
    </div>
    <button class="checkout-btn">Checkout_Init</button>
  </div>
</div>`}
              cssCode={`.minimal-cart {
  background: white;
  padding: 64px;
  border-radius: 40px;
  max-width: 1000px;
  margin: 0 auto;
  font-family: 'Inter', system-ui, sans-serif;
}

.page-title { font-size: 64px; font-weight: 900; text-transform: uppercase; font-style: italic; margin-bottom: 64px; letter-spacing: -2px; }

.cart-table { width: 100%; border-collapse: collapse; }
.cart-table th { text-align: left; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 3px; color: #9ca3af; border-bottom: 2px solid #f9fafb; padding-bottom: 24px; }
.cart-table th.center { text-align: center; }
.cart-table th.right { text-align: right; }

.cart-table td { border-bottom: 1px solid #f9fafb; padding: 40px 0; }
.product-cell { display: flex; align-items: center; gap: 40px; }
.visual { width: 96px; height: 96px; background: #f9fafb; border-radius: 24px; padding: 16px; }
.visual img { width: 100%; height: 100%; object-fit: contain; }

.info h4 { font-size: 18px; font-weight: 900; text-transform: uppercase; margin: 0; }
.del-btn { background: none; border: none; font-size: 10px; font-weight: 900; color: #d1d5db; text-transform: uppercase; cursor: pointer; margin-top: 8px; }
.del-btn:hover { color: #ef4444; }

.val { font-size: 20px; font-weight: 900; }
input { width: 64px; padding: 12px; background: #f9fafb; border: none; border-radius: 12px; font-weight: 900; text-align: center; font-family: inherit; }

.summary-box { margin-top: 64px; display: flex; flex-direction: column; align-items: flex-end; }
.sub-row { width: 100%; max-width: 400px; display: flex; justify-content: space-between; border-top: 2px solid #111827; padding-top: 32px; margin-bottom: 32px; }
.sub-row span { font-size: 12px; font-weight: 900; text-transform: uppercase; color: #9ca3af; letter-spacing: 4px; align-self: center; }
.sub-row strong { font-size: 32px; font-weight: 900; }

.checkout-btn {
  width: 100%;
  max-width: 400px;
  padding: 24px;
  background: black;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 3px;
  cursor: pointer;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">04. Minimal Object Registry</span>
          <CartMinimal />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/cart bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cart:opacity-100 transition-opacity">
            <CopyButton
              jsxCode={`import React from 'react';

const CartUpsell = () => {
  return (
    <div className="bg-white p-8 rounded-[40px] border border-gray-100 max-w-md mx-auto shadow-2xl font-sans">
      <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight uppercase">My_Stash</h2>
      <div className="space-y-6 mb-10">
        {[1, 2].map((i) => (
          <div key={i} className="flex justify-between items-center bg-gray-50/50 p-4 rounded-3xl border border-gray-50">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-2xl p-2 border border-gray-100 shadow-sm">
                <img src="IMAGE_URL" className="w-full h-full object-contain" alt="" />
              </div>
              <div>
                <div className="font-black text-sm text-gray-900 uppercase">Object_{i}</div>
                <div className="font-bold text-xs text-gray-400 mt-0.5">$250.00</div>
              </div>
            </div>
            <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-[10px] font-black italic">x1</span>
          </div>
        ))}
      </div>

      <div className="bg-blue-600 rounded-[32px] p-8 mb-10 shadow-xl shadow-blue-100 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        <h3 className="text-xs font-black text-blue-100 mb-6 uppercase tracking-[0.2em] relative z-10">Optimize Your Kit_</h3>
        <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar-white relative z-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-shrink-0 w-32 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
              <div className="h-20 bg-white/20 rounded-xl mb-3 w-full animate-pulse"></div>
              <div className="text-[10px] font-black text-white uppercase truncate">Mesh_Case_V{i}</div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-[10px] font-bold text-blue-100">$29</span>
                <button className="bg-white text-blue-600 w-6 h-6 flex items-center justify-center rounded-full font-black hover:scale-110 transition-transform">+</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="w-full py-6 bg-gray-900 text-white font-black text-xl rounded-[28px] shadow-2xl hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all uppercase italic tracking-widest">
        Checkout_ // $649
      </button>
    </div>
  );
};

export default CartUpsell;`}
              htmlCode={`<div class="upsell-cart">
  <h2 class="title">My_Stash</h2>
  <div class="items-list">
    <div class="item-pill">
      <div class="info">
        <div class="icon-box"><img src="IMAGE_URL" /></div>
        <div class="text">
          <span class="name">Object_01</span>
          <span class="price">$250.00</span>
        </div>
      </div>
      <span class="qty-badge">x1</span>
    </div>
  </div>

  <div class="upsell-section">
    <h3 class="label">Optimize Your Kit_</h3>
    <div class="upsell-scroll">
      <div class="upsell-card">
        <div class="card-img"></div>
        <span class="card-name">Mesh_Case</span>
        <div class="card-bot">
          <span>$29</span>
          <button>+</button>
        </div>
      </div>
    </div>
  </div>

  <button class="final-btn">Checkout_ // $649</button>
</div>`}
              cssCode={`.upsell-cart {
  background: white;
  padding: 40px;
  border-radius: 40px;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 40px 100px rgba(0,0,0,0.1);
  font-family: 'Inter', sans-serif;
}

.title { font-size: 24px; font-weight: 900; text-transform: uppercase; margin-bottom: 32px; letter-spacing: -1px; }

.item-pill {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9fafb;
  padding: 16px;
  border-radius: 24px;
  margin-bottom: 16px;
}

.info { display: flex; align-items: center; gap: 16px; }
.icon-box { width: 56px; height: 56px; background: white; border-radius: 16px; padding: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.02); }
.icon-box img { width: 100%; height: 100%; object-fit: contain; }

.text .name { display: block; font-size: 14px; font-weight: 900; text-transform: uppercase; color: #111827; }
.text .price { font-size: 12px; font-weight: 700; color: #9ca3af; }

.qty-badge { background: #111827; color: white; font-size: 10px; font-weight: 900; font-style: italic; padding: 4px 12px; border-radius: 100px; }

.upsell-section {
  background: #2563eb;
  padding: 32px;
  border-radius: 32px;
  margin: 32px 0;
  color: white;
}

.label { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,0.7); margin-bottom: 24px; }
.upsell-scroll { display: flex; gap: 16px; overflow-x: auto; padding-bottom: 8px; }

.upsell-card {
  flex-shrink: 0;
  width: 128px;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  padding: 12px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.1);
}

.card-img { height: 80px; background: rgba(255,255,255,0.1); border-radius: 12px; margin-bottom: 12px; }
.card-name { font-size: 10px; font-weight: 900; text-transform: uppercase; display: block; margin-bottom: 8px; }
.card-bot { display: flex; justify-content: space-between; align-items: center; }
.card-bot span { font-size: 10px; font-weight: 700; }
.card-bot button { width: 24px; height: 24px; background: white; color: #2563eb; border: none; border-radius: 100px; font-weight: 900; cursor: pointer; }

.final-btn {
  width: 100%;
  padding: 24px;
  background: #111827;
  color: white;
  border: none;
  border-radius: 28px;
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
  font-style: italic;
  letter-spacing: 2px;
  cursor: pointer;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">05. Intelligence Upsell Module</span>
          <CartUpsell />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/cart bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cart:opacity-100 transition-opacity">
            <CopyButton
              jsxCode={`import React from 'react';

const CartMobile = () => {
  return (
    <div className="bg-slate-50 h-[650px] rounded-[3rem] overflow-hidden relative flex flex-col border-[8px] border-black max-w-sm mx-auto font-sans">
      <div className="bg-white p-6 border-b-[8px] border-black text-center shadow-[0_4px_0_0_#000] z-10">
        <span className="text-2xl font-black uppercase italic tracking-tighter">Mesh_Bag_</span>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white border-[4px] border-black p-4 flex gap-4 shadow-[8px_8px_0_0_#000] group">
            <div className="w-20 h-20 bg-gray-50 border-2 border-black flex-shrink-0 group-hover:rotate-3 transition-transform">
              <img src="IMAGE_URL" className="w-full h-full object-contain" alt="" />
            </div>
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <h4 className="font-black text-[10px] uppercase leading-tight text-gray-900">System_Payload_{i}</h4>
                <p className="text-[8px] font-black text-gray-400 uppercase mt-0.5 tracking-widest">Sector_Alpha</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="font-black text-sm text-gray-900">$250</span>
                <div className="flex items-center border-2 border-black bg-gray-50 p-0.5">
                  <button className="px-2 font-black text-xs hover:bg-black hover:text-white">-</button>
                  <span className="px-2 text-[10px] font-black border-x-2 border-black">1</span>
                  <button className="px-2 font-black text-xs hover:bg-black hover:text-white">+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="h-24"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-white border-t-[8px] border-black p-8 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <div className="flex justify-between text-2xl font-black uppercase italic mb-8">
          <span className="text-gray-300">Total</span>
          <span className="text-gray-900">$649</span>
        </div>
        <button className="w-full bg-black text-white py-6 text-2xl font-black uppercase border-4 border-black shadow-[8px_8px_0_0_#facc15] hover:bg-white hover:text-black transition-all">
          Checkout_
        </button>
      </div>
    </div>
  );
};

export default CartMobile;`}
              htmlCode={`<div class="mobile-cart">
  <div class="top-bar">
    <span>Mesh_Bag_</span>
  </div>
  
  <div class="items-area">
    <div class="payload-card">
      <div class="thumb"><img src="IMAGE_URL" /></div>
      <div class="body">
        <div class="meta">
          <h4>System_Payload</h4>
          <small>Sector_Alpha</small>
        </div>
        <div class="action-row">
          <strong>$250</strong>
          <div class="qty-stepper">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="sticky-footer">
    <div class="total-line">
      <span>Total</span>
      <strong>$649</strong>
    </div>
    <button class="submit-btn">Checkout_</button>
  </div>
</div>`}
              cssCode={`.mobile-cart {
  width: 360px;
  height: 650px;
  background: #f8fafc;
  border: 8px solid black;
  border-radius: 48px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
}

.top-bar {
  background: white;
  padding: 24px;
  border-bottom: 8px solid black;
  text-align: center;
  box-shadow: 0 4px 0 0 black;
}
.top-bar span { font-size: 24px; font-weight: 900; text-transform: uppercase; font-style: italic; }

.items-area { flex: 1; padding: 24px; overflow-y: auto; }
.payload-card {
  background: white;
  border: 4px solid black;
  padding: 16px;
  display: flex;
  gap: 16px;
  box-shadow: 8px 8px 0 0 black;
  margin-bottom: 32px;
}

.thumb { width: 80px; height: 80px; background: #f9fafb; border: 2px solid black; flex-shrink: 0; }
.thumb img { width: 100%; height: 100%; object-fit: contain; }

.body { flex: 1; display: flex; flex-direction: column; justify-content: space-between; }
.meta h4 { font-size: 10px; font-weight: 900; text-transform: uppercase; margin: 0; }
.meta small { font-size: 8px; font-weight: 900; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px; }

.action-row { display: flex; justify-content: space-between; align-items: center; }
.action-row strong { font-size: 14px; font-weight: 900; }

.qty-stepper { display: flex; border: 2px solid black; background: #f9fafb; }
.qty-stepper button { border: none; background: none; font-weight: 900; padding: 0 8px; cursor: pointer; }
.qty-stepper span { font-size: 10px; font-weight: 900; border-left: 2px solid black; border-right: 2px solid black; padding: 0 8px; }

.sticky-footer { position: absolute; bottom: 0; left: 0; width: 100%; background: white; border-top: 8px solid black; padding: 32px; box-sizing: border-box; }
.total-line { display: flex; justify-content: space-between; margin-bottom: 24px; }
.total-line span { font-size: 24px; font-weight: 900; color: #d1d5db; text-transform: uppercase; font-style: italic; }
.total-line strong { font-size: 24px; font-weight: 900; }

.submit-btn {
  width: 100%;
  padding: 24px;
  background: black;
  color: white;
  border: 4px solid black;
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 8px 8px 0 0 #facc15;
}

.submit-btn:hover { background: white; color: black; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">06. Mobile Sector Bag</span>
          <CartMobile />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/cart bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cart:opacity-100 transition-opacity">
            <CopyButton
              jsxCode={`import React from 'react';

const CartGlass = () => {
  return (
    <div className="relative h-[650px] w-full max-w-4xl mx-auto rounded-[3.5rem] overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-10 flex items-center justify-center font-sans">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-400/20 rounded-full blur-[100px] animate-pulse animation-delay-2000"></div>

      <div className="relative bg-white/10 backdrop-blur-[40px] border-[6px] border-white/20 p-10 md:p-14 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] w-full max-w-md h-full flex flex-col border-white/30">
        <h2 className="text-4xl font-black text-white mb-10 border-b-4 border-white/10 pb-6 italic uppercase tracking-tighter">Bag_Sync</h2>
        
        <div className="flex-1 overflow-y-auto space-y-6 pr-3 custom-scrollbar-white">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-6 p-5 bg-white/5 border-2 border-white/10 rounded-[24px] hover:bg-white/15 transition-all group cursor-pointer">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                 <img src="IMAGE_URL" className="w-10 h-10 object-contain brightness-0 invert" alt=""/>
              </div>
              <div className="flex-1 text-white">
                <h4 className="font-black text-sm uppercase truncate tracking-tight">Node_Asset_0{i}</h4>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-2xl font-black text-white/90 tracking-tighter">$250</span>
                  <span className="text-[10px] bg-white/20 px-3 py-1 rounded-full font-black text-white/60 uppercase tracking-widest border border-white/10">Active</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t-4 border-white/10 pt-10">
          <div className="flex justify-between font-black text-3xl text-white uppercase italic mb-10 tracking-tighter">
            <span className="opacity-50">Sum_</span>
            <span>$649.00</span>
          </div>
          <button className="w-full bg-white text-indigo-600 py-6 text-2xl font-black uppercase rounded-[24px] shadow-2xl hover:scale-105 active:scale-95 transition-all italic tracking-widest border-b-8 border-indigo-200">
            Val_&_Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartGlass;`}
              htmlCode={`<div class="glass-cart">
  <div class="glass-pane">
    <h2 class="glass-title">Bag_Sync</h2>
    <div class="glass-items">
      <div class="glass-card">
        <div class="icon-wrap"><img src="IMAGE_URL" /></div>
        <div class="card-content">
          <h4>Node_Asset_01</h4>
          <div class="card-bot">
            <strong>$250</strong>
            <span class="status">Active</span>
          </div>
        </div>
      </div>
    </div>
    <div class="glass-footer">
      <div class="glass-sum">
        <span>Sum_</span>
        <strong>$649.00</strong>
      </div>
      <button class="glass-btn">Val_&_Pay</button>
    </div>
  </div>
</div>`}
              cssCode={`.glass-cart {
  width: 100%;
  height: 650px;
  background: linear-gradient(135deg, #4f46e5, #ec4899);
  border-radius: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
}

.glass-pane {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(40px);
  width: 400px;
  height: 85%;
  border-radius: 48px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 48px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 50px 100px rgba(0,0,0,0.2);
}

.glass-title { font-size: 32px; font-weight: 900; color: white; text-transform: uppercase; font-style: italic; border-bottom: 4px solid rgba(255,255,255,0.1); padding-bottom: 24px; margin-bottom: 32px; letter-spacing: -2px; }

.glass-items { flex: 1; overflow-y: auto; }
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 20px;
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
  transition: 0.3s;
}

.icon-wrap { width: 64px; height: 64px; background: rgba(255, 255, 255, 0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; }
.icon-wrap img { width: 40px; height: 40px; filter: brightness(0) invert(1); }

.card-content { flex: 1; color: white; }
.card-content h4 { font-size: 14px; font-weight: 900; text-transform: uppercase; margin: 0; }
.card-bot { display: flex; justify-content: space-between; align-items: center; margin-top: 12px; }
.card-bot strong { font-size: 20px; font-weight: 900; }
.status { font-size: 8px; font-weight: 900; text-transform: uppercase; color: rgba(255,255,255,0.5); border: 1px solid rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 100px; }

.glass-footer { margin-top: 32px; border-top: 4px solid rgba(255,255,255,0.1); padding-top: 32px; }
.glass-sum { display: flex; justify-content: space-between; color: white; margin-bottom: 32px; }
.glass-sum span { font-size: 24px; font-weight: 900; font-style: italic; opacity: 0.5; }
.glass-sum strong { font-size: 24px; font-weight: 900; }

.glass-btn {
  width: 100%;
  padding: 24px;
  background: white;
  color: #4f46e5;
  border: none;
  border-radius: 24px;
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  font-style: italic;
  cursor: pointer;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">07. Glassmorphic Data Flow</span>
          <CartGlass />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/cart bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cart:opacity-100 transition-opacity">
            <CopyButton
              jsxCode={`import React from 'react';

const CartBrutalist = () => {
  return (
    <div className="bg-yellow-400 p-8 md:p-12 border-[10px] border-black h-[700px] flex flex-col max-w-2xl mx-auto shadow-[32px_32px_0_0_#000] font-sans">
      <div className="bg-white border-[8px] border-black p-8 mb-10 rotate-[-2deg] shadow-[15px_15px_0_0_#000] text-center">
        <h2 className="text-6xl font-black uppercase italic tracking-widest">Cart_Lock_V1</h2>
      </div>

      <div className="flex-1 overflow-y-auto space-y-8 pr-3 custom-scrollbar-black">
        {[1, 2].map((i) => (
          <div key={i} className="bg-white border-[6px] border-black p-6 flex gap-8 items-center shadow-[12px_12px_0_0_#ff00ff] hover:translate-x-1 hover:translate-y-1 transition-all">
            <div className="w-28 h-28 border-[6px] border-black flex-shrink-0 bg-black overflow-hidden relative group">
              <img src="IMAGE_URL" className="w-full h-full object-cover grayscale contrast-150 group-hover:scale-125 transition-transform" alt="" />
            </div>
            <div className="flex-1">
              <h3 className="font-black text-2xl uppercase leading-none mb-6 italic tracking-tight">System_Asset_{i}</h3>
              <div className="flex justify-between items-center">
                <span className="bg-black text-white px-4 py-2 font-black text-2xl italic shadow-[4px_4px_0_0_#00ffff]">$250</span>
                <div className="font-black border-[6px] border-black px-6 py-2 bg-white text-2xl shadow-[4px_4px_0_0_#000]">x1</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white border-[10px] border-black p-10 shadow-[20px_20px_0_0_#000]">
        <div className="flex justify-between font-black text-5xl mb-10 uppercase italic tracking-tighter">
          <span className="text-gray-300">Val_</span>
          <span>$649</span>
        </div>
        <button className="w-full py-8 bg-cyan-400 border-[8px] border-black font-black uppercase text-4xl italic hover:bg-pink-500 hover:-translate-y-2 hover:shadow-[15px_15px_0_0_#000] transition-all active:translate-y-1 active:shadow-none">
          Buy_It_Now_
        </button>
      </div>
    </div>
  );
};

export default CartBrutalist;`}
              htmlCode={`<div class="brutalist-cart">
  <div class="brutalist-header">
    <h1>Cart_Lock_V1</h1>
  </div>
  
  <div class="items-list">
    <div class="brutalist-card">
      <div class="img-box"><img src="IMAGE_URL" /></div>
      <div class="details">
        <h3>System_Asset</h3>
        <div class="row">
          <span class="price">$250</span>
          <span class="qty">x1</span>
        </div>
      </div>
    </div>
  </div>

  <div class="brutalist-footer">
    <div class="val-row">
      <span class="lbl">Val_</span>
      <span class="amt">$649</span>
    </div>
    <button class="buy-btn">Buy_It_Now_</button>
  </div>
</div>`}
              cssCode={`.brutalist-cart {
  background: #fff200;
  padding: 48px;
  border: 10px solid black;
  width: 600px;
  height: 750px;
  display: flex;
  flex-direction: column;
  box-shadow: 32px 32px 0 0 black;
  font-family: 'Inter', sans-serif;
}

.brutalist-header {
  background: white;
  border: 8px solid black;
  padding: 32px;
  transform: rotate(-2deg);
  box-shadow: 15px 15px 0 0 black;
  text-align: center;
  margin-bottom: 40px;
}
.brutalist-header h1 { font-size: 48px; font-weight: 900; text-transform: uppercase; font-style: italic; margin: 0; }

.items-list { flex: 1; overflow-y: auto; padding-right: 16px; }
.brutalist-card {
  background: white;
  border: 6px solid black;
  padding: 24px;
  display: flex;
  gap: 32px;
  box-shadow: 12px 12px 0 0 #ff00ff;
  margin-bottom: 40px;
}

.img-box { width: 112px; height: 112px; border: 6px solid black; background: black; flex-shrink: 0; overflow: hidden; }
.img-box img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(1) contrast(1.5); }

.details { flex: 1; }
.details h3 { font-size: 24px; font-weight: 900; text-transform: uppercase; font-style: italic; margin-bottom: 24px; }

.row { display: flex; justify-content: space-between; align-items: center; }
.price { background: black; color: white; padding: 8px 16px; font-size: 24px; font-weight: 900; font-style: italic; box-shadow: 4px 4px 0 0 #00ffff; }
.qty { background: white; border: 6px solid black; padding: 8px 24px; font-size: 24px; font-weight: 900; box-shadow: 4px 4px 0 0 black; }

.brutalist-footer { background: white; border: 10px solid black; padding: 40px; box-shadow: 20px 20px 0 0 black; margin-top: 40px; }
.val-row { display: flex; justify-content: space-between; margin-bottom: 40px; }
.val-row .lbl { font-size: 48px; font-weight: 900; color: #e5e7eb; text-transform: uppercase; font-style: italic; }
.val-row .amt { font-size: 48px; font-weight: 900; }

.buy-btn {
  width: 100%;
  padding: 32px;
  background: #22d3ee;
  border: 8px solid black;
  font-size: 32px;
  font-weight: 900;
  text-transform: uppercase;
  font-style: italic;
  cursor: pointer;
  box-shadow: 15px 15px 0 0 black;
  transition: 0.2s;
}

.buy-btn:hover { background: #ff00ff; transform: translate(-4px, -4px); box-shadow: 19px 19px 0 0 black; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">08. Brutalist Locking System</span>
          <CartBrutalist />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/cart bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cart:opacity-100 transition-opacity">
            <CopyButton
              jsxCode={`import React from 'react';

const CartPromo = () => {
  return (
    <div className="bg-white p-12 rounded-[40px] border border-gray-100 max-w-xl mx-auto font-sans shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)]">
      <h2 className="text-3xl font-black text-gray-900 mb-10 uppercase tracking-tighter italic">Summary_Init</h2>
      <div className="space-y-6 mb-12 border-b-2 border-gray-50 pb-12">
        {[1, 2].map((i) => (
          <div key={i} className="flex justify-between items-center text-sm font-bold text-gray-500">
            <span className="uppercase tracking-[0.2em] opacity-40 italic">Asset_Load_{i}</span>
            <span className="font-black text-gray-900 text-lg">$250.00</span>
          </div>
        ))}
      </div>

      <div className="mb-12 p-10 bg-slate-50 rounded-[32px] border-2 border-gray-100 shadow-inner relative group">
        <label className="text-[10px] font-black text-gray-400 uppercase mb-4 block tracking-[0.4em] ml-1">Voucher_Protocol</label>
        <div className="flex gap-4">
          <input type="text" placeholder="ALPHA_20" className="flex-1 px-6 py-5 bg-white border-2 border-gray-200 rounded-2xl outline-none focus:border-blue-600 uppercase font-black tracking-[0.2em] text-sm shadow-sm transition-all" />
          <button className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-black text-sm hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-xl shadow-gray-200">Val_</button>
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <div className="flex justify-between text-gray-400 font-black uppercase text-[10px] tracking-[0.5em]"><span>Subtotal</span><span>$649.00</span></div>
        <div className="flex justify-between text-gray-400 font-black uppercase text-[10px] tracking-[0.5em]"><span>Discount</span><span>-$0.00</span></div>
        <div className="flex justify-between text-5xl font-black text-gray-900 mt-10 tracking-tighter italic">
          <span className="opacity-10 self-end mb-2">Total</span>
          <span>$649.00</span>
        </div>
      </div>

      <button className="w-full mt-14 py-8 bg-blue-600 text-white rounded-[32px] font-black text-2xl uppercase italic tracking-widest hover:bg-blue-700 shadow-[0_20px_50px_rgba(37,99,235,0.3)] hover:translate-y-[-2px] active:translate-y-[1px] transition-all">
        Execute Sync
      </button>
    </div>
  );
};

export default CartPromo;`}
              htmlCode={`<div class="promo-cart">
  <h2 class="title">Summary_Init</h2>
  <div class="items-summary">
    <div class="s-row">
      <span class="lbl">Asset_Load</span>
      <span class="val">$250.00</span>
    </div>
  </div>

  <div class="promo-box">
    <label>Voucher_Protocol</label>
    <div class="input-wrap">
      <input type="text" placeholder="ALPHA_20">
      <button>Val_</button>
    </div>
  </div>

  <div class="final-totals">
    <div class="t-row"><span>Subtotal</span><span>$649.00</span></div>
    <div class="total-big">
      <span class="t-lbl">Total</span>
      <span class="t-amt">$649.00</span>
    </div>
  </div>

  <button class="sync-btn">Execute Sync</button>
</div>`}
              cssCode={`.promo-cart {
  background: white;
  padding: 64px;
  border-radius: 56px;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 50px 100px rgba(0,0,0,0.1);
  font-family: 'Inter', sans-serif;
}

.title { font-size: 32px; font-weight: 900; text-transform: uppercase; font-style: italic; margin-bottom: 48px; letter-spacing: -2px; }

.items-summary { border-bottom: 2px solid #f9fafb; padding-bottom: 48px; margin-bottom: 48px; }
.s-row { display: flex; justify-content: space-between; margin-bottom: 24px; }
.s-row .lbl { font-size: 10px; font-weight: 900; text-transform: uppercase; color: #d1d5db; letter-spacing: 2px; }
.s-row .val { font-size: 18px; font-weight: 900; }

.promo-box { background: #f8fafc; padding: 40px; border-radius: 32px; margin-bottom: 48px; }
.promo-box label { font-size: 8px; font-weight: 900; text-transform: uppercase; color: #9ca3af; letter-spacing: 4px; display: block; margin-bottom: 24px; }

.input-wrap { display: flex; gap: 16px; }
.input-wrap input { flex: 1; padding: 20px; border-radius: 16px; border: 2px solid #f1f5f9; font-weight: 900; text-transform: uppercase; outline: none; }
.input-wrap button { padding: 0 32px; background: black; color: white; border-radius: 16px; font-weight: 900; cursor: pointer; border: none; }

.t-row { display: flex; justify-content: space-between; margin-bottom: 16px; }
.t-row span { font-size: 8px; font-weight: 900; text-transform: uppercase; color: #d1d5db; letter-spacing: 4px; }

.total-big { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 32px; }
.t-lbl { font-size: 14px; font-weight: 900; text-transform: uppercase; color: #d1d5db; margin-bottom: 8px; }
.t-amt { font-size: 48px; font-weight: 900; font-style: italic; letter-spacing: -2px; }

.sync-btn {
  width: 100%;
  padding: 32px;
  background: #2563eb;
  color: white;
  border-radius: 32px;
  border: none;
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  font-style: italic;
  cursor: pointer;
  box-shadow: 0 20px 50px rgba(37, 99, 235, 0.3);
  margin-top: 48px;
}`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">09. Voucher Protocol Interface</span>
          <CartPromo />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/cart bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cart:opacity-100 transition-opacity">
            <CopyButton
              jsxCode={`import React from 'react';

const CartEmpty = () => {
  return (
    <div className="bg-white p-16 md:p-24 rounded-[4rem] border border-gray-50 h-[700px] flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl font-sans">
      <div className="absolute top-20 left-20 text-[12rem] font-black opacity-[0.02] select-none uppercase tracking-tighter rotate-[-10deg]">Empty_</div>
      <div className="w-64 h-64 bg-gray-50 rounded-full flex items-center justify-center mb-16 relative shadow-inner group">
        <svg className="w-32 h-32 text-gray-200 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
        <div className="absolute -top-4 -right-4 text-8xl animate-bounce drop-shadow-2xl">🛒</div>
      </div>
      
      <h2 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic">Ghost_Node.</h2>
      <p className="text-gray-400 mb-16 max-w-sm font-black uppercase tracking-[0.3em] text-[10px] leading-loose">No payloads detected in this sector. Scan for new assets immediately.</p>
      
      <button className="px-16 py-7 bg-black text-white rounded-[30px] font-black text-2xl hover:bg-gray-800 transition-all shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-110 active:scale-95 uppercase tracking-widest italic">
        Start_Scanning_
      </button>

      <div className="mt-24 w-full opacity-30">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-12"></div>
        <div className="flex gap-8 justify-center grayscale">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="w-16 h-16 bg-gray-100 rounded-2xl border border-gray-200"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;`}
              htmlCode={`<div class="empty-state">
  <div class="bg-txt">Empty_</div>
  <div class="visual-wrap">
    <div class="circle-bg">
       <svg class="cart-svg" viewBox="0 0 24 24">...</svg>
       <div class="emoji">🛒</div>
    </div>
  </div>

  <h2 class="title">Ghost_Node.</h2>
  <p class="desc">No payloads detected in this sector. Scan for new assets immediately.</p>
  
  <button class="scan-btn">Start_Scanning_</button>

  <div class="footer-hint">
    <div class="divider"></div>
    <div class="slots">
      <div class="slot"></div>
      <div class="slot"></div>
    </div>
  </div>
</div>`}
              cssCode={`.empty-state {
  background: white;
  padding: 80px;
  border-radius: 64px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 50px 100px rgba(0,0,0,0.05);
}

.bg-txt { position: absolute; top: 80px; left: 80px; font-size: 200px; font-weight: 900; opacity: 0.02; text-transform: uppercase; letter-spacing: -10px; transform: rotate(-10deg); pointer-events: none; }

.visual-wrap { margin-bottom: 64px; }
.circle-bg { width: 250px; height: 250px; background: #f9fafb; border-radius: 50%; display: flex; align-items: center; justify-content: center; position: relative; box-shadow: inset 0 10px 20px rgba(0,0,0,0.02); }
.cart-svg { width: 120px; height: 120px; color: #e5e7eb; }
.emoji { position: absolute; top: -20px; right: -20px; font-size: 80px; filter: drop-shadow(0 20px 30px rgba(0,0,0,0.1)); animation: bounce 2s infinite; }

.title { font-size: 80px; font-weight: 900; color: #111827; text-transform: uppercase; font-style: italic; margin: 0 0 24px; letter-spacing: -4px; }
.desc { font-size: 10px; font-weight: 900; color: #9ca3af; text-transform: uppercase; letter-spacing: 4px; max-width: 300px; line-height: 2; margin-bottom: 64px; }

.scan-btn {
  padding: 28px 64px;
  background: black;
  color: white;
  border-radius: 40px;
  border: none;
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  font-style: italic;
  cursor: pointer;
  box-shadow: 0 30px 60px rgba(0,0,0,0.2);
  transition: 0.3s;
}
.scan-btn:hover { transform: scale(1.1); background: #1f2937; }

.footer-hint { width: 100%; margin-top: 80px; opacity: 0.3; }
.divider { height: 1px; background: linear-gradient(90deg, transparent, #e5e7eb, transparent); margin-bottom: 40px; }
.slots { display: flex; gap: 32px; justify-content: center; }
.slot { width: 64px; height: 64px; background: #f3f4f6; border-radius: 20px; }

@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">10. Ghost Node Empty State</span>
          <CartEmpty />
        </section>

      </div>
    </div>
  );
};

export default CartGallery;