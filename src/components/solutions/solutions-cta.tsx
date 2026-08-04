import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { fontDisplay } from "@/lib/fonts";

/**
 * Closing CTA — three real next steps rather than one generic "contact us".
 *
 * People arrive at a solutions page at different distances from a decision, so
 * the trial, the conversation and the local reseller each get their own door.
 * The warm gradient panel is the same surface language as the landing page's
 * support section, which is how the page signs off in the brand's voice.
 */
const PATHS = [
  {
    title: "Run a proof of concept",
    body: "Try the stack on your own hardware and platform. Free trials are available for vSpace Pro Enterprise and VERDE VDI, and PMC can be downloaded from the support portal.",
    action: "Start an Express POC",
    href: "/demo",
  },
  {
    title: "Talk it through first",
    body: "Tell us the platform you run, the hardware you are stuck with and the number of seats. We will map the endpoints and licensing that fit before anything gets ordered.",
    action: "Contact sales",
    href: "/contact-sales",
  },
  {
    title: "Buy through a partner",
    body: "NComputing sells through a reseller network across the Americas, EMEA and Asia-Pacific. Find a partner near you for local pricing, deployment help and support.",
    action: "Find a reseller",
    href: "/where-to-buy",
  },
];

export function SolutionsCta() {
  return (
    <section
      aria-labelledby="solutions-cta-heading"
      className={`${fontDisplay.className} bg-white px-[clamp(1rem,1.6vw,2rem)] py-[clamp(1.25rem,2vw,2.5rem)] max-sm:p-3`}
    >
      <div className="relative isolate mx-auto w-full max-w-[1980px] overflow-hidden rounded-[30px] bg-[#f8ddc1] bg-[radial-gradient(circle_at_12%_8%,rgb(255_224_188/96%),transparent_38%),radial-gradient(circle_at_87%_12%,rgb(242_154_74/76%),transparent_40%),radial-gradient(circle_at_52%_100%,rgb(255_235_209/88%),transparent_46%)] px-[clamp(1.5rem,8vw,10rem)] pt-[clamp(4.5rem,7vw,8rem)] pb-[clamp(4rem,6vw,7rem)] text-brand-warm-ink shadow-[0_24px_70px_rgb(111_59_24/12%)] before:pointer-events-none before:absolute before:inset-0 before:-z-[1] before:bg-[radial-gradient(circle,rgb(255_255_255/86%)_1.15px,transparent_1.3px)] before:bg-[length:7px_7px] before:content-[''] max-sm:rounded-[20px] max-sm:px-5 max-sm:pt-12 max-sm:pb-10">
        <div className="mx-auto w-full max-w-[1312px]">
          <div className="max-w-[820px]">
            <p className="text-[0.78rem] font-bold tracking-[0.18em] text-[#7d4a1e] uppercase">
              Next steps
            </p>
            <h2
              id="solutions-cta-heading"
              className="mt-[clamp(1rem,1.8vw,1.5rem)] text-[clamp(2.35rem,4.6vw,4.5rem)] leading-[1.04] font-medium tracking-[-0.035em] text-balance max-sm:text-[clamp(2.15rem,11vw,3rem)]"
            >
              New to desktop virtualization? Start here.
            </h2>
            <p className="mt-[clamp(1.25rem,2vw,1.75rem)] max-w-[58ch] text-[clamp(1.05rem,1.6vw,1.35rem)] leading-[1.5] font-medium text-[#694630] max-sm:text-[1.05rem]">
              Most deployments begin with a single room and a handful of
              repurposed PCs. Pick the door that matches where you are.
            </p>
          </div>

          <ul className="mt-[clamp(3rem,5vw,5rem)] grid gap-4 lg:grid-cols-3">
            {PATHS.map((path) => (
              <li
                key={path.title}
                className="flex flex-col justify-between gap-[clamp(2.5rem,4vw,4rem)] rounded-[10px] border border-[#e0b184] bg-[#fff8efcc] p-[clamp(1.5rem,2.4vw,2.5rem)] max-sm:gap-8 max-sm:p-6"
              >
                <div>
                  <h3 className="text-[clamp(1.4rem,2vw,1.9rem)] leading-[1.15] font-[650] tracking-[-0.025em] text-balance">
                    {path.title}
                  </h3>
                  <p className="mt-[1.15rem] max-w-[40ch] text-[0.98rem] leading-[1.6] text-[#694630]">
                    {path.body}
                  </p>
                </div>

                <Link
                  href={path.href}
                  className="group/link inline-flex min-h-14 items-center justify-center gap-3 self-start rounded-[10px] bg-brand-orange px-[1.55rem] py-[0.9rem] text-[1.05rem] font-bold text-brand-warm-ink shadow-[0_14px_30px_rgb(119_62_22/18%)] transition-[background-color,box-shadow,transform] duration-220 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-brand-orange-hover hover:shadow-[0_18px_34px_rgb(119_62_22/24%)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#4f2a17] motion-reduce:transition-none"
                >
                  {path.action}
                  <ArrowRight
                    aria-hidden="true"
                    size={20}
                    strokeWidth={2}
                    className="transition-transform duration-220 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-x-[3px] motion-reduce:transition-none"
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
