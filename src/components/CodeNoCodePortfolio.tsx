import { motion } from "motion/react";
import { ArrowUpRight, ArrowLeft, ExternalLink } from "lucide-react";
import { SectionBackground } from "./SectionBackground";

interface CodeNoCodePortfolioProps {
  theme: "dark" | "light";
  language: "en" | "es";
  onBack: () => void;
}

export function CodeNoCodePortfolio({ theme, language, onBack }: CodeNoCodePortfolioProps) {
  const content = {
    en: {
      back: "Back to Portfolio",
      title: "Code / No-Code Portfolio",
      subtitle: "Rapid prototyping and AI-powered projects built with cutting-edge tools",
      viewProject: "View Project",
      viewLive: "View Live",
      viewCode: "View Code",
      projects: [
        {
          title: "Real-Time Quoting SaaS",
          tool: "Figma Make",
          description: "Built a SaaS platform where sales agents can quote new buildings for clients in real-time, with dynamic pricing and instant proposals.",
          tags: ["Design System", "Prototyping", "SaaS"],
          color: "bg-blue-500",
          liveUrl: "",
          codeUrl: "",
        },
        {
          title: "AI Resume Improvement Tool",
          tool: "Lovable + Cursor",
          description: "Created a tool that consumes the OpenAI API to analyze uploaded resumes and detect improvements, providing actionable feedback instantly.",
          tags: ["Design System", "AI", "Prototyping", "Supabase"],
          color: "bg-indigo-500",
          liveUrl: "",
          codeUrl: "",
        },
        {
          title: "Senillosa Homes Website Redesign",
          tool: "Figma Make",
          description: "Complete redesign of Senillosa Homes, a temporary apartment rental portal, focusing on user experience and conversion optimization.",
          tags: ["Design System", "Landing Page", "Redesign"],
          color: "bg-purple-500",
          liveUrl: "",
          codeUrl: "",
        },
        {
          title: "E-Commerce Landing Page",
          tool: "Claude + Cursor",
          description: "Pair-programmed with Claude AI to build a high-converting e-commerce landing page with animations and optimized performance.",
          tags: ["Landing Page", "E-Commerce", "Animation"],
          color: "bg-pink-500",
          liveUrl: "",
          codeUrl: "",
        },
        {
          title: "Portfolio Generator Tool",
          tool: "v0 + Figma Make",
          description: "Created an AI-powered portfolio generator that takes user input and generates a fully customized portfolio website in minutes.",
          tags: ["Generator", "AI", "No-Code"],
          color: "bg-green-500",
          liveUrl: "",
          codeUrl: "",
        },
        {
          title: "Fintech Mobile App Prototype",
          tool: "Lovable + Claude",
          description: "Rapid prototype of a fintech mobile app with account management, transaction history, and investment tracking features.",
          tags: ["Mobile", "Fintech", "Prototype"],
          color: "bg-cyan-500",
          liveUrl: "",
          codeUrl: "",
        },
      ],
    },
    es: {
      back: "Volver al Portfolio",
      title: "Portfolio Code / No-Code",
      subtitle: "Prototipado rápido y proyectos impulsados por IA construidos con herramientas de vanguardia",
      viewProject: "Ver Proyecto",
      viewLive: "Ver en Vivo",
      viewCode: "Ver Código",
      projects: [
        {
          title: "SaaS de Cotización en Tiempo Real",
          tool: "Figma Make",
          description: "Construí una plataforma SaaS donde los agentes de venta pueden cotizar edificios nuevos para clientes en tiempo real, con precios dinámicos y propuestas instantáneas.",
          tags: ["Sistema de Diseño", "Prototipado", "SaaS"],
          color: "bg-blue-500",
          liveUrl: "",
          codeUrl: "",
        },
        {
          title: "Herramienta de Mejora de CV con IA",
          tool: "Lovable + Cursor",
          description: "Creé una herramienta que consume la API de OpenAI para analizar CV subidos y detectar mejoras, proporcionando feedback accionable al instante.",
          tags: ["Sistema de Diseño", "IA", "Prototipado", "Supabase"],
          color: "bg-indigo-500",
          liveUrl: "",
          codeUrl: "",
        },
        {
          title: "Rediseño Web Senillosa Homes",
          tool: "Figma Make",
          description: "Rediseño completo de Senillosa Homes, portal de alquiler de departamentos temporarios, enfocado en experiencia de usuario y optimización de conversión.",
          tags: ["Sistema de Diseño", "Landing Page", "Rediseño"],
          color: "bg-purple-500",
          liveUrl: "",
          codeUrl: "",
        },
        {
          title: "Landing Page E-Commerce",
          tool: "Claude + Cursor",
          description: "Programé en par con Claude AI para construir una landing page de e-commerce de alta conversión con animaciones y rendimiento optimizado.",
          tags: ["Landing Page", "E-Commerce", "Animación"],
          color: "bg-pink-500",
          liveUrl: "",
          codeUrl: "",
        },
        {
          title: "Herramienta Generador Portfolio",
          tool: "v0 + Figma Make",
          description: "Creé un generador de portfolios impulsado por IA que toma input del usuario y genera un sitio web de portfolio totalmente personalizado en minutos.",
          tags: ["Generador", "IA", "No-Code"],
          color: "bg-green-500",
          liveUrl: "",
          codeUrl: "",
        },
        {
          title: "Prototipo App Móvil Fintech",
          tool: "Lovable + Claude",
          description: "Prototipo rápido de una app móvil fintech con gestión de cuentas, historial de transacciones y seguimiento de inversiones.",
          tags: ["Móvil", "Fintech", "Prototipo"],
          color: "bg-cyan-500",
          liveUrl: "",
          codeUrl: "",
        },
      ],
    }
  };

  const t = content[language];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme === "dark" ? "bg-[#0A0A0F] text-white" : "bg-white text-black"}`}>
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <SectionBackground theme={theme} variant="default" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          className="pt-32 pb-20 px-6 lg:px-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            {/* Back Button with glass effect */}
            <motion.button
              onClick={onBack}
              className={`glass flex items-center gap-2 mb-12 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                theme === "dark"
                  ? "hover:bg-white/15 border-white/10"
                  : "hover:bg-black/15 border-black/10"
              }`}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-4 h-4" />
              {t.back}
            </motion.button>

            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={`glass inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full ${
                theme === "dark" 
                  ? "bg-gradient-to-r from-[#00D9FF]/20 to-[#9D4EDD]/20 border-[#00D9FF]/20" 
                  : "bg-gradient-to-r from-[#0099FF]/20 to-[#9D4EDD]/20 border-[#0099FF]/20"
              }`}>
                <span className="text-2xl">⚡</span>
                <span className={`text-sm uppercase tracking-wider ${theme === "dark" ? "text-[#00D9FF]" : "text-[#9D4EDD]"}`}>
                  {language === "en" ? "AI-Powered" : "Impulsado por IA"}
                </span>
              </div>
              
              <h1 className="mb-6 gradient-text">{t.title}</h1>
              <p className={`text-xl max-w-3xl transition-colors duration-500 ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              }`}>
                {t.subtitle}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="px-6 lg:px-20 pb-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {t.projects.map((project, index) => (
                <motion.div
                  key={index}
                  className={`glass-strong group rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] ${
                    theme === "dark"
                      ? "hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,217,255,0.3)]"
                      : "hover:border-black/20 hover:shadow-[0_20px_60px_rgba(157,78,221,0.3)]"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className={`w-12 h-1 ${project.color} rounded-full mb-4 transition-all duration-300 group-hover:w-20 group-hover:shadow-lg`} />
                    <h3 className="mb-2">{project.title}</h3>
                    <div className={`flex items-center gap-2 ${
                      theme === "dark" ? "text-[#00D9FF]" : "text-[#9D4EDD]"
                    }`}>
                      <span className="text-sm">{project.tool}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`mb-6 leading-relaxed transition-colors duration-500 ${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  }`}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`glass px-3 py-1 rounded-full text-xs uppercase tracking-wider transition-colors duration-500 ${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm hover:scale-[1.02] hover:-translate-y-1 ${
                        theme === "dark"
                          ? "bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD] text-white shadow-[0_8px_32px_rgba(0,217,255,0.4)]"
                          : "bg-gradient-to-r from-[#0099FF] to-[#9D4EDD] text-white shadow-[0_8px_32px_rgba(0,153,255,0.4)]"
                      } ${!project.liveUrl ? "pointer-events-none opacity-50" : ""}`}
                    >
                      {t.viewLive}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.codeUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`glass px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-center hover:scale-[1.02] hover:-translate-y-1 ${
                        theme === "dark" ? "hover:bg-white/15" : "hover:bg-black/15"
                      } ${!project.codeUrl ? "pointer-events-none opacity-50" : ""}`}
                      aria-label="View project details"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}