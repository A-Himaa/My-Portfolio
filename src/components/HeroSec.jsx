import React, { useRef, useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

export default function HeroSec() {
    const videoRef = useRef(null);

    // Video Play Speed
    useEffect(() => {
        if (videoRef.current){
            videoRef.current.playbackRate = 0.5;
        }
    }, []);

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
        <p className="font-NavtextR text-xl tracking-widest text-white/70 mb-2">
            {displaying}
            <span className="animate-blink border-r-2 border-textColor ml-1"></span>
        </p>
        );
    }

    // Dynamic Grid Lines
    useEffect(() => {
        const lineContainer = document.getElementById("scan-lines");

        if (!lineContainer) return;

        const lineGridSize = 50;
        const maxLines = 3;

        const glowLines = () => {
            if (lineContainer.children.length > maxLines) return;

            const line = document.createElement("div");
            const isHorizontal = Math.random() > 0.5;

            line.className = `scan ${isHorizontal ? "horizontal" : "vertical"}`;

            if (isHorizontal) {
                const row = Math.floor(Math.random() * (window.innerHeight / lineGridSize));
                line.style.top = `${row * lineGridSize}px `;
            }
            else {
                const col = Math.floor(Math.random() * (window.innerWidth / lineGridSize));
                line.style.left =  `${col * lineGridSize}px `;
            }

            lineContainer.appendChild(line);

            setTimeout(() => {
                line.remove();
            }, 3500);
        };

        const interval = setInterval(glowLines, 1500);

        return () => clearInterval(interval);
    }, []);

    // Sliding Text
    const textLeft = useRef(null);
    const textRight = useRef(null);

    useEffect(() => {
        const onScroll =  () => {
            const scrollY = window.scrollY;
            const max = 140;
            const move = Math.min(scrollY * 0.25, max);

            if(textLeft.current && textRight.current){
                textLeft.current.style.setProperty("--scroll-x", `${-move}px`);
                textRight.current.style.setProperty("--scroll-x", `${move}px`);
            }
        };

        window.addEventListener("scroll", onScroll);
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
        <section>
            {/* Video Background */}
            <video 
                ref={videoRef}
                className="absolute inset-0 w-full h-screen object-center object-cover"
                src="/src/assets/HeroBg.mp4"
                autoPlay
                loop
                muted
                playsInline/>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/50" />

            <div
                id="scan-lines"
                className="absolute inset-0 pointer-events-none overflow-hidden h-screen">
            </div>

            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px] 
                            pointer-events-none h-screen">
            </div>

            {/* Overlay Content */}
            <div className="relative items-center justify-center flex flex-col mx-8 md:mx-auto max-w-3xl min-h-screen gap-2 md:gap-4 top-8 h-screen">

                <h3>
                    <Typewriter textArray={["Software Engineer", "Full-Stack developer", "Creative Technologist"]}/>
                </h3>
                
                <div className="text-center">
                    <h1 
                        ref={textLeft}
                        className="hero-Name left font-Herohead text-textColor font-bold text-3xl md:text-5xl lg:text-8xl tracking-wider">HIMAJA</h1>

                    <h1
                        ref={textRight} 
                        className="hero-Name right font-Herohead font-bold text-3xl md:text-5xl lg:text-8xl tracking-wider bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent ">
                        TISSERA
                    </h1>
                </div>
                
                <h3 className="font-NavtextR text-white/90 text-base md:text-xl lg:text-2xl tracking-widest mt-2">Architecting the future web</h3>

                <p className="text-white/60 text-center text-sm mx-5 mx:px-0 tracking-wide md:tracking-w md:text-lg max-w-3xl mt-3">
                    I’m an aspiring software engineer who builds scalable and efficient web applications with a user-first mindset. 
                    Passionate about learning and innovation, I turn complex ideas into modern, future-focused digital experiences.
                </p>
                
                <div className="flex mt-7 gap-4 items-center">
                    <button className="flex items-center gap-2 px-3 md:px-5 py-3 text-base md:text-xl font-NavtextR text-white tracking-wider rounded-2xl bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 hover:scale-105 transition-all duration-300">View My Work<FaArrowCircleRight /></button>
                    
                    <button className="px-3 md:px-6 py-3 text-base md:text-xl font-NavtextR tracking-wider text-white rounded-2xl border border-white/30 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/60 hover:scale-105">Contact Me</button>
                </div>
            </div>

        
        </section>

        </>
    )
}