import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { CaseStudies } from "./components/CaseStudies";
import { Tools } from "./components/Tools";
import { Experience } from "./components/Experience";
import { CodeNoCodePortfolio } from "./components/CodeNoCodePortfolio";
import { CustomCursor } from "./components/CustomCursor";
import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";

type SlideId = "home" | "case-studies" | "process";
type SectionId = SlideId | "contact";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [language, setLanguage] = useState<"en" | "es">("en");
  const [currentPage, setCurrentPage] = useState<"home" | "code-nocode">("home");
  const [currentSlide, setCurrentSlide] = useState<SlideId>("home");
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const horizontalTrackRef = useRef<HTMLDivElement | null>(null);
  const slideScrollLockUntilRef = useRef(0);
  const contactNavClickRef = useRef(false);
  const contactNavResetTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (contactNavResetTimeoutRef.current) {
        window.clearTimeout(contactNavResetTimeoutRef.current);
      }
    };
  }, []);

  const handleNavigationSectionChange = useCallback((section: SectionId) => {
    setActiveSection(section);
    if (section === "contact") {
      contactNavClickRef.current = true;
      if (contactNavResetTimeoutRef.current) {
        window.clearTimeout(contactNavResetTimeoutRef.current);
      }
      contactNavResetTimeoutRef.current = window.setTimeout(() => {
        contactNavClickRef.current = false;
      }, 4000);
    } else {
      contactNavClickRef.current = false;
    }
  }, []);

  const scrollToSection = useCallback((sectionId: SectionId) => {
    handleNavigationSectionChange(sectionId);
    const track = horizontalTrackRef.current;
    if (!track) return;

    const targetSectionId = sectionId === "contact" ? "process" : sectionId;
    const slides = Array.from(track.querySelectorAll<HTMLElement>(".horizontal-slide")) as HTMLElement[];
    const targetSlide = slides.find((slide) => slide.dataset.sectionId === targetSectionId) as HTMLElement | undefined;

    if (targetSlide) {
      const scrollToSlide = () =>
        track.scrollTo({
          left: targetSlide.offsetLeft,
          behavior: "smooth",
        });

      const scrollInsideSlide = () => {
        if (sectionId === "contact") {
          const contactElement = targetSlide.querySelector<HTMLElement>("#contact");
          if (contactElement) {
            targetSlide.scrollTo({
              top: contactElement.offsetTop - 32,
              behavior: "smooth",
            });
          }
        } else {
          targetSlide.scrollTo({ top: 0, behavior: "smooth" });
        }
      };

      const needsInitialScroll = Math.abs(track.scrollLeft - targetSlide.offsetLeft) > 5;

      const waitForAlignmentAndScrollInside = () => {
        if (Math.abs(track.scrollLeft - targetSlide.offsetLeft) <= 2) {
          scrollInsideSlide();
        } else {
          requestAnimationFrame(waitForAlignmentAndScrollInside);
        }
      };

      if (needsInitialScroll) {
        scrollToSlide();
        waitForAlignmentAndScrollInside();
      } else {
        scrollInsideSlide();
      }
    }
  }, [handleNavigationSectionChange]);

  const slides = useMemo(
    () => [
      {
        id: "home",
        component: <Hero theme={theme} language={language} onNavigateToWork={() => scrollToSection("case-studies")} />,
      },
      { id: "case-studies", component: <CaseStudies theme={theme} language={language} /> },
      {
        id: "process",
        component: (
          <div className="flex flex-col gap-24">
            <Tools theme={theme} language={language} />
            <Experience theme={theme} language={language} />
          </div>
        ),
      },
    ],
    [theme, language, scrollToSection]
  );

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

  // Convert vertical scroll to horizontal scroll within the tools section
  useEffect(() => {
    const track = horizontalTrackRef.current;
    if (!track) return;

    const shouldAllowVerticalScroll = (element: HTMLElement | null, deltaY: number) => {
      const targetSlide = element?.closest(".horizontal-slide") as HTMLElement | null;
      const isWithinActiveSlide =
        targetSlide?.dataset.sectionId === currentSlide && Date.now() < slideScrollLockUntilRef.current;
      if (isWithinActiveSlide) {
        return false;
      }

      let current: HTMLElement | null = element;
      while (current && current !== track) {
        const style = window.getComputedStyle(current);
        const overflowY = style.overflowY;
        const canScroll =
          (overflowY === "auto" || overflowY === "scroll") &&
          current.scrollHeight > current.clientHeight + 1;

        if (canScroll) {
          const atTop = current.scrollTop === 0;
          const atBottom = Math.ceil(current.scrollTop + current.clientHeight) >= current.scrollHeight;

          if ((deltaY < 0 && !atTop) || (deltaY > 0 && !atBottom)) {
            return true;
          }
        }
        current = current.parentElement;
      }
      return false;
    };

    const handleWheel = (event: WheelEvent) => {
      const target = event.target as HTMLElement | null;
      if (shouldAllowVerticalScroll(target, event.deltaY)) {
        return;
      }

      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
        return;
      }

      const atStart = Math.ceil(track.scrollLeft) <= 0;
      const atEnd = Math.ceil(track.scrollLeft + track.clientWidth) >= track.scrollWidth;
      const scrollingDown = event.deltaY > 0;

      if ((!scrollingDown && atStart) || (scrollingDown && atEnd)) {
        return;
      }

      event.preventDefault();
      track.scrollBy({
        left: event.deltaY,
        behavior: "smooth",
      });
    };

    track.addEventListener("wheel", handleWheel, { passive: false });
    return () => track.removeEventListener("wheel", handleWheel);
  }, [currentPage, currentSlide]);

  // Ensure each horizontal slide starts at the top when it becomes active and update nav state
  useEffect(() => {
    if (currentPage !== "home") return;

    const track = horizontalTrackRef.current;
    if (!track) return;

    const slides = Array.from(track.querySelectorAll(".horizontal-slide")) as HTMLElement[];
    if (!slides.length) return;

    let activeSlide: HTMLElement | null = null;
    let animationFrame: number | null = null;

    const setSectionFromSlide = (slide: HTMLElement) => {
      const sectionId = (slide.dataset.sectionId as SlideId | undefined) ?? "home";
      setCurrentSlide(sectionId);
      slideScrollLockUntilRef.current = Date.now() + 600;
      if (sectionId !== "experience") {
        setActiveSection(sectionId);
      } else if (activeSection !== "contact" || !contactNavClickRef.current) {
        setActiveSection("experience");
      }
    };

    const updateActiveSlide = () => {
      let closestSlide: HTMLElement = slides[0];
      let minDistance = Math.abs(slides[0].offsetLeft - track.scrollLeft);

      for (let i = 1; i < slides.length; i++) {
        const distance = Math.abs(slides[i].offsetLeft - track.scrollLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closestSlide = slides[i];
        }
      }

      if (closestSlide !== activeSlide) {
        closestSlide.scrollTop = 0;
        activeSlide = closestSlide;
        setSectionFromSlide(closestSlide);
      }
    };

    const handleScroll = () => {
      if (animationFrame !== null) return;
      animationFrame = requestAnimationFrame(() => {
        updateActiveSlide();
        animationFrame = null;
      });
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    updateActiveSlide();

    return () => {
      track.removeEventListener("scroll", handleScroll);
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [currentPage, activeSection]);

  // Track contact subsection within the experience slide
  useEffect(() => {
    if (currentPage !== "home") return;

    const track = horizontalTrackRef.current;
    if (!track) return;

    const experienceSlide = track.querySelector<HTMLElement>('.horizontal-slide[data-section-id="experience"]');
    const contactSection = experienceSlide?.querySelector<HTMLElement>('[data-contact-section]');

    if (!experienceSlide || !contactSection) return;

    const handleExperienceScroll = () => {
      const threshold = contactSection.offsetTop - experienceSlide.clientHeight * 0.35;
      const isInContactZone = experienceSlide.scrollTop >= threshold;

      if (contactNavClickRef.current) {
        setActiveSection("contact");
        if (isInContactZone) {
          contactNavClickRef.current = false;
          if (contactNavResetTimeoutRef.current) {
            window.clearTimeout(contactNavResetTimeoutRef.current);
            contactNavResetTimeoutRef.current = null;
          }
        }
        return;
      }

      setActiveSection(isInContactZone ? "contact" : "experience");
    };

    if (currentSlide === "experience") {
      handleExperienceScroll();
      experienceSlide.addEventListener("scroll", handleExperienceScroll);
      return () => experienceSlide.removeEventListener("scroll", handleExperienceScroll);
    } else if (activeSection === "contact") {
      setActiveSection(currentSlide);
    }
  }, [currentSlide, currentPage, activeSection]);

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

  useEffect(() => {
    if (currentPage === "home") return;
    setCurrentSlide("home");
    setActiveSection("home");
  }, [currentPage]);

  const handleBackToHome = () => {
    window.history.pushState({}, "", "/");
    setCurrentPage("home");
    setCurrentSlide("home");
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
        onSectionChange={handleNavigationSectionChange}
      />
      <main>
        <div className="horizontal-scroll-wrapper">
          <div className="horizontal-scroll-track" ref={horizontalTrackRef}>
            {slides.map((slide) => (
              <div key={slide.id} className="horizontal-slide" data-section-id={slide.id}>
                {slide.component}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}