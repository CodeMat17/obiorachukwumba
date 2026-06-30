"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const roles = [
  "Media Scholar",
  "Journalist",
  "Film Policy Expert",
  "Co-Founder",
  "Lecturer",
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-img.webp"
          alt="Obiora Chukwumba, PhD — Media Scholar and Journalist"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center text-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-4"
        >
          <span
            className="inline-block px-4 py-1.5 text-xs font-700 tracking-[0.2em] uppercase rounded-full border"
            style={{
              borderColor: "var(--gold)",
              color: "var(--gold)",
              backgroundColor: "rgba(0,0,0,0.3)",
            }}
          >
            Abuja, Nigeria
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-900 leading-tight tracking-tight mb-3"
        >
          Obiora Chukwumba
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-2xl sm:text-3xl font-300 text-white/80 mb-6"
        >
          PhD
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {roles.map((role, i) => (
            <span
              key={role}
              className="text-sm sm:text-base font-600 text-white/90"
            >
              {role}
              {i < roles.length - 1 && (
                <span className="mx-2" style={{ color: "var(--gold)" }}>
                  ·
                </span>
              )}
            </span>
          ))}
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-lg sm:text-xl font-400 italic text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          &ldquo;Bridging the newsroom, the classroom, and the policy table.&rdquo;
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-700 text-sm transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: "var(--gold)",
              color: "#fff",
            }}
          >
            Discover My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-700 text-sm border-2 border-white/60 text-white hover:bg-white/10 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  );
}
