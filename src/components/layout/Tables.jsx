import React from 'react';

// --- Shared Data ---
const users = [
  { id: 1, name: "Liam Johnson", role: "Product Designer", email: "liam@example.com", status: "Active" },
  { id: 2, name: "Emma Wilson", role: "DevOps Engineer", email: "emma@example.com", status: "Offline" },
  { id: 3, name: "Noah Carter", role: "Frontend Dev", email: "noah@example.com", status: "Active" },
];

// --- 1. The Standard Stripe (Clean Enterprise) ---
export const TableStandard = () => (
  <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="bg-gray-50 text-xs uppercase text-gray-700">
        <tr>
          <th className="px-6 py-3">Name</th>
          <th className="px-6 py-3">Role</th>
          <th className="px-6 py-3">Status</th>
          <th className="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {users.map((user) => (
          <tr key={user.id} className="bg-white hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
            <td className="px-6 py-4">{user.role}</td>
            <td className="px-6 py-4">
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                {user.status}
              </span>
            </td>
            <td className="px-6 py-4 text-blue-600 hover:underline cursor-pointer">Edit</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// --- 2. The Minimalist (Whitespace) ---
export const TableMinimal = () => (
  <div className="overflow-x-auto">
    <table className="w-full text-left text-sm text-slate-600">
      <thead className="border-b border-slate-200 text-slate-800">
        <tr>
          <th className="py-3 font-semibold">User</th>
          <th className="py-3 font-semibold">Designation</th>
          <th className="py-3 font-semibold text-right">Contact</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
            <td className="py-3 font-medium text-slate-900">{user.name}</td>
            <td className="py-3">{user.role}</td>
            <td className="py-3 text-right text-slate-400">{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// --- 3. The Glassmorphism Table ---
// *Context: Needs a dark or colorful background*
export const TableGlass = () => (
  <div className="overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
    <table className="w-full text-left text-sm text-white">
      <thead className="border-b border-white/10 bg-white/5 uppercase tracking-wider">
        <tr>
          <th className="px-6 py-4 font-semibold">Name</th>
          <th className="px-6 py-4 font-semibold">Role</th>
          <th className="px-6 py-4 font-semibold text-right">Status</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-white/10">
        {users.map((user) => (
          <tr key={user.id} className="hover:bg-white/5 transition-colors">
            <td className="px-6 py-4 font-medium">{user.name}</td>
            <td className="px-6 py-4 text-white/70">{user.role}</td>
            <td className="px-6 py-4 text-right">
              <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-lg bg-white/10 text-xs font-medium border border-white/10 shadow-sm">
                <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-400' : 'bg-gray-400'}`}></span>
                {user.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// --- 4. The Card Rows (Floating) ---
export const TableCards = () => (
  <div className="overflow-x-auto">
    <table className="w-full border-separate border-spacing-y-3">
      <thead>
        <tr>
          <th className="px-4 py-2 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Employee</th>
          <th className="px-4 py-2 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Title</th>
          <th className="px-4 py-2 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="bg-white shadow-sm rounded-lg hover:shadow-md transition-shadow group">
            <td className="px-4 py-3 rounded-l-lg border-l-4 border-transparent group-hover:border-indigo-500 transition-colors">
              <div className="font-bold text-gray-800">{user.name}</div>
              <div className="text-xs text-gray-400">{user.email}</div>
            </td>
            <td className="px-4 py-3 text-sm text-gray-600">{user.role}</td>
            <td className="px-4 py-3 rounded-r-lg">
              <span className={`text-xs font-bold px-2 py-1 rounded ${user.status === 'Active' ? 'bg-indigo-50 text-indigo-600' : 'bg-gray-100 text-gray-500'}`}>
                {user.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// --- 5. The Cyberpunk (Dark Neon) ---
export const TableCyberpunk = () => (
  <div className="overflow-hidden rounded-md border border-gray-700 bg-gray-900">
    <table className="w-full text-left text-sm text-gray-300 font-mono">
      <thead className="bg-gray-800 text-cyan-400 uppercase">
        <tr>
          <th className="px-6 py-3">ID_REF</th>
          <th className="px-6 py-3">OPERATIVE</th>
          <th className="px-6 py-3 text-right">SYSTEM_STATUS</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-800">
        {users.map((user) => (
          <tr key={user.id} className="hover:bg-cyan-900/10 transition-colors hover:text-cyan-50">
            <td className="px-6 py-4 text-gray-500">00{user.id}</td>
            <td className="px-6 py-4">{user.name}</td>
            <td className="px-6 py-4 text-right">
              <span className={`text-xs border ${user.status === 'Active' ? 'border-cyan-500 text-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.4)]' : 'border-gray-600 text-gray-500'} px-2 py-1`}>
                {user.status.toUpperCase()}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// --- 6. The Avatar List (Social) ---
export const TableAvatar = () => (
  <div className="overflow-x-auto rounded-xl bg-white border border-gray-100 shadow-sm">
    <table className="w-full text-left text-sm">
      <thead className="bg-gray-50/50">
        <tr>
          <th className="px-6 py-4 font-medium text-gray-500">Team Member</th>
          <th className="px-6 py-4 font-medium text-gray-500">Role</th>
          <th className="px-6 py-4 font-medium text-gray-500">Last Active</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {users.map((user, i) => (
          <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
            <td className="px-6 py-3">
              <div className="flex items-center gap-3">
                <img className="h-9 w-9 rounded-full object-cover border border-gray-200" src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="" />
                <div>
                  <div className="font-semibold text-gray-900">{user.name}</div>
                  <div className="text-xs text-gray-400">{user.email}</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-3 text-gray-600">{user.role}</td>
            <td className="px-6 py-3 text-gray-400 text-xs">2 hours ago</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// --- 7. The Brutalist (Retro) ---
export const TableBrutalist = () => (
  <div className="border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
    <table className="w-full text-left">
      <thead className="border-b-2 border-black bg-yellow-400 font-black uppercase text-black">
        <tr>
          <th className="px-4 py-3 border-r-2 border-black">Name</th>
          <th className="px-4 py-3 border-r-2 border-black">Role</th>
          <th className="px-4 py-3">Status</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 divide-black">
        {users.map((user) => (
          <tr key={user.id} className="hover:bg-pink-100 transition-colors">
            <td className="px-4 py-3 border-r-2 border-black font-bold">{user.name}</td>
            <td className="px-4 py-3 border-r-2 border-black">{user.role}</td>
            <td className="px-4 py-3 font-mono text-sm">{user.status.toUpperCase()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// --- 8. The Sticky Header (Scrollable) ---
export const TableSticky = () => (
  <div className="h-48 overflow-y-auto rounded-lg border border-slate-200 shadow-sm relative">
    <table className="w-full text-left text-sm text-slate-600">
      <thead className="sticky top-0 z-10 bg-slate-100 text-slate-700 shadow-sm">
        <tr>
          <th className="px-4 py-3 font-semibold">User</th>
          <th className="px-4 py-3 font-semibold">Role</th>
          <th className="px-4 py-3 font-semibold">Status</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-200 bg-white">
        {/* Repeating data to show scroll effect */}
        {[...users, ...users, ...users].map((user, i) => (
          <tr key={i} className="hover:bg-slate-50 transition-colors">
            <td className="px-4 py-3 font-medium">{user.name}</td>
            <td className="px-4 py-3">{user.role}</td>
            <td className="px-4 py-3">{user.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// --- 9. The Neumorphic (Soft UI) ---
export const TableNeumorphic = () => (
  <div className="rounded-xl bg-[#e0e5ec] p-4 shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)]">
    <table className="w-full text-left text-sm text-gray-600">
      <thead>
        <tr>
          <th className="p-3 font-bold text-gray-500">Name</th>
          <th className="p-3 font-bold text-gray-500">Role</th>
          <th className="p-3 font-bold text-gray-500 text-right">Action</th>
        </tr>
      </thead>
      <tbody className="space-y-4">
        {users.map((user) => (
          <tr key={user.id} className="group">
            <td className="p-3 font-semibold">{user.name}</td>
            <td className="p-3">{user.role}</td>
            <td className="p-3 text-right">
              <button className="h-8 w-8 rounded-full bg-[#e0e5ec] text-gray-500 shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff] active:scale-95 transition-all flex items-center justify-center ml-auto">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// --- 10. The Compact (High Density) ---
export const TableCompact = () => (
  <div className="overflow-x-auto rounded border border-gray-300">
    <table className="w-full text-left text-xs text-gray-700">
      <thead className="bg-gray-100 font-semibold border-b border-gray-300">
        <tr>
          <th className="px-2 py-1.5 border-r border-gray-200">#</th>
          <th className="px-2 py-1.5 border-r border-gray-200">Name</th>
          <th className="px-2 py-1.5 border-r border-gray-200">Email</th>
          <th className="px-2 py-1.5 text-center">Active</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {users.map((user) => (
          <tr key={user.id} className="hover:bg-blue-50 cursor-default">
            <td className="px-2 py-1.5 border-r border-gray-100 text-gray-500">{user.id}</td>
            <td className="px-2 py-1.5 border-r border-gray-100 font-medium">{user.name}</td>
            <td className="px-2 py-1.5 border-r border-gray-100">{user.email}</td>
            <td className="px-2 py-1.5 text-center">
              <div className={`w-2 h-2 rounded-full mx-auto ${user.status === 'Active' ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// --- Main Gallery ---
const Tables = () => {
  return (
    <div className="container box-shadow bg-slate-50 p-6 md:p-12 font-sans pb-40 overflow-y-auto">
      <h1 className="text-4xl font-bold text-center text-slate-800 mb-4">Modern Tables</h1>
      <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">Responsive data grids with varying densities and styles.</p>
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 max-w-7xl mx-auto items-start">
        
        {/* 1. Standard */}
        <div className="w-full flex flex-col gap-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">01. Standard Stripe</span>
          <TableStandard />
        </div>

        {/* 2. Minimal */}
        <div className="w-full flex flex-col gap-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">02. Minimalist Clean</span>
          <TableMinimal />
        </div>

        {/* 3. Glass */}
        <div className="w-full flex flex-col gap-4 bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-2xl shadow-inner">
          <span className="text-xs font-bold text-white/50 uppercase tracking-widest">03. Glassmorphism</span>
          <TableGlass />
        </div>

        {/* 4. Cards */}
        <div className="w-full flex flex-col gap-4 bg-gray-50 p-4 rounded-xl">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">04. Floating Cards</span>
          <TableCards />
        </div>

        {/* 5. Cyberpunk */}
        <div className="w-full flex flex-col gap-4 bg-black p-4 rounded-xl">
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">05. Cyberpunk</span>
          <TableCyberpunk />
        </div>

        {/* 6. Avatar */}
        <div className="w-full flex flex-col gap-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">06. Social / Avatar</span>
          <TableAvatar />
        </div>

        {/* 7. Brutalist */}
        <div className="w-full flex flex-col gap-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">07. Brutalist</span>
          <TableBrutalist />
        </div>

        {/* 8. Sticky */}
        <div className="w-full flex flex-col gap-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">08. Sticky Header</span>
          <TableSticky />
        </div>

        {/* 9. Neumorphic */}
        <div className="w-full flex flex-col gap-4 bg-[#e0e5ec] p-8 rounded-2xl">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">09. Neumorphic</span>
          <TableNeumorphic />
        </div>

        {/* 10. Compact */}
        <div className="w-full flex flex-col gap-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">10. High Density</span>
          <TableCompact />
        </div>

      </div>
    </div>
  );
};

export default Tables;