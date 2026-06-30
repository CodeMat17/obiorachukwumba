"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";

export function Publications() {
  return (
    <section
      id="publications"
      className="py-24 lg:py-32 bg-background"
      aria-labelledby="publications-heading"
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
            Publications
          </p>
          <h2
            id="publications-heading"
            className="text-4xl lg:text-5xl font-900 tracking-tight text-foreground"
          >
            Research & writing
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.article
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
            className="p-8 bg-card rounded-2xl border border-border hover:border-[var(--gold)]/50 hover:shadow-xl transition-all duration-300 group"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
              style={{ backgroundColor: "oklch(from var(--gold) l c h / 0.12)" }}
              aria-hidden="true"
            >
              <BookOpen
                size={22}
                style={{ color: "var(--gold)" }}
                className="group-hover:scale-110 transition-transform"
              />
            </div>

            <p
              className="text-xs font-700 tracking-widest uppercase mb-3"
              style={{ color: "var(--gold)" }}
            >
              Journal Article · 2024
            </p>

            <h3 className="font-800 text-foreground text-lg leading-snug mb-4">
              Nollywood&apos;s Box Office in the African Economic Paradigm: A
              Theoretical Visioning of Global Future
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              A scholarly examination of Nollywood&apos;s economic positioning
              within the African and global film market — theorising a future
              for African cinema on the world stage.
            </p>

            <div className="text-sm font-600 text-muted-foreground space-y-1 mb-6">
              <p>
                <span className="text-foreground">Journal:</span> JASSD Vol.7
                No.4, 2024
              </p>
              <p>
                <span className="text-foreground">Co-authors:</span> Dili Ojukwu
                PhD &amp; Chuddy Anyianuka PhD
              </p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
            className="p-8 bg-card rounded-2xl border border-border hover:border-[var(--gold)]/50 hover:shadow-xl transition-all duration-300 group"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
              style={{ backgroundColor: "oklch(from var(--gold) l c h / 0.12)" }}
              aria-hidden="true"
            >
              <ExternalLink
                size={22}
                style={{ color: "var(--gold)" }}
                className="group-hover:scale-110 transition-transform"
              />
            </div>

            <p
              className="text-xs font-700 tracking-widest uppercase mb-3"
              style={{ color: "var(--gold)" }}
            >
              Journalism · Ongoing
            </p>

            <h3 className="font-800 text-foreground text-lg leading-snug mb-4">
              Articles & Reports on HumAngle Media
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              A body of journalistic work covering conflict, security, and
              humanitarian issues across Nigeria and the Lake Chad Basin — some
              of Africa&apos;s most critically important reporting.
            </p>

            <a
              href="https://humanglemedia.com/author/obiora/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-700 transition-colors hover:opacity-80"
              style={{ color: "var(--gold)" }}
            >
              View articles on HumAngle
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
