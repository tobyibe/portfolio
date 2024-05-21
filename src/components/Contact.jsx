import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
const Contact = () => {
  return (
    <div className=' mt-20 bg-slate-200 p-10 flex justify-around shadow-2xl rounded-lg text-slate-600  transition-all font-bold text-lg'>
        <a href="https://github.com/tobyibe" className=' transition-all hover:text-slate-800'>GitHub</a>
        
        <a href='https://uk.linkedin.com/in/toby-ibe-57743321b' className=' transition-all hover:text-slate-800'>LinkedIn</a>

        <a href="mailto:tci1@st-andrews.ac.uk" className=' transition-all hover:text-slate-800'>E-mail</a>
        <RouterLink to='/contact' className=' transition-all hover:text-slate-800'>Contact Me</RouterLink>

    </div>
  )
}

export default Contact