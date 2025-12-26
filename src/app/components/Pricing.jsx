import { Check } from "lucide-react";
import { ButtonLink } from "../../components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: "$299",
    desc: "Best for landing pages & MVP launches.",
    highlights: [
      "1–2 pages",
      "Modern UI + responsive",
      "Basic SEO setup",
      "Fast delivery",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "$799",
    desc: "Best for SaaS marketing websites.",
    highlights: [
      "Up to 6 sections/pages",
      "Premium design system",
      "Performance optimization",
      "Conversion-focused copy structure",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    desc: "Best for full web apps & dashboards.",
    highlights: [
      "Design + build",
      "Advanced components",
      "Auth-ready UI",
      "Long-term support",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="kicker">PRICING</p>
          <h2 className="h2 mt-4">Simple plans, clear value</h2>
          <p className="lead mt-5">
            Start small, scale later. We can customize based on your scope.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={[
                "card-surface shadow-soft p-7",
                t.featured ? "ring-1 ring-primary/35" : "",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold">{t.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                </div>
                {t.featured && (
                  <span className="rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                    Most Popular
                  </span>
                )}
              </div>

              <div className="mt-6 flex items-end gap-2">
                <div className="text-3xl font-semibold tracking-tight">
                  {t.price}
                </div>
                <div className="pb-1 text-sm text-muted-foreground">
                  / project
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {t.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <ButtonLink
                  href="/contact"
                  size="lg"
                  variant={t.featured ? "primary" : "outline"}
                  className="w-full justify-center"
                >
                  Choose {t.name}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
