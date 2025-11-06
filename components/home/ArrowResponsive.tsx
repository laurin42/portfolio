"use client";

import { motion } from "motion/react";
import React from "react";

interface ArrowResponsiveProps {
  fromText?: string;
  toText?: string;
}

const arrowVariants = {
  hidden: { x2: "0%" },
  visible: { x2: "100%", transition: { duration: 0.8 } },
};

export default function ArrowResponsive({}: ArrowResponsiveProps) {
  const strokeLight = "stroke-white stroke-[2]";
  const fillLight = "fill-white";
  const strokeDark = "stroke-[#1B2C33] stroke-[2]";

  return (
    <div className="flex items-center shrink">
      <div className="grow">
        <svg className="w-full h-2.5" preserveAspectRatio="none">
          <motion.line
            x1="0%"
            y1="50%"
            x2="0%"
            y2="50%"
            className={strokeLight}
            initial="hidden"
            animate="visible"
            variants={arrowVariants}
          />
          <motion.svg
            style={{ overflow: "visible" }}
            x="100%"
            y="0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.2 }}
          >
            <line x1="-10" y1="50%" x2="0" y2="50%" className={strokeDark} />
            <polygon points="-10,0 0,5 -10,10" className={fillLight} />
          </motion.svg>
        </svg>
      </div>
      Webdeveloper
    </div>
  );
}
