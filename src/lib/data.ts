import { Code, Framer, Smartphone, AppWindow, Database, Library, Cpu, Braces } from "lucide-react";

export const projects = [
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

export const skills = {
    "Languages": [
        { name: "HTML", icon: Code },
        { name: "CSS", icon: Code },
        { name: "PHP", icon: Braces },
        { name: "Java", icon: Braces },
        { name: "JavaScript", icon: Code },
        { name: "Python", icon: Braces },
        { name: "C++", icon: Braces },
        { name: "C#", icon: Braces },
    ],
    "Frameworks": [
        { name: "React", icon: Framer },
        { name: "React Native", icon: Smartphone },
        { name: "Flutter", icon: Smartphone },
        { name: "Windows Forms", icon: AppWindow },
    ],
    "Databases": [
        { name: "SQL", icon: Database },
        { name: "Supabase", icon: Cpu },
        { name: "PostgreSQL", icon: Database },
        { name: "MongoDB", icon: Database },
    ],
    "Libraries & Tools": [
        { name: "React Router", icon: Library },
        { name: "SQL Workbench", icon: Database },
    ]
};
