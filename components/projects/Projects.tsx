"use client";

import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Wetterstrucksi.de",
      description: "No fluff. Just weather.",
      link: "https://wetterstrucksi.de",
      screenshots: [
        "/images/projects/wetterstrucksi/laptopMockup.png",
        "/images/projects/wetterstrucksi/mobileMockup.png",
      ],
      details: [
        "Modern, responsive redesign and migration from wordpress to ghost(headless) for hobby-metereologist Jens Strucks, improving the experience for his audience of 10,000+ followers.",
      ],
    },
    {
      title: "Burnheart Mockery",
      description: "Custom riffs online",
      link: "https://burnheart-mockery.de",
      screenshots: [
        "/images/projects/burnheartMockery/laptopMockup.png",
        "/images/projects/burnheartMockery/mobileMockup.png",
      ],
      details: [
        "A fully custom, responsive band website featuring a contact form, newsletter system, integrated audio player for the latest releases, and planned ticket sales via an in-house shop.",
      ],
    },
  ];

  return (
    <section className="min-h-screen">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </section>
  );
}
