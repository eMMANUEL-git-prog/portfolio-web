"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  stack: "Frontend" | "Backend" | "FullStack";
  status: "Planned" | "In Progress" | "Completed" | "On Hold";
  client: string;
  category:
    | "Web App"
    | "Mobile App"
    | "Ecommerce"
    | "Portfolio"
    | "API"
    | "Other";
  deadline?: string;
  budget?: number;
}

export function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    technologies: "",
    githubUrl: "",
    liveUrl: "",
    stack: "FullStack",
    status: "Planned",
    client: "Personal",
    category: "Web App",
    deadline: "",
    budget: "",
  });
  const { logout } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/projects`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const projectData = {
      ...formData,
      technologies: formData.technologies.split(",").map((tech) => tech.trim()),
      budget: formData.budget ? Number(formData.budget) : undefined,
    };

    try {
      const url = editingProject
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${editingProject.id}`
        : `${process.env.NEXT_PUBLIC_API_URL}/api/projects`;

      const response = await fetch(url, {
        method: editingProject ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        toast({
          title: editingProject ? "Project updated" : "Project created",
          description: "Project saved successfully.",
        });
        fetchProjects();
        resetForm();
        setIsDialogOpen(false);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save project.",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        toast({
          title: "Project deleted",
          description: "Project removed successfully.",
        });
        fetchProjects();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete project.",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      technologies: project.technologies.join(", "),
      githubUrl: project.githubUrl,
      liveUrl: project.liveUrl,
      stack: project.stack,
      status: project.status,
      client: project.client,
      category: project.category,
      deadline: project.deadline || "",
      budget: project.budget?.toString() || "",
    });
    setIsDialogOpen(true);
  };

  const resetForm = () => {
    setEditingProject(null);
    setFormData({
      title: "",
      description: "",
      image: "",
      technologies: "",
      githubUrl: "",
      liveUrl: "",
      stack: "FullStack",
      status: "Planned",
      client: "Personal",
      category: "Web App",
      deadline: "",
      budget: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Admin Dashboard
          </h1>
          <Button onClick={logout} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Manage Projects</h2>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="mr-2 h-4 w-4" />
                Add Project
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>
                  {editingProject ? "Edit Project" : "Add New Project"}
                </DialogTitle>
                <DialogDescription>
                  Fill in the project details below.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Project Title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                />
                <Textarea
                  placeholder="Project Description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                />
                <Input
                  placeholder="Image URL"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  required
                />
                <Input
                  placeholder="Technologies (comma-separated)"
                  value={formData.technologies}
                  onChange={(e) =>
                    setFormData({ ...formData, technologies: e.target.value })
                  }
                  required
                />
                <Input
                  placeholder="GitHub URL"
                  value={formData.githubUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, githubUrl: e.target.value })
                  }
                  required
                />
                <Input
                  placeholder="Live Demo URL"
                  value={formData.liveUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, liveUrl: e.target.value })
                  }
                  required
                />

                {/* New Fields */}
                <Input
                  placeholder="Stack (Frontend, Backend, FullStack)"
                  value={formData.stack}
                  onChange={(e) =>
                    setFormData({ ...formData, stack: e.target.value })
                  }
                  required
                />
                <Input
                  placeholder="Status (Planned, In Progress, Completed, On Hold)"
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                  required
                />
                <Input
                  placeholder="Client"
                  value={formData.client}
                  onChange={(e) =>
                    setFormData({ ...formData, client: e.target.value })
                  }
                  required
                />
                <Input
                  placeholder="Category (Web App, Mobile App, Ecommerce, Portfolio, API, Other)"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  required
                />
                <Input
                  type="date"
                  placeholder="Deadline"
                  value={formData.deadline}
                  onChange={(e) =>
                    setFormData({ ...formData, deadline: e.target.value })
                  }
                />
                <Input
                  type="number"
                  placeholder="Budget"
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                />

                <div className="flex gap-2">
                  <Button type="submit">
                    {editingProject ? "Update" : "Create"} Project
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Stack: {project.stack}</p>
                <p className="text-sm text-gray-500">
                  Status: {project.status}
                </p>
                <p className="text-sm text-gray-500">
                  Client: {project.client}
                </p>
                <p className="text-sm text-gray-500">
                  Category: {project.category}
                </p>
                {project.deadline && (
                  <p className="text-sm text-gray-500">
                    Deadline: {project.deadline}
                  </p>
                )}
                {project.budget && (
                  <p className="text-sm text-gray-500">
                    Budget: ${project.budget}
                  </p>
                )}
                <div className="flex gap-2 mt-2">
                  <Button size="sm" onClick={() => handleEdit(project)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(project.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
