import { AboutSection } from "@/components/landing/about-section";
import { HeroSection } from "@/components/landing/hero-section";
import { NewsSection } from "@/components/landing/news-section";
import { SupportSection } from "@/components/landing/support-section";
import { TrustedBy } from "@/components/landing/trusted-by";

export default function Home() {
  return (
    <main>
      {/* Hero + trusted-by own the first viewport: the hero absorbs the spare
          height so the logo band always sits on the fold, fully visible, with
          the about section starting just below it. */}
      <div className="flex min-h-svh flex-col">
        <HeroSection />
        <TrustedBy />
      </div>
      <AboutSection />
      <NewsSection />
      <SupportSection />
    </main>
  );
}
