"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { ButtonLink } from "../../components/ui/button";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const tiers = [
  {
    name: "Starter",
    price: "$299",
    desc: "A solid starting point for early ideas and quick launches.",
    highlights: [
      "1–2 focused pages",
      "Clean, responsive layout",
      "Foundational optimization",
      "Quick turnaround",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "$799",
    desc: "Ideal for growing products that need clarity and conversion.",
    highlights: [
      "Multiple sections or pages",
      "Cohesive design system",
      "Performance & UX polish",
      "Conversion-focused structure",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    desc: "Best for complex products and long-term collaboration.",
    highlights: [
      "Custom scope & planning",
      "Advanced interface patterns",
      "Scalable structure",
      "Ongoing support options",
    ],
    featured: false,
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

export default function Pricing() {
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
            PRICING
          </motion.p>

          <motion.h2 variants={fadeUp} className="h2 mt-4">
            Simple plans with clear value
          </motion.h2>

          <motion.p variants={fadeUp} className="lead mt-5">
            Start with what you need today, and expand later as your goals grow.
          </motion.p>
        </motion.header>

        {/* ------------------------------------------------------------------ */}
        {/* PRICING GRID                                                       */}
        {/* ------------------------------------------------------------------ */}

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? false : "visible"}
          viewport={{ once: true, margin: "-120px" }}
          variants={container}
          className="mt-16 grid gap-6 lg:grid-cols-3"
        >
          {tiers.map((tier) => (
            <motion.article
              key={tier.name}
              variants={fadeUp}
              className={[
                "relative group card-surface p-8 shadow-soft transition-all duration-300",
                "hover:-translate-y-2 hover:shadow-lg",
                tier.featured ? "ring-1 ring-primary/35" : "",
              ].join(" ")}
            >
              {/* Featured badge */}
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-border/70 bg-card/80 px-4 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                  Most popular
                </div>
              )}

              {/* Plan info */}
              <h3 className="text-base font-semibold">{tier.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tier.desc}</p>

              {/* Price */}
              <div className="mt-6 flex items-end gap-2">
                <div className="text-3xl font-semibold tracking-tight">
                  {tier.price}
                </div>
                <span className="pb-1 text-sm text-muted-foreground">
                  / project
                </span>
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-3 text-sm">
                {tier.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8">
                <ButtonLink
                  href="/contact"
                  size="lg"
                  variant={tier.featured ? "primary" : "outline"}
                  className="w-full justify-center"
                >
                  Choose {tier.name}
                </ButtonLink>
              </div>

              {/* Subtle hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
