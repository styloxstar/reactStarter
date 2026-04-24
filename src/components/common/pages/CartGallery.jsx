import React from 'react';
import CopyButton from '../CopyButton';

// --- SHARED DATA ---
const cartItems = [
  { id: 1, name: "MESH_HEADPHONES_V1", price: 250, qty: 1, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200", color: "BLACK_VOID" },
  { id: 2, name: "SIGNAL_WATCH_ALPHA", price: 399, qty: 1, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=200", color: "SILVER_MESH" },
];

const TrashIcon = () => (
  <svg className="w-6 h-6 text-black hover:text-red-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
);

// --- ACTUAL UI COMPONENTS ---

export const CartAlpha = () => (
  <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 border-[10px] border-black bg-white p-6 md:p-12 shadow-[32px_32px_0_0_#000] min-w-0 italic">
      <div className="lg:col-span-8 min-w-0 italic text-left">
        <h2 className="text-4xl md:text-5xl font-black uppercase mb-12 border-b-8 border-black pb-4 italic">INVENTORY_SCAN</h2>
        <div className="space-y-8">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row gap-8 p-6 border-4 border-black bg-slate-50 shadow-[12px_12px_0_0_#000] italic">
              <div className="w-32 h-32 bg-white border-4 border-black flex-shrink-0 p-2 rotate-2 italic">
                <img src={item.img} alt="" className="w-full h-full object-contain mix-blend-multiply italic" />
              </div>
              <div className="flex-1 flex flex-col justify-between italic">
                <div className="flex justify-between items-start italic">
                  <div>
                    <h3 className="text-2xl font-black uppercase italic">{item.name}</h3>
                    <p className="text-sm opacity-50 italic">{item.color}</p>
                  </div>
                  <TrashIcon />
                </div>
                <div className="flex justify-between items-end mt-6 italic">
                  <div className="flex items-center border-4 border-black bg-white shadow-[4px_4px_0_0_#000] italic">
                    <button className="px-4 py-2 hover:bg-black hover:text-white transition-colors italic">-</button>
                    <span className="px-6 text-xl font-black italic">{item.qty}</span>
                    <button className="px-4 py-2 hover:bg-black hover:text-white transition-colors italic">+</button>
                  </div>
                  <span className="text-3xl font-black italic">${item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-4 min-w-0 italic">
        <div className="bg-black text-white p-6 md:p-8 border-4 border-black shadow-[16px_16px_0_0_#22d3ee] h-full italic text-left">
          <h3 className="text-2xl font-black uppercase mb-12 border-b-4 border-white/20 pb-4 italic">MANIFEST_SUMMARY</h3>
          <div className="space-y-6 mb-12 italic text-left">
            <div className="flex justify-between text-sm uppercase italic"><span className="opacity-50">Subtotal_Load</span><span>$649</span></div>
            <div className="flex justify-between text-sm uppercase italic"><span className="opacity-50">Signal_Tax</span><span>$0</span></div>
            <div className="flex justify-between text-sm uppercase italic"><span className="opacity-50">Mesh_Shipping</span><span>FREE</span></div>
          </div>
          <div className="flex justify-between text-4xl font-black uppercase mb-12 border-t-4 border-white/20 pt-8 italic">
            <span>TOTAL</span>
            <span>$649</span>
          </div>
          <button className="w-full bg-white text-black py-6 text-2xl font-black uppercase border-4 border-white hover:bg-transparent hover:text-white transition-all shadow-[8px_8px_0_0_#22d3ee] italic">INJECT_ORDER</button>
        </div>
      </div>
    </div>
  </div>
);

export const CartSlide = () => (
  <div className="w-full max-w-md mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[8px] border-black h-[700px] flex flex-col shadow-[20px_20px_0_0_#000] min-w-0 italic">
      <div className="p-8 border-b-8 border-black flex justify-between items-center italic">
        <h2 className="text-3xl font-black uppercase italic">CART_DRAWER</h2>
        <button className="text-2xl hover:rotate-90 transition-transform italic">✕</button>
      </div>
      <div className="flex-1 overflow-y-auto p-8 space-y-8 italic custom-scrollbar">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-6 border-b-4 border-black pb-8 italic">
            <div className="w-20 h-20 bg-black text-white border-2 border-black rotate-3 italic flex-shrink-0 overflow-hidden shadow-[4px_4px_0_0_#facc15]">
              <img src={item.img} alt="" className="w-full h-full object-cover grayscale italic" />
            </div>
            <div className="flex-1 italic">
              <h4 className="font-black uppercase text-sm mb-2 italic">{item.name}</h4>
              <div className="flex justify-between items-center italic">
                <span className="text-xs bg-black text-white px-2 py-1 italic">QTY: {item.qty}</span>
                <span className="text-lg font-black italic">${item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-8 bg-black text-white border-t-8 border-black italic text-left">
        <div className="flex justify-between text-2xl font-black uppercase mb-8 italic">
          <span>TOTAL</span>
          <span>$649</span>
        </div>
        <button className="w-full bg-yellow-400 text-black py-6 text-xl font-black uppercase border-4 border-white hover:bg-white transition-all italic shadow-[8px_8px_0_0_#000]">CHECKOUT_NOW</button>
      </div>
    </div>
  </div>
);

export const CartRewards = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[10px] border-black p-8 md:p-12 shadow-[24px_24px_0_0_#6366f1] min-w-0 italic text-left">
      <div className="bg-black text-white p-8 border-4 border-black mb-12 shadow-[12px_12px_0_0_#6366f1] italic text-left">
        <p className="text-sm uppercase text-indigo-400 mb-4 italic tracking-widest italic text-left">FREE_SHIPPING_THRESHOLD</p>
        <div className="flex justify-between items-end mb-4 italic">
          <span className="text-2xl italic text-left italic">ADD $351 FOR_FREE_LINK</span>
          <span className="text-xl opacity-40 italic text-left italic">65%_READY</span>
        </div>
        <div className="w-full h-8 bg-white/20 border-4 border-white relative overflow-hidden italic text-left italic">
          <div className="w-[65%] h-full bg-indigo-500 border-r-4 border-white italic text-left italic"></div>
        </div>
      </div>
      <div className="space-y-8 mb-12 italic text-left">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b-4 border-slate-100 pb-8 italic text-left">
            <div className="flex items-center gap-6 italic text-left italic">
              <div className="w-20 h-20 bg-slate-100 border-2 border-black italic text-left italic"><img src={item.img} className="w-full h-full object-contain mix-blend-multiply italic text-left" alt="" /></div>
              <div>
                <h4 className="text-xl font-black uppercase italic text-left">{item.name}</h4>
                <p className="text-sm opacity-50 italic text-left">${item.price}</p>
              </div>
            </div>
            <div className="flex items-center border-4 border-black italic text-left italic">
              <button className="px-4 py-2 hover:bg-black hover:text-white italic text-left">-</button>
              <span className="px-6 italic text-left italic">{item.qty}</span>
              <button className="px-4 py-2 hover:bg-black hover:text-white italic text-left">+</button>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full bg-black text-white py-8 text-3xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-all shadow-[12px_12px_0_0_#6366f1] italic">SECURE_PAYMENT_INIT</button>
    </div>
  </div>
);

export const CartTable = () => (
  <div className="w-full max-w-5xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[10px] border-black p-8 md:p-16 shadow-[20px_20px_0_0_#000] min-w-0 italic text-left">
      <h2 className="text-6xl font-black uppercase mb-16 italic text-center italic">SHOPPING_BAG.</h2>
      <table className="w-full text-left border-collapse italic text-left italic">
        <thead>
          <tr className="text-xs uppercase tracking-widest border-b-8 border-black italic text-left italic">
            <th className="pb-4 italic text-left italic">ITEM_DESCRIPTION</th>
            <th className="pb-4 text-center italic">QUANTITY</th>
            <th className="pb-4 text-right italic">UNIT_PRICE</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="border-b-4 border-black group italic text-left italic">
              <td className="py-8 italic text-left italic">
                <div className="flex items-center gap-8 italic text-left italic">
                  <div className="w-24 h-24 bg-slate-50 border-4 border-black rotate-[-3deg] group-hover:rotate-0 transition-transform italic text-left"><img src={item.img} className="w-full h-full object-contain grayscale italic text-left" alt="" /></div>
                  <div>
                    <p className="text-2xl font-black uppercase italic text-left">{item.name}</p>
                    <button className="text-xs uppercase underline hover:text-red-600 italic text-left">REMOVE_NODE</button>
                  </div>
                </div>
              </td>
              <td className="py-8 text-center italic">
                <input type="number" defaultValue={item.qty} className="w-20 p-4 border-4 border-black font-black text-center bg-transparent italic text-left" />
              </td>
              <td className="py-8 text-right text-2xl font-black italic text-left italic">${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-16 flex flex-col items-end italic text-left">
        <div className="flex justify-between w-full max-w-md text-3xl font-black uppercase mb-8 italic text-left">
          <span>SUBTOTAL</span>
          <span>$649</span>
        </div>
        <button className="w-full max-w-md bg-black text-white py-8 text-3xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-all shadow-[12px_12px_0_0_#000] italic">PROCEED_TO_VAL_</button>
      </div>
    </div>
  </div>
);

export const CartUpsell = () => (
  <div className="w-full max-w-md mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[8px] border-black p-8 shadow-[24px_24px_0_0_#ec4899] min-w-0 italic text-left">
      <h2 className="text-3xl font-black uppercase mb-8 border-b-4 border-black pb-2 italic text-left">MY_STASH</h2>
      <div className="space-y-6 mb-12 italic text-left">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center italic text-left italic">
            <div className="flex items-center gap-4 italic text-left italic">
              <img src={item.img} className="w-16 h-16 border-2 border-black italic text-left" alt="" />
              <div>
                <div className="font-black text-sm italic text-left italic uppercase">{item.name}</div>
                <div className="opacity-50 text-xs italic text-left italic">${item.price}</div>
              </div>
            </div>
            <span className="bg-black text-white px-2 italic text-left italic font-black text-xs">x{item.qty}</span>
          </div>
        ))}
      </div>
      <div className="bg-pink-100 border-4 border-black p-6 mb-8 italic text-left italic shadow-[8px_8px_0_0_#000]">
        <h3 className="text-sm font-black uppercase mb-4 italic text-left italic text-pink-700">OPTIMIZE_YOUR_ORDER</h3>
        <div className="flex gap-4 overflow-x-auto pb-2 italic text-left italic custom-scrollbar-pink">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-shrink-0 w-32 bg-white border-2 border-black p-2 italic text-left italic">
              <div className="h-20 bg-slate-100 border-b-2 border-black mb-2 italic text-left"></div>
              <div className="text-[10px] font-black uppercase truncate italic text-left">MESH_CASE_V9</div>
              <div className="flex justify-between items-center mt-1 italic text-left">
                <span className="text-[10px] italic text-left">$29</span>
                <button className="bg-black text-white px-2 py-1 text-[10px] hover:bg-pink-600 transition-colors italic text-left">+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="w-full bg-pink-600 text-white py-6 text-xl font-black uppercase border-4 border-black shadow-[8px_8px_0_0_#000] hover:bg-black transition-all italic">CHECKOUT_ // $649</button>
    </div>
  </div>
);

export const CartMobile = () => (
  <div className="w-full max-w-sm mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-slate-50 border-[8px] border-black h-[650px] relative overflow-hidden flex flex-col italic text-left">
      <div className="bg-white p-6 border-b-8 border-black text-center shadow-[0_4px_0_0_#000] z-10 italic">
        <span className="text-2xl font-black uppercase italic">MESH_BAG</span>
      </div>
      <div className="flex-1 overflow-y-auto p-6 space-y-6 italic text-left custom-scrollbar">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white border-4 border-black p-4 flex gap-4 shadow-[8px_8px_0_0_#000] italic text-left">
            <div className="w-20 h-20 bg-slate-100 border-2 border-black flex-shrink-0 italic text-left"><img src={item.img} className="w-full h-full object-contain italic text-left" alt="" /></div>
            <div className="flex-1 flex flex-col justify-between italic text-left">
              <div>
                <h4 className="font-black text-xs uppercase leading-tight italic text-left">{item.name}</h4>
                <p className="text-[10px] opacity-50 italic text-left italic">{item.color}</p>
              </div>
              <div className="flex justify-between items-center italic text-left">
                <span className="font-black italic text-left italic">${item.price}</span>
                <div className="flex items-center border-2 border-black italic text-left italic">
                  <button className="px-2 italic text-left">-</button>
                  <span className="px-4 text-xs italic text-left">{item.qty}</span>
                  <button className="px-2 italic text-left">+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="h-24 italic text-left italic"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-white border-t-8 border-black p-6 shadow-[0_-8px_20px_rgba(0,0,0,0.1)] italic text-left">
        <div className="flex justify-between text-2xl font-black uppercase mb-6 italic text-left italic">
          <span className="opacity-40 italic text-left italic">TOTAL</span>
          <span className="italic text-left italic">$649</span>
        </div>
        <button className="w-full bg-black text-white py-5 text-2xl font-black uppercase border-4 border-black shadow-[8px_8px_0_0_#facc15] italic">CHECKOUT_</button>
      </div>
    </div>
  </div>
);

export const CartGlass = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-white">
    <div className="relative h-[650px] rounded-[3rem] overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 flex items-center justify-center italic text-left italic">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/20 rounded-full blur-3xl italic text-left italic"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-400/20 rounded-full blur-3xl italic text-left italic"></div>
      <div className="relative bg-white/10 backdrop-blur-2xl border-[6px] border-white/20 p-8 md:p-12 rounded-[2.5rem] shadow-2xl w-full max-w-md h-full flex flex-col italic text-left italic">
        <h2 className="text-4xl font-black uppercase mb-10 border-b-4 border-white/20 pb-4 italic text-left">BAG_SYNC</h2>
        <div className="flex-1 overflow-y-auto space-y-6 pr-2 italic text-left italic custom-scrollbar-white">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-6 p-4 bg-white/5 border-2 border-white/10 rounded-2xl hover:bg-white/10 transition-colors italic text-left italic">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center italic text-left"><img src={item.img} className="w-12 h-12 object-contain brightness-0 invert italic text-left" alt=""/></div>
              <div className="flex-1 italic text-left">
                <h4 className="font-black text-sm uppercase truncate italic text-left italic">{item.name}</h4>
                <div className="flex justify-between items-center mt-3 italic text-left">
                  <span className="text-xl italic text-left italic">${item.price}</span>
                  <span className="text-[10px] bg-white/20 px-2 py-1 rounded italic text-left italic">NODE_0{item.id}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t-4 border-white/20 pt-10 italic text-left italic">
          <div className="flex justify-between font-black text-3xl uppercase mb-8 italic text-left italic">
            <span>SUM_</span>
            <span>$649</span>
          </div>
          <button className="w-full bg-white text-indigo-600 py-6 text-2xl font-black uppercase rounded-2xl shadow-xl hover:scale-105 transition-transform italic">VAL_&_PAY</button>
        </div>
      </div>
    </div>
  </div>
);

export const CartBrutalist = () => (
  <div className="w-full max-w-2xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-yellow-400 border-[10px] border-black p-8 md:p-12 shadow-[30px_30px_0_0_#000] h-[700px] flex flex-col italic text-left">
      <div className="bg-white border-[8px] border-black p-6 mb-8 rotate-[-2deg] shadow-[12px_12px_0_0_#000] italic text-center">
        <h2 className="text-5xl font-black uppercase italic">CART_LOCK_V1</h2>
      </div>
      <div className="flex-1 overflow-y-auto space-y-6 pr-2 italic text-left italic">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white border-4 border-black p-6 flex gap-6 items-center shadow-[10px_10px_0_0_#ff00ff] italic text-left italic">
            <div className="w-24 h-24 border-4 border-black bg-black flex-shrink-0 italic text-left italic"><img src={item.img} className="w-full h-full object-cover grayscale contrast-150 italic text-left" alt="" /></div>
            <div className="flex-1 italic text-left italic">
              <h3 className="font-black text-xl uppercase leading-none mb-4 italic text-left italic">{item.name}</h3>
              <div className="flex justify-between items-center italic text-left italic">
                <span className="bg-black text-white px-3 py-1 font-black text-lg italic text-left italic">${item.price}</span>
                <div className="font-black border-4 border-black px-4 py-1 bg-white italic text-left italic">x{item.qty}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 bg-white border-[8px] border-black p-8 shadow-[12px_12px_0_0_#000] italic text-left italic">
        <div className="flex justify-between font-black text-4xl mb-8 uppercase italic text-left italic">
          <span>VAL_</span>
          <span>$649</span>
        </div>
        <button className="w-full bg-cyan-400 py-6 text-3xl font-black uppercase border-[6px] border-black hover:bg-pink-500 hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#000] transition-all italic">BUY_IT_NOW_</button>
      </div>
    </div>
  </div>
);

export const CartPromo = () => (
  <div className="w-full max-w-xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[10px] border-black p-10 shadow-[24px_24px_0_0_#000] min-w-0 italic text-left">
      <h2 className="text-4xl font-black uppercase mb-12 border-b-4 border-black pb-4 italic text-left">SUMMARY_INIT</h2>
      <div className="space-y-4 mb-12 italic text-left italic">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between text-lg italic text-left italic">
            <span className="opacity-60 italic text-left italic uppercase">{item.name} (X{item.qty})</span>
            <span className="font-black italic text-left italic">${item.price}</span>
          </div>
        ))}
      </div>
      <div className="mb-12 p-8 bg-slate-50 border-4 border-black shadow-[12px_12px_0_0_#000] italic text-left italic">
        <label className="text-xs font-black text-slate-500 uppercase mb-4 block italic text-left italic">VOUCHER_PROTOCOL</label>
        <div className="flex gap-4 italic text-left italic">
          <input type="text" placeholder="MESH_ALPHA_20" className="flex-1 bg-white border-4 border-black px-4 py-4 font-black uppercase outline-none focus:bg-yellow-400 transition-colors italic text-left" />
          <button className="bg-black text-white px-8 py-4 font-black uppercase hover:bg-white hover:text-black border-4 border-black transition-all italic text-left">VAL_</button>
        </div>
      </div>
      <div className="border-t-8 border-black pt-10 space-y-4 italic text-left italic">
        <div className="flex justify-between text-xl opacity-40 italic text-left italic"><span>SUBTOTAL</span><span>$649</span></div>
        <div className="flex justify-between text-xl opacity-40 italic text-left italic"><span>DISCOUNT</span><span>-$00</span></div>
        <div className="flex justify-between text-5xl font-black text-black mt-8 italic text-left italic"><span>TOTAL</span><span>$649</span></div>
      </div>
      <button className="w-full mt-12 py-8 bg-black text-white text-3xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-all shadow-[12px_12px_0_0_#22d3ee] italic">EXECUTE_SYNC</button>
    </div>
  </div>
);

export const CartEmpty = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[10px] border-black p-12 md:p-24 text-center min-w-0 italic relative overflow-hidden shadow-[32px_32px_0_0_#ef4444] italic">
      <div className="absolute top-10 left-10 text-9xl opacity-5 select-none italic text-left">EMPTY</div>
      <div className="w-48 h-48 bg-black text-white border-4 border-white flex items-center justify-center text-7xl mx-auto mb-12 rotate-12 shadow-[12px_12px_0_0_#000] italic shrink-0 italic">🛒</div>
      <h2 className="text-5xl md:text-8xl font-black uppercase mb-8 leading-none italic text-center italic">GHOST_NODE.</h2>
      <p className="text-2xl uppercase mb-16 opacity-40 max-w-md mx-auto italic text-center italic">NO_PAYLOADS_DETECTED_IN_THIS_SECTOR. SCAN_FOR_NEW_ASSETS_IMMEDIATELY.</p>
      <button className="bg-black text-white px-16 py-8 text-3xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-all shadow-[16px_16px_0_0_#ef4444] italic text-center italic">START_SCANNING</button>
    </div>
  </div>
);

// --- MAIN GALLERY ---

const CartGallery = () => {
  return (
    <div className="box-shadow container overflow-y-auto bg-slate-100 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16 italic">
        <h1 className="text-5xl md:text-7xl font-black text-slate-800 mb-4 uppercase italic">Cart Galleries</h1>
        <p className="text-slate-500 font-bold uppercase tracking-widest italic">High-Fidelity Inventory & Checkout Restoration</p>
      </div>
      
      <div className="space-y-32 max-w-7xl mx-auto">
        
        {/* 01. ALPHA */}
        <section className='box-shadow p-4 rounded-lg relative group/cart bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cart:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const CartAlpha = () => (
  <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold text-left text-black italic">
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 border-[10px] border-black bg-white p-12 shadow-[32px_32px_0_0_#000] min-w-0 italic text-left italic">
      <div className="lg:col-span-8 min-w-0 italic text-left italic">
        <h2 className="text-4xl md:text-5xl font-black uppercase mb-12 border-b-8 border-black pb-4 italic text-left italic">INVENTORY_SCAN</h2>
        <div className="space-y-8 italic text-left italic">
          <div className="flex flex-col md:flex-row gap-8 p-6 border-4 border-black bg-slate-50 shadow-[12px_12px_0_0_#000] italic text-left italic">
             <div className="w-32 h-32 bg-white border-4 border-black flex-shrink-0 p-2 rotate-2 italic text-left">
                <img src="IMAGE_URL" className="w-full h-full object-contain italic text-left" alt="" />
             </div>
             <div className="flex-1 flex flex-col justify-between italic text-left italic">
                <div className="flex justify-between items-start italic text-left italic">
                   <h3 className="text-2xl font-black uppercase italic text-left">MESH_HEADPHONES_V1</h3>
                   <span className="text-3xl font-black italic text-left">$250</span>
                </div>
                <div className="flex justify-between items-end mt-6 italic text-left italic">
                   <div className="flex items-center border-4 border-black bg-white shadow-[4px_4px_0_0_#000] italic text-left italic">
                      <button className="px-4 py-2 hover:bg-black hover:text-white transition-colors italic text-left">-</button>
                      <span className="px-6 text-xl font-black italic text-left">1</span>
                      <button className="px-4 py-2 hover:bg-black hover:text-white transition-colors italic text-left">+</button>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="cart-alpha-root">
  <div class="main-side">
    <h2 class="title">INVENTORY_SCAN</h2>
    <div class="items-list">
      <div class="cart-item">
        <div class="img-box"><img src="IMAGE_URL" /></div>
        <div class="details">
          <div class="top-row">
            <h3 class="name">MESH_HEADPHONES_V1</h3>
            <span class="price">$250</span>
          </div>
          <div class="bot-row">
            <div class="qty-control">
              <button>-</button>
              <span class="val">1</span>
              <button>+</button>
            </div>
            <button class="remove-btn">REMOVE_NODE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="summary-side">
    <h3 class="s-title">MANIFEST_SUMMARY</h3>
    <div class="rows">
      <div class="s-row"><span>Subtotal_Load</span><span>$649</span></div>
      <div class="s-row"><span>Signal_Tax</span><span>$0</span></div>
    </div>
    <div class="total-row"><span>TOTAL</span><span>$649</span></div>
    <button class="checkout-btn">INJECT_ORDER</button>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.cart-alpha-root { display: grid; grid-template-columns: 8fr 4fr; gap: 48px; border: 10px solid black; background: white; padding: 48px; box-shadow: 32px 32px 0 0 #000; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 1200px; margin: 40px auto; }
@media (max-width: 1024px) { .cart-alpha-root { grid-template-columns: 1fr; } }
.title { font-size: 48px; text-transform: uppercase; border-bottom: 8px solid black; padding-bottom: 16px; margin-bottom: 48px; line-height: 1; letter-spacing: -0.05em; }
.cart-item { display: flex; gap: 32px; padding: 24px; border: 4px solid black; background: #f8fafc; box-shadow: 12px 12px 0 0 #000; margin-bottom: 32px; }
@media (max-width: 640px) { .cart-item { flex-direction: column; } }
.img-box { width: 128px; height: 128px; background: white; border: 4px solid black; transform: rotate(2deg); padding: 8px; flex-shrink: 0; }
.details { flex: 1; display: flex; flex-direction: column; justify-content: space-between; }
.top-row { display: flex; justify-content: space-between; align-items: flex-start; }
.name { font-size: 24px; text-transform: uppercase; }
.price { font-size: 24px; }
.bot-row { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 24px; }
.qty-control { display: flex; border: 4px solid black; background: white; box-shadow: 4px 4px 0 0 #000; }
.qty-control button { padding: 8px 16px; cursor: pointer; border: none; background: transparent; font-family: inherit; font-weight: 900; transition: 0.2s; }
.qty-control button:hover { background: black; color: white; }
.qty-control .val { padding: 8px 24px; font-size: 20px; border-left: 4px solid black; border-right: 4px solid black; }
.summary-side { background: black; color: white; padding: 24px; border: 4px solid black; box-shadow: 16px 16px 0 0 #22d3ee; }
.s-title { font-size: 24px; border-bottom: 4px solid rgba(255,255,255,0.2); padding-bottom: 16px; margin-bottom: 48px; }
.s-row { display: flex; justify-content: space-between; font-size: 14px; text-transform: uppercase; margin-bottom: 24px; color: rgba(255,255,255,0.5); }
.total-row { display: flex; justify-content: space-between; font-size: 32px; border-top: 4px solid rgba(255,255,255,0.2); padding-top: 32px; margin-bottom: 48px; }
.checkout-btn { width: 100%; background: white; color: black; border: 4px solid white; padding: 24px; font-size: 24px; font-weight: 900; text-transform: uppercase; cursor: pointer; box-shadow: 8px 8px 0 0 #22d3ee; transition: all 0.2s; font-family: inherit; font-style: inherit; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">01. Alpha Inventory Scan</span>
          <CartAlpha />
        </section>

        {/* 02. SLIDE */}
        <section className='box-shadow p-4 rounded-lg relative group/cart bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cart:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const CartSlide = () => (
  <div className="w-full max-w-md mx-auto px-4 font-sans italic font-bold text-left text-black italic">
    <div className="bg-white border-[8px] border-black h-[700px] flex flex-col shadow-[20px_20px_0_0_#000] min-w-0 italic text-left italic">
      <div className="p-8 border-b-8 border-black flex justify-between items-center italic text-left italic">
        <h2 className="text-3xl font-black uppercase italic text-left italic">CART_DRAWER</h2>
        <button className="text-2xl hover:rotate-90 transition-transform italic text-left">✕</button>
      </div>
      <div className="flex-1 overflow-y-auto p-8 space-y-8 italic text-left italic">
        <div className="flex gap-6 border-b-4 border-black pb-8 italic text-left italic">
           <div className="w-20 h-20 bg-black text-white border-2 border-black rotate-3 flex-shrink-0 shadow-[4px_4px_0_0_#facc15] italic text-left italic overflow-hidden">
             <img src="IMAGE_URL" className="w-full h-full object-cover grayscale italic text-left" alt="" />
           </div>
           <div className="flex-1 italic text-left italic">
             <h4 className="font-black uppercase text-sm mb-2 italic text-left italic">MESH_HEADPHONES_V1</h4>
             <div className="flex justify-between items-center italic text-left italic">
                <span className="text-xs bg-black text-white px-2 py-1 italic text-left italic">QTY: 1</span>
                <span className="text-lg font-black italic text-left italic">$250</span>
             </div>
           </div>
        </div>
      </div>
      <div className="p-8 bg-black text-white border-t-8 border-black italic text-left italic">
        <div className="flex justify-between text-2xl font-black uppercase mb-8 italic text-left italic">
          <span>TOTAL</span>
          <span>$649</span>
        </div>
        <button className="w-full bg-yellow-400 text-black py-6 text-xl font-black uppercase border-4 border-white hover:bg-white transition-all shadow-[8px_8px_0_0_#000] italic">CHECKOUT_NOW</button>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="drawer-cart-root">
  <div class="header">
    <h2 class="title">CART_DRAWER</h2>
    <button class="close-btn">✕</button>
  </div>
  <div class="items-list">
    <div class="drawer-item">
      <div class="img-box"><img src="IMAGE_URL" /></div>
      <div class="details">
        <h4 class="name">MESH_HEADPHONES_V1</h4>
        <div class="bot">
          <span class="qty">QTY: 1</span>
          <span class="price">$250</span>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="total-row">
      <span>TOTAL</span>
      <span>$649</span>
    </div>
    <button class="checkout-btn">CHECKOUT_NOW</button>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.drawer-cart-root { background: white; border: 8px solid black; height: 700px; display: flex; flex-direction: column; box-shadow: 20px 20px 0 0 #000; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 450px; margin: 40px auto; }
.header { padding: 32px; border-bottom: 8px solid black; display: flex; justify-content: space-between; align-items: center; }
.title { font-size: 24px; text-transform: uppercase; }
.close-btn { font-size: 24px; background: none; border: none; cursor: pointer; transition: 0.2s; }
.close-btn:hover { transform: rotate(90deg); }
.items-list { flex: 1; overflow-y: auto; padding: 32px; }
.drawer-item { display: flex; gap: 24px; border-bottom: 4px solid black; padding-bottom: 32px; margin-bottom: 32px; }
.drawer-item .img-box { width: 80px; height: 80px; background: black; border: 2px solid black; transform: rotate(3deg); flex-shrink: 0; box-shadow: 4px 4px 0 0 #facc15; overflow: hidden; }
.drawer-item .img-box img { width: 100%; height: 100%; object-cover; filter: grayscale(1); }
.drawer-item .details { flex: 1; }
.drawer-item .name { font-size: 14px; text-transform: uppercase; margin-bottom: 8px; }
.drawer-item .bot { display: flex; justify-content: space-between; align-items: center; }
.drawer-item .qty { font-size: 12px; background: black; color: white; padding: 4px 8px; }
.drawer-item .price { font-size: 18px; }
.footer { padding: 32px; background: black; color: white; border-top: 8px solid black; }
.total-row { display: flex; justify-content: space-between; font-size: 24px; text-transform: uppercase; margin-bottom: 32px; }
.checkout-btn { width: 100%; background: #facc15; color: black; border: 4px solid white; padding: 24px; font-size: 20px; font-weight: 900; text-transform: uppercase; cursor: pointer; box-shadow: 8px 8px 0 0 #000; transition: all 0.2s; font-family: inherit; font-style: inherit; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">02. Slide Manifest Drawer</span>
          <CartSlide />
        </section>

        {/* 03. REWARDS */}
        <section className='box-shadow p-4 rounded-lg relative group/cart bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cart:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const CartRewards = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-black italic">
    <div className="bg-white border-[10px] border-black p-12 shadow-[24px_24px_0_0_#6366f1] min-w-0 italic text-left italic">
      <div className="bg-black text-white p-8 border-4 border-black mb-12 shadow-[12px_12px_0_0_#6366f1] italic text-left italic">
        <p className="text-sm uppercase text-indigo-400 mb-4 tracking-widest italic text-left italic">FREE_SHIPPING_THRESHOLD</p>
        <div className="flex justify-between items-end mb-4 italic text-left italic">
           <span className="text-2xl italic text-left italic">ADD $351 FOR_FREE_LINK</span>
           <span className="text-xl opacity-40 italic text-left italic">65%_READY</span>
        </div>
        <div className="w-full h-8 bg-white/20 border-4 border-white relative overflow-hidden italic text-left italic">
          <div className="w-[65%] h-full bg-indigo-500 border-r-4 border-white italic text-left italic"></div>
        </div>
      </div>
      <button className="w-full bg-black text-white py-8 text-3xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-all shadow-[12px_12px_0_0_#6366f1] italic">SECURE_PAYMENT_INIT</button>
    </div>
  </div>
);`}
              htmlCode={`<div class="rewards-cart-root">
  <div class="progress-card">
    <p class="lbl">FREE_SHIPPING_THRESHOLD</p>
    <div class="row">
      <span class="msg">ADD $351 FOR_FREE_LINK</span>
      <span class="pct">65%_READY</span>
    </div>
    <div class="track">
      <div class="bar"></div>
    </div>
  </div>
  <div class="items-list">
    <div class="item">
      <div class="info">
        <div class="img-box"><img src="IMAGE_URL" /></div>
        <div class="txt">
          <h4>MESH_HEADPHONES_V1</h4>
          <p>$250</p>
        </div>
      </div>
      <div class="qty-box">
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
    </div>
  </div>
  <button class="checkout-btn">SECURE_PAYMENT_INIT</button>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.rewards-cart-root { background: white; border: 10px solid black; padding: 48px; box-shadow: 24px 24px 0 0 #6366f1; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 800px; margin: 40px auto; color: black; }
.progress-card { background: black; color: white; padding: 32px; border: 4px solid black; box-shadow: 12px 12px 0 0 #6366f1; margin-bottom: 48px; text-align: left; }
.progress-card .lbl { font-size: 14px; color: #818cf8; letter-spacing: 0.2em; margin-bottom: 16px; text-transform: uppercase; }
.progress-card .row { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 16px; }
.progress-card .msg { font-size: 24px; text-transform: uppercase; }
.progress-card .pct { font-size: 20px; opacity: 0.4; }
.progress-card .track { width: 100%; height: 32px; background: rgba(255,255,255,0.2); border: 4px solid white; position: relative; overflow: hidden; }
.progress-card .bar { width: 65%; height: 100%; background: #6366f1; border-right: 4px solid white; }
.item { display: flex; justify-content: space-between; align-items: center; border-bottom: 4px solid #f1f5f9; padding-bottom: 32px; margin-bottom: 32px; }
.item .info { display: flex; align-items: center; gap: 24px; }
.item .img-box { width: 80px; height: 80px; background: #f1f5f9; border: 2px solid black; padding: 8px; }
.item .txt h4 { font-size: 20px; text-transform: uppercase; }
.item .txt p { font-size: 14px; opacity: 0.5; }
.qty-box { display: flex; border: 4px solid black; }
.qty-box button { padding: 8px 16px; background: transparent; border: none; font-family: inherit; font-weight: 900; cursor: pointer; transition: 0.2s; }
.qty-box button:hover { background: black; color: white; }
.qty-box span { padding: 8px 24px; border-left: 4px solid black; border-right: 4px solid black; }
.checkout-btn { width: 100%; background: black; color: white; border: 4px solid black; padding: 32px; font-size: 32px; font-weight: 900; text-transform: uppercase; cursor: pointer; box-shadow: 12px 12px 0 0 #6366f1; transition: all 0.2s; font-family: inherit; font-style: inherit; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">03. Mesh Reward Goals</span>
          <CartRewards />
        </section>

        {/* 04. TABLE */}
        <section className='box-shadow p-4 rounded-lg relative group/cart bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cart:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const CartTable = () => (
  <div className="w-full max-w-5xl mx-auto px-4 font-sans italic font-bold text-left text-black italic">
    <div className="bg-white border-[10px] border-black p-16 shadow-[20px_20px_0_0_#000] min-w-0 italic text-left italic">
      <h2 className="text-8xl font-black uppercase mb-16 italic text-center italic">SHOPPING_BAG.</h2>
      <table className="w-full text-left border-collapse italic text-left italic">
        <thead>
          <tr className="text-xs uppercase tracking-widest border-b-8 border-black italic text-left italic">
            <th className="pb-4 italic text-left italic">ITEM_DESCRIPTION</th>
            <th className="pb-4 text-center italic">QUANTITY</th>
            <th className="pb-4 text-right italic">UNIT_PRICE</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="border-b-4 border-black group italic text-left italic">
              <td className="py-8 italic text-left italic">
                <div className="flex items-center gap-8 italic text-left italic">
                  <div className="w-24 h-24 bg-slate-50 border-4 border-black rotate-[-3deg] group-hover:rotate-0 transition-transform italic text-left"><img src={item.img} className="w-full h-full object-contain grayscale italic text-left" alt="" /></div>
                  <div>
                    <p className="text-2xl font-black uppercase italic text-left">{item.name}</p>
                    <button className="text-xs uppercase underline hover:text-red-600 italic text-left">REMOVE_NODE</button>
                  </div>
                </div>
              </td>
              <td className="py-8 text-center italic">
                <input type="number" defaultValue={item.qty} className="w-20 p-4 border-4 border-black font-black text-center bg-transparent italic text-left" />
              </td>
              <td className="py-8 text-right text-2xl font-black italic text-left italic">$250</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-16 flex flex-col items-end italic text-left italic">
        <div className="flex justify-between w-full max-w-md text-3xl font-black uppercase mb-8 italic text-left italic">
          <span>SUBTOTAL</span>
          <span>$649</span>
        </div>
        <button className="w-full max-w-md bg-black text-white py-8 text-3xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-all shadow-[12px_12px_0_0_#000] italic">PROCEED_TO_VAL_</button>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="table-cart-root">
  <h2 class="title">SHOPPING_BAG.</h2>
  <table class="cart-table">
    <thead>
      <tr>
        <th>ITEM_DESCRIPTION</th>
        <th class="center">QUANTITY</th>
        <th class="right">UNIT_PRICE</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="item-info">
            <div class="img-box"><img src="IMAGE_URL" /></div>
            <div>
              <p class="name">MESH_HEADPHONES_V1</p>
              <button class="remove-btn">REMOVE_NODE</button>
            </div>
          </div>
        </td>
        <td class="center">
          <input type="number" value="1" />
        </td>
        <td class="right price">$250</td>
      </tr>
    </tbody>
  </table>
  <div class="summary">
    <div class="row"><span>SUBTOTAL</span><span>$649</span></div>
    <button class="checkout-btn">PROCEED_TO_VAL_</button>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.table-cart-root { background: white; border: 10px solid black; padding: 64px; box-shadow: 20px 20px 0 0 #000; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 1000px; margin: 40px auto; color: black; }
.title { font-size: 80px; text-transform: uppercase; margin-bottom: 64px; text-align: center; line-height: 1; letter-spacing: -0.05em; }
.cart-table { width: 100%; border-collapse: collapse; }
.cart-table th { text-align: left; font-size: 12px; letter-spacing: 0.2em; border-bottom: 8px solid black; padding-bottom: 16px; }
.cart-table th.center { text-align: center; }
.cart-table th.right { text-align: right; }
.cart-table td { border-bottom: 4px solid black; padding: 32px 0; }
.item-info { display: flex; align-items: center; gap: 32px; }
.item-info .img-box { width: 96px; height: 96px; background: #f8fafc; border: 4px solid black; transform: rotate(-3deg); padding: 8px; transition: 0.2s; }
.item-info:hover .img-box { transform: rotate(0deg); }
.item-info img { width: 100%; height: 100%; object-fit: contain; filter: grayscale(1); }
.name { font-size: 24px; text-transform: uppercase; margin-bottom: 8px; }
.remove-btn { font-size: 10px; text-transform: uppercase; text-decoration: underline; background: none; border: none; cursor: pointer; opacity: 0.5; }
.remove-btn:hover { opacity: 1; color: #ef4444; }
.cart-table td.center { text-align: center; }
.cart-table td.right { text-align: right; }
.cart-table input { width: 80px; padding: 16px; border: 4px solid black; font-family: inherit; font-weight: 900; text-align: center; background: transparent; font-size: 20px; }
.price { font-size: 24px; }
.summary { margin-top: 64px; display: flex; flex-direction: column; align-items: flex-end; }
.summary .row { display: flex; justify-content: space-between; width: 100%; max-width: 400px; font-size: 32px; text-transform: uppercase; margin-bottom: 32px; }
.checkout-btn { width: 100%; max-width: 400px; background: black; color: white; border: 4px solid black; padding: 32px; font-size: 32px; font-weight: 900; text-transform: uppercase; cursor: pointer; box-shadow: 12px 12px 0 0 #000; transition: all 0.2s; font-family: inherit; font-style: inherit; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">04. Void Minimalist Table</span>
          <CartTable />
        </section>

        {/* 05. UPSELL */}
        <section className='box-shadow p-4 rounded-lg relative group/cart bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cart:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const CartUpsell = () => (
  <div className="w-full max-w-md mx-auto px-4 font-sans italic font-bold text-left text-black italic">
    <div className="bg-white border-[8px] border-black p-8 shadow-[24px_24px_0_0_#ec4899] min-w-0 italic text-left italic">
      <h2 className="text-3xl font-black uppercase mb-8 border-b-4 border-black pb-2 italic text-left italic">MY_STASH</h2>
      <div className="space-y-6 mb-12 italic text-left italic">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center italic text-left italic">
            <div className="flex items-center gap-4 italic text-left italic">
              <img src="IMAGE_URL" className="w-16 h-16 border-2 border-black italic text-left" alt="" />
              <div>
                <div className="font-black text-sm italic text-left italic uppercase">MESH_HEADPHONES_V1</div>
                <div className="opacity-50 text-xs italic text-left italic">$250</div>
              </div>
            </div>
            <span className="bg-black text-white px-2 italic text-left italic font-black text-xs">x1</span>
          </div>
        ))}
      </div>
      <button className="w-full bg-pink-600 text-white py-6 text-xl font-black uppercase border-4 border-black shadow-[8px_8px_0_0_#000] hover:bg-black transition-all italic">CHECKOUT_ // $649</button>
    </div>
  </div>
);`}
              htmlCode={`<div class="upsell-cart-root">
  <h2 class="title">MY_STASH</h2>
  <div class="items-list">
    <div class="item">
      <div class="info">
        <div class="img-box"><img src="IMAGE_URL" /></div>
        <div class="txt">
          <h4>MESH_HEADPHONES_V1</h4>
          <p>$250</p>
        </div>
      </div>
      <span class="qty">x1</span>
    </div>
  </div>
  <div class="upsell-box">
    <h3>OPTIMIZE_YOUR_ORDER</h3>
    <div class="scroller">
      <div class="u-card">
        <div class="u-img"></div>
        <div class="u-name">MESH_CASE_V9</div>
        <div class="u-bot">
          <span>$29</span>
          <button>+</button>
        </div>
      </div>
    </div>
  </div>
  <button class="checkout-btn">CHECKOUT_ // $649</button>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.upsell-cart-root { background: white; border: 8px solid black; padding: 32px; box-shadow: 24px 24px 0 0 #ec4899; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 400px; margin: 40px auto; color: black; }
.title { font-size: 24px; text-transform: uppercase; border-bottom: 4px solid black; padding-bottom: 8px; margin-bottom: 32px; }
.items-list { margin-bottom: 48px; }
.item { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
.item .info { display: flex; align-items: center; gap: 16px; }
.item .img-box { width: 64px; height: 64px; border: 2px solid black; }
.item .img-box img { width: 100%; height: 100%; object-fit: contain; }
.item h4 { font-size: 14px; text-transform: uppercase; }
.item p { font-size: 12px; opacity: 0.5; }
.item .qty { background: black; color: white; padding: 2px 8px; font-size: 12px; }
.upsell-box { background: #fdf2f8; border: 4px solid black; padding: 24px; box-shadow: 8px 8px 0 0 #000; margin-bottom: 32px; }
.upsell-box h3 { font-size: 14px; text-transform: uppercase; color: #be185d; margin-bottom: 16px; }
.scroller { display: flex; gap: 16px; overflow-x: auto; padding-bottom: 8px; }
.u-card { flex-shrink: 0; width: 128px; background: white; border: 2px solid black; padding: 8px; }
.u-img { width: 100%; height: 80px; background: #f1f5f9; border-bottom: 2px solid black; margin-bottom: 8px; }
.u-name { font-size: 10px; text-transform: uppercase; margin-bottom: 4px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.u-bot { display: flex; justify-content: space-between; align-items: center; }
.u-bot span { font-size: 10px; }
.u-bot button { background: black; color: white; border: none; padding: 4px 8px; font-size: 10px; font-weight: 900; cursor: pointer; transition: 0.2s; }
.u-bot button:hover { background: #ec4899; }
.checkout-btn { width: 100%; background: #db2777; color: white; border: 4px solid black; padding: 24px; font-size: 20px; font-weight: 900; text-transform: uppercase; cursor: pointer; box-shadow: 8px 8px 0 0 #000; transition: all 0.2s; font-family: inherit; font-style: inherit; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">05. Growth Cross-sell Focus</span>
          <CartUpsell />
        </section>

        {/* 06. MOBILE */}
        <section className='box-shadow p-4 rounded-lg relative group/cart bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cart:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const CartMobile = () => (
  <div className="w-full max-w-sm mx-auto px-4 font-sans italic font-bold text-left text-black italic">
    <div className="bg-slate-50 border-[8px] border-black h-[650px] relative overflow-hidden flex flex-col italic text-left italic">
      <div className="bg-white p-6 border-b-8 border-black text-center shadow-[0_4px_0_0_#000] z-10 italic text-left italic">
        <span className="text-2xl font-black uppercase italic text-left italic">MESH_BAG</span>
      </div>
      <div className="flex-1 overflow-y-auto p-6 space-y-6 italic text-left italic">
        <div className="bg-white border-4 border-black p-4 flex gap-4 shadow-[8px_8px_0_0_#000] italic text-left italic">
           <div className="w-20 h-20 bg-slate-100 border-2 border-black flex-shrink-0 italic text-left italic"><img src="IMAGE_URL" className="w-full h-full object-contain italic text-left" alt="" /></div>
           <div className="flex-1 flex flex-col justify-between italic text-left italic">
              <h4 className="font-black text-xs uppercase leading-tight italic text-left italic">MESH_HEADPHONES_V1</h4>
              <div className="flex justify-between items-center italic text-left italic">
                 <span className="font-black italic text-left italic">$250</span>
                 <div className="flex items-center border-2 border-black italic text-left italic">
                    <button className="px-2 italic text-left">-</button>
                    <span className="px-4 text-xs italic text-left">1</span>
                    <button className="px-2 italic text-left">+</button>
                 </div>
              </div>
           </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-white border-t-8 border-black p-6 shadow-[0_-8px_20px_rgba(0,0,0,0.1)] italic text-left italic">
        <div className="flex justify-between text-2xl font-black uppercase mb-6 italic text-left italic">
          <span className="opacity-40 italic text-left italic">TOTAL</span>
          <span className="italic text-left italic">$649</span>
        </div>
        <button className="w-full bg-black text-white py-5 text-2xl font-black uppercase border-4 border-black shadow-[8px_8px_0_0_#facc15] italic">CHECKOUT_</button>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="mobile-cart-root">
  <div class="header">
    <span class="title">MESH_BAG</span>
  </div>
  <div class="items-area">
    <div class="m-item">
      <div class="m-img"><img src="IMAGE_URL" /></div>
      <div class="m-info">
        <h4>MESH_HEADPHONES_V1</h4>
        <div class="m-bot">
          <span class="m-price">$250</span>
          <div class="m-qty">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="sticky-footer">
    <div class="f-row">
      <span class="lbl">TOTAL</span>
      <span class="val">$649</span>
    </div>
    <button class="checkout-btn">CHECKOUT_</button>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.mobile-cart-root { background: #f8fafc; border: 8px solid black; height: 650px; display: flex; flex-direction: column; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 350px; margin: 40px auto; position: relative; overflow: hidden; }
.header { background: white; padding: 24px; border-bottom: 8px solid black; text-align: center; box-shadow: 0 4px 0 0 #000; z-index: 10; }
.header .title { font-size: 24px; text-transform: uppercase; }
.items-area { flex: 1; overflow-y: auto; padding: 24px; }
.m-item { background: white; border: 4px solid black; padding: 16px; display: flex; gap: 16px; box-shadow: 8px 8px 0 0 #000; margin-bottom: 24px; }
.m-img { width: 80px; height: 80px; background: #f1f5f9; border: 2px solid black; flex-shrink: 0; }
.m-img img { width: 100%; height: 100%; object-fit: contain; }
.m-info { flex: 1; display: flex; flex-direction: column; justify-content: space-between; }
.m-info h4 { font-size: 12px; text-transform: uppercase; line-height: 1.2; margin: 0; }
.m-bot { display: flex; justify-content: space-between; align-items: center; }
.m-price { font-size: 16px; }
.m-qty { display: flex; border: 2px solid black; }
.m-qty button { border: none; background: transparent; padding: 4px 8px; cursor: pointer; font-family: inherit; font-weight: 900; }
.m-qty span { font-size: 12px; border-left: 2px solid black; border-right: 2px solid black; padding: 4px 12px; }
.sticky-footer { position: absolute; bottom: 0; left: 0; width: 100%; background: white; border-top: 8px solid black; padding: 24px; box-shadow: 0 -8px 20px rgba(0,0,0,0.1); }
.f-row { display: flex; justify-content: space-between; font-size: 24px; text-transform: uppercase; margin-bottom: 24px; }
.f-row .lbl { opacity: 0.4; }
.checkout-btn { width: 100%; background: black; color: white; border: 4px solid black; padding: 20px; font-size: 24px; font-weight: 900; text-transform: uppercase; cursor: pointer; box-shadow: 8px 8px 0 0 #facc15; transition: all 0.2s; font-family: inherit; font-style: inherit; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">06. Signal Mobile First</span>
          <CartMobile />
        </section>

        {/* 07. GLASS */}
        <section className='box-shadow p-4 rounded-lg relative group/cart bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cart:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const CartGlass = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-white italic">
    <div className="relative h-[650px] rounded-[3rem] overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 flex items-center justify-center italic text-left italic">
      <div className="relative bg-white/10 backdrop-blur-2xl border-[6px] border-white/20 p-12 rounded-[2.5rem] shadow-2xl w-full max-w-md h-full flex flex-col italic text-left italic">
        <h2 className="text-4xl font-black uppercase mb-10 border-b-4 border-white/20 pb-4 italic text-left italic">BAG_SYNC</h2>
        <div className="flex-1 overflow-y-auto space-y-6 pr-2 italic text-left italic">
          <div className="flex gap-6 p-4 bg-white/5 border-2 border-white/10 rounded-2xl hover:bg-white/10 transition-colors italic text-left italic">
             <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center italic text-left"><img src="IMAGE_URL" className="w-12 h-12 object-contain brightness-0 invert italic text-left" alt=""/></div>
             <div className="flex-1 italic text-left italic">
                <h4 className="font-black text-sm uppercase truncate italic text-left italic">MESH_HEADPHONES_V1</h4>
                <div className="flex justify-between items-center mt-3 italic text-left italic">
                  <span className="text-xl italic text-left italic">$250</span>
                  <span className="text-[10px] bg-white/20 px-2 py-1 rounded italic text-left italic">NODE_01</span>
                </div>
             </div>
          </div>
        </div>
        <div className="mt-10 border-t-4 border-white/20 pt-10 italic text-left italic">
          <div className="flex justify-between font-black text-3xl uppercase mb-8 italic text-left italic">
            <span>SUM_</span>
            <span>$649</span>
          </div>
          <button className="w-full bg-white text-indigo-600 py-6 text-2xl font-black uppercase rounded-2xl shadow-xl hover:scale-105 transition-transform italic text-left">VAL_&_PAY</button>
        </div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="glass-cart-root">
  <div class="blob-1"></div>
  <div class="blob-2"></div>
  <div class="glass-card">
    <h2 class="title">BAG_SYNC</h2>
    <div class="items-list">
      <div class="g-item">
        <div class="g-img-box"><img src="IMAGE_URL" /></div>
        <div class="g-info">
          <h4>MESH_HEADPHONES_V1</h4>
          <div class="g-bot">
            <span class="g-price">$250</span>
            <span class="g-badge">NODE_01</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="total-row"><span>SUM_</span><span>$649</span></div>
      <button class="pay-btn">VAL_&_PAY</button>
    </div>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.glass-cart-root { background: linear-gradient(135deg, #6366f1, #a855f7, #ec4899); border-radius: 48px; height: 650px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; color: white; max-width: 500px; margin: 40px auto; }
.blob-1 { position: absolute; top: -10%; left: -10%; width: 200px; height: 200px; background: rgba(255,255,255,0.2); border-radius: 50%; filter: blur(64px); }
.blob-2 { position: absolute; bottom: -10%; right: -10%; width: 200px; height: 200px; background: rgba(34, 211, 238, 0.2); border-radius: 50%; filter: blur(64px); }
.glass-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(24px); border: 6px solid rgba(255,255,255,0.2); padding: 48px; border-radius: 40px; width: 100%; height: 90%; display: flex; flex-direction: column; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); margin: 24px; }
.title { font-size: 40px; text-transform: uppercase; border-bottom: 4px solid rgba(255,255,255,0.2); padding-bottom: 16px; margin-bottom: 40px; }
.items-list { flex: 1; overflow-y: auto; padding-right: 8px; }
.items-list::-webkit-scrollbar { width: 4px; }
.items-list::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.3); border-radius: 10px; }
.g-item { background: rgba(255,255,255,0.05); border: 2px solid rgba(255,255,255,0.1); padding: 16px; border-radius: 20px; display: flex; gap: 24px; margin-bottom: 24px; transition: 0.2s; }
.g-item:hover { background: rgba(255,255,255,0.1); }
.g-img-box { width: 64px; height: 64px; background: rgba(255,255,255,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; }
.g-img-box img { width: 48px; filter: brightness(0) invert(1); }
.g-info { flex: 1; }
.g-info h4 { font-size: 14px; text-transform: uppercase; margin-bottom: 12px; }
.g-bot { display: flex; justify-content: space-between; align-items: center; }
.g-price { font-size: 20px; }
.g-badge { font-size: 10px; background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px; }
.footer { border-top: 4px solid rgba(255,255,255,0.2); padding-top: 40px; margin-top: 40px; }
.total-row { display: flex; justify-content: space-between; font-size: 32px; text-transform: uppercase; margin-bottom: 32px; }
.pay-btn { width: 100%; background: white; color: #6366f1; border: none; padding: 24px; font-size: 24px; font-weight: 900; text-transform: uppercase; border-radius: 20px; cursor: pointer; box-shadow: 0 10px 20px rgba(0,0,0,0.2); transition: transform 0.2s; font-family: inherit; font-style: inherit; }
.pay-btn:hover { transform: scale(1.05); }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">07. Mesh Glass Aesthetic</span>
          <CartGlass />
        </section>

        {/* 08. BRUTALIST */}
        <section className='box-shadow p-4 rounded-lg relative group/cart bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cart:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const CartBrutalist = () => (
  <div className="w-full max-w-2xl mx-auto px-4 font-sans italic font-bold text-left text-black italic">
    <div className="bg-yellow-400 border-[10px] border-black p-12 shadow-[30px_30px_0_0_#000] h-[700px] flex flex-col italic text-left italic">
      <div className="bg-white border-[8px] border-black p-6 mb-8 rotate-[-2deg] shadow-[12px_12px_0_0_#000] italic text-center italic">
        <h2 className="text-5xl font-black uppercase italic text-center italic">CART_LOCK_V1</h2>
      </div>
      <div className="flex-1 overflow-y-auto space-y-6 pr-2 italic text-left italic">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white border-4 border-black p-6 flex gap-6 items-center shadow-[10px_10px_0_0_#ff00ff] italic text-left italic">
            <div className="w-24 h-24 border-4 border-black bg-black flex-shrink-0 italic text-left italic"><img src="IMAGE_URL" className="w-full h-full object-cover grayscale contrast-150 italic text-left" alt="" /></div>
            <div className="flex-1 italic text-left italic">
              <h3 className="font-black text-xl uppercase leading-none mb-4 italic text-left italic">MESH_HEADPHONES_V1</h3>
              <div className="flex justify-between items-center italic text-left italic">
                <span className="bg-black text-white px-3 py-1 font-black text-lg italic text-left italic">$250</span>
                <div className="font-black border-4 border-black px-4 py-1 bg-white italic text-left italic">x1</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 bg-white border-[8px] border-black p-8 shadow-[12px_12px_0_0_#000] italic text-left italic">
        <div className="flex justify-between font-black text-4xl mb-8 uppercase italic text-left italic">
          <span>VAL_</span>
          <span>$649</span>
        </div>
        <button className="w-full bg-cyan-400 py-6 text-3xl font-black uppercase border-[6px] border-black hover:bg-pink-500 hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#000] transition-all italic text-left">BUY_IT_NOW_</button>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="brutal-cart-root">
  <div class="header-box">
    <h2 class="title">CART_LOCK_V1</h2>
  </div>
  <div class="items-list">
    <div class="b-item">
      <div class="b-img"><img src="IMAGE_URL" /></div>
      <div class="b-info">
        <h3>MESH_HEADPHONES_V1</h3>
        <div class="b-bot">
          <span class="price">$250</span>
          <span class="qty">x1</span>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-box">
    <div class="f-row"><span>VAL_</span><span>$649</span></div>
    <button class="buy-btn">BUY_IT_NOW_</button>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.brutal-cart-root { background: #facc15; border: 10px solid black; padding: 48px; box-shadow: 30px 30px 0 0 #000; height: 700px; display: flex; flex-direction: column; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 500px; margin: 40px auto; color: black; }
.header-box { background: white; border: 8px solid black; padding: 24px; margin-bottom: 32px; transform: rotate(-2deg); box-shadow: 12px 12px 0 0 #000; text-align: center; }
.title { font-size: 40px; text-transform: uppercase; }
.items-list { flex: 1; overflow-y: auto; }
.b-item { background: white; border: 4px solid black; padding: 24px; display: flex; gap: 24px; align-items: center; box-shadow: 10px 10px 0 0 #ff00ff; margin-bottom: 24px; }
.b-img { width: 96px; height: 96px; border: 4px solid black; background: black; flex-shrink: 0; overflow: hidden; }
.b-img img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(1) contrast(1.5); }
.b-info { flex: 1; }
.b-info h3 { font-size: 20px; text-transform: uppercase; margin-bottom: 16px; line-height: 1; }
.b-bot { display: flex; justify-content: space-between; align-items: center; }
.b-bot .price { background: black; color: white; padding: 4px 12px; font-size: 18px; }
.b-bot .qty { border: 4px solid black; padding: 4px 16px; background: white; }
.footer-box { background: white; border: 8px solid black; padding: 32px; box-shadow: 12px 12px 0 0 #000; margin-top: 40px; }
.f-row { display: flex; justify-content: space-between; font-size: 32px; text-transform: uppercase; margin-bottom: 32px; }
.buy-btn { width: 100%; background: #22d3ee; border: 6px solid black; padding: 24px; font-size: 24px; font-weight: 900; text-transform: uppercase; cursor: pointer; transition: all 0.2s; font-family: inherit; font-style: inherit; }
.buy-btn:hover { background: #ec4899; transform: translateY(-8px); box-shadow: 12px 12px 0 0 #000; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">08. Chaos Brutalist Stash</span>
          <CartBrutalist />
        </section>

        {/* 09. PROMO */}
        <section className='box-shadow p-4 rounded-lg relative group/cart bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cart:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const CartPromo = () => (
  <div className="w-full max-w-xl mx-auto px-4 font-sans italic font-bold text-left text-black italic">
    <div className="bg-white border-[10px] border-black p-10 shadow-[24px_24px_0_0_#000] min-w-0 italic text-left italic">
      <h2 className="text-4xl font-black uppercase mb-12 border-b-4 border-black pb-4 italic text-left italic">SUMMARY_INIT</h2>
      <div className="space-y-4 mb-12 italic text-left italic">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between text-lg italic text-left italic">
            <span className="opacity-60 italic text-left italic uppercase">{item.name} (X1)</span>
            <span className="font-black italic text-left italic">$250</span>
          </div>
        ))}
      </div>
      <div className="mb-12 p-8 bg-slate-50 border-4 border-black shadow-[12px_12px_0_0_#000] italic text-left italic">
        <label className="text-xs font-black text-slate-500 uppercase mb-4 block italic text-left italic">VOUCHER_PROTOCOL</label>
        <div className="flex gap-4 italic text-left italic">
          <input type="text" placeholder="MESH_ALPHA_20" className="flex-1 bg-white border-4 border-black px-4 py-4 font-black uppercase outline-none focus:bg-yellow-400 transition-colors italic text-left italic" />
          <button className="bg-black text-white px-8 py-4 font-black uppercase border-4 border-black transition-all italic text-left">VAL_</button>
        </div>
      </div>
      <div className="border-t-8 border-black pt-10 space-y-4 italic text-left italic">
        <div className="flex justify-between text-xl opacity-40 italic text-left italic"><span>SUBTOTAL</span><span>$649</span></div>
        <div className="flex justify-between text-5xl font-black text-black mt-8 italic text-left italic"><span>TOTAL</span><span>$649</span></div>
      </div>
      <button className="w-full mt-12 py-8 bg-black text-white text-3xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-all shadow-[12px_12px_0_0_#22d3ee] italic text-left">EXECUTE_SYNC</button>
    </div>
  </div>
);`}
              htmlCode={`<div class="promo-summary-root">
  <h2 class="title">SUMMARY_INIT</h2>
  <div class="items-list">
    <div class="row"><span>MESH_HEADPHONES_V1 (X1)</span><span>$250</span></div>
  </div>
  <div class="promo-box">
    <label>VOUCHER_PROTOCOL</label>
    <div class="input-row">
      <input type="text" placeholder="MESH_ALPHA_20">
      <button>VAL_</button>
    </div>
  </div>
  <div class="totals">
    <div class="sub-row"><span>SUBTOTAL</span><span>$649</span></div>
    <div class="total-row"><span>TOTAL</span><span>$649</span></div>
  </div>
  <button class="checkout-btn">EXECUTE_SYNC</button>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.promo-summary-root { background: white; border: 10px solid black; padding: 48px; box-shadow: 24px 24px 0 0 #000; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 500px; margin: 40px auto; color: black; }
.title { font-size: 40px; text-transform: uppercase; border-bottom: 4px solid black; padding-bottom: 16px; margin-bottom: 48px; }
.items-list { margin-bottom: 48px; }
.items-list .row { display: flex; justify-content: space-between; font-size: 18px; margin-bottom: 16px; opacity: 0.6; text-transform: uppercase; }
.promo-box { background: #f8fafc; border: 4px solid black; padding: 32px; box-shadow: 12px 12px 0 0 #000; margin-bottom: 48px; }
.promo-box label { font-size: 12px; color: #64748b; text-transform: uppercase; margin-bottom: 16px; display: block; }
.input-row { display: flex; gap: 16px; }
.input-row input { flex: 1; border: 4px solid black; padding: 16px; font-family: inherit; font-weight: 900; text-transform: uppercase; outline: none; transition: 0.2s; }
.input-row input:focus { background: #facc15; }
.input-row button { background: black; color: white; border: 4px solid black; padding: 16px 32px; font-size: 18px; font-weight: 900; text-transform: uppercase; cursor: pointer; transition: 0.2s; }
.totals { border-top: 8px solid black; padding-top: 40px; }
.sub-row { display: flex; justify-content: space-between; font-size: 20px; opacity: 0.4; margin-bottom: 16px; text-transform: uppercase; }
.total-row { display: flex; justify-content: space-between; font-size: 48px; text-transform: uppercase; }
.checkout-btn { width: 100%; margin-top: 48px; background: black; color: white; border: 4px solid black; padding: 32px; font-size: 32px; font-weight: 900; text-transform: uppercase; box-shadow: 12px 12px 0 0 #22d3ee; cursor: pointer; transition: 0.2s; font-family: inherit; font-style: inherit; }
.checkout-btn:hover { background: white; color: black; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">09. Voucher Protocol Focus</span>
          <CartPromo />
        </section>

        {/* 10. EMPTY */}
        <section className='box-shadow p-4 rounded-lg relative group/cart bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/cart:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const CartEmpty = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-black italic">
    <div className="bg-white border-[10px] border-black p-12 md:p-24 text-center min-w-0 italic relative overflow-hidden shadow-[32px_32px_0_0_#ef4444] italic text-center">
      <div className="absolute top-10 left-10 text-9xl opacity-5 select-none italic text-left">EMPTY</div>
      <div className="w-48 h-48 bg-black text-white border-4 border-white flex items-center justify-center text-7xl mx-auto mb-12 rotate-12 shadow-[12px_12px_0_0_#000] italic shrink-0 italic">🛒</div>
      <h2 className="text-5xl md:text-8xl font-black uppercase mb-8 leading-none italic text-center italic">GHOST_NODE.</h2>
      <p className="text-2xl uppercase mb-16 opacity-40 max-w-md mx-auto italic text-center italic">NO_PAYLOADS_DETECTED_IN_THIS_SECTOR. SCAN_FOR_NEW_ASSETS_IMMEDIATELY.</p>
      <button className="bg-black text-white px-16 py-8 text-3xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-all shadow-[16px_16px_0_0_#ef4444] italic text-center italic">START_SCANNING</button>
    </div>
  </div>
);`}
              htmlCode={`<div class="empty-cart-root">
  <div class="bg-txt">EMPTY</div>
  <div class="icon-box">🛒</div>
  <h2 class="title">GHOST_NODE.</h2>
  <p class="desc">NO_PAYLOADS_DETECTED_IN_THIS_SECTOR. SCAN_FOR_NEW_ASSETS_IMMEDIATELY.</p>
  <button class="scan-btn">START_SCANNING</button>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.empty-cart-root { background: white; border: 10px solid black; padding: 96px; text-align: center; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 800px; margin: 40px auto; color: black; position: relative; box-shadow: 32px 32px 0 0 #ef4444; overflow: hidden; }
.bg-txt { position: absolute; top: 40px; left: 40px; font-size: 160px; opacity: 0.05; pointer-events: none; z-index: 0; }
.icon-box { width: 192px; height: 192px; background: black; color: white; border: 4px solid white; display: flex; align-items: center; justify-content: center; font-size: 72px; transform: rotate(12deg); box-shadow: 12px 12px 0 0 #000; margin: 0 auto 48px; position: relative; z-index: 1; }
.title { font-size: 80px; text-transform: uppercase; line-height: 1; letter-spacing: -0.05em; margin-bottom: 32px; position: relative; z-index: 1; }
.desc { font-size: 24px; text-transform: uppercase; opacity: 0.4; max-width: 500px; margin: 0 auto 64px; line-height: 1.3; position: relative; z-index: 1; }
.scan-btn { background: black; color: white; border: 4px solid black; padding: 32px 64px; font-size: 32px; font-weight: 900; text-transform: uppercase; cursor: pointer; box-shadow: 16px 16px 0 0 #ef4444; transition: all 0.2s; position: relative; z-index: 1; font-family: inherit; font-style: inherit; }
.scan-btn:hover { background: white; color: black; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">10. Ghost Node Empty State</span>
          <CartEmpty />
        </section>

      </div>
    </div>
  );
};

export default CartGallery;