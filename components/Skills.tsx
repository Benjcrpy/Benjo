import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-slate-900'>
      <h1 className='heading text-yellow-500'>
        Education <span className='text-white'> & </span> <span className='text-red-700'> Skill </span>
      </h1>
      <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
        <div>
            <SkillsItem title="CIT Senior High School" year="2018-2019"/>
            <SkillsItem title="NFT-Developer" year="2021-2022"/>
            <SkillsLanguage
            skill1="React Js"
            skill2="HTML"
            skill3="TailWind Css"
            level1="w-[43%]"
            level2="w-[70%]"
            level3="w-[50%]"
            />
        </div>
        <div>
        <SkillsItem title="Cybersecurity College Year" year="2021-2024"/>
            <SkillsItem title="Web Developer" year="2021-2024"/>
            <SkillsLanguage
            skill1="CSS"
            skill2="JavaScript"
            skill3="TypeScript"
            level1="w-[80%]"
            level2="w-[55%]"
            level3="w-[40%]"
            />
        </div>
      </div>
    </div>
  )
}

export default Skills
