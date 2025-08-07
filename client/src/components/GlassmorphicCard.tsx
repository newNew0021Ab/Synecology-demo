
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
  const baseClasses = "glassmorphic rounded-2xl p-8 enhanced-shadow prevent-flash";
  const hoverClasses = hover ? "glassmorphic-hover gpu-optimized" : "";

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${className} loaded card-stable visible`}
      style={{
        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(46, 139, 87, 0.2)",
        transform: "translateZ(0)",
        willChange: "transform, opacity",
        contain: "layout style paint"
      }}
    >
      {children}
    </div>
  );
}
