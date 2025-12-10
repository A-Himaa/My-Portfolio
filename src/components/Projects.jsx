import cr from "../assets/CR.png";

export default function Projects() {
        const projects = [
        {
          title: "Crime Radar - Crime Management System",
          img: cr,
          desc: "A real-time crime reporting and awareness system.",
          tech: "Mongo DB, Express.js, React, Node.js, Tailwind CSS",
        },
        {
          title: "Ryome Autocare - Vehicl Management System",
          img: cr,
          desc: "Amazon Web Services",
          tech: "Mongo DB, Express.js, React, Node.js, Tailwind CSS",
        },
        {
          title: "AWS Cloud Practitioner Essentials",
          img: cr,
          desc: "Amazon Web Services",
          tech: "Mongo DB, Express.js, React, Node.js, Tailwind CSS",
        },
      ];


    return (
        <section className="bg-bgColor">
                <h3 className="font-mono text-base text-textAccent text-center mb-0">
                    PROJECTS
                </h3>
                <h2 className="font-bold text-3xl md:text-5xl text-textColor pb-2 leading-tight text-center">
                    Projects
                </h2>

                {/* <p className="text-base text-textColor tracking-wide text-center mx-auto max-w-3xl">
                    A collection of verified certifications demonstrating my expertise in full-stack development, 
                    cloud technologies, and core software engineering concepts.
                </p> */}
                
                {/* Projects Section */}
                <div className="py-6 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
                        {projects.map((proj, index) => (
                            <div
                                key={index}
                                className="relative bg-[#0F193D] rounded-xl border border-white/10 shadow-lg hover:shadow-accent/20 transition "
                            >
                            <img
                            src={proj.img}
                            alt={proj.title}
                            className="w-full h-50 object-cover rounded-t-xl opacity-80"
                            />

                            <div className="p-4">
                                <h4 className="text-lg font-semibold text-textColor mb-1">
                                    {proj.title}
                                </h4>

                                <p className="text-sm text-mutedText">{proj.desc}</p>

                                <div className="flex flex-wrap gap-1 mt-2">
                                    {proj.tech.split(", ").map((techItem, i) => (
                                        <span
                                        key={i}
                                        className="text-textAccent border border-textAccent/50 rounded-3xl text-xs px-2 py-1 inline-block"
                                        >
                                        {techItem}
                                        </span>
                                    ))}
                                </div>                                
                            </div>
                        </div>
                        ))}
                        

                    </div>
                    <div className="flex justify-center mx-auto">
                        <a href="#">
                        <button className="border-2 border-accent/80 text-base font-semibold text-textColor tracking-wide px-3 py-3 rounded-md hover:bg-accent/50">
                            View All Projects
                        </button>
                        </a>
                </div>
            </div>


        </section>
    )
}