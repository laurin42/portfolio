"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import HeroClient from "../home/HeroClient";
import Header from "../navigation/Header";
import Stack from "../stack/Stack";
import Projects from "../projects/Projects";
import Experience from "../experience/Experience";
import Contact from "../contact/Contact";
import Footer from "../navigation/Footer";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  const smoothScrollRef = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    smoothScrollRef.current = ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => {
      smoothScrollRef.current?.kill();
    };
  }, []);

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
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {animationDone && (
          <div className="fixed top-4 left-8 -translate-y-1/2 z-50 animate-fadeIn">
            {sections.map((section) => (
              <span
                key={section.id}
                className={`absolute transform text-shadow-xs text-shadow-background/32 transition-opacity duration-500 text-3xl sm:text-5xl tracking-wider font-funnel font-semibold ${
                  activeSection === section.id ? "opacity-100" : "opacity-0"
                }`}
              >
                {section.label}
              </span>
            ))}
          </div>
        )}

        <div
          id="home"
          ref={(el) => {
            sectionRefs.current["home"] = el;
          }}
        >
          <Header isMenuVisible={animationDone} />
          <HeroClient onAnimationComplete={handleAnimationComplete} />
        </div>

        <Stack
          id="stack"
          ref={(el) => {
            sectionRefs.current["stack"] = el;
          }}
        />

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
      </div>
    </div>
  );
}
