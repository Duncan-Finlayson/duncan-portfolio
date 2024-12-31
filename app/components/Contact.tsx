import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return <section id="contact" 
  className="card relative items-center mx-6 flex flex-col
  px-[33px] py-[27px] z-30 gap-[54px]
   md:gap-[35px] mb-[67px] md:mb-[42px]"
   >
    <div className="flex flex-col md:flex-row gap-5
    md:justify-between md:w-full">
        <h2 className="font-semibold text-[22px] md:text-[40px]
        md:max-w-[462px]">Open to feedback about the site, career opportunites, or to just saying hi!</h2>
        <div className="flex flex-col gap-5 items-center md:items-end">
            <a href="mailto:duncanfinlayson4@gmail.com" className="self-center md:self-start bg-primary text-white
            p-2.5 rounded flex gap-2.5 items-center text-lg
            md:text-xl/l font-normal">
                Send Message <img src="/mail_icon.svg" alt="Mail icon"></img>
            </a>
            <div className="flex flex-row gap-1">
                <a href="https://github.com/Duncan-Finlayson" className="contact-button">
                    <Image src ="/github_logo_dark.svg"
                    alt="Github icon"
                    width={16}
                    height={17} 
                    className="hidden dark:block"/>
                    <Image src ="/github_logo.svg"
                    alt="Github icon"
                    width={16}
                    height={17} 
                    className="dark:hidden"/>
                </a> {/* Add LinkedIn Later */}
                
            </div>
        </div>
    </div>
    <small>Copyright &copy; Duncan Finlayson 2024</small>
   </section>
}

export default Contact