import Nav from '@/components/Nav'
import { useState } from 'react'
import React from 'react'
import MobileNav from '@/components/MobileNav';
import Hero from '@/components/Hero';


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
        {/* hero */}
        <Hero/>
      </div>
    </div>
 )
}
export default HomePage