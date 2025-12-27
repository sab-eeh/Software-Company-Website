import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import CTA from "../components/CTA";

const values = [
  {
    icon: Sparkles,
    title: "Premium by design",
    desc: "We obsess over spacing, hierarchy, and clarity so your brand feels trustworthy at first glance.",
  },
  {
    icon: Zap,
    title: "Performance-first",
    desc: "Fast loading, clean components, and best practices that keep sites smooth on every device.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable engineering",
    desc: "Maintainable code and scalable structure so your website doesn’t break when you grow.",
  },
];

const stats = [
  { label: "Projects shipped", value: "50+" },
  { label: "Avg. delivery time", value: "7–14 days" },
  { label: "Client satisfaction", value: "High" },
  { label: "Long-term partners", value: "30+" },
];

const bullets = [
  "Clear communication and weekly progress updates",
  "Mobile-first responsive design",
  "Accessible UI with proper focus states",
  "SEO-friendly structure and performance polish",
  "Reusable components + scalable design system",
];

export const metadata = {
  title: "About — SoftwareCo",
  description:
    "Learn about SoftwareCo — a design + engineering studio building premium SaaS websites and scalable software experiences.",
};

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-30%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/14 blur-[170px]" />
          <div className="absolute left-[6%] top-[48%] h-[420px] w-[420px] rounded-full bg-[hsl(var(--brand-2))]/14 blur-[170px]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container-page py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="kicker">ABOUT</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Building modern, premium software experiences
            </h1>
            <p className="lead mt-6">
              We’re a design + engineering studio focused on clean UI systems,
              strong performance, and conversion-focused marketing sites — built
              with Next.js and Tailwind.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow-soft hover:brightness-[1.03]"
              >
                Work with us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border/80 bg-card/40 px-8 text-sm font-medium hover:bg-card/70"
              >
                Remember our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STORY + PRINCIPLES */}
      <section className="section">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <p className="kicker">OUR STORY</p>
              <h2 className="h2 mt-4">Why we do what we do</h2>
              <p className="lead mt-5 max-w-xl">
                Most websites look “okay” — but don’t feel premium. We bridge
                the gap between beautiful UI and real engineering so your brand
                looks trustworthy and works fast.
              </p>

              <div className="mt-8 space-y-4">
                <div className="card-surface shadow-soft p-6">
                  <div className="text-sm font-semibold">
                    Design that earns trust
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Visual hierarchy and spacing aren’t decoration — they
                    communicate reliability. We craft layouts that feel
                    structured, calm, and premium.
                  </p>
                </div>

                <div className="card-surface shadow-soft p-6">
                  <div className="text-sm font-semibold">
                    Engineering that scales
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    We build with reusable components and clean architecture so
                    your website stays maintainable as you add pages, products,
                    or features.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <p className="kicker">WHAT YOU CAN EXPECT</p>
              <h2 className="h2 mt-4">A process built for delivery</h2>
              <p className="lead mt-5">
                Simple steps, clear communication, and focused execution.
              </p>

              <div className="mt-8 card-surface shadow-soft p-6">
                <ul className="space-y-3">
                  {bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 h-px w-full bg-border/60" />

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/70 bg-background/40 p-4">
                    <div className="text-sm font-semibold">Best for</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      SaaS marketing sites, company sites, product launches,
                      service websites.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-background/40 p-4">
                    <div className="text-sm font-semibold">Tech stack</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Next.js (App Router), Tailwind CSS, optional Framer
                      Motion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="card-surface shadow-soft p-6">
                <div className="text-2xl font-semibold tracking-tight">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="kicker">VALUES</p>
            <h2 className="h2 mt-4">How we work</h2>
            <p className="lead mt-5">
              A premium result comes from consistent standards — not random
              creativity.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <article key={v.title} className="card-surface shadow-soft p-7">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border/70 bg-background/40">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MINI TEAM / SOCIAL PROOF */}
      <section className="section">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="kicker">TEAM</p>
              <h2 className="h2 mt-4">Small team. Senior quality.</h2>
              <p className="lead mt-5 max-w-xl">
                We keep the team lean so you get focused attention. That means
                faster feedback, cleaner output, and fewer layers between you
                and the work.
              </p>

              <div className="mt-8 card-surface shadow-soft p-6">
                <div className="text-sm font-semibold">
                  Want to collaborate?
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tell us what you’re building. We’ll suggest the best structure
                  and timeline.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-soft hover:brightness-[1.03]"
                  >
                    Contact us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-border/80 bg-card/40 px-6 text-sm font-medium hover:bg-card/70"
                  >
                    View services
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="card-surface shadow-soft p-7">
                <div className="text-sm font-semibold">
                  What makes us different
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  We combine conversion-driven UI with production-ready
                  engineering. No heavy UI libraries unless needed, no messy
                  copy/paste components — just a clean system.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/70 bg-background/40 p-5">
                    <div className="text-sm font-semibold">Design systems</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Consistent spacing, type scale, buttons, cards, section
                      rhythm.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-background/40 p-5">
                    <div className="text-sm font-semibold">Clean code</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Reusable components, readable structure, scalable
                      patterns.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-border/70 bg-background/40 p-5">
                  <div className="text-sm font-semibold">Typical timeline</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Marketing site: 7–14 days • Larger scope: custom plan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA reuse */}
      <CTA />
    </main>
  );
}
