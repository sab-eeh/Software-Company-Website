import { ShieldCheck, Zap, LayoutGrid, Sparkles } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Premium UI that converts",
    desc: "Clean hierarchy, modern layouts, and content structure designed to turn visitors into leads.",
  },
  {
    icon: Zap,
    title: "Performance-first builds",
    desc: "Fast pages, optimized assets, and best practices to keep your Lighthouse scores high.",
  },
  {
    icon: LayoutGrid,
    title: "Reusable system",
    desc: "A consistent design system so your site scales without turning into a messy codebase.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by default",
    desc: "Sensible defaults, accessibility, and reliable frontend patterns for a safer experience.",
  },
];

export default function Features() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="kicker">WHY US</p>
            <h2 className="h2 mt-4">Built like a top SaaS website</h2>
            <p className="lead mt-5 max-w-xl">
              A premium look is not only visuals — it’s rhythm, clarity, and a
              smooth journey from interest to action.
            </p>

            <div className="mt-8 space-y-3 text-sm text-muted-foreground">
              <div className="card-surface p-4">
                <div className="font-semibold text-foreground">
                  What you get
                </div>
                <p className="mt-1">
                  Modern UI, consistent components, fast performance, and
                  conversion-focused layout.
                </p>
              </div>
              <div className="card-surface p-4">
                <div className="font-semibold text-foreground">
                  What we avoid
                </div>
                <p className="mt-1">
                  Overdone shadows, confusing typography, messy spacing, and
                  hard-to-maintain code.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <article
                    key={f.title}
                    className="card-surface shadow-soft p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border/70 bg-background/40">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold">{f.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-5 card-surface p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-semibold">
                    Need a quick estimate?
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Share your scope and timeline — we’ll suggest the best
                    approach.
                  </div>
                </div>
                <a
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-soft hover:brightness-[1.03]"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
