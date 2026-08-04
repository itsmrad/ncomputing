import Link from "next/link";

import { BrandLogo } from "@/components/shared/brand-logo";
import { cn } from "@/lib/utils";

export function NavLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="NComputing home"
      className={cn(
        "focus-visible:ring-brand/40 inline-flex rounded-sm transition-opacity duration-150 outline-none hover:opacity-70 focus-visible:ring-2",
        className,
      )}
    >
      <BrandLogo className="h-8" priority />
    </Link>
  );
}
