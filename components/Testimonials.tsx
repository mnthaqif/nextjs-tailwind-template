'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { testimonials } from '@/lib/data';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">What customers say</h2>
          <p className="mt-4 text-slate-600">
            Trusted by forward-thinking teams across industries.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              900: { slidesPerView: 2.2 }
            }}
          >
            {testimonials.map(t => (
              <SwiperSlide key={t.author}>
                <div className="h-full flex flex-col rounded-xl bg-white border border-slate-200 p-6 shadow-sm">
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">
                    “{t.quote}”
                  </p>
                  <div className="mt-auto">
                    <p className="font-semibold text-sm">{t.author}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}