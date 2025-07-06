import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Contact } from "@/components/Contact"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
