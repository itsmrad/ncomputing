export type NavLink = {
  label: string;
  href: string;
};

export type NavColumn = {
  title: string;
  links: NavLink[];
  /** `subtle` renders the column on the tinted rail (last column on Stripe). */
  variant?: "subtle";
};

export type NavItem = {
  id: string;
  label: string;
  /** Plain link when there is no mega menu to expand. */
  href?: string;
  columns?: NavColumn[];
};
