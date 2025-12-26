"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Sparkles, Code2 } from "lucide-react";
import { ButtonLink } from "../../components/ui/button";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
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
          Software-first. Performance-driven. Future-ready.
        </motion.div>

        {/* Heading */}
        <motion.h1 variants={fadeUp} className="h1 mx-auto mt-8 max-w-4xl">
          We design and engineer{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-primary to-[hsl(var(--brand-2))] bg-clip-text text-transparent">
              scalable software experiences
            </span>
            <span className="absolute inset-x-0 -bottom-2 h-[10px] bg-primary/18 blur-xl" />
          </span>{" "}
          for modern businesses.
        </motion.h1>

        {/* Description */}
        <motion.p variants={fadeUp} className="lead mx-auto mt-6 max-w-3xl">
          We help startups, SaaS companies, and growing teams build
          high-performance websites, internal tools, and automation-ready
          platforms using clean architecture, modern UI systems, and scalable
          engineering practices.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <ButtonLink href="/contact" size="lg" className="group">
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </ButtonLink>

          <ButtonLink href="/services" size="lg" variant="outline">
            View Capabilities
          </ButtonLink>
        </motion.div>

        {/* Trust bullets */}
        <motion.div
          variants={fadeUp}
          className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {[
            { icon: Code2, text: "Clean, scalable architecture" },
            { icon: Zap, text: "Fast delivery & performance" },
            { icon: ShieldCheck, text: "Secure & best practices" },
          ].map(({ icon: Icon, text }) => (
            <motion.div
              key={text}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="card-surface shadow-soft flex items-center justify-center gap-2 px-4 py-3 text-sm text-muted-foreground"
            >
              <Icon className="h-4 w-4 text-primary" />
              {text}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
