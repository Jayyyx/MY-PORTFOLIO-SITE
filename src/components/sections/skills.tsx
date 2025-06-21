import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Code, Framer, Smartphone, AppWindow, Database, Library, Cpu, Braces } from "lucide-react";

const skills = {
    "Languages": ["HTML", "CSS", "PHP", "Java", "JavaScript", "Python", "C++", "C#"],
    "Frameworks": ["React", "React Native", "Flutter", "Windows Forms"],
    "Databases": ["SQL", "Supabase", "PostgreSQL", "MongoDB"],
    "Libraries & Tools": ["React Router", "SQL Workbench"]
};

const getIconForSkill = (skill: string) => {
    const iconProps = { className: "h-5 w-5" };
    switch (skill.toLowerCase()) {
        case 'html':
        case 'css':
        case 'javascript':
            return <Code {...iconProps} />;
        case 'php':
        case 'java':
        case 'python':
        case 'c++':
        case 'c#':
            return <Braces {...iconProps} />;
        case 'react':
            return <Framer {...iconProps} />;
        case 'react native':
        case 'flutter':
            return <Smartphone {...iconProps} />;
        case 'windows forms':
            return <AppWindow {...iconProps} />;
        case 'sql':
        case 'postgresql':
        case 'mongodb':
        case 'sql workbench':
            return <Database {...iconProps} />;
        case 'supabase':
            return <Cpu {...iconProps} />;
        case 'react router':
            return <Library {...iconProps} />;
        default:
            return null;
    }
}

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
    <div>
        <h4 className="font-semibold mb-2 text-foreground/80">{title}</h4>
        <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
                <Badge key={skill} variant="secondary" className="text-base py-2 px-4 flex items-center gap-3">
                    {getIconForSkill(skill)}
                    <span>{skill}</span>
                </Badge>
            ))}
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
                        A look at the various technologies I've worked with. I'm always eager to learn more and expand my skillset.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <Card className="shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Lightbulb className="w-10 h-10 text-primary" />
                            <div>
                                <CardTitle className="font-headline text-2xl">My Tech Stack</CardTitle>
                                <p className="text-sm text-foreground/70">The languages, frameworks, and tools I use to build applications.</p>
                            </div>
                        </CardHeader>
                        <CardContent className="grid gap-6 pt-2">
                           {Object.entries(skills).map(([category, skills]) => (
                               <SkillCategory key={category} title={category} skills={skills} />
                           ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
