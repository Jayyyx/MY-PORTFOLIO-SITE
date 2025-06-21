import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const education = [
    {
        degree: "Bsc. Information Technology",
        institution: "University of Ghana",
        period: "2021 - 2025"
    },
    {
        degree: "High School Diploma",
        institution: "Forces Senior High School",
        period: ""
    }
];

const experience = [
    {
        role: "Intern",
        company: "MTN Ghana",
        period: "Summer 2023" // Placeholder period
    }
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm text-accent-foreground font-medium">About Me</div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Crafting Digital Experiences</h2>
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I specialize in creating modern, responsive web applications and robust website designs that deliver exceptional user experiences. With expertise in both frontend and backend technologies, I build complete solutions from concept to deployment. I thrive on turning complex problems into elegant, user-friendly solutions, always pushing the boundaries of what's possible on the web.
            </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
            <div>
                <h3 className="flex items-center gap-3 mb-6 text-2xl font-headline font-semibold">
                    <GraduationCap className="h-8 w-8 text-primary" />
                    Education
                </h3>
                <div className="relative pl-8 space-y-8 before:absolute before:inset-y-0 before:w-px before:bg-border before:left-3.5">
                    {education.map((item, index) => (
                        <div key={index} className="relative">
                            <div className="absolute w-3 h-3 bg-primary rounded-full left-[-30px] top-1.5"></div>
                            <Card className="hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <CardTitle>{item.degree}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-semibold">{item.institution}</p>
                                    {item.period && <p className="text-sm text-foreground/70">{item.period}</p>}
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="flex items-center gap-3 mb-6 text-2xl font-headline font-semibold">
                    <Briefcase className="h-8 w-8 text-primary" />
                    Experience
                </h3>
                 <div className="relative pl-8 space-y-8 before:absolute before:inset-y-0 before:w-px before:bg-border before:left-3.5">
                    {experience.map((item, index) => (
                         <div key={index} className="relative">
                            <div className="absolute w-3 h-3 bg-primary rounded-full left-[-30px] top-1.5"></div>
                            <Card className="hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <CardTitle>{item.role}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-semibold">{item.company}</p>
                                    <p className="text-sm text-foreground/70">{item.period}</p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
