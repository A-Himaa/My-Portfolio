import logo1 from "../assets/logo1.png";
import About from "./AboutMe";

export default function Navbar() {

  return (
    <nav className="w-full bg-bgColor backdrop-blur-md z-50  py-2 fixed z-100"> 

      <div className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4 ">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <a href="#"><img
            src={logo1}
            className="h-10 w-auto opacity-80"
            alt="logo" />
          </a>
          <span className="text-base font-semibold font-poppins text-secTextColor pt-1">Akila Himaja</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center text-textColor gap-12">
          <li className="hover:text-accent transition duration-300"><a href="#">Home</a></li>
          <li className="hover:text-accent transition duration-300"><a href="#about">About</a></li>
          <li className="hover:text-accent transition duration-300"><a href="#skills">Skills</a></li>
          <li className="hover:text-accent transition duration-300"><a href="#">Projects</a></li>
          <li className="hover:text-accent transition duration-300"><a href="#">Contact</a></li>
          <li>
            <a 
              href="#"
              target="_blank"
              className="border border-2 border-textColor px-6 py-3 rounded-md font-semibold hover:text-accent buttonHover">
                Resume
            </a>
          </li>
        </ul>


      </div>
    </nav>
  
  );
}
