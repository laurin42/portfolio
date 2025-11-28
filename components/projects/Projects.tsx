"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data/projects";

export default function Projects() {
  return (
    <section className="relative w-full h-full">
      {projects.map((project) => (
        <div key={project.title}>
          <div className="hidden sm:h-[16vh]"></div>
          <ProjectCard project={project} />
        </div>
      ))}
    </section>
  );
}
