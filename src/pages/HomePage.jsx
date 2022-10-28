import Hero from "../components/Hero"
import Projects from "../components/Projects"

export default function HomePage() {
  return (
    <div>
      <Hero />
      <div className="text-xl md:text-3xl xl:text-6xl font-bold text-center my-12 md:my-24">
        Featured Projects
      </div>
      <Projects />
    </div>
  )
}
