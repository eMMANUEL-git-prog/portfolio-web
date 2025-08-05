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
  Globe,
  Monitor,
  Loader,
  CheckCircle,
  RefreshCcw,
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
  stack: string;
  status: string;
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
      title: "AmbaleStates - Real Estate Management",
      description:
        "A real estate management platform designed for seamless property listing, tenant tracking, and lease management. Built with a user-friendly interface and scalable architecture, it empowers property managers and realtors to efficiently handle operations, from property onboarding to client communication.",
      image: "/projects/ambalestates.png?height=300&width=400",
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
      stack: "Frontend",
      status: "In Progress",
    },
    {
      _id: "2",
      title: "Bobby Furniture Kenya",
      description:
        "Bobby Furniture Kenya is a comprehensive e-commerce platform specializing in furniture retail. It features intuitive product browsing, robust inventory management, and dynamic pricing to enhance operational efficiency and deliver an exceptional customer experience.",
      image: "/projects/bobby2.png?height=300&width=400",
      technologies: [
        "React.js",
        "Node",
        "JavaScript",
        "PostgreSQL",
        "Express",
        "JWT",
        "Tailwind CSS",
        "Vercel",
      ],
      githubUrl: "https://github.com/emmanuel19727/ecomart-ecommerce",
      liveUrl: "https://www.bobbyfurniturekenya.com/",
      stack: "FullStack",
      status: "Live",
    },
    {
      _id: "3",
      title: "eUNITA - Software Company",
      description:
        "eUNITA is a modern software development company I founded, focused on building scalable, user-centric digital solutions. From web and mobile apps to backend systems, eUNITA emphasizes clean code, efficient architecture, and innovation-driven development.",
      image: "/projects/eunita.png?height=300&width=400",
      technologies: [
        "Next.js",
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
      stack: "FullStack",
      status: "Completed",
    },
    {
      _id: "4",
      title: "COLMAN - Saas Company",
      description:
        "COLMAN is a modern software development company focused on delivering tailored digital solutions across various industries. With a strong emphasis on performance, scalability, and clean design, COLMAN specializes in web and mobile applications built with cutting-edge technologies like the PERN stack and Next.js.",
      image: "/projects/colman.png?height=300&width=400",
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
      stack: "FullStack",
      status: "In Progress",
    },
    {
      _id: "5",
      title: "Medicare - Clinical Website",
      description:
        "Medicare is a modern clinical web platform designed to streamline patient care and medical workflows. It offers features like online appointment booking, patient records management, doctor profiles, and real-time availability. Built using the PERN stack with a responsive frontend powered by Next.js, Medicare ensures a seamless and secure experience for both patients and healthcare providers.",
      image: "/projects/medicare.png?height=300&width=400",
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
      stack: "FullStack",
      status: "In Progress",
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
      stack: "FullStack",
      status: "In Progress",
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
        return <RefreshCcw className="animate-spin text-white w-4 h-4 mr-1" />;
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

  if (loading) {
    return (
      <section className="relative py-20 overflow-hidden">
        {/* Tech Icons Pattern Background */}
        <div className="absolute inset-0 bg-white dark:bg-gray-900">
          <div className="absolute inset-0 opacity-5 dark:opacity-10"></div>
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

              <div
                className={`${getBgClass(
                  project.status
                )} absolute top-2 right-2 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center`}
              >
                {/* <Sparkles className="w-3 h-3 mr-1" /> */}
                {getStatusIcon(project.status)}
                {project.status || "In Progress"}
              </div>

              <div className="absolute top-2 left-2 bg-white text-black px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                {/* <Sparkles className="w-3 h-3 mr-1" /> */}
                {getIcon(project.stack)}
                {project.stack || "Full Stack"}
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
