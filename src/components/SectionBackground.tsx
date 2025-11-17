import { motion } from "motion/react";

interface SectionBackgroundProps {
  theme: "dark" | "light";
  variant?: "default" | "alternate";
}

export function SectionBackground({ theme, variant = "default" }: SectionBackgroundProps) {
  // Generate floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 3,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <motion.div
        className={`absolute ${variant === "default" ? "top-20 right-20" : "bottom-20 left-20"} w-[400px] h-[400px] rounded-full blur-3xl opacity-30`}
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle, #3B82F6 0%, transparent 70%)"
              : "radial-gradient(circle, #60A5FA 0%, transparent 70%)",
        }}
        animate={{
          x: variant === "default" ? [0, -50, 0] : [0, 50, 0],
          y: variant === "default" ? [0, 50, 0] : [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute ${variant === "default" ? "bottom-20 left-20" : "top-20 right-20"} w-[350px] h-[350px] rounded-full blur-3xl opacity-30`}
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle, #8B5CF6 0%, transparent 70%)"
              : "radial-gradient(circle, #A78BFA 0%, transparent 70%)",
        }}
        animate={{
          x: variant === "default" ? [0, 50, 0] : [0, -50, 0],
          y: variant === "default" ? [0, -50, 0] : [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${
            theme === "dark" ? "bg-blue-400/50" : "bg-blue-600/50"
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            boxShadow: theme === "dark" 
              ? "0 0 15px rgba(59, 130, 246, 0.4)"
              : "0 0 15px rgba(37, 99, 235, 0.4)",
          }}
          animate={{
            y: [0, -120, 0],
            opacity: [0, 0.7, 0],
            scale: [0, 1.1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Sparkle effects */}
      <motion.div
        className="absolute top-1/4 right-1/3"
        animate={{
          scale: [0, 1.4, 0],
          rotate: [0, 180, 360],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          className={theme === "dark" ? "text-blue-400" : "text-blue-600"}
          style={{
            filter: "drop-shadow(0 0 8px currentColor)",
          }}
        >
          <path
            d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
            fill="currentColor"
            opacity="0.7"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/4"
        animate={{
          scale: [0, 1.4, 0],
          rotate: [0, -180, -360],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatDelay: 2,
          delay: 1.2,
        }}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          className={theme === "dark" ? "text-purple-400" : "text-purple-600"}
          style={{
            filter: "drop-shadow(0 0 8px currentColor)",
          }}
        >
          <path
            d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
            fill="currentColor"
            opacity="0.7"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-1/4"
        animate={{
          scale: [0, 1.4, 0],
          rotate: [0, 180, 360],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatDelay: 1.8,
          delay: 0.8,
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          className={theme === "dark" ? "text-indigo-400" : "text-indigo-600"}
          style={{
            filter: "drop-shadow(0 0 8px currentColor)",
          }}
        >
          <path
            d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
            fill="currentColor"
            opacity="0.7"
          />
        </svg>
      </motion.div>
    </div>
  );
}
