"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";
import CTA from "../components/CTA";

/* -------------------------------------------------------------------------- */
/*                               ANIMATIONS                                   */
/* -------------------------------------------------------------------------- */

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const values = [
  {
    icon: Sparkles,
    title: "Design with intention",
    desc: "Every layout decision is deliberate — built to create clarity, trust, and confidence.",
  },
  {
    icon: Zap,
    title: "Engineering for scale",
    desc: "Clean, modular architecture that evolves as your product and team grow.",
  },
  {
    icon: ShieldCheck,
    title: "Quality as a standard",
    desc: "From accessibility to performance, best practices are baked into everything we ship.",
  },
];

const process = [
  "Clear scope and structured planning",
  "Transparent communication and updates",
  "Design systems before visual polish",
  "Performance-first development",
  "Careful QA and long-term maintainability",
];

/* -------------------------------------------------------------------------- */
/*                                   PAGE                                     */
/* -------------------------------------------------------------------------- */

export default function AboutPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="overflow-hidden">
      {/* ------------------------------------------------------------------ */}
      {/* HERO (MATCHES HOME STYLE)                                          */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          {/* glow */}
          <div className="absolute left-1/2 top-[-30%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/14 blur-[170px]" />
          <div className="absolute left-[6%] top-[48%] h-[420px] w-[420px] rounded-full bg-[hsl(var(--brand-2))]/14 blur-[170px]" />

          {/* softened grid */}
          <div className="absolute inset-0 opacity-[0.42] [mask-image:radial-gradient(ellipse_at_center,black,transparent_68%)]">
            <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:52px_52px]" />
          </div>

          {/* bottom vignette */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </div>

        <motion.div
          variants={container}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? false : "show"}
          className="container-page py-24 text-center lg:py-32"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur sm:text-sm"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            About our studio & approach
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={fadeUp} className="h1 mx-auto mt-8 max-w-4xl">
            We believe great software is{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-[hsl(var(--brand-2))] bg-clip-text text-transparent">
                designed thoughtfully
              </span>
              <span className="absolute inset-x-0 -bottom-2 h-[10px] bg-primary/18 blur-xl" />
            </span>{" "}
            and engineered with care.
          </motion.h1>

          {/* Description */}
          <motion.p variants={fadeUp} className="lead mx-auto mt-6 max-w-3xl">
            We’re a design and engineering studio focused on building modern,
            scalable software experiences. Our work blends clean UI systems,
            performance-first development, and long-term maintainability —
            without unnecessary complexity.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Work with us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border/80 bg-card/50 px-8 text-sm font-medium transition hover:bg-card/70"
            >
              Explore services
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* STORY + PROCESS                                                    */}
      {/* ------------------------------------------------------------------ */}

      <section className="section">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          {/* STORY */}
          <motion.div
            variants={container}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? false : "show"}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <motion.p variants={fadeUp} className="kicker">
              OUR STORY
            </motion.p>
            <motion.h2 variants={fadeUp} className="h2 mt-4">
              Why we approach software differently
            </motion.h2>
            <motion.p variants={fadeUp} className="lead mt-5 max-w-xl">
              Many products fail not because of missing features, but because of
              unclear design and fragile engineering. We focus on systems that
              stay clear, usable, and scalable over time.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 space-y-4">
              {[
                {
                  title: "Clarity over clutter",
                  text: "We remove friction through hierarchy, spacing, and purposeful UI decisions.",
                },
                {
                  title: "Built to last",
                  text: "Our codebases are structured to grow — not collapse — as requirements evolve.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="card-surface p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="text-sm font-semibold">{item.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* PROCESS */}
          <motion.div
            variants={container}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? false : "show"}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <motion.p variants={fadeUp} className="kicker">
              PROCESS
            </motion.p>
            <motion.h2 variants={fadeUp} className="h2 mt-4">
              A calm, structured way to ship
            </motion.h2>
            <motion.p variants={fadeUp} className="lead mt-5">
              Simple steps, predictable outcomes, and no chaos.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 card-surface p-6 shadow-soft"
            >
              <ul className="space-y-3">
                {process.map((step) => (
                  <li
                    key={step}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                    {step}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* VALUES                                                             */}
      {/* ------------------------------------------------------------------ */}

      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="kicker">VALUES</p>
            <h2 className="h2 mt-4">What guides our work</h2>
            <p className="lead mt-5">
              Strong products come from consistency, discipline, and care.
            </p>
          </div>

          <motion.div
            variants={container}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? false : "show"}
            viewport={{ once: true }}
            className="mt-14 grid gap-5 lg:grid-cols-3"
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <motion.article
                  key={v.title}
                  variants={fadeUp}
                  className="card-surface p-7 shadow-soft transition-all hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border/70 bg-background/40">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
