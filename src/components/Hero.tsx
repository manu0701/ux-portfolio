import { ArrowRight, MapPin, Download } from "lucide-react";
import { motion } from "motion/react";
import { HeroBackground } from "./HeroBackground";

interface HeroProps {
  theme: "dark" | "light";
  language: "en" | "es";
  onNavigateToWork?: () => void;
}

export function Hero({ theme, language, onNavigateToWork }: HeroProps) {
  const content = {
    en: {
      role: "Sr. UX/UI Designer with AI Expertise",
      headline: "Crafting intuitive digital experiences that solve real problems",
      description: "I'm a Sr. UX/UI Designer with 8+ years of experience transforming complex challenges into elegant, user-centered solutions. Passionate about AI-driven design and creating products that make a meaningful impact.",
      cta1: "My Work",
      cta2: "Download Resume",
      location: "Buenos Aires, Argentina",
      availability: "Available for hiring"
    },
    es: {
      role: "Diseñador UX/UI Sr. con Experiencia en IA",
      headline: "Creando experiencias digitales intuitivas que resuelven problemas reales",
      description: "Soy un Diseñador UX/UI Sr. con más de 8 años de experiencia transformando desafíos complejos en soluciones elegantes centradas en el usuario. Apasionado por el diseño impulsado por IA y la creación de productos que generan un impacto significativo.",
      cta1: "Mi Trabajo",
      cta2: "Descargar CV",
      location: "Buenos Aires, Argentina",
      availability: "Disponible para contratación"
    }
  };

  const t = content[language];

  return (
    <section className="pt-24 pb-16 px-6 lg:px-20 relative overflow-hidden flex items-center" id="home" style={{ minHeight: '85vh' }}>
      {/* Animated Background - mantiene el "Hola" */}
      <HeroBackground theme={theme} />
      
      {/* Gradient overlay to blend with next section */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 pointer-events-none ${ 
        theme === "dark" 
          ? "bg-gradient-to-b from-transparent to-[#0A0A0F]" 
          : "bg-gradient-to-b from-transparent to-white"
      } transition-colors duration-500`} />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Label with glass effect */}
        <motion.div 
          className="inline-block mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className={`px-4 py-2 rounded-full glass border uppercase tracking-wider text-xs transition-colors duration-500 ${
            theme === "dark" 
              ? "bg-[#00D9FF]/10 border-[#00D9FF]/20 text-[#00D9FF]" 
              : "bg-[#9D4EDD]/10 border-[#9D4EDD]/20 text-[#9D4EDD]"
          }`}>
            {t.role}
          </span>
        </motion.div>

        {/* Headline with gradient text */}
        <motion.h1 
          className="mb-8 max-w-4xl gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {t.headline}
        </motion.h1>

        {/* Description */}
        <motion.p 
          className={`mb-10 max-w-2xl text-lg leading-relaxed transition-colors duration-500 ${
            theme === "dark" ? "text-white/70" : "text-black/70"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {t.description}
        </motion.p>

        {/* CTA Group with liquid glass buttons */}
        <motion.div 
          className="flex flex-wrap gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <motion.button
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateToWork) {
                onNavigateToWork();
              }
            }}
            className={`px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-2 relative overflow-hidden ${
              theme === "dark" 
                ? "bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD] text-white shadow-[0_8px_32px_rgba(0,217,255,0.4)]" 
                : "bg-gradient-to-r from-[#0099FF] to-[#9D4EDD] text-white shadow-[0_8px_32px_rgba(0,153,255,0.4)]"
            }`}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            initial={{ scale: 1 }}
            animate={{ 
              boxShadow: theme === "dark" 
                ? "0 8px 32px rgba(0,217,255,0.4)" 
                : "0 8px 32px rgba(0,153,255,0.4)"
            }}
          >
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {t.cta1}
            </motion.span>
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 4, rotate: -45 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
            {/* Ripple effect on click */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-white/20"
              initial={{ scale: 0, opacity: 0.5 }}
              whileTap={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
          <button className={`glass px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-2 ${
            theme === "dark" ? "text-white hover:bg-white/15" : "text-black hover:bg-black/15"
          }`}>
            <Download className="w-5 h-5" />
            {t.cta2}
          </button>
        </motion.div>

        {/* Metadata with glass cards */}
        <motion.div 
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <div className={`glass px-4 py-2 rounded-xl flex items-center gap-2 text-sm ${
            theme === "dark" ? "text-white/70" : "text-black/70"
          }`}>
            <MapPin className="w-4 h-4" />
            <span>{t.location}</span>
          </div>
          <div className={`glass px-4 py-2 rounded-xl flex items-center gap-2 text-sm ${
            theme === "dark" ? "text-white/70" : "text-black/70"
          }`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{t.availability}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}