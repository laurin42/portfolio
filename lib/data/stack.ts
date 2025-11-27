  export interface Icon {
  src: string;
  alt: string;
}
  
  export const FrontendIcons: Icon[] = [
    { src: "/icons/frontendIcons/next.svg", alt: "Next.js" },
    { src: "/icons/frontendIcons/react.svg", alt: "React" },
    { src: "/icons/frontendIcons/django.svg", alt: "Django" },
    { src: "/icons/frontendIcons/typescript.svg", alt: "TypeScript" },
    { src: "/icons/frontendIcons/javascript.svg", alt: "JavaScript" },
    { src: "/icons/frontendIcons/html.svg", alt: "HTML" },
    { src: "/icons/frontendIcons/Css.svg", alt: "CSS" },
  ];

  export const BackendIcons: Icon[] = [
    { src: "/icons/backendIcons/node.js.svg", alt: "Node.js" },
    { src: "/icons/backendIcons/express.svg", alt: "Express" },
    { src: "/icons/backendIcons/postgresSQL.svg", alt: "PostgresSQL" },
    { src: "/icons/backendIcons/drizzle.svg", alt: "Drizzle ORM" },
  ];

  export const DevToolsIcons: Icon[] = [
    { src: "/icons/devTools/git.svg", alt: "Git" },
    { src: "/icons/devTools/Github.svg", alt: "GitHub" },
    { src: "/icons/devTools/docker.svg", alt: "Docker" },
    { src: "/icons/devTools/coolify.svg", alt: "Coolify" },
  ];

  export const blocks = [
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