"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How fast can you deliver?",
    a: "For a marketing website, typically 3–10 days depending on scope and content readiness.",
  },
  {
    q: "Do you also build dashboards or SaaS apps?",
    a: "Yes. We can build full products with auth-ready UI and scalable architecture after the marketing frontend is done.",
  },
  {
    q: "Will the site be responsive and accessible?",
    a: "Yes. We use semantic tags, focus-visible states, and mobile-first layout patterns.",
  },
  {
    q: "Can you integrate a contact form later?",
    a: "Yes. After the frontend is complete, we’ll build the API route + validation + email sending.",
  },
];

export default function FAQ() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="kicker">FAQ</p>
          <h2 className="h2 mt-4">Answers, upfront</h2>
          <p className="lead mt-5">
            Clear expectations make projects smoother.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `${baseId}-panel-${idx}`;
            const buttonId = `${baseId}-button-${idx}`;

            return (
              <div
                key={item.q}
                className="card-surface shadow-soft overflow-hidden"
              >
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  <span className="text-sm font-semibold">{item.q}</span>
                  <ChevronDown
                    className={[
                      "h-5 w-5 text-muted-foreground transition-transform",
                      isOpen ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={[
                    "px-6 pb-5 text-sm text-muted-foreground leading-relaxed",
                    isOpen ? "block" : "hidden",
                  ].join(" ")}
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
