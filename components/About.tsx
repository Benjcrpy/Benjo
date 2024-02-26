import React from 'react'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'



const About = () => {

 


  return (
    <div className='bg-slate-900 pb-[3rem] pt-[4rem] md:pt-[8rem]' id='About'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
        <div>
            <h1 className='text-[40px] font-bold uppercase text-red-800 mb-[1rem] font-secondary'>
                About Me
            </h1>
            <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white font-thirdcary'>
                Transforming <span className='text-yellow-500'>Vision</span>
            </h2>
            <div className='mb-[3rem] flex items-center md:space-x-10'>
              <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
              <p className='text-[19px] text-slate-100 w-[80%] font-thirdcary'>
              I’m Anthony currently taking Cybersecurity course in our university. I'm on 4th year and will be graduating 
              this year on aug 2024, before thatI also take CIT course and attended Seminar, Webinar for 
              my courses. You can download my CV below!
              </p>
            </div>
            <a download href='./CV-Agapay.pdf'>
              <button className='px-[2rem] hover:bg-red-600 transition-all duration-200 py-[1rem] text-[18px]
              font-bold uppercase bg-cyan-400 text-black flex items-center space-x-2 font-secondary'>
                <p> Download CV </p>
                <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
              </button>
            </a>
            
        </div>
        <div className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
            <Image 
            src="/images/Prog.jpg" 
            alt='user' 
            layout='fill' 
            objectFit='contain' 
            className='relative z-[11] w-[100%] h-[100%] object-contain'
            />
            <div className='absolute w-[100%] h-[65%] z-[10] bg-orange-900 top-[2rem] right-[-2rem]'>

            </div>
        </div>    
      </div>
    </div>
  )
}

export default About