import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { fontDisplay } from "@/lib/fonts";

import {
  FOOTER_COLUMNS,
  FOOTER_LEGAL,
  FOOTER_PORTALS,
  type FooterLink,
} from "../config/footer-config";
import { SOCIALS } from "./social-glyphs";

/**
 * Site footer — a flat white panel outlined by a single orange rule.
 *
 * The fill is solid white (no gradient, no dark panel): the footer belongs to
 * the same white field as the hero and support sections, so copy uses the
 * site's on-white ink `#203138` and `brand-orange` is spent only where it
 * separates or signals — the outline, hover states and the CTA fill.
 *
 * Shape: rounded on the top corners only, flush to the bottom and to the page
 * gutters below `sm`. Because panel and page share the same white, the outline
 * is the only thing defining the rectangle, so it is drawn as an overlay and
 * masked with a vertical fade: crisp across the top edge, dissolving down the
 * sides so the footer has no closing line and simply runs off the page end.
 */
const EDGE_FADE =
  "linear-gradient(to bottom, #000 0%, #000 26%, rgb(0 0 0 / 35%) 62%, transparent 92%)";

const LINK_CLASS =
  "text-[#203138]/70 hover:text-brand-orange-ink focus-visible:ring-brand-orange/60 inline-flex items-center gap-1.5 rounded-sm text-[15px] leading-6 transition-colors duration-150 outline-none focus-visible:ring-2";

function FooterAnchor({ link }: { link: FooterLink }) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className={`${LINK_CLASS} group/link`}
      >
        {link.label}
        <ArrowUpRight
          aria-hidden="true"
          className="group-hover/link:text-brand-orange-ink size-3.5 shrink-0 text-[#203138]/40 transition-transform duration-150 group-hover/link:-translate-y-px group-hover/link:translate-x-px"
        />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={link.href} className={LINK_CLASS}>
      {link.label}
    </Link>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={`${fontDisplay.className} bg-white sm:px-4 lg:px-6`}>
      <div className="relative rounded-t-[28px] bg-white sm:rounded-t-[36px] lg:rounded-t-[44px]">
        {/* The rectangle itself: one orange rule, masked so it is solid across
            the top edge and gone by the time the page ends. */}
        <div
          aria-hidden="true"
          style={{ maskImage: EDGE_FADE, WebkitMaskImage: EDGE_FADE }}
          className="border-brand-orange pointer-events-none absolute inset-0 rounded-t-[28px] border border-b-0 sm:rounded-t-[36px] lg:rounded-t-[44px]"
        />

        <div className="mx-auto w-full max-w-[1312px] px-6 pt-16 pb-8 sm:px-8 md:pt-20 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4 lg:pr-8">
              <Link
                href="/"
                aria-label="ncomputing home"
                className="hover:text-brand-orange-ink focus-visible:ring-brand-orange/60 inline-block rounded-sm text-[24px] leading-none font-bold tracking-[-0.02em] text-[#203138] transition-colors duration-150 outline-none focus-visible:ring-2"
              >
                ncomputing
              </Link>

              <p className="mt-8 max-w-[22ch] text-[26px] leading-[1.15] font-medium text-[#203138]">
                Let&apos;s stay in touch
              </p>

              <p className="mt-4 max-w-[38ch] text-[15px] leading-6 text-[#203138]/65">
                Secure desktop virtualization and managed endpoints for
                organizations in more than 140 countries.
              </p>

              <ul className="mt-7 flex items-center gap-3">
                {SOCIALS.map(({ label, href, Glyph }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="hover:bg-brand-orange hover:text-brand-warm-ink hover:ring-brand-orange focus-visible:ring-brand-orange flex size-10 items-center justify-center rounded-full text-[#203138]/70 ring-1 ring-[#203138]/15 transition-colors duration-150 outline-none focus-visible:ring-2"
                    >
                      <Glyph className="size-[18px]" />
                    </a>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact-sales"
                className="bg-brand-orange text-brand-warm-ink hover:bg-brand-orange-hover focus-visible:ring-brand-orange mt-9 inline-flex h-12 items-center justify-center px-7 text-[16px] font-semibold transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              >
                Contact us
              </Link>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
              {FOOTER_COLUMNS.map((column) => (
                <nav key={column.title} aria-labelledby={`footer-${column.title}`}>
                  <h2
                    id={`footer-${column.title}`}
                    className="text-[16px] leading-6 font-medium text-[#203138]"
                  >
                    {column.title}
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <FooterAnchor link={link} />
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}

              <nav
                aria-labelledby="footer-portals"
                className="sm:col-span-2 lg:col-span-3 xl:col-span-4"
              >
                <h2
                  id="footer-portals"
                  className="text-[16px] leading-6 font-medium text-[#203138]"
                >
                  Customer portals
                </h2>
                <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                  {FOOTER_PORTALS.map((link) => (
                    <li key={link.label}>
                      <FooterAnchor link={link} />
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="mt-14 border-t border-[#203138]/10 pt-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <ul className="flex flex-wrap gap-x-7 gap-y-2">
                {FOOTER_LEGAL.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-brand-orange-ink focus-visible:ring-brand-orange/60 rounded-sm text-[14px] text-[#203138]/60 transition-colors duration-150 outline-none focus-visible:ring-2"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="text-[14px] text-[#203138]/50">
                &copy; {year} NComputing Global, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
