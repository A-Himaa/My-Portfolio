import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BsCodeSlash, BsPerson, BsChat } from "react-icons/bs";
import { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  // Glass Cursor Effect
  useEffect (() => {
    const glassArea = document.querySelector(".group\\/nav-area");
    const glass = document.querySelector("#glass");
    if (!glassArea || !glass) return;

    function handleCursorMove(e) {
      const rect = glassArea.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      glass.style.opacity = 1;
      glass.style.left = `${x}px`;
      glass.style.top = `${y}px`;

      const mouseHovered = e.target.closest("a");
      document.querySelectorAll(".group\\/nav-area a").forEach(a => {
        a.style.trasform = "scale(1)";
      });

      if (mouseHovered) mouseHovered.style.transform = "scale(1.4)";
    }

    function handleCursorleave() {
      glass.style.opacity = 0;
      document.querySelectorAll(".group\\/nav-area a").forEach(a => {
      a.style.transform = "scale(1)";
      });
    }

    glassArea.addEventListener("mousemove", handleCursorMove);
    glassArea.addEventListener("mouseleave", handleCursorleave);

    return () => {
      glassArea.removeEventListener("mousemove", handleCursorMove);
      glassArea.removeEventListener("mouseleave", handleCursorleave);
    };
    
  }, []);
  
  return (
    <>
    {/*============ Desktop Navigation Bar ============ */}

    <nav className="w-[75vw] mx-auto py-4 flex justify-between items-center bg-white/6 backdrop-blur-2xl border border-white/12 fixed rounded-full top-4 left-1/2 -translate-x-1/2 z-50 px-7 shadow-inner shadow-white/12">

      {/*-----Logo-----*/}
      <div className="flex items-center">
        <a href="#">
          <div className="h-10 w-10 bg-gradient-to-br from-blue-700 via-purple-500 to-indigo-900 text-white flex items-center justify-center rounded-lg font-bold text-lg shadow-lg hover:scale-120 transition-scale duration-500">
            HT
          </div>
        </a>
      </div>

 
      {/*----Navigation Links-----*/}
      <div className="relative group/nav-area cursor-none">
        <div id="glass" className="glass-cursor"></div>

        <ul className="hidden md:flex items-center gap-15 text-textColor font-NavtextR font-medium text-lg tracking-wider ">
          <li className="navigation-link hover:scale-120 transition-scale duration-400"><a href="#about">About</a></li>
          <li className="navigation-link hover:scale-120 transition-scale duration-400"><a href="#skills">Skills</a></li>
          <li className="navigation-link hover:scale-120 transition-scale duration-400"><a href="#projects">Projects</a></li>
          <li className="navigation-link hover:scale-120 transition-scale duration-400"><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/*-----Resume Button-----*/}
        <div className="hidden lg:block">
          <button className="relative text-white border border-white/20 
                             px-6 py-2 rounded-full font-NavtextR font-medium text-lg tracking-wider
                             backdrop-blur-xl bg-white/7 overflow-hidden group cursor-pointer hover:bg-gradient-to-r hover:from-violet-950 hover:via-purple-900 hover:to-blue-950 hover:border-white/50 hover:scale-105 transition-colors duration-500">
                <span className="absolute inset-0 bg-white opacity-30 rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] blur-sm transition-transform duration-800"></span>
              <span className="relative flex gap-4 items-center z-10">
                Resume <FiDownload size={18} />
              </span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpenMenu(true)}
          className="md:hidden text-white text-3xl">
            <FiMenu />
        </button>
    </nav>

    {/* ========= Mobile Menu =============== */}

    <div className={`fixed inset-0 z-[999] p-5 transition-all duration-500 ${openMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none" } bg-gradient-to-br from-blue-950 via-violet-850 to-violet-900 backdrop-blur-3xl`}>
      <div className="flex justify-between items-center relative right-0">

        <div className="flex items-center">
            <a href="#">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-700 via-purple-500 to-indigo-900 text-white flex items-center justify-center rounded-lg font-bold text-lg shadow-lg hover:scale-120 transition-scale duration-500">
                HT
              </div>
            </a>
          </div>

          <button 
            onClick={() => setOpenMenu(false)}
            className="h-10 w-10 rounded-full opacity-80 bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-white text-xl shadow-lg">
            <FiX />
          </button>
        </div>

      <div className="flex flex-col gap-4 mt-5 mb-4">
        <MobileItem icon={<HiOutlineSquares2X2 />} label="HOME" />
        <MobileItem icon={<BsPerson />} label="ABOUT" />
        <MobileItem icon={<BsCodeSlash />} label="SKILLS" />
        <MobileItem icon={<MdOutlineWorkOutline />} label="PROJECTS" />
        <MobileItem icon={<BsChat />} label="CONTACT" />
      </div>

      {/* Bottom Section*/}
      <div className="mt-auto mb-6 bg-white/5 rounded-3xl p-6 border border-white/10">
        <p className="font-NavtextR font-md tracking-widest text-white/60 mb-4">CONNECT</p>

            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 transition"><FaLinkedin /></div>
              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 transition"><FaEnvelope /></div>
              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 transition"><FaGithub /></div>
            </div>

            <p className="text-[10px] text-white/40 mt-6 tracking-widest">
              © 2025 HIMAJA TISSERA
            </p>
      </div>
    </div>
   </>

  )
}

// Helping Function
const MobileItem = ({ icon, label}) => (
  <a className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover-border-white/30 transition">
    {icon}
    <span className="tracking-wider font-NavtextR font-lg">{label}</span>
  </a>
);



