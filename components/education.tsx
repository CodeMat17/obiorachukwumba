"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const degrees = [
  {
    degree: "PhD",
    field: "Media Arts",
    institution: "University of Abuja",
    desc: "Doctoral research anchored in film, media policy, and the economics of African storytelling.",
    level: 3,
  },
  {
    degree: "M.Sc.",
    field: "Mass Communication",
    institution: "Benue State University, Makurdi",
    desc: "Graduate studies deepening theory and practice across the full spectrum of media and communication.",
    level: 2,
  },
  {
    degree: "B.Sc.",
    field: "Mass Communication",
    institution: "IMT, Enugu",
    desc: "Foundational training in journalism, broadcasting, and media production that launched a distinguished career.",
    level: 1,
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="py-24 lg:py-32 bg-muted/50"
      aria-labelledby="education-heading"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
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
            Education
          </p>
          <h2
            id="education-heading"
            className="text-4xl lg:text-5xl font-900 tracking-tight text-foreground"
          >
            Academic foundations
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {degrees.map((d, idx) => (
            <motion.article
              key={d.degree}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="relative p-7 bg-card rounded-2xl border border-border hover:border-[var(--gold)]/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div
                className="absolute top-5 right-5 text-5xl font-900 opacity-5 select-none"
                aria-hidden="true"
              >
                {d.level === 3 ? "III" : d.level === 2 ? "II" : "I"}
              </div>

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  backgroundColor: "oklch(from var(--gold) l c h / 0.12)",
                }}
                aria-hidden="true"
              >
                <GraduationCap
                  size={22}
                  style={{ color: "var(--gold)" }}
                  className="group-hover:scale-110 transition-transform"
                />
              </div>

              <p
                className="text-3xl font-900 mb-1"
                style={{ color: "var(--gold)" }}
              >
                {d.degree}
              </p>
              <p className="font-800 text-foreground text-base mb-1">
                {d.field}
              </p>
              <p className="text-sm font-600 text-muted-foreground mb-4">
                {d.institution}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {d.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
