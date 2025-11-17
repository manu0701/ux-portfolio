import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "motion/react";
import { SectionBackground } from "./SectionBackground";

interface ContactProps {
  theme: "dark" | "light";
  language: "en" | "es";
}

export function Contact({ theme, language }: ContactProps) {
  const content = {
    en: {
      title: "Let's Work Together",
      subtitle: "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
      email: "manu.balquinto@gmail.com",
      copyright: "© 2025 Manuel Balquinto. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    },
    es: {
      title: "Trabajemos Juntos",
      subtitle: "Siempre estoy interesado en conocer nuevos proyectos y oportunidades. Ya sea que tengas una pregunta o solo quieras saludar, ¡no dudes en contactarme!",
      email: "manu.balquinto@gmail.com",
      copyright: "© 2025 Manuel Balquinto. Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio"
    }
  };

  const t = content[language];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/manuba/", color: theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-600" },
    { icon: Github, label: "GitHub", url: "https://github.com/manu0701", color: theme === "dark" ? "hover:text-gray-300" : "hover:text-gray-700" },
  ];

  return (
    <section className="pt-24 pb-12 px-6 lg:px-20 relative overflow-hidden" id="contact">
      {/* Animated Background */}
      <SectionBackground theme={theme} variant="alternate" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main Content */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="mb-6">{t.title}</h2>
          <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto text-lg mb-10 transition-colors duration-500`}>
            {t.subtitle}
          </p>

          {/* Email Button */}
          <motion.a
            href={`mailto:${t.email}`}
            className={`inline-flex items-center gap-3 px-10 py-5 ${
              theme === "dark" ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-800"
            } rounded-xl transition-all duration-300 text-lg`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-6 h-6" />
            {t.email}
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-xl ${
                theme === "dark" ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-black/5 border-black/10 hover:bg-black/10"
              } border transition-all duration-300 ${link.color}`}
              aria-label={link.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <link.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div 
          className={`border-t ${
            theme === "dark" ? "border-white/10" : "border-black/10"
          } pt-8 transition-colors duration-500`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 text-sm ${
            theme === "dark" ? "text-gray-500" : "text-gray-600"
          } transition-colors duration-500`}>
            <div>{t.copyright}</div>
            <div className="flex gap-6">
              <a href="#" className={`${
                theme === "dark" ? "hover:text-white" : "hover:text-black"
              } transition-colors duration-300`}>
                {t.privacy}
              </a>
              <a href="#" className={`${
                theme === "dark" ? "hover:text-white" : "hover:text-black"
              } transition-colors duration-300`}>
                {t.terms}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}