"use client";

import { motion } from "framer-motion";
import {
  Newspaper,
  Film,
  Shield,
  Lightbulb,
  GraduationCap,
  CheckCircle,
  Users,
} from "lucide-react";

const expertiseItems = [
  {
    icon: Newspaper,
    title: "Journalism & Investigative Reporting",
    desc: "Decades of frontline reporting across print, wire, broadcast, and digital media — with a journalist's eye for the story that matters.",
  },
  {
    icon: Film,
    title: "Film Regulation & Policy",
    desc: "Deep insider expertise in the NFVCB regulatory framework — from content classification to market sanitation and community video.",
  },
  {
    icon: Shield,
    title: "Conflict & Security Reporting",
    desc: "Pioneering work covering the Lake Chad Basin, Sahel, and insurgency-affected communities through HumAngle Media.",
  },
  {
    icon: Lightbulb,
    title: "Media Entrepreneurship",
    desc: "Co-founded and grew HumAngle Media into Africa's premier conflict reporting platform, redefining what African journalism can achieve.",
  },
  {
    icon: GraduationCap,
    title: "Academic Instruction",
    desc: "Shaping the next generation of Nigerian media practitioners at Veritas University, Abuja, in Mass Communication.",
  },
  {
    icon: CheckCircle,
    title: "Fact-checking & Media Ethics",
    desc: "Committed to giving the public accurate information — applying rigorous verification methodologies in an era of misinformation.",
  },
  {
    icon: Users,
    title: "Social Cohesion & Development Communication",
    desc: "Using media as a tool for community healing, peacebuilding, and development in fragile and conflict-affected settings.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export function Expertise() {
  return (
    <section
      id="expertise"
      className="py-24 lg:py-32 bg-muted/50"
      aria-labelledby="expertise-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
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
            Areas of Expertise
          </p>
          <h2
            id="expertise-heading"
            className="text-4xl lg:text-5xl font-900 tracking-tight text-foreground"
          >
            Seven domains.{" "}
            <span style={{ color: "var(--gold)" }}>One singular vision.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {expertiseItems.map((exp) => {
            const Icon = exp.icon;
            return (
              <motion.article
                key={exp.title}
                variants={item}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-[var(--gold)]/50 hover:shadow-lg transition-all duration-300 cursor-default"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                  style={{ backgroundColor: "oklch(from var(--gold) l c h / 0.12)" }}
                  aria-hidden="true"
                >
                  <Icon
                    size={20}
                    style={{ color: "var(--gold)" }}
                    className="group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <h3 className="font-800 text-foreground text-base mb-2 leading-snug">
                  {exp.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.desc}
                </p>
              </motion.article>
            );
          })}

          <motion.div
            variants={item}
            className="sm:col-span-2 lg:col-span-1 p-6 rounded-2xl flex items-center justify-center text-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(from var(--gold) l c h / 0.15), oklch(from var(--gold) l c h / 0.05))",
              border: "1px solid oklch(from var(--gold) l c h / 0.3)",
            }}
          >
            <div>
              <p
                className="text-3xl font-900 mb-2"
                style={{ color: "var(--gold)" }}
              >
                APAS/0297
              </p>
              <p className="text-muted-foreground text-sm font-600">
                Professional Member, APAS
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
