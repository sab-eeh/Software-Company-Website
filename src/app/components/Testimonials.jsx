const testimonials = [
  {
    name: "Ayesha K.",
    role: "Founder, SaaS Startup",
    quote:
      "The UI looks premium and the layout finally makes sense. We got more leads in the first week after launch.",
  },
  {
    name: "Hassan R.",
    role: "Product Manager",
    quote:
      "Fast delivery, clean code, and performance was solid. The site feels like a real product now.",
  },
  {
    name: "Sarah M.",
    role: "Marketing Lead",
    quote:
      "The typography and spacing upgrades made everything look 10x more trustworthy. Huge improvement.",
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="kicker">TESTIMONIALS</p>
          <h2 className="h2 mt-4">Loved by teams who ship</h2>
          <p className="lead mt-5">
            Social proof builds trust — especially for service businesses.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card-surface shadow-soft p-7">
              <blockquote className="text-sm leading-relaxed text-muted-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <div className="h-10 w-10 rounded-2xl border border-border/70 bg-background/40" />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
