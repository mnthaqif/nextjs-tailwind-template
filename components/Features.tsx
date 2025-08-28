'use client';

import { motion } from 'framer-motion';
import { FaChartLine, FaLock, FaBolt, FaCloud } from 'react-icons/fa';

const features = [
  {
    icon: <FaChartLine />,
    title: 'Analytics Dashboard',
    desc: 'Real-time KPIs and growth metrics to guide smart decisions.'
  },
  {
    icon: <FaLock />,
    title: 'Enterprise Security',
    desc: 'Robust encryption & role-based access controls.'
  },
  {
    icon: <FaBolt />,
    title: 'Fast Performance',
    desc: 'Optimized infrastructure for minimal latency globally.'
  },
  {
    icon: <FaCloud />,
    title: 'Scalable Cloud',
    desc: 'Elastic scaling that adapts to your usage patterns.'
  }
];

export default function Features() {
  return (
    <section id="features" className="section-pad bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Powerful features to accelerate growth
          </h2>
          <p className="mt-4 text-slate-600">
            Every tool you need, seamlessly integrated, beautifully orchestrated.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 rounded-xl bg-white shadow-sm border border-slate-200 hover:shadow-md transition"
            >
              <div className="text-brand-600 text-2xl mb-4">{f.icon}</div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}