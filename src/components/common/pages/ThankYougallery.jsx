import React from 'react';
import CopyButton from '../CopyButton';

// --- Icons ---
const SuccessIcon = () => (
  <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

// --- 01. Standard SaaS ---
export const ThankYouStandard = () => (
  <div className="bg-white p-12 rounded-[2.5rem] border border-gray-100 text-center max-w-2xl mx-auto font-sans shadow-xl">
    <div className="flex justify-center mb-8">
      <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center shadow-lg shadow-green-100">
        <SuccessIcon />
      </div>
    </div>
    <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Thanks for your order!</h1>
    <p className="text-gray-500 mb-10 text-lg leading-relaxed">Your order <span className="font-bold text-gray-900">#88291</span> has been confirmed. We'll send a confirmation email to <span className="font-bold text-gray-900">sarah.j@techflow.io</span> shortly.</p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">Track Order</button>
      <button className="bg-white text-gray-600 px-8 py-4 rounded-2xl font-bold border border-gray-100 hover:bg-gray-50 transition-all">Continue Shopping</button>
    </div>
  </div>
);

// --- 02. Account Split ---
export const ThankYouSplit = () => (
  <div className="flex flex-col md:flex-row bg-white rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl max-w-5xl mx-auto font-sans text-left">
    <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center bg-gray-50 border-r border-gray-100">
      <div className="mb-10 text-left">
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mb-6">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        </div>
        <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter uppercase italic">Success.</h2>
        <p className="text-gray-500 text-lg italic">Order #9921_Node is being processed by the logistics cluster.</p>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between font-bold text-gray-400 text-sm uppercase tracking-widest"><span>Est. Delivery</span><span className="text-gray-900">Oct 28 - 30</span></div>
        <div className="flex justify-between font-bold text-gray-400 text-sm uppercase tracking-widest"><span>Service Tier</span><span className="text-blue-600">Priority_Node</span></div>
      </div>
    </div>
    <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center bg-white">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Track your shipment</h3>
      <p className="text-gray-500 mb-8 leading-relaxed">Create a password to save your order history and monitor your node clusters in real-time.</p>
      <form className="space-y-6">
        <div>
          <label className="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Set Access Key</label>
          <input type="password" placeholder="••••••••" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" />
        </div>
        <button className="w-full py-5 bg-black text-white font-black rounded-2xl hover:bg-gray-800 transition-all shadow-xl shadow-gray-200 uppercase tracking-widest text-xs italic text-center">Complete Profile</button>
      </form>
    </div>
  </div>
);

// --- 03. Glassmorphic High-Fidelity ---
export const ThankYouGlass = () => (
  <div className="min-h-[500px] bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-8 md:p-16 rounded-[4rem] flex items-center justify-center font-sans text-center overflow-hidden relative shadow-2xl">
    <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -ml-32 -mt-32"></div>
    <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-12 md:p-20 rounded-[4rem] shadow-2xl w-full max-w-2xl text-white relative z-10">
      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
         <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
      </div>
      <h2 className="text-5xl font-black uppercase mb-6 tracking-tighter italic">Payment_Synced</h2>
      <p className="text-white/70 text-xl font-medium mb-12 italic">Your order has been injected into our node network. Check your digital coordinate for updates.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-purple-600 px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-purple-50 transition-all shadow-xl">Dashboard_Link</button>
        <button className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all">Support_Node</button>
      </div>
    </div>
  </div>
);

// --- 04. Cyberpunk Digital Receipt ---
export const ThankYouCyber = () => (
  <div className="bg-black p-12 rounded-3xl border-4 border-cyan-500/30 max-w-2xl mx-auto font-mono text-left relative overflow-hidden italic font-bold">
    <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/50 animate-pulse"></div>
    <div className="mb-12 border-b-2 border-cyan-500/20 pb-8 text-left">
      <h2 className="text-4xl text-cyan-400 uppercase tracking-tighter mb-2">SIGNAL_RECEIVED_001</h2>
      <p className="text-cyan-100/40 text-xs uppercase tracking-widest">TRANSACTION_HASH: 0x98A_21B_NODE_77</p>
    </div>
    <div className="space-y-6 mb-12 text-left">
      <div className="flex justify-between text-white uppercase text-left"><span>Order_ID</span><span className="text-cyan-400">#88291-C</span></div>
      <div className="flex justify-between text-white uppercase text-left"><span>Node_Target</span><span className="text-cyan-400">sarah_jensen_04</span></div>
      <div className="flex justify-between text-white uppercase text-left"><span>Status</span><span className="text-green-500 animate-pulse">[VALIDATED]</span></div>
    </div>
    <div className="bg-cyan-500/5 p-8 border border-cyan-500/20 rounded-2xl mb-12">
      <p className="text-cyan-100/60 leading-relaxed uppercase text-sm">Your order is currently being synchronized with our global distribution nodes. Expect a physical pulse within 48-72 hours.</p>
    </div>
    <div className="flex gap-4">
      <button className="flex-1 py-4 bg-cyan-500 text-black font-black uppercase tracking-widest text-xs hover:bg-cyan-400 transition-all">VIEW_LOGS</button>
      <button className="flex-1 py-4 border-2 border-cyan-500 text-cyan-500 font-black uppercase tracking-widest text-xs hover:bg-cyan-500/10 transition-all">TERMINATE_SES</button>
    </div>
  </div>
);

// --- 05. Social Referral Hero ---
export const ThankYouSocial = () => (
  <div className="bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-16 rounded-[3rem] border border-slate-100 text-center max-w-3xl mx-auto font-sans shadow-xl relative overflow-hidden">
    <h2 className="text-5xl font-black text-gray-900 mb-4 italic uppercase tracking-tighter leading-none text-center">High-Five_Successful!</h2>
    <p className="text-slate-400 font-black uppercase tracking-widest text-xs mb-16 italic text-center">Order #88291 confirmed. Now, let's share the wealth.</p>
    <div className="bg-white p-8 rounded-[3rem] shadow-2xl mb-16 max-w-md mx-auto border border-slate-100 text-center">
      <div className="aspect-video bg-indigo-50 rounded-2xl flex items-center justify-center text-5xl mb-8 mx-auto">🎁</div>
      <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase italic">Get_20_Give_20</h3>
      <p className="text-slate-500 mb-10 italic leading-relaxed">Share your unique node link. When they make their first pulse, you both get $20 in network credits.</p>
      <div className="flex gap-2 p-2 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
        <input type="text" value="nexus.io/r/sarah_node" readOnly className="flex-1 bg-transparent px-4 font-mono text-sm font-bold text-slate-400 outline-none" />
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-lg">Copy</button>
      </div>
    </div>
    <div className="flex justify-center gap-4 text-xs font-black uppercase tracking-widest text-slate-300 italic">
      <a href="#" className="hover:text-indigo-600 transition-colors">Twitter_Signal</a>
      <span>•</span>
      <a href="#" className="hover:text-indigo-600 transition-colors">Insta_Node</a>
    </div>
  </div>
);

// --- 06. Minimalist Bauhaus ---
export const ThankYouMinimal = () => (
  <div className="bg-white p-24 rounded-none border-[12px] border-black max-w-3xl mx-auto font-sans text-left shadow-[20px_20px_0_0_#000]">
    <h1 className="text-9xl font-black text-black mb-12 tracking-tighter uppercase italic leading-[0.8] text-left">Thank<br/>You.</h1>
    <div className="w-24 h-4 bg-black mb-12"></div>
    <div className="space-y-12 mb-20 text-left">
      <p className="text-3xl font-black text-black uppercase tracking-tight italic">Order #88291 is confirmed.</p>
      <p className="text-xl text-gray-500 italic lowercase font-medium leading-relaxed max-w-md">We are currently preparing your package. A digital confirmation has been sent to your primary coordinate.</p>
    </div>
    <div className="flex flex-col sm:flex-row gap-8 text-left">
      <button className="text-2xl font-black text-black uppercase tracking-widest border-b-8 border-black pb-2 hover:bg-black hover:text-white px-4 transition-all italic text-left">Track_Order</button>
      <button className="text-2xl font-black text-gray-300 uppercase tracking-widest hover:text-black transition-all italic text-left">Home_Return</button>
    </div>
  </div>
);

// --- 07. Neumorphic Soft UI ---
export const ThankYouNeo = () => (
  <div className="bg-[#e0e5ec] p-16 md:p-24 rounded-[5rem] shadow-[30px_30px_60px_#bebebe,-30px_-30px_60px_#ffffff] text-center max-w-2xl mx-auto font-sans">
    <div className="w-24 h-24 mx-auto rounded-full p-2 bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] mb-10 overflow-hidden flex items-center justify-center">
       <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
         <SuccessIcon />
       </div>
    </div>
    <h2 className="text-4xl font-black text-slate-800 mb-4 uppercase tracking-tighter italic text-center">Soft_Confirmed</h2>
    <p className="text-slate-500 text-lg mb-12 italic leading-relaxed text-center">Your order has been successfully processed into our ecosystem. Everything is flowing perfectly.</p>
    <div className="grid grid-cols-2 gap-8">
      <button className="bg-[#e0e5ec] p-6 rounded-[30px] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all font-black uppercase tracking-widest text-[10px] text-slate-600 italic">View_Receipt</button>
      <button className="bg-[#e0e5ec] p-6 rounded-[30px] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all font-black uppercase tracking-widest text-[10px] text-blue-600 italic">Track_Delivery</button>
    </div>
  </div>
);

// --- 08. Corporate Invoice ---
export const ThankYouInvoice = () => (
  <div className="bg-white p-12 md:p-20 rounded-none border border-slate-100 shadow-2xl max-w-4xl mx-auto font-mono text-sm relative overflow-hidden text-left">
    <div className="absolute top-0 left-0 w-full h-3 bg-blue-600"></div>
    <div className="flex justify-between items-start mb-20 text-left">
      <div className="text-left">
        <h1 className="text-4xl font-black mb-2 italic tracking-tighter text-left">SUCCESS_INVOICE</h1>
        <p className="text-slate-400 font-black uppercase tracking-[0.3em] text-left">#INV-2024-88291</p>
      </div>
      <div className="text-right">
        <p className="font-black italic uppercase">TechFlow_Global_Corp</p>
        <p className="text-xs text-slate-400">AUTH_STATUS: VALIDATED</p>
      </div>
    </div>
    <div className="bg-blue-50 p-8 rounded-2xl mb-12 border border-blue-100 text-left">
      <h3 className="font-black text-blue-900 mb-2 uppercase tracking-widest text-xs italic">Order_Receipt_Summary</h3>
      <p className="text-blue-700 leading-relaxed italic">Thank you for your business. Your order has been logged and the fulfillment sequence has been initiated.</p>
    </div>
    <div className="space-y-6 mb-20 text-left">
      <div className="flex justify-between border-b border-slate-50 pb-4"><span>Order_Date:</span><span className="font-black">OCT 24, 2024</span></div>
      <div className="flex justify-between border-b border-slate-50 pb-4"><span>Ship_To:</span><span className="font-black">Sarah Jensen // Sector 07</span></div>
      <div className="flex justify-between border-b border-slate-50 pb-4 text-xl mt-8 pt-4"><span>Total_Settlement:</span><span className="font-black text-blue-600">$499.00</span></div>
    </div>
    <button className="w-full py-5 bg-black text-white font-black uppercase tracking-[0.4em] text-[10px] hover:bg-slate-800 transition-all italic shadow-xl">Execute Print Job</button>
  </div>
);

// --- 09. Retro Brutalist ---
export const ThankYouBrutalist = () => (
  <div className="bg-yellow-400 p-12 border-[10px] border-black rounded-[3rem] font-sans max-w-2xl mx-auto shadow-[20px_20px_0_0_#000] text-left">
    <div className="text-6xl mb-10 text-left">🚀</div>
    <h1 className="text-6xl font-black uppercase mb-6 leading-none italic tracking-tighter underline decoration-black decoration-[12px] underline-offset-[-5px] text-left">Order_Confirmed!</h1>
    <p className="text-2xl font-black mb-12 uppercase italic leading-tight text-left">We've received your request. The fulfillment cluster is now active.</p>
    <div className="bg-white border-8 border-black p-8 shadow-[12px_12px_0_0_#000] mb-12 text-left">
       <div className="text-xs font-black uppercase tracking-widest mb-2 text-left">Order_Node: #88291</div>
       <div className="text-3xl font-black italic uppercase text-left">Validated_Success</div>
    </div>
    <button className="bg-rose-500 text-white w-full py-6 border-8 border-black rounded-2xl font-black uppercase tracking-[0.2em] text-xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[12px_12px_0_0_#000] italic text-center">Track Package</button>
  </div>
);

// --- 10. App Download / Onboarding ---
export const ThankYouApp = () => (
  <div className="bg-slate-900 text-white p-16 rounded-[4rem] border border-slate-800 max-w-5xl mx-auto font-sans relative overflow-hidden text-left shadow-2xl">
    <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
    <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center text-left">
      <div className="text-left">
        <div className="bg-blue-600 text-white px-5 py-2 rounded-full font-black italic uppercase text-[10px] tracking-[0.3em] inline-block mb-10 shadow-lg shadow-blue-900/50">ORDER_SUCCESS</div>
        <h2 className="text-5xl font-black mb-6 uppercase italic tracking-tighter leading-[0.9] text-left">Ready to <br/><span className="text-blue-500">Scale?</span></h2>
        <p className="text-slate-400 text-lg mb-12 leading-relaxed italic text-left">Your order is on the way. Download the mobile interface to track your node in real-time and join our global collective.</p>
        <div className="flex gap-4 text-left">
           <button className="bg-white text-black px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-500 hover:text-white transition-all italic text-center">App Store</button>
           <button className="bg-slate-800 text-white border border-slate-700 px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-700 transition-all italic text-center">Play Store</button>
        </div>
      </div>
      <div className="relative aspect-square bg-slate-800 rounded-[3rem] border-4 border-slate-700 p-8 shadow-2xl group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
        <div className="w-full h-full bg-slate-900 rounded-[2rem] border border-slate-700 p-6 flex flex-col justify-center items-center text-center transform group-hover:scale-110 transition-all duration-700">
           <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center text-5xl mb-8 animate-bounce shadow-2xl shadow-blue-600/30 mx-auto">📦</div>
           <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-2 text-center">Node_Arrival</h3>
           <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] italic text-center">Est. 2d: 14h: 22m</p>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Gallery Wrapper ---

const ThankYouGallery = () => {
  const sections = [
    {
      id: 'standard',
      title: '01. Enterprise Standard Success',
      component: <ThankYouStandard />,
      jsx: `import React from 'react';

const ThankYouStandard = () => (
  <div className="bg-white p-12 rounded-[2.5rem] border border-gray-100 text-center max-w-2xl mx-auto font-sans shadow-xl">
    <div className="flex justify-center mb-8">
      <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center shadow-lg shadow-green-100">
        <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </div>
    </div>
    <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Thanks for your order!</h1>
    <p className="text-gray-500 mb-10 text-lg leading-relaxed">Your order <span className="font-bold text-gray-900">#88291</span> has been confirmed. We'll send a confirmation email shortly.</p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">Track Order</button>
      <button className="bg-white text-gray-600 px-8 py-4 rounded-2xl font-bold border border-gray-100 hover:bg-gray-50 transition-all">Continue Shopping</button>
    </div>
  </div>
);

export default ThankYouStandard;`,
      html: `<div class="thank-you-card">
  <div class="icon-wrap">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  </div>
  <h1>Thanks for your order!</h1>
  <p>Your order <strong>#88291</strong> has been confirmed. We'll send a confirmation email shortly.</p>
  <div class="actions">
    <button class="primary">Track Order</button>
    <button class="secondary">Continue Shopping</button>
  </div>
</div>`,
      css: `.thank-you-card { background: white; padding: 48px; border-radius: 40px; border: 1px solid #f3f4f6; text-align: center; max-width: 600px; margin: 0 auto; font-family: sans-serif; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
.icon-wrap { width: 96px; height: 96px; background: #f0fdf4; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 32px; box-shadow: 0 10px 15px -3px rgba(34,197,94,0.1); }
.icon-wrap svg { width: 64px; height: 64px; color: #22c55e; }
h1 { font-size: 36px; font-weight: 700; color: #111827; margin: 0 0 16px 0; letter-spacing: -0.025em; }
p { color: #6b7280; font-size: 18px; line-height: 1.6; margin-bottom: 40px; }
.actions { display: flex; flex-direction: column; gap: 16px; justify-content: center; }
@media (min-width: 640px) { .actions { flex-direction: row; } }
button { padding: 16px 32px; border-radius: 16px; font-weight: 700; cursor: pointer; transition: all 0.2s; }
button.primary { background: #2563eb; color: white; border: none; box-shadow: 0 10px 15px -3px rgba(37,99,235,0.2); }
button.primary:hover { background: #1d4ed8; }
button.secondary { background: white; color: #4b5563; border: 1px solid #f3f4f6; }
button.secondary:hover { background: #f9fafb; }`
    },
    {
      id: 'split',
      title: '02. Account Conversion Split',
      component: <ThankYouSplit />,
      jsx: `export const ThankYouSplit = () => (
  <div className="flex flex-col md:flex-row bg-white rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl max-w-5xl mx-auto font-sans text-left">
    <div className="md:w-1/2 p-16 flex flex-col justify-center bg-gray-50 border-r border-gray-100">
      <div className="mb-10 text-left">
        <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter uppercase italic">Success.</h2>
        <p className="text-gray-500 text-lg italic">Order #9921_Node is being processed by the logistics cluster.</p>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between font-bold text-gray-400 text-sm uppercase tracking-widest"><span>Est. Delivery</span><span className="text-gray-900">Oct 28 - 30</span></div>
      </div>
    </div>
    <div className="md:w-1/2 p-16 flex flex-col justify-center bg-white text-left">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Track your shipment</h3>
      <p className="text-gray-500 mb-8 leading-relaxed">Create a password to save your order history and monitor nodes.</p>
      <form className="space-y-6">
        <input type="password" placeholder="Set Access Key" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" />
        <button className="w-full py-5 bg-black text-white font-black rounded-2xl hover:bg-gray-800 transition-all shadow-xl uppercase tracking-widest text-xs italic">Complete Profile</button>
      </form>
    </div>
  </div>
);`,
      html: `<div class="thank-you-split">
  <div class="info-panel">
    <h2>Success.</h2>
    <p>Order #9921_Node is being processed by the logistics cluster.</p>
    <div class="meta">
      <span>Est. Delivery</span>
      <span>Oct 28 - 30</span>
    </div>
  </div>
  <div class="form-panel">
    <h3>Track your shipment</h3>
    <p>Create a password to save your order history and monitor nodes.</p>
    <form>
      <input type="password" placeholder="Set Access Key">
      <button type="submit">Complete Profile</button>
    </form>
  </div>
</div>`,
      css: `.thank-you-split { display: flex; flex-direction: column; background: white; border-radius: 48px; border: 1px solid #f3f4f6; max-width: 1000px; margin: 0 auto; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1); font-family: sans-serif; text-align: left; }
@media (min-width: 768px) { .thank-you-split { flex-direction: row; } }
.info-panel { flex: 1; padding: 64px; background: #f9fafb; border-right: 1px solid #f1f5f9; display: flex; flex-direction: column; justify-content: center; }
.info-panel h2 { font-size: 40px; font-weight: 900; text-transform: uppercase; font-style: italic; color: #111827; letter-spacing: -0.05em; margin-bottom: 16px; }
.info-panel p { color: #6b7280; font-size: 18px; font-style: italic; margin-bottom: 40px; }
.meta { display: flex; justify-content: space-between; font-weight: 700; color: #9ca3af; text-transform: uppercase; font-size: 14px; letter-spacing: 0.1em; }
.form-panel { flex: 1; padding: 64px; display: flex; flex-direction: column; justify-content: center; background: #ffffff; }
.form-panel h3 { font-size: 24px; font-weight: 700; color: #111827; margin-bottom: 16px; }
.form-panel p { color: #6b7280; margin-bottom: 32px; line-height: 1.6; }
form input { width: 100%; padding: 16px 24px; border-radius: 16px; background: #f9fafb; border: 1px solid #f3f4f6; margin-bottom: 24px; outline: none; }
form button { width: 100%; padding: 20px; background: #000; color: #fff; border-radius: 16px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; cursor: pointer; transition: all 0.2s; font-style: italic; }`
    },
    {
      id: 'glass',
      title: '03. Glassmorphic High-Fidelity',
      component: <ThankYouGlass />,
      jsx: `export const ThankYouGlass = () => (
  <div className="min-h-[500px] bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-16 rounded-[4rem] flex items-center justify-center font-sans text-center relative overflow-hidden">
    <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-20 rounded-[4rem] shadow-2xl w-full max-w-2xl text-white">
      <h2 className="text-5xl font-black uppercase mb-6 tracking-tighter italic text-center">Payment_Synced</h2>
      <p className="text-white/70 text-xl font-medium mb-12 italic text-center">Your order has been injected into our node network. Check your digital coordinate for updates.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-purple-600 px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-purple-50 shadow-xl">Dashboard_Link</button>
      </div>
    </div>
  </div>
);`,
      html: `<div class="glass-root">
  <div class="glass-card">
    <div class="icon-wrap">✓</div>
    <h2>Payment_Synced</h2>
    <p>Your order has been injected into our node network. Check your digital coordinate for updates.</p>
    <div class="actions">
      <button class="glass-btn primary">Dashboard_Link</button>
      <button class="glass-btn secondary">Support_Node</button>
    </div>
  </div>
</div>`,
      css: `.glass-root { min-height: 500px; background: linear-gradient(45deg, #4f46e5, #9333ea, #db2777); border-radius: 64px; display: flex; align-items: center; justify-content: center; font-family: sans-serif; position: relative; overflow: hidden; }
.glass-card { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(40px); border: 1px solid rgba(255, 255, 255, 0.2); padding: 80px; border-radius: 64px; width: 100%; max-width: 600px; text-align: center; color: white; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
.icon-wrap { width: 80px; height: 80px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 32px; font-size: 32px; font-weight: bold; }
h2 { font-size: 48px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.05em; font-style: italic; margin-bottom: 24px; }
p { font-size: 20px; color: rgba(255,255,255,0.7); font-style: italic; margin-bottom: 48px; line-height: 1.6; }
.actions { display: flex; gap: 16px; justify-content: center; flex-direction: column; }
@media (min-width: 640px) { .actions { flex-direction: row; } }
.glass-btn { padding: 16px 40px; border-radius: 16px; font-weight: 900; text-transform: uppercase; cursor: pointer; transition: all 0.2s; font-size: 12px; }
.primary { background: white; color: #7c3aed; border: none; }
.secondary { background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.2); }`
    },
    {
      id: 'cyber',
      title: '04. Cyberpunk Digital Receipt',
      component: <ThankYouCyber />,
      jsx: `export const ThankYouCyber = () => (
  <div className="bg-black p-12 rounded-3xl border-4 border-cyan-500/30 max-w-2xl mx-auto font-mono text-left relative overflow-hidden italic font-bold text-left">
    <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/50 animate-pulse"></div>
    <div className="mb-12 border-b-2 border-cyan-500/20 pb-8 text-left">
      <h2 className="text-4xl text-cyan-400 uppercase tracking-tighter mb-2 text-left">SIGNAL_RECEIVED_001</h2>
      <p className="text-cyan-100/40 text-xs uppercase tracking-widest text-left">TRANSACTION_HASH: 0x98A_21B_NODE_77</p>
    </div>
    <div className="space-y-6 mb-12 text-left">
      <div className="flex justify-between text-white uppercase text-left"><span>Order_ID</span><span className="text-cyan-400">#88291-C</span></div>
      <div className="flex justify-between text-white uppercase text-left"><span>Status</span><span className="text-green-500 animate-pulse">[VALIDATED]</span></div>
    </div>
    <div className="flex gap-4 text-left">
      <button className="flex-1 py-4 bg-cyan-500 text-black font-black uppercase tracking-widest text-xs hover:bg-cyan-400">VIEW_LOGS</button>
    </div>
  </div>
);`,
      html: `<div class="cyber-receipt">
  <div class="scan-line"></div>
  <div class="header">
    <h2>SIGNAL_RECEIVED_001</h2>
    <p>TRANSACTION_HASH: 0x98A_21B_NODE_77</p>
  </div>
  <div class="stats">
    <div class="row"><span>Order_ID</span><span class="value">#88291-C</span></div>
    <div class="row"><span>Status</span><span class="value status">[VALIDATED]</span></div>
  </div>
  <div class="message">
    <p>Your order is currently being synchronized with our global distribution nodes. Expect a physical pulse within 48-72 hours.</p>
  </div>
  <div class="actions">
    <button class="cyber-btn primary">VIEW_LOGS</button>
    <button class="cyber-btn secondary">TERMINATE_SES</button>
  </div>
</div>`,
      css: `.cyber-receipt { background: #000; padding: 48px; border-radius: 24px; border: 4px solid rgba(6, 182, 212, 0.3); max-width: 600px; margin: 0 auto; font-family: monospace; position: relative; overflow: hidden; color: white; text-align: left; }
.scan-line { position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: rgba(6, 182, 212, 0.5); animation: scan 4s linear infinite; }
@keyframes scan { 0% { top: 0; } 100% { top: 100%; } }
.header { border-bottom: 2px solid rgba(6, 182, 212, 0.2); padding-bottom: 32px; margin-bottom: 48px; }
.header h2 { font-size: 32px; color: #22d3ee; text-transform: uppercase; letter-spacing: -0.05em; margin: 0; }
.header p { color: rgba(207, 250, 254, 0.4); font-size: 12px; margin-top: 8px; letter-spacing: 0.1em; }
.stats { display: flex; flex-direction: column; gap: 24px; margin-bottom: 48px; }
.row { display: flex; justify-content: space-between; text-transform: uppercase; font-weight: bold; }
.value { color: #22d3ee; }
.status { color: #22c55e; animation: blink 1s infinite; }
@keyframes blink { 50% { opacity: 0.5; } }
.message { background: rgba(6, 182, 212, 0.05); border: 1px solid rgba(6, 182, 212, 0.2); padding: 32px; border-radius: 16px; margin-bottom: 48px; }
.message p { color: rgba(207, 250, 254, 0.6); font-size: 14px; line-height: 1.6; text-transform: uppercase; }
.actions { display: flex; gap: 16px; }
.cyber-btn { flex: 1; padding: 16px; border: none; font-weight: 900; text-transform: uppercase; cursor: pointer; font-size: 12px; letter-spacing: 0.1em; }
.primary { background: #22d3ee; color: #000; }
.secondary { background: transparent; color: #22d3ee; border: 2px solid #22d3ee; }`
    },
    {
      id: 'social',
      title: '05. Social Referral Hero',
      component: <ThankYouSocial />,
      jsx: `export const ThankYouSocial = () => (
  <div className="bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-16 rounded-[3rem] border border-slate-100 text-center max-w-3xl mx-auto font-sans shadow-xl relative overflow-hidden text-center">
    <h2 className="text-5xl font-black text-gray-900 mb-4 italic uppercase tracking-tighter leading-none text-center">High-Five_Successful!</h2>
    <p className="text-slate-400 font-black uppercase tracking-widest text-xs mb-16 italic text-center">Order #88291 confirmed.</p>
    <div className="bg-white p-8 rounded-[3rem] shadow-2xl mb-16 max-w-md mx-auto border border-slate-100 text-center">
      <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase italic text-center">Get_20_Give_20</h3>
      <p className="text-slate-500 mb-10 italic leading-relaxed text-center">Share your unique node link.</p>
      <div className="flex gap-2 p-2 bg-slate-50 rounded-2xl border border-slate-100 text-center">
        <input type="text" value="nexus.io/r/sarah_node" readOnly className="flex-1 bg-transparent px-4 font-mono text-sm font-bold text-slate-400" />
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px]">Copy</button>
      </div>
    </div>
  </div>
);`,
      html: `<div class="thank-you-social">
  <h2>High-Five_Successful!</h2>
  <p class="subtitle">Order #88291 confirmed. Now, let's share the wealth.</p>
  <div class="referral-card">
    <div class="gift-icon">🎁</div>
    <h3>Get_20_Give_20</h3>
    <p>Share your unique node link. When they make their first pulse, you both get $20 in network credits.</p>
    <div class="link-box">
      <input type="text" value="nexus.io/r/sarah_node" readonly>
      <button>Copy</button>
    </div>
  </div>
  <div class="social-footer">
    <span>Twitter_Signal</span>
    <span>Insta_Node</span>
  </div>
</div>`,
      css: `.thank-you-social { background: linear-gradient(to bottom right, #f5f3ff, #ffffff, #ecfeff); padding: 64px; border-radius: 48px; border: 1px solid #f1f5f9; max-width: 800px; margin: 0 auto; font-family: sans-serif; text-align: center; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
h2 { font-size: 48px; font-weight: 900; color: #111827; text-transform: uppercase; font-style: italic; letter-spacing: -0.05em; margin-bottom: 16px; }
.subtitle { color: #94a3b8; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.2em; font-style: italic; margin-bottom: 64px; }
.referral-card { background: white; padding: 32px; border-radius: 48px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1); border: 1px solid #f1f5f9; max-width: 448px; margin: 0 auto 64px; }
.gift-icon { font-size: 48px; background: #f5f3ff; width: 128px; height: 72px; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 32px; }
.referral-card h3 { font-size: 24px; font-weight: 900; color: #1e293b; text-transform: uppercase; font-style: italic; margin-bottom: 16px; }
.referral-card p { color: #64748b; font-style: italic; line-height: 1.6; margin-bottom: 40px; }
.link-box { display: flex; gap: 8px; background: #f8fafc; padding: 8px; border-radius: 16px; border: 1px solid #f1f5f9; }
.link-box input { flex: 1; background: transparent; border: none; padding: 0 16px; font-family: monospace; font-size: 14px; font-weight: 700; color: #94a3b8; outline: none; }
.link-box button { background: #4f46e5; color: white; border: none; padding: 12px 24px; border-radius: 12px; font-weight: 900; text-transform: uppercase; font-size: 10px; cursor: pointer; box-shadow: 0 10px 15px -3px rgba(79,70,229,0.2); }
.social-footer { color: #cbd5e1; font-weight: 900; text-transform: uppercase; font-size: 10px; letter-spacing: 0.2em; display: flex; gap: 24px; justify-content: center; font-style: italic; }`
    },
    {
      id: 'minimal',
      title: '06. Minimalist Bauhaus Typography',
      component: <ThankYouMinimal />,
      jsx: `export const ThankYouMinimal = () => (
  <div className="bg-white p-24 rounded-none border-[12px] border-black max-w-3xl mx-auto font-sans text-left shadow-[20px_20px_0_0_#000] text-left">
    <h1 className="text-9xl font-black text-black mb-12 tracking-tighter uppercase italic leading-[0.8] text-left">Thank<br/>You.</h1>
    <div className="w-24 h-4 bg-black mb-12 text-left"></div>
    <div className="space-y-12 mb-20 text-left">
      <p className="text-3xl font-black text-black uppercase tracking-tight italic text-left">Order #88291 confirmed.</p>
    </div>
    <div className="flex flex-col sm:flex-row gap-8 text-left">
      <button className="text-2xl font-black text-black uppercase tracking-widest border-b-8 border-black pb-2 italic text-left">Track_Order</button>
    </div>
  </div>
);`,
      html: `<div class="thank-you-minimal">
  <h1>Thank<br>You.</h1>
  <div class="bar"></div>
  <div class="content">
    <p class="main">Order #88291 is confirmed.</p>
    <p class="sub">We are currently preparing your package. A digital confirmation has been sent to your primary coordinate.</p>
  </div>
  <div class="actions">
    <button class="btn">Track_Order</button>
    <button class="btn ghost">Home_Return</button>
  </div>
</div>`,
      css: `.thank-you-minimal { background: #ffffff; padding: 96px; border: 12px solid #000000; max-width: 768px; margin: 0 auto; font-family: sans-serif; text-align: left; box-shadow: 20px 20px 0 0 #000000; }
h1 { font-size: 120px; font-weight: 900; color: #000; line-height: 0.8; text-transform: uppercase; font-style: italic; letter-spacing: -0.05em; margin: 0 0 48px 0; }
.bar { width: 96px; height: 16px; background: #000; margin-bottom: 48px; }
.content { margin-bottom: 80px; }
.main { font-size: 30px; font-weight: 900; color: #000; text-transform: uppercase; font-style: italic; letter-spacing: -0.025em; margin-bottom: 48px; }
.sub { font-size: 20px; color: #6b7280; font-style: italic; text-transform: lowercase; font-weight: 500; line-height: 1.6; max-width: 448px; }
.actions { display: flex; flex-direction: column; gap: 32px; }
@media (min-width: 640px) { .actions { flex-direction: row; } }
.btn { font-size: 24px; font-weight: 900; color: #000; text-transform: uppercase; font-style: italic; background: none; border: none; border-bottom: 8px solid #000; padding: 0 16px 8px 16px; cursor: pointer; transition: all 0.2s; }
.btn:hover { background: #000; color: #fff; }
.btn.ghost { color: #d1d5db; border: none; }
.btn.ghost:hover { background: none; color: #000; }`
    },
    {
      id: 'neo',
      title: '07. Neumorphic Soft Protocol',
      component: <ThankYouNeo />,
      jsx: `export const ThankYouNeo = () => (
  <div className="bg-[#e0e5ec] p-24 rounded-[5rem] shadow-[30px_30px_60px_#bebebe,-30px_-30px_60px_#ffffff] text-center max-w-2xl mx-auto font-sans text-center">
    <div className="w-24 h-24 mx-auto rounded-full p-2 bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bebebe] mb-10 overflow-hidden flex items-center justify-center text-center">
       <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center text-center">
         ✓
       </div>
    </div>
    <h2 className="text-4xl font-black text-slate-800 mb-4 uppercase tracking-tighter italic text-center">Soft_Confirmed</h2>
    <div className="grid grid-cols-2 gap-8 text-center">
      <button className="bg-[#e0e5ec] p-6 rounded-[30px] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] font-black uppercase tracking-widest text-[10px] text-slate-600 italic">View_Receipt</button>
    </div>
  </div>
);`,
      html: `<div class="thank-you-neo">
  <div class="icon-wrap">
    <div class="inner-icon">✓</div>
  </div>
  <h2>Soft_Confirmed</h2>
  <p>Your order has been successfully processed into our ecosystem. Everything is flowing perfectly.</p>
  <div class="actions">
    <button class="neo-btn">View_Receipt</button>
    <button class="neo-btn primary">Track_Delivery</button>
  </div>
</div>`,
      css: `.thank-you-neo { background: #e0e5ec; padding: 96px; border-radius: 80px; font-family: sans-serif; text-align: center; box-shadow: 30px 30px 60px #bebebe, -30px -30px 60px #ffffff; max-width: 600px; margin: 0 auto; }
.icon-wrap { width: 96px; height: 96px; background: #e0e5ec; border-radius: 50%; margin: 0 auto 40px; padding: 8px; box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff; display: flex; align-items: center; justify-content: center; }
.inner-icon { width: 64px; height: 64px; background: rgba(255,255,255,0.5); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; color: #22c55e; box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff; }
h2 { font-size: 36px; font-weight: 900; color: #1e293b; text-transform: uppercase; font-style: italic; letter-spacing: -0.05em; margin-bottom: 16px; }
p { font-size: 18px; color: #64748b; font-style: italic; margin-bottom: 48px; line-height: 1.6; }
.actions { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
.neo-btn { padding: 24px; border: none; background: #e0e5ec; border-radius: 30px; font-weight: 900; text-transform: uppercase; color: #475569; font-size: 10px; cursor: pointer; box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff; transition: all 0.2s; font-style: italic; }
.neo-btn:hover { box-shadow: inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff; }
.neo-btn.primary { color: #2563eb; }`
    },
    {
      id: 'invoice',
      title: '08. Corporate Invoice Document',
      component: <ThankYouInvoice />,
      jsx: `export const ThankYouInvoice = () => (
  <div className="bg-white p-20 rounded-none border border-slate-100 shadow-2xl max-w-4xl mx-auto font-mono text-sm relative overflow-hidden text-left">
    <div className="absolute top-0 left-0 w-full h-3 bg-blue-600 text-left"></div>
    <div className="flex justify-between items-start mb-20 text-left">
      <div className="text-left">
        <h1 className="text-4xl font-black mb-2 italic tracking-tighter text-left">SUCCESS_INVOICE</h1>
        <p className="text-slate-400 font-black uppercase tracking-[0.3em] text-left">#INV-2024-88291</p>
      </div>
    </div>
    <button className="w-full py-5 bg-black text-white font-black uppercase tracking-[0.4em] text-[10px] italic">Execute Print Job</button>
  </div>
);`,
      html: `<div class="thank-you-invoice">
  <div class="accent-bar"></div>
  <div class="header">
    <div class="title">
      <h1>SUCCESS_INVOICE</h1>
      <p class="id">#INV-2024-88291</p>
    </div>
    <div class="vendor">
      <p class="name">TechFlow_Global_Corp</p>
      <p class="status">AUTH_STATUS: VALIDATED</p>
    </div>
  </div>
  <div class="alert">
    <h3>Order_Receipt_Summary</h3>
    <p>Thank you for your business. Your order has been logged and the fulfillment sequence has been initiated.</p>
  </div>
  <div class="details">
    <div class="row"><span>Order_Date:</span><span>OCT 24, 2024</span></div>
    <div class="row"><span>Ship_To:</span><span>Sarah Jensen // Sector 07</span></div>
    <div class="row total"><span>Total_Settlement:</span><span>$499.00</span></div>
  </div>
  <button class="print-btn">Execute Print Job</button>
</div>`,
      css: `.thank-you-invoice { background: #ffffff; padding: 64px; border: 1px solid #f1f5f9; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1); max-width: 800px; margin: 0 auto; font-family: monospace; position: relative; overflow: hidden; text-align: left; }
.accent-bar { position: absolute; top: 0; left: 0; width: 100%; height: 12px; background: #2563eb; }
.header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 80px; }
.title h1 { font-size: 36px; font-weight: 900; margin: 0 0 8px 0; font-style: italic; letter-spacing: -0.05em; }
.title .id { color: #94a3b8; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; font-size: 12px; }
.vendor { text-align: right; }
.vendor .name { font-weight: 900; text-transform: uppercase; font-style: italic; margin: 0 0 8px 0; }
.vendor .status { font-size: 10px; color: #94a3b8; font-weight: 700; }
.alert { background: #eff6ff; padding: 32px; border-radius: 16px; border: 1px solid #dbeafe; margin-bottom: 48px; }
.alert h3 { font-size: 12px; font-weight: 900; text-transform: uppercase; color: #1e3a8a; letter-spacing: 0.1em; font-style: italic; margin-bottom: 8px; }
.alert p { color: #1d4ed8; font-style: italic; line-height: 1.6; margin: 0; }
.details { display: flex; flex-direction: column; gap: 24px; margin-bottom: 80px; }
.row { display: flex; justify-content: space-between; border-bottom: 1px solid #f8fafc; padding-bottom: 16px; font-size: 14px; }
.total { font-size: 24px; font-weight: 900; font-style: italic; border: none; margin-top: 32px; color: #2563eb; }
.print-btn { width: 100%; padding: 20px; background: #000; color: #fff; border: none; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; cursor: pointer; font-size: 10px; font-style: italic; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }`
    },
    {
      id: 'brutalist',
      title: '09. Retro Brutalist Success',
      component: <ThankYouBrutalist />,
      jsx: `export const ThankYouBrutalist = () => (
  <div className="bg-yellow-400 p-12 border-[10px] border-black rounded-[3rem] font-sans max-w-2xl mx-auto shadow-[20px_20px_0_0_#000] text-left">
    <h1 className="text-6xl font-black uppercase mb-6 italic underline decoration-black decoration-[12px] text-left">Order_Confirmed!</h1>
    <p className="text-2xl font-black mb-12 uppercase italic text-left">We've received your request.</p>
    <button className="bg-rose-500 text-white w-full py-6 border-8 border-black rounded-2xl font-black uppercase text-xl shadow-[12px_12px_0_0_#000] italic text-center">Track Package</button>
  </div>
);`,
      html: `<div class="thank-you-brutalist">
  <div class="icon">🚀</div>
  <h1>Order_Confirmed!</h1>
  <p>We've received your request. The fulfillment cluster is now active.</p>
  <div class="node-box">
    <div class="label">Order_Node: #88291</div>
    <div class="status">Validated_Success</div>
  </div>
  <button class="track-btn">Track Package</button>
</div>`,
      css: `.thank-you-brutalist { background: #facc15; padding: 48px; border: 10px solid #000; border-radius: 48px; max-width: 600px; margin: 0 auto; text-align: left; box-shadow: 20px 20px 0 0 #000; font-family: sans-serif; }
.icon { font-size: 64px; margin-bottom: 40px; }
h1 { font-size: 56px; font-weight: 900; text-transform: uppercase; font-style: italic; text-decoration: underline 12px #000; text-underline-offset: -5px; margin: 0 0 24px 0; letter-spacing: -0.05em; line-height: 1; }
p { font-size: 24px; font-weight: 900; text-transform: uppercase; font-style: italic; line-height: 1.1; margin-bottom: 48px; }
.node-box { background: #fff; border: 8px solid #000; padding: 32px; box-shadow: 12px 12px 0 0 #000; margin-bottom: 48px; }
.label { font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px; }
.status { font-size: 30px; font-weight: 900; text-transform: uppercase; font-style: italic; }
.track-btn { width: 100%; padding: 24px; background: #f43f5e; color: #fff; border: 8px solid #000; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 20px; font-style: italic; letter-spacing: 0.2em; cursor: pointer; box-shadow: 12px 12px 0 0 #000; transition: all 0.1s; }
.track-btn:hover { transform: translate(4px, 4px); box-shadow: 8px 8px 0 0 #000; }`
    },
    {
      id: 'app',
      title: '10. Mobile App & Next Steps',
      component: <ThankYouApp />,
      jsx: `export const ThankYouApp = () => (
  <div className="bg-slate-900 text-white p-16 rounded-[4rem] border border-slate-800 max-w-5xl mx-auto font-sans relative overflow-hidden text-left shadow-2xl">
    <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center text-left">
      <div className="text-left">
        <h2 className="text-5xl font-black mb-6 uppercase italic tracking-tighter text-left">Ready to Scale?</h2>
        <p className="text-slate-400 text-lg mb-12 italic text-left">Your order is on the way. Download the app.</p>
        <button className="bg-white text-black px-10 py-4 rounded-2xl font-black uppercase text-[10px] italic text-center">App Store</button>
      </div>
    </div>
  </div>
);`,
      html: `<div class="thank-you-app">
  <div class="glow"></div>
  <div class="grid">
    <div class="content">
      <div class="badge">ORDER_SUCCESS</div>
      <h2>Ready to <br> <span>Scale?</span></h2>
      <p>Your order is on the way. Download the mobile interface to track your node in real-time and join our global collective.</p>
      <div class="app-btns">
        <button class="app-btn dark">App Store</button>
        <button class="app-btn light">Play Store</button>
      </div>
    </div>
    <div class="visual">
      <div class="mockup">
        <div class="inner">
          <div class="box-icon">📦</div>
          <h3>Node_Arrival</h3>
          <p>Est. 2d: 14h: 22m</p>
        </div>
      </div>
    </div>
  </div>
</div>`,
      css: `.thank-you-app { background: #0f172a; padding: 80px; border-radius: 64px; border: 1px solid #1e293b; max-width: 1000px; margin: 0 auto; font-family: sans-serif; position: relative; overflow: hidden; color: white; text-align: left; }
.glow { position: absolute; top: -200px; right: -200px; width: 600px; height: 600px; background: rgba(37,99,235,0.1); border-radius: 50%; filter: blur(120px); }
.grid { display: grid; grid-template-columns: 1fr; gap: 64px; align-items: center; position: relative; z-index: 1; }
@media (min-width: 768px) { .grid { grid-template-columns: 1fr 1fr; } }
.badge { background: #2563eb; padding: 8px 20px; border-radius: 999px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; display: inline-block; margin-bottom: 40px; font-style: italic; }
h2 { font-size: 64px; font-weight: 900; text-transform: uppercase; font-style: italic; letter-spacing: -0.05em; line-height: 0.9; margin: 0 0 24px 0; }
h2 span { color: #3b82f6; }
p { color: #94a3b8; font-size: 18px; line-height: 1.6; font-style: italic; margin-bottom: 48px; }
.app-btns { display: flex; gap: 16px; }
.app-btn { padding: 16px 40px; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 10px; letter-spacing: 0.1em; cursor: pointer; transition: all 0.2s; font-style: italic; }
.app-btn.dark { background: white; color: black; border: none; }
.app-btn.light { background: #1e293b; color: white; border: 1px solid #334155; }
.visual { position: relative; }
.mockup { aspect-ratio: 1; background: #1e293b; border: 4px solid #334155; border-radius: 48px; padding: 32px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
.inner { height: 100%; background: #0f172a; border-radius: 32px; border: 1px solid #334155; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.box-icon { font-size: 64px; margin-bottom: 32px; animation: bounce 2s infinite; }
@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
.inner h3 { font-size: 24px; font-weight: 900; text-transform: uppercase; font-style: italic; margin-bottom: 8px; }
.inner p { font-size: 10px; color: #64748b; font-weight: 900; text-transform: uppercase; margin: 0; }`
    }
  ];

  return (
    <div className="container overflow-y-auto bg-slate-100 p-6 md:p-12 font-sans pb-64 text-gray-900">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-none underline decoration-blue-500 decoration-8 underline-offset-[-5px]">Success Signals</h1>
        <p className="text-slate-500 font-bold text-xl italic lowercase">High-fidelity confirmation nodes for post-purchase excellence.</p>
      </div>

      <div className="space-y-40 max-w-6xl mx-auto">
        {sections.map(section => (
          <section key={section.id} className="bg-white p-4 rounded-[2.5rem] relative group/than border border-slate-200 shadow-xl overflow-hidden">
            <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/than:opacity-100 transition-opacity">
              <CopyButton 
                jsxCode={section.jsx}
                htmlCode={section.html}
                cssCode={section.css}
              />
            </div>
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] block text-center mb-10 italic text-center">{section.title}</span>
            <div className="rounded-[2rem] overflow-hidden bg-slate-50/50 p-4 shadow-inner">
              {section.component}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ThankYouGallery;