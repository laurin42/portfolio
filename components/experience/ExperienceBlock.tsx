"use client";

interface ExperienceBlockProps {
  experience: {
    title: string;
    period: string;
    company: string;
    description: string;
    tags: string[];
  };
  background: string;
}

export default function ExperienceBlock({
  experience,
  background,
}: ExperienceBlockProps) {
  return (
    <div
      className={`block w-full  will-transform flex justify-center font-funnel ${background}`}
    >
      <div className="animate-inside flex flex-col justify-center items-center">
        <div className="w-full sm:max-w-3xl sm:h-2/3 mx-auto text-center bg-background p-4 rounded-xs flex flex-col justify-center items-center gap-y-4">
          <p className="w-fit mx-auto bg-foreground text-sm sm:text-lg font-thin text-background p-1">
            {experience.period} | {experience.company}
          </p>
          <h3 className="w-fit mx-auto text-3xl sm:text-4xl border-b border-primary/50 font-semibold">
            {experience.title}
          </h3>
          <p className="text-xl text-muted-foreground">
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
