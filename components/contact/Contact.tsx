import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center items-center font-funnel">
        <Link href="mailto:lauri.schmidt@proton.me" target="blank">
          <h2 className="text-5xl sm:text-9xl text-center pb-4 mx-16 sm:mx-0 mb-2  border-b-4 border-accent/64 font-extrabold bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">
            Contact Me Today
          </h2>
        </Link>
        <p className="text-md text-muted-foreground sm:text-3xl pb-4 sm:pb-0 max-w-xl">
          Let&apos;s build something great together
        </p>
        <div className="flex gap-8 pt-4 sm:pt-16">
          <Link
            href="mailto:laurin.schmidt@proton.me"
            target="blank"
            className=""
          >
            <div className="h-16 w-16">
              <Image
                src={"/icons/mail.svg"}
                alt="Mail"
                height={100}
                width={100}
                className="dark:invert object-contain"
              />
            </div>
          </Link>
          <Link href="https://github.com/laurin42" target="blank">
            <div className="h-16 w-16">
              <Image
                src={"/icons/devTools/Github.svg"}
                alt="GitHub"
                height={100}
                width={100}
                className="dark:invert object-contain"
              />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
