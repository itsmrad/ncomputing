import Image from "next/image";
import Link from "next/link";

import { fontDisplay } from "@/lib/fonts";

/**
 * Hero — copy on the left, product visual on the right.
 *
 * Type scale runs hotter than the 1441px reference (60px headline) because the
 * hero owns a full viewport: 72/26 fills that height instead of floating in it.
 *
 * Layout contract: the parent in `page.tsx` is a `min-h-svh` flex column, so
 * this section takes the leftover height (`flex-1`) and the trusted-by band
 * lands exactly on the fold — the band is never clipped and the next section
 * never peeks above it. Because the height is viewport-derived, the visual is
 * also capped in `svh` so it cannot push the band off-screen on short laptops.
 *
 * Copy and visual are centred against each other (`items-center`); the visual
 * is the taller cell, so without it the text reads high and the image low. The
 * columns sit on a tight 24px gutter and the visual is centred (not flushed
 * right) so the pair reads as one composition rather than two edges.
 */
const ACTION_BASE =
  "inline-flex h-12 items-center justify-center px-7 text-[17px] font-medium transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-[#203138]/40 focus-visible:ring-offset-2";

export function HeroSection() {
  return (
    <section className={`${fontDisplay.className} flex flex-1 items-center bg-white`}>
      <div className="mx-auto w-full max-w-[1312px] px-4 pt-[100px] pb-12 sm:px-6 md:pt-[112px] md:pb-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-6">
          <div>
            <h1 className="text-[44px] leading-[1.08] font-medium text-[#203138] md:text-[56px] xl:text-[72px]">
              The <span className="text-brand-orange-ink">desktop</span> your
              workforce deserves
            </h1>

            <p className="mt-5 max-w-[34ch] text-[21px] leading-[1.4] text-[#203138] xl:text-[26px]">
              LEAF OS is secure desktop virtualization for endpoints that scale
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href="/leaf-os"
                className={`${ACTION_BASE} bg-brand-orange text-brand-warm-ink hover:bg-brand-orange-hover`}
              >
                Explore the product
              </Link>
              <Link
                href="/demo"
                className={`${ACTION_BASE} bg-[#203138] text-white hover:bg-[#2d444d]`}
              >
                See demo
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/hero-image.png"
              alt="Thin clients and repurposed PCs connected to a central virtualization server"
              width={1254}
              height={1254}
              priority
              sizes="(min-width: 1024px) 540px, (min-width: 640px) 420px, 340px"
              className="h-auto max-h-[40svh] w-full max-w-[340px] object-contain [mask-image:radial-gradient(circle_closest-side_at_center,black_92%,transparent_100%)] sm:max-w-[420px] lg:max-h-[56svh] lg:max-w-[540px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
