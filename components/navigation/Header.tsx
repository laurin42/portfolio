"use client";

import { motion } from "motion/react";
import MyNavigationMenu from "./NavigationMenu";

export default function Header({ isMenuVisible }: { isMenuVisible: boolean }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={isMenuVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center font-funnel"
    >
      <div className="w-full flex justify-end-safe">
        <MyNavigationMenu />
      </div>
    </motion.header>
  );
}
