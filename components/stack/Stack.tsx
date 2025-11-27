"use client";
import StackBlock from "./StackBlock";
import { blocks } from "@/lib/data/stack";

interface StackProps {
  id?: string;
  ref?: (instance: HTMLElement | null) => void;
}

export default function Stack({ id, ref }: StackProps) {
  return (
    <section
      className="relative w-full"
      style={{ height: `${blocks.length * 100}vh` }}
      id={id}
      ref={ref}
    >
      {blocks.map((block) => (
        <StackBlock
          key={block.title}
          title={block.title}
          text={block.text}
          icons={block.icons}
          bgColor={block.bgColor}
        />
      ))}
    </section>
  );
}
