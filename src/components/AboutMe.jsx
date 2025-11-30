
export default function About() {
    return(
        <section className="w-full bg-bgColor">
            <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto">
                <div className="relative ">

                </div>

                {/*-----------Right Section------------*/}
                <div className="space-y-2">
                    <p>About Me</p>
                    <p>Curious Developer, Tech Explorer, Problem Solver</p>
                    <p> I'm a passionate and detail-oriented software engineer with a strong interest 
            in building modern, efficient, and user-focused digital experiences. I enjoy 
            transforming ideas into functional and visually appealing applications using 
            clean code, creative design, and modern technologies.</p>
                    <p> My journey in the tech world is driven by curiosity and continuous learning. 
            Whether it's full-stack development, UI/UX, or solving complex backend logic, 
            I love diving deep and exploring new ways to improve my craft.</p>
                </div>
            </div>
            
        </section>
    )
}

{/* <section id="about" className="w-full py-20 bg-bgColor">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">

        <div className="relative flex justify-center items-center">
          <div className="absolute w-72 h-72 bg-[#02B4D4]/20 rounded-full blur-3xl -z-10"></div>

          <img
            src={refImage} 
            alt="Profile"
            className="w-64 h-64 object-cover rounded-xl shadow-lg border border-accent/40"
          />
        </div>

        <div className="space-y-6">
          <p className="text-accent font-mono tracking-wider text-sm">
            ABOUT ME
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-textColor">
            Curious Developer, Tech Explorer, Problem Solver
          </h2>

          <p className="text-secTextColor leading-relaxed tracking-wide">
            I'm a passionate and detail-oriented software engineer with a strong interest 
            in building modern, efficient, and user-focused digital experiences. I enjoy 
            transforming ideas into functional and visually appealing applications using 
            clean code, creative design, and modern technologies.
          </p>

          <p className="text-secTextColor leading-relaxed tracking-wide">
            My journey in the tech world is driven by curiosity and continuous learning. 
            Whether it's full-stack development, UI/UX, or solving complex backend logic, 
            I love diving deep and exploring new ways to improve my craft.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <span className="px-4 py-1 text-sm rounded-full bg-accent/10 text-accent border border-accent/20">
              Full-Stack Development
            </span>
            <span className="px-4 py-1 text-sm rounded-full bg-accent/10 text-accent border border-accent/20">
              MERN Stack
            </span>
            <span className="px-4 py-1 text-sm rounded-full bg-accent/10 text-accent border border-accent/20">
              UI / UX
            </span>
            <span className="px-4 py-1 text-sm rounded-full bg-accent/10 text-accent border border-accent/20">
              Problem Solving
            </span>
            <span className="px-4 py-1 text-sm rounded-full bg-accent/10 text-accent border border-accent/20">
              Creative Coding
            </span>
          </div>
        </div>

      </div>
    </section> */}
