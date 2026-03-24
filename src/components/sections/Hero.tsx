"use client";

import { motion, useMotionValue, useTransform, useInView, useSpring } from "framer-motion";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, Check, MapPin, Building2, Users, FileCheck, Smile } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen pt-28 pb-20 overflow-hidden flex flex-col justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/dholera_hero_gen.png"
                    alt="Dholera City View"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#d1e7dd] via-[#d1e7dd]/95 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 px-4 md:px-8 lg:px-12 xl:px-20 w-full max-w-7xl mx-auto flex flex-col h-full justify-center">
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >


                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight mb-8 mt-12">
                            Confidence <br />
                            in Every <br />
                            Investment
                        </h1>

                        <div className="space-y-4 mb-10">
                            {
                                [
                                    "A powerful opportunity to grow your investment up to 10x!",
                                    "Get plots at the lowest prices today",
                                    "Future demand and prices are expected to skyrocket!"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-[#1a544e]/10 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-[#1a544e]" />
                                        </div>
                                        <span className="text-[#1a544e] font-bold text-lg">{item}</span>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a href="tel:+918866909600">
                                <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-8 h-14 rounded-md font-bold shadow-lg shadow-primary/20">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Call Now
                                </Button>
                            </a>
                            <Link href="/contact">
                                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 h-14 rounded-md font-bold">
                                    <Mail className="w-5 h-5 mr-2" />
                                    Enquire Now
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Stats Cards */}
            <div className="relative z-20 mt-16 px-4 md:px-8 lg:px-12 xl:px-20 w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        [
                            { icon: Building2, value: "15+ Years", label: " of Experience of Directors" },
                            { icon: Smile, value: "3000+", label: "Happy Customers" },
                            { icon: MapPin, value: "Prime", label: "Locations" },
                            { icon: FileCheck, value: "100%", label: "Legal Transparency" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="bg-[#FFFFF0] p-6 rounded-xl shadow-sm border border-orange-50/50 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 cursor-pointer group hover:bg-[#1a544e]"
                            >
                                <div className="mb-4 text-[#1a544e] group-hover:text-white transition-colors duration-300">
                                    <stat.icon strokeWidth={1.5} size={40} />
                                </div>
                                <h4 className="text-2xl font-bold text-[#1a544e] mb-1 group-hover:text-white transition-colors duration-300">
                                    <StatCounter value={stat.value} />
                                </h4>
                                <p className="text-gray-600 font-medium group-hover:text-gray-200 transition-colors duration-300">{stat.label}</p>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

function StatCounter({ value }: { value: string }) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
    const rounded = useTransform(springValue, (latest: number) => Math.round(latest));

    // Improved regex to handle formats like "15+ Years", "3000+", "100%"
    // It captures "15" and "+ Years" separately.
    const match = value.match(/^(\d+)(.*)$/);
    const numericValue = match ? parseInt(match[1]) : 0;
    const suffix = match ? match[2] : value;
    const isNumeric = match !== null;


    React.useEffect(() => {
        if (isInView && isNumeric) {
            motionValue.set(numericValue);
        }
    }, [isInView, numericValue, motionValue, isNumeric]);

    if (!isNumeric) return <span>{value}</span>;

    return (
        <span ref={ref} className="flex items-center justify-center">
            <motion.span>{rounded}</motion.span>
            <span>{suffix}</span>
        </span>
    );
}
