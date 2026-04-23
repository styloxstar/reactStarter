import React, { useState } from 'react';
import CopyButton from '../CopyButton';

// --- Shared Assets ---
const CheckIcon = ({ color = "text-green-500" }) => (
  <svg className={`w-5 h-5 ${color} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
);

const CrossIcon = () => (
  <svg className="w-5 h-5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
);

// --- 1. Standard SaaS (Toggle) ---
export const PricingStandard = () => {
  const [annual, setAnnual] = useState(false);
  return (
    <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold">
      <div className="flex justify-center items-center gap-4 mb-12">
        <span className={`text-sm font-bold ${!annual ? 'text-blue-600' : 'text-gray-500'}`}>Monthly</span>
        <button onClick={() => setAnnual(!annual)} className="relative w-14 h-8 bg-gray-200 rounded-full p-1 transition-all focus:outline-none">
          <div className={`w-6 h-6 bg-blue-600 rounded-full shadow-md transform transition-transform duration-300 ${annual ? 'translate-x-6' : 'translate-x-0'}`}></div>
        </button>
        <span className={`text-sm font-bold ${annual ? 'text-blue-600' : 'text-gray-500'}`}>Yearly <span className="text-green-500 text-xs">(Save 20%)</span></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {['Starter', 'Pro', 'Enterprise'].map((plan, i) => (
          <div key={plan} className={`relative bg-white rounded-3xl border ${i === 1 ? 'border-blue-600 shadow-2xl scale-105 z-10' : 'border-gray-200'} p-10 flex flex-col`}>
            {i === 1 && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Most Popular</div>}
            <h3 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-tighter">{plan}</h3>
            <div className="flex items-baseline gap-1 mb-6"><span className="text-5xl font-black tracking-tighter">${annual ? (i + 1) * 8 : (i + 1) * 10}</span><span className="text-gray-400 text-sm">/mo</span></div>
            <p className="text-sm text-gray-500 mb-8 italic">Perfect for {i === 0 ? 'individuals' : i === 1 ? 'small teams' : 'large organizations'}.</p>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-3 text-sm text-gray-600 italic"><CheckIcon /> <span>Advanced Node Analytics 1</span></li>
              <li className="flex items-center gap-3 text-sm text-gray-600 italic"><CheckIcon /> <span>Advanced Node Analytics 2</span></li>
              <li className="flex items-center gap-3 text-sm text-gray-600 italic">{i >= 1 ? <CheckIcon /> : <CrossIcon />} <span>Advanced Node Analytics 3</span></li>
              <li className="flex items-center gap-3 text-sm text-gray-600 italic">{i === 2 ? <CheckIcon /> : <CrossIcon />} <span>Advanced Node Analytics 4</span></li>
            </ul>
            <button className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all ${i === 1 ? 'bg-blue-600 text-white shadow-xl hover:bg-blue-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>Initialize {plan}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 2. Minimalist (Clean Text) ---
export const PricingMinimal = () => (
  <div className="max-w-5xl mx-auto px-6 bg-white py-12 font-sans italic font-bold">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">Simple. Transparent.</h2>
      <p className="text-slate-500 text-lg">No hidden nodes. No setup fees.</p>
    </div>
    <div className="grid md:grid-cols-2 gap-16 divide-y md:divide-y-0 md:divide-x divide-slate-100 text-left">
      <div className="px-8">
        <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Hobby_Tier</h3>
        <div className="text-7xl font-black text-slate-900 mb-6 tracking-tighter">$0</div>
        <p className="text-slate-500 mb-10 text-lg leading-relaxed italic">For personal experiments. Includes 1GB storage and community-driven node support.</p>
        <button className="text-slate-950 font-black border-b-4 border-slate-950 pb-2 hover:text-blue-600 hover:border-blue-600 transition-all uppercase tracking-widest text-xs">Start_Free_Protocol</button>
      </div>
      <div className="px-8 pt-12 md:pt-0">
        <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Pro_Architect</h3>
        <div className="text-7xl font-black text-slate-900 mb-6 tracking-tighter">$29</div>
        <p className="text-slate-500 mb-10 text-lg leading-relaxed italic">For professional logic. Unlimited nodes, priority sync, and full API access.</p>
        <button className="px-12 py-5 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all shadow-2xl">Deploy_Pro_Node</button>
      </div>
    </div>
  </div>
);

// --- 3. Dark Mode (Developer Focus) ---
export const PricingDark = () => (
  <div className="bg-slate-950 text-white p-12 rounded-[3rem] border border-slate-800 font-mono italic font-bold">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">
        <div className="lg:col-span-1 py-8">
          <h2 className="text-4xl font-black mb-6 tracking-tighter uppercase leading-none text-blue-400">Dev_First pricing</h2>
          <p className="text-slate-500 mb-10 text-lg">Scale your logic with infrastructure that grows with your nodes.</p>
          <div className="space-y-6">
            <div className="flex items-center gap-4"><div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">✓</div><span className="text-sm font-black uppercase tracking-widest">Unlimited_API_Calls</span></div>
            <div className="flex items-center gap-4"><div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20">✓</div><span className="text-sm font-black uppercase tracking-widest">99.99%_Pulse_Rate</span></div>
          </div>
        </div>
        {['Standard', 'Enterprise'].map((plan, i) => (
          <div key={plan} className="bg-slate-900 rounded-[2rem] p-10 border border-slate-800 hover:border-blue-500 transition-all group relative">
            {i === 1 && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 px-4 py-1 rounded text-[10px] font-black uppercase tracking-widest">Recommended</div>}
            <div className="flex justify-between items-center mb-6"><h3 className="text-2xl font-black uppercase tracking-widest">{plan}</h3></div>
            <div className="text-5xl font-black mb-8 tracking-tighter">${i === 0 ? '49' : '99'}<span className="text-sm text-slate-500 font-medium lowercase">/node</span></div>
            <ul className="space-y-4 mb-12 text-sm text-slate-400 border-t border-slate-800 pt-8 uppercase tracking-widest">
              <li>{i === 0 ? '05' : '25'} Logic_Members</li>
              <li>{i === 0 ? '10k' : '100k'} Monthly_Pulses</li>
              <li>{i === 0 ? '24h' : '01h'} Sync_Response</li>
            </ul>
            <button className="w-full py-5 bg-slate-800 text-white rounded-2xl font-black uppercase tracking-widest text-xs group-hover:bg-blue-600 transition-all border border-slate-700">Select_Protocol</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 4. Comparison Table (Enterprise) ---
export const PricingTable = () => (
  <div className="w-full max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden font-sans italic font-bold">
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="uppercase tracking-widest text-[10px]">
            <th className="p-8 bg-slate-50 border-b border-gray-100 w-1/3">Feature_Matrix</th>
            <th className="p-8 bg-slate-50 border-b border-gray-100 w-1/4 text-center">
              <div className="font-black text-lg text-slate-900">Basic</div><div className="text-slate-400 font-bold">$10/mo</div>
            </th>
            <th className="p-8 bg-blue-50/30 border-b border-blue-100 w-1/4 text-center border-x border-blue-100">
              <div className="font-black text-lg text-blue-600">Pro_Node</div><div className="text-blue-400 font-bold">$29/mo</div>
            </th>
            <th className="p-8 bg-slate-50 border-b border-gray-100 w-1/4 text-center">
              <div className="font-black text-lg text-slate-900">Logic_Team</div><div className="text-slate-400 font-bold">$59/mo</div>
            </th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-600 uppercase tracking-tight">
          {[
            { name: 'Node_Users', basic: '01', pro: '05', team: '∞' },
            { name: 'Neural_Storage', basic: '10GB', pro: '100GB', team: '1TB' },
            { name: 'Analytics_Core', basic: false, pro: true, team: true },
            { name: 'Custom_Signal', basic: false, pro: true, team: true },
            { name: 'SSO_Handshake', basic: false, pro: false, team: true },
          ].map((row, i) => (
            <tr key={i} className="hover:bg-slate-50 transition-colors">
              <td className="p-6 border-b border-gray-50 font-black pl-10 text-slate-800">{row.name}</td>
              <td className="p-6 border-b border-gray-50 text-center">{typeof row.basic === 'boolean' ? (row.basic ? <CheckIcon className="mx-auto"/> : <span className="text-gray-300">-</span>) : row.basic}</td>
              <td className="p-6 border-b border-blue-50 border-x border-blue-50 text-center bg-blue-50/10">{typeof row.pro === 'boolean' ? (row.pro ? <CheckIcon className="mx-auto"/> : <span className="text-gray-300">-</span>) : row.pro}</td>
              <td className="p-6 border-b border-gray-50 text-center">{typeof row.team === 'boolean' ? (row.team ? <CheckIcon className="mx-auto"/> : <span className="text-gray-300">-</span>) : row.team}</td>
            </tr>
          ))}
          <tr>
            <td className="p-8"></td>
            <td className="p-8 text-center"><button className="px-6 py-2 border-2 border-slate-200 rounded-full text-[10px] font-black uppercase hover:bg-slate-100">Select</button></td>
            <td className="p-8 text-center border-x border-blue-100 bg-blue-50/20"><button className="px-8 py-3 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase shadow-lg hover:bg-blue-700">Initialize</button></td>
            <td className="p-8 text-center"><button className="px-6 py-2 border-2 border-slate-200 rounded-full text-[10px] font-black uppercase hover:bg-slate-100">Select</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

// --- 5. Glassmorphism (Premium) ---
export const PricingGlass = () => (
  <div className="relative w-full max-w-4xl mx-auto p-12 rounded-[4rem] overflow-hidden bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 font-sans italic font-bold">
    <div className="grid md:grid-cols-2 gap-12 relative z-10 text-left">
      <div className="text-white p-4 flex flex-col justify-center">
        <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase leading-none">Unlock_Matrix</h2>
        <p className="text-white/80 mb-10 text-xl font-medium">Get full access to all exclusive logic features and elevate your workflow.</p>
        <ul className="space-y-4 mb-8 uppercase tracking-widest text-xs">
          <li className="flex items-center gap-4"><div className="bg-white/20 p-2 rounded-xl border border-white/20"><CheckIcon color="text-white"/></div> No_Signal_Lag</li>
          <li className="flex items-center gap-4"><div className="bg-white/20 p-2 rounded-xl border border-white/20"><CheckIcon color="text-white"/></div> Priority_Node_Sync</li>
          <li className="flex items-center gap-4"><div className="bg-white/20 p-2 rounded-xl border border-white/20"><CheckIcon color="text-white"/></div> 4K_Visual_Pulse</li>
        </ul>
      </div>
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-12 rounded-[3rem] shadow-2xl text-center text-white">
        <div className="text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-70">All_Access_Pass</div>
        <div className="text-8xl font-black mb-4 tracking-tighter">$12</div>
        <div className="text-white/60 mb-12 uppercase tracking-widest text-[10px]">per node, billed yearly</div>
        <button className="w-full py-6 bg-white text-indigo-600 font-black rounded-3xl shadow-2xl hover:scale-105 transition-all uppercase tracking-widest text-xs">Start_Sync_Trial</button>
        <p className="text-[10px] mt-6 text-white/40 uppercase tracking-widest">7-day logic guarantee.</p>
      </div>
    </div>
  </div>
);

// --- 6. Single Focus (Membership) ---
export const PricingSingle = () => (
  <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl border border-gray-50 overflow-hidden flex flex-col md:flex-row font-sans italic font-bold">
    <div className="md:w-3/5 p-16 text-left">
      <h3 className="text-3xl font-black text-gray-900 mb-2 uppercase tracking-tighter">Lifetime_Logic</h3>
      <p className="text-gray-500 mb-10 text-lg">One time handshake. Unlimited access forever.</p>
      <div className="grid grid-cols-2 gap-8 mb-12 text-sm uppercase tracking-widest">
        {['All_Nodes', 'Source_Engine', 'Logic_Access', 'Neural_Certs'].map(item => (
          <div key={item} className="flex items-center gap-3 text-gray-700 font-black"><CheckIcon /> {item}</div>
        ))}
      </div>
      <div className="bg-slate-50 p-6 rounded-2xl text-sm text-slate-600 border border-slate-100 font-medium italic">
        "The best logic investment I made for my career this year." — <span className="font-black text-slate-900">Jane_Dex</span>
      </div>
    </div>
    <div className="md:w-2/5 bg-slate-50 p-16 flex flex-col items-center justify-center border-l border-gray-100 text-center">
      <div className="text-slate-300 line-through text-2xl font-black mb-1 tracking-tighter">$299</div>
      <div className="text-7xl font-black text-slate-950 mb-4 tracking-tighter">$149</div>
      <div className="text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-10 bg-blue-50 px-4 py-1 rounded-full">Save_50%_Today</div>
      <button className="w-full py-5 bg-slate-950 text-white font-black rounded-2xl hover:bg-blue-600 transition-all uppercase tracking-widest text-xs shadow-xl">Secure_Node</button>
    </div>
  </div>
);

// --- 7. Cyberpunk (Web3) ---
export const PricingCyber = () => (
  <div className="bg-black p-12 rounded-[2.5rem] border-4 border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.1)] font-mono italic font-bold">
    <div className="text-center mb-16 relative">
      <h2 className="text-5xl font-black text-white mb-4 tracking-tighter italic uppercase" style={{textShadow: "4px 4px 0px #06b6d4"}}>MINTING_PLANS</h2>
      <div className="h-1.5 w-32 bg-cyan-500 mx-auto rounded-full"></div>
    </div>
    <div className="grid md:grid-cols-3 gap-8 text-left">
      {['Novice', 'Architect', 'Cyberlord'].map((plan, i) => (
        <div key={plan} className={`relative bg-[#050505] p-10 border-4 transition-all group ${i === 1 ? 'border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.3)]' : 'border-gray-900 hover:border-gray-700'}`}>
          <div className="text-gray-600 font-black text-xs mb-4 uppercase tracking-[0.3em]">Tier_0{i+1}</div>
          <h3 className={`text-3xl font-black uppercase mb-6 tracking-tighter ${i === 1 ? 'text-cyan-400' : 'text-white'}`}>{plan}</h3>
          <div className="text-5xl font-black text-white mb-10 tracking-tighter">{i === 0 ? '0.05' : i === 1 ? '0.15' : '0.50'}<span className="text-lg ml-2 text-cyan-500">ETH</span></div>
          <button className={`w-full py-4 font-black uppercase border-4 transition-all tracking-[0.2em] text-xs ${
            i === 1 ? 'bg-cyan-500 border-cyan-500 text-black hover:bg-transparent hover:text-cyan-500' : 'border-white text-white hover:bg-white hover:text-black'
          }`}>Mint_Protocol</button>
        </div>
      ))}
    </div>
  </div>
);

// --- 8. Neumorphic (Soft) ---
export const PricingNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-16 rounded-[4rem] flex flex-col items-center font-sans italic font-bold">
    <div className="grid md:grid-cols-3 gap-12">
      {['Basic', 'Standard', 'Premium'].map((plan, i) => (
        <div key={plan} className={`w-72 p-10 rounded-[3rem] bg-[#e0e5ec] flex flex-col items-center transition-all hover:-translate-y-3 ${i === 1 ? 'shadow-[inset_10px_10px_20px_#b8b9be,inset_-10px_-10px_20px_#ffffff]' : 'shadow-[30px_30px_60px_#b8b9be,-30px_-30px_60px_#ffffff]'}`}>
          <h3 className="text-xl font-black text-slate-500 mb-6 uppercase tracking-widest">{plan}</h3>
          <div className={`w-28 h-28 rounded-full bg-[#e0e5ec] flex items-center justify-center text-3xl font-black text-slate-700 mb-10 shadow-[10px_10px_20px_#b8b9be,-10px_-10px_20px_#ffffff] tracking-tighter`}>
            ${(i + 1) * 20}
          </div>
          <ul className="space-y-4 mb-10 text-center text-xs text-slate-400 font-black uppercase tracking-widest">
            <li>05_Logic_Nodes</li>
            <li>10GB_Neural_Space</li>
            <li>{i > 0 ? 'Priority' : 'Basic'}_Pulse</li>
          </ul>
          <button className="w-full py-4 rounded-2xl bg-[#e0e5ec] text-blue-600 font-black uppercase tracking-widest text-[10px] shadow-[10px_10px_20px_#b8b9be,-10px_-10px_20px_#ffffff] hover:shadow-[inset_5px_5px_10px_#b8b9be,inset_-5px_-5px_10px_#ffffff] transition-all">Select_Node</button>
        </div>
      ))}
    </div>
  </div>
);

// --- 9. Brutalist (Bold) ---
export const PricingBrutalist = () => (
  <div className="bg-yellow-400 p-12 border-[12px] border-black shadow-[24px_24px_0_0_#000] font-sans italic font-black uppercase text-left">
    <div className="grid md:grid-cols-2 gap-0 border-[12px] border-black bg-black">
      <div className="bg-white p-12 border-b-[12px] md:border-b-0 md:border-r-[12px] border-black relative">
        <h3 className="text-6xl leading-[0.8] font-black uppercase mb-6 tracking-tighter text-black">Pro_Logic</h3>
        <p className="font-black text-2xl mb-12 tracking-tight text-black">"For nodes that mean business."</p>
        <ul className="space-y-4 font-black text-lg mb-12 text-black">
          <li className="flex items-center gap-4"><span>→</span> UNLIMITED_NODES</li>
          <li className="flex items-center gap-4"><span>→</span> NO_SYNC_CONTRACTS</li>
          <li className="flex items-center gap-4"><span>→</span> INSTANT_HANDSHAKE</li>
        </ul>
        <div className="text-9xl leading-none font-black mb-12 tracking-tighter text-black">$99</div>
        <button className="w-full py-8 bg-black text-white font-black text-2xl hover:bg-rose-500 hover:text-black transition-all uppercase shadow-[10px_10px_0_0_#e11d48]">Take_My_Money</button>
      </div>
      <div className="bg-rose-500 p-12 flex flex-col justify-center text-center text-black">
        <h3 className="text-5xl font-black uppercase mb-6 tracking-tighter leading-none">Enterprise_Matrix</h3>
        <p className="font-black border-b-[8px] border-black pb-6 mb-8 text-2xl">Need_More_Nodes?</p>
        <p className="font-black text-xl mb-12 leading-relaxed italic lowercase">Contact our architect team for custom node pricing and dedicated sync support.</p>
        <button className="w-full py-8 bg-white border-[8px] border-black text-black font-black text-2xl hover:bg-black hover:text-white transition-all uppercase shadow-[8px_8px_0_0_#000]">Contact_Sales_Bot</button>
      </div>
    </div>
  </div>
);

// --- 10. Range Slider (Usage Based) ---
export const PricingRange = () => {
  const [nodes, setNodes] = useState(10);
  const price = nodes * 5;
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-[3rem] shadow-2xl border border-slate-100 p-12 text-center font-sans italic font-bold">
      <h2 className="text-4xl font-black text-slate-900 mb-2 uppercase tracking-tighter italic">Pay_as_you_grow</h2>
      <p className="text-slate-400 mb-12 text-lg">Estimated sync cost based on your logic team size.</p>
      <div className="mb-16 px-6">
        <div className="flex justify-between text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-6"><span>01 Node</span><span>100 Nodes</span></div>
        <input type="range" min="1" max="100" value={nodes} onChange={(e) => setNodes(Number(e.target.value))} className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-blue-600" />
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="text-8xl font-black text-slate-950 tracking-tighter leading-none">{nodes < 10 ? `0${nodes}` : nodes}</span>
          <span className="text-slate-400 font-black uppercase tracking-widest text-xl">Logic_Nodes</span>
        </div>
      </div>
      <div className="bg-slate-50 rounded-[2rem] p-10 border border-slate-100">
        <div className="flex justify-between items-center mb-8"><span className="text-slate-500 uppercase tracking-widest text-xs font-black">Estimated_Pulse_Cost</span><span className="text-5xl font-black text-blue-600 tracking-tighter">${price}</span></div>
        <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-blue-700 transition-all">Start_Node_Sync</button>
      </div>
    </div>
  );
};

// --- Main Gallery Wrapper ---
const PricingGallery = () => {
  return (
    <div className="container overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-64">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-none">Pricing Matrix Suite</h1>
        <p className="text-slate-500 font-bold text-xl italic lowercase">Optimized logic tiers for the next generation of digital architects.</p>
      </div>
      <div className="space-y-32 max-w-6xl mx-auto">
        
        {/* 01. Standard SaaS */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/pric border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/pric:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const PricingStandard = () => {
  const [annual, setAnnual] = React.useState(false);
  return (
    <div className="w-full max-w-6xl mx-auto px-4 font-sans italic font-bold">
      <div className="flex justify-center items-center gap-4 mb-12">
        <span className={\`text-sm font-bold \${!annual ? 'text-blue-600' : 'text-gray-500'}\`}>Monthly</span>
        <button onClick={() => setAnnual(!annual)} className="relative w-14 h-8 bg-gray-200 rounded-full p-1 transition-all">
          <div className={\`w-6 h-6 bg-blue-600 rounded-full shadow-md transform transition-transform duration-300 \${annual ? 'translate-x-6' : 'translate-x-0'}\`}></div>
        </button>
        <span className={\`text-sm font-bold \${annual ? 'text-blue-600' : 'text-gray-500'}\`}>Yearly <span className="text-green-500 text-xs">(Save 20%)</span></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {['Starter', 'Pro', 'Enterprise'].map((plan, i) => (
          <div key={plan} className={\`relative bg-white rounded-3xl border \${i === 1 ? 'border-blue-600 shadow-2xl scale-105 z-10' : 'border-gray-200'} p-10 flex flex-col\`}>
            {i === 1 && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Most Popular</div>}
            <h3 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-tighter">{plan}</h3>
            <div className="flex items-baseline gap-1 mb-6"><span className="text-5xl font-black tracking-tighter">\${annual ? (i + 1) * 8 : (i + 1) * 10}</span><span className="text-gray-400 text-sm">/mo</span></div>
            <p className="text-sm text-gray-500 mb-8 italic">Perfect for {i === 0 ? 'individuals' : i === 1 ? 'small teams' : 'large organizations'}.</p>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-3 text-sm text-gray-600 italic">✓ Advanced Node Analytics 1</li>
              <li className="flex items-center gap-3 text-sm text-gray-600 italic">✓ Advanced Node Analytics 2</li>
              <li className="flex items-center gap-3 text-sm text-gray-600 italic">{i >= 1 ? '✓' : '×'} Advanced Node Analytics 3</li>
              <li className="flex items-center gap-3 text-sm text-gray-600 italic">{i === 2 ? '✓' : '×'} Advanced Node Analytics 4</li>
            </ul>
            <button className={\`w-full py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all \${i === 1 ? 'bg-blue-600 text-white shadow-xl' : 'bg-slate-100 text-slate-900'}\`}>Initialize {plan}</button>
          </div>
        ))}
      </div>
    </div>
  );
};`}
              htmlCode={`<!-- Pricing Standard Component -->
<div style="width: 100%; max-width: 1152px; margin: 0 auto; padding: 0 16px; font-family: sans-serif; font-style: italic; font-weight: 700; text-align: center;">
  <!-- Billing Toggle -->
  <div style="display: flex; justify-content: center; align-items: center; gap: 16px; margin-bottom: 48px;">
    <span style="font-size: 14px; color: #2563eb;">Monthly</span>
    <div style="width: 56px; height: 32px; background: #e5e7eb; border-radius: 999px; padding: 4px; position: relative;">
      <div style="width: 24px; height: 24px; background: #2563eb; border-radius: 50%; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);"></div>
    </div>
    <span style="font-size: 14px; color: #6b7280;">Yearly <span style="color: #22c55e; font-size: 12px;">(Save 20%)</span></span>
  </div>

  <!-- Cards Grid -->
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; text-align: left;">
    <!-- Starter Card -->
    <div style="background: white; border-radius: 24px; border: 1px solid #e2e8f0; padding: 40px; display: flex; flex-direction: column;">
      <h3 style="font-size: 20px; font-weight: 900; color: #111827; margin-bottom: 8px; text-transform: uppercase;">Starter</h3>
      <div style="display: flex; align-items: baseline; gap: 4px; margin-bottom: 24px;">
        <span style="font-size: 48px; font-weight: 900;">$10</span>
        <span style="color: #9ca3af; font-size: 14px;">/mo</span>
      </div>
      <p style="font-size: 14px; color: #6b7280; margin-bottom: 32px; font-style: italic;">Perfect for individuals.</p>
      <ul style="list-style: none; padding: 0; margin-bottom: 40px; flex: 1;">
        <li style="display: flex; align-items: center; gap: 12px; font-size: 14px; color: #4b5563; margin-bottom: 16px;">✓ Advanced Node Analytics 1</li>
        <li style="display: flex; align-items: center; gap: 12px; font-size: 14px; color: #4b5563; margin-bottom: 16px;">✓ Advanced Node Analytics 2</li>
      </ul>
      <button style="width: 100%; padding: 16px; border-radius: 12px; font-weight: 900; background: #f1f5f9; color: #0f172a; border: none; text-transform: uppercase; font-size: 12px;">Initialize Starter</button>
    </div>

    <!-- Pro Card (Featured) -->
    <div style="background: white; border-radius: 24px; border: 1px solid #2563eb; padding: 40px; display: flex; flex-direction: column; position: relative; box-shadow: 0 25px 50px -12px rgba(37,99,235,0.2); transform: scale(1.05); z-index: 10;">
      <div style="position: absolute; top: 0; left: 50%; transform: translate(-50%, -50%); background: #2563eb; color: white; padding: 6px 20px; border-radius: 999px; font-size: 10px; font-weight: 900; text-transform: uppercase;">Most Popular</div>
      <h3 style="font-size: 20px; font-weight: 900; color: #111827; margin-bottom: 8px; text-transform: uppercase;">Pro</h3>
      <div style="display: flex; align-items: baseline; gap: 4px; margin-bottom: 24px;">
        <span style="font-size: 48px; font-weight: 900;">$20</span>
        <span style="color: #9ca3af; font-size: 14px;">/mo</span>
      </div>
      <ul style="list-style: none; padding: 0; margin-bottom: 40px; flex: 1;">
        <li style="display: flex; align-items: center; gap: 12px; font-size: 14px; color: #4b5563; margin-bottom: 16px;">✓ Advanced Node Analytics 1</li>
        <li style="display: flex; align-items: center; gap: 12px; font-size: 14px; color: #4b5563; margin-bottom: 16px;">✓ Advanced Node Analytics 3</li>
      </ul>
      <button style="width: 100%; padding: 16px; border-radius: 12px; font-weight: 900; background: #2563eb; color: white; border: none; text-transform: uppercase; font-size: 12px;">Initialize Pro</button>
    </div>

    <!-- Enterprise Card -->
    <div style="background: white; border-radius: 24px; border: 1px solid #e2e8f0; padding: 40px; display: flex; flex-direction: column;">
      <h3 style="font-size: 20px; font-weight: 900; color: #111827; margin-bottom: 8px; text-transform: uppercase;">Enterprise</h3>
      <div style="display: flex; align-items: baseline; gap: 4px; margin-bottom: 24px;">
        <span style="font-size: 48px; font-weight: 900;">$30</span>
      </div>
      <button style="width: 100%; padding: 16px; border-radius: 12px; font-weight: 900; background: #f1f5f9; color: #0f172a; border: none; text-transform: uppercase; font-size: 12px;">Initialize Enterprise</button>
    </div>
  </div>
</div>`}
              cssCode={`.pricing-root { width: 100%; max-width: 1152px; margin: 0 auto; padding: 0 16px; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; text-align: center; }
.toggle-wrap { display: flex; justify-content: center; align-items: center; gap: 16px; margin-bottom: 48px; }
.toggle-btn { width: 56px; height: 32px; background: #e5e7eb; border-radius: 999px; padding: 4px; position: relative; cursor: pointer; border: none; outline: none; }
.toggle-ball { width: 24px; height: 24px; background: #2563eb; border-radius: 50%; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.pricing-grid { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 32px; text-align: left; }
@media (min-width: 768px) { .pricing-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
.pricing-card { background: white; border-radius: 24px; border: 1px solid #e2e8f0; padding: 40px; display: flex; flex-direction: column; transition: all 0.3s ease; }
.pricing-card.featured { border-color: #2563eb; box-shadow: 0 25px 50px -12px rgba(37,99,235,0.25); transform: scale(1.05); z-index: 10; }
.plan-title { font-size: 20px; font-weight: 900; color: #111827; margin-bottom: 8px; text-transform: uppercase; letter-spacing: -0.05em; }
.price-tag { display: flex; align-items: baseline; gap: 4px; margin-bottom: 24px; }
.price-val { font-size: 48px; font-weight: 900; letter-spacing: -0.05em; }
.feature-list { list-style: none; padding: 0; margin-bottom: 40px; flex: 1; }
.feature-item { display: flex; align-items: center; gap: 12px; font-size: 14px; color: #4b5563; margin-bottom: 16px; font-style: italic; }
.cta-btn { width: 100%; padding: 16px; border-radius: 12px; font-weight: 900; background: #f1f5f9; color: #0f172a; border: none; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; transition: all 0.2s; cursor: pointer; }
.cta-btn.primary { background: #2563eb; color: white; box-shadow: 0 10px 15px -3px rgba(37,99,235,0.4); }
.cta-btn:hover { transform: translateY(-2px); filter: brightness(1.1); }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">01. Standard SaaS (Toggle)</span>
           <PricingStandard />
        </section>

        {/* 02. Minimalist */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/pric border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/pric:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const PricingMinimal = () => (
  <div className="max-w-5xl mx-auto px-6 bg-white py-12 font-sans italic font-bold">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">Simple. Transparent.</h2>
      <p className="text-slate-500 text-lg">No hidden nodes. No setup fees.</p>
    </div>
    <div className="grid md:grid-cols-2 gap-16 divide-y md:divide-y-0 md:divide-x divide-slate-100 text-left">
      <div className="px-8">
        <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Hobby_Tier</h3>
        <div className="text-7xl font-black text-slate-900 mb-6 tracking-tighter">$0</div>
        <p className="text-slate-500 mb-10 text-lg leading-relaxed italic">For personal experiments. Includes 1GB storage and community-driven node support.</p>
        <button className="text-slate-950 font-black border-b-4 border-slate-950 pb-2 hover:text-blue-600 hover:border-blue-600 transition-all uppercase tracking-widest text-xs">Start_Free_Protocol</button>
      </div>
      <div className="px-8 pt-12 md:pt-0">
        <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Pro_Architect</h3>
        <div className="text-7xl font-black text-slate-900 mb-6 tracking-tighter">$29</div>
        <p className="text-slate-500 mb-10 text-lg leading-relaxed italic">For professional logic. Unlimited nodes, priority sync, and full API access.</p>
        <button className="px-12 py-5 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all shadow-2xl">Deploy_Pro_Node</button>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Pricing Minimal Component -->
<div style="max-width: 1024px; margin: 0 auto; padding: 48px 24px; background: white; font-family: sans-serif; font-style: italic; font-weight: 700; text-align: center;">
  <div style="margin-bottom: 64px;">
    <h2 style="font-size: 48px; font-weight: 900; color: #0f172a; margin-bottom: 16px; text-transform: uppercase; letter-spacing: -0.05em;">Simple. Transparent.</h2>
    <p style="color: #64748b; font-size: 18px;">No hidden nodes. No setup fees.</p>
  </div>

  <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 64px; text-align: left;">
    <!-- Hobby Tier -->
    <div style="padding: 0 32px;">
      <h3 style="font-size: 24px; font-weight: 900; color: #0f172a; margin-bottom: 8px; text-transform: uppercase;">Hobby_Tier</h3>
      <div style="font-size: 72px; font-weight: 900; color: #0f172a; margin-bottom: 24px; letter-spacing: -0.05em;">$0</div>
      <p style="color: #64748b; margin-bottom: 40px; font-size: 18px; line-height: 1.6; font-style: italic;">For personal experiments. Includes 1GB storage and community-driven node support.</p>
      <button style="background: none; border: none; border-bottom: 4px solid #020617; color: #020617; font-weight: 900; padding-bottom: 8px; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; cursor: pointer;">Start_Free_Protocol</button>
    </div>

    <!-- Pro Architect -->
    <div style="padding: 0 32px; border-left: 1px solid #f1f5f9;">
      <h3 style="font-size: 24px; font-weight: 900; color: #0f172a; margin-bottom: 8px; text-transform: uppercase;">Pro_Architect</h3>
      <div style="font-size: 72px; font-weight: 900; color: #0f172a; margin-bottom: 24px; letter-spacing: -0.05em;">$29</div>
      <p style="color: #64748b; margin-bottom: 40px; font-size: 18px; line-height: 1.6; font-style: italic;">For professional logic. Unlimited nodes, priority sync, and full API access.</p>
      <button style="background: #020617; color: white; padding: 20px 48px; border-radius: 999px; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; border: none; cursor: pointer; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);">Deploy_Pro_Node</button>
    </div>
  </div>
</div>`}
              cssCode={`.minimal-root { max-width: 1024px; margin: 0 auto; padding: 48px 24px; background: white; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; text-align: center; }
.minimal-title { font-size: 48px; font-weight: 900; color: #0f172a; margin-bottom: 16px; text-transform: uppercase; letter-spacing: -0.05em; }
.minimal-grid { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 64px; text-align: left; }
@media (min-width: 768px) { .minimal-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.minimal-card { padding: 0 32px; position: relative; }
.minimal-price { font-size: 72px; font-weight: 900; color: #0f172a; margin-bottom: 24px; letter-spacing: -0.05em; }
.minimal-link { background: none; border: none; border-bottom: 4px solid #020617; color: #020617; font-weight: 900; padding-bottom: 8px; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; cursor: pointer; transition: 0.2s; }
.minimal-link:hover { color: #2563eb; border-color: #2563eb; }
.minimal-pill { background: #020617; color: white; padding: 20px 48px; border-radius: 999px; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; border: none; cursor: pointer; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); transition: 0.3s; }
.minimal-pill:hover { background: #2563eb; transform: scale(1.05); }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">02. Minimalist Logic</span>
           <PricingMinimal />
        </section>

        {/* 03. Dark Mode */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/pric border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/pric:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const PricingDark = () => (
  <div className="bg-slate-950 text-white p-12 rounded-[3rem] border border-slate-800 font-mono italic font-bold">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">
        <div className="lg:col-span-1 py-8">
          <h2 className="text-4xl font-black mb-6 tracking-tighter uppercase leading-none text-blue-400">Dev_First pricing</h2>
          <p className="text-slate-500 mb-10 text-lg">Scale your logic with infrastructure that grows with your nodes.</p>
          <div className="space-y-6">
            <div className="flex items-center gap-4"><div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">✓</div><span className="text-sm font-black uppercase tracking-widest">Unlimited_API_Calls</span></div>
            <div className="flex items-center gap-4"><div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20">✓</div><span className="text-sm font-black uppercase tracking-widest">99.99%_Pulse_Rate</span></div>
          </div>
        </div>
        {['Standard', 'Enterprise'].map((plan, i) => (
          <div key={plan} className="bg-slate-900 rounded-[2rem] p-10 border border-slate-800 hover:border-blue-500 transition-all group relative">
            {i === 1 && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 px-4 py-1 rounded text-[10px] font-black uppercase tracking-widest">Recommended</div>}
            <div className="flex justify-between items-center mb-6"><h3 className="text-2xl font-black uppercase tracking-widest">{plan}</h3></div>
            <div className="text-5xl font-black mb-8 tracking-tighter">\${i === 0 ? '49' : '99'}<span className="text-sm text-slate-500 font-medium lowercase">/node</span></div>
            <ul className="space-y-4 mb-12 text-sm text-slate-400 border-t border-slate-800 pt-8 uppercase tracking-widest">
              <li>{i === 0 ? '05' : '25'} Logic_Members</li>
              <li>{i === 0 ? '10k' : '100k'} Monthly_Pulses</li>
              <li>{i === 0 ? '24h' : '01h'} Sync_Response</li>
            </ul>
            <button className="w-full py-5 bg-slate-800 text-white rounded-2xl font-black uppercase tracking-widest text-xs group-hover:bg-blue-600 transition-all border border-slate-700">Select_Protocol</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Pricing Dark Component -->
<div style="background: #020617; color: white; padding: 48px; border-radius: 48px; border: 1px solid #1e293b; font-family: monospace; font-style: italic; font-weight: 700;">
  <div style="max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px; text-align: left;">
    <!-- Info Section -->
    <div style="grid-column: span 1; padding: 32px 0;">
      <h2 style="font-size: 36px; font-weight: 900; color: #60a5fa; margin-bottom: 24px; text-transform: uppercase; line-height: 1; letter-spacing: -0.05em;">Dev_First pricing</h2>
      <p style="color: #64748b; font-size: 18px; margin-bottom: 40px;">Scale your logic with infrastructure that grows with your nodes.</p>
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <div style="width: 40px; height: 40px; background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #60a5fa;">✓</div>
          <span style="font-size: 14px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em;">Unlimited_API_Calls</span>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <div style="width: 40px; height: 40px; background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #22c55e;">✓</div>
          <span style="font-size: 14px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em;">99.99%_Pulse_Rate</span>
        </div>
      </div>
    </div>

    <!-- Standard Card -->
    <div style="background: #0f172a; padding: 40px; border-radius: 32px; border: 1px solid #1e293b; position: relative; transition: 0.3s;">
      <h3 style="font-size: 24px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 24px;">Standard</h3>
      <div style="font-size: 48px; font-weight: 900; margin-bottom: 32px; letter-spacing: -0.05em;">$49<span style="font-size: 14px; color: #64748b; font-weight: 500;">/node</span></div>
      <ul style="list-style: none; padding: 32px 0 0 0; margin-bottom: 48px; border-top: 1px solid #1e293b; color: #94a3b8; text-transform: uppercase; font-size: 14px; letter-spacing: 0.1em; display: flex; flex-direction: column; gap: 16px;">
        <li>05 Logic_Members</li>
        <li>10k Monthly_Pulses</li>
        <li>24h Sync_Response</li>
      </ul>
      <button style="width: 100%; padding: 20px; background: #1e293b; color: white; border: 1px solid #334155; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; cursor: pointer;">Select_Protocol</button>
    </div>

    <!-- Enterprise Card -->
    <div style="background: #0f172a; padding: 40px; border-radius: 32px; border: 1px solid #2563eb; position: relative; transition: 0.3s;">
      <div style="position: absolute; top: -16px; left: 50%; transform: translateX(-50%); background: #2563eb; color: white; padding: 4px 16px; border-radius: 4px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em;">Recommended</div>
      <h3 style="font-size: 24px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 24px;">Enterprise</h3>
      <div style="font-size: 48px; font-weight: 900; margin-bottom: 32px; letter-spacing: -0.05em;">$99<span style="font-size: 14px; color: #64748b; font-weight: 500;">/node</span></div>
      <ul style="list-style: none; padding: 32px 0 0 0; margin-bottom: 48px; border-top: 1px solid #1e293b; color: #94a3b8; text-transform: uppercase; font-size: 14px; letter-spacing: 0.1em; display: flex; flex-direction: column; gap: 16px;">
        <li>25 Logic_Members</li>
        <li>100k Monthly_Pulses</li>
        <li>01h Sync_Response</li>
      </ul>
      <button style="width: 100%; padding: 20px; background: #2563eb; color: white; border: none; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; cursor: pointer;">Select_Protocol</button>
    </div>
  </div>
</div>`}
              cssCode={`.dark-root { background: #020617; color: white; padding: 48px; border-radius: 48px; border: 1px solid #1e293b; font-family: 'JetBrains Mono', monospace; font-style: italic; font-weight: 700; }
.dark-grid { max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 48px; text-align: left; }
@media (min-width: 1024px) { .dark-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
.dark-card { background: #0f172a; padding: 40px; border-radius: 32px; border: 1px solid #1e293b; transition: all 0.3s; position: relative; }
.dark-card:hover { border-color: #3b82f6; transform: translateY(-5px); }
.dark-title { font-size: 36px; font-weight: 900; color: #60a5fa; margin-bottom: 24px; text-transform: uppercase; line-height: 1; letter-spacing: -0.05em; }
.dark-btn { width: 100%; padding: 20px; background: #1e293b; color: white; border: 1px solid #334155; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; cursor: pointer; transition: 0.2s; }
.dark-btn:hover { background: #3b82f6; border-color: #3b82f6; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">03. Developer Dark Mode</span>
           <PricingDark />
        </section>

        {/* 04. Comparison Table */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/pric border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/pric:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const PricingTable = () => (
  <div className="w-full max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden font-sans italic font-bold">
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="uppercase tracking-widest text-[10px]">
            <th className="p-8 bg-slate-50 border-b border-gray-100 w-1/3">Feature_Matrix</th>
            <th className="p-8 bg-slate-50 border-b border-gray-100 w-1/4 text-center">Basic</th>
            <th className="p-8 bg-blue-50/30 border-b border-blue-100 w-1/4 text-center border-x border-blue-100">Pro_Node</th>
            <th className="p-8 bg-slate-50 border-b border-gray-100 w-1/4 text-center">Logic_Team</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {[
            { name: 'Node_Users', basic: '01', pro: '05', team: '∞' },
            { name: 'Neural_Storage', basic: '10GB', pro: '100GB', team: '1TB' },
            { name: 'Analytics_Core', basic: false, pro: true, team: true },
            { name: 'Custom_Signal', basic: false, pro: true, team: true },
            { name: 'SSO_Handshake', basic: false, pro: false, team: true },
          ].map((row, i) => (
            <tr key={i} className="hover:bg-slate-50 transition-colors">
              <td className="p-6 border-b border-gray-50 font-black pl-10 text-slate-800">{row.name}</td>
              <td className="p-6 border-b border-gray-50 text-center">{typeof row.basic === 'boolean' ? (row.basic ? '✓' : '-') : row.basic}</td>
              <td className="p-6 border-b border-blue-50 border-x border-blue-50 text-center bg-blue-50/10">{typeof row.pro === 'boolean' ? (row.pro ? '✓' : '-') : row.pro}</td>
              <td className="p-6 border-b border-gray-50 text-center">{typeof row.team === 'boolean' ? (row.team ? '✓' : '-') : row.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);`}
              htmlCode={`<!-- Comparison Matrix Table -->
<div style="width: 100%; max-width: 1024px; margin: 0 auto; background: white; border-radius: 32px; box-shadow: 0 40px 100px -20px rgba(0,0,0,0.1); border: 1px solid #f1f5f9; overflow: hidden; font-family: sans-serif; font-style: italic; font-weight: 700;">
  <div style="overflow-x: auto;">
    <table style="width: 100%; border-collapse: collapse; text-align: left;">
      <thead>
        <tr style="text-transform: uppercase; letter-spacing: 0.2em; font-size: 10px;">
          <th style="padding: 32px; background: #f8fafc; border-bottom: 1px solid #f1f5f9; width: 33%;">Feature_Matrix</th>
          <th style="padding: 32px; background: #f8fafc; border-bottom: 1px solid #f1f5f9; text-align: center; width: 22%;">Basic<br><span style="color: #94a3b8;">$10/mo</span></th>
          <th style="padding: 32px; background: rgba(59,130,246,0.05); border-bottom: 1px solid #dbeafe; text-align: center; width: 22%; border-left: 1px solid #dbeafe; border-right: 1px solid #dbeafe;"><span style="color: #2563eb;">Pro_Node</span><br><span style="color: #3b82f6;">$29/mo</span></th>
          <th style="padding: 32px; background: #f8fafc; border-bottom: 1px solid #f1f5f9; text-align: center; width: 22%;">Logic_Team<br><span style="color: #94a3b8;">$59/mo</span></th>
        </tr>
      </thead>
      <tbody style="font-size: 14px; color: #4b5563; text-transform: uppercase;">
        <tr><td style="padding: 24px 40px; border-bottom: 1px solid #f8fafc; font-weight: 900; color: #0f172a;">Node_Users</td><td style="text-align: center;">01</td><td style="text-align: center; background: rgba(59,130,246,0.02);">05</td><td style="text-align: center;">∞</td></tr>
        <tr><td style="padding: 24px 40px; border-bottom: 1px solid #f8fafc; font-weight: 900; color: #0f172a;">Neural_Storage</td><td style="text-align: center;">10GB</td><td style="text-align: center; background: rgba(59,130,246,0.02);">100GB</td><td style="text-align: center;">1TB</td></tr>
        <tr><td style="padding: 24px 40px; border-bottom: 1px solid #f8fafc; font-weight: 900; color: #0f172a;">Analytics_Core</td><td style="text-align: center;">-</td><td style="text-align: center; background: rgba(59,130,246,0.02);">✓</td><td style="text-align: center;">✓</td></tr>
        <tr><td style="padding: 24px 40px; border-bottom: 1px solid #f8fafc; font-weight: 900; color: #0f172a;">Custom_Signal</td><td style="text-align: center;">-</td><td style="text-align: center; background: rgba(59,130,246,0.02);">✓</td><td style="text-align: center;">✓</td></tr>
        <tr><td style="padding: 24px 40px; border-bottom: 1px solid #f8fafc; font-weight: 900; color: #0f172a;">SSO_Handshake</td><td style="text-align: center;">-</td><td style="text-align: center; background: rgba(59,130,246,0.02);">-</td><td style="text-align: center;">✓</td></tr>
      </tbody>
    </table>
  </div>
</div>`}
              cssCode={`.matrix-root { width: 100%; max-width: 1024px; margin: 0 auto; background: white; border-radius: 32px; box-shadow: 0 40px 100px -20px rgba(0,0,0,0.1); border: 1px solid #f1f5f9; overflow: hidden; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; }
table { width: 100%; border-collapse: collapse; text-align: left; }
th { padding: 32px; background: #f8fafc; border-bottom: 1px solid #f1f5f9; text-transform: uppercase; letter-spacing: 0.2em; font-size: 10px; color: #64748b; }
td { padding: 24px 40px; border-bottom: 1px solid #f8fafc; font-size: 14px; text-transform: uppercase; color: #4b5563; }
.feature-name { font-weight: 900; color: #0f172a; }
.featured-col { background: rgba(59,130,246,0.02); border-left: 1px solid #eff6ff; border-right: 1px solid #eff6ff; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">04. Comparison Table Matrix</span>
           <PricingTable />
        </section>

        {/* 05. Glassmorphism */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/pric border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/pric:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const PricingGlass = () => (
  <div className="relative w-full max-w-4xl mx-auto p-12 rounded-[4rem] overflow-hidden bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 font-sans italic font-bold">
    <div className="grid md:grid-cols-2 gap-12 relative z-10 text-left text-white">
      <div className="flex flex-col justify-center">
        <h2 className="text-5xl font-black uppercase leading-none mb-6">Unlock_Matrix</h2>
        <p className="mb-10 text-xl font-medium">Get full access to all exclusive logic features and elevate your workflow.</p>
        <ul className="space-y-4 uppercase tracking-widest text-xs">
          <li className="flex items-center gap-4"><div className="bg-white/20 p-2 rounded-xl border border-white/20">✓</div> No_Signal_Lag</li>
          <li className="flex items-center gap-4"><div className="bg-white/20 p-2 rounded-xl border border-white/20">✓</div> Priority_Node_Sync</li>
          <li className="flex items-center gap-4"><div className="bg-white/20 p-2 rounded-xl border border-white/20">✓</div> 4K_Visual_Pulse</li>
        </ul>
      </div>
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-12 rounded-[3rem] text-center shadow-2xl">
        <div className="text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-70">All_Access_Pass</div>
        <div className="text-8xl font-black mb-4 tracking-tighter">$12</div>
        <div className="text-white/60 mb-12 uppercase tracking-widest text-[10px]">per node, billed yearly</div>
        <button className="w-full py-6 bg-white text-indigo-600 font-black rounded-3xl uppercase tracking-widest text-xs hover:scale-105 transition-all">Start_Sync_Trial</button>
        <p className="text-[10px] mt-6 text-white/40 uppercase tracking-widest">7-day logic guarantee.</p>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Glassmorphic Pricing UI -->
<div style="position: relative; width: 100%; max-width: 896px; margin: 0 auto; padding: 48px; border-radius: 64px; overflow: hidden; background: linear-gradient(45deg, #4f46e5, #9333ea, #db2777); font-family: sans-serif; font-style: italic; font-weight: 700;">
  <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 48px; position: relative; z-index: 10; text-align: left; color: white;">
    <!-- Text Side -->
    <div style="display: flex; flex-direction: column; justify-content: center;">
      <h2 style="font-size: 48px; font-weight: 900; margin-bottom: 24px; text-transform: uppercase; line-height: 1; letter-spacing: -0.05em;">Unlock_Matrix</h2>
      <p style="margin-bottom: 40px; font-size: 20px; font-weight: 500; color: rgba(255,255,255,0.8);">Get full access to all exclusive logic features and elevate your workflow.</p>
      <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 16px; text-transform: uppercase; font-size: 10px; letter-spacing: 0.2em;">
        <li style="display: flex; align-items: center; gap: 16px;"><div style="background: rgba(255,255,255,0.2); padding: 8px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.2);">✓</div> No_Signal_Lag</li>
        <li style="display: flex; align-items: center; gap: 16px;"><div style="background: rgba(255,255,255,0.2); padding: 8px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.2);">✓</div> Priority_Node_Sync</li>
        <li style="display: flex; align-items: center; gap: 16px;"><div style="background: rgba(255,255,255,0.2); padding: 8px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.2);">✓</div> 4K_Visual_Pulse</li>
      </ul>
    </div>

    <!-- Glass Card -->
    <div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.2); padding: 48px; border-radius: 48px; text-align: center; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);">
      <div style="font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 16px; opacity: 0.7;">All_Access_Pass</div>
      <div style="font-size: 96px; font-weight: 900; margin-bottom: 16px; letter-spacing: -0.05em;">$12</div>
      <div style="color: rgba(255,255,255,0.6); text-transform: uppercase; font-size: 10px; letter-spacing: 0.2em; margin-bottom: 48px;">per node, billed yearly</div>
      <button style="width: 100%; padding: 24px; background: white; color: #4f46e5; border: none; border-radius: 24px; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; cursor: pointer;">Start_Sync_Trial</button>
      <p style="font-size: 10px; color: rgba(255,255,255,0.4); margin-top: 24px; text-transform: uppercase; letter-spacing: 0.2em;">7-day logic guarantee.</p>
    </div>
  </div>
</div>`}
              cssCode={`.glass-root { position: relative; width: 100%; max-width: 896px; margin: 0 auto; padding: 48px; border-radius: 64px; overflow: hidden; background: linear-gradient(45deg, #4f46e5, #9333ea, #db2777); font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; }
.glass-grid { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 48px; position: relative; z-index: 10; text-align: left; color: white; }
@media (min-width: 768px) { .glass-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.glass-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.2); padding: 48px; border-radius: 48px; text-align: center; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); transition: 0.3s; }
.glass-card:hover { transform: scale(1.02); background: rgba(255,255,255,0.15); }
.glass-btn { width: 100%; padding: 24px; background: white; color: #4f46e5; border: none; border-radius: 24px; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; cursor: pointer; transition: 0.2s; }
.glass-btn:hover { background: #f8fafc; transform: translateY(-2px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.2); }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">05. Glassmorphism Premium</span>
           <PricingGlass />
        </section>

        {/* 06. Single Focus */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/pric border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/pric:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const PricingSingle = () => (
  <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl border border-gray-50 overflow-hidden flex flex-col md:flex-row font-sans italic font-bold">
    <div className="md:w-3/5 p-16 text-left">
      <h3 className="text-3xl font-black text-gray-900 mb-2 uppercase tracking-tighter">Lifetime_Logic</h3>
      <p className="text-gray-500 mb-10 text-lg">One time handshake. Unlimited access forever.</p>
      <div className="grid grid-cols-2 gap-8 mb-12 text-sm uppercase tracking-widest">
        {['All_Nodes', 'Source_Engine', 'Logic_Access', 'Neural_Certs'].map(item => (
          <div key={item} className="flex items-center gap-3 text-gray-700 font-black">✓ {item}</div>
        ))}
      </div>
      <div className="bg-slate-50 p-6 rounded-2xl text-sm text-slate-600 border border-slate-100 font-medium italic">
        "The best logic investment I made for my career this year." — <span className="font-black text-slate-900">Jane_Dex</span>
      </div>
    </div>
    <div className="md:w-2/5 bg-slate-50 p-16 flex flex-col items-center justify-center border-l border-gray-100 text-center">
      <div className="text-slate-300 line-through text-2xl font-black mb-1">$299</div>
      <div className="text-7xl font-black text-slate-950 mb-4">$149</div>
      <div className="text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-10 bg-blue-50 px-4 py-1 rounded-full">Save_50%_Today</div>
      <button className="w-full py-5 bg-slate-950 text-white font-black rounded-2xl uppercase mt-12 shadow-xl">Secure_Node</button>
    </div>
  </div>
);`}
              htmlCode={`<!-- Single Lifetime Membership UI -->
<div style="max-width: 896px; margin: 0 auto; background: white; border-radius: 48px; box-shadow: 0 40px 100px -20px rgba(0,0,0,0.1); border: 1px solid #f8fafc; overflow: hidden; display: flex; font-family: sans-serif; font-style: italic; font-weight: 700;">
  <!-- Content Side -->
  <div style="width: 60%; padding: 64px; text-align: left;">
    <h3 style="font-size: 30px; font-weight: 900; color: #111827; margin-bottom: 8px; text-transform: uppercase; letter-spacing: -0.05em;">Lifetime_Logic</h3>
    <p style="color: #6b7280; font-size: 18px; margin-bottom: 40px;">One time handshake. Unlimited access forever.</p>
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-bottom: 48px; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em;">
      <div style="display: flex; align-items: center; gap: 12px; font-weight: 900; color: #374151;">✓ All_Nodes</div>
      <div style="display: flex; align-items: center; gap: 12px; font-weight: 900; color: #374151;">✓ Source_Engine</div>
      <div style="display: flex; align-items: center; gap: 12px; font-weight: 900; color: #374151;">✓ Logic_Access</div>
      <div style="display: flex; align-items: center; gap: 12px; font-weight: 900; color: #374151;">✓ Neural_Certs</div>
    </div>
    <div style="background: #f8fafc; padding: 24px; border-radius: 16px; border: 1px solid #f1f5f9; color: #4b5563; font-size: 14px; font-style: italic;">
      "The best logic investment I made for my career this year." — <span style="font-weight: 900; color: #0f172a;">Jane_Dex</span>
    </div>
  </div>

  <!-- Price Side -->
  <div style="width: 40%; background: #f8fafc; padding: 64px; border-left: 1px solid #f1f5f9; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
    <div style="color: #cbd5e1; text-decoration: line-through; font-size: 24px; font-weight: 900; margin-bottom: 4px; letter-spacing: -0.05em;">$299</div>
    <div style="font-size: 72px; font-weight: 900; color: #020617; margin-bottom: 8px; letter-spacing: -0.05em;">$149</div>
    <div style="color: #2563eb; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 40px; background: #eff6ff; padding: 4px 16px; border-radius: 999px;">Save_50%_Today</div>
    <button style="width: 100%; padding: 20px; background: #020617; color: white; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; border: none; cursor: pointer; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.2);">Secure_Node</button>
  </div>
</div>`}
              cssCode={`.single-root { max-width: 896px; margin: 0 auto; background: white; border-radius: 48px; box-shadow: 0 40px 100px -20px rgba(0,0,0,0.1); border: 1px solid #f8fafc; overflow: hidden; display: flex; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; }
.single-info { width: 60%; padding: 64px; text-align: left; }
.single-price { width: 40%; background: #f8fafc; padding: 64px; border-left: 1px solid #f1f5f9; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
.single-btn { width: 100%; padding: 20px; background: #020617; color: white; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; border: none; cursor: pointer; transition: 0.3s; }
.single-btn:hover { background: #2563eb; transform: translateY(-2px); }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">06. Single Membership Handshake</span>
           <PricingSingle />
        </section>

        {/* 07. Cyberpunk */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/pric border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/pric:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const PricingCyber = () => (
  <div className="bg-black p-12 rounded-[2.5rem] border-4 border-cyan-500/30 font-mono italic font-bold text-white">
    <h2 className="text-5xl font-black text-center uppercase mb-16" style={{textShadow: "4px 4px 0px #06b6d4"}}>MINTING_PLANS</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {['Novice', 'Architect', 'Cyberlord'].map((plan, i) => (
        <div key={plan} className={\`relative bg-[#050505] p-10 border-4 transition-all group \${i === 1 ? 'border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.3)]' : 'border-gray-900 hover:border-gray-700'}\`}>
          <div className="text-gray-600 font-black text-xs mb-4 uppercase tracking-[0.3em]">Tier_0{i+1}</div>
          <h3 className={\`text-3xl font-black uppercase mb-6 tracking-tighter \${i === 1 ? 'text-cyan-400' : 'text-white'}\`}>{plan}</h3>
          <div className="text-5xl font-black text-white mb-10 tracking-tighter">{i === 0 ? '0.05' : i === 1 ? '0.15' : '0.50'}<span className="text-lg ml-2 text-cyan-500">ETH</span></div>
          <button className={\`w-full py-4 font-black uppercase border-4 transition-all tracking-[0.2em] text-xs \${
            i === 1 ? 'bg-cyan-500 border-cyan-500 text-black hover:bg-transparent hover:text-cyan-500' : 'border-white text-white hover:bg-white hover:text-black'
          }\`}>Mint_Protocol</button>
        </div>
      ))}
    </div>
  </div>
);`}
              htmlCode={`<!-- Cyberpunk Web3 Pricing UI -->
<div style="background: black; padding: 48px; border-radius: 40px; border: 4px solid rgba(6,182,212,0.3); font-family: monospace; font-style: italic; font-weight: 700; color: white; text-align: center;">
  <h2 style="font-size: 48px; font-weight: 900; text-transform: uppercase; margin-bottom: 64px; text-shadow: 4px 4px 0px #06b6d4; letter-spacing: -0.05em;">MINTING_PLANS</h2>

  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px;">
    <!-- Tier 01: Novice -->
    <div style="background: #050505; padding: 40px; border: 4px solid #111827; text-align: left; transition: 0.3s;">
      <div style="color: #4b5563; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 16px;">Tier_01</div>
      <h3 style="font-size: 30px; font-weight: 900; color: white; margin-bottom: 24px; text-transform: uppercase; letter-spacing: -0.05em;">Novice</h3>
      <div style="font-size: 48px; font-weight: 900; color: white; margin-bottom: 40px; letter-spacing: -0.05em;">0.05<span style="font-size: 18px; color: #06b6d4; margin-left: 8px;">ETH</span></div>
      <button style="width: 100%; padding: 16px; background: none; border: 4px solid white; color: white; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.2em; cursor: pointer;">Mint_Protocol</button>
    </div>

    <!-- Tier 02: Architect (Featured) -->
    <div style="background: #050505; padding: 40px; border: 4px solid #06b6d4; box-shadow: 0 0 30px rgba(6,182,212,0.3); text-align: left; transform: scale(1.02);">
      <div style="color: #4b5563; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 16px;">Tier_02</div>
      <h3 style="font-size: 30px; font-weight: 900; color: #06b6d4; margin-bottom: 24px; text-transform: uppercase; letter-spacing: -0.05em;">Architect</h3>
      <div style="font-size: 48px; font-weight: 900; color: white; margin-bottom: 40px; letter-spacing: -0.05em;">0.15<span style="font-size: 18px; color: #06b6d4; margin-left: 8px;">ETH</span></div>
      <button style="width: 100%; padding: 16px; background: #06b6d4; color: black; border: 4px solid #06b6d4; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.2em; cursor: pointer;">Mint_Protocol</button>
    </div>

    <!-- Tier 03: Cyberlord -->
    <div style="background: #050505; padding: 40px; border: 4px solid #111827; text-align: left; transition: 0.3s;">
      <div style="color: #4b5563; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 16px;">Tier_03</div>
      <h3 style="font-size: 30px; font-weight: 900; color: white; margin-bottom: 24px; text-transform: uppercase; letter-spacing: -0.05em;">Cyberlord</h3>
      <div style="font-size: 48px; font-weight: 900; color: white; margin-bottom: 40px; letter-spacing: -0.05em;">0.50<span style="font-size: 18px; color: #06b6d4; margin-left: 8px;">ETH</span></div>
      <button style="width: 100%; padding: 16px; background: none; border: 4px solid white; color: white; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.2em; cursor: pointer;">Mint_Protocol</button>
    </div>
  </div>
</div>`}
              cssCode={`.cyber-root { background: black; padding: 48px; border-radius: 40px; border: 4px solid rgba(6,182,212,0.3); font-family: 'JetBrains Mono', monospace; font-style: italic; font-weight: 700; color: white; text-align: center; }
.cyber-grid { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 32px; }
@media (min-width: 1024px) { .cyber-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
.cyber-card { background: #050505; padding: 40px; border: 4px solid #111827; transition: 0.3s; text-align: left; }
.cyber-card.featured { border-color: #06b6d4; box-shadow: 0 0 30px rgba(6,182,212,0.3); }
.cyber-btn { width: 100%; padding: 16px; background: none; border: 4px solid white; color: white; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.2em; cursor: pointer; transition: 0.2s; }
.cyber-btn:hover { background: white; color: black; }
.cyber-btn.featured { background: #06b6d4; color: black; border-color: #06b6d4; }
.cyber-btn.featured:hover { background: transparent; color: #06b6d4; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">07. Cyberpunk Web3 Minting</span>
           <PricingCyber />
        </section>

        {/* 08. Neumorphic */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/pric border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/pric:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const PricingNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-16 rounded-[4rem] font-sans italic font-bold">
    <div className="grid md:grid-cols-3 gap-12">
      {['Basic', 'Standard', 'Premium'].map((plan, i) => (
        <div key={plan} className={\`w-72 p-10 rounded-[3rem] bg-[#e0e5ec] transition-all hover:-translate-y-3 \${i === 1 ? 'shadow-[inset_10px_10px_20px_#b8b9be,inset_-10px_-10px_20px_#ffffff]' : 'shadow-[30px_30px_60px_#b8b9be,-30px_-30px_60px_#ffffff]'}\`}>
          <h3 className="text-xl font-black text-slate-500 mb-6 uppercase tracking-widest text-center">{plan}</h3>
          <div className="w-28 h-28 rounded-full bg-[#e0e5ec] mx-auto flex items-center justify-center text-3xl font-black text-slate-700 mb-10 shadow-[10px_10px_20px_#b8b9be,-10px_-10px_20px_#ffffff] tracking-tighter">
            \${(i + 1) * 20}
          </div>
          <ul className="space-y-4 mb-10 text-center text-xs text-slate-400 font-black uppercase tracking-widest">
            <li>05_Logic_Nodes</li>
            <li>10GB_Neural_Space</li>
          </ul>
          <button className="w-full py-4 rounded-2xl bg-[#e0e5ec] text-blue-600 font-black uppercase tracking-widest text-[10px] shadow-[10px_10px_20px_#b8b9be,-10px_-10px_20px_#ffffff]">Select_Node</button>
        </div>
      ))}
    </div>
  </div>
);`}
              htmlCode={`<!-- Neumorphic Pricing UI -->
<div style="background: #e0e5ec; padding: 64px; border-radius: 64px; display: flex; justify-content: center; gap: 48px; font-family: sans-serif; font-style: italic; font-weight: 700;">
  <!-- Card 01: Basic -->
  <div style="width: 288px; padding: 40px; border-radius: 48px; background: #e0e5ec; box-shadow: 20px 20px 60px #b8b9be, -20px -20px 60px #ffffff; text-align: center;">
    <h3 style="font-size: 20px; font-weight: 900; color: #64748b; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 0.1em;">Basic</h3>
    <div style="width: 112px; height: 112px; border-radius: 50%; background: #e0e5ec; margin: 0 auto 40px auto; display: flex; align-items: center; justify-content: center; font-size: 30px; font-weight: 900; color: #334155; box-shadow: 10px 10px 20px #b8b9be, -10px -10px 20px #ffffff;">$20</div>
    <button style="width: 100%; padding: 16px; background: #e0e5ec; color: #2563eb; border: none; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 10px; letter-spacing: 0.1em; cursor: pointer; box-shadow: 10px 10px 20px #b8b9be, -10px -10px 20px #ffffff;">Select_Node</button>
  </div>

  <!-- Card 02: Standard (Inset Shadow) -->
  <div style="width: 288px; padding: 40px; border-radius: 48px; background: #e0e5ec; box-shadow: inset 10px 10px 20px #b8b9be, inset -10px -10px 20px #ffffff; text-align: center;">
    <h3 style="font-size: 20px; font-weight: 900; color: #64748b; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 0.1em;">Standard</h3>
    <div style="width: 112px; height: 112px; border-radius: 50%; background: #e0e5ec; margin: 0 auto 40px auto; display: flex; align-items: center; justify-content: center; font-size: 30px; font-weight: 900; color: #334155; box-shadow: 10px 10px 20px #b8b9be, -10px -10px 20px #ffffff;">$40</div>
    <button style="width: 100%; padding: 16px; background: #e0e5ec; color: #2563eb; border: none; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 10px; letter-spacing: 0.1em; cursor: pointer; box-shadow: 10px 10px 20px #b8b9be, -10px -10px 20px #ffffff;">Select_Node</button>
  </div>

  <!-- Card 03: Premium -->
  <div style="width: 288px; padding: 40px; border-radius: 48px; background: #e0e5ec; box-shadow: 20px 20px 60px #b8b9be, -20px -20px 60px #ffffff; text-align: center;">
    <h3 style="font-size: 20px; font-weight: 900; color: #64748b; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 0.1em;">Premium</h3>
    <div style="width: 112px; height: 112px; border-radius: 50%; background: #e0e5ec; margin: 0 auto 40px auto; display: flex; align-items: center; justify-content: center; font-size: 30px; font-weight: 900; color: #334155; box-shadow: 10px 10px 20px #b8b9be, -10px -10px 20px #ffffff;">$60</div>
    <button style="width: 100%; padding: 16px; background: #e0e5ec; color: #2563eb; border: none; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 10px; letter-spacing: 0.1em; cursor: pointer; box-shadow: 10px 10px 20px #b8b9be, -10px -10px 20px #ffffff;">Select_Node</button>
  </div>
</div>`}
              cssCode={`.neu-root { background: #e0e5ec; padding: 64px; border-radius: 64px; display: flex; justify-content: center; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; gap: 48px; }
.neu-card { width: 288px; padding: 40px; border-radius: 48px; background: #e0e5ec; box-shadow: 30px 30px 60px #b8b9be, -30px -30px 60px #ffffff; text-align: center; transition: 0.3s; }
.neu-card.inset { box-shadow: inset 10px 10px 20px #b8b9be, inset -10px -10px 20px #ffffff; }
.neu-circle { width: 112px; height: 112px; border-radius: 50%; background: #e0e5ec; margin: 0 auto 40px auto; display: flex; align-items: center; justify-content: center; font-size: 30px; font-weight: 900; color: #334155; box-shadow: 10px 10px 20px #b8b9be, -10px -10px 20px #ffffff; }
.neu-btn { width: 100%; padding: 16px; background: #e0e5ec; color: #2563eb; border: none; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 10px; letter-spacing: 0.1em; cursor: pointer; box-shadow: 10px 10px 20px #b8b9be, -10px -10px 20px #ffffff; transition: 0.2s; }
.neu-btn:hover { transform: translateY(-2px); color: #1d4ed8; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">08. Neumorphic Logic Soft</span>
           <PricingNeumorphic />
        </section>

        {/* 09. Brutalist */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/pric border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/pric:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const PricingBrutalist = () => (
  <div className="bg-yellow-400 p-12 border-[12px] border-black shadow-[24px_24px_0_0_#000] font-sans italic font-black uppercase text-left">
    <div className="grid md:grid-cols-2 gap-0 border-[12px] border-black bg-black">
      <div className="bg-white p-12 border-b-[12px] md:border-b-0 md:border-r-[12px] border-black relative">
        <h3 className="text-6xl leading-[0.8] font-black uppercase mb-6 tracking-tighter text-black">Pro_Logic</h3>
        <p className="font-black text-2xl mb-12 tracking-tight text-black">"For nodes that mean business."</p>
        <ul className="space-y-4 font-black text-lg mb-12 text-black">
          <li className="flex items-center gap-4"><span>→</span> UNLIMITED_NODES</li>
          <li className="flex items-center gap-4"><span>→</span> NO_SYNC_CONTRACTS</li>
          <li className="flex items-center gap-4"><span>→</span> INSTANT_HANDSHAKE</li>
        </ul>
        <div className="text-9xl leading-none font-black mb-12 tracking-tighter text-black">$99</div>
        <button className="w-full py-8 bg-black text-white font-black text-2xl hover:bg-rose-500 hover:text-black transition-all uppercase shadow-[10px_10px_0_0_#e11d48]">Take_My_Money</button>
      </div>
      <div className="bg-rose-500 p-12 flex flex-col justify-center text-center text-black">
        <h3 className="text-5xl font-black uppercase mb-6 tracking-tighter leading-none">Enterprise_Matrix</h3>
        <p className="font-black border-b-[8px] border-black pb-6 mb-8 text-2xl">Need_More_Nodes?</p>
        <p className="font-black text-xl mb-12 leading-relaxed italic lowercase">Contact our architect team for custom node pricing and dedicated sync support.</p>
        <button className="w-full py-8 bg-white border-[8px] border-black text-black font-black text-2xl hover:bg-black hover:text-white transition-all uppercase shadow-[8px_8px_0_0_#000]">Contact_Sales_Bot</button>
      </div>
    </div>
  </div>
);`}
              htmlCode={`<!-- Retro Brutalist Pricing UI -->
<div style="background: #facc15; padding: 48px; border: 12px solid black; box-shadow: 24px 24px 0 0 #000; font-family: sans-serif; font-style: italic; font-weight: 900; text-transform: uppercase; text-align: left;">
  <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border: 12px solid black; background: black;">
    <!-- Pro Plan -->
    <div style="background: white; padding: 48px; border-right: 12px solid black;">
      <h3 style="font-size: 60px; font-weight: 900; color: black; margin: 0; line-height: 0.8;">Pro_Logic</h3>
      <p style="font-size: 24px; margin: 48px 0;">"For nodes that mean business."</p>
      <ul style="list-style: none; padding: 0; margin-bottom: 48px;">
        <li>→ UNLIMITED_NODES</li>
        <li>→ NO_SYNC_CONTRACTS</li>
      </ul>
      <div style="font-size: 128px; font-weight: 900; color: black; margin-bottom: 48px; letter-spacing: -0.05em;">$99</div>
      <button style="width: 100%; padding: 32px; background: black; color: white; border: none; font-size: 24px; font-weight: 900; text-transform: uppercase; cursor: pointer; box-shadow: 10px 10px 0 0 #e11d48;">Take_My_Money</button>
    </div>

    <!-- Enterprise Section -->
    <div style="background: #f43f5e; padding: 48px; display: flex; flex-direction: column; justify-content: center; text-align: center;">
      <h3 style="font-size: 48px; font-weight: 900; margin-bottom: 24px; line-height: 1;">Enterprise_Matrix</h3>
      <p style="font-size: 20px; font-weight: 900; border-bottom: 8px solid black; padding-bottom: 24px; margin-bottom: 32px;">Need_More_Nodes?</p>
      <button style="width: 100%; padding: 32px; background: white; border: 8px solid black; color: black; font-size: 24px; font-weight: 900; text-transform: uppercase; cursor: pointer; box-shadow: 8px 8px 0 0 #000;">Contact_Sales_Bot</button>
    </div>
  </div>
</div>`}
              cssCode={`.brutal-root { background: #facc15; padding: 48px; border: 12px solid black; box-shadow: 24px 24px 0 0 #000; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 900; text-transform: uppercase; text-align: left; }
.brutal-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border: 12px solid black; background: black; }
.brutal-card-white { background: white; padding: 48px; border-right: 12px solid black; }
.brutal-card-rose { background: #f43f5e; padding: 48px; display: flex; flex-direction: column; justify-content: center; text-align: center; }
.brutal-price { font-size: 128px; font-weight: 900; color: black; margin-bottom: 48px; letter-spacing: -0.05em; line-height: 1; }
.brutal-btn-black { width: 100%; padding: 32px; background: black; color: white; border: none; font-size: 24px; font-weight: 900; text-transform: uppercase; cursor: pointer; box-shadow: 10px 10px 0 0 #e11d48; transition: 0.1s; }
.brutal-btn-white { width: 100%; padding: 32px; background: white; border: 8px solid black; color: black; font-size: 24px; font-weight: 900; text-transform: uppercase; cursor: pointer; box-shadow: 8px 8px 0 0 #000; transition: 0.1s; }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">09. Retro Brutalist Bold Logic</span>
           <PricingBrutalist />
        </section>

        {/* 10. Range Slider */}
        <section className="bg-white p-4 rounded-xl shadow-lg relative group/pric border border-slate-200">
           <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/pric:opacity-100 transition-opacity">
             <CopyButton 
              jsxCode={`export const PricingRange = () => {
  const [nodes, setNodes] = React.useState(10);
  const price = nodes * 5;
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-[3rem] shadow-2xl border border-slate-100 p-12 text-center font-sans italic font-bold">
      <h2 className="text-4xl font-black text-slate-900 mb-2 uppercase tracking-tighter italic">Pay_as_you_grow</h2>
      <p className="text-slate-400 mb-12 text-lg">Estimated sync cost based on your logic team size.</p>
      <div className="mb-16 px-6">
        <div className="flex justify-between text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-6"><span>01 Node</span><span>100 Nodes</span></div>
        <input type="range" min="1" max="100" value={nodes} onChange={(e) => setNodes(e.target.value)} className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-blue-600" />
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="text-8xl font-black text-slate-950 tracking-tighter leading-none">{nodes}</span>
          <span className="text-slate-400 font-black uppercase tracking-widest text-xl">Logic_Nodes</span>
        </div>
      </div>
      <div className="bg-slate-50 rounded-[2rem] p-10 border border-slate-100">
        <div className="flex justify-between items-center mb-8"><span className="text-slate-500 uppercase tracking-widest text-xs font-black">Estimated_Pulse_Cost</span><span className="text-5xl font-black text-blue-600 tracking-tighter">\$ \${price}</span></div>
        <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-blue-700 transition-all">Start_Node_Sync</button>
      </div>
    </div>
  );
};`}
              htmlCode={`<!-- Dynamic Usage-Based Pricing -->
<div style="width: 100%; max-width: 672px; margin: 0 auto; background: white; border-radius: 48px; box-shadow: 0 40px 100px -20px rgba(0,0,0,0.1); border: 1px solid #f1f5f9; padding: 48px; text-align: center; font-family: sans-serif; font-style: italic; font-weight: 700;">
  <h2 style="font-size: 36px; font-weight: 900; color: #0f172a; margin-bottom: 8px; text-transform: uppercase; letter-spacing: -0.05em;">Pay_as_you_grow</h2>
  <p style="color: #94a3b8; font-size: 18px; margin-bottom: 48px;">Estimated sync cost based on your logic team size.</p>

  <input type="range" style="width: 100%; height: 12px; background: #f1f5f9; border-radius: 999px; appearance: none; margin-bottom: 40px; cursor: pointer;">
  
  <div style="display: flex; align-items: center; justify-content: center; gap: 16px; margin-bottom: 48px;">
    <span style="font-size: 96px; font-weight: 900; color: #020617; letter-spacing: -0.05em;">10</span>
    <span style="color: #94a3b8; font-size: 20px; text-transform: uppercase; letter-spacing: 0.1em;">Logic_Nodes</span>
  </div>

  <div style="background: #f8fafc; border-radius: 32px; padding: 40px; border: 1px solid #f1f5f9;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px;">
      <span style="color: #64748b; text-transform: uppercase; font-size: 10px; letter-spacing: 0.2em; font-weight: 900;">Estimated_Pulse_Cost</span>
      <span style="font-size: 48px; font-weight: 900; color: #2563eb; letter-spacing: -0.05em;">$50</span>
    </div>
    <button style="width: 100%; padding: 20px; background: #2563eb; color: white; border: none; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; cursor: pointer; box-shadow: 0 20px 25px -5px rgba(37,99,235,0.3);">Start_Node_Sync</button>
  </div>
</div>`}
              cssCode={`.range-root { width: 100%; max-width: 672px; margin: 0 auto; background: white; border-radius: 48px; box-shadow: 0 40px 100px -20px rgba(0,0,0,0.1); border: 1px solid #f1f5f9; padding: 48px; text-align: center; font-family: 'Inter', sans-serif; font-style: italic; font-weight: 700; }
input[type=range] { width: 100%; height: 12px; background: #f1f5f9; border-radius: 999px; appearance: none; outline: none; }
input[type=range]::-webkit-slider-thumb { appearance: none; width: 24px; height: 24px; background: #2563eb; border-radius: 50%; cursor: pointer; border: 4px solid white; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
.price-display { font-size: 96px; font-weight: 900; color: #020617; letter-spacing: -0.05em; line-height: 1; }
.range-btn { width: 100%; padding: 20px; background: #2563eb; color: white; border: none; border-radius: 16px; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; cursor: pointer; transition: 0.3s; }
.range-btn:hover { background: #1d4ed8; transform: translateY(-2px); box-shadow: 0 25px 30px -5px rgba(37,99,235,0.4); }`}
             />
           </div>
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest block text-center mb-8">10. Range Slider Usage Matrix</span>
           <PricingRange />
        </section>

      </div>
    </div>
  );
};

export default PricingGallery;