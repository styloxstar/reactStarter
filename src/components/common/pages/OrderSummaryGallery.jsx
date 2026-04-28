import React, { useState } from 'react';
import CopyButton from '../CopyButton';

// --- Professional Order Data ---
const ORDER_ITEMS = [
  { id: "PROD-102", name: "Premium Wireless Headphones", price: 299, qty: 1, category: "Electronics" },
  { id: "PROD-205", name: "Ergonomic Office Chair", price: 450, qty: 1, category: "Furniture" },
  { id: "PROD-088", name: "USB-C Fast Charger", price: 45, qty: 2, category: "Accessories" },
];

const subtotal = ORDER_ITEMS.reduce((acc, item) => acc + (item.price * item.qty), 0);
const shipping = 25;
const tax = subtotal * 0.08;
const total = subtotal + shipping + tax;

// --- High-Fidelity Professional Variants ---

export const OrderStandard = () => (
  <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl max-w-3xl mx-auto font-sans text-left">
    <div className="flex justify-between items-start mb-12 border-b border-gray-50 pb-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-1">Order Summary</h2>
        <p className="text-gray-500 font-medium">Order #88291 • Oct 24, 2024</p>
      </div>
      <div className="bg-green-50 text-green-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Confirmed</div>
    </div>
    <div className="space-y-6 mb-12">
      {ORDER_ITEMS.map((item) => (
        <div key={item.id} className="flex justify-between items-center group">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">{item.name}</h4>
              <p className="text-sm text-gray-400 font-medium">Qty: {item.qty} • {item.category}</p>
            </div>
          </div>
          <span className="text-lg font-bold text-gray-900">${item.price * item.qty}</span>
        </div>
      ))}
    </div>
    <div className="space-y-4 pt-8 border-t border-gray-50">
      <div className="flex justify-between text-gray-500 font-medium"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
      <div className="flex justify-between text-gray-500 font-medium"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
      <div className="flex justify-between text-gray-500 font-medium"><span>Estimated Tax</span><span>${tax.toFixed(2)}</span></div>
      <div className="flex justify-between items-center pt-4 text-2xl font-black text-gray-900 border-t border-gray-50 mt-4">
        <span>Total Amount</span>
        <span className="text-blue-600">${total.toFixed(2)}</span>
      </div>
    </div>
  </div>
);

export const OrderModern = () => (
  <div className="bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-3xl mx-auto font-sans text-left text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] -mr-32 -mt-32"></div>
    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/40">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        </div>
        <h2 className="text-3xl font-black uppercase tracking-tighter italic">Receipt_Processed</h2>
      </div>
      <div className="grid gap-6 mb-12">
        {ORDER_ITEMS.map((item) => (
          <div key={item.id} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl flex justify-between items-center hover:bg-white/10 transition-all">
            <div>
              <h4 className="text-xl font-bold mb-1">{item.name}</h4>
              <p className="text-blue-400 text-sm font-bold uppercase tracking-widest">ID: {item.id}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black">${item.price * item.qty}</div>
              <div className="text-xs text-white/40 uppercase">x{item.qty} Unit</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-blue-600 p-8 rounded-3xl shadow-xl shadow-blue-900/20">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-blue-100 text-xs font-black uppercase tracking-widest mb-1 italic">Final_Settlement</p>
            <h3 className="text-5xl font-black tracking-tighter">${total.toFixed(2)}</h3>
          </div>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-black uppercase text-sm hover:bg-blue-50 transition-colors shadow-lg">Download PDF</button>
        </div>
      </div>
    </div>
  </div>
);

export const OrderSplit = () => (
  <div className="bg-white rounded-[3rem] shadow-2xl max-w-5xl mx-auto overflow-hidden border border-gray-100 font-sans text-left">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-3/5 p-12 lg:p-16">
        <h2 className="text-4xl font-black text-gray-900 mb-12 uppercase tracking-tighter">Your Package</h2>
        <div className="space-y-8">
          {ORDER_ITEMS.map((item) => (
            <div key={item.id} className="flex gap-6 items-center">
              <div className="w-24 h-24 bg-gray-50 rounded-3xl shrink-0 border border-gray-100 flex items-center justify-center text-gray-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xl font-bold text-gray-900 truncate uppercase">{item.name}</h4>
                <p className="text-gray-400 font-medium lowercase italic">ref: {item.id} • {item.category}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm font-bold text-blue-600">Qty: {item.qty}</span>
                  <span className="text-xl font-black text-gray-900">${item.price * item.qty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-2/5 bg-gray-50 p-12 lg:p-16 border-l border-gray-100">
        <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic">Order Details</h3>
        <div className="space-y-4 mb-12">
          <div className="flex justify-between font-bold text-gray-500 uppercase text-xs tracking-widest"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
          <div className="flex justify-between font-bold text-gray-500 uppercase text-xs tracking-widest"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
          <div className="flex justify-between font-bold text-gray-500 uppercase text-xs tracking-widest"><span>Taxes</span><span>${tax.toFixed(2)}</span></div>
        </div>
        <div className="border-t-2 border-gray-200 pt-8 mb-12">
          <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-1 italic">Total Payable</p>
          <div className="text-6xl font-black text-gray-900 tracking-tighter leading-none">${total.toFixed(2)}</div>
        </div>
        <button className="w-full bg-gray-900 text-white py-6 rounded-3xl font-black uppercase tracking-widest text-sm hover:bg-black transition-all shadow-xl shadow-gray-200">Track Order</button>
      </div>
    </div>
  </div>
);

export const OrderMinimal = () => (
  <div className="bg-white p-12 md:p-24 rounded-[3rem] border border-gray-100 max-w-4xl mx-auto font-sans text-left">
    <h2 className="text-7xl font-black text-gray-900 mb-20 tracking-tighter uppercase italic leading-none border-b-8 border-black pb-8">Confirmed.</h2>
    <div className="space-y-12 mb-20">
      {ORDER_ITEMS.map((item, i) => (
        <div key={item.id} className="flex justify-between items-baseline border-b border-gray-100 pb-4">
          <div className="flex gap-4">
            <span className="text-gray-300 font-black text-xl italic">0{i+1}</span>
            <h4 className="text-2xl font-bold text-gray-800 uppercase">{item.name}</h4>
          </div>
          <span className="text-2xl font-black text-gray-900">${item.price * item.qty}</span>
        </div>
      ))}
    </div>
    <div className="flex justify-between items-center text-4xl font-black text-gray-900 uppercase italic">
      <span>Total</span>
      <span className="text-blue-600 underline decoration-4 underline-offset-8">${total.toFixed(2)}</span>
    </div>
  </div>
);

export const OrderReceipt = () => (
  <div className="bg-white p-10 rounded-2xl border-4 border-gray-900 max-w-md mx-auto font-mono text-left shadow-[12px_12px_0_0_#111827]">
    <div className="text-center mb-10 border-b-4 border-dashed border-gray-900 pb-8">
      <h2 className="text-2xl font-black uppercase tracking-widest">Digital_Receipt</h2>
      <p className="text-xs text-gray-500 mt-2 uppercase tracking-tighter">Terminal: 882-Alpha // Point: Sector_04</p>
    </div>
    <div className="space-y-6 mb-12">
      {ORDER_ITEMS.map((item) => (
        <div key={item.id} className="flex justify-between text-sm uppercase font-bold">
          <span className="flex-1 pr-4">{item.qty}x {item.name}</span>
          <span className="shrink-0">${item.price * item.qty}</span>
        </div>
      ))}
    </div>
    <div className="space-y-2 border-t-4 border-gray-900 pt-6 mb-8 text-sm uppercase font-black">
      <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
      <div className="flex justify-between"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
      <div className="flex justify-between text-xl mt-4 border-t-2 border-gray-900 pt-4"><span>Total Sync</span><span>${total.toFixed(2)}</span></div>
    </div>
    <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center grayscale">
       <svg className="w-full h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 10h18M3 14h18m-9-4v4m-2-4v4m4-4v4m-6-4v4m8-4v4M3 6h18M3 18h18" /></svg>
    </div>
    <p className="text-center text-[10px] text-gray-400 mt-8 uppercase tracking-[0.2em] font-black italic">Thanks for choosing the network.</p>
  </div>
);

export const OrderStepper = () => (
  <div className="bg-white p-8 md:p-16 rounded-[3rem] border border-gray-100 shadow-2xl max-w-4xl mx-auto font-sans text-left">
    <div className="flex items-center justify-between mb-16 relative">
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-0 w-1/3 h-1 bg-blue-600 -translate-y-1/2"></div>
      {[
        { label: 'Confirmed', icon: '✓', active: true },
        { label: 'Processing', icon: '⚙', active: true },
        { label: 'Shipping', icon: '✈', active: false },
        { label: 'Delivered', icon: '🏠', active: false }
      ].map((step, i) => (
        <div key={i} className="relative z-10 flex flex-col items-center">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold border-4 transition-all ${step.active ? 'bg-blue-600 border-white text-white shadow-lg shadow-blue-600/30' : 'bg-white border-gray-100 text-gray-300'}`}>
            {step.icon}
          </div>
          <span className={`text-[10px] font-black uppercase tracking-widest mt-3 ${step.active ? 'text-blue-600' : 'text-gray-300'}`}>{step.label}</span>
        </div>
      ))}
    </div>
    <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
      <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase italic tracking-tighter">Your Payload</h3>
      <div className="space-y-6">
        {ORDER_ITEMS.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b border-gray-200/50 pb-4">
            <span className="font-bold text-gray-700 uppercase italic">{item.name}</span>
            <span className="font-black text-gray-900">${item.price * item.qty}</span>
          </div>
        ))}
        <div className="flex justify-between items-center pt-4 text-3xl font-black text-gray-900 uppercase italic">
          <span>Total</span>
          <span className="text-blue-600">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  </div>
);

export const OrderGlass = () => (
  <div className="min-h-[500px] bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-8 md:p-16 rounded-[4rem] flex items-center justify-center font-sans text-left">
    <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-12 md:p-20 rounded-[4rem] shadow-2xl w-full max-w-3xl text-white">
      <h2 className="text-5xl font-black uppercase mb-12 tracking-tighter italic border-b border-white/20 pb-8">Success_Node</h2>
      <div className="grid gap-8 mb-16">
        {ORDER_ITEMS.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div>
              <h4 className="text-xl font-bold uppercase">{item.name}</h4>
              <p className="text-white/40 text-xs font-black uppercase tracking-widest italic">{item.id}</p>
            </div>
            <span className="text-2xl font-black">${item.price * item.qty}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center text-4xl font-black border-t border-white/20 pt-8 italic tracking-tighter text-pink-300">
        <span>TOTAL</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  </div>
);

export const OrderAccent = () => (
  <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-4xl mx-auto font-sans flex flex-col md:flex-row gap-12 overflow-hidden border border-gray-100 text-left">
    <div className="md:w-2/3">
      <h2 className="text-3xl font-black text-gray-900 mb-10 uppercase tracking-tighter border-l-8 border-blue-600 pl-6 italic">Package Contents</h2>
      <div className="space-y-10">
        {ORDER_ITEMS.map((item) => (
          <div key={item.id} className="flex gap-6 items-center">
            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 shrink-0 font-black italic text-xl">x{item.qty}</div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xl font-bold text-gray-900 truncate uppercase tracking-tight">{item.name}</h4>
              <p className="text-gray-400 font-medium lowercase italic">{item.category}</p>
            </div>
            <span className="text-xl font-black text-gray-900">${item.price * item.qty}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="md:w-1/3 bg-blue-600 rounded-[2rem] p-10 text-white flex flex-col justify-between shadow-xl shadow-blue-200">
      <div>
        <p className="text-blue-100 text-xs font-black uppercase tracking-[0.2em] mb-4 opacity-60">Settlement</p>
        <div className="space-y-4 mb-10 opacity-80 text-sm font-bold">
          <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
          <div className="flex justify-between"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
        </div>
      </div>
      <div className="border-t border-blue-400/50 pt-8">
        <p className="text-blue-100 text-[10px] font-black uppercase tracking-widest mb-1 italic">Final Amount</p>
        <h3 className="text-5xl font-black tracking-tighter italic leading-none">${total.toFixed(2)}</h3>
      </div>
    </div>
  </div>
);

export const OrderGrid = () => (
  <div className="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-200 max-w-5xl mx-auto font-sans text-left">
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
        <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic">Items</h2>
        <div className="space-y-6">
          {ORDER_ITEMS.map((item) => (
            <div key={item.id} className="flex justify-between items-center pb-6 border-b border-gray-50 last:border-0">
              <div>
                <h4 className="font-bold text-gray-800 uppercase italic">{item.name}</h4>
                <p className="text-xs text-gray-400 font-black tracking-widest">QTY: {item.qty}</p>
              </div>
              <span className="font-black text-gray-900">${item.price * item.qty}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic">Summary</h2>
          <div className="space-y-4 mb-8 text-gray-500 font-bold uppercase text-xs tracking-widest">
            <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Tax (8%)</span><span>${tax.toFixed(2)}</span></div>
          </div>
        </div>
        <div className="bg-gray-900 p-8 rounded-3xl text-white">
          <div className="flex justify-between items-center italic">
            <span className="font-black uppercase tracking-widest text-xs opacity-60">Total Amount</span>
            <span className="text-4xl font-black tracking-tighter">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const OrderElegant = () => (
  <div className="bg-[#fdfcfb] p-12 md:p-20 rounded-[4rem] border border-orange-100 max-w-4xl mx-auto font-sans text-left shadow-2xl shadow-orange-50">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-serif text-gray-900 italic tracking-tight">Order Confirmation</h2>
      <div className="w-16 h-px bg-orange-200 mx-auto mt-6"></div>
    </div>
    <div className="space-y-10 mb-20">
      {ORDER_ITEMS.map((item) => (
        <div key={item.id} className="flex justify-between items-center group">
          <div className="flex-1">
            <h4 className="text-2xl font-serif italic text-gray-800">{item.name}</h4>
            <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mt-1">Quantity: {item.qty} • {item.category}</p>
          </div>
          <span className="text-2xl font-light text-gray-900 tracking-tighter">${item.price * item.qty}</span>
        </div>
      ))}
    </div>
    <div className="border-t border-orange-100 pt-10 flex justify-between items-center">
       <div>
         <p className="text-orange-400 text-xs font-black uppercase tracking-widest mb-1 italic">Total Reserved</p>
         <h3 className="text-6xl font-serif text-gray-900 tracking-tighter italic leading-none">${total.toFixed(2)}</h3>
       </div>
       <div className="bg-gray-900 w-20 h-20 rounded-full flex items-center justify-center text-white shadow-xl shadow-gray-200">
         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
       </div>
    </div>
  </div>
);

// --- Gallery Wrapper ---

const OrderSummaryGallery = () => {
  const sections = [
    {
      id: 'standard',
      title: '01. Enterprise Standard',
      component: <OrderStandard />,
      jsx: `import React from 'react';

const OrderSummary = () => {
  const items = [
    { name: "Premium Wireless Headphones", price: 299, qty: 1 },
    { name: "Ergonomic Office Chair", price: 450, qty: 1 },
    { name: "USB-C Fast Charger", price: 45, qty: 2 },
  ];

  return (
    <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-xl max-w-3xl mx-auto font-sans">
      <div className="flex justify-between items-start mb-12 border-b pb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-1">Order Summary</h2>
          <p className="text-gray-500 font-medium">Order #88291 • Oct 24, 2024</p>
        </div>
        <div className="bg-green-50 text-green-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Confirmed</div>
      </div>
      <div className="space-y-6 mb-12 text-left">
        {items.map((item, i) => (
          <div key={i} className="flex justify-between items-center group">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-blue-50 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{item.name}</h4>
                <p className="text-sm text-gray-400 font-medium">Qty: {item.qty}</p>
              </div>
            </div>
            <span className="text-lg font-bold text-gray-900">\\$ {item.price * item.qty}</span>
          </div>
        ))}
      </div>
      <div className="space-y-4 pt-8 border-t border-gray-50 text-gray-500 font-medium">
        <div className="flex justify-between"><span>Subtotal</span><span>$839.00</span></div>
        <div className="flex justify-between"><span>Shipping</span><span>$25.00</span></div>
        <div className="flex justify-between"><span>Taxes</span><span>$67.12</span></div>
        <div className="flex justify-between items-center pt-4 text-2xl font-black text-gray-900 border-t mt-4">
          <span>Total Amount</span>
          <span className="text-blue-600">$931.12</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;`,
      html: `<div class="order-summary-card">
  <div class="card-header">
    <div class="header-info">
      <h2>Order Summary</h2>
      <p>Order #88291 • Oct 24, 2024</p>
    </div>
    <div class="status-badge">Confirmed</div>
  </div>
  <div class="items-list">
    <div class="order-item">
      <div class="item-visual">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
      </div>
      <div class="item-details">
        <h4>Premium Wireless Headphones</h4>
        <p>Qty: 1 • Electronics</p>
      </div>
      <span class="item-price">$299.00</span>
    </div>
    <div class="order-item">
      <div class="item-visual">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
      </div>
      <div class="item-details">
        <h4>Ergonomic Office Chair</h4>
        <p>Qty: 1 • Furniture</p>
      </div>
      <span class="item-price">$450.00</span>
    </div>
    <div class="order-item">
      <div class="item-visual">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
      </div>
      <div class="item-details">
        <h4>USB-C Fast Charger</h4>
        <p>Qty: 2 • Accessories</p>
      </div>
      <span class="item-price">$90.00</span>
    </div>
  </div>
  <div class="summary-footer">
    <div class="footer-row"><span>Subtotal</span><span>$839.00</span></div>
    <div class="footer-row"><span>Shipping</span><span>$25.00</span></div>
    <div class="footer-row"><span>Estimated Tax</span><span>$67.12</span></div>
    <div class="total-row">
      <span>Total Amount</span>
      <span class="final-price">$931.12</span>
    </div>
  </div>
</div>`,
      css: `.order-summary-card { background: #ffffff; padding: 48px; border-radius: 24px; border: 1px solid #f3f4f6; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); max-width: 600px; margin: 0 auto; font-family: sans-serif; text-align: left; }
.card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 48px; border-bottom: 1px solid #f9fafb; padding-bottom: 32px; }
.header-info h2 { font-size: 30px; font-weight: 700; color: #111827; margin: 0 0 4px 0; }
.header-info p { color: #6b7280; font-weight: 500; margin: 0; }
.status-badge { background: #f0fdf4; color: #16a34a; padding: 4px 16px; border-radius: 9999px; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
.items-list { display: flex; flex-direction: column; gap: 24px; margin-bottom: 48px; }
.order-item { display: flex; align-items: center; justify-content: space-between; }
.item-visual { width: 64px; height: 64px; background: #f9fafb; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: #9ca3af; }
.item-visual svg { width: 32px; height: 32px; }
.item-details { flex: 1; margin-left: 16px; }
.item-details h4 { font-size: 16px; font-weight: 700; color: #111827; margin: 0; }
.item-details p { font-size: 14px; color: #9ca3af; font-weight: 500; margin: 0; }
.item-price { font-size: 18px; font-weight: 700; color: #111827; }
.summary-footer { border-top: 1px solid #f9fafb; padding-top: 32px; display: flex; flex-direction: column; gap: 16px; }
.footer-row { display: flex; justify-content: space-between; color: #6b7280; font-weight: 500; }
.total-row { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f9fafb; padding-top: 16px; margin-top: 16px; font-size: 24px; font-weight: 900; color: #111827; }
.final-price { color: #2563eb; }`
    },
    {
      id: 'modern',
      title: '02. Cyber-Luxe Processing',
      component: <OrderModern />,
      jsx: `import React from 'react';

const OrderReceipt = () => (
  <div className="bg-slate-900 p-12 rounded-[2.5rem] shadow-2xl max-w-3xl mx-auto text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] -mr-32 -mt-32"></div>
    <div className="relative z-10 text-left">
      <div className="flex items-center gap-4 mb-12 text-left">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        </div>
        <h2 className="text-3xl font-black uppercase tracking-tighter italic">Receipt_Processed</h2>
      </div>
      <div className="grid gap-6 mb-12 text-left">
        {[
          { name: "Premium Wireless Headphones", id: "PROD-102", price: 299, qty: 1 },
          { name: "Ergonomic Office Chair", id: "PROD-205", price: 450, qty: 1 }
        ].map((item) => (
          <div key={item.id} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl flex justify-between items-center text-left">
            <div>
              <h4 className="text-xl font-bold mb-1">{item.name}</h4>
              <p className="text-blue-400 text-sm font-bold uppercase tracking-widest italic">ID: {item.id}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black italic">\\$ {item.price * item.qty}</div>
              <div className="text-xs text-white/40 uppercase font-black italic">x{item.qty} Unit</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-blue-600 p-8 rounded-3xl shadow-xl text-left">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-blue-100 text-xs font-black uppercase tracking-widest mb-1 italic">Final_Settlement</p>
            <h3 className="text-5xl font-black tracking-tighter italic">$931.12</h3>
          </div>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-black uppercase text-sm hover:bg-blue-50 shadow-lg">Download</button>
        </div>
      </div>
    </div>
  </div>
);

export default OrderReceipt;`,
      html: `<div class="receipt-modern-root">
  <div class="blur-bg"></div>
  <div class="content">
    <div class="header">
      <div class="status-icon">✓</div>
      <h2 class="title">Receipt_Processed</h2>
    </div>
    <div class="items-stack">
      <div class="item-glass">
        <div class="info">
          <h4>Premium Wireless Headphones</h4>
          <p class="id">ID: PROD-102</p>
        </div>
        <div class="price-side">
          <div class="price">$299.00</div>
          <div class="unit">x1 Unit</div>
        </div>
      </div>
      <div class="item-glass">
        <div class="info">
          <h4>Ergonomic Office Chair</h4>
          <p class="id">ID: PROD-205</p>
        </div>
        <div class="price-side">
          <div class="price">$450.00</div>
          <div class="unit">x1 Unit</div>
        </div>
      </div>
    </div>
    <div class="summary-accent">
      <div class="total-info">
        <p class="label">Final_Settlement</p>
        <h3 class="final-price">$931.12</h3>
      </div>
      <button class="action-btn">Download PDF</button>
    </div>
  </div>
</div>`,
      css: `.receipt-modern-root { background: #0f172a; padding: 48px; border-radius: 40px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); max-width: 600px; margin: 0 auto; font-family: sans-serif; position: relative; overflow: hidden; color: white; text-align: left; }
.blur-bg { position: absolute; top: -128px; right: -128px; width: 256px; height: 256px; background: rgba(59, 130, 246, 0.1); filter: blur(100px); }
.content { position: relative; z-index: 1; }
.header { display: flex; align-items: center; gap: 16px; margin-bottom: 48px; }
.status-icon { width: 48px; height: 48px; background: #3b82f6; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.4); }
.title { font-size: 30px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.05em; font-style: italic; margin: 0; }
.items-stack { display: flex; flex-direction: column; gap: 24px; margin-bottom: 48px; }
.item-glass { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); padding: 24px; border-radius: 24px; display: flex; justify-content: space-between; align-items: center; }
.info h4 { font-size: 20px; font-weight: 700; margin: 0 0 4px 0; }
.info .id { font-size: 14px; color: #60a5fa; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; font-style: italic; margin: 0; }
.price-side { text-align: right; }
.price-side .price { font-size: 24px; font-weight: 900; font-style: italic; }
.price-side .unit { font-size: 12px; color: rgba(255, 255, 255, 0.4); text-transform: uppercase; font-weight: 900; }
.summary-accent { background: #2563eb; padding: 32px; border-radius: 24px; display: flex; justify-content: space-between; align-items: center; }
.label { font-size: 12px; color: #dbeafe; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; font-style: italic; margin: 0 0 4px 0; }
.final-price { font-size: 48px; font-weight: 900; letter-spacing: -0.05em; margin: 0; font-style: italic; }
.action-btn { background: #ffffff; color: #2563eb; padding: 12px 24px; border-radius: 16px; border: none; font-weight: 900; text-transform: uppercase; font-size: 14px; cursor: pointer; }`
    },
    {
      id: 'split',
      title: '03. Architectural Split View',
      component: <OrderSplit />,
      jsx: `import React from 'react';

const OrderSplitView = () => (
  <div className="bg-white rounded-[3rem] shadow-2xl max-w-5xl mx-auto overflow-hidden border border-gray-100 font-sans text-left">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-3/5 p-16 text-left">
        <h2 className="text-4xl font-black text-gray-900 mb-12 uppercase tracking-tighter italic">Your Package</h2>
        <div className="space-y-8 text-left">
          {[
            { name: "Premium Wireless Headphones", id: "PROD-102", price: 299, qty: 1, category: "Electronics" },
            { name: "Ergonomic Office Chair", id: "PROD-205", price: 450, qty: 1, category: "Furniture" }
          ].map((item) => (
            <div key={item.id} className="flex gap-6 items-center text-left">
              <div className="w-24 h-24 bg-gray-50 rounded-3xl shrink-0 border border-gray-100 flex items-center justify-center text-gray-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              </div>
              <div className="flex-1 min-w-0 text-left">
                <h4 className="text-xl font-bold text-gray-900 truncate uppercase italic">{item.name}</h4>
                <p className="text-gray-400 font-medium lowercase italic opacity-60">ref: {item.id} • {item.category}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm font-bold text-blue-600 italic uppercase">Qty: {item.qty}</span>
                  <span className="text-xl font-black text-gray-900 italic">\\$ {item.price * item.qty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-2/5 bg-gray-50 p-16 border-l border-gray-100 text-left">
        <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic">Order Details</h3>
        <div className="space-y-4 mb-12 text-gray-500 text-xs font-bold uppercase tracking-widest text-left">
          <div className="flex justify-between"><span>Subtotal</span><span>$839.00</span></div>
          <div className="flex justify-between"><span>Shipping</span><span>$25.00</span></div>
          <div className="flex justify-between"><span>Taxes</span><span>$67.12</span></div>
        </div>
        <div className="border-t-2 border-gray-200 pt-8 mb-12 text-left">
          <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-1 italic">Total Payable</p>
          <div className="text-6xl font-black text-gray-900 tracking-tighter leading-none italic">$931.12</div>
        </div>
        <button className="w-full bg-gray-900 text-white py-6 rounded-3xl font-black uppercase tracking-widest text-sm hover:bg-black transition-all">Track Order</button>
      </div>
    </div>
  </div>
);

export default OrderSplitView;`,
      html: `<div class="split-order-root">
  <div class="left-panel">
    <h2 class="section-title">Your Package</h2>
    <div class="items-container">
      <div class="package-item">
        <div class="item-thumb">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
        </div>
        <div class="item-content">
          <div class="item-header">
            <h4>Premium Wireless Headphones</h4>
            <p class="ref">ref: PROD-102 • Electronics</p>
          </div>
          <div class="item-footer">
            <span class="qty">Qty: 1</span>
            <span class="price">$299.00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="right-panel">
    <h3 class="side-title">Order Details</h3>
    <div class="details-rows">
      <div class="row"><span>Subtotal</span><span>$839.00</span></div>
    </div>
    <div class="total-display">
      <p class="total-label">Total Payable</p>
      <div class="grand-total">$931.12</div>
    </div>
    <button class="track-btn">Track Order</button>
  </div>
</div>`,
      css: `.split-order-root { display: flex; flex-direction: column; background: #ffffff; border-radius: 48px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1); max-width: 1000px; margin: 0 auto; overflow: hidden; border: 1px solid #f3f4f6; font-family: sans-serif; text-align: left; }
@media (min-width: 768px) { .split-order-root { flex-direction: row; } }
.left-panel { flex: 3; padding: 64px; }
.right-panel { flex: 2; background: #f9fafb; padding: 64px; border-left: 1px solid #f1f5f9; }
.section-title { font-size: 40px; font-weight: 900; text-transform: uppercase; color: #111827; letter-spacing: -0.05em; font-style: italic; margin-bottom: 48px; }
.items-container { display: flex; flex-direction: column; gap: 32px; }
.package-item { display: flex; gap: 24px; align-items: center; }
.item-thumb { width: 96px; height: 96px; background: #f9fafb; border-radius: 24px; border: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: center; color: #d1d5db; flex-shrink: 0; }
.item-thumb svg { width: 40px; height: 40px; }
.item-content { flex: 1; min-width: 0; }
.item-header h4 { font-size: 20px; font-weight: 700; color: #111827; text-transform: uppercase; font-style: italic; margin: 0 0 4px 0; }
.side-title { font-size: 24px; font-weight: 900; text-transform: uppercase; color: #111827; letter-spacing: -0.05em; font-style: italic; margin-bottom: 32px; }
.details-rows { display: flex; flex-direction: column; gap: 16px; margin-bottom: 48px; }
.details-rows .row { display: flex; justify-content: space-between; font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.1em; }
.total-display { border-top: 2px solid #e5e7eb; padding-top: 32px; margin-bottom: 48px; }
.total-label { font-size: 12px; color: #9ca3af; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; font-style: italic; margin: 0 0 4px 0; }
.grand-total { font-size: 60px; font-weight: 900; color: #111827; letter-spacing: -0.05em; font-style: italic; line-height: 1; }
.track-btn { width: 100%; background: #111827; color: #ffffff; padding: 24px; border-radius: 24px; border: none; font-size: 14px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; cursor: pointer; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }`
    },
    {
      id: 'minimal',
      title: '04. Bauhaus Minimalism',
      component: <OrderMinimal />,
      jsx: `export const OrderMinimal = () => (
  <div className="bg-white p-24 rounded-[3rem] border border-gray-100 max-w-4xl mx-auto font-sans text-left">
    <h2 className="text-7xl font-black text-gray-900 mb-20 tracking-tighter uppercase italic leading-none border-b-8 border-black pb-8">Confirmed.</h2>
    <div className="space-y-12 mb-20">
      {[
        { name: "Premium Wireless Headphones", price: 299 },
        { name: "Ergonomic Office Chair", price: 450 }
      ].map((item, i) => (
        <div key={i} className="flex justify-between items-baseline border-b border-gray-100 pb-4">
          <div className="flex gap-4">
            <span className="text-gray-300 font-black text-xl italic">0{i+1}</span>
            <h4 className="text-2xl font-bold text-gray-800 uppercase">{item.name}</h4>
          </div>
          <span className="text-2xl font-black text-gray-900">\\$ {item.price}</span>
        </div>
      ))}
    </div>
    <div className="flex justify-between items-center text-4xl font-black text-gray-900 uppercase italic">
      <span>Total</span>
      <span className="text-blue-600 underline decoration-4 underline-offset-8">$931.12</span>
    </div>
  </div>
);`,
      html: `<div class="minimal-order">
  <h2 class="title">Confirmed.</h2>
  <div class="list">
    <div class="item">
      <div class="head"><span>01</span><h4>Premium Wireless Headphones</h4></div>
      <span class="price">$299.00</span>
    </div>
    <div class="item">
      <div class="head"><span>02</span><h4>Ergonomic Office Chair</h4></div>
      <span class="price">$450.00</span>
    </div>
  </div>
  <div class="footer"><span>Total</span><span class="final">$931.12</span></div>
</div>`,
      css: `.minimal-order { background: #ffffff; padding: 96px; border-radius: 48px; border: 1px solid #f3f4f6; max-width: 800px; margin: 0 auto; font-family: sans-serif; text-align: left; }
.title { font-size: 72px; font-weight: 900; color: #111827; margin-bottom: 80px; text-transform: uppercase; font-style: italic; letter-spacing: -0.05em; border-bottom: 8px solid #000; padding-bottom: 32px; line-height: 1; }
.list { display: flex; flex-direction: column; gap: 48px; margin-bottom: 80px; }
.item { display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid #f3f4f6; padding-bottom: 16px; }
.head { display: flex; gap: 16px; }
.head span { color: #d1d5db; font-size: 20px; font-weight: 900; font-style: italic; }
.head h4 { font-size: 24px; font-weight: 700; color: #1f2937; text-transform: uppercase; margin: 0; }
.price { font-size: 24px; font-weight: 900; color: #111827; }
.footer { display: flex; justify-content: space-between; align-items: center; font-size: 36px; font-weight: 900; text-transform: uppercase; font-style: italic; }
.final { color: #2563eb; text-decoration: underline 4px; text-underline-offset: 8px; }`
    },
    {
      id: 'receipt',
      title: '05. Terminal Digital Receipt',
      component: <OrderReceipt />,
      jsx: `export const OrderReceipt = () => (
  <div className="bg-white p-10 rounded-2xl border-4 border-gray-900 max-w-md mx-auto font-mono text-left shadow-[12px_12px_0_0_#111827]">
    <div className="text-center mb-10 border-b-4 border-dashed border-gray-900 pb-8">
      <h2 className="text-2xl font-black uppercase tracking-widest italic">Digital_Receipt</h2>
      <p className="text-xs text-gray-500 mt-2 uppercase tracking-tighter italic">Terminal: 882-Alpha // Point: Sector_04</p>
    </div>
    <div className="space-y-6 mb-12 italic text-left">
      {[
        { name: "Premium Wireless Headphones", price: 299, qty: 1 },
        { name: "Ergonomic Office Chair", price: 450, qty: 1 }
      ].map((item, i) => (
        <div key={i} className="flex justify-between text-sm uppercase font-bold text-left">
          <span className="flex-1 pr-4">{item.qty}x {item.name}</span>
          <span className="shrink-0">\\$ {item.price}</span>
        </div>
      ))}
    </div>
    <div className="space-y-2 border-t-4 border-gray-900 pt-6 mb-8 text-sm uppercase font-black italic text-left">
      <div className="flex justify-between"><span>Subtotal</span><span>$839.00</span></div>
      <div className="flex justify-between"><span>Shipping</span><span>$25.00</span></div>
      <div className="flex justify-between text-xl mt-4 border-t-2 border-gray-900 pt-4"><span>Total Sync</span><span>$931.12</span></div>
    </div>
    <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center grayscale">
       <svg className="w-full h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 10h18M3 14h18m-9-4v4m-2-4v4m4-4v4m-6-4v4m8-4v4M3 6h18M3 18h18" /></svg>
    </div>
  </div>
);`,
      html: `<div class="digital-receipt">
  <div class="header">
    <h2>Digital_Receipt</h2>
    <p>Terminal: 882-Alpha // Point: Sector_04</p>
  </div>
  <div class="items">
    <div class="row"><span>1x Premium Wireless Headphones</span><span>$299.00</span></div>
    <div class="row"><span>1x Ergonomic Office Chair</span><span>$450.00</span></div>
  </div>
  <div class="summary">
    <div class="row"><span>Subtotal</span><span>$839.00</span></div>
    <div class="row"><span>Shipping</span><span>$25.00</span></div>
    <div class="row total"><span>Total Sync</span><span>$931.12</span></div>
  </div>
  <div class="barcode">|| ||| | || |||</div>
</div>`,
      css: `.digital-receipt { background: #ffffff; padding: 40px; border-radius: 16px; border: 4px solid #111827; box-shadow: 12px 12px 0 0 #111827; max-width: 400px; margin: 0 auto; font-family: monospace; text-align: left; }
.header { text-align: center; margin-bottom: 40px; border-bottom: 4px dashed #111827; padding-bottom: 32px; }
.header h2 { font-size: 24px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; margin: 0; }
.header p { font-size: 12px; color: #6b7280; margin-top: 8px; text-transform: uppercase; }
.items { display: flex; flex-direction: column; gap: 24px; margin-bottom: 48px; }
.row { display: flex; justify-content: space-between; font-size: 14px; text-transform: uppercase; font-weight: 700; }
.summary { border-top: 4px solid #111827; padding-top: 24px; display: flex; flex-direction: column; gap: 8px; }
.total { font-size: 20px; margin-top: 16px; border-top: 2px solid #111827; padding-top: 16px; font-weight: 900; }
.barcode { background: #f3f4f6; height: 48px; display: flex; align-items: center; justify-content: center; font-size: 24px; letter-spacing: 4px; margin-top: 32px; filter: grayscale(1); }`
    },
    {
      id: 'stepper',
      title: '06. Lifecycle Tracker',
      component: <OrderStepper />,
      jsx: `export const OrderStepper = () => (
  <div className="bg-white p-16 rounded-[3rem] border border-gray-100 shadow-2xl max-w-4xl mx-auto font-sans text-left">
    <div className="flex items-center justify-between mb-16 relative text-left">
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-0 w-1/3 h-1 bg-blue-600 -translate-y-1/2"></div>
      {[
        { label: 'Confirmed', icon: '✓', active: true },
        { label: 'Processing', icon: '⚙', active: true },
        { label: 'Shipping', icon: '✈', active: false },
        { label: 'Delivered', icon: '🏠', active: false }
      ].map((step, i) => (
        <div key={i} className="relative z-10 flex flex-col items-center">
          <div className={\`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold border-4 transition-all \${step.active ? 'bg-blue-600 border-white text-white shadow-lg' : 'bg-white border-gray-100 text-gray-300'}\`}>
            {step.icon}
          </div>
          <span className={\`text-[10px] font-black uppercase tracking-widest mt-3 \${step.active ? 'text-blue-600' : 'text-gray-300'}\`}>{step.label}</span>
        </div>
      ))}
    </div>
    <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 text-left">
      <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase italic tracking-tighter">Your Payload</h3>
      <div className="space-y-6">
        {[
          { name: "Premium Wireless Headphones", price: 299 },
          { name: "Ergonomic Office Chair", price: 450 }
        ].map((item, i) => (
          <div key={i} className="flex justify-between items-center border-b border-gray-200/50 pb-4">
            <span className="font-bold text-gray-700 uppercase italic">{item.name}</span>
            <span className="font-black text-gray-900">\\$ {item.price}</span>
          </div>
        ))}
        <div className="flex justify-between items-center pt-4 text-3xl font-black text-gray-900 uppercase italic">
          <span>Total</span>
          <span className="text-blue-600">$931.12</span>
        </div>
      </div>
    </div>
  </div>
);`,
      html: `<div class="stepper-order">
  <div class="steps-row">
    <div class="step active"><span>✓</span><p>Confirmed</p></div>
    <div class="step active"><span>⚙</span><p>Processing</p></div>
    <div class="step"><span>✈</span><p>Shipping</p></div>
    <div class="step"><span>🏠</span><p>Delivered</p></div>
  </div>
  <div class="payload-box">
    <h3>Your Payload</h3>
    <div class="items">
      <div class="row"><span>Premium Wireless Headphones</span><span>$299.00</span></div>
      <div class="row total"><span>Total</span><span>$931.12</span></div>
    </div>
  </div>
</div>`,
      css: `.stepper-order { background: #ffffff; padding: 64px; border-radius: 48px; border: 1px solid #f3f4f6; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1); max-width: 800px; margin: 0 auto; font-family: sans-serif; text-align: left; }
.steps-row { display: flex; justify-content: space-between; margin-bottom: 64px; position: relative; }
.steps-row::before { content: ''; position: absolute; top: 24px; left: 0; width: 100%; height: 4px; background: #f3f4f6; z-index: 0; }
.step { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; }
.step span { width: 48px; height: 48px; background: #ffffff; border: 4px solid #f3f4f6; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #d1d5db; transition: all 0.3s; }
.step.active span { background: #2563eb; border-color: #ffffff; color: #ffffff; box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3); }
.step p { font-size: 10px; font-weight: 900; text-transform: uppercase; margin-top: 12px; color: #d1d5db; }
.step.active p { color: #2563eb; }
.payload-box { background: #f9fafb; padding: 40px; border-radius: 40px; border: 1px solid #f3f4f6; }
.payload-box h3 { font-size: 24px; font-weight: 900; text-transform: uppercase; font-style: italic; margin-bottom: 32px; }
.row { display: flex; justify-content: space-between; padding-bottom: 16px; border-bottom: 1px solid #e5e7eb; margin-bottom: 16px; font-weight: 700; color: #374151; font-style: italic; }
.total { border-top: 4px solid #111827; border-bottom: none; font-size: 30px; color: #111827; padding-top: 16px; margin-top: 16px; }`
    },
    {
      id: 'glass',
      title: '07. Frosted Nebula Glass',
      component: <OrderGlass />,
      jsx: `export const OrderGlass = () => (
  <div className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-16 rounded-[4rem] flex items-center justify-center font-sans text-left">
    <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-20 rounded-[4rem] shadow-2xl w-full max-w-3xl text-white text-left">
      <h2 className="text-5xl font-black uppercase mb-12 tracking-tighter italic border-b border-white/20 pb-8">Success_Node</h2>
      <div className="grid gap-8 mb-16 text-left">
        {[
          { name: "Premium Wireless Headphones", id: "PROD-102", price: 299 },
          { name: "Ergonomic Office Chair", id: "PROD-205", price: 450 }
        ].map((item, i) => (
          <div key={i} className="flex justify-between items-center text-left">
            <div>
              <h4 className="text-xl font-bold uppercase">{item.name}</h4>
              <p className="text-white/40 text-xs font-black uppercase tracking-widest italic">{item.id}</p>
            </div>
            <span className="text-2xl font-black">\\$ {item.price}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center text-4xl font-black border-t border-white/20 pt-8 italic tracking-tighter text-pink-300">
        <span>TOTAL</span>
        <span>$931.12</span>
      </div>
    </div>
  </div>
);`,
      html: `<div class="glass-order">
  <div class="glass-card">
    <h2>Success_Node</h2>
    <div class="items">
      <div class="item">
        <div class="meta"><h4>Premium Wireless Headphones</h4><p>PROD-102</p></div>
        <span class="price">$299.00</span>
      </div>
    </div>
    <div class="footer"><span>TOTAL</span><span>$931.12</span></div>
  </div>
</div>`,
      css: `.glass-order { background: linear-gradient(to bottom right, #6366f1, #d946ef); padding: 96px; border-radius: 64px; display: flex; align-items: center; justify-content: center; font-family: sans-serif; text-align: left; }
.glass-card { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(40px); border: 1px solid rgba(255, 255, 255, 0.2); padding: 64px; border-radius: 64px; color: #ffffff; width: 100%; max-width: 700px; }
.glass-card h2 { font-size: 48px; font-weight: 900; text-transform: uppercase; font-style: italic; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 32px; margin-bottom: 48px; }
.item { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; }
.meta h4 { font-size: 20px; font-weight: 700; text-transform: uppercase; margin: 0; }
.meta p { font-size: 12px; color: rgba(255,255,255,0.4); font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; margin: 4px 0 0 0; }
.price { font-size: 24px; font-weight: 900; }
.footer { border-top: 1px solid rgba(255,255,255,0.2); padding-top: 32px; display: flex; justify-content: space-between; font-size: 36px; font-weight: 900; font-style: italic; color: #f9a8d4; }`
    },
    {
      id: 'accent',
      title: '08. Royal Blue Sidebar',
      component: <OrderAccent />,
      jsx: `export const OrderAccent = () => (
  <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl max-w-4xl mx-auto font-sans flex flex-col md:flex-row gap-12 overflow-hidden border border-gray-100 text-left">
    <div className="md:w-2/3 text-left">
      <h2 className="text-3xl font-black text-gray-900 mb-10 uppercase tracking-tighter border-l-8 border-blue-600 pl-6 italic">Package Contents</h2>
      <div className="space-y-10">
        {[
          { name: "Premium Wireless Headphones", price: 299, qty: 1 },
          { name: "Ergonomic Office Chair", price: 450, qty: 1 }
        ].map((item, i) => (
          <div key={i} className="flex gap-6 items-center">
            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 shrink-0 font-black italic text-xl">x{item.qty}</div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xl font-bold text-gray-900 truncate uppercase tracking-tight">{item.name}</h4>
              <p className="text-gray-400 font-medium lowercase italic">Electronics</p>
            </div>
            <span className="text-xl font-black text-gray-900">\\$ {item.price}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="md:w-1/3 bg-blue-600 rounded-[2rem] p-10 text-white flex flex-col justify-between shadow-xl text-left">
      <div>
        <p className="text-blue-100 text-xs font-black uppercase tracking-[0.2em] mb-4 opacity-60">Settlement</p>
        <div className="space-y-4 mb-10 opacity-80 text-sm font-bold">
          <div className="flex justify-between"><span>Subtotal</span><span>$839.00</span></div>
          <div className="flex justify-between"><span>Shipping</span><span>$25.00</span></div>
        </div>
      </div>
      <div className="border-t border-blue-400/50 pt-8">
        <p className="text-blue-100 text-[10px] font-black uppercase tracking-widest mb-1 italic">Final Amount</p>
        <h3 className="text-5xl font-black tracking-tighter italic leading-none">$931.12</h3>
      </div>
    </div>
  </div>
);`,
      html: `<div class="accent-order">
  <div class="main">
    <h2 class="title">Package Contents</h2>
    <div class="items">
      <div class="item">
        <div class="qty">x1</div>
        <div class="info"><h4>Premium Wireless Headphones</h4><p>Electronics</p></div>
        <span class="price">$299.00</span>
      </div>
    </div>
  </div>
  <div class="sidebar">
    <div class="top">
      <p class="label">Settlement</p>
      <div class="rows">
        <div class="row"><span>Subtotal</span><span>$839.00</span></div>
      </div>
    </div>
    <div class="bottom">
      <p class="label">Final Amount</p>
      <div class="grand">$931.12</div>
    </div>
  </div>
</div>`,
      css: `.accent-order { background: #ffffff; padding: 48px; border-radius: 40px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1); max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; gap: 48px; font-family: sans-serif; text-align: left; }
@media (min-width: 768px) { .accent-order { flex-direction: row; } }
.main { flex: 2; }
.sidebar { flex: 1; background: #2563eb; border-radius: 32px; padding: 40px; color: #ffffff; display: flex; flex-direction: column; justify-content: space-between; }
.title { font-size: 28px; font-weight: 900; color: #111827; text-transform: uppercase; border-left: 8px solid #2563eb; padding-left: 24px; font-style: italic; margin-bottom: 40px; }
.items { display: flex; flex-direction: column; gap: 32px; }
.item { display: flex; align-items: center; gap: 24px; }
.qty { width: 80px; height: 80px; background: #eff6ff; color: #2563eb; border-radius: 24px; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 900; font-style: italic; flex-shrink: 0; }
.info { flex: 1; min-width: 0; }
.info h4 { font-size: 18px; font-weight: 700; margin: 0; text-transform: uppercase; }
.info p { font-size: 14px; color: #9ca3af; font-style: italic; margin: 4px 0 0 0; }
.price { font-size: 20px; font-weight: 900; color: #111827; }
.label { font-size: 12px; font-weight: 900; text-transform: uppercase; opacity: 0.6; margin-bottom: 16px; letter-spacing: 0.2em; }
.row { display: flex; justify-content: space-between; font-size: 14px; font-weight: 700; margin-bottom: 12px; }
.bottom { border-top: 1px solid rgba(255,255,255,0.2); padding-top: 32px; }
.grand { font-size: 48px; font-weight: 900; font-style: italic; line-height: 1; }`
    },
    {
      id: 'grid',
      title: '09. Grid Layout Summary',
      component: <OrderGrid />,
      jsx: `export const OrderGrid = () => (
  <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-200 max-w-5xl mx-auto font-sans text-left">
    <div className="grid md:grid-cols-2 gap-8 text-left">
      <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 text-left">
        <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic">Items</h2>
        <div className="space-y-6">
          {[
            { name: "Premium Wireless Headphones", price: 299, qty: 1 },
            { name: "Ergonomic Office Chair", price: 450, qty: 1 }
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center pb-6 border-b border-gray-50 last:border-0 text-left">
              <div>
                <h4 className="font-bold text-gray-800 uppercase italic text-left">{item.name}</h4>
                <p className="text-xs text-gray-400 font-black tracking-widest text-left">QTY: {item.qty}</p>
              </div>
              <span className="font-black text-gray-900">\\$ {item.price}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col justify-between text-left">
        <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic">Summary</h2>
        <div className="bg-gray-900 p-8 rounded-3xl text-white">
          <div className="flex justify-between items-center italic">
            <span className="font-black uppercase tracking-widest text-xs opacity-60">Total Amount</span>
            <span className="text-4xl font-black tracking-tighter italic">$931.12</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);`,
      html: `<div class="grid-order">
  <div class="col-items">
    <div class="card">
      <h2>Items</h2>
      <div class="item">
        <div class="info"><h4>Premium Wireless Headphones</h4><p>QTY: 1</p></div>
        <span class="price">$299.00</span>
      </div>
    </div>
  </div>
  <div class="col-summary">
    <div class="card summary-card">
      <h2>Summary</h2>
      <div class="total-box">
        <span class="label">Total Amount</span>
        <span class="grand">$931.12</span>
      </div>
    </div>
  </div>
</div>`,
      css: `.grid-order { background: #f9fafb; padding: 48px; border-radius: 48px; display: grid; grid-template-columns: 1fr; gap: 32px; font-family: sans-serif; text-align: left; }
@media (min-width: 768px) { .grid-order { grid-template-columns: repeat(2, 1fr); } }
.card { background: #ffffff; padding: 40px; border-radius: 40px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05); border: 1px solid #f1f5f9; }
.card h2 { font-size: 30px; font-weight: 900; text-transform: uppercase; font-style: italic; margin-bottom: 32px; }
.item { display: flex; justify-content: space-between; align-items: center; padding-bottom: 24px; border-bottom: 1px solid #f9fafb; margin-bottom: 24px; }
.info h4 { font-size: 16px; font-weight: 700; margin: 0; text-transform: uppercase; font-style: italic; }
.info p { font-size: 10px; color: #9ca3af; font-weight: 900; margin-top: 4px; text-transform: uppercase; }
.total-box { background: #111827; padding: 32px; border-radius: 24px; color: #ffffff; display: flex; justify-content: space-between; align-items: center; }
.total-box .label { font-size: 12px; font-weight: 900; text-transform: uppercase; opacity: 0.6; }
.total-box .grand { font-size: 36px; font-weight: 900; font-style: italic; letter-spacing: -0.05em; }`
    },
    {
      id: 'elegant',
      title: '10. Elegant Boutique Serif',
      component: <OrderElegant />,
      jsx: `export const OrderElegant = () => (
  <div className="bg-[#fdfcfb] p-20 rounded-[4rem] border border-orange-100 max-w-4xl mx-auto font-sans text-left shadow-2xl">
    <div className="text-center mb-16 text-left">
      <h2 className="text-5xl font-serif text-gray-900 italic tracking-tight text-center">Order Confirmation</h2>
      <div className="w-16 h-px bg-orange-200 mx-auto mt-6"></div>
    </div>
    <div className="space-y-10 mb-20 text-left">
      {[
        { name: "Premium Wireless Headphones", price: 299, category: "Electronics" },
        { name: "Ergonomic Office Chair", price: 450, category: "Furniture" }
      ].map((item, i) => (
        <div key={i} className="flex justify-between items-center group text-left">
          <div className="flex-1 text-left">
            <h4 className="text-2xl font-serif italic text-gray-800 text-left">{item.name}</h4>
            <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mt-1 text-left">Quantity: 1 • {item.category}</p>
          </div>
          <span className="text-2xl font-light text-gray-900 tracking-tighter">\\$ {item.price}</span>
        </div>
      ))}
    </div>
    <div className="border-t border-orange-100 pt-10 flex justify-between items-center text-left">
       <div className="text-left">
         <p className="text-orange-400 text-xs font-black uppercase tracking-widest mb-1 italic">Total Reserved</p>
         <h3 className="text-6xl font-serif text-gray-900 tracking-tighter italic leading-none">$931.12</h3>
       </div>
       <div className="bg-gray-900 w-20 h-20 rounded-full flex items-center justify-center text-white">
         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
       </div>
    </div>
  </div>
);`,
      html: `<div class="elegant-order">
  <div class="header">
    <h2>Order Confirmation</h2>
    <div class="line"></div>
  </div>
  <div class="items">
    <div class="item">
      <div class="info"><h4>Premium Wireless Headphones</h4><p>Quantity: 1 • Electronics</p></div>
      <span class="price">$299.00</span>
    </div>
  </div>
  <div class="footer">
    <div class="total-info">
      <p class="label">Total Reserved</p>
      <h3 class="grand">$931.12</h3>
    </div>
    <div class="icon-circle">✓</div>
  </div>
</div>`,
      css: `.elegant-order { background: #fdfcfb; padding: 80px; border-radius: 64px; border: 1px solid #ffedd5; max-width: 800px; margin: 0 auto; font-family: 'Playfair Display', serif; text-align: left; }
.header { text-align: center; margin-bottom: 64px; }
.header h2 { font-size: 48px; color: #111827; font-style: italic; font-weight: 400; margin: 0; }
.line { width: 64px; height: 1px; background: #fed7aa; margin: 24px auto 0; }
.items { display: flex; flex-direction: column; gap: 40px; margin-bottom: 80px; }
.item { display: flex; justify-content: space-between; align-items: center; }
.info h4 { font-size: 24px; color: #1f2937; font-style: italic; margin: 0; }
.info p { font-size: 12px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 4px; font-family: sans-serif; }
.price { font-size: 24px; font-weight: 300; color: #111827; }
.footer { border-top: 1px solid #ffedd5; padding-top: 40px; display: flex; justify-content: space-between; align-items: center; }
.label { font-size: 12px; color: #fb923c; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; font-style: italic; margin: 0 0 4px 0; font-family: sans-serif; }
.grand { font-size: 60px; color: #111827; font-style: italic; line-height: 1; }
.icon-circle { width: 80px; height: 80px; background: #111827; color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }`
    }
  ];

  return (
    <div className="container overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-64 text-gray-900">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-6xl font-black text-slate-950 mb-6 tracking-tighter uppercase italic leading-none">Order_Summary_Gallery</h1>
        <p className="text-slate-500 font-bold text-xl italic lowercase">Premium e-commerce restoration protocols. All 10 variants deployed.</p>
      </div>

      <div className="space-y-32 max-w-7xl mx-auto">
        {sections.map((section) => (
          <section key={section.id} className="bg-white p-4 rounded-xl shadow-lg relative group border border-slate-200">
            <div className="absolute top-4 right-4 z-40 opacity-0 group-hover:opacity-100 transition-opacity">
              <CopyButton 
                jsxCode={section.jsx}
                htmlCode={section.html}
                cssCode={section.css}
              />
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block text-center mb-8 italic text-black">
              {section.title}
            </span>
            {section.component}
          </section>
        ))}
      </div>
    </div>
  );
};

export default OrderSummaryGallery;