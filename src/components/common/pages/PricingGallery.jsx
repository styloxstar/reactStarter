import React, { useState } from 'react';

// --- Shared Components ---
const CheckIcon = ({ color = "text-green-500" }) => (
  <svg className={`w-5 h-5 ${color} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
);

const CrossIcon = () => (
  <svg className="w-5 h-5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
);

// --- 1. The Standard SaaS (Toggle) ---
export const PricingStandard = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Toggle */}
      <div className="flex justify-center items-center gap-4 mb-12">
        <span className={`text-sm font-bold ${!annual ? 'text-blue-600' : 'text-gray-500'}`}>Monthly</span>
        <button 
          onClick={() => setAnnual(!annual)}
          className="relative w-14 h-8 bg-gray-200 rounded-full p-1 transition-colors duration-300 focus:outline-none"
        >
          <div className={`w-6 h-6 bg-blue-600 rounded-full shadow-md transform transition-transform duration-300 ${annual ? 'translate-x-6' : 'translate-x-0'}`}></div>
        </button>
        <span className={`text-sm font-bold ${annual ? 'text-blue-600' : 'text-gray-500'}`}>Yearly <span className="text-green-500 text-xs">(Save 20%)</span></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Starter', 'Pro', 'Enterprise'].map((plan, i) => (
          <div key={plan} className={`relative bg-white rounded-2xl border ${i === 1 ? 'border-blue-600 shadow-xl scale-105 z-10' : 'border-gray-200'} p-8 flex flex-col`}>
            {i === 1 && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>}
            <h3 className="text-lg font-bold text-gray-900 mb-2">{plan}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold tracking-tight">${annual ? (i + 1) * 10 * 10 : (i + 1) * 10}</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">Perfect for {i === 0 ? 'individuals' : i === 1 ? 'small teams' : 'large organizations'}.</p>
            <ul className="space-y-4 mb-8 flex-1">
              {[1,2,3,4].map(feat => (
                <li key={feat} className="flex items-start gap-3 text-sm text-gray-600">
                  {feat <= (i + 2) ? <CheckIcon /> : <CrossIcon />}
                  <span>Feature {feat} included</span>
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-lg font-bold transition-colors ${i === 1 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}>
              Choose {plan}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 2. The Minimalist (Clean Text) ---
export const PricingMinimal = () => (
  <div className="max-w-5xl mx-auto px-6 bg-white py-12">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-serif text-slate-900 mb-4">Simple Pricing.</h2>
      <p className="text-slate-500">No credit card required. Cancel anytime.</p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-100">
      <div className="text-center px-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Hobby</h3>
        <div className="text-5xl font-light text-slate-900 mb-6">$0</div>
        <p className="text-slate-500 mb-8 leading-relaxed">
          For personal projects and experiments. Includes 1GB storage and community support.
        </p>
        <button className="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-slate-600 hover:border-slate-600 transition-colors">Start Free</button>
      </div>
      
      <div className="text-center px-6 pt-12 md:pt-0">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Pro</h3>
        <div className="text-5xl font-light text-slate-900 mb-6">$29</div>
        <p className="text-slate-500 mb-8 leading-relaxed">
          For professionals requiring more power. Unlimited storage, priority support, and API access.
        </p>
        <button className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors">Get Started</button>
      </div>
    </div>
  </div>
);

// --- 3. The Dark Mode (Developer Focus) ---
export const PricingDark = () => (
  <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 py-8">
          <h2 className="text-3xl font-bold mb-4">Developer-first pricing</h2>
          <p className="text-slate-400 mb-8">Scale your application with infrastructure that grows with you.</p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-900/30 flex items-center justify-center text-green-400">✓</div>
              <span className="text-sm font-mono text-slate-300">Unlimited API Calls</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-900/30 flex items-center justify-center text-green-400">✓</div>
              <span className="text-sm font-mono text-slate-300">99.99% Uptime</span>
            </div>
          </div>
        </div>
        
        {['Standard', 'Scale'].map((plan, i) => (
          <div key={plan} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-colors group">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{plan}</h3>
              {i === 1 && <span className="bg-blue-600 text-xs px-2 py-1 rounded font-bold">RECOMMENDED</span>}
            </div>
            <div className="text-3xl font-bold font-mono mb-6">${i === 0 ? '49' : '99'} <span className="text-sm font-sans text-slate-400 font-normal">/mo</span></div>
            <ul className="space-y-3 mb-8 text-sm text-slate-400 border-t border-slate-700 pt-6">
              <li>{i === 0 ? '5' : '25'} Team Members</li>
              <li>{i === 0 ? '10k' : '100k'} Monthly Actives</li>
              <li>{i === 0 ? '24h' : '1h'} Support Response</li>
            </ul>
            <button className="w-full py-3 bg-slate-700 text-white rounded-lg font-bold group-hover:bg-blue-600 transition-colors">Select Plan</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 4. The Comparison Table (Enterprise) ---
export const PricingTable = () => (
  <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="p-6 bg-gray-50 border-b border-gray-200 w-1/3"></th>
            <th className="p-6 bg-gray-50 border-b border-gray-200 w-1/4 text-center">
              <div className="font-bold text-lg">Basic</div>
              <div className="text-gray-500 font-normal">$10/mo</div>
            </th>
            <th className="p-6 bg-gray-50 border-b border-gray-200 w-1/4 text-center border-x border-gray-200">
              <div className="font-bold text-lg text-blue-600">Pro</div>
              <div className="text-gray-500 font-normal">$29/mo</div>
            </th>
            <th className="p-6 bg-gray-50 border-b border-gray-200 w-1/4 text-center">
              <div className="font-bold text-lg">Team</div>
              <div className="text-gray-500 font-normal">$59/mo</div>
            </th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-600">
          {[
            { name: 'Users', basic: '1', pro: '5', team: 'Unlimited' },
            { name: 'Storage', basic: '10GB', pro: '100GB', team: '1TB' },
            { name: 'Analytics', basic: false, pro: true, team: true },
            { name: 'Custom Domain', basic: false, pro: true, team: true },
            { name: 'SSO', basic: false, pro: false, team: true },
          ].map((row, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="p-4 border-b border-gray-100 font-medium pl-8">{row.name}</td>
              <td className="p-4 border-b border-gray-100 text-center">
                {typeof row.basic === 'boolean' ? (row.basic ? <CheckIcon className="mx-auto"/> : <span className="text-gray-300">-</span>) : row.basic}
              </td>
              <td className="p-4 border-b border-gray-100 border-x border-gray-100 text-center bg-blue-50/10">
                {typeof row.pro === 'boolean' ? (row.pro ? <CheckIcon className="mx-auto"/> : <span className="text-gray-300">-</span>) : row.pro}
              </td>
              <td className="p-4 border-b border-gray-100 text-center">
                {typeof row.team === 'boolean' ? (row.team ? <CheckIcon className="mx-auto"/> : <span className="text-gray-300">-</span>) : row.team}
              </td>
            </tr>
          ))}
          <tr>
            <td className="p-4"></td>
            <td className="p-4 text-center"><button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">Choose</button></td>
            <td className="p-4 text-center border-x border-gray-100"><button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Choose</button></td>
            <td className="p-4 text-center"><button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">Choose</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

// --- 5. The Glassmorphism (Premium) ---
export const PricingGlass = () => (
  <div className="relative w-full max-w-4xl mx-auto p-10 rounded-3xl overflow-hidden bg-gradient-to-tr from-rose-500 via-fuchsia-500 to-indigo-500">
    <div className="grid md:grid-cols-2 gap-8 relative z-10">
      <div className="text-white p-4 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">Unlock Premium</h2>
        <p className="text-white/80 mb-8 text-lg">Get access to all exclusive features and elevate your workflow today.</p>
        <ul className="space-y-3 mb-8">
          <li className="flex items-center gap-3"><div className="bg-white/20 p-1 rounded-full"><CheckIcon color="text-white"/></div> No Ads</li>
          <li className="flex items-center gap-3"><div className="bg-white/20 p-1 rounded-full"><CheckIcon color="text-white"/></div> Offline Mode</li>
          <li className="flex items-center gap-3"><div className="bg-white/20 p-1 rounded-full"><CheckIcon color="text-white"/></div> 4K Streaming</li>
        </ul>
      </div>
      
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl text-center text-white">
        <div className="text-sm font-bold uppercase tracking-wider mb-2 opacity-80">All Access Pass</div>
        <div className="text-6xl font-bold mb-2">$12</div>
        <div className="text-white/60 mb-8">per month, billed yearly</div>
        <button className="w-full py-4 bg-white text-fuchsia-600 font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">
          Start Free Trial
        </button>
        <p className="text-xs mt-4 text-white/50">7-day money back guarantee.</p>
      </div>
    </div>
  </div>
);

// --- 6. The Single Focus (Membership) ---
export const PricingSingle = () => (
  <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
    <div className="md:w-2/3 p-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Lifetime Membership</h3>
      <p className="text-gray-500 mb-6">One time payment. Unlimited access forever.</p>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {['All Courses', 'Source Code', 'Community Access', 'Certificates'].map(item => (
          <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
            <CheckIcon /> {item}
          </div>
        ))}
      </div>
      <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800">
        "The best investment I made for my career this year." — <span className="font-bold">Jane D.</span>
      </div>
    </div>
    <div className="md:w-1/3 bg-gray-50 p-10 flex flex-col items-center justify-center border-l border-gray-100 text-center">
      <div className="text-gray-400 line-through text-lg">$299</div>
      <div className="text-5xl font-bold text-gray-900 mb-2">$149</div>
      <div className="text-green-600 text-xs font-bold uppercase mb-6">Save 50% Today</div>
      <button className="w-full py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-black transition-colors">
        Buy Now
      </button>
    </div>
  </div>
);

// --- 7. The Cyberpunk (Web3) ---
export const PricingCyber = () => (
  <div className="bg-black p-10 rounded-xl border border-gray-800">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-mono font-bold text-white mb-2">MINTING_PLANS</h2>
      <div className="h-1 w-24 bg-cyan-500 mx-auto"></div>
    </div>
    
    <div className="grid md:grid-cols-3 gap-6">
      {['Novice', 'Hacker', 'Cyberlord'].map((plan, i) => (
        <div key={plan} className={`relative bg-gray-900 p-6 border-2 transition-all group ${i === 1 ? 'border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.4)]' : 'border-gray-800 hover:border-gray-600'}`}>
          <div className="text-gray-400 font-mono text-sm mb-2">Tier {i+1}</div>
          <h3 className={`text-xl font-bold uppercase mb-4 ${i === 1 ? 'text-cyan-400' : 'text-white'}`}>{plan}</h3>
          <div className="text-3xl font-mono text-white mb-6">{i === 0 ? '0.05' : i === 1 ? '0.15' : '0.5'} <span className="text-sm">ETH</span></div>
          
          <button className={`w-full py-2 font-mono font-bold uppercase border-2 transition-all ${
            i === 1 
            ? 'bg-cyan-500 border-cyan-500 text-black hover:bg-transparent hover:text-cyan-500' 
            : 'border-white text-white hover:bg-white hover:text-black'
          }`}>
            Mint
          </button>
        </div>
      ))}
    </div>
  </div>
);

// --- 8. The Neumorphic (Soft) ---
export const PricingNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-10 rounded-3xl flex flex-col items-center">
    <div className="grid md:grid-cols-3 gap-12">
      {['Basic', 'Standard', 'Premium'].map((plan, i) => (
        <div key={plan} className={`w-64 p-8 rounded-[30px] bg-[#e0e5ec] flex flex-col items-center transition-transform hover:-translate-y-2 ${i === 1 ? 'shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]' : 'shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]'}`}>
          <h3 className="text-lg font-bold text-gray-600 mb-4">{plan}</h3>
          <div className={`w-24 h-24 rounded-full bg-[#e0e5ec] flex items-center justify-center text-2xl font-bold text-gray-700 mb-8 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]`}>
            ${(i + 1) * 20}
          </div>
          <ul className="space-y-3 mb-8 text-center text-sm text-gray-500">
            <li>5 Projects</li>
            <li>10GB Storage</li>
            <li>{i > 0 ? 'Priority' : 'Basic'} Support</li>
          </ul>
          <button className="px-8 py-3 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] active:scale-95 transition-all">
            Select
          </button>
        </div>
      ))}
    </div>
  </div>
);

// --- 9. The Brutalist (Bold) ---
export const PricingBrutalist = () => (
  <div className="bg-yellow-400 p-8 border-4 border-black shadow-[12px_12px_0_0_#000]">
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white border-4 border-black p-8 relative">
        <h3 className="text-4xl font-black uppercase mb-4">Pro Plan</h3>
        <p className="font-bold text-xl mb-8">For those who mean business.</p>
        <ul className="space-y-2 font-bold mb-8">
          <li>→ UNLIMITED EVERYTHING</li>
          <li>→ NO CONTRACTS</li>
          <li>→ INSTANT SETUP</li>
        </ul>
        <div className="text-6xl font-black mb-8">$99</div>
        <button className="w-full py-4 bg-black text-white font-black text-xl hover:bg-pink-500 hover:text-black transition-colors uppercase">
          Take My Money
        </button>
      </div>
      
      <div className="bg-pink-500 border-4 border-black p-8 flex flex-col justify-center text-center">
        <h3 className="text-3xl font-black uppercase mb-4">Enterprise</h3>
        <p className="font-bold border-b-4 border-black pb-4 mb-4">Need more power?</p>
        <p className="font-bold text-lg mb-8">Contact us for custom pricing and dedicated support.</p>
        <button className="w-full py-4 bg-white border-4 border-black text-black font-black text-xl hover:bg-black hover:text-white transition-colors uppercase shadow-[4px_4px_0_0_#000]">
          Contact Sales
        </button>
      </div>
    </div>
  </div>
);

// --- 10. The Range Slider (Usage Based) ---
export const PricingRange = () => {
  const [users, setUsers] = useState(10);
  const price = users * 5;

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Pay as you grow</h2>
      <p className="text-gray-500 mb-10">Estimated cost based on your team size.</p>
      
      <div className="mb-12 px-4">
        <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
          <span>1 User</span>
          <span>100 Users</span>
        </div>
        <input 
          type="range" 
          min="1" 
          max="100" 
          value={users} 
          onChange={(e) => setUsers(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <div className="mt-6">
          <span className="text-5xl font-bold text-gray-900">{users}</span>
          <span className="text-gray-500 font-medium ml-2">Users</span>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">Estimated Monthly Cost</span>
          <span className="text-3xl font-bold text-blue-600">${price}</span>
        </div>
        <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">
          Start Subscription
        </button>
      </div>
    </div>
  );
};


// --- Main Gallery Wrapper ---
const PricingGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Pricing Page Components</h1>
        <p className="text-slate-500">Optimized pricing tables and cards for higher conversion.</p>
      </div>
      
      <div className="space-y-32">
        
        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">01. Standard SaaS (Toggle)</span>
          <PricingStandard />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">02. Minimalist</span>
          <PricingMinimal />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">03. Dark Mode (Dev)</span>
          <PricingDark />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">04. Comparison Table</span>
          <PricingTable />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">05. Glassmorphism</span>
          <PricingGlass />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">06. Single Membership</span>
          <PricingSingle />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">07. Cyberpunk Web3</span>
          <PricingCyber />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">08. Neumorphic</span>
          <PricingNeumorphic />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">09. Brutalist</span>
          <PricingBrutalist />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">10. Range Slider (Usage)</span>
          <PricingRange />
        </section>

      </div>
    </div>
  );
};

export default PricingGallery;