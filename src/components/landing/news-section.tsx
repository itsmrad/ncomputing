import { ChevronRight } from "lucide-react";

import { fontDisplay } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const STORIES = [
  {
    title:
      "Predictable Virtualization Economics: Why Simplicity Matters More Than Ever",
    description:
      "A clearer path to Azure Virtual Desktop and Windows 365 starts with predictable costs, renewals and outcomes.",
    date: "21 July 2026",
    category: "Virtualization",
    href: "https://www.ncomputing.com/blog-post/predictable-virtualization-economics-why-simplicity-matters-more-ever",
    image:
      "https://d1s3ya6q0uirpx.cloudfront.net/sites/default/files/styles/article_list_full_width/public/blog/blogheader.png?itok=WSjk0IF8",
    featured: true,
  },
  {
    title: "Modernize Your Endpoints Without Replacing Your PCs",
    date: "8 June 2026",
    category: "Endpoint strategy",
    href: "https://www.ncomputing.com/blog-post/modernize-your-endpoints-without-replacing-your-pcs",
    image:
      "https://www.ncomputing.com/sites/default/files/styles/article_list_full_width/public/blog/3keys.jpeg?itok=M3rRPCqT",
    featured: false,
  },
  {
    title: "NComputing is Proud to be a Platinum Sponsor at NerdioCon 2026",
    date: "12 February 2026",
    category: "Events",
    href: "https://www.ncomputing.com/blog-post/ncomputing-proud-be-platinum-sponsor-nerdiocon-2026",
    image:
      "https://d1s3ya6q0uirpx.cloudfront.net/sites/default/files/styles/article_list_full_width/public/blog/NerdioCon2026.png?itok=iFQV_w5d",
    featured: false,
  },
  {
    title:
      "Tackling AI-Driven Memory Shortages: How LEAF OS Helps You Do More with Less",
    date: "4 February 2026",
    category: "LEAF OS",
    href: "https://www.ncomputing.com/blog-post/tackling-ai-driven-memory-shortages-how-leaf-os-helps-you-do-more-less",
    image:
      "https://d1s3ya6q0uirpx.cloudfront.net/sites/default/files/styles/article_list_full_width/public/blog/Memory.png?itok=PnIot7zI",
    featured: false,
  },
  {
    title:
      "LEAF OS on Raspberry Pi 500+: A Compact, Secure Enterprise Endpoint",
    date: "25 September 2025",
    category: "Product news",
    href: "https://www.ncomputing.com/blog-post/leaf-os-now-available-raspberry-pi-500-compact-and-secure-endpoint-enterprise",
    image:
      "https://d1s3ya6q0uirpx.cloudfront.net/sites/default/files/styles/article_list_full_width/public/blog/500%2Bblog.png?itok=eyYFI0ht",
    featured: false,
  },
] as const;

export function NewsSection() {
  return (
    <section
      aria-labelledby="news-heading"
      className={`${fontDisplay.className} bg-white px-[clamp(1.25rem,4vw,4.5rem)] py-[clamp(6rem,9vw,10rem)] text-[#203138] max-sm:px-3 max-sm:pt-[5.25rem] max-sm:pb-24`}
    >
      <div className="mx-auto w-full max-w-[1312px]">
        <div className="max-w-[960px] max-sm:px-2">
          <h2
            id="news-heading"
            className="max-w-[14ch] text-[clamp(3rem,5.8vw,5.5rem)] leading-[0.98] font-medium tracking-[-0.035em] text-balance max-sm:max-w-[12ch] max-sm:text-[clamp(2.7rem,14vw,4rem)]"
          >
            Our latest news and stories
          </h2>
          <span
            className="mt-[clamp(2rem,3.2vw,3.25rem)] block h-[5px] w-[58px] bg-brand-orange max-sm:h-1 max-sm:w-[46px]"
            aria-hidden="true"
          />
        </div>

        <div className="mt-[clamp(4rem,6vw,6rem)] grid grid-cols-1 gap-[clamp(0.9rem,1.6vw,1.5rem)] max-sm:mt-14 max-sm:gap-3 sm:grid-cols-2 sm:grid-rows-[480px_420px_420px] min-[960px]:grid-cols-3 min-[960px]:grid-rows-[minmax(510px,43vw)_minmax(360px,29vw)] min-[1313px]:grid-rows-[564px_380px]">
          {STORIES.map((story) => (
            <article
              className={cn(
                "relative min-h-[430px] min-w-0 overflow-hidden bg-[#2c180d] sm:min-h-0",
                story.featured && "min-h-[520px] sm:col-span-2 sm:min-h-0",
              )}
              key={story.title}
            >
              <a
                aria-label={`Read: ${story.title}`}
                className="group absolute inset-0 block text-white outline-none focus-visible:outline-3 focus-visible:-outline-offset-[6px] focus-visible:outline-white"
                href={story.href}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-[-4px] scale-[1.001] bg-[#6d3e22] bg-cover bg-center bg-no-repeat blur-[2px] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-[1.055] group-focus-visible:scale-[1.055] motion-reduce:transition-none"
                  style={{ backgroundImage: `url("${story.image}")` }}
                />
                <span
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgb(20_11_7/10%)_8%,rgb(20_11_7/16%)_38%),linear-gradient(0deg,rgb(20_11_7/94%)_0%,rgb(20_11_7/63%)_45%,transparent_75%)] transition-opacity duration-360 ease-out group-hover:opacity-[0.88] group-focus-visible:opacity-[0.88] motion-reduce:transition-none"
                  aria-hidden="true"
                />

                <span className="absolute inset-x-[clamp(1.4rem,2.4vw,2.5rem)] bottom-[clamp(1.3rem,2.4vw,2.35rem)] flex translate-y-0 flex-col items-start transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[0.4rem] group-focus-visible:-translate-y-[0.4rem] motion-reduce:transition-none max-sm:inset-x-[1.35rem] max-sm:bottom-[1.35rem]">
                  <span className="mb-4 flex flex-wrap gap-2">
                    <span className="inline-flex min-h-7 items-center rounded-full border border-white/72 bg-[#1b0f093d] px-[0.7rem] py-1 text-[0.74rem] leading-none font-[650] tracking-[0.01em]">
                      Blog post
                    </span>
                    <span className="inline-flex min-h-7 items-center rounded-full border border-white/72 bg-[#1b0f093d] px-[0.7rem] py-1 text-[0.74rem] leading-none font-[650] tracking-[0.01em]">
                      {story.category}
                    </span>
                  </span>

                  <span
                    className={cn(
                      "max-w-[22ch] text-[clamp(1.8rem,8.8vw,2.55rem)] leading-[1.08] font-semibold tracking-[-0.025em] text-balance sm:text-[clamp(1.55rem,2.25vw,2.45rem)]",
                      story.featured &&
                        "max-w-[19ch] sm:text-[clamp(2rem,3.4vw,3.75rem)]",
                    )}
                  >
                    {story.title}
                  </span>

                  {story.featured ? (
                    <span className="mt-[1.15rem] max-w-[64ch] text-[0.98rem] leading-normal font-[450] text-[#fff4ebe6] sm:text-[clamp(0.98rem,1.2vw,1.2rem)]">
                      {story.description}
                    </span>
                  ) : null}

                  <span className="mt-[1.4rem] flex w-full items-center justify-between gap-4 text-[0.8rem] font-semibold">
                    <span>{story.date}</span>
                    <ChevronRight
                      aria-hidden="true"
                      size={28}
                      strokeWidth={1.8}
                      className="shrink-0 transition-transform duration-320 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[0.4rem] group-focus-visible:translate-x-[0.4rem] motion-reduce:transition-none"
                    />
                  </span>
                </span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-[clamp(3.5rem,5vw,5rem)] flex justify-center">
          <a
            className="group inline-flex min-h-[58px] items-center justify-center gap-3 bg-brand-orange px-[1.55rem] py-[0.95rem] text-base font-bold text-[#2c180d] shadow-[0_14px_30px_rgb(119_62_22/16%)] transition-[background-color,box-shadow,transform] duration-220 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-brand-orange-hover hover:shadow-[0_18px_34px_rgb(119_62_22/22%)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#4f2a17] motion-reduce:transition-none"
            href="https://www.ncomputing.com/blog"
          >
            Explore all stories
            <ChevronRight
              aria-hidden="true"
              size={22}
              strokeWidth={2}
              className="transition-transform duration-220 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[3px] motion-reduce:transition-none"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
