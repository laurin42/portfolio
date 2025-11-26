"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
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

const backgrounds = [
  "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%",
  "bg-gradient-to-r from-emerald-500 from-10% via-lime-500 via-30% to-yellow-500 to-90%",
  "bg-gradient-to-r from-yellow-500 from-10% via-amber-500 via-30% to-orange-500 to-90%",
];

export default function Experience() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const blocks = gsap.utils.toArray<HTMLElement>(".block");
    if (!wrapRef.current || blocks.length === 0) return;

    const count = blocks.length;
    const progressPerSection = 1 / (count - 1);
    let tween: gsap.core.Tween;

    const ctx = gsap.context(() => {
      tween = gsap.to(blocks, {
        xPercent: -100 * (count - 1),
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          pin: true,
          scrub: true,
          end: () => "+=" + window.innerWidth * (count - 1),
          onScrubComplete: (self) => {
            const velocity = self.getVelocity();
            const direction = velocity >= 0 ? 1 : -1;

            const rawIndex = self.progress / progressPerSection;
            const targetIndex = Math.round(rawIndex + 0.15 * direction);

            const nearest = gsap.utils.clamp(0, count - 1, targetIndex);

            gsap.to(tween, {
              progress: nearest * progressPerSection,
              duration: 0.45,
              ease: "power3.out",
            });
          },
        },
      });

      ScrollTrigger.create({
        trigger: ".animate-inside",
        containerAnimation: tween,
        start: "left center",
        scrub: true,
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapRef} className="w-full h-svh overflow-hidden">
      <div
        className="h-svh flex"
        style={{ width: `${experiences.length * 100}svw` }}
      >
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={`block w-svw h-svh flex items-center justify-center font-funnel ${
              backgrounds[i % backgrounds.length]
            }`}
          >
            <div className="animate-inside">
              <div className="max-w-3xl mx-auto text-center bg-background p-6 rounded-xs shadow-lg">
                <p className="w-fit mx-auto bg-foreground text-sm sm:text-lg text-background p-1 mb-4">
                  {exp.period} | {exp.company}
                </p>
                <h3 className="w-fit mx-auto text-3xl sm:text-5xl pb-2 mb-4 border-b border-primary/50 font-semibold">
                  {exp.title}
                </h3>
                <p className="text-left pl-2 sm:text-xl text-muted-foreground mb-6">
                  {exp.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
