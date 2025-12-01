import React from "react";
import { useState } from "react";

export default function About() {
    const [activeTab, setActiveTab] = useState("About Me");

    return(
        <section className="w-full bg-bgColor py-20 min-h-screen">
            <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto px-6">
                <div className="relative ">

                </div>

                {/*-----------Right Section------------*/}

                {/* About Me Nav Section */}
                <div>
                    <div className="flex gap-4 border-b-2 border-t-2 border-accent/50 py-2 pl-3">
                        {["About Me", "Background", "Aspiration"].map((tab) => (
                            <button
                               key = {tab}
                               onClick = {() => setActiveTab(tab)}
                               className={`pb-2 py-2 font-mono tracking-wider uppercase ${
                                    activeTab === tab
                                        ? "bg-accent/50 px-2"
                                        : "text-secTextColor hover:text-accent"
                                    }`}
                               >  
                               {tab}                       
                            </button>
                        ))}
                    </div>

                {/* Dynamic Content Section */}
                <div className="mt-8 mb-4">

                {/*-----About Me----*/}
                {activeTab === "About Me" && (
                  <div className="space-y-6">
                    <p className="font-mono text-sm md:text-base bg-accent/20 text-gray-100/90 px-2 py-1 w-1/2 md:w-1/4 tracking-wider rounded-sm">
                        ABOUT ME
                    </p>

                    <h1 className="font-bold text-2xl md:text-5xl text-textColor tracking-wide pb-2">Professional Profile</h1>

                    <p className="text-base text-textColor tracking-wide">
                      I’m a dedicated full-stack web developer with a strong focus on building modern, efficient, and seamless digital experiences. I enjoy translating ideas into elegant, high-performance applications by combining clean code, intuitive UI/UX, and up-to-date technologies.
                    </p>

                    <p className="text-base text-textColor tracking-wide"> 
                      My journey in tech is fueled by curiosity and the desire to grow. From crafting responsive interfaces and designing scalable architectures to solving complex backend problems, I always strive to enhance both functionality and user experience. I’m constantly learning, experimenting, and pushing myself to create better, smarter solutions.
                    </p>
                  </div>

                  )}

                  {/*-----Background----*/}
                  {activeTab === "Background" && (
                    <div className="space-y-6">
                      <p className="font-mono text-sm md:text-base bg-accent/20 text-gray-100/90 px-2 py-1 w-1/2 md:w-1/4 tracking-wider rounded-sm">
                          BACKGROUND
                      </p>

                      <div className="pb-2">
                        {/* ---Row 1--- */}
                        <div className="flex grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
                            <div className="bg-bgColor border border-accent/30 px-4 py-3 rounded-md">
                              <p className="text-sm text-mutedText">Name</p>
                              <p className="text-textColor font-medium">W Akila Himaja Tissera</p>
                            </div>

                            <div className="bg-bgColor border border-accent/30 px-4 py-3 rounded-md">
                              <p className="text-sm text-mutedText">Location</p>
                              <p className="text-textColor font-medium">Negombo, Sri Lanka</p>
                            </div>
                        </div>
                        {/* ---Row 2--- */}
                        <div className="flex grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
                            <div className="bg-bgColor border border-accent/30 px-4 py-3 rounded-md">
                              <p className="text-sm text-mutedText">Email</p>
                              <p className="text-textColor font-medium">akilatissera400@gmail.com</p>
                            </div>

                            <div className="bg-bgColor border border-accent/30 px-4 py-3 rounded-md">
                              <p className="text-sm text-mutedText">Contact</p>
                              <p className="text-textColor font-medium">+94 767369080</p>
                            </div>
                        </div>
                        {/* ---Row 3--- */}
                        <div className="mb-2">
                            <div className="bg-bgColor border border-accent/30 px-4 py-3 rounded-md">
                              <p className="text-sm text-mutedText">Acadamic Background</p>
                              <p className="text-textColor font-medium">BSc (Hons) in Information Technology (Undergraduate) - SLIIT</p>
                              <p className="text-textColor font-medium">Ave Maria Convent (School)</p>
                            </div>
                        </div>
                        {/* ---Row 4--- */}
                        <div className="flex grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
                            <div className="bg-bgColor border border-accent/30 px-4 py-3 rounded-md">
                              <p className="text-sm text-mutedText">Current Role</p>
                              <p className="text-textColor font-medium">Intern Full-Stack Developer</p>
                            </div>

                            <div className="bg-bgColor border border-accent/30 px-4 py-3 rounded-md">
                              <p className="text-sm text-mutedText">Experiance</p>
                              <p className="text-textColor font-medium">Intern SE at Rangiri Holdings</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Aspiration */}
                  {activeTab === "Aspiration" && (
                    <div className="space-y-6">
                      <p className="font-mono text-sm md:text-base bg-accent/20 text-gray-100/90 px-2 py-1 w-1/2 md:w-1/4 tracking-wider rounded-sm">
                          ASPIRATION
                      </p>
                      <p className="text-base text-textColor tracking-wide">
                        I aspire to grow into a highly skilled full-stack developer focused on building 
                        scalable, user-centric digital solutions. My goal is to deepen my expertise in 
                        modern web technologies, system architecture, and cloud-based development while 
                        contributing to impactful real-world projects. 
                      </p>
                      <p className="text-base text-textColor tracking-wide">
                        I aim to work in a dynamic engineering environment where I can solve meaningful 
                        problems, collaborate with talented teams, and continuously refine my craft. In 
                        the long run, I hope to lead innovative projects that blend creativity, technology, 
                        and thoughtful design to create experiences that truly make a difference.
                      </p>
                    </div>
                  )}
                </div>

                <a href="#">
                  <button className="border-2 border-accent/80 text-base font-semibold text-textColor tracking-wide px-3 py-3 rounded-md mt-5 hover:bg-accent/50">
                    Download Resume
                  </button>
                </a>
                </div>
            </div>  
        </section>
    )
}

