"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

   

  return (
    <section className="w-full bg-bgColor pb-20"> 

    <h3 className="font-mono text-base text-textAccent text-center mb-0">
        SKILLS
    </h3>

    <h2 className="font-bold text-3xl md:text-5xl text-textColor pb-2 leading-tight text-center">
        Tools & Skills
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-6xl px-6 gap-10 mt-10"> 

        {/* Skills List - Left */}
        <div>
            <h3 className="font-mono text-sm md:text-base bg-accent/20 text-gray-100/90 px-2 py-2 tracking-wider rounded-sm">TECHNICAL SKILLS</h3>

            {/* Technical skils tabs */}
            {["Frontend", "Backend", "Other"].map((tab) => (
                <button
                  key = {tab}
                  onClick = {() => setActiveTab(tab)}
                  className={`text-textAccent border border-textAccent/50 rounded-3xl text-sm px-4 py-2 my-5 inline-block w-fit mr-2 ${
                  activeTab === tab
                    ? "bg-accent/50 px-2 text-textColor"
                    : "text-textAccent hover:text-accent"
                  }`}>  
                {tab}                       
                </button>
            ))}
                    

            {/* Skills Bar */}
            <div className="max-w-3xl">
            {/* Frontend Skills */}
              {activeTab === "Frontend" && frontendSkills && (
                <div>
                    {frontendSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="mb-3"
                        >
                        <div className="flex justify-between mb-1">
                            <span className="text-textColor font-medium">{skill.name}</span>
                            <span className="text-textColor/70">{skill.level}%</span>
                        </div>

                        <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1.2, ease: "easeInOut" }}
                                viewport={{ once: true }}
                                className="h-full bg-gradient-to-r from-[#00F0FF]/60 to-[#02B4D4]/60 rounded-full"
                            >
                            </motion.div>
                        </div>

                        </motion.div>
                    ))}
                </div>
              )}
            
             {/* Backend Skills */}
              {activeTab === "Backend" && BackendSkills && (
                <div>
                    {BackendSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="mb-3"
                        >
                        <div className="flex justify-between mb-1">
                            <span className="text-textColor font-medium">{skill.name}</span>
                            <span className="text-textColor/70">{skill.level}%</span>
                        </div>

                        <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1.2, ease: "easeInOut" }}
                                viewport={{ once: true }}
                                className="h-full bg-gradient-to-r from-[#00F0FF]/60 to-[#02B4D4]/60 rounded-full"
                            >
                            </motion.div>
                        </div>

                        </motion.div>
                    ))}
                </div>
              )}

             {/* Other Skills */}
              {activeTab === "Other" && OtherSkills && (
                <div>
                    {OtherSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="mb-3"
                        >
                        <div className="flex justify-between mb-1">
                            <span className="text-textColor font-medium">{skill.name}</span>
                            <span className="text-textColor/70">{skill.level}%</span>
                        </div>

                        <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1.2, ease: "easeInOut" }}
                                viewport={{ once: true }}
                                className="h-full bg-gradient-to-r from-[#00F0FF]/60 to-[#02B4D4]/60 rounded-full"
                            >
                            </motion.div>
                        </div>

                        </motion.div>
                    ))}
                </div>
              )}
            </div>  
        </div>


        <div>
            <h3 className="font-mono text-sm md:text-base bg-accent/20 text-gray-100/90 px-2 py-2 tracking-wider rounded-sm">PROFESSIONAL SKILLS</h3>
            <h3 className="font-mono text-sm md:text-base bg-accent/20 text-gray-100/90 px-2 py-2 tracking-wider rounded-sm">TOOL KIT</h3>

        </div>

    </div>



    
    </section>
  )
}



