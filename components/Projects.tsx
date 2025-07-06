"use client";

import { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Code,
  Terminal,
  Database,
  Layers,
  GitBranch,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    console.log(
      "Fetching projects from:",
      `${process.env.NEXT_PUBLIC_API_URL}/api/projects`
    );

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/projects`
      );
      console.log("Response status:", response.status);

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched projects:", data);
        setProjects(data);
      } else {
        console.log("API response not ok, using sample data");
        setProjects(sampleProjects);
      }
    } catch (error) {
      console.error("Failed to fetch projects:", error);
      console.log("Using sample data due to error");
      setProjects(sampleProjects);
    } finally {
      console.log("Setting loading to false");
      setLoading(false);
    }
  };

  const sampleProjects: Project[] = [
    {
      _id: "1",
      title: "TaskFlow - AI-Enhanced Project Management Platform",
      description:
        "A comprehensive project management application with AI-powered task suggestions, real-time collaboration, Kanban boards, team chat, file sharing, and advanced analytics. Built with React, Node.js, Socket.io, and PostgreSQL using AI development tools.",
      image: "/placeholder2.jpg?height=300&width=400",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Socket.io",
        "Express",
        "JWT",
        "Tailwind CSS",
        "Chart.js",
      ],
      githubUrl: "https://github.com/emmanuel19727/taskflow-app",
      liveUrl: "https://taskflow-demo.vercel.app",
    },
    {
      _id: "2",
      title: "EcoMart - AI-Powered Sustainable E-commerce",
      description:
        "A full-featured e-commerce platform with AI-driven product recommendations, automated inventory management, and smart pricing. Features user authentication, shopping cart, payment processing with Stripe, and AI-enhanced admin dashboard.",
      image: "/placeholder2.jpg?height=300&width=400",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Stripe",
        "NextAuth",
        "Tailwind CSS",
        "Vercel",
      ],
      githubUrl: "https://github.com/emmanuel19727/ecomart-ecommerce",
      liveUrl: "https://ecomart-kenya.vercel.app",
    },
    {
      _id: "3",
      title: "FinTracker - Personal Finance Manager",
      description:
        "A comprehensive personal finance application with expense tracking, budget planning, financial goal setting, and detailed analytics. Includes data visualization, recurring transactions, and export functionality.",
      image: "/placeholder2.jpg?height=300&width=400",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Express",
        "Chart.js",
        "PDF Export",
        "JWT",
        "Material-UI",
      ],
      githubUrl: "https://github.com/emmanuel19727/fintracker-app",
      liveUrl: "https://fintracker-demo.netlify.app",
    },
    {
      _id: "4",
      title: "DevConnect - Developer Community Platform",
      description:
        "A social platform for developers to connect, share projects, collaborate on code, and participate in coding challenges. Features real-time messaging, code sharing, project showcases, and skill-based matching.",
      image: "/placeholder2.jpg?height=300&width=400",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Socket.io",
        "Prisma",
        "NextAuth",
        "Tailwind CSS",
        "Redis",
      ],
      githubUrl: "https://github.com/emmanuel19727/devconnect-platform",
      liveUrl: "https://devconnect-kenya.vercel.app",
    },
    {
      _id: "5",
      title: "WeatherWise - Advanced Weather Dashboard",
      description:
        "An intelligent weather application with location-based forecasts, weather alerts, historical data analysis, and agricultural insights for Kenyan farmers. Includes offline functionality and SMS notifications.",
      image: "/placeholder2.jpg?height=300&width=400",
      technologies: [
        "React",
        "Node.js",
        "OpenWeather API",
        "PostgreSQL",
        "PWA",
        "Chart.js",
        "Twilio",
        "Express",
      ],
      githubUrl: "https://github.com/emmanuel19727/weatherwise-app",
      liveUrl: "https://weatherwise-kenya.netlify.app",
    },
    {
      _id: "6",
      title: "LearnHub - Online Learning Platform",
      description:
        "A comprehensive e-learning platform with course creation tools, video streaming, progress tracking, quizzes, certificates, and payment integration. Designed specifically for African educational content.",
      image: "/placeholder2.jpg?height=300&width=400",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Stripe",
        "AWS S3",
        "NextAuth",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/emmanuel19727/learnhub-platform",
      liveUrl: "https://learnhub-africa.vercel.app",
    },
  ];

  if (loading) {
    return (
      <section className="relative py-20 overflow-hidden">
        {/* Tech Icons Pattern Background */}
        <div className="absolute inset-0 bg-white dark:bg-gray-900">
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23374151' fillOpacity='1'%3E%3Cpath d='M20 20h16v16H20zm24 0h16v16H44zm24 0h16v16H68zm24 0h16v16H92zM20 44h16v16H20zm24 0h16v16H44zm24 0h16v16H68zm24 0h16v16H92zM20 68h16v16H20zm24 0h16v16H44zm24 0h16v16H68zm24 0h16v16H92zM20 92h16v16H20zm24 0h16v16H44zm24 0h16v16H68zm24 0h16v16H92z'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "120px 120px",
                animation: "float 32s ease-in-out infinite",
              }}
            ></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Loading projects...
            </p>
          </div>
        </div>
      </section>
    );
  }

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
              animation: "float 32s ease-in-out infinite",
            }}
          ></div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute top-16 left-16 text-gray-400/8 dark:text-gray-600/12 animate-pulse">
          <Code className="w-16 h-16" />
        </div>
        <div className="absolute top-32 right-20 text-gray-400/8 dark:text-gray-600/12 animate-bounce">
          <Github className="w-14 h-14" />
        </div>
        <div
          className="absolute bottom-20 left-20 text-gray-400/8 dark:text-gray-600/12 animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          <Terminal className="w-12 h-12" />
        </div>
        <div
          className="absolute bottom-32 right-16 text-gray-400/8 dark:text-gray-600/12 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        >
          <Database className="w-10 h-10" />
        </div>
        <div
          className="absolute top-1/2 left-10 text-gray-400/8 dark:text-gray-600/12 animate-pulse"
          style={{ animationDelay: "2s" }}
        >
          <Server className="w-12 h-12" />
        </div>
        <div
          className="absolute top-2/3 right-10 text-gray-400/8 dark:text-gray-600/12 animate-bounce"
          style={{ animationDelay: "1.5s" }}
        >
          <Layers className="w-8 h-8" />
        </div>
        <div
          className="absolute bottom-1/3 left-1/4 text-gray-400/8 dark:text-gray-600/12 animate-pulse"
          style={{ animationDelay: "0.8s" }}
        >
          <GitBranch className="w-10 h-10" />
        </div>

        {/* Code Symbols */}
        <div className="absolute top-1/4 right-1/3 text-lg text-gray-400/12 dark:text-gray-600/15 font-mono animate-pulse select-none pointer-events-none">
          {"{ }"}
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-md text-gray-400/12 dark:text-gray-600/15 font-mono animate-bounce select-none pointer-events-none">
          {"</>"}
        </div>
        <div
          className="absolute top-1/3 left-1/2 text-sm text-gray-400/12 dark:text-gray-600/15 font-mono animate-pulse select-none pointer-events-none"
          style={{ animationDelay: "1.2s" }}
        >
          {"=>"}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my AI-enhanced projects. Each one showcases how
            combining traditional development with AI tools creates better
            solutions faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project._id}
              className="overflow-hidden hover:shadow-lg transition-shadow bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder2.jpg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                    >
                      {tech}
                    </span>
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
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
