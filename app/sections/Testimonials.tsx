"use client";

import { FadeIn } from "@/app/components/animations/FadeIn";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "LaunchKit shaved weeks off our marketing site build. The code quality & structure are top-notch.",
    author: "Alex Rivera",
    role: "Head of Product"
  },
  {
    quote:
      "The dark mode implementation and animation layers were exactly what we needed out-of-the-box.",
    author: "Mia Chen",
    role: "Design Engineer"
  },
  {
    quote:
      "Being able to plug in custom sections while keeping a cohesive design system saved huge time.",
    author: "David Stone",
    role: "Founder"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative border-y bg-muted/40 py-28">
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Loved by modern teams
            </h2>
            <p className="mt-4 text-muted-foreground">
              Feedback from builders who shipped faster with LaunchKit.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Swiper
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1.2 },
                960: { slidesPerView: 2.2 },
                1280: { slidesPerView: 3 }
              }}
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.author}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="text-sm text-muted-foreground">
                        “{t.quote}”
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-medium">{t.author}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}