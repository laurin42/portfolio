import Image from "next/image";

export default function FrontendStack() {
  const stackIcons = [
    { src: "/frontendIcons/next.js.svg", alt: "Next.js" },
    { src: "/frontendIcons/react.svg", alt: "React" },
    { src: "/frontendIcons/django.svg", alt: "Django" },
    { src: "/frontendIcons/typescript.svg", alt: "TypeScript" },
    { src: "/frontendIcons/javascript.svg", alt: "JavaScript" },
    { src: "/frontendIcons/python.svg", alt: "Python" },
    { src: "/frontendIcons/html.svg", alt: "HTML" },
    { src: "/frontendIcons/css.svg", alt: "CSS" },
    { src: "/frontendIcons/tailwindcss.svg", alt: "Tailwind CSS" },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-background">
      <h2 className="text-3xl sm:text-5xl pb-2 mb-4 font-funnel w-fit border-b border-foreground/32">
        Frontend Stack
      </h2>
      <div className="flex gap-4 sm:gap-8 flex-wrap justify-center items-center">
        {stackIcons.map((icon) => (
          <div key={icon.alt} className="w-4 h-4 sm:w-12 sm:h-12">
            <Image src={icon.src} alt={icon.alt} height={100} width={100} />
          </div>
        ))}
      </div>
    </section>
  );
}
