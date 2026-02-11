"use client";

import { Container } from "@/components/ui/Container";
import { MoveRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Visionary() {
    return (
        <section className="py-24 overflow-hidden bg-gray-50 relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#1a544e]/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#EBC078]/10 rounded-full blur-3xl pointer-events-none" />

            <Container>
                <div className="flex flex-col lg:flex-row gap-20 items-stretch">
                    {/* Left Content */}
                    <div className="flex-1 flex flex-col justify-center space-y-10 py-4">
                        <div className="relative pl-6 border-l-4 border-[#EBC078]">
                            <h4 className="text-[#1a544e] font-bold tracking-widest uppercase mb-2 text-xs">
                                Why DIDPL?
                            </h4>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1a544e] leading-[1.1]">
                                Dholera SIR with DIDPL Visionary Real Estate.
                            </h2>
                        </div>

                        <div className="bg-[#1a544e] p-8 rounded-2xl shadow-sm border border-[#1a544e] relative overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#EBC078]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-700 ease-out" />
                            <ul className="space-y-5 relative z-10">
                                {[
                                    "Premium land parcels From “DIDPL”",
                                    "Exclusive opportunity to invest in India's first smart city project",
                                    "Maximize returns through strategic long-term value creation",
                                    "Unmatched expertise to guide your investment journey"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-[#EBC078] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1a544e]" strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-100 font-medium text-lg leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>
                                As one of the most trusted names in real estate, <strong className="text-[#1a544e]">DIDPL</strong> is spearheading the development
                                of Dholera Smart City – a visionary new urban center positioned to redefine modern
                                living in Gujarat.
                            </p>

                            <div className="pt-2">
                                <Link
                                    href="/about"
                                    className="group inline-flex items-center gap-3 text-[#1a544e] font-bold text-lg hover:text-[#EBC078] transition-colors"
                                >
                                    <span className="border-b-2 border-[#EBC078] pb-1">Read More About Us</span>
                                    <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Images - Overlapping Collage Layout */}
                    <div className="flex-1 relative min-h-[500px] lg:h-auto">
                        <div className="relative w-full h-full flex items-center justify-center lg:justify-end">
                            {/* Decorative Dot Pattern */}
                            <div className="absolute top-10 right-10 w-32 h-32 opacity-20"
                                style={{ backgroundImage: 'radial-gradient(#1a544e 2px, transparent 2px)', backgroundSize: '16px 16px' }}>
                            </div>

                            {/* Main Image (Back) */}
                            <div className="relative w-[85%] aspect-[4/5] lg:w-[75%] rounded-2xl overflow-hidden shadow-2xl z-10 ml-auto bg-gray-200">
                                <Image
                                    src="/visionary-city.png"
                                    alt="Visionary Smart City"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a544e]/40 to-transparent"></div>
                                <div className="absolute top-6 right-6 text-white max-w-[80%] text-right">
                                    <p className="font-serif text-2xl font-bold">Visionary Smart City</p>
                                    <p className="text-sm opacity-90">Future of Sustainable Living</p>
                                </div>

                            </div>

                            {/* Secondary Image (Front Overlap) */}
                            <div className="absolute bottom-10 left-0 lg:left-4 w-[55%] aspect-square rounded-2xl overflow-hidden shadow-2xl z-20 border-[6px] border-white bg-gray-200">
                                <Image
                                    src="/modern-green-home.png"
                                    alt="Modern Green Home"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>


                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
