"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface Props {
  index: number;
  length: number;
  scrollYProgress: MotionValue<number>;
  experience: {
    title: string;
    period: string;
    company: string;
    description: string;
    tags: string[];
  };
}

export default function ExperienceItem({
  index,
  length,
  scrollYProgress,
  experience,
}: Props) {
  const start = index / length;
  const end = (index + 1) / length;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);

  const y = useTransform(scrollYProgress, [start, end], ["0vh", "40vh"]);

  return (
    <motion.div
      className="sticky top-0 h-screen flex items-center justify-center px-4 font-funnel bg-foreground"
      style={{ opacity, y, zIndex: index + 1 }}
    >
      <div className="max-w-5xl w-full text-center">
        <p className="mb-1 text-sm sm:text-lg">
          {experience.period} | {experience.company}
        </p>

        <h3 className="text-3xl sm:text-5xl pb-2 mb-4 font-semibold max-w-2xl mx-auto">
          {experience.title}
        </h3>

        <p className="text-base sm:text-xl mb-6 max-w-2xl mx-auto leading-relaxed">
          {experience.description}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {experience.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-medium border">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
