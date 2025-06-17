// import React from 'react'
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress,  SiMongodb,  SiMysql, 
  SiGit, SiDocker,  SiApollographql
} from 'react-icons/si'

const skills = {
  'Frontend Development': [
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'JavaScript (ES6+)', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    // { name: 'Redux', icon: SiRedux }
  ],
  'Backend Development': [
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express', icon: SiExpress },
    // { name: 'Python', icon: SiPython },
    // { name: 'Django', icon: SiDjango },
    { name: 'RESTful APIs', icon: SiApollographql },
    // { name: 'GraphQL', icon: SiGraphql }
  ],
  'Database': [
    { name: 'MongoDB', icon: SiMongodb },
    // { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MySQL', icon: SiMysql },
    // { name: 'Redis', icon: SiRedis }
  ],
  'DevOps & Tools': [
    { name: 'Git', icon: SiGit },
    { name: 'Docker', icon: SiDocker },
    // { name: 'Jest', icon: SiJest },
    // { name: 'Webpack', icon: SiWebpack }
  ]
}

const fadeInVariants = [
  "animate-fade-in-up",
  "animate-fade-in-up delay-100",
  "animate-fade-in-up delay-200",
  "animate-fade-in-up delay-300"
]

const Skills = () => (
  <section id="skills" className="py-20">
    <h2 className="text-3xl font-bold flex items-center mb-8">
  <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
      Skills & Technologies
      <div className="ml-4 flex-1 h-px bg-gray-700"></div>
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      {Object.entries(skills).map(([category, items], idx) => (
        <div
          key={category}
          className={`bg-[#112240] p-6 rounded-lg shadow-lg ${fadeInVariants[idx % fadeInVariants.length]}`}
        >
          <h3 className="text-xl font-bold text-[#64ffda] mb-4 font-quicksand">{category}</h3>
          <div className="flex flex-wrap gap-6">
            {items.map(({ name, icon: Icon }) => (
              <div key={name} className="relative group flex flex-col items-center">
                <span
                  className="text-4xl text-gray-300 hover:text-[#64ffda] transition-colors duration-200 cursor-pointer
                  group-hover:drop-shadow-glow group-hover:scale-110 transition-transform"
                  style={{ transition: 'box-shadow 0.3s, transform 0.3s' }}
                >
                  <Icon />
                </span>
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none bg-[#233554] text-[#64ffda] px-4 py-2 rounded text-xs font-quicksand shadow-lg transition-all duration-300 z-10 whitespace-nowrap scale-90 group-hover:scale-100">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Skills
