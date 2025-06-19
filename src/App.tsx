// import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
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
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      {/* Animated background */}
      <div className="animated-bg"></div>
      <div className="bg-black-900 text-white min-h-screen">
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