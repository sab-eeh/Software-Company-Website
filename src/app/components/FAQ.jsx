"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const faqs = [
  {
    q: "How fast can a project be delivered?",
    a: "Most marketing websites are completed within a few days to two weeks, depending on scope, content readiness, and feedback speed.",
  },
  {
    q: "Can you handle both marketing sites and full products?",
    a: "Yes. We often start with a marketing presence and extend the same system into dashboards, internal tools, or full products.",
  },
  {
    q: "Will the website work well on all devices?",
    a: "Absolutely. Layouts are designed mobile-first and tested across screen sizes to ensure clarity and usability everywhere.",
  },
  {
    q: "Do you help with marketing structure and messaging?",
    a: "Yes. We help shape page structure, hierarchy, and messaging so visitors understand the value quickly and clearly.",
  },
  {
    q: "Is search visibility and performance considered?",
    a: "Yes. Structure, readability, and performance are planned from the beginning to support discoverability and fast load times.",
  },
  {
    q: "Can new features or pages be added later?",
    a: "Definitely. Everything is built to be extended cleanly as your needs grow.",
  },
  {
    q: "How involved do we need to be during the project?",
    a: "We keep involvement lightweight — clear checkpoints, focused feedback, and regular updates without unnecessary meetings.",
  },
];

/* -------------------------------------------------------------------------- */
/*                               ANIMATIONS                                   */
/* -------------------------------------------------------------------------- */

const contentVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

/* -------------------------------------------------------------------------- */
/*                                   COMPONENT                                 */
/* -------------------------------------------------------------------------- */

export default function FAQ() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section className="section relative">
      <div className="container-page">
        {/* ------------------------------------------------------------------ */}
        {/* HEADER                                                             */}
        {/* ------------------------------------------------------------------ */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="kicker">FAQ</p>
          <h2 className="h2 mt-4">Clear answers, upfront</h2>
          <p className="lead mt-5">
            Transparency helps projects move faster and with fewer surprises.
          </p>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* FAQ LIST                                                           */}
        {/* ------------------------------------------------------------------ */}

        <div className="mx-auto mt-16 max-w-3xl space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `${baseId}-panel-${idx}`;
            const buttonId = `${baseId}-button-${idx}`;

            return (
              <div
                key={item.q}
                className="card-surface shadow-soft overflow-hidden"
              >
                {/* Question */}
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-card/70"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  <span className="text-sm font-semibold">{item.q}</span>
                  <ChevronDown
                    className={[
                      "h-5 w-5 text-muted-foreground transition-transform duration-300",
                      isOpen ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={reduceMotion ? false : "hidden"}
                      animate={reduceMotion ? false : "visible"}
                      exit={reduceMotion ? false : "exit"}
                      variants={contentVariants}
                      className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
