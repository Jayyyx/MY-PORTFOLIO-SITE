import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ExternalLink, Wand2 } from "lucide-react";

export default function InspirationSection() {
    return (
        <section id="inspiration" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm text-accent-foreground font-medium">Inspiration</div>
                    <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Aesthetic Comparator</h2>
                    <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        This section serves as a visual benchmark, using Delly's Portfolio as an inspiration to continuously refine and enhance the design aesthetics of my own site.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Card className="max-w-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader className="flex-row gap-4 items-start">
                             <Wand2 className="w-10 h-10 text-primary flex-shrink-0" />
                            <div>
                                <CardTitle className="font-headline">Design Inspiration: Delly's Portfolio</CardTitle>
                                <CardDescription>A constant source of inspiration for clean design, smooth animations, and effective information architecture. This site is used as a reference for aesthetic improvements.</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="relative aspect-video overflow-hidden rounded-lg border">
                                <Image src="https://placehold.co/1280x720.png" alt="Delly's Portfolio Screenshot" fill objectFit="cover" data-ai-hint="website design" />
                            </div>
                        </CardContent>
                         <CardFooter className="flex justify-end">
                            <Button asChild>
                                <a href="https://delly-portfolio-v3.onrender.com" target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Visit Site
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}
