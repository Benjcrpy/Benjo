import React from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'


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
      <div className='nav-link-mobile'>Home</div>
      <div className='nav-link-mobile'>Services</div>
      <div className='nav-link-mobile'>About</div>
      <div className='nav-link-mobile'>Project</div>
      <div className='nav-link-mobile'>Blog</div>
      <div className='nav-link-mobile'>Contact</div>
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