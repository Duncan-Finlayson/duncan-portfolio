import Image from 'next/image'
import React from 'react'


const TopBackground = () => {
  return <> 
  <div className="absolute w-full max-w-[360px] 
  md:max-w-screen-lg h-[285px] md:h-[656px]
    top-[188px] md:top-11 left-1/2 -translate-x-1/2
    md:overflow-x-hidden z-10">
    <div className="w-full h-full relative"></div>
  </div>
  <img src="/top_highlight.svg" alt="Top dark mode background highlight" 
  width = {809}
  height = {877}
  className="absolute top-[-515px] hidden dark:md:block left-1/2 -translate-x-1/2" 
  />
    <img src="/top_highlight_mobile.svg" alt="Top dark mode background highlight for mobile" 
  width = {429}
  height = {465}
  className="absolute top-[-229px] hidden dark:block dark:md:hidden left-1/2 -translate-x-1/2" 
  />
  </>
  
}

export default TopBackground