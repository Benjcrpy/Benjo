import React from 'react'
import MapIcon from '@heroicons/react/20/solid/MapIcon'
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import {
   TiSocialFacebook,
   TiSocialLinkedin,
   TiSocialTwitter,
   TiSocialYoutube,
   TiSocialInstagram,
  
 } from "react-icons/ti";


const Footer = () => {
  return (
    <div className='pt-[8rem] pb-[4rem] bg-slate-800'>
     <div className='grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]'>
      <div className='flex items-center space-x-6'>
        <div className='md:w-[6.5rem] md:h-[6.5] w-[5rem] flex items-center justify-center rounded-full bg-cyan-300'>
        <MapIcon className='md:w-[4rem] md:h-[4rem] w-[2rem] h-[2rem] text-black'/>
        </div>
        <div>
         <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white font-fourth'>
            Address
         </h1>
         <p className='text-[17px] w-[90%] text-white opacity-60'>
            Manila City, Philippines
         </p>
        </div>
      </div>
      <div className='flex items-center space-x-6'>
        <div className='md:w-[6.5rem] md:h-[6.5] w-[5rem] flex items-center justify-center rounded-full bg-cyan-300'>
        <HiOutlineDevicePhoneMobile className='md:w-[4rem] md:h-[4rem] w-[2rem] h-[2rem] text-black'/>
        </div>
        <div>
         <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white font-fourth'>
            Cellphone Number
         </h1>
         <p className='text-[17px] w-[90%] text-white opacity-60'>
            63+ 9158593114
         </p>
        </div>
      </div>
      <div className='flex items-center space-x-6'>
        <div className='md:w-[6.5rem] md:h-[6.5] w-[5rem] flex items-center justify-center rounded-full bg-cyan-300'>
        <MdEmail className='md:w-[4rem] md:h-[4rem] w-[2rem] h-[2rem] text-black'/>
        </div>
        <div>
         <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white font-fourth'>
            Email Address
         </h1>
         <p className='text-[17px] w-[90%] text-white opacity-60'>
            AnthonyAgapay709@gmail.com
         </p>
        </div>
      </div>
     </div>
     <div className='w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center'>
      <div className='text-[18px] mb-[2rem] md:mb-0 text-white opacity-50'>
         @{new Date().getFullYear()} Benjo. All right reseved.
      </div>
      <div className='flex items-center  space-x-20'>
      <a href="https://www.facebook.com/anthony.agapay.3/" className='p-2 cursor-pointer text-white inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl 
   hover:text-gray-100 hover:bg-teal-500 duration-100'>
              <TiSocialFacebook />
      </a>
      <a href="https://twitter.com/Benj_nft" className='p-2 cursor-pointer text-white inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl 
   hover:text-gray-100 hover:bg-teal-500 duration-100'>
              <TiSocialTwitter />
      </a>
      <a href="https://www.instagram.com/isthat_benjo/" className='p-2 cursor-pointer text-white inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl 
   hover:text-gray-100 hover:bg-teal-500 duration-100'>
              <TiSocialInstagram />
      </a>
      </div>
     </div>
    </div>
  )
}

export default Footer


            