import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Activity, Type } from "lucide-react";

const services = [
    {
        icon: Type,
        title: "Web Development",
        description: "Creating responsive websites that work seamlessly across all devices using modern frameworks and best practices."
    },
    {
        icon: Monitor,
        title: "Web Application Development",
        description: "Crafting dynamic web applications with modern frameworks, responsive design, and seamless user experiences. From single-page applications to full-stack solutions, I focus on creating scalable and maintainable web applications that meet user needs."
    },
    {
        icon: Activity,
        title: "Web Design & UI/UX",
        description: "Designing intuitive and engaging web interfaces that enhance user experience and drive engagement."
    }
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 opacity-0 animate-fade-in-up">
            <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm text-accent-foreground font-medium">What I Do</div>
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I build beautiful, functional, and user-friendly websites and web applications using modern
                technologies. My goal is to create robust digital solutions that help businesses grow, streamline
                operations, and provide users with exceptional experiences. Whether it's a responsive website, a
                complex web application, or websites designs, I focus on delivering high-quality, scalable solutions that
                meet both business and user needs.
            </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
                <Card key={index} className="flex flex-col items-center text-center p-6 hover:shadow-xl transition-shadow bg-card opacity-0 animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 200}ms`}}>
                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                        <service.icon className="h-10 w-10 text-primary" />
                    </div>
                    <CardHeader className="p-0">
                        <CardTitle className="font-headline text-xl mb-2">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <p className="text-foreground/70 text-sm">{service.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
