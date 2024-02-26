import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Service = () => {
  return (
    <div className='bg-black pt-[4rem] md:pt-[8rem] pb-[5rem]' id='Service'>
      <p className='heading'>
        My <span className='text-red-800'> Service Sir/Mam!</span>
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
        <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
            <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-slate-300'/>
            <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] font-secondary text-yellow-300'>
                Web Development
            </h1>
            <p className='font-fourth text-[15px] text-white'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Molestiae alias magnam placeat cumque qui maiores dolores. 
                Corporis fuga inventore, praesentium sunt vitae doloribus 
                ducimus illum est doloremque minima, velit ut!
            </p>
        </div>
        <div className='bg-orange-500 hover:scale-110 transform transition-all duration-300  uppercase font-semibold text-center p-[2rem]'>
            <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-slate-300'/>
            <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] font-secondary text-black'>
                Blockchain
            </h1>
            <p className='font-fourth text-[15px] text-white'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Molestiae alias magnam placeat cumque qui maiores dolores. 
                Corporis fuga inventore, praesentium sunt vitae doloribus 
                ducimus illum est doloremque minima, velit ut!
            </p>
        </div>
        <div className='bg-blue-500 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
            <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-slate-300'/>
            <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] font-secondary text-yellow-300'>
                NFT Developer
            </h1>
            <p className='font-fourth text-[15px] text-white'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Molestiae alias magnam placeat cumque qui maiores dolores. 
                Corporis fuga inventore, praesentium sunt vitae doloribus 
                ducimus illum est doloremque minima, velit ut!
            </p>
        </div>
      </div>
    </div>
  )
}

export default Service
