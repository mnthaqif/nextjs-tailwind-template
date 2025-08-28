'use client';

import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

export default function MotionFadeIn({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}