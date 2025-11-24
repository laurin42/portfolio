import Image from "next/image";

export default function BackendStack() {
  const stackIcons = [
    { src: "icons/backendIcons/node.js.svg", alt: "Node" },
    { src: "icons/backendIcons/express.svg", alt: "Express" },
    { src: "icons/backendIcons/postgresSQL.svg", alt: "PostgresSQL" },
    { src: "icons/backendIcons/drizzle.svg", alt: "Drizzle ORM" },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-background">
      <h2 className="text-3xl sm:text-4xl pb-1 mb-2 drop-shadow-lg font-funnel w-fit border-b border-foreground/32">
        Backend
      </h2>
      <div className="flex gap-4 sm:gap-8 flex-wrap justify-center items-center">
        {stackIcons.map((icon) => (
          <div key={icon.alt} className="w-6 h-6 sm:w-12 sm:h-12 dark:invert">
            <Image src={icon.src} alt={icon.alt} height={100} width={100} />
          </div>
        ))}
      </div>
    </section>
  );
}
