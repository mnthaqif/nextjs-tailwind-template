'use client';

import { motion } from 'framer-motion';
import MotionFadeIn from './MotionFadeIn';

export default function Hero() {
  return (
    <section className="pt-32 section-pad relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-brand-50 via-white to-white" />
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <MotionFadeIn>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Grow faster with our
            <span className="gradient-text"> modern platform</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Streamline operations, engage customers, and unlock insights with one unified solution built for ambitious teams.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#pricing"
              className="px-6 py-3 rounded-md bg-brand-600 text-white font-semibold hover:bg-brand-700 transition"
            >
              Start Free Trial
            </a>
            <a
              href="#features"
              className="px-6 py-3 rounded-md border border-slate-300 text-slate-700 font-medium hover:border-slate-400"
            >
              Explore Features
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-500">14-day trial • No credit card required</p>
        </MotionFadeIn>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          <div className="aspect-[4/3] w-full bg-gradient-to-br from-brand-200 to-brand-500 rounded-xl shadow-lg flex items-center justify-center text-white text-2xl font-semibold">
            Dashboard Preview
          </div>
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-brand-100 rounded-full blur-2xl opacity-60" />
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-brand-300 rounded-full blur-xl opacity-60" />
        </motion.div>
      </div>
    </section>
  );
}