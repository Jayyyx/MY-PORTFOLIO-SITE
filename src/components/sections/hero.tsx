import { Button } from "@/components/ui/button";
import { Download, Github, Mail, Phone, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HeroSection() {
  return (
    <section id="home" className="container mx-auto flex min-h-[calc(100vh-5rem)] items-center px-4 py-20 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 text-center md:text-left">
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
              <a href="mailto:lavoejeremiah63@gmail.com">
                <Mail className="mr-2 h-5 w-5" /> Email Me
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="https://github.com/Jayyyx" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> GitHub
              </a>
            </Button>
             <Button asChild variant="secondary" size="lg">
              <a href="tel:0538103772">
                <Phone className="mr-2 h-5 w-5" /> Call Me
              </a>
            </Button>
             <Button asChild variant="secondary" size="lg">
              <a href="https://wa.me/233262765223" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
            <Avatar className="h-64 w-64 md:h-96 md:w-96 border-4 border-primary/20 shadow-xl">
                <AvatarImage src="https://placehold.co/400x400.png" alt="Lavoe Kwaku Jeremiah" data-ai-hint="male portrait" />
                <AvatarFallback>LKJ</AvatarFallback>
            </Avatar>
        </div>
      </div>
    </section>
  );
}
