"use client";

import { IoMenu as Menu, IoClose as Close } from "react-icons/io5";
import { useEffect, useRef, RefObject } from "react";
import gsap from "gsap";

export default function MyNavigationMenuMobile() {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const timeline: RefObject<GSAPTimeline | null> = useRef(null);

  useEffect(() => {
    if (!mobileMenuRef.current) return;

    gsap.set(mobileMenuRef.current, { autoAlpha: 0 });

    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(mobileMenuRef.current, {
        autoAlpha: 1,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .from("#close-icon", { autoAlpha: 0, duration: 0.2 }, "<0.1");
  }, []);

  const openMenu = () => timeline.current?.play();
  const closeMenu = () => timeline.current?.reverse();

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "#legal", label: "Legal Notice / Impressum" },
  ];

  return (
    <div className="md:hidden">
      <nav className="flex justify-end">
        <button id="menu-icon" onClick={openMenu}>
          <Menu className="w-12 h-12" />
        </button>
      </nav>

      <div
        ref={mobileMenuRef}
        className="fixed top-0 left-0 right-0 w-full h-screen bg-background p-4 z-10 flex flex-col"
      >
        <button id="close-icon" onClick={closeMenu} className="self-end">
          <Close className="w-12 h-12" />
        </button>

        <ul
          id="menu-links"
          className="h-svh flex flex-col items-center justify-center pb-16 text-2xl"
        >
          {menuItems.map((item) => (
            <li
              key={item.href}
              className="flex justify-center first:border-t border-b border-dashed w-full py-12"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
