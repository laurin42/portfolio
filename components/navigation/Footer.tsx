import Link from "next/link";

export default function Footer() {
  return (
    <section className="min-h-16 max-h-32svh w-full flex flex-col justify-center items-center">
      <Link href="impressum">Impressum</Link>
    </section>
  );
}
