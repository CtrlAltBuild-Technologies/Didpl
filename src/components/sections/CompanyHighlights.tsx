"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
    {
        id: 1,
        text: "Properties at prime & Strategic locations",
        image: "/highlights/location-new.png",
    },
    {
        id: 2,
        text: "Delivering promises with transparency & authenticity",
        image: "/highlights/transparency-new.jpeg",
    },
    {
        id: 3,
        text: "Hassle-free & simple legal process",
        image: "/highlights/legal-new-v2.png",
    },
    {
        id: 4,
        text: "More than 15 years of experience",
        image: "/highlights/experience-new.png",
    },
    {
        id: 5,
        text: "3000+ Satisfied Customers and 10K+ Site visits",
        image: "/highlights/customers-new.jpeg",
    },
    {
        id: 6,
        text: "Resale Assistance",
        image: "/highlights/resale-new.png",
    },
];

export const CompanyHighlights = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center text-[#1a544e] mb-16 font-space-grotesk"
                >
                    Why Choose DIDPL ?
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8 }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-gray-100"
                        >
                            {/* Image Area */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.text}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {item.id === 2 && (
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                        <Image
                                            src="/Dholera_logo.svg"
                                            alt="DIDPL Logo"
                                            width={180}
                                            height={70}
                                            className="object-contain drop-shadow-lg"
                                        />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Content Area */}
                            <div className="p-8 text-center bg-white relative z-10">
                                <div className="w-12 h-1 bg-[#D4AF37] mx-auto mb-6 rounded-full transform origin-center transition-transform duration-300 group-hover:scale-x-150" />
                                <p className="text-xl font-bold text-[#1a544e] font-noto-sans leading-relaxed group-hover:text-[#133637] transition-colors duration-300">
                                    {item.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* <div className="mt-16 text-center">
                    <Link href="/about-us">
                        <Button
                            size="lg"
                            className="bg-[#1a544e] hover:bg-[#133637] text-white px-8 h-12 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                            About Us
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                    </Link>
                </div> */}
            </div>
        </section>
    );
};
