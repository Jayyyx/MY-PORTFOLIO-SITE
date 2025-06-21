import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Pickaxe } from "lucide-react";

const strongSkills = {
    "Languages": ["HTML", "CSS", "PHP", "Java", "JavaScript"],
    "Frameworks": ["React", "React Native"],
    "Databases": ["SQL"],
    "Libraries & Tools": ["React Router", "SQL Workbench"]
};

const weakSkills = {
    "Languages": ["Python", "C++", "C#"],
    "Frameworks": ["Flutter", "Windows Forms"]
};

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
    <div>
        <h4 className="font-semibold mb-2 text-foreground/80">{title}</h4>
        <div className="flex flex-wrap gap-2">
            {skills.map(skill => <Badge key={skill} variant="secondary" className="text-base py-1 px-3">{skill}</Badge>)}
        </div>
    </div>
);

export default function SkillsSection() {
    return (
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm text-accent-foreground font-medium">Skills</div>
                    <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">My Technical Toolbox</h2>
                    <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        A look at the technologies I work with. I'm confident with my strong stack and always eager to improve on the rest.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                    <Card className="shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Lightbulb className="w-10 h-10 text-primary" />
                            <div>
                                <CardTitle className="font-headline text-2xl">Strong Stack</CardTitle>
                                <p className="text-sm text-foreground/70">My go-to technologies for building applications.</p>
                            </div>
                        </CardHeader>
                        <CardContent className="grid gap-6 pt-2">
                           {Object.entries(strongSkills).map(([category, skills]) => (
                               <SkillCategory key={category} title={category} skills={skills} />
                           ))}
                        </CardContent>
                    </Card>
                    <Card className="shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Pickaxe className="w-10 h-10 text-primary" />
                             <div>
                                <CardTitle className="font-headline text-2xl">Weak Stack</CardTitle>
                                <p className="text-sm text-foreground/70">Areas I'm currently working to improve.</p>
                            </div>
                        </CardHeader>
                        <CardContent className="grid gap-6 pt-2">
                            {Object.entries(weakSkills).map(([category, skills]) => (
                               <SkillCategory key={category} title={category} skills={skills} />
                           ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
