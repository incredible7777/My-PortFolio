import React, { useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0)
  const total = images.length

  const prev = (e: React.MouseEvent) => {
    e.preventDefault()
    setCurrent((c) => (c - 1 + total) % total)
  }
  const next = (e: React.MouseEvent) => {
    e.preventDefault()
    setCurrent((c) => (c + 1) % total)
  }

  return (
    <div className="relative group w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <img
        src={images[current]}
        alt={alt}
        className="object-cover w-full h-full transition-all duration-500"
        style={{ minHeight: 320, maxHeight: 480 }}
      />
      {total > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#233554] text-[#64ffda] rounded-full p-2 opacity-80 hover:opacity-100 transition z-10"
            aria-label="Previous image"
          >❮</button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#233554] text-[#64ffda] rounded-full p-2 opacity-80 hover:opacity-100 transition z-10"
            aria-label="Next image"
          >❯</button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {images.map((_, i) => (
              <span
                key={i}
                className={`inline-block w-2 h-2 rounded-full ${i === current ? 'bg-[#64ffda]' : 'bg-gray-500/40'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

const Projects = () => {
  const projects = [
    {
      
  title: '3-D Solar System Simulator',
  description: 'A modern web platform for visualizing and simulating the solar system in 3D. Built with React, Three.js, and Node.js, it allows users to explore planets, orbits, and celestial mechanics interactively.',
  images: ['Pic/Screenshot 2025-06-16 122719.png',
    'Pic/Screenshot 2025-06-16 122752.png',
    'Pic/Screenshot 2025-06-16 122825.png'
  ],
  tech: ['React', 'Three.js', 'Node.js', 'Express'],
  github: 'https://github.com/incredible7777/Solar-System',
  live: 'https://incredible7777.github.io/Solar-System/'

    },
    {
      title: 'Atulya\'s Bakery Web',

      description: "A cake bakery web application that allows customers to browse, customize, and order cakes online. Features include a menu of cakes, custom cake design options, and seamless order tracking.",
      images: [
        "Pic/Screenshot 2025-06-16 114746.png",
        "Pic/Screenshot 2025-06-16 115534.png",
        "Pic/Screenshot 2025-06-16 115454.png"
      ],
      tech: ["React", "Node.js", "Express", "MongoDB",  "JWT"],
      github: "https://github.com/incredible7777/Bakery-Web",
      live: 'https://atulyas-bakery-web.onrender.com/'
    },
    {
    title: "Portfolio 2.0 ",

description: "A personal portfolio website designed to showcase my skills, projects, and journey as a web developer. Built with a modern tech stack, it features an interactive and responsive design, smooth animations, and a user-friendly interface. The site highlights my experience, technical expertise, and passion for creating impactful digital experiences.",

images: [
  "Pic/Screenshot 2025-06-16 163703.png",
  
],

tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],

github: "https://github.com/incredible7777/My-PortFolio",

live: "https://incredible7777.github.io/My-PortFolio/"
    }
  ]

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold flex items-center mb-8">
  <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
        Some Things I've Built
        <div className="ml-4 flex-1 h-px bg-gray-700"></div>
      </h2>

      <div className="space-y-20">
        {projects.map((project, index) => (
          <div
            key={project.title}
            data-aos="fade-up"
            className={`relative grid md:grid-cols-2 gap-8 items-center ${
              index % 2 === 0 ? 'md:text-left' : 'md:text-right md:flex-row-reverse'
            }`}
          >
            <div className="relative group">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ImageCarousel images={project.images} alt={project.title} />
              </a>
            </div>

            <div className={`space-y-4 ${index % 2 === 0 ? 'md:order-first' : ''}`}>
              <p className="text-[#64ffda] font-fira-code">Featured Project</p>
              <h3 className="text-2xl font-bold text-gray-200">{project.title}</h3>
              <p className="text-gray-400 bg-[#112240] p-6 rounded shadow-lg">
                {project.description}
              </p>
              <ul className={`flex flex-wrap gap-4 text-gray-400 font-fira-code text-sm ${
                index % 2 === 0 ? '' : 'md:justify-end'
              }`}>
                {project.tech.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className={`flex gap-4 ${
                index % 2 === 0 ? '' : 'md:justify-end'
              }`}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#64ffda] transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#64ffda] transition-colors duration-300"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects