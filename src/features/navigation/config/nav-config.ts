import type { NavItem, NavLink } from "../types";

/** Placeholder content — replace with real ncomputing IA. */
export const NAV_ITEMS: NavItem[] = [
  {
    id: "products",
    label: "Products",
    columns: [
      {
        title: "Compute",
        links: [
          { label: "Virtual machines", href: "#" },
          { label: "Bare metal", href: "#" },
          { label: "GPU clusters", href: "#" },
          { label: "Containers", href: "#" },
          { label: "Serverless runtime", href: "#" },
        ],
      },
      {
        title: "Storage",
        links: [
          { label: "Object storage", href: "#" },
          { label: "Block volumes", href: "#" },
          { label: "Managed databases", href: "#" },
          { label: "Backup and archive", href: "#" },
        ],
      },
      {
        title: "Networking",
        links: [
          { label: "Load balancing", href: "#" },
          { label: "Private networking", href: "#" },
          { label: "CDN", href: "#" },
          { label: "DNS", href: "#" },
        ],
      },
      {
        title: "Platform",
        variant: "subtle",
        links: [
          { label: "Console", href: "#" },
          { label: "Observability", href: "#" },
          { label: "Access control", href: "#" },
        ],
      },
    ],
  },
  {
    id: "solutions",
    label: "Solutions",
    // Every link resolves to the /solutions hub for now: the hub covers all of
    // these entry points in its platform and industry sections, and pointing
    // them at unbuilt sub-routes would 404. Swap in the specific routes as
    // those pages ship.
    columns: [
      {
        title: "By stage",
        links: [
          { label: "Enterprises", href: "/solutions" },
          { label: "Scale-ups", href: "/solutions" },
          { label: "Startups", href: "/solutions" },
        ],
      },
      {
        title: "By use case",
        links: [
          { label: "AI training", href: "/solutions" },
          { label: "AI inference", href: "/solutions" },
          { label: "Batch processing", href: "/solutions" },
          { label: "Data warehousing", href: "/solutions" },
          { label: "Disaster recovery", href: "/solutions" },
          { label: "Edge computing", href: "/solutions" },
          { label: "High performance computing", href: "/solutions" },
          { label: "Hybrid cloud", href: "/solutions" },
          { label: "Rendering", href: "/solutions" },
          { label: "Web hosting", href: "/solutions" },
        ],
      },
      {
        title: "By industry",
        links: [
          { label: "AI companies", href: "/solutions" },
          { label: "Financial services", href: "/solutions" },
          { label: "Gaming", href: "/solutions" },
          { label: "Healthcare", href: "/solutions" },
          { label: "Media and entertainment", href: "/solutions" },
          { label: "Public sector", href: "/solutions" },
          { label: "Research and academia", href: "/solutions" },
          { label: "Retail", href: "/solutions" },
        ],
      },
      {
        title: "Ecosystem",
        variant: "subtle",
        links: [
          { label: "Partners", href: "/solutions" },
          { label: "Marketplace", href: "/solutions" },
          { label: "Become a reseller", href: "/solutions" },
        ],
      },
    ],
  },
  {
    id: "problems",
    label: "Problems",
    href: "/problems",
  },
  {
    id: "resources",
    label: "Resources",
    columns: [
      {
        title: "Learn",
        links: [
          { label: "Guides", href: "#" },
          { label: "Blog", href: "#" },
          { label: "Case studies", href: "#" },
          { label: "Benchmarks", href: "#" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Help centre", href: "#" },
          { label: "Contact support", href: "#" },
          { label: "System status", href: "#" },
          { label: "Trust and security", href: "#" },
        ],
      },
      {
        title: "Company",
        variant: "subtle",
        links: [
          { label: "About us", href: "#" },
          { label: "Careers", href: "#" },
          { label: "Newsroom", href: "#" },
        ],
      },
    ],
  },
  { id: "pricing", label: "Pricing", href: "#" },
];

export const NAV_ACTIONS: { signIn: NavLink; contactSales: NavLink } = {
  signIn: { label: "Sign in", href: "#" },
  contactSales: { label: "Contact sales", href: "#" },
};

/** Shared between the trigger (`aria-controls`) and the panel it reveals. */
export const navPanelId = (itemId: string) => `nav-panel-${itemId}`;

/** Lets the Escape handler hand focus back to the trigger that opened a panel. */
export const navTriggerId = (itemId: string) => `nav-trigger-${itemId}`;
