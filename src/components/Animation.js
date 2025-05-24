import React from 'react';
import { motion } from 'framer-motion';

export const FadeInAnimation = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export const SlideInAnimation = ({ children, direction = 'left', delay = 0 }) => {
  const xValue = direction === 'left' ? -50 : 50;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: xValue }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export const ScaleAnimation = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};