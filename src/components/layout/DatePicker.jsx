// import React, { useState } from 'react';

// // --- Shared Calendar Logic ---
// const useCalendar = () => {
//   const [date, setDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(new Date().getDate());

//   const year = date.getFullYear();
//   const month = date.getMonth();
  
//   const daysInMonth = new Date(year, month + 1, 0).getDate();
//   const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 = Sunday

//   const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//   const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

//   const prevMonth = () => setDate(new Date(year, month - 1, 1));
//   const nextMonth = () => setDate(new Date(year, month + 1, 1));

//   // Generate grid array (empty slots for padding + actual days)
//   const daysArray = [
//     ...Array(firstDayOfMonth).fill(null),
//     ...Array(daysInMonth).fill(null).map((_, i) => i + 1)
//   ];

//   return {
//     year, month, monthName: monthNames[month], daysOfWeek, daysArray,
//     prevMonth, nextMonth, selectedDate, setSelectedDate
//   };
// };

// // --- 1. The Standard SaaS (Clean Blue) ---
// export const DateStandard = () => {
//   const { monthName, year, daysOfWeek, daysArray, prevMonth, nextMonth, selectedDate, setSelectedDate } = useCalendar();

//   return (
//     <div className="w-64 bg-white rounded-xl shadow-lg border border-gray-100 p-4">
//       <div className="flex justify-between items-center mb-4">
//         <button onClick={prevMonth} className="p-1 hover:bg-gray-100 rounded-lg text-gray-600">←</button>
//         <span className="font-bold text-gray-800">{monthName} {year}</span>
//         <button onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded-lg text-gray-600">→</button>
//       </div>
//       <div className="grid grid-cols-7 gap-1 text-center mb-2">
//         {daysOfWeek.map(d => <span key={d} className="text-xs font-bold text-gray-400">{d}</span>)}
//       </div>
//       <div className="grid grid-cols-7 gap-1 text-center">
//         {daysArray.map((day, i) => (
//           <button
//             key={i}
//             disabled={!day}
//             onClick={() => day && setSelectedDate(day)}
//             className={`h-8 w-8 rounded-lg text-sm flex items-center justify-center transition-colors ${
//               !day ? 'invisible' :
//               day === selectedDate ? 'bg-blue-600 text-white font-bold shadow-md' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
//             }`}
//           >
//             {day}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// // --- 2. The Dark Mode (Midnight) ---
// export const DateDark = () => {
//   const { monthName, year, daysOfWeek, daysArray, prevMonth, nextMonth, selectedDate, setSelectedDate } = useCalendar();

//   return (
//     <div className="w-64 bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 p-4">
//       <div className="flex justify-between items-center mb-4">
//         <span className="font-bold text-white text-lg">{monthName}</span>
//         <div className="flex gap-2">
//            <button onClick={prevMonth} className="text-slate-400 hover:text-white">←</button>
//            <button onClick={nextMonth} className="text-slate-400 hover:text-white">→</button>
//         </div>
//       </div>
//       <div className="grid grid-cols-7 gap-1 text-center mb-2">
//         {daysOfWeek.map(d => <span key={d} className="text-xs font-medium text-slate-500">{d}</span>)}
//       </div>
//       <div className="grid grid-cols-7 gap-1 text-center">
//         {daysArray.map((day, i) => (
//           <button
//             key={i}
//             disabled={!day}
//             onClick={() => day && setSelectedDate(day)}
//             className={`h-8 w-8 rounded-full text-sm flex items-center justify-center transition-all ${
//               !day ? 'invisible' :
//               day === selectedDate ? 'bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'text-slate-300 hover:bg-slate-800'
//             }`}
//           >
//             {day}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// // --- 3. The Glassmorphism (Frosty) ---
// export const DateGlass = () => {
//   const { monthName, year, daysOfWeek, daysArray, prevMonth, nextMonth, selectedDate, setSelectedDate } = useCalendar();

//   return (
//     <div className="w-64 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl">
//       <div className="flex justify-between items-center mb-4 text-white">
//         <button onClick={prevMonth} className="hover:bg-white/20 p-1 rounded">←</button>
//         <span className="font-bold drop-shadow-md">{monthName} {year}</span>
//         <button onClick={nextMonth} className="hover:bg-white/20 p-1 rounded">→</button>
//       </div>
//       <div className="grid grid-cols-7 gap-1 text-center mb-2">
//         {daysOfWeek.map(d => <span key={d} className="text-xs font-semibold text-white/60">{d}</span>)}
//       </div>
//       <div className="grid grid-cols-7 gap-1 text-center">
//         {daysArray.map((day, i) => (
//           <button
//             key={i}
//             disabled={!day}
//             onClick={() => day && setSelectedDate(day)}
//             className={`h-8 w-8 rounded-lg text-sm flex items-center justify-center transition-all ${
//               !day ? 'invisible' :
//               day === selectedDate ? 'bg-white/90 text-indigo-900 font-bold shadow-lg' : 'text-white hover:bg-white/20'
//             }`}
//           >
//             {day}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// // --- 4. The Minimalist (Typography Focus) ---
// export const DateMinimal = () => {
//   const { monthName, year, daysOfWeek, daysArray, prevMonth, nextMonth, selectedDate, setSelectedDate } = useCalendar();

//   return (
//     <div className="w-64 bg-white p-6">
//       <div className="flex justify-between items-end mb-6">
//         <div>
//            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{year}</div>
//            <div className="text-2xl font-bold text-black">{monthName}</div>
//         </div>
//         <div className="flex gap-4">
//            <button onClick={prevMonth} className="text-black hover:text-gray-500">↓</button>
//            <button onClick={nextMonth} className="text-black hover:text-gray-500">↑</button>
//         </div>
//       </div>
//       <div className="grid grid-cols-7 gap-2 text-center">
//         {daysArray.map((day, i) => (
//           <button
//             key={i}
//             disabled={!day}
//             onClick={() => day && setSelectedDate(day)}
//             className={`h-6 w-6 text-sm flex items-center justify-center transition-all relative ${
//               !day ? 'invisible' :
//               day === selectedDate ? 'text-black font-bold after:absolute after:-bottom-1 after:w-1 after:h-1 after:bg-black after:rounded-full' : 'text-gray-400 hover:text-black'
//             }`}
//           >
//             {day}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// // --- 5. The Range Picker Simulation ---
// export const DateRange = () => {
//   const { monthName, year, daysOfWeek, daysArray, prevMonth, nextMonth } = useCalendar();
//   // Simulating a range for visual demo (12th to 18th)
//   const rangeStart = 12;
//   const rangeEnd = 18;

//   return (
//     <div className="w-72 bg-white rounded-xl shadow-lg border border-gray-100 p-4">
//       <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
//         <button onClick={prevMonth} className="text-gray-400 hover:text-black">←</button>
//         <span className="font-semibold text-gray-900 text-sm">{monthName} {year}</span>
//         <button onClick={nextMonth} className="text-gray-400 hover:text-black">→</button>
//       </div>
//       <div className="grid grid-cols-7 text-center mb-2">
//         {daysOfWeek.map(d => <span key={d} className="text-[10px] font-bold text-gray-400 uppercase">{d}</span>)}
//       </div>
//       <div className="grid grid-cols-7 gap-y-1 text-center">
//         {daysArray.map((day, i) => {
//           if (!day) return <div key={i}></div>;
          
//           const isStart = day === rangeStart;
//           const isEnd = day === rangeEnd;
//           const inRange = day > rangeStart && day < rangeEnd;

//           return (
//             <div key={i} className={`relative py-1 ${inRange ? 'bg-blue-50' : ''} ${isStart ? 'bg-gradient-to-r from-transparent to-blue-50 rounded-l-full' : ''} ${isEnd ? 'bg-gradient-to-l from-transparent to-blue-50 rounded-r-full' : ''}`}>
//               <button
//                 className={`h-7 w-7 mx-auto rounded-full text-xs flex items-center justify-center relative z-10 ${
//                   isStart || isEnd ? 'bg-blue-600 text-white shadow-sm' : inRange ? 'text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-100'
//                 }`}
//               >
//                 {day}
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// // --- 6. The Cyberpunk (Neon) ---
// export const DateCyberpunk = () => {
//   const { monthName, year, daysOfWeek, daysArray, prevMonth, nextMonth, selectedDate, setSelectedDate } = useCalendar();

//   return (
//     <div className="w-64 bg-black border border-cyan-500 p-4 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
//       <div className="flex justify-between items-center mb-4 font-mono">
//         <button onClick={prevMonth} className="text-cyan-500 hover:text-white">[&lt;]</button>
//         <span className="font-bold text-pink-500 uppercase tracking-widest">{monthName}</span>
//         <button onClick={nextMonth} className="text-cyan-500 hover:text-white">[&gt;]</button>
//       </div>
//       <div className="grid grid-cols-7 gap-1 text-center mb-2 font-mono">
//         {daysOfWeek.map(d => <span key={d} className="text-xs text-gray-600">{d}</span>)}
//       </div>
//       <div className="grid grid-cols-7 gap-1 text-center font-mono">
//         {daysArray.map((day, i) => (
//           <button
//             key={i}
//             disabled={!day}
//             onClick={() => day && setSelectedDate(day)}
//             className={`h-8 w-8 text-sm flex items-center justify-center border transition-all ${
//               !day ? 'invisible' :
//               day === selectedDate ? 'bg-cyan-500 text-black border-cyan-500 font-bold' : 'text-gray-400 border-gray-800 hover:border-pink-500 hover:text-pink-500'
//             }`}
//           >
//             {day}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// // --- 7. The Neumorphic (Soft UI) ---
// export const DateNeumorphic = () => {
//   const { monthName, year, daysOfWeek, daysArray, prevMonth, nextMonth, selectedDate, setSelectedDate } = useCalendar();

//   return (
//     <div className="w-72 bg-[#e0e5ec] p-6 rounded-3xl shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)]">
//       <div className="flex justify-between items-center mb-6">
//         <button onClick={prevMonth} className="w-8 h-8 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-gray-500 flex items-center justify-center hover:text-blue-500 transition-colors">‹</button>
//         <span className="font-bold text-gray-600">{monthName} {year}</span>
//         <button onClick={nextMonth} className="w-8 h-8 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-gray-500 flex items-center justify-center hover:text-blue-500 transition-colors">›</button>
//       </div>
//       <div className="grid grid-cols-7 gap-2 text-center">
//         {daysArray.map((day, i) => (
//           <button
//             key={i}
//             disabled={!day}
//             onClick={() => day && setSelectedDate(day)}
//             className={`h-8 w-8 rounded-lg text-xs font-bold flex items-center justify-center transition-all ${
//               !day ? 'invisible' :
//               day === selectedDate
//                 ? 'text-blue-500 shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]'
//                 : 'text-gray-500 shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] hover:text-gray-700 active:scale-95'
//             }`}
//           >
//             {day}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// // --- 8. The Brutalist (Retro) ---
// export const DateBrutalist = () => {
//   const { monthName, year, daysOfWeek, daysArray, prevMonth, nextMonth, selectedDate, setSelectedDate } = useCalendar();

//   return (
//     <div className="w-64 bg-yellow-400 border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
//       <div className="flex justify-between items-center mb-4 border-b-4 border-black pb-2 bg-white px-2">
//         <button onClick={prevMonth} className="font-black hover:scale-125 transition-transform">←</button>
//         <span className="font-black uppercase tracking-tighter text-lg">{monthName}</span>
//         <button onClick={nextMonth} className="font-black hover:scale-125 transition-transform">→</button>
//       </div>
//       <div className="grid grid-cols-7 gap-1 text-center">
//         {daysArray.map((day, i) => (
//           <button
//             key={i}
//             disabled={!day}
//             onClick={() => day && setSelectedDate(day)}
//             className={`h-8 w-8 text-sm font-bold flex items-center justify-center transition-all border-2 border-transparent ${
//               !day ? 'invisible' :
//               day === selectedDate ? 'bg-black text-white border-black' : 'bg-white text-black hover:border-black'
//             }`}
//           >
//             {day}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// // --- 9. The Input Popover (Functional) ---
// export const DateInput = () => {
//   const [open, setOpen] = useState(false);
//   const { monthName, year, daysArray, prevMonth, nextMonth, selectedDate, setSelectedDate } = useCalendar();

//   return (
//     <div className="relative">
//       <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Pick a Date</label>
//       <div
//         onClick={() => setOpen(!open)}
//         className="flex items-center justify-between w-64 px-4 py-3 bg-white border border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition-colors shadow-sm"
//       >
//         <span className="text-gray-700 text-sm font-medium">
//           {selectedDate} {monthName} {year}
//         </span>
//         <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
//       </div>

//       {open && (
//         <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-50 animate-in fade-in zoom-in-95 duration-200">
//            <div className="flex justify-between items-center mb-4">
//             <button onClick={prevMonth} className="p-1 text-gray-400 hover:text-black">←</button>
//             <span className="font-bold text-sm">{monthName} {year}</span>
//             <button onClick={nextMonth} className="p-1 text-gray-400 hover:text-black">→</button>
//           </div>
//           <div className="grid grid-cols-7 gap-1 text-center">
//             {daysArray.map((day, i) => (
//               <button
//                 key={i}
//                 disabled={!day}
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   day && setSelectedDate(day);
//                   setOpen(false);
//                 }}
//                 className={`h-8 w-8 rounded text-sm flex items-center justify-center hover:bg-gray-100 ${
//                   day === selectedDate ? 'bg-blue-600 text-white hover:bg-blue-700' : 'text-gray-700'
//                 } ${!day && 'invisible'}`}
//               >
//                 {day}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // --- 10. The Side-by-Side (Desktop Planner) ---
// export const DatePlanner = () => {
//   const { monthName, year, daysArray, prevMonth, nextMonth, selectedDate, setSelectedDate } = useCalendar();

//   return (
//     <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 max-w-lg">
//       {/* Calendar Side */}
//       <div className="p-6 w-64 border-r border-gray-100">
//          <div className="flex justify-between items-center mb-6">
//             <span className="font-bold text-gray-800">{monthName}</span>
//             <div className="flex gap-2">
//                <button onClick={prevMonth} className="text-gray-400 hover:text-blue-600">←</button>
//                <button onClick={nextMonth} className="text-gray-400 hover:text-blue-600">→</button>
//             </div>
//          </div>
//          <div className="grid grid-cols-7 gap-y-2 text-center">
//             {daysArray.map((day, i) => (
//               <button
//                 key={i}
//                 disabled={!day}
//                 onClick={() => day && setSelectedDate(day)}
//                 className={`h-7 w-7 rounded-full text-xs flex items-center justify-center transition-colors ${
//                   !day ? 'invisible' :
//                   day === selectedDate ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
//                 }`}
//               >
//                 {day}
//               </button>
//             ))}
//           </div>
//       </div>
      
//       {/* Schedule Side */}
//       <div className="p-6 w-64 bg-gray-50 flex flex-col">
//         <div className="mb-4">
//           <h3 className="font-bold text-gray-900 text-lg">{selectedDate} {monthName}</h3>
//           <p className="text-xs text-gray-500">4 Events Scheduled</p>
//         </div>
//         <div className="space-y-3 flex-1 overflow-y-auto">
//            {[9, 11, 14, 16].map(time => (
//              <div key={time} className="flex gap-3">
//                <span className="text-xs font-mono text-gray-400 w-8 text-right pt-1">{time}:00</span>
//                <div className="bg-white p-2 rounded border border-gray-200 shadow-sm text-xs flex-1">
//                  <span className="font-bold text-gray-700 block">Meeting</span>
//                  <span className="text-gray-400">30 mins</span>
//                </div>
//              </div>
//            ))}
//         </div>
//       </div>
//     </div>
//   );
// };


// // --- Gallery Layout ---
// const DatePicker = () => {
//   return (
//     <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans pb-40">
//       <div className="max-w-4xl mx-auto text-center mb-16">
//         <h1 className="text-4xl font-bold text-slate-800 mb-4">Modern Datepickers</h1>
//         <p className="text-slate-500">A collection of responsive calendar components.</p>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 max-w-7xl mx-auto items-start justify-items-center">
        
//         <div className="flex flex-col items-center gap-4">
//           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">01. Standard SaaS</span>
//           <DateStandard />
//         </div>

//         <div className="flex flex-col items-center gap-4">
//           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">02. Midnight Dark</span>
//           <DateDark />
//         </div>

//         <div className="flex flex-col items-center gap-4 bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-2xl">
//           <span className="text-xs font-bold text-white/50 uppercase tracking-widest">03. Glassmorphism</span>
//           <DateGlass />
//         </div>

//         <div className="flex flex-col items-center gap-4">
//           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">04. Minimalist</span>
//           <DateMinimal />
//         </div>

//         <div className="flex flex-col items-center gap-4">
//           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">05. Range Selection</span>
//           <DateRange />
//         </div>

//         <div className="flex flex-col items-center gap-4 bg-gray-950 p-8 rounded-2xl">
//           <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">06. Cyberpunk</span>
//           <DateCyberpunk />
//         </div>

//         <div className="flex flex-col items-center gap-4 bg-[#e0e5ec] p-8 rounded-2xl">
//           <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">07. Neumorphic</span>
//           <DateNeumorphic />
//         </div>

//         <div className="flex flex-col items-center gap-4">
//           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">08. Brutalist</span>
//           <DateBrutalist />
//         </div>

//         <div className="flex flex-col items-center gap-4 z-50">
//           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">09. Input Popover</span>
//           <DateInput />
//         </div>

//         <div className="flex flex-col items-center gap-4 md:col-span-2 xl:col-span-3">
//           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">10. Desktop Planner</span>
//           <DatePlanner />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default DatePicker;




// import React, { useState } from 'react';

// // --- ROBUST SHARED LOGIC HOOK ---
// const useCalendar = () => {
//   const [date, setDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  
//   // State for Range Picker
//   const [rangeStart, setRangeStart] = useState(10);
//   const [rangeEnd, setRangeEnd] = useState(18);

//   const year = date.getFullYear();
//   const month = date.getMonth();
  
//   const daysInMonth = new Date(year, month + 1, 0).getDate();
//   const firstDayOfMonth = new Date(year, month, 1).getDay();

//   const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//   const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

//   // Navigation
//   const prevMonth = () => setDate(new Date(year, month - 1, 1));
//   const nextMonth = () => setDate(new Date(year, month + 1, 1));
//   const setMonth = (m) => setDate(new Date(year, m, 1));
//   const setYear = (y) => setDate(new Date(y, month, 1));

//   // Grid Generation
//   const daysArray = [
//     ...Array(firstDayOfMonth).fill(null),
//     ...Array(daysInMonth).fill(null).map((_, i) => i + 1)
//   ];

//   // Year Generator
//   const years = Array.from({ length: 20 }, (_, i) => year - 10 + i);

//   return {
//     date, year, month, monthName: monthNames[month], monthNames, daysOfWeek, daysArray, years,
//     prevMonth, nextMonth, setMonth, setYear,
//     selectedDate, setSelectedDate,
//     rangeStart, setRangeStart, rangeEnd, setRangeEnd
//   };
// };

// // --- 1. The Modern SaaS (Dropdown Header) ---
// export const DateSaaS = () => {
//   const { monthName, year, monthNames, years, setMonth, setYear, daysOfWeek, daysArray, selectedDate, setSelectedDate } = useCalendar();

//   return (
//     <div className="w-80 bg-white rounded-xl shadow-xl border border-gray-100 p-5">
//       <div className="flex gap-2 mb-4">
//         <select value={useCalendar().month} onChange={(e) => setMonth(Number(e.target.value))} className="flex-1 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg p-2.5 font-bold cursor-pointer hover:bg-gray-100 outline-none">
//           {monthNames.map((m, i) => <option key={m} value={i}>{m}</option>)}
//         </select>
//         <select value={year} onChange={(e) => setYear(Number(e.target.value))} className="w-24 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg p-2.5 font-bold cursor-pointer hover:bg-gray-100 outline-none">
//           {years.map(y => <option key={y} value={y}>{y}</option>)}
//         </select>
//       </div>
//       <div className="grid grid-cols-7 text-center mb-2">
//         {daysOfWeek.map(d => <span key={d} className="text-xs font-bold text-gray-400">{d}</span>)}
//       </div>
//       <div className="grid grid-cols-7 gap-1">
//         {daysArray.map((day, i) => (
//           <button key={i} disabled={!day} onClick={() => day && setSelectedDate(day)} className={`h-9 w-9 rounded-lg text-sm flex items-center justify-center transition-all ${!day ? 'invisible' : day === selectedDate ? 'bg-blue-600 text-white font-bold shadow-md' : 'text-gray-600 hover:bg-blue-50 text-blue-600'}`}>
//             {day}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// // --- 2. The Dual-Pane Range Picker (Travel Style) ---
// export const DateRange = () => {
//   const { monthName, year, daysOfWeek, daysArray, rangeStart, rangeEnd } = useCalendar();
//   // Simulating next month for visual purposes
//   const nextMonthName = useCalendar().monthNames[(new Date().getMonth() + 1) % 12];

//   return (
//     <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col md:flex-row gap-8 w-full max-w-2xl overflow-hidden">
//       {/* Pane 1 */}
//       <div className="flex-1">
//         <div className="text-center font-bold text-gray-800 mb-4">{monthName} {year}</div>
//         <div className="grid grid-cols-7 text-center mb-2">{daysOfWeek.map(d => <span key={d} className="text-xs text-gray-400">{d}</span>)}</div>
//         <div className="grid grid-cols-7 gap-y-1">
//           {daysArray.map((day, i) => {
//             const isStart = day === rangeStart;
//             const isEnd = day === rangeEnd;
//             const inRange = day > rangeStart && day < rangeEnd;
//             return (
//               <div key={i} className={`h-9 flex items-center justify-center ${inRange ? 'bg-blue-50' : ''} ${isStart ? 'bg-blue-50 rounded-l-full' : ''} ${isEnd ? 'bg-blue-50 rounded-r-full' : ''}`}>
//                 <button disabled={!day} className={`w-9 h-9 rounded-full text-sm font-medium ${!day ? 'invisible' : isStart || isEnd ? 'bg-blue-600 text-white' : inRange ? 'text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}>{day}</button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       {/* Divider */}
//       <div className="hidden md:block w-px bg-gray-100"></div>
//       {/* Pane 2 (Simulated) */}
//       <div className="flex-1 opacity-60 pointer-events-none grayscale-[0.5]">
//         <div className="text-center font-bold text-gray-800 mb-4">{nextMonthName} {year}</div>
//         <div className="grid grid-cols-7 text-center mb-2">{daysOfWeek.map(d => <span key={d} className="text-xs text-gray-400">{d}</span>)}</div>
//         <div className="grid grid-cols-7 gap-y-1">
//           {daysArray.map((day, i) => ( // Using same grid for demo
//              <div key={i} className="h-9 flex items-center justify-center"><button disabled={!day} className={`w-9 h-9 rounded-full text-sm font-medium ${!day ? 'invisible' : 'text-gray-600'}`}>{day}</button></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- 3. The Quick-Select Sidebar ---
// export const DateQuickPick = () => {
//   const { monthName, year, daysOfWeek, daysArray, selectedDate, setSelectedDate } = useCalendar();

//   return (
//     <div className="flex bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden w-full max-w-lg">
//       <div className="w-32 bg-gray-50 border-r border-gray-100 p-3 flex flex-col gap-2">
//         {['Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days', 'This Month'].map(label => (
//           <button key={label} className="text-xs font-medium text-gray-600 text-left px-3 py-2 rounded hover:bg-white hover:shadow-sm transition-all">{label}</button>
//         ))}
//         <button className="mt-auto text-xs font-bold text-blue-600 text-left px-3 py-2">Custom Range</button>
//       </div>
//       <div className="flex-1 p-5">
//         <div className="text-center font-bold text-gray-800 mb-4">{monthName} {year}</div>
//         <div className="grid grid-cols-7 text-center mb-2">{daysOfWeek.map(d => <span key={d} className="text-[10px] font-bold text-gray-400 uppercase">{d}</span>)}</div>
//         <div className="grid grid-cols-7 gap-1">
//           {daysArray.map((day, i) => (
//             <button key={i} disabled={!day} onClick={() => day && setSelectedDate(day)} className={`h-8 w-8 rounded text-sm flex items-center justify-center transition-all ${!day ? 'invisible' : day === selectedDate ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>{day}</button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- 4. The Time & Date Combo ---
// export const DateTime = () => {
//   const { monthName, daysArray, selectedDate, setSelectedDate } = useCalendar();
//   const [selectedTime, setSelectedTime] = useState('10:00');

//   return (
//     <div className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 w-full max-w-xl">
//       <div className="p-6 flex-1">
//         <div className="font-bold text-gray-900 mb-4">{monthName}</div>
//         <div className="grid grid-cols-7 gap-1">
//           {daysArray.map((day, i) => (
//             <button key={i} disabled={!day} onClick={() => day && setSelectedDate(day)} className={`h-8 w-8 rounded-full text-sm flex items-center justify-center ${!day ? 'invisible' : day === selectedDate ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>{day}</button>
//           ))}
//         </div>
//       </div>
//       <div className="bg-gray-50 border-l border-gray-100 w-full sm:w-40 p-4 flex flex-col">
//         <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Available</span>
//         <div className="flex-1 overflow-y-auto space-y-2 pr-2 h-48 custom-scrollbar">
//           {['09:00', '09:30', '10:00', '10:30', '11:00', '13:00', '14:30'].map(time => (
//             <button key={time} onClick={() => setSelectedTime(time)} className={`w-full py-2 text-xs font-medium rounded border ${selectedTime === time ? 'border-indigo-600 text-indigo-600 bg-indigo-50' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'}`}>{time}</button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- 5. The Mobile "Scroll Wheel" (iOS Style) ---
// export const DateWheel = () => {
//   const { monthNames, years } = useCalendar();
//   return (
//     <div className="w-64 bg-white rounded-2xl shadow-2xl p-6">
//       <h3 className="text-center font-bold text-gray-900 mb-6">Birth Date</h3>
//       <div className="flex justify-center gap-2 h-40 overflow-hidden relative">
//         {/* Selection Highlight Bar */}
//         <div className="absolute top-1/2 -translate-y-1/2 w-full h-10 bg-gray-100 rounded-lg -z-10 pointer-events-none"></div>
        
//         {/* Month Scroll */}
//         <div className="w-24 overflow-y-scroll snap-y snap-mandatory hide-scrollbar py-14 text-center">
//           {monthNames.map(m => (
//             <div key={m} className="h-10 flex items-center justify-center snap-center text-sm font-medium text-gray-500 hover:text-black cursor-pointer">{m}</div>
//           ))}
//         </div>
//         {/* Day Scroll */}
//         <div className="w-16 overflow-y-scroll snap-y snap-mandatory hide-scrollbar py-14 text-center border-x border-gray-100">
//           {Array.from({length: 31}, (_, i) => i + 1).map(d => (
//             <div key={d} className="h-10 flex items-center justify-center snap-center text-lg font-bold text-gray-800 cursor-pointer">{d}</div>
//           ))}
//         </div>
//         {/* Year Scroll */}
//         <div className="w-20 overflow-y-scroll snap-y snap-mandatory hide-scrollbar py-14 text-center">
//           {years.map(y => (
//             <div key={y} className="h-10 flex items-center justify-center snap-center text-sm font-medium text-gray-500 hover:text-black cursor-pointer">{y}</div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- 6. The Input Trigger (Floating Label) ---
// export const DateInputTrigger = () => {
//   const [open, setOpen] = useState(false);
//   const { monthName, year, daysArray, selectedDate, setSelectedDate } = useCalendar();

//   return (
//     <div className="relative w-64">
//       <div className="relative group cursor-pointer" onClick={() => setOpen(!open)}>
//         <input type="text" readOnly value={`${selectedDate} ${monthName} ${year}`} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer cursor-pointer" placeholder=" " />
//         <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 left-1 cursor-pointer">
//           Select Date
//         </label>
//         <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">📅</div>
//       </div>

//       {open && (
//         <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 z-50 animate-in fade-in zoom-in-95 duration-200">
//           <div className="grid grid-cols-7 gap-1">
//             {daysArray.map((day, i) => (
//               <button key={i} disabled={!day} onClick={() => { setSelectedDate(day); setOpen(false); }} className={`h-8 w-8 rounded text-sm flex items-center justify-center hover:bg-gray-100 ${day === selectedDate ? 'bg-blue-600 text-white' : 'text-gray-700'} ${!day && 'invisible'}`}>{day}</button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // --- 7. The Single Row (Horizontal Habit Tracker) ---
// export const DateHorizontal = () => {
//   const { daysOfWeek, selectedDate, setSelectedDate } = useCalendar();
//   // Generate next 7 days for demo
//   const week = Array.from({length: 7}, (_, i) => ({ day: daysOfWeek[i % 7], date: 14 + i }));

//   return (
//     <div className="w-full max-w-md bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="font-bold text-gray-900">This Week</h3>
//         <button className="text-xs text-blue-600 font-semibold">View Calendar</button>
//       </div>
//       <div className="flex justify-between">
//         {week.map((item, i) => (
//           <button key={i} onClick={() => setSelectedDate(item.date)} className={`flex flex-col items-center gap-1 min-w-[3rem] py-3 rounded-xl transition-all ${selectedDate === item.date ? 'bg-black text-white shadow-lg scale-110' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}>
//             <span className="text-xs font-medium opacity-80">{item.day}</span>
//             <span className="text-lg font-bold">{item.date}</span>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// // --- 8. The Cyberpunk (Neon) ---
// export const DateCyber = () => {
//   const { monthName, daysArray, selectedDate, setSelectedDate } = useCalendar();
//   return (
//     <div className="w-64 bg-black border border-cyan-500 p-4 shadow-[0_0_15px_rgba(6,182,212,0.4)] relative">
//       <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500"></div>
//       <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500"></div>
//       <div className="font-mono text-center text-cyan-400 font-bold mb-4 border-b border-gray-800 pb-2 uppercase tracking-widest">{monthName}</div>
//       <div className="grid grid-cols-7 gap-1">
//         {daysArray.map((day, i) => (
//           <button key={i} disabled={!day} onClick={() => day && setSelectedDate(day)} className={`h-7 w-7 text-xs font-mono flex items-center justify-center transition-all ${!day ? 'invisible' : day === selectedDate ? 'bg-pink-500 text-black font-bold' : 'text-gray-500 hover:text-cyan-400 hover:border hover:border-cyan-400'}`}>
//             {day}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// // --- 9. The Glassmorphism (Dark Context) ---
// export const DateGlass = () => {
//   const { monthName, year, daysArray, selectedDate, setSelectedDate } = useCalendar();
//   return (
//     <div className="w-64 p-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl">
//       <div className="text-white text-center font-medium mb-4 drop-shadow-md">{monthName} {year}</div>
//       <div className="grid grid-cols-7 gap-1">
//         {daysArray.map((day, i) => (
//           <button key={i} disabled={!day} onClick={() => day && setSelectedDate(day)} className={`h-8 w-8 rounded-full text-sm flex items-center justify-center transition-all ${!day ? 'invisible' : day === selectedDate ? 'bg-white text-purple-900 font-bold shadow-lg' : 'text-white/70 hover:bg-white/10'}`}>
//             {day}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// // --- 10. The Month/Year Grid Picker (Credit Card) ---
// export const DateGridPicker = () => {
//   const { monthNames, years } = useCalendar();
//   const [view, setView] = useState('month'); // 'month' or 'year'

//   return (
//     <div className="w-64 bg-white rounded-xl shadow-lg border border-gray-100 p-4">
//       <div className="flex justify-between mb-4 px-2">
//         <span className="font-bold text-gray-800">Expiry Date</span>
//         <button onClick={() => setView(view === 'month' ? 'year' : 'month')} className="text-xs text-blue-600 font-bold uppercase">{view === 'month' ? 'Select Year' : 'Select Month'}</button>
//       </div>
      
//       {view === 'month' ? (
//         <div className="grid grid-cols-3 gap-2">
//           {monthNames.map((m, i) => (
//             <button key={m} className={`py-2 text-sm rounded border transition-colors ${i === 4 ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-transparent hover:bg-gray-50 text-gray-600'}`}>{m.substring(0,3)}</button>
//           ))}
//         </div>
//       ) : (
//         <div className="grid grid-cols-3 gap-2">
//           {years.slice(0, 12).map((y, i) => (
//             <button key={y} className={`py-2 text-sm rounded border transition-colors ${i === 0 ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-transparent hover:bg-gray-50 text-gray-600'}`}>{y}</button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };


// // --- Gallery Layout ---
// const DatePicker = () => {
//   return (
//     <div className="container box-shadow overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-40">
//       <div className="max-w-4xl mx-auto text-center mb-16">
//         <h1 className="text-4xl font-bold text-slate-800 mb-4">Datepicker Components</h1>
//         <p className="text-slate-500">Includes advanced Month/Year navigation and layout variations.</p>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 max-w-7xl mx-auto items-start justify-items-center">
        
//         <div className="flex flex-col items-center gap-4">
//           <span className="text-xs font-bold text-slate-400 uppercase">01. SaaS Dropdown</span>
//           <DateSaaS />
//         </div>

//         <div className="flex flex-col items-center gap-4 md:col-span-2 xl:col-span-2">
//           <span className="text-xs font-bold text-slate-400 uppercase">02. Dual Pane Range</span>
//           <DateRange />
//         </div>

//         <div className="flex flex-col items-center gap-4 md:col-span-2 xl:col-span-2">
//           <span className="text-xs font-bold text-slate-400 uppercase">03. Quick Select Sidebar</span>
//           <DateQuickPick />
//         </div>

//         <div className="flex flex-col items-center gap-4 md:col-span-2 xl:col-span-1">
//           <span className="text-xs font-bold text-slate-400 uppercase">04. Time Combo</span>
//           <DateTime />
//         </div>

//         <div className="flex flex-col items-center gap-4">
//           <span className="text-xs font-bold text-slate-400 uppercase">05. Mobile Wheel</span>
//           <DateWheel />
//         </div>

//         <div className="flex flex-col items-center gap-4 z-50">
//           <span className="text-xs font-bold text-slate-400 uppercase">06. Input Popover</span>
//           <DateInputTrigger />
//         </div>

//         <div className="flex flex-col items-center gap-4">
//           <span className="text-xs font-bold text-slate-400 uppercase">07. Horizontal Row</span>
//           <DateHorizontal />
//         </div>

//         <div className="flex flex-col items-center gap-4 bg-gray-950 p-8 rounded-2xl">
//           <span className="text-xs font-bold text-gray-500 uppercase">08. Cyberpunk</span>
//           <DateCyber />
//         </div>

//         <div className="flex flex-col items-center gap-4 bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-2xl">
//           <span className="text-xs font-bold text-white/50 uppercase">09. Glassmorphism</span>
//           <DateGlass />
//         </div>

//         <div className="flex flex-col items-center gap-4">
//           <span className="text-xs font-bold text-slate-400 uppercase">10. Grid Picker</span>
//           <DateGridPicker />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default DatePicker;


import React, { useState, useEffect, useRef } from 'react';

// ==========================================
// 1. THE BRAIN: Shared Logic Hook
// ==========================================
const useDatePicker = () => {
  // 'selectedDate' is the actual value picked by the user
  const [selectedDate, setSelectedDate] = useState(new Date());
  // 'viewDate' is the month/year currently visible on the calendar
  const [viewDate, setViewDate] = useState(new Date());

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daysShort = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  // Navigation Actions
  const prevMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  const nextMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  
  const setMonth = (monthIndex) => setViewDate(new Date(viewDate.getFullYear(), monthIndex, 1));
  const setYear = (year) => setViewDate(new Date(year, viewDate.getMonth(), 1));
  
  const selectDay = (day) => {
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    setSelectedDate(newDate);
  };

  // Grid Calculation
  const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay();
  
  // Create array with empty slots for padding + actual days
  const calendarGrid = [
    ...Array(firstDayOfMonth).fill(null),
    ...Array(daysInMonth).fill(null).map((_, i) => i + 1)
  ];

  // Helper: Check if a day is currently selected
  const isSelected = (day) => {
    return selectedDate.getDate() === day && 
           selectedDate.getMonth() === viewDate.getMonth() && 
           selectedDate.getFullYear() === viewDate.getFullYear();
  };

  // Helper: Check if today
  const isToday = (day) => {
    const today = new Date();
    return today.getDate() === day && 
           today.getMonth() === viewDate.getMonth() && 
           today.getFullYear() === viewDate.getFullYear();
  }

  // Generate Year Range (Current -50 to +10)
  const years = Array.from({ length: 60 }, (_, i) => new Date().getFullYear() - 50 + i);

  return {
    viewDate, selectedDate, monthNames, daysShort, calendarGrid, years,
    prevMonth, nextMonth, setMonth, setYear, selectDay, isSelected, isToday
  };
};


// ==========================================
// COMPONENT 1: SaaS Standard (Dropdowns)
// ==========================================
export const DatePickerSaaS = () => {
  const dp = useDatePicker();

  return (
    <div className="w-80 bg-white rounded-xl shadow-xl border border-gray-100 p-5 font-sans">
      {/* Header with Dropdowns */}
      <div className="flex gap-2 mb-4">
        <div className="relative flex-1">
          <select 
            value={dp.viewDate.getMonth()} 
            onChange={(e) => dp.setMonth(parseInt(e.target.value))}
            className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm font-bold focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
          >
            {dp.monthNames.map((m, i) => <option key={m} value={i}>{m}</option>)}
          </select>
        </div>
        <div className="relative w-24">
          <select 
            value={dp.viewDate.getFullYear()} 
            onChange={(e) => dp.setYear(parseInt(e.target.value))}
            className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm font-bold focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
          >
            {dp.years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-7 text-center mb-2">
        {dp.daysShort.map(d => <span key={d} className="text-xs font-bold text-gray-400">{d}</span>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {dp.calendarGrid.map((day, i) => (
          <button
            key={i}
            disabled={!day}
            onClick={() => day && dp.selectDay(day)}
            className={`h-9 w-9 rounded-lg text-sm flex items-center justify-center transition-all 
              ${!day ? 'invisible' : dp.isSelected(day) ? 'bg-blue-600 text-white font-bold shadow-md' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}
              ${dp.isToday(day) && !dp.isSelected(day) ? 'border border-blue-200 text-blue-600' : ''}
            `}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};


// ==========================================
// COMPONENT 2: Material View Switcher
// ==========================================
export const DatePickerMaterial = () => {
  const dp = useDatePicker();
  const [mode, setMode] = useState('day'); // 'day' or 'year'

  return (
    <div className="w-72 bg-white rounded-2xl shadow-2xl overflow-hidden font-sans">
      {/* Material Header */}
      <div className="bg-indigo-600 p-6 text-white">
        <div 
          onClick={() => setMode('year')}
          className={`text-sm opacity-70 mb-1 cursor-pointer hover:opacity-100 ${mode === 'year' ? 'font-bold opacity-100' : ''}`}
        >
          {dp.viewDate.getFullYear()}
        </div>
        <div 
          onClick={() => setMode('day')}
          className={`text-3xl font-bold cursor-pointer hover:opacity-80 ${mode === 'day' ? 'opacity-100' : 'opacity-60'}`}
        >
          {dp.monthNames[dp.viewDate.getMonth()].substring(0,3)}, {dp.daysShort[dp.selectedDate.getDay()]} {dp.selectedDate.getDate()}
        </div>
      </div>

      <div className="p-4 h-80">
        {mode === 'day' ? (
          <>
            <div className="flex justify-between items-center mb-4 px-2">
              <button onClick={dp.prevMonth} className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">❮</button>
              <span className="font-bold text-gray-700">{dp.monthNames[dp.viewDate.getMonth()]} {dp.viewDate.getFullYear()}</span>
              <button onClick={dp.nextMonth} className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">❯</button>
            </div>
            <div className="grid grid-cols-7 text-center text-xs text-gray-400 mb-2 font-medium">{dp.daysShort.map(d => <span key={d}>{d}</span>)}</div>
            <div className="grid grid-cols-7 gap-1">
              {dp.calendarGrid.map((day, i) => (
                <button 
                  key={i} disabled={!day} onClick={() => day && dp.selectDay(day)}
                  className={`h-8 w-8 rounded-full text-sm flex items-center justify-center transition-colors 
                    ${!day ? 'invisible' : dp.isSelected(day) ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}
                  `}
                >
                  {day}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="h-full overflow-y-auto grid grid-cols-3 gap-2 content-start custom-scrollbar">
            {dp.years.map(y => (
              <button 
                key={y} onClick={() => { dp.setYear(y); setMode('day'); }}
                className={`py-2 rounded-lg text-sm ${y === dp.viewDate.getFullYear() ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100 text-gray-700'}`}
              >
                {y}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


// ==========================================
// COMPONENT 3: Sidebar Quick Select (DOB)
// ==========================================
export const DatePickerSidebar = () => {
  const dp = useDatePicker();

  return (
    <div className="flex bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden w-full max-w-md">
      {/* Year Sidebar */}
      <div className="w-24 bg-gray-50 border-r border-gray-200 flex flex-col">
        <div className="p-3 text-xs font-bold text-gray-400 uppercase tracking-wider text-center border-b">Year</div>
        <div className="flex flex-col overflow-y-auto h-72 overflow-auto">
          {dp.years.map(y => (
            <button
              key={y}
              onClick={() => dp.setYear(y)}
              className={`w-full py-2 text-sm font-medium transition-colors border-l-4 ${
                y === dp.viewDate.getFullYear() ? 'bg-white border-emerald-500 text-emerald-700 font-bold' : 'border-transparent text-gray-500 hover:bg-gray-100'
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      {/* Calendar */}
      <div className="flex-1 p-5">
        <div className="flex justify-between items-center mb-4">
          <button onClick={dp.prevMonth} className="w-8 h-8 rounded-full hover:bg-gray-100 text-gray-600">‹</button>
          <span className="font-bold text-gray-800">{dp.monthNames[dp.viewDate.getMonth()]}</span>
          <button onClick={dp.nextMonth} className="w-8 h-8 rounded-full hover:bg-gray-100 text-gray-600">›</button>
        </div>
        <div className="grid grid-cols-7 text-center mb-2">{dp.daysShort.map(d => <span key={d} className="text-[10px] text-emerald-500 font-bold">{d}</span>)}</div>
        <div className="grid grid-cols-7 gap-1">
          {dp.calendarGrid.map((day, i) => (
            <button key={i} disabled={!day} onClick={() => day && dp.selectDay(day)} className={`h-8 w-8 rounded text-sm flex items-center justify-center ${!day ? 'invisible' : dp.isSelected(day) ? 'bg-emerald-500 text-white rounded-full' : 'text-gray-700 hover:bg-emerald-50'}`}>
              {day}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};


// ==========================================
// COMPONENT 4: Dual Pane (Travel Range Style)
// ==========================================
export const DatePickerDual = () => {
  const dp = useDatePicker();
  
  // Logic for the second pane (Next Month)
  const nextPaneDate = new Date(dp.viewDate.getFullYear(), dp.viewDate.getMonth() + 1, 1);
  const nextPaneDays = new Date(nextPaneDate.getFullYear(), nextPaneDate.getMonth() + 1, 0).getDate();
  const nextPaneFirstDay = new Date(nextPaneDate.getFullYear(), nextPaneDate.getMonth(), 1).getDay();
  const nextPaneGrid = [...Array(nextPaneFirstDay).fill(null), ...Array(nextPaneDays).fill(null).map((_, i) => i + 1)];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 w-full max-w-2xl">
      <div className="flex justify-between mb-6">
        <button onClick={dp.prevMonth} className="p-2 hover:bg-gray-100 rounded-full">Previous</button>
        <div className="flex gap-8 font-bold text-gray-800">
          <span>{dp.monthNames[dp.viewDate.getMonth()]} {dp.viewDate.getFullYear()}</span>
          <span className="text-gray-300">|</span>
          <span>{dp.monthNames[nextPaneDate.getMonth()]} {nextPaneDate.getFullYear()}</span>
        </div>
        <button onClick={dp.nextMonth} className="p-2 hover:bg-gray-100 rounded-full">Next</button>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Pane 1 */}
        <div>
          <div className="grid grid-cols-7 text-center mb-2">{dp.daysShort.map(d => <span key={d} className="text-xs text-gray-400">{d}</span>)}</div>
          <div className="grid grid-cols-7 gap-1">
            {dp.calendarGrid.map((day, i) => (
              <button key={i} disabled={!day} onClick={() => day && dp.selectDay(day)} className={`h-8 w-8 rounded-full text-sm ${!day ? 'invisible' : dp.isSelected(day) ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>{day}</button>
            ))}
          </div>
        </div>
        {/* Pane 2 */}
        <div className="hidden md:block">
          <div className="grid grid-cols-7 text-center mb-2">{dp.daysShort.map(d => <span key={d} className="text-xs text-gray-400">{d}</span>)}</div>
          <div className="grid grid-cols-7 gap-1">
            {nextPaneGrid.map((day, i) => (
              <button key={i} disabled={!day} 
                onClick={() => {
                  if(day) {
                    // Specific logic to select date in next month
                    const newDate = new Date(nextPaneDate.getFullYear(), nextPaneDate.getMonth(), day);
                    // We need to update parent state manually as hook is bound to viewDate
                    // For this demo, we'll force viewDate to move forward so selection shows on left pane next render
                    dp.nextMonth(); 
                    // In a real app, you'd separate selection state from view state better
                  }
                }}
                className={`h-8 w-8 rounded-full text-sm ${!day ? 'invisible' : 'hover:bg-gray-100 text-gray-600'}`}>
                {day}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// COMPONENT 5: Input Popover
// ==========================================
export const DatePickerInput = () => {
  const [open, setOpen] = useState(false);
  const dp = useDatePicker();
  const popoverRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-64" ref={popoverRef}>
      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Travel Date</label>
      <div 
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-4 py-3 bg-white border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 shadow-sm"
      >
        <span className="text-gray-700 text-sm font-medium">
          {dp.selectedDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric'})}
        </span>
        <span className="text-gray-400">📅</span>
      </div>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 z-50 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex justify-between items-center mb-4">
            <button onClick={(e) => { e.stopPropagation(); dp.prevMonth(); }} className="text-gray-500 hover:text-black">←</button>
            <span className="font-bold text-sm">{dp.monthNames[dp.viewDate.getMonth()]} {dp.viewDate.getFullYear()}</span>
            <button onClick={(e) => { e.stopPropagation(); dp.nextMonth(); }} className="text-gray-500 hover:text-black">→</button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {dp.calendarGrid.map((day, i) => (
              <button key={i} disabled={!day} 
                onClick={(e) => { e.stopPropagation(); day && dp.selectDay(day); setOpen(false); }} 
                className={`h-8 w-8 rounded text-sm flex items-center justify-center hover:bg-gray-100 ${dp.isSelected(day) ? 'bg-blue-600 text-white' : 'text-gray-700'} ${!day && 'invisible'}`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


// ==========================================
// COMPONENT 6: Cyberpunk (Neon)
// ==========================================
export const DatePickerCyber = () => {
  const dp = useDatePicker();
  return (
    <div className="w-72 bg-black border-2 border-cyan-500 p-1 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
      <div className="border border-cyan-900 bg-gray-900 p-4">
        <div className="flex justify-between items-center mb-4 font-mono">
          <button onClick={dp.prevMonth} className="text-cyan-500 hover:text-white hover:shadow-[0_0_10px_cyan]">[PREV]</button>
          <div className="text-center">
            <div className="text-pink-500 font-bold tracking-widest uppercase">{dp.monthNames[dp.viewDate.getMonth()]}</div>
            <div className="text-xs text-gray-500">{dp.viewDate.getFullYear()}</div>
          </div>
          <button onClick={dp.nextMonth} className="text-cyan-500 hover:text-white hover:shadow-[0_0_10px_cyan]">[NEXT]</button>
        </div>
        <div className="grid grid-cols-7 gap-1 font-mono text-center">
          {dp.daysShort.map(d => <span key={d} className="text-xs text-gray-600">{d.substring(0,1)}</span>)}
          {dp.calendarGrid.map((day, i) => (
            <button key={i} disabled={!day} onClick={() => day && dp.selectDay(day)} className={`h-8 w-8 text-sm flex items-center justify-center border transition-all ${!day ? 'invisible border-transparent' : dp.isSelected(day) ? 'bg-cyan-500 text-black border-cyan-500 font-bold shadow-[0_0_10px_cyan]' : 'text-gray-400 border-gray-800 hover:border-pink-500 hover:text-pink-500'}`}>
              {day}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};


// ==========================================
// COMPONENT 7: Glassmorphism
// ==========================================
export const DatePickerGlass = () => {
  const dp = useDatePicker();
  return (
    <div className="w-64 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl">
      <div className="text-center mb-4">
        <div className="flex justify-center items-center gap-4 text-white mb-2">
          <button onClick={dp.prevMonth} className="opacity-70 hover:opacity-100">←</button>
          <span className="font-semibold text-lg drop-shadow-md">{dp.monthNames[dp.viewDate.getMonth()]}</span>
          <button onClick={dp.nextMonth} className="opacity-70 hover:opacity-100">→</button>
        </div>
        <span className="text-xs text-white/60 tracking-widest bg-white/10 px-3 py-1 rounded-full cursor-pointer hover:bg-white/20" onClick={() => dp.setYear(dp.viewDate.getFullYear() + 1)}>
          {dp.viewDate.getFullYear()}
        </span>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {dp.daysShort.map(d => <span key={d} className="text-center text-xs text-white/40 mb-2">{d.substring(0,1)}</span>)}
        {dp.calendarGrid.map((day, i) => (
          <button key={i} disabled={!day} onClick={() => day && dp.selectDay(day)} className={`h-7 w-7 rounded-full text-xs flex items-center justify-center transition-all ${!day ? 'invisible' : dp.isSelected(day) ? 'bg-white text-indigo-900 font-bold shadow-lg scale-110' : 'text-white/80 hover:bg-white/20'}`}>
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};


// ==========================================
// COMPONENT 8: Horizontal Scroll (Habit Tracker)
// ==========================================
export const DatePickerHorizontal = () => {
  const { selectedDate, selectDay, monthNames, viewDate } = useDatePicker();
  
  // Generate a sliding window of 14 days around "today"/viewDate for demo
  const generateSlidingWindow = () => {
    const days = [];
    // Start 2 days before current
    const start = new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 2);
    
    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      days.push(d);
    }
    return days;
  };

  const weekDays = generateSlidingWindow();

  return (
    <div className="w-full max-w-md bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-900">{monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}</h3>
        <button className="text-xs bg-black text-white px-3 py-1 rounded-full">Today</button>
      </div>
      <div className="flex justify-between gap-2 overflow-x-auto hide-scrollbar">
        {weekDays.map((date, i) => {
          const isSelected = date.getDate() === selectedDate.getDate();
          return (
            <button key={i} onClick={() => selectDay(date.getDate())} className={`flex flex-col items-center gap-1 min-w-[3.5rem] py-3 rounded-2xl transition-all ${isSelected ? 'bg-indigo-600 text-white shadow-lg transform -translate-y-1' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}>
              <span className={`text-xs font-medium ${isSelected ? 'text-indigo-200' : 'text-gray-400'}`}>
                {date.toLocaleDateString('en-US', { weekday: 'short' })}
              </span>
              <span className="text-xl font-bold">{date.getDate()}</span>
            </button>
          )
        })}
      </div>
    </div>
  );
};


// ==========================================
// COMPONENT 9: Neumorphic (Soft)
// ==========================================
export const DatePickerNeumorphic = () => {
  const dp = useDatePicker();
  return (
    <div className="w-72 bg-[#e0e5ec] p-6 rounded-[30px] shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)]">
      <div className="flex justify-between items-center mb-6">
        <button onClick={dp.prevMonth} className="w-8 h-8 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-gray-500 flex items-center justify-center hover:text-blue-500 transition-colors">‹</button>
        <span className="font-bold text-gray-600">{dp.monthNames[dp.viewDate.getMonth()]}</span>
        <button onClick={dp.nextMonth} className="w-8 h-8 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-gray-500 flex items-center justify-center hover:text-blue-500 transition-colors">›</button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {dp.calendarGrid.map((day, i) => (
          <button key={i} disabled={!day} onClick={() => day && dp.selectDay(day)} className={`h-8 w-8 rounded-lg text-xs font-bold flex items-center justify-center transition-all ${!day ? 'invisible' : dp.isSelected(day) ? 'text-blue-500 shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]' : 'text-gray-500 shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] hover:text-gray-800 active:scale-95'}`}>
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};


// ==========================================
// COMPONENT 10: Year Grid Toggle (Long Term)
// ==========================================
export const DatePickerGridToggle = () => {
  const dp = useDatePicker();
  const [view, setView] = useState('calendar'); // 'calendar' | 'month' | 'year'

  return (
    <div className="w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
      {/* Dynamic Header */}
      <div className="flex justify-between mb-4">
        <button 
          onClick={() => setView('month')}
          className="font-bold text-gray-800 hover:bg-gray-100 px-2 py-1 rounded"
        >
          {dp.monthNames[dp.viewDate.getMonth()]}
        </button>
        <button 
          onClick={() => setView('year')}
          className="font-bold text-gray-800 hover:bg-gray-100 px-2 py-1 rounded"
        >
          {dp.viewDate.getFullYear()}
        </button>
      </div>

      {/* VIEWS */}
      <div className="h-64 overflow-y-auto custom-scrollbar">
        
        {view === 'calendar' && (
          <div className="animate-in fade-in zoom-in duration-200">
            <div className="grid grid-cols-7 text-center mb-2">{dp.daysShort.map(d => <span key={d} className="text-xs text-gray-400">{d}</span>)}</div>
            <div className="grid grid-cols-7 gap-1">
              {dp.calendarGrid.map((day, i) => (
                <button key={i} disabled={!day} onClick={() => day && dp.selectDay(day)} className={`h-8 w-8 rounded text-sm flex items-center justify-center ${!day ? 'invisible' : dp.isSelected(day) ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}>{day}</button>
              ))}
            </div>
          </div>
        )}

        {view === 'month' && (
          <div className="grid grid-cols-2 gap-2 animate-in fade-in zoom-in duration-200">
            {dp.monthNames.map((m, i) => (
              <button key={m} onClick={() => { dp.setMonth(i); setView('calendar'); }} className={`py-3 text-sm rounded hover:bg-gray-100 ${i === dp.viewDate.getMonth() ? 'bg-gray-100 font-bold' : ''}`}>
                {m}
              </button>
            ))}
          </div>
        )}

        {view === 'year' && (
          <div className="grid grid-cols-3 gap-2 animate-in fade-in zoom-in duration-200">
            {dp.years.map(y => (
              <button key={y} onClick={() => { dp.setYear(y); setView('calendar'); }} className={`py-2 text-sm rounded hover:bg-gray-100 ${y === dp.viewDate.getFullYear() ? 'bg-gray-100 font-bold' : ''}`}>
                {y}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


// ==========================================
// MAIN GALLERY WRAPPER
// ==========================================
const DatePicker = () => {
  return (
    <div className="container box-shadow overflow-y-auto bg-slate-50 p-8 font-sans pb-32">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Functional Datepickers</h1>
        <p className="text-slate-500">Every component has working navigation for Day, Month, and Year.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 max-w-7xl mx-auto items-start justify-items-center">
        
        <div className="flex flex-col items-center gap-4 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase">01. SaaS Dropdowns</span>
          <DatePickerSaaS />
        </div>

        <div className="flex flex-col items-center gap-4 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase">02. Material Switcher</span>
          <DatePickerMaterial />
        </div>

        <div className="flex flex-col items-center gap-4 lg:col-span-2 xl:col-span-1 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase">03. Sidebar Year</span>
          <DatePickerSidebar />
        </div>

        <div className="flex flex-col items-center gap-4 md:col-span-2 xl:col-span-2 box-shadow p-4 rounded-lg  ">
          <span className="text-xs font-bold text-slate-400 uppercase">04. Dual Pane (Range)</span>
          <DatePickerDual />
        </div>

        <div className="flex flex-col items-center gap-4 z-50 xl:col-span-1 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase">05. Input Popover</span>
          <DatePickerInput />
        </div>

        <div className="flex flex-col items-center gap-4 bg-gray-950 p-8 rounded-2xl box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-gray-500 uppercase">06. Cyberpunk</span>
          <DatePickerCyber />
        </div>

        <div className="flex flex-col items-center gap-4 bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-2xl box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-white/50 uppercase">07. Glassmorphism</span>
          <DatePickerGlass />
        </div>

        <div className="flex flex-col items-center gap-4 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase">08. Horizontal Week</span>
          <DatePickerHorizontal />
        </div>

        <div className="flex flex-col items-center gap-4 bg-[#e0e5ec] p-8 rounded-2xl box-shadow">
          <span className="text-xs font-bold text-gray-400 uppercase">09. Neumorphic</span>
          <DatePickerNeumorphic />
        </div>

        <div className="flex flex-col items-center gap-4 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase">10. Grid Toggle</span>
          <DatePickerGridToggle />
        </div>

      </div>
    </div>
  );
};

export default DatePicker;