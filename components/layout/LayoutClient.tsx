"use client";

import { useState, useCallback } from "react";
import HeroClient from "../home/HeroClient";
import Header from "../navigation/Header";
import FrontendStack from "../stack/FrontendStack";
import BackendStack from "../stack/BackendStack";
import Projects from "../projects/Projects";
import Experience from "../experience/Experience";
import Contact from "../contact/Contact";
import Footer from "../navigation/Footer";

export default function LayoutClient() {
  const [animationDone, setAnimationDone] = useState(false);
  const handleAnimationComplete = useCallback(() => {
    setAnimationDone(true);
  }, []);
  return (
    <>
      <Header isMenuVisible={animationDone} />
      <HeroClient onAnimationComplete={handleAnimationComplete} />
      <FrontendStack />
      <BackendStack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
