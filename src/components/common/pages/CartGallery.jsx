import React, { useState } from 'react';

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
  <div className="bg-gray-200 h-[600px] rounded-3xl flex justify-end overflow-hidden relative">
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
        <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">
          Checkout
        </button>
      </div>
    </div>
  </div>
);

// --- 3. The Gamified (Free Shipping Bar) ---
export const CartGamified = () => {
  const current = 649;
  const goal = 1000;
  const progress = Math.min((current / goal) * 100, 100);
  const remaining = goal - current;

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-200 max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="bg-gray-50 p-4 rounded-xl mb-8 text-center">
        <p className="text-sm font-medium mb-3">
          {remaining > 0 
            ? <span>Add <span className="font-bold text-blue-600">${remaining}</span> more to unlock Free Shipping!</span> 
            : <span className="text-green-600 font-bold">🎉 You've unlocked Free Shipping!</span>}
        </p>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 transition-all duration-1000 ease-out" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="space-y-6 mb-8">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0">
            <div className="flex items-center gap-4">
              <img src={item.img} className="w-16 h-16 rounded-lg object-contain bg-gray-50 border border-gray-100" alt="" />
              <div>
                <div className="font-bold">{item.name}</div>
                <div className="text-sm text-gray-500">${item.price}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
               <div className="flex items-center border rounded-md">
                 <button className="px-2 py-1 hover:bg-gray-100">-</button>
                 <span className="px-2 text-sm">{item.qty}</span>
                 <button className="px-2 py-1 hover:bg-gray-100">+</button>
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div className="text-xl font-bold">Total: $649.00</div>
        <button className="px-8 py-3 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform">
          Secure Checkout
        </button>
      </div>
    </div>
  );
};

// --- 4. The Minimalist (Table) ---
export const CartMinimal = () => (
  <div className="bg-white p-12 rounded-3xl h-[600px] overflow-y-auto">
    <h1 className="text-4xl font-serif text-center mb-12">Your Bag</h1>
    
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="text-xs text-gray-400 uppercase tracking-widest border-b border-gray-200">
          <th className="pb-4 font-normal">Product</th>
          <th className="pb-4 font-normal">Quantity</th>
          <th className="pb-4 font-normal text-right">Total</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id} className="border-b border-gray-100 group">
            <td className="py-6">
              <div className="flex items-center gap-6">
                <img src={item.img} alt="" className="w-20 h-20 object-cover bg-gray-50" />
                <div>
                  <p className="font-medium text-lg">{item.name}</p>
                  <p className="text-gray-500 text-sm">{item.color}</p>
                  <button className="text-xs text-gray-400 underline mt-2 hover:text-black opacity-0 group-hover:opacity-100 transition-opacity">Remove</button>
                </div>
              </div>
            </td>
            <td className="py-6">
              <input type="number" defaultValue={item.qty} className="w-16 p-2 border-b border-gray-300 focus:border-black outline-none text-center bg-transparent" />
            </td>
            <td className="py-6 text-right font-medium text-lg">${item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <div className="mt-12 flex flex-col items-end">
      <div className="flex justify-between w-full max-w-xs mb-4">
        <span className="text-gray-500">Subtotal</span>
        <span className="font-bold">$649.00</span>
      </div>
      <p className="text-sm text-gray-400 mb-8">Taxes and shipping calculated at checkout</p>
      <button className="w-full max-w-xs py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
        Proceed to Checkout
      </button>
    </div>
  </div>
);

// --- 5. The Upsell Focus (Cross-sell) ---
export const CartUpsell = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-200 h-[600px] flex flex-col">
    <div className="flex-1 overflow-y-auto mb-6">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <img src={item.img} className="w-12 h-12 rounded bg-gray-50 object-contain" alt="" />
            <div>
              <div className="font-medium text-sm">{item.name}</div>
              <div className="text-gray-500 text-xs">${item.price}</div>
            </div>
          </div>
          <span className="text-sm">x{item.qty}</span>
        </div>
      ))}
    </div>

    {/* Upsell Section */}
    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-6">
      <h3 className="text-sm font-bold text-blue-900 mb-3">You might also like</h3>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex-shrink-0 w-32 bg-white p-2 rounded-lg border border-blue-100 shadow-sm">
            <div className="h-20 bg-gray-100 rounded mb-2 w-full"></div>
            <div className="text-xs font-bold truncate">Premium Case</div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs text-gray-500">$29</span>
              <button className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700">+</button>
            </div>
          </div>
        ))}
      </div>
    </div>

    <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
      Checkout • $649.00
    </button>
  </div>
);

// --- 6. The Sticky Bottom (Mobile First) ---
export const CartMobile = () => (
  <div className="bg-gray-100 h-[600px] rounded-3xl overflow-hidden relative flex flex-col border border-gray-300 max-w-sm mx-auto">
    <div className="bg-white p-4 shadow-sm z-10 flex justify-center">
      <span className="font-bold">My Cart</span>
    </div>

    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {cartItems.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm flex gap-4">
          <img src={item.img} className="w-20 h-20 bg-gray-50 rounded-xl object-contain" alt="" />
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-sm leading-tight mb-1">{item.name}</h4>
              <p className="text-xs text-gray-500">{item.color}</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">${item.price}</span>
              <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-2 py-1">
                <button className="text-gray-500">-</button>
                <span className="text-xs font-bold">{item.qty}</span>
                <button className="text-gray-500">+</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Spacer for sticky bottom */}
      <div className="h-20"></div>
    </div>

    {/* Sticky Bottom Bar */}
    <div className="absolute bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between text-sm mb-4">
        <span className="text-gray-500">Total (2 items)</span>
        <span className="font-bold text-lg">$649.00</span>
      </div>
      <button className="w-full py-3 bg-black text-white rounded-xl font-bold text-lg">
        Checkout
      </button>
    </div>
  </div>
);

// --- 7. The Glassmorphism (Aesthetic) ---
export const CartGlass = () => (
  <div className="relative h-[600px] w-full rounded-3xl overflow-hidden bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-400 p-8 flex items-center justify-center">
    <div className="absolute top-10 left-10 w-48 h-48 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob"></div>
    <div className="absolute bottom-10 right-10 w-48 h-48 bg-cyan-300 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

    <div className="relative bg-white/30 backdrop-blur-xl border border-white/40 p-8 rounded-[2rem] shadow-2xl w-full max-w-md h-full flex flex-col">
      <h2 className="text-2xl font-bold text-white mb-6 drop-shadow-md">Shopping Bag</h2>
      
      <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar-light">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4 p-3 bg-white/20 rounded-2xl border border-white/20 hover:bg-white/30 transition-colors">
            <div className="w-16 h-16 bg-white/40 rounded-xl flex items-center justify-center">
               <img src={item.img} className="w-12 h-12 object-contain" alt=""/>
            </div>
            <div className="flex-1 text-white">
              <h4 className="font-medium text-sm truncate">{item.name}</h4>
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold">${item.price}</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded text-white">Qty: {item.qty}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-white/20 pt-6">
        <div className="flex justify-between text-white font-bold text-xl mb-6">
          <span>Total</span>
          <span>$649.00</span>
        </div>
        <button className="w-full py-3 bg-white text-purple-600 font-bold rounded-xl shadow-lg hover:scale-[1.02] transition-transform">
          Pay Now
        </button>
      </div>
    </div>
  </div>
);

// --- 8. The Brutalist (Bold) ---
export const CartBrutalist = () => (
  <div className="bg-yellow-400 p-8 rounded-3xl border-4 border-black h-[600px] flex flex-col">
    <div className="bg-white border-4 border-black p-4 mb-6 shadow-[4px_4px_0_0_#000]">
      <h2 className="text-4xl font-black uppercase">Your Stash</h2>
    </div>

    <div className="flex-1 overflow-y-auto space-y-4 pr-2">
      {cartItems.map((item) => (
        <div key={item.id} className="bg-white border-4 border-black p-4 flex gap-4 items-center shadow-[4px_4px_0_0_#000]">
          <div className="w-20 h-20 border-2 border-black flex-shrink-0">
            <img src={item.img} className="w-full h-full object-cover grayscale contrast-125" alt="" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg uppercase leading-none mb-2">{item.name}</h3>
            <div className="flex justify-between items-center">
              <span className="bg-black text-white px-2 py-1 font-bold text-sm">${item.price}</span>
              <div className="font-bold border-2 border-black px-2">x{item.qty}</div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-6 bg-white border-4 border-black p-6">
      <div className="flex justify-between font-black text-2xl mb-4 uppercase">
        <span>Total</span>
        <span>$649</span>
      </div>
      <button className="w-full py-4 bg-pink-500 border-4 border-black font-black uppercase text-xl hover:bg-pink-400 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000] transition-all">
        Buy It Now
      </button>
    </div>
  </div>
);

// --- 9. The Promo Code Focus ---
export const CartPromo = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 max-w-lg mx-auto">
    <h2 className="text-xl font-bold mb-6">Summary</h2>
    
    <div className="space-y-3 mb-8">
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between text-sm">
          <span className="text-gray-600">{item.name} (x{item.qty})</span>
          <span className="font-medium">${item.price}</span>
        </div>
      ))}
    </div>

    <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
      <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Discount Code</label>
      <div className="flex gap-2">
        <input type="text" placeholder="SUMMER20" className="flex-1 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-black uppercase" />
        <button className="bg-gray-900 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-700">Apply</button>
      </div>
    </div>

    <div className="border-t border-gray-100 pt-6 space-y-2">
      <div className="flex justify-between text-gray-500"><span>Subtotal</span><span>$649.00</span></div>
      <div className="flex justify-between text-gray-500"><span>Discount</span><span>- $0.00</span></div>
      <div className="flex justify-between text-xl font-bold text-gray-900 mt-2"><span>Total</span><span>$649.00</span></div>
    </div>
    
    <button className="w-full mt-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 shadow-lg shadow-blue-100">
      Proceed to Checkout
    </button>
  </div>
);

// --- 10. The Empty State (Recovery) ---
export const CartEmpty = () => (
  <div className="bg-white p-12 rounded-3xl border border-gray-100 h-[600px] flex flex-col items-center justify-center text-center">
    <div className="w-40 h-40 bg-gray-50 rounded-full flex items-center justify-center mb-8 relative">
      <svg className="w-20 h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
      <div className="absolute top-2 right-4 text-4xl">🕸️</div>
    </div>
    
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
    <p className="text-gray-500 mb-8 max-w-sm">Looks like you haven't added anything to your cart yet. Discover our new arrivals.</p>
    
    <button className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-colors mb-12">
      Start Shopping
    </button>

    <div className="border-t border-gray-100 w-full pt-8">
      <p className="text-sm font-bold text-gray-900 mb-4">Trending Now</p>
      <div className="flex gap-4 justify-center">
        {[1, 2, 3].map(i => (
          <div key={i} className="w-20 h-20 bg-gray-50 rounded-lg border border-gray-100"></div>
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
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Cart Page Components</h1>
        <p className="text-slate-500">Diverse layouts for the shopping cart experience.</p>
      </div>
      
      <div className="space-y-32 max-w-7xl mx-auto">
        
        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">01. Standard Split</span>
          <CartStandard />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">02. Slide-over Drawer</span>
          <CartDrawer />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">03. Gamified (Free Shipping)</span>
          <CartGamified />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">04. Minimalist Table</span>
          <CartMinimal />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">05. Cross-sell Upsell</span>
          <CartUpsell />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">06. Mobile Sticky Bottom</span>
          <CartMobile />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">07. Glassmorphism</span>
          <CartGlass />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">08. Brutalist</span>
          <CartBrutalist />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">09. Promo Code Focus</span>
          <CartPromo />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">10. Empty State</span>
          <CartEmpty />
        </section>

      </div>
    </div>
  );
};

export default CartGallery;