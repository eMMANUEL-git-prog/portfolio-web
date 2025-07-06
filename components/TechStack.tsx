import {
  Code,
  Database,
  Globe,
  Server,
  Cloud,
  Sparkles,
  Brain,
  Github,
  Terminal,
  Cpu,
  Layers,
  GitBranch,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function TechStack() {
  const techCategories = [
    {
      category: "Frontend",
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
      color: "blue",
    },
    {
      category: "Backend",
      icon: <Server className="h-8 w-8 text-green-600" />,
      technologies: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "GraphQL",
        "JWT",
        "OAuth",
      ],
      color: "green",
    },
    {
      category: "Database",
      icon: <Database className="h-8 w-8 text-purple-600" />,
      technologies: [
        "PostgreSQL",
        "MongoDB",
        "Prisma",
        "Redis",
        "SQL",
        "NoSQL",
      ],
      color: "purple",
    },
    {
      category: "AI & Automation",
      icon: <Brain className="h-8 w-8 text-yellow-600" />,
      technologies: [
        "ChatGPT",
        "Claude",
        "GitHub Copilot",
        "v0",
        "Cursor",
        "AI Workflows",
      ],
      color: "yellow",
    },
    {
      category: "DevOps & Tools",
      icon: <Cloud className="h-8 w-8 text-orange-600" />,
      technologies: [
        "Docker",
        "AWS",
        "Vercel",
        "Git",
        "GitHub Actions",
        "Linux",
      ],
      color: "orange",
    },
    {
      category: "Languages",
      icon: <Code className="h-8 w-8 text-indigo-600" />,
      technologies: [
        "JavaScript",
        "TypeScript",
        "Python",
        "SQL",
        "HTML",
        "CSS",
      ],
      color: "indigo",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Tech Icons Pattern Background */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900">
        {/* Animated Tech Icons Grid */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23374151' fillOpacity='1'%3E%3Cpath d='M20 20h16v16H20zm24 0h16v16H44zm24 0h16v16H68zm24 0h16v16H92zM20 44h16v16H20zm24 0h16v16H44zm24 0h16v16H68zm24 0h16v16H92zM20 68h16v16H20zm24 0h16v16H44zm24 0h16v16H68zm24 0h16v16H92zM20 92h16v16H20zm24 0h16v16H44zm24 0h16v16H68zm24 0h16v16H92z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "120px 120px",
              animation: "float 30s ease-in-out infinite",
            }}
          ></div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute top-10 left-10 text-gray-400/8 dark:text-gray-600/12 animate-pulse">
          <Github className="w-16 h-16" />
        </div>
        <div className="absolute top-20 right-20 text-gray-400/8 dark:text-gray-600/12 animate-bounce">
          <Terminal className="w-12 h-12" />
        </div>
        <div
          className="absolute bottom-20 left-1/4 text-gray-400/8 dark:text-gray-600/12 animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          <Database className="w-14 h-14" />
        </div>
        <div
          className="absolute bottom-10 right-1/4 text-gray-400/8 dark:text-gray-600/12 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        >
          <Cpu className="w-10 h-10" />
        </div>
        <div
          className="absolute top-1/3 right-10 text-gray-400/8 dark:text-gray-600/12 animate-pulse"
          style={{ animationDelay: "2s" }}
        >
          <Layers className="w-12 h-12" />
        </div>
        <div
          className="absolute bottom-1/3 left-10 text-gray-400/8 dark:text-gray-600/12 animate-bounce"
          style={{ animationDelay: "1.5s" }}
        >
          <GitBranch className="w-10 h-10" />
        </div>

        {/* Code Symbols */}
        <div className="absolute top-1/4 left-1/3 text-xl text-gray-400/12 dark:text-gray-600/15 font-mono animate-pulse select-none pointer-events-none">
          {"{ }"}
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-lg text-gray-400/12 dark:text-gray-600/15 font-mono animate-bounce select-none pointer-events-none">
          {"</>"}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack & AI Tools
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I leverage modern technologies and AI tools to build scalable,
            efficient applications faster than ever
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {category.category}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-sm rounded-full transition-all cursor-default ${
                        category.category === "AI & Automation"
                          ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-800/50"
                          : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                    >
                      {[
                        "ChatGPT",
                        "Claude",
                        "GitHub Copilot",
                        "v0",
                        "Cursor",
                      ].includes(tech) ? (
                        <span className="flex items-center">
                          <Sparkles className="w-3 h-3 mr-1" />
                          {tech}
                        </span>
                      ) : (
                        tech
                      )}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
