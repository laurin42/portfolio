"use client";

import { useEffect, useRef, useState } from "react";

const characteristics = [
  "",
  "curious",
  "dedicated",
  "adaptable",
  "",
  "webdeveloper",
];

export default function CharacListAnimated({
  onAnimationComplete,
}: {
  onAnimationComplete?: () => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let index = 0;

    const run = () => {
      if (index >= characteristics.length - 1) {
        setActiveIndex(index);
        if (onAnimationComplete) onAnimationComplete();
        return;
      }

      index++;
      setActiveIndex(index);

      timerRef.current = setTimeout(run, 800);
    };

    timerRef.current = setTimeout(run, 600);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [onAnimationComplete]);

  return (
    <h2
      role="text"
      className="inline-block h-10 sm:h-36px overflow-hidden align-bottom"
    >
      {characteristics.map((charac, id) =>
        id === activeIndex ? (
          <div
            key={id}
            className="
              h-10 sm:h-35px w-full flex items-center justify-end
              text-accent text-md sm:text-xl md:text-2xl lg:text-4xl
              animate-fadeInRight
            "
          >
            {charac}
          </div>
        ) : null
      )}
    </h2>
  );
}
