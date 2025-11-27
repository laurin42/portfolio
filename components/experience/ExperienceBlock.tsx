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
      className={`block w-full will-transform flex justify-center font-funnel ${background}`}
    >
      <div className="animate-inside sm:flex sm:flex-col justify-center items-center">
        <div className="w-full sm:max-w-3xl h-svh sm:h-2/3 mt-16 sm:mt-0 mx-auto text-center bg-background p-6 rounded-xs flex flex-col pt-16 px-16 sm:px-8">
          <p className="w-fit mx-auto bg-foreground text-sm sm:text-lg font-thin text-background p-2 mb-4">
            {experience.period} | {experience.company}
          </p>
          <h3 className="w-fit mx-auto text-3xl sm:text-4xl pb-2 mb-4 border-b border-primary/50 font-semibold">
            {experience.title}
          </h3>
          <p className="text-base pl-2 sm:text-xl text-muted-foreground mb-6 sm:mb-8">
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
