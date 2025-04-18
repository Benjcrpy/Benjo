import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import { VscGithub } from "react-icons/vsc";
import Link from 'next/link'




const Hero = () => {

    


  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[5vh] bg-cover bg-center" id='Home'>
      <Particle/>
      <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
      <div>
            <h1 className='text-[35px] md:text-[50px] text-white font-bold font-secondary'> HI, I'M <span className='text-red-800'> Anthony </span></h1>
             <TextEffect/>
            <p className='mt-[2rem] text-[20px] text-slate-200 font-secondary'>
            Hi! I’am Anthony or you can call me Benj, Benjo a Web d
            eveloper and NFT Developer. 
            I worked with my team before as a fullstack developer. 
            I also joined blockchain development like NFT Art, 
            NFT utilities and Token Creator.
            </p>
            <div className="mt-[2rem] flex-col space-y-6 sm:flex sm:flex-row items-center sm:space-x-6">
            <a download href='./CV-Agapay.pdf'>
              <button className='px-[2rem] hover:bg-red-600 transition-all duration-200 py-[1rem] text-[18px]
              font-bold uppercase bg-cyan-400 text-black flex items-center space-x-2 font-secondary'>
                <p> Download CV </p>
                <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
              </button>
            </a>
              <Link href="https://github.com/Benjcrpy" className='flex items-center space-x-2 py-[1rem]'>
              <VscGithub className='w-[4rem] h-[4rem] hover:text-red-600 transition-all duration-200 text-cyan-400' />
              <p className='text-[20px] font-semibold text-white'> GitHub </p>
              </Link>
            </div>
          </div>
          <div className='w-[500px] hidden bg-red-500 relative lg:flex items-center rounded-full h-[500px]'>
            <Image src="/images/1248-dead.png" alt="user" layout="fill" className="object-cover rounded-full"/>
          </div>
      </div>
    </div>
  )
}

export default Hero
