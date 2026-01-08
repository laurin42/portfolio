"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data/projects";

export default function Projects() {
  return (
    <section className="relative w-full">
      {projects.map((project) => (
        <div key={project.title}>
          <ProjectCard project={project} />
        </div>
      ))}
    </section>
  );
}
