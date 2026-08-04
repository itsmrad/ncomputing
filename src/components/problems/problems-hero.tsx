import Link from "next/link";

import { fontDisplay } from "@/lib/fonts";

/**
 * Problems hero — deliberately quieter than the landing and solutions heroes.
 *
 * This page argues rather than sells, so it runs on the cool half of the brand
 * palette (`ink`, `ink-muted`, `hairline`, `surface-subtle`) that until now only
 * the nav and footer used. Same tokens, different register: navy structure,
 * hairline rules, and `brand-orange` reserved for a single accent per view.
 *
 * The type scale is one step down from the other two heroes on purpose — a
 * problem statement that shouts reads like marketing, which is the opposite of
 * the intended effect.
 *
 * Small uppercase labels across this page use `#647184` rather than the
 * `ink-subtle` token: at these sizes `ink-subtle` only reaches 3.0:1 on white
 * and 2.98:1 on `surface-subtle`, where 4.5:1 is required. `#647184` clears both
 * (4.96 and 4.69) while staying visibly lighter than `ink-muted` body copy.
 *
 * Top padding clears the `absolute` 62px navbar, matching the other pages.
 */
const ACTION_BASE =
  "inline-flex h-12 items-center justify-center px-7 text-[16px] font-medium transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2";

export function ProblemsHero() {
  return (
    <section
      aria-labelledby="problems-hero-heading"
      className={`${fontDisplay.className} border-hairline border-b bg-white px-[clamp(1rem,4vw,4.5rem)] pt-[100px] pb-[clamp(3.5rem,6vw,6rem)] text-ink max-sm:px-4 md:pt-[112px]`}
    >
      <div className="mx-auto w-full max-w-[1312px]">
        <div className="grid gap-[clamp(2rem,4vw,5rem)] pt-[clamp(2.5rem,5vw,4.5rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div>
            <p className="text-[0.78rem] font-bold tracking-[0.18em] text-brand-orange-ink uppercase">
              Problems we solve
            </p>
            <h1
              id="problems-hero-heading"
              className="mt-[clamp(1rem,1.6vw,1.5rem)] text-[clamp(2.25rem,4vw,3.75rem)] leading-[1.06] font-medium tracking-[-0.03em] text-balance max-sm:text-[clamp(2.1rem,10vw,2.85rem)]"
            >
              End-user computing breaks in predictable ways
            </h1>
            <p className="mt-[clamp(1.25rem,2vw,1.75rem)] max-w-[58ch] text-[clamp(1.05rem,1.45vw,1.3rem)] leading-[1.55] text-ink-muted">
              Hardware ages faster than budgets renew. Fleets drift out of
              policy. Security surface grows with every desk. Licensing changes
              under you mid-contract. None of these are new, and none of them
              are solved by buying another round of PCs.
            </p>

            <div className="mt-[clamp(2rem,3vw,2.75rem)] flex flex-wrap items-center gap-4">
              <Link
                href="/solutions"
                className={`${ACTION_BASE} bg-ink text-white hover:bg-[#14385a]`}
              >
                See how we address them
              </Link>
              <Link
                href="/contact-sales"
                className={`${ACTION_BASE} border-hairline border bg-white text-ink hover:bg-surface-subtle`}
              >
                Talk to an engineer
              </Link>
            </div>
          </div>

          {/* A framing panel rather than a stat band: the numbers belong further
              down next to the customers they came from. */}
          <aside className="border-hairline self-start border bg-surface-subtle p-[clamp(1.5rem,2.4vw,2.5rem)]">
            <p className="text-[0.72rem] font-bold tracking-[0.12em] text-[#647184] uppercase">
              The pattern
            </p>
            <p className="mt-4 text-[clamp(1.05rem,1.4vw,1.25rem)] leading-[1.55] font-medium text-ink">
              Almost every one of these problems traces back to the same
              assumption: that a full operating system has to live on every
              desk.
            </p>
            <p className="mt-4 text-[0.95rem] leading-[1.6] text-ink-muted">
              Move the desktop into the data center or the cloud and the device
              becomes a display and a keyboard again — cheap to replace, quick to
              enrol, and carrying nothing worth stealing. That single change is
              what the rest of this page is about.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
