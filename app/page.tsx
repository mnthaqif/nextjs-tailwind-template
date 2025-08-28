import { Navbar } from "@/app/sections/Navbar";
import { Hero } from "@/app/sections/Hero";
import { Features } from "@/app/sections/Features";
import { Pricing } from "@/app/sections/Pricing";
import { Testimonials } from "@/app/sections/Testimonials";
import { Contact } from "@/app/sections/Contact";
import { Footer } from "@/app/sections/Footer";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}