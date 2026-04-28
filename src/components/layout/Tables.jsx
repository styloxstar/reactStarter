import React from 'react';
import CopyButton from '../common/CopyButton';

// --- Shared Data ---
const users = [
  { id: 1, name: "Liam Johnson", role: "Product Designer", email: "liam@example.com", status: "Active" },
  { id: 2, name: "Emma Wilson", role: "DevOps Engineer", email: "emma@example.com", status: "Offline" },
  { id: 3, name: "Noah Carter", role: "Frontend Dev", email: "noah@example.com", status: "Active" },
];

// --- 1. The Standard Stripe (Clean Enterprise) ---
export const TableStandard = () => (
  <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="bg-gray-50 dark:bg-gray-800 text-xs uppercase text-gray-700 dark:text-gray-300">
        <tr>
          <th className="px-6 py-3">Name</th>
          <th className="px-6 py-3">Role</th>
          <th className="px-6 py-3">Status</th>
          <th className="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {users.map((user) => (
          <tr key={user.id} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <td className="px-6 py-4 font-medium text-[hsl(var(--foreground))]">{user.name}</td>
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
    <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
      <thead className="border-b border-slate-200 dark:border-slate-700 text-[hsl(var(--foreground))] opacity-80">
        <tr>
          <th className="py-3 font-semibold">User</th>
          <th className="py-3 font-semibold">Designation</th>
          <th className="py-3 font-semibold text-right">Contact</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
            <td className="py-3 font-medium text-[hsl(var(--foreground))]">{user.name}</td>
            <td className="py-3">{user.role}</td>
            <td className="py-3 text-right text-slate-400 dark:text-slate-500">{user.email}</td>
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
          <tr key={user.id} className="bg-[hsl(var(--card))] dark:bg-gray-800/50 shadow-sm rounded-lg hover:shadow-md dark:shadow-black/20 transition-shadow group border border-[hsl(var(--border))] border-opacity-50">
            <td className="px-4 py-3 rounded-l-lg border-l-4 border-transparent group-hover:border-indigo-500 transition-colors">
              <div className="font-bold text-[hsl(var(--foreground))]">{user.name}</div>
              <div className="text-xs text-gray-400 dark:text-gray-500">{user.email}</div>
            </td>
            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{user.role}</td>
            <td className="px-4 py-3 rounded-r-lg">
              <span className={`text-xs font-bold px-2 py-1 rounded ${user.status === 'Active' ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
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
  <div className="overflow-x-auto rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-sm">
    <table className="w-full text-left text-sm">
      <thead className="bg-gray-50/50 dark:bg-gray-800/50">
        <tr>
          <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Team Member</th>
          <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Role</th>
          <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Last Active</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
        {users.map((user, i) => (
          <tr key={user.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
            <td className="px-6 py-3">
              <div className="flex items-center gap-3">
                <img className="h-9 w-9 rounded-full object-cover border border-gray-200 dark:border-gray-700" src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="" />
                <div>
                  <div className="font-semibold text-[hsl(var(--foreground))]">{user.name}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">{user.email}</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-3 text-gray-600 dark:text-gray-400">{user.role}</td>
            <td className="px-6 py-3 text-gray-400 dark:text-gray-500 text-xs">2 hours ago</td>
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
  <div className="h-48 overflow-y-auto rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm relative">
    <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
      <thead className="sticky top-0 z-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-sm">
        <tr>
          <th className="px-4 py-3 font-semibold">User</th>
          <th className="px-4 py-3 font-semibold">Role</th>
          <th className="px-4 py-3 font-semibold">Status</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-[hsl(var(--card))]">
        {/* Repeating data to show scroll effect */}
        {[...users, ...users, ...users].map((user, i) => (
          <tr key={i} className="hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors">
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
  <div className="rounded-xl bg-[hsl(var(--secondary))] p-4 shadow-lg dark:shadow-black/40 border border-[hsl(var(--border))]">
    <table className="w-full text-left text-sm text-gray-600">
      <thead className="bg-[hsl(var(--secondary))] text-xs uppercase text-[hsl(var(--foreground))] opacity-80">
        <tr>
          <th className="p-3 font-bold text-left">Name</th>
          <th className="p-3 font-bold text-left">Role</th>
          <th className="p-3 font-bold text-right">Action</th>
        </tr>
      </thead>
      <tbody className="space-y-4">
        {users.map((user) => (
          <tr key={user.id} className="group">
            <td className="p-3 font-semibold">{user.name}</td>
            <td className="p-3">{user.role}</td>
            <td className="p-3 text-right">
              <button className="h-8 w-8 rounded-full bg-[hsl(var(--background))] text-[hsl(var(--foreground))] shadow-md hover:bg-[hsl(var(--secondary))] active:scale-95 transition-all flex items-center justify-center ml-auto border border-[hsl(var(--border))]">
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
  <div className="overflow-x-auto rounded border border-gray-300 dark:border-gray-700">
    <table className="w-full text-left text-xs text-gray-700 dark:text-gray-400">
      <thead className="bg-gray-100 dark:bg-gray-800 font-semibold border-b border-gray-300 dark:border-gray-700">
        <tr>
          <th className="px-2 py-1.5 border-r border-gray-200 dark:border-gray-700">#</th>
          <th className="px-2 py-1.5 border-r border-gray-200 dark:border-gray-700">Name</th>
          <th className="px-2 py-1.5 border-r border-gray-200 dark:border-gray-700">Email</th>
          <th className="px-2 py-1.5 text-center">Active</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
        {users.map((user) => (
          <tr key={user.id} className="hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-default bg-[hsl(var(--card))]">
            <td className="px-2 py-1.5 border-r border-gray-100 dark:border-gray-800 text-gray-500 dark:text-gray-400">{user.id}</td>
            <td className="px-2 py-1.5 border-r border-gray-100 dark:border-gray-800 font-medium text-[hsl(var(--foreground))]">{user.name}</td>
            <td className="px-2 py-1.5 border-r border-gray-100 dark:border-gray-800">{user.email}</td>
            <td className="px-2 py-1.5 text-center">
              <div className={`w-2 h-2 rounded-full mx-auto ${user.status === 'Active' ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
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
    <div className="container bg-transparent p-6 md:p-12 font-sans pb-40 overflow-y-auto">
      <h1 className="text-4xl font-bold text-center text-[hsl(var(--foreground))] mb-4">Modern Tables</h1>
      <p className="text-center text-[hsl(var(--foreground))] opacity-60 mb-16 max-w-2xl mx-auto">Responsive data grids with varying densities and styles.</p>
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 max-w-7xl mx-auto items-start">
        
        {/* 1. Standard */}
        <div className="w-full flex flex-col gap-4 glass-card p-6 rounded-xl relative group/table">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/table:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const TableStandard = () => (\n  <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">\n    <table className="w-full text-sm text-left text-gray-500">\n      <thead className="bg-gray-50 text-xs uppercase text-gray-700">\n        <tr>\n          <th className="px-6 py-3">Name</th>\n          <th className="px-6 py-3">Role</th>\n          <th className="px-6 py-3">Status</th>\n          <th className="px-6 py-3">Action</th>\n        </tr>\n      </thead>\n      <tbody className="divide-y divide-gray-200">\n        {users.map(user => (\n          <tr key={user.id} className="bg-white hover:bg-gray-50">\n            <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>\n            <td className="px-6 py-4">{user.role}</td>\n            <td className="px-6 py-4"><span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">{user.status}</span></td>\n            <td className="px-6 py-4 text-blue-600 cursor-pointer">Edit</td>\n          </tr>\n        ))}\n      </tbody>\n    </table>\n  </div>\n);`}
              htmlCode={`<div class="table-wrap">
  <table class="std-table">
    <thead>
      <tr><th>Name</th><th>Role</th><th>Status</th><th>Action</th></tr>
    </thead>
    <tbody>
      <tr><td>Liam Johnson</td><td>Product Designer</td><td><span class="badge active">Active</span></td><td><a href="#">Edit</a></td></tr>
      <tr><td>Emma Wilson</td><td>DevOps Engineer</td><td><span class="badge">Offline</span></td><td><a href="#">Edit</a></td></tr>
    </tbody>
  </table>
</div>`}
              cssCode={`.table-wrap { overflow-x: auto; border: 1px solid #e5e7eb; border-radius: 0.5rem; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
.std-table { width: 100%; border-collapse: collapse; font-size: 0.875rem; text-align: left; color: #6b7280; }
.std-table thead { background: #f9fafb; }
.std-table th { padding: 0.75rem 1.5rem; font-size: 0.75rem; text-transform: uppercase; color: #374151; font-weight: 600; }
.std-table td { padding: 1rem 1.5rem; }
.std-table tbody tr { border-bottom: 1px solid #e5e7eb; background: #fff; }
.std-table tbody tr:hover { background: #f9fafb; }
.badge { padding: 0.25rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; background: #f3f4f6; color: #374151; }
.badge.active { background: #dcfce7; color: #15803d; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">01. Standard Stripe</span>
          <TableStandard />
        </div>

        {/* 2. Minimal */}
        <div className="w-full flex flex-col gap-4 glass-card p-6 rounded-xl relative group/table">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/table:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const TableMinimal = () => (\n  <div className="overflow-x-auto">\n    <table className="w-full text-left text-sm text-slate-600">\n      <thead className="border-b border-slate-200 text-slate-800">\n        <tr><th className="py-3 font-semibold">User</th><th className="py-3 font-semibold">Designation</th><th className="py-3 font-semibold text-right">Contact</th></tr>\n      </thead>\n      <tbody>\n        {users.map(user => (\n          <tr key={user.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">\n            <td className="py-3 font-medium text-slate-900">{user.name}</td>\n            <td className="py-3">{user.role}</td>\n            <td className="py-3 text-right text-slate-400">{user.email}</td>\n          </tr>\n        ))}\n      </tbody>\n    </table>\n  </div>\n);`}
              htmlCode={`<table class="min-table">
  <thead><tr><th>User</th><th>Designation</th><th>Contact</th></tr></thead>
  <tbody>
    <tr><td>Liam Johnson</td><td>Product Designer</td><td>liam@example.com</td></tr>
    <tr><td>Emma Wilson</td><td>DevOps Engineer</td><td>emma@example.com</td></tr>
  </tbody>
</table>`}
              cssCode={`.min-table { width: 100%; text-align: left; font-size: 0.875rem; color: #475569; border-collapse: collapse; }
.min-table thead { border-bottom: 1px solid #e2e8f0; }
.min-table th { padding: 0.75rem 0; font-weight: 600; color: #1e293b; }
.min-table td { padding: 0.75rem 0; }
.min-table tbody tr { border-bottom: 1px solid #f1f5f9; }
.min-table tbody tr:last-child { border-bottom: none; }
.min-table tbody tr:hover { background: rgba(248,250,252,0.5); }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">02. Minimalist Clean</span>
          <TableMinimal />
        </div>

        {/* 3. Glass */}
        <div className="w-full flex flex-col gap-4 bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-2xl relative group/table box-shadow">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/table:opacity-100 transition-opacity text-white">
            <CopyButton 
              jsxCode={`export const TableGlass = () => (\n  <div className="overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">\n    <table className="w-full text-left text-sm text-white">\n      <thead className="border-b border-white/10 bg-white/5 uppercase tracking-wider">\n        <tr><th className="px-6 py-4 font-semibold">Name</th><th className="px-6 py-4 font-semibold">Role</th><th className="px-6 py-4 font-semibold text-right">Status</th></tr>\n      </thead>\n      <tbody className="divide-y divide-white/10">\n        {users.map(user => (\n          <tr key={user.id} className="hover:bg-white/5">\n            <td className="px-6 py-4 font-medium">{user.name}</td>\n            <td className="px-6 py-4 text-white/70">{user.role}</td>\n            <td className="px-6 py-4 text-right">\n              <span className="px-2 py-1 rounded-lg bg-white/10 text-xs border border-white/10">{user.status}</span>\n            </td>\n          </tr>\n        ))}\n      </tbody>\n    </table>\n  </div>\n);`}
              htmlCode={`<div class="glass-table-wrap">
  <table class="glass-table">
    <thead><tr><th>Name</th><th>Role</th><th>Status</th></tr></thead>
    <tbody>
      <tr><td>Liam Johnson</td><td>Product Designer</td><td><span class="glass-badge">Active</span></td></tr>
      <tr><td>Emma Wilson</td><td>DevOps Engineer</td><td><span class="glass-badge">Offline</span></td></tr>
    </tbody>
  </table>
</div>`}
              cssCode={`.glass-table-wrap { overflow: hidden; border-radius: 0.75rem; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.1); backdrop-filter: blur(12px); box-shadow: 0 10px 15px rgba(0,0,0,0.1); }
.glass-table { width: 100%; text-align: left; font-size: 0.875rem; color: #fff; border-collapse: collapse; }
.glass-table thead { border-bottom: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.05); text-transform: uppercase; letter-spacing: 0.05em; }
.glass-table th { padding: 1rem 1.5rem; font-weight: 600; }
.glass-table td { padding: 1rem 1.5rem; }
.glass-table tbody tr { border-bottom: 1px solid rgba(255,255,255,0.1); }
.glass-table tbody tr:hover { background: rgba(255,255,255,0.05); }
.glass-badge { padding: 0.25rem 0.5rem; border-radius: 0.5rem; background: rgba(255,255,255,0.1); font-size: 0.75rem; border: 1px solid rgba(255,255,255,0.1); }`}
            />
          </div>
          <span className="text-xs font-bold text-white/50 uppercase tracking-widest">03. Glassmorphism</span>
          <TableGlass />
        </div>

        {/* 4. Cards */}
        <div className="w-full flex flex-col gap-4 bg-[hsl(var(--secondary))] p-6 rounded-xl relative group/table box-shadow">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/table:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const TableCards = () => (\n  <div className="overflow-x-auto">\n    <table className="w-full border-separate border-spacing-y-3">\n      <thead>\n        <tr>\n          <th className="px-4 py-2 text-left text-xs font-bold text-gray-400 uppercase">Employee</th>\n          <th className="px-4 py-2 text-left text-xs font-bold text-gray-400 uppercase">Title</th>\n          <th className="px-4 py-2 text-left text-xs font-bold text-gray-400 uppercase">Status</th>\n        </tr>\n      </thead>\n      <tbody>\n        {users.map(user => (\n          <tr key={user.id} className="bg-white shadow-sm rounded-lg hover:shadow-md group">\n            <td className="px-4 py-3 rounded-l-lg border-l-4 border-transparent group-hover:border-indigo-500">\n              <div className="font-bold text-gray-800">{user.name}</div>\n              <div className="text-xs text-gray-400">{user.email}</div>\n            </td>\n            <td className="px-4 py-3 text-sm text-gray-600">{user.role}</td>\n            <td className="px-4 py-3 rounded-r-lg"><span className="text-xs font-bold px-2 py-1 rounded bg-indigo-50 text-indigo-600">{user.status}</span></td>\n          </tr>\n        ))}\n      </tbody>\n    </table>\n  </div>\n);`}
              htmlCode={`<table class="card-table">
  <thead><tr><th>Employee</th><th>Title</th><th>Status</th></tr></thead>
  <tbody>
    <tr class="card-row">
      <td><strong>Liam Johnson</strong><br><small>liam@example.com</small></td>
      <td>Product Designer</td>
      <td><span class="status-badge">Active</span></td>
    </tr>
  </tbody>
</table>`}
              cssCode={`.card-table { width: 100%; border-collapse: separate; border-spacing: 0 0.75rem; }
.card-table th { padding: 0.5rem 1rem; text-align: left; font-size: 0.75rem; text-transform: uppercase; color: #9ca3af; font-weight: 700; }
.card-row { background: #fff; box-shadow: 0 1px 2px rgba(0,0,0,0.05); border-radius: 0.5rem; }
.card-row:hover { box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
.card-row td { padding: 0.75rem 1rem; }
.card-row td:first-child { border-left: 4px solid transparent; border-radius: 0.5rem 0 0 0.5rem; }
.card-row:hover td:first-child { border-left-color: #6366f1; }
.card-row td:last-child { border-radius: 0 0.5rem 0.5rem 0; }
.status-badge { font-size: 0.75rem; font-weight: 700; padding: 0.25rem 0.5rem; border-radius: 0.25rem; background: #eef2ff; color: #4f46e5; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">04. Floating Cards</span>
          <TableCards />
        </div>

        {/* 5. Cyberpunk */}
        <div className="w-full flex flex-col gap-4 bg-black p-6 rounded-xl relative group/table box-shadow">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/table:opacity-100 transition-opacity text-white">
            <CopyButton 
              jsxCode={`export const TableCyberpunk = () => (\n  <div className="overflow-hidden rounded-md border border-gray-700 bg-gray-900">\n    <table className="w-full text-left text-sm text-gray-300 font-mono">\n      <thead className="bg-gray-800 text-cyan-400 uppercase">\n        <tr><th className="px-6 py-3">ID_REF</th><th className="px-6 py-3">OPERATIVE</th><th className="px-6 py-3 text-right">SYSTEM_STATUS</th></tr>\n      </thead>\n      <tbody className="divide-y divide-gray-800">\n        {users.map(user => (\n          <tr key={user.id} className="hover:bg-cyan-900/10 hover:text-cyan-50">\n            <td className="px-6 py-4 text-gray-500">00{user.id}</td>\n            <td className="px-6 py-4">{user.name}</td>\n            <td className="px-6 py-4 text-right">\n              <span className={\`text-xs border \${user.status === 'Active' ? 'border-cyan-500 text-cyan-500' : 'border-gray-600 text-gray-500'} px-2 py-1\`}>{user.status.toUpperCase()}</span>\n            </td>\n          </tr>\n        ))}\n      </tbody>\n    </table>\n  </div>\n);`}
              htmlCode={`<div class="cyber-table-wrap">
  <table class="cyber-table">
    <thead><tr><th>ID_REF</th><th>OPERATIVE</th><th>SYSTEM_STATUS</th></tr></thead>
    <tbody>
      <tr><td>001</td><td>Liam Johnson</td><td><span class="cyber-badge active">ACTIVE</span></td></tr>
      <tr><td>002</td><td>Emma Wilson</td><td><span class="cyber-badge">OFFLINE</span></td></tr>
    </tbody>
  </table>
</div>`}
              cssCode={`.cyber-table-wrap { overflow: hidden; border-radius: 0.375rem; border: 1px solid #374151; background: #111827; }
.cyber-table { width: 100%; text-align: left; font-size: 0.875rem; color: #d1d5db; font-family: monospace; border-collapse: collapse; }
.cyber-table thead { background: #1f2937; color: #22d3ee; text-transform: uppercase; }
.cyber-table th { padding: 0.75rem 1.5rem; }
.cyber-table td { padding: 1rem 1.5rem; }
.cyber-table tbody tr { border-bottom: 1px solid #1f2937; }
.cyber-table tbody tr:hover { background: rgba(8,145,178,0.1); color: #ecfeff; }
.cyber-badge { font-size: 0.75rem; border: 1px solid #4b5563; color: #6b7280; padding: 0.25rem 0.5rem; }
.cyber-badge.active { border-color: #06b6d4; color: #06b6d4; box-shadow: 0 0 10px rgba(6,182,212,0.4); }`}
            />
          </div>
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">05. Cyberpunk</span>
          <TableCyberpunk />
        </div>

        {/* 6. Avatar */}
        <div className="w-full flex flex-col gap-4 glass-card p-6 rounded-xl relative group/table">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/table:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const TableAvatar = () => (\n  <div className="overflow-x-auto rounded-xl bg-white border border-gray-100 shadow-sm">\n    <table className="w-full text-left text-sm">\n      <thead className="bg-gray-50/50">\n        <tr><th className="px-6 py-4 font-medium text-gray-500">Team Member</th><th className="px-6 py-4 font-medium text-gray-500">Role</th><th className="px-6 py-4 font-medium text-gray-500">Last Active</th></tr>\n      </thead>\n      <tbody className="divide-y divide-gray-100">\n        {users.map((user, i) => (\n          <tr key={user.id} className="hover:bg-gray-50/50">\n            <td className="px-6 py-3">\n              <div className="flex items-center gap-3">\n                <img className="h-9 w-9 rounded-full" src={\`avatar\${i}.jpg\`} />\n                <div><div className="font-semibold text-gray-900">{user.name}</div><div className="text-xs text-gray-400">{user.email}</div></div>\n              </div>\n            </td>\n            <td className="px-6 py-3 text-gray-600">{user.role}</td>\n            <td className="px-6 py-3 text-gray-400 text-xs">2 hours ago</td>\n          </tr>\n        ))}\n      </tbody>\n    </table>\n  </div>\n);`}
              htmlCode={`<div class="avatar-table-wrap">
  <table class="avatar-table">
    <thead><tr><th>Team Member</th><th>Role</th><th>Last Active</th></tr></thead>
    <tbody>
      <tr>
        <td><div class="member"><img src="avatar.jpg" class="avatar"><div><strong>Liam Johnson</strong><br><small>liam@example.com</small></div></div></td>
        <td>Product Designer</td>
        <td>2 hours ago</td>
      </tr>
    </tbody>
  </table>
</div>`}
              cssCode={`.avatar-table-wrap { overflow-x: auto; border-radius: 0.75rem; background: #fff; border: 1px solid #f3f4f6; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
.avatar-table { width: 100%; text-align: left; font-size: 0.875rem; border-collapse: collapse; }
.avatar-table thead { background: rgba(249,250,251,0.5); }
.avatar-table th { padding: 1rem 1.5rem; font-weight: 500; color: #6b7280; }
.avatar-table td { padding: 0.75rem 1.5rem; }
.avatar-table tbody tr { border-bottom: 1px solid #f3f4f6; }
.avatar-table tbody tr:hover { background: rgba(249,250,251,0.5); }
.member { display: flex; align-items: center; gap: 0.75rem; }
.avatar { width: 2.25rem; height: 2.25rem; border-radius: 50%; object-fit: cover; border: 1px solid #e5e7eb; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">06. Social / Avatar</span>
          <TableAvatar />
        </div>

        {/* 7. Brutalist */}
        <div className="w-full flex flex-col gap-4 glass-card p-6 rounded-xl relative group/table">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/table:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const TableBrutalist = () => (\n  <div className="border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">\n    <table className="w-full text-left">\n      <thead className="border-b-2 border-black bg-yellow-400 font-black uppercase">\n        <tr><th className="px-4 py-3 border-r-2 border-black">Name</th><th className="px-4 py-3 border-r-2 border-black">Role</th><th className="px-4 py-3">Status</th></tr>\n      </thead>\n      <tbody className="divide-y-2 divide-black">\n        {users.map(user => (\n          <tr key={user.id} className="hover:bg-pink-100">\n            <td className="px-4 py-3 border-r-2 border-black font-bold">{user.name}</td>\n            <td className="px-4 py-3 border-r-2 border-black">{user.role}</td>\n            <td className="px-4 py-3 font-mono text-sm">{user.status.toUpperCase()}</td>\n          </tr>\n        ))}\n      </tbody>\n    </table>\n  </div>\n);`}
              htmlCode={`<div class="brutal-table-wrap">
  <table class="brutal-table">
    <thead><tr><th>Name</th><th>Role</th><th>Status</th></tr></thead>
    <tbody>
      <tr><td>Liam Johnson</td><td>Product Designer</td><td>ACTIVE</td></tr>
      <tr><td>Emma Wilson</td><td>DevOps Engineer</td><td>OFFLINE</td></tr>
    </tbody>
  </table>
</div>`}
              cssCode={`.brutal-table-wrap { border: 2px solid #000; background: #fff; box-shadow: 4px 4px 0 0 #000; }
.brutal-table { width: 100%; text-align: left; border-collapse: collapse; }
.brutal-table thead { background: #facc15; border-bottom: 2px solid #000; font-weight: 900; text-transform: uppercase; }
.brutal-table th { padding: 0.75rem 1rem; border-right: 2px solid #000; }
.brutal-table th:last-child { border-right: none; }
.brutal-table td { padding: 0.75rem 1rem; border-right: 2px solid #000; }
.brutal-table td:last-child { border-right: none; font-family: monospace; font-size: 0.875rem; }
.brutal-table tbody tr { border-bottom: 2px solid #000; }
.brutal-table tbody tr:hover { background: #fce7f3; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">07. Brutalist</span>
          <TableBrutalist />
        </div>

        {/* 8. Sticky */}
        <div className="w-full flex flex-col gap-4 glass-card p-6 rounded-xl relative group/table">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/table:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const TableSticky = () => (\n  <div className="h-48 overflow-y-auto rounded-lg border border-slate-200 shadow-sm relative">\n    <table className="w-full text-left text-sm text-slate-600">\n      <thead className="sticky top-0 z-10 bg-slate-100 text-slate-700 shadow-sm">\n        <tr><th className="px-4 py-3 font-semibold">User</th><th className="px-4 py-3 font-semibold">Role</th><th className="px-4 py-3 font-semibold">Status</th></tr>\n      </thead>\n      <tbody className="divide-y divide-slate-200 bg-white">\n        {data.map((user, i) => (\n          <tr key={i} className="hover:bg-slate-50">\n            <td className="px-4 py-3 font-medium">{user.name}</td>\n            <td className="px-4 py-3">{user.role}</td>\n            <td className="px-4 py-3">{user.status}</td>\n          </tr>\n        ))}\n      </tbody>\n    </table>\n  </div>\n);`}
              htmlCode={`<div class="sticky-wrap">
  <table class="sticky-table">
    <thead><tr><th>User</th><th>Role</th><th>Status</th></tr></thead>
    <tbody>
      <tr><td>Liam Johnson</td><td>Product Designer</td><td>Active</td></tr>
      <tr><td>Emma Wilson</td><td>DevOps Engineer</td><td>Offline</td></tr>
      <!-- more rows to enable scroll -->
    </tbody>
  </table>
</div>`}
              cssCode={`.sticky-wrap { height: 12rem; overflow-y: auto; border-radius: 0.5rem; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.05); position: relative; }
.sticky-table { width: 100%; text-align: left; font-size: 0.875rem; color: #475569; border-collapse: collapse; }
.sticky-table thead { position: sticky; top: 0; z-index: 10; background: #f1f5f9; color: #334155; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
.sticky-table th { padding: 0.75rem 1rem; font-weight: 600; }
.sticky-table td { padding: 0.75rem 1rem; }
.sticky-table tbody { background: #fff; }
.sticky-table tbody tr { border-bottom: 1px solid #e2e8f0; }
.sticky-table tbody tr:hover { background: #f8fafc; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">08. Sticky Header</span>
          <TableSticky />
        </div>

        {/* 9. Neumorphic */}
        <div className="w-full flex flex-col gap-4 bg-[hsl(var(--secondary))] p-8 rounded-2xl relative group/table box-shadow border border-[hsl(var(--border))]">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/table:opacity-100 transition-opacity text-gray-500">
            <CopyButton 
              jsxCode={`export const TableNeumorphic = () => (\n  <div className="rounded-xl bg-[#e0e5ec] p-4 shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)]">\n    <table className="w-full text-left text-sm text-gray-600">\n      <thead>\n        <tr><th className="p-3 font-bold text-gray-500">Name</th><th className="p-3 font-bold text-gray-500">Role</th><th className="p-3 font-bold text-gray-500 text-right">Action</th></tr>\n      </thead>\n      <tbody>\n        {users.map(user => (\n          <tr key={user.id}>\n            <td className="p-3 font-semibold">{user.name}</td>\n            <td className="p-3">{user.role}</td>\n            <td className="p-3 text-right">\n              <button className="h-8 w-8 rounded-full bg-[#e0e5ec] shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">✏</button>\n            </td>\n          </tr>\n        ))}\n      </tbody>\n    </table>\n  </div>\n);`}
              htmlCode={`<div class="neu-table-wrap">
  <table class="neu-table">
    <thead><tr><th>Name</th><th>Role</th><th>Action</th></tr></thead>
    <tbody>
      <tr><td>Liam Johnson</td><td>Product Designer</td><td><button class="neu-btn">✏</button></td></tr>
      <tr><td>Emma Wilson</td><td>DevOps Engineer</td><td><button class="neu-btn">✏</button></td></tr>
    </tbody>
  </table>
</div>`}
              cssCode={`.neu-table-wrap { border-radius: 0.75rem; background: #e0e5ec; padding: 1rem; box-shadow: 9px 9px 16px #a3b1c6, -9px -9px 16px rgba(255,255,255,0.5); }
.neu-table { width: 100%; text-align: left; font-size: 0.875rem; color: #4b5563; border-collapse: collapse; }
.neu-table th { padding: 0.75rem; font-weight: 700; color: #6b7280; }
.neu-table td { padding: 0.75rem; }
.neu-btn { width: 2rem; height: 2rem; border-radius: 50%; background: #e0e5ec; border: none; color: #6b7280; cursor: pointer; box-shadow: 3px 3px 6px #bebebe, -3px -3px 6px #ffffff; display: inline-flex; align-items: center; justify-content: center; }
.neu-btn:hover { box-shadow: inset 2px 2px 5px #bebebe, inset -2px -2px 5px #ffffff; }
.neu-btn:active { transform: scale(0.95); }`}
            />
          </div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">09. Neumorphic</span>
          <TableNeumorphic />
        </div>

        {/* 10. Compact */}
        <div className="w-full flex flex-col gap-4 box-shadow p-6 rounded-xl relative group/table bg-white">
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover/table:opacity-100 transition-opacity">
            <CopyButton 
              jsxCode={`export const TableCompact = () => (\n  <div className="overflow-x-auto rounded border border-gray-300">\n    <table className="w-full text-left text-xs text-gray-700">\n      <thead className="bg-gray-100 font-semibold border-b border-gray-300">\n        <tr><th className="px-2 py-1.5 border-r border-gray-200">#</th><th className="px-2 py-1.5 border-r border-gray-200">Name</th><th className="px-2 py-1.5 border-r border-gray-200">Email</th><th className="px-2 py-1.5 text-center">Active</th></tr>\n      </thead>\n      <tbody className="divide-y divide-gray-200">\n        {users.map(user => (\n          <tr key={user.id} className="hover:bg-blue-50">\n            <td className="px-2 py-1.5 border-r border-gray-100 text-gray-500">{user.id}</td>\n            <td className="px-2 py-1.5 border-r border-gray-100 font-medium">{user.name}</td>\n            <td className="px-2 py-1.5 border-r border-gray-100">{user.email}</td>\n            <td className="px-2 py-1.5 text-center"><div className={\`w-2 h-2 rounded-full mx-auto \${user.status === 'Active' ? 'bg-blue-500' : 'bg-gray-300'}\`} /></td>\n          </tr>\n        ))}\n      </tbody>\n    </table>\n  </div>\n);`}
              htmlCode={`<div class="compact-wrap">
  <table class="compact-table">
    <thead><tr><th>#</th><th>Name</th><th>Email</th><th>Active</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>Liam Johnson</td><td>liam@example.com</td><td><span class="dot active"></span></td></tr>
      <tr><td>2</td><td>Emma Wilson</td><td>emma@example.com</td><td><span class="dot"></span></td></tr>
    </tbody>
  </table>
</div>`}
              cssCode={`.compact-wrap { overflow-x: auto; border-radius: 0.25rem; border: 1px solid #d1d5db; }
.compact-table { width: 100%; text-align: left; font-size: 0.75rem; color: #374151; border-collapse: collapse; }
.compact-table thead { background: #f3f4f6; font-weight: 600; border-bottom: 1px solid #d1d5db; }
.compact-table th, .compact-table td { padding: 0.375rem 0.5rem; border-right: 1px solid #e5e7eb; }
.compact-table th:last-child, .compact-table td:last-child { border-right: none; text-align: center; }
.compact-table tbody tr { border-bottom: 1px solid #e5e7eb; }
.compact-table tbody tr:hover { background: #eff6ff; }
.dot { width: 0.5rem; height: 0.5rem; border-radius: 50%; display: inline-block; background: #d1d5db; }
.dot.active { background: #3b82f6; }`}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">10. High Density</span>
          <TableCompact />
        </div>

      </div>
    </div>
  );
};

export default Tables;