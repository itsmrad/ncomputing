import { fontDisplay } from "@/lib/fonts";

/**
 * The survey of problems — six of them, as a hairline grid.
 *
 * Cards here deliberately do not lift, glow or sweep an underline the way the
 * solutions page cards do. These are not links and they are not offers; they are
 * a diagnosis. The only motion on the section is none, which is the point of the
 * corporate register.
 *
 * The 1px rules come from a `gap-px` grid over a hairline-coloured background,
 * so the cells share borders instead of doubling them.
 */
const PROBLEMS = [
  {
    number: "01",
    title: "Windows 11 locks out working hardware",
    symptom:
      "Machines that run fine fail the TPM, Secure Boot and CPU generation checks. Windows 10 no longer receives patches, so staying put is a compliance problem, not just a support one.",
    impact: "Forced capital spend on hardware that was not due for replacement",
  },
  {
    number: "02",
    title: "The refresh cycle never actually ends",
    symptom:
      "Every three to five years the same conversation returns: hundreds of endpoints, a procurement round, an imaging project, and a disposal problem at the other end.",
    impact: "Recurring capital cost with no compounding return",
  },
  {
    number: "03",
    title: "Every desk widens the attack surface",
    symptom:
      "A full OS per desk means local data, local admin rights, local antivirus to keep current, and a USB port that will eventually be used for something unsanctioned.",
    impact: "Breach exposure that scales linearly with headcount",
  },
  {
    number: "04",
    title: "Fleets drift out of policy between audits",
    symptom:
      "Devices behind branch firewalls and on home networks miss updates. Configuration diverges quietly until something fails or an auditor asks for evidence.",
    impact: "Unverifiable compliance posture and slow incident response",
  },
  {
    number: "05",
    title: "Support cost is tied to hands and travel",
    symptom:
      "Reimaging, swapping drives and diagnosing a machine in another building are all tasks that require a person in the room and a device out of service.",
    impact: "IT effort spent on maintenance instead of improvement",
  },
  {
    number: "06",
    title: "Licensing and renewals move under you",
    symptom:
      "Per-user terms, bundling changes and renewal repricing land mid-contract, and the architecture chosen two years ago suddenly carries a different bill.",
    impact: "Budget forecasts that do not survive the contract term",
  },
];

export function ProblemLandscape() {
  return (
    <section
      aria-labelledby="landscape-heading"
      className={`${fontDisplay.className} bg-surface-subtle px-[clamp(1rem,4vw,4.5rem)] py-[clamp(4rem,7vw,7rem)] text-ink max-sm:px-4 max-sm:py-14`}
    >
      <div className="mx-auto w-full max-w-[1312px]">
        <div className="max-w-[760px]">
          <p className="text-[0.72rem] font-bold tracking-[0.12em] text-[#647184] uppercase">
            The landscape
          </p>
          <h2
            id="landscape-heading"
            className="mt-[clamp(0.85rem,1.4vw,1.25rem)] text-[clamp(1.85rem,3.2vw,2.85rem)] leading-[1.1] font-medium tracking-[-0.03em] text-balance"
          >
            Six problems, one shared root cause
          </h2>
          <p className="mt-[clamp(1rem,1.6vw,1.4rem)] text-[clamp(1rem,1.35vw,1.15rem)] leading-[1.6] text-ink-muted">
            Ranked roughly by how often they start the conversation. The three we
            get asked about most are worked through in detail below.
          </p>
        </div>

        <ol className="border-hairline bg-hairline mt-[clamp(2.5rem,4vw,4rem)] grid gap-px border md:grid-cols-2 xl:grid-cols-3">
          {PROBLEMS.map((problem) => (
            <li
              key={problem.number}
              className="flex min-w-0 flex-col bg-white p-[clamp(1.5rem,2.2vw,2.25rem)]"
            >
              <div className="flex items-baseline gap-4">
                <span
                  aria-hidden="true"
                  className="text-[0.8rem] font-bold tabular-nums text-brand-orange-ink"
                >
                  {problem.number}
                </span>
                <h3 className="text-[clamp(1.15rem,1.5vw,1.35rem)] leading-[1.25] font-[650] tracking-[-0.015em] text-balance">
                  {problem.title}
                </h3>
              </div>

              <p className="mt-[1.1rem] text-[0.94rem] leading-[1.62] text-ink-muted">
                {problem.symptom}
              </p>

              <div className="border-hairline mt-auto border-t pt-4 text-[0.85rem] leading-[1.5]">
                <span className="font-semibold text-[#647184]">Impact — </span>
                <span className="text-ink-muted">{problem.impact}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
