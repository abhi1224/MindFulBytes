import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo/MindFulBytes.png'
import arrow from '../../assets/MindFulBytes-assests/arrow.svg'
import Sidebar from '../../components/admin/Sidebar'

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-32 border-b border-gray-200">
        <img 
          className='mix-blend-multiply w-32 sm:w-68 cursor-pointer'
          onClick={() => navigate('/')}
          src={logo} 
          alt="Logo" 
        />
        <button 
          className="flex items-center gap-2 text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer"
          >
            Logout
             <img className='w-3' src={arrow} alt="arrow" />
        </button>
      </div>

      <div className="flex h-[calc(100vh-70px)]">
        <Sidebar />
        <Outlet />
      </div>
    </>
  )
}

export default Layout