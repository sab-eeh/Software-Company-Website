"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  Clock,
} from "lucide-react";

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
/*                                   PAGE                                     */
/* -------------------------------------------------------------------------- */

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      {/* ------------------------------------------------------------------ */}
      {/* HERO (MATCHES HOME / ABOUT / TEAM)                                  */}
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
            Contact & inquiries
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={fadeUp} className="h1 mx-auto mt-8 max-w-4xl">
            Let’s talk about{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-[hsl(var(--brand-2))] bg-clip-text text-transparent">
                your next product
              </span>
              <span className="absolute inset-x-0 -bottom-2 h-[10px] bg-primary/18 blur-xl" />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={fadeUp} className="lead mx-auto mt-6 max-w-3xl">
            Share your idea, goals, or timeline. We’ll help you clarify the
            scope and decide the best way forward — no pressure.
          </motion.p>
        </MotionSection>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CONTACT GRID                                                       */}
      {/* ------------------------------------------------------------------ */}

      <section className="section">
        <div className="container-page">
          <MotionSection className="grid gap-12 lg:grid-cols-12">
            {/* LEFT: CONTACT INFO */}
            <motion.div variants={fadeUp} className="lg:col-span-5">
              <p className="kicker">GET IN TOUCH</p>
              <h2 className="h2 mt-4">Contact details</h2>
              <p className="lead mt-5 max-w-md">
                We usually respond within one business day.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm font-semibold">Email</div>
                    <a
                      href="mailto:hello@yourcompany.com"
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      themastek.co@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm font-semibold">Phone</div>
                    <p className="text-sm text-muted-foreground">
                      +92 3198 548 849
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm font-semibold">Location</div>
                    <p className="text-sm text-muted-foreground">
                      Remote • Worldwide
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm font-semibold">Availability</div>
                    <p className="text-sm text-muted-foreground">
                      Monday – Friday
                    </p>
                  </div>
                </div>
              </div>

              {/* Best Fit */}
              <div className="mt-10 card-surface p-6 shadow-soft">
                <div className="text-sm font-semibold">Best fit projects</div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    SaaS & startup products
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Marketing & product websites
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Dashboards & internal tools
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* RIGHT: FORM */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-7 card-surface p-8 shadow-soft"
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Send a message</h3>
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                Tell us a bit about your project and we’ll take it from there.
              </p>

              <form
                className="mt-6 space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <input
                      type="text"
                      required
                      className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      required
                      className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Project type</label>
                  <select className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>SaaS website</option>
                    <option>Product / dashboard</option>
                    <option>Marketing site</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    rows={4}
                    required
                    className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your idea, goals, or timeline…"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Send message
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <p className="mt-4 text-xs text-muted-foreground">
                By submitting this form, you agree to be contacted regarding
                your inquiry.
              </p>
            </motion.div>
          </MotionSection>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}
