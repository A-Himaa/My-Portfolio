import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import meImg from "../assets/me.PNG";


export default function About(){
  const timeLine = [
    {
      title : "Software Engineer Intern",
      period: "2025 - 2026",
      location: "Rangiri Holdings",
      desc: "Worked on real-world web applications, contributing to production-level systems and feature improvements.",
      status: "COMPLETED",
      type: " "
    },
    {
      title : "BSc (Hons) in Information Technology",
      period: "2022 - Present",
      location: "SLIIT",
      desc: "Undergraduate in Information Technology with a focus on software engineering, full-stack development, and research-based projects.",
      status: "ON_GOING",
      type: "education"
    },
    {
      title : "GCE Advanced Level (A/L)",
      period: "2021",
      location: "AMC",
      desc: "Completed G.C.E. Advanced Level examination, building a strong foundation for higher studies in IT.",
      status: "COMPLETED",
      type: "education"
    },
    {
      title : "GCE Ordinary Level (O/L)",
      period: "2018",
      location: "AMC",
      desc: "Successfully completed the G.C.E. Ordinary Level examination, establishing a strong academic foundation.",
      status: "COMPLETED",
      type: "education"
    },
  
  ]

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


  return(
    <section className="min-h-screen bg-gradient-to-b from-[#041024] via-[#472382] to-[#061936] pt-20 md:pt-10 px-5 md:px-0">
      
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto pt-10 md:pt-28 gap-6">

        {/* Left Section - image */}
        <motion.div 
          className="hidden md:flex relative justify-center items-center mt-10 md:mt-0 group"
          variants={fadeInOut(0.3)}
          initial="hidden"
          whileInView="visible"
          >
           <div className="relative w-72 h-72 md:w-[28rem] md:h-auto rounded-[2rem] overflow-hidden border border-white/10">
            <img src={meImg} alt="Profile Image" className="w-full h-full object-cover opacity-85" />
            <div className="absolute inset-0 bg-black/10" />
          </div>

        </motion.div>

        {/*---------------Right Section---------------------*/}
        
        <div className="relative space-y-6">

          <div className="inline-flex p-[1.5px] rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 opacity-90 to-fuchsia-500 shadow-[0_0_25px_rgba(139,92,246,0.45)]">
            <button className="rounded-full px-5 py-1 bg-[#060321] text-white/90 font-NavtextR backdrop-blur-md">About</button>
          </div>

          <motion.h2 
            className="text-textColor font-Herohead font-semibold text-2xl md:text-4xl"
            variants={fadeInOut(0.3)}
            initial="hidden"
            whileInView="visible"
          >
            <span className="bg-gradient-to-r text-4xl md:text-5xl from-indigo-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">A</span>BOUT ME
          </motion.h2>
          
          {/* Small-screen image shown under the heading */}
          <motion.div
            className="relative flex justify-center items-center mt-6 md:hidden"
            variants={fadeInOut(0.3)}
            initial="hidden"
            whileInView="visible"
          >
            <div className="relative w-64 h-64 rounded-[2rem] overflow-hidden border border-white/10">
              <img src={meImg} alt="Profile Image" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-black/15" />
            </div>
          </motion.div>
          
          {/* Paragraph section */}
          <motion.div
            variants={fadeInOut(0.3)}
            initial="hidden"
            whileInView="visible"
          >
          <p className="text-textColor/70 tracking-wide pt-2 text-sm md:text-base">
             I’m a dedicated full-stack web developer passionate about crafting modern, efficient, and 
             seamless digital experiences. I enjoy transforming ideas into scalable, high-performance 
             applications by blending clean, maintainable code with intuitive UI/UX design.
          </p>

          <p className="text-textColor/70 tracking-wide pt-3 text-sm md:text-base">
             With a strong foundation in both frontend and backend development, I focus on building 
             solutions that are not only visually refined but also technically robust. I value performance, 
             accessibility, and thoughtful architecture, ensuring every product delivers real value to users.
          </p>

          <p className="text-textColor/70 tracking-wide pt-3 text-sm md:text-base">
            Driven by continuous learning and innovation, I’m always exploring new technologies and best 
            practices to stay ahead in a fast-evolving digital landscape. My goal is to create meaningful 
            software that solves real-world problems and leaves a lasting impact.
          </p>
          </motion.div>

          {/* Button Section */}
          <motion.div
            variants={fadeInOut(0.3)}
            initial="hidden"
            whileInView="visible"
          >
          <div className="flex gap-2 pt-4">
            <p className="text-white font-NavtextR px-5 py-1 bg-white/20 rounded-md text-sm md:text-base"><span className="text-fuchsia-300 font-semibold">4+</span> Years Learning</p>
            <p className="text-white font-NavtextR px-5 py-1 bg-white/20 rounded-md text-sm md:text-base"><span className="text-fuchsia-300 font-semibold">10+</span> Hands-On-Projects</p>
            <p className="text-white font-NavtextR px-5 py-1 bg-white/20 rounded-md text-sm md:text-base">Full-Stack Exposure</p>
          </div>
          <div className="flex gap-2 pt-1">
            <p className="text-white font-NavtextR px-5 py-1 bg-white/20 rounded-md text-sm md:text-base">Quick Learner</p>
            <p className="text-white font-NavtextR px-5 py-1 bg-white/20 rounded-md text-sm md:text-base">Team Collaboration</p>
          </div>
          </motion.div>

        </div>
      </div>

      {/* Journey section */}
      <motion.div 
        className="relative max-w-6xl mx-auto py-15 md:py-30"
        variants={fadeInOut(0.5)}
        initial="hidden"
        whileInView="visible"
      >

        <h2 className="text-textColor font-Herohead font-semibold text-2xl md:text-4xl text-center">
          <span className="bg-gradient-to-r text-4xl md:text-5xl from-indigo-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">M</span>Y JOURNEY
        </h2>

        <p className="text-white/50 pt-4 text-center tracking-wider text-sm">A JOURNEY OF LEARNING, GROWTH AND ACHIEVEMENT.</p>

        <div className="relative py-10 md:py-20 space-y-3 md:space-y-5">

          {/* Glowing Line */}
          <div className="hidden md:block absolute bg-gradient-to-b from-transparent via-purple-500 via-indigo-500/50 to-transparent left-1/2 top-8 h-full w-1 -translate-x-1/2" />

          {/* Timeline items */}
          {timeLine.map((item, index) => {
            const isLeft = index % 2 === 0;

            return(
              <div key={index} className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-7 px-2">
                
                {/* Cards-Left */}
                <div className={isLeft ? "block" : "hidden md:block"}>
                  {isLeft && (
                    <TimelineCard item={item} align = "right" />
                  )}
                </div>

                {/* Center Dots */}
                <div className="hidden md:flex relative flex justify-center">
                  <span className="absolute w-5 h-5 rounded-full border border-indigo-500/50" />
                  <span className="w-3 h-3 mt-1 rounded-full bg-indigo-500 shadow-[0_0_18px_4px_rgba(99,102,241,0.9)]" />
                </div>

                {/* Cards - Right */}
                <div className={!isLeft ? "block" : "hidden md:block"}>
                  {!isLeft && (
                    <TimelineCard item={item} align = "left" />
                  )}
                </div>

              </div>
            )
          })}

        </div>  
      </motion.div>
    </section>
  );
}

// Time line cards
function TimelineCard({item, align}){
  return(
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? 70 : -70 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative max-w-md ${align === "right" ? "ml-auto" : ""}`}
    >
      <div className="relative bg-white/5 text-left border border-white/10 rounded-xl p-5 md:p-10 backdrop-blur-xl transition-all duration-300 hover:border-indigo-700/60 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] shadow-inner shadow-white/15">

        {/* Period */}
        <span className="inline-block text-[10px] md:text-[11px] mb-3 px-3 py-1 rounded-full bg-indigo-600/10 border border-indigo-200/10 text-indigo-300 shadow-inner shadow-white/10 tracking-widest">
          {item.period}
        </span>

        {/* Icon */}
        <div className="absolute top-6 right-6 text-white opacity-30">
          {item.type === "education" ? (
            <GraduationCap size={25} />
          ) : (
            <Briefcase size={20} />
          )}
        </div>

        <h3 className="text-sm md:text-lg tracking-wider font-Herohead text-white/90">
          {item.title}
        </h3>

        <p className="text-sm md:text-base text-indigo-400/80 font-bold pt-2">
          {item.location}
        </p>

        <p className="mt-3 text-[12px] md:text-sm text-gray-400 leading-relaxed">
          {item.desc}
        </p>

        <p className="mt-5 text-[11px] tracking-widest text-gray-500">
          {item.status}
        </p>
      </div>
    </motion.div>
  )
}