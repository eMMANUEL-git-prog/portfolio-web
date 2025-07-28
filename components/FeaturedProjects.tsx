import {
  ExternalLink,
  Github,
  ArrowRight,
  Sparkles,
  Code,
  Terminal,
  Database,
  Layers,
  Globe,
  Loader,
  Clock,
  RefreshCcw,
  CalendarClock,
  CheckCircle,
  Monitor,
  Server,
  GitBranch,
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
      stack: "Frontend",
      status: "In Progress",
      aiEnhanced: false,
      ongoing: false,
    },
    {
      title: "Bobby Furniture - eCommerce Platform",
      description:
        "An e-commerce platform for furniture retail offering seamless product browsing, efficient inventory management, and smart pricing strategies to provide a smooth shopping experience.",
      image: "/projects/bobby.png?height=200&width=300",
      technologies: [
        "Next.js",
        "TypeScript",
        "Stripe",
        "Prisma",
        "AI Analytics",
      ],
      githubUrl: "https://github.com/emmanuel19727/ecomart-ecommerce",
      liveUrl: "https://www.bobbyfurniturekenya.com/]",
      stack: "FullStack",
      status: "Live",
      aiEnhanced: false,
      ongoing: false,
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
      stack: "FullStack",
      status: "In Progress",
      aiEnhanced: false,
      ongoing: false,
    },
  ];

  const getBgClass = (status: string): string => {
    if (status === "Live") return "bg-green-500";
    if (status === "In Progress") return "bg-yellow-500";
    if (status === "Completed") return "bg-blue-500";
    return "bg-gray-300";
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Live":
        return <Globe className="animate-bounce text-white w-4 h-4 mr-1" />;
      case "In Progress":
        return <Loader className="animate-spin text-white w-4 h-4 mr-1" />;
      case "Completed":
        return <CheckCircle className="text-white w-4 h-4 mr-1" />;
      default:
        return null;
    }
  };

  const getIcon = (stack: string) => {
    if (stack === "Frontend") return <Monitor className="w-4 h-4 mr-1" />;
    if (stack === "Backend") return <Server className="w-4 h-4 mr-1" />;
    if (stack === "FullStack") return <GitBranch className="w-4 h-4 mr-1" />;
    return null;
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
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
                {project.ongoing && (
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-red-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Ongoing
                  </div>
                )}

                <div
                  className={`${getBgClass(
                    project.status
                  )} absolute top-2 right-2 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center`}
                >
                  {/* <Sparkles className="w-3 h-3 mr-1" /> */}
                  {getStatusIcon(project.status)}
                  {project.status || "In Progress"}
                </div>

                <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                  {/* <Sparkles className="w-3 h-3 mr-1" /> */}
                  {getIcon(project.stack)}
                  {project.stack || "Full Stack"}
                </div>
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
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
