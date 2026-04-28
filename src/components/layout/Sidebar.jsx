import React from 'react'
import { sidebarJson } from '../../configurations/uiJson'
import { NavLink, useLocation } from 'react-router-dom';
import { useSidebar } from '../../context/SidebarContext';

const Sidebar = ({ isMobile }) => {
    const { closeSidebar } = useSidebar();
    
    // Track visibility for each item by id
    // We use the ID from sidebarJson. Dashboard is 1, Components is 7, Pages is 8.
    const [visibleChildren, setVisibleChildren] = React.useState({
      7: true, // Components (id: 7)
      8: true  // Pages (id: 8)
    });

    const toggleChildren = (id) => {
        setVisibleChildren((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const handleLinkClick = () => {
        if (isMobile) closeSidebar();
    };

    return (
        <aside className={`flex flex-col h-full bg-transparent ${isMobile ? '' : 'p-2'} text-[hsl(var(--foreground))]`}>
            {!isMobile && (
              <div className="px-4 py-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--foreground))] opacity-40">Explorer</h2>
              </div>
            )}
            
            <div className="flex-1 overflow-y-auto custom-scrollbar space-y-1 px-2 pb-10">
                {sidebarJson.map((item) => (
                    <div key={item.id} className="space-y-1">
                        {item.children ? (
                            <button 
                                onClick={() => toggleChildren(item.id)}
                                className={`
                                  w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300
                                  hover:bg-[hsl(var(--secondary))] group
                                  ${visibleChildren[item.id] ? 'text-[hsl(var(--primary))]' : 'text-[hsl(var(--foreground))] opacity-70'}
                                `}
                            >
                                <span className="text-sm font-bold tracking-tight uppercase">{item.title}</span>
                                <svg 
                                  className={`w-4 h-4 transition-transform duration-300 ${visibleChildren[item.id] ? 'rotate-180' : ''}`} 
                                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        ) : (
                            <NavLink 
                                to={item.name === 'dashboard' ? '/' : `/${item.name}`}
                                onClick={handleLinkClick}
                                className={({ isActive }) => `
                                  w-full flex items-center px-3 py-2.5 rounded-xl transition-all duration-300
                                  ${isActive 
                                    ? 'bg-[hsl(var(--primary))] text-white font-bold shadow-md' 
                                    : 'text-[hsl(var(--foreground))] opacity-70 hover:opacity-100 hover:bg-[hsl(var(--secondary))]'}
                                `}
                            >
                                <span className="text-sm font-bold tracking-tight uppercase">{item.title}</span>
                            </NavLink>
                        )}
                        
                        {item.children && (
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${visibleChildren[item.id] ? 'max-h-[2000px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                                <div className='ml-3 pl-3 border-l-2 border-[hsl(var(--border))] space-y-1 mt-1'>
                                    {item.children.map((child) => (
                                        <NavLink 
                                          key={child.id}
                                          onClick={handleLinkClick}
                                          to={`/${child.name}`}
                                          className={({ isActive }) => `
                                            flex items-center px-4 py-2 text-sm rounded-lg transition-all duration-200
                                            ${isActive 
                                              ? 'bg-[hsl(var(--primary))] text-white font-bold shadow-md' 
                                              : 'text-[hsl(var(--foreground))] opacity-60 hover:opacity-100 hover:bg-[hsl(var(--secondary))]'}
                                          `}
                                        >
                                            {child.title}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-[hsl(var(--border))] opacity-50 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-lg"></div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold truncate">Project Alpha</span>
                    <span className="text-[10px] opacity-70">v1.2.0</span>
                  </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar
