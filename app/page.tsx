import dynamic from "next/dynamic";
import { JsonLd } from "@/components/json-ld";
import { SiteChrome } from "@/components/site-chrome";
import { About } from "@/components/sections/about";
import { AtelierMarquee } from "@/components/sections/atelier-marquee";
import { Contact } from "@/components/sections/contact";
import { CorporateEnquiry } from "@/components/sections/corporate-enquiry";
import { CreationProcess } from "@/components/sections/creation-process";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { InstagramFeed } from "@/components/sections/instagram-feed";
import { Commissions } from "@/components/sections/commissions";
import { SignatureCollections } from "@/components/sections/signature-collections";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyEternalPetal } from "@/components/sections/why-eternalpetal";
import { GallerySkeleton } from "@/components/ui/gallery-skeleton";

const Gallery = dynamic(() => import("@/components/sections/gallery").then((m) => m.Gallery), {
  loading: () => <GallerySkeleton />
});

export default function Home() {
  return (
    <SiteChrome>
      <JsonLd />
      <Hero />
      <AtelierMarquee />
      <About />
      <SignatureCollections />
      <Gallery />
      <WhyEternalPetal />
      <Testimonials />
      <CreationProcess />
      <Commissions />
      <CtaBanner />
      <InstagramFeed />
      <FAQ />
      <CorporateEnquiry />
      <Contact />
      <Footer />
    </SiteChrome>
  );
}
