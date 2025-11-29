"use client";

import { IoMenu as Menu, IoClose as Close } from "react-icons/io5";
import { useState } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export default function NavigationMenu({
  activeSection,
  smoothScrollRef,
}: {
  activeSection: string;
  smoothScrollRef: React.RefObject<ScrollSmoother | null>;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (id: string) => {
    if (!smoothScrollRef.current) return setIsOpen(false);

    const targetId = id === "/" ? "home" : id;
    const target = document.getElementById(targetId);

    if (target) {
      smoothScrollRef.current.scrollTo(target, true);
    } else if (targetId === "home") {
      smoothScrollRef.current.scrollTo(0, true);
    }

    setIsOpen(false);
  };
  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#stack", label: "Stack" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const isStackActive = activeSection === "stack";

  return (
    <div>
      <nav
        className={`flex justify-end pr-4
          transition-colors duration-150
          ${
            isStackActive ? "text-foreground sm:text-black" : "text-foreground"
          }`}
      >
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="cursor-pointer"
        >
          <Menu className="w-12 h-12" />
        </button>
      </nav>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40"
        />
      )}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-2/3 bg-muted-foreground z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col px-6 sm:px-8 py-2`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="self-end curspor-pointer cursor-pointer"
          aria-label="Close menu"
        >
          <Close className="w-12 h-12" />
        </button>

        <ul className="h-full flex flex-col items-center justify-start sm:justify-center text-4xl sm:text-7xl space-y-2">
          {menuItems.map((item) => (
            <li
              key={item.href}
              className="flex justify-center w-full py-4 hover:text-accent-foreground/64 transition-colors duration-300 ease-in-out "
            >
              <button
                onClick={() => handleMenuClick(item.href.replace("#", ""))}
                className="cursor-pointer"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
