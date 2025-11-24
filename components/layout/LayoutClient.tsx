"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import HeroClient from "../home/HeroClient";
import Header from "../navigation/Header";
import FrontendStack from "../stack/FrontendStack";
import BackendStack from "../stack/BackendStack";
import Projects from "../projects/Projects";
import Experience from "../experience/Experience";
import Contact from "../contact/Contact";
import Footer from "../navigation/Footer";

const sections = [
  { id: "home", label: "Home" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function LayoutClient() {
  const [animationDone, setAnimationDone] = useState(false);
  const handleAnimationComplete = useCallback(() => {
    setAnimationDone(true);
  }, []);

  const [activeSection, setActiveSection] = useState(sections[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0, rootMargin: "-0% 0px -99% 0px" }
    );

    sections.forEach((section) => {
      const el = sectionRefs.current[section.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="fixed left-8 md:bottom-4 text-center w-fit -translate-y-1/2 z-50">
        {sections.map((section) => (
          <span
            key={section.id}
            className={`absolute transform sm:-translate-y-1/2 sm:-rotate-90 sm:origin-left transition-opacity duration-500 text-4xl sm:text-6xl tracking-wider font-funnel font-semibold ${
              activeSection === section.id ? "opacity-100" : "opacity-0"
            }`}
          >
            {section.label}
          </span>
        ))}
      </div>

      <div
        id="home"
        ref={(el) => {
          sectionRefs.current["home"] = el;
        }}
      >
        <Header isMenuVisible={animationDone} />
        <HeroClient onAnimationComplete={handleAnimationComplete} />
      </div>

      <div
        id="stack"
        ref={(el) => {
          sectionRefs.current["stack"] = el;
        }}
      >
        <FrontendStack />

        <BackendStack />
      </div>

      <div
        id="projects"
        ref={(el) => {
          sectionRefs.current["projects"] = el;
        }}
      >
        <Projects />
      </div>
      <div
        id="experience"
        ref={(el) => {
          sectionRefs.current["experience"] = el;
        }}
      >
        <Experience />
      </div>

      <div
        id="contact"
        ref={(el) => {
          sectionRefs.current["contact"] = el;
        }}
      >
        <Contact />
      </div>

      <Footer />
    </>
  );
}
