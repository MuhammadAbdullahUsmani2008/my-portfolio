import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { marquee, personalInfo, roles } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon, Magnetic, RotatingWords, Tilt, WordReveal, ease } from "./ui";

const rise = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const socialClass =
  "grid h-12 w-12 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent";

export default function Hero() {
  // Glow that follows the cursor across the hero
  const mx = useMotionValue(-600);
  const my = useMotionValue(-600);
  const sx = useSpring(mx, { stiffness: 90, damping: 20 });
  const sy = useSpring(my, { stiffness: 90, damping: 20 });
  const glow = useMotionTemplate`radial-gradient(520px circle at ${sx}px ${sy}px, color-mix(in srgb, var(--color-accent) 14%, transparent), transparent 70%)`;

  const onMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <section id="top" onPointerMove={onMove} className="relative overflow-hidden pt-18">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 animate-drift rounded-full bg-accent-deep/20 blur-[140px]"
        aria-hidden="true"
      />
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: glow }} aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 md:px-8 md:pt-24 lg:grid-cols-[1.5fr_1fr] lg:gap-16 lg:pb-24">
        <div>
          <motion.p
            {...rise(0)}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/70 px-4 py-2 font-mono text-xs text-muted"
          >
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-emerald-400" />
            Open to opportunities &amp; collaborations
          </motion.p>

          <h1
            aria-label={personalInfo.name}
            className="mt-7 font-display text-[clamp(2.75rem,6.2vw,4.75rem)] font-semibold leading-[0.95] tracking-[-0.03em]"
          >
            <span aria-hidden="true">
              <WordReveal text="Muhammad" delay={0.1} />
              <br />
              <span className="whitespace-nowrap">
                <WordReveal text="Abdullah" delay={0.2} />{" "}
                <WordReveal text="Usmani" delay={0.3} wordClassName="text-gradient" />
              </span>
            </span>
          </h1>

          <motion.p {...rise(0.45)} className="mt-6 font-mono text-sm uppercase tracking-[0.2em] text-accent">
            <RotatingWords words={roles} />
          </motion.p>

          <motion.p {...rise(0.55)} className="mt-4 max-w-xl text-lg leading-relaxed text-muted text-pretty">
            {personalInfo.tagline}
          </motion.p>

          <motion.div {...rise(0.65)} className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-ink shadow-lg shadow-accent/20 transition-shadow hover:shadow-accent/40"
              >
                View my work
                <ArrowDown size={17} className="transition-transform group-hover:translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={personalInfo.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-6 py-3.5 font-medium transition-colors hover:border-accent hover:text-accent"
              >
                <Download size={17} />
                Resume
              </a>
            </Magnetic>
            <div className="flex items-center gap-2 sm:ml-2">
              <Magnetic strength={0.4}>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className={socialClass}
                >
                  <GithubIcon />
                </a>
              </Magnetic>
              <Magnetic strength={0.4}>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className={socialClass}
                >
                  <LinkedinIcon />
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease }}
          className="relative mx-auto w-full max-w-[340px] lg:max-w-none"
        >
          <div className="animate-float">
            <div
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/40 via-transparent to-accent-deep/40 blur-2xl"
              aria-hidden="true"
            />
            <Tilt className="rounded-[1.75rem]">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-panel">
                <img
                  src={personalInfo.avatar}
                  alt={`Portrait of ${personalInfo.name}`}
                  width="1023"
                  height="1536"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#060912] via-[#060912]/70 to-transparent p-5 pt-16 text-white">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2fd4ff]">Currently</p>
                  <p className="mt-1 font-display text-lg font-medium leading-snug">
                    Building full stack apps with React &amp; FastAPI
                  </p>
                </div>
              </div>
            </Tilt>
            <div className="absolute -right-2 -top-4 md:-right-5">
              <Magnetic strength={0.45}>
                <a
                  href="#contact"
                  className="grid h-20 w-20 place-items-center rounded-full bg-accent text-ink shadow-xl shadow-accent/20 transition-transform duration-300 hover:rotate-45"
                  aria-label="Get in touch"
                >
                  <ArrowUpRight size={30} strokeWidth={1.75} />
                </a>
              </Magnetic>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="group/marquee relative overflow-hidden border-y border-line bg-panel/50 py-5" aria-hidden="true">
        <div className="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused]">
          {[0, 1].map((n) => (
            <ul key={n} className="flex shrink-0 items-center">
              {marquee.map((item) => (
                <li
                  key={item}
                  className="flex items-center font-display text-xl font-medium text-muted transition-colors hover:text-accent md:text-2xl"
                >
                  <span className="px-7">{item}</span>
                  <span className="text-accent">✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
