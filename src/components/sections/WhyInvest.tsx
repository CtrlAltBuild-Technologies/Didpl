"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Cpu, Waypoints, Award, Maximize, Landmark, Handshake, Medal, Globe } from "lucide-react";

const features = [
    {
        icon: Cpu,
        title: "India's first Semi-Con city",
        description: "The semiconductor plant will be built in the Dholera SIR."
    },
    {
        icon: Waypoints,
        title: "Excellent Connectivity",
        description: "Excellent Connectivity through rail, road, express highway, international airport, metro & port."
    },
    {
        icon: Award,
        title: "Rated by Forbes",
        description: "Rated by Forbes as one of its kind cities in India and one amongst Top 12 fastest growing cities in the world."
    },
    {
        icon: Globe,
        title: "A valued proposition",
        description: "A valued proposition for local domestic, retail and international investors."
    },
    {
        icon: Maximize,
        title: "1.5x Size of Singapore",
        description: "To be developed at 1.5x times the size of Singapore and approx the size of Shenzhen."
    },
    {
        icon: Landmark,
        title: "The Biggest hub of DMIC",
        description: "The Biggest hub of DMIC Dholera is well connected to Delhi-Mumbai Intl Corridor."
    },
    {
        icon: Handshake,
        title: "Joint Development",
        description: "Development plans undertaken jointly by Gujarat State Government and Central Government."
    },
    {
        icon: Medal,
        title: "First choice for smart investors",
        description: "First choice for smart investors owing to its strategic location, current prices and thrust from the government."
    }
];

export function WhyInvest() {
    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="flex items-center justify-center gap-2 text-[#EBC078] font-bold tracking-wide uppercase mb-3">
                        <span className="text-xl">✨</span> Why Invest in ✨
                    </span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif font-bold text-[#1a544e] mb-4"
                    >
                        Dholera ?
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#FFFBF2] p-6 rounded-2xl border border-[#EBC078]/30 flex flex-col items-center text-center hover:shadow-xl hover:border-[#EBC078] hover:-translate-y-1 transition-all duration-300 group cursor-default"
                        >
                            <div className="w-16 h-16 bg-[#1a544e] rounded-full flex-shrink-0 flex items-center justify-center text-[#EBC078] mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                                <feature.icon size={32} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#1a544e] mb-2 font-serif">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
