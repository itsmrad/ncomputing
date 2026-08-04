import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { fontDisplay } from "@/lib/fonts";

/**
 * Industries — the second orange field on the site, deliberately echoing the
 * landing page's about section so the two read as the same brand surface.
 *
 * Every card carries a named deployment rather than an invented metric: these
 * are organizations NComputing publishes as customers or case studies, so the
 * proof line is verifiable. Hrefs match the industry routes already declared in
 * the footer config, so the IA stays consistent as those pages ship.
 */
const INDUSTRIES = [
  {
    name: "Education",
    href: "/solutions/education",
    body: "Fill labs, libraries and classrooms with endpoints that cost less to buy and almost nothing to maintain. Broadcast a screen to the room, blank every session to reclaim attention, and give each student their own Arduino or BBC micro:bit environment over USB.",
    proof: "City of Glasgow College · Vancouver Community College",
  },
  {
    name: "Healthcare",
    href: "/solutions/healthcare",
    body: "Keep patient data in the data center, never on the device. Locked-down read-only endpoints with smart card single sign-on suit shared clinical workstations, and no local user data means backup and recovery stay simple.",
    proof: "St. Luke's Medical Center · Gyeongsang National University Hospital",
  },
  {
    name: "Government and public sector",
    href: "/solutions/government",
    body: "VERDE VDI has a long history with security-conscious agencies, moving desktops into the secure data center and isolating access by need or clearance level. USB permissions can be set down to device model and serial number.",
    proof: "US Department of Defense · Bamberg District Office",
  },
  {
    name: "Manufacturing",
    href: "/solutions/manufacturing",
    body: "Small, fanless, low-power devices survive the plant floor better than towers full of moving parts. Mount them behind a monitor, manage the fleet centrally, and stop shipping technicians out to reimage machines.",
    proof: "Toyota · ArcelorMittal · Festo · John Deere",
  },
  {
    name: "Retail and hospitality",
    href: "/solutions/retail",
    body: "Roll one configuration out to hundreds of sites. Cloud Branch caching keeps stores working when the WAN drops, and zero-touch enrollment means a new location comes online without an IT visit.",
    proof: "McDonald's franchises via Arcos Dorados · ZARA",
  },
  {
    name: "Financial services",
    href: "/solutions/financial-services",
    body: "Branch networks get consistent, auditable desktops with centralized policy, detailed event logging and data leakage prevention built into the endpoint rather than bolted on afterwards.",
    proof: "Busan Bank · Mauritius Commercial Bank · GM Bank",
  },
  {
    name: "Contact centers",
    href: "/solutions/contact-centers",
    body: "High-density, low-variance desktops are exactly what vSpace Pro was built for—100 or more sessions per host, with native webcam support for Teams, Zoom and WebEx whether agents sit in the room or at home.",
    proof: "Omni Interactions · Explore Learning",
  },
];

export function IndustrySolutions() {
  return (
    <section
      aria-labelledby="industries-heading"
      className={`${fontDisplay.className} bg-brand-orange px-[max(1rem,calc((100vw-1312px)/2))] py-[clamp(5rem,9vw,8.5rem)] text-brand-warm-ink max-sm:px-4 max-sm:py-16`}
    >
      <div className="max-w-[900px]">
        <p className="text-[0.78rem] font-bold tracking-[0.18em] text-[#4c2712] uppercase">
          Solutions by industry
        </p>
        {/* The accent span from the about-section heading is dropped here: cream
            on the orange field only reaches 2.1:1, which large text still
            fails. The rule below carries the emphasis instead. */}
        <h2
          id="industries-heading"
          className="mt-[clamp(1rem,1.8vw,1.5rem)] text-[clamp(2.35rem,4.6vw,4.5rem)] leading-[1.04] font-medium tracking-[-0.035em] text-balance max-sm:text-[clamp(2.15rem,11vw,3rem)]"
        >
          Proven where the work actually happens
        </h2>
        <p className="mt-[clamp(1.25rem,2vw,1.75rem)] max-w-[60ch] text-[clamp(1.05rem,1.6vw,1.35rem)] leading-[1.5] text-[#57321d] max-sm:text-[1.05rem]">
          From a solar-powered internet café in Zambia to a highly secure
          environment at the U.S. Department of Defense—the same stack, tuned to
          very different rooms.
        </p>
        <span
          className="mt-[clamp(2rem,3.2vw,3.25rem)] block h-[5px] w-[58px] bg-brand-warm-ink max-sm:h-1 max-sm:w-[46px]"
          aria-hidden="true"
        />
      </div>

      {/* Seven industries into a two-column grid leaves the last one stranded in
          the left column, so it spans the full width instead. */}
      <ul className="mt-[clamp(3rem,5vw,5rem)] grid gap-4 lg:grid-cols-2">
        {INDUSTRIES.map((industry) => (
          <li
            key={industry.name}
            className="group relative flex min-w-0 flex-col overflow-hidden border border-[#4c271229] bg-[#fff8efe6] p-[clamp(1.5rem,2.4vw,2.5rem)] transition-[background-color,border-color,box-shadow,transform] duration-[260ms] ease-[cubic-bezier(0.16,1,0.3,1)] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand-warm-ink after:transition-transform after:duration-[340ms] after:ease-[cubic-bezier(0.16,1,0.3,1)] after:content-[''] hover:-translate-y-[3px] hover:bg-[#fff8ee] hover:shadow-[0_18px_44px_rgb(94_44_12/16%)] hover:after:scale-x-100 focus-within:-translate-y-[3px] focus-within:bg-[#fff8ee] focus-within:shadow-[0_18px_44px_rgb(94_44_12/16%)] focus-within:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none motion-reduce:hover:translate-y-0 motion-reduce:focus-within:translate-y-0 lg:last:odd:col-span-2"
          >
            <h3 className="flex items-center gap-3 text-[clamp(1.5rem,2.2vw,2.1rem)] leading-[1.12] font-[650] tracking-[-0.025em] text-balance">
              <Link
                href={industry.href}
                className="outline-none after:absolute after:inset-0 after:content-[''] focus-visible:underline focus-visible:decoration-2 focus-visible:underline-offset-4"
              >
                {industry.name}
              </Link>
              <ArrowRight
                aria-hidden="true"
                strokeWidth={2}
                className="size-5 shrink-0 translate-y-px opacity-0 transition-[opacity,transform] duration-220 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-within:translate-x-0.5 group-focus-within:opacity-100 motion-reduce:transition-none"
              />
            </h3>

            <p className="mt-[1.15rem] max-w-[54ch] text-[0.98rem] leading-[1.62] text-[#613a25]">
              {industry.body}
            </p>

            <div className="mt-auto pt-[clamp(1.75rem,2.6vw,2.5rem)]">
              <p className="text-[0.72rem] font-bold tracking-[0.1em] text-[#4c2712b3] uppercase">
                Deployed at
              </p>
              <p className="mt-2 text-[0.9rem] leading-[1.5] font-semibold text-[#79543e]">
                {industry.proof}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
