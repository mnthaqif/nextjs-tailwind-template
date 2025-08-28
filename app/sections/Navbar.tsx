"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { ThemeToggle } from "@/app/components/theme/ThemeToggle";
import { siteConfig } from "@/site.config";
import { cn } from "@/app/utils/cn";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3">
        <a
          href="/"
            className="flex items-center gap-2 text-lg font-bold tracking-tight"
          aria-label={siteConfig.name}
        >
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {siteConfig.shortName}
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button size="sm" asChild>
            <a href="#contact">Get Started</a>
          </Button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            size="icon"
            variant="outline"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="i">{open ? "✕" : "☰"}</span>
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t md:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className={cn(
                    "text-sm font-medium text-muted-foreground hover:text-foreground"
                  )}
                >
                  {l.label}
                </a>
              ))}
              <Button size="sm" className="mt-2" asChild>
                <a href="#contact" onClick={() => setOpen(false)}>
                  Get Started
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}