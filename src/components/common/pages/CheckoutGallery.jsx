import React, { useState } from 'react';
import CopyButton from '../CopyButton';

/**
 * CheckoutGallery.jsx
 * 
 * GOLD STANDARD UI SUITE - MODERNIZED
 * Pattern: Bold-Black-Italic Brutalist
 * 
 * Contains 10 High-Fidelity Checkout Variants
 * Each with 100% Literal, Non-Truncated Code Export (JSX, HTML, CSS)
 */

// --- Shared Assets ---
const cartItems = [
  { id: 1, name: "Neural_Link_V1", price: 299, qty: 1, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200" },
  { id: 2, name: "Matrix_Protocol_License", price: 59, qty: 1, img: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=200" }
];

const total = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

// ==========================================
// 01. CHECKOUT BRUTALIST
// ==========================================
export const CheckoutBrutalist = () => (
  <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold">
    <div className="bg-yellow-400 border-[8px] border-black p-12 shadow-[24px_24px_0_0_#000] relative overflow-hidden text-left text-black">
      <h1 className="text-7xl md:text-9xl font-black uppercase mb-16 tracking-tighter leading-none">
        Pay_ <br/> <span className="bg-black text-white px-4 italic">Now.</span>
      </h1>
      
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex-1 space-y-12">
          <section>
            <h3 className="text-4xl font-black uppercase mb-8 border-b-8 border-black pb-2 italic">01. Signal_ID</h3>
            <input type="email" placeholder="USER@NETWORK.NODE" className="w-full bg-white border-4 border-black p-6 text-2xl font-black uppercase focus:bg-cyan-300 outline-none placeholder-black/30" />
          </section>
          <section>
            <h3 className="text-4xl font-black uppercase mb-8 border-b-8 border-black pb-2 italic">02. Vault_Key</h3>
            <div className="space-y-6">
              <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-white border-4 border-black p-6 text-2xl font-black uppercase focus:bg-pink-300 outline-none placeholder-black/30" />
              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="MM/YY" className="w-full bg-white border-4 border-black p-6 text-xl font-black uppercase focus:bg-pink-300 outline-none placeholder-black/30" />
                <input type="text" placeholder="CVC" className="w-full bg-white border-4 border-black p-6 text-xl font-black uppercase focus:bg-pink-300 outline-none placeholder-black/30" />
              </div>
            </div>
          </section>
        </div>

        <div className="lg:w-96 space-y-8">
          <div className="bg-black text-white p-10 border-4 border-black shadow-[12px_12px_0_0_#fff]">
            <h3 className="text-3xl font-black uppercase mb-8 italic border-b-2 border-white pb-4">Pulse_Summary</h3>
            <div className="space-y-6 mb-10">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center gap-4 border-b border-white/20 pb-4">
                  <span className="uppercase text-lg leading-none truncate flex-1 min-w-0">{item.name}</span>
                  <span className="font-black text-yellow-400 shrink-0">${item.price}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-4xl font-black uppercase tracking-tighter italic">
              <span>TOTAL</span>
              <span className="text-yellow-400">$358</span>
            </div>
          </div>
          <button className="w-full bg-black text-white py-10 text-4xl font-black uppercase tracking-widest hover:bg-white hover:text-black border-8 border-black transition-all shadow-[12px_12px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none italic">
            Execute_Pay →
          </button>
        </div>
      </div>
    </div>
  </div>
);

// ==========================================
// 02. CHECKOUT SPLIT
// ==========================================
export const CheckoutSplit = () => (
  <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold">
    <div className="flex flex-col md:flex-row h-auto md:h-[800px] border-[10px] border-black bg-white shadow-[32px_32px_0_0_#000] overflow-hidden text-left">
      <div className="w-full md:w-5/12 bg-black text-white p-16 flex flex-col justify-between border-r-[10px] border-black">
        <div>
          <h2 className="text-7xl font-black uppercase mb-12 tracking-tighter leading-none italic">Order_ <br/> Manifest.</h2>
          <div className="space-y-12">
            {cartItems.map(item => (
              <div key={item.id} className="flex gap-8 items-center group">
                <div className="w-24 h-24 bg-white border-4 border-yellow-400 p-2 rotate-3 group-hover:rotate-0 transition-transform">
                  <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-2xl font-black uppercase tracking-tight mb-1 truncate">{item.name}</div>
                  <div className="text-yellow-400 text-xl font-mono uppercase">QUANTITY: 1</div>
                </div>
                <div className="text-2xl font-black text-white shrink-0">${item.price}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t-4 border-white pt-8">
          <div className="flex justify-between text-5xl font-black uppercase italic tracking-tighter">
            <span>TOTAL_</span>
            <span className="text-yellow-400">$358</span>
          </div>
        </div>
      </div>

      <div className="w-full md:w-7/12 p-16 overflow-y-auto bg-yellow-50 custom-scrollbar text-black">
        <div className="max-w-md mx-auto space-y-16">
          <h3 className="text-5xl font-black uppercase tracking-tighter italic border-b-8 border-black pb-4">Secure_Node_Auth</h3>
          <form className="space-y-10">
            <div className="space-y-4">
              <label className="text-xs uppercase tracking-[0.5em] font-mono block">Node_Signal_Email</label>
              <input type="text" className="w-full bg-transparent border-b-8 border-black p-4 text-3xl font-black uppercase outline-none focus:border-cyan-500" placeholder="PROTO_001" />
            </div>
            <div className="space-y-4">
              <label className="text-xs uppercase tracking-[0.5em] font-mono block">Vault_Identity_Card</label>
              <input type="text" className="w-full bg-transparent border-b-8 border-black p-4 text-3xl font-black uppercase outline-none focus:border-pink-500" placeholder="0000 0000 0000 0000" />
            </div>
            <button className="w-full bg-black text-white py-10 text-4xl font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all italic">
              Initiate_Sync →
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

// ==========================================
// 03. CHECKOUT GLASS
// ==========================================
export const CheckoutGlass = () => (
  <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold">
    <div className="relative p-12 md:p-24 rounded-[4rem] overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-black border-[8px] border-white/10 shadow-2xl text-left">
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-pink-500/20 rounded-full blur-[120px] -ml-64 -mt-64 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-cyan-500/20 rounded-full blur-[120px] -mr-64 -mb-64"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row gap-20">
        <div className="flex-1">
          <h2 className="text-7xl font-black text-white uppercase mb-12 tracking-tighter italic drop-shadow-2xl">
            Vortex_ <br/> <span className="text-cyan-400">Checkout_</span>
          </h2>
          <div className="space-y-8">
            {cartItems.map(item => (
              <div key={item.id} className="bg-white/5 backdrop-blur-3xl border-2 border-white/10 p-8 rounded-[3rem] flex justify-between items-center group hover:bg-white/10 transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl overflow-hidden p-2 group-hover:scale-110 transition-transform">
                    <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-2xl text-white uppercase tracking-tight truncate flex-1 min-w-0">{item.name}</span>
                </div>
                <span className="text-3xl text-cyan-400 shrink-0">${item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-[450px] bg-white/10 backdrop-blur-3xl border-[4px] border-white/20 p-12 rounded-[4rem] shadow-2xl">
          <div className="space-y-10">
            <h3 className="text-4xl text-white uppercase tracking-tighter border-b-4 border-white/20 pb-4">Auth_Pulse</h3>
            <div className="space-y-6">
              <input type="text" placeholder="VAULT_SIGNAL" className="w-full bg-white/5 border-2 border-white/20 p-6 rounded-2xl text-white font-mono uppercase focus:border-cyan-400 outline-none transition-all" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="EXP" className="w-full bg-white/5 border-2 border-white/20 p-6 rounded-2xl text-white font-mono uppercase focus:border-cyan-400 outline-none transition-all" />
                <input type="text" placeholder="KEY" className="w-full bg-white/5 border-2 border-white/20 p-6 rounded-2xl text-white font-mono uppercase focus:border-cyan-400 outline-none transition-all" />
              </div>
            </div>
            <div className="flex justify-between items-end border-t-4 border-white/20 pt-8">
              <span className="text-white/60 uppercase text-xl">TOTAL_VAL</span>
              <span className="text-5xl text-white font-black italic tracking-tighter">$358</span>
            </div>
            <button className="w-full bg-cyan-400 text-black py-8 rounded-3xl text-3xl font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-[0_0_50px_rgba(34,211,238,0.3)] italic">
              SYNC_PAY
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ==========================================
// 04. CHECKOUT TIMELINE
// ==========================================
export const CheckoutTimeline = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold">
    <div className="bg-white border-[10px] border-black p-16 shadow-[32px_32px_0_0_#000] text-left text-black">
      <h2 className="text-7xl font-black uppercase mb-20 tracking-tighter italic border-b-[10px] border-black pb-8 text-center">Protocol_Flow</h2>
      
      <div className="relative border-l-[10px] border-black ml-6 md:ml-12 pl-12 space-y-24">
        <div className="relative">
          <div className="absolute -left-[76px] top-0 w-16 h-16 bg-yellow-400 border-[8px] border-black rounded-full flex items-center justify-center font-black text-2xl italic">01</div>
          <div className="space-y-8">
            <h3 className="text-4xl uppercase tracking-tighter">Signal_Identity</h3>
            <input type="email" placeholder="USER_NODE_01" className="w-full bg-transparent border-b-8 border-black p-4 text-3xl font-black outline-none focus:text-cyan-500" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-[76px] top-0 w-16 h-16 bg-black border-[8px] border-black rounded-full flex items-center justify-center font-black text-2xl italic text-white">02</div>
          <div className="space-y-8">
            <h3 className="text-4xl uppercase tracking-tighter">Vault_Handshake</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input type="text" placeholder="CARD_STRING" className="md:col-span-2 w-full bg-transparent border-b-8 border-black p-4 text-3xl font-black outline-none focus:text-pink-500" />
              <input type="text" placeholder="EXP_HASH" className="w-full bg-transparent border-b-8 border-black p-4 text-3xl font-black outline-none focus:text-cyan-500" />
              <input type="text" placeholder="KEY_CODE" className="w-full bg-transparent border-b-8 border-black p-4 text-3xl font-black outline-none focus:text-cyan-500" />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-[76px] top-0 w-16 h-16 bg-white border-[8px] border-black rounded-full flex items-center justify-center font-black text-2xl italic text-black">03</div>
          <div className="space-y-8">
            <h3 className="text-4xl uppercase tracking-tighter">Final_Pulse</h3>
            <div className="bg-black text-white p-10 border-4 border-black flex justify-between items-center shadow-[12px_12px_0_0_#facc15]">
              <span className="text-4xl uppercase">PAY_LOAD</span>
              <span className="text-6xl text-yellow-400">$358</span>
            </div>
            <button className="w-full bg-yellow-400 text-black py-10 text-4xl font-black uppercase tracking-widest border-8 border-black hover:bg-black hover:text-white transition-all italic">
              Execute_Protocol →
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ==========================================
// 05. CHECKOUT CARDS
// ==========================================
export const CheckoutCards = () => (
  <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 text-left">
      <div className="md:col-span-8 space-y-10">
        <div className="bg-black text-white p-16 border-[10px] border-black shadow-[20px_20px_0_0_#facc15]">
          <h2 className="text-7xl font-black uppercase tracking-tighter italic mb-10">Select_Logic.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-black">
            {['Vault_ID', 'Crypto_Mesh', 'Neural_Node', 'Signal_Pay'].map((method, i) => (
              <div key={i} className="bg-white border-4 border-black p-8 group cursor-pointer hover:bg-cyan-400 transition-all shadow-[8px_8px_0_0_#000]">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-black border-4 border-black group-hover:bg-white"></div>
                  <span className="text-4xl opacity-10 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                </div>
                <div className="text-2xl font-black text-black uppercase tracking-tight italic">{method}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border-[8px] border-black p-16 shadow-[20px_20px_0_0_#000] text-black">
          <h3 className="text-5xl font-black uppercase tracking-tighter mb-12 border-b-8 border-black pb-4 italic">Input_Sequence</h3>
          <form className="space-y-8">
            <input type="text" placeholder="USER_NODE_STRING" className="w-full bg-transparent border-4 border-black p-6 text-2xl uppercase focus:bg-yellow-400 outline-none" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="SIGNAL_EXP" className="w-full bg-transparent border-4 border-black p-6 text-2xl uppercase focus:bg-yellow-400 outline-none" />
              <input type="text" placeholder="KEY_CODE" className="w-full bg-transparent border-4 border-black p-6 text-2xl uppercase focus:bg-yellow-400 outline-none" />
            </div>
          </form>
        </div>
      </div>

      <div className="md:col-span-4 space-y-10">
        <div className="bg-yellow-400 border-[8px] border-black p-12 shadow-[12px_12px_0_0_#000] text-black">
          <h3 className="text-4xl font-black uppercase mb-8 border-b-4 border-black pb-2 italic">Total_Net</h3>
          <div className="space-y-6 mb-12">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between gap-4 font-black text-xl border-b-2 border-black pb-2 text-black italic">
                <span className="uppercase truncate flex-1 min-w-0">{item.name}</span>
                <span className="shrink-0">${item.price}</span>
              </div>
            ))}
          </div>
          <div className="text-6xl font-black uppercase tracking-tighter mb-12 text-black italic">$358</div>
          <button className="w-full bg-black text-white py-10 text-3xl font-black uppercase tracking-widest hover:bg-white hover:text-black border-4 border-transparent hover:border-black transition-all italic">
            Execute_Pay
          </button>
        </div>
      </div>
    </div>
  </div>
);

// ==========================================
// 06. CHECKOUT ACCORDION
// ==========================================
export const CheckoutAccordion = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold">
      <div className="bg-white border-[10px] border-black p-16 shadow-[24px_24px_0_0_#000] text-left text-black">
        <h2 className="text-8xl font-black uppercase mb-16 tracking-tighter italic text-center">PAY_PROTOCOL</h2>
        <div className="space-y-6">
          {[
            { t: "01. NODE_AUTH", c: <input type="email" placeholder="IDENTITY_SIGNAL" className="w-full bg-yellow-400 border-4 border-black p-8 text-3xl font-black placeholder-black/30 outline-none uppercase" /> },
            { t: "02. VAULT_KEY", c: <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-cyan-400 border-4 border-black p-8 text-3xl font-black placeholder-black/30 outline-none uppercase" /> },
            { t: "03. EXECUTE_PAY", c: (
              <div className="bg-black text-white p-12 border-4 border-black space-y-8 text-white">
                <div className="flex justify-between text-5xl font-black uppercase tracking-tighter italic">
                  <span>TOTAL_PULSE</span>
                  <span className="text-yellow-400">$358</span>
                </div>
                <button className="w-full bg-yellow-400 text-black py-10 text-4xl font-black uppercase tracking-widest hover:bg-white transition-all italic">
                  Sync_Matrix →
                </button>
              </div>
            )}
          ].map((item, i) => (
            <div key={i} className="border-[6px] border-black overflow-hidden transition-all text-left">
              <button 
                onClick={() => setActive(i)}
                className={`w-full flex justify-between items-center p-10 text-left transition-all ${active === i ? 'bg-black text-white' : 'bg-white text-black hover:bg-yellow-400'}`}
              >
                <span className="text-4xl font-black uppercase tracking-tighter italic">{item.t}</span>
                <span className={`text-5xl transition-transform duration-500 ${active === i ? 'rotate-180' : ''}`}>▼</span>
              </button>
              <div className={`transition-all duration-700 ease-in-out px-10 overflow-hidden ${active === i ? 'max-h-[600px] py-10 opacity-100' : 'max-h-0 opacity-0'}`}>
                {item.c}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 07. CHECKOUT MINIMAL
// ==========================================
export const CheckoutMinimal = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold">
    <div className="bg-white p-20 border-[10px] border-black shadow-[16px_16px_0_0_#000] text-left relative overflow-hidden text-black">
      <div className="absolute top-0 right-0 p-8 text-[200px] font-black text-slate-50 leading-none -mr-20 -mt-20 z-0 italic">PAY</div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-end border-b-[10px] border-black pb-12 mb-20">
          <h1 className="text-9xl font-black uppercase tracking-tighter leading-none italic">CHECK. <br/> <span className="text-gray-300">OUT.</span></h1>
          <div className="text-right font-mono text-xl uppercase tracking-widest">
            STK_V2.9 <br/> $358_USD
          </div>
        </div>

        <div className="space-y-24">
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <span className="text-8xl font-black text-gray-100 uppercase italic">01</span>
              <h3 className="text-5xl uppercase tracking-tighter italic">Node_Identity</h3>
            </div>
            <input type="text" className="w-full bg-transparent border-b-8 border-black p-4 text-4xl font-black uppercase outline-none focus:text-cyan-500" placeholder="PROTO_USER_9" />
          </section>

          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <span className="text-8xl font-black text-gray-100 uppercase italic">02</span>
              <h3 className="text-5xl uppercase tracking-tighter italic">Vault_Signal</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <input type="text" className="md:col-span-2 w-full bg-transparent border-b-8 border-black p-4 text-4xl font-black uppercase outline-none focus:text-pink-500" placeholder="VAULT_XXXX_XXXX" />
              <input type="text" className="w-full bg-transparent border-b-8 border-black p-4 text-4xl font-black uppercase outline-none focus:text-cyan-500" placeholder="MM/YY" />
              <input type="text" className="w-full bg-transparent border-b-8 border-black p-4 text-4xl font-black uppercase outline-none focus:text-cyan-500" placeholder="KEY" />
            </div>
          </section>

          <button className="w-full bg-black text-white py-12 text-5xl font-black uppercase tracking-tighter italic hover:bg-yellow-400 hover:text-black transition-all shadow-[12px_12px_0_0_#000]">
            Pay_Manifest_$358 →
          </button>
        </div>
      </div>
    </div>
  </div>
);

// ==========================================
// 08. CHECKOUT CYBER
// ==========================================
export const CheckoutCyber = () => (
  <div className="w-full max-w-5xl mx-auto px-4 font-mono italic font-bold">
    <div className="bg-black border-4 border-cyan-500/30 p-16 rounded-3xl relative overflow-hidden text-left text-white">
      <div className="absolute top-0 right-0 p-4 text-cyan-500/10 text-[100px] font-black leading-none animate-pulse italic">TX_ID_99</div>
      
      <div className="relative z-10">
        <h2 className="text-6xl font-black text-cyan-400 mb-16 tracking-tighter uppercase italic" style={{textShadow: "6px 6px 0px #06b6d433"}}>TERMINAL_PAY_LOAD</h2>
        
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-12">
            <div className="border-2 border-cyan-500/20 p-10 bg-cyan-500/5 group hover:border-cyan-400 transition-all">
              <div className="text-cyan-500/50 uppercase tracking-[0.4em] text-xs mb-8 italic">INITIATE_AUTH_STREAM</div>
              <form className="space-y-8">
                <input type="text" className="w-full bg-black/50 border-b-2 border-cyan-500/30 p-4 text-2xl text-cyan-100 outline-none focus:border-cyan-400 placeholder-cyan-900 uppercase" placeholder="SIGNAL_ID" />
                <input type="text" className="w-full bg-black/50 border-b-2 border-cyan-500/30 p-4 text-2xl text-cyan-100 outline-none focus:border-cyan-400 placeholder-cyan-900 uppercase" placeholder="VAULT_HANDSHAKE" />
                <div className="grid grid-cols-2 gap-8">
                  <input type="text" className="w-full bg-black/50 border-b-2 border-cyan-500/30 p-4 text-2xl text-cyan-100 outline-none focus:border-cyan-400 placeholder-cyan-900 uppercase" placeholder="EXP_DATA" />
                  <input type="text" className="w-full bg-black/50 border-b-2 border-cyan-500/30 p-4 text-2xl text-cyan-100 outline-none focus:border-cyan-400 placeholder-cyan-900 uppercase" placeholder="CRC_KEY" />
                </div>
              </form>
            </div>
            <button className="w-full bg-cyan-500 text-black py-10 text-4xl font-black uppercase tracking-widest hover:bg-white hover:shadow-[0_0_60px_rgba(34,211,238,0.5)] transition-all italic">
              UPLOAD_PULSE_>>
            </button>
          </div>

          <div className="lg:col-span-5">
            <div className="border-2 border-pink-500/30 p-10 bg-pink-500/5">
              <h3 className="text-3xl text-pink-400 uppercase mb-10 italic">Package_Net</h3>
              <div className="space-y-6 mb-12">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between gap-4 border-b border-pink-500/20 pb-4">
                    <span className="text-pink-100 uppercase truncate flex-1 min-w-0">{item.name}</span>
                    <span className="text-pink-400 shrink-0">ETH_{(item.price / 3000).toFixed(4)}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-end border-t-2 border-pink-500/30 pt-8">
                <span className="text-pink-400/50 uppercase text-xs italic">Total_Gas</span>
                <span className="text-5xl text-pink-500 font-black italic tracking-tighter">$358</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ==========================================
// 09. CHECKOUT NEO
// ==========================================
export const CheckoutNeo = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold">
    <div className="bg-[#e0e5ec] p-16 rounded-[4rem] shadow-[24px_24px_64px_#bebebe,-24px_-24px_64px_#ffffff] text-center border border-white/20">
      <div className="w-32 h-32 mx-auto bg-[#e0e5ec] rounded-full shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] mb-12 flex items-center justify-center text-6xl text-slate-400">
        💳
      </div>
      <h2 className="text-7xl font-black text-slate-800 mb-16 tracking-tighter uppercase italic leading-none">Soft_Pay</h2>
      
      <div className="grid lg:grid-cols-1 gap-16 text-left">
        <div className="space-y-10">
          <div className="bg-[#e0e5ec] p-10 rounded-[40px] shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] space-y-8">
            <h3 className="text-3xl uppercase tracking-tighter text-slate-700 italic border-b-2 border-slate-300 pb-4">Logic_Vault</h3>
            <div className="space-y-6">
              <input type="text" placeholder="IDENTITY_PULSE" className="w-full bg-[#e0e5ec] p-6 rounded-2xl shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] border-none outline-none text-slate-600 font-black uppercase text-xl placeholder-slate-400" />
              <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-[#e0e5ec] p-6 rounded-2xl shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] border-none outline-none text-slate-600 font-black uppercase text-xl placeholder-slate-400" />
              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="EXP" className="w-full bg-[#e0e5ec] p-6 rounded-2xl shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] border-none outline-none text-slate-600 font-black uppercase text-xl placeholder-slate-400" />
                <input type="text" placeholder="KEY" className="w-full bg-[#e0e5ec] p-6 rounded-2xl shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] border-none outline-none text-slate-600 font-black uppercase text-xl placeholder-slate-400" />
              </div>
            </div>
          </div>

          <div className="bg-[#e0e5ec] p-12 rounded-[40px] shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] flex justify-between items-center text-slate-800">
            <span className="text-3xl uppercase tracking-tighter italic">Manifest_Net</span>
            <span className="text-6xl font-black italic tracking-tighter">$358</span>
          </div>

          <button className="w-full bg-[#e0e5ec] text-cyan-600 py-12 rounded-[40px] text-4xl font-black uppercase tracking-widest shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] hover:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] active:scale-95 transition-all italic">
            Sync_Final →
          </button>
        </div>
      </div>
    </div>
  </div>
);

// ==========================================
// 10. CHECKOUT NEOBRUTAL
// ==========================================
export const CheckoutNeoBrutal = () => (
  <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold">
    <div className="grid md:grid-cols-12 gap-0 border-[10px] border-black bg-black shadow-[40px_40px_0_0_#facc15] text-left">
      <div className="md:col-span-7 bg-pink-500 p-16 border-r-[10px] border-black space-y-16 text-black">
        <h2 className="text-8xl font-black uppercase text-black leading-none tracking-tighter -rotate-2 bg-white px-4 inline-block shadow-[8px_8px_0_0_#000] italic">EXECUTE_</h2>
        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className="text-4xl uppercase tracking-tighter">Signal_Auth</h3>
            <input type="text" className="w-full bg-white border-4 border-black p-8 text-4xl font-black uppercase shadow-[8px_8px_0_0_#000] focus:translate-x-1 focus:translate-y-1 focus:shadow-none transition-all outline-none" placeholder="USER_NODE" />
          </div>
          <div className="space-y-6">
            <h3 className="text-4xl uppercase tracking-tighter">Vault_Sync</h3>
            <input type="text" className="w-full bg-white border-4 border-black p-8 text-4xl font-black uppercase shadow-[8px_8px_0_0_#000] focus:translate-x-1 focus:translate-y-1 focus:shadow-none transition-all outline-none" placeholder="XXXX XXXX XXXX XXXX" />
            <div className="grid grid-cols-2 gap-8">
              <input type="text" className="w-full bg-white border-4 border-black p-8 text-4xl font-black uppercase shadow-[8px_8px_0_0_#000] focus:translate-x-1 focus:translate-y-1 focus:shadow-none transition-all outline-none" placeholder="MM/YY" />
              <input type="text" className="w-full bg-white border-4 border-black p-8 text-4xl font-black uppercase shadow-[8px_8px_0_0_#000] focus:translate-x-1 focus:translate-y-1 focus:shadow-none transition-all outline-none" placeholder="KEY" />
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-5 bg-cyan-400 p-10 lg:p-12 flex flex-col justify-between text-black relative overflow-hidden">
        <div className="w-full">
          <h2 className="text-6xl font-black uppercase border-b-[8px] border-black pb-4 mb-12 italic">PAYLOAD.</h2>
          <div className="space-y-8 mb-20">
            {cartItems.map(item => (
              <div key={item.id} className="bg-white border-4 border-black p-6 rotate-1 hover:rotate-0 transition-transform shadow-[6px_6px_0_0_#000]">
                <div className="flex flex-wrap justify-between items-center gap-4 text-lg font-black uppercase italic">
                  <span className="flex-1 min-w-0 truncate">{item.name}</span>
                  <span className="bg-black text-white px-2 whitespace-nowrap shrink-0">${item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full space-y-8">
          <div className="bg-black text-white p-8 border-4 border-white shadow-[12px_12px_0_0_#ff00ff]">
            <div className="flex justify-between items-center text-4xl font-black uppercase tracking-tighter italic text-white">
              <span>TOTAL</span>
              <span className="text-pink-500 text-5xl">$358</span>
            </div>
          </div>
          <button className="w-full bg-white text-black py-8 text-4xl font-black uppercase tracking-widest border-8 border-black hover:bg-black hover:text-white transition-all shadow-[12px_12px_0_0_#000] italic">
            CONFIRM_PAY
          </button>
        </div>
      </div>
    </div>
  </div>
);

// ==========================================
// MASTER GALLERY WRAPPER
// ==========================================
const CheckoutGallery = () => {
  return (
    <div className="container overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-64">
      
      {/* --- HEADER --- */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-7xl font-black text-slate-950 mb-6 tracking-tighter uppercase italic leading-none">Checkout_Matrix_Suite</h1>
        <p className="text-slate-500 font-bold text-xl italic lowercase">High-fidelity conversion protocols for the next generation of digital commerce.</p>
      </div>

      <div className="space-y-32 max-w-7xl mx-auto">
        
        {/* 01. BRUTALIST MASTER */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/chec border border-slate-200">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/chec:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`import React from 'react';

export const CheckoutBrutalist = () => {
  const cartItems = [
    { id: 1, name: "Neural_Link_V1", price: 299 },
    { id: 2, name: "Matrix_Protocol_License", price: 59 }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold">
      <div className="bg-yellow-400 border-[8px] border-black p-12 shadow-[24px_24px_0_0_#000] relative overflow-hidden text-left text-black">
        <h1 className="text-7xl md:text-9xl font-black uppercase mb-16 tracking-tighter leading-none">
          Pay_ <br/> <span className="bg-black text-white px-4 italic">Now.</span>
        </h1>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 space-y-12">
            <section>
              <h3 className="text-4xl font-black uppercase mb-8 border-b-8 border-black pb-2 italic">01. Signal_ID</h3>
              <input type="email" placeholder="USER@NETWORK.NODE" className="w-full bg-white border-4 border-black p-6 text-2xl font-black uppercase focus:bg-cyan-300 outline-none placeholder-black/30" />
            </section>
            <section>
              <h3 className="text-4xl font-black uppercase mb-8 border-b-8 border-black pb-2 italic">02. Vault_Key</h3>
              <div className="space-y-6">
                <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-white border-4 border-black p-6 text-2xl font-black uppercase focus:bg-pink-300 outline-none placeholder-black/30" />
                <div className="grid grid-cols-2 gap-6">
                  <input type="text" placeholder="MM/YY" className="w-full bg-white border-4 border-black p-6 text-xl font-black uppercase focus:bg-pink-300 outline-none placeholder-black/30" />
                  <input type="text" placeholder="CVC" className="w-full bg-white border-4 border-black p-6 text-xl font-black uppercase focus:bg-pink-300 outline-none placeholder-black/30" />
                </div>
              </div>
            </section>
          </div>
          <div className="lg:w-96 space-y-8">
            <div className="bg-black text-white p-10 border-4 border-black shadow-[12px_12px_0_0_#fff]">
              <h3 className="text-3xl font-black uppercase mb-8 italic border-b-2 border-white pb-4">Pulse_Summary</h3>
              <div className="space-y-6 mb-10">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center gap-4 border-b border-white/20 pb-4">
                    <span className="uppercase text-lg leading-none truncate flex-1 min-w-0">{item.name}</span>
                    <span className="font-black text-yellow-400 shrink-0">\${item.price}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-4xl font-black uppercase tracking-tighter italic">
                <span>TOTAL</span>
                <span className="text-yellow-400">\$358</span>
              </div>
            </div>
            <button className="w-full bg-black text-white py-10 text-4xl font-black uppercase tracking-widest hover:bg-white hover:text-black border-8 border-black transition-all shadow-[12px_12px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none italic">
              Execute_Pay →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};`}
              htmlCode={`<!-- Brutalist Checkout Protocol -->
<div class="brutalist-root">
  <div class="brutalist-container">
    <h1 class="brutalist-title">Pay_<br><span>Now.</span></h1>
    <div class="brutalist-flex">
      <div class="brutalist-form">
        <section>
          <h3 class="brutalist-section-title">01. Signal_ID</h3>
          <input type="text" placeholder="USER@NETWORK.NODE" class="brutalist-input">
        </section>
        <section>
          <h3 class="brutalist-section-title">02. Vault_Key</h3>
          <div class="brutalist-grid-2">
             <input type="text" placeholder="XXXX XXXX XXXX XXXX" class="brutalist-input input-pink full-span">
             <input type="text" placeholder="MM/YY" class="brutalist-input input-pink">
             <input type="text" placeholder="CVC" class="brutalist-input input-pink">
          </div>
        </section>
      </div>
      <div class="brutalist-summary-col">
        <div class="brutalist-summary-card">
          <h3 class="summary-title">Pulse_Summary</h3>
          <div class="summary-items">
            <div class="summary-item"><span>NEURAL_LINK_V1</span><span class="price">$299</span></div>
            <div class="summary-item"><span>MATRIX_PROTOCOL_LICENSE</span><span class="price">$59</span></div>
          </div>
          <div class="summary-total"><span>TOTAL</span><span class="price">$358</span></div>
        </div>
        <button class="brutalist-execute">Execute_Pay →</button>
      </div>
    </div>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.brutalist-root { width: 100%; max-width: 1152px; margin: 0 auto; padding: 0 16px; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; text-align: left; }
.brutalist-container { background: #facc15; border: 8px solid black; padding: 48px; box-shadow: 24px 24px 0 0 #000; position: relative; overflow: hidden; }
.brutalist-title { font-size: 80px; text-transform: uppercase; margin-bottom: 64px; letter-spacing: -0.05em; line-height: 0.9; color: black; }
.brutalist-title span { background: black; color: white; padding: 0 16px; }
.brutalist-flex { display: flex; flex-direction: column; gap: 64px; }
@media (min-width: 1024px) { .brutalist-flex { flex-direction: row; } }
.brutalist-form { flex: 1; }
.brutalist-section-title { font-size: 36px; text-transform: uppercase; margin-bottom: 32px; border-bottom: 8px solid black; padding-bottom: 8px; color: black; }
.brutalist-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.full-span { grid-column: span 2; }
.brutalist-input { width: 100%; background: white; border: 4px solid black; padding: 24px; font-size: 24px; font-weight: 900; text-transform: uppercase; margin-bottom: 16px; outline: none; }
.brutalist-input:focus { background: #22d3ee; }
.input-pink:focus { background: #f472b6; }
.brutalist-summary-card { background: black; color: white; padding: 40px; border: 4px solid black; box-shadow: 12px 12px 0 0 #fff; margin-bottom: 32px; }
.summary-title { font-size: 24px; text-transform: uppercase; margin-bottom: 32px; border-bottom: 2px solid white; padding-bottom: 16px; }
.summary-items { margin-bottom: 40px; }
.summary-item { display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 16px; margin-bottom: 16px; font-size: 18px; }
.price { color: #facc15; }
.summary-total { display: flex; justify-content: space-between; font-size: 36px; letter-spacing: -0.05em; }
.brutalist-execute { width: 100%; background: black; color: white; padding: 40px; font-size: 36px; font-weight: 900; text-transform: uppercase; border: 8px solid black; box-shadow: 12px 12px 0 0 #000; cursor: pointer; transition: all 0.2s ease; }
.brutalist-execute:hover { background: white; color: black; transform: translate(4px, 4px); box-shadow: 8px 8px 0 0 #000; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">01. Brutalist Master Protocol</span>
          <CheckoutBrutalist />
        </section>

        {/* 02. SPLIT MATRIX */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/chec border border-slate-200">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/chec:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`import React from 'react';

export const CheckoutSplit = () => {
  const cartItems = [
    { id: 1, name: "Neural_Link_V1", price: 299, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
    { id: 2, name: "Matrix_Protocol_License", price: 59, img: "https://images.unsplash.com/photo-1511556820780-d912e42b4980" }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold">
      <div className="flex flex-col md:flex-row h-auto md:h-[800px] border-[10px] border-black bg-white shadow-[32px_32px_0_0_#000] overflow-hidden text-left text-black">
        <div className="w-full md:w-5/12 bg-black text-white p-16 flex flex-col justify-between border-r-[10px] border-black">
          <div>
            <h2 className="text-7xl font-black uppercase mb-12 tracking-tighter leading-none italic">Order_ <br/> Manifest.</h2>
            <div className="space-y-12">
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-8 items-center group">
                  <div className="w-24 h-24 bg-white border-4 border-yellow-400 p-2 rotate-3 group-hover:rotate-0 transition-transform">
                    <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-2xl font-black uppercase tracking-tight mb-1 truncate">{item.name}</div>
                    <div className="text-yellow-400 text-xl font-mono uppercase">QUANTITY: 1</div>
                  </div>
                  <div className="text-2xl font-black text-white shrink-0">\${item.price}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t-4 border-white pt-8">
            <div className="flex justify-between text-5xl font-black uppercase italic tracking-tighter text-white">
              <span>TOTAL_</span>
              <span className="text-yellow-400">\$358</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-7/12 p-16 overflow-y-auto bg-yellow-50 custom-scrollbar text-black">
          <div className="max-w-md mx-auto space-y-16">
            <h3 className="text-5xl font-black uppercase tracking-tighter italic border-b-8 border-black pb-4">Secure_Node_Auth</h3>
            <form className="space-y-10">
              <input type="text" className="w-full bg-transparent border-b-8 border-black p-4 text-3xl font-black uppercase outline-none focus:border-cyan-500" placeholder="PROTO_001" />
              <input type="text" className="w-full bg-transparent border-b-8 border-black p-4 text-3xl font-black uppercase outline-none focus:border-pink-500" placeholder="0000 0000 0000 0000" />
              <button className="w-full bg-black text-white py-10 text-4xl font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all italic">Initiate_Sync →</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};`}
              htmlCode={`<!-- Split Matrix Checkout -->
<div class="split-root">
  <div class="split-sidebar">
    <h2 class="sidebar-title">Order_<br>Manifest.</h2>
    <div class="cart-items">
      <div class="cart-item">
        <div class="item-img-box"><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Item"></div>
        <div class="item-info"><div class="item-name">NEURAL_LINK_V1</div><div class="item-qty">QUANTITY: 1</div></div>
        <div class="item-price">$299</div>
      </div>
      <div class="cart-item">
        <div class="item-img-box"><img src="https://images.unsplash.com/photo-1511556820780-d912e42b4980" alt="Item"></div>
        <div class="item-info"><div class="item-name">MATRIX_PROTOCOL_LICENSE</div><div class="item-qty">QUANTITY: 1</div></div>
        <div class="item-price">$59</div>
      </div>
    </div>
    <div class="sidebar-footer">
      <div class="footer-total"><span>TOTAL_</span><span class="yellow-text">$358</span></div>
    </div>
  </div>
  <div class="split-content">
    <h3 class="content-title">Secure_Node_Auth</h3>
    <form class="content-form">
      <input type="text" placeholder="PROTO_001" class="split-input">
      <input type="text" placeholder="0000 0000 0000 0000" class="split-input input-pink">
      <button class="split-submit">Initiate_Sync →</button>
    </form>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.split-root { display: flex; flex-direction: column; border: 10px solid black; background: white; box-shadow: 32px 32px 0 0 #000; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; overflow: hidden; text-align: left; }
@media (min-width: 768px) { .split-root { flex-direction: row; height: 800px; } }
.split-sidebar { width: 100%; background: black; color: white; padding: 64px; display: flex; flex-direction: column; justify-content: space-between; border-bottom: 10px solid black; }
@media (min-width: 768px) { .split-sidebar { width: 41.6%; border-bottom: none; border-right: 10px solid black; } }
.sidebar-title { font-size: 64px; text-transform: uppercase; margin-bottom: 48px; line-height: 0.9; letter-spacing: -0.05em; }
.cart-items { display: grid; gap: 48px; }
.cart-item { display: flex; align-items: center; gap: 32px; }
.item-img-box { width: 96px; height: 96px; background: white; border: 4px solid #facc15; padding: 8px; transform: rotate(3deg); }
.item-img-box img { width: 100%; height: 100%; object-fit: contain; }
.item-info { flex: 1; }
.item-name { font-size: 20px; text-transform: uppercase; margin-bottom: 4px; }
.item-qty { color: #facc15; font-family: monospace; font-size: 16px; }
.item-price { font-size: 24px; }
.sidebar-footer { border-top: 4px solid white; padding-top: 32px; }
.footer-total { display: flex; justify-content: space-between; font-size: 48px; text-transform: uppercase; letter-spacing: -0.05em; }
.yellow-text { color: #facc15; }
.split-content { width: 100%; padding: 64px; background: #fefce8; color: black; }
@media (min-width: 768px) { .split-content { width: 58.4%; overflow-y: auto; } }
.content-title { font-size: 48px; text-transform: uppercase; border-bottom: 8px solid black; padding-bottom: 16px; margin-bottom: 64px; letter-spacing: -0.05em; }
.split-input { width: 100%; background: transparent; border: none; border-bottom: 8px solid black; padding: 16px; font-size: 30px; font-weight: 900; text-transform: uppercase; margin-bottom: 64px; outline: none; }
.split-input:focus { border-color: #06b6d4; }
.input-pink:focus { border-color: #ec4899; }
.split-submit { width: 100%; background: black; color: white; padding: 40px; font-size: 36px; font-weight: 900; text-transform: uppercase; cursor: pointer; border: none; transition: all 0.2s ease; }
.split-submit:hover { background: #06b6d4; color: black; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">02. Split Matrix Manifest</span>
          <CheckoutSplit />
        </section>

        {/* 03. FLOATING GLASS */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/chec border border-slate-200">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/chec:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`import React from 'react';

export const CheckoutGlass = () => {
  const cartItems = [
    { id: 1, name: "Neural_Link_V1", price: 299 },
    { id: 2, name: "Matrix_Protocol_License", price: 59 }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold">
      <div className="relative p-24 rounded-[4rem] overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-black border-[8px] border-white/10 shadow-2xl text-left text-white">
        <div className="relative z-10 flex flex-col lg:flex-row gap-20">
          <div className="flex-1">
            <h2 className="text-7xl font-black uppercase mb-12 tracking-tighter italic drop-shadow-2xl text-white">
              Vortex_ <br/> <span className="text-cyan-400">Checkout_</span>
            </h2>
            <div className="space-y-8">
              {cartItems.map(item => (
                <div key={item.id} className="bg-white/5 backdrop-blur-3xl border-2 border-white/10 p-8 rounded-[3rem] flex justify-between items-center group hover:bg-white/10 transition-all">
                  <span className="text-2xl text-white uppercase tracking-tight truncate flex-1 min-w-0">{item.name}</span>
                  <span className="text-3xl text-cyan-400 shrink-0">\${item.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-[450px] bg-white/10 backdrop-blur-3xl border-[4px] border-white/20 p-12 rounded-[4rem] shadow-2xl">
            <h3 className="text-4xl text-white uppercase tracking-tighter border-b-4 border-white/20 pb-4 mb-10">Auth_Pulse</h3>
            <div className="space-y-6 mb-10">
              <input type="text" placeholder="VAULT_SIGNAL" className="w-full bg-white/5 border-2 border-white/20 p-6 rounded-2xl text-white font-mono uppercase outline-none focus:border-cyan-400 transition-all" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="EXP" className="w-full bg-white/5 border-2 border-white/20 p-6 rounded-2xl text-white font-mono uppercase focus:border-cyan-400 outline-none transition-all" />
                <input type="text" placeholder="KEY" className="w-full bg-white/5 border-2 border-white/20 p-6 rounded-2xl text-white font-mono uppercase focus:border-cyan-400 outline-none transition-all" />
              </div>
            </div>
            <div className="flex justify-between items-end border-t-4 border-white/20 pt-8 mb-10">
              <span className="text-white/60 uppercase text-xl italic">TOTAL_VAL</span>
              <span className="text-5xl text-white font-black italic tracking-tighter">\$358</span>
            </div>
            <button className="w-full bg-cyan-400 text-black py-8 rounded-3xl text-3xl font-black uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_50px_rgba(34,211,238,0.3)] italic">SYNC_PAY</button>
          </div>
        </div>
      </div>
    </div>
  );
};`}
              htmlCode={`<!-- Glassmorphic Checkout Protocol -->
<div class="glass-root">
  <div class="glass-container">
    <div class="glass-content">
      <div class="glass-header">
        <h2 class="glass-title">Vortex_<br><span>Checkout_</span></h2>
        <div class="glass-items">
          <div class="glass-item"><span>NEURAL_LINK_V1</span><span class="glass-price">$299</span></div>
          <div class="glass-item"><span>MATRIX_PROTOCOL_LICENSE</span><span class="glass-price">$59</span></div>
        </div>
      </div>
      <div class="glass-card">
        <h3 class="card-title">Auth_Pulse</h3>
        <div class="card-inputs">
           <input type="text" placeholder="VAULT_SIGNAL" class="glass-input">
           <div class="input-row">
              <input type="text" placeholder="EXP" class="glass-input">
              <input type="text" placeholder="KEY" class="glass-input">
           </div>
        </div>
        <div class="card-footer">
          <span class="footer-label">TOTAL_VAL</span>
          <span class="footer-total">$358</span>
        </div>
        <button class="glass-btn">SYNC_PAY</button>
      </div>
    </div>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.glass-root { background: linear-gradient(to bottom right, #581c87, #312e81, #000); padding: 80px; border-radius: 64px; border: 8px solid rgba(255,255,255,0.1); font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; text-align: left; position: relative; overflow: hidden; }
.glass-content { display: flex; flex-direction: column; gap: 80px; position: relative; z-index: 10; }
@media (min-width: 1024px) { .glass-content { flex-direction: row; } }
.glass-header { flex: 1; }
.glass-title { font-size: 70px; color: white; text-transform: uppercase; margin-bottom: 48px; line-height: 1; letter-spacing: -0.05em; }
.glass-title span { color: #22d3ee; }
.glass-items { display: grid; gap: 32px; }
.glass-item { background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); border: 2px solid rgba(255,255,255,0.1); padding: 32px; border-radius: 48px; display: flex; justify-content: space-between; align-items: center; }
.glass-price { color: #22d3ee; font-size: 30px; }
.glass-card { width: 100%; background: rgba(255,255,255,0.1); backdrop-filter: blur(40px); border: 4px solid rgba(255,255,255,0.2); padding: 48px; border-radius: 64px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); }
@media (min-width: 1024px) { .glass-card { width: 450px; } }
.card-title { font-size: 36px; color: white; text-transform: uppercase; border-bottom: 4px solid rgba(255,255,255,0.2); padding-bottom: 16px; margin-bottom: 40px; }
.card-inputs { display: grid; gap: 24px; margin-bottom: 40px; }
.input-row { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.glass-input { width: 100%; background: rgba(255,255,255,0.05); border: 2px solid rgba(255,255,255,0.2); padding: 24px; border-radius: 20px; color: white; font-family: monospace; font-size: 18px; outline: none; transition: border-color 0.3s; }
.glass-input:focus { border-color: #22d3ee; }
.card-footer { display: flex; justify-content: space-between; align-items: flex-end; border-top: 4px solid rgba(255,255,255,0.2); padding-top: 32px; margin-bottom: 40px; }
.footer-label { color: rgba(255,255,255,0.6); font-size: 20px; text-transform: uppercase; }
.footer-total { color: white; font-size: 48px; font-weight: 900; }
.glass-btn { width: 100%; background: #22d3ee; color: black; padding: 32px; border-radius: 24px; font-size: 30px; font-weight: 900; text-transform: uppercase; cursor: pointer; border: none; transition: all 0.3s ease; box-shadow: 0 0 30px rgba(34,211,238,0.2); }
.glass-btn:hover { background: white; transform: scale(1.02); }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">03. Floating Vortex Glass</span>
          <CheckoutGlass />
        </section>

        {/* 04. DATA FLOW TIMELINE */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/chec border border-slate-200">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/chec:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`import React from 'react';

export const CheckoutTimeline = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold">
      <div className="bg-white border-[10px] border-black p-16 shadow-[32px_32px_0_0_#000] text-left text-black">
        <h2 className="text-7xl font-black uppercase mb-20 tracking-tighter italic border-b-[10px] border-black pb-8 text-center">Protocol_Flow</h2>
        <div className="relative border-l-[10px] border-black ml-12 pl-12 space-y-24">
          <div className="relative">
            <div className="absolute -left-[76px] top-0 w-16 h-16 bg-yellow-400 border-[8px] border-black rounded-full flex items-center justify-center font-black text-2xl italic">01</div>
            <h3 className="text-4xl uppercase tracking-tighter mb-8">Signal_Identity</h3>
            <input type="text" placeholder="USER_NODE_01" className="w-full bg-transparent border-b-8 border-black p-4 text-3xl font-black uppercase outline-none focus:text-cyan-500 transition-all" />
          </div>
          <div className="relative">
            <div className="absolute -left-[76px] top-0 w-16 h-16 bg-black border-[8px] border-black rounded-full flex items-center justify-center font-black text-2xl text-white italic">02</div>
            <h3 className="text-4xl uppercase tracking-tighter mb-8 text-black">Vault_Handshake</h3>
            <input type="text" placeholder="VAULT_XXXX" className="w-full bg-transparent border-b-8 border-black p-4 text-3xl font-black uppercase outline-none focus:text-pink-500 transition-all" />
          </div>
          <div className="relative">
            <div className="absolute -left-[76px] top-0 w-16 h-16 bg-white border-[8px] border-black rounded-full flex items-center justify-center font-black text-2xl italic">03</div>
            <div className="bg-black text-white p-10 border-4 border-black flex justify-between items-center shadow-[12px_12px_0_0_#facc15] mb-10">
              <span className="text-4xl uppercase">PAY_LOAD</span>
              <span className="text-6xl text-yellow-400">\$358</span>
            </div>
            <button className="w-full bg-yellow-400 text-black py-10 text-4xl font-black uppercase tracking-widest border-8 border-black hover:bg-black hover:text-white transition-all italic">Execute_Protocol →</button>
          </div>
        </div>
      </div>
    </div>
  );
};`}
              htmlCode={`<!-- Protocol Flow Checkout Protocol -->
<div class="timeline-root">
  <h2 class="timeline-title">Protocol_Flow</h2>
  <div class="timeline-body">
    <div class="step">
      <div class="dot yellow">01</div>
      <h3 class="step-title">Signal_Identity</h3>
      <input type="text" placeholder="USER_NODE_01" class="step-input">
    </div>
    <div class="step">
      <div class="dot black">02</div>
      <h3 class="step-title">Vault_Handshake</h3>
      <input type="text" placeholder="VAULT_XXXX" class="step-input input-pink">
    </div>
    <div class="step">
      <div class="dot white">03</div>
      <div class="summary-box">
        <span class="label">PAY_LOAD</span>
        <span class="total">$358</span>
      </div>
      <button class="step-btn">Execute_Protocol →</button>
    </div>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.timeline-root { background: white; border: 10px solid black; padding: 64px; box-shadow: 32px 32px 0 0 #000; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; text-align: left; max-width: 896px; margin: 0 auto; }
.timeline-title { font-size: 70px; font-weight: 900; text-transform: uppercase; margin-bottom: 80px; border-bottom: 10px solid black; padding-bottom: 32px; text-align: center; color: black; }
.timeline-body { position: relative; border-left: 10px solid black; margin-left: 48px; padding-left: 48px; }
.step { position: relative; margin-bottom: 96px; }
.dot { position: absolute; left: -76px; top: 0; width: 64px; height: 64px; border: 8px solid black; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 900; }
.yellow { background: #facc15; } .black { background: black; color: white; } .white { background: white; }
.step-title { font-size: 36px; text-transform: uppercase; margin-bottom: 32px; color: black; }
.step-input { width: 100%; background: transparent; border: none; border-bottom: 8px solid black; padding: 16px; font-size: 30px; font-weight: 900; outline: none; text-transform: uppercase; transition: color 0.3s; }
.step-input:focus { color: #06b6d4; } .input-pink:focus { color: #ec4899; }
.summary-box { background: black; color: white; padding: 40px; border: 4px solid black; display: flex; justify-content: space-between; align-items: center; box-shadow: 12px 12px 0 0 #facc15; margin-bottom: 40px; }
.summary-box .label { font-size: 36px; text-transform: uppercase; } .summary-box .total { font-size: 60px; color: #facc15; }
.step-btn { width: 100%; background: #facc15; color: black; padding: 40px; font-size: 36px; font-weight: 900; text-transform: uppercase; border: 8px solid black; cursor: pointer; transition: all 0.2s ease; }
.step-btn:hover { background: black; color: white; transform: translate(4px, 4px); }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">04. Sequential Protocol Journey</span>
          <CheckoutTimeline />
        </section>

        {/* 05. MATRIX GRID */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/chec border border-slate-200">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/chec:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`import React from 'react';

export const CheckoutCards = () => {
  const cartItems = [{ name: "Neural_Link_V1", price: 299 }, { name: "Matrix_Protocol_License", price: 59 }];
  return (
    <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 text-left text-black">
        <div className="md:col-span-8 space-y-10">
          <div className="bg-black text-white p-16 border-[10px] border-black shadow-[20px_20px_0_0_#facc15]">
            <h2 className="text-7xl font-black uppercase tracking-tighter mb-10 italic">Select_Logic.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {['Vault_ID', 'Crypto_Mesh', 'Neural_Node', 'Signal_Pay'].map((method, i) => (
                <div key={i} className="bg-white border-4 border-black p-8 group cursor-pointer hover:bg-cyan-400 transition-all shadow-[8px_8px_0_0_#000] text-black">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-black border-4 border-black group-hover:bg-white transition-colors"></div>
                    <span className="text-4xl opacity-10 italic">0{i+1}</span>
                  </div>
                  <div className="text-2xl font-black uppercase italic tracking-tight">{method}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white border-[8px] border-black p-16 shadow-[20px_20px_0_0_#000] text-black">
            <h3 className="text-5xl font-black uppercase tracking-tighter mb-12 border-b-8 border-black pb-4 italic">Input_Sequence</h3>
            <form className="space-y-8">
              <input type="text" placeholder="USER_NODE_STRING" className="w-full bg-transparent border-4 border-black p-6 text-2xl uppercase focus:bg-yellow-400 outline-none" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="SIGNAL_EXP" className="w-full bg-transparent border-4 border-black p-6 text-2xl uppercase focus:bg-yellow-400 outline-none" />
                <input type="text" placeholder="KEY_CODE" className="w-full bg-transparent border-4 border-black p-6 text-2xl uppercase focus:bg-yellow-400 outline-none" />
              </div>
            </form>
          </div>
        </div>
        <div className="md:col-span-4 bg-yellow-400 border-[8px] border-black p-12 shadow-[12px_12px_0_0_#000] text-black">
          <h3 className="text-4xl font-black uppercase mb-8 border-b-4 border-black pb-2 italic">Total_Net</h3>
          <div className="space-y-6 mb-12">
            {cartItems.map((item, i) => (
              <div key={i} className="flex justify-between gap-4 font-black text-xl border-b-2 border-black pb-2 italic text-black">
                <span className="uppercase truncate flex-1 min-w-0">{item.name}</span>
                <span className="shrink-0">\${item.price}</span>
              </div>
            ))}
          </div>
          <div className="text-6xl font-black uppercase tracking-tighter mb-12 italic text-black">\$358</div>
          <button className="w-full bg-black text-white py-10 text-3xl font-black uppercase tracking-widest hover:bg-white hover:text-black border-4 border-transparent hover:border-black transition-all italic">Execute_Pay</button>
        </div>
      </div>
    </div>
  );
};`}
              htmlCode={`<!-- Matrix Grid Checkout UI -->
<div class="matrix-root">
  <div class="matrix-left">
    <div class="matrix-selector">
      <h2 class="selector-title">Select_Logic.</h2>
      <div class="method-grid">
        <div class="method-card">
           <div class="card-head"><div class="square"></div><span>01</span></div>
           <div class="method-name">VAULT_ID</div>
        </div>
        <div class="method-card">
           <div class="card-head"><div class="square"></div><span>02</span></div>
           <div class="method-name">CRYPTO_MESH</div>
        </div>
        <div class="method-card">
           <div class="card-head"><div class="square"></div><span>03</span></div>
           <div class="method-name">NEURAL_NODE</div>
        </div>
        <div class="method-card">
           <div class="card-head"><div class="square"></div><span>04</span></div>
           <div class="method-name">SIGNAL_PAY</div>
        </div>
      </div>
    </div>
    <div class="matrix-input-box">
      <h3 class="box-title">Input_Sequence</h3>
      <input type="text" placeholder="USER_NODE_STRING" class="matrix-input full">
      <div class="input-row">
         <input type="text" placeholder="SIGNAL_EXP" class="matrix-input">
         <input type="text" placeholder="KEY_CODE" class="matrix-input">
      </div>
    </div>
  </div>
  <div class="matrix-right">
    <h3 class="sidebar-title">Total_Net</h3>
    <div class="item-list">
       <div class="item-row"><span>NEURAL_LINK_V1</span><span>$299</span></div>
       <div class="item-row"><span>MATRIX_PROTOCOL_LICENSE</span><span>$59</span></div>
    </div>
    <div class="sidebar-total">$358</div>
    <button class="sidebar-btn">Execute_Pay</button>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.matrix-root { display: grid; grid-template-columns: 1fr; gap: 40px; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; text-align: left; width: 100%; max-width: 1152px; margin: 0 auto; }
@media (min-width: 1024px) { .matrix-root { grid-template-columns: repeat(12, 1fr); } }
.matrix-left { grid-column: span 8; } .matrix-right { grid-column: span 4; background: #facc15; border: 8px solid black; padding: 48px; box-shadow: 12px 12px 0 0 #000; color: black; }
.matrix-selector { background: black; color: white; padding: 64px; border: 10px solid black; box-shadow: 20px 20px 0 0 #facc15; margin-bottom: 40px; }
.selector-title { font-size: 70px; text-transform: uppercase; margin-bottom: 40px; letter-spacing: -0.05em; }
.method-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
@media (min-width: 640px) { .method-grid { grid-template-columns: repeat(2, 1fr); } }
.method-card { background: white; color: black; border: 4px solid black; padding: 32px; box-shadow: 8px 8px 0 0 #000; cursor: pointer; transition: all 0.2s; }
.method-card:hover { background: #22d3ee; transform: translate(-2px, -2px); }
.card-head { display: flex; justify-content: space-between; margin-bottom: 16px; }
.square { width: 48px; height: 48px; background: black; border: 4px solid black; }
.method-name { font-size: 24px; text-transform: uppercase; }
.matrix-input-box { background: white; border: 8px solid black; padding: 64px; box-shadow: 20px 20px 0 0 #000; color: black; }
.box-title { font-size: 48px; text-transform: uppercase; border-bottom: 8px solid black; padding-bottom: 16px; margin-bottom: 48px; }
.input-row { display: grid; grid-template-columns: 1fr; gap: 24px; }
@media (min-width: 640px) { .input-row { grid-template-columns: repeat(2, 1fr); } }
.matrix-input { width: 100%; background: transparent; border: 4px solid black; padding: 24px; font-size: 24px; font-weight: 900; outline: none; text-transform: uppercase; margin-bottom: 32px; }
.matrix-input:focus { background: #facc15; } .full { margin-bottom: 32px; }
.sidebar-title { font-size: 36px; text-transform: uppercase; border-bottom: 4px solid black; padding-bottom: 8px; margin-bottom: 32px; }
.item-row { display: flex; justify-content: space-between; font-size: 20px; border-bottom: 2px solid black; padding-bottom: 16px; margin-bottom: 16px; }
.sidebar-total { font-size: 60px; margin-bottom: 48px; letter-spacing: -0.05em; }
.sidebar-btn { width: 100%; background: black; color: white; padding: 40px; font-size: 30px; font-weight: 900; text-transform: uppercase; cursor: pointer; border: none; transition: all 0.2s; }
.sidebar-btn:hover { background: white; color: black; box-shadow: inset 0 0 0 4px black; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">05. Matrix Logic Grid</span>
          <CheckoutCards />
        </section>

        {/* 06. STEP ACCORDION */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/chec border border-slate-200">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/chec:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`import React from 'react';

export const CheckoutAccordion = () => {
  const [active, setActive] = React.useState(0);
  return (
    <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold">
      <div className="bg-white border-[10px] border-black p-16 shadow-[24px_24px_0_0_#000] text-left text-black">
        <h2 className="text-8xl font-black uppercase mb-16 tracking-tighter text-black text-center italic">PAY_PROTOCOL</h2>
        <div className="space-y-6">
          <div className="border-[6px] border-black overflow-hidden">
            <button onClick={() => setActive(0)} className={\`w-full flex justify-between p-10 \${active === 0 ? 'bg-black text-white' : 'bg-white text-black hover:bg-yellow-400'} transition-all italic\`}>
              <span className="text-4xl font-black uppercase tracking-tighter italic">01. NODE_AUTH</span>
              <span>▼</span>
            </button>
            {active === 0 && (
              <div className="p-10 bg-white border-t-4 border-black">
                <input type="text" placeholder="IDENTITY_SIGNAL" className="w-full bg-yellow-400 border-4 border-black p-8 text-3xl font-black outline-none uppercase italic" />
              </div>
            )}
          </div>
          <div className="border-[6px] border-black overflow-hidden">
            <button onClick={() => setActive(1)} className={\`w-full flex justify-between p-10 \${active === 1 ? 'bg-black text-white' : 'bg-white text-black hover:bg-cyan-400'} transition-all italic\`}>
              <span className="text-4xl font-black uppercase tracking-tighter italic">02. VAULT_KEY</span>
              <span>▼</span>
            </button>
            {active === 1 && (
              <div className="p-10 bg-white border-t-4 border-black">
                <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-cyan-400 border-4 border-black p-8 text-3xl font-black outline-none uppercase italic" />
              </div>
            )}
          </div>
          <div className="border-[6px] border-black overflow-hidden">
            <button onClick={() => setActive(2)} className={\`w-full flex justify-between p-10 \${active === 2 ? 'bg-black text-white' : 'bg-white text-black hover:bg-pink-400'} transition-all italic\`}>
              <span className="text-4xl font-black uppercase tracking-tighter italic">03. EXECUTE_PAY</span>
              <span>▼</span>
            </button>
            {active === 2 && (
              <div className="p-10 bg-white border-t-4 border-black">
                <div className="bg-black text-white p-12 border-4 border-black space-y-8">
                  <div className="flex justify-between text-5xl font-black uppercase tracking-tighter italic">
                    <span>TOTAL_VAL</span>
                    <span className="text-yellow-400">\$358</span>
                  </div>
                  <button className="w-full bg-yellow-400 text-black py-10 text-4xl font-black uppercase transition-all italic shadow-[8px_8px_0_0_#000]">Sync_Matrix →</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};`}
              htmlCode={`<!-- Accordion Step Checkout Protocol -->
<div class="accordion-root">
  <h2 class="main-title">PAY_PROTOCOL</h2>
  <div class="accordion-list">
    <div class="step-item active">
      <div class="step-header"><span>01. NODE_AUTH</span><span>▼</span></div>
      <div class="step-content">
        <input type="text" placeholder="IDENTITY_SIGNAL" class="step-input yellow-bg">
      </div>
    </div>
    <div class="step-item">
      <div class="step-header inactive"><span>02. VAULT_KEY</span><span>▼</span></div>
      <div class="step-content hidden">
        <input type="text" placeholder="XXXX XXXX XXXX XXXX" class="step-input cyan-bg">
      </div>
    </div>
    <div class="step-item">
      <div class="step-header inactive"><span>03. EXECUTE_PAY</span><span>▼</span></div>
      <div class="step-content hidden">
        <div class="final-box">
          <div class="final-total"><span>TOTAL_VAL</span><span class="yellow">$358</span></div>
          <button class="final-btn">Sync_Matrix →</button>
        </div>
      </div>
    </div>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.accordion-root { background: white; border: 10px solid black; padding: 64px; box-shadow: 24px 24px 0 0 #000; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; text-align: left; max-width: 896px; margin: 0 auto; }
.main-title { font-size: 80px; text-transform: uppercase; margin-bottom: 64px; text-align: center; color: black; letter-spacing: -0.05em; }
.accordion-list { display: grid; gap: 24px; }
.step-item { border: 6px solid black; overflow: hidden; }
.step-header { padding: 40px; background: black; color: white; display: flex; justify-content: space-between; align-items: center; font-size: 36px; text-transform: uppercase; cursor: pointer; }
.step-header.inactive { background: white; color: black; }
.step-header.inactive:hover { background: #facc15; }
.step-content { padding: 40px; background: white; border-top: 4px solid black; }
.step-content.hidden { display: none; }
.step-input { width: 100%; border: 4px solid black; padding: 32px; font-size: 30px; font-weight: 900; text-transform: uppercase; outline: none; }
.yellow-bg { background: #facc15; }
.cyan-bg { background: #22d3ee; }
.final-box { background: black; color: white; padding: 40px; border: 4px solid black; box-shadow: 8px 8px 0 0 #facc15; }
.final-total { display: flex; justify-content: space-between; font-size: 48px; margin-bottom: 32px; }
.yellow { color: #facc15; }
.final-btn { width: 100%; background: #facc15; color: black; padding: 32px; font-size: 36px; font-weight: 900; border: none; cursor: pointer; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">06. Interactive Step Accordion</span>
          <CheckoutAccordion />
        </section>

        {/* 07. MINIMAL CORE */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/chec border border-slate-200">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/chec:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`import React from 'react';

export const CheckoutMinimal = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold">
      <div className="bg-white p-20 border-[10px] border-black shadow-[16px_16px_0_0_#000] text-left text-black relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 text-[200px] font-black text-slate-50 leading-none -mr-20 -mt-20 z-0 italic">PAY</div>
        <div className="relative z-10">
          <div className="flex justify-between items-end border-b-[10px] border-black pb-12 mb-20">
            <h1 className="text-9xl font-black uppercase tracking-tighter leading-none italic">CHECK. <br/> <span className="text-gray-300">OUT.</span></h1>
            <div className="text-right font-mono text-xl uppercase italic">STK_V2.9 <br/> \$358_USD</div>
          </div>
          <div className="space-y-24 text-black">
            <section>
              <h3 className="text-5xl uppercase tracking-tighter italic mb-8">Node_Identity</h3>
              <input type="text" placeholder="PROTO_USER_9" className="w-full bg-transparent border-b-8 border-black p-4 text-4xl font-black uppercase outline-none focus:text-cyan-500 transition-colors" />
            </section>
            <section>
              <h3 className="text-5xl uppercase tracking-tighter italic mb-8">Vault_Signal</h3>
              <input type="text" placeholder="VAULT_XXXX_XXXX" className="w-full bg-transparent border-b-8 border-black p-4 text-4xl font-black uppercase outline-none focus:text-pink-500 transition-colors" />
            </section>
            <button className="w-full bg-black text-white py-12 text-5xl font-black uppercase tracking-tighter italic hover:bg-yellow-400 hover:text-black transition-all">Pay_Manifest_\$358 →</button>
          </div>
        </div>
      </div>
    </div>
  );
};`}
              htmlCode={`<!-- Minimal Type Checkout UI -->
<div class="minimal-root">
  <div class="bg-text">PAY</div>
  <div class="content-wrapper">
    <div class="header">
      <h1 class="main-title">CHECK.<br><span class="muted">OUT.</span></h1>
      <div class="meta">STK_V2.9<br>$358_USD</div>
    </div>
    <div class="form-body">
      <section>
        <h3 class="field-label">Node_Identity</h3>
        <input type="text" placeholder="PROTO_USER_9" class="minimal-input">
      </section>
      <section>
        <h3 class="field-label">Vault_Signal</h3>
        <input type="text" placeholder="VAULT_XXXX" class="minimal-input pink-focus">
      </section>
      <button class="minimal-btn">Pay_Manifest_$358 →</button>
    </div>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.minimal-root { background: white; padding: 80px; border: 10px solid black; box-shadow: 16px 16px 0 0 #000; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; text-align: left; max-width: 896px; margin: 0 auto; position: relative; overflow: hidden; }
.bg-text { position: absolute; top: -80px; right: -80px; font-size: 200px; color: #f8fafc; z-index: 0; pointer-events: none; }
.content-wrapper { position: relative; z-index: 10; }
.header { display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 10px solid black; padding-bottom: 48px; margin-bottom: 80px; }
.main-title { font-size: 100px; line-height: 0.9; text-transform: uppercase; letter-spacing: -0.05em; }
.muted { color: #e5e7eb; } .meta { text-align: right; font-family: monospace; font-size: 20px; text-transform: uppercase; color: black; }
.field-label { font-size: 48px; text-transform: uppercase; margin-bottom: 48px; color: black; }
.minimal-input { width: 100%; background: transparent; border: none; border-bottom: 8px solid black; padding: 16px; font-size: 40px; font-weight: 900; outline: none; text-transform: uppercase; color: black; margin-bottom: 96px; transition: color 0.3s; }
.minimal-input:focus { color: #06b6d4; } .pink-focus:focus { color: #ec4899; }
.minimal-btn { width: 100%; background: black; color: white; padding: 48px; font-size: 48px; font-weight: 900; text-transform: uppercase; border: none; cursor: pointer; transition: all 0.3s; }
.minimal-btn:hover { background: #facc15; color: black; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">07. Minimal Type Manifest</span>
          <CheckoutMinimal />
        </section>

        {/* 08. CYBER TERMINAL */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/chec border border-slate-200">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/chec:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`import React from 'react';

export const CheckoutCyber = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 font-mono italic font-bold">
      <div className="bg-black border-4 border-cyan-500/30 p-16 rounded-3xl relative overflow-hidden text-left text-white shadow-2xl">
        <div className="absolute top-0 right-0 p-4 text-cyan-500/10 text-[100px] font-black leading-none animate-pulse italic">TX_ID_99</div>
        <div className="relative z-10">
          <h2 className="text-6xl font-black text-cyan-400 mb-16 uppercase italic" style={{textShadow: "6px 6px 0px #06b6d433"}}>TERMINAL_PAY_LOAD</h2>
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 space-y-12">
              <div className="border-2 border-cyan-500/20 p-10 bg-cyan-500/5 group hover:border-cyan-400 transition-all">
                <div className="text-cyan-500/50 uppercase tracking-[0.4em] text-xs mb-8 italic">INITIATE_AUTH_STREAM</div>
                <form className="space-y-8">
                  <input type="text" placeholder="SIGNAL_ID" className="w-full bg-black/50 border-b-2 border-cyan-500/30 p-4 text-2xl text-cyan-100 outline-none focus:border-cyan-400 placeholder-cyan-900 uppercase italic" />
                  <input type="text" placeholder="VAULT_HANDSHAKE" className="w-full bg-black/50 border-b-2 border-cyan-500/30 p-4 text-2xl text-cyan-100 outline-none focus:border-cyan-400 placeholder-cyan-900 uppercase italic" />
                </form>
              </div>
              <button className="w-full bg-cyan-400 text-black py-10 text-4xl font-black uppercase tracking-widest hover:bg-white hover:shadow-[0_0_60px_rgba(34,211,238,0.5)] transition-all italic">UPLOAD_PULSE_>></button>
            </div>
            <div className="lg:col-span-5 bg-pink-500/5 border-2 border-pink-500/30 p-10">
              <h3 className="text-3xl text-pink-400 uppercase mb-10 italic">Package_Net</h3>
              <div className="space-y-6 mb-12">
                <div className="flex justify-between gap-4 border-b border-pink-500/20 pb-4 italic"><span className="text-pink-100 truncate flex-1 min-w-0">NEURAL_LINK_V1</span><span class="text-pink-400 shrink-0">\$299</span></div>
                <div className="flex justify-between gap-4 border-b border-pink-500/20 pb-4 italic"><span className="text-pink-100 truncate flex-1 min-w-0">MATRIX_PRO_LICENSE</span><span class="text-pink-400 shrink-0">\$59</span></div>
              </div>
              <div className="flex justify-between items-end border-t-2 border-pink-500/30 pt-8 italic">
                <span className="text-pink-400/50 uppercase text-xs italic">Total_Gas</span>
                <span className="text-5xl text-pink-500 font-black tracking-tighter">\$358</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};`}
              htmlCode={`<!-- Cyber Terminal Protocol UI -->
<div class="cyber-root">
  <div class="bg-id">TX_ID_99</div>
  <div class="cyber-content">
    <h2 class="main-title">TERMINAL_PAY_LOAD</h2>
    <div class="cyber-grid">
      <div class="form-col">
        <div class="input-card">
          <div class="card-label">INITIATE_AUTH_STREAM</div>
          <input type="text" placeholder="SIGNAL_ID" class="cyber-input">
          <input type="text" placeholder="VAULT_HANDSHAKE" class="cyber-input">
        </div>
        <button class="upload-btn">UPLOAD_PULSE_>></button>
      </div>
      <div class="summary-col">
        <h3 class="summary-title">Package_Net</h3>
        <div class="items">
          <div class="item"><span>NEURAL_LINK_V1</span><span>$299</span></div>
          <div class="item"><span>MATRIX_PRO</span><span>$59</span></div>
        </div>
        <div class="footer">
          <span class="muted">Total_Gas</span>
          <span class="total">$358</span>
        </div>
      </div>
    </div>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap');
.cyber-root { background: black; padding: 64px; border: 4px solid rgba(6,182,212,0.3); border-radius: 24px; font-family: 'Space Mono', monospace; font-style: italic; font-weight: 700; color: white; text-align: left; max-width: 1024px; margin: 0 auto; position: relative; overflow: hidden; }
.bg-id { position: absolute; top: 0; right: 0; font-size: 100px; color: rgba(6,182,212,0.05); z-index: 0; pointer-events: none; }
.cyber-content { position: relative; z-index: 10; }
.main-title { font-size: 60px; color: #22d3ee; margin-bottom: 64px; text-transform: uppercase; text-shadow: 4px 4px 0px rgba(6,182,212,0.2); }
.cyber-grid { display: grid; grid-template-columns: 1fr; gap: 64px; }
@media (min-width: 1024px) { .cyber-grid { grid-template-columns: repeat(12, 1fr); } }
.form-col { grid-column: span 7; } .summary-col { grid-column: span 5; background: rgba(236,72,153,0.05); border: 2px solid rgba(236,72,153,0.3); padding: 40px; }
.input-card { border: 2px solid rgba(6,182,212,0.2); padding: 40px; background: rgba(6,182,212,0.05); margin-bottom: 40px; }
.card-label { color: rgba(6,182,212,0.5); font-size: 12px; letter-spacing: 0.4em; margin-bottom: 32px; }
.cyber-input { width: 100%; background: rgba(0,0,0,0.5); border: none; border-bottom: 2px solid rgba(6,182,212,0.3); padding: 16px; font-size: 24px; color: #cffafe; outline: none; margin-bottom: 24px; }
.upload-btn { width: 100%; background: #22d3ee; color: black; padding: 40px; font-size: 36px; font-weight: 900; text-transform: uppercase; border: none; cursor: pointer; transition: all 0.3s; }
.upload-btn:hover { background: white; box-shadow: 0 0 50px rgba(34,211,238,0.5); }
.summary-title { font-size: 30px; color: #f472b6; text-transform: uppercase; margin-bottom: 40px; }
.items { margin-bottom: 40px; } .item { display: flex; justify-content: space-between; border-bottom: 1px solid rgba(236,72,153,0.2); padding-bottom: 16px; margin-bottom: 16px; font-size: 18px; color: #fdf2f8; }
.footer { border-top: 2px solid rgba(236,72,153,0.3); padding-top: 32px; display: flex; justify-content: space-between; align-items: flex-end; }
.total { font-size: 48px; color: #ec4899; } .muted { color: rgba(236,72,153,0.5); font-size: 14px; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">08. Cyber Terminal Pulse</span>
          <CheckoutCyber />
        </section>

        {/* 09. TACTILE NEO */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/chec border border-slate-200">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/chec:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`import React from 'react';

export const CheckoutNeo = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-slate-700">
      <div className="bg-[#e0e5ec] p-16 rounded-[4rem] shadow-[24px_24px_64px_#bebebe,-24px_-24px_64px_#ffffff] text-center border border-white/20">
        <div className="w-32 h-32 mx-auto bg-[#e0e5ec] rounded-full shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] mb-12 flex items-center justify-center text-6xl text-slate-400">💳</div>
        <h2 className="text-7xl font-black text-slate-800 mb-16 uppercase italic">Soft_Pay</h2>
        <div className="bg-[#e0e5ec] p-10 rounded-[40px] shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] mb-12">
          <input type="text" placeholder="IDENTITY_PULSE" className="w-full bg-transparent p-6 border-none outline-none font-black uppercase text-xl placeholder-slate-400 italic" />
        </div>
        <div className="bg-[#e0e5ec] p-12 rounded-[40px] shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] flex justify-between items-center mb-12 text-slate-800">
          <span className="text-3xl uppercase italic">Manifest_Net</span>
          <span className="text-6xl font-black italic tracking-tighter">\$358</span>
        </div>
        <button className="w-full bg-[#e0e5ec] text-cyan-600 py-12 rounded-[40px] text-4xl font-black uppercase shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] hover:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] transition-all italic">Sync_Final →</button>
      </div>
    </div>
  );
};`}
              htmlCode={`<!-- Neumorphic Soft Checkout UI -->
<div class="neo-root">
  <div class="neo-icon">💳</div>
  <h2 class="neo-title">Soft_Pay</h2>
  <div class="neo-input-card">
    <input type="text" placeholder="IDENTITY_PULSE" class="neo-input">
  </div>
  <div class="neo-summary">
    <span class="label">Manifest_Net</span>
    <span class="total">$358</span>
  </div>
  <button class="neo-btn">Sync_Final →</button>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.neo-root { background: #e0e5ec; padding: 64px; border-radius: 64px; box-shadow: 24px 24px 64px #bebebe, -24px -24px 64px #ffffff; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; text-align: center; border: 1px solid rgba(255,255,255,0.2); max-width: 896px; margin: 0 auto; color: #1e293b; }
.neo-icon { width: 128px; height: 128px; margin: 0 auto 48px; background: #e0e5ec; rounded-full; display: flex; align-items: center; justify-content: center; font-size: 64px; box-shadow: inset 8px 8px 16px #bebebe, inset -8px -8px 16px #ffffff; border-radius: 50%; }
.neo-title { font-size: 70px; text-transform: uppercase; margin-bottom: 64px; letter-spacing: -0.05em; }
.neo-input-card { background: #e0e5ec; padding: 40px; border-radius: 40px; box-shadow: inset 8px 8px 16px #bebebe, inset -8px -8px 16px #ffffff; margin-bottom: 48px; }
.neo-input { width: 100%; background: transparent; border: none; font-size: 24px; font-weight: 900; text-transform: uppercase; outline: none; color: #475569; }
.neo-summary { background: #e0e5ec; padding: 48px; border-radius: 40px; box-shadow: 12px 12px 24px #bebebe, -12px -12px 24px #ffffff; display: flex; justify-content: space-between; align-items: center; margin-bottom: 48px; }
.neo-summary .label { font-size: 30px; text-transform: uppercase; color: #64748b; }
.neo-summary .total { font-size: 60px; color: #1e293b; }
.neo-btn { width: 100%; background: #e0e5ec; color: #0891b2; padding: 48px; border-radius: 40px; font-size: 36px; font-weight: 900; text-transform: uppercase; cursor: pointer; border: none; box-shadow: 12px 12px 24px #bebebe, -12px -12px 24px #ffffff; transition: all 0.3s ease; }
.neo-btn:hover { box-shadow: inset 8px 8px 16px #bebebe, inset -8px -8px 16px #ffffff; transform: scale(0.99); }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">09. Tactile Soft Neumorphism</span>
          <CheckoutNeo />
        </section>

        {/* 10. NEOBRUTAL CHAOS */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/chec border border-slate-200">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/chec:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`import React from 'react';

export const CheckoutNeoBrutal = () => {
  const cartItems = [{ name: "Neural_Link_V1", price: 299 }, { name: "Matrix_Protocol_License", price: 59 }];
  return (
    <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold">
      <div className="grid md:grid-cols-12 gap-0 border-[10px] border-black bg-black shadow-[40px_40px_0_0_#facc15] text-left text-black">
        <div className="md:col-span-7 bg-pink-500 p-16 border-r-[10px] border-black space-y-16">
          <h2 className="text-8xl font-black uppercase text-black bg-white px-4 inline-block -rotate-2 italic shadow-[8px_8px_0_0_#000]">EXECUTE_</h2>
          <div className="space-y-12">
            <input type="text" placeholder="USER_NODE" className="w-full bg-white border-4 border-black p-8 text-4xl font-black shadow-[8px_8px_0_0_#000] outline-none uppercase italic" />
            <input type="text" placeholder="VAULT_KEY" className="w-full bg-white border-4 border-black p-8 text-4xl font-black shadow-[8px_8px_0_0_#000] outline-none uppercase italic" />
          </div>
        </div>
        <div className="md:col-span-5 bg-cyan-400 p-16 flex flex-col justify-between">
          <h2 className="text-6xl font-black uppercase border-b-8 border-black pb-4 italic">Payload.</h2>
          <div className="space-y-6 my-10">
            {cartItems.map((item, i) => (
              <div key={i} className="bg-white border-4 border-black p-4 flex justify-between items-center shadow-[4px_4px_0_0_#000] italic">
                <span>{item.name}</span>
                <span className="bg-black text-white px-2">\${item.price}</span>
              </div>
            ))}
          </div>
          <div className="bg-black text-white p-10 border-4 border-white shadow-[12px_12px_0_0_#ff00ff]">
            <div className="flex justify-between text-6xl font-black uppercase italic tracking-tighter">
              <span>TOTAL</span>
              <span className="text-pink-500">\$358</span>
            </div>
          </div>
          <button className="w-full bg-white text-black py-10 text-5xl font-black uppercase border-8 border-black shadow-[12px_12px_0_0_#000] mt-10 transition-all hover:bg-black hover:text-white italic">CONFIRM_PAY</button>
        </div>
      </div>
    </div>
  );
};`}
              htmlCode={`<!-- NeoBrutal Chaos Protocol UI -->
<div class="chaos-root">
  <div class="chaos-left">
    <h2 class="chaos-badge">EXECUTE_</h2>
    <div class="chaos-form">
      <input type="text" placeholder="USER_NODE" class="chaos-input">
      <input type="text" placeholder="VAULT_KEY" class="chaos-input">
      <div class="chaos-input-row">
        <input type="text" placeholder="MM/YY" class="chaos-input">
        <input type="text" placeholder="KEY" class="chaos-input">
      </div>
    </div>
  </div>
  <div class="chaos-right">
    <h2 class="chaos-title">Payload.</h2>
    <div class="chaos-items">
       <div class="chaos-item">
         <span class="item-name">NEURAL_LINK_V1</span>
         <span class="price">$299</span>
       </div>
       <div class="chaos-item">
         <span class="item-name">MATRIX_PROTOCOL_LICENSE</span>
         <span class="price">$59</span>
       </div>
    </div>
    <div class="chaos-summary">
       <div class="total-row"><span>TOTAL</span><span class="pink">$358</span></div>
    </div>
    <button class="chaos-btn">CONFIRM_PAY</button>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.chaos-root { display: grid; grid-template-columns: 1fr; border: 10px solid black; background: black; box-shadow: 40px 40px 0 0 #facc15; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; text-align: left; width: 100%; max-width: 1152px; margin: 0 auto; overflow: hidden; }
@media (min-width: 1024px) { .chaos-root { grid-template-columns: repeat(12, 1fr); } }
.chaos-left { grid-column: span 7; background: #ec4899; padding: 48px; border-bottom: 10px solid black; }
@media (min-width: 1024px) { .chaos-left { border-bottom: none; border-right: 10px solid black; } }
.chaos-right { grid-column: span 5; background: #22d3ee; padding: 48px; display: flex; flex-direction: column; justify-content: space-between; color: black; min-width: 0; }
.chaos-badge { font-size: 60px; background: white; color: black; padding: 0 16px; transform: rotate(-2deg); display: inline-block; box-shadow: 8px 8px 0 0 #000; margin-bottom: 48px; }
.chaos-form { display: grid; gap: 32px; }
.chaos-input { width: 100%; background: white; border: 4px solid black; padding: 24px; font-size: 28px; font-weight: 900; box-shadow: 8px 8px 0 0 #000; outline: none; text-transform: uppercase; }
.chaos-input-row { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.chaos-title { font-size: 50px; text-transform: uppercase; border-bottom: 8px solid black; padding-bottom: 16px; margin-bottom: 32px; color: black; }
.chaos-items { display: grid; gap: 16px; margin-bottom: 48px; }
.chaos-item { background: white; border: 4px solid black; padding: 16px; display: flex; justify-content: space-between; align-items: center; shadow: 4px 4px 0 0 #000; gap: 12px; }
.item-name { font-size: 16px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; }
.price { background: black; color: white; padding: 0 8px; flex-shrink: 0; font-size: 16px; }
.chaos-summary { background: black; color: white; padding: 32px; border: 4px solid white; box-shadow: 12px 12px 0 0 #ff00ff; margin-bottom: 48px; }
.total-row { display: flex; justify-content: space-between; font-size: 40px; letter-spacing: -0.05em; align-items: center; }
.pink { color: #ec4899; font-size: 50px; }
.chaos-btn { width: 100%; background: white; color: black; padding: 32px; font-size: 32px; font-weight: 900; text-transform: uppercase; border: 8px solid black; box-shadow: 12px 12px 0 0 #000; cursor: pointer; transition: all 0.2s; }
.chaos-btn:hover { background: black; color: white; transform: translate(4px, 4px); }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">10. NeoBrutal Chaos Manifest</span>
          <CheckoutNeoBrutal />
        </section>

      </div>
    </div>
  );
};

export default CheckoutGallery;