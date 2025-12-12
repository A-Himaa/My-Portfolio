import React from "react";

export default function HeroSec() {

    return (
        <section>
            {/* Video Background */}
            <video 
                className="absolute inset-0 w-full object-cover"
                src="/src/assets/HeroBg.mp4"
                autoPlay
                loop
                muted
                playsInline/>

                {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        </section>
    )
}