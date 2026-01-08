"use client";

interface ExperienceBlockMobile {
  experience: {
    title: string;
    period: string;
    company: string;
    description: string;
    tags: string[];
  };
  background: string;
}

export default function ExperienceBlockMobile({
  experience,
  background,
}: ExperienceBlockMobile) {
  return (
    <div
      className={`w-full h-full flex flex-col justify-center items-center font-funnel ${background}`}
    >
      <div className="animate-inside h-svh pl-4">
        <div className="w-full sm:max-w-3xl h-full mx-auto bg-background pl-12 p-6 rounded-xs flex flex-col justify-center items-center">
          <h3 className="w-fit self-start text-3xl sm:text-4xl bg-foreground text-background text-left p-1 mb-1 font-semibold">
            {experience.title}
          </h3>
          <p className="w-full text-left font-thin  mb-16">
            {experience.period}
          </p>
          <p className="w-fit self-start text-left bg-foreground text-background text-xl py-1 px-0.5 mb-2">
            {experience.company}
          </p>

          <p className="sm:text-xl text-muted-foreground mb-8 pr-8">
            {experience.description}
          </p>
          <div className="flex flex-wrap justify-start gap-2 pr-8">
            {experience.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs border border-foreground/32"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
