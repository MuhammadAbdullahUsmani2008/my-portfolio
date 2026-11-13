import { facts, personalInfo, services } from "../data/portfolioData";
import { Reveal, SectionHeading, spotlightMove } from "./ui";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading index="01" label="About" title="Frontend craft, backend logic, shipped to production." />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          {personalInfo.about.map((p, i) => (
            <Reveal
              as="p"
              key={i}
              delay={i * 0.1}
              className={i === 0 ? "text-xl text-text md:text-2xl md:leading-snug" : ""}
            >
              {p}
            </Reveal>
          ))}
        </div>

        <dl className="self-start border-t border-line">
          {facts.map((f, i) => (
            <Reveal
              key={f.label}
              delay={i * 0.08}
              className="group grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-4 transition-[padding] duration-300 hover:pl-3"
            >
              <dt className="font-mono text-xs uppercase tracking-[0.15em] text-dim transition-colors group-hover:text-accent">
                {f.label}
              </dt>
              <dd className="text-[15px]">{f.value}</dd>
            </Reveal>
          ))}
        </dl>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal
            key={s.step}
            delay={i * 0.1}
            onMouseMove={spotlightMove}
            className="spotlight group bg-panel p-7 md:p-8"
          >
            <p className="font-mono text-sm text-accent">{s.step}</p>
            <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1.5">
              {s.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-deep transition-transform duration-500 group-hover:scale-x-100"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
