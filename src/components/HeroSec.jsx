import { motion } from "framer-motion";
import refImage from "../assets/refImg.jpg";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Herosec() {

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

    return(
        <section className="max-w-6xl mx-auto px-6 pt-20 grid grid-cols-1 md:grid-cols-[3fr_2fr]">
            <div className="space-y-5">

                <p className="font-mono text-base bg-accent/20 text-gray-100/90 px-2 py-1 w-1/4 tracking-wider rounded-sm">
                    HIMAJA TISSERA
                </p>

                <h1 className="font-bold text-5xl text-textColor tracking-wider pb-2">
                    HEY! I'M <span className="text-textAccent drop-shadow-[0_0_2px_#64FFDA66] font-serif italic">HIMAJA</span> 
                </h1>

                <h2 className="font-bold text-5xl text-textColor pb-2 leading-tight">
                    I bring ideas to life through code & design.
                </h2>

                <Typewriter textArray={["Aspiring Full-Stack Developer", "Problem Solver", "Goal-Oriented", ]}/>

                <p className="text-base text-textColor tracking-wide">
                    I build scalable and efficient web applications with a focus on user-centric solutions. 
                    Passionate about tackling complex challenges and delivering innovative digital experiences 
                    that combine performance, usability, and creativity.
                </p>

                <div className="flex items-center gap-6">
                    <a href="#">
                        <button className="bg-textAccent text-lg font-bold text-bgColor tracking-wide px-5 py-4 rounded-sm mt-2 transition-transform duration-300 hover:scale-[1.1] hover:bg-buttonHover">
                        View My Work
                        </button>
                    </a>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 mt-2">

                        {/* GitHub */}
                        <a href="#" className="text-textColor hover:text-textAccent transition-transform duration-300 hover:scale-110">
                            <FaGithub size={40} strokeWidth={1.7} />
                        </a>

                        {/* LinkedIn */}
                        <a
                        href="#"
                        className="text-textColor hover:text-textAccent transition-transform duration-300 hover:scale-110"
                        >
                        <FaLinkedin size={40} strokeWidth={1.7} />
                        </a>

                    </div>

                    </div>


            </div>
            <div>
                {/* <h1 className="text-textColor text-5xl font-bold">Building Smart, Efficient & Human-Centered Web Solutions</h1> */}

            </div>
        </section>
    )
}




















