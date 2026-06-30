"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    period: "Current",
    role: "Lecturer, Dept. of Mass Communication",
    org: "Veritas University, Abuja",
    desc: "Shaping the next generation of Nigerian media professionals through academic instruction in Mass Communication.",
    highlight: true,
  },
  {
    period: "2020 – Present",
    role: "Co-Founder & Editorial Advisor",
    org: "HumAngle Media",
    desc: "Co-founded Africa's leading platform for conflict and security reporting, covering the Lake Chad basin, Sahel region, and fragile states.",
    highlight: true,
  },
  {
    period: "Ongoing",
    role: "Board Member",
    org: "PPDC, Abuja",
    desc: "Contributing to governance reform, public procurement transparency, and accountability work at the Public and Private Development Centre.",
  },
  {
    period: "Ongoing",
    role: "Film Regulatory Consultant",
    org: "Independent",
    desc: "Advising producers, distributors, and streaming platforms on content classification and NFVCB regulatory compliance.",
  },
  {
    period: "Earlier",
    role: "Special Assistant to the Director-General",
    org: "NFVCB (National Film and Video Censors Board)",
    desc: "Drove film policy implementation, championed short film promotion, and spearheaded community video initiatives at the federal level.",
  },
  {
    period: "Early Career",
    role: "Journalist",
    org: "African Concord",
    desc: "Built foundational expertise across print, magazine, wire service, and broadcast content production — developing a multidisciplinary media toolkit.",
  },
];

export function Career() {
  return (
    <section
      id="career"
      className="py-24 lg:py-32 bg-background"
      aria-labelledby="career-heading"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-700 tracking-[0.25em] uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            Career Journey
          </p>
          <h2
            id="career-heading"
            className="text-4xl lg:text-5xl font-900 tracking-tight text-foreground"
          >
            A career built on{" "}
            <span style={{ color: "var(--gold)" }}>impact</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-6 top-0 bottom-0 w-px md:left-1/2"
            style={{ backgroundColor: "var(--border)" }}
            aria-hidden="true"
          />

          <div className="space-y-10">
            {timeline.map((entry, idx) => (
              <motion.div
                key={entry.role}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className={`relative flex gap-8 md:gap-0 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className="absolute left-6 top-5 w-3 h-3 rounded-full border-2 z-10 -translate-x-1.5 md:left-1/2 md:-translate-x-1.5"
                  style={{
                    backgroundColor: entry.highlight
                      ? "var(--gold)"
                      : "var(--background)",
                    borderColor: entry.highlight
                      ? "var(--gold)"
                      : "var(--border)",
                  }}
                  aria-hidden="true"
                />

                <div
                  className={`pl-12 md:pl-0 md:w-1/2 ${
                    idx % 2 === 0 ? "md:pr-10" : "md:pl-10"
                  }`}
                >
                  <article
                    className={`p-5 rounded-2xl border transition-colors ${
                      entry.highlight
                        ? "border-[var(--gold)]/40 bg-card"
                        : "border-border bg-card"
                    }`}
                  >
                    <span
                      className="text-xs font-700 tracking-widest uppercase"
                      style={{ color: "var(--gold)" }}
                    >
                      {entry.period}
                    </span>
                    <h3 className="font-800 text-foreground text-base mt-1 mb-0.5">
                      {entry.role}
                    </h3>
                    <p className="text-sm font-600 text-muted-foreground mb-2">
                      {entry.org}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {entry.desc}
                    </p>
                  </article>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
