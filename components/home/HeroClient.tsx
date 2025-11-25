"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
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
      h-svh w-full
      flex flex-row
      font-funnel
      animate-fadeIn
    "
    >
      <div className="relative w-1/3 h-full animate-fadeIn">
        <Image
          src="/images/hero/hero.webp"
          alt="Hero"
          fill
          className="object-cover absolute bottom-0 left-0"
        />
      </div>
      <div className="w-2/3 flex flex-col justify-center">
        <h1 className="text-2xl sm:text-2xl md:text-6xl lg:text-8xl text-center aninmate-fadeIn">
          Hello<span className="text-accent">, </span>I am Laurin
          <span className="text-accent">.</span>
        </h1>

        <CharacListAnimated onAnimationComplete={handleAnimationComplete} />

        <p
          className={`
        text-center text-sm sm:text-md md:text-xl lg:text-2xl
        transition-opacity duration-300
        ${animationDone ? "opacity-100" : "opacity-0"}
      `}
        >
          based in Düsseldorf, Germany
        </p>
        <div
          className={`flex justify-center items-center gap-8 pt-8 
        transition-opacity duration-300
        ${animationDone ? "opacity-100" : "opacity-0"}
          `}
        >
          <div className="w-8 h-8 sm:w-14 sm:h-14">
            <Image
              src={"/icons/devTools/GitHub.svg"}
              alt="GitHub"
              height={100}
              width={100}
              className="dark:invert transition-transform duration-300 hover:scale-104 cursor-pointer"
            />
          </div>
          <div className="w-8 h-8 sm:w-14 sm:h-14">
            <Image
              src={"/icons/LinkedIn.svg"}
              alt="GitHub"
              height={100}
              width={100}
              className="transition-transform duration-300 hover:scale-104 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
