import { useState } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaPalette, FaServer, FaCogs, FaClipboardCheck } from 'react-icons/fa';
import { FaDiamond } from "react-icons/fa6";
import { DiamondIcon } from "lucide-react";
import { MdDesignServices } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";

export default function About() {
    const [activeTab, setActiveTab] = useState("About Me");

    // Animation
    const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};


    return(
        <section className="w-full bg-bgColor py-20">
            <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto px-6 mb-30">
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
                  <motion.div 
                    className="space-y-6" 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                  >
                    <p className="font-mono text-sm md:text-base bg-accent/20 text-gray-100/90 px-2 py-1 w-1/2 md:w-1/4 tracking-wider rounded-sm">
                        ABOUT ME
                    </p>

                    <motion.h1 
                      className="font-bold text-2xl md:text-5xl text-textColor tracking-wide pb-2" 
                      variants={item}
                    >
                      Professional Profile
                    </motion.h1>

                    <motion.p 
                      className="text-base text-textColor tracking-wide" 
                      variants={item}
                    >
                      I’m a dedicated full-stack web developer with a strong focus on building modern, efficient, and seamless digital experiences. I enjoy translating ideas into elegant, high-performance applications by combining clean code, intuitive UI/UX, and up-to-date technologies.
                    </motion.p>

                    <motion.p 
                      variants={item}
                      className="text-base text-textColor tracking-wide"> 
                      My journey in tech is fueled by curiosity and the desire to grow. From crafting responsive interfaces and designing scalable architectures to solving complex backend problems, I always strive to enhance both functionality and user experience. I’m constantly learning, experimenting, and pushing myself to create better, smarter solutions.
                    </motion.p>
                  </motion.div>

                  )}

                  {/*-----Background----*/}
                  {activeTab === "Background" && (
                    <motion.div 
                      className="space-y-6"
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.25 }}
                    >

                      <p className="font-mono text-sm md:text-base bg-accent/20 text-gray-100/90 px-2 py-1 w-1/2 md:w-1/4 tracking-wider rounded-sm">
                          BACKGROUND
                      </p>

                      <div className="pb-2">

                        {/* ---Row 1--- */}
                        <motion.div 
                          className="flex grid grid-cols-1 md:grid-cols-2 gap-3 mb-2" 
                          variants={item}
                        >
                            <div className="bg-bgColor border border-accent/30 px-4 py-3 rounded-md">
                              <p className="text-sm text-mutedText">Name</p>
                              <p className="text-textColor font-medium">W Akila Himaja Tissera</p>
                            </div>

                            <div className="bg-bgColor border border-accent/30 px-4 py-3 rounded-md">
                              <p className="text-sm text-mutedText">Location</p>
                              <p className="text-textColor font-medium">Negombo, Sri Lanka</p>
                            </div>
                        </motion.div>

                        {/* ---Row 2--- */}
                        <motion.div 
                          className="flex grid grid-cols-1 md:grid-cols-2 gap-3 mb-2" 
                          variants={item}
                        >
                            <div className="bg-bgColor border border-accent/30 px-4 py-3 rounded-md">
                              <p className="text-sm text-mutedText">Email</p>
                              <p className="text-textColor font-medium">akilatissera400@gmail.com</p>
                            </div>

                            <div className="bg-bgColor border border-accent/30 px-4 py-3 rounded-md">
                              <p className="text-sm text-mutedText">Contact</p>
                              <p className="text-textColor font-medium">+94 767369080</p>
                            </div>
                        </motion.div>

                        {/* ---Row 3--- */}
                        <motion.div 
                          className="mb-2" 
                          variants={item}
                        >
                            <div className="bg-bgColor border border-accent/30 px-4 py-3 rounded-md">
                              <p className="text-sm text-mutedText">Acadamic Background</p>
                              <p className="text-textColor font-medium">BSc (Hons) in Information Technology (Undergraduate) - SLIIT</p>
                              <p className="text-textColor font-medium">Ave Maria Convent (School)</p>
                            </div>
                        </motion.div>

                        {/* ---Row 4--- */}
                        <motion.div 
                          className="flex grid grid-cols-1 md:grid-cols-2 gap-3 mb-2" 
                          variants={item}
                        >
                            <div className="bg-bgColor border border-accent/30 px-4 py-3 rounded-md">
                              <p className="text-sm text-mutedText">Current Role</p>
                              <p className="text-textColor font-medium">Intern Full-Stack Developer</p>
                            </div>

                            <div className="bg-bgColor border border-accent/30 px-4 py-3 rounded-md">
                              <p className="text-sm text-mutedText">Experiance</p>
                              <p className="text-textColor font-medium">Intern SE at Rangiri Holdings</p>
                            </div>
                        </motion.div>

                      </div>
                    </motion.div>
                  )}

                  {/* Aspiration */}
                  {activeTab === "Aspiration" && (
                    <motion.div 
                      className="space-y-6"
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.25 }}
                    >

                      <p className="font-mono text-sm md:text-base bg-accent/20 text-gray-100/90 px-2 py-1 w-1/2 md:w-1/4 tracking-wider rounded-sm">
                          ASPIRATION
                      </p>

                      <motion.p 
                        className="text-base text-textColor tracking-wide" 
                        variants={item}
                      >
                        I aspire to grow into a highly skilled full-stack developer focused on building 
                        scalable, user-centric digital solutions. My goal is to deepen my expertise in 
                        modern web technologies, system architecture, and cloud-based development while 
                        contributing to impactful real-world projects. 
                      </motion.p>

                      <motion.p 
                        className="text-base text-textColor tracking-wide" 
                        variants={item}
                      > 
                        I aim to work in a dynamic engineering environment where I can solve meaningful 
                        problems, collaborate with talented teams, and continuously refine my craft. In 
                        the long run, I hope to lead innovative projects that blend creativity, technology, 
                        and thoughtful design to create experiences that truly make a difference.
                      </motion.p>

                    </motion.div>
                  )}
                </div>

                <a href="#">
                  <button className="border-2 border-accent/80 text-base font-semibold text-textColor tracking-wide px-3 py-3 rounded-md mt-5 hover:bg-accent/50">
                    Download Resume
                  </button>
                </a>
                </div>
            </div>  


            {/*-----------Services Section------------*/}
            <motion.div 
              className="space-y-5 px-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >

            <motion.h3 
              className="font-mono text-base text-textAccent text-center mb-0"
              variants={item} 
            >
              SERVICES
            </motion.h3>
            
              <h2 className="font-bold text-3xl md:text-5xl text-textColor pb-2 leading-tight text-center">Services I Offer</h2>
              <p className="text-base text-textColor tracking-wide text-center mx-auto max-w-3xl">
                I provide end-to-end digital solutions, including responsive web development, intuitive UI/UX design, 
                scalable backend systems, and full-stack applications that deliver high-quality, user-focused experiences.
              </p>

              <div className="py-2">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 px-6">

                  {/* Service 1 */}
                  <div className="bg-bgColor border border-accent/40 p-6 text-center">
                    <MdDesignServices className="text-4xl text-accent/50 mb-4 mx-auto" />
                    <h3 className="font-semibold text-xl text-textColor mt-5">UI/UX Design</h3>
                  </div>

                  {/* Service 2 */}
                  <div className="bg-bgColor border border-accent/40 p-6 text-center ">
                    <FaLaptopCode className="text-4xl text-accent/50 mb-4 mx-auto" />
                    <h3 className="font-semibold text-xl text-textColor mt-5">Web Development</h3>
                  </div>

                  {/* Service 3 */}
                  <div className="bg-bgColor border border-accent/40 p-6 text-center ">
                    <FaServer className="text-4xl text-accent/50 mb-4 mx-auto" />
                    <h3 className="font-semibold text-xl text-textColor mt-5">Backend Development</h3>
                  </div>

                  {/* Service 4 */}
                  <div className="bg-bgColor border border-accent/40 p-6 text-center ">
                    <FaClipboardCheck className="text-4xl text-accent/50 mb-4 mx-auto" />
                    <h3 className="font-semibold text-xl text-textColor mt-5">QA/ Testing</h3>
                  </div>

                </div>
              </div>

            </motion.div>
        </section>
    )
}

