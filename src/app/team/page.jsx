"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Sparkles,
  ShieldCheck,
  MessageSquare,
  Zap,
  Layers,
} from "lucide-react";
import Link from "next/link";
import CTA from "../components/CTA";

/* -------------------------------------------------------------------------- */
/*                                ANIMATIONS                                  */
/* -------------------------------------------------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function MotionSection({ children, className }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const principles = [
  {
    icon: Users,
    title: "Small, senior team",
    desc: "You work directly with experienced designers and engineers — no handoffs, no juniors.",
  },
  {
    icon: Sparkles,
    title: "Focus over volume",
    desc: "We take fewer projects so every product gets real attention and polish.",
  },
  {
    icon: ShieldCheck,
    title: "Ownership mindset",
    desc: "We think long-term and treat your product like our own.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Faster decisions",
    desc: "Lean teams remove layers and keep momentum high.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    desc: "Direct access to the people building your product.",
  },
  {
    icon: Layers,
    title: "Consistent execution",
    desc: "Design and engineering stay aligned from start to finish.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                   PAGE                                     */
/* -------------------------------------------------------------------------- */

export default function TeamPage() {
  return (
    <main className="overflow-hidden">
      {/* ------------------------------------------------------------------ */}
      {/* HERO (MATCHES HOME / ABOUT)                                        */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-30%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/14 blur-[170px]" />
          <div className="absolute left-[8%] top-[55%] h-[420px] w-[420px] rounded-full bg-[hsl(var(--brand-2))]/14 blur-[170px]" />

          {/* grid */}
          <div className="absolute inset-0 opacity-[0.42] [mask-image:radial-gradient(ellipse_at_center,black,transparent_68%)]">
            <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:52px_52px]" />
          </div>

          {/* vignette */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </div>

        <MotionSection className="container-page py-24 text-center lg:py-32">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur sm:text-sm"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            Team & collaboration
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={fadeUp} className="h1 mx-auto mt-8 max-w-4xl">
            A small team built for{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-[hsl(var(--brand-2))] bg-clip-text text-transparent">
                focused, high-quality work
              </span>
              <span className="absolute inset-x-0 -bottom-2 h-[10px] bg-primary/18 blur-xl" />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={fadeUp} className="lead mx-auto mt-6 max-w-3xl">
            We stay intentionally small to move faster, think clearer, and
            maintain consistency across design and engineering.
          </motion.p>
        </MotionSection>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* TEAM PRINCIPLES                                                    */}
      {/* ------------------------------------------------------------------ */}

      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="kicker">OUR PHILOSOPHY</p>
            <h2 className="h2 mt-4">Built like a product team</h2>
            <p className="lead mt-5">
              Not an agency assembly line — a calm, focused setup.
            </p>
          </div>

          <MotionSection className="mt-14 grid gap-5 lg:grid-cols-3">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <motion.article
                  key={p.title}
                  variants={fadeUp}
                  className="card-surface p-7 shadow-soft transition-all hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border/70 bg-background/40">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </motion.article>
              );
            })}
          </MotionSection>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* WHY SMALL TEAMS WIN                                                */}
      {/* ------------------------------------------------------------------ */}

      <section className="section">
        <div className="container-page">
          <MotionSection className="grid gap-6 md:grid-cols-3">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  variants={fadeUp}
                  className="card-surface p-6 shadow-soft transition hover:-translate-y-1"
                >
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
                </motion.div>
              );
            })}
          </MotionSection>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* WORKING STYLE                                                      */}
      {/* ------------------------------------------------------------------ */}

      <section className="section">
        <div className="container-page">
          <MotionSection className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <motion.div variants={fadeUp} className="lg:col-span-6">
              <p className="kicker">COLLABORATION</p>
              <h2 className="h2 mt-4">Direct, clear, and efficient</h2>
              <p className="lead mt-5 max-w-xl">
                You communicate directly with the people doing the work — no
                middle layers, no delays.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li>• Direct Slack or email communication</li>
                <li>• Weekly progress updates</li>
                <li>• Clear scope and milestones</li>
                <li>• Fast feedback cycles</li>
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Work with us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-border/80 bg-card/50 px-6 text-sm font-medium transition hover:bg-card/70"
                >
                  View services
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="lg:col-span-6 card-surface p-7 shadow-soft"
            >
              <div className="text-sm font-semibold">Typical project team</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Smaller teams maintain quality, consistency, and speed — the
                foundation of premium SaaS products.
              </p>

              <div className="mt-6 rounded-2xl border border-border/70 bg-background/40 p-5">
                <div className="text-sm font-semibold">Team composition</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  1–2 senior designers • 1–2 senior engineers
                </p>
              </div>
            </motion.div>
          </MotionSection>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}
