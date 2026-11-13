import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolioData";
import { Reveal, SectionHeading } from "./ui";

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
};
const chip = {
  hidden: { opacity: 0, y: 14, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 18 } },
};

export default function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-panel/40">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading index="02" label="Skills" title="The stack I work across." />

        <div className="border-t border-line">
          {skillGroups.map((g, i) => (
            <div
              key={g.id}
              className="grid gap-5 border-b border-line py-8 md:grid-cols-[1fr_2fr] md:gap-10 md:py-10"
            >
              <Reveal delay={i * 0.05}>
                <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{g.title}</h3>
                <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-muted">{g.blurb}</p>
              </Reveal>
              <motion.ul
                variants={list}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="flex flex-wrap content-start gap-2.5"
              >
                {g.skills.map((s) => (
                  <motion.li
                    key={s}
                    variants={chip}
                    whileHover={{ y: -5, scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-default rounded-full border border-line bg-raised px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/10"
                  >
                    {s}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
