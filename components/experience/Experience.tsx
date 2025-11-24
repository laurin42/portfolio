"use client";

"use client";

const experiences = [
  {
    title: "Internship & Foundational Technical Skills",
    period: "May 2024",
    company: "StartUp Werk | Oberhausen",
    description:
      "Entry into software development by contributing to smaller internal projects. Focus on code structuring and acquiring fundamental database concepts (SQL), as well as proficiency in version control (Git).",
    tags: ["HTML", "CSS", "JavaScript", "Git"],
  },
  {
    title: "Intensive Full-Stack Training",
    period: "July 2024 – March 2025",
    company: "8-Month Bootcamp/Course",
    description:
      "In-depth training as a Full-Stack Web Developer. Core competencies included Backend development with Python and the Django Framework, and utilizing database modeling (ORM) for scalable web applications.",
    tags: [
      "Python",
      "Django",
      "Databases(SQL)",
      "HTML",
      "Tailwind CSS & SASS",
      "JavaScript",
      "REST APIs",
    ],
  },
  {
    title: "Project-Based Self-Study & Specialization",
    period: "March 2025 – Present",
    company: "Independent Projects",
    description:
      "Self-directed specialization in modern Frontend and the React/Next.js and TypeScript ecosystems. Development of personal projects aimed at establishing clean code practices and mastering modern state management concepts. Goal: Continuous growth through practical application.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
      "PostgreSQL",
      "Node.js",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-background text-foreground">
      {experiences.map((experience) => (
        <div
          key={experience.title}
          className="relative min-h-screen max-w-5xl mx-auto flex flex-col justify-center items-center font-funnel px-4 py-24"
        >
          <div className="relative z-10 w-full text-center">
            <p className="text-sm sm:text-lg text-primary/70 mb-1">
              {experience.period} | {experience.company}
            </p>

            <h3
              className="max-w-2xl mx-auto text-3xl sm:text-5xl pb-2 mb-4 
                           drop-shadow-sm border-b border-primary/50 font-semibold"
            >
              {experience.title}
            </h3>

            <p className="text-base sm:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto drop-shadow-lg leading-relaxed">
              {experience.description}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {experience.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
