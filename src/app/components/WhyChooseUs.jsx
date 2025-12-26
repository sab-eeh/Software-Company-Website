"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Code2,
  Layers,
  Users,
  Zap,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Engineering-first approach",
    description:
      "We don’t just design interfaces — we architect systems. Our work focuses on clean code, scalability, and long-term maintainability.",
  },
  {
    icon: Layers,
    title: "Scalable from day one",
    description:
      "Every product we build is designed to grow — from early-stage MVPs to production-grade platforms serving real users.",
  },
  {
    icon: ShieldCheck,
    title: "Security & best practices",
    description:
      "We follow industry best practices for performance, security, accessibility, and SEO — no shortcuts, no compromises.",
  },
  {
    icon: Zap,
    title: "Speed without sacrificing quality",
    description:
      "Efficient workflows, modern tooling, and clear communication allow us to move fast while keeping quality high.",
  },
  {
    icon: Users,
    title: "Clear communication & ownership",
    description:
      "We work as an extension of your team, taking ownership of outcomes and keeping you informed at every step.",
  },
  {
    icon: CheckCircle2,
    title: "Built for real business impact",
    description:
      "Our focus is not just delivery — it’s results. We align technology decisions with your business goals.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm font-medium tracking-wide text-primary"
          >
            WHY CHOOSE US
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            A technology partner, not just a service provider
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-5 text-base text-muted-foreground sm:text-lg"
          >
            We work closely with founders, product teams, and businesses to
            design and engineer software that is reliable, scalable, and built
            for real-world use.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group relative rounded-3xl border border-border/70 bg-card/60 p-6 backdrop-blur transition hover:bg-card/80"
            >
              {/* Icon */}
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-background/50">
                <item.icon className="h-5 w-5 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold">{item.title}</h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
