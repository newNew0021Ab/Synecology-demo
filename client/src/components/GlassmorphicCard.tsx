
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassmorphicCard({
  children,
  className = "",
  hover = true,
}: GlassmorphicCardProps) {
  const baseClasses = "glassmorphic rounded-2xl p-8 enhanced-shadow";
  const hoverClasses = hover ? "glassmorphic-hover" : "";

  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(46, 139, 87, 0.2)",
      }}
    >
      {children}
    </motion.div>
  );
}
