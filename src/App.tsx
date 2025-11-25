import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { CaseStudies } from "./components/CaseStudies";
import { Tools } from "./components/Tools";
import { Experience } from "./components/Experience";
import { CodeNoCodePortfolio } from "./components/CodeNoCodePortfolio";
import { CustomCursor } from "./components/CustomCursor";
import React, { useState, useEffect, useCallback } from "react";

type SectionId = "home" | "case-studies" | "process" | "contact";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [language, setLanguage] = useState<"en" | "es">("en");
  const [currentPage, setCurrentPage] = useState<"home" | "code-nocode">("home");
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  const handleNavigationSectionChange = useCallback((section: SectionId) => {
    setActiveSection(section);
  }, []);

  const scrollToSection = useCallback((sectionId: SectionId) => {
    handleNavigationSectionChange(sectionId);

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
  }, [handleNavigationSectionChange]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  // Handle navigation from URL
  useEffect(() => {
    const handleLocationChange = () => {
      if (window.location.pathname === "/code-nocode-portfolio") {
        setCurrentPage("code-nocode");
      } else {
        setCurrentPage("home");
      }
    };

    handleLocationChange();
    window.addEventListener("popstate", handleLocationChange);

    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  // Handle link clicks
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href="/code-nocode-portfolio"]');
      if (link) {
        e.preventDefault();
        window.history.pushState({}, "", "/code-nocode-portfolio");
        setCurrentPage("code-nocode");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    if (currentPage !== "home") return;

    const handleScroll = () => {
      const sections = ["home", "case-studies", "tools", "contact"];
      const scrollPosition = window.scrollY + 200; // Offset for better UX

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          const sectionId = sections[i] === "tools" ? "process" : sections[i];
          setActiveSection(sectionId as SectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  const handleBackToHome = () => {
    window.history.pushState({}, "", "/");
    setCurrentPage("home");
    setActiveSection("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (currentPage === "code-nocode") {
    return (
      <div className={`${theme === "dark" ? "bg-[#0A0A0F] text-white" : "bg-white text-black"} min-h-screen transition-colors duration-500`}>
        <CustomCursor theme={theme} />
        <Navigation
          theme={theme}
          setTheme={setTheme}
          language={language}
          setLanguage={setLanguage}
          activeSection={activeSection}
          onSectionChange={handleNavigationSectionChange}
        />
        <CodeNoCodePortfolio theme={theme} language={language} onBack={handleBackToHome} />
      </div>
    );
  }

  return (
    <div className={`${theme === "dark" ? "bg-[#0A0A0F] text-white" : "bg-white text-black"} min-h-screen transition-colors duration-500`}>
      <CustomCursor theme={theme} />
      <Navigation
        theme={theme}
        setTheme={setTheme}
        language={language}
        setLanguage={setLanguage}
        activeSection={activeSection}
        onSectionChange={scrollToSection}
      />
      <main>
        <Hero theme={theme} language={language} onNavigateToWork={() => scrollToSection("case-studies")} />
        <CaseStudies theme={theme} language={language} />
        <Tools theme={theme} language={language} />
        <Experience theme={theme} language={language} />
      </main>
    </div>
  );
}