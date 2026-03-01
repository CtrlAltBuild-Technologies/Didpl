"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { PlotAvailabilityViewer } from "@/components/projects/PlotAvailabilityViewer";
import { MOCK_PLOT_DATA } from "@/data/plot-data";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Train, ShieldCheck, Warehouse, ArrowRight, Download, Phone, Map } from "lucide-react";
import { PlotPriceCalculator } from "@/components/projects/PlotPriceCalculator";

export default function DholeraHomes3Page() {
    const [isPlotsModalOpen, setIsPlotsModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <HeroSection onOpenPlots={() => setIsPlotsModalOpen(true)} />
            <OverviewSection />
            <HighlightsSection />
            <LocationSection />
            <CTASection />
            <PlotPriceCalculator projectId="dholera-homes-3" />

            <Modal
                isOpen={isPlotsModalOpen}
                onClose={() => setIsPlotsModalOpen(false)}
                title="Check Plot Availability"
            >
                <div className="h-[80vh] w-full"> {/* Fixed height for scrolling */}
                    <PlotAvailabilityViewer
                        projectName={MOCK_PLOT_DATA["dholera-homes-3"].name}
                        layoutImage={MOCK_PLOT_DATA["dholera-homes-3"].layoutImage}
                        plots={MOCK_PLOT_DATA["dholera-homes-3"].plots}
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
                    src="/projects/dholera-homes-3-ai.png"
                    alt="Dholera Homes 3"
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
                            Residential Zone
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                        Dholera Homes 3
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 font-light mb-10 max-w-2xl">
                        Premium Residential Plots in <span className="text-[#D4AF37] font-medium">TP-2 West-B</span>, adjacent to the High Access Corridor.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="/dholera_homes_brochure.pdf" download="Dholera_Homes_Brochure.pdf" target="_blank" rel="noopener noreferrer">
                            <Button className="bg-[#D4AF37] text-[#1a544e] px-8 py-4 rounded-full text-lg font-bold hover:bg-white transition-all duration-300 flex items-center gap-2">
                                <Download size={20} /> Download Brochure
                            </Button>
                        </a>
                        <a href="#proposal-printable-dholera-homes-3" className="block">
                            <Button
                                className="bg-white text-[#1a544e] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#D4AF37] hover:text-[#1a544e] transition-all duration-300 flex items-center gap-2"
                            >
                                <Map size={20} /> Check Availability
                            </Button>
                        </a>
                        <Link href="/contact">
                            <Button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-[#1a544e] transition-all duration-300">
                                Book Site Visit
                            </Button>
                        </Link>
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
                            The Smart Choice for <br /> <span className="italic text-[#D4AF37]">Smart Living</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
                            Dholera Homes 3 offers a strategic opportunity to invest in one of the most promising residential zones of Dholera SIR. Located in TP-2 West-B, this project is perfectly positioned for rapid appreciation and high rental yields.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                            With direct connectivity to the High Access Corridor and proximity to the proposed Metro route, Dholera Homes 3 combines convenience with the promise of a premium lifestyle.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-3xl font-serif font-bold text-[#1a544e]">0 km</h3>
                                <p className="text-gray-500 text-sm uppercase tracking-wider">From Metro</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-serif font-bold text-[#1a544e]">12m</h3>
                                <p className="text-gray-500 text-sm uppercase tracking-wider">Wide Roads</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 relative md:h-[500px] w-full h-[400px]">
                        <div className="absolute inset-0 bg-[#1a544e] rotate-3 rounded-[3rem] opacity-10" />
                        <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/projects/dholera-homes-2.png" // Placeholder
                                alt="Dholera Homes 3 Overview"
                                fill
                                className="object-cover"
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
        { icon: Train, title: "Next to Metro", desc: "Located on the proposed Metro route for unbeatable connectivity." },
        { icon: Warehouse, title: "High Access Corridor", desc: "Direct access to 25m wide High Access Corridor roads." },
        { icon: MapPin, title: "Prime Location", desc: "Situated in the highly coveted Residential Zone of TP-2 West-B." },
        { icon: ShieldCheck, title: "Secure Community", desc: "Gated community features with 24/7 security provision." },
    ];

    return (
        <section className="py-24 bg-[#FAFAFA]">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a544e] mb-4">Project Highlights</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">Designed for comfort, connectivity, and significant capital appreciation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {highlights.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
                            <div className="w-14 h-14 bg-[#1a544e]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1a544e] transition-colors duration-300">
                                <item.icon className="w-7 h-7 text-[#1a544e] group-hover:text-white transition-colors duration-300" />
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
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <Container className="relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2">
                        <div className="aspect-square relative rounded-[2rem] overflow-hidden border-4 border-[#D4AF37]/30 shadow-2xl">
                            {/* Map Placeholder */}
                            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                                <p className="text-gray-400">Map Integration / Location Image</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h4 className="text-[#D4AF37] font-bold tracking-widest uppercase mb-4 text-sm">Location</h4>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                            Connected to <br /> <span className="text-[#D4AF37]">Everything</span>
                        </h2>

                        <ul className="space-y-6">
                            {[
                                "0 km from Metro (Proposed)",
                                "2 km from Dholera City Center",
                                "Near Knowledge & IT Zone",
                                "Direct Connectivity to Expressway",
                                "Walking distance to Public Facilities"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-lg font-light text-gray-200">
                                    <span className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
                                        <ArrowRight size={14} className="text-[#D4AF37]" />
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
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Start Your Investment Journey</h2>
                        <p className="text-xl text-gray-200 mb-10 font-light">
                            Secure your plot in Dholera Homes 3 today and watch your investment grow with India's first smart city.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center gap-6">
                            <Button className="bg-[#D4AF37] text-[#1a544e] px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-[#1a544e] transition-all duration-300">
                                Book a Free Site Visit
                            </Button>
                            <Button className="bg-transparent border border-white/30 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-[#1a544e] transition-all duration-300 flex items-center justify-center gap-3">
                                <Phone size={20} /> Call Now: +91 8866 909 600
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
