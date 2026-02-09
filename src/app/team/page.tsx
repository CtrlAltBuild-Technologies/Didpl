"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Quote, ArrowRight, ArrowUpRight, Linkedin, ChevronDown } from "lucide-react";

const team = [
    {
        name: "Mr. Rajesh Patel",
        role: "Founder & CMD",
        image: "/images/team/founder-cmd.png",
        bio: "With over 25 years of experience in real estate and infrastructure development.",
        linkedin: "#"
    },
    {
        name: "Ms. Priya Sharma",
        role: "Head of Sales",
        image: "/images/team/head-of-sales.png",
        bio: "Leading our global sales strategy with a focus on Dholera SIR excellence.",
        linkedin: "#"
    },
    {
        name: "Mr. Amit Shah",
        role: "Legal Advisor",
        image: "/images/team/legal-advisor.png",
        bio: "Ensuring all our investments meet the highest standards of legal compliance.",
        linkedin: "#"
    }
];

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-white overflow-hidden">
            <HeroSection />
            <VisionarySection />
            <TeamGrid />
        </main>
    );
}

function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#1a544e] pt-24 lg:pt-32">
            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                {/* Sophisticated Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#1a544e] z-10" />
                <Image
                    src="/images/team/team-hero.png"
                    alt="DIDPL Leadership Team"
                    fill
                    className="object-cover scale-110"
                    priority
                />
            </motion.div>

            <Container className="relative z-20 text-center text-white w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-[1.1] mb-8 tracking-tight">
                        The Power of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-white to-[#D4AF37] bg-[length:200%_auto] animate-gradient-x">People & Vision</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-gray-200 leading-relaxed font-light mb-12">
                        Meet the visionaries, strategists, and experts orchestrating India's most ambitious urban development at Dholera SIR.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <div className="h-[1px] w-12 bg-[#D4AF37]/50" />
                        <span className="font-serif italic text-lg text-[#D4AF37]">United by Integrity</span>
                        <div className="h-[1px] w-12 bg-[#D4AF37]/50" />
                    </div>
                </motion.div>
            </Container>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 flex flex-col items-center gap-2 cursor-pointer hover:text-[#D4AF37] transition-colors"
                onClick={() => window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
            >
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Scroll to Explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ChevronDown size={24} strokeWidth={1} />
                </motion.div>
            </motion.div>
        </section>
    );
}

function VisionarySection() {
    return (
        <section className="py-24 bg-[#FAFAFA]">
            <Container>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-16 h-16 bg-[#1a544e] rounded-2xl flex items-center justify-center mx-auto mb-10 shadow-lg">
                        <Quote className="text-[#D4AF37] w-8 h-8" fill="currentColor" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1a544e] leading-snug mb-10 italic">
                        "At DIDPL, we are not just selling plots; we are curating the foundation of a new India. Our commitment is to transparency, innovation, and long-term value for every investor."
                    </h2>
                    <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto mb-6" />
                    <p className="text-[#1a544e] font-bold tracking-[0.2em] uppercase text-sm">Our Leadership Philosophy</p>
                </div>
            </Container>
        </section>
    );
}

function TeamGrid() {
    return (
        <section className="py-24 bg-white">
            <Container>
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a544e] mb-6">Execution & Governance</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">The core professionals leading our mission across vertical integration and strategic execution.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <div className="relative aspect-[3/4] bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 mb-8 group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a544e]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                    <div className="text-white">
                                        <p className="text-sm font-light mb-4 line-clamp-3">{member.bio}</p>
                                        <Link href={member.linkedin} className="inline-flex items-center gap-2 text-[#D4AF37] font-bold text-sm group/link">
                                            LinkedIn Profile <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-serif font-bold text-[#1a544e] mb-2">{member.name}</h3>
                                <div className="inline-flex items-center gap-3">
                                    <div className="h-[2px] w-6 bg-[#D4AF37]" />
                                    <p className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs">{member.role}</p>
                                    <div className="h-[2px] w-6 bg-[#D4AF37]" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}


