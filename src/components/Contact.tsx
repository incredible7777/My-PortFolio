// import React from 'react'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20" data-aos="fade-up">
      <h2 className="text-3xl font-bold flex items-center mb-8">
  <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
        Get In Touch
        <div className="ml-4 flex-1 h-px bg-gray-700"></div>
      </h2>

      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h3 className="text-4xl font-bold text-gray-200">Let's Connect</h3>
        <p className="text-gray-400">
          I'm currently looking for new opportunities. Whether you have a question or
          just want to say hi, I'll try my best to get back to you!
        </p>

        <a
          href="mailto:atulyapnd7@gmail.com"
          className="btn btn-accent btn-lg px-8 py-4 font-quicksand shadow-lg transition-all duration-300"
        >
          Say Hello
        </a>

        <div className="flex justify-center space-x-4 pt-8">
          <a
            href="https://github.com/incredible7777"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle bg-[#112240] border-none hover:bg-[#64ffda]/20 transition-all duration-300"
          >
            <Github size={22} className="text-[#64ffda]" />
          </a>
          <a
            href="https://www.linkedin.com/in/atulya-pandey-8a440328b/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle bg-[#112240] border-none hover:bg-[#64ffda]/20 transition-all duration-300"
          >
            <Linkedin size={22} className="text-[#64ffda]" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle bg-[#112240] border-none hover:bg-[#64ffda]/20 transition-all duration-300"
          >
            <Twitter size={22} className="text-[#64ffda]" />
          </a>
          <a
            href="mailto:atulyapnd7@gmail.com"
            className="btn btn-circle bg-[#112240] border-none hover:bg-[#64ffda]/20 transition-all duration-300"
          >
            <Mail size={22} className="text-[#64ffda]" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact