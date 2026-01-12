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
  CheckCircle2,
  Sparkles,
  Layers,
  Rocket,
  Settings,
} from "lucide-react";

import CTA from "../components/CTA";
import { ButtonLink } from "../../components/ui/button";

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
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

/* -------------------------------------------------------------------------- */
/*                            MOTION WRAPPER                                  */
/* -------------------------------------------------------------------------- */

function MotionSection({ children, className }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

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

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Fast, modern websites and web apps built on clean, scalable architecture.",
    points: ["Next.js App Router", "SEO-first structure", "Responsive UI system"],
  },
  {
    icon: LayoutGrid,
    title: "SaaS & Platform Development",
    desc: "Dashboards and platforms designed to grow with your product.",
    points: [
      "Reusable components",
      "Auth-ready UI patterns",
      "Performance-first setup",
    ],
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Mobile-first interfaces focused on usability and clarity.",
    points: ["UX-first screens", "Clear navigation flows", "Production-ready UI"],
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Automation systems that reduce manual work using practical AI.",
    points: ["Workflow automation", "Tool integration", "Time-saving systems"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    desc: "ML integrations focused on real business outcomes.",
    points: ["Use-case driven ML", "Data workflows", "Integration planning"],
  },
  {
    icon: Search,
    title: "SEO & Performance",
    desc: "Speed, structure, and analytics that help your site convert.",
    points: ["Core Web Vitals", "Tracking readiness", "Optimized assets"],
  },
  {
    icon: Palette,
    title: "UI & Brand Design",
    desc: "Design systems that feel premium and conversion-focused.",
    points: ["Type & spacing system", "Component library", "Visual polish"],
  },
  {
    icon: Sparkles,
    title: "Marketing & Growth",
    desc: "Landing pages structured to build trust and generate leads.",
    points: ["Conversion flows", "Trust sections", "Clear CTAs"],
  },
];

const whoItsFor = [
  {
    icon: Rocket,
    title: "Startups",
    desc: "Launch fast with a solid, scalable frontend foundation.",
  },
  {
    icon: Layers,
    title: "SaaS Teams",
    desc: "Improve UI quality, performance, and maintainability.",
  },
  {
    icon: Settings,
    title: "Growing Businesses",
    desc: "Upgrade legacy UIs into modern, reliable systems.",
  },
];

const processSteps = [
  {
    title: "Discover",
    desc: "Clarify goals, users, constraints, and success metrics.",
  },
  {
    title: "Design",
    desc: "Define layout rhythm, components, and design systems.",
  },
  {
    title: "Build",
    desc: "Develop clean, responsive, and scalable components.",
  },
  {
    title: "Polish & Launch",
    desc: "Optimize performance, test thoroughly, and ship confidently.",
  },
];

const faqs = [
  {
    q: "Do you only build marketing websites?",
    a: "No. We also build SaaS dashboards, platforms, and internal tools.",
  },
  {
    q: "Can you match an existing SaaS design reference?",
    a: "Yes. Share references and we’ll align UI quality while keeping your brand unique.",
  },
  {
    q: "Is accessibility included?",
    a: "Yes. Semantic HTML, focus states, readable contrast, and keyboard support are standard.",
  },
  {
    q: "Can features be added later?",
    a: "Absolutely. We design systems so new features integrate cleanly.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                   PAGE                                     */
/* -------------------------------------------------------------------------- */

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                               */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-30%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/14 blur-[170px]" />
          <div className="absolute left-[6%] top-[50%] h-[420px] w-[420px] rounded-full bg-[hsl(var(--brand-2))]/14 blur-[170px]" />
        </div>

        <MotionSection className="container-page py-24 text-center lg:py-32">
          <motion.div
            variants={fadeUp}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur sm:text-sm"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            Services & capabilities
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="h1 mx-auto mt-8 max-w-4xl"
          >
            Everything you need to{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-[hsl(var(--brand-2))] bg-clip-text text-transparent">
                build, launch, and scale
              </span>
              <span className="absolute inset-x-0 -bottom-2 h-[10px] bg-primary/18 blur-xl" />
            </span>{" "}
            modern software.
          </motion.h1>

          <motion.p variants={fadeUp} className="lead mx-auto mt-6 max-w-3xl">
            From premium SaaS UI to performance-first development, we help teams
            ship reliable software systems that grow with their business.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <ButtonLink href="/contact" size="lg" className="group">
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </ButtonLink>

            <Link
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border/80 bg-card/50 px-8 text-sm font-medium transition hover:bg-card/70"
            >
              Explore services
            </Link>
          </motion.div>
        </MotionSection>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* WHO IT'S FOR                                                       */}
      {/* ------------------------------------------------------------------ */}

      <section className="section">
        <div className="container-page">
          <MotionSection className="grid gap-6 md:grid-cols-3">
            {whoItsFor.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="card-surface p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </MotionSection>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SERVICES GRID                                                      */}
      {/* ------------------------------------------------------------------ */}

      <section id="services" className="section">
        <div className="container-page">
          <MotionSection className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
          </MotionSection>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* PROCESS                                                            */}
      {/* ------------------------------------------------------------------ */}

      <section className="section">
        <div className="container-page">
          <MotionSection className="grid gap-6 md:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                className="card-surface p-6 shadow-soft"
              >
                <div className="text-sm font-semibold text-primary">
                  Step {i + 1}
                </div>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </MotionSection>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ                                                                */}
      {/* ------------------------------------------------------------------ */}

      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="card-surface shadow-soft transition"
              >
                <summary className="cursor-pointer px-6 py-5 font-semibold focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
                  {f.q}
                </summary>
                <div className="px-6 pb-5 text-sm text-muted-foreground">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
