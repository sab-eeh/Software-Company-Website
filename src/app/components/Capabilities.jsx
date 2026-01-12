"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Layers,
  Smartphone,
  Bot,
  Brain,
  Search,
  Palette,
  Megaphone,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const items = [
  {
    icon: Code2,
    title: "Web Experiences",
    description:
      "High-quality websites and web interfaces designed to be fast, reliable, and easy to evolve.",
  },
  {
    icon: Layers,
    title: "Software Platforms",
    description:
      "Custom platforms and internal systems built with long-term clarity and scalability in mind.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Mobile-first applications focused on usability, performance, and clean navigation.",
  },
  {
    icon: Bot,
    title: "Automation Systems",
    description:
      "Smart automations that reduce manual work and streamline everyday operations.",
  },
  {
    icon: Brain,
    title: "Intelligent Solutions",
    description:
      "Data-driven systems designed to support smarter decisions and workflows.",
  },
  {
    icon: Search,
    title: "Visibility & Performance",
    description:
      "Optimized structure, speed, and insights that help products get discovered and perform better.",
  },
  {
    icon: Palette,
    title: "Design Systems",
    description:
      "Clear visual languages and component systems that feel premium and consistent.",
  },
  {
    icon: Megaphone,
    title: "Growth & Outreach",
    description:
      "Content and campaigns structured to build trust, awareness, and engagement.",
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

export default function Capabilities() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section">
      <div className="container-page">
        {/* Header */}
        <motion.header
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? false : "visible"}
          viewport={{ once: true }}
          variants={container}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p variants={fadeUp} className="kicker">
            CAPABILITIES
          </motion.p>

          <motion.h2 variants={fadeUp} className="h2 mt-4">
            What we help you build
          </motion.h2>

          <motion.p variants={fadeUp} className="lead mx-auto mt-5 max-w-2xl">
            A focused set of capabilities designed to support modern products
            from early ideas to long-term growth.
          </motion.p>
        </motion.header>

        {/* Grid */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? false : "visible"}
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="group card-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-border/70 bg-background/40 transition group-hover:scale-105">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
