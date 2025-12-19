


export default function About(){

  return(
    <section className="min-h-screen bg-gradient-to-b from-[#061936] via-[#252382] via-[#3a1d6e] to-[#041024]">
      
      <div className="grid grid cols-1 md:grid-cols-2 max-w-6xl mx-auto md:pt-20">

        {/* Left Section */}
        <div className="relative"></div>

        {/* Right Section */}
        <div className="relative space-y-6">

          <div className="inline-flex p-[1.5px] rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 opacity-90 to-fuchsia-500 shadow-[0_0_25px_rgba(139,92,246,0.45)]">
            <button className="rounded-full px-5 py-1 bg-[#060321] text-white/90 font-NavtextR backdrop-blur-md">About</button>
          </div>

          <h2 className="text-textColor font-Herohead font-semibold text-4xl ">
            ABOUT ME
          </h2>
          
          <p className="">
             I’m a dedicated full-stack web developer passionate about crafting modern, efficient, and seamless digital experiences. I enjoy transforming ideas into scalable, high-performance applications by blending clean, maintainable code with intuitive UI/UX design.
          </p>
          <p>With a strong foundation in both frontend and backend development, I focus on building solutions that are not only visually refined but also technically robust. I value performance, accessibility, and thoughtful architecture, ensuring every product delivers real value to users.

          </p>
          <p>
            Driven by continuous learning and innovation, I’m always exploring new technologies and best practices to stay ahead in a fast-evolving digital landscape. My goal is to create meaningful software that solves real-world problems and leaves a lasting impact.
          </p>
          <div className="flex gap-2">
          <div className="inline-flex p-[1.5px] rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 opacity-90 to-fuchsia-500 ">
            <button className="rounded-full px-5 py-1 bg-[#060321] text-white/90 font-NavtextR backdrop-blur-md">UI/UX Designer</button>
          </div>
          <div className="inline-flex p-[1.5px] rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 opacity-90 to-fuchsia-500 ">
            <button className="rounded-full px-5 py-1 bg-[#060321] text-white/90 font-NavtextR backdrop-blur-md">Full Stack Developer</button>
          </div>
          <div className="inline-flex p-[1.5px] rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 opacity-90 to-fuchsia-500 ">
            <button className="rounded-full px-5 py-1 bg-[#060321] text-white/90 font-NavtextR backdrop-blur-md">Quality Assuarance</button>
          </div>
          </div>
        </div>
        
      </div>
      
    </section>
  )
}