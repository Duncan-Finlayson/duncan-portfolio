import React from 'react'
import Reveal from '../Reveal'


const Hero = () => {
  return (
<section className="relative flex flex-row
  items-center z-20 mx-auto md:gap-[37px] md:mx-10">
    <div className="flex flex-col gap-[13px] items-center md-gap[34px] md:my-[58px] md:items-start">
      <Reveal initialX={-25}>
        <h1 className="text-2xl/1 text-center font-semibold block md:text-[40px] md:text-start md:inline">
            <span className="-m1-3"> 👋 </span>
            Hey! My name is Duncan Finlayson, I am a{" "} 
            <span className="block text-[27px] highlight mt-2 md:text-[45px] md:inline md:mt-0">Software Developer</span>
        </h1>
        </Reveal>
        <Reveal initialX={-30} delay={0.2}>
        <p className="text-center text-sm mx-6 md:text-[22px] md:text-start md:mx-0">
            Based in London, Ontario
        </p> </Reveal>
        <Reveal initialX={-40} delay={0.2}>
        <a href="mailto:duncanfinlayson4@gmail.
        com" className ="self-center bg-primary text-white p-2.5 rounded flex gap2.5 items-center
         text-sm md:self-start md:text-xl/6">Contact Me! <img src="/arrow_right_icon.svg" alt="Arrow right icon"></img></a></Reveal>
    </div> {/* Plans of adding a profile picture later */}
  </section>
  )
}

export default Hero