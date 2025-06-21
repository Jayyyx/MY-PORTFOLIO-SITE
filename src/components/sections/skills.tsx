import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import { skills } from "@/lib/data";

const SkillCategory = ({ title, skills }: { title: string; skills: {name: string, icon: React.ElementType}[] }) => (
    <div>
        <h4 className="font-semibold mb-2 text-foreground/80">{title}</h4>
        <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
                <Badge key={skill.name} variant="secondary" className="text-base py-2 px-4 flex items-center gap-3">
                    <skill.icon className="h-5 w-5" />
                    <span>{skill.name}</span>
                </Badge>
            ))}
        </div>
    </div>
);

export default function SkillsSection() {
    return (
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 opacity-0 animate-fade-in-up">
                    <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm text-accent-foreground font-medium">Skills</div>
                    <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">My Technical Toolbox</h2>
                    <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        A look at the various technologies I've worked with. I'm always eager to learn more and expand my skillset.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <Card className="shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Lightbulb className="w-10 h-10 text-primary" />
                            <div>
                                <CardTitle className="font-headline text-2xl">My Tech Stack</CardTitle>
                                <p className="text-sm text-foreground/70">The languages, frameworks, and tools I use to build applications.</p>
                            </div>
                        </CardHeader>
                        <CardContent className="grid gap-6 pt-2">
                           {Object.entries(skills).map(([category, skillList]) => (
                               <SkillCategory key={category} title={category} skills={skillList} />
                           ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
