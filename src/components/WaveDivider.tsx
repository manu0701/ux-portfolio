import { motion } from "motion/react";

interface WaveDividerProps {
  theme: "dark" | "light";
  position?: "top" | "bottom";
  variant?: "default" | "gradient" | "subtle";
}

export function WaveDivider({ theme, position = "bottom", variant = "default" }: WaveDividerProps) {
  const getColors = () => {
    if (variant === "gradient") {
      return theme === "dark"
        ? "from-blue-900/20 via-purple-900/20 to-transparent"
        : "from-blue-100/40 via-purple-100/40 to-transparent";
    }
    if (variant === "subtle") {
      return theme === "dark"
        ? "from-gray-900/40 to-transparent"
        : "from-gray-100/60 to-transparent";
    }
    return theme === "dark"
      ? "from-gray-900/60 to-transparent"
      : "from-gray-100/80 to-transparent";
  };

  return (
    <div
      className={`absolute ${position === "top" ? "top-0" : "bottom-0"} left-0 right-0 w-full overflow-hidden pointer-events-none ${
        position === "top" ? "rotate-180" : ""
      }`}
      style={{ height: "200px" }}
    >
      <motion.svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        initial={{ opacity: 0, y: position === "top" ? -20 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <defs>
          <linearGradient id={`gradient-${position}-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              className={theme === "dark" ? "text-gray-900/60" : "text-gray-100/80"}
              stopColor="currentColor"
            />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {/* Wave path */}
        <motion.path
          d="M0,100 C360,150 720,50 1080,100 C1260,125 1350,100 1440,100 L1440,200 L0,200 Z"
          fill={`url(#gradient-${position}-${variant})`}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Animated wave overlay */}
        <motion.path
          d="M0,120 C360,170 720,70 1080,120 C1260,145 1350,120 1440,120 L1440,200 L0,200 Z"
          className={theme === "dark" ? "fill-blue-500/5" : "fill-blue-500/10"}
          animate={{
            d: [
              "M0,120 C360,170 720,70 1080,120 C1260,145 1350,120 1440,120 L1440,200 L0,200 Z",
              "M0,110 C360,160 720,80 1080,130 C1260,155 1350,130 1440,130 L1440,200 L0,200 Z",
              "M0,120 C360,170 720,70 1080,120 C1260,145 1350,120 1440,120 L1440,200 L0,200 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  );
}
