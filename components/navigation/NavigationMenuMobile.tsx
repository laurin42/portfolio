"use client";

import { IoMenu as Menu, IoClose as Close } from "react-icons/io5";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export default function MyNavigationMenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "#legal", label: "Legal Notice / Impressum" },
  ];

  return (
    <div className="md:hidden">
      <nav className="flex justify-end">
        <button onClick={() => setIsOpen(true)} aria-label="Open menu">
          <Menu className="w-12 h-12" />
        </button>
      </nav>

      <div
        className={`
          fixed top-0 left-0 w-full h-screen bg-background p-4 z-10 flex flex-col
          transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }
        `}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="self-end mb-4"
          aria-label="Close menu"
        >
          <Close className="w-12 h-12" />
        </button>

        <ul className="h-svh flex flex-col items-center justify-center pb-16 text-2xl">
          <div className="py-4">
            <ThemeToggle />
          </div>
          {menuItems.map((item) => (
            <li
              key={item.href}
              className="flex justify-center border-t last:border-b border-dashed w-full py-12"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
