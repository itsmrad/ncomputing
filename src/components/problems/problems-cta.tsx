import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { fontDisplay } from "@/lib/fonts";

/**
 * Closing CTA — hairline and restrained on purpose.
 *
 * The landing and solutions pages both sign off on the warm gradient panel; that
 * surface is their signature. Repeating it here would undo the corporate register
 * the rest of this page establishes, so this closes on structure instead: a
 * hairline block, one primary action, two secondary routes.
 */
const ROUTES = [
  {
    title: "Send us the constraint",
    body: "Tell us the platform, the hardware you are stuck with and the seat count. We will tell you what fits — including when the answer is that you should keep buying PCs.",
    action: "Contact sales",
    href: "/contact-sales",
    primary: true,
  },
  {
    title: "Test it against your own fleet",
    body: "Run a proof of concept on the hardware in question, on your platform, before committing to anything.",
    action: "Request a POC",
    href: "/demo",
    primary: false,
  },
  {
    title: "See the solutions in full",
    body: "Platform coverage, industry deployments and the security and management detail behind each answer above.",
    action: "Browse solutions",
    href: "/solutions",
    primary: false,
  },
];

export function ProblemsCta() {
  return (
    <section
      aria-labelledby="problems-cta-heading"
      className={`${fontDisplay.className} bg-white px-[clamp(1rem,4vw,4.5rem)] py-[clamp(4rem,7vw,7rem)] text-ink max-sm:px-4 max-sm:py-14`}
    >
      <div className="mx-auto w-full max-w-[1312px]">
        <div className="border-hairline border-t pt-[clamp(2.5rem,4vw,4rem)]">
          <div className="max-w-[720px]">
            <h2
              id="problems-cta-heading"
              className="text-[clamp(1.85rem,3.2vw,2.85rem)] leading-[1.1] font-medium tracking-[-0.03em] text-balance"
            >
              Which of these is costing you the most right now?
            </h2>
            <p className="mt-[clamp(1rem,1.6vw,1.4rem)] text-[clamp(1rem,1.35vw,1.15rem)] leading-[1.6] text-ink-muted">
              Most deployments start with one problem, one room and a handful of
              repurposed PCs — not a fleet-wide programme.
            </p>
          </div>

          <ul className="border-hairline bg-hairline mt-[clamp(2.5rem,4vw,3.5rem)] grid gap-px border lg:grid-cols-3">
            {ROUTES.map((route) => (
              <li
                key={route.title}
                className="flex min-w-0 flex-col justify-between gap-[clamp(2rem,3vw,3rem)] bg-white p-[clamp(1.5rem,2.4vw,2.5rem)]"
              >
                <div>
                  <h3 className="text-[clamp(1.15rem,1.6vw,1.4rem)] leading-[1.25] font-[650] tracking-[-0.015em] text-balance">
                    {route.title}
                  </h3>
                  <p className="mt-4 max-w-[42ch] text-[0.94rem] leading-[1.62] text-ink-muted">
                    {route.body}
                  </p>
                </div>

                <Link
                  href={route.href}
                  className={`group/link inline-flex h-12 items-center justify-center gap-3 self-start px-6 text-[0.95rem] font-semibold transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 ${
                    route.primary
                      ? "bg-brand-orange text-brand-warm-ink hover:bg-brand-orange-hover"
                      : "border-hairline border bg-white text-ink hover:bg-surface-subtle"
                  }`}
                >
                  {route.action}
                  <ArrowRight
                    aria-hidden="true"
                    size={18}
                    strokeWidth={2}
                    className="transition-transform duration-150 group-hover/link:translate-x-[3px] motion-reduce:transition-none"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
