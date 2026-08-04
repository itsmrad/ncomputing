import Link from "next/link";

import { fontDisplay } from "@/lib/fonts";

/**
 * Solutions hero — the landing hero's type scale and button pair, re-cut for a
 * sub-page.
 *
 * Differences from `hero-section.tsx` are deliberate: there is no product
 * visual to balance the copy against, so the headline is centred on a single
 * measure and the spare width goes to the proof band instead. The band sits
 * inside the same section (not a separate strip like `trusted-by`) because this
 * page scrolls rather than owning a viewport, so there is no fold to land on.
 *
 * Top padding clears the `absolute` 62px navbar, matching the landing hero.
 */
const ACTION_BASE =
  "inline-flex h-12 items-center justify-center px-7 text-[17px] font-medium transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-[#203138]/40 focus-visible:ring-offset-2";

/** Figures published by NComputing: 20+ years, 70,000+ customers, 20M users, 140 countries. */
const PROOF = [
  { value: "20+", label: "Years of desktop virtualization" },
  { value: "70,000+", label: "Customers deployed worldwide" },
  { value: "20M", label: "People using our technology daily" },
  { value: "140", label: "Countries running NComputing" },
];

export function SolutionsHero() {
  return (
    <section
      aria-labelledby="solutions-hero-heading"
      className={`${fontDisplay.className} bg-white px-[clamp(1rem,4vw,4.5rem)] pt-[100px] pb-[clamp(4rem,7vw,7rem)] text-[#203138] max-sm:px-4 md:pt-[112px]`}
    >
      <div className="mx-auto w-full max-w-[1312px]">
        <div className="max-w-[900px] pt-[clamp(2.5rem,6vw,5.5rem)]">
          <p className="text-[0.78rem] font-bold tracking-[0.18em] text-brand-orange-ink uppercase">
            Solutions
          </p>

          <h1
            id="solutions-hero-heading"
            className="mt-[clamp(1rem,1.8vw,1.5rem)] text-[clamp(2.75rem,5.6vw,5.25rem)] leading-[1.02] font-medium tracking-[-0.035em] text-balance max-sm:text-[clamp(2.5rem,12vw,3.5rem)]"
          >
            Modernize the desktop{" "}
            <span className="text-brand-orange-ink">
              without replacing the hardware
            </span>
          </h1>

          <p className="mt-[clamp(1.5rem,2.4vw,2.25rem)] max-w-[62ch] text-[clamp(1.125rem,1.7vw,1.5rem)] leading-[1.45] text-[#3d5560] max-sm:text-[1.1rem]">
            NComputing pairs software and purpose-built endpoints with the
            virtual desktop platform you already run—Microsoft, Citrix, Omnissa,
            Amazon WorkSpaces, Parallels RAS—or with our own vSpace Pro and
            VERDE VDI. One managed layer, from the device on the desk to the
            desktop in the cloud.
          </p>

          <div className="mt-[clamp(2.25rem,3.2vw,3rem)] flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              href="/contact-sales"
              className={`${ACTION_BASE} bg-brand-orange text-brand-warm-ink hover:bg-brand-orange-hover`}
            >
              Talk to our team
            </Link>
            <Link
              href="/demo"
              className={`${ACTION_BASE} bg-[#203138] text-white hover:bg-[#2d444d]`}
            >
              Request a proof of concept
            </Link>
          </div>
        </div>

        <dl className="mt-[clamp(3.5rem,6vw,6rem)] grid grid-cols-2 gap-x-8 gap-y-[clamp(2rem,3vw,2.75rem)] lg:grid-cols-4">
          {PROOF.map((proof) => (
            <div
              key={proof.label}
              className="border-hairline flex flex-col gap-2 border-t pt-[clamp(1.25rem,1.8vw,1.75rem)]"
            >
              <dt className="order-2 max-w-[22ch] text-[0.9rem] leading-[1.45] font-medium text-[#5c757f]">
                {proof.label}
              </dt>
              <dd className="order-1 text-[clamp(2.25rem,3.4vw,3.25rem)] leading-none font-medium tracking-[-0.03em]">
                {proof.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
