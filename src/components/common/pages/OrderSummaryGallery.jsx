import React from 'react';
import CopyButton from '../CopyButton';

// --- Shared Data ---
const orderItems = [
  { name: "Mechanical Keyboard", price: "$140.00", qty: 1, img: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=200&auto=format&fit=crop" },
  { name: "USB-C Coiled Cable", price: "$35.00", qty: 1, img: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=200&auto=format&fit=crop" },
];

const CheckCircle = ({ className = "w-16 h-16 text-green-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

// --- 1. The Standard E-commerce (Split) ---
export const OrderStandard = () => (
  <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg flex flex-col md:flex-row h-auto min-h-[600px]">
    <div className="md:w-3/5 p-12 flex flex-col justify-center">
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
        <p className="text-gray-500">Thank you, Alex. We've received your order and will send you an update when it ships.</p>
      </div>

      <div className="border rounded-xl p-6 mb-8 bg-gray-50">
        <h3 className="font-bold text-gray-900 mb-4">Order Details</h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <span className="block text-gray-500 mb-1">Order Number</span>
            <span className="font-medium text-gray-900">#ORD-88291</span>
          </div>
          <div>
            <span className="block text-gray-500 mb-1">Date</span>
            <span className="font-medium text-gray-900">Oct 24, 2024</span>
          </div>
          <div>
            <span className="block text-gray-500 mb-1">Email</span>
            <span className="font-medium text-gray-900">alex@example.com</span>
          </div>
          <div>
            <span className="block text-gray-500 mb-1">Payment</span>
            <span className="font-medium text-gray-900">Visa •••• 4242</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="flex-1 bg-gray-900 text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors">Track Order</button>
        <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors">Continue Shopping</button>
      </div>
    </div>

    <div className="md:w-2/5 bg-gray-50 p-12 border-l border-gray-100">
      <h3 className="font-bold text-gray-900 mb-6">Summary</h3>
      <div className="space-y-4 mb-6">
        {orderItems.map((item, i) => (
          <div key={i} className="flex gap-4">
            <div className="w-16 h-16 bg-white border rounded-md p-1 relative">
              <img src={item.img} className="w-full h-full object-contain" alt="" />
              <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{item.qty}</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{item.name}</p>
              <p className="text-gray-500">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 pt-4 space-y-2 text-sm">
        <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>$175.00</span></div>
        <div className="flex justify-between text-gray-600"><span>Shipping</span><span>$10.00</span></div>
        <div className="flex justify-between font-bold text-gray-900 text-lg pt-2"><span>Total</span><span>$185.00</span></div>
      </div>
    </div>
  </div>
);

// --- 2. The Receipt (Minimalist) ---
export const OrderReceipt = () => (
  <div className="bg-[#f3f4f6] p-8 flex justify-center items-center h-[600px] rounded-3xl">
    <div className="bg-white w-full max-w-sm shadow-xl relative">
      {/* Jagged Top */}
      <div className="absolute top-0 left-0 w-full h-4 bg-white -mt-2" style={{clipPath: 'polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)'}}></div>
      
      <div className="p-8 text-center">
        <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">✓</div>
        <h2 className="font-mono font-bold text-xl uppercase tracking-widest mb-1">Receipt</h2>
        <p className="font-mono text-xs text-gray-400 mb-8">#2492-1942 • OCT 24</p>
        
        <div className="border-t-2 border-dashed border-gray-200 py-4 space-y-3 font-mono text-sm text-left">
          {orderItems.map((item, i) => (
            <div key={i} className="flex justify-between">
              <span>{item.qty}x {item.name}</span>
              <span>{item.price}</span>
            </div>
          ))}
        </div>
        
        <div className="border-t-2 border-dashed border-gray-200 py-4 font-mono">
          <div className="flex justify-between font-bold text-lg">
            <span>TOTAL PAID</span>
            <span>$185.00</span>
          </div>
        </div>
        
        <div className="mt-8">
          <img src="https://bwipjs-api.metafloor.com/?bcid=code128&text=ORD-88291&scale=3&height=10&includetext" alt="Barcode" className="w-full opacity-50" />
        </div>
      </div>

      {/* Jagged Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-white -mb-2" style={{clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)'}}></div>
    </div>
  </div>
);

// --- 3. The Food Delivery (Tracker) ---
export const OrderFood = () => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 max-w-md mx-auto h-[600px] flex flex-col">
    {/* Map Placeholder */}
    <div className="h-1/2 bg-gray-200 relative">
      <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 grayscale" alt="Map" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-4 h-4 bg-blue-600 rounded-full animate-ping absolute"></div>
        <div className="w-4 h-4 bg-blue-600 rounded-full relative border-2 border-white"></div>
      </div>
    </div>
    
    <div className="h-1/2 bg-white p-6 rounded-t-3xl -mt-6 relative z-10 flex flex-col">
      <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6"></div>
      
      <div className="flex justify-between items-end mb-6">
        <div>
          <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">Estimated Arrival</div>
          <div className="text-3xl font-bold text-gray-900">25-35 <span className="text-sm font-medium text-gray-500">min</span></div>
        </div>
        <div className="text-right">
          <div className="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full text-xs">On the way</div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-4 mb-6">
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100" className="w-12 h-12 rounded-full object-cover" alt="Rider" />
        <div className="flex-1">
          <div className="font-bold text-gray-900">Michael</div>
          <div className="text-xs text-gray-500">Your Rider • Yamaha 150cc</div>
        </div>
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-600">📞</button>
      </div>
      
      <div className="mt-auto">
        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <div className="w-3/4 bg-blue-600 h-full rounded-full"></div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>Confirmed</span>
          <span>Preparing</span>
          <span className="text-blue-600 font-bold">On Way</span>
          <span>Arrived</span>
        </div>
      </div>
    </div>
  </div>
);

// --- 4. The SaaS (Onboarding) ---
export const OrderSaaS = () => (
  <div className="bg-indigo-900 text-white p-12 rounded-3xl flex flex-col items-center text-center h-[600px] justify-center">
    <div className="w-20 h-20 bg-indigo-800 rounded-2xl flex items-center justify-center mb-8 border border-indigo-700 shadow-lg shadow-indigo-900/50">
      <svg className="w-10 h-10 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    </div>
    
    <h2 className="text-4xl font-bold mb-4">Welcome aboard!</h2>
    <p className="text-indigo-200 text-lg mb-10 max-w-md">
      Your subscription to <span className="text-white font-bold">Pro Plan</span> is active. We've sent a receipt to your email.
    </p>
    
    <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl w-full max-w-sm mb-10 text-left">
      <div className="flex justify-between items-center mb-2">
        <span className="text-indigo-200 text-sm">Amount Paid</span>
        <span className="font-bold text-xl">$29.00</span>
      </div>
      <div className="flex justify-between items-center text-xs">
        <span className="text-indigo-300">Next billing date</span>
        <span className="text-white">Nov 24, 2024</span>
      </div>
    </div>
    
    <div className="flex flex-col w-full max-w-xs gap-3">
      <button className="w-full py-3 bg-white text-indigo-900 font-bold rounded-lg hover:bg-indigo-50 transition-colors">
        Go to Dashboard
      </button>
      <button className="w-full py-3 bg-transparent text-indigo-200 text-sm hover:text-white transition-colors">
        Download Invoice
      </button>
    </div>
  </div>
);

// --- 5. The Event Ticket (QR Focus) ---
export const OrderTicket = () => (
  <div className="bg-gray-800 h-[600px] rounded-3xl flex items-center justify-center p-4">
    <div className="bg-white w-full max-w-sm rounded-3xl overflow-hidden relative shadow-2xl">
      {/* Top Section */}
      <div className="p-8 bg-purple-600 text-white text-center">
        <div className="text-sm uppercase tracking-widest font-bold opacity-80 mb-2">Concert Ticket</div>
        <h2 className="text-3xl font-black mb-1">NEON NIGHTS</h2>
        <p className="text-purple-200">World Tour 2024</p>
      </div>
      
      {/* Perforated Line */}
      <div className="relative h-8 bg-purple-600">
        <div className="absolute bottom-0 left-0 w-full h-4 bg-white rounded-t-3xl"></div>
        <div className="absolute top-1/2 left-0 w-full border-b-2 border-dashed border-purple-400/50"></div>
        <div className="absolute top-1/2 left-0 w-6 h-6 bg-gray-800 rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 right-0 w-6 h-6 bg-gray-800 rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
      </div>

      {/* Details */}
      <div className="p-8 pt-2">
        <div className="flex justify-between mb-6 text-center">
          <div>
            <span className="block text-xs text-gray-400 uppercase">Date</span>
            <span className="font-bold text-gray-900">NOV 12</span>
          </div>
          <div>
            <span className="block text-xs text-gray-400 uppercase">Time</span>
            <span className="font-bold text-gray-900">20:00</span>
          </div>
          <div>
            <span className="block text-xs text-gray-400 uppercase">Gate</span>
            <span className="font-bold text-gray-900">B4</span>
          </div>
        </div>
        
        <div className="bg-gray-100 p-4 rounded-xl mb-6">
          <img src="https://bwipjs-api.metafloor.com/?bcid=qrcode&text=TICKET-123456&scale=4" className="w-32 h-32 mx-auto mix-blend-multiply" alt="QR" />
        </div>
        
        <div className="text-center">
          <p className="text-xs text-gray-400">Order #8842-192</p>
          <button className="mt-4 text-purple-600 font-bold text-sm hover:underline">Download to Wallet</button>
        </div>
      </div>
    </div>
  </div>
);

// --- 6. The Glassmorphism (Aesthetic) ---
export const OrderGlass = () => (
  <div className="relative h-[600px] w-full rounded-3xl overflow-hidden bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500 flex items-center justify-center">
    <div className="absolute top-10 left-10 w-48 h-48 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-40"></div>
    <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-40"></div>

    <div className="relative bg-white/20 backdrop-blur-xl border border-white/30 p-10 rounded-[2rem] shadow-2xl w-full max-w-md text-center text-white">
      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/40">
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
      </div>
      
      <h2 className="text-3xl font-bold mb-2">Payment Successful</h2>
      <p className="text-white/80 mb-8">You are now a premium member.</p>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center bg-white/10 p-4 rounded-xl border border-white/10">
          <span className="text-sm">Transaction ID</span>
          <span className="font-mono text-sm font-bold">#TRX_9921</span>
        </div>
        <div className="flex justify-between items-center bg-white/10 p-4 rounded-xl border border-white/10">
          <span className="text-sm">Amount</span>
          <span className="font-mono text-sm font-bold">$99.00</span>
        </div>
      </div>
      
      <button className="mt-8 w-full py-3 bg-white text-fuchsia-600 font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">
        Continue
      </button>
    </div>
  </div>
);

// --- 7. The Crypto (Technical) ---
export const OrderCrypto = () => (
  <div className="bg-black p-8 rounded-3xl border border-gray-800 h-[600px] flex items-center justify-center font-mono">
    <div className="w-full max-w-lg border border-green-500/30 bg-green-900/10 p-8 rounded-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full border-2 border-green-500 flex items-center justify-center text-green-500 animate-pulse">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        </div>
        <div>
          <h2 className="text-green-500 font-bold text-xl">TRANSACTION CONFIRMED</h2>
          <p className="text-green-700 text-xs">BLOCK #19248821</p>
        </div>
      </div>

      <div className="space-y-4 text-sm mb-8">
        <div>
          <div className="text-gray-500 text-xs uppercase mb-1">Transaction Hash</div>
          <div className="text-gray-300 break-all bg-black p-2 rounded border border-gray-800">0x3f29...9a2b</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-gray-500 text-xs uppercase mb-1">From</div>
            <div className="text-gray-300 truncate">0x88...21</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs uppercase mb-1">To</div>
            <div className="text-gray-300 truncate">Opensea.io</div>
          </div>
        </div>
        <div>
          <div className="text-gray-500 text-xs uppercase mb-1">Value</div>
          <div className="text-white text-xl font-bold">0.45 ETH <span className="text-sm text-gray-500 font-normal">($1,240.00)</span></div>
        </div>
      </div>

      <button className="w-full py-3 border border-green-500 text-green-500 font-bold rounded hover:bg-green-500 hover:text-black transition-colors uppercase tracking-widest text-xs">
        View on Etherscan
      </button>
    </div>
  </div>
);

// --- 8. The Brutalist (Bold) ---
export const OrderBrutalist = () => (
  <div className="bg-yellow-400 p-8 rounded-3xl border-4 border-black h-[600px] flex items-center justify-center">
    <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0_0_#000] max-w-lg w-full text-center">
      <h2 className="text-5xl font-black uppercase mb-6 leading-none">Hell<br/>Yeah!</h2>
      <div className="h-4 bg-black w-full mb-6"></div>
      <p className="text-xl font-bold mb-8">
        Your order has been placed. Prepare for greatness.
      </p>
      
      <div className="bg-pink-500 border-4 border-black p-4 mb-8 font-bold text-white text-lg">
        ORDER #88219
      </div>
      
      <div className="flex gap-4">
        <button className="flex-1 py-4 bg-transparent border-4 border-black font-black uppercase hover:bg-black hover:text-white transition-colors">
          Track
        </button>
        <button className="flex-1 py-4 bg-black text-white border-4 border-black font-black uppercase hover:bg-white hover:text-black transition-colors">
          Shop
        </button>
      </div>
    </div>
  </div>
);

// --- 9. The Neumorphic (Soft) ---
export const OrderNeumorphic = () => (
  <div className="bg-[#e0e5ec] p-12 rounded-3xl h-[600px] flex items-center justify-center">
    <div className="w-full max-w-md p-10 rounded-[40px] bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center">
      <div className="w-24 h-24 rounded-full bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] flex items-center justify-center mb-8 mx-auto text-green-500">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-700 mb-2">Payment Received</h2>
      <p className="text-gray-500 text-sm mb-8">Thank you for your purchase.</p>
      
      <div className="bg-[#e0e5ec] rounded-xl p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] mb-8">
        <div className="flex justify-between text-gray-600 font-bold mb-2">
          <span>Total</span>
          <span>$185.00</span>
        </div>
        <div className="flex justify-between text-gray-400 text-sm">
          <span>Visa •••• 4242</span>
          <span>Oct 24</span>
        </div>
      </div>
      
      <button className="w-full py-3 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] active:scale-95 transition-all">
        Back Home
      </button>
    </div>
  </div>
);

// --- 10. The Upsell (Cross-sell Focus) ---
export const OrderUpsell = () => (
  <div className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden h-[600px] flex flex-col">
    <div className="bg-green-600 text-white p-8 text-center">
      <h2 className="text-2xl font-bold mb-2">Order #9921 Confirmed!</h2>
      <p className="opacity-90">An email receipt has been sent to you.</p>
    </div>
    
    <div className="p-8 flex-1 overflow-y-auto">
      <h3 className="font-bold text-gray-900 mb-4">Complete your setup</h3>
      <p className="text-gray-500 text-sm mb-6">Customers who bought the Mechanical Keyboard also bought:</p>
      
      <div className="grid grid-cols-2 gap-4">
        {[
          { name: "Wrist Rest", price: "$25.00", img: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=200" },
          { name: "Keycap Puller", price: "$5.00", img: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=200" }
        ].map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center">
            <img src={item.img} className="w-20 h-20 object-contain mb-3" alt="" />
            <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
            <p className="text-gray-500 text-xs mb-3">{item.price}</p>
            <button className="w-full py-2 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg hover:bg-blue-100">
              Add to Order
            </button>
          </div>
        ))}
      </div>
    </div>
    
    <div className="p-4 border-t border-gray-100 text-center">
      <button className="text-gray-500 font-bold hover:text-gray-900">No thanks, return to home</button>
    </div>
  </div>
);


// --- Main Gallery Wrapper ---
const OrderSummaryGallery = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-100 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Order Summary Pages</h1>
        <p className="text-slate-500">Confirmation and Thank You pages for various industries.</p>
      </div>
      
      <div className="space-y-32 max-w-5xl mx-auto">
        
        <section className='box-shadow p-4 rounded-lg relative group/orde'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/orde:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg flex flex-col md:flex-row h-auto min-h-[600px]">
    <div className="md:w-3/5 p-12 flex flex-col justify-center">
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
        <p className="text-gray-500">Thank you, Alex. We've received your order and will send you an update when it ships.</p>
      </div>

      <div className="border rounded-xl p-6 mb-8 bg-gray-50">
        <h3 className="font-bold text-gray-900 mb-4">Order Details</h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <span className="block text-gray-500 mb-1">Order Number</span>
            <span className="font-medium text-gray-900">#ORD-88291</span>
          </div>
          <div>
            <span className="block text-gray-500 mb-1">Date</span>
            <span className="font-medium text-gray-900">Oct 24, 2024</span>
          </div>
          <div>
            <span className="block text-gray-500 mb-1">Email</span>
            <span className="font-medium text-gray-900">alex@example.com</span>
          </div>
          <div>
            <span className="block text-gray-500 mb-1">Payment</span>
            <span className="font-medium text-gray-900">Visa •••• 4242</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="flex-1 bg-gray-900 text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors">Track Order</button>
        <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors">Continue Shopping</button>
      </div>
    </div>

    <div className="md:w-2/5 bg-gray-50 p-12 border-l border-gray-100">
      <h3 className="font-bold text-gray-900 mb-6">Summary</h3>
      <div className="space-y-4 mb-6">
        {orderItems.map((item, i) => (
          <div key={i} className="flex gap-4">
            <div className="w-16 h-16 bg-white border rounded-md p-1 relative">
              <img src={item.img} className="w-full h-full object-contain" alt="" />
              <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{item.qty}</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{item.name}</p>
              <p className="text-gray-500">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 pt-4 space-y-2 text-sm">
        <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>\$175.00</span></div>
        <div className="flex justify-between text-gray-600"><span>Shipping</span><span>\$10.00</span></div>
        <div className="flex justify-between font-bold text-gray-900 text-lg pt-2"><span>Total</span><span>\$185.00</span></div>
      </div>
    </div>
  </div>`} htmlCode={`<div class="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg flex flex-col md:flex-row h-auto min-h-[600px]">
    <div class="md:w-3/5 p-12 flex flex-col justify-center">
      <div class="mb-8">
        <div class="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
          <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        </div>
        <h2 class="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
        <p class="text-gray-500">Thank you, Alex. We've received your order and will send you an update when it ships.</p>
      </div>

      <div class="border rounded-xl p-6 mb-8 bg-gray-50">
        <h3 class="font-bold text-gray-900 mb-4">Order Details</h3>
        <div class="grid grid-cols-2 gap-6 text-sm">
          <div>
            <span class="block text-gray-500 mb-1">Order Number</span>
            <span class="font-medium text-gray-900">#ORD-88291</span>
          </div>
          <div>
            <span class="block text-gray-500 mb-1">Date</span>
            <span class="font-medium text-gray-900">Oct 24, 2024</span>
          </div>
          <div>
            <span class="block text-gray-500 mb-1">Email</span>
            <span class="font-medium text-gray-900">alex@example.com</span>
          </div>
          <div>
            <span class="block text-gray-500 mb-1">Payment</span>
            <span class="font-medium text-gray-900">Visa •••• 4242</span>
          </div>
        </div>
      </div>

      <div class="flex gap-4">
        <button class="flex-1 bg-gray-900 text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors">Track Order</button>
        <button class="flex-1 bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors">Continue Shopping</button>
      </div>
    </div>

    <div class="md:w-2/5 bg-gray-50 p-12 border-l border-gray-100">
      <h3 class="font-bold text-gray-900 mb-6">Summary</h3>
      <div class="space-y-4 mb-6">
        <!-- Mapping Start -->
(
          <div key=... class="flex gap-4">
            <div class="w-16 h-16 bg-white border rounded-md p-1 relative">
              <img src=... class="w-full h-full object-contain" alt="" />
              <span class="absolute -top-2 -right-2 bg-gray-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">...</span>
            </div>
            <div class="flex-1">
              <p class="font-medium text-gray-900">...</p>
              <p class="text-gray-500">...</p>
            </div>
          </div>
        ))}
      </div>
      <div class="border-t border-gray-200 pt-4 space-y-2 text-sm">
        <div class="flex justify-between text-gray-600"><span>Subtotal</span><span>\$175.00</span></div>
        <div class="flex justify-between text-gray-600"><span>Shipping</span><span>\$10.00</span></div>
        <div class="flex justify-between font-bold text-gray-900 text-lg pt-2"><span>Total</span><span>\$185.00</span></div>
      </div>
    </div>
  </div>`} cssCode={`/* OrderStandard Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #111827;\n  background-color: #6b7280;\n  background-color: #f9fafb;\n  background-color: #ffffff;\n  border-color: #e5e7eb;\n  border-color: #f3f4f6;\n  border-radius: 0.5rem;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #111827;\n  color: #16a34a;\n  color: #374151;\n  color: #4b5563;\n  color: #6b7280;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  height: 100%;\n  justify-content: center;\n  justify-content: space-between;\n  padding-top: 0.75rem; padding-bottom: 0.75rem;\n  padding: 0.25rem;\n  padding: 1.5rem;\n  padding: 3rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 01. Standard E-commerce </span>
          <OrderStandard />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/orde'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/orde:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-[#f3f4f6] p-8 flex justify-center items-center h-[600px] rounded-3xl">
    <div className="bg-white w-full max-w-sm shadow-xl relative">
      {/* Jagged Top */}
      <div className="absolute top-0 left-0 w-full h-4 bg-white -mt-2" style={{clipPath: 'polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)'}}></div>
      
      <div className="p-8 text-center">
        <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">✓</div>
        <h2 className="font-mono font-bold text-xl uppercase tracking-widest mb-1">Receipt</h2>
        <p className="font-mono text-xs text-gray-400 mb-8">#2492-1942 • OCT 24</p>
        
        <div className="border-t-2 border-dashed border-gray-200 py-4 space-y-3 font-mono text-sm text-left">
          {orderItems.map((item, i) => (
            <div key={i} className="flex justify-between">
              <span>{item.qty}x {item.name}</span>
              <span>{item.price}</span>
            </div>
          ))}
        </div>
        
        <div className="border-t-2 border-dashed border-gray-200 py-4 font-mono">
          <div className="flex justify-between font-bold text-lg">
            <span>TOTAL PAID</span>
            <span>\$185.00</span>
          </div>
        </div>
        
        <div className="mt-8">
          <img src="https://bwipjs-api.metafloor.com/?bcid=code128&text=ORD-88291&scale=3&height=10&includetext" alt="Barcode" className="w-full opacity-50" />
        </div>
      </div>

      {/* Jagged Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-white -mb-2" style={{clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)'}}></div>
    </div>
  </div>`} htmlCode={`<div class="bg-[#f3f4f6] p-8 flex justify-center items-center h-[600px] rounded-3xl">
    <div class="bg-white w-full max-w-sm shadow-xl relative">
      ...
      <div class="absolute top-0 left-0 w-full h-4 bg-white -mt-2" style=...}></div>
      
      <div class="p-8 text-center">
        <div class="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">✓</div>
        <h2 class="font-mono font-bold text-xl uppercase tracking-widest mb-1">Receipt</h2>
        <p class="font-mono text-xs text-gray-400 mb-8">#2492-1942 • OCT 24</p>
        
        <div class="border-t-2 border-dashed border-gray-200 py-4 space-y-3 font-mono text-sm text-left">
          <!-- Mapping Start -->
(
            <div key=... class="flex justify-between">
              <span>...x ...</span>
              <span>...</span>
            </div>
          ))}
        </div>
        
        <div class="border-t-2 border-dashed border-gray-200 py-4 font-mono">
          <div class="flex justify-between font-bold text-lg">
            <span>TOTAL PAID</span>
            <span>\$185.00</span>
          </div>
        </div>
        
        <div class="mt-8">
          <img src="https://bwipjs-api.metafloor.com/?bcid=code128&text=ORD-88291&scale=3&height=10&includetext" alt="Barcode" class="w-full opacity-50" />
        </div>
      </div>

      ...
      <div class="absolute bottom-0 left-0 w-full h-4 bg-white -mb-2" style=...}></div>
    </div>
  </div>`} cssCode={`/* OrderReceipt Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #000000;\n  background-color: #ffffff;\n  border-color: #e5e7eb;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #9ca3af;\n  color: #ffffff;\n  display: flex;\n  font-weight: 700;\n  justify-content: center;\n  justify-content: space-between;\n  padding-top: 1rem; padding-bottom: 1rem;\n  padding: 2rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 02. Minimal Receipt </span>
          <OrderReceipt />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/orde'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/orde:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 max-w-md mx-auto h-[600px] flex flex-col">
    {/* Map Placeholder */}
    <div className="h-1/2 bg-gray-200 relative">
      <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 grayscale" alt="Map" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-4 h-4 bg-blue-600 rounded-full animate-ping absolute"></div>
        <div className="w-4 h-4 bg-blue-600 rounded-full relative border-2 border-white"></div>
      </div>
    </div>
    
    <div className="h-1/2 bg-white p-6 rounded-t-3xl -mt-6 relative z-10 flex flex-col">
      <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6"></div>
      
      <div className="flex justify-between items-end mb-6">
        <div>
          <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">Estimated Arrival</div>
          <div className="text-3xl font-bold text-gray-900">25-35 <span className="text-sm font-medium text-gray-500">min</span></div>
        </div>
        <div className="text-right">
          <div className="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full text-xs">On the way</div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-4 mb-6">
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100" className="w-12 h-12 rounded-full object-cover" alt="Rider" />
        <div className="flex-1">
          <div className="font-bold text-gray-900">Michael</div>
          <div className="text-xs text-gray-500">Your Rider • Yamaha 150cc</div>
        </div>
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-600">📞</button>
      </div>
      
      <div className="mt-auto">
        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <div className="w-3/4 bg-blue-600 h-full rounded-full"></div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>Confirmed</span>
          <span>Preparing</span>
          <span className="text-blue-600 font-bold">On Way</span>
          <span>Arrived</span>
        </div>
      </div>
    </div>
  </div>`} htmlCode={`<div class="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 max-w-md mx-auto h-[600px] flex flex-col">
    ...
    <div class="h-1/2 bg-gray-200 relative">
      <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover opacity-60 grayscale" alt="Map" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div class="w-4 h-4 bg-blue-600 rounded-full animate-ping absolute"></div>
        <div class="w-4 h-4 bg-blue-600 rounded-full relative border-2 border-white"></div>
      </div>
    </div>
    
    <div class="h-1/2 bg-white p-6 rounded-t-3xl -mt-6 relative z-10 flex flex-col">
      <div class="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6"></div>
      
      <div class="flex justify-between items-end mb-6">
        <div>
          <div class="text-sm text-gray-500 font-bold uppercase tracking-wider">Estimated Arrival</div>
          <div class="text-3xl font-bold text-gray-900">25-35 <span class="text-sm font-medium text-gray-500">min</span></div>
        </div>
        <div class="text-right">
          <div class="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full text-xs">On the way</div>
        </div>
      </div>
      
      <div class="bg-gray-50 p-4 rounded-xl flex items-center gap-4 mb-6">
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100" class="w-12 h-12 rounded-full object-cover" alt="Rider" />
        <div class="flex-1">
          <div class="font-bold text-gray-900">Michael</div>
          <div class="text-xs text-gray-500">Your Rider • Yamaha 150cc</div>
        </div>
        <button class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-600">📞</button>
      </div>
      
      <div class="mt-auto">
        <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <div class="w-3/4 bg-blue-600 h-full rounded-full"></div>
        </div>
        <div class="flex justify-between text-xs text-gray-400 mt-2">
          <span>Confirmed</span>
          <span>Preparing</span>
          <span class="text-blue-600 font-bold">On Way</span>
          <span>Arrived</span>
        </div>
      </div>
    </div>
  </div>`} cssCode={`/* OrderFood Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #2563eb;\n  background-color: #e5e7eb;\n  background-color: #f3f4f6;\n  background-color: #f9fafb;\n  background-color: #ffffff;\n  border-color: #f3f4f6;\n  border-color: #ffffff;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #111827;\n  color: #16a34a;\n  color: #2563eb;\n  color: #6b7280;\n  color: #9ca3af;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  height: 100%;\n  justify-content: center;\n  justify-content: space-between;\n  padding-left: 0.75rem; padding-right: 0.75rem;\n  padding-top: 0.25rem; padding-bottom: 0.25rem;\n  padding: 1.5rem;\n  padding: 1rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 03. Food Delivery Tracker </span>
          <OrderFood />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/orde'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/orde:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-indigo-900 text-white p-12 rounded-3xl flex flex-col items-center text-center h-[600px] justify-center">
    <div className="w-20 h-20 bg-indigo-800 rounded-2xl flex items-center justify-center mb-8 border border-indigo-700 shadow-lg shadow-indigo-900/50">
      <svg className="w-10 h-10 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    </div>
    
    <h2 className="text-4xl font-bold mb-4">Welcome aboard!</h2>
    <p className="text-indigo-200 text-lg mb-10 max-w-md">
      Your subscription to <span className="text-white font-bold">Pro Plan</span> is active. We've sent a receipt to your email.
    </p>
    
    <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl w-full max-w-sm mb-10 text-left">
      <div className="flex justify-between items-center mb-2">
        <span className="text-indigo-200 text-sm">Amount Paid</span>
        <span className="font-bold text-xl">\$29.00</span>
      </div>
      <div className="flex justify-between items-center text-xs">
        <span className="text-indigo-300">Next billing date</span>
        <span className="text-white">Nov 24, 2024</span>
      </div>
    </div>
    
    <div className="flex flex-col w-full max-w-xs gap-3">
      <button className="w-full py-3 bg-white text-indigo-900 font-bold rounded-lg hover:bg-indigo-50 transition-colors">
        Go to Dashboard
      </button>
      <button className="w-full py-3 bg-transparent text-indigo-200 text-sm hover:text-white transition-colors">
        Download Invoice
      </button>
    </div>
  </div>`} htmlCode={`<div class="bg-indigo-900 text-white p-12 rounded-3xl flex flex-col items-center text-center h-[600px] justify-center">
    <div class="w-20 h-20 bg-indigo-800 rounded-2xl flex items-center justify-center mb-8 border border-indigo-700 shadow-lg shadow-indigo-900/50">
      <svg class="w-10 h-10 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    </div>
    
    <h2 class="text-4xl font-bold mb-4">Welcome aboard!</h2>
    <p class="text-indigo-200 text-lg mb-10 max-w-md">
      Your subscription to <span class="text-white font-bold">Pro Plan</span> is active. We've sent a receipt to your email.
    </p>
    
    <div class="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl w-full max-w-sm mb-10 text-left">
      <div class="flex justify-between items-center mb-2">
        <span class="text-indigo-200 text-sm">Amount Paid</span>
        <span class="font-bold text-xl">\$29.00</span>
      </div>
      <div class="flex justify-between items-center text-xs">
        <span class="text-indigo-300">Next billing date</span>
        <span class="text-white">Nov 24, 2024</span>
      </div>
    </div>
    
    <div class="flex flex-col w-full max-w-xs gap-3">
      <button class="w-full py-3 bg-white text-indigo-900 font-bold rounded-lg hover:bg-indigo-50 transition-colors">
        Go to Dashboard
      </button>
      <button class="w-full py-3 bg-transparent text-indigo-200 text-sm hover:text-white transition-colors">
        Download Invoice
      </button>
    </div>
  </div>`} cssCode={`/* OrderSaaS Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  backdrop-filter: blur(12px);\n  background-color: #ffffff;\n  background-color: transparent;\n  border-color: #4338ca;\n  border-radius: 0.5rem;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-radius: 1rem;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  justify-content: center;\n  justify-content: space-between;\n  padding-top: 0.75rem; padding-bottom: 0.75rem;\n  padding: 1.5rem;\n  padding: 3rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 04. SaaS Onboarding </span>
          <OrderSaaS />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/orde'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/orde:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-gray-800 h-[600px] rounded-3xl flex items-center justify-center p-4">
    <div className="bg-white w-full max-w-sm rounded-3xl overflow-hidden relative shadow-2xl">
      {/* Top Section */}
      <div className="p-8 bg-purple-600 text-white text-center">
        <div className="text-sm uppercase tracking-widest font-bold opacity-80 mb-2">Concert Ticket</div>
        <h2 className="text-3xl font-black mb-1">NEON NIGHTS</h2>
        <p className="text-purple-200">World Tour 2024</p>
      </div>
      
      {/* Perforated Line */}
      <div className="relative h-8 bg-purple-600">
        <div className="absolute bottom-0 left-0 w-full h-4 bg-white rounded-t-3xl"></div>
        <div className="absolute top-1/2 left-0 w-full border-b-2 border-dashed border-purple-400/50"></div>
        <div className="absolute top-1/2 left-0 w-6 h-6 bg-gray-800 rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 right-0 w-6 h-6 bg-gray-800 rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
      </div>

      {/* Details */}
      <div className="p-8 pt-2">
        <div className="flex justify-between mb-6 text-center">
          <div>
            <span className="block text-xs text-gray-400 uppercase">Date</span>
            <span className="font-bold text-gray-900">NOV 12</span>
          </div>
          <div>
            <span className="block text-xs text-gray-400 uppercase">Time</span>
            <span className="font-bold text-gray-900">20:00</span>
          </div>
          <div>
            <span className="block text-xs text-gray-400 uppercase">Gate</span>
            <span className="font-bold text-gray-900">B4</span>
          </div>
        </div>
        
        <div className="bg-gray-100 p-4 rounded-xl mb-6">
          <img src="https://bwipjs-api.metafloor.com/?bcid=qrcode&text=TICKET-123456&scale=4" className="w-32 h-32 mx-auto mix-blend-multiply" alt="QR" />
        </div>
        
        <div className="text-center">
          <p className="text-xs text-gray-400">Order #8842-192</p>
          <button className="mt-4 text-purple-600 font-bold text-sm hover:underline">Download to Wallet</button>
        </div>
      </div>
    </div>
  </div>`} htmlCode={`<div class="bg-gray-800 h-[600px] rounded-3xl flex items-center justify-center p-4">
    <div class="bg-white w-full max-w-sm rounded-3xl overflow-hidden relative shadow-2xl">
      ...
      <div class="p-8 bg-purple-600 text-white text-center">
        <div class="text-sm uppercase tracking-widest font-bold opacity-80 mb-2">Concert Ticket</div>
        <h2 class="text-3xl font-black mb-1">NEON NIGHTS</h2>
        <p class="text-purple-200">World Tour 2024</p>
      </div>
      
      ...
      <div class="relative h-8 bg-purple-600">
        <div class="absolute bottom-0 left-0 w-full h-4 bg-white rounded-t-3xl"></div>
        <div class="absolute top-1/2 left-0 w-full border-b-2 border-dashed border-purple-400/50"></div>
        <div class="absolute top-1/2 left-0 w-6 h-6 bg-gray-800 rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
        <div class="absolute top-1/2 right-0 w-6 h-6 bg-gray-800 rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
      </div>

      ...
      <div class="p-8 pt-2">
        <div class="flex justify-between mb-6 text-center">
          <div>
            <span class="block text-xs text-gray-400 uppercase">Date</span>
            <span class="font-bold text-gray-900">NOV 12</span>
          </div>
          <div>
            <span class="block text-xs text-gray-400 uppercase">Time</span>
            <span class="font-bold text-gray-900">20:00</span>
          </div>
          <div>
            <span class="block text-xs text-gray-400 uppercase">Gate</span>
            <span class="font-bold text-gray-900">B4</span>
          </div>
        </div>
        
        <div class="bg-gray-100 p-4 rounded-xl mb-6">
          <img src="https://bwipjs-api.metafloor.com/?bcid=qrcode&text=TICKET-123456&scale=4" class="w-32 h-32 mx-auto mix-blend-multiply" alt="QR" />
        </div>
        
        <div class="text-center">
          <p class="text-xs text-gray-400">Order #8842-192</p>
          <button class="mt-4 text-purple-600 font-bold text-sm hover:underline">Download to Wallet</button>
        </div>
      </div>
    </div>
  </div>`} cssCode={`/* OrderTicket Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #1f2937;\n  background-color: #9333ea;\n  background-color: #f3f4f6;\n  background-color: #ffffff;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #111827;\n  color: #9333ea;\n  color: #9ca3af;\n  color: #ffffff;\n  display: flex;\n  font-weight: 700;\n  justify-content: center;\n  justify-content: space-between;\n  padding: 1rem;\n  padding: 2rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 05. Event Ticket (QR) </span>
          <OrderTicket />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/orde'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/orde:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="relative h-[600px] w-full rounded-3xl overflow-hidden bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500 flex items-center justify-center">
    <div className="absolute top-10 left-10 w-48 h-48 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-40"></div>
    <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-40"></div>

    <div className="relative bg-white/20 backdrop-blur-xl border border-white/30 p-10 rounded-[2rem] shadow-2xl w-full max-w-md text-center text-white">
      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/40">
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
      </div>
      
      <h2 className="text-3xl font-bold mb-2">Payment Successful</h2>
      <p className="text-white/80 mb-8">You are now a premium member.</p>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center bg-white/10 p-4 rounded-xl border border-white/10">
          <span className="text-sm">Transaction ID</span>
          <span className="font-mono text-sm font-bold">#TRX_9921</span>
        </div>
        <div className="flex justify-between items-center bg-white/10 p-4 rounded-xl border border-white/10">
          <span className="text-sm">Amount</span>
          <span className="font-mono text-sm font-bold">\$99.00</span>
        </div>
      </div>
      
      <button className="mt-8 w-full py-3 bg-white text-fuchsia-600 font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">
        Continue
      </button>
    </div>
  </div>`} htmlCode={`<div class="relative h-[600px] w-full rounded-3xl overflow-hidden bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500 flex items-center justify-center">
    <div class="absolute top-10 left-10 w-48 h-48 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-40"></div>
    <div class="absolute bottom-10 right-10 w-48 h-48 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-40"></div>

    <div class="relative bg-white/20 backdrop-blur-xl border border-white/30 p-10 rounded-[2rem] shadow-2xl w-full max-w-md text-center text-white">
      <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/40">
        <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
      </div>
      
      <h2 class="text-3xl font-bold mb-2">Payment Successful</h2>
      <p class="text-white/80 mb-8">You are now a premium member.</p>
      
      <div class="space-y-4">
        <div class="flex justify-between items-center bg-white/10 p-4 rounded-xl border border-white/10">
          <span class="text-sm">Transaction ID</span>
          <span class="font-mono text-sm font-bold">#TRX_9921</span>
        </div>
        <div class="flex justify-between items-center bg-white/10 p-4 rounded-xl border border-white/10">
          <span class="text-sm">Amount</span>
          <span class="font-mono text-sm font-bold">\$99.00</span>
        </div>
      </div>
      
      <button class="mt-8 w-full py-3 bg-white text-fuchsia-600 font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">
        Continue
      </button>
    </div>
  </div>`} cssCode={`/* OrderGlass Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  backdrop-filter: blur(12px);\n  background-color: #60a5fa;\n  background-color: #ffffff;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #ffffff;\n  display: flex;\n  font-weight: 700;\n  justify-content: center;\n  justify-content: space-between;\n  padding-top: 0.75rem; padding-bottom: 0.75rem;\n  padding: 1rem;\n  padding: 2.5rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 06. Glassmorphism </span>
          <OrderGlass />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/orde'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/orde:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-black p-8 rounded-3xl border border-gray-800 h-[600px] flex items-center justify-center font-mono">
    <div className="w-full max-w-lg border border-green-500/30 bg-green-900/10 p-8 rounded-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full border-2 border-green-500 flex items-center justify-center text-green-500 animate-pulse">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        </div>
        <div>
          <h2 className="text-green-500 font-bold text-xl">TRANSACTION CONFIRMED</h2>
          <p className="text-green-700 text-xs">BLOCK #19248821</p>
        </div>
      </div>

      <div className="space-y-4 text-sm mb-8">
        <div>
          <div className="text-gray-500 text-xs uppercase mb-1">Transaction Hash</div>
          <div className="text-gray-300 break-all bg-black p-2 rounded border border-gray-800">0x3f29...9a2b</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-gray-500 text-xs uppercase mb-1">From</div>
            <div className="text-gray-300 truncate">0x88...21</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs uppercase mb-1">To</div>
            <div className="text-gray-300 truncate">Opensea.io</div>
          </div>
        </div>
        <div>
          <div className="text-gray-500 text-xs uppercase mb-1">Value</div>
          <div className="text-white text-xl font-bold">0.45 ETH <span className="text-sm text-gray-500 font-normal">(\$1,240.00)</span></div>
        </div>
      </div>

      <button className="w-full py-3 border border-green-500 text-green-500 font-bold rounded hover:bg-green-500 hover:text-black transition-colors uppercase tracking-widest text-xs">
        View on Etherscan
      </button>
    </div>
  </div>`} htmlCode={`<div class="bg-black p-8 rounded-3xl border border-gray-800 h-[600px] flex items-center justify-center font-mono">
    <div class="w-full max-w-lg border border-green-500/30 bg-green-900/10 p-8 rounded-xl relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-1 bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
      
      <div class="flex items-center gap-4 mb-6">
        <div class="w-12 h-12 rounded-full border-2 border-green-500 flex items-center justify-center text-green-500 animate-pulse">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        </div>
        <div>
          <h2 class="text-green-500 font-bold text-xl">TRANSACTION CONFIRMED</h2>
          <p class="text-green-700 text-xs">BLOCK #19248821</p>
        </div>
      </div>

      <div class="space-y-4 text-sm mb-8">
        <div>
          <div class="text-gray-500 text-xs uppercase mb-1">Transaction Hash</div>
          <div class="text-gray-300 break-all bg-black p-2 rounded border border-gray-800">0x3f29...9a2b</div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <div class="text-gray-500 text-xs uppercase mb-1">From</div>
            <div class="text-gray-300 truncate">0x88...21</div>
          </div>
          <div>
            <div class="text-gray-500 text-xs uppercase mb-1">To</div>
            <div class="text-gray-300 truncate">Opensea.io</div>
          </div>
        </div>
        <div>
          <div class="text-gray-500 text-xs uppercase mb-1">Value</div>
          <div class="text-white text-xl font-bold">0.45 ETH <span class="text-sm text-gray-500 font-normal">(\$1,240.00)</span></div>
        </div>
      </div>

      <button class="w-full py-3 border border-green-500 text-green-500 font-bold rounded hover:bg-green-500 hover:text-black transition-colors uppercase tracking-widest text-xs">
        View on Etherscan
      </button>
    </div>
  </div>`} cssCode={`/* OrderCrypto Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #000000;\n  background-color: #22c55e;\n  border-color: #1f2937;\n  border-color: #22c55e;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #22c55e;\n  color: #6b7280;\n  color: #ffffff;\n  display: flex;\n  font-weight: 700;\n  justify-content: center;\n  padding-top: 0.75rem; padding-bottom: 0.75rem;\n  padding: 0.5rem;\n  padding: 2rem;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 07. Crypto Transaction </span>
          <OrderCrypto />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/orde'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/orde:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-yellow-400 p-8 rounded-3xl border-4 border-black h-[600px] flex items-center justify-center">
    <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0_0_#000] max-w-lg w-full text-center">
      <h2 className="text-5xl font-black uppercase mb-6 leading-none">Hell<br/>Yeah!</h2>
      <div className="h-4 bg-black w-full mb-6"></div>
      <p className="text-xl font-bold mb-8">
        Your order has been placed. Prepare for greatness.
      </p>
      
      <div className="bg-pink-500 border-4 border-black p-4 mb-8 font-bold text-white text-lg">
        ORDER #88219
      </div>
      
      <div className="flex gap-4">
        <button className="flex-1 py-4 bg-transparent border-4 border-black font-black uppercase hover:bg-black hover:text-white transition-colors">
          Track
        </button>
        <button className="flex-1 py-4 bg-black text-white border-4 border-black font-black uppercase hover:bg-white hover:text-black transition-colors">
          Shop
        </button>
      </div>
    </div>
  </div>`} htmlCode={`<div class="bg-yellow-400 p-8 rounded-3xl border-4 border-black h-[600px] flex items-center justify-center">
    <div class="bg-white border-4 border-black p-8 shadow-[12px_12px_0_0_#000] max-w-lg w-full text-center">
      <h2 class="text-5xl font-black uppercase mb-6 leading-none">Hell<br/>Yeah!</h2>
      <div class="h-4 bg-black w-full mb-6"></div>
      <p class="text-xl font-bold mb-8">
        Your order has been placed. Prepare for greatness.
      </p>
      
      <div class="bg-pink-500 border-4 border-black p-4 mb-8 font-bold text-white text-lg">
        ORDER #88219
      </div>
      
      <div class="flex gap-4">
        <button class="flex-1 py-4 bg-transparent border-4 border-black font-black uppercase hover:bg-black hover:text-white transition-colors">
          Track
        </button>
        <button class="flex-1 py-4 bg-black text-white border-4 border-black font-black uppercase hover:bg-white hover:text-black transition-colors">
          Shop
        </button>
      </div>
    </div>
  </div>`} cssCode={`/* OrderBrutalist Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #000000;\n  background-color: #ec4899;\n  background-color: #facc15;\n  background-color: #ffffff;\n  background-color: transparent;\n  border-color: #000000;\n  border-radius: 1.5rem;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #ffffff;\n  display: flex;\n  font-weight: 700;\n  justify-content: center;\n  padding-top: 1rem; padding-bottom: 1rem;\n  padding: 1rem;\n  padding: 2rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 08. Brutalist </span>
          <OrderBrutalist />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/orde'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/orde:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-[#e0e5ec] p-12 rounded-3xl h-[600px] flex items-center justify-center">
    <div className="w-full max-w-md p-10 rounded-[40px] bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center">
      <div className="w-24 h-24 rounded-full bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] flex items-center justify-center mb-8 mx-auto text-green-500">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-700 mb-2">Payment Received</h2>
      <p className="text-gray-500 text-sm mb-8">Thank you for your purchase.</p>
      
      <div className="bg-[#e0e5ec] rounded-xl p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] mb-8">
        <div className="flex justify-between text-gray-600 font-bold mb-2">
          <span>Total</span>
          <span>\$185.00</span>
        </div>
        <div className="flex justify-between text-gray-400 text-sm">
          <span>Visa •••• 4242</span>
          <span>Oct 24</span>
        </div>
      </div>
      
      <button className="w-full py-3 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] active:scale-95 transition-all">
        Back Home
      </button>
    </div>
  </div>`} htmlCode={`<div class="bg-[#e0e5ec] p-12 rounded-3xl h-[600px] flex items-center justify-center">
    <div class="w-full max-w-md p-10 rounded-[40px] bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center">
      <div class="w-24 h-24 rounded-full bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] flex items-center justify-center mb-8 mx-auto text-green-500">
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
      </div>
      
      <h2 class="text-2xl font-bold text-gray-700 mb-2">Payment Received</h2>
      <p class="text-gray-500 text-sm mb-8">Thank you for your purchase.</p>
      
      <div class="bg-[#e0e5ec] rounded-xl p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] mb-8">
        <div class="flex justify-between text-gray-600 font-bold mb-2">
          <span>Total</span>
          <span>\$185.00</span>
        </div>
        <div class="flex justify-between text-gray-400 text-sm">
          <span>Visa •••• 4242</span>
          <span>Oct 24</span>
        </div>
      </div>
      
      <button class="w-full py-3 rounded-xl bg-[#e0e5ec] text-blue-500 font-bold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] active:scale-95 transition-all">
        Back Home
      </button>
    </div>
  </div>`} cssCode={`/* OrderNeumorphic Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-radius: 9999px;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #22c55e;\n  color: #374151;\n  color: #3b82f6;\n  color: #4b5563;\n  color: #6b7280;\n  color: #9ca3af;\n  display: flex;\n  font-weight: 700;\n  justify-content: center;\n  justify-content: space-between;\n  padding-top: 0.75rem; padding-bottom: 0.75rem;\n  padding: 1.5rem;\n  padding: 2.5rem;\n  padding: 3rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 09. Neumorphic </span>
          <OrderNeumorphic />
        </section>

        <section className='box-shadow p-4 rounded-lg relative group/orde'>
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/orde:opacity-100 transition-opacity"><CopyButton jsxCode={`<div className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden h-[600px] flex flex-col">
    <div className="bg-green-600 text-white p-8 text-center">
      <h2 className="text-2xl font-bold mb-2">Order #9921 Confirmed!</h2>
      <p className="opacity-90">An email receipt has been sent to you.</p>
    </div>
    
    <div className="p-8 flex-1 overflow-y-auto">
      <h3 className="font-bold text-gray-900 mb-4">Complete your setup</h3>
      <p className="text-gray-500 text-sm mb-6">Customers who bought the Mechanical Keyboard also bought:</p>
      
      <div className="grid grid-cols-2 gap-4">
        {[
          { name: "Wrist Rest", price: "\$25.00", img: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=200" },
          { name: "Keycap Puller", price: "\$5.00", img: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=200" }
        ].map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center">
            <img src={item.img} className="w-20 h-20 object-contain mb-3" alt="" />
            <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
            <p className="text-gray-500 text-xs mb-3">{item.price}</p>
            <button className="w-full py-2 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg hover:bg-blue-100">
              Add to Order
            </button>
          </div>
        ))}
      </div>
    </div>
    
    <div className="p-4 border-t border-gray-100 text-center">
      <button className="text-gray-500 font-bold hover:text-gray-900">No thanks, return to home</button>
    </div>
  </div>`} htmlCode={`<div class="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden h-[600px] flex flex-col">
    <div class="bg-green-600 text-white p-8 text-center">
      <h2 class="text-2xl font-bold mb-2">Order #9921 Confirmed!</h2>
      <p class="opacity-90">An email receipt has been sent to you.</p>
    </div>
    
    <div class="p-8 flex-1 overflow-y-auto">
      <h3 class="font-bold text-gray-900 mb-4">Complete your setup</h3>
      <p class="text-gray-500 text-sm mb-6">Customers who bought the Mechanical Keyboard also bought:</p>
      
      <div class="grid grid-cols-2 gap-4">
        ...,
          ...
        ].map((item, i) => (
          <div key=... class="border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center">
            <img src=... class="w-20 h-20 object-contain mb-3" alt="" />
            <h4 class="font-bold text-gray-900 text-sm">...</h4>
            <p class="text-gray-500 text-xs mb-3">...</p>
            <button class="w-full py-2 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg hover:bg-blue-100">
              Add to Order
            </button>
          </div>
        ))}
      </div>
    </div>
    
    <div class="p-4 border-t border-gray-100 text-center">
      <button class="text-gray-500 font-bold hover:text-gray-900">No thanks, return to home</button>
    </div>
  </div>`} cssCode={`/* OrderUpsell Styles (Generated from Tailwind) */\n.component-root {\n  align-items: center;\n  background-color: #16a34a;\n  background-color: #eff6ff;\n  background-color: #ffffff;\n  border-color: #e5e7eb;\n  border-color: #f3f4f6;\n  border-radius: 0.5rem;\n  border-radius: 0.75rem;\n  border-radius: 1.5rem;\n  border-width: 1px; border-style: solid;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n  color: #111827;\n  color: #2563eb;\n  color: #6b7280;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  padding-top: 0.5rem; padding-bottom: 0.5rem;\n  padding: 1rem;\n  padding: 2rem;\n  text-align: center;\n  width: 100%;\n}\n\n/* Note: This conversion covers core layout and colors. \n   Check HTML/JSX tabs for full structural details. */`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center mb-6"> 10. Post-Purchase Upsell </span>
          <OrderUpsell />
        </section>

      </div>
    </div>
  );
};

export default OrderSummaryGallery;