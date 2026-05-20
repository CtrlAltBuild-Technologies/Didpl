import { Metadata } from "next";

export const seoMeta = {
  home: {
    title: "DIDPL - Dholera Infra Development | Plots Near Airport in Dholera SIR",
    description:
      "Invest in Dholera Smart City plots near airport. Premium Dholera SIR investment opportunities with 10x appreciation potential. Book your free site visit today.",
    keywords: "Dholera plots near airport, Dholera SIR investment, smart city investment, real estate Dholera, DIDPL",
  },
  aeroTown: {
    title: "AERO Town Residency | Premium Plots Near Dholera Airport | DIDPL",
    description:
      "AERO Town Residency - Premium residential plots in Dholera SIR near airport. Airport zone investment with high appreciation. DIDPL - Book now.",
    keywords:
      "Aero Town, Dholera airport plots, residential near airport, AERO Town Residency, airport zone investment, DIDPL",
  },
  dholeraHomes3: {
    title: "Dholera Homes 3 | Residential Plots Near Metro | DIDPL Investment",
    description:
      "Dholera Homes 3 - Premium residential plots next to metro station. Dholera SIR investment with wide roads and smart amenities by DIDPL. Book now.",
    keywords:
      "Dholera Homes 3, plots near metro, residential Dholera, smart amenities, metro access, DIDPL",
  },
  indusPark: {
    title: "Dholera IndusPark | Industrial Plots in Dholera SIR | DIDPL",
    description:
      "Dholera IndusPark - Prime industrial plots in Dholera SIR. Ready possession, premium location by DIDPL. Book your plot today.",
    keywords:
      "IndusPark, industrial plots Dholera, industrial zone, Dholera business investment, DIDPL",
  },
  logisticPark: {
    title: "Logistic Park | Logistics Hub Investment in Dholera SIR | DIDPL",
    description:
      "Logistic Park - Prime logistics hub investment in Dholera Smart City by DIDPL. High investment potential with excellent connectivity.",
    keywords: "Logistics Park, Dholera logistics hub, supply chain investment, Dholera SIR, DIDPL",
  },
  dholeraSIR: {
    title: "Dholera Special Investment Region | Smart City India | DIDPL",
    description:
      "Dholera SIR - India's largest smart city near Vadodara and Ahmedabad. Explore investment opportunities with DIDPL - your trusted real estate partner.",
    keywords:
      "Dholera SIR, special investment region, Vadodara, Ahmedabad, smart city, India, DIDPL",
  },
  aboutUs: {
    title: "About DIDPL | Dholera Real Estate Investment Experts",
    description:
      "DIDPL - Over 15 years of expertise in Dholera real estate investment. 3000+ happy customers. 100% legal transparency in all projects.",
    keywords:
      "DIDPL, Dholera developers, real estate company, investment expertise, legal transparency",
  },
  contact: {
    title: "Contact DIDPL | Book Your Free Dholera Site Visit",
    description:
      "Contact DIDPL for Dholera real estate investment. Call +91-8866-909600 or book your free site visit to Dholera Smart City.",
    keywords: "contact, Dholera plots, site visit, inquiry, investment consultation, DIDPL",
  },
};

export function generateSeoMetadata(page: keyof typeof seoMeta): Metadata {
  const meta = seoMeta[page];
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      url: `https://didpl.com${
        page === "home" ? "" : `/${page.replace(/([A-Z])/g, "-$1").toLowerCase()}`
      }`,
    },
  };
}

export function generateProjectSchema(projectName: string, description: string, imageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateProject",
    name: projectName,
    description: description,
    image: imageUrl,
    url: `https://didpl.com/projects/${projectName.toLowerCase().replace(/\s+/g, "-")}`,
    location: {
      "@type": "Place",
      name: "Dholera SIR, Gujarat",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dholera",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
    },
    developer: {
      "@type": "Organization",
      name: "DIDPL - Dholera Infra Development",
    },
  };
}

export function generateLocalBusinessSchema(
  businessName: string = "DIDPL - Dholera Infra Development"
) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessName,
    description: "Real estate investment company specializing in Dholera Smart City plots",
    url: "https://didpl.com",
    telephone: "+91-8866-909600",
    areaServed: [
      {
        "@type": "City",
        name: "Dholera",
      },
      {
        "@type": "City",
        name: "Vadodara",
      },
      {
        "@type": "City",
        name: "Ahmedabad",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dholera, Gujarat",
      addressLocality: "Dholera",
      addressRegion: "Gujarat",
      postalCode: "387320",
      addressCountry: "IN",
    },
  };
}
