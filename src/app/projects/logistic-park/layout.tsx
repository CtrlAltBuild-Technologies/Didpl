import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logistic Park | High Returns Logistics Hub Investment in Dholera SIR | DIDPL",
  description:
    "Logistic Park - Prime logistics hub investment in Dholera Smart City by DIDPL. High investment potential with excellent connectivity. Upcoming project with massive returns.",
  keywords:
    "Logistic Park, logistics investment, logistics hub, warehouse investment, Dholera SIR, industrial logistics, DIDPL",
  openGraph: {
    title: "Logistic Park | High Returns Logistics Hub Investment in Dholera SIR | DIDPL",
    description:
      "Logistic Park - Premium logistics hub with excellent connectivity and high investment returns.",
    type: "website",
    url: "https://didpl.com/projects/logistic-park",
    images: [
      {
        url: "/projects/logistic-park-ai.png",
        width: 1200,
        height: 630,
        alt: "Logistic Park",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
