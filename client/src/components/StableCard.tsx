import React from 'react';
import { motion } from 'framer-motion';
import GlassmorphicCard from './GlassmorphicCard';

interface StableCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const StableCard: React.FC<StableCardProps> = ({
  children,
  className = "",
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.6,
        ease: "easeOut"
      }}
      viewport={{ once: true, amount: 0.2 }}
      className={`card-stable visible ${className}`}
    >
      <GlassmorphicCard>
        {children}
      </GlassmorphicCard>
    </motion.div>
  );
};