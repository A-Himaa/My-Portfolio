import refImage from "../assets/refImg.jpg"

export default function HeroSec(){
    return(
        <section
            id="hero"
            className="max-w-6xl mx-auto px-6 pt-25 grid grid-cols-1 md:grid-cols-2">
            <div className="space-y-6 pl-4">

                <p className="text-accent text-lg font-mono">Hi, My name is</p>

                <h1 className="text-textColor text-5xl font-bold">Himaja Tissera</h1>
                <h1 className="text-textColor text-5xl font-bold">Building Smart, Efficient & Human-Centered Web Solutions</h1>
                <p className="text-lg font-semibold text-textColor">Aspiring Full-Stack Developer | Problem Solver | Goal-Oriented</p>
                <p className="text-base font-semibold text-textColor">
                    I am an aspiring full-stack developer with a strong foundation in building scalable and 
                    efficient web applications. With a sharp problem-solving mindset and a target-driven approach, 
                    I focus on delivering high-quality, user-centric solutions. I am passionate about creating 
                    innovative digital experiences, continuously expanding my technical expertise, and tackling 
                    complex challenges with diligence and precision.
                </p>
                <div className="flex items-center gap-6">
                <a
                    href="#"
                    className="px-6 py-3 bg-[#64FFDA] text-[#0A1128] font-semibold rounded-md 
                            hover:bg-[#52e6c5] transition-all"
                >
                    View My Work
                </a>

                <div className="flex items-center gap-4 text-2xl text-gray-300">
                    <a href="#" className="hover:text-[#64FFDA] transition">🐱</a>
                    <a href="#" className="hover:text-[#64FFDA] transition">🔗</a>
                    <a href="#" className="hover:text-[#64FFDA] transition">🐦</a>
                </div>
                </div>
            </div>

            <div className="relative flex justify-center md:justify-end">
                <div className="absolute top-20 left-80 w-[260px] h-[340px] rounded-xl border border-[#64FFDA] opacity-60"></div>

                <img
                src={refImage}  
                alt="Profile"
                className="w-[260px] h-[340px] object-cover rounded-xl shadow-xl z-10"
        />

            </div>
        </section>

    )
}
