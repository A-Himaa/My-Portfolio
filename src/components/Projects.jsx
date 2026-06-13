import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import atmosphera from "../assets/projects/atmosphera.png";
import portfolio from "../assets/projects/portfolio.png";
import crimeRadar from "../assets/projects/crimeRadar.png";
import rangiriWeb from "../assets/projects/rangiriWeb.png";
import rangiriAqua from "../assets/projects/rangiriAqua.png";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(1);
  const navigate = useNavigate();

  const projects = [
    //------- Portfolio---------
    {
      title: "Personal Portfolio",
      subtitle: "Modern Developer Personal Portfolio Website",
      img: portfolio,
      desc: "A responsive personal portfolio website built to showcase the projects, skills, experience, and achievements.",
      tech: "React.js, Vite, Tailwind CSS, CSS3",
    },
    //-------- ATMOSPHERA ---------
    {
      title: "ATMOSPHERA",
      subtitle: "AI-Based Analysis for Biosignatures & Profiling using Spectral Data",
      img: atmosphera,
      desc: "An AI-powered atmospheric analysis system for processesing exoplanet spectral data to detect atmospheric gases, evaluate potential biosignatures, and generate planetary habitability profiles for astronomical research.",
      tech: "Python, PyTorch, Scikit-learn, Pandas, NumPy, SciPy, FastAPI",
    },
    // ------- Crime Radar----
    {
      title: "Crime Radar",
      subtitle: "Real-time Crime Reporting & Awareness Platform",
      img: crimeRadar,
      desc: "A community-driven crime awareness system featuring live crime mapping, real-time reporting, analytical dashboards, and secure anonymous reporting.",
      tech: "MongoDB, Express.js, React.js, Node.js, Tailwind CSS, Nodemailer",
    },
    // ------- Rangiri Website----
    {
      title: "Rangiri Holdings Website",
      subtitle: "Corporate Website for Rangiri Holdings",
      img: rangiriWeb,
      desc: "A responsive corporate website designed to strengthen Rangiri Holdings' digital presence by showcasing its services, CSR activities, project portfolio, and business achievements while enabling seamless customer engagement through contact forms.",
      tech: "Next.js 15, React, Tailwind CSS, Framer Motion",
    },
    // ------- Rangiri Aqua----
    {
      title: "Rangiri Aqua Website",
      subtitle: "Adventure, Training & Event Management Platform",
      img: rangiriAqua,
      desc: "A modern corporate website developed to showcase Rangiri Aqua's adventure activities, team-building programs, corporate training services, and event management solutions while providing an engaging and responsive user experience.",
      tech: "HTML5, CSS3, JavaScript",
    },
  ];

  const fadeInOut = (
    delay = 0,
    duration = 0.8
  ) => ({
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration,
        ease: "easeOut"
      }
    }
  });

  return (
    <section id="projects" className="bg-gradient-to-b from-[#041024] via-[#11104A] to-[#061936] min-h-screen text-center pt-10 md:pt-30">
      <div className="relative space-y-6">

        <div className="inline-flex p-[1.5px] rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 opacity-90 to-fuchsia-500 shadow-[0_0_25px_rgba(139,92,246,0.45)]">
          <button className="px-5 rounded-full py-1 bg-[#060321] text-white/90 font-NavtextR backdrop-blur-md">
            Projects
          </button>
        </div>

        <motion.h2 
          className="text-textColor font-Herohead font-semibold text-2xl md:text-4xl"
          variants={fadeInOut(0.3)}
          initial="hidden"
          whileInView="visible"
        >
          <span className="bg-gradient-to-r text-4xl md:text-5xl from-indigo-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
            F
          </span>
          EATURED WORK
        </motion.h2>
      </div>

      {/* Project Carousel */}
      <motion.div 
        className="py-12 max-w-7xl mx-auto"
        variants={fadeInOut(0.3)}
        initial="hidden"
        whileInView="visible"
      >
        {/* Desktop carousel */}
        <div className="hidden md:flex items-center justify-center gap-2 md:gap-3 overflow-x-auto py-5">
          {projects.map((proj, index) => {
            const isActive = index === activeProject;

            return (
              <div
                key={index}
                onClick={() => setActiveProject(index)}
                className={`
                  relative bg-white/5 border border-white/10 rounded-2xl p-3 pt-4 backdrop-blur-xl shadow-inner shadow-white/15 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(99,102,241,0.25)]
                  ${isActive 
                    ? 'w-[600px] h-[600px] border-white/20 shadow-[0_0_40px_rgba(99,102,241,0.25)]' 
                    : 'w-[110px] h-[600px] border-white/5 bg-[#0a1025] opacity-60 hover:opacity-80'
                  }
                `}
              >
                {isActive ? (
                  <div className="h-full flex flex-col">
                    <div className="h-[45%] relative overflow-hidden rounded-t-2xl">
                      <img
                        src={proj.img}
                        alt={proj.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0" />
                    </div>

                    <div className="flex-1 p-6 flex flex-col">
                      <h3 className="text-xl md:text-2xl font-bold text-textColor mb-1 font-Herohead">
                        {proj.title}
                      </h3>

                      <h3 className="text-md font-semibold text-white/80 mb-8">
                        {proj.subtitle}
                      </h3>

                      <p className="text-sm text-mutedText mb-2 flex-1 break-words">
                        {proj.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {proj.tech.split(", ").map((techItem, i) => (
                          <span
                            key={i}
                            className="text-xs text-white/60 border border-white/20 rounded-full px-3 py-1 mb-2"
                          >
                            {techItem}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => navigate(`/${activeProject}`)}
                        className="relative text-white px-3 md:px-5 py-3 rounded-2xl bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 overflow-hidden cursor-pointer hover:bg-gradient-to-r hover:from-violet-950 hover:via-purple-900 hover:to-blue-950 hover:border-white/50 hover:scale-105 transition-all duration-300"
                      >
                        VIEW CASE STUDY
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center p-2">
                    <div className="text-center">
                      <div className="w-14 h-14 mx-auto mb-2 rounded-lg overflow-hidden">
                        <img
                          src={proj.img}
                          alt={proj.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs text-textColor font-medium leading-tight">
                        {proj.title.split(' ').slice(0, 2).join(' ')}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile active card + thumbnail selector */}
        <div className="md:hidden flex flex-col items-center gap-6">
          <div className="w-full max-w-[90vw] bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-inner shadow-white/15">
            <div className="relative h-56 overflow-hidden">
              <img
                src={projects[activeProject].img}
                alt={projects[activeProject].title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-textColor font-Herohead">
                  {projects[activeProject].title}
                </h3>
                <p className="text-sm font-semibold text-white/70 mt-1">
                  {projects[activeProject].subtitle}
                </p>
              </div>

              <p className="text-sm text-mutedText leading-6">
                {projects[activeProject].desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {projects[activeProject].tech.split(", ").map((techItem, i) => (
                  <span
                    key={i}
                    className="text-xs text-white/60 border border-white/20 rounded-full px-3 py-1"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              <button
                onClick={() => navigate(`/${activeProject}`)}
                className="w-full text-white px-4 py-3 rounded-2xl bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 hover:bg-gradient-to-r hover:from-violet-950 hover:via-purple-900 hover:to-blue-950 transition-all duration-300"
              >
                VIEW CASE STUDY
              </button>
            </div>
          </div>

          <div className="w-full overflow-x-auto px-4">
            <div className="flex gap-3 pb-2">
              {projects.map((proj, index) => {
                const isActive = index === activeProject;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveProject(index)}
                    className={`flex-shrink-0 w-28 h-28 rounded-3xl border p-3 overflow-hidden text-left transition ${
                      isActive
                        ? 'border-indigo-500 bg-indigo-950/30 shadow-[0_0_20px_rgba(99,102,241,0.18)]'
                        : 'border-white/10 bg-slate-950/40'
                    }`}
                  >
                    <div className="relative w-full h-14 mb-2 overflow-hidden rounded-2xl">
                      <img
                        src={proj.img}
                        alt={proj.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[10px] text-textColor font-medium leading-snug">
                      {proj.title.split(' ').slice(0, 2).join(' ')}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* <div className="flex justify-center mx-auto pb-12">
        <a href="#">
          <button className="border-2 border-accent/80 text-base font-semibold text-textColor tracking-wide px-6 py-3 rounded-md hover:bg-accent/50 transition-all">
            View All Projects
          </button>
        </a>
      </div> */}
    </section>
  );
}