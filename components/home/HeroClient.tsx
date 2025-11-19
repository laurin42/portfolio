"use client";

import { useState, useCallback } from "react";
import CharacListAnimated from "./CharacListAnimated";
import { motion } from "motion/react";

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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="h-svh px-4 flex flex-col justify-center items-center font-funnel"
    >
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl sm:text-8xl text-left">
          Hello<span className="text-accent">, </span>I am Laurin
          <span className="text-accent">.</span>
        </h1>
        <CharacListAnimated onAnimationComplete={handleAnimationComplete} />
        <p
          className={`${
            animationDone ? "opacity-100" : "opacity-0"
          } text-right text-2xl transition-opacity duration-300`}
        >
          based in Düsseldorf, Germany
        </p>
      </div>
    </motion.section>
  );
}
