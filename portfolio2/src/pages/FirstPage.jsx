/* eslint-disable react/no-unescaped-entities */
//import React from 'react'
import myimg from "../assets/myimg.webp"

const FirstPage = () => {
  return (
    <div className="h-full">
<main className="h-full w-full bg-secondary page-shadow">
<div className="px-12 py-10 space-y-6">
    <div>
        <img src={myimg}  alt="" className="w-[300px] mx-auto "/>
    </div>
    <div>
      <div className="space-y-2">
        <p className="uppercase">Hello,</p>
        <p className="text-2xl md:text-4xl font-bold text-black/80">I'm Faith</p>
        <p className="text-black/75 text-left">A Frontend Developer</p>
        <p className="text-black/75"> I am dedicated to crafting high-performance, scalable frontend solutions that blend creativity with functionality. I build user-focused interfaces using clean, responsive, and optimized code, ensuring fast load times and seamless experiences across all devices. I also implement performance optimization techniques and testing to deliver reliable, production-ready applications. Let’s build something amazing together.</p>
      
      <a className="inline-block primary-btn" href="mailto:faithodongo9@gmail.com">Hire Me</a>
      </div>
    </div>
</div>
</main>
    </div>
  )
}

export default FirstPage