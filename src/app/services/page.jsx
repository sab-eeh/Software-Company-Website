"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  LayoutGrid,
  Smartphone,
  Bot,
  Brain,
  Search,
  Palette,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import CTA from "../components/CTA";
import { ButtonLink } from "../../components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Fast, modern websites and web apps built with scalable components and clean architecture.",
    points: ["Next.js App Router", "SEO-friendly structure", "Responsive UI system"],
  },
  {
    icon: LayoutGrid,
    title: "SaaS & Platform Development",
    desc: "Build dashboards and SaaS systems ready to scale — with a maintainable frontend foundation.",
    points: ["Reusable components", "Auth-ready UI patterns", "Performance-first setup"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Mobile-first experiences designed for usability and speed — from UI to integration planning.",
    points: ["UX-first screens", "Clear navigation flows", "Production-ready UI"],
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Automations that reduce manual work and improve operations with practical AI workflows.",
    points: ["Workflow automation", "Tool integration", "Time-saving systems"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    desc: "Predictive solutions and ML integrations focused on real business outcomes — not hype.",
    points: ["Use-case driven ML", "Data workflows", "Model integration planning"],
  },
  {
    icon: Search,
    title: "SEO & Performance",
    desc: "Speed, structure, and analytics that help your site rank and convert across devices.",
    points: ["Core Web Vitals", "Tracking readiness", "Fast UI + assets"],
  },
  {
    icon: Palette,
    title: "UI & Brand Design",
    desc: "Modern design systems that feel premium, consistent, and conversion-focused.",
    points: ["Type + spacing system", "Component library", "High-end visual polish"],
  },
  {
    icon: Sparkles,
    title: "Marketing & Growth Support",
    desc: "Landing pages and content structure built to increase leads and user trust.",
    points: ["Conversion flow", "Clear sections", "CTA + trust blocks"],
  },
];

const processSteps = [
  {
    title: "Discover",
    desc: "We clarify goals, pages, audience, and success metrics.",
  },
  {
    title: "Design",
    desc: "We set the design system and build the layout rhythm.",
  },
  {
    title: "Build",
    desc: "We implement clean components with responsive behavior.",
  },
  {
    title: "Polish & Launch",
    desc: "We optimize performance, refine UI, and launch confidently.",
  },
];

const tech = [
  { title: "Next.js", desc: "App Router, server-first structure where needed." },
  { title: "Tailwind CSS", desc: "Consistent spacing + rapid premium UI." },
  { title: "Framer Motion", desc: "Subtle animations & micro-interactions." },
  { title: "SEO Ready", desc: "Semantic HTML, performance and structure." },
];

const engagement = [
  {
    title: "Landing Page / MVP",
    desc: "Best for fast launches and validation.",
    bullets: ["1–2 pages", "Premium UI", "Quick turnaround"],
  },
  {
    title: "SaaS Marketing Site",
    desc: "Best for strong brand and conversions.",
    bullets: ["Multiple pages", "Design system", "Conversion sections"],
    featured: true,
  },
  {
    title: "Full Product Build",
    desc: "Best for dashboards and platforms.",
    bullets: ["Scalable components", "UI architecture", "Long-term support"],
  },
];

const faqs = [
  {
    q: "Do you only build marketing websites?",
    a: "No. We can build full SaaS dashboards and platforms — we just prefer completing the marketing frontend foundation first.",
  },
  {
    q: "Can you match a reference SaaS website style?",
    a: "Yes. Share 2–3 references and we’ll align spacing, typography, and UI patterns while keeping your brand unique.",
  },
  {
    q: "Will this be responsive and accessible?",
    a: "Yes. Mobile-first layout, semantic structure, focus-visible states, and readable contrast are included by default.",
  },
  {
    q: "Can we integrate the contact form later?",
    a: "Yes. After frontend is complete, we’ll build the API route + validation + email sending.",
  },
];

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ServicesPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-30%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/14 blur-[170px]" />
          <div className="absolute left-[6%] top-[50%] h-[420px] w-[420px] rounded-full bg-[hsl(var(--brand-2))]/14 blur-[170px]" />
          <div className="absolute inset-0 opacity-[0.38] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
            <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:56px_56px]" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </div>

        <motion.div
          variants={container}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? false : "show"}
          className="container-page py-20 sm:py-24"
        >
          <div className="mx-auto max-w-3xl text-center">
            <motion.p variants={fadeUp} className="kicker">
              SERVICES
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              Everything you need to build, launch, and scale
            </motion.h1>

            <motion.p variants={fadeUp} className="lead mt-6">
              Premium SaaS-style UI, performance-first development, and a clean component system —
              built with Next.js + Tailwind.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <ButtonLink href="/contact" size="lg" className="group">
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </ButtonLink>

              <Link
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border/80 bg-card/40 px-8 text-sm font-medium hover:bg-card/70"
              >
                Explore services
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {[
                { icon: Zap, text: "Fast delivery & polish" },
                { icon: ShieldCheck, text: "Best practices + secure UI" },
                { icon: CheckCircle2, text: "Maintainable component system" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="card-surface shadow-soft flex items-center justify-center gap-2 px-4 py-3 text-sm text-muted-foreground"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="kicker">CAPABILITIES</p>
            <h2 className="h2 mt-4">Services designed for modern businesses</h2>
            <p className="lead mt-5">
              Choose what you need now — and scale later without rewriting everything.
            </p>
          </div>

          <motion.div
            variants={container}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <motion.article
                  key={s.title}
                  variants={fadeUp}
                  className="card-surface shadow-soft group p-6 hover:bg-card/80"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border/70 bg-background/40">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="kicker">PROCESS</p>
              <h2 className="h2 mt-4">A simple workflow that ships</h2>
              <p className="lead mt-5 max-w-xl">
                Clear steps, fast feedback, and a predictable delivery so your project doesn’t drag.
              </p>

              <div className="mt-8 card-surface shadow-soft p-6">
                <div className="text-sm font-semibold">What you’ll feel</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Organized, calm, and confident — not confused with endless revisions.
                </p>
              </div>
            </div>

            <motion.div
              variants={container}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-7 grid gap-5 sm:grid-cols-2"
            >
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  className="card-surface shadow-soft p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">{step.title}</div>
                    <div className="text-xs text-muted-foreground">
                      Step {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="kicker">STACK</p>
            <h2 className="h2 mt-4">Modern tools, clean output</h2>
            <p className="lead mt-5">
              We keep the stack lean so the code stays maintainable and fast.
            </p>
          </div>

          <motion.div
            variants={container}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {tech.map((t) => (
              <motion.article
                key={t.title}
                variants={fadeUp}
                className="card-surface shadow-soft p-6"
              >
                <div className="text-sm font-semibold">{t.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </motion.article>
            ))}
          </motion.div>

          <div className="mx-auto mt-10 max-w-4xl card-surface shadow-soft p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold">Want this exact SaaS look?</div>
                <div className="text-sm text-muted-foreground">
                  Share references — we’ll match the quality while keeping it unique.
                </div>
              </div>
              <ButtonLink href="/contact" variant="outline" size="md">
                Share references
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="kicker">ENGAGEMENT</p>
            <h2 className="h2 mt-4">Pick a model that fits</h2>
            <p className="lead mt-5">
              Start with a clear scope and we can expand later without redesigning everything.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {engagement.map((m) => (
              <article
                key={m.title}
                className={cx(
                  "card-surface shadow-soft p-7",
                  m.featured && "ring-1 ring-primary/35"
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold">{m.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
                  </div>
                  {m.featured && (
                    <span className="rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                      Best Value
                    </span>
                  )}
                </div>

                <ul className="mt-6 space-y-3 text-sm">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <ButtonLink
                    href="/contact"
                    size="lg"
                    variant={m.featured ? "primary" : "outline"}
                    className="w-full justify-center"
                  >
                    Get started
                    <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="kicker">FAQ</p>
            <h2 className="h2 mt-4">Questions, answered</h2>
            <p className="lead mt-5">Clear expectations = smooth delivery.</p>
          </div>

          <div className="mx-auto mt-14 max-w-3xl space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="card-surface shadow-soft group overflow-hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
                  <span className="text-sm font-semibold">{item.q}</span>
                  <span className="text-muted-foreground transition group-open:rotate-180">
                    <ArrowRight className="h-4 w-4 rotate-90" />
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl card-surface shadow-soft p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold">Not sure what you need?</div>
                <div className="text-sm text-muted-foreground">
                  Send your idea — we’ll recommend the best structure.
                </div>
              </div>
              <ButtonLink href="/contact" size="md">
                Message us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* CTA (reuse) */}
      <CTA />
    </main>
  );
}
