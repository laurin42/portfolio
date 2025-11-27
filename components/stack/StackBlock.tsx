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
  bgColor = "bg-muted-foreground",
}: StackBlockProps) {
  return (
    <div
      className={`h-screen flex flex-col items-center justify-center text-white font-funnel ${bgColor}`}
    >
      <h2 className="text-4xl sm:text-7xl tracking-wide font-funnel bg-black p-2">
        {title}
      </h2>
      <p className="font-thin text-3xl pt-4 pb-1 mb-8 border-b border-black/32 text-black">
        {text}
      </p>
      <div className="flex gap-8">
        {icons.map((icon) => (
          <div
            key={icon.alt}
            className="w-8 h-8 sm:w-14 sm:h-14 transition-transform duration-300 hover:scale-105"
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
