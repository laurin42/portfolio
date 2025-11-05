"use client";

import { useState, useCallback } from "react";
import CharacListAnimated from "./CharacListAnimated";
import { motion } from "motion/react";

export default function HeroClient() {
  const [animationDone, setAnimationDone] = useState(false);

  const handleAnimationComplete = useCallback(() => {
    setAnimationDone(true);
  }, []);

  const transition = {
    duration: 0.8,
    delay: 0.4,
  };

  return (
    <motion.section
      initial={false}
      whileInView="visible"
      transition={transition}
      className="h-svh flex flex-col justify-center items-center font-funnel"
    >
      <div className="flex flex-col max-w-fit">
        <h1 className="text-4xl w-full sm:text-8xl text-left">
          Hello<span className="text-accent">, </span>I am
          <CharacListAnimated onAnimationComplete={handleAnimationComplete} />
        </h1>
        <motion.h2
          initial={{ opacity: 0, y: 0 }}
          animate={animationDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-4 text-2xl sm:text-4xl font-semibold text-accent tracking-widest text-right"
        >
          Webdeveloper
        </motion.h2>
      </div>
    </motion.section>
  );
}
