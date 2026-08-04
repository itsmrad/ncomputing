"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

import type { NavItem } from "../types";
import { NavActions } from "./nav-actions";

const MOBILE_PANEL_ID = "mobile-nav-panel";

export function NavMobileToggle({
  isOpen,
  onToggle,
  className,
}: {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={MOBILE_PANEL_ID}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className={cn(
        "text-ink flex size-9 items-center justify-center rounded-sm transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-brand/40",
        className,
      )}
    >
      {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
    </button>
  );
}

/** Native `<details>` keeps the accordion accessible without extra state. */
export function NavMobilePanel({
  items,
  isOpen,
  className,
}: {
  items: NavItem[];
  isOpen: boolean;
  className?: string;
}) {
  if (!isOpen) return null;

  return (
    <div
      id={MOBILE_PANEL_ID}
      className={cn(
        "border-hairline relative max-h-[calc(100dvh-62px)] overflow-y-auto rounded-b-lg border-t px-5 pt-2 pb-6",
        className,
      )}
    >
      <ul className="flex flex-col">
        {items.map((item) =>
          item.columns?.length ? (
            <li key={item.id} className="border-hairline border-b">
              <details className="group">
                <summary className="text-ink flex cursor-pointer list-none items-center justify-between py-3.5 text-[15px] font-medium [&::-webkit-details-marker]:hidden">
                  {item.label}
                  <ChevronDown
                    aria-hidden
                    strokeWidth={2.25}
                    className="size-4 transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <div className="pb-3">
                  {item.columns.map((column) => (
                    <div key={column.title} className="pt-1 pb-3">
                      <p className="text-ink-subtle text-[13px] font-medium">
                        {column.title}
                      </p>
                      <ul className="mt-2 flex flex-col gap-2">
                        {column.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className="text-brand hover:text-brand-hover text-[15px] font-medium"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </details>
            </li>
          ) : (
            <li key={item.id} className="border-hairline border-b">
              <Link
                href={item.href ?? "#"}
                className="text-ink block py-3.5 text-[15px] font-medium"
              >
                {item.label}
              </Link>
            </li>
          ),
        )}
      </ul>
      <NavActions className="mt-6" />
    </div>
  );
}
