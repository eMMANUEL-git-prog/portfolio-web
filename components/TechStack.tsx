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
