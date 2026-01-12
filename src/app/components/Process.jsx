"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const steps = [
  {
    icon: Search,
    title: "Discover & Align",
    desc: "We clarify goals, users, scope, and constraints so the work starts with complete alignment.",
  },
  {
    icon: PenTool,
    title: "Design the System",
    desc: "Structure, layout rhythm, and interface patterns are defined before execution begins.",
  },
  {
    icon: Code2,
    title: "Build with Precision",
    desc: "Components are implemented cleanly with a focus on clarity, responsiveness, and quality.",
  },
  {
    icon: Rocket,
    title: "Launch & Refine",
    desc: "We polish performance, validate results, and iterate based on real feedback.",
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

export default function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section relative">
      <div className="container-page">
        {/* ------------------------------------------------------------------ */}
        {/* HEADER                                                             */}
        {/* ------------------------------------------------------------------ */}

        <motion.header
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? false : "visible"}
          viewport={{ once: true }}
          variants={container}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p variants={fadeUp} className="kicker">
            PROCESS
          </motion.p>

          <motion.h2 variants={fadeUp} className="h2 mt-4">
            A calm, predictable way to deliver
          </motion.h2>

          <motion.p variants={fadeUp} className="lead mt-5">
            A structured approach reduces friction, keeps quality high, and
            ensures progress stays focused at every stage.
          </motion.p>
        </motion.header>

        {/* ------------------------------------------------------------------ */}
        {/* STEPS GRID                                                         */}
        {/* ------------------------------------------------------------------ */}

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? false : "visible"}
          viewport={{ once: true, margin: "-120px" }}
          variants={container}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.title}
                variants={fadeUp}
                className="group relative card-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border/70 bg-background/40 transition group-hover:scale-105">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <span className="text-xs font-medium text-muted-foreground">
                    Step {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-5 text-base font-semibold">{step.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>

                {/* Subtle hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
