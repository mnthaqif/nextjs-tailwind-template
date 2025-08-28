'use client';

import { motion } from 'framer-motion';
import { pricingPlans } from '@/lib/data';

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-4 text-slate-600">Choose a plan that scales with your business. Cancel anytime.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => {
            const highlight = plan.popular;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`relative flex flex-col rounded-xl border p-8 shadow-sm ${
                  highlight
                    ? 'border-brand-500 bg-gradient-to-b from-white to-brand-50 ring-2 ring-brand-300'
                    : 'border-slate-200 bg-white'
                }`}
              >
                {highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold rounded-full bg-brand-600 text-white shadow">
                    Most Popular
                  </span>
                )}
                <h3 className="font-semibold text-lg">{plan.name}</h3>
                <p className="text-sm text-slate-600 mt-1 mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-slate-500 text-sm">/mo</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-slate-700">
                  {plan.features.map(f => (
                    <li key={f} className="flex gap-2">
                      <span className="text-brand-500">•</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`mt-8 inline-block rounded-md px-5 py-3 text-sm font-semibold text-center transition ${
                    highlight
                      ? 'bg-brand-600 text-white hover:bg-brand-700'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}