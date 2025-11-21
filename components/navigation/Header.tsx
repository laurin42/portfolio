"use client";

import { useEffect, useState } from "react";
import MyNavigationMenuDesktop from "./NavigationMenuDesktop";
import MyNavigationMenuMobile from "./NavigationMenuMobile";

export default function Header({ isMenuVisible }: { isMenuVisible: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(isMenuVisible), 10);
    return () => clearTimeout(timer);
  }, [isMenuVisible]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center font-funnel
        transition-opacity duration-300
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >
      <div className="w-full flex justify-end md:justify-center">
        <MyNavigationMenuDesktop />
        <MyNavigationMenuMobile />
      </div>
    </header>
  );
}
