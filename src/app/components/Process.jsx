import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    desc: "We clarify goals, users, pages, and success metrics so we build the right thing.",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "We define layout rhythm, typography, and UI patterns before heavy development.",
  },
  {
    icon: Code2,
    title: "Build",
    desc: "Next.js + Tailwind implementation with clean components and responsiveness.",
  },
  {
    icon: Rocket,
    title: "Launch & Improve",
    desc: "Performance polish, QA, and iteration based on real user behavior.",
  },
];

export default function Process() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="kicker">PROCESS</p>
          <h2 className="h2 mt-4">Simple, reliable delivery</h2>
          <p className="lead mt-5">
            A predictable workflow keeps quality high and prevents endless
            revisions.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <article key={s.title} className="card-surface shadow-soft p-6">
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border/70 bg-background/40">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Step {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>
                <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
