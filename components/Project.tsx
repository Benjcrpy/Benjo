import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div className='bg-slate-950 pt-[4rem] md:pt-[8rem] pb-[1rem]' id='Project'>
     <h1 className='heading font-fourth'>
      Pro<span className='text-yellow-400'>Jects</span>
     </h1>
     <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
        <div className='transform hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
         <Image 
         src="/images/Eco.png" 
         alt="Ecom" 
         layout="fill" 
         className="object-contain"/>
        </div>
        <div className='transform hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
         <Image 
         src="/images/buy.png" 
         alt="Ecom" 
         layout="fill" 
         className="object-contain"/>
        </div>
        <div className='transform  hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
         <Image 
         src="/images/care.png" 
         alt="Ecom" 
         layout="fill" 
         className="object-contain"/>
        </div>
        <div className='transform  hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
         <Image 
         src="/images/Landing.png" 
         alt="Ecom" 
         layout="fill" 
         className="object-contain"/>
        </div>
        <div className='transform  hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
         <Image 
         src="/images/nft2.png" 
         alt="Ecom" 
         layout="fill" 
         className="object-contain"/>
        </div>
        <div className='transform hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
         <Image 
         src="/images/NFT.png" 
         alt="Ecom" 
         layout="fill" 
         className="object-contain"/>
        </div>
     </div>
    </div>
  )
}

export default Project