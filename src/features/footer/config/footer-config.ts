export type FooterLink = {
  label: string;
  href: string;
  /** Renders an external-link affordance and opens in a new tab. */
  external?: boolean;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

/**
 * Footer IA for ncomputing.com — product names track the real portfolio
 * (LEAF OS, vSpace Pro Enterprise, VERDE VDI, PMC, RX/EX/L-series endpoints).
 * Hrefs are the intended routes; they resolve once those pages ship.
 */
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Products",
    links: [
      { label: "LEAF OS", href: "/leaf-os" },
      { label: "vSpace Pro Enterprise", href: "/products/vspace-pro" },
      { label: "VERDE VDI", href: "/products/verde-vdi" },
      { label: "PMC endpoint management", href: "/products/pmc" },
      { label: "RX Series thin clients", href: "/products/rx-series" },
      { label: "EX Series thin clients", href: "/products/ex-series" },
      { label: "L400 thin client", href: "/products/l400" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Education", href: "/solutions/education" },
      { label: "Healthcare", href: "/solutions/healthcare" },
      { label: "Government", href: "/solutions/government" },
      { label: "Manufacturing", href: "/solutions/manufacturing" },
      { label: "Retail and hospitality", href: "/solutions/retail" },
      { label: "Financial services", href: "/solutions/financial-services" },
      { label: "Contact centers", href: "/solutions/contact-centers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/resources/docs" },
      { label: "Downloads", href: "/resources/downloads" },
      { label: "Knowledge base", href: "/resources/knowledge-base" },
      { label: "Deployment guides", href: "/resources/guides" },
      { label: "Case studies", href: "/resources/case-studies" },
      { label: "Webinars and events", href: "/resources/events" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About NComputing", href: "/company/about" },
      { label: "Partners and resellers", href: "/partners" },
      { label: "Newsroom", href: "/company/newsroom" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact sales", href: "/contact-sales" },
      { label: "Where to buy", href: "/where-to-buy" },
    ],
  },
];

/** Logged-in destinations — deliberately separated from marketing pages. */
export const FOOTER_PORTALS: FooterLink[] = [
  { label: "Support portal", href: "https://support.ncomputing.com", external: true },
  { label: "Partner portal", href: "https://partners.ncomputing.com", external: true },
  { label: "License management", href: "https://licensing.ncomputing.com", external: true },
  { label: "System status", href: "https://status.ncomputing.com", external: true },
];

export const FOOTER_LEGAL: FooterLink[] = [
  { label: "Privacy policy", href: "/legal/privacy" },
  { label: "Terms of use", href: "/legal/terms" },
  { label: "Cookie preferences", href: "/legal/cookies" },
  { label: "Trademarks", href: "/legal/trademarks" },
  { label: "Accessibility", href: "/legal/accessibility" },
];
