import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dholera Special Investment Region | Smart City Near Vadodara & Ahmedabad | DIDPL",
  description:
    "Discover Dholera SIR - India's largest smart city near Vadodara and Ahmedabad. World-class infrastructure, industrial zones, and residential plots by DIDPL with 10x investment returns.",
  keywords:
    "Dholera SIR, smart city, Vadodara, Ahmedabad, investment, plots, industrial zone, residential, DIDPL",
  openGraph: {
    title: "Dholera Special Investment Region | Smart City Near Vadodara & Ahmedabad | DIDPL",
    description:
      "Dholera SIR - India's largest smart city with premium investment opportunities near Vadodara and Ahmedabad by DIDPL.",
    type: "website",
    url: "https://didpl.com/dholera-sir",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
