"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Link2, ExternalLink } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "chukwumba@veritas.edu.ng",
    href: "mailto:chukwumba@veritas.edu.ng",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 809 547 9795",
    href: "tel:+2348095479795",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Abuja, FCT, Nigeria",
    href: null,
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "obiora-chukwumba-phd",
    href: "https://linkedin.com/in/obiora-chukwumba-phd-61526766",
  },
  {
    icon: ExternalLink,
    label: "HumAngle",
    value: "humanglemedia.com/author/obiora",
    href: "https://humanglemedia.com/author/obiora/",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-background"
      aria-labelledby="contact-heading"
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
            Get in Touch
          </p>
          <h2
            id="contact-heading"
            className="text-4xl lg:text-5xl font-900 tracking-tight text-foreground mb-5"
          >
            Let&apos;s connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-500 leading-relaxed">
            Whether you&apos;re interested in speaking engagements, academic
            collaboration, media consulting, or simply a conversation — the door
            is open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="bg-card rounded-3xl border border-border overflow-hidden shadow-xl"
        >
          <div
            className="h-2 w-full"
            style={{ backgroundColor: "var(--gold)" }}
            aria-hidden="true"
          />

          <div className="p-8 lg:p-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-800 text-foreground text-xl mb-6">
                Contact Details
              </h3>
              <ul className="space-y-5" role="list">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          backgroundColor:
                            "oklch(from var(--gold) l c h / 0.12)",
                        }}
                        aria-hidden="true"
                      >
                        <Icon size={17} style={{ color: "var(--gold)" }} />
                      </div>
                      <div>
                        <p className="text-xs font-700 text-muted-foreground uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={
                              item.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              item.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="font-600 text-foreground hover:underline decoration-[var(--gold)] underline-offset-4 transition-colors text-sm break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-600 text-foreground text-sm">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-800 text-foreground text-xl mb-4">
                  Ready to engage?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-500">
                  Obiora is available for speaking engagements, academic
                  partnerships, media consulting, training workshops, and
                  advisory roles. Reach out directly by email or connect on
                  LinkedIn to start a conversation.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="mailto:chukwumba@veritas.edu.ng"
                  className="flex items-center justify-center w-full px-6 py-3.5 rounded-xl font-700 text-sm transition-all duration-200 hover:scale-[1.02] active:scale-95"
                  style={{
                    backgroundColor: "var(--gold)",
                    color: "#fff",
                  }}
                >
                  Send an Email
                </a>
                <a
                  href="https://linkedin.com/in/obiora-chukwumba-phd-61526766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-6 py-3.5 rounded-xl font-700 text-sm border-2 border-border hover:border-[var(--gold)]/60 text-foreground transition-all duration-200 hover:scale-[1.02] active:scale-95 gap-2"
                >
                  <Link2 size={16} aria-hidden="true" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
