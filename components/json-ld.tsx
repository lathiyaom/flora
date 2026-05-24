export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: "flora_.bouquets_",
    description: "Luxury handmade eternal flower bouquets crafted from pipe cleaners.",
    url: "https://www.instagram.com/flora_.bouquets_/",
    sameAs: ["https://www.instagram.com/flora_.bouquets_/"]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
