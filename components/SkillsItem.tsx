import React from 'react'

interface Props {
    title:string;
    year:string;
}

const SkillsItem = ({ title, year }:Props) => {
  return (
    <div className='mb-[4rem] md:mb-[8rem]'>
      <span className='px-[2rem] text-yellow-500 py-[0.9rem] font-bold text-[18px] border-[2px] border-yellow-600 font-fourth'>
        {year}
      </span>
      <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white font-fourth'>
        {title}
      </h1>  
    </div>
  )
}

export default SkillsItem
