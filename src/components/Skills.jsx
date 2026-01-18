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

    // const frontendSkills = [
    //     {name: "HTML5", level: "95"},
    //     {name: "CSS3", level: "95"},
    //     {name: "JavaScript", level: "90"},
    //     {name: "React", level: "90"},
    //     {name: "Tailwind CSS", level: "95"},
    //     {name: "TypeScript", level: "60"},
    //     {name: "Next.js", level: "85"},
    // ];

    // const BackendSkills = [
    //     {name: "Node.js", level: "86"},
    //     {name: "Express.js", level: "80"},
    //     {name: "MongoDB", level: "85"},
    //     {name: "MySQL", level: "75"},
    //     {name: "REST APIs", level: "70"},
    //     {name: "PHP", level: "70"},
    //     {name: "Laravel", level: "60"},
    // ];

    // const OtherSkills = [
    //     {name: "Java", level: "70"},
    //     {name: "Python", level: "75"},
    //     {name: "C", level: "73"},
    //     {name: "C++", level: "73"},
    //     {name: "Kotlin", level: "80"},
    // ]

    // const professionalSkills = [
    //     { name: "Communication", level: 95 },
    //     { name: "Problem Solving", level: 90 },
    //     { name: "Teamwork", level: 90 },
    // ];

    // const tools = [
    //     { name: "VS Code", icon:vscode},
    //     { name: "Android Studio", icon: androidSt },
    //     { name: "GitHub", icon: github},
    //     { name: "Postman", icon: postman },
    //     { name: "Mongo DB", icon: mongo},
    //     { name: "MySQL", icon: sql },
    //     { name: "Figma", icon: figma }, 
    // ];

//     const certificates = [
//     {
//       title: "AWS Cloud Practitioner Essentials",
//       issuer: "Amazon Web Services",
//       year: "2024",
//       label: "Cloud",
//       img: certi,
//     },
//     {
//       title: "Microsoft Azure Fundamentals (AZ-900)",
//       issuer: "Microsoft Azure",
//       year: "2024",
//       label: "Cloud",
//       img: certi,
//     },
//     {
//       title: "MERN Stack Fundamentals",
//       issuer: "Great Learning Academy",
//       year: "2023",
//       label: "Full Stack",
//       img: certi,
//     },
//   ];

  const skillContainer = [
    {name: "HTML5", title: "frontend"},
    {name: "Node.js", title: "backend"},
    {name: "React", title: "frontend"},
    {name: "JavaScript", title: "frontend"},
    {name: "Python", title: "programming"},
    {name: "CSS3", title: "frontend"},
    {name: "MongoDB", title: "data"},
    {name: "REST API", title: "backend"},
    {name: "Tailwind CSS", title: "frontend"},
    {name: "TypeScript", title: "frontend"},
    {name: "C++", title: "programming"},
    {name: "Next.js", title: "frontend"},    
    {name: "Express.js", title: "backend"},
    {name: "PHP", title: "backend"},
    {name: "Laravel", title: "backend"},    
    {name: "Java", title: "backend"},    
    {name: "MySQL", title: "data"},
    {name: "C", title: "programming"},
    {name: "Kotlin", title: "programming"},
  ]

  const skillStyle = {
    frontend: "border-cyan-800/80 shadow-[0_0_8px_rgba(24,121,153,0.8)] text-cyan-800",
    backend: "border-violet-400/40 shadow-[0_0_8px_rgba(167,139,250,0.6)] text-violet-400",
    data: "border-fuchsia-600/40 shadow-[0_0_8px_rgba(182,82,199,0.6)] text-fuchsia-600",
    programming: "border-white/40 shadow-[0_0_8px_rgba(255,255,255,0.4)] text-white",
  }

  const skillBars = [
    {title: "Frontend Engineering", label: "SCALABLE & RESPONSIVE UI", value: 85, color:"blue"},
    {title: "Core Programming & Systems", label: "PROBLEM SOLVING & PROGRAMMING", value: 73, color:"blue"},
    {title: "Backend & API Engineering", label: "ROBUST API & BACKEND SERVICES", value: 80, color:"blue"},
    {title: "Data & Persistence", label: "DATA MANAGEMENT", value: 78, color:"blue"},
  ]


  return (
    <section className="bg-gradient-to-b from-[#061936] via-[#11104A] to-[#041024] min-h-screen text-center">

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
          <div className="absolute mt-10 h-screen inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />

          
          <div className="pt-25 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-6xl gap-12">

            {/* Left Section */}
            <div className="relative rounded-3xl bg-white/5 border border-white/12 backdrop-blur-xl p-10 flex items-center shadow-inner shadow-white/15">
              <div className="flex flex-wrap gap-4">
                {skillContainer.map((skills, i) => (
                  <span
                    key={i}
                    className={`px-4 mx-1 py-2 rounded-full font-NavtextR text-sm border ${skillStyle[skills.title]}`}>
                      {skills.name}
                    </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8">
                {skillBars.map((bar, i) => (
                  <div key={i}>

                    <p className="text-xs text-left text-white/50 mb-1">
                      {bar.label}
                    </p>

                    <div className="flex justify-between items-end mb-2">
                      <h3 className="text-lg font-semibold text-white/50">
                        {bar.title}
                      </h3>
                      <span className={`text-xl font-bold ${bar.color === "cyan" ? "text-cyan-400" : "text-violet-400"}`}>
                        {bar.value}%
                      </span>
                    </div>

                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${bar.value}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`h-full rounded-full ${
                    bar.color === "cyan"
                      ? "bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]"
                      : "bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,0.8)]"
                  }`}
                />
              </div>
                  </div>
                ))}
            </div>

          </div>

        </div>



    </section>

  )
}



