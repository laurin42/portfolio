"use client";

import { useEffect, useState } from "react";
import NavigationMenu from "./NavigationMenu";
import { ThemeToggle } from "./ThemeToggle";

export default function Header({
  isMenuVisible,
  activeSection,
  smoothScrollRef,
}: {
  isMenuVisible: boolean;
  activeSection: string;
  smoothScrollRef: React.RefObject<ScrollSmoother | null>;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(isMenuVisible), 10);
    return () => clearTimeout(timer);
  }, [isMenuVisible]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-49 p-2 flex justify-between items-center font-funnel bg-background sm:bg-transparent
        transition-opacity duration-300 
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >
      <div className="w-full flex justify-end">
        <ThemeToggle activeSection={activeSection} />
        <NavigationMenu
          activeSection={activeSection}
          smoothScrollRef={smoothScrollRef}
        />
      </div>
    </header>
  );
}
