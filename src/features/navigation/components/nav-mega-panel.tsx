"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { navPanelId } from "../config/nav-config";
import type { NavColumn, NavItem } from "../types";

type NavMegaPanelProps = {
  items: NavItem[];
  activeId: string | null;
  onPointerEnter: () => void;
  onPointerLeave: () => void;
};

/**
 * All panels stay mounted and absolutely stacked so links remain crawlable and
 * the shared card can morph its height between menus instead of popping.
 */
export function NavMegaPanel({
  items,
  activeId,
  onPointerEnter,
  onPointerLeave,
}: NavMegaPanelProps) {
  const panels = items.filter((item) => item.columns?.length);
  const panelRefs = useRef(new Map<string, HTMLDivElement>());
  const [heights, setHeights] = useState<Record<string, number>>({});

  useEffect(() => {
    if (!activeId) return;

    const element = panelRefs.current.get(activeId);
    if (!element) return;

    const observer = new ResizeObserver(() =>
      setHeights((previous) => ({ ...previous, [activeId]: element.offsetHeight })),
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [activeId]);

  const height = activeId ? (heights[activeId] ?? 0) : 0;

  return (
    <div
      style={{ height }}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      className="relative hidden overflow-hidden rounded-b-lg transition-[height] duration-300 ease-[cubic-bezier(0.215,0.61,0.355,1)] lg:block"
    >
      {panels.map((item) => {
        const isActive = activeId === item.id;

        return (
          <div
            key={item.id}
            id={navPanelId(item.id)}
            ref={(node) => {
              if (node) panelRefs.current.set(item.id, node);
              else panelRefs.current.delete(item.id);
            }}
            inert={!isActive}
            className={cn(
              "absolute inset-x-0 top-0 transition-[opacity,transform] duration-200 ease-out",
              isActive
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-1 opacity-0",
            )}
          >
            <div
              className="border-hairline grid border-t"
              style={{
                gridTemplateColumns: `repeat(${item.columns!.length}, minmax(0, 1fr))`,
              }}
            >
              {item.columns!.map((column, index) => (
                <MegaColumn
                  key={column.title}
                  column={column}
                  hasDivider={index > 0}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function MegaColumn({
  column,
  hasDivider,
}: {
  column: NavColumn;
  hasDivider: boolean;
}) {
  return (
    <div
      className={cn(
        "border-hairline px-7 pt-8 pb-10",
        hasDivider && "border-l",
        column.variant === "subtle" && "bg-surface-subtle",
      )}
    >
      <p className="text-ink text-[15px] leading-5 font-medium">
        {column.title}
      </p>
      <ul className="mt-4 flex flex-col gap-1.5">
        {column.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-brand hover:text-brand-hover block w-fit rounded-sm text-[15px] leading-5 font-medium transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
