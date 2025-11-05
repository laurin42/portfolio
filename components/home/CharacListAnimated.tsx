"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const characteristics = ["curious", "dedicated", "adaptable", "Laurin"];

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
            setTimeout(animateNext, 1200);
          } else {
            setTimeout(() => {
              if (onAnimationComplete) {
                onAnimationComplete();
              }
            }, 1200);
          }
        },
      });
    };

    setTimeout(animateNext, 1200);
  }, [onAnimationComplete]);

  return (
    <span
      role="text"
      aria-live="polite"
      className="inline-block h-24 overflow-hidden align-bottom"
    >
      <ul ref={listRef} className="list-none m-0 p-0">
        {characteristics.map((charac, id) => (
          <li
            key={id}
            className={`pl-6 h-24 flex items-center justify-start text-4xl sm:text-8xl transition-opacity duration-300 ${
              id >= activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {charac}
            <span className="text-accent">.</span>
          </li>
        ))}
      </ul>
    </span>
  );
}
