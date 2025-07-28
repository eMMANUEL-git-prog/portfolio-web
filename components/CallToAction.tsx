import {
  ArrowRight,
  Mail,
  MessageCircle,
  Sparkles,
  Code,
  Github,
  Terminal,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Tech Icons Pattern Background */}
      <div className="absolute inset-0 bg-blue-600 dark:bg-blue-800"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Card className="bg-white/15 backdrop-blur-md border-white/20 shadow-2xl">
          <CardContent className="p-12">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-full">
                <Sparkles className="h-8 w-8 text-yellow-300" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
              Let's combine cutting-edge AI tools with solid development
              practices to bring your ideas to life faster and more efficiently
              than ever before.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="group bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent backdrop-blur-sm"
              >
                <a
                  href="https://wa.me/254713616998"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Chat
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">50%</div>
                <div className="text-white/80 text-sm">Faster Development</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  AI-First
                </div>
                <div className="text-white/80 text-sm">Approach</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-white/80 text-sm">Support Available</div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-white/85 text-sm">
                Based in Nairobi, Kenya • Available for remote work worldwide •
                AI-Enhanced Development
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
