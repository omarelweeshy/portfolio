"use client";

import { useEffect, useRef, ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export default function SectionWrapper({
  children,
  className = "",
  delay = 0,
  id,
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      id={id}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.9,
            delay,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
