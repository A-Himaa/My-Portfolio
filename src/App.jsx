import { useState } from 'react';
import Navbar from './components/NavBar';
import HeroSec from './components/HeroSec';
import About from './components/AboutMe';

function App() {

  return (
    <>

    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-[#060B1A] via-[#0C1B3D] to-[#060B1A] ">
      <Navbar />
      <HeroSec />
      <About />

    </div>


      


    </>
  )
}

export default App
