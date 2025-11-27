import { useState } from 'react';
import Navbar from './components/NavBar';
import HeroSec from './components/HeroSec';

function App() {

  return (
    <>

    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-[#060B1A] via-[#0C1B3D] to-[#060B1A] ">
      <div className="absolute h-150 w-150 -left-50 -top-50 border-1 border-white/10 rounded-full"></div>
      <div className="absolute h-170 w-170 -right-50 -top-30 border-1 border-white/10 rounded-full"></div>


      <Navbar />
      <HeroSec />

    </div>


      


    </>
  )
}

export default App
