import type { Metadata } from "next";

import { IndustrySolutions } from "@/components/solutions/industry-solutions";
import { PlatformSolutions } from "@/components/solutions/platform-solutions";
import { SolutionPillars } from "@/components/solutions/solution-pillars";
import { SolutionsCta } from "@/components/solutions/solutions-cta";
import { SolutionsHero } from "@/components/solutions/solutions-hero";
import { WindowsMigration } from "@/components/solutions/windows-migration";

export const metadata: Metadata = {
  title: "Solutions | NComputing",
  description:
    "Desktop virtualization solutions from NComputing: migrate to Windows 11 without replacing PCs, deploy certified endpoints for Microsoft, Citrix, Omnissa and Amazon WorkSpaces, or run vSpace Pro and VERDE VDI on-premise.",
};

/**
 * Section order follows the buyer's questions: what is this, what about
 * Windows 10 end-of-life, does it work with my platform, has it worked for
 * someone like me, will it survive an audit, how do I start.
 *
 * The colour rhythm alternates white → cream → white → orange → slate → warm so
 * no two adjacent sections share a field, matching the landing page's cadence.
 */
export default function SolutionsPage() {
  return (
    <main>
      <SolutionsHero />
      <WindowsMigration />
      <PlatformSolutions />
      <IndustrySolutions />
      <SolutionPillars />
      <SolutionsCta />
    </main>
  );
}
