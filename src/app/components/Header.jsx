"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-card focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      {/* Header bar */}
      <div className="border-b border-border/60 bg-background/70 backdrop-blur">
        <div className="container-page">
          {/* ⬇ Broader header height */}
          <div className="flex h-20 items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              {/* Controlled logo sizing */}
              <div className="relative">
                <Image
                  src="/Logo.png"
                  alt="Company logo"
                  width={140}
                  height={33}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav
              className="hidden items-center gap-1 md:flex"
              aria-label="Primary"
            >
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    "rounded-full px-5 py-2.5 text-sm transition-all",
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

            {/* DESKTOP CTA */}
            <div className="hidden items-center gap-3 md:flex">
              <ButtonLink href="/contact" size="md" className="group">
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </ButtonLink>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-card/50 transition hover:bg-card/70"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/55"
            onClick={() => setOpen(false)}
          />

          <div className="absolute left-1/2 top-6 w-[92%] -translate-x-1/2">
            <div className="card-surface shadow-soft p-5">
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

              <nav className="mt-4 grid gap-1">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cx(
                      "rounded-2xl px-4 py-3 text-sm transition-all",
                      isActive(item.href)
                        ? "bg-card/80 text-foreground"
                        : "text-muted-foreground hover:bg-card/60 hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-5">
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
