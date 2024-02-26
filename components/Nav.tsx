import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'
import { Link } from 'react-scroll/modules'

interface Props {
  openNav: () => void;
}

const Nav = ({openNav}:Props) => {
  return (
    <div className='w-[100%] fixed z-[10000] top-0 h-[10vh] bg-slate-800 shadow-md'>
      <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
        <h1 className='flex-[0.6]  text-[35px] text-white font-bold'>
               BENJ
               <span className='text-yellow-300'>DEV</span> 
        </h1>
        <Link activeClass='active' to="Home" spy={true} smooth={true} offset={50} duration={500} className='nav-link font-thirdcary'>Home</Link>
        <Link activeClass='active' to="About" spy={true} smooth={true} offset={50} duration={500} className='nav-link font-thirdcary'>About</Link>
        <Link activeClass='active' to="Service" spy={true} smooth={true} offset={50} duration={500} className='nav-link font-thirdcary'>Service</Link>
        <Link activeClass='active' to="Project" spy={true} smooth={true} offset={50} duration={500} className='nav-link font-thirdcary'>Project</Link>
        <Link activeClass='active' to="Contact" spy={true} smooth={true} offset={50} duration={500} className='nav-link font-thirdcary'>Contact</Link>
        <div onClick={openNav}>
          <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-red-600'/>
        </div>
      </div>
    </div>
  )
}

export default Nav
