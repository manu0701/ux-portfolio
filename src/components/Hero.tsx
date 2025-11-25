import React from "react";
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
      description:
        "I'm a Sr. UX/UI Designer with 8+ years of experience transforming complex challenges into elegant, user-centered solutions. Passionate about AI-driven design and creating products that make a meaningful impact.",
      highlights: [
        {
          title: "AI-Powered Design Workflow",
          description: "I use AI tools for wireframes and prototypes so I can focus on research and testing.",
        },
        {
          title: "End-to-End Product Design",
          description: "From user interviews to final handoff. I know what works at each step.",
        },
        {
          title: "Accessibility & Compliance",
          description: "I worked on government platforms where WCAG compliance is required.",
        },
      ],
      skillsTitle: "Core Skills",
      skills: [
        "User Research & Testing",
        "Interaction Design",
        "AI-Assisted Prototyping",
        "Design Systems",
        "Wireframing & Information Architecture",
        "Accessibility (WCAG)",
        "Figma & Framer",
        "Frontend Development (HTML/CSS/JS)",
        "Cross-Functional Collaboration",
        "Fintech & GovTech UX",
        "Real-Time Platforms",
        "Notion & Documentation",
      ],
      cta1: "My Work",
      cta2: "Download Resume",
      location: "Buenos Aires, Argentina",
      availability: "Available for hiring",
    },
    es: {
      role: "Diseñador UX/UI Sr. con Experiencia en IA",
      headline: "Creando experiencias digitales intuitivas que resuelven problemas reales",
      description:
        "Soy un Diseñador UX/UI Sr. con más de 8 años de experiencia transformando desafíos complejos en soluciones elegantes centradas en el usuario. Apasionado por el diseño impulsado por IA y la creación de productos que generan un impacto significativo.",
      highlights: [
        {
          title: "Flujo de Trabajo con IA",
          description: "Uso IA para wireframes y prototipos así dedico más tiempo a investigar y testear.",
        },
        {
          title: "Diseño de Producto End-to-End",
          description: "Desde entrevistas con usuarios hasta entrega final. Sé qué funciona en cada paso.",
        },
        {
          title: "Accesibilidad y Cumplimiento",
          description: "Trabajé en plataformas de gobierno donde cumplir WCAG es obligatorio.",
        },
      ],
      skillsTitle: "Habilidades Principales",
      skills: [
        "Investigación y Testing de Usuarios",
        "Diseño de Interacción",
        "Prototipado Asistido por IA",
        "Sistemas de Diseño",
        "Wireframing y Arquitectura de Información",
        "Accesibilidad (WCAG)",
        "Figma y Framer",
        "Desarrollo Frontend (HTML/CSS/JS)",
        "Colaboración Multifuncional",
        "UX para Fintech y GovTech",
        "Plataformas en Tiempo Real",
        "Notion y Documentación",
      ],
      cta1: "Mi Trabajo",
      cta2: "Descargar CV",
      location: "Buenos Aires, Argentina",
      availability: "Disponible para contratación",
    },
  };

  const t = content[language];

  return (
    <section className="pt-24 pb-16 relative overflow-hidden flex flex-col justify-center" id="home" style={{ minHeight: '85vh' }}>
      {/* Animated Background - mantiene el "Hola" */}
      <HeroBackground theme={theme} />

      {/* Gradient overlay to blend with next section */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 pointer-events-none ${theme === "dark"
        ? "bg-gradient-to-b from-transparent to-[#0A0A0F]"
        : "bg-gradient-to-b from-transparent to-white"
        } transition-colors duration-500`} />

      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10 w-full">
        {/* Label with glass effect */}
        <motion.div
          className="inline-flex flex-wrap items-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className={`px-4 py-2 rounded-full glass border uppercase tracking-wider text-xs transition-colors duration-500 ${theme === "dark"
            ? "bg-[#00D9FF]/10 border-[#00D9FF]/20 text-[#00D9FF]"
            : "bg-[#00BC7C]/10 border-[#00BC7C]/20 text-[#00BC7C]"
            }`}>
            {t.role}
          </span>
          <div className="flex flex-wrap gap-3 text-sm">
            <div className={`glass px-4 py-2 rounded-xl flex items-center gap-2 ${theme === "dark" ? "text-white/70" : "text-black/70"
              }`}>
              <MapPin className="w-4 h-4" />
              <span>{t.location}</span>
            </div>
            <div className={`glass px-4 py-2 rounded-xl flex items-center gap-2 ${theme === "dark" ? "text-white/70" : "text-black/70"
              }`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t.availability}</span>
            </div>
          </div>
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
          className={`mb-10 max-w-5xl text-lg leading-relaxed transition-colors duration-500 ${theme === "dark" ? "text-white/70" : "text-black/70"
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
            className={`px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-2 relative overflow-hidden ${theme === "dark"
              ? "bg-gradient-to-r from-[#00D9FF] to-[#00BC7C] text-white shadow-[0_8px_32px_rgba(0,217,255,0.4)]"
              : "bg-gradient-to-r from-[#0099FF] to-[#00BC7C] text-white shadow-[0_8px_32px_rgba(0,153,255,0.4)]"
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
          <button className={`glass px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-2 ${theme === "dark" ? "text-white hover:bg-white/15" : "text-black hover:bg-black/15"
            }`}>
            <Download className="w-5 h-5" />
            {t.cta2}
          </button>
        </motion.div>

        {/* Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t.highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              className={`glass-strong group relative p-6 rounded-2xl overflow-hidden transition-all duration-500 ${theme === "dark"
                ? "hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,217,255,0.3)]"
                : "hover:border-black/20 hover:shadow-[0_20px_60px_rgba(0,188,124,0.3)]"
                }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
            >
              <div
                className={`w-12 h-1 rounded-full mb-4 ${index === 0
                  ? "bg-gradient-to-r from-[#00D9FF] to-[#00BC7C]"
                  : index === 1
                    ? "bg-gradient-to-r from-[#00BC7C] to-[#FF1B8D]"
                    : "bg-gradient-to-r from-[#FF1B8D] to-[#00FF94]"
                  }`}
              />
              <h3 className="mb-3">{highlight.title}</h3>
              <p className={theme === "dark" ? "text-white/70" : "text-black/70"}>{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="mb-6 gradient-text-purple-pink">{t.skillsTitle}</h3>
          <div className="flex flex-wrap gap-3">
            {t.skills.map((skill, index) => (
              <motion.span
                key={skill}
                className={`glass px-5 py-2 rounded-full transition-all duration-300 text-sm uppercase tracking-wide ${theme === "dark"
                  ? "hover:bg-white/15 hover:border-white/20"
                  : "hover:bg-black/15 hover:border-black/20"
                  }`}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}