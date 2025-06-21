import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Portfolio Website",
    description: "The very website you are on. Built with Next.js, Tailwind CSS, and ShadCN UI for a clean, modern, and responsive design.",
    image: "https://placehold.co/600x400.png",
    github: "https://github.com/Jayyyx/portfolio-v1",
    live: "#",
    tags: ["Next.js", "React", "Tailwind CSS"],
    aiHint: "website portfolio"
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with product listings, shopping cart, and checkout functionalities. Powered by React and a PHP backend.",
    image: "https://placehold.co/600x400.png",
    github: "https://github.com/Jayyyx/",
    live: "",
    tags: ["React", "PHP", "SQL", "E-commerce"],
    aiHint: "online store"
  },
  {
    title: "Mobile Task Manager",
    description: "A cross-platform task management application built with React Native. Helps users organize their daily tasks and stay productive.",
    image: "https://placehold.co/600x400.png",
    github: "https://github.com/Jayyyx/",
    live: "",
    tags: ["React Native", "JavaScript", "Mobile App"],
    aiHint: "mobile app"
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 opacity-0 animate-fade-in-up">
            <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm text-accent-foreground font-medium">Projects</div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Some Things I've Built</h2>
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here are a few projects I've worked on. I'm always looking for new challenges and opportunities to learn.
            </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-card opacity-0 animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 200}ms` }}>
              <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-auto aspect-video object-cover" data-ai-hint={project.aiHint} />
              <CardHeader>
                <CardTitle className="font-headline">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                 <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                {project.github && (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}
                {project.live && (
                  <Button asChild size="sm">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
