"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProjectCardType = {
  title: string;
  description: string;
  link?: string;
  screenshots?: string[];
  details?: string[];
  icons?: string[];
};

export default function ProjectCard({ project }: { project: ProjectCardType }) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full min-h-svh will-transform flex justify-center items-center">
      <Card
        ref={cardRef}
        className={`relative
          min-h-2/3 sm:h-full
          w-7/8 sm:w-2/3 xl:w-1/2
          text-accent-foreground
          text-center
          font-funnel
          mb-6
          transition-all duration-800
        `}
      >
        <CardHeader>
          <CardTitle
            className={`text-3xl sm:text-4xl transition-opacity duration-1200 w-fit mx-auto pb-2 mb-1 border-b border-foreground/32
          `}
          >
            {project.link && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 100 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Link
                  href={project.link}
                  target="blank"
                  className="hover:text-accent transition-opacity duration-1200"
                >
                  {project.title}
                </Link>
              </motion.div>
            )}
          </CardTitle>

          <CardDescription
            className={`text-md sm:text-xl pb-4 sm:pb-0 max-w-xl mx-auto transition-opacity duration-1400
              `}
          >
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent
          className={`px-0 flex justify-center items-end transition-opacity duration-1600 
          `}
        >
          {project.screenshots?.[0] && (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="relative w-full max-w-3xl aspect-16/10"
            >
              <Image
                src={project.screenshots[0]}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 90vw"
                className="object-contain"
              />
            </motion.div>
          )}
          {project.screenshots?.[1] && (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="relative w-1/3 sm:w-1/4 aspect-9/19 -ml-20 z-20"
            >
              <Image
                src={project.screenshots[1]}
                alt={`${project.title} mobile mockup`}
                fill
                sizes="(min-width: 1024px) 25vw, 40vw"
                className="object-contain"
                loading="lazy"
              />
            </motion.div>
          )}
          {project.icons &&
            project.icons.map((src, i) => (
              <div key={i} className="p-8">
                <Image
                  src={src}
                  alt="icon"
                  width={100}
                  height={100}
                  className="w-12 h-12 sm:w-24 sm:h-24 dark:invert"
                />
              </div>
            ))}
        </CardContent>

        <CardFooter
          className={`pt-4 flex flex-col justify-center transition-opacity duration-1800 ease-out`}
        >
          {project.details && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
            >
              <CardDescription className="text-balance text-lg">
                {project.details}
              </CardDescription>
            </motion.div>
          )}
          {project.link && project.screenshots && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
            >
              <Link
                href={project.link}
                target="_blank"
                className="hover:text-accent transition-opacity duration-2200 underline"
              >
                Visit project
              </Link>
            </motion.div>
          )}
          {project.link && !project.screenshots && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8, ease: "easeInOut" }}
            >
              <Link
                href={project.link}
                target="_blank"
                className="hover:text-accent transition-opacity duration-2200 underline"
              >
                Visit Profile
              </Link>
            </motion.div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
