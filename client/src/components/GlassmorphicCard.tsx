import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassmorphicCard({
  children,
  className = "",
  hover = true,
  delay = 0,
}: GlassmorphicCardProps) {
  return (
    <motion.div
      className={`glassmorphic rounded-3xl p-8 ${hover ? "glassmorphic-hover" : ""} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
