import { absoluteUrl, brand } from "@/data/brand";
import { collections, faqs } from "@/data/site";

export function JsonLd() {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${absoluteUrl("/")}#organization`,
      name: brand.legalName,
      alternateName: brand.name,
      url: absoluteUrl("/"),
      logo: absoluteUrl(brand.ogImage),
      email: brand.email,
      sameAs: [brand.instagram],
      description: brand.description
    },
    {
      "@type": ["Florist", "LocalBusiness"],
      "@id": `${absoluteUrl("/")}#business`,
      name: brand.name,
      image: absoluteUrl(brand.ogImage),
      url: absoluteUrl("/"),
      telephone: brand.phoneDisplay,
      email: brand.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: brand.address.locality,
        addressCountry: brand.address.country
      },
      areaServed: "Worldwide",
      knowsAbout: ["Handmade bouquets", "Pipe cleaner floral art", "Wedding keepsakes", "Bespoke commissions"]
    },
    {
      "@type": "WebSite",
      "@id": `${absoluteUrl("/")}#website`,
      url: absoluteUrl("/"),
      name: brand.name,
      description: brand.description,
      publisher: { "@id": `${absoluteUrl("/")}#organization` },
      inLanguage: "en-US"
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/")
        }
      ]
    },
    ...collections.map((item, index) => ({
      "@type": "Product",
      "@id": `${absoluteUrl("/")}#product-${item.slug}`,
      name: item.name,
      description: item.tone,
      image: absoluteUrl(item.image),
      brand: { "@id": `${absoluteUrl("/")}#organization` },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/PreOrder",
        url: absoluteUrl("/#collections"),
        description: "Available by commission — contact the atelier"
      },
      position: index + 1
    })),
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer
        }
      }))
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": graph
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
