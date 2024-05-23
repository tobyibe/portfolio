
import React, { useState,useEffect } from 'react'
import pic from '../assets/portfolio image.jpg'
import { motion,useAnimation } from "framer-motion"
import fifa from '../assets/fifa.jpg'
import eliza from '../assets/eliza.png'
import ytmp3 from '../assets/ytmp3.png'
import { Link } from 'react-scroll'
import { FaLink } from "react-icons/fa6";
const Projects = () => {
  const [isHovered, setIsHovered] = useState([false, false,false, false]);
  const controls = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

  const handleHover = (index, isHovering) => {
    setIsHovered((prev) => {
      const newIsHovered = [...prev];
      newIsHovered[index] = isHovering;
      return newIsHovered;
    });
  };

  useEffect(() => {
    isHovered.forEach((hovered, index) => {
      if (hovered) {
        controls[index].start({ y: 0, opacity: 1 });
      } else {
        controls[index].start({ y: 100, opacity: 0 });
      }
    });
  }, [isHovered, controls]);
   
    return (
  <>
    <div className='hidden flex-col space-y-10  items-center -z-20 sm:flex' id='projects'>
      <p className=' text-5xl font-bold text-slate-800 border-slate-700 '>My Projects</p>

      <a href = "https://tobyibe.github.io/yt2mp3/" className='relative cursor-pointer w-[80%] sm:w-[45rem]'>
      <motion.div initial={{opacity:0, y:80}} whileInView={{opacity:1, y:0}} transition={{duration: 1}} viewport={{once: true}}  onMouseEnter={() => handleHover(3, true)} onMouseLeave={() => handleHover(3, false)}>
        <img src={ytmp3} className=" hover:blur-sm hover:scale-105 transition duration-300 shadow-2xl rounded-xl hover:brightness-50"/>
        <motion.div className='absolute top-1/4 text-base sm:text-lg  text-white  transform -translate-y-1/2 pointer-events-none' animate={controls[3]}>
          <p className=' text-lg sm:text-xl font-bold pb-5'>Youtube to MP3 Website</p>            
          <ul>
            <li>-Responsive Youtube to MP3 website that works on a variety of screen sizes with dark/light theme implementation</li>
            <li>-Used React.js for URL processing and to interact with API and update HTML elements accordingly</li>
            <li>-Used Tailwind CSS for sleek, modern styling</li>
          </ul>  
        </motion.div>
      </motion.div>         
      </a>  

      <motion.div initial={{opacity:0, y:80}} whileInView={{opacity:1, y:0}} transition={{duration: 1}} viewport={{once: true}} className='relative cursor-pointer w-[80%] sm:w-[45rem]'  onMouseEnter={() => handleHover(0, true)} onMouseLeave={() => handleHover(0, false)}>
        <Link to='home' spy={true} smooth={true} offset={-100} duration={500}>
          <img src={pic} className=" hover:blur-sm hover:scale-105 transition duration-300 shadow-2xl rounded-xl hover:brightness-50"/>  
            <motion.div className='absolute top-1/4 text-base sm:text-lg  text-white  transform -translate-y-1/2 pointer-events-none' animate={controls[0]}>
              <p className=' text-lg sm:text-xl font-bold pb-5'>Portfolio Website</p>
              <ul>
                <li>-Fully responsive and interactive portfolio website</li>
                <li>-React.js used for backend processing of 'contact me' form and Tailwind CSS used for </li>
                <li>-Used the emailjs library to implement 'contact me' form </li>
                <li>-Utilises various js libraries such as react-typed, framer motion, tsparticles etc for interactive particle background, routing, animations etc</li>
              </ul>  
            </motion.div>                  
        </Link>
      </motion.div>

      <a href = "https://github.com/tobyibe/FC24Bot" className='relative cursor-pointer w-[80%] sm:w-[45rem]'>
        <motion.div initial={{opacity:0, y:80}} whileInView={{opacity:1, y:0}} transition={{duration: 1}} viewport={{once: true}}  onMouseEnter={() => handleHover(1, true)} onMouseLeave={() => handleHover(1, false)}>
          <img src={fifa} className=" hover:blur-sm hover:scale-105 transition duration-300 shadow-2xl rounded-xl hover:brightness-50"/>
          <motion.div className='absolute top-1/4 text-base sm:text-lg  text-white  transform -translate-y-1/2 pointer-events-none' animate={controls[1]}>
            <p className='text-lg sm:text-xl font-bold pb-5'>EA FC 24 Market Scraper</p>
            <ul>
              <li>-Web Scraping project that scrapes the futbin.com website to receive accurate data about the prices of players in the EAFC 24 game</li>
              <li>-Utilised Cheerio for web scraping</li>
            </ul>
          </motion.div>
      
        </motion.div>        
      </a>

      <a href = " https://github.com/tobyibe/Eliza" className='relative cursor-pointer w-[80%] sm:w-[45rem]'>
      <motion.div initial={{opacity:0, y:80}} whileInView={{opacity:1, y:0}} transition={{duration: 1}} viewport={{once: true}} className='' onMouseEnter={() => handleHover(2, true)} onMouseLeave={() => handleHover(2, false)}>
        <img src={eliza} className=" hover:blur-sm hover:scale-105 transition duration-300 shadow-2xl rounded-xl hover:brightness-50"/>
        <motion.div className='absolute top-1/4 text-base sm:text-lg  text-white  transform -translate-y-1/2 pointer-events-none' animate={controls[2]}>
          <p className='text-lg sm:text-xl font-bold pb-5'>Java Chatbot</p>
          <ul>
            <li>-Natural Language Processing Chatbot created in Java</li>
          </ul>
        </motion.div>         
      </motion.div>         
      </a>
    </div>


    <div className='sm:hidden flex-col space-y-10  items-center -z-20 flex' id='smallprojects'>
      <p className=' text-5xl font-bold text-slate-800 border-slate-700 '>My Projects</p>

      <motion.div initial={{opacity:0, y:80}} whileInView={{opacity:1, y:0}} transition={{duration: 1}} viewport={{once: true}} className='relative  w-[80%] sm:w-[45rem]' onMouseEnter={() => handleHover(3, true)} onMouseLeave={() => handleHover(3, false)}>
        <img src={ytmp3} className={!isHovered[3]?"transition duration-300 shadow-2xl rounded-xl": "blur-sm scale-105 transition duration-300 shadow-2xl rounded-xl brightness-50"}/>
        <motion.div className='absolute top-[5%] text-sm text-white transform -translate-y-1/2' animate={controls[3]}>
          <a href="https://tobyibe.github.io/yt2mp3/" className=' inline-block'>
            <FaLink size="1.5rem" className='text-white cursor-pointer shadow-xl'/>
          </a>

          <p className=' text-lg sm:text-xl font-bold pb-3'>Youtube to MP3 Website</p>            
          <ul>
            <li>-Responsive Youtube to MP3 website that works on a variety of screen sizes with dark/light theme implementation</li>
            <li>-Used React.js for URL processing and to interact with API and update HTML elements accordingly</li>
            <li>-Used Tailwind CSS for sleek, modern styling</li>
          </ul>  
        </motion.div>
      </motion.div>         
 

      <motion.div initial={{opacity:0, y:80}} whileInView={{opacity:1, y:0}} transition={{duration: 1}} viewport={{once: true}} className='relative  w-[80%] sm:w-[45rem]'  onMouseEnter={() => handleHover(0, true)} onMouseLeave={() => handleHover(0, false)}>
        <img src={pic} className={!isHovered[0]?"transition duration-300 shadow-2xl rounded-xl": "blur-sm scale-105 transition duration-300 shadow-2xl rounded-xl brightness-50"}/>
          <motion.div className='absolute top-[5%] text-sm text-white transform -translate-y-1/2 ' animate={controls[0]}>  
            <Link to='home' spy={true} smooth={true} offset={-100} duration={500} className=' inline-block'>
              <FaLink size="1.5rem" className='text-white cursor-pointer shadow-xl '/>
            </Link> 
            <p className=' text-lg sm:text-xl font-bold pb-3'>Portfolio Website</p>
            <ul>
              <li>-Fully responsive and interactive portfolio website</li>
              <li>-Created with React.js and styled with Tailwind CSS</li>
              <li>-Utilises various js libraries  for interactive particle background, routing, animations etc</li>
            </ul>  
          </motion.div>                  
      </motion.div>

      <motion.div initial={{opacity:0, y:80}} whileInView={{opacity:1, y:0}} transition={{duration: 1}} viewport={{once: true}} className='relative  w-[80%] sm:w-[45rem]'  onMouseEnter={() => handleHover(1, true)} onMouseLeave={() => handleHover(1, false)}>
        <img src={fifa} className={!isHovered[1]?"transition duration-300 shadow-2xl rounded-xl": "blur-sm scale-105 transition duration-300 shadow-2xl rounded-xl brightness-50"}/>
        <motion.div className='absolute top-[15%] text-sm text-white  transform -translate-y-1/2 ' animate={controls[1]}>
          <a href="https://github.com/tobyibe/Fc24Bot" className=' inline-block'>
            <FaLink size="1.5rem" className='text-white cursor-pointer shadow-xl'/>
          </a>          
          <p className='text-lg sm:text-xl font-bold pb-3'>EA FC 24 Market Scraper</p>
          <ul>
            <li>-Web Scraping project that scrapes the futbin.com website to receive accurate data about the prices of players in the EAFC 24 game</li>
            <li>-Utilised Cheerio for web scraping</li>
          </ul>
        </motion.div>
    
      </motion.div>        

      <motion.div initial={{opacity:0, y:80}} whileInView={{opacity:1, y:0}} transition={{duration: 1}} viewport={{once: true}} className='relative w-[80%] sm:w-[45rem]' onMouseEnter={() => handleHover(2, true)} onMouseLeave={() => handleHover(2, false)}>
        <img src={eliza} className={!isHovered[2]?"transition duration-300 shadow-2xl rounded-xl": "blur-sm scale-105 transition duration-300 shadow-2xl rounded-xl brightness-50"}/>
        <motion.div className='absolute top-[15%] text-sm text-white  transform -translate-y-1/2 ' animate={controls[2]}>
          <a href="https://github.com/tobyibe/Eliza" className=' inline-block'>
            <FaLink size="1.5rem" className='text-white cursor-pointer shadow-xl'/>
          </a>  
          <p className='text-lg sm:text-xl font-bold pb-3'>Java Chatbot</p>
          <ul>
            <li>-Natural Language Processing Chatbot created in Java</li>  
            <li>-Dealt with Natural Language Processing (pre-substitution, post-substitution etc)</li>
            <li>-Dealt with Regular Expressions, File Handling and reading as well as text processing</li>

          </ul>
        </motion.div>         
      </motion.div>         

    </div>
  </>
  )
}

export default Projects




