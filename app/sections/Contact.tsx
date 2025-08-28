"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";
import { FadeIn } from "@/app/components/animations/FadeIn";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 chars")
});

type ContactValues = z.infer<typeof contactSchema>;

export function Contact() {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" }
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function onSubmit(values: ContactValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" }
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-3xl px-4">
        <FadeIn>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Let&apos;s build something
            </h2>
            <p className="mt-4 text-muted-foreground">
              Have questions or need a custom plan? Reach out below.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className="mt-12 rounded-xl border bg-card p-8 shadow-sm">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-6"
                noValidate
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <Input
                          placeholder="Jane Doe"
                          autoComplete="name"
                          {...field}
                        />
                        <FormMessage>
                          {form.formState.errors.name?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <Input
                          placeholder="you@example.com"
                          type="email"
                          autoComplete="email"
                          {...field}
                        />
                        <FormMessage>
                          {form.formState.errors.email?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        placeholder="Tell us about your project..."
                        {...field}
                      />
                      <FormMessage>
                        {form.formState.errors.message?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
                <div className="flex items-center gap-4">
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full sm:w-auto"
                  >
                    {status === "loading"
                      ? "Sending..."
                      : status === "success"
                      ? "Sent!"
                      : "Send Message"}
                  </Button>
                  {status === "error" && (
                    <p className="text-xs font-medium text-destructive">
                      Something went wrong. Try again.
                    </p>
                  )}
                </div>
                <p className="text-center text-xs text-muted-foreground">
                  We respect your privacy. Your info stays confidential.
                </p>
              </form>
            </Form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}