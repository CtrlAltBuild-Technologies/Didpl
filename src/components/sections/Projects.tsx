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

                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group relative flex flex-col bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#D4AF37]/30 transition-all duration-500 overflow-hidden"
                        >
                            {/* Hover Gradient Background Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1a544e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Decorative elements */}
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl group-hover:bg-[#D4AF37]/15 transition-colors duration-500" />

                            {/* Status Badge */}
                            <div className="absolute top-4 right-4 z-20">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-gray-50 text-gray-600 group-hover:bg-[#1a544e] group-hover:text-white transition-colors border border-gray-100 group-hover:border-[#1a544e]">
                                    {project.status === "Completed" && <Check className="w-3 h-3 mr-1" />}
                                    {project.status}
                                </span>
                            </div>

                            {/* Logo Display */}
                            <div className="relative h-48 w-full flex items-center justify-center mb-6 mt-4 mix-blend-multiply">
                                <div className="relative w-full h-full transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 ease-out">
                                    <Image
                                        src={project.logo || project.image}
                                        alt={project.title}
                                        fill
                                        className="object-contain p-2 drop-shadow-sm group-hover:drop-shadow-md transition-all duration-500"
                                    />
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent mb-6 group-hover:via-[#D4AF37]/20 transition-colors" />

                            {/* Content Details */}
                            <div className="flex-grow flex flex-col relative z-10">
                                <h3 className="text-xl font-bold font-serif text-[#1a544e] mb-2 leading-snug group-hover:text-[#D4AF37] transition-colors">
                                    {project.title}
                                </h3>

                                <div className="flex items-start gap-2 text-gray-500 mb-6">
                                    <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                                    <span className="text-sm leading-tight">{project.location}</span>
                                </div>

                                {/* Features List */}
                                <div className="space-y-2.5 mb-8 mt-auto">
                                    {project.features.slice(0, 3).map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#1a544e]/30 group-hover:bg-[#D4AF37] transition-colors" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Action Button */}
                                <div className="mt-auto group/btn inline-flex items-center gap-2 text-[#1a544e] font-semibold text-sm uppercase tracking-wide cursor-pointer w-fit">
                                    <span className="relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] group-hover/btn:after:w-full after:transition-all after:duration-300">
                                        View Details
                                    </span>
                                    <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center group-hover/btn:bg-[#1a544e] text-[#1a544e] group-hover/btn:text-white transition-all transform group-hover/btn:translate-x-1">
                                        <ArrowRight className="w-3 h-3" />
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
