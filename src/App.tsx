import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
// import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark min-h-screen relative overflow-x-hidden" : "min-h-screen relative overflow-x-hidden"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* Animated background */}
      <div className="animated-bg"></div>
      <div className="bg-white text-gray-900 dark:bg-black dark:text-gray-300 min-h-screen">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Hero />
          <About />
          <Education />
          {/* <Experience /> */}
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App