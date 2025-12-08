"use client"

export default function Skills() {
    const frontendSkills = [
        {name: "HTML5", level: "95%"},
        {name: "CSS3", level: "95%"},
        {name: "JavaScript", level: "90%"},
        {name: "React", level: "90%"},
        {name: "Tailwind CSS", level: "95%"},
        {name: "TypeScript", level: "60%"},
        {name: "Next.js", level: "85%"},
    ];



    

  return (
    <section className="w-full bg-bgColor pb-20"> 

    <h3 className="font-mono text-base text-textAccent text-center mb-0">
        SKILLS
    </h3>

    <h2 className="font-bold text-3xl md:text-5xl text-textColor pb-2 leading-tight text-center">
        Tools & Skills
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-6xl px-6 gap-10 mt-10"> 
        {/* Skills List - Left */}
        <div>
            <h3 className="font-mono text-sm md:text-base bg-accent/20 text-gray-100/90 px-2 py-2 tracking-wider rounded-sm">TECHNICAL SKILLS</h3>
            <p className="text-textAccent border border-textAccent/50 rounded-3xl text-sm px-4 py-2 my-5 inline-block w-fit">Frontend</p>
        </div>

        <div>
            <h3 className="font-mono text-sm md:text-base bg-accent/20 text-gray-100/90 px-2 py-2 tracking-wider rounded-sm">PROFESSIONAL SKILLS</h3>
            <h3 className="font-mono text-sm md:text-base bg-accent/20 text-gray-100/90 px-2 py-2 tracking-wider rounded-sm">TOOL KIT</h3>

        </div>

    </div>



    
    </section>
  )
}