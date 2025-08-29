import React from 'react'
import logo from '../assets/logo/MindFulBytes.png'
import {Link, useNavigate} from 'react-router-dom'
import arrow from '../assets/MindFulBytes-assests/arrow.svg'

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className='flex justify-between items-center w-full h-20 px-8 py-5 shadow-lg sm:px-20 xl:px-32'>
        <div className="logo">
          <Link 
            to='/'
            >
              <img 
                className='mix-blend-multiply w-32 sm:w-68 coursor-pointer'
                src={logo}  
                alt="Logo"  
              />
            </Link>
        </div>

        <div className="login-button">
          <button 
            onClick={() => navigate('/admin')}
            className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5 transition hover:bg-primary/80'
            >
              Login
              <img className='w-3' src={arrow} alt="arrow" />
          </button>
          
        </div>
      </nav>
    </>
  )
}

export default Navbar