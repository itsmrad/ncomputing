import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { NAV_ACTIONS } from "../config/nav-config";

export function NavActions({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Link
        href={NAV_ACTIONS.signIn.href}
        className="border-hairline text-brand hover:bg-surface-subtle flex h-[30px] items-center rounded-sm border bg-white px-3 text-[15px] font-medium transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
      >
        {NAV_ACTIONS.signIn.label}
      </Link>
      <Link
        href={NAV_ACTIONS.contactSales.href}
        className="group bg-brand hover:bg-brand-hover flex h-[30px] items-center gap-1 rounded-sm px-3 text-[15px] font-medium text-white transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
      >
        {NAV_ACTIONS.contactSales.label}
        <ChevronRight
          aria-hidden
          strokeWidth={2.5}
          className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
        />
      </Link>
    </div>
  );
}
