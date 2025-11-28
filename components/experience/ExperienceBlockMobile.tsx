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
      className={`w-full h-svh flex pl-4 justify-center items-center font-funnel ${background}`}
    >
      <div className="animate-inside h-svh">
        <div className="w-full sm:max-w-3xl h-full mx-auto bg-background p-6 rounded-xs flex flex-col justify-center items-center">
          <p className="w-fit mx-auto bg-foreground text-sm sm:text-lg text-center font-thin text-background p-2 mb-4">
            {experience.period} | {experience.company}
          </p>
          <h3 className="w-fit mx-auto text-3xl sm:text-4xl text-center pb-2 mb-4 border-b border-primary/50 font-semibold">
            {experience.title}
          </h3>
          <p className="pl-2 sm:text-xl text-muted-foreground mb-6 sm:mb-8">
            {experience.description}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
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
