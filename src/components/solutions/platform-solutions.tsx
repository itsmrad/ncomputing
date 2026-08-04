import Link from "next/link";
import {
  ArrowUpRight,
  Cloud,
  Layers,
  Monitor,
  Server,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { fontDisplay } from "@/lib/fonts";

type Platform = {
  name: string;
  kind: string;
  body: string;
  endpoints: string[];
  href: string;
  icon: LucideIcon;
};

/**
 * The platform matrix is the commercial heart of the page: NComputing does not
 * ask you to leave the VDI or DaaS platform you already bought.
 *
 * `endpoints` carries the certified device list for each platform because that
 * is the question a buyer actually arrives with — "will it work with what I
 * run, and on what hardware". Lists are taken from the per-platform pages, not
 * generalised.
 */
const PLATFORMS: Platform[] = [
  {
    name: "Microsoft",
    kind: "Partner platform",
    body: "Endpoints designed and optimized for Azure Virtual Desktop, Windows 365 Cloud PC and Remote Desktop Services, with Microsoft Teams optimization and broad USB peripheral support.",
    endpoints: ["LEAF OS", "EX500W", "RX540 / RX580", "RX-RDP+"],
    href: "/solutions/microsoft",
    icon: Cloud,
  },
  {
    name: "Citrix",
    kind: "Partner platform",
    body: "Fully optimized for Citrix HDX Ready. Integration with the Citrix Workspace app brings HDX Adaptive Transport, Browser Content Redirection and Teams optimization to repurposed hardware.",
    endpoints: ["LEAF OS", "EX500W", "RX540 / RX580"],
    href: "/solutions/citrix",
    icon: Workflow,
  },
  {
    name: "Omnissa",
    kind: "Partner platform",
    body: "Formerly VMware EUC. Certified endpoints support Blast and RDP out of the box, with HTML5 Multimedia Redirection, Browser Content Redirection and Teams optimization.",
    endpoints: ["LEAF OS", "EX500W", "RX540"],
    href: "/solutions/omnissa",
    icon: Layers,
  },
  {
    name: "Amazon WorkSpaces",
    kind: "Partner platform",
    body: "Fully optimized x86-64 endpoints for Amazon's DaaS, giving you a reliable, low-cost way to connect people to WorkSpaces without provisioning new PCs.",
    endpoints: ["LEAF OS", "EX500W"],
    href: "/solutions/amazon-workspaces",
    icon: ShieldCheck,
  },
  {
    name: "vSpace Pro Enterprise",
    kind: "NComputing platform",
    body: "Put one Windows host to work for a whole room. Supports 11 Windows operating systems including Windows 11 and Server 2025, with 100+ sessions per host, UXP Turbo and vCAST streaming.",
    endpoints: ["L400", "RX300+", "RX420", "LEAF OS", "EX500W"],
    href: "/products/vspace-pro",
    icon: Server,
  },
  {
    name: "VERDE VDI",
    kind: "NComputing platform",
    body: "Enterprise-grade VDI that treats Windows and Linux desktops as equals, scales from one server to thousands, and includes VERDE Remote Access and Secure Browser with no VPN required.",
    endpoints: ["LEAF OS", "EX500", "RX540 / RX580", "HTML5 browser"],
    href: "/products/verde-vdi",
    icon: Monitor,
  },
];

export function PlatformSolutions() {
  return (
    <section
      aria-labelledby="platforms-heading"
      className={`${fontDisplay.className} bg-white px-[clamp(1rem,4vw,4.5rem)] py-[clamp(5rem,8vw,9rem)] text-[#203138] max-sm:px-4 max-sm:py-16`}
    >
      <div className="mx-auto w-full max-w-[1312px]">
        <div className="max-w-[820px]">
          <p className="text-[0.78rem] font-bold tracking-[0.18em] text-brand-orange-ink uppercase">
            Solutions by platform
          </p>
          <h2
            id="platforms-heading"
            className="mt-[clamp(1rem,1.8vw,1.5rem)] text-[clamp(2.35rem,4.4vw,4.25rem)] leading-[1.05] font-medium tracking-[-0.035em] text-balance max-sm:text-[clamp(2.15rem,11vw,3rem)]"
          >
            Keep your platform. Change the endpoint.
          </h2>
          <p className="mt-[clamp(1.25rem,2vw,1.75rem)] max-w-[58ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-[1.5] text-[#3d5560] max-sm:text-[1.05rem]">
            Our software and devices are certified across the major DaaS and VDI
            platforms—and we build two of our own for teams that need to stay
            on-premise.
          </p>
          <span
            className="mt-[clamp(2rem,3.2vw,3.25rem)] block h-[5px] w-[58px] bg-brand-orange max-sm:h-1 max-sm:w-[46px]"
            aria-hidden="true"
          />
        </div>

        <ul className="mt-[clamp(3rem,5vw,5rem)] grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {PLATFORMS.map((platform) => (
            <li
              key={platform.name}
              className="group relative flex min-w-0 flex-col overflow-hidden border border-[#203138]/12 bg-[#fbfcfc] p-[clamp(1.5rem,2.2vw,2.25rem)] transition-[border-color,background-color,box-shadow,transform] duration-[260ms] ease-[cubic-bezier(0.16,1,0.3,1)] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-linear-to-r after:from-brand-orange-ink after:to-brand-orange after:transition-transform after:duration-[340ms] after:ease-[cubic-bezier(0.16,1,0.3,1)] after:content-[''] hover:-translate-y-[3px] hover:border-[#203138]/20 hover:bg-white hover:shadow-[0_18px_44px_rgb(32_49_56/10%)] hover:after:scale-x-100 focus-within:-translate-y-[3px] focus-within:border-[#203138]/20 focus-within:bg-white focus-within:shadow-[0_18px_44px_rgb(32_49_56/10%)] focus-within:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none motion-reduce:hover:translate-y-0 motion-reduce:focus-within:translate-y-0"
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className="grid size-14 place-items-center rounded-2xl bg-[#fff4e8] text-brand-orange-ink transition-colors duration-200 group-hover:bg-[#fbe7d1] group-focus-within:bg-[#fbe7d1] motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <platform.icon className="size-[26px]" strokeWidth={1.8} />
                </span>
                <p className="pt-1 text-[0.72rem] font-bold tracking-[0.1em] text-[#5c757f] uppercase">
                  {platform.kind}
                </p>
              </div>

              <h3 className="mt-[clamp(1.75rem,2.6vw,2.5rem)] flex items-center gap-3 text-[clamp(1.4rem,1.9vw,1.75rem)] leading-[1.15] font-[650] tracking-[-0.02em]">
                <Link
                  href={platform.href}
                  className="outline-none after:absolute after:inset-0 after:content-[''] focus-visible:underline focus-visible:decoration-brand-orange-ink focus-visible:decoration-2 focus-visible:underline-offset-4"
                >
                  {platform.name}
                </Link>
                <ArrowUpRight
                  aria-hidden="true"
                  strokeWidth={2}
                  className="size-5 shrink-0 translate-y-px text-brand-orange-ink opacity-0 transition-[opacity,transform] duration-220 group-hover:translate-x-px group-hover:opacity-100 group-focus-within:translate-x-px group-focus-within:opacity-100 motion-reduce:transition-none"
                />
              </h3>

              <p className="mt-[1.15rem] text-[0.95rem] leading-[1.6] text-[#4b636d]">
                {platform.body}
              </p>

              <div className="mt-auto pt-[clamp(1.75rem,2.6vw,2.5rem)]">
                <p className="text-[0.72rem] font-bold tracking-[0.1em] text-[#5c757f] uppercase">
                  Certified endpoints
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {platform.endpoints.map((endpoint) => (
                    <li
                      key={endpoint}
                      className="inline-flex items-center border border-[#203138]/12 bg-white px-[0.6rem] py-[0.3rem] text-[0.78rem] font-semibold text-[#3d5560]"
                    >
                      {endpoint}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
