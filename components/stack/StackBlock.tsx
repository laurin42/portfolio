"use client";
import Image from "next/image";
import { Icon } from "@/lib/data/stack";
import { motion } from "motion/react";

interface StackBlockProps {
  title: string;
  text: string;
  icons: Icon[];
  bgColor?: string;
}

export default function StackBlock({
  title,
  text,
  icons,
  bgColor,
}: StackBlockProps) {
  return (
    <div
      className={`h-screen px-8 flex flex-col items-center justify-center text-white font-funnel 
        ${bgColor}`}
    >
      <motion.h2
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        style={{ transformOrigin: "bottom" }}
        className="text-3xl sm:text-7xl text-center w-fit mx-auto flex-nowrap tracking-wide font-funnel bg-black p-1 mb-4"
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="font-thin text-2xl sm:pt-4 pb-1 mb-8 text-black text-center"
      >
        {text}
      </motion.p>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {icons.map((icon) => (
          <motion.div
            key={icon.alt}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            style={{ transformOrigin: "bottom" }}
            className="shrink-0 w-1/7 h-9 sm:w-14 sm:h-14 transition-transform duration-300 hover:scale-105"
            title={icon.alt}
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              width={100}
              height={100}
              style={{ width: "100%", height: "100%" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
