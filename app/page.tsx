import dynamic from "next/dynamic";
import { JsonLd } from "@/components/json-ld";
import { SiteChrome } from "@/components/site-chrome";
import { About } from "@/components/sections/about";
import { AtelierMarquee } from "@/components/sections/atelier-marquee";
import { Hero } from "@/components/sections/hero";
import { PetitCharms } from "@/components/sections/petit-charms";
import { SignatureCollections } from "@/components/sections/signature-collections";
import { WhyEternalPetal } from "@/components/sections/why-eternalpetal";
import { GallerySkeleton } from "@/components/ui/gallery-skeleton";

const Gallery = dynamic(() => import("@/components/sections/gallery").then((m) => m.Gallery), {
  loading: () => <GallerySkeleton />
});
const Testimonials = dynamic(() =>
  import("@/components/sections/testimonials").then((m) => m.Testimonials)
);
const CreationProcess = dynamic(() =>
  import("@/components/sections/creation-process").then((m) => m.CreationProcess)
);
const Commissions = dynamic(() =>
  import("@/components/sections/commissions").then((m) => m.Commissions)
);
const CtaBanner = dynamic(() => import("@/components/sections/cta-banner").then((m) => m.CtaBanner));
const InstagramFeed = dynamic(() =>
  import("@/components/sections/instagram-feed").then((m) => m.InstagramFeed)
);
const FAQ = dynamic(() => import("@/components/sections/faq").then((m) => m.FAQ));
const CorporateEnquiry = dynamic(() =>
  import("@/components/sections/corporate-enquiry").then((m) => m.CorporateEnquiry)
);
const Contact = dynamic(() => import("@/components/sections/contact").then((m) => m.Contact));
const Footer = dynamic(() => import("@/components/sections/footer").then((m) => m.Footer));

export default function Home() {
  return (
    <SiteChrome>
      <JsonLd />
      <Hero />
      <AtelierMarquee />
      <About />
      <SignatureCollections />
      <PetitCharms />
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
