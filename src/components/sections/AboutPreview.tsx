"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export function AboutPreview() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/about_us_hero.png"
                                alt="DIDPL Team working on blueprints"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Experience Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-accent text-white p-8 rounded-xl shadow-lg hidden md:block">
                            <div className="text-4xl font-bold mb-1">15+</div>
                            <div className="text-sm font-medium uppercase tracking-wider">Years of<br />Experience</div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <h4 className="text-accent font-bold tracking-wider uppercase mb-2">About Us</h4>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-dark mb-6">
                            Building Your Dreams with <br /> Trust & Transparency
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Dholera Infra Development Pvt. Ltd. (DIDPL) is an emerging yet fast rising name in India’s real estate landscape, driven by a powerful vision to shape the future of urban development in Dholera SIR : India’s first Greenfield Smart City.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Government Approved Projects",
                                "Transparent Documentation",
                                "End-to-End Assistance",
                                "Strategic Locations"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle className="text-accent shrink-0" size={20} />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link href="/about-us">
                            <Button size="lg">Know More About Us</Button>
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
