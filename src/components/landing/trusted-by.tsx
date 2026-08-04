"use client";

import { useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";

import { fontDisplay } from "@/lib/fonts";
import { cn } from "@/lib/utils";

/**
 * Trusted-by band — Stripe-style hairline strip below the hero.
 *
 * Measured from the reference: 72px tall between 1px `#e6ebf1` hairlines with
 * the logo row centred inside it.
 *
 * The logos scroll right-to-left forever: the list is rendered twice inside a
 * track that translates by exactly -50%, so the second copy lands where the
 * first started and the seam is invisible. Each half carries a trailing gap
 * equal to the inner gap, otherwise the loop point would jump by one gap.
 */
const LOGOS = [
  {
    name: "Apollo",
    src: "/trusted-by/apollo-logo.png",
    width: 208,
    height: 80,
  },
  {
    name: "Asian Paints",
    src: "/trusted-by/Asian-Paints.png",
    width: 1075,
    height: 200,
  },
  {
    name: "ExxonMobil",
    src: "/trusted-by/exxonmobillogocolor2x.png",
    width: 306,
    height: 80,
  },
  {
    name: "Godrej",
    src: "/trusted-by/GODREJCP.NS_.png",
    width: 512,
    height: 246,
  },
  {
    name: "Hyundai Elevator",
    src: "/trusted-by/Hyundai_Elevator_logo.png",
    width: 1024,
    height: 200,
  },
  { name: "LG H&H", src: "/trusted-by/LGHH.png", width: 993, height: 231 },
  {
    name: "McDonald's",
    src: "/trusted-by/McDonald.png",
    width: 1528,
    height: 1334,
  },
  {
    name: "StanLabs",
    src: "/trusted-by/StanLabs.png",
    width: 910,
    height: 303,
  },
  { name: "Suzuki", src: "/trusted-by/Suzuki_0.png", width: 700, height: 456 },
  {
    name: "Texas Pipe",
    src: "/trusted-by/Texas-Pipe.png",
    width: 820,
    height: 200,
  },
  { name: "Toyota", src: "/trusted-by/toyota.png", width: 700, height: 503 },
  { name: "Yamaha", src: "/trusted-by/YAMAHA.png", width: 1042, height: 360 },
  { name: "Zara", src: "/trusted-by/ZARA.png", width: 605, height: 250 },
];

function LogoRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-16 pr-16"
    >
      {LOGOS.map((logo) => (
        <li key={logo.name} className="flex shrink-0 items-center">
          <Image
            src={logo.src}
            alt={ariaHidden ? "" : logo.name}
            width={logo.width}
            height={logo.height}
            className="h-8 w-auto max-w-[120px] object-contain"
          />
        </li>
      ))}
    </ul>
  );
}

export function TrustedBy() {
  // Hovering pauses the loop, but that leaves keyboard and touch users with an
  // animation they cannot stop, so the toggle owns the paused state and the
  // hover pause only applies while it is running.
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      aria-label="Trusted by"
      className={`${fontDisplay.className} border-hairline shrink-0 border-y bg-white`}
    >
      <div className="mx-auto flex w-full max-w-[1312px] items-center gap-8 px-4 py-5 sm:px-6">
        <p className="text-ink-subtle shrink-0 text-[13px] font-medium tracking-[0.08em] uppercase">
          Trusted by
        </p>
        <div className="border-hairline h-8 shrink-0 border-l" />

        <div className="group relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_48px,black_calc(100%-48px),transparent)]">
          <div
            className={cn(
              "animate-marquee flex w-max will-change-transform motion-reduce:animate-none",
              isPaused
                ? "[animation-play-state:paused]"
                : "group-hover:[animation-play-state:paused]",
            )}
          >
            <LogoRow />
            <LogoRow ariaHidden />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsPaused((paused) => !paused)}
          aria-pressed={isPaused}
          aria-label={
            isPaused ? "Play the customer logos" : "Pause the customer logos"
          }
          className="text-ink-subtle hover:text-ink focus-visible:ring-brand/40 grid size-8 shrink-0 place-items-center rounded-sm transition-colors duration-150 outline-none focus-visible:ring-2 motion-reduce:hidden"
        >
          {isPaused ? (
            <Play aria-hidden className="size-3.5" />
          ) : (
            <Pause aria-hidden className="size-3.5" />
          )}
        </button>
      </div>
    </section>
  );
}
