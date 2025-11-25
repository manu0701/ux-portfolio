import React from "react";
import { Moon, Sun, Globe } from "lucide-react";

interface NavigationProps {
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
  language: "en" | "es";
  setLanguage: (language: "en" | "es") => void;
  activeSection: "home" | "case-studies" | "process" | "experience" | "contact";
  onSectionChange: (section: "home" | "case-studies" | "process" | "experience" | "contact") => void;
}

export function Navigation({
  theme,
  setTheme,
  language,
  setLanguage,
  activeSection,
  onSectionChange,
}: NavigationProps) {
  const navItems = [
    { id: "home", labelEn: "Home", labelEs: "Inicio" },
    { id: "case-studies", labelEn: "Case Studies", labelEs: "Casos" },
    { id: "process", labelEn: "Tools & Experience", labelEs: "Herramientas y Experiencia" },
  ] as const;

  const scrollToSection = (sectionId: NavigationProps["activeSection"]) => {
    onSectionChange(sectionId);

    // Map section IDs to element IDs
    const elementId = sectionId === "process" ? "tools" : sectionId;
    const element = document.getElementById(elementId);

    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-4">
        <div className={`flex items-center justify-between h-16 px-6 rounded-2xl backdrop-blur-[20px] border transition-all duration-300 ${theme === "dark"
          ? "bg-white/5 border-white/10"
          : "bg-black/5 border-black/10"
          } shadow-lg`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl gradient-text-cyan-purple">Manuel Balquinto</span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`glass px-5 py-2 rounded-xl transition-all duration-300 ${activeSection === item.id
                  ? theme === "dark"
                    ? "border-[#00D9FF]/50 bg-[#00D9FF]/10 text-[#00D9FF]"
                    : "border-[#00BC7C]/50 bg-[#00BC7C]/10 text-[#00BC7C]"
                  : theme === "dark"
                    ? "hover:bg-white/10 hover:border-white/20"
                    : "hover:bg-black/10 hover:border-black/20"
                  }`}
              >
                {language === "en" ? item.labelEn : item.labelEs}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`glass w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 ${theme === "dark" ? "hover:bg-white/15 hover:border-white/20" : "hover:bg-black/15 hover:border-black/20"
                }`}
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`glass w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 ${theme === "dark" ? "hover:bg-white/15 hover:border-white/20" : "hover:bg-black/15 hover:border-black/20"
                }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}