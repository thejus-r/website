import Hero from "../components/Hero"
import Projects from "../components/Projects"

export default function HomePage() {
  return (
    <div>
      <Hero />
      <div className="text-xl md:text-3xl xl:text-6xl font-bold text-center">
        Featured Projects
      </div>
      <Projects />
      <Projects />
      <Projects />
    </div>
  )
}
