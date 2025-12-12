import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Briefcase } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HeroSection() {
  return (
    <section id="home" className="container mx-auto flex min-h-[calc(100vh-5rem)] items-center px-4 py-20 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 text-center md:text-left opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <p className="font-headline text-lg font-medium text-primary">Hi, my name is</p>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter">
            Lavoe Kwaku Jeremiah.
          </h1>
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground/80">
            I build things for the web.
          </h2>
          <p className="max-w-xl text-lg text-foreground/70">
            I'm a software developer based in Accra, Ghana, specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on expanding my skills in full-stack development.
          </p>
          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            <Button asChild size="lg">
              <a href="/Lavoe-Kwaku-Jeremiah-CV.pdf" download>
                <Download className="mr-2 h-5 w-5" /> Download CV
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#projects">
                <Briefcase className="mr-2 h-5 w-5" /> View My Work
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="https://github.com/Jayyyx" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> GitHub
              </a>
            </Button>
             <Button asChild variant="secondary" size="lg">
              <a href="https://www.linkedin.com/in/jeremiah-lavoe-606785275/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Avatar className="h-64 w-64 md:h-96 md:w-96 border-4 border-primary/20 shadow-xl">
                <AvatarImage src="/images/jayy.jpg" alt="Lavoe Kwaku Jeremiah" data-ai-hint="male portrait" />
                <AvatarFallback>LKJ</AvatarFallback>
            </Avatar>
        </div>
      </div>
    </section>
  );
}
