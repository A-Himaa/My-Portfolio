import {motion} from "framer-motion";

export default function Contact() {

const fadeInOut = (
    delay = 0,
    duration = 0.8
  ) => ({
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration,
        ease: "easeOut"
      }
    }
  });
  
    return(
    <section className="bg-gradient-to-b from-[#061936] via-[#11104A] to-[#041024] min-h-screen text-center pt-20">
        <div className="relative space-y-6">
           <div className="inline-flex p-[1.5px] rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 opacity-90 to-fuchsia-500 shadow-[0_0_25px_rgba(139,92,246,0.45)]">
              <button className="px-5 rounded-full py-1 bg-[#060321] text-white/90 font-NavtextR backdrop-blur-md">
                Contacts
              </button>
            </div>

            <motion.h2 
                className="text-textColor font-Herohead font-semibold text-2xl md:text-4xl"
                variants={fadeInOut(0.3)}
                initial="hidden"
                whileInView="visible"
            >
                <span className="bg-gradient-to-r text-4xl md:text-5xl from-indigo-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
                L
                </span>
                ET'S CONNECT
            </motion.h2>
        </div>
    </section>
        
        
    )
}