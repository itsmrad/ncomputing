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
    columns: [
      {
        title: "By stage",
        links: [
          { label: "Enterprises", href: "#" },
          { label: "Scale-ups", href: "#" },
          { label: "Startups", href: "#" },
        ],
      },
      {
        title: "By use case",
        links: [
          { label: "AI training", href: "#" },
          { label: "AI inference", href: "#" },
          { label: "Batch processing", href: "#" },
          { label: "Data warehousing", href: "#" },
          { label: "Disaster recovery", href: "#" },
          { label: "Edge computing", href: "#" },
          { label: "High performance computing", href: "#" },
          { label: "Hybrid cloud", href: "#" },
          { label: "Rendering", href: "#" },
          { label: "Web hosting", href: "#" },
        ],
      },
      {
        title: "By industry",
        links: [
          { label: "AI companies", href: "#" },
          { label: "Financial services", href: "#" },
          { label: "Gaming", href: "#" },
          { label: "Healthcare", href: "#" },
          { label: "Media and entertainment", href: "#" },
          { label: "Public sector", href: "#" },
          { label: "Research and academia", href: "#" },
          { label: "Retail", href: "#" },
        ],
      },
      {
        title: "Ecosystem",
        variant: "subtle",
        links: [
          { label: "Partners", href: "#" },
          { label: "Marketplace", href: "#" },
          { label: "Become a reseller", href: "#" },
        ],
      },
    ],
  },
  {
    id: "developers",
    label: "Developers",
    columns: [
      {
        title: "Get started",
        links: [
          { label: "Documentation", href: "#" },
          { label: "Quickstarts", href: "#" },
          { label: "API reference", href: "#" },
          { label: "Changelog", href: "#" },
        ],
      },
      {
        title: "Tools",
        links: [
          { label: "CLI", href: "#" },
          { label: "SDKs", href: "#" },
          { label: "Terraform provider", href: "#" },
          { label: "Sandbox", href: "#" },
        ],
      },
      {
        title: "Community",
        variant: "subtle",
        links: [
          { label: "Discord", href: "#" },
          { label: "GitHub", href: "#" },
          { label: "Support plans", href: "#" },
        ],
      },
    ],
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
