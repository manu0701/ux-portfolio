import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface CustomCursorProps {
  theme: "dark" | "light";
}

export function CustomCursor({ theme }: CustomCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState("rgba(0, 217, 255, 0.5)");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Detect element under cursor and change color
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const computedStyle = window.getComputedStyle(element);
        const bgColor = computedStyle.backgroundColor;

        // Change cursor color based on background and theme
        if (element.classList.contains("glass") ||
          element.classList.contains("glass-strong") ||
          element.closest(".glass") ||
          element.closest(".glass-strong")) {
          setCursorColor(theme === "dark" ? "rgba(0, 217, 255, 0.8)" : "rgba(0, 188, 124, 0.9)");
        } else if (element.tagName === "BUTTON" ||
          element.tagName === "A" ||
          element.closest("button") ||
          element.closest("a")) {
          setCursorColor(theme === "dark" ? "rgba(255, 27, 141, 0.8)" : "rgba(255, 27, 141, 0.9)");
        } else if (bgColor.includes("rgb(0, 217, 255)") ||
          bgColor.includes("rgb(0, 188, 124)")) {
          setCursorColor("rgba(255, 255, 255, 0.9)");
        } else {
          setCursorColor(theme === "dark"
            ? "rgba(0, 217, 255, 0.6)"
            : "rgba(0, 188, 124, 0.8)");
        }
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [theme]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] ${theme === "dark" ? "mix-blend-screen" : ""}`}
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 25,
          mass: 0.3,
        }}
        style={{
          width: "20px",
          height: "20px",
        }}
      >
        <div
          className="w-full h-full rounded-full backdrop-blur-sm transition-all duration-300"
          style={{
            background: cursorColor,
            boxShadow: theme === "dark"
              ? `0 0 20px ${cursorColor}, 0 0 40px ${cursorColor}`
              : `0 0 15px ${cursorColor}, 0 0 30px ${cursorColor}`,
            border: theme === "light" ? "2px solid rgba(0, 188, 124, 0.3)" : "none",
          }}
        />
      </motion.div>

      {/* Trail cursor */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] ${theme === "dark" ? "mix-blend-screen" : ""}`}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 18,
          mass: 0.6,
        }}
        style={{
          width: "8px",
          height: "8px",
        }}
      >
        <div
          className="w-full h-full rounded-full transition-all duration-500"
          style={{
            background: cursorColor,
            opacity: theme === "dark" ? 0.6 : 0.8,
          }}
        />
      </motion.div>
    </>
  );
}