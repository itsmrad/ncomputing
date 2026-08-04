import Link from "next/link";

import { cn } from "@/lib/utils";

/** Wordmark. Swap the span for an SVG once the real logo lands. */
export function NavLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="ncomputing home"
      className={cn(
        "text-ink hover:text-ink-subtle rounded-sm text-[21px] leading-none font-bold tracking-[-0.02em] transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-brand/40",
        className,
      )}
    >
      ncomputing
    </Link>
  );
}
