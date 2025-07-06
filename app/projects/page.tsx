import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Projects } from "@/components/Projects"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
