"use client";
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    title: "Internship & Foundational Technical Skills",
    period: "May 2024",
    company: "StartUp Werk | Oberhausen",
    description:
      "Entry into software development by contributing to smaller internal projects. Focus on code structuring and acquiring fundamental database concepts (SQL), as well as proficiency in version control (Git).",
    tags: ["HTML", "CSS", "JavaScript", "Git"],
  },
  {
    title: "Intensive Full-Stack Training",
    period: "July 2024 – March 2025",
    company: "8-Month Bootcamp/Course",
    description:
      "In-depth training as a Full-Stack Web Developer. Core competencies included Backend development with Python and the Django Framework, and utilizing database modeling (ORM) for scalable web applications.",
    tags: [
      "Python",
      "Django",
      "Databases(SQL)",
      "HTML",
      "Tailwind CSS & SASS",
      "JavaScript",
      "REST APIs",
    ],
  },
  {
    title: "Project-Based Self-Study & Specialization",
    period: "March 2025 – Present",
    company: "Independent Projects",
    description:
      "Self-directed specialization in modern Frontend and the React/Next.js and TypeScript ecosystems. Development of personal projects aimed at establishing clean code practices and mastering modern state management concepts. Goal: Continuous growth through practical application.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
      "PostgreSQL",
      "Node.js",
    ],
  },
];

export default function Experience() {
  const [scrollProgress, setScrollProgress] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const scrollY = window.scrollY;

      const progress = experiences.map((_, index) => {
        const start = sectionTop + index * window.innerHeight;
        const end = start + window.innerHeight;

        if (scrollY < start) return 0;
        if (scrollY > end) return 1;

        return (scrollY - start) / window.innerHeight;
      });

      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative w-full bg-linear-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
      style={{ height: `${(experiences.length + 1) * 100}vh` }}
    >
      {experiences.map((experience, index) => {
        const progress = scrollProgress[index] || 0;

        let translateX;
        if (progress < 0.5) {
          translateX = -100 + progress * 200;
        } else {
          translateX = (progress - 0.5) * 200;
        }

        return (
          <div
            key={experience.title}
            className="sticky top-0 w-full right-0 h-screen flex items-center justify-center bg-background text-foreground font-funnel px-4"
            style={{
              zIndex: index + 1,
              transform: `translateX(${translateX}%)`,
            }}
          >
            <div className="w-full text-center max-w-5xl">
              <p className="text-sm sm:text-lg text-primary/70 mb-1">
                {experience.period} | {experience.company}
              </p>

              <h3 className="text-3xl sm:text-5xl max-w-2xl mx-auto pb-2 mb-4 border-b border-primary/50 font-semibold">
                {experience.title}
              </h3>

              <p className="text-base sm:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                {experience.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {experience.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
