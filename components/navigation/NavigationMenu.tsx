import {
  Root,
  List,
  Item,
  Link,
  Viewport,
  Indicator,
} from "@radix-ui/react-navigation-menu";

export default function MyNavigationMenu() {
  return (
    <Root className="p-4 border border-accent/20 rounded-md">
      <List className="flex gap-x-8">
        <Item>
          <Link
            className="text-2xl font-thinhover:text-accent/80 transition-colors duration-150"
            href="#home"
          >
            Home
          </Link>
        </Item>
        <Item>
          <Link
            className="text-2xl font-thin hover:text-accent/80 transition-colors duration-150"
            href="#projects"
          >
            Projects
          </Link>
        </Item>

        <Item>
          <Link
            className="text-2xl font-thin hover:text-accent/80 transition-colors duration-150"
            href="#contact"
          >
            Contact
          </Link>
        </Item>

        <Item>
          <Link
            className="text-2xl font-thin hover:text-accent/80 transition-colors duration-150"
            href="#imprint"
          >
            Legal Notice / Impressum
          </Link>
        </Item>

        <Indicator />
      </List>

      <Viewport />
    </Root>
  );
}
