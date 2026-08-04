import { fontSupportHeading, fontSupportSans } from "@/lib/fonts";

const SUPPORT_PATHS = [
  {
    body: "Start with clear, product-specific answers for LEAF OS, vSpace Pro, VERDE VDI and supported thin clients. The Knowledge Base brings setup guides, release notes and troubleshooting steps into one searchable place.",
    title: "Knowledge Base",
    detail: "Guides · release notes · troubleshooting",
  },
  {
    body: "When a deployment issue needs closer attention, submit a support ticket with the details your team already has. Product versions, device logs and environment information give the support team useful context from the start.",
    title: "Technical Support",
    detail: "Ticket-based product assistance",
  },
  {
    body: "Keep the operational side of support in one place. Use the Management Portal to organize licenses, registered devices, maintenance coverage and the services attached to your NComputing deployment.",
    title: "Management Portal",
    detail: "Licenses · devices · services",
  },
];

export function SupportSection() {
  return (
    <section
      aria-labelledby="support-heading"
      className={`${fontSupportSans.className} bg-white px-[clamp(1rem,1.6vw,2rem)] py-[clamp(1.25rem,2vw,2.5rem)] text-[#17131f] max-sm:p-3`}
    >
      <div className="relative isolate mx-auto w-full max-w-[1980px] overflow-hidden rounded-[30px] bg-[#f8ddc1] bg-[radial-gradient(circle_at_12%_8%,rgb(255_224_188/96%),transparent_38%),radial-gradient(circle_at_87%_12%,rgb(242_154_74/76%),transparent_40%),radial-gradient(circle_at_52%_100%,rgb(255_235_209/88%),transparent_46%)] px-[clamp(1.5rem,10.8vw,13.5rem)] pt-[clamp(7rem,7vw,9rem)] pb-[clamp(4rem,6vw,7rem)] shadow-[0_24px_70px_rgb(111_59_24/12%)] before:pointer-events-none before:absolute before:inset-0 before:-z-[1] before:bg-[radial-gradient(circle,rgb(255_255_255/86%)_1.15px,transparent_1.3px)] before:bg-[length:7px_7px] before:content-[''] max-[899px]:px-[clamp(1.5rem,6vw,4rem)] max-[899px]:pt-24 max-[899px]:pb-16 max-sm:rounded-[20px] max-sm:px-4 max-sm:pt-[4.5rem] max-sm:pb-4">
        <div className="relative mx-auto max-w-[820px] text-center">
          <h2
            id="support-heading"
            className={`${fontSupportHeading.className} text-[clamp(3rem,4.2vw,4.5rem)] leading-[1.1] font-bold tracking-[-0.025em] text-balance text-[#2c180d] max-sm:text-[clamp(2.45rem,12vw,3.25rem)]`}
          >
            Support that knows your workspace
          </h2>
          <p className="mt-6 text-[clamp(1.1rem,1.8vw,1.5rem)] leading-[1.45] font-medium text-[#694630]">
            From the endpoint to the virtual desktop, find the right answer
            <br className="max-sm:hidden" /> for the NComputing environment you
            run.
          </p>
          <a
            href="https://support.ncomputing.com/portal/en/home"
            className="mt-11 inline-flex min-h-14 items-center justify-center rounded-[10px] bg-brand-orange px-[1.55rem] py-[0.9rem] text-[1.05rem] font-bold text-[#2c180d] shadow-[0_14px_30px_rgb(119_62_22/18%)] transition-[background-color,box-shadow,transform] duration-220 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-brand-orange-hover hover:shadow-[0_18px_34px_rgb(119_62_22/24%)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#4f2a17] motion-reduce:transition-none max-sm:mt-8"
          >
            Get support
          </a>
        </div>

        <ul className="relative mt-[clamp(4.5rem,6vw,6rem)] grid grid-cols-3 gap-4 max-[899px]:grid-cols-1 max-sm:mt-12">
          {SUPPORT_PATHS.map((path) => (
            <li
              key={path.title}
              className="flex min-h-[clamp(460px,34vw,620px)] flex-col justify-between gap-12 rounded-[10px] border border-[#e0b184] bg-[#fff8efcc] p-[clamp(1.75rem,2.8vw,3rem)] max-[899px]:min-h-80 max-sm:min-h-[290px] max-sm:p-6"
            >
              <p className="max-w-[38ch] text-[clamp(1.1rem,1.45vw,1.45rem)] leading-[1.52] font-medium text-[#2c180d] max-[899px]:max-w-[60ch] max-sm:text-[1.08rem]">
                {path.body}
              </p>
              <div>
                <p className="text-[0.85rem] font-bold text-[#694630]">
                  {path.title}
                </p>
                <p className="mt-[0.45rem] text-[0.85rem] leading-[1.4] text-[#79543e]">
                  {path.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
