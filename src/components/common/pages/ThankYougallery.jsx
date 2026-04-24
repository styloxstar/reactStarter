import React from 'react';
import CopyButton from '../CopyButton';

// --- SHARED DATA ---
const orderMeta = {
  id: "ORD-88291_ALPHA",
  date: "2024.10.24",
  email: "ALEX@MESH.NETWORK",
  total: "$240",
  points: 150
};

// --- ACTUAL UI COMPONENTS ---

export const ThankYouAlpha = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[10px] border-black p-6 md:p-12 shadow-[24px_24px_0_0_#000] text-center min-w-0">
      <div className="w-24 h-24 bg-black text-white border-[6px] border-black flex items-center justify-center mx-auto mb-10 rotate-3 shadow-[8px_8px_0_0_#22c55e] shrink-0">
        <span className="text-5xl italic font-black">✓</span>
      </div>
      <h2 className="text-4xl md:text-8xl font-black uppercase mb-4 tracking-tighter leading-none italic text-center break-words italic">THANK_YOU.</h2>
      <p className="text-lg md:text-2xl uppercase mb-12 border-b-4 border-black pb-6 inline-block text-center truncate max-w-full italic">MANIFEST_ID: {orderMeta.id}</p>
      <div className="bg-green-400 border-[6px] border-black p-8 shadow-[12px_12px_0_0_#000] mb-12 min-w-0 text-left italic">
        <h3 className="text-2xl font-black uppercase mb-2">SYNC_SUCCESSFUL</h3>
        <p className="text-lg uppercase">A CONFIRMATION PACKET HAS BEEN TRANSMITTED TO {orderMeta.email}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 italic">
        <button className="bg-black text-white py-6 text-2xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-all shadow-[8px_8px_0_0_#000]">TRACK_SIGNAL</button>
        <button className="bg-white text-black py-6 text-2xl font-black uppercase border-4 border-black hover:bg-black hover:text-white transition-all shadow-[8px_8px_0_0_#000]">CONTINUE_MESH</button>
      </div>
    </div>
  </div>
);

export const ThankYouSplit = () => (
  <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="flex flex-col lg:grid lg:grid-cols-12 border-[10px] border-black bg-white shadow-[32px_32px_0_0_#000] overflow-hidden min-w-0 italic text-left">
      <div className="lg:col-span-5 bg-black text-white p-8 md:p-12 flex flex-col justify-between border-b-[10px] lg:border-b-0 lg:border-r-[10px] border-black min-w-0">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-none tracking-tighter break-words italic">MANIFEST_<br/>LOCKED.</h2>
        <div className="space-y-4 border-t-4 border-white/20 pt-8 italic">
          <div className="flex justify-between text-sm uppercase gap-4"><span className="text-gray-500">Node_ID</span><span className="truncate">#ORD-88291</span></div>
          <div className="flex justify-between text-sm uppercase gap-4"><span className="text-gray-500">Sync_Date</span><span className="shrink-0">2024.10.24</span></div>
        </div>
      </div>
      <div className="lg:col-span-7 p-8 md:p-12 bg-white min-w-0 italic text-left">
        <h3 className="text-4xl font-black uppercase mb-10 border-b-4 border-black pb-4 italic">CARGO_CONFIRMED</h3>
        <div className="bg-slate-50 border-4 border-black p-8 shadow-[12px_12px_0_0_#000] mb-12">
          <p className="text-2xl font-black uppercase mb-4 italic">ESTIMATED_DELIVERY</p>
          <p className="text-5xl font-black italic text-cyan-600">2-3 CYCLES</p>
        </div>
        <button className="w-full bg-black text-white py-6 text-2xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-all shadow-[8px_8px_0_0_#000] italic">VIEW_MANIFEST</button>
      </div>
    </div>
  </div>
);

export const ThankYouLoyalty = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[10px] border-black p-8 md:p-16 shadow-[24px_24px_0_0_#facc15] min-w-0 italic text-left">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center mb-12 gap-8">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic text-black">REWARDS_GEN.</h2>
        <div className="w-24 h-24 bg-black text-white border-4 border-white flex items-center justify-center text-5xl rotate-6 shadow-[8px_8px_0_0_#facc15] shrink-0 italic">★</div>
      </div>
      <div className="bg-black text-white p-10 border-4 border-black shadow-[16px_16px_0_0_#facc15] mb-12">
        <div className="text-xs uppercase text-yellow-400 mb-2 tracking-[0.4em]">Injected_Balance</div>
        <div className="text-5xl md:text-7xl font-black italic mb-8">+{orderMeta.points} PTS</div>
        <div className="w-full h-8 bg-white/20 border-4 border-white relative overflow-hidden">
          <div className="w-3/4 h-full bg-yellow-400 border-r-4 border-white"></div>
        </div>
        <div className="flex justify-between text-xs mt-4 uppercase"><span>Silver_Node</span><span>50 PTS TO GOLD_NODE</span></div>
      </div>
      <button className="w-full bg-black text-white py-8 text-3xl font-black uppercase border-4 border-black hover:bg-yellow-400 hover:text-black transition-all shadow-[12px_12px_0_0_#000] italic">SPEND_CREDITS</button>
    </div>
  </div>
);

export const ThankYouDownload = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-mono italic font-bold text-left text-green-500">
    <div className="bg-black border-4 border-green-500 p-8 md:p-12 shadow-[0_0_30px_rgba(34,197,94,0.2)] relative overflow-hidden min-w-0 text-left italic">
      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 italic text-white">ACCESS_GRANTED</h2>
      <div className="border-2 border-green-900 p-8 bg-green-950/20 text-left min-w-0 italic mb-12">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-green-500 text-black flex items-center justify-center text-2xl font-black italic">ZIP</div>
            <div>
              <h4 className="text-xl font-black text-white italic">MESH_ASSETS_V2.ZIP</h4>
              <p className="text-xs opacity-60 italic">145MB // SCAN_OK</p>
            </div>
          </div>
          <button className="bg-green-500 text-black px-8 py-4 font-black uppercase hover:bg-white transition-all shadow-[8px_8px_0_0_#fff] italic">DOWNLOAD_NOW</button>
        </div>
      </div>
      <p className="text-xs uppercase opacity-40 italic">EXPIRATION: 24_HOURS // ONE_TIME_LINK</p>
    </div>
  </div>
);

export const ThankYouCalendar = () => (
  <div className="w-full max-w-xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[8px] border-black p-10 shadow-[20px_20px_0_0_#6366f1] min-w-0 text-left italic">
      <div className="w-20 h-20 bg-indigo-600 text-white border-4 border-black flex items-center justify-center text-4xl mb-10 rotate-[-5deg] shadow-[8px_8px_0_0_#000] shrink-0 italic">📅</div>
      <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 leading-none italic">SYNC_SCHEDULED.</h2>
      <div className="bg-indigo-50 border-4 border-black p-6 mb-10">
        <div className="flex justify-between items-center text-xl font-black uppercase mb-4 italic"><span>Mon, Oct 24</span><span>10:00 AM</span></div>
        <p className="text-sm opacity-60 italic">MESH_CONSULTATION_ST_7</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-black text-white py-4 font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-all italic">ADD_G_CAL</button>
        <button className="bg-white text-black py-4 font-black uppercase border-4 border-black hover:bg-black hover:text-white transition-all italic">ADD_OUTLOOK</button>
      </div>
    </div>
  </div>
);

export const ThankYouReferral = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[10px] border-black p-8 md:p-16 shadow-[24px_24px_0_0_#000] text-center min-w-0 italic">
      <h2 className="text-5xl md:text-8xl font-black uppercase mb-12 tracking-tighter leading-none italic text-center italic">GROWTH_HACK.</h2>
      <div className="bg-cyan-400 border-[6px] border-black p-10 shadow-[16px_16px_0_0_#000] mb-12 text-left italic">
        <h3 className="text-3xl font-black uppercase mb-4">GIVE $20 // GET $20</h3>
        <p className="text-xl uppercase mb-8 italic">PROPAGATE THE MESH TO YOUR NODES AND EARN CREDITS FOR EVERY SUCCESSFUL LINK.</p>
        <div className="flex bg-white border-4 border-black p-2 shadow-[8px_8px_0_0_#000]">
          <input type="text" readOnly value="MESH.NET/R/ALEX20" className="flex-1 bg-transparent px-4 font-black outline-none italic" />
          <button className="bg-black text-white px-8 py-4 font-black uppercase hover:bg-cyan-600 transition-all italic">COPY_LINK</button>
        </div>
      </div>
    </div>
  </div>
);

export const ThankYouOnboarding = () => (
  <div className="w-full max-w-5xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[10px] border-black p-8 md:p-16 shadow-[32px_32px_0_0_#000] min-w-0 text-left italic">
      <h2 className="text-5xl md:text-7xl font-black uppercase mb-16 border-b-[10px] border-black pb-8 italic">NEXT_PHASE.</h2>
      <div className="grid md:grid-cols-3 gap-8 italic">
        {[
          { t: "SYNC_PROFILE", i: "👤", b: "OPEN_EDITOR" },
          { t: "JOIN_MESH", i: "💬", b: "CONNECT_DISCORD" },
          { t: "START_TRAINING", i: "🎓", b: "LOAD_MODULE" }
        ].map((step, idx) => (
          <div key={idx} className="bg-slate-50 border-4 border-black p-8 shadow-[8px_8px_0_0_#000] hover:translate-y-[-8px] transition-transform cursor-pointer group italic">
            <div className="text-5xl mb-6 group-hover:rotate-12 transition-transform italic">{step.i}</div>
            <h3 className="text-xl font-black uppercase mb-8 italic">{step.t}</h3>
            <button className="w-full bg-black text-white py-3 text-xs font-black uppercase border-2 border-black hover:bg-white hover:text-black transition-all italic">{step.b}</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ThankYouMinimal = () => (
  <div className="w-full max-w-2xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-8 border-black p-10 md:p-16 text-center min-w-0 italic">
      <h2 className="text-7xl md:text-9xl font-black uppercase mb-4 tracking-tighter leading-none italic">LOCKED.</h2>
      <p className="text-2xl uppercase mb-12 italic">TRANSACTION_SUCCESSFUL</p>
      <div className="flex justify-between pt-8 text-3xl font-black uppercase border-t-8 border-black italic">
        <span>TOTAL_SYNC</span>
        <span>{orderMeta.total}</span>
      </div>
    </div>
  </div>
);

export const ThankYouSocial = () => (
  <div className="w-full max-w-lg mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-[#ec4899] border-[10px] border-black p-10 shadow-[20px_20px_0_0_#000] min-w-0 italic text-center">
      <h2 className="text-4xl font-black text-white uppercase mb-8 italic">PROPAGATE_VIBES.</h2>
      <div className="bg-white border-[6px] border-black p-4 rotate-2 shadow-[12px_12px_0_0_#000] mb-12 italic">
        <div className="aspect-square bg-gray-100 border-4 border-black mb-4"></div>
        <div className="text-left font-black uppercase italic">MESH_WATCH_LIMITED_V1</div>
        <div className="text-left text-xs opacity-50 italic">JUST INJECTED VIA MESH.NETWORK 🔥</div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <button className="bg-black text-white py-4 font-black text-xs uppercase border-2 border-black hover:bg-white hover:text-black transition-all italic shadow-[4px_4px_0_0_#fff]">INSTA</button>
        <button className="bg-black text-white py-4 font-black text-xs uppercase border-2 border-black hover:bg-white hover:text-black transition-all italic shadow-[4px_4px_0_0_#fff]">TWITTER</button>
        <button className="bg-black text-white py-4 font-black text-xs uppercase border-2 border-black hover:bg-white hover:text-black transition-all italic shadow-[4px_4px_0_0_#fff]">MESH_X</button>
      </div>
    </div>
  </div>
);

export const ThankYouChaos = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-white">
    <div className="bg-black border-[12px] border-white p-8 md:p-16 shadow-[30px_30px_0_0_#facc15] min-w-0 italic relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-cyan-400 to-yellow-500 animate-pulse"></div>
      <h2 className="text-6xl md:text-9xl font-black uppercase mb-12 tracking-tighter leading-none italic break-words text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 italic">SUCCESS_01.</h2>
      <div className="grid md:grid-cols-2 gap-12 italic">
        <div className="border-4 border-white p-8 bg-white/5 backdrop-blur-md shadow-[12px_12px_0_0_#ff00ff] italic">
          <p className="text-2xl font-black uppercase mb-4 italic">MANIFEST_ID_CAPTURED.</p>
          <p className="opacity-60 italic">THE MESH HAS ACKNOWLEDGED YOUR PAYLOAD. WELCOME TO THE NEW WORLD.</p>
        </div>
        <div className="flex flex-col justify-end">
          <button className="bg-white text-black py-8 text-3xl font-black uppercase border-4 border-white hover:bg-transparent hover:text-white transition-all shadow-[12px_12px_0_0_#facc15] italic text-center">ACKNOWLEDGE_</button>
        </div>
      </div>
    </div>
  </div>
);

// --- MAIN GALLERY ---

const ThankYouGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-100 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16 italic">
        <h1 className="text-5xl md:text-7xl font-black text-slate-800 mb-4 uppercase italic">Thank You Galleries</h1>
        <p className="text-slate-500 font-bold uppercase tracking-widest italic">High-Fidelity Post-Purchase Restoration</p>
      </div>
      
      <div className="space-y-32 max-w-6xl mx-auto">
        
        {/* 01. ALPHA */}
        <section className='box-shadow p-4 rounded-lg relative group/than bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/than:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ThankYouAlpha = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[10px] border-black p-12 shadow-[24px_24px_0_0_#000] text-center min-w-0 italic">
      <div className="w-24 h-24 bg-black text-white border-[6px] border-black flex items-center justify-center mx-auto mb-10 rotate-3 shadow-[8px_8px_0_0_#22c55e] shrink-0">
        <span className="text-5xl font-black">✓</span>
      </div>
      <h2 className="text-7xl font-black uppercase mb-4 tracking-tighter leading-none italic break-words italic">THANK_YOU.</h2>
      <p className="text-2xl uppercase mb-12 border-b-4 border-black pb-6 inline-block text-center truncate max-w-full italic">MANIFEST_ID: ORD-88291_ALPHA</p>
      <div className="bg-green-400 border-[6px] border-black p-8 shadow-[12px_12px_0_0_#000] mb-12 text-left italic">
        <h3 className="text-2xl font-black uppercase mb-2 italic">SYNC_SUCCESSFUL</h3>
        <p className="text-lg uppercase italic">A CONFIRMATION PACKET HAS BEEN TRANSMITTED TO ALEX@MESH.NETWORK</p>
      </div>
      <div className="grid grid-cols-2 gap-6 italic">
        <button className="bg-black text-white py-6 text-2xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-all shadow-[8px_8px_0_0_#000] italic">TRACK_SIGNAL</button>
        <button className="bg-white text-black py-6 text-2xl font-black uppercase border-4 border-black hover:bg-black hover:text-white transition-all shadow-[8px_8px_0_0_#000] italic">CONTINUE_MESH</button>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="thank-you-root">
  <div class="icon">✓</div>
  <h2 class="title">THANK_YOU.</h2>
  <p class="manifest-id">MANIFEST_ID: ORD-88291_ALPHA</p>
  <div class="success-banner">
    <h3>SYNC_SUCCESSFUL</h3>
    <p>A CONFIRMATION PACKET HAS BEEN TRANSMITTED TO ALEX@MESH.NETWORK</p>
  </div>
  <div class="actions">
    <button class="btn btn-black">TRACK_SIGNAL</button>
    <button class="btn btn-white">CONTINUE_MESH</button>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.thank-you-root { background: white; border: 10px solid black; padding: 48px; box-shadow: 24px 24px 0 0 #000; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; text-align: center; color: black; max-width: 800px; margin: 40px auto; }
.icon { width: 96px; height: 96px; background: black; color: white; display: flex; align-items: center; justify-content: center; margin: 0 auto 40px; font-size: 48px; transform: rotate(3deg); box-shadow: 8px 8px 0 0 #22c55e; border: 6px solid black; }
.title { font-size: 80px; text-transform: uppercase; line-height: 1; letter-spacing: -0.05em; margin-bottom: 16px; }
.manifest-id { font-size: 24px; text-transform: uppercase; border-bottom: 4px solid black; padding-bottom: 24px; display: inline-block; margin-bottom: 48px; }
.success-banner { background: #22c55e; border: 6px solid black; padding: 32px; text-align: left; box-shadow: 12px 12px 0 0 #000; margin-bottom: 48px; }
.success-banner h3 { font-size: 24px; margin-bottom: 8px; text-transform: uppercase; }
.actions { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.btn { border: 4px solid black; padding: 24px; font-size: 24px; font-weight: 900; text-transform: uppercase; cursor: pointer; transition: all 0.2s; box-shadow: 8px 8px 0 0 #000; font-family: inherit; font-style: inherit; }
.btn-black { background: black; color: white; }
.btn-white { background: white; color: black; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">01. Alpha Protocol Success</span>
          <ThankYouAlpha />
        </section>

        {/* 02. SPLIT */}
        <section className='box-shadow p-4 rounded-lg relative group/than bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/than:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ThankYouSplit = () => (
  <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="flex flex-col lg:grid lg:grid-cols-12 border-[10px] border-black bg-white shadow-[32px_32px_0_0_#000] overflow-hidden min-w-0 italic">
      <div className="lg:col-span-5 bg-black text-white p-12 flex flex-col justify-between border-r-[10px] border-black min-w-0 italic">
        <h2 className="text-6xl font-black uppercase mb-6 leading-none tracking-tighter break-words italic">MANIFEST_<br/>LOCKED.</h2>
        <div className="space-y-4 border-t-4 border-white/20 pt-8 italic text-left">
          <div className="flex justify-between text-sm uppercase gap-4"><span className="text-gray-500">Node_ID</span><span>#ORD-88291</span></div>
          <div className="flex justify-between text-sm uppercase gap-4"><span className="text-gray-500">Sync_Date</span><span>2024.10.24</span></div>
        </div>
      </div>
      <div className="lg:col-span-7 p-12 bg-white min-w-0 italic">
        <h3 className="text-4xl font-black uppercase mb-10 border-b-4 border-black pb-4 italic text-left">CARGO_CONFIRMED</h3>
        <div className="bg-slate-50 border-4 border-black p-8 shadow-[12px_12px_0_0_#000] mb-12 italic">
          <p className="text-2xl font-black uppercase mb-4 italic text-left">ESTIMATED_DELIVERY</p>
          <p className="text-5xl font-black italic text-cyan-600 text-left">2-3 CYCLES</p>
        </div>
        <button className="w-full bg-black text-white py-6 text-2xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-all shadow-[8px_8px_0_0_#000] italic">VIEW_MANIFEST</button>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="split-thanks-root">
  <div class="sidebar">
    <h2 class="title">MANIFEST_<br>LOCKED.</h2>
    <div class="meta"><span>Node_ID</span><span>#ORD-88291</span></div>
    <div class="meta"><span>Sync_Date</span><span>2024.10.24</span></div>
  </div>
  <div class="content">
    <h3 class="heading">CARGO_CONFIRMED</h3>
    <div class="delivery-box">
      <p class="lbl">ESTIMATED_DELIVERY</p>
      <p class="val">2-3 CYCLES</p>
    </div>
    <div class="info-alert">A DIGITAL COPY OF YOUR MANIFEST HAS BEEN TRANSMITTED TO YOUR NEURAL LINK.</div>
    <button class="manifest-btn">VIEW_MANIFEST</button>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.split-thanks-root { display: flex; border: 10px solid black; background: white; box-shadow: 32px 32px 0 0 #000; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 1000px; margin: 40px auto; overflow: hidden; }
@media (max-width: 768px) { .split-thanks-root { flex-direction: column; } }
.sidebar { width: 40%; background: black; color: white; padding: 48px; border-right: 10px solid black; display: flex; flex-direction: column; justify-content: space-between; }
@media (max-width: 768px) { .sidebar { width: 100%; border-right: none; border-bottom: 10px solid black; } }
.content { width: 60%; padding: 48px; color: black; }
@media (max-width: 768px) { .content { width: 100%; } }
.title { font-size: 64px; text-transform: uppercase; line-height: 0.9; letter-spacing: -0.05em; margin-bottom: 48px; }
.meta { display: flex; justify-content: space-between; font-size: 14px; text-transform: uppercase; border-top: 2px solid rgba(255,255,255,0.2); padding-top: 16px; margin-top: 16px; }
.heading { font-size: 40px; text-transform: uppercase; border-bottom: 4px solid black; padding-bottom: 16px; margin-bottom: 40px; }
.delivery-box { background: #f8fafc; border: 4px solid black; padding: 32px; box-shadow: 12px 12px 0 0 #000; margin-bottom: 40px; }
.delivery-box .lbl { font-size: 20px; text-transform: uppercase; margin-bottom: 8px; }
.delivery-box .val { font-size: 48px; color: #0891b2; }
.info-alert { border-left: 8px solid black; padding-left: 24px; margin-bottom: 48px; font-size: 18px; opacity: 0.6; }
.manifest-btn { width: 100%; background: black; color: white; border: 4px solid black; padding: 24px; font-size: 24px; font-weight: 900; text-transform: uppercase; cursor: pointer; box-shadow: 8px 8px 0 0 #000; font-family: inherit; font-style: inherit; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">02. Manifest Split Confirmed</span>
          <ThankYouSplit />
        </section>

        {/* 03. LOYALTY */}
        <section className='box-shadow p-4 rounded-lg relative group/than bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/than:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ThankYouLoyalty = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[10px] border-black p-16 shadow-[24px_24px_0_0_#facc15] min-w-0 italic text-left">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center mb-12 gap-8 italic">
        <h2 className="text-8xl font-black uppercase tracking-tighter italic text-black italic">REWARDS_GEN.</h2>
        <div className="w-24 h-24 bg-black text-white border-4 border-white flex items-center justify-center text-5xl rotate-6 shadow-[8px_8px_0_0_#facc15] shrink-0 italic">★</div>
      </div>
      <div className="bg-black text-white p-10 border-4 border-black shadow-[16px_16px_0_0_#facc15] mb-12 italic text-left">
        <div className="text-xs uppercase text-yellow-400 mb-2 tracking-[0.4em] italic">Injected_Balance</div>
        <div className="text-7xl font-black italic mb-8 italic">+150 PTS</div>
        <div className="w-full h-8 bg-white/20 border-4 border-white relative overflow-hidden">
          <div className="w-3/4 h-full bg-yellow-400 border-r-4 border-white"></div>
        </div>
      </div>
      <button className="w-full bg-black text-white py-8 text-3xl font-black uppercase border-4 border-black hover:bg-yellow-400 hover:text-black transition-all shadow-[12px_12px_0_0_#000] italic">SPEND_CREDITS</button>
    </div>
  </div>
);`}
              htmlCode={`<div class="loyalty-thanks-root">
  <div class="header">
    <h2 class="title">REWARDS_GEN.</h2>
    <div class="star-icon">★</div>
  </div>
  <div class="points-card">
    <div class="label">Injected_Balance</div>
    <div class="val">+150 PTS</div>
    <div class="progress-container">
      <div class="progress-bar"></div>
    </div>
    <div class="footer"><span>Silver_Node</span><span>50 PTS TO GOLD_NODE</span></div>
  </div>
  <div class="message">CONGRATULATIONS. YOUR LOYALTY HAS BEEN DETECTED BY THE SYSTEM CORE. YOU HAVE BEEN UPGRADED TO SILVER STATUS.</div>
  <button class="spend-btn">SPEND_CREDITS</button>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.loyalty-thanks-root { background: white; border: 10px solid black; padding: 64px; box-shadow: 24px 24px 0 0 #facc15; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 800px; margin: 40px auto; color: black; }
.header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 48px; flex-wrap: wrap; gap: 32px; }
.title { font-size: 80px; text-transform: uppercase; line-height: 1; letter-spacing: -0.05em; }
.star-icon { width: 96px; height: 96px; background: black; color: white; display: flex; align-items: center; justify-content: center; font-size: 48px; transform: rotate(6deg); border: 4px solid white; box-shadow: 8px 8px 0 0 #facc15; }
.points-card { background: black; color: white; padding: 40px; border: 4px solid black; box-shadow: 16px 16px 0 0 #facc15; margin-bottom: 48px; text-align: left; }
.points-card .label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.4em; color: #facc15; margin-bottom: 8px; }
.points-card .val { font-size: 72px; margin-bottom: 32px; line-height: 1; }
.progress-container { width: 100%; height: 32px; background: rgba(255,255,255,0.2); border: 4px solid white; position: relative; margin-bottom: 16px; }
.progress-bar { width: 75%; height: 100%; background: #facc15; border-right: 4px solid white; }
.points-card .footer { display: flex; justify-content: space-between; font-size: 10px; text-transform: uppercase; }
.message { text-align: left; border-left: 8px solid black; padding-left: 24px; margin-bottom: 48px; font-size: 18px; opacity: 0.6; }
.spend-btn { width: 100%; background: black; color: white; border: 4px solid black; padding: 32px; font-size: 32px; font-weight: 900; text-transform: uppercase; cursor: pointer; box-shadow: 12px 12px 0 0 #000; transition: all 0.2s; font-family: inherit; font-style: inherit; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">03. Loyalty Matrix Rewards</span>
          <ThankYouLoyalty />
        </section>

        {/* 04. DOWNLOAD */}
        <section className='box-shadow p-4 rounded-lg relative group/than bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/than:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ThankYouDownload = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-mono italic font-bold text-left text-green-500 italic">
    <div className="bg-black border-4 border-green-500 p-12 shadow-[0_0_30px_rgba(34,197,94,0.2)] relative overflow-hidden min-w-0 text-left italic">
      <h2 className="text-6xl font-black uppercase tracking-tighter mb-16 italic text-white italic">ACCESS_GRANTED</h2>
      <div className="border-2 border-green-900 p-8 bg-green-950/20 text-left min-w-0 italic mb-12 italic">
        <div className="flex flex-wrap justify-between items-center gap-4 italic text-left">
          <div className="flex items-center gap-6 italic text-left">
            <div className="w-16 h-16 bg-green-500 text-black flex items-center justify-center text-2xl font-black italic">ZIP</div>
            <div>
              <h4 className="text-xl font-black text-white italic">MESH_ASSETS_V2.ZIP</h4>
              <p className="text-xs opacity-60 italic">145MB // SCAN_OK</p>
            </div>
          </div>
          <button className="bg-green-500 text-black px-8 py-4 font-black uppercase hover:bg-white transition-all shadow-[8px_8px_0_0_#fff] italic">DOWNLOAD_NOW</button>
        </div>
      </div>
      <p className="text-xs uppercase opacity-40 italic">EXPIRATION: 24_HOURS // ONE_TIME_LINK</p>
    </div>
  </div>
);`}
              htmlCode={`<div class="cyber-download-root">
  <div class="scan-line"></div>
  <h2 class="title">ACCESS_GRANTED</h2>
  <div class="download-card">
    <div class="file-info">
      <div class="file-icon">ZIP</div>
      <div class="details">
        <h4>MESH_ASSETS_V2.ZIP</h4>
        <p>145MB // SCAN_OK</p>
      </div>
    </div>
    <button class="download-btn">DOWNLOAD_NOW</button>
  </div>
  <div class="meta-info">
    <p>EXPIRATION: 24_HOURS</p>
    <p>ONE_TIME_LINK_ONLY</p>
  </div>
  <div class="footer">AUTHENTICATED_SECURE_PAYLOAD_NODE_7</div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700;900&display=swap');
.cyber-download-root { background: black; border: 4px solid #22c55e; padding: 48px; box-shadow: 0 0 30px rgba(34, 197, 94, 0.4); font-family: 'Inter', monospace; font-style: italic; font-weight: 700; color: #22c55e; max-width: 800px; margin: 40px auto; position: relative; overflow: hidden; }
.scan-line { position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: rgba(34, 197, 94, 0.5); animation: scan 3s linear infinite; }
@keyframes scan { 0% { top: 0; } 100% { top: 100%; } }
.title { font-size: 56px; font-weight: 900; color: white; text-transform: uppercase; margin-bottom: 64px; line-height: 1; letter-spacing: -0.05em; }
.download-card { background: rgba(20, 83, 45, 0.2); border: 2px solid #14532d; padding: 32px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; margin-bottom: 48px; }
.file-info { display: flex; align-items: center; gap: 24px; }
.file-icon { width: 64px; height: 64px; background: #22c55e; color: black; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 900; }
.details h4 { font-size: 20px; color: white; margin: 0 0 4px; }
.details p { font-size: 12px; opacity: 0.6; margin: 0; }
.download-btn { background: #22c55e; color: black; border: none; padding: 16px 32px; font-size: 16px; font-weight: 900; text-transform: uppercase; cursor: pointer; box-shadow: 8px 8px 0 0 #fff; transition: all 0.2s; font-family: inherit; font-style: inherit; }
.download-btn:hover { background: white; box-shadow: 8px 8px 0 0 #22c55e; }
.meta-info { display: flex; justify-content: space-between; font-size: 10px; opacity: 0.4; border-bottom: 1px solid #14532d; padding-bottom: 16px; margin-bottom: 32px; }
.footer { font-size: 10px; text-align: center; opacity: 0.3; letter-spacing: 4px; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">04. Digital Instant Access</span>
          <ThankYouDownload />
        </section>

        {/* 05. CALENDAR */}
        <section className='box-shadow p-4 rounded-lg relative group/than bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/than:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ThankYouCalendar = () => (
  <div className="w-full max-w-xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[8px] border-black p-10 shadow-[20px_20px_0_0_#6366f1] min-w-0 italic text-left">
      <div className="w-20 h-20 bg-indigo-600 text-white border-4 border-black flex items-center justify-center text-4xl mb-10 rotate-[-5deg] shadow-[8px_8px_0_0_#000] shrink-0 italic">📅</div>
      <h2 className="text-5xl font-black uppercase mb-8 leading-none italic">SYNC_SCHEDULED.</h2>
      <div className="bg-indigo-50 border-4 border-black p-6 mb-10 italic text-left">
        <div className="flex justify-between items-center text-xl font-black uppercase mb-4 italic"><span>Mon, Oct 24</span><span>10:00 AM</span></div>
        <p className="text-sm opacity-60 italic">MESH_CONSULTATION_ST_7</p>
      </div>
      <div className="grid grid-cols-2 gap-4 italic text-left">
        <button className="bg-black text-white py-4 font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-all italic">ADD_G_CAL</button>
        <button className="bg-white text-black py-4 font-black uppercase border-4 border-black hover:bg-black hover:text-white transition-all italic">ADD_OUTLOOK</button>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="calendar-thanks-root">
  <div class="cal-icon">📅</div>
  <h2 class="title">SYNC_SCHEDULED.</h2>
  <div class="event-card">
    <div class="row">
      <div class="date">Mon, Oct 24</div>
      <div class="time">10:00 AM</div>
    </div>
    <div class="divider"></div>
    <p class="desc">MESH_CONSULTATION_ST_7 // LEAD_SYNC_ Sarah_Smith</p>
  </div>
  <div class="actions">
    <button class="btn btn-black">ADD_G_CAL</button>
    <button class="btn btn-white">ADD_OUTLOOK</button>
  </div>
  <div class="footer-note">A CALENDAR INVITE HAS BEEN BROADCASTED TO YOUR REGISTERED NODE.</div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.calendar-thanks-root { background: white; border: 8px solid black; padding: 48px; box-shadow: 20px 20px 0 0 #6366f1; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 500px; margin: 40px auto; color: black; text-align: center; }
.cal-icon { width: 80px; height: 80px; background: #4f46e5; color: white; display: flex; align-items: center; justify-content: center; font-size: 40px; transform: rotate(-5deg); border: 4px solid black; box-shadow: 8px 8px 0 0 #000; margin: 0 auto 40px; }
.title { font-size: 48px; text-transform: uppercase; line-height: 1; letter-spacing: -0.05em; margin-bottom: 32px; }
.event-card { background: #eef2ff; border: 4px solid black; padding: 24px; text-align: left; margin-bottom: 40px; }
.event-card .row { display: flex; justify-content: space-between; font-size: 20px; text-transform: uppercase; }
.event-card .divider { width: 100%; height: 4px; background: black; margin: 16px 0; }
.event-card .desc { font-size: 12px; opacity: 0.6; text-transform: uppercase; }
.actions { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 32px; }
.btn { border: 4px solid black; padding: 16px; font-size: 16px; font-weight: 900; text-transform: uppercase; cursor: pointer; transition: all 0.2s; font-family: inherit; font-style: inherit; }
.btn-black { background: black; color: white; }
.btn-white { background: white; color: black; }
.footer-note { font-size: 10px; opacity: 0.5; text-transform: uppercase; line-height: 1.4; border-top: 1px solid rgba(0,0,0,0.1); padding-top: 16px; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">05. Calendar Sync Protocol</span>
          <ThankYouCalendar />
        </section>

        {/* 06. REFERRAL */}
        <section className='box-shadow p-4 rounded-lg relative group/than bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/than:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ThankYouReferral = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-black">
    <div className="bg-white border-[10px] border-black p-16 shadow-[24px_24px_0_0_#000] text-center min-w-0 italic text-left">
      <h2 className="text-8xl font-black uppercase mb-12 tracking-tighter leading-none italic text-center italic">GROWTH_HACK.</h2>
      <div className="bg-cyan-400 border-[6px] border-black p-10 shadow-[16px_16px_0_0_#000] mb-12 italic text-left">
        <h3 className="text-3xl font-black uppercase mb-4 italic text-left">GIVE $20 // GET $20</h3>
        <p className="text-xl uppercase mb-8 italic text-left">PROPAGATE THE MESH TO YOUR NODES AND EARN CREDITS FOR EVERY SUCCESSFUL LINK.</p>
        <div className="flex bg-white border-4 border-black p-2 shadow-[8px_8px_0_0_#000] italic">
          <input type="text" readOnly value="MESH.NET/R/ALEX20" className="flex-1 bg-transparent px-4 font-black outline-none italic" />
          <button className="bg-black text-white px-8 py-4 font-black uppercase hover:bg-cyan-600 transition-all italic text-left">COPY_LINK</button>
        </div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="growth-hack-root">
  <h2 class="title">GROWTH_HACK.</h2>
  <div class="promo-card">
    <h3 class="heading">GIVE $20 // GET $20</h3>
    <p class="desc">PROPAGATE THE MESH TO YOUR NODES AND EARN CREDITS FOR EVERY SUCCESSFUL LINK.</p>
    <div class="copy-box">
      <input type="text" readonly value="MESH.NET/R/ALEX20">
      <button>COPY_LINK</button>
    </div>
  </div>
  <div class="share-options">
    <div class="s-btn">FACEBOOK</div>
    <div class="s-btn">TWITTER</div>
    <div class="s-btn">WHATSAPP</div>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.growth-hack-root { background: white; border: 10px solid black; padding: 64px; box-shadow: 24px 24px 0 0 #000; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 800px; margin: 40px auto; text-align: center; color: black; }
.title { font-size: 80px; text-transform: uppercase; line-height: 1; letter-spacing: -0.05em; margin-bottom: 48px; }
.promo-card { background: #22d3ee; border: 6px solid black; padding: 40px; box-shadow: 16px 16px 0 0 #000; margin-bottom: 48px; text-align: left; }
.heading { font-size: 32px; text-transform: uppercase; margin-bottom: 16px; }
.desc { font-size: 18px; text-transform: uppercase; margin-bottom: 32px; line-height: 1.3; }
.copy-box { background: white; border: 4px solid black; padding: 8px; display: flex; box-shadow: 8px 8px 0 0 #000; }
.copy-box input { flex: 1; border: none; font-family: inherit; font-size: 18px; font-weight: 900; padding: 0 16px; outline: none; background: transparent; }
.copy-box button { background: black; color: white; border: none; padding: 16px 32px; font-size: 18px; font-weight: 900; text-transform: uppercase; cursor: pointer; transition: all 0.2s; }
.share-options { display: flex; justify-content: center; gap: 24px; flex-wrap: wrap; }
.s-btn { border: 2px solid black; padding: 12px 24px; font-size: 12px; cursor: pointer; transition: all 0.2s; }
.s-btn:hover { background: black; color: white; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">06. Propagation Growth Hack</span>
          <ThankYouReferral />
        </section>

        {/* 07. ONBOARDING */}
        <section className='box-shadow p-4 rounded-lg relative group/than bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/than:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ThankYouOnboarding = () => (
  <div className="w-full max-w-5xl mx-auto px-4 font-sans italic font-bold text-left text-black italic">
    <div className="bg-white border-[10px] border-black p-16 shadow-[32px_32px_0_0_#000] min-w-0 text-left italic">
      <h2 className="text-7xl font-black uppercase mb-16 border-b-[10px] border-black pb-8 italic text-left">NEXT_PHASE.</h2>
      <div className="grid md:grid-cols-3 gap-8 italic text-left">
        {[
          { t: "SYNC_PROFILE", i: "👤", b: "OPEN_EDITOR" },
          { t: "JOIN_MESH", i: "💬", b: "CONNECT_DISCORD" },
          { t: "START_TRAINING", i: "🎓", b: "LOAD_MODULE" }
        ].map((step, idx) => (
          <div key={idx} className="bg-slate-50 border-4 border-black p-8 shadow-[8px_8px_0_0_#000] hover:translate-y-[-8px] transition-transform cursor-pointer group italic text-left">
            <div className="text-5xl mb-6 group-hover:rotate-12 transition-transform italic text-left">{step.i}</div>
            <h3 className="text-xl font-black uppercase mb-8 italic text-left">{step.t}</h3>
            <button className="w-full bg-black text-white py-3 text-xs font-black uppercase border-2 border-black hover:bg-white hover:text-black transition-all italic text-left">{step.b}</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="onboarding-thanks-root">
  <h2 class="title">NEXT_PHASE.</h2>
  <div class="steps-grid">
    <div class="step-card">
      <div class="icon">👤</div>
      <h3>SYNC_PROFILE</h3>
      <p>UPDATE YOUR NEURAL IDENTITY FOR THE MESH.</p>
      <button>OPEN_EDITOR</button>
    </div>
    <div class="step-card">
      <div class="icon">💬</div>
      <h3>JOIN_MESH</h3>
      <p>CONNECT WITH OTHER SYNCHRONIZED NODES.</p>
      <button>CONNECT_DISCORD</button>
    </div>
    <div class="step-card">
      <div class="icon">🎓</div>
      <h3>START_TRAINING</h3>
      <p>LOAD THE CORE OPERATIONAL KNOWLEDGE.</p>
      <button>LOAD_MODULE</button>
    </div>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.onboarding-thanks-root { background: white; border: 10px solid black; padding: 64px; box-shadow: 32px 32px 0 0 #000; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 1000px; margin: 40px auto; color: black; }
.title { font-size: 72px; text-transform: uppercase; border-bottom: 10px solid black; padding-bottom: 32px; margin-bottom: 64px; line-height: 1; letter-spacing: -0.05em; }
.steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
@media (max-width: 1024px) { .steps-grid { grid-template-columns: 1fr; } }
.step-card { background: #f8fafc; border: 4px solid black; padding: 32px; box-shadow: 8px 8px 0 0 #000; transition: transform 0.2s; text-align: left; }
.step-card:hover { transform: translateY(-8px); }
.step-card .icon { font-size: 48px; margin-bottom: 24px; }
.step-card h3 { font-size: 20px; text-transform: uppercase; margin-bottom: 16px; }
.step-card p { font-size: 12px; opacity: 0.6; text-transform: uppercase; margin-bottom: 32px; min-height: 48px; }
.step-card button { width: 100%; background: black; color: white; border: 2px solid black; padding: 12px; font-size: 12px; font-weight: 900; text-transform: uppercase; cursor: pointer; transition: all 0.2s; font-family: inherit; font-style: inherit; }
.step-card button:hover { background: white; color: black; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">07. Onboarding Next Phase</span>
          <ThankYouOnboarding />
        </section>

        {/* 08. MINIMAL */}
        <section className='box-shadow p-4 rounded-lg relative group/than bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/than:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ThankYouMinimal = () => (
  <div className="w-full max-w-2xl mx-auto px-4 font-sans italic font-bold text-left text-black italic">
    <div className="bg-white border-8 border-black p-16 text-center min-w-0 italic text-left">
      <h2 className="text-9xl font-black uppercase mb-4 tracking-tighter leading-none italic text-left">LOCKED.</h2>
      <p className="text-2xl uppercase mb-12 italic text-left">TRANSACTION_SUCCESSFUL</p>
      <div className="flex justify-between pt-8 text-3xl font-black uppercase border-t-8 border-black italic text-left">
        <span>TOTAL_SYNC</span>
        <span>$240</span>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="minimal-locked-root">
  <div class="wrapper">
    <h2 class="title">LOCKED.</h2>
    <p class="status">TRANSACTION_SUCCESSFUL</p>
    <div class="divider"></div>
    <div class="total-row">
      <span>TOTAL_SYNC</span>
      <span>$240</span>
    </div>
    <button class="home-btn">RETURN_TO_BASE</button>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.minimal-locked-root { background: white; border: 10px solid black; padding: 64px; text-align: center; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 500px; margin: 40px auto; color: black; }
.title { font-size: 96px; text-transform: uppercase; line-height: 1; letter-spacing: -0.05em; margin-bottom: 16px; }
.status { font-size: 24px; text-transform: uppercase; margin-bottom: 48px; opacity: 0.6; }
.divider { width: 100%; height: 8px; background: black; margin-bottom: 32px; }
.total-row { display: flex; justify-content: space-between; font-size: 32px; text-transform: uppercase; margin-bottom: 48px; }
.home-btn { width: 100%; background: black; color: white; padding: 24px; font-size: 20px; font-weight: 900; border: none; text-transform: uppercase; cursor: pointer; transition: all 0.2s; font-family: inherit; font-style: inherit; }
.home-btn:hover { background: white; color: black; box-shadow: inset 0 0 0 4px black; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">08. Locked Minimal Confirmation</span>
          <ThankYouMinimal />
        </section>

        {/* 09. SOCIAL */}
        <section className='box-shadow p-4 rounded-lg relative group/than bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/than:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ThankYouSocial = () => (
  <div className="w-full max-w-lg mx-auto px-4 font-sans italic font-bold text-left text-black italic">
    <div className="bg-[#ec4899] border-[10px] border-black p-10 shadow-[20px_20px_0_0_#000] min-w-0 italic text-center italic">
      <h2 className="text-4xl font-black text-white uppercase mb-8 italic text-center italic">PROPAGATE_VIBES.</h2>
      <div className="bg-white border-[6px] border-black p-4 rotate-2 shadow-[12px_12px_0_0_#000] mb-12 italic text-left italic">
        <div className="aspect-square bg-gray-100 border-4 border-black mb-4 italic text-left"></div>
        <div className="text-left font-black uppercase italic text-left">MESH_WATCH_LIMITED_V1</div>
        <div className="text-left text-xs opacity-50 italic text-left">JUST INJECTED VIA MESH.NETWORK 🔥</div>
      </div>
      <div className="grid grid-cols-3 gap-4 italic text-left">
        <button className="bg-black text-white py-4 font-black text-xs uppercase border-2 border-black hover:bg-white hover:text-black transition-all italic shadow-[4px_4px_0_0_#fff] text-left">INSTA</button>
        <button className="bg-black text-white py-4 font-black text-xs uppercase border-2 border-black hover:bg-white hover:text-black transition-all italic shadow-[4px_4px_0_0_#fff] text-left">TWITTER</button>
        <button className="bg-black text-white py-4 font-black text-xs uppercase border-2 border-black hover:bg-white hover:text-black transition-all italic shadow-[4px_4px_0_0_#fff] text-left">MESH_X</button>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="social-propagation-root">
  <h2 class="title">PROPAGATE_VIBES.</h2>
  <div class="product-card">
    <div class="image-placeholder"></div>
    <div class="card-footer">
      <h4>MESH_WATCH_LIMITED_V1</h4>
      <p>JUST INJECTED VIA MESH.NETWORK 🔥</p>
    </div>
  </div>
  <p class="share-text">SHARE YOUR NEW ACQUISITION WITH THE MESH.</p>
  <div class="share-grid">
    <div class="s-link">INSTA</div>
    <div class="s-link">TWITTER</div>
    <div class="s-link">MESH_X</div>
  </div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.social-propagation-root { background: #ec4899; border: 10px solid black; padding: 48px; box-shadow: 20px 20px 0 0 #000; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 450px; margin: 40px auto; text-align: center; color: black; }
.title { font-size: 32px; text-transform: uppercase; color: white; margin-bottom: 40px; line-height: 1; }
.product-card { background: white; border: 6px solid black; padding: 16px; transform: rotate(2deg); box-shadow: 12px 12px 0 0 #000; margin-bottom: 48px; }
.image-placeholder { aspect-ratio: 1/1; background: #f3f4f6; border: 4px solid black; margin-bottom: 16px; }
.card-footer { text-align: left; }
.card-footer h4 { font-size: 16px; margin: 0 0 4px; text-transform: uppercase; }
.card-footer p { font-size: 10px; opacity: 0.5; margin: 0; text-transform: uppercase; }
.share-text { font-size: 12px; margin-bottom: 24px; color: black; text-transform: uppercase; }
.share-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.s-link { background: black; color: white; border: 2px solid black; padding: 16px 0; font-size: 10px; cursor: pointer; box-shadow: 4px 4px 0 0 #fff; transition: all 0.2s; }
.s-link:hover { background: white; color: black; transform: translate(-2px, -2px); box-shadow: 6px 6px 0 0 #fff; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">09. Propagate Social Share</span>
          <ThankYouSocial />
        </section>

        {/* 10. CHAOS */}
        <section className='box-shadow p-4 rounded-lg relative group/than bg-white border border-slate-200'>
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/than:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const ThankYouChaos = () => (
  <div className="w-full max-w-4xl mx-auto px-4 font-sans italic font-bold text-left text-white italic">
    <div className="bg-black border-[12px] border-white p-16 shadow-[30px_30px_0_0_#facc15] min-w-0 italic relative overflow-hidden italic text-left">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-cyan-400 to-yellow-500 animate-pulse italic"></div>
      <h2 className="text-9xl font-black uppercase mb-12 tracking-tighter leading-none italic break-words text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 italic text-left">SUCCESS_01.</h2>
      <div className="grid md:grid-cols-2 gap-12 italic text-left">
        <div className="border-4 border-white p-8 bg-white/5 backdrop-blur-md shadow-[12px_12px_0_0_#ff00ff] italic text-left">
          <p className="text-2xl font-black uppercase mb-4 italic text-left">MANIFEST_ID_CAPTURED.</p>
          <p className="opacity-60 italic text-left">THE MESH HAS ACKNOWLEDGED YOUR PAYLOAD. WELCOME TO THE NEW WORLD.</p>
        </div>
        <div className="flex flex-col justify-end italic text-left">
          <button className="bg-white text-black py-8 text-3xl font-black uppercase border-4 border-white hover:bg-transparent hover:text-white transition-all shadow-[12px_12px_0_0_#facc15] italic text-center italic">ACKNOWLEDGE_</button>
        </div>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<div class="chaos-success-root">
  <div class="top-glitch-bar"></div>
  <h2 class="title">SUCCESS_01.</h2>
  <div class="content-grid">
    <div class="info-card">
      <h3 class="heading">MANIFEST_ID_CAPTURED.</h3>
      <p class="desc">THE MESH HAS ACKNOWLEDGED YOUR PAYLOAD. WELCOME TO THE NEW WORLD.</p>
    </div>
    <div class="action-card">
      <button class="ack-btn">ACKNOWLEDGE_</button>
    </div>
  </div>
  <div class="scan-overlay"></div>
</div>`}
              cssCode={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.chaos-success-root { background: black; border: 12px solid white; padding: 64px; box-shadow: 30px 30px 0 0 #facc15; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; max-width: 900px; margin: 40px auto; color: white; position: relative; overflow: hidden; }
.top-glitch-bar { position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(to right, #ec4899, #22d3ee, #facc15); animation: pulse 1s infinite; }
@keyframes pulse { 0% { opacity: 0.5; } 50% { opacity: 1; } 100% { opacity: 0.5; } }
.title { font-size: 120px; text-transform: uppercase; line-height: 0.9; letter-spacing: -0.05em; margin-bottom: 64px; background: linear-gradient(to right, #22d3ee, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.content-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
@media (max-width: 768px) { .content-grid { grid-template-columns: 1fr; } }
.info-card { border: 4px solid white; padding: 32px; background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); box-shadow: 12px 12px 0 0 #ff00ff; }
.heading { font-size: 24px; text-transform: uppercase; margin-bottom: 16px; color: #ff00ff; }
.desc { font-size: 16px; opacity: 0.6; line-height: 1.4; text-transform: uppercase; }
.ack-btn { width: 100%; background: white; color: black; border: 4px solid white; padding: 32px; font-size: 32px; font-weight: 900; text-transform: uppercase; box-shadow: 12px 12px 0 0 #facc15; cursor: pointer; transition: all 0.2s; font-family: inherit; font-style: inherit; }
.scan-overlay { position: absolute; inset: 0; background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06)); background-size: 100% 2px, 3px 100%; pointer-events: none; }`}
            />
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8 text-black italic">10. Chaos Success Protocol</span>
          <ThankYouChaos />
        </section>

      </div>
    </div>
  );
};

export default ThankYouGallery;