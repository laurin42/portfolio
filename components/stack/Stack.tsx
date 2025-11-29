"use client";
import StackBlock from "./StackBlock";
import { blocks } from "@/lib/data/stack";

interface StackProps {
  id?: string;
}

export default function Stack({ id }: StackProps) {
  return (
    <section className="relative w-full" id={id}>
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
