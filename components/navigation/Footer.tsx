import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="min-h-16 max-h-32svh w-full flex flex-col justify-center items-center font-funnel text-center p-4">
      <Link href="/impressum" className="mb-2">
        <h2>Impressum</h2>
      </Link>
      <p className="text-sm text-muted-foreground">
        &copy; {currentYear} Laurin Schmidt. All rights reserved.
      </p>
    </footer>
  );
}
