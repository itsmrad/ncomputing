import Link from "next/link";
import { ArrowRight, Cloud, RefreshCw, Settings2 } from "lucide-react";

import { fontDisplay } from "@/lib/fonts";

/**
 * Windows 11 migration — the flagship solution, so it gets the page's one
 * full-bleed cream panel rather than a card in a grid.
 *
 * The challenge/opportunity pair is set as two columns on the tinted inner
 * panel because the argument only works as a contrast; splitting them into
 * separate cards would read as two unrelated claims. The three steps below are
 * numbered rather than iconised alone: the order is the point.
 */
const STEPS = [
  {
    step: "01",
    title: "Repurpose",
    product: "LEAF OS",
    body: "Flash LEAF OS to the internal drive of any compatible x86-64 PC, laptop or thin client—or boot it from a USB stick and leave the original drive untouched for BYOD. Minimum requirements are 4GB RAM and 8GB storage.",
    icon: RefreshCw,
  },
  {
    step: "02",
    title: "Connect",
    product: "AVD · Windows 365",
    body: "Point those endpoints at Windows 11 running in the cloud through Azure Virtual Desktop, Windows 365 or RDS—with Microsoft Teams optimization and server-side drivers for printers, smart card readers, webcams and signature pads.",
    icon: Cloud,
  },
  {
    step: "03",
    title: "Manage",
    product: "PMC Endpoint Manager",
    body: "Enroll devices with zero touch, push profiles to groups, schedule firmware updates and shadow a session over HTML5—across local networks, WANs and devices sitting behind firewalls and NAT routers.",
    icon: Settings2,
  },
];

export function WindowsMigration() {
  return (
    <section
      aria-labelledby="migration-heading"
      className={`${fontDisplay.className} bg-white px-[clamp(1rem,1.6vw,2rem)] pb-[clamp(1.25rem,2vw,2.5rem)] max-sm:px-3 max-sm:pb-3`}
    >
      <div className="mx-auto w-full max-w-[1980px] bg-brand-cream px-[clamp(1.5rem,5vw,6rem)] py-[clamp(4.5rem,7vw,8rem)] text-brand-warm-ink max-sm:px-5 max-sm:py-14">
        <div className="mx-auto w-full max-w-[1312px]">
          <div className="grid gap-[clamp(2rem,4vw,4.5rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div>
              <p className="text-[0.78rem] font-bold tracking-[0.18em] text-brand-orange-ink uppercase">
                Windows 10 end-of-life
              </p>
              <h2
                id="migration-heading"
                className="mt-[clamp(1rem,1.8vw,1.5rem)] text-[clamp(2.35rem,4.4vw,4.25rem)] leading-[1.05] font-medium tracking-[-0.035em] text-balance max-sm:text-[clamp(2.15rem,11vw,3rem)]"
              >
                Migrate to Windows 11 the easy way
              </h2>
              <p className="mt-[clamp(1.25rem,2vw,1.75rem)] max-w-[54ch] text-[clamp(1.125rem,1.6vw,1.4rem)] leading-[1.45] font-medium text-[#613a25] max-sm:text-[1.08rem]">
                Windows 10 support has ended and Windows 11 hardware
                requirements can force a refresh you did not budget for. You do
                not have to replace everything to move forward.
              </p>
              <Link
                href="/solutions/windows-11-migration"
                className="group/link mt-[clamp(2rem,3vw,2.75rem)] inline-flex min-h-[46px] items-center gap-4 bg-brand-warm-ink px-[1.1rem] py-3 font-semibold text-brand-cream transition-colors duration-180 hover:bg-[#4b2917] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-warm-ink"
              >
                See the migration path
                <ArrowRight
                  aria-hidden="true"
                  className="w-[18px] transition-transform duration-180 group-hover/link:translate-x-[3px] motion-reduce:transition-none"
                />
              </Link>
            </div>

            {/* `self-start` matters: the hairline between the two cells is drawn
                by the parent's background showing through a 1px gap, so a
                stretched `dl` would paint that tint across the empty space
                below the row as a grey slab. */}
            <dl className="grid gap-px self-start bg-[#4c271224] sm:grid-cols-2">
              <div className="bg-brand-cream p-[clamp(1.5rem,2.2vw,2.25rem)]">
                <dt className="text-[0.72rem] font-bold tracking-[0.1em] text-[#4c2712b3] uppercase">
                  The challenge
                </dt>
                <dd className="mt-3 text-[0.98rem] leading-[1.6] text-[#613a25]">
                  Without updates and security patches, systems sit exposed.
                  Organizations with incompatible hardware get a choice between
                  costly new devices or vulnerable ones—both expensive, both
                  disruptive.
                </dd>
              </div>
              <div className="bg-brand-cream p-[clamp(1.5rem,2.2vw,2.25rem)]">
                <dt className="text-[0.72rem] font-bold tracking-[0.1em] text-[#4c2712b3] uppercase">
                  The opportunity
                </dt>
                <dd className="mt-3 text-[0.98rem] leading-[1.6] text-[#613a25]">
                  Moving Windows 11 into the cloud lowers hardware demands,
                  simplifies management and makes hybrid work practical—while
                  the endpoints you already own keep earning their keep.
                </dd>
              </div>
            </dl>
          </div>

          <ol className="mt-[clamp(3.5rem,6vw,6rem)] grid gap-4 lg:grid-cols-3">
            {STEPS.map((step) => (
              <li
                key={step.step}
                className="group relative flex flex-col overflow-hidden border border-[#4c271217] bg-white px-[clamp(1.5rem,2.2vw,2.25rem)] pt-[clamp(1.5rem,2.2vw,2.25rem)] pb-[clamp(1.75rem,2.6vw,2.5rem)] transition-[border-color,box-shadow,transform] duration-[260ms] ease-[cubic-bezier(0.16,1,0.3,1)] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-linear-to-r after:from-brand-orange-ink after:to-brand-orange after:transition-transform after:duration-[340ms] after:ease-[cubic-bezier(0.16,1,0.3,1)] after:content-[''] hover:-translate-y-[3px] hover:border-[#4c271229] hover:shadow-[0_18px_44px_rgb(94_44_12/13%)] hover:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className="grid size-14 place-items-center rounded-2xl bg-[#fbe7d1] text-brand-orange-ink"
                    aria-hidden="true"
                  >
                    <step.icon className="size-[26px]" strokeWidth={1.8} />
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-[1.5rem] font-medium tracking-[-0.02em] text-[#4c27128f]"
                  >
                    {step.step}
                  </span>
                </div>

                <h3 className="mt-[clamp(2rem,3vw,3rem)] text-[clamp(1.5rem,2vw,1.9rem)] leading-[1.15] font-[650] tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.8rem] font-bold tracking-[0.1em] text-brand-orange-ink uppercase">
                  {step.product}
                </p>
                <p className="mt-[1.15rem] text-[0.95rem] leading-[1.6] text-[#613a25]">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
