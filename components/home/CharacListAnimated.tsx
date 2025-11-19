"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import gsap from "gsap";

const characteristics = [
  "",
  "curious",
  "dedicated",
  "adaptable",
  "",
  "",
  "webdeveloper",
];

export default function CharacteristicsListAnimated({
  onAnimationComplete,
}: {
  onAnimationComplete?: () => void;
}) {
  const listRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const onCompleteRef = useRef(onAnimationComplete);

  useEffect(() => {
    onCompleteRef.current = onAnimationComplete;
  });

  useEffect(() => {
    if (!listRef.current) return;

    const liHeight = listRef.current.children[0].clientHeight;
    let index = 0;

    const animateNext = () => {
      if (index >= characteristics.length - 1) return;
      const isLastCharac = index === characteristics.length - 1;

      if (isLastCharac) {
        if (onAnimationComplete) {
          onAnimationComplete();
        }
        return;
      }

      index += 1;
      setActiveIndex(index);

      gsap.to(listRef.current, {
        y: -index * liHeight,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          if (index < characteristics.length - 1) {
            setTimeout(animateNext, 300);
          } else {
            setTimeout(() => {
              if (onAnimationComplete) {
                onAnimationComplete();
              }
            }, 300);
          }
        },
      });
    };

    setTimeout(animateNext, 300);
  }, [onAnimationComplete]);

  return (
    <motion.h2
      role="text"
      aria-live="polite"
      className="inline-block h-10 sm:h-36px overflow-hidden align-bottom"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <ul ref={listRef} className="list-none m-0 p-0">
        {characteristics.map((charac, id) => (
          <li
            key={id}
            className={`h-10 sm:h-35px w-full flex items-center justify-end text-accent text-md sm:text-xl md:text-2xl lg:text-4xl transition-opacity duration-300 ${
              id >= activeIndex ? "opacity-100" : "opacity-0"
            } `}
          >
            {id === characteristics.length - 1 && id === activeIndex ? (
              <>{charac}</>
            ) : (
              <>{charac}</>
            )}
          </li>
        ))}
      </ul>
    </motion.h2>
  );
}
