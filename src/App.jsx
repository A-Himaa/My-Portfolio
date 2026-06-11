import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/NavBar';
import HeroSec from './components/HeroSec';
import About from './components/AboutMe';
import Skills from './components/Skills';
import Marqee from './components/Marqee';
import Projects from './components/Projects';
import Contacts from './components/Contact';
import CaseStudy from './components/CaseStudy';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
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

              <section id="skills">
                <Skills />
              </section>

              <section id="projects">
                <Projects />
              </section>

              <section id="contact">
                <Contacts />
              </section>
            </div>
          }
        />
        <Route
          path="/case-study/:id"
          element={
            <>
              <Navbar />
              <CaseStudy />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
