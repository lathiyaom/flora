import { JsonLd } from "@/components/json-ld";
import { SiteChrome } from "@/components/site-chrome";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { CorporateEnquiry } from "@/components/sections/corporate-enquiry";
import { CreationProcess } from "@/components/sections/creation-process";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { InstagramFeed } from "@/components/sections/instagram-feed";
import { Pricing } from "@/components/sections/pricing";
import { SignatureCollections } from "@/components/sections/signature-collections";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyEternalPetal } from "@/components/sections/why-eternalpetal";

export default function Home() {
  return (
    <SiteChrome>
      <JsonLd />
      <Hero />
      <About />
      <SignatureCollections />
      <Gallery />
      <WhyEternalPetal />
      <Testimonials />
      <CreationProcess />
      <Pricing />
      <InstagramFeed />
      <FAQ />
      <CorporateEnquiry />
      <Contact />
      <Footer />
    </SiteChrome>
  );
}
