import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  theme: "dark" | "light";
  autoplay?: boolean;
  interval?: number;
}

export function ImageCarousel({ images, theme, autoplay = false, interval = 3000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoplay && !isHovered) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, interval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay, interval, isHovered, currentIndex]);

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images Container */}
      <div className="relative aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        {/* Navigation Arrows - Only show for manual carousel or on hover */}
        {(!autoplay || isHovered) && images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full backdrop-blur-md ${
                theme === "dark"
                  ? "bg-black/50 hover:bg-black/70 text-white"
                  : "bg-white/50 hover:bg-white/70 text-black"
              } transition-all duration-300 hover:scale-110 z-10`}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full backdrop-blur-md ${
                theme === "dark"
                  ? "bg-black/50 hover:bg-black/70 text-white"
                  : "bg-white/50 hover:bg-white/70 text-black"
              } transition-all duration-300 hover:scale-110 z-10`}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Hover Indicator for Autoplay */}
        {autoplay && isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs backdrop-blur-md ${
              theme === "dark"
                ? "bg-black/50 text-white"
                : "bg-white/50 text-black"
            }`}
          >
            Paused
          </motion.div>
        )}
      </div>

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? theme === "dark"
                    ? "w-8 bg-blue-400"
                    : "w-8 bg-blue-600"
                  : theme === "dark"
                    ? "w-2 bg-white/30 hover:bg-white/50"
                    : "w-2 bg-black/30 hover:bg-black/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
