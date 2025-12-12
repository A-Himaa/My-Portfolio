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
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/40" />
            
        </section>
    )
}