import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dholera IndusPark | Prime Industrial Plots in Dholera SIR | DIDPL",
  description:
    "Dholera IndusPark - Prime industrial plots in Dholera SIR with ready possession by DIDPL. Premium location for industrial investment. Book your plot today.",
  keywords:
    "Dholera IndusPark, industrial plots, industrial investment, Dholera SIR, manufacturing zone, logistics park, DIDPL",
  openGraph: {
    title: "Dholera IndusPark | Prime Industrial Plots in Dholera SIR | DIDPL",
    description:
      "Dholera IndusPark - Prime industrial plots with excellent infrastructure and ready possession.",
    type: "website",
    url: "https://didpl.com/projects/dholera-induspark",
    images: [
      {
        url: "/projects/induspark-ai.png",
        width: 1200,
        height: 630,
        alt: "Dholera IndusPark",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
