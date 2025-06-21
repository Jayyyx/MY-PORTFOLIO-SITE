import { Button } from "@/components/ui/button";
import { Github, Mail, Phone, MessageSquare, MapPin } from "lucide-react";
import Link from "next/link";

const contactDetails = [
  { icon: Mail, text: "lavoejeremiah63@gmail.com", href: "mailto:lavoejeremiah63@gmail.com" },
  { icon: Phone, text: "0538103772", href: "tel:0538103772" },
  { icon: MessageSquare, text: "0262765223 (WhatsApp)", href: "https://wa.me/233262765223" },
  { icon: Github, text: "Jayyyx", href: "https://github.com/Jayyyx" },
  { icon: MapPin, text: "Accra, Ghana", href: "https://www.google.com/maps/place/Accra" }
];

export default function ContactSection() {
    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm text-accent-foreground font-medium">Contact</div>
                    <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                    <p className="max-w-[600px] text-foreground/70 md:text-xl/relaxed">
                        My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>
                <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
                    {contactDetails.map((detail, index) => (
                        <a key={index} href={detail.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 justify-center sm:justify-start group">
                            <div className="bg-primary/10 p-3 rounded-full transition-colors group-hover:bg-primary/20">
                                <detail.icon className="h-6 w-6 text-primary" />
                            </div>
                            <span className="text-lg font-medium group-hover:underline">
                                {detail.text}
                            </span>
                        </a>
                    ))}
                </div>
                <div className="flex justify-center mt-12">
                     <Button asChild size="lg" className="text-lg">
                        <a href="mailto:lavoejeremiah63@gmail.com">
                            Say Hello
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
