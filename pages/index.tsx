import Nav from '@/components/Nav'
import { useState } from 'react'
import React from 'react'
import MobileNav from '@/components/MobileNav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Service from '@/components/Service';
import Skills from '@/components/Skills';
import Project from '@/components/Project';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';


const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);


  return (
    <div className="overflow-x-hidden">
      <div>
        {/* navigation */}
        <MobileNav nav={nav} closeNav={closeNav}/>
        <Nav openNav={openNav}/>  
        {/* Hero */}
        <Hero/>
        <div className='relative z-[30]'>
          <About/>
          <Service/>
          <Skills/>
          <Project/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    </div>
 )
}
export default HomePage