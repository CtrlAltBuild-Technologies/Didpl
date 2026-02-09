import { Hero } from "@/components/sections/Hero";
import { Visionary } from "@/components/sections/Visionary";
import { WhyInvest } from "@/components/sections/WhyInvest";
import { Projects } from "@/components/sections/Projects";
import { CompanyHighlights } from "@/components/sections/CompanyHighlights";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Visionary />
      <WhyInvest />
      <CompanyHighlights />
      <Projects />
      <AboutPreview />
      <CallToAction />
    </main>
  );
}
