import React from 'react';
import CopyButton from '../CopyButton';

// --- SHARED DATA ---
const orderProtocol = [
  { id: "NODE_KEY_01", name: "QUANTUM_CORE_V1", price: 140, qty: 1, type: "HARDWARE" },
  { id: "NODE_KEY_02", name: "NEURAL_LINK_COIL", price: 35, qty: 2, type: "ACCESSORY" },
  { id: "NODE_KEY_03", name: "MATRIX_UPGRADE_PATCH", price: 10, qty: 1, type: "SOFTWARE" },
];

const totalVal = orderProtocol.reduce((acc, item) => acc + (item.price * item.qty), 0);
const shippingVal = 10;
const finalTotal = totalVal + shippingVal;

// --- ACTUAL UI COMPONENTS ---

export const OrderBrutalist = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[10px] border-black p-6 md:p-12 shadow-[24px_24px_0_0_#000] text-center min-w-0">
      <div className="w-20 h-20 md:w-24 md:h-24 bg-black text-white border-[6px] border-black flex items-center justify-center mx-auto mb-10 rotate-3 shadow-[8px_8px_0_0_#facc15] shrink-0">
        <span className="text-4xl md:text-5xl italic font-black">✓</span>
      </div>
      <h2 className="text-4xl md:text-7xl font-black uppercase mb-4 tracking-tighter leading-none italic text-center break-words">ORDER_LOCKED.</h2>
      <p className="text-lg md:text-2xl uppercase mb-12 border-b-4 border-black pb-6 inline-block text-center truncate max-w-full italic">NODE_ID: #ORD-88291_ALPHA</p>
      <div className="text-left space-y-6 mb-12 min-w-0">
        {orderProtocol.map((item, i) => (
          <div key={i} className="flex flex-wrap md:flex-nowrap justify-between items-center border-4 border-black p-6 hover:bg-yellow-400 transition-colors shadow-[8px_8px_0_0_#000] gap-4 min-w-0 italic">
            <div className="min-w-0 flex-1">
              <h3 className="text-xl md:text-2xl font-black uppercase truncate">{item.name}</h3>
              <p className="text-sm uppercase opacity-60">QTY: {item.qty} | UID: {item.id}</p>
            </div>
            <span className="text-2xl md:text-3xl font-black shrink-0">${item.price * item.qty}</span>
          </div>
        ))}
      </div>
      <div className="bg-black text-white p-8 border-[6px] border-black shadow-[12px_12px_0_0_#facc15] mb-12 min-w-0 italic">
        <div className="flex flex-wrap justify-between items-center text-2xl md:text-4xl font-black uppercase tracking-tighter gap-4">
          <span>TOTAL_PAYLOAD</span>
          <span className="text-yellow-400">${finalTotal}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 italic">
        <button className="bg-black text-white py-6 text-2xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-all shadow-[8px_8px_0_0_#000]">TRACK_SIGNAL</button>
        <button className="bg-white text-black py-6 text-2xl font-black uppercase border-4 border-black hover:bg-black hover:text-white transition-all shadow-[8px_8px_0_0_#000]">SYNC_NEW_NODE</button>
      </div>
    </div>
  </div>
);

export const OrderSplit = () => (
  <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="flex flex-col lg:grid lg:grid-cols-12 border-[10px] border-black bg-white shadow-[32px_32px_0_0_#000] overflow-hidden min-w-0 italic">
      <div className="lg:col-span-5 bg-black text-white p-8 md:p-12 flex flex-col justify-between border-b-[10px] lg:border-b-0 lg:border-r-[10px] border-black min-w-0 text-left">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-none tracking-tighter break-words">MANIFEST_<br/>LOCKED.</h2>
        <div className="space-y-4 border-t-4 border-white/20 pt-8">
          <div className="flex justify-between text-sm uppercase gap-4"><span className="text-gray-500">Node_ID</span><span className="truncate">#ORD-88291</span></div>
          <div className="flex justify-between text-sm uppercase gap-4"><span className="text-gray-500">Sync_Date</span><span className="shrink-0">2024.10.24</span></div>
        </div>
      </div>
      <div className="lg:col-span-7 p-8 md:p-12 bg-white min-w-0 text-left italic">
        <h3 className="text-4xl font-black uppercase mb-10 border-b-4 border-black pb-4">CARGO_SUMMARY</h3>
        <div className="space-y-8 mb-12">
          {orderProtocol.map((item, i) => (
            <div key={i} className="flex flex-wrap sm:flex-nowrap justify-between items-start gap-4 border-b-2 border-black pb-6">
              <div className="min-w-0 flex-1">
                <span className="text-xs uppercase bg-black text-white px-2 py-1 mb-2 inline-block">{item.type}</span>
                <h4 className="text-2xl font-black uppercase truncate">{item.name}</h4>
              </div>
              <span className="text-2xl font-black shrink-0 ml-auto">${item.price * item.qty}</span>
            </div>
          ))}
        </div>
        <div className="space-y-4 border-t-8 border-black pt-8">
          <div className="flex justify-between text-xl uppercase"><span>SUBTOTAL</span><span>${totalVal}</span></div>
          <div className="flex justify-between text-3xl md:text-4xl font-black uppercase mt-4 bg-black text-white p-6 gap-4"><span>TOTAL</span><span>${finalTotal}</span></div>
        </div>
      </div>
    </div>
  </div>
);

export const OrderReceipt = () => (
  <div className="w-full max-w-md mx-auto px-4 font-mono italic font-bold text-left text-black">
    <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0_0_#000] relative overflow-hidden min-w-0 italic">
      <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400"></div>
      <div className="text-center mb-10 min-w-0">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-2 break-words">MANIFEST_RECEIPT</h2>
        <p className="text-[10px] uppercase opacity-40 truncate">TIMESTAMP: 2024.10.24 // SECURE_NODE: 88291</p>
      </div>
      <div className="border-y-4 border-black border-dashed py-8 space-y-6 mb-10 min-w-0">
        {orderProtocol.map((item, i) => (
          <div key={i} className="flex justify-between text-sm uppercase gap-4 min-w-0">
            <span className="truncate flex-1 pr-4">{item.qty}x {item.name}</span>
            <span className="shrink-0">${item.price * item.qty}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-2xl font-black uppercase border-t-4 border-black pt-4 gap-4">
        <span>FINAL_SYNC</span>
        <span className="shrink-0">${finalTotal}</span>
      </div>
      <div className="bg-black p-4 mt-8">
        <img src="https://bwipjs-api.metafloor.com/?bcid=code128&text=ORD-88291&scale=3&height=10&includetext" alt="Barcode" className="w-full invert" />
      </div>
      <p className="text-center text-[10px] uppercase opacity-50 mt-8">SYNC_COMPLETE // THANK_YOU_HUMAN</p>
    </div>
  </div>
);

export const OrderTracker = () => (
  <div className="w-full max-w-xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-black border-[8px] border-black shadow-[20px_20px_0_0_#22d3ee] overflow-hidden min-w-0 text-left italic">
      <div className="h-64 bg-cyan-400 relative border-b-[8px] border-black overflow-hidden group min-w-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-6 bg-black rounded-full animate-ping absolute"></div>
          <div className="w-6 h-6 bg-black border-4 border-white rounded-full relative"></div>
        </div>
      </div>
      <div className="bg-white p-10 min-w-0 text-left italic">
        <div className="flex flex-wrap justify-between items-end mb-10 gap-4">
          <div className="min-w-0">
            <div className="text-xs uppercase text-cyan-600 mb-2 tracking-[0.3em] truncate">Estimated_Arrival</div>
            <div className="text-4xl md:text-6xl font-black leading-none truncate italic">25-35 MIN</div>
          </div>
          <span className="bg-cyan-400 border-4 border-black px-4 py-2 text-sm font-black uppercase rotate-2 shrink-0">EN_ROUTE</span>
        </div>
        <div className="w-full h-6 bg-gray-200 border-4 border-black relative min-w-0">
          <div className="w-3/4 h-full bg-cyan-400 border-r-4 border-black"></div>
        </div>
      </div>
    </div>
  </div>
);

export const OrderCards = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-black text-left">
    <div className="grid md:grid-cols-3 gap-8 min-w-0 text-left italic">
      <div className="md:col-span-2 space-y-8 min-w-0">
        <div className="bg-white border-[8px] border-black p-10 shadow-[16px_16px_0_0_#ec4899] rotate-[-1deg]">
          <h2 className="text-4xl font-black uppercase mb-8 border-b-4 border-black pb-4">MANIFEST_ITEMS</h2>
          <div className="space-y-6">
            {orderProtocol.map((item, i) => (
              <div key={i} className="flex justify-between items-center border-4 border-black p-4 bg-white min-w-0 gap-4">
                <span className="w-16 h-16 bg-black text-white flex items-center justify-center text-2xl font-black shrink-0">{item.qty}x</span>
                <h4 className="text-xl font-black uppercase truncate flex-1">{item.name}</h4>
                <span className="text-2xl font-black shrink-0">${item.price * item.qty}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-yellow-400 border-[8px] border-black p-10 shadow-[16px_16px_0_0_#000] rotate-[1deg]">
        <h3 className="text-3xl font-black uppercase mb-8">SYNC_INFO</h3>
        <div className="flex justify-between text-2xl font-black border-t-4 border-black pt-4"><span>TOTAL</span><span>${finalTotal}</span></div>
      </div>
    </div>
  </div>
);

export const OrderGlass = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-white">
    <div className="relative bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-500 p-1 rounded-[3rem] shadow-[0_0_50px_rgba(139,92,246,0.3)] overflow-hidden min-w-0 text-left italic">
      <div className="bg-black/40 backdrop-blur-3xl p-8 md:p-16 rounded-[2.9rem] border border-white/20 text-center min-w-0">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tighter leading-none break-words italic">NEBULA_RESERVED.</h2>
        <div className="flex justify-between items-end gap-4 border-t border-white/10 pt-12 mt-12">
          <span className="uppercase text-xs tracking-[0.5em]">Total_Fuel</span>
          <span className="text-4xl md:text-5xl font-black text-pink-500 shrink-0">${finalTotal}</span>
        </div>
      </div>
    </div>
  </div>
);

export const OrderCyber = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-mono italic font-bold text-left text-green-500">
    <div className="bg-black border-4 border-green-500 p-8 md:p-12 shadow-[0_0_30px_rgba(34,197,94,0.2)] relative overflow-hidden min-w-0 text-left italic">
      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16 break-words italic">TX_AUTHENTICATED</h2>
      <div className="border-2 border-green-900 p-8 bg-green-950/20 text-left min-w-0">
        <div className="flex justify-between text-2xl font-black text-white"><span>RESERVE</span><span>ETH_0.45</span></div>
      </div>
    </div>
  </div>
);

export const OrderMinimal = () => (
  <div className="w-full max-w-2xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-8 border-black p-10 md:p-16 text-center min-w-0 text-left italic">
      <h2 className="text-6xl md:text-8xl font-black uppercase mb-4 tracking-tighter leading-none break-words italic">THANKS.</h2>
      <div className="flex justify-between pt-4 text-3xl font-black uppercase border-t-8 border-black gap-4 italic">
        <span>TOTAL</span>
        <span className="shrink-0">${finalTotal}</span>
      </div>
    </div>
  </div>
);

export const OrderNeo = () => (
  <div className="w-full max-w-xl mx-auto px-4 font-sans italic font-bold text-left text-slate-800">
    <div className="bg-[#e0e5ec] p-10 md:p-16 rounded-[4rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center border border-white/20 min-w-0 text-left italic">
      <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tighter uppercase break-words italic">PAYMENT_RECEIVED</h2>
      <div className="bg-[#e0e5ec] p-8 md:p-10 rounded-[3rem] shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] mb-12">
        <div className="flex justify-between text-2xl font-black text-blue-600 uppercase gap-4 italic">
          <span>TOTAL</span>
          <span className="shrink-0 ml-auto">${finalTotal}</span>
        </div>
      </div>
    </div>
  </div>
);

export const OrderNeoBrutal = () => (
  <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold text-left text-white">
    <div className="flex flex-col lg:grid lg:grid-cols-12 border-[10px] border-black bg-black shadow-[40px_40px_0_0_#facc15] overflow-hidden min-w-0 text-left italic">
      <div className="lg:col-span-7 bg-[#ec4899] p-8 md:p-12 lg:p-16 border-b-[10px] lg:border-b-0 lg:border-r-[10px] border-black min-w-0">
        <h2 className="text-5xl md:text-8xl font-black text-white uppercase leading-none tracking-tighter mb-12 rotate-[-2deg] bg-black inline-block px-4 shadow-[8px_8px_0_0_#fff] break-words">SUCCESS_</h2>
      </div>
      <div className="lg:col-span-5 bg-cyan-400 p-8 md:p-10 lg:p-12 flex flex-col justify-between text-black relative overflow-hidden min-w-0">
        <div className="bg-black text-white p-8 border-4 border-white shadow-[12px_12px_0_0_#ff00ff]">
          <div className="flex justify-between items-center text-3xl md:text-4xl font-black uppercase tracking-tighter gap-4 italic text-left">
            <span>TOTAL</span>
            <span className="text-pink-500 text-4xl md:text-5xl shrink-0">${finalTotal}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- MAIN GALLERY ---

const OrderSummaryGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-100 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16 italic">
        <h1 className="text-5xl md:text-7xl font-black text-slate-800 mb-4 uppercase">Order Summaries</h1>
        <p className="text-slate-500 font-bold uppercase tracking-widest">High-Fidelity Restoration Protocol Active</p>
      </div>
      
      <div className="space-y-32 max-w-6xl mx-auto">
        
        {/* 01. BRUTALIST */}
        <section className='box-shadow p-4 rounded-lg relative group/orde bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/orde:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const OrderBrutalist = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[10px] border-black p-12 shadow-[24px_24px_0_0_#000] text-center min-w-0 italic">
      <div className="w-24 h-24 bg-black text-white border-[6px] border-black flex items-center justify-center mx-auto mb-10 rotate-3 shadow-[8px_8px_0_0_#facc15] shrink-0">
        <span className="text-5xl font-black">✓</span>
      </div>
      <h2 className="text-7xl font-black uppercase mb-4 tracking-tighter leading-none text-center break-words italic">ORDER_LOCKED.</h2>
      <p className="text-2xl uppercase mb-12 border-b-4 border-black pb-6 inline-block text-center truncate max-w-full">NODE_ID: #ORD-88291_ALPHA</p>
      <div className="text-left space-y-6 mb-12 min-w-0">
        {[
          { name: "QUANTUM_CORE_V1", price: 140, qty: 1, id: "NODE_KEY_01" },
          { name: "NEURAL_LINK_COIL", price: 35, qty: 2, id: "NODE_KEY_02" },
          { name: "MATRIX_UPGRADE_PATCH", price: 10, qty: 1, id: "NODE_KEY_03" }
        ].map((item, i) => (
          <div key={i} className="flex justify-between items-center border-4 border-black p-6 hover:bg-yellow-400 transition-colors shadow-[8px_8px_0_0_#000] gap-4 min-w-0">
            <div className="min-w-0 flex-1">
              <h3 className="text-2xl font-black uppercase truncate">{item.name}</h3>
              <p className="text-sm uppercase opacity-60 italic">QTY: {item.qty} | UID: {item.id}</p>
            </div>
            <span className="text-3xl font-black shrink-0">\\$140</span>
          </div>
        ))}
      </div>
      <div className="bg-black text-white p-8 border-[6px] border-black shadow-[12px_12px_0_0_#facc15] mb-12 min-w-0">
        <div className="flex justify-between items-center text-4xl font-black uppercase tracking-tighter italic">
          <span>TOTAL_PAYLOAD</span>
          <span className="text-yellow-400">$220</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <button className="bg-black text-white py-6 text-2xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-all shadow-[8px_8px_0_0_#000] italic">TRACK_SIGNAL</button>
        <button className="bg-white text-black py-6 text-2xl font-black uppercase border-4 border-black hover:bg-black hover:text-white transition-all shadow-[8px_8px_0_0_#000] italic">SYNC_NEW_NODE</button>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="brutal-root">
  <div class="icon">✓</div>
  <h2 class="title">ORDER_LOCKED.</h2>
  <p class="node-id">NODE_ID: #ORD-88291_ALPHA</p>
  <div class="items">
    <div class="item">
      <div class="item-info"><h3 class="item-name">QUANTUM_CORE_V1</h3><p class="item-meta">QTY: 1 | UID: NODE_KEY_01</p></div>
      <span class="item-price">$140</span>
    </div>
    <div class="item">
      <div class="item-info"><h3 class="item-name">NEURAL_LINK_COIL</h3><p class="item-meta">QTY: 2 | UID: NODE_KEY_02</p></div>
      <span class="item-price">$70</span>
    </div>
    <div class="item">
      <div class="item-info"><h3 class="item-name">MATRIX_UPGRADE_PATCH</h3><p class="item-meta">QTY: 1 | UID: NODE_KEY_03</p></div>
      <span class="item-price">$10</span>
    </div>
  </div>
  <div class="total-box"><span>TOTAL_PAYLOAD</span><span class="total-val">$220</span></div>
  <div class="actions">
    <button class="btn btn-primary">TRACK_SIGNAL</button>
    <button class="btn btn-secondary">SYNC_NEW_NODE</button>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.brutal-root { background: white; border: 10px solid black; padding: 48px; box-shadow: 24px 24px 0 0 #000; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; text-align: center; color: black; max-width: 800px; margin: 40px auto; }
.icon { width: 96px; height: 96px; background: black; color: white; display: flex; align-items: center; justify-content: center; margin: 0 auto 40px; font-size: 48px; transform: rotate(3deg); box-shadow: 8px 8px 0 0 #facc15; }
.title { font-size: 80px; text-transform: uppercase; margin-bottom: 16px; line-height: 1; letter-spacing: -0.05em; }
.node-id { font-size: 24px; text-transform: uppercase; border-bottom: 4px solid black; padding-bottom: 24px; display: inline-block; margin-bottom: 48px; }
.items { text-align: left; margin-bottom: 48px; display: grid; gap: 24px; }
.item { display: flex; justify-content: space-between; align-items: center; border: 4px solid black; padding: 24px; box-shadow: 8px 8px 0 0 #000; transition: background 0.2s; }
.total-box { background: black; color: white; padding: 32px; display: flex; justify-content: space-between; font-size: 40px; box-shadow: 12px 12px 0 0 #facc15; margin-bottom: 48px; }
.total-val { color: #facc15; }
.actions { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.btn { border: 4px solid black; padding: 24px; font-size: 24px; font-weight: 900; text-transform: uppercase; font-family: inherit; font-style: inherit; box-shadow: 8px 8px 0 0 #000; transition: all 0.2s; cursor: pointer; }
.btn-primary { background: black; color: white; }
.btn-secondary { background: white; color: black; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">01. Alpha Protocol Brutalist</span>
          <OrderBrutalist />
        </section>

        {/* 02. SPLIT */}
        <section className='box-shadow p-4 rounded-lg relative group/orde bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/orde:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const OrderSplit = () => (
  <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="flex flex-col lg:grid lg:grid-cols-12 border-[10px] border-black bg-white shadow-[32px_32px_0_0_#000] overflow-hidden min-w-0 italic">
      <div className="lg:col-span-5 bg-black text-white p-12 flex flex-col justify-between border-r-[10px] border-black min-w-0">
        <h2 className="text-6xl font-black uppercase mb-6 leading-none tracking-tighter break-words italic">MANIFEST_<br/>LOCKED.</h2>
        <div className="space-y-4 border-t-4 border-white/20 pt-8 italic">
          <div className="flex justify-between text-sm uppercase gap-4"><span className="text-gray-500">Node_ID</span><span>#ORD-88291</span></div>
          <div className="flex justify-between text-sm uppercase gap-4"><span className="text-gray-500">Sync_Date</span><span>2024.10.24</span></div>
        </div>
      </div>
      <div className="lg:col-span-7 p-12 bg-white min-w-0 italic">
        <h3 className="text-4xl font-black uppercase mb-10 border-b-4 border-black pb-4 italic">CARGO_SUMMARY</h3>
        <div className="space-y-8 mb-12">
          {[
            { name: "QUANTUM_CORE_V1", price: 140, type: "HARDWARE" },
            { name: "NEURAL_LINK_COIL", price: 70, type: "ACCESSORY" }
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-start gap-4 border-b-2 border-black pb-6">
              <div><span className="text-xs uppercase bg-black text-white px-2 py-1 mb-2 inline-block italic">{item.type}</span><h4 className="text-2xl font-black uppercase truncate">{item.name}</h4></div>
              <span className="text-2xl font-black shrink-0 ml-auto">\\$140</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-4xl font-black uppercase mt-4 bg-black text-white p-6 gap-4 italic"><span>TOTAL</span><span>$220</span></div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="split-root">
  <div class="sidebar">
    <h2 class="title">MANIFEST_<br>LOCKED.</h2>
    <div class="meta"><span>Node_ID</span><span>#ORD-88291</span></div>
    <div class="meta"><span>Sync_Date</span><span>2024.10.24</span></div>
  </div>
  <div class="content">
    <h3 class="heading">CARGO_SUMMARY</h3>
    <div class="items">
      <div class="item">
        <div class="info"><span class="type">HARDWARE</span><h4 class="name">QUANTUM_CORE_V1</h4></div>
        <span class="price">$140</span>
      </div>
      <div class="item">
        <div class="info"><span class="type">ACCESSORY</span><h4 class="name">NEURAL_LINK_COIL</h4></div>
        <span class="price">$70</span>
      </div>
    </div>
    <div class="total-row"><span>TOTAL</span><span>$210</span></div>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.split-root { display: flex; border: 10px solid black; background: white; box-shadow: 32px 32px 0 0 #000; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 1000px; margin: 40px auto; overflow: hidden; }
.sidebar { width: 40%; background: black; color: white; padding: 48px; border-right: 10px solid black; display: flex; flex-direction: column; justify-content: space-between; }
.content { width: 60%; padding: 48px; color: black; }
.title { font-size: 64px; text-transform: uppercase; line-height: 0.9; letter-spacing: -0.05em; margin-bottom: 48px; }
.meta { display: flex; justify-content: space-between; font-size: 14px; text-transform: uppercase; border-top: 2px solid rgba(255,255,255,0.2); padding-top: 16px; margin-top: 16px; }
.heading { font-size: 40px; text-transform: uppercase; border-bottom: 4px solid black; padding-bottom: 16px; margin-bottom: 40px; }
.item { display: flex; justify-content: space-between; border-bottom: 2px solid black; padding-bottom: 16px; margin-bottom: 16px; }
.type { background: black; color: white; padding: 4px 8px; font-size: 10px; display: inline-block; margin-bottom: 8px; }
.total-row { background: black; color: white; padding: 24px; display: flex; justify-content: space-between; font-size: 40px; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">02. Manifest Split Locked</span>
          <OrderSplit />
        </section>

        {/* 03. RECEIPT */}
        <section className='box-shadow p-4 rounded-lg relative group/orde bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/orde:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const OrderReceipt = () => (
  <div className="w-full max-w-md mx-auto px-4 font-mono italic font-bold text-left text-black">
    <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0_0_#000] relative overflow-hidden min-w-0 italic">
      <h2 className="text-3xl font-black uppercase tracking-tighter mb-10 text-center italic">MANIFEST_RECEIPT</h2>
      <div className="flex justify-between text-2xl font-black uppercase border-t-4 border-black pt-4 italic"><span>FINAL_SYNC</span><span>$140</span></div>
    </div>
  </div>
);`}
              htmlCode={`<div class="receipt-root">
  <div class="yellow-top"></div>
  <h2 class="title">MANIFEST_RECEIPT</h2>
  <div class="items-list">
    <div class="item-row"><span>1x QUANTUM_CORE_V1</span><span>$140</span></div>
    <div class="item-row"><span>2x NEURAL_LINK_COIL</span><span>$70</span></div>
    <div class="item-row"><span>1x MATRIX_UPGRADE_PATCH</span><span>$10</span></div>
  </div>
  <div class="final-total"><span>FINAL_SYNC</span><span>$220</span></div>
  <div class="barcode-area"><div class="barcode-placeholder">|||| || |||| |||</div><p>ORD-88291</p></div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700;900&display=swap');
.receipt-root { background: white; border: 4px solid black; padding: 32px; box-shadow: 12px 12px 0 0 #000; font-family: 'Inter', monospace; font-style: italic; font-weight: 700; max-width: 400px; margin: 40px auto; color: black; position: relative; }
.yellow-top { position: absolute; top: 0; left: 0; width: 100%; height: 8px; background: #facc15; }
.title { font-size: 24px; text-align: center; border-bottom: 2px dashed black; padding-bottom: 24px; margin-bottom: 32px; text-transform: uppercase; }
.item-row { display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 16px; text-transform: uppercase; }
.final-total { font-size: 24px; display: flex; justify-content: space-between; border-top: 4px solid black; padding-top: 24px; text-transform: uppercase; font-weight: 900; }
.barcode-area { background: black; padding: 24px; margin-top: 32px; color: white; text-align: center; }
.barcode-placeholder { font-size: 32px; letter-spacing: 2px; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">03. Manifest Receipt Receipt</span>
          <OrderReceipt />
        </section>

        {/* 04. TRACKER */}
        <section className='box-shadow p-4 rounded-lg relative group/orde bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/orde:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const OrderTracker = () => (
  <div className="w-full max-w-xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-black border-[8px] border-black shadow-[20px_20px_0_0_#22d3ee] overflow-hidden min-w-0 text-left italic">
      <div className="h-64 bg-cyan-400 relative border-b-[8px] border-black overflow-hidden group min-w-0 italic">
        <div className="radar-dot"></div>
      </div>
      <div className="bg-white p-10 min-w-0 italic">
        <div className="flex justify-between items-end mb-10 gap-4"><div className="text-6xl font-black italic">25 MIN</div><span class="badge">EN_ROUTE</span></div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="tracker-box">
  <div class="tracker-map"><div class="radar-dot"></div></div>
  <div class="tracker-info">
    <div class="eta-area"><div class="eta-val">25 <span>MIN</span></div><div class="status-badge">EN_ROUTE</div></div>
    <div class="progress-bar"><div class="progress-fill"></div></div>
    <div class="driver-card">
      <div class="driver-avatar"></div>
      <div class="driver-details"><h4>UNIT_MICHAEL_V4</h4><p>CARRIER_NODE_SECTOR_7</p></div>
    </div>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.tracker-box { background: black; border: 8px solid black; box-shadow: 20px 20px 0 0 #22d3ee; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 500px; margin: 40px auto; overflow: hidden; }
.tracker-map { height: 250px; background: #22d3ee; border-bottom: 8px solid black; position: relative; }
.radar-dot { position: absolute; top: 50%; left: 50%; width: 20px; height: 20px; background: black; border: 4px solid white; border-radius: 50%; animation: pulse 1.5s infinite; }
@keyframes pulse { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(3); opacity: 0; } }
.tracker-info { background: white; padding: 40px; color: black; }
.eta-area { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 32px; }
.eta-val { font-size: 64px; line-height: 1; }
.status-badge { background: #22d3ee; border: 4px solid black; padding: 8px 16px; font-size: 14px; text-transform: uppercase; transform: rotate(2deg); }
.progress-bar { width: 100%; height: 16px; background: #e2e8f0; border: 4px solid black; margin-bottom: 32px; }
.progress-fill { width: 75%; height: 100%; background: #22d3ee; border-right: 4px solid black; }
.driver-card { display: flex; align-items: center; gap: 16px; background: black; color: white; padding: 16px; border: 4px solid black; }
.driver-avatar { width: 48px; height: 48px; background: #22d3ee; border: 2px solid white; }
.driver-details h4 { font-size: 16px; margin: 0; text-transform: uppercase; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">04. Radar Tracker Signal</span>
          <OrderTracker />
        </section>

        {/* 05. CARDS */}
        <section className='box-shadow p-4 rounded-lg relative group/orde bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/orde:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const OrderCards = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-black text-left">
    <div className="grid md:grid-cols-3 gap-8 min-w-0 text-left italic">
      <div className="md:col-span-2 space-y-8 min-w-0">
        <div className="bg-white border-[8px] border-black p-10 shadow-[16px_16px_0_0_#ec4899] rotate-[-1deg]">
          <h2 className="text-4xl font-black uppercase mb-8 border-b-4 border-black pb-4 italic">MANIFEST_ITEMS</h2>
          <div className="space-y-6">
            {[
              { name: "QUANTUM_CORE_V1", price: 140, qty: 1 },
              { name: "NEURAL_LINK_COIL", price: 70, qty: 2 }
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center border-4 border-black p-4 bg-white min-w-0 gap-4 italic">
                <span className="w-16 h-16 bg-black text-white flex items-center justify-center text-2xl font-black shrink-0">{item.qty}x</span>
                <h4 className="text-xl font-black uppercase truncate flex-1">{item.name}</h4>
                <span className="text-2xl font-black shrink-0">\\$140</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-yellow-400 border-[8px] border-black p-10 shadow-[16px_16px_0_0_#000] rotate-[1deg] italic">
        <h3 className="text-3xl font-black uppercase mb-8 italic">SYNC_INFO</h3>
        <div className="flex justify-between text-2xl font-black border-t-4 border-black pt-4 italic"><span>TOTAL</span><span>$220</span></div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="matrix-cards-root">
  <div class="left-col">
    <div class="items-card">
      <h2 class="title">MANIFEST_ITEMS</h2>
      <div class="item">
        <div class="qty-box">1x</div>
        <h4 class="name">QUANTUM_CORE_V1</h4>
        <span class="price">$140</span>
      </div>
      <div class="item">
        <div class="qty-box">2x</div>
        <h4 class="name">NEURAL_LINK_COIL</h4>
        <span class="price">$70</span>
      </div>
    </div>
  </div>
  <div class="right-col">
    <div class="info-card">
      <h3 class="title">SYNC_INFO</h3>
      <div class="total-row"><span>TOTAL</span><span>$210</span></div>
    </div>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.matrix-cards-root { display: grid; grid-template-columns: 2fr 1fr; gap: 32px; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 1000px; margin: 40px auto; }
@media (max-width: 768px) { .matrix-cards-root { grid-template-columns: 1fr; } }
.items-card { background: white; border: 8px solid black; padding: 40px; box-shadow: 16px 16px 0 0 #ec4899; transform: rotate(-1deg); }
.info-card { background: #facc15; border: 8px solid black; padding: 40px; box-shadow: 16px 16px 0 0 #000; transform: rotate(1deg); }
.title { font-size: 32px; text-transform: uppercase; border-bottom: 4px solid black; padding-bottom: 16px; margin-bottom: 32px; }
.item { display: flex; align-items: center; gap: 16px; border: 4px solid black; padding: 16px; margin-bottom: 16px; background: white; }
.qty-box { background: black; color: white; padding: 8px 16px; font-size: 24px; }
.name { flex: 1; font-size: 20px; text-transform: uppercase; }
.total-row { display: flex; justify-content: space-between; font-size: 32px; border-top: 4px solid black; padding-top: 16px; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">05. Manifest Matrix Cards</span>
          <OrderCards />
        </section>

        {/* 06. GLASS */}
        <section className='box-shadow p-4 rounded-lg relative group/orde bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/orde:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const OrderGlass = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-white">
    <div className="relative bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-500 p-1 rounded-[3rem] shadow-[0_0_50px_rgba(139,92,246,0.3)] overflow-hidden min-w-0 text-left italic">
      <div className="bg-black/40 backdrop-blur-3xl p-16 rounded-[2.9rem] border border-white/20 text-center min-w-0 italic">
        <h2 className="text-6xl font-black uppercase mb-4 tracking-tighter leading-none break-words italic">NEBULA_RESERVED.</h2>
        <div className="flex justify-between font-black text-pink-300 italic border-t border-white/20 pt-8 mt-8 italic"><span>TOTAL</span><span>$210</span></div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="glass-nebula-root">
  <div class="glass-inner">
    <h2 class="title">NEBULA_RESERVED.</h2>
    <p class="hash">TX: 0x3F...9A2B</p>
    <div class="items">
      <div class="item"><span>CORE_V1</span><span>$140</span></div>
      <div class="item"><span>LINK_COIL</span><span>$70</span></div>
    </div>
    <div class="total-row"><span>TOTAL_FUEL</span><span>$210</span></div>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.glass-nebula-root { background: linear-gradient(to bottom right, #4f46e5, #ec4899); padding: 4px; border-radius: 48px; box-shadow: 0 0 50px rgba(79, 70, 229, 0.4); font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 600px; margin: 40px auto; overflow: hidden; }
.glass-inner { background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(20px); padding: 64px; border-radius: 44px; border: 1px solid rgba(255,255,255,0.2); text-align: center; color: white; }
.title { font-size: 48px; text-transform: uppercase; margin-bottom: 8px; letter-spacing: -0.05em; }
.hash { font-size: 12px; color: #f472b6; margin-bottom: 48px; }
.items { text-align: left; margin-bottom: 48px; }
.item { display: flex; justify-content: space-between; font-size: 16px; margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
.total-row { display: flex; justify-content: space-between; font-size: 32px; color: #f472b6; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 24px; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">06. Nebula Glass Aesthetics</span>
          <OrderGlass />
        </section>

        {/* 07. CYBER */}
        <section className='box-shadow p-4 rounded-lg relative group/orde bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/orde:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const OrderCyber = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-mono italic font-bold text-left text-green-500">
    <div className="bg-black border-green-500 p-12 shadow-[0_0_30px_rgba(34,197,94,0.2)] relative min-w-0 text-left italic border-4">
      <h2 className="text-5xl font-black uppercase tracking-tighter mb-16 italic break-words">TX_AUTHENTICATED</h2>
      <div className="border-2 border-green-900 p-8 bg-green-950/20 text-left min-w-0 italic">
        <div className="flex justify-between text-2xl font-black text-white italic"><span>RESERVE</span><span>ETH_0.45</span></div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="cyber-terminal-root">
  <div class="header"><h2 class="title">TX_AUTHENTICATED</h2><p class="node">NODE_SECTOR_7G</p></div>
  <div class="logs">
    <div class="log-line"><span>> SYNCING_CORE_V1</span><span>OK</span></div>
    <div class="log-line"><span>> NEURAL_LINK_COIL</span><span>OK</span></div>
  </div>
  <div class="reserve-box"><span>TOTAL_RESERVE</span><span>ETH_0.450</span></div>
  <div class="footer">AUTHENTICATED_SECURE_PAYLOAD</div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700;900&display=swap');
.cyber-terminal-root { background: black; border: 4px solid #22c55e; padding: 48px; box-shadow: 0 0 30px rgba(34, 197, 94, 0.4); font-family: 'Inter', monospace; font-style: italic; font-weight: 700; color: #22c55e; max-width: 600px; margin: 40px auto; }
.title { font-size: 32px; text-transform: uppercase; margin-bottom: 8px; }
.node { font-size: 12px; margin-bottom: 48px; opacity: 0.6; }
.logs { border: 2px solid #14532d; padding: 24px; background: rgba(20, 83, 45, 0.2); margin-bottom: 48px; }
.log-line { display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 12px; }
.reserve-box { border-top: 2px solid #22c55e; padding-top: 24px; display: flex; justify-content: space-between; font-size: 24px; color: white; }
.footer { font-size: 10px; margin-top: 48px; text-align: center; opacity: 0.4; letter-spacing: 4px; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">07. Cyber Terminal Authenticated</span>
          <OrderCyber />
        </section>

        {/* 08. MINIMAL */}
        <section className='box-shadow p-4 rounded-lg relative group/orde bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/orde:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const OrderMinimal = () => (
  <div className="w-full max-w-2xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-8 border-black p-16 text-center min-w-0 text-left italic">
      <h2 className="text-8xl font-black uppercase mb-4 tracking-tighter leading-none italic break-words">THANKS.</h2>
      <div className="flex justify-between text-4xl font-black uppercase border-t-8 border-black pt-8 italic"><span>TOTAL</span><span>$210</span></div>
    </div>
  </div>
);`}
              htmlCode={`<div class="minimal-thanks-root">
  <h2 class="title">THANKS.</h2>
  <div class="order-id">#ORD-88291</div>
  <div class="total-row"><span>TOTAL</span><span>$210</span></div>
  <button class="btn">CONTINUE_SYNC</button>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.minimal-thanks-root { background: white; border: 8px solid black; padding: 64px; text-align: center; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 400px; margin: 40px auto; color: black; }
.title { font-size: 80px; text-transform: uppercase; line-height: 1; margin-bottom: 16px; }
.order-id { font-size: 24px; text-transform: uppercase; margin-bottom: 64px; opacity: 0.5; }
.total-row { display: flex; justify-content: space-between; font-size: 32px; border-top: 8px solid black; padding-top: 32px; margin-bottom: 48px; }
.btn { width: 100%; background: black; color: white; padding: 24px; font-size: 20px; font-weight: 900; border: none; text-transform: uppercase; cursor: pointer; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">08. Minimal Core Success</span>
          <OrderMinimal />
        </section>

        {/* 09. NEO */}
        <section className='box-shadow p-4 rounded-lg relative group/orde bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/orde:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const OrderNeo = () => (
  <div className="w-full max-w-xl mx-auto px-4 font-sans italic font-bold text-left text-slate-800">
    <div className="bg-[#e0e5ec] p-16 rounded-[4rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center border border-white/20 min-w-0 text-left italic">
      <h2 className="text-5xl font-black mb-12 uppercase italic break-words">RECEIVED</h2>
      <div className="bg-[#e0e5ec] p-10 rounded-[3rem] shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] italic">
        <div className="flex justify-between text-3xl font-black text-blue-600 uppercase italic"><span>TOTAL</span><span>$210</span></div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="neo-order-root">
  <div class="neo-card">
    <h2 class="title">RECEIVED</h2>
    <div class="inner-box">
      <div class="row"><span>SUBTOTAL</span><span>$140</span></div>
      <div class="total-row"><span>TOTAL</span><span>$140</span></div>
    </div>
    <button class="neo-btn">DONE</button>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.neo-order-root { background: #e0e5ec; padding: 64px; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 500px; margin: 40px auto; }
.neo-card { background: #e0e5ec; padding: 48px; border-radius: 64px; box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; text-align: center; border: 1px solid rgba(255,255,255,0.2); }
.title { font-size: 40px; color: #1e293b; margin-bottom: 48px; }
.inner-box { background: #e0e5ec; padding: 32px; border-radius: 48px; box-shadow: inset 10px 10px 20px #bebebe, inset -10px -10px 20px #ffffff; margin-bottom: 48px; }
.row { display: flex; justify-content: space-between; font-size: 16px; color: #64748b; margin-bottom: 16px; }
.total-row { display: flex; justify-content: space-between; font-size: 24px; color: #2563eb; }
.neo-btn { width: 100%; background: #e0e5ec; color: #3b82f6; padding: 20px; border-radius: 16px; font-size: 20px; border: none; box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff; cursor: pointer; font-weight: 900; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">09. Soft Neo-Matrix Success</span>
          <OrderNeo />
        </section>

        {/* 10. CHAOS */}
        <section className='box-shadow p-4 rounded-lg relative group/orde bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/orde:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const OrderNeoBrutal = () => (
  <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold text-left text-white">
    <div className="flex flex-col lg:grid lg:grid-cols-12 border-[10px] border-black bg-black shadow-[40px_40px_0_0_#facc15] overflow-hidden min-w-0 text-left italic">
      <div className="lg:col-span-7 bg-[#ec4899] p-16 border-r-[10px] border-black min-w-0 text-left italic">
        <h2 className="text-8xl font-black text-white uppercase leading-none mb-12 rotate-[-2deg] bg-black inline-block px-4 shadow-[8px_8px_0_0_#fff] break-words">SUCCESS_</h2>
      </div>
      <div className="lg:col-span-5 bg-cyan-400 p-12 flex flex-col justify-between text-black min-w-0 italic">
        <h2 className="text-5xl font-black uppercase border-b-[8px] border-black pb-4 mb-12 italic">PAYLOAD.</h2>
        <div className="bg-black text-white p-8 border-4 border-white shadow-[12px_12px_0_0_#ff00ff] font-black italic">TOTAL: $210</div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="chaos-root">
  <div class="left-side">
    <h2 class="title">SUCCESS_</h2>
    <p class="desc">YOUR_ORDER_HAS_BEEN_INJECTED_INTO_THE_MESH.</p>
    <div class="meta-grid">
      <div class="m-card"><span>MANIFEST_ID</span><p>ORD-88291</p></div>
      <div class="m-card"><span>SYNC_POINT</span><p>NODE_S7</p></div>
    </div>
  </div>
  <div class="right-side">
    <h2 class="r-title">PAYLOAD.</h2>
    <div class="items">
      <div class="item"><span>QUANTUM_CORE_V1</span><span class="price-tag">$140</span></div>
      <div class="item"><span>NEURAL_LINK_COIL</span><span class="price-tag">$70</span></div>
    </div>
    <div class="total-area">
      <div class="total-card"><span>TOTAL</span><span>$210</span></div>
      <button class="btn">ACKNOWLEDGE_</button>
    </div>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.chaos-root { display: grid; grid-template-columns: 7fr 5fr; border: 10px solid black; background: black; box-shadow: 40px 40px 0 0 #facc15; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 1100px; margin: 40px auto; overflow: hidden; }
@media (max-width: 1024px) { .chaos-root { grid-template-columns: 1fr; } }
.left-side { background: #ec4899; padding: 64px; border-right: 10px solid black; }
.right-side { background: #22d3ee; padding: 48px; color: black; display: flex; flex-direction: column; justify-content: space-between; }
.title { font-size: 80px; background: black; color: white; display: inline-block; padding: 0 16px; transform: rotate(-2deg); box-shadow: 8px 8px 0 0 #fff; margin-bottom: 32px; line-height: 1; }
.desc { font-size: 24px; color: black; margin-bottom: 48px; text-transform: uppercase; }
.meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.m-card { background: white; border: 4px solid black; padding: 20px; box-shadow: 8px 8px 0 0 #000; }
.m-card span { font-size: 10px; opacity: 0.5; }
.r-title { font-size: 64px; text-transform: uppercase; border-bottom: 8px solid black; padding-bottom: 16px; margin-bottom: 48px; }
.item { display: flex; justify-content: space-between; border-bottom: 4px solid black; padding-bottom: 16px; margin-bottom: 16px; font-size: 24px; }
.price-tag { background: black; color: white; padding: 0 8px; }
.total-card { background: black; color: white; padding: 32px; border: 4px solid white; box-shadow: 12px 12px 0 0 #ff00ff; display: flex; justify-content: space-between; font-size: 40px; margin-bottom: 32px; }
.btn { width: 100%; background: white; color: black; border: 8px solid black; padding: 32px; font-size: 32px; font-weight: 900; text-transform: uppercase; box-shadow: 12px 12px 0 0 #000; cursor: pointer; font-family: inherit; font-style: inherit; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">10. NeoBrutal Chaos Upsync</span>
          <OrderNeoBrutal />
        </section>

      </div>
    </div>
  );
};

export default OrderSummaryGallery;