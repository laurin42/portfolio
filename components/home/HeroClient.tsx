"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <section
      className="
      h-svh w-full
      flex flex-row
      font-funnel
      animate-fadeIn
      relative
    "
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
        className="hidden sm:block sm:relative sm:w-1/3 sm:h-full"
      >
        <Image
          src="/images/hero/hero.webp"
          alt="Image of Laurin Schmidt – Webdeveloper"
          fill
          priority
          sizes="(max-width: 640px) 256px, 33vw"
          className="object-cover absolute bottom-0 left-0"
        />
      </motion.div>
      <div className="w-full sm:w-2/3 flex flex-col justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="relative h-64 w-64 mx-auto sm:hidden mb-8"
        >
          <Image
            src="/images/hero/hero.webp"
            alt="Image of Laurin Schmidt – Webdeveloper"
            priority
            fill
            sizes="256px"
            className="object-cover rounded-full"
          />
        </motion.div>
        <motion.h1
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.2, ease: "easeIn" }}
          style={{ transformOrigin: "bottom" }}
          className="text-3xl sm:text-3xl md:text-6xl lg:text-8xl text-center aninmate-fadeIn"
        >
          Hello<span className="text-accent">, </span>I am Laurin
          <span className="text-accent">.</span>
        </motion.h1>

        <CharacListAnimated onAnimationComplete={handleAnimationComplete} />

        <p
          className={`
        text-center text-lg sm:text-lg md:text-xl lg:text-2xl
        transition-opacity duration-300
        ${animationDone ? "opacity-100" : "opacity-0"}
      `}
        >
          based in Düsseldorf, Germany
        </p>
        <div
          className={`flex justify-center items-center gap-4 sm:gap-8 pt-6 sm:pt-8 
        transition-opacity duration-300
        ${animationDone ? "opacity-100" : "opacity-0"}
          `}
        >
          <div className="w-8 h-8 sm:w-14 sm:h-14">
            <Link href="https://github.com/laurin42" target="blank">
              <Image
                src={"/icons/devTools/Github.svg"}
                alt="GitHub"
                height={100}
                width={100}
                className="dark:invert transition-transform duration-300 hover:scale-104 cursor-pointer"
              />
            </Link>
          </div>
          <div className="w-8 h-8 sm:w-14 sm:h-14">
            <Link
              href="https://www.linkedin.com/in/laurin-schmidt-650008330/"
              target="blank"
            >
              <Image
                src={"/icons/LinkedIn.svg"}
                alt="GitHub"
                height={100}
                width={100}
                className="transition-transform duration-300 hover:scale-104 cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
