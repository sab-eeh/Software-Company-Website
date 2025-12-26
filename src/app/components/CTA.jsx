import { ArrowRight } from "lucide-react";
import { ButtonLink } from "../../components/ui/button";

export default function CTA() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-8 shadow-soft sm:p-10">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-[90px]" />
          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[hsl(var(--brand-2))]/14 blur-[90px]" />

          <div className="relative grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Ready to build something premium?
              </h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                Send your scope — we’ll reply with the best approach, timeline,
                and next steps.
              </p>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <ButtonLink
                href="/contact"
                size="lg"
                className="group w-full justify-center lg:w-auto"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
