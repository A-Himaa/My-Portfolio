import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaTwitter, FaDiscord } from "react-icons/fa";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const fadeInOut = (delay = 0, duration = 0.8) => ({
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

  const slideInLeft = (delay = 0) => ({
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  });

  const slideInRight = (delay = 0) => ({
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  });

  const contactCards = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: "akilatissera400@gmail.com",
      link: "mailto:akilatissera400@gmail.com",
      gradient: "from-blue-700 to-cyan-700",
      delay: 0.2
    },
    {
      icon: <Phone className="text-2xl" />,
      title: "Phone",
      value: "+94 76 736 9080",
      link: null,
      gradient: "from-indigo-500 to-violet-600",
      delay: 0.3
    },
    {
      icon: <MapPin className="text-2xl" />,
      title: "Location",
      value: "Negombo, Sri Lanka",
      link: null,
      gradient: "from-purple-500 to-fuchsia-500",
      delay: 0.4
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/akila-himaja-4b5076314/",
      color: "hover:bg-blue-600"
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      link: "https://github.com/A-Himaa",
      color: "hover:bg-gray-700"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#061936] via-[#11104A] to-[#041024] min-h-screen text-center pb-5 pt-30">
            
      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-10">
        
        <div className="relative space-y-6 mb-16">
          <div className="inline-flex p-[1.5px] rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 opacity-90 to-fuchsia-500 shadow-[0_0_25px_rgba(139,92,246,0.45)]">
            <button className="px-5 rounded-full py-1 bg-[#060321] text-white/90 font-NavtextR backdrop-blur-md">
              Contact
            </button>
          </div>

          <motion.h2 
            className="text-textColor font-Herohead font-semibold text-2xl md:text-4xl"
            variants={fadeInOut(0.1)}
            initial="hidden"
            whileInView="visible"
          >
            <span className="bg-gradient-to-r text-4xl md:text-5xl from-indigo-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
              L
            </span>
            ET'S CONNECT
          </motion.h2>

          <motion.p 
            className="text-white/50 text-lg max-w-2xl mx-auto font-NavtextR pb-4"
            variants={fadeInOut(0.2)}
            initial="hidden"
            whileInView="visible"
          >
            Ready to bring your ideas to life? Let's build something amazing together.
          </motion.p>
        </div>


        {/* Contacts section Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          
          {/* Left - Contact Info Cards */}
          <div className="space-y-4">
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                variants={slideInLeft(card.delay)}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {card.link ? (
                  <a
                    href={card.link}
                    className="block relative group"
                  >
                    <div className="relative group">

                    <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                    <div className="relative bg-white/5 border border-white/15 backdrop-blur-xl rounded-2xl p-6 flex items-center gap-6 hover:border-white/30 transition-all duration-300">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white shadow-lg`}>
                        {card.icon}
                      </div>
                      <div className="text-left flex-1">
                        <p className="text-white/50 text-sm font-NavtextR tracking-wider mb-1">{card.title}</p>
                        <p className="text-white font-semibold text-lg">{card.value}</p>
                      </div>
                    </div>
                  </div>
                  </a>

                ) : (
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                    <div className="relative bg-white/5 border border-white/15 backdrop-blur-xl rounded-2xl p-6 flex items-center gap-6 hover:border-white/30 transition-all duration-300">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white shadow-lg`}>
                        {card.icon}
                      </div>
                      <div className="text-left flex-1">
                        <p className="text-white/50 text-sm font-NavtextR tracking-wider mb-1">{card.title}</p>
                        <p className="text-white font-semibold text-lg">{card.value}</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right - Social Links Grid */}
          <motion.div
            variants={slideInRight(0.3)}
            initial="hidden"
            whileInView="visible"
            className="relative"
          >
            <div className="relative bg-white/5 border border-white/15 backdrop-blur-xl shadow-inner shadow-white/15 rounded-3xl p-8 h-full">
              <h3 className="text-white/80 text-2xl font-semibold mb-6 ">
                Connect With Me
              </h3>
              
              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >

                    <div className="relative border border-white/15 shadow-inner shadow-white/15 backdrop-blur-xl rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-white/15 transition-all duration-300 group-hover:bg-white/5">
                      <div className={`w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/70 group-hover:text-white transition-all duration-300 ${social.color}`}>
                        <span className="text-xl">{social.icon}</span>
                      </div>
                      <span className="text-white/60 text-sm font-NavtextR group-hover:text-white/80 transition-colors duration-300">
                        {social.name}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Quick Message */}
              <div className="mt-4 p-6 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-2xl border border-white/15 shadow-inner shadow-white/10">
                <p className="text-white/80 text-sm font-NavtextR mb-3">
                  Have a project in mind? I'm always open to discussing new opportunities and ideas.
                </p>
                <a
                  href="mailto:akilatissera400@gmail.com"
                  className="inline-flex items-center gap-2 relative text-white px-3 md:px-5 py-3 rounded-xl bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 overflow-hidden cursor-pointer hover:bg-gradient-to-r hover:from-violet-950 hover:via-purple-900 hover:to-blue-950 hover:border-white/50 hover:scale-105 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Send Message
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={fadeInOut(0.5)}
          initial="hidden"
          whileInView="visible"
          className="relative mb-10"
        >
          <div className="relative bg-gradient-to-r from-indigo-600/10 via-purple-600/15 to-fuchsia-600/15 border border-white/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-inner shadow-white/15">
            <h3 className="text-white text-2xl md:text-3xl font-Herohead font-semibold mb-4">
              Let's Build Something Extraordinary
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto mb-6 font-NavtextR">
              Whether you have a question, a project idea, or just want to say hello, I'd love to hear from you. Let's turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:himajatissera@gmail.com"
                className="inline-flex font-NavtextR font-semibold flex items-center justify-center gap-2 relative text-white px-3 md:px-5 py-3 rounded-xl bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 overflow-hidden cursor-pointer hover:bg-gradient-to-r hover:from-violet-950 hover:via-purple-900 hover:to-blue-950 hover:border-white/50 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                Get In Touch
              </a>

              <a
                href="https://github.com/A-Himaa"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl text-white font-semibold font-NavtextR hover:bg-white/20 flex items-center justify-center gap-2"
              >
                <FaGithub className="w-5 h-5" />
                View GitHub
              </a>
            </div>
          </div>
        </motion.div>

      </div>

      <div>
        <p className="text-sm text-gray-400">
  © {new Date().getFullYear()} Akila Himaja. All rights reserved.
</p>
      </div>
    </section>
  );
}