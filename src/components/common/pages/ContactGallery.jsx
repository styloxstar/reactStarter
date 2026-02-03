import React from 'react';

// --- Shared Components ---
const InputGroup = ({ label, type = "text", placeholder }) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder}
      className="px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
    />
  </div>
);

const TextAreaGroup = ({ label, placeholder }) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea 
      rows="4" 
      placeholder={placeholder}
      className="px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white resize-none"
    ></textarea>
  </div>
);

// --- 1. The Standard Split (SaaS) ---
export const ContactStandard = () => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden flex flex-col md:flex-row max-w-6xl mx-auto h-auto md:h-[600px]">
    {/* Info Side */}
    <div className="w-full md:w-5/12 bg-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
        <p className="text-slate-400 mb-12">Fill up the form and our Team will get back to you within 24 hours.</p>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">📞</div>
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">📧</div>
            <span>hello@brand.com</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">📍</div>
            <span>102 Street, San Francisco</span>
          </div>
        </div>
      </div>
      
      {/* Decorative Circles */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-slate-800 rounded-full opacity-50"></div>
      <div className="absolute top-10 right-10 w-24 h-24 bg-blue-600 rounded-full opacity-20 blur-2xl"></div>
    </div>

    {/* Form Side */}
    <div className="w-full md:w-7/12 p-12 bg-white flex flex-col justify-center">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputGroup label="First Name" placeholder="John" />
          <InputGroup label="Last Name" placeholder="Doe" />
        </div>
        <InputGroup label="Email" type="email" placeholder="john@example.com" />
        <TextAreaGroup label="Message" placeholder="Write your message..." />
        <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors self-end w-full md:w-auto">
          Send Message
        </button>
      </form>
    </div>
  </div>
);

// --- 2. The Minimalist (Typography) ---
export const ContactMinimal = () => (
  <div className="max-w-3xl mx-auto p-8 bg-white text-center">
    <h2 className="text-5xl font-serif text-slate-900 mb-4">Let's Talk.</h2>
    <p className="text-slate-500 mb-12">We are open for new collaborations.</p>
    
    <form className="space-y-12 text-left">
      <div className="group relative">
        <input type="text" placeholder="What's your name?" className="w-full py-4 border-b border-gray-300 text-xl focus:border-black outline-none placeholder-gray-400 transition-colors bg-transparent" />
      </div>
      <div className="group relative">
        <input type="email" placeholder="Your email address" className="w-full py-4 border-b border-gray-300 text-xl focus:border-black outline-none placeholder-gray-400 transition-colors bg-transparent" />
      </div>
      <div className="group relative">
        <textarea rows="2" placeholder="Tell us about your project" className="w-full py-4 border-b border-gray-300 text-xl focus:border-black outline-none placeholder-gray-400 transition-colors bg-transparent resize-none"></textarea>
      </div>
      <div className="flex justify-center">
        <button className="px-12 py-4 bg-black text-white text-sm uppercase tracking-widest font-bold hover:bg-gray-800 transition-colors rounded-full">
          Submit Inquiry
        </button>
      </div>
    </form>
  </div>
);

// --- 3. The Map Overlay (Local Biz) ---
export const ContactMap = () => (
  <div className="relative w-full h-[600px] bg-gray-200 rounded-xl overflow-hidden">
    {/* Background Image simulating Map */}
    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60" alt="Map" />
    
    <div className="absolute inset-0 flex items-center justify-end p-4 md:p-12">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative z-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Store</h3>
        <div className="space-y-4 mb-8">
          <div className="flex gap-4">
            <div className="bg-orange-100 p-2 rounded-lg text-orange-600">📍</div>
            <div>
              <p className="font-bold text-gray-900">Headquarters</p>
              <p className="text-gray-500 text-sm">4517 Washington Ave. Manchester, Kentucky 39495</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-orange-100 p-2 rounded-lg text-orange-600">🕒</div>
            <div>
              <p className="font-bold text-gray-900">Opening Hours</p>
              <p className="text-gray-500 text-sm">Mon-Fri: 9am - 5pm</p>
            </div>
          </div>
        </div>
        <form className="space-y-4">
          <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 outline-none" />
          <textarea rows="3" placeholder="Message" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 outline-none resize-none"></textarea>
          <button className="w-full py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors">
            Get Directions
          </button>
        </form>
      </div>
    </div>
  </div>
);

// --- 4. The Glassmorphism (Vibrant) ---
export const ContactGlass = () => (
  <div className="relative flex items-center justify-center min-h-[600px] w-full rounded-xl overflow-hidden bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 p-4">
    {/* Blobs */}
    <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-60 animate-pulse"></div>
    <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-60 animate-pulse"></div>

    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-2xl">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-md">Get in Touch</h2>
        <p className="text-white/80">We'd love to hear from you.</p>
      </div>
      
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="text" placeholder="Name" className="w-full px-5 py-3 rounded-xl bg-white/20 border border-white/10 text-white placeholder-white/70 focus:bg-white/30 focus:border-white outline-none transition-colors" />
        <input type="email" placeholder="Email" className="w-full px-5 py-3 rounded-xl bg-white/20 border border-white/10 text-white placeholder-white/70 focus:bg-white/30 focus:border-white outline-none transition-colors" />
        <textarea rows="4" placeholder="Message" className="w-full px-5 py-3 rounded-xl bg-white/20 border border-white/10 text-white placeholder-white/70 focus:bg-white/30 focus:border-white outline-none transition-colors col-span-1 md:col-span-2 resize-none"></textarea>
        
        <div className="col-span-1 md:col-span-2 flex justify-center">
          <button className="px-10 py-3 bg-white text-purple-600 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
);

// --- 5. The Support Center (Help Desk) ---
export const ContactSupport = () => (
  <div className="bg-slate-50 p-12 rounded-3xl text-center">
    <h2 className="text-3xl font-bold text-slate-900 mb-4">How can we help?</h2>
    <p className="text-slate-500 mb-12 max-w-xl mx-auto">Please select a topic below so we can route your request to the right team.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
      {['Sales Inquiry', 'Technical Support', 'Billing Issue'].map((topic) => (
        <button key={topic} className="p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all group">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 mx-auto group-hover:bg-blue-600 group-hover:text-white transition-colors">
            ?
          </div>
          <h3 className="font-bold text-slate-700">{topic}</h3>
        </button>
      ))}
    </div>

    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-left">
      <h3 className="font-bold text-lg mb-6">Or send us a direct message</h3>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
           <InputGroup label="Name" placeholder="Name" />
           <InputGroup label="Email" placeholder="Email" />
        </div>
        <TextAreaGroup label="Details" placeholder="Describe your issue..." />
        <button className="w-full py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800">Submit Ticket</button>
      </form>
    </div>
  </div>
);

// --- 6. The Cyberpunk (Terminal) ---
export const ContactCyber = () => (
  <div className="bg-black p-1 border-2 border-green-500 rounded-xl max-w-4xl mx-auto shadow-[0_0_20px_rgba(34,197,94,0.2)]">
    <div className="bg-gray-900 p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-green-500 opacity-20"></div>
      
      <div className="grid md:grid-cols-2 gap-12 font-mono">
        <div>
          <h2 className="text-green-500 text-4xl font-bold mb-6 tracking-tighter">
            &lt;CONTACT /&gt;
          </h2>
          <p className="text-gray-400 mb-8 text-sm">
            ESTABLISHING SECURE CONNECTION...<br/>
            TRANSMITTING DATA PACKETS TO SERVER.<br/>
            PLEASE INPUT PARAMETERS.
          </p>
          <div className="space-y-4 text-green-400 text-sm">
             <p>> STATUS: ONLINE</p>
             <p>> LATENCY: 24ms</p>
             <p>> ENCRYPTION: 256-BIT</p>
          </div>
        </div>

        <form className="space-y-6">
          <div className="relative group">
            <span className="absolute left-4 top-3 text-green-700">></span>
            <input type="text" placeholder="USER_ID" className="w-full bg-black border border-gray-700 text-green-400 pl-8 pr-4 py-3 focus:border-green-500 focus:outline-none placeholder-gray-800 uppercase" />
          </div>
          <div className="relative group">
            <span className="absolute left-4 top-3 text-green-700">></span>
            <input type="email" placeholder="COMM_LINK (EMAIL)" className="w-full bg-black border border-gray-700 text-green-400 pl-8 pr-4 py-3 focus:border-green-500 focus:outline-none placeholder-gray-800 uppercase" />
          </div>
          <div className="relative group">
            <span className="absolute left-4 top-3 text-green-700">></span>
            <textarea rows="4" placeholder="DATA_PAYLOAD" className="w-full bg-black border border-gray-700 text-green-400 pl-8 pr-4 py-3 focus:border-green-500 focus:outline-none placeholder-gray-800 uppercase resize-none"></textarea>
          </div>
          <button className="w-full py-4 bg-green-900/30 border border-green-500 text-green-500 font-bold uppercase hover:bg-green-500 hover:text-black transition-all tracking-widest">
            [ INITIALIZE_SEND ]
          </button>
        </form>
      </div>
    </div>
  </div>
);

// --- 7. The Neumorphic (Soft UI) ---
export const ContactNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-12 rounded-3xl max-w-3xl mx-auto flex flex-col md:flex-row gap-12 items-center">
    <div className="flex-1">
      <div className="w-24 h-24 rounded-full bg-[#e0e5ec] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] flex items-center justify-center text-4xl mb-6">
        👋
      </div>
      <h2 className="text-3xl font-bold text-gray-700 mb-4">Say Hello!</h2>
      <p className="text-gray-500">We're always looking for new friends. Drop us a line and let's start a conversation.</p>
    </div>

    <form className="flex-1 w-full space-y-6">
      <div className="rounded-xl bg-[#e0e5ec] p-1 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
        <input type="text" placeholder="Name" className="w-full bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 px-4 py-2" />
      </div>
      <div className="rounded-xl bg-[#e0e5ec] p-1 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
        <input type="email" placeholder="Email" className="w-full bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 px-4 py-2" />
      </div>
      <div className="rounded-xl bg-[#e0e5ec] p-1 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
        <textarea rows="3" placeholder="Message" className="w-full bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 px-4 py-2 resize-none"></textarea>
      </div>
      <button className="w-full py-3 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] active:scale-95 transition-all">
        Send
      </button>
    </form>
  </div>
);

// --- 8. The Brutalist (Bold) ---
export const ContactBrutalist = () => (
  <div className="bg-yellow-400 p-8 border-4 border-black max-w-4xl mx-auto shadow-[12px_12px_0_0_#000]">
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white border-4 border-black p-8">
        <h2 className="text-6xl font-black uppercase leading-none mb-6">Call<br/>Us<br/>Now</h2>
        <div className="space-y-4 font-bold text-xl">
          <p>📧 contact@bold.com</p>
          <p>📱 +1-800-BOLD-UI</p>
          <p>🏢 123 Design District</p>
        </div>
      </div>
      
      <form className="space-y-4">
        <input type="text" placeholder="YOUR NAME" className="w-full p-4 border-4 border-black font-bold focus:outline-none focus:bg-pink-300 transition-colors uppercase placeholder-black/50" />
        <input type="email" placeholder="YOUR EMAIL" className="w-full p-4 border-4 border-black font-bold focus:outline-none focus:bg-pink-300 transition-colors uppercase placeholder-black/50" />
        <textarea rows="4" placeholder="WHAT'S UP?" className="w-full p-4 border-4 border-black font-bold focus:outline-none focus:bg-pink-300 transition-colors uppercase placeholder-black/50 resize-none"></textarea>
        
        <button className="w-full py-4 bg-black text-white font-black text-2xl uppercase hover:bg-white hover:text-black border-4 border-transparent hover:border-black transition-colors">
          SHOUT IT
        </button>
      </form>
    </div>
  </div>
);

// --- 9. The Image Overlay (Agency) ---
export const ContactOverlay = () => (
  <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-xl">
    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Background" />
    <div className="absolute inset-0 bg-slate-900/60"></div>
    
    <div className="absolute inset-0 flex items-center justify-end p-4 md:p-16">
      <div className="bg-white p-8 md:p-10 max-w-lg w-full shadow-2xl">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Start a Project</h2>
        <form className="space-y-6">
          <div className="border-b border-gray-300 py-2">
            <input type="text" placeholder="Your Name" className="w-full appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
          </div>
          <div className="border-b border-gray-300 py-2">
            <input type="email" placeholder="Email Address" className="w-full appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
          </div>
          <div className="border-b border-gray-300 py-2">
            <textarea rows="2" placeholder="Tell us about your needs" className="w-full appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none resize-none"></textarea>
          </div>
          <button className="bg-slate-900 text-white font-bold py-4 px-8 w-full hover:bg-slate-800 transition-colors">
            Get Consultation
          </button>
        </form>
      </div>
    </div>
  </div>
);

// --- 10. The Floating Action (Compact) ---
export const ContactFloating = () => (
  <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
    <div className="bg-indigo-600 p-6 text-white text-center">
      <h2 className="text-xl font-bold">Quick Message</h2>
      <p className="text-indigo-100 text-sm">We usually reply within an hour.</p>
    </div>
    <div className="p-6">
      <form className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Topic</label>
          <select className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-indigo-500 text-sm">
            <option>General Question</option>
            <option>Support</option>
            <option>Feedback</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email</label>
          <input type="email" className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-indigo-500" />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Message</label>
          <textarea rows="3" className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-indigo-500 resize-none"></textarea>
        </div>
        <button className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
          <span>🚀</span> Send Now
        </button>
      </form>
    </div>
  </div>
);


// --- Main Gallery Wrapper ---
const ContactGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-100 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Contact Pages</h1>
        <p className="text-slate-500">Design patterns for user inquiries and lead generation.</p>
      </div>
      
      <div className="space-y-16">
        
        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">01. Standard SaaS Split</span>
          <ContactStandard />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">02. Minimalist Typography</span>
          <ContactMinimal />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">03. Map Overlay</span>
          <ContactMap />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">04. Glassmorphism</span>
          <ContactGlass />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">05. Support Center</span>
          <ContactSupport />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">06. Cyberpunk Terminal</span>
          <ContactCyber />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">07. Neumorphic</span>
          <ContactNeumorphic />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">08. Brutalist</span>
          <ContactBrutalist />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">09. Agency Overlay</span>
          <ContactOverlay />
        </section>

        <section className='box-shadow p-4 rounded-lg'>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6">10. Compact Card</span>
          <ContactFloating />
        </section>

      </div>
    </div>
  );
};

export default ContactGallery;