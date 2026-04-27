import React, { useState } from 'react';

// --- Shared Data ---
const privacyData = [
  { 
    id: "collection",
    title: "1. Information We Collect", 
    content: "We collect information you provide directly to us, such as when you create an account, update your profile, or communicate with us. This may include your name, email address, and payment information.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    )
  },
  { 
    id: "usage",
    title: "2. How We Use Information", 
    content: "We use the information we collect to provide, maintain, and improve our services, such as to process transactions, send you technical notices, and respond to your comments and questions.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    )
  },
  { 
    id: "sharing",
    title: "3. Information Sharing", 
    content: "We do not share your personal information with third parties except as described in this policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
    )
  },
  { 
    id: "security",
    title: "4. Data Security", 
    content: "We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    )
  }
];

// --- 1. The Standard SaaS (Sidebar Navigation) ---
export const PrivacyStandard = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-12 h-[600px] overflow-hidden">
    {/* Sidebar */}
    <div className="w-full md:w-1/4 flex-shrink-0 border-r border-gray-100 pr-6">
      <div className="sticky top-0">
        <div className="flex items-center gap-2 mb-8 text-blue-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          <span className="font-bold text-lg">Privacy Center</span>
        </div>
        <ul className="space-y-4 text-sm text-gray-500">
          {privacyData.map((item, i) => (
            <li key={i} className={`cursor-pointer hover:text-blue-600 transition-colors ${i === 0 ? 'text-blue-600 font-medium bg-blue-50 px-3 py-2 rounded-lg' : 'px-3 py-2'}`}>
              {item.title}
            </li>
          ))}
        </ul>
        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-xs text-gray-400">Last updated: Oct 2024</p>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="w-full md:w-3/4 overflow-y-auto pr-4 custom-scrollbar">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-gray-500 mb-10 text-lg">Your privacy is important to us. This policy outlines how we handle your data.</p>
      
      <div className="space-y-12">
        {privacyData.map((item, i) => (
          <div key={i} id={item.id} className="scroll-mt-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
            <p className="text-gray-600 leading-7 text-justify">{item.content} {item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 2. The Card Grid (Visual Breakdown) ---
export const PrivacyCards = () => (
  <div className="bg-slate-50 p-8 rounded-3xl h-[600px] overflow-y-auto">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Privacy Policy</h2>
        <p className="text-slate-500 mt-2">We value your trust. Here is how we protect your information.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {privacyData.map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {item.content}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center text-sm text-slate-400">
        Questions? Contact our Data Protection Officer at privacy@example.com
      </div>
    </div>
  </div>
);

// --- 3. The Accordion (Mobile Friendly) ---
export const PrivacyAccordion = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 h-[600px] overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h2>
        
        <div className="space-y-4">
          {privacyData.map((item, i) => (
            <div key={i} className={`border rounded-xl overflow-hidden transition-all duration-300 ${active === i ? 'border-blue-200 bg-blue-50/30' : 'border-gray-200'}`}>
              <button 
                onClick={() => setActive(active === i ? -1 : i)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className={`font-bold ${active === i ? 'text-blue-700' : 'text-gray-700'}`}>{item.title}</span>
                <span className={`transform transition-transform duration-300 ${active === i ? 'rotate-180 text-blue-600' : 'text-gray-400'}`}>
                  ▼
                </span>
              </button>
              <div className={`transition-all duration-300 ease-in-out px-5 overflow-hidden ${active === i ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 4. The Minimalist (Typography) ---
export const PrivacyMinimal = () => (
  <div className="bg-[#fcfcfc] p-12 rounded-3xl h-[600px] overflow-y-auto border border-gray-200">
    <div className="max-w-2xl mx-auto">
      <h1 className="text-5xl font-serif text-black mb-4 tracking-tight">Privacy.</h1>
      <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest text-gray-400 mb-16 border-b border-gray-200 pb-4">
        <span>Effective: Jan 01, 2024</span>
        <span>Ver 2.1</span>
      </div>
      
      <div className="space-y-16 font-serif text-gray-800">
        {privacyData.map((item, i) => (
          <div key={i}>
            <span className="block text-xs font-sans font-bold text-gray-300 mb-2">0{i+1}</span>
            <h3 className="text-2xl mb-4">{item.title.substring(3)}</h3>
            <p className="text-lg leading-relaxed text-gray-600">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 5. The Timeline (Data Flow) ---
export const PrivacyTimeline = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 h-[600px] overflow-y-auto">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Your Data Journey</h2>
        <p className="text-gray-500">How data moves through our system.</p>
      </div>

      <div className="relative border-l-2 border-blue-100 ml-4 md:ml-12 pl-8 space-y-12">
        {privacyData.map((item, i) => (
          <div key={i} className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-0 w-6 h-6 bg-white border-4 border-blue-500 rounded-full"></div>
            
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative top-[-6px]">
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 6. The Split Screen (Dark Mode) ---
export const PrivacySplit = () => (
  <div className="flex h-[600px] bg-slate-900 rounded-3xl overflow-hidden text-white">
    {/* Left Fixed */}
    <div className="w-1/3 bg-black p-12 flex flex-col justify-between border-r border-gray-800">
      <div>
        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mb-6">
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
        </div>
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-400 text-sm leading-relaxed">
          We believe you should know what data we collect from you and how we use it, and that you should have meaningful control over both.
        </p>
      </div>
      <div className="text-xs text-gray-500 font-mono">
        DOC_ID: PRIV_2024_A <br/>
        STATUS: ACTIVE
      </div>
    </div>

    {/* Right Scroll */}
    <div className="w-2/3 p-12 overflow-y-auto">
      <div className="max-w-xl space-y-12">
        {privacyData.map((item, i) => (
          <div key={i}>
            <h3 className="text-green-400 font-mono text-sm mb-2">{`// SECTION 0${i+1}`}</h3>
            <h4 className="text-xl font-bold mb-3">{item.title.substring(3)}</h4>
            <p className="text-gray-400 leading-relaxed text-sm">
              {item.content} {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 7. The Glassmorphism (Floating) ---
export const PrivacyGlass = () => (
  <div className="relative h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center p-8">
    <div className="relative w-full max-w-3xl h-full bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
      <div className="p-8 border-b border-white/20">
        <h2 className="text-3xl font-bold text-white drop-shadow-sm">Privacy Policy</h2>
      </div>
      
      <div className="p-8 overflow-y-auto text-white">
        {privacyData.map((item, i) => (
          <div key={i} className="mb-8 p-6 bg-black/10 rounded-2xl border border-white/10 hover:bg-black/20 transition-colors">
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-white/80 leading-relaxed font-medium">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 8. The Brutalist (Bold Blocks) ---
export const PrivacyBrutalist = () => (
  <div className="bg-pink-500 p-8 rounded-3xl border-4 border-black h-[600px] flex flex-col">
    <div className="bg-white border-4 border-black p-6 mb-8 shadow-[8px_8px_0_0_#000]">
      <h1 className="text-5xl font-black uppercase">Your<br/>Data.</h1>
    </div>
    
    <div className="overflow-y-auto flex-1 pr-2 custom-scrollbar">
      <div className="space-y-6">
        {privacyData.map((item, i) => (
          <div key={i} className="bg-white border-4 border-black p-6 hover:-translate-y-1 transition-transform">
            <h3 className="text-xl font-black uppercase mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">
              {item.title}
            </h3>
            <p className="font-bold text-lg leading-tight">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 9. The Neumorphic (Soft) ---
export const PrivacyNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-12 rounded-3xl h-[600px] overflow-y-auto">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-[#e0e5ec] rounded-full shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center mx-auto mb-6 text-2xl text-gray-500">
          🛡️
        </div>
        <h2 className="text-3xl font-bold text-gray-700">Privacy Policy</h2>
      </div>

      <div className="space-y-10">
        {privacyData.map((item, i) => (
          <div key={i} className="bg-[#e0e5ec] p-8 rounded-[30px] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
            <h3 className="text-xl font-bold text-gray-700 mb-4">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 10. The FAQ Style (Question Based) ---
export const PrivacyFAQ = () => (
  <div className="bg-white p-12 rounded-3xl border border-gray-100 h-[600px] overflow-y-auto">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Privacy & Data</h2>
      <p className="text-gray-500 mb-12">Common questions about how we handle your information.</p>
      
      <div className="grid gap-8">
        {privacyData.map((item, i) => (
          <div key={i} className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center font-bold">
              Q{i+1}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title.substring(3)}?</h3>
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-gray-50 rounded-xl text-center">
        <p className="text-sm text-gray-600">Still have questions?</p>
        <a href="#" className="text-indigo-600 font-bold hover:underline">Contact our DPO</a>
      </div>
    </div>
  </div>
);


// --- Main Gallery Wrapper ---
const PrivacyGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-100 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Privacy Policy Designs</h1>
        <p className="text-slate-500">Readable and trustworthy layouts for legal content.</p>
      </div>
      
      <div className="space-y-32 max-w-6xl mx-auto">
        
        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">01. Standard SaaS (Sticky Sidebar)</span>
          <PrivacyStandard />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">02. Card Grid</span>
          <PrivacyCards />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">03. Accordion</span>
          <PrivacyAccordion />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">04. Minimalist Typography</span>
          <PrivacyMinimal />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">05. Data Journey Timeline</span>
          <PrivacyTimeline />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">06. Dark Mode Split</span>
          <PrivacySplit />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">07. Glassmorphism</span>
          <PrivacyGlass />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">08. Brutalist</span>
          <PrivacyBrutalist />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">09. Neumorphic</span>
          <PrivacyNeumorphic />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">10. FAQ Style</span>
          <PrivacyFAQ />
        </section>

      </div>
    </div>
  );
};

export default PrivacyGallery;