import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { TechStack } from "@/components/TechStack";
import { CallToAction } from "@/components/CallToAction";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedProjects />
        <TechStack />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
