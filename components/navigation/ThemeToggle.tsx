"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle({ activeSection }: { activeSection: string }) {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="lg" style={{ visibility: "hidden" }} />
    );
  }

  const nextTheme = theme === "light" || theme === "system" ? "dark" : "light";

  const isStackActive = activeSection === "stack";

  return (
    <button
      onClick={() => setTheme(nextTheme)}
      aria-label="Toggle theme"
      className={`relative mx-2 cursor-pointer transition-colors duration-150 ${
        isStackActive ? "text-foreground sm:text-black" : "text-foreground"
      }`}
    >
      <Sun
        size={34}
        className="h-full w-full scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
      />
      <Moon
        size={34}
        className="absolute h-full w-full top-0 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
