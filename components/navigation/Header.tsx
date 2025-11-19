"use client";

import { motion } from "motion/react";
import MyNavigationMenuDesktop from "./NavigationMenuDesktop";
import MyNavigationMenuMobile from "./NavigationMenuMobile";

export default function Header({ isMenuVisible }: { isMenuVisible: boolean }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={isMenuVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: 0.0 }}
      className="fixed top-0 left-0 w-full z-50 p-4  flex justify-between items-center font-funnel bg-background backdrop-blur-2xl"
    >
      <div className="w-full flex justify-end md:justify-center">
        <MyNavigationMenuDesktop />
        <MyNavigationMenuMobile />
      </div>
    </motion.header>
  );
}
