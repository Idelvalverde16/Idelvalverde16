import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import ProjectGrid from './components/ProjectGrid.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import { projects } from './data/projects.js'

export default function App() {
  return (
    <>
      <Nav />
      <Hero projectCount={projects.length} />
      <ProjectGrid />
      <About />
      <Contact />
    </>
  )
}
