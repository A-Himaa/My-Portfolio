import { FiDownload } from "react-icons/fi";

export default function navbar() {
  return (
    <nav className="w-[75vw] mx-auto py-4 flex justify-between items-center bg-white/5 backdrop-blur-md fixed rounded-full top-4 left-1/2 -translate-x-1/2 z-50 px-7 ">
  
      {/*-----Logo-----*/}
      <div className="flex items-center">
        <a href="#">
          <div className="h-10 w-10 bg-gradient-to-br from-blue-700 via-purple-500 to-indigo-900 text-white flex items-center justify-center rounded-lg font-bold text-lg shadow-lg">
            HT
          </div>
        </a>
      </div>

 
      {/*----Navigation Links-----*/}
      <div>
        <ul className="hidden md:flex items-center gap-15 text-textColor font-NavtextR font-medium text-lg tracking-wider">
          {/* <li className="hover:text-accent transition duration-300"><a href="#about">About</a></li> */}
          <li className="navigation-link"><a href="#skills">Skills</a></li>
          <li className="navigation-link"><a href="#projects">Projects</a></li>
          <li className="navigation-link"><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/*-----Resume Button-----*/}
      <div>
        <a 
          href="#"
          target="_blank"
          className="flex items-center gap-2 border text-white border-white/20 px-6 py-2 rounded-full font-semibold font-NavtextR font-medium text-lg tracking-wider backdrop-blur-xl bg-white/7"
        >
          Resume
          <FiDownload size={18} />
        </a>
      </div>


    </nav>

  )
}