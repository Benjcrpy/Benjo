import React from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-scroll/modules'

interface Props {
    nav:boolean;
    closeNav: () => void;
}

const MobileNav = ({nav, closeNav}:Props) => {


    const navAnimation = nav ? 'translate-x-0' : 'translate-x-[-100%]';   

  return (
    <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100000000] bg-slate-900`}
    >
    
    <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
      <Link onClick={closeNav} activeClass='active' to="Home" spy={true} smooth={true} offset={50} duration={500} className='nav-link-mobile'>Home</Link>
      <Link onClick={closeNav} activeClass='active' to="About" spy={true} smooth={true} offset={50} duration={500} className='nav-link-mobile'>About</Link>
      <Link onClick={closeNav} activeClass='active' to="Service" spy={true} smooth={true} offset={50} duration={500} className='nav-link-mobile'>Service</Link>
      <Link onClick={closeNav} activeClass='active' to="Projects" spy={true} smooth={true} offset={50} duration={500} className='nav-link-mobile'>Project</Link>
      <Link onClick={closeNav} activeClass='active' to="Contact" spy={true} smooth={true} offset={50} duration={500} className='nav-link-mobile'>Contact</Link>
     </div>    
     <div 
        onClick={closeNav}
        className='absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-2[rem] text-red-600'>
        <XMarkIcon/>
     </div>
    </div>
  )
}

export default MobileNav