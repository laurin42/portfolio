import {
  Root,
  List,
  Item,
  Link,
  Viewport,
  Indicator,
} from "@radix-ui/react-navigation-menu";
import { ThemeToggle } from "./ThemeToggle";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

function NavItem({ href, children }: NavItemProps) {
  return (
    <Item className="group">
      <Link
        href={href}
        className="relative text-xl lg:text-2xl font-light group-hover:text-accent/80 transition-colors duration-150 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-[1%] after:w-full after:bg-accent 
               after:origin-left after:scale-x-0 
               after:transition-transform after:duration-500 after:ease-out 
               group-hover:after:scale-x-100"
      >
        {children}
      </Link>
    </Item>
  );
}

export default function MyNavigationMenuDesktop() {
  return (
    <div className="hidden md:block">
      <Root className="py-4 px-16 border-b-4 border-t-4 border-r-2 border-l-2 border-foreground">
        <List className="flex gap-x-8">
          <NavItem href="/">Home</NavItem>
          <NavItem href="stack">Stack</NavItem>
          <NavItem href="projects">Projects</NavItem>
          <NavItem href="experience">Experience</NavItem>
          <NavItem href="contact">Contact</NavItem>
          <ThemeToggle />

          <Indicator />
        </List>

        <Viewport />
      </Root>
    </div>
  );
}
