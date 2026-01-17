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


export default function Skills() {
    const [activeTab, setActiveTab] = useState("Frontend");

    const frontendSkills = [
        {name: "HTML5", level: "95"},
        {name: "CSS3", level: "95"},
        {name: "JavaScript", level: "90"},
        {name: "React", level: "90"},
        {name: "Tailwind CSS", level: "95"},
        {name: "TypeScript", level: "60"},
        {name: "Next.js", level: "85"},
    ];

    const BackendSkills = [
        {name: "Node.js", level: "86"},
        {name: "Express.js", level: "80"},
        {name: "MongoDB", level: "85"},
        {name: "MySQL", level: "75"},
        {name: "REST APIs", level: "70"},
        {name: "PHP", level: "70"},
        {name: "Laravel", level: "60"},
    ];

    const OtherSkills = [
        {name: "Java", level: "70"},
        {name: "Python", level: "75"},
        {name: "C", level: "73"},
        {name: "C++", level: "73"},
        {name: "Kotlin", level: "80"},
    ]

    const professionalSkills = [
        { name: "Communication", level: 95 },
        { name: "Problem Solving", level: 90 },
        { name: "Teamwork", level: 90 },
    ];

    const tools = [
        { name: "VS Code", icon:vscode},
        { name: "Android Studio", icon: androidSt },
        { name: "GitHub", icon: github},
        { name: "Postman", icon: postman },
        { name: "Mongo DB", icon: mongo},
        { name: "MySQL", icon: sql },
        { name: "Figma", icon: figma }, 
    ];

    const certificates = [
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services",
      year: "2024",
      label: "Cloud",
      img: certi,
    },
    {
      title: "Microsoft Azure Fundamentals (AZ-900)",
      issuer: "Microsoft Azure",
      year: "2024",
      label: "Cloud",
      img: certi,
    },
    {
      title: "MERN Stack Fundamentals",
      issuer: "Great Learning Academy",
      year: "2023",
      label: "Full Stack",
      img: certi,
    },
  ];
   

  return (
    <section className="bg-gradient-to-b from-[#061936] to-[#041024] min-h-screen text-center">

        <div className="relative space-y-6">
            <div className="inline-flex p-[1.5px] rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 opacity-90 to-fuchsia-500 shadow-[0_0_25px_rgba(139,92,246,0.45)]">
                <button className="px-5 rounded-full py-1 bg-[#060321] text-white/90 font-NavtextR backdrop-blur-md">Skills</button>
            </div>

            <h2 className="text-textColor font-Herohead font-semibold text-2xl md:text-4xl">
                <span className="bg-gradient-to-r text-4xl md:text-5xl from-indigo-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">S</span>KILL MATRIX
            </h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
            
        </div>

    </section>

  )
}



