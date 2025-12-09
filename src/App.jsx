import { useState } from 'react';
import Navbar from './components/NavBar';
import HeroSec from './components/HeroSec';
import About from './components/AboutMe';
import Skills from './components/Skills';

function App() {

  return (
    <>

    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-[#060B1A] via-[#0C1B3D] to-[#060B1A] ">
  
  <Navbar />

  <section id="home">
    <HeroSec />
  </section>

  <section id="about">
    <About />
  </section>

  <section id="skills">
    <Skills />
  </section>

</div>


      


    </>
  )
}

export default App
