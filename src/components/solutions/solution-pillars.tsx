import { fontDisplay } from "@/lib/fonts";

type Pillar = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
};

/**
 * The three objections every deal runs into — is it secure, can we manage it,
 * does it pay for itself — answered with the specifics rather than adjectives.
 *
 * Set as numbered editorial rows on dark slate instead of another card grid:
 * the page has already used the card idiom twice, and these three are arguments
 * that want reading order, not scanning.
 */
const PILLARS: Pillar[] = [
  {
    id: "security",
    eyebrow: "Security",
    title: "An endpoint with nothing worth stealing",
    body: "Because the desktop lives in the data center or the cloud, the device on the desk holds no user data. What is left is a small, locked-down Linux image that resists the things endpoint fleets normally get caught by.",
    points: [
      "Read-only, locked-down Linux with secure boot",
      "No local antivirus to license, patch or fall behind",
      "Encrypted communications and data leakage prevention",
      "USB permissions enforceable by device model and serial number",
      "Isolated BYOD sessions that leave nothing behind on personal machines",
    ],
  },
  {
    id: "management",
    eyebrow: "Management",
    title: "One console, wherever the devices ended up",
    body: "PMC Endpoint Manager reaches past the office LAN. It manages devices across wide-area networks and behind firewalls and NAT routers, which is what makes hybrid and work-from-home fleets practical to run.",
    points: [
      "Zero-touch enrollment with auto-discovery and provisioning",
      "Hierarchical grouping and profile push for multi-site deployments",
      "Microsoft Entra ID sign-in, TOTP MFA and role-based access control",
      "Secure HTML5 screen shadowing and remote log collection",
      "Scheduled firmware updates, reboots and real-time alerts via webhooks",
    ],
  },
  {
    id: "economics",
    eyebrow: "Economics",
    title: "Costs you can predict a renewal ahead",
    body: "Today's PCs carry more compute than most people use, and most of it idles. Consolidating it and pushing durable, low-power endpoints to the edge changes both the capital and the running cost—and takes you out of the refresh cycle.",
    points: [
      "Extend the life of hardware you have already paid for",
      "Lower energy draw, less heat, no fans and no spinning disks",
      "Fewer deskside visits and less hands-on support per user",
      "Storage Optimizer separates the user layer from shared OS images",
      "Less e-waste, fewer replacement cycles, lower CO2 footprint",
    ],
  },
];

export function SolutionPillars() {
  return (
    <section
      aria-labelledby="pillars-heading"
      className={`${fontDisplay.className} bg-[#203138] px-[clamp(1rem,4vw,4.5rem)] py-[clamp(5rem,8vw,9rem)] text-white max-sm:px-4 max-sm:py-16`}
    >
      <div className="mx-auto w-full max-w-[1312px]">
        <div className="max-w-[880px]">
          <p className="text-[0.78rem] font-bold tracking-[0.18em] text-brand-orange uppercase">
            Why it holds up
          </p>
          <h2
            id="pillars-heading"
            className="mt-[clamp(1rem,1.8vw,1.5rem)] text-[clamp(2.35rem,4.6vw,4.5rem)] leading-[1.04] font-medium tracking-[-0.035em] text-balance max-sm:text-[clamp(2.15rem,11vw,3rem)]"
          >
            Secure by construction,{" "}
            <span className="text-brand-orange">managed from one place</span>
          </h2>
          <p className="mt-[clamp(1.25rem,2vw,1.75rem)] max-w-[60ch] text-[clamp(1.05rem,1.6vw,1.35rem)] leading-[1.5] text-[#a8bdc5] max-sm:text-[1.05rem]">
            The savings are the easy part of the argument. These are the three
            questions that decide whether a deployment survives its first audit.
          </p>
        </div>

        <div className="mt-[clamp(3.5rem,6vw,6rem)] flex flex-col">
          {PILLARS.map((pillar, index) => (
            <article
              key={pillar.id}
              className="grid gap-[clamp(1.5rem,3vw,4rem)] border-t border-white/14 py-[clamp(2.5rem,4vw,4rem)] last:border-b lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
            >
              <div>
                <p className="flex items-baseline gap-4 text-[0.78rem] font-bold tracking-[0.18em] text-brand-orange uppercase">
                  <span aria-hidden="true" className="tabular-nums">
                    0{index + 1}
                  </span>
                  {pillar.eyebrow}
                </p>
                <h3 className="mt-[clamp(1rem,1.6vw,1.5rem)] max-w-[26ch] text-[clamp(1.6rem,2.6vw,2.5rem)] leading-[1.12] font-medium tracking-[-0.03em] text-balance">
                  {pillar.title}
                </h3>
              </div>

              <div>
                <p className="max-w-[56ch] text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.55] text-[#c3d4da]">
                  {pillar.body}
                </p>
                <ul className="mt-[clamp(1.75rem,2.6vw,2.5rem)] grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {pillar.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[0.95rem] leading-[1.5] text-[#dbe6ea]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.55rem] size-[6px] shrink-0 bg-brand-orange"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
