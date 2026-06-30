"use client";

import { useEffect, useState, startTransition } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Career", href: "#career" },
  { label: "Publications", href: "#publications" },
  { label: "Collaborate", href: "#collaborate" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    startTransition(() => setMounted(true));
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-gold focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16"
          aria-label="Main navigation"
        >
          <a
            href="#"
            className={`text-lg font-800 tracking-tight transition-colors hover:text-gold ${scrolled ? "text-foreground" : "text-white"}`}
            aria-label="Obiora Chukwumba — home"
          >
            <span className="font-900">Dr. Obiora</span>
            <span style={{ color: "var(--gold)" }}>.</span>
          </a>

          <ul className="hidden md:flex items-center gap-1" role="list">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`px-3 py-2 text-sm font-600 transition-colors rounded-md hover:text-gold ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/85 hover:text-white"}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
                className={`p-2 rounded-full transition-colors hover:bg-white/15 ${scrolled ? "text-muted-foreground hover:text-foreground hover:bg-muted" : "text-white/85 hover:text-white"}`}
              >
                {resolvedTheme === "dark" ? (
                  <Sun size={18} aria-hidden="true" />
                ) : (
                  <Moon size={18} aria-hidden="true" />
                )}
              </button>
            )}
            <button
              className={`md:hidden p-2 rounded-full transition-colors ${scrolled ? "text-muted-foreground hover:text-foreground hover:bg-muted" : "text-white/85 hover:text-white hover:bg-white/15"}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          >
            <ul className="px-6 py-4 flex flex-col gap-1" role="list">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-3 py-3 text-base font-600 text-muted-foreground hover:text-gold transition-colors rounded-md"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
