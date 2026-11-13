import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personalInfo, projects } from "../data/portfolioData";
import { GithubIcon, Magnetic, Reveal, SectionHeading, Tilt, ease, spotlightMove } from "./ui";

function ProjectCard({ project, index }) {
  const flip = index % 2 === 1;
  const ref = useRef(null);
  // Screenshot drifts slightly as the card moves through the viewport
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <article ref={ref} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <motion.div
        initial={{ opacity: 0, x: flip ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease }}
        className={flip ? "lg:order-2" : ""}
      >
        <Tilt max={6} className="rounded-2xl">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} live site`}
            className="group block overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl shadow-black/20 transition-colors hover:border-accent/60"
          >
            <div className="flex items-center gap-3 border-b border-line px-4 py-3">
              <span className="flex gap-1.5" aria-hidden="true">
                <i className="h-2.5 w-2.5 rounded-full bg-line transition-colors group-hover:bg-red-400" />
                <i className="h-2.5 w-2.5 rounded-full bg-line transition-colors delay-75 group-hover:bg-amber-400" />
                <i className="h-2.5 w-2.5 rounded-full bg-line transition-colors delay-150 group-hover:bg-emerald-400" />
              </span>
              <span className="truncate rounded-md bg-raised px-3 py-1 font-mono text-[11px] text-muted">
                {project.host}
              </span>
            </div>
            <div className="relative overflow-hidden">
              <motion.img
                src={project.image}
                alt={`Screenshot of the ${project.title} website`}
                width="1440"
                height="900"
                loading="lazy"
                style={{ y }}
                className="aspect-[16/10] w-full scale-[1.12] object-cover object-top transition-[scale] duration-700 group-hover:scale-[1.18]"
              />
              <span className="pointer-events-none absolute bottom-4 right-4 inline-flex translate-y-3 items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                Open site <ArrowUpRight size={15} />
              </span>
            </div>
          </a>
        </Tilt>
      </motion.div>

      <div>
        <Reveal as="p" className="font-mono text-xs uppercase tracking-[0.2em] text-dim">
          <span className="text-accent">{String(index + 1).padStart(2, "0")}</span> - {project.kind}
        </Reveal>
        <Reveal
          as="h3"
          delay={0.08}
          className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl"
        >
          {project.title}
        </Reveal>
        <Reveal as="p" delay={0.16} className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
          {project.description}
        </Reveal>
        <Reveal as="ul" delay={0.24} className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-line px-3.5 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
            >
              {t}
            </li>
          ))}
        </Reveal>
        <Reveal delay={0.32} className="mt-8">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="link-underline group inline-flex items-center gap-2 pb-1 font-medium text-accent"
          >
            Visit live site
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl overflow-x-clip px-5 py-24 md:px-8 md:py-32">
      <SectionHeading index="03" label="Selected work" title="Websites I've designed, built and deployed." />

      <div className="space-y-20 md:space-y-28">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>

      <Reveal
        onMouseMove={spotlightMove}
        className="spotlight mt-20 flex flex-col items-start justify-between gap-5 overflow-hidden rounded-3xl border border-line bg-panel p-7 md:flex-row md:items-center md:p-9"
      >
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight">More on GitHub</h3>
          <p className="mt-1.5 text-muted">Experiments, practice projects and the code behind this portfolio.</p>
        </div>
        <Magnetic className="shrink-0">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-raised px-6 py-3.5 font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon />
            View profile
          </a>
        </Magnetic>
      </Reveal>
    </section>
  );
}
