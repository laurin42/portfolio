"use client";
import Image from "next/image";

interface Icon {
  src: string;
  alt: string;
}

interface StackProps {
  id?: string;
  ref?: (instance: HTMLElement | null) => void;
}

export default function Stack({
  id,
  ref,
}: StackProps): React.ReactElement | null {
  const FrontendIcons: Icon[] = [
    { src: "/icons/frontendIcons/next.svg", alt: "Next.js" },
    { src: "/icons/frontendIcons/react.svg", alt: "React" },
    { src: "/icons/frontendIcons/django.svg", alt: "Django" },
    { src: "/icons/frontendIcons/typescript.svg", alt: "TypeScript" },
    { src: "/icons/frontendIcons/javascript.svg", alt: "JavaScript" },
    { src: "/icons/frontendIcons/html.svg", alt: "HTML" },
    { src: "/icons/frontendIcons/Css.svg", alt: "CSS" },
  ];

  const BackendIcons: Icon[] = [
    { src: "/icons/backendIcons/node.js.svg", alt: "Node.js" },
    { src: "/icons/backendIcons/express.svg", alt: "Express" },
    { src: "/icons/backendIcons/postgresSQL.svg", alt: "PostgresSQL" },
    { src: "/icons/backendIcons/drizzle.svg", alt: "Drizzle ORM" },
  ];

  const DevToolsIcons: Icon[] = [
    { src: "/icons/devTools/git.svg", alt: "Git" },
    { src: "/icons/devTools/Github.svg", alt: "GitHub" },
    { src: "/icons/devTools/docker.svg", alt: "Docker" },
    { src: "/icons/devTools/coolify.svg", alt: "Coolify" },
  ];

  const blocks = [
    {
      title: "Frontend",
      text: "Specializing in modern React, Next.js & TypeScript development",
      icons: FrontendIcons,
      bgColor: "bg-muted-foreground",
    },
    {
      title: "Backend",
      text: "Building scalable Node.js & database solutions",
      icons: BackendIcons,
      bgColor: "bg-muted-foreground",
    },
    {
      title: "Development Tools",
      text: "Professional development workflow & deployment tools",
      icons: DevToolsIcons,
      bgColor: "bg-muted-foreground",
    },
  ];

  const renderIcons = (icons: Icon[]) =>
    icons.map((icon) => (
      <div
        key={icon.alt}
        className="w-8 h-8 sm:w-14 sm:h-14 transition-transform duration-300 hover:scale-104"
        title={icon.alt}
      >
        <Image
          src={icon.src}
          alt={icon.alt}
          width={100}
          height={100}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    ));

  return (
    <section
      className="relative w-full"
      style={{ height: `${blocks.length * 100}vh` }}
      id={id}
      ref={ref}
    >
      {blocks.map((block, index) => (
        <div
          key={block.title}
          className={`h-screen flex flex-col items-center justify-center text-white font-funnel ${block.bgColor}`}
          style={{ zIndex: index + 1 }}
        >
          <h2 className="text-4xl sm:text-7xl tracking-wide font-funnel bg-black p-2">
            {block.title}
          </h2>
          <p className="font-thin text-3xl pt-4 pb-1 mb-8 border-b border-black/32 text-black">
            {block.text}
          </p>
          <div className="flex gap-8">{renderIcons(block.icons)}</div>
        </div>
      ))}
    </section>
  );
}
