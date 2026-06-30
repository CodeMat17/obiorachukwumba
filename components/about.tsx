"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-background"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          <motion.div variants={fadeUp}>
            <p
              className="text-xs font-700 tracking-[0.25em] uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              About
            </p>
            <h2
              id="about-heading"
              className="text-4xl lg:text-5xl font-900 leading-tight tracking-tight mb-8 text-foreground"
            >
              A rare voice at the intersection of{" "}
              <em className="not-italic" style={{ color: "var(--gold)" }}>
                media, policy & academia
              </em>
            </h2>

            <div className="space-y-5 text-muted-foreground text-base lg:text-lg leading-relaxed font-500">
              <p>
                Obiora Chukwumba, PhD is a multifaceted media professional based
                in Abuja, Nigeria, with proven track records in newspaper and
                magazine production, wire reporting, broadcast content
                production, and film regulation.
              </p>
              <p>
                He occupies a rare professional space — equally at home in the
                editorial room, the lecture hall, and the regulatory boardroom.
                He co-founded{" "}
                <a
                  href="https://humanglemedia.com/author/obiora/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-700 underline underline-offset-4 decoration-[var(--gold)]/60 hover:decoration-[var(--gold)] text-foreground transition-colors"
                >
                  HumAngle Media
                </a>
                , now Africa&apos;s leading source on conflict reporting,
                particularly in the Lake Chad and Sahel regions.
              </p>
              <p>
                As a scholar, he lectures at Veritas University, Abuja, shaping
                the next generation of Nigerian media practitioners. His PhD in
                Media Arts anchors research in film, media policy, and African
                storytelling economies.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-6">
            {[
              {
                number: "20+",
                label: "Years in Media",
                sub: "Spanning print, broadcast, digital & policy",
              },
              {
                number: "3",
                label: "Academic Degrees",
                sub: "PhD · M.Sc. · B.Sc. — Mass Communication & Media Arts",
              },
              {
                number: "1",
                label: "Media Organisation Co-Founded",
                sub: "HumAngle — Africa's top conflict reporting outlet",
              },
              {
                number: "∞",
                label: "Stories That Matter",
                sub: "From the Lake Chad basin to the policy table",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex gap-6 items-start p-5 rounded-2xl bg-card border border-border hover:border-[var(--gold)]/40 transition-colors group"
              >
                <span
                  className="text-4xl font-900 leading-none flex-shrink-0 group-hover:scale-110 transition-transform origin-left"
                  style={{ color: "var(--gold)" }}
                >
                  {stat.number}
                </span>
                <div>
                  <p className="font-700 text-foreground text-base">
                    {stat.label}
                  </p>
                  <p className="text-muted-foreground text-sm mt-0.5 leading-snug">
                    {stat.sub}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
