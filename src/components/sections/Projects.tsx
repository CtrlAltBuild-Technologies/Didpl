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
                            className="group relative h-[500px] w-full overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                        >
                            {/* Background Image with Zoom Effect */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300" />

                            {/* Status Badge */}
                            <div className="absolute top-4 right-4 z-10">
                                <span className="bg-white/95 backdrop-blur-sm text-[#1a544e] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                                    {project.status}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end h-full">
                                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <div className="flex items-center gap-2 text-white/80 mb-2">
                                        <MapPin className="w-4 h-4" />
                                        <span className="text-sm font-medium">{project.location}</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 leading-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-[#D4AF37] font-bold text-lg mb-4">{project.price}</p>

                                    {/* Features List - Reveals on Hover (Desktop) / Always visible (Mobile) */}
                                    <div className="mb-6 space-y-2 opacity-100 md:opacity-0 md:h-0 md:group-hover:opacity-100 md:group-hover:h-auto transition-all duration-500 overflow-hidden">
                                        {project.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2 text-white/90 text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Action Button */}
                                    <div className="flex items-center gap-2 text-white font-medium group-hover:text-[#D4AF37] transition-colors duration-300">
                                        <span>View Details</span>
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
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
