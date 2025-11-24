import Image from "next/image";

export default function FrontendStack() {
  const stackIcons = [
    { src: "icons/frontendIcons/react.svg", alt: "React" },
    { src: "icons/frontendIcons/django.svg", alt: "Django" },
    { src: "icons/frontendIcons/typescript.svg", alt: "TypeScript" },
    { src: "icons/frontendIcons/javascript.svg", alt: "JavaScript" },
    { src: "icons/frontendIcons/python.svg", alt: "Python" },
    { src: "icons/frontendIcons/html.svg", alt: "HTML" },
    { src: "icons/frontendIcons/css.svg", alt: "CSS" },
    { src: "icons/frontendIcons/tailwindcss.svg", alt: "Tailwind CSS" },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-background">
      <h2 className="text-3xl sm:text-4xl pb-1 mb-2 font-funnel w-fit border-b border-foreground/32">
        Frontend
      </h2>
      <div className="flex gap-4 sm:gap-8 flex-wrap justify-center items-center">
        {stackIcons.map((icon) => (
          <div key={icon.alt} className="w-6 h-6 sm:w-12 sm:h-12">
            <Image
              src={icon.src}
              alt={icon.alt}
              height={100}
              width={100}
              className=""
            />
          </div>
        ))}
      </div>
    </section>
  );
}
