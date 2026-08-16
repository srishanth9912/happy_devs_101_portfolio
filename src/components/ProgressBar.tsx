import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      id="scroll-progress"
      style={{ scaleX }}
    />
  );
};
