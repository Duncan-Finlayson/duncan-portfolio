import React from 'react'
import skills from "@/data/Skills.json"
import SectionContainer from '../Section/SectionContainer'
import SectionHeader from '../Section/SectionHeader'
import Skill from "./Skill"

const Skills = () => {
  return <SectionContainer id="skills">
    <div className="section-contents mx-[22px] md:mx-[116px]">
        <SectionHeader plainText="These are my" highlightText="Current Technologies" />
        <div className="card w-full px-[33px] py-[27px] flex flex-wrap md:flex-nowrap 
        flex-col md:flex-row justify-center items-center
        gap-[19px] md:gap-[33px]">
            {skills.map((Skills, id) => (
                <Skill key={id} name={Skills.name} 
                icon={Skills.icon}/>
                ))
            }

        </div>
    </div>
    <>
    </>
    
  </SectionContainer>
}

export default Skills