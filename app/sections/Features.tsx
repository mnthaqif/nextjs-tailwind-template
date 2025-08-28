"use client";

import { FadeIn } from "@/app/components/animations/FadeIn";
import { Code2, Lock, Rocket, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";

const features = [
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "Production Ready",
    desc: "Modern tooling, ESM, strict TypeScript and server-side rendering preconfigured."
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Composable UI",
    desc: "shadcn/ui based primitives with variants for rapid reuse and theming."
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Secure by Design",
    desc: "Best practices for headers, dynamic metadata and validation layers."
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Analytics Friendly",
    desc: "Clean semantic markup ready for instrumentation & A/B testing."
  }
];

export function Features() {
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Everything you need to launch
            </h2>
            <p className="mt-4 text-muted-foreground">
              A focused feature set to help you iterate fast and scale with
              confidence.
            </p>
          </div>
        </FadeIn>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.05}>
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    {f.icon}
                  </div>
                  <CardTitle className="text-base">{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}