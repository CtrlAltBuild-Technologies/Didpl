import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dholera Homes 3 | Residential Plots Near Metro in Dholera SIR | DIDPL",
  description:
    "Dholera Homes 3 - Premium residential plots next to metro station in Dholera SIR by DIDPL. Wide roads, smart amenities, and excellent connectivity. Book your plot now.",
  keywords:
    "Dholera Homes 3, plots near metro, residential Dholera, smart city investment, metro access, wide roads, Dholera SIR, DIDPL",
  openGraph: {
    title: "Dholera Homes 3 | Residential Plots Near Metro in Dholera SIR | DIDPL",
    description:
      "Dholera Homes 3 - Premium residential plots next to metro station. Booking open now.",
    type: "website",
    url: "https://didpl.com/projects/dholera-homes-3",
    images: [
      {
        url: "/projects/dholera-homes-3.png",
        width: 1200,
        height: 630,
        alt: "Dholera Homes 3",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
