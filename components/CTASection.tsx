'use client';

import MotionFadeIn from './MotionFadeIn';

export default function CTASection() {
  return (
    <section id="contact" className="section-pad">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 p-10 md:p-16 text-white">
          <MotionFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to elevate your workflow?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl">
              Join growing teams leveraging our platform to accelerate product delivery and insight generation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="bg-white text-brand-700 font-semibold px-6 py-3 rounded-md hover:bg-slate-100 transition"
              >
                Start Free Trial
              </a>
              <a
                href="#"
                className="border border-white/40 text-white font-medium px-6 py-3 rounded-md hover:bg-white/10 transition"
              >
                Book a Demo
              </a>
            </div>
            <p className="mt-4 text-xs text-white/60">
              No credit card needed • Cancel anytime
            </p>
          </MotionFadeIn>
          <div className="absolute -right-10 -top-10 w-60 h-60 rounded-full bg-white/10 blur-2xl" />
        </div>
      </div>
    </section>
  );
}