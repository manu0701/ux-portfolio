import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface HeroBackgroundProps {
  theme: "dark" | "light";
}

export function HeroBackground({ theme }: HeroBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentGreeting, setCurrentGreeting] = useState(0);

  const greetings = ["Hello", "Hola", "Ciao", "Bonjour", "Hallo", "Olá", "Привет", "你好", "こんにちは", "안녕"];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [greetings.length]);

  // Generate floating particles - REDUCED AMOUNT
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 3,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large text background - Rotating Greetings - MORE VISIBLE */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          x: mousePosition.x * 30 - 15,
          y: mousePosition.y * 30 - 15,
        }}
      >
        <motion.div
          key={currentGreeting}
          initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          exit={{ opacity: 0, scale: 1.2, rotateX: 90 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`select-none ${
            theme === "dark"
              ? "text-white/[0.08]"
              : "text-black/[0.08]"
          } transition-colors duration-500`}
          style={{
            fontSize: "clamp(120px, 25vw, 400px)",
            fontWeight: 900,
            lineHeight: 1,
          }}
        >
          {greetings[currentGreeting]}
        </motion.div>
      </motion.div>

      {/* Animated gradient orbs - LARGER AND MORE VISIBLE */}
      <motion.div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle, #3B82F6 0%, transparent 70%)"
              : "radial-gradient(circle, #60A5FA 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 80, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle, #6366F1 0%, transparent 70%)"
              : "radial-gradient(circle, #818CF8 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles/sparks - REDUCED AND LESS VISIBLE */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${
            theme === "dark" ? "bg-blue-400/40" : "bg-blue-600/40"
          } shadow-lg`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            boxShadow: theme === "dark"
              ? "0 0 15px rgba(59, 130, 246, 0.3)"
              : "0 0 15px rgba(37, 99, 235, 0.3)",
          }}
          animate={{
            y: [0, -150, 0],
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Sparkle effects - LARGER AND MORE VISIBLE */}
      <motion.div
        className="absolute top-1/4 right-1/4"
        animate={{
          scale: [0, 1.5, 0],
          rotate: [0, 180, 360],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          className={theme === "dark" ? "text-blue-400" : "text-blue-600"}
          style={{
            filter: "drop-shadow(0 0 10px currentColor)",
          }}
        >
          <path
            d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
            fill="currentColor"
            opacity="0.8"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/3"
        animate={{
          scale: [0, 1.5, 0],
          rotate: [0, -180, -360],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
          delay: 1,
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          className={theme === "dark" ? "text-purple-400" : "text-purple-600"}
          style={{
            filter: "drop-shadow(0 0 10px currentColor)",
          }}
        >
          <path
            d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
            fill="currentColor"
            opacity="0.8"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-2/3 right-1/3"
        animate={{
          scale: [0, 1.5, 0],
          rotate: [0, 180, 360],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2.5,
          delay: 2,
        }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          className={theme === "dark" ? "text-indigo-400" : "text-indigo-600"}
          style={{
            filter: "drop-shadow(0 0 10px currentColor)",
          }}
        >
          <path
            d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
            fill="currentColor"
            opacity="0.8"
          />
        </svg>
      </motion.div>

      {/* Additional sparkles */}
      <motion.div
        className="absolute top-1/2 left-1/4"
        animate={{
          scale: [0, 1.3, 0],
          rotate: [0, -180, -360],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 1.5,
          delay: 0.5,
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          className={theme === "dark" ? "text-cyan-400" : "text-cyan-600"}
          style={{
            filter: "drop-shadow(0 0 10px currentColor)",
          }}
        >
          <path
            d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
            fill="currentColor"
            opacity="0.8"
          />
        </svg>
      </motion.div>

      {/* Grid pattern overlay - MORE VISIBLE */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]"
            : "bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]"
        } bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] transition-colors duration-500`}
      />
    </div>
  );
}