"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Rocket, Sun, Moon, Mail } from "lucide-react";
import { HireMeButton } from "../hire-me-button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const ThemeToggleButton = () => {
    if (!mounted) {
      return <Button variant="outline" size="icon" className="h-10 w-10" disabled />;
    }
    return (
      <Button onClick={toggleTheme} variant="outline" size="icon" className="relative h-10 w-10 overflow-hidden">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-secondary/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold">
          <Rocket className="h-7 w-7 text-primary" />
          <span>Lavoe's Launchpad</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary">
                  {link.label}
                </Link>
              ))}
            </nav>
            <HireMeButton />
            <ThemeToggleButton />
        </div>
        <div className="flex md:hidden items-center gap-2">
            <HireMeButton variant="outline" size="icon">
                <Mail className="h-5 w-5"/>
                <span className="sr-only">Hire Me</span>
            </HireMeButton>
            <ThemeToggleButton />
            <Sheet>
                <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open navigation menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="right">
                <div className="flex flex-col gap-6 p-6">
                    <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold">
                    <Rocket className="h-6 w-6 text-primary" />
                    <span>Lavoe's Launchpad</span>
                    </Link>
                    <nav className="flex flex-col gap-4 mt-6">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary">
                        {link.label}
                        </Link>
                    ))}
                    </nav>
                    <HireMeButton className="mt-4" />
                </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
