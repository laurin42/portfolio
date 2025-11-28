import { experiences, backgroundsMobile } from "@/lib/data/experiences";
import ExperienceBlockMobile from "./ExperienceBlockMobile";

export default function ExperienceMobile() {
  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col h-full">
        {experiences.map((exp, i) => (
          <ExperienceBlockMobile
            key={i}
            experience={exp}
            background={backgroundsMobile[i % backgroundsMobile.length]}
          />
        ))}
      </div>
    </section>
  );
}
