import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * The NComputing "Compute Smartly" lockup, shared by the navbar and the footer.
 *
 * Sized by height only — pass `h-*` through `className` and the intrinsic
 * 412.73 × 142.83 ratio keeps the width in step. `unoptimized` renders the SVG
 * straight from `/public` instead of routing it through the image optimizer,
 * which rejects SVG unless `dangerouslyAllowSVG` is enabled.
 *
 * The image is decorative (`alt=""`): every call site wraps it in a link that
 * already carries an accessible name, so alt text would only duplicate it.
 */
export function BrandLogo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/NComputing-Compute-Smartly.svg"
      alt=""
      width={413}
      height={143}
      priority={priority}
      unoptimized
      className={cn("h-8 w-auto", className)}
    />
  );
}
