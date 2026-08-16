import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const PageLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1800;
    const step = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        requestAnimationFrame(step);
      } else {
        setTimeout(() => setLoading(false), 300);
      }
    };
    requestAnimationFrame(step);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loader-screen"
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.span
            className="font-heading text-5xl sm:text-7xl font-bold tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#CCFF00]">S</span>
            <span className="text-[#FAFAFA]">RISHANTH</span>
          </motion.span>

          <div className="loader-bar">
            <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
          </div>

          <motion.span
            className="font-mono text-xs text-[#555] tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            LOADING {progress}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
