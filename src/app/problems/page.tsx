import type { Metadata } from "next";

import { ModelComparison } from "@/components/problems/model-comparison";
import { ProblemDeepDives } from "@/components/problems/problem-deep-dives";
import { ProblemLandscape } from "@/components/problems/problem-landscape";
import { ProblemOutcomes } from "@/components/problems/problem-outcomes";
import { ProblemsCta } from "@/components/problems/problems-cta";
import { ProblemsHero } from "@/components/problems/problems-hero";

export const metadata: Metadata = {
  title: "Problems we solve | NComputing",
  description:
    "Windows 11 hardware lockout, endless PC refresh cycles, endpoint attack surface, fleet drift, support cost and licensing volatility — the recurring end-user computing problems NComputing addresses, and how.",
};

/**
 * Diagnosis before prescription: state the problems, work through the three most
 * common in detail, compare the two operating models directly, then show named
 * organizations that had the same problems.
 *
 * The field alternates white → subtle → white → subtle → ink → white, a quieter
 * rhythm than the warm/orange cadence of the landing and solutions pages.
 */
export default function ProblemsPage() {
  return (
    <main>
      <ProblemsHero />
      <ProblemLandscape />
      <ProblemDeepDives />
      <ModelComparison />
      <ProblemOutcomes />
      <ProblemsCta />
    </main>
  );
}
