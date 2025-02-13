import React from 'react'
import Reveal from '../Reveal'
import Image from 'next/image'


const Hero = () => {
  return (
<section className="relative flex flex-row
  items-center z-20 mx-auto md:gap-[37px] md:mx-10">
    <div className="flex flex-col gap-[13px] items-center md-gap[34px] md:my-[58px] md:items-start">
      <Reveal initialX={-25}>
        <h1 className="text-2xl/1 text-center font-semibold block md:text-[40px] md:text-start md:inline">
            <span className="-m1-3"> </span>
            Hey! My name is Duncan Finlayson, I am a{" "} 
            <span className="block text-[27px] highlight mt-2 md:text-[45px] md:inline md:mt-0">Software Developer</span>
        </h1>
        </Reveal>
        <Reveal initialX={-30} delay={0.2}>
        <p className="text-center text-sm mx-6 md:text-[22px] md:text-start md:mx-0">
            Based in London, Ontario
        </p> </Reveal>
        <Reveal initialX={-40} delay={0.2}>
  <div className="flex flex-row gap-4 items-center justify-center md:justify-start">
    {/* Contact Me Button */}
        <a
      href="docs/Duncan_Finlayson_Resume.pdf" target="_blank"
      className="bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-sm md:text-xl/6"
    >
      Resume
      <img src="/mail_icon.svg" alt="Arrow right icon" />
    </a>
    {/* Contact Me Button */}
    <a
      href="mailto:duncanfinlayson4@gmail.com" target="_blank"
      className="bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-sm md:text-xl/6"
    >
      Contact
      <img src="/arrow_right_icon.svg" alt="Arrow right icon" />
    </a>

    {/* GitHub Button */}
    <a
      href="https://github.com/Duncan-Finlayson" target="_blank"
      className="bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-sm md:text-xl/6"
    >
      <Image
        src="/github_logo_dark.svg"
        alt="GitHub icon"
        width={20}
        height={20}
      />
    </a>
        {/* Linkedin Button */}
        <a
      href="https://www.linkedin.com/in/duncan-finlayson/" target="_blank"
      className="bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-sm md:text-xl/6"
    >
      <Image
        src="/linkedIcon.png"
        alt="Linkedin"
        width={20}
        height={20}
      />
    </a>
  </div>
</Reveal>
         
    </div>
    <div className="group">
      <Reveal>
      <Image src="/profile_light_purple.png"
      alt="Light purple rectangle" width={372}
      height={536} className="hidden md:block w-[372px] h-[555px]
      absolute right-0 -z-10 group-hover:scale-[102%] group-hover:-rotate-2 ease-in-out duration-300"/>
      <Image src="/profile_dark_purple.png"
      alt="Dark purple rectangle" width={372}
      height={536} className="hidden md:block w-[372px] h-[555px]
      absolute right-0 -z-10 group-hover:scale-[102%] group-hover:rotate-2 ease-in-out duration-300"/>
    <img src="Final.png"
      alt="Final Profile"
      width="357"
      height="536"
      className="hidden md:block min-w-[357px] h-[536px]
     -z-10 mr-[7.7px] my-[6.5px] group-hover:scale-[102%] group-hover:
     ease-in-out duration-300" loading="lazy" />
      </Reveal>
    </div>
  </section>
  )
}

export default Hero