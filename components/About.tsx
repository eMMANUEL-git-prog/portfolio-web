import {
  Download,
  Code,
  Database,
  Globe,
  Github,
  Terminal,
  Layers,
  Server,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const skills = [
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
    },
    {
      category: "Backend",
      icon: <Code className="h-8 w-8 text-green-600" />,
      technologies: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "JWT Authentication",
      ],
    },
    {
      category: "Database",
      icon: <Database className="h-8 w-8 text-purple-600" />,
      technologies: ["PostgreSQL", "Prisma", "Redis", "SQL"],
    },
    {
      category: "AI & Automation",
      icon: <Sparkles className="h-8 w-8 text-yellow-600" />,
      technologies: [
        "ChatGPT",
        "Claude",
        "GitHub Copilot",
        "v0",
        "Cursor",
        "AI Workflows",
      ],
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
              animation: "float 28s ease-in-out infinite",
            }}
          ></div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute top-20 left-10 text-gray-400/8 dark:text-gray-600/12 animate-pulse">
          <Code className="w-14 h-14" />
        </div>
        <div className="absolute top-40 right-20 text-gray-400/8 dark:text-gray-600/12 animate-bounce">
          <Github className="w-12 h-12" />
        </div>
        <div
          className="absolute bottom-20 left-20 text-gray-400/8 dark:text-gray-600/12 animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          <Terminal className="w-16 h-16" />
        </div>
        <div
          className="absolute bottom-40 right-10 text-gray-400/8 dark:text-gray-600/12 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        >
          <Database className="w-10 h-10" />
        </div>
        <div
          className="absolute top-1/2 left-1/4 text-gray-400/8 dark:text-gray-600/12 animate-pulse"
          style={{ animationDelay: "2s" }}
        >
          <Server className="w-12 h-12" />
        </div>
        <div
          className="absolute top-1/3 right-1/4 text-gray-400/8 dark:text-gray-600/12 animate-bounce"
          style={{ animationDelay: "1.5s" }}
        >
          <Layers className="w-10 h-10" />
        </div>

        {/* Code Symbols */}
        <div className="absolute top-1/4 right-1/3 text-lg text-gray-400/12 dark:text-gray-600/15 font-mono animate-pulse select-none pointer-events-none">
          {"{ }"}
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-md text-gray-400/12 dark:text-gray-600/15 font-mono animate-bounce select-none pointer-events-none">
          {"</>"}
        </div>
        <div
          className="absolute top-2/3 left-10 text-sm text-gray-400/12 dark:text-gray-600/15 font-mono animate-pulse select-none pointer-events-none"
          style={{ animationDelay: "1.5s" }}
        >
          {"=>"}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a dedicated full-stack developer with a passion for creating
            innovative web solutions that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="/placeholder2.jpg?height=400&width=400"
              alt="Emmanuel"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              My Journey
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Based in the vibrant tech scene of Nairobi, Kenya, I've been
              crafting digital experiences for over 3 years. My journey began
              with a curiosity about how websites work, which evolved into a
              deep passion for full-stack development enhanced by cutting-edge
              AI tools.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I specialize in the PERN stack (PostgreSQL, Express.js, React,
              Node.js) and leverage AI tools like ChatGPT, Claude, GitHub
              Copilot, and v0 to build applications faster and more efficiently.
              This AI-enhanced approach allows me to deliver high-quality
              solutions while maintaining exceptional user experiences and code
              quality.
            </p>
            <Button asChild>
              <a href="/cv.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download My CV
              </a>
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="text-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-sm rounded-full transition-all cursor-default ${
                          skill.category === "AI & Automation"
                            ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-800/50"
                            : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600"
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
      </div>
    </section>
  );
}
