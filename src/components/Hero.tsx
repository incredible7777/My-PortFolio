import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="space-y-5">
        <h2 className="text-[#64ffda] font-apercu text-3xl sm:text-5xl flex items-center gap-2">
          Hi !
          <span
            className="inline-block animate-wave origin-bottom"
            style={{ display: 'inline-block' }}
            aria-label="waving hand"
            role="img"
          >
            👋
          </span>
        </h2>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-200 font-apercu">
          I'm{' '}
          <span className="relative group cursor-pointer">
            <span className="transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#64ffda] group-hover:via-pink-400 group-hover:to-yellow-400 group-hover:bg-clip-text group-hover:text-transparent">
              Atulya
            </span>
          </span>
          .
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-400 font-apercu">
          I build things for the web.
        </h2>
        <p className="max-w-xl text-gray-400 text-lg font-inter">
          I'm a full-stack developer specializing in building exceptional digital experiences.
          Currently, I'm focused on building accessible, human-centered products.
        </p>
        <div className="pt-5">
          <a
            href="#projects"
            className="inline-flex items-center space-x-2 border-2 border-[#64ffda] text-[#64ffda] px-7 py-4 rounded hover:bg-[#64ffda]/10 transition-colors duration-300"
          >
            <span>Check out my work</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )}

export default Hero