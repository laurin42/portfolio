"use client";

export default function Experience() {
  const experiences = [
    {
      title: "Beginning",
      description:
        "Internship at StartUp Werk in Oberhausen. Gained first insights. Time of learning fundamental concepts in programming",
    },
    {
      title: "It's getting serious",
      description:
        "8 Months Course Full Stack Webdeveloper. Getting deeper into the concepts. Focus on Python, HTML, CSS, Databases, Frameworks",
    },
    {
      title: "Self teaching",
      description:
        "exploring, learning through Projects. Really understand the overall picture I am moving in. try to learn something new everyday. Most growth in Knowledge for me comes through trying out",
    },
  ];

  return (
    <section className="w-full bg-background">
      {experiences.map((experience) => (
        <div
          key={experience.title}
          className="relative h-screen w-full flex flex-col justify-center items-center text-foreground text-center font-funnel px-4"
        >
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-5xl pb-2 mb-2 drop-shadow-sm border-b border-foreground/32">
              {experience.title}
            </h3>
            <p className="text-lg sm:text-2xl max-w-xl drop-shadow-lg">
              {experience.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
