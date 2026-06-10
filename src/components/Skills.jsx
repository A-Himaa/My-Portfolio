import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import vscode from "../assets/vs.png";
import androidSt from "../assets/as.png";
import postman from "../assets/pm.png";
import github from "../assets/git.png";
import mongo from "../assets/mongo.png";
import sql from "../assets/sql.png";
import figma from "../assets/fig.png";
import certi from "../assets/cert1.png";
import { title } from "framer-motion/client";


export default function Skills() {

  const languages = [
    {name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
    {name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},
    {name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
    {name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},
    {name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},  
    {name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"},
    {name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"},
    {name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"},
    {name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"},
    {name: "Kotlin", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"},
  ]

  const frameworks = [
    {name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
    {name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"},
    {name: "Express.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"},
    {name: "Laravel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"},
    {name: "Spring Boot", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"},
    {name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"}
  ]

  const databases = [
    {name: "SQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
    {name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
    {name: "Oracle", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"},
    {name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"},
  ]

  const tools = [
    {name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},
    {name: "VSCode", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"},
    {name: "Visual Studio", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-original.svg"},
    {name: "IntelliJ Idea", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg"},
    {name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"},
    {name: "Android Studio", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"},
    {name: "Postman", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"},
  ]

  const skillBars = [
    {title: "Frontend Engineering", label: "SCALABLE & RESPONSIVE UI", value: 85, color:"blue"},
    {title: "Core Programming & Systems", label: "PROBLEM SOLVING & PROGRAMMING", value: 70, color:"violet"},
    {title: "Backend & API Engineering", label: "ROBUST API & BACKEND SERVICES", value: 80, color:"fuchsia"},
    {title: "Data & Persistence", label: "DATA MANAGEMENT", value: 72, color:"white"},
  ]

  const barColors = (color) =>
  ({
    blue: "text-blue-400",
    violet: "text-violet-400",
    fuchsia: "text-fuchsia-600",
  }[color] || "text-indigo-200");



  return (
    <section className="bg-gradient-to-b from-[#061936] via-[#11104A] to-[#041024] min-h-screen text-center pb-25">

        <div className="relative space-y-6">
            <div className="inline-flex p-[1.5px] rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 opacity-90 to-fuchsia-500 shadow-[0_0_25px_rgba(139,92,246,0.45)]">
                <button className="px-5 rounded-full py-1 bg-[#060321] text-white/90 font-NavtextR backdrop-blur-md">Skills</button>
            </div>

            <h2 className="text-textColor font-Herohead font-semibold text-2xl md:text-4xl">
                <span className="bg-gradient-to-r text-4xl md:text-5xl from-indigo-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">S</span>KILL MATRIX
            </h2>
        </div>

        <div className="relative min-h-screen">
          
           {/* Grid Background */}
          <div className="absolute mt-10 min-h-screen inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />

          
          <div className="pt-10 md:pt-25 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-6xl gap-5 md:gap-10">

            {/* Left Section */}
            <div className="relative rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl p-8 shadow-inner shadow-white/15 mx-3">

            {/* ------------ Languages --------------- */}
            <div className="flex items-center justify-center gap-2">
              <span className="w-15 h-[2px] bg-white/50 rounded-3xl" />              
              <p className="text-lg font-bold text-white/80 tracking-wide">
                Languages
              </p>
              <span className="w-15 h-[2px] bg-white/50 rounded-3xl" />
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-5 max-w-2xl mx-auto">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="w-16 h-20 md:w-17 md:h-21 flex flex-col items-center justify-center rounded-2xl md:rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl shadow-inner shadow-white/15 flex-shrink-0"
                >
                  <img
                    src={lang.src}
                    alt={lang.name}
                    className="w-6 h-6 md:w-8 md:h-8 object-contain"
                  />
                  <p className="text-[10px] md:text-xs mt-2 text-white/50 text-center">
                    {lang.name}
                  </p>
                </div>
              ))}
            </div>
            
            {/* --------- Frameworks ---------- */}
            <div className="flex items-center justify-center gap-2 mt-5">
              <span className="w-15 h-[2px] bg-white/50 rounded-3xl" />              
              <p className="text-lg font-bold text-white/80 tracking-wide">
                Frameworks & Libraries
              </p>
              <span className="w-15 h-[2px] bg-white/50 rounded-3xl" />
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-5 max-w-2xl mx-auto">
              {frameworks.map((frame) => (
                <div
                  key={frame.name}
                  className="w-16 h-20 md:w-17 md:h-21 flex flex-col items-center justify-center rounded-2xl md:rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl shadow-inner shadow-white/15 flex-shrink-0"
                >
                  <img
                    src={frame.src}
                    alt={frame.name}
                    className="w-6 h-6 md:w-8 md:h-8 object-contain"
                  />
                  <p className="text-[10px] md:text-xs mt-2 text-white/50 text-center">
                    {frame.name}
                  </p>
                </div>
              ))}
            </div>

            {/* ---------- Databases ---------- */}
            <div className="flex items-center justify-center gap-2 mt-5">
              <span className="w-15 h-[2px] bg-white/50 rounded-3xl" />              
              <p className="text-lg font-bold text-white/80 tracking-wide">
                Databases
              </p>
              <span className="w-15 h-[2px] bg-white/50 rounded-3xl" />
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-5 max-w-2xl mx-auto">
              {databases.map((db) => (
                <div
                  key={db.name}
                  className="w-16 h-20 md:w-17 md:h-21 flex flex-col items-center justify-center rounded-2xl md:rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl shadow-inner shadow-white/15 flex-shrink-0"
                >
                  <img
                    src={db.src}
                    alt={db.name}
                    className="w-6 h-6 md:w-8 md:h-8 object-contain"
                  />
                  <p className="text-[10px] md:text-xs mt-2 text-white/50 text-center">
                    {db.name}
                  </p>
                </div>
              ))}
            </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col gap-9 p-8 md:p-0">
              {skillBars.map((bar, i) => (
                <div key={i}>

                  <p className="text-sm text-left text-white/50 mb-1 tracking-widest font-NavtextR">
                    {bar.label}
                  </p>

                  <div className="flex justify-between items-end mb-2">
                    <h3 className="text-lg font-semibold text-white/80">
                      {bar.title}
                    </h3>
                    <span className={`text-xl font-semibold font-NavtextR tracking-wider ${barColors(bar.color)}`}>
                      {bar.value}%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-white/10 overflow-hidden border border-white/20">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.value}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className={`h-[50%] rounded-full mt-[1.7px] ml-[4px]   ${
                      bar.color === "blue"
                        ? "bg-blue-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]"
                        : bar.color === "violet"? "bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,0.8)]"
                        : bar.color === "fuchsia" ? "bg-fuchsia-400 shadow-[0_0_18px_rgba(167,139,250,0.8)]"
                        : "bg-indigo-200 shadow-[0_0_18px_rgba(167,139,250,0.8)]"
                      }`}
                    />
                  </div>
                </div>
                ))}
            
            {/* --------- Tools ---------- */}
            <div className="relative rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl p-8 shadow-inner shadow-white/15 mt-2">
              <div className="flex items-center justify-center gap-2 mt-">
                <span className="w-15 h-[2px] bg-white/50 rounded-3xl" />              
                <p className="text-lg font-bold text-white/80 tracking-wide">
                Tools
                </p>
                <span className="w-15 h-[2px] bg-white/50 rounded-3xl" />
              </div>

            <div className="flex flex-wrap md:flex-nowrap  justify-center gap-2 mt-5 max-w-2xl mx-auto">
              {tools.map((t) => (
              <div
                key={t.name}
                className="w-16 h-20 md:w-17 md:h-21 flex flex-col items-center justify-center rounded-2xl md:rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl shadow-inner shadow-white/15 flex-shrink-0"
              >
                <img
                  src={t.src}
                  alt={t.name}
                  className="w-6 h-6 md:w-8 md:h-8 object-contain"
                />
                <p className="text-[10px] md:text-xs mt-2 text-white/50 text-center">
                  {t.name}
                </p>
              </div>
              ))}
            </div>
            </div>

            </div>         

          </div>
        </div>



    </section>

  )
}



