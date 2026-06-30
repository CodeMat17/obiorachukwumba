"use client";

import { motion } from "framer-motion";

const affiliations = [
  {
    name: "Veritas University Abuja",
    role: "Lecturer, Mass Communication",
    short: "VUA",
  },
  {
    name: "HumAngle Media",
    role: "Co-Founder & Editorial Advisor",
    short: "HA",
  },
  {
    name: "PPDC",
    role: "Board Member",
    short: "PPDC",
  },
  {
    name: "NFVCB",
    role: "Former Special Asst. to DG · Regulatory Consultant",
    short: "NFVCB",
  },
  {
    name: "APAS",
    role: "Member · APAS/0297",
    short: "APAS",
  },
];

export function Affiliations() {
  return (
    <section
      className="py-20 bg-muted/40"
      aria-labelledby="affiliations-heading"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p
            className="text-xs font-700 tracking-[0.25em] uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            Affiliations & Memberships
          </p>
          <h2
            id="affiliations-heading"
            className="text-3xl lg:text-4xl font-900 tracking-tight text-foreground"
          >
            Institutions he calls home
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {affiliations.map((aff, idx) => (
            <motion.div
              key={aff.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border hover:border-[var(--gold)]/40 transition-colors group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-900 text-sm"
                style={{
                  backgroundColor: "oklch(from var(--gold) l c h / 0.12)",
                  color: "var(--gold)",
                }}
                aria-hidden="true"
              >
                {aff.short}
              </div>
              <div>
                <p className="font-800 text-foreground text-sm leading-snug">
                  {aff.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                  {aff.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
