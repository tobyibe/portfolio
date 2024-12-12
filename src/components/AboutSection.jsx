//AboutSection.jsx
import React,{useEffect,useRef} from 'react'
import { ReactTyped } from 'react-typed'
import pic from '../assets/profile pic.jpg'
import { motion } from "framer-motion"
const AboutSection = () => {
  return (
    <div id='home' >
      <div className='hidden sm:flex justify-between py-10 mx-5'>
        <div>
            <div>
              <ReactTyped className= 'text-5xl pt-4 md:pt-8 font-extrabold text-slate-700'strings={["Hey👋, my name is Toby and I'm an aspiring web developer and software engineer"]} typeSpeed={15} backSpeed={15} />
            </div>
            <p className='my-8 text-lg' >Hello, I'm Tobechukwu Charles-Ibe (Toby for short!). I am a third-year Computer Science student at the University of St Andrews, the No. 1 ranked university in the UK according to The Guardian. I am passionate about leveraging technology to solve real-world problems, I have experience coding in Java, Python and C++, as well as proficiency in web development using Tailwind CSS and React. Additionally, I have hands-on experience with web scraping techniques utilizing JavaScript, particularly with Puppeteer. Eager to contribute my skills and knowledge to innovative projects and collaborations in the tech industry.</p>
        </div>
        <img src={pic} alt="My Image" className='rounded-full w-80 h-80 ml-10 sm:mr-0 md:mr-24 shadow-2xl' />
      </div>

      <div className='sm:hidden flex flex-col items-center space-y-5 '>
        <img src={pic} alt="My Image" className='rounded-full w-60 shadow-2xl' />
        <div className='px-4 text-2xl pt-4 h-28 text-center'>
          <ReactTyped className= 'text-2xl font-extrabold text-slate-700'strings={["Hey👋, my name is Toby and I'm an aspiring web developer and software engineer"]} typeSpeed={15} backSpeed={15} />
        </div>
        
        <motion.h1 className='m-8' initial={{y: +80,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:"2",delay:"2.5"}}>
        Hello, I'm Tobechukwu Charles-Ibe (Toby for short!). I am a third-year Computer Science student at the University of St Andrews, the No. 1 ranked university in the UK according to The Guardian. I am passionate about leveraging technology to solve real-world problems, I have experience coding in Java, Python and C++, as well as proficiency in web development using Tailwind CSS and React. Additionally, I have hands-on experience with web scraping techniques utilizing JavaScript, particularly with Puppeteer. Eager to contribute my skills and knowledge to innovative projects and collaborations in the tech industry.
        </motion.h1>
      </div>
    </div>
  )
}

export default AboutSection