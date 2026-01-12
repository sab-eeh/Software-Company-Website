"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  Layers,
  Users,
  Zap,
  CheckCircle2,
  Compass,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const reasons = [
  {
    icon: Compass,
    title: "Thoughtful problem-solving",
    description:
      "We take time to understand the real problem before proposing solutions, so decisions are intentional — not reactive.",
  },
  {
    icon: Layers,
    title: "Designed to scale naturally",
    description:
      "Everything is structured with growth in mind, so products remain clear, stable, and easy to extend over time.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable by default",
    description:
      "Quality, accessibility, and performance are treated as fundamentals — not optional add-ons.",
  },
  {
    icon: Zap,
    title: "Fast, without cutting corners",
    description:
      "Clear workflows and focused execution allow us to move efficiently while keeping standards high.",
  },
  {
    icon: Users,
    title: "True ownership & collaboration",
    description:
      "We work as a close partner, take responsibility for outcomes, and communicate openly at every stage.",
  },
  {
    icon: CheckCircle2,
    title: "Built for real outcomes",
    description:
      "Success isn’t measured by delivery alone — it’s measured by how well the product supports your goals.",
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
    transition: { staggerChildren: 0.08 },
  },
};

/* -------------------------------------------------------------------------- */
/*                                   COMPONENT                                 */
/* -------------------------------------------------------------------------- */

export default function WhyChooseUs() {
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
            WHY CHOOSE US
          </motion.p>

          <motion.h2 variants={fadeUp} className="h2 mt-4">
            A long-term partner, not just a vendor
          </motion.h2>

          <motion.p variants={fadeUp} className="lead mx-auto mt-5 max-w-2xl">
            We partner closely with teams who care about quality, clarity, and
            sustainable growth — building products meant to last.
          </motion.p>
        </motion.header>

        {/* ------------------------------------------------------------------ */}
        {/* GRID                                                               */}
        {/* ------------------------------------------------------------------ */}

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? false : "visible"}
          viewport={{ once: true, margin: "-120px" }}
          variants={container}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="group relative card-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl border border-border/70 bg-background/40 transition group-hover:scale-105">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold">{item.title}</h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
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
