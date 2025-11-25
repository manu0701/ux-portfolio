import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ScrollIndicatorProps {
  theme: "dark" | "light";
  trackRef: React.RefObject<HTMLDivElement>;
}

export function ScrollIndicator({ theme, trackRef }: ScrollIndicatorProps) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollVelocity, setScrollVelocity] = useState(0);

  // Physics-based spring animations
  const leftOpacity = useSpring(0, { stiffness: 300, damping: 30 });
  const rightOpacity = useSpring(0, { stiffness: 300, damping: 30 });
  const leftScale = useSpring(1, { stiffness: 400, damping: 25 });
  const rightScale = useSpring(1, { stiffness: 400, damping: 25 });
  const leftX = useMotionValue(0);
  const rightX = useMotionValue(0);

  // Transform for pulsing effect
  const leftPulse = useTransform(leftScale, [1, 1.2], [1, 1.2]);
  const rightPulse = useTransform(rightScale, [1, 1.2], [1, 1.2]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let lastScrollLeft = track.scrollLeft;
    let scrollTimeout: number | null = null;
    let velocityTimeout: number | null = null;

    const updateScrollState = () => {
      const scrollLeft = track.scrollLeft;
      const scrollWidth = track.scrollWidth;
      const clientWidth = track.clientWidth;

      const atStart = scrollLeft <= 5;
      const atEnd = scrollLeft + clientWidth >= scrollWidth - 5;

      const canLeft = !atStart;
      const canRight = !atEnd;

      setCanScrollLeft(canLeft);
      setCanScrollRight(canRight);

      // Animate opacity based on scroll availability
      leftOpacity.set(canLeft ? 1 : 0);
      rightOpacity.set(canRight ? 1 : 0);

      // Calculate scroll velocity
      const velocity = Math.abs(scrollLeft - lastScrollLeft);
      setScrollVelocity(velocity);
      lastScrollLeft = scrollLeft;

      // Detect if scrolling
      setIsScrolling(true);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      // Reset velocity after a delay
      if (velocityTimeout) clearTimeout(velocityTimeout);
      velocityTimeout = window.setTimeout(() => {
        setScrollVelocity(0);
      }, 200);
    };

    const handleScroll = () => {
      updateScrollState();
    };

    const handleWheel = (e: WheelEvent) => {
      // Detect if user is trying to scroll horizontally
      const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (isHorizontalScroll) {
        // Pulse animation when user scrolls
        if (e.deltaX > 0 && canScrollRight) {
          rightScale.set(1.3);
          rightX.set(5);
          setTimeout(() => {
            rightScale.set(1);
            rightX.set(0);
          }, 200);
        } else if (e.deltaX < 0 && canScrollLeft) {
          leftScale.set(1.3);
          leftX.set(-5);
          setTimeout(() => {
            leftScale.set(1);
            leftX.set(0);
          }, 200);
        }
      }
    };

    // Initial state
    updateScrollState();

    track.addEventListener("scroll", handleScroll, { passive: true });
    track.addEventListener("wheel", handleWheel, { passive: true });

    // Periodic check for scroll state changes
    const interval = setInterval(updateScrollState, 100);

    return () => {
      track.removeEventListener("scroll", handleScroll);
      track.removeEventListener("wheel", handleWheel);
      clearInterval(interval);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      if (velocityTimeout) clearTimeout(velocityTimeout);
    };
  }, [trackRef, leftOpacity, rightOpacity, leftScale, rightScale, leftX, rightX, canScrollLeft, canScrollRight]);

  // Continuous pulsing animation when scroll is available (subtle reminder)
  useEffect(() => {
    if (!canScrollLeft && !canScrollRight) return;
    if (isScrolling) return; // Don't pulse while actively scrolling

    const pulseInterval = setInterval(() => {
      if (canScrollLeft) {
        leftScale.set(1.12);
        setTimeout(() => leftScale.set(1), 800);
      }
      if (canScrollRight) {
        rightScale.set(1.12);
        setTimeout(() => rightScale.set(1), 800);
      }
    }, 3000);

    return () => clearInterval(pulseInterval);
  }, [canScrollLeft, canScrollRight, isScrolling, leftScale, rightScale]);

  if (!canScrollLeft && !canScrollRight) return null;

  return (
    <>
      {/* Left Indicator - Only show when not at start */}
      {canScrollLeft && !canScrollRight && (
        <motion.div
          className={`fixed left-16 top-1/2 -translate-y-1/2 z-40 pointer-events-none ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
          style={{
            opacity: leftOpacity,
            x: leftX,
          }}
        >
          <motion.div
            className={`glass-strong rounded-full p-4 backdrop-blur-xl flex items-center gap-3 ${
              theme === "dark"
                ? "bg-gradient-to-r from-[#00D9FF]/20 to-[#00BC7C]/20 border-[#00D9FF]/30"
                : "bg-gradient-to-r from-[#0099FF]/20 to-[#00BC7C]/20 border-[#0099FF]/30"
            }`}
            style={{
              scale: leftPulse,
            }}
            animate={{
              x: [0, -8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronLeft className="w-6 h-6 flex-shrink-0" />
            <span className={`text-xs uppercase tracking-wider ${
              theme === "dark" ? "text-white/70" : "text-black/70"
            }`}>
              Scroll
            </span>
          </motion.div>
        </motion.div>
      )}

      {/* Right Indicator - Only show when not at end */}
      {canScrollRight && !canScrollLeft && (
        <motion.div
          className={`fixed right-16 top-1/2 -translate-y-1/2 z-40 pointer-events-none ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
          style={{
            opacity: rightOpacity,
            x: rightX,
          }}
        >
          <motion.div
            className={`glass-strong rounded-full p-4 backdrop-blur-xl flex items-center gap-3 ${
              theme === "dark"
                ? "bg-gradient-to-r from-[#00D9FF]/20 to-[#00BC7C]/20 border-[#00D9FF]/30"
                : "bg-gradient-to-r from-[#0099FF]/20 to-[#00BC7C]/20 border-[#0099FF]/30"
            }`}
            style={{
              scale: rightPulse,
            }}
            animate={{
              x: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className={`text-xs uppercase tracking-wider ${
              theme === "dark" ? "text-white/70" : "text-black/70"
            }`}>
              Scroll
            </span>
            <ChevronRight className="w-6 h-6 flex-shrink-0" />
          </motion.div>
        </motion.div>
      )}

      {/* Both indicators - Show when in the middle (can scroll both ways) */}
      {canScrollLeft && canScrollRight && (
        <>
          <motion.div
            className={`fixed left-16 top-1/2 -translate-y-1/2 z-40 pointer-events-none ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
            style={{
              opacity: leftOpacity,
              x: leftX,
            }}
          >
            <motion.div
              className={`glass-strong rounded-full p-4 backdrop-blur-xl ${
                theme === "dark"
                  ? "bg-gradient-to-r from-[#00D9FF]/20 to-[#00BC7C]/20 border-[#00D9FF]/30"
                  : "bg-gradient-to-r from-[#0099FF]/20 to-[#00BC7C]/20 border-[#0099FF]/30"
              }`}
              style={{
                scale: leftPulse,
              }}
              animate={{
                x: [0, -8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.div>
          </motion.div>

          <motion.div
            className={`fixed right-16 top-1/2 -translate-y-1/2 z-40 pointer-events-none ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
            style={{
              opacity: rightOpacity,
              x: rightX,
            }}
          >
            <motion.div
              className={`glass-strong rounded-full p-4 backdrop-blur-xl ${
                theme === "dark"
                  ? "bg-gradient-to-r from-[#00D9FF]/20 to-[#00BC7C]/20 border-[#00D9FF]/30"
                  : "bg-gradient-to-r from-[#0099FF]/20 to-[#00BC7C]/20 border-[#0099FF]/30"
              }`}
              style={{
                scale: rightPulse,
              }}
              animate={{
                x: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </>
      )}

      {/* Center indicator showing scroll intensity needed */}
      {(canScrollLeft || canScrollRight) && scrollVelocity < 10 && !isScrolling && (
        <motion.div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <motion.div
            className={`glass px-6 py-3 rounded-full backdrop-blur-xl ${
              theme === "dark" 
                ? "bg-gradient-to-r from-[#00D9FF]/10 to-[#00BC7C]/10 border-[#00D9FF]/20 text-white/80" 
                : "bg-gradient-to-r from-[#0099FF]/10 to-[#00BC7C]/10 border-[#0099FF]/20 text-black/80"
            }`}
            animate={{
              scale: [1, 1.08, 1],
              y: [0, -4, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20M2 12h20" />
                </svg>
              </motion.div>
              <span className="text-xs uppercase tracking-wider font-medium">
                Scroll harder to navigate
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

