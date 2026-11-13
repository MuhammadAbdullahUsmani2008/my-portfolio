import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon, Magnetic, Reveal, WordReveal } from "./ui";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line">
      <div
        className="pointer-events-none absolute -bottom-60 left-1/2 h-[480px] w-[900px] -translate-x-1/2 animate-drift rounded-full bg-accent-deep/20 blur-[140px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
        <Reveal as="p" className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <span className="text-dim">04 /</span> Contact
        </Reveal>
        <h2 className="mt-5 font-display text-[clamp(2.5rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
          <WordReveal text="Have a project" inView />
          <br />
          <WordReveal text="in mind?" inView delay={0.15} />{" "}
          <WordReveal text="Let's build it." inView delay={0.3} wordClassName="text-gradient" />
        </h2>
        <Reveal delay={0.2}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
            I&apos;m open to freelance projects, collaborations and full-time roles. Send me a message and I&apos;ll
            get back to you.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center gap-3">
          <Magnetic>
            <a
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex max-w-full items-center gap-2.5 rounded-full bg-accent px-6 py-4 font-medium text-ink shadow-lg shadow-accent/20 transition-shadow hover:shadow-accent/40"
            >
              <span className="truncate">{personalInfo.email}</span>
              <ArrowUpRight size={18} className="shrink-0 transition-transform group-hover:rotate-45" />
            </a>
          </Magnetic>
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-5 py-4 font-medium transition-colors hover:border-accent hover:text-accent"
          >
            {copied ? <Check size={17} /> : <Copy size={17} />}
            {copied ? "Copied" : "Copy email"}
          </button>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-muted">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-accent"
          >
            <GithubIcon /> GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-accent"
          >
            <LinkedinIcon /> LinkedIn
          </a>
        </Reveal>
      </div>

      <footer className="relative border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-7 font-mono text-xs text-dim sm:flex-row sm:items-center md:px-8">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
          <p>Built with React, Tailwind CSS &amp; Framer Motion</p>
          <a href="#top" className="transition-colors hover:text-accent">
            Back to top ↑
          </a>
        </div>
      </footer>
    </section>
  );
}
