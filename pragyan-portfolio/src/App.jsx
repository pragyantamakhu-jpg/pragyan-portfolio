import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-[#e8e8f0] font-mono">
      <div className="max-w-2xl mx-auto px-6 py-8 pb-16">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
