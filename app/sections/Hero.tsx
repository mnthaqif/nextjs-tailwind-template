"use client";

import { Button } from "@/app/components/ui/button";
import { FadeIn } from "@/app/components/animations/FadeIn";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center pt-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-center">
        <FadeIn>
          <div>
            <p className="mb-4 inline-flex items-center rounded-full border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              New: Server Actions integrated
            </p>
            <h1 className="text-balance bg-gradient-to-r from-foreground to-primary/70 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
              Launch faster with a modern composable template
            </h1>
            <p className="mt-6 max-w-prose text-lg text-muted-foreground">
              Ship conversion-focused landing pages with production-ready
              components, dark mode, animations, and fully typed code.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Start Free</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#features">Explore Features</a>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              No credit card required • Deploy to Vercel in minutes
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <motion.div
            className="relative aspect-[4/3] w-full rounded-2xl border bg-gradient-to-br from-primary/10 via-background to-background shadow-lg ring-1 ring-primary/10"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-center text-sm text-muted-foreground">
              Dashboard Preview Placeholder
            </div>
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/30 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}