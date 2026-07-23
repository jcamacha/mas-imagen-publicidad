"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTitleProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export default function AnimatedTitle({
  children,
  className,
  as: Tag = "h1",
}: AnimatedTitleProps) {
  const text = typeof children === "string" ? children : "";
  const words = text.split(/(\s+)/).filter(Boolean);

  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.h1;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      animate="visible"
    >
      {words.length > 0
        ? words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.06,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                {word === " " ? "\u00A0" : word}
              </motion.span>
            </span>
          ))
        : children}
    </MotionTag>
  );
}
