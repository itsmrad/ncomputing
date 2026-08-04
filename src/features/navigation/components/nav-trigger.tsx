"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

import { navPanelId, navTriggerId } from "../config/nav-config";
import type { NavItem } from "../types";

type NavTriggerProps = {
  item: NavItem;
  isOpen: boolean;
  /** True while another item's menu is open — Stripe fades the siblings back. */
  isDimmed: boolean;
  onOpen: (id: string | null) => void;
  onClose: () => void;
};

export function NavTrigger({
  item,
  isOpen,
  isDimmed,
  onOpen,
  onClose,
}: NavTriggerProps) {
  const className = cn(
    "flex h-full items-center gap-1 rounded-sm px-1.5 text-[15px] font-medium transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-brand/40",
    isDimmed ? "text-ink/50 hover:text-ink" : "text-ink",
  );

  if (!item.columns) {
    return (
      <Link
        href={item.href ?? "#"}
        className={className}
        onPointerEnter={() => onOpen(null)}
        onFocus={() => onOpen(null)}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      id={navTriggerId(item.id)}
      aria-expanded={isOpen}
      aria-controls={navPanelId(item.id)}
      className={className}
      // Touch taps fire pointerenter too; let onClick own the toggle there.
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") onOpen(item.id);
      }}
      onFocus={() => onOpen(item.id)}
      onClick={() => (isOpen ? onClose() : onOpen(item.id))}
    >
      {item.label}
      <ChevronDown
        aria-hidden
        strokeWidth={2.25}
        className={cn(
          "size-4 transition-transform duration-200",
          isOpen && "rotate-180",
        )}
      />
    </button>
  );
}
