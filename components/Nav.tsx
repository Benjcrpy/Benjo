import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'

interface Props {
  openNav: () => void;
}

const Nav = ({openNav}:Props) => {
  return (
    <div className='w-[100%] fixed z-[10000] top-0 h-[12vh] bg-slate-800 shadow-md'>
      <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
        <h1 className='flex-[0.6]  text-[25] text-white font-bold'>
               BENJ
               <span className='text-yellow-300'>DEV</span> 
        </h1>
        <div className='nav-link'>Home</div>
        <div className='nav-link'>Services</div>
        <div className='nav-link'>About</div>
        <div className='nav-link'>Project</div>
        <div className='nav-link'>Blog</div>
        <div className='nav-link'>Contact</div>
        <div onClick={openNav}>
          <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-red-600'/>
        </div>
      </div>
    </div>
  )
}

export default Nav
