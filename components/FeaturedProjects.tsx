import {
  ExternalLink,
  Github,
  ArrowRight,
  Sparkles,
  Code,
  Terminal,
  Database,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function FeaturedProjects() {
  const featuredProjects = [
    {
      title: "TaskFlow - AI-Enhanced Project Management",
      description:
        "Real-time collaboration platform with AI-powered task suggestions, smart scheduling, and automated progress tracking.",
      image: "/placeholder2.jpg?height=200&width=300",
      technologies: [
        "React",
        "Node.js",
        "Socket.io",
        "PostgreSQL",
        "OpenAI API",
      ],
      githubUrl: "https://github.com/emmanuel19727/taskflow-app",
      liveUrl: "https://taskflow-demo.vercel.app",
      aiEnhanced: true,
    },
    {
      title: "EcoMart - Smart E-commerce Platform",
      description:
        "Sustainable e-commerce with AI-powered product recommendations, automated inventory management, and smart pricing.",
      image: "/placeholder2.jpg?height=200&width=300",
      technologies: [
        "Next.js",
        "TypeScript",
        "Stripe",
        "Prisma",
        "AI Analytics",
      ],
      githubUrl: "https://github.com/emmanuel19727/ecomart-ecommerce",
      liveUrl: "https://ecomart-kenya.vercel.app",
      aiEnhanced: true,
    },
    {
      title: "DevConnect - AI-Powered Developer Hub",
      description:
        "Social platform for developers with AI code review, intelligent skill matching, and automated project suggestions.",
      image: "/placeholder2.jpg?height=200&width=300",
      technologies: [
        "Next.js",
        "Socket.io",
        "Redis",
        "PostgreSQL",
        "Claude API",
      ],
      githubUrl: "https://github.com/emmanuel19727/devconnect-platform",
      liveUrl: "https://devconnect-kenya.vercel.app",
      aiEnhanced: true,
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Tech Icons Pattern Background */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900">
        {/* Animated Tech Icons Grid */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23374151' fillOpacity='1'%3E%3Cpath d='M20 20h16v16H20zm24 0h16v16H44zm24 0h16v16H68zm24 0h16v16H92zM20 44h16v16H20zm24 0h16v16H44zm24 0h16v16H68zm24 0h16v16H92zM20 68h16v16H20zm24 0h16v16H44zm24 0h16v16H68zm24 0h16v16H92zM20 92h16v16H20zm24 0h16v16H44zm24 0h16v16H68zm24 0h16v16H92z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "120px 120px",
              animation: "float 35s ease-in-out infinite",
            }}
          ></div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute top-16 right-16 text-gray-400/8 dark:text-gray-600/12 animate-pulse">
          <Code className="w-14 h-14" />
        </div>
        <div
          className="absolute bottom-16 left-16 text-gray-400/8 dark:text-gray-600/12 animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          <Github className="w-12 h-12" />
        </div>
        <div
          className="absolute top-1/3 left-10 text-gray-400/8 dark:text-gray-600/12 animate-pulse"
          style={{ animationDelay: "2s" }}
        >
          <Terminal className="w-10 h-10" />
        </div>
        <div
          className="absolute bottom-1/3 right-10 text-gray-400/8 dark:text-gray-600/12 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        >
          <Database className="w-12 h-12" />
        </div>
        <div
          className="absolute top-2/3 right-1/4 text-gray-400/8 dark:text-gray-600/12 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        >
          <Layers className="w-8 h-8" />
        </div>

        {/* Code Symbols */}
        <div className="absolute top-1/4 right-1/3 text-lg text-gray-400/12 dark:text-gray-600/15 font-mono animate-pulse select-none pointer-events-none">
          {"{ }"}
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-md text-gray-400/12 dark:text-gray-600/15 font-mono animate-bounce select-none pointer-events-none">
          {"</>"}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AI-Enhanced Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase the power of
            combining traditional development with AI tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg relative">
                <img
                  src={project.image || "/placeholder2.jpg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {project.aiEnhanced && (
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI-Enhanced
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className={`text-xs ${
                        tech.includes("API") || tech.includes("AI")
                          ? "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800"
                          : ""
                      }`}
                    >
                      {(tech.includes("API") || tech.includes("AI")) && (
                        <Sparkles className="w-3 h-3 mr-1" />
                      )}
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm"
          >
            <Link href="/projects">
              View All AI-Enhanced Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
