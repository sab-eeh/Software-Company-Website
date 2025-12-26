"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { ButtonLink } from "../../components/ui/button";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = useMemo(
    () => (href) =>
      href === "/" ? pathname === "/" : pathname?.startsWith(href),
    [pathname]
  );

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = original);
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-card focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <div className="border-b border-border/60 bg-background/60 backdrop-blur">
        <div className="container-page">
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-2xl border border-border/70 bg-card/60 shadow-soft">
                <span className="text-sm font-semibold text-foreground">S</span>
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-tight">
                  SoftwareCo
                </div>
                <div className="text-xs text-muted-foreground">
                  Build • Scale • Automate
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden items-center gap-1 md:flex"
              aria-label="Primary"
            >
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    "rounded-full px-4 py-2 text-sm transition",
                    isActive(item.href)
                      ? "bg-card/70 text-foreground"
                      : "text-muted-foreground hover:bg-card/60 hover:text-foreground"
                  )}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 md:flex">
              <ButtonLink href="/contact" size="md" className="group">
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </ButtonLink>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-card/50 hover:bg-card/70"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/55"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-1/2 top-4 w-[92%] -translate-x-1/2">
            <div className="card-surface shadow-soft p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">Menu</div>
                <button
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 bg-card/50 hover:bg-card/70"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-3 grid gap-1" aria-label="Mobile primary">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cx(
                      "rounded-2xl px-4 py-3 text-sm transition",
                      isActive(item.href)
                        ? "bg-card/80 text-foreground"
                        : "text-muted-foreground hover:bg-card/60 hover:text-foreground"
                    )}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-4">
                <ButtonLink
                  href="/contact"
                  size="lg"
                  className="w-full justify-center group"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </ButtonLink>
                <p className="mt-3 text-xs text-muted-foreground text-center">
                  Clean UI • Fast builds • Premium feel
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
