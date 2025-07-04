import { motion } from "framer-motion";

interface OrganicBlobProps {
  className?: string;
  delay?: number;
  size?: "sm" | "md" | "lg";
}

export default function OrganicBlob({ className = "", delay = 0, size = "md" }: OrganicBlobProps) {
  const sizeClasses = {
    sm: "w-48 h-48",
    md: "w-64 h-64",
    lg: "w-96 h-96",
  };

  return (
    <motion.div
      className={`organic-blob ${sizeClasses[size]} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.2, scale: 1 }}
      transition={{ delay, duration: 1, ease: "easeOut" }}
      style={{ animationDelay: `${delay}s` }}
    />
  );
}
