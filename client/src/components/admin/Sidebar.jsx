import React from 'react'
import { NavLink } from 'react-router-dom'
import home_icon from '../../assets/MindFulBytes-assests/home_icon.svg'
import add_icon from '../../assets/MindFulBytes-assests/add_icon.svg'
import list_icon from '../../assets/MindFulBytes-assests/list_icon.svg'
import comment_icon from '../../assets/MindFulBytes-assests/comment_icon.svg'

const Sidebar = () => {
  return (
    <>
        <div className="flex flex-col border-r border-gray-200 min-h-full pt-6">
            <NavLink 
                end={true}
                to='/admin'
                className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && 'bg-primary/10 border-r-4 border-primary'}`}
                >
                <img 
                    className='min-w-4 w-5'    
                    src={home_icon}     
                    alt="Home Icon" 
                />
                <p className="hidden md:inline-block">Dashboard</p>

            </NavLink>

            <NavLink 
                to='/admin/addBlog'
                className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && 'bg-primary/10 border-r-4 border-primary'}`}
                >
                <img 
                    className='min-w-4 w-5'   
                    src={add_icon}     
                    alt="Home Icon" 
                />
                <p className="hidden md:inline-block">Add Blog</p>

            </NavLink>

            <NavLink 
                to='/admin/listBlog'
                className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && 'bg-primary/10 border-r-4 border-primary'}`}
                >
                <img 
                    className='min-w-4 w-5'    
                    src={list_icon}     
                    alt="Home Icon" 
                />
                <p className="hidden md:inline-block">Blog List</p>

            </NavLink>

            <NavLink 
                to='/admin/comments'
                className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && 'bg-primary/10 border-r-4 border-primary'}`}
                >
                <img 
                    className='min-w-4 w-5'   
                    src={comment_icon}     
                    alt="Home Icon" 
                />
                <p className="hidden md:inline-block">Comments</p>

            </NavLink>
        </div>
    </>
  )
}

export default Sidebar