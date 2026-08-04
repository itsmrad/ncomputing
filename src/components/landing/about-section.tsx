"use client";

import { useState, type FocusEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  Laptop,
  Monitor,
  RefreshCw,
  Server,
  Settings2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import { fontDisplay } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type Workspace = {
  id: string;
  tab: string;
  title: string;
  headline: string;
  description: string;
  href: string;
  action: string;
  status: string;
  icon: LucideIcon;
  nodes: Array<{ label: string; detail: string; icon: LucideIcon }>;
};

const WORKSPACES: Workspace[] = [
  {
    id: "platform",
    tab: "Platform",
    title: "The NComputing workspace",
    headline: "Secure desktops, from endpoint to cloud",
    description:
      "NComputing brings endpoint software, thin clients, desktop virtualization and fleet management into one practical workspace for IT teams.",
    href: "/solutions",
    action: "Explore our solutions",
    status: "Workspace ready",
    icon: Monitor,
    nodes: [
      { label: "Endpoints", detail: "Ready", icon: Laptop },
      { label: "Virtual desktops", detail: "Available", icon: Cloud },
      { label: "Management", detail: "Connected", icon: Settings2 },
    ],
  },
  {
    id: "leaf-os",
    tab: "LEAF OS",
    title: "LEAF OS",
    headline: "Give existing hardware a secure second life",
    description:
      "Transform compatible x86-64 PCs and laptops into locked-down, centrally managed endpoints for virtual desktops, cloud desktops and web apps.",
    href: "/leaf-os",
    action: "Discover LEAF OS",
    status: "Endpoint secured",
    icon: RefreshCw,
    nodes: [
      { label: "Repurpose", detail: "PC or laptop", icon: Laptop },
      { label: "Connect", detail: "Cloud or VDI", icon: Cloud },
      { label: "Control", detail: "With PMC", icon: ShieldCheck },
    ],
  },
  {
    id: "vspace",
    tab: "vSpace Pro",
    title: "vSpace Pro Enterprise",
    headline: "Put one Windows host to work for everyone",
    description:
      "Deliver familiar server-hosted Windows desktops while centralizing sessions, device updates and day-to-day administration.",
    href: "/products/vspace-pro",
    action: "Explore vSpace Pro",
    status: "Sessions online",
    icon: Server,
    nodes: [
      { label: "Host", detail: "Windows", icon: Server },
      { label: "Stream", detail: "UXP Turbo", icon: Cloud },
      { label: "Administer", detail: "One console", icon: Settings2 },
    ],
  },
  {
    id: "verde",
    tab: "VERDE VDI",
    title: "VERDE VDI",
    headline: "Virtual desktops that follow your organization",
    description:
      "Run secure Windows and Linux desktops on-premise, in the cloud or across hybrid environments—with remote access built in.",
    href: "/products/verde-vdi",
    action: "Explore VERDE VDI",
    status: "Fabric available",
    icon: Cloud,
    nodes: [
      { label: "Windows + Linux", detail: "Equal access", icon: Monitor },
      { label: "Remote access", detail: "Built in", icon: ShieldCheck },
      { label: "Deployment", detail: "Hybrid ready", icon: Cloud },
    ],
  },
  {
    id: "devices",
    tab: "Thin clients",
    title: "Purpose-built endpoints",
    headline: "Small devices. A full desktop experience.",
    description:
      "Choose current RX, EX and L-series thin clients designed for popular virtual desktop platforms and straightforward central management.",
    href: "/products",
    action: "View endpoint devices",
    status: "Devices enrolled",
    icon: Laptop,
    nodes: [
      { label: "RX Series", detail: "Flexible", icon: Monitor },
      { label: "EX Series", detail: "x86-64", icon: Laptop },
      { label: "L400", detail: "vSpace ready", icon: Server },
    ],
  },
];

const CAPABILITIES = [
  {
    name: "Software endpoints",
    product: "LEAF OS",
    description: "Repurpose compatible PCs and laptops as secure thin clients.",
    href: "/leaf-os",
    icon: RefreshCw,
  },
  {
    name: "Desktop virtualization",
    product: "vSpace Pro",
    description: "Deliver and centrally manage server-hosted Windows desktops.",
    href: "/products/vspace-pro",
    icon: Server,
  },
  {
    name: "VDI & remote access",
    product: "VERDE VDI",
    description:
      "Serve Windows and Linux workspaces across on-premise and cloud.",
    href: "/products/verde-vdi",
    icon: Cloud,
  },
  {
    name: "Endpoint management",
    product: "PMC",
    description:
      "Deploy, configure, update and monitor supported endpoint fleets.",
    href: "/products/pmc",
    icon: Settings2,
  },
];

export function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeWorkspace = WORKSPACES[activeIndex];

  /**
   * The progress bar is the clock: each tab hands off to the next one when its
   * bar finishes (Platform → LEAF OS → vSpace Pro → VERDE VDI → Thin clients →
   * Platform). A separate timer would drift away from the CSS animation and
   * would keep counting while the bar is paused, so the handoff is driven by
   * the animation's own `animationend` instead — see `advanceToNextWorkspace`
   * on the progress element below.
   */
  const advanceToNextWorkspace = () =>
    setActiveIndex((current) => (current + 1) % WORKSPACES.length);

  /**
   * Hold the rotation while someone is actually working with the switcher.
   * These live on the tablist and the panel rather than on the whole section:
   * the section is viewport-tall, so hovering it anywhere — even down in the
   * capability cards — used to freeze the handoff for good.
   */
  const holdWhileEngaged = {
    onPointerEnter: () => setIsPaused(true),
    onPointerLeave: () => setIsPaused(false),
    onFocusCapture: () => setIsPaused(true),
    onBlurCapture: (event: FocusEvent<HTMLDivElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget))
        setIsPaused(false);
    },
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={`${fontDisplay.className} min-h-[130svh] overflow-hidden bg-brand-orange px-[max(1rem,calc((100vw-1312px)/2))] py-[clamp(5rem,9vw,8.5rem)] text-[#2c180d] max-sm:pt-[4.75rem] max-sm:pb-20`}
    >
      <div className="mx-auto max-w-[980px] text-center max-sm:text-left">
        <h2
          id="about-heading"
          className="text-[clamp(2.6rem,5vw,4.75rem)] leading-[1.04] font-medium tracking-[-0.035em] text-balance max-sm:text-[clamp(2.4rem,12vw,3.4rem)]"
        >
          Turn almost any screen into a{" "}
          <span className="text-[#fff7ec]">managed workspace.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[720px] text-[clamp(1.125rem,1.7vw,1.4rem)] leading-normal text-[#613a25] max-sm:mt-5 max-sm:text-[1.08rem]">
          NComputing makes end-user computing easier to deploy, secure and
          manage—from repurposed PCs to purpose-built thin clients and virtual
          desktops.
        </p>
      </div>

      <div
        className="mt-[clamp(2.75rem,5vw,4.5rem)] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        {...holdWhileEngaged}
      >
        <div
          className="flex w-max min-w-full justify-center gap-[0.7rem] max-sm:justify-start max-sm:pr-4"
          role="tablist"
          aria-label="NComputing products"
        >
          {WORKSPACES.map((workspace, index) => (
            <button
              key={workspace.id}
              id={`about-tab-${workspace.id}`}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-controls={`about-panel-${workspace.id}`}
              tabIndex={activeIndex === index ? 0 : -1}
              className={cn(
                "min-h-[46px] cursor-pointer rounded-full border border-[#4c271229] bg-[#fff8ee70] px-5 py-[0.7rem] text-base font-semibold whitespace-nowrap text-[#2c180d] transition-[color,background-color,border-color] duration-180 hover:bg-[#fff8eeb8] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#fff8ee] max-sm:min-h-11 max-sm:px-4",
                activeIndex === index &&
                  "border-[#2c180d] bg-[#2c180d] text-[#fff8ee] hover:bg-[#2c180d]",
              )}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => {
                if (event.key !== "ArrowRight" && event.key !== "ArrowLeft")
                  return;
                event.preventDefault();
                const direction = event.key === "ArrowRight" ? 1 : -1;
                const nextIndex =
                  (activeIndex + direction + WORKSPACES.length) %
                  WORKSPACES.length;
                setActiveIndex(nextIndex);
                document
                  .getElementById(`about-tab-${WORKSPACES[nextIndex].id}`)
                  ?.focus();
              }}
            >
              {workspace.tab}
            </button>
          ))}
        </div>
      </div>

      <div
        id={`about-panel-${activeWorkspace.id}`}
        role="tabpanel"
        aria-labelledby={`about-tab-${activeWorkspace.id}`}
        className="relative isolate mt-8 grid min-h-[620px] grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] overflow-hidden bg-[#fff8ee] shadow-[0_30px_80px_rgb(94_44_12/22%)] [contain:layout_paint] before:absolute before:inset-[0_32%_0_44%] before:z-0 before:bg-[#efe5d7] before:[clip-path:polygon(54%_0,100%_0,58%_100%,0_100%)] before:content-[''] max-lg:grid-cols-1 max-lg:before:inset-[28%_0_25%] max-lg:before:[clip-path:polygon(0_34%,100%_0,100%_64%,0_100%)] max-sm:mt-5 max-sm:min-h-0 max-sm:before:hidden"
        {...holdWhileEngaged}
      >
        <div
          key={activeWorkspace.id}
          className="relative z-[1] flex flex-col items-start p-[clamp(2rem,4.5vw,4.5rem)] backface-hidden will-change-[transform,opacity] animate-in fade-in-65 slide-in-from-left-[18px] fill-mode-both duration-[360ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:animate-none max-lg:min-h-[470px] max-sm:min-h-[510px] max-sm:p-6"
        >
          <activeWorkspace.icon
            aria-hidden="true"
            strokeWidth={1.8}
            className="size-14 rounded-[14px] bg-[#2c180d] p-3.5 text-[#fff8ee] shadow-[0_14px_26px_rgb(55_27_13/20%)] max-sm:size-[50px]"
          />
          <div className="mt-[clamp(3.25rem,8vh,6.5rem)] max-lg:mt-14">
            <h3 className="text-[clamp(1.75rem,2.8vw,2.6rem)] leading-[1.1] font-semibold tracking-[-0.025em] max-sm:text-[1.8rem]">
              {activeWorkspace.title}
            </h3>
            <p className="mt-4 max-w-[440px] text-[clamp(1.2rem,1.8vw,1.5rem)] leading-[1.35] font-medium text-[#613a25] max-sm:text-[1.18rem]">
              {activeWorkspace.headline}
            </p>
            <p className="mt-4 max-w-[53ch] text-base leading-[1.6] text-[#795039]">
              {activeWorkspace.description}
            </p>
          </div>
          <Link
            href={activeWorkspace.href}
            className="group/link mt-auto inline-flex min-h-[46px] items-center gap-4 bg-[#2c180d] px-[1.1rem] py-3 font-semibold text-[#fff8ee] transition-colors duration-180 hover:bg-[#4b2917] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#fff8ee] max-lg:mt-10"
          >
            {activeWorkspace.action}
            <ArrowRight
              aria-hidden="true"
              className="w-[18px] transition-transform duration-180 group-hover/link:translate-x-[3px] motion-reduce:transition-none"
            />
          </Link>
        </div>

        <div
          className="relative z-[1] min-h-[500px] min-w-[670px] translate-z-0 self-center overflow-hidden rounded-l-2xl bg-[#f8fafb] text-[#193138] shadow-[-18px_24px_55px_rgb(46_35_27/18%)] [contain:paint] max-lg:mb-12 max-lg:ml-auto max-lg:w-[calc(100%-3rem)] max-lg:min-w-0 max-sm:mb-4 max-sm:min-h-[350px] max-sm:w-[calc(100%-1rem)] max-sm:rounded-l-xl"
          aria-hidden="true"
        >
          <div className="flex h-[74px] items-center gap-3 border-b border-[#e2e9eb] px-7 text-[0.85rem] font-bold tracking-[0.11em] max-sm:h-[58px] max-sm:px-4 max-sm:text-[0.72rem]">
            <div className="grid size-[34px] place-items-center rounded-[9px] bg-[#df6f24] text-[0.9rem] tracking-normal text-white">
              N
            </div>
            <span>NCOMPUTING</span>
            <span className="ml-auto rounded-full bg-[#e7f3eb] px-3 py-2 text-[0.72rem] tracking-normal text-[#2c5d43] max-sm:max-w-[92px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap">
              {activeWorkspace.status}
            </span>
          </div>
          <div className="grid min-h-[426px] grid-cols-[70px_1fr] max-sm:min-h-[292px] max-sm:grid-cols-[46px_1fr]">
            <div className="flex flex-col items-center gap-7 border-r border-[#e2e9eb] bg-[#f2f6f7] pt-8 text-[#76909a] max-sm:gap-[1.4rem] max-sm:pt-[1.3rem] [&_svg]:w-5 max-sm:[&_svg]:w-[17px] [&_svg:first-child]:text-[#d86823]">
              <Monitor />
              <Cloud />
              <Settings2 />
              <ShieldCheck />
            </div>
            <div
              key={activeWorkspace.id}
              className="animate-in fade-in-70 slide-in-from-right-[22px] fill-mode-both bg-white px-8 pt-8 pb-6 backface-hidden duration-[420ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] motion-reduce:animate-none max-sm:px-4 max-sm:pt-5 max-sm:pb-4"
            >
              <div className="flex items-end justify-between">
                <div className="grid gap-[0.3rem]">
                  <span className="text-[0.7rem] font-bold tracking-[0.12em] text-[#83969d]">
                    WORKSPACE
                  </span>
                  <strong className="text-[1.6rem] font-semibold tracking-[-0.02em] max-sm:text-[1.18rem]">
                    {activeWorkspace.tab}
                  </strong>
                </div>
                <div className="flex items-center gap-[0.45rem] rounded-full bg-[#edf3f4] px-[0.7rem] py-2 text-xs font-semibold text-[#47616a] max-sm:hidden">
                  <i className="size-[7px] rounded-full bg-[#55a576]" /> Live
                </div>
              </div>
              <div className="mt-14 grid grid-cols-3 gap-4 max-sm:mt-10 max-sm:gap-[0.4rem]">
                {activeWorkspace.nodes.map((node, index) => (
                  <div
                    key={node.label}
                    className="relative min-w-0 text-center"
                  >
                    <div className="relative z-[2] mx-auto grid size-[84px] place-items-center rounded-2xl bg-[#fff4e8] text-[#d86823] shadow-[0_16px_28px_rgb(55_74_82/12%)] max-sm:size-[55px] max-sm:rounded-[13px]">
                      <node.icon
                        strokeWidth={1.8}
                        className="size-[31px] max-sm:size-[23px]"
                      />
                    </div>
                    <span className="mt-4 block overflow-hidden text-[0.92rem] font-semibold text-ellipsis whitespace-nowrap max-sm:mt-3 max-sm:text-[0.68rem]">
                      {node.label}
                    </span>
                    <small className="mt-[0.2rem] block overflow-hidden text-xs text-ellipsis whitespace-nowrap text-[#7a8e95] max-sm:text-[0.62rem]">
                      {node.detail}
                    </small>
                    {index < activeWorkspace.nodes.length - 1 && (
                      <i className="absolute top-[41px] left-[calc(50%+42px)] h-px w-[calc(100%-68px)] bg-[#d8e3e6] max-sm:top-[27px] max-sm:left-[calc(50%+27px)] max-sm:w-[calc(100%-36px)]" />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-[4.25rem] flex justify-between gap-4 border-t border-[#e9eef0] pt-[1.2rem] text-[0.7rem] font-semibold text-[#6c8289] max-sm:mt-9 max-sm:text-[0.58rem]">
                <span>Policy synced</span>
                <span className="max-sm:hidden">Encrypted connection</span>
                <span>Managed by IT</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 z-[3] h-1 bg-[#703e1b1a]"
          aria-hidden="true"
        >
          <span
            key={activeWorkspace.id}
            className={cn(
              "block h-full w-full origin-left animate-workspace-progress bg-[#2c180d] motion-reduce:animate-none",
              isPaused && "paused",
            )}
            onAnimationEnd={(event) => {
              // Only this bar's own animation ends the turn.
              if (event.target !== event.currentTarget) return;
              advanceToNextWorkspace();
            }}
          />
        </div>
      </div>

      <div className="mt-[clamp(4rem,8vw,7rem)] bg-[radial-gradient(120%_100%_at_0%_0%,#fff4e6_0%,rgb(255_244_230/0)_58%)] bg-white p-[clamp(2.25rem,5vw,4rem)] text-[#2c180d] shadow-[0_30px_80px_rgb(94_44_12/18%)] max-sm:mt-[4.5rem] max-sm:px-5 max-sm:pt-8 max-sm:pb-9">
        <p className="text-[0.78rem] font-bold tracking-[0.18em] text-[#a85a12] uppercase">
          Featured products
        </p>
        <h3 className="mt-[0.9rem] max-w-[680px] text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.1] font-medium tracking-[-0.03em]">
          Built for the complete desktop journey
        </h3>
        <div className="mt-[clamp(2rem,3.5vw,3rem)] grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {CAPABILITIES.map((capability) => (
            <article
              key={capability.product}
              className="group relative grid min-w-0 grid-cols-[auto_minmax(0,1fr)] gap-x-[1.15rem] overflow-hidden border border-[#4c271217] bg-[#fbf6f0] px-6 pt-6 pb-7 transition-[border-color,background-color,box-shadow,transform] duration-[260ms] ease-[cubic-bezier(0.16,1,0.3,1)] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-linear-to-r after:from-brand-orange-ink after:to-brand-orange after:transition-transform after:duration-[340ms] after:ease-[cubic-bezier(0.16,1,0.3,1)] after:content-[''] hover:-translate-y-[3px] hover:border-[#4c271229] hover:bg-white hover:shadow-[0_18px_44px_rgb(94_44_12/13%)] hover:after:scale-x-100 focus-within:-translate-y-[3px] focus-within:border-[#4c271229] focus-within:bg-white focus-within:shadow-[0_18px_44px_rgb(94_44_12/13%)] focus-within:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none motion-reduce:hover:translate-y-0 motion-reduce:focus-within:translate-y-0 max-sm:px-5 max-sm:pt-[1.35rem] max-sm:pb-6"
            >
              <span
                className="grid size-14 place-items-center rounded-2xl bg-[#fbe7d1] text-[#a85a12] transition-colors duration-200 group-hover:bg-[#f7d7b4] group-focus-within:bg-[#f7d7b4] motion-reduce:transition-none"
                aria-hidden="true"
              >
                <capability.icon className="size-[26px]" strokeWidth={1.8} />
              </span>
              <div className="flex items-center self-center justify-between gap-3">
                <h4 className="min-w-0 text-[1.3rem] leading-[1.15] font-[650] tracking-[-0.015em]">
                  {capability.product}
                </h4>
                <Link
                  href={capability.href}
                  className="grid size-6 flex-none place-items-center text-[#4c27128c] transition-[color,transform] duration-200 group-hover:translate-x-0.5 group-hover:text-[#a85a12] group-focus-within:translate-x-0.5 group-focus-within:text-[#a85a12] focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange-ink motion-reduce:transition-none"
                  aria-label={`${capability.product} details — link coming soon`}
                  aria-disabled="true"
                  title="Link coming soon"
                  onClick={(event) => event.preventDefault()}
                >
                  <ArrowRight aria-hidden="true" className="size-5" />
                </Link>
              </div>
              <div className="col-span-full mt-[1.15rem]">
                <p className="text-[0.72rem] font-bold tracking-[0.1em] text-[#4c2712b3] uppercase">
                  {capability.name}
                </p>
                <p className="mt-2 text-[0.95rem] leading-[1.55] text-[#613a25]">
                  {capability.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
