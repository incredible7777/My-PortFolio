// import React from 'react'

const About = () => {
  const technologies = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
  ]

  return (
    <section id="about" className="py-20" data-aos="fade-up">
      <div className="space-y-8">
        <h2 className="flex items-center text-2xl sm:text-3xl font-bold text-gray-200">
  <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
          About Me
          <div className="ml-4 flex-1 h-px bg-gray-700"></div>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-gray-400">
            <p>
              Hey! I’m Atulya, a pre-final year B.Tech student at IIIT Kota and a passionate full-stack web developer. I love bringing ideas to life through clean, functional, and engaging digital experiences. From designing intuitive front-ends with HTML, CSS, and React to building robust back-end systems with Node.js and MongoDB, I enjoy working across the entire web stack.
            </p>
            <p>
              I’ve built and contributed to a range of projects — from personal websites and startup prototypes to student-led team collaborations. I’m driven by curiosity, real-world problem solving, and the constant urge to learn and improve. Right now, I’m focused on creating accessible, scalable, and user-friendly web solutions that leave a lasting impact.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {technologies.map((tech) => (
                <li key={tech} className="flex items-center space-x-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center items-center">
            <div className="group relative w-64 h-64 md:w-80 md:h-80 transition-transform duration-500 hover:scale-105">
              {/* Decorative half-square border */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Top-left corner */}
                <div className="absolute top-0 left-0 w-1/2 h-1/2 border-t-4 border-l-4 border-[#64ffda] rounded-tl-3xl transition-all duration-500 group-hover:scale-110 group-hover:border-[#233554]" />
                {/* Bottom-right corner */}
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-b-4 border-r-4 border-[#64ffda] rounded-br-3xl transition-all duration-500 group-hover:scale-110 group-hover:border-[#233554]" />
              </div>
              {/* Image with overlay and hover effect */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="Pic\Atulyapic.png"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-2xl"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#64ffda]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About