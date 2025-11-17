import { X, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { ImageCarousel } from "./ImageCarousel";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: "dark" | "light";
  language: "en" | "es";
  study: {
    title: string;
    company: string;
    description: string;
    fullDescription?: string;
    challenge?: string;
    solution?: string;
    results?: string[];
    metrics: { label: string; value: string }[];
    tags: string[];
    color: string;
    image?: string;
    processImages?: string[];
    finalImages?: string[];
  };
}

export function CaseStudyModal({ isOpen, onClose, theme, language, study }: CaseStudyModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const content = {
    en: {
      challenge: "The Challenge",
      solution: "The Solution",
      results: "Results & Impact",
      keyMetrics: "Key Metrics",
      close: "Close",
      processImages: "Design Process",
      finalProduct: "Final Product",
    },
    es: {
      challenge: "El Desafío",
      solution: "La Solución",
      results: "Resultados e Impacto",
      keyMetrics: "Métricas Clave",
      close: "Cerrar",
      processImages: "Proceso de Diseño",
      finalProduct: "Producto Final",
    },
  };

  const t = content[language];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <div className="min-h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
              <motion.div
                className={`relative w-full max-w-4xl rounded-3xl ${
                  theme === "dark"
                    ? "bg-black/95 border-white/10"
                    : "bg-white/95 border-black/10"
                } border backdrop-blur-xl shadow-2xl overflow-hidden`}
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className={`absolute top-6 right-6 z-10 p-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 ${
                    theme === "dark"
                      ? "bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/40"
                      : "bg-black/10 hover:bg-black/20 text-black border-black/20 hover:border-black/40"
                  }`}
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Content */}
                <div className="p-8 sm:p-12">
                  {/* Header */}
                  <div className="mb-8">
                    <div className={`w-16 h-1 ${study.color} rounded-full mb-6`} />
                    <h2 className="mb-3">{study.title}</h2>
                    <p
                      className={`${
                        theme === "dark" ? "text-blue-400" : "text-blue-600"
                      } flex items-center gap-2`}
                    >
                      {study.company}
                      <ArrowUpRight className="w-4 h-4" />
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-4 py-2 rounded-full ${
                          theme === "dark"
                            ? "bg-white/5 text-gray-400 border border-white/10"
                            : "bg-black/5 text-gray-600 border border-black/10"
                        } text-sm uppercase tracking-wider`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Full Description */}
                  {study.fullDescription && (
                    <p
                      className={`${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      } mb-8 text-lg leading-relaxed`}
                    >
                      {study.fullDescription}
                    </p>
                  )}

                  {/* Challenge */}
                  {study.challenge && (
                    <div className="mb-8">
                      <h3 className="mb-3">{t.challenge}</h3>
                      <p
                        className={`${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        } leading-relaxed`}
                      >
                        {study.challenge}
                      </p>
                    </div>
                  )}

                  {/* Solution */}
                  {study.solution && (
                    <div className="mb-8">
                      <h3 className="mb-3">{t.solution}</h3>
                      <p
                        className={`${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        } leading-relaxed`}
                      >
                        {study.solution}
                      </p>
                    </div>
                  )}

                  {/* Process Images Carousel - Manual */}
                  {study.processImages && study.processImages.length > 0 && (
                    <div className="mb-8">
                      <h3 className="mb-4">{t.processImages}</h3>
                      <ImageCarousel images={study.processImages} theme={theme} autoplay={false} />
                    </div>
                  )}

                  {/* Key Metrics */}
                  <div className="mb-8">
                    <h3 className="mb-6">{t.keyMetrics}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {study.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className={`text-center p-6 rounded-2xl ${
                            theme === "dark" ? "bg-white/5" : "bg-black/5"
                          }`}
                        >
                          <div
                            className={`text-3xl mb-2 ${
                              theme === "dark" ? "text-green-400" : "text-green-600"
                            }`}
                          >
                            {metric.value}
                          </div>
                          <div
                            className={`text-sm ${
                              theme === "dark" ? "text-gray-500" : "text-gray-600"
                            } uppercase tracking-wide`}
                          >
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  {study.results && study.results.length > 0 && (
                    <div className="mb-8">
                      <h3 className="mb-4">{t.results}</h3>
                      <div className="space-y-3">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2
                              className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                                theme === "dark" ? "text-green-400" : "text-green-600"
                              }`}
                            />
                            <p
                              className={`${
                                theme === "dark" ? "text-gray-400" : "text-gray-600"
                              }`}
                            >
                              {result}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Final Product Images Carousel - Autoplay */}
                  {study.finalImages && study.finalImages.length > 0 && (
                    <div className="mb-8">
                      <h3 className="mb-4">{t.finalProduct}</h3>
                      <ImageCarousel images={study.finalImages} theme={theme} autoplay={true} interval={4000} />
                    </div>
                  )}

                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className={`w-full py-4 rounded-xl ${
                      theme === "dark"
                        ? "bg-white text-black hover:bg-gray-100"
                        : "bg-black text-white hover:bg-gray-800"
                    } transition-all duration-300 hover:scale-[1.02]`}
                  >
                    {t.close}
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}