import { motion } from "motion/react";
import { SectionBackground } from "./SectionBackground";
import { 
  SiFigma, 
  SiNotion, 
  SiFramer,
  SiOpenai,
} from "react-icons/si";
import { 
  Sparkles, 
  Lightbulb, 
  Search, 
  Zap, 
  Palette,
  Heart
} from "lucide-react";

interface ToolsProps {
  theme: "dark" | "light";
  language: "en" | "es";
}

export function Tools({ theme, language }: ToolsProps) {
  const content = {
    en: {
      title: "Tools & Technologies",
      subtitle: "The tools and platforms I use daily to bring ideas to life, from design to implementation.",
      tools: [
        {
          name: "Figma",
          description: "UI Design & Prototyping",
          icon: <SiFigma size={24} />,
        },
        {
          name: "Notion",
          description: "Documentation & Collaboration",
          icon: <SiNotion size={24} />,
        },
        {
          name: "Lovable",
          description: "AI Wireframing & Prototyping",
          icon: <Heart size={24} />,
        },
        {
          name: "Relume",
          description: "AI Website & Libraries Design",
          icon: <Sparkles size={24} />,
        },
        {
          name: "Perplexity",
          description: "Research and Analysis",
          icon: <Search size={24} />,
        },
        {
          name: "Framer",
          description: "No Code Web Design & Implementation",
          icon: <SiFramer size={24} />,
        },
        {
          name: "Figma Make",
          description: "AI Wireframing",
          icon: <SiFigma size={24} />,
        },
        {
          name: "Cursor",
          description: "AI Wireframing & Prototyping",
          icon: <Zap size={24} />,
        },
        {
          name: "Uizard",
          description: "AI Prototyping",
          icon: <Palette size={24} />,
        },
        {
          name: "Chat GPT",
          description: "Research and Daily Tasks",
          icon: <SiOpenai size={24} />,
        },
      ],
    },
    es: {
      title: "Herramientas & Tecnologías",
      subtitle: "Las herramientas y plataformas que uso diariamente para dar vida a las ideas, desde el diseño hasta la implementación.",
      tools: [
        {
          name: "Figma",
          description: "Diseño UI & Prototipado",
          icon: <SiFigma size={24} />,
        },
        {
          name: "Notion",
          description: "Documentación & Colaboración",
          icon: <SiNotion size={24} />,
        },
        {
          name: "Lovable",
          description: "Wireframing & Prototipado con IA",
          icon: <Heart size={24} />,
        },
        {
          name: "Relume",
          description: "Diseño de Sitios Web & Librerías con IA",
          icon: <Sparkles size={24} />,
        },
        {
          name: "Perplexity",
          description: "Investigación y Análisis",
          icon: <Search size={24} />,
        },
        {
          name: "Framer",
          description: "Diseño Web Sin Código & Implementación",
          icon: <SiFramer size={24} />,
        },
        {
          name: "Figma Make",
          description: "Wireframing con IA",
          icon: <SiFigma size={24} />,
        },
        {
          name: "Cursor",
          description: "Wireframing & Prototipado con IA",
          icon: <Zap size={24} />,
        },
        {
          name: "Uizard",
          description: "Prototipado con IA",
          icon: <Palette size={24} />,
        },
        {
          name: "Chat GPT",
          description: "Investigación y Tareas Diarias",
          icon: <SiOpenai size={24} />,
        },
      ],
    }
  };

  const t = content[language];

  return (
    <section className="py-24 px-6 lg:px-20 relative overflow-hidden" id="tools">
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
          <h2 className="mb-4">{t.title}</h2>
          <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} max-w-3xl text-lg transition-colors duration-500`}>
            {t.subtitle}
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.tools.map((tool, index) => (
            <motion.div
              key={index}
              className={`group relative p-6 rounded-2xl backdrop-blur-xl border ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                  : "bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20"
              } transition-all duration-500 cursor-pointer overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent"
                  : "bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent"
              }`} />

              <div className="relative z-10 flex items-start gap-4">
                {/* Icon */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${
                  theme === "dark" ? "bg-white/10" : "bg-black/10"
                } flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                  {tool.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-1 text-lg">{tool.name}</h3>
                  <p className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  } transition-colors duration-500`}>
                    {tool.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}