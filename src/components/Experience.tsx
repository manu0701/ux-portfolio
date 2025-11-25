import { motion } from "motion/react";
import { Mail, Linkedin, Github } from "lucide-react";
import { SectionBackground } from "./SectionBackground";
import { WaveDivider } from "./WaveDivider";

interface ExperienceProps {
  theme: "dark" | "light";
  language: "en" | "es";
}

export function Experience({ theme, language }: ExperienceProps) {
  const content = {
    en: {
      title: "Experience",
      subtitle: "My journey in UX design, working with diverse teams and industries to create impactful digital products.",
      educationTitle: "Education & Certifications",
      degreeLabel: "Degree",
      degree: "Bachelor of Multimedia Design",
      university: "National University of La Plata, 2017",
      certificationsLabel: "Certifications",
      moreCertifications: "+12 more certifications",
      experiences: [
        {
          title: "Senior UX/UI Designer",
          company: "FORTÉ GROUP",
          companyUrl: "https://fortegrp.com/",
          period: "2024 - Current",
          description: "I'm leading the UX design for a web platform that helps construction companies quote buildings in real time. I work from discovery to implementation, using AI tools and collaborating closely with the product team, developers, and leadership.",
          achievements: [
            "Led end-to-end design for real-time quoting platform",
            "Integrated AI tools into design workflow",
            "Collaborated with cross-functional teams on product strategy",
          ],
        },
        {
          title: "Senior UX/UI Designer",
          company: "ARGANO",
          companyUrl: "https://argano.com/",
          period: "2024",
          description: "I worked on several product design projects across different industries, helping teams turn complex ideas into simple, usable interfaces. I collaborated with clients from early concepts to final delivery.",
          achievements: [
            "Designed interfaces for multiple industry verticals",
            "Simplified complex user flows across various products",
            "Managed client relationships from concept to delivery",
          ],
        },
        {
          title: "UX Designer",
          company: "VALTECH (Formerly Kin and Carta)",
          companyUrl: "https://www.valtech.com/es-ar/",
          period: "2022 - 2024",
          description: "I designed digital products for clients in fintech and logistics. My focus was on simplifying user flows, improving accessibility, and making sure designs met both user and business needs.",
          achievements: [
            "Delivered accessible fintech solutions",
            "Optimized logistics platform user experience",
            "Balanced user needs with business requirements",
          ],
        },
        {
          title: "UX Designer",
          company: "AMERICA VIRTUAL",
          companyUrl: "https://americavirtualsa.com/",
          period: "2021 - 2022",
          description: "I helped redesign government platforms for public use. I worked on complex systems where accessibility and clarity were key, collaborating with non-technical stakeholders and dev teams.",
          achievements: [
            "Redesigned government platforms for public accessibility",
            "Worked with non-technical stakeholders effectively",
            "Ensured WCAG compliance across all projects",
          ],
        },
        {
          title: "QA & Front End Developer",
          company: "ACCENTURE",
          companyUrl: "https://www.accenture.com/ar-es",
          period: "2016 - 2022",
          description: "I worked on frontend tasks and helped test internal tools. This role gave me a solid base to understand how design and development connect in real-world projects.",
          achievements: [
            "Developed and tested internal tools",
            "Built foundation in design-development collaboration",
            "Ensured quality across frontend implementations",
          ],
        },
      ],
      contact: {
        title: "Let's Work Together",
        subtitle:
          "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
        email: "manu.balquinto@gmail.com",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        copyright: "© 2025 Manuel Balquinto. All rights reserved.",
      },
    },
    es: {
      title: "Experiencia",
      subtitle: "Mi trayectoria en diseño UX, trabajando con equipos diversos e industrias para crear productos digitales de impacto.",
      educationTitle: "Educación y Certificaciones",
      degreeLabel: "Título",
      degree: "Licenciatura en Diseño Multimedial",
      university: "Universidad Nacional de La Plata, 2017",
      certificationsLabel: "Certificaciones",
      moreCertifications: "+12 certificaciones más",
      experiences: [
        {
          title: "Diseñador UX/UI Senior",
          company: "FORTÉ GROUP",
          companyUrl: "https://fortegrp.com/",
          period: "2024 - Presente",
          description: "Lidero el diseño UX de una plataforma web que ayuda a empresas de construcción a cotizar edificios en tiempo real. Trabajo desde el descubrimiento hasta la implementación, usando herramientas de IA y colaborando estrechamente con el equipo de producto, desarrolladores y liderazgo.",
          achievements: [
            "Lideré diseño end-to-end para plataforma de cotización en tiempo real",
            "Integré herramientas de IA en el flujo de trabajo de diseño",
            "Colaboré con equipos multifuncionales en estrategia de producto",
          ],
        },
        {
          title: "Diseñador UX/UI Senior",
          company: "ARGANO",
          companyUrl: "https://argano.com/",
          period: "2024",
          description: "Trabajé en varios proyectos de diseño de productos en diferentes industrias, ayudando a equipos a convertir ideas complejas en interfaces simples y usables. Colaboré con clientes desde conceptos iniciales hasta la entrega final.",
          achievements: [
            "Diseñé interfaces para múltiples sectores industriales",
            "Simplifiqué flujos de usuario complejos en varios productos",
            "Gestioné relaciones con clientes desde concepto hasta entrega",
          ],
        },
        {
          title: "Diseñador UX",
          company: "VALTECH (Formerly Kin and Carta)",
          companyUrl: "https://www.valtech.com/es-ar/",
          period: "2022 - 2024",
          description: "Diseñé productos digitales para clientes en fintech y logística. Mi enfoque fue simplificar flujos de usuario, mejorar la accesibilidad y asegurar que los diseños cumplieran con las necesidades del usuario y del negocio.",
          achievements: [
            "Entregué soluciones fintech accesibles",
            "Optimicé experiencia de usuario en plataforma de logística",
            "Balanceé necesidades del usuario con requerimientos del negocio",
          ],
        },
        {
          title: "Diseñador UX",
          company: "AMERICA VIRTUAL",
          companyUrl: "https://americavirtualsa.com/",
          period: "2021 - 2022",
          description: "Ayudé a rediseñar plataformas gubernamentales para uso público. Trabajé en sistemas complejos donde la accesibilidad y claridad eran clave, colaborando con stakeholders no técnicos y equipos de desarrollo.",
          achievements: [
            "Rediseñé plataformas gubernamentales para accesibilidad pública",
            "Trabajé efectivamente con stakeholders no técnicos",
            "Aseguré cumplimiento WCAG en todos los proyectos",
          ],
        },
        {
          title: "QA & Desarrollador Front End",
          company: "ACCENTURE",
          companyUrl: "https://www.accenture.com/ar-es",
          period: "2016 - 2022",
          description: "Trabajé en tareas de frontend y ayudé a testear herramientas internas. Este rol me dio una base sólida para entender cómo el diseño y el desarrollo se conectan en proyectos del mundo real.",
          achievements: [
            "Desarrollé y testeé herramientas internas",
            "Construí base en colaboración diseño-desarrollo",
            "Aseguré calidad en implementaciones frontend",
          ],
        },
      ],
      contact: {
        title: "Trabajemos Juntos",
        subtitle:
          "Siempre estoy interesado en conocer nuevos proyectos y oportunidades. Ya sea que tengas una pregunta o solo quieras saludar, ¡no dudes en contactarme!",
        email: "manu.balquinto@gmail.com",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
        copyright: "© 2025 Manuel Balquinto. Todos los derechos reservados.",
      },
    },
  };

  const t = content[language];
  const contactContent = t.contact;
  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/manuba/",
      hoverClasses: theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/manu0701",
      hoverClasses: theme === "dark" ? "hover:text-gray-300" : "hover:text-gray-700",
    },
  ];

  return (
    <section className={`pt-24 pb-12 relative overflow-hidden transition-colors duration-500`} id="experience">
      {/* Wave Divider at bottom */}
      <WaveDivider theme={theme} position="bottom" variant="default" />

      {/* Animated Background */}
      <SectionBackground theme={theme} variant="default" />

      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
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

        {/* Timeline */}
        <div className="space-y-12">
          {t.experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative pl-8 border-l-2 ${theme === "dark" ? "border-blue-500/30" : "border-blue-500/50"
                } transition-colors duration-500`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              {/* Timeline Dot */}
              <motion.div
                className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 ${theme === "dark" ? "border-black" : "border-white"
                  } transition-colors duration-500`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              />

              {/* Content */}
              <div className={`pb-12 ${index === t.experiences.length - 1 ? "pb-32" : ""}`}>
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="mb-1">{exp.title}</h3>
                    {exp.companyUrl !== "#" ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${theme === "dark" ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
                          } transition-colors duration-300 inline-flex items-center gap-1`}
                      >
                        {exp.company}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <span className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
                        {exp.company}
                      </span>
                    )}
                  </div>
                  <span className={`${theme === "dark" ? "text-gray-500" : "text-gray-600"} text-sm whitespace-nowrap transition-colors duration-500`}>
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} mb-4 leading-relaxed transition-colors duration-500`}>
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      className={`flex items-start gap-3 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                        } transition-colors duration-500`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                    >
                      <svg className={`w-5 h-5 ${theme === "dark" ? "text-green-400" : "text-green-600"
                        } flex-shrink-0 mt-0.5 transition-colors duration-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className={`mt-16 p-8 rounded-2xl backdrop-blur-xl ${theme === "dark"
            ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20"
            : "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/30"
            } border transition-colors duration-500`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="mb-4">{t.educationTitle}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} text-sm mb-1 transition-colors duration-500`}>{t.degreeLabel}</div>
              <div className="mb-2">{t.degree}</div>
              <div className={`${theme === "dark" ? "text-gray-500" : "text-gray-600"} text-sm transition-colors duration-500`}>{t.university}</div>
            </div>
            <div>
              <div className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} text-sm mb-1 transition-colors duration-500`}>{t.certificationsLabel}</div>
              <div className="space-y-1 text-sm">
                <div>• Experto en UX & IxD - UTN</div>
                <div>• No Code Specialist - No Code Hackers</div>
                <div>• Interaction Design for Usability</div>
                <div className="mt-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs ${theme === "dark"
                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    : "bg-blue-500/20 text-blue-700 border border-blue-500/40"
                    } transition-colors duration-500`}>
                    {t.moreCertifications}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact / Let's Work Together */}
        <motion.div
          id="contact"
          data-contact-section="true"
          className="mt-16 pt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="pb-10">
            <div className="text-center mb-10">
              <h3 className="mb-4 pt-6">{contactContent.title}</h3>
              <p
                className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"
                  } text-lg max-w-2xl mx-auto transition-colors duration-500`}
              >
                {contactContent.subtitle}
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <motion.a
                href={`mailto:${contactContent.email}`}
                className={`inline-flex items-center gap-3 px-10 py-5 ${theme === "dark" ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-800"
                  } rounded-xl transition-all duration-300 text-lg`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-6 h-6" />
                {contactContent.email}
              </motion.a>

              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl border ${theme === "dark"
                      ? "bg-white/5 border-white/10 hover:bg-white/10"
                      : "bg-black/5 border-black/10 hover:bg-black/10"
                      } transition-all duration-300 ${link.hoverClasses}`}
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
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col md:flex-row justify-between items-center gap-4 text-sm ${theme === "dark" ? "text-gray-500" : "text-gray-600"
              } transition-colors duration-500`}
          >
            <div>{contactContent.copyright}</div>
            <div className="flex gap-6">
              <a
                href="#"
                className={`${theme === "dark" ? "hover:text-white" : "hover:text-black"} transition-colors duration-300`}
              >
                {contactContent.privacy}
              </a>
              <a
                href="#"
                className={`${theme === "dark" ? "hover:text-white" : "hover:text-black"} transition-colors duration-300`}
              >
                {contactContent.terms}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}