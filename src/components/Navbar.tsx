import { useState } from 'react';
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    // { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed w-full bg-[#0a192f]/90 backdrop-blur-sm z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="text-[#64ffda] font-fira-code text-xl font-bold">
              {'<Welcome />'}
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-[#64ffda] transition-colors duration-300 font-medium"
                >
                  <span className="text-[#64ffda] font-fira-code">{`0${index + 1}.`}</span>
                  {' '}{item.name}
                </a>
              ))}
              <a
                href="Pic/Resume Atulya (1).pdf"
                className="border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded hover:bg-[#64ffda]/10 transition-colors duration-300"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-[#64ffda] transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-[#64ffda] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-[#64ffda] font-fira-code">{`0${index + 1}.`}</span>
                {' '}{item.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="block px-3 py-2 text-base font-medium text-[#64ffda] hover:text-[#64ffda] transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar