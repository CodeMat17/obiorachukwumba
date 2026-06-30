"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    text: "Politicians may put out misleading information, but journalists have the tools to verify claims through fact-checking. It is our responsibility to give the public the right information and perspective.",
    context: "On journalism ethics and fact-checking",
  },
  {
    text: "The moment distributors hold themselves accountable, they will determine what enters the market, and if any film does not carry the authorised classification label, it should not be allowed in the market.",
    context: "On film regulation and market accountability",
  },
];

export function Quotes() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      aria-label="Selected quotes"
      style={{
        background:
          "linear-gradient(135deg, oklch(from var(--gold) l c h / 0.08) 0%, transparent 50%, oklch(from var(--gold) l c h / 0.05) 100%)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ backgroundColor: "oklch(from var(--gold) l c h / 0.2)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ backgroundColor: "oklch(from var(--gold) l c h / 0.2)" }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-xs font-700 tracking-[0.25em] uppercase"
            style={{ color: "var(--gold)" }}
          >
            In His Own Words
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {quotes.map((q, idx) => (
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: idx * 0.15 }}
              className="relative p-8 bg-card rounded-2xl border border-border"
            >
              <div
                className="absolute -top-4 left-8 text-6xl font-900 leading-none select-none"
                style={{ color: "var(--gold)" }}
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <p className="text-lg font-500 text-foreground leading-relaxed italic mt-4 mb-6">
                {q.text}
              </p>
              <footer>
                <p
                  className="text-xs font-700 tracking-widest uppercase"
                  style={{ color: "var(--gold)" }}
                >
                  {q.context}
                </p>
                <p className="text-sm font-700 text-muted-foreground mt-1">
                  — Obiora Chukwumba, PhD
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
