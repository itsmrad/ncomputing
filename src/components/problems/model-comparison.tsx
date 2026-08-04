import { fontDisplay } from "@/lib/fonts";

/**
 * Conventional fleet versus endpoint model, as an actual table.
 *
 * A real `<table>` with a caption and scoped headers rather than a CSS grid: the
 * content is genuinely tabular, and screen readers should be able to announce
 * "row: patching, column: NComputing endpoint model" instead of reading two
 * unrelated lists. The caption is visually hidden because the section heading
 * already states the comparison in view.
 *
 * On narrow screens the table scrolls horizontally inside a labelled, focusable
 * region — collapsing a comparison into stacked cards loses the comparison,
 * which is the only reason the table exists.
 */
const ROWS = [
  {
    dimension: "Windows 11 readiness",
    conventional: "Gated by TPM, Secure Boot and CPU generation on every device",
    endpoint: "Determined by the host, not the device on the desk",
  },
  {
    dimension: "Hardware replacement",
    conventional: "Fleet-wide refresh every three to five years",
    endpoint: "Devices replaced individually, on failure rather than on schedule",
  },
  {
    dimension: "Where user data sits",
    conventional: "On the local disk, backed up per machine",
    endpoint: "In the data center or cloud, backed up centrally",
  },
  {
    dimension: "Endpoint OS",
    conventional: "General-purpose, writable, needs local antivirus",
    endpoint: "Locked-down read-only Linux with secure boot, no local antivirus",
  },
  {
    dimension: "Patching and updates",
    conventional: "Per-device, dependent on the machine being on the network",
    endpoint: "Scheduled from one console, including devices behind NAT",
  },
  {
    dimension: "Provisioning a replacement",
    conventional: "Imaging, joining, installing, configuring — hours per device",
    endpoint: "Zero-touch enrollment against an existing profile",
  },
  {
    dimension: "Remote support",
    conventional: "Deskside visit or a remote agent per machine",
    endpoint: "HTML5 screen shadowing and remote log collection from the console",
  },
  {
    dimension: "Power and noise",
    conventional: "Fans, spinning disks and heat the air conditioning removes",
    endpoint: "Fanless low-power devices, mountable behind the monitor",
  },
  {
    dimension: "End of life",
    conventional: "Disposal project and e-waste at every refresh",
    endpoint: "Existing hardware kept in service years longer",
  },
];

export function ModelComparison() {
  return (
    <section
      aria-labelledby="comparison-heading"
      className={`${fontDisplay.className} bg-surface-subtle px-[clamp(1rem,4vw,4.5rem)] py-[clamp(4rem,7vw,7rem)] text-ink max-sm:px-4 max-sm:py-14`}
    >
      <div className="mx-auto w-full max-w-[1312px]">
        <div className="max-w-[760px]">
          <p className="text-[0.72rem] font-bold tracking-[0.12em] text-[#647184] uppercase">
            Side by side
          </p>
          <h2
            id="comparison-heading"
            className="mt-[clamp(0.85rem,1.4vw,1.25rem)] text-[clamp(1.85rem,3.2vw,2.85rem)] leading-[1.1] font-medium tracking-[-0.03em] text-balance"
          >
            A conventional PC fleet against the endpoint model
          </h2>
          <p className="mt-[clamp(1rem,1.6vw,1.4rem)] text-[clamp(1rem,1.35vw,1.15rem)] leading-[1.6] text-ink-muted">
            The same nine operational questions, answered both ways.
          </p>
        </div>

        <div
          role="region"
          aria-labelledby="comparison-heading"
          tabIndex={0}
          className="border-hairline mt-[clamp(2.5rem,4vw,4rem)] overflow-x-auto border bg-white outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
        >
          <table className="w-full min-w-[720px] border-collapse text-left">
            <caption className="sr-only">
              Comparison of a conventional PC fleet and the NComputing endpoint
              model across nine operational dimensions.
            </caption>
            <thead>
              <tr className="border-hairline border-b bg-surface-subtle">
                <th
                  scope="col"
                  className="w-[22%] px-[clamp(1rem,1.6vw,1.5rem)] py-[clamp(0.9rem,1.3vw,1.15rem)] text-[0.72rem] font-bold tracking-[0.12em] text-[#647184] uppercase"
                >
                  Dimension
                </th>
                <th
                  scope="col"
                  className="border-hairline w-[39%] border-l px-[clamp(1rem,1.6vw,1.5rem)] py-[clamp(0.9rem,1.3vw,1.15rem)] text-[0.72rem] font-bold tracking-[0.12em] text-[#647184] uppercase"
                >
                  Conventional PC fleet
                </th>
                <th
                  scope="col"
                  className="w-[39%] border-l border-brand-orange/50 bg-[#fffaf4] px-[clamp(1rem,1.6vw,1.5rem)] py-[clamp(0.9rem,1.3vw,1.15rem)] text-[0.72rem] font-bold tracking-[0.12em] text-brand-orange-ink uppercase"
                >
                  NComputing endpoint model
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr
                  key={row.dimension}
                  className="border-hairline border-b last:border-b-0"
                >
                  <th
                    scope="row"
                    className="px-[clamp(1rem,1.6vw,1.5rem)] py-[clamp(1rem,1.5vw,1.35rem)] align-top text-[0.92rem] leading-[1.5] font-[650] text-ink"
                  >
                    {row.dimension}
                  </th>
                  <td className="border-hairline border-l px-[clamp(1rem,1.6vw,1.5rem)] py-[clamp(1rem,1.5vw,1.35rem)] align-top text-[0.92rem] leading-[1.55] text-ink-muted">
                    {row.conventional}
                  </td>
                  <td className="border-l border-brand-orange/50 bg-[#fffaf4] px-[clamp(1rem,1.6vw,1.5rem)] py-[clamp(1rem,1.5vw,1.35rem)] align-top text-[0.92rem] leading-[1.55] text-ink">
                    {row.endpoint}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-[0.85rem] leading-[1.5] text-[#647184]">
          Not every workload belongs on a thin endpoint. Engineering
          workstations, heavy local GPU work and offline field devices are still
          better served by a PC — and we will say so.
        </p>
      </div>
    </section>
  );
}
