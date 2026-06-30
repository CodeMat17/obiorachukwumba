"use client";

import { motion } from "framer-motion";
import {
  Mic,
  BookMarked,
  BarChart3,
  Wrench,
  Clapperboard,
  LayoutGrid,
} from "lucide-react";

const offerings = [
  {
    icon: Mic,
    title: "Speaking Engagements",
    desc: "Keynotes, panels, and workshops on journalism ethics, media policy, film regulation, conflict reporting, and social cohesion.",
  },
  {
    icon: BookMarked,
    title: "Academic Collaboration",
    desc: "Joint research, co-authorship, and peer review in Media Arts, Mass Communication, and film studies.",
  },
  {
    icon: BarChart3,
    title: "Media Consulting",
    desc: "Editorial strategy, film regulation compliance, and media policy advisory for organisations and institutions.",
  },
  {
    icon: Wrench,
    title: "Training & Capacity Building",
    desc: "Journalism training, newsroom workshops, and media literacy programs for practitioners and organisations.",
  },
  {
    icon: Clapperboard,
    title: "Film & Content Advisory",
    desc: "NFVCB compliance and content classification guidance for producers, distributors, and streaming platforms.",
  },
  {
    icon: LayoutGrid,
    title: "Board & Advisory Roles",
    desc: "Editorial boards, advisory councils, and governance committees — bringing a scholar-practitioner perspective.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export function Collaborate() {
  return (
    <section
      id="collaborate"
      className="py-24 lg:py-32 bg-background"
      aria-labelledby="collaborate-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p
            className="text-xs font-700 tracking-[0.25em] uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            Open For
          </p>
          <h2
            id="collaborate-heading"
            className="text-4xl lg:text-5xl font-900 tracking-tight text-foreground mb-5"
          >
            Let&apos;s{" "}
            <span style={{ color: "var(--gold)" }}>work together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-500">
            Obiora brings a rare combination of academic rigour, regulatory
            expertise, and editorial experience to every engagement.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14"
        >
          {offerings.map((offer) => {
            const Icon = offer.icon;
            return (
              <motion.article
                key={offer.title}
                variants={item}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-[var(--gold)]/50 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: "oklch(from var(--gold) l c h / 0.12)",
                  }}
                  aria-hidden="true"
                >
                  <Icon
                    size={20}
                    style={{ color: "var(--gold)" }}
                    className="group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="font-800 text-foreground text-base mb-2">
                  {offer.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {offer.desc}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full font-700 text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            style={{
              backgroundColor: "var(--gold)",
              color: "#fff",
              boxShadow: "0 8px 32px oklch(from var(--gold) l c h / 0.35)",
            }}
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
