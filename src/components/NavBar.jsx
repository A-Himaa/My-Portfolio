import { FiDownload } from "react-icons/fi";
import { useEffect } from "react";

export default function navbar() {

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
          {/* <li className="hover:text-accent transition duration-300"><a href="#about">About</a></li> */}
          <li className="navigation-link hover:scale-120 transition-scale duration-400"><a href="#skills">Skills</a></li>
          <li className="navigation-link hover:scale-120 transition-scale duration-400"><a href="#projects">Projects</a></li>
          <li className="navigation-link hover:scale-120 transition-scale duration-400"><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/*-----Resume Button-----*/}
      <div>
        <div>
          <button className="relative text-white border border-white/20 
               px-6 py-2 rounded-full font-NavtextR font-medium text-lg tracking-wider
               backdrop-blur-xl bg-white/7 overflow-hidden group cursor-pointer hover:bg-gradient-to-r hover:from-violet-950 hover:via-purple-800 hover:to-blue-950 hover:border-white/50 hover:scale-105 transition-colors duration-500">
                <span className="absolute inset-0 bg-white opacity-30 rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] blur-sm transition-transform duration-800"></span>
              <span className="relative flex gap-4 items-center z-10">
                Resume <FiDownload size={18} />
              </span>

          </button>
        </div>


      </div>


    </nav>

  )
}


{/* <button
    className="relative flex items-center gap-2 border text-white border-white/20 
               px-6 py-2 rounded-full font-NavtextR font-medium text-lg tracking-wider
               backdrop-blur-xl bg-white/7 overflow-hidden group"
  >
    <span
      className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400
                 opacity-50 blur-lg transform -translate-x-full
                 group-hover:translate-x-0 transition-transform duration-1000 ease-in-out"
    ></span>

    <span className="relative z-10 flex items-center gap-2">
      Resume <FiDownload size={18} />
    </span>
  </button> */}