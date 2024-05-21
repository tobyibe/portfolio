
import './App.css';
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import ParticlesComponent from './components/particles';
import Projects from './components/projects';
import cv from './assets/cv.png'
import cvpdf from './assets/cv.pdf'
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import React from 'react';
import ContactMe from './components/ContactMe';
export default function App() {

  return (
    <Router>
      <div className='relative bg-slate-100 pt-5'>
        <ParticlesComponent id="particles" className=' absolute inset-0' />
        <div className='relative'>
          <Switch>
            <Route exact path ="/portfolio">
              <NavBar />
              <AboutSection />
              <Technologies />
              <Projects />
              <Contact />              
            </Route>
            <Route path="/contact">
              <ContactMe></ContactMe>
            </Route>
          </Switch>

          <a href={cvpdf} download="resume">
            <img src={cv} className='fixed rounded-full sm:right-10 sm:bottom-10 right-0 bottom-0 mb-5 sm:w-20 w-10 cursor-pointer hover:scale-105 transition-all shadow-2xl' alt="CV" />
          </a>

        </div>
      </div>
    </Router>
  );
}

