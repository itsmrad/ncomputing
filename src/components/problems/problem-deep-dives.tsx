import { fontDisplay } from "@/lib/fonts";

type DeepDive = {
  id: string;
  label: string;
  title: string;
  cause: string;
  response: string[];
  products: string[];
};

/**
 * The three problems that start most conversations, each worked through as
 * cause → response → the products involved.
 *
 * Structured as a definition-style two-column layout instead of prose so the
 * three read comparably: same shape, same order, so a reader can scan one axis
 * across all three. `response` is a list because the answer is a sequence of
 * concrete moves, not a paragraph of positioning.
 */
const DEEP_DIVES: DeepDive[] = [
  {
    id: "windows-11",
    label: "Problem 01",
    title: "Windows 11 locks out working hardware",
    cause:
      "Windows 11 enforces TPM 2.0, Secure Boot and a CPU generation floor. A fleet bought before those became requirements fails validation regardless of how much life is left in it, and Windows 10 has stopped receiving security patches.",
    response: [
      "Flash LEAF OS to the internal drive and the machine becomes a managed thin client — the Windows 11 requirements no longer apply to it, because Windows now runs elsewhere.",
      "Point the endpoint at Windows 11 hosted in Azure Virtual Desktop, Windows 365 or RDS, so users get the current OS on hardware that could never have run it locally.",
      "For machines you cannot re-image, boot LEAF OS from a USB stick instead and leave the original drive untouched — the same result without committing the device.",
      "Minimum requirement is 4GB RAM and 8GB storage, which is well inside what a Windows 10-era PC already has.",
    ],
    products: ["LEAF OS", "PMC", "Azure Virtual Desktop", "Windows 365"],
  },
  {
    id: "attack-surface",
    label: "Problem 03",
    title: "Every desk widens the attack surface",
    cause:
      "A conventional endpoint stores user data locally, runs a general-purpose OS with a writable disk, and depends on antivirus definitions staying current on every machine. Each device is an independent thing that can be lost, infected or copied from.",
    response: [
      "The desktop runs in the data center or the cloud, so the device holds no user data to exfiltrate and a lost endpoint is a hardware loss rather than a disclosure.",
      "LEAF OS is a locked-down, read-only Linux image with secure boot, which removes the need for local antivirus entirely and shrinks what an attacker can persist in.",
      "USB permissions can be enforced by device model and serial number, so an unapproved drive is blocked and the attempt is logged rather than silently allowed.",
      "VERDE VDI provisions desktops dynamically, so unsanctioned changes do not persist past the session — and its Secure Browser destroys all session data on close.",
    ],
    products: ["LEAF OS", "VERDE VDI", "PMC", "VERDE Secure Browser"],
  },
  {
    id: "fleet-drift",
    label: "Problem 04",
    title: "Fleets drift out of policy between audits",
    cause:
      "Endpoint management tools that assume a corporate LAN lose sight of devices in branch offices and homes. Those devices miss updates, diverge from their intended configuration, and produce no evidence trail — which becomes visible only during an audit or an incident.",
    response: [
      "PMC Endpoint Manager manages devices across wide-area networks and behind firewalls and NAT routers, so remote and hybrid devices stay in scope rather than dropping off it.",
      "Zero-touch enrollment with auto-discovery and provisioning means a replacement device arrives at its intended configuration without an administrator touching it.",
      "Hierarchical grouping and profile push keep multi-site estates consistent, and a scheduler handles firmware updates and reboots in defined windows.",
      "Detailed event logging with filtering gives the audit trail directly, and HTML5 screen shadowing lets support see the actual session without travelling to it.",
    ],
    products: ["PMC", "LEAF OS", "Entra ID", "TOTP MFA"],
  },
];

export function ProblemDeepDives() {
  return (
    <section
      aria-labelledby="deep-dives-heading"
      className={`${fontDisplay.className} bg-white px-[clamp(1rem,4vw,4.5rem)] py-[clamp(4rem,7vw,7rem)] text-ink max-sm:px-4 max-sm:py-14`}
    >
      <div className="mx-auto w-full max-w-[1312px]">
        <div className="max-w-[760px]">
          <p className="text-[0.72rem] font-bold tracking-[0.12em] text-[#647184] uppercase">
            In detail
          </p>
          <h2
            id="deep-dives-heading"
            className="mt-[clamp(0.85rem,1.4vw,1.25rem)] text-[clamp(1.85rem,3.2vw,2.85rem)] leading-[1.1] font-medium tracking-[-0.03em] text-balance"
          >
            What causes them, and what we do about it
          </h2>
        </div>

        <div className="mt-[clamp(2.5rem,4vw,4rem)] flex flex-col">
          {DEEP_DIVES.map((dive) => (
            <article
              key={dive.id}
              id={dive.id}
              aria-labelledby={`${dive.id}-heading`}
              className="border-hairline grid scroll-mt-24 gap-[clamp(1.5rem,3vw,4rem)] border-t py-[clamp(2.25rem,3.5vw,3.5rem)] last:border-b lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
            >
              {/* Sticky on wide screens: the response column is roughly twice
                  the height of the label column, so without this the problem
                  title scrolls away from the answer it belongs to and leaves a
                  tall empty gutter behind. `top` clears the 62px navbar. */}
              <div className="lg:sticky lg:top-[86px] lg:self-start">
                <p className="text-[0.72rem] font-bold tracking-[0.12em] text-brand-orange-ink uppercase">
                  {dive.label}
                </p>
                <h3
                  id={`${dive.id}-heading`}
                  className="mt-[clamp(0.85rem,1.4vw,1.25rem)] max-w-[24ch] text-[clamp(1.5rem,2.3vw,2.1rem)] leading-[1.15] font-medium tracking-[-0.025em] text-balance"
                >
                  {dive.title}
                </h3>

                <ul className="mt-[clamp(1.5rem,2.4vw,2.25rem)] flex flex-wrap gap-2">
                  {dive.products.map((product) => (
                    <li
                      key={product}
                      className="border-hairline inline-flex items-center border bg-surface-subtle px-[0.6rem] py-[0.3rem] text-[0.78rem] font-semibold text-ink-muted"
                    >
                      {product}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[0.72rem] font-bold tracking-[0.12em] text-[#647184] uppercase">
                  Why it happens
                </h4>
                <p className="mt-3 max-w-[62ch] text-[clamp(1rem,1.3vw,1.1rem)] leading-[1.65] text-ink-muted">
                  {dive.cause}
                </p>

                <h4 className="mt-[clamp(1.75rem,2.6vw,2.25rem)] text-[0.72rem] font-bold tracking-[0.12em] text-[#647184] uppercase">
                  How we address it
                </h4>
                <ol className="mt-4 flex flex-col gap-4">
                  {dive.response.map((step, index) => (
                    <li
                      key={step}
                      className="grid grid-cols-[1.75rem_minmax(0,1fr)] text-[0.95rem] leading-[1.62] text-ink"
                    >
                      <span
                        aria-hidden="true"
                        className="pt-[0.15rem] text-[0.8rem] font-bold tabular-nums text-brand-orange-ink"
                      >
                        {index + 1}.
                      </span>
                      <span className="max-w-[64ch]">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
