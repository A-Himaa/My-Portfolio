import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const projId = parseInt(id);
  const project = caseStudies.find((p) => p.id === projId);
  const nextProject = caseStudies[project?.nextProjectId];

  // if (!project) {
  //   return (
  //     <div className="bg-gradient-to-b from-[#041024] via-[#11104A] to-[#061936] min-h-screen flex items-center justify-center">
  //       <motion.div
  //         className="text-center"
  //         initial={{ opacity: 0 }}
  //         animate={{ opacity: 1 }}
  //       >
  //         <h1 className="text-4xl font-bold text-textColor mb-4">
  //           Project Not Found
  //         </h1>
  //         <button
  //           onClick={() => navigate("/#projects")}
  //           className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:scale-105 transition-transform"
  //         >
  //           Back to Projects
  //         </button>
  //       </motion.div>
  //     </div>
  //   );
  // }

  const fadeInUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    },
  });

  const fadeInScale = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    },
  });


  return (
    <div className="bg-[#041024] min-h-screen text-white">

      {/* Overview section */}
      <motion.section
        className="relative pt-38 pb-20 px-6 md:px-12 max-w-7xl mx-auto"
        variants={fadeInUp()}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content - Text section */}
          <motion.div variants={fadeInUp(0.2)}>

            <motion.div 
              className="inline-flex p-[1.5px] rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 opacity-90 to-fuchsia-500 shadow-[0_0_25px_rgba(139,92,246,0.45)] mb-7"
              variants = {fadeInUp(0.3)}
            >
              <button className="px-5 rounded-full py-1 bg-[#060321] text-white/90 font-NavtextR backdrop-blur-md">
                Case Study
              </button>
            </motion.div>


            <h1 className="text-5xl md:text-6xl font-bold font-Herohead mb-4">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                {project.title}
              </span>
            </h1>

            <p className="text-lg text-white/50 mb-15">{project.subtitle}</p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-5"
              variants={fadeInUp(0.4)}
            >
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 relative text-white px-3 md:px-8 py-3 rounded-lg bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 overflow-hidden cursor-pointer hover:bg-gradient-to-r hover:from-violet-950 hover:via-purple-900 hover:to-blue-950 hover:border-white/50 hover:scale-105 transition-all duration-300"
              >
                <ExternalLink size={18} />
                Live Site
              </a>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/15 shadow-inner shadow-white/15 rounded-lg hover:bg-white/20 transition-all font-medium"
              >
                <Github size={18} />
                GitHub
              </a>
            </motion.div>

            {/*Role */}
            <motion.div
              className="space-y-4"
              variants={fadeInUp(0.5)}
            >
              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-xl border border-white/15 shadow-inner shadow-white/15">
                <div className="text-indigo-400">👤</div>
                <div>
                  <p className="text-sm text-white/60">Role</p>
                  <p className="text-lg font-medium text-white/80">{project.role}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/*Right - Image section */}
          <motion.div
            className="relative"
            variants={fadeInScale(0.3)}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
              <motion.img
                src={project.img}
                alt={project.title}
                className="w-full h-80 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041024] via-transparent to-transparent opacity-40"></div>
            </div>
          </motion.div>
        </div>
      </motion.section>


      {/* Overview Section */}
      <motion.section
        className="py-20 px-6 md:px-12 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-10 font-Herohead">
          <span className="bg-gradient-to-r text-4xl md:text-5xl from-indigo-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
            P
          </span>
          roject Overview
        </h2>

        <p className="text-lg text-white/70 leading-relaxed mb-15 max-w-3xl text-justify">
          {project.overview}
        </p>

        {/* Tech Stack */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white/70">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-indigo-800/30 to-purple-700/30 border border-indigo-300/50 rounded-full text-sm font-medium shadow-inner shadow-indigo-200/15"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Screenshots Section */}
      <motion.section
        className="py-20 px-6 md:px-12 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 font-Herohead">
          <span className="bg-gradient-to-r text-4xl md:text-5xl from-indigo-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
            S
          </span>
          creenshots
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-2xl border border-white/20 shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={screenshot}
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-64 md:h-80 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041024] via-transparent to-transparent opacity-30 group-hover:opacity-20 transition-opacity"></div>

              {/* Screenshot Counter */}
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-white/10 border border-white/30 rounded-full text-sm backdrop-blur-md">
                {index + 1}/{project.screenshots.length}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Next Project Section */}
      {nextProject && (
        <motion.section
          className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-white/60 text-lg mb-2">Next Project</p>
              <h3 className="text-4xl font-bold font-Herohead mb-4">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {nextProject.title}
                </span>
              </h3>
              <p className="text-white/70 text-lg mb-6">{nextProject.subtitle}</p>

              <motion.button
                onClick={() => navigate(`/case-study/${nextProject.id}`)}
                className="flex items-center gap-2 relative text-white px-3 md:px-8 py-3 rounded-lg bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 overflow-hidden cursor-pointer hover:bg-gradient-to-r hover:from-violet-950 hover:via-purple-900 hover:to-blue-950 hover:border-white/50 hover:scale-105 transition-all duration-300"
                whileHover={{ gap: 12 }}
              >
                View Case Study
                <ArrowRight size={20} />
              </motion.button>
            </div>

            <motion.div
              className="hidden lg:block w-48 h-48 rounded-2xl overflow-hidden border border-white/20 shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={nextProject.img}
                alt={nextProject.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Back to Projects */}
      <motion.section
        className="py-16 px-6 md:px-12 max-w-7xl mx-auto text-center border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <button
          onClick={() => navigate("/#projects")}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/15 shadow-inner shadow-white/15 rounded-lg hover:bg-white/20 transition-all font-semibold"
        >
          ← Back to All Projects
        </button>
      </motion.section>
    </div>
  );
}
