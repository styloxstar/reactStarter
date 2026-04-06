import React from 'react'
import { sidebarJson } from '../../configurations/uiJson'
import { HiChevronRight, HiChevronDown, HiXMark } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import { useSidebar } from '../../context/SidebarContext';


const Sidebar = ({ isMobile }) => {
    const { closeSidebar } = useSidebar();
    // Track visibility for each item by id
    const [visibleChildren, setVisibleChildren] = React.useState({});

    const toggleChildren = (id) => {
        setVisibleChildren((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <main className='text-left h-full flex flex-col'>
            {isMobile && (
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[hsl(var(--border))]">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--foreground))]">
                        Menu
                    </span>
                    <button 
                        onClick={closeSidebar}
                        className="p-2 rounded-xl hover:bg-[hsl(var(--accent))] transition-colors"
                    >
                        <HiXMark className="w-6 h-6 text-[hsl(var(--foreground))]" />
                    </button>
                </div>
            )}

            <div className='overflow-y-auto flex-1 custom-scrollbar space-y-2'>
                {sidebarJson.map((item) => (
                    <div key={item.id} className="group">
                        <div className="flex items-center justify-between p-2 rounded-xl hover:bg-[hsl(var(--accent))] transition-all duration-200">
                            <NavLink 
                                to={item.name}
                                onClick={() => isMobile && closeSidebar()}
                                className={({ isActive }) => `
                                    flex-1 text-sm font-semibold transition-colors
                                    ${isActive ? 'text-[hsl(var(--primary))]' : 'text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]'}
                                `}
                            >
                                {item.title}
                            </NavLink>
                            
                            {item.children && (
                                <button
                                    onClick={() => toggleChildren(item.id)}
                                    className={`p-1 rounded-lg hover:bg-[hsl(var(--muted))] transition-transform duration-300 ${visibleChildren[item.id] ? 'rotate-180' : ''}`}
                                >
                                    <HiChevronDown className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
                                </button>
                            )}
                        </div>
                        
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${visibleChildren[item.id] ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                            {item.children && childrenComponent(item.children, isMobile, closeSidebar)}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}


const childrenComponent = (children, isMobile, closeSidebar) => {
    return (
        <div className='ml-4 pl-4 border-l border-[hsl(var(--border))] space-y-1'>
            {children.map((child) => (
                <NavLink 
                    key={child.id} 
                    to={child.name}
                    onClick={() => isMobile && closeSidebar()}
                    className={({ isActive }) => `
                        block p-2 text-xs font-medium rounded-lg transition-all
                        ${isActive 
                            ? 'bg-[hsl(var(--primary))] text-white shadow-md shadow-blue-500/10' 
                            : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent))]'}
                    `}
                >
                    {child.title}
                </NavLink>
            ))}
        </div>
    )
}

export default Sidebar


