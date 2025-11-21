import logo1 from "../assets/logo1.png";

export default function Navbar() {
  return (
    <nav className="w-full top-0 fixed bg-bgColor backdrop-blur-md z-50">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4 ">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo1}
            className="h-15 w-auto"
            alt="logo" />
          <span className="text-md font-semibold font-poppins text-secTextColor">Akila Himaja</span>
        </div>

        <ul className="hidden md:flex items-center text-textColor gap-12">
          <li className="hover:text-secTextColor transition"><a href="#">About</a></li>
          <li className="hover:text-secTextColor transition"><a href="#">Projects</a></li>
          <li className="hover:text-secTextColor transition"><a href="#">Skills</a></li>
          <li className="hover:text-secTextColor transition"><a href="#">Contact</a></li>
          <li>
            <a 
              href="#"
              target="_blank"
              className="border border-2 border-textColor px-4 py-2 rounded-md font-semibold">
                Resume
            </a>
          </li>
        </ul>

        <div className="md:hidden text-textColor text-2xl cursor-pointer">☰</div>


      </div>
    </nav>
  
  );
}
