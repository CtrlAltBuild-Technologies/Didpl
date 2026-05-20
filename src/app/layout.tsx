import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyContact } from "@/components/layout/StickyContact";
import { ComingSoonPopup } from "@/components/ui/ComingSoonPopup";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DIDPL - Dholera Infra Development | Plots Near Airport in Dholera SIR",
  description: "Invest in Dholera Smart City plots near airport. Premium Dholera SIR investment opportunities with 10x appreciation potential. Book your free site visit today.",
  keywords: "Dholera plots near airport, Dholera SIR investment, smart city investment, real estate Dholera, DIDPL",
  icons: {
    icon: "/Dholera_logo.svg",
    apple: "/Dholera_logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DIDPL - Dholera Infra Development",
    alternateName: "Dholera Infra Development Pvt Ltd",
    url: "https://didpl.com",
    description: "Premium real estate investment in Dholera Smart City with plots near airport",
    logo: "https://didpl.com/Dholera_logo.svg",
    sameAs: [
      "https://www.facebook.com/didpl",
      "https://www.instagram.com/didpl",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      telephone: "+91-8866-909600",
      areaServed: ["IN"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dholera, Gujarat",
      addressRegion: "GJ",
      postalCode: "387320",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <StickyContact />
        <ComingSoonPopup />
      </body>
    </html>
  );
}
