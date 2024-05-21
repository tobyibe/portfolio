import React, {useState} from 'react'
import { FaGithub, FaHammer } from "react-icons/fa";
import { CiMenuBurger} from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { MdOutlineContactMail, MdOutlineHome } from "react-icons/md";
import { FiInfo } from "react-icons/fi";
import { LuGithub,LuHammer } from "react-icons/lu";
import { Link } from 'react-scroll';
import {Link as RouterLink} from 'react-router-dom'
const NavBar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
      setNav(!nav)
  }
  return (
    <div className='sticky top-5 z-50'>
        <div className='hidden opacity-100 bg-slate-100 sm:flex mx-auto justify-center space-x-10 p-5 shadow-2xl rounded-full hover:bg-slate-200  transition-all max-w-fit text-slate-700 '>
            <a href='https://github.com/tobyibe'>
                <FaGithub size="2rem" className='text-slate-700 hover:text-slate-800 transition-all cursor-pointer'/>    
            </a>
               
                <Link to='home' spy={true} smooth={true} offset={-100} duration={500} className=' cursor-pointer text-2xl font-bold hover:text-slate-900  transition-all'>About Me</Link>
                <Link to='projects' spy={true} smooth={true} offset={-100} duration={500} className=' cursor-pointer text-2xl font-bold hover:text-slate-900'>My Projects</Link>
                <RouterLink to='/contact' className=' cursor-pointer text-2xl font-bold hover:text-slate-900'>Contact Me</RouterLink>            
        </div>
        <div  className='sm:hidden flex justify-end cursor-pointer'>
          {!nav ? <IoMdClose onClick={handleNav} size="3rem" className='mr-5 bg-slate-100 rounded-lg border border-slate-200  shadow-2xl'/> : <CiMenuBurger onClick={handleNav} size="3rem" className='mr-5 bg-slate-100 rounded-lg border border-slate-200  shadow-2xl'/>}
        </div>
        <div className={!nav? "sm:hidden flex flex-col space-y-2  rounded-lg fixed top-0 left-0 border-2 border-slate-200 p-5 m-5 bg-slate-100 transition-all duration-500" : "sm:hidden flex flex-col space-y-2  rounded-lg fixed top-0 left-[-100%] border-2 border-slate-200 p-5 m-5 bg-slate-100 transition-all duration-500"}>      
          <a href='https://github.com/tobyibe'>
            <LuGithub size="2rem"  className='text-slate-700 hover:text-slate-800 transition-all cursor-pointer'/>    
          </a>
                              
          <Link Link to='home' spy={true} smooth={true} offset={-100} duration={500}>
            <FiInfo size="2rem" className='text-slate-700 hover:text-slate-800 transition-all cursor-pointer'/>          
          </Link>

          <Link Link to='smallprojects' spy={true} smooth={true} offset={0} duration={500}>
            <LuHammer size="2rem" className='text-slate-700 hover:text-slate-800 transition-all cursor-pointer'/>
          </Link>
          
          <RouterLink to='/contact'>
            <MdOutlineContactMail size="2rem" className='text-slate-700 hover:text-slate-800 transition-all cursor-pointer'/>          
          </RouterLink>
          

        </div>
    </div>


  )
}

export default NavBar