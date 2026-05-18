import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface WordRevealProps {
  text: string;
  highlights?: string[];
  className?: string;
}

export const WordReveal: React.FC<WordRevealProps> = ({ text, highlights = [], className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
        const isHighlighted = highlights.some(h => word.toLowerCase().includes(h.toLowerCase()));

        return (
          <motion.span
            key={i}
            style={{ opacity }}
            className={`inline-block mr-[0.25em] transition-colors duration-200 ${isHighlighted ? "text-primary font-semibold" : "text-hero-subtitle"}`}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};
