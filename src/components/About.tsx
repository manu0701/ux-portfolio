import { motion } from "motion/react";
import { SectionBackground } from "./SectionBackground";
import { WaveDivider } from "./WaveDivider";

interface AboutProps {
  theme: "dark" | "light";
  language: "en" | "es";
}

export function About({ theme, language }: AboutProps) {
  const content = {
    en: {
      title: "About Me",
      subtitle: "I've spent 8+ years designing digital products across fintech, logistics, construction, and govtech. I use AI tools like Lovable, Cursor, and Figma Make to prototype faster so I can focus on what matters: solving real user problems.",
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
    },
    es: {
      title: "Acerca de Mí",
      subtitle: "Llevo más de 8 años diseñando productos digitales en fintech, logística, construcción y govtech. Uso herramientas de IA como Lovable, Cursor y Figma Make para prototipar más rápido y enfocarme en lo que importa: resolver problemas reales de usuarios.",
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
    }
  };

  const t = content[language];

  return (
    <section className={`py-24 px-6 lg:px-20 relative overflow-hidden transition-colors duration-500`} id="about">
      {/* Wave Divider at top */}
      <WaveDivider theme={theme} position="top" variant="subtle" />
      
      {/* Gradient overlay to blend with previous section */}
      <div className={`absolute top-0 left-0 right-0 h-32 pointer-events-none ${ 
        theme === "dark" 
          ? "bg-gradient-to-t from-transparent to-[#0A0A0F]" 
          : "bg-gradient-to-t from-transparent to-white"
      } transition-colors duration-500 z-20`} />
      
      {/* Animated Background */}
      <SectionBackground theme={theme} variant="default" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="mb-4 gradient-text-cyan-purple">{t.title}</h2>
          <p className={`max-w-3xl text-lg transition-colors duration-500 ${
            theme === "dark" ? "text-white/70" : "text-black/70"
          }`}>
            {t.subtitle}
          </p>
        </motion.div>

        {/* Highlights Grid - Liquid Glass Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {t.highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className={`glass-strong group relative p-8 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer hover:-translate-y-2 ${
                theme === "dark"
                  ? "hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,217,255,0.3)]"
                  : "hover:border-black/20 hover:shadow-[0_20px_60px_rgba(0,188,124,0.3)]"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              {/* Gradient accent line */}
              <div className={`w-12 h-1 rounded-full mb-4 ${
                index === 0 ? "bg-gradient-to-r from-[#00D9FF] to-[#00BC7C]" :
                index === 1 ? "bg-gradient-to-r from-[#00BC7C] to-[#FF1B8D]" :
                "bg-gradient-to-r from-[#FF1B8D] to-[#00FF94]"
              }`} />
              
              <div className="relative z-10">
                <h3 className="mb-3">{highlight.title}</h3>
                <p className={`${
                  theme === "dark" ? "text-white/70" : "text-black/70"
                } transition-colors duration-500`}>
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="mb-6 gradient-text-purple-pink">{t.skillsTitle}</h3>
          <div className="flex flex-wrap gap-3">
            {t.skills.map((skill, index) => (
              <motion.span
                key={index}
                className={`glass px-5 py-2 rounded-full transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer hover:-translate-y-1 ${ 
                  theme === "dark"
                    ? "hover:bg-white/15 hover:border-white/20"
                    : "hover:bg-black/15 hover:border-black/20"
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
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