import {
  ArrowRight,
  Download,
  MapPin,
  Calendar,
  Code,
  Sparkles,
  Github,
  Terminal,
  Database,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Nairobi, Kenya</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for work</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Emmanuel
                </span>
              </h1>

              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                  AI-Powered WebApp Developer
                </h2>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="text-xs bg-blue-100 dark:bg-blue-900"
                  >
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI-Enhanced
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    PostgreSQL
                  </Badge>
                </div>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              I craft modern, scalable web applications using cutting-edge AI
              tools and traditional development practices. With{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                5+ years
              </span>{" "}
              of experience and{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                AI-powered workflows
              </span>
              , I deliver{" "}
              <span className="font-semibold text-green-600 dark:text-green-400">
                20+ projects
              </span>{" "}
              faster and more efficiently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Link href="/projects">
                  <Code className="mr-2 h-5 w-5" />
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="group bg-transparent"
              >
                <a href="/cv.pdf" download>
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  3+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  20+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  AI-Enhanced Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  15+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Happy Clients
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Tech orbit rings */}
              <div
                className="absolute inset-0 border-2 border-dashed border-blue-300 dark:border-blue-600 rounded-full"
                style={{ animation: "spin 8s linear infinite" }}
              ></div>
              <div
                className="absolute inset-8 border-2 border-dashed border-purple-300 dark:border-purple-600 rounded-full"
                style={{ animation: "spin 6s linear infinite reverse" }}
              ></div>

              {/* Main profile container */}
              <div className="absolute inset-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <img
                  src="/me3.png?height=300&width=300"
                  alt="Emmanuel - AI-Powered WebApp Developer"
                  className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>

              {/* Floating AI/Tech icons */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg animate-bounce border border-gray-200 dark:border-gray-700">
                <Sparkles className="h-6 w-6 text-yellow-500" />
              </div>
              <div
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg animate-bounce border border-gray-200 dark:border-gray-700"
                style={{ animationDelay: "0.5s" }}
              >
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <div className="absolute top-1/2 -left-8 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg animate-pulse border border-gray-200 dark:border-gray-700">
                <Calendar className="h-4 w-4 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
