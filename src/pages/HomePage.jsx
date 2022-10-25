import Hero from "../components/Hero"
import Projects from "../components/Projects"

export default function HomePage() {
  return (
    <div>
      <Hero />
      <div className="text-6xl font-bold text-center">Featured Projects</div>
      <Projects />
      <Projects />
      <Projects />
    </div>
  )
}
