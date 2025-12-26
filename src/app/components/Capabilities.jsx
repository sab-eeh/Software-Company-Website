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

const items = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Fast, modern websites and web apps built for scale.",
  },
  {
    icon: Layers,
    title: "Software Development",
    description: "Custom platforms and SaaS systems engineered to grow.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Mobile applications focused on usability and performance.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Automations and AI-powered workflows that save time.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Predictive models and ML solutions for real use cases.",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description: "Optimized architecture, analytics, and speed.",
  },
  {
    icon: Palette,
    title: "UI & Graphic Design",
    description: "Clear, conversion-focused design systems.",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Growth-focused content and campaigns.",
  },
];

export default function Capabilities() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section">
      <div className="container-page">
        <header className="mx-auto max-w-3xl text-center">
          <p className="kicker">CAPABILITIES</p>
          <h2 className="h2 mt-4">Services designed for modern businesses</h2>
          <p className="lead mx-auto mt-5 max-w-2xl">
            Everything you need to design, build, and scale digital products.
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.04, duration: 0.5, ease: "easeOut" }}
                className="card-surface shadow-soft group p-6 hover:bg-card/80"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border/70 bg-background/40">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
