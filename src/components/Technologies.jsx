import React,{useEffect} from 'react'
import react from '../assets/react.jpg'
import python from '../assets/python.jpg'
import java from '../assets/java.jpg'
import tailwind from '../assets/taiwlind.jpg'
import javascript from '../assets/js.jpg'
import {motion, animate } from 'framer-motion'
import { delay } from 'framer-motion/dom'

const fadeIn = {
  initial: {
    opacity:0,
    y:20,
  },
  animate: {
    opacity:1,
    y:0,
    transition: {
      staggerChildren:0.3,

    }
  }
};
const Technologies = () => {
  return (
    <div className='flex flex-col  mb-20'>
      <p className='text-2xl text-slate-700 font-bold px-4 my-5 text-center' >Here are some of the technologies that I have experience working with</p>

      <motion.div className=' flex justify-around' variants={fadeIn} initial="initial" whileInView="animate" viewport={{once:true}} >
        <motion.div className=' text-center' variants={fadeIn}>
          <img src={java} className='sm:w-20 sm:h-20 w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-all'></img>
          <p className=' text-lg font-bold text-slate-800'>Java</p>      
        </motion.div>

        <motion.div className=' text-center'  variants={fadeIn}>
          <img src={react} className='sm:w-20 sm:h-20 w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-all'></img>
          <p className=' text-lg font-bold text-slate-800'>React</p>      
        </motion.div>

        <motion.div className=' text-center'  variants={fadeIn}>
          <img src={python} className='sm:w-20 sm:h-20 w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-all'></img>
          <p className=' text-lg font-bold text-slate-800'>Python</p>      
        </motion.div>

        <motion.div className=' items-center text-center'  variants={fadeIn}>
          <img src={tailwind} className='sm:w-20 sm:h-20 w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-all'></img>
          <p className=' text-lg font-bold text-slate-800'>Tailwind</p>
          <p className=' text-lg font-bold text-slate-800'>CSS</p>      
        </motion.div>

        <motion.div className=' text-center' variants={fadeIn}>
          <img src={javascript} className='sm:w-20 sm:h-20 w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-all'></img>
          <p className=' text-lg font-bold text-slate-800'>Javascript</p>      
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies