import { Variants } from "motion/react";

export const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" }
  },
});

export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};
