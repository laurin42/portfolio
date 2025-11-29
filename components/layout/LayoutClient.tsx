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
import Faq from "../faq/Faq";
import ExperienceMobile from "../experience/ExperienceMobile";
import useIsMobile from "@/hooks/useIsMobile";
import { usePathname } from "next/navigation";

const sections = [
  { id: "home", label: "Home" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
  { id: "faq", label: "FAQ" },
];

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  const [animationDone, setAnimationDone] = useState(false);
  const handleAnimationComplete = useCallback(() => {
    setAnimationDone(true);
  }, []);

  const [activeSection, setActiveSection] = useState(sections[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const smoothScrollRef = useRef<ScrollSmoother | null>(null);

  const isMobile = useIsMobile(768);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    if (isLandingPage) {
      smoothScrollRef.current = ScrollSmoother.create({
        smooth: 0.6,
        effects: false,
      });
    }

    return () => {
      smoothScrollRef.current?.kill();
      smoothScrollRef.current = null;
    };
  }, [isLandingPage]);

  useEffect(() => {
    if (!isLandingPage) {
      return;
    }

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
  }, [isLandingPage]);

  const isHeaderVisible = isLandingPage ? animationDone : true;

  return (
    <>
      <Header isMenuVisible={isHeaderVisible} activeSection={activeSection} />

      {isLandingPage && animationDone && (
        <div className="fixed top-4 left-8 -translate-y-1/2 z-50 animate-fadeIn">
          {sections.map((section) => (
            <span
              key={section.id}
              className={`absolute transform transition-opacity duration-500 text-3xl sm:text-5xl tracking-wider font-funnel font-semibold
          ${
            section.id === "home" && activeSection === "home"
              ? "text-foreground sm:text-white"
              : "text-foreground"
          }
              ${
                section.id === "stack" && activeSection === "stack"
                  ? "text-foreground sm:text-black"
                  : "text-foreground"
              }
          text-shadow-xs text-shadow-background/32
          ${activeSection === section.id ? "opacity-100" : "opacity-0"}`}
            >
              {section.label}
            </span>
          ))}
        </div>
      )}

      {isLandingPage ? (
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div
              id="home"
              ref={(el) => {
                sectionRefs.current["home"] = el;
              }}
            >
              <HeroClient onAnimationComplete={handleAnimationComplete} />
            </div>
            <div
              id="stack"
              ref={(el) => {
                sectionRefs.current["stack"] = el;
              }}
            >
              <Stack />
            </div>

            <div
              id="projects"
              ref={(el) => {
                sectionRefs.current["projects"] = el;
              }}
            >
              <Projects />
            </div>

            {isMobile ? (
              <div
                id="experience"
                ref={(el) => {
                  sectionRefs.current["experience"] = el;
                }}
              >
                <ExperienceMobile />
              </div>
            ) : (
              <div
                id="experience"
                ref={(el) => {
                  sectionRefs.current["experience"] = el;
                }}
              >
                <Experience />
              </div>
            )}

            <div
              id="contact"
              ref={(el) => {
                sectionRefs.current["contact"] = el;
              }}
            >
              <Contact />
            </div>

            <div
              id="faq"
              ref={(el) => {
                sectionRefs.current["faq"] = el;
              }}
            >
              <Faq />
            </div>

            <Footer />
          </div>
        </div>
      ) : (
        <div id="content-wrapper-fallback">{children}</div>
      )}
    </>
  );
}
