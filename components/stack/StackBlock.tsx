"use client";
import Image from "next/image";
import { Icon } from "@/lib/data/stack";

interface StackBlockProps {
  title: string;
  text: string;
  icons: Icon[];
  bgColor?: string;
}

export default function StackBlock({
  title,
  text,
  icons,
  bgColor,
}: StackBlockProps) {
  return (
    <div
      className={`h-screen px-8 flex flex-col items-center justify-center text-white font-funnel ${bgColor}`}
    >
      <h2 className="text-3xl sm:text-7xl text-center flex-nowrap tracking-wide font-funnel bg-black p-1 sm:p-2">
        {title}
      </h2>
      <p className="font-thin text-2xl sm:pt-4 pb-1 mb-8 border-b border-black/32 text-black text-center">
        {text}
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {icons.map((icon) => (
          <div
            key={icon.alt}
            className="shrink-0 w-1/7 h-9 sm:w-14 sm:h-14 transition-transform duration-300 hover:scale-105"
            title={icon.alt}
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              width={100}
              height={100}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
