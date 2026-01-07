export default function Footer({
  onImpressumClick,
}: {
  onImpressumClick: () => void;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="min-h-16 max-h-32svh w-full flex flex-col justify-center items-center font-funnel text-center p-4">
      <button
        onClick={(e) => {
          e.preventDefault();
          onImpressumClick();
        }}
        className="text-sm hover:text-accent transition-colors duration-200 cursor-pointer"
      >
        Impressum & Datenschutz
      </button>

      <p className="text-sm text-muted-foreground">
        &copy; {currentYear} Laurin Schmidt. All rights reserved.
      </p>
    </footer>
  );
}
