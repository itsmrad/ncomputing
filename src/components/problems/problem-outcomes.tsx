import { fontDisplay } from "@/lib/fonts";

/**
 * Evidence, on the one dark field of the page.
 *
 * Every quote here is published by NComputing with a named person and
 * organization attached — nothing is paraphrased into a stronger claim than the
 * source makes, and no figure is invented. The scale line under each quote is
 * the detail that makes it checkable.
 */
const EVIDENCE = [
  {
    quote:
      "Upgrading Operating Systems and applications which would normally take us months can now be completed in hours.",
    name: "Vaughn T. Hazell",
    role: "Government Information Technology Services",
    org: "Government of Anguilla",
    scale: "~120 employees on a single server",
    problem: "Refresh and upgrade effort",
  },
  {
    quote:
      "We have successfully deployed VERDE VDI in our head office and bank branches providing desktop virtualization to 1650 of our bank staff. Installation of the VERDE solution is fast, easier to manage, and VM connectivity is faster than previous versions.",
    name: "Woo Sung-hoon",
    role: "IT",
    org: "Busan Bank",
    scale: "1,650 staff across head office and branches",
    problem: "Branch fleet consistency",
  },
  {
    quote:
      "We haven't had to do any work on a student device the entire year, which is pretty incredible. It's like nothing I've ever supported before.",
    name: "Todd Pilch",
    role: "Technology Director",
    org: "Sisters School District",
    scale: "District-wide student devices",
    problem: "Support cost per device",
  },
  {
    quote:
      "By enabling our department to move desktops into the secure data center and isolate access based on need or clearance level, the solution significantly improves security.",
    name: "Representative",
    role: "Military",
    org: "US Department of Defense",
    scale: "Security-classified environment",
    problem: "Attack surface and data isolation",
  },
];

export function ProblemOutcomes() {
  return (
    <section
      aria-labelledby="outcomes-heading"
      className={`${fontDisplay.className} bg-ink px-[clamp(1rem,4vw,4.5rem)] py-[clamp(4rem,7vw,7rem)] text-white max-sm:px-4 max-sm:py-14`}
    >
      <div className="mx-auto w-full max-w-[1312px]">
        <div className="max-w-[760px]">
          <p className="text-[0.72rem] font-bold tracking-[0.12em] text-brand-orange uppercase">
            Evidence
          </p>
          <h2
            id="outcomes-heading"
            className="mt-[clamp(0.85rem,1.4vw,1.25rem)] text-[clamp(1.85rem,3.2vw,2.85rem)] leading-[1.1] font-medium tracking-[-0.03em] text-balance"
          >
            Organizations that had these exact problems
          </h2>
          <p className="mt-[clamp(1rem,1.6vw,1.4rem)] text-[clamp(1rem,1.35vw,1.15rem)] leading-[1.6] text-[#b6c6d4]">
            Named, published references rather than anonymous figures. Ask us for
            the full case studies and we will send them.
          </p>
        </div>

        <ul className="mt-[clamp(2.5rem,4vw,4rem)] grid gap-px border border-white/12 bg-white/12 lg:grid-cols-2">
          {EVIDENCE.map((item) => (
            <li
              key={item.org}
              className="flex min-w-0 flex-col bg-ink p-[clamp(1.5rem,2.4vw,2.5rem)]"
            >
              <p className="text-[0.72rem] font-bold tracking-[0.12em] text-brand-orange uppercase">
                {item.problem}
              </p>

              <figure className="mt-[clamp(1.25rem,2vw,1.75rem)] flex flex-1 flex-col">
                <blockquote className="max-w-[48ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-[1.5] font-medium text-balance text-white">
                  <p>&ldquo;{item.quote}&rdquo;</p>
                </blockquote>

                <figcaption className="mt-auto border-t border-white/12 pt-5 text-[0.88rem] leading-[1.5]">
                  <span className="font-semibold text-white">{item.name}</span>
                  <span className="text-[#9fb2c2]">
                    {" "}
                    — {item.role}, {item.org}
                  </span>
                  <span className="mt-1 block text-[0.82rem] text-[#8ba1b4]">
                    {item.scale}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
