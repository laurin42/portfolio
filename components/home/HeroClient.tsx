"use client";

import { useState, useCallback } from "react";
import CharacListAnimated from "./CharacListAnimated";

export default function HeroClient({
  onAnimationComplete,
}: {
  onAnimationComplete: () => void;
}) {
  const [animationDone, setAnimationDone] = useState(false);

  const handleAnimationComplete = useCallback(() => {
    setAnimationDone(true);
    onAnimationComplete();
  }, [onAnimationComplete]);

  return (
    <section
      className="
        h-svh px-4 flex flex-col justify-center items-center font-funnel
        opacity-0 translate-y-3
        animate-fadeIn
      "
    >
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl sm:text-2xl md:text-6xl lg:text-8xl text-left leading-1.5 md:leading-20">
          Hello<span className="text-accent">, </span>I am Laurin
          <span className="text-accent">.</span>
        </h1>
        <CharacListAnimated onAnimationComplete={handleAnimationComplete} />
        {animationDone && (
          <p
            className={`
            text-right text-sm sm:text-md md:text-xl lg:text-2xl
            leading-0 md:leading-6 animate-fadeInUp
          `}
          >
            based in Düsseldorf, Germany
          </p>
        )}
      </div>
    </section>
  );
}
