"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Code2,
  LayoutGrid,
  Smartphone,
  Bot,
  Brain,
  Search,
  Palette,
  Rocket,
  Layers,
  Settings,
  CheckCircle2,
} from "lucide-react";

import CTA from "../components/CTA";

/* -------------------------------------------------------------------------- */
/*                                ANIMATIONS                                  */
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

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "High-performance websites and platforms built with modern frameworks.",
    points: ["Next.js & React", "SEO-ready structure", "Responsive systems"],
  },
  {
    icon: LayoutGrid,
    title: "SaaS & Dashboards",
    desc: "Scalable UI systems for products that evolve over time.",
    points: ["Component libraries", "Auth-ready layouts", "Maintainable code"],
  },
  {
    icon: Smartphone,
    title: "App Interfaces",
    desc: "Mobile-first experiences designed for clarity and usability.",
    points: ["UX-driven flows", "Clear navigation", "Production-ready UI"],
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Smart systems that reduce repetitive work.",
    points: ["Workflow automation", "Tool integration", "Efficiency focused"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    desc: "Practical ML features aligned with business goals.",
    points: ["Use-case driven ML", "Data pipelines", "Integration planning"],
  },
  {
    icon: Search,
    title: "SEO & Performance",
    desc: "Speed and structure that improve visibility and conversions.",
    points: ["Core Web Vitals", "Analytics setup", "Optimized assets"],
  },
];

const whoItsFor = [
  {
    icon: Rocket,
    title: "Startups",
    desc: "Launch fast with a strong technical and design foundation.",
  },
  {
    icon: Layers,
    title: "SaaS Teams",
    desc: "Improve UI quality, scalability, and performance.",
  },
  {
    icon: Settings,
    title: "Growing Businesses",
    desc: "Modernize legacy interfaces into reliable systems.",
  },
];

const process = [
  {
    step: "01",
    title: "Understand",
    desc: "We align on goals, users, and technical constraints.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Layouts, systems, and components are defined clearly.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Clean, scalable, and accessible code is developed.",
  },
  {
    step: "04",
    title: "Polish & Launch",
    desc: "Performance tuning, QA, and confident delivery.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                   PAGE                                     */
/* -------------------------------------------------------------------------- */

export default function ServicesPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="overflow-hidden">
      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                               */}
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
            Services & capabilities
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={fadeUp} className="h1 mx-auto mt-8 max-w-4xl">
            Thoughtful design and{" "}
            <span className="bg-gradient-to-r from-primary to-[hsl(var(--brand-2))] bg-clip-text text-transparent">
              reliable engineering
            </span>{" "}
            for modern products.
          </motion.h1>

          {/* Description */}
          <motion.p variants={fadeUp} className="lead mx-auto mt-6 max-w-3xl">
            We help teams design, build, and scale software that stays clear,
            fast, and maintainable as it grows.
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
              Start a Project
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
      {/* WHO IT'S FOR                                                       */}
      {/* ------------------------------------------------------------------ */}

      <section className="section">
        <div className="container-page">
          <motion.div
            variants={container}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? false : "show"}
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3"
          >
            {whoItsFor.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="card-surface p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SERVICES                                                           */}
      {/* ------------------------------------------------------------------ */}

      <section id="services" className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="kicker">SERVICES</p>
            <h2 className="h2 mt-4">What we help you build</h2>
            <p className="lead mt-5">
              Clear systems, modern interfaces, and scalable foundations.
            </p>
          </div>

          <motion.div
            variants={container}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? false : "show"}
            viewport={{ once: true }}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <motion.article
                  key={s.title}
                  variants={fadeUp}
                  className="card-surface p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border/70 bg-background/40">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <h3 className="mt-4 font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>

                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* PROCESS                                                            */}
      {/* ------------------------------------------------------------------ */}

      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="kicker">PROCESS</p>
            <h2 className="h2 mt-4">A structured way to deliver</h2>
            <p className="lead mt-5">
              Predictable steps, calm execution, and long-term results.
            </p>
          </div>

          <motion.div
            variants={container}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? false : "show"}
            viewport={{ once: true }}
            className="mt-14 grid gap-6 md:grid-cols-4"
          >
            {process.map((p) => (
              <motion.div
                key={p.step}
                variants={fadeUp}
                className="card-surface p-6 shadow-soft"
              >
                <div className="text-sm font-semibold text-primary">
                  Step {p.step}
                </div>
                <h3 className="mt-2 font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
