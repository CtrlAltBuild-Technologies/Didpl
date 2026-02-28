"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Projects() {
    return (
        <section className="py-24 bg-[#FFF8E7]/60">
            <Container>
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-bold text-[#1a544e] font-serif tracking-tight"
                    >
                        Our Projects
                    </motion.h2>
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                        <div className="w-2 h-2 rotate-45 bg-[#D4AF37]"></div>
                        <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Discover our premium developments designed for legitimate investment and modern living.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative min-h-[550px] w-full overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col"
                        >
                            {/* Background Dynamic Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1a544e]/5 via-[#fdfbf7] to-[#D4AF37]/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Decorative Blur Orbs */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37]/20 rounded-full blur-3xl group-hover:bg-[#D4AF37]/30 transition-colors duration-700" />
                            <div className="absolute top-20 -left-10 w-32 h-32 bg-[#1a544e]/10 rounded-full blur-2xl group-hover:bg-[#1a544e]/20 transition-colors duration-700" />

                            {/* Logo Section */}
                            <div className="relative h-[240px] flex-shrink-0 w-full bg-[#fdfbf7] border-b border-gray-100 flex items-center justify-center overflow-hidden p-6 mt-4">
                                <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-t-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]" />

                                <div className="relative w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700 ease-out">
                                    <Image
                                        src={project.logo || project.image}
                                        alt={project.title}
                                        fill
                                        className="object-contain p-4 md:p-8 drop-shadow-xl"
                                    />
                                </div>

                                {/* Status Badge */}
                                <div className="absolute top-4 right-4 z-20">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#e4c25f] blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
                                        <span className="relative bg-gradient-to-r from-[#1a544e] to-[#123935] text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.15em] shadow-lg border border-white/10">
                                            {project.status}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="relative flex-grow flex flex-col justify-between p-6 md:p-8 bg-white/80 backdrop-blur-lg border-t border-white shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.05)] z-20">
                                {/* Subtle Content Gradient */}
                                <div className="absolute bg-gradient-to-t from-white via-white to-transparent inset-0 z-0" />

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold text-[#1a544e] mb-2 leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-gray-500 mb-5 border-b border-gray-100 pb-4">
                                        <div className="w-6 h-6 rounded-full bg-[#1a544e]/5 flex items-center justify-center">
                                            <MapPin className="w-3.5 h-3.5 text-[#1a544e]" />
                                        </div>
                                        <span className="text-sm font-medium">{project.location}</span>
                                    </div>

                                    {/* Features List */}
                                    <div className="space-y-3">
                                        {project.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3 text-gray-600/90 text-sm">
                                                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-transparent flex items-center justify-center shrink-0">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                                                </div>
                                                <span className="font-light">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Button */}
                                <div className="mt-6 flex items-center gap-2 text-[#1a544e] font-bold text-sm tracking-wide uppercase relative z-10 group/btn w-max">
                                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] group-hover/btn:after:w-full after:transition-all after:duration-300">
                                        Explore Project
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-[#1a544e] text-white flex items-center justify-center transform group-hover/btn:translate-x-2 group-hover/btn:bg-[#D4AF37] transition-all duration-300 shadow-md">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/projects">
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-[#1a544e] border-[#1a544e] hover:bg-[#1a544e] hover:text-white px-8 h-12 rounded-full font-medium transition-all duration-300"
                        >
                            View All Projects
                        </Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
