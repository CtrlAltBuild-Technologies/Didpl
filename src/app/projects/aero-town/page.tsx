"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { PlotAvailabilityViewer } from "@/components/projects/PlotAvailabilityViewer";
import { MOCK_PLOT_DATA } from "@/data/plot-data";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plane, TrendingUp, Truck, ShieldCheck, ArrowRight, Download, Phone, Map } from "lucide-react";
import { PlotPriceCalculator } from "@/components/projects/PlotPriceCalculator";
import { generateProjectSchema } from "@/lib/seo-meta";

function AeroTownPageContent() {
    const [isPlotsModalOpen, setIsPlotsModalOpen] = useState(false);
    
    const projectSchema = generateProjectSchema(
      "AERO Town Residency",
      "Premium residential plots in Dholera SIR near airport with high appreciation potential",
      "/projects/aero-town.png"
    );

    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
            />
            <HeroSection onOpenPlots={() => setIsPlotsModalOpen(true)} />
            <OverviewSection />
            <HighlightsSection />
            <LocationSection />
            <CTASection />
            <PlotPriceCalculator projectId="aero-town" />

            <Modal
                isOpen={isPlotsModalOpen}
                onClose={() => setIsPlotsModalOpen(false)}
                title="Check Plot Availability"
            >
                <div className="h-[80vh] w-full"> {/* Fixed height for scrolling */}
                    <PlotAvailabilityViewer
                        projectName={MOCK_PLOT_DATA["aero-town"].name}
                        layoutImage={MOCK_PLOT_DATA["aero-town"].layoutImage}
                        plots={MOCK_PLOT_DATA["aero-town"].plots}
                    />
                </div>
            </Modal>
        </main>
    );
}

function HeroSection({ onOpenPlots }: { onOpenPlots: () => void }) {
    return (
        <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
                <Image
                    src="/projects/aero-town-ai.png"
                    alt="AERO Town Residency"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            <Container className="relative z-20 text-white w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="h-[2px] w-20 bg-[#D4AF37]" />
                        <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm">
                            Airport Zone
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                        AERO Town Residency
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 font-light mb-10 max-w-2xl">
                        High Appreciation Plots in the <span className="text-[#D4AF37] font-medium">Logistic & Cargo Zone</span>, near Dholera International Airport.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="/Aero_town_brochure.pdf" download="Aero_Town_Residency_Brochure.pdf" target="_blank" rel="noopener noreferrer">
                            <Button className="bg-[#D4AF37] text-[#1a544e] px-8 py-4 rounded-full text-lg font-bold hover:bg-white transition-all duration-300 flex items-center gap-2">
                                <Download size={20} /> Download Brochure
                            </Button>
                        </a>
                        <a href="#proposal-printable-aero-town" className="block">
                            <Button
                                className="bg-white text-[#1a544e] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#D4AF37] hover:text-[#1a544e] transition-all duration-300 flex items-center gap-2"
                            >
                                <Map size={20} /> Check Availability
                            </Button>
                        </a>
                        <a href="https://wa.me/918866909600?text=Hi%2C%20I%20am%20interested%20in%20AERO%20Town%20Residency.%20I%20would%20like%20to%20book%20a%20free%20site%20visit.%20Please%20share%20the%20details." target="_blank" rel="noopener noreferrer">
                            <Button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-[#1a544e] transition-all duration-300">
                                Book Site Visit
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}

function OverviewSection() {
    return (
        <section className="py-24 bg-white">
            <Container>
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2">
                        <h4 className="text-[#D4AF37] font-bold tracking-widest uppercase mb-4 text-sm">Overview</h4>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a544e] mb-6 leading-tight">
                            Your Gateway to <br /> <span className="italic text-[#D4AF37]">Global Connectivity</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
                            AERO Town Residency is strategically situated to capitalize on the immense growth potential of Dholera's International Airport. Located in the Logistic and Cargo Zone, this project is ideal for those looking for rapid appreciation driven by commercial and industrial development.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                            This is not just a residential plot; it's an investment in the future logistics hub of India.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-3xl font-serif font-bold text-[#1a544e]">5 Min</h3>
                                <p className="text-gray-500 text-sm uppercase tracking-wider">From Airport</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-serif font-bold text-[#1a544e]">High</h3>
                                <p className="text-gray-500 text-sm uppercase tracking-wider">ROI Potential</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 relative md:h-[500px] w-full h-[400px]">
                        <div className="absolute inset-0 bg-[#D4AF37] -rotate-2 rounded-[3rem] opacity-20" />
                        <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-xl border-4 border-white bg-white flex items-center justify-center">
                            <Image
                                src="/photos/Aero-town-logoe (1).png"
                                alt="Aero Town Residency Logo"
                                fill
                                className="object-contain p-8"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function HighlightsSection() {
    const highlights = [
        { icon: Plane, title: "Airport Zone", desc: "Located within minutes of the Dholera International Airport." },
        { icon: TrendingUp, title: "High Appreciation", desc: "Direct benefit from the booming aviation and logistics sector." },
        { icon: Truck, title: "Cargo Connectivity", desc: "Adjacent to wide roads planned for heavy cargo movement." },
        { icon: ShieldCheck, title: "Gated Security", desc: "Peace of mind with full perimeter fencing and security." },
    ];

    return (
        <section className="py-24 bg-[#FAFAFA]">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a544e] mb-4">Why Invest Here?</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">A strategic asset in India's next major aviation hub.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {highlights.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
                            <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors duration-300">
                                <item.icon className="w-7 h-7 text-[#D4AF37] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-[#1a544e] mb-3">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

function LocationSection() {
    return (
        <section className="py-24 bg-[#1a544e] text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <Container className="relative z-10">
                <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
                    <div className="md:w-1/2">
                        <div className="aspect-square relative rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-2xl">
                            <Image
                                src="/projects/aerotown-location.png"
                                alt="AERO Town Location Map"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h4 className="text-[#D4AF37] font-bold tracking-widest uppercase mb-4 text-sm">Location</h4>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                            Strategic <br /> <span className="text-[#D4AF37]">Advantage</span>
                        </h2>

                        <ul className="space-y-6">
                            {[
                                "5 Mins from International Airport",
                                "Direct Access to Expressway",
                                "Near Activation Area",
                                "Adjoining 250m Wide Expressway",
                                "In the heart of Logistic Zone"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-lg font-light text-gray-200">
                                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <ArrowRight size={14} className="text-white" />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function CTASection() {
    return (
        <section className="py-24 bg-white text-center">
            <Container>
                <div className="bg-[#1a544e] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Invest in the Future of Aviation</h2>
                        <p className="text-xl text-gray-200 mb-10 font-light">
                            Don't miss this opportunity to own land near one of India's most significant infrastructure projects.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center gap-6">
                            <a href="https://wa.me/918866909600?text=Hi%2C%20I%20am%20interested%20in%20AERO%20Town%20Residency.%20I%20would%20like%20to%20book%20a%20free%20site%20visit.%20Please%20share%20the%20details." target="_blank" rel="noopener noreferrer">
                                <Button className="bg-[#D4AF37] text-[#1a544e] px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-[#1a544e] transition-all duration-300">
                                    Book a Free Site Visit
                                </Button>
                            </a>
                            <a href="tel:+918866909600">
                                <Button className="bg-transparent border border-white/30 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-[#1a544e] transition-all duration-300 flex items-center justify-center gap-3">
                                    <Phone size={20} /> Call Now: +91 8866 909 600
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default function AeroTownPage() {
  return <AeroTownPageContent />;
}
