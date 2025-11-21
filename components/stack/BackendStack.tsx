import Image from "next/image";

export default function BackendStack() {
  const stackIcons = [
    { src: "/backendIcons/node.js.svg", alt: "Node" },
    { src: "/backendIcons/express.svg", alt: "Express" },
    { src: "/backendIcons/postgresSQL.svg", alt: "PostgresSQL" },
    { src: "/backendIcons/drizzle.svg", alt: "Drizzle ORM" },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-background">
      <h2 className="text-3xl sm:text-5xl pb-2 mb-4 drop-shadow-lg font-funnel w-fit border-b border-foreground/32">
        Backend Stack
      </h2>
      <div className="flex gap-4 sm:gap-8 flex-wrap justify-center items-center">
        {stackIcons.map((icon) => (
          <div key={icon.alt} className="w-4 h-4 sm:w-12 sm:h-12 dark:invert">
            <Image src={icon.src} alt={icon.alt} height={100} width={100} />
          </div>
        ))}
      </div>
    </section>
  );
}
