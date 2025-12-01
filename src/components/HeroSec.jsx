import { motion } from "framer-motion";
import refImage from "../assets/refImg.png";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Herosec() {

    // Typewriter Text
    const Typewriter = ({textArray, speed = 120, pause = 1000}) => {
        const [index, setIndex] = useState(0);
        const [displaying, setDisplaying] = useState("");
        const [deleting, setDeleting] = useState(false);

        useEffect(() => {
            const currentText = textArray[index % textArray.length];
            let typeSpeed = deleting ? speed / 2 : speed;

           if (!deleting && displaying === currentText) {
            const timeout = setTimeout(() => {
                setDeleting(true);
            }, pause);
            return () => clearTimeout(timeout);
            }
            else if (deleting && displaying === "") {
                setDeleting(false);
                setIndex((prev) => prev + 1);
            }

            const timeOut = setTimeout (() => {
                setDisplaying(
                    deleting
                        ? currentText.slice(0, displaying.length - 1)
                        : currentText.slice(0, displaying.length + 1)
                );
            }, typeSpeed);
            return () => clearTimeout(timeOut);
        }, [displaying, deleting, index, textArray, speed, pause]);

        return (
        <p className="text-2xl font-semibold text-textAccent mt-2">
            {displaying}
            <span className="animate-blink border-r-2 border-accent ml-1"></span>
        </p>
        );
    }

    // Animation
    const container = {
        hidden: { opacity: 0 },
        show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25, 
        }
        }
    };

    const item = {
        hidden: { 
            opacity: 0, 
            y: 20 
        },
        show: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.6, 
                ease: "easeOut" 
            }
         }
    };

    return(
        <section className="max-w-6xl mx-auto px-6 pt-20 grid grid-cols-1 md:grid-cols-[3fr_2fr] mb-15">

            {/*-----------Hero - Left-----------------------*/}
            <motion.div 
                className="space-y-5"
                variants={container}
                initial="hidden"
                animate="show"
            >

                <motion.p
                    variants={item}
                    className="font-mono text-sm md:text-base bg-accent/20 text-gray-100/90 px-2 py-1 w-1/2 md:w-1/4 tracking-wider rounded-sm">
                    WEB DEVELOPER
                </motion.p>

                <motion.h1
                    variants={item}
                    className="font-bold text-3xl md:text-5xl text-textColor tracking-wider pb-2">
                    HEY! I'M <span className="text-textAccent drop-shadow-[0_0_2px_#64FFDA66] font-serif italic">HIMAJA</span> 
                </motion.h1>

                <motion.h2
                    variants={item}
                    className="font-bold text-3xl md:text-5xl text-textColor pb-2 leading-tight">
                    I bring ideas to life through code & design.
                </motion.h2>
                <motion.div variants={item}>
                   <Typewriter textArray={["Aspiring Full-Stack Developer", "Software Engineering Enthusiast", "Efficient Problem Solver", "Tech Explorer & Fast Learner", "Goal-Driven & Self-Motivated"]}/>

                </motion.div>


                <motion.p 
                    variants={item}
                    className="text-base text-textColor tracking-wide">
                    I build scalable and efficient web applications with a focus on user-centric solutions. 
                    Passionate about tackling complex challenges and delivering innovative digital experiences 
                    that combine performance, usability, and creativity.
                </motion.p>

                <motion.div 
                    variants={item}
                    className="flex items-center gap-6">
                    <a href="#">
                        <button className="bg-textAccent text-base md:text-lg font-bold text-bgColor tracking-wide px-5 py-4 rounded-sm mt-2 transition-transform duration-300 hover:scale-[1.1] hover:bg-buttonHover">
                        Explore My Work
                        </button>
                    </a>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 mt-2">

                        <a href="#" className="text-textColor hover:text-buttonHover transition-transform duration-300 hover:scale-[1.1] opacity-80">
                            <FaGithub size={40} strokeWidth={1.7} />
                        </a>

                        <a
                        href="#"
                        className="text-textColor hover:text-buttonHover transition-transform duration-300 hover:scale-[1.1] opacity-80"
                        >
                        <FaLinkedin size={40} strokeWidth={1.7} />
                        </a>

                    </div>
                </motion.div>


            </motion.div>

            {/*-----------Hero - Right----------------------*/}
            <div className="relative w-full flex justify-center items-center">

                <div className="absolute w-[420px] h-[420px] top-2 rounded-full bg-gray-500 z-30"></div>
                <div className="absolute w-[450px] h-[450px] -top-4 border-2 border-white/10 rounded-full z-30"></div>
                <div className="absolute w-[180px] h-[180px] rounded-full bg-gray-500/50 -top-10 -right-5"></div>
                <div className="absolute w-[180px] h-[180px] rounded-full bg-gray-500/50 bottom-5 -left-5"></div>

                <img 
                   src={refImage}
                   alt="Profile Image"
                   className="w-[320px] md:w-[340px] ml-15 z-50"/>
            </div>
             
        </section>
    )
}
















