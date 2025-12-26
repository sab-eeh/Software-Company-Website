import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const COLS = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services" },
      { label: "SaaS Platforms", href: "/services" },
      { label: "AI Automation", href: "/services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Process", href: "/services" },
      { label: "FAQ", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl border border-border/70 bg-card/60 shadow-soft">
                <span className="text-sm font-semibold">S</span>
              </div>
              <div>
                <div className="text-sm font-semibold tracking-tight">
                  SoftwareCo
                </div>
                <div className="text-xs text-muted-foreground">
                  Premium builds for modern teams
                </div>
              </div>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-sm">
              We design and build high-performance websites, SaaS products, and
              automation-ready systems with clean architecture and
              conversion-focused UI.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                aria-label="Twitter"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-card/50 hover:bg-card/70"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-card/50 hover:bg-card/70"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-card/50 hover:bg-card/70"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Columns */}
          <div className="lg:col-span-8">
            <div className="grid gap-8 sm:grid-cols-3">
              {COLS.map((col) => (
                <div key={col.title}>
                  <div className="text-sm font-semibold">{col.title}</div>
                  <ul className="mt-4 grid gap-2">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 card-surface p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-semibold">Want a quote?</div>
                  <div className="text-sm text-muted-foreground">
                    Tell us your scope — we’ll reply with next steps.
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-soft hover:brightness-[1.03]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-muted-foreground">
            © {year} SoftwareCo. All rights reserved.
          </div>
          <div className="flex gap-4 text-xs">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
