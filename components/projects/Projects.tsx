"use client";

import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Wetterstrucksi.de",
      description:
        "Next.js local weather Website with headless Ghost API integration, responsive and dynamic UI.",
      link: "https://wetterstrucksi.de",
    },
    {
      title: "Burnheart Mockery",
      description: "Custom & Responsive Bandpage.",
      link: "https://burnheart-mockery.de",
    },
    {
      title: "Experimentation",
      description:
        "Various small projects to practice React, Next.js, and JavaScript concepts.",
      link: "https://github.com/laurin42",
    },
  ];

  return (
    <section className="w-full bg-background">
      {projects.map((project) => (
        <div
          key={project.title}
          className="relative h-screen w-full flex flex-col justify-center items-center text-foreground text-center font-funnel px-4"
        >
          <div className="relative z-10">
            {project.link ? (
              <Link
                href={project.link}
                target="_blank"
                className="hover:text-accent transition-colors duration-300"
              >
                <h3 className="text-3xl sm:text-5xl pb-2 mb-2 mx-auto drop-shadow-sm  w-fit border-b border-foreground/32">
                  {project.title}
                </h3>
              </Link>
            ) : (
              <h3 className="text-3xl sm:text-5xl pb-2 mb-2 drop-shadow-sm border-b border-foreground/32">
                {project.title}
              </h3>
            )}
            <p className="text-lg sm:text-2xl max-w-xl drop-shadow-lg">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
