import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Publications from './components/Publications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1 pt-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Publications />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}