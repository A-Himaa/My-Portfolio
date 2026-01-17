import { useState } from 'react';
import Navbar from './components/NavBar';
import HeroSec from './components/HeroSec';
import About from './components/AboutMe';
import Skills from './components/Skills';
import Marqee from './components/Marqee';
import Projects from './components/Projects';
import Contacts from './components/Contact';

function App() {

  return (
    <>

    <div className="min-h-screen w-full relative overflow-hidden">
  
  <Navbar />

  <section id="home">
    <HeroSec />
  </section>

    <section id="marqee">
    <Marqee />
  </section>

  <section id="about">
    <About />
  </section>

  {/* <section id="skills">
    <Skills />
  </section> */}



  {/* <section id="projects">
    <Projects />
  </section>

  <section id="contact">
    <Contacts />
  </section> */}

</div>


      


    </>
  )
}

export default App
