import React from 'react';
import CopyButton from '../CopyButton';

// --- Original High-Fidelity Variants ---

export const ContactStandard = () => (
  <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl max-w-4xl mx-auto font-sans">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-500 mb-8">Have a question? We'd love to hear from you.</p>
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-gray-600">
            <span className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">📍</span>
            <span>123 Innovation Way, SF</span>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <span className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">📧</span>
            <span>hello@example.com</span>
          </div>
        </div>
      </div>
      <form className="space-y-6">
        <input type="text" placeholder="Your Name" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-indigo-500 outline-none transition-all" />
        <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-indigo-500 outline-none transition-all" />
        <textarea rows="4" placeholder="Your Message" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-indigo-500 outline-none transition-all resize-none"></textarea>
        <button className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
          Send Message
        </button>
      </form>
    </div>
  </div>
);

export const ContactSimple = () => (
  <div className="max-w-2xl mx-auto text-center font-sans p-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple & Direct</h2>
    <p className="text-gray-500 mb-10 text-lg">Let's talk about your project.</p>
    <form className="space-y-4">
      <input type="text" placeholder="Full Name" className="w-full p-4 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-100 transition-all" />
      <input type="email" placeholder="Email" className="w-full p-4 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-100 transition-all" />
      <textarea rows="4" placeholder="How can we help?" className="w-full p-4 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-100 transition-all resize-none"></textarea>
      <button className="px-10 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-black transition-all">
        Send Inquiry
      </button>
    </form>
  </div>
);

export const ContactSplit = () => (
  <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto font-sans text-left">
    <div className="md:w-2/5 bg-indigo-600 p-12 text-white">
      <h2 className="text-4xl font-bold mb-6 leading-tight">Let's build <br /> something <br /> great.</h2>
      <p className="text-indigo-100 mb-12">Our team is ready to help you take your project to the next level.</p>
      <div className="pt-8 border-t border-indigo-500/50">
        <p className="text-sm uppercase tracking-widest font-bold opacity-60 mb-2">Office Hours</p>
        <p>Mon - Fri, 9am - 6pm EST</p>
      </div>
    </div>
    <form className="md:w-3/5 p-12 space-y-8 bg-white">
      <div className="grid grid-cols-2 gap-6">
        <input type="text" placeholder="First Name" className="p-4 border-b border-gray-200 focus:border-indigo-600 outline-none transition-all" />
        <input type="text" placeholder="Last Name" className="p-4 border-b border-gray-200 focus:border-indigo-600 outline-none transition-all" />
      </div>
      <input type="email" placeholder="Email Address" className="w-full p-4 border-b border-gray-200 focus:border-indigo-600 outline-none transition-all" />
      <textarea rows="4" placeholder="Tell us more..." className="w-full p-4 border-b border-gray-200 focus:border-indigo-600 outline-none transition-all resize-none"></textarea>
      <button className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-all shadow-xl">
        Get Started →
      </button>
    </form>
  </div>
);

export const ContactDark = () => (
  <div className="bg-slate-900 p-12 rounded-3xl max-w-4xl mx-auto text-white font-sans text-left">
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-2 text-white">Premium Support</h2>
      <p className="text-slate-400">Available 24/7 for our enterprise clients.</p>
    </div>
    <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <input type="text" placeholder="Name" className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-white outline-none focus:border-blue-500 transition-all" />
      <input type="email" placeholder="Email" className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-white outline-none focus:border-blue-500 transition-all" />
      <textarea rows="4" placeholder="Details" className="md:col-span-2 bg-slate-800 p-4 rounded-xl border border-slate-700 text-white outline-none focus:border-blue-500 transition-all resize-none"></textarea>
      <button className="md:col-span-2 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/40">
        Initiate Support Session
      </button>
    </form>
  </div>
);

export const ContactMinimal = () => (
  <div className="max-w-4xl mx-auto font-sans p-12 text-left">
    <div className="grid md:grid-cols-2 gap-20">
      <div>
        <h2 className="text-5xl font-light mb-10 tracking-tight text-gray-900">Let's <br /> Connect.</h2>
        <div className="space-y-2 text-gray-500">
          <p>London, UK</p>
          <p>hello@minimal.co</p>
          <p>+44 20 7946 0123</p>
        </div>
      </div>
      <form className="space-y-10">
        <input type="text" placeholder="Name" className="w-full py-4 border-b border-gray-200 outline-none focus:border-black transition-all" />
        <input type="email" placeholder="Email" className="w-full py-4 border-b border-gray-200 outline-none focus:border-black transition-all" />
        <textarea rows="3" placeholder="Message" className="w-full py-4 border-b border-gray-200 outline-none focus:border-black transition-all resize-none"></textarea>
        <button className="text-lg font-bold border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
          Send Message
        </button>
      </form>
    </div>
  </div>
);

export const ContactAccent = () => (
  <div className="bg-indigo-600 p-1 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)] rounded-3xl max-w-3xl mx-auto font-sans">
    <div className="bg-white p-12 rounded-[1.4rem]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Ready to grow?</h2>
        <p className="text-gray-500">We'll get back to you within 24 hours.</p>
      </div>
      <form className="space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Full Name</label>
            <input type="text" className="w-full p-4 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-indigo-600 outline-none transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Work Email</label>
            <input type="email" className="w-full p-4 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-indigo-600 outline-none transition-all" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Project Budget</label>
          <select className="w-full p-4 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-indigo-600 outline-none transition-all">
            <option>$5k - $10k</option>
            <option>$10k - $25k</option>
            <option>$25k+</option>
          </select>
        </div>
        <button className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all">
          Submit Quote Request
        </button>
      </form>
    </div>
  </div>
);

export const ContactGradient = () => (
  <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-12 md:p-20 rounded-[3rem] text-white font-sans text-left">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-center">
      <div className="md:w-1/2">
        <h2 className="text-5xl font-bold mb-6 leading-tight">Create <br /> something <br /> iconic.</h2>
        <p className="text-white/80 text-lg mb-10">Don't be a stranger. We're here to help you build the future.</p>
      </div>
      <form className="md:w-1/2 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl space-y-6 w-full">
        <input type="text" placeholder="Identity" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 outline-none focus:bg-white/10 transition-all" />
        <input type="email" placeholder="Electronic Mail" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 outline-none focus:bg-white/10 transition-all" />
        <textarea rows="3" placeholder="Vision" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 outline-none focus:bg-white/10 transition-all resize-none"></textarea>
        <button className="w-full py-4 bg-white text-pink-600 font-bold rounded-xl hover:scale-[1.02] transition-all">
          Reach Out
        </button>
      </form>
    </div>
  </div>
);

export const ContactMagazine = () => (
  <div className="bg-white p-12 border-y-4 border-black font-serif italic text-left">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
      <div className="border-r border-black/10 pr-16">
        <h2 className="text-7xl font-black not-italic mb-12 uppercase tracking-tighter text-gray-900">Collab.</h2>
        <p className="text-2xl leading-relaxed text-gray-700 mb-12">We are currently accepting new projects for Q3 and Q4. If you have a vision that challenges the status quo, we want to hear it.</p>
        <div className="space-y-4 not-italic font-sans font-bold uppercase text-xs tracking-widest text-gray-900">
          <p>Studio_NYC</p>
          <p>Studio_BERLIN</p>
          <p>Studio_TOKYO</p>
        </div>
      </div>
      <form className="space-y-12 py-6">
        <div className="space-y-4">
          <p className="font-bold uppercase text-[10px] tracking-[0.3em] not-italic text-gray-900">01_Brief_Name</p>
          <input type="text" placeholder="Type here..." className="w-full bg-transparent border-b-2 border-black p-2 text-2xl outline-none" />
        </div>
        <div className="space-y-4">
          <p className="font-bold uppercase text-[10px] tracking-[0.3em] not-italic text-gray-900">02_Brief_Email</p>
          <input type="email" placeholder="Type here..." className="w-full bg-transparent border-b-2 border-black p-2 text-2xl outline-none" />
        </div>
        <div className="space-y-4">
          <p className="font-bold uppercase text-[10px] tracking-[0.3em] not-italic text-gray-900">03_Brief_Message</p>
          <textarea rows="2" placeholder="Type here..." className="w-full bg-transparent border-b-2 border-black p-2 text-2xl outline-none resize-none"></textarea>
        </div>
        <button className="not-italic font-sans font-black uppercase text-sm tracking-[0.5em] bg-black text-white px-12 py-5 hover:bg-gray-800 transition-colors">
          Transmit_
        </button>
      </form>
    </div>
  </div>
);

export const ContactOverlay = () => (
  <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl font-sans">
    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200" className="absolute inset-0 w-full h-full object-cover" alt="Background" />
    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
    
    <div className="absolute inset-0 flex items-center justify-end p-8 md:p-16">
      <div className="bg-white/95 backdrop-blur-xl p-10 md:p-12 max-w-lg w-full shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] rounded-3xl border border-white/20 text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Start a Project</h2>
        <p className="text-gray-500 mb-10">Tell us about your needs and get a free consultation.</p>
        <form className="space-y-6">
          <input type="text" placeholder="Your Name" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 focus:bg-white focus:border-indigo-600 outline-none transition-all" />
          <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 focus:bg-white focus:border-indigo-600 outline-none transition-all" />
          <textarea rows="3" placeholder="Message Details" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 focus:bg-white focus:border-indigo-600 outline-none transition-all resize-none"></textarea>
          <button className="bg-indigo-600 text-white font-bold py-4 px-8 w-full rounded-xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200/50">
            Get Consultation
          </button>
        </form>
      </div>
    </div>
  </div>
);

export const ContactFloating = () => (
  <div className="max-w-md mx-auto bg-white rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-50 overflow-hidden font-sans text-left">
    <div className="bg-indigo-600 p-8 text-white text-center relative overflow-hidden">
      <h2 className="text-2xl font-bold mb-2">Quick Message</h2>
      <p className="text-indigo-100 text-sm opacity-80">We usually reply within an hour.</p>
    </div>
    <div className="p-8">
      <form className="space-y-6">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Topic</label>
          <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:bg-white focus:border-indigo-600 transition-all text-sm appearance-none">
            <option>General Question</option>
            <option>Support</option>
            <option>Feedback</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email</label>
          <input type="email" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:bg-white focus:border-indigo-600 transition-all" placeholder="name@email.com" />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Message</label>
          <textarea rows="3" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:bg-white focus:border-indigo-600 transition-all resize-none" placeholder="How can we help?"></textarea>
        </div>
        <button className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-indigo-100">
          <span>🚀</span> Send Now
        </button>
      </form>
    </div>
  </div>
);

// --- Main Gallery Wrapper ---

const ContactGallery = () => {
  const sections = [
    { 
      id: 'standard', 
      title: '01. Standard SaaS Professional', 
      component: <ContactStandard />, 
      jsx: `export const ContactStandard = () => (
  <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl max-w-4xl mx-auto font-sans text-left">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-500 mb-8">Have a question? We'd love to hear from you.</p>
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-gray-600">
            <span className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">📍</span>
            <span>123 Innovation Way, SF</span>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <span className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">📧</span>
            <span>hello@example.com</span>
          </div>
        </div>
      </div>
      <form className="space-y-6">
        <input type="text" placeholder="Your Name" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-indigo-500 outline-none transition-all" />
        <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-indigo-500 outline-none transition-all" />
        <textarea rows="4" placeholder="Your Message" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-indigo-500 outline-none transition-all resize-none"></textarea>
        <button className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
          Send Message
        </button>
      </form>
    </div>
  </div>
);`,
      html: `<div class="contact-card">
  <div class="contact-grid">
    <div class="contact-info">
      <h2 class="contact-title">Get in Touch</h2>
      <p class="contact-desc">Have a question? We'd love to hear from you.</p>
      <div class="contact-details">
        <div class="detail-item">
          <span class="detail-icon">📍</span>
          <span>123 Innovation Way, SF</span>
        </div>
        <div class="detail-item">
          <span class="detail-icon">📧</span>
          <span>hello@example.com</span>
        </div>
      </div>
    </div>
    <form class="contact-form">
      <input type="text" placeholder="Your Name" class="form-input" />
      <input type="email" placeholder="Email Address" class="form-input" />
      <textarea rows="4" placeholder="Your Message" class="form-input form-textarea"></textarea>
      <button type="submit" class="form-button">Send Message</button>
    </form>
  </div>
</div>`,
      css: `.contact-card {
  background: #ffffff;
  padding: 48px;
  border-radius: 24px;
  border: 1px solid #f3f4f6;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  max-width: 896px;
  margin: 0 auto;
  font-family: sans-serif;
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
}
@media (min-width: 768px) {
  .contact-grid { grid-template-columns: 1fr 1fr; }
}
.contact-info { text-align: left; }
.contact-title { font-size: 36px; font-weight: 700; color: #111827; margin-bottom: 16px; }
.contact-desc { color: #6b7280; margin-bottom: 32px; }
.contact-details { display: flex; flex-direction: column; gap: 16px; }
.detail-item { display: flex; align-items: center; gap: 16px; color: #4b5563; }
.detail-icon { padding: 12px; background: #eef2ff; color: #4f46e5; border-radius: 12px; }
.contact-form { display: flex; flex-direction: column; gap: 24px; }
.form-input { 
  width: 100%; 
  padding: 16px; 
  background: #f9fafb; 
  border-radius: 12px; 
  border: 1px solid #e5e7eb; 
  outline: none; 
  transition: all 0.2s; 
}
.form-input:focus { border-color: #4f46e5; }
.form-textarea { resize: none; }
.form-button { 
  width: 100%; 
  padding: 16px; 
  background: #4f46e5; 
  color: #ffffff; 
  font-weight: 700; 
  border-radius: 12px; 
  border: none; 
  cursor: pointer; 
  transition: all 0.2s; 
}
.form-button:hover { background: #4338ca; }`
    },
    { 
      id: 'simple', 
      title: '02. Simple Minimalist Contact', 
      component: <ContactSimple />, 
      jsx: `export const ContactSimple = () => (
  <div className="max-w-2xl mx-auto text-center font-sans p-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple & Direct</h2>
    <p className="text-gray-500 mb-10 text-lg">Let's talk about your project.</p>
    <form className="space-y-4">
      <input type="text" placeholder="Full Name" className="w-full p-4 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-100 transition-all" />
      <input type="email" placeholder="Email" className="w-full p-4 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-100 transition-all" />
      <textarea rows="4" placeholder="How can we help?" className="w-full p-4 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-100 transition-all resize-none"></textarea>
      <button className="px-10 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-black transition-all">
        Send Inquiry
      </button>
    </form>
  </div>
);`,
      html: `<div class="simple-contact">
  <h2>Simple & Direct</h2>
  <p>Let's talk about your project.</p>
  <form>
    <input type="text" placeholder="Full Name" />
    <input type="email" placeholder="Email" />
    <textarea rows="4" placeholder="How can we help?"></textarea>
    <button type="submit">Send Inquiry</button>
  </form>
</div>`,
      css: `.simple-contact { max-width: 672px; margin: 0 auto; text-align: center; font-family: sans-serif; padding: 32px; }
.simple-contact h2 { font-size: 30px; font-weight: 700; color: #111827; margin-bottom: 16px; }
.simple-contact p { color: #6b7280; font-size: 18px; margin-bottom: 40px; }
.simple-contact form { display: flex; flex-direction: column; gap: 16px; }
.simple-contact input, .simple-contact textarea {
  width: 100%;
  padding: 16px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  outline: none;
  transition: all 0.2s;
}
.simple-contact input:focus, .simple-contact textarea:focus { border-color: #e0e7ff; box-shadow: 0 0 0 4px #eef2ff; }
.simple-contact textarea { resize: none; }
.simple-contact button {
  width: fit-content;
  align-self: center;
  padding: 16px 40px;
  background: #0f172a;
  color: #ffffff;
  font-weight: 700;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}
.simple-contact button:hover { background: #000000; }`
    },
    { 
      id: 'split', 
      title: '03. Split Creative Layout', 
      component: <ContactSplit />, 
      jsx: `export const ContactSplit = () => (
  <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto font-sans text-left">
    <div className="md:w-2/5 bg-indigo-600 p-12 text-white">
      <h2 className="text-4xl font-bold mb-6 leading-tight">Let's build <br /> something <br /> great.</h2>
      <p className="text-indigo-100 mb-12">Our team is ready to help you take your project to the next level.</p>
      <div className="pt-8 border-t border-indigo-500/50">
        <p className="text-sm uppercase tracking-widest font-bold opacity-60 mb-2">Office Hours</p>
        <p>Mon - Fri, 9am - 6pm EST</p>
      </div>
    </div>
    <form className="md:w-3/5 p-12 space-y-8 bg-white">
      <div className="grid grid-cols-2 gap-6">
        <input type="text" placeholder="First Name" className="p-4 border-b border-gray-200 focus:border-indigo-600 outline-none transition-all" />
        <input type="text" placeholder="Last Name" className="p-4 border-b border-gray-200 focus:border-indigo-600 outline-none transition-all" />
      </div>
      <input type="email" placeholder="Email Address" className="w-full p-4 border-b border-gray-200 focus:border-indigo-600 outline-none transition-all" />
      <textarea rows="4" placeholder="Tell us more..." className="w-full p-4 border-b border-gray-200 focus:border-indigo-600 outline-none transition-all resize-none"></textarea>
      <button className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-all shadow-xl">
        Get Started →
      </button>
    </form>
  </div>
);`,
      html: `<div class="split-card">
  <div class="info-side">
    <h2>Let's build <br> something <br> great.</h2>
    <p>Our team is ready to help you take your project to the next level.</p>
    <div class="footer-info">
      <p class="label">Office Hours</p>
      <p>Mon - Fri, 9am - 6pm EST</p>
    </div>
  </div>
  <form class="form-side">
    <div class="row">
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
    </div>
    <input type="email" placeholder="Email Address" class="full-row" />
    <textarea rows="4" placeholder="Tell us more..." class="full-row"></textarea>
    <button type="submit">Get Started →</button>
  </form>
</div>`,
      css: `.split-card {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-width: 1024px;
  margin: 0 auto;
  font-family: sans-serif;
}
@media (min-width: 768px) { .split-card { flex-direction: row; } }
.info-side {
  background: #4f46e5;
  padding: 48px;
  color: #ffffff;
  width: 100%;
}
@media (min-width: 768px) { .info-side { width: 40%; } }
.info-side h2 { font-size: 36px; font-weight: 700; margin-bottom: 24px; line-height: 1.2; }
.info-side p { color: #e0e7ff; margin-bottom: 48px; }
.footer-info { border-top: 1px solid rgba(255, 255, 255, 0.3); padding-top: 32px; }
.footer-info .label { font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.6; margin-bottom: 8px; }
.form-side { padding: 48px; width: 100%; display: flex; flex-direction: column; gap: 32px; }
@media (min-width: 768px) { .form-side { width: 60%; } }
.form-side .row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.form-side input, .form-side textarea {
  padding: 16px;
  border: none;
  border-bottom: 1px solid #e5e7eb;
  outline: none;
  transition: all 0.2s;
  width: 100%;
}
.form-side input:focus, .form-side textarea:focus { border-color: #4f46e5; }
.form-side textarea { resize: none; }
.form-side button {
  width: fit-content;
  padding: 16px 32px;
  background: #4f46e5;
  color: #ffffff;
  font-weight: 700;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  box-shadow: 0 20px 25px -5px rgba(79, 70, 229, 0.4);
  transition: all 0.2s;
}
.form-side button:hover { background: #4338ca; transform: translateY(-2px); }`
    },
    { 
      id: 'dark', 
      title: '04. Dark Mode Professional', 
      component: <ContactDark />, 
      jsx: `export const ContactDark = () => (
  <div className="bg-slate-900 p-12 rounded-3xl max-w-4xl mx-auto text-white font-sans text-left">
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-2 text-white">Premium Support</h2>
      <p className="text-slate-400">Available 24/7 for our enterprise clients.</p>
    </div>
    <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <input type="text" placeholder="Name" className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-white outline-none focus:border-blue-500 transition-all" />
      <input type="email" placeholder="Email" className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-white outline-none focus:border-blue-500 transition-all" />
      <textarea rows="4" placeholder="Details" className="md:col-span-2 bg-slate-800 p-4 rounded-xl border border-slate-700 text-white outline-none focus:border-blue-500 transition-all resize-none"></textarea>
      <button className="md:col-span-2 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/40">
        Initiate Support Session
      </button>
    </form>
  </div>
);`,
      html: `<div class="dark-contact">
  <div class="header">
    <h2>Premium Support</h2>
    <p>Available 24/7 for our enterprise clients.</p>
  </div>
  <form>
    <div class="form-row">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
    </div>
    <textarea rows="4" placeholder="Details"></textarea>
    <button type="submit">Initiate Support Session</button>
  </form>
</div>`,
      css: `.dark-contact {
  background: #0f172a;
  padding: 48px;
  border-radius: 24px;
  max-width: 896px;
  margin: 0 auto;
  color: #ffffff;
  font-family: sans-serif;
  text-align: left;
}
.dark-contact .header { margin-bottom: 48px; }
.dark-contact h2 { font-size: 30px; font-weight: 700; margin-bottom: 8px; }
.dark-contact p { color: #94a3b8; }
.dark-contact form { display: flex; flex-direction: column; gap: 32px; }
.dark-contact .form-row { display: grid; grid-template-columns: 1fr; gap: 32px; }
@media (min-width: 768px) { .dark-contact .form-row { grid-template-columns: 1fr 1fr; } }
.dark-contact input, .dark-contact textarea {
  background: #1e293b;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #334155;
  color: #ffffff;
  outline: none;
  transition: all 0.2s;
}
.dark-contact input:focus, .dark-contact textarea:focus { border-color: #3b82f6; }
.dark-contact textarea { resize: none; }
.dark-contact button {
  padding: 16px;
  background: #2563eb;
  color: #ffffff;
  font-weight: 700;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 10px 15px -3px rgba(30, 58, 138, 0.4);
}
.dark-contact button:hover { background: #3b82f6; }`
    },
    { 
      id: 'minimal', 
      title: '05. Minimalist Lines', 
      component: <ContactMinimal />, 
      jsx: `export const ContactMinimal = () => (
  <div className="max-w-4xl mx-auto font-sans p-12 text-left">
    <div className="grid md:grid-cols-2 gap-20">
      <div>
        <h2 className="text-5xl font-light mb-10 tracking-tight text-gray-900">Let's <br /> Connect.</h2>
        <div className="space-y-2 text-gray-500">
          <p>London, UK</p>
          <p>hello@minimal.co</p>
          <p>+44 20 7946 0123</p>
        </div>
      </div>
      <form className="space-y-10">
        <input type="text" placeholder="Name" className="w-full py-4 border-b border-gray-200 outline-none focus:border-black transition-all" />
        <input type="email" placeholder="Email" className="w-full py-4 border-b border-gray-200 outline-none focus:border-black transition-all" />
        <textarea rows="3" placeholder="Message" className="w-full py-4 border-b border-gray-200 outline-none focus:border-black transition-all resize-none"></textarea>
        <button className="text-lg font-bold border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
          Send Message
        </button>
      </form>
    </div>
  </div>
);`,
      html: `<div class="minimal-lines">
  <div class="grid">
    <div class="info">
      <h2>Let's <br> Connect.</h2>
      <div class="details">
        <p>London, UK</p>
        <p>hello@minimal.co</p>
        <p>+44 20 7946 0123</p>
      </div>
    </div>
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea rows="3" placeholder="Message"></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
</div>`,
      css: `.minimal-lines { max-width: 896px; margin: 0 auto; font-family: sans-serif; padding: 48px; text-align: left; }
.minimal-lines .grid { display: grid; grid-template-columns: 1fr; gap: 80px; }
@media (min-width: 768px) { .minimal-lines .grid { grid-template-columns: 1fr 1fr; } }
.minimal-lines h2 { font-size: 48px; font-weight: 300; margin-bottom: 40px; color: #111827; letter-spacing: -0.025em; }
.minimal-lines .details p { color: #6b7280; margin-bottom: 8px; }
.minimal-lines form { display: flex; flex-direction: column; gap: 40px; }
.minimal-lines input, .minimal-lines textarea {
  width: 100%;
  padding: 16px 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid #e5e7eb;
  outline: none;
  transition: all 0.2s;
}
.minimal-lines input:focus, .minimal-lines textarea:focus { border-color: #000000; }
.minimal-lines textarea { resize: none; }
.minimal-lines button {
  width: fit-content;
  font-size: 18px;
  font-weight: 700;
  background: transparent;
  border: none;
  border-bottom: 2px solid #000000;
  padding-bottom: 4px;
  cursor: pointer;
  transition: all 0.2s;
}
.minimal-lines button:hover { color: #6b7280; border-color: #6b7280; }`
    },
    { 
      id: 'accent', 
      title: '06. Accent Brand Color', 
      component: <ContactAccent />, 
      jsx: `export const ContactAccent = () => (
  <div className="bg-indigo-600 p-1 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)] rounded-3xl max-w-3xl mx-auto font-sans text-left">
    <div className="bg-white p-12 rounded-[1.4rem]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Ready to grow?</h2>
        <p className="text-gray-500">We'll get back to you within 24 hours.</p>
      </div>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Full Name</label>
            <input type="text" className="w-full p-4 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-indigo-600 outline-none transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Work Email</label>
            <input type="email" className="w-full p-4 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-indigo-600 outline-none transition-all" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Project Budget</label>
          <select className="w-full p-4 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-indigo-600 outline-none transition-all">
            <option>$5k - $10k</option>
            <option>$10k - $25k</option>
            <option>$25k+</option>
          </select>
        </div>
        <button className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all">
          Submit Quote Request
        </button>
      </form>
    </div>
  </div>
);`,
      html: `<div class="accent-card">
  <div class="inner-card">
    <div class="header">
      <h2>Ready to grow?</h2>
      <p>We'll get back to you within 24 hours.</p>
    </div>
    <form>
      <div class="row">
        <div class="field">
          <label>Full Name</label>
          <input type="text" />
        </div>
        <div class="field">
          <label>Work Email</label>
          <input type="email" />
        </div>
      </div>
      <div class="field">
        <label>Project Budget</label>
        <select>
          <option>$5k - $10k</option>
          <option>$10k - $25k</option>
          <option>$25k+</option>
        </select>
      </div>
      <button type="submit">Submit Quote Request</button>
    </form>
  </div>
</div>`,
      css: `.accent-card {
  background: #4f46e5;
  background-image: radial-gradient(circle at top right, rgba(255, 255, 255, 0.1), transparent);
  padding: 4px;
  border-radius: 24px;
  max-width: 768px;
  margin: 0 auto;
  font-family: sans-serif;
}
.inner-card { background: #ffffff; padding: 48px; border-radius: 22px; }
.header { text-align: center; margin-bottom: 40px; }
.header h2 { font-size: 30px; font-weight: 700; color: #111827; margin-bottom: 8px; }
.header p { color: #6b7280; }
form { display: flex; flex-direction: column; gap: 24px; text-align: left; }
.row { display: grid; grid-template-columns: 1fr; gap: 24px; }
@media (min-width: 768px) { .row { grid-template-columns: 1fr 1fr; } }
.field { display: flex; flex-direction: column; gap: 8px; }
.field label { font-size: 14px; font-weight: 700; color: #374151; }
.field input, .field select {
  width: 100%;
  padding: 16px;
  background: #f9fafb;
  border: 1px solid transparent;
  border-radius: 12px;
  outline: none;
  transition: all 0.2s;
}
.field input:focus, .field select:focus { background: #ffffff; border-color: #4f46e5; }
button {
  width: 100%;
  padding: 16px;
  background: #4f46e5;
  color: #ffffff;
  font-weight: 700;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}
button:hover { background: #4338ca; }`
    },
    { 
      id: 'gradient', 
      title: '07. Modern Gradient Glass', 
      component: <ContactGradient />, 
      jsx: `export const ContactGradient = () => (
  <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-12 md:p-20 rounded-[3rem] text-white font-sans text-left">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-center">
      <div className="md:w-1/2 text-left">
        <h2 className="text-5xl font-bold mb-6 leading-tight">Create <br /> something <br /> iconic.</h2>
        <p className="text-white/80 text-lg mb-10">Don't be a stranger. We're here to help you build the future.</p>
      </div>
      <form className="md:w-1/2 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl space-y-6 w-full">
        <input type="text" placeholder="Identity" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 outline-none focus:bg-white/10 transition-all" />
        <input type="email" placeholder="Electronic Mail" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 outline-none focus:bg-white/10 transition-all" />
        <textarea rows="3" placeholder="Vision" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 outline-none focus:bg-white/10 transition-all resize-none"></textarea>
        <button className="w-full py-4 bg-white text-pink-600 font-bold rounded-xl hover:scale-[1.02] transition-all">
          Reach Out
        </button>
      </form>
    </div>
  </div>
);`,
      html: `<div class="gradient-glass">
  <div class="container">
    <div class="content">
      <h2>Create <br> something <br> iconic.</h2>
      <p>Don't be a stranger. We're here to help you build the future.</p>
    </div>
    <form>
      <input type="text" placeholder="Identity" />
      <input type="email" placeholder="Electronic Mail" />
      <textarea rows="3" placeholder="Vision"></textarea>
      <button type="submit">Reach Out</button>
    </form>
  </div>
</div>`,
      css: `.gradient-glass {
  background: linear-gradient(to bottom right, #9333ea, #db2777, #f97316);
  padding: 48px;
  border-radius: 48px;
  color: #ffffff;
  font-family: sans-serif;
  text-align: left;
}
@media (min-width: 768px) { .gradient-glass { padding: 80px; } }
.container { max-width: 896px; margin: 0 auto; display: flex; flex-direction: column; gap: 64px; align-items: center; }
@media (min-width: 768px) { .container { flex-direction: row; } }
.content { width: 100%; text-align: left; }
@media (min-width: 768px) { .content { width: 50%; } }
.content h2 { font-size: 48px; font-weight: 700; margin-bottom: 24px; line-height: 1.2; }
.content p { color: rgba(255, 255, 255, 0.8); font-size: 18px; }
form {
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 32px;
  border-radius: 24px;
  display: flex; flex-direction: column; gap: 24px;
}
@media (min-width: 768px) { form { width: 50%; } }
form input, form textarea {
  width: 100%;
  padding: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #ffffff;
  outline: none;
  transition: all 0.2s;
}
form input::placeholder, form textarea::placeholder { color: rgba(255, 255, 255, 0.5); }
form input:focus, form textarea:focus { background: rgba(255, 255, 255, 0.1); }
form textarea { resize: none; }
form button {
  width: 100%;
  padding: 16px;
  background: #ffffff;
  color: #db2777;
  font-weight: 700;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}
form button:hover { transform: scale(1.02); }`
    },
    { 
      id: 'magazine', 
      title: '08. Magazine Editorial Style', 
      component: <ContactMagazine />, 
      jsx: `export const ContactMagazine = () => (
  <div className="bg-white p-12 border-y-4 border-black font-serif italic text-left">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
      <div className="border-r border-black/10 pr-16">
        <h2 className="text-7xl font-black not-italic mb-12 uppercase tracking-tighter text-gray-900">Collab.</h2>
        <p className="text-2xl leading-relaxed text-gray-700 mb-12">We are currently accepting new projects for Q3 and Q4. If you have a vision that challenges the status quo, we want to hear it.</p>
        <div className="space-y-4 not-italic font-sans font-bold uppercase text-xs tracking-widest text-gray-900">
          <p>Studio_NYC</p>
          <p>Studio_BERLIN</p>
          <p>Studio_TOKYO</p>
        </div>
      </div>
      <form className="space-y-12 py-6">
        <div className="space-y-4">
          <p className="font-bold uppercase text-[10px] tracking-[0.3em] not-italic text-gray-900">01_Brief_Name</p>
          <input type="text" placeholder="Type here..." className="w-full bg-transparent border-b-2 border-black p-2 text-2xl outline-none" />
        </div>
        <div className="space-y-4">
          <p className="font-bold uppercase text-[10px] tracking-[0.3em] not-italic text-gray-900">02_Brief_Email</p>
          <input type="email" placeholder="Type here..." className="w-full bg-transparent border-b-2 border-black p-2 text-2xl outline-none" />
        </div>
        <div className="space-y-4">
          <p className="font-bold uppercase text-[10px] tracking-[0.3em] not-italic text-gray-900">03_Brief_Message</p>
          <textarea rows="2" placeholder="Type here..." className="w-full bg-transparent border-b-2 border-black p-2 text-2xl outline-none resize-none"></textarea>
        </div>
        <button className="not-italic font-sans font-black uppercase text-sm tracking-[0.5em] bg-black text-white px-12 py-5 hover:bg-gray-800 transition-colors">
          Transmit_
        </button>
      </form>
    </div>
  </div>
);`,
      html: `<div class="magazine-layout">
  <div class="container">
    <div class="info-side">
      <h2>Collab.</h2>
      <p class="description">We are currently accepting new projects for Q3 and Q4. If you have a vision that challenges the status quo, we want to hear it.</p>
      <div class="studios">
        <p>Studio_NYC</p>
        <p>Studio_BERLIN</p>
        <p>Studio_TOKYO</p>
      </div>
    </div>
    <form>
      <div class="field">
        <p class="label">01_Brief_Name</p>
        <input type="text" placeholder="Type here..." />
      </div>
      <div class="field">
        <p class="label">02_Brief_Email</p>
        <input type="email" placeholder="Type here..." />
      </div>
      <div class="field">
        <p class="label">03_Brief_Message</p>
        <textarea rows="2" placeholder="Type here..."></textarea>
      </div>
      <button type="submit">Transmit_</button>
    </form>
  </div>
</div>`,
      css: `.magazine-layout {
  background: #ffffff;
  padding: 48px;
  border-top: 4px solid #000000;
  border-bottom: 4px solid #000000;
  font-family: serif;
  font-style: italic;
  text-align: left;
}
.container { max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 64px; }
@media (min-width: 768px) { .container { grid-template-columns: 1fr 1fr; } }
.info-side { padding-right: 0; }
@media (min-width: 768px) { .info-side { border-right: 1px solid rgba(0, 0, 0, 0.1); padding-right: 64px; } }
.info-side h2 { font-size: 72px; font-weight: 900; font-style: normal; margin-bottom: 48px; text-transform: uppercase; letter-spacing: -0.05em; color: #111827; }
.info-side .description { font-size: 24px; line-height: 1.5; color: #374151; margin-bottom: 48px; }
.studios { font-family: sans-serif; font-style: normal; font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 0.2em; display: flex; flex-direction: column; gap: 16px; color: #111827; }
form { display: flex; flex-direction: column; gap: 48px; padding: 24px 0; }
.field { display: flex; flex-direction: column; gap: 16px; }
.field .label { font-family: sans-serif; font-style: normal; font-weight: 700; text-transform: uppercase; font-size: 10px; letter-spacing: 0.3em; color: #111827; }
.field input, .field textarea {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid #000000;
  padding: 8px;
  font-size: 24px;
  outline: none;
}
.field textarea { resize: none; }
button {
  width: fit-content;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.5em;
  background: #000000;
  color: #ffffff;
  padding: 20px 48px;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}
button:hover { background: #1f2937; }`
    },
    { 
      id: 'overlay', 
      title: '09. Full-Image Agency Overlay', 
      component: <ContactOverlay />, 
      jsx: `export const ContactOverlay = () => (
  <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl font-sans">
    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200" className="absolute inset-0 w-full h-full object-cover" alt="Background" />
    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
    
    <div className="absolute inset-0 flex items-center justify-end p-8 md:p-16">
      <div className="bg-white/95 backdrop-blur-xl p-10 md:p-12 max-w-lg w-full shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] rounded-3xl border border-white/20 text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Start a Project</h2>
        <p className="text-gray-500 mb-10">Tell us about your needs and get a free consultation.</p>
        <form className="space-y-6">
          <input type="text" placeholder="Your Name" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 focus:bg-white focus:border-indigo-600 outline-none transition-all" />
          <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 focus:bg-white focus:border-indigo-600 outline-none transition-all" />
          <textarea rows="3" placeholder="Message Details" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 focus:bg-white focus:border-indigo-600 outline-none transition-all resize-none"></textarea>
          <button className="bg-indigo-600 text-white font-bold py-4 px-8 w-full rounded-xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200/50">
            Get Consultation
          </button>
        </form>
      </div>
    </div>
  </div>
);`,
      html: `<div class="overlay-contact">
  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200" class="bg-image" />
  <div class="overlay"></div>
  <div class="content-wrapper">
    <div class="form-card">
      <h2>Start a Project</h2>
      <p>Tell us about your needs and get a free consultation.</p>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email Address" />
        <textarea rows="3" placeholder="Message Details"></textarea>
        <button type="submit">Get Consultation</button>
      </form>
    </div>
  </div>
</div>`,
      css: `.overlay-contact {
  position: relative;
  height: 600px;
  width: 100%;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  font-family: sans-serif;
}
.bg-image { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.overlay { position: absolute; inset: 0; background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(2px); }
.content-wrapper { position: absolute; inset: 0; display: flex; align-items: center; justify-content: flex-end; padding: 32px; }
@media (min-width: 768px) { .content-wrapper { padding: 64px; } }
.form-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 40px;
  max-width: 512px;
  width: 100%;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.5);
  text-align: left;
}
@media (min-width: 768px) { .form-card { padding: 48px; } }
.form-card h2 { font-size: 30px; font-weight: 700; color: #111827; margin-bottom: 8px; }
.form-card p { color: #6b7280; margin-bottom: 40px; }
form { display: flex; flex-direction: column; gap: 24px; }
form input, form textarea {
  width: 100%;
  padding: 16px;
  background: #f9fafb;
  border-radius: 12px;
  border: 1px solid #f3f4f6;
  outline: none;
  transition: all 0.2s;
}
form input:focus, form textarea:focus { background: #ffffff; border-color: #4f46e5; }
form textarea { resize: none; }
button {
  background: #4f46e5;
  color: #ffffff;
  font-weight: 700;
  padding: 16px 32px;
  width: 100%;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 20px 25px -5px rgba(79, 70, 229, 0.2);
}
button:hover { background: #4338ca; }`
    },
    { 
      id: 'floating', 
      title: '10. Compact Floating Card', 
      component: <ContactFloating />, 
      jsx: `export const ContactFloating = () => (
  <div className="max-w-md mx-auto bg-white rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-50 overflow-hidden font-sans text-left">
    <div className="bg-indigo-600 p-8 text-white text-center relative overflow-hidden">
      <h2 className="text-2xl font-bold mb-2">Quick Message</h2>
      <p className="text-indigo-100 text-sm opacity-80">We usually reply within an hour.</p>
    </div>
    <div className="p-8">
      <form className="space-y-6">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Topic</label>
          <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:bg-white focus:border-indigo-600 transition-all text-sm appearance-none">
            <option>General Question</option>
            <option>Support</option>
            <option>Feedback</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email</label>
          <input type="email" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:bg-white focus:border-indigo-600 transition-all" placeholder="name@email.com" />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Message</label>
          <textarea rows="3" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:bg-white focus:border-indigo-600 transition-all resize-none" placeholder="How can we help?"></textarea>
        </div>
        <button className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-indigo-100">
          <span>🚀</span> Send Now
        </button>
      </form>
    </div>
  </div>
);`,
      html: `<div class="floating-card">
  <div class="card-header">
    <h2>Quick Message</h2>
    <p>We usually reply within an hour.</p>
  </div>
  <div class="card-body">
    <form>
      <div class="field">
        <label>Topic</label>
        <select>
          <option>General Question</option>
          <option>Support</option>
          <option>Feedback</option>
        </select>
      </div>
      <div class="field">
        <label>Email</label>
        <input type="email" placeholder="name@email.com" />
      </div>
      <div class="field">
        <label>Message</label>
        <textarea rows="3" placeholder="How can we help?"></textarea>
      </div>
      <button type="submit">
        <span>🚀</span> Send Now
      </button>
    </form>
  </div>
</div>`,
      css: `.floating-card {
  max-width: 448px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 32px;
  box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.1);
  border: 1px solid #f9fafb;
  overflow: hidden;
  font-family: sans-serif;
  text-align: left;
}
.card-header { background: #4f46e5; padding: 32px; color: #ffffff; text-align: center; }
.card-header h2 { font-size: 24px; font-weight: 700; margin-bottom: 8px; }
.card-header p { color: #e0e7ff; font-size: 14px; opacity: 0.8; }
.card-body { padding: 32px; }
form { display: flex; flex-direction: column; gap: 24px; }
.field { display: flex; flex-direction: column; gap: 8px; }
.field label { font-size: 10px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.1em; }
.field input, .field select, .field textarea {
  width: 100%;
  padding: 16px;
  background: #f9fafb;
  border: 1px solid #f3f4f6;
  border-radius: 12px;
  outline: none;
  transition: all 0.2s;
  font-size: 14px;
}
.field input:focus, .field select:focus, .field textarea:focus { background: #ffffff; border-color: #4f46e5; }
.field textarea { resize: none; }
button {
  width: 100%;
  padding: 16px;
  background: #4f46e5;
  color: #ffffff;
  font-weight: 700;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.2s;
  box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.2);
}
button:hover { background: #4338ca; }`
    }
  ];

  return (
    <div className="container overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-64 text-gray-900">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-6xl font-black text-slate-950 mb-6 tracking-tighter uppercase italic leading-none">Contact_Gallery</h1>
        <p className="text-slate-500 font-bold text-xl italic lowercase">Original high-fidelity communication nodes for structural inquiries.</p>
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
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block text-center mb-8 italic">
              {section.title}
            </span>
            {section.component}
          </section>
        ))}
      </div>
    </div>
  );
};

export default ContactGallery;