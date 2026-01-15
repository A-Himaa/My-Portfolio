import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";


export default function About(){
  const timeLine = [
    {
      title : "Software Engineer Intern",
      period: "2025 - Present",
      location: "Rangiri Holdings",
      desc: "Working on real-world web applications, contributing to production-level systems and feature improvements.",
      status: "ON_GOING",
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

  return(
    <section className="min-h-screen bg-gradient-to-b from-[#061936] via-[#472382] to-[#041024]">
      
      <div className="grid grid cols-1 md:grid-cols-2 max-w-6xl mx-auto md:pt-28">

        {/* Left Section - image */}
        <div className="relative flex justify-center items-center mt-10 md:mt-0 group">
          
          {/* Shadow Glow Animation */}
          <div></div>
        </div>

        {/*---------------Right Section---------------------*/}
        
        <div className="relative space-y-6">

          <div className="inline-flex p-[1.5px] rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 opacity-90 to-fuchsia-500 shadow-[0_0_25px_rgba(139,92,246,0.45)]">
            <button className="rounded-full px-5 py-1 bg-[#060321] text-white/90 font-NavtextR backdrop-blur-md">About</button>
          </div>

          <h2 className="text-textColor font-Herohead font-semibold text-4xl ">
            <span className="bg-gradient-to-r text-5xl from-indigo-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">A</span>BOUT ME
          </h2>
          
          {/* Paragraph section */}
          <div>
          <p className="text-textColor/70 tracking-wide pt-2">
             I’m a dedicated full-stack web developer passionate about crafting modern, efficient, and 
             seamless digital experiences. I enjoy transforming ideas into scalable, high-performance 
             applications by blending clean, maintainable code with intuitive UI/UX design.
          </p>

          <p className="text-textColor/70 tracking-wide pt-3">
             With a strong foundation in both frontend and backend development, I focus on building 
             solutions that are not only visually refined but also technically robust. I value performance, 
             accessibility, and thoughtful architecture, ensuring every product delivers real value to users.
          </p>

          <p className="text-textColor/70 tracking-wide pt-3">
            Driven by continuous learning and innovation, I’m always exploring new technologies and best 
            practices to stay ahead in a fast-evolving digital landscape. My goal is to create meaningful 
            software that solves real-world problems and leaves a lasting impact.
          </p>
          </div>

          {/* Button Section */}
          <div>
          <div className="flex gap-2 pt-4">
            <p className="text-white font-NavtextR px-5 py-1 bg-white/20 rounded-md "><span className="text-fuchsia-300 font-semibold">3+</span> Years Learning</p>
            <p className="text-white font-NavtextR px-5 py-1 bg-white/20 rounded-md "><span className="text-fuchsia-300 font-semibold">10+</span> Hands-On-Projects</p>
            <p className="text-white font-NavtextR px-5 py-1 bg-white/20 rounded-md ">Full-Stack Exposure</p>
          </div>
          <div className="flex gap-2 pt-1">
            <p className="text-white font-NavtextR px-5 py-1 bg-white/20 rounded-md ">Quick Learner</p>
            <p className="text-white font-NavtextR px-5 py-1 bg-white/20 rounded-md ">Team Collaboration</p>
          </div>
          </div>

        </div>
        
      </div>

      {/* Journey section */}
      <div className="relative max-w-6xl mx-auto py-30">

        <h2 className="text-textColor font-Herohead font-semibold text-4xl text-center">
          <span className="bg-gradient-to-r text-5xl from-indigo-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">M</span>Y JOURNEY
        </h2>

        <p className="text-white/30 pt-2 text-center tracking-wider text-sm">A JOURNEY OF LEARNING, GROWTH AND ACHIEVEMENT.</p>

        <div className="relative py-20 space-y-5">

          {/* Glowing Line */}
          <div className="hidden md:block absolute bg-gradient-to-b from-transparent via-purple-500 via-indigo-500/50 to-transparent left-1/2 top-8 h-full w-1 -translate-x-1/2" />

          {/* Timeline items */}
          {timeLine.map((item, index) => {
            const isLeft = index % 2 === 0;

            return(
              <div key={index} className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-7">
                
                {/* Cards-Left */}
                <div className={isLeft ? "block" : "hidden md:block"}>
                  {isLeft && (
                    <TimelineCard item={item} align = "right" />
                  )}
                </div>

                {/* Center Dots */}
                <div className="relative flex justify-center">
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
      </div>
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
      <div className="relative bg-white/5 text-left border border-white/10 rounded-xl p-10 backdrop-blur-xl transition-all duration-300 hover:border-indigo-700/60 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] shadow-inner shadow-white/15">

        {/* Period */}
        <span className="inline-block text-[11px] mb-3 px-3 py-1 rounded-full bg-indigo-600/10 border border-indigo-200/10 text-indigo-300 shadow-inner shadow-white/10 tracking-widest">
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

        <h3 className="text-md tracking-wider font-Herohead text-white/90">
          {item.title}
        </h3>

        <p className="text-sm text-indigo-400/80 font-bold pt-2">
          {item.location}
        </p>

        <p className="mt-3 text-sm text-gray-400 leading-relaxed">
          {item.desc}
        </p>

        <p className="mt-5 text-[11px] tracking-widest text-gray-500">
          {item.status}
        </p>
      </div>
    </motion.div>
  )
}