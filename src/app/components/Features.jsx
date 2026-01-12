"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Zap, LayoutGrid, Sparkles } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const features = [
  {
    icon: Sparkles,
    title: "Premium experience by design",
    desc: "Clear hierarchy, balanced layouts, and thoughtful content structure that guide users toward action.",
  },
  {
    icon: Zap,
    title: "Fast and reliable experiences",
    desc: "Pages are designed to feel instant and responsive, keeping users engaged without friction.",
  },
  {
    icon: LayoutGrid,
    title: "Consistent, reusable structure",
    desc: "A clear system ensures new pages and features stay aligned as your product grows.",
  },
  {
    icon: ShieldCheck,
    title: "Built with care and stability",
    desc: "Accessibility, sensible defaults, and proven patterns create a dependable experience for all users.",
  },
];

/* -------------------------------------------------------------------------- */
/*                               ANIMATIONS                                   */
/* -------------------------------------------------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

/* -------------------------------------------------------------------------- */
/*                                   COMPONENT                                 */
/* -------------------------------------------------------------------------- */

export default function Features() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section relative">
      <div className="container-page">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* ---------------------------------------------------------------- */}
          {/* LEFT CONTENT                                                     */}
          {/* ---------------------------------------------------------------- */}

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? false : "visible"}
            viewport={{ once: true }}
            variants={container}
            className="lg:col-span-5"
          >
            <motion.p variants={fadeUp} className="kicker">
              WHY THIS WORKS
            </motion.p>

            <motion.h2 variants={fadeUp} className="h2 mt-4">
              Designed to feel clear, calm, and premium
            </motion.h2>

            <motion.p variants={fadeUp} className="lead mt-5 max-w-xl">
              A strong experience is built on clarity and consistency — not
              visual noise. Every decision is made to support trust and ease of
              use.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 space-y-4">
              <div className="card-surface p-5">
                <div className="text-sm font-semibold text-foreground">
                  What you can expect
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Clear structure, consistent patterns, smooth interactions, and
                  a polished overall experience.
                </p>
              </div>

              <div className="card-surface p-5">
                <div className="text-sm font-semibold text-foreground">
                  What we intentionally avoid
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Overcomplicated layouts, visual clutter, inconsistent spacing,
                  and experiences that feel hard to navigate.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ---------------------------------------------------------------- */}
          {/* RIGHT GRID                                                       */}
          {/* ---------------------------------------------------------------- */}

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? false : "visible"}
            viewport={{ once: true, margin: "-120px" }}
            variants={container}
            className="lg:col-span-7"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <motion.article
                    key={feature.title}
                    variants={fadeUp}
                    className="group card-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-border/70 bg-background/40 transition group-hover:scale-105">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <div>
                        <h3 className="text-base font-semibold">
                          {feature.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {feature.desc}
                        </p>
                      </div>
                    </div>

                    {/* subtle glow */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent" />
                    </div>
                  </motion.article>
                );
              })}
            </div>

            {/* CTA STRIP */}
            <motion.div
              variants={fadeUp}
              className="mt-6 card-surface p-6 shadow-soft"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-semibold">
                    Want a quick direction?
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Share your goals and timeline — we’ll help you choose the
                    right path forward.
                  </div>
                </div>

                <a
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Get a quote
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
