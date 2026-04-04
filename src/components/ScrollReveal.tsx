import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const ScrollReveal = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ 
        duration: 0.7, 
        delay: delay,
        ease: [0.22, 1, 0.36, 1] 
      }}
      style={{ display: 'contents' }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
