"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
    Plane,
    Train,
    Zap,
    Wifi,
    Droplets,
    LayoutGrid,
    Sun,
    Ship,
    ArrowUpRight,
    Map,
    MapPin,
    Building2,
    Factory,
    Rocket,
    Home,
    Link as LinkIcon,
    CheckCircle2
} from "lucide-react";

export default function DholeraPage() {
    return (
        <main className="min-h-screen bg-white">
            <ParallaxHero />
            <FeatureShowcase />
            <DetailedOverview />
            <ConnectSection />
        </main>
    );
}

function ParallaxHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="h-[90vh] relative overflow-hidden flex items-center justify-center bg-[#050a09]">
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                {/* Placeholder for video or high-res hero image */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050a09]/50 to-[#050a09] z-10" />
                <Image
                    src="/hero.png" // Fallback
                    alt="Dholera Smart City"
                    fill
                    className="object-cover opacity-60"
                />
            </motion.div>

            <Container className="relative z-20 text-center text-white mix-blend-overlay">
                {/* This creates a cool text effect where the background bleeds through */}
                <h1 className="text-[12vw] font-serif font-black leading-none tracking-tighter opacity-90 select-none">
                    DHOLERA
                </h1>
            </Container>

            <Container className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    className="mt-32 md:mt-48 text-center pointer-events-auto"
                >
                    <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                        <span className="text-sm font-medium tracking-widest uppercase text-white/80">Vision 2030</span>
                    </div>
                    <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed mb-10">
                        India's first platinum rated greenfield smart city. <br /> A global manufacturing hub in the making.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button className="bg-[#D4AF37] text-[#1a544e] hover:bg-white rounded-full px-8 py-6 text-lg font-bold">
                            Explore Master Plan
                        </Button>
                    </div>
                </motion.div>
            </Container>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20" />
        </section>
    );
}


function FeatureShowcase() {
    const features = [
        { title: "Metro Rail", desc: "Express Link to Ahmedabad", icon: Train },
        { title: "Solar Power", desc: "5000 MW Renewable Park", icon: Sun },
        { title: "Smart Water", desc: "100% Recycling & Zero Waste", icon: Droplets },
        { title: "Plug & Play", desc: "Ready-to-use Industrial Plots", icon: LayoutGrid },
    ];

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-[#1a544e]">Future Ready Ecosystem</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((feature, idx) => (
                        <div key={idx} className="p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 text-center group border border-transparent hover:border-[#D4AF37]/20">
                            <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-[#1a544e] group-hover:bg-[#1a544e] group-hover:text-[#D4AF37] transition-colors duration-300">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-[#1a544e] mb-2">{feature.title}</h3>
                            <p className="text-gray-500 text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

function ConnectSection() {
    return (
        <section className="py-32 bg-[#1a544e] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center opacity-20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a544e] via-transparent to-transparent" />

            <Container className="relative z-10 text-center">
                <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">Be Part of History</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light">
                    The biggest opportunity in Indian real estate is unfolding now. Don't watch from the sidelines.
                </p>
                <Link href="/contact">
                    <Button className="bg-[#D4AF37] text-[#1a544e] px-12 py-6 text-xl rounded-full font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)]">
                        Inquire About Plots
                    </Button>
                </Link>
            </Container>
        </section>
    );
}

function DetailedOverview() {
    return (
        <section className="py-24 bg-white">
            <Container className="max-w-4xl mx-auto space-y-24">

                {/* Introduction */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a544e]/5 text-[#1a544e] font-bold text-sm uppercase tracking-widest mb-6">
                        <Sun size={16} /> Future Ready
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a544e] mb-8 leading-tight">
                        India’s Upcoming <br /><span className="text-[#D4AF37]">Smart City & Industrial Hub</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                        Dholera SIR (Special Investment Region) is one of India’s most ambitious greenfield smart city projects, planned under the Delhi to Mumbai Industrial Corridor (DMIC). Located in Gujarat, Dholera is designed as a next generation urban and industrial zone with world class infrastructure, high speed connectivity, and sustainable development.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed font-light">
                        With modern planning, large scale industrial opportunities, and smart city facilities, Dholera SIR is becoming a key destination for investors, businesses, and future residents.
                    </p>
                    <div className="mt-12 relative rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                        <Image
                            src="/images/dholera/smart-city-concept.png"
                            alt="Dholera Smart City Concept"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-6 left-6 z-20 text-white font-medium bg-black/30 backdrop-blur-md px-4 py-2 rounded-full text-sm">
                            Futuristic Smart City Infrastructure
                        </div>
                    </div>
                </div>

                {/* Location */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-serif font-bold text-[#1a544e] mb-6 flex items-center gap-3">
                            <MapPin className="text-[#D4AF37]" strokeWidth={2.5} /> Location Advantage
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
                            Dholera SIR is located in the Ahmedabad district of Gujarat and is strategically positioned between Ahmedabad and Bhavnagar. Its location provides excellent access to major ports, highways, and upcoming international infrastructure.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Close proximity to Ahmedabad",
                                "Access to major highways",
                                "Planned metro and expressway connectivity",
                                "Near ports for trade and logistics"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative rounded-[2rem] overflow-hidden aspect-square shadow-xl border-4 border-white">
                        <Image
                            src="/images/dholera/location-map.png"
                            alt="Dholera Location Map"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-xl p-4 text-center">
                            <p className="text-[#1a544e] font-bold text-sm">Strategic Location in Gujarat</p>
                        </div>
                    </div>
                </div>

                {/* Importance */}
                <div className="bg-[#f8f9fa] rounded-[3rem] p-10 md:p-14">
                    <h3 className="text-3xl font-serif font-bold text-[#1a544e] mb-8 text-center">Why Dholera SIR is Important?</h3>
                    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                        Dholera is not just a city project — it is a planned industrial ecosystem designed to support:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Manufacturing and industrial parks",
                            "Smart residential zones",
                            "Commercial and IT hubs",
                            "Logistics and warehousing",
                            "Renewable energy infrastructure"
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                                <Building2 size={24} className="text-[#1a544e]" />
                                <span className="text-[#1a544e] font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-500 mt-10 italic">
                        The project aims to create a balanced environment where industries and modern lifestyle facilities grow together.
                    </p>
                </div>

                {/* Smart Features */}
                <div>
                    <h3 className="text-3xl font-serif font-bold text-[#1a544e] mb-10 text-center flex items-center justify-center gap-3">
                        <Zap className="text-[#D4AF37]" fill="#D4AF37" /> Smart City Features
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white border border-gray-200 rounded-[2rem] p-8 hover:border-[#1a544e]/30 transition-colors group">
                            <div className="w-12 h-12 bg-[#1a544e]/10 rounded-xl flex items-center justify-center mb-6 text-[#1a544e] group-hover:bg-[#1a544e] group-hover:text-white transition-colors">
                                <LayoutGrid size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-[#1a544e] mb-4">Smart Infrastructure</h4>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li>• Underground utility systems</li>
                                <li>• Smart water management</li>
                                <li>• Planned drainage control</li>
                                <li>• Efficient waste management</li>
                            </ul>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-[2rem] p-8 hover:border-[#1a544e]/30 transition-colors group">
                            <div className="w-12 h-12 bg-[#1a544e]/10 rounded-xl flex items-center justify-center mb-6 text-[#1a544e] group-hover:bg-[#1a544e] group-hover:text-white transition-colors">
                                <Sun size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-[#1a544e] mb-4">Sustainable Development</h4>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li>• Solar energy integration</li>
                                <li>• Large green belts and parks</li>
                                <li>• Eco friendly zoning</li>
                                <li>• Renewable energy focus</li>
                            </ul>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-[2rem] p-8 hover:border-[#1a544e]/30 transition-colors group">
                            <div className="w-12 h-12 bg-[#1a544e]/10 rounded-xl flex items-center justify-center mb-6 text-[#1a544e] group-hover:bg-[#1a544e] group-hover:text-white transition-colors">
                                <Train size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-[#1a544e] mb-4">Transport Network</h4>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li>• Wide roads & smart traffic</li>
                                <li>• Metro rail connectivity</li>
                                <li>• Expressway development</li>
                                <li>• International Airport</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Industrial Opportunities */}
                <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
                    <div className="md:w-1/2 relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-xl">
                        <Image
                            src="/images/dholera/industrial-zone.png"
                            alt="Dholera Industrial Zone"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a544e]/80 to-transparent" />
                        <div className="absolute bottom-8 left-8 text-white">
                            <p className="font-bold text-2xl mb-2">Global Hub</p>
                            <p className="opacity-80 text-sm">Manufacturing & Logistics</p>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-3xl font-serif font-bold text-[#1a544e] mb-6">Industrial & Investment Opportunities</h3>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Dholera SIR is expected to become a major industrial and business hub, offering lucrative opportunities in:
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Manufacturing industries",
                                "IT and technology parks",
                                "Logistics and supply chain",
                                "Renewable energy and solar parks",
                                "Warehousing & export industries"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                                    <div className="w-8 h-8 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-[#1a544e] font-bold shrink-0">
                                        <Factory size={16} />
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-500 text-sm">
                            The government is promoting Dholera SIR as a global investment destination with dedicated industrial zones and modern infrastructure.
                        </p>
                    </div>
                </div>

                {/* Upcoming Developments */}
                <div>
                    <h3 className="text-3xl font-serif font-bold text-[#1a544e] mb-10 text-center flex items-center justify-center gap-3">
                        <Rocket className="text-[#D4AF37]" size={28} /> Upcoming Developments
                    </h3>
                    <div className="relative rounded-[2.5rem] overflow-hidden aspect-[21/9] mb-10 shadow-2xl">
                        <div className="absolute inset-0 bg-black/20 z-10" />
                        <Image
                            src="/images/dholera/expressway.png"
                            alt="Dholera Expressway"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-6 left-6 z-20 text-white bg-black/50 backdrop-blur px-6 py-3 rounded-full">
                            <span className="font-bold">Ahmedabad to Dholera Expressway</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "Dholera International Airport (Planned)",
                            "Ahmedabad to Dholera Expressway",
                            "DMIC Connectivity Projects",
                            "Industrial Clusters & Smart Townships"
                        ].map((item, i) => (
                            <span key={i} className="px-6 py-3 bg-white border border-gray-200 rounded-full text-[#1a544e] font-bold shadow-sm hover:border-[#D4AF37] transition-colors cursor-default">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Future of Living */}
                <div className="bg-[#1a544e] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                                <Home className="text-[#D4AF37]" size={28} /> Future of Living
                            </h3>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light">
                                Dholera SIR is also being planned as a livable smart city, designed for both industries and families, offering a modern lifestyle with employment opportunities nearby.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Modern residential zones",
                                    "Schools and hospitals",
                                    "Commercial markets and shopping",
                                    "Recreational zones and green parks"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-200">
                                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative rounded-[2rem] overflow-hidden aspect-square border-4 border-white/10 shadow-2xl">
                            <Image
                                src="/images/dholera/smart-living.png"
                                alt="Living in Dholera"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Useful Links & References */}
                <div className="border-t border-gray-100 pt-16">
                    <h3 className="text-2xl font-serif font-bold text-[#1a544e] mb-8 text-center flex items-center justify-center gap-2">
                        <LinkIcon className="text-[#D4AF37]" size={24} /> Key Resources & Official Links
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-gray-50 p-6 rounded-2xl">
                            <h4 className="font-bold text-[#1a544e] mb-4 flex items-center"><CheckCircle2 size={20} className="text-[#D4AF37] inline mr-2" /> Government Sources</h4>
                            <ul className="space-y-3 text-sm">
                                <li><a href="https://dholera.gujarat.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1a544e] hover:underline">Dholera SIR Official Website</a></li>
                                <li><a href="https://nicdc.in/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1a544e] hover:underline">NICDC (DMIC) Official Website</a></li>
                                <li><a href="https://udd.gujarat.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1a544e] hover:underline">Gujarat Govt Urban Dev</a></li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl">
                            <h4 className="font-bold text-[#1a544e] mb-4 flex items-center"><CheckCircle2 size={20} className="text-[#D4AF37] inline mr-2" /> Infrastructure</h4>
                            <ul className="space-y-3 text-sm">
                                <li><a href="https://nhai.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1a544e] hover:underline">NHAI Expressway Updates</a></li>
                                <li><a href="https://www.aai.aero/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1a544e] hover:underline">AAI Airport Project Status</a></li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl">
                            <h4 className="font-bold text-[#1a544e] mb-4 flex items-center"><CheckCircle2 size={20} className="text-[#D4AF37] inline mr-2" /> Investment</h4>
                            <ul className="space-y-3 text-sm">
                                <li><Link href="/contact" className="text-gray-600 hover:text-[#1a544e] hover:underline">Investment Opportunities</Link></li>
                                <li><Link href="/projects" className="text-gray-600 hover:text-[#1a544e] hover:underline">Industrial Plots & Townships</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* References Section */}
                    <div className="border-t border-gray-100 pt-8 mt-8">
                        <h4 className="text-lg font-serif font-bold text-[#1a544e] mb-4">References</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-xs text-gray-500">
                            <li>Government of Gujarat, <span className="italic">"Dholera Special Investment Region (SIR) Overview"</span>. Official regional development metrics and planning limits.</li>
                            <li>Delhi Mumbai Industrial Corridor Development Corporation (DMICDC), Node No. 1: <span className="italic">"Dholera Smart City"</span>. Development stages and infrastructural allocation.</li>
                            <li>National Highway Authority of India (NHAI), <span className="italic">"Ahmedabad to Dholera Expressway Project Status"</span>. Road connectivity framework.</li>
                            <li>Airports Authority of India (AAI), <span className="italic">"Dholera International Airport Hub Planning"</span>. Aviation layout and passenger/cargo capacity estimations.</li>
                        </ol>
                    </div>
                </div>

            </Container>
        </section>
    );
}
