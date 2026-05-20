import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AERO Town Residency | Premium Plots Near Dholera Airport | DIDPL",
  description:
    "AERO Town Residency - Premium residential plots in Dholera SIR near airport. Airport zone investment with high appreciation potential. 10x returns expected.",
  keywords:
    "Aero Town, Dholera airport plots, residential near airport, AERO Town Residency, airport zone investment, Dholera plots near airport, DIDPL",
  openGraph: {
    title: "AERO Town Residency | Premium Plots Near Dholera Airport | DIDPL",
    description:
      "AERO Town Residency - Premium residential plots in Dholera SIR near airport. Book your free site visit today.",
    type: "website",
    url: "https://didpl.com/projects/aero-town",
    images: [
      {
        url: "/projects/aero-town.png",
        width: 1200,
        height: 630,
        alt: "AERO Town Residency",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
