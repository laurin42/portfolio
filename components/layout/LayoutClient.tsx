"use client";

import { useState, useCallback } from "react";
import HeroClient from "../home/HeroClient";
import Header from "../navigation/Header";

export default function LayoutClient() {
  const [animationDone, setAnimationDone] = useState(false);
  const handleAnimationComplete = useCallback(() => {
    setAnimationDone(true);
  }, []);
  return (
    <>
      <Header isMenuVisible={animationDone} />
      <HeroClient onAnimationComplete={handleAnimationComplete} />
    </>
  );
}
