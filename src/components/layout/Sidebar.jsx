import React from 'react'
import { sidebarJson } from '../../configurations/uiJson'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    // Track visibility for each item by id
    const [visibleChildren, setVisibleChildren] = React.useState({});

    const toggleChildren = (id) => {
        setVisibleChildren((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <main className='text-left overflow-y-auto'>
            {
                sidebarJson.map((item) => (
                    <div key={item.id}>
                        <div className='flex flex-row items-center p-1 hover:bg-gray-100 rounded-lg'>
                            <div>
                                <h2 className='text-lg font-semibold mb-2'><NavLink to={item.name}>{item.title}</NavLink></h2>
                            </div>
                            {item.children && (
                                <div
                                    onClick={() => toggleChildren(item.id)}
                                    className={`transition-all ease-in-out cursor-pointer ml-2 hover:text-gray-600 ${visibleChildren[item.id] ? 'rotate-90' : ''}`}
                                    style={{ display: 'flex', alignItems: 'center' }}
                                >
                                    <MdOutlineKeyboardDoubleArrowRight
                                        className='text-xl mt-[-0.4rem]'
                                        style={{ transition: 'transform 0.45s ease-in-out', transform: visibleChildren[item.id] ? 'rotate(0deg)' : 'rotate(0deg)' }}
                                    />
                                </div>
                            )}
                        </div>
                        <div>
                            {item.children && visibleChildren[item.id] ? childrenComponent(item.children) : null}
                        </div>
                    </div>
                ))
            }
        </main>
    );
}


const childrenComponent = (children) => {
    return (
        <div className='ml-5 text-gray-600 '>
            {children.map((child) => (
                <div key={child.id} className='mb-1'>
                    <NavLink className="text-gray-600 hover:text-slate-800 hover:font-weight-bolder" to={child.name}>{child.title}</NavLink>
                </div>
            ))}
        </div>
    )
}
export default Sidebar
