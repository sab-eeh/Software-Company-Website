import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]/60 focus-visible:ring-offset-0 " +
  "disabled:pointer-events-none disabled:opacity-60";

const variants = {
  primary:
    "bg-primary text-primary-foreground shadow-soft hover:brightness-[1.03] active:brightness-[0.98]",
  outline:
    "border border-border/80 bg-card/40 text-foreground hover:bg-card/70",
  ghost: "text-foreground/90 hover:bg-card/60",
};

const sizes = {
  md: "h-11 rounded-full px-6 text-sm",
  lg: "h-12 rounded-full px-8 text-sm",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
