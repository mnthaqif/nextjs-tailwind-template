"use client";

import { motion, type MotionProps } from "framer-motion";
import { PropsWithChildren } from "react";

interface FadeInProps extends MotionProps {
  delay?: number;
  y?: number;
}

export function FadeIn({
  children,
  delay = 0,
  y = 24,
  ...rest
}: PropsWithChildren<FadeInProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}