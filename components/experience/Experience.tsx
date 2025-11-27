"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExperienceBlock from "./ExperienceBlock";
import { experiences, backgrounds } from "@/lib/data/experiences";

gsap.registerPlugin(ScrollTrigger);

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
          <ExperienceBlock
            key={i}
            experience={exp}
            background={backgrounds[i % backgrounds.length]}
          />
        ))}
      </div>
    </section>
  );
}
