import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { About } from "@/components/About"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <About />
      </main>
      <Footer />
    </div>
  )
}
