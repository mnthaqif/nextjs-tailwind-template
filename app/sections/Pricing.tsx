"use client";

import { FadeIn } from "@/app/components/animations/FadeIn";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

const plans = [
  {
    name: "Starter",
    price: 0,
    tagline: "Perfect for trying things out",
    popular: false,
    features: [
      "Up to 1 project",
      "Basic components",
      "Community support",
      "Dark mode"
    ]
  },
  {
    name: "Growth",
    price: 29,
    tagline: "Ideal for growing products",
    popular: true,
    features: [
      "Unlimited projects",
      "All components",
      "Priority support",
      "Extended animations",
      "SEO toolkit"
    ]
  },
  {
    name: "Enterprise",
    price: 99,
    tagline: "For large scale needs",
    popular: false,
    features: [
      "Everything in Growth",
      "Audit assistance",
      "Custom integrations",
      "SLA & priority channels",
      "Dedicated success manager"
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="relative border-t py-28">
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Simple pricing
            </h2>
            <p className="mt-4 text-muted-foreground">
              Choose a plan that grows with your roadmap. Cancel anytime.
            </p>
          </div>
        </FadeIn>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.06}>
              <Card
                className={`relative h-full ${
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/10"
                    : "border-border"
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{plan.name}</CardTitle>
                    {plan.popular && (
                      <Badge variant="success">Popular</Badge>
                    )}
                  </div>
                  <CardDescription>{plan.tagline}</CardDescription>
                  <div className="mt-4 flex items-end gap-1">
                    <span className="text-4xl font-bold tracking-tight">
                      {plan.price === 0 ? "Free" : `$${plan.price}`}
                    </span>
                    {plan.price !== 0 && (
                      <span className="pb-2 text-sm text-muted-foreground">
                        /mo
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex gap-2 text-muted-foreground before:mt-1.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/60"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.price === 0 ? "Get Started" : "Choose Plan"}
                  </Button>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}