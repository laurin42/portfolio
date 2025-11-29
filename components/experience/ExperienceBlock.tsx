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
        <div className="w-full sm:max-w-3xl sm:h-2/3 mx-auto text-center bg-background p-4 px-8 rounded-xs flex flex-col justify-center items-center">
          <h3 className="w-fit self-start bg-foreground text-background text-4xl sm:text-5xl border-b border-primary/50 font-semibold">
            {experience.title}
          </h3>
          <em className="w-full self-start text-left text-sm sm:text-lg text-foreground font-thin p-1 mb-8">
            {experience.period}
          </em>

          <p className="self-start bg-foreground text-background text-xl mb-2 ">
            {experience.company}
          </p>
          <p className="text-xl text-muted-foreground text-left mb-16">
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
