import React, { useRef, useEffect } from "react";

export default function HeroSec() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current){
            videoRef.current.playbackRate = 0.5;
        }
    }, []);

    return (
        <section>
            {/* Video Background */}
            <video 
                ref={videoRef}
                className="absolute inset-0 w-full object-cover"
                src="/src/assets/HeroBg.mp4"
                autoPlay
                loop
                muted
                playsInline/>

                {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/50" />

            {/* Overlay Content */}
            <div className="relative items-center justify-center flex flex-col mx-auto max-w-3xl min-h-screen">
                <h3>Software Engineer</h3>
                <h1>HIMAJA</h1>
                <h1>TISSERA</h1>
                <h3>Architecting the future web</h3>
                <p>
                    I build scalable and efficient web applications with a focus on user-centric solutions. 
                    Passionate about tackling complex challenges and delivering innovative digital experiences 
                    that combine performance, usability, and creativity.
                </p>
                <div>
                    <button>Contact Me</button>
                    <button>View My Work</button>
                </div>
            </div>

        
        </section>
    )
}